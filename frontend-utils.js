// COOKIE
document.cookie = "isAuth=true; expires=Wed, 18 Dec 2024 12:00:00 UTC; path=/";
document.cookie = "isAuth=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
setCookie("userName", "Vecna", 1);

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
getCookie("userName");

// WINDOW BIND
$(window).bind("load", function () {
  // wait for image paint
});

// TIMEOUT
setTimeout(function () {
  // code
}, 2000);

// ELEMENT CHECK - Promise
var elementCheck = function (element) {
  return new Promise(function (resolve, reject) {
    var timesRun = 0;
    var intervalId = setInterval(function () {
      if (timesRun < 40) {
        if ($(element).length) {
          resolve();
          clearInterval(intervalId);
        }
      } else {
        reject();
        clearInterval(intervalId);
      }
      timesRun++;
    }, 100);
  });
};

var siteoptm202 = elementCheck("#sign-in-dropdown");
siteoptm202
  .then(
    function () {
      // resolve
      evarTrack(39, "siteoptm202_control_50");
    },
    function () {
      // reject
    }
  )
  .then(function () {
    // always
  });

// NOT EMPTY - Promise
var notEmpty = function (element) {
  return new Promise(function (resolve, reject) {
    var timesRun = 0;
    var intervalId = setInterval(function () {
      if (timesRun < 40) {
        if ($.trim($(element).html()) !== "") {
          clearInterval(intervalId);
          resolve();
        }
      } else {
        clearInterval(intervalId);
        reject();
      }
      timesRun++;
    }, 500);
  });
};

var siteoptm202 = notEmpty("#sign-in-dropdown");
siteoptm202.then(
  function () {
    console.log("discount exists");
  },
  function () {
    console.log("discount DNE");
  }
);

// BROWSER DETECTION
navigator.sayswho = (function () {
  var ua = navigator.userAgent;
  var tem;
  var M =
    ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
    [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return "IE " + (tem[1] || "");
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera");
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(" ");
})();

console.log(navigator.sayswho);

// ENCODE A QUERY STRING
var encodedParams = encodeURIComponent("gift-notice&dest=" + currentPath);
window.location.href = "/login/auth?" + encodedParams;
