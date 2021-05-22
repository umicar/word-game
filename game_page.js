player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log(word);

    firstchar = word.charAt(1);
    console.log(firstchar);

    length_divide_2 = Math.floor(word.length / 2);
    secondchar = word.charAt(length_divide_2);
    console.log(secondchar);

    length_minus_1 = word.length - 1;
    thirdchar = word.charAt(length_minus_1);
    console.log(thirdchar);

    remove_firstchar = word.replace(firstchar, "_");
    remove_secondchar = remove_firstchar.replace(secondchar, "_");
    remove_thirdchar = remove_secondchar.replace(thirdchar, "_");
    console.log(remove_thirdchar);

    question = "<h4 id='word_display'> Q. " + remove_thirdchar + "</h4>";
    input = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == word) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player_1")
     {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        
    }
    else
     {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
       
    }
    if (answer_turn == "player_1")
     {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        
    }
    else 
    {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
       
    }
    document.getElementById("output").innerHTML = "";
}