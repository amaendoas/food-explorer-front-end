import { Theme } from "../../components/Theme";
import * as C from "./styles";
import { Status } from "../../components/Status";
import { useAuth } from "../../contexts/auth";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Back } from "../../components/Back";
import { Loading } from "../../components/Loading";
import { Select } from "../../components/Select";
import { Alert } from "../../components/Alert";

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [dishes, setDishes] = useState([]);
  const { user, setShowLoading, showLoading, success, alertMsg, setAlertMsg, setSuccess } = useAuth();
  const [isSelected, setIsSelected] = useState(false);


  const options = [
    { value: 'pendente', label: 'pendente'},
    { value: 'preparando', label: 'preparando'},
    { value: 'entregue', label: 'entregue'}
  ]

  async function getOrders() {
    setShowLoading(true)
    try {
      let res
      if(user.isAdmin) {
        res = await api.get(`/orders`)
      } else {
        res = await api.get(`/orders/${user.id}`)
      }

      const data = res.data;
      getDishes(data)
      setOrders(reduceOrders(data))
      setShowLoading(false)
    } catch(error) {
      if(error.response) {
        console.error(error.response.data)
      } else {
        console.error(error.message)
      }
    }
  }

  function reduceOrders(arr) {
    const result = arr.reduce((acc, curr) => {
      const existing = acc.find(el => el.code === curr.code);
      if (existing) {
          existing.dishes.push({ dish_id: curr.dish_id, dish_quant: curr.dish_quant });
      } else {
        acc.push({
          code: curr.code,
          created_at: curr.created_at,
          id: curr.id,
          status: curr.status,
          user_id: curr.user_id,
          dishes: [{ dish_id: curr.dish_id, dish_quant: curr.dish_quant }]
        });
      }
      return acc;
    }, []);

    return result
  }

  function getDishes(data) {
    const userOrders = reduceOrders(data);
    userOrders.forEach((element) => {
      getDishName(element)
    })
  }

  async function getDishName(element) {
    let newDishes = []
    const dishes = element.dishes

    try {
      for (let index = 0; index < dishes.length; index++) {
        const { data } = await api.get(`/dishes/${dishes[index].dish_id}`)
        const existing = newDishes.find(el => el.dish_id === dishes[index].dish_id )
  
        if(!existing) {
          newDishes.push(
            {
              dish_id: data.id,
              dish_name: data.name
            })
        }
      }
    } catch(error) {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível exibir os pedidos')
        setSuccess(false)
      }
    }

    setDishes(newDishes)
  }

  function addZeroes(num) {
    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;
      
   while(counter < 6) {
      numberWithZeroes = "0" + numberWithZeroes;
      counter++;
    }
  
  return numberWithZeroes;
}

async function handleSelectStatus(selectedOption, code) {
  setShowLoading(true)
  setTimeout(async() => {
    try {
      await api.patch(`/orders/${code}`, {status: selectedOption.value})
      setAlertMsg(`o status do pedido ${code} foi alterado com sucesso!`)
      setSuccess(true)
      setShowLoading(false)
    } catch(error) {
      if(error.response) {
        setAlertMsg(error.response.data.message)
        setSuccess(false)
      } else {
        setAlertMsg('Não foi possível alterar o status do pedido')
        setSuccess(false)
      }
    }
  }, 2000)
}
  
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <Theme>
      {
        showLoading &&
        <Loading/>
      }
      <Alert msg={alertMsg} isSuccess={success}/>
      <C.Container>
        <Back/>
        <h2>Meus pedidos</h2>
        <C.Table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            { orders.length === 0 &&
              <tr>
                <td colSpan={4} className="no-orders">Nenhum pedido ainda</td>
              </tr>
            }
            { orders && dishes &&
              orders.map((order, index) => {
                return (
                  <tr key={index}>
                  <td className="status">
                    { user.isAdmin ?
                         <Select options={options} placeholder={order.status} onChange={(selectedOption) => handleSelectStatus(selectedOption, order.code)}/>
                       : <Status status={order.status}/>
                    }
                  </td>
                  <td>{addZeroes(order.code)}</td>
                  <td>
                    {
                      order.dishes.map((element, index) => {
                        const existing = dishes.find(el => el.dish_id === element.dish_id )
                        if(existing) {
                          return (
                            <p key={index}>{element.dish_quant} x {existing.dish_name}</p>
                            )
                        }
                      })
                    }
                    </td>
                  <td>{order.created_at}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </C.Table>
      </C.Container>
    </Theme>
  )
}