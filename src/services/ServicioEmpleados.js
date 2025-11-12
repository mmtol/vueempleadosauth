import axios from "axios";
import Global from "@/Global";

export default class ServiceEmp
{
    iniciarSesion(usuario)
    {
        return new Promise(function(resolve)
        {
            var url = Global.emp;
            var endPoint = "Auth/Login";

            axios.post(url+endPoint, usuario).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getPerfil(token)
    {
        return new Promise(function(resolve)
        {
            var url = Global.emp;
            var endPoint = "api/Empleados/PerfilEmpleado";

            axios.get(url+endPoint, {headers: {'Authorization': `Bearer ${token}`}}).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getSubs(token)
    {
        return new Promise(function(resolve)
        {
            var url = Global.emp;
            var endPoint = "api/Empleados/Subordinados";

            axios.get(url+endPoint, {headers: {'Authorization': `Bearer ${token}`}}).then(response =>
            {
                resolve(response.data);
            })
        })
    }
}