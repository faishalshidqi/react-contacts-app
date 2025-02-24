import ContactItem from "./ContactItem.tsx"
import Contact from "../utils/contact.ts"

export default function ContactList({contacts, onDelete}: { contacts: Contact[], onDelete: (id: number) => void }) {
    return (
        <div className='contact-list'>
            {
                contacts.map((contact: Contact) => (
                    <ContactItem {...contact} key={contact.id} onDelete={onDelete}/>
                ))
            }
        </div>
    )
}
