import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    question: "第一次洗护会不会紧张？",
    answer: "会先做体况和情绪评估，必要时调整流程，优先保证宠物状态稳定，而不是强行完成全部项目。",
  },
  {
    question: "洗护一般需要多久？",
    answer: "小型犬基础洗约 60 到 90 分钟，造型修剪和长毛护理会更久，具体以毛量和配合度为准。",
  },
  {
    question: "需要提前预约吗？",
    answer: "建议至少提前一天预约，周末和节假日档期更紧张。首次到店建议备注品种、年龄和体重。",
  },
];

export function FaqSection() {
  return (
    <section className="section shell" id="faq">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">常见问题</div>
          <h2>提前回答疑虑，能更快促成预约。</h2>
        </div>
        <p>把用户最关心的应激、时长、疫苗和预约规则写清楚，单页转化会更顺畅。</p>
      </Reveal>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <Reveal key={faq.question} as="article" className="panel faq">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
