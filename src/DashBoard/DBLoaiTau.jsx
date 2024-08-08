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



export default function DBLoaiTau(props) {
  const [mainDiv, setMainDiv] = useState(null);
  const testDiv = useRef(null);
  const[mainHeight, setMainHeight] = useState(501);
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

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
