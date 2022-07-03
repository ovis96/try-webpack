import _ from "lodash";

const component = () => {
  const helloDiv = document.createElement("div");
  helloDiv.innerHTML = _.join(
    ["<p> Hello from Webpack! </p>", "Webpack is in the process!"],
    ""
  );
  return helloDiv;
};

const googleLink = () => {
  const link = document.createElement("a");
  link.innerHTML = "Go to Google.com";
  link.href = "https://www.google.com";
  link.target = "_blank";
  return link;
};

document.body.appendChild(component());
document.body.appendChild(googleLink());
