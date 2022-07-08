// Class 
class Timer {
    constructor(totalSeconds, elementId, h, s, l) {
        this.interval = null
        this.isRunning = false
        this.seconds = totalSeconds
        this.totalSeconds = totalSeconds
        this.elementId = elementId
        this.h = h
        this.s = s
        this.l = l

        this.renderElement()
        this.renderTime()
        this.renderButtons()
    }

    renderElement() {
        const element = document.createElement("div")
        element.setAttribute("id", this.elementId)
        element.style.backgroundColor = `hsl(${this.h},${this.s}%,${this.l}%)`
        document.getElementById("root").appendChild(element)
        this.element = element
    }

    renderTime() {
        if (this.seconds <= 0) {
            clearInterval(this.interval)
            return
        }

        let minutes = parseInt(this.seconds / 60)
        let seconds = this.seconds % 60

        if (minutes < 10) minutes = "0" + minutes
        if (seconds < 10) seconds = "0" + seconds

        const nextL = parseInt(this.l * (this.seconds / this.totalSeconds))

        if (document.getElementById(this.elementId + "_time")) {
            document.getElementById(this.elementId + "_time").innerHTML = minutes + ":" + seconds
            this.element.style.backgroundColor = `hsl(${this.h},${this.s}%,${nextL}%)`
        } else {
            const timeElement = document.createElement("div")
            timeElement.setAttribute("class", "time")
            timeElement.setAttribute("id", this.elementId + "_time")
            timeElement.innerHTML = minutes + ":" + seconds
            this.element.appendChild(timeElement)
        }
    }

    renderButtons() {
        const pauseButton = document.createElement("div")
        const againButton = document.createElement("div")
        pauseButton.setAttribute("class", "button")
        againButton.setAttribute("class", "button")
        pauseButton.innerHTML = String.fromCodePoint(0x23EF)
        againButton.innerHTML = String.fromCodePoint(0x1F504)

        pauseButton.onclick = this.go.bind(this)
        againButton.onclick = this.again.bind(this)
        this.element.appendChild(pauseButton)
        this.element.appendChild(againButton)
    }

    processTime() {
        this.seconds = this.seconds - 1
        this.renderTime()
    }

    go() {
        if (this.isRunning) {
            this.isRunning = false
            clearInterval(this.interval)
        } else {
            this.isRunning = true
            this.interval = setInterval(this.processTime.bind(this), 100)
        }
    }

    again() {
        if (this.isRunning) {
            this.isRunning = false
            clearInterval(this.interval)
        }

        this.seconds = this.totalSeconds
        this.renderTime()
    }
}

function myquery(item) {
    document.getElementById("id").innerHTML = item.id;
    document.getElementById("nam").innerHTML = item.nam;
    document.getElementById("ta").innerHTML = item.ta;
    if (item.ta == "FPGA") {
        var obj = JSON.parse(item.json);
        document.getElementById("fpgap1").innerHTML = obj.main[0].inner;
        console.log(obj)
    }
    else
        document.getElementById("tex").innerHTML = item.tex;
    document.getElementById("url").innerHTML = item.url;
    document.getElementById("t").innerHTML = item.t;
    document.getElementById("json").innerHTML = item.json;
    console.log(item);
}

fetch("/.netlify/functions/server")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.map(item => {
            //new Timer(item.seconds, item.id, item.h, item.s, item.l)
            new myquery(item)
        })
    })