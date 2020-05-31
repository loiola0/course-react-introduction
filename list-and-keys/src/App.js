import React from 'react';

const buttonA = <button>Exibir Histórico</button>
const buttonB = <button>Cadastrar Cliente</button>

const listCustomer = [
  {
    id: 1,
    name: 'Victor Martins',
    skills: ['js','node']
  },
  {
    id: 2,
    name: 'José Ajax',
    skills: ['js','node','css']
  },
  {
    id: 3,
    name: 'Marcelo Spring',
    skills: ['html','c++','c','Go']
  },
  {
    id: 4,
    name: 'Barack Havans',
    skills: ['react','react-native','pascal']
  },
  {
    id: 5,
    name: 'Vilgaxe de Sousa',
    skills: ['typerscript','php','java']
  },
];

const App = () => {
  

  const renderCustomers = (customer,index) => {
    return (
      <div  key={`customer-${customer.id}`}>
        
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}

      </div>
    );
  }

  const renderSkills = (skill,index) =>{
    return (
      <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    );
  }


  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Seja bem vindo</p>
      <p>if inline com && operator/else inline</p>
      <div>

        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>

      </div>
      </div>
      
  );
;}

export default App;
