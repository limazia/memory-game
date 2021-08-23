// @description load all images
document.body.onload = loadImages();

// @description insert images in memory game
function loadImages() {
  for (let v = 0; v < 2; v++) {
    for (let x = 0; x < 12; x++) {
      const type = images[x].replace(".jpg", "");

      var newImage = document.createElement("img");
      newImage.src = "images/" + images[x];
    
      var liItem = document.createElement('li')
      liItem.setAttribute("class", "card");
      liItem.setAttribute("type", "image" + type);
      liItem.appendChild(newImage)

      document.getElementById("card-deck").appendChild(liItem);
    }
  }
}