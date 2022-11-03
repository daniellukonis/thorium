
function textMatchAll (text, regexp) {
  return [...text.matchAll(new RegExp(regexp, 'g'))]
}

function escapeRegExp (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export { textMatchAll, escapeRegExp }
