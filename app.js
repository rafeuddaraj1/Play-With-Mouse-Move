const displayOne = document.getElementById("background-1");
const displayTwo = document.getElementById("background-2");
const colorCodeY = document.getElementById("color-codeY");
const colorCodeX = document.getElementById("color-codeX");
const mouseMove = document.getElementById("mouse-move");
const copyY = document.getElementById("copyY");
const copyX = document.getElementById("copyX");
mouseMove.addEventListener("mousemove", function (event) {
  displayOne.style.background = `#${event.clientX}`;
  displayTwo.style.background = `#${event.clientY}`;
  colorCodeY.innerHTML = `#${event.clientX}`;
  colorCodeX.innerHTML = `#${event.clientY}`;
  colorCodeX.value = `#${event.clientY}`;
  colorCodeY.value = `#${event.clientX}`;
});

copyX.addEventListener("click", function () {
  copy(colorCodeX, copyX);
});
copyY.addEventListener("click", function () {
  copy(colorCodeY, copyY);
});

function copy(colorCode, target) {
  colorCode.select();
  document.execCommand("copy");
  target.innerHTML = "Copied Color";
  setTimeout(() => {
    target.innerHTML = "Copy Color";
  }, 2000);
}

// Adding Preview Section

const preview = document.getElementById("preview");
const previewCopy = document.getElementById("preview-copy");
const previewDiv = document.getElementById("preview-div");
const test = document.getElementById("test");
const colorCode = document.getElementById("color-code");
const previewBtn = document.getElementById("preview-btn");
const resetBtn = document.getElementById("reset-btn");
test.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (e.target.value === "") {
      return alert("Enter Color Code");
    } else {
      if (e.target.value.search("#") === 0) {
        previewDiv.style.backgroundColor = e.target.value.toLowerCase();
        colorCode.value = e.target.value.toLowerCase();
        colorCode.style.display = "block";
        preview.textContent = "Preview Live";
        previewCopy.style.display = "block";
        previewCopy.addEventListener("click", function () {
          colorCode.select();
          document.execCommand("copy");
          previewCopy.textContent = "Copied";
          setTimeout(() => {
            previewCopy.textContent = "Copy";
          }, 2000);
        });
        e.target.value = "";
      } else {
        alert(
          `First Index Should be # and type "${e.target.value}". "example #${e.target.value}"`
        );
      }
    }
  }
});

previewBtn.addEventListener("click", function () {
  if (test.value === "") {
    alert(`There Are NO entry`);
  } else if (test.value.search("#") !== 0) {
    alert(
      `First Index Should be # and type "${test.value}". "example #${test.value}"`
    );
  } else {
    previewDiv.style.backgroundColor = test.value;
    previewCopy.style.display = "block";
    colorCode.style.display = "block";
    colorCode.value = test.value;
    preview.innerText = "Preview Live";
    test.value = "";
    previewCopy.addEventListener("click", function () {
      colorCode.select();
      document.execCommand("copy");
      colorCode.innerText = "Copied";
      setTimeout(() => {
        colorCode.innerText = "Copy";
      }, 2000);
    });
  }
});
resetBtn.addEventListener("click", function () {
  preview.innerText = "Preview";
  colorCode.style.display = "none";
  previewCopy.style.display = "none";
  test.value = "";
  previewDiv.style.backgroundColor = "#fff";
});
