import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
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

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
