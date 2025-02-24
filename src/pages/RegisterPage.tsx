import RegisterUserInput from "../components/RegisterUserInput.tsx";
import {Link} from "react-router-dom";
import {register} from "../utils/api.ts";

export default function RegisterPage() {
    async function onRegisterHandler({name, email, password}: {name: string, email: string, password: string}) {
        await register({name, email, password});
    }
    return (
        <section className="register-page">
            <h2>Halaman Pendaftaran Pengguna</h2>
            <RegisterUserInput onRegister={onRegisterHandler}/>
            <p>Kembali ke <Link to={'/'}>Login</Link></p>
        </section>
    )
}