export function saveToLocal(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function loadFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    console.error(e.message);
  }
}
