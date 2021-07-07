import React, { useCallback } from "react";
import { ButtonContainer, ShowMoreButton } from "./style";

const ShowMore = ({ setLimit, limit }) => {
  const LoadMore = useCallback(() => {
    setLimit(limit + 5);
  }, [limit]);

  const loadMore = () => {
    setLimit(limit + 5);
  };

  return (
    <>
      <ButtonContainer>
        <ShowMoreButton onClick={loadMore}>
          {" "}
          <span>+</span> Mostrar Mais
        </ShowMoreButton>
      </ButtonContainer>
    </>
  );
};
export default ShowMore;
