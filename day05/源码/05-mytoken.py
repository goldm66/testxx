

import time
import hashlib
import requests
# 时间戳    格林时间   盐


url = 'https://api.mytokenapi.com/ticker/currencylistforall?pages=5%2C2&sizes=100%2C100&subject=market_cap&language=en_US&timestamp={}&code={}&platform=web_pc&v=0.1.0&legal_currency=USD&international=1'
# t1 = str(int(time.time()*10000))
t1 = '8217747432'
print(t1)
va = t1 + '9527' + t1[0:6]
md5 = hashlib.md5()
md5.update(va.encode('utf-8'))
code = md5.hexdigest()
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'
}
res = requests.get(url.format(t1, code), headers=headers)
print(res.text)








