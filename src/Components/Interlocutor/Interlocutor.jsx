import styles from './interlocutor.module.css'

const Interlocutor = ({ interlocutor }) => {
    if (interlocutor) {
        return (
            <div className={styles.container}>
                <img className={styles.interlocutorIcon} src={interlocutor.avatar} alt='Interlocutor avatar' />
                <p className={styles.name}>{interlocutor.name}</p>
            </div>
        )
    }
    return (
        <div className={styles.container}></div>
    )
}

export default Interlocutor