"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export function CtaSection() {
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("猫咪");
  const [weight, setWeight] = useState("");
  const [service, setService] = useState("洗护基础护理");
  const [timeSlot, setTimeSlot] = useState("明天 10:00");
  const [notes, setNotes] = useState("");
  const [copyLabel, setCopyLabel] = useState("复制预约信息");

  const safeContactName = contactName.trim() || "未填写";
  const safeContactPhone = contactPhone.trim() || "未填写";
  const safePetName = petName.trim() || "未填写";
  const safeWeight = weight.trim() || "未填写";
  const safeNotes = notes.trim() || "无";
  const bookingMessage = [
    "你好，我想快速预约宠物洗护。",
    `联系人：${safeContactName}`,
    `联系电话：${safeContactPhone}`,
    `宠物昵称：${safePetName}`,
    `宠物类型：${petType}`,
    `体重：${safeWeight}`,
    `预约项目：${service}`,
    `期望时段：${timeSlot}`,
    `补充备注：${safeNotes}`
  ].join("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bookingMessage);
      setCopyLabel("已复制，去联系店铺");
      window.setTimeout(() => setCopyLabel("复制预约信息"), 2200);
    } catch {
      setCopyLabel("复制失败，请手动复制");
      window.setTimeout(() => setCopyLabel("复制预约信息"), 2200);
    }
  };

  return (
    <section className="cta shell" id="booking">
      <Reveal className="cta-box">
        <div className="cta-main">
          <div className="cta-copy">
            <h2>现在预约，给毛孩子安排一次舒服的清洁日。</h2>
            <p>
              直接电话或微信联系我们，告诉我们宠物品种、体重和想做的项目，我们会帮你安排更合适的时段。
              <strong>首次到店可提前备注猫咪 / 敏感体质 / 接送需求。</strong>
            </p>
          </div>
          <form className="quick-booking" onSubmit={(event) => event.preventDefault()}>
            <div className="quick-booking-head">
              <strong>快速预约</strong>
              <span>补充联系人和宠物信息，一键复制后联系更快。</span>
            </div>
            <div className="quick-booking-grid">
              <label>
                <span>联系人</span>
                <input
                  name="contactName"
                  placeholder="比如：王女士"
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                />
              </label>
              <label>
                <span>联系电话</span>
                <input
                  name="contactPhone"
                  type="tel"
                  inputMode="tel"
                  placeholder="比如：138 0000 0000"
                  value={contactPhone}
                  onChange={(event) => setContactPhone(event.target.value)}
                />
              </label>
              <label>
                <span>宠物昵称</span>
                <input
                  name="petName"
                  placeholder="比如：米粒"
                  value={petName}
                  onChange={(event) => setPetName(event.target.value)}
                />
              </label>
              <label>
                <span>宠物类型</span>
                <select name="petType" value={petType} onChange={(event) => setPetType(event.target.value)}>
                  <option value="猫咪">猫咪</option>
                  <option value="小型犬">小型犬</option>
                  <option value="中大型犬">中大型犬</option>
                  <option value="其他宠物">其他宠物</option>
                </select>
              </label>
              <label>
                <span>体重</span>
                <input
                  name="weight"
                  placeholder="比如：4.2kg"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </label>
              <label>
                <span>预约项目</span>
                <select name="service" value={service} onChange={(event) => setService(event.target.value)}>
                  <option value="洗护基础护理">洗护基础护理</option>
                  <option value="深层护理 SPA">深层护理 SPA</option>
                  <option value="去底绒护理">去底绒护理</option>
                  <option value="剃毛修剪">剃毛修剪</option>
                </select>
              </label>
              <label>
                <span>期望时段</span>
                <select name="timeSlot" value={timeSlot} onChange={(event) => setTimeSlot(event.target.value)}>
                  <option value="今天上午">今天上午</option>
                  <option value="今天下午">今天下午</option>
                  <option value="明天 10:00">明天 10:00</option>
                  <option value="明天上午">明天上午</option>
                  <option value="明天下午">明天下午</option>
                </select>
              </label>
              <label className="quick-booking-note">
                <span>补充备注</span>
                <input
                  name="notes"
                  placeholder="猫咪、敏感体质、接送需求等"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </label>
            </div>
            <div className="quick-booking-preview" aria-live="polite">
              <p>{bookingMessage}</p>
            </div>
            <div className="hero-actions quick-booking-actions">
              <button className="button button-primary" type="button" onClick={handleCopy}>
                {copyLabel}
              </button>
              <a className="button button-secondary" href="tel:020-1234-5678">
                电话预约
              </a>
              <a className="button button-secondary" href="#location">
                查看门店位置
              </a>
            </div>
            <p className="quick-booking-tip">微信客服：pawpaw-spa，复制上方信息后发给我们会更快安排。</p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
