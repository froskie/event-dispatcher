class EventDispatcher {
  constructor(){
    this._listeners = {};
  }
  
  on (type, callback) {
     this._listeners[type] = this._listeners[type] || [];
     if(this._listeners[type].indexOf(callback) === -1){
       this._listeners[type].push(callback);
     } 
  }
  
  off (type, callback) {
    var list = this._listeners[type];
    if(!list) return;
    
    var index = list.indexOf(callback);
    if(index !== -1) { list.splice(index, 1); }
  }
  
  emit (event, ...args) {
    var list = this._listeners[event];
		if ( list === undefined ) return ;
    
    list.forEach(method => {
      method.apply(null, args);
    }); 
    
  }
}
