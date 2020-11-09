const config = [
  {
    tagId: "slider-1", //ID of DIV element in DOM
    activeSlide: 0, //number of start slide
    step: 1, //slider step offset
    images: ['s_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'],
    pathToPicture: "img/"
  }, 
  {
    tagId: "slider-2",
    activeSlide: 3,
    step: 2,
    images: ['s_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'],
    pathToPicture: "./img/"
  }]

  const addSlider = (slider, i) => {
    const divSlider = document.getElementById(slider.tagId);
    //add slides
    slider.images.map((pic, indx) => {
      const slide = document.createElement("img");
      slide.id = slider.tagId + '-' + indx;
      slide.style.display = indx === slider.activeSlide ? "block" : "none"; //видна только эта каринка
      slide.style.width = '100%';
      slide.style.height = '100%';
      slide.src = slider.pathToPicture + pic;
      divSlider.appendChild(slide);
    })
    //add buttons
    const buttoLeft = document.createElement("img");
    buttoLeft.setAttribute('data-slider-index', i);
    buttoLeft.src = "img/left.png";
    buttoLeft.style.width = '40px';
    buttoLeft.setAttribute("onclick","onClickSliderBtn(this, 'dec')");
    divSlider.appendChild(buttoLeft);
  
    const buttoRight = document.createElement("img");
    buttoRight.setAttribute('data-slider-index', i);
    buttoRight.src = "img/right.png";
    buttoRight.style.width = '40px';
    buttoRight.setAttribute("onclick","onClickSliderBtn(this, 'inc')");
    divSlider.appendChild(buttoRight);
  }

//функция нажатия стрелoк <> 
const onClickSliderBtn = (el, direction) => {
  const sliderIndex = el.getAttribute('data-slider-index');
  const slider = config[sliderIndex];
  document.getElementById(slider.tagId + '-' + slider.activeSlide).style.display = "none"; //убираем предыдущий слайд
  
  if (direction === 'inc') {
    slider.activeSlide += slider.step;
    if (slider.activeSlide > slider.images.length - 1) slider.activeSlide = 0;
  } else {
    slider.activeSlide -= slider.step;
    if (slider.activeSlide < 0) slider.activeSlide = slider.images.length - 1;
  }

  document.getElementById(slider.tagId + '-' + slider.activeSlide).style.display = "block";  
}

  //запускаем добавление слайдеров, прописанных в конфиге
  config.map((slider, i) => {
    addSlider(slider, i);
  })

