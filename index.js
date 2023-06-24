let countFiveMin = 0
let countThirtyMin = 0
let countHr = 0
let countEl = document.getElementById("counter")
let entries = document.getElementById("entries")
let text = 0

function fiveMin() {
    countFiveMin = countFiveMin + 5
    countEl.textContent = countHr + " " + "Hr" + " " + countFiveMin + " " + "Min"
    if (countFiveMin == 60) {
        countHr = countHr + 1
        countFiveMin = 0
        countEl.textContent = countHr + " " + "Hr" 
    }else if(countFiveMin > 60) {
        countHr = countHr + 1
        countFiveMin = countFiveMin - 60
        countEl.textContent = countHr + " " + "Hr" + " " + countFiveMin + " " + "Min"
    } 
}

function thirtyMin(){
    countThirtyMin = 0
    countThirtyMin = countThirtyMin + 30 + countFiveMin
    countEl.textContent = countHr + " " + "Hr" + " " + countThirtyMin + " " + "Min"
    countFiveMin = countThirtyMin
    if(countThirtyMin == 60 ) {
        countHr = countHr + 1
        countThirtyMin = 0
        countFiveMin = 0
        countEl.textContent = countHr + " " + "Hr"
    }else if(countThirtyMin > 60) {
        countHr += 1
        countThirtyMin = countThirtyMin - 60
        countEl.textContent = countHr + " " + "Hr" + " " + countThirtyMin + " " + "Min"
    }
}

function hour(){
    countThirtyMin = countFiveMin
    countHr = countHr + 1
    let hourCount = countEl.textContent = countHr + " " + "Hr" + " " + countThirtyMin + " " + "Min"
}

function save(){
    text = text + countEl.textContent + " - "
    entries.textContent =" " + "Previous entries:" + text
    countFiveMin =0
    countThirtyMin = 0
    countHr = 0
    countEl.textContent = 0
}

function del(){
    text = 0
    entries.textContent = "Previous entries: "
}