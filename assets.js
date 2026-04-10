const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, innerWidth/innerHeight, 0.1, 1000
);

camera.position.set(0,0,3);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff,1.5);
light.position.set(5,5,5);
scene.add(light);

// resize
window.addEventListener("resize",()=>{
  camera.aspect = innerWidth/innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth,innerHeight);
});
