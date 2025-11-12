<template>
    <h1>SUBORDINADOS</h1>
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
                <tr v-for="sub in subs" :key="sub">
                    <td>{{sub.idEmpleado}}</td>
                    <td>{{sub.apellido}}</td>
                    <td>{{sub.oficio}}</td>
                    <td>{{sub.salario}}</td>
                    <td>{{sub.director}}</td>
                </tr>
            </tbody>
        </table>
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
                subs:[]
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
                service.getSubs(this.token).then(result =>
                {
                    this.subs = result;
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>