import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  grid-template-areas: "cart payment";

  h2 {
    font-size: 2.5rem;
    font-weight:500;
  }
`

export const Cart = styled.div`
  grid-area: cart;
  padding-right: 5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  min-height: calc(20rem + 20vh);
  
  div.empty-cart {
    display: flex;
    width: 100%;
    min-height: 20rem;
    justify-content: center;
    align-items: center;
  }

`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;

` 

export const Payment = styled.div`
  padding-left: 5rem;
  grid-area: payment;

  h2 {
    margin-bottom: 2rem;
  }

  .container-payment {
    width: 100%;
    min-height: calc(20rem + 25vh);
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  .header-payment {
    display: flex;
    align-items: center;

    .title-payment {
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      padding: 2rem 0;
      gap: 2rem;
      font-size: 1.7rem;
      border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    .selected{
      background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
  }

  .content-payment {
    
    .hide {
      display: none;
    }
  }



`
