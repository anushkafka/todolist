import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
    return (
        <div>
            {
                props.todos.map(
                    todo => <TodoItem key={todo.id}{...todo}/>
                )
            }
        </div>
    )
}

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
}