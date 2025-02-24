import {Component} from "react"

export default class RegisterUserInput extends Component<{onRegister: ({email, password, name}: {email: string, password: string, name: string}) => void}, {name: string, email: string, password: string}> {
    constructor(props: { onRegister: ({ email, password, name }: { email: string, password: string, name: string }) => void }) {
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
    onSubmitHandler = (event: { preventDefault: () => void })=>  {
        event.preventDefault()
        this.props.onRegister(this.state)
        this.setState(() => {
            return {
                name: '',
                email: '',
                password: ''
            }
        })
}
    render() {
        return (
            <form className='register-input' onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder='Name' value={this.state.name} onChange={this.onNameChange}/>
                <input type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange}/>
                <input type='password' placeholder='Password' autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange}/>
                <button>Register</button>
            </form>
        )
    }
}