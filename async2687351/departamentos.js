const axios = require('axios')

const url='https://api-colombia.com/api/v1/Department'

//ejecutar asycrona con promesas
axios.get (url)
     .then((respuesta)=>{
        //console.log(respuesta.data)
        let departamentos = respuesta.data
                departamentos.forEach(departamento => {
                    console.log(departamento.name)
                    console.log('--------------')
                });
    })
    
     .catch((error)=>{
          console.log(error.code)
     })