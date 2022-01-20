import './style.css'

import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const loader = new GLTFLoader();
renderer.setClearColor( 0xffffff,1)


//SKY

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

camera.position.z = 30;
camera.position.y = 2

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

loader.load('/pikachu/scene.gltf', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = 0;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

loader.load('/blenderassets/pino.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = 5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone1 = gltf.scene.clone();
  var clone2 = gltf.scene.clone();
  var clone3 = gltf.scene.clone();
  var clone4 = gltf.scene.clone();
  var clone5 = gltf.scene.clone();
  var clone6 = gltf.scene.clone();
  var clone7 = gltf.scene.clone();
  var clone8 = gltf.scene.clone();
  var clone9 = gltf.scene.clone();
  var clone10 = gltf.scene.clone();
  var clone11 = gltf.scene.clone();
  var clone12 = gltf.scene.clone();
  var clone13 = gltf.scene.clone();
  var clone14 = gltf.scene.clone();
  var clone15 = gltf.scene.clone();
  var clone16 = gltf.scene.clone();
  var clone17 = gltf.scene.clone();
  var clone18 = gltf.scene.clone();
  var clone19 = gltf.scene.clone();
  clone1.position.x = -16;
  clone1.position.z = -8;
  clone2.position.x = -12;
  clone2.position.z = -18;
  clone3.position.x = 13;
  clone3.position.z = -12;
  clone3.position.x = 13;
  clone3.position.z = 12;
  clone4.position.x = -55;
  clone4.position.z = 7;
  clone5.position.x = -33;
  clone5.position.z = -41;
  clone6.position.x = -18;
  clone6.position.z = -12;
  clone7.position.x = 0;
  clone7.position.z = -30;
  clone8.position.x = 23;
  clone8.position.z = 10;
  clone9.position.x = 48;
  clone9.position.z = -28;

  clone10.position.x = 35;
  clone10.position.z = 25;
  clone11.position.x = -57;
  clone11.position.z = -9;
  clone12.position.x = -35;
  clone12.position.z = 63;
  clone13.position.x = -42;
  clone13.position.z = -63;
  clone14.position.x = 54;
  clone14.position.z = 7;
  clone15.position.x = 49;
  clone15.position.z = -66;
  clone16.position.x = 5;
  clone16.position.z = 57;
  clone17.position.x = -20;
  clone17.position.z = -18;
  clone18.position.x = 13;
  clone18.position.z = -16;
  clone19.position.x = 0;
  clone19.position.z = -20;

  scene.add(clone1);
  scene.add(clone2);
  scene.add(clone3);
  scene.add(clone4);
  scene.add(clone5);
  scene.add(clone6);
  scene.add(clone7);
  scene.add(clone8);
  scene.add(clone9);

  scene.add(clone10);
  scene.add(clone11);
  scene.add(clone12);
  scene.add(clone13);
  scene.add(clone14);
  scene.add(clone15);
  scene.add(clone16);
  scene.add(clone17);
  scene.add(clone18);
  scene.add(clone19);

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});


loader.load('/blenderassets/arbol3.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = -5;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone1 = gltf.scene.clone();
  var clone2 = gltf.scene.clone();
  var clone3 = gltf.scene.clone();
  var clone4 = gltf.scene.clone();
  var clone5 = gltf.scene.clone();
  var clone6 = gltf.scene.clone();
  var clone7 = gltf.scene.clone();
  var clone8 = gltf.scene.clone();
  var clone9 = gltf.scene.clone();
  var clone10 = gltf.scene.clone();
  var clone11 = gltf.scene.clone();
  var clone12 = gltf.scene.clone();
  var clone13 = gltf.scene.clone();
  var clone14 = gltf.scene.clone();
  var clone15 = gltf.scene.clone();
  var clone16 = gltf.scene.clone();
  var clone17 = gltf.scene.clone();
  var clone18 = gltf.scene.clone();
  var clone19 = gltf.scene.clone();
  clone1.position.x = -18;
  clone1.position.z = -2;
  clone2.position.x = -2;
  clone2.position.z = -10;
  clone3.position.x = 15;
  clone3.position.z = -6;
  clone4.position.x = 6;
  clone4.position.z = -28;
  clone5.position.x = -10;
  clone5.position.z = 7;
  clone6.position.x = -20;
  clone6.position.z = -30;
  clone7.position.x = -7;
  clone7.position.z = -25;
  clone8.position.x = -40;
  clone8.position.z = 4;
  clone9.position.x = -34;
  clone9.position.z = -18;

  clone10.position.x = -35;
  clone10.position.z = -92;
  clone11.position.x = -8;
  clone11.position.z = -80;
  clone12.position.x = -90;
  clone12.position.z = 71;
  clone13.position.x = -20;
  clone13.position.z = -11;
  clone14.position.x = -58;
  clone14.position.z = 28;
  clone15.position.x = 68;
  clone15.position.z = -19;
  clone16.position.x = -44;
  clone16.position.z = -15;
  clone17.position.x = 15;
  clone17.position.z = -34;
  clone18.position.x = 10;
  clone18.position.z = -48;
  clone19.position.x = 21;
  clone19.position.z = -31;

  scene.add(clone1);
  scene.add(clone2);
  scene.add(clone3);
  scene.add(clone4);
  scene.add(clone5);
  scene.add(clone6);
  scene.add(clone7);
  scene.add(clone8);
  scene.add(clone9);
  scene.add(clone10);
  scene.add(clone11);
  scene.add(clone12);
  scene.add(clone13);
  scene.add(clone14);
  scene.add(clone15);
  scene.add(clone16);
  scene.add(clone17);
  scene.add(clone18);
  scene.add(clone19);

  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

loader.load('/blenderassets/arbol2.glb', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.z = -5;
  gltf.scene.position.x = -10;			    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

  var clone1 = gltf.scene.clone();
  var clone2 = gltf.scene.clone();
  var clone3 = gltf.scene.clone();
  var clone4 = gltf.scene.clone();
  var clone5 = gltf.scene.clone();
  var clone6 = gltf.scene.clone();
  var clone7 = gltf.scene.clone();
  var clone8 = gltf.scene.clone();
  var clone9 = gltf.scene.clone();
  clone1.position.x = 1;
  clone1.position.z = -6;
  clone2.position.x = -22;
  clone2.position.z = -22;
  clone3.position.x = 10;
  clone3.position.z = -12;
  clone3.position.x = 9;
  clone3.position.z = 6;
  clone4.position.x = 19;
  clone4.position.z = -36;
  clone5.position.x = 25;
  clone5.position.z = -18;
  clone6.position.x = -30;
  clone6.position.z = -30;
  clone7.position.x = -30;
  clone7.position.z = 10;
  clone8.position.x = -28;
  clone8.position.z = 0;
  clone9.position.x = -40;
  clone9.position.z = -46;

  scene.add(clone1);
  scene.add(clone2);
  scene.add(clone3);
  scene.add(clone4);
  scene.add(clone5);
  scene.add(clone6);
  scene.add(clone7);
  scene.add(clone8);
  scene.add(clone9);
  scene.add(gltf.scene);


  // intento de agilizar anñadir arboles xd
  /*var clone = gltf.scene.clone();
  for (let i = 0; i < 50; i++){
    clone.position.x = Math.floor(Math.random() * (50 - -50)) + -50;
    clone.position.z = Math.floor(Math.random() * (50 - -50)) + -50;
    //console.log("x: ", clone.position.x);
    //console.log("z: ", clone.position.z);
    scene.add(clone);
    scene.add(gltf.scene);
  }*/
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

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
