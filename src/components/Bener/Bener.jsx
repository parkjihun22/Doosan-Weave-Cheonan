import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="천안 두산위브 더제니스-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '두산위브' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '천안 두산위브 더제니스'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안의 중심에서 완성되는 하이엔드 랜드마크 라이프.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          두산위브 더제니스 브랜드 프리미엄으로 완성되는 차별화된 주거가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·생활·교육·미래가치를 모두 누리는 천안 두산위브 더제니스.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안의 새로운 스카이라인을 완성할 프리미엄 대단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          우수한 광역교통망과 생활 인프라를 모두 누리는 중심 입지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          혁신설계와 브랜드 프리미엄이 어우러진 미래가치 높은 주거공간.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안 두산위브 더제니스
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안 주요 생활권을 빠르게 연결하는 우수한 교통환경.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교육·쇼핑·문화·자연까지 모두 가까운 프리미엄 생활 인프라.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          품격 있는 외관 설계와 차별화된 랜드마크 디자인.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          입주민 라이프스타일을 고려한 다양한 커뮤니티와 조경 특화설계.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안 두산위브 더제니스, 프리미엄의 기준을 새롭게 완성하다.
        </div>
      </>
    );
  }
};