import Navigation from "./Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import AddContactPage from "../pages/AddContactPage.tsx";
import {Component} from "react"

export default class ContactApp extends Component<unknown, {userAuthed: {id: string, name: string}}> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            userAuthed: {
                id: '',
                name: '',
            },
        }
    }
    render() {
        console.log(!this.state.userAuthed);
        if (!this.state.userAuthed) {
            return (
                <div className='contact-app'>
                    <header className='contact-app__header'>
                        <h1>Contacts App</h1>
                        <Navigation/>
                    </header>
                    <main>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/add' element={<AddContactPage/>}/>
                        </Routes>
                    </main>
                </div>
            )
        }

        return (
            <div className='contact-app'>
                <header className='contact-app__header'>
                    <h1>Contacts App</h1>
                    <Navigation/>
                </header>
                <main>
                    <Routes>
                        <Route path='/*' element={<p>Halaman Login</p>}/>
                        <Route path='/register' element={<p>Halaman Register</p>}/>
                    </Routes>
                </main>
            </div>
        )
    }
}

/*
type ContactState = {
    contacts: Contact[];
}

export default class ContactApp extends React.Component<unknown, ContactState> {
    constructor(props: {contacts: Contact[], onDelete: (id: number) => void}) {
        super(props);
        this.state = {
            contacts: getContacts(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }
    render() {
        return (
            <div className='contact-app'>
                <h1>Contacts App</h1>
                <h2>Add Contact</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2>Contact List</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
    onDeleteHandler(id: number) {
        const contacts: Contact[] = this.state.contacts.filter(contact => contact.id !== id)
        this.setState({contacts: contacts})
    }
    onAddContactHandler({name, tag}: { name: string, tag: string }) {
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    new Contact(+new Date(), name, tag, '/images/default.jpg'),
                ]
            }
        })
    }
}
 */
