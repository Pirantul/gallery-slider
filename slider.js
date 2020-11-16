
const privateStep = Symbol();
class Slider {
  constructor(tagId, options = {}) {
    this.tagId = tagId;
    this.container = document.querySelector(tagId);
    this.options = options;
    this.slides = this.container.getElementsByClassName('slider-slide');
    this.slidesWrapper = this.container.getElementsByClassName('slider-wrapper');
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
    step = this._getCalculatedStep(step);

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].classList.remove('slide-active');
    }
    this.slides[step].classList.add('slide-active');
    this._render(step);
  }
  
  next() {
    this.step = this.step + 1;
  }
  
  prev() {
    this.step = this.step - 1;
  }

  _getCalculatedStep(step) {
    const count = Math.abs(~~(step / this.slides.length)) + 1
    return (count * this.slides.length + step) % this.slides.length;
  }

  _mouseDown(event) {
    this.slideMouseStartPosition = event.x;
    this.slideStartPosition = this.slidesWrapper[0].style.right;
    this.isMouseDown = true;
  }

  _mouseUp(event) {
    const step = this._getCalculatedStep(this.step);
    const elWidth = this.slides[step].offsetWidth;
    this.isMouseDown = false;
    this.slidesWrapper[0].style.transition = "all 1s ease 0s";

    if ((Math.abs(this.slideMouseStartPosition - event.x)) < parseInt(elWidth) / 3) {
      this._render(step)
      return;
    } else {
      if (this.slideMouseStartPosition > event.x ) {
        this.next()
      } else {
        this.prev()
      }
    }
  }

  _mouseMove(event) {
    if (this.isMouseDown) {
      const step = this.step;
      this.slidesWrapper[0].style.transition = "none";
      this.slidesWrapper[0].style.right = parseInt(this.slidesWrapper[0].style.right) - event.movementX + "px";
    }
  }

  _setDragAttr() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].addEventListener("mousedown", this._mouseDown.bind(this));
      this.slides[i].addEventListener("mouseup", this._mouseUp.bind(this));
      this.slides[i].addEventListener("mousemove", this._mouseMove.bind(this));
    }
  }

  _render(step) {
    this.slidesWrapper[0].style.right = this.slides[this.step].offsetWidth * step;
  }
}

//create a slider1
const slider1 = new Slider('.slider-container', {loop: true});

slider1.step = 2;

