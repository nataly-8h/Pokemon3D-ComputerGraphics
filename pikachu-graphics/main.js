import './style.css'

//Se importan los componentes necesarios para la escena

import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { PMREMGenerator } from 'https://cdn.skypack.dev/three@0.136.0/src/extras/PMREMGenerator.js';
import { RGBELoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

//Elementos esenciales de la escena
var clock = new THREE.Clock();
var mixer;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
renderer.setClearColor(0xffffff, 1)


//Creación del domo de cielo

var skyGeo = new THREE.SphereGeometry(100000, 25, 25);
var textureLoader = new THREE.TextureLoader(),
  texture = textureLoader.load("textures/sky.jpg");

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(15, 15);

var material = new THREE.MeshBasicMaterial({
  map: texture,
});

var sky = new THREE.Mesh(skyGeo, material);
sky.material.side = THREE.BackSide;
scene.add(sky);

//Ajustes de cámara
camera.position.z = 30;
camera.position.y = 2


//Creación del pasto
var loaderPlane = new THREE.TextureLoader();
const texturePasto = loaderPlane.load("/pasto/Pasto.jpeg");
texturePasto.wrapS = THREE.RepeatWrapping;
texturePasto.wrapT = THREE.RepeatWrapping;
texturePasto.repeat.set(70, 70);



const planeGeometry = new THREE.PlaneGeometry(300, 300, 10, 10);

planeGeometry.rotateX(-1.58);
const planeMaterial = new THREE.MeshBasicMaterial({ map: texturePasto });
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.y = 0;
planeMesh.traverse(function (node) { if (node instanceof THREE.Mesh) { node.receiveShadow = true; } });
scene.add(planeMesh);

const shdowMaterial = new THREE.ShadowMaterial(); //material transparente en todos lados menos la sombra
shdowMaterial.opacity = 1;

const planeShadowMesh = new THREE.Mesh(planeGeometry, shdowMaterial); //otro plano con la textura de shadow
planeShadowMesh.position.y = 0;
planeShadowMesh.receiveShadow = true;
scene.add(planeShadowMesh);


renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;


//Importación del modelo de Pikachu y se agrega a la escena.
loader.load('/pikachu/scene.gltf', function (gltf) {
  mixer = new THREE.AnimationMixer( gltf.scene );
  console.log(gltf.animations[1]);
  mixer.clipAction(gltf.animations[1]).play();
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.x = 0;				    //Position (x = right+ left-)
  gltf.scene.position.y = 0;				    //Position (y = up+, down-)
  gltf.scene.position.z = 0;				    //Position (z = front +, back-)
  gltf.scene.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});
//Importación del modelo de nuestro pino hecho en Blender y se agrega a la escena.
loader.load('/blenderassets/pino.glb', function (gltf) {
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.x = 5;				    //Position (x = right+ left-)
  gltf.scene.position.y = 0;				    //Position (y = up+, down-)
  gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();

  //Se genera un for para poblar la escena con varios pinos
  for (let i = 0; i < 60; i++) {
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;

    if ((x > -10 && x <= 0) && (z >= 0 && z < 30)){
      clone.position.x = x - 20;
      clone.position.z = z + 40;
    }
    else if ((x >= 0 && x < 10) && (z >= 0 && z < 30)) {
      clone.position.x = x + 20;
      clone.position.z = z + 40;
    }
    clone.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
    scene.add(clone);
  }
  gltf.scene.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

//Importación del modelo de uno de nuestros arboles creados en Blender y se agrega a la escena.
loader.load('/blenderassets/arbol3.glb', function (gltf) {
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.x = -5;				    //Position (x = right+ left-)
  gltf.scene.position.y = 1;				    //Position (y = up+, down-)
  gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();
  //Se genera un for para poblar la escena con varios arboles
  for (let i = 0; i < 60; i++) {
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;

    if ((x > -10 && x <= 0) && (z >= 0 && z < 30)){
      clone.position.x = x - 20;
      clone.position.z = z + 40;
    }
    else if ((x >= 0 && x < 10) && (z >= 0 && z < 30)) {
      clone.position.x = x + 20;
      clone.position.z = z + 40;
    }
    clone.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
    scene.add(clone);
  }
  gltf.scene.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});
//Importación del modelo del segundo de nuestros arboles creados en Blender y se agrega a la escena.
loader.load('/blenderassets/arbol2.glb', function (gltf) {
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.z = -5;
  gltf.scene.position.x = -10;			    //Position (x = right+ left-)
  gltf.scene.position.y = 0;				    //Position (y = up+, down-)
  gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone = gltf.scene.clone();
  //Se genera un for para poblar la escena con varios arboles
  for (let i = 0; i < 60; i++) {
    clone = gltf.scene.clone();
    let x = Math.floor(Math.random() * (100 - -100)) + -100;
    let z = Math.floor(Math.random() * (100 - -100)) + -100;
    clone.position.x = x;
    clone.position.z = z;

    if ((x > -10 && x <= 0) && (z >= 0 && z < 30)){
      clone.position.x = x - 20;
      clone.position.z = z + 40;
    }
    else if ((x >= 0 && x < 10) && (z >= 0 && z < 30)) {
      clone.position.x = x + 20;
      clone.position.z = z + 40;
    }
    clone.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
    scene.add(clone);
  }
  gltf.scene.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});


//Añadimos un mapa de ambiente para la escena, para que funcionara la textura de la pokebola, tomando de base esta pregunta de stackoverflow:
//https://stackoverflow.com/questions/67183618/how-to-add-env-map-onto-gltf-object

const pmremGenerator = new PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const rgbeLoader = new RGBELoader();
rgbeLoader.load('https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr', function (texture) {

  const envMap = pmremGenerator.fromEquirectangular(texture).texture;

  scene.background = envMap;
  scene.environment = envMap;

  texture.dispose();
  pmremGenerator.dispose();



});
var mixer2;
//Se agrega la pokebola a escena y se importa
loader.load('/pokeball/scene.gltf', function (gltf) {
  mixer2 = new THREE.AnimationMixer( gltf.scene );
  var animation = mixer2.clipAction(gltf.animations[0])
  animation.setLoop(THREE.LoopOnce);
  animation.clampWhenFinished = true;
  animation.enable = true;
  animation.play()
        
  gltf.scene.scale.set(0.4, 0.4, 0.4);
  gltf.scene.position.x = 1;				    //Position (x = right+ left-)
  gltf.scene.position.y = 0.5;				    //Position (y = up+, down-)
  gltf.scene.position.z = 0;				    //Position (z = front +, back-)
  gltf.scene.traverse(function (node) { if (node instanceof THREE.Mesh) { node.castShadow = true; } });
  scene.add(gltf.scene);
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});


//LUCES TEMPORALES

var ambient = new THREE.AmbientLight(0xEC8950, 0.7);
const directionalLight = new THREE.DirectionalLight(0xDF834E, 0.5);
directionalLight.position.set(5, 10, -10);
var side = 100;
directionalLight.shadow.camera.top = side;
directionalLight.shadow.camera.bottom = -side;
directionalLight.shadow.camera.left = side;
directionalLight.shadow.camera.right = -side;
directionalLight.castShadow = true;
//  directionalLight.position.set(new THREE.Vector3(0,1,0));
scene.add(directionalLight);

scene.add(ambient);
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame( animate );
  
  var delta = clock.getDelta();
  
  if ( mixer ) mixer.update( delta );
  if ( mixer2 ) mixer2.update( delta );

  renderer.render( scene, camera );
}

function render() {
  renderer.render(scene, camera);
}

render();
animate();
