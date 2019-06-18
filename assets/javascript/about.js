
var step = 1;
var purpleCount = 0;
//   Change Color to create a gradient wave flow of colors
// function dynoColor(){
//   for(i=0; i<10; i++){
//     var red = 25*i + count;
//     var green = 25*i + count;
//     var blue = 25 * i + count;
//     $(".footer"+i).css("backgroundColor", "rgb(" + red + "," + green + "," + blue + ")");
//   }
//   count=count+step*1.5;
// }


function purpleColor(){  

      var red =   purpleCount;
      var green = purpleCount;
      var blue =  purpleCount; 

    purpleCount = purpleCount + step * 1.5;



    if (purpleCount > 100)
    {
      step = -1;
    }

    if (purpleCount === 0)
    {
      step = 1;  
    }

      $("#footer").css("backgroundColor", "rgb(" + red + "," + green + "," + blue + ")");
  
}

var dyno = setInterval(purpleColor,50);