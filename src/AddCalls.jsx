import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import SelectClientes from './SelectClientes'
import SelectTelefonos from './SelectTelefonos'
import axios from 'axios'

const AddCalls = () => {
    const [dataClientes,setDataClientes] = useState([])
    const [dataTelefonos,setDataTelefonos] = useState([])
    const [idCliente,setIdCliente] = useState(2)
    const urlClientes = "http://45.236.130.191/api-prueba/llamadas.php?action=clientes"
    const urlTelefonos = "http://45.236.130.191/api-prueba/llamadas.php?action=telefonos"

    useEffect(() => {
        const getData = async () => {
            const responseClientes = await axios.get(urlClientes)
            setDataClientes(responseClientes.data)
            const responseTelefono = await axios.get(urlTelefonos)
            setDataTelefonos(responseTelefono.data)
        }
        getData()
    },[])



  return (
    <div>
        <NavBar/>
        <div className='container mt-5'>
            <SelectClientes dataCliente={dataClientes} setIdCliente={setIdCliente} />
            <SelectTelefonos dataTelefono={dataTelefonos} idCliente={idCliente} />
            <form action="">
                <div>
                    <label>Minutos Utilizados</label>
                    <input type="number" class="form-control" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button className='btn btn-primary mt-4'>Añadir</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddCalls
