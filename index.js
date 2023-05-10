// Code your solutions in this file
function writeCards(names, event) {
    const thanksMessages = [];
    for(let i=0; i < names.length; i++) {
        const thanksMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thanksMessages.push(thanksMessage);
    }
    return thanksMessages;
}


const thanks = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thanks);



function countDown(number) {
    let countdown = number;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}


countDown(10);