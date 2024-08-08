import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import a and other necessary components from react-router-dom
import "../images/common.css";
import "../HomePage/Responsive.css";
import "../HomePage/HomePage.css";
import "../DashBoard/DarkMode/DarkMode.css";
import "../DashBoard/DBMap.css";
import "../DashBoard/DB.css";
import DarkMode from "./DarkMode/DarkMode";

import SailingIcon from "@mui/icons-material/Sailing";
import ChartCot from "./ChartComponent/ChartCot";
import ChartTron from "./ChartComponent/ChartTron";
import ChartDuong from "./ChartComponent/ChartDuong";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import KayakingRoundedIcon from "@mui/icons-material/KayakingRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import ChartHorizonBar from "./ChartComponent/ChartHorizonBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormLabel,
  OutlinedInput,
  InputBase,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Box,
  setRef,
} from "@mui/material";
import { Padding } from "@mui/icons-material";
import QuangNinh from "./LuongHH/QuangNinh";
import HaiPhong from "./LuongHH/HaiPhong";
import BinhThuan from "./LuongHH/BinhThuan";
import CaMau from "./LuongHH/CaMau";
import CanTho from "./LuongHH/CanTho";
import DaNang from "./LuongHH/DaNang";
import HaTinh from "./LuongHH/HaTinh";
import Hue from "./LuongHH/Hue";
import KienGian from "./LuongHH/KienGian";
import NgheAn from "./LuongHH/NgheAn";
import HCM from "./LuongHH/HCM";
import MyTho from "./LuongHH/MyTho";
import NhaTrang from "./LuongHH/NhaTrang";
import QuangBinh from "./LuongHH/QuangBinh";
import QuangNam from "./LuongHH/QuangNam";
import QuangNgai from "./LuongHH/QuangNgai";
import QuangTri from "./LuongHH/QuangTri";
import QuyNhon from "./LuongHH/QuyNhon";
import temp from "./LuongHH/temp";
import ThaiBinh from "./LuongHH/ThaiBinh";
import ThanhHoa from "./LuongHH/ThanhHoa";
import VungTau from "./LuongHH/VungTau";

import QHQuangNinh from "./QuyHoachKhuVuc/QuangNinh";
import QHHaiPhong from "./QuyHoachKhuVuc/HaiPhong";
import QHBinhThuan from "./QuyHoachKhuVuc/BinhThuan";
import QHCaMau from "./QuyHoachKhuVuc/CaMau";
import QHCanTho from "./QuyHoachKhuVuc/CanTho";
import QHDaNang from "./QuyHoachKhuVuc/DaNang";
import QHHaTinh from "./QuyHoachKhuVuc/HaTinh";
import QHHue from "./QuyHoachKhuVuc/Hue";
import QHKienGian from "./QuyHoachKhuVuc/KienGian";
import QHNgheAn from "./QuyHoachKhuVuc/NgheAn";
import QHHCM from "./QuyHoachKhuVuc/HCM";
import QHMyTho from "./QuyHoachKhuVuc/MyTho";
import QHNhaTrang from "./QuyHoachKhuVuc/NhaTrang";
import QHQuangBinh from "./QuyHoachKhuVuc/QuangBinh";
import QHQuangNam from "./QuyHoachKhuVuc/QuangNam";
import QHQuangNgai from "./QuyHoachKhuVuc/QuangNgai";
import QHQuangTri from "./QuyHoachKhuVuc/QuangTri";
import QHQuyNhon from "./QuyHoachKhuVuc/QuyNhon";
import QHtemp from "./QuyHoachKhuVuc/temp";
import QHThaiBinh from "./QuyHoachKhuVuc/ThaiBinh";
import QHThanhHoa from "./QuyHoachKhuVuc/ThanhHoa";
import QHVungTau from "./QuyHoachKhuVuc/VungTau";
import CangDaNang from "./CangBienKhuVuc/CangDaNang";
import CangVungTau from "./CangBienKhuVuc/CangVungTau";
import CangHaiPhong from "./CangBienKhuVuc/CangHaiPhong";

export const portData = [
  // ninh binh, nam dinh, binh dinh, phu yen,khanh hoa, ninh thuan, dong nai, ben tre, vinh long, tra vinh, soc trang, hau giang, an giang, dong thap, tien giang, binh duong
  { id: 1, radio: "true", name: "LUỒNG CẢNG BIỂN QUẢNG NINH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG QUẢNG NINH", top: 430, left: 680 },
  { id: 2, radio: "true", name: "LUỒNG CẢNG BIỂN HẢI PHÒNG", CB: "hp", nameLabeBenCang: "DANH SÁCH BẾN CẢNG HP", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG HP", top: 455, left: 660 },
  { id: 3, radio: "true", name: "LUỒNG CẢNG BIỂN THÁI BÌNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG THÁI BÌNH", top: 480, left: 640 },
  { id: 4, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN NAM ĐỊNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG NAM ĐỊNH", top: 505, left: 620 },
  { id: 5, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN NINH BÌNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG NINH BÌNH", top: 530, left: 620 },
  { id: 6, radio: "true", name: "LUỒNG CẢNG BIỂN THANH HÓA", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG THANH HÓA", top: 560, left: 580 },
  { id: 7, radio: "true", name: "LUỒNG CẢNG BIỂN NGHỆ AN", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG NGHỆ AN", top: 630, left: 570 },
  { id: 8, radio: "true", name: "LUỒNG CẢNG BIỂN HÀ TĨNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG HÀ TĨNH", top: 685, left: 580 },
  { id: 9, radio: "true", name: "LUỒNG CẢNG BIỂN QUẢNG BÌNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG QUẢNG BÌNH", top: 740, left: 590 },
  { id: 10, radio: "true", name: "LUỒNG CẢNG BIỂN QUẢNG TRỊ", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG QUẢNG TRỊ", top: 820, left: 650 },
  { id: 11, radio: "true", name: "LUỒNG CẢNG BIỂN THỪA THIÊN HUẾ", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG THIÊN HUẾ", top: 860, left: 680 },
  { id: 12, radio: "true", name: "LUỒNG CẢNG BIỂN ĐÀ NẴNG", CB: "dn", nameLabeBenCang: "DANH SÁCH BẾN CẢNG ĐÀ NẴNG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG ĐÀ NẴNG", top: 910, left: 720 },
  { id: 13, radio: "true", name: "LUỒNG CẢNG BIỂN QUẢNG NAM", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG QUẢNG NAM", top: 935, left: 760 },
  { id: 14, radio: "true", name: "LUỒNG CẢNG BIỂN QUẢNG NGÃI", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG QUẢNG NGÃI", top: 980, left: 820 },
  { id: 15, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN BÌNH ĐỊNH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG BÌNH ĐỊNH", top: 1120, left: 830 },
  { id: 16, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN PHÚ YÊN", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG PHÚ YÊN", top: 1200, left: 850 },
  { id: 17, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN KHÁNH HÒA", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG KHÁNH HÒA", top: 1280, left: 850 },
  { id: 18, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN NINH THUẬN", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG NINH THUẬN", top: 1340, left: 830 },
  { id: 19, radio: "true", name: "LUỒNG CẢNG BIỂN BÌNH THUẬN", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG BÌNH THUẬN", top: 1390, left: 840 },
  { id: 20, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN ĐỒNG NAI", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG ĐỒNG NAI", top: 1460, left: 720 },
  { id: 21, radio: "true", name: "LUỒNG CẢNG BIỂN VŨNG TÀU", CB: "vt", nameLabeBenCang: "DANH SÁCH BẾN CẢNG VŨNG TÀU", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG VŨNG TÀU", top: 1490, left: 710 },
  { id: 22, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN BẾN TRE", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG BẾN TRE", top: 1515, left: 700 },
  { id: 23, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN VĨNH LONG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG VĨNH LONG", top: 1545, left: 690 },
  { id: 24, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN TRÀ VINH", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG TRÀ VINH", top: 1570, left: 690 },
  { id: 25, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN SÓC TRĂNG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG SÓC TRĂNG", top: 1595, left: 690 },
  { id: 26, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN HẬU GIANG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG HẬU GIANG", top: 1635, left: 580 },
  { id: 27, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN BẠC LIÊU", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG BẠC LIÊU", top: 1665, left: 480 },
  { id: 28, radio: "true", name: "LUỒNG CẢNG BIỂN CÀ MAU", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG CÀ MAU", top: 1585, left: 130 },
  { id: 29, radio: "true", name: "LUỒNG CẢNG BIỂN KIÊN GIANG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG KIÊN GIANG", top: 1505, left: 120 },
  { id: 30, radio: "true", name: "LUỒNG CẢNG BIỂN CẦN THƠ", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG CẦN THƠ", top: 1430, left: 200 },
  { id: 31, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN AN GIANG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG AN GIANG", top: 1410, left: 210 },
  { id: 32, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN ĐỒNG THÁP", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG ĐỒNG THÁP", top: 1380, left: 230 },
  { id: 33, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN TIỀN GIANG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG TIỀN GIANG", top: 1350, left: 250 },
  { id: 34, radio: "true", name: "LUỒNG CẢNG BIỂN TP.HCM", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG TP.HCM", top: 1325, left: 270 },
  { id: 35, koCoDL: "true", radio: "true", name: "LUỒNG CẢNG BIỂN BÌNH DƯƠNG", nameLabeQuyHoach: "QUY HOẠCH BẾN CẢNG BÌNH DƯƠNG", top: 1300, left: 310 },
];

const arrLuongHH = (props) => [
  <QuangNinh {...props} />,
  <HaiPhong {...props} />,
  <ThaiBinh {...props} />,
  <ThaiBinh {...props} />,
  <ThaiBinh {...props} />,
  <ThanhHoa {...props} />,
  <NgheAn {...props} />,
  <HaTinh {...props} />,
  <QuangBinh {...props} />,
  <QuangTri {...props} />,
  <Hue {...props} />,
  <DaNang {...props} />,
  <QuangNam {...props} />,
  <QuangNgai {...props} />,
  <QuangNgai {...props} />,
  <QuangNgai {...props} />,
  <QuangNgai {...props} />,
  <QuangNgai {...props} />,
  <BinhThuan {...props} />,
  <BinhThuan {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <VungTau {...props} />,
  <CaMau {...props} />,
  <KienGian {...props} />,
  <CanTho {...props} />,
  <BinhThuan {...props} />,
  <BinhThuan {...props} />,
  <BinhThuan {...props} />,
  <HCM {...props} />,
  <HCM {...props} />,
];

const arrQuyHoachHH = (props) => [
  <QHQuangNinh {...props} />,
  <QHHaiPhong {...props} />,
  <QHThaiBinh {...props} />,
  <QHThaiBinh {...props} />,
  <QHThaiBinh {...props} />,
  <QHThanhHoa {...props} />,
  <QHNgheAn {...props} />,
  <QHHaTinh {...props} />,
  <QHQuangBinh {...props} />,
  <QHQuangTri {...props} />,
  <QHHue {...props} />,
  <QHDaNang {...props} />,
  <QHQuangNam {...props} />,
  <QHQuangNgai {...props} />,
  <QHQuangNgai {...props} />,
  <QHQuangNgai {...props} />,
  <QHQuangNgai {...props} />,
  <QHQuangNgai {...props} />,
  <QHBinhThuan {...props} />,
  <QHBinhThuan {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHVungTau {...props} />,
  <QHCaMau {...props} />,
  <QHKienGian {...props} />,
  <QHCanTho {...props} />,
  <QHBinhThuan {...props} />,
  <QHBinhThuan {...props} />,
  <QHBinhThuan {...props} />,
  <QHHCM {...props} />,
  <QHHCM {...props} />,
];

const arrCangBienHH = (props) => [
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangDaNang {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangVungTau {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
  <CangHaiPhong {...props} />,
];

export default function DBVanTaiBien(props) {
  const [mainDiv, setMainDiv] = useState(null);
  const testDiv = useRef(null);
  const [mainHeight, setMainHeight] = useState(501);
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [groupChartTH, setGroupChartTH] = useState("1");


  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  const handleShowSetting = () => {
    setShowSetting(!showSetting);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };
  var h = Math.round((mainHeight - 155) / 2);

  return (
    <main className="theme">
      <div
        className="pageHomeDashMap"
        ref={(e) => {
          console.log(e);
          if (e) {
            setMainHeight(e.clientHeight);
          }
        }}
      >
        <section className="HeaderWeb">
          <div className="LogoAndName">
            <a to="/" className="LogoWeb"></a>
            <div className="NameWeb">
              <h3 style={{ fontSize: "24px", marginTop: "5px" }}>
                CỤC HÀNG HẢI VIỆT NAM
              </h3>
              <p>VIETNAM MARITIME ADMINISTRATION</p>
            </div>
          </div>
        </section>
        <div
          className="containerDb"
          ref={(e) => {
            if (e) {
              //setMainDiv(e);
            }
          }}
        >
          <div className="address">
            <div className="text">
              <a className="iconHome" to="/" href="#" onClick={() => props.onLinkClick(null)}>
                <span>
                  <HomeOutlinedIcon />
                </span>
              </a>

              <a className="aLuongHH" to="/" href="#" onClick={() => props.onLinkClick(null)}>
                TRANG CHỦ
              </a>

              <span>
                <ArrowForwardIcon />
              </span>

              <a
                to="/"
                className="linkText"
                href="#"
                onClick={() =>
                  props.onLinkClick({
                    to: "/dbhthh",
                  })
                }
              >
                HẠ TẦNG HÀNG HẢI
              </a>

              <span>
                <ArrowForwardIcon />
              </span>
              <a to="/luonghh" className="linkText">

                {groupChartTH === "1" ? (
                  portData[props.cangIndex].nameLabeQuyHoach
                ) : groupChartTH === "2" ?
                  portData[props.cangIndex].name
                  : groupChartTH === "3" ?
                    portData[props.cangIndex].nameLabeBenCang
                    : null
                }
              </a>

            </div>

            <div>
              {portData[props.cangIndex].radio === "true" && (
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={groupChartTH}
                    onChange={(e) => {
                      setGroupChartTH(e.target.value);
                      console.log(e.target.value);
                      console.log(groupChartTH);
                    }}
                  >
                    <FormControlLabel
                      value={"1"}
                      control={<Radio />}
                      label="Quy hoạch cảng biển"
                    />
                    <FormControlLabel
                      value={"2"}
                      control={<Radio />}
                      label="Luồng hàng hải công cộng"
                    />
                    {portData[props.cangIndex].radio === "true" && portData[props.cangIndex].nameLabeBenCang && (
                      <FormControlLabel
                        value={"3"}
                        control={<Radio />}
                        label="Danh sách bến cảng"
                      />
                    )}
                  </RadioGroup>
                </FormControl>
              )}
            </div>

            {/* <div className="setting">
              <DarkMode />
            </div> */}
          </div>

          {groupChartTH === "1" && portData[props.cangIndex].radio === "true" ?

            <div style={{ width: "calc(100% - 50px)", margin: "0 auto" }}>
              <Grid container spacing={1} columns={24} style={{}}>
                <Grid item xs={24}>
                  <Box fullWidth style={{ backgroundColor: "white" }}>
                    {arrQuyHoachHH(props)[props.cangIndex]}
                  </Box>
                </Grid>
              </Grid>
            </div>
            : groupChartTH === "2" && portData[props.cangIndex].radio === "true" ?
              <div style={{ width: "calc(100% - 50px)", margin: "0 auto" }}>
                <Grid container spacing={1} columns={24} style={{}}>
                  <Grid item xs={24}>
                    <Box fullWidth style={{ backgroundColor: "white" }}>
                      {arrLuongHH(props)[props.cangIndex]}
                    </Box>
                  </Grid>
                </Grid>
              </div>
              :
                <div style={{ width: "calc(100% - 50px)", margin: "0 auto" }}>
                  <Grid container spacing={1} columns={24} style={{}}>
                    <Grid item xs={24}>
                      <Box fullWidth style={{ backgroundColor: "white" }}>
                        {arrCangBienHH(props)[props.cangIndex]}

                      </Box>
                    </Grid>
                  </Grid>
                </div>
          }

        </div>

        {/* <footer className="">
          <div className="bg-tim">
            <span className="vsp  c-white f-size-13">
              © Công ty TNHH MTV Thông tin điện tử Hàng Hải Việt Nam
            </span>
          </div>
        </footer> */}
      </div>
    </main>
  );
}
