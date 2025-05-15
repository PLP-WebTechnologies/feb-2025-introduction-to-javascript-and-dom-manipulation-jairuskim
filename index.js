 const start = document.getElementById("start-btn")
 const click_me = document.getElementById("click_btn")
 const shape = document.getElementById("shape_btn")

 start.addEventListener('click', started);
   
  function started() {
    alert("THE PROGRAM HAS STARTED");
  }
  
  click_me.addEventListener('click', clickMe);
  
  function clickMe(){
    click_btn.style.backgroundColor = "blue";
  }

  shape.addEventListener("click", shapeType)
  function shapeType(){
    shape_btn.classList.toggle("triangle")
  }