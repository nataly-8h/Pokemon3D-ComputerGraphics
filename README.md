# Pokemon3D-ComputerGraphics

Project dedicated to creating a scene inspired on the Pokemon game using Three.js for our Computer Graphics class

En este proyecto crearemos una escena inspirada en el video juego *Pokémon GO* usando Three.js para nuestra clase de Gráficas Computacionales
###### Integrantes del equipo:
- Ari Valenzuela - A01635584
- Carolina Pérez - A01631526
- Nataly Hernández - A01631314

## Estructura
Los archivos principales se encuentran dentro de la carpeta de pikachu-graphics.
Implementamos una estructura en la que usamos el programa de Vite como servidor local de desarrollo con la finalidad de evitar problemas al momento de realizar los imports mediante links externos y de los assets 3D importados.

## ¿Cómo correr el programa?
Se entra a la carpeta de pikachu-graphics y se corren los siguientes dos comandos para correr el servidor local de vite y visualizar la escena:
npm install
npm run dev

## Escena
La escena consiste en un área verde donde se encuentra un Pikachu. Al igual que en el juego *Pókemon GO* se existirá la función de lanzar pokebolas hacia el pokemon para intentar atraparlo, lo que necesitará una perspectiva en primera persona.

## Animaciones
Las animaciones principales son:
- **Lanzamiento de pokebola:** Función el lanzamiento de una pokebola para intentar cachar al Pikachu que se encuentra en la escena. Esta acción se activará con la tecla `[ENTER]`.
- **Captura de Pokemon:** Al igual que en el video juego, cuando el usuario logra atrapar al pokemón se mostrará una animación de luz y estrella para indicar captura exitosa.
- **Movimiento de Pikachu:** (Tal vez) Pequeños movimientos que tendrá el modelo de Pikachu como movimiento de orejas y de cabeza. Animación a considerar dependiendo de los assets que podamos encontrar.

## Tecnologías
Para este proyecto utilizaremos las siguientes tecnologías:
- three.js
- WebGL
- Blender (tal vez)

## Componentes planeados
Los componentes planeados para esta escena son
- Pikachu
- Pokebola
- Arboles de fondo
- Piso de pasto
- Luz imitando la luz solar a medio día
- Entrenador Pokemon (Tal vez)


## Referencias usadas:
- Para el modelo de pikachu: https://sketchfab.com/3d-models/pikachu-37c740f674cd4719a1d1d2970bbe8c30
- Para el modelo de la pokebola: https://sketchfab.com/3d-models/pokeball-animated-5ee999d489a843fd95a7eaecb5d3c5a6
- Para entender cómo hacer el cielo: https://stackoverflow.com/questions/32233805/im-new-to-threejs-how-to-create-a-sky-dome
- De dónde obtuvimos la textura del cielo: https://3djungle.net/textures/sky/5931/
- Tutorial usado para crear los árboles en blender: https://www.youtube.com/watch?v=p-9pgZI3inI&t=122s&ab_channel=GrantAbbitt
- Tutorial de conceptos clave de Three.js: https://www.youtube.com/watch?v=YK1Sw_hnm58
- Documentación de Three.js


**Imagenes de referencia**

![imagen](https://user-images.githubusercontent.com/54066974/149452558-66fecd45-5f40-4855-85d8-c8bc7ec5c126.png)

![imagen](https://user-images.githubusercontent.com/54066974/149452588-af03a3c1-3683-4d6e-b431-019edd040b23.png)
