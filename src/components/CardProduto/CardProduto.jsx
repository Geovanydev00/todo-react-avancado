import {
  CardContainer,
  ProdutoNome,
  ProdutoPreco,
  BotaoCarrinho,
} from "./styles";

function CardProduto({ nome, preco, adicionado }) {
  return (
    <CardContainer>
      <ProdutoNome>{nome}</ProdutoNome>

      <ProdutoPreco>{preco}</ProdutoPreco>

      <BotaoCarrinho adicionado={adicionado}>
        {adicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </BotaoCarrinho>
    </CardContainer>
  );
}

export default CardProduto;