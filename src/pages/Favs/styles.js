import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  `
export const Content = styled.div`
  display: flex;
  overflow-y: scroll;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem 0;

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