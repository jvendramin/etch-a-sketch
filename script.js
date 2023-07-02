let size;
const container = document.getElementById("grid");

function makeRows() {

    size = document.getElementById("sizeinput").value;

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
  };
};

createbutton = document.getElementById("create");
createbutton.addEventListener("click", makeRows);