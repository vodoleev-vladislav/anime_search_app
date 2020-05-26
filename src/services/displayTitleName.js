export default (titles) => {
  const nameLocals = Object.keys(titles);
  if (nameLocals.length === 1) {
    return titles[nameLocals[0]];
  }
  if (titles.en && titles.en_jp) {
    if (titles.en === titles.en_jp) return titles.en;
    return `${titles.en} / ${titles.en_jp}`;
  }
};
