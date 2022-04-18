import Filter from '../Filter'
import ContactsList from '../ContactsList'

const ContactsSection = ({contacts, filter, findContact, chooseContact}
) => {
    return (
        <>
            <Filter filter={filter} onChange={findContact}/>
            <ContactsList contacts={contacts} chooseContact={chooseContact}/>
        </>
    )
}

export default ContactsSection