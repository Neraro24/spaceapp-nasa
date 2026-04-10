// Import necessary libraries
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('main-container'),
    antialias: true,
});

// Load the 3D Moon model
const moonModel = loadThreeFile('moon-model.json');

// Add the Moon to the scene
scene.add(moonModel);

// Set up the camera and renderer
camera.position.z = 10;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.x = 0;
controls.target.y = 0;

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();

// Handle click event on Moon
document.getElementById('moon').addEventListener('click', () => {
    // Open immersive first-person experience
    openImmersiveExperience();
});

function openImmersiveExperience() {
    // Create a new container for the immersive experience
    const immersiveContainer = document.createElement('div');
    immersiveContainer.id = 'immersive-container';

    // Add 3D spaceship models to the container
    const explorationSpaceshipModel = loadThreeFile('exploration-spaceship-model.json');
    const multiplayerSpaceshipModel = loadThreeFile('multiplayer-spaceship-model.json');
    const alienSpaceshipModel = loadThreeFile('alien-spaceship-model.json');

    immersiveContainer.appendChild(explorationSpaceshipModel);
    immersiveContainer.appendChild(multiplayerSpaceshipModel);
    immersiveContainer.appendChild(alienSpaceshipModel);

    // Add event listeners for spaceship interactions
    explorationSpaceshipModel.addEventListener('click', () => {
        console.log('Exploration spaceship clicked!');
    });
    multiplayerSpaceshipModel.addEventListener('click', () => {
        console.log('Multiplayer spaceship clicked!');
    });
    alienSpaceshipModel.addEventListener('click', () => {
        console.log('Alien spaceship clicked!');
    });

    // Add event listener for age selection
    document.getElementById('age-selection').addEventListener('click', () => {
        openAgeSelection();
    });

    function openAgeSelection() {
        // Create a new container for the age selection script
        const ageSelectionContainer = document.createElement('div');
        ageSelectionContainer.id = 'age-selection-container';

        // Add the age selection script to the container
        ageSelectionContainer.innerHTML = `
            <button id="under-13">Under 13</button>
            <button id="over-13">Over 13</button>
        `;

        document.body.appendChild(ageSelectionContainer);

        // Initialize age selection script here
    }
}
