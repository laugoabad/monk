
var slideNumber = 0;
var prevSlideNumber = 0;
var pixelsToMove = 0;
//calculates the width of the background image after it resizes to fit the screen heigth, ten I divide that number in the amount of frames that I want
function getPixelsToMove() {
    var numberOfFrames = 0;
    var div = document.getElementById("back");
    var rect = div.getBoundingClientRect();
    h = rect.height;
    //calculates the pixelsToMove for responsiveness
    if (screen.width <= 600) {
        numberOfFrames = 9
    }else{
        numberOfFrames =9.2
    }
    pixelsToMove = 12226 * h / 1080 / numberOfFrames;
}

//****function that slides forwards when click on forwards arrow***//  
function slideForwards() {
    slideNumber++;
    textAppears(slideNumber, prevSlideNumber);
    animateSlide(slideNumber);
    //marks with white square the current frame
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber)
    prevSlideNumber = slideNumber;
}

//****function that slides backwards when click on backwards arrow***//    

function slideBackwards() {
    slideNumber--
    //****stops the slide when you reach the slide start*****/
    document.getElementById('back').style.marginLeft = 0 + 'px';
    animateSlide(slideNumber);
    textAppears(slideNumber, prevSlideNumber);
    //marks with white square the current frame
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber)
    prevSlideNumber = slideNumber;
    //****turns  visible the next arrow   
}

//******function that slides by clicking on the slide indicator  */
function changeFrameSlide(elem) {
    slideNumber = elem.id;
    animateSlide(slideNumber);
    textAppears(slideNumber, prevSlideNumber);
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber);
    prevSlideNumber = slideNumber;
}
 //Chooses the elements to be shwon as the slides passes
function textAppears(textNumber, prevTextNumber) {
    document.getElementById('text-' + prevTextNumber).style.display = 'none';
    document.getElementById('text-' + textNumber).style.display = 'block';
    
    if (textNumber == 0) {
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('0').classList.add('square');
        document.getElementById('next').style.display = "block";
        document.getElementById('prev').style.display = 'none';
        document.getElementById('text-0').style.display = 'block';
        document.getElementById('story').style.display = "block";

    } else if (textNumber == 9) {
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('next').style.display = 'none';
        document.getElementById('prev').style.display = 'block';
        document.getElementById('story').style.display = "none";
        document.getElementById('loading-monk').style.display = "none";
    } else if (textNumber > 0 && textNumber < 9) {
        document.getElementById('foot-slide-text').style.display = 'block';
        document.getElementById('story').style.display = "none";
        document.getElementById('next').style.display = "block";
        document.getElementById('prev').style.display = 'block';
    }
}


//******function that changes the white marks in the frame list */
function markFrame(id, prev) {
    document.getElementById(id).classList.add('square');
    document.getElementById(prev).classList.remove('square');
}
//Creates the index to be shon in the text aside the list of frames
function createSlideNumberFooter(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= 8) {
        document.getElementById('path').innerHTML = slideNumber;
    }
}
 // animates the slider
function animateSlide(number) {
    getPixelsToMove();
    var margin = number * pixelsToMove;
    // if (number == 8){
    //     margin = 7 * pixelsToMove;
    // }
    console.log('margin',margin);
    
    document.getElementById("back").animate([
        
        { transform: 'translateX(-' + margin + 'px)' }
    ], {
        // timing options
        duration: 700,
        iterations: 1,
        fill: 'forwards',
    });
}

function start() {
  
//     window.onload = function () { 
//     document.querySelector('#monk img').classList.add('monk'); 
// }
    document.getElementById('0').classList.add('square');
    textAppears(slideNumber, prevSlideNumber);
}