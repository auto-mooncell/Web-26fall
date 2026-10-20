// City, Remembered — two small interactions:
// 1. the mobile menu button, 2. the three-frame route slideshow on the album page.

// ---------- 1. Mobile menu ----------
const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });
}

// ---------- 2. Route slideshow (album page only) ----------
// Each city has three frames. Clicking a city, an arrow or a thumbnail
// changes which frame is shown, then render() copies that frame into the page.
const routeData = {
  'new-york': [
    { src: 'img/new-york.jpg', alt: 'Crowds and taxis crossing Times Square under large illuminated signs', place: 'Times Square / New York', title: 'The center keeps moving', description: 'A crossing holds a city together for a few seconds, then releases everyone back into separate directions.', credit: 'Aaron Sebastian / Unsplash' },
    { src: 'img/nyc-diner.jpg', alt: 'The neon front of Brooklyn Diner on a city street at dusk', place: 'Brooklyn Diner / New York', title: 'A corner that stays', description: 'Neon, chrome, and a familiar name make a small room visible from the moving street.', credit: 'Frank Schulenburg / CC BY-SA 4.0' },
    { src: 'img/nyc-park.jpg', alt: 'A large tree beside a path and a stone bridge in Central Park', place: 'Central Park / New York', title: 'Room inside the city', description: 'The noise does not disappear. It moves farther away, behind the trees and the curve of the path.', credit: 'Jet Lowe / Public domain' }
  ],
  tokyo: [
    { src: 'img/tokyo.jpg', alt: 'Two people walking away down a tree-lined Tokyo street', place: 'Marunouchi / Tokyo', title: 'A slower way through', description: 'Two figures move into the shade, and the wide street briefly feels like a shared room.', credit: 'James Pere / Unsplash' },
    { src: 'img/tokyo-cups.jpg', alt: 'Balconies shaped like a cream coffee cup and a red coffee cup on a Tokyo building', place: 'Kappabashi / Tokyo', title: 'A sign above the street', description: 'A building can carry a joke for decades. Look up and the ordinary becomes specific.', credit: 'Basile Morin / CC BY-SA 4.0' },
    { src: 'img/tokyo-mirrors.jpg', alt: 'A street crowd reflected in the angled mirrors of a Harajuku entrance', place: 'Harajuku / Tokyo', title: 'The crowd, doubled', description: 'Reflections turn passing strangers into a pattern that is gone as soon as it appears.', credit: 'Basile Morin / CC BY-SA 4.0' }
  ],
  paris: [
    { src: 'img/paris.jpg', alt: 'Cream stone apartment buildings above a corner cafe in Paris', place: 'Neighborhood street / Paris', title: 'The room above the cafe', description: 'Balconies, shutters, and a cafe awning make the facade feel lived in from the sidewalk.', credit: 'T / Unsplash' },
    { src: 'img/paris-rue.jpg', alt: 'A long, nearly empty Paris street lined with stone buildings and a crosswalk', place: 'Rue Réaumur / Paris', title: 'Lines of the afternoon', description: 'The street points forward, but every window adds another direction to look.', credit: 'JLPC / CC BY-SA 3.0' },
    { src: 'img/paris-cafe-gare.jpg', alt: 'The pale stone front of the Café de la Gare theatre in Paris', place: 'Café de la Gare / Paris', title: 'A place to stop', description: 'A doorway, a sign, and a few posters: enough to make a passer-by slow down.', credit: 'Styx / CC BY-SA 3.0' }
  ]
};

const routeImage = document.querySelector('#route-image');
const routeTrack = document.querySelector('.route-track');
const routeCityButtons = document.querySelectorAll('[data-route-city]');
const routeArrows = document.querySelectorAll('[data-route-step]');
let activeCity = 'new-york';
let activeFrame = 0;

function buildThumbnails() {
  routeTrack.innerHTML = routeData[activeCity].map((frame, index) => `
    <button class="route-frame-button" type="button" data-route-frame="${index}" aria-label="Frame ${index + 1}: ${frame.title}">
      <span>0${index + 1}</span><img src="${frame.src}" alt="">
    </button>`).join('');
}

const routeGlow = document.querySelector('.route-glow');      // wrapper around photo + light
const routeGlowLight = document.querySelector('#route-glow'); // the blurred copy behind the photo

function render() {
  const frame = routeData[activeCity][activeFrame];
  routeGlow.classList.add('is-changing');

  // Wait for the fade-out (see .route-glow.is-changing in style.css), then swap the content.
  setTimeout(() => {
    routeImage.src = frame.src;
    routeGlowLight.src = frame.src; // the ambient light always uses the same photo
    routeImage.alt = frame.alt;
    document.querySelector('#route-number').textContent = `0${activeFrame + 1}`;
    document.querySelector('#route-place').textContent = frame.place;
    document.querySelector('#route-frame-title').textContent = frame.title;
    document.querySelector('#route-description').textContent = frame.description;
    document.querySelector('#route-credit').textContent = frame.credit;
    routeGlow.classList.remove('is-changing');
  }, 260);

  routeTrack.querySelectorAll('[data-route-frame]').forEach((button, index) => {
    button.classList.toggle('is-active', index === activeFrame);
    button.setAttribute('aria-pressed', String(index === activeFrame));
  });
}

if (routeImage && routeTrack) {
  routeCityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCity = button.dataset.routeCity;
      activeFrame = 0;
      routeCityButtons.forEach((cityButton) => {
        cityButton.classList.toggle('is-active', cityButton === button);
        cityButton.setAttribute('aria-pressed', String(cityButton === button));
      });
      buildThumbnails();
      render();
    });
  });

  routeArrows.forEach((button) => {
    button.addEventListener('click', () => {
      const count = routeData[activeCity].length;
      // Adding count before % keeps the number positive when stepping back from frame 0.
      activeFrame = (activeFrame + Number(button.dataset.routeStep) + count) % count;
      render();
    });
  });

  routeTrack.addEventListener('click', (event) => {
    const frameButton = event.target.closest('[data-route-frame]');
    if (!frameButton) return;
    activeFrame = Number(frameButton.dataset.routeFrame);
    render();
  });

  buildThumbnails();
  render();
}
