import {Component} from "react"

export default class RegisterUserInput extends Component<unknown, {name: string, email: string, password: string}> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }
    onNameChange = (event: { target: { value: string } }) => {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }
    onEmailChange = (event: { target: { value: string } }) => {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }
    onPasswordChange = (event: { target: { value: string } }) => {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }
    render() {
        return (
            <form>
                <input type='text' placeholder='Name' value={'name'} onChange={this.onNameChange}/>
                <input type='email' placeholder='Email' value={'email'} onChange={this.onEmailChange}/>
                <input type='password' placeholder='Password' autoComplete='current-password' value={'password'} onChange={this.onPasswordChange}/>
                <button>Register</button>
            </form>
        )
    }
}