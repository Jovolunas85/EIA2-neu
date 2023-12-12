    let stars = [ //Image sources
        "assets/stern1.png",
        "assets/stern2.png",
        "assets/stern3.png",
        "assets/stern4.png",
        "assets/stern5.png",
        "assets/stern6.png"
    ];

    var imageArray = []; //Image Array to save Images

    function getRandomNumber(min, max) { //Function for Random Number generation
        return Math.random() * (max - min) + min;
    }
    function loadImages() { //To Create and load images
        var marker = document.querySelector('a-marker'); //to select HTML Element Marker
        for (var i = 0; i < stars.length; i++) { //Um Array mit image source durchzugehen
            var img = new Image(); //Image-Element wird in Variable erstellt
            img.src = stars[i]; //Image aus der Source entnehmen
            img.onload = function () { //wenn image geladen wird, wird die Funktion aufgerufen
                imageArray.push(this); //Das Objekt (Image) wird in den Array gepusht
                var aImage = document.createElement('a-image'); //Ein a-Image wird als Element erstellt
                aImage.setAttribute('src', this.src); //Das Attribut des a-Image wird als Image der source festgelegt
                var randomSize = getRandomNumber(0.1, 0.5); //Die Randomnumber wird für die größe generiert
                aImage.setAttribute('width', randomSize); //Die Breite und höhe wird mit der größe festgelegt
                aImage.setAttribute('height', randomSize); 
                var randomPositionX = getRandomNumber(-1, 1); //Die randomnumber wird wird generiert für  die Position in X,Y,Z Richtung
                var randomPositionY = getRandomNumber(-1, 1);
                var randomPositionZ = getRandomNumber(-1, 1);
                aImage.setAttribute('position', `${randomPositionX} ${randomPositionY} ${randomPositionZ}`); //Die Position wird mit der random Zahl festgelegt
                marker.appendChild(aImage); //Das Image Element wird festgelegt
            };
        }
    }

loadImages();
//for(let i=0;i<stars.length;i++){
//    console.log(stars[i]);
//}