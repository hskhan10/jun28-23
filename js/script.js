window.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid-container');
  const popoverOverlay = document.querySelector('.popover-overlay');
  const popoverImage = document.querySelector('.popover-image');
  const popoverCaption = document.querySelector('.popover-caption');

  const heartGif = 'https://cdnb.artstation.com/p/assets/images/images/016/235/721/original/christopher-haugen-heart-rotate4.gif';
  const imageUrlsSeattle = [
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-1-needle.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-2-pike.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-3-coffee.heic'
    ];

  const captionsSeattle = [
      'First visit to space needle. The early days!',
      'Pike place market - a special day :)',
      'Bellevue coffee days'
    ];

  const imageUrlsPhilly = [
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-1-sister-cities.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-2-bday.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-3-funny-park.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-4-hassan-bday.heic',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-5-sana-scheming.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-6-dillworth.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-7-snowy-cap.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-8-theater-funny.HEIC'
    ];

  const captionsPhilly = [
      'Golden hour at sister cities park!',
      'Celebrating bdays! September :)',
      'Hehe funnny park',
      'May birthdays :)',
      'Sana scheming',
      'Dilworth winter nights!',
      'Snow cap!',
      'Alone in theater.'
    ];

  const imageUrlsSpain = [
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-1-fountain.jpg.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-2-beach.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-3-cute-2.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-4-wedding-stand.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-5-shadow.jpeg'
    ];

  const captionsSpain = [
      'Beautiful fountain and reunion in Spain :)',
      'Beach days',
      'Spain cute 2',
      'Couple photoshoot in Denia :)',
      'Seville <3'
    ];

  const imageUrlsLahore = [
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-nikkah-1.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-nikkah-2.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-1-spice-bazaar.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-2-family-jt.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-3-last-eid.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-4-roof-funny.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-5-coco-funny.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-6-isloo-bus.JPG',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-7-isloo-2.HEIC',
      'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-8-plane.HEIC'
    ];

  const captionsLahore = [
      'Our nikkah',
      'Nikkah cute hands picture :)',
      'Dining out - Spice Bazaar. Our first dinner after officially being nikkah-fied',
      '5 star hotel. Nice movie nights. Great experience!',
      'Eid 2022!',
      'Hehe',
      'Just coco cubano things!',
      'Enroute islamabad!',
      'Enjoying isloo',
      'Flying into Lahore'
    ];

  // Function to generate a random image URL
  function getRandomImageUrl(index) {
      if (index === 7) {
        return getRandomSeattleImage();
      } else if (index === 10) {
        return getRandomLahoreImage();
      } else if (index === 15) {
        return getRandomSpainImage();
      }

      // Default to iphone image
      return 'https://e0.pxfuel.com/wallpapers/48/404/desktop-wallpaper-iphone-seattle-washington-thumbnail.jpg';
  }

  function getRandomSeattleImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrlsSeattle[randomIndex];
  }

  function getRandomPhillyImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrlsPhilly[randomIndex];
  }

  function getRandomSpainImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrlsSpain[randomIndex];
  }

  function getRandomLahoreImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrlsLahore[randomIndex];
  }


  // Function to generate a random English caption
  function getRandomCaption() {
    const randomIndex = Math.floor(Math.random() * captionsPhilly.length);
    return captionsPhilly[randomIndex];
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
        popoverImage.src = getRandomImageUrl(i);
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

//https://tobiasahlin.com/moving-letters/#16