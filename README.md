# FastUI

## Descripción

FastUI es un fichero CSS diseñado para proporcionar estilos agradables de manera rápida y sencilla para tus proyectos personales. Con un enfoque en la simplicidad y la velocidad de implementación, este archivo CSS te permitirá mejorar la apariencia de tu aplicación web en poco tiempo.

## Uso Rápido

```css
html:root {
  --background-color: #e8e8e8;
  --white: white;
  --black: rgb(57, 57, 57);
  --primary-color: #3d4c95;
  --secondary-color: #7c91c9;
  --shadow: #e9e9e9;
}

html[dark]:root {
  --background-color: #232e30;
  --white: rgb(57, 57, 57);
  --black: white;
  --primary-color: #3d4c95;
  --secondary-color: #7c91c9;
  --shadow: #eee;
}
```

```HTML
<link rel="stylesheet" href="https://cdn.devetty.es/FastUI/css">
```

```javascript
import { toggleDarkMode, setDarkMode } from "https://cdn.devetty.es/FastUI/js";

toggleDarkMode(); // change between light and dark

setDarkMode(true); // set dark mode
setDarkMode(false); // set light mode
```
