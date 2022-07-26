import saveIcon from '../Assets/saveWhite.png'
import addIcon from '../Assets/AddIcon.png'
import Modal from './Modal'
import { useState } from 'react'
function FavAddNav({ loading, setLoading }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section className='FavAdd_section'>
            <button className='FavAdd_btn'
                onClick={() => {
                    console.log('Guardar')
                }}>Favoritos<img sr={saveIcon} alt='Save icon' /></button>
            <button className='FavAdd_btn'
                onClick={() => {
                    setIsOpen(true)
                }}>Agregar<img src={addIcon} alt='Add icon' />
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} loading={loading} setLoading={setLoading} >
                Hello
            </Modal >
        </section >
    )
}
export default FavAddNav
