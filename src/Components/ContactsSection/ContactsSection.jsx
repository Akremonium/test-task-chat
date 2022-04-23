import User from '../User'
import Filter from '../Filter'
import ContactsList from '../ContactsList'

const ContactsSection = ({contacts, filter, findContact, chooseContact}
) => {
    return (
        <section>
            <User/>
            <Filter filter={filter} onChange={findContact}/>
            <ContactsList contacts={contacts} chooseContact={chooseContact}/>
        </section>
    )
}

export default ContactsSection