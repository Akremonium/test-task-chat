import Interlocutor from '../Interlocutor'
import ChatField from '../ChatField'
import MessageInput from '../MessageInput'

const ChatSection = ({contact, sendMessage}) => {
    return (
        <>
            <Interlocutor contact={contact} />
            <ChatField contact={contact}/>
            <MessageInput sendMessage={sendMessage}/>
        </>
    )
}

export default ChatSection