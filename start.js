function walk_yes() {
    document.getElementById('placeholder').style.display = "none";
    document.getElementById('minor').style.display = "block";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('breath1').style.display = "none";
    document.getElementById('breath2').style.display = "none";
    document.getElementById('resp').style.display = "none";
    document.getElementById('perfusion').style.display = "none";
    document.getElementById('mental').style.display = "none";
    document.getElementById('q1explain').style.display = "block"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "none"
    document.getElementById('q5explain').style.display = "none"
}

   function walk_no() {
   document.getElementById('placeholder').style.display = "block";
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath1').style.display = "block";
   document.getElementById('q1explain').style.display = "none"
   document.getElementById('q2explain').style.display = "block"
   document.getElementById('q3-1explain').style.display = "none"
   document.getElementById('q3-2explain').style.display = "none"
   document.getElementById('q4explain').style.display = "none"
   document.getElementById('q5explain').style.display = "none"
}

   function breath1_yes() {
   document.getElementById('placeholder').style.display = "block";
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath2').style.display = "none";
   document.getElementById('resp').style.display = "block";
   document.getElementById('perfusion').style.display = "none";
   document.getElementById('mental').style.display = "none";
   document.getElementById('q1explain').style.display = "none"
   document.getElementById('q2explain').style.display = "none"
   document.getElementById('q3-1explain').style.display = "none"
   document.getElementById('q3-2explain').style.display = "block"
   document.getElementById('q4explain').style.display = "none"
   document.getElementById('q5explain').style.display = "none"
}
   function breath1_no() {
   document.getElementById('placeholder').style.display = "block";
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath2').style.display = "block";
   document.getElementById('resp').style.display = "none";
   document.getElementById('perfusion').style.display = "none";
   document.getElementById('mental').style.display = "none";
   document.getElementById('q1explain').style.display = "none"
   document.getElementById('q2explain').style.display = "none"
   document.getElementById('q3-1explain').style.display = "block"
   document.getElementById('q3-2explain').style.display = "none"
   document.getElementById('q4explain').style.display = "none"
   document.getElementById('q5explain').style.display = "none"
}

   function breath2_yes() {
   document.getElementById('placeholder').style.display = "none";
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "block";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('expired').style.display = "block";
   document.getElementById('q1explain').style.display = "none"
   document.getElementById('q2explain').style.display = "none"
   document.getElementById('q3-1explain').style.display = "block"
   document.getElementById('q3-2explain').style.display = "none"
   document.getElementById('q4explain').style.display = "none"
   document.getElementById('q5explain').style.display = "none"
}
    function breath2_no() {
   document.getElementById('placeholder').style.display = "none";
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "block";
   document.getElementById('expired').style.display = "none";
   document.getElementById('q1explain').style.display = "none"
   document.getElementById('q2explain').style.display = "none"
   document.getElementById('q3-1explain').style.display = "block"
   document.getElementById('q3-2explain').style.display = "none"
   document.getElementById('q4explain').style.display = "none"
   document.getElementById('q5explain').style.display = "none"
}

    function resp_lt30() {
    document.getElementById('placeholder').style.display = "block";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('perfusion').style.display = "block";
    document.getElementById('mental').style.display = "none";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "block"
    document.getElementById('q5explain').style.display = "none"

}
    function resp_gt30() {
    document.getElementById('placeholder').style.display = "none";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById('immediate').style.display = "block";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('perfusion').style.display = "none";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "block"
    document.getElementById('q4explain').style.display = "none"
    document.getElementById('q5explain').style.display = "none"
}

    function perfusion_yes() {
    document.getElementById('placeholder').style.display = "block";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('mental').style.display = "block";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "none"
    document.getElementById('q5explain').style.display = "block"
}
    function perfusion_no() {
    document.getElementById('placeholder').style.display = "none";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "block";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('mental').style.display = "none";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "block"
    document.getElementById('q5explain').style.display = "none"
}

    function mental_yes() {
    document.getElementById('placeholder').style.display = "none";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "block";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "none"
    document.getElementById('q5explain').style.display = "block"
}
    function mental_no() {
    document.getElementById('placeholder').style.display = "none";
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "block";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('q1explain').style.display = "none"
    document.getElementById('q2explain').style.display = "none"
    document.getElementById('q3-1explain').style.display = "none"
    document.getElementById('q3-2explain').style.display = "none"
    document.getElementById('q4explain').style.display = "none"
    document.getElementById('q5explain').style.display = "block"
}

function refresh() {
    window.location.reload();
  }
