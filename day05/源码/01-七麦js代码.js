function v(t) {
    t = encodeURIComponent(t)['replace'](/%([0-9A-F]{2})/g, function (n, t) {
        return o("0x" + t)
    });
    return btoa(t)
}


function o(n) {
    t = '',
        ['66', '72', '6f', '6d', '43', '68', '61', '72', '43', '6f', '64', '65']['forEach'](function (n) {
            t += unescape('%u00' + n)
        });
    var t, e = t;
    return String[e](n)
}

function h(n, t) {
    for (var e = (n = n["split"](''))['length'], r = t['length'], a = 'charCodeAt', i = 0; i < e; i++)
        n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
    return n["join"]('')
}

// 扣好的代码需要放在一个函数当中  提供给python调用
function get_data(a) {
    // a = [0, "6014"]
    a = a.sort().join(''),
        a = v(a), r = +new Date() - 108896 - 1661224081041,
        a = (a += "@#" + "/indexV2/getIndexRank") + ("@#" + r) + ("@#" + 3)
    d = "xyz517cda96efgh";

    e = v(h(a, d))
    return e
}

get_data(['0', '5000'])
// console.log(e)