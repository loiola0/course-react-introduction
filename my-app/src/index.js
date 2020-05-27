import React from 'react'

import ReactDom from 'react-dom'

import './styles.css'

function sum(a,b){
    return a+b;
}


function primeiroJsx(){
    return (
    <div className="teste">
        Victor Gabriel - Introdução ao reactJs.
    <h1>Soma: {sum(12,8)}</h1>
    </div>
    );
}


const App = () =>{
    return(
        <div className='App'>
            Hello World!

            {primeiroJsx()}
            
        </div>
    );
}

const rootElement = document.getElementById('root')

ReactDom.render(<App/>, rootElement)