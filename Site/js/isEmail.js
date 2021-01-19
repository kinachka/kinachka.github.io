function isEmail() {
    var str = document.getElementById("email").value;
    if (isEmpty(str)) status.innerHTML = alert('ты ниче не ввел');
    else alert(str);
  }
  function isEmpty(str) {
    return str == null || str.length == 0;
  }