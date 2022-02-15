function shout (string) {
    return string.toUpperCase();
}
function whisper (string) {
    return string.toLowerCase();
}
function logShout (string) {
console.log (string.toUpperCase());

}
function logWhisper (string) {
console.log (string.toLowerCase());
}
function sayHiToHeadphonedRoommate (string) {
    // 1.) returns "I can't hear you!" if "string" is lowercase
if (string === string.toLowerCase()) {
    return "I can't hear you"
    // 2. returns "Yes Indeed" if "string" is uppercase
    if (string === string.toUpperCase()) {
        return "Yes Indeed"
    // 3.) returns "I would love to" if "string" is equal to "Let's have dinner together"
    if (string === string.equal()) {
        return "I would love to"
    }
    

