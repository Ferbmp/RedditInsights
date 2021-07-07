import React, { useCallback } from "react";
import { ButtonContainer, ShowMoreButton } from "./style";

const ShowMore = ({ setLimit, limit }) => {
  const LoadMore = useCallback(() => {
    setLimit(limit + 5);
  }, [limit, setLimit]);

  return (
    <>
      <ButtonContainer>
        <ShowMoreButton onClick={LoadMore}>
          {" "}
          <span>+</span> Mostrar Mais
        </ShowMoreButton>
      </ButtonContainer>
    </>
  );
};
export default ShowMore;
