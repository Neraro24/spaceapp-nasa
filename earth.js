function createLayer(color, opacity=0.18){
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1.02,128,128),
    new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity,
      blending: THREE.AdditiveBlending
    })
  );
  mesh.visible = false;
  scene.add(mesh);
  return mesh;
}

// 🌊 Flood (light blue)
const floodLayer = createLayer(0x66ccff, 0.16);

// 🌎 Earthquake (light brown)
const quakeLayer = createLayer(0xc2a078, 0.14);

// 🔥 Heatwave (orange glow)
const heatLayer = createLayer(0xff8844, 0.16);
