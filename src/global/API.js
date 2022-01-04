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
let LastNowDate = getDay(-30);
//等等改-90

export const AloneFoodApi = (id) => {
  return `${main_api}/${id}`;
};

const main_api = `https://eatravel.info/eatravel/api/v1/data`;

export const SourceApi = `${main_api}/showWeb`;

export function NewsTodayApi(sourse, name) {
  return `${main_api}?start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}&crawler_Cate=${name}`;
}

export function NewsApi(sourse) {
  return `${main_api}?start_date=${LastNowDate}&end_date=${nowDate}&crawler_Web=${sourse}`;
}
