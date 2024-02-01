import { argbFromHex, themeFromSourceColor, applyTheme } from "@material/material-color-utilities";

// Функция для обработки изменения цветовой схемы
function handleColorSchemeChange(event) {
  const systemDark = event.matches;
  applyTheme(theme, { target: document.body, dark: systemDark });
}

// Получите начальное значение цветовой схемы
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Получите тему из цвета и примените ее
const theme = themeFromSourceColor(argbFromHex('#0969AE'), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

applyTheme(theme, { target: document.body, dark: systemDark });

// Добавьте слушатель событий для изменения цветовой схемы
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleColorSchemeChange);
