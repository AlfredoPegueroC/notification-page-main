const btn = document.querySelector("#btn");

const notificationItems = document.querySelectorAll(".notification__items.unread");
const dotsItems = document.querySelectorAll(".unread_dot");

function readIndividual(items) {
  items.classList.remove("unread");
  items.classList.remove("unread_dot");
}
function readAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("unread");
    items[i].classList.remove("unread_dot");
  }
}

notificationItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    readIndividual(element);
    readIndividual(dotsItems[element.ariaColIndex]);
  });
});

btn.addEventListener("click", () => {
  readAll(notificationItems);
  readAll(dotsItems);
});
