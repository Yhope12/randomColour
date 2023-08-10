const colourBtn = document.getElementById("colour");
const body = document.getElementById("body");

colourBtn.addEventListener("click", () => {
  let x = Math.ceil(Math.random() * 256);
  let y = Math.ceil(Math.random() * 256);
  let z = Math.ceil(Math.random() * 256);
  body.style.backgroundColor = `rgb(${x},${y},${z})`;
  console.log(`rgb(${x},${y},${z})`);
});
