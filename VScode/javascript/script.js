// Function to filter dropdown items
function filterDropdown() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const dropdown = document.getElementById("dropdown");
  const items = dropdown.querySelectorAll(".dropdown-item");

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
  dropdown.style.display = "block";
}

// Function to hide dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown");
  const searchInput = document.getElementById("searchInput");

  if (!dropdown.contains(event.target) && event.target !== searchInput) {
    dropdown.style.display = "none";
  }
});

// Render photos dynamically
document.addEventListener("DOMContentLoaded", () => {
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

  const photoGrid = document.getElementById("photoGrid");
  const filterButtons = document.querySelectorAll(".filter-button");
  const sortSelect = document.getElementById("sort");

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

  const filterPhotos = (category) => {
    let filteredPhotos = category === "all" ? photos : photos.filter((photo) => photo.category === category);
    sortPhotos(filteredPhotos, sortSelect.value);
  };

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

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-button.active").classList.remove("active");
      button.classList.add("active");
      filterPhotos(button.dataset.category);
    });
  });

  sortSelect.addEventListener("change", () => {
    filterPhotos(document.querySelector(".filter-button.active")?.dataset.category || "all");
  });

  renderPhotos(photos);
});

// Render videos dynamically
document.addEventListener("DOMContentLoaded", () => {
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

  const videoGrid = document.getElementById("videoGrid");
  const filterButtons = document.querySelectorAll(".video-gallery .filter-button");
  const sortSelect = document.getElementById("video-sort");

  const renderVideos = (filteredVideos) => {
    videoGrid.innerHTML = "";
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
      videoGrid.innerHTML += videoCard;
    });
  };

  const filterVideos = (category) => {
    let filteredVideos = category === "all" ? videos : videos.filter((video) => video.category === category);
    sortVideos(filteredVideos, sortSelect.value);
  };

  const sortVideos = (videoArray, sortBy) => {
    const sortedVideos = videoArray.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
    renderVideos(sortedVideos);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".video-gallery .filter-button.active").classList.remove("active");
      button.classList.add("active");
      filterVideos(button.dataset.category);
    });
  });

  sortSelect.addEventListener("change", () => {
    const activeCategory = document.querySelector(".video-gallery .filter-button.active").dataset.category;
    filterVideos(activeCategory);
  });

  renderVideos(videos);
});