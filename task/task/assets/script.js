// Bir funksiya yaziriq
// Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm) parametr verilir. 
// Pul bərabər hissələrə bölünərək hər ay verilməlidir.

function credit(amount, monthlypayment) {
    twomonth = Math.floor(amount / monthlypayment);
    lastmonth = amount % monthlypayment;
    const monthly = [];
    for (let i = 0; i < monthlypayment; i++) {
        monthly[i] = twomonth;
    }
    for (let i = 0; i < lastmonth; i++) {
        monthly[i] += lastmonth
    }
    return monthly;
}
console.log(credit(1900, 3));



