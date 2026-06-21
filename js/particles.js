// Hero Particles — constellation network effect
(function () {
  const canvas = document.getElementById("hero-particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let animId;
  let mouse = { x: -9999, y: -9999 };
  const PARTICLE_COUNT = 80;
  const CONNECTION_DIST = 100;
  const MOUSE_DIST = 150;

  function isDark() {
    return document.body.classList.contains("dark");
  }

  function resize() {
    const hero = canvas.parentElement;
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const dark = isDark();
    const dotR = dark ? 255 : 80;
    const dotG = dark ? 255 : 80;
    const dotB = dark ? 255 : 80;
    const lineR = dark ? 255 : 180;
    const lineG = dark ? 165 : 140;
    const lineB = dark ? 0 : 60;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Gentle mouse repulsion
      const mdx = p.x - mouse.x;
      const mdy = p.y - mouse.y;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < MOUSE_DIST && mDist > 0) {
        const force = (MOUSE_DIST - mDist) / MOUSE_DIST * 0.015;
        p.vx += (mdx / mDist) * force;
        p.vy += (mdy / mDist) * force;
      }

      // Dampen velocity
      p.vx *= 0.998;
      p.vy *= 0.998;

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotR}, ${dotG}, ${dotB}, ${p.opacity})`;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${lineR}, ${lineG}, ${lineB}, ${alpha})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  // Mouse tracking
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  // Pause when not visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          draw();
        } else {
          cancelAnimationFrame(animId);
        }
      });
    },
    { threshold: 0.1 }
  );

  init();
  observer.observe(canvas.parentElement);

  window.addEventListener("resize", resize);
})();
