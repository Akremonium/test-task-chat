import { useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'

import styles from './chatField.module.css'

const ChatField = ({ interlocutor }) => {
    const bottomMessage = useRef(null)

  const scrollToBottom = () => {
    bottomMessage.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(() => {
        bottomMessage.current?.scrollIntoView()
  }, [interlocutor]);

  useEffect(() => {
    scrollToBottom()
  });

    if (interlocutor) {
        return (
        <ul className={styles.chatContainer}>
            {interlocutor.history.map((message) => {
                const date = new Date(message.date),
                    monthNum = date.getMonth() + 1,
                    monthForChat = (monthNum < 10) ? '0' + monthNum : monthNum,
                    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
                    year = date.getFullYear(),
                    hours = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
                    minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
                    AM_PM = date.getHours() > 12 ? "PM" : "AM",
                    time = hours + ':' + minutes + ' ' + AM_PM,
                dateForChat = monthForChat + '/' + day + '/' + year.toString().slice(-2)
                return (<li key={nanoid()} ref={bottomMessage} className={message.author === 'contact' ? styles.contactMessageContainer : styles.userMessageContainer}>
                            <div className={styles.messageContainer}>
                                {message.author === 'contact' && <img src={interlocutor.avatar} alt='Interlocutor Icon' className={styles.interlocutorIcon}/> }
                                <p className={message.author === 'contact' ? styles.contactMessage : styles.userMessage}>{message.text}</p>
                            </div>
                            <div className={styles.dateTimeContainer}>
                                <p>{dateForChat}</p>
                                <p className={styles.time}>{time}</p>
                            </div>
                        </li>)
            })}
        </ul>
    )
    }
    return (
        <div className={styles.chatContainer}></div>
    )
}

export default ChatField