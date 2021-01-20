export const replaceArticle = (name) => {
    let k = 0;
    let arr = ["a", "e", "i", "o"];

    for (let i = 0; i <= arr.length; i++) {
      if (name[0] === arr[i]) {
        k++;
      }
    }

    return k !== 0 ? "an " + name : "a " + name;
  };

