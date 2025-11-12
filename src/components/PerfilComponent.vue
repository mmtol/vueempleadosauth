<template>
    <div>
        <h1>PERFIL</h1>
        <div>
            <table class="table table-form">
                <thead>
                    <tr>
                        <th>Id Empleado</th>
                        <th>Apellido</th>
                        <th>Oficio</th>
                        <th>Salario</th>
                        <th>Director</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{perfil.idEmpleado}}</td>
                        <td>{{perfil.apellido}}</td>
                        <td>{{perfil.oficio}}</td>
                        <td>{{perfil.salario}}</td>
                        <td>{{perfil.director}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ServicioEmp from "./../services/ServicioEmpleados";
    const service = new ServicioEmp();

    export default 
    {
        data()
        {
            return{
                token:localStorage.getItem('token'),
                perfil:{}
            }
        },
        mounted()
        {
            if (!this.token)
            {
                this.$router.push("/login");
            }
            else
            {
                service.getPerfil(this.token).then(result =>
                {
                    this.perfil = result;
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>