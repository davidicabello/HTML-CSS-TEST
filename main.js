var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Mira mis redes sociales!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('No te olvides de seguirme!')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('<strong>seguirme!</strong>')
    .pauseFor(2500)
    .start();