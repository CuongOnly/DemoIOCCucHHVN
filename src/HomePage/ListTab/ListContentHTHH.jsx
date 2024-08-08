import React, { Component } from "react";
import Slider from "react-slick";
import "./ListContent.css";
import "../../HomePage/Responsive.css";

import "../../images/common.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DBLoaiTau from "../../DashBoard/DBLoaiTau"
import DBThuyenVien from "../../DashBoard/DBThuyenVien"
import HomePage from "../HomePage";



export default class ListContentHTHH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent2: null,
      isClicked: false,
      showABC: false,
      dataList: [
        {
          name: "HÀNH CHÍNH CÔNG",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "hanhchinh",

        },
        {
          name: "TÀU BIỂN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbloaitau",
          demo: [
            {
              name: "Tổng số tàu",
              value: "1.147",
              donvi: "(Tàu)"
            },
            {
              name: "Tổng GT",
              value: "13.112",
              donvi: ""
            },
            {
              name: "Tổng DWT",
              value: "13.112",
              donvi: ""
            },
          ]
        },
        {
          name: "THUYỀN VIÊN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbthuyenvien",
          demo: [
            {
              name: "Sỹ quan quản lý",
              value: "13.314",
              donvi: ""
            },
            {
              name: "Sỹ quan vận hành",
              value: "10.124",
              donvi: ""
            },
            {
              name: "Thủy thủ thợ máy",
              value: "39.398",
              donvi: ""
            },
            {
              name: "Tổng số hoa tiêu",
              value: "464",
              donvi: ""
            },


          ]
        },
        {
          name: "AN NINH - AN TOÀN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "",
        },
        {
          name: "VẬN TẢI BIỂN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbhthh",
          click: [
            {
              name: "Tổng số tàu",
              to: "/bando",
              value: "1.147",
              donvi: "(Tàu)"
            },
          ],
        },
        {
          name: "HẠ TẦNG HÀNG HẢI",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "",

        },
      ],
    };
  }
  handleClick = () => {
    this.setState({ showABC: true });
  };

  handleClick = () => {
    this.setState({ isClicked: true })
    setTimeout(() => {
      this.state.isClicked(false);
    }, 1000);
  };


  handleButtonClick = (to) => {
    this.setState({ showComponent2: to });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
    };

    // Định nghĩa kiểu cho Slider
    const sliderStyle = {
      display: "flex",
    };

    return (
      <div className="containerContent">

        <div className="BlockHandle">
          <div className="HandleImg ">

            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <a href="#" className="linkCtn t-deco " onClick={() => this.props.onLinkClick(
                {
                  name: "HẠ TẦNG HÀNG HẢI",
                  to: "/dbhthh",

                }

              )} >
                <h4
                  className="f-weight-bold f-size-16"
                  style={{ color: "#6dcff6" }}
                >
                  HẠ TẦNG HÀNG HẢI
                </h4>
              </a>
            </div>
            <div style={{}}>
            <div style={{ marginTop: "5px", lineHeight: 1.5 }}>
              <a className="txtTauBien f-size-14 c-white cursor" onClick={() => this.props.onLinkClick(
                {
                  name: "HẠ TẦNG HÀNG HẢI",
                  to: "/dbhthh",

                }

              )}> - Số lượng cảng biển : <span className="f-weight-bold">34</span></a>


            </div>
            <div style={{ marginTop: "5px", lineHeight: 1.5 }}>
              <a className="txtTauBien f-size-14 c-white cursor"> - Số lượng bến cảng: <span className="f-weight-bold">296</span></a>
            </div>

            <div style={{ marginTop: "5px", lineHeight: 1.5 }}>
              <a className="txtTauBien f-size-14 c-white cursor"> - Số lượng luồng HH: <span className="f-weight-bold">45</span></a>
            </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
