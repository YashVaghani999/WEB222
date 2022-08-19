function display() {
  let display = document.getElementById("rate");
  rate.style.display = "block";
  rate.setAttribute("required", "required");
}

function h_display() {
  let display = document.getElementById("rate");
  rate.style.display = "none";
  rate.value = "none";
}

function submitbox() {
  let Pcode = document.getElementById("postal").value;
  let rCheck =  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
  if (!rCheck.test(Pcode)) {
    alert("Please! Check the Postal Code ");
    return false;
  } else {
    return true;
  }
}
