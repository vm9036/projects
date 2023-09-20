/*!
	Papa Parse
	v4.3.2
	https://github.com/mholt/PapaParse
*/
(function(G, H) {
    typeof define == "function" && define.amd ? define([], H) : typeof module == "object" && module.exports ? module.exports = H() : G.Papa = H()
}
)(this, function() {
    "use strict";
    function G(e, t) {
        t = t || {};
        var i = t.dynamicTyping || !1;
        if (v(i) && (t.dynamicTypingFunction = i,
        i = {}),
        t.dynamicTyping = i,
        t.worker && u.WORKERS_SUPPORTED) {
            var n = re();
            return n.userStep = t.step,
            n.userChunk = t.chunk,
            n.userComplete = t.complete,
            n.userError = t.error,
            t.step = v(t.step),
            t.chunk = v(t.chunk),
            t.complete = v(t.complete),
            t.error = v(t.error),
            delete t.worker,
            void n.postMessage({
                input: e,
                config: t,
                workerId: n.id
            })
        }
        var s = null;
        return typeof e == "string" ? s = t.download ? new K(t) : new q(t) : e.readable === !0 && v(e.read) && v(e.on) ? s = new W(t) : (S.File && e instanceof File || e instanceof Object) && (s = new N(t)),
        s.stream(e)
    }
    function H(e, t) {
        function i() {
            typeof t == "object" && (typeof t.delimiter == "string" && t.delimiter.length === 1 && u.BAD_DELIMITERS.indexOf(t.delimiter) === -1 && (E = t.delimiter),
            (typeof t.quotes == "boolean" || t.quotes instanceof Array) && (p = t.quotes),
            typeof t.newline == "string" && (c = t.newline),
            typeof t.quoteChar == "string" && (x = t.quoteChar),
            typeof t.header == "boolean" && (o = t.header))
        }
        function n(f) {
            if (typeof f != "object")
                return [];
            var m = [];
            for (var y in f)
                m.push(y);
            return m
        }
        function s(f, m) {
            var y = "";
            typeof f == "string" && (f = JSON.parse(f)),
            typeof m == "string" && (m = JSON.parse(m));
            var k = f instanceof Array && f.length > 0
              , D = !(m[0]instanceof Array);
            if (k && o) {
                for (var z = 0; z < f.length; z++)
                    z > 0 && (y += E),
                    y += h(f[z], z);
                m.length > 0 && (y += c)
            }
            for (var R = 0; R < m.length; R++) {
                for (var d = k ? f.length : m[R].length, L = 0; L < d; L++) {
                    L > 0 && (y += E);
                    var r = k && D ? f[L] : L;
                    y += h(m[R][r], L)
                }
                R < m.length - 1 && (y += c)
            }
            return y
        }
        function h(f, m) {
            if (typeof f == "undefined" || f === null)
                return "";
            f = f.toString().replace(T, x + x);
            var y = typeof p == "boolean" && p || p instanceof Array && p[m] || l(f, u.BAD_DELIMITERS) || f.indexOf(E) > -1 || f.charAt(0) === " " || f.charAt(f.length - 1) === " ";
            return y ? x + f + x : f
        }
        function l(f, m) {
            for (var y = 0; y < m.length; y++)
                if (f.indexOf(m[y]) > -1)
                    return !0;
            return !1
        }
        var p = !1
          , o = !0
          , E = ","
          , c = "\r\n"
          , x = '"';
        i();
        var T = new RegExp(x,"g");
        if (typeof e == "string" && (e = JSON.parse(e)),
        e instanceof Array) {
            if (!e.length || e[0]instanceof Array)
                return s(null, e);
            if (typeof e[0] == "object")
                return s(n(e[0]), e)
        } else if (typeof e == "object")
            return typeof e.data == "string" && (e.data = JSON.parse(e.data)),
            e.data instanceof Array && (e.fields || (e.fields = e.meta && e.meta.fields),
            e.fields || (e.fields = e.data[0]instanceof Array ? e.fields : n(e.data[0])),
            e.data[0]instanceof Array || typeof e.data[0] == "object" || (e.data = [e.data])),
            s(e.fields || [], e.data || []);
        throw "exception: Unable to serialize unrecognized input"
    }
    function F(e) {
        function t(i) {
            var n = $(i);
            n.chunkSize = parseInt(n.chunkSize),
            i.step || i.chunk || (n.chunkSize = null),
            this._handle = new Z(n),
            this._handle.streamer = this,
            this._config = n
        }
        this._handle = null,
        this._paused = !1,
        this._finished = !1,
        this._input = null,
        this._baseIndex = 0,
        this._partialLine = "",
        this._rowCount = 0,
        this._start = 0,
        this._nextChunk = null,
        this.isFirstChunk = !0,
        this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        },
        t.call(this, e),
        this.parseChunk = function(i) {
            if (this.isFirstChunk && v(this._config.beforeFirstChunk)) {
                var n = this._config.beforeFirstChunk(i);
                n !== void 0 && (i = n)
            }
            this.isFirstChunk = !1;
            var s = this._partialLine + i;
            this._partialLine = "";
            var h = this._handle.parse(s, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var l = h.meta.cursor;
                this._finished || (this._partialLine = s.substring(l - this._baseIndex),
                this._baseIndex = l),
                h && h.data && (this._rowCount += h.data.length);
                var p = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (X)
                    S.postMessage({
                        results: h,
                        workerId: u.WORKER_ID,
                        finished: p
                    });
                else if (v(this._config.chunk)) {
                    if (this._config.chunk(h, this._handle),
                    this._paused)
                        return;
                    h = void 0,
                    this._completeResults = void 0
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(h.data),
                this._completeResults.errors = this._completeResults.errors.concat(h.errors),
                this._completeResults.meta = h.meta),
                !p || !v(this._config.complete) || h && h.meta.aborted || this._config.complete(this._completeResults, this._input),
                p || h && h.meta.paused || this._nextChunk(),
                h
            }
        }
        ,
        this._sendError = function(i) {
            v(this._config.error) ? this._config.error(i) : X && this._config.error && S.postMessage({
                workerId: u.WORKER_ID,
                error: i,
                finished: !1
            })
        }
    }
    function K(e) {
        function t(n) {
            var s = n.getResponseHeader("Content-Range");
            return s === null ? -1 : parseInt(s.substr(s.lastIndexOf("/") + 1))
        }
        e = e || {},
        e.chunkSize || (e.chunkSize = u.RemoteChunkSize),
        F.call(this, e);
        var i;
        U ? this._nextChunk = function() {
            this._readChunk(),
            this._chunkLoaded()
        }
        : this._nextChunk = function() {
            this._readChunk()
        }
        ,
        this.stream = function(n) {
            this._input = n,
            this._nextChunk()
        }
        ,
        this._readChunk = function() {
            if (this._finished)
                return void this._chunkLoaded();
            if (i = new XMLHttpRequest,
            this._config.withCredentials && (i.withCredentials = this._config.withCredentials),
            U || (i.onload = M(this._chunkLoaded, this),
            i.onerror = M(this._chunkError, this)),
            i.open("GET", this._input, !U),
            this._config.downloadRequestHeaders) {
                var n = this._config.downloadRequestHeaders;
                for (var s in n)
                    i.setRequestHeader(s, n[s])
            }
            if (this._config.chunkSize) {
                var h = this._start + this._config.chunkSize - 1;
                i.setRequestHeader("Range", "bytes=" + this._start + "-" + h),
                i.setRequestHeader("If-None-Match", "webkit-no-cache")
            }
            try {
                i.send()
            } catch (l) {
                this._chunkError(l.message)
            }
            U && i.status === 0 ? this._chunkError() : this._start += this._config.chunkSize
        }
        ,
        this._chunkLoaded = function() {
            if (i.readyState == 4) {
                if (i.status < 200 || i.status >= 400)
                    return void this._chunkError();
                this._finished = !this._config.chunkSize || this._start > t(i),
                this.parseChunk(i.responseText)
            }
        }
        ,
        this._chunkError = function(n) {
            var s = i.statusText || n;
            this._sendError(s)
        }
    }
    function N(e) {
        e = e || {},
        e.chunkSize || (e.chunkSize = u.LocalChunkSize),
        F.call(this, e);
        var t, i, n = typeof FileReader != "undefined";
        this.stream = function(s) {
            this._input = s,
            i = s.slice || s.webkitSlice || s.mozSlice,
            n ? (t = new FileReader,
            t.onload = M(this._chunkLoaded, this),
            t.onerror = M(this._chunkError, this)) : t = new FileReaderSync,
            this._nextChunk()
        }
        ,
        this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
        }
        ,
        this._readChunk = function() {
            var s = this._input;
            if (this._config.chunkSize) {
                var h = Math.min(this._start + this._config.chunkSize, this._input.size);
                s = i.call(s, this._start, h)
            }
            var l = t.readAsText(s, this._config.encoding);
            n || this._chunkLoaded({
                target: {
                    result: l
                }
            })
        }
        ,
        this._chunkLoaded = function(s) {
            this._start += this._config.chunkSize,
            this._finished = !this._config.chunkSize || this._start >= this._input.size,
            this.parseChunk(s.target.result)
        }
        ,
        this._chunkError = function() {
            this._sendError(t.error)
        }
    }
    function q(e) {
        e = e || {},
        F.call(this, e);
        var t, i;
        this.stream = function(n) {
            return t = n,
            i = n,
            this._nextChunk()
        }
        ,
        this._nextChunk = function() {
            if (!this._finished) {
                var n = this._config.chunkSize
                  , s = n ? i.substr(0, n) : i;
                return i = n ? i.substr(n) : "",
                this._finished = !i,
                this.parseChunk(s)
            }
        }
    }
    function W(e) {
        e = e || {},
        F.call(this, e);
        var t = []
          , i = !0;
        this.stream = function(n) {
            this._input = n,
            this._input.on("data", this._streamData),
            this._input.on("end", this._streamEnd),
            this._input.on("error", this._streamError)
        }
        ,
        this._nextChunk = function() {
            t.length ? this.parseChunk(t.shift()) : i = !0
        }
        ,
        this._streamData = M(function(n) {
            try {
                t.push(typeof n == "string" ? n : n.toString(this._config.encoding)),
                i && (i = !1,
                this.parseChunk(t.shift()))
            } catch (s) {
                this._streamError(s)
            }
        }, this),
        this._streamError = M(function(n) {
            this._streamCleanUp(),
            this._sendError(n.message)
        }, this),
        this._streamEnd = M(function() {
            this._streamCleanUp(),
            this._finished = !0,
            this._streamData("")
        }, this),
        this._streamCleanUp = M(function() {
            this._input.removeListener("data", this._streamData),
            this._input.removeListener("end", this._streamEnd),
            this._input.removeListener("error", this._streamError)
        }, this)
    }
    function Z(e) {
        function t() {
            if (d && f && (c("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"),
            f = !1),
            e.skipEmptyLines)
                for (var r = 0; r < d.data.length; r++)
                    d.data[r].length === 1 && d.data[r][0] === "" && d.data.splice(r--, 1);
            return i() && n(),
            l()
        }
        function i() {
            return e.header && R.length === 0
        }
        function n() {
            if (d) {
                for (var r = 0; i() && r < d.data.length; r++)
                    for (var a = 0; a < d.data[r].length; a++)
                        R.push(d.data[r][a]);
                d.data.splice(0, 1)
            }
        }
        function s(r) {
            return e.dynamicTypingFunction && e.dynamicTyping[r] === void 0 && (e.dynamicTyping[r] = e.dynamicTypingFunction(r)),
            (e.dynamicTyping[r] || e.dynamicTyping) === !0
        }
        function h(r, a) {
            return s(r) ? a === "true" || a === "TRUE" || a !== "false" && a !== "FALSE" && E(a) : a
        }
        function l() {
            if (!d || !e.header && !e.dynamicTyping)
                return d;
            for (var r = 0; r < d.data.length; r++) {
                for (var a = e.header ? {} : [], g = 0; g < d.data[r].length; g++) {
                    var _ = g
                      , w = d.data[r][g];
                    e.header && (_ = g >= R.length ? "__parsed_extra" : R[g]),
                    w = h(_, w),
                    _ === "__parsed_extra" ? (a[_] = a[_] || [],
                    a[_].push(w)) : a[_] = w
                }
                d.data[r] = a,
                e.header && (g > R.length ? c("FieldMismatch", "TooManyFields", "Too many fields: expected " + R.length + " fields but parsed " + g, r) : g < R.length && c("FieldMismatch", "TooFewFields", "Too few fields: expected " + R.length + " fields but parsed " + g, r))
            }
            return e.header && d.meta && (d.meta.fields = R),
            d
        }
        function p(r, a) {
            for (var g, _, w, b = [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP], A = 0; A < b.length; A++) {
                var P = b[A]
                  , I = 0
                  , j = 0;
                w = void 0;
                for (var C = new Y({
                    delimiter: P,
                    newline: a,
                    preview: 10
                }).parse(r), Q = 0; Q < C.data.length; Q++) {
                    var O = C.data[Q].length;
                    j += O,
                    typeof w != "undefined" ? O > 1 && (I += Math.abs(O - w),
                    w = O) : w = O
                }
                C.data.length > 0 && (j /= C.data.length),
                (typeof _ == "undefined" || I < _) && j > 1.99 && (_ = I,
                g = P)
            }
            return e.delimiter = g,
            {
                successful: !!g,
                bestDelimiter: g
            }
        }
        function o(r) {
            r = r.substr(0, 1048576);
            var a = r.split("\r")
              , g = r.split("\n")
              , _ = g.length > 1 && g[0].length < a[0].length;
            if (a.length === 1 || _)
                return "\n";
            for (var w = 0, b = 0; b < a.length; b++)
                a[b][0] === "\n" && w++;
            return w >= a.length / 2 ? "\r\n" : "\r"
        }
        function E(r) {
            var a = m.test(r);
            return a ? parseFloat(r) : r
        }
        function c(r, a, g, _) {
            d.errors.push({
                type: r,
                code: a,
                message: g,
                row: _
            })
        }
        var x, T, f, m = /^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i, y = this, k = 0, D = !1, z = !1, R = [], d = {
            data: [],
            errors: [],
            meta: {}
        };
        if (v(e.step)) {
            var L = e.step;
            e.step = function(r) {
                if (d = r,
                i())
                    t();
                else {
                    if (t(),
                    d.data.length === 0)
                        return;
                    k += r.data.length,
                    e.preview && k > e.preview ? T.abort() : L(d, y)
                }
            }
        }
        this.parse = function(r, a, g) {
            if (e.newline || (e.newline = o(r)),
            f = !1,
            e.delimiter)
                v(e.delimiter) && (e.delimiter = e.delimiter(r),
                d.meta.delimiter = e.delimiter);
            else {
                var _ = p(r, e.newline);
                _.successful ? e.delimiter = _.bestDelimiter : (f = !0,
                e.delimiter = u.DefaultDelimiter),
                d.meta.delimiter = e.delimiter
            }
            var w = $(e);
            return e.preview && e.header && w.preview++,
            x = r,
            T = new Y(w),
            d = T.parse(x, a, g),
            t(),
            D ? {
                meta: {
                    paused: !0
                }
            } : d || {
                meta: {
                    paused: !1
                }
            }
        }
        ,
        this.paused = function() {
            return D
        }
        ,
        this.pause = function() {
            D = !0,
            T.abort(),
            x = x.substr(T.getCharIndex())
        }
        ,
        this.resume = function() {
            D = !1,
            y.streamer.parseChunk(x)
        }
        ,
        this.aborted = function() {
            return z
        }
        ,
        this.abort = function() {
            z = !0,
            T.abort(),
            d.meta.aborted = !0,
            v(e.complete) && e.complete(d),
            x = ""
        }
    }
    function Y(e) {
        e = e || {};
        var t = e.delimiter
          , i = e.newline
          , n = e.comments
          , s = e.step
          , h = e.preview
          , l = e.fastMode
          , p = e.quoteChar || '"';
        if ((typeof t != "string" || u.BAD_DELIMITERS.indexOf(t) > -1) && (t = ","),
        n === t)
            throw "Comment character same as delimiter";
        n === !0 ? n = "#" : (typeof n != "string" || u.BAD_DELIMITERS.indexOf(n) > -1) && (n = !1),
        i != "\n" && i != "\r" && i != "\r\n" && (i = "\n");
        var o = 0
          , E = !1;
        this.parse = function(c, x, T) {
            function f(O) {
                a.push(O),
                w = o
            }
            function m(O) {
                return T || (typeof O == "undefined" && (O = c.substr(o)),
                _.push(O),
                o = z,
                f(_),
                r && D()),
                k()
            }
            function y(O) {
                o = O,
                f(_),
                _ = [],
                I = c.indexOf(i, o)
            }
            function k(O) {
                return {
                    data: a,
                    errors: g,
                    meta: {
                        delimiter: t,
                        linebreak: i,
                        aborted: E,
                        truncated: !!O,
                        cursor: w + (x || 0)
                    }
                }
            }
            function D() {
                s(k()),
                a = [],
                g = []
            }
            if (typeof c != "string")
                throw "Input must be a string";
            var z = c.length
              , R = t.length
              , d = i.length
              , L = n.length
              , r = v(s);
            o = 0;
            var a = []
              , g = []
              , _ = []
              , w = 0;
            if (!c)
                return k();
            if (l || l !== !1 && c.indexOf(p) === -1) {
                for (var b = c.split(i), A = 0; A < b.length; A++) {
                    var _ = b[A];
                    if (o += _.length,
                    A !== b.length - 1)
                        o += i.length;
                    else if (T)
                        return k();
                    if (!n || _.substr(0, L) !== n) {
                        if (r) {
                            if (a = [],
                            f(_.split(t)),
                            D(),
                            E)
                                return k()
                        } else
                            f(_.split(t));
                        if (h && A >= h)
                            return a = a.slice(0, h),
                            k(!0)
                    }
                }
                return k()
            }
            for (var P = c.indexOf(t, o), I = c.indexOf(i, o), j = new RegExp(p + p,"g"); ; )
                if (c[o] !== p)
                    if (n && _.length === 0 && c.substr(o, L) === n) {
                        if (I === -1)
                            return k();
                        o = I + d,
                        I = c.indexOf(i, o),
                        P = c.indexOf(t, o)
                    } else if (P !== -1 && (P < I || I === -1))
                        _.push(c.substring(o, P)),
                        o = P + R,
                        P = c.indexOf(t, o);
                    else {
                        if (I === -1)
                            break;
                        if (_.push(c.substring(o, I)),
                        y(I + d),
                        r && (D(),
                        E))
                            return k();
                        if (h && a.length >= h)
                            return k(!0)
                    }
                else {
                    var C = o;
                    for (o++; ; ) {
                        var C = c.indexOf(p, C + 1);
                        if (C === -1)
                            return T || g.push({
                                type: "Quotes",
                                code: "MissingQuotes",
                                message: "Quoted field unterminated",
                                row: a.length,
                                index: o
                            }),
                            m();
                        if (C === z - 1) {
                            var Q = c.substring(o, C).replace(j, p);
                            return m(Q)
                        }
                        if (c[C + 1] !== p) {
                            if (c[C + 1] === t) {
                                _.push(c.substring(o, C).replace(j, p)),
                                o = C + 1 + R,
                                P = c.indexOf(t, o),
                                I = c.indexOf(i, o);
                                break
                            }
                            if (c.substr(C + 1, d) === i) {
                                if (_.push(c.substring(o, C).replace(j, p)),
                                y(C + 1 + d),
                                P = c.indexOf(t, o),
                                r && (D(),
                                E))
                                    return k();
                                if (h && a.length >= h)
                                    return k(!0);
                                break
                            }
                        } else
                            C++
                    }
                }
            return m()
        }
        ,
        this.abort = function() {
            E = !0
        }
        ,
        this.getCharIndex = function() {
            return o
        }
    }
    function ne() {
        var e = document.getElementsByTagName("script");
        return e.length ? e[e.length - 1].src : ""
    }
    function re() {
        if (!u.WORKERS_SUPPORTED)
            return !1;
        if (!V && u.SCRIPT_PATH === null)
            throw new Error("Script path cannot be determined automatically when Papa Parse is loaded asynchronously. You need to set Papa.SCRIPT_PATH manually.");
        var e = u.SCRIPT_PATH || ie;
        e += (e.indexOf("?") !== -1 ? "&" : "?") + "papaworker";
        var t = new S.Worker(e);
        return t.onmessage = se,
        t.id = ue++,
        J[t.id] = t,
        t
    }
    function se(e) {
        var t = e.data
          , i = J[t.workerId]
          , n = !1;
        if (t.error)
            i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var s = function() {
                n = !0,
                ee(t.workerId, {
                    data: [],
                    errors: [],
                    meta: {
                        aborted: !0
                    }
                })
            }
              , h = {
                abort: s,
                pause: te,
                resume: te
            };
            if (v(i.userStep)) {
                for (var l = 0; l < t.results.data.length && (i.userStep({
                    data: [t.results.data[l]],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, h),
                !n); l++)
                    ;
                delete t.results
            } else
                v(i.userChunk) && (i.userChunk(t.results, h, t.file),
                delete t.results)
        }
        t.finished && !n && ee(t.workerId, t.results)
    }
    function ee(e, t) {
        var i = J[e];
        v(i.userComplete) && i.userComplete(t),
        i.terminate(),
        delete J[e]
    }
    function te() {
        throw "Not implemented."
    }
    function oe(e) {
        var t = e.data;
        if (typeof u.WORKER_ID == "undefined" && t && (u.WORKER_ID = t.workerId),
        typeof t.input == "string")
            S.postMessage({
                workerId: u.WORKER_ID,
                results: u.parse(t.input, t.config),
                finished: !0
            });
        else if (S.File && t.input instanceof File || t.input instanceof Object) {
            var i = u.parse(t.input, t.config);
            i && S.postMessage({
                workerId: u.WORKER_ID,
                results: i,
                finished: !0
            })
        }
    }
    function $(e) {
        if (typeof e != "object")
            return e;
        var t = e instanceof Array ? [] : {};
        for (var i in e)
            t[i] = $(e[i]);
        return t
    }
    function M(e, t) {
        return function() {
            e.apply(t, arguments)
        }
    }
    function v(e) {
        return typeof e == "function"
    }
    var ie, S = function() {
        return typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof S != "undefined" ? S : {}
    }(), U = !S.document && !!S.postMessage, X = U && /(\?|&)papaworker(=|&|$)/.test(S.location.search), V = !1, J = {}, ue = 0, u = {};
    if (u.parse = G,
    u.unparse = H,
    u.RECORD_SEP = String.fromCharCode(30),
    u.UNIT_SEP = String.fromCharCode(31),
    u.BYTE_ORDER_MARK = "\uFEFF",
    u.BAD_DELIMITERS = ["\r", "\n", '"', u.BYTE_ORDER_MARK],
    u.WORKERS_SUPPORTED = !U && !!S.Worker,
    u.SCRIPT_PATH = null,
    u.LocalChunkSize = 10485760,
    u.RemoteChunkSize = 5242880,
    u.DefaultDelimiter = ",",
    u.Parser = Y,
    u.ParserHandle = Z,
    u.NetworkStreamer = K,
    u.FileStreamer = N,
    u.StringStreamer = q,
    u.ReadableStreamStreamer = W,
    S.jQuery) {
        var B = S.jQuery;
        B.fn.parse = function(e) {
            function t() {
                if (h.length === 0)
                    return void (v(e.complete) && e.complete());
                var l = h[0];
                if (v(e.before)) {
                    var p = e.before(l.file, l.inputElem);
                    if (typeof p == "object") {
                        if (p.action === "abort")
                            return void i("AbortError", l.file, l.inputElem, p.reason);
                        if (p.action === "skip")
                            return void n();
                        typeof p.config == "object" && (l.instanceConfig = B.extend(l.instanceConfig, p.config))
                    } else if (p === "skip")
                        return void n()
                }
                var o = l.instanceConfig.complete;
                l.instanceConfig.complete = function(E) {
                    v(o) && o(E, l.file, l.inputElem),
                    n()
                }
                ,
                u.parse(l.file, l.instanceConfig)
            }
            function i(l, p, o, E) {
                v(e.error) && e.error({
                    name: l
                }, p, o, E)
            }
            function n() {
                h.splice(0, 1),
                t()
            }
            var s = e.config || {}
              , h = [];
            return this.each(function(l) {
                var p = B(this).prop("tagName").toUpperCase() === "INPUT" && B(this).attr("type").toLowerCase() === "file" && S.FileReader;
                if (!p || !this.files || this.files.length === 0)
                    return !0;
                for (var o = 0; o < this.files.length; o++)
                    h.push({
                        file: this.files[o],
                        inputElem: this,
                        instanceConfig: B.extend({}, s)
                    })
            }),
            t(),
            this
        }
    }
    return X ? S.onmessage = oe : u.WORKERS_SUPPORTED && (ie = ne(),
    document.body ? document.addEventListener("DOMContentLoaded", function() {
        V = !0
    }, !0) : V = !0),
    K.prototype = Object.create(F.prototype),
    K.prototype.constructor = K,
    N.prototype = Object.create(F.prototype),
    N.prototype.constructor = N,
    q.prototype = Object.create(q.prototype),
    q.prototype.constructor = q,
    W.prototype = Object.create(F.prototype),
    W.prototype.constructor = W,
    u
});
