import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import a and other necessary components from react-router-dom
import "./DB.css";
import '../images/common.css';
import '../HomePage/Responsive.css';
import '../HomePage/HomePage.css';
import '../DashBoard/DarkMode/DarkMode.css';
import '../DashBoard/DBMap.css';
import DarkMode from './DarkMode/DarkMode';

import SailingIcon from '@mui/icons-material/Sailing';
import ChartCot from "./ChartComponent/ChartCot";
import ChartTron from "./ChartComponent/ChartTron";
import ChartDuong from "./ChartComponent/ChartDuong";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import KayakingRoundedIcon from '@mui/icons-material/KayakingRounded';
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import SupportRoundedIcon from '@mui/icons-material/SupportRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ChartHorizonBar from "./ChartComponent/ChartHorizonBar";
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

export const portData = [
  { id: 1, name: 'CẢNG BIỂN QUẢNG NINH', top: 389, left: 588 },
  { id: 2, name: 'CẢNG BIỂN HẢI PHÒNG', top: 414, left: 552 },
  { id: 3, name: 'CẢNG BIỂN THÁI BÌNH', top: 439 , left: 520 },
  { id: 4, name: 'CẢNG BIỂN NAM ĐỊNH', top: 464, left: 510 },
  { id: 5, koCoDL: "true", name: 'CẢNG BIỂN NINH BÌNH', top: 491, left: 497 },
  { id: 6, name: 'CẢNG BIỂN THANH HÓA', top: 528, left: 454 },
  { id: 7, name: 'CẢNG BIỂN NGHỆ AN', top: 595, left: 442 },
  { id: 8, name: 'CẢNG BIỂN HÀ TĨNH', top: 648, left: 487 },
  { id: 9, name: 'CẢNG BIỂN QUẢNG BÌNH', top: 699, left: 521 },
  { id: 10, name: 'CẢNG BIỂN QUẢNG TRỊ', top: 786, left: 593 },
  { id: 11, name: 'CẢNG BIỂN THỪA THIÊN HUẾ', top: 823, left: 639 },
  { id: 12, name: 'CẢNG BIỂN ĐÀ NẴNG', top: 871, left: 668 },
  { id: 13, name: 'CẢNG BIỂN QUẢNG NAM', top: 897, left: 726 },
  { id: 14, name: 'CẢNG BIỂN QUẢNG NGÃI', top: 937, left: 738 },
  { id: 15, name: 'CẢNG BIỂN BÌNH ĐỊNH', top: 1088, left: 760 },
  { id: 16, name: 'CẢNG BIỂN PHÚ YÊN', top: 1170, left: 770 },
  { id: 17, name: 'CẢNG BIỂN KHÁNH HÒA', top: 1240, left: 776 },
  { id: 18, name: 'CẢNG BIỂN NINH THUẬN', top: 1302, left: 745 },
  { id: 19, name: 'CẢNG BIỂN BÌNH THUẬN', top: 1352, left: 730 },
  { id: 20, name: 'CẢNG BIỂN ĐỒNG NAI', top: 1422, left: 604 },
  { id: 21, name: 'CẢNG BIỂN VŨNG TÀU', top: 1449, left: 596 },
  { id: 22, name: 'CẢNG BIỂN BẾN TRE', top: 1476, left: 575 },
  { id: 23, name: 'CẢNG BIỂN VĨNH LONG', top: 1505, left: 576 },
  { id: 24, name: 'CẢNG BIỂN TRÀ VINH', top: 1531, left: 573 },
  { id: 25, name: 'CẢNG BIỂN SÓC TRĂNG', top: 1557, left: 463 },
  { id: 26, name: 'CẢNG BIỂN HẬU GIANG', top: 1599, left: 468 },
  { id: 27, name: 'CẢNG BIỂN BẠC LIÊU', top: 1625, left: 397 },
  { id: 28, name: 'CẢNG BIỂN CÀ MAU', top: 1544, left: 86 },
  { id: 29, name: 'CẢNG BIỂN KIÊN GIANG', top: 1464, left: 60 },
  { id: 30, name: 'CẢNG BIỂN CẦN THƠ', top: 1393, left: 151 },
  { id: 31, name: 'CẢNG BIỂN AN GIANG', top: 1369, left: 155 },
  { id: 32, name: 'CẢNG BIỂN ĐỒNG THÁP', top: 1340, left: 150 },
  { id: 33, name: 'CẢNG BIỂN TIỀN GIANG', top: 1313, left: 192 },
  { id: 34, name: 'CẢNG BIỂN TP.HCM', top: 1288, left: 249 },
  { id: 35, name: 'CẢNG BIỂN BÌNH DƯƠNG', top: 1262, left: 232 },
]

export default function DBVanTaiBien(props) {
  const [mainDiv, setMainDiv] = useState(null);
  const testDiv = useRef(null);
  const [mainHeight, setMainHeight] = useState(501);
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSetting, setShowSetting] = useState(false);



  const listHd = [
    { name: "Hành chính công", donvi: "", value: "94", icon: <FolderCopyRoundedIcon style={{ color: "green", fontSize: "2.5rem" }} /> },
    { name: "Tổng số tàu", donvi: "Tàu", value: "1.032", icon: <SailingIcon style={{ color: "#74743e", fontSize: "2.5rem" }} /> },
    { name: "Tổng số thuyền viên", donvi: "Người", value: "62.836", icon: <KayakingRoundedIcon style={{ color: "blue", fontSize: "2.5rem" }} /> },
    { name: "Tổng số hoa tiêu", donvi: "Người", value: "464", icon: <Person3OutlinedIcon style={{ color: "0a8972", fontSize: "2.5rem" }} /> },
    { name: "Lượt hàng hóa", donvi: "Lượt", value: "330.042", icon: <ApartmentRoundedIcon style={{ color: "pink", fontSize: "2.5rem" }} /> },
    { name: "Tìm kiếm cứu nạn (AT)", donvi: "Vụ", value: "213", icon: <SupportRoundedIcon style={{ color: "#4e4e17", fontSize: "2.5rem" }} /> },
  ];

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, [])

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  const handleShowSetting = () => {
    setShowSetting(!showSetting);
  }

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  }
  var h = Math.round((mainHeight - 155) / 2);

  return (
    <main className="theme">
      <div className="pageHomeDashMap" ref={(e) => {
        console.log(e);
        if (e) {
          setMainHeight(e.clientHeight);

        }
      }}>

        <section className="HeaderWeb">
          <div className="LogoAndName">
            <a to="/" className="LogoWeb"></a>
            <div className="NameWeb">
              <h3 style={{ fontSize: "24px", marginTop: "5px" }}>CỤC HÀNG HẢI VIỆT NAM</h3>
              <p>VIETNAM MARITIME ADMINISTRATION</p>
            </div>
          </div>
        </section>
        <div className="containerDb"

          ref={(e) => {
            if (e) {
              //setMainDiv(e);
            }
          }}>
          <div className="address">
            <div className="text">
            <a className="iconHome" to="/" href="#" onClick={() => props.onLinkClick(null)}>
                <HomeOutlinedIcon />
              </a>
              <a to="/" className="linkText" href="#" onClick={() => props.onLinkClick(null)} >
                TRANG CHỦ
              </a>
              <span><ArrowForwardIcon /></span>
              <a to="/" className="linkText" href="#" onClick={() => props.onLinkClick(

                {
                  to: "/dbhthh"
                }

              )} >
                {props.title}
              </a>
            </div>

            {/* <div className="setting">
              <DarkMode />
            </div> */}

          </div>
          <div style={{ width: "calc(100% - 50px)", margin: "0 auto" }}>
            <Grid container spacing={1} columns={24} style={{}}>
              <Grid item xs={24}>
                <Box fullWidth style={{ backgroundColor: "white" }}>
                  <div className="map">
                  <img src="/images/chart/Bando.png"/>
                    {portData.map((port, index) => (
                      <div  
                        key={port.id}
                        className="icon"
                        style={{ position: 'absolute', top: `${port.top}px`, left: `${port.left}px`, zIndex: 10 }}
                      >
                      
                        <a style={{textDecoration:"none"}} href="#" target="_self" onClick={() => props.LuongHHClick(index)}>
                          {port.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>


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
