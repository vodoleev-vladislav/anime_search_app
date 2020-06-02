export const getAltTitles = ({ titles, canonicalTitle }) => {
  const altTitles = Object.keys(titles).reduce((result, key) => {
    if (
      titles[key] === canonicalTitle ||
      key.includes("ja") ||
      result.map((item) => item.title).includes(titles[key])
    ) {
      return result;
    }
    return result.concat({ lang: key, title: titles[key] });
  }, []);
  console.log(altTitles);
  return altTitles;
};

export const shortenTitle = (title) => {
  if (title.length > 40) {
    console.log(title);
    return title
      .split(" ")
      .filter((word, index, list) => index < list.length - 2)
      .concat("...")
      .join(" ");
  }
  return title;
};

export const formatDate = (date) => {
  const startDate = new Date(date);
  const formattedDate = startDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formattedDate;
};
