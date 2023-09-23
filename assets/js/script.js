// COMMENT: Function that executes when the page is loaded.
$(function displayCalendar() {

  // COMMENT: Defines the const variables
  const dayJs = dayjs();
  const currentHour = dayJs.format("HH");
  const startHour = 9;
  const endHour = 17;

  // COMMENT: Displays the current day in the header where #currentDay is located
  $("#currentDay").text(dayJs.format("dddd, MMMM, DD, YYYY"));

  // COMMENT: Uses the for i loop to condense the code
  for (let i = startHour; i <= endHour; i++) {

    // COMMENT: Defines the const variables containing i, i allows jquery to select the relevant id tags for each hour 
    const hourDiv = $(`#hour-${i}`);
    const saveBtn = $(`#hour${i}btn`);
    const textDiv = $(`#hour${i}text`);
   
    // COMMENT: Retrieves the text that was stored within its corresponding hour id tag and displays it appropriately
    const getStoredText = localStorage.getItem(`#hour${i}text`);
    if (getStoredText) {
      textDiv.val(getStoredText);
    }

    // COMMENT: Adds the class (past, present, or future) to the hour sections based on the defined currentHour
    if (i < currentHour) {
      hourDiv.addClass("past");
    } else if (i == currentHour) {
      hourDiv.addClass("present");
    } else if (i > currentHour) {
      hourDiv.addClass("future");
    }

    // COMMENT: Saves the text entered corresponding with its hour id tag
    saveBtn.on("click", function () {
      const storedText = textDiv.val();
      localStorage.setItem(`#hour${i}text`, storedText);
    });
  }
});
