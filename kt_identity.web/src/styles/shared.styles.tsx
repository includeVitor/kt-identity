import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  gap: 2em;
  > button {
    width: 100%;
  }
`;

const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export { Form, Article };
