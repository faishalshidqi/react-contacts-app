function ContactItemBody({name, tag}: {name: string; tag: string}) {
    return (
        <div className='contact-item__body'>
            <h3 className='contact-item__title'>{name}</h3>
            <h3 className='contact-item__username'>@{tag}</h3>
        </div>
    )
}

export default ContactItemBody