const Filter = ({ filter, onChange }) => (
    <form>
        <input value={filter} onChange={onChange}></input>
    </form>
)

export default Filter