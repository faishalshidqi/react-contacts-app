import {Component} from "react"

export default class LoginInput extends Component<{onLogin: ({email, password}: {email: string, password: string}) => void}, {email: string, password: string}> {
    constructor(props: { onLogin: ({ email, password }: { email: string; password: string }) => void }) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
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
    onSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        this.props.onLogin(this.state)
    }
    render() {
        // tester192129@mail.com:password
        return (
            <form className="login-input" onSubmit={this.onSubmit}>
                <input type='email' placeholder={'Email'} value={this.state.email} onChange={this.onEmailChange}/>
                <input type='password' placeholder={'Password'} value={this.state.password} onChange={this.onPasswordChange}/>
                <button>Login</button>
            </form>
        )
    }
}