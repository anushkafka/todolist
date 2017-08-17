import React from 'react'

export const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input  type="text" value={props.currentTodo} 
                onChange={props.handleInputChange}></input>
    </form>
)

TodoForm.propTypes = {
    currentTodo: React.PropTypes.string,
    handleInputChange: React.PropTypes.func,
    handleSubmit: React.PropTypes.func
} 