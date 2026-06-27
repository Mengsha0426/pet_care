export function NavBar() {
  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a className="brand" href="#top" aria-label="爪爪氧护沙龙首页">
          <span className="brand-mark" aria-hidden="true">
            🐾
          </span>
          <span>爪爪氧护沙龙</span>
        </a>
        <div className="nav-links">
          <a href="#services">服务项目</a>
          <a href="#process">洗护流程</a>
          <a href="#pricing">套餐价格</a>
          <a href="#location">门店位置</a>
          <a href="#faq">常见问题</a>
          <a className="button button-primary" href="#booking">
            立即预约
          </a>
        </div>
      </div>
    </nav>
  );
}
