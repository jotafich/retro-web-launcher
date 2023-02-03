const btnAddSticker = document.getElementById("btnAddSticker");
const formSticker = document.getElementById("formSticker");
const txtSticker = document.getElementById("txtSticker");
const btnSubmitSticker = document.getElementById("btnSubmitSticker");
const stickersContainer = document.getElementById("stickersContainer");

btnAddSticker.addEventListener("click", function() {
  formSticker.style.display = formSticker.style.display === "none" ? "block" : "none";
});

btnSubmitSticker.addEventListener("click", function(event) {
  event.preventDefault();
  const text = txtSticker.value;
  if (!text) {
    return;
  }

  const sticker = document.createElement("div");
  sticker.classList.add("sticker");
  sticker.innerHTML = text + " <button class='btnRemoveSticker'>-</button> <button class='btnCompleteSticker'>ok</button>";
  stickersContainer.appendChild(sticker);

  txtSticker.value = "";
  formSticker.style.display = "none";

  const stickers = JSON.parse(localStorage.getItem("stickers")) || [];
  stickers.push(text);
  localStorage.setItem("stickers", JSON.stringify(stickers));
});

stickersContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("btnRemoveSticker")) {
    const sticker = event.target.parentElement;
    stickersContainer.removeChild(sticker);

    const text = sticker.innerText;
    const stickers = JSON.parse(localStorage.getItem("stickers")) || [];
    const index = stickers.indexOf(text);
    stickers.splice(index, 1);
    localStorage.setItem("stickers", JSON.stringify(stickers));
  } else if (event.target.classList.contains("btnCompleteSticker")) {
    const sticker = event.target.parentElement;
    sticker.style.backgroundColor = "#28c5289d";
  }
});

const storedStickers = JSON.parse(localStorage.getItem("stickers")) || [];
storedStickers.forEach(function(text) {
  const sticker = document.createElement("div");
  sticker.classList.add("sticker");
  sticker.innerHTML = text + " <button class='btnRemoveSticker'>-</button> <button class='btnCompleteSticker'>ok</button>";
  stickersContainer.appendChild(sticker);
});

