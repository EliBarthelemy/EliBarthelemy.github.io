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
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(900,650,300,30)
    createPlatform(550,550,300,30)
    createPlatform(650,350,300,30)
    createPlatform(300,450,300,30)
    createPlatform(950,250,300,30)
    createPlatform(200,350,10,30)
    createPlatform(1250,80,10,200)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("max",1200,70,20,0.5);
    createCollectable("kennedi",320,370,20,0.5);
    createCollectable("steve",1300,700,20,0.5);



    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right",450,750)
    createCannon("right",30,1400)
    createCannon("right",800,4000)
    createCannon("right",700,5000)
    createCannon("top",1380,770)
    createCannon("top",130,0.5)
    createCannon("bottom",300,1450)
    createCannon("bottom",500,1350)
    createCannon("bottom",700,1550)
    createCannon("left",150,6000)
    createCannon("left",100,6000)
    createCannon("left",160,6000)
    createCannon("left",170,6000)
    createCannon("left",130,6000)
    createCannon("left",120,6000)
    createCannon("left",110,6000)
    createCannon("left",140,6000)
    createCannon("left",90,6000)
    createCannon("left",80,6000)
    createCannon("left",70,6000)
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
