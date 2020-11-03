const pictures = ['l_1.jpg', 's_4.jpg', 's_5.jpg', 'l_1.jpg', 'l_7.jpg', 'l_2.jpg', 'l_6.jpg', 'l_4.jpg', 'l_2.jpg', 'l_5.jpg', 's_1.jpg', 'l_3.jpg', 'l_8.jpg'];
const pathToPicture = './img/';
let next = 0; 

const right = () => { 
const obj = document.getElementById("img");
  if (next < pictures.length - 1)  next++ 
   else
     next = 0;
     obj.src = pathToPicture + pictures[next];	 
}

const left = () => {     
const obj = document.getElementById("img");
if (next > 0) next--;
  else
    next = pictures.length - 1;
    obj.src = pathToPicture + pictures[next];	  			 
}
