const overlay = document.querySelector('.overlay');
const clickableImage = document.querySelector('.clickable-image');
const mainText = document.querySelector('.mainText');
const mainTextImg = document.querySelector('.mainText-img');

// 초기 크기 조정
function adjustClickableImageSize() {
    const mainTextWidth = mainText.offsetWidth;
    const newWidth = mainTextWidth * 0.1; // 클릭 가능 이미지 너비를 .mainText의 10%로 설정
    clickableImage.style.width = `${newWidth}px`;

    adjustOverlayMaskSize(); // 클릭 가능한 이미지 크기를 조정할 때마다 오버레이 크기도 조정
}

// 오버레이 원의 크기 조정
function adjustOverlayMaskSize() {
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.13; // 반지름을 창 크기의 20%로 설정
    overlay.style.mask = `radial-gradient(circle ${radius}px at var(--x) var(--y), rgba(0, 0, 0, 0) 99%, black 100%)`;
    overlay.style.webkitMask = `radial-gradient(circle ${radius}px at var(--x) var(--y), rgba(0, 0, 0, 0) 99%, black 100%)`;
}

// 페이지 로드 및 창 크기 변경 시 크기 조정
window.addEventListener('load', () => {
    adjustClickableImageSize(); // 클릭 가능한 이미지 크기 조정
    adjustOverlayMaskSize(); // 오버레이 원의 크기 조정
});
window.addEventListener('resize', () => {
    adjustClickableImageSize(); // 클릭 가능한 이미지 크기 조정
    adjustOverlayMaskSize(); // 오버레이 원의 크기 조정
});

// 마우스 움직임에 따라 오버레이 업데이트
document.addEventListener('mousemove', (event) => {
    const { clientX: x, clientY: y } = event;
    overlay.style.setProperty('--x', `${x}px`);
    overlay.style.setProperty('--y', `${y}px`);
});

// 이미지 클릭 시 newPage.html로 이동
clickableImage.addEventListener('click', () => {
    window.location.href = 'sub.html'; // sub.html로 이동
});

// 마우스 오버 시 이미지 확대
clickableImage.addEventListener('mouseover', () => {
    clickableImage.style.transform = 'scale(1.1)';
});

// 마우스 아웃 시 이미지 원래 크기로 복원
clickableImage.addEventListener('mouseout', () => {
    clickableImage.style.transform = 'scale(1)';
});

// 이미지 호버 시 변경
clickableImage.addEventListener('mouseenter', () => {
    clickableImage.src = 'img/fire.png'; // 호버할 이미지로 변경
});

clickableImage.addEventListener('mouseleave', () => {
    clickableImage.src = 'img/nofire.png'; // 원래 이미지로 돌아오기
});