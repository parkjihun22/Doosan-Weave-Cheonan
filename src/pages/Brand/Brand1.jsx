import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>천안 두산위브 더제니스 - 브랜드 소개</title>
  <meta
    name="description"
    content="두산위브 더제니스 브랜드 철학과 가치를 소개합니다. 프리미엄 주거 품격과 차별화된 설계, 커뮤니티, 생활 인프라를 담은 천안 두산위브 더제니스."
  />
  <link rel="canonical" href="https://www.doosanweavethezenith.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 두산위브 더제니스" />
  <meta property="og:title" content="천안 두산위브 더제니스 - 브랜드 소개" />
  <meta
    property="og:description"
    content="두산위브 더제니스 브랜드 소개: 천안 청당동 중심에서 만나는 1,202세대 프리미엄 대단지의 주거 가치와 브랜드 철학을 소개합니다."
  />
  <meta property="og:url" content="https://www.doosanweavethezenith.co.kr/Brand/intro" />
  <meta property="og:image" content="https://www.doosanweavethezenith.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>천안 두산위브 더제니스 - 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  천안 두산위브 더제니스는 두산건설의 하이엔드 주거 브랜드 두산위브 더제니스가 적용된
  프리미엄 브랜드 아파트입니다. 충청남도 천안시 동남구 청당동 310-6번지 일원에 조성되며,
  지하 2층부터 지상 최고 29층, 10개동, 총 1,202세대 규모로 계획된 대단지입니다.
  전용 84㎡ 중심의 실거주 선호 평면과 청수행정타운 생활권, 천안 주요 교통망, 교육·생활 인프라를
  함께 누릴 수 있는 천안두산위브더제니스의 주거 가치를 소개합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>천안 청당동 중심에서 만나는</div>
  <div>두산위브 더제니스 브랜드 프리미엄</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="천안 두산위브 더제니스brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
