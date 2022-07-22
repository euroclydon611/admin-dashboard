//declaring all the variabels accessing the DOM

const body = document.querySelector("body"),
  sideMenu = document.querySelector("aside"),
  modeToggle = document.querySelector(".theme-toggler"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");

//======THE CODE TO DISPLAY THE SIDEBAR WHEN THE MENU ICON IS CLICKED=======
sidebarOpen.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

//==========THE CODE TO TOGGLE DARK AND LIGHT MODE============ and
//===THE CODE TO KEEP USER SELECTED MODE WHENT THE PAGE IS REFRESHED OR EVEN REOPEN===
let getMode = localStorage.getItem("mode");

if (getMode == "dark-mode") {
  body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});




// //=======JS CODE FOR THE ORDER TABLE======

// Orders.forEach((order) => {
//   const tr = document.createElement("tr");
//   const trContent = `
//                 <td>${order.ProductName}</td>
//                 <td>${order.productNumber}</td>
//                 <td>${order.paymentStatus}</td>
//                 <td class=${
//                   order.shipping === "Declined"
//                     ? "danger"
//                     : order.shipping === "Pending"
//                     ? "warning"
//                     : "primary"
//                 }>${order.shipping}</td>
//                 <td class="primary">Details</td>
//   `;

//   tr.innerHTML = trContent;
//   document.querySelector('table tbody').appendChild('tr')

// });
