import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class NgheAn extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - NGHỆ AN</h4>
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
                  <td>Cửa Lò</td>
                  <td>4,54</td>
                  <td>100,0</td>
                  <td>-7,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu</td>
                  <td></td>
                  <td>220,0</td>
                  <td>-7,2</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td>1,0 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Cửa Hội - Bến Thủy</td>
                  <td>23,30</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn cửa Hội (P0-P8)</td>
                  <td>4,00</td>
                  <td>60,0</td>
                  <td>-3,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn P8 - Bến cảng Xuân Hải</td>
                  <td>11,50</td>
                  <td>60,0</td>
                  <td>-3,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Bến cảng Xuân Hải - Bến cảng Bến Thuỷ</td>
                  <td>7,80</td>
                  <td>50,0</td>
                  <td>-2,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td> 1,5 HL</td>
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
