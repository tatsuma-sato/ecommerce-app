import React from "react";

import styled from "styled-components/macro";
import { useUserContext } from "../context/user_context";
import { Loading } from "../components";

const AuthWrapper = ({ children }) => {
  const { checkingStatus } = useUserContext();
  if (checkingStatus) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
