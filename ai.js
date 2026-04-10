function AI(msg){
  document.getElementById("info").innerText = msg;
}

function shipAI(ship){
  if(ship==="apollo") AI("Explore Moon + take Earth shots");
  if(ship==="shuttle") AI("Multiplayer lobby active");
  if(ship==="orion") AI("Eliminate alien threats");
}
