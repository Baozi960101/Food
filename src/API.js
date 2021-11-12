const Source_API = `https://argus.work/argus/api/v1/data`;

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
let LastNowDate = getDay(0);
//等等改-90

let temporarySourse =
  "anntw,anue,chinatimes,cmmedia,cna,ebc,epochtimes,ettoday,ftv,gvm,ltn,mirrormedia,newtalk,nownews,rti,setn,storm,thenewslens,ttv,tvbs,udn,upmedia,yahoo,yam,reuters";

export const TodayFoodApi = `${Source_API}?key=美食&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const FoodApi = `${Source_API}?key=美食&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const TodayTravelApi = `${Source_API}?key=旅遊&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const TravelApi = `${Source_API}?key=旅遊&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const TodayRestaurantApi = `${Source_API}?key=餐廳&start_date=${nowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const RestaurantApi = `${Source_API}?key=餐廳&start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${temporarySourse}`;

export const AloneFoodApi = (id) => {
  return `${Source_API}/${id}`;
};
