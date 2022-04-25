import Interlocutor from '../Interlocutor'
import ChatField from '../ChatField'
import MessageInput from '../MessageInput'

import styles from './chatSection.module.css'

const ChatSection = ({ interlocutor, sendMessage, setMessageReciever }) => {
        return (
        <section className={styles.chatSectionContainer}>
            <Interlocutor interlocutor={interlocutor} />
            <ChatField interlocutor={interlocutor}/>
                <MessageInput sendMessage={sendMessage} interlocutor={interlocutor} setMessageReciever={setMessageReciever}/>
        </section>
    )
}

export default ChatSection