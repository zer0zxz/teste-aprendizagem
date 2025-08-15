    document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;

    if (hash) {
      // Espera a página carregar antes de rolar
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  });
