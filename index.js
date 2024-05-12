function hello() {
    let surp = document.getElementById("surp");
    let hola = document.getElementById("hi");
    let bon = document.getElementById("bonjour");

    let id = setInterval(change, 5);
    let opac = 0;
    let ropac = 1;
    let opac2 = 0;
    function change() {
        if (opac >= 1)
            clearInterval(id);
        else {
            if (opac < 1)
                opac += .012;
                surp.style.opacity = opac;

            if (ropac >= 0.04) {
                ropac -= .04;
                hola.style.opacity = ropac;
            }
            else {
                hola.style.opacity = 0;
                opac2 += .02;
                bon.style.opacity = opac2;
            }
        }
    }
    return true;
}

function a1() {
    let img = document.getElementById("a1");
    img.style.display = "block";
    let num = 0;

    let pick1 = Math.random();
    if (pick1 < .12) {
        num = Math.floor(Math.random() * images2.length);
        img.src = images2[num];
    }
    else {
        num = Math.floor(Math.random() * images1.length);
        img.src = images1[num];
    }
}

const images1 = [
    "https://media.discordapp.net/attachments/782347772854534154/826490976599801907/unknown.png?ex=66390334&is=6637b1b4&hm=7faf07c92c291dd5d7e6a3579e8b7918d167822f008d71931d55242c0d8c28d8&=&format=webp&quality=lossless&width=264&height=226",
    "https://media.discordapp.net/attachments/782347772854534154/826489892736860260/unknown.png?ex=66390231&is=6637b0b1&hm=0f7e7b02d0bac97aff3dc2603d10a58fd75fc4b677bb497a710d44ab22ac67ee&=&format=webp&quality=lossless&width=148&height=114",
    "https://media.discordapp.net/attachments/782347772854534154/826489760197378058/unknown.png?ex=66390212&is=6637b092&hm=254a08873f1304ed199b508848d3763976180efd545b53ab3a1fd5c75d7add9d&=&format=webp&quality=lossless&width=301&height=186",
    "https://media.discordapp.net/attachments/782347772854534154/826489699903602808/unknown.png?ex=66390203&is=6637b083&hm=a35d80daea2b9c49b9460e4c90e6f0c07968af9d7dd2de121dc195d6f34df487&=&format=webp&quality=lossless&width=267&height=127",
    "https://media.discordapp.net/attachments/782347772854534154/826489094766723082/unknown.png?ex=66390173&is=6637aff3&hm=0cef3539db4b584c61deb6629a3ca55395bf673c227fc64b0257f6aa29808c23&=&format=webp&quality=lossless&width=210&height=225",
    "https://media.discordapp.net/attachments/782347772854534154/826488814767571006/unknown.png?ex=66390130&is=6637afb0&hm=7e561077de33144df282ac558005bf33722b2a91220d7e45dcd0c02f84b88777&=&format=webp&quality=lossless&width=199&height=225",
    "https://media.discordapp.net/attachments/782347772854534154/826488712128757861/unknown.png?ex=66390118&is=6637af98&hm=2dc674c60c853b17e444b92a77a38ef67255a0d20ea9433d3296950d6ceb9ae9&=&format=webp&quality=lossless&width=51&height=127",
    "https://media.discordapp.net/attachments/782347772854534154/929193600439422996/unknown.png?ex=6638e339&is=663791b9&hm=b9da1490f61657a5c2784168a3bd12b0058baec56be9d5e3f18d0ea97be4dd22&",
    "https://media.discordapp.net/attachments/782347772854534154/838831366358958190/unknown.png?ex=66386c56&is=66371ad6&hm=e0dcda4efa6a3c4f01c3c6a2b9027aa71beff1386749ee6121e05618bfa9298b&=&format=webp&quality=lossless&width=807&height=510",
    "https://media.discordapp.net/attachments/782347772854534154/903831271623491604/unknown.png?ex=6638e7b7&is=66379637&hm=063d82f943e966ba9a587d3d1bc091692d39130140c27d4215921013be7c5bea&=&format=webp&quality=lossless&width=1084&height=577"
]

const images2 = [
    "https://media.discordapp.net/attachments/782347772854534154/826489193521610862/unknown.png?ex=6639018b&is=6637b00b&hm=4552c369e5a7d1edcbf9ef594017983173abba41582cf7692c4f322857db142d&=&format=webp&quality=lossless&width=319&height=349",
    "https://media.discordapp.net/attachments/782347772854534154/826488792323194939/unknown.png?ex=6639012b&is=6637afab&hm=30874728c6d4de07868a4ce799f1f2b426fe0176c298c4887596c06be8b3fe53&=&format=webp&quality=lossless&width=433&height=330",
    "https://media.discordapp.net/attachments/782347772854534154/826487903571935262/unknown.png?ex=66390057&is=6637aed7&hm=0944190d59ca1727c96154dd28a1dafb0fb61f5959824346fbb440209374d4e8&=&format=webp&quality=lossless&width=145&height=177",
]
