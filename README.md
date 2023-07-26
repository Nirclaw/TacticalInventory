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

  las variables vienen por defecto en el proyecto como usuario root y sin contraseña

  ```js
  MY_CONFIG={"hostname":"127.10.10.10", "port":5100}
  MY_CONNECT={"host":"localhost","user":"root","password"","database":"db_tactical", "port":3306}
  PASSWORD="Nicolas123456789"
  ```

2. **Instalar las dependencias**: El proyecto ya cuenta con un archivo llamado `package.json`, en el cual se encuentran especificadas todas las dependencias necesarias para que el proyecto funcione de manera óptima. Por lo tanto, para instalar dichas dependencias, simplemente ejecuta el siguiente comando:

  ```js
  npm install
  ```

  ###### **nota:** el proyecto trae una carpeta con la base de datos llamada `db` y dentro de esa carpeta contiene un archivo sql donde podras ejecutar el script para poder probar el proyecto al igual trae insercion de datos para que puedas experimentar las base de datos

   

  Este comando leerá el archivo `package.json` y descargará e instalará automáticamente todas las dependencias listadas en el proyecto. De esta manera, tendrás todo lo necesario para que el proyecto se ejecute correctamente.

3. **Iniciar el servidor:** Una vez que todas las dependencias estén instaladas, puedes iniciar el servidor con el siguiente comando:

   ```
   npm run dev
   ```

   


1. ## Uso

   1. Para comenzar a utilizar la aplicación, primero necesitas obtener un token de autenticación. Para hacerlo, sigue los siguientes pasos utilizando la extensión "Thunder Client" en tu entorno de desarrollo:

      1. Abre la extensión **"Thunder Client"** en tu entorno de desarrollo.

      2. Crea una nueva solicitud **GET** utilizando la siguiente URL:

         URL: `http://127.10.10.10:5100/generateToken/123/sunombre`

         Asegúrate de reemplazar "123" con tu ID o contraseña y "sunombre" con tu nombre. Estos datos son necesarios para generar el token de autenticación.

      3. Ejecuta la solicitud haciendo clic en el botón correspondiente en "Thunder Client".

      4. Espera la respuesta de la solicitud. En la respuesta, recibirás un **token** de autenticación.

      Una vez que hayas obtenido el token, guárdalo de manera segura, ya que será necesario para llevar a cabo las siguientes operaciones dentro de la aplicación. Puedes utilizar este token como una especie de "credencial" que te permitirá acceder a las funcionalidades y recursos protegidos de la aplicación te en cuenta que el token tiene una duracion de 15min en dado caso que el token expire repetir el mismo proceso.

      Recuerda mantener el token privado y no compartirlo con nadie más, ya que otorga acceso autorizado a la aplicación en tu nombre. Si en algún momento sospechas que el token ha sido comprometido, puedes solicitar uno nuevo siguiendo el mismo proceso descrito anteriormente.

   2. Utilizar endpoints con el token: Ahora que tienes el token de autenticación, asegúrate de incluirlo en el encabezado (header) de tus solicitudes para verificar la autenticidad del usuario. Además, sigue el orden y tipo de dato exacto para los parámetros requeridos en cada endpoint. Respetar este orden y tipo de dato es fundamental para evitar errores de parámetros de entrada.

   3. Puedes acceder a los siguientes endpoints (endpoints son las URL a las que puedes realizar solicitudes):

2. para la los suministros tendras que usar estos endpoinds

   ------

   **GET**

   trae todos los suministros existentes 

   http://127.10.10.10:5100/suministro/

   ------

   **GET**

   trae el suministro que deseas buscar por id 

   http://127.10.10.10:5100/suministro/id  
   
   ```json
   {
   "id_suministro": 1
   }
   ```

   ------

   **POST**

   si deseas registrar un suministro
   
   http://127.10.10.10:5100/suministro/create
   
   debes enviar la informacion de la siguiente manera 

```json
{
  "id_pistola_semiauto": 1,
  "id_cuchillo_combate": 1,
  "id_fusil_presicion": 1,
  "id_carabina": 1,
  "id_granada": 1,
  "id_escopeta": 1,
  "id_revolver": 1,
  "id_fusil_asalto": 1,
  "nombre_completo": "Nicolas Mauricio",
  "rango": "General",
  "edad": 23
}
```

------

**DELETE**

si desas eliminar un suministro 

http://127.10.10.10:5100/suministro/delete

```json
{    
"id_suministro": 1
}
```

------

**PUT**

actualizar suministro 

http://127.10.10.10:5100/suministro/update

```json
{
  "id_suministro":2,
  "id_pistola_semiauto": 1,
  "id_cuchillo_combate": 1,
  "id_fusil_presicion": 1,
  "id_carabina": 1,
  "id_granada": 1,
  "id_escopeta": 1,
  "id_revolver": 1,
  "id_fusil_asalto": 1,
  "nombre_completo": "Nicolas Mauricio ron",
  "rango": "General",
  "edad": 23
}
```





## **IMPORTANTE**

Además, asegúrate de proporcionar los parámetros necesarios para cada endpoint exactamente como se especifica en la documentación del API. Verifica tanto el orden como el tipo de dato de cada parámetro. Cualquier desviación de los requerimientos dará lugar a un error 400.

Siguiendo estos pasos con precisión, podrás garantizar que tus solicitudes al servidor sean procesadas correctamente y que puedas acceder a los recursos y funcionalidades de la aplicación de manera exitosa y segura.

------

2.**para las siguientes tablas el metodo de enviar datos es la misma **

si deseas registrar un arma la informacion a enviar aplica para las siguientes endpoint 

## **FUSIL DE ASALTO:**

**GET**

http://127.10.10.10:5100/fusil-asalto/

**GET POR ID**

http://127.10.10.10:5100/fusil-asalto/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/fusil-asalto/create

```json
{
  "capacidad_cargador": 30,
  "calibre": 23,
  "nombre": 6,
  "pais_origen": "Colombia",
  "serial": 123568,
  "clase_arma": 5
}
```

## **ESCOPETAS**

**GET**

http://127.10.10.10:5100/escopetas/

**GET POR ID**

http://127.10.10.10:5100/escopetas/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/escopetas/create

```json
{
  "capacidad_cargador": 30,
  "calibre": 23,
  "nombre": 6,
  "pais_origen": "Colombia",
  "serial": 123568,
  "clase_arma": 5
}
```

## **PISTOLAS SEMI AUTOMATICAS**

**GET**

http://127.10.10.10:5100/pistolas-semi-automaitcas/

**GET POR ID**

http://127.10.10.10:5100/pistolas-semi-automaitcas/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/pistolas-semi-automaitcas/create

```json
{
  "capacidad_cargador": 30,
  "calibre": 23,
  "nombre": 6,
  "pais_origen": "Colombia",
  "serial": 123568,
  "clase_arma": 5
}
```

## **FUSIL DE PRESICION**

**GET**

http://127.10.10.10:5100/fusil-presicion/

**GET POR ID**

http://127.10.10.10:5100/fusil-presicion/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/fusil-presicion/create

```json
{
  "capacidad_cargador": 30,
  "calibre": 23,
  "nombre": 6,
  "pais_origen": "Colombia",
  "serial": 123568,
  "clase_arma": 5
}
```

## **REVOLVERES**

**GET**

http://127.10.10.10:5100/revolveres/

**GET POR ID**

http://127.10.10.10:5100/revolveres/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/revolveres/create

```json
{
  "capacidad_cargador": 30,
  "calibre": 23,
  "nombre": 6,
  "pais_origen": "Colombia",
  "serial": 123568,
  "clase_arma": 5
}
```

## **GRANADAS**

**GET**

http://127.10.10.10:5100/granadas

**GET POR ID**

http://127.10.10.10:5100/granadas/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/granadas/create

```json
{
  "peso": 100,
  "descruvtivo": "explosiva",
  "pais_origen": "colombiana",
  "nombre": "la Explosiva",
  "clase_id": 3,
  "serial": 1234
}
```



**CUCHILLOS DE COMBATE**

**GET**

http://127.10.10.10:5100/cuchillo-combate/

**GET POR ID**

http://127.10.10.10:5100/cuchillo-combate/id

```json
{
  "serial": 1
}
```

**POST**

http://127.10.10.10:5100/cuchillo-combate/create

```json
{
  "peso": 100,
  "longitud": 500,
  "pais_origen": "Colombia",
  "nombre": "La filosa",
  "id_clase": 8,
  "serial": 1234
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



