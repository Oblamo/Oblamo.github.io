const button = document.getElementById("darkLight");
const logo = document.getElementById("logo");
const startpageheaderpic = document.getElementById("startpageheaderpic");


// Code for light theme vs dark theme
let currentTheme = localStorage.getItem("theme") || "dark";
applyTheme(currentTheme);

function updateImages(theme) {
 if (logo) { 
    logo.src = theme === "light" ? "Pictures/LogotypeLight.png" : "Pictures/Logotype.png";
  }

  if (startpageheaderpic) {
    startpageheaderpic.src = theme === "light" ? "Pictures/HeaderStartPageLight.png" : "Pictures/HeaderStartPage.png";
  }
}

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  updateImages(theme);
}

button.addEventListener("click", () => {
    document.body.classList.toggle("light");

    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
});


// Code for showing projects on 'MyProjects' 
fetch("JSON/Projects.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("projectBox");
    const projects = data;

    projects.forEach(project => { 
      const box = document.createElement("div"); 
      box.classList.add("projectBox");

      const img = document.createElement("img");
      img.src = project.pictures[0];
      img.alt = project.name;                    
      img.classList.add("projectPic")

      const title = document.createElement("p");
      title.textContent = project.name;
      title.classList.add("projectTitle");

      const description = document.createElement("p");
      description.textContent = project.description;

      const link = document.createElement("a");
      link.href = "ProjectSite.html?id=" + project.id;
      link.textContent = "Read more";
      link.classList.add("projectLink");

      box.appendChild(img); 
      box.appendChild(title);
      box.appendChild(description);
      box.appendChild(link);

      container.appendChild(box);
    });
  })

//Error catch for showing projects
  .catch(error => console.error("Error loading projects:", error));


//Fetches the correct project on 'ProjectSite'
const projectSiteContainer = document.getElementById("projectSite");

if (projectSiteContainer) {

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id"));

fetch("JSON/Projects.json")
  .then(response => response.json())
  .then(data => {
    const project = data.find(p => p.id === projectId);

    if (!project) {
      document.body.innerHTML = "<h1>Projektet hittades inte</h1>";
      return;
    }
    displayProject(project);
  });
}

//displays correct project on 'ProjectSite'
function displayProject(project) {

  document.getElementById("title").textContent = project.name;
  document.getElementById("description").textContent = project.description;

  const imgContainer = document.getElementById("images");
  imgContainer.innerHTML = "";

  project.pictures.forEach(pic => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");


    const img = document.createElement("img");
    img.src = pic;

    slide.appendChild(img);
    imgContainer.appendChild(slide);

  });

  const keywordsContainer = document.getElementById("keywords");
  keywordsContainer.innerHTML = "";
  project.keywords.forEach(k => {
    const span = document.createElement("span");
    span.textContent = k;
    span.classList.add("keyword");
    keywordsContainer.appendChild(span);
  });

}

new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});