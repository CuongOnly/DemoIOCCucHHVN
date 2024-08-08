import React, { Component } from 'react'

export default class temp extends Component {
  render() {
    return (
        <div class="container-fluid">
		<h4>DANH BẠ LUỒNG HÀNG HẢI CÔNG CỘNG - </h4>
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
					</tbody>
				</table>
			</div>

			<div class="col">
				<img src="imgs/.jpg" />
			</div>
		</div>
	</div>
    )
  }
}
