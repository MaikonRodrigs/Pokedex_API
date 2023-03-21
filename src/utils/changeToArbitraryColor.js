export const changeToArbitraryColor = () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.borderRadius = "16px";
  document.body.style.transition = "all .7s ease-in-out";
  document.body.style.animation = " 1s cubic-bezier(0, 0.2, 0.8, 1) infinite";
};