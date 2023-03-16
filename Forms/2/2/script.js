let table = document.getElementById("bagua-table");
let editMode = false;

let edit = (event) => {
  let target = event.target.closest("td");

  if (!target || editMode) return;

  editMode = true;

  let textArea = document.createElement("textarea");
  textArea.value = target.outerHTML;
  textArea.style.width = target.clientWidth + "px";
  textArea.style.height = target.clientHeight + "px";

  target.replaceWith(textArea);
  textArea.focus();

  textArea.classList.add("relative");

  let buttons = document.createElement("div");
  buttons.innerHTML =
    "<div><button value='save'>Save</button><button value='cancel'>Cancel</button></div>";

  textArea.insertAdjacentElement("afterend", buttons);

  let buttonsHandler = (event) => {
    if (!event.target.value) return;

    switch (event.target.value) {
      case "save": {
        editMode = false;
        textArea.replaceWith(target);
        buttons.remove();
        break;
      }
      case "cancel": {
        editMode = false;
        target.innerHTML = textArea.value;
        textArea.replaceWith(target);
        buttons.remove();
        break;
      }
    }
  };

  buttons.addEventListener("click", buttonsHandler);
};

table.addEventListener("click", edit);
