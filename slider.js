
const privateStep = Symbol();
class Slider {
  
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

    const count = Math.abs(~~(step / this.slides.length)) + 1
    step = (count * this.slides.length + step) % this.slides.length

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.right = this.slides[i].offsetWidth * step - 1;
    }
    for (let i = 0; i < this.slideActive.length; i++) {
      this.slides[i].classList.remove('slide-active');
    }
    this.slides[step].classList.add('slide-active');
  }
  
  next() {
    this.step = this.step + 1;
  }
  
  prev() {
    this.step = this.step - 1;
  }
  
  render() {
        
  }
}

//create a slider1
const slider1 = new Slider('.slider-container', {loop: true});

slider1.step = -4

