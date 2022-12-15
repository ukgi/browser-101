const input = document.querySelector("input");
const items = document.querySelector(".items");
const addBtn = document.querySelector(".addBtn");

function addItem() {
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "item-title");
  h2.textContent = `${input.value}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "deleteBtn");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  li.appendChild(h2);
  li.appendChild(deleteBtn);
  items.appendChild(li);
  input.value = "";

  deleteBtn.addEventListener("click", () => {
    items.removeChild(li);
  });
}

addBtn.addEventListener("click", () => {
  if (input.value) addItem();
});

window.addEventListener("keyup", (e) => {
  let key = e.key || e.keyCode;
  if ((key === "Enter" || key === 13) && input.value) {
    addItem();
  }
});
