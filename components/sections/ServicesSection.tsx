import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: "🛁",
    title: "基础净护洗",
    description: "包含梳毛、修爪、洁耳、温和清洁、吹干整毛，适合定期基础护理。",
  },
  {
    icon: "✂️",
    title: "造型修剪",
    description: "针对比熊、泰迪、金吉拉等常见品种，提供面部、脚底和全身造型修整。",
  },
  {
    icon: "🌿",
    title: "舒敏皮毛护理",
    description: "使用低刺激洗液和保湿护理，适合皮肤敏感、毛发干燥和易打结的宠物。",
  },
];

export function ServicesSection() {
  return (
    <section className="section shell" id="services">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">服务项目</div>
          <h2>把基础洗净，做成体验升级。</h2>
        </div>
        <p>
          从基础清洁到皮毛调理，我们把服务拆得足够细，让主人知道每一步在做什么，也让宠物少一点紧张、多一点舒适。
        </p>
      </Reveal>
      <div className="service-grid">
        {services.map((service) => (
          <Reveal key={service.title} as="article" className="panel service-card">
            <div className="icon">{service.icon}</div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
