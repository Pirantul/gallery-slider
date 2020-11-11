
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
    const slider = el.getAttribute('data-slider');
    eval(slider + '.clickBtn(direction)');
  }
  
  const privateStep = Symbol();
  class Slider {
    [privateStep] = 0;
    pathToPicture = "img/";
    constructor(tagId) {
      this.tagId = tagId;
    }
    clickBtn(direction) {
      const slider = document.getElementById(this.tagId);
      const imagesCount = slider.childElementCount;              
      const shiftSize = parseInt(slider.children[0].style.width, 10);
      let position = slider.style.left ? parseInt(slider.style.left, 10) : 0 ;
      
      if (direction === 'inc') {
        if (position === -shiftSize * (imagesCount - 1)) {
            slider.style.left = 0;
        } else {
            slider.style.left = position - shiftSize;
        }
        
      } else {
        if (position === 0) {
            slider.style.left = -shiftSize * (imagesCount - 1);
        } else {
            slider.style.left = position + shiftSize
        }
      }
    }
    
  }
  
  //create a slider
  const animeslider = new Slider('animeslider');
 