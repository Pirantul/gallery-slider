
//arrow pressing function <> 
const onClickSliderBtn = (el, direction) => {
  const slider = el.getAttribute('data-slider');
  eval(slider + '.clickBtn(direction)');
}

//constructor
class Slider {
  activeSlide = 0; //number of start slide
  step = 1; //slider step offset
  pathToPicture = "img/";
  constructor(tagId) {
    this.tagId = tagId;
  }
  addSlides(images) {
    this.imagesCount = images.length;
    const divSlider = document.getElementById(this.tagId);
    images.forEach((pic, indx) => {
      const slide = document.createElement("img");
      slide.id = this.tagId + '-' + indx;
      slide.style.display = indx === this.activeSlide ? "block" : "none"; //видна только эта каринка
      slide.style.width = '100%';
      slide.style.height = '100%';
      slide.src = this.pathToPicture + pic;
      divSlider.appendChild(slide);
    })
  }
  addButton(pathToImg, direction, width) {
    const divSlider = document.getElementById(this.tagId);
    const button = document.createElement("img");
    button.setAttribute('data-slider', this.tagId);
    button.src = pathToImg;
    button.style.width = width;
    button.setAttribute("onclick", `onClickSliderBtn(this, '${direction}')`);
    divSlider.appendChild(button);
  }
  clickBtn(direction) {
    document.getElementById(this.tagId + '-' + this.activeSlide).style.display = "none"; //убираем предыдущий слайд
    
    if (direction === 'inc') {
      this.activeSlide += this.step;
      if (this.activeSlide > this.imagesCount - 1) this.activeSlide = 0;
    } else {
      this.activeSlide -= this.step;
      if (this.activeSlide < 0) this.activeSlide = this.imagesCount - 1;
    }

    document.getElementById(this.tagId + '-' + this.activeSlide).style.display = "block";
  }
}

//factory
const sliderFactory = {
  makeSlider: (tagId) => new Slider(tagId)
}

//create a slider
const slider1 = sliderFactory.makeSlider('slider1');
const slider2 = sliderFactory.makeSlider('slider2');

//change the default slider2 properties
slider2.step = 2;
slider2.activeSlide = 3;

slider1.addSlides(['s_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg']);
slider2.addSlides(['s_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg']);

slider1.addButton("img/left.png", 'dec', '40px');
slider1.addButton("img/right.png", 'inc', '40px');
slider2.addButton("img/left.png", 'dec', '40px');
slider2.addButton("img/right.png", 'inc', '40px');
