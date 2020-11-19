
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
    if (options.mouseSwap) this._setDragAttr();
    if (options.switchInterval) this.setSwitchInterval();
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
    if (this.options.stepShift) {
    this.step = this.step + +this.options.stepShift;
    } else {
      this.step = this.step + 1;
    }
  }
  
  prev() {
    if (this.options.stepShift) {
      this.step = this.step - +this.options.stepShift;
    } else {
      this.step = this.step - 1;
    }
  }

  _getCalculatedStep(step) {
    const count = Math.abs(~~(step / this.slides.length)) + 1
    return (count * this.slides.length + step) % this.slides.length;
  }

  _mouseDown(event) {
    this.slideMouseStartPosition = event.x;
    this.slideStartPosition = this.slidesWrapper[0].style.transition;
    this.isMouseDown = true;
  }

  _mouseUp(event) {
    const step = this._getCalculatedStep(this.step);
    const elWidth = this.slides[step].offsetWidth;
    this.isMouseDown = false;
    this.slidesWrapper[0].style.transition = "all 1s ease 0s";

    if ((Math.abs(this.slideMouseStartPosition - event.x)) < parseInt(elWidth) / 5) {
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
    if (this.isMouseDown && event.movementX != 0) {
      this.slidesWrapper[0].style.transition = "none";
      this.slidesWrapper[0].style.transform = 'translateX(' + (parseInt(this.slidesWrapper[0].style.transform.slice(11)) + +event.movementX) + 'px)';
      console.log( parseInt(this.slidesWrapper[0].style.transform.slice(11)), event.movementX );
    }
  }

  _mouseLeave() {
    if (this.isMouseDown) {
      this.isMouseDown = false;
      this.slidesWrapper[0].style.transition = "all 1s ease 0s";
      this._render(this.step)
    }
    if (this.autoLoop) this.setSwitchInterval();
  }

  _mouseEnter() {
    if (this.autoLoop) {
      clearInterval(this.autoLoop);
    }
  }

  _setDragAttr() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].addEventListener("mousedown", this._mouseDown.bind(this));
      this.slides[i].addEventListener("mouseup", this._mouseUp.bind(this));
      this.slides[i].addEventListener("mousemove", this._mouseMove.bind(this));
      this.slides[i].addEventListener("mouseleave", this._mouseLeave.bind(this));
      this.slides[i].addEventListener("mouseenter", this._mouseEnter.bind(this));
    }
  }

  setSwitchInterval() {
    this.autoLoop = setInterval(()=>{
      this.next()
    }, +this.options.switchInterval * 1000);
  }

  _render(step) {
    // this.slidesWrapper[0].style.right = this.slides[step].offsetWidth * step;
    this.slidesWrapper[0].style.transform = 'translateX(' + -this.slides[step].offsetWidth * step + 'px)';
  }
}

//create a slider1
const slider1 = new Slider('.slider1', {}); 
//set active slide
slider1.step = 2;  

const slider2 = new Slider('.slider2', {loop: true, mouseSwap: true});
slider2.step = 1;  
const slider3 = new Slider('.slider3', {loop: true, mouseSwap: true, stepShift: 1, switchInterval: 2});
const slider4 = new Slider('.slider4', {loop: true, mouseSwap: true, stepShift: 2, switchInterval: 3});
