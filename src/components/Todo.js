import React, {PropTypes} from 'react'
import {ListGroupItem} from 'react-bootstrap';

const Todo = ({onClick, completed, text, id}) => (
    <ListGroupItem
        onClick={onClick}
        style={{
            textAlign: 'center',
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
    </ListGroupItem>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo