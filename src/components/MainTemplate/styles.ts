import styled from "styled-components";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const WrapperOutlet = styled.div`
  flex-grow: 1;
  display: grid;
  width: 68%;
  /* margin: 0 auto; */
`;
export { StyledMainTemplate, WrapperOutlet };
