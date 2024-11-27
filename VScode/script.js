
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

      document.addEventListener("DOMContentLoaded", () => {
        const photos = [
            {
                id: 1,
                category: "live",
                date: "2024-09-29",
                location: "Mexico City, Mexico",
                image: "https://via.placeholder.com/300x200?text=Live+Photo+1"
            },
            {
                id: 2,
                category: "live",
                date: "2024-09-27",
                location: "Mexico City, Mexico",
                image: "https://via.placeholder.com/300x200?text=Live+Photo+2"
            },
            {
                id: 3,
                category: "band",
                date: "2024-09-25",
                location: "New York, USA",
                image: "https://via.placeholder.com/300x200?text=Band+Photo"
            },
            {
                id: 4,
                category: "behind",
                date: "2024-09-20",
                location: "Los Angeles, USA",
                image: "https://via.placeholder.com/300x200?text=Behind+Scenes"
            },
            {
                id: 5,
                category: "exclusive",
                date: "2024-09-15",
                location: "Paris, France",
                image: "https://via.placeholder.com/300x200?text=Exclusive"
            },
        ];
    
        const photoGrid = document.getElementById("photoGrid");
        const filterButtons = document.querySelectorAll(".filter-button");
        const sortSelect = document.getElementById("sort");
    
        // Function to render photos
        const renderPhotos = (filteredPhotos) => {
            photoGrid.innerHTML = "";
            filteredPhotos.forEach((photo) => {
                const photoCard = `
                    <div class="photo-card">
                        <img src="${photo.image}" alt="${photo.location}">
                        <div class="photo-info">
                            <p>${photo.date}</p>
                            <h3>${photo.location}</h3>
                        </div>
                    </div>
                `;
                photoGrid.innerHTML += photoCard;
            });
        };
    
        // Function to filter photos
        const filterPhotos = (category) => {
            let filteredPhotos = category === "all" ? photos : photos.filter(photo => photo.category === category);
            sortPhotos(filteredPhotos, sortSelect.value); // Sort photos before rendering
        };
    
        // Function to sort photos
        const sortPhotos = (photoArray, sortBy) => {
            const sortedPhotos = photoArray.sort((a, b) => {
                if (sortBy === "newest") {
                    return new Date(b.date) - new Date(a.date);
                } else {
                    return new Date(a.date) - new Date(b.date);
                }
            });
            renderPhotos(sortedPhotos);
        };
    
        // Event listeners for filters
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterPhotos(button.dataset.category);
            });
        });
    
        // Event listener for sorting
        sortSelect.addEventListener("change", () => {
            filterPhotos(document.querySelector(".filter-button.active")?.dataset.category || "all");
        });
    
        // Initial rendering
        renderPhotos(photos);
    });

    // Function to render photos
const renderPhotos = (filteredPhotos) => {
  photoGrid.innerHTML = ""; // Clear existing photos
  filteredPhotos.forEach((photo) => {
      const photoCard = `
          <div class="photo-card">
              <img src="${photo.image}" alt="${photo.location}">
              <div class="photo-info">
                  <p>${photo.date}</p>
                  <h3>${photo.location}</h3>
              </div>
          </div>
      `;
      photoGrid.innerHTML += photoCard;
  });
};