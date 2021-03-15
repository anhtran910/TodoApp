import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent/>
            </div>
        )
    }
}


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            username: 'in28minutes',
            password:  ''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
    }


    handleUsernameChange(event){
        console.log(event);
    }

    render(){
        return(
            <>
            User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
            Password: <input type="password" name="password" value={this.state.password}/>
            <button>Login</button>
            </>
        )
    }
}

export default TodoApp;

//this is test