import './App.css';

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>Shop Thực Phẩm Chức Năng</h1>
        <nav>
          <a href="#">Trang chủ</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Liên hệ</a>
        </nav>
      </header>

      {/* BANNER */}
      <div className="banner">
        <h2>Chăm sóc sức khỏe mỗi ngày</h2>
        <p>Uy tín - Chất lượng - Giá tốt</p>
      </div>

      {/* DANH SÁCH SẢN PHẨM */}
      <main className="product-list">

        <div className="product">
          <img src="https://via.placeholder.com/150" alt="sp1" />
          <h3>Vitamin C</h3>
          <p>Giá: 150.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://via.placeholder.com/150" alt="sp2" />
          <h3>Omega 3</h3>
          <p>Giá: 200.000đ</p>
          <button>Mua</button>
        </div>

        <div className="product">
          <img src="https://via.placeholder.com/150" alt="sp3" />
          <h3>Collagen</h3>
          <p>Giá: 300.000đ</p>
          <button>Mua</button>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 - Bài tập React</p>
      </footer>

    </div>
  );
}

export default App;