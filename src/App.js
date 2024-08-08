import { useState } from 'react';
import HomePage from './HomePage/HomePage';
import RouterWeb from './RouterWeb';
import DBThuyenVien from './DashBoard/DBThuyenVien';
import DBThuTucHanhChinh from './DashBoard/DBThuTucHanhChinh';
import DBHaTangHH from './DashBoard/DBHaTangHH'
import LuongHH from './DashBoard/LuongHH'
import { portData } from './DashBoard/LuongHH';
import DbLoaiTau from './DashBoard/DBLoaiTau';
import DBVanTaiBien from './DashBoard/DBVanTaiBien';
import DBAnNinh from './DashBoard/DBAnNinh';

function App() {
  const [item, setItem] = useState(null);
  return (
    <div>
      {item === null ?
        <HomePage onLinkClick={(item) => {
          setItem(item);
        }} /> : null
      }

      {item && item.to === "/hcc" ?
        <DBThuTucHanhChinh
          title="DV HÀNH CHÍNH CÔNG"

          listUrls={[
            "/data/hanhchinhcong/tthc_thamquyen.json",
            "/data/hanhchinhcong/tthc_linhvuc_cungcapdv.json",
            "/data/hanhchinhcong/TTHC_LinhVuc_DKBaoDam.json",
            "/data/hanhchinhcong/TTHC_HoSo_CongDVCQG.json",
            "/data/hanhchinhcong/TTHC_TauThuyenVN.json",
            "/data/hanhchinhcong/TTHC_TauThuyenNuocNgoai.json",
            "/data/hanhchinhcong/TTHC_HoSo_CongTTMotCuaQG.json",
            "/data/hanhchinhcong/TTHC_TyLeSoHoaKQGiaiQuyet.json",

          ]
          }
          onLinkClick={(item) => {
            setItem(null);
          }} /> : null
      }

      {item && item.to === "/dbloaitau" ?
        <DbLoaiTau
          title="THỐNG KÊ ĐỘI TÀU VẬN TẢI VIỆT NAM"

          listUrls={[
            "/data/taubien/SoLuong_LoaiTau.json",
            "/data/taubien/ThongKe_TongSoTau.json",
            "/data/taubien/SoLuong_DWT.json",
            "/data/taubien/SoLuong_GT.json",
          ]
          }
          onLinkClick={(item) => {
            setItem(null);
          }} /> : null
      }


      {item && item.to === "/dbthuyenvien" ?
        <DBThuyenVien
          title="THUYỀN VIÊN"

          listUrls={[
            "/data/thuyenvien/SoLuong_ThuyenVien1.json",
            "/data/thuyenvien/SoLuong_HoaTieu.json",
            "/data/thuyenvien/ThuyenVien_TongSo.json",
            "/data/thuyenvien/SoLuong_CapHoaTieu.json",
          ]
          }
          onLinkClick={(item) => {
            setItem(null);
          }} /> : null
      }


      {item && item.to === "/anninh" ?
        <DBAnNinh
          title="AN NINH - AN TOÀN"

          listUrls={[
            "/data/TKCN/TKCN_TyLeBiNan_ViTri.json",
            "/data/TKCN/TKCN_SoNguoiDuocHoTro.json",
            "/data/TKCN/TKCN_SoTauDuocHoTro.json",
            "/data/TKCN/TKCN_TyLeBiNan_LoaiTau.json",
            "/data/TKCN/TKCN_SoVuViecBaoNan.json",
          ]
          }
          onLinkClick={(item) => {
            setItem(null);
          }} /> : null
      }

      {item && item.to === "/dbvantaibien" ?
        <DBVanTaiBien
          title="VẬN TẢI BIỂN"

          listUrls={[
            "/data/hanghoa/HH_Thongke5nam.json",
            "/data/hanghoa/HH_SoSanh.json",
            "/data/hanghoa/HH_Thongke10thang.json",
            "/data/hanghoa/HH_KhoiLuong1.json",
            "/data/hanghoa/HH_KhuVuc.json",
          ]
          }
          onLinkClick={(item) => {
            setItem(null);
          }} /> : null
      }

      {item && item.to === "/dbhthh" ?
        <DBHaTangHH
          title="HẠ TẦNG HÀNG HẢI"
          // ***
          LuongHHClick={(index) => {
            if (portData[index].koCoDL) {

            }
            else {
            setItem(
              {
                to: "/luonghh",
                index: index
              }
              
            );
            }
          }}

          onLinkClick={(item) => {
            setItem(item);
            
          }} /> : null
      }
      {
        item && item.to == "/luonghh" ?
        <LuongHH cangIndex={item.index}
          titleHH = {item.name}
          onLinkClick={(item) => {
            setItem(item);
            
          }} 
         /> : null
      }

    </div>
  );
}

export default App;
