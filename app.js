
const computersElement = document.getElementById("computers");

const featuresElement = document.getElementById("features");

const priceElement = document.getElementById("price");

const buyNowElement = document.getElementById("buyNow")

const descElement = document.getElementById("desc");

const compTitleElement = document.getElementById("title")

const imgElement = document.getElementById("computer-image");



let computers = [];
let getLoan = [];
let features = [];
let images =[];


fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
.then(response => response.json())
.then(data => computers = data)
.then(computers => addComputers(computers));



const addComputers = (computers) => {
    computers.forEach(x => addComputer(x));
}

const addComputer = (computer) => {
    const computerElement = document.createElement("option");
    computerElement.value = computer.id;
    computerElement.appendChild(document.createTextNode(computer.title));
    computersElement.appendChild(computerElement);
}

const handlePriceOfComputer = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    priceElement.innerText = selectedComputer.price;

    priceElement.innerHTML = selectedComputer.price + " <h4>NOK</h4> ";
}


const handleFeaturesOfComputer = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    featuresElement.innerText = selectedComputer.specs;
    
} 

const handleDescriptionOfComputer = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    descElement.innerText = selectedComputer.description;
}

const handleTitleOfComputer = e => {
    const selectedComputer = computers[e.target.selectedIndex];
    compTitleElement.innerText = selectedComputer.title;
}

 
const handleImgElement = e => {
    const selectedComputer = computers [e.target.selectedIndex];
    imgElement.setAttribute("src", "https://noroff-komputer-store-api.herokuapp.com/" + selectedComputer.image);
}

computersElement.addEventListener("change", handleImgElement);



computersElement.addEventListener("change", handleTitleOfComputer);
computersElement.addEventListener("change", handlePriceOfComputer);
computersElement.addEventListener("change", handleFeaturesOfComputer);
computersElement.addEventListener("change", handleDescriptionOfComputer);



const addWorkButtonElement = document.getElementById("addWorkButton");
const displayPayAmountElement = document.getElementById("payAmount");

const addPay = [0];

function addWorkButton(value) {
  addPay[0] = addPay[0] + value;
  displayPayAmountElement.innerHTML = addPay[0];
}



const getLoanElement = document.getElementById("getLoan");
const outstandingLoanElement = document.getElementById("outstandingLoan");

getLoanElement.addEventListener("click", function (e) {
    const loan = prompt("Enter how much money you want to loan from us!");

    outstandingLoanElement.innerHTML = "<p>Outstanding loan: " + loan + " NOK </p>";
});


