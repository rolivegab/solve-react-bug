import React, { useState } from 'react'

const Contador = () => {
    const [valorDoContador, setValorDoContador] = useState(0)

    const incrementar = () => setValorDoContador(valorDoContador + 1)
    
    return (
        <div>
            <span>{valorDoContador}</span>
            <button onClick={incrementar}>Incrementar!!!</button>
        </div>
    )
}

export default Contador