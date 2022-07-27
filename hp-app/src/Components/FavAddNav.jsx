import addIcon from '../Assets/AddIcon.png'
import favIcon from '../Assets/saveCharIcon.svg'
import Modal from './Modal'
import Favorites from './Favorites'
import { useState } from 'react'
function FavAddNav({ loading, setLoading }) {
    const [isOpen, setIsOpen] = useState(false)
    const [seeFav, setSeeFav] = useState(false)
    return (
        <section className='favAdd_Container'>
            <section className='FavAdd_section'>
                <button className='FavAdd_btn' onClick={() => {
                    if (seeFav === false) {
                        setSeeFav(true)
                    }
                    else {
                        setSeeFav(false)
                    }
                }}>
                    Favoritos<img sr={favIcon} alt='Save icon' />
                </button>
                <button className='FavAdd_btn'
                    onClick={() => {
                        setIsOpen(true)
                    }}>Agregar<img src={addIcon} alt='Add icon' />
                </button>
                <section className='favAdd_Favs'>
                    <Favorites seeFav={seeFav} onCloseFav={() => setSeeFav(false)} ></Favorites>
                </section>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} loading={loading} setLoading={setLoading} >
                    Hello
                </Modal >
            </section >
        </section >
    )
}
export default FavAddNav
