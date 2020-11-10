
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
  const slider = el.getAttribute('data-slider');
  eval(slider + '.clickBtn(direction)');
}

//constructor
class Slider {
  shift = 1; //slider shift offset
  pathToPicture = "img/";
  constructor(tagId) {
    this.step = 0; //number of start slide
    this.tagId = tagId;
  }
  clickBtn(direction) {
    const slider = document.getElementById(this.tagId);
    const imagesCount = slider.childElementCount - 2;
    const lastSlide = document.querySelector('img[class='+ this.tagId + '][style*="display: block"]'); 
    lastSlide.style.display = "none"; //убираем предыдущий слайд
    
    if (direction === 'inc') {
      this.step += 1;
      if (this.step > imagesCount - 3) this.step = 0;
    } else {
      this.step -= 1;
      if (this.step < 0) this.step = imagesCount - 3;
    }
    slider.children[this.step].style.display = "block";;
  }
}

//create a slider
const slider1 = new Slider('slider1');
// const slider2 = sliderFactory.makeSlider('slider2');

//change the default slider2 properties
// slider2.shift = 2;
// slider2.step = 3;

// slider1.addButton("img/left.png", 'dec', '40px');
// slider1.addButton("img/right.png", 'inc', '40px');
// slider2.addButton("img/left.png", 'dec', '40px');
// slider2.addButton("img/right.png", 'inc', '40px');

// slider1.step = 5;

// setTimeout(()=>slider1.step=3, 1000)
