Markdown# 🎞 Swiper.js Effects Showcase

이 프로젝트는 **Swiper.js v12**를 활용하여 다양한 슬라이드 효과를 구현한 예제 모음입니다. 각 섹션은 서로 다른 `effect` 및 옵션 조합을 사용하여 동작 방식의 차이를 보여줍니다.

## 📦 사용 라이브러리

```html
<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css](https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css)" />

<script src="[https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js](https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js)"></script>
🧠 JavaScript 구조 설명모든 Swiper 인스턴스는 DOM이 완전히 로드된 이후 실행되도록 $(document).ready() 내부에서 초기화됩니다.JavaScript$(document).ready(function () {
    const swiper = new Swiper('.selector', { options });
});
📌 주요 섹션별 상세 가이드1. 기본 슬라이드 (Standard)가장 기본적인 Swiper 구성 형태입니다.JavaScriptconst swiper1 = new Swiper('.swiper1', {
    loop: true,
    slidesPerView: 3,
    pagination: { el: '.s1 .swiper-pagination' },
    navigation: {
        nextEl: '.s1 .swiper-button-next',
        prevEl: '.s1 .swiper-button-prev',
    },
    scrollbar: { el: '.s1 .swiper-scrollbar' },
});
옵션설명loop: true슬라이드를 무한 반복slidesPerView: 3한 화면에 3개 슬라이드 표시pagination하단 점 네비게이션navigation좌우 화살표 버튼scrollbar드래그 가능한 스크롤바2. 자동 재생 (Autoplay)JavaScriptconst swiper2 = new Swiper('.swiper2', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
💡 중요: disableOnInteraction: false 옵션은 사용자가 슬라이드를 터치하거나 조작한 후에도 자동 재생이 멈추지 않게 합니다.3. Coverflow (3D 입체 회전)JavaScriptconst swiper3 = new Swiper('.swiper3', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 30,
        depth: 200,
        slideShadows: true,
    },
});
특징: slidesPerView: 'auto'와 함께 사용할 때 가장 자연스러운 3D 효과가 나타납니다.4. Creative EffectJavaScriptconst swiper4 = new Swiper('.swiper4', {
    effect: 'creative',
    creativeEffect: {
        prev: { shadow: true, translate: ['-120%', 0, -500] },
        next: { shadow: true, translate: ['120%', 0, -500] },
    },
});
특징: 직접적인 transform 제어로 Z축 이동(입체감)을 자유롭게 연출할 수 있습니다.5. Cards EffectJavaScriptconst swiper5 = new Swiper('.swiper5', {
    effect: 'cards',
    grabCursor: true,
    loop: true,
    cardsEffect: {
        rotate: true,
        perSlideOffset: 8,
        perSlideRotate: 4,
    },
});
용도: 모바일 앱 UX나 틴더 스타일의 카드 겹침 효과에 적합합니다.6. Fade EffectJavaScriptconst swiper6 = new Swiper('.swiper6', {
    effect: 'fade',
    fadeEffect: { crossFade: true },
});
용도: 메인 비주얼 배너 등 부드럽게 겹치며 전환되는 연출에 최적입니다.📱 반응형 처리 (Breakpoints)JavaScriptbreakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 1.5 },
    1024: { slidesPerView: 'auto' }
}
🎯 요약 가이드Effect난이도추천 용도Standard★일반 리스트, 카드 뉴스Autoplay★메인 배너, 무한 롤링Coverflow★★3D 갤러리, 앨범 아트Creative★★★포트폴리오, 브랜드 사이트Cards★★모바일 카드형 UIFade★메인 비주얼 배경
---

혹시 이 내용 중에 **웹 게시판(Web Publisher)** 수업 내용에 맞춰서 특정 코드(HTML 구조 등)를 더 추
