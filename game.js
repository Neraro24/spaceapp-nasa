const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

let keys = {};

document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);

let yaw=0,pitch=0;

document.addEventListener("mousemove",(e)=>{
  mouse.x = (e.clientX/innerWidth)*2-1;
  mouse.y = -(e.clientY/innerHeight)*2+1;

  yaw -= e.movementX*0.002;
  pitch -= e.movementY*0.002;
});

document.addEventListener("click",()=>{

  raycaster.setFromCamera(mouse,camera);

  if(mode==="earth"){
    const hit = raycaster.intersectObject(earth);
    if(hit.length){
      AI("Earth scanned");
    }
  }

  if(mode==="moon"){
    const hit = raycaster.intersectObjects([apollo,shuttle,orion]);

    if(hit.length){
      if(hit[0].object===apollo) shipAI("apollo");
      if(hit[0].object===shuttle) shipAI("shuttle");
      if(hit[0].object===orion) shipAI("orion");
    }
  }
});

function move(){
  const speed=0.05;

  if(keys["w"]) camera.position.z -= Math.cos(yaw)*speed;
  if(keys["s"]) camera.position.z += Math.cos(yaw)*speed;
  if(keys["a"]) camera.position.x -= Math.sin(yaw)*speed;
  if(keys["d"]) camera.position.x += Math.sin(yaw)*speed;

  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
}

// loop
function animate(){
  requestAnimationFrame(animate);

  if(mode==="earth") updateEarth();
  move();

  renderer.render(scene,camera);
}

animate();
