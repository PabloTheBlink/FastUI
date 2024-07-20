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
    if (document.querySelector('meta[name="theme-color"]')) document.querySelector('meta[name="theme-color"]').setAttribute("content", "#444343");
    if (document.querySelector('meta[name="msapplication-TileColor"]')) document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#444343");
  } else {
    document.documentElement.removeAttribute("dark");
    if (document.querySelector('meta[name="theme-color"]')) document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fff");
    if (document.querySelector('meta[name="msapplication-TileColor"]')) document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#fff");
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
