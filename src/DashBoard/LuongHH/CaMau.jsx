import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";

export default class CaMau extends Component {
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
        <div class="container-fluid">
          <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - CÀ MAU</h4>
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
                    <td>Năm Căn - Bồ Đề</td>
                    <td>47,00</td>
                    <td>60,0</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      + Đoạn 1: Đoạn luồng biển (từ phao số “0” vào đến cửa sông
                      Bồ Đề)
                    </td>
                    <td>13,00</td>
                    <td></td>
                    <td>-2,0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      Đoạn 2: Đoạn luồng trong sông (từ cửa sông Bồ Đề vào khu
                      vực tiếp giáp vàm Trại Lưới cách Bến cảng Năm Căn 3,5km về
                      phía thượng lưu)
                    </td>
                    <td>34,00</td>
                    <td></td>
                    <td>-10,6</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vùng đón trả hoa tiêu </td>
                    <td>Hình tròn</td>
                    <td>3,0 HL</td>
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
