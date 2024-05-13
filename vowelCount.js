function getCount(str) {
    var str = str.split('')
    return str.filter(elm=>elm=='a'||elm=='e'||elm=='i'||elm=='o'||elm=='u').length
}