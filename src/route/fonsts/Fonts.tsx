import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Fonts.css";
import { Fonts } from "../../types";
import { RootState } from "../../context/store/inedx";
import { addToFonts2 } from "../../context/features/AddToFonts";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import c1 from "../../assets/c-1.svg";
import c2 from "../../assets/c-2.svg";
import c3 from "../../assets/c-3.svg";
import c4 from "../../assets/c-4.svg";
import c5 from "../../assets/c-5.svg";
import c6 from "../../assets/c-6.svg";
import c7 from "../../assets/c-7.svg";
import c8 from "../../assets/c-8.svg";
import c9 from "../../assets/c-9.svg";
import c10 from "../../assets/c-10.svg";

const Font = ({ modal2 }: { modal2: boolean }) => {
  const { family } = useParams();
  const [fonts, setFonts] = useState<Fonts[]>([]);
  const [text, setText] = useState<string>("");
  const [fontSize, setFontSize] = useState<number>(16);
  const dispatch = useDispatch();
  useSelector((state: RootState) => console.log(state.addToFonts.cart));

  const handleGetOnlyOneFont = (product: Fonts) => {
    dispatch(addToFonts2(product));
  };
  // const handleDeleteOne = (product: Fonts) => {
  //   dispatch(removeOnlyOneCart(product));
  // };
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDqGHQrGgS20hqJlzVJ6gHIy1QtsnxU3OQ`
    )
      .then((response) => response.json())
      .then((data) => setFonts(data.items))
      .catch((error) => console.log(error));
  }, [fonts]);

  return (
    <div className="font">
      <div>
        <h1>{family}</h1>
        <p>
          Designed by <strong>Cristian Robertson</strong>
        </p>
        <p style={{ fontSize: modal2 ? "41px" : "50px" }} className="font_p">
          Whereas disregard and contempt for human rights have resulted
        </p>
      </div>
      <p>Styles</p>
      <div className="mid">
        <input
          style={{ width: modal2 ? "50%" : "70%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here to preview the text"
          className="mid_inp1"
          type="text"
        />
        <select
          className="mid_sel"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
        >
          <option value={fontSize}>{fontSize}px</option>
          <option value="26">26px</option>
          <option value="36">36px</option>
          <option value="46">46px</option>
        </select>
        <input
          className="mid_inp2"
          value={fontSize}
          type="range"
          defaultValue={fontSize}
          min={16}
          max={46}
          step={10}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
        />
      </div>
      <div>
        {fonts
          .filter((product: Fonts) => product.family === family)
          // .filter((product: Fonts) => product.category === "mostly popular")

          .map((product: Fonts, index) => (
            <div
              key={index}
              className="font_div"
              style={{ width: modal2 ? "79%" : "97%" }}
            >
              {product.variants.map((variant: string, index2) => (
                <p key={index2}>
                  {variant}
                  {text.length > 0 ? (
                    <strong>{text}</strong>
                  ) : (
                    <p
                      style={{
                        fontSize: fontSize ? fontSize : 16,
                      }}
                    >
                      Whereas recognition of the inherent dignity
                    </p>
                  )}
                  <button
                    style={{
                      margin: modal2
                        ? "-55px 0px 0px 1020px"
                        : "-55px 0px 0px 1220px",
                    }}
                    className="add-btn"
                    onClick={() =>
                      handleGetOnlyOneFont({
                        category: product.category,
                        family: product.family,
                        variants: variant,
                      })
                    }
                  >
                    Download
                  </button>
                  {/* <button onClick={() => handleDeleteOne(product)}>
                    delete one
                  </button> */}
                  <hr />
                </p>
              ))}
            </div>
          ))}
      </div>
      <div className="last">
        <div className="select">
          <select className="sl">
            <option value="">12</option>
            <option value="">16</option>
            <option value="">20</option>
          </select>
          <input className="check" type="checkbox" />
          <span className="sp">italic</span>
          <div className="obj_l">
            <div className="o_left">
              <p className="left_p1">light 300 at 48px</p>
              <p className="left_p2">
                Whereas a common understanding of these rights and freedoms is
              </p>
              <p className="left_p3">light 300 at 36px</p>
              <p className="left_p4">
                No one shall be held in slavery or servitude; slavery and the
                slave trade shall be prohibited in all their forms.
              </p>
              <p className="left_p5">light 300 aat 32px</p>
              <p className="left_p6">
                Everyone has the right to an effective remedy by the competent
                national tribunals for acts violating the fundamental rights
                granted him by the constitution or by law.
              </p>
            </div>
            <div
              className="o_right"
              style={{
                margin: modal2 ? "0px 0px 0px -90px" : "0px 0px 0px 50px",
              }}
            >
              <p className="right_p1">light 300 at 21px</p>
              <p className="right_p2">
                No one shall be subjected to arbitrary arrest, detention or
                exile. Everyone is entitled in full equality to a fair and
                public hearing by an independent and impartial tribunal, in the
                determination of his rights and obligations and of any criminal
                charge against him. No one shall be subjected to arbitrary
                interference with his privacy, family, home or correspondence,
                nor to attacks upon his honour and reputation. Everyone has the
                right to the protection of the law against such interference or
                attacks.
              </p>
              <p className="right_p3">light 300 at 16px</p>
              <p className="right_p4">
                Everyone has the right to freedom of thought, conscience and
                religion; this right includes freedom to change his religion or
                belief, and freedom, either alone or in community with others
                and in public or private, to manifest his religion or belief in
                teaching, practice, worship and observance. Everyone has the
                right to freedom of opinion and expression; this right includes
                freedom to hold opinions without interference and to seek,
                receive and impart information and ideas through any media and
                regardless of frontiers. Everyone has the right to rest and
                leisure, including reasonable limitation of working hours and
                periodic holidays with pay.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="last2" style={{ width: modal2 ? "79%" : "97%" }}>
        <div className="div_1">
          <h1 className="l_p1">Choosing type</h1>
          <button className="div_btn">View all</button>
        </div>
        <p className="l_p2">
          When you have some text, how can you choose a typeface? Many
          people—professional designers included—go through an app’s font menu
          until we find one we like. But the aim of this Google Fonts Knowledge
          module is to show that there are many considerations that can improve
          our type choices. By setting some useful constraints to aid our type
          selection, we can also develop a critical eye for analyzing type along
          the way.
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="div-1">
              <img src={c1} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              A checklist for choosing type
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c2} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Emotion considering for choosing typeface
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c3} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Choosing reliable typeface
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c4} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Exploring typeface with multiple weights or grades
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c5} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Exploring width in type
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c6} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Choosing typefaces that have optical sizes
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c7} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Paring typeface
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c8} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Paring typefaces within a family & superfamily
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c9} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Exploring typeface with multiple weights or grades
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="div-1">
              <img src={c10} alt="" />
            </div>
            <p style={{ textAlign: "left", paddingLeft: "25px" }}>
              Paring typefaces using their front matrix
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Font;
