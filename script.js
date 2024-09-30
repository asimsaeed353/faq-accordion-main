const questions = document.querySelectorAll(".faq-question");

// Answer show/hide Functionality

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const icon = question.querySelector('.plus-icon');
    const answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      icon.innerHTML = icon.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="plus-icon">`;
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
      icon.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="minus-icon">`;
    }
  });
});

// // Icon toggle functionality
// function iconChange(){
// icons.forEach((icon) => {
//   var flag = 0;
//   icon.addEventListener("click", function () {
//     // If icon is plus, change it to minus
//     if (flag == 0) {
//       icon.innerHTML = `<img src="./assets/images/icon-minus.svg" alt="minus-icon">`;
//       flag = 1;
//     } else {
//       // If icon is minus, change it to plus
//       icon.innerHTML = `<img src="./assets/images/icon-plus.svg" alt="plus-icon">`;
//       flag = 0;
//     }
//   });
// });
// }

// iconChange();

