import React from "react"
import { useSelector } from "react-redux"
import trashIcon from '../Assets/trashIcon.svg'
function Favorites({ seeFav, onCloseFav }) {
    const elementos = useSelector(state => state.fav.favList)
    if (!seeFav) return null
    return (<>
        {elementos && elementos.map((favChar) => (
            <div className='favorites_card' key={favChar.id}>
                <img src={favChar.image} width='30px' alt='Favorite character' />
                <p>{favChar.name}</p>
                <button className="favorites_deletebtn"><img src={trashIcon} alt='Trash Icon' onClick={() => {
                    console.log(`Eliminar a ${favChar.name}`)
                }} /></button>
            </div>
        ))}
    </>
    )
}
export default Favorites