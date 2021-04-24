var player,form,game,yes,no, col;
var level1Img, level3Img, score= 0;
var rand, word1, word2, word3, word4, word5,word7,word6,word8;
var gameState= "start"
var button1, button2, button3, textbox, typedWord,bg1;
var sprite1, sprite2, sprite3, sprite4, sprite5;
var positiveSound,failSound, spriteBg, sprite6,sprite7,sprite8;
var level2Img,triumph,bg1,okSound,fail2, b1,b2,b3;
var myFont, themeSound,slider,val,glitch,theme2,theme3
var button1pressed, button2pressed, button3pressed




var level1= ["fun", "too", "car","left", "then", "cool","read","grow", "one", "list", "see","food", "glad", 
             "life", "type", "most", "code", "wow", "find", "doll", "glow", "leo","wave", "ace", "bee","cope", "dare",
             "moon", "navy", "yum", "pure", "dog", "pure", "rich", "song", "life", "zone","wise","move", 
             "wine", "van", "will","soul","opt" ,"try", "best", "king", "sure", "nice", "date"]

var level2=["dance", "paint", "house", "wealth","piano","music", "movies","write","bored","funny","singer",
            "working","jazzy","beauty","games","typing","gamer","desert","alexa","happy","smile","angel","party","dream"
        ,   "laugh","faith","peace","lemon","camera","casual","belief","coffee","famous","family","brave","gazed","traces",
            "crafts","child","school","honest","artist","fairy","iconic","drawing","playing","dwell","books","kindle",
            "globe","jacket","racer","pencil","quotes","quiet","toffee","burger","gentle","grace","wishes"]
            console.log(level2.length)

var level3= ["access", "gladly", "agenda","moment", "palace", "phrase","academy","anxious", "battery", "imagine", "journey","radical", "opinion", 
            "strange", "fashion", "liberty", "phoenix", "pioneer", "telecom", "theatre", "winning", "virtual","success", "pretty", "public","random", "status",
            "stream", "tennis", "winter", "wonder", "removed", "replaced", "respect", "aircraft", "athletic", "academic","ceremony","exposure", 
            "humanity", "ideology", "laughter","language","keyboard" ,"lifetime", "medieval", "chemical", "driven", "easily", "dollar", "balance", "compact",
            "comment","example","explore","houses","fishing","fitness","gallery", "momentum", "visible", "collage", "shells", "drapes", "victorian",
            "frames", "highlight", "grills", "account", "airline", "bedroom"]
            console.log(level3.length)



function preload(){
    level1Img= loadImage("images/level1.png" )
    positiveSound= loadSound("sounds/positive.wav")
    gameOver= loadImage("images/gameover.webp")
    level2Img= loadImage("images/level2.jpg")
    triumph=loadSound("sounds/gameover.wav")
    bg1=loadImage("images/bg1.jpg")
    glitch=loadImage("images/glitch.jpg")
    level3Img= loadImage("images/level3.jpg")


    failSound= loadSound("sounds/fail.mp3")
    okSound=loadSound("sounds/110.wav")
    fail2= loadSound("sounds/fail2.wav")
    themeSound= loadSound("sounds/theme song.mp3")
    theme2= loadSound("sounds/theme2.mp3")
    theme3=loadSound("sounds/theme3.mp3")

    myFont= loadFont("fonts/DK Lemon Yellow Sun.otf")
  //  gif_createImg = createImg("giphy.gif");
   // gif_loadImg = loadImage("giphy.gif");
}

function setup(){

    createCanvas(windowWidth-25,windowHeight-25);
    background(bg1)
    //themeSound.play()
    button1= createButton("Level 1")
    button2= createButton("Level 2")
    button3= createButton("Level 3")

    b1= createButton("Song 1 ")
    b2= createButton("Song 2")
    b3= createButton("Song 3")

    b1.position((windowWidth/2)-600,30)
    b2.position((windowWidth/2)-530,30)
    b3.position((windowWidth/2)-460,30)

    b1.mousePressed(()=>{
        themeSound.play()
       // themeSound.loop()
        theme2.pause()
        theme3.pause()
    })
    b2.mousePressed(()=>{
        theme2.play()
      //  theme2.loop()
        themeSound.pause()
        theme3.pause()
    })
    b3.mousePressed(()=>{
        theme3.play()
    //    theme3.loop()
        themeSound.pause()
        theme2.pause()
    })

    button1.position((windowWidth/2)-440, windowHeight/2+70)
    button1.style('font-size','30px')
    button2.position((windowWidth/2)-60, windowHeight/2+70)
    button2.style('font-size','30px')
    button3.position((windowWidth/2)+300, windowHeight/2+70)
    button3.style('font-size','30px')

    /*slider = createSlider(0, 100, 50);
    slider.position(windowWidth/2-600, 30);
    slider.size(100, 50)*/
  
    yes= createButton("Yes!")
  
    textbox= createInput("Type here")
    textbox.style('font-size','30px')
    yes.hide()
    textbox.hide()
}

function draw(){

   

        if (gameState==="start"){
            
            button1.mousePressed(()=>{
                button1pressed= true
                button2pressed= false
                button3pressed= false
                background(level1Img)
             
                button1.hide()
                button2.hide()
                button3.hide()

               // val= slider.value()
               // themeSound.setVolume(slider.value())

                sprite1= createSprite(0,100,100,30)
                sprite1.shapeColor="white"
                sprite1.velocityX= Math.round(random(1,4))
                word1= level1[Math.round(random(0,49))]

                sprite2= createSprite(0,200,100,30)
                sprite2.shapeColor="white"
                sprite2.velocityX= Math.round(random(1,4))
                word2= level1[Math.round(random(0,49))]

                sprite3= createSprite(0,300,100,30)
                sprite3.shapeColor="white"
                sprite3.velocityX= Math.round(random(1,4))
                word3= level1[Math.round(random(0,49))]

                sprite4= createSprite(0,400,100,30)
                sprite4.shapeColor="white"
                sprite4.velocityX= Math.round(random(1,4))
                word4= level1[Math.round(random(0,49))]

                sprite5= createSprite(0,500,100,30)
                sprite5.shapeColor="white"
                sprite5.velocityX= Math.round(random(1,4))
                word5= level1[Math.round(random(0,49))]

                gameState= "play"
            })

            button2.mousePressed(()=>{
                background(level2Img)
                button1pressed= false
                button2pressed= true
                button3pressed=false
                
                button1.hide()
                button2.hide()
                button3.hide()

                sprite1= createSprite(0,100,100,30)
                sprite1.shapeColor="white"
                sprite1.velocityX= Math.round(random(1,4))
                word1= level2[Math.round(random(0,59))]

                sprite2= createSprite(0,200,100,30)
                sprite2.shapeColor="white"
                sprite2.velocityX= Math.round(random(1,4))
                word2= level2[Math.round(random(0,59))]

                sprite3= createSprite(0,300,100,30)
                sprite3.shapeColor="white"
                sprite3.velocityX= Math.round(random(1,4))
                word3= level2[Math.round(random(0,59))]

                sprite4= createSprite(0,400,100,30)
                sprite4.shapeColor="white"
                sprite4.velocityX= Math.round(random(1,4))
                word4= level2[Math.round(random(0,59))]

                sprite5= createSprite(0,500,100,30)
                sprite5.shapeColor="white"
                sprite5.velocityX= Math.round(random(1,4))
                word5= level2[Math.round(random(0,59))]
                
                sprite6= createSprite(-200,500,100,30)
                sprite6.shapeColor="white"
                sprite6.velocityX= Math.round(random(1,4))
                word6= level2[Math.round(random(0,59))]
                
                sprite7= createSprite(-200,500,100,30)
                sprite7.shapeColor="white"
                sprite7.velocityX= Math.round(random(2,6))
                word7= level2[Math.round(random(0,59))]

                gameState="play"

                //console.log("Hello")
            })

            button3.mousePressed(()=>{
                background(level3Img)
                button1pressed= false
                button2pressed= false
                button3pressed=true             
                
                sprite1= createSprite(0,100,100,30)
                sprite1.shapeColor="white"
                sprite1.velocityX= Math.round(random(1,4))
                word1= level3[Math.round(random(0,59))]

                sprite2= createSprite(0,200,100,30)
                sprite2.shapeColor="white"
                sprite2.velocityX= Math.round(random(1,4))
                word2= level3[Math.round(random(0,59))]

                sprite3= createSprite(0,300,100,30)
                sprite3.shapeColor="white"
                sprite3.velocityX= Math.round(random(1,4))
                word3= level3[Math.round(random(0,59))]

                sprite4= createSprite(0,400,100,30)
                sprite4.shapeColor="white"
                sprite4.velocityX= Math.round(random(1,4))
                word4= level3[Math.round(random(0,59))]

                sprite5= createSprite(0,500,100,30)
                sprite5.shapeColor="white"
                sprite5.velocityX= Math.round(random(1,4))
                word5= level3[Math.round(random(0,59))]
                
                sprite6= createSprite(-200,500,100,30)
                sprite6.shapeColor="white"
                sprite6.velocityX= Math.round(random(1,4))
                word6= level3[Math.round(random(0,59))]
                
                sprite7= createSprite(-200,500,100,30)
                sprite7.shapeColor="white"
                sprite7.velocityX= Math.round(random(2,6))
                word7= level3[Math.round(random(0,59))]



                gameState="play"

                button1.hide()
                button2.hide()
                button3.hide()
            })
        }

        else if (gameState=== "play") {
          if(button1pressed===true){
              background(level1Img)
          }
          if(button2pressed===true){
            background(level2Img)
        }
        if(button3pressed===true){
            background(level3Img)
        }
            drawSprites()

            textSize(30)
            textFont(myFont)
            textbox.show()
    
            fill("black")
            text("Score: "+ score, windowWidth/2+450, 50)

            typedWord=textbox.value()
            textbox.position(windowWidth/2-200, 30)
            textFont("times new roman")

            if(typedWord=== word1&& sprite1.visible===true&&sprite1.x<windowWidth){
                sprite1.visible= false
                word1= ""
                score= score+ 2
               positiveSound.play()
            }

            if(typedWord=== word2&& sprite2.visible===true &&sprite2.x<windowWidth){
             
                sprite2.visible= false
                word2= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word3&& sprite3.visible===true &&sprite3.x<windowWidth){
             
                sprite3.visible= false
                word3= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word4&& sprite4.visible===true &&sprite4.x<windowWidth){
             
                sprite4.visible= false
                word4= ""
                score= score+2
                positiveSound.play()
            }
            if(typedWord=== word5&& sprite5.visible===true &&sprite5.x<windowWidth){
             
                sprite5.visible= false
                word5= ""
                score= score+2
                positiveSound.play()
            }
            if(button2pressed&&typedWord=== word6&& sprite6.visible===true &&sprite6.x<windowWidth){
             
                sprite6.visible= false
                word6= ""
                score= score+2
                positiveSound.play()
            }
            if(button2pressed&&typedWord=== word7&& sprite7.visible===true &&sprite7.x<windowWidth){
             
                sprite7.visible= false
                word7= ""
                score= score+2
                positiveSound.play()
            }

            if(button1pressed&&sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                &&sprite4.visible===false&&sprite5.visible===false&&score===10){
                    score=score+10
                    gameState="end"
                }
                if(button2pressed&&sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                    &&sprite4.visible===false&&sprite5.visible===false&&sprite6.visible===false&&sprite7.visible===false&&score===14){
                        score = score + 10
                        gameState="end"
                    }
                    if(button3pressed&&sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                        &&sprite4.visible===false&&sprite5.visible===false&&sprite6.visible===false&&sprite7.visible===false&&score===14){
                            score = score+ 10
                            gameState="end"
                        }
    

            
            if(sprite1.x>windowWidth){                
                sprite1.visible=false
            }
            if(sprite2.x>windowWidth){
                sprite2.visible=false
            }
            if(sprite3.x>windowWidth){
                sprite3.visible=false
            }
            if(sprite4.x>windowWidth){
                sprite4.visible=false
            }
            if(sprite5.x>windowWidth){
                sprite5.visible=false
            }

            if(button2pressed&&sprite6.x>windowWidth){
                sprite6.visible=false

            }
            if(button2pressed&&sprite7.x>windowWidth){
                sprite7.visible=false

            }

            if(sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                &&sprite4.visible===false&&sprite5.visible===false){
                    gameState="end"
                }
               /* if(sprite1.visible===false&&sprite2.visible===false&&sprite3.visible===false
                    &&sprite4.visible===false&&sprite5.visible===false&&sprite6.visible===false&&sprite7.visible===false){
                        gameState="end"
                    }*/


           
            console.log(score)
            
            textSize(20)
            fill("red")
            text(word1, sprite1.x-25, sprite1.y+5)
            text(word2, sprite2.x-25, sprite2.y+5)
            text(word3, sprite3.x-25, sprite3.y+5)
            text(word4, sprite4.x-25, sprite4.y+5)
            text(word5, sprite5.x-25, sprite5.y+5)
            if(button2pressed){
                text(word6, sprite6.x-25, sprite6.y+5)
            text(word7, sprite7.x-25, sprite7.y+5)}



        }
    
        else if(gameState==="end"){
            
            background(glitch)
            
            //image(gameOver,windowWidth/2-400,windowHeight/2-380,800,800)
            textbox.hide()
            fill("white")
            textSize(30)
            yes.show()

            /*spriteBg=createSprite(windowWidth/2,490,500,40)
            spriteBg.shapeColor="white"*/
            drawSprites()
            text("Your score: "+score,windowWidth/2-600,100  )
           

            textFont("Century gothic")
            textStyle(BOLD)
            textSize(25)

            /*pink*/fill("#E721A1")
            text("Do you want to continue",windowWidth/2-603,200)
            /*cyan*/fill("#03C1E5")
            text("Do you want to continue",windowWidth/2-597,200)
            fill("white")
            text("Do you want to continue",windowWidth/2-600,200)


            /*pink*/fill("#E721A1")
            text("playing?",windowWidth/2-603,230)
            /*cyan*/fill("#03C1E5")
            text("playing?",windowWidth/2-597,230)
            /*white*/fill("white")
            text("playing?",windowWidth/2-600,230)
            
           
            yes.position(windowWidth/2-595,280)
            yes.size(100,50)
            yes.style('font-size', '30px');
            yes.mousePressed(gameState="start")
            yes.mousePressed(()=>{
                location = location
               // themeSound.play()
                gameState="start"

            })

            textSize(25)
            fill("white")
            textFont("arial")

            if((button2pressed||button3pressed)&&score===24){
                text("You got the high score!",windowWidth/2-600,150)
                triumph.play()
                
            }

            else if(button1pressed && score===20){
                text("You got the high score!",windowWidth/2-600,150)
                triumph.play()
                
            }
            else if(button1pressed && score===8){
                
                text("You did a good job!",windowWidth/2-600,150)
                okSound.play()
            }
            else if((button2pressed || button3pressed) && score=== 12){
                
                text("You did a good job!",windowWidth/2-600,150)
                okSound.play()
            }

            else if(button1pressed && score>=2 && score<=8){
                themeSound.pause()
                text("You can do better next time!",windowWidth/2-600,150)
                fail2.play()
               
            }
            else if((button2pressed || button3pressed) && score >= 8 && score <=12){
                themeSound.pause()
                text("You can do better next time!",windowWidth/2-600,150)
                fail2.play()
               
            }
            else if(button1pressed && (score===2|| score===0) ){
                text("Try harder next time!",windowWidth/2-600,150)
                failSound.play()
            }
            else if((button2pressed || button3pressed) && score < 8){
                themeSound.pause()
                text("You can do better next time!",windowWidth/2-600,150)
                fail2.play()
               
            }
           
        }
     
    }