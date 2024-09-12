// Function to show or hide the popup
function showPopup(show) {
  const popup = document.getElementById("popup");
  if (show) {
    popup.style.display = "flex"; // Show popup
  } else {
    popup.style.display = "none"; // Hide popup
  }
}
