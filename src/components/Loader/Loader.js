import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Loader>
      <div className="spinner" />
    </Loader>
  );
};

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
  display: inline-block;
  width: 15rem;
  height: 15rem;
  border: 3px solid rgba(50,50,50,.3);
  border-radius: 50%;
  border-top-color: #eee;
  animation: spin 1s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  }
}

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
