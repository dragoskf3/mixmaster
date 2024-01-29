import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 800px;
  align-items: center;
  margin: 0 auto;
`;

export default Wrapper;
