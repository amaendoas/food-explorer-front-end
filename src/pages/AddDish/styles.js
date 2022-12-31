import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  h2 {
    height: 10%;
  }
`

export const Content = styled.div `
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  .inputs-container {
    display: flex;
    gap: 2rem;
    width: 100%;
  }

  .input-wrapper {
    width: 100%;
  }

  .category-wrapper {
    width: 50%;
  }

  .price {
    flex-grow: 1;
  }

  .inputs-container:nth-child(1) {
    div:nth-child(1) {
      width: 30%;
    }
    div:nth-child(2) {
      width: 70%;
    }
  }

  .inputs-container:nth-child(2) {
    flex-wrap: wrap;
    .input-wrapper {
      width: auto;
      flex-grow: 1
    }
  }

  .ingredients-wrapper {
    display: flex;
    width: fit-content;
    gap: 1rem;
    height: 4.2rem;
    align-items: center;
    padding: 0 1rem;
    position: relative;
  }
  
  textarea {
    height: 10rem;
    padding: 1rem;
  }
  
  .ingredients-wrapper, textarea {
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    width: 100%;
    border-radius: 5px;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }

  button.add-btn {
    color: ${({theme}) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.SECONDARY};
    padding: 1rem 4rem;
    width: fit-content;
    margin-bottom: 2rem;
    align-self: end;
  }

  .warning {
    position: absolute;

    color: ${({theme}) => theme.COLORS.RED};
    font-weight: 500;
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    .inputs-container:nth-child(1) {
      div:nth-child(1) {
        width: 100%;
      }
      div:nth-child(2) {
        width: 100%;
      }
    }
    
    .inputs-container {
      flex-direction: column;
      gap: 1rem;
      width: 100%;
    }

    .category-wrapper {
      width: 50%;
    }
  }

`