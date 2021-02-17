let nazwa1 = 'Uwielbiam JavaScript';
let nazwa2 = 'Jestem świetnym programistą';

function tekst(nazwa1 , nazwa2){

    if (nazwa1.length > nazwa2.length) {
        return nazwa1;
    } else if (nazwa2.length > nazwa1.length) {
        return nazwa2;
    } else {
        return 'są równe';
    }
}

console.log(tekst(nazwa1, nazwa2));