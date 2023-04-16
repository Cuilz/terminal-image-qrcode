import { base64Str } from './image.js';

const bufferData = Buffer.from(base64Str, "base64");

import QRCode from '../lib.js';

(async () => {
  const qrcode = await QRCode(bufferData);

  console.log(qrcode);
})();


