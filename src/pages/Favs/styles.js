import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`
export const Content = styled.div`
  display: flex;

  .rec-pagination {
    display: none;
  }

  .rec-arrow {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  }

  .rec-arrow.rec-arrow-right:hover, .rec-arrow.rec-arrow-right:focus, .rec-arrow.rec-arrow-left:hover, .rec-arrow.rec-arrow-left:focus {
    filter: brightness(1.1);
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  }

`