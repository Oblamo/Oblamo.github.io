const button = document.getElementById("darkLight");

button.addEventListener("click", () => {
    document.body.classList.toggle("light");
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