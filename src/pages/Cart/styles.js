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


  .content {
    display: flex;
    width: 100%;
    min-height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    gap: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    svg {
      font-size: 8rem;
    }
  }
`

export const Cart = styled.div`
  grid-area: cart;
  padding-right: 5rem;
  height: 100%;

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart-content {
    min-height: calc(20rem + 20vh);
    overflow-y: auto;
  }

  .cart-footer {
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 1rem;
  margin-bottom: 2rem;
  }
`

export const Payment = styled.div`
  padding-left: 5rem;
  grid-area: payment;
  height: calc(30rem + 30vh);

  h2 {
    margin-bottom: 2rem;
  }

  .container-payment {
    position: relative;
    width: 100%;
    height: 70%;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

  .header-payment {
    display: flex;
    height: 20%;

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
    height: 80%;

    .hide {
      display: none;
    }

    .waiting, .pix, .credit, .approved {
      height: 100%;

      svg {
        font-size: 10rem;
      }
    }


    .credit {
      font-size: 1.3rem;
      gap: 3rem;
      
      .input-wrapper {
        margin-top: 1.5rem;

         display: flex;
         gap: 1rem;
      }
    }
  }
`
