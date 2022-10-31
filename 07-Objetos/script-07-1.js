
// En ester capitulo veremos un ejercicio practico con objetos 

// Crear un objeto llamado empleado que dentro tenga otro objeto tenga otro opjeto llamado datos, que a su vez
// Tenga otro varios objetos llamado datosUbicacion, datosEmpresa, datosNomina
// luego aplicar destructuring y mostrar en consola todos y cada unos de las propiedades de los objetos

const empleado = {
    Nombre: `Euclides Segundo`,
    Apellido: `Perez Fernandez`,
    datos:{
        datospersonales:{
            dni: `1192924798`,
            fnacimiento: `02/06/1996`,
        },
        datosubicacion:{
            direccion: `crr52 #02-04`,
            barrio: `buenos aires`,
            ciudad: `medellin`,
        },
        datosEmpresa:{
            nombreempresa: `inv gafremol`,
            dirempresa: `crr48-04`,
            ciudadEmpresa: `Medellin`
        },
        datosNomina:{
          sueldo: 1200000,
          horaslaborales: 8
        }
    }
}

const{Nombre, Apellido, datos:{datospersonales:{dni, fnacimiento}}} = empleado;
const{datosubicacion:{direccion, barrio, ciudad}, datosEmpresa:{nombreempresa, dirempresa, ciudadEmpresa}, datosNomina:{sueldo, horaslaborales}} = empleado.datos;
console.log(`Nombre             = ${Nombre}`);
console.log(`Apellido           = ${Apellido}`);
console.log(`DNI                = ${dni}`);
console.log(`Fecha Nacimiento   = ${fnacimiento}`);
console.log(`Direccion Empleado = ${direccion}`);
console.log(`Barrio             = ${barrio}`);
console.log(`Nombre Empresa     = ${nombreempresa}`);
console.log(`Direccion Empres   = ${dirempresa}`);
console.log(`Ciudad Empresa     = ${ciudad}`);
console.log(`Sueldo             = ${sueldo}`);
console.log(`Horas Laborales    = ${horaslaborales}`);
console.log(`Ciudad             = ${ciudad}`);

