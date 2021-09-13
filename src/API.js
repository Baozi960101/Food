const API = "http://food.argus.work/venus/index.php/GetData/getData";
const Source_API = `https://argus.work/argus`;

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
let LastNowDate = getDay(-7);

export const FoodApi = `${Source_API}/api/v1/data?key=美食&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=buzzorange,cmmedia,ebc,ftv,ettoday,setn,dcard,ptt`;

export const TravelApi = `${Source_API}/api/v1/data?key=旅遊&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=buzzorange,cmmedia,ebc,ftv,ettoday,setn,dcard,ptt`;

export const RestaurantApi = `${Source_API}/api/v1/data?key=餐廳&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=buzzorange,cmmedia,ebc,ftv,ettoday,setn,dcard,ptt`;

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
