import { useEffect } from 'react'
import { useState } from 'react'
import CharCard from '../Components/CharCard'
import FilterNav from '../Components/FilterNav'
import FavAddNav from '../Components/FavAddNav'
import backgroundHG from '../Assets/Background.png'
import HPLogo from '../Assets/Harry-Potter-logo.png'
function HomePage() {
    const [characters, setCharacters] = useState([])
    const [rol, setRol] = useState('')
    const [loading, setLoading] = useState(false)
    function getData() {
        const url = 'http://localhost:4001/characters'
        fetch(url).then((response) => response.json()).then((result) => {
            if (rol === '') {
                setCharacters(result)
            } else if (rol === 'hogwartsStudent') {
                const students = result.filter((student) => student.hogwartsStudent === true)
                setCharacters(students)
            } else if (rol === 'hogwartsStaff') {
                const staff = result.filter((char) => char.hogwartsStaff === true)
                setCharacters(staff)
            }
        }
        )
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rol, loading])
    return (
        <div className='homePage_main'>

            <img id='homePage_background' src={backgroundHG} alt='Harry Potter Background' />
            <FavAddNav loading={loading} setLoading={setLoading} />
            <img id='homePage_logo' src={HPLogo} alt='Harry Potter Logo' />
            <h2>Selecciona tu filtro</h2>
            <FilterNav characters={characters} setCharacters={setCharacters} rol={rol} setRol={setRol} />
            <CharCard characters={characters} />
        </div>
    )
}

export default HomePage