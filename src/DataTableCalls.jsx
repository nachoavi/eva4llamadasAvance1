import React from 'react'
import NavBar from './NavBar'


const DataTable = () => {
  return (
    <div>
        <NavBar/>
        <h1>Llamadas Realizadas</h1>
        <div className='container mt-5 mb-5'>
            <select className='form-select '>
                <option>Seleccionar cliente</option>
            </select>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Numero</td>
                    <td className='table-success'>Minutos disponibles</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
  )
}

export default DataTable
