import { useState, useEffect } from 'react'
import './App.css';
import useLocalStorage from "./Hooks/useLocalStorageHook";

import ContactsSection from './Components/ContactsSection'
import ChatSection from './Components/ChatSection'

import contactsList from './contacts.json'

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", contactsList);
  const [selectedContact, setSelectedContact] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [filter, setFilter] = useState('')

  const idxOfSelectedContact = contacts.indexOf(contacts.find((contact)=>contact.name === selectedContact.name))

  useEffect(() => {
    if (selectedContact) {

      if (newMessage) {
        selectedContact.history.push(newMessage)
        setNewMessage('')
      }

      let changedContacts = [...contacts]
      changedContacts[idxOfSelectedContact] = selectedContact

      setContacts(changedContacts)
    }
  }, [selectedContact, newMessage])

  const onFilter = (event) => {
    setFilter(event.currentTarget.value)
  }

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase()

    return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  const chooseInterlocutor = (contact) => {
    setSelectedContact(contact)
  }

  const sendMessage = (message) => {
    if (selectedContact) {
      setNewMessage(message)
    }
  }

  return (
    <div className="container">
      <ContactsSection contacts={filteredContacts()}
        filter={filter} findContact={onFilter} chooseContact={chooseInterlocutor}
         />
      <ChatSection interlocutor={selectedContact} sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
