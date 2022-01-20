import './style.css'

//Se importan los componentes necesarios para la escena

import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

//Elementos esenciales de la escena

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
renderer.setClearColor( 0xffffff,1)


//Creación del domo de cielo

var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
var textureLoader  = new THREE.TextureLoader(),
  texture = textureLoader.load( "textures/sky.jpg" );

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(15,15);

var material = new THREE.MeshPhongMaterial({
    map: texture,
});

var sky = new THREE.Mesh(skyGeo, material);
sky.material.side = THREE.BackSide;
scene.add(sky);

//Ajustes de cámara
camera.position.z = 30;
camera.position.y = 2


//Creación del pasto
var loaderPlane  = new THREE.TextureLoader();
const texturePasto = loaderPlane.load( "/pasto/Pasto.jpeg" );
texturePasto.wrapS = THREE.RepeatWrapping;
texturePasto.wrapT = THREE.RepeatWrapping;
texturePasto.repeat.set(70,70);

const planeGeometry = new THREE.PlaneGeometry(300, 300, 10, 10);

planeGeometry.rotateX(-1.58);
const planeMaterial = new THREE.MeshBasicMaterial({map: texturePasto});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.y=0;
scene.add(planeMesh);


//Importación del modelo de Pikachu y se agrega a la escena.
loader.load('/pikachu/scene.gltf', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = 0;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});
//Importación del modelo de nuestro pino hecho en Blender y se agrega a la escena.
loader.load('/blenderassets/pino.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = 5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();

  //Se genera un for para poblar la escena con varios pinos
  for (let i = 0; i < 60; i++){
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;
    if ((x > -10 && x < 0) && (z > -10 && z < 0)){
      clone.position.x = x - 10;
      clone.position.z = z - 10;
    }
    else if ((x > 0 && x < 10) && (z > 0 && z < 10)) {
      clone.position.x = x + 10;
      clone.position.z = z + 30;
    }
    scene.add(clone);
  }
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

//Importación del modelo de uno de nuestros arboles creados en Blender y se agrega a la escena.
loader.load('/blenderassets/arbol3.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = -5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();
   //Se genera un for para poblar la escena con varios arboles
  for (let i = 0; i < 60; i++){
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;
    if ((x > -10 && x < 0) && (z > -10 && z < 0)){
      clone.position.x = x - 10;
      clone.position.z = z - 10;
    }
    else if ((x > 0 && x < 10) && (z > 0 && z < 10)) {
      clone.position.x = x + 10;
      clone.position.z = z + 30;
    }
    scene.add(clone);
  }

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});
//Importación del modelo del segundo de nuestros arboles creados en Blender y se agrega a la escena.
loader.load('/blenderassets/arbol2.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.z = -5;
  gltf.scene.position.x = -10;			    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();
   //Se genera un for para poblar la escena con varios arboles
  for (let i = 0; i < 60; i++){
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;
    if ((x > -10 && x < 0) && (z > -10 && z < 0)){
      clone.position.x = x - 10;
      clone.position.z = z - 10;
    }
    else if ((x > 0 && x < 10) && (z > 0 && z < 10)) {
      clone.position.x = x + 10;
      clone.position.z = z + 30;
    }
    scene.add(clone);
  }
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

//Se agrega la pokebola a escena y se importa
loader.load('/pokeball/scene.gltf', function (gltf) {
	gltf.scene.scale.set( 0.4, 0.4, 0.4 );
	gltf.scene.position.x = 1;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0.5;				    //Position (y = up+, down-)
	gltf.scene.position.z = 1;				    //Position (z = front +, back-)


	scene.add( gltf.scene );
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});


//LUCES TEMPORALES
var ambient = new THREE.AmbientLight(0xffffff, 0.6);
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );


const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

scene.add(ambient);
const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	render();
	requestAnimationFrame( animate );
	}

function render() {
	renderer.render( scene, camera );
	}

render();
animate();
