import styles from './contactsList.module.css'

const ContactsList = ({ contacts }) => (
        <ul className={styles.contactsList}>
            {contacts.map(({ name, avatar, history }) => {
                const time = history[history.length - 1].time
                const date = new Date(history[history.length - 1].date),
                    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    monthName = months[date.getMonth()],
                    monthNum = date.getMonth() + 1,
                    monthForChat = (monthNum < 10) ? '0' + monthNum : monthNum,
                    day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
                    year = date.getFullYear()
                    {/* // hour = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()),
                    // minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
                    // AM_PM = date.getHours() > 12 ? "PM" : "AM"; */}
                const dateForContactsList = monthName + ' ' + day + ',' + ' ' + year
                const dateForChat = monthForChat + '/' + day + '/' + year.toString().slice(-2) + ', ' + time
                return (<li key={name}>
                    <img className={styles.icon} src={avatar} alt={name + 'icon'}/>
                    <p>{name}</p>
                    <p>{history[history.length - 1].text}</p>
                    <p>{dateForContactsList}</p>
                    <p>{dateForChat}</p>
                </li>)
            }
            )}
        </ul>
    )


export default ContactsList