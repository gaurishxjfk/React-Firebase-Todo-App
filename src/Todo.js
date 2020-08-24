import React from 'react';
import './Todo.css'
import { List, ListItemText, ListItem } from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo__list">       
            <ListItem>
                <ListItemText primary={props.text} secondary="time"></ListItemText>
            </ListItem>      
           
        </List>
    )
}

export default Todo
