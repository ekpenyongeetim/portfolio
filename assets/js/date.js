// Function to format the date as "YYYY-MM-DD HH:MM:SS"
function formatDate(date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleDateString(undefined, options);
}

// Display current date
const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date();
currentDateElement.textContent = formatDate(currentDate);

// Display date last modified
const lastModifiedElement = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedElement.textContent = formatDate(lastModified);
