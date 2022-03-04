function go(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    a_a = parseInt(number1) * parseInt(number2);
    
    question_word = "<h4>" + number1 + "X" +  number2 + "</h4>";
    input_box = "<br> Answer:" + a_a;
    row = question_word + input_box;
    document.getElementById("output").innerHTML = row;
}