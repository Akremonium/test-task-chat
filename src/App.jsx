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
  const [messageReciever, setMessageReciever] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setMessageReciever(selectedContact)
  }, [newMessage])

  useEffect(() => {
    if (messageReciever) {

      const idxOfMessageReciever = contacts.indexOf(contacts.find((contact) => contact.name === messageReciever.name))
      
      if (newMessage) {
        let changedContacts = [...contacts]
        changedContacts[idxOfMessageReciever].history.push(newMessage)

        setContacts(changedContacts)
        setNewMessage('')
      }
    }
  }, [newMessage])

  // useEffect(() => {
  //   if (newMessage) {
  //         messageReciever.history.push(newMessage)
  //         setNewMessage('')
  //     }
  // })

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
      <ContactsSection contacts={filteredContacts().sort((a, b) => {
            const aLastMessageTime = new Date(a.history[a.history.length - 1].date),
                  bLastMessageTime = new Date(b.history[b.history.length - 1].date)
            return bLastMessageTime - aLastMessageTime
        })}
        filter={filter} findContact={onFilter} chooseContact={chooseInterlocutor}
         />
      <ChatSection interlocutor={selectedContact} sendMessage={sendMessage} setMessageReciever={setMessageReciever}/>
    </div>
  );
}

export default App;
