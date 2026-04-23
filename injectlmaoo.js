(() => {
if (window.__INJECTION__) return;
window.__INJECTION__ = true; //i did like a infdef in c header files so that my script doesnt get ran multiple times and mess itself up like redefining consts.


let bar = document.createElement("div");
bar.innerText = "You lwk gotta fix this site man.....";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.width = "100%";
bar.style.background = "#222";
bar.style.color = "white";
bar.style.padding = "10px 16px";
bar.style.fontFamily = "sans-serif";
bar.style.fontSize = "14px";
bar.style.zIndex = "9999";
bar.style.display = "flex";
document.body.appendChild(bar)
//if you are seeing this you lwk gotta fix the site. line 1494 in your app.js allows for me to do xml injection straight into your website for anyone to see. so badddddd things could happen.
// i could inject any sort of script and have full control over the sites html, i could rewrite anything. fix it by changing it to set it to text, not innerHTML.

//you might not see this though lmao
})();
