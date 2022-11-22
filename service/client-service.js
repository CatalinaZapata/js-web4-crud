const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json()); 
//abre una conexion a la url, le recibe en el arrow function y lo pasa JSON

const crearCliente = (nombre, email) => {
    return fetch('http://localhost:3000/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, email, id: uuid.v4()})
    })
}

const eliminarCliente = (id) => {
    return fetch (`http://localhost:3000/perfil/${id}`, {
        method: 'DELETE',
    });
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
}