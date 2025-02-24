import {login} from "../utils/api.ts"
import {Link} from "react-router-dom"
import LoginInput from "../components/LoginInput.tsx"

export default function LoginPage({loginSuccess}: {loginSuccess: ({accessToken}: {accessToken: string}) => void}) {
    async function onLoginHandler({email, password}: {email: string, password: string}) {
        const {error, data} = await login({email, password})
        if (!error) loginSuccess(data)
    }
    return (
        <section className="login-page">
            <h2>Halaman Login</h2>
            <LoginInput onLogin={onLoginHandler} />
            <p>Belum punya akun? <Link to={'/register'}>Daftar di sini.</Link></p>
        </section>
    )
}