import styled from 'styled-components';

export const Container = styled.div`
  height: calc(35rem + 5vw);
  width: calc(19rem + 7vw) ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  text-align: center;
  gap: 1.3rem;
  margin-left: 5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.56);
  grid-template-columns: 50% 50%;
  grid-template-areas:
  "img title"
  "img description"
  "img ingredients"
  "img cart";

  .fav-btn,
  .edit-btn {
    position: absolute;
    top: 15px;
    right: 15px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: calc(2rem + 1.2vw);
    }
  }

  svg.red-heart {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  img {
    width: calc(10rem + 4vw);
    height: calc(10rem + 4vw);
    border-radius: 50%;
    object-fit: cover;
  }

  .description {
    font-size: calc(1rem + 0.3vw);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  
  .price {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: calc(1.8rem + 0.5vw);
  }

`;