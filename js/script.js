
const initialLoader = document.getElementById("loader");

if (
    initialLoader &&
    !initialLoader.classList.contains("profile-loader") &&
    sessionStorage.getItem("presentationLoaded") === "true"
) {
    initialLoader.classList.add("hidden");
}

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (!loader || loader.classList.contains("profile-loader")) return;

    if (sessionStorage.getItem("presentationLoaded") === "true") {
        loader.classList.add("hidden");
        return;
    }

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 650);
});

const selectorBtn = document.getElementById("selectorBtn");
const selectorMenu = document.getElementById("selectorMenu");

if (selectorBtn && selectorMenu) {
    selectorBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectorMenu.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        selectorMenu.classList.remove("active");
    });
}

const revealContentBtn = document.querySelector(".reveal-content-btn");
const contentTarget = document.getElementById("contenido");

if (document.body.classList.contains("block-page") && window.location.hash === "#contenido") {
    document.body.classList.add("content-open");
}

if (revealContentBtn && contentTarget) {
    revealContentBtn.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.add("content-open");
        contentTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

const profileCards = document.querySelectorAll(".profile-card");
const profilesScreen = document.getElementById("profilesScreen");
const profileLoader = document.querySelector(".profile-loader");

profileCards.forEach((card) => {
  card.addEventListener("click", () => {
    profilesScreen.style.display = "none";
    sessionStorage.setItem("presentationLoaded", "true");

    profileLoader.classList.remove("hidden");
    profileLoader.classList.add("active");

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1600);
  });
});
