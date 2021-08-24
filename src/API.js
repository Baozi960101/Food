let API = "http://food.argus.work/venus/index.php/GetData/getData";

export const ArticleNumber = (number) => {
  let fd = new FormData();
  fd.append("limit", number);
  fd.append("type", "news");
  return fetch(API, {
    method: "POST",
    body: fd,
  }).then((res) => res.json());
};

export const ArticleId = (number) => {
  let fdId = new FormData();
  fdId.append("id", number);
  return fetch(API, {
    method: "POST",
    body: fdId,
  }).then((res) => res.json());
};
