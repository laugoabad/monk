
var slideNumber = 0;
var prevSlideNumber = 0;
var pixelsToMove = 0;


//****function that slides forwards when click on forwards arrow***//  
function slideForwards() {
    slideNumber++;
    textAppears(slideNumber, prevSlideNumber);
    animateSlide(slideNumber * pixelsToMove);
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
    animateSlide(slideNumber * pixelsToMove);
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

    console.log('prev ', prevSlideNumber, 'number ', slideNumber);
    animateSlide(slideNumber * pixelsToMove);
    textAppears(slideNumber, prevSlideNumber);
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber);
    prevSlideNumber = slideNumber;
}

function textAppears(textNumber, prevTextNumber) {
    console.log('textapp ', prevTextNumber, textNumber);
    document.getElementById('text-' + prevTextNumber).style.display = 'none';
    document.getElementById('text-' + textNumber).style.display = 'block';
    
    if (textNumber == 0) {
        console.log('entra 0');
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('0').classList.add('square');
        document.getElementById('next').style.display = "block";
        document.getElementById('prev').style.display = 'none';
        document.getElementById('text-0').style.display = 'block';
        document.getElementById('story').style.display = "block";


    } else if (textNumber == 9) {
        console.log('entra 9');
        document.getElementById('foot-slide-text').style.display = 'block';
        document.getElementById('next').style.display = 'none';
        document.getElementById('prev').style.display = 'block';
        document.getElementById('story').style.display = "none";
    } else if (textNumber > 0 && textNumber < 9) {
        console.log('entra <>');
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

function createSlideNumberFooter(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= 8) {
        document.getElementById('path').innerHTML = slideNumber;
    }
}

function animateSlide(margin) {
    document.getElementById("back").animate([
        // keyframes  
        { transform: 'translateX(-' + margin + 'px)' }
    ], {
        // timing options
        duration: 700,
        iterations: 1,
        fill: 'forwards',
    });
}

function start() {
    //turns invisible the backwards arrow at the begining of the slide
    window.onload = function () { document.getElementById("loading-monk").style.display = "none" }
    document.getElementById('0').classList.add('square');
    textAppears(slideNumber, prevSlideNumber);

    if (screen.width > 1024) {
        pixelsToMove = 860
    } else {
        if (screen.width <= 1024 && screen.width > 425) {
            pixelsToMove = 810;
        } else {
            if (screen.width <= 425) {
                pixelsToMove = 820;
                document.getElementById('text').style.margintop = '0px'
            }
        }
    }
}