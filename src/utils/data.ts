import Contact from "./contact.ts";

let contacts = [
    new Contact(
            1,
            'Dimas Saputra',
            'dimasmds',
            '/images/dimasmds.jpeg',

        ),
        new Contact(
            2,
            'Arif Faizin',
            'arifaizin',
            '/images/arifaizin.jpeg',
        ),
        new Contact(
            3,
            'Rahmat Fajri',
            'rfajri27',
            '/images/rfajri27.jpeg',
        )
]

function addContact({name, tag}: {name: string, tag: string}): void {
    contacts = [...contacts, new Contact(+new Date(), name, tag, '/images/default.jpg')]
}

function deleteContact(id: number) {
    contacts = contacts.filter(contact => contact.id !== id)
}

const getContacts = () => {
    return contacts;
    /*
    return [
        {
            id: 1,
            name: 'Dimas Saputra',
            tag: 'dimasmds',
            imageUrl: '/images/dimasmds.jpeg',
        },
        {
            id: 2,
            name: 'Arif Faizin',
            tag: 'arifaizin',
            imageUrl: '/images/arifaizin.jpeg',
        },
        {
            id: 3,
            name: 'Rahmat Fajri',
            tag: 'rfajri27',
            imageUrl: '/images/rfajri27.jpeg',
        },
    ];
    */
}

export {getContacts, addContact, deleteContact};