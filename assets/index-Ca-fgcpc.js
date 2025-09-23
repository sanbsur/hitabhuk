(function() {
    const p = document.createElement("link").relList;
    if (p && p.supports && p.supports("modulepreload"))
        return;
    for (const T of document.querySelectorAll('link[rel="modulepreload"]'))
        r(T);
    new MutationObserver(T => {
        for (const _ of T)
            if (_.type === "childList")
                for (const H of _.addedNodes)
                    H.tagName === "LINK" && H.rel === "modulepreload" && r(H)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function x(T) {
        const _ = {};
        return T.integrity && (_.integrity = T.integrity), T.referrerPolicy && (_.referrerPolicy = T.referrerPolicy), T.crossOrigin === "use-credentials" ? _.credentials = "include" : T.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin", _
    }
    function r(T) {
        if (T.ep)
            return;
        T.ep = !0;
        const _ = x(T);
        fetch(T.href, _)
    }
})();
var bs = {
        exports: {}
    },
    Yn = {}; /**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var Md;
function O0() {
    if (Md)
        return Yn;
    Md = 1;
    var f = Symbol.for("react.transitional.element"),
        p = Symbol.for("react.fragment");
    function x(r, T, _) {
        var H = null;
        if (_ !== void 0 && (H = "" + _), T.key !== void 0 && (H = "" + T.key), "key" in T) {
            _ = {};
            for (var Q in T)
                Q !== "key" && (_[Q] = T[Q])
        } else
            _ = T;
        return T = _.ref, {
            $$typeof: f,
            type: r,
            key: H,
            ref: T !== void 0 ? T : null,
            props: _
        }
    }
    return Yn.Fragment = p, Yn.jsx = x, Yn.jsxs = x, Yn
}
var _d;
function D0() {
    return _d || (_d = 1, bs.exports = O0()), bs.exports
}
var s = D0(),
    xs = {
        exports: {}
    },
    J = {}; /**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var Od;
function R0() {
    if (Od)
        return J;
    Od = 1;
    var f = Symbol.for("react.transitional.element"),
        p = Symbol.for("react.portal"),
        x = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        T = Symbol.for("react.profiler"),
        _ = Symbol.for("react.consumer"),
        H = Symbol.for("react.context"),
        Q = Symbol.for("react.forward_ref"),
        M = Symbol.for("react.suspense"),
        S = Symbol.for("react.memo"),
        R = Symbol.for("react.lazy"),
        K = Symbol.iterator;
    function W(d) {
        return d === null || typeof d != "object" ? null : (d = K && d[K] || d["@@iterator"], typeof d == "function" ? d : null)
    }
    var pt = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        ct = Object.assign,
        yt = {};
    function bt(d, E, C) {
        this.props = d,
        this.context = E,
        this.refs = yt,
        this.updater = C || pt
    }
    bt.prototype.isReactComponent = {},
    bt.prototype.setState = function(d, E) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, E, "setState")
    },
    bt.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    };
    function Wt() {}
    Wt.prototype = bt.prototype;
    function Ft(d, E, C) {
        this.props = d,
        this.context = E,
        this.refs = yt,
        this.updater = C || pt
    }
    var At = Ft.prototype = new Wt;
    At.constructor = Ft,
    ct(At, bt.prototype),
    At.isPureReactComponent = !0;
    var Bt = Array.isArray,
        $ = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Et = Object.prototype.hasOwnProperty;
    function Ht(d, E, C, D, q, tt) {
        return C = tt.ref, {
            $$typeof: f,
            type: d,
            key: E,
            ref: C !== void 0 ? C : null,
            props: tt
        }
    }
    function X(d, E) {
        return Ht(d.type, E, void 0, void 0, void 0, d.props)
    }
    function Dt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === f
    }
    function Bl(d) {
        var E = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(C) {
            return E[C]
        })
    }
    var gl = /\/+/g;
    function Mt(d, E) {
        return typeof d == "object" && d !== null && d.key != null ? Bl("" + d.key) : E.toString(36)
    }
    function Dl() {}
    function El(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(Dl, Dl) : (d.status = "pending", d.then(function(E) {
                d.status === "pending" && (d.status = "fulfilled", d.value = E)
            }, function(E) {
                d.status === "pending" && (d.status = "rejected", d.reason = E)
            })), d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function St(d, E, C, D, q) {
        var tt = typeof d;
        (tt === "undefined" || tt === "boolean") && (d = null);
        var k = !1;
        if (d === null)
            k = !0;
        else
            switch (tt) {
            case "bigint":
            case "string":
            case "number":
                k = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case f:
                case p:
                    k = !0;
                    break;
                case R:
                    return k = d._init, St(k(d._payload), E, C, D, q)
                }
            }
        if (k)
            return q = q(d), k = D === "" ? "." + Mt(d, 0) : D, Bt(q) ? (C = "", k != null && (C = k.replace(gl, "$&/") + "/"), St(q, E, C, "", function(al) {
                return al
            })) : q != null && (Dt(q) && (q = X(q, C + (q.key == null || d && d.key === q.key ? "" : ("" + q.key).replace(gl, "$&/") + "/") + k)), E.push(q)), 1;
        k = 0;
        var nt = D === "" ? "." : D + ":";
        if (Bt(d))
            for (var mt = 0; mt < d.length; mt++)
                D = d[mt],
                tt = nt + Mt(D, mt),
                k += St(D, E, C, tt, q);
        else if (mt = W(d), typeof mt == "function")
            for (d = mt.call(d), mt = 0; !(D = d.next()).done;)
                D = D.value,
                tt = nt + Mt(D, mt++),
                k += St(D, E, C, tt, q);
        else if (tt === "object") {
            if (typeof d.then == "function")
                return St(El(d), E, C, D, q);
            throw E = String(d), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
        }
        return k
    }
    function N(d, E, C) {
        if (d == null)
            return d;
        var D = [],
            q = 0;
        return St(d, D, "", "", function(tt) {
            return E.call(C, tt, q++)
        }), D
    }
    function U(d) {
        if (d._status === -1) {
            var E = d._result;
            E = E(),
            E.then(function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 1, d._result = C)
            }, function(C) {
                (d._status === 0 || d._status === -1) && (d._status = 2, d._result = C)
            }),
            d._status === -1 && (d._status = 0, d._result = E)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var O = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var E = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(E))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    };
    function st() {}
    return J.Children = {
        map: N,
        forEach: function(d, E, C) {
            N(d, function() {
                E.apply(this, arguments)
            }, C)
        },
        count: function(d) {
            var E = 0;
            return N(d, function() {
                E++
            }), E
        },
        toArray: function(d) {
            return N(d, function(E) {
                    return E
                }) || []
        },
        only: function(d) {
            if (!Dt(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    }, J.Component = bt, J.Fragment = x, J.Profiler = T, J.PureComponent = Ft, J.StrictMode = r, J.Suspense = M, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, J.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return $.H.useMemoCache(d)
        }
    }, J.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }, J.cloneElement = function(d, E, C) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var D = ct({}, d.props),
            q = d.key,
            tt = void 0;
        if (E != null)
            for (k in E.ref !== void 0 && (tt = void 0), E.key !== void 0 && (q = "" + E.key), E)
                !Et.call(E, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && E.ref === void 0 || (D[k] = E[k]);
        var k = arguments.length - 2;
        if (k === 1)
            D.children = C;
        else if (1 < k) {
            for (var nt = Array(k), mt = 0; mt < k; mt++)
                nt[mt] = arguments[mt + 2];
            D.children = nt
        }
        return Ht(d.type, q, void 0, void 0, tt, D)
    }, J.createContext = function(d) {
        return d = {
            $$typeof: H,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, d.Provider = d, d.Consumer = {
            $$typeof: _,
            _context: d
        }, d
    }, J.createElement = function(d, E, C) {
        var D,
            q = {},
            tt = null;
        if (E != null)
            for (D in E.key !== void 0 && (tt = "" + E.key), E)
                Et.call(E, D) && D !== "key" && D !== "__self" && D !== "__source" && (q[D] = E[D]);
        var k = arguments.length - 2;
        if (k === 1)
            q.children = C;
        else if (1 < k) {
            for (var nt = Array(k), mt = 0; mt < k; mt++)
                nt[mt] = arguments[mt + 2];
            q.children = nt
        }
        if (d && d.defaultProps)
            for (D in k = d.defaultProps, k)
                q[D] === void 0 && (q[D] = k[D]);
        return Ht(d, tt, void 0, void 0, null, q)
    }, J.createRef = function() {
        return {
            current: null
        }
    }, J.forwardRef = function(d) {
        return {
            $$typeof: Q,
            render: d
        }
    }, J.isValidElement = Dt, J.lazy = function(d) {
        return {
            $$typeof: R,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: U
        }
    }, J.memo = function(d, E) {
        return {
            $$typeof: S,
            type: d,
            compare: E === void 0 ? null : E
        }
    }, J.startTransition = function(d) {
        var E = $.T,
            C = {};
        $.T = C;
        try {
            var D = d(),
                q = $.S;
            q !== null && q(C, D),
            typeof D == "object" && D !== null && typeof D.then == "function" && D.then(st, O)
        } catch (tt) {
            O(tt)
        } finally {
            $.T = E
        }
    }, J.unstable_useCacheRefresh = function() {
        return $.H.useCacheRefresh()
    }, J.use = function(d) {
        return $.H.use(d)
    }, J.useActionState = function(d, E, C) {
        return $.H.useActionState(d, E, C)
    }, J.useCallback = function(d, E) {
        return $.H.useCallback(d, E)
    }, J.useContext = function(d) {
        return $.H.useContext(d)
    }, J.useDebugValue = function() {}, J.useDeferredValue = function(d, E) {
        return $.H.useDeferredValue(d, E)
    }, J.useEffect = function(d, E, C) {
        var D = $.H;
        if (typeof C == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return D.useEffect(d, E)
    }, J.useId = function() {
        return $.H.useId()
    }, J.useImperativeHandle = function(d, E, C) {
        return $.H.useImperativeHandle(d, E, C)
    }, J.useInsertionEffect = function(d, E) {
        return $.H.useInsertionEffect(d, E)
    }, J.useLayoutEffect = function(d, E) {
        return $.H.useLayoutEffect(d, E)
    }, J.useMemo = function(d, E) {
        return $.H.useMemo(d, E)
    }, J.useOptimistic = function(d, E) {
        return $.H.useOptimistic(d, E)
    }, J.useReducer = function(d, E, C) {
        return $.H.useReducer(d, E, C)
    }, J.useRef = function(d) {
        return $.H.useRef(d)
    }, J.useState = function(d) {
        return $.H.useState(d)
    }, J.useSyncExternalStore = function(d, E, C) {
        return $.H.useSyncExternalStore(d, E, C)
    }, J.useTransition = function() {
        return $.H.useTransition()
    }, J.version = "19.1.0", J
}
var Dd;
function Rs() {
    return Dd || (Dd = 1, xs.exports = R0()), xs.exports
}
var zt = Rs(),
    ps = {
        exports: {}
    },
    Xn = {},
    Ss = {
        exports: {}
    },
    Ns = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var Rd;
function U0() {
    return Rd || (Rd = 1, function(f) {
        function p(N, U) {
            var O = N.length;
            N.push(U);
            t:
            for (; 0 < O;) {
                var st = O - 1 >>> 1,
                    d = N[st];
                if (0 < T(d, U))
                    N[st] = U,
                    N[O] = d,
                    O = st;
                else
                    break t
            }
        }
        function x(N) {
            return N.length === 0 ? null : N[0]
        }
        function r(N) {
            if (N.length === 0)
                return null;
            var U = N[0],
                O = N.pop();
            if (O !== U) {
                N[0] = O;
                t:
                for (var st = 0, d = N.length, E = d >>> 1; st < E;) {
                    var C = 2 * (st + 1) - 1,
                        D = N[C],
                        q = C + 1,
                        tt = N[q];
                    if (0 > T(D, O))
                        q < d && 0 > T(tt, D) ? (N[st] = tt, N[q] = O, st = q) : (N[st] = D, N[C] = O, st = C);
                    else if (q < d && 0 > T(tt, O))
                        N[st] = tt,
                        N[q] = O,
                        st = q;
                    else
                        break t
                }
            }
            return U
        }
        function T(N, U) {
            var O = N.sortIndex - U.sortIndex;
            return O !== 0 ? O : N.id - U.id
        }
        if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var _ = performance;
            f.unstable_now = function() {
                return _.now()
            }
        } else {
            var H = Date,
                Q = H.now();
            f.unstable_now = function() {
                return H.now() - Q
            }
        }
        var M = [],
            S = [],
            R = 1,
            K = null,
            W = 3,
            pt = !1,
            ct = !1,
            yt = !1,
            bt = !1,
            Wt = typeof setTimeout == "function" ? setTimeout : null,
            Ft = typeof clearTimeout == "function" ? clearTimeout : null,
            At = typeof setImmediate < "u" ? setImmediate : null;
        function Bt(N) {
            for (var U = x(S); U !== null;) {
                if (U.callback === null)
                    r(S);
                else if (U.startTime <= N)
                    r(S),
                    U.sortIndex = U.expirationTime,
                    p(M, U);
                else
                    break;
                U = x(S)
            }
        }
        function $(N) {
            if (yt = !1, Bt(N), !ct)
                if (x(M) !== null)
                    ct = !0,
                    Et || (Et = !0, Mt());
                else {
                    var U = x(S);
                    U !== null && St($, U.startTime - N)
                }
        }
        var Et = !1,
            Ht = -1,
            X = 5,
            Dt = -1;
        function Bl() {
            return bt ? !0 : !(f.unstable_now() - Dt < X)
        }
        function gl() {
            if (bt = !1, Et) {
                var N = f.unstable_now();
                Dt = N;
                var U = !0;
                try {
                    t:
                    {
                        ct = !1,
                        yt && (yt = !1, Ft(Ht), Ht = -1),
                        pt = !0;
                        var O = W;
                        try {
                            l:
                            {
                                for (Bt(N), K = x(M); K !== null && !(K.expirationTime > N && Bl());) {
                                    var st = K.callback;
                                    if (typeof st == "function") {
                                        K.callback = null,
                                        W = K.priorityLevel;
                                        var d = st(K.expirationTime <= N);
                                        if (N = f.unstable_now(), typeof d == "function") {
                                            K.callback = d,
                                            Bt(N),
                                            U = !0;
                                            break l
                                        }
                                        K === x(M) && r(M),
                                        Bt(N)
                                    } else
                                        r(M);
                                    K = x(M)
                                }
                                if (K !== null)
                                    U = !0;
                                else {
                                    var E = x(S);
                                    E !== null && St($, E.startTime - N),
                                    U = !1
                                }
                            }break t
                        } finally {
                            K = null,
                            W = O,
                            pt = !1
                        }
                        U = void 0
                    }
                } finally {
                    U ? Mt() : Et = !1
                }
            }
        }
        var Mt;
        if (typeof At == "function")
            Mt = function() {
                At(gl)
            };
        else if (typeof MessageChannel < "u") {
            var Dl = new MessageChannel,
                El = Dl.port2;
            Dl.port1.onmessage = gl,
            Mt = function() {
                El.postMessage(null)
            }
        } else
            Mt = function() {
                Wt(gl, 0)
            };
        function St(N, U) {
            Ht = Wt(function() {
                N(f.unstable_now())
            }, U)
        }
        f.unstable_IdlePriority = 5,
        f.unstable_ImmediatePriority = 1,
        f.unstable_LowPriority = 4,
        f.unstable_NormalPriority = 3,
        f.unstable_Profiling = null,
        f.unstable_UserBlockingPriority = 2,
        f.unstable_cancelCallback = function(N) {
            N.callback = null
        },
        f.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < N ? Math.floor(1e3 / N) : 5
        },
        f.unstable_getCurrentPriorityLevel = function() {
            return W
        },
        f.unstable_next = function(N) {
            switch (W) {
            case 1:
            case 2:
            case 3:
                var U = 3;
                break;
            default:
                U = W
            }
            var O = W;
            W = U;
            try {
                return N()
            } finally {
                W = O
            }
        },
        f.unstable_requestPaint = function() {
            bt = !0
        },
        f.unstable_runWithPriority = function(N, U) {
            switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
            }
            var O = W;
            W = N;
            try {
                return U()
            } finally {
                W = O
            }
        },
        f.unstable_scheduleCallback = function(N, U, O) {
            var st = f.unstable_now();
            switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? st + O : st) : O = st, N) {
            case 1:
                var d = -1;
                break;
            case 2:
                d = 250;
                break;
            case 5:
                d = 1073741823;
                break;
            case 4:
                d = 1e4;
                break;
            default:
                d = 5e3
            }
            return d = O + d, N = {
                id: R++,
                callback: U,
                priorityLevel: N,
                startTime: O,
                expirationTime: d,
                sortIndex: -1
            }, O > st ? (N.sortIndex = O, p(S, N), x(M) === null && N === x(S) && (yt ? (Ft(Ht), Ht = -1) : yt = !0, St($, O - st))) : (N.sortIndex = d, p(M, N), ct || pt || (ct = !0, Et || (Et = !0, Mt()))), N
        },
        f.unstable_shouldYield = Bl,
        f.unstable_wrapCallback = function(N) {
            var U = W;
            return function() {
                var O = W;
                W = U;
                try {
                    return N.apply(this, arguments)
                } finally {
                    W = O
                }
            }
        }
    }(Ns)), Ns
}
var Ud;
function H0() {
    return Ud || (Ud = 1, Ss.exports = U0()), Ss.exports
}
var As = {
        exports: {}
    },
    Jt = {}; /**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var Hd;
function C0() {
    if (Hd)
        return Jt;
    Hd = 1;
    var f = Rs();
    function p(M) {
        var S = "https://react.dev/errors/" + M;
        if (1 < arguments.length) {
            S += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++)
                S += "&args[]=" + encodeURIComponent(arguments[R])
        }
        return "Minified React error #" + M + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function x() {}
    var r = {
            d: {
                f: x,
                r: function() {
                    throw Error(p(522))
                },
                D: x,
                C: x,
                L: x,
                m: x,
                X: x,
                S: x,
                M: x
            },
            p: 0,
            findDOMNode: null
        },
        T = Symbol.for("react.portal");
    function _(M, S, R) {
        var K = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: T,
            key: K == null ? null : "" + K,
            children: M,
            containerInfo: S,
            implementation: R
        }
    }
    var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Q(M, S) {
        if (M === "font")
            return "";
        if (typeof S == "string")
            return S === "use-credentials" ? S : ""
    }
    return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Jt.createPortal = function(M, S) {
        var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
            throw Error(p(299));
        return _(M, S, null, R)
    }, Jt.flushSync = function(M) {
        var S = H.T,
            R = r.p;
        try {
            if (H.T = null, r.p = 2, M)
                return M()
        } finally {
            H.T = S,
            r.p = R,
            r.d.f()
        }
    }, Jt.preconnect = function(M, S) {
        typeof M == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(M, S))
    }, Jt.prefetchDNS = function(M) {
        typeof M == "string" && r.d.D(M)
    }, Jt.preinit = function(M, S) {
        if (typeof M == "string" && S && typeof S.as == "string") {
            var R = S.as,
                K = Q(R, S.crossOrigin),
                W = typeof S.integrity == "string" ? S.integrity : void 0,
                pt = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
            R === "style" ? r.d.S(M, typeof S.precedence == "string" ? S.precedence : void 0, {
                crossOrigin: K,
                integrity: W,
                fetchPriority: pt
            }) : R === "script" && r.d.X(M, {
                crossOrigin: K,
                integrity: W,
                fetchPriority: pt,
                nonce: typeof S.nonce == "string" ? S.nonce : void 0
            })
        }
    }, Jt.preinitModule = function(M, S) {
        if (typeof M == "string")
            if (typeof S == "object" && S !== null) {
                if (S.as == null || S.as === "script") {
                    var R = Q(S.as, S.crossOrigin);
                    r.d.M(M, {
                        crossOrigin: R,
                        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
                        nonce: typeof S.nonce == "string" ? S.nonce : void 0
                    })
                }
            } else
                S == null && r.d.M(M)
    }, Jt.preload = function(M, S) {
        if (typeof M == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
            var R = S.as,
                K = Q(R, S.crossOrigin);
            r.d.L(M, R, {
                crossOrigin: K,
                integrity: typeof S.integrity == "string" ? S.integrity : void 0,
                nonce: typeof S.nonce == "string" ? S.nonce : void 0,
                type: typeof S.type == "string" ? S.type : void 0,
                fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
                referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
                imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
                imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
                media: typeof S.media == "string" ? S.media : void 0
            })
        }
    }, Jt.preloadModule = function(M, S) {
        if (typeof M == "string")
            if (S) {
                var R = Q(S.as, S.crossOrigin);
                r.d.m(M, {
                    as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
                    crossOrigin: R,
                    integrity: typeof S.integrity == "string" ? S.integrity : void 0
                })
            } else
                r.d.m(M)
    }, Jt.requestFormReset = function(M) {
        r.d.r(M)
    }, Jt.unstable_batchedUpdates = function(M, S) {
        return M(S)
    }, Jt.useFormState = function(M, S, R) {
        return H.H.useFormState(M, S, R)
    }, Jt.useFormStatus = function() {
        return H.H.useHostTransitionStatus()
    }, Jt.version = "19.1.0", Jt
}
var Cd;
function q0() {
    if (Cd)
        return As.exports;
    Cd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (p) {
                console.error(p)
            }
    }
    return f(), As.exports = C0(), As.exports
} /**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var qd;
function w0() {
    if (qd)
        return Xn;
    qd = 1;
    var f = H0(),
        p = Rs(),
        x = q0();
    function r(t) {
        var l = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            l += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                l += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function T(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function _(t) {
        var l = t,
            e = t;
        if (t.alternate)
            for (; l.return;)
                l = l.return;
        else {
            t = l;
            do l = t,
            (l.flags & 4098) !== 0 && (e = l.return),
            t = l.return;
            while (t)
        }
        return l.tag === 3 ? e : null
    }
    function H(t) {
        if (t.tag === 13) {
            var l = t.memoizedState;
            if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null)
                return l.dehydrated
        }
        return null
    }
    function Q(t) {
        if (_(t) !== t)
            throw Error(r(188))
    }
    function M(t) {
        var l = t.alternate;
        if (!l) {
            if (l = _(t), l === null)
                throw Error(r(188));
            return l !== t ? null : t
        }
        for (var e = t, a = l;;) {
            var n = e.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return, a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u;) {
                    if (u === e)
                        return Q(n), t;
                    if (u === a)
                        return Q(n), l;
                    u = u.sibling
                }
                throw Error(r(188))
            }
            if (e.return !== a.return)
                e = n,
                a = u;
            else {
                for (var i = !1, c = n.child; c;) {
                    if (c === e) {
                        i = !0,
                        e = n,
                        a = u;
                        break
                    }
                    if (c === a) {
                        i = !0,
                        a = n,
                        e = u;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = u.child; c;) {
                        if (c === e) {
                            i = !0,
                            e = u,
                            a = n;
                            break
                        }
                        if (c === a) {
                            i = !0,
                            a = u,
                            e = n;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i)
                        throw Error(r(189))
                }
            }
            if (e.alternate !== a)
                throw Error(r(190))
        }
        if (e.tag !== 3)
            throw Error(r(188));
        return e.stateNode.current === e ? t : l
    }
    function S(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6)
            return t;
        for (t = t.child; t !== null;) {
            if (l = S(t), l !== null)
                return l;
            t = t.sibling
        }
        return null
    }
    var R = Object.assign,
        K = Symbol.for("react.element"),
        W = Symbol.for("react.transitional.element"),
        pt = Symbol.for("react.portal"),
        ct = Symbol.for("react.fragment"),
        yt = Symbol.for("react.strict_mode"),
        bt = Symbol.for("react.profiler"),
        Wt = Symbol.for("react.provider"),
        Ft = Symbol.for("react.consumer"),
        At = Symbol.for("react.context"),
        Bt = Symbol.for("react.forward_ref"),
        $ = Symbol.for("react.suspense"),
        Et = Symbol.for("react.suspense_list"),
        Ht = Symbol.for("react.memo"),
        X = Symbol.for("react.lazy"),
        Dt = Symbol.for("react.activity"),
        Bl = Symbol.for("react.memo_cache_sentinel"),
        gl = Symbol.iterator;
    function Mt(t) {
        return t === null || typeof t != "object" ? null : (t = gl && t[gl] || t["@@iterator"], typeof t == "function" ? t : null)
    }
    var Dl = Symbol.for("react.client.reference");
    function El(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === Dl ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case ct:
            return "Fragment";
        case bt:
            return "Profiler";
        case yt:
            return "StrictMode";
        case $:
            return "Suspense";
        case Et:
            return "SuspenseList";
        case Dt:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case pt:
                return "Portal";
            case At:
                return (t.displayName || "Context") + ".Provider";
            case Ft:
                return (t._context.displayName || "Context") + ".Consumer";
            case Bt:
                var l = t.render;
                return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
            case Ht:
                return l = t.displayName || null, l !== null ? l : El(t.type) || "Memo";
            case X:
                l = t._payload,
                t = t._init;
                try {
                    return El(t(l))
                } catch {}
            }
        return null
    }
    var St = Array.isArray,
        N = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        U = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        O = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        st = [],
        d = -1;
    function E(t) {
        return {
            current: t
        }
    }
    function C(t) {
        0 > d || (t.current = st[d], st[d] = null, d--)
    }
    function D(t, l) {
        d++,
        st[d] = t.current,
        t.current = l
    }
    var q = E(null),
        tt = E(null),
        k = E(null),
        nt = E(null);
    function mt(t, l) {
        switch (D(k, l), D(tt, t), D(q, null), l.nodeType) {
        case 9:
        case 11:
            t = (t = l.documentElement) && (t = t.namespaceURI) ? ed(t) : 0;
            break;
        default:
            if (t = l.tagName, l = l.namespaceURI)
                l = ed(l),
                t = ad(l, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        C(q),
        D(q, t)
    }
    function al() {
        C(q),
        C(tt),
        C(k)
    }
    function ee(t) {
        t.memoizedState !== null && D(nt, t);
        var l = q.current,
            e = ad(l, t.type);
        l !== e && (D(tt, t), D(q, e))
    }
    function ae(t) {
        tt.current === t && (C(q), C(tt)),
        nt.current === t && (C(nt), Cn._currentValue = O)
    }
    var ne = Object.prototype.hasOwnProperty,
        ui = f.unstable_scheduleCallback,
        ii = f.unstable_cancelCallback,
        sh = f.unstable_shouldYield,
        fh = f.unstable_requestPaint,
        Rl = f.unstable_now,
        rh = f.unstable_getCurrentPriorityLevel,
        Hs = f.unstable_ImmediatePriority,
        Cs = f.unstable_UserBlockingPriority,
        Vn = f.unstable_NormalPriority,
        oh = f.unstable_LowPriority,
        qs = f.unstable_IdlePriority,
        dh = f.log,
        hh = f.unstable_setDisableYieldValue,
        Qa = null,
        nl = null;
    function ue(t) {
        if (typeof dh == "function" && hh(t), nl && typeof nl.setStrictMode == "function")
            try {
                nl.setStrictMode(Qa, t)
            } catch {}
    }
    var ul = Math.clz32 ? Math.clz32 : yh,
        mh = Math.log,
        vh = Math.LN2;
    function yh(t) {
        return t >>>= 0, t === 0 ? 32 : 31 - (mh(t) / vh | 0) | 0
    }
    var Zn = 256,
        Ln = 4194304;
    function De(t) {
        var l = t & 42;
        if (l !== 0)
            return l;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function kn(t, l, e) {
        var a = t.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0,
            u = t.suspendedLanes,
            i = t.pingedLanes;
        t = t.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~u, a !== 0 ? n = De(a) : (i &= c, i !== 0 ? n = De(i) : e || (e = c & ~t, e !== 0 && (n = De(e))))) : (c = a & ~u, c !== 0 ? n = De(c) : i !== 0 ? n = De(i) : e || (e = a & ~t, e !== 0 && (n = De(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n
    }
    function Va(t, l) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0
    }
    function gh(t, l) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return l + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function ws() {
        var t = Zn;
        return Zn <<= 1, (Zn & 4194048) === 0 && (Zn = 256), t
    }
    function Bs() {
        var t = Ln;
        return Ln <<= 1, (Ln & 62914560) === 0 && (Ln = 4194304), t
    }
    function ci(t) {
        for (var l = [], e = 0; 31 > e; e++)
            l.push(t);
        return l
    }
    function Za(t, l) {
        t.pendingLanes |= l,
        l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0)
    }
    function bh(t, l, e, a, n, u) {
        var i = t.pendingLanes;
        t.pendingLanes = e,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= e,
        t.entangledLanes &= e,
        t.errorRecoveryDisabledLanes &= e,
        t.shellSuspendCounter = 0;
        var c = t.entanglements,
            o = t.expirationTimes,
            y = t.hiddenUpdates;
        for (e = i & ~e; 0 < e;) {
            var A = 31 - ul(e),
                z = 1 << A;
            c[A] = 0,
            o[A] = -1;
            var g = y[A];
            if (g !== null)
                for (y[A] = null, A = 0; A < g.length; A++) {
                    var b = g[A];
                    b !== null && (b.lane &= -536870913)
                }
            e &= ~z
        }
        a !== 0 && Gs(t, a, 0),
        u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l))
    }
    function Gs(t, l, e) {
        t.pendingLanes |= l,
        t.suspendedLanes &= ~l;
        var a = 31 - ul(l);
        t.entangledLanes |= l,
        t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 4194090
    }
    function Ys(t, l) {
        var e = t.entangledLanes |= l;
        for (t = t.entanglements; e;) {
            var a = 31 - ul(e),
                n = 1 << a;
            n & l | t[a] & l && (t[a] |= l),
            e &= ~n
        }
    }
    function si(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function fi(t) {
        return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Xs() {
        var t = U.p;
        return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Nd(t.type))
    }
    function xh(t, l) {
        var e = U.p;
        try {
            return U.p = t, l()
        } finally {
            U.p = e
        }
    }
    var ie = Math.random().toString(36).slice(2),
        kt = "__reactFiber$" + ie,
        It = "__reactProps$" + ie,
        Fe = "__reactContainer$" + ie,
        ri = "__reactEvents$" + ie,
        ph = "__reactListeners$" + ie,
        Sh = "__reactHandles$" + ie,
        Qs = "__reactResources$" + ie,
        La = "__reactMarker$" + ie;
    function oi(t) {
        delete t[kt],
        delete t[It],
        delete t[ri],
        delete t[ph],
        delete t[Sh]
    }
    function Ie(t) {
        var l = t[kt];
        if (l)
            return l;
        for (var e = t.parentNode; e;) {
            if (l = e[Fe] || e[kt]) {
                if (e = l.alternate, l.child !== null || e !== null && e.child !== null)
                    for (t = cd(t); t !== null;) {
                        if (e = t[kt])
                            return e;
                        t = cd(t)
                    }
                return l
            }
            t = e,
            e = t.parentNode
        }
        return null
    }
    function Pe(t) {
        if (t = t[kt] || t[Fe]) {
            var l = t.tag;
            if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
                return t
        }
        return null
    }
    function ka(t) {
        var l = t.tag;
        if (l === 5 || l === 26 || l === 27 || l === 6)
            return t.stateNode;
        throw Error(r(33))
    }
    function ta(t) {
        var l = t[Qs];
        return l || (l = t[Qs] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), l
    }
    function Gt(t) {
        t[La] = !0
    }
    var Vs = new Set,
        Zs = {};
    function Re(t, l) {
        la(t, l),
        la(t + "Capture", l)
    }
    function la(t, l) {
        for (Zs[t] = l, t = 0; t < l.length; t++)
            Vs.add(l[t])
    }
    var Nh = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Ls = {},
        ks = {};
    function Ah(t) {
        return ne.call(ks, t) ? !0 : ne.call(Ls, t) ? !1 : Nh.test(t) ? ks[t] = !0 : (Ls[t] = !0, !1)
    }
    function Kn(t, l, e) {
        if (Ah(l))
            if (e === null)
                t.removeAttribute(l);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(l);
                    return;
                case "boolean":
                    var a = l.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        t.removeAttribute(l);
                        return
                    }
                }
                t.setAttribute(l, "" + e)
            }
    }
    function Jn(t, l, e) {
        if (e === null)
            t.removeAttribute(l);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttribute(l, "" + e)
        }
    }
    function Gl(t, l, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttributeNS(l, e, "" + a)
        }
    }
    var di,
        Ks;
    function ea(t) {
        if (di === void 0)
            try {
                throw Error()
            } catch (e) {
                var l = e.stack.trim().match(/\n( *(at )?)/);
                di = l && l[1] || "",
                Ks = -1 < e.stack.indexOf(`
    at`
                ) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
`
        + di + t + Ks
    }
    var hi = !1;
    function mi(t, l) {
        if (!t || hi)
            return "";
        hi = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (l) {
                            var z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(z, [])
                                } catch (b) {
                                    var g = b
                                }
                                Reflect.construct(t, [], z)
                            } else {
                                try {
                                    z.call()
                                } catch (b) {
                                    g = b
                                }
                                t.call(z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (b) {
                                g = b
                            }
                            (z = t()) && typeof z.catch == "function" && z.catch(function() {})
                        }
                    } catch (b) {
                        if (b && g && typeof b.stack == "string")
                            return [b.stack, g.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot(),
                i = u[0],
                c = u[1];
            if (i && c) {
                var o = i.split(`
`
                    ),
                    y = c.split(`
`
                    );
                for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot");)
                    a++;
                for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot");)
                    n++;
                if (a === o.length || n === y.length)
                    for (a = o.length - 1, n = y.length - 1; 1 <= a && 0 <= n && o[a] !== y[n];)
                        n--;
                for (; 1 <= a && 0 <= n; a--, n--)
                    if (o[a] !== y[n]) {
                        if (a !== 1 || n !== 1)
                            do if (a--, n--, 0 > n || o[a] !== y[n]) {
                                var A = `
`
                                + o[a].replace(" at new ", " at ");
                                return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A
                            }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            hi = !1,
            Error.prepareStackTrace = e
        }
        return (e = t ? t.displayName || t.name : "") ? ea(e) : ""
    }
    function Th(t) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return ea(t.type);
        case 16:
            return ea("Lazy");
        case 13:
            return ea("Suspense");
        case 19:
            return ea("SuspenseList");
        case 0:
        case 15:
            return mi(t.type, !1);
        case 11:
            return mi(t.type.render, !1);
        case 1:
            return mi(t.type, !0);
        case 31:
            return ea("Activity");
        default:
            return ""
        }
    }
    function Js(t) {
        try {
            var l = "";
            do l += Th(t),
            t = t.return;
            while (t);
            return l
        } catch (e) {
            return `
Error generating stack: `
            + e.message + `
`
            + e.stack
        }
    }
    function bl(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function Ws(t) {
        var l = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio")
    }
    function jh(t) {
        var l = Ws(t) ? "checked" : "value",
            e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l),
            a = "" + t[l];
        if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var n = e.get,
                u = e.set;
            return Object.defineProperty(t, l, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(i) {
                    a = "" + i,
                    u.call(this, i)
                }
            }), Object.defineProperty(t, l, {
                enumerable: e.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(i) {
                    a = "" + i
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[l]
                }
            }
        }
    }
    function Wn(t) {
        t._valueTracker || (t._valueTracker = jh(t))
    }
    function $s(t) {
        if (!t)
            return !1;
        var l = t._valueTracker;
        if (!l)
            return !0;
        var e = l.getValue(),
            a = "";
        return t && (a = Ws(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), !0) : !1
    }
    function $n(t) {
        if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var zh = /[\n"\\]/g;
    function xl(t) {
        return t.replace(zh, function(l) {
            return "\\" + l.charCodeAt(0).toString(16) + " "
        })
    }
    function vi(t, l, e, a, n, u, i, c) {
        t.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"),
        l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + bl(l)) : t.value !== "" + bl(l) && (t.value = "" + bl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"),
        l != null ? yi(t, i, bl(l)) : e != null ? yi(t, i, bl(e)) : a != null && t.removeAttribute("value"),
        n == null && u != null && (t.defaultChecked = !!u),
        n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + bl(c) : t.removeAttribute("name")
    }
    function Fs(t, l, e, a, n, u, i, c) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
            if (!(u !== "submit" && u !== "reset" || l != null))
                return;
            e = e != null ? "" + bl(e) : "",
            l = l != null ? "" + bl(l) : e,
            c || l === t.value || (t.value = l),
            t.defaultValue = l
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        t.checked = c ? t.checked : !!a,
        t.defaultChecked = !!a,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i)
    }
    function yi(t, l, e) {
        l === "number" && $n(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e)
    }
    function aa(t, l, e, a) {
        if (t = t.options, l) {
            l = {};
            for (var n = 0; n < e.length; n++)
                l["$" + e[n]] = !0;
            for (e = 0; e < t.length; e++)
                n = l.hasOwnProperty("$" + t[e].value),
                t[e].selected !== n && (t[e].selected = n),
                n && a && (t[e].defaultSelected = !0)
        } else {
            for (e = "" + bl(e), l = null, n = 0; n < t.length; n++) {
                if (t[n].value === e) {
                    t[n].selected = !0,
                    a && (t[n].defaultSelected = !0);
                    return
                }
                l !== null || t[n].disabled || (l = t[n])
            }
            l !== null && (l.selected = !0)
        }
    }
    function Is(t, l, e) {
        if (l != null && (l = "" + bl(l), l !== t.value && (t.value = l), e == null)) {
            t.defaultValue !== l && (t.defaultValue = l);
            return
        }
        t.defaultValue = e != null ? "" + bl(e) : ""
    }
    function Ps(t, l, e, a) {
        if (l == null) {
            if (a != null) {
                if (e != null)
                    throw Error(r(92));
                if (St(a)) {
                    if (1 < a.length)
                        throw Error(r(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            l = e
        }
        e = bl(l),
        t.defaultValue = e,
        a = t.textContent,
        a === e && a !== "" && a !== null && (t.value = a)
    }
    function na(t, l) {
        if (l) {
            var e = t.firstChild;
            if (e && e === t.lastChild && e.nodeType === 3) {
                e.nodeValue = l;
                return
            }
        }
        t.textContent = l
    }
    var Eh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function tf(t, l, e) {
        var a = l.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || Eh.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px"
    }
    function lf(t, l, e) {
        if (l != null && typeof l != "object")
            throw Error(r(62));
        if (t = t.style, e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
            for (var n in l)
                a = l[n],
                l.hasOwnProperty(n) && e[n] !== a && tf(t, n, a)
        } else
            for (var u in l)
                l.hasOwnProperty(u) && tf(t, u, l[u])
    }
    function gi(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var Mh = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
        _h = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Fn(t) {
        return _h.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    var bi = null;
    function xi(t) {
        return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
    }
    var ua = null,
        ia = null;
    function ef(t) {
        var l = Pe(t);
        if (l && (t = l.stateNode)) {
            var e = t[It] || null;
            t:
            switch (t = l.stateNode, l.type) {
            case "input":
                if (vi(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
                    for (e = t; e.parentNode;)
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + xl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
                        var a = e[l];
                        if (a !== t && a.form === t.form) {
                            var n = a[It] || null;
                            if (!n)
                                throw Error(r(90));
                            vi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (l = 0; l < e.length; l++)
                        a = e[l],
                        a.form === t.form && $s(a)
                }
                break t;
            case "textarea":
                Is(t, e.value, e.defaultValue);
                break t;
            case "select":
                l = e.value,
                l != null && aa(t, !!e.multiple, l, !1)
            }
        }
    }
    var pi = !1;
    function af(t, l, e) {
        if (pi)
            return t(l, e);
        pi = !0;
        try {
            var a = t(l);
            return a
        } finally {
            if (pi = !1, (ua !== null || ia !== null) && (qu(), ua && (l = ua, t = ia, ia = ua = null, ef(l), t)))
                for (l = 0; l < t.length; l++)
                    ef(t[l])
        }
    }
    function Ka(t, l) {
        var e = t.stateNode;
        if (e === null)
            return null;
        var a = e[It] || null;
        if (a === null)
            return null;
        e = a[l];
        t:
        switch (l) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !a;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (e && typeof e != "function")
            throw Error(r(231, l, typeof e));
        return e
    }
    var Yl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Si = !1;
    if (Yl)
        try {
            var Ja = {};
            Object.defineProperty(Ja, "passive", {
                get: function() {
                    Si = !0
                }
            }),
            window.addEventListener("test", Ja, Ja),
            window.removeEventListener("test", Ja, Ja)
        } catch {
            Si = !1
        }
    var ce = null,
        Ni = null,
        In = null;
    function nf() {
        if (In)
            return In;
        var t,
            l = Ni,
            e = l.length,
            a,
            n = "value" in ce ? ce.value : ce.textContent,
            u = n.length;
        for (t = 0; t < e && l[t] === n[t]; t++)
            ;
        var i = e - t;
        for (a = 1; a <= i && l[e - a] === n[u - a]; a++)
            ;
        return In = n.slice(t, 1 < a ? 1 - a : void 0)
    }
    function Pn(t) {
        var l = t.keyCode;
        return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
    }
    function tu() {
        return !0
    }
    function uf() {
        return !1
    }
    function Pt(t) {
        function l(e, a, n, u, i) {
            this._reactName = e,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = i,
            this.currentTarget = null;
            for (var c in t)
                t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(u) : u[c]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? tu : uf, this.isPropagationStopped = uf, this
        }
        return R(l.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = tu)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = tu)
            },
            persist: function() {},
            isPersistent: tu
        }), l
    }
    var Ue = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        lu = Pt(Ue),
        Wa = R({}, Ue, {
            view: 0,
            detail: 0
        }),
        Oh = Pt(Wa),
        Ai,
        Ti,
        $a,
        eu = R({}, Wa, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: zi,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== $a && ($a && t.type === "mousemove" ? (Ai = t.screenX - $a.screenX, Ti = t.screenY - $a.screenY) : Ti = Ai = 0, $a = t), Ai)
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Ti
            }
        }),
        cf = Pt(eu),
        Dh = R({}, eu, {
            dataTransfer: 0
        }),
        Rh = Pt(Dh),
        Uh = R({}, Wa, {
            relatedTarget: 0
        }),
        ji = Pt(Uh),
        Hh = R({}, Ue, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Ch = Pt(Hh),
        qh = R({}, Ue, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        }),
        wh = Pt(qh),
        Bh = R({}, Ue, {
            data: 0
        }),
        sf = Pt(Bh),
        Gh = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Yh = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Xh = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
    function Qh(t) {
        var l = this.nativeEvent;
        return l.getModifierState ? l.getModifierState(t) : (t = Xh[t]) ? !!l[t] : !1
    }
    function zi() {
        return Qh
    }
    var Vh = R({}, Wa, {
            key: function(t) {
                if (t.key) {
                    var l = Gh[t.key] || t.key;
                    if (l !== "Unidentified")
                        return l
                }
                return t.type === "keypress" ? (t = Pn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Yh[t.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: zi,
            charCode: function(t) {
                return t.type === "keypress" ? Pn(t) : 0
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            },
            which: function(t) {
                return t.type === "keypress" ? Pn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
            }
        }),
        Zh = Pt(Vh),
        Lh = R({}, eu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        ff = Pt(Lh),
        kh = R({}, Wa, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: zi
        }),
        Kh = Pt(kh),
        Jh = R({}, Ue, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Wh = Pt(Jh),
        $h = R({}, eu, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Fh = Pt($h),
        Ih = R({}, Ue, {
            newState: 0,
            oldState: 0
        }),
        Ph = Pt(Ih),
        tm = [9, 13, 27, 32],
        Ei = Yl && "CompositionEvent" in window,
        Fa = null;
    Yl && "documentMode" in document && (Fa = document.documentMode);
    var lm = Yl && "TextEvent" in window && !Fa,
        rf = Yl && (!Ei || Fa && 8 < Fa && 11 >= Fa),
        of = " ",
        df = !1;
    function hf(t, l) {
        switch (t) {
        case "keyup":
            return tm.indexOf(l.keyCode) !== -1;
        case "keydown":
            return l.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function mf(t) {
        return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
    }
    var ca = !1;
    function em(t, l) {
        switch (t) {
        case "compositionend":
            return mf(l);
        case "keypress":
            return l.which !== 32 ? null : (df = !0, of);
        case "textInput":
            return t = l.data, t === of && df ? null : t;
        default:
            return null
        }
    }
    function am(t, l) {
        if (ca)
            return t === "compositionend" || !Ei && hf(t, l) ? (t = nf(), In = Ni = ce = null, ca = !1, t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
                if (l.char && 1 < l.char.length)
                    return l.char;
                if (l.which)
                    return String.fromCharCode(l.which)
            }
            return null;
        case "compositionend":
            return rf && l.locale !== "ko" ? null : l.data;
        default:
            return null
        }
    }
    var nm = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function vf(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l === "input" ? !!nm[t.type] : l === "textarea"
    }
    function yf(t, l, e, a) {
        ua ? ia ? ia.push(a) : ia = [a] : ua = a,
        l = Qu(l, "onChange"),
        0 < l.length && (e = new lu("onChange", "change", null, e, a), t.push({
            event: e,
            listeners: l
        }))
    }
    var Ia = null,
        Pa = null;
    function um(t) {
        Fo(t, 0)
    }
    function au(t) {
        var l = ka(t);
        if ($s(l))
            return t
    }
    function gf(t, l) {
        if (t === "change")
            return l
    }
    var bf = !1;
    if (Yl) {
        var Mi;
        if (Yl) {
            var _i = "oninput" in document;
            if (!_i) {
                var xf = document.createElement("div");
                xf.setAttribute("oninput", "return;"),
                _i = typeof xf.oninput == "function"
            }
            Mi = _i
        } else
            Mi = !1;
        bf = Mi && (!document.documentMode || 9 < document.documentMode)
    }
    function pf() {
        Ia && (Ia.detachEvent("onpropertychange", Sf), Pa = Ia = null)
    }
    function Sf(t) {
        if (t.propertyName === "value" && au(Pa)) {
            var l = [];
            yf(l, Pa, t, xi(t)),
            af(um, l)
        }
    }
    function im(t, l, e) {
        t === "focusin" ? (pf(), Ia = l, Pa = e, Ia.attachEvent("onpropertychange", Sf)) : t === "focusout" && pf()
    }
    function cm(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return au(Pa)
    }
    function sm(t, l) {
        if (t === "click")
            return au(l)
    }
    function fm(t, l) {
        if (t === "input" || t === "change")
            return au(l)
    }
    function rm(t, l) {
        return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l
    }
    var il = typeof Object.is == "function" ? Object.is : rm;
    function tn(t, l) {
        if (il(t, l))
            return !0;
        if (typeof t != "object" || t === null || typeof l != "object" || l === null)
            return !1;
        var e = Object.keys(t),
            a = Object.keys(l);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var n = e[a];
            if (!ne.call(l, n) || !il(t[n], l[n]))
                return !1
        }
        return !0
    }
    function Nf(t) {
        for (; t && t.firstChild;)
            t = t.firstChild;
        return t
    }
    function Af(t, l) {
        var e = Nf(t);
        t = 0;
        for (var a; e;) {
            if (e.nodeType === 3) {
                if (a = t + e.textContent.length, t <= l && a >= l)
                    return {
                        node: e,
                        offset: l - t
                    };
                t = a
            }
            t:
            {
                for (; e;) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break t
                    }
                    e = e.parentNode
                }
                e = void 0
            }e = Nf(e)
        }
    }
    function Tf(t, l) {
        return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Tf(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1
    }
    function jf(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var l = $n(t.document); l instanceof t.HTMLIFrameElement;) {
            try {
                var e = typeof l.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                t = l.contentWindow;
            else
                break;
            l = $n(t.document)
        }
        return l
    }
    function Oi(t) {
        var l = t && t.nodeName && t.nodeName.toLowerCase();
        return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true")
    }
    var om = Yl && "documentMode" in document && 11 >= document.documentMode,
        sa = null,
        Di = null,
        ln = null,
        Ri = !1;
    function zf(t, l, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        Ri || sa == null || sa !== $n(a) || (a = sa, "selectionStart" in a && Oi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), ln && tn(ln, a) || (ln = a, a = Qu(Di, "onSelect"), 0 < a.length && (l = new lu("onSelect", "select", null, l, e), t.push({
            event: l,
            listeners: a
        }), l.target = sa)))
    }
    function He(t, l) {
        var e = {};
        return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e
    }
    var fa = {
            animationend: He("Animation", "AnimationEnd"),
            animationiteration: He("Animation", "AnimationIteration"),
            animationstart: He("Animation", "AnimationStart"),
            transitionrun: He("Transition", "TransitionRun"),
            transitionstart: He("Transition", "TransitionStart"),
            transitioncancel: He("Transition", "TransitionCancel"),
            transitionend: He("Transition", "TransitionEnd")
        },
        Ui = {},
        Ef = {};
    Yl && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete fa.animationend.animation, delete fa.animationiteration.animation, delete fa.animationstart.animation), "TransitionEvent" in window || delete fa.transitionend.transition);
    function Ce(t) {
        if (Ui[t])
            return Ui[t];
        if (!fa[t])
            return t;
        var l = fa[t],
            e;
        for (e in l)
            if (l.hasOwnProperty(e) && e in Ef)
                return Ui[t] = l[e];
        return t
    }
    var Mf = Ce("animationend"),
        _f = Ce("animationiteration"),
        Of = Ce("animationstart"),
        dm = Ce("transitionrun"),
        hm = Ce("transitionstart"),
        mm = Ce("transitioncancel"),
        Df = Ce("transitionend"),
        Rf = new Map,
        Hi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Hi.push("scrollEnd");
    function Ml(t, l) {
        Rf.set(t, l),
        Re(l, [t])
    }
    var Uf = new WeakMap;
    function pl(t, l) {
        if (typeof t == "object" && t !== null) {
            var e = Uf.get(t);
            return e !== void 0 ? e : (l = {
                value: t,
                source: l,
                stack: Js(l)
            }, Uf.set(t, l), l)
        }
        return {
            value: t,
            source: l,
            stack: Js(l)
        }
    }
    var Sl = [],
        ra = 0,
        Ci = 0;
    function nu() {
        for (var t = ra, l = Ci = ra = 0; l < t;) {
            var e = Sl[l];
            Sl[l++] = null;
            var a = Sl[l];
            Sl[l++] = null;
            var n = Sl[l];
            Sl[l++] = null;
            var u = Sl[l];
            if (Sl[l++] = null, a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next, i.next = n),
                a.pending = n
            }
            u !== 0 && Hf(e, n, u)
        }
    }
    function uu(t, l, e, a) {
        Sl[ra++] = t,
        Sl[ra++] = l,
        Sl[ra++] = e,
        Sl[ra++] = a,
        Ci |= a,
        t.lanes |= a,
        t = t.alternate,
        t !== null && (t.lanes |= a)
    }
    function qi(t, l, e, a) {
        return uu(t, l, e, a), iu(t)
    }
    function oa(t, l) {
        return uu(t, null, null, l), iu(t)
    }
    function Hf(t, l, e) {
        t.lanes |= e;
        var a = t.alternate;
        a !== null && (a.lanes |= e);
        for (var n = !1, u = t.return; u !== null;)
            u.childLanes |= e,
            a = u.alternate,
            a !== null && (a.childLanes |= e),
            u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)),
            t = u,
            u = u.return;
        return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - ul(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [l] : a.push(l), l.lane = e | 536870912), u) : null
    }
    function iu(t) {
        if (50 < En)
            throw En = 0, Qc = null, Error(r(185));
        for (var l = t.return; l !== null;)
            t = l,
            l = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var da = {};
    function vm(t, l, e, a) {
        this.tag = t,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = l,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function cl(t, l, e, a) {
        return new vm(t, l, e, a)
    }
    function wi(t) {
        return t = t.prototype, !(!t || !t.isReactComponent)
    }
    function Xl(t, l) {
        var e = t.alternate;
        return e === null ? (e = cl(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e
    }
    function Cf(t, l) {
        t.flags &= 65011714;
        var e = t.alternate;
        return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
            lanes: l.lanes,
            firstContext: l.firstContext
        }), t
    }
    function cu(t, l, e, a, n, u) {
        var i = 0;
        if (a = t, typeof t == "function")
            wi(t) && (i = 1);
        else if (typeof t == "string")
            i = g0(t, e, q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t:
            switch (t) {
            case Dt:
                return t = cl(31, e, l, n), t.elementType = Dt, t.lanes = u, t;
            case ct:
                return qe(e.children, n, u, l);
            case yt:
                i = 8,
                n |= 24;
                break;
            case bt:
                return t = cl(12, e, l, n | 2), t.elementType = bt, t.lanes = u, t;
            case $:
                return t = cl(13, e, l, n), t.elementType = $, t.lanes = u, t;
            case Et:
                return t = cl(19, e, l, n), t.elementType = Et, t.lanes = u, t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Wt:
                    case At:
                        i = 10;
                        break t;
                    case Ft:
                        i = 9;
                        break t;
                    case Bt:
                        i = 11;
                        break t;
                    case Ht:
                        i = 14;
                        break t;
                    case X:
                        i = 16,
                        a = null;
                        break t
                    }
                i = 29,
                e = Error(r(130, t === null ? "null" : typeof t, "")),
                a = null
            }
        return l = cl(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l
    }
    function qe(t, l, e, a) {
        return t = cl(7, t, a, l), t.lanes = e, t
    }
    function Bi(t, l, e) {
        return t = cl(6, t, null, l), t.lanes = e, t
    }
    function Gi(t, l, e) {
        return l = cl(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, l
    }
    var ha = [],
        ma = 0,
        su = null,
        fu = 0,
        Nl = [],
        Al = 0,
        we = null,
        Ql = 1,
        Vl = "";
    function Be(t, l) {
        ha[ma++] = fu,
        ha[ma++] = su,
        su = t,
        fu = l
    }
    function qf(t, l, e) {
        Nl[Al++] = Ql,
        Nl[Al++] = Vl,
        Nl[Al++] = we,
        we = t;
        var a = Ql;
        t = Vl;
        var n = 32 - ul(a) - 1;
        a &= ~(1 << n),
        e += 1;
        var u = 32 - ul(l) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32),
            a >>= i,
            n -= i,
            Ql = 1 << 32 - ul(l) + n | e << n | a,
            Vl = u + t
        } else
            Ql = 1 << u | e << n | a,
            Vl = t
    }
    function Yi(t) {
        t.return !== null && (Be(t, 1), qf(t, 1, 0))
    }
    function Xi(t) {
        for (; t === su;)
            su = ha[--ma],
            ha[ma] = null,
            fu = ha[--ma],
            ha[ma] = null;
        for (; t === we;)
            we = Nl[--Al],
            Nl[Al] = null,
            Vl = Nl[--Al],
            Nl[Al] = null,
            Ql = Nl[--Al],
            Nl[Al] = null
    }
    var $t = null,
        Tt = null,
        it = !1,
        Ge = null,
        Ul = !1,
        Qi = Error(r(519));
    function Ye(t) {
        var l = Error(r(418, ""));
        throw nn(pl(l, t)), Qi
    }
    function wf(t) {
        var l = t.stateNode,
            e = t.type,
            a = t.memoizedProps;
        switch (l[kt] = t, l[It] = a, e) {
        case "dialog":
            et("cancel", l),
            et("close", l);
            break;
        case "iframe":
        case "object":
        case "embed":
            et("load", l);
            break;
        case "video":
        case "audio":
            for (e = 0; e < _n.length; e++)
                et(_n[e], l);
            break;
        case "source":
            et("error", l);
            break;
        case "img":
        case "image":
        case "link":
            et("error", l),
            et("load", l);
            break;
        case "details":
            et("toggle", l);
            break;
        case "input":
            et("invalid", l),
            Fs(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0),
            Wn(l);
            break;
        case "select":
            et("invalid", l);
            break;
        case "textarea":
            et("invalid", l),
            Ps(l, a.value, a.defaultValue, a.children),
            Wn(l)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === !0 || ld(l.textContent, e) ? (a.popover != null && (et("beforetoggle", l), et("toggle", l)), a.onScroll != null && et("scroll", l), a.onScrollEnd != null && et("scrollend", l), a.onClick != null && (l.onclick = Vu), l = !0) : l = !1,
        l || Ye(t)
    }
    function Bf(t) {
        for ($t = t.return; $t;)
            switch ($t.tag) {
            case 5:
            case 13:
                Ul = !1;
                return;
            case 27:
            case 3:
                Ul = !0;
                return;
            default:
                $t = $t.return
            }
    }
    function en(t) {
        if (t !== $t)
            return !1;
        if (!it)
            return Bf(t), it = !0, !1;
        var l = t.tag,
            e;
        if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ns(t.type, t.memoizedProps)), e = !e), e && Tt && Ye(t), Bf(t), l === 13) {
            if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                throw Error(r(317));
            t:
            {
                for (t = t.nextSibling, l = 0; t;) {
                    if (t.nodeType === 8)
                        if (e = t.data, e === "/$") {
                            if (l === 0) {
                                Tt = Ol(t.nextSibling);
                                break t
                            }
                            l--
                        } else
                            e !== "$" && e !== "$!" && e !== "$?" || l++;
                    t = t.nextSibling
                }
                Tt = null
            }
        } else
            l === 27 ? (l = Tt, Ae(t.type) ? (t = ss, ss = null, Tt = t) : Tt = l) : Tt = $t ? Ol(t.stateNode.nextSibling) : null;
        return !0
    }
    function an() {
        Tt = $t = null,
        it = !1
    }
    function Gf() {
        var t = Ge;
        return t !== null && (el === null ? el = t : el.push.apply(el, t), Ge = null), t
    }
    function nn(t) {
        Ge === null ? Ge = [t] : Ge.push(t)
    }
    var Vi = E(null),
        Xe = null,
        Zl = null;
    function se(t, l, e) {
        D(Vi, l._currentValue),
        l._currentValue = e
    }
    function Ll(t) {
        t._currentValue = Vi.current,
        C(Vi)
    }
    function Zi(t, l, e) {
        for (; t !== null;) {
            var a = t.alternate;
            if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e)
                break;
            t = t.return
        }
    }
    function Li(t, l, e, a) {
        var n = t.child;
        for (n !== null && (n.return = t); n !== null;) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                t:
                for (; u !== null;) {
                    var c = u;
                    u = n;
                    for (var o = 0; o < l.length; o++)
                        if (c.context === l[o]) {
                            u.lanes |= e,
                            c = u.alternate,
                            c !== null && (c.lanes |= e),
                            Zi(u.return, e, t),
                            a || (i = null);
                            break t
                        }
                    u = c.next
                }
            } else if (n.tag === 18) {
                if (i = n.return, i === null)
                    throw Error(r(341));
                i.lanes |= e,
                u = i.alternate,
                u !== null && (u.lanes |= e),
                Zi(i, e, t),
                i = null
            } else
                i = n.child;
            if (i !== null)
                i.return = n;
            else
                for (i = n; i !== null;) {
                    if (i === t) {
                        i = null;
                        break
                    }
                    if (n = i.sibling, n !== null) {
                        n.return = i.return,
                        i = n;
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }
    function un(t, l, e, a) {
        t = null;
        for (var n = l, u = !1; n !== null;) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null)
                    throw Error(r(387));
                if (i = i.memoizedProps, i !== null) {
                    var c = n.type;
                    il(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c])
                }
            } else if (n === nt.current) {
                if (i = n.alternate, i === null)
                    throw Error(r(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Cn) : t = [Cn])
            }
            n = n.return
        }
        t !== null && Li(l, t, e, a),
        l.flags |= 262144
    }
    function ru(t) {
        for (t = t.firstContext; t !== null;) {
            if (!il(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Qe(t) {
        Xe = t,
        Zl = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function Kt(t) {
        return Yf(Xe, t)
    }
    function ou(t, l) {
        return Xe === null && Qe(t), Yf(t, l)
    }
    function Yf(t, l) {
        var e = l._currentValue;
        if (l = {
            context: l,
            memoizedValue: e,
            next: null
        }, Zl === null) {
            if (t === null)
                throw Error(r(308));
            Zl = l,
            t.dependencies = {
                lanes: 0,
                firstContext: l
            },
            t.flags |= 524288
        } else
            Zl = Zl.next = l;
        return e
    }
    var ym = typeof AbortController < "u" ? AbortController : function() {
            var t = [],
                l = this.signal = {
                    aborted: !1,
                    addEventListener: function(e, a) {
                        t.push(a)
                    }
                };
            this.abort = function() {
                l.aborted = !0,
                t.forEach(function(e) {
                    return e()
                })
            }
        },
        gm = f.unstable_scheduleCallback,
        bm = f.unstable_NormalPriority,
        Ct = {
            $$typeof: At,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function ki() {
        return {
            controller: new ym,
            data: new Map,
            refCount: 0
        }
    }
    function cn(t) {
        t.refCount--,
        t.refCount === 0 && gm(bm, function() {
            t.controller.abort()
        })
    }
    var sn = null,
        Ki = 0,
        va = 0,
        ya = null;
    function xm(t, l) {
        if (sn === null) {
            var e = sn = [];
            Ki = 0,
            va = Wc(),
            ya = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Ki++, l.then(Xf, Xf), l
    }
    function Xf() {
        if (--Ki === 0 && sn !== null) {
            ya !== null && (ya.status = "fulfilled");
            var t = sn;
            sn = null,
            va = 0,
            ya = null;
            for (var l = 0; l < t.length; l++)
                (0, t[l])()
        }
    }
    function pm(t, l) {
        var e = [],
            a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    e.push(n)
                }
            };
        return t.then(function() {
            a.status = "fulfilled",
            a.value = l;
            for (var n = 0; n < e.length; n++)
                (0, e[n])(l)
        }, function(n) {
            for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
                (0, e[n])(void 0)
        }), a
    }
    var Qf = N.S;
    N.S = function(t, l) {
        typeof l == "object" && l !== null && typeof l.then == "function" && xm(t, l),
        Qf !== null && Qf(t, l)
    };
    var Ve = E(null);
    function Ji() {
        var t = Ve.current;
        return t !== null ? t : gt.pooledCache
    }
    function du(t, l) {
        l === null ? D(Ve, Ve.current) : D(Ve, l.pool)
    }
    function Vf() {
        var t = Ji();
        return t === null ? null : {
            parent: Ct._currentValue,
            pool: t
        }
    }
    var fn = Error(r(460)),
        Zf = Error(r(474)),
        hu = Error(r(542)),
        Wi = {
            then: function() {}
        };
    function Lf(t) {
        return t = t.status, t === "fulfilled" || t === "rejected"
    }
    function mu() {}
    function kf(t, l, e) {
        switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(mu, mu), l = e), l.status) {
        case "fulfilled":
            return l.value;
        case "rejected":
            throw t = l.reason, Jf(t), t;
        default:
            if (typeof l.status == "string")
                l.then(mu, mu);
            else {
                if (t = gt, t !== null && 100 < t.shellSuspendCounter)
                    throw Error(r(482));
                t = l,
                t.status = "pending",
                t.then(function(a) {
                    if (l.status === "pending") {
                        var n = l;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (l.status === "pending") {
                        var n = l;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (l.status) {
            case "fulfilled":
                return l.value;
            case "rejected":
                throw t = l.reason, Jf(t), t
            }
            throw rn = l, fn
        }
    }
    var rn = null;
    function Kf() {
        if (rn === null)
            throw Error(r(459));
        var t = rn;
        return rn = null, t
    }
    function Jf(t) {
        if (t === fn || t === hu)
            throw Error(r(483))
    }
    var fe = !1;
    function $i(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Fi(t, l) {
        t = t.updateQueue,
        l.updateQueue === t && (l.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function re(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function oe(t, l, e) {
        var a = t.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared, (ft & 2) !== 0) {
            var n = a.pending;
            return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = iu(t), Hf(t, null, e), l
        }
        return uu(t, a, l, e), iu(t)
    }
    function on(t, l, e) {
        if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
            var a = l.lanes;
            a &= t.pendingLanes,
            e |= a,
            l.lanes = e,
            Ys(t, e)
        }
    }
    function Ii(t, l) {
        var e = t.updateQueue,
            a = t.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
            var n = null,
                u = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = i : u = u.next = i,
                    e = e.next
                } while (e !== null);
                u === null ? n = u = l : u = u.next = l
            } else
                n = u = l;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            t.updateQueue = e;
            return
        }
        t = e.lastBaseUpdate,
        t === null ? e.firstBaseUpdate = l : t.next = l,
        e.lastBaseUpdate = l
    }
    var Pi = !1;
    function dn() {
        if (Pi) {
            var t = ya;
            if (t !== null)
                throw t
        }
    }
    function hn(t, l, e, a) {
        Pi = !1;
        var n = t.updateQueue;
        fe = !1;
        var u = n.firstBaseUpdate,
            i = n.lastBaseUpdate,
            c = n.shared.pending;
        if (c !== null) {
            n.shared.pending = null;
            var o = c,
                y = o.next;
            o.next = null,
            i === null ? u = y : i.next = y,
            i = o;
            var A = t.alternate;
            A !== null && (A = A.updateQueue, c = A.lastBaseUpdate, c !== i && (c === null ? A.firstBaseUpdate = y : c.next = y, A.lastBaseUpdate = o))
        }
        if (u !== null) {
            var z = n.baseState;
            i = 0,
            A = y = o = null,
            c = u;
            do {
                var g = c.lane & -536870913,
                    b = g !== c.lane;
                if (b ? (at & g) === g : (a & g) === g) {
                    g !== 0 && g === va && (Pi = !0),
                    A !== null && (A = A.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    t:
                    {
                        var L = t,
                            V = c;
                        g = l;
                        var ht = e;
                        switch (V.tag) {
                        case 1:
                            if (L = V.payload, typeof L == "function") {
                                z = L.call(ht, z, g);
                                break t
                            }
                            z = L;
                            break t;
                        case 3:
                            L.flags = L.flags & -65537 | 128;
                        case 0:
                            if (L = V.payload, g = typeof L == "function" ? L.call(ht, z, g) : L, g == null)
                                break t;
                            z = R({}, z, g);
                            break t;
                        case 2:
                            fe = !0
                        }
                    }g = c.callback,
                    g !== null && (t.flags |= 64, b && (t.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [g] : b.push(g))
                } else
                    b = {
                        lane: g,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    A === null ? (y = A = b, o = z) : A = A.next = b,
                    i |= g;
                if (c = c.next, c === null) {
                    if (c = n.shared.pending, c === null)
                        break;
                    b = c,
                    c = b.next,
                    b.next = null,
                    n.lastBaseUpdate = b,
                    n.shared.pending = null
                }
            } while (!0);
            A === null && (o = z),
            n.baseState = o,
            n.firstBaseUpdate = y,
            n.lastBaseUpdate = A,
            u === null && (n.shared.lanes = 0),
            xe |= i,
            t.lanes = i,
            t.memoizedState = z
        }
    }
    function Wf(t, l) {
        if (typeof t != "function")
            throw Error(r(191, t));
        t.call(l)
    }
    function $f(t, l) {
        var e = t.callbacks;
        if (e !== null)
            for (t.callbacks = null, t = 0; t < e.length; t++)
                Wf(e[t], l)
    }
    var ga = E(null),
        vu = E(0);
    function Ff(t, l) {
        t = Il,
        D(vu, t),
        D(ga, l),
        Il = t | l.baseLanes
    }
    function tc() {
        D(vu, Il),
        D(ga, ga.current)
    }
    function lc() {
        Il = vu.current,
        C(ga),
        C(vu)
    }
    var de = 0,
        F = null,
        ot = null,
        Rt = null,
        yu = !1,
        ba = !1,
        Ze = !1,
        gu = 0,
        mn = 0,
        xa = null,
        Sm = 0;
    function _t() {
        throw Error(r(321))
    }
    function ec(t, l) {
        if (l === null)
            return !1;
        for (var e = 0; e < l.length && e < t.length; e++)
            if (!il(t[e], l[e]))
                return !1;
        return !0
    }
    function ac(t, l, e, a, n, u) {
        return de = u, F = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, N.H = t === null || t.memoizedState === null ? Hr : Cr, Ze = !1, u = e(a, n), Ze = !1, ba && (u = Pf(l, e, a, n)), If(t), u
    }
    function If(t) {
        N.H = Au;
        var l = ot !== null && ot.next !== null;
        if (de = 0, Rt = ot = F = null, yu = !1, mn = 0, xa = null, l)
            throw Error(r(300));
        t === null || Yt || (t = t.dependencies, t !== null && ru(t) && (Yt = !0))
    }
    function Pf(t, l, e, a) {
        F = t;
        var n = 0;
        do {
            if (ba && (xa = null), mn = 0, ba = !1, 25 <= n)
                throw Error(r(301));
            if (n += 1, Rt = ot = null, t.updateQueue != null) {
                var u = t.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            N.H = Mm,
            u = l(e, a)
        } while (ba);
        return u
    }
    function Nm() {
        var t = N.H,
            l = t.useState()[0];
        return l = typeof l.then == "function" ? vn(l) : l, t = t.useState()[0], (ot !== null ? ot.memoizedState : null) !== t && (F.flags |= 1024), l
    }
    function nc() {
        var t = gu !== 0;
        return gu = 0, t
    }
    function uc(t, l, e) {
        l.updateQueue = t.updateQueue,
        l.flags &= -2053,
        t.lanes &= ~e
    }
    function ic(t) {
        if (yu) {
            for (t = t.memoizedState; t !== null;) {
                var l = t.queue;
                l !== null && (l.pending = null),
                t = t.next
            }
            yu = !1
        }
        de = 0,
        Rt = ot = F = null,
        ba = !1,
        mn = gu = 0,
        xa = null
    }
    function tl() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Rt === null ? F.memoizedState = Rt = t : Rt = Rt.next = t, Rt
    }
    function Ut() {
        if (ot === null) {
            var t = F.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = ot.next;
        var l = Rt === null ? F.memoizedState : Rt.next;
        if (l !== null)
            Rt = l,
            ot = t;
        else {
            if (t === null)
                throw F.alternate === null ? Error(r(467)) : Error(r(310));
            ot = t,
            t = {
                memoizedState: ot.memoizedState,
                baseState: ot.baseState,
                baseQueue: ot.baseQueue,
                queue: ot.queue,
                next: null
            },
            Rt === null ? F.memoizedState = Rt = t : Rt = Rt.next = t
        }
        return Rt
    }
    function cc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function vn(t) {
        var l = mn;
        return mn += 1, xa === null && (xa = []), t = kf(xa, t, l), l = F, (Rt === null ? l.memoizedState : Rt.next) === null && (l = l.alternate, N.H = l === null || l.memoizedState === null ? Hr : Cr), t
    }
    function bu(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return vn(t);
            if (t.$$typeof === At)
                return Kt(t)
        }
        throw Error(r(438, String(t)))
    }
    function sc(t) {
        var l = null,
            e = F.updateQueue;
        if (e !== null && (l = e.memoCache), l == null) {
            var a = F.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (l == null && (l = {
            data: [],
            index: 0
        }), e === null && (e = cc(), F.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0)
            for (e = l.data[l.index] = Array(t), a = 0; a < t; a++)
                e[a] = Bl;
        return l.index++, e
    }
    function kl(t, l) {
        return typeof l == "function" ? l(t) : l
    }
    function xu(t) {
        var l = Ut();
        return fc(l, ot, t)
    }
    function fc(t, l, e) {
        var a = t.queue;
        if (a === null)
            throw Error(r(311));
        a.lastRenderedReducer = e;
        var n = t.baseQueue,
            u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next,
                u.next = i
            }
            l.baseQueue = n = u,
            a.pending = null
        }
        if (u = t.baseState, n === null)
            t.memoizedState = u;
        else {
            l = n.next;
            var c = i = null,
                o = null,
                y = l,
                A = !1;
            do {
                var z = y.lane & -536870913;
                if (z !== y.lane ? (at & z) === z : (de & z) === z) {
                    var g = y.revertLane;
                    if (g === 0)
                        o !== null && (o = o.next = {
                            lane: 0,
                            revertLane: 0,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        }),
                        z === va && (A = !0);
                    else if ((de & g) === g) {
                        y = y.next,
                        g === va && (A = !0);
                        continue
                    } else
                        z = {
                            lane: 0,
                            revertLane: y.revertLane,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        },
                        o === null ? (c = o = z, i = u) : o = o.next = z,
                        F.lanes |= g,
                        xe |= g;
                    z = y.action,
                    Ze && e(u, z),
                    u = y.hasEagerState ? y.eagerState : e(u, z)
                } else
                    g = {
                        lane: z,
                        revertLane: y.revertLane,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    },
                    o === null ? (c = o = g, i = u) : o = o.next = g,
                    F.lanes |= z,
                    xe |= z;
                y = y.next
            } while (y !== null && y !== l);
            if (o === null ? i = u : o.next = c, !il(u, t.memoizedState) && (Yt = !0, A && (e = ya, e !== null)))
                throw e;
            t.memoizedState = u,
            t.baseState = i,
            t.baseQueue = o,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
    }
    function rc(t) {
        var l = Ut(),
            e = l.queue;
        if (e === null)
            throw Error(r(311));
        e.lastRenderedReducer = t;
        var a = e.dispatch,
            n = e.pending,
            u = l.memoizedState;
        if (n !== null) {
            e.pending = null;
            var i = n = n.next;
            do u = t(u, i.action),
            i = i.next;
            while (i !== n);
            il(u, l.memoizedState) || (Yt = !0),
            l.memoizedState = u,
            l.baseQueue === null && (l.baseState = u),
            e.lastRenderedState = u
        }
        return [u, a]
    }
    function tr(t, l, e) {
        var a = F,
            n = Ut(),
            u = it;
        if (u) {
            if (e === void 0)
                throw Error(r(407));
            e = e()
        } else
            e = l();
        var i = !il((ot || n).memoizedState, e);
        i && (n.memoizedState = e, Yt = !0),
        n = n.queue;
        var c = ar.bind(null, a, n, t);
        if (yn(2048, 8, c, [t]), n.getSnapshot !== l || i || Rt !== null && Rt.memoizedState.tag & 1) {
            if (a.flags |= 2048, pa(9, pu(), er.bind(null, a, n, e, l), null), gt === null)
                throw Error(r(349));
            u || (de & 124) !== 0 || lr(a, l, e)
        }
        return e
    }
    function lr(t, l, e) {
        t.flags |= 16384,
        t = {
            getSnapshot: l,
            value: e
        },
        l = F.updateQueue,
        l === null ? (l = cc(), F.updateQueue = l, l.stores = [t]) : (e = l.stores, e === null ? l.stores = [t] : e.push(t))
    }
    function er(t, l, e, a) {
        l.value = e,
        l.getSnapshot = a,
        nr(l) && ur(t)
    }
    function ar(t, l, e) {
        return e(function() {
            nr(l) && ur(t)
        })
    }
    function nr(t) {
        var l = t.getSnapshot;
        t = t.value;
        try {
            var e = l();
            return !il(t, e)
        } catch {
            return !0
        }
    }
    function ur(t) {
        var l = oa(t, 2);
        l !== null && dl(l, t, 2)
    }
    function oc(t) {
        var l = tl();
        if (typeof t == "function") {
            var e = t;
            if (t = e(), Ze) {
                ue(!0);
                try {
                    e()
                } finally {
                    ue(!1)
                }
            }
        }
        return l.memoizedState = l.baseState = t, l.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: kl,
            lastRenderedState: t
        }, l
    }
    function ir(t, l, e, a) {
        return t.baseState = e, fc(t, ot, typeof a == "function" ? a : kl)
    }
    function Am(t, l, e, a, n) {
        if (Nu(t))
            throw Error(r(485));
        if (t = l.action, t !== null) {
            var u = {
                payload: n,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    u.listeners.push(i)
                }
            };
            N.T !== null ? e(!0) : u.isTransition = !1,
            a(u),
            e = l.pending,
            e === null ? (u.next = l.pending = u, cr(l, u)) : (u.next = e.next, l.pending = e.next = u)
        }
    }
    function cr(t, l) {
        var e = l.action,
            a = l.payload,
            n = t.state;
        if (l.isTransition) {
            var u = N.T,
                i = {};
            N.T = i;
            try {
                var c = e(n, a),
                    o = N.S;
                o !== null && o(i, c),
                sr(t, l, c)
            } catch (y) {
                dc(t, l, y)
            } finally {
                N.T = u
            }
        } else
            try {
                u = e(n, a),
                sr(t, l, u)
            } catch (y) {
                dc(t, l, y)
            }
    }
    function sr(t, l, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            fr(t, l, a)
        }, function(a) {
            return dc(t, l, a)
        }) : fr(t, l, e)
    }
    function fr(t, l, e) {
        l.status = "fulfilled",
        l.value = e,
        rr(l),
        t.state = e,
        l = t.pending,
        l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, cr(t, e)))
    }
    function dc(t, l, e) {
        var a = t.pending;
        if (t.pending = null, a !== null) {
            a = a.next;
            do l.status = "rejected",
            l.reason = e,
            rr(l),
            l = l.next;
            while (l !== a)
        }
        t.action = null
    }
    function rr(t) {
        t = t.listeners;
        for (var l = 0; l < t.length; l++)
            (0, t[l])()
    }
    function or(t, l) {
        return l
    }
    function dr(t, l) {
        if (it) {
            var e = gt.formState;
            if (e !== null) {
                t:
                {
                    var a = F;
                    if (it) {
                        if (Tt) {
                            l:
                            {
                                for (var n = Tt, u = Ul; n.nodeType !== 8;) {
                                    if (!u) {
                                        n = null;
                                        break l
                                    }
                                    if (n = Ol(n.nextSibling), n === null) {
                                        n = null;
                                        break l
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }if (n) {
                                Tt = Ol(n.nextSibling),
                                a = n.data === "F!";
                                break t
                            }
                        }
                        Ye(a)
                    }
                    a = !1
                }a && (l = e[0])
            }
        }
        return e = tl(), e.memoizedState = e.baseState = l, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: or,
            lastRenderedState: l
        }, e.queue = a, e = Dr.bind(null, F, a), a.dispatch = e, a = oc(!1), u = gc.bind(null, F, !1, a.queue), a = tl(), n = {
            state: l,
            dispatch: null,
            action: t,
            pending: null
        }, a.queue = n, e = Am.bind(null, F, n, u, e), n.dispatch = e, a.memoizedState = t, [l, e, !1]
    }
    function hr(t) {
        var l = Ut();
        return mr(l, ot, t)
    }
    function mr(t, l, e) {
        if (l = fc(t, l, or)[0], t = xu(kl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
            try {
                var a = vn(l)
            } catch (i) {
                throw i === fn ? hu : i
            }
        else
            a = l;
        l = Ut();
        var n = l.queue,
            u = n.dispatch;
        return e !== l.memoizedState && (F.flags |= 2048, pa(9, pu(), Tm.bind(null, n, e), null)), [a, u, t]
    }
    function Tm(t, l) {
        t.action = l
    }
    function vr(t) {
        var l = Ut(),
            e = ot;
        if (e !== null)
            return mr(l, e, t);
        Ut(),
        l = l.memoizedState,
        e = Ut();
        var a = e.queue.dispatch;
        return e.memoizedState = t, [l, a, !1]
    }
    function pa(t, l, e, a) {
        return t = {
            tag: t,
            create: e,
            deps: a,
            inst: l,
            next: null
        }, l = F.updateQueue, l === null && (l = cc(), F.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t
    }
    function pu() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function yr() {
        return Ut().memoizedState
    }
    function Su(t, l, e, a) {
        var n = tl();
        a = a === void 0 ? null : a,
        F.flags |= t,
        n.memoizedState = pa(1 | l, pu(), e, a)
    }
    function yn(t, l, e, a) {
        var n = Ut();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        ot !== null && a !== null && ec(a, ot.memoizedState.deps) ? n.memoizedState = pa(l, u, e, a) : (F.flags |= t, n.memoizedState = pa(1 | l, u, e, a))
    }
    function gr(t, l) {
        Su(8390656, 8, t, l)
    }
    function br(t, l) {
        yn(2048, 8, t, l)
    }
    function xr(t, l) {
        return yn(4, 2, t, l)
    }
    function pr(t, l) {
        return yn(4, 4, t, l)
    }
    function Sr(t, l) {
        if (typeof l == "function") {
            t = t();
            var e = l(t);
            return function() {
                typeof e == "function" ? e() : l(null)
            }
        }
        if (l != null)
            return t = t(), l.current = t, function() {
                l.current = null
            }
    }
    function Nr(t, l, e) {
        e = e != null ? e.concat([t]) : null,
        yn(4, 4, Sr.bind(null, l, t), e)
    }
    function hc() {}
    function Ar(t, l) {
        var e = Ut();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        return l !== null && ec(l, a[1]) ? a[0] : (e.memoizedState = [t, l], t)
    }
    function Tr(t, l) {
        var e = Ut();
        l = l === void 0 ? null : l;
        var a = e.memoizedState;
        if (l !== null && ec(l, a[1]))
            return a[0];
        if (a = t(), Ze) {
            ue(!0);
            try {
                t()
            } finally {
                ue(!1)
            }
        }
        return e.memoizedState = [a, l], a
    }
    function mc(t, l, e) {
        return e === void 0 || (de & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = e, t = Mo(), F.lanes |= t, xe |= t, e)
    }
    function jr(t, l, e, a) {
        return il(e, l) ? e : ga.current !== null ? (t = mc(t, e, a), il(t, l) || (Yt = !0), t) : (de & 42) === 0 ? (Yt = !0, t.memoizedState = e) : (t = Mo(), F.lanes |= t, xe |= t, l)
    }
    function zr(t, l, e, a, n) {
        var u = U.p;
        U.p = u !== 0 && 8 > u ? u : 8;
        var i = N.T,
            c = {};
        N.T = c,
        gc(t, !1, l, e);
        try {
            var o = n(),
                y = N.S;
            if (y !== null && y(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
                var A = pm(o, a);
                gn(t, l, A, ol(t))
            } else
                gn(t, l, a, ol(t))
        } catch (z) {
            gn(t, l, {
                then: function() {},
                status: "rejected",
                reason: z
            }, ol())
        } finally {
            U.p = u,
            N.T = i
        }
    }
    function jm() {}
    function vc(t, l, e, a) {
        if (t.tag !== 5)
            throw Error(r(476));
        var n = Er(t).queue;
        zr(t, n, l, O, e === null ? jm : function() {
            return Mr(t), e(a)
        })
    }
    function Er(t) {
        var l = t.memoizedState;
        if (l !== null)
            return l;
        l = {
            memoizedState: O,
            baseState: O,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: kl,
                lastRenderedState: O
            },
            next: null
        };
        var e = {};
        return l.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: kl,
                lastRenderedState: e
            },
            next: null
        }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l
    }
    function Mr(t) {
        var l = Er(t).next.queue;
        gn(t, l, {}, ol())
    }
    function yc() {
        return Kt(Cn)
    }
    function _r() {
        return Ut().memoizedState
    }
    function Or() {
        return Ut().memoizedState
    }
    function zm(t) {
        for (var l = t.return; l !== null;) {
            switch (l.tag) {
            case 24:
            case 3:
                var e = ol();
                t = re(e);
                var a = oe(l, t, e);
                a !== null && (dl(a, l, e), on(a, l, e)),
                l = {
                    cache: ki()
                },
                t.payload = l;
                return
            }
            l = l.return
        }
    }
    function Em(t, l, e) {
        var a = ol();
        e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Nu(t) ? Rr(l, e) : (e = qi(t, l, e, a), e !== null && (dl(e, t, a), Ur(e, l, a)))
    }
    function Dr(t, l, e) {
        var a = ol();
        gn(t, l, e, a)
    }
    function gn(t, l, e, a) {
        var n = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Nu(t))
            Rr(l, n);
        else {
            var u = t.alternate;
            if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null))
                try {
                    var i = l.lastRenderedState,
                        c = u(i, e);
                    if (n.hasEagerState = !0, n.eagerState = c, il(c, i))
                        return uu(t, l, n, 0), gt === null && nu(), !1
                } catch {} finally {}
            if (e = qi(t, l, n, a), e !== null)
                return dl(e, t, a), Ur(e, l, a), !0
        }
        return !1
    }
    function gc(t, l, e, a) {
        if (a = {
            lane: 2,
            revertLane: Wc(),
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Nu(t)) {
            if (l)
                throw Error(r(479))
        } else
            l = qi(t, e, a, 2),
            l !== null && dl(l, t, 2)
    }
    function Nu(t) {
        var l = t.alternate;
        return t === F || l !== null && l === F
    }
    function Rr(t, l) {
        ba = yu = !0;
        var e = t.pending;
        e === null ? l.next = l : (l.next = e.next, e.next = l),
        t.pending = l
    }
    function Ur(t, l, e) {
        if ((e & 4194048) !== 0) {
            var a = l.lanes;
            a &= t.pendingLanes,
            e |= a,
            l.lanes = e,
            Ys(t, e)
        }
    }
    var Au = {
            readContext: Kt,
            use: bu,
            useCallback: _t,
            useContext: _t,
            useEffect: _t,
            useImperativeHandle: _t,
            useLayoutEffect: _t,
            useInsertionEffect: _t,
            useMemo: _t,
            useReducer: _t,
            useRef: _t,
            useState: _t,
            useDebugValue: _t,
            useDeferredValue: _t,
            useTransition: _t,
            useSyncExternalStore: _t,
            useId: _t,
            useHostTransitionStatus: _t,
            useFormState: _t,
            useActionState: _t,
            useOptimistic: _t,
            useMemoCache: _t,
            useCacheRefresh: _t
        },
        Hr = {
            readContext: Kt,
            use: bu,
            useCallback: function(t, l) {
                return tl().memoizedState = [t, l === void 0 ? null : l], t
            },
            useContext: Kt,
            useEffect: gr,
            useImperativeHandle: function(t, l, e) {
                e = e != null ? e.concat([t]) : null,
                Su(4194308, 4, Sr.bind(null, l, t), e)
            },
            useLayoutEffect: function(t, l) {
                return Su(4194308, 4, t, l)
            },
            useInsertionEffect: function(t, l) {
                Su(4, 2, t, l)
            },
            useMemo: function(t, l) {
                var e = tl();
                l = l === void 0 ? null : l;
                var a = t();
                if (Ze) {
                    ue(!0);
                    try {
                        t()
                    } finally {
                        ue(!1)
                    }
                }
                return e.memoizedState = [a, l], a
            },
            useReducer: function(t, l, e) {
                var a = tl();
                if (e !== void 0) {
                    var n = e(l);
                    if (Ze) {
                        ue(!0);
                        try {
                            e(l)
                        } finally {
                            ue(!1)
                        }
                    }
                } else
                    n = l;
                return a.memoizedState = a.baseState = n, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: n
                }, a.queue = t, t = t.dispatch = Em.bind(null, F, t), [a.memoizedState, t]
            },
            useRef: function(t) {
                var l = tl();
                return t = {
                    current: t
                }, l.memoizedState = t
            },
            useState: function(t) {
                t = oc(t);
                var l = t.queue,
                    e = Dr.bind(null, F, l);
                return l.dispatch = e, [t.memoizedState, e]
            },
            useDebugValue: hc,
            useDeferredValue: function(t, l) {
                var e = tl();
                return mc(e, t, l)
            },
            useTransition: function() {
                var t = oc(!1);
                return t = zr.bind(null, F, t.queue, !0, !1), tl().memoizedState = t, [!1, t]
            },
            useSyncExternalStore: function(t, l, e) {
                var a = F,
                    n = tl();
                if (it) {
                    if (e === void 0)
                        throw Error(r(407));
                    e = e()
                } else {
                    if (e = l(), gt === null)
                        throw Error(r(349));
                    (at & 124) !== 0 || lr(a, l, e)
                }
                n.memoizedState = e;
                var u = {
                    value: e,
                    getSnapshot: l
                };
                return n.queue = u, gr(ar.bind(null, a, u, t), [t]), a.flags |= 2048, pa(9, pu(), er.bind(null, a, u, e, l), null), e
            },
            useId: function() {
                var t = tl(),
                    l = gt.identifierPrefix;
                if (it) {
                    var e = Vl,
                        a = Ql;
                    e = (a & ~(1 << 32 - ul(a) - 1)).toString(32) + e,
                    l = "«" + l + "R" + e,
                    e = gu++,
                    0 < e && (l += "H" + e.toString(32)),
                    l += "»"
                } else
                    e = Sm++,
                    l = "«" + l + "r" + e.toString(32) + "»";
                return t.memoizedState = l
            },
            useHostTransitionStatus: yc,
            useFormState: dr,
            useActionState: dr,
            useOptimistic: function(t) {
                var l = tl();
                l.memoizedState = l.baseState = t;
                var e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return l.queue = e, l = gc.bind(null, F, !0, e), e.dispatch = l, [t, l]
            },
            useMemoCache: sc,
            useCacheRefresh: function() {
                return tl().memoizedState = zm.bind(null, F)
            }
        },
        Cr = {
            readContext: Kt,
            use: bu,
            useCallback: Ar,
            useContext: Kt,
            useEffect: br,
            useImperativeHandle: Nr,
            useInsertionEffect: xr,
            useLayoutEffect: pr,
            useMemo: Tr,
            useReducer: xu,
            useRef: yr,
            useState: function() {
                return xu(kl)
            },
            useDebugValue: hc,
            useDeferredValue: function(t, l) {
                var e = Ut();
                return jr(e, ot.memoizedState, t, l)
            },
            useTransition: function() {
                var t = xu(kl)[0],
                    l = Ut().memoizedState;
                return [typeof t == "boolean" ? t : vn(t), l]
            },
            useSyncExternalStore: tr,
            useId: _r,
            useHostTransitionStatus: yc,
            useFormState: hr,
            useActionState: hr,
            useOptimistic: function(t, l) {
                var e = Ut();
                return ir(e, ot, t, l)
            },
            useMemoCache: sc,
            useCacheRefresh: Or
        },
        Mm = {
            readContext: Kt,
            use: bu,
            useCallback: Ar,
            useContext: Kt,
            useEffect: br,
            useImperativeHandle: Nr,
            useInsertionEffect: xr,
            useLayoutEffect: pr,
            useMemo: Tr,
            useReducer: rc,
            useRef: yr,
            useState: function() {
                return rc(kl)
            },
            useDebugValue: hc,
            useDeferredValue: function(t, l) {
                var e = Ut();
                return ot === null ? mc(e, t, l) : jr(e, ot.memoizedState, t, l)
            },
            useTransition: function() {
                var t = rc(kl)[0],
                    l = Ut().memoizedState;
                return [typeof t == "boolean" ? t : vn(t), l]
            },
            useSyncExternalStore: tr,
            useId: _r,
            useHostTransitionStatus: yc,
            useFormState: vr,
            useActionState: vr,
            useOptimistic: function(t, l) {
                var e = Ut();
                return ot !== null ? ir(e, ot, t, l) : (e.baseState = t, [t, e.queue.dispatch])
            },
            useMemoCache: sc,
            useCacheRefresh: Or
        },
        Sa = null,
        bn = 0;
    function Tu(t) {
        var l = bn;
        return bn += 1, Sa === null && (Sa = []), kf(Sa, t, l)
    }
    function xn(t, l) {
        l = l.props.ref,
        t.ref = l !== void 0 ? l : null
    }
    function ju(t, l) {
        throw l.$$typeof === K ? Error(r(525)) : (t = Object.prototype.toString.call(l), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)))
    }
    function qr(t) {
        var l = t._init;
        return l(t._payload)
    }
    function wr(t) {
        function l(m, h) {
            if (t) {
                var v = m.deletions;
                v === null ? (m.deletions = [h], m.flags |= 16) : v.push(h)
            }
        }
        function e(m, h) {
            if (!t)
                return null;
            for (; h !== null;)
                l(m, h),
                h = h.sibling;
            return null
        }
        function a(m) {
            for (var h = new Map; m !== null;)
                m.key !== null ? h.set(m.key, m) : h.set(m.index, m),
                m = m.sibling;
            return h
        }
        function n(m, h) {
            return m = Xl(m, h), m.index = 0, m.sibling = null, m
        }
        function u(m, h, v) {
            return m.index = v, t ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 67108866, h) : v) : (m.flags |= 67108866, h)) : (m.flags |= 1048576, h)
        }
        function i(m) {
            return t && m.alternate === null && (m.flags |= 67108866), m
        }
        function c(m, h, v, j) {
            return h === null || h.tag !== 6 ? (h = Bi(v, m.mode, j), h.return = m, h) : (h = n(h, v), h.return = m, h)
        }
        function o(m, h, v, j) {
            var w = v.type;
            return w === ct ? A(m, h, v.props.children, j, v.key) : h !== null && (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === X && qr(w) === h.type) ? (h = n(h, v.props), xn(h, v), h.return = m, h) : (h = cu(v.type, v.key, v.props, null, m.mode, j), xn(h, v), h.return = m, h)
        }
        function y(m, h, v, j) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Gi(v, m.mode, j), h.return = m, h) : (h = n(h, v.children || []), h.return = m, h)
        }
        function A(m, h, v, j, w) {
            return h === null || h.tag !== 7 ? (h = qe(v, m.mode, j, w), h.return = m, h) : (h = n(h, v), h.return = m, h)
        }
        function z(m, h, v) {
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return h = Bi("" + h, m.mode, v), h.return = m, h;
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case W:
                    return v = cu(h.type, h.key, h.props, null, m.mode, v), xn(v, h), v.return = m, v;
                case pt:
                    return h = Gi(h, m.mode, v), h.return = m, h;
                case X:
                    var j = h._init;
                    return h = j(h._payload), z(m, h, v)
                }
                if (St(h) || Mt(h))
                    return h = qe(h, m.mode, v, null), h.return = m, h;
                if (typeof h.then == "function")
                    return z(m, Tu(h), v);
                if (h.$$typeof === At)
                    return z(m, ou(m, h), v);
                ju(m, h)
            }
            return null
        }
        function g(m, h, v, j) {
            var w = h !== null ? h.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
                return w !== null ? null : c(m, h, "" + v, j);
            if (typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case W:
                    return v.key === w ? o(m, h, v, j) : null;
                case pt:
                    return v.key === w ? y(m, h, v, j) : null;
                case X:
                    return w = v._init, v = w(v._payload), g(m, h, v, j)
                }
                if (St(v) || Mt(v))
                    return w !== null ? null : A(m, h, v, j, null);
                if (typeof v.then == "function")
                    return g(m, h, Tu(v), j);
                if (v.$$typeof === At)
                    return g(m, h, ou(m, v), j);
                ju(m, v)
            }
            return null
        }
        function b(m, h, v, j, w) {
            if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
                return m = m.get(v) || null, c(h, m, "" + j, w);
            if (typeof j == "object" && j !== null) {
                switch (j.$$typeof) {
                case W:
                    return m = m.get(j.key === null ? v : j.key) || null, o(h, m, j, w);
                case pt:
                    return m = m.get(j.key === null ? v : j.key) || null, y(h, m, j, w);
                case X:
                    var P = j._init;
                    return j = P(j._payload), b(m, h, v, j, w)
                }
                if (St(j) || Mt(j))
                    return m = m.get(v) || null, A(h, m, j, w, null);
                if (typeof j.then == "function")
                    return b(m, h, v, Tu(j), w);
                if (j.$$typeof === At)
                    return b(m, h, v, ou(h, j), w);
                ju(h, j)
            }
            return null
        }
        function L(m, h, v, j) {
            for (var w = null, P = null, Y = h, Z = h = 0, Qt = null; Y !== null && Z < v.length; Z++) {
                Y.index > Z ? (Qt = Y, Y = null) : Qt = Y.sibling;
                var ut = g(m, Y, v[Z], j);
                if (ut === null) {
                    Y === null && (Y = Qt);
                    break
                }
                t && Y && ut.alternate === null && l(m, Y),
                h = u(ut, h, Z),
                P === null ? w = ut : P.sibling = ut,
                P = ut,
                Y = Qt
            }
            if (Z === v.length)
                return e(m, Y), it && Be(m, Z), w;
            if (Y === null) {
                for (; Z < v.length; Z++)
                    Y = z(m, v[Z], j),
                    Y !== null && (h = u(Y, h, Z), P === null ? w = Y : P.sibling = Y, P = Y);
                return it && Be(m, Z), w
            }
            for (Y = a(Y); Z < v.length; Z++)
                Qt = b(Y, m, Z, v[Z], j),
                Qt !== null && (t && Qt.alternate !== null && Y.delete(Qt.key === null ? Z : Qt.key), h = u(Qt, h, Z), P === null ? w = Qt : P.sibling = Qt, P = Qt);
            return t && Y.forEach(function(Me) {
                return l(m, Me)
            }), it && Be(m, Z), w
        }
        function V(m, h, v, j) {
            if (v == null)
                throw Error(r(151));
            for (var w = null, P = null, Y = h, Z = h = 0, Qt = null, ut = v.next(); Y !== null && !ut.done; Z++, ut = v.next()) {
                Y.index > Z ? (Qt = Y, Y = null) : Qt = Y.sibling;
                var Me = g(m, Y, ut.value, j);
                if (Me === null) {
                    Y === null && (Y = Qt);
                    break
                }
                t && Y && Me.alternate === null && l(m, Y),
                h = u(Me, h, Z),
                P === null ? w = Me : P.sibling = Me,
                P = Me,
                Y = Qt
            }
            if (ut.done)
                return e(m, Y), it && Be(m, Z), w;
            if (Y === null) {
                for (; !ut.done; Z++, ut = v.next())
                    ut = z(m, ut.value, j),
                    ut !== null && (h = u(ut, h, Z), P === null ? w = ut : P.sibling = ut, P = ut);
                return it && Be(m, Z), w
            }
            for (Y = a(Y); !ut.done; Z++, ut = v.next())
                ut = b(Y, m, Z, ut.value, j),
                ut !== null && (t && ut.alternate !== null && Y.delete(ut.key === null ? Z : ut.key), h = u(ut, h, Z), P === null ? w = ut : P.sibling = ut, P = ut);
            return t && Y.forEach(function(_0) {
                return l(m, _0)
            }), it && Be(m, Z), w
        }
        function ht(m, h, v, j) {
            if (typeof v == "object" && v !== null && v.type === ct && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch (v.$$typeof) {
                case W:
                    t:
                    {
                        for (var w = v.key; h !== null;) {
                            if (h.key === w) {
                                if (w = v.type, w === ct) {
                                    if (h.tag === 7) {
                                        e(m, h.sibling),
                                        j = n(h, v.props.children),
                                        j.return = m,
                                        m = j;
                                        break t
                                    }
                                } else if (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === X && qr(w) === h.type) {
                                    e(m, h.sibling),
                                    j = n(h, v.props),
                                    xn(j, v),
                                    j.return = m,
                                    m = j;
                                    break t
                                }
                                e(m, h);
                                break
                            } else
                                l(m, h);
                            h = h.sibling
                        }
                        v.type === ct ? (j = qe(v.props.children, m.mode, j, v.key), j.return = m, m = j) : (j = cu(v.type, v.key, v.props, null, m.mode, j), xn(j, v), j.return = m, m = j)
                    }return i(m);
                case pt:
                    t:
                    {
                        for (w = v.key; h !== null;) {
                            if (h.key === w)
                                if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                    e(m, h.sibling),
                                    j = n(h, v.children || []),
                                    j.return = m,
                                    m = j;
                                    break t
                                } else {
                                    e(m, h);
                                    break
                                }
                            else
                                l(m, h);
                            h = h.sibling
                        }
                        j = Gi(v, m.mode, j),
                        j.return = m,
                        m = j
                    }return i(m);
                case X:
                    return w = v._init, v = w(v._payload), ht(m, h, v, j)
                }
                if (St(v))
                    return L(m, h, v, j);
                if (Mt(v)) {
                    if (w = Mt(v), typeof w != "function")
                        throw Error(r(150));
                    return v = w.call(v), V(m, h, v, j)
                }
                if (typeof v.then == "function")
                    return ht(m, h, Tu(v), j);
                if (v.$$typeof === At)
                    return ht(m, h, ou(m, v), j);
                ju(m, v)
            }
            return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, h !== null && h.tag === 6 ? (e(m, h.sibling), j = n(h, v), j.return = m, m = j) : (e(m, h), j = Bi(v, m.mode, j), j.return = m, m = j), i(m)) : e(m, h)
        }
        return function(m, h, v, j) {
            try {
                bn = 0;
                var w = ht(m, h, v, j);
                return Sa = null, w
            } catch (Y) {
                if (Y === fn || Y === hu)
                    throw Y;
                var P = cl(29, Y, null, m.mode);
                return P.lanes = j, P.return = m, P
            } finally {}
        }
    }
    var Na = wr(!0),
        Br = wr(!1),
        Tl = E(null),
        Hl = null;
    function he(t) {
        var l = t.alternate;
        D(qt, qt.current & 1),
        D(Tl, t),
        Hl === null && (l === null || ga.current !== null || l.memoizedState !== null) && (Hl = t)
    }
    function Gr(t) {
        if (t.tag === 22) {
            if (D(qt, qt.current), D(Tl, t), Hl === null) {
                var l = t.alternate;
                l !== null && l.memoizedState !== null && (Hl = t)
            }
        } else
            me()
    }
    function me() {
        D(qt, qt.current),
        D(Tl, Tl.current)
    }
    function Kl(t) {
        C(Tl),
        Hl === t && (Hl = null),
        C(qt)
    }
    var qt = E(0);
    function zu(t) {
        for (var l = t; l !== null;) {
            if (l.tag === 13) {
                var e = l.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || cs(e)))
                    return l
            } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
                if ((l.flags & 128) !== 0)
                    return l
            } else if (l.child !== null) {
                l.child.return = l,
                l = l.child;
                continue
            }
            if (l === t)
                break;
            for (; l.sibling === null;) {
                if (l.return === null || l.return === t)
                    return null;
                l = l.return
            }
            l.sibling.return = l.return,
            l = l.sibling
        }
        return null
    }
    function bc(t, l, e, a) {
        l = t.memoizedState,
        e = e(a, l),
        e = e == null ? l : R({}, l, e),
        t.memoizedState = e,
        t.lanes === 0 && (t.updateQueue.baseState = e)
    }
    var xc = {
        enqueueSetState: function(t, l, e) {
            t = t._reactInternals;
            var a = ol(),
                n = re(a);
            n.payload = l,
            e != null && (n.callback = e),
            l = oe(t, n, a),
            l !== null && (dl(l, t, a), on(l, t, a))
        },
        enqueueReplaceState: function(t, l, e) {
            t = t._reactInternals;
            var a = ol(),
                n = re(a);
            n.tag = 1,
            n.payload = l,
            e != null && (n.callback = e),
            l = oe(t, n, a),
            l !== null && (dl(l, t, a), on(l, t, a))
        },
        enqueueForceUpdate: function(t, l) {
            t = t._reactInternals;
            var e = ol(),
                a = re(e);
            a.tag = 2,
            l != null && (a.callback = l),
            l = oe(t, a, e),
            l !== null && (dl(l, t, e), on(l, t, e))
        }
    };
    function Yr(t, l, e, a, n, u, i) {
        return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !tn(e, a) || !tn(n, u) : !0
    }
    function Xr(t, l, e, a) {
        t = l.state,
        typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a),
        typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a),
        l.state !== t && xc.enqueueReplaceState(l, l.state, null)
    }
    function Le(t, l) {
        var e = l;
        if ("ref" in l) {
            e = {};
            for (var a in l)
                a !== "ref" && (e[a] = l[a])
        }
        if (t = t.defaultProps) {
            e === l && (e = R({}, e));
            for (var n in t)
                e[n] === void 0 && (e[n] = t[n])
        }
        return e
    }
    var Eu = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var l = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(l))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    };
    function Qr(t) {
        Eu(t)
    }
    function Vr(t) {
        console.error(t)
    }
    function Zr(t) {
        Eu(t)
    }
    function Mu(t, l) {
        try {
            var e = t.onUncaughtError;
            e(l.value, {
                componentStack: l.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Lr(t, l, e) {
        try {
            var a = t.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: l.tag === 1 ? l.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function pc(t, l, e) {
        return e = re(e), e.tag = 3, e.payload = {
            element: null
        }, e.callback = function() {
            Mu(t, l)
        }, e
    }
    function kr(t) {
        return t = re(t), t.tag = 3, t
    }
    function Kr(t, l, e, a) {
        var n = e.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            t.payload = function() {
                return n(u)
            },
            t.callback = function() {
                Lr(l, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            Lr(l, e, a),
            typeof n != "function" && (pe === null ? pe = new Set([this]) : pe.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        })
    }
    function _m(t, l, e, a, n) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (l = e.alternate, l !== null && un(l, e, n, !0), e = Tl.current, e !== null) {
                switch (e.tag) {
                case 13:
                    return Hl === null ? Zc() : e.alternate === null && jt === 0 && (jt = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Wi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = new Set([a]) : l.add(a), kc(t, a, n)), !1;
                case 22:
                    return e.flags |= 65536, a === Wi ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = new Set([a]) : e.add(a)), kc(t, a, n)), !1
                }
                throw Error(r(435, e.tag))
            }
            return kc(t, a, n), Zc(), !1
        }
        if (it)
            return l = Tl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Qi && (t = Error(r(422), {
                cause: a
            }), nn(pl(t, e)))) : (a !== Qi && (l = Error(r(423), {
                cause: a
            }), nn(pl(l, e))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = pl(a, e), n = pc(t.stateNode, a, n), Ii(t, n), jt !== 4 && (jt = 2)), !1;
        var u = Error(r(520), {
            cause: a
        });
        if (u = pl(u, e), zn === null ? zn = [u] : zn.push(u), jt !== 4 && (jt = 2), l === null)
            return !0;
        a = pl(a, e),
        e = l;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536, t = n & -n, e.lanes |= t, t = pc(e.stateNode, a, t), Ii(e, t), !1;
            case 1:
                if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pe === null || !pe.has(u))))
                    return e.flags |= 65536, n &= -n, e.lanes |= n, n = kr(n), Kr(n, t, e, a), Ii(e, n), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var Jr = Error(r(461)),
        Yt = !1;
    function Vt(t, l, e, a) {
        l.child = t === null ? Br(l, null, e, a) : Na(l, t.child, e, a)
    }
    function Wr(t, l, e, a, n) {
        e = e.render;
        var u = l.ref;
        if ("ref" in a) {
            var i = {};
            for (var c in a)
                c !== "ref" && (i[c] = a[c])
        } else
            i = a;
        return Qe(l), a = ac(t, l, e, i, u, n), c = nc(), t !== null && !Yt ? (uc(t, l, n), Jl(t, l, n)) : (it && c && Yi(l), l.flags |= 1, Vt(t, l, a, n), l.child)
    }
    function $r(t, l, e, a, n) {
        if (t === null) {
            var u = e.type;
            return typeof u == "function" && !wi(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, Fr(t, l, u, a, n)) : (t = cu(e.type, null, a, l, l.mode, n), t.ref = l.ref, t.return = l, l.child = t)
        }
        if (u = t.child, !Mc(t, n)) {
            var i = u.memoizedProps;
            if (e = e.compare, e = e !== null ? e : tn, e(i, a) && t.ref === l.ref)
                return Jl(t, l, n)
        }
        return l.flags |= 1, t = Xl(u, a), t.ref = l.ref, t.return = l, l.child = t
    }
    function Fr(t, l, e, a, n) {
        if (t !== null) {
            var u = t.memoizedProps;
            if (tn(u, a) && t.ref === l.ref)
                if (Yt = !1, l.pendingProps = a = u, Mc(t, n))
                    (t.flags & 131072) !== 0 && (Yt = !0);
                else
                    return l.lanes = t.lanes, Jl(t, l, n)
        }
        return Sc(t, l, e, a, n)
    }
    function Ir(t, l, e) {
        var a = l.pendingProps,
            n = a.children,
            u = t !== null ? t.memoizedState : null;
        if (a.mode === "hidden") {
            if ((l.flags & 128) !== 0) {
                if (a = u !== null ? u.baseLanes | e : e, t !== null) {
                    for (n = l.child = t.child, u = 0; n !== null;)
                        u = u | n.lanes | n.childLanes,
                        n = n.sibling;
                    l.childLanes = u & ~a
                } else
                    l.childLanes = 0,
                    l.child = null;
                return Pr(t, l, a, e)
            }
            if ((e & 536870912) !== 0)
                l.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && du(l, u !== null ? u.cachePool : null),
                u !== null ? Ff(l, u) : tc(),
                Gr(l);
            else
                return l.lanes = l.childLanes = 536870912, Pr(t, l, u !== null ? u.baseLanes | e : e, e)
        } else
            u !== null ? (du(l, u.cachePool), Ff(l, u), me(), l.memoizedState = null) : (t !== null && du(l, null), tc(), me());
        return Vt(t, l, n, e), l.child
    }
    function Pr(t, l, e, a) {
        var n = Ji();
        return n = n === null ? null : {
            parent: Ct._currentValue,
            pool: n
        }, l.memoizedState = {
            baseLanes: e,
            cachePool: n
        }, t !== null && du(l, null), tc(), Gr(l), t !== null && un(t, l, a, !0), null
    }
    function _u(t, l) {
        var e = l.ref;
        if (e === null)
            t !== null && t.ref !== null && (l.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(r(284));
            (t === null || t.ref !== e) && (l.flags |= 4194816)
        }
    }
    function Sc(t, l, e, a, n) {
        return Qe(l), e = ac(t, l, e, a, void 0, n), a = nc(), t !== null && !Yt ? (uc(t, l, n), Jl(t, l, n)) : (it && a && Yi(l), l.flags |= 1, Vt(t, l, e, n), l.child)
    }
    function to(t, l, e, a, n, u) {
        return Qe(l), l.updateQueue = null, e = Pf(l, a, e, n), If(t), a = nc(), t !== null && !Yt ? (uc(t, l, u), Jl(t, l, u)) : (it && a && Yi(l), l.flags |= 1, Vt(t, l, e, u), l.child)
    }
    function lo(t, l, e, a, n) {
        if (Qe(l), l.stateNode === null) {
            var u = da,
                i = e.contextType;
            typeof i == "object" && i !== null && (u = Kt(i)),
            u = new e(a, u),
            l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = xc,
            l.stateNode = u,
            u._reactInternals = l,
            u = l.stateNode,
            u.props = a,
            u.state = l.memoizedState,
            u.refs = {},
            $i(l),
            i = e.contextType,
            u.context = typeof i == "object" && i !== null ? Kt(i) : da,
            u.state = l.memoizedState,
            i = e.getDerivedStateFromProps,
            typeof i == "function" && (bc(l, e, i, a), u.state = l.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && xc.enqueueReplaceState(u, u.state, null), hn(l, a, u, n), dn(), u.state = l.memoizedState),
            typeof u.componentDidMount == "function" && (l.flags |= 4194308),
            a = !0
        } else if (t === null) {
            u = l.stateNode;
            var c = l.memoizedProps,
                o = Le(e, c);
            u.props = o;
            var y = u.context,
                A = e.contextType;
            i = da,
            typeof A == "object" && A !== null && (i = Kt(A));
            var z = e.getDerivedStateFromProps;
            A = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            c = l.pendingProps !== c,
            A || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Xr(l, u, a, i),
            fe = !1;
            var g = l.memoizedState;
            u.state = g,
            hn(l, a, u, n),
            dn(),
            y = l.memoizedState,
            c || g !== y || fe ? (typeof z == "function" && (bc(l, e, z, a), y = l.memoizedState), (o = fe || Yr(l, e, o, a, g, y, i)) ? (A || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = y), u.props = a, u.state = y, u.context = i, a = o) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = !1)
        } else {
            u = l.stateNode,
            Fi(t, l),
            i = l.memoizedProps,
            A = Le(e, i),
            u.props = A,
            z = l.pendingProps,
            g = u.context,
            y = e.contextType,
            o = da,
            typeof y == "object" && y !== null && (o = Kt(y)),
            c = e.getDerivedStateFromProps,
            (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== z || g !== o) && Xr(l, u, a, o),
            fe = !1,
            g = l.memoizedState,
            u.state = g,
            hn(l, a, u, n),
            dn();
            var b = l.memoizedState;
            i !== z || g !== b || fe || t !== null && t.dependencies !== null && ru(t.dependencies) ? (typeof c == "function" && (bc(l, e, c, a), b = l.memoizedState), (A = fe || Yr(l, e, A, a, g, b, o) || t !== null && t.dependencies !== null && ru(t.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, o)), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), u.props = a, u.state = b, u.context = o, a = A) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), a = !1)
        }
        return u = a, _u(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = Na(l, t.child, null, n), l.child = Na(l, null, e, n)) : Vt(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = Jl(t, l, n), t
    }
    function eo(t, l, e, a) {
        return an(), l.flags |= 256, Vt(t, l, e, a), l.child
    }
    var Nc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ac(t) {
        return {
            baseLanes: t,
            cachePool: Vf()
        }
    }
    function Tc(t, l, e) {
        return t = t !== null ? t.childLanes & ~e : 0, l && (t |= jl), t
    }
    function ao(t, l, e) {
        var a = l.pendingProps,
            n = !1,
            u = (l.flags & 128) !== 0,
            i;
        if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0), i && (n = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
            if (it) {
                if (n ? he(l) : me(), it) {
                    var c = Tt,
                        o;
                    if (o = c) {
                        t:
                        {
                            for (o = c, c = Ul; o.nodeType !== 8;) {
                                if (!c) {
                                    c = null;
                                    break t
                                }
                                if (o = Ol(o.nextSibling), o === null) {
                                    c = null;
                                    break t
                                }
                            }
                            c = o
                        }c !== null ? (l.memoizedState = {
                            dehydrated: c,
                            treeContext: we !== null ? {
                                id: Ql,
                                overflow: Vl
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, o = cl(18, null, null, 0), o.stateNode = c, o.return = l, l.child = o, $t = l, Tt = null, o = !0) : o = !1
                    }
                    o || Ye(l)
                }
                if (c = l.memoizedState, c !== null && (c = c.dehydrated, c !== null))
                    return cs(c) ? l.lanes = 32 : l.lanes = 536870912, null;
                Kl(l)
            }
            return c = a.children, a = a.fallback, n ? (me(), n = l.mode, c = Ou({
                mode: "hidden",
                children: c
            }, n), a = qe(a, n, e, null), c.return = l, a.return = l, c.sibling = a, l.child = c, n = l.child, n.memoizedState = Ac(e), n.childLanes = Tc(t, i, e), l.memoizedState = Nc, a) : (he(l), jc(l, c))
        }
        if (o = t.memoizedState, o !== null && (c = o.dehydrated, c !== null)) {
            if (u)
                l.flags & 256 ? (he(l), l.flags &= -257, l = zc(t, l, e)) : l.memoizedState !== null ? (me(), l.child = t.child, l.flags |= 128, l = null) : (me(), n = a.fallback, c = l.mode, a = Ou({
                    mode: "visible",
                    children: a.children
                }, c), n = qe(n, c, e, null), n.flags |= 2, a.return = l, n.return = l, a.sibling = n, l.child = a, Na(l, t.child, null, e), a = l.child, a.memoizedState = Ac(e), a.childLanes = Tc(t, i, e), l.memoizedState = Nc, l = n);
            else if (he(l), cs(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset, i)
                    var y = i.dgst;
                i = y,
                a = Error(r(419)),
                a.stack = "",
                a.digest = i,
                nn({
                    value: a,
                    source: null,
                    stack: null
                }),
                l = zc(t, l, e)
            } else if (Yt || un(t, l, e, !1), i = (e & t.childLanes) !== 0, Yt || i) {
                if (i = gt, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : si(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane))
                    throw o.retryLane = a, oa(t, a), dl(i, t, a), Jr;
                c.data === "$?" || Zc(),
                l = zc(t, l, e)
            } else
                c.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = o.treeContext, Tt = Ol(c.nextSibling), $t = l, it = !0, Ge = null, Ul = !1, t !== null && (Nl[Al++] = Ql, Nl[Al++] = Vl, Nl[Al++] = we, Ql = t.id, Vl = t.overflow, we = l), l = jc(l, a.children), l.flags |= 4096);
            return l
        }
        return n ? (me(), n = a.fallback, c = l.mode, o = t.child, y = o.sibling, a = Xl(o, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = o.subtreeFlags & 65011712, y !== null ? n = Xl(y, n) : (n = qe(n, c, e, null), n.flags |= 2), n.return = l, a.return = l, a.sibling = n, l.child = a, a = n, n = l.child, c = t.child.memoizedState, c === null ? c = Ac(e) : (o = c.cachePool, o !== null ? (y = Ct._currentValue, o = o.parent !== y ? {
            parent: y,
            pool: y
        } : o) : o = Vf(), c = {
            baseLanes: c.baseLanes | e,
            cachePool: o
        }), n.memoizedState = c, n.childLanes = Tc(t, i, e), l.memoizedState = Nc, a) : (he(l), e = t.child, t = e.sibling, e = Xl(e, {
            mode: "visible",
            children: a.children
        }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e)
    }
    function jc(t, l) {
        return l = Ou({
            mode: "visible",
            children: l
        }, t.mode), l.return = t, t.child = l
    }
    function Ou(t, l) {
        return t = cl(22, t, null, l), t.lanes = 0, t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, t
    }
    function zc(t, l, e) {
        return Na(l, t.child, null, e), t = jc(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t
    }
    function no(t, l, e) {
        t.lanes |= l;
        var a = t.alternate;
        a !== null && (a.lanes |= l),
        Zi(t.return, l, e)
    }
    function Ec(t, l, e, a, n) {
        var u = t.memoizedState;
        u === null ? t.memoizedState = {
            isBackwards: l,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: n
        } : (u.isBackwards = l, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n)
    }
    function uo(t, l, e) {
        var a = l.pendingProps,
            n = a.revealOrder,
            u = a.tail;
        if (Vt(t, l, a.children, e), a = qt.current, (a & 2) !== 0)
            a = a & 1 | 2,
            l.flags |= 128;
        else {
            if (t !== null && (t.flags & 128) !== 0)
                t:
                for (t = l.child; t !== null;) {
                    if (t.tag === 13)
                        t.memoizedState !== null && no(t, e, l);
                    else if (t.tag === 19)
                        no(t, e, l);
                    else if (t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break t;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l)
                            break t;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a &= 1
        }
        switch (D(qt, a), n) {
        case "forwards":
            for (e = l.child, n = null; e !== null;)
                t = e.alternate,
                t !== null && zu(t) === null && (n = e),
                e = e.sibling;
            e = n,
            e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null),
            Ec(l, !1, n, e, u);
            break;
        case "backwards":
            for (e = null, n = l.child, l.child = null; n !== null;) {
                if (t = n.alternate, t !== null && zu(t) === null) {
                    l.child = n;
                    break
                }
                t = n.sibling,
                n.sibling = e,
                e = n,
                n = t
            }
            Ec(l, !0, e, null, u);
            break;
        case "together":
            Ec(l, !1, null, null, void 0);
            break;
        default:
            l.memoizedState = null
        }
        return l.child
    }
    function Jl(t, l, e) {
        if (t !== null && (l.dependencies = t.dependencies), xe |= l.lanes, (e & l.childLanes) === 0)
            if (t !== null) {
                if (un(t, l, e, !1), (e & l.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && l.child !== t.child)
            throw Error(r(153));
        if (l.child !== null) {
            for (t = l.child, e = Xl(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null;)
                t = t.sibling,
                e = e.sibling = Xl(t, t.pendingProps),
                e.return = l;
            e.sibling = null
        }
        return l.child
    }
    function Mc(t, l) {
        return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && ru(t)))
    }
    function Om(t, l, e) {
        switch (l.tag) {
        case 3:
            mt(l, l.stateNode.containerInfo),
            se(l, Ct, t.memoizedState.cache),
            an();
            break;
        case 27:
        case 5:
            ee(l);
            break;
        case 4:
            mt(l, l.stateNode.containerInfo);
            break;
        case 10:
            se(l, l.type, l.memoizedProps.value);
            break;
        case 13:
            var a = l.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (he(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? ao(t, l, e) : (he(l), t = Jl(t, l, e), t !== null ? t.sibling : null);
            he(l);
            break;
        case 19:
            var n = (t.flags & 128) !== 0;
            if (a = (e & l.childLanes) !== 0, a || (un(t, l, e, !1), a = (e & l.childLanes) !== 0), n) {
                if (a)
                    return uo(t, l, e);
                l.flags |= 128
            }
            if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), D(qt, qt.current), a)
                break;
            return null;
        case 22:
        case 23:
            return l.lanes = 0, Ir(t, l, e);
        case 24:
            se(l, Ct, t.memoizedState.cache)
        }
        return Jl(t, l, e)
    }
    function io(t, l, e) {
        if (t !== null)
            if (t.memoizedProps !== l.pendingProps)
                Yt = !0;
            else {
                if (!Mc(t, e) && (l.flags & 128) === 0)
                    return Yt = !1, Om(t, l, e);
                Yt = (t.flags & 131072) !== 0
            }
        else
            Yt = !1,
            it && (l.flags & 1048576) !== 0 && qf(l, fu, l.index);
        switch (l.lanes = 0, l.tag) {
        case 16:
            t:
            {
                t = l.pendingProps;
                var a = l.elementType,
                    n = a._init;
                if (a = n(a._payload), l.type = a, typeof a == "function")
                    wi(a) ? (t = Le(a, t), l.tag = 1, l = lo(null, l, a, t, e)) : (l.tag = 0, l = Sc(null, l, a, t, e));
                else {
                    if (a != null) {
                        if (n = a.$$typeof, n === Bt) {
                            l.tag = 11,
                            l = Wr(null, l, a, t, e);
                            break t
                        } else if (n === Ht) {
                            l.tag = 14,
                            l = $r(null, l, a, t, e);
                            break t
                        }
                    }
                    throw l = El(a) || a, Error(r(306, l, ""))
                }
            }return l;
        case 0:
            return Sc(t, l, l.type, l.pendingProps, e);
        case 1:
            return a = l.type, n = Le(a, l.pendingProps), lo(t, l, a, n, e);
        case 3:
            t:
            {
                if (mt(l, l.stateNode.containerInfo), t === null)
                    throw Error(r(387));
                a = l.pendingProps;
                var u = l.memoizedState;
                n = u.element,
                Fi(t, l),
                hn(l, a, null, e);
                var i = l.memoizedState;
                if (a = i.cache, se(l, Ct, a), a !== u.cache && Li(l, [Ct], e, !0), dn(), a = i.element, u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
                        l = eo(t, l, a, e);
                        break t
                    } else if (a !== n) {
                        n = pl(Error(r(424)), l),
                        nn(n),
                        l = eo(t, l, a, e);
                        break t
                    } else {
                        switch (t = l.stateNode.containerInfo, t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Tt = Ol(t.firstChild), $t = l, it = !0, Ge = null, Ul = !0, e = Br(l, null, a, e), l.child = e; e;)
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling
                    }
                else {
                    if (an(), a === n) {
                        l = Jl(t, l, e);
                        break t
                    }
                    Vt(t, l, a, e)
                }
                l = l.child
            }return l;
        case 26:
            return _u(t, l), t === null ? (e = od(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : it || (e = l.type, t = l.pendingProps, a = Zu(k.current).createElement(e), a[kt] = l, a[It] = t, Lt(a, e, t), Gt(a), l.stateNode = a) : l.memoizedState = od(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
        case 27:
            return ee(l), t === null && it && (a = l.stateNode = sd(l.type, l.pendingProps, k.current), $t = l, Ul = !0, n = Tt, Ae(l.type) ? (ss = n, Tt = Ol(a.firstChild)) : Tt = n), Vt(t, l, l.pendingProps.children, e), _u(t, l), t === null && (l.flags |= 4194304), l.child;
        case 5:
            return t === null && it && ((n = a = Tt) && (a = n0(a, l.type, l.pendingProps, Ul), a !== null ? (l.stateNode = a, $t = l, Tt = Ol(a.firstChild), Ul = !1, n = !0) : n = !1), n || Ye(l)), ee(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ns(n, u) ? a = null : i !== null && ns(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = ac(t, l, Nm, null, null, e), Cn._currentValue = n), _u(t, l), Vt(t, l, a, e), l.child;
        case 6:
            return t === null && it && ((t = e = Tt) && (e = u0(e, l.pendingProps, Ul), e !== null ? (l.stateNode = e, $t = l, Tt = null, t = !0) : t = !1), t || Ye(l)), null;
        case 13:
            return ao(t, l, e);
        case 4:
            return mt(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = Na(l, null, a, e) : Vt(t, l, a, e), l.child;
        case 11:
            return Wr(t, l, l.type, l.pendingProps, e);
        case 7:
            return Vt(t, l, l.pendingProps, e), l.child;
        case 8:
            return Vt(t, l, l.pendingProps.children, e), l.child;
        case 12:
            return Vt(t, l, l.pendingProps.children, e), l.child;
        case 10:
            return a = l.pendingProps, se(l, l.type, a.value), Vt(t, l, a.children, e), l.child;
        case 9:
            return n = l.type._context, a = l.pendingProps.children, Qe(l), n = Kt(n), a = a(n), l.flags |= 1, Vt(t, l, a, e), l.child;
        case 14:
            return $r(t, l, l.type, l.pendingProps, e);
        case 15:
            return Fr(t, l, l.type, l.pendingProps, e);
        case 19:
            return uo(t, l, e);
        case 31:
            return a = l.pendingProps, e = l.mode, a = {
                mode: a.mode,
                children: a.children
            }, t === null ? (e = Ou(a, e), e.ref = l.ref, l.child = e, e.return = l, l = e) : (e = Xl(t.child, a), e.ref = l.ref, l.child = e, e.return = l, l = e), l;
        case 22:
            return Ir(t, l, e);
        case 24:
            return Qe(l), a = Kt(Ct), t === null ? (n = Ji(), n === null && (n = gt, u = ki(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = {
                parent: a,
                cache: n
            }, $i(l), se(l, Ct, n)) : ((t.lanes & e) !== 0 && (Fi(t, l), hn(l, null, null, e), dn()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = {
                parent: a,
                cache: a
            }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), se(l, Ct, a)) : (a = u.cache, se(l, Ct, a), a !== n.cache && Li(l, [Ct], e, !0))), Vt(t, l, l.pendingProps.children, e), l.child;
        case 29:
            throw l.pendingProps
        }
        throw Error(r(156, l.tag))
    }
    function Wl(t) {
        t.flags |= 4
    }
    function co(t, l) {
        if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216, !yd(l)) {
            if (l = Tl.current, l !== null && ((at & 4194048) === at ? Hl !== null : (at & 62914560) !== at && (at & 536870912) === 0 || l !== Hl))
                throw rn = Wi, Zf;
            t.flags |= 8192
        }
    }
    function Du(t, l) {
        l !== null && (t.flags |= 4),
        t.flags & 16384 && (l = t.tag !== 22 ? Bs() : 536870912, t.lanes |= l, za |= l)
    }
    function pn(t, l) {
        if (!it)
            switch (t.tailMode) {
            case "hidden":
                l = t.tail;
                for (var e = null; l !== null;)
                    l.alternate !== null && (e = l),
                    l = l.sibling;
                e === null ? t.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = t.tail;
                for (var a = null; e !== null;)
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null
            }
    }
    function Nt(t) {
        var l = t.alternate !== null && t.alternate.child === t.child,
            e = 0,
            a = 0;
        if (l)
            for (var n = t.child; n !== null;)
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = t,
                n = n.sibling;
        else
            for (n = t.child; n !== null;)
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = t,
                n = n.sibling;
        return t.subtreeFlags |= a, t.childLanes = e, l
    }
    function Dm(t, l, e) {
        var a = l.pendingProps;
        switch (Xi(l), l.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Nt(l), null;
        case 1:
            return Nt(l), null;
        case 3:
            return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Ll(Ct), al(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (en(l) ? Wl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Gf())), Nt(l), null;
        case 26:
            return e = l.memoizedState, t === null ? (Wl(l), e !== null ? (Nt(l), co(l, e)) : (Nt(l), l.flags &= -16777217)) : e ? e !== t.memoizedState ? (Wl(l), Nt(l), co(l, e)) : (Nt(l), l.flags &= -16777217) : (t.memoizedProps !== a && Wl(l), Nt(l), l.flags &= -16777217), null;
        case 27:
            ae(l),
            e = k.current;
            var n = l.type;
            if (t !== null && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (!a) {
                    if (l.stateNode === null)
                        throw Error(r(166));
                    return Nt(l), null
                }
                t = q.current,
                en(l) ? wf(l) : (t = sd(n, a, e), l.stateNode = t, Wl(l))
            }
            return Nt(l), null;
        case 5:
            if (ae(l), e = l.type, t !== null && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (!a) {
                    if (l.stateNode === null)
                        throw Error(r(166));
                    return Nt(l), null
                }
                if (t = q.current, en(l))
                    wf(l);
                else {
                    switch (n = Zu(k.current), t) {
                    case 1:
                        t = n.createElementNS("http://www.w3.org/2000/svg", e);
                        break;
                    case 2:
                        t = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                        break;
                    default:
                        switch (e) {
                        case "svg":
                            t = n.createElementNS("http://www.w3.org/2000/svg", e);
                            break;
                        case "math":
                            t = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                            break;
                        case "script":
                            t = n.createElement("div"),
                            t.innerHTML = "<script><\/script>",
                            t = t.removeChild(t.firstChild);
                            break;
                        case "select":
                            t = typeof a.is == "string" ? n.createElement("select", {
                                is: a.is
                            }) : n.createElement("select"),
                            a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                            break;
                        default:
                            t = typeof a.is == "string" ? n.createElement(e, {
                                is: a.is
                            }) : n.createElement(e)
                        }
                    }
                    t[kt] = l,
                    t[It] = a;
                    t:
                    for (n = l.child; n !== null;) {
                        if (n.tag === 5 || n.tag === 6)
                            t.appendChild(n.stateNode);
                        else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                            n.child.return = n,
                            n = n.child;
                            continue
                        }
                        if (n === l)
                            break t;
                        for (; n.sibling === null;) {
                            if (n.return === null || n.return === l)
                                break t;
                            n = n.return
                        }
                        n.sibling.return = n.return,
                        n = n.sibling
                    }
                    l.stateNode = t;
                    t:
                    switch (Lt(t, e, a), e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        t = !!a.autoFocus;
                        break t;
                    case "img":
                        t = !0;
                        break t;
                    default:
                        t = !1
                    }
                    t && Wl(l)
                }
            }
            return Nt(l), l.flags &= -16777217, null;
        case 6:
            if (t && l.stateNode != null)
                t.memoizedProps !== a && Wl(l);
            else {
                if (typeof a != "string" && l.stateNode === null)
                    throw Error(r(166));
                if (t = k.current, en(l)) {
                    if (t = l.stateNode, e = l.memoizedProps, a = null, n = $t, n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    t[kt] = l,
                    t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || ld(t.nodeValue, e)),
                    t || Ye(l)
                } else
                    t = Zu(t).createTextNode(a),
                    t[kt] = l,
                    l.stateNode = t
            }
            return Nt(l), null;
        case 13:
            if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (n = en(l), a !== null && a.dehydrated !== null) {
                    if (t === null) {
                        if (!n)
                            throw Error(r(318));
                        if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n)
                            throw Error(r(317));
                        n[kt] = l
                    } else
                        an(),
                        (l.flags & 128) === 0 && (l.memoizedState = null),
                        l.flags |= 4;
                    Nt(l),
                    n = !1
                } else
                    n = Gf(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return l.flags & 256 ? (Kl(l), l) : (Kl(l), null)
            }
            if (Kl(l), (l.flags & 128) !== 0)
                return l.lanes = e, l;
            if (e = a !== null, t = t !== null && t.memoizedState !== null, e) {
                a = l.child,
                n = null,
                a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                var u = null;
                a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)
            }
            return e !== t && e && (l.child.flags |= 8192), Du(l, l.updateQueue), Nt(l), null;
        case 4:
            return al(), t === null && Pc(l.stateNode.containerInfo), Nt(l), null;
        case 10:
            return Ll(l.type), Nt(l), null;
        case 19:
            if (C(qt), n = l.memoizedState, n === null)
                return Nt(l), null;
            if (a = (l.flags & 128) !== 0, u = n.rendering, u === null)
                if (a)
                    pn(n, !1);
                else {
                    if (jt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = l.child; t !== null;) {
                            if (u = zu(t), u !== null) {
                                for (l.flags |= 128, pn(n, !1), t = u.updateQueue, l.updateQueue = t, Du(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null;)
                                    Cf(e, t),
                                    e = e.sibling;
                                return D(qt, qt.current & 1 | 2), l.child
                            }
                            t = t.sibling
                        }
                    n.tail !== null && Rl() > Hu && (l.flags |= 128, a = !0, pn(n, !1), l.lanes = 4194304)
                }
            else {
                if (!a)
                    if (t = zu(u), t !== null) {
                        if (l.flags |= 128, a = !0, t = t.updateQueue, l.updateQueue = t, Du(l, t), pn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !it)
                            return Nt(l), null
                    } else
                        2 * Rl() - n.renderingStartTime > Hu && e !== 536870912 && (l.flags |= 128, a = !0, pn(n, !1), l.lanes = 4194304);
                n.isBackwards ? (u.sibling = l.child, l.child = u) : (t = n.last, t !== null ? t.sibling = u : l.child = u, n.last = u)
            }
            return n.tail !== null ? (l = n.tail, n.rendering = l, n.tail = l.sibling, n.renderingStartTime = Rl(), l.sibling = null, t = qt.current, D(qt, a ? t & 1 | 2 : t & 1), l) : (Nt(l), null);
        case 22:
        case 23:
            return Kl(l), lc(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (Nt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Nt(l), e = l.updateQueue, e !== null && Du(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && C(Ve), null;
        case 24:
            return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Ll(Ct), Nt(l), null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(r(156, l.tag))
    }
    function Rm(t, l) {
        switch (Xi(l), l.tag) {
        case 1:
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 3:
            return Ll(Ct), al(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
        case 26:
        case 27:
        case 5:
            return ae(l), null;
        case 13:
            if (Kl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
                if (l.alternate === null)
                    throw Error(r(340));
                an()
            }
            return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 19:
            return C(qt), null;
        case 4:
            return al(), null;
        case 10:
            return Ll(l.type), null;
        case 22:
        case 23:
            return Kl(l), lc(), t !== null && C(Ve), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 24:
            return Ll(Ct), null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function so(t, l) {
        switch (Xi(l), l.tag) {
        case 3:
            Ll(Ct),
            al();
            break;
        case 26:
        case 27:
        case 5:
            ae(l);
            break;
        case 4:
            al();
            break;
        case 13:
            Kl(l);
            break;
        case 19:
            C(qt);
            break;
        case 10:
            Ll(l.type);
            break;
        case 22:
        case 23:
            Kl(l),
            lc(),
            t !== null && C(Ve);
            break;
        case 24:
            Ll(Ct)
        }
    }
    function Sn(t, l) {
        try {
            var e = l.updateQueue,
                a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                e = n;
                do {
                    if ((e.tag & t) === t) {
                        a = void 0;
                        var u = e.create,
                            i = e.inst;
                        a = u(),
                        i.destroy = a
                    }
                    e = e.next
                } while (e !== n)
            }
        } catch (c) {
            vt(l, l.return, c)
        }
    }
    function ve(t, l, e) {
        try {
            var a = l.updateQueue,
                n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & t) === t) {
                        var i = a.inst,
                            c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0,
                            n = l;
                            var o = e,
                                y = c;
                            try {
                                y()
                            } catch (A) {
                                vt(n, o, A)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (A) {
            vt(l, l.return, A)
        }
    }
    function fo(t) {
        var l = t.updateQueue;
        if (l !== null) {
            var e = t.stateNode;
            try {
                $f(l, e)
            } catch (a) {
                vt(t, t.return, a)
            }
        }
    }
    function ro(t, l, e) {
        e.props = Le(t.type, t.memoizedProps),
        e.state = t.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            vt(t, l, a)
        }
    }
    function Nn(t, l) {
        try {
            var e = t.ref;
            if (e !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var a = t.stateNode;
                    break;
                case 30:
                    a = t.stateNode;
                    break;
                default:
                    a = t.stateNode
                }
                typeof e == "function" ? t.refCleanup = e(a) : e.current = a
            }
        } catch (n) {
            vt(t, l, n)
        }
    }
    function Cl(t, l) {
        var e = t.ref,
            a = t.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    vt(t, l, n)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (n) {
                    vt(t, l, n)
                }
            else
                e.current = null
    }
    function oo(t) {
        var l = t.type,
            e = t.memoizedProps,
            a = t.stateNode;
        try {
            t:
            switch (l) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break t;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (n) {
            vt(t, t.return, n)
        }
    }
    function _c(t, l, e) {
        try {
            var a = t.stateNode;
            Pm(a, t.type, e, l),
            a[It] = l
        } catch (n) {
            vt(t, t.return, n)
        }
    }
    function ho(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ae(t.type) || t.tag === 4
    }
    function Oc(t) {
        t:
        for (;;) {
            for (; t.sibling === null;) {
                if (t.return === null || ho(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
                if (t.tag === 27 && Ae(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Dc(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Vu));
        else if (a !== 4 && (a === 27 && Ae(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null))
            for (Dc(t, l, e), t = t.sibling; t !== null;)
                Dc(t, l, e),
                t = t.sibling
    }
    function Ru(t, l, e) {
        var a = t.tag;
        if (a === 5 || a === 6)
            t = t.stateNode,
            l ? e.insertBefore(t, l) : e.appendChild(t);
        else if (a !== 4 && (a === 27 && Ae(t.type) && (e = t.stateNode), t = t.child, t !== null))
            for (Ru(t, l, e), t = t.sibling; t !== null;)
                Ru(t, l, e),
                t = t.sibling
    }
    function mo(t) {
        var l = t.stateNode,
            e = t.memoizedProps;
        try {
            for (var a = t.type, n = l.attributes; n.length;)
                l.removeAttributeNode(n[0]);
            Lt(l, a, e),
            l[kt] = t,
            l[It] = e
        } catch (u) {
            vt(t, t.return, u)
        }
    }
    var $l = !1,
        Ot = !1,
        Rc = !1,
        vo = typeof WeakSet == "function" ? WeakSet : Set,
        Xt = null;
    function Um(t, l) {
        if (t = t.containerInfo, es = $u, t = jf(t), Oi(t)) {
            if ("selectionStart" in t)
                var e = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t:
                {
                    e = (e = t.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var n = a.anchorOffset,
                            u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            u.nodeType
                        } catch {
                            e = null;
                            break t
                        }
                        var i = 0,
                            c = -1,
                            o = -1,
                            y = 0,
                            A = 0,
                            z = t,
                            g = null;
                        l:
                        for (;;) {
                            for (var b; z !== e || n !== 0 && z.nodeType !== 3 || (c = i + n), z !== u || a !== 0 && z.nodeType !== 3 || (o = i + a), z.nodeType === 3 && (i += z.nodeValue.length), (b = z.firstChild) !== null;)
                                g = z,
                                z = b;
                            for (;;) {
                                if (z === t)
                                    break l;
                                if (g === e && ++y === n && (c = i), g === u && ++A === a && (o = i), (b = z.nextSibling) !== null)
                                    break;
                                z = g,
                                g = z.parentNode
                            }
                            z = b
                        }
                        e = c === -1 || o === -1 ? null : {
                            start: c,
                            end: o
                        }
                    } else
                        e = null
                }e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (as = {
            focusedElem: t,
            selectionRange: e
        }, $u = !1, Xt = l; Xt !== null;)
            if (l = Xt, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
                t.return = l,
                Xt = t;
            else
                for (; Xt !== null;) {
                    switch (l = Xt, u = l.alternate, t = l.flags, l.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0,
                            e = l,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = e.stateNode;
                            try {
                                var L = Le(e.type, n, e.elementType === e.type);
                                t = a.getSnapshotBeforeUpdate(L, u),
                                a.__reactInternalSnapshotBeforeUpdate = t
                            } catch (V) {
                                vt(e, e.return, V)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9)
                                is(t);
                            else if (e === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    is(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(r(163))
                    }
                    if (t = l.sibling, t !== null) {
                        t.return = l.return,
                        Xt = t;
                        break
                    }
                    Xt = l.return
                }
    }
    function yo(t, l, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            ye(t, e),
            a & 4 && Sn(5, e);
            break;
        case 1:
            if (ye(t, e), a & 4)
                if (t = e.stateNode, l === null)
                    try {
                        t.componentDidMount()
                    } catch (i) {
                        vt(e, e.return, i)
                    }
                else {
                    var n = Le(e.type, l.memoizedProps);
                    l = l.memoizedState;
                    try {
                        t.componentDidUpdate(n, l, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        vt(e, e.return, i)
                    }
                }
            a & 64 && fo(e),
            a & 512 && Nn(e, e.return);
            break;
        case 3:
            if (ye(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
                if (l = null, e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        l = e.child.stateNode;
                        break;
                    case 1:
                        l = e.child.stateNode
                    }
                try {
                    $f(t, l)
                } catch (i) {
                    vt(e, e.return, i)
                }
            }
            break;
        case 27:
            l === null && a & 4 && mo(e);
        case 26:
        case 5:
            ye(t, e),
            l === null && a & 4 && oo(e),
            a & 512 && Nn(e, e.return);
            break;
        case 12:
            ye(t, e);
            break;
        case 13:
            ye(t, e),
            a & 4 && xo(t, e),
            a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Qm.bind(null, e), i0(t, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || $l, !a) {
                l = l !== null && l.memoizedState !== null || Ot,
                n = $l;
                var u = Ot;
                $l = a,
                (Ot = l) && !u ? ge(t, e, (e.subtreeFlags & 8772) !== 0) : ye(t, e),
                $l = n,
                Ot = u
            }
            break;
        case 30:
            break;
        default:
            ye(t, e)
        }
    }
    function go(t) {
        var l = t.alternate;
        l !== null && (t.alternate = null, go(l)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (l = t.stateNode, l !== null && oi(l)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var xt = null,
        ll = !1;
    function Fl(t, l, e) {
        for (e = e.child; e !== null;)
            bo(t, l, e),
            e = e.sibling
    }
    function bo(t, l, e) {
        if (nl && typeof nl.onCommitFiberUnmount == "function")
            try {
                nl.onCommitFiberUnmount(Qa, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Ot || Cl(e, l),
            Fl(t, l, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
            break;
        case 27:
            Ot || Cl(e, l);
            var a = xt,
                n = ll;
            Ae(e.type) && (xt = e.stateNode, ll = !1),
            Fl(t, l, e),
            Dn(e.stateNode),
            xt = a,
            ll = n;
            break;
        case 5:
            Ot || Cl(e, l);
        case 6:
            if (a = xt, n = ll, xt = null, Fl(t, l, e), xt = a, ll = n, xt !== null)
                if (ll)
                    try {
                        (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(e.stateNode)
                    } catch (u) {
                        vt(e, l, u)
                    }
                else
                    try {
                        xt.removeChild(e.stateNode)
                    } catch (u) {
                        vt(e, l, u)
                    }
            break;
        case 18:
            xt !== null && (ll ? (t = xt, id(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Gn(t)) : id(xt, e.stateNode));
            break;
        case 4:
            a = xt,
            n = ll,
            xt = e.stateNode.containerInfo,
            ll = !0,
            Fl(t, l, e),
            xt = a,
            ll = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Ot || ve(2, e, l),
            Ot || ve(4, e, l),
            Fl(t, l, e);
            break;
        case 1:
            Ot || (Cl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && ro(e, l, a)),
            Fl(t, l, e);
            break;
        case 21:
            Fl(t, l, e);
            break;
        case 22:
            Ot = (a = Ot) || e.memoizedState !== null,
            Fl(t, l, e),
            Ot = a;
            break;
        default:
            Fl(t, l, e)
        }
    }
    function xo(t, l) {
        if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
            try {
                Gn(t)
            } catch (e) {
                vt(l, l.return, e)
            }
    }
    function Hm(t) {
        switch (t.tag) {
        case 13:
        case 19:
            var l = t.stateNode;
            return l === null && (l = t.stateNode = new vo), l;
        case 22:
            return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new vo), l;
        default:
            throw Error(r(435, t.tag))
        }
    }
    function Uc(t, l) {
        var e = Hm(t);
        l.forEach(function(a) {
            var n = Vm.bind(null, t, a);
            e.has(a) || (e.add(a), a.then(n, n))
        })
    }
    function sl(t, l) {
        var e = l.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var n = e[a],
                    u = t,
                    i = l,
                    c = i;
                t:
                for (; c !== null;) {
                    switch (c.tag) {
                    case 27:
                        if (Ae(c.type)) {
                            xt = c.stateNode,
                            ll = !1;
                            break t
                        }
                        break;
                    case 5:
                        xt = c.stateNode,
                        ll = !1;
                        break t;
                    case 3:
                    case 4:
                        xt = c.stateNode.containerInfo,
                        ll = !0;
                        break t
                    }
                    c = c.return
                }
                if (xt === null)
                    throw Error(r(160));
                bo(u, i, n),
                xt = null,
                ll = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (l.subtreeFlags & 13878)
            for (l = l.child; l !== null;)
                po(l, t),
                l = l.sibling
    }
    var _l = null;
    function po(t, l) {
        var e = t.alternate,
            a = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            sl(l, t),
            fl(t),
            a & 4 && (ve(3, t, t.return), Sn(3, t), ve(5, t, t.return));
            break;
        case 1:
            sl(l, t),
            fl(t),
            a & 512 && (Ot || e === null || Cl(e, e.return)),
            a & 64 && $l && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var n = _l;
            if (sl(l, t), fl(t), a & 512 && (Ot || e === null || Cl(e, e.return)), a & 4) {
                var u = e !== null ? e.memoizedState : null;
                if (a = t.memoizedState, e === null)
                    if (a === null)
                        if (t.stateNode === null) {
                            t:
                            {
                                a = t.type,
                                e = t.memoizedProps,
                                n = n.ownerDocument || n;
                                l:
                                switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[La] || u[kt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Lt(u, a, e),
                                    u[kt] = t,
                                    Gt(u),
                                    a = u;
                                    break t;
                                case "link":
                                    var i = md("link", "href", n).get(a + (e.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++)
                                            if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                i.splice(c, 1);
                                                break l
                                            }
                                    }
                                    u = n.createElement(a),
                                    Lt(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (i = md("meta", "content", n).get(a + (e.content || ""))) {
                                        for (c = 0; c < i.length; c++)
                                            if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                i.splice(c, 1);
                                                break l
                                            }
                                    }
                                    u = n.createElement(a),
                                    Lt(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(r(468, a))
                                }
                                u[kt] = t,
                                Gt(u),
                                a = u
                            }t.stateNode = a
                        } else
                            vd(n, t.type, t.stateNode);
                    else
                        t.stateNode = hd(n, a, t.memoizedProps);
                else
                    u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? vd(n, t.type, t.stateNode) : hd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && _c(t, t.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            sl(l, t),
            fl(t),
            a & 512 && (Ot || e === null || Cl(e, e.return)),
            e !== null && a & 4 && _c(t, t.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (sl(l, t), fl(t), a & 512 && (Ot || e === null || Cl(e, e.return)), t.flags & 32) {
                n = t.stateNode;
                try {
                    na(n, "")
                } catch (b) {
                    vt(t, t.return, b)
                }
            }
            a & 4 && t.stateNode != null && (n = t.memoizedProps, _c(t, n, e !== null ? e.memoizedProps : n)),
            a & 1024 && (Rc = !0);
            break;
        case 6:
            if (sl(l, t), fl(t), a & 4) {
                if (t.stateNode === null)
                    throw Error(r(162));
                a = t.memoizedProps,
                e = t.stateNode;
                try {
                    e.nodeValue = a
                } catch (b) {
                    vt(t, t.return, b)
                }
            }
            break;
        case 3:
            if (Ku = null, n = _l, _l = Lu(l.containerInfo), sl(l, t), _l = n, fl(t), a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Gn(l.containerInfo)
                } catch (b) {
                    vt(t, t.return, b)
                }
            Rc && (Rc = !1, So(t));
            break;
        case 4:
            a = _l,
            _l = Lu(t.stateNode.containerInfo),
            sl(l, t),
            fl(t),
            _l = a;
            break;
        case 12:
            sl(l, t),
            fl(t);
            break;
        case 13:
            sl(l, t),
            fl(t),
            t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Gc = Rl()),
            a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uc(t, a)));
            break;
        case 22:
            n = t.memoizedState !== null;
            var o = e !== null && e.memoizedState !== null,
                y = $l,
                A = Ot;
            if ($l = y || n, Ot = A || o, sl(l, t), Ot = A, $l = y, fl(t), a & 8192)
                t:
                for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || o || $l || Ot || ke(t)), e = null, l = t;;) {
                    if (l.tag === 5 || l.tag === 26) {
                        if (e === null) {
                            o = e = l;
                            try {
                                if (u = o.stateNode, n)
                                    i = u.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = o.stateNode;
                                    var z = o.memoizedProps.style,
                                        g = z != null && z.hasOwnProperty("display") ? z.display : null;
                                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim()
                                }
                            } catch (b) {
                                vt(o, o.return, b)
                            }
                        }
                    } else if (l.tag === 6) {
                        if (e === null) {
                            o = l;
                            try {
                                o.stateNode.nodeValue = n ? "" : o.memoizedProps
                            } catch (b) {
                                vt(o, o.return, b)
                            }
                        }
                    } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
                        l.child.return = l,
                        l = l.child;
                        continue
                    }
                    if (l === t)
                        break t;
                    for (; l.sibling === null;) {
                        if (l.return === null || l.return === t)
                            break t;
                        e === l && (e = null),
                        l = l.return
                    }
                    e === l && (e = null),
                    l.sibling.return = l.return,
                    l = l.sibling
                }
            a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Uc(t, e))));
            break;
        case 19:
            sl(l, t),
            fl(t),
            a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Uc(t, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            sl(l, t),
            fl(t)
        }
    }
    function fl(t) {
        var l = t.flags;
        if (l & 2) {
            try {
                for (var e, a = t.return; a !== null;) {
                    if (ho(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(r(160));
                switch (e.tag) {
                case 27:
                    var n = e.stateNode,
                        u = Oc(t);
                    Ru(t, u, n);
                    break;
                case 5:
                    var i = e.stateNode;
                    e.flags & 32 && (na(i, ""), e.flags &= -33);
                    var c = Oc(t);
                    Ru(t, c, i);
                    break;
                case 3:
                case 4:
                    var o = e.stateNode.containerInfo,
                        y = Oc(t);
                    Dc(t, y, o);
                    break;
                default:
                    throw Error(r(161))
                }
            } catch (A) {
                vt(t, t.return, A)
            }
            t.flags &= -3
        }
        l & 4096 && (t.flags &= -4097)
    }
    function So(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null;) {
                var l = t;
                So(l),
                l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
                t = t.sibling
            }
    }
    function ye(t, l) {
        if (l.subtreeFlags & 8772)
            for (l = l.child; l !== null;)
                yo(t, l.alternate, l),
                l = l.sibling
    }
    function ke(t) {
        for (t = t.child; t !== null;) {
            var l = t;
            switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ve(4, l, l.return),
                ke(l);
                break;
            case 1:
                Cl(l, l.return);
                var e = l.stateNode;
                typeof e.componentWillUnmount == "function" && ro(l, l.return, e),
                ke(l);
                break;
            case 27:
                Dn(l.stateNode);
            case 26:
            case 5:
                Cl(l, l.return),
                ke(l);
                break;
            case 22:
                l.memoizedState === null && ke(l);
                break;
            case 30:
                ke(l);
                break;
            default:
                ke(l)
            }
            t = t.sibling
        }
    }
    function ge(t, l, e) {
        for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null;) {
            var a = l.alternate,
                n = t,
                u = l,
                i = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                ge(n, u, e),
                Sn(4, u);
                break;
            case 1:
                if (ge(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (y) {
                        vt(a, a.return, y)
                    }
                if (a = u, n = a.updateQueue, n !== null) {
                    var c = a.stateNode;
                    try {
                        var o = n.shared.hiddenCallbacks;
                        if (o !== null)
                            for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++)
                                Wf(o[n], c)
                    } catch (y) {
                        vt(a, a.return, y)
                    }
                }
                e && i & 64 && fo(u),
                Nn(u, u.return);
                break;
            case 27:
                mo(u);
            case 26:
            case 5:
                ge(n, u, e),
                e && a === null && i & 4 && oo(u),
                Nn(u, u.return);
                break;
            case 12:
                ge(n, u, e);
                break;
            case 13:
                ge(n, u, e),
                e && i & 4 && xo(n, u);
                break;
            case 22:
                u.memoizedState === null && ge(n, u, e),
                Nn(u, u.return);
                break;
            case 30:
                break;
            default:
                ge(n, u, e)
            }
            l = l.sibling
        }
    }
    function Hc(t, l) {
        var e = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        t = null,
        l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool),
        t !== e && (t != null && t.refCount++, e != null && cn(e))
    }
    function Cc(t, l) {
        t = null,
        l.alternate !== null && (t = l.alternate.memoizedState.cache),
        l = l.memoizedState.cache,
        l !== t && (l.refCount++, t != null && cn(t))
    }
    function ql(t, l, e, a) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;)
                No(t, l, e, a),
                l = l.sibling
    }
    function No(t, l, e, a) {
        var n = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ql(t, l, e, a),
            n & 2048 && Sn(9, l);
            break;
        case 1:
            ql(t, l, e, a);
            break;
        case 3:
            ql(t, l, e, a),
            n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && cn(t)));
            break;
        case 12:
            if (n & 2048) {
                ql(t, l, e, a),
                t = l.stateNode;
                try {
                    var u = l.memoizedProps,
                        i = u.id,
                        c = u.onPostCommit;
                    typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (o) {
                    vt(l, l.return, o)
                }
            } else
                ql(t, l, e, a);
            break;
        case 13:
            ql(t, l, e, a);
            break;
        case 23:
            break;
        case 22:
            u = l.stateNode,
            i = l.alternate,
            l.memoizedState !== null ? u._visibility & 2 ? ql(t, l, e, a) : An(t, l) : u._visibility & 2 ? ql(t, l, e, a) : (u._visibility |= 2, Aa(t, l, e, a, (l.subtreeFlags & 10256) !== 0)),
            n & 2048 && Hc(i, l);
            break;
        case 24:
            ql(t, l, e, a),
            n & 2048 && Cc(l.alternate, l);
            break;
        default:
            ql(t, l, e, a)
        }
    }
    function Aa(t, l, e, a, n) {
        for (n = n && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null;) {
            var u = t,
                i = l,
                c = e,
                o = a,
                y = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                Aa(u, i, c, o, n),
                Sn(8, i);
                break;
            case 23:
                break;
            case 22:
                var A = i.stateNode;
                i.memoizedState !== null ? A._visibility & 2 ? Aa(u, i, c, o, n) : An(u, i) : (A._visibility |= 2, Aa(u, i, c, o, n)),
                n && y & 2048 && Hc(i.alternate, i);
                break;
            case 24:
                Aa(u, i, c, o, n),
                n && y & 2048 && Cc(i.alternate, i);
                break;
            default:
                Aa(u, i, c, o, n)
            }
            l = l.sibling
        }
    }
    function An(t, l) {
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null;) {
                var e = t,
                    a = l,
                    n = a.flags;
                switch (a.tag) {
                case 22:
                    An(e, a),
                    n & 2048 && Hc(a.alternate, a);
                    break;
                case 24:
                    An(e, a),
                    n & 2048 && Cc(a.alternate, a);
                    break;
                default:
                    An(e, a)
                }
                l = l.sibling
            }
    }
    var Tn = 8192;
    function Ta(t) {
        if (t.subtreeFlags & Tn)
            for (t = t.child; t !== null;)
                Ao(t),
                t = t.sibling
    }
    function Ao(t) {
        switch (t.tag) {
        case 26:
            Ta(t),
            t.flags & Tn && t.memoizedState !== null && x0(_l, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Ta(t);
            break;
        case 3:
        case 4:
            var l = _l;
            _l = Lu(t.stateNode.containerInfo),
            Ta(t),
            _l = l;
            break;
        case 22:
            t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Tn, Tn = 16777216, Ta(t), Tn = l) : Ta(t));
            break;
        default:
            Ta(t)
        }
    }
    function To(t) {
        var l = t.alternate;
        if (l !== null && (t = l.child, t !== null)) {
            l.child = null;
            do l = t.sibling,
            t.sibling = null,
            t = l;
            while (t !== null)
        }
    }
    function jn(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Xt = a,
                    zo(a, t)
                }
            To(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;)
                jo(t),
                t = t.sibling
    }
    function jo(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            jn(t),
            t.flags & 2048 && ve(9, t, t.return);
            break;
        case 3:
            jn(t);
            break;
        case 12:
            jn(t);
            break;
        case 22:
            var l = t.stateNode;
            t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, Uu(t)) : jn(t);
            break;
        default:
            jn(t)
        }
    }
    function Uu(t) {
        var l = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (l !== null)
                for (var e = 0; e < l.length; e++) {
                    var a = l[e];
                    Xt = a,
                    zo(a, t)
                }
            To(t)
        }
        for (t = t.child; t !== null;) {
            switch (l = t, l.tag) {
            case 0:
            case 11:
            case 15:
                ve(8, l, l.return),
                Uu(l);
                break;
            case 22:
                e = l.stateNode,
                e._visibility & 2 && (e._visibility &= -3, Uu(l));
                break;
            default:
                Uu(l)
            }
            t = t.sibling
        }
    }
    function zo(t, l) {
        for (; Xt !== null;) {
            var e = Xt;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ve(8, e, l);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                cn(e.memoizedState.cache)
            }
            if (a = e.child, a !== null)
                a.return = e,
                Xt = a;
            else
                t:
                for (e = t; Xt !== null;) {
                    a = Xt;
                    var n = a.sibling,
                        u = a.return;
                    if (go(a), a === e) {
                        Xt = null;
                        break t
                    }
                    if (n !== null) {
                        n.return = u,
                        Xt = n;
                        break t
                    }
                    Xt = u
                }
        }
    }
    var Cm = {
            getCacheForType: function(t) {
                var l = Kt(Ct),
                    e = l.data.get(t);
                return e === void 0 && (e = t(), l.data.set(t, e)), e
            }
        },
        qm = typeof WeakMap == "function" ? WeakMap : Map,
        ft = 0,
        gt = null,
        lt = null,
        at = 0,
        rt = 0,
        rl = null,
        be = !1,
        ja = !1,
        qc = !1,
        Il = 0,
        jt = 0,
        xe = 0,
        Ke = 0,
        wc = 0,
        jl = 0,
        za = 0,
        zn = null,
        el = null,
        Bc = !1,
        Gc = 0,
        Hu = 1 / 0,
        Cu = null,
        pe = null,
        Zt = 0,
        Se = null,
        Ea = null,
        Ma = 0,
        Yc = 0,
        Xc = null,
        Eo = null,
        En = 0,
        Qc = null;
    function ol() {
        if ((ft & 2) !== 0 && at !== 0)
            return at & -at;
        if (N.T !== null) {
            var t = va;
            return t !== 0 ? t : Wc()
        }
        return Xs()
    }
    function Mo() {
        jl === 0 && (jl = (at & 536870912) === 0 || it ? ws() : 536870912);
        var t = Tl.current;
        return t !== null && (t.flags |= 32), jl
    }
    function dl(t, l, e) {
        (t === gt && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null) && (_a(t, 0), Ne(t, at, jl, !1)),
        Za(t, e),
        ((ft & 2) === 0 || t !== gt) && (t === gt && ((ft & 2) === 0 && (Ke |= e), jt === 4 && Ne(t, at, jl, !1)), wl(t))
    }
    function _o(t, l, e) {
        if ((ft & 6) !== 0)
            throw Error(r(327));
        var a = !e && (l & 124) === 0 && (l & t.expiredLanes) === 0 || Va(t, l),
            n = a ? Gm(t, l) : Lc(t, l, !0),
            u = a;
        do {
            if (n === 0) {
                ja && !a && Ne(t, l, 0, !1);
                break
            } else {
                if (e = t.current.alternate, u && !wm(e)) {
                    n = Lc(t, l, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = l, t.errorRecoveryDisabledLanes & u)
                        var i = 0;
                    else
                        i = t.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        l = i;
                        t:
                        {
                            var c = t;
                            n = zn;
                            var o = c.current.memoizedState.isDehydrated;
                            if (o && (_a(c, i).flags |= 256), i = Lc(c, i, !1), i !== 2) {
                                if (qc && !o) {
                                    c.errorRecoveryDisabledLanes |= u,
                                    Ke |= u,
                                    n = 4;
                                    break t
                                }
                                u = el,
                                el = n,
                                u !== null && (el === null ? el = u : el.push.apply(el, u))
                            }
                            n = i
                        }if (u = !1, n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    _a(t, 0),
                    Ne(t, l, 0, !0);
                    break
                }
                t:
                {
                    switch (a = t, u = n, u) {
                    case 0:
                    case 1:
                        throw Error(r(345));
                    case 4:
                        if ((l & 4194048) !== l)
                            break;
                    case 6:
                        Ne(a, l, jl, !be);
                        break t;
                    case 2:
                        el = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(r(329))
                    }
                    if ((l & 62914560) === l && (n = Gc + 300 - Rl(), 10 < n)) {
                        if (Ne(a, l, jl, !be), kn(a, 0, !0) !== 0)
                            break t;
                        a.timeoutHandle = nd(Oo.bind(null, a, e, el, Cu, Bc, l, jl, Ke, za, be, u, 2, -0, 0), n);
                        break t
                    }
                    Oo(a, e, el, Cu, Bc, l, jl, Ke, za, be, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        wl(t)
    }
    function Oo(t, l, e, a, n, u, i, c, o, y, A, z, g, b) {
        if (t.timeoutHandle = -1, z = l.subtreeFlags, (z & 8192 || (z & 16785408) === 16785408) && (Hn = {
            stylesheets: null,
            count: 0,
            unsuspend: b0
        }, Ao(l), z = p0(), z !== null)) {
            t.cancelPendingCommit = z(wo.bind(null, t, l, u, e, a, n, i, c, o, A, 1, g, b)),
            Ne(t, u, i, !y);
            return
        }
        wo(t, l, u, e, a, n, i, c, o)
    }
    function wm(t) {
        for (var l = t;;) {
            var e = l.tag;
            if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var n = e[a],
                        u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!il(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = l.child, l.subtreeFlags & 16384 && e !== null)
                e.return = l,
                l = e;
            else {
                if (l === t)
                    break;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t)
                        return !0;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        }
        return !0
    }
    function Ne(t, l, e, a) {
        l &= ~wc,
        l &= ~Ke,
        t.suspendedLanes |= l,
        t.pingedLanes &= ~l,
        a && (t.warmLanes |= l),
        a = t.expirationTimes;
        for (var n = l; 0 < n;) {
            var u = 31 - ul(n),
                i = 1 << u;
            a[u] = -1,
            n &= ~i
        }
        e !== 0 && Gs(t, e, l)
    }
    function qu() {
        return (ft & 6) === 0 ? (Mn(0), !1) : !0
    }
    function Vc() {
        if (lt !== null) {
            if (rt === 0)
                var t = lt.return;
            else
                t = lt,
                Zl = Xe = null,
                ic(t),
                Sa = null,
                bn = 0,
                t = lt;
            for (; t !== null;)
                so(t.alternate, t),
                t = t.return;
            lt = null
        }
    }
    function _a(t, l) {
        var e = t.timeoutHandle;
        e !== -1 && (t.timeoutHandle = -1, l0(e)),
        e = t.cancelPendingCommit,
        e !== null && (t.cancelPendingCommit = null, e()),
        Vc(),
        gt = t,
        lt = e = Xl(t.current, null),
        at = l,
        rt = 0,
        rl = null,
        be = !1,
        ja = Va(t, l),
        qc = !1,
        za = jl = wc = Ke = xe = jt = 0,
        el = zn = null,
        Bc = !1,
        (l & 8) !== 0 && (l |= l & 32);
        var a = t.entangledLanes;
        if (a !== 0)
            for (t = t.entanglements, a &= l; 0 < a;) {
                var n = 31 - ul(a),
                    u = 1 << n;
                l |= t[n],
                a &= ~u
            }
        return Il = l, nu(), e
    }
    function Do(t, l) {
        F = null,
        N.H = Au,
        l === fn || l === hu ? (l = Kf(), rt = 3) : l === Zf ? (l = Kf(), rt = 4) : rt = l === Jr ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1,
        rl = l,
        lt === null && (jt = 1, Mu(t, pl(l, t.current)))
    }
    function Ro() {
        var t = N.H;
        return N.H = Au, t === null ? Au : t
    }
    function Uo() {
        var t = N.A;
        return N.A = Cm, t
    }
    function Zc() {
        jt = 4,
        be || (at & 4194048) !== at && Tl.current !== null || (ja = !0),
        (xe & 134217727) === 0 && (Ke & 134217727) === 0 || gt === null || Ne(gt, at, jl, !1)
    }
    function Lc(t, l, e) {
        var a = ft;
        ft |= 2;
        var n = Ro(),
            u = Uo();
        (gt !== t || at !== l) && (Cu = null, _a(t, l)),
        l = !1;
        var i = jt;
        t:
        do try {
            if (rt !== 0 && lt !== null) {
                var c = lt,
                    o = rl;
                switch (rt) {
                case 8:
                    Vc(),
                    i = 6;
                    break t;
                case 3:
                case 2:
                case 9:
                case 6:
                    Tl.current === null && (l = !0);
                    var y = rt;
                    if (rt = 0, rl = null, Oa(t, c, o, y), e && ja) {
                        i = 0;
                        break t
                    }
                    break;
                default:
                    y = rt,
                    rt = 0,
                    rl = null,
                    Oa(t, c, o, y)
                }
            }
            Bm(),
            i = jt;
            break
        } catch (A) {
            Do(t, A)
        }
        while (!0);
        return l && t.shellSuspendCounter++, Zl = Xe = null, ft = a, N.H = n, N.A = u, lt === null && (gt = null, at = 0, nu()), i
    }
    function Bm() {
        for (; lt !== null;)
            Ho(lt)
    }
    function Gm(t, l) {
        var e = ft;
        ft |= 2;
        var a = Ro(),
            n = Uo();
        gt !== t || at !== l ? (Cu = null, Hu = Rl() + 500, _a(t, l)) : ja = Va(t, l);
        t:
        do try {
            if (rt !== 0 && lt !== null) {
                l = lt;
                var u = rl;
                l:
                switch (rt) {
                case 1:
                    rt = 0,
                    rl = null,
                    Oa(t, l, u, 1);
                    break;
                case 2:
                case 9:
                    if (Lf(u)) {
                        rt = 0,
                        rl = null,
                        Co(l);
                        break
                    }
                    l = function() {
                        rt !== 2 && rt !== 9 || gt !== t || (rt = 7),
                        wl(t)
                    },
                    u.then(l, l);
                    break t;
                case 3:
                    rt = 7;
                    break t;
                case 4:
                    rt = 5;
                    break t;
                case 7:
                    Lf(u) ? (rt = 0, rl = null, Co(l)) : (rt = 0, rl = null, Oa(t, l, u, 7));
                    break;
                case 5:
                    var i = null;
                    switch (lt.tag) {
                    case 26:
                        i = lt.memoizedState;
                    case 5:
                    case 27:
                        var c = lt;
                        if (!i || yd(i)) {
                            rt = 0,
                            rl = null;
                            var o = c.sibling;
                            if (o !== null)
                                lt = o;
                            else {
                                var y = c.return;
                                y !== null ? (lt = y, wu(y)) : lt = null
                            }
                            break l
                        }
                    }
                    rt = 0,
                    rl = null,
                    Oa(t, l, u, 5);
                    break;
                case 6:
                    rt = 0,
                    rl = null,
                    Oa(t, l, u, 6);
                    break;
                case 8:
                    Vc(),
                    jt = 6;
                    break t;
                default:
                    throw Error(r(462))
                }
            }
            Ym();
            break
        } catch (A) {
            Do(t, A)
        }
        while (!0);
        return Zl = Xe = null, N.H = a, N.A = n, ft = e, lt !== null ? 0 : (gt = null, at = 0, nu(), jt)
    }
    function Ym() {
        for (; lt !== null && !sh();)
            Ho(lt)
    }
    function Ho(t) {
        var l = io(t.alternate, t, Il);
        t.memoizedProps = t.pendingProps,
        l === null ? wu(t) : lt = l
    }
    function Co(t) {
        var l = t,
            e = l.alternate;
        switch (l.tag) {
        case 15:
        case 0:
            l = to(e, l, l.pendingProps, l.type, void 0, at);
            break;
        case 11:
            l = to(e, l, l.pendingProps, l.type.render, l.ref, at);
            break;
        case 5:
            ic(l);
        default:
            so(e, l),
            l = lt = Cf(l, Il),
            l = io(e, l, Il)
        }
        t.memoizedProps = t.pendingProps,
        l === null ? wu(t) : lt = l
    }
    function Oa(t, l, e, a) {
        Zl = Xe = null,
        ic(l),
        Sa = null,
        bn = 0;
        var n = l.return;
        try {
            if (_m(t, n, l, e, at)) {
                jt = 1,
                Mu(t, pl(e, t.current)),
                lt = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw lt = n, u;
            jt = 1,
            Mu(t, pl(e, t.current)),
            lt = null;
            return
        }
        l.flags & 32768 ? (it || a === 1 ? t = !0 : ja || (at & 536870912) !== 0 ? t = !1 : (be = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Tl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), qo(l, t)) : wu(l)
    }
    function wu(t) {
        var l = t;
        do {
            if ((l.flags & 32768) !== 0) {
                qo(l, be);
                return
            }
            t = l.return;
            var e = Dm(l.alternate, l, Il);
            if (e !== null) {
                lt = e;
                return
            }
            if (l = l.sibling, l !== null) {
                lt = l;
                return
            }
            lt = l = t
        } while (l !== null);
        jt === 0 && (jt = 5)
    }
    function qo(t, l) {
        do {
            var e = Rm(t.alternate, t);
            if (e !== null) {
                e.flags &= 32767,
                lt = e;
                return
            }
            if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
                lt = t;
                return
            }
            lt = t = e
        } while (t !== null);
        jt = 6,
        lt = null
    }
    function wo(t, l, e, a, n, u, i, c, o) {
        t.cancelPendingCommit = null;
        do Bu();
        while (Zt !== 0);
        if ((ft & 6) !== 0)
            throw Error(r(327));
        if (l !== null) {
            if (l === t.current)
                throw Error(r(177));
            if (u = l.lanes | l.childLanes, u |= Ci, bh(t, e, u, i, c, o), t === gt && (lt = gt = null, at = 0), Ea = l, Se = t, Ma = e, Yc = u, Xc = n, Eo = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Zm(Vn, function() {
                return Qo(), null
            })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
                a = N.T,
                N.T = null,
                n = U.p,
                U.p = 2,
                i = ft,
                ft |= 4;
                try {
                    Um(t, l, e)
                } finally {
                    ft = i,
                    U.p = n,
                    N.T = a
                }
            }
            Zt = 1,
            Bo(),
            Go(),
            Yo()
        }
    }
    function Bo() {
        if (Zt === 1) {
            Zt = 0;
            var t = Se,
                l = Ea,
                e = (l.flags & 13878) !== 0;
            if ((l.subtreeFlags & 13878) !== 0 || e) {
                e = N.T,
                N.T = null;
                var a = U.p;
                U.p = 2;
                var n = ft;
                ft |= 4;
                try {
                    po(l, t);
                    var u = as,
                        i = jf(t.containerInfo),
                        c = u.focusedElem,
                        o = u.selectionRange;
                    if (i !== c && c && c.ownerDocument && Tf(c.ownerDocument.documentElement, c)) {
                        if (o !== null && Oi(c)) {
                            var y = o.start,
                                A = o.end;
                            if (A === void 0 && (A = y), "selectionStart" in c)
                                c.selectionStart = y,
                                c.selectionEnd = Math.min(A, c.value.length);
                            else {
                                var z = c.ownerDocument || document,
                                    g = z && z.defaultView || window;
                                if (g.getSelection) {
                                    var b = g.getSelection(),
                                        L = c.textContent.length,
                                        V = Math.min(o.start, L),
                                        ht = o.end === void 0 ? V : Math.min(o.end, L);
                                    !b.extend && V > ht && (i = ht, ht = V, V = i);
                                    var m = Af(c, V),
                                        h = Af(c, ht);
                                    if (m && h && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== h.node || b.focusOffset !== h.offset)) {
                                        var v = z.createRange();
                                        v.setStart(m.node, m.offset),
                                        b.removeAllRanges(),
                                        V > ht ? (b.addRange(v), b.extend(h.node, h.offset)) : (v.setEnd(h.node, h.offset), b.addRange(v))
                                    }
                                }
                            }
                        }
                        for (z = [], b = c; b = b.parentNode;)
                            b.nodeType === 1 && z.push({
                                element: b,
                                left: b.scrollLeft,
                                top: b.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
                            var j = z[c];
                            j.element.scrollLeft = j.left,
                            j.element.scrollTop = j.top
                        }
                    }
                    $u = !!es,
                    as = es = null
                } finally {
                    ft = n,
                    U.p = a,
                    N.T = e
                }
            }
            t.current = l,
            Zt = 2
        }
    }
    function Go() {
        if (Zt === 2) {
            Zt = 0;
            var t = Se,
                l = Ea,
                e = (l.flags & 8772) !== 0;
            if ((l.subtreeFlags & 8772) !== 0 || e) {
                e = N.T,
                N.T = null;
                var a = U.p;
                U.p = 2;
                var n = ft;
                ft |= 4;
                try {
                    yo(t, l.alternate, l)
                } finally {
                    ft = n,
                    U.p = a,
                    N.T = e
                }
            }
            Zt = 3
        }
    }
    function Yo() {
        if (Zt === 4 || Zt === 3) {
            Zt = 0,
            fh();
            var t = Se,
                l = Ea,
                e = Ma,
                a = Eo;
            (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Zt = 5 : (Zt = 0, Ea = Se = null, Xo(t, t.pendingLanes));
            var n = t.pendingLanes;
            if (n === 0 && (pe = null), fi(e), l = l.stateNode, nl && typeof nl.onCommitFiberRoot == "function")
                try {
                    nl.onCommitFiberRoot(Qa, l, void 0, (l.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                l = N.T,
                n = U.p,
                U.p = 2,
                N.T = null;
                try {
                    for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        u(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    N.T = l,
                    U.p = n
                }
            }
            (Ma & 3) !== 0 && Bu(),
            wl(t),
            n = t.pendingLanes,
            (e & 4194090) !== 0 && (n & 42) !== 0 ? t === Qc ? En++ : (En = 0, Qc = t) : En = 0,
            Mn(0)
        }
    }
    function Xo(t, l) {
        (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, cn(l)))
    }
    function Bu(t) {
        return Bo(), Go(), Yo(), Qo()
    }
    function Qo() {
        if (Zt !== 5)
            return !1;
        var t = Se,
            l = Yc;
        Yc = 0;
        var e = fi(Ma),
            a = N.T,
            n = U.p;
        try {
            U.p = 32 > e ? 32 : e,
            N.T = null,
            e = Xc,
            Xc = null;
            var u = Se,
                i = Ma;
            if (Zt = 0, Ea = Se = null, Ma = 0, (ft & 6) !== 0)
                throw Error(r(331));
            var c = ft;
            if (ft |= 4, jo(u.current), No(u, u.current, i, e), ft = c, Mn(0, !1), nl && typeof nl.onPostCommitFiberRoot == "function")
                try {
                    nl.onPostCommitFiberRoot(Qa, u)
                } catch {}
            return !0
        } finally {
            U.p = n,
            N.T = a,
            Xo(t, l)
        }
    }
    function Vo(t, l, e) {
        l = pl(e, l),
        l = pc(t.stateNode, l, 2),
        t = oe(t, l, 2),
        t !== null && (Za(t, 2), wl(t))
    }
    function vt(t, l, e) {
        if (t.tag === 3)
            Vo(t, t, e);
        else
            for (; l !== null;) {
                if (l.tag === 3) {
                    Vo(l, t, e);
                    break
                } else if (l.tag === 1) {
                    var a = l.stateNode;
                    if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pe === null || !pe.has(a))) {
                        t = pl(e, t),
                        e = kr(2),
                        a = oe(l, e, 2),
                        a !== null && (Kr(e, a, l, t), Za(a, 2), wl(a));
                        break
                    }
                }
                l = l.return
            }
    }
    function kc(t, l, e) {
        var a = t.pingCache;
        if (a === null) {
            a = t.pingCache = new qm;
            var n = new Set;
            a.set(l, n)
        } else
            n = a.get(l),
            n === void 0 && (n = new Set, a.set(l, n));
        n.has(e) || (qc = !0, n.add(e), t = Xm.bind(null, t, l, e), l.then(t, t))
    }
    function Xm(t, l, e) {
        var a = t.pingCache;
        a !== null && a.delete(l),
        t.pingedLanes |= t.suspendedLanes & e,
        t.warmLanes &= ~e,
        gt === t && (at & e) === e && (jt === 4 || jt === 3 && (at & 62914560) === at && 300 > Rl() - Gc ? (ft & 2) === 0 && _a(t, 0) : wc |= e, za === at && (za = 0)),
        wl(t)
    }
    function Zo(t, l) {
        l === 0 && (l = Bs()),
        t = oa(t, l),
        t !== null && (Za(t, l), wl(t))
    }
    function Qm(t) {
        var l = t.memoizedState,
            e = 0;
        l !== null && (e = l.retryLane),
        Zo(t, e)
    }
    function Vm(t, l) {
        var e = 0;
        switch (t.tag) {
        case 13:
            var a = t.stateNode,
                n = t.memoizedState;
            n !== null && (e = n.retryLane);
            break;
        case 19:
            a = t.stateNode;
            break;
        case 22:
            a = t.stateNode._retryCache;
            break;
        default:
            throw Error(r(314))
        }
        a !== null && a.delete(l),
        Zo(t, e)
    }
    function Zm(t, l) {
        return ui(t, l)
    }
    var Gu = null,
        Da = null,
        Kc = !1,
        Yu = !1,
        Jc = !1,
        Je = 0;
    function wl(t) {
        t !== Da && t.next === null && (Da === null ? Gu = Da = t : Da = Da.next = t),
        Yu = !0,
        Kc || (Kc = !0, km())
    }
    function Mn(t, l) {
        if (!Jc && Yu) {
            Jc = !0;
            do for (var e = !1, a = Gu; a !== null;) {
                if (t !== 0) {
                    var n = a.pendingLanes;
                    if (n === 0)
                        var u = 0;
                    else {
                        var i = a.suspendedLanes,
                            c = a.pingedLanes;
                        u = (1 << 31 - ul(42 | t) + 1) - 1,
                        u &= n & ~(i & ~c),
                        u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                    }
                    u !== 0 && (e = !0, Jo(a, u))
                } else
                    u = at,
                    u = kn(a, a === gt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                    (u & 3) === 0 || Va(a, u) || (e = !0, Jo(a, u));
                a = a.next
            }
            while (e);
            Jc = !1
        }
    }
    function Lm() {
        Lo()
    }
    function Lo() {
        Yu = Kc = !1;
        var t = 0;
        Je !== 0 && (t0() && (t = Je), Je = 0);
        for (var l = Rl(), e = null, a = Gu; a !== null;) {
            var n = a.next,
                u = ko(a, l);
            u === 0 ? (a.next = null, e === null ? Gu = n : e.next = n, n === null && (Da = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (Yu = !0)),
            a = n
        }
        Mn(t)
    }
    function ko(t, l) {
        for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;) {
            var i = 31 - ul(u),
                c = 1 << i,
                o = n[i];
            o === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = gh(c, l)) : o <= l && (t.expiredLanes |= c),
            u &= ~c
        }
        if (l = gt, e = at, e = kn(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (rt === 2 || rt === 9) || t.cancelPendingCommit !== null)
            return a !== null && a !== null && ii(a), t.callbackNode = null, t.callbackPriority = 0;
        if ((e & 3) === 0 || Va(t, e)) {
            if (l = e & -e, l === t.callbackPriority)
                return l;
            switch (a !== null && ii(a), fi(e)) {
            case 2:
            case 8:
                e = Cs;
                break;
            case 32:
                e = Vn;
                break;
            case 268435456:
                e = qs;
                break;
            default:
                e = Vn
            }
            return a = Ko.bind(null, t), e = ui(e, a), t.callbackPriority = l, t.callbackNode = e, l
        }
        return a !== null && a !== null && ii(a), t.callbackPriority = 2, t.callbackNode = null, 2
    }
    function Ko(t, l) {
        if (Zt !== 0 && Zt !== 5)
            return t.callbackNode = null, t.callbackPriority = 0, null;
        var e = t.callbackNode;
        if (Bu() && t.callbackNode !== e)
            return null;
        var a = at;
        return a = kn(t, t === gt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (_o(t, a, l), ko(t, Rl()), t.callbackNode != null && t.callbackNode === e ? Ko.bind(null, t) : null)
    }
    function Jo(t, l) {
        if (Bu())
            return null;
        _o(t, l, !0)
    }
    function km() {
        e0(function() {
            (ft & 6) !== 0 ? ui(Hs, Lm) : Lo()
        })
    }
    function Wc() {
        return Je === 0 && (Je = ws()), Je
    }
    function Wo(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Fn("" + t)
    }
    function $o(t, l) {
        var e = l.ownerDocument.createElement("input");
        return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t
    }
    function Km(t, l, e, a, n) {
        if (l === "submit" && e && e.stateNode === n) {
            var u = Wo((n[It] || null).action),
                i = a.submitter;
            i && (l = (l = i[It] || null) ? Wo(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
            var c = new lu("action", "action", null, a, n);
            t.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Je !== 0) {
                                var o = i ? $o(n, i) : new FormData(n);
                                vc(e, {
                                    pending: !0,
                                    data: o,
                                    method: n.method,
                                    action: u
                                }, null, o)
                            }
                        } else
                            typeof u == "function" && (c.preventDefault(), o = i ? $o(n, i) : new FormData(n), vc(e, {
                                pending: !0,
                                data: o,
                                method: n.method,
                                action: u
                            }, u, o))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var $c = 0; $c < Hi.length; $c++) {
        var Fc = Hi[$c],
            Jm = Fc.toLowerCase(),
            Wm = Fc[0].toUpperCase() + Fc.slice(1);
        Ml(Jm, "on" + Wm)
    }
    Ml(Mf, "onAnimationEnd"),
    Ml(_f, "onAnimationIteration"),
    Ml(Of, "onAnimationStart"),
    Ml("dblclick", "onDoubleClick"),
    Ml("focusin", "onFocus"),
    Ml("focusout", "onBlur"),
    Ml(dm, "onTransitionRun"),
    Ml(hm, "onTransitionStart"),
    Ml(mm, "onTransitionCancel"),
    Ml(Df, "onTransitionEnd"),
    la("onMouseEnter", ["mouseout", "mouseover"]),
    la("onMouseLeave", ["mouseout", "mouseover"]),
    la("onPointerEnter", ["pointerout", "pointerover"]),
    la("onPointerLeave", ["pointerout", "pointerover"]),
    Re("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Re("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Re("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Re("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Re("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        $m = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n));
    function Fo(t, l) {
        l = (l & 4) !== 0;
        for (var e = 0; e < t.length; e++) {
            var a = t[e],
                n = a.event;
            a = a.listeners;
            t:
            {
                var u = void 0;
                if (l)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i],
                            o = c.instance,
                            y = c.currentTarget;
                        if (c = c.listener, o !== u && n.isPropagationStopped())
                            break t;
                        u = c,
                        n.currentTarget = y;
                        try {
                            u(n)
                        } catch (A) {
                            Eu(A)
                        }
                        n.currentTarget = null,
                        u = o
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (c = a[i], o = c.instance, y = c.currentTarget, c = c.listener, o !== u && n.isPropagationStopped())
                            break t;
                        u = c,
                        n.currentTarget = y;
                        try {
                            u(n)
                        } catch (A) {
                            Eu(A)
                        }
                        n.currentTarget = null,
                        u = o
                    }
            }
        }
    }
    function et(t, l) {
        var e = l[ri];
        e === void 0 && (e = l[ri] = new Set);
        var a = t + "__bubble";
        e.has(a) || (Io(l, t, 2, !1), e.add(a))
    }
    function Ic(t, l, e) {
        var a = 0;
        l && (a |= 4),
        Io(e, t, a, l)
    }
    var Xu = "_reactListening" + Math.random().toString(36).slice(2);
    function Pc(t) {
        if (!t[Xu]) {
            t[Xu] = !0,
            Vs.forEach(function(e) {
                e !== "selectionchange" && ($m.has(e) || Ic(e, !1, t), Ic(e, !0, t))
            });
            var l = t.nodeType === 9 ? t : t.ownerDocument;
            l === null || l[Xu] || (l[Xu] = !0, Ic("selectionchange", !1, l))
        }
    }
    function Io(t, l, e, a) {
        switch (Nd(l)) {
        case 2:
            var n = A0;
            break;
        case 8:
            n = T0;
            break;
        default:
            n = hs
        }
        e = n.bind(null, l, e, t),
        n = void 0,
        !Si || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = !0),
        a ? n !== void 0 ? t.addEventListener(l, e, {
            capture: !0,
            passive: n
        }) : t.addEventListener(l, e, !0) : n !== void 0 ? t.addEventListener(l, e, {
            passive: n
        }) : t.addEventListener(l, e, !1)
    }
    function ts(t, l, e, a, n) {
        var u = a;
        if ((l & 1) === 0 && (l & 2) === 0 && a !== null)
            t:
            for (;;) {
                if (a === null)
                    return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var c = a.stateNode.containerInfo;
                    if (c === n)
                        break;
                    if (i === 4)
                        for (i = a.return; i !== null;) {
                            var o = i.tag;
                            if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                                return;
                            i = i.return
                        }
                    for (; c !== null;) {
                        if (i = Ie(c), i === null)
                            return;
                        if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
                            a = u = i;
                            continue t
                        }
                        c = c.parentNode
                    }
                }
                a = a.return
            }
        af(function() {
            var y = u,
                A = xi(e),
                z = [];
            t:
            {
                var g = Rf.get(t);
                if (g !== void 0) {
                    var b = lu,
                        L = t;
                    switch (t) {
                    case "keypress":
                        if (Pn(e) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        b = Zh;
                        break;
                    case "focusin":
                        L = "focus",
                        b = ji;
                        break;
                    case "focusout":
                        L = "blur",
                        b = ji;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = ji;
                        break;
                    case "click":
                        if (e.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = cf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = Rh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = Kh;
                        break;
                    case Mf:
                    case _f:
                    case Of:
                        b = Ch;
                        break;
                    case Df:
                        b = Wh;
                        break;
                    case "scroll":
                    case "scrollend":
                        b = Oh;
                        break;
                    case "wheel":
                        b = Fh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = wh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = ff;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        b = Ph
                    }
                    var V = (l & 4) !== 0,
                        ht = !V && (t === "scroll" || t === "scrollend"),
                        m = V ? g !== null ? g + "Capture" : null : g;
                    V = [];
                    for (var h = y, v; h !== null;) {
                        var j = h;
                        if (v = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || v === null || m === null || (j = Ka(h, m), j != null && V.push(On(h, j, v))), ht)
                            break;
                        h = h.return
                    }
                    0 < V.length && (g = new b(g, L, null, e, A), z.push({
                        event: g,
                        listeners: V
                    }))
                }
            }if ((l & 7) === 0) {
                t:
                {
                    if (g = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout", g && e !== bi && (L = e.relatedTarget || e.fromElement) && (Ie(L) || L[Fe]))
                        break t;
                    if ((b || g) && (g = A.window === A ? A : (g = A.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (L = e.relatedTarget || e.toElement, b = y, L = L ? Ie(L) : null, L !== null && (ht = _(L), V = L.tag, L !== ht || V !== 5 && V !== 27 && V !== 6) && (L = null)) : (b = null, L = y), b !== L)) {
                        if (V = cf, j = "onMouseLeave", m = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (V = ff, j = "onPointerLeave", m = "onPointerEnter", h = "pointer"), ht = b == null ? g : ka(b), v = L == null ? g : ka(L), g = new V(j, h + "leave", b, e, A), g.target = ht, g.relatedTarget = v, j = null, Ie(A) === y && (V = new V(m, h + "enter", L, e, A), V.target = v, V.relatedTarget = ht, j = V), ht = j, b && L)
                            l:
                            {
                                for (V = b, m = L, h = 0, v = V; v; v = Ra(v))
                                    h++;
                                for (v = 0, j = m; j; j = Ra(j))
                                    v++;
                                for (; 0 < h - v;)
                                    V = Ra(V),
                                    h--;
                                for (; 0 < v - h;)
                                    m = Ra(m),
                                    v--;
                                for (; h--;) {
                                    if (V === m || m !== null && V === m.alternate)
                                        break l;
                                    V = Ra(V),
                                    m = Ra(m)
                                }
                                V = null
                            } else
                            V = null;
                        b !== null && Po(z, g, b, V, !1),
                        L !== null && ht !== null && Po(z, ht, L, V, !0)
                    }
                }t:
                {
                    if (g = y ? ka(y) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file")
                        var w = gf;
                    else if (vf(g))
                        if (bf)
                            w = fm;
                        else {
                            w = cm;
                            var P = im
                        }
                    else
                        b = g.nodeName,
                        !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && gi(y.elementType) && (w = gf) : w = sm;
                    if (w && (w = w(t, y))) {
                        yf(z, w, e, A);
                        break t
                    }
                    P && P(t, g, y),
                    t === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && yi(g, "number", g.value)
                }switch (P = y ? ka(y) : window, t) {
                case "focusin":
                    (vf(P) || P.contentEditable === "true") && (sa = P, Di = y, ln = null);
                    break;
                case "focusout":
                    ln = Di = sa = null;
                    break;
                case "mousedown":
                    Ri = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ri = !1,
                    zf(z, e, A);
                    break;
                case "selectionchange":
                    if (om)
                        break;
                case "keydown":
                case "keyup":
                    zf(z, e, A)
                }
                var Y;
                if (Ei)
                    t:
                    {
                        switch (t) {
                        case "compositionstart":
                            var Z = "onCompositionStart";
                            break t;
                        case "compositionend":
                            Z = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            Z = "onCompositionUpdate";
                            break t
                        }
                        Z = void 0
                    } else
                    ca ? hf(t, e) && (Z = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (Z = "onCompositionStart");
                Z && (rf && e.locale !== "ko" && (ca || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && ca && (Y = nf()) : (ce = A, Ni = "value" in ce ? ce.value : ce.textContent, ca = !0)), P = Qu(y, Z), 0 < P.length && (Z = new sf(Z, t, null, e, A), z.push({
                    event: Z,
                    listeners: P
                }), Y ? Z.data = Y : (Y = mf(e), Y !== null && (Z.data = Y)))),
                (Y = lm ? em(t, e) : am(t, e)) && (Z = Qu(y, "onBeforeInput"), 0 < Z.length && (P = new sf("onBeforeInput", "beforeinput", null, e, A), z.push({
                    event: P,
                    listeners: Z
                }), P.data = Y)),
                Km(z, t, y, e, A)
            }
            Fo(z, l)
        })
    }
    function On(t, l, e) {
        return {
            instance: t,
            listener: l,
            currentTarget: e
        }
    }
    function Qu(t, l) {
        for (var e = l + "Capture", a = []; t !== null;) {
            var n = t,
                u = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ka(t, e), n != null && a.unshift(On(t, n, u)), n = Ka(t, l), n != null && a.push(On(t, n, u))), t.tag === 3)
                return a;
            t = t.return
        }
        return []
    }
    function Ra(t) {
        if (t === null)
            return null;
        do t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Po(t, l, e, a, n) {
        for (var u = l._reactName, i = []; e !== null && e !== a;) {
            var c = e,
                o = c.alternate,
                y = c.stateNode;
            if (c = c.tag, o !== null && o === a)
                break;
            c !== 5 && c !== 26 && c !== 27 || y === null || (o = y, n ? (y = Ka(e, u), y != null && i.unshift(On(e, y, o))) : n || (y = Ka(e, u), y != null && i.push(On(e, y, o)))),
            e = e.return
        }
        i.length !== 0 && t.push({
            event: l,
            listeners: i
        })
    }
    var Fm = /\r\n?/g,
        Im = /\u0000|\uFFFD/g;
    function td(t) {
        return (typeof t == "string" ? t : "" + t).replace(Fm, `
`
        ).replace(Im, "")
    }
    function ld(t, l) {
        return l = td(l), td(t) === l
    }
    function Vu() {}
    function dt(t, l, e, a, n, u) {
        switch (e) {
        case "children":
            typeof a == "string" ? l === "body" || l === "textarea" && a === "" || na(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && na(t, "" + a);
            break;
        case "className":
            Jn(t, "class", a);
            break;
        case "tabIndex":
            Jn(t, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Jn(t, e, a);
            break;
        case "style":
            lf(t, a, u);
            break;
        case "data":
            if (l !== "object") {
                Jn(t, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (l !== "a" || e !== "href")) {
                t.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break
            }
            a = Fn("" + a),
            t.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (e === "formAction" ? (l !== "input" && dt(t, l, "name", n.name, n, null), dt(t, l, "formEncType", n.formEncType, n, null), dt(t, l, "formMethod", n.formMethod, n, null), dt(t, l, "formTarget", n.formTarget, n, null)) : (dt(t, l, "encType", n.encType, n, null), dt(t, l, "method", n.method, n, null), dt(t, l, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                t.removeAttribute(e);
                break
            }
            a = Fn("" + a),
            t.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (t.onclick = Vu);
            break;
        case "onScroll":
            a != null && et("scroll", t);
            break;
        case "onScrollEnd":
            a != null && et("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(r(61));
                if (e = a.__html, e != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    t.innerHTML = e
                }
            }
            break;
        case "multiple":
            t.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            t.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            e = Fn("" + a),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? t.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
            break;
        case "popover":
            et("beforetoggle", t),
            et("toggle", t),
            Kn(t, "popover", a);
            break;
        case "xlinkActuate":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Gl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Kn(t, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Mh.get(e) || e, Kn(t, e, a))
        }
    }
    function ls(t, l, e, a, n, u) {
        switch (e) {
        case "style":
            lf(t, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(r(61));
                if (e = a.__html, e != null) {
                    if (n.children != null)
                        throw Error(r(60));
                    t.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? na(t, a) : (typeof a == "number" || typeof a == "bigint") && na(t, "" + a);
            break;
        case "onScroll":
            a != null && et("scroll", t);
            break;
        case "onScrollEnd":
            a != null && et("scrollend", t);
            break;
        case "onClick":
            a != null && (t.onclick = Vu);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Zs.hasOwnProperty(e))
                t:
                {
                    if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[It] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
                        typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)),
                        t.addEventListener(l, a, n);
                        break t
                    }
                    e in t ? t[e] = a : a === !0 ? t.setAttribute(e, "") : Kn(t, e, a)
                }
        }
    }
    function Lt(t, l, e) {
        switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            et("error", t),
            et("load", t);
            var a = !1,
                n = !1,
                u;
            for (u in e)
                if (e.hasOwnProperty(u)) {
                    var i = e[u];
                    if (i != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, l));
                        default:
                            dt(t, l, u, i, e, null)
                        }
                }
            n && dt(t, l, "srcSet", e.srcSet, e, null),
            a && dt(t, l, "src", e.src, e, null);
            return;
        case "input":
            et("invalid", t);
            var c = u = i = n = null,
                o = null,
                y = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var A = e[a];
                    if (A != null)
                        switch (a) {
                        case "name":
                            n = A;
                            break;
                        case "type":
                            i = A;
                            break;
                        case "checked":
                            o = A;
                            break;
                        case "defaultChecked":
                            y = A;
                            break;
                        case "value":
                            u = A;
                            break;
                        case "defaultValue":
                            c = A;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (A != null)
                                throw Error(r(137, l));
                            break;
                        default:
                            dt(t, l, a, A, e, null)
                        }
                }
            Fs(t, u, c, o, y, i, n, !1),
            Wn(t);
            return;
        case "select":
            et("invalid", t),
            a = i = u = null;
            for (n in e)
                if (e.hasOwnProperty(n) && (c = e[n], c != null))
                    switch (n) {
                    case "value":
                        u = c;
                        break;
                    case "defaultValue":
                        i = c;
                        break;
                    case "multiple":
                        a = c;
                    default:
                        dt(t, l, n, c, e, null)
                    }
            l = u,
            e = i,
            t.multiple = !!a,
            l != null ? aa(t, !!a, l, !1) : e != null && aa(t, !!a, e, !0);
            return;
        case "textarea":
            et("invalid", t),
            u = n = a = null;
            for (i in e)
                if (e.hasOwnProperty(i) && (c = e[i], c != null))
                    switch (i) {
                    case "value":
                        a = c;
                        break;
                    case "defaultValue":
                        n = c;
                        break;
                    case "children":
                        u = c;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(r(91));
                        break;
                    default:
                        dt(t, l, i, c, e, null)
                    }
            Ps(t, a, n, u),
            Wn(t);
            return;
        case "option":
            for (o in e)
                if (e.hasOwnProperty(o) && (a = e[o], a != null))
                    switch (o) {
                    case "selected":
                        t.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        dt(t, l, o, a, e, null)
                    }
            return;
        case "dialog":
            et("beforetoggle", t),
            et("toggle", t),
            et("cancel", t),
            et("close", t);
            break;
        case "iframe":
        case "object":
            et("load", t);
            break;
        case "video":
        case "audio":
            for (a = 0; a < _n.length; a++)
                et(_n[a], t);
            break;
        case "image":
            et("error", t),
            et("load", t);
            break;
        case "details":
            et("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            et("error", t),
            et("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (y in e)
                if (e.hasOwnProperty(y) && (a = e[y], a != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(r(137, l));
                    default:
                        dt(t, l, y, a, e, null)
                    }
            return;
        default:
            if (gi(l)) {
                for (A in e)
                    e.hasOwnProperty(A) && (a = e[A], a !== void 0 && ls(t, l, A, a, e, void 0));
                return
            }
        }
        for (c in e)
            e.hasOwnProperty(c) && (a = e[c], a != null && dt(t, l, c, a, e, null))
    }
    function Pm(t, l, e, a) {
        switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null,
                u = null,
                i = null,
                c = null,
                o = null,
                y = null,
                A = null;
            for (b in e) {
                var z = e[b];
                if (e.hasOwnProperty(b) && z != null)
                    switch (b) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        o = z;
                    default:
                        a.hasOwnProperty(b) || dt(t, l, b, null, a, z)
                    }
            }
            for (var g in a) {
                var b = a[g];
                if (z = e[g], a.hasOwnProperty(g) && (b != null || z != null))
                    switch (g) {
                    case "type":
                        u = b;
                        break;
                    case "name":
                        n = b;
                        break;
                    case "checked":
                        y = b;
                        break;
                    case "defaultChecked":
                        A = b;
                        break;
                    case "value":
                        i = b;
                        break;
                    case "defaultValue":
                        c = b;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(r(137, l));
                        break;
                    default:
                        b !== z && dt(t, l, g, b, a, z)
                    }
            }
            vi(t, i, c, o, y, A, u, n);
            return;
        case "select":
            b = i = c = g = null;
            for (u in e)
                if (o = e[u], e.hasOwnProperty(u) && o != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        b = o;
                    default:
                        a.hasOwnProperty(u) || dt(t, l, u, null, a, o)
                    }
            for (n in a)
                if (u = a[n], o = e[n], a.hasOwnProperty(n) && (u != null || o != null))
                    switch (n) {
                    case "value":
                        g = u;
                        break;
                    case "defaultValue":
                        c = u;
                        break;
                    case "multiple":
                        i = u;
                    default:
                        u !== o && dt(t, l, n, u, a, o)
                    }
            l = c,
            e = i,
            a = b,
            g != null ? aa(t, !!e, g, !1) : !!a != !!e && (l != null ? aa(t, !!e, l, !0) : aa(t, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            b = g = null;
            for (c in e)
                if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
                    switch (c) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        dt(t, l, c, null, a, n)
                    }
            for (i in a)
                if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
                    switch (i) {
                    case "value":
                        g = n;
                        break;
                    case "defaultValue":
                        b = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(r(91));
                        break;
                    default:
                        n !== u && dt(t, l, i, n, a, u)
                    }
            Is(t, g, b);
            return;
        case "option":
            for (var L in e)
                if (g = e[L], e.hasOwnProperty(L) && g != null && !a.hasOwnProperty(L))
                    switch (L) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        dt(t, l, L, null, a, g)
                    }
            for (o in a)
                if (g = a[o], b = e[o], a.hasOwnProperty(o) && g !== b && (g != null || b != null))
                    switch (o) {
                    case "selected":
                        t.selected = g && typeof g != "function" && typeof g != "symbol";
                        break;
                    default:
                        dt(t, l, o, g, a, b)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var V in e)
                g = e[V],
                e.hasOwnProperty(V) && g != null && !a.hasOwnProperty(V) && dt(t, l, V, null, a, g);
            for (y in a)
                if (g = a[y], b = e[y], a.hasOwnProperty(y) && g !== b && (g != null || b != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(r(137, l));
                        break;
                    default:
                        dt(t, l, y, g, a, b)
                    }
            return;
        default:
            if (gi(l)) {
                for (var ht in e)
                    g = e[ht],
                    e.hasOwnProperty(ht) && g !== void 0 && !a.hasOwnProperty(ht) && ls(t, l, ht, void 0, a, g);
                for (A in a)
                    g = a[A],
                    b = e[A],
                    !a.hasOwnProperty(A) || g === b || g === void 0 && b === void 0 || ls(t, l, A, g, a, b);
                return
            }
        }
        for (var m in e)
            g = e[m],
            e.hasOwnProperty(m) && g != null && !a.hasOwnProperty(m) && dt(t, l, m, null, a, g);
        for (z in a)
            g = a[z],
            b = e[z],
            !a.hasOwnProperty(z) || g === b || g == null && b == null || dt(t, l, z, g, a, b)
    }
    var es = null,
        as = null;
    function Zu(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function ed(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function ad(t, l) {
        if (t === 0)
            switch (l) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && l === "foreignObject" ? 0 : t
    }
    function ns(t, l) {
        return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null
    }
    var us = null;
    function t0() {
        var t = window.event;
        return t && t.type === "popstate" ? t === us ? !1 : (us = t, !0) : (us = null, !1)
    }
    var nd = typeof setTimeout == "function" ? setTimeout : void 0,
        l0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        ud = typeof Promise == "function" ? Promise : void 0,
        e0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(t) {
            return ud.resolve(null).then(t).catch(a0)
        } : nd;
    function a0(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Ae(t) {
        return t === "head"
    }
    function id(t, l) {
        var e = l,
            a = 0,
            n = 0;
        do {
            var u = e.nextSibling;
            if (t.removeChild(e), u && u.nodeType === 8)
                if (e = u.data, e === "/$") {
                    if (0 < a && 8 > a) {
                        e = a;
                        var i = t.ownerDocument;
                        if (e & 1 && Dn(i.documentElement), e & 2 && Dn(i.body), e & 4)
                            for (e = i.head, Dn(e), i = e.firstChild; i;) {
                                var c = i.nextSibling,
                                    o = i.nodeName;
                                i[La] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i),
                                i = c
                            }
                    }
                    if (n === 0) {
                        t.removeChild(u),
                        Gn(l);
                        return
                    }
                    n--
                } else
                    e === "$" || e === "$?" || e === "$!" ? n++ : a = e.charCodeAt(0) - 48;
            else
                a = 0;
            e = u
        } while (e);
        Gn(l)
    }
    function is(t) {
        var l = t.firstChild;
        for (l && l.nodeType === 10 && (l = l.nextSibling); l;) {
            var e = l;
            switch (l = l.nextSibling, e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                is(e),
                oi(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(e)
        }
    }
    function n0(t, l, e, a) {
        for (; t.nodeType === 1;) {
            var n = e;
            if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
                if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (a) {
                if (!t[La])
                    switch (l) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (l === "input" && t.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && t.getAttribute("name") === u)
                    return t
            } else
                return t;
            if (t = Ol(t.nextSibling), t === null)
                break
        }
        return null
    }
    function u0(t, l, e) {
        if (l === "")
            return null;
        for (; t.nodeType !== 3;)
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ol(t.nextSibling), t === null))
                return null;
        return t
    }
    function cs(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
    }
    function i0(t, l) {
        var e = t.ownerDocument;
        if (t.data !== "$?" || e.readyState === "complete")
            l();
        else {
            var a = function() {
                l(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            t._reactRetry = a
        }
    }
    function Ol(t) {
        for (; t != null; t = t.nextSibling) {
            var l = t.nodeType;
            if (l === 1 || l === 3)
                break;
            if (l === 8) {
                if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
                    break;
                if (l === "/$")
                    return null
            }
        }
        return t
    }
    var ss = null;
    function cd(t) {
        t = t.previousSibling;
        for (var l = 0; t;) {
            if (t.nodeType === 8) {
                var e = t.data;
                if (e === "$" || e === "$!" || e === "$?") {
                    if (l === 0)
                        return t;
                    l--
                } else
                    e === "/$" && l++
            }
            t = t.previousSibling
        }
        return null
    }
    function sd(t, l, e) {
        switch (l = Zu(e), t) {
        case "html":
            if (t = l.documentElement, !t)
                throw Error(r(452));
            return t;
        case "head":
            if (t = l.head, !t)
                throw Error(r(453));
            return t;
        case "body":
            if (t = l.body, !t)
                throw Error(r(454));
            return t;
        default:
            throw Error(r(451))
        }
    }
    function Dn(t) {
        for (var l = t.attributes; l.length;)
            t.removeAttributeNode(l[0]);
        oi(t)
    }
    var zl = new Map,
        fd = new Set;
    function Lu(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Pl = U.d;
    U.d = {
        f: c0,
        r: s0,
        D: f0,
        C: r0,
        L: o0,
        m: d0,
        X: m0,
        S: h0,
        M: v0
    };
    function c0() {
        var t = Pl.f(),
            l = qu();
        return t || l
    }
    function s0(t) {
        var l = Pe(t);
        l !== null && l.tag === 5 && l.type === "form" ? Mr(l) : Pl.r(t)
    }
    var Ua = typeof document > "u" ? null : document;
    function rd(t, l, e) {
        var a = Ua;
        if (a && typeof l == "string" && l) {
            var n = xl(l);
            n = 'link[rel="' + t + '"][href="' + n + '"]',
            typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
            fd.has(n) || (fd.add(n), t = {
                rel: t,
                crossOrigin: e,
                href: l
            }, a.querySelector(n) === null && (l = a.createElement("link"), Lt(l, "link", t), Gt(l), a.head.appendChild(l)))
        }
    }
    function f0(t) {
        Pl.D(t),
        rd("dns-prefetch", t, null)
    }
    function r0(t, l) {
        Pl.C(t, l),
        rd("preconnect", t, l)
    }
    function o0(t, l, e) {
        Pl.L(t, l, e);
        var a = Ua;
        if (a && t && l) {
            var n = 'link[rel="preload"][as="' + xl(l) + '"]';
            l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + xl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + xl(e.imageSizes) + '"]')) : n += '[href="' + xl(t) + '"]';
            var u = n;
            switch (l) {
            case "style":
                u = Ha(t);
                break;
            case "script":
                u = Ca(t)
            }
            zl.has(u) || (t = R({
                rel: "preload",
                href: l === "image" && e && e.imageSrcSet ? void 0 : t,
                as: l
            }, e), zl.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(Rn(u)) || l === "script" && a.querySelector(Un(u)) || (l = a.createElement("link"), Lt(l, "link", t), Gt(l), a.head.appendChild(l)))
        }
    }
    function d0(t, l) {
        Pl.m(t, l);
        var e = Ua;
        if (e && t) {
            var a = l && typeof l.as == "string" ? l.as : "script",
                n = 'link[rel="modulepreload"][as="' + xl(a) + '"][href="' + xl(t) + '"]',
                u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Ca(t)
            }
            if (!zl.has(u) && (t = R({
                rel: "modulepreload",
                href: t
            }, l), zl.set(u, t), e.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(Un(u)))
                        return
                }
                a = e.createElement("link"),
                Lt(a, "link", t),
                Gt(a),
                e.head.appendChild(a)
            }
        }
    }
    function h0(t, l, e) {
        Pl.S(t, l, e);
        var a = Ua;
        if (a && t) {
            var n = ta(a).hoistableStyles,
                u = Ha(t);
            l = l || "default";
            var i = n.get(u);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(Rn(u)))
                    c.loading = 5;
                else {
                    t = R({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": l
                    }, e),
                    (e = zl.get(u)) && fs(t, e);
                    var o = i = a.createElement("link");
                    Gt(o),
                    Lt(o, "link", t),
                    o._p = new Promise(function(y, A) {
                        o.onload = y,
                        o.onerror = A
                    }),
                    o.addEventListener("load", function() {
                        c.loading |= 1
                    }),
                    o.addEventListener("error", function() {
                        c.loading |= 2
                    }),
                    c.loading |= 4,
                    ku(i, l, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                },
                n.set(u, i)
            }
        }
    }
    function m0(t, l) {
        Pl.X(t, l);
        var e = Ua;
        if (e && t) {
            var a = ta(e).hoistableScripts,
                n = Ca(t),
                u = a.get(n);
            u || (u = e.querySelector(Un(n)), u || (t = R({
                src: t,
                async: !0
            }, l), (l = zl.get(n)) && rs(t, l), u = e.createElement("script"), Gt(u), Lt(u, "link", t), e.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }
    function v0(t, l) {
        Pl.M(t, l);
        var e = Ua;
        if (e && t) {
            var a = ta(e).hoistableScripts,
                n = Ca(t),
                u = a.get(n);
            u || (u = e.querySelector(Un(n)), u || (t = R({
                src: t,
                async: !0,
                type: "module"
            }, l), (l = zl.get(n)) && rs(t, l), u = e.createElement("script"), Gt(u), Lt(u, "link", t), e.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }
    function od(t, l, e, a) {
        var n = (n = k.current) ? Lu(n) : null;
        if (!n)
            throw Error(r(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ha(e.href), e = ta(n).hoistableStyles, a = e.get(l), a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            }, e.set(l, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                t = Ha(e.href);
                var u = ta(n).hoistableStyles,
                    i = u.get(t);
                if (i || (n = n.ownerDocument || n, i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                }, u.set(t, i), (u = n.querySelector(Rn(t))) && !u._p && (i.instance = u, i.state.loading = 5), zl.has(t) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                }, zl.set(t, e), u || y0(n, t, e, i.state))), l && a === null)
                    throw Error(r(528, ""));
                return i
            }
            if (l && a !== null)
                throw Error(r(529, ""));
            return null;
        case "script":
            return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ca(e), e = ta(n).hoistableScripts, a = e.get(l), a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            }, e.set(l, a)), a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(r(444, t))
        }
    }
    function Ha(t) {
        return 'href="' + xl(t) + '"'
    }
    function Rn(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function dd(t) {
        return R({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function y0(t, l, e, a) {
        t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
            return a.loading |= 1
        }), l.addEventListener("error", function() {
            return a.loading |= 2
        }), Lt(l, "link", e), Gt(l), t.head.appendChild(l))
    }
    function Ca(t) {
        return '[src="' + xl(t) + '"]'
    }
    function Un(t) {
        return "script[async]" + t
    }
    function hd(t, l, e) {
        if (l.count++, l.instance === null)
            switch (l.type) {
            case "style":
                var a = t.querySelector('style[data-href~="' + xl(e.href) + '"]');
                if (a)
                    return l.instance = a, Gt(a), a;
                var n = R({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (t.ownerDocument || t).createElement("style"), Gt(a), Lt(a, "style", n), ku(a, e.precedence, t), l.instance = a;
            case "stylesheet":
                n = Ha(e.href);
                var u = t.querySelector(Rn(n));
                if (u)
                    return l.state.loading |= 4, l.instance = u, Gt(u), u;
                a = dd(e),
                (n = zl.get(n)) && fs(a, n),
                u = (t.ownerDocument || t).createElement("link"),
                Gt(u);
                var i = u;
                return i._p = new Promise(function(c, o) {
                    i.onload = c,
                    i.onerror = o
                }), Lt(u, "link", a), l.state.loading |= 4, ku(u, e.precedence, t), l.instance = u;
            case "script":
                return u = Ca(e.src), (n = t.querySelector(Un(u))) ? (l.instance = n, Gt(n), n) : (a = e, (n = zl.get(u)) && (a = R({}, e), rs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Gt(n), Lt(n, "link", a), t.head.appendChild(n), l.instance = n);
            case "void":
                return null;
            default:
                throw Error(r(443, l.type))
            }
        else
            l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, ku(a, e.precedence, t));
        return l.instance
    }
    function ku(t, l, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === l)
                u = c;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild))
    }
    function fs(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
        t.title == null && (t.title = l.title)
    }
    function rs(t, l) {
        t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
        t.integrity == null && (t.integrity = l.integrity)
    }
    var Ku = null;
    function md(t, l, e) {
        if (Ku === null) {
            var a = new Map,
                n = Ku = new Map;
            n.set(e, a)
        } else
            n = Ku,
            a = n.get(e),
            a || (a = new Map, n.set(e, a));
        if (a.has(t))
            return a;
        for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
            var u = e[n];
            if (!(u[La] || u[kt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(l) || "";
                i = t + i;
                var c = a.get(i);
                c ? c.push(u) : a.set(i, [u])
            }
        }
        return a
    }
    function vd(t, l, e) {
        t = t.ownerDocument || t,
        t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null)
    }
    function g0(t, l, e) {
        if (e === 1 || l.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
                break;
            return !0;
        case "link":
            if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
                break;
            switch (l.rel) {
            case "stylesheet":
                return t = l.disabled, typeof l.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
                return !0
        }
        return !1
    }
    function yd(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    var Hn = null;
    function b0() {}
    function x0(t, l, e) {
        if (Hn === null)
            throw Error(r(475));
        var a = Hn;
        if (l.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = Ha(e.href),
                    u = t.querySelector(Rn(n));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Ju.bind(a), t.then(a, a)),
                    l.state.loading |= 4,
                    l.instance = u,
                    Gt(u);
                    return
                }
                u = t.ownerDocument || t,
                e = dd(e),
                (n = zl.get(n)) && fs(e, n),
                u = u.createElement("link"),
                Gt(u);
                var i = u;
                i._p = new Promise(function(c, o) {
                    i.onload = c,
                    i.onerror = o
                }),
                Lt(u, "link", e),
                l.instance = u
            }
            a.stylesheets === null && (a.stylesheets = new Map),
            a.stylesheets.set(l, t),
            (t = l.state.preload) && (l.state.loading & 3) === 0 && (a.count++, l = Ju.bind(a), t.addEventListener("load", l), t.addEventListener("error", l))
        }
    }
    function p0() {
        if (Hn === null)
            throw Error(r(475));
        var t = Hn;
        return t.stylesheets && t.count === 0 && os(t, t.stylesheets), 0 < t.count ? function(l) {
            var e = setTimeout(function() {
                if (t.stylesheets && os(t, t.stylesheets), t.unsuspend) {
                    var a = t.unsuspend;
                    t.unsuspend = null,
                    a()
                }
            }, 6e4);
            return t.unsuspend = l, function() {
                t.unsuspend = null,
                clearTimeout(e)
            }
        } : null
    }
    function Ju() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets)
                os(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Wu = null;
    function os(t, l) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++, Wu = new Map, l.forEach(S0, t), Wu = null, Ju.call(t))
    }
    function S0(t, l) {
        if (!(l.state.loading & 4)) {
            var e = Wu.get(t);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                Wu.set(t, e);
                for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
                }
                a && e.set(null, a)
            }
            n = l.instance,
            i = n.getAttribute("data-precedence"),
            u = e.get(i) || a,
            u === a && e.set(null, n),
            e.set(i, n),
            this.count++,
            a = Ju.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)),
            l.state.loading |= 4
        }
    }
    var Cn = {
        $$typeof: At,
        Provider: null,
        Consumer: null,
        _currentValue: O,
        _currentValue2: O,
        _threadCount: 0
    };
    function N0(t, l, e, a, n, u, i, c) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = ci(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = ci(0),
        this.hiddenUpdates = ci(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = c,
        this.incompleteTransitions = new Map
    }
    function gd(t, l, e, a, n, u, i, c, o, y, A, z) {
        return t = new N0(t, l, e, i, c, o, y, z), l = 1, u === !0 && (l |= 24), u = cl(3, null, null, l), t.current = u, u.stateNode = t, l = ki(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: l
        }, $i(u), t
    }
    function bd(t) {
        return t ? (t = da, t) : da
    }
    function xd(t, l, e, a, n, u) {
        n = bd(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = re(l),
        a.payload = {
            element: e
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        e = oe(t, a, l),
        e !== null && (dl(e, t, l), on(e, t, l))
    }
    function pd(t, l) {
        if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
            var e = t.retryLane;
            t.retryLane = e !== 0 && e < l ? e : l
        }
    }
    function ds(t, l) {
        pd(t, l),
        (t = t.alternate) && pd(t, l)
    }
    function Sd(t) {
        if (t.tag === 13) {
            var l = oa(t, 67108864);
            l !== null && dl(l, t, 67108864),
            ds(t, 67108864)
        }
    }
    var $u = !0;
    function A0(t, l, e, a) {
        var n = N.T;
        N.T = null;
        var u = U.p;
        try {
            U.p = 2,
            hs(t, l, e, a)
        } finally {
            U.p = u,
            N.T = n
        }
    }
    function T0(t, l, e, a) {
        var n = N.T;
        N.T = null;
        var u = U.p;
        try {
            U.p = 8,
            hs(t, l, e, a)
        } finally {
            U.p = u,
            N.T = n
        }
    }
    function hs(t, l, e, a) {
        if ($u) {
            var n = ms(a);
            if (n === null)
                ts(t, l, a, Fu, e),
                Ad(t, a);
            else if (z0(n, t, l, e, a))
                a.stopPropagation();
            else if (Ad(t, a), l & 4 && -1 < j0.indexOf(t)) {
                for (; n !== null;) {
                    var u = Pe(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var i = De(u.pendingLanes);
                                if (i !== 0) {
                                    var c = u;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var o = 1 << 31 - ul(i);
                                        c.entanglements[1] |= o,
                                        i &= ~o
                                    }
                                    wl(u),
                                    (ft & 6) === 0 && (Hu = Rl() + 500, Mn(0))
                                }
                            }
                            break;
                        case 13:
                            c = oa(u, 2),
                            c !== null && dl(c, u, 2),
                            qu(),
                            ds(u, 2)
                        }
                    if (u = ms(a), u === null && ts(t, l, a, Fu, e), u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                ts(t, l, a, null, e)
        }
    }
    function ms(t) {
        return t = xi(t), vs(t)
    }
    var Fu = null;
    function vs(t) {
        if (Fu = null, t = Ie(t), t !== null) {
            var l = _(t);
            if (l === null)
                t = null;
            else {
                var e = l.tag;
                if (e === 13) {
                    if (t = H(l), t !== null)
                        return t;
                    t = null
                } else if (e === 3) {
                    if (l.stateNode.current.memoizedState.isDehydrated)
                        return l.tag === 3 ? l.stateNode.containerInfo : null;
                    t = null
                } else
                    l !== t && (t = null)
            }
        }
        return Fu = t, null
    }
    function Nd(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (rh()) {
            case Hs:
                return 2;
            case Cs:
                return 8;
            case Vn:
            case oh:
                return 32;
            case qs:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var ys = !1,
        Te = null,
        je = null,
        ze = null,
        qn = new Map,
        wn = new Map,
        Ee = [],
        j0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ad(t, l) {
        switch (t) {
        case "focusin":
        case "focusout":
            Te = null;
            break;
        case "dragenter":
        case "dragleave":
            je = null;
            break;
        case "mouseover":
        case "mouseout":
            ze = null;
            break;
        case "pointerover":
        case "pointerout":
            qn.delete(l.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            wn.delete(l.pointerId)
        }
    }
    function Bn(t, l, e, a, n, u) {
        return t === null || t.nativeEvent !== u ? (t = {
            blockedOn: l,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        }, l !== null && (l = Pe(l), l !== null && Sd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t)
    }
    function z0(t, l, e, a, n) {
        switch (l) {
        case "focusin":
            return Te = Bn(Te, t, l, e, a, n), !0;
        case "dragenter":
            return je = Bn(je, t, l, e, a, n), !0;
        case "mouseover":
            return ze = Bn(ze, t, l, e, a, n), !0;
        case "pointerover":
            var u = n.pointerId;
            return qn.set(u, Bn(qn.get(u) || null, t, l, e, a, n)), !0;
        case "gotpointercapture":
            return u = n.pointerId, wn.set(u, Bn(wn.get(u) || null, t, l, e, a, n)), !0
        }
        return !1
    }
    function Td(t) {
        var l = Ie(t.target);
        if (l !== null) {
            var e = _(l);
            if (e !== null) {
                if (l = e.tag, l === 13) {
                    if (l = H(e), l !== null) {
                        t.blockedOn = l,
                        xh(t.priority, function() {
                            if (e.tag === 13) {
                                var a = ol();
                                a = si(a);
                                var n = oa(e, a);
                                n !== null && dl(n, e, a),
                                ds(e, a)
                            }
                        });
                        return
                    }
                } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Iu(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var l = t.targetContainers; 0 < l.length;) {
            var e = ms(t.nativeEvent);
            if (e === null) {
                e = t.nativeEvent;
                var a = new e.constructor(e.type, e);
                bi = a,
                e.target.dispatchEvent(a),
                bi = null
            } else
                return l = Pe(e), l !== null && Sd(l), t.blockedOn = e, !1;
            l.shift()
        }
        return !0
    }
    function jd(t, l, e) {
        Iu(t) && e.delete(l)
    }
    function E0() {
        ys = !1,
        Te !== null && Iu(Te) && (Te = null),
        je !== null && Iu(je) && (je = null),
        ze !== null && Iu(ze) && (ze = null),
        qn.forEach(jd),
        wn.forEach(jd)
    }
    function Pu(t, l) {
        t.blockedOn === l && (t.blockedOn = null, ys || (ys = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, E0)))
    }
    var ti = null;
    function zd(t) {
        ti !== t && (ti = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
            ti === t && (ti = null);
            for (var l = 0; l < t.length; l += 3) {
                var e = t[l],
                    a = t[l + 1],
                    n = t[l + 2];
                if (typeof a != "function") {
                    if (vs(a || e) === null)
                        continue;
                    break
                }
                var u = Pe(e);
                u !== null && (t.splice(l, 3), l -= 3, vc(u, {
                    pending: !0,
                    data: n,
                    method: e.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Gn(t) {
        function l(o) {
            return Pu(o, t)
        }
        Te !== null && Pu(Te, t),
        je !== null && Pu(je, t),
        ze !== null && Pu(ze, t),
        qn.forEach(l),
        wn.forEach(l);
        for (var e = 0; e < Ee.length; e++) {
            var a = Ee[e];
            a.blockedOn === t && (a.blockedOn = null)
        }
        for (; 0 < Ee.length && (e = Ee[0], e.blockedOn === null);)
            Td(e),
            e.blockedOn === null && Ee.shift();
        if (e = (t.ownerDocument || t).$$reactFormReplay, e != null)
            for (a = 0; a < e.length; a += 3) {
                var n = e[a],
                    u = e[a + 1],
                    i = n[It] || null;
                if (typeof u == "function")
                    i || zd(e);
                else if (i) {
                    var c = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u, i = u[It] || null)
                            c = i.formAction;
                        else if (vs(n) !== null)
                            continue
                    } else
                        c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3),
                    zd(e)
                }
            }
    }
    function gs(t) {
        this._internalRoot = t
    }
    li.prototype.render = gs.prototype.render = function(t) {
        var l = this._internalRoot;
        if (l === null)
            throw Error(r(409));
        var e = l.current,
            a = ol();
        xd(e, a, t, l, null, null)
    },
    li.prototype.unmount = gs.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var l = t.containerInfo;
            xd(t.current, 2, null, t, null, null),
            qu(),
            l[Fe] = null
        }
    };
    function li(t) {
        this._internalRoot = t
    }
    li.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var l = Xs();
            t = {
                blockedOn: null,
                target: t,
                priority: l
            };
            for (var e = 0; e < Ee.length && l !== 0 && l < Ee[e].priority; e++)
                ;
            Ee.splice(e, 0, t),
            e === 0 && Td(t)
        }
    };
    var Ed = p.version;
    if (Ed !== "19.1.0")
        throw Error(r(527, Ed, "19.1.0"));
    U.findDOMNode = function(t) {
        var l = t._reactInternals;
        if (l === void 0)
            throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
        return t = M(l), t = t !== null ? S(t) : null, t = t === null ? null : t.stateNode, t
    };
    var M0 = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ei.isDisabled && ei.supportsFiber)
            try {
                Qa = ei.inject(M0),
                nl = ei
            } catch {}
    }
    return Xn.createRoot = function(t, l) {
        if (!T(t))
            throw Error(r(299));
        var e = !1,
            a = "",
            n = Qr,
            u = Vr,
            i = Zr,
            c = null;
        return l != null && (l.unstable_strictMode === !0 && (e = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (c = l.unstable_transitionCallbacks)), l = gd(t, 1, !1, null, null, e, a, n, u, i, c, null), t[Fe] = l.current, Pc(t), new gs(l)
    }, Xn.hydrateRoot = function(t, l, e) {
        if (!T(t))
            throw Error(r(299));
        var a = !1,
            n = "",
            u = Qr,
            i = Vr,
            c = Zr,
            o = null,
            y = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks), e.formState !== void 0 && (y = e.formState)), l = gd(t, 1, !0, l, e ?? null, a, n, u, i, c, o, y), l.context = bd(null), e = l.current, a = ol(), a = si(a), n = re(a), n.callback = null, oe(e, n, a), e = a, l.current.lanes = e, Za(l, e), wl(l), t[Fe] = l.current, Pc(t), new li(l)
    }, Xn.version = "19.1.0", Xn
}
var wd;
function B0() {
    if (wd)
        return ps.exports;
    wd = 1;
    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
            } catch (p) {
                console.error(p)
            }
    }
    return f(), ps.exports = w0(), ps.exports
}
var G0 = B0();
function Bd(f, p) {
    if (typeof f == "function")
        return f(p);
    f != null && (f.current = p)
}
function Y0(...f) {
    return p => {
        let x = !1;
        const r = f.map(T => {
            const _ = Bd(T, p);
            return !x && typeof _ == "function" && (x = !0), _
        });
        if (x)
            return () => {
                for (let T = 0; T < r.length; T++) {
                    const _ = r[T];
                    typeof _ == "function" ? _() : Bd(f[T], null)
                }
            }
    }
}
function X0(...f) {
    return zt.useCallback(Y0(...f), f)
}
function Q0(f) {
    const p = V0(f),
        x = zt.forwardRef((r, T) => {
            const {children: _, ...H} = r,
                Q = zt.Children.toArray(_),
                M = Q.find(L0);
            if (M) {
                const S = M.props.children,
                    R = Q.map(K => K === M ? zt.Children.count(S) > 1 ? zt.Children.only(null) : zt.isValidElement(S) ? S.props.children : null : K);
                return s.jsx(p, {
                    ...H,
                    ref: T,
                    children: zt.isValidElement(S) ? zt.cloneElement(S, void 0, R) : null
                })
            }
            return s.jsx(p, {
                ...H,
                ref: T,
                children: _
            })
        });
    return x.displayName = `${f}.Slot`, x
}
var Kd = Q0("Slot");
function V0(f) {
    const p = zt.forwardRef((x, r) => {
        const {children: T, ..._} = x,
            H = zt.isValidElement(T) ? K0(T) : void 0,
            Q = X0(H, r);
        if (zt.isValidElement(T)) {
            const M = k0(_, T.props);
            return T.type !== zt.Fragment && (M.ref = Q), zt.cloneElement(T, M)
        }
        return zt.Children.count(T) > 1 ? zt.Children.only(null) : null
    });
    return p.displayName = `${f}.SlotClone`, p
}
var Z0 = Symbol("radix.slottable");
function L0(f) {
    return zt.isValidElement(f) && typeof f.type == "function" && "__radixId" in f.type && f.type.__radixId === Z0
}
function k0(f, p) {
    const x = {
        ...p
    };
    for (const r in p) {
        const T = f[r],
            _ = p[r];
        /^on[A-Z]/.test(r) ? T && _ ? x[r] = (...Q) => {
            const M = _(...Q);
            return T(...Q), M
        } : T && (x[r] = T) : r === "style" ? x[r] = {
            ...T,
            ..._
        } : r === "className" && (x[r] = [T, _].filter(Boolean).join(" "))
    }
    return {
        ...f,
        ...x
    }
}
function K0(f) {
    var r,
        T;
    let p = (r = Object.getOwnPropertyDescriptor(f.props, "ref")) == null ? void 0 : r.get,
        x = p && "isReactWarning" in p && p.isReactWarning;
    return x ? f.ref : (p = (T = Object.getOwnPropertyDescriptor(f, "ref")) == null ? void 0 : T.get, x = p && "isReactWarning" in p && p.isReactWarning, x ? f.props.ref : f.props.ref || f.ref)
}
function Jd(f) {
    var p,
        x,
        r = "";
    if (typeof f == "string" || typeof f == "number")
        r += f;
    else if (typeof f == "object")
        if (Array.isArray(f)) {
            var T = f.length;
            for (p = 0; p < T; p++)
                f[p] && (x = Jd(f[p])) && (r && (r += " "), r += x)
        } else
            for (x in f)
                f[x] && (r && (r += " "), r += x);
    return r
}
function Wd() {
    for (var f, p, x = 0, r = "", T = arguments.length; x < T; x++)
        (f = arguments[x]) && (p = Jd(f)) && (r && (r += " "), r += p);
    return r
}
const Gd = f => typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f,
    Yd = Wd,
    $d = (f, p) => x => {
        var r;
        if ((p == null ? void 0 : p.variants) == null)
            return Yd(f, x == null ? void 0 : x.class, x == null ? void 0 : x.className);
        const {variants: T, defaultVariants: _} = p,
            H = Object.keys(T).map(S => {
                const R = x == null ? void 0 : x[S],
                    K = _ == null ? void 0 : _[S];
                if (R === null)
                    return null;
                const W = Gd(R) || Gd(K);
                return T[S][W]
            }),
            Q = x && Object.entries(x).reduce((S, R) => {
                let [K, W] = R;
                return W === void 0 || (S[K] = W), S
            }, {}),
            M = p == null || (r = p.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((S, R) => {
                let {class: K, className: W, ...pt} = R;
                return Object.entries(pt).every(ct => {
                    let [yt, bt] = ct;
                    return Array.isArray(bt) ? bt.includes({
                        ..._,
                        ...Q
                    }[yt]) : {
                        ..._,
                        ...Q
                    }[yt] === bt
                }) ? [...S, K, W] : S
            }, []);
        return Yd(f, H, M, x == null ? void 0 : x.class, x == null ? void 0 : x.className)
    },
    Us = "-",
    J0 = f => {
        const p = $0(f),
            {conflictingClassGroups: x, conflictingClassGroupModifiers: r} = f;
        return {
            getClassGroupId: H => {
                const Q = H.split(Us);
                return Q[0] === "" && Q.length !== 1 && Q.shift(), Fd(Q, p) || W0(H)
            },
            getConflictingClassGroupIds: (H, Q) => {
                const M = x[H] || [];
                return Q && r[H] ? [...M, ...r[H]] : M
            }
        }
    },
    Fd = (f, p) => {
        var H;
        if (f.length === 0)
            return p.classGroupId;
        const x = f[0],
            r = p.nextPart.get(x),
            T = r ? Fd(f.slice(1), r) : void 0;
        if (T)
            return T;
        if (p.validators.length === 0)
            return;
        const _ = f.join(Us);
        return (H = p.validators.find(({validator: Q}) => Q(_))) == null ? void 0 : H.classGroupId
    },
    Xd = /^\[(.+)\]$/,
    W0 = f => {
        if (Xd.test(f)) {
            const p = Xd.exec(f)[1],
                x = p == null ? void 0 : p.substring(0, p.indexOf(":"));
            if (x)
                return "arbitrary.." + x
        }
    },
    $0 = f => {
        const {theme: p, classGroups: x} = f,
            r = {
                nextPart: new Map,
                validators: []
            };
        for (const T in x)
            _s(x[T], r, T, p);
        return r
    },
    _s = (f, p, x, r) => {
        f.forEach(T => {
            if (typeof T == "string") {
                const _ = T === "" ? p : Qd(p, T);
                _.classGroupId = x;
                return
            }
            if (typeof T == "function") {
                if (F0(T)) {
                    _s(T(r), p, x, r);
                    return
                }
                p.validators.push({
                    validator: T,
                    classGroupId: x
                });
                return
            }
            Object.entries(T).forEach(([_, H]) => {
                _s(H, Qd(p, _), x, r)
            })
        })
    },
    Qd = (f, p) => {
        let x = f;
        return p.split(Us).forEach(r => {
            x.nextPart.has(r) || x.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }),
            x = x.nextPart.get(r)
        }), x
    },
    F0 = f => f.isThemeGetter,
    I0 = f => {
        if (f < 1)
            return {
                get: () => {},
                set: () => {}
            };
        let p = 0,
            x = new Map,
            r = new Map;
        const T = (_, H) => {
            x.set(_, H),
            p++,
            p > f && (p = 0, r = x, x = new Map)
        };
        return {
            get(_) {
                let H = x.get(_);
                if (H !== void 0)
                    return H;
                if ((H = r.get(_)) !== void 0)
                    return T(_, H), H
            },
            set(_, H) {
                x.has(_) ? x.set(_, H) : T(_, H)
            }
        }
    },
    Os = "!",
    Ds = ":",
    P0 = Ds.length,
    tv = f => {
        const {prefix: p, experimentalParseClassName: x} = f;
        let r = T => {
            const _ = [];
            let H = 0,
                Q = 0,
                M = 0,
                S;
            for (let ct = 0; ct < T.length; ct++) {
                let yt = T[ct];
                if (H === 0 && Q === 0) {
                    if (yt === Ds) {
                        _.push(T.slice(M, ct)),
                        M = ct + P0;
                        continue
                    }
                    if (yt === "/") {
                        S = ct;
                        continue
                    }
                }
                yt === "[" ? H++ : yt === "]" ? H-- : yt === "(" ? Q++ : yt === ")" && Q--
            }
            const R = _.length === 0 ? T : T.substring(M),
                K = lv(R),
                W = K !== R,
                pt = S && S > M ? S - M : void 0;
            return {
                modifiers: _,
                hasImportantModifier: W,
                baseClassName: K,
                maybePostfixModifierPosition: pt
            }
        };
        if (p) {
            const T = p + Ds,
                _ = r;
            r = H => H.startsWith(T) ? _(H.substring(T.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: H,
                maybePostfixModifierPosition: void 0
            }
        }
        if (x) {
            const T = r;
            r = _ => x({
                className: _,
                parseClassName: T
            })
        }
        return r
    },
    lv = f => f.endsWith(Os) ? f.substring(0, f.length - 1) : f.startsWith(Os) ? f.substring(1) : f,
    ev = f => {
        const p = Object.fromEntries(f.orderSensitiveModifiers.map(r => [r, !0]));
        return r => {
            if (r.length <= 1)
                return r;
            const T = [];
            let _ = [];
            return r.forEach(H => {
                H[0] === "[" || p[H] ? (T.push(..._.sort(), H), _ = []) : _.push(H)
            }), T.push(..._.sort()), T
        }
    },
    av = f => ({
        cache: I0(f.cacheSize),
        parseClassName: tv(f),
        sortModifiers: ev(f),
        ...J0(f)
    }),
    nv = /\s+/,
    uv = (f, p) => {
        const {parseClassName: x, getClassGroupId: r, getConflictingClassGroupIds: T, sortModifiers: _} = p,
            H = [],
            Q = f.trim().split(nv);
        let M = "";
        for (let S = Q.length - 1; S >= 0; S -= 1) {
            const R = Q[S],
                {isExternal: K, modifiers: W, hasImportantModifier: pt, baseClassName: ct, maybePostfixModifierPosition: yt} = x(R);
            if (K) {
                M = R + (M.length > 0 ? " " + M : M);
                continue
            }
            let bt = !!yt,
                Wt = r(bt ? ct.substring(0, yt) : ct);
            if (!Wt) {
                if (!bt) {
                    M = R + (M.length > 0 ? " " + M : M);
                    continue
                }
                if (Wt = r(ct), !Wt) {
                    M = R + (M.length > 0 ? " " + M : M);
                    continue
                }
                bt = !1
            }
            const Ft = _(W).join(":"),
                At = pt ? Ft + Os : Ft,
                Bt = At + Wt;
            if (H.includes(Bt))
                continue;
            H.push(Bt);
            const $ = T(Wt, bt);
            for (let Et = 0; Et < $.length; ++Et) {
                const Ht = $[Et];
                H.push(At + Ht)
            }
            M = R + (M.length > 0 ? " " + M : M)
        }
        return M
    };
function iv() {
    let f = 0,
        p,
        x,
        r = "";
    for (; f < arguments.length;)
        (p = arguments[f++]) && (x = Id(p)) && (r && (r += " "), r += x);
    return r
}
const Id = f => {
    if (typeof f == "string")
        return f;
    let p,
        x = "";
    for (let r = 0; r < f.length; r++)
        f[r] && (p = Id(f[r])) && (x && (x += " "), x += p);
    return x
};
function cv(f, ...p) {
    let x,
        r,
        T,
        _ = H;
    function H(M) {
        const S = p.reduce((R, K) => K(R), f());
        return x = av(S), r = x.cache.get, T = x.cache.set, _ = Q, Q(M)
    }
    function Q(M) {
        const S = r(M);
        if (S)
            return S;
        const R = uv(M, x);
        return T(M, R), R
    }
    return function() {
        return _(iv.apply(null, arguments))
    }
}
const wt = f => {
        const p = x => x[f] || [];
        return p.isThemeGetter = !0, p
    },
    Pd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    th = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    sv = /^\d+\/\d+$/,
    fv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    rv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ov = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    dv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    hv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    qa = f => sv.test(f),
    I = f => !!f && !Number.isNaN(Number(f)),
    _e = f => !!f && Number.isInteger(Number(f)),
    Ts = f => f.endsWith("%") && I(f.slice(0, -1)),
    te = f => fv.test(f),
    mv = () => !0,
    vv = f => rv.test(f) && !ov.test(f),
    lh = () => !1,
    yv = f => dv.test(f),
    gv = f => hv.test(f),
    bv = f => !B(f) && !G(f),
    xv = f => Ya(f, nh, lh),
    B = f => Pd.test(f),
    We = f => Ya(f, uh, vv),
    js = f => Ya(f, Tv, I),
    Vd = f => Ya(f, eh, lh),
    pv = f => Ya(f, ah, gv),
    ai = f => Ya(f, ih, yv),
    G = f => th.test(f),
    Qn = f => Xa(f, uh),
    Sv = f => Xa(f, jv),
    Zd = f => Xa(f, eh),
    Nv = f => Xa(f, nh),
    Av = f => Xa(f, ah),
    ni = f => Xa(f, ih, !0),
    Ya = (f, p, x) => {
        const r = Pd.exec(f);
        return r ? r[1] ? p(r[1]) : x(r[2]) : !1
    },
    Xa = (f, p, x=!1) => {
        const r = th.exec(f);
        return r ? r[1] ? p(r[1]) : x : !1
    },
    eh = f => f === "position" || f === "percentage",
    ah = f => f === "image" || f === "url",
    nh = f => f === "length" || f === "size" || f === "bg-size",
    uh = f => f === "length",
    Tv = f => f === "number",
    jv = f => f === "family-name",
    ih = f => f === "shadow",
    zv = () => {
        const f = wt("color"),
            p = wt("font"),
            x = wt("text"),
            r = wt("font-weight"),
            T = wt("tracking"),
            _ = wt("leading"),
            H = wt("breakpoint"),
            Q = wt("container"),
            M = wt("spacing"),
            S = wt("radius"),
            R = wt("shadow"),
            K = wt("inset-shadow"),
            W = wt("text-shadow"),
            pt = wt("drop-shadow"),
            ct = wt("blur"),
            yt = wt("perspective"),
            bt = wt("aspect"),
            Wt = wt("ease"),
            Ft = wt("animate"),
            At = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            Bt = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            $ = () => [...Bt(), G, B],
            Et = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Ht = () => ["auto", "contain", "none"],
            X = () => [G, B, M],
            Dt = () => [qa, "full", "auto", ...X()],
            Bl = () => [_e, "none", "subgrid", G, B],
            gl = () => ["auto", {
                span: ["full", _e, G, B]
            }, _e, G, B],
            Mt = () => [_e, "auto", G, B],
            Dl = () => ["auto", "min", "max", "fr", G, B],
            El = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            St = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            N = () => ["auto", ...X()],
            U = () => [qa, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...X()],
            O = () => [f, G, B],
            st = () => [...Bt(), Zd, Vd, {
                position: [G, B]
            }],
            d = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            E = () => ["auto", "cover", "contain", Nv, xv, {
                size: [G, B]
            }],
            C = () => [Ts, Qn, We],
            D = () => ["", "none", "full", S, G, B],
            q = () => ["", I, Qn, We],
            tt = () => ["solid", "dashed", "dotted", "double"],
            k = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            nt = () => [I, Ts, Zd, Vd],
            mt = () => ["", "none", ct, G, B],
            al = () => ["none", I, G, B],
            ee = () => ["none", I, G, B],
            ae = () => [I, G, B],
            ne = () => [qa, "full", ...X()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [te],
                breakpoint: [te],
                color: [mv],
                container: [te],
                "drop-shadow": [te],
                ease: ["in", "out", "in-out"],
                font: [bv],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [te],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [te],
                shadow: [te],
                spacing: ["px", I],
                text: [te],
                "text-shadow": [te],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", qa, B, G, bt]
                }],
                container: ["container"],
                columns: [{
                    columns: [I, B, G, Q]
                }],
                "break-after": [{
                    "break-after": At()
                }],
                "break-before": [{
                    "break-before": At()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: $()
                }],
                overflow: [{
                    overflow: Et()
                }],
                "overflow-x": [{
                    "overflow-x": Et()
                }],
                "overflow-y": [{
                    "overflow-y": Et()
                }],
                overscroll: [{
                    overscroll: Ht()
                }],
                "overscroll-x": [{
                    "overscroll-x": Ht()
                }],
                "overscroll-y": [{
                    "overscroll-y": Ht()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: Dt()
                }],
                "inset-x": [{
                    "inset-x": Dt()
                }],
                "inset-y": [{
                    "inset-y": Dt()
                }],
                start: [{
                    start: Dt()
                }],
                end: [{
                    end: Dt()
                }],
                top: [{
                    top: Dt()
                }],
                right: [{
                    right: Dt()
                }],
                bottom: [{
                    bottom: Dt()
                }],
                left: [{
                    left: Dt()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [_e, "auto", G, B]
                }],
                basis: [{
                    basis: [qa, "full", "auto", Q, ...X()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [I, qa, "auto", "initial", "none", B]
                }],
                grow: [{
                    grow: ["", I, G, B]
                }],
                shrink: [{
                    shrink: ["", I, G, B]
                }],
                order: [{
                    order: [_e, "first", "last", "none", G, B]
                }],
                "grid-cols": [{
                    "grid-cols": Bl()
                }],
                "col-start-end": [{
                    col: gl()
                }],
                "col-start": [{
                    "col-start": Mt()
                }],
                "col-end": [{
                    "col-end": Mt()
                }],
                "grid-rows": [{
                    "grid-rows": Bl()
                }],
                "row-start-end": [{
                    row: gl()
                }],
                "row-start": [{
                    "row-start": Mt()
                }],
                "row-end": [{
                    "row-end": Mt()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Dl()
                }],
                "auto-rows": [{
                    "auto-rows": Dl()
                }],
                gap: [{
                    gap: X()
                }],
                "gap-x": [{
                    "gap-x": X()
                }],
                "gap-y": [{
                    "gap-y": X()
                }],
                "justify-content": [{
                    justify: [...El(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...St(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...St()]
                }],
                "align-content": [{
                    content: ["normal", ...El()]
                }],
                "align-items": [{
                    items: [...St(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...St(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": El()
                }],
                "place-items": [{
                    "place-items": [...St(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...St()]
                }],
                p: [{
                    p: X()
                }],
                px: [{
                    px: X()
                }],
                py: [{
                    py: X()
                }],
                ps: [{
                    ps: X()
                }],
                pe: [{
                    pe: X()
                }],
                pt: [{
                    pt: X()
                }],
                pr: [{
                    pr: X()
                }],
                pb: [{
                    pb: X()
                }],
                pl: [{
                    pl: X()
                }],
                m: [{
                    m: N()
                }],
                mx: [{
                    mx: N()
                }],
                my: [{
                    my: N()
                }],
                ms: [{
                    ms: N()
                }],
                me: [{
                    me: N()
                }],
                mt: [{
                    mt: N()
                }],
                mr: [{
                    mr: N()
                }],
                mb: [{
                    mb: N()
                }],
                ml: [{
                    ml: N()
                }],
                "space-x": [{
                    "space-x": X()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": X()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: U()
                }],
                w: [{
                    w: [Q, "screen", ...U()]
                }],
                "min-w": [{
                    "min-w": [Q, "screen", "none", ...U()]
                }],
                "max-w": [{
                    "max-w": [Q, "screen", "none", "prose", {
                        screen: [H]
                    }, ...U()]
                }],
                h: [{
                    h: ["screen", "lh", ...U()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...U()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...U()]
                }],
                "font-size": [{
                    text: ["base", x, Qn, We]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [r, G, js]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ts, B]
                }],
                "font-family": [{
                    font: [Sv, B, p]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [T, G, B]
                }],
                "line-clamp": [{
                    "line-clamp": [I, "none", G, js]
                }],
                leading: [{
                    leading: [_, ...X()]
                }],
                "list-image": [{
                    "list-image": ["none", G, B]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", G, B]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: O()
                }],
                "text-color": [{
                    text: O()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...tt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [I, "from-font", "auto", G, We]
                }],
                "text-decoration-color": [{
                    decoration: O()
                }],
                "underline-offset": [{
                    "underline-offset": [I, "auto", G, B]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: X()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G, B]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", G, B]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: st()
                }],
                "bg-repeat": [{
                    bg: d()
                }],
                "bg-size": [{
                    bg: E()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, _e, G, B],
                        radial: ["", G, B],
                        conic: [_e, G, B]
                    }, Av, pv]
                }],
                "bg-color": [{
                    bg: O()
                }],
                "gradient-from-pos": [{
                    from: C()
                }],
                "gradient-via-pos": [{
                    via: C()
                }],
                "gradient-to-pos": [{
                    to: C()
                }],
                "gradient-from": [{
                    from: O()
                }],
                "gradient-via": [{
                    via: O()
                }],
                "gradient-to": [{
                    to: O()
                }],
                rounded: [{
                    rounded: D()
                }],
                "rounded-s": [{
                    "rounded-s": D()
                }],
                "rounded-e": [{
                    "rounded-e": D()
                }],
                "rounded-t": [{
                    "rounded-t": D()
                }],
                "rounded-r": [{
                    "rounded-r": D()
                }],
                "rounded-b": [{
                    "rounded-b": D()
                }],
                "rounded-l": [{
                    "rounded-l": D()
                }],
                "rounded-ss": [{
                    "rounded-ss": D()
                }],
                "rounded-se": [{
                    "rounded-se": D()
                }],
                "rounded-ee": [{
                    "rounded-ee": D()
                }],
                "rounded-es": [{
                    "rounded-es": D()
                }],
                "rounded-tl": [{
                    "rounded-tl": D()
                }],
                "rounded-tr": [{
                    "rounded-tr": D()
                }],
                "rounded-br": [{
                    "rounded-br": D()
                }],
                "rounded-bl": [{
                    "rounded-bl": D()
                }],
                "border-w": [{
                    border: q()
                }],
                "border-w-x": [{
                    "border-x": q()
                }],
                "border-w-y": [{
                    "border-y": q()
                }],
                "border-w-s": [{
                    "border-s": q()
                }],
                "border-w-e": [{
                    "border-e": q()
                }],
                "border-w-t": [{
                    "border-t": q()
                }],
                "border-w-r": [{
                    "border-r": q()
                }],
                "border-w-b": [{
                    "border-b": q()
                }],
                "border-w-l": [{
                    "border-l": q()
                }],
                "divide-x": [{
                    "divide-x": q()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": q()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...tt(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...tt(), "hidden", "none"]
                }],
                "border-color": [{
                    border: O()
                }],
                "border-color-x": [{
                    "border-x": O()
                }],
                "border-color-y": [{
                    "border-y": O()
                }],
                "border-color-s": [{
                    "border-s": O()
                }],
                "border-color-e": [{
                    "border-e": O()
                }],
                "border-color-t": [{
                    "border-t": O()
                }],
                "border-color-r": [{
                    "border-r": O()
                }],
                "border-color-b": [{
                    "border-b": O()
                }],
                "border-color-l": [{
                    "border-l": O()
                }],
                "divide-color": [{
                    divide: O()
                }],
                "outline-style": [{
                    outline: [...tt(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [I, G, B]
                }],
                "outline-w": [{
                    outline: ["", I, Qn, We]
                }],
                "outline-color": [{
                    outline: O()
                }],
                shadow: [{
                    shadow: ["", "none", R, ni, ai]
                }],
                "shadow-color": [{
                    shadow: O()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", K, ni, ai]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": O()
                }],
                "ring-w": [{
                    ring: q()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: O()
                }],
                "ring-offset-w": [{
                    "ring-offset": [I, We]
                }],
                "ring-offset-color": [{
                    "ring-offset": O()
                }],
                "inset-ring-w": [{
                    "inset-ring": q()
                }],
                "inset-ring-color": [{
                    "inset-ring": O()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", W, ni, ai]
                }],
                "text-shadow-color": [{
                    "text-shadow": O()
                }],
                opacity: [{
                    opacity: [I, G, B]
                }],
                "mix-blend": [{
                    "mix-blend": [...k(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": k()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [I]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": nt()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": nt()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": O()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": O()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": nt()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": nt()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": O()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": O()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": nt()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": nt()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": O()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": O()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": nt()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": nt()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": O()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": O()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": nt()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": nt()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": O()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": O()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": nt()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": nt()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": O()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": O()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": nt()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": nt()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": O()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": O()
                }],
                "mask-image-radial": [{
                    "mask-radial": [G, B]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": nt()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": nt()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": O()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": O()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": Bt()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [I]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": nt()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": nt()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": O()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": O()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: st()
                }],
                "mask-repeat": [{
                    mask: d()
                }],
                "mask-size": [{
                    mask: E()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", G, B]
                }],
                filter: [{
                    filter: ["", "none", G, B]
                }],
                blur: [{
                    blur: mt()
                }],
                brightness: [{
                    brightness: [I, G, B]
                }],
                contrast: [{
                    contrast: [I, G, B]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", pt, ni, ai]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": O()
                }],
                grayscale: [{
                    grayscale: ["", I, G, B]
                }],
                "hue-rotate": [{
                    "hue-rotate": [I, G, B]
                }],
                invert: [{
                    invert: ["", I, G, B]
                }],
                saturate: [{
                    saturate: [I, G, B]
                }],
                sepia: [{
                    sepia: ["", I, G, B]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", G, B]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": mt()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [I, G, B]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [I, G, B]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", I, G, B]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [I, G, B]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", I, G, B]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [I, G, B]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [I, G, B]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", I, G, B]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": X()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": X()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": X()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", G, B]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [I, "initial", G, B]
                }],
                ease: [{
                    ease: ["linear", "initial", Wt, G, B]
                }],
                delay: [{
                    delay: [I, G, B]
                }],
                animate: [{
                    animate: ["none", Ft, G, B]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [yt, G, B]
                }],
                "perspective-origin": [{
                    "perspective-origin": $()
                }],
                rotate: [{
                    rotate: al()
                }],
                "rotate-x": [{
                    "rotate-x": al()
                }],
                "rotate-y": [{
                    "rotate-y": al()
                }],
                "rotate-z": [{
                    "rotate-z": al()
                }],
                scale: [{
                    scale: ee()
                }],
                "scale-x": [{
                    "scale-x": ee()
                }],
                "scale-y": [{
                    "scale-y": ee()
                }],
                "scale-z": [{
                    "scale-z": ee()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ae()
                }],
                "skew-x": [{
                    "skew-x": ae()
                }],
                "skew-y": [{
                    "skew-y": ae()
                }],
                transform: [{
                    transform: [G, B, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: $()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: ne()
                }],
                "translate-x": [{
                    "translate-x": ne()
                }],
                "translate-y": [{
                    "translate-y": ne()
                }],
                "translate-z": [{
                    "translate-z": ne()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: O()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: O()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G, B]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": X()
                }],
                "scroll-mx": [{
                    "scroll-mx": X()
                }],
                "scroll-my": [{
                    "scroll-my": X()
                }],
                "scroll-ms": [{
                    "scroll-ms": X()
                }],
                "scroll-me": [{
                    "scroll-me": X()
                }],
                "scroll-mt": [{
                    "scroll-mt": X()
                }],
                "scroll-mr": [{
                    "scroll-mr": X()
                }],
                "scroll-mb": [{
                    "scroll-mb": X()
                }],
                "scroll-ml": [{
                    "scroll-ml": X()
                }],
                "scroll-p": [{
                    "scroll-p": X()
                }],
                "scroll-px": [{
                    "scroll-px": X()
                }],
                "scroll-py": [{
                    "scroll-py": X()
                }],
                "scroll-ps": [{
                    "scroll-ps": X()
                }],
                "scroll-pe": [{
                    "scroll-pe": X()
                }],
                "scroll-pt": [{
                    "scroll-pt": X()
                }],
                "scroll-pr": [{
                    "scroll-pr": X()
                }],
                "scroll-pb": [{
                    "scroll-pb": X()
                }],
                "scroll-pl": [{
                    "scroll-pl": X()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", G, B]
                }],
                fill: [{
                    fill: ["none", ...O()]
                }],
                "stroke-w": [{
                    stroke: [I, Qn, We, js]
                }],
                stroke: [{
                    stroke: ["none", ...O()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Ev = cv(zv);
function $e(...f) {
    return Ev(Wd(f))
}
const Mv = $d("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function _v({className: f, variant: p, size: x, asChild: r=!1, ...T}) {
    const _ = r ? Kd : "button";
    return s.jsx(_, {
        "data-slot": "button",
        className: $e(Mv({
            variant: p,
            size: x,
            className: f
        })),
        ...T
    })
}
function hl({className: f, ...p}) {
    return s.jsx("div", {
        "data-slot": "card",
        className: $e("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", f),
        ...p
    })
}
function ml({className: f, ...p}) {
    return s.jsx("div", {
        "data-slot": "card-header",
        className: $e("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", f),
        ...p
    })
}
function vl({className: f, ...p}) {
    return s.jsx("div", {
        "data-slot": "card-title",
        className: $e("leading-none font-semibold", f),
        ...p
    })
}
function wa({className: f, ...p}) {
    return s.jsx("div", {
        "data-slot": "card-description",
        className: $e("text-muted-foreground text-sm", f),
        ...p
    })
}
function yl({className: f, ...p}) {
    return s.jsx("div", {
        "data-slot": "card-content",
        className: $e("px-6", f),
        ...p
    })
}
const Ov = $d("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Ba({className: f, variant: p, asChild: x=!1, ...r}) {
    const T = x ? Kd : "span";
    return s.jsx(T, {
        "data-slot": "badge",
        className: $e(Ov({
            variant: p
        }), f),
        ...r
    })
} /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Dv = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Rv = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (p, x, r) => r ? r.toUpperCase() : x.toLowerCase()),
    Ld = f => {
        const p = Rv(f);
        return p.charAt(0).toUpperCase() + p.slice(1)
    },
    ch = (...f) => f.filter((p, x, r) => !!p && p.trim() !== "" && r.indexOf(p) === x).join(" ").trim(),
    Uv = f => {
        for (const p in f)
            if (p.startsWith("aria-") || p === "role" || p === "title")
                return !0
    }; /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




var Hv = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
}; /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Cv = zt.forwardRef(({color: f="currentColor", size: p=24, strokeWidth: x=2, absoluteStrokeWidth: r, className: T="", children: _, iconNode: H, ...Q}, M) => zt.createElement("svg", {
    ref: M,
    ...Hv,
    width: p,
    height: p,
    stroke: f,
    strokeWidth: r ? Number(x) * 24 / Number(p) : x,
    className: ch("lucide", T),
    ...!_ && !Uv(Q) && {
        "aria-hidden": "true"
    },
    ...Q
}, [...H.map(([S, R]) => zt.createElement(S, R)), ...Array.isArray(_) ? _ : [_]])); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Oe = (f, p) => {
    const x = zt.forwardRef(({className: r, ...T}, _) => zt.createElement(Cv, {
        ref: _,
        iconNode: p,
        className: ch(`lucide-${Dv(Ld(f))}`, `lucide-${f}`, r),
        ...T
    }));
    return x.displayName = Ld(f), x
}; /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const qv = [["path", {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv"
    }], ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }]],
    zs = Oe("award", qv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const wv = [["path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
    }], ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]],
    le = Oe("circle-check-big", wv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Bv = [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]],
    Gv = Oe("clock", Bv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Yv = [["path", {
        d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
        key: "132q7q"
    }], ["rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2",
        key: "izxlao"
    }]],
    Xv = Oe("mail", Yv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Qv = [["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }], ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]],
    Ga = Oe("map-pin", Qv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Vv = [["path", {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v"
    }]],
    Zv = Oe("phone", Vv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const Lv = [["path", {
        d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
        key: "wrbu53"
    }], ["path", {
        d: "M15 18H9",
        key: "1lyqi6"
    }], ["path", {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
        key: "lysw3i"
    }], ["circle", {
        cx: "17",
        cy: "18",
        r: "2",
        key: "332jqn"
    }], ["circle", {
        cx: "7",
        cy: "18",
        r: "2",
        key: "19iecd"
    }]],
    Es = Oe("truck", Lv); /**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */




const kv = [["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }], ["path", {
        d: "M16 3.128a4 4 0 0 1 0 7.744",
        key: "16gr8j"
    }], ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }], ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }]],
    kd = Oe("users", kv),
    Ms = "/assets/HITABHUKLOGO-CW2ZiK-s.jpg";
function Kv() {
    return s.jsxs("div", {
        className: "min-h-screen bg-white",
        children: [s.jsx("header", {
            className: "bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50",
            children: s.jsx("div", {
                className: "container mx-auto px-4 py-4",
                children: s.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [s.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [s.jsx("img", {
                            src: Ms,
                            alt: "Hitabhuk Logo",
                            className: "h-12 w-12 object-contain"
                        }), s.jsxs("div", {
                            children: [s.jsx("h1", {
                                className: "text-2xl font-bold text-hitabhuk-green",
                                children: "Hitabhuk"
                            }), s.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: "Premium South Indian Foods"
                            })]
                        })]
                    }), s.jsxs("nav", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [s.jsx("a", {
                            href: "#home",
                            className: "text-gray-700 hover:text-hitabhuk-green transition-colors",
                            children: "Home"
                        }), s.jsx("a", {
                            href: "#about",
                            className: "text-gray-700 hover:text-hitabhuk-green transition-colors",
                            children: "About"
                        }), s.jsx("a", {
                            href: "#products",
                            className: "text-gray-700 hover:text-hitabhuk-green transition-colors",
                            children: "Products"
                        }), s.jsx("a", {
                            href: "#services",
                            className: "text-gray-700 hover:text-hitabhuk-green transition-colors",
                            children: "Services"
                        }), s.jsx("a", {
                            href: "#contact",
                            className: "text-gray-700 hover:text-hitabhuk-green transition-colors",
                            children: "Contact"
                        })]
                    }), s.jsx("div", {
                        className: "flex items-center space-x-4",
                        children: s.jsxs("div", {
                            className: "hidden md:block text-right",
                            children: [s.jsx("p", {
                                className: "text-sm font-semibold text-hitabhuk-green",
                                children: "+91 8699935361"
                            }), s.jsx("p", {
                                className: "text-xs text-gray-600",
                                children: "Wholesale Inquiries"
                            })]
                        })
                    })]
                })
            })
        }), s.jsx("section", {
            id: "home",
            className: "hero-gradient text-white py-20",
            children: s.jsx("div", {
                className: "container mx-auto px-4",
                children: s.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("h2", {
                            className: "text-5xl font-bold mb-6 leading-tight",
                            children: ["Transforming Wholesale", s.jsx("span", {
                                className: "block text-hitabhuk-gold",
                                children: "South Indian Food"
                            }), "Distribution"]
                        }), s.jsx("p", {
                            className: "text-xl mb-8 opacity-90",
                            children: "Premium Ayurvedic-inspired South Indian cuisine from our central cloud kitchen in Chandigarh, serving the tri-city area with uncompromising quality and freshness."
                        }), s.jsx("div", {
                            className: "flex flex-col sm:flex-row gap-4"
                        })]
                    }), s.jsx("div", {
                        className: "relative",
                        children: s.jsx("div", {
                            className: "diamond-shape w-80 h-80 bg-white/10 backdrop-blur-sm mx-auto",
                            children: s.jsx("div", {
                                className: "diamond-content w-full h-full flex items-center justify-center",
                                children: s.jsx("img", {
                                    src: Ms,
                                    alt: "Hitabhuk Products",
                                    className: "w-48 h-48 object-contain"
                                })
                            })
                        })
                    })]
                })
            })
        }), s.jsx("section", {
            className: "py-16 bg-gray-50",
            children: s.jsx("div", {
                className: "container mx-auto px-4",
                children: s.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: [s.jsxs("div", {
                        className: "text-center",
                        children: [s.jsx("div", {
                            className: "text-4xl font-bold text-hitabhuk-green mb-2",
                            children: "15000+"
                        }), s.jsx("p", {
                            className: "text-gray-600",
                            children: "Production Units/Day"
                        })]
                    }), s.jsxs("div", {
                        className: "text-center",
                        children: [s.jsx("div", {
                            className: "text-4xl font-bold text-hitabhuk-orange mb-2",
                            children: "99.9%"
                        }), s.jsx("p", {
                            className: "text-gray-600",
                            children: "Timely Supply"
                        })]
                    }), s.jsxs("div", {
                        className: "text-center",
                        children: [s.jsx("div", {
                            className: "text-4xl font-bold text-hitabhuk-green mb-2",
                            children: "50+"
                        }), s.jsx("p", {
                            className: "text-gray-600",
                            children: "Wholesale Partners"
                        })]
                    }), s.jsxs("div", {
                        className: "text-center",
                        children: [s.jsx("div", {
                            className: "text-4xl font-bold text-hitabhuk-orange mb-2",
                            children: "1-7"
                        }), s.jsx("p", {
                            className: "text-gray-600",
                            children: "Days Shelf Life"
                        })]
                    })]
                })
            })
        }), s.jsx("section", {
            id: "about",
            className: "py-20",
            children: s.jsxs("div", {
                className: "container mx-auto px-4",
                children: [s.jsxs("div", {
                    className: "text-center mb-16",
                    children: [s.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "About Hitabhuk"
                    }), s.jsx("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: "Scalable, Efficient, and Customer-focused Approach to South Indian Food Distribution"
                    })]
                }), s.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center mb-16",
                    children: [s.jsxs("div", {
                        children: [s.jsx("h3", {
                            className: "text-3xl font-bold text-hitabhuk-green mb-6",
                            children: "Our Story"
                        }), s.jsx("p", {
                            className: "text-gray-700 mb-6",
                            children: "The founding team includes four experienced professionals from diverse fields. The doctor, a two-time Ironman finisher, brings deep knowledge in critical care and overall wellness. Alongside him are a serial entrepreneur with strong business experience, an IT professional with a solid tech background, and a computer science expert with a strong academic and technical foundation."
                        }), s.jsx("p", {
                            className: "text-gray-700",
                            children: "Together, they combine their strengths in health, business, and technology to drive the venture forward, revolutionizing the wholesale food industry with health-focused, premium quality South Indian cuisine."
                        })]
                    }), s.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [s.jsxs(hl, {
                            className: "food-card-hover",
                            children: [s.jsxs(ml, {
                                className: "pb-3",
                                children: [s.jsx(zs, {
                                    className: "h-8 w-8 text-hitabhuk-orange mb-2"
                                }), s.jsx(vl, {
                                    className: "text-lg",
                                    children: "Premium Quality"
                                })]
                            }), s.jsx(yl, {
                                children: s.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "100% Natural ingredients with Ayurvedic principles"
                                })
                            })]
                        }), s.jsxs(hl, {
                            className: "food-card-hover",
                            children: [s.jsxs(ml, {
                                className: "pb-3",
                                children: [s.jsx(kd, {
                                    className: "h-8 w-8 text-hitabhuk-green mb-2"
                                }), s.jsx(vl, {
                                    className: "text-lg",
                                    children: "Expert Team"
                                })]
                            }), s.jsx(yl, {
                                children: s.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Diverse expertise in health, business & technology"
                                })
                            })]
                        }), s.jsxs(hl, {
                            className: "food-card-hover",
                            children: [s.jsxs(ml, {
                                className: "pb-3",
                                children: [s.jsx(Es, {
                                    className: "h-8 w-8 text-hitabhuk-orange mb-2"
                                }), s.jsx(vl, {
                                    className: "text-lg",
                                    children: "Fresh Delivery"
                                })]
                            }), s.jsx(yl, {
                                children: s.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Daily fresh distribution across tri-city area"
                                })
                            })]
                        }), s.jsxs(hl, {
                            className: "food-card-hover",
                            children: [s.jsxs(ml, {
                                className: "pb-3",
                                children: [s.jsx(le, {
                                    className: "h-8 w-8 text-hitabhuk-green mb-2"
                                }), s.jsx(vl, {
                                    className: "text-lg",
                                    children: "Quality Assured"
                                })]
                            }), s.jsx(yl, {
                                children: s.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Rigorous QC processes ensure consistent taste"
                                })
                            })]
                        })]
                    })]
                })]
            })
        }), s.jsx("section", {
            id: "products",
            className: "py-20 bg-gray-50",
            children: s.jsxs("div", {
                className: "container mx-auto px-4",
                children: [s.jsxs("div", {
                    className: "text-center mb-16",
                    children: [s.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "Our Product Portfolio"
                    }), s.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Authentic South Indian delicacies crafted with Ayurvedic principles"
                    })]
                }), s.jsxs("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: [s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Idli Vada Super Combo"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹3000"
                                })]
                            }), s.jsx(wa, {
                                children: "100 Idlis + 50 Vada + 15L Sambar + Chutney"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Perfect for large-scale catering and restaurants"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Wholesale Price"]
                            })]
                        })]
                    }), s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Vada with Sambar"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹1250"
                                })]
                            }), s.jsx(wa, {
                                children: "50 Vada + 5L Sambar"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Crispy vadas with authentic sambar"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Fresh Daily"]
                            })]
                        })]
                    }), s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Masala Mini Idlis"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹2000"
                                })]
                            }), s.jsx(wa, {
                                children: "200 Mini Idlis + Pudi + Ghee"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Bite-sized idlis with traditional spice mix"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Premium Ghee"]
                            })]
                        })]
                    }), s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Idli + Vada Combo"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹2000"
                                })]
                            }), s.jsx(wa, {
                                children: "50 Idlis + 25 Vada + 7.5L Sambar + Chutney"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Perfect balance of idli and vada"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Complete Meal"]
                            })]
                        })]
                    }), s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Masala Dosa Combo"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹2500"
                                })]
                            }), s.jsx(wa, {
                                children: "5L Batter + Potato Filling + Chutney + Sambar"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Complete dosa setup with training"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Training Included"]
                            })]
                        })]
                    }), s.jsxs(hl, {
                        className: "food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [s.jsx(vl, {
                                    className: "text-hitabhuk-green",
                                    children: "Uttapam Combo"
                                }), s.jsx(Ba, {
                                    className: "bg-hitabhuk-orange text-white",
                                    children: "₹2500"
                                })]
                            }), s.jsx(wa, {
                                children: "5L Batter + Chutney + Sambar"
                            })]
                        }), s.jsxs(yl, {
                            children: [s.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Thick pancake-style South Indian delight"
                            }), s.jsxs("div", {
                                className: "flex items-center text-sm text-hitabhuk-green",
                                children: [s.jsx(le, {
                                    className: "h-4 w-4 mr-2"
                                }), "Training Provided"]
                            })]
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "text-center mt-12",
                    children: [s.jsx("p", {
                        className: "text-lg text-gray-700 mb-4",
                        children: "We provide higher discounts for 500+ Units/day and 1000+ Units/day orders"
                    }), s.jsx(_v, {
                        className: "bg-hitabhuk-green hover:bg-green-700 text-white",
                        children: "Contact Sales Team for Bulk Pricing"
                    })]
                })]
            })
        }), s.jsx("section", {
            id: "services",
            className: "py-20",
            children: s.jsxs("div", {
                className: "container mx-auto px-4",
                children: [s.jsxs("div", {
                    className: "text-center mb-16",
                    children: [s.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "Our Services"
                    }), s.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "End-to-end wholesale food distribution solutions"
                    })]
                }), s.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-16",
                    children: [s.jsxs(hl, {
                        className: "text-center food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-hitabhuk-green/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(zs, {
                                    className: "h-8 w-8 text-hitabhuk-green"
                                })
                            }), s.jsx(vl, {
                                children: "Central Production"
                            })]
                        }), s.jsx(yl, {
                            children: s.jsx("p", {
                                className: "text-gray-600",
                                children: "Automated cloud kitchen with minimal human intervention ensures consistent quality and optimal efficiency"
                            })
                        })]
                    }), s.jsxs(hl, {
                        className: "text-center food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-hitabhuk-orange/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(le, {
                                    className: "h-8 w-8 text-hitabhuk-orange"
                                })
                            }), s.jsx(vl, {
                                children: "Quality Assurance"
                            })]
                        }), s.jsx(yl, {
                            children: s.jsx("p", {
                                className: "text-gray-600",
                                children: "Rigorous QC processes ensure consistent taste and quality across all products and deliveries"
                            })
                        })]
                    }), s.jsxs(hl, {
                        className: "text-center food-card-hover",
                        children: [s.jsxs(ml, {
                            children: [s.jsx("div", {
                                className: "w-16 h-16 bg-hitabhuk-green/10 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: s.jsx(Es, {
                                    className: "h-8 w-8 text-hitabhuk-green"
                                })
                            }), s.jsx(vl, {
                                children: "Fresh Distribution"
                            })]
                        }), s.jsx(yl, {
                            children: s.jsx("p", {
                                className: "text-gray-600",
                                children: "Daily delivery to retail partners across the tri-city area with guaranteed freshness"
                            })
                        })]
                    })]
                }), s.jsx("div", {
                    className: "bg-hitabhuk-green/5 rounded-lg p-8",
                    children: s.jsxs("div", {
                        className: "grid md:grid-cols-2 gap-8 items-center",
                        children: [s.jsxs("div", {
                            children: [s.jsx("h3", {
                                className: "text-2xl font-bold text-hitabhuk-green mb-4",
                                children: "Coverage Area"
                            }), s.jsxs("ul", {
                                className: "space-y-2",
                                children: [s.jsxs("li", {
                                    className: "flex items-center",
                                    children: [s.jsx(Ga, {
                                        className: "h-5 w-5 text-hitabhuk-orange mr-3"
                                    }), s.jsx("span", {
                                        children: "Chandigarh"
                                    })]
                                }), s.jsxs("li", {
                                    className: "flex items-center",
                                    children: [s.jsx(Ga, {
                                        className: "h-5 w-5 text-hitabhuk-orange mr-3"
                                    }), s.jsx("span", {
                                        children: "Panchkula"
                                    })]
                                }), s.jsxs("li", {
                                    className: "flex items-center",
                                    children: [s.jsx(Ga, {
                                        className: "h-5 w-5 text-hitabhuk-orange mr-3"
                                    }), s.jsx("span", {
                                        children: "Mohali"
                                    })]
                                }), s.jsxs("li", {
                                    className: "flex items-center",
                                    children: [s.jsx(Ga, {
                                        className: "h-5 w-5 text-hitabhuk-orange mr-3"
                                    }), s.jsx("span", {
                                        children: "Zirakpur"
                                    })]
                                }), s.jsxs("li", {
                                    className: "flex items-center",
                                    children: [s.jsx(Ga, {
                                        className: "h-5 w-5 text-hitabhuk-orange mr-3"
                                    }), s.jsx("span", {
                                        children: "New Chandigarh"
                                    })]
                                })]
                            })]
                        }), s.jsxs("div", {
                            children: [s.jsx("h3", {
                                className: "text-2xl font-bold text-hitabhuk-green mb-4",
                                children: "Target Partners"
                            }), s.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [s.jsxs("div", {
                                    className: "bg-white p-4 rounded-lg",
                                    children: [s.jsx(kd, {
                                        className: "h-6 w-6 text-hitabhuk-orange mb-2"
                                    }), s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Hotels & Restaurants"
                                    })]
                                }), s.jsxs("div", {
                                    className: "bg-white p-4 rounded-lg",
                                    children: [s.jsx(zs, {
                                        className: "h-6 w-6 text-hitabhuk-orange mb-2"
                                    }), s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Canteens"
                                    })]
                                }), s.jsxs("div", {
                                    className: "bg-white p-4 rounded-lg",
                                    children: [s.jsx(Es, {
                                        className: "h-6 w-6 text-hitabhuk-orange mb-2"
                                    }), s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Caterers"
                                    })]
                                }), s.jsxs("div", {
                                    className: "bg-white p-4 rounded-lg",
                                    children: [s.jsx(le, {
                                        className: "h-6 w-6 text-hitabhuk-orange mb-2"
                                    }), s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Franchises"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        }), s.jsx("section", {
            id: "contact",
            className: "py-20 bg-gray-50",
            children: s.jsxs("div", {
                className: "container mx-auto px-4",
                children: [s.jsxs("div", {
                    className: "text-center mb-16",
                    children: [s.jsx("h2", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "Get In Touch"
                    }), s.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "Ready to start your wholesale partnership?"
                    })]
                }), s.jsx("div", {
                    className: "grid md:grid-cols-2 gap-12",
                    children: s.jsxs("div", {
                        children: [s.jsx("h3", {
                            className: "text-2xl font-bold text-hitabhuk-green mb-6",
                            children: "Contact Information"
                        }), s.jsxs("div", {
                            className: "space-y-6",
                            children: [s.jsxs("div", {
                                className: "flex items-start",
                                children: [s.jsx(Zv, {
                                    className: "h-6 w-6 text-hitabhuk-orange mt-1 mr-4"
                                }), s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Phone Numbers"
                                    }), s.jsx("p", {
                                        className: "text-gray-600",
                                        children: "+91 8699935361"
                                    }), s.jsx("p", {
                                        className: "text-gray-600",
                                        children: "+91 9686450101"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start",
                                children: [s.jsx(Xv, {
                                    className: "h-6 w-6 text-hitabhuk-orange mt-1 mr-4"
                                }), s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Website"
                                    }), s.jsx("p", {
                                        className: "text-gray-600",
                                        children: "www.sizzleaf.com"
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start",
                                children: [s.jsx(Ga, {
                                    className: "h-6 w-6 text-hitabhuk-orange mt-1 mr-4"
                                }), s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Address"
                                    }), s.jsxs("p", {
                                        className: "text-gray-600",
                                        children: ["Plot No. 361, K-16, Industrial Area Phase 1,", s.jsx("br", {}), "Chandigarh - 160002"]
                                    })]
                                })]
                            }), s.jsxs("div", {
                                className: "flex items-start",
                                children: [s.jsx(Gv, {
                                    className: "h-6 w-6 text-hitabhuk-orange mt-1 mr-4"
                                }), s.jsxs("div", {
                                    children: [s.jsx("p", {
                                        className: "font-semibold",
                                        children: "Delivery Schedule"
                                    }), s.jsx("p", {
                                        className: "text-gray-600",
                                        children: "Fresh Daily Delivery Across Tri-City Area"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            })
        }), s.jsx("footer", {
            className: "bg-hitabhuk-green text-white py-12",
            children: s.jsxs("div", {
                className: "container mx-auto px-4",
                children: [s.jsxs("div", {
                    className: "grid md:grid-cols-4 gap-8",
                    children: [s.jsxs("div", {
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-3 mb-4",
                            children: [s.jsx("img", {
                                src: Ms,
                                alt: "Hitabhuk Logo",
                                className: "h-10 w-10 object-contain bg-white rounded p-1"
                            }), s.jsxs("div", {
                                children: [s.jsx("h3", {
                                    className: "text-xl font-bold",
                                    children: "Hitabhuk"
                                }), s.jsx("p", {
                                    className: "text-sm opacity-80",
                                    children: "Foods LLP"
                                })]
                            })]
                        }), s.jsx("p", {
                            className: "text-sm opacity-80 mb-4",
                            children: "Premium South Indian wholesale food distribution with health-focused, Ayurvedic-inspired cuisine."
                        }), s.jsx("p", {
                            className: "text-sm opacity-80",
                            children: `"Dosa, Idli, Batter, it doesn't really matter"`
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsx("h4", {
                            className: "text-lg font-semibold mb-4",
                            children: "Quick Links"
                        }), s.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [s.jsx("li", {
                                children: s.jsx("a", {
                                    href: "#home",
                                    className: "opacity-80 hover:opacity-100 transition-opacity",
                                    children: "Home"
                                })
                            }), s.jsx("li", {
                                children: s.jsx("a", {
                                    href: "#about",
                                    className: "opacity-80 hover:opacity-100 transition-opacity",
                                    children: "About Us"
                                })
                            }), s.jsx("li", {
                                children: s.jsx("a", {
                                    href: "#products",
                                    className: "opacity-80 hover:opacity-100 transition-opacity",
                                    children: "Products"
                                })
                            }), s.jsx("li", {
                                children: s.jsx("a", {
                                    href: "#services",
                                    className: "opacity-80 hover:opacity-100 transition-opacity",
                                    children: "Services"
                                })
                            }), s.jsx("li", {
                                children: s.jsx("a", {
                                    href: "#contact",
                                    className: "opacity-80 hover:opacity-100 transition-opacity",
                                    children: "Contact"
                                })
                            })]
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsx("h4", {
                            className: "text-lg font-semibold mb-4",
                            children: "Products"
                        }), s.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [s.jsx("li", {
                                className: "opacity-80",
                                children: "Idli Vada Combos"
                            }), s.jsx("li", {
                                className: "opacity-80",
                                children: "Masala Dosa Batter"
                            }), s.jsx("li", {
                                className: "opacity-80",
                                children: "Uttapam Combos"
                            }), s.jsx("li", {
                                className: "opacity-80",
                                children: "Sambar & Chutneys"
                            }), s.jsx("li", {
                                className: "opacity-80",
                                children: "Custom Variations"
                            })]
                        })]
                    }), s.jsxs("div", {
                        children: [s.jsx("h4", {
                            className: "text-lg font-semibold mb-4",
                            children: "Contact Info"
                        }), s.jsxs("div", {
                            className: "space-y-2 text-sm",
                            children: [s.jsx("p", {
                                className: "opacity-80",
                                children: "Plot No. 361, K-16"
                            }), s.jsx("p", {
                                className: "opacity-80",
                                children: "Industrial Area Phase 1"
                            }), s.jsx("p", {
                                className: "opacity-80",
                                children: "Chandigarh - 160002"
                            }), s.jsx("p", {
                                className: "opacity-80 mt-3",
                                children: "+91 8699935361"
                            }), s.jsx("p", {
                                className: "opacity-80",
                                children: "+91 9686450101"
                            }), s.jsx("p", {
                                className: "opacity-80 mt-3",
                                children: "www.sizzleaf.com"
                            })]
                        })]
                    })]
                }), s.jsx("div", {
                    className: "border-t border-white/20 mt-8 pt-8 text-center",
                    children: s.jsx("p", {
                        className: "text-sm opacity-80",
                        children: "© 2025 Hitabhuk Foods LLP. All rights reserved. | Transforming Wholesale South Indian Food Distribution"
                    })
                })]
            })
        })]
    })
}
G0.createRoot(document.getElementById("root")).render(s.jsx(zt.StrictMode, {
    children: s.jsx(Kv, {})
}));
