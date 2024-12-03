// Function to filter dropdown items
function filterDropdown() {
  // Get the user input and convert it to lowercase
  const input = document.getElementById("searchInput").value.toLowerCase();
  const dropdown = document.getElementById("dropdown");
  const items = dropdown.querySelectorAll(".dropdown-item");

  // Loop through all dropdown items and show/hide based on matching input
  items.forEach((item) => {
    if (item.textContent.toLowerCase().includes(input)) {
      item.style.display = ""; // Show matching items
    } else {
      item.style.display = "none"; // Hide non-matching items
    }
  });
}

// Function to show the dropdown
function showDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = "block"; // Make the dropdown visible
}

// Function to hide the dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  const searchInput = document.getElementById("searchInput");

  // Hide dropdown if the click is outside the dropdown and input
  if (!dropdown.contains(event.target) && event.target !== searchInput) {
    dropdown.style.display = "none";
  }
});

// Render photos dynamically
document.addEventListener("DOMContentLoaded", () => {
  // Array containing photo data
  const photos = [
    {
      id: 1,
      category: "live",
      date: "2024-09-29",
      location: "Mexico City, Mexico",
      image: "images/2024-09sep29_social.jpg",
    },
    {
      id: 2,
      category: "live",
      date: "2024-09-27",
      location: "Mexico City, Mexico",
      image: "images/2024-09sep27_social.jpg",
    },
    {
      id: 3,
      category: "band",
      date: "2024-09-25",
      location: "New York, USA",
      image: "images/2024-09sep22_social.jpg",
    },
    {
      id: 4,
      category: "behind",
      date: "2024-09-20",
      location: "Los Angeles, USA",
      image: "images/2023-05may25_social.jpg",
    },
    {
      id: 5,
      category: "exclusive",
      date: "2024-09-15",
      location: "Paris, France",
      image: "images/2023-01jan09_social.jpg",
    },
  ];

  const photoGrid = document.getElementById("photoGrid"); // Grid container for photos
  const filterButtons = document.querySelectorAll(".filter-button"); // Category filter buttons
  const sortSelect = document.getElementById("sort"); // Sort dropdown

  // Function to render photos dynamically
  const renderPhotos = (filteredPhotos) => {
    photoGrid.innerHTML = ""; // Clear the grid
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
      photoGrid.innerHTML += photoCard; // Add the photo card to the grid
    });
  };

  // Function to filter photos by category
  const filterPhotos = (category) => {
    // Filter photos based on category; "all" shows all photos
    let filteredPhotos = category === "all" ? photos : photos.filter((photo) => photo.category === category);
    sortPhotos(filteredPhotos, sortSelect.value); // Sort the filtered photos
  };

  // Function to sort photos by date
  const sortPhotos = (photoArray, sortBy) => {
    const sortedPhotos = photoArray.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date); // Newest to oldest
      } else {
        return new Date(a.date) - new Date(b.date); // Oldest to newest
      }
    });
    renderPhotos(sortedPhotos); // Render the sorted photos
  };

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update the active button's style
      document.querySelector(".filter-button.active").classList.remove("active");
      button.classList.add("active");
      filterPhotos(button.dataset.category); // Filter photos based on button category
    });
  });

  // Add event listener to sort dropdown
  sortSelect.addEventListener("change", () => {
    // Filter photos based on the active category
    filterPhotos(document.querySelector(".filter-button.active")?.dataset.category || "all");
  });

  renderPhotos(photos); // Render all photos on page load
});

// Render videos dynamically
document.addEventListener("DOMContentLoaded", () => {
  // Array containing video data
  const videos = [
    {
      id: 1,
      category: "live",
      date: "2024-09-29",
      title: "Live in Mexico City",
      thumbnail: "images/2024-05may26_social.jpg",
      url: "https://youtu.be/9qn2wOX_3yg?list=PLJvQXRgtxlukmDarotT2ZFhjAVYdQHSka",
    },
    {
      id: 2,
      category: "interview",
      date: "2024-09-25",
      title: "Exclusive Interview with James",
      thumbnail: "images/the-videos_playlist.jpg",
      url: "https://youtu.be/6CzJAdPzNvQ?list=PLJvQXRgtxlulzHS5D8dXaVpy0g7R5TYPn",
    },
    {
      id: 3,
      category: "behind",
      date: "2024-09-20",
      title: "Behind the Scenes: M72 Tour",
      thumbnail: "images/2023-05may25_social.jpg",
      url: "https://youtu.be/W1nFLOvyDRU?list=PLJvQXRgtxlulvBZ6oFu0kqPEEz1VpVXJr",
    },
    {
      id: 4,
      category: "live",
      date: "2024-09-15",
      title: "Live in Paris",
      thumbnail: "images/2023-04apr10_lux-aeterna-jimmy-kimmel-live.jpg",
      url: "https://youtu.be/1kAZoIqzNZM?list=PLJvQXRgtxlukjxKt_p5MWwBlQm9LPA5ri",
    },
    {
      id: 5,
      category: "interview",
      date: "2024-09-10",
      title: "Exclusive Interview with Sarah",
      thumbnail: "images/releases_social.jpg",
      url: "https://youtu.be/1kAZoIqzNZM?list=PLJvQXRgtxlukjxKt_p5MWwBlQm9LPA5ri",
    },
  ];

  const videoGrid = document.getElementById("videoGrid"); // Grid container for videos
  const filterButtons = document.querySelectorAll(".video-gallery .filter-button"); // Category filter buttons
  const sortSelect = document.getElementById("video-sort"); // Sort dropdown

  // Function to render videos dynamically
  const renderVideos = (filteredVideos) => {
    videoGrid.innerHTML = ""; // Clear the grid
    filteredVideos.forEach((video) => {
      const videoCard = `
        <a href="${video.url}" target="_blank" class="video-card"> <!-- Add link to YouTube -->
          <img src="${video.thumbnail}" alt="${video.title}">
          <div class="video-info">
            <p>${video.date}</p>
            <h3>${video.title}</h3>
          </div>
        </a>
      `;
      videoGrid.innerHTML += videoCard; // Add the video card to the grid
    });
  };

  // Function to filter videos by category
  const filterVideos = (category) => {
    // Filter videos based on category; "all" shows all videos
    let filteredVideos = category === "all" ? videos : videos.filter((video) => video.category === category);
    sortVideos(filteredVideos, sortSelect.value); // Sort the filtered videos
  };

  // Function to sort videos by date
  const sortVideos = (videoArray, sortBy) => {
    const sortedVideos = videoArray.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date); // Newest to oldest
      } else {
        return new Date(a.date) - new Date(b.date); // Oldest to newest
      }
    });
    renderVideos(sortedVideos); // Render the sorted videos
  };

  // Add event listeners to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update the active button's style
      document.querySelector(".video-gallery .filter-button.active").classList.remove("active");
      button.classList.add("active");
      filterVideos(button.dataset.category); // Filter videos based on button category
    });
  });

  // Add event listener to sort dropdown
  sortSelect.addEventListener("change", () => {
    const activeCategory = document.querySelector(".video-gallery .filter-button.active").dataset.category;
    filterVideos(activeCategory); // Filter videos based on active category
  });

  renderVideos(videos); // Render all videos on page load
});

// Initialize the cart from localStorage or create an empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to handle adding an item to the cart
function addToCart(element) {
    const productCard = element.closest(".product-card");
    const id = productCard.dataset.id;
    const name = productCard.dataset.name;
    const price = parseFloat(productCard.dataset.price);
    const image = productCard.querySelector("img").src;

    // Check if the item is already in the cart
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1;
    } else {
        // Add new item to the cart
        cart.push({
            id,
            name,
            price,
            image,
            quantity: 1, // Initial quantity
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show a confirmation message
    alert(`${name} has been added to your cart!`);
}