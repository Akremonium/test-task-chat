import { useState } from "react"
import axios from 'axios';

import styles from './input.module.css'

const MessageInput = ({interlocutor, sendMessage, setMessageReciever }) => {
    const [message, setMessage] = useState('')

    const onChange = (evt) => {
        evt.preventDefault()
        const { value } = evt.currentTarget;
        setMessage(value)
    }

    const fetchJoke = async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/random")
        const data = await response.data
        const newResponse = {
            author: 'contact',
            text: data.value,
            date: await new Date().toLocaleString('en-US')
        }
        
        const randomTimeout = Math.random() * (15000 - 10000) + 10000

        setTimeout(() => {
            sendMessage(newResponse)
        }, randomTimeout)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()

        const newMessage = {
            author: 'user',
            text: message,
            date: new Date().toLocaleString('en-US')
        }

        if (message) {
            sendMessage(newMessage)
        }

        setMessageReciever(interlocutor)

        setMessage('')
        fetchJoke()
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={onSubmit} className={styles.form}>
                <label className={styles.inputContainer}>
                    <input value={message} onChange={onChange} title='Type your message here.' className={styles.input} placeholder='Type your message'/>
                     <img className={styles.sendIcon} src="./send_icon.png" alt="send-img" onClick={onSubmit}/>
                </label>
        </form>
        </div>
    )
}

export default MessageInput