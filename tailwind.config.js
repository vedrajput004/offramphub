/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#7ACAF1",
        woodSmoke: "#0B0C14",
        cinder: "#151515",
        balticSea: "#262626",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"]
      },
      fontSize: {
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
      },
      padding: {
        0: "0px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
        105: "105px",
        110: "110px",
        115: "115px",
        120: "120px",
        125: "125px",
        130: "130px",
        135: "135px",
        140: "140px",
        145: "145px",
        150: "150px"
      },
      spacing: {
        0: "0px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
        105: "105px",
        110: "110px",
        115: "115px",
        120: "120px",
        125: "125px",
        130: "130px",
        135: "135px",
        140: "140px",
        145: "145px",
        150: "150px"
      },
      margin: {
        auto: "auto",
        0: "0px",
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
        105: "105px",
        110: "110px",
        115: "115px",
        120: "120px",
        125: "125px",
        130: "130px",
        135: "135px",
        140: "140px",
        145: "145px",
        150: "150px"
      },
      borderRadius: {
        100: "100px"
      },
      screens: {
        "xlscreen": { "max": "1199px" },
        "lgscreen": { "max": "1024px" },
        "xlscreen2": { "max": "1279px" },
        "smscreen": { "max": "639px" },
        "smscreen2": { "max": "575px" },
        "mdscreen": { "max": "767px" },
        "mdscreen2": { "max": "991px" },
        "md2": { "min": "992px" },
      }
    },
  },
  plugins: [],
}

