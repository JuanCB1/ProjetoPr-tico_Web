import { FaGithub,FaWhatsapp,FaLinkedin } from "react-icons/fa";

function Social() {
  return (
    <div className="social">
      <a href="#"><FaWhatsapp/></a>
      <a href="#"><FaLinkedin/></a>
      <a href="https://github.com/JuanCB1"><FaGithub/></a>
    </div>
  )
}

export default Social;