import React, { Component } from 'react'
import './luongHH.css';
import { ZoomIn, ZoomOut } from '@mui/icons-material';

export default class BinhThuan extends Component {
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
      <div>
        <div className="container-fluid">
          <h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - BÌNH THUẬN</h4>
          <div className="row">
            <div className="col">
              <table id="luonginfo" className="table" border="1">
                <thead>
                  <tr>
                    <th rowspan="2">STT</th>
                    <th className='nameHH' rowspan="2">Tuyến luồng hàng hải</th>
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
                    <td>Phan Thiết</td>
                    <td>1,61</td>
                    <td>45,0</td>
                    <td>-4,1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+ Từ P0 đến cặp P1, 2 (vị trí cách đầu đê chắn sóng khoảng 0,2km)</td>
                    <td>0,86</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+ Đoạn 2: Từ  cặp P1, 2 đến hết vũng quay trở tàu (phía trước Bến cảng Phan Thiết)</td>
                    <td>0,75</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vũng quay tàu</td>
                    <td></td>
                    <td>150,0</td>
                    <td>-4,1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td> - Vùng đón trả hoa tiêu </td>
                    <td>Hình tròn</td>
                    <td>600m</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Phú Quý</td>
                    <td>3,20</td>
                    <td>50,0</td>
                    <td>-3,2</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+ Đoạn 1: Từ P0 đến cặp P3, 4 (vị trí cách đầu đê chắn sóng khoảng 130m)</td>
                    <td>2,70</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>+ Từ đến cặp P3, 4 đến khu nước trước Bến cảng Phú Quý</td>
                    <td>0,50</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Vùng đón trả hoa tiêu </td>
                    <td>Hình tròn</td>
                    <td>1,0 HL</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
