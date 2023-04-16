# 在控制台输出二维码

```javascript
import QRCode from 'terminal-image-qrcode'

const buffer = Buffer.from('');
const qrcode = await QRCode(buffer);
console.log(qrcode);
```