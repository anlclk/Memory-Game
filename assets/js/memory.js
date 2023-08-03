const btns = document.querySelectorAll('button');
const emojis = [
    "😎", "❤️", "👍", "🤷‍♂️", "🎶", "🤡", "💩", "🎈"
];
let itemsToCompare = [];

for(const btn of btns) {
    btn.addEventListener('click', play);
}
function compare(btn) {
    itemsToCompare.push(btn);

    if(itemsToCompare.length === 2) {
        if(itemsToCompare[0].innerText === itemsToCompare[1].innerText) {
            itemsToCompare[0].classList.add('matched');
            itemsToCompare[1].classList.add('matched');
        } 
        itemsToCompare[0].classList.remove('visible');
        itemsToCompare[1].classList.remove('visible');
        itemsToCompare = [];
    }
}

function play() {
    const btn = this;
    if(this.classList.contains('matched')) {
        return;
    }
    this.classList.add('visible');
    setTimeout(function() {compare(btn);}, 1000);
}

function init() {
    let list = [...emojis, ...emojis];
    shuffle(list);

    for (let i = 0; i < btns.length; i++) {
        btns[i].innerText = list[i];
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
init();