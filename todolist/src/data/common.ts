import crypto from 'crypto';

class Common {
  randomString(size: number): string {
    if (size == 0) {
      throw new Error('Zero-length randomString is useless.');
    }
    const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
    let objectId = '';
    // var bytes = (0, crypto.randomBytes)(size);
    let bytes = crypto.randomBytes(size);
    // console.log(bytes)
    for (let i = 0; i < bytes.length; ++i) {
      objectId += chars[bytes.readUInt8(i) % chars.length];
    }
    return objectId;
  }
}

export default new Common;