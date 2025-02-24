import ContactList from "../components/ContactList"
import {deleteContact, getContacts} from "../utils/data.ts"
import {Component} from "react"
import Contact from "../utils/contact.ts"
import SearchBar from "../components/SearchBar.tsx"
import {useSearchParams} from "react-router-dom"

export default function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get("keyword") !== null ? searchParams.get("keyword")! : ''

    function changeSearchParams(keyword: string) {
        setSearchParams({keyword})
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends Component<{defaultKeyword: string, keywordChange: (keyword: string) => void}, {contacts: Contact[], keyword: string}> {
    constructor(props: { defaultKeyword: string, keywordChange: (keyword: string) => void }) {
        super(props)
        this.state = {
            contacts: getContacts(),
            keyword: props.defaultKeyword || '',
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }
    async componentDidMount() {
        const {data} = await getContacts()
        this.setState(() => {
            return {
                contacts: data
            }
        })
    }

    async onDeleteHandler(id: string) {
        await deleteContact(id)
        const {data} = await getContacts()
        this.setState({ contacts: data })
    }
    onKeywordChangeHandler(keyword: string) {
        this.setState(() => {
            return {
                keyword: keyword
            }
        })
        this.props.keywordChange(keyword)
    }
    render() {
        const contacts = this.state.contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(this.state.keyword.toLowerCase())
        })
        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h2>Contacts List</h2>
                <ContactList contacts={contacts} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}