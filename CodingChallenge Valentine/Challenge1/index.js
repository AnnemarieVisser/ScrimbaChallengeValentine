//Add event listeners
document.getElementById("btn").addEventListener("click", calculateTotalGiftCost);

// Grab all selectors and queries needed
const costEl = document.getElementById("cost-el")
const selectFood = document.getElementById("food-select")
const selectTransport = document.getElementById("transport-select")
const balloonSelector = document.getElementById("balloon-checkbox")
const cardSelector = document.getElementById("card-checkbox")

//Calculate the total gift cost
function calculateTotalGiftCost() {
    const totalGiftCost = +selectFood.value + +selectTransport.value
    if (!balloonSelector.checked && !cardSelector.checked) {
        costEl.innerHTML = "$" + totalGiftCost
    } else if (balloonSelector.checked && !cardSelector.checked) {
        costEl.innerHTML = "$" + totalGiftCost + ", includes 🎈!"
    } else if (!balloonSelector.checked && cardSelector.checked) {
        costEl.innerHTML = "$" + totalGiftCost + ", includes ✉️!"
    } else {
        costEl.innerHTML = "$" + totalGiftCost + ", includes🎈 and ✉️!"
    }
}
