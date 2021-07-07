import styled from "styled-components";
import { motion } from "framer-motion";
export const PostsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;
  align-items: center;
  padding: 0px 10rem;
  @media (max-width: 800px) {
    padding: 0px 1rem;
  }
`;

export const PostListContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Thumb = styled.div`
  width: auto;
  height: auto;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
`;

export const Post = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0.8rem;
  border-radius: 12px;
  border: 1px solid #6023c1;
  margin: 0.4rem 0px;
  background-color: #fff;

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    transition: 300ms ease;
    cursor: pointer;
  }
`;

export const PostInfo = styled.div`
  padding: 0 10px;
  h4 {
    font-weight: 500;
    font-size: 0.9rem;
  }
  span {
    color: #7c7c7c;
  }
  span:last-child {
    color: #6023c1;
  }
  h5 {
    margin: 6px auto;
    font-weight: 400;
  }
  p {
    font-size: 0.4rem;
    font-weight: 500;
    color: #1b1b1b;
  }

  a {
    text-decoration: none;
    color: #6023c1;
    font-size: 0.475rem;

    :hover {
      color: #ff5722;
      transition: 350ms;
    }
  }
`;

export const InpuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(to bottom right, #6023c1, #9d50bb);
  padding: 2rem;
  border-radius: 4px;
  div {
    width: 100%;
    color: #fff;

    input {
      width: 100%;
      height: 60px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.03);
      border: none;
      outline: none;
      padding: 0rem 1rem;
      font-size: 1.5rem;
      letter-spacing: 2px;

      @media (max-width: 800px) {
        font-size: 1rem;
      }

      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }
  }
`;
