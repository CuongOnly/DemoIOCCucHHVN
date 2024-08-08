import React, { Component } from 'react'
import "./luongHH.css";
import { ZoomIn, ZoomOut } from '@mui/icons-material';
export default class MyTho extends Component {
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
		<h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - MỸ THO</h4>
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
							<td>Sông Tiền</td>
							<td>74,00</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 1: P0 đến cống Vàm Kinh (P25, P26)</td>
							<td>25,00</td>
							<td>80,0</td>
							<td>-3,0</td>
						</tr>
						<tr>
							<td></td>
							<td> - Đoạn 2: cống Vàm Kinh đến thượng lưu Cảng Mỹ Tho 500m</td>
							<td>49,00</td>
							<td>150,0</td>
							<td>-3,0</td>
						</tr>
					</tbody>
				</table>
			</div>


		</div>
	</div>
    )
  }
}
