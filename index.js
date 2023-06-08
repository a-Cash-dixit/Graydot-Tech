function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  // Set the drag's format and data.
  // Use the event target's id for the data
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  // Get the data, which is the id of the source element
  var data = ev.dataTransfer.getData("text");
  //console.log(data);
  ev.target.appendChild(document.getElementById(data));
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 2 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}
function reset(e){
  console.log("reset");
  e.preventDefault();
  // get both containers
  let rightContainer=document.getElementById("rightContainer");
  let leftContainer=document.getElementById("leftContainer");
  // loop through the childnodes of rightcontainer
  while(rightContainer.hasChildNodes()){
    leftContainer.appendChild(rightContainer.firstChild);//adding childnode to left container
    rightContainer.removeChild(rightContainer.firstChild);//deleting childnode to right container
  }
}