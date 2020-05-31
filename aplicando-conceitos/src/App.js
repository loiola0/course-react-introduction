import React from 'react';

const buttonA = <button>Exibir Histórico</button>
const buttonB = <button>Segundo Botão</button>

const hasCustomer = true;

function App() {
  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Seja bem vindo</p>
      <p>if inline com && operator</p>
      {hasCustomer && (

          <div>
            Clique no botão para exibir o Histórico de clientes.
            <br/>
            {buttonA}
          </div>
          )
        }
      
      </div>
  );
}

export default App;
