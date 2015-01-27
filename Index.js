var uur = 0 ,
    minuten = 0,
    seconden = 0,
    Stopwatch = document.getElementById("Stopwatch"),
    Start = document.getElementById("Start"),
    Pauze = document.getElementById("Pauze"),
    Stop = document.getElementById("Reset"),
    timer = null;


    //Add addeventlistener
    Start.addEventListener("click", Starten);
    Pauze.addEventListener("click", Pauzeer);
    Stop.addEventListener("click", Stoppen);


    function Starten() {
        if (timer === null) {                           //Als de timer leeg is
            StartStopwatch();                           // Voert die de functie StartStopwatch uit
            timer = setInterval(StartStopwatch, 1000);  // En zet een interval
        }

    }

    function Pauzeer(){
        clearInterval(timer);
        timer = null;

    }

    function Stoppen(){
         uur = 0;
         minuten = 0;
         seconden = 0;

        Stopwatch.innerText = "00:00:00";

    }// Einde function Stoppen

    function StartStopwatch(){

    //Start de Stopwatch
     Stopwatch.innerHTML =  ExtraNul(uur)+":"+ExtraNul(minuten)+":"+ExtraNul(seconden);

        seconden++;

        if(seconden >= 60){   // Als het meer dan 60 seconden is dan
            seconden = 0      // Worden de secondens op 0 gezet
            minuten++;        // en bij minuut één dr bij

            if(minuten >= 60){ // Het zelfde verhaal als bij minuten
              minuten = 0
              uur++;           // Alleen inplaats van minuten dr bij uren
            }
        }


     //        if(Seconden == 59){
    //            alert("Miauw");
    //        }

    }// Einde function StartStopwatch

    function ExtraNul(i) {
        if (i < 10)      // Als de waarde lager dan 10 is
        {
            i = "0" + i  // Voegt een extra nul toe als de variable
                         // minuten/seconden en uren
        }
        return i
    }// Einde function ExtraNul
