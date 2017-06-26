var run_console = false;

var __data_angka = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");

var __data_huruf = new Array("?", "$", "*", "~", "!", "^", "%", ">", "-", "|");

var _protocol;

var _host;

function _getHost() {
    _protocol = window.location.protocol + "//";
    _host = window.location.host + "/";
    return _protocol + _host;
}

function _printTo(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_printTo->Id of Object is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_printTo->Id Of Object is nothing");
            return;
        }
        document.getElementById("" + a).innerHTML = b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _clear(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_clear->Id of Object is nothing");
            return;
        }
        var b = "";
        document.getElementById("" + a).value = "" + b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _focus(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_focus->Id of Object is nothing");
            return;
        }
        document.getElementById("" + a).focus();
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _getIdByName(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_getIdByName->Name of Object is nothing");
            return;
        }
        var b = document.getElementsByName("" + a);
        return b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _getNameById(a) {
    try {
        if (void 0 === _getNameById) {
            if (run_console) _writeLog("_getNameById->Id of Object is nothing");
            return;
        }
        var b = document.getElementById("" + a).name;
        return b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _getValById(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_getValById->Id of Object is nothing");
            return;
        }
        if ("" === document.getElementById("" + a).value) return document.getElementById("" + a).value; else {
            var b = document.getElementById("" + a).value.trim();
            return b;
        }
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _getValByName(a, b) {
    try {
        if (void 0 === b) {
            if (run_console) _writeLog("_getValByName->Index of Object is nothing set default->0");
            b = 0;
        }
        if (void 0 === a) {
            if (run_console) _writeLog("_getValByName->Name of Object is nothing");
            return;
        }
        if ("" === document.getElementsByName("" + a)[b].value) return document.getElementsByName("" + a)[b].value; else {
            var c = document.getElementsByName("" + a)[b].value.trim();
            return c;
        }
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function formatRupiah(input, firstWord){
  if (!isValid(input)) return `${firstWord || 'Rp.'} 0`

  let nominal = String(input).split('').reverse()

  for (let i = 0 ; i < nominal.length; i++){
    if ((i + 1) % 3 == 0 && i !== nominal.length - 1) {
               nominal.splice(i + 1,0,'.')
    }
  }
  return `${firstWord || 'Rp.'} ${nominal.join('').split('').reverse().join('')}`
}

function isValid(input){
  let pattern = new RegExp(/^\d+$/)
  return pattern.test(input)
}

function _docWrite(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_docWrite->Value is nothing");
            return;
        }
        document.write(a);
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _colorFont(a, b) {
    if (void 0 === b) return "<font color='#e74c3c'>" + a + "</font>"; else return "<font color='" + b + "'>" + a + "</font>";
}

function _newForm(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_newForm->Value Is Not Found");
            return;
        }
        if (void 0 === b) {
            var c = window.open("", "", "width=500,height=500");
            c.document.write(a);
            c.focus();
        } else {
            var c = window.open(b, "", "width=500,height=500");
            c.focus();
        }
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function _isFunction(a) {
    var b = {};
    return a && "[object Function]" === b.toString.call(a);
}

function _loadDoc(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_loadFrom->URL Is Not Found");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_loadDoc->Create Function Call Back Or Your Id Object");
            return;
        }
        if (window.XMLHttpRequest) xhttp = new XMLHttpRequest(); else xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xhttp.onreadystatechange = function() {
            if (0 == this.readyState) {
                if (run_console) _writeLog("_loadDoc -> Object is not initialized");
                return false;
            }
            if (1 == this.readyState) if (run_console) _writeLog("_loadDoc -> Start Load data");
            if (2 == this.readyState) if (run_console) _writeLog("_loadDoc -> Finish Load Data");
            if (202 == this.status) if (run_console) _writeLog("_loadDoc -> Request is process");
            if (203 == this.status) {
                if (run_console) _writeLog("_loadDoc -> Request is denied ! Header of request is not come from original server !");
                return false;
            }
            if (4 == this.readyState && 200 == this.status) if (_isFunction(b)) {
                b(this.responseText);
                if (run_console) _writeLog("_loadDoc->Run Function Call Back " + b, false);
            } else {
                _printTo(b, this.responseText);
                if (run_console) _writeLog("_loadDoc->Success load document", false);
            }
        };
        xhttp.open("GET", a, true);
        xhttp.send();
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _writeLog(a, b) {
    var c = "#e74c3c";
    var d = "#2ecc71";
    if (void 0 === b) console.log("%c " + a, "background: #ffffff; color: " + c); else if (false === b) console.log("%c " + a, "background: #ffffff; color: " + d); else console.log("%c " + a, "background: #ffffff; color: " + b);
}

function _requestPOST(a, b, c) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_requestPOST->URL Is Not Found");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_requestPOST->Parameter POST Is Not Found");
            return;
        }
        if (void 0 === c) {
            if (run_console) _writeLog("_requestPOST->Create Function Call Back Or Your Id Object");
            return;
        }
        if (window.XMLHttpRequest) xhttp = new XMLHttpRequest(); else xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xhttp.onreadystatechange = function() {
            if (0 == this.readyState) {
                if (run_console) _writeLog("_requestPOST -> Object is not initialized");
                return false;
            }
            if (1 == this.readyState) if (run_console) _writeLog("_requestPOST -> Start Load data");
            if (2 == this.readyState) if (run_console) _writeLog("_requestPOST -> Finish Load Data");
            if (202 == this.status) if (run_console) _writeLog("_requestPOST -> Request is process");
            if (203 == this.status) {
                if (run_console) _writeLog("_requestPOST -> Request is denied ! Header of request is not come from original server !");
                return false;
            }
            if (4 == this.readyState && 200 == this.status) if (_isFunction(c)) {
                c(this.responseText);
                if (run_console) _writeLog("_requestPOST->Run Function Call Back " + c, false);
            } else {
                _printTo(c, this.responseText);
                if (run_console) _writeLog("_requestPOST->Print Success", false);
            }
        };
        xhttp.open("POST", _escapeHtml(a), true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("" + b);
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function _requestGET(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_requestGET->URL Is Not Found");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_requestGET->Create Function Call Back Or Your Id Object");
            return;
        }
        if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest(); else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        xmlhttp.onreadystatechange = function() {
            if (0 == this.readyState) {
                if (run_console) _writeLog("_requestGET -> Object is not initialized");
                return false;
            }
            if (1 == this.readyState) if (run_console) _writeLog("_requestGET -> Start Load data");
            if (2 == this.readyState) if (run_console) _writeLog("_requestGET -> Finish Load Data");
            if (202 == this.status) if (run_console) _writeLog("_requestGET -> Request is process");
            if (203 == this.status) {
                if (run_console) _writeLog("_requestGET -> Request is denied ! Header of request is not come from original server !");
                return false;
            }
            if (4 == this.readyState && 200 == this.status) if (_isFunction(b)) {
                b(this.responseText);
                if (run_console) _writeLog("_requestGET->Run Function Call Back " + b, false);
            } else {
                _printTo(b, this.responseText);
                if (run_console) _writeLog("_requestGET->Print Success", false);
            }
        };
        xmlhttp.open("GET", "" + a, true);
        xmlhttp.send();
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _randomStr(a) {
    try {
        if (void 0 === a) a = 10;
        var b = "";
        var c = "a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz";
        for (var d = 0; d < a; d++) b += c.charAt(Math.floor(Math.random() * c.length));
        if (run_console) _writeLog("_randomStr->Success Generate Random String", false);
        return b;
    } catch (e) {
        if (run_console) _writeLog(e);
    }
}

function _randomInt(a) {
    try {
        var b = "";
        var c = "1234567890";
        if (void 0 === a) a = 10;
        for (var d = 0; d < a; d++) b += c.charAt(Math.floor(Math.random() * c.length));
        if (run_console) _writeLog("_randomInt->Success Generate Random Integer", false);
        return b;
    } catch (e) {
        if (run_console) _writeLog(e);
    }
}

function _encryptInt(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_encryptInt->Value Is Not Found");
            return;
        }
        a = a.toString();
        var b = a.length;
        var c = new Array(b);
        for (var d = 0; d < b; d++) {
            var e = a.substring(d, d + 1);
            e = g(e);
            c[d] = e;
        }
        var f = c.toString();
        String.prototype.replaceAll = function(a, b) {
            return this.split(a).join(b);
        };
        if (run_console) _writeLog("_encryptInt->Success Encrypt Integer", false);
        return f.replaceAll(",", "");
        function g(a) {
            if (a === __data_angka[9]) return __data_huruf[2];
            if (a === __data_angka[7]) return __data_huruf[4];
            if (a === __data_angka[5]) return __data_huruf[6];
            if (a === __data_angka[3]) return __data_huruf[8];
            if (a === __data_angka[0]) return __data_huruf[1];
            if (a === __data_angka[1]) return __data_huruf[3];
            if (a === __data_angka[2]) return __data_huruf[5];
            if (a === __data_angka[4]) return __data_huruf[7];
            if (a === __data_angka[6]) return __data_huruf[9];
            if (a === __data_angka[8]) return __data_huruf[0];
            if (run_console) _writeLog("Value must be integer only -> " + a);
            return a;
        }
    } catch (h) {
        if (run_console) _writeLog(h);
    }
}

function _decryptInt(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_decryptInt->Value Is Not Found");
            return;
        }
        var b = a.length;
        var c = new Array(b);
        for (var d = 0; d < b; d++) {
            var e = a.substring(d, d + 1);
            e = g(e);
            c[d] = e;
        }
        var f = c.toString();
        String.prototype.replaceAll = function(a, b) {
            return this.split(a).join(b);
        };
        if (run_console) _writeLog("_decryptInt->Success Decrypt Integer", false);
        return f.replaceAll(",", "");
        function g(a) {
            a = a.toUpperCase();
            if (a === __data_huruf[2]) return __data_angka[9];
            if (a === __data_huruf[4]) return __data_angka[7];
            if (a === __data_huruf[6]) return __data_angka[5];
            if (a === __data_huruf[8]) return __data_angka[3];
            if (a === __data_huruf[1]) return __data_angka[0];
            if (a === __data_huruf[3]) return __data_angka[1];
            if (a === __data_huruf[5]) return __data_angka[2];
            if (a === __data_huruf[7]) return __data_angka[4];
            if (a === __data_huruf[9]) return __data_angka[6];
            if (a === __data_huruf[0]) return __data_angka[8];
            if (run_console) _writeLog("Key not found " + a);
            return a;
        }
    } catch (h) {
        if (run_console) _writeLog(h);
    }
}

function _replaceJS(a) {
    try {
        var b = a.replace("<script", "ssccrriipptt");
        b = b.replace("script>", "ssccrriipptt");
        b = b.replace("<script>", "ssccrriipptt");
        b = b.replace("</script>", "ssccrriipptt");
        b = b.replace("alert", "aallleerrtt");
        b = b.replace("alert(", "alleerrtt");
        b = b.replace(");", "}};;");
        return b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _replaceMaster(a) {
    try {
        var b = a.replace("'", "'");
        b = b.replace("<?php", "%tag%php%");
        b = _replaceJS(b);
        b = _escapeHtml(b);
        b = b.replace("#", "%HASTAG%");
        b = b.replace("<!--", "tag comment");
        b = b.replace("-->", "tag comment");
        b = b.replace("<input type=", "input text");
        b = b.replace("<style>", "style");
        b = b.replace("</style>", "style");
        b = b.replace("<button>", "button");
        b = b.replace("</button>", "button");
        b = b.replace("</hr", "hr");
        b = b.replace("<i>", "i");
        b = b.replace("</i>", "i");
        b = b.replace("<body bgcolor=", "body background color");
        b = b.replace("<html>", "html");
        b = b.replace("</html>", "html");
        return b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _returnMaster(a) {
    try {
        var b = a.replace("%HASTAG%", "#");
        b = b.replace("%tag%php%", "<?php");
        return b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _escapeHtml(a) {
    try {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/(?:\r\n|\r|\n)/g, " ");
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _checkEmail(a) {
    try {
        var b = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return b.test(a);
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _setCookie(a, b, c) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_setCookie->Name of Cookie is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_setCookie->Value of Cookie is nothing->set fefault from name");
            b = a;
        }
        if (void 0 === c) c = 60;
        var d = new Date();
        d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
        var e = "expires=" + d.toUTCString();
        document.cookie = a + "=" + b + ";" + e + ";path=/";
        if (run_console) _writeLog("_setCookie->Success Create new cookie ", false);
    } catch (f) {
        if (run_console) _writeLog(f);
    }
}

function _getCookie(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_getCookie->Name of Cookie is nothing");
            return;
        }
        var b = a + "=";
        var c = decodeURIComponent(document.cookie);
        var d = c.split(";");
        for (var e = 0; e < d.length; e++) {
            var f = d[e];
            while (" " == f.charAt(0)) f = f.substring(1);
            if (0 == f.indexOf(b)) {
                if (run_console) _writeLog("_getCookie-> Success get cookie of " + a + " is " + f.substring(b.length, f.length), false);
                return f.substring(b.length, f.length);
            }
        }
        return "";
    } catch (g) {
        if (run_console) _writeLog(g);
    }
}

function _deleteCookie(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_deleteCookie-> Name of cookie is nothing");
            return;
        }
        document.cookie = "" + a + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _detectBrowser() {
    try {
        var a = !!window.chrome && !!window.chrome.webstore;
        if (a) return "Chrome";
        var b = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
        if (b) return "Opera";
        var c = "undefined" !== typeof InstallTrigger;
        if (c) return "Firefox";
        var d = /constructor/i.test(window.HTMLElement) || function(a) {
            return "[object SafariRemoteNotification]" === a.toString();
        }(!window["safari"] || safari.pushNotification);
        if (d) return "Safari";
        var e = false || !!document.documentMode;
        if (e) return "Internet Explorer";
        var f = !e && !!window.StyleMedia;
        if (e) return "Edge";
        var g = (a || b) && !!window.CSS;
        if (g) return "Blink";
    } catch (h) {
        if (run_console) _writeLog(h);
    }
}

function _getLocation(a, b) {
    try {
        if (void 0 === a || false === a) {
            if (navigator.geolocation) navigator.geolocation.watchPosition(function(a) {
                var c = "Latitude : " + a.coords.latitude + ", Longitude : " + a.coords.longitude;
                if (void 0 === b) alert(c); else _printTo("" + b, c);
            }, d); else if (run_console) _writeLog("_getLocation->Browser Not Support Location");
            return;
        } else if (_isFunction(a)) {
            if (navigator.geolocation) navigator.geolocation.watchPosition(a, d); else if (run_console) _writeLog("_getLocation->Browser Not Support Location");
        } else if (run_console) _writeLog("_getLocation->" + a + " is not function");
    } catch (c) {
        if (run_console) _writeLog(c);
    }
    function d(a) {
        if (run_console) switch (a.code) {
          case a.PERMISSION_DENIED:
            _writeLog("User denied the request for Geolocation.");
            break;

          case a.POSITION_UNAVAILABLE:
            _writeLog("Location information is unavailable.");
            break;

          case a.TIMEOUT:
            _writeLog("The request to get user location timed out.");
            break;

          case a.UNKNOWN_ERROR:
            _writeLog("An unknown error occurred.");
        }
    }
}

function _writeAlert(a, b, c) {
    var d = '<div class="alert alert-' + c + ' alert-dismissible fade in" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' + b + "</div>";
    _printTo(a, d);
}

function _animation(a, b, c) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_loadAnimate-> Id of object is not found");
            return;
        }
        if (void 0 === b) if (run_console) {
            _writeLog("_loadAnimate-> Text Animate Null");
            b = "";
        }
        if (void 0 === c) {
            if (run_console) _writeLog("_loadAnimate-> Set default animate fa fa spinner");
            c = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
        }
        if ("refresh" === c) c = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>';
        if ("spinner" === c) c = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
        if ("circle" === c) c = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>';
        _printTo(a, "<center><h4>" + c + b + "</h4></center>");
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function _valueInput(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_valueInput-> Id of object is not found");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_valueInput-> Value of object is not found");
            b = "";
        }
        document.getElementById("" + a).value = "" + b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _getById(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_getById->Id of object is nothing");
            return;
        }
        if (void 0 === b) return document.getElementById("" + a); else if (_isFunction(b)) {
            var c = document.getElementById("" + a);
            b(c);
        }
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function _setValue(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_setValue->Id of object is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_setValue->Value is nothing set default empty");
            b = "";
        }
        var c = _getById("" + a);
        c.value = "" + b;
    } catch (d) {
        if (run_console) _writeLog(d);
    }
}

function _openUrl(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_openUrl->Url is nothing");
            return;
        }
        window.location.href = "" + a;
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _confirm(a, b, c) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_confirm->Question confirmation is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_confirm->Todo Yes is nothing");
            return;
        }
        var d = confirm("" + a);
        if (void 0 === c) {
            if (true == d) if (_isFunction(b)) b(); else if (run_console) _writeLog("_confirm->Todo Yes is not function");
        } else if (true == d) {
            if (_isFunction(b)) b(); else if (run_console) _writeLog("_confirm->Todo Yes is not function");
        } else if (_isFunction(c)) c(); else if (run_console) _writeLog("_confirm->Todo No is not function");
    } catch (e) {
        if (run_console) _writeLog(e);
    }
}

function _removeMe(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_hidden -> Id of object is nothing");
            return;
        }
        _getById("" + a).style.display = "none";
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _isHidden(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_isStyle -> Id of object is nothing");
            return;
        }
        var b = _getById("" + a).style.visibility;
        if ("hidden" === b) {
            if (run_console) _writeLog(b);
            return true;
        } else {
            if (run_console) _writeLog(b);
            return false;
        }
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _showMe(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_show -> Id of object is nothing");
            return;
        }
        _getById("" + a).style.visibility = "block";
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _baseUrl() {
    try {
        return document.baseURI;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _getAllCookie() {
    try {
        return document.cookie;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _getTitle() {
    try {
        return document.title;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _getDomain() {
    try {
        return document.domain;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _countImage() {
    try {
        return document.images.length;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _countLink() {
    try {
        return document.links.length;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _countForm() {
    try {
        return document.forms.length;
    } catch (a) {
        if (run_console) _writeLog(a);
    }
}

function _hideMe(a) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_hidden -> Id of object is nothing");
            return;
        }
        _getById("" + a).style.visibility = "hidden";
    } catch (b) {
        if (run_console) _writeLog(b);
    }
}

function _onClick(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_onClick -> Id of object is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_onClick -> Function is nothing");
            return;
        }
        if (_isFunction(b)) _getById("" + a).onclick = b; else if (run_console) _writeLog("_onClick -> " + b + " Is not function");
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _setImage(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_setImage -> Id of object is nothing");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_setImage ->Image is nothing");
            return;
        }
        _getById("" + a).src = "" + b;
    } catch (c) {
        if (run_console) _writeLog(c);
    }
}

function _refresh(a) {
    try {
        if (void 0 === a) window.location.href = ""; else window.location.href = "" + a;
    } catch (b) {
        if (run_console) _writeLog("_refresh -> " + b);
    }
}

function _isUrl(a) {
    try {
        if ("undefined" === a) if (run_console) {
            _writeLog("_isUrl-> Url is nothing");
            return;
        }
        var b = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return b.test(a);
    } catch (c) {
        if (run_console) {
            _writeLog(c);
            return;
        }
    }
}

var flat_ui_color = {
    wet_asphalt: "#34495e",
    midnight_blue: "#2c3e50",
    concrete: "#95a5a6",
    asbestos: "#7f8c8d",
    turqoise: "#1abc9c",
    green_sea: "#16a085",
    peter_river: "#3498db",
    belize_hole: "#2980b9",
    amethyst: "#9b59b6",
    wisteria: "#8e44ad",
    alizarian: "#e74c3c",
    pomegranate: "#c0392b",
    clouds: "#ecf0f1",
    silver: "#bdc3c7",
    carrot: "#e67e22",
    pumpkin: "#d35400",
    sun_flower: "#f1c40f",
    orange: "#f39c12",
    emerald: "#2ecc71",
    nephritis: "#27ae60"
};

function _qSelectorBackgroundCol(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_querySelector -> Class is undefined");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_querySelector -> color is undefined set default ->" + flat_color.alizarian);
            b = flat_color.alizarian;
        }
        document.querySelector("" + a).style.backgroundColor = b;
    } catch (c) {
        if (run_console) _writeLog("_querySelector ->" + c);
    }
}

function _qSelectorHTML(a, b) {
    try {
        if (void 0 === a) {
            if (run_console) _writeLog("_querySelector -> id of object is undefined");
            return;
        }
        if (void 0 === b) {
            if (run_console) _writeLog("_querySelector -> value is undefined");
            return;
        }
        document.querySelector("" + a).innerHTML = b;
    } catch (c) {
        if (run_console) _writeLog("_querySelector ->" + c);
    }
}

function _onKeyUp(a, b) {
    try {
        if (void 0 === a) if (run_console) {
            _writeLog("_onKeyUp-> id of object is undefined");
            return;
        }
        if (void 0 === b) if (run_console) {
            _writeLog("_onKeyUp-> callback function is undefined");
            return;
        }
        if (false == _isFunction(b)) if (run_console) {
            _writeLog("_onKeyUp-> " + b + " is not a function");
            return;
        }
        return _getById("" + a).addEventListener("keyup", b);
    } catch (c) {
        if (run_console) _writeLog("_onKeyUp-> " + c);
    }
}

function _onKeyDown(a, b) {
    try {
        if (void 0 === a) if (run_console) {
            _writeLog("_onKeyDown-> id of object is undefined");
            return;
        }
        if (void 0 === b) if (run_console) {
            _writeLog("_onKeyDown-> callback function is undefined");
            return;
        }
        if (false == _isFunction(b)) if (run_console) {
            _writeLog("_onKeyDown-> " + b + " is not a function");
            return;
        }
        return _getById("" + a).addEventListener("keydown", b);
    } catch (c) {
        if (run_console) _writeLog("_onKeyDown-> " + c);
    }
}
