const util = require("util");


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }

        }, 5000);
    });
}



let promise = getData(123);

console.log("Immediately after creation:", util.inspect(promise, { showHidden: true, depth: 1 }));

setTimeout(() => {
    console.log("After 6 seconds:", util.inspect(promise, { showHidden: true, depth: 1 }));
}, 6000);




/*
Note : 

Why require gives error in browser?
When you run this code in the browser:


const util = require('util');  // ❌ error in browser

Uncaught ReferenceError: require is not defined


Reason:

The require() function is not available in browser environments — it is part of Node.js (CommonJS module system).

The browser only understands standard JavaScript, not Node-specific APIs like:

require

fs, os, util, path, etc.


When you run:

node app.js

You’re using Node.js, which:

Supports require() natively.

Knows how to load internal modules like util.


Conclusion:

require() and util.inspect() only work in Node.js, not in the browser.

The browser has no access to Node's internal modules.


| Feature          | Browser         | Node.js     |
| ---------------- | --------------- | ----------- |
| `require()`      | ❌ Not defined   | ✅ Works     |
| `util.inspect()` | ❌ Not available | ✅ Available |
| `console.log()`  | ✅ Works         | ✅ Works     |
| `Promise`        | ✅ Works         | ✅ Works     |


Chrome Browser vs Node.js (V8 Use)

| Feature                         | **Chrome Browser**                          | **Node.js**                                      |
| ------------------------------- | ------------------------------------------- | ------------------------------------------------ |
| **V8 Role**                     | Executes JS for web pages                   | Executes JS for backend/server scripts           |
| **Environment**                 | Browser-based                               | CLI-based (terminal)                             |
| **Built-in APIs**               | DOM, BOM, `alert`, `document`, etc.         | `fs`, `path`, `http`, `require`, etc.            |
| **`require()` available?**      | ❌ No                                        | ✅ Yes                                            |
| **`window` object?**            | ✅ Yes (`window.alert`, `window.setTimeout`) | ❌ No (`global` is used instead)                  |
| **I/O access (files, network)** | ❌ Limited (sandboxed)                       | ✅ Full access (real file system, sockets)        |
| **Asynchronous APIs**           | ✅ `fetch`, `setTimeout`, `addEventListener` | ✅ `fs.readFile`, `http.request`, etc.            |
| **Security**                    | High sandboxing (for safety)                | Less sandboxed, meant for full control           |
| **Modules**                     | ES Modules (`import/export`)                | CommonJS (`require/module.exports`) + ES Modules |
| **UI Access**                   | ✅ DOM + CSS + HTML                          | ❌ No DOM                                         |



 Conclusion
✅ Both Chrome and Node.js use the same V8 engine.

🧱 But the host environment differs:

Chrome is browser-focused with DOM and UI.

Node is backend/server-focused with file, network, and OS access.

🚫 That’s why some features like require() don't work in browser.

*/