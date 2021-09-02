const API = "http://food.argus.work/venus/index.php/GetData/getData";
export const FoodApi =
  "https://argus.work/argus/public/api/argus?key=美食&start_date=2021-08-30&end_date=2021-09-01&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk";
export const SportsApi =
  "https://argus.work/argus/public/api/argus?key=運動&start_date=2021-08-30&end_date=2021-09-01&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk";
export const RestaurantApi =
  "https://argus.work/argus/public/api/argus?key=餐廳&start_date=2021-08-30&end_date=2021-09-01&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk";

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
