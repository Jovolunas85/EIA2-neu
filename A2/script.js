document.querySelector("#szene2").object3D.visible = false;
 document.getElementById("textOne").addEventListener("click", function () {
    console.log("hallo")

    document.querySelector("#szene1").object3D.visible = false;
    document.querySelector("#szene2").object3D.visible = true;
    
  })
  document.getElementById("textTwo").addEventListener("click", function () {
    console.log("hallo")

    document.querySelector("#szene1").object3D.visible = true;
    document.querySelector("#szene2").object3D.visible = false;
    
  })