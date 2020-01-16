/*global Hex, Base64, ASN1 */
"use strict";

var maxLength = 10240,
    reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/,
    hash = null;

function decode(der) {
    try {
        var asn1 = ASN1.decode(der);
        return asn1;//.toDOM();
    } catch (e) {
        return "error during asn1 decode";
    }
}
function decodeText(val) {
    try {
        var der = reHex.test(val) ? Hex.decode(val) : Base64.unarmor(val);
        return decode(der);
    } catch (e) {
        return "error before asn1 decode";
    }
}
