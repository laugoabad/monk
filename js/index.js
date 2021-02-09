
var slideNumber = 0;
var prevSlideNumber = 0;

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
                pixelsToMove = 800
            }
        }
    }
}

//****function that slides forwards when click on forwards arrow***//  
function slideForwards() {
    slideNumber++;
    document.getElementById('prev').style.display = 'block'
    textAppears(slideNumber, prevSlideNumber);
    document.getElementById('back').style.marginLeft = -slideNumber * pixelsToMove + 'px';
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
        document.getElementById('back').style.marginLeft = -slideNumber * pixelsToMove + 'px';
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
    slideNumber = elem.id;
    if (slideNumber == 0) {
        document.getElementById('prev').style.display = 'none';
        document.getElementById('foot-slide-text').style.display = 'none';
        document.getElementById('story').style.display = "block";
    } else {
        document.getElementById('prev').style.display = 'block';

    }
    if (slideNumber >= 9) {
        document.getElementById('next').style.display = 'none'
    } else {
        document.getElementById('prev').style.display = 'block';
    }

    document.getElementById('back').style.marginLeft = -slideNumber * pixelsToMove + 'px';
    changeSlideFooter(slideNumber);
    textAppears(slideNumber, prevSlideNumber);
    markFrame(slideNumber, prevSlideNumber);
    createSlideNumberFooter(slideNumber)
    prevSlideNumber = slideNumber;
}

function changeSlideFooter(slideNumber) {
    if (slideNumber <= 0 || slideNumber > 8) {
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