const myContainer = document.querySelector('.container')

function test() {
    console.log("ooga booga")
}

function makeGrid() {
    for (let i=0; i < 256; i++) {
    let D1 = document.createElement('div');
    myContainer.appendChild(D1);
    D1.className = "square";
    };
};

makeGrid()

const slot = document.querySelector(".square")
slot.addEventListener('click', test)
