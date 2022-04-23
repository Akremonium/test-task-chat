import { useState, useEffect } from "react"

const MessageInput = ({ sendMessage }) => {
    const [message, setMessage] = useState('')

    const onChange = (evt) => {
        evt.preventDefault()
        const { value } = evt.currentTarget;
        setMessage(value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()

        const newMessage = {
            author: 'user',
            text: message,
            date: new Date().toLocaleString('en-US')
        }
        sendMessage(newMessage)

        setMessage('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={message} onChange={onChange} title='Type your message here.'/>
        </form>
    )
}

export default MessageInput