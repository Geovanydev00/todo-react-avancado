import styled from "styled-components";

export const CardContainer = styled.div`
  width: 320px;
  padding: 24px;

  border-radius: 12px;
  background-color: white;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProdutoNome = styled.h2`
  font-size: 22px;
  color: #212529;
`;

export const ProdutoPreco = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #0d6efd;
`;

export const BotaoCarrinho = styled.button`
  padding: 12px;

  border: none;
  border-radius: 8px;

  color: white;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.3s;

  background-color: ${({ adicionado }) =>
    adicionado ? "#198754" : "#6c757d"};

  &:hover {
    opacity: 0.9;
  }
`;