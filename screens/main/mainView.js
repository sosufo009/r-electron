document.addEventListener("DOMContentLoaded", () => {
  // window.bridge.replaceText(replaceText);
  window.bridge.updateMessage(updateMessage);
});

function updateMessage(event, message) {
  console.log("message logged in view");
  const elemE = document.getElementById("message");
  elemE.innerHTML = message;
  // replaceText();
  // console.log("123");
  // for (const dependency of ['chrome', 'node', 'electron']) {
  //   console.log("dependency", dependency);
  //   const element = document.getElementById(`${dependency}-version`)
  //   console.log("element", element);
  //   if (element) element.innerHtml = process.versions[dependency]
  // }

}

// function replaceText() {
//   console.log("replaceText");
//   for (const dependency of ['chrome', 'node', 'electron']) {
//     console.log("dependency", dependency);
//     const element = document.getElementById(`${dependency}-version`)
//     console.log("element", element);
//     if (element) element.innerHtml = process.versions[dependency]
//   }
// }
