import React, { Component } from 'react'
import './CangBien.css'
export default class CangHaiPhong extends Component {
  render() {
    return (
        <div className="container-fluid">
        <h4>DANH SÁCH BẾN CẢNG HẢI PHÒNG</h4>
        <table className="tg">
            <thead>
                <tr>
                    <th className="tg-0lax" rowspan="2"><strong>TT</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Bến cảng</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Cầu cảng</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Đơn vị khai thác</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Chiều dài (m)</strong></th>
                    <th className="tg-0lax" colspan="2"><strong>Cỡ tàu (DWT)</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Công năng</strong></th>
                    <th className="tg-0lax" rowspan="2"><strong>Luồng hàng hải</strong></th>
                </tr>
                <tr>
                    <td className="tg-0lax"><strong>Thực tế</strong></td>
                    <td className="tg-0lax"><strong>Quy hoạch</strong></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tg-0lax">1</td>
                    <td className="tg-0lax">Bến cảng Việt Nhật</td>
                    <td className="tg-0lax">Cầu cảng Việt Nhật</td>
                    <td className="tg-0lax">Công ty cổ phần luyện thép cao cấp Việt Nhật</td>
                    <td className="tg-0lax">200</td>
                    <td className="tg-0lax">5.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="6">2</td>
                    <td className="tg-0lax" rowspan="6">Bến cảng Vật Cách</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax" rowspan="6">Công ty cổ phần cảng Vật Cách</td>
                    <td className="tg-0lax">61</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="6">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax" rowspan="6">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">96</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    </tr>

                    <tr>
                        <td className="tg-0lax">Cầu số 3</td>
                        <td className="tg-0lax">96</td>
                        <td className="tg-0lax">3.000</td>
                        <td className="tg-0lax" />
                        </tr>

                        <tr>
                            <td className="tg-0lax">Cầu số 4</td>
                            <td className="tg-0lax">120</td>
                            <td className="tg-0lax">5.000</td>
                            <td className="tg-0lax" />
                            </tr>

                            <tr>
                                <td className="tg-0lax">Cầu số 5</td>
                                <td className="tg-0lax">50</td>
                                <td className="tg-0lax">3.000</td>
                                <td className="tg-0lax" />
                                </tr>

                                <tr>
                                    <td className="tg-0lax">Cầu số 6</td>
                                    <td className="tg-0lax">106</td>
                                    <td className="tg-0lax">3.000</td>
                                    <td className="tg-0lax" />
                                    </tr>

                                    <tr>
                                        <td className="tg-0lax">3</td>
                                        <td className="tg-0lax">Bến cảng Tiến Mạnh</td>
                                        <td className="tg-0lax">Cầu cảng Tiến Mạnh</td>
                                        <td className="tg-0lax">Công ty TNHH vận tải Tiến Mạnh</td>
                                        <td className="tg-0lax">170,5</td>
                                        <td className="tg-0lax">3.000</td>
                                        <td className="tg-0lax" />
                                        <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                                        <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                                    </tr>
                <tr>
                    <td className="tg-0lax">4</td>
                    <td className="tg-0lax">Bến cảng Công ty TNHH Thương mại Nam Ninh</td>
                    <td className="tg-0lax">Cầu cảng Nam Ninh</td>
                    <td className="tg-0lax">Công ty TNHH thương mại Nam Ninh</td>
                    <td className="tg-0lax">190</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">5</td>
                    <td className="tg-0lax">Bến cảng 1000 DWT Công ty Cổ phần Vận tải &amp; cung ứng xăng dầu</td>
                    <td className="tg-0lax">Cầu  cảng Công ty vận tải và cung ứng xăng dầu</td>
                    <td className="tg-0lax">Chi nhánh cty CP vận tải và cung ứng xăng dầu - Xí nghiệp dịch vụ cảng Quỳnh Cư</td>
                    <td className="tg-0lax">52</td>
                    <td className="tg-0lax">1.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">6</td>
                    <td className="tg-0lax">Bến cảng chuyên dùng rau quả, thực phẩm tổng hợp Hùng Vương</td>
                    <td className="tg-0lax">Cầu cảng chuyên dùng</td>
                    <td className="tg-0lax">Công ty TNHH Lê Quốc</td>
                    <td className="tg-0lax">100</td>
                    <td className="tg-0lax">3.000 giảm tải</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Rau quả, thực phẩm tổng hợp</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">7</td>
                    <td className="tg-0lax">Bến cảng Lilama Hải Phòng</td>
                    <td className="tg-0lax">Cầu  cảng Lilama Hải Phòng</td>
                    <td className="tg-0lax">Công ty cổ phần Lisemco</td>
                    <td className="tg-0lax">96,55</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">8</td>
                    <td className="tg-0lax">Bến cảng Chuyên dùng Công ty liên doanh Khí hóa lỏng Thăng Long</td>
                    <td className="tg-0lax">Cầu  cảng Khí hóa lỏng Thăng Long</td>
                    <td className="tg-0lax">Công ty TNHH khí hóa lỏng Thăng Long</td>
                    <td className="tg-0lax">90</td>
                    <td className="tg-0lax">2.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">9</td>
                    <td className="tg-0lax">Bến cảng 3000DWT của Công ty CP Hóa dầu quân đội</td>
                    <td className="tg-0lax">Cầu  cảng Công ty Hóa dầu quân đội</td>
                    <td className="tg-0lax">Chi nhánh công ty cổ phần hóa dầu Quân Đội</td>
                    <td className="tg-0lax">90</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">10</td>
                    <td className="tg-0lax">Bến cảng Công ty TNHH Thương mại dịch vụ Tự Long</td>
                    <td className="tg-0lax">Cầu cảng Công ty TNHH thương mại dich vụ Tự Long</td>
                    <td className="tg-0lax">Công ty TNHH thương mại dich vụ Tự Long</td>
                    <td className="tg-0lax">60</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">11</td>
                    <td className="tg-0lax">Bến cảng dầu Thượng Lý</td>
                    <td className="tg-0lax">Cầu  cảng Thượng Lý</td>
                    <td className="tg-0lax">Công ty xăng dầu khu vực III</td>
                    <td className="tg-0lax">60</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">12</td>
                    <td className="tg-0lax">Bến cảng đóng tàu Bạch Đằng</td>
                    <td className="tg-0lax">Cầu cảng đóng tàu Bạch Đằng</td>
                    <td className="tg-0lax">Công ty TNHH MTV đóng tàu Bạch Đằng</td>
                    <td className="tg-0lax">142</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="11">13</td>
                    <td className="tg-0lax" rowspan="11">Bến cảng Hải Phòng (khu cảng chính, Hoàng Diệu)</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax" rowspan="11">Công ty TNHH MTV cảng Hoàng Diệu</td>
                    <td className="tg-0lax">125</td>
                    <td className="tg-0lax">30.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="11">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax" rowspan="11">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">125</td>
                    <td className="tg-0lax">30.000</td>
                    <td className="tg-0lax" />
                    </tr>
                    <tr>
                        <td className="tg-0lax">Cầu số 3</td>
                        <td className="tg-0lax">163</td>
                        <td className="tg-0lax">30.000</td>
                        <td className="tg-0lax" />
                        </tr>
                        <tr>
                            <td className="tg-0lax">Cầu số 4</td>
                            <td className="tg-0lax">166</td>
                            <td className="tg-0lax">40.000</td>
                            <td className="tg-0lax" />
                            </tr>
                            <tr>
                                <td className="tg-0lax">Cầu số 5</td>
                                <td className="tg-0lax">166</td>
                                <td className="tg-0lax">40.000</td>
                                <td className="tg-0lax" />
                                </tr>
                                <tr>
                                    <td className="tg-0lax">Cầu số 6</td>
                                    <td className="tg-0lax">166</td>
                                    <td className="tg-0lax">40.000</td>
                                    <td className="tg-0lax" />
                                    </tr>
                                    <tr>
                                        <td className="tg-0lax">Cầu số 7</td>
                                        <td className="tg-0lax">164</td>
                                        <td className="tg-0lax">40.000</td>
                                        <td className="tg-0lax" />
                                        </tr>
                                        <tr>
                                            <td className="tg-0lax">Cầu số 8</td>
                                            <td className="tg-0lax">164</td>
                                            <td className="tg-0lax">40.000</td>
                                            <td className="tg-0lax" />
                                            </tr>
                                            <tr>
                                                <td className="tg-0lax">Cầu số 9</td>
                                                <td className="tg-0lax">164</td>
                                                <td className="tg-0lax">10.000</td>
                                                <td className="tg-0lax" />
                                                </tr>
                                                <tr>
                                                    <td className="tg-0lax">Cầu số 10</td>
                                                    <td className="tg-0lax">164</td>
                                                    <td className="tg-0lax">10.000</td>
                                                    <td className="tg-0lax" />
                                                    </tr>
                                                    <tr>
                                                        <td className="tg-0lax">Cầu số 11</td>
                                                        <td className="tg-0lax">157</td>
                                                        <td className="tg-0lax">10.000</td>
                                                        <td className="tg-0lax" />
                                                        </tr>
                                                        <tr>
                                                            <td className="tg-0lax">14</td>
                                                            <td className="tg-0lax">Bến cảng Cá Hạ Long</td>
                                                            <td className="tg-0lax">Cầu cảng hạ lưu</td>
                                                            <td className="tg-0lax">Chi nhánh công ty TNHH MTV Thủy sản Hạ Long - Cảng cá Hạ Long</td>
                                                            <td className="tg-0lax">160</td>
                                                            <td className="tg-0lax">20.000</td>
                                                            <td className="tg-0lax" />
                                                            <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                                                            <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                                                        </tr>
                <tr>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng thượng lưu</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">240</td>
                    <td className="tg-0lax">15.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                </tr>
                <tr>
                    <td className="tg-0lax">15</td>
                    <td className="tg-0lax">Bến cảng Gas Đài Hải</td>
                    <td className="tg-0lax">Cầu  cảng Gas Đài Hải</td>
                    <td className="tg-0lax">Công ty TNHH dầu khí Đài Hải</td>
                    <td className="tg-0lax">150</td>
                    <td className="tg-0lax">5.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">16</td>
                    <td className="tg-0lax">Bến cảng Cửa Cấm</td>
                    <td className="tg-0lax">Cầu  cảng Cửa Cấm</td>
                    <td className="tg-0lax">Công ty cổ phần cảng Cửa Cấm</td>
                    <td className="tg-0lax">272</td>
                    <td className="tg-0lax">5.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">17</td>
                    <td className="tg-0lax">Bến cảng Thủy sản II</td>
                    <td className="tg-0lax">Cầu  cảng Thủy sản II</td>
                    <td className="tg-0lax">Chi nhánh Seaprodex Hải Phòng - Tổng Cty thủy sản VN</td>
                    <td className="tg-0lax">73</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">18</td>
                    <td className="tg-0lax">Bến cảng Nam Hải</td>
                    <td className="tg-0lax">Cầu  cảng Nam Hải</td>
                    <td className="tg-0lax">Công ty cổ phần cảng Nam Hải</td>
                    <td className="tg-0lax">144,5</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">19</td>
                    <td className="tg-0lax">Bến cảng Đoạn Xá</td>
                    <td className="tg-0lax">Cầu cảng Đoạn Xá</td>
                    <td className="tg-0lax">Công ty cổ phần cảng Đoạn Xá</td>
                    <td className="tg-0lax">210</td>
                    <td className="tg-0lax">40.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">20</td>
                    <td className="tg-0lax">Bến cảng Transvina</td>
                    <td className="tg-0lax">Cầu cảng Transvina</td>
                    <td className="tg-0lax">Chi nhánh Công ty TNHH vận tải hàng công nghệ cao tại Hải Phòng</td>
                    <td className="tg-0lax">120</td>
                    <td className="tg-0lax">7.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Container</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">21</td>
                    <td className="tg-0lax">Bến cảng Hải Đăng</td>
                    <td className="tg-0lax">Cầu cảng Hải Đăng</td>
                    <td className="tg-0lax">Tổng công ty bảo đảm an toàn hàng hải MB</td>
                    <td className="tg-0lax">87</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">22</td>
                    <td className="tg-0lax">Bến cảng Greenport</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax">Công ty cổ phần cảng xanh Vip</td>
                    <td className="tg-0lax">226,3</td>
                    <td className="tg-0lax">30.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Container</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">150,9</td>
                    <td className="tg-0lax">30.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="5">23</td>
                    <td className="tg-0lax" rowspan="5">Bến cảng Chùa Vẽ</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax" rowspan="5">Công ty cổ phần cảng Hải Phòng</td>
                    <td className="tg-0lax">198</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="5">Container</td>
                    <td className="tg-0lax" rowspan="5">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">150</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    </tr>
                    <tr>
                        <td className="tg-0lax">Cầu số 3</td>
                        <td className="tg-0lax">150</td>
                        <td className="tg-0lax">10.000</td>
                        <td className="tg-0lax" />
                        </tr>
                        <tr>
                            <td className="tg-0lax">Cầu số 4</td>
                            <td className="tg-0lax">175</td>
                            <td className="tg-0lax">10.000</td>
                            <td className="tg-0lax" />
                            </tr>
                            <tr>
                                <td className="tg-0lax">Cầu số 5</td>
                                <td className="tg-0lax">175</td>
                                <td className="tg-0lax">10.000</td>
                                <td className="tg-0lax" />
                                </tr>
                                <tr>
                                    <td className="tg-0lax">24</td>
                                    <td className="tg-0lax">Bến cảng thiết bị vật tư tại khu vực Chùa Vẽ</td>
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax" />
                                </tr>
                <tr>
                    <td className="tg-0lax">25</td>
                    <td className="tg-0lax">Bến cảng Chuyên dùng Công ty liên doanh Total Gas Hải Phòng</td>
                    <td className="tg-0lax">Cầu  cảng Total Gas Hải Phòng</td>
                    <td className="tg-0lax">Công ty TNHH Total Gas Hải Phòng</td>
                    <td className="tg-0lax">110</td>
                    <td className="tg-0lax">3.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">26</td>
                    <td className="tg-0lax">Bến cảng Đông Hải</td>
                    <td className="tg-0lax">Cầu  cảng Đông Hải</td>
                    <td className="tg-0lax">Lữ đoàn 273 - Quân khu 3</td>
                    <td className="tg-0lax">100</td>
                    <td className="tg-0lax">600</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="2">27</td>
                    <td className="tg-0lax" rowspan="2">Bến cảng 128</td>
                    <td className="tg-0lax">Cầu cảng số 1</td>
                    <td className="tg-0lax" rowspan="2">Công ty TNHH MTV 128</td>
                    <td className="tg-0lax">115</td>
                    <td className="tg-0lax">2.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="2">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax" rowspan="2">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu cảng số 2</td>
                    <td className="tg-0lax">295</td>
                    <td className="tg-0lax">15.000</td>
                    <td className="tg-0lax" />
                    </tr>

                    <tr>
                        <td className="tg-0lax">28</td>
                        <td className="tg-0lax">Bến cảng Dầu khí Hải Linh Hải Phòng</td>
                        <td className="tg-0lax">Cầu cảng Dầu khí Hải Linh</td>
                        <td className="tg-0lax">Công ty TNHH MTV Dầu khí Hải Linh Hải Phòng</td>
                        <td className="tg-0lax">115</td>
                        <td className="tg-0lax">8.000</td>
                        <td className="tg-0lax" />
                        <td className="tg-0lax">Hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                        <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                    </tr>
                <tr>
                    <td className="tg-0lax">29</td>
                    <td className="tg-0lax">Bến cảng Xăng dầu K99</td>
                    <td className="tg-0lax">Cầu  cảng xăng Dầu K99</td>
                    <td className="tg-0lax">Công ty xăng dầu quân đội khu  vực I</td>
                    <td className="tg-0lax">185</td>
                    <td className="tg-0lax">12.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">30</td>
                    <td className="tg-0lax">Bến cảng Xăng dầu Petec Hải Phòng</td>
                    <td className="tg-0lax">Cầu  cảng Xăng dầu Petec Hải Phòng</td>
                    <td className="tg-0lax">Chi nhánh Tổng Cty thương mại kỹ thuật và đầu tư - Công ty CP xí nghiệp xăng dầu PETEC</td>
                    <td className="tg-0lax">105</td>
                    <td className="tg-0lax">8.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">31</td>
                    <td className="tg-0lax">Bến cảng Hải An</td>
                    <td className="tg-0lax">Cầu  cảng Hải An</td>
                    <td className="tg-0lax">Công ty TNHH cảng Hải An</td>
                    <td className="tg-0lax">150</td>
                    <td className="tg-0lax">20.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Container</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">32</td>
                    <td className="tg-0lax">Bến cảng Trang trí của Công ty 189</td>
                    <td className="tg-0lax">Cầu  cảng Trang trí công ty 189</td>
                    <td className="tg-0lax">Công ty TNHH MTV 189</td>
                    <td className="tg-0lax">160</td>
                    <td className="tg-0lax">5.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Cầu cảng chuyên dụng(dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">33</td>
                    <td className="tg-0lax">Bến cảng Công ty TNHH MTV 189</td>
                    <td className="tg-0lax">Cầu  cảng  Cty TNHH MTV 189</td>
                    <td className="tg-0lax">Công ty cổ phần Tân Cảng - 189 Hải Phòng</td>
                    <td className="tg-0lax">180</td>
                    <td className="tg-0lax">20.000 giảm tải</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">34</td>
                    <td className="tg-0lax">Bến cảng Xăng dầu 19-9</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">35</td>
                    <td className="tg-0lax">Bến cảng PTSC Đình Vũ</td>
                    <td className="tg-0lax">Cầu  cảng PTSC Đình Vũ</td>
                    <td className="tg-0lax">Công ty cổ phần cảng dịch vụ dầu khí Đình Vũ</td>
                    <td className="tg-0lax">250</td>
                    <td className="tg-0lax">20.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="2">36</td>
                    <td className="tg-0lax" rowspan="2">Bến cảng Đình Vũ</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax" rowspan="2">Công ty cổ phần đầu tư và phát triển cảng Đình Vũ</td>
                    <td className="tg-0lax">236,8</td>
                    <td className="tg-0lax">20.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="2">Container</td>
                    <td className="tg-0lax" rowspan="2">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">188,2</td>
                    <td className="tg-0lax">20.000</td>
                    <td className="tg-0lax" />
                    </tr>

                    <tr>
                        <td className="tg-0lax" rowspan="5">37</td>
                        <td className="tg-0lax" rowspan="5">Bến cảng Tân Vũ</td>
                        <td className="tg-0lax">Cầu số 1</td>
                        <td className="tg-0lax" rowspan="5">Công ty cổ phần cảng Hải Phòng</td>
                        <td className="tg-0lax">215</td>
                        <td className="tg-0lax">40.000</td>
                        <td className="tg-0lax" />
                        <td className="tg-0lax" rowspan="5">Tổng hợp, Hàng rời, hàng khô</td>
                        <td className="tg-0lax" rowspan="5">Luồng hàng hải Hải Phòng</td>
                    </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">190</td>
                    <td className="tg-0lax">40.000</td>
                    <td className="tg-0lax" />
                    </tr>

                    <tr>
                        <td className="tg-0lax">Cầu số 3</td>
                        <td className="tg-0lax">217</td>
                        <td className="tg-0lax">20.000</td>
                        <td className="tg-0lax" />
                    </tr>

                        <tr>
                            <td className="tg-0lax">Cầu số 4</td>
                            <td className="tg-0lax">163</td>
                            <td className="tg-0lax" />
                            <td className="tg-0lax" />
                    </tr>

                            <tr>
                                <td className="tg-0lax">Cầu số 5</td>
                                <td className="tg-0lax">195,6</td>
                                <td className="tg-0lax" />
                                <td className="tg-0lax" />
                    </tr>

                                <tr>
                                    <td className="tg-0lax">38</td>
                                    <td className="tg-0lax">Bến cảng VIMC Đình Vũ</td>
                                    <td className="tg-0lax">Cầu cảng VIMC Đình Vũ</td>
                                    <td className="tg-0lax">Công ty Cổ phần Cảng VIMC Đình Vũ</td>
                                    <td className="tg-0lax">240</td>
                                    <td className="tg-0lax">20.000</td>
                                    <td className="tg-0lax" />
                                    <td className="tg-0lax">Tổng hợp, Container</td>
                                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="2">39</td>
                    <td className="tg-0lax" rowspan="2">Bến cảng Nam Hải Đình Vũ</td>
                    <td className="tg-0lax">Cầu  cảng số 1</td>
                    <td className="tg-0lax" rowspan="2">Công ty cổ phần cảng Nam Hải, Đình Vũ</td>
                    <td className="tg-0lax">225</td>
                    <td className="tg-0lax" rowspan="2">48.000 giảm tải</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="2">Container</td>
                    <td className="tg-0lax" rowspan="2">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu  cảng số 2</td>
                    <td className="tg-0lax">230</td>
                    <td className="tg-0lax" />
                    </tr>

                    <tr>
                        <td className="tg-0lax" rowspan="2">40</td>
                        <td className="tg-0lax" rowspan="2">Bến cảng Container Vip Greenport</td>
                        <td className="tg-0lax">Cầu  cảng số 1</td>
                        <td className="tg-0lax">Công ty cổ phần cảng xanh Vip</td>
                        <td className="tg-0lax">226,3</td>
                        <td className="tg-0lax">30.000</td>
                        <td className="tg-0lax" />
                        <td className="tg-0lax" rowspan="2">Container</td>
                        <td className="tg-0lax" rowspan="2">Luồng hàng hải Hải Phòng</td>
                    </tr>
                    <td className="tg-0lax">Cầu  cảng số 2</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">150,9</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" />
                    <tr>
                        <td className="tg-0lax">41</td>
                        <td className="tg-0lax">Bến cảng chuyên dùng FGG</td>
                        <td className="tg-0lax">Cầu cảng chuyên dùng FGG</td>
                        <td className="tg-0lax">Công ty TNHH FLAT</td>
                        <td className="tg-0lax">135</td>
                        <td className="tg-0lax">20.000</td>
                        <td className="tg-0lax" />
                        <td className="tg-0lax">Hàng chuyên dùng phục vụ sản xuất kính năng lượng mặt trời</td>
                        <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                    </tr>
                <tr>
                    <td className="tg-0lax" rowspan="3">42</td>
                    <td className="tg-0lax" rowspan="3">Bến cảng Euro Đình Vũ</td>
                    <td className="tg-0lax">Cầu  cảng số 1</td>
                    <td className="tg-0lax" rowspan="3">Công ty TNHH cầu cảng EURO  (Việt Nam)</td>
                    <td className="tg-0lax">171</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="3">Hàng lỏng (xăng dầu, khí hóa lỏng, dầu thực vật…)</td>
                    <td className="tg-0lax" rowspan="3">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu  cảng số 2</td>
                    <td className="tg-0lax">193</td>
                    <td className="tg-0lax">20.000</td>
                    <td className="tg-0lax" />
                </tr>

                    <tr>
                        <td className="tg-0lax">Cầu  cảng số 3</td>
                        <td className="tg-0lax">52</td>
                        <td className="tg-0lax">300</td>
                        <td className="tg-0lax" />
                </tr>

                        <tr>
                            <td className="tg-0lax">43</td>
                            <td className="tg-0lax">Bến cảng Nhà máy DAP Hải Phòng</td>
                            <td className="tg-0lax">Cầu  cảng DAP (hóa chất VN)</td>
                            <td className="tg-0lax">Công ty cổ phần DAP Vinachem</td>
                            <td className="tg-0lax">168</td>
                            <td className="tg-0lax">10.000</td>
                            <td className="tg-0lax" />
                            <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                            <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                        </tr>
                <tr>
                    <td className="tg-0lax">44</td>
                    <td className="tg-0lax">Bến cảng MPC Port</td>
                    <td className="tg-0lax">Cầu cảng MPC</td>
                    <td className="tg-0lax">Công ty CP Cảng Mipec</td>
                    <td className="tg-0lax">380</td>
                    <td className="tg-0lax">40000 giảm tải</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Container</td>
                    <td className="tg-0lax">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="4">45</td>
                    <td className="tg-0lax" rowspan="4">Bến cảng Nam Đình Vũ</td>
                    <td className="tg-0lax">Cầu số 1</td>
                    <td className="tg-0lax" rowspan="4">Công ty CP Cảng Nam Đình Vũ</td>
                    <td className="tg-0lax">220</td>
                    <td className="tg-0lax">48000 giảm tải</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="4">Tổng hợp, Container</td>
                    <td className="tg-0lax" rowspan="4">Luồng hàng hải Hải Phòng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">220</td>
                    <td className="tg-0lax">48000 giảm tải</td>
                    <td className="tg-0lax" />
                </tr>

                    <tr>
                        <td className="tg-0lax">Cầu số 3</td>
                        <td className="tg-0lax">220</td>
                        <td className="tg-0lax">20.000</td>
                        <td className="tg-0lax" />
                </tr>

                        <tr>
                            <td className="tg-0lax">Cầu số 4</td>
                            <td className="tg-0lax">220</td>
                            <td className="tg-0lax">20.000</td>
                            <td className="tg-0lax" />
                </tr>

                            <tr>
                                <td className="tg-0lax" rowspan="3">46</td>
                                <td className="tg-0lax" rowspan="3">Bến cảng Container Quốc tế Tân cảng Hải Phòng</td>
                                <td className="tg-0lax">Cầu số 1</td>
                                <td className="tg-0lax" rowspan="3">Công ty TNHH Cảng Công-ten-nơ quốc tế Tân Cảng Hải Phòng (HICT)</td>
                                <td className="tg-0lax">375</td>
                                <td className="tg-0lax">145000 giảm tải</td>
                                <td className="tg-0lax" />
                                <td className="tg-0lax" rowspan="3">Container</td>
                                <td className="tg-0lax" rowspan="3">Luồng hàng hải Hải Phòng</td>
                            </tr>
                <tr>
                    <td className="tg-0lax">Cầu số 2</td>
                    <td className="tg-0lax">375</td>
                    <td className="tg-0lax">145000 giảm tải</td>
                    <td className="tg-0lax" />
                </tr>

                    <tr>
                        <td className="tg-0lax">Cầu số 1A</td>
                        <td className="tg-0lax">150</td>
                        <td className="tg-0lax">2,000</td>
                        <td className="tg-0lax" />
                </tr>

                        <tr>
                            <td className="tg-0lax" rowspan="2">47</td>
                            <td className="tg-0lax" rowspan="2">Bến cảng Nhà máy đóng tàu Phà Rừng</td>
                            <td className="tg-0lax">Cầu  nặng</td>
                            <td className="tg-0lax" rowspan="2">Công ty TNHH MTV đóng tàu Phà Rừng</td>
                            <td className="tg-0lax">390</td>
                            <td className="tg-0lax">25.000</td>
                            <td className="tg-0lax" />
                            <td className="tg-0lax" rowspan="2">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                            <td className="tg-0lax" rowspan="2">Luồng hàng hải Phà Rừng</td>
                        </tr>
                <tr>
                    <td className="tg-0lax">Cầu nhẹ</td>
                    <td className="tg-0lax">120,8</td>
                    <td className="tg-0lax">12.500</td>
                    <td className="tg-0lax" />
                </tr>

                    <tr>
                        <td className="tg-0lax">48</td>
                        <td className="tg-0lax">Bến cảng Caltex</td>
                        <td className="tg-0lax">Cầu  cảng Caltex</td>
                        <td className="tg-0lax">Công ty TNHH nhựa đượng PUMA ENERGY VIỆT NAM</td>
                        <td className="tg-0lax">60</td>
                        <td className="tg-0lax">4.000</td>
                        <td className="tg-0lax" />
                        <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                        <td className="tg-0lax">Luồng hàng hải Phà Rừng</td>
                    </tr>
                <tr>
                    <td className="tg-0lax">49</td>
                    <td className="tg-0lax">Bến cảng Nhà máy nhiệt điện Hải Phòng</td>
                    <td className="tg-0lax">Cầu  cảng Nhà máy Nhiệt điện Hải Phòng</td>
                    <td className="tg-0lax">Công ty cổ phần nhiệt điện Hải Phòng</td>
                    <td className="tg-0lax">500</td>
                    <td className="tg-0lax">600</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax">Tổng hợp, Hàng rời, hàng khô</td>
                    <td className="tg-0lax">Luồng hàng hải Phà Rừng</td>
                </tr>
                <tr>
                    <td className="tg-0lax" rowspan="2">50</td>
                    <td className="tg-0lax" rowspan="2">Bến cảng công nghiệp tàu thủy Nam Triệu</td>
                    <td className="tg-0lax">Cầu  tàu 10.000DWT</td>
                    <td className="tg-0lax" rowspan="2">Công ty TNHH MTV đóng tàu Nam Triệu</td>
                    <td className="tg-0lax">130</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    <td className="tg-0lax" rowspan="2">Cầu cảng chuyên dụng khác (dịch vụ, đóng, sửa chữa tàu…)</td>
                    <td className="tg-0lax" rowspan="2">Luồng hàng hải Phà Rừng</td>
                </tr>
                <tr>
                    <td className="tg-0lax">Cầu  tàu liền bờ</td>
                    <td className="tg-0lax">171</td>
                    <td className="tg-0lax">10.000</td>
                    <td className="tg-0lax" />
                    </tr>
            </tbody>
        </table>
    </div>
    )
  }
}
