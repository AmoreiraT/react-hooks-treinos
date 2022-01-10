import { TextField, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        required
        id="email"
        label="email"
        type={"email"}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        onChange={(e) => {
          setsenha(e.target.value);
        }}
        onBlur={validarCampos}
        required
        id="senha"
        label="senha"
        type={"password"}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
