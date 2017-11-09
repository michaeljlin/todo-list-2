import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from "../actions";
import { Link } from 'react-router-dom';

class TodoList extends Component{
    componentDidMount(){
        this.props.getAll();
    }

    renderList(){
        return this.props.todos.map((item, index) => {
            console.log("To do item: ",item);
            return (
                <li className="collection-item" key={index}>
                    <Link to={`/item/${item._id}`}>{item.title}</Link>
                </li>
            );
        })
    }

    render(){
        return(
            <div>
                <h1 className="center-align">To do list v2</h1>
                <Link className="btn" to="/add-item">Add Item</Link>
                <ul className="collection">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todo.all
    }
}

export default connect(mapStateToProps, { getAll })(TodoList);