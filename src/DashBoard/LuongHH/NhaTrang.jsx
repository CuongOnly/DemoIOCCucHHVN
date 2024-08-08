import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class NhaTrang extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - NHA TRANG</h4>
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
                  <td>Nha Trang</td>
                  <td>11,00</td>
                  <td>200,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Bắc Nha Trang</td>
                  <td>4,10</td>
                  <td>200,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Nam Nha Trang</td>
                  <td>6,90</td>
                  <td>200,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu (*)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vị trí phía Bắc</td>
                  <td>Hình tròn</td>
                  <td>1,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vị trí phía Nam</td>
                  <td>Hình tròn</td>
                  <td>1,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Đầm Môn</td>
                  <td>16,50</td>
                  <td>200,0</td>
                  <td>-16,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td>2,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ba Ngòi</td>
                  <td>13,00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: từ phao P0 - P9,10</td>
                  <td>10,70</td>
                  <td>450,0</td>
                  <td>-11,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 2: từ phao P9,10 - Cảng Ba Ngòi</td>
                  <td>2,30</td>
                  <td>200,0</td>
                  <td>-11,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td>1,0 HL</td>
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
