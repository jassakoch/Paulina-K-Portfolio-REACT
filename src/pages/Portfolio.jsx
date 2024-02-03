import Project from '../components/Project'

export default function Portfolio() {

    const projects = [
        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: ""
        },

        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: //path to public folder
    },

        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: //path to public folder
    },

        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: //path to public folder
    },

        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: //path to public folder
    },

        {
            title: "Mingo Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: //path to public folder
    }


    ]
    return (
        <>
            <h2>Portfolio</h2>
            {/*put style into div below*/}
            <div>
                {projects.map((project, index) => <Project project={project} key={index} />)
                }
            </div>
        </>
    );
}
