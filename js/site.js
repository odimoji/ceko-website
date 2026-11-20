// Mobile navigation
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });
}

// Photo lightbox: any link with data-zoom opens its image full screen
const zoomLinks = Array.from(document.querySelectorAll("a[data-zoom]"));
if (zoomLinks.length && typeof HTMLDialogElement !== "undefined") {
  const box = document.createElement("dialog");
  box.className = "lightbox";
  box.setAttribute("aria-label", "Photo viewer");
  box.innerHTML =
    '<div class="stage"><img alt=""></div>' +
    '<p class="caption"></p>' +
    '<button class="close" type="button" aria-label="Close photo">&times;</button>' +
    '<button class="prev" type="button" aria-label="Previous photo">&lsaquo;</button>' +
    '<button class="next" type="button" aria-label="Next photo">&rsaquo;</button>';
  document.body.appendChild(box);

  const img = box.querySelector("img");
  const caption = box.querySelector(".caption");
  let current = 0;

  const show = (i) => {
    current = (i + zoomLinks.length) % zoomLinks.length;
    const link = zoomLinks[current];
    const text = link.querySelector("img")?.alt || "";
    img.src = link.href;
    img.alt = text;
    caption.textContent = text;
  };

  zoomLinks.forEach((link, i) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      show(i);
      box.showModal();
    });
  });

  box.querySelector(".close").addEventListener("click", () => box.close());
  box.querySelector(".prev").addEventListener("click", () => show(current - 1));
  box.querySelector(".next").addEventListener("click", () => show(current + 1));
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("stage")) box.close();
  });
  box.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}
