// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>천안 두산위브 더제니스</span>
        </li>

        <li>
          <strong>대지위치</strong>
          <span>충청남도 천안시 동남구 청당동 310-6번지 일원</span>
        </li>

        <li>
          <strong>건축규모</strong>
          <span>지하2층 ~ 지상 최고29층 규모, 10개동</span>
        </li>

        <li>
          <strong>주택형</strong>
          <span>전용면적 84㎡ A·B·C </span>
        </li>

        <li>
          <strong>세대수</strong>
          <span>1,202세대</span>
        </li>

        <li>
          <strong>시공사</strong>
          <span>두산건설</span>
        </li>

        <li>
          <strong>브랜드</strong>
          <span>두산위브 더제니스</span>
        </li>
      </ul>
    ),
  },


  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            도안신도시 생활중심과 학세권을 누리는<br />
            천안 두산위브 더제니스프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "천안 청당동 중심 프리미엄 입지",
      desc:
        "청수행정타운 생활권과 연결되는 중심 입지<br/>행정·상업·주거 인프라를 동시에 누리는 생활환경<br/>천안 핵심 생활권 미래가치 기대",
    },
    {
      img: slide2,
      title: "교통 인프라 프리미엄",
      desc:
        "천안대로·남천안IC·천안JC 등 광역교통망 이용 편리<br/>KTX 천안아산역 및 수도권 접근성 강화<br/>도심 이동과 광역 이동을 모두 누리는 교통환경",
    },
    {
      img: slide3,
      title: "풍부한 생활 인프라",
      desc:
        "대형마트·병원·행정기관·문화시설 인접<br/>쇼핑·여가·생활편의시설을 가까이 이용 가능<br/>원스톱 생활권 형성",
    },
    {
      img: slide4,
      title: "우수한 교육 환경",
      desc:
        "초·중·고 교육시설 인접 예정<br/>안심 통학환경과 학세권 프리미엄 기대<br/>자녀 중심 교육 인프라 확보",
    },
    {
      img: slide5,
      title: "총 1,202세대 브랜드 대단지",
      desc:
        "지하 2층 ~ 지상 29층 규모 대단지 구성<br/>전용 84㎡ A·B·C 타입 중심 설계<br/>실거주 선호도 높은 평면 특화",
    },
    {
      img: slide6,
      title: "두산위브 더제니스 브랜드 가치",
      desc:
        "두산건설 브랜드 프리미엄 적용<br/>커뮤니티·조경·특화설계 반영<br/>천안의 새로운 랜드마크 기대",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
