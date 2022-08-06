import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.changeUserName = this.changeUserName.bind(this)
        this.changeFirstName= this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail= this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }
    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    changeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()
        
        const registered = {
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/sign-up', registered)
        .then(res => {
            console.log(res.data)
        })

        this.setState({
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                            placeholder='user name'
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='form-control form-group'
                            />

                            <input type="text"
                            placeholder="first name"
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                            className='form-control form-group'
                            />

                            <input type="text"
                            placeholder='last name'
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                            className='form-control form-group'
                            />
                            <input type="email"
                            placeholder='email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type="password"
                            placeholder='password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='submit' />
                            
                            
                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default App