import ContactItemImage from "./ContactItemImage.tsx"
import ContactItemBody from "./ContactItemBody.tsx"
import DeleteButton from "./DeleteButton.tsx"

function ContactItem({id, imageUrl, name, tag, onDelete}: {id: number, name: string, tag: string, imageUrl: string, onDelete: (id: number) => void}) {
    return (
        <div className='contact-item'>
            <ContactItemImage imageUrl={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    )
}

export default ContactItem