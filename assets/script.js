// 🌙 Dark mode toggle for entire page
const toggle = document.getElementById("dark-mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🔐 Login modal elements
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeLogin = document.getElementById("close-login");
const modalDarkToggle = document.getElementById("modal-dark-toggle");

// 📝 Register modal elements
const openRegisterBtn = document.getElementById("open-register");
const registerModal = document.getElementById("register-modal");
const closeRegister = document.getElementById("close-register");
const backToLogin = document.getElementById("back-to-login");
const modalRegisterToggle = document.getElementById("modal-dark-toggle-register");

// ✨ Modal animation helpers
function animateModalOut(modal) {
  const card = modal.querySelector(".login-card");
  card.classList.add("modal-animate-out");
  setTimeout(() => {
    modal.classList.add("hidden");
    card.classList.remove("modal-animate-out");
  }, 300);
}

function animateModalIn(modal) {
  modal.classList.remove("hidden");
  const card = modal.querySelector(".login-card");
  card.classList.add("modal-animate-in");
  setTimeout(() => {
    card.classList.remove("modal-animate-in");
  }, 400);
}

// 🔓 Login modal open/close
loginBtn.addEventListener("click", () => {
  animateModalIn(loginModal);
});

closeLogin.addEventListener("click", () => {
  animateModalOut(loginModal);
});

// 🌘 Dark toggle inside login modal
modalDarkToggle.addEventListener("change", () => {
  const loginCard = document.querySelector("#login-modal .login-card");
  loginCard.classList.toggle("dark-mode");
});

// 🧾 Switch to Register modal
if (openRegisterBtn) {
  openRegisterBtn.addEventListener("click", () => {
    animateModalOut(loginModal);
    setTimeout(() => {
      animateModalIn(registerModal);
    }, 300);
  });
}

// ❌ Close Register modal
if (closeRegister) {
  closeRegister.addEventListener("click", () => {
    animateModalOut(registerModal);
  });
}

// 🔙 Back to Login from Register
if (backToLogin) {
  backToLogin.addEventListener("click", () => {
    animateModalOut(registerModal);
    setTimeout(() => {
      animateModalIn(loginModal);
    }, 300);
  });
}

// 🌗 Dark toggle inside register modal
if (modalRegisterToggle) {
  modalRegisterToggle.addEventListener("change", () => {
    const registerCard = document.querySelector("#register-modal .login-card");
    registerCard.classList.toggle("dark-mode");
  });
}

