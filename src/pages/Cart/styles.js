import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  grid-template-areas: "cart payment";

  p {
    font-size: calc(0.8rem + 0.8vw);
    text-align: center;
  }

  .hide {
      display: none;
    }
  
  .show {
    display: block;
  }

  .content {
    display: flex;
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  @media (max-width: 800px){
    grid-template-columns: 100%;
    grid-template-areas: "all";
  }
`

export const Cart = styled.div`
  display: block;
  grid-area: cart;
  padding-right: calc(1rem + 2vw);
  height: 100%;

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
  }

  .cart-content {
    min-height: calc(20rem + 20vh);
    overflow-y: auto;
    height: 80%;

    svg {
      font-size: calc(2rem + 4vw);
    }
  }

  .cart-footer {
    display: flex;
    align-items: center;
    font-size: 2rem;
    gap: 1rem;
    margin-bottom: 2rem;
    height: 10%;

    button {
      display: none;
    }

    span {
      font-weight: 600;
    }

    @media (max-width: 800px){
      justify-content: space-between;

      button {
        display: block;
      }
    }
  }

  @media (max-width: 800px) {
    padding-right: 0;
    grid-area: all;
  }
`

export const Payment = styled.div`
  padding-left: calc(1rem + 2vw);
  grid-area: payment;
  height: 100%;

  h2 {
    height: 10%;
  }

  .container-payment {
    position: relative;
    width: 100%;
    height: 80%;
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
    width: 100%;
    padding: 0 calc(2rem + 4vw);

    .approved {
      svg {
        font-size: calc(3rem + 4vw);
      }
    }

    .waiting, .pix, .credit, .approved {
      height: 100%;

      p ~ svg {
        font-size: calc(5rem + 4vw);
      }

      button { 
        width: 100%;
        margin-top: 2rem;
      }
    }

    .waiting {
      svg {
        font-size: calc(3rem + 4vw);
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

  .btn-back-cart {
    margin-top: 1.2rem;
    display: none;
  }

  @media (max-width: 800px){
    grid-area: all;
    padding-left: 0;
    display: none;

    .btn-back-cart {
      display: block;
    }
  }
`
