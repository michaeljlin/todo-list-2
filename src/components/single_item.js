import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingle, toggleComplete, deleteItem} from '../actions'
import { Link } from 'react-router-dom';

class SingleItem extends Component{
    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }

    toggleComplete(){
        console.log('Toggle Complete: ', this.props.single._id);
        this.props.toggleComplete(this.props.single._id);
    }

    toggleDelete(){
        this.props.deleteItem(this.props.single._id);
    }

    render(){
        console.log('Props: ', this.props);

        const { single } = this.props;

        if(!single){
            return <div>Loading</div>
        }

        // const date = new Date(parseInt(single.created));

        return(
            <div>
                <h3>{single.title}</h3>
                <p>Details: {single.details}</p>
                <p>Created By: {single.userId} on {Date(parseInt(single.created))}</p>
                <p>Status: {single.complete ? `Item Completed` : 'Item Incomplete'}</p>
                <button onClick={()=>this.toggleComplete()} className={`btn ${single.complete ? 'yellow darken-2' : 'green'}`}>{single.complete ? 'Restore' : 'Complete'}</button>
                <Link onClick={()=>this.toggleDelete()} className="btn red darken-2" style={{marginLeft: '8px'}} to="/">Delete</Link>
                <Link className="btn blue darken-2 right-align" to="/" style={{marginLeft: '8px'}}>Go Back</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        single: state.todo.single
    }
}

export default connect(mapStateToProps, {getSingle, toggleComplete, deleteItem})(SingleItem);