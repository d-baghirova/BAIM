const scrollElements = document.querySelectorAll(".js-scroll");
const range = document.getElementsByClassName("range")[0];

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

// range.addEventListener('change', () => {rangeSlide(this.value)});

// range.addEventListener('mousemove', () => {rangeSlide(this.value)});

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight - 500 || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

//map

let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 40.375766, lng: 49.832601 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

//animate corusel

const module = document.getElementsByClassName('module')[0];
const cModules = ['./warehouse.gif', './sales.gif', './hr-22.gif', './accountant.gif'];

let currentIndex = 1;

function changeImage() {
  setInterval(() => {
    module.innerHTML = `<img style="border-radius: 20px;" height="300px" width="400px" src="${cModules[currentIndex]}" />`;
    currentIndex = (currentIndex + 1) % cModules.length;
  }, 2000);
}

changeImage();
