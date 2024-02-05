import resume from "/Resume_Full_Stack.pdf";
import resumeImage from "/Rsume_image.png";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
    return (
        <>
            <div>
                <h2>Resume</h2>
                <div>
                    <img src={resumeImage} alt="resume" />
                    <a href={resume} download>
                        <FaDownload /> Download
                    </a>
                </div>

            </div >
        </>
    );
}