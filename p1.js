//Hands On Project One - javascript
function getGrades() {
  let math = document.getElementById('math').value;
  let science = document.getElementById('science').value;
  let history = document.getElementById('history').value;
  let art = document.getElementById('art').value;
  let total = (parseInt(math) + parseInt(science) + parseInt(history) + parseInt(art));
  let avg = total / 4;
  let tGrade = 0;

  for (i = 0; i += getGrades.length; i++) {
    total = parseInt("0" +document.getElementById('total').value, 4);
  }
    //math
    if (math >= 90 && math <= 100) {
      document.getElementById('letterM').innerHTML = "A";
    } else if (math >= 80 && math <= 89) {
      document.getElementById('letterM').innerHTML = "B";
    } else if (math >= 70 && math <= 79) {
      document.getElementById('letterM').innerHTML = "C";
    } else if (math >= 60 && math <= 69) {
      document.getElementById('letterM').innerHTML = "D";
    } else if (math >= 0 && math <= 59) {
      document.getElementById('letterM').innerHTML = "E";
    }

    //science
    if (science >= 90 && science <= 100) {
      document.getElementById('letterS').innerHTML = "A";
    } else if (science >= 80 && science <= 89) {
      document.getElementById('letterS').innerHTML = "B";
    } else if (science >= 70 && science <= 79) {
      document.getElementById('letterS').innerHTML = "C";
    } else if (science >= 60 && science <= 69) {
      document.getElementById('letterS').innerHTML = "D";
    } else if (science >= 0 && science <= 59) {
      document.getElementById('letterS').innerHTML = "E";
    }

    //history
    if (history >= 90 && history <= 100) {
      document.getElementById('letterH').innerHTML = "A";
    } else if (history >= 80 && math <= 89) {
      document.getElementById('letterH').innerHTML = "B";
    } else if (history >= 70 && history <= 79) {
      document.getElementById('letterH').innerHTML = "C";
    } else if (history >= 60 && history <= 69) {
      document.getElementById('letterH').innerHTML = "D";
    } else if (history >= 0 && history <= 59) {
      document.getElementById('letterH').innerHTML = "E";
    }

    //art
    if (art >= 90 && art <= 100) {
      document.getElementById('letterA').innerHTML = "A";
    } else if (art >= 80 && art <= 89) {
      document.getElementById('letterA').innerHTML = "B";
    } else if (art >= 70 && art <= 79) {
      document.getElementById('letterA').innerHTML = "C";
    } else if (art >= 60 && art <= 69) {
      document.getElementById('letterA').innerHTML = "D";
    } else if (art >= 0 && art <= 59) {
      document.getElementById('letterA').innerHTML = "E";
    }
}

tGrade = parseInt(math + science + art + history);
  document.getElementById('total').innerHTML = (total + ' ');

avg = total/4
  document.getElementById('avg').innerHTML = avg + '    ';
