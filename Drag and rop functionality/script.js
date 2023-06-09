// // how its work
//  first we click on reset button then drag and drop image 
// // we can drag & drop image one container to another  container  
// // we can reset  image with the help of reset button 

function dropHandler(event) {
    event.preventDefault();
    
    // Get the data of the dragged item
    var data = event.dataTransfer.getData("text/plain");
    
    // Append the dragged item to the second container
    var container2 = document.getElementById("container2");
    container2.innerHTML = "";
    container2.appendChild(document.getElementById(data));
    
    // Display success message or update UI
    container2.innerHTML += "<p>Item dropped successfully!</p>";
   // Display success message or update UI
        var successMessage = document.createElement("p");
       successMessage.classList.add("success-message");
        container2.appendChild(successMessage);
      }
      
  
  
  function dragStartHandler(event) {
    // Add a CSS class to the dragged item for visual feedback
    event.target.classList.add("dragging");
    
    // Set the data of the dragged item
    event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  function dragOverHandler(event) {
    event.preventDefault();
  }
  
  function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    
    // Remove the dragged item CSS class
    var draggedItem = document.querySelector(".dragging");
    if (draggedItem) {
      draggedItem.classList.remove("dragging");
    }
    
    // Clear the second container and reset the first container
    container2.innerHTML = "<p>Drop the item here</p>";
    container1.innerHTML = `
      <img src="red-scooty.png" draggable="true" id="item1" ondragstart="dragStartHandler(event)">`;

}
  




