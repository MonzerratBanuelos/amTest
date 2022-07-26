import saveIcon from '../Assets/saveWhite.png'
import addIcon from '../Assets/AddIcon.png'
function FavAddNav() {
    return (
        <section className='FavAdd_section'>
            <button className='FavAdd_btn'
                onClick={() => {
                    console.log('Guardar')
                }}>Favoritos<img sr={saveIcon} alt='Save icon' /></button>
            <button className='FavAdd_btn'
                onClick={() => {
                    console.log('Agregar')
                }}>Agregar<img src={addIcon} alt='Add icon' /></button>
        </section >
    )
}
export default FavAddNav
