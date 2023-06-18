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
      'https://jun28-23.s3.ap-south-1.amazonaws.com/isloo1.jpeg',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/spain_shadow.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQC7Hp3Z9QP52LQPSf4BcMeVOnDGdvHj1OjvC5DGL9TcVgIhANBx5k3XohQrcjvFc2la%2BuyBLD1FM6iqmFIzObbOhNWiKu0CCID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNDI5OTcyNzgxMzk1IgwszuzcHEeE9sZgDEkqwQKbDFPQ8Rhvdl0Yt1%2BKi%2FLPsDI3PN0qXatRdzoFwBT273b05Td6x1d3MSr9fU7uEzSBzbFz0Fe8vAwJWB6AfL7vriohoZFQsXBnq4ku%2Fz4EG8eoSB8n5DkSqi%2FAcpiksohVeIrcwKMuOYZ8M5N8xxdgF%2FQ2661CtwTEMbFO%2BVm1RjLKuVWZF0WyLtERYc0kdLODe7fwoSSnZ5gKT%2FJwMLzqwddkORvEgY80w4hGty%2Fql%2FNSkbylD6o43bNZreVwhTWfV5LmEJpyTt%2F5FFbFHmEml3rO70ZfRGUDyejyn%2BVF9BWNl5ZrA5VZJ29WiF5Wnh1akC%2FEhHePL0YFaxIxl9KcTTT2Ob%2F38%2B9yEIZk2u3PdzpHA5Yn6oI1aq8gI%2BLeKX6kHdlb4VzArQn7WPOOZNFAvc6I2f1v0ZL1x6jfHb%2BdXdUwoYq%2BpAY6sgKp%2B6gLYdrYjvLdoBKrU2ErNmhqAK4EiJrbdabIy37CXMJqXGjUyvHIui7yiGtuIx0VFbRSwySOWvgxfdNcBPflRwXXRwzcvZ8fMWH22SRMstv6nXdGfpm3%2BWwkJhdRl2e0HD1CY1LnAEDZoPuXbvnMPQb%2FQtxcCkolT2SkcX%2BBPskJ%2F7vDvmmkLhyaZ3TcQRzSfmRA2oLMqLbHu3ZPa9TkyMhWTCZ6X9Nl6acslcrqWN9tyvTwJkBrsoy12QStsQrl3abPQxtRx2nF84eBNDkTfTqigKFE31rVeBbCLocgGJsKZiqhK0clEQgj%2Fn9jNX0FpfmgLRn0qOs4SJpPXP0Tt68X%2BCLvDs0hTi7iv9gupBn%2FImBGPRpPUd%2BMiTyCXHW9vhJo%2Bd5MTPXkpvf1227vLcg%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230618T225314Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAWIHC77FJ3DZFWFMB%2F20230618%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=f84ef6132b2c8109b96d570b764a33eeecc6e321730fb13f8e0fa95e498df616'
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
      'Adding a new caption here for testing!'
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
