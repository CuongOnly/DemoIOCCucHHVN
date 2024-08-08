import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class QuyNhon extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - QUY NHƠN</h4>
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
                  <td>15</td>
                  <td>Quy Nhơn</td>
                  <td>8,90</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: từ phao 0 đến hết vũng quay tàu</td>
                  <td>6,30</td>
                  <td>110,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 2: từ vũng quay tàu đến vùng neo Thị Nại</td>
                  <td>2,60</td>
                  <td>80,0</td>
                  <td>-2,8</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu trước cảng Quy Nhơn</td>
                  <td></td>
                  <td>300,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu </td>
                  <td>Hình chữ nhật (2021x914)m</td>
                  <td>184,7 ha</td>
                  <td></td>
                </tr>

                <tr>
                  <td>16</td>
                  <td>Vũng Rô</td>
                  <td>2,50</td>
                  <td>300,0</td>
                  <td>-12,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu </td>
                  <td>Hình chữ nhật (1955x950)m</td>
                  <td>185,7 ha</td>
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
