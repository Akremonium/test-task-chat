import User from '../User'
import Filter from '../Filter'
import ContactsList from '../ContactsList'

import styles from './contactsSection.module.css'

const ContactsSection = ({contacts, filter, findContact, chooseContact}
) => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.userAndSearch}>
                <User/>
                <Filter filter={filter} onChange={findContact}/>
            </div>
            <ContactsList contacts={contacts} chooseContact={chooseContact}/>
        </section>
    )
}

export default ContactsSection