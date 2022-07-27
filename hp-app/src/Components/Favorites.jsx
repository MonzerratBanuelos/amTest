import React from "react"
import { useDispatch, useSelector } from "react-redux"
import trashIcon from '../Assets/trashIcon.svg'
import { favActions } from "../store/fav-slice"
function Favorites({ seeFav, onCloseFav }) {
    const dispatch = useDispatch()
    const removeFav = () => {
        dispatch(
            favActions.removeFav({
            })
        )
    }

    const elementos = useSelector(state => state.fav.favList)
    console.log(elementos)
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