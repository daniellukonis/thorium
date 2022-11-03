
function textMatchAll (text, regexp) {
  return [...text.matchAll(new RegExp(regexp, 'g'))]
}

export { textMatchAll }
