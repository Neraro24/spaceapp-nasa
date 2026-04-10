let mode = "earth";

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(5,128,128),
  new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/planets/moon_1024.jpg"
    )
  })
);

moon.visible = false;
scene.add(moon);

// ships
const apollo = new THREE.Mesh(
  new THREE.BoxGeometry(0.5,0.5,0.5),
  new THREE.MeshStandardMaterial({color:0x999999})
);

const shuttle = new THREE.Mesh(
  new THREE.ConeGeometry(0.3,0.8,8),
  new THREE.MeshStandardMaterial({color:0x00aaff})
);

const orion = new THREE.Mesh(
  new THREE.SphereGeometry(0.3,16,16),
  new THREE.MeshStandardMaterial({color:0xff3300})
);

apollo.visible = shuttle.visible = orion.visible = false;

scene.add(apollo,shuttle,orion);

function enterMoon(){
  mode="moon";

  earth.visible=false;
  clouds.visible=false;

  moon.visible=true;

  apollo.visible = shuttle.visible = orion.visible = true;

  apollo.position.set(1,0,0);
  shuttle.position.set(-1,0,0);
  orion.position.set(0,0,-1);

  document.getElementById("mode").innerText="Mode: MOON FPS";
}
