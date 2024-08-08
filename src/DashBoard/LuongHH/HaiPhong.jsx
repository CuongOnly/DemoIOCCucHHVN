import React, { Component } from "react";
import "./luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';
export default class HaiPhong extends Component {
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
	  const cursorStyle = isFullScreen ? { cursor: 'zoom-out' } : { cursor: 'zoom-in' };
    return (
      <div class="container-fluid">
        <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - HẢI PHÒNG</h4>
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
                  <td>Phà Rừng</td>
                  <td>13,90</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 1: Phà Rừng</td>
                  <td>11,30</td>
                  <td>80,0</td>
                  <td>-4,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn 2: sông Giá</td>
                  <td>2,60</td>
                  <td>50,0</td>
                  <td>-3,5</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hải phòng</td>
                  <td>78,50</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Lạch Huyện</td>
                  <td>22,60</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    + Đoạn từ phao số “0” đến hết vũng quay trở tàu phía trước
                    Cầu cảng số 1, số 2 Bến cảng Cửa ngõ quốc tế Hải Phòng (Lạch
                    Huyện){" "}
                  </td>
                  <td>20,66</td>
                  <td>160,0</td>
                  <td>-14,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    + Đoạn từ vũng quay trở tàu phía trước Cầu cảng số 1, số 2
                    Bến cảng Cửa ngõ quốc tế Hải Phòng (Lạch Huyện) đến khu vực
                    cặp phao số “29”-“30”
                  </td>
                  <td>1,94</td>
                  <td>120,0</td>
                  <td>-7,3</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Kênh Hà Nam</td>
                  <td>5,90</td>
                  <td>80,0</td>
                  <td>-7,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Bạch Đằng</td>
                  <td>9,60</td>
                  <td>80,0</td>
                  <td>-7,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn sông Cấm</td>
                  <td>9,90</td>
                  <td>80,0</td>
                  <td>-5,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Vật Cách</td>
                  <td>9,60</td>
                  <td>60,0</td>
                  <td>-4,3</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Nam Triệu</td>
                  <td>15,40</td>
                  <td>100,0</td>
                  <td>-4,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Đoạn Kênh Cái Tráp</td>
                  <td>5,50</td>
                  <td>70,0</td>
                  <td>-1,8</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vũng quay tàu</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Khu vực Lạch Huyện </td>
                  <td></td>
                  <td>660,0</td>
                  <td>-14,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Khu vực Đình Vũ</td>
                  <td></td>
                  <td>260,0</td>
                  <td>-7,0</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Khu vực sông Cấm</td>
                  <td></td>
                  <td>220,0</td>
                  <td>-5,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Khu vực Chùa Vẽ</td>
                  <td></td>
                  <td>220,0</td>
                  <td>-5,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vũng quay tàu Bến cảng Hải Phòng</td>
                  <td></td>
                  <td>220,0</td>
                  <td>-5,5</td>
                </tr>
                <tr>
                  <td></td>
                  <td> - Vùng đón trả hoa tiêu</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td> + Vị trí VT1: vào cảng biển Hải Phòng</td>
                  <td>Hình chữ nhật (2000x376)m</td>
                  <td>75,2 ha</td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    {" "}
                    + Vị trí VT2: vào Bến cảng của ngõ quốc tế Hải Phòng (Lạch
                    Huyện)
                  </td>
                  <td>Hình tròn</td>
                  <td>3,0 HL</td>
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
