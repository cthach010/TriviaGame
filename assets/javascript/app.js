
     var question =[{
        question: "1: The Fantastic Four have the headquarters in what building?",
        answers :{a: 'Stark-Tower',  b:'Fantastic-Headquarters', c: 'Baxter-Building', d: 'Xavier-Institute'},
        correctAnswer: 'c: Baxter-Building'
    },
{
        question: "2: Peter Parker works as a photographer for:",
        answers: {a: 'The Daily Planet', b: 'The Daily Bungle', c: 'The New York Times', d: 'The Rolling Stones'},
        correctAnswer: 'b: The Daily Bungle'
    },
{
        question: "3: Thor has two war goats to pull his chariot. They are named::",
        answers: {a: 'Balder and Hermod', b: 'Thunder and Lightning', c: 'Ask and Embla', d: 'Toothgrinder and Toothgnasher'},
        correctAnswer: 'd: Toothgrinder and Toothgnasher'  
    },
    
{
        question: "4: Before becoming Radioactive Man, Chen Lu was:",
        answers: {a: 'A spy', b: 'A nuclear physicist', c: 'A soldier', d: 'A pilot'},
        correctAnswer: 'b: A nuclear physicist'  
    },

{
        question: "5: S.H.I.E.L.D's highest ranking agent is:",
        answers: {a: 'Nick Fury', b: 'Steven Rogers', c: 'Peter Parker', d: 'Natalia Romanova'},
        correctAnswer: 'a:  Nick Fury'
    },

{       question: "6: Captain America was frozen in which war?",
        answers: {a: 'World War I', b: 'World War II', c: 'Cold War', d: 'American Civil War'},
        correctAnswer: 'b:  World War II'
    
},

{       question: "7: The vampire hunter Blade is a:",
        answers: {a: 'Mutant', b: 'Human', c: 'vampire', d: 'Half vampire'},
        correctAnswer: 'd:  Half vampire'
    
    },

    {   question: "8: TBefore turning to a life of crime, Mysterio was:",
        answers: {a: 'A stuntman', b: 'A special effects artist', c: 'A magician', d: 'A firefighter'},
        correctAnswer: 'b:  A special effects artist'
},

{       question: "9: Dr. doom went to the same college as:",
        answers: {a: 'Tony Stark', b: 'Peter Parker', c: 'Reed Richards', d: 'Bruce Banner'},
        correctAnswer: 'c:  Reed Richards'
    
    },
{       question: "10: What is commonly believe to be The Black Widow's previous occupation before becoming a Russian spy?",
        answers: {a: 'A ballerina', b: 'A millitary', c: 'a thief', d: 'An athlete'},
        correctAnswer: 'a:  A ballerina'
},

{       question: "11: Ghost Rider is known as:",
        answers: {a: 'The Guardian Devil', b: 'The Spirit of Hate', c: 'The Spirit of Vengeance', d: 'The Red Skull'},
        correctAnswer: 'c: The Spirit of Vengeance'
},

{       question: "12: Deadpool joined the Weapon X program because:",
        answers: {a: 'He had incurable cancer', b: 'He was forced to', c: 'He thought it would be fun', d: 'He wanted to fight for justice'},
        correctAnswer: 'a: He had incurable cancer'
},

{       question: "13: Who paid Mac Gargan to become the Scorpion?",
        answers: {a: 'Felicia Hardy', b: 'The Kingpin', c: 'Norman Osborn', d: 'J. Jonah Jameson'},
        correctAnswer: 'd: J. Jonah Jameson'
},

{
        question: "14: What did Dr. Pym discover that allowed him to change size?",
        answers: {a: 'Gamma Rays', b: 'Pym Particles', c: 'Alpha Rays', d: 'Omega Particles'},
        correctAnswer: 'b: Pym Particles'
},

{
        question: "15: Who here was not a member of the Howling Commandos?",
        answers: {a: 'Jasper Sitwell', b: 'Nick fury', c: 'Dum Dum Dugan', d: 'Sam Sawyer'},
        correctAnswer: 'a: Jasper Sitwell'
},

{
        question: "16: What vehicle is the Avengers primary mode of transport?",
        answers: {a: 'A bus', b: 'The Quinjet', c: 'The Blackbird', d: 'The Blackhawk'},
        correctAnswer: 'b: The Quinjet'
}, 

{
        question: "17: Which inhuman did Johnny Storm date?",
        answers: {a: 'Medusa', b: 'Storm', c: 'Invisible Woman', d: 'Crystal'},
        correctAnswer: 'd: Crystal'
}, 

{
        question: "18:Iceman is a member of which team?",
        answers: {a: 'The X-Men', b: 'The Fantastic Four', c: 'The Invaders', d: 'The Liberators'},
        correctAnswer: 'a: The X-Men'
},

{
        question: "19:What was Dum Dum Dugan before he joined the military?",
        answers: {a: 'An actor', b: 'A circus strongman', c: 'A policeman', d: 'A firefighter'},
        correctAnswer: 'b: A circus strongman'
},

{
        question: "19:What is the name of Tony Stark's building that the team uses as head-quarters in Marvel: Ultimate Alliance?",
        answers: {a: 'Camp Hammond', b: 'Iron Tower', c: 'Stark Tower', d: 'S.H.I.E.L.D. Headquarters'},
        correctAnswer: 'c: Stark Tower'
},
]



for (i=0; i < question.length; i++){
    console.log(question[i].question);
$ ("#quiz").append(question[i].question+'<br>');


// <!-- radio button -->
$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'a" value =  " ' + question [i].answers.a +'" >' + question [i].answers.a + '<br>');

$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'b" value =  " ' + question [i].answers.b +'" >' + question [i].answers.b + '<br>');

$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'c" value =  " ' + question [i].answers.c +'" >' + question [i].answers.c + '<br>');

$("#quiz").append('<input type = "radio" name = "' + i + '" id = "'+ i + 'd" value =  " ' + question [i].answers.d +'" >' + question [i].answers.d + '<br> <br>');
}

// <!-- Game Logic -->

// <!-- Hide Specified Div --> 
function showhide() {
        var x = document.getElementById("ACT");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    } 

function check () {
       

// timer using js

// var counter = 0;
// var timeLeft = 60;

// function convertSeconds(s) {
//         var min = floors(s / 60);
//         var sec = s % 60;
//         return min + ':' + sec;
// }
// function setup() {
//    noCanvas();

//    var timer = select('#timer');
//    timer.html(convertSeconds (timeleft-counter));

// function timeIt() {
//         counter++;
//         timer.html(convertSeconds(timeleft - counter));
// }
//    setInterval (timeIt, 1000);
// }
