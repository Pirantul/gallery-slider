const pictures = ['l_1.jpg', 's_4.jpg', 's_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'];
const pathToPicture = './img/';
let activeSlide = 0;
const slider1 = document.getElementById('slider-1');

const addSlider = (activeSlide) => {
  pictures.map((pic, indx) => {
    const slide = document.createElement("img");
    slide.style.display = indx === activeSlide ? "block" : "none"; //видна только 
    slide.style.width = '100%';
    slide.src = pathToPicture + pic;

    slider1.appendChild(slide);
  })
}

const sl1Left = () => {
  activeSlide--;
  
}

slider1.style.border = "thin dotted red"; //border чтобы видеть границы div
addSlider(activeSlide); // в контейнер slider1 добавляем кадры сладов



