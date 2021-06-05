var lastClicked = "";

var digitalArts = [
  "digitalArt",
  "assets/images/digitalArts/digitalArt-",
  [[12, ".jpg"]],
];
var paperDrawn = [
  "paperDrawn",
  "assets/images/paperDrawn/paperDrawn-",
  [[29, ".jpg"]],
];
var featuredImages = [
  "featuredImage",
  "assets/images/featured/featured-",
  [
    [7, ".jpg"],
    [2, ".gif"],
  ],
];
var digitalPosters = [
  "digitalPoster",
  "assets/images/digitalPosters/digitalPoster-",
  [[20, ".jpg"]],
];
var infoGraphics = [
  "infoGraphics",
  "assets/images/infographics/infographics-",
  [
    [3, ".jpg"],
    [1, ".gif"],
  ],
];
var prints = [
  "print",
  "assets/images/prints/print-",
  [
    [14, ".jpg"],
    [2, ".png"],
  ],
];

document.getElementById("digitalArtsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, ...digitalArts);
});

document.getElementById("paperDrawnButton").addEventListener("click", (e) => {
  createHtml(e.target.id, ...paperDrawn);
});

document
  .getElementById("featuredImagesButton")
  .addEventListener("click", (e) => {
    createHtml(e.target.id, ...featuredImages);
  });

document
  .getElementById("digitalPostersButton")
  .addEventListener("click", (e) => {
    createHtml(e.target.id, ...digitalPosters);
  });

document.getElementById("infoGraphicsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, ...infoGraphics);
});

document.getElementById("printsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, ...prints);
});

function createHtml(id, className, src, countArr) {
  if (lastClicked != id) {
    lastClicked = id;
    activeFilterItem();
    ga = document.getElementById("gallery");
    ga.innerHTML = "";
    var gridSizer = document.createElement("Div");
    gridSizer.classList.add("grid-sizer");
    document.getElementById("gallery").appendChild(gridSizer);
    for (let j = 0; j < countArr.length; j++) {
      for (let i = 1; i < countArr[j][0] + 1; i++) {
        var imgBox = document.createElement("Div");
        imgBox.classList.add("wrapper", className);
        document.getElementById("gallery").appendChild(imgBox);
        var link = document.createElement("a");
        link.classList.add("glightbox");
        link.href = src + i + countArr[j][1];
        imgBox.appendChild(link);
        var imgTag = document.createElement("img");
        imgTag.src = src + i + countArr[j][1];
        link.appendChild(imgTag);
        runistopeLayout();
      }
    }
    initGlightbox();
  }
}

function activeFilterItem() {
  filters = document.getElementsByClassName("filter-item");
  console.log(lastClicked);
  for (let i = 0; i < filters.length; i++) {
    if (filters[i].id == lastClicked) {
      filters[i].style.backgroundColor = "white";
      filters[i].style.color = "#0e1111";
    } else {
      filters[i].style.backgroundColor = "#0e1111";
      filters[i].style.color = "white";
    }
  }
}

function initGlightbox() {
  const lightbox = GLightbox({
    selector: ".glightbox",
  });
}

function runistopeLayout() {
  var grid = document.querySelector(".gallery-container");
  var iso = new Isotope(grid, {
    // options...
    itemSelector: ".wrapper",
    percentPosition: true,
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });
  imagesLoaded(grid).on("progress", function () {
    // layout Isotope after each image loads
    iso.layout();
  });
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
