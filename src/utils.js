export default class J_ {
    static stripHtml = (str) => str.replace(/<\/?[^>]+(>|$)/g, "");
}