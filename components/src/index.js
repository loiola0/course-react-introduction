import React from 'react'

import ReactDom from 'react-dom'

import Button from './Button'

import ComponentA from './ComponentA'

import ComponentB from './ComponentB'


import './styles.css'



function sum(a,b){
    alert(a+b);
}


const App = () =>{
    return(
        <div className='App'>
            Hello World!
            
            <Button onClick={() => sum(12,4)} name="Victor Gabriel"/>

            <ComponentA>
                <ComponentB>
                    <Button onClick={() => sum(2,3)} name="Martins"/>
                </ComponentB>
            </ComponentA>


        </div>
    );
}

const rootElement = document.getElementById('root')

ReactDom.render(<App/>, rootElement)