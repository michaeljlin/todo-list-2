import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingle, toggleComplete} from '../actions'

class SingleItem extends Component{
    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }

    toggleComplete(){
        console.log('Toggle Complete: ', this.props.single._id);
        this.props.toggleComplete(this.props.single._id);
    }

    render(){
        console.log('Props: ', this.props);

        const { single } = this.props;

        if(!single){
            return <div>Loading</div>
        }

        return(
            <div>
                <h3>{single.title}</h3>
                <p>Details: {single.details}</p>
                <p>Created By: {single.userId}</p>
                <p>Status: {single.complete ? 'Item Complete' : 'Item Incomplete'}</p>
                <button onClick={()=>this.toggleComplete()} className={`btn ${single.complete ? 'red' : 'green'}`}>{single.complete ? 'Restore' : 'Complete'}</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        single: state.todo.single
    }
}

export default connect(mapStateToProps, {getSingle, toggleComplete})(SingleItem);