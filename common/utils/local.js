export  const getLocalJSON = (localName) => {
  let localStr = window.localStorage.getItem(localName)
  return JSON.parse(localStr)
}
export const setLocalJSON = (localName, json) => {
  window.localStorage.setItem(localName, JSON.stringify(json))
}
export const getLocalStr = (localName) => {
  return window.localStorage.getItem(localName)
}
export const setLocalStr = (localName, str) => {
  window.localStorage.setItem(localName, str)
}
