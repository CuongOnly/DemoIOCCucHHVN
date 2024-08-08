import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import "../images/common.css";
import "./CircleMenu.css";
import "./Responsive.css";
import "./CircleMenuSmall.css";
import "./styles/LineStyle.css";
import { Chart } from "react-google-charts";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import CellTowerIcon from "@mui/icons-material/CellTower";
import MapIcon from "@mui/icons-material/Map";
import SatelliteAltTwoToneIcon from "@mui/icons-material/SatelliteAltTwoTone";
import DirectionsBoatFilledTwoToneIcon from "@mui/icons-material/DirectionsBoatFilledTwoTone";
import AnchorIcon from "@mui/icons-material/Anchor";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import VideocamTwoToneIcon from "@mui/icons-material/VideocamTwoTone";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ListContentHTHH from "../HomePage/ListTab/ListContentHTHH";

import Hello from "./hello";
import ListContent from "./ListTab/ListContent";
import ListContentWindow from "./ListTab/ListContentWindow";

import "./ComboBox.css";
const websites = [
  {
    longName: "Thống kê",
    src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
    icon: <TroubleshootOutlinedIcon style={{ color: "white" }} />,
    name: "Thống kê",
    content:
      "Thống kê: tình hình sản xuất kinh doanh của doanh nghiệp trong một thời gian nhất định, qua biểu hiện bằng số lượng.",
    img: "images/imgList/db.jpg",
  },
  {
    longName: "Camera",
    src: "http://demo.vishipel.net:8087/Camera.html",
    icon: <VideocamTwoToneIcon style={{ color: "white" }} />,
    name: "Camera giáo sát",
    content:
      "Camera an ninh hay còn gọi là camera giám sát an ninh (CCTV), được biết đến như một thiết bị điện tử dùng để giám sát và đảm bảo sự an toàn trong khu vực nhất định nào đó tùy theo nhu cầu sử dụng, vị trí lắp đặt.",
    img: "images/imgList/camera.jpg",
  },
  {
    longName: "VTS",
    childName: [
      {
        longName: "HP",
        icon: <AccountTreeIcon style={{ color: "white" }} />,
        src: "http://vts.cangvuhaiphong.gov.vn/portal/",
        name: "VTS Hải Phòng",
        img: "images/imgList/vtshp.jpg",
        content:
          "VTS Hải Phòng : là hệ thống ứng dụng công nghệ số hiện đại, sử dụng các thiết bị như Radar, Camera giám sát, sóng điện trên tần số cực cao VHF và hệ thống nhận dạng tự động AIS để theo dõi, bám vết di chuyển của phương tiện, đảm bảo an toàn hàng hải trên các luồng, vùng biển, cung cấp thông tin ngừng hoạt động của đèn Hải Đăng.",
      },
      {
        longName: "SG",
        icon: <AddAPhotoIcon style={{ color: "white" }} />,
        name: "VTS Sài Gòn",
        src: "http://203.205.28.19/portal/",
        img: "images/imgList/vtssg.jpg",
        content:
          "VTS Sài Gòn : là hệ thống ứng dụng công nghệ số hiện đại, sử dụng các thiết bị như Radar, Camera giám sát, sóng điện trên tần số cực cao VHF và hệ thống nhận dạng tự động AIS để theo dõi, bám vết di chuyển của phương tiện, đảm bảo an toàn hàng hải trên các luồng, vùng biển, cung cấp thông tin ngừng hoạt động của đèn Hải Đăng.",
      },
    ],
    // src: "",
    icon: <SatelliteAltTwoToneIcon style={{ color: "white" }} />,
    name: "VTS Hải Phòng và Sài Gòn",
    content:
      "VTS Hải Phòng : là hệ thống dịch vụ ứng dụng công nghệ số hiện đại, sử dụng các thiết bị như Radar, Camera giám sát (CCTV), sóng điện trên tần số cực cao VHF và hệ thống nhận dạng tự động AIS để theo dõi, bám vết di chuyển của phương tiện, đảm bảo an toàn hàng hải trên các luồng, vùng biển, cung cấp thông tin ngừng hoạt động của đèn Hải Đăng.",
    img: "images/imgList/vtshp.jpg",
  },
  {
    longName: "AIS",
    src: "https://quanlytau.ais.vishipel.vn/",
    icon: <AnchorIcon style={{ color: "white" }} />,
    name: "Quản lý tàu AIS",
    content:
      "AIS: là hệ thống thông tin liên lạc trợ giúp hàng hải. Còn được gọi là hệ thống thông tin nhận dạng cho tàu thuyền. Nó cho phép các tàu trao đổi những thông tin về nhận dạng vị trí, hướng, tốc độ với nhau. ",
    img: "images/imgList/ais.jpg",
  },
  {
    longName: "LRIT",
    src: "https://lrit.vn/lrit-web/welcome.htm",
    icon: <AdsClickIcon style={{ color: "white" }} />,
    name: "Hệ thống LRIT",
    content:
      "LRIT:  Hệ thống này cung cấp dịch vụ nhận dạng  và theo dõi hành trình tàu biển trên phạm vi Việt Nam, cho phép giám sát vị trí của các tàu treo cờ của quốc gia hoạt động trên mọi vùng biển cũng như thông tin về các tàu dự kiến cập cảng hoặc các tàu chạy trên vùng lãnh hải quốc gia.",
    img: "images/imgList/lrit.jpg",
  },
  {
    longName: "SAR",
    src: "https://tkcn.vishipel.vn/",
    icon: <SupportRoundedIcon style={{ color: "white" }} />,
    name: "Tìm kiếm cứu nạn",
    content:
      "SAR: Hệ thống này cung cấp dịch vụ tìm kiếm cứu nạn tàu biển trên phạm vi Việt Nam, cho phép giám sát vị trí của các tàu treo cờ của quốc gia hoạt động trên mọi vùng biển cũng như thông tin về các tàu gặp nạn chết máy, thả trôi, người rơi xuống biển trên vùng lãnh hải quốc gia.",
    img: "images/imgList/sar.jpg",
  },
];

const webCP1 = [
  {
    longName: "Cổng DVC Quốc Gia",
    src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
    // icon: <TroubleshootOutlinedIcon style={{ color: "white" }} />,
    // name: "Thống kê",
    content:
      "Thống kê: tình hình sản xuất kinh doanh của doanh nghiệp trong một thời gian nhất định, qua biểu hiện bằng số lượng.",
    img: "images/imgList/db.jpg",
  },
  {
    longName: "Trục liên thông VB quốc gia",
    src: "http://demo.vishipel.net:8087/Camera.html",
    // icon: <VideocamTwoToneIcon style={{ color: "white" }} />,
    // name: "Camera giáo sát",
    content:
      "Camera an ninh hay còn gọi là camera giám sát an ninh (CCTV), được biết đến như một thiết bị điện tử dùng để giám sát và đảm bảo sự an toàn trong khu vực nhất định nào đó tùy theo nhu cầu sử dụng, vị trí lắp đặt.",
    img: "images/imgList/camera.jpg",
  },
  {
    longName: "Cổng TT một cửa",
    // src: "",
    // icon: <SatelliteAltTwoToneIcon style={{ color: "white" }} />,
    name: "VTS Hải Phòng và Sài Gòn",
    content:
      "VTS Hải Phòng : là hệ thống dịch vụ ứng dụng công nghệ số hiện đại, sử dụng các thiết bị như Radar, Camera giám sát (CCTV), sóng điện trên tần số cực cao VHF và hệ thống nhận dạng tự động AIS để theo dõi, bám vết di chuyển của phương tiện, đảm bảo an toàn hàng hải trên các luồng, vùng biển, cung cấp thông tin ngừng hoạt động của đèn Hải Đăng.",
    img: "images/imgList/vtshp.jpg",
  },
];

const webCP2 = [
  {
    longName: "Cổng DVC BGTVT",
    src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
    // icon: <TroubleshootOutlinedIcon style={{ color: "white" }} />,
    // name: "Thống kê",
    content:
      "Thống kê: tình hình sản xuất kinh doanh của doanh nghiệp trong một thời gian nhất định, qua biểu hiện bằng số lượng.",
    img: "images/imgList/db.jpg",
  },
  {
    longName: "Trục liên thông VB BGTVT",
    src: "http://demo.vishipel.net:8087/Camera.html",
    // icon: <VideocamTwoToneIcon style={{ color: "white" }} />,
    // name: "Camera giáo sát",
    content:
      "Camera an ninh hay còn gọi là camera giám sát an ninh (CCTV), được biết đến như một thiết bị điện tử dùng để giám sát và đảm bảo sự an toàn trong khu vực nhất định nào đó tùy theo nhu cầu sử dụng, vị trí lắp đặt.",
    img: "images/imgList/camera.jpg",
  },
  {
    longName: "CNTT",
    // src: "",
    // icon: <SatelliteAltTwoToneIcon style={{ color: "white" }} />,
    name: "VTS Hải Phòng và Sài Gòn",
    content:
      "VTS Hải Phòng : là hệ thống dịch vụ ứng dụng công nghệ số hiện đại, sử dụng các thiết bị như Radar, Camera giám sát (CCTV), sóng điện trên tần số cực cao VHF và hệ thống nhận dạng tự động AIS để theo dõi, bám vết di chuyển của phương tiện, đảm bảo an toàn hàng hải trên các luồng, vùng biển, cung cấp thông tin ngừng hoạt động của đèn Hải Đăng.",
    img: "images/imgList/vtshp.jpg",
  },
];

const listCangVu = [
  { name: "CV Hàng hải An Giang", src: "https://cangvuhanghaiangiang.gov.vn/" },
  {
    name: "CV Hàng hải Cần Thơ",
    src: "http://cangvuhanghaicantho.gov.vn/Index.aspx?page=khddt&kv=ct&d=0",
  },
  {
    name: "CV Hàng hải Đà Nẵng",
    src: "http://tttb.cangvuhanghaidanang.gov.vn/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2",
  },
  {
    name: "CV Hàng hải Đồng Nai",
    src: "http://123.25.204.166/web/guest/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2",
  },
  {
    name: "CV Hàng hải Đồng Tháp",
    src: "https://cangvuhanghaidongthap.gov.vn/index.aspx?page=news&cat=2016",
  },
  {
    name: "CV Hàng hải Hà Tĩnh",
    src: "http://113.175.240.49/web/guest/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2",
  },
  {
    name: "CV Hàng hải Hải Phòng",
    src: "https://cangvuhaiphong.gov.vn/ke-hoach-tau/",
  },
  {
    name: "CV Hàng hải Kiên Giang",
    src: "https://cangvuhanghaikiengiang.gov.vn/index.aspx?page=news&cat=30",
  },
  {
    name: "CV Hàng hải Nghệ An",
    src: "https://cangvuhanghainghean.gov.vn/index.aspx?page=news&cat=2016",
  },
  {
    name: "CV Hàng hải Nha Trang",
    src: "https://cvhhnhatrang.org.vn/index.aspx?page=shipschedule&cat=2015",
  },
  {
    name: "CV Hàng hải Quảng Bình",
    src: "https://cangvuhanghaiquangbinh.gov.vn/index.aspx?page=news&cat=30",
  },
  {
    name: "CV Hàng hải Quảng Ninh",
    src: "http://tttb.cangvuhanghaiquangninh.gov.vn/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2",
  },
  {
    name: "CV Hàng hải Quảng Ngãi",
    src: "http://cangvuhanghaiqni.gov.vn/?lk=0206",
  },
  {
    name: "CV Hàng hải Quảng Nam",
    src: "https://cangvuhanghaiquangnam.gov.vn/index.aspx?page=news&cat=2016",
  },
  {
    name: "CV Hàng hải Quy Nhơn",
    src: "https://cangvuhanghaiquynhon.gov.vn/index.aspx?page=news&cat=2014  ",
  },
  {
    name: "CV Hàng hải Thái Bình",
    src: "http://27.72.86.234/web/guest/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2    ",
  },
  {
    name: "CV Hàng hải Thanh Hóa",
    src: "http://cangvuhanghaithanhhoa.com.vn/?portalid=admin&selectpageid=page.592    ",
  },
  {
    name: "CV Hàng hải Bình Thuận",
    src: "http://123.25.223.242/web/guest/public-kh#/tra-cuu/ke_hoach/0/0/KeHoachDieuDongTau2    ",
  },
  {
    name: "CV HH Thừa Thiên Huế",
    src: "https://cangvuhanghaithuathienhue.gov.vn/index.aspx?page=law&cat=3132    ",
  },
  {
    name: "CV HH Hồ Chí Minh",
    src: "https://cangvuhanghaitphcm.gov.vn/index.aspx?page=shipschedule&cat=2033  ",
  },
  {
    name: "CV Hàng hải Vũng Tàu",
    src: "http://cangvuhanghaivungtau.gov.vn/Index.aspx?page=khddt&d=0  ",
  },
];

export default function HomePage(props) {
  const [state, setState] = useState({});
  const mainDiv = useRef(null);

  const [sectionItem, setSectionItem] = useState("");
  const [showSectionItem, setShowSectionItem] = useState(true);
  const [hoveredItemName, setHoveredItemName] = useState("");
  const [hoveredItemImg, setHoveredItemImg] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [comboBox, setComboBox] = useState("");
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [hoveredItemDetails, setHoveredItemDetails] = useState(null);
  const handleChangeBox = (event) => {
    setComboBox(event.target.value);
  };

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const handleItemClick = (name) => {
    setSectionItem(name);
    setShowSectionItem(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSectionItem(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [sectionItem]);

  const handleIconHover = (content, img) => {
    setSectionItem(content);
    setHoveredItemName(content);
    setHoveredItemDetails({ img: img });
  };
  const handleIconLeave = () => {
    setHoveredItemDetails(null);
    setHoveredItemName(null);
  };

  return (
    <main>
      <div>
        {/* <ChartCot jsonUrl="/data/taubien/soluong_loaitau.json" /> */}
      </div>
      <div className="pageHome" ref={mainDiv} style={{ overflow: "hidden" }}>
        <section className="HeaderWeb">
          <div class="LogoAndName">
            <div
              class="LogoWeb"
              style={{ cursor: "pointer" }}
              onClick={() => props.onLinkClick(null)}
            ></div>
            <div class="NameWeb">
              <h3>CỤC HÀNG HẢI VIỆT NAM</h3>
              <p>VIETNAM MARITIME ADMINISTRATION</p>
            </div>
          </div>
          <div></div>
        </section>
        {/* <div className="QRCode"></div> */}
        <div className="select-box">
          <div className="selected-value" onClick={toggleOptions}>
            <span>DANH SÁCH CẢNG VỤ</span>
          </div>

          {optionsVisible && (
            <div className="options">
              {listCangVu.map((item, index) => (
                <div className="option" key={index}>
                  <a href={item.src} target="_blank" className="label">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>

        <section className="Header">
          <div className="TextHeader">
            <div className="contentHeader">
              <h1 className="h1top c-white f-size-33 line-h t-algin">
                TRUNG TÂM ĐIỀU HÀNH THÔNG MINH
              </h1>
              <h2
                className="h1top line-h"
                style={{
                  color: "white",
                  width: "600px",
                  textAlign: "center",
                }}
              >
                Intelligent Operations Center
              </h2>
              {/* <h3
                className="h1bt line-h t-algin"
                style={{
                  color: "rgb(6 164 255)",
                  width: "600px",
                  textAlign: "center",
                }}
              >
                Intelligent Operations Center - IOC
              </h3> */}
            </div>
          </div>
        </section>

        <div className="MenuHeader">
          <div className="selectedText">
            {showSectionItem ? (
              <span className="iconSelected">
                <ArrowRightAltIcon style={{ color: "white" }} />
              </span>
            ) : null}
            <a className="textItem t-deco c-white cursor">
              {hoveredItemName || ""}
            </a>
            {/* <span className='textItem t-deco c-white cursor' href={websites.find(item => item.name === sectionItem)?.src} target="_blank">{sectionItem}</span> */}
          </div>
          <div className="containerWrapper">
            <div class="content__wrapper">
              <p class="coords">14° 3' 29.88"N / 108° 16' 37.92"E</p>

              <div class="ellipses-container">
                <h2 class="greeting">CỤC HÀNG HẢI VIỆT NAM</h2>

                <div class="ellipses ellipses__outer--thin">
                  <div class="ellipses ellipses__orbit"></div>
                </div>

                <div class="ellipses ellipses__outer--thick"></div>
              </div>
            </div>
          </div>

          <div className="LineStyle1">
            <p>
              {/* MT IOC{" "}
              <span>
                <ArrowRightAltIcon style={{ fontSize: "14px" }} />
              </span>{" "} */}
              11 TTHC
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 214">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <path
                    className="path"
                    d="M20,100 Q156,10 300,100"
                    strokeWidth="1"
                    stroke="#fff"
                    strokeMiterlimit="1"
                    fill="none"
                    strokeDasharray="8, 4" // Adjust the values for shorter dashes and smaller gaps
                    strokeDashoffset="0"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="LineStyle2">
            <p>
              {/* MT IOC{" "} */}
              {/* <span>
                <ArrowRightAltIcon style={{ fontSize: "14px" }} />
              </span>{" "} */}
              42 TTHC
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 214">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                  <path
                    className="path"
                    d="M20,100 Q156,10 300,100"
                    strokeWidth="1"
                    stroke="#fff"
                    strokeMiterlimit="1"
                    fill="none"
                    strokeDasharray="8, 4" // Adjust the values for shorter dashes and smaller gaps
                    strokeDashoffset="0"
                  />
                </g>
              </g>
            </svg>
          </div>

          <div className="LineStyle3">
            <span className="vector1">
              <ArrowBackIosNewRoundedIcon
                style={{ color: "#fff", fontSize: "16px" }}
              />
            </span>
            <svg width="100" height="100">
              <line
                x1="0"
                y1="0"
                x2="50"
                y2="50"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <span className="vector2">
              <ArrowForwardIosRoundedIcon
                style={{ color: "#fff", fontSize: "16px" }}
              />
            </span>
          </div>

          <div className="LineStyle4">
            <span className="vector1">
              <ArrowBackIosNewRoundedIcon
                style={{ color: "#fff", fontSize: "16px" }}
              />
            </span>
            <svg width="100" height="100">
              <line
                x1="0"
                y1="0"
                x2="50"
                y2="50"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            <span className="vector2">
              <ArrowForwardIosRoundedIcon
                style={{ color: "#fff", fontSize: "16px" }}
              />
            </span>
          </div>

          <div className="containerMenu">
            <div className="circle-menu">
              <div className="center">
                <div className="center-Loader">
                  <button className="btnMenu">
                    <div className="state" id="moon">
                      <p>VINAMARINE </p>
                      <p>IOC </p>
                    </div>
                  </button>

                  {/* <div className="loader">
                    <span></span>
                  </div> */}
                </div>
                {/* <div className="imgCenter1"></div> */}
              </div>
              <ul>
                {websites.map((item, index) => (
                  <li onClick={() => handleItemClick(item.name)}>
                    <a
                      style={{
                        cursor: item.longName === "VTS" ? "default" : "pointer",
                      }}
                      href={
                        websites.find((item) => item.name === sectionItem)?.src
                      }
                      target="_blank"
                      onMouseEnter={() =>
                        handleIconHover(item.content, item.img)
                      }
                      onMouseLeave={() => handleIconLeave("")}
                    >
                      <span className="iconAdd">{item.icon}</span>
                      {item.childName && item.childName.length > 0 ? (
                        <div>
                          {item.childName.map((child, childIndex) => (
                            <a
                              className={`iconNameChild-${childIndex}`}
                              style={{ cursor: "pointer" }}
                              href={child.src} // Sử dụng child.src ở đây
                              key={childIndex}
                              target="_blank"
                              onMouseEnter={() =>
                                handleIconHover(child.content, child.img)
                              }
                              onMouseLeave={() => handleIconLeave("")}
                            >
                              {child.longName}
                            </a>
                          ))}
                        </div>
                      ) : null}
                      <span className="iconName">{item.longName}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {hoveredItemDetails && (
                <div
                  className="hovered-item-details"
                  onMouseEnter={() => setHoveredItemDetails(hoveredItemDetails)}
                  onMouseLeave={handleIconLeave}
                >
                  <img
                    style={{ zIndex: 1 }}
                    src={hoveredItemDetails.img}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>

          <div className="MenuSmall">
            
            {/* circle 1 : CP */}
            <div className="containerMenuSmall1">
            <p>MT IOC</p>
              <div className="circle-menu-small">
                <div className="center-small">
                  <div className="center-Loader-small">
                    <div className="loader-small">
                      <span></span>
                    </div>
                  </div>
                </div>
                <ul>
                  {webCP2.map((item, index) => (
                    <li onClick={() => handleItemClick(item.name)}>
                      <a
                        style={{
                          cursor:
                            item.longName === "VTS" ? "default" : "pointer",
                        }}
                        href={
                          websites.find((item) => item.name === sectionItem)
                            ?.src
                        }
                        target="_blank"
                        // onMouseEnter={() => handleIconHover(item.content, item.img)}
                        // onMouseLeave={() => handleIconLeave("")}
                      >
                        <span className="iconAdd">{item.icon}</span>
                        {item.childName && item.childName.length > 0 ? (
                          <div>
                            {item.childName.map((child, childIndex) => (
                              <a
                                className={`iconNameChild-${childIndex}`}
                                style={{ cursor: "pointer" }}
                                href={child.src} // Sử dụng child.src ở đây
                                key={childIndex}
                                target="_blank"
                                // onMouseEnter={() => handleIconHover(child.content, child.img)}
                                // onMouseLeave={() => handleIconLeave("")}
                              >
                                {child.longName}
                              </a>
                            ))}
                          </div>
                        ) : null}
                        <span className="iconName">{item.longName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* circle 2 : MT */}

            <div className="containerMenuSmall2">
              <p>GOV IOC</p>
              <div className="circle-menu-small">
                <div className="center-small">
                  <div className="center-Loader-small">
                    <div className="loader-small">
                      <span></span>
                    </div>
                  </div>
                </div>
                <ul>
                  {webCP1.map((item, index) => (
                    <li onClick={() => handleItemClick(item.name)}>
                      <a
                        style={{
                          cursor:
                            item.longName === "VTS" ? "default" : "pointer",
                        }}
                        href={
                          websites.find((item) => item.name === sectionItem)
                            ?.src
                        }
                        target="_blank"
                        // onMouseEnter={() => handleIconHover(item.content, item.img)}
                        // onMouseLeave={() => handleIconLeave("")}
                      >
                        <span className="iconAdd">{item.icon}</span>
                        {item.childName && item.childName.length > 0 ? (
                          <div>
                            {item.childName.map((child, childIndex) => (
                              <a
                                className={`iconNameChild-${childIndex}`}
                                style={{ cursor: "pointer" }}
                                href={child.src} // Sử dụng child.src ở đây
                                key={childIndex}
                                target="_blank"
                                // onMouseEnter={() => handleIconHover(child.content, child.img)}
                                // onMouseLeave={() => handleIconLeave("")}
                              >
                                {child.longName}
                              </a>
                            ))}
                          </div>
                        ) : null}
                        <span className="iconName">{item.longName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="containerList">
          <ListContent
            onLinkClick={(item) => {
              props.onLinkClick(item);
            }}
          />
        </div>

        <footer className="">
          <div className="bg-tim">
            <span className="vsp  c-white f-size-13">
              © Công ty TNHH MTV Thông tin điện tử Hàng Hải Việt Nam
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}
