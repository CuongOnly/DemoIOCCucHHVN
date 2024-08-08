import React, { Component } from 'react'
import "./luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';
export default class VungTau extends Component {
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
		<h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - VŨNG TÀU</h4>
		<div class="row">
			<div class="col">
				<table id="luonginfo" class="table" border="1">
					<thead>
						<tr>
							<th rowspan="2">STT</th>
							<th rowspan="2" style={{width:"40%"}}>Tuyến luồng hàng hải</th>
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
							<td>Vũng Tàu- Thị Vải</td>
							<td>50,50</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 1: P0 - Bến cảng xăng dầu Petec Cái Mép</td>
							<td>30,56</td>
							<td>310,0</td>
							<td>-14,0</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 2: Bến cảng xăng dầu Petec Cái Mép - Bến cảng Tổng hợp Thị Vải (ODA)</td>
							<td>7,54</td>
							<td>310 - 260</td>
							<td>-12,0</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 3: Bến cảng Tổng hợp Thị Vải (ODA) - Bến cảng Quốc tế Sài Gòn Việt Nam (SITV)</td>
							<td>2,80</td>
							<td>220,0</td>
							<td>-12,0</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 4: Bến cảng Quốc tế Sài Gòn Việt Nam (SITV) - Bến cảng Vedan Phước Thái</td>
							<td>9,60</td>
							<td>90,0</td>
							<td>-7,2</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 5: Bến cảng Vedan Phước Thái lên phia thương lưu 3,5km</td>
							<td>3,50</td>
							<td>90,0</td>
							<td>-7,2</td>
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
							<td> + Vũng quay tại NMĐT Ba Son:</td>
							<td></td>
							<td>500,0</td>
							<td>-12,0</td>
						</tr>
						<tr>
							<td></td>
							<td> + Vũng quay tại Vedan Phước Thái</td>
							<td></td>
							<td>250,0</td>
							<td>-7,2</td>
						</tr>
						<tr>
							<td></td>
							<td> - Vùng đón trả hoa tiêu</td>
							<td>Hình chữ nhật</td>
							<td>2470 ha</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> + Vùng 1</td>
							<td>Hình chữ nhật (1610x695)m</td>
							<td>112 ha</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> + Vùng 2</td>
							<td>Hình chữ nhật (2778x1218)m</td>
							<td>338ha</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> + Vùng 3</td>
							<td>Hình chữ nhật (2827x3652)m</td>
							<td>1032,5 ha</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> + Vùng 4</td>
							<td> Hình chữ nhật (2704x3652)m</td>
							<td>987,5 ha</td>
							<td></td>
						</tr>
						<tr>
							<td>2</td>
							<td>Sông Dinh</td>
							<td>16,60</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 1: Đoạn ngoài biển (nối tiếp từ luồng SG-VT vào sông Dinh đến bến cảng Vietsovpetro)</td>
							<td>7,50</td>
							<td>100,0</td>
							<td>-7,0</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 2: Đoạn từ bến cảng Vietsovpetro đến bến cảng VinaOffshore 200m</td>
							<td>2,00</td>
							<td>80,0</td>
							<td>-5,8</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 3: Đoạn từ thượng lưu bến cảng VinaOffshore 200m đến ngã 3 sông cây Khế</td>
							<td>7,10</td>
							<td>80,0</td>
							<td>-4,7</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Bến Đầm - Côn Đảo</td>
							<td>3,40</td>
							<td>200,0</td>
							<td>-6,9</td>
						</tr>
						<tr>
							<td></td>
							<td> - Vũng quay tàu</td>
							<td></td>
							<td>400,0</td>
							<td>-7,4</td>
						</tr>
						<tr>
							<td></td>
							<td> - Vùng đón trả hoa tiêu</td>
							<td>hình tròn</td>
							<td>1,0 HL</td>
							<td></td>
						</tr>
						<tr>
							<td>4</td>
							<td>Côn Sơn - Côn Đảo</td>
							<td>13,60</td>
							<td>200,0</td>
							<td>-3,4</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>
    )
  }
}
