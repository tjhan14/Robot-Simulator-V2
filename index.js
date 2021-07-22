document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!

  // target the container in the HTML that we want to add stuff to
  const movesContainer = document.querySelector("#moves-container")

  // add event listener that responds to when an arrow key is pressed
  document.addEventListener("keydown", function(event){
    if (event.key === "ArrowDown"){
      console.log("ArrowDown")
      // create the list element to ADD to the movesContainer
      const downBox = document.createElement("li")
      downBox.textContent = "Down"

      // add event listener that deletes box when it is clicked

      downBox.addEventListener("click", function(event){
        event.target.remove()
      })

      // add list element to movesContainer
      movesContainer.append(downBox)
    }
    else if (event.key === "ArrowUp"){
      console.log("ArrowUp")
      const upBox = document.createElement("li")
      upBox.textContent = "Up"

      upBox.addEventListener("click", function(event){
        event.target.remove()
      })

      movesContainer.append(upBox)
    }
    else if (event.key === "ArrowLeft"){
      console.log("ArrowLeft")
      const leftBox = document.createElement("li")
      leftBox.textContent = "Left"

      leftBox.addEventListener("click", function(event){
        event.target.remove()
      })

      movesContainer.append(leftBox)
    }
    else if (event.key === "ArrowRight"){
      console.log("ArrowRight")
      const rightBox = document.createElement("li")
      rightBox.textContent = "Right"

      rightBox.addEventListener("click", function(event){
        event.target.remove()
      })

      movesContainer.append(rightBox)
    }
  })

  // target the MOVE button
  const moveButton = document.querySelector("button#move-button")

  // function to make robot move
  function moveRobot(movesContainer) {
    // look at first box inside movesContainer and see what direction
    const firstBox = movesContainer.firstElementChild
    // run only if there are boxes inside movesContainer
    if (firstBox) {
      if (firstBox.textContent === "Up") {
        // based on the direction of the box, we tell the robot to move in that direction
        move("up")
        // delete that box
        firstBox.remove()
      }
      else if (firstBox.textContent === "Down") {
        move("down")
        firstBox.remove()
      }
      else if (firstBox.textContent === "Left") {
        move("left")
        firstBox.remove()
      }
      else if (firstBox.textContent === "Right") {
        move("right")
        firstBox.remove()
      }
    } else {
      console.log("There are no boxes!")
    }
  }

  // add event listener that responds when the Move button is clicked
  moveButton.addEventListener('click', function(event) {
    console.log("Clicked!")

    setInterval(function() {moveRobot(movesContainer)}, 500)

  })

});


