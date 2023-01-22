const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote(""));

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="tools">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="text-area ${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = document.querySelector(".edit");
  const deleteBtn = document.querySelector(".delete");
  const main = document.querySelector(".main");
  const textArea = document.querySelector("textarea");

  document.body.addEventListener("input", (e) => {
    if(e.target.classList.contains('text-area')){
      
      const {value} = e.target
      console.log(value);
      console.log(e.target.parentElement.children[1]);

      e.target.parentElement.children[1].innerHTML = value
      

    }
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("delete")) {
      e.target.parentElement.parentElement.parentElement.remove();
    } else if (e.target.parentElement.classList.contains("edit")) {
      document.querySelector(".main").classList.toggle("hidden");
      document.querySelector("textarea").classList.toggle("hidden");
    }
  });

  document.body.appendChild(note);
}
