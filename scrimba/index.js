//document.getElementById("count").innerText = 5

// creating a button to count input (clicks)
// initialize count as 0

let htmlCounter = document.getElementById("count-el")

count = 0

function increment() {

    count += 1
    htmlCounter.innerText = count
}

let saveEl = document.getElementById("save-el")

savedData = 0
function save() {

    let countStr = count + ' - '
    saveEl.textContent += countStr
    count = 0
    htmlCounter.textContent = count
    
}

