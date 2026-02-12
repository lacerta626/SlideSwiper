# SlideSwiper

Swiper.js Custom Slider Collection
Swiper.js를 활용하여 구현한 6가지 테마의 반응형 슬라이더 컬렉션입니다. 기본 형태부터 3D 입체 효과까지 다양한 인터랙션을 포함하고 있습니다.

🚀 주요 기능
다양한 슬라이드 효과: Coverflow, Creative, Cards, Fade 등 제공

반응형 디자인: PC, 태블릿, 모바일에 최적화된 레이아웃

자동 재생(Autoplay): UX를 고려한 부드러운 전환 및 일시정지 기능

커스텀 UI: 각 섹션별 독립적인 페이지네이션 및 네비게이션 스타일링

📸 섹션별 상세 설명
Section 1: 기본 슬라이드 (Standard)
가장 표준적인 슬라이더 형태로, 한 번에 여러 개의 슬라이드를 보여주는 멀티 레이아웃입니다.

특징: slidesPerView: 3, 스크롤바 및 화살표 포함

Section 2: 자동 재생 슬라이드 (Autoplay Custom)
기본 형태에 자동 재생 기능을 추가하고 브랜드 컬러를 적용한 커스텀 모델입니다.

특징: Red 테마 컬러 적용, 2.5초 간격 자동 전환

Section 3: 3D 입체 회전 (Coverflow)
슬라이드가 중앙으로 올수록 커지고 양옆으로 회전하며 깊이감을 주는 입체적인 효과입니다.

특징: 3D 회전 각도 조정, 슬라이드 그림자(Shadow) 활성화

Section 4: 모던 크리에이티브 (Creative)
전환 시 슬라이드가 뒤로 밀려나며 사라지는 고유한 애니메이션 효과입니다.

특징: Creative 효과 적용, 반응형 지점별 슬라이드 노출수 조절

Section 5: 카드 뭉치 (Cards)
실제 카드 덱을 한 장씩 뒤로 넘기는 듯한 컴팩트한 연출입니다.

특징: 작은 사이즈의 카드 뭉치 형태, 1초 간격의 빠른 전환

Section 5-1: 와이드 카드 (Wide Cards)
기존 카드 효과를 확장하여 화면 전체를 활용하는 시원한 레이아웃입니다.

특징: width: 800px 확장, 고해상도 배너 형태에 최적화

Section 6: 우아한 페이드 (Fade)
이미지가 겹쳐지면서 부드럽게 전환되는 미니멀한 스타일입니다.

특징: 단일 슬라이드 노출, crossFade 활성화로 부드러운 투명도 전환

🛠 기술 스택
HTML5 / CSS3 (Custom Properties, Flexbox)

jQuery 4.0.0 (DOM Ready 제어)

Swiper 12.1.0 (핵심 라이브러리)

📝 설치 및 실행 방법
라이브러리 로드 (CDN)

HTML

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
프로젝트 구조

Plaintext

project/
├── css/
│   ├── common.css
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── pic_*.png
실행
index.html 파일을 브라우저로 실행하여 확인하세요.

💡 개발 노트
Loop 경고 해결: 슬라이드 개수가 부족할 때 발생하는 루프 오류를 방지하기 위해 loopedSlides 옵션을 활용하였습니다.

독립 제어: 동일한 클래스명을 가진 Swiper가 충돌하지 않도록 부모 섹션 클래스를 활용한 개별 선택자를 적용했습니다.

프로젝트에 대해 더 궁금한 점이 있다면 Issue를 남겨주세요!
