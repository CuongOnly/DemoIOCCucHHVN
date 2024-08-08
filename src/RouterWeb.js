import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import DBLoaiTau from './DashBoard/DBLoaiTau';
import DBThuyenVien from './DashBoard/DBThuyenVien';

function RouterWeb() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dbloaitau" element={<DBLoaiTau />} />
        <Route path="/dbthuyenvien" element={<DBThuyenVien />} />
      </Routes>
    </div>
  </Router>
  );
}

export default RouterWeb;
