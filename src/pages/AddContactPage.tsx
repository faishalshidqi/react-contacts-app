import {addContact} from "../utils/api.ts"
import ContactInput from "../components/ContactInput.tsx"
import {useNavigate} from "react-router-dom"

export default function AddContactPage() {
    const navigate = useNavigate()
    async function onAddContactHandler({name, tag}: {name: string, tag: string}) {
        await addContact({name, tag})
        navigate('/')
    }
    return (
        <section>
            <h2>Add Contact</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}