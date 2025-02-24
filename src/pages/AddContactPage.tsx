import {addContact} from "../utils/data.ts";
import ContactInput from "../components/ContactInput.tsx";
import {useNavigate} from "react-router-dom";

export default function AddContactPage() {
    const navigate = useNavigate()
    const onAddContactHandler = ({name, tag}: {name: string, tag: string}) => {
        addContact({name, tag});
        navigate('/');
    }
    return (
        <section>
            <h2>Add Contact</h2>
            <ContactInput addContact={onAddContactHandler} />
        </section>
    )
}