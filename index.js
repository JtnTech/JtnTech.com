
  const loginBtn = document.querySelector(".user-profile");
  const loginBox = document.querySelector(".login-container");

  loginBtn.addEventListener("click", () => {
    loginBox.classList.toggle("show");
  });

 const box = document.querySelector(".skew-box");
    const glow = document.querySelector(".glow");

    box.addEventListener("mousemove", (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`;

      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;
      box.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });

    box.addEventListener("mouseleave", () => {
      box.style.transform = "rotateY(0deg) rotateX(0deg)";
      glow.style.transform = "translate(-100px, -100px)";
    });


    // 6th section
    window.addEventListener("scroll", () => {
  document.querySelectorAll(".project-box").forEach((box) => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) box.classList.add("show");
  });
});
