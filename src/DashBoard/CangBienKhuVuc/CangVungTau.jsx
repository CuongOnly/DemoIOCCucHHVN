import React, { Component } from 'react'
import './CangBien.css'
export default class CangVungTau extends Component {
  render() {
    return (
        <div class="container-fluid">

<h4>DANH SÁCH BẾN CẢNG VŨNG TÀU</h4>

        <table class="tg">
            <thead>
                <tr>
                    <th class="tg-zlqz" rowspan="2">TT</th>
                    <th class="tg-zlqz" rowspan="2">Bến cảng</th>
                    <th class="tg-zlqz" rowspan="2">Cầu cảng</th>
                    <th class="tg-zlqz" rowspan="2">Đơn vị khai thác</th>
                    <th class="tg-zlqz" rowspan="2">Chiều dài (m)</th>
                    <th class="tg-zlqz" colspan="2">Cỡ tàu (DWT)</th>
                    <th class="tg-zlqz" rowspan="2">Công năng</th>
                    <th class="tg-zlqz" rowspan="2">Luồng hàng hải</th>
                </tr>
                <tr>
                    <th class="tg-zlqz">Thực tế</th>
                    <th class="tg-zlqz">Quy hoạch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-fymr" colspan="9">Khu vực: Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">1</td>
                    <td class="tg-0pky">Bến cảng Hải đoàn 129</td>
                    <td class="tg-0pky">Cầu cảng Hải đoàn 129</td>
                    <td class="tg-0pky">Công ty TNHH MTV Hải sản Trường Sa</td>
                    <td class="tg-0pky">352</td>
                    <td class="tg-0pky">1,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">2</td>
                    <td class="tg-0pky">Bến cảng Hà Lộc</td>
                    <td class="tg-0pky">Cầu cảng Hà Lộc</td>
                    <td class="tg-0pky">Công ty TNHH Hà Lộc</td>
                    <td class="tg-0pky">150</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng hợp</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">3</td>
                    <td class="tg-0pky">Bến cảng Quốc phòng Quân khu 7</td>
                    <td class="tg-0pky">Cầu cảng Quân khu 7</td>
                    <td class="tg-0pky">Công ty TNHH MTV Đông Hải</td>
                    <td class="tg-0pky">110</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Xăng dầu</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">4</td>
                    <td class="tg-0pky">Bến cảng Côn Đảo -Vũng Tàu</td>
                    <td class="tg-0pky">Cầu cảng Thuỷ sản Cát Lở</td>
                    <td class="tg-0pky">Ban Quản Lý Cảng Bến Đầm</td>
                    <td class="tg-0pky">110</td>
                    <td class="tg-0pky">1,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Hải sản</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">5</td>
                    <td class="tg-0pky">Bến cảng Thương cảng Vũng Tàu</td>
                    <td class="tg-0pky">Cầu cảng Thương cảng</td>
                    <td class="tg-0pky">Công ty CP Thương cảng Vũng Tàu</td>
                    <td class="tg-0pky">250</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">6</td>
                    <td class="tg-0pky">Bến cảng kho xăng dầu K2</td>
                    <td class="tg-0pky">Cầu cảng K2</td>
                    <td class="tg-0pky">Công ty Xăng dầu Bà Rịa - Vũng Tàu</td>
                    <td class="tg-0pky">82</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">7</td>
                    <td class="tg-0pky">Bến cảng NASOS</td>
                    <td class="tg-0pky">Cầu cảng NASOS</td>
                    <td class="tg-0pky">Trung tâm ƯPSCTD Khu vực phía Nam</td>
                    <td class="tg-0pky">132</td>
                    <td class="tg-0pky">1,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">phục vụ công tác ứng phó sự cố tràn dầu và bốc xếp các trang thiết bị phục vụ ứng phó sự cố tràn dầu</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">8</td>
                    <td class="tg-0pky">Bến cảng Vungtau Shipyard</td>
                    <td class="tg-0pky">Cầu cảng và Ụ tàu của Công ty cổ phần Đóng tàu và dịch vụ dầu khí Vũng Tàu</td>
                    <td class="tg-0pky">Công ty cổ phần Đóng tàu và dịch vụ dầu khí Vũng Tàu</td>
                    <td class="tg-0pky">50</td>
                    <td class="tg-0pky">3,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Sửa chữa tàu</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">9</td>
                    <td class="tg-0pky">Bến cảng trang trí 10.000 DWT Nhà máy đóng và sửa chữa tàu biển Sài Gòn</td>
                    <td class="tg-0pky">Cầu cảng trang trí</td>
                    <td class="tg-0pky">Công ty TNHH đóng tàu và cơ khí hàng hải Sài Gòn</td>
                    <td class="tg-0pky">100</td>
                    <td class="tg-0pky">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Chuyên dùng đóng mới, sửa chữa và phục vụ hoạt động của Nhà máy</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">10</td>
                    <td class="tg-0pky">Bến cảng Khu công nghiệp Đông Xuyên</td>
                    <td class="tg-0pky">Cầu cảng Đông Xuyên</td>
                    <td class="tg-0pky">Công ty CP cảng Đông Xuyên</td>
                    <td class="tg-0pky">180</td>
                    <td class="tg-0pky">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">11</td>
                    <td class="tg-0pky">Bến cảng Vina Offshore</td>
                    <td class="tg-0pky">Cầu cảng Vina Offshore</td>
                    <td class="tg-0pky">Công ty TNHH Kỹ thuật CKHH Vina Offshore</td>
                    <td class="tg-0pky">82</td>
                    <td class="tg-0pky">3,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Cầu cảng chuyên dụng dịch vụ, đóng, sửa chữa tàu.</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">12</td>
                    <td class="tg-0pky">Bến cảng Công ty TNHH Vard Vũng tàu</td>
                    <td class="tg-0pky">Cầu cảng&nbsp;&nbsp;VardVũng tàu</td>
                    <td class="tg-0pky">Công ty TNHH VARD Vũng Tàu</td>
                    <td class="tg-0pky">140</td>
                    <td class="tg-0pky">7,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Phục vụ công tác trang trí, đóng và hạ tàu thủy</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">13</td>
                    <td class="tg-0pky">Bến cảng Vạn An</td>
                    <td class="tg-0pky">Cầu cảng Vạn An</td>
                    <td class="tg-0pky">Công ty Cổ phần Hóa dầu Vạn An</td>
                    <td class="tg-0pky">156</td>
                    <td class="tg-0pky">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Dầu</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">14</td>
                    <td class="tg-0pky">Bến cảng xăng dầu PTSC</td>
                    <td class="tg-0pky">Cầu cảng PTSC</td>
                    <td class="tg-0pky">Tổng công ty dầu Việt Nam (PV Oil) - Xí nghiệp tổng kho xăng dầu Miền Đông</td>
                    <td class="tg-0pky">138</td>
                    <td class="tg-0pky">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Xăng dầu</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">15</td>
                    <td class="tg-0pky">Bến cảng kho xăng dầu Cù Lao Tào</td>
                    <td class="tg-0pky">Cầu cảng Cù Lao Tào</td>
                    <td class="tg-0pky">Tổng Công ty Dầu Việt Nam (PV OIL)</td>
                    <td class="tg-0pky">160</td>
                    <td class="tg-0pky">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">16</td>
                    <td class="tg-0pky">Bến cảng thượng lưu PTSC</td>
                    <td class="tg-0pky">Cầu cảng Vietsovpetro</td>
                    <td class="tg-0pky">Tổng công ty dầu Việt Nam (PV Oil) - Xí nghiệp tổng kho xăng dầu Miền Đông</td>
                    <td class="tg-0pky">120</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Dầu khí</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="10">17</td>
                    <td class="tg-0pky" rowspan="10">Bến cảng Vietsovpetro</td>
                    <td class="tg-0pky">Cầu cảng số 0</td>
                    <td class="tg-0pky" rowspan="10">Liên Doanh Việt Nga Vietsopetro</td>
                    <td class="tg-0pky" rowspan="10">1406</td>
                    <td class="tg-0pky" rowspan="10">5,000 - 10,000</td>
                    <td class="tg-0pky" rowspan="10"></td>
                    <td class="tg-0pky" rowspan="10">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td class="tg-0pky" rowspan="10">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 4</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 5</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 6</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 7</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 8</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 9</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="9">18</td>
                    <td class="tg-0pky" rowspan="9">Bến cảng hạ lưu PTSC</td>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky" rowspan="9">Công ty Cảng Dịch vụ Dầu khí</td>
                    <td class="tg-0pky" rowspan="9">733</td>
                    <td class="tg-0pky" rowspan="9">10,000</td>
                    <td class="tg-0pky" rowspan="9"></td>
                    <td class="tg-0pky" rowspan="9">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…), Tổng hợp (Hàng rời, hàng khô.</td>
                    <td class="tg-0pky" rowspan="9">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 4</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 5</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 6</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 7</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 8</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 9</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 10</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 11</td>
                </tr>
                <tr>
                    <td class="tg-0pky">19</td>
                    <td class="tg-0pky">Bến cảng chế tạo giàn khoan dầu khí (PV Shipyard)</td>
                    <td class="tg-0pky">Cầu cảng PV Shipyard</td>
                    <td class="tg-0pky">Công ty CP Chế tạo Giàn khoan Dầu khí</td>
                    <td class="tg-0pky">156</td>
                    <td class="tg-0pky">15,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-0pky">20</td>
                    <td class="tg-0pky">Bến cảng kết cấu kim loại và lắp máy dầu khí (PVC-MS)</td>
                    <td class="tg-0pky">Cầu cảng PVC-MS</td>
                    <td class="tg-0pky">Công ty CP Kết cấu Kim loại và lắp máy dầu khí</td>
                    <td class="tg-0pky">142</td>
                    <td class="tg-0pky">10,000 giảm tải</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng hợp (Hàng rời, hàng khô.</td>
                    <td class="tg-0pky">Sông Dinh</td>
                </tr>
                <tr>
                    <td class="tg-fymr" colspan="9">Khu bến: Long Sơn</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">21</td>
                    <td class="tg-0pky" rowspan="3">Bến cảng chuyên dùng Dự án Tổ hợp hóa dầu miền Nam Việt Nam</td>
                    <td class="tg-0pky">Cầu cảng xây dựng</td>
                    <td class="tg-0pky" rowspan="3">Công ty TNHH hoá dầu Long Sơn</td>
                    <td class="tg-0pky">295,6</td>
                    <td class="tg-0pky">19,500</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Phục vụ dự án Tổ hợp hoá dầu miền Nam</td>
                    <td class="tg-0pky" rowspan="3">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng Hydrocarbon số 1</td>
                    <td class="tg-0pky">214</td>
                    <td class="tg-0pky">20,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Xăng dầu, khí hoá lỏng</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng Hydrocarbon số 2</td>
                    <td class="tg-0pky">292</td>
                    <td class="tg-0pky">100,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Khu bến: Cái Mép - Thị Vải</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">22</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng xi măng Cẩm Phả</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">Công ty CP Xi măng Cẩm Phả - CN phía Nam</td>
                    <td class="tg-0pky">224</td>
                    <td class="tg-0pky">15,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">55</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">23</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng Nhà máy điện Phú Mỹ 1</td>
                    <td class="tg-0pky">Cảng dầu Phú Mỹ của Nhà máy điện Phú Mỹ 1</td>
                    <td class="tg-0pky" rowspan="2">Công ty TNHH MTV Nhiệt điện Phú Mỹ-Tổng công ty phát điện 3</td>
                    <td class="tg-0pky">190</td>
                    <td class="tg-0pky" rowspan="2">10,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Dầu</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng dầu Nhà máy điện Phú Mỹ 2-1</td>
                    <td class="tg-0pky">175</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">24</td>
                    <td class="tg-0pky" rowspan="3">Bến cảng SCC-VN Thị Vải</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="3">Công ty TNHH SIAM CITY CEMENT</td>
                    <td class="tg-0pky">70</td>
                    <td class="tg-0pky">1,600</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="3">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">246</td>
                    <td class="tg-0pky">50,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">40</td>
                    <td class="tg-0pky">800</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">25</td>
                    <td class="tg-0pky">Bến cảng quốc tế Sài Gòn Việt Nam (SITV)</td>
                    <td class="tg-0pky">Cầu cảng SITV</td>
                    <td class="tg-0pky">Công ty TNHH Cảng Quốc tế Sài Gòn Việt Nam</td>
                    <td class="tg-0pky">727,92</td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">26</td>
                    <td class="tg-0pky" rowspan="3">Bến cảng quốc tế Thị Vải</td>
                    <td class="tg-0pky">Cầu cảng&nbsp;&nbsp;số 1</td>
                    <td class="tg-0pky" rowspan="3">Công ty TNHH CảngQuốc tế Thị Vải</td>
                    <td class="tg-0pky">300</td>
                    <td class="tg-0pky">80,000 giảm tải</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="3">Tổng hợp, container</td>
                    <td class="tg-0pky" rowspan="3">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">140</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">175</td>
                    <td class="tg-0pky">2,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="5">27</td>
                    <td class="tg-0pky" rowspan="5">Bến cảng Baria Serece</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="5">Công ty CP dịch vụ xuất nhập khẩu nông lâm sản và phân bón Bà Rịa (BARIA SERECE)</td>
                    <td class="tg-0pky">555,38</td>
                    <td class="tg-0pky">87,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="5">Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0pky" rowspan="5">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">333</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">116,4</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 4</td>
                    <td class="tg-0pky">29</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 5</td>
                    <td class="tg-0pky">29</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="4">28</td>
                    <td class="tg-0pky" rowspan="4">Bến cảng Đạm và dịch vụ dầu khí tổng hợp Phú Mỹ</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="4">Công ty CP Cảng dịch vụ Dầu khí Tổng hợp Phú Mỹ</td>
                    <td class="tg-0pky">384,3</td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="4">Tiếp nhận tàu biển Việt Nam và nước ngoài ra, vào neo đậu bốc, dỡ hàng hóa.</td>
                    <td class="tg-0pky" rowspan="4">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">130</td>
                    <td class="tg-0pky">2,500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">130</td>
                    <td class="tg-0pky">1,500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 4</td>
                    <td class="tg-0pky">60</td>
                    <td class="tg-0pky">2,500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">29</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng thép Phú Mỹ</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">CN Công ty TNHH MTV Cảng Sài Gòn tại Bà Rịa Vũng Tàu</td>
                    <td class="tg-0pky">230</td>
                    <td class="tg-0pky">50,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">46</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">30</td>
                    <td class="tg-0pky">Bến cảng tổng hợp Thị Vải (ODA)</td>
                    <td class="tg-0pky">Cầu cảng Thị Vải</td>
                    <td class="tg-0pky">Công ty CP Cảng Tổng hợp Thị Vải</td>
                    <td class="tg-0pky">600</td>
                    <td class="tg-0pky">75,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="4">31</td>
                    <td class="tg-0pky" rowspan="4">Bến cảng Quốc tế SP-PSA</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky">Công ty TNHH Cảng Quốc tế SP-PSA</td>
                    <td class="tg-0pky">300</td>
                    <td class="tg-0pky" rowspan="4">117000 (cont)100,000 (khô)</td>
                    <td class="tg-0pky" rowspan="4"></td>
                    <td class="tg-0pky" rowspan="4">Tổng hợp (Hàng rời, hàng khô…)</td>
                    <td class="tg-0pky" rowspan="4">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">Cầu cảng số 2</td>
                    <td class="tg-0pky" rowspan="3"></td>
                    <td class="tg-0pky" rowspan="3">300</td>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td class="tg-0pky">32</td>
                    <td class="tg-0pky">Bến cảng Posco</td>
                    <td class="tg-0pky">Cầu cảng Posco</td>
                    <td class="tg-0pky">Công ty TNHH Posco Việt Nam</td>
                    <td class="tg-0pky">333</td>
                    <td class="tg-0pky">60,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">33</td>
                    <td class="tg-0pky">Bến cảng Posco Yamato Vina</td>
                    <td class="tg-0pky">Cầu cảng Posco Yamato Vina</td>
                    <td class="tg-0pky">Công ty cổ phần thép Posco Yamato Vina</td>
                    <td class="tg-0pky">266,8</td>
                    <td class="tg-0pky">50,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">hàng hóa chuyên dùng phục vụ&nbsp;&nbsp;Nhà máy thép của Công ty TNHH Posco SS Vina</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">34</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng Nhà máy đóng tàu Ba Son</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">Tổng Công ty Ba Son</td>
                    <td class="tg-0pky">190</td>
                    <td class="tg-0pky">70,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu sà lan</td>
                    <td class="tg-0pky">110</td>
                    <td class="tg-0pky">3,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">35</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng Interflour Cái Mép</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">Công ty TNHH Interflour Việt Nam</td>
                    <td class="tg-0pky">310</td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Cầu cảng chuyên dụng hàng rời, quặng</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">150</td>
                    <td class="tg-0pky">7,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="6">36</td>
                    <td class="tg-0pky" rowspan="6">Bến cảng Container Cái Mép Thượng</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="4">Công ty CP Tân cảng Cái Mép</td>
                    <td class="tg-0pky">300</td>
                    <td class="tg-0pky">145,000 giảm tải</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="6">Container</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng sà lan số 1</td>
                    <td class="tg-0pky">52,5</td>
                    <td class="tg-0pky">2,200</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng sà lan số 2</td>
                    <td class="tg-0pky">69,5</td>
                    <td class="tg-0pky">2,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng sà lan số 3</td>
                    <td class="tg-0pky">92</td>
                    <td class="tg-0pky">2,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky" rowspan="2">Công ty TNHH Cảng Quốc tế Tân cảng Cái Mép</td>
                    <td class="tg-0pky">320</td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">270</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">37</td>
                    <td class="tg-0pky">Bến cảng Hyosung Vina Chemicals</td>
                    <td class="tg-0pky">Cầu cảng Hyosung Vina chemicals</td>
                    <td class="tg-0pky">Công ty TNHH Hyosung Việt Nam</td>
                    <td class="tg-0pky">268</td>
                    <td class="tg-0pky">60,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">LPG và các sản phẩm dầu khí khác</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">38</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng PVGas Vũng Tàu</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">Công ty chế biến khí Vũng Tàu (PV Gas Vungtau)</td>
                    <td class="tg-0pky">242</td>
                    <td class="tg-0pky">60,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Dầu, khí hoá lỏng LPG, hoá chất</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">84</td>
                    <td class="tg-0pky">2,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">39</td>
                    <td class="tg-0pky" rowspan="3">Bến cảng xăng dầu PETEC Cái Mép</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="3">Tổng công ty thương mại kỹ thuật và đầu tư- CTCP(PETEC)</td>
                    <td class="tg-0pky">320</td>
                    <td class="tg-0pky">100,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="3">LNG, xăng dầu</td>
                    <td class="tg-0pky" rowspan="3">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">131</td>
                    <td class="tg-0pky">5,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">72</td>
                    <td class="tg-0pky">1,000</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">40</td>
                    <td class="tg-0pky">Bến cảng xăng dầu Petro Vũng Tàu</td>
                    <td class="tg-0pky">Cầu cảng Petro Vũng Tàu</td>
                    <td class="tg-0pky">Công ty Cổ phần Dầu khí Hải Linh Vũng Tàu</td>
                    <td class="tg-0pky">281,5</td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">LNG, xăng dầu</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">41</td>
                    <td class="tg-0pky">Bến cảng Tổng hợp Cái Mép</td>
                    <td class="tg-0pky">Cầu cảng Tổng hợp Cái Mép</td>
                    <td class="tg-0pky">Công ty TNHH Cảng Tổng hợp Cái Mép</td>
                    <td class="tg-0pky">205,8</td>
                    <td class="tg-0pky">5,000 (tàu)10,000 (sà lan)</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Than</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">42</td>
                    <td class="tg-0pky">Bến cảng Quốc tế Cái Mép (CMIT)</td>
                    <td class="tg-0pky">Cầu cảng CMIT</td>
                    <td class="tg-0pky">Công ty TNHH Cảng Quốc tế Cái Mép</td>
                    <td class="tg-0pky">600</td>
                    <td class="tg-0pky">160,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">container</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">43</td>
                    <td class="tg-0pky">Bến cảng container Quốc tế Cái Mép (ODA)</td>
                    <td class="tg-0pky">Cầu cảng Container Quốc tế Cái Mép</td>
                    <td class="tg-0pky">Tổng Công ty Tân cảng Sài Gòn</td>
                    <td class="tg-0pky">600</td>
                    <td class="tg-0pky">160,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Container</td>
                    <td class="tg-0pky">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="3">44</td>
                    <td class="tg-0pky" rowspan="3">Bến cảng container Quốc tế Cảng Sài Gòn-SSA (SSIT)</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="3">Công ty Liên doanh Dịch vụ Container Cảng Quốc tế Cảng Sài Gòn SSA</td>
                    <td class="tg-0pky">600</td>
                    <td class="tg-0pky">160,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="3">Container, tổng hợp</td>
                    <td class="tg-0pky" rowspan="3">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 2</td>
                    <td class="tg-0pky">235,6</td>
                    <td class="tg-0pky">500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu cảng số 3</td>
                    <td class="tg-0pky">201,1</td>
                    <td class="tg-0pky">2,500</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky" rowspan="2">45</td>
                    <td class="tg-0pky" rowspan="2">Bến cảng Cái Mép Gemadept-Terminal Link</td>
                    <td class="tg-0pky">Cầu cảng số 1</td>
                    <td class="tg-0pky" rowspan="2">Công ty Cổ phần Cảng Cái Mép Gemadept-Terminal Link</td>
                    <td class="tg-0pky">800</td>
                    <td class="tg-0pky">200,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="2">Container</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">Cầu sà lan</td>
                    <td class="tg-0pky">189,7</td>
                    <td class="tg-0pky">200 TEUS</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-fymr" colspan="9">Khu vực: Côn Đảo</td>
                </tr>
                <tr>
                    <td class="tg-0pky">46</td>
                    <td class="tg-0pky">Bến cảng Bến Đầm (Côn Đảo)</td>
                    <td class="tg-0pky">Cầu cảng cá Bến Đầm</td>
                    <td class="tg-0pky">Ban Quản lý cảng Bến Đầm</td>
                    <td class="tg-0pky">82</td>
                    <td class="tg-0pky">2,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">tiếp nhận tàu trong nước và nước ngoài có trọng tải đến 2.000 DWT ra, vào làm hàng</td>
                    <td class="tg-0pky" rowspan="2">VT-TV</td>
                </tr>
                <tr>
                    <td class="tg-0pky">47</td>
                    <td class="tg-0pky">Bến cảng Tàu khách Côn Đảo</td>
                    <td class="tg-0pky">Cảng Tàu khách Côn Đảo</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">50</td>
                    <td class="tg-0pky">398</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">hành khách</td>
                </tr>
                <tr>
                    <td class="tg-fymr" colspan="9">Bến Phao</td>
                </tr>
                <tr>
                    <td class="tg-0pky">48</td>
                    <td class="tg-0pky">Bến phao neo tàu dầu trọng tải 50.000DWT</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Tổng công ty dầu Việt Nam (PV Oil) - Xí nghiệp tổng kho xăng dầu Miền Đông</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">50,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Xăng dầu</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">49</td>
                    <td class="tg-0pky">Bến phao BP1</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Công ty Cổ phần Vận tải Và Thương mại Quốc tế</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky" rowspan="3">Than và tránh trú bão</td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">50</td>
                    <td class="tg-0pky">Bến phao BP2</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">150,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">51</td>
                    <td class="tg-0pky">Bến phao BP3</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">80,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky"></td>
                </tr>
                <tr>
                    <td class="tg-0pky">52</td>
                    <td class="tg-0pky">Bến phao Hoàng Nguyên Vũng Tàu</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Công ty TNHH Hoàng Nguyên Vũng Tàu</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">150,000</td>
                    <td class="tg-0pky"></td>
                    <td class="tg-0pky">Phục vụ nhu cầu cho tàu thuyền trọng tải lớn neo chờ vào cảng, neo giữ tàu đóng mới trong quá trình hạ thủy, tàu neo đậu để cấp nước, cấp nhiên liệu, thực hiện các dịch vụ hàng hải liên quan; kết hợp cho tàu thuyền neo đậu tránh trú bão và chuyển tải hàng hóa</td>
                    <td class="tg-0pky"></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
  }
}
