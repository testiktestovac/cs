window.onload = function() {
    let styles = document.createElement("style");
    styles.type = "text/css";
    styles.innerHTML = "@keyframes test {0%   {background-color: red;}        25%  {background-color: yellow;}        50%  {background-color: blue;}        100% {background-color: green;}        }";
    document.getElementsByTagName("head")[0].appendChild(styles);
    let box = document.createElement("div");
    box.style.width = "500px";
    box.style.height = "500px";
    box.style.position = "absolute";
    box.style.top = "50%";
    box.style.left = "50%";
    box.style.transform = "translate(-50%, -50%)";
    box.style.animation = "test 1s infinite";
    document.getElementsByTagName("body")[0].appendChild(box);
}
