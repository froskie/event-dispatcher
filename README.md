# event-dispatcher

Simple class to dispatch and manage events. Example: [JSBin](http://jsbin.com/hayimu/edit?js,console).

*Usage*:

```javascript
// define your callback
let callback = (...args) => { console.log(args); }

// initiate class
var ed = new EventDispatcher();

// register your callback
ed.on("event", callback);

// emit your events
ed.emit("event");
ed.emit("event", "with", "some", "arguments");

// unregister your callback
ed.off("event", callback);
ed.emit("event");
```
