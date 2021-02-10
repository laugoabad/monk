
var slideNumber = 0;
var prevSlideNumber = 0;
var pixelsToMove = 0;

function start() {
    //turns invisible the backwards arrow at the begining of the slide
    if (slideNumber == 0) {
        document.getElementById('prev').style.display = 'none';
        document.getElementById('foot-slide-text').style.display = 'none';
    }
    document.getElementById('0').classList.add('square');

    if (screen.width > 1024) {
        pixelsToMove = 880
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

//****function that slides forwards when click on forwards arrow***//  
function slideForwards() {
    slideNumber++;
    document.getElementById('prev').style.display = 'block'
    textAppears(slideNumber, prevSlideNumber);
    animateSlide(slideNumber * pixelsToMove);
    if (slideNumber >= 9) {
        document.getElementById('next').style.display = 'none'
    }
    changeSlideFooter(slideNumber);
    //marks with white square the current frame
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber)
    prevSlideNumber = slideNumber;

}

//****function that slides backwards when click on backwards arrow***//    

function slideBackwards() {
    slideNumber--
    if (slideNumber == 0) {
        // display:none arrow backwards when you reach the firt frame
        document.getElementById('prev').style.display = 'none';
        //****stops the slide when you reach the slide start*****/
        document.getElementById('back').style.marginLeft = 0 + 'px';
    } else {
        animateSlide(slideNumber * pixelsToMove);
    }
    changeSlideFooter(slideNumber);
    textAppears(slideNumber, prevSlideNumber);
    //marks with white square the current frame
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber)
    prevSlideNumber = slideNumber;
    //****turns  visible the next arrow   
    document.getElementById('next').style.display = 'block';
}

function textAppears(textNumber, prevTextNumber) {
    if (prevTextNumber == 0) {
        document.getElementById('text-1').style.display = 'block';
        document.getElementById('text-0').style.display = 'none';

    } else {
        document.getElementById('text-' + prevTextNumber).style.display = 'none';
        document.getElementById('text-' + textNumber).style.display = 'block';
    }
}

//******function that changes the white marks in the frame list */
function markFrame(id, prev) {
    document.getElementById(id).classList.add('square');
    document.getElementById(prev).classList.remove('square');
}


//******function that changes the slides indicator  */
function changeFrameSlide(elem) {
    console.log ('elem', elem.id);
    slideNumber = elem.id;
    console.log('num', slideNumber);
    if (slideNumber == 0) {
        document.getElementById('prev').style.display = 'none';
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('story').style.display = "block";
    } else {
        document.getElementById('prev').style.display = 'block';
        animateSlide(slideNumber * pixelsToMove);
        changeSlideFooter(slideNumber);
        textAppears(slideNumber, prevSlideNumber);
        markFrame(slideNumber, prevSlideNumber);
        createSlideNumberFooter(slideNumber)
    }
    if (slideNumber >= 9) {
        document.getElementById('next').style.display = 'none';
    } else {
        document.getElementById('prev').style.display = 'block';
        document.getElementById('next').style.display = 'block'
    }
    
    prevSlideNumber = slideNumber;
}

function changeSlideFooter(slideNumber) {
    if (slideNumber <= 0 || slideNumber >= 8) {
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('story').style.display = "block";
    } else {
        document.getElementById('foot-slide-text').style.display = 'block';
        document.getElementById('story').style.display = "none";
    }
}

function createSlideNumberFooter(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= 8) {
        document.getElementById('path').innerHTML = slideNumber;
    }
}

function animateSlide (margin) {
    
    document.getElementById("back").animate([
        // keyframes  
        { transform: 'translateX(-'+ margin + 'px)' }
    ], {
        // timing options
        duration: 700,
        iterations: 1,
        fill: 'forwards',
    });
}