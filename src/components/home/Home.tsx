import  { useEffect, useState } from "react";
import "./Home.css";
import { Fonts } from "../../types";
import { Link } from "react-router-dom";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import cross from "../../assets/cross.svg";
import set from "../../assets/set.svg";
const Home = ({
  serach,

  modal,
  setModal,
  setModal2,
  modal2,
}: {
  serach: string;

  modal: boolean;
  setModal: any;
  setModal2: any;
  modal2: any;
}) => {
  console.log(serach);

  const [fonts, setFonts] = useState<Fonts[]>([]);
  const [write, setWrite] = useState("");
  const [fontsize, setFontsize] = useState<number>(16);
  const [category, setCategory] = useState<string>("");
  const [category2, setCategory2] = useState<string>("");
  const [maxOfstyles, setMaxOfstyles] = useState<number>(1);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isActive2, setIsActive2] = useState<boolean>(false);
  const [isActive3, setIsActive3] = useState<boolean>(false);
  const filteredProducts = fonts.filter((product: Fonts) =>
    product.family.toLowerCase().includes(serach.toLowerCase())
  );
  const handleCleanValue = () => {
    setWrite("");
    setFontsize(16);
    setCategory("");
    setCategory2("");
    setMaxOfstyles(1);
  };

  const togleModal = () => {
    setModal(!modal);
    setModal2(false);
  };

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDqGHQrGgS20hqJlzVJ6gHIy1QtsnxU3OQ`
    )
      .then((response) => response.json())
      .then((data) => setFonts(data.items))
      .catch((error) => console.log(error));
  }, [fontsize, maxOfstyles]);
  //   console.log(fonts);
  const createfoontface = (font: Fonts) => {
    const fontstyle = Object.keys(font).map((style) => {
      const fontUrl = font.menu;
      return `
      @font-face {
        font-family: ${font.family};
        font-style: ${style};
        src: url("${fontUrl}");
      }
      `;
    });
    return fontstyle.join("\n");
  };
  useEffect(() => {
    const fontstyles = fonts.map(createfoontface).join("\n");
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(fontstyles));
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  });

  return (
    <div className="home">
      {modal && (
        <div className="filter">
          <button onClick={handleCleanValue} className="reset">
            Reset all
          </button>
          <button className="modal_cl" onClick={togleModal}>
            close
          </button>

          <div className="text">
            <h1 className="text_h1">Prewiev</h1>
            <input
              className="inp1"
              type="text"
              placeholder="Type something"
              value={write}
              onChange={(e) => setWrite(e.target.value)}
            />
            <div className="range_s">
              <select
                className="fontsize"
                onChange={(e) => setFontsize(parseInt(e.target.value))}
              >
                <option value={fontsize}>{fontsize}px</option>
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="26">26</option>
              </select>
              <input
                className="range"
                type="range"
                min="16"
                max="26"
                step={2}
                defaultValue={16}
                value={fontsize}
                onChange={(e) => setFontsize(parseInt(e.target.value))}
              />
            </div>
            <div className="decorative">
              <div className="dcc" onClick={() => setIsActive(!isActive)}>
                <p className="d_p1">decorative Stroke</p>
                <img
                  className="d_img"
                  width={22}
                  src={!isActive ? up : down}
                  alt=""
                />
              </div>
              {isActive && (
                <div className="d_children">
                  <select
                    className="d_cat"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Chose category</option>
                    <option value="serif">serif</option>
                    <option value="sans-serif">sans-serif</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="class">
            <div className="dcc2" onClick={() => setIsActive2(!isActive2)}>
              <p className="d_p2">classification</p>
              <img
                className="d_img2"
                width={22}
                src={!isActive2 ? up : down}
                alt=""
              />
            </div>
            {isActive2 && (
              <div className="c_children">
                <select
                  className="d_cat2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose category</option>
                  <option value="display">Display</option>
                  <option value="handwriting">handwriting</option>
                </select>
              </div>
            )}
          </div>
          <div className="dcc3" onClick={() => setIsActive3(!isActive3)}>
            <p className="prop_p1">Properties</p>
            <img
              className="d_img3"
              width={22}
              src={!isActive3 ? up : down}
              alt=""
            />
          </div>
          {isActive3 && (
            <div className="prop">
              <p className="prop_p2">Number of styles</p>
              <input
                type="range"
                min="1"
                max="18"
                step={1}
                defaultValue={5}
                value={maxOfstyles}
                onChange={(e) => setMaxOfstyles(parseInt(e.target.value))}
              />
              <p>{maxOfstyles}</p>
            </div>
          )}
        </div>
      )}
      <button
        style={{ marginLeft: modal ? "20%" : "3%" }}
        onClick={togleModal}
        className="btn"
      >
        <img className="set" width={25} src={!modal ? set : cross} alt="" />
        {modal ? "close" : "open"}
      </button>
      <div
        style={{
          marginLeft: modal ? "20%" : "3%",
          marginRight: modal2 ? "20%" : "0",
        }}
        className="cont"
      >
        {filteredProducts
          .filter((item: Fonts) => {
            return (
              item.category === category || category === ""
              // item.variants.length <= maxOfstyles
            );
          })
          .map((font, index) => (
            <Link
              to={`/product-view/${font.family}`}
              className="font11"
              key={index}
            >
              <div className="top">
                <p className="font1">{font.family}</p>
                <p>{font.category}</p>
                <p>{font.variants.length}-Styles</p>
                <p className="font2">variable(2)</p>
                <p className="font2">Andress Kalpakidis</p>
              </div>
              <p
                style={{
                  fontFamily: font.family,

                  fontSize: fontsize,
                }}
              >
                {write.length > 0 ? (
                  write
                ) : (
                  <p style={{ fontFamily: font.family }}> Everyone has</p>
                )}
              </p>
              <h1>{}</h1>
              <hr />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;
