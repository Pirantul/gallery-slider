const pictures2 = ['s_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'];
const pathToPicture = "./img/";

let activeSlide2 = 0;
const slider2 = document.getElementById('slider-2');

//добавление слайдов
const addSlider2 = (activeSlide2) => {
  pictures2.map((pic, indx) => {
    const slide = document.createElement("img");
    slide.id = 'slider2-' + indx;
    slide.style.display = indx === activeSlide2 ? "block" : "none"; //видна только 
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.src = pathToPicture + pic;
    slider2.appendChild(slide);
  })
  const buttoLeft = document.createElement("img");
  buttoLeft.src = "img/left.png";
  buttoLeft.style.width = '60px';
  buttoLeft.setAttribute("onclick","onClickSlider2('dec')");
  slider2.appendChild(buttoLeft);

  const buttoRight = document.createElement("img");
  buttoRight.src = "img/right.png";
  buttoRight.style.width = '60px';
  buttoRight.setAttribute("onclick","onClickSlider2('inc')");
  slider2.appendChild(buttoRight);
}

//функция нажатия стрелoк <> 
const onClickSlider2 = (direction) => {
  document.getElementById('slider2-' + activeSlide2).style.display = "none"; //убираем предыдущий слайд
  if (direction === 'inc') {
    if (activeSlide2 === pictures2.length - 1) activeSlide2 = 0;
    activeSlide2++;
  } else {
    if (activeSlide2 === 0) activeSlide2 = pictures2.length - 1;
    activeSlide2--;
  }
  document.getElementById('slider2-' + activeSlide2).style.display = "block";  
}

slider2.style.border = "thin dotted red"; //border чтобы видеть границы div
addSlider2(activeSlide2); // в контейнер slider1 добавляем кадры сладов



