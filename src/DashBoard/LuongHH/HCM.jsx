import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
export default class HCM extends Component {
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
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - THÀNH PHỐ HỒ CHÍ MINH</h4>
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
                  <td>Sài Gòn - Vũng Tàu</td>
                  <td>82,60</td>
                  <td>150,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu VQ1</td>
                  <td></td>
                  <td>340,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu VQ1</td>
                  <td></td>
                  <td>480,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Soài Rạp</td>
                  <td>66,60</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: Soài Rạp (ngoài biển)</td>
                  <td>57,60</td>
                  <td></td>
                  <td>-9,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Từ P0 đến P15-16</td>
                  <td></td>
                  <td>160,0</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Từ P15-16 đến Bến cảng SPCT</td>
                  <td></td>
                  <td>120,0</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 2: Hiệp Phước (trong sông)</td>
                  <td>9,00</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Từ Bến cảng SPCT đến Bến cảng Tân cảng Hiệp Phước</td>
                  <td>1,90</td>
                  <td>120,0</td>
                  <td>-9,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    + Từ Bến cảng Tân cảng Hiệp Phước đến ngã ba Bình Khánh
                  </td>
                  <td>7,10</td>
                  <td>150,0</td>
                  <td>-8,5</td>
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
                  <td> + VQ 1- Bến cảng SPCT:</td>
                  <td></td>
                  <td>500,0</td>
                  <td>-9,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + VQ 2- Tân cảng Hiệp Phước:</td>
                  <td></td>
                  <td>450,0</td>
                  <td>-9,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Vùng đón trả hoa tiêu (*)</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>+ Vùng đón trả hoa tiêu (phao P0)</td>
                  <td>Hình vuông (2778x2778)</td>
                  <td>772 ha</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>+ Vùng đón trả hoa tiêu Lý Nhơn</td>
                  <td>Hình chữ nhật (1198x602)</td>
                  <td>72 ha</td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Đồng Nai</td>
                  <td>35,70</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: Mũi đèn Đỏ đến ngã ba rạch ông Nhiêu</td>
                  <td>9,50</td>
                  <td>150,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Đoạn 2: Ngã ba rạch ông Nhiêu đến cầu Đồng Nai</td>
                  <td>26,20</td>
                  <td>150,0</td>
                  <td>-4,2</td>
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
                  <td> + VQ 1- Bến cảng Cát Lái:</td>
                  <td></td>
                  <td>300,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + VQ 2- Ngã ba rạch Ông Nhiêu:</td>
                  <td></td>
                  <td>356,0</td>
                  <td>-8,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + VQ 3- Bến cảng Đồng Nai:</td>
                  <td></td>
                  <td>300,0</td>
                  <td>-10,4</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sông Dừa</td>
                  <td>10,40</td>
                  <td>60,0</td>
                  <td>-7,0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Đồng Tranh - Gò Gia</td>
                  <td>40,90</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: Ngã 3 sông Lòng Tàu đến ngã 3 Tắt Cua</td>
                  <td>15,30</td>
                  <td>130,0</td>
                  <td>-3,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {" "}
                    - Đoạn 2: Ngã 3 Tắt Cua đến Tắt Ông Cu và Tắt Ông Cu đến Tắt
                    Bài
                  </td>
                  <td>10,20</td>
                  <td>105,0</td>
                  <td>-2,7</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 3: Tắt Cua</td>
                  <td>6,40</td>
                  <td>70,0</td>
                  <td>-7,3</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 4: Ngã 3 Tắt Cua đến ngã 3 Tắt Bài</td>
                  <td>2,00</td>
                  <td>140,0</td>
                  <td>-9,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 5: Ngã 3 Tắt Bài đến ngã 3 sông Cái Mép</td>
                  <td>7,00</td>
                  <td>140,0</td>
                  <td>-12,4</td>
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
                  <td> + VQ 1- Ngã 3 Tắt Cua</td>
                  <td></td>
                  <td>380,0</td>
                  <td>-10,4</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + VQ 2- Ngã 3 Tắt Bài</td>
                  <td></td>
                  <td>550,0</td>
                  <td>-12,5</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}
