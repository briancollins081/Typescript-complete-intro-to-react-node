const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event:Event){
    event.preventDefault();
    const enteredAddress = addressInput.value;
    // Send address to google api
}

form.addEventListener("submit", searchAddressHandler);