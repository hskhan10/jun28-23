window.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid-container');
  const popoverOverlay = document.querySelector('.popover-overlay');
  const popoverImage = document.querySelector('.popover-image');
  const popoverCaption = document.querySelector('.popover-caption');

  const heartGif = 'https://cdnb.artstation.com/p/assets/images/images/016/235/721/original/christopher-haugen-heart-rotate4.gif';
  // Function to generate a random image URL
  function getRandomImageUrl() {
    // Replace this array with your own image URLs
    const imageUrls = [
      'https://e0.pxfuel.com/wallpapers/48/404/desktop-wallpaper-iphone-seattle-washington-thumbnail.jpg',
      'https://www.nationsonline.org/gallery/USA/LOVE-Park-Philadelphia.jpg',
      'https://w0.peakpx.com/wallpaper/418/810/HD-wallpaper-badshahi-mosque-galaxy-gmhamad1-iphone-lahore-mughal-architecture-samsung-walled-city-thumbnail.jpg',
      // Add more image URLs here
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  }

  // Function to generate a random English caption
  function getRandomCaption() {
    // Replace this array with your own captions
    const captions = [
      'The time we went to philly love park and had a random lady take our picture!',
      'Enjoying birthdays in philly',
      'Touring the space needle - new and cool!',
      // Add more captions here
    ];

    const randomIndex = Math.floor(Math.random() * captions.length);
    return captions[randomIndex];
  }

  function showImagePopover(gridItem) {
    // Show popover on grid item click
    gridItem.addEventListener('click', () => {
      const imageUrl = getRandomImageUrl();
      popoverImage.src = imageUrl;
      popoverOverlay.style.display = 'block';
    });
  }

  // Create grid items and set random images
  for (let i = 0; i < 30; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);

    if (i === 7 || i == 10 || i == 15) {
      gridItem.style.backgroundImage = `url(${heartGif})`;
      gridItem.style.cursor = 'pointer';
      
      // Show popover on grid item click
      gridItem.addEventListener('click', () => {
        const caption = getRandomCaption();
        popoverImage.src = getRandomImageUrl();
        popoverCaption.textContent = caption;
        popoverOverlay.style.display = 'flex';
      });
    }
  }

  // Hide popover when overlay is clicked
  popoverOverlay.addEventListener('click', () => {
    popoverOverlay.style.display = 'none';
  });
});
