const preloader = document.querySelector(".preloader");
var lastClicked = "";

var digitalArts = {
  className: "digitalArt",
  href: "assets/images/digitalArts/digitalArt-",
  hrefCountArr: [[13, ".jpg"]],
  src: "assets/images/digitalArts/digitalArt-",
  srcCountArr: [[13, ".jpg"]],
};

var paperDrawn = {
  className: "paperDrawn",
  href: "assets/images/paperDrawn/paperDrawn-",
  hrefCountArr: [[29, ".jpg"]],
  src: "assets/images/paperDrawn/paperDrawn-",
  srcCountArr: [[29, ".jpg"]],
};

var featuredImages = {
  className: "featuredImage",
  href:   "assets/images/featured/featured-",
  hrefCountArr:  [
    [7, ".jpg"],
    [2, ".gif"],
  ],
  src: "assets/images/featured/featured-",
  srcCountArr:  [
    [7, ".jpg"],
    [2, ".gif"],
  ],
};
var digitalPosters = {
  className:  "digitalPoster",
  href:   "assets/images/digitalPosters/digitalPoster-",
  hrefCountArr:   [[20, ".jpg"]],
  src:   "assets/images/digitalPosters/digitalPoster-",
  srcCountArr:   [[20, ".jpg"]],
};

var infoGraphics = {
  classNme:"infoGraphics",
  href:"assets/images/infographics/infographics-",
  hrefCountArr:[
    [3, ".jpg"],
    [1, ".gif"],
  ],
  src:"assets/images/infographics/infographics-",
  srcCountArr:[
    [3, ".jpg"],
    [1, ".gif"],
  ],
};

var prints = {
  className: "print",
  href:"assets/images/prints/print-",
  hrefCountArr:[
    [14, ".jpg"],
    [3, ".png"],
  ],
  src:"assets/images/prints/print-",
  srcCountArr:[
    [14, ".jpg"],
    [3, ".png"],
  ],
};

var printMedias = {
  className:"printMedia",
  href:"assets/images/printMedias/printMedia-",
  hrefCountArr:[[5, ".pdf"]],
  src:"assets/images/printMedias/printMedia-",
  srcCountArr:[[5, ".png"]],
};

document.getElementById("digitalArtsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, digitalArts);
});

document.getElementById("paperDrawnButton").addEventListener("click", (e) => {
  createHtml(e.target.id, paperDrawn);
});

document
  .getElementById("featuredImagesButton")
  .addEventListener("click", (e) => {
    createHtml(e.target.id, featuredImages);
  });

document
  .getElementById("digitalPostersButton")
  .addEventListener("click", (e) => {
    createHtml(e.target.id, digitalPosters);
  });

document.getElementById("infoGraphicsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, infoGraphics);
});

document.getElementById("printsButton").addEventListener("click", (e) => {
  createHtml(e.target.id, prints);
});

document.getElementById("printMediasButton").addEventListener("click", (e) => {
  createHtml(e.target.id, printMedias);
});

function createHtml(id, obj) {
  if (lastClicked != id) {
    lastClicked = id;
    activeFilterItem();

    preloader.style.display = "flex";
    preloader.classList.remove("vanish");

    document.getElementById("gallery").style.display = "none";
    document.getElementById("gallery").innerHTML = "";

    var gridSizer = document.createElement("Div");
    gridSizer.classList.add("grid-sizer");
    document.getElementById("gallery").appendChild(gridSizer);

    for (let j = 0; j < obj.srcCountArr.length; j++) {
      for (let i = 1; i < obj.srcCountArr[j][0] + 1; i++) {
        var imgBox = document.createElement("Div");
        imgBox.classList.add("wrapper", obj.className);
        document.getElementById("gallery").appendChild(imgBox);

        var link = document.createElement("a");
        link.classList.add("glightbox");
        link.href = obj.href + i + obj.hrefCountArr[j][1];
        imgBox.appendChild(link);

        var imgTag = document.createElement("img");
        imgTag.src = obj.src + i + obj.srcCountArr[j][1];
        link.appendChild(imgTag);
      }
    }
    initGlightbox();

    Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
        return new Promise((resolve) => {
          img.addEventListener("load", () => resolve(true));
          img.addEventListener("error", () => resolve(false));
        });
      })
    ).then((results) => {
      if (results.every((res) => res)) {
        document.getElementById("gallery").style.display = "block";
        preloader.classList.add("vanish");
        runistopeLayout();
        console.log("all images loaded successfully");
      } else console.log("some images failed to load, all finished loading");
    });
  }
}

function activeFilterItem() {
  filters = document.getElementsByClassName("filter-item");
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
