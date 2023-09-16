(() => {
    var e = {
        390: (e) => {
          var t = { exports: {} };
          function n(e) {
            return (
              e instanceof Map
                ? (e.clear =
                    e.delete =
                    e.set =
                      function () {
                        throw new Error("map is read-only");
                      })
                : e instanceof Set &&
                  (e.add =
                    e.clear =
                    e.delete =
                      function () {
                        throw new Error("set is read-only");
                      }),
              Object.freeze(e),
              Object.getOwnPropertyNames(e).forEach(function (t) {
                var o = e[t];
                "object" != typeof o || Object.isFrozen(o) || n(o);
              }),
              e
            );
          }
          (t.exports = n), (t.exports.default = n);
          class o {
            constructor(e) {
              void 0 === e.data && (e.data = {}),
                (this.data = e.data),
                (this.isMatchIgnored = !1);
            }
            ignoreMatch() {
              this.isMatchIgnored = !0;
            }
          }
          function r(e) {
            return e
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;");
          }
          function s(e, ...t) {
            const n = Object.create(null);
            for (const t in e) n[t] = e[t];
            return (
              t.forEach(function (e) {
                for (const t in e) n[t] = e[t];
              }),
              n
            );
          }
          const i = (e) => !!e.scope || (e.sublanguage && e.language);
          class a {
            constructor(e, t) {
              (this.buffer = ""),
                (this.classPrefix = t.classPrefix),
                e.walk(this);
            }
            addText(e) {
              this.buffer += r(e);
            }
            openNode(e) {
              if (!i(e)) return;
              let t = "";
              (t = e.sublanguage
                ? `language-${e.language}`
                : ((e, { prefix: t }) => {
                    if (e.includes(".")) {
                      const n = e.split(".");
                      return [
                        `${t}${n.shift()}`,
                        ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`),
                      ].join(" ");
                    }
                    return `${t}${e}`;
                  })(e.scope, { prefix: this.classPrefix })),
                this.span(t);
            }
            closeNode(e) {
              i(e) && (this.buffer += "</span>");
            }
            value() {
              return this.buffer;
            }
            span(e) {
              this.buffer += `<span class="${e}">`;
            }
          }
          const c = (e = {}) => {
            const t = { children: [] };
            return Object.assign(t, e), t;
          };
          class u {
            constructor() {
              (this.rootNode = c()), (this.stack = [this.rootNode]);
            }
            get top() {
              return this.stack[this.stack.length - 1];
            }
            get root() {
              return this.rootNode;
            }
            add(e) {
              this.top.children.push(e);
            }
            openNode(e) {
              const t = c({ scope: e });
              this.add(t), this.stack.push(t);
            }
            closeNode() {
              if (this.stack.length > 1) return this.stack.pop();
            }
            closeAllNodes() {
              for (; this.closeNode(); );
            }
            toJSON() {
              return JSON.stringify(this.rootNode, null, 4);
            }
            walk(e) {
              return this.constructor._walk(e, this.rootNode);
            }
            static _walk(e, t) {
              return (
                "string" == typeof t
                  ? e.addText(t)
                  : t.children &&
                    (e.openNode(t),
                    t.children.forEach((t) => this._walk(e, t)),
                    e.closeNode(t)),
                e
              );
            }
            static _collapse(e) {
              "string" != typeof e &&
                e.children &&
                (e.children.every((e) => "string" == typeof e)
                  ? (e.children = [e.children.join("")])
                  : e.children.forEach((e) => {
                      u._collapse(e);
                    }));
            }
          }
          class l extends u {
            constructor(e) {
              super(), (this.options = e);
            }
            addKeyword(e, t) {
              "" !== e && (this.openNode(t), this.addText(e), this.closeNode());
            }
            addText(e) {
              "" !== e && this.add(e);
            }
            addSublanguage(e, t) {
              const n = e.root;
              (n.sublanguage = !0), (n.language = t), this.add(n);
            }
            toHTML() {
              return new a(this, this.options).value();
            }
            finalize() {
              return !0;
            }
          }
          function p(e) {
            return e ? ("string" == typeof e ? e : e.source) : null;
          }
          function g(e) {
            return d("(?=", e, ")");
          }
          function h(e) {
            return d("(?:", e, ")*");
          }
          function f(e) {
            return d("(?:", e, ")?");
          }
          function d(...e) {
            return e.map((e) => p(e)).join("");
          }
          function b(...e) {
            const t = (function (e) {
              const t = e[e.length - 1];
              return "object" == typeof t && t.constructor === Object
                ? (e.splice(e.length - 1, 1), t)
                : {};
            })(e);
            return (
              "(" + (t.capture ? "" : "?:") + e.map((e) => p(e)).join("|") + ")"
            );
          }
          function m(e) {
            return new RegExp(e.toString() + "|").exec("").length - 1;
          }
          const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
          function y(e, { joinWith: t }) {
            let n = 0;
            return e
              .map((e) => {
                n += 1;
                const t = n;
                let o = p(e),
                  r = "";
                for (; o.length > 0; ) {
                  const e = _.exec(o);
                  if (!e) {
                    r += o;
                    break;
                  }
                  (r += o.substring(0, e.index)),
                    (o = o.substring(e.index + e[0].length)),
                    "\\" === e[0][0] && e[1]
                      ? (r += "\\" + String(Number(e[1]) + t))
                      : ((r += e[0]), "(" === e[0] && n++);
                }
                return r;
              })
              .map((e) => `(${e})`)
              .join(t);
          }
          const w = "[a-zA-Z]\\w*",
            E = "[a-zA-Z_]\\w*",
            x = "\\b\\d+(\\.\\d+)?",
            v =
              "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            O = "\\b(0b[01]+)",
            k = { begin: "\\\\[\\s\\S]", relevance: 0 },
            M = {
              scope: "string",
              begin: "'",
              end: "'",
              illegal: "\\n",
              contains: [k],
            },
            N = {
              scope: "string",
              begin: '"',
              end: '"',
              illegal: "\\n",
              contains: [k],
            },
            S = function (e, t, n = {}) {
              const o = s(
                { scope: "comment", begin: e, end: t, contains: [] },
                n
              );
              o.contains.push({
                scope: "doctag",
                begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                excludeBegin: !0,
                relevance: 0,
              });
              const r = b(
                "I",
                "a",
                "is",
                "so",
                "us",
                "to",
                "at",
                "if",
                "in",
                "it",
                "on",
                /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
                /[A-Za-z]+[-][a-z]+/,
                /[A-Za-z][a-z]{2,}/
              );
              return (
                o.contains.push({
                  begin: d(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
                }),
                o
              );
            },
            T = S("//", "$"),
            j = S("/\\*", "\\*/"),
            A = S("#", "$"),
            I = { scope: "number", begin: x, relevance: 0 },
            R = { scope: "number", begin: v, relevance: 0 },
            L = { scope: "number", begin: O, relevance: 0 },
            B = {
              begin: /(?=\/[^/\n]*\/)/,
              contains: [
                {
                  scope: "regexp",
                  begin: /\//,
                  end: /\/[gimuy]*/,
                  illegal: /\n/,
                  contains: [
                    k,
                    { begin: /\[/, end: /\]/, relevance: 0, contains: [k] },
                  ],
                },
              ],
            },
            P = { scope: "title", begin: w, relevance: 0 },
            z = { scope: "title", begin: E, relevance: 0 };
          var $ = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: /\b\B/,
            IDENT_RE: w,
            UNDERSCORE_IDENT_RE: E,
            NUMBER_RE: x,
            C_NUMBER_RE: v,
            BINARY_NUMBER_RE: O,
            RE_STARTERS_RE:
              "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: (e = {}) => {
              const t = /^#![ ]*\//;
              return (
                e.binary && (e.begin = d(t, /.*\b/, e.binary, /\b.*/)),
                s(
                  {
                    scope: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": (e, t) => {
                      0 !== e.index && t.ignoreMatch();
                    },
                  },
                  e
                )
              );
            },
            BACKSLASH_ESCAPE: k,
            APOS_STRING_MODE: M,
            QUOTE_STRING_MODE: N,
            PHRASAL_WORDS_MODE: {
              begin:
                /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
            },
            COMMENT: S,
            C_LINE_COMMENT_MODE: T,
            C_BLOCK_COMMENT_MODE: j,
            HASH_COMMENT_MODE: A,
            NUMBER_MODE: I,
            C_NUMBER_MODE: R,
            BINARY_NUMBER_MODE: L,
            REGEXP_MODE: B,
            TITLE_MODE: P,
            UNDERSCORE_TITLE_MODE: z,
            METHOD_GUARD: { begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0 },
            END_SAME_AS_BEGIN: function (e) {
              return Object.assign(e, {
                "on:begin": (e, t) => {
                  t.data._beginMatch = e[1];
                },
                "on:end": (e, t) => {
                  t.data._beginMatch !== e[1] && t.ignoreMatch();
                },
              });
            },
          });
          function C(e, t) {
            "." === e.input[e.index - 1] && t.ignoreMatch();
          }
          function D(e, t) {
            void 0 !== e.className &&
              ((e.scope = e.className), delete e.className);
          }
          function H(e, t) {
            t &&
              e.beginKeywords &&
              ((e.begin =
                "\\b(" +
                e.beginKeywords.split(" ").join("|") +
                ")(?!\\.)(?=\\b|\\s)"),
              (e.__beforeBegin = C),
              (e.keywords = e.keywords || e.beginKeywords),
              delete e.beginKeywords,
              void 0 === e.relevance && (e.relevance = 0));
          }
          function U(e, t) {
            Array.isArray(e.illegal) && (e.illegal = b(...e.illegal));
          }
          function Z(e, t) {
            if (e.match) {
              if (e.begin || e.end)
                throw new Error("begin & end are not supported with match");
              (e.begin = e.match), delete e.match;
            }
          }
          function K(e, t) {
            void 0 === e.relevance && (e.relevance = 1);
          }
          const G = (e, t) => {
              if (!e.beforeMatch) return;
              if (e.starts)
                throw new Error("beforeMatch cannot be used with starts");
              const n = Object.assign({}, e);
              Object.keys(e).forEach((t) => {
                delete e[t];
              }),
                (e.keywords = n.keywords),
                (e.begin = d(n.beforeMatch, g(n.begin))),
                (e.starts = {
                  relevance: 0,
                  contains: [Object.assign(n, { endsParent: !0 })],
                }),
                (e.relevance = 0),
                delete n.beforeMatch;
            },
            X = [
              "of",
              "and",
              "for",
              "in",
              "not",
              "or",
              "if",
              "then",
              "parent",
              "list",
              "value",
            ];
          function W(e, t, n = "keyword") {
            const o = Object.create(null);
            return (
              "string" == typeof e
                ? r(n, e.split(" "))
                : Array.isArray(e)
                ? r(n, e)
                : Object.keys(e).forEach(function (n) {
                    Object.assign(o, W(e[n], t, n));
                  }),
              o
            );
            function r(e, n) {
              t && (n = n.map((e) => e.toLowerCase())),
                n.forEach(function (t) {
                  const n = t.split("|");
                  o[n[0]] = [e, F(n[0], n[1])];
                });
            }
          }
          function F(e, t) {
            return t
              ? Number(t)
              : (function (e) {
                  return X.includes(e.toLowerCase());
                })(e)
              ? 0
              : 1;
          }
          const q = {},
            J = (e) => {
              console.error(e);
            },
            Q = (e, ...t) => {
              console.log(`WARN: ${e}`, ...t);
            },
            V = (e, t) => {
              q[`${e}/${t}`] ||
                (console.log(`Deprecated as of ${e}. ${t}`),
                (q[`${e}/${t}`] = !0));
            },
            Y = new Error();
          function ee(e, t, { key: n }) {
            let o = 0;
            const r = e[n],
              s = {},
              i = {};
            for (let e = 1; e <= t.length; e++)
              (i[e + o] = r[e]), (s[e + o] = !0), (o += m(t[e - 1]));
            (e[n] = i), (e[n]._emit = s), (e[n]._multi = !0);
          }
          function te(e) {
            !(function (e) {
              e.scope &&
                "object" == typeof e.scope &&
                null !== e.scope &&
                ((e.beginScope = e.scope), delete e.scope);
            })(e),
              "string" == typeof e.beginScope &&
                (e.beginScope = { _wrap: e.beginScope }),
              "string" == typeof e.endScope &&
                (e.endScope = { _wrap: e.endScope }),
              (function (e) {
                if (Array.isArray(e.begin)) {
                  if (e.skip || e.excludeBegin || e.returnBegin)
                    throw (
                      (J(
                        "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
                      ),
                      Y)
                    );
                  if ("object" != typeof e.beginScope || null === e.beginScope)
                    throw (J("beginScope must be object"), Y);
                  ee(e, e.begin, { key: "beginScope" }),
                    (e.begin = y(e.begin, { joinWith: "" }));
                }
              })(e),
              (function (e) {
                if (Array.isArray(e.end)) {
                  if (e.skip || e.excludeEnd || e.returnEnd)
                    throw (
                      (J(
                        "skip, excludeEnd, returnEnd not compatible with endScope: {}"
                      ),
                      Y)
                    );
                  if ("object" != typeof e.endScope || null === e.endScope)
                    throw (J("endScope must be object"), Y);
                  ee(e, e.end, { key: "endScope" }),
                    (e.end = y(e.end, { joinWith: "" }));
                }
              })(e);
          }
          function ne(e) {
            function t(t, n) {
              return new RegExp(
                p(t),
                "m" +
                  (e.case_insensitive ? "i" : "") +
                  (e.unicodeRegex ? "u" : "") +
                  (n ? "g" : "")
              );
            }
            class n {
              constructor() {
                (this.matchIndexes = {}),
                  (this.regexes = []),
                  (this.matchAt = 1),
                  (this.position = 0);
              }
              addRule(e, t) {
                (t.position = this.position++),
                  (this.matchIndexes[this.matchAt] = t),
                  this.regexes.push([t, e]),
                  (this.matchAt += m(e) + 1);
              }
              compile() {
                0 === this.regexes.length && (this.exec = () => null);
                const e = this.regexes.map((e) => e[1]);
                (this.matcherRe = t(y(e, { joinWith: "|" }), !0)),
                  (this.lastIndex = 0);
              }
              exec(e) {
                this.matcherRe.lastIndex = this.lastIndex;
                const t = this.matcherRe.exec(e);
                if (!t) return null;
                const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                  o = this.matchIndexes[n];
                return t.splice(0, n), Object.assign(t, o);
              }
            }
            class o {
              constructor() {
                (this.rules = []),
                  (this.multiRegexes = []),
                  (this.count = 0),
                  (this.lastIndex = 0),
                  (this.regexIndex = 0);
              }
              getMatcher(e) {
                if (this.multiRegexes[e]) return this.multiRegexes[e];
                const t = new n();
                return (
                  this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)),
                  t.compile(),
                  (this.multiRegexes[e] = t),
                  t
                );
              }
              resumingScanAtSamePosition() {
                return 0 !== this.regexIndex;
              }
              considerAll() {
                this.regexIndex = 0;
              }
              addRule(e, t) {
                this.rules.push([e, t]), "begin" === t.type && this.count++;
              }
              exec(e) {
                const t = this.getMatcher(this.regexIndex);
                t.lastIndex = this.lastIndex;
                let n = t.exec(e);
                if (this.resumingScanAtSamePosition())
                  if (n && n.index === this.lastIndex);
                  else {
                    const t = this.getMatcher(0);
                    (t.lastIndex = this.lastIndex + 1), (n = t.exec(e));
                  }
                return (
                  n &&
                    ((this.regexIndex += n.position + 1),
                    this.regexIndex === this.count && this.considerAll()),
                  n
                );
              }
            }
            if (
              (e.compilerExtensions || (e.compilerExtensions = []),
              e.contains && e.contains.includes("self"))
            )
              throw new Error(
                "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
              );
            return (
              (e.classNameAliases = s(e.classNameAliases || {})),
              (function n(r, i) {
                const a = r;
                if (r.isCompiled) return a;
                [D, Z, te, G].forEach((e) => e(r, i)),
                  e.compilerExtensions.forEach((e) => e(r, i)),
                  (r.__beforeBegin = null),
                  [H, U, K].forEach((e) => e(r, i)),
                  (r.isCompiled = !0);
                let c = null;
                return (
                  "object" == typeof r.keywords &&
                    r.keywords.$pattern &&
                    ((r.keywords = Object.assign({}, r.keywords)),
                    (c = r.keywords.$pattern),
                    delete r.keywords.$pattern),
                  (c = c || /\w+/),
                  r.keywords && (r.keywords = W(r.keywords, e.case_insensitive)),
                  (a.keywordPatternRe = t(c, !0)),
                  i &&
                    (r.begin || (r.begin = /\B|\b/),
                    (a.beginRe = t(a.begin)),
                    r.end || r.endsWithParent || (r.end = /\B|\b/),
                    r.end && (a.endRe = t(a.end)),
                    (a.terminatorEnd = p(a.end) || ""),
                    r.endsWithParent &&
                      i.terminatorEnd &&
                      (a.terminatorEnd += (r.end ? "|" : "") + i.terminatorEnd)),
                  r.illegal && (a.illegalRe = t(r.illegal)),
                  r.contains || (r.contains = []),
                  (r.contains = [].concat(
                    ...r.contains.map(function (e) {
                      return (function (e) {
                        return (
                          e.variants &&
                            !e.cachedVariants &&
                            (e.cachedVariants = e.variants.map(function (t) {
                              return s(e, { variants: null }, t);
                            })),
                          e.cachedVariants
                            ? e.cachedVariants
                            : oe(e)
                            ? s(e, { starts: e.starts ? s(e.starts) : null })
                            : Object.isFrozen(e)
                            ? s(e)
                            : e
                        );
                      })("self" === e ? r : e);
                    })
                  )),
                  r.contains.forEach(function (e) {
                    n(e, a);
                  }),
                  r.starts && n(r.starts, i),
                  (a.matcher = (function (e) {
                    const t = new o();
                    return (
                      e.contains.forEach((e) =>
                        t.addRule(e.begin, { rule: e, type: "begin" })
                      ),
                      e.terminatorEnd &&
                        t.addRule(e.terminatorEnd, { type: "end" }),
                      e.illegal && t.addRule(e.illegal, { type: "illegal" }),
                      t
                    );
                  })(a)),
                  a
                );
              })(e)
            );
          }
          function oe(e) {
            return !!e && (e.endsWithParent || oe(e.starts));
          }
          class re extends Error {
            constructor(e, t) {
              super(e), (this.name = "HTMLInjectionError"), (this.html = t);
            }
          }
          const se = r,
            ie = s,
            ae = Symbol("nomatch");
          var ce = (function (e) {
            const n = Object.create(null),
              r = Object.create(null),
              s = [];
            let i = !0;
            const a =
                "Could not find the language '{}', did you forget to load/include a language module?",
              c = { disableAutodetect: !0, name: "Plain text", contains: [] };
            let u = {
              ignoreUnescapedHTML: !1,
              throwUnescapedHTML: !1,
              noHighlightRe: /^(no-?highlight)$/i,
              languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
              classPrefix: "hljs-",
              cssSelector: "pre code",
              languages: null,
              __emitter: l,
            };
            function p(e) {
              return u.noHighlightRe.test(e);
            }
            function m(e, t, n) {
              let o = "",
                r = "";
              "object" == typeof t
                ? ((o = e), (n = t.ignoreIllegals), (r = t.language))
                : (V(
                    "10.7.0",
                    "highlight(lang, code, ...args) has been deprecated."
                  ),
                  V(
                    "10.7.0",
                    "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"
                  ),
                  (r = e),
                  (o = t)),
                void 0 === n && (n = !0);
              const s = { code: o, language: r };
              M("before:highlight", s);
              const i = s.result ? s.result : _(s.language, s.code, n);
              return (i.code = s.code), M("after:highlight", i), i;
            }
            function _(e, t, r, s) {
              const c = Object.create(null);
              function l() {
                if (!k.keywords) return void N.addText(S);
                let e = 0;
                k.keywordPatternRe.lastIndex = 0;
                let t = k.keywordPatternRe.exec(S),
                  n = "";
                for (; t; ) {
                  n += S.substring(e, t.index);
                  const r = E.case_insensitive ? t[0].toLowerCase() : t[0],
                    s = ((o = r), k.keywords[o]);
                  if (s) {
                    const [e, o] = s;
                    if (
                      (N.addText(n),
                      (n = ""),
                      (c[r] = (c[r] || 0) + 1),
                      c[r] <= 7 && (T += o),
                      e.startsWith("_"))
                    )
                      n += t[0];
                    else {
                      const n = E.classNameAliases[e] || e;
                      N.addKeyword(t[0], n);
                    }
                  } else n += t[0];
                  (e = k.keywordPatternRe.lastIndex),
                    (t = k.keywordPatternRe.exec(S));
                }
                var o;
                (n += S.substring(e)), N.addText(n);
              }
              function p() {
                null != k.subLanguage
                  ? (function () {
                      if ("" === S) return;
                      let e = null;
                      if ("string" == typeof k.subLanguage) {
                        if (!n[k.subLanguage]) return void N.addText(S);
                        (e = _(k.subLanguage, S, !0, M[k.subLanguage])),
                          (M[k.subLanguage] = e._top);
                      } else
                        e = y(S, k.subLanguage.length ? k.subLanguage : null);
                      k.relevance > 0 && (T += e.relevance),
                        N.addSublanguage(e._emitter, e.language);
                    })()
                  : l(),
                  (S = "");
              }
              function g(e, t) {
                let n = 1;
                const o = t.length - 1;
                for (; n <= o; ) {
                  if (!e._emit[n]) {
                    n++;
                    continue;
                  }
                  const o = E.classNameAliases[e[n]] || e[n],
                    r = t[n];
                  o ? N.addKeyword(r, o) : ((S = r), l(), (S = "")), n++;
                }
              }
              function h(e, t) {
                return (
                  e.scope &&
                    "string" == typeof e.scope &&
                    N.openNode(E.classNameAliases[e.scope] || e.scope),
                  e.beginScope &&
                    (e.beginScope._wrap
                      ? (N.addKeyword(
                          S,
                          E.classNameAliases[e.beginScope._wrap] ||
                            e.beginScope._wrap
                        ),
                        (S = ""))
                      : e.beginScope._multi && (g(e.beginScope, t), (S = ""))),
                  (k = Object.create(e, { parent: { value: k } })),
                  k
                );
              }
              function f(e, t, n) {
                let r = (function (e, t) {
                  const n = e && e.exec(t);
                  return n && 0 === n.index;
                })(e.endRe, n);
                if (r) {
                  if (e["on:end"]) {
                    const n = new o(e);
                    e["on:end"](t, n), n.isMatchIgnored && (r = !1);
                  }
                  if (r) {
                    for (; e.endsParent && e.parent; ) e = e.parent;
                    return e;
                  }
                }
                if (e.endsWithParent) return f(e.parent, t, n);
              }
              function d(e) {
                return 0 === k.matcher.regexIndex
                  ? ((S += e[0]), 1)
                  : ((I = !0), 0);
              }
              function b(e) {
                const n = e[0],
                  o = t.substring(e.index),
                  r = f(k, e, o);
                if (!r) return ae;
                const s = k;
                k.endScope && k.endScope._wrap
                  ? (p(), N.addKeyword(n, k.endScope._wrap))
                  : k.endScope && k.endScope._multi
                  ? (p(), g(k.endScope, e))
                  : s.skip
                  ? (S += n)
                  : (s.returnEnd || s.excludeEnd || (S += n),
                    p(),
                    s.excludeEnd && (S = n));
                do {
                  k.scope && N.closeNode(),
                    k.skip || k.subLanguage || (T += k.relevance),
                    (k = k.parent);
                } while (k !== r.parent);
                return r.starts && h(r.starts, e), s.returnEnd ? 0 : n.length;
              }
              let m = {};
              function w(n, s) {
                const a = s && s[0];
                if (((S += n), null == a)) return p(), 0;
                if (
                  "begin" === m.type &&
                  "end" === s.type &&
                  m.index === s.index &&
                  "" === a
                ) {
                  if (((S += t.slice(s.index, s.index + 1)), !i)) {
                    const t = new Error(`0 width match regex (${e})`);
                    throw ((t.languageName = e), (t.badRule = m.rule), t);
                  }
                  return 1;
                }
                if (((m = s), "begin" === s.type))
                  return (function (e) {
                    const t = e[0],
                      n = e.rule,
                      r = new o(n),
                      s = [n.__beforeBegin, n["on:begin"]];
                    for (const n of s)
                      if (n && (n(e, r), r.isMatchIgnored)) return d(t);
                    return (
                      n.skip
                        ? (S += t)
                        : (n.excludeBegin && (S += t),
                          p(),
                          n.returnBegin || n.excludeBegin || (S = t)),
                      h(n, e),
                      n.returnBegin ? 0 : t.length
                    );
                  })(s);
                if ("illegal" === s.type && !r) {
                  const e = new Error(
                    'Illegal lexeme "' +
                      a +
                      '" for mode "' +
                      (k.scope || "<unnamed>") +
                      '"'
                  );
                  throw ((e.mode = k), e);
                }
                if ("end" === s.type) {
                  const e = b(s);
                  if (e !== ae) return e;
                }
                if ("illegal" === s.type && "" === a) return 1;
                if (A > 1e5 && A > 3 * s.index)
                  throw new Error(
                    "potential infinite loop, way more iterations than matches"
                  );
                return (S += a), a.length;
              }
              const E = v(e);
              if (!E)
                throw (
                  (J(a.replace("{}", e)),
                  new Error('Unknown language: "' + e + '"'))
                );
              const x = ne(E);
              let O = "",
                k = s || x;
              const M = {},
                N = new u.__emitter(u);
              !(function () {
                const e = [];
                for (let t = k; t !== E; t = t.parent)
                  t.scope && e.unshift(t.scope);
                e.forEach((e) => N.openNode(e));
              })();
              let S = "",
                T = 0,
                j = 0,
                A = 0,
                I = !1;
              try {
                for (k.matcher.considerAll(); ; ) {
                  A++,
                    I ? (I = !1) : k.matcher.considerAll(),
                    (k.matcher.lastIndex = j);
                  const e = k.matcher.exec(t);
                  if (!e) break;
                  const n = w(t.substring(j, e.index), e);
                  j = e.index + n;
                }
                return (
                  w(t.substring(j)),
                  N.closeAllNodes(),
                  N.finalize(),
                  (O = N.toHTML()),
                  {
                    language: e,
                    value: O,
                    relevance: T,
                    illegal: !1,
                    _emitter: N,
                    _top: k,
                  }
                );
              } catch (n) {
                if (n.message && n.message.includes("Illegal"))
                  return {
                    language: e,
                    value: se(t),
                    illegal: !0,
                    relevance: 0,
                    _illegalBy: {
                      message: n.message,
                      index: j,
                      context: t.slice(j - 100, j + 100),
                      mode: n.mode,
                      resultSoFar: O,
                    },
                    _emitter: N,
                  };
                if (i)
                  return {
                    language: e,
                    value: se(t),
                    illegal: !1,
                    relevance: 0,
                    errorRaised: n,
                    _emitter: N,
                    _top: k,
                  };
                throw n;
              }
            }
            function y(e, t) {
              t = t || u.languages || Object.keys(n);
              const o = (function (e) {
                  const t = {
                    value: se(e),
                    illegal: !1,
                    relevance: 0,
                    _top: c,
                    _emitter: new u.__emitter(u),
                  };
                  return t._emitter.addText(e), t;
                })(e),
                r = t
                  .filter(v)
                  .filter(k)
                  .map((t) => _(t, e, !1));
              r.unshift(o);
              const s = r.sort((e, t) => {
                  if (e.relevance !== t.relevance)
                    return t.relevance - e.relevance;
                  if (e.language && t.language) {
                    if (v(e.language).supersetOf === t.language) return 1;
                    if (v(t.language).supersetOf === e.language) return -1;
                  }
                  return 0;
                }),
                [i, a] = s,
                l = i;
              return (l.secondBest = a), l;
            }
            function w(e) {
              let t = null;
              const n = (function (e) {
                let t = e.className + " ";
                t += e.parentNode ? e.parentNode.className : "";
                const n = u.languageDetectRe.exec(t);
                if (n) {
                  const t = v(n[1]);
                  return (
                    t ||
                      (Q(a.replace("{}", n[1])),
                      Q("Falling back to no-highlight mode for this block.", e)),
                    t ? n[1] : "no-highlight"
                  );
                }
                return t.split(/\s+/).find((e) => p(e) || v(e));
              })(e);
              if (p(n)) return;
              if (
                (M("before:highlightElement", { el: e, language: n }),
                e.children.length > 0 &&
                  (u.ignoreUnescapedHTML ||
                    (console.warn(
                      "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
                    ),
                    console.warn(
                      "https://github.com/highlightjs/highlight.js/wiki/security"
                    ),
                    console.warn("The element with unescaped HTML:"),
                    console.warn(e)),
                  u.throwUnescapedHTML))
              )
                throw new re(
                  "One of your code blocks includes unescaped HTML.",
                  e.innerHTML
                );
              t = e;
              const o = t.textContent,
                s = n ? m(o, { language: n, ignoreIllegals: !0 }) : y(o);
              (e.innerHTML = s.value),
                (function (e, t, n) {
                  const o = (t && r[t]) || n;
                  e.classList.add("hljs"), e.classList.add(`language-${o}`);
                })(e, n, s.language),
                (e.result = {
                  language: s.language,
                  re: s.relevance,
                  relevance: s.relevance,
                }),
                s.secondBest &&
                  (e.secondBest = {
                    language: s.secondBest.language,
                    relevance: s.secondBest.relevance,
                  }),
                M("after:highlightElement", { el: e, result: s, text: o });
            }
            let E = !1;
            function x() {
              "loading" !== document.readyState
                ? document.querySelectorAll(u.cssSelector).forEach(w)
                : (E = !0);
            }
            function v(e) {
              return (e = (e || "").toLowerCase()), n[e] || n[r[e]];
            }
            function O(e, { languageName: t }) {
              "string" == typeof e && (e = [e]),
                e.forEach((e) => {
                  r[e.toLowerCase()] = t;
                });
            }
            function k(e) {
              const t = v(e);
              return t && !t.disableAutodetect;
            }
            function M(e, t) {
              const n = e;
              s.forEach(function (e) {
                e[n] && e[n](t);
              });
            }
            "undefined" != typeof window &&
              window.addEventListener &&
              window.addEventListener(
                "DOMContentLoaded",
                function () {
                  E && x();
                },
                !1
              ),
              Object.assign(e, {
                highlight: m,
                highlightAuto: y,
                highlightAll: x,
                highlightElement: w,
                highlightBlock: function (e) {
                  return (
                    V(
                      "10.7.0",
                      "highlightBlock will be removed entirely in v12.0"
                    ),
                    V("10.7.0", "Please use highlightElement now."),
                    w(e)
                  );
                },
                configure: function (e) {
                  u = ie(u, e);
                },
                initHighlighting: () => {
                  x(),
                    V(
                      "10.6.0",
                      "initHighlighting() deprecated.  Use highlightAll() now."
                    );
                },
                initHighlightingOnLoad: function () {
                  x(),
                    V(
                      "10.6.0",
                      "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
                    );
                },
                registerLanguage: function (t, o) {
                  let r = null;
                  try {
                    r = o(e);
                  } catch (e) {
                    if (
                      (J(
                        "Language definition for '{}' could not be registered.".replace(
                          "{}",
                          t
                        )
                      ),
                      !i)
                    )
                      throw e;
                    J(e), (r = c);
                  }
                  r.name || (r.name = t),
                    (n[t] = r),
                    (r.rawDefinition = o.bind(null, e)),
                    r.aliases && O(r.aliases, { languageName: t });
                },
                unregisterLanguage: function (e) {
                  delete n[e];
                  for (const t of Object.keys(r)) r[t] === e && delete r[t];
                },
                listLanguages: function () {
                  return Object.keys(n);
                },
                getLanguage: v,
                registerAliases: O,
                autoDetection: k,
                inherit: ie,
                addPlugin: function (e) {
                  !(function (e) {
                    e["before:highlightBlock"] &&
                      !e["before:highlightElement"] &&
                      (e["before:highlightElement"] = (t) => {
                        e["before:highlightBlock"](
                          Object.assign({ block: t.el }, t)
                        );
                      }),
                      e["after:highlightBlock"] &&
                        !e["after:highlightElement"] &&
                        (e["after:highlightElement"] = (t) => {
                          e["after:highlightBlock"](
                            Object.assign({ block: t.el }, t)
                          );
                        });
                  })(e),
                    s.push(e);
                },
              }),
              (e.debugMode = function () {
                i = !1;
              }),
              (e.safeMode = function () {
                i = !0;
              }),
              (e.versionString = "11.6.0"),
              (e.regex = {
                concat: d,
                lookahead: g,
                either: b,
                optional: f,
                anyNumberOfTimes: h,
              });
            for (const e in $) "object" == typeof $[e] && t.exports($[e]);
            return Object.assign(e, $), e;
          })({});
          (e.exports = ce), (ce.HighlightJS = ce), (ce.default = ce);
        },
      },
      t = {};
    function n(o) {
      var r = t[o];
      if (void 0 !== r) return r.exports;
      var s = (t[o] = { exports: {} });
      return e[o](s, s.exports, n), s.exports;
    }
    (() => {
      "use strict";
      const e = n(390);
      e.registerLanguage("protobuf", function (e) {
        const t = {
          match: [/(message|enum|service)\s+/, e.IDENT_RE],
          scope: { 1: "keyword", 2: "title.class" },
        };
        return {
          name: "Protocol Buffers",
          keywords: {
            keyword: [
              "package",
              "import",
              "option",
              "optional",
              "required",
              "repeated",
              "group",
              "oneof",
            ],
            type: [
              "double",
              "float",
              "int32",
              "int64",
              "uint32",
              "uint64",
              "sint32",
              "sint64",
              "fixed32",
              "fixed64",
              "sfixed32",
              "sfixed64",
              "bool",
              "string",
              "bytes",
            ],
            literal: ["true", "false"],
          },
          contains: [
            e.QUOTE_STRING_MODE,
            e.NUMBER_MODE,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
            t,
            {
              className: "function",
              beginKeywords: "rpc",
              end: /[{;]/,
              excludeEnd: !0,
              keywords: "rpc returns",
            },
            { begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/ },
          ],
        };
      });
      const t = "google/protobuf/any.proto",
        o = "google.protobuf.Any",
        r = "google.protobuf.Timestamp";
      class s {
        constructor(e, t) {
          (this.success = e), (this.error = t);
        }
      }
      class i {
        constructor(e, t, n) {
          (this.name = e), (this.complex = t), (this.merge = n);
        }
      }
      const a = new i("bool", !1, !1),
        c = new i("string", !1, !1),
        u = new i("int64", !1, !0),
        l = new i(o, !0, !1),
        p = new i(r, !1, !1);
      class g {
        constructor() {
          (this.imports = new Set()),
            (this.messages = []),
            (this.messageNameSuffixCounter = {});
        }
        addImport(e) {
          this.imports.add(e);
        }
        generateUniqueName(e) {
          if (this.messageNameSuffixCounter.hasOwnProperty(e)) {
            const t = this.messageNameSuffixCounter[e];
            return (this.messageNameSuffixCounter[e] = t + 1), `${e}${t}`;
          }
          return (this.messageNameSuffixCounter[e] = 1), e;
        }
        addMessage(e) {
          this.messages.push(e);
        }
        getImports() {
          return this.imports;
        }
        getMessages() {
          return this.messages;
        }
      }
      class h {
        constructor(e) {
          (this.options = e), (this.mergeSimilarObjectMap = {});
        }
        analyze(e) {
          return this.directType(e)
            ? this.analyzeObject({ first: e })
            : Array.isArray(e)
            ? this.analyzeArray(e)
            : this.analyzeObject(e);
        }
        directType(e) {
          switch (typeof e) {
            case "string":
            case "number":
            case "boolean":
              return !0;
            case "object":
              return null === e;
          }
          return !1;
        }
        analyzeArray(e) {
          const t = this.addShift(),
            n = new g(),
            o = [],
            r = this.analyzeArrayProperty("nested", e, n, t);
          return (
            o.push(`    ${r} items = 1;`),
            d(n.getImports(), n.getMessages(), o, this.options)
          );
        }
        analyzeObject(e) {
          const t = this.addShift(),
            n = new g(),
            o = [];
          let r = 1;
          for (const [s, i] of Object.entries(e)) {
            const e = this.analyzeProperty(s, i, n, t);
            o.push(`    ${e} ${s} = ${r};`), (r += 1);
          }
          return d(n.getImports(), n.getMessages(), o, this.options);
        }
        analyzeArrayProperty(e, n, r, s) {
          const i = n.length;
          if (0 === i) return r.addImport(t), `repeated ${o}`;
          const a = n[0];
          if (Array.isArray(a)) return r.addImport(t), `repeated ${o}`;
          if (i > 1) {
            const e = this.samePrimitiveType(n);
            if (!1 === e.complex) return `repeated ${e.name}`;
          }
          return `repeated ${this.analyzeObjectProperty(e, a, r, s)}`;
        }
        analyzeProperty(e, t, n, o) {
          return Array.isArray(t)
            ? this.analyzeArrayProperty(e, t, n, o)
            : this.analyzeObjectProperty(e, t, n, o);
        }
        analyzeObjectProperty(e, t, n, o) {
          const r = this.analyzeType(t, n);
          if ("object" === r) {
            if (this.options.mergeSimilarObjects) {
              const [r, s] = this.mergeSimilarObjectKey(t);
              if (s) {
                if (this.mergeSimilarObjectMap.hasOwnProperty(r))
                  return this.mergeSimilarObjectMap[r];
                const s = n.generateUniqueName(f(e));
                return (
                  (this.mergeSimilarObjectMap[r] = s),
                  this.addNested(n, s, t, o),
                  s
                );
              }
            }
            const r = n.generateUniqueName(f(e));
            return this.addNested(n, r, t, o), r;
          }
          return r;
        }
        mergeSimilarObjectKey(e) {
          const t = [];
          for (const [n, o] of Object.entries(e)) {
            const [e, r] = this.mergeSimilarObjectType(o);
            if (!r) return ["", !1];
            t.push([n, e]);
          }
          return [JSON.stringify(t), !0];
        }
        mergeSimilarObjectType(e) {
          if (Array.isArray(e)) return ["", !1];
          switch (typeof e) {
            case "string":
              return this.options.googleProtobufTimestamp &&
                /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(\+\d\d:\d\d|Z)/.test(e)
                ? [r, !0]
                : ["string", !0];
            case "number":
              return [m(e), !0];
            case "boolean":
              return ["bool", !0];
          }
          return ["", !1];
        }
        analyzeType(e, n) {
          switch (typeof e) {
            case "string":
              return this.options.googleProtobufTimestamp &&
                /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(\+\d\d:\d\d|Z)/.test(e)
                ? (n.addImport("google/protobuf/timestamp.proto"), r)
                : "string";
            case "number":
              return m(e);
            case "boolean":
              return "bool";
            case "object":
              return null === e ? (n.addImport(t), o) : "object";
          }
          return n.addImport(t), o;
        }
        toPrimitiveType(e) {
          switch (typeof e) {
            case "string":
              return this.options.googleProtobufTimestamp &&
                /\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(\+\d\d:\d\d|Z)/.test(e)
                ? p
                : c;
            case "number":
              return new i(m(e), !1, !0);
            case "boolean":
              return a;
          }
          return l;
        }
        samePrimitiveType(e) {
          let t = this.toPrimitiveType(e[0]);
          if (t.complex) return t;
          for (let n = 1; n < e.length; n++) {
            const o = this.toPrimitiveType(e[n]);
            if (o.complex) return o;
            if (((t = b(t, o)), t.complex)) return t;
          }
          return t;
        }
        addNested(e, t, n, o) {
          const r = [];
          r.push(`${o}message ${t} {`);
          let s = 1;
          for (const [t, i] of Object.entries(n)) {
            const n = this.analyzeProperty(t, i, e, o);
            r.push(`${o}    ${n} ${t} = ${s};`), (s += 1);
          }
          r.push(`${o}}`), e.addMessage(r);
        }
        addShift() {
          return this.options.inline ? "    " : "";
        }
      }
      function f(e) {
        return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
      }
      function d(e, t, n, o) {
        const r = [];
        if ((r.push('syntax = "proto3";'), e.size > 0)) {
          r.push("");
          for (const t of e) r.push(`import "${t}";`);
        }
        if ((r.push(""), o.inline)) {
          if ((r.push("message SomeMessage {"), t.length > 0)) {
            r.push("");
            for (const e of t) r.push(...e), r.push("");
          }
          r.push(...n), r.push("}");
        } else {
          for (const e of t) r.push(...e), r.push("");
          r.push("message SomeMessage {"), r.push(...n), r.push("}");
        }
        return r.join("\n");
      }
      function b(e, t) {
        if (e.name === t.name) return e;
        if (e.merge && t.merge) {
          if ("double" === e.name) return e;
          if ("double" === t.name) return t;
          if ("int64" === e.name) return e;
          if ("int64" === t.name) return t;
          if ("uint64" === e.name) {
            if ("uint32" === t.name) return e;
          } else if ("uint64" === t.name && "uint32" === e.name) return t;
          return u;
        }
        return l;
      }
      function m(e) {
        return e % 1 == 0
          ? e < 0
            ? e < -2147483648
              ? "int64"
              : "int32"
            : e > 4294967295
            ? "uint64"
            : "uint32"
          : "double";
      }
      const _ = document.getElementById("input"),
        y = document.getElementById("output"),
        w = document.getElementById("sample"),

        E = document.getElementById("inline"),
        x = document.getElementById("google.protobuf.Timestamp"),
        v = document.getElementById("merge-similar-objects"),
        O = document.getElementById("copy-to-clipboard"),
        k = new (class {
          constructor(e, t, n) {
            (this.inline = e),
              (this.googleProtobufTimestamp = t),
              (this.mergeSimilarObjects = n);
          }
        })(E.checked, x.checked, v.checked);
        const sample = document.getElementById('sampleBtn');
sample.addEventListener('click', function(e) {
  e.preventDefault();
  w.click();
});
      function M() {
        const t = (function (e, t) {
          if ("" === e) return new s("", "");
          const n = e.replace(/\.0/g, ".1");
          try {
            const e = JSON.parse(n),
              o = new h(t);
            return new s(o.analyze(e), "");
          } catch (e) {
            return new s("", e.message);
          }
        })(_.innerText.trim(), k);
        var n;
        t.success
          ? (y.innerHTML =
              ((n = t.success), e.highlight(n, { language: "protobuf" }).value))
          : (y.innerHTML = t.error);
      }
      _.addEventListener("keyup", M),
        E.addEventListener("change", function () {
          (k.inline = E.checked), M();
        }),
        x.addEventListener("change", function () {
          (k.googleProtobufTimestamp = x.checked), M();
        }),
        v.addEventListener("change", function () {
          (k.mergeSimilarObjects = v.checked), M();
        }),
        w.addEventListener("click", function () {
          (_.innerHTML = N), M();
        }),
        O.addEventListener("click", function () {
          navigator.clipboard.writeText(y.innerHTML);
        });
      const N =
        '{\n  "id": 23357588,\n  "node_id": "MDEwOlJlcG9zaXRvcnkyMzM1NzU4OA==",\n  "name": "protobuf",\n  "full_name": "protocolbuffers/protobuf",\n  "private": false,\n  "owner": {\n    "login": "protocolbuffers",\n    "id": 26310541,\n    "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2MzEwNTQx",\n    "avatar_url": "https://avatars1.githubusercontent.com/u/26310541?v=4",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/protocolbuffers",\n    "html_url": "https://github.com/protocolbuffers",\n    "followers_url": "https://api.github.com/users/protocolbuffers/followers",\n    "following_url": "https://api.github.com/users/protocolbuffers/following{/other_user}",\n    "gists_url": "https://api.github.com/users/protocolbuffers/gists{/gist_id}",\n    "starred_url": "https://api.github.com/users/protocolbuffers/starred{/owner}{/repo}",\n    "subscriptions_url": "https://api.github.com/users/protocolbuffers/subscriptions",\n    "organizations_url": "https://api.github.com/users/protocolbuffers/orgs",\n    "repos_url": "https://api.github.com/users/protocolbuffers/repos",\n    "events_url": "https://api.github.com/users/protocolbuffers/events{/privacy}",\n    "received_events_url": "https://api.github.com/users/protocolbuffers/received_events",\n    "type": "Organization",\n    "site_admin": false\n  },\n  "html_url": "https://github.com/protocolbuffers/protobuf",\n  "description": "Protocol Buffers - Google\'s data interchange format",\n  "fork": false,\n  "url": "https://api.github.com/repos/protocolbuffers/protobuf",\n  "forks_url": "https://api.github.com/repos/protocolbuffers/protobuf/forks",\n  "keys_url": "https://api.github.com/repos/protocolbuffers/protobuf/keys{/key_id}",\n  "collaborators_url": "https://api.github.com/repos/protocolbuffers/protobuf/collaborators{/collaborator}",\n  "teams_url": "https://api.github.com/repos/protocolbuffers/protobuf/teams",\n  "hooks_url": "https://api.github.com/repos/protocolbuffers/protobuf/hooks",\n  "issue_events_url": "https://api.github.com/repos/protocolbuffers/protobuf/issues/events{/number}",\n  "events_url": "https://api.github.com/repos/protocolbuffers/protobuf/events",\n  "assignees_url": "https://api.github.com/repos/protocolbuffers/protobuf/assignees{/user}",\n  "branches_url": "https://api.github.com/repos/protocolbuffers/protobuf/branches{/branch}",\n  "tags_url": "https://api.github.com/repos/protocolbuffers/protobuf/tags",\n  "blobs_url": "https://api.github.com/repos/protocolbuffers/protobuf/git/blobs{/sha}",\n  "git_tags_url": "https://api.github.com/repos/protocolbuffers/protobuf/git/tags{/sha}",\n  "git_refs_url": "https://api.github.com/repos/protocolbuffers/protobuf/git/refs{/sha}",\n  "trees_url": "https://api.github.com/repos/protocolbuffers/protobuf/git/trees{/sha}",\n  "statuses_url": "https://api.github.com/repos/protocolbuffers/protobuf/statuses/{sha}",\n  "languages_url": "https://api.github.com/repos/protocolbuffers/protobuf/languages",\n  "stargazers_url": "https://api.github.com/repos/protocolbuffers/protobuf/stargazers",\n  "contributors_url": "https://api.github.com/repos/protocolbuffers/protobuf/contributors",\n  "subscribers_url": "https://api.github.com/repos/protocolbuffers/protobuf/subscribers",\n  "subscription_url": "https://api.github.com/repos/protocolbuffers/protobuf/subscription",\n  "commits_url": "https://api.github.com/repos/protocolbuffers/protobuf/commits{/sha}",\n  "git_commits_url": "https://api.github.com/repos/protocolbuffers/protobuf/git/commits{/sha}",\n  "comments_url": "https://api.github.com/repos/protocolbuffers/protobuf/comments{/number}",\n  "issue_comment_url": "https://api.github.com/repos/protocolbuffers/protobuf/issues/comments{/number}",\n  "contents_url": "https://api.github.com/repos/protocolbuffers/protobuf/contents/{+path}",\n  "compare_url": "https://api.github.com/repos/protocolbuffers/protobuf/compare/{base}...{head}",\n  "merges_url": "https://api.github.com/repos/protocolbuffers/protobuf/merges",\n  "archive_url": "https://api.github.com/repos/protocolbuffers/protobuf/{archive_format}{/ref}",\n  "downloads_url": "https://api.github.com/repos/protocolbuffers/protobuf/downloads",\n  "issues_url": "https://api.github.com/repos/protocolbuffers/protobuf/issues{/number}",\n  "pulls_url": "https://api.github.com/repos/protocolbuffers/protobuf/pulls{/number}",\n  "milestones_url": "https://api.github.com/repos/protocolbuffers/protobuf/milestones{/number}",\n  "notifications_url": "https://api.github.com/repos/protocolbuffers/protobuf/notifications{?since,all,participating}",\n  "labels_url": "https://api.github.com/repos/protocolbuffers/protobuf/labels{/name}",\n  "releases_url": "https://api.github.com/repos/protocolbuffers/protobuf/releases{/id}",\n  "deployments_url": "https://api.github.com/repos/protocolbuffers/protobuf/deployments",\n  "created_at": "2014-08-26T15:52:15Z",\n  "updated_at": "2020-04-21T23:33:50Z",\n  "pushed_at": "2020-04-22T00:06:06Z",\n  "git_url": "git://github.com/protocolbuffers/protobuf.git",\n  "ssh_url": "git@github.com:protocolbuffers/protobuf.git",\n  "clone_url": "https://github.com/protocolbuffers/protobuf.git",\n  "svn_url": "https://github.com/protocolbuffers/protobuf",\n  "homepage": "https://developers.google.com/protocol-buffers/",\n  "size": 60901,\n  "stargazers_count": 41099,\n  "watchers_count": 41099,\n  "language": "C++",\n  "has_issues": true,\n  "has_projects": true,\n  "has_downloads": true,\n  "has_wiki": true,\n  "has_pages": true,\n  "forks_count": 11124,\n  "mirror_url": null,\n  "archived": false,\n  "disabled": false,\n  "open_issues_count": 1009,\n  "license": {\n    "key": "other",\n    "name": "Other",\n    "spdx_id": "NOASSERTION",\n    "url": null,\n    "node_id": "MDc6TGljZW5zZTA="\n  },\n  "forks": 11124,\n  "open_issues": 1009,\n  "watchers": 41099,\n  "default_branch": "master",\n  "temp_clone_token": null,\n  "organization": {\n    "login": "protocolbuffers",\n    "id": 26310541,\n    "node_id": "MDEyOk9yZ2FuaXphdGlvbjI2MzEwNTQx",\n    "avatar_url": "https://avatars1.githubusercontent.com/u/26310541?v=4",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/protocolbuffers",\n    "html_url": "https://github.com/protocolbuffers",\n    "followers_url": "https://api.github.com/users/protocolbuffers/followers",\n    "following_url": "https://api.github.com/users/protocolbuffers/following{/other_user}",\n    "gists_url": "https://api.github.com/users/protocolbuffers/gists{/gist_id}",\n    "starred_url": "https://api.github.com/users/protocolbuffers/starred{/owner}{/repo}",\n    "subscriptions_url": "https://api.github.com/users/protocolbuffers/subscriptions",\n    "organizations_url": "https://api.github.com/users/protocolbuffers/orgs",\n    "repos_url": "https://api.github.com/users/protocolbuffers/repos",\n    "events_url": "https://api.github.com/users/protocolbuffers/events{/privacy}",\n    "received_events_url": "https://api.github.com/users/protocolbuffers/received_events",\n    "type": "Organization",\n    "site_admin": false\n  },\n  "network_count": 11124,\n  "subscribers_count": 2059\n}';
    })();
  })();
  