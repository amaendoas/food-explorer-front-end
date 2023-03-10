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

    .select-div {
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
    }
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
  }

  .ingredients-wrapper {
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
    gap: 10px;
    width: fit-content;
  }

  textarea {
    height: 10rem;
    padding: 1rem;
  }

  textarea, .ingredients-wrapper {
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
      width: 100%;
    }
  }

`