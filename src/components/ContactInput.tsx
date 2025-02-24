import React from "react";

type ContactInputState = {
    name: string,
    tag: string,
}

type ContactInputProps = {
    addContact: ({name, tag}:{name: string, tag: string}) => void,
}

export default class ContactInput extends React.Component<ContactInputProps, ContactInputState> {
    constructor(props: ContactInputProps) {
        super(props);
        this.state = {
            name: '',
            tag: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
        this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this)
    }
    onNameChangeEventHandler(event: { target: { value: string; }; }) {
        this.setState(() => ({ name: event.target.value }));
    }
    onTagChangeEventHandler(event: { target: { value: string; }; }) {
        this.setState(() => ({ tag: event.target.value }));
    }
    onSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        this.props.addContact(this.state);
    }
    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmit}>
                <input type='text' placeholder='Enter Name...' value={this.state.name} onChange={this.onNameChangeEventHandler} />
                <input type='text' placeholder='Enter Username...' value={this.state.tag} onChange={this.onTagChangeEventHandler} />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}