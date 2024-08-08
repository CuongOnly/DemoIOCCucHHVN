//import FileSaver from "file-saver";
//import config from "../config.json";


String.prototype.replaceAll = function (find, replace) {
  var str = this;
  return str.replace(new RegExp(find, "g"), replace);
};
global.SPAVersion = "1.0.6";
global.LocalLogin = true;

global.User = {
  MaKVDK: 1,
  MaCQDK: 1,
};
global.grid_columns = {};
//kiem tra xem user co quyen khong
global.hasRoles = (roles) => {
  var ps = roles.split(";");
  var has = false;
  if (global.User.Roles !== undefined && global.User.Roles !== null) {
    ps.map((item, index) => {
      var exists = false;
      item = item.indexOf(".") >= 0 ? item : window.SoftCode + "." + item;
      global.User.Roles.map((r, i) => {
        exists = exists || r === item || r === "Admin" || r === "System"; //neu co quyen admin, system thi ok luon
      });
      has = has || exists;
    });
  }
  return has;
};
//dia chi phan dich vu cong
export function getPortalServer() {
  return window.myconfig.SERVER_PORTAL;
}
export function getServer() {
  return window.myconfig.SERVER;
}
function getToken() {
  var jwt = window.sessionStorage.getItem(window.JwtTokenTag);
  if (!jwt) {
    jwt = window.localStorage.getItem(window.JwtTokenTag);
  }
  return jwt;
}
export function saveToken(token) {
  window.localStorage.setItem(window.JwtTokenTag, token);
  window.sessionStorage.setItem(window.JwtTokenTag, token);
}
export function getRequest(rq) {
  return window.myconfig.SERVER_URL + rq;
}
//kiem tra va lay thong tin tu response

function checkResponse(response) {
  if (response.status === 505) {
    window.location.reload(true);
  }
}
export function getUrl(rq) {
  var requestOptions = {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  };
  //thong tin token key
  return fetch(rq, requestOptions)
    .then((res) => {
      return res.text();
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error + "");
    });
}
export function get(rq) {
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      credentials: "true",
      SPAVersion: global.SPAVersion,
    },
  };
  //thong tin token key
  const jwt = getToken();
  if (jwt != undefined && jwt != "") {
    var bearer = "Bearer " + jwt;
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: bearer,
      "x-bearer" : bearer,
    };
  }
  return fetch(rq, requestOptions)
    .then((res) => {
      checkResponse(res);
      if (res.ok) return res.json();
      else {
        return res.text().then((textLog) => {
          return Promise.reject(
            JSON.stringify({
              code: res.status,
              message: "Server error: " + res.statusText,
              traceLog: textLog,
            })
          );
        });
      }
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error + "");
    });
}
//luu lai cac cache neu can
const queryCacheResults = {};
export function queryCache(rq, ps) {
  var cacheID = rq + queryParams(ps);
  var cache = queryCacheResults[cacheID];
  if (cache) {
    //console.log("return from cache:" + cacheID);
    //var data = JSON.parse(cache);
    return new Promise(function (success, failed) {
      success(cache);
    });
  } else {
    return query(rq, ps).then(
      (result) => (queryCacheResults[cacheID] = result)
    );
  }
}
function queryParams(params) {
  const qs = params
    ? Object.keys(params)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
        )
        .join("&")
    : "";
  return qs;
}
export function query(rq, params) {
  const qs = queryParams(params);
  var requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      credentials: "include",
      SPAVersion: global.SPAVersion,
    },
  };
  //thong tin token key
  const jwt = getToken();
  if (jwt != undefined) {
    var bearer = "Bearer " + jwt;
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: bearer,
      "x-bearer": bearer,
    };
  }
  return fetch(getRequest(rq + "?" + qs), requestOptions)
    .then((res) => {
      checkResponse(res);
      if (res.ok) return res.json();
      else {
        return res.text().then((textLog) => {
          return Promise.reject(
            JSON.stringify({
              code: res.status,
              message: "Server error: " + res.statusText,
              traceLog: textLog,
            })
          );
        });
      }
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error + "");
    });
}
export function post(rq, ps) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      credentials: "include",
      SPAVersion: global.SPAVersion,
    },
    body: JSON.stringify(ps),
  };
  //thong tin token key
  const jwt = getToken();
  if (jwt !== undefined) {
    var bearer = "Bearer " + getToken();
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: bearer,
      "x-bearer": bearer,
    };
  }
  return fetch(getRequest(rq), requestOptions)
    .then((res) => {
      checkResponse(res);

      if (res.ok) return res.json();
      else {
        return res.text().then((textLog) => {
          return Promise.reject(
            JSON.stringify({
              code: res.status,
              message: "Server error: " + res.statusText,
              traceLog: textLog,
            })
          );
        });
      }
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error + "");
    });
}
export function upload(rq, ps) {
  const requestOptions = {
    method: "POST",
    headers: {},
    body: ps,
  };
  //thong tin token key
  const jwt = getToken();
  if (jwt !== undefined) {
    var bearer = "Bearer " + jwt;
    requestOptions.headers = {
      ...requestOptions,
      Authorization: bearer,
      "x-bearer": bearer,
    };
  }

  return fetch(getRequest(rq), requestOptions)
    .then((res) => {
      checkResponse(res);
      if (res.ok) return res.json();
      else {
        return res.text().then((textLog) => {
          return Promise.reject(
            JSON.stringify({
              code: res.status,
              message: "Server error: " + res.statusText,
              traceLog: textLog,
            })
          );
        });
      }
    })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((error) => {
      return Promise.reject(error + "");
    });
}
export function download(rq, ps) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      credentials: "include",
      SPAVersion: global.SPAVersion,
    },
    body: JSON.stringify(ps),
  };
  //thong tin token key
  const jwt = getToken();
  if (jwt !== undefined) {
    var bearer = "Bearer " + jwt;
    requestOptions.headers = {
      ...requestOptions.headers,
      Authorization: bearer,
      "x-bearer": bearer,
    };
  }
  var filename = "";
  return fetch(getRequest(rq), requestOptions)
    .then((response) => {
      filename = response.headers.get("Content-Disposition").split(";")[1];
      filename = filename.split("=")[1];
      while (filename.indexOf('"') >= 0) filename = filename.replace('"', "");
      return response.blob();
    })
    .then((file) => {
      //FileSaver.saveAs(file, filename );
    })
    .catch((error) => console.log(error));
}

export function populateID(list) {
  list.map((item, index) => (item.id = index + 1));
  return list;
}
