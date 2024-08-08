import React, { Component } from 'react'
import "./luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';
export default class KienGian extends Component {
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
		<h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - KIÊN GIANG</h4>
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
							<td>Hà Tiên</td>
							<td>11,60</td>
							<td>60,0</td>
							<td>-2,3</td>
						</tr>
						<tr>
							<td></td>
							<td> - Vùng đón trả hoa tiêu </td>
							<td>Hình tròn</td>
							<td>0,6 HL</td>
							<td></td>
						</tr>
						<tr>
							<td>2</td>
							<td>An Thới</td>
							<td>0,69</td>
							<td>50,0</td>
							<td>-6,7</td>
						</tr>
						<tr>
							<td></td>
							<td>- Vũng quay tàu</td>
							<td>Hình tròn</td>
							<td>180,0</td>
							<td>-6,4</td>
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
							<td> + Vị trí 1</td>
							<td>Hình tròn</td>
							<td>0,6 HL</td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> + Vị trí 2</td>
							<td>Hình tròn</td>
							<td>1,0 HL</td>
							<td></td>
						</tr>
						<tr>
							<td>3</td>
							<td>Rạch Giá </td>
							<td>2,50</td>
							<td>45,0</td>
							<td>-2,5</td>
						</tr>
					</tbody>
				</table>
			</div>

			
		</div>
	</div>
    )
  }
}
