import PropTypes from "prop-types";
import React from "react";

const styling = {
    input: {},
    button: {
        color: 'green',
        borderWidth: '1px',
        borderRadius: '8px',
        borderColor: 'red',
        borderStyle: 'solid',
        padding: '15px',
        marginLeft: '10px',
        marginTop: '10px'
    },
}

function TodoItem({todo, index, onChange}) {
    console.log("todo", todo)
    return (<li>
        <span>
            <input style={styling.input} type='checkbox'/>
            <strong>{index + 1 + ") "}</strong>
            {todo.title}
        </span>

        <button style={styling.button} onClick={() => onChange(todo.id)}>x</button>
    </li>)
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onchange: PropTypes.func.isRequired
}

export default TodoItem