let API = "https://www.jiantong.com.tw/test_web/Back/index.php/News/selectdata";

export const ArticleNumber = (number) => {
  let fd = new FormData();
  fd.append("Limit", number);
  return fetch(API, {
    method: "POST",
    body: fd,
  }).then((res) => res.json());
};

export const ArticleId = (number) => {
  let fdId = new FormData();
  fdId.append("Id", number);
  return fetch(API, {
    method: "POST",
    body: fdId,
  }).then((res) => res.json());
};
