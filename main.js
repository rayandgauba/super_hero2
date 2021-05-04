var canvas = new fabric.Canvas("myCanvas");

var block_img_width = 30;
 var block_img_height = 30;
 
 var player_x = 10;
 var player_y = 10;
 var player_object = "";

 function player_update(){
     fabric.Image.fromURL("player.png" , function(Img){
         player_object=Img;

         player_object.scaleToWidth(150);
         player_object.scaleToHeight(140);
         player_object.set({top:player_y , left:player_x});
         canvas.add(player_object);
     });
 }
  function new_image(get_image){
      fabric.Image.fromURL(get_image , function(Img){
          block_img_object=Img;
          block_img_object.scaleToWidth(block_img_width);
          block_img_object.scaleToHeight(block_img_height);
          block_img_object.set({top:player_y , left:player_y});
          canvas.add(block_img_object);
      });
  }

  window.addEventListener("keydown" , my_keydown);
  function my_keydown(e) {
      keypressed=e.keyCode;
      console.log(keypressed);

     if (keypressed == '37') {
         left();
         console.log("Left");
     }

     if (keypressed == '38') {
         up();
         console.log("Up");
     }
     
     if (keypressed == '39') {
         right();
         console.log("Right");
     }

     if (keypressed == '40') {
         down();
         console.log("Down");
     }

     if (keypressed == '70') {
         new_image('ironman_face.png');
         console.log("F");
     }

     if (keypressed == '66') {
         new_image('spiderman_body.png"B');
         console.log("B");
     }

     if (keypressed == '76') {
         new_image("hulk_legs.png");
         console.log("L");
     }

     if (keypressed == '82') {
         new_image('thor_right_hand.png');
         console.log("R");
     }

     if (keypressed == '72') {
         new_image('captain_america_left_hand.png');
         console.log("H");
     }
     }