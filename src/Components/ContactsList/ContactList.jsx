import {useState, useEffect} from 'react'

import styles from './contactsList.module.css'

const ContactsList = ({ contacts, chooseContact }) => {
    const [selectedContact, setSelectedContact] = useState('')

    const onContactSelect = (value) => {
        setSelectedContact(value)
    }

    useEffect(() => {
        if (selectedContact) {
            chooseContact(selectedContact)
        }
    }
    )

    return (
        <div className={styles.contactListContainer}>
            <h3 className={styles.contactsTitle}>Chats</h3>
            <ul className={styles.contactsList}>
            {
                contacts
            .map((contact) => {
                const date = new Date(contact.history[contact.history.length - 1].date),
                    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    monthName = months[date.getMonth()],
                    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
                    year = date.getFullYear(),
                    dateForContactsList = monthName + ' ' + day + ', ' + year
                return (
                    <li key={contact.name} onClick={() => onContactSelect(contact)} className={styles.contactListItem}>
                        <img className={styles.icon} src={contact.avatar} alt={contact.name + 'icon'} />
                        <div className={styles.contactDataContainer}>
                            <div className={styles.nameContainer}>
                                <p className={styles.contactName}>{contact.name}</p>
                                <p className={styles.lastMessage}>{contact.history[contact.history.length - 1].text}</p>
                            </div>
                            <p className={styles.date}>{dateForContactsList}</p>
                        </div>
                    </li>)
            }
            )}
        </ul>
        </div>
)}


export default ContactsList