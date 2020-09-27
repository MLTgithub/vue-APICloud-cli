/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const colors = {
  'red': {
    default: 'red',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
  },
  pink: {
    default: 'pink',
    '100': '#F8BBD0',
    '200': '#F48FB1',
    '300': '#F06292',
    '400': '#EC407A',
    '500': '#E91E63',
    '600': '#D81B60',
    '700': '#C2185B',
    '800': '#AD1457',
    '900': '#880E4F',
  },
  purple: {
    default: 'purple',
    '100': '#E1BEE7',
    '200': '#CE93D8',
    '300': '#BA68C8',
    '400': '#AB47BC',
    '500': '#9C27B0',
    '600': '#8E24AA',
    '700': '#7B1FA2',
    '800': '#6A1B9A',
    '900': '#4A148C',
  },
  'deep-purple': {
    default: '#673AB7',
    '100': '#D1C4E9',
    '200': '#B39DDB',
    '300': '#9575CD',
    '400': '#7E57C2',
    '500': '#673AB7',
    '600': '#5E35B1',
    '700': '#512DA8',
    '800': '#4527A0',
    '900': '#311B92',
  },
  indigo: {
    default: 'indigo',
    '100': '#C5CAE9',
    '200': '#9FA8DA',
    '300': '#7986CB',
    '400': '#5C6BC0',
    '500': '#3F51B5',
    '600': '#3949AB',
    '700': '#303F9F',
    '800': '#283593',
    '900': '#1A237E',
  },
  blue: {
    default: 'blue',
    '100': '#BBDEFB',
    '200': '#90CAF9',
    '300': '#64B5F6',
    '400': '#42A5F5',
    '500': '#2196F3',
    '600': '#1E88E5',
    '700': '#1976D2',
    '800': '#1565C0',
    '900': '#0D47A1',
  },
  'light-blue': {
    default: 'lightblue',
    '100': '#B3E5FC',
    '200': '#81D4FA',
    '300': '#4FC3F7',
    '400': '#29B6F6',
    '500': '#03A9F4',
    '600': '#039BE5',
    '700': '#0288D1',
    '800': '#0277BD',
    '900': '#01579B',
  },
  cyan: {
    default: 'cyan',
    '100': '#B2EBF2',
    '200': '#80DEEA',
    '300': '#4DD0E1',
    '400': '#26C6DA',
    '500': '#00BCD4',
    '600': '#00ACC1',
    '700': '#0097A7',
    '800': '#00838F',
    '900': '#006064',
  },
  teal: {
    default: 'teal',
    '100': '#B2DFDB',
    '200': '#80CBC4',
    '300': '#4DB6AC',
    '400': '#26A69A',
    '500': '#009688',
    '600': '#00897B',
    '700': '#00796B',
    '800': '#00695C',
    '900': '#004D40',
  },
  green: {
    default: 'green',
    '100': '#C8E6C9',
    '200': '#A5D6A7',
    '300': '#81C784',
    '400': '#66BB6A',
    '500': '#4CAF50',
    '600': '#43A047',
    '700': '#388E3C',
    '800': '#2E7D32',
    '900': '#1B5E20',
  },
  'light-greeen': {
    default: 'lightgreen',
    '100': '#DCEDC8',
    '200': '#C5E1A5',
    '300': '#AED581',
    '400': '#9CCC65',
    '500': '#8BC34A',
    '600': '#7CB342',
    '700': '#689F38',
    '800': '#558B2F',
    '900': '#33691E',
  },
  lime: {
    default: 'lime',
    '100': '#F0F4C3',
    '200': '#E6EE9C',
    '300': '#DCE775',
    '400': '#D4E157',
    '500': '#CDDC39',
    '600': '#C0CA33',
    '700': '#AFB42B',
    '800': '#9E9D24',
    '900': '#827717',
  },
  yellow: {
    default: 'yellow',
    '100': '#FFF9C4',
    '200': '#FFF59D',
    '300': '#FFF176',
    '400': '#FFEE58',
    '500': '#FFEB3B',
    '600': '#FDD835',
    '700': '#FBC02D',
    '800': '#F9A825',
    '900': '#F57F17',
  },
  amber: {
    default: '#FFC107',
    '100': '#FFECB3',
    '200': '#FFE082',
    '300': '#FFD54F',
    '400': '#FFCA28',
    '500': '#FFC107',
    '600': '#FFB300',
    '700': '#FFA000',
    '800': '#FF8F00',
    '900': '#FF6F00',
  },
  orange: {
    default: 'orange',
    '100': '#FFE0B2',
    '200': '#FFCC80',
    '300': '#FFB74D',
    '400': '#FFA726',
    '500': '#FF9800',
    '600': '#FB8C00',
    '700': '#F57C00',
    '800': '#EF6C00',
    '900': '#E65100',
  },
  'deep-orange': {
    default: '#FF5722',
    '100': '#FFCCBC',
    '200': '#FFAB91',
    '300': '#FF8A65',
    '400': '#FF7043',
    '500': '#FF5722',
    '600': '#F4511E',
    '700': '#E64A19',
    '800': '#D84315',
    '900': '#BF360C',
  },
  brown: {
    default: 'brown',
    '100': '#D7CCC8',
    '200': '#BCAAA4',
    '300': '#A1887F',
    '400': '#8D6E63',
    '500': '#795548',
    '600': '#6D4C41',
    '700': '#5D4037',
    '800': '#4E342E',
    '900': '#3E2723',
  },
  gray: {
    default: 'gray',
    '100': '#F5F5F5',
    '200': '#EEEEEE',
    '300': '#E0E0E0',
    '400': '#BDBDBD',
    '500': '#9E9E9E',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
  },
  'blue-gray': {
    default: '#607D8B',
    '100': '#CFD8DC',
    '200': '#B0BEC5',
    '300': '#90A4AE',
    '400': '#78909C',
    '500': '#607D8B',
    '600': '#546E7A',
    '700': '#455A64',
    '800': '#37474F',
    '900': '#263238',
  },
};

/**
 * @todo
 * @desc 根据提供的模板生成自定义样式所需要的数据
 * @param {*} template 
 * @param {*} start 
 * @param {*} end 
 * @param {*} baseValue 
 * @param {*} step 
 */
const styleData = function (template, start, end, baseValue = 1, step = 1) {
  const index = template.indexOf(':');
  let before = template.slice(0, index);
  let after = template.slice(index + 1);
  let tempObj = {};

  for (start; start <= end; start += step) {
    tempObj[before.replace(/\$/g, start)] = after.replace(/\$/g, start * baseValue);
  }
  // console.log(tempObj);
  return tempObj;
};

module.exports = {
  important: true,
  prefix: 'tw-',
  corePlugins: {
    // preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontSize: {
        '3xs': '.5rem',
        '2xs': '.625rem'
      },
      flexGrow: {
        // '2': '2'
        ...styleData('$:$', 2, 10),
      },
      borderRadius: {
        // 'px-5': '5px'
        ...styleData('px-$:$px', 5, 25, 1, 5),
      },
      spacing: {
        // 'px-2': '2px',
        ...styleData('px-$:$px', 2, 10),

        // '1': '0.25rem',
        ...styleData('$:$rem', 1, 10, 0.25),

        // '12': '3rem'
        ...styleData('$:$rem', 12, 300, 0.25, 2),
      },
      inset: {
        '1/2': '50%',
      },
      backgroundSize: {
        // 'w-1': '0.25rem auto',
        ...styleData('w-$:$rem 100%', 1, 10, 0.25),
        // 'w-12': '3rem auto',
        ...styleData('w-$:$rem 100%', 12, 100, 0.25, 2),

        // 'h-1': 'auto 0.25rem',
        ...styleData('h-$:100% $rem', 1, 10, 0.25),
        // 'h-12': 'auto 3rem'
        ...styleData('h-$:100% $rem', 12, 100, 0.25, 2),

        'w-full': '100% auto',
        'h-full': 'auto 100%',
        'full': '100% 100%',
      },
      //字体阴影 text-shadow-xs
      textShadow: {
        default: '0 2px 0 #000',
        xs: '0 0 2px rgba(0, 0, 0, .8)',
        sm: '0 0 4px rgba(0, 0, 0, .8)',
        lg: '0 0 6px rgba(0, 0, 0, .8)',
        xl: '0 0 8px rgba(0, 0, 0, .8)',
        none: 'none',
      },
      //文字截断 .clamp-1
      lineClamp: {
        ...styleData('$:$', 1, 5),
      },
    }
  },
  variants: {
    lineClamp: ["responsive"],
    // display: ['responsive', 'hover'],
    // whitespace: ['responsive'],
    // wordBreak: ['responsive'],
  },
  plugins: [
    require('tailwindcss-textShadow'),//文字阴影
    require('tailwindcss-line-clamp'), //文字截断
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/pages/**/*.vue",
      "./src/components/**/*.vue",
      './vue.config.js'
    ],
    // content: [
    //   './src/components/**/*.vue',
    //   './src/views/**/*.vue',
    //   './vue.config.js'
    // ],
    options: {
      whitelist: ["html", "body", "ol", "ul"],
      whitelistPatterns: [/^v-/, /^a-/, /^el-/, /^swiper-/],
      whitelistPatternsChildren: [/^v-/, /^a-/, /^el-/, /^swiper-/, /^token/, /^pre/, /^code/],
    }
  }
}