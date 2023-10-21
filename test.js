let user = +prompt('0-dan 5-e qeder bir eded secin');
let num = Math.floor(Math.random() * 5);
let netice;

switch (true) {
    case user == num:
        netice = 'Siz uddunuz!'
        break;
    case user > 4:
        netice = '0-dan 5-e qeder eded secin ZEHMET OLMASA!'
        break;

    default:
        netice = `Sizin secdiyiniz eded ${user} idi. Udus reqemi ise ${num} idi.`
        break;
}
document.getElementById('oyun').innerHTML = netice