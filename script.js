const nameEl = document.getElementById("name");
const peopleEl = document.getElementById("people");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const zoneEl = document.getElementById("zone");
const reserveBtn = document.getElementById("reserveBtn");
const resultEl = document.getElementById("result");

const limits = { minPeople: 1, maxPeople: 30, largeGroupFrom: 8, veryLargeFrom: 12, minNameLen: 2 };

let lastResultType = "neutral";

function setResult(text, type){
  if (type !== lastResultType) {
    resultEl.className = "result " + type;
    lastResultType = type;
  }
  resultEl.textContent = text;
}

function setInvalid(el, isInvalid){
  if (isInvalid) el.classList.add("invalid");
  else el.classList.remove("invalid");
}

function todayISO(){
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

dateEl.min = todayISO();

function validateInputs(nameValue, people, dateValue, timeValue){
  const errors = [];
  const nameTrim = nameValue.trim();

  if (nameTrim.length < limits.minNameLen){
    errors.push(`Ievadi vārdu (vismaz ${limits.minNameLen} simboli).`);
  }

  if (!Number.isFinite(people)) errors.push("Ievadi cilvēku skaitu kā skaitli.");
  if (Number.isFinite(people) && (people < limits.minPeople || people > limits.maxPeople)){
    errors.push(`Cilvēku skaitam jābūt no ${limits.minPeople} līdz ${limits.maxPeople}.`);
  }
  if (!dateValue) errors.push("Izvēlies datumu.");
  if (dateValue && dateValue < todayISO()) errors.push("Datums nevar būt pagātnē.");
  if (!timeValue) errors.push("Izvēlies laiku.");

  return errors;
}

function buildMessage(nameValue, people, dateValue, timeValue, zoneValue){
  const zoneText = zoneValue === "terase" ? "terases zonā" : "iekšā";
  const nameTrim = nameValue.trim();
  const base = `Rezervācija uz vārda ${nameTrim}: ${people} cilvēkiem (${zoneText}) — ${dateValue} plkst. ${timeValue}.`;

  if (people >= limits.veryLargeFrom){
    return { type: "warn", text: base + " Ļoti lielai grupai iesakām apstiprināt rezervāciju pa tālruni." };
  }
  if (people >= limits.largeGroupFrom){
    return { type: "warn", text: base + " Lielai grupai var būt nepieciešams priekšapmaksas apstiprinājums." };
  }
  return { type: "success", text: base + " Paldies! Jūsu pieprasījums ir saņemts." };
}

function handleReserve(){
  const nameValue = nameEl.value;
  const people = Number.parseInt(peopleEl.value, 10);
  const dateValue = dateEl.value;
  const timeValue = timeEl.value;
  const zoneValue = zoneEl.value;

  const errors = validateInputs(nameValue, people, dateValue, timeValue);

  setInvalid(nameEl, nameValue.trim().length < limits.minNameLen);
  setInvalid(peopleEl, errors.some(e => e.includes("Cilvēku") || e.includes("skaitli")));
  setInvalid(dateEl, errors.some(e => e.includes("Datums") || e.includes("datumu")));
  setInvalid(timeEl, errors.some(e => e.includes("laiku")));

  if (errors.length > 0){
    setResult("Kļūda: " + errors.join(" "), "error");
    return;
  }

  const msg = buildMessage(nameValue, people, dateValue, timeValue, zoneValue);
  setResult(msg.text, msg.type);
}

reserveBtn.addEventListener("click", handleReserve);

nameEl.addEventListener("input", function(){
  setInvalid(nameEl, nameEl.value.trim().length > 0 && nameEl.value.trim().length < limits.minNameLen);
});

peopleEl.addEventListener("input", function(){
  const v = Number.parseInt(peopleEl.value, 10);
  if (!Number.isFinite(v)){
    setInvalid(peopleEl, false);
    return;
  }
  setInvalid(peopleEl, v < limits.minPeople || v > limits.maxPeople);
});
