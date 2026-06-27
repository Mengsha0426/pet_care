import { Reveal } from "@/components/Reveal";

export function CtaSection() {
  return (
    <section className="cta shell" id="booking">
      <Reveal className="cta-box">
        <div className="cta-copy">
          <h2>现在预约，给毛孩子安排一次舒服的清洁日。</h2>
          <p>
            直接电话或微信联系我们，告诉我们宠物品种、体重和想做的项目，我们会帮你安排更合适的时段。
            <strong>首次到店可提前备注猫咪 / 敏感体质 / 接送需求。</strong>
          </p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="tel:020-1234-5678">
            电话预约
          </a>
          <a className="button button-secondary" href="#location">
            查看门店位置
          </a>
        </div>
      </Reveal>
    </section>
  );
}
