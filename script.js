let inputs = document.getElementById("input");
let text = document.querySelector(".text");



function Add() {
  if (inputs.value == "") {
    alert("please inter task");
  } 
  else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="ri-delete-bin-6-fill"></i>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click", remove);

    function remove(){
        newEle.remove()
    }
  }
}
