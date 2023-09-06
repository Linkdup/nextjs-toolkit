"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getBaseURL = function () {
    var baseURL = process.env.SILVERSTRIPE_BASE_URL;
    if (!baseURL) {
        throw new Error("\n        You must set SILVERSTRIPE_BASE_URL in your .env file,\n        e.g. \"https://my-ss-website.com\"\n    ");
    }
    return baseURL.replace(/\/+$/, "");
};
exports.default = getBaseURL;
//# sourceMappingURL=getBaseURL.js.map