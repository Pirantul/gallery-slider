
const privateStep = Symbol();
class Slider {
  slideMouseStartPosition = 0;
  slideStartPosition = 0;
  isMouseDown = false;
  constructor(tagId, options = {}) {
    this.tagId = tagId;
    this.container = document.querySelector(tagId);
    this.options = options;
    this.slides = this.container.getElementsByClassName('slider-slide');
    this.slideActive = this.container.getElementsByClassName('slide-active');
    this.prevBtn = this.container.querySelector('.slider-btn-prev');
    this.nextBtn = this.container.querySelector('.slider-btn-next');
    this.prevBtn.addEventListener("click", this.prev.bind(this));
    this.nextBtn.addEventListener("click", this.next.bind(this));
    this._setDragAttr();
  }
  
  get step() {
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i] === this.slideActive[0]) return i;
    }
    throw new Error('Not find active slide')
  }
  
  set step(step) {
    
    if (!this.options.loop) {
      if (step < 0 || step > this.slides.length - 1) {
        return
      }
    }
    step = this.getCalculatedStep(step);

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.right = this.slides[i].offsetWidth * step - 1;
    }
    for (let i = 0; i < this.slideActive.length; i++) {
      this.slides[i].classList.remove('slide-active');
    }
    this.slides[step].classList.add('slide-active');
  }

  getCalculatedStep(step) {
    const count = Math.abs(~~(step / this.slides.length)) + 1
    return (count * this.slides.length + step) % this.slides.length
  }
  
  next() {
    this.step = this.step + 1;
  }
  
  prev() {
    this.step = this.step - 1;
  }

  mouseDown(event) {
    this.slideMouseStartPosition = event.x;
    this.slideStartPosition = this.slides[this.step].style.right;
    this.slidePrevStartPosition = this.slides[this.getCalculatedStep(this.step - 1)].style.right;
    this.slideNextStartPosition = this.slides[this.getCalculatedStep(this.step + 1)].style.right;

    this.isMouseDown = true;
  }

  mouseUp(event) {
    const step = this.getCalculatedStep(this.step);
    const elWidth = this.slides[step].offsetWidth;
    this.isMouseDown = false;
    this.slides[step].style.transition = "all 1s ease 0s";
    this.slides[this.getCalculatedStep(step - 1)].style.transition = "all 1s ease 0s";
    this.slides[this.getCalculatedStep(step + 1)].style.transition = "all 1s ease 0s";

    if ((Math.abs(this.slideMouseStartPosition - event.x)) < parseInt(elWidth) / 5) {
      this.slides[step].style.right = this.slideStartPosition;
      this.slides[this.getCalculatedStep(step - 1)].style.right = this.slidePrevStartPosition;
      this.slides[this.getCalculatedStep(step + 1)].style.right = this.slideNextStartPosition;
      return;
    } else {
      if (this.slideMouseStartPosition > event.x ) {
        this.next()
      } else {
        this.prev()
      }
    }
  }

  mouseMove(event) {
    if (this.isMouseDown) {
      const step = this.getCalculatedStep(this.step);
      this.slides[step].style.transition = "none";
      this.slides[this.getCalculatedStep(step - 1)].style.transition = "none";
      this.slides[this.getCalculatedStep(step + 1)].style.transition = "none";
      this.slides[step].style.right = parseInt(this.slides[step].style.right) - event.movementX + "px";
      this.slides[this.getCalculatedStep(step - 1)].style.right = parseInt(this.slides[this.getCalculatedStep(step - 1)].style.right) - event.movementX + "px";
      this.slides[this.getCalculatedStep(step + 1)].style.right = parseInt(this.slides[this.getCalculatedStep(step + 1)].style.right) - event.movementX + "px";
    }
  }

  _setDragAttr() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].addEventListener("mousedown", this.mouseDown.bind(this));
      this.slides[i].addEventListener("mouseup", this.mouseUp.bind(this));
      this.slides[i].addEventListener("mousemove", this.mouseMove.bind(this));
    }
  }
}

//create a slider1
const slider1 = new Slider('.slider-container', {loop: true});

slider1.step = -4

