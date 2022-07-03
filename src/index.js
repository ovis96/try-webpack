import _ from "lodash";
import "./style.css";
import imageUrl from "../asset/image.png";

const component = () => {
  const helloDiv = document.createElement("div");
  helloDiv.innerHTML = _.join(
    ["<h1> Hello from Webpack! </h1>", "<p> Webpack is in the process! </p>"],
    ""
  );
  return helloDiv;
};

const googleLink = () => {
  const link = document.createElement("a");
  link.innerHTML = "Go to Google.com";
  link.href = "https://www.google.com";
  link.target = "_blank";
  link.classList.add("google-link");
  return link;
};

const imageComponent = () => {
  const img = document.createElement("img");
  img.src = imageUrl;
  return img;
};

document.body.appendChild(component());
document.body.appendChild(googleLink());
document.body.appendChild(imageComponent());
