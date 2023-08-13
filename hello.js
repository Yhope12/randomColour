const colourBtn = document.getElementById("colour");
const body = document.getElementById("body");
const h2 = document.querySelector("h2");

function change() {
  let x = Math.ceil(Math.random() * 256);
  let y = Math.ceil(Math.random() * 256);
  let z = Math.ceil(Math.random() * 256);
  let a = Math.random();
  return `rgb(${x},${y},${z},${a})`;
}

setInterval(() => {
  document.body.style.backgroundColor = change();
  h2.innerHTML = change();
}, 1000);

// colourBtn.addEventListener("click", () => {
//   let x = Math.ceil(Math.random() * 256);
//   let y = Math.ceil(Math.random() * 256);
//   let z = Math.ceil(Math.random() * 256);
//   body.style.backgroundColor = `rgb(${x},${y},${z})`;
//   console.log(`rgb(${x},${y},${z})`);
// });
