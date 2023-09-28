const urlParams = new URLSearchParams(window.location.search);
const evnt = localStorage.getItem("event")??"EVENT HERE";
const group = localStorage.getItem("group")??"GROUP HERE";

const first_name = localStorage.getItem('first_name')??"FIRST FULLNAME HERE";
const first_team = localStorage.getItem('first_team')??"FIRST TEAM NAME HERE";
const first_timing = localStorage.getItem('first_timing')??"FIRST TIMING HERE";

const second_name = localStorage.getItem('second_name')??"SECOND FULLNAME HERE";
const second_team = localStorage.getItem('second_team')??"SECOND TEAM NAME HERE";
const second_timing = localStorage.getItem('second_timing')??"SECOND TIMING HERE";

const third_name = localStorage.getItem('third_name')??"THIRD FULLNAME HERE";
const third_team = localStorage.getItem('third_team')??"THIRD TEAM NAME HERE";
const third_timing = localStorage.getItem('third_timing')??"THIRD TIMING HERE";

document.getElementById("first_name").innerHTML = first_name;
document.getElementById("first_team").innerHTML = first_team;
document.getElementById("first_timing").innerHTML = first_timing;

document.getElementById("second_name").innerHTML = second_name;
document.getElementById("second_team").innerHTML = second_team;
document.getElementById("second_timing").innerHTML = second_timing;

document.getElementById("third_name").innerHTML = third_name;
document.getElementById("third_team").innerHTML = third_team;
document.getElementById("third_timing").innerHTML = third_timing;


document.getElementsByClassName("group").innerHTML = group;

const event_els = document.getElementsByClassName("event");
for (let i = 0; i < event_els.length; i++) {
    event_els[i].innerHTML = evnt;
}

const group_els = document.getElementsByClassName("group");
for (let i = 0; i < group_els.length; i++) {
    group_els[i].innerHTML = group;
}