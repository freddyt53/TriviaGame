// Initialize Document

$( document ).ready ( function () {

    //Game variables
    
        var questionsAndAnswersArray = [
            {
                question: "What is the capital of Australia?",
                answers: ["Canberra", "Melbourne", "Sydney", "Darwin"],
                correctAnswer: "Canberra",
            }, {
                question: "What is the capital of Liberia?",
                answers: ["Arthington","Monrovia","Tuzon","Marshall"],
                correctAnswer: "Monrovia",
            }, {
                question: "What is the capital of Taiwan?",
                answers: ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
                correctAnswer: "Taipei",
            }, {
                question: "What is the capital of Japan?",
                answers: ["Kyoto","Hiroshima","Tokyo","Osaka"],
                correctAnswer: "Tokyo",
            }, {
                question: "What is the capital of China?",
                answers: ["Hong Kong", "Macau", "Shanghai", "Beijing"],
                correctAnswer: "Beijing",
            }, {
                question: "What is the capital of Turkey?",
                answers: ["Ankara","Istanbul","Antalya","Bursa"],
                correctAnswer: "Ankara",
            }, {
                question: "What is the capital of Colombia?",
                answers: ["Medellin", "Bogota", "Cartagena", "Cali"],
                correctAnswer: "Bogota",
            }, {
                question: "What is the capital of India?",
                answers: ["Mumbai","Hyderabad","Bangalore","New Delhi"],
                correctAnswer: "New Delhi",
            }, {
                question: "What is the capital of Netherlands?",
                answers: ["Rotterdam", "The Hague", "Amsterdam", "Haarlem"],
                correctAnswer: "Amsterdam",
            }, {
                question: "What is the capital of England?",
                answers: ["Liverpool", "London", "Manchester", "Bristol"],
                correctAnswer: "London",
            },
        ];
    
    //game functions
    
        $("#start-game").on("click", function () {
            game.start();
        });
    
        var game = {
            correct: 0,
            incorrect: 0,
            counter: 30,
            countdown: function () {
                game.counter--;
                $("#counter").html(game.counter);
                if(game.counter<=0) {
                    console.log("Time's up!");
                    game.done();
                }
            },
            
            start: function () {
                timer = setInterval(game.countdown, 1000);
                $("#questions-and-answers").prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>')
                $("#start-game").remove();
                for (var i = 0; i < questionsAndAnswersArray.length; i++) {
                    $("#questions-and-answers").append("<h2>" + questionsAndAnswersArray[i].question + "</h2>");
                    for (var j = 0; j < questionsAndAnswersArray[i].answers.length; j++) {
                        $("#questions-and-answers").append("<input type='radio' name='question-" + i + "' value='" + questionsAndAnswersArray[i].answers[j] + "'>" +questionsAndAnswersArray[i].answers[j]);
                    }
                }
            },
            
            done: function () {
                $.each($('input[name="question-0"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-1"]:checked'),function () {
                    if($(this).val()===questionsAndAnswersArray[1].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-2"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[2].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-3"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[3].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-4"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[4].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-5"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[5].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-6"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[6].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-7"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[7].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-8"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[8].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                $.each($('input[name="question-9"]:checked'),function () {
                    if($(this).val()==questionsAndAnswersArray[9].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
    
                this.result();
            },
            
            result: function () {
                clearInterval(timer);
                $("#questions-and-answers h2").remove();
                $("#questions-and-answers").html("<h2>Done!</h2>");
                $("#questions-and-answers").append("<h3>Correct Answers: " + this.correct + "</h3>");
                $("#questions-and-answers").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
                $("#questions-and-answers").append("<h3> Unanswered: " + (questionsAndAnswersArray.length-(this.incorrect+this.correct))+"</h3>");
            }
        }
    
    });