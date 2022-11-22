const listaClientes = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json()); 
//abre una conexion a la url, le recibe en el arrow function y lo pasa JSON

export const clientServices = {
    listaClientes,
}