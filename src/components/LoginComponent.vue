<template>
    <div>
        <h1>LOGIN</h1>
        <form v-on:submit.prevent="iniciarSesion">
            <label>Usuario</label>
            <br/>
            <input type="text" v-model="usuario"/>
            <br/><br/>
            <label>Contraseña</label>
            <br/>
            <input type="text" v-model="passwd"/>
            <br/><br/>
            <button>Iniciar sesión</button>
        </form>
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
                usuario:"",
                passwd:""
            }
        },
        methods:
        {
            iniciarSesion()
            {
                var usuario =
                {
                    userName:this.usuario,
                    password:this.passwd
                };

                service.iniciarSesion(usuario).then(result =>
                {
                    localStorage.setItem('token', result.response);
                    this.$router.push("/");
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>