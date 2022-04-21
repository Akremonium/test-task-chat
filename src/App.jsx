import { useState, useEffect } from 'react'
import './App.css';
import useLocalStorage from "./Hooks/useLocalStorageHook";

import User from './Components/User'
import ContactsSection from './Components/ContactsSection'
import ChatSection from './Components/ChatSection'

import contactsList from './contacts.json'

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", contactsList);
  const [selectedContact, setSelectedContact] = useState({})
  const [filter, setFilter] = useState('')

  const idxOfSelectedContact = contacts.indexOf(contacts.find((contact)=>contact.name === selectedContact.name))

  useEffect(() => {
    // console.log(idxOfSelectedContact)
    console.log(selectedContact)
    let changedContacts = [...contacts]
    changedContacts[idxOfSelectedContact] = selectedContact
    // console.log(changedContacts)

    setContacts(changedContacts)
  }, [selectedContact])

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
    <div className="container">
      <User />
      <ContactsSection contacts={filteredContacts()}
        filter={filter} findContact={onFilter} chooseContact={chooseInterlocutor}
         />
      {/* <ChatSection contact={selectedContact} sendMessage={sendMessage}/> */}
    </div>
  );
}

export default App;
