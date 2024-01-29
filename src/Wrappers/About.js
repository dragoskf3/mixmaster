import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;
  .about-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  p {
    line-height: 2;
    color: var(--grey-500);
    margin: 0 auto;
    padding-top: 2rem;
    transition: var(--transition);
    width: 800px;
  }
  h3 {
    text-align: center;
    width: 300px;
    margin: 0 auto;
    transition: var(--transition);
  }
  h3:hover {
    border-bottom: 2px solid var(--primary-500);
  }
  p:hover {
    box-shadow: 10px 6px var(--primary-300);
    transform: translate(10px, 5px);
  }
`;

export default Wrapper;
