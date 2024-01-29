import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;

  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
    width: 400px;
  }
  .drink-info {
    padding-top: 2rem;
    margin-left: 2rem;
  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  .drink {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 992px) {
    .drink {
      flex-direction: column;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
  .back-home {
    margin-top: 2rem;
    text-align: center;
  }
`;

export default Wrapper;
