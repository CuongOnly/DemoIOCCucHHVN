import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class QuangBinh extends Component {
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
      <div class="container-fluid">
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - QUẢNG BÌNH</h4>
        <div class="row">
          <div class="col">
            <table id="luonginfo" class="table" border="1">
              <thead>
                <tr>
                  <th rowspan="2">STT</th>
                  <th rowspan="2" style={{ width: "40%" }}>
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
                  <td>Hòn La</td>
                  <td>3,20</td>
                  <td>100,0</td>
                  <td>-8,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu</td>
                  <td></td>
                  <td>216,0</td>
                  <td>-8,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình quạt tròn 45o đến 225o</td>
                  <td>2,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Cửa Gianh</td>
                  <td>4,90</td>
                  <td>70,0</td>
                  <td>-4,8</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình quạt tròn 0o đến 165o</td>
                  <td>2,0 HL</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
