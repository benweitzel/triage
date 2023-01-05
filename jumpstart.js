function walk_yes() {
    document.getElementById('minor').style.display = "block";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('breath1').style.display = "none";
    document.getElementById('breath2').style.display = "none";
    document.getElementById('breath3').style.display = "none";
    document.getElementById('breath4').style.display = "none";
    document.getElementById('resp').style.display = "none";
    document.getElementById('pulse').style.display = "none";
    document.getElementById('mental').style.display = "none";
}

   function walk_no() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath1').style.display = "block";
}

   function breath1_yes() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath2').style.display = "none";
   document.getElementById('breath3').style.display = "none";
   document.getElementById('breath4').style.display = "none";
   document.getElementById('resp').style.display = "block";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}
   function breath1_no() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath2').style.display = "block";
   document.getElementById('breath3').style.display = "none";
   document.getElementById('breath4').style.display = "none";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}

   function breath2_yes() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "block";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath3').style.display = "none";
   document.getElementById('breath4').style.display = "none";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}
    function breath2_no() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath3').style.display = "block";
   document.getElementById('breath4').style.display = "none";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}

function breath3_yes() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('breath4').style.display = "block";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}
function breath3_no() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "block";
   document.getElementById('breath4').style.display = "none";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}

function breath4_yes() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "block";
   document.getElementById('expectant').style.display = "none";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}
function breath4_no() {
   document.getElementById("minor").style.display = "none";
   document.getElementById("delayed").style.display = "none";
   document.getElementById("immediate").style.display = "none";
   document.getElementById('expectant').style.display = "block";
   document.getElementById('resp').style.display = "none";
   document.getElementById('pulse').style.display = "none";
   document.getElementById('mental').style.display = "none";
}

function resp_normal() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('pulse').style.display = "block";
    document.getElementById('mental').style.display = "none";
}
    function resp_abnormal() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById('immediate').style.display = "block";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('pulse').style.display = "none";
    document.getElementById('mental').style.display = "none";
}

    function pulse_yes() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('mental').style.display = "block";
}
    function pulse_no() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "block";
    document.getElementById('expectant').style.display = "none";
    document.getElementById('mental').style.display = "none";
}

    function mental_yes() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "block";
    document.getElementById("immediate").style.display = "none";
    document.getElementById('expectant').style.display = "none";
}
    function mental_no() {
    document.getElementById("minor").style.display = "none";
    document.getElementById("delayed").style.display = "none";
    document.getElementById("immediate").style.display = "block";
    document.getElementById('expectant').style.display = "none";
}

function refresh() {
    window.location.reload();
  }
