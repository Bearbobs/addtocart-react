import React, { Component } from 'react';
class Counter extends Component {
    

    render() { 
        let classes = this.getBadgeClass();
        
        return( <React.Fragment><span className= { classes }>{this.props.counter.value}</span>
        <button onClick={() =>this.props.onIncrement(this.props.counter)} className= "btn btn-secondary btn-sm">Increase</button>
        <button onClick={()=>this.props.onDelete(this.props.id)} className= "btn btn-danger btn-sm m-2">Delete</button>
            <br></br>
        </React.Fragment>);
        
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;