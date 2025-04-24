const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcons = document.querySelectorAll(".icons span");

// GETTING NEW DATE, CURRENT YEAR AND CURRENT MONTH
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sebtember",
  "October",
  "November",
  "December",
];

const displayCalendar = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(), // GETTING first DATE OF MONTH
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // GETTING LAST DATE OF MONTH
    lastDayOfMonth = new Date(
      currentYear,
      currentMonth,
      lastDateOfMonth
    ).getDay(), // GETTING LAST DAY OF  MONTH
    lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // GETTING LAST DATE OF PREVIUS MONTH
  // console.log(lastDateOfMonth);
  let liTag = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateOfMonth; i++) {
    // console.log(isToday);
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class = "${isToday}">${i}</li>`;
  }
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
};

displayCalendar();
prevNextIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // console.log(icon);
    // CLICKING PREVIOUS DECREMENT MONTHS BY 1 , OTHER INCREMENT BY 1
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    displayCalendar();
  });
});
