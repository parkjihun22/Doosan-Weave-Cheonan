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
          천안 청당동 중심에서 만나는 1,202세대 하이엔드 브랜드 대단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          두산위브더제니스 센트럴 천안, 천안 주거가치를 새롭게 완성하다.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·행정·생활 인프라를 가까이 누리는 천안 두산위브 더제니스.
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
          지하 2층~지상 29층, 10개동 총 1,202세대 프리미엄 대단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 84㎡ A·B·C 타입으로 구성된 실거주 중심 브랜드 아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청수행정타운 생활권과 천안 주요 교통망을 누리는 중심 입지.
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
          천안대로·남천안IC·천안JC를 통한 빠른 광역 교통환경.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교육·쇼핑·행정·문화 인프라를 모두 가까이 누리는 프리미엄 입지.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          10개동 1,202세대로 완성되는 청당동 랜드마크 대단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          커뮤니티·조경·주차 편의를 고려한 실거주 중심 특화설계.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          천안 두산위브 더제니스, 새로운 주거 프리미엄의 기준.
        </div>
      </>
    );
  }
};