import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section className="section shell" id="location">
      <Reveal className="section-head">
        <div>
          <div className="eyebrow">联系我们</div>
          <h2>到店不绕路，咨询也更直接。</h2>
        </div>
        <p>门店位于番禺南村雅翠庭 2 栋附近，靠近兴南大道辅路与南大干线出口，开车、步行或打车都比较方便。</p>
      </Reveal>
      <div className="location-layout">
        <Reveal as="article" className="panel contact-card">
          <div className="contact-block">
            <strong>门店联系方式</strong>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <div>
                  <strong>电话预约</strong>
                  <p>
                    <a href="tel:020-1234-5678">020-1234 5678</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">微</div>
                <div>
                  <strong>客服微信</strong>
                  <p>pawpaw-spa</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div>
                  <strong>咨询邮箱</strong>
                  <p>
                    <a href="mailto:hello@petcare.com">hello@petcare.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-block">
            <strong>门店地址</strong>
            <p>广州市番禺区南村镇观景路雅翠庭 2 栋首层，近兴南大道辅路、南大干线出口。</p>
          </div>
          <div className="contact-block">
            <strong>到店提示</strong>
            <ul className="contact-meta">
              <li>停车可导航至雅翠庭停车场，从北门步行约 2 分钟可到。</li>
              <li>如带猫咪到店，建议提前联系，我们会预留更安静的接待时段。</li>
              <li>营业时间 10:00 - 20:00，周末建议至少提前 1 天预约。</li>
            </ul>
          </div>
        </Reveal>
        <Reveal as="article" className="panel map-card" aria-label="门店位置示意图">
          <Image
            className="map-visual"
            src="/store-map.png"
            alt="爪爪氧护沙龙门店位置示意图，展示兴南大道辅路、南大干线、观景路和雅翠庭 2 栋门店位置"
            width={1536}
            height={1024}
            priority
          />
        </Reveal>
      </div>
    </section>
  );
}
