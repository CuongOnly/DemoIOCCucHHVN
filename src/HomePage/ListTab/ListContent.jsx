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
import ListContentHTHH from "./ListContentHTHH";



export default class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent2: null,
      isClicked: false,
      showABC: false,
      dataList: [
        {
          name: "DV HÀNH CHÍNH CÔNG",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/hcc",
          demo: [
            {
              name: "- TTHC lĩnh vực hàng hải",
              value: "94",
              donvi: ""
            },
            {
              name: "- TTHC lĩnh vực khác",
              value: "06",
              donvi: ""
            },
            
          ]

        },
        {
          name: "TÀU BIỂN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbloaitau",
          demo: [
            {
              name: "- Tổng số tàu",
              value: "1.147",
              donvi: "(Tàu)"
            },
            {
              name: "- Tổng GT",
              value: "13.112",
              donvi: ""
            },
            {
              name: "- Tổng DWT",
              value: "11.201.939",
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
              name: "- Tổng số thuyền viên",
              value: "62,836",
              donvi: ""
            },
            {
              name: "- Sỹ quan quản lý",
              value: "13.314",
              donvi: ""
            },
            {
              name: "- Sỹ quan vận hành",
              value: "10.124",
              donvi: ""
            },
            {
              name: "- Thủy thủ thợ máy",
              value: "39.398",
              donvi: ""
            },
            {
              name: "- Tổng số hoa tiêu",
              value: "464",
              donvi: ""
            },
            

          ]
        },
        {
          name: "AN NINH - AN TOÀN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/anninh",
          demo: [
            {
              name: "- Tổng số vụ báo nạn",
              value: "240",
              donvi: ""
            },
            {
              name: "- Tổng số lần xử lý báo nạn thật",
              value: "212",
              donvi: ""
            },
          ]
        },
        {
          name: "VẬN TẢI BIỂN",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbvantaibien",
          demo: [
            {
              name: "- Container",
              value: "149.303.093",
              donvi: ""
            },
            {
              name: "- Hàng Lỏng",
              value: "184.938.844",
              donvi: ""
            },
            {
              name: "- Hàng khô, tổng hợp",
              value: "294.354.768",
              donvi: ""
            },
          ],
        },
        {
          name: "HẠ TẦNG HÀNG HẢI",
          // src: "https://dashboardgstc.vishipel.vn/#/doanh-thu",
          to: "/dbhthh",
          demo: [
            {
              name: "- Số lượng cảng biển",
              value: "34",
              donvi: ""
            },
            {
              name: "- Số lượng bến cảng",
              value: "296",
              donvi: ""
            },
            {
              name: "- Số lượng luồng HH",
              value: "45",
              donvi: ""
            },
          ],
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
      <div className="containerContent mg-l-40 mg-r-40 ">
        {this.state.dataList.map((item, index) => (
          <a href="#" className="linkCtn t-deco " onClick={()=>this.props.onLinkClick(item)} >
            <div className="BlockHandle">
              <div className="HandleImg ">

                <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
                  <h4
                    className="f-weight-bold f-size-16"
                    style={{ color: "#6dcff6" }}
                  >

                    {item.name}
                  </h4>
                </div>
                <div className="txtTauBien f-size-16" style={{ marginTop: "5px", lineHeight: 1.5 }}>
                  {item.demo?.map((demo, index) => (
                    <p>{demo.name}: <span className="f-weight-bold">{demo.value}</span> {demo.donvi}</p>
                  ))}
                  {item.click?.map((click, index) => (
                    <p>{click.name}</p>
                  ))}
                </div>
              </div>
            </div>

          </a>

        ))}

        {/* <ListContentHTHH onLinkClick = {this.props.onLinkClick}/> */}
      </div>
    );
  }
}
