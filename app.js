const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote(""));

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  // note element template
  note.innerHTML = `
        <div class="tools">
          <button><i class="fas fa-edit edit"></i></button>
          <button><i class="fas fa-trash-alt delete"></i></button>
        </div>

        <div class="main hidden"></div>
        <textarea class="text-area"></textarea>
  `;
  document.body.appendChild(note);
}

document.body.addEventListener("click", (e) => {
  //if we press any item on the body with the class of edit
  if (e.target.classList.contains("edit")) {
    // select elements main and text-area
    const textArea =
      e.target.parentElement.parentElement.parentElement.children[2];
    const main = e.target.parentElement.parentElement.parentElement.children[1];

    // get value from text-area
    const value = textArea.value;

    // add value to main
    main.innerText = value;

    //this will switch textarea from an none editable div
    if (main.innerText) {
      textArea.classList.toggle("hidden");
      main.classList.toggle("hidden");
    }
  }
  // this will delete the note
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});