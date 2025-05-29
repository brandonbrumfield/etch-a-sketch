let mousedown = false;

function addBox(num) {
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
            console.log("It worked")
            if (mousedown) {
                box.style.backgroundColor = "black";
            };

            
        })
        container.appendChild(box);
         
    }

} 




const container = document.querySelector("#container");

addBox(64);