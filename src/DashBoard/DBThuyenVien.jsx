import React, { useEffect, useRef, useState } from "react";
import {  Routes, Route } from "react-router-dom"; // Import a and other necessary components from react-router-dom
import "./DB.css";
import '../images/common.css';
import '../HomePage/Responsive.css';
import '../HomePage/HomePage.css';
import '../DashBoard/DarkMode/DarkMode.css';

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
import Chart from "./ChartComponent/Chart";
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



export default function DBThuyenVien(props) {
  const [mainDiv, setMainDiv] = useState(null);
  const testDiv = useRef(null);
  const[mainHeight, setMainHeight] = useState(501);
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSetting, setShowSetting] = useState(false);


  // const listHd = [
  //   { name: "Tàu dưới 5000 GT", donvi: "Tàu", value: "767", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tàu 5000 GT đến 10.000GT", donvi: "Tàu", value: "105", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tàu 10.000 GT đến 20.000GT", donvi: "Tàu", value: "86", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tàu 20.000 GT đến 30.000GT", donvi: "Tàu", value: "32", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tàu trên 30.000", donvi: "Tàu", value: "42", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tổng số tàu", donvi: "Tàu", value: "1.032", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tổng dung tích (GT)", donvi: "", value: "6.310.352", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  //   { name: "Tổng DWT", donvi: "", value: "10.610.730", icon: <SailingIcon style={{ color: "yellow", fontSize: "2.5rem" }} /> },
  // ];

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
      <div className="pageHomeDash" ref={(e)=> {
        console.log(e);
        if(e) {
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

          {/* <span>
                <SettingsOutlinedIcon style={{color: "white"}}/>
              </span> */}
        </section>
        <div className="Container" ref={(e)=>{
          if(e) {
            //setMainDiv(e);
          }
        }}>
          <div className="containerDb">
            <div className="address">
              <div className="text">
              <a className="iconHome" to="/" href="#" onClick={() => props.onLinkClick(null)}>
                <HomeOutlinedIcon />
              </a>
                <a to="/" className="linkText" href="#" onClick={()=>props.onLinkClick(null)} >
                  TRANG CHỦ
                </a>
                <span><ArrowForwardIcon /></span>
                <a to="/dbloaitau" className="linkText">
                  {props.title}
                </a>
              </div>

              {/* <div className="setting">
                <DarkMode />
              </div> */}

            </div>
            <div style={{width: "calc(100% - 50px)", margin:"0 auto"}}>
              <Grid container spacing={1} columns={24} style={{}}>
                <Grid item xs={12}>
                <Box fullWidth style={{backgroundColor: "white", height: h + "px"}}>
                  <Chart jsonUrl={props.listUrls[0]} />
                </Box>
                </Grid>

                <Grid item xs={12}>
                <Box fullWidth style={{backgroundColor: "white", height: h + "px"}}>
                  <Chart jsonUrl={props.listUrls[1]} />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box fullWidth style={{backgroundColor: "white", height: h + "px"}}>
                  <Chart jsonUrl={props.listUrls[2]} />
                </Box>
                  
                </Grid>
                
                <Grid item xs={12}>
                <Box fullWidth style={{backgroundColor: "white", height: h + "px"}}>
                
                  <Chart jsonUrl={props.listUrls[3]} />
                </Box>

                </Grid>
              </Grid>
              </div>
          </div>
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
