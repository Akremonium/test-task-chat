import styles from './filter.module.css'

const Filter = ({ filter, onChange }) => (
    <form className={styles.searchForm}>
        <input value={filter} onChange={onChange} className={styles.searchInput} placeholder='Search or start new chat'></input>
    </form>
)

export default Filter