import React from "react";

// class Welcome extends React.Component{
//     render(){
//     return( <h1> Welcome</h1>);
// }
// }

let Welcome =(props)=>{
    // props can't chaged it's immutable
    // this.props={
    //     name:"Hello Props..!"
    // }
    return(<h1>Welcome {props.name} </h1>)
}


export default Welcome;