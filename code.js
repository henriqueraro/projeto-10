var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["794296bc-609f-41de-8638-dad1a06a884f","c40eb3ba-cd82-4f4e-bb21-f466de51e021","c54c61c9-f23f-4207-8ead-66c9a4a649af","d68364e5-4210-40cb-abb8-f9abff11544d","2e49cb1a-f40f-49bd-af08-93148f34fbf1","3d6e527e-46a0-4838-85e5-d3420013f894"],"propsByKey":{"794296bc-609f-41de-8638-dad1a06a884f":{"name":"cavaleiro","sourceUrl":null,"frameSize":{"x":264,"y":243},"frameCount":78,"looping":true,"frameDelay":12,"version":"7rTcynR63squXjCs0Z6Wbf1t2vBRicoT","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2112,"y":2430},"rootRelativePath":"assets/794296bc-609f-41de-8638-dad1a06a884f.png"},"c40eb3ba-cd82-4f4e-bb21-f466de51e021":{"name":"zumbi","sourceUrl":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png","frameSize":{"x":212,"y":285},"frameCount":1,"looping":true,"frameDelay":2,"version":"kAoR44db1dgeltHCNTVFPZHx0yVhiBww","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":212,"y":285},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kAoR44db1dgeltHCNTVFPZHx0yVhiBww/category_fantasy/rpgcharacter_18.png"},"c54c61c9-f23f-4207-8ead-66c9a4a649af":{"name":"veneno","sourceUrl":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png","frameSize":{"x":384,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O9uAMYqe0KUJeBPN45TFf9K2tDdk2uLF/category_video_games/gameplayobject_item_02.png"},"d68364e5-4210-40cb-abb8-f9abff11544d":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4/category_backgrounds/background_landscape03.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qSjszqHQD.yD5OrzhSjSLcXtmBbcZti4/category_backgrounds/background_landscape03.png"},"2e49cb1a-f40f-49bd-af08-93148f34fbf1":{"name":"","sourceUrl":null,"frameSize":{"x":294,"y":191},"frameCount":100,"looping":true,"frameDelay":12,"version":"ur1YCkoEuiGDk3.QfvKOe5OTZZolQ77J","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2352,"y":2483},"rootRelativePath":"assets/2e49cb1a-f40f-49bd-af08-93148f34fbf1.png"},"3d6e527e-46a0-4838-85e5-d3420013f894":{"name":"background_landscape09_1","sourceUrl":null,"frameSize":{"x":400,"y":399},"frameCount":431,"looping":true,"frameDelay":12,"version":"Dk57B0e7j.bLq5vgO2TrqdwvImyeeyWq","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":8400,"y":8379},"rootRelativePath":"assets/3d6e527e-46a0-4838-85e5-d3420013f894.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

  var fundo=createSprite(200, 200);
 fundo.setAnimation("fundo");

var playerPaddle= createSprite(360,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(30,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("veneno");
    ball.scale=0.1;
    playerPaddle.setAnimation("cavaleiro");
    playerPaddle.scale=0.3;
   computerPaddle.setAnimation("zumbi");
   computerPaddle.scale=0.3;
function draw() {
  background("white");
  if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle))
  {
    playSound("assets/hit.mp3");
  }
  
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
     playerPaddle.setAnimation("cavaleiro");
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=6;
     ball.velocityY=6;
  }
  
 

  drawnet();
  
 
    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  fill("white");
  text("BETTLE ZOMBIE", 200, 30);
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}
var fundo=createSprite(200, 200);
 fundo.setAnimation("fundo");

var playerPaddle= createSprite(360,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(30,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
    ball.setAnimation("veneno");
    ball.scale=0.1;
    playerPaddle.setAnimation("cavaleiro");
    playerPaddle.scale=0.3;
   computerPaddle.setAnimation("zumbi");
   computerPaddle.scale=0.3;
function draw() {
  background("white");
  if(ball.isTouching(playerPaddle) || ball.isTouching(computerPaddle))
  {
    playSound("assets/hit.mp3");
  }
  
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
     playerPaddle.setAnimation("cavaleiro");
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  
  if(keyDown("space"))
  {
     ball.velocityX=6;
     ball.velocityY=6;
  }
  
 

  drawnet();
  
 
    
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  fill("white");
  text("BETTLE ZOMBIE", 200, 30);
  
}



function drawnet()
{  
  for(var num=0;num<400;num=num+20)
  {
    line(200,num,200,num+10);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
