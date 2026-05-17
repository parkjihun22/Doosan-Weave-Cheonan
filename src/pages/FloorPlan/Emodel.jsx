import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "84A", key: "84A" },
    { title: "84B", key: "84B" },
    { title: "84C", key: "84C" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "84A": "https://www.xn--9i1bjk9yu0i1yj45dd2aj6f5vix0ectdd9s4kt.com/vr/tour1.html",
    "84B": "https://www.xn--9i1bjk9yu0i1yj45dd2aj6f5vix0ectdd9s4kt.com/vr/tour2.html",
    "84C": "https://www.xn--9i1bjk9yu0i1yj45dd2aj6f5vix0ectdd9s4kt.com/vr/tour3.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };




  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  {/* 핵심 SEO 페이지: 84A */}
  <title>천안 두산위브 더제니스 - 84A</title>
  <meta
    name="description"
    content="천안 두산위브 더제니스 84A를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 84A·84B·122㎡ 세대별 평면도, 인테리어를 실감 나게 확인하실 수 있습니다."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 두산위브 더제니스" />
  <meta property="og:title" content="천안 두산위브 더제니스 - 84A" />
  <meta
    property="og:description"
    content="VR 투어와 전용 84A·84B·122㎡ 평면도, 인테리어를 통해 실제 같은 공간을 체험해보세요."
  />
  <meta property="og:url" content="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />
  <meta property="og:image" content="https://www.lotte-castl.co.kr/img/og/emodel.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="천안 두산위브 더제니스 - 84A" />
  <meta
    name="twitter:description"
    content="천안 두산위브 더제니스 VR 모델하우스를 통해 세대별 평면과 인테리어를 생생하게 체험하세요."
  />
  <meta name="twitter:image" content="https://www.lotte-castl.co.kr/img/og/emodel.jpg" />
  <meta name="twitter:url" content="https://www.lotte-castl.co.kr/FloorPlan/Emodel" />

  {/* JSON-LD (구조화데이터) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "천안 두산위브 더제니스 - 84A",
      "url": "https://www.lotte-castl.co.kr/FloorPlan/Emodel",
      "description":
        "천안 두산위브 더제니스 84A를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 84A·84B·122㎡ 세대별 평면도를 확인할 수 있습니다.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.lotte-castl.co.kr/img/og/emodel.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.lotte-castl.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "84A", "item": "https://www.lotte-castl.co.kr/FloorPlan/Emodel" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="84A" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  천안 두산위브 더제니스 - 84A
</h1>
<p className={styles.screenReaderOnly}>
  천안 두산위브 더제니스 84A를 온라인으로 만나보세요. VR 가상 투어를 통해 세대별 구조와 인테리어를 실제처럼 경험하고,
  전용 84A·84B·122㎡ 평면도 정보를 간편하게 확인할 수 있습니다.
</p>

<div className={styles.textBox}>
  <div>현장을 가지 않아도,</div>
  <div>천안 두산위브 더제니스를 눈앞에서 확인하세요.</div>
</div>




      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="84A" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>천안 두산위브 더제니스- 84A</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
