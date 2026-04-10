// Import necessary libraries
import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('immersive-container'),
    antialias: true,
});

// Load the 3D spaceship model
const spaceshipModel = loadThreeFile('spaceship-model.json');

// Add the spaceship to the scene
scene.add(spaceshipModel);

// Set up the camera and renderer
camera.position.x = -5;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Handle user input
document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        // Move forward
        console.log('Moving forward!');
    } else if (event.key === 's') {
        // Move backward
        console.log('Moving backward!');
    } else if (event.key === 'a') {
        // Turn left
        console.log('Turning left!');
    } else if (event.key === 'd') {
        // Turn right
        console.log('Turning right!');
    }
});
