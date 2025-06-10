$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     
     toggleGrid;


    // TODO 2 - Create Platforms

     createPlatform(600, 110, 20, 475, "black"); 
     createPlatform(585, 110, 50, 20, "grey");
     createPlatform(1300, 650, 100, 20, "brown");  //plat one
     createPlatform(1150, 525, 100, 20, "brown");  //plat 2
     createPlatform(1000, 450, 100, 20, "brown");    //plat 3
     createPlatform(500, 575, 200, 50, "yellow");   //cross plat under red
     createPlatform(800, 325, 100, 20, "brown");   //plat 4
     createPlatform(900, 550, 50, 20, "brown");    //plat under 4-5
     createPlatform(1100, 250, 300, 20, "brown");   // plat 5 
     createPlatform(450, 225, 300, 20, "gray");  // cross plat top
     createPlatform(100, 200, 25, 20, "black");     // plat 6 "high up"
     createPlatform(200, 400, 25, 20, "black");     // plat 7 middle
     createPlatform(300, 150, 25, 20, 'black');     // plat 8 bottom
     createPlatform(500, 225, 100, 225, "white"); // player blocker left
     createPlatform(600, 225, 100, 225, "white"); // player blocker right
    // TODO 3 - Create Collectables
    (createCollectable("diamond", 100, 100, 0.5, 1)) //collectable 3 
    createCollectable("grace", 550, 500, 0.5, 0.7); //collectable 4
    createCollectable("max", 625, 500, 0.5, 0.5);  //col;lectable 1
    createCollectable("steve", 1350, 100, 0.5, 1); //collectable 2


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 40000);
    createCannon("top", 300, 40000);
    createCannon("top", 400, 40000);
    createCannon("top", 500, 40000);
    createCannon("top", 600, 40000);
    createCannon("top", 700, 40000);
    createCannon("top", 800, 40000);
    createCannon("top", 900, 40000);
    createCannon("top", 1000, 40000);
    createCannon("top", 1200, 40000);
    createCannon("top", 1300, 40000);
    createCannon("top", 1100, 40000);
    createCannon("right", 750, 2500);
    createCannon("right", 450, 4000);
    createCannon("left", 475, 6500);
    createCannon("left", 50, 5500);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
