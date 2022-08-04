let components = {setUp: ["How does a", "How does a" ],
                subject: ["Baby", "Person", "Cow", "Alien", "Dinosaur", "Dog", "Stick", "Tree", "Plant"],
                action: ["Work out?", "Make money?", "Get to work?", "Call their mom?", "Ask for directions?"],
                punchline: ["They dont", "Poorly", "Very carefully", "Very well", "Milk", "They cry", "With great difficulty", "On tuesdays"] };

function pickRandom(object) {
    let message = []
    for (const i in object) {
        let index = Math.floor(Math.random() * object[i].length)
        message.push(object[i][index])
        
    }
    return message.join(' ')
}
function displayMessage() {
   joke.innerHTML = pickRandom(components)
}
function changeText() {
    button.innerHTML = "ANOTHER JOKE?"
    joke.style.display = 'block'
}

const joke = document.getElementById("joke")
const button = document.getElementById("button")


button.addEventListener("click", displayMessage)
button.addEventListener("click", changeText )
