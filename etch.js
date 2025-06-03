let mousedown = false;

function addBox(num) {
    //Creates the etch-a-sketch grid with a number of squares dictated by num parameter set to 16 by default. 
    for (let i = 0; i < (num * num); i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.style.width = `${500/num}px`;
        box.style.height = `${500/num}px`;
        if (true_etch == true) {
            box.style.opacity = 0.10;
        }

        else {box.style.opacity = 1;}
        
        
        box.addEventListener("mousedown", () => {
            mousedown = true;
            if (eraser == true) {
                box.style.backgroundColor = "transparent";
            }

            if (random == true) {
                selected_color = randomColor();
                box.style.backgroundColor = selected_color;
            }
            
            else {box.style.backgroundColor = selected_color;}

            if (true_etch == true) {
                box.style.opacity = (parseFloat(box.style.opacity) + 0.20);
                
            }
            
        })

        box.addEventListener('mouseup', () => {
            mousedown = false;
        })

        box.addEventListener("mouseover", () => {
            if (mousedown && eraser) {
                box.style.backgroundColor = "transparent";
            }

            if (mousedown && random) {
                selected_color = randomColor();
                box.style.backgroundColor = selected_color;
            }

            else if (mousedown) {box.style.backgroundColor = selected_color;}

            if (mousedown && true_etch) {
                box.style.opacity = (parseFloat(box.style.opacity) + 0.10);
            }

            
        })
        container.appendChild(box);
         
    }

} 

function randomColor() {
    return `rgb(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)})`;
}

let size = 16;
let eraser = false;
let selected_color = "black";
let random = false;
let true_etch = false;



const container = document.querySelector("#container");



const button_one = document.querySelector("#button_one")
const button_three = document.querySelector("#button_three")
const button_four = document.querySelector("#button_four")
const button_five = document.querySelector("#button_five")
const button_six = document.querySelector("#button_six")

const color_button = document.querySelector("#color_options");

const black_button = document.querySelector("#black")
const red_button = document.querySelector("#red")
const green_button = document.querySelector("#green")
const blue_button = document.querySelector("#blue")



button_one.textContent = "Change Size";

document.addEventListener('mouseup', () => {
            mousedown = false;
        })

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

//Allow user to clear entire grid.
button_four.addEventListener("click", () => {
    container.innerHTML = '';
    addBox(size)

})

//Allow user to activate an eraser. 
button_three.addEventListener("click", () => {
    if (eraser == false) {
        eraser = true;
        button_three.textContent = "Eraser: On"
    }

    else {eraser = false; button_three.textContent = "Eraser: Off"}
})


//Allow user to select a color. Could likely be cleaned up using event delegation.
black_button.addEventListener("click", () => {
    selected_color = "black";
})

red_button.addEventListener("click", () => {
    selected_color = "red";
})


green_button.addEventListener("click", () => {
    selected_color = "green";
})

blue_button.addEventListener("click", () => {
    selected_color = "blue";
})

//Upon clicking, randomize the etching color; 
button_five.addEventListener("click", () => {
    if (random == false) {
        random = true;
        button_five.textContent = "Random Colors: On"
    }

    else {random = false; button_five.textContent = "Random Colors: Off"}
})

//Upon clicking, enable a porogressive darkening effect. 
button_six.addEventListener("click", () => {
    if (true_etch == false) {
        true_etch = true;
        button_six.textContent = "True Etch: On"
        container.innerHTML = '';
        addBox(size)
        container.style.border = "1px solid gray"
    }

    else {
        true_etch = false; 
        button_six.textContent = "True Etch: Off";
        container.innerHTML = '';
        addBox(size); 
    }
})



//Create initial grid with size of 16x16.
addBox(size)


