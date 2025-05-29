let mousedown = false;

function addBox(num) {
    //Creates the etch-a-sketch grid with a number of squares dictated by num parameter set to 16 by default. 
    for (let i = 0; i < (num * num); i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.style.width = `${500/num}px`;
        box.style.height = `${500/num}px`;
        
        box.addEventListener("mousedown", () => {
            mousedown = true;
            box.style.backgroundColor = "black";
            
        })

        box.addEventListener('mouseup', () => {
            mousedown = false;
        })

        box.addEventListener("mouseover", () => {
            if (mousedown) {
                box.style.backgroundColor = "black";
            };

            
        })
        container.appendChild(box);
         
    }

} 

let size = 16;



const container = document.querySelector("#container");



const button_one = document.querySelector("#button_one")
button_one.textContent = "Change Size";

//Upon clicking the "Change Size" button, allow user to enter size for the grid, so long as it is under 100x100.
button_one.addEventListener("click", () => {
    let size_string = prompt("Please enter a new number of squares for the grid. For instance, 16 will return a 16 by 16 grid. Do not exceed 100")
    size = parseInt(size_string);
    if (size <= 100) {
        //Clear out the previous grid, then re-run addBox to make a new one.
        container.innerHTML = '';
        addBox(size)
    }

    else if (size > 100) {alert("ERROR: you probably tried to exceed 100.")}

})


//Create initial grid with size of 16x16.
addBox(size)