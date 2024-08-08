import React, { Component } from "react";
import Slider from "react-slick";
import "./ListContentWindow.css";
import { Link } from "react-router-dom";
import "../../images/common.css";
import "slick-carousel/slick/slick.css";
import "../../HomePage/Responsive.css";
import "slick-carousel/slick/slick-theme.css";
import DBLoaiTau from "../../DashBoard/DBLoaiTau";
export default class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent2: false,
      isClicked: false,
    };
  }

   handleClick = () => {
    this.setState({isClicked: true})
    setTimeout(() => {
      this.state.isClicked(false);
    }, 1000);
  };


  handleButtonClick = () => {
    // Khi nút được nhấn, cập nhật trạng thái để hiển thị Component2.
    this.setState({ showComponent2: true });
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
      <div className="containerContent1">

{this.state.isClicked && (
                    <div className="notification">
                      <p>Đang phát triển</p>
                    </div>
                  )}
        <Slider {...settings} className="mg-l-40 mg-r-40" style={{}}>
        <div to="/dbloaitau" className="linkCtn t-deco " onClick={this.handleClick}>
          <div className="BlockHandle ">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                HÀNH CHÍNH CÔNG
              </h4>
            </div>
            <div className="textContentHCC" style={{ marginTop: "5px" }}>

            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </div>
        <Link to="/dbloaitau" className="linkCtn t-deco ">
          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                TÀU BIỂN
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>
              <p>Tổng số tàu: 1.147</p>
              <p>Tổng GT: 4.150.596</p>
              <p>Tổng DWT: 7.101.152</p>
            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>

        <Link to="/dbloaitau" className="linkCtn t-deco ">
          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                THUYỀN VIÊN
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>
              <p>Tổng Thuyền Viên: 62.836</p>
              <p>Tổng Hoa Tiêu: 464</p>
              <p>Khác: 1.152</p>
            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>
        <Link to="/dbloaitau" className="linkCtn t-deco ">

          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                AN NINH - AN TOÀN
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>

            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>
        <Link to="/dbloaitau" className="linkCtn t-deco ">
          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                VẬN TẢI BIỂN
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>

            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>
        <Link to="/dbloaitau" className="linkCtn t-deco ">

          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                HẠ TẦNG HÀNG HẢI
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>

            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>

        <Link to="/dbloaitau" className="linkCtn t-deco ">
          <div className="BlockHandle">
            <div className="headerItemHandle t-algin pd-10-b bo-bm-blue">
              <h4
                className="f-weight-bold f-size-16"
                style={{ color: "#6dcff6" }}
              >
                TÌM KIẾM CỨU NẠN
              </h4>
            </div>
            <div className="txtTauBien f-size-16" style={{ marginTop: "5px" }}>
              
            </div>
          </div>
          {this.state.showComponent2 && <DBLoaiTau />}
        </Link>
        </Slider>
      </div>
    );
  }
}
