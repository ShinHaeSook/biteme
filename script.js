// 모바일 메뉴 토글 (확장 준비)
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    document.body.classList.toggle('menu-open');
  });
}

// 카운트다운 (예시: 2시간 타이머)
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

if (hh && mm && ss) {
  const end = Date.now() + 2 * 60 * 60 * 1000;
  const tick = () => {
    const remain = Math.max(0, end - Date.now());
    const h = Math.floor(remain / 1000 / 60 / 60);
    const m = Math.floor((remain / 1000 / 60) % 60);
    const s = Math.floor((remain / 1000) % 60);
    hh.textContent = String(h).padStart(2, '0');
    mm.textContent = String(m).padStart(2, '0');
    ss.textContent = String(s).padStart(2, '0');
  };
  tick();
  setInterval(tick, 1000);
}

// 베스트셀러 가로 스크롤 버튼
const rail = document.getElementById('best-rail');
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!rail) return;
    const dir = Number(btn.getAttribute('data-scroll'));
    rail.scrollBy({ left: dir * 300, behavior: 'smooth' });
  });
});


