const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (e)=>{
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanElement = document.createElement("span");
    // The span will be created according to the mouse movement for display hearts
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanElement.style.width = size + 'px';
    spanElement.style.height = size + 'px';
    bodyElement.appendChild(spanElement);

    setTimeout(()=>{
      spanElement.remove();
    },3000)
})