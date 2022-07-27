import saveImg from '../Assets/saveImg.png'
import avatar from '../Assets/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { favActions } from '../store/fav-slice'
function CharCard({ char, name, image, id }) {

    const dispatch = useDispatch()
    const addFavorite = () => {
        dispatch(
            favActions.addFavorite({
                name: name,
                image: image,
                id: id
            })
        )
    }
    return (
        <section className="charCard_container">
            <section className={`charCard_imgContainer  ${char.house}`}>
                <figure>
                    <img src={char.image || avatar} alt={char.name} />
                </figure>
            </section>
            <section className='charCard_text'
                style={char.alive === true ? { backgroundColor: 'white' } : { backgroundColor: '#CCCCCC' }}>
                <section className='charCard_save'>
                    <p>{char.alive === true ? 'VIVO' : 'FINADO'} / {char.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}</p>
                    <img
                        src={saveImg}
                        alt='Save Character'
                        onClick={() => {
                            addFavorite()
                        }} />
                </section>
                <h2>{char.alive === true ? `${char.name}` : `+${char.name}`}</h2>
                <p><span>Cumpleaños:</span>{char.dateOfBirth}</p>
                <p><span>Género:</span>{char.gender}</p>
                <p><span>Color de ojos:</span>{char.eyeColour}</p>
                <p><span>Color de pelo:</span>{char.hairColour}</p>
            </section>

        </section>
    )
}
export default CharCard