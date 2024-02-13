import { useDispatch, useSelector } from "react-redux";
import "./Nav.css";
import { useState } from "react";
import {
  removeAllCart,
  removeOnlyOneCart,
} from "../../context/features/AddToFonts";
import { useCopyToClipboard } from "usehooks-ts";
import bag from "../../assets/bag.svg";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
const Nav = ({
  serach,
  setSearch,
  type,
  setType,
  modal,
  setModal,
  modal2,
  setModal2,
}: {
  serach: string;
  setSearch: any;
  type: string;
  setType: any;
  modal: boolean;
  setModal: any;
  modal2: boolean;
  setModal2: any;
}) => {
  const [copyText, setCopyText] = useCopyToClipboard();
  const [copyText2, setCopyText2] = useCopyToClipboard();
  const [copyText3, setCopyText3] = useCopyToClipboard();
  const dispatch = useDispatch();
  const [isasctive, setIsActive] = useState(false);
  const [link, setLink] = useState(true);
  const [link2, setLink2] = useState(false);
  console.log(serach);
  const data = useSelector((state: any) => state.addToFonts.cart);

  const handleDeleteOne = (product: any) => {
    dispatch(removeOnlyOneCart(product));
    copyText;
    copyText2;
    copyText3;
  };
  const handleDeleteall = () => {
    dispatch(removeAllCart(1));
  };
  const togleModal2 = () => {
    setModal2(!modal2);
    setModal(false);
  };
  const linkimport = () => {
    setLink(true);
    setLink2(false);
  };
  const linkimport1 = () => {
    setLink(false);
    setLink2(true);
  };

  return (
    <div
      className="nav"
      style={{
        width: modal2 ? "80%" : "100%",
        transition: "0.5s",
        paddingLeft: modal ? "18%" : "0",
        maxWidth: modal ? "82%" : "100%",
      }}
    >
      <nav>
        <h1>GFonts</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="inp"
          type="text"
          value={serach}
          placeholder="search"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="sel"
        >
          <option value="Trending">Trending</option>
          <option value="Most popular">Most popular</option>
          <option value="Newest">Newest</option>
          <option value="Name">Name</option>
        </select>
        {/* <h3>bag</h3> */}

        <img
          className="bag123"
          onClick={togleModal2}
          width={20}
          src={bag}
          alt=""
        />

        {modal2 && (
          <div className="bag">
            <div className="beg">
              <div className="beg1">
                <p className="beg_p1">Select family</p>
                <button onClick={togleModal2} className="beg_btn1">
                  Close
                </button>
              </div>
              <hr />

              {data.length <= 0 ? (
                <div className="noth">
                  <p className="noth_p">\_(ツ)_/</p>
                  <p className="noth_p1">
                    You don’t have any fonts yet. Choose a style to get started.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="rob">
                    <div
                      className="big0"
                      onClick={() => setIsActive(!isasctive)}
                    >
                      Fonts
                      <img
                        className="big_svg"
                        width={22}
                        src={isasctive ? up : down}
                        alt=""
                      />
                    </div>

                    <div className="bigg">
                      {isasctive && (
                        <div>
                          {data.map((product: any) => (
                            <div className="big_item">
                              <p>{product.variants + ":" + product.family}</p>
                              <button
                                className="del"
                                onClick={() => handleDeleteOne(product)}
                              >
                                Delete one
                              </button>
                            </div>
                          ))}
                          <button
                            className="rem"
                            onClick={() => handleDeleteall()}
                          >
                            remove all
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="big-copy">
                    <p>Use on the web-site</p>
                    <p className="bigcop_p2">
                      To embed a font, copy the code into the head of your html
                    </p>
                    <div className="r12">
                      <div className="r1">
                        <button onClick={() => linkimport()} className="r1-btn">
                          {" "}
                          link
                        </button>
                      </div>
                      <div className="r2">
                        <button
                          onClick={() => linkimport1()}
                          className="r2-btn"
                        >
                          @import
                        </button>
                      </div>
                    </div>
                    {link && (
                      <div className="link">
                        <p className="link_p">
                          {`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" 
                 href="https://fonts.gstatic.com" crossorigin>
                 <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Lato:ital,
                 wght@0,100;0,300;0,400;1,100&family
                 =Roboto:wght@100&display=swap"
                 rel="stylesheet">`}
                        </p>
                        <button
                          className="link_btn"
                          onClick={() => {
                            setCopyText2(`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" 
                        href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Lato:ital,
                        wght@0,100;0,300;0,400;1,100&family
                        =Roboto:wght@100&display=swap"
                        rel="stylesheet">`);
                          }}
                        >
                          save
                        </button>
                      </div>
                    )}

                    {link2 && (
                      <div className="import">
                        <p className="import_p">
                          {`
                     <style>
                       @import
                       url('https://fonts.googleapis.com/css2?
                       family=Inter:wght@200&family=Lato:ital,
                       wght@0,100;0,300;0,400;1,100&
                       family=Roboto
                       :wght@100&display=swap');
                     </style>
                     `}
                        </p>
                        <button
                          className="import_btn"
                          onClick={() =>
                            setCopyText3(
                              `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Lato:ital,wght@0,100;0,300;0,400;1,100&family=Roboto:wght@100&display=swap');`
                            )
                          }
                        >
                          save
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="css">CSS rules to specify families</p>
                    <div className="fon">
                      {data.map((product: any) => (
                        <p>
                          Font-family:{product.family} {product.category}
                        </p>
                      ))}

                      <button
                        onClick={() => {
                          setCopyText(
                            data.map(
                              (product: any) =>
                                "Font-famyly" +
                                ":" +
                                product.family +
                                " " +
                                product.category
                            )
                          );
                        }}
                      >
                        copy
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
