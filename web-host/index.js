document.getElementById("load-iframe").addEventListener("click", () => {
  const iframeWrap = document.getElementById("iframe-wrap");
  const iframe = document.createElement("iframe");
  iframe.src = document.getElementById("link").value;
  iframe.allow = document.getElementById("allow").value;
  iframeWrap.innerHTML = "";
  iframeWrap.appendChild(iframe);
});
