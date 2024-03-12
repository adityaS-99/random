function clearCode() {
  let preElement = document.getElementById('pre');
  preElement.innerText = ""; 

  

  setTimeout(function () {
    let lines = preElement.dataset.content.split('\n'); 
    preElement.innerText = ""; 

    let index = 0;
    let interval = setInterval(function () {
      if (index < lines.length) {
        preElement.innerText += lines[index] + '\n';
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); 
  }, 2000); 

  
}



function copyCode() {
  const codeText = document.querySelector('.code-box pre').innerText;
  navigator.clipboard.writeText(codeText).then(() => {
  }).catch((err) => {
    console.error("Failed to copy code:", err);
  });
}

let container = document.querySelector('.container');
let codeBox = document.getElementById('code-box');
let buttonsContainer = document.getElementById('buttons-container');
let settingsIcon = document.getElementById('settings-icon');
let minimizeButton = document.querySelector('.options .minimize');
let crossButton = document.querySelector('#cross');


function toggleCodeVisibility() {
  let container = document.querySelector('.container');
  let codeBox = document.getElementById('code-box');
  let minimizeButton = document.querySelector('.options .minimize');

  if (container && codeBox && minimizeButton) {
    if (container.style.display === 'none' || codeBox.style.display === 'none') {
      showCodeBox();
    } else {
        parent.postMessage('minimize', '*')
      console.log("minimize");
    }
  }
}

function visibilityNone() {
  
  parent.postMessage('cross', '*')
  console.log('cross');
  
}

crossButton.addEventListener('click', visibilityNone);
minimizeButton.addEventListener('click', toggleCodeVisibility);
settingsIcon.addEventListener('click', toggleCodeVisibility);

console.log(settingsIcon)
clearCode();
