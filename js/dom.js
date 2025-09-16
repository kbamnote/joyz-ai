// dom.js
// DOM helper to create elements easily

/**
 * Create a DOM element with optional classes and text
 */
export function createElement(tag, className = "", text = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
