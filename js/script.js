window.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid-container');
  const popoverOverlay = document.querySelector('.popover-overlay');
  const popoverImage = document.querySelector('.popover-image');
  const popoverCaption = document.querySelector('.popover-caption');

  const HEART_URL = 'https://cdnb.artstation.com/p/assets/images/images/016/235/721/original/christopher-haugen-heart-rotate4.gif';
  
  const MAX_GRID_ITEMS = 30;
  const SEATTLE_INDEX = 7;
  const LAHORE_INDEX = 10;
  const SPAIN_INDEX = 15;
  const PHILLY_INDEX = 20;

  const imageUrlsSeattle = [
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-1-needle.jpg', 
        caption: 'First visit to space needle. The early days!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-2-pike.JPG', 
        caption: 'Pike place market - a special day :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/seattle-3-coffee.jpg', 
        caption: 'Bellevue coffee days'
      }      
  ];

  const imageUrlsPhilly = [
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-1-sister-cities.JPG', 
        caption: 'Golden hour at sister cities park!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-2-bday.jpg', 
        caption: 'Celebrating bdays! September :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-3-funny-park.jpg', 
        caption: 'Hehe funnny park'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-4-hassan-bday.jpg', 
        caption: 'May birthdays :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-5-sana-scheming.JPG', 
        caption: '...'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-6-dillworth.jpg', 
        caption: 'Dilworth winter nights!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-7-snowy-cap.jpg', 
        caption: 'Snow cap!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/philly-8-theater-funny.jpg', 
        caption: 'Alone in theater.'
      }
  ];

  const imageUrlsLahore = [
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-nikkah-1.JPG', 
        caption: 'Nikkah - June 28, 2022'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-nikkah-2.JPG', 
        caption: 'Nikkah cute hands picture :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-1-spice-bazaar.jpg', 
        caption: 'Dining out - Spice Bazaar. Our first dinner after officially being nikkah-fied'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-2-family-jt.JPG', 
        caption: '5 star hotel. Nice movie nights. Great experience!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-3-last-eid.jpg', 
        caption: 'Eid 2022! First eid together.'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-4-roof-funny.jpg', 
        caption: 'Hehe'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-5-coco-funny.JPG', 
        caption: 'Just coco cubano things!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-6-isloo-bus.JPG', 
        caption: 'Enroute islamabad!'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-7-isloo-2.jpg', 
        caption: 'Enjoying isloo'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/lahore-8-plane.jpg', 
        caption: 'Flying into Lahore'
      }      
  ];

  const imageUrlsSpain = [
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-1-fountain.jpg.jpg', 
        caption: 'Beautiful reunion in Spain :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-2-beach.jpg', 
        caption: 'Beach days'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-3-cute-2.jpg', 
        caption: 'Spain cute 2'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-4-wedding-stand.jpg', 
        caption: 'Couple photoshoot in Denia :)'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-5-shadow.jpeg', 
        caption: 'Seville <3'
      },
      {
        imageUrl: 'https://jun28-23.s3.ap-south-1.amazonaws.com/pics/spain-5-shadow.jpeg', 
        caption: 'TBD'
      } 
  ];

  const DEFAULT_IMAGE = 
      {
          imageUrl: 'https://e0.pxfuel.com/wallpapers/48/404/desktop-wallpaper-iphone-seattle-washington-thumbnail.jpg', 
          caption: 'This is a default caption for iphone needle!'
      };

  // Function to generate a random image given the city index
  function getImageForCity(index) {
      if (index === SEATTLE_INDEX) {
        return getRandomSeattleImage();
      } else if (index === LAHORE_INDEX) {
        return getRandomLahoreImage();
      } else if (index === SPAIN_INDEX) {
        return getRandomSpainImage();
      } else if (index === PHILLY_INDEX) {
        return getRandomPhillyImage();
      }

      return DEFAULT_IMAGE; 
  }

  function getRandomSeattleImage() {
    const randomIndex = Math.floor(Math.random() * imageUrlsSeattle.length);
    return imageUrlsSeattle[randomIndex];
  }

  function getRandomPhillyImage() {
    const randomIndex = Math.floor(Math.random() * imageUrlsPhilly.length);
    return imageUrlsPhilly[randomIndex];
  }

  function getRandomSpainImage() {
    const randomIndex = Math.floor(Math.random() * imageUrlsSpain.length);
    return imageUrlsSpain[randomIndex];
  }

  function getRandomLahoreImage() {
    const randomIndex = Math.floor(Math.random() * imageUrlsLahore.length);
    return imageUrlsLahore[randomIndex];
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
  for (let i = 0; i < MAX_GRID_ITEMS; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);

    if (i === SEATTLE_INDEX || i === LAHORE_INDEX || i === PHILLY_INDEX || i === SPAIN_INDEX) {
      gridItem.style.backgroundImage = `url(${HEART_URL})`;
      gridItem.style.cursor = 'pointer';
      
      // Show popover on grid item click
      gridItem.addEventListener('click', () => {
        const image = getImageForCity(i);
        popoverImage.src = image.imageUrl;
        popoverCaption.textContent = image.caption;
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