const button = document.getElementById("darkLight");
const logo = document.getElementById("logo");
const startpageheaderpic = document.getElementById("startpageheaderpic");

let currentTheme = localStorage.getItem("theme") || "dark";
applyTheme(currentTheme);

function getBasePath() {
  return window.location.pathname.includes("/Pages/") ? "../" : "";
}

function updateImages(theme) {
const basePath = getBasePath();
 if (logo) { 
    logo.src = theme === "light" ? basePath + "Pictures/LogotypeLight.png" : basePath + "Pictures/Logotype.png";
  }

  if (startpageheaderpic) {
    startpageheaderpic.src = theme === "light" ? basePath + "Pictures/HeaderStartPageLight.png" : basePath + "Pictures/HeaderStartPage.png";
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

// import { useEffect, useState } from "react";

// function Projects() {
//     const [Projects, setProjects] = useState([]);

//     React.useEffect(() => {
//         fetch("../JSON/Projects.json")
//             .then(res => res.json())
//             .then(data => setProjects(data));
//     }, []);

//     return (
//         <div>
//             {Projects.map((project, idx) => (
//                 <div key={idx}>
//                     <h2>{project.name}</h2>
//                     <p>{project.description}</p>
//                     <p>{project.keywords}</p>
//                     <div>
//                         {project.pictures}
//                     </div>
//                     <a>{link}</a>
//                 </div>
//             ))}
//         </div>
//     );
// }

// reactDOM.createRoot(document.getElementById("root")).render(<Projects />);