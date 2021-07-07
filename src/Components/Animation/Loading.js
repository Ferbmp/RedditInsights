import React from "react";
import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes` 
100% { transform: rotate(360deg) }
`;

const Spinner = styled.div`
  width: 10em;
  height: 10em;
  border-top: 1em solid #6023c1;
  border-right: 1em solid transparent;
  border-radius: 50%;
  margin: auto;
  animation: ${SpinnerAnimation} 0.6s linear infinite;
`;

const Head = styled.div`
  width: 1em;
  height: 1em;
  background-color: #6023c1;
  border-radius: 50%;
  margin-left: 8.5em;
  margin-top: 0.5em;
`;

const Loading = () => {
  return (
    <>
      <Spinner>
        <Head />
      </Spinner>
    </>
  );
};
export default Loading;
