// import custom alert
import { showCustomAlert } from "./customAlert.js";

// call the custom alert function when the button is clicked
const myBtn = document.getElementById("myBtn");

// isn’t this just an extra line? I know 😑
myBtn.addEventListener("click", function () {
  showCustomAlert("Hey", "You clicked me 🙂")
});
