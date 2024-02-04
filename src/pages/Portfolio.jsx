import Project from '../components/Project'

export default function Portfolio() {

    const projects = [
        {
            title: "Min-Go Dating App",
            link: "https://min-go-dating-app-617b3295d223.herokuapp.com/",
            github: "https://github.com/bahossdev/Min-Go-Dating-App",
            image: "./min-go-png.png"
        },

        {
            title: "LeftOver Lover",
            link: "https://damirfm.github.io/leftover/",
            github: "https://github.com/DamirFM/leftover?tab=readme-ov-file",
           image: "./leftover_.png"
    },

        {
            title: "SVG Logo Maker",
            link: "https://drive.google.com/file/d/16mudgMov98j07hntR-rkLfIBdm5tsdA9/view",
            github: "https://github.com/jassakoch/SVG--Logo-Maker?tab=readme-ov-file",
            image: "./SVG-Logo.png"
    },

        {
            title: "Text Editor - PWA",
            link: "https://jate-text-editor-z9be.onrender.com/",
            github: "https://github.com/jassakoch/Text-Editor?tab=readme-ov-file",
            image: "./JATE-text-editor.png"
    },

        {
            title: "Social Network",
            link: "https://app.screencastify.com/v3/watch/9klagsUYKJXQWHrUZ8Uc",
            github: "https://github.com/jassakoch/Social-Network?tab=readme-ov-file",
            image:"./Social_Network.png"
    },

        {
            title: "Note Taker",
            link: "https://note-taker-jassa-d1c823307af1.herokuapp.com/notes",
            github: "https://github.com/jassakoch/Note-Taker?tab=readme-ov-file",
            image:"./Note-Taker.png"
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
