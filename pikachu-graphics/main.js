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

// let geometry = new THREE.BoxGeometry();
// let material = new THREE.MeshBasicMaterial({ color: '#131B8B' });
// let cube = new THREE.Mesh(geometry, material);
// cube.translateX(-1);
// scene.add(cube);

camera.position.z = 6;

var loaderPlane  = new THREE.TextureLoader();
const texture = loaderPlane.load( "/pasto/Pasto.jpeg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(7,7);

const planeGeometry = new THREE.PlaneGeometry(8, 5, 10, 10);
planeGeometry.rotateX(-0.78);
const planeMaterial = new THREE.MeshBasicMaterial({map: texture});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

loader.load('/pikachu/scene.gltf', function (gltf) {
	gltf.scene.scale.set( 1, 1, 1 );
	gltf.scene.position.x = 0;				    //Position (x = right+ left-)
        gltf.scene.position.y = 0;				    //Position (y = up+, down-)
	gltf.scene.position.z = 0;				    //Position (z = front +, back-)

	scene.add( gltf.scene );
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

loader.load('/pokeball/scene.gltf', function (gltf) {
	gltf.scene.scale.set( 0.4, 0.4, 0.4 );
	gltf.scene.position.x = 0;				    //Position (x = right+ left-)
        gltf.scene.position.y = -1;				    //Position (y = up+, down-)
	gltf.scene.position.z = 1;				    //Position (z = front +, back-)


	scene.add( gltf.scene );
  scene.add(gltf.scene);

}, undefined, function (error) {

  console.error(error);

});

var ambient = new THREE.AmbientLight(0xffffff, 0.4);

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
