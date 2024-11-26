
    function filterDropdown() {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const dropdown = document.getElementById("dropdown");
        const items = dropdown.querySelectorAll(".dropdown-item");
  
        items.forEach(item => {
          if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = ""; // Show matching items
          } else {
            item.style.display = "none"; // Hide non-matching items
          }
        });
      }
  
      // Function to show dropdown
      function showDropdown() {
        const dropdown = document.getElementById("dropdown");
        dropdown.style.display = "block";
      }
  
      // Function to hide dropdown when clicking outside
      document.addEventListener("click", function(event) {
        const dropdown = document.getElementById("dropdown");
        const searchInput = document.getElementById("searchInput");
        
        if (!dropdown.contains(event.target) && event.target !== searchInput) {
          dropdown.style.display = "none";
        }
      });