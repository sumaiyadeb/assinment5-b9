console.log("hello");
const ticketsButton = document.querySelectorAll(".allBtn");

for (let index = 0; index < ticketsButton.length; index++) {
  const singleButton = ticketsButton[index];

  singleButton.addEventListener("click", function () {
    console.log(singleButton);
    singleButton.style.backgroundColor = "green";

    const currentSeat = getTextElementValueById("seatCount");
    const newSeat = currentSeat + 1;

    // if(newSeat>=4){
    //     seat.removeEventListener()
    // }

    const availableSeat = getTextElementValueById("availableSeat");
    const remainingSeat = availableSeat - 1;
    setTextElementValueById("availableSeat", remainingSeat);

    setTextElementValueById("seatCount", newSeat);
  });
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementValue = parseInt(elementText);
  return elementValue;
}
