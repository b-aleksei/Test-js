!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ResizeObserver=e()}(this,(function(){"use strict";var t=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}var n={size:{configurable:!0}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),e="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,n="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),r="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(n):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},i=["top","right","bottom","left","width","height","size","weight"],o="undefined"!=typeof MutationObserver,s=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,o=0;function s(){n&&(n=!1,t()),i&&a()}function c(){r(s)}function a(){var t=Date.now();if(n){if(t-o<2)return;i=!0}else n=!0,i=!1,setTimeout(c,20);o=t}return a}(this.refresh.bind(this))};s.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},s.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},s.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},s.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},s.prototype.connect_=function(){e&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),o?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},s.prototype.disconnect_=function(){e&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},s.prototype.onTransitionEnd_=function(t){var e=t.propertyName;void 0===e&&(e=""),i.some((function(t){return!!~e.indexOf(t)}))&&this.refresh()},s.getInstance=function(){return this.instance_||(this.instance_=new s),this.instance_},s.instance_=null;var c=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},a=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||n},h=v(0,0,0,0);function u(t){return parseFloat(t)||0}function f(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];return e.reduce((function(e,n){return e+u(t["border-"+n+"-width"])}),0)}var d="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof a(t).SVGGraphicsElement}:function(t){return t instanceof a(t).SVGElement&&"function"==typeof t.getBBox};function p(t){return e?d(t)?function(t){var e=t.getBBox();return v(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=a(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n+=1){var i=r[n],o=t["padding-"+i];e[i]=u(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,c=u(r.width),d=u(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=f(r,"left","right")+o),Math.round(d+s)!==n&&(d-=f(r,"top","bottom")+s)),!function(t){return t===a(t).document.documentElement}(t)){var p=Math.round(c+o)-e,l=Math.round(d+s)-n;1!==Math.abs(p)&&(c-=p),1!==Math.abs(l)&&(d-=l)}return v(i.left,i.top,c,d)}(t):h}function v(t,e,n,r){return{x:t,y:e,width:n,height:r}}var l=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=v(0,0,0,0),this.target=t};l.prototype.isActive=function(){var t=p(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},l.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var _=function(t,e){var n,r,i,o,s,a,h,u=(r=(n=e).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,h=Object.create(a.prototype),c(h,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),h);c(this,{target:t,contentRect:u})},b=function(e,n,r){if(this.activeObservations_=[],this.observations_=new t,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r};b.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof a(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new l(t)),this.controller_.addObserver(this),this.controller_.refresh())}},b.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof a(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},b.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},b.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},b.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},b.prototype.clearActive=function(){this.activeObservations_.splice(0)},b.prototype.hasActive=function(){return this.activeObservations_.length>0};var m="undefined"!=typeof WeakMap?new WeakMap:new t,y=function(t){if(!(this instanceof y))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=s.getInstance(),n=new b(t,e,this);m.set(this,n)};return["observe","unobserve","disconnect"].forEach((function(t){y.prototype[t]=function(){return(e=m.get(this))[t].apply(e,arguments);var e}})),void 0!==n.ResizeObserver?n.ResizeObserver:(n.ResizeObserver=y,y)}));