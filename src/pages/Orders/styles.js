import styled from "styled-components";

export const Container = styled.div`
  font-size: calc(0.8rem + 0.5vw);
  height: 100%;
  
  h2 {
    height: 10%;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  height: 80%;
  
  th, td {
    text-align: start;
    padding: 1.6rem 0 1.6rem 1.6rem;
    border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_600};
  }

  td.no-orders {
    text-align: center;
  }
`