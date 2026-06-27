import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "到店体况评估",
    description: "确认皮肤、耳朵、关节与情绪状态，选择合适的洗护方式和吹毛强度。",
  },
  {
    number: "02",
    title: "分区清洁护理",
    description: "猫狗分区洗护，重点处理脚垫、腹部、下巴和容易藏污的毛发区域。",
  },
  {
    number: "03",
    title: "蓬松吹整修型",
    description: "根据毛流与体型做分层吹整，减少炸毛和打结，让整体状态更顺更柔和。",
  },
  {
    number: "04",
    title: "离店建议反馈",
    description: "提供本次护理记录、家庭护理建议与下次洗护周期，方便主人持续跟进。",
  },
];

export function ProcessSection() {
  return (
    <section className="section shell" id="process">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">洗护流程</div>
          <h2>一步一步，让宠物更放松。</h2>
        </div>
        <p>流程透明、节奏稳定，每一步都为了缩短应激时间，提升洗护过程中的安全感。</p>
      </Reveal>
      <div className="steps">
        {steps.map((step) => (
          <Reveal key={step.number} as="article" className="step">
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
