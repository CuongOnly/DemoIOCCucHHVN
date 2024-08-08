import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class QuangNinh extends Component {
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
      <div className="container-fluid">
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - QUẢNG NINH</h4>
        <div className="row">
          <div className="col">
            <table id="luonginfo" className="table" border="1">
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
                  <td className="name">Vạn Gia</td>
                  <td>9,2</td>
                  <td>120</td>
                  <td>-6</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">- Vùng đón trả hoa tiêu</td>
                  <td>Hình tròn</td>
                  <td>1,0 HL</td>
                  <td></td>
                </tr>

                <tr>
                  <td>2</td>
                  <td className="name">Hòn Gai - Cái Lân</td>
                  <td>31,8</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">- Đoạn 1: Hòn Bài - Hòn Một</td>
                  <td>17,5</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">+ Hòn Bài - Hòn Phao Ngoài</td>
                  <td>10,5</td>
                  <td>240</td>
                  <td>-13</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">+ Hòn Phao Ngoài - Hòn Một</td>
                  <td>7</td>
                  <td>130</td>
                  <td>-12,1</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">
                    - Đoạn 2: Hòn Một - Cảng Xăng dầu B12
                  </td>
                  <td>12</td>
                  <td>130</td>
                  <td>-10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">
                    - Đoạn 3: Cảng xăng dầu B12 - Vũng quay cầu 5 cảng Cái Lân
                  </td>
                  <td>1,5</td>
                  <td>130</td>
                  <td>-10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">
                    - Đoạn 4: Vũng quay cầu 5 - Cầu 1 cảng Cái Lân
                  </td>
                  <td>0,8</td>
                  <td>120</td>
                  <td>-9</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">- Vũng quay tàu</td>
                  <td></td>
                  <td>350</td>
                  <td>-10</td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">- Vùng đón trả hoa tiêu</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">+ Gần Hòn Bài</td>
                  <td>Hình tròn</td>
                  <td>0,8 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className="name">+ Gần Hòn Miều</td>
                  <td>Hình tròn</td>
                  <td>0,5 HL</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="name">Sông Chanh</td>
                  <td>13,2</td>
                  <td>80</td>
                  <td>-1,8</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
