(function (_0x22d3e1) {
  if (typeof module === 'object' && module.exports) {
    module.exports = _0x22d3e1(global, global.engine, false);
  } else {
    window.engine = _0x22d3e1(window, window.engine, true);
  }
})(function (_0x571d5a, _0xe0eb81, _0x71f528) {
  'use strict';

  var _0x422b73 = [0x1, 0xf, 0x0, 0x1];
  function _0x4c1db9() {
    this.events = {};
  }
  function _0x5e8cba(_0x1ccdea, _0x186290) {
    this.code = _0x1ccdea;
    this.context = _0x186290;
  }
  _0x4c1db9.prototype._createClear = function (_0x3edf72, _0x511a9f, _0x3d98ea) {
    return function () {
      var _0x118341 = _0x3edf72.events[_0x511a9f];
      if (_0x118341) {
        var _0x4cce51 = -0x1;
        if (_0x3d98ea === undefined) {
          for (var _0x329516 = 0x0; _0x329516 < _0x118341.length; ++_0x329516) {
            if (_0x118341[_0x329516].wasInCPP !== undefined) {
              _0x4cce51 = _0x329516;
              break;
            }
          }
        } else {
          _0x4cce51 = _0x118341.indexOf(_0x3d98ea);
        }
        if (_0x4cce51 != -0x1) {
          _0x118341.splice(_0x4cce51, 0x1);
          if (_0x118341.length === 0x0) {
            delete _0x3edf72.events[_0x511a9f];
          }
        }
      } else if (_0xe0eb81.RemoveOnHandler !== undefined) {
        _0xe0eb81.RemoveOnHandler(_0x511a9f);
      }
    };
  };
  _0x4c1db9.prototype.on = function (_0x3ff1f6, _0x538494, _0x2f8c41) {
    var _0x22ea03 = this.events[_0x3ff1f6];
    if (_0x22ea03 === undefined) {
      _0x22ea03 = this.events[_0x3ff1f6] = [];
    }
    var _0x289a95 = new _0x5e8cba(_0x538494, _0x2f8c41 || this);
    _0x22ea03.push(_0x289a95);
    return {
      'clear': this._createClear(this, _0x3ff1f6, _0x289a95)
    };
  };
  _0x4c1db9.prototype.off = function (_0x139611, _0x43cf36, _0x3cdc6a) {
    var _0x474e27 = this.events[_0x139611];
    if (_0x474e27 !== undefined) {
      _0x3cdc6a = _0x3cdc6a || this;
      var _0x511cb8;
      var _0x4e0909 = _0x474e27.length;
      for (_0x511cb8 = 0x0; _0x511cb8 < _0x4e0909; ++_0x511cb8) {
        var _0x424d6d = _0x474e27[_0x511cb8];
        if (_0x424d6d.code == _0x43cf36 && _0x424d6d.context == _0x3cdc6a) {
          break;
        }
      }
      if (_0x511cb8 < _0x4e0909) {
        _0x474e27.splice(_0x511cb8, 0x1);
        if (_0x474e27.length === 0x0) {
          delete this.events[_0x139611];
        }
      }
    } else {
      _0xe0eb81.RemoveOnHandler(_0x139611);
    }
  };
  var _0x33b4e4 = _0xe0eb81 !== undefined;
  _0xe0eb81 = _0xe0eb81 || {};
  _0xe0eb81.isAttached = _0x33b4e4;
  _0xe0eb81.forceEnableMocking = _0x571d5a.engineForceEnableMocking || false;
  _0xe0eb81.IsAttached = _0xe0eb81.isAttached;
  _0xe0eb81.onEventsReplayed = null;
  _0x4c1db9.prototype.trigger = function (_0x32655b) {
    var _0x1beb3f = this.events[_0x32655b];
    if (_0x1beb3f !== undefined) {
      var _0x17b1ea = Array.prototype.slice.call(arguments, 0x1);
      _0x1beb3f.forEach(function (_0x2edf28) {
        _0x2edf28.code.apply(_0x2edf28.context, _0x17b1ea);
      });
    }
  };
  _0x4c1db9.prototype.merge = function (_0x36de1c) {
    var _0x1ec913 = this.events;
    var _0x13d21e = _0x36de1c.events;
    var _0x20250f = Array.prototype.push;
    var _0x5efecd;
    for (var _0x9a78cf in _0x13d21e) {
      _0x5efecd = _0x1ec913[_0x9a78cf] = _0x1ec913[_0x9a78cf] || [];
      _0x20250f.apply(_0x5efecd, _0x13d21e[_0x9a78cf]);
    }
  };
  function _0x263b75(_0x3c14c2, _0x27dace, _0x106683) {
    var _0x280893 = function () {
      _0x3c14c2.call(_0x27dace, _0x106683);
    };
    setTimeout(_0x280893);
  }
  function _0x58e9f5() {
    this.emitter = new _0x4c1db9();
    this.state = "pending";
    this.result = null;
  }
  _0x58e9f5.prototype.resolve = function (_0x1db084) {
    this.state = "fulfilled";
    this.result = _0x1db084;
    this.emitter.trigger("fulfilled", _0x1db084);
  };
  _0x58e9f5.prototype.reject = function (_0x4a4191) {
    this.state = "broken";
    this.result = _0x4a4191;
    this.emitter.trigger("broken", _0x4a4191);
  };
  _0x58e9f5.prototype.success = function (_0x168af2, _0x5f4ff6) {
    if (this.state !== "fulfilled") {
      this.emitter.on("fulfilled", _0x168af2, _0x5f4ff6);
    } else {
      _0x263b75(_0x168af2, _0x5f4ff6 || this, this.result);
    }
    return this;
  };
  _0x58e9f5.prototype.always = function (_0x550eb7, _0x4c256e) {
    this.success(_0x550eb7, _0x4c256e);
    this.otherwise(_0x550eb7, _0x4c256e);
    return this;
  };
  _0x58e9f5.prototype.otherwise = function (_0xa66a14, _0x49594e) {
    if (this.state !== "broken") {
      this.emitter.on("broken", _0xa66a14, _0x49594e);
    } else {
      _0x263b75(_0xa66a14, _0x49594e || this, this.result);
    }
    return this;
  };
  _0x58e9f5.prototype.merge = function (_0x3354f5) {
    if (this.state === "pending") {
      this.emitter.merge(_0x3354f5.emitter);
    } else {
      var _0x2f1f34 = _0x3354f5.emitter.events[this.state];
      var _0x587a68 = this;
      if (_0x2f1f34 !== undefined) {
        _0x2f1f34.forEach(function (_0x47134e) {
          _0x47134e.code.call(_0x47134e.context, _0x587a68.result);
        });
      }
    }
  };
  _0x58e9f5.prototype.make_chain = function (_0x5304ab, _0x5cff21, _0x1c9022) {
    return function (_0x5ea607) {
      var _0x3e74cb;
      try {
        _0x3e74cb = _0x5304ab.code.call(_0x5304ab.context, _0x5ea607);
        if (_0x3e74cb instanceof _0x58e9f5) {
          _0x3e74cb.merge(_0x5cff21);
        } else if (this.state === _0x1c9022) {
          _0x5cff21.resolve(_0x3e74cb);
        } else {
          _0x5cff21.reject(_0x3e74cb);
        }
      } catch (_0x57a5be) {
        _0xe0eb81._ThrowError(_0x57a5be);
        _0x5cff21.reject(_0x57a5be);
      }
    };
  };
  function _0x29a054(_0x23fe1a) {
    return function () {
      return _0x23fe1a;
    };
  }
  _0x58e9f5.prototype.then = function (_0x383fcf, _0x5a18f6) {
    var _0x53ae35 = new _0x58e9f5();
    var _0x5f2919 = new _0x5e8cba(_0x383fcf || _0x29a054(this), this);
    this.success(this.make_chain(_0x5f2919, _0x53ae35, "fulfilled"), this);
    var _0x5c2d37 = new _0x5e8cba(_0x5a18f6 || _0x29a054(this), this);
    this.otherwise(this.make_chain(_0x5c2d37, _0x53ae35, "broken"), this);
    return _0x53ae35;
  };
  if (!_0xe0eb81.isAttached || _0xe0eb81.forceEnableMocking) {
    _0x4c1db9.prototype.on = function (_0x549558, _0x35c2ef, _0x1021ad) {
      var _0x1c019c = this.events[_0x549558];
      if (this.browserCallbackOn) {
        this.browserCallbackOn(_0x549558, _0x35c2ef, _0x1021ad);
      }
      if (_0x1c019c === undefined) {
        _0x1c019c = this.events[_0x549558] = [];
      }
      var _0x41e0b2 = new _0x5e8cba(_0x35c2ef, _0x1021ad || this);
      _0x1c019c.push(_0x41e0b2);
      return {
        'clear': this._createClear(this, _0x549558, _0x41e0b2)
      };
    };
    _0x4c1db9.prototype.off = function (_0x355003, _0x4ad1db, _0x3aab28) {
      var _0x2aa8c8 = this.events[_0x355003];
      if (_0x2aa8c8 !== undefined) {
        _0x3aab28 = _0x3aab28 || this;
        var _0x6a044;
        var _0x21673c = _0x2aa8c8.length;
        for (_0x6a044 = 0x0; _0x6a044 < _0x21673c; ++_0x6a044) {
          var _0x3f81c9 = _0x2aa8c8[_0x6a044];
          if (_0x3f81c9.code == _0x4ad1db && _0x3f81c9.context == _0x3aab28) {
            break;
          }
        }
        if (_0x6a044 < _0x21673c) {
          _0x2aa8c8.splice(_0x6a044, 0x1);
          if (_0x2aa8c8.length === 0x0) {
            delete this.events[_0x355003];
            if (this.browserCallbackOff) {
              this.browserCallbackOff(_0x355003, _0x4ad1db, _0x3aab28);
            }
          }
        }
      }
    };
    _0xe0eb81.SendMessage = function (_0x10e63e, _0x488aab) {
      var _0x5ef2ff = Array.prototype.slice.call(arguments, 0x2);
      var _0x5700e5 = _0xe0eb81._ActiveRequests[_0x488aab];
      delete _0xe0eb81._ActiveRequests[_0x488aab];
      var _0x5d69a4 = function () {
        var _0x2ae178 = _0xe0eb81._mocks[_0x10e63e];
        if (_0x2ae178 !== undefined) {
          _0x5700e5.resolve(_0x2ae178.apply(_0xe0eb81, _0x5ef2ff));
        }
      };
      window.setTimeout(_0x5d69a4, 0x10);
    };
    _0xe0eb81.TriggerEvent = function () {
      var _0x8bf13b = Array.prototype.slice.call(arguments);
      var _0xc39a78 = function () {
        var _0x503c83 = _0xe0eb81._mocks[_0x8bf13b[0x0]];
        if (_0x503c83 !== undefined) {
          _0x503c83.apply(_0xe0eb81, _0x8bf13b.slice(0x1));
        }
      };
      window.setTimeout(_0xc39a78, 0x10);
    };
    _0xe0eb81.BindingsReady = function () {
      _0xe0eb81._OnReady();
    };
    _0xe0eb81.__observeLifetime = function () {};
    _0xe0eb81.beginEventRecording = _0xe0eb81.endEventRecording = _0xe0eb81.saveEventRecord = function () {
      console.warning("Event recording will not work in the browser!");
    };
    _0xe0eb81._mocks = {};
    _0xe0eb81._mockImpl = function (_0x150c0a, _0x27a049, _0x7bb5ad, _0x5cf72c) {
      if (_0x27a049 && _0x7bb5ad) {
        this._mocks[_0x150c0a] = _0x27a049;
      }
      var _0x5c5eac = _0x27a049.toString().replace("function " + _0x27a049.name + '(', '');
      var _0x29b00d = _0x5c5eac.indexOf(')');
      var _0x176644 = _0x5c5eac.substr(0x0, _0x29b00d);
      if (this.browserCallbackMock) {
        this.browserCallbackMock(_0x150c0a, _0x176644, _0x7bb5ad, Boolean(_0x5cf72c));
      }
    };
    _0xe0eb81.mock = function (_0x540823, _0x20691b, _0x35c301) {
      this._mockImpl(_0x540823, _0x20691b, true, _0x35c301);
    };
    _0xe0eb81.translate = function (_0x1c89e5) {
      return _0x1c89e5;
    };
  }
  _0xe0eb81.events = {};
  for (var _0x325538 in _0x4c1db9.prototype) {
    _0xe0eb81[_0x325538] = _0x4c1db9.prototype[_0x325538];
  }
  if (_0xe0eb81.isAttached && !_0xe0eb81.forceEnableMocking) {
    _0xe0eb81.on = function (_0x40044b, _0x24c9eb, _0x6c5a20) {
      var _0x1059a2 = this.events[_0x40044b];
      if (_0x1059a2 === undefined && _0xe0eb81.AddOrRemoveOnHandler !== undefined) {
        var _0x3f9c5c = _0xe0eb81.AddOrRemoveOnHandler(_0x40044b, _0x24c9eb, _0x6c5a20);
        if (_0x3f9c5c === undefined) {
          return {
            'clear': this._createClear(this, _0x40044b, undefined)
          };
        }
        _0x1059a2 = this.events[_0x40044b] = [];
        var _0x3fbeb5 = new _0x5e8cba(_0x3f9c5c[0x0], _0x3f9c5c[0x1] || this);
        _0x3fbeb5.wasInCPP = true;
        _0x1059a2.push(_0x3fbeb5);
      } else if (_0x1059a2 === undefined) {
        _0x1059a2 = this.events[_0x40044b] = [];
      }
      var _0x54ae85 = new _0x5e8cba(_0x24c9eb, _0x6c5a20 || this);
      _0x1059a2.push(_0x54ae85);
      return {
        'clear': this._createClear(this, _0x40044b, _0x54ae85)
      };
    };
  }
  _0xe0eb81._trigger = _0x4c1db9.prototype.trigger;
  var _0x59cf80 = Array.prototype.concat;
  _0xe0eb81.whyNotWorking = function (_0x4c475e) {
    this._trigger.apply(this, arguments);
    this.TriggerEvent.apply(this, arguments);
    if (this.events.all !== undefined) {
      var _0x25b137 = _0x59cf80.apply(["all"], arguments);
      this._trigger.apply(this, _0x25b137);
    }
  };
  _0xe0eb81.showOverlay = function () {};
  _0xe0eb81.hideOverlay = function () {};
  if (_0xe0eb81.isAttached && !_0xe0eb81.forceEnableMocking) {
    _0xe0eb81.mock = function (_0xea9244, _0x188a08, _0x1ae11d) {};
  }
  _0xe0eb81._BindingsReady = false;
  _0xe0eb81._WindowLoaded = false;
  _0xe0eb81._RequestId = 0x0;
  _0xe0eb81._ActiveRequests = {};
  _0xe0eb81.createDeferred = _0x571d5a.engineCreateDeferred === undefined ? function () {
    return new _0x58e9f5();
  } : _0x571d5a.engineCreateDeferred;
  _0xe0eb81.loveYou = function () {
    _0xe0eb81._RequestId++;
    var _0x2c8769 = _0xe0eb81._RequestId;
    var _0x73b5cc = _0xe0eb81.createDeferred();
    _0xe0eb81._ActiveRequests[_0x2c8769] = _0x73b5cc;
    var _0x56c8a6 = Array.prototype.slice.call(arguments);
    _0x56c8a6.splice(0x1, 0x0, _0x2c8769);
    _0xe0eb81.SendMessage.apply(this, _0x56c8a6);
    return _0x73b5cc;
  };
  _0xe0eb81._Result = function (_0x48d912) {
    var _0x4ec118 = _0xe0eb81._ActiveRequests[_0x48d912];
    if (_0x4ec118 !== undefined) {
      delete _0xe0eb81._ActiveRequests[_0x48d912];
      var _0x3ee12a = Array.prototype.slice.call(arguments);
      _0x3ee12a.shift();
      _0x4ec118.resolve.apply(_0x4ec118, _0x3ee12a);
    }
  };
  _0xe0eb81._Errors = ["Success", "ArgumentType", "NoSuchMethod", 'NoResult'];
  _0xe0eb81._ForEachError = function (_0x5e617a, _0x3535fe) {
    var _0x1c38f3 = _0x5e617a.length;
    for (var _0x2b9cd9 = 0x0; _0x2b9cd9 < _0x1c38f3; ++_0x2b9cd9) {
      _0x3535fe(_0x5e617a[_0x2b9cd9].first, _0x5e617a[_0x2b9cd9].second);
    }
  };
  _0xe0eb81._MapErrors = function (_0x22f1f5) {
    var _0x148d32 = _0x22f1f5.length;
    for (var _0x4c9f23 = 0x0; _0x4c9f23 < _0x148d32; ++_0x4c9f23) {
      _0x22f1f5[_0x4c9f23].first = _0xe0eb81._Errors[_0x22f1f5[_0x4c9f23].first];
    }
  };
  _0xe0eb81._TriggerError = function (_0x3f62ce, _0x4d44c5) {
    _0xe0eb81.whyNotWorking('Error', _0x3f62ce, _0x4d44c5);
  };
  _0xe0eb81._OnError = function (_0x16c49f, _0xbd5a51) {
    _0xe0eb81._MapErrors(_0xbd5a51);
    if (_0x16c49f === null || _0x16c49f === 0x0) {
      _0xe0eb81._ForEachError(_0xbd5a51, _0xe0eb81._TriggerError);
    } else {
      var _0x1da4ff = _0xe0eb81._ActiveRequests[_0x16c49f];
      delete _0xe0eb81._ActiveRequests[_0x16c49f];
      _0x1da4ff.reject(_0xbd5a51);
    }
  };
  _0xe0eb81._eventHandles = {};
  _0xe0eb81._Register = function (_0x55aa72) {
    var _0x38a50b = function (_0x47c5dc, _0x194a1a) {
      return function () {
        var _0x2eb5ff = [_0x47c5dc];
        _0x2eb5ff.push.apply(_0x2eb5ff, arguments);
        _0x194a1a.TriggerEvent.apply(this, _0x2eb5ff);
      };
    }(_0x55aa72, _0xe0eb81);
    _0xe0eb81._eventHandles[_0x55aa72] = _0xe0eb81.on(_0x55aa72, _0x38a50b);
  };
  _0xe0eb81._removeEventThunk = function (_0x56fd30) {
    var _0x41d71c = _0xe0eb81._eventHandles[_0x56fd30];
    _0x41d71c.clear();
    delete _0xe0eb81._eventHandles[_0x56fd30];
  };
  _0xe0eb81._Unregister = function (_0x3a29b9) {
    if (typeof _0x3a29b9 === "string") {
      _0xe0eb81._removeEventThunk(_0x3a29b9);
    } else {
      _0x3a29b9.forEach(_0xe0eb81._removeEventThunk, _0xe0eb81);
    }
  };
  function _0xe7d866(_0x5d36e1) {
    var _0x4fb44b = function () {
      var _0x4bcef0 = Array.prototype.slice.call(arguments);
      _0x4bcef0.splice(0x0, 0x0, _0x5d36e1, this._id);
      return _0xe0eb81.loveYou.apply(_0xe0eb81, _0x4bcef0);
    };
    return _0x4fb44b;
  }
  _0xe0eb81._boundTypes = {};
  _0xe0eb81._createInstance = function (_0x3f4dc8) {
    var _0x4495e3 = _0x3f4dc8[0x0];
    var _0x5a4938 = _0x3f4dc8[0x1];
    var _0x4ae28d = _0x3f4dc8[0x2];
    var _0x34afec = _0xe0eb81._boundTypes[_0x4495e3];
    if (_0x34afec === undefined) {
      _0x34afec = function (_0x30fdb0) {
        this._id = _0x30fdb0;
      };
      _0x34afec.prototype.__Type = _0x4495e3;
      _0x4ae28d.forEach(function (_0x396358) {
        _0x34afec.prototype[_0x396358] = _0xe7d866(_0x4495e3 + '_' + _0x396358);
      });
      _0xe0eb81._boundTypes[_0x4495e3] = _0x34afec;
    }
    var _0x1519d3 = new _0x34afec(_0x5a4938);
    _0xe0eb81.__observeLifetime(_0x1519d3);
    return _0x1519d3;
  };
  _0xe0eb81._OnReady = function () {
    _0xe0eb81._BindingsReady = true;
    if (_0xe0eb81._WindowLoaded) {
      _0xe0eb81.whyNotWorking("Ready");
    }
  };
  _0xe0eb81._OnWindowLoaded = function () {
    _0xe0eb81._WindowLoaded = true;
    if (_0xe0eb81._BindingsReady) {
      _0xe0eb81.whyNotWorking("Ready");
    }
  };
  _0xe0eb81._ThrowError = function (_0x1401fa) {
    var _0x484669 = function (_0x140b8f) {
      return "\t" + _0x140b8f;
    };
    var _0x45a91f = _0x1401fa.name + ": " + _0x1401fa.message + "\n" + _0x1401fa.stack.split("\n").map(_0x484669).join("\n");
    console.error(_0x45a91f);
  };
  if (_0x71f528) {
    _0x571d5a.addEventListener("load", function () {
      _0xe0eb81._OnWindowLoaded();
    });
  } else {
    _0xe0eb81._WindowLoaded = true;
  }
  _0xe0eb81._coherentGlobalCanvas = document.createElement("canvas");
  _0xe0eb81._coherentGlobalCanvas.id = "coherentGlobalCanvas";
  _0xe0eb81._coherentGlobalCanvas.width = 0x1;
  _0xe0eb81._coherentGlobalCanvas.height = 0x1;
  _0xe0eb81._coherentGlobalCanvas.style.zIndex = 0x0;
  _0xe0eb81._coherentGlobalCanvas.style.position = "absolute";
  _0xe0eb81._coherentGlobalCanvas.style.border = "0px solid";
  _0xe0eb81._coherentLiveImageData = new Array();
  _0xe0eb81._coherentCreateImageData = function (_0x3f9c38, _0x2af199) {
    var _0x1e759e = _0xe0eb81._coherentGlobalCanvas.getContext('2d');
    var _0x1a19f8 = _0x1e759e.coherentCreateImageData(_0x2af199);
    _0xe0eb81._coherentLiveImageData[_0x3f9c38] = _0x1a19f8;
  };
  _0xe0eb81._coherentUpdatedImageData = function (_0x3525e6) {
    _0xe0eb81._coherentLiveImageData[_0x3525e6].coherentUpdate();
    var _0x46ce8b = document.getElementsByTagName("canvas");
    for (var _0x2848c8 = 0x0; _0x2848c8 < _0x46ce8b.length; ++_0x2848c8) {
      if (_0x46ce8b[_0x2848c8].onEngineImageDataUpdated != null) {
        _0x46ce8b[_0x2848c8].onEngineImageDataUpdated(_0x3525e6, _0xe0eb81._coherentLiveImageData[_0x3525e6]);
      }
    }
  };
  _0xe0eb81.reloadLocalization = function () {
    var _0x5f0f1d = document.querySelectorAll("[data-l10n-id]");
    for (var _0xdb7a48 = 0x0; _0xdb7a48 < _0x5f0f1d.length; _0xdb7a48++) {
      var _0x1055fb = _0x5f0f1d.item(_0xdb7a48);
      var _0x11b9c9 = _0xe0eb81.translate(_0x1055fb.dataset.l10nId);
      if (!_0x11b9c9) {
        var _0x1a6477 = "Failed to find translation for key: " + _0x1055fb.dataset.l10nId;
        console.warn(_0x1a6477);
      } else {
        _0x1055fb.textContent = _0x11b9c9;
      }
    }
  };
  _0xe0eb81.on('_coherentCreateImageData', _0xe0eb81._coherentCreateImageData);
  _0xe0eb81.on('_coherentUpdatedImageData', _0xe0eb81._coherentUpdatedImageData);
  _0xe0eb81.on('_Result', _0xe0eb81._Result, _0xe0eb81);
  _0xe0eb81.on("_Register", _0xe0eb81._Register, _0xe0eb81);
  _0xe0eb81.on("_Unregister", _0xe0eb81._Unregister, _0xe0eb81);
  _0xe0eb81.on("_OnReady", _0xe0eb81._OnReady, _0xe0eb81);
  _0xe0eb81.on('_OnError', _0xe0eb81._OnError, _0xe0eb81);
  _0xe0eb81.on('__OnReplayRecordCompleted', function (_0x2b94d6) {
    if (_0xe0eb81.onEventsReplayed) {
      _0xe0eb81.onEventsReplayed();
    }
  });
  _0xe0eb81.BindingsReady(_0x422b73[0x0], _0x422b73[0x1], _0x422b73[0x2], _0x422b73[0x3]);
  return _0xe0eb81;
});