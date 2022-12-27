import { Theme } from "../../components/Theme"
import * as C from "./styles"
import { Status } from "../../components/Status"

export function Orders() {
  return (
    <Theme>
      <C.Container>
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
            <tr>
              <td colSpan={4} className="no-orders">Nenhum pedido ainda</td>
            </tr>
            {/* <tr>
              <td><Status/></td>
              <td>0001</td>
              <td>1 x </td>
              <td>27/12/2022</td>
            </tr> */}
          </tbody>
        </C.Table>
      </C.Container>
    </Theme>
  )
}