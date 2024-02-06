import { FaGithub } from "react-icons/fa";
function Project ({ project, index  })
{

    function handleIcon(url) {
        window.open(url,'_blank')
    }
    return (
<div className="card">
    <h3> { project.title } {"    "} 
    < FaGithub className="GitIcon"
  onClick={() => handleIcon(project.github) } /></h3>
    <a href={project.link}><img className="project" src={ project.image } alt= {project.title }/></a>
 


</div>
    );
}

export default Project;