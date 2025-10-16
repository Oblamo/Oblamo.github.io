const button = document.getElementById("darkLight");
const logo = document.getElementById("logo");
const startpageheaderpic = document.getElementById("startpageheaderpic");

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
      link.href = project.link || "#";
      link.textContent = "Read more";
      link.classList.add("projectLink");

      box.appendChild(img); 
      box.appendChild(title);
      box.appendChild(description);
      box.appendChild(link);

      container.appendChild(box);
    });
  })
  .catch(error => console.error("Error loading projects:", error));