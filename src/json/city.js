import IMG_taipei from "../assets/img/city/Taipei.jpg"
import IMG_newtaipei from "../assets/img/city/NewTaipei.jpg"
import IMG_taoyuan from "../assets/img/city/Taoyuan.jpg"
import IMG_taichung from "../assets/img/city/Taichung.jpg"
import IMG_tainan from "../assets/img/city/Tainan.jpg"
import IMG_kaohsiung from "../assets/img/city/Kaohsiung.jpg"
import IMG_hsinchu from "../assets/img/city/Hsinchu.jpg"
import IMG_nantoucounty from "../assets/img/city/NantouCounty.jpg"
import IMG_chiayicounty from "../assets/img/city/ChiayiCounty.jpg"
import IMG_pingtungcounty from "../assets/img/city/PingtungCounty.jpg"
import IMG_yilancounty from "../assets/img/city/YilanCounty.jpg"
import IMG_hualiencounty from "../assets/img/city/HualienCounty.jpg"
import IMG_taitungcounty from "../assets/img/city/TaitungCounty.jpg"
import IMG_kinmencounty from "../assets/img/city/KinmenCounty.jpg"

const city_info = {
  taipei: {
    ch: "臺北市",
    en: "Taipei",
    img: IMG_taipei
  },
  newtaipei: {
    ch: "新北市",
    en: "NewTaipei",
    img: IMG_newtaipei
  },
  taoyuan: {
    ch: "桃園市",
    en: "Taoyuan",
    img: IMG_taoyuan
  },
  taichung: {
    ch: "臺中市",
    en: "Taichung",
    img: IMG_taichung
  },
  tainan: {
    ch: "臺南市",
    en: "Tainan",
    img: IMG_tainan
  },
  kaohsiung: {
    ch: "高雄市",
    en: "Kaohsiung",
    img: IMG_kaohsiung
  },
  keelung: {
    ch: "基隆市",
    en: "Keelung",
    img: null
  },
  hsinchu: {
    ch: "新竹市",
    en: "Hsinchu",
    img: IMG_hsinchu
  },
  hsinchucounty: {
    ch: "新竹縣",
    en: "HsinchuCounty",
    img: null
  },
  miaolicounty: {
    ch: "苗栗縣",
    en: "MiaoliCounty",
    img: null
  },
  changhuacounty: {
    ch: "彰化縣",
    en: "ChanghuaCounty",
    img: null
  },
  nantoucounty: {
    ch: "南投縣",
    en: "NantouCounty",
    img: IMG_nantoucounty
  },
  yunlincounty: {
    ch: "雲林縣",
    en: "YunlinCounty",
    img: null
  },
  chiayicounty: {
    ch: "嘉義縣",
    en: "ChiayiCounty",
    img: IMG_chiayicounty
  },
  chiayi: {
    ch: "嘉義市",
    en: "Chiayi",
    img: null
  },
  pingtungcounty: {
    ch: "屏東縣",
    en: "PingtungCounty",
    img: IMG_pingtungcounty
  },
  yilancounty: {
    ch: "宜蘭縣",
    en: "YilanCounty",
    img: IMG_yilancounty
  },
  hualiencounty: {
    ch: "花蓮縣",
    en: "HualienCounty",
    img: IMG_hualiencounty
  },
  taitungcounty: {
    ch: "臺東縣",
    en: "TaitungCounty",
    img: IMG_taitungcounty
  },
  kinmencounty: {
    ch: "金門縣",
    en: "KinmenCounty",
    img: IMG_kinmencounty
  },
  penghucounty: {
    ch: "澎湖縣",
    en: "PenghuCounty",
    img: null
  },
  lienchiangcounty: {
    ch: "連江縣",
    en: "LienchiangCoun",
    img: null
  },
};

const city_key = Object.keys(city_info);

export { city_key, city_info };
