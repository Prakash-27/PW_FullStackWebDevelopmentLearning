const nav = document.querySelector("#nav");

// duplicate and insert
const duplicate = nav.cloneNode(true);

// make sure it has a unique ID
duplicate.id = "duplicate-nav";

// Hide the duplicate from screen reader users
duplicate.setAttribute("aria-hidden", true);

nav.parentNode.insertBefore(duplicate, nav.nextSibling);

nav.addEventListener("click", (e) => {
  // target is reliable as the SVG icons have `pointer-events: none`
  const link = e.target;

  // the magic math for figuring out the new clip path.
  const { offsetLeft, offsetWidth } = link;
  const clipLeft = offsetLeft;
  const clipRight = offsetLeft + offsetWidth;
  duplicate.style.clipPath = `inset(0 ${Number(100 - (clipRight / duplicate.offsetWidth) * 100).toFixed()}% 0 ${Number((clipLeft / duplicate.offsetWidth) * 100).toFixed()}% round 1rem)`;
});