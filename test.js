import { Decoder } from '@nuintun/qrcode';
import Jimp from 'jimp';
import terminal from 'qrcode-terminal';

const qrcode = new Decoder();

export default async (image, options = { small: true }) => {
  const img = await Jimp.read(image);
  const width = img.getWidth();
  const height = img.getHeight();
  const result = qrcode.decode(img.bitmap.data, width, height);

  return new Promise((resolve, reject) => {
    terminal.generate(result.data, options, (qrcode) => {
      resolve(qrcode);
    })
  })
}