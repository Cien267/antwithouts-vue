/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        9: '9',
        99: '99',
        999: '999',
        9999: '9999',
        99999: '99999'
      },
      lineHeight: {
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px'
      },
      fontFamily: {
        inter: ['Inter'],
        roboto: ['Roboto']
      }
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      23: '23px',
      24: '24px',
      25: '25px',
      26: '26px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      40: '40px',
      44: '44px',
      48: '48px',
      50: '50px',
      56: '56px',
      60: '60px',
      70: '70px',
      80: '80px',
      84: '84px',
      90: '90px',
      94: '94px',
      95: '95px',
      100: '100px',
      102: '102px',
      120: '120px',
      130: '130px',
      132: '132px',
      134: '134px',
      137: '137px',
      150: '150px',
      160: '160px',
      170: '170px',
      180: '180px',
      200: '200px',
      214: '214px',
      230: '230px',
      250: '250px',
      254: '254px',
      276: '276px',
      300: '300px',
      311: '311px',
      318: '318px',
      338: '338px',
      350: '350px',
      360: '360px',
      390: '390px',
      410: '410px',
      440: '440px',
      452: '452px',
      500: '500px',
      544: '544px',
      564: '564px',
      600: '600px',
      602: '602px',
      605: '605px',
      608: '608px',
      621: '621px',
      678: '678px',
      780: '780px',
      457: '457px',
      396: '396px',
      '1/10': '10%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '30%',
      '1/2': '50%',
      '3/5': '60%',
      '7/10': '70%',
      '4/5': '80%',
      0.85: '85%'
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      25: '25px',
      30: '30px',
      1.4: '1.4rem'
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700'
    },
    backgroundColor: {
      bgHoverGray: '#E8EAED'
    },
    colors: {
      colorGray: '#E8EAED'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px'
    },
    borderRadius: {
      3: '3px',
      4: '4px',
      5: '5px',
      10: '10px',
      15: '15px'
    },
    minHeight: {
      26: '26px',
      338: '338px'
    },
    maxHeight: {
      130: '130px',
      150: '150px',
      300: '300px',
      320: '320px',
      350: '350px',
      404: '404px',
      450: '450px',
      470: '470px',
      480: '480px',
      500: '500px'
    },
    maxWidth: {
      28: '28px',
      250: '250px',
      300: '300px'
    },
    minWidth: {
      80: '80px',
      90: '90px',
      250: '250px'
    },
    screens: {
      scr1280: '1280px',
      scr1366: '1366px',
      scr1920: '1920px'
    }
  },
  plugins: []
}
