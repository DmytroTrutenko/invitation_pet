document.addEventListener('DOMContentLoaded', () => {
    const bubblesEl = document.getElementById('bubbles');
    const sparklesEl = document.getElementById('sparkles');

    function makeBubble() {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = 4 + Math.random() * 8;
        const y = Math.random() * 100;

        b.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${5 + Math.random() * 90}%;
            top: ${y}vh;
            --dx: ${(Math.random() - 0.5) * 60}px;
            animation-duration: ${5 + Math.random() * 7}s;
        `;
        bubblesEl.appendChild(b);
        setTimeout(() => b.remove(), 14000);
    }

    for (let i = 0; i < 30; i++) makeBubble();
    setInterval(makeBubble, 120);

    function makeSparkle() {
        const s = document.createElement('div');
        s.className = 'sparkle';
        const x = Math.random() * 100;
        const y = 10 + Math.random() * 80;
        const delay = Math.random() * 4;
        const dur = 1.5 + Math.random() * 2;
        s.style.cssText = `
            left: ${x}%;
            top: ${y}%;
            animation-duration: ${dur}s;
            animation-delay: ${delay}s;
            opacity: 0;
          `;
        sparklesEl.appendChild(s);
    }

    for (let i = 0; i < 28; i++) makeSparkle();

});