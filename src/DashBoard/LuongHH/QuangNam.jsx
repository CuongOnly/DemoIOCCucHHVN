import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class QuangNam extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - QUẢNG NAM</h4>
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
                  <td>Kỳ Hà</td>
                  <td>10,22</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Kỳ Hà (từ P0 đến P14 - P15)</td>
                  <td>4,80</td>
                  <td>100,0</td>
                  <td>-8,1</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vũng quay tàu Kỳ Hà </td>
                  <td></td>
                  <td>260,0</td>
                  <td>-8,7</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    - Đoạn Tam Hiệp (từ P14-P15 đến hết Bến cảng Tam Hiệp)
                  </td>
                  <td>5,42</td>
                  <td>100,0</td>
                  <td>-8,1</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vũng quay tàu Tam Hiệp </td>
                  <td></td>
                  <td>220,0</td>
                  <td>-8,3</td>
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
