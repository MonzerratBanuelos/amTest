# amTest Harry Potter App
* [1. Pasos para levantar el proyecto](#1-pasos-para-levantar-el-proyecto)
* [2. Historias de Usuario](#2-historias-de-usuario)
* [3. ¿Qué es lo que más te gusto de tu desarrollo?](#3-que-es-lo-que-te-gusto-mas-de-tu-desarrollo)
* [4. Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?](#4-si-hubieras-tenido-mas-tiempo-que-hubieras-mejorado-o-que-mas-hubieras-hecho)
* [5. Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste](#5-describenos-un-pain-point-o-bug-con-el-que-te-hayas-encontrado-y-como-lo-solucionaste)

***
## 2. Pasos para levantar el proyecto
1-Clonar este repositorio con el comando: 

git clone https://github.com/MonzerratBanuelos/amTest.git

2-Instalar todas las dependencias del proyecto 

npm install

3-Levantar el servidor en una terminal

cd hp-app
npm run server

4-Correr la aplicación en otra terminal

cd hp-app
npm start

## 2. Historias de Usuario

Historia de usuario 1:
El usuario puede visualizar todos los personajes al entrar al entrar a la página 

Historia de usuario 2:
El usuario puede visualizar los personajes de acuerdo a si es un 'Estudiante' o un 'Staff'

Historia de usuario 3:
El usuario puede agregar personajes a la base de datos y visualizarlos en pantalla en tiempo real

Historia de usuario 4:
El usuario puede guardar a sus personajes preferidos y visualizarlos en el menú 'Favoritos'

Historia de usuario 5:
EL usuario puede ingresar a la app desde una computadora de escritorio y/o su telefono movil

## 3. ¿Qué es lo que más te gusto de tu desarrollo?

1-Aprender nuevas tecnologías, debido a que nunca había utilizado SASS o Redux

2-Utilizar SASS para los estilos porque te permite tener el código mas ordenado y facil de leer

3-Reforzar conocimientos en el proceso, como lo fue el consumo de apis, logica, filtrados, etc.

## 4. Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?
1-Hubiera terminado las funcionalidades con Redux debido a que al ser mi primer acercamiento no tuve tiempo suficiente para concluirlo

2-Lograr visualizar las imagenes de tipo file

3-Crear un modal para cada personaje que se desplegue al hacer click en la tarjeta y te muestre la información completa

4-Al modal hubiera añadido las opciones de agregar la casa de Hogwarts a la que pertenece tu personaje, así como la opcion de poner si esta vivo o muerto 

5-Los test unitarios

6-Agregar un media query para tablets

7-Pulir mas el acomodo del codigo para que tenga mayor entendimiento y orden

## 5.Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

1-Hacer un PUT a la base de datos porque los personajes no contaban con id que permitiera crear un nuevo personaje dinamicamente, se solucionó agregando los id a los personajes

2-Mostrar el personaje creado sin cargar la pagina, lo solucione creando un estado on/off que pasé como array de dependecia al useEffet y me permitiera mostrar los cambios/acciones en tiempo real

3-Redux, es un pain point que sigue en proceso debido a que sigo intentando entenderlo y aplicarlo de la manera correcta