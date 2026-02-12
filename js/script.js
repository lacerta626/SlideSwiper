$(document).ready(function () {

    /* ============================================================
       SECTION 1: 기본 슬라이드 (Standard)
       - 기본 3개 나열 형태
    ============================================================ */
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


    /* ============================================================
       SECTION 2: 기본 슬라이드 + 자동재생 (Autoplay)
       - 테마 컬러 커스텀 적용
    ============================================================ */
    const swiper2 = new Swiper('.swiper2', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: { el: '.s2 .swiper-pagination' },
        navigation: {
            nextEl: '.s2 .swiper-button-next',
            prevEl: '.s2 .swiper-button-prev',
        },
    });


    /* ============================================================
       SECTION 3: 입체 회전 효과 (Coverflow)
       - 3D 회전과 깊이감 강조
    ============================================================ */
    const swiper3 = new Swiper('.swiper3', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.s3 .swiper-pagination', clickable: true },
        navigation: {
            nextEl: '.s3 .swiper-button-next',
            prevEl: '.s3 .swiper-button-prev',
        },
    });


    /* ============================================================
       SECTION 4: 역동적 이동 효과 (Creative)
       - 슬라이드가 멀어지며 전환되는 모던한 연출
    ============================================================ */
    const swiper4 = new Swiper('.swiper4', {
        effect: 'creative',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        creativeEffect: {
            prev: { shadow: true, translate: ['-120%', 0, -500] },
            next: { shadow: true, translate: ['120%', 0, -500] },
        },
        pagination: { el: '.s4 .swiper-pagination', clickable: true },
        breakpoints: {
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 'auto' }
        },
    });


    /* ============================================================
       SECTION 5: 카드 뭉치 효과 (Cards)
       - 카드가 겹쳐져 있다가 뒤로 넘어가는 효과
    ============================================================ */
    const swiper5 = new Swiper('.swiper5', {
        effect: 'cards',
        grabCursor: true,
        loop: true,
        loopedSlides: 3, // 루프 경고 방지용 복제 설정
        autoplay: { delay: 2000, disableOnInteraction: false },
        observer: true,
        observeParents: true,
        cardsEffect: {
            rotate: true,
            perSlideOffset: 8,
            perSlideRotate: 4,
        },
        pagination: { el: '.s5 .swiper-pagination', clickable: true },
    });
    const swiper5_1 = new Swiper('.swiper5-1', {
        effect: 'cards',
        grabCursor: true,
        loop: true,
        loopedSlides: 3, // 루프 경고 방지용 복제 설정
        autoplay: { delay: 2000, disableOnInteraction: false },
        observer: true,
        observeParents: true,
        cardsEffect: {
            rotate: true,
            perSlideOffset: 8,
            perSlideRotate: 4,
        },
        pagination: { el: '.s5 .swiper-pagination', clickable: true },
    });


    /* ============================================================
       SECTION 6: 부드러운 교차 효과 (Fade)
       - 이미지가 서서히 겹치며 바뀌는 우아한 연출
    ============================================================ */
    const swiper6 = new Swiper('.swiper6', {
        effect: 'fade',
        grabCursor: true,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        fadeEffect: { crossFade: true },
        pagination: { el: '.s6 .swiper-pagination', clickable: true },
        slidesPerView: 1,
    });

});