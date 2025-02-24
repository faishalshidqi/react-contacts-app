import {FiDelete} from "react-icons/fi"

export default function DeleteButton({id, onDelete}: {id: string, onDelete: (id: string) => void}) {
    return <button className='contact-item__delete' onClick={() => onDelete(id)}><FiDelete/></button>
}