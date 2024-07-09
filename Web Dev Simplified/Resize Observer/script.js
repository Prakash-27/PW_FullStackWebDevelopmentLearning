const box = document.querySelector(".box");
const container = document.querySelector(".container");

const observer = new ResizeObserver((entries, o) => {
    // console.log(entries);
    const boxElement = entries[0];
    const isSmall = boxElement.contentRect.width < 150;
    boxElement.target.style.backgroundColor = isSmall ? "blue" : "red";

    entries.forEach(entry => {
        console.log(entry.borderBoxSize[0].blockSize);
        console.log(entry.contentBoxSize[0].blockSize);
        console.log(entry.devicePixelContentBoxSize[0].blockSize);
        console.log(entry.borderBoxSize[0].inlineSize);
        console.log(entry.contentBoxSize[0].inlineSize);
        console.log(entry.devicePixelContentBoxSize[0].inlineSize);
    });

    console.log(o === observer); // true

    entries.forEach(entry => {
        // console.log(entry);
        if (entry.contentRect.width < 150) {
            o.unobserve(entry.target);
            entry.target.remove();
        }
    });
});

observer.observe(box);
observer.observe(container);