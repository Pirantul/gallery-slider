
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
  const slider = el.getAttribute('data-slider');
  eval(slider + '.clickBtn(direction)');
}

//constructor
class Slider {
  shift = 1;                                                //slider shift offset
  pathToPicture = "img/";
  constructor(tagId) {
    this.step = 0;                                          //number of start slide
    this.tagId = tagId;
  }
  clickBtn(direction) {
    const slider = document.getElementById(this.tagId);
    const imagesCount = slider.childElementCount - 2;       // count of slides, 2 - buttons
    
    if (direction === 'inc') {
      this.step += 1;
      if (this.step > imagesCount - 3) this.step = 0;
    } else {
      this.step -= 1;
      if (this.step < 0) this.step = imagesCount - 3;
    }
    this.renderSlide();
  }
  setStep(step) {
    this.step = +step;
    this.renderSlide();
  }
  renderSlide() {
    const lastSlide = document.querySelector(`img[class=${this.tagId}][style*="display: block"]`); 
    lastSlide.style.display = "none";                       //delete last slide
    const slider = document.getElementById(this.tagId);
    slider.children[this.step].style.display = "block";;    //render new slide
  }
}

//create a slider1
const slider1 = new Slider('slider1');
slider1.setStep(5);

// setTimeout(()=>slider1.step=3, 1000)
setInterval(()=>slider1.setStep(Math.floor(Math.random() * Math.floor(7))), 1000);

