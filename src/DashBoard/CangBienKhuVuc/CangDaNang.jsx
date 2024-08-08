import React, { Component } from 'react'
import './CangBien.css'
export default class CangDaNang extends Component {
  render() {
    return (
        <div class="container-fluid">
        <h4>DANH SÁCH BẾN CẢNG ĐÀ NẴNG</h4>

        <table class="tg">
            <thead>
                <tr>
                    <th class="tg-u1yq" rowspan="2">TT</th>
                    <th class="tg-u1yq" rowspan="2">Bến cảng</th>
                    <th class="tg-u1yq" rowspan="2">Cầu cảng</th>
                    <th class="tg-u1yq" rowspan="2">Đơn vị khai thác</th>
                    <th class="tg-u1yq" rowspan="2">Chiều dài (m)</th>
                    <th class="tg-u1yq" colspan="2">Cỡ tàu (DWT)</th>
                    <th class="tg-u1yq" rowspan="2">Công năng</th>
                    <th class="tg-u1yq" rowspan="2">Luồng hàng hải</th>
                </tr>
                <tr>
                    <th class="tg-u1yq">Thực tế</th>
                    <th class="tg-u1yq">Quy hoạch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-0lax">1</td>
                    <td class="tg-0lax">Bến cảng chuyên dùng PETEC</td>
                    <td class="tg-0lax">Cầu cảng chuyên dùng</td>
                    <td class="tg-0lax">Tổng công ty Thương mại Kỹ thuật và Đầu tư CTCP (PETEC)</td>
                    <td class="tg-0lax">33</td>
                    <td class="tg-0lax">5.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0lax">Luồng chuyên dùng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">2</td>
                    <td class="tg-0lax">Bến cảng chuyên dùng của Công ty CP Xi măng Vicem Hải Vân</td>
                    <td class="tg-0lax">Cầu cảng xi măng Hải Vân</td>
                    <td class="tg-0lax">Công ty cổ phần Vicem Hải Vân</td>
                    <td class="tg-0lax">100</td>
                    <td class="tg-0lax">5.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">3</td>
                    <td class="tg-0lax" rowspan="8">Bến cảng Tiên Sa</td>
                    <td class="tg-0lax">Cầu cảng số 1 mép cầu cảng phía Hạ Lưu</td>
                    <td class="tg-0lax" rowspan="8">Công ty TNHH MTV Cảng Đà Nẵng.</td>
                    <td class="tg-0lax">208,4</td>
                    <td class="tg-0lax">45.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax" rowspan="8">Cầu cảng Tổng hợp (Hàng rời, hàng khô…), container.</td>
                    <td class="tg-0lax" rowspan="8">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 1A mép cầu cảng phía Thượng Lưu</td>
                    <td class="tg-0lax">208,4</td>
                    <td class="tg-0lax">20.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 2 mép cầu cảng phía Hạ Lưu</td>
                    <td class="tg-0lax">186</td>
                    <td class="tg-0lax">20.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 2A mép cầu cảng phía Thượng Lưu</td>
                    <td class="tg-0lax">186</td>
                    <td class="tg-0lax">30.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 3</td>
                    <td class="tg-0lax">225,2</td>
                    <td class="tg-0lax">50.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 4</td>
                    <td class="tg-0lax">310</td>
                    <td class="tg-0lax">50.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 5</td>
                    <td class="tg-0lax">210</td>
                    <td class="tg-0lax">20.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng số 7</td>
                    <td class="tg-0lax">196,93</td>
                    <td class="tg-0lax">2.000</td>
                    <td class="tg-0lax"></td>
                </tr>
                <tr>
                    <td class="tg-0lax">4</td>
                    <td class="tg-0lax">Bến cảng Sơn Trà</td>
                    <td class="tg-0lax">Cầu cảng Sơn Trà</td>
                    <td class="tg-0lax">Công ty dịch vụ dầu khí Đà Nẵng</td>
                    <td class="tg-0lax">200</td>
                    <td class="tg-0lax">10.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">5</td>
                    <td class="tg-0lax">Bến cảng chuyên dùng Công ty Xăng dầu khu vực V</td>
                    <td class="tg-0lax">Cầu cảng Thọ Quang</td>
                    <td class="tg-0lax">Công ty xăng dầu khu vực V</td>
                    <td class="tg-0lax">193</td>
                    <td class="tg-0lax">6.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">6</td>
                    <td class="tg-0lax">Bến cảng chuyên dùng Tổng kho sản phẩm dầu khí Đà Nẵng</td>
                    <td class="tg-0lax">Cầu cảng PV Gas</td>
                    <td class="tg-0lax">Tông kho sản phẩm dầu khí Đà Nẵng</td>
                    <td class="tg-0lax">136</td>
                    <td class="tg-0lax">5.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">7</td>
                    <td class="tg-0lax">Bến cảng Hải Sơn (X50)</td>
                    <td class="tg-0lax">Cầu cảng Hải Sơn</td>
                    <td class="tg-0lax">Công ty TNHH MTV đóng và sửa chữa tàu Hải Sơn</td>
                    <td class="tg-0lax">375</td>
                    <td class="tg-0lax">5.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
                <tr>
                    <td class="tg-0lax">8</td>
                    <td class="tg-0lax">Bến cảng Nhà máy đóng tàu Tổng công ty Sông Thu</td>
                    <td class="tg-0lax">Cầu cảng&nbsp;&nbsp;Sông Thu</td>
                    <td class="tg-0lax">Tổng công ty Sông Thu</td>
                    <td class="tg-0lax">206,3</td>
                    <td class="tg-0lax">7.000</td>
                    <td class="tg-0lax"></td>
                    <td class="tg-0lax">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td class="tg-0lax">Luồng hàng hải Đà Nẵng</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
  }
}
