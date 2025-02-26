import ContactList from "../components/ContactList"
import {deleteContact, getContacts} from "../utils/api.ts"
import {useContext, useEffect, useState} from "react"
import SearchBar from "../components/SearchBar.tsx"
import {useSearchParams} from "react-router-dom"
import LocaleContext from "../contexts/LocaleContext.ts";

export default function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [contacts, setContacts] = useState([{id: '', name: '', email: '', tag: '', phoneNumber: '', imageUrl: ''}])
    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || ''
    })
    const {locale} = useContext(LocaleContext)
    useEffect(() => {
        getContacts().then(({data}) => {
            setContacts(data)
        })
    }, [])

    async function onDeleteHandler(id: string) {
        await deleteContact(id)
        const {data} = await getContacts()
        setContacts(data)
    }
    function onKeywordChangeHandler(keyword: string) {
        setKeyword(keyword)
        setSearchParams({keyword})
    }

    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(keyword.toLowerCase())
    })
    return (
       <section>
           <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
           <h2>{locale === 'id' ? 'Daftar Kontak' : 'Contacts List'}</h2>
           <ContactList contacts={filteredContacts} onDelete={onDeleteHandler} />
       </section>
    )
}
