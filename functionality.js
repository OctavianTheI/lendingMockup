const pictureSlide2 = document.querySelector('.picture-slide2');

const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const leftArrow = document.querySelector('.radio-left-arrow');
const rightArrow = document.querySelector('.radio-right-arrow');

const renovation1 = document.querySelector('.renovation1');
const renovation2 = document.querySelector('.renovation2');
const renovation3 = document.querySelector('.renovation3');

const renovationDetail1 = document.querySelector('.renovationDetail1');
const renovationDetail2 = document.querySelector('.renovationDetail2');
const renovationDetail3 = document.querySelector('.renovationDetail3');
const renovationDetail4 = document.querySelector('.renovationDetail4');

const styleOfPic = document.createElement('style');
styleOfPic.innerHTML = `
  .picture-slide2 {
    width: 679px;
    height: 482px;
    float: right; 
  }
  `;

// const activeRenovationHeader = document.createElement('style');
// activeRenovationHeader.innerHTML = `
//     .projectNames-item {
//       color:#E3B873;
//       text-decoration: underline;
//     }
//     `;
//
// const defaultRenovationHeader = document.createElement('style');
// defaultRenovationHeader.innerHTML = `
//     .projectNames-item {
//       color: rgba(255, 255, 255, 0.3);
//       text-decoration: none;
//     }
//     `;

var length = pictureSlide2.src.length;
var currentPic = pictureSlide2.src.substring(length-8);

function click1() {
    if(currentPic != 'pic1.jpg') {
        pictureSlide2.src='images/slide2/pic1.jpg';
        currentPic = 'pic1.jpg';
        renovation1.style.color = `\#E3B873`;
        renovation1.style['text-decoration'] = "underline";
        renovation2.style.color = `rgba(255, 255, 255, 0.3)`;
        renovation2.style['text-decoration'] = "none";
        renovation3.style.color = `rgba(255, 255, 255, 0.3)`;
        renovation3.style['text-decoration'] = "none";
        dot1.style['background-color'] =  '\#FFFFFF';
        dot2.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        dot3.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        renovationDetail1.innerHTML = `Rostov-on-Don<br>LCD Admiral`;
        renovationDetail2.innerHTML = `81 m2`;
        renovationDetail3.innerHTML = `3.5 months`;
        renovationDetail4.innerHTML = `Upon request`;
    }
}

function click2() {
    if(currentPic != 'pic2.jpg') {
        pictureSlide2.src='images/slide2/pic2.jpg';
        pictureSlide2.appendChild(styleOfPic);
        currentPic = 'pic2.jpg';
        renovation2.style.color = `\#E3B873`;
        renovation2.style['text-decoration'] = "underline";
        renovation1.style.color = `rgba(255, 255, 255, 0.3)`;
        renovation1.style['text-decoration'] = "none";
        renovation3.style.color = `rgba(255, 255, 255, 0.3)`;
        renovation3.style['text-decoration'] = "none";
        dot1.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        dot2.style['background-color'] =  '\#FFFFFF';
        dot3.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        renovationDetail1.innerHTML = `Sochi<br>Thieves`;
        renovationDetail2.innerHTML = `60 m2`;
        renovationDetail3.innerHTML = `1 month`;
        renovationDetail4.innerHTML = `Upon request`;
    }
}

function click3() {
    if(currentPic != 'pic3.jpg') {
        pictureSlide2.src='images/slide2/pic3.jpg';
        pictureSlide2.appendChild(styleOfPic);
        currentPic = 'pic3.jpg';
        renovation3.style.color = `\#E3B873`;
        renovation3.style['text-decoration'] = "underline";
        renovation1.style['text-decoration'] = "none";
        renovation1.style.color = `rgba(255, 255, 255, 0.3)`;
        renovation2.style['text-decoration'] = "none"
        renovation2.style.color = `rgba(255, 255, 255, 0.3)`;
        dot1.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        dot2.style['background-color'] =  'rgba(255, 255, 255, 0.3)';
        dot3.style['background-color'] =  '\#FFFFFF';
        renovationDetail1.innerHTML = `Rostov-on-Don<br>Patriotic`;
        renovationDetail2.innerHTML = `124 m2`;
        renovationDetail3.innerHTML = `4 months`;
        renovationDetail4.innerHTML = `Upon request`;
    }
}

function clickLeft() {
    if (currentPic == 'pic1.jpg') {
        click3()
    } else if (currentPic == 'pic2.jpg') {
        click1()
    } else {
        click2()
    }
}

function clickRight() {
    if (currentPic == 'pic1.jpg') {
        click2()
    } else if (currentPic == 'pic2.jpg') {
        click3()
    } else {
        click1()
    }
}