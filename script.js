const freelancers = [
  { name: "Alice", occupation: "writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

const names = ["Carol", "Doug"];
const occupations = ["programmer", "musician"];
const prices = [70, 30];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const maxFreeLancers = 15;

function render() {
  const freeLancerTable = freelancers.map((lancer) => {
    const element = document.createElement("li");
    element.textContent = `${lancer.name} - ${lancer.price} - ${lancer.occupation}`;
    return element;
  });

  const container = document.querySelector("#freelancer-table");
  container.innerHTML = "";

  freeLancerTable.forEach((element) => {
    container.appendChild(element);
  });

  const totalPrices = freelancers.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );
  const averagePrice = totalPrices / freelancers.length;

  const averageElement = document.createElement("li");
  averageElement.textContent = `Average Price: $${averagePrice.toFixed(2)}`;
  container.appendChild(averageElement);
}

function addLancers() {
  const randomName = names[getRandom(0, names.length)];
  const randomOccupation = occupations[getRandom(0, occupations.length)];
  const randomPrice = prices[getRandom(0, prices.length)];
  const newFreeLancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };

  freelancers.push(newFreeLancer);

  render();

  if (freelancers.length >= maxFreeLancers) {
    clearInterval(addfreeLancers);
  }
}

const addfreeLancers = setInterval(addLancers, 5000);

render();
