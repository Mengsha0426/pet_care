import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: "🛁",
    title: "基础净护洗",
    description: "包含梳毛、修爪、洁耳、温和清洁、吹干整毛，适合定期基础护理与首次到店体验。",
    intro: "把基础项目拆成看得懂的流程，让主人安心，也让宠物更少紧张。",
    details: ["30 秒初步体况判断", "猫狗分区独立洗护", "吹整后即刻梳顺检查"],
    flow: ["到店观察", "分区洗护", "吹整复查"],
    notes: ["温和洗净", "基础梳顺", "日常维持"],
  },
  {
    icon: "✂️",
    title: "造型修剪",
    description: "针对比熊、泰迪、金吉拉等常见品种，提供面部、脚底和全身造型修整。",
    intro: "先确认想要的轮廓，再做细节修整，避免洗后落差感。",
    details: ["先沟通修剪长度", "保留毛流层次感", "重点修整脸部与脚底"],
    notes: ["脸型修饰", "脚底清爽", "造型确认"],
  },
  {
    icon: "🌿",
    title: "舒敏皮毛护理",
    description: "使用低刺激洗液和保湿护理，适合皮肤敏感、毛发干燥和易打结的宠物。",
    intro: "在清洁之外补上舒缓和保湿，让换季或脆弱皮肤也能更稳一点。",
    details: ["低刺激洗液护理", "保湿修护减少干痒", "适合换季与脆弱皮肤"],
    notes: ["低刺激配方", "保湿舒缓", "换季友好"],
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
      <Reveal className="service-intro-strip">
        <div className="service-intro-copy">
          <strong>先做判断，再进护理</strong>
          <p>不是一上来就洗。我们会先看宠物状态、毛量和皮肤情况，再决定更适合的清洁与吹整方式。</p>
        </div>
        <div className="service-intro-pills" aria-label="服务体验亮点">
          <span>全程分区护理</span>
          <span>重点步骤可沟通</span>
          <span>护理后当场复查</span>
        </div>
      </Reveal>
      <div className="service-grid">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            as="article"
            className={index === 0 ? "panel service-card service-card-featured" : "panel service-card"}
          >
            <div className="service-copy">
              <div className="service-copy-top">
                <div className="icon">{service.icon}</div>
                {index === 0 ? <span className="service-badge">主推基础护理</span> : null}
              </div>
              <div>
                <h3>{service.title}</h3>
                <strong className="service-intro">{service.intro}</strong>
                <p>{service.description}</p>
              </div>
            </div>
            {index === 0 ? (
              <div className="service-feature-visual" aria-hidden="true">
                <div className="service-feature-card">
                  <small>护理流程</small>
                  <div className="service-flow">
                    {service.flow?.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="service-feature-card service-feature-card-soft">
                  <small>基础净护包含</small>
                  <div className="service-media">
                    {service.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                </div>
                <div className="service-foam one" />
                <div className="service-foam two" />
              </div>
            ) : (
              <div className="service-side-visual">
                <div className="service-side-chips">
                  {service.notes?.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
                <div className="service-media">
                  {service.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
