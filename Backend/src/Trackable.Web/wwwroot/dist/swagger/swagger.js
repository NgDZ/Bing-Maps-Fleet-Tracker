﻿var xhttp = new XMLHttpRequest();
xhttp.withCredentials = true;
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status != 200) {
        window.location.href = "../api/users/login?redirectUri=" + window.location.href;
    }
};
xhttp.open("GET", "../api/users/me", true);
xhttp.send();