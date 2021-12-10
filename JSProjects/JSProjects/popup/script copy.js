const open = document.getElementById("open");
const close = document.getElementById("close");

const popup = document.getElementById("popup");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");

const book = document.getElementById("book");
const chart = document.getElementById("chart");
const cloud = document.getElementById("cloud");
const comment = document.getElementById("comment");

book.addEventListener('click', () => {
    popup.classList.toggle("active");
});

chart.addEventListener('click', () => {
    popup1.classList.toggle("active");
});
cloud.addEventListener('click', () => {
    popup2.classList.toggle("active");
});
comment.addEventListener('click', () => {
    popup3.classList.toggle("active");
});


/* close.addEventListener('click', () => {
    container.classList.remove("active");
}); */