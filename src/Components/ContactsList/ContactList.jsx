import {useState, useEffect} from 'react'

import styles from './contactsList.module.css'

const ContactsList = ({ contacts, chooseContact }) => {
    const [selectedContact, setSelectedContact] = useState({})

    const onContactSelect = (value) => {
        setSelectedContact(value)
    }

    useEffect(() => {
        chooseContact(selectedContact)
    }, [selectedContact]
    )

    return (
        <ul className={styles.contactsList}>
        {contacts.sort((a, b) => {
            const aLastMessageTime = new Date(a.history[0].date),
                  bLastMessageTime = new Date(b.history[0].date)
            return bLastMessageTime - aLastMessageTime
        })
            .map((contact) => {
                const date = new Date(contact.history[contact.history.length - 1].date),
                    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    monthName = months[date.getMonth()],
                    monthNum = date.getMonth() + 1,
                    monthForChat = (monthNum < 10) ? '0' + monthNum : monthNum,
                    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
                    year = date.getFullYear(),
                    hours = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
                    minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
                    AM_PM = date.getHours() > 12 ? "PM" : "AM",
                    time = hours + '.' + minutes + ' ' + AM_PM,
                    dateForContactsList = monthName + ' ' + day + ',' + ' ' + year,
                    dateForChat = monthForChat + '/' + day + '/' + year.toString().slice(-2) + ', ' + time
                return (<li key={contact.name} onClick={() => onContactSelect(contact)}>
                    <img className={styles.icon} src={contact.avatar} alt={contact.name + 'icon'} />
                    <p>{contact.name}</p>
                    <p>{contact.history[contact.history.length - 1].text}</p>
                    <p>{dateForContactsList}</p>
                    <p>{dateForChat}</p>
                </li>)
            }
            )}
        </ul>
)}


export default ContactsList