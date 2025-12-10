import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

function Languages() {
    return (
        <section className="languages">
            <h2>Languages</h2>
            <p><LiaFlagUsaSolid /> EN — Intermediário</p>
            <p><GiBrazilFlag /> PT-BR — Língua Nativa</p>
            <p> JP — Básico</p>
        </section>
    )
}

export default Languages;