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
                <li className={`collection-item darken-2 ${item.complete ? 'green' : 'red'}`} key={index}>
                    <Link to={`/item/${item._id}`} style={{color: 'white'}}>{item.title}</Link>
                </li>
            );
        })
    }

    renderCompleted(){
        return this.props.todos.map((item, index) => {
            console.log("To do item: ",item);

            if(item.complete){
                return (
                    <li className={`collection-item darken-2 ${item.complete ? 'green' : 'red'}`} key={index}>
                        <Link to={`/item/${item._id}`} style={{color: 'white'}}>{item.title}</Link>
                    </li>
                );
            }
        })
    }

    renderIncomplete(){
        return this.props.todos.map((item, index) => {
            console.log("To do item: ",item);

            if(!item.complete){
                return (
                    <li className={`collection-item darken-2 ${item.complete ? 'green' : 'red'}`} key={index}>
                        <Link to={`/item/${item._id}`} style={{color: 'white'}}>{item.title}</Link>
                    </li>
                );
            }
        })
    }

    render(){
        return(
            <div className="container">
                <h1 className="center-align">To do list v2</h1>
                <Link className="btn" to="/add-item">Add Item</Link>
                <div className="row">
                    <div className="col s6">
                        <h4 className="center-align">Completed</h4>
                        <ul className="collection">
                            {this.renderCompleted()}
                        </ul>
                    </div>
                    <div className="col s6">
                        <h4 className="center-align">Incomplete</h4>
                        <ul className="collection">
                            {this.renderIncomplete()}
                        </ul>
                    </div>
                </div>
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