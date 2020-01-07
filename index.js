export default function (Vue) {
  Vue.nfa = {
    convert (num, level) {
      'use strict';
      if (num === null) {
        return "";
      }
      // convert negative number to positive and get wordify value
      if (num<0) {
        num = num * -1;
        return "منفی " + this.convert(num, level);
      }
      if (num === 0) {
        if (level === 0) {
          return "صفر";
        } else {
          return "";
        }
      }
      let result = "",
          yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "],
          dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "],
          sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "],
          dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "];
      if (level > 0) {
        result += " و ";
        level -= 1;
      }

      if (num < 10) {
        result += yekan[num - 1];
      } else if (num < 20) {
        result += dah[num - 10];
      } else if (num < 100) {
        result += dahgan[parseInt(num / 10, 10) - 2] +  this.convert(num % 10, level + 1);
      } else if (num < 1000) {
        result += sadgan[parseInt(num / 100, 10) - 1] + this.convert(num % 100, level + 1);
      } else if (num < 1000000) {
        result += this.convert(parseInt(num / 1000, 10), level) + " هزار " + this.convert(num % 1000, level + 1);
      } else if (num < 1000000000) {
        result += this.convert(parseInt(num / 1000000, 10), level) + " میلیون " + this.convert(num % 1000000, level + 1);
      } else if (num < 1000000000000) {
        result += this.convert(parseInt(num / 1000000000, 10), level) + " میلیارد " + this.convert(num % 1000000000, level + 1);
      } else if (num < 1000000000000000) {
        result += this.convert(parseInt(num / 1000000000000, 10), level) + " تریلیارد " + this.convert(num % 1000000000000, level + 1);
      }
      return result;

    },
  };

  Object.defineProperties(Vue.prototype, {
    $nfa : {
      get() {
        return Vue.nfa;
      }
    }
  })

}