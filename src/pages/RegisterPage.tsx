import RegisterUserInput from "../components/RegisterUserInput.tsx";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../utils/api.ts";

export default function RegisterPage() {
    const navigate = useNavigate()

    async function onRegisterHandler({name, email, password}: {name: string, email: string, password: string}) {
        const {error} = await register({name, email, password});
        if (!error) navigate('/')
    }
    return (
        <section className="register-page">
            <h2>Halaman Pendaftaran Pengguna</h2>
            <RegisterUserInput onRegister={onRegisterHandler}/>
            <p>Kembali ke <Link to={'/'}>Login</Link></p>
        </section>
    )
}