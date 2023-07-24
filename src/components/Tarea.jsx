import PropTypes from 'prop-types';
import "./Tarea.css"
import { useState } from 'react';
import {Delete, Update, Save, Cancel, Edit} from "../assets/icons"

const Tarea =  ({texto, id, funcionEliminar, funcionEdicion}) => {
    const [editar, setEditar] = useState(false)
    const [textoInput, setTextoInput] = useState(texto);
    const [terminada, setTerminada] = useState(false)

    const funcionEditar = () => {
        // setTextoInput(texto)
        setEditar(true)
    }

    function funcionCambiaTexto (event){
        setTextoInput(event.target.value)
    }
    function funcionActualizar() {
        funcionEdicion(id, textoInput)
        setEditar(false)
    }

    function funcionCancelar(){
        setEditar(false)
    }
    function marcarTarea(event){
        if(event.target.checked){
            setTerminada(true)
            return
        }
        setTerminada(false)

    }
    return (
        <>
            <div className='card'>
                <input type='checkbox' onChange={marcarTarea} />
                <div className='card-text'>
                    { !editar && !terminada &&<p onDoubleClick={funcionEditar}>{texto}</p> }
                    { !editar && terminada && <s onDoubleClick={funcionEditar}>{texto}</s> }
                    { editar && <input type="text" value={textoInput} onChange={funcionCambiaTexto} 
                        onLostPointerCapture={funcionCancelar}
                    /> }
                </div>
            </div>
            <div className='buttons-section'>
                { !editar && <button  className='Editar' onClick={funcionEditar} >
                    <Edit  className="img-btn" />
                </button> }
                { !editar && <button  className="Eliminar" onClick={() => funcionEliminar(id)}>
                    <Delete className="img-btn" />
                </button> }
                { editar && <button className='Guardar' onClick={funcionActualizar}>
                    <Save className="img-btn" />
                </button> }
                { editar && <button className='Cancelar' onClick={funcionCancelar}>
                    <Cancel className="img-btn" />
                </button> }
            </div>
        </>
    )
}

Tarea.propTypes = {
    texto: PropTypes.string.isRequired,
    funcionEliminar: PropTypes.func.isRequired,
    funcionEdicion: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}
export default Tarea