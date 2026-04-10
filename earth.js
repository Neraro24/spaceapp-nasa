const loader = new THREE.TextureLoader();

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1,128,128),
  new THREE.MeshStandardMaterial({
    map: loader.load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg")
  })
);

scene.add(earth);

// clouds
const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(1.01,128,128),
  new THREE.MeshStandardMaterial({
    map: loader.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png"),
    transparent:true
  })
);

scene.add(clouds);

// layers
function layer(color){
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(1.02,128,128),
    new THREE.MeshBasicMaterial({
      color,
      transparent:true,
      opacity:0.15
    })
  );
  m.visible=false;
  scene.add(m);
  return m;
}

const flood = layer(0x00aaff);
const heat = layer(0xff3300);
const quake = layer(0xc49a6c);

// rotation
function updateEarth(){
  earth.rotation.y += 0.002;
  clouds.rotation.y += 0.0025;
}
