import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
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

	return (
		<div className={styles.container}>
<Helmet>
  <title>천안 두산위브 더제니스 - 홍보영상</title>
  <meta
    name="description"
    content="천안 두산위브 더제니스 홍보영상을 통해 브랜드 가치와 단지 설계, 프리미엄 커뮤니티, 청당동 생활 인프라와 미래가치를 확인해보세요."
  />
  <link rel="canonical" href="https://www.doosanweavethezenith.co.kr/Brand/video" />
  <meta name="robots" content="index,follow" />

  {/* OG 태그 */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안 두산위브 더제니스" />
  <meta property="og:title" content="천안 두산위브 더제니스 - 홍보영상" />
  <meta
    property="og:description"
    content="천안 두산위브 더제니스 홍보영상: 청당동 중심 입지와 브랜드 프리미엄, 특화설계와 커뮤니티를 영상으로 만나보세요."
  />
  <meta property="og:url" content="https://www.doosanweavethezenith.co.kr/Brand/video" />
  <meta property="og:image" content="https://www.doosanweavethezenith.co.kr/images/og/main.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="천안 두산위브 더제니스 - 홍보영상" />
  <meta
    name="twitter:description"
    content="천안 청당동 프리미엄 입지와 1,202세대 브랜드 대단지의 새로운 가치를 영상으로 확인하세요."
  />
  <meta name="twitter:image" content="https://www.doosanweavethezenith.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="홍보영상" />
<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>천안 두산위브 더제니스 - 홍보영상</h1>

<p className={styles.screenReaderOnly}>
  천안 두산위브 더제니스 홍보영상을 통해 프리미엄 브랜드 가치와
  차별화된 단지 설계, 커뮤니티 시설, 청수행정타운 생활권 및
  광역 교통 인프라를 확인해보세요.
  충청남도 천안시 동남구 청당동 중심에서 완성되는
  총 1,202세대 대단지의 미래가치를 영상으로 만나보세요.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>천안의 새로운 랜드마크 위에</div>
  <div>두산위브 더제니스가 프리미엄을 완성합니다.</div>
</div>



			<div className={styles.videoContainer}>
				<YouTube
					videoId="uyyMsP_02Tg"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
