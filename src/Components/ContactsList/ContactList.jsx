import {useState, useEffect} from 'react'

import styles from './contactsList.module.css'

const ContactsList = ({ contacts, chooseContact }) => {
    const [selectedContact, setSelectedContact] = useState('')
    const [sortedContacts, setSortedContacts] = useState([])

    const onContactSelect = (value) => {
        setSelectedContact(value)
    }

    useEffect(() => {
        const sortedList = [...contacts].sort((a, b) => {
            const aLastMessageTime = new Date(a.history[0].date),
                  bLastMessageTime = new Date(b.history[0].date)
            return bLastMessageTime - aLastMessageTime
        })

        setSortedContacts(sortedList)            
    }, [contacts])

    useEffect(() => {
        if (selectedContact) {
            chooseContact(selectedContact)
        }
    }, [selectedContact]
    )

    return (
        <ul className={styles.contactsList}>
            {
                sortedContacts
            .map((contact) => {
                const date = new Date(contact.history[contact.history.length - 1].date),
                    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    monthName = months[date.getMonth()],
                    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
                    year = date.getFullYear(),
                    dateForContactsList = monthName + ' ' + day + ', ' + year
                return (<li key={contact.name} onClick={() => onContactSelect(contact)}>
                    <img className={styles.icon} src={contact.avatar} alt={contact.name + 'icon'} />
                    <p>{contact.name}</p>
                    <p>{contact.history[contact.history.length - 1].text}</p>
                    <p>{dateForContactsList}</p>
                </li>)
            }
            )}
        </ul>
)}


export default ContactsList