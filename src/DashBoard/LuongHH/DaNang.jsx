import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";

export default class DaNang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      isHovered: false,
    };
  }
  handleImageClick = () => {
    this.setState((prevState) => ({
      isFullScreen: !prevState.isFullScreen,
    }));
  };

  handleImageHover = (isHovered) => {
    this.setState({
      isHovered,
    });
  };
  render() {
    const { isFullScreen, isHovered } = this.state;
    const cursorStyle = isFullScreen
      ? { cursor: "zoom-out" }
      : { cursor: "zoom-in" };
    return (
      <div>
        <div className="container-fluid">
          <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - ĐÀ NẴNG</h4>
          <div className="row">
            <div className="col">
              <table id="luonginfo" className="table" border="1">
                <thead>
                  <tr>
                    <th rowspan="2">STT</th>
                    <th className="nameHH" rowspan="2">
                      Tuyến luồng hàng hải
                    </th>
                    <th colspan="3">Thông số kỹ thuật luồng hàng hải</th>
                  </tr>
                  <tr>
                    <th scope="col">Chiều dài (Km)</th>
                    <th scope="col">Chiều rộng/ Đường kính (m)</th>
                    <th scope="col">Độ sâu (m - Hệ cao độ Hải đồ)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Đà Nẵng</td>
                    <td>9,697</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 1: P0 - Cầu 3 Tiên Sa</td>
                    <td>6,77</td>
                    <td>110,0</td>
                    <td>-11,0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 2: Cầu 3 Tiên Sa - hết bến cảng Sơn Trà</td>
                    <td>1,58</td>
                    <td>85,0</td>
                    <td>-8,1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 3: Bến cảng Sơn Trà - Cầu NMĐT Sông Thu</td>
                    <td>1,350</td>
                    <td>65,0</td>
                    <td>-5,6</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vũng quay tàu:</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Vũng quay số 1- cầu 1,2 Tiên Sa</td>
                    <td></td>
                    <td>388,0</td>
                    <td>-11,0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Vũng quay số 2- cầu 3 Tiên Sa</td>
                    <td></td>
                    <td>300,0</td>
                    <td>-11,0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Vũng quay số 3- cầu 1 Sơn Trà</td>
                    <td></td>
                    <td>210,0</td>
                    <td>-4,7</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Vũng quay số 4- cầu xăng dầu KV 5</td>
                    <td></td>
                    <td>210,0</td>
                    <td>-3,8</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vùng đón trả hoa tiêu (*)</td>
                    <td>Hình tròn</td>
                    <td>2,0 HL</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
