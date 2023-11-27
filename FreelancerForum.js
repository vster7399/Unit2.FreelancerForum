const names = ["Ailce", "Bob", "Carol", "John", "Mark", "Jean"];
const occupations = ["writer", "teacher", "programmer", "engineer", "csr", "babysitter"];
const prices = [30, 50, 70, 60, 100, 40];
const freelancers = [
    {
        name: "Alice",
        occupation: "writer",
        price: 30
    },
    {
        name: "Bob",
        occupation: "teacher",
        price: 50
    }
]

function avePrice(price) {
    let num = 0;
    for (i = 0, i < price.length, i++) {
        num += avePrice[i]
    }
    return num
}
console.log(avePrice)

const addFreelancersIntervalId = setInterval(freelancers, 2000)
render()

function render() {
    const freelancersContainer = document.querySelector("#freelancers");
    const flElements = freelancers.map((freelancers) => {
        const element = document.createElement("li")
        element.classList.add(freelancers.name, freelancers.occupation, freelancers.price)
        return element
    })
    freelancersContainer.replaceChildren(...flElements)
}

function addFreelancers() {
    const names = names[Math.floor(Math.random() * names.length)];
    const occupations = occupations[Math.floor(Math.random() * occupations.length)];
    const prices = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({names, occupations, prices});
    render();

}

