
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
    const slider = el.getAttribute('data-slider');
    eval(slider + '.clickBtn(direction)');
  }
  
  const privateStep = Symbol();
  class Slider {
    [privateStep] = 0;
    shift = 1;                                                        //slider shift offset
    pathToPicture = "img/";
    constructor(tagId) {
      this.tagId = tagId;
    }
    clickBtn(direction) {
      const slider = document.getElementById(this.tagId);
      const imagesCount = slider.childElementCount - 2;               // count of slides, 2 - buttons
      const shiftSize = parseInt(slider.children[0].style.width, 10);
      let position = slider.style.left ? parseInt(slider.style.left, 10) : 0 ;
        console.log(position, shiftSize);
      if (direction === 'inc') {
        slider.style.left = position - shiftSize;
      } else {
        slider.style.left = position + shiftSize;
      }
      this.renderSlide();
    }
    set step(step) {
      this[privateStep] = +step;
      this.renderSlide();
    }
    renderSlide() {
      
    }
  }
  
  //create a slider
  const animeslider = new Slider('animeslider');
 