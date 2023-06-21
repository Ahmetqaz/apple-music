// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;

// const closeMenu = () => {
//   menu.classList.remove("active");
//   menuBtn.classList.remove("active");
//   body.classList.remove("active");
// };

// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     closeMenu();
//   }
// };

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///

const range = document.getElementById("range");
if (range) {
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = `#range:before {width: ${range.value}%;}`;
  range.oninput = () => {
    styleElem.innerHTML = `#range:before {width: ${range.value}%;}`;
  };
}
