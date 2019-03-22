let dateToString = (date)=>{
  let h = date.getHours().toString();
  let m = date.getMinutes().toString();
  let s = date.getSeconds().toString();

  if (h.length < 2) {
    h = `0${h}`;
  }
  if (m.length < 2) {
    m = `0${m}`;
  }
  if (s.length < 2) {
    s = `0${s}`;
  }

  return `${h}:${m}:${s}`;
}

export {
  dateToString,
};

