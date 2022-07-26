import saveImg from '../Assets/saveImg.png'
function CharCard({ characters }) {
    return (<div className='homePage_container'>
        {characters && characters.map((character) => (
            <section key={character.name}
                className="charCard_container"
                onClick={() => {
                    console.log(`Hola soy ${character.name}`)
                }}>
                <section className={`charCard_imgContainer  ${character.house}`}>
                    <figure>
                        <img src={character.image} alt={character.name} />
                    </figure>
                </section>
                <section className='charCard_text'>
                    <section className='charCard_save'>
                        <p>{character.alive === true ? 'VIVO' : 'FINADO'} / {character.hogwartsStudent === true ? 'ESTUDIANTE' : 'STAFF'}</p>
                        <img src={saveImg} alt='Save Character' />
                    </section>
                    <h2><span></span>{character.name}</h2>
                    <p><span>Cumpleaños:</span>{character.dateOfBirth}</p>
                    <p><span>Género:</span>{character.gender}</p>
                    <p><span>Color de ojos:</span>{character.eyeColour}</p>
                    <p><span>Color de pelo:</span>{character.hairColour}</p>
                </section>

            </section>
        ))
        }
    </div >
    )
}
export default CharCard