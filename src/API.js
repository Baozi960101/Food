const API = "http://food.argus.work/venus/index.php/GetData/getData";

function getDay(day) {
  let today = new Date();
  let targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
  today.setTime(targetday_milliseconds); //關鍵代碼

  let tYear = today.getFullYear();
  let tMonth = today.getMonth();
  let tDate = today.getDate();
  tMonth = doHandleMonth(tMonth + 1);
  tDate = doHandleMonth(tDate);
  return tYear + "-" + tMonth + "-" + tDate;
}
function doHandleMonth(month) {
  let m = month;
  if (month.toString().length === 1) {
    m = "0" + month;
  }
  return m;
}

let nowDate = getDay(0);

export const FoodApi = `https://argus.work/argus/public/api/argus?key=美食&start_date=2021-08-30&end_date=${nowDate}&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk`;

export const TravelApi = `https://argus.work/argus/public/api/argus?key=旅遊&start_date=2021-08-30&end_date=${nowDate}&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk`;

export const RestaurantApi = `https://argus.work/argus/public/api/argus?key=餐廳&start_date=2021-08-30&end_date=${nowDate}&crawler_Web=ETtoday,Ptt,Dcard,Ctee,Chinatimes,Udn,Storm,Mirrormedia,Newtalk`;

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
