import { Reveal } from "@/components/Reveal";

const plans = [
  {
    title: "轻享基础洗",
    price: "¥128",
    items: ["小型犬或短毛猫基础洗护", "梳毛、修爪、洁耳、肛周清洁", "适合日常维护型客户"],
    cta: "预约轻享档",
    featured: false,
  },
  {
    title: "明星净护套餐",
    price: "¥228",
    items: ["深层洗护 + 造型修剪", "保湿护毛与净味护理", "适合毛量中高与复购用户"],
    cta: "预约热门套餐",
    featured: true,
  },
  {
    title: "到家接送护理",
    price: "¥298",
    items: ["3 公里内接送上门", "单独护理时段更安静", "适合上班族与应激宠物"],
    cta: "咨询接送服务",
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section className="section shell" id="pricing">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">套餐价格</div>
          <h2>简单清楚，适合直接转化。</h2>
        </div>
        <p>价格结构适合单页展示，可根据体型、毛量和服务内容继续扩展成门店自己的报价体系。</p>
      </Reveal>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <Reveal
            key={plan.title}
            as="article"
            className={plan.featured ? "panel price-card featured-price-card" : "panel price-card"}
          >
            <div>
              <h3>{plan.title}</h3>
              <div className="price-tag">
                <strong>{plan.price}</strong>
                <span>/ 次</span>
              </div>
            </div>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className={plan.featured ? "button button-primary" : "button button-secondary"} href="#booking">
              {plan.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
