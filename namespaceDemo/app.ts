/// <reference path="utility-functions.ts" />
const res = Utility.maxBooksAllowed(20);
console.log(res);

import util = Utility.Fees;
const fee = util.calculateLateFee(3);
console.log(fee);
