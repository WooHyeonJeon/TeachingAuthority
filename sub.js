document.addEventListener('DOMContentLoaded', () => {
    const imageTextPairs = [
        { image: document.querySelector('.deepfake'), text: document.querySelector('.deepfakeText') },
        { image: document.querySelector('.fuck'), text: document.querySelector('.fuckText') },
        { image: document.querySelector('.chu'), text: document.querySelector('.chuText') },
        { image: document.querySelector('.test'), text: document.querySelector('.testText') },
        { image: document.querySelector('.teacher'), text: document.querySelector('.prText1') },
        { image: document.querySelector('.teacher'), text: document.querySelector('.prText2') },
        { image: document.querySelector('.teacher'), text: document.querySelector('.prText3') },
    ];

    imageTextPairs.forEach(pair => {
        pair.image.addEventListener('mouseenter', () => {
            pair.text.classList.add('visible');
        });
        pair.image.addEventListener('mouseleave', () => {
            pair.text.classList.remove('visible');
        });
    });

    // 마우스 휠 스크롤 제어 코드
    window.addEventListener('wheel', function(event){
        event.preventDefault();

        let direction = event.deltaY > 0 ? 1 : -1;

        let scrollPosition = this.window.pageYOffset; // 수직 스크롤 위치
        let sectionHeight = this.window.innerHeight; // 섹션 높이

        let currentSection = Math.round(scrollPosition / sectionHeight);
        let newPosition = (currentSection + direction) * sectionHeight;

        window.scrollTo({
            top: newPosition,
            behavior: "smooth"
        });
    }, { passive: false });
});

