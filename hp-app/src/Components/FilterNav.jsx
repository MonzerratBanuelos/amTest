function FilterNav({ rol, setRol, characters, setCharacters }) {
    const getStudent = () => {
        setRol('hogwartsStudent')
    }

    const getStaff = () => {
        setRol('hogwartsStaff')
    }
    return (
        <section className="filter_section">
            <button className="filterNav_btn"
                onClick={() => {
                    getStudent()
                }}>ESTUDIANTES</button>
            <button className="filterNav_btn"
                onClick={() => {
                    getStaff()
                }}>STAFF</button>
        </section>
    )
}
export default FilterNav