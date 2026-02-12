# 🎨 Swiper.js Custom Slider Collection

Swiper.js 라이브러리의 다양한 API를 활용하여 구현한 **6가지 테마의 반응형 슬라이더 컬렉션**입니다. 
기본적인 슬라이드부터 고난도의 3D 입체 효과까지 각 섹션별로 최적화된 UX/UI를 제공합니다.

---

## 🚀 Key Features
- **6종의 Swiper Effect**: Standard, Autoplay, Coverflow, Creative, Cards, Fade 효과 구현
- **반응형 최적화**: Breakpoints 설정을 통한 기기별(PC/Tablet/Mobile) 맞춤 레이아웃
- **독립적 제어**: 동일 페이지 내 여러 개의 Swiper가 충돌 없이 작동하도록 고유 셀렉터 적용
- **안정적인 Loop**: `loopedSlides` 설정을 통해 무한 루프 시 발생하는 끊김 현상 해결

---

## 📸 Slider Sections

### 1️⃣ Section 1: 기본 슬라이드 (Standard)
가장 대중적인 형태로, 여러 개의 콘텐츠를 한눈에 보여주기에 적합합니다.
- **Effect**: Default
- **Option**: `slidesPerView: 3`, Navigation, Scrollbar 포함

### 2️⃣ Section 2: 자동 재생 슬라이드 (Autoplay)
사용자의 조작 없이도 콘텐츠가 순환하며, 브랜드 컬러를 강조한 모델입니다.
- **Effect**: Default + Autoplay
- **Option**: `delay: 2500`, 테마 컬러(--swiper-theme-color) 커스텀

### 3️⃣ Section 3: 3D 입체 회전 (Coverflow)
중앙 슬라이드를 강조하며 양옆 슬라이드에 회전과 깊이감을 주어 고급스러운 분위기를 연출합니다.
- **Effect**: `coverflow`
- **Option**: `rotate: 30`, `depth: 200`, `slideShadows: true`


### 4️⃣ Section 4: 역동적 크리에이티브 (Creative)
전환 시 슬라이드가 멀어지거나 이동하는 독특한 애니메이션을 제공합니다.
- **Effect**: `creative`
- **Option**: `translate: ['-120%', 0, -500]` (이전/다음 슬라이드 좌표 제어)

### 5️⃣ Section 5: 카드 뭉치 (Cards)
실제 카드 덱을 넘기는 듯한 컴팩트하고 직관적인 효과입니다.
- **Effect**: `cards`
- **Option**: `perSlideOffset: 8`, `perSlideRotate: 4`


### 5-1️⃣ Section 5-1: 와이드 카드 (Wide Cards)
기존 카드 효과를 확장하여 고해상도 이미지와 넓은 배너에 최적화한 레이아웃입니다.
- **Effect**: `cards` (Wide Version)
- **Style**: `width: 800px` (PC 기준), 카드 간격 오프셋 최적화

### 6️⃣ Section 6: 부드러운 교차 (Fade)
이미지가 서서히 겹치며 바뀌는 효과로, 시각적 피로도가 적고 우아합니다.
- **Effect**: `fade`
- **Option**: `crossFade: true`, `slidesPerView: 1`

---

## 🛠 Tech Stack
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Library**: jQuery 4.0.0, Swiper 12.1.0
- **Layout**: Flexbox, CSS Variables, Media Queries

---

## 📝 설치 및 실행 (How to Run)

1. **라이브러리 포함**
   ```html
   <link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css](https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css)" />
   <script src="[https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js](https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js)"></script>
