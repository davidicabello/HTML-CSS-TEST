var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('signer')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString('Freelancer')
    .pauseFor(2500)
    .start();