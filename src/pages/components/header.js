import React from 'react'
import illustration from "../imgs/undraw_code_thinking_1jeh.svg"
import Form from "./contact.form"

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className=" flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-800 text-4xl">¡Hola! Soy Alejandro Cruz</h1>
                    <p className="font-light text-xl">Ingeniero Electrónico y Telecomunicaciones</p>
                </div>
                <img src={illustration} alt="Hombre seleccionando elemento" style={{height: "250px"}}></img>
            </div>
            <div>
                <Form />
            </div>
        </div>
        
    </header>
)