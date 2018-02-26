$( document ).ready(function() {
  var randomNumber = 
      Math.floor(Math.random() * 100);

    $("#randomNumberCard").text(randomNumber);

  var counter = 0;

  var numberChoices = [3, 5, 12, 8];

  var gameRunning = false;

//   for loop to create the images, uses the i to incriment through the pictures for multiple, different images.
  for (var i = 0; i < numberChoices.length; i++) {
   
      var crystalImages = $("<img>");
      
    crystalImages.addClass("crystal-image");

    crystalImages.attr("src", "./assets/images/crystal"+ (i+1) +".jpg");

    crystalImages.attr("crystalWorth", numberChoices[i]);

    $("#crystals").append(crystalImages);
    console.log($("#crystals"));
  }

// on click function to make the game work
  $(".crystal-image").on("click", function() {
    
    var crystalValue = ($(this).attr("crystalWorth"));
    crystalValue = parseInt(crystalValue);
   
    var gameRunning = true;

    counter += crystalValue;

    $("#userNumber").text(counter);

    // I went with a page reset to restart the game 
    if (counter === randomNumber) {
      $(".winLose").text("You win!");
      gameRunning = false;
      var windowTimeout = setTimeout(function(){
        window.location.reload();
      }, 1000);
    }

    else if (counter >= randomNumber) {
        $(".winLose").text("You lose!");
        gameRunning = false;
        var windowTimeout = setTimeout(function(){
            window.location.reload();
          }, 1000);
    }

  });
});