

// This part is for home Score Elements
displayHomeScore = document.getElementById('homeScore').textContent
homeScore = parseInt(displayHomeScore)

function add1home() {
    
    homeScore += 1
    document.getElementById('homeScore').textContent  = homeScore 
       
}

function add2home() {
    
    homeScore += 2
    document.getElementById('homeScore').textContent  = homeScore 
       
}

function add3home() {
    
    homeScore += 3
    document.getElementById('homeScore').textContent  = homeScore 
       
}

// This part is for Guest Score Elements
displayGuestScore = document.getElementById('guestScore').textContent
guestScore = parseInt(displayGuestScore)

function add1guest() {
    
    guestScore += 1
    document.getElementById('guestScore').textContent  = guestScore 
       
}

function add2guest() {
    
    guestScore += 2
    document.getElementById('guestScore').textContent  = guestScore 
       
}

function add3guest() {
    
    guestScore += 3
    document.getElementById('guestScore').textContent  = guestScore 
       
}

//reset button

function reset() {
    homeScore = 0
    document.getElementById('homeScore').textContent  = homeScore 
    guestScore = 0
    document.getElementById('guestScore').textContent  = guestScore 
}