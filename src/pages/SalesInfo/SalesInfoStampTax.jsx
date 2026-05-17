import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

import Ready from "../../components/Ready/Ready";


const ComplexGuide1 = () => {
  const menuContents = [
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
    // { title: "청약안내문", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>


        <Helmet>
          <title>천안 두산위브 더제니스 - 인지세 납부 안내</title>
          <meta
            name="description"
            content="천안 두산위브 더제니스 분양(계약) 시 필요한 인지세 납부 기준과 절차, 금액 및 유의사항을 한눈에 확인하세요."
          />
          <link rel="canonical" href="https://www.doosanweavethezenith.co.kr/SalesInfo/stampTax" />
          <meta name="robots" content="index,follow" />
        </Helmet>




      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>
  천안 두산위브 더제니스 - 인지세안내
</h1>
<p className={styles.screenReaderOnly}>
  천안 두산위브 더제니스 인지세 안내 페이지입니다.
  분양계약서 작성 시 필요한 인지세 납부 기준과 세액, 납부 방법,
  준비 절차 및 유의사항을 확인할 수 있습니다.
  계약 전 인지세 정보를 미리 확인하여 정확하고 원활한 계약 진행을 준비하세요.
</p>

<div className={styles.textBox}>
  <div>계약 전 꼭 확인해야 할</div>
  <div>천안 두산위브 더제니스 인지세 안내</div>
</div>

{/* 이미지에 애니메이션 효과 추가 */}
<img
  className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
  src={page1}
  alt="천안 두산위브 더제니스 인지세안내-image1"
  onLoad={handleImageLoad}
/>




      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
