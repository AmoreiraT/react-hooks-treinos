import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setcep] = useState("");
  const [endereco, setendereco] = useState("");
  const [numero, setnumero] = useState("");
  const [bairro, setbairro] = useState("");
  const [estado, setestado] = useState("");
  const [cidade, setcidade] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, bairro, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setcep(e.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={endereco}
        onChange={(e) => {
          setendereco(e.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(e) => {
          setnumero(e.target.value);
        }}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={bairro}
        onChange={(e) => {
          setbairro(e.target.value);
        }}
        id="bairro"
        label="Bairro"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(e) => {
          setestado(e.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(e) => {
          setcidade(e.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
