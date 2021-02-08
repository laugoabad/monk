
var counter = 0;
var prevCounter = 0; 

function start() { //turns invisible the backwards arrow at the begining of the slide
    if(counter == 0) {
        document.getElementById('prev').style.display = 'none'
    }
}

function slideForwards() {
    prevCounter = counter;
    counter--;
    document.getElementById('prev').style.display = 'block'
    textAppears(Math.abs(counter), Math.abs(prevCounter));
    document.getElementById('back').style.marginLeft = counter * 870 + 'px'; 
    if (Math.abs(counter) >=9) {
        document.getElementById('next').style.display = 'none' 
    }
}
    
function slideBackwards() {
    prevCounter = counter; 
    //makes display none arrow backwards when you reach the slide start
    if (counter == -1)
    {
        document.getElementById('prev').style.display = 'none';
    }
    //stops the slide whwn you reach the slide start
    if (counter == 0) {
        document.getElementById('back').style.marginLeft = 0 + 'px';
       
    } else {
        counter++
        textAppears(Math.abs(counter), Math.abs(prevCounter));
        document.getElementById('back').style.marginLeft = counter * 870 +'px';   
    }
   //turns  visible the next arrow   
    document.getElementById('next').style.display = 'block';
 }

 function textAppears(textNumber, prevTextNumber) {
     if(prevTextNumber == 0 ) {
         document.getElementById('text-1').style.display = 'block';
         document.getElementById('text-0').style.display = 'none';
    }else {
         document.getElementById('text-' + prevTextNumber).style.display = 'none';
         document.getElementById('text-' + textNumber).style.display = 'block';
    }
}
