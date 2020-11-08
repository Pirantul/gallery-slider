const pictures = ['l_1.jpg', 's_4.jpg', 's_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'];
const pathToPicture = './img/';
let activeSlide = 0;
const slider1 = document.getElementById('slider-1');

//добавление слайдов
const addSlider = (activeSlide) => {
  pictures.map((pic, indx) => {
    const slide = document.createElement("img");
    slide.id = 'slider1-' + indx;
    slide.style.display = indx === activeSlide ? "block" : "none"; //видна только 
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.src = pathToPicture + pic;
    slider1.appendChild(slide);
  })
}

//функция нажатия стрелки > 
const onClickSlider1Right = () => {
  document.getElementById('slider1-' + activeSlide).style.display = "none"; //убираем предыдущий слайд
  if (activeSlide === pictures.length - 1) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
  document.getElementById('slider1-' + activeSlide).style.display = "block";  
}
//функция нажатия стрелки <
const onClickSlider1Left = () => {
  document.getElementById('slider1-' + activeSlide).style.display = "none"; //убираем предыдущий слайд
  if (activeSlide === 0) {
    activeSlide = pictures.length - 1;
  } else {
    activeSlide--;
  }
  document.getElementById('slider1-' + activeSlide).style.display = "block";  
}

slider1.style.border = "thin dotted red"; //border чтобы видеть границы div
addSlider(activeSlide); // в контейнер slider1 добавляем кадры сладов



