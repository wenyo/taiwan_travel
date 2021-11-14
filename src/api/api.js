import axios from "axios";
import jsSHA from "jssha";

function getAuthorizationHeader() {
  let AppID = "366fbf64aebc45ff8f04c809aac8a4f7";
  let AppKey = "3oobkEhk3fl7O850tWUtCsOKpvI";
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}

const TDXRequest = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
  headers: getAuthorizationHeader(),
});

const TDXRequestGet = (path) =>
  TDXRequest.get(path)
    .then((res) => res.data)
    .catch((error) => console.error(error));

export const getScenicSpot = ({ city = "", name = "", count = 30 }) =>
  TDXRequestGet(
    `ScenicSpot/${city}?$filter=contains(Name,'${name}')&$top=${count}&$format=JSON`
  );

export const getActivity = ({ city = "", name = "", count = 4 }) =>
  TDXRequestGet(
    `Activity/${city}?$filter=contains(Name,'${name}')&$top=${count}&$format=JSON`
  );

export const getRestaurant = ({ city = "", name = "", count = 10 }) =>
  TDXRequestGet(
    `Restaurant/${city}?$filter=contains(Name,'${name}')&$top=${count}&$format=JSON`
  );

export const getHotel = ({ city = "", name = "", count = 10 }) =>
  TDXRequestGet(
    `Hotel/${city}?$filter=contains(Name,'${name}')&$top=${count}&$format=JSON`
  );
