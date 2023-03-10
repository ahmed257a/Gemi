// Function to toggle the display of the "Skills" section
function toggleSkills() {
    var skillsSection = document.getElementById("skills");
    var skillsList = skillsSection.getElementsByTagName("ul")[0];
    
    if (skillsList.style.display === "none") {
      skillsList.style.display = "block";
    } else {
      skillsList.style.display = "none";
    }
  }
  
  // Add an event listener to the "Skills" section header
  var skillsHeader = document.querySelector("#skills h2");
  skillsHeader.addEventListener("click", toggleSkills);
  