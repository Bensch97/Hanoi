const columns = document.querySelectorAll('.tower');
var pickedDisc

for (let column of columns) {
    column.addEventListener('click', moveChoice);
}

function selectDisc(event) {
    if (document.getElementById('Ending').childNodes.length == 4) {
        alert("You win good job")
    }
    let pickedColumn = event.currentTarget;
    let topDisc = pickedColumn.lastElementChild
    topDisc.remove();
    let destination = document.getElementById('below')
    destination.appendChild(topDisc);
    pickedDisc = document.getElementById('below').childNodes[0]
}

function placeDisc(event) {
    let pickedColumn = event.currentTarget;
    let topDisc = pickedColumn.lastElementChild

    if (topDisc == null || pickedDisc.id[3] > topDisc.id[3]) {
        let pickedColumn = event.currentTarget;
        pickedColumn.appendChild(pickedDisc);
    } else { alert("Pick other Column") }
}
var holding = document.getElementById('below')
function moveChoice() {
    if (holding.childNodes.length == 0) {
        selectDisc(event);
    } else { placeDisc(event); }
}
// function placeDisc(event) {
//     let newDisc = document.createElement("div");
//     newDisc.classList.add("disc");
//     newDisc.onclick = placeDisc;

//     var destination = document.getElementById("Ending");
//     destination.appendChild(newDisc);
// }

// newDisc.addEventListener("click", placeDisc);