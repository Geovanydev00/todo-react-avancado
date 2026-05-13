import CardProduto from "./components/CardProduto/CardProduto";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      <CardProduto
        nome="Headphone Gamer RGB"
        preco="R$ 299,90"
        adicionado={true}
      />

      <CardProduto
        nome="Mouse Gamer"
        preco="R$ 149,90"
        adicionado={false}
      />
    </div>
  );
}

export default App;