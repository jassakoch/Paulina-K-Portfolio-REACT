import { FaGithub } from "react-icons/fa";
function Project ({ project, index  })
{

    function handleIcon(url) {
        window.open(url,'_blank')
    }
    return (
<div>
    <h3> { project.title }</h3>
    <a href={project.link}><img src={ project.image } alt= {project.title }/></a>
  <FaGithub 
  onClick={() => handleIcon(project.github) } />


</div>
    );
}

export default Project;