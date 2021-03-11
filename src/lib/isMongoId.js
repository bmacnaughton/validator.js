import assertString from './util/assertString';

import isHexadecimal from './isHexadecimal';

export default function isMongoId(str) {
  assertString(str);
  return /[A-Za-z0-9]{24}/.test(str);
}
