import { AiFillHtml5 } from "react-icons/ai";
import { FaJsSquare, FaPython} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import ProgressBar from './ProgressBar';

function Experiencia() {
    return (
        <section className="experiencia">
            <h2>Experiência</h2>
            <p> 3 anos de experiência como desenvolvedor de software e Web Dev com 1 ano de experiência como desenvolvedor de jogos
                na PROJETE - Feira de Projetos da ETE FMC, adquirindo habilidades de comunicção, habilidades tecnicas e habilidades
                em trabalho em equipe.</p>

            <div className="bar">
                <AiFillHtml5 size = {28}/>
                <ProgressBar label="React" value="80%"/>
                <span>HTML</span>
                <div className="progress">
                </div>
            </div>

            <div className="bar">
                <FaJsSquare size = {28}/>
                <ProgressBar label="React" value="60%"/>
                <span>JavaScript</span>
                <div className="progress">
                </div>
            </div>

            <div className="bar">
                <FaPython size = {28}/>
                <ProgressBar label="React" value="40%"/>
                <span>Python</span>
                <div className="progress">
                </div>
            </div>

        </section>
    )
}

export default Experiencia;