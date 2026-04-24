import "../App.css";

function Home() {
  return (
    <div className="container">

      <header className="header">
        <h1>Shop Thực Phẩm Chức Năng</h1>
      </header>

      <div className="banner">
        <h2>Chăm sóc sức khỏe mỗi ngày</h2>
        <p>Uy tín - Chất lượng - Giá tốt</p>
      </div>

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

      <footer className="footer">
        <p>© 2026 - Bài tập React</p>
      </footer>

    </div>
  );
}

export default Home;