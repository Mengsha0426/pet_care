import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    quote: "“我家猫特别怕吹风，这里会先安抚再慢慢吹，出来之后毛很顺，也没有应激。”",
    author: "阿福家长",
  },
  {
    quote: "“最满意的是沟通很细，修短一点还是保留蓬松感，都会提前确认，不会洗完才发现不喜欢。”",
    author: "年糕家长",
  },
  {
    quote: "“接送服务很省事，下班前就能收到洗护完成照片，特别适合工作日没时间跑门店的时候。”",
    author: "Lucky 家长",
  },
];

export function ReviewsSection() {
  return (
    <section className="section shell">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">客户评价</div>
          <h2>单页里最能打动人的，往往是信任感。</h2>
        </div>
        <p>这里放的是可直接替换的示例文案，后续你可以换成门店自己的真实评价截图或短句。</p>
      </Reveal>
      <div className="review-grid">
        {reviews.map((review) => (
          <Reveal key={review.author} as="article" className="panel review">
            <p>{review.quote}</p>
            <strong>{review.author}</strong>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
