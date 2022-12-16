import styled from "styled-components";

export const Container = styled.div`
  height: 45rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  text-align: center;
  gap: 1.6rem;
  margin-left: 5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 40px 4px rgba(0,0,0,0.56);
  -moz-box-shadow: 0px 0px 40px 4px rgba(0,0,0,0.56);
  box-shadow: 0px 0px 40px 4px rgba(0,0,0,0.56);

  
  .fav-btn, .edit-btn {
    position: absolute;
    top: 15px;
    right: 15px;

    svg {
      color: ${({theme}) => theme.COLORS.GRAY_200};
      font-size: 3rem;
    }
  }

  svg.red-heart {
    color: ${({theme}) => theme.COLORS.RED};
  }

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
  }

  h2 {
    font-size: 2.7rem;
  }

  .description {
      font-size: 1.2rem;
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

  .price {
    color: ${({theme}) => theme.COLORS.PRIMARY};
    font-size: 2.7rem;
  }

`

export const Count = styled.div`
  font-size: 2rem;
  width: 100%;
  gap: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    width: 2.8rem;
  }

  svg {
    font-size: 1.5rem;
    color: ${({theme}) => theme.COLORS.GRAY_200};
  }
`