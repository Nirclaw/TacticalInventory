# TacticalInventory - Base de Datos de Armas

TacticalInventory es una base de datos de armas diseñada para proporcionar una herramienta confiable y eficiente para investigadores, entidades gubernamentales y entusiastas de las armas. Esta base de datos permite acceder rápidamente a información precisa sobre una amplia gama de armas y proporciona la funcionalidad de registrar armas y crear suministros, permitiendo asignar a una persona el suministro creado.

## Características

- Amplia variedad de armas: La base de datos incluye información detallada sobre diferentes tipos de armas, como pistolas, rifles, escopetas, ametralladoras, entre otros.
- Detalles técnicos: Proporciona especificaciones técnicas completas para cada arma, incluyendo calibre, capacidad del cargador, peso, longitud, etc.
- Información cifrada: Toda la información se cifra para garantizar un tratamiento seguro y confidencial de los datos.
- Búsqueda de suministros por ID: Permite realizar búsquedas de suministros por su ID, brindando información completa sobre la persona asignada y las armas que contiene.
- Búsqueda de armas por serial: Facilita la búsqueda de armas por su número de serie, proporcionando toda la información relevante, como país de origen y calibre del arma.
- Registro de suministros: Permite registrar nuevos suministros en la base de datos, incluyendo detalles de las armas y equipos contenidos en cada suministro.
- Actualización y eliminación de suministros: Permite a los usuarios actualizar y eliminar información de suministros existentes según sea necesario.
- Búsqueda por ID de suministro: Facilita la búsqueda de suministros específicos por su ID en la base de datos.
- Registro y búsqueda de armas: Permite registrar nuevas armas en la base de datos y buscar armas existentes por su número de serie.
- Seguridad de la información: Se toman medidas de seguridad para proteger la integridad y confidencialidad de los datos almacenados.

**Diagrama de base datos**


![Diagrama](https://github.com/Nirclaw/TacticalInventory/blob/main/diagrama/diagrama.jpg)




**Clonar el repositorio:** Comienza clonando el repositorio de TacticalInventory en tu máquina local. Abre una terminal y ejecuta el siguiente comando:

**Requisitos previos:** Asegúrate de tener instalado Node.js y npm en tu sistema.

git clone https://github.com/Nirclaw/TacticalInventory.git

1. **Configurar variables de entorno:** Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes encontrar un ejemplo de las variables requeridas en el archivo `.env.example`.

2. **Iniciar el servidor:** Una vez que todas las dependencias estén instaladas, puedes iniciar el servidor con el siguiente comando:

   npm run dev


1. ## Uso

   1. Para empezar a usar la aplicación, necesitas obtener un token de autenticación. Utiliza la extensión "Thunder Client" para realizar una solicitud POST a la siguiente URL, que permitirá crear una sesión y obtener un token:

      **URL:** `http://127.10.10.10:5100/generateToken/123/sunombre`

      Una vez que realices esta solicitud, recibirás un token en la respuesta. Este token será necesario para realizar las siguientes operaciones en la aplicación.

   2. Utilizar endpoints con el token: Ahora que tienes el token de autenticación, asegúrate de incluirlo en el encabezado (header) de tus solicitudes para verificar la autenticidad del usuario. Además, sigue el orden y tipo de dato exacto para los parámetros requeridos en cada endpoint. Respetar este orden y tipo de dato es fundamental para evitar errores de parámetros de entrada.

   3. Puedes acceder a los siguientes endpoints (endpoints son las URL a las que puedes realizar solicitudes):

2. para la los suministros tendras que usar estos endpoinds

   ------

   ​

   trae todos los suministros existentes 

   http://127.10.10.10:5100/suministro/  

   ------

   trae el suministro que deseas buscar por id 

   http://127.10.10.10:5100/suministro/id  

   ```
   {
   id_suministro: 60
   }
   ```

   ------

   si deseas registrar un suministro

    http://127.10.10.10:5100/suministro/create

   debes enviar la informacion de la siguiente manera 

```
{
​    id_pistola_semiauto: number,
​    id_cuchillo_combate: number,
​    id_fusil_presicion: number,
​    id_carabina: number,
​    id_granada: number,
​    id_escopeta: number,
​    id_revolver: number,
​    id_fusil_asalto: number,
​    nombre_completo: strig,
​    rango: string,
​    edad: number,
}
```

------

si desas eliminar un suministro 

http://127.10.10.10:5100/suministro/delete

```
{    
id_suministro: null
}
```

------

actualizar suministro 

http://127.10.10.10:5100/suministro/update

```
{	
	id_suministro:number,
​    id_pistola_semiauto: number,
​    id_cuchillo_combate: number,
​    id_fusil_presicion: number,
​    id_carabina: number,
​    id_granada: number,
​    id_escopeta: number,
​    id_revolver: number,
​    id_fusil_asalto: number,
​    nombre_completo: strig,
​    rango: string,
​    edad: number,
}
```



------

para las siguietnes tablas el metodo de enviar datos es la misma 

si deseas registrar un arma la informacion a enviar aplica para las siguientes endpint 

http://127.10.10.10:5100/suministro/create

http://127.10.10.10:5100/fusil-asalto/create

http://127.10.10.10:5100/escopetas/create

http://127.10.10.10:5100/pistolas-semi-automaitcas/create

http://127.10.10.10:5100/fusil-presicion/create

http://127.10.10.10:5100/revolveres/create

enviar la informacion de la siguiente manera 

```
{

​    capacidad_cargador: number,

​    calibre: number,

​    nombre: string,

​    pais_origen: strig,

​    serial: number,

​    clase_arma: number,

  }
```

------

si deseas bucar por serial en una categoria de arma este metodo de solicitar la informacion funciona para los siguientes endpoints 

http://127.10.10.10:5100/suministro/id

http://127.10.10.10:5100/fusil-asalto/id

http://127.10.10.10:5100/escopetas/id

http://127.10.10.10:5100/pistolas-semi-automaitcas/id

http://127.10.10.10:5100/fusil-presicion/id

http://127.10.10.10:5100/revolveres/id

http://127.10.10.10:5100/granadas/id

http://127.10.10.10:5100/cuchillo-combate/id

```
{
    serial: null,
 }
```

si deaseas conocer las armas existentes de cada clase quita el create y te enviara la informacion de todas las armas

------



si desaes registrar granadas utiliza este endpoint

http://127.10.10.10:5100/granadas/create

```
 {
    peso: number,
    descruvtivo: string,
    pais_origen: string,
    nombre: string,
    clase_id: number,
    serial: number,
  }
```

------

si deseas registrar cuchillos utiliza este endpoint

http://127.10.10.10:5100/cuchillo-combate/create

```
{

    peso: number,

    longitud:number,

    pais_origen:string,

    nombre:string,

    id_clase:number,

    serial:number

  }
```

------

## **Errores**

ten encuenta que el servicio que se te esta dando el tipo de dato debe ser tan cual como se te indica ya que de no ser asi te dara un error de parametros de entrada, tanto parametro de llaves debe ser el orden tal cual como se te esta dando

## Contacto

Si tienes alguna pregunta, problema o sugerencia sobre el proyecto, no dudes en ponerte en contacto conmigo. Puedes hacerlo de las siguientes maneras:

- **Correo Electrónico**: [caicedonicolas150@gmail.com](https://github.com/Nirclaw/Gestor_reportes/blob/main/caicedonicolas150@gmail.com)
- **GitHub**: [nirclaw](https://github.com/Nirclaw)
- **LinkedIn**: [Nicolas Mauricio](https://www.linkedin.com/in/nicol%C3%A1s-mauricio-18685b256/)

Si prefieres alguna otra forma de contacto, déjamelo saber y estaré encantado de proporcionarte la información necesaria.

## Estado del Proyecto

**En Desarrollo Activo**: El proyecto está en desarrollo activo y se están agregando nuevas funcionalidades, corrigiendo errores y mejorando el código de manera regular. Es posible que haya cambios frecuentes y actualizaciones.



