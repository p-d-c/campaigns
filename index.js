var base = "https://raw.githubusercontent.com/p-d-c/sunday_ads/main/poem_line";
var suffix = ".svg";
for (var i = 1; i < 16; i++) {
  var url = base + i.toString() + suffix;
  const grid_item = document.createElement("object");
  grid_item.classList.add("centered");
  grid_item.setAttribute("width", "80%");
  grid_item.setAttribute("height", "80%");
  grid_item.setAttribute("type", "image/svg");
  grid_item.style.cursor = "pointer";
  grid_item.style.transition = "rotate 0.1s";
  const svg_image = document.createElement("img");
  grid_item.setAttribute("data", url);
  svg_image.setAttribute("src", url);
  svg_image.setAttribute("width", "80%");
  svg_image.setAttribute("height", "80%");
  svg_image.setAttribute("id", "poem_line" + i.toString());
  grid_item.appendChild(svg_image);
  document.body.appendChild(grid_item);
}

const grid_item = document.createElement("object");
grid_item.classList.add("grid_item");
grid_item.setAttribute("width", "80%");
grid_item.setAttribute("height", "80%");
grid_item.setAttribute("type", "image/png");
grid_item.style.cursor = "pointer";
grid_item.style.transition = "rotate 0.1s";
const svg_image = document.createElement("img");
const end = base + "16.png";
grid_item.setAttribute("data", end);
svg_image.setAttribute("src", end);
svg_image.setAttribute("width", "80%");
svg_image.setAttribute("height", "80%");
grid_item.appendChild(svg_image);
document.body.appendChild(grid_item);
