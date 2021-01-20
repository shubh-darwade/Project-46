class Form
{
    constructor()
     {
        this.a = "Play"
        this.button=createButton(this.a); 
        this.button2 =createButton('Moon mission');
        this.button2.hide();
      this.button3 =createButton('Mars mission');
     

     this.button3.hide();
  
         
 
     }

     display()
     {
        
      
           

        this.button.position(displayWidth/2,displayHeight/2);
        this.button.style('fontSize','40px');
        this.button.style('text','blue')
        this.button.style('width', '200px');
        this.button.style('height', '60px');
        this.button.style('background', 'orange');

        this.button.mousePressed(() => {

          gameState = 1;
       
      
        }
        )

     }
     start()
     {
        this.button.hide();      
this.button2.show();
this.button2 .position(displayWidth/2-100,displayHeight/2 - 100);
this.button2.style('fontSize','25px');
this.button2.style('text','blue')
this.button2.style('width', '200px');
this.button2.style('height', '60px');
this.button2.style('background', 'orange');

this.button2.mousePressed(() => {

    gameState=2;
 
    gameState2 =1;

  }
  )
 
  this.button3.show();
this.button3 .position(displayWidth/2-100,displayHeight/2);
this.button3.style('fontSize','25px');
this.button3.style('text','blue')
this.button3.style('width', '200px');
this.button3.style('height', '60px');
this.button3.style('background', 'orange');

this.button3.mousePressed(() => {

  gameState=2;

  gameState2 =2;

}
)



     }
    
     hide()
     {
       this.button.hide();
         this.button2.hide();
         this.button3.hide();
     }
     onoffhide()
     {
         this.onoff.hide();
     }


    }

 
