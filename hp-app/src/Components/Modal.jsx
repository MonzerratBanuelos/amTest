import { useState } from "react"
function Modal({ open, onClose, loading, setLoading }) {
  const [newChar, setNewChar] = useState({
    name: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    gender: "",
    hogwartsStudent: false,
    hogwartsStaff: false,
    image: ""
  })

  const submitData = async (e) => {
    setLoading(true)
    e.preventDefault()
    await postInJSON()
    onClose()
    setLoading(false)
  }

  const postInJSON = () => {
    const url = 'http://localhost:4001/characters'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newChar)
    })
      .then((response) => response.json())
  }
  if (!open) return null
  return (
    <div className="modal_window">
      <section className="modal_header">
        <h2>Agrega un personaje</h2>
        <button onClick={onClose}>X</button>
      </section>
      <form className="fields_space" onSubmit={(e) => { submitData(e) }}>
        <section className="inputs_group">
          <label>NOMBRE</label>
          <input
            className="modal_input"
            type='text'
            name='name'
            onChange={(e) => setNewChar({ ...newChar, name: e.target.value })} />
        </section>
        <section className="inputs_group">
          <label >CUMPLEAÑOS</label>
          <input
            className="modal_input"
            type='date'
            name='dateOfBirth'
            onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value })} />
        </section>
        <section className="inputs_group">
          <label>COLOR DE OJOS</label>
          <input className="modal_input"
            type='text'
            name='eyeColour'
            onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value })} />
        </section>
        <section className="inputs_group">
          <label>COLOR DE PELO</label>
          <input className="modal_input"
            type='text'
            name='hairColour'
            onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value })} />
        </section>
        <section className="inputs_group radiobtn">
          <label>GÉNERO</label>
          <section className="radiobtn">
            <label>Mujer</label>
            <input type="radio"
              name="gender"
              value="female"
              onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value })} />
            <label>Hombre</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value })} />
          </section>
        </section>
        <section className="inputs_group radiobtn">
          <label>POSICIÓN</label>
          <section className="radiobtn">
            <label>Estudiante</label>
            <input
              type="radio"
              name="hogwartsStudent"
              value='true'
              onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value === 'true' })} />
            <label>Staff</label>
            <input
              type="radio"
              name="hogwartsStaff"
              value='true'
              onChange={(e) => setNewChar({ ...newChar, [e.target.name]: e.target.value === 'true' })} />
          </section>
        </section>
        <section className="inputs_group">
          <label>FOTOGRAFIA</label>
          <input type="file" />
        </section>
        <button className="modal_btn">GUARDAR</button>
      </form >


    </div >
  )
}

export default Modal