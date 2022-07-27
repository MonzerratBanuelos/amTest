import addIcon from '../Assets/AddIcon.png'
import favsIcon from '../Assets/iconFavs.svg'
import Modal from './Modal'
import Favorites from './Favorites'
import { useSelector } from 'react-redux'
function FavAddNav({ loading, setLoading, isOpen, setIsOpen, seeFav, setSeeFav }) {
    const showFavs = useSelector((state) => state.fav.showFav)
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
                    Favoritos<img sr={favsIcon} alt='Save icon' />
                </button>
                <button className='FavAdd_btn'
                    onClick={() => {
                        setIsOpen(true)
                    }}>Agregar<img src={addIcon} alt='Add icon' />
                </button>
                <section className='favAdd_Favs'>
                    {showFavs && <Favorites seeFav={seeFav} onCloseFav={() => setSeeFav(false)} ></Favorites>}
                </section>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} loading={loading} setLoading={setLoading} >
                    Hello
                </Modal >
            </section >
        </section >
    )
}
export default FavAddNav
