//document.getElementById("count").innerText = 5

// creating a button to count input (clicks)
// initialize count as 0

let htmlCounter = document.getElementById("count-el")

count = 0

function increment() {

    count += 1
    htmlCounter.innerText = count
}

savedData = 0
function save() {
    console.log(savedData)
}

save()