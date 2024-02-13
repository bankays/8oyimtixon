import "./Footer.css";
import about from "../../assets/about.svg";
import github from "../../assets/github.svg";
import doc from "../../assets/doc.svg";
import mtr from "../../assets/mtr.svg";

const Footer = ({ modal2, modal }: { modal2: boolean; modal: boolean }) => {
  return (
    <div
      style={{ width: modal2 ? "76%" : "96%", transition: "0.5s" }}
      className="footer"
    >
      <div className="obj-f" style={{ marginLeft: modal ? "16%" : "0" }}>
        <div className="l">
          <h1 className="l_p">GoogleFonts</h1>
          <p className="l_p1">
            Google Fonts makes it easy to bring personality and performance to
            your websites and products. Our robust catalog of open-source fonts
            and icons makes it easy to integrate expressive type and icons
            seamlessly — no matter where you are in the world.
          </p>
        </div>
        <div className="r">
          <div className="card">
            <img className="img-svg" width={30} src={about} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
          <div className="card">
            <img className="img-svg" width={30} src={github} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
          <div className="card">
            <img className="img-svg" width={30} src={github} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
        </div>
        <div>
          <div className="card">
            <img className="img-svg" width={30} src={doc} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
          <div className="card">
            <img className="img-svg" width={30} src={mtr} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
          <div className="card">
            <img className="img-svg" width={30} src={github} alt="" />
            <p className="r_p1">About us</p>
            <p className="r_p2">
              Making the web more beatiful,fast and open through great
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
