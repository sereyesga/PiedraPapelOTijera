$(function() {
    let win = 0;
    let draw = 0;
    let lose = 0;
    let elements = ['piedra', 'papel', 'tijeras'];

    $('.format').on('click', (e) => {
        let player = e.target.id;
        console.log(player);
        $('#player').attr('class', `choice bg ${player}`);

        // Elemento de la CPU
        let cpu = elements[Math.floor(Math.random() * elements.length)];
        console.log(`cpu: ${cpu}`);
        $('#cpu').attr('class', `choice bg ${cpu}-cpu`);


        if (player == cpu) {
            draw ++;
            $('#draw').text(draw);
        }else if (player == 'piedra' && cpu == 'tijeras' || player == 'papel' && cpu == 'piedra' || player == 'tijeras' && cpu == 'papel') {
            win ++;
            $('#win').text(win);
        }else{
            lose ++;
            $('#lose').text(lose);
        }
    })
});