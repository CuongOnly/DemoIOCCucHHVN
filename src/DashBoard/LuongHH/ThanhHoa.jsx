import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class ThanhHoa extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - THANH HOÁ</h4>
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
                  <td>Lệ Môn</td>
                  <td>22,20</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn P0-P8</td>
                  <td>3,70</td>
                  <td>50,0</td>
                  <td>-1,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn P8 - Cảng Lệ Môn</td>
                  <td>12,10</td>
                  <td>50,0</td>
                  <td>-0,4</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn cảng Lệ Môn - Cầu Hoàng Long -200m</td>
                  <td>6,40</td>
                  <td></td>
                  <td>-3,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td>2,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Nghi Sơn</td>
                  <td>4,65</td>
                  <td>120,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu trước Cầu cảng số 2</td>
                  <td></td>
                  <td>300,0</td>
                  <td>-11,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td> 2,0 HL</td>
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
