function textMatchAll (text, regexp) {
  return [...text.matchAll(new RegExp(regexp, 'g'))]
}

function normalizeRegExp (text) {

  if(text.length < 3){
    return text
  }

  return new RegExp(text)
}

export { textMatchAll, normalizeRegExp }
