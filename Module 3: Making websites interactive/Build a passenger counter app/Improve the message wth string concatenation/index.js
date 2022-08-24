let welcomeEl = document.getElementById("welcome-el")

let name = "whitelotus32"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋"
// the += operator takes the current value and adds the following after it