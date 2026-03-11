const btn = document.querySelector("#changeTextBtn");
if (btn) {
  btn.addEventListener("click", () => {
    const oldText = btn.textContent;
    btn.textContent = "ТИ НАТИСНУВ(ЛА) МЕНЕ!! ❤";
    setTimeout(() => (btn.textContent = oldText), 1000);
  });
}
