import { useState } from 'react'
import './App.css';

import User from './Components/User'
import ContactsSection from './Components/ContactsSection'
import ChatSection from './Components/ChatSection'

import contacts from './contacts.json'

function App() {
  const [selectedContact, setSelectedContact] = useState('')
  const [filter, setFilter] = useState('')

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

    const sendMessage = (msg) => {
      selectedContact.history.push(msg)
  }

  return (
    <>
      <User />
      <ContactsSection contacts={filteredContacts} filter={filter} findContact={onFilter} chooseContact={chooseInterlocutor} />
      <ChatSection contact={selectedContact} sendMessage={sendMessage}/>
    </>
  );
}

export default App;
