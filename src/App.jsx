import { useState } from 'react'
import './App.css'
import Tarea from './components/tarea'
import {Add} from "./assets/icons"

function App() {

    const [id, setId] = useState(1)
    const [listaTareas, setListaTareas] = useState([{texto: "Tarea por defecto", id: id}])

    const agregarTarea = (event) => {
        event.preventDefault()
        if(tarea.value === ""){
            alert("No hay nada para agregar")
            return 
        }
        listaTareas.push({texto: tarea.value, id: id + 1})
        tarea.value = ""
        setListaTareas( [...listaTareas])
        setId(id + 1)
    }

    function eliminarTarea(id){
        setListaTareas(listaTareas.filter( tarea => tarea.id !== id ))
    }

    function editarTarea (id, texto){
        const indice = listaTareas.findIndex(tarea => tarea.id === id)
        console.log(id, texto)
        if (indice !== -1){
            listaTareas[indice].texto = texto
            setListaTareas([...listaTareas])
        }
    }
  return (
    <div className='contenedor-principal'>

        <div className="header">

            <h1>Lista de Tareas</h1>

            <form onSubmit={agregarTarea} className='form-entrada'>
                <textarea type="text" id="tarea" placeholder='Nueva tarea'></textarea> 
                <button className='agregar'>
                    <Add  className="img-btn" />
                </button>
            </form>
        </div>

        <ul className="lista">
            {listaTareas.map(({texto, id}) => {
                return <li key={id}>
                    <Tarea texto={texto} 
                    funcionEliminar={eliminarTarea} 
                    funcionEdicion={editarTarea}
                    id={id}
                    ></Tarea>
                </li>
            })}
        </ul>
    </div>
  )
}

export default App
