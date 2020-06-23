const sliderAll = document.querySelector("#slider-all");
const sliderTL = document.querySelector("#slider-top-left");
const sliderTR = document.querySelector("#slider-top-right");
const sliderBL = document.querySelector("#slider-bottom-left");
const sliderBR = document.querySelector("#slider-bottom-right");
const root = document.documentElement;

sliderAll.addEventListener("input", (e) => {
  root.style.setProperty("--br-top-left", e.target.value + "%");
  root.style.setProperty("--br-top-right", e.target.value + "%");
  root.style.setProperty("--br-bottom-left", e.target.value + "%");
  root.style.setProperty("--br-bottom-right", e.target.value + "%");

  sliderTL.value = e.target.value;
  sliderTR.value = e.target.value;
  sliderBL.value = e.target.value;
  sliderBR.value = e.target.value;
});

sliderTL.addEventListener("input", (e) => {
  root.style.setProperty("--br-top-left", e.target.value + "%");
});
sliderTR.addEventListener("input", (e) => {
  root.style.setProperty("--br-top-right", e.target.value + "%");
});
sliderBL.addEventListener("input", (e) => {
  root.style.setProperty("--br-bottom-left", e.target.value + "%");
});
sliderBR.addEventListener("input", (e) => {
  root.style.setProperty("--br-bottom-right", e.target.value + "%");
});
