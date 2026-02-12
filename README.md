🎞 Swiper.js Effects Showcase

이 프로젝트는 Swiper.js v12를 활용하여 다양한 슬라이드 효과를 구현한 예제 모음입니다.
각 섹션은 서로 다른 effect 및 옵션 조합을 사용하여 동작 방식의 차이를 보여줍니다.

📦 사용 라이브러리
<!-- Swiper CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css" />

<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>

🧠 JavaScript 구조 설명

모든 Swiper 인스턴스는 $(document).ready() 내부에서 초기화됩니다.

$(document).ready(function () {
    const swiper = new Swiper('.selector', { options });
});


이는 DOM이 완전히 로드된 이후 Swiper를 실행하기 위함입니다.

📌 SECTION 1 – 기본 슬라이드 (Standard)
const swiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 3,
    pagination: { el: '.s1 .swiper-pagination' },
    navigation: {
        nextEl: '.s1 .swiper-button-next',
        prevEl: '.s1 .swiper-button-prev',
    },
    scrollbar: { el: '.s1 .swiper-scrollbar' },
});

🔎 주요 옵션 설명
옵션	설명
loop: true	슬라이드를 무한 반복
slidesPerView: 3	한 화면에 3개 슬라이드 표시
pagination	하단 점 네비게이션
navigation	좌우 화살표 버튼
scrollbar	드래그 가능한 스크롤바

📌 가장 기본적인 Swiper 구성 형태입니다.

📌 SECTION 2 – 자동 재생 (Autoplay)
const swiper2 = new Swiper('.swiper2', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

🔎 Autoplay 옵션 설명
옵션	설명
delay	자동 전환 시간 (ms)
disableOnInteraction	사용자가 조작해도 자동 재생 유지 여부

📌 disableOnInteraction: false는 실무에서 매우 중요합니다.
사용자가 한번 터치하면 autoplay가 멈추는 기본 동작을 방지합니다.

📌 SECTION 3 – Coverflow (3D 입체 회전)
const swiper3 = new Swiper('.swiper3', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        depth: 200,
        slideShadows: true,
    },
});

🔎 Coverflow 핵심 옵션
옵션	설명
effect: 'coverflow'	3D 회전 효과
centeredSlides	중앙 슬라이드 강조
slidesPerView: 'auto'	CSS width 기반 자동 계산
rotate	회전 각도
depth	Z축 거리
slideShadows	그림자 효과

📌 이 효과는 slidesPerView: 'auto'와 함께 사용해야 자연스럽습니다.

📌 SECTION 4 – Creative Effect
const swiper4 = new Swiper('.swiper4', {
    effect: 'creative',
    creativeEffect: {
        prev: { shadow: true, translate: ['-120%', 0, -500] },
        next: { shadow: true, translate: ['120%', 0, -500] },
    },
});

🔎 Creative Effect 특징

슬라이드 이동을 직접 transform 제어

translate: [x, y, z] 배열 사용

Z축 이동 가능 (입체 연출)

📌 가장 자유도가 높은 effect
📌 브랜드 사이트, 포트폴리오에 적합

📌 SECTION 5 – Cards Effect
const swiper5 = new Swiper('.swiper5', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    cardsEffect: {
        rotate: true,
        perSlideOffset: 8,
        perSlideRotate: 4,
    },
});

🔎 Cards 옵션 설명
옵션	설명
effect: 'cards'	카드가 겹쳐지는 효과
perSlideOffset	카드 간 거리
perSlideRotate	카드 회전 각도
grabCursor	드래그 UI 표시

📌 모바일 UX에 매우 적합
📌 Tinder 스타일 인터랙션에 활용 가능

📌 SECTION 6 – Fade Effect
const swiper6 = new Swiper('.swiper6', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
});

🔎 Fade 옵션 설명
옵션	설명
effect: 'fade'	서서히 교차 전환
crossFade	이전 슬라이드와 부드럽게 겹침

📌 히어로 배너, 메인 비주얼에 적합
📌 가장 우아한 전환 효과

📱 반응형 처리
breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1.5 },
    1024: { slidesPerView: 'auto' }
}

🔎 Breakpoints 개념

화면 크기별 옵션 재정의

모바일 → 태블릿 → 데스크탑 최적화 가능

CSS media query와 역할이 유사하지만 JS 레벨 제어

🎯 정리
Effect	난이도	추천 용도
slide (기본)	★	일반 콘텐츠
autoplay	★	배너
coverflow	★★	갤러리
creative	★★★	브랜드/포트폴리오
cards	★★	모바일 UX
fade	★	메인 비주얼
