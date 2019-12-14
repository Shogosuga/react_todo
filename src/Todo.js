import React, { Component }  from 'react';

class Todo extends Component {

    render() {
        const className = 'undone'
        const link = this.props.done ? 'retrun' : 'done!'
        return (
            <li className={className}>
                <span>
                    {this.props.id}
                </span>
                <span>
                    :{this.props.title}  
                </span>
                <a href="">
                    {link}
                </a>
                <p>
                    {this.props.desc}
                </p>
            </li>
        );
    } 
}

export default Todo