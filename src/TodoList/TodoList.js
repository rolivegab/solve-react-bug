import React, { useState } from 'react'

const TodoList = () => {
    const [list, setList] = useState([])

    const adicionar = (item) => {
        setList([...list, item])
    }

    return (
        <div>
            <ul>
                {list.map(i => (
                    <li>{i}</li>
                ))}
            </ul>
            <button onClick={adicionar('TESTE')}>Adicionar 'TESTE' na lista</button>
            <button onClick={adicionar('ROUPA')}>Adicionar 'ROUPA' na lista</button>
        </div>
    )
}

export default TodoList