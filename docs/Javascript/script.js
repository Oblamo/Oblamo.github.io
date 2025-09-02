import { useEffect, useState } from "react";

export default function Projects() {
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            {Projects.map((project, idx) => (
                <div key={idx}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>{project.keywords}</p>
                    <div>
                        {project.pictures}
                    </div>
                    <p>{link}</p>
                </div>
            ))}
        </div>
    );
}