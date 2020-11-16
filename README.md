
## Slider with options
### Pure JavaScript

Demo: [in sandbox](https://codesandbox.io/s/github/Pirantul/gallery-slider)

1. Add HTML layout to our app (example - index.html).
2. Add style (example - style.css).
3. Crate object in JS:
const slider1 = new Slider('.slider-container', {loop: true, mouseSwap: true, stepShift: 1})

OPTONS:
loop - bool (loop slider switch)
mouseSwap - bool (enable mouse slider switch)
stepShift - num (number of slides to switch)  
switchInterval - num (slide switch time interval, sec)
