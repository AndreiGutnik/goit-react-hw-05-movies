import styled from 'styled-components';

export const MovieItemStyled = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  & a {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1.24;
    color: #000000;
  }

  & a:hover,
  & a:focus {
    color: #12b7dd;
    transform: scale(1.05);
    text-decoration: underline;
  }
`;
