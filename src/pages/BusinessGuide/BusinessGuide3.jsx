import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
    	{ title: "분양일정", url: "/BusinessGuide/plan" },
    	{ title: "공급정보", url: "/BusinessGuide/documents" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  {/* 필수 메타 */}
  <title>천안 두산위브 더제니스 - 공급정보</title>
  <meta
    name="description"
    content="천안 두산위브 더제니스 공급정보를 확인하세요. 전용 84㎡ A·B·C 타입 구성, 세대수, 공급 규모 및 분양 관련 핵심 정보를 안내합니다."
  />
  <meta name="robots" content="index,follow" />
  <link
    rel="canonical"
    href="https://www.doosanweavethezenith.co.kr/BusinessGuide/documents"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 두산위브 더제니스" />
  <meta property="og:title" content="천안 두산위브 더제니스 - 공급정보" />
  <meta
    property="og:description"
    content="천안 두산위브 더제니스 공급정보: 총 1,202세대 규모, 전용 84㎡ A·B·C 타입 구성과 공급 내용을 확인하세요."
  />
  <meta
    property="og:url"
    content="https://www.doosanweavethezenith.co.kr/BusinessGuide/documents"
  />
  <meta
    property="og:image"
    content="https://www.doosanweavethezenith.co.kr/Main1.png"
  />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="공급정보" />
<MenuBar contents={menuContents} />

{/* SEO 최적화 */}
<h1 className={styles.screenReaderOnly}>천안 두산위브 더제니스 - 공급정보</h1>

<p className={styles.screenReaderOnly}>
천안 두산위브 더제니스 공급정보 페이지입니다.
충청남도 천안시 동남구 청당동 310-6번지 일원에 조성되는
총 1,202세대 규모의 브랜드 대단지로,
전용 84㎡ A·B·C 타입 구성과 세대별 공급 내용,
분양 관련 핵심 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>천안 청당동 프리미엄 라이프</div>
  <div>천안 두산위브 더제니스 공급정보를 확인하세요.</div>
</div>

{/* 이미지에 isImageVisible 상태 적용 */}
<img
  className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`}
  src={page1}
  alt="천안 두산위브 더제니스 공급정보 이미지1"
/>


			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
