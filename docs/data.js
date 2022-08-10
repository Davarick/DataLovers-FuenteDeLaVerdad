export const sortDataAndClone = (dataInside) => {
  dataInside.forEach(item => cloner(item));
}

let firstDiv = document.getElementById("cloneSection");
export const cloner = (itemData) => {
  let secondDiv = firstDiv.cloneNode(true);
  secondDiv.children[1].src = itemData.img;
  secondDiv.children[0].innerHTML = itemData.name;
  secondDiv.id = itemData.id;
  secondDiv.addEventListener('click', function () { dataWindow(secondDiv.id); });
  document.getElementById('bigDivs').appendChild(secondDiv);
  secondDiv.style.display = 'block';
}

export const emptyScreenJean = () => {
  const removeSection = document.getElementById("bigDivs")
  removeSection.parentNode.removeChild(removeSection)
  const newDiv = document.createElement("div");
  newDiv.id = "bigDivs"
  document.body.appendChild(newDiv)
} 

export const emptyScreenRos = () => {
  let allData = document.getElementsByClassName("sectionToClone");
  while (allData.length > 0) allData[0].remove();
}


