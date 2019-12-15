import React, { Component } from 'react'

class Form extends Component  {
    render()  {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" placeholder="title" defaultValue="react" />
                    <br/>
                    <textarea name="desc" placeholder="description" defaultValue="todo"></textarea><br/>
                    <button type='submit'>GO!</button>
                </form>
            </div>
        )
    }
}

export default Form