
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
  const slider = el.getAttribute('data-slider');
  eval(slider + '.clickBtn(direction)');
}

let privateStep = Symbol();
class Slider {
  [privateStep] = 5;
  shift = 1;                                                //slider shift offset
  pathToPicture = "img/";
  constructor(tagId) {
    this.tagId = tagId;
  }
  clickBtn(direction) {
    const slider = document.getElementById(this.tagId);
    const imagesCount = slider.childElementCount - 2;       // count of slides, 2 - buttons
    
    if (direction === 'inc') {
      this[privateStep] += 1;
      if (this[privateStep] > imagesCount - 3) this[privateStep] = 0;
    } else {
      this[privateStep] -= 1;
      if (this[privateStep] < 0) this[privateStep] = imagesCount - 3;
    }
    this.renderSlide();
  }
  set step(step) {
    this[privateStep] = +step;
    this.renderSlide();
  }
  renderSlide() {
    const lastSlide = document.querySelector(`img[class=${this.tagId}][style*="display: block"]`); 
    lastSlide.style.display = "none";                       //delete last slide
    const slider = document.getElementById(this.tagId);
    slider.children[this[privateStep]].style.display = "block";;    //render new slide
  }
}

//create a slider1
const slider1 = new Slider('slider1');
setInterval(()=>slider1.step = Math.floor(Math.random() * Math.floor(7)), 1000);

//create a slider2
const slider2 = new Slider('slider2');
slider2.setStep = 5;
setInterval(()=>slider2.step = Math.floor(Math.random() * Math.floor(7)), 1500);

//create a slider3
const slider3 = new Slider('slider3');
slider3.step = 3;
