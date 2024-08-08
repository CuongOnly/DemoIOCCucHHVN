import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";

export default class CanTho extends Component {
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
          <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - CẦN THƠ</h4>
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
                    <td>Định An - Sông Hậu</td>
                    <td>182,26</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn: cửa Định An (P0-P14)</td>
                    <td>15,90</td>
                    <td>100,0</td>
                    <td>-4,0</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn: P14 đến Bến cảng Hoàng Diệu</td>
                    <td>103,10</td>
                    <td>200,0</td>
                    <td>3,3</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn: Bến cảng Hoàng Diệu đến Vàm Ô Môn</td>
                    <td>11,60</td>
                    <td>100,0</td>
                    <td>-9,8</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn: Vàm Ô Môn đến Vàm Cái Sắn - Rạch Gói Lớn</td>
                    <td>51,66</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Đoạn luồng chính</td>
                    <td>32,81</td>
                    <td>200,0</td>
                    <td>-7,4</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> + Đoạn luồng nhánh</td>
                    <td>18,85</td>
                    <td>60,0</td>
                    <td>-5,1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vũng quay tàu:</td>
                    <td></td>
                    <td>300,0</td>
                    <td>-7,7</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vùng đón trả hoa tiêu </td>
                    <td>Hình tròn</td>
                    <td>2,0 HL</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Luồng cho tàu biển trọng tải lớn vào sông Hậu </td>
                    <td>52,60</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 1: Đoạn luồng biển</td>
                    <td>7,70</td>
                    <td>150 - 85</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 2: Đoạn luồng kênh Tắt</td>
                    <td>8,70</td>
                    <td>85,0</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 3: Đoạn luồng kênh Quan Chánh Bố</td>
                    <td>20,00</td>
                    <td>85,0</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 4: Đoạn luồng sông Hậu</td>
                    <td>16,20</td>
                    <td>95,0</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Khu nước tránh tàu</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {" "}
                      + Khu nước tránh tàu 1: tại phía phải luồng, khu vực cặp
                      Đăng tiêu số “19” và số “24”
                    </td>
                    <td>0,60</td>
                    <td>50,0</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {" "}
                      + Khu nước tránh tàu 2: tại phía phải luồng, khu vực từ
                      cặp Đăng tiêu số “29” và số “34” đến cặp Đăng tiêu số “31”
                      và số “36”
                    </td>
                    <td>0,60</td>
                    <td>50,0</td>
                    <td>-6,5</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vùng đón trả hoa tiêu </td>
                    <td>Hình tròn</td>
                    <td>2,0 HL</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Trần Đề</td>
                    <td>31,00</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 1 cửa Trần Đề: Từ P0 đến P17</td>
                    <td>31,00</td>
                    <td>130,0</td>
                    <td>-2,8</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 2: Từ P17 đến P25 (khu vực cầu Đại Ngãi)</td>
                    <td>20,20</td>
                    <td>130,00</td>
                    <td>độ sâu theo TBHH</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      {" "}
                      - Đoạn 3: Từ P25 luồng Trần Đề đến P45 luồng Định An Sông
                      Hậu
                    </td>
                    <td>11,90</td>
                    <td>200,00</td>
                    <td>độ sâu theo TBHH</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Đoạn 4: Đoạn luồng nhánh (phía bên trái Đoạn 3) </td>
                    <td>5,80</td>
                    <td>130,0</td>
                    <td>độ sâu theo TBHH</td>
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
