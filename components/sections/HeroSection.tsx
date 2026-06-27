import { Reveal } from "@/components/Reveal";

const metrics = [
  { value: "3000+", label: "累计服务宠物家庭" },
  { value: "98%", label: "复购率来自老客户转介绍" },
  { value: "90min", label: "标准洗护平均完成时长" },
];

const highlights = ["低噪吹护动线", "敏感宠专属方案", "洗护后即时反馈"];

export function HeroSection() {
  return (
    <section className="hero shell">
      <Reveal className="hero-card">
        <div className="hero-copy">
          <div className="eyebrow">低敏洗护 · 猫狗分区 · 全程可视</div>
          <h1>洗得干净，也洗得安心。</h1>
          <p>
            面向城市养宠家庭的精品洗护单页，主打温和清洁、皮毛护理、造型修剪与接送服务。让每一次洗护都更轻松，也更适合敏感型毛孩子。
          </p>
          <div className="hero-points">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#booking">
              预约今天的档期
            </a>
            <a className="button button-secondary" href="#pricing">
              查看套餐价格
            </a>
          </div>
          <div className="hero-metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="bubble one"></div>
          <div className="bubble two"></div>
          <div className="bubble three"></div>
          <div className="pet-figure">
            <div className="pet-shape"></div>
          </div>
          <div className="visual-note visual-note-top">
            <span>洗前评估</span>
            <strong>先看皮肤状态，再定护理强度</strong>
          </div>
          <div className="visual-note visual-note-bottom">
            <span>洗后反馈</span>
            <strong>离店前同步照片与护理建议</strong>
          </div>
          <div className="card card-right">
            <small>今日热门</small>
            <strong>深层净味 SPA</strong>
          </div>
          <div className="card card-left">
            <small>新客福利</small>
            <strong>首单立减 40 元</strong>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
