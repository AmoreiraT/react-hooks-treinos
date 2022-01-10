import React, { Component } from "react";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';
import { validarCPF, validarSenha } from "./models/cadastro";

import {Container, Typography } from "@material-ui/core"
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h4" align="left" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}>
            <FormularioCadastro aoEnviar={aoEnviarForm}/>
           </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
