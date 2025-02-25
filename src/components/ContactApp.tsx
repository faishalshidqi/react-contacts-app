import Navigation from "./Navigation.tsx"
import {Route, Routes} from "react-router-dom"
import HomePage from "../pages/HomePage.tsx"
import AddContactPage from "../pages/AddContactPage.tsx"
import {Component} from "react"
import RegisterPage from "../pages/RegisterPage.tsx"
import LoginPage from "../pages/LoginPage.tsx"
import {getUserLogged, setAccessToken} from "../utils/api.ts";
import {LocaleProvider} from "../contexts/LocaleContext.ts";

type ContactAppState = {
    initializing: boolean,
    userAuthed: { id: string, name: string, email: string },
    localeContext: {
        locale: string,
        toggleLocale: () => void,
    }
}

export default class ContactApp extends Component<unknown, ContactAppState> {
    constructor(props: unknown) {
        super(props)
        this.state = {
            userAuthed: {
                id: '',
                name: '',
                email: '',
            },
            initializing: true,
            localeContext: {
                locale: localStorage.getItem('locale') || 'id',
                toggleLocale: () => {
                    this.setState((prevState) => {
                        const newLocale = prevState.localeContext.locale === 'id' ? 'en': 'id'
                        localStorage.setItem('locale', newLocale)
                        return {
                            localeContext: {
                                ...prevState.localeContext,
                                locale: newLocale
                            }
                        }
                    })
                }
            }
        }
        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }
    async onLoginSuccess({accessToken}: {accessToken: string}) {
        setAccessToken(accessToken)
        const {data} = await getUserLogged()
        this.setState(() => {

            return {
                userAuthed: data,
            }
        })
    }
    onLogout() {
        this.setState(() => {
            return {
                userAuthed: {
                    id: '',
                    name: '',
                    email: '',
                }
            }
        })
        setAccessToken('')
    }
    async componentDidMount() {
        const {data} = await getUserLogged()
        this.setState(() => {
            return {
                userAuthed: data,
                initializing: false,
            }
        })
    }
    render() {
        if (this.state.initializing) {
            return null
        }
        if (!this.state.userAuthed.id && !this.state.userAuthed.email && !this.state.userAuthed.name) {
            return (
                <LocaleProvider value={this.state.localeContext}>
                    <div className='contact-app'>
                        <header className='contact-app__header'>
                            <h1>Contacts App</h1>
                        </header>
                        <main>
                            <Routes>
                                <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess}/>}/>
                                <Route path='/register' element={<RegisterPage/>}/>
                            </Routes>
                        </main>
                    </div>
                </LocaleProvider>
            )
        }

        return (
            <LocaleProvider value={this.state.localeContext}>
                <div className='contact-app'>
                    <header className='contact-app__header'>
                        <h1>{this.state.localeContext.locale === 'id' ? 'Aplikasi Kontak' : 'Contacts App'}</h1>
                        <Navigation logout={this.onLogout} name={this.state.userAuthed.name}/>
                    </header>
                    <main>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/add' element={<AddContactPage/>}/>
                        </Routes>
                    </main>
                </div>
            </LocaleProvider>
        )
    }
}

/*
type ContactState = {
    contacts: Contact[]
}

export default class ContactApp extends React.Component<unknown, ContactState> {
    constructor(props: {contacts: Contact[], onDelete: (id: number) => void}) {
        super(props)
        this.state = {
            contacts: getContacts(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddContactHandler = this.onAddContactHandler.bind(this)
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
