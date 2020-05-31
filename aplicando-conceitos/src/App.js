import React from 'react';

const buttonA = <button>Exibir Histórico</button>
const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true;

const App = () => {
  {}
  const renderShowHistory = () => (
    <div>
      Clique no Botão abaixo para vizualizar o histórico de clientes.
      <br/>
      {buttonA}
    </div>
  )

  const renderAddCustomer = () => (
    <div>
      Clique abaixo para Cadastrar cliente.
      <br/>
      {buttonB}
    </div>
  )

  const showCustomer = () => {
    if(!hasCustomer) return null

    return (
      <div>
        <h1>Nome do cliente: Victor Gabriel</h1>
      </div>
    )
  }
  
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Seja bem vindo</p>
      <p>if inline com && operator/else inline</p>
      
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      <div>
        {showCustomer()}
      </div>
      </div>
      
  );
;}

export default App;
