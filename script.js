const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));
function showGioHang() {
    var sidecart = document.querySelector('.sidecart');
    sidecart.classList.toggle('slide-out');
  }
