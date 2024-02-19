export function toggleDarkMode() {
  if (document.documentElement.hasAttribute("dark")) {
    setDarkMode(false);
  } else {
    setDarkMode(true);
  }
}

export function setDarkMode(dark_mode = true) {
  if (dark_mode) {
    document.documentElement.setAttribute("dark", "");
  } else {
    document.documentElement.removeAttribute("dark");
  }
}

const runColorMode = (fn) => {
  if (!window.matchMedia) {
    return;
  }

  const query = window.matchMedia("(prefers-color-scheme: dark)");

  fn(query.matches);

  query.addEventListener("change", (event) => fn(event.matches));
};

runColorMode(setDarkMode);
