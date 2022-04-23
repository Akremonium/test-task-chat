import { useState } from 'react'

import Interlocutor from '../Interlocutor'
import ChatField from '../ChatField'
import MessageInput from '../MessageInput'

const ChatSection = ({ interlocutor, sendMessage }) => {
        return (
        <section>
            <Interlocutor interlocutor={interlocutor} />
            <ChatField interlocutor={interlocutor}/>
            <MessageInput sendMessage={sendMessage}/>
        </section>
    )
}

export default ChatSection