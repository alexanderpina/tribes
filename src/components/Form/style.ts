import styled from 'styled-components';

const FieldComponent = styled.p`
  input {
    background: #666;
    border: none;
    border-bottom: 3px solid #E57728;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    padding: 15px 0 15px 22px;
    width: 100%;
  }
`;

const FieldLabel = styled.label`
  color: #fff;
  display: block;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Error = styled.span`
  display: block;
`;

export const Styles = {
  Error,
  FieldComponent,
  FieldLabel
}