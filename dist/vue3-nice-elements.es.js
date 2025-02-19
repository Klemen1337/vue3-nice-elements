import { useSlots as C1, resolveComponent as R, openBlock as v, createElementBlock as p, normalizeClass as I, unref as C, createBlock as H, createCommentVNode as M, renderSlot as X, toDisplayString as N, Teleport as W2, createVNode as T, Transition as n1, withCtx as e0, normalizeStyle as u2, createElementVNode as y, createTextVNode as f0, inject as t0, Fragment as Z, computed as Q, pushScopeId as U0, popScopeId as X0, ref as W, onMounted as u0, onBeforeUnmount as Y2, withDirectives as C0, vShow as L1, watch as m1, renderList as J, vModelText as l1, mergeProps as h2, isRef as B1, vModelDynamic as L2, TransitionGroup as v2, onUnmounted as j2, createStaticVNode as H2, resolveDynamicComponent as y1, normalizeProps as R2 } from "vue";
import { useRoute as f2, useRouter as p2 } from "vue-router";
function U2(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(c, t) {
    var s = e.get(c);
    s ? s.push(t) : e.set(c, [t]);
  }, off: function(c, t) {
    var s = e.get(c);
    s && (t ? s.splice(s.indexOf(t) >>> 0, 1) : e.set(c, []));
  }, emit: function(c, t) {
    var s = e.get(c);
    s && s.slice().map(function(n) {
      n(t);
    }), (s = e.get("*")) && s.slice().map(function(n) {
      n(c, t);
    });
  } };
}
const G = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of c)
    t[s] = n;
  return t;
}, X2 = ["type", "disabled"], Q2 = { key: 2 }, G2 = { key: 3 }, Z2 = {
  name: "NiceButton"
}, J2 = /* @__PURE__ */ Object.assign(Z2, {
  props: {
    addClass: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    appendIcon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    plain: {
      type: Boolean,
      default: !1
    },
    outline: {
      type: Boolean,
      default: !1
    },
    naked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator(e) {
        return ["mini", "small", "large"].includes(e);
      }
    },
    nativeType: {
      type: String,
      default: "button",
      validator(e) {
        return [
          "button",
          // The button is a clickable button
          "submit",
          // The button is a submit button (submits form-data)
          "reset"
          // The button is a reset button (resets the form-data to its initial values)
        ].includes(e);
      }
    },
    type: {
      type: String,
      default: "primary",
      validator(e) {
        return [
          "primary",
          "default",
          "success",
          "warning",
          "danger",
          "info",
          "dark",
          "naked",
          "white"
        ].includes(e);
      }
    }
  },
  setup(e) {
    const c = e, t = C1();
    return (s, n) => {
      const o = R("NiceLoading"), i = R("NiceIcon");
      return v(), p("button", {
        class: I(["nice-button btn", [
          c.addClass,
          "btn-" + c.type,
          c.size ? "btn-" + c.size : "",
          {
            "btn-naked": c.naked,
            "btn-rounded": c.rounded,
            "btn-plain": c.plain,
            "btn-outline": c.outline,
            "btn-icon": !C(t).default && !c.text && (c.icon || c.appendIcon)
          }
        ]]),
        type: c.nativeType,
        disabled: c.disabled || c.loading
      }, [
        c.loading ? (v(), H(o, {
          key: 0,
          fullDiv: ""
        })) : M("", !0),
        c.icon ? (v(), H(i, {
          key: 1,
          icon: c.icon
        }, null, 8, ["icon"])) : M("", !0),
        C(t).default ? (v(), p("span", Q2, [
          X(s.$slots, "default", {}, void 0, !0)
        ])) : M("", !0),
        c.text ? (v(), p("span", G2, N(c.text), 1)) : M("", !0),
        c.appendIcon ? (v(), H(i, {
          key: 4,
          icon: c.appendIcon
        }, null, 8, ["icon"])) : M("", !0)
      ], 10, X2);
    };
  }
}), B0 = /* @__PURE__ */ G(J2, [["__scopeId", "data-v-5bdcb792"]]);
const K2 = {
  name: "NiceModal",
  props: {
    name: {
      type: String,
      required: !0
    },
    height: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "500px"
    },
    title: {
      type: String,
      required: !1,
      default: void 0
    },
    subtitle: {
      type: String,
      required: !1,
      default: void 0
    }
  },
  emits: ["close"],
  data() {
    return {
      debug: !1,
      isOpen: !1,
      startingPosition: { "--x": "50%", "--y": "50%" }
    };
  },
  beforeMount() {
    this.debug = this.$nice.debug, this.debug && (this.isOpen = !0);
  },
  mounted() {
    this.$nice.onModal(this.onToggle);
  },
  methods: {
    close() {
      this.$emit("close"), this.$nice.modal(this.name, !1);
    },
    onToggle({ name: e, isOpen: c, event: t }) {
      this.name === e && (c ?? !this.isOpen ? (t ? this.startingPosition = { "--x": t.clientX + "px", "--y": t.clientY + "px" } : this.startingPosition = { "--x": "50%", "--y": "50%" }, this.isOpen = !0) : this.isOpen = !1);
    }
  }
}, e4 = {
  key: 0,
  class: "nice-modal-header"
}, t4 = { class: "nice-modal-title" }, c4 = { class: "nice-modal-subtitle" }, s4 = {
  key: 1,
  class: "nice-modal-footer"
};
function n4(e, c, t, s, n, o) {
  const i = R("NiceButton");
  return v(), H(W2, { to: "body" }, [
    T(n1, { name: "fade" }, {
      default: e0(() => [
        n.isOpen ? (v(), p("div", {
          key: 0,
          class: "nice-modal-overlay",
          onClick: c[0] || (c[0] = (...a) => o.close && o.close(...a))
        })) : M("", !0)
      ]),
      _: 1
    }),
    T(n1, { name: "flyin" }, {
      default: e0(() => [
        n.isOpen ? (v(), p("div", {
          key: 0,
          class: "nice-modal",
          style: u2([{ width: t.width, height: t.height }, n.startingPosition])
        }, [
          e.$slots.title || t.title || e.$slots.subtitle || t.subtitle ? (v(), p("div", e4, [
            y("div", t4, [
              e.$slots.title || t.title ? X(e.$slots, "title", { key: 0 }, () => [
                f0(N(t.title), 1)
              ], !0) : M("", !0)
            ]),
            y("div", c4, [
              e.$slots.subtitle || t.subtitle ? X(e.$slots, "subtitle", { key: 0 }, () => [
                f0(N(t.subtitle), 1)
              ], !0) : M("", !0)
            ]),
            T(i, {
              class: "nice-modal-close",
              icon: "icon-x",
              naked: "",
              onClick: o.close
            }, null, 8, ["onClick"])
          ])) : M("", !0),
          y("div", {
            class: I(["nice-modal-body", { "no-header": !(e.$slots.title || t.title || e.$slots.subtitle || t.subtitle), "no-footer": !e.$slots.footer }])
          }, [
            X(e.$slots, "default", {}, void 0, !0)
          ], 2),
          e.$slots.footer ? (v(), p("div", s4, [
            X(e.$slots, "footer", {}, void 0, !0)
          ])) : M("", !0)
        ], 4)) : M("", !0)
      ]),
      _: 3
    })
  ]);
}
const m2 = /* @__PURE__ */ G(K2, [["render", n4], ["__scopeId", "data-v-0bffddaa"]]), a4 = { class: "nice-actions" }, o4 = {
  name: "NiceConfirmModal"
}, y2 = /* @__PURE__ */ Object.assign(o4, {
  props: {
    name: {
      type: String,
      default: "confirm-prompt"
    }
  },
  emits: ["cancel", "confirm"],
  setup(e, { emit: c }) {
    const t = e, s = t0("$t"), n = t0("nice");
    function o() {
      n.modal(t.name, !1), c("cancel");
    }
    function i() {
      c("confirm");
    }
    return (a, d) => (v(), H(m2, {
      name: e.name,
      title: C(s)("Nice", "Delete"),
      subtitle: C(s)("Nice", "Are you sure you want to delete?"),
      onClose: o
    }, {
      default: e0(() => [
        y("div", a4, [
          T(B0, {
            text: C(s)("Nice", "Cancel"),
            onClick: o,
            type: "default",
            plain: "",
            icon: "icon-x"
          }, null, 8, ["text"]),
          T(B0, {
            text: C(s)("Nice", "Confirm"),
            onClick: i,
            icon: "icon-check"
          }, null, 8, ["text"])
        ])
      ]),
      _: 1
    }, 8, ["name", "title", "subtitle"]));
  }
});
const i4 = { class: "nice-actions" }, l4 = /* @__PURE__ */ y("div", { class: "f-grow" }, null, -1), r4 = {
  name: "NiceActions"
}, d4 = /* @__PURE__ */ Object.assign(r4, {
  props: {
    form: String,
    loading: Boolean,
    showDelete: Boolean,
    submitText: String,
    deleteText: String,
    disableCancel: Boolean,
    disableDelete: Boolean,
    disableSubmit: Boolean
  },
  emits: ["submit", "cancel", "delete"],
  setup(e, { emit: c }) {
    const t = e, s = t0("nice");
    function n() {
      c("submit");
    }
    function o() {
      s.modal("delete-prompt", !0);
    }
    function i() {
      s.modal("delete-prompt", !1), c("delete");
    }
    function a() {
      c("cancel");
    }
    return (d, r) => {
      const l = R("NiceButton");
      return v(), p(Z, null, [
        y("div", i4, [
          t.showDelete ? (v(), H(l, {
            key: 0,
            plain: "",
            type: "danger",
            onClick: o,
            text: d.$t("Nice", "Delete"),
            form: t.form,
            disabled: t.loading || t.disableDelete,
            icon: "icon-trash-2"
          }, null, 8, ["text", "form", "disabled"])) : M("", !0),
          X(d.$slots, "left"),
          l4,
          X(d.$slots, "default"),
          T(l, {
            plain: "",
            type: "default",
            onClick: a,
            text: d.$t("Nice", "Cancel"),
            form: t.form,
            disabled: t.loading || t.disableCancel,
            icon: "icon-x"
          }, null, 8, ["text", "form", "disabled"]),
          T(l, {
            "native-type": "submit",
            onClick: n,
            text: t.submitText ? t.submitText : d.$t("Nice", "Submit"),
            form: t.form,
            disabled: t.loading || t.disableSubmit,
            icon: "icon-save"
          }, null, 8, ["text", "form", "disabled"])
        ]),
        T(y2, {
          name: "delete-prompt",
          onConfirm: i,
          title: d.$t("Nice", "Delete"),
          subtitle: t.deleteText ? t.deleteText : d.$t("Nice", "Are you sure you want to delete?")
        }, null, 8, ["title", "subtitle"])
      ], 64);
    };
  }
});
function u4(e) {
  for (var c = 5381, t = e.length; t; )
    c = c * 33 ^ e.charCodeAt(--t);
  return c >>> 0;
}
var h4 = u4;
const v4 = (e, c, t) => [
  [e, c, t],
  [(e + 120) % 360, c, t],
  [(e + 240) % 360, c, t]
];
var f4 = v4;
const f1 = (e, c, t) => (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (c - e) * 6 * t : t < 1 / 2 ? c : t < 2 / 3 ? e + (c - e) * (2 / 3 - t) * 6 : e), p4 = (e, c, t) => {
  let s, n, o;
  if (e = e / 360, c == 0)
    s = n = o = t;
  else {
    const i = t < 0.5 ? t * (1 + c) : t + c - t * c, a = 2 * t - i;
    s = f1(a, i, e + 1 / 3), n = f1(a, i, e), o = f1(a, i, e - 1 / 3);
  }
  return [
    Math.max(0, Math.min(Math.round(s * 255), 255)),
    Math.max(0, Math.min(Math.round(n * 255), 255)),
    Math.max(0, Math.min(Math.round(o * 255), 255))
  ];
};
var m4 = p4;
const y4 = h4, g4 = f4, j1 = m4, b4 = () => Math.floor(Math.random() * Date.now()), M4 = (e, c) => {
  const t = y4(e), s = g4(t % 360, 1, 0.5), n = j1(s[0][0], s[0][1], s[0][2]), o = j1(s[1][0], s[1][1], s[1][2]), i = `rgb(${n[0]}, ${n[1]}, ${n[2]})`, a = `rgb(${o[0]}, ${o[1]}, ${o[2]})`, d = b4();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${c != null ? `width="${c}px" height="${c}px"` : ""} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${d}">
      <stop stop-color="${i}" offset="0%"></stop>
      <stop stop-color="${a}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${d})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
};
var z4 = M4, a1 = {}, w4 = {
  get exports() {
    return a1;
  },
  set exports(e) {
    a1 = e;
  }
}, g1 = {}, x4 = {
  get exports() {
    return g1;
  },
  set exports(e) {
    g1 = e;
  }
};
(function() {
  var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = {
    // Bit-wise rotation left
    rotl: function(t, s) {
      return t << s | t >>> 32 - s;
    },
    // Bit-wise rotation right
    rotr: function(t, s) {
      return t << 32 - s | t >>> s;
    },
    // Swap big-endian to little-endian and vice versa
    endian: function(t) {
      if (t.constructor == Number)
        return c.rotl(t, 8) & 16711935 | c.rotl(t, 24) & 4278255360;
      for (var s = 0; s < t.length; s++)
        t[s] = c.endian(t[s]);
      return t;
    },
    // Generate an array of any length of random bytes
    randomBytes: function(t) {
      for (var s = []; t > 0; t--)
        s.push(Math.floor(Math.random() * 256));
      return s;
    },
    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(t) {
      for (var s = [], n = 0, o = 0; n < t.length; n++, o += 8)
        s[o >>> 5] |= t[n] << 24 - o % 32;
      return s;
    },
    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(t) {
      for (var s = [], n = 0; n < t.length * 32; n += 8)
        s.push(t[n >>> 5] >>> 24 - n % 32 & 255);
      return s;
    },
    // Convert a byte array to a hex string
    bytesToHex: function(t) {
      for (var s = [], n = 0; n < t.length; n++)
        s.push((t[n] >>> 4).toString(16)), s.push((t[n] & 15).toString(16));
      return s.join("");
    },
    // Convert a hex string to a byte array
    hexToBytes: function(t) {
      for (var s = [], n = 0; n < t.length; n += 2)
        s.push(parseInt(t.substr(n, 2), 16));
      return s;
    },
    // Convert a byte array to a base-64 string
    bytesToBase64: function(t) {
      for (var s = [], n = 0; n < t.length; n += 3)
        for (var o = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++)
          n * 8 + i * 6 <= t.length * 8 ? s.push(e.charAt(o >>> 6 * (3 - i) & 63)) : s.push("=");
      return s.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(t) {
      t = t.replace(/[^A-Z0-9+\/]/ig, "");
      for (var s = [], n = 0, o = 0; n < t.length; o = ++n % 4)
        o != 0 && s.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << o * 2 | e.indexOf(t.charAt(n)) >>> 6 - o * 2);
      return s;
    }
  };
  x4.exports = c;
})();
var b1 = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return b1.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(b1.bin.bytesToString(e)));
    }
  },
  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      for (var c = [], t = 0; t < e.length; t++)
        c.push(e.charCodeAt(t) & 255);
      return c;
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      for (var c = [], t = 0; t < e.length; t++)
        c.push(String.fromCharCode(e[t]));
      return c.join("");
    }
  }
}, H1 = b1;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var _4 = function(e) {
  return e != null && (g2(e) || C4(e) || !!e._isBuffer);
};
function g2(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function C4(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && g2(e.slice(0, 0));
}
(function() {
  var e = g1, c = H1.utf8, t = _4, s = H1.bin, n = function(o, i) {
    o.constructor == String ? i && i.encoding === "binary" ? o = s.stringToBytes(o) : o = c.stringToBytes(o) : t(o) ? o = Array.prototype.slice.call(o, 0) : !Array.isArray(o) && o.constructor !== Uint8Array && (o = o.toString());
    for (var a = e.bytesToWords(o), d = o.length * 8, r = 1732584193, l = -271733879, u = -1732584194, h = 271733878, f = 0; f < a.length; f++)
      a[f] = (a[f] << 8 | a[f] >>> 24) & 16711935 | (a[f] << 24 | a[f] >>> 8) & 4278255360;
    a[d >>> 5] |= 128 << d % 32, a[(d + 64 >>> 9 << 4) + 14] = d;
    for (var x = n._ff, z = n._gg, w = n._hh, B = n._ii, f = 0; f < a.length; f += 16) {
      var q = r, D = l, m = u, _ = h;
      r = x(r, l, u, h, a[f + 0], 7, -680876936), h = x(h, r, l, u, a[f + 1], 12, -389564586), u = x(u, h, r, l, a[f + 2], 17, 606105819), l = x(l, u, h, r, a[f + 3], 22, -1044525330), r = x(r, l, u, h, a[f + 4], 7, -176418897), h = x(h, r, l, u, a[f + 5], 12, 1200080426), u = x(u, h, r, l, a[f + 6], 17, -1473231341), l = x(l, u, h, r, a[f + 7], 22, -45705983), r = x(r, l, u, h, a[f + 8], 7, 1770035416), h = x(h, r, l, u, a[f + 9], 12, -1958414417), u = x(u, h, r, l, a[f + 10], 17, -42063), l = x(l, u, h, r, a[f + 11], 22, -1990404162), r = x(r, l, u, h, a[f + 12], 7, 1804603682), h = x(h, r, l, u, a[f + 13], 12, -40341101), u = x(u, h, r, l, a[f + 14], 17, -1502002290), l = x(l, u, h, r, a[f + 15], 22, 1236535329), r = z(r, l, u, h, a[f + 1], 5, -165796510), h = z(h, r, l, u, a[f + 6], 9, -1069501632), u = z(u, h, r, l, a[f + 11], 14, 643717713), l = z(l, u, h, r, a[f + 0], 20, -373897302), r = z(r, l, u, h, a[f + 5], 5, -701558691), h = z(h, r, l, u, a[f + 10], 9, 38016083), u = z(u, h, r, l, a[f + 15], 14, -660478335), l = z(l, u, h, r, a[f + 4], 20, -405537848), r = z(r, l, u, h, a[f + 9], 5, 568446438), h = z(h, r, l, u, a[f + 14], 9, -1019803690), u = z(u, h, r, l, a[f + 3], 14, -187363961), l = z(l, u, h, r, a[f + 8], 20, 1163531501), r = z(r, l, u, h, a[f + 13], 5, -1444681467), h = z(h, r, l, u, a[f + 2], 9, -51403784), u = z(u, h, r, l, a[f + 7], 14, 1735328473), l = z(l, u, h, r, a[f + 12], 20, -1926607734), r = w(r, l, u, h, a[f + 5], 4, -378558), h = w(h, r, l, u, a[f + 8], 11, -2022574463), u = w(u, h, r, l, a[f + 11], 16, 1839030562), l = w(l, u, h, r, a[f + 14], 23, -35309556), r = w(r, l, u, h, a[f + 1], 4, -1530992060), h = w(h, r, l, u, a[f + 4], 11, 1272893353), u = w(u, h, r, l, a[f + 7], 16, -155497632), l = w(l, u, h, r, a[f + 10], 23, -1094730640), r = w(r, l, u, h, a[f + 13], 4, 681279174), h = w(h, r, l, u, a[f + 0], 11, -358537222), u = w(u, h, r, l, a[f + 3], 16, -722521979), l = w(l, u, h, r, a[f + 6], 23, 76029189), r = w(r, l, u, h, a[f + 9], 4, -640364487), h = w(h, r, l, u, a[f + 12], 11, -421815835), u = w(u, h, r, l, a[f + 15], 16, 530742520), l = w(l, u, h, r, a[f + 2], 23, -995338651), r = B(r, l, u, h, a[f + 0], 6, -198630844), h = B(h, r, l, u, a[f + 7], 10, 1126891415), u = B(u, h, r, l, a[f + 14], 15, -1416354905), l = B(l, u, h, r, a[f + 5], 21, -57434055), r = B(r, l, u, h, a[f + 12], 6, 1700485571), h = B(h, r, l, u, a[f + 3], 10, -1894986606), u = B(u, h, r, l, a[f + 10], 15, -1051523), l = B(l, u, h, r, a[f + 1], 21, -2054922799), r = B(r, l, u, h, a[f + 8], 6, 1873313359), h = B(h, r, l, u, a[f + 15], 10, -30611744), u = B(u, h, r, l, a[f + 6], 15, -1560198380), l = B(l, u, h, r, a[f + 13], 21, 1309151649), r = B(r, l, u, h, a[f + 4], 6, -145523070), h = B(h, r, l, u, a[f + 11], 10, -1120210379), u = B(u, h, r, l, a[f + 2], 15, 718787259), l = B(l, u, h, r, a[f + 9], 21, -343485551), r = r + q >>> 0, l = l + D >>> 0, u = u + m >>> 0, h = h + _ >>> 0;
    }
    return e.endian([r, l, u, h]);
  };
  n._ff = function(o, i, a, d, r, l, u) {
    var h = o + (i & a | ~i & d) + (r >>> 0) + u;
    return (h << l | h >>> 32 - l) + i;
  }, n._gg = function(o, i, a, d, r, l, u) {
    var h = o + (i & d | a & ~d) + (r >>> 0) + u;
    return (h << l | h >>> 32 - l) + i;
  }, n._hh = function(o, i, a, d, r, l, u) {
    var h = o + (i ^ a ^ d) + (r >>> 0) + u;
    return (h << l | h >>> 32 - l) + i;
  }, n._ii = function(o, i, a, d, r, l, u) {
    var h = o + (a ^ (i | ~d)) + (r >>> 0) + u;
    return (h << l | h >>> 32 - l) + i;
  }, n._blocksize = 16, n._digestsize = 16, w4.exports = function(o, i) {
    if (o == null)
      throw new Error("Illegal argument " + o);
    var a = e.wordsToBytes(n(o, i));
    return i && i.asBytes ? a : i && i.asString ? s.bytesToString(a) : e.bytesToHex(a);
  };
})();
const B4 = {
  key: 0,
  class: "status"
}, k4 = ["innerHTML"], N4 = ["src"], $4 = ["src"], O4 = {
  key: 4,
  class: "text"
}, S4 = {
  name: "NiceAvatar"
}, D4 = /* @__PURE__ */ Object.assign(S4, {
  props: {
    text: {
      type: String,
      required: !1
    },
    size: {
      type: String,
      default: null,
      validator(e) {
        return ["mini", "small", "default", "medium", "large"].includes(e);
      }
    },
    type: {
      type: String,
      default: null,
      validator(e) {
        return [
          "primary",
          "default",
          "success",
          "warning",
          "danger",
          "info",
          "dark",
          "white"
        ].includes(e);
      }
    },
    status: {
      type: String,
      default: null,
      validator(e) {
        return [
          "primary",
          "default",
          "success",
          "warning",
          "danger",
          "info",
          "dark",
          "white"
        ].includes(e);
      }
    },
    shape: {
      type: String,
      default: null,
      validator(e) {
        return [
          "rounded",
          "square"
        ].includes(e);
      }
    },
    image: {
      type: String,
      required: !1
    },
    gradient: Boolean,
    plain: Boolean,
    hash: String,
    gavatar: String
  },
  setup(e) {
    const c = e, t = Q(() => z4(a1(c.hash || c.text))), s = Q(() => {
      const o = c.text.split(" ");
      return o.length > 1 ? o[0][0] + o[1][0] : c.text[0] + c.text[1];
    }), n = Q(() => "https://www.gravatar.com/avatar/" + a1(c.gavatar.trim().toLowerCase()) + "?s=50");
    return (o, i) => (v(), p("div", {
      class: I(["nice-avatar", [
        c.size ? "size-" + c.size : "",
        c.shape ? "shape-" + c.shape : "",
        c.type ? "type-" + c.type : "",
        c.status ? "status-" + c.status : "",
        {
          plain: c.plain,
          gradient: c.gradient
        }
      ]])
    }, [
      c.status ? (v(), p("div", B4)) : M("", !0),
      c.gradient ? (v(), p("div", {
        key: 1,
        class: "gradient",
        innerHTML: C(t)
      }, null, 8, k4)) : M("", !0),
      c.gavatar ? (v(), p("img", {
        key: 2,
        class: "image",
        src: C(n)
      }, null, 8, N4)) : M("", !0),
      c.image ? (v(), p("img", {
        key: 3,
        class: "image",
        src: c.image
      }, null, 8, $4)) : M("", !0),
      c.text ? (v(), p("div", O4, N(C(s)), 1)) : M("", !0)
    ], 2));
  }
});
const T4 = (e) => (U0("data-v-d12df4cc"), e = e(), X0(), e), V4 = { class: "nice-checkbox-box" }, P4 = {
  key: 0,
  viewBox: "0 0 20 20"
}, E4 = /* @__PURE__ */ T4(() => /* @__PURE__ */ y("path", { d: "M0 11l2-2 5 5 11-11 2 2-13 13z" }, null, -1)), q4 = [
  E4
], F4 = ["for"], I4 = ["id", "disabled"], A4 = {
  name: "NiceCheckbox"
}, W4 = /* @__PURE__ */ Object.assign(A4, {
  props: {
    modelValue: {
      type: [Boolean, null],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = Math.random().toString(36).slice(2, 7), n = Q({
      get() {
        return t.modelValue;
      },
      set(i) {
        c("update:modelValue", i), c("change", i);
      }
    });
    function o() {
      t.disabled || (n.value = !n.value);
    }
    return (i, a) => (v(), p("div", {
      class: I(["nice-component nice-checkbox", { "no-margin": t.noMargin, active: C(n), disabled: t.disabled }]),
      onClick: o
    }, [
      y("div", V4, [
        C(n) ? (v(), p("svg", P4, q4)) : M("", !0)
      ]),
      t.title ? (v(), p("div", {
        key: 0,
        class: "nice-checkbox-title",
        for: "nice-checkbox" + C(s)
      }, N(t.title), 9, F4)) : M("", !0),
      y("input", {
        type: "checkbox",
        id: "nice-checkbox" + C(s),
        disabled: t.disabled
      }, null, 8, I4)
    ], 2));
  }
}), Y0 = /* @__PURE__ */ G(W4, [["__scopeId", "data-v-d12df4cc"]]);
const Y4 = {
  name: "NiceComponentHeader",
  props: {
    title: String,
    caption: String,
    required: Boolean
  }
}, L4 = {
  key: 0,
  class: "nice-component-header"
}, j4 = {
  key: 0,
  class: "nice-component-title"
}, H4 = {
  key: 0,
  class: "nice-component-required"
}, R4 = {
  key: 1,
  class: "nice-component-caption"
};
function U4(e, c, t, s, n, o) {
  return t.title || t.caption ? (v(), p("div", L4, [
    t.title ? (v(), p("div", j4, [
      f0(N(t.title) + " ", 1),
      t.required ? (v(), p("span", H4, " *")) : M("", !0)
    ])) : M("", !0),
    t.caption ? (v(), p("div", R4, N(t.caption), 1)) : M("", !0)
  ])) : M("", !0);
}
const g0 = /* @__PURE__ */ G(Y4, [["render", U4], ["__scopeId", "data-v-6938ba71"]]);
var s0 = "top", i0 = "bottom", l0 = "right", n0 = "left", r1 = "auto", Q0 = [s0, i0, l0, n0], S0 = "start", H0 = "end", X4 = "clippingParents", b2 = "viewport", I0 = "popper", Q4 = "reference", R1 = /* @__PURE__ */ Q0.reduce(function(e, c) {
  return e.concat([c + "-" + S0, c + "-" + H0]);
}, []), M2 = /* @__PURE__ */ [].concat(Q0, [r1]).reduce(function(e, c) {
  return e.concat([c, c + "-" + S0, c + "-" + H0]);
}, []), G4 = "beforeRead", Z4 = "read", J4 = "afterRead", K4 = "beforeMain", e3 = "main", t3 = "afterMain", c3 = "beforeWrite", s3 = "write", n3 = "afterWrite", M1 = [G4, Z4, J4, K4, e3, t3, c3, s3, n3];
function h0(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function o0(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var c = e.ownerDocument;
    return c && c.defaultView || window;
  }
  return e;
}
function k0(e) {
  var c = o0(e).Element;
  return e instanceof c || e instanceof Element;
}
function a0(e) {
  var c = o0(e).HTMLElement;
  return e instanceof c || e instanceof HTMLElement;
}
function k1(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var c = o0(e).ShadowRoot;
  return e instanceof c || e instanceof ShadowRoot;
}
function a3(e) {
  var c = e.state;
  Object.keys(c.elements).forEach(function(t) {
    var s = c.styles[t] || {}, n = c.attributes[t] || {}, o = c.elements[t];
    !a0(o) || !h0(o) || (Object.assign(o.style, s), Object.keys(n).forEach(function(i) {
      var a = n[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function o3(e) {
  var c = e.state, t = {
    popper: {
      position: c.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(c.elements.popper.style, t.popper), c.styles = t, c.elements.arrow && Object.assign(c.elements.arrow.style, t.arrow), function() {
    Object.keys(c.elements).forEach(function(s) {
      var n = c.elements[s], o = c.attributes[s] || {}, i = Object.keys(c.styles.hasOwnProperty(s) ? c.styles[s] : t[s]), a = i.reduce(function(d, r) {
        return d[r] = "", d;
      }, {});
      !a0(n) || !h0(n) || (Object.assign(n.style, a), Object.keys(o).forEach(function(d) {
        n.removeAttribute(d);
      }));
    });
  };
}
const i3 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: a3,
  effect: o3,
  requires: ["computeStyles"]
};
function r0(e) {
  return e.split("-")[0];
}
var _0 = Math.max, o1 = Math.min, D0 = Math.round;
function z1() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(c) {
    return c.brand + "/" + c.version;
  }).join(" ") : navigator.userAgent;
}
function z2() {
  return !/^((?!chrome|android).)*safari/i.test(z1());
}
function T0(e, c, t) {
  c === void 0 && (c = !1), t === void 0 && (t = !1);
  var s = e.getBoundingClientRect(), n = 1, o = 1;
  c && a0(e) && (n = e.offsetWidth > 0 && D0(s.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && D0(s.height) / e.offsetHeight || 1);
  var i = k0(e) ? o0(e) : window, a = i.visualViewport, d = !z2() && t, r = (s.left + (d && a ? a.offsetLeft : 0)) / n, l = (s.top + (d && a ? a.offsetTop : 0)) / o, u = s.width / n, h = s.height / o;
  return {
    width: u,
    height: h,
    top: l,
    right: r + u,
    bottom: l + h,
    left: r,
    x: r,
    y: l
  };
}
function N1(e) {
  var c = T0(e), t = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(c.width - t) <= 1 && (t = c.width), Math.abs(c.height - s) <= 1 && (s = c.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: s
  };
}
function w2(e, c) {
  var t = c.getRootNode && c.getRootNode();
  if (e.contains(c))
    return !0;
  if (t && k1(t)) {
    var s = c;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function d0(e) {
  return o0(e).getComputedStyle(e);
}
function l3(e) {
  return ["table", "td", "th"].indexOf(h0(e)) >= 0;
}
function b0(e) {
  return ((k0(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function d1(e) {
  return h0(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (k1(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    b0(e)
  );
}
function U1(e) {
  return !a0(e) || // https://github.com/popperjs/popper-core/issues/837
  d0(e).position === "fixed" ? null : e.offsetParent;
}
function r3(e) {
  var c = /firefox/i.test(z1()), t = /Trident/i.test(z1());
  if (t && a0(e)) {
    var s = d0(e);
    if (s.position === "fixed")
      return null;
  }
  var n = d1(e);
  for (k1(n) && (n = n.host); a0(n) && ["html", "body"].indexOf(h0(n)) < 0; ) {
    var o = d0(n);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || c && o.willChange === "filter" || c && o.filter && o.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function G0(e) {
  for (var c = o0(e), t = U1(e); t && l3(t) && d0(t).position === "static"; )
    t = U1(t);
  return t && (h0(t) === "html" || h0(t) === "body" && d0(t).position === "static") ? c : t || r3(e) || c;
}
function $1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function L0(e, c, t) {
  return _0(e, o1(c, t));
}
function d3(e, c, t) {
  var s = L0(e, c, t);
  return s > t ? t : s;
}
function x2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _2(e) {
  return Object.assign({}, x2(), e);
}
function C2(e, c) {
  return c.reduce(function(t, s) {
    return t[s] = e, t;
  }, {});
}
var u3 = function(c, t) {
  return c = typeof c == "function" ? c(Object.assign({}, t.rects, {
    placement: t.placement
  })) : c, _2(typeof c != "number" ? c : C2(c, Q0));
};
function h3(e) {
  var c, t = e.state, s = e.name, n = e.options, o = t.elements.arrow, i = t.modifiersData.popperOffsets, a = r0(t.placement), d = $1(a), r = [n0, l0].indexOf(a) >= 0, l = r ? "height" : "width";
  if (!(!o || !i)) {
    var u = u3(n.padding, t), h = N1(o), f = d === "y" ? s0 : n0, x = d === "y" ? i0 : l0, z = t.rects.reference[l] + t.rects.reference[d] - i[d] - t.rects.popper[l], w = i[d] - t.rects.reference[d], B = G0(o), q = B ? d === "y" ? B.clientHeight || 0 : B.clientWidth || 0 : 0, D = z / 2 - w / 2, m = u[f], _ = q - h[l] - u[x], S = q / 2 - h[l] / 2 + D, F = L0(m, S, _), Y = d;
    t.modifiersData[s] = (c = {}, c[Y] = F, c.centerOffset = F - S, c);
  }
}
function v3(e) {
  var c = e.state, t = e.options, s = t.element, n = s === void 0 ? "[data-popper-arrow]" : s;
  if (n != null && !(typeof n == "string" && (n = c.elements.popper.querySelector(n), !n))) {
    if (process.env.NODE_ENV !== "production" && (a0(n) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !w2(c.elements.popper, n)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    c.elements.arrow = n;
  }
}
const f3 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: h3,
  effect: v3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function V0(e) {
  return e.split("-")[1];
}
var p3 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function m3(e, c) {
  var t = e.x, s = e.y, n = c.devicePixelRatio || 1;
  return {
    x: D0(t * n) / n || 0,
    y: D0(s * n) / n || 0
  };
}
function X1(e) {
  var c, t = e.popper, s = e.popperRect, n = e.placement, o = e.variation, i = e.offsets, a = e.position, d = e.gpuAcceleration, r = e.adaptive, l = e.roundOffsets, u = e.isFixed, h = i.x, f = h === void 0 ? 0 : h, x = i.y, z = x === void 0 ? 0 : x, w = typeof l == "function" ? l({
    x: f,
    y: z
  }) : {
    x: f,
    y: z
  };
  f = w.x, z = w.y;
  var B = i.hasOwnProperty("x"), q = i.hasOwnProperty("y"), D = n0, m = s0, _ = window;
  if (r) {
    var S = G0(t), F = "clientHeight", Y = "clientWidth";
    if (S === o0(t) && (S = b0(t), d0(S).position !== "static" && a === "absolute" && (F = "scrollHeight", Y = "scrollWidth")), S = S, n === s0 || (n === n0 || n === l0) && o === H0) {
      m = i0;
      var A = u && S === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[F]
      );
      z -= A - s.height, z *= d ? 1 : -1;
    }
    if (n === n0 || (n === s0 || n === i0) && o === H0) {
      D = l0;
      var L = u && S === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[Y]
      );
      f -= L - s.width, f *= d ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: a
  }, r && p3), j = l === !0 ? m3({
    x: f,
    y: z
  }, o0(t)) : {
    x: f,
    y: z
  };
  if (f = j.x, z = j.y, d) {
    var g;
    return Object.assign({}, $, (g = {}, g[m] = q ? "0" : "", g[D] = B ? "0" : "", g.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + z + "px)" : "translate3d(" + f + "px, " + z + "px, 0)", g));
  }
  return Object.assign({}, $, (c = {}, c[m] = q ? z + "px" : "", c[D] = B ? f + "px" : "", c.transform = "", c));
}
function y3(e) {
  var c = e.state, t = e.options, s = t.gpuAcceleration, n = s === void 0 ? !0 : s, o = t.adaptive, i = o === void 0 ? !0 : o, a = t.roundOffsets, d = a === void 0 ? !0 : a;
  if (process.env.NODE_ENV !== "production") {
    var r = d0(c.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(u) {
      return r.indexOf(u) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var l = {
    placement: r0(c.placement),
    variation: V0(c.placement),
    popper: c.elements.popper,
    popperRect: c.rects.popper,
    gpuAcceleration: n,
    isFixed: c.options.strategy === "fixed"
  };
  c.modifiersData.popperOffsets != null && (c.styles.popper = Object.assign({}, c.styles.popper, X1(Object.assign({}, l, {
    offsets: c.modifiersData.popperOffsets,
    position: c.options.strategy,
    adaptive: i,
    roundOffsets: d
  })))), c.modifiersData.arrow != null && (c.styles.arrow = Object.assign({}, c.styles.arrow, X1(Object.assign({}, l, {
    offsets: c.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: d
  })))), c.attributes.popper = Object.assign({}, c.attributes.popper, {
    "data-popper-placement": c.placement
  });
}
const g3 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: y3,
  data: {}
};
var c1 = {
  passive: !0
};
function b3(e) {
  var c = e.state, t = e.instance, s = e.options, n = s.scroll, o = n === void 0 ? !0 : n, i = s.resize, a = i === void 0 ? !0 : i, d = o0(c.elements.popper), r = [].concat(c.scrollParents.reference, c.scrollParents.popper);
  return o && r.forEach(function(l) {
    l.addEventListener("scroll", t.update, c1);
  }), a && d.addEventListener("resize", t.update, c1), function() {
    o && r.forEach(function(l) {
      l.removeEventListener("scroll", t.update, c1);
    }), a && d.removeEventListener("resize", t.update, c1);
  };
}
const M3 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: b3,
  data: {}
};
var z3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function s1(e) {
  return e.replace(/left|right|bottom|top/g, function(c) {
    return z3[c];
  });
}
var w3 = {
  start: "end",
  end: "start"
};
function Q1(e) {
  return e.replace(/start|end/g, function(c) {
    return w3[c];
  });
}
function O1(e) {
  var c = o0(e), t = c.pageXOffset, s = c.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: s
  };
}
function S1(e) {
  return T0(b0(e)).left + O1(e).scrollLeft;
}
function x3(e, c) {
  var t = o0(e), s = b0(e), n = t.visualViewport, o = s.clientWidth, i = s.clientHeight, a = 0, d = 0;
  if (n) {
    o = n.width, i = n.height;
    var r = z2();
    (r || !r && c === "fixed") && (a = n.offsetLeft, d = n.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: a + S1(e),
    y: d
  };
}
function _3(e) {
  var c, t = b0(e), s = O1(e), n = (c = e.ownerDocument) == null ? void 0 : c.body, o = _0(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), i = _0(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -s.scrollLeft + S1(e), d = -s.scrollTop;
  return d0(n || t).direction === "rtl" && (a += _0(t.clientWidth, n ? n.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: a,
    y: d
  };
}
function D1(e) {
  var c = d0(e), t = c.overflow, s = c.overflowX, n = c.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + n + s);
}
function B2(e) {
  return ["html", "body", "#document"].indexOf(h0(e)) >= 0 ? e.ownerDocument.body : a0(e) && D1(e) ? e : B2(d1(e));
}
function j0(e, c) {
  var t;
  c === void 0 && (c = []);
  var s = B2(e), n = s === ((t = e.ownerDocument) == null ? void 0 : t.body), o = o0(s), i = n ? [o].concat(o.visualViewport || [], D1(s) ? s : []) : s, a = c.concat(i);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(j0(d1(i)))
  );
}
function w1(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function C3(e, c) {
  var t = T0(e, !1, c === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function G1(e, c, t) {
  return c === b2 ? w1(x3(e, t)) : k0(c) ? C3(c, t) : w1(_3(b0(e)));
}
function B3(e) {
  var c = j0(d1(e)), t = ["absolute", "fixed"].indexOf(d0(e).position) >= 0, s = t && a0(e) ? G0(e) : e;
  return k0(s) ? c.filter(function(n) {
    return k0(n) && w2(n, s) && h0(n) !== "body";
  }) : [];
}
function k3(e, c, t, s) {
  var n = c === "clippingParents" ? B3(e) : [].concat(c), o = [].concat(n, [t]), i = o[0], a = o.reduce(function(d, r) {
    var l = G1(e, r, s);
    return d.top = _0(l.top, d.top), d.right = o1(l.right, d.right), d.bottom = o1(l.bottom, d.bottom), d.left = _0(l.left, d.left), d;
  }, G1(e, i, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function k2(e) {
  var c = e.reference, t = e.element, s = e.placement, n = s ? r0(s) : null, o = s ? V0(s) : null, i = c.x + c.width / 2 - t.width / 2, a = c.y + c.height / 2 - t.height / 2, d;
  switch (n) {
    case s0:
      d = {
        x: i,
        y: c.y - t.height
      };
      break;
    case i0:
      d = {
        x: i,
        y: c.y + c.height
      };
      break;
    case l0:
      d = {
        x: c.x + c.width,
        y: a
      };
      break;
    case n0:
      d = {
        x: c.x - t.width,
        y: a
      };
      break;
    default:
      d = {
        x: c.x,
        y: c.y
      };
  }
  var r = n ? $1(n) : null;
  if (r != null) {
    var l = r === "y" ? "height" : "width";
    switch (o) {
      case S0:
        d[r] = d[r] - (c[l] / 2 - t[l] / 2);
        break;
      case H0:
        d[r] = d[r] + (c[l] / 2 - t[l] / 2);
        break;
    }
  }
  return d;
}
function R0(e, c) {
  c === void 0 && (c = {});
  var t = c, s = t.placement, n = s === void 0 ? e.placement : s, o = t.strategy, i = o === void 0 ? e.strategy : o, a = t.boundary, d = a === void 0 ? X4 : a, r = t.rootBoundary, l = r === void 0 ? b2 : r, u = t.elementContext, h = u === void 0 ? I0 : u, f = t.altBoundary, x = f === void 0 ? !1 : f, z = t.padding, w = z === void 0 ? 0 : z, B = _2(typeof w != "number" ? w : C2(w, Q0)), q = h === I0 ? Q4 : I0, D = e.rects.popper, m = e.elements[x ? q : h], _ = k3(k0(m) ? m : m.contextElement || b0(e.elements.popper), d, l, i), S = T0(e.elements.reference), F = k2({
    reference: S,
    element: D,
    strategy: "absolute",
    placement: n
  }), Y = w1(Object.assign({}, D, F)), A = h === I0 ? Y : S, L = {
    top: _.top - A.top + B.top,
    bottom: A.bottom - _.bottom + B.bottom,
    left: _.left - A.left + B.left,
    right: A.right - _.right + B.right
  }, $ = e.modifiersData.offset;
  if (h === I0 && $) {
    var j = $[n];
    Object.keys(L).forEach(function(g) {
      var V = [l0, i0].indexOf(g) >= 0 ? 1 : -1, P = [s0, i0].indexOf(g) >= 0 ? "y" : "x";
      L[g] += j[P] * V;
    });
  }
  return L;
}
function N3(e, c) {
  c === void 0 && (c = {});
  var t = c, s = t.placement, n = t.boundary, o = t.rootBoundary, i = t.padding, a = t.flipVariations, d = t.allowedAutoPlacements, r = d === void 0 ? M2 : d, l = V0(s), u = l ? a ? R1 : R1.filter(function(x) {
    return V0(x) === l;
  }) : Q0, h = u.filter(function(x) {
    return r.indexOf(x) >= 0;
  });
  h.length === 0 && (h = u, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var f = h.reduce(function(x, z) {
    return x[z] = R0(e, {
      placement: z,
      boundary: n,
      rootBoundary: o,
      padding: i
    })[r0(z)], x;
  }, {});
  return Object.keys(f).sort(function(x, z) {
    return f[x] - f[z];
  });
}
function $3(e) {
  if (r0(e) === r1)
    return [];
  var c = s1(e);
  return [Q1(e), c, Q1(c)];
}
function O3(e) {
  var c = e.state, t = e.options, s = e.name;
  if (!c.modifiersData[s]._skip) {
    for (var n = t.mainAxis, o = n === void 0 ? !0 : n, i = t.altAxis, a = i === void 0 ? !0 : i, d = t.fallbackPlacements, r = t.padding, l = t.boundary, u = t.rootBoundary, h = t.altBoundary, f = t.flipVariations, x = f === void 0 ? !0 : f, z = t.allowedAutoPlacements, w = c.options.placement, B = r0(w), q = B === w, D = d || (q || !x ? [s1(w)] : $3(w)), m = [w].concat(D).reduce(function($0, p0) {
      return $0.concat(r0(p0) === r1 ? N3(c, {
        placement: p0,
        boundary: l,
        rootBoundary: u,
        padding: r,
        flipVariations: x,
        allowedAutoPlacements: z
      }) : p0);
    }, []), _ = c.rects.reference, S = c.rects.popper, F = /* @__PURE__ */ new Map(), Y = !0, A = m[0], L = 0; L < m.length; L++) {
      var $ = m[L], j = r0($), g = V0($) === S0, V = [s0, i0].indexOf(j) >= 0, P = V ? "width" : "height", k = R0(c, {
        placement: $,
        boundary: l,
        rootBoundary: u,
        altBoundary: h,
        padding: r
      }), E = V ? g ? l0 : n0 : g ? i0 : s0;
      _[P] > S[P] && (E = s1(E));
      var O = s1(E), b = [];
      if (o && b.push(k[j] <= 0), a && b.push(k[E] <= 0, k[O] <= 0), b.every(function($0) {
        return $0;
      })) {
        A = $, Y = !1;
        break;
      }
      F.set($, b);
    }
    if (Y)
      for (var c0 = x ? 3 : 1, N0 = function(p0) {
        var F0 = m.find(function(e1) {
          var M0 = F.get(e1);
          if (M0)
            return M0.slice(0, p0).every(function(u1) {
              return u1;
            });
        });
        if (F0)
          return A = F0, "break";
      }, q0 = c0; q0 > 0; q0--) {
        var K0 = N0(q0);
        if (K0 === "break")
          break;
      }
    c.placement !== A && (c.modifiersData[s]._skip = !0, c.placement = A, c.reset = !0);
  }
}
const S3 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: O3,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Z1(e, c, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: e.top - c.height - t.y,
    right: e.right - c.width + t.x,
    bottom: e.bottom - c.height + t.y,
    left: e.left - c.width - t.x
  };
}
function J1(e) {
  return [s0, l0, i0, n0].some(function(c) {
    return e[c] >= 0;
  });
}
function D3(e) {
  var c = e.state, t = e.name, s = c.rects.reference, n = c.rects.popper, o = c.modifiersData.preventOverflow, i = R0(c, {
    elementContext: "reference"
  }), a = R0(c, {
    altBoundary: !0
  }), d = Z1(i, s), r = Z1(a, n, o), l = J1(d), u = J1(r);
  c.modifiersData[t] = {
    referenceClippingOffsets: d,
    popperEscapeOffsets: r,
    isReferenceHidden: l,
    hasPopperEscaped: u
  }, c.attributes.popper = Object.assign({}, c.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": u
  });
}
const T3 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: D3
};
function V3(e, c, t) {
  var s = r0(e), n = [n0, s0].indexOf(s) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, c, {
    placement: e
  })) : t, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * n, [n0, l0].indexOf(s) >= 0 ? {
    x: a,
    y: i
  } : {
    x: i,
    y: a
  };
}
function P3(e) {
  var c = e.state, t = e.options, s = e.name, n = t.offset, o = n === void 0 ? [0, 0] : n, i = M2.reduce(function(l, u) {
    return l[u] = V3(u, c.rects, o), l;
  }, {}), a = i[c.placement], d = a.x, r = a.y;
  c.modifiersData.popperOffsets != null && (c.modifiersData.popperOffsets.x += d, c.modifiersData.popperOffsets.y += r), c.modifiersData[s] = i;
}
const E3 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: P3
};
function q3(e) {
  var c = e.state, t = e.name;
  c.modifiersData[t] = k2({
    reference: c.rects.reference,
    element: c.rects.popper,
    strategy: "absolute",
    placement: c.placement
  });
}
const F3 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: q3,
  data: {}
};
function I3(e) {
  return e === "x" ? "y" : "x";
}
function A3(e) {
  var c = e.state, t = e.options, s = e.name, n = t.mainAxis, o = n === void 0 ? !0 : n, i = t.altAxis, a = i === void 0 ? !1 : i, d = t.boundary, r = t.rootBoundary, l = t.altBoundary, u = t.padding, h = t.tether, f = h === void 0 ? !0 : h, x = t.tetherOffset, z = x === void 0 ? 0 : x, w = R0(c, {
    boundary: d,
    rootBoundary: r,
    padding: u,
    altBoundary: l
  }), B = r0(c.placement), q = V0(c.placement), D = !q, m = $1(B), _ = I3(m), S = c.modifiersData.popperOffsets, F = c.rects.reference, Y = c.rects.popper, A = typeof z == "function" ? z(Object.assign({}, c.rects, {
    placement: c.placement
  })) : z, L = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), $ = c.modifiersData.offset ? c.modifiersData.offset[c.placement] : null, j = {
    x: 0,
    y: 0
  };
  if (S) {
    if (o) {
      var g, V = m === "y" ? s0 : n0, P = m === "y" ? i0 : l0, k = m === "y" ? "height" : "width", E = S[m], O = E + w[V], b = E - w[P], c0 = f ? -Y[k] / 2 : 0, N0 = q === S0 ? F[k] : Y[k], q0 = q === S0 ? -Y[k] : -F[k], K0 = c.elements.arrow, $0 = f && K0 ? N1(K0) : {
        width: 0,
        height: 0
      }, p0 = c.modifiersData["arrow#persistent"] ? c.modifiersData["arrow#persistent"].padding : x2(), F0 = p0[V], e1 = p0[P], M0 = L0(0, F[k], $0[k]), u1 = D ? F[k] / 2 - c0 - M0 - F0 - L.mainAxis : N0 - M0 - F0 - L.mainAxis, P2 = D ? -F[k] / 2 + c0 + M0 + e1 + L.mainAxis : q0 + M0 + e1 + L.mainAxis, h1 = c.elements.arrow && G0(c.elements.arrow), E2 = h1 ? m === "y" ? h1.clientTop || 0 : h1.clientLeft || 0 : 0, V1 = (g = $ == null ? void 0 : $[m]) != null ? g : 0, q2 = E + u1 - V1 - E2, F2 = E + P2 - V1, P1 = L0(f ? o1(O, q2) : O, E, f ? _0(b, F2) : b);
      S[m] = P1, j[m] = P1 - E;
    }
    if (a) {
      var E1, I2 = m === "x" ? s0 : n0, A2 = m === "x" ? i0 : l0, z0 = S[_], t1 = _ === "y" ? "height" : "width", q1 = z0 + w[I2], F1 = z0 - w[A2], v1 = [s0, n0].indexOf(B) !== -1, I1 = (E1 = $ == null ? void 0 : $[_]) != null ? E1 : 0, A1 = v1 ? q1 : z0 - F[t1] - Y[t1] - I1 + L.altAxis, W1 = v1 ? z0 + F[t1] + Y[t1] - I1 - L.altAxis : F1, Y1 = f && v1 ? d3(A1, z0, W1) : L0(f ? A1 : q1, z0, f ? W1 : F1);
      S[_] = Y1, j[_] = Y1 - z0;
    }
    c.modifiersData[s] = j;
  }
}
const W3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: A3,
  requiresIfExists: ["offset"]
};
function Y3(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function L3(e) {
  return e === o0(e) || !a0(e) ? O1(e) : Y3(e);
}
function j3(e) {
  var c = e.getBoundingClientRect(), t = D0(c.width) / e.offsetWidth || 1, s = D0(c.height) / e.offsetHeight || 1;
  return t !== 1 || s !== 1;
}
function H3(e, c, t) {
  t === void 0 && (t = !1);
  var s = a0(c), n = a0(c) && j3(c), o = b0(c), i = T0(e, n, t), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = {
    x: 0,
    y: 0
  };
  return (s || !s && !t) && ((h0(c) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  D1(o)) && (a = L3(c)), a0(c) ? (d = T0(c, !0), d.x += c.clientLeft, d.y += c.clientTop) : o && (d.x = S1(o))), {
    x: i.left + a.scrollLeft - d.x,
    y: i.top + a.scrollTop - d.y,
    width: i.width,
    height: i.height
  };
}
function R3(e) {
  var c = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(o) {
    c.set(o.name, o);
  });
  function n(o) {
    t.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!t.has(a)) {
        var d = c.get(a);
        d && n(d);
      }
    }), s.push(o);
  }
  return e.forEach(function(o) {
    t.has(o.name) || n(o);
  }), s;
}
function U3(e) {
  var c = R3(e);
  return M1.reduce(function(t, s) {
    return t.concat(c.filter(function(n) {
      return n.phase === s;
    }));
  }, []);
}
function X3(e) {
  var c;
  return function() {
    return c || (c = new Promise(function(t) {
      Promise.resolve().then(function() {
        c = void 0, t(e());
      });
    })), c;
  };
}
function m0(e) {
  for (var c = arguments.length, t = new Array(c > 1 ? c - 1 : 0), s = 1; s < c; s++)
    t[s - 1] = arguments[s];
  return [].concat(t).reduce(function(n, o) {
    return n.replace(/%s/, o);
  }, e);
}
var w0 = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Q3 = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', K1 = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function G3(e) {
  e.forEach(function(c) {
    [].concat(Object.keys(c), K1).filter(function(t, s, n) {
      return n.indexOf(t) === s;
    }).forEach(function(t) {
      switch (t) {
        case "name":
          typeof c.name != "string" && console.error(m0(w0, String(c.name), '"name"', '"string"', '"' + String(c.name) + '"'));
          break;
        case "enabled":
          typeof c.enabled != "boolean" && console.error(m0(w0, c.name, '"enabled"', '"boolean"', '"' + String(c.enabled) + '"'));
          break;
        case "phase":
          M1.indexOf(c.phase) < 0 && console.error(m0(w0, c.name, '"phase"', "either " + M1.join(", "), '"' + String(c.phase) + '"'));
          break;
        case "fn":
          typeof c.fn != "function" && console.error(m0(w0, c.name, '"fn"', '"function"', '"' + String(c.fn) + '"'));
          break;
        case "effect":
          c.effect != null && typeof c.effect != "function" && console.error(m0(w0, c.name, '"effect"', '"function"', '"' + String(c.fn) + '"'));
          break;
        case "requires":
          c.requires != null && !Array.isArray(c.requires) && console.error(m0(w0, c.name, '"requires"', '"array"', '"' + String(c.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(c.requiresIfExists) || console.error(m0(w0, c.name, '"requiresIfExists"', '"array"', '"' + String(c.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + c.name + '" modifier, valid properties are ' + K1.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + t + '" was provided.');
      }
      c.requires && c.requires.forEach(function(s) {
        e.find(function(n) {
          return n.name === s;
        }) == null && console.error(m0(Q3, String(c.name), s, s));
      });
    });
  });
}
function Z3(e, c) {
  var t = /* @__PURE__ */ new Set();
  return e.filter(function(s) {
    var n = c(s);
    if (!t.has(n))
      return t.add(n), !0;
  });
}
function J3(e) {
  var c = e.reduce(function(t, s) {
    var n = t[s.name];
    return t[s.name] = n ? Object.assign({}, n, s, {
      options: Object.assign({}, n.options, s.options),
      data: Object.assign({}, n.data, s.data)
    }) : s, t;
  }, {});
  return Object.keys(c).map(function(t) {
    return c[t];
  });
}
var e2 = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", K3 = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", t2 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function c2() {
  for (var e = arguments.length, c = new Array(e), t = 0; t < e; t++)
    c[t] = arguments[t];
  return !c.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function e7(e) {
  e === void 0 && (e = {});
  var c = e, t = c.defaultModifiers, s = t === void 0 ? [] : t, n = c.defaultOptions, o = n === void 0 ? t2 : n;
  return function(a, d, r) {
    r === void 0 && (r = o);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, t2, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: d
      },
      attributes: {},
      styles: {}
    }, u = [], h = !1, f = {
      state: l,
      setOptions: function(B) {
        var q = typeof B == "function" ? B(l.options) : B;
        z(), l.options = Object.assign({}, o, l.options, q), l.scrollParents = {
          reference: k0(a) ? j0(a) : a.contextElement ? j0(a.contextElement) : [],
          popper: j0(d)
        };
        var D = U3(J3([].concat(s, l.options.modifiers)));
        if (l.orderedModifiers = D.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var m = Z3([].concat(D, l.options.modifiers), function($) {
            var j = $.name;
            return j;
          });
          if (G3(m), r0(l.options.placement) === r1) {
            var _ = l.orderedModifiers.find(function($) {
              var j = $.name;
              return j === "flip";
            });
            _ || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = d0(d), F = S.marginTop, Y = S.marginRight, A = S.marginBottom, L = S.marginLeft;
          [F, Y, A, L].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return x(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var B = l.elements, q = B.reference, D = B.popper;
          if (!c2(q, D)) {
            process.env.NODE_ENV !== "production" && console.error(e2);
            return;
          }
          l.rects = {
            reference: H3(q, G0(D), l.options.strategy === "fixed"),
            popper: N1(D)
          }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function($) {
            return l.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var m = 0, _ = 0; _ < l.orderedModifiers.length; _++) {
            if (process.env.NODE_ENV !== "production" && (m += 1, m > 100)) {
              console.error(K3);
              break;
            }
            if (l.reset === !0) {
              l.reset = !1, _ = -1;
              continue;
            }
            var S = l.orderedModifiers[_], F = S.fn, Y = S.options, A = Y === void 0 ? {} : Y, L = S.name;
            typeof F == "function" && (l = F({
              state: l,
              options: A,
              name: L,
              instance: f
            }) || l);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: X3(function() {
        return new Promise(function(w) {
          f.forceUpdate(), w(l);
        });
      }),
      destroy: function() {
        z(), h = !0;
      }
    };
    if (!c2(a, d))
      return process.env.NODE_ENV !== "production" && console.error(e2), f;
    f.setOptions(r).then(function(w) {
      !h && r.onFirstUpdate && r.onFirstUpdate(w);
    });
    function x() {
      l.orderedModifiers.forEach(function(w) {
        var B = w.name, q = w.options, D = q === void 0 ? {} : q, m = w.effect;
        if (typeof m == "function") {
          var _ = m({
            state: l,
            name: B,
            instance: f,
            options: D
          }), S = function() {
          };
          u.push(_ || S);
        }
      });
    }
    function z() {
      u.forEach(function(w) {
        return w();
      }), u = [];
    }
    return f;
  };
}
var t7 = [M3, F3, g3, i3, E3, S3, W3, f3, T3], c7 = /* @__PURE__ */ e7({
  defaultModifiers: t7
});
const s7 = {
  name: "NicePopup"
}, n7 = /* @__PURE__ */ Object.assign(s7, {
  props: {
    noPadding: {
      type: Boolean,
      default: !1
    },
    showArrow: {
      type: Boolean,
      default: !1
    },
    openOnHover: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    offset: {
      type: Number,
      default: 10
    },
    placement: {
      type: String,
      default: "bottom",
      validator(e) {
        return [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end"
        ].includes(e);
      }
    }
  },
  emits: ["change"],
  setup(e, { expose: c, emit: t }) {
    const s = e, n = W(!1), o = W(!1);
    let i = null;
    const a = W(null), d = W(null), r = W(null), l = W(null);
    u0(() => {
      const w = [
        {
          name: "preventOverflow",
          options: {
            rootBoundary: "body"
          }
        },
        {
          name: "offset",
          options: {
            offset: [0, s.offset]
          }
        }
      ];
      s.showArrow && w.push({
        name: "arrow",
        options: {
          element: a.value,
          padding: 5
        }
      }), i = c7(d.value, r.value, {
        strategy: "fixed",
        placement: s.placement,
        modifiers: w
      }), document.addEventListener("click", z), document.addEventListener("touchend", z);
    }), Y2(() => {
      document.removeEventListener("click", z), document.removeEventListener("touchend", z);
    });
    function u() {
      s.disabled || (n.value = !n.value, i.update(), t("change", n));
    }
    function h() {
      n.value = !1, t("change", n);
    }
    function f() {
      !s.openOnHover || s.disabled || (o.value = !0, n.value = !0, i.update());
    }
    function x() {
      !s.openOnHover || s.disabled || (o.value = !1, n.value = !1);
    }
    function z(w) {
      s.openOnHover || s.disabled || n.value && !w.composedPath().includes(l.value) && !w.composedPath().includes(d.value) && h();
    }
    return c({ close: h, toggle: u }), (w, B) => (v(), p("div", {
      class: I(["nice-popup", { "nice-popup-open": n.value, "nice-popup-focused": o.value, disabled: s.disabled }]),
      ref_key: "$el",
      ref: l
    }, [
      y("div", {
        class: "nice-popup-trigger",
        ref_key: "$trigger",
        ref: d,
        onClick: u,
        onMouseover: f,
        onMouseleave: x
      }, [
        X(w.$slots, "trigger", {}, void 0, !0)
      ], 544),
      C0(y("div", {
        class: "nice-popup-content-wrapper",
        ref_key: "$content",
        ref: r
      }, [
        C0(y("div", {
          "data-popper-arrow": "",
          class: "nice-popup-arrow",
          ref_key: "$arrow",
          ref: a
        }, null, 512), [
          [L1, s.showArrow]
        ]),
        y("div", {
          class: I(["nice-popup-content", { "no-padding": s.noPadding }])
        }, [
          X(w.$slots, "content", {}, void 0, !0)
        ], 2)
      ], 512), [
        [L1, n.value]
      ])
    ], 2));
  }
}), Z0 = /* @__PURE__ */ G(n7, [["__scopeId", "data-v-67f29891"]]), N2 = 6048e5, a7 = 864e5, s2 = Symbol.for("constructDateFrom");
function v0(e, c) {
  return typeof e == "function" ? e(c) : e && typeof e == "object" && s2 in e ? e[s2](c) : e instanceof Date ? new e.constructor(c) : new Date(c);
}
function K(e, c) {
  return v0(c || e, e);
}
let o7 = {};
function J0() {
  return o7;
}
function P0(e, c) {
  var a, d, r, l;
  const t = J0(), s = (c == null ? void 0 : c.weekStartsOn) ?? ((d = (a = c == null ? void 0 : c.locale) == null ? void 0 : a.options) == null ? void 0 : d.weekStartsOn) ?? t.weekStartsOn ?? ((l = (r = t.locale) == null ? void 0 : r.options) == null ? void 0 : l.weekStartsOn) ?? 0, n = K(e, c == null ? void 0 : c.in), o = n.getDay(), i = (o < s ? 7 : 0) + o - s;
  return n.setDate(n.getDate() - i), n.setHours(0, 0, 0, 0), n;
}
function i1(e, c) {
  return P0(e, { ...c, weekStartsOn: 1 });
}
function $2(e, c) {
  const t = K(e, c == null ? void 0 : c.in), s = t.getFullYear(), n = v0(t, 0);
  n.setFullYear(s + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const o = i1(n), i = v0(t, 0);
  i.setFullYear(s, 0, 4), i.setHours(0, 0, 0, 0);
  const a = i1(i);
  return t.getTime() >= o.getTime() ? s + 1 : t.getTime() >= a.getTime() ? s : s - 1;
}
function n2(e) {
  const c = K(e), t = new Date(
    Date.UTC(
      c.getFullYear(),
      c.getMonth(),
      c.getDate(),
      c.getHours(),
      c.getMinutes(),
      c.getSeconds(),
      c.getMilliseconds()
    )
  );
  return t.setUTCFullYear(c.getFullYear()), +e - +t;
}
function i7(e, ...c) {
  const t = v0.bind(
    null,
    e || c.find((s) => typeof s == "object")
  );
  return c.map(t);
}
function x1(e, c) {
  const t = K(e, c == null ? void 0 : c.in);
  return t.setHours(0, 0, 0, 0), t;
}
function l7(e, c, t) {
  const [s, n] = i7(
    t == null ? void 0 : t.in,
    e,
    c
  ), o = x1(s), i = x1(n), a = +o - n2(o), d = +i - n2(i);
  return Math.round((a - d) / a7);
}
function r7(e, c) {
  const t = $2(e, c), s = v0((c == null ? void 0 : c.in) || e, 0);
  return s.setFullYear(t, 0, 4), s.setHours(0, 0, 0, 0), i1(s);
}
function _1(e) {
  return v0(e, Date.now());
}
function d7(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function u7(e) {
  return !(!d7(e) && typeof e != "number" || isNaN(+K(e)));
}
function h7(e, c) {
  const t = K(e, c == null ? void 0 : c.in);
  return t.setHours(23, 59, 59, 999), t;
}
function v7(e, c) {
  const t = K(e, c == null ? void 0 : c.in), s = t.getMonth();
  return t.setFullYear(t.getFullYear(), s + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function f7(e, c) {
  const t = K(e, c == null ? void 0 : c.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function p7(e, c) {
  const t = K(e, c == null ? void 0 : c.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function m7(e, c) {
  var a, d, r, l;
  const t = J0(), s = (c == null ? void 0 : c.weekStartsOn) ?? ((d = (a = c == null ? void 0 : c.locale) == null ? void 0 : a.options) == null ? void 0 : d.weekStartsOn) ?? t.weekStartsOn ?? ((l = (r = t.locale) == null ? void 0 : r.options) == null ? void 0 : l.weekStartsOn) ?? 0, n = K(e, c == null ? void 0 : c.in), o = n.getDay(), i = (o < s ? -7 : 0) + 6 - (o - s);
  return n.setDate(n.getDate() + i), n.setHours(23, 59, 59, 999), n;
}
function y7(e) {
  const c = _1(e == null ? void 0 : e.in), t = v0(e == null ? void 0 : e.in, 0);
  return t.setFullYear(c.getFullYear(), c.getMonth(), c.getDate() - 1), t.setHours(23, 59, 59, 999), t;
}
const g7 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, b7 = (e, c, t) => {
  let s;
  const n = g7[e];
  return typeof n == "string" ? s = n : c === 1 ? s = n.one : s = n.other.replace("{{count}}", c.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + s : s + " ago" : s;
};
function p1(e) {
  return (c = {}) => {
    const t = c.width ? String(c.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const M7 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, z7 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, w7 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, x7 = {
  date: p1({
    formats: M7,
    defaultWidth: "full"
  }),
  time: p1({
    formats: z7,
    defaultWidth: "full"
  }),
  dateTime: p1({
    formats: w7,
    defaultWidth: "full"
  })
}, _7 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, C7 = (e, c, t, s) => _7[e];
function A0(e) {
  return (c, t) => {
    const s = t != null && t.context ? String(t.context) : "standalone";
    let n;
    if (s === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, a = t != null && t.width ? String(t.width) : i;
      n = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, a = t != null && t.width ? String(t.width) : e.defaultWidth;
      n = e.values[a] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(c) : c;
    return n[o];
  };
}
const B7 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, k7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, N7 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, $7 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, O7 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, S7 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, D7 = (e, c) => {
  const t = Number(e), s = t % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, T7 = {
  ordinalNumber: D7,
  era: A0({
    values: B7,
    defaultWidth: "wide"
  }),
  quarter: A0({
    values: k7,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: A0({
    values: N7,
    defaultWidth: "wide"
  }),
  day: A0({
    values: $7,
    defaultWidth: "wide"
  }),
  dayPeriod: A0({
    values: O7,
    defaultWidth: "wide",
    formattingValues: S7,
    defaultFormattingWidth: "wide"
  })
};
function W0(e) {
  return (c, t = {}) => {
    const s = t.width, n = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], o = c.match(n);
    if (!o)
      return null;
    const i = o[0], a = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(a) ? P7(a, (u) => u.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      V7(a, (u) => u.test(i))
    );
    let r;
    r = e.valueCallback ? e.valueCallback(d) : d, r = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(r)
    ) : r;
    const l = c.slice(i.length);
    return { value: r, rest: l };
  };
}
function V7(e, c) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && c(e[t]))
      return t;
}
function P7(e, c) {
  for (let t = 0; t < e.length; t++)
    if (c(e[t]))
      return t;
}
function E7(e) {
  return (c, t = {}) => {
    const s = c.match(e.matchPattern);
    if (!s)
      return null;
    const n = s[0], o = c.match(e.parsePattern);
    if (!o)
      return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const a = c.slice(n.length);
    return { value: i, rest: a };
  };
}
const q7 = /^(\d+)(th|st|nd|rd)?/i, F7 = /\d+/i, I7 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, A7 = {
  any: [/^b/i, /^(a|c)/i]
}, W7 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Y7 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, L7 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, j7 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, H7 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, R7 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, U7 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, X7 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Q7 = {
  ordinalNumber: E7({
    matchPattern: q7,
    parsePattern: F7,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: W0({
    matchPatterns: I7,
    defaultMatchWidth: "wide",
    parsePatterns: A7,
    defaultParseWidth: "any"
  }),
  quarter: W0({
    matchPatterns: W7,
    defaultMatchWidth: "wide",
    parsePatterns: Y7,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: W0({
    matchPatterns: L7,
    defaultMatchWidth: "wide",
    parsePatterns: j7,
    defaultParseWidth: "any"
  }),
  day: W0({
    matchPatterns: H7,
    defaultMatchWidth: "wide",
    parsePatterns: R7,
    defaultParseWidth: "any"
  }),
  dayPeriod: W0({
    matchPatterns: U7,
    defaultMatchWidth: "any",
    parsePatterns: X7,
    defaultParseWidth: "any"
  })
}, G7 = {
  code: "en-US",
  formatDistance: b7,
  formatLong: x7,
  formatRelative: C7,
  localize: T7,
  match: Q7,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Z7(e, c) {
  const t = K(e, c == null ? void 0 : c.in);
  return l7(t, p7(t)) + 1;
}
function J7(e, c) {
  const t = K(e, c == null ? void 0 : c.in), s = +i1(t) - +r7(t);
  return Math.round(s / N2) + 1;
}
function O2(e, c) {
  var l, u, h, f;
  const t = K(e, c == null ? void 0 : c.in), s = t.getFullYear(), n = J0(), o = (c == null ? void 0 : c.firstWeekContainsDate) ?? ((u = (l = c == null ? void 0 : c.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = v0((c == null ? void 0 : c.in) || e, 0);
  i.setFullYear(s + 1, 0, o), i.setHours(0, 0, 0, 0);
  const a = P0(i, c), d = v0((c == null ? void 0 : c.in) || e, 0);
  d.setFullYear(s, 0, o), d.setHours(0, 0, 0, 0);
  const r = P0(d, c);
  return +t >= +a ? s + 1 : +t >= +r ? s : s - 1;
}
function K7(e, c) {
  var a, d, r, l;
  const t = J0(), s = (c == null ? void 0 : c.firstWeekContainsDate) ?? ((d = (a = c == null ? void 0 : c.locale) == null ? void 0 : a.options) == null ? void 0 : d.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((l = (r = t.locale) == null ? void 0 : r.options) == null ? void 0 : l.firstWeekContainsDate) ?? 1, n = O2(e, c), o = v0((c == null ? void 0 : c.in) || e, 0);
  return o.setFullYear(n, 0, s), o.setHours(0, 0, 0, 0), P0(o, c);
}
function e8(e, c) {
  const t = K(e, c == null ? void 0 : c.in), s = +P0(t, c) - +K7(t, c);
  return Math.round(s / N2) + 1;
}
function U(e, c) {
  const t = e < 0 ? "-" : "", s = Math.abs(e).toString().padStart(c, "0");
  return t + s;
}
const y0 = {
  // Year
  y(e, c) {
    const t = e.getFullYear(), s = t > 0 ? t : 1 - t;
    return U(c === "yy" ? s % 100 : s, c.length);
  },
  // Month
  M(e, c) {
    const t = e.getMonth();
    return c === "M" ? String(t + 1) : U(t + 1, 2);
  },
  // Day of the month
  d(e, c) {
    return U(e.getDate(), c.length);
  },
  // AM or PM
  a(e, c) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (c) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, c) {
    return U(e.getHours() % 12 || 12, c.length);
  },
  // Hour [0-23]
  H(e, c) {
    return U(e.getHours(), c.length);
  },
  // Minute
  m(e, c) {
    return U(e.getMinutes(), c.length);
  },
  // Second
  s(e, c) {
    return U(e.getSeconds(), c.length);
  },
  // Fraction of second
  S(e, c) {
    const t = c.length, s = e.getMilliseconds(), n = Math.trunc(
      s * Math.pow(10, t - 3)
    );
    return U(n, c.length);
  }
}, O0 = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, a2 = {
  // Era
  G: function(e, c, t) {
    const s = e.getFullYear() > 0 ? 1 : 0;
    switch (c) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(s, { width: "abbreviated" });
      case "GGGGG":
        return t.era(s, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(s, { width: "wide" });
    }
  },
  // Year
  y: function(e, c, t) {
    if (c === "yo") {
      const s = e.getFullYear(), n = s > 0 ? s : 1 - s;
      return t.ordinalNumber(n, { unit: "year" });
    }
    return y0.y(e, c);
  },
  // Local week-numbering year
  Y: function(e, c, t, s) {
    const n = O2(e, s), o = n > 0 ? n : 1 - n;
    if (c === "YY") {
      const i = o % 100;
      return U(i, 2);
    }
    return c === "Yo" ? t.ordinalNumber(o, { unit: "year" }) : U(o, c.length);
  },
  // ISO week-numbering year
  R: function(e, c) {
    const t = $2(e);
    return U(t, c.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, c) {
    const t = e.getFullYear();
    return U(t, c.length);
  },
  // Quarter
  Q: function(e, c, t) {
    const s = Math.ceil((e.getMonth() + 1) / 3);
    switch (c) {
      case "Q":
        return String(s);
      case "QQ":
        return U(s, 2);
      case "Qo":
        return t.ordinalNumber(s, { unit: "quarter" });
      case "QQQ":
        return t.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, c, t) {
    const s = Math.ceil((e.getMonth() + 1) / 3);
    switch (c) {
      case "q":
        return String(s);
      case "qq":
        return U(s, 2);
      case "qo":
        return t.ordinalNumber(s, { unit: "quarter" });
      case "qqq":
        return t.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, c, t) {
    const s = e.getMonth();
    switch (c) {
      case "M":
      case "MM":
        return y0.M(e, c);
      case "Mo":
        return t.ordinalNumber(s + 1, { unit: "month" });
      case "MMM":
        return t.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(s, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, c, t) {
    const s = e.getMonth();
    switch (c) {
      case "L":
        return String(s + 1);
      case "LL":
        return U(s + 1, 2);
      case "Lo":
        return t.ordinalNumber(s + 1, { unit: "month" });
      case "LLL":
        return t.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(s, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, c, t, s) {
    const n = e8(e, s);
    return c === "wo" ? t.ordinalNumber(n, { unit: "week" }) : U(n, c.length);
  },
  // ISO week of year
  I: function(e, c, t) {
    const s = J7(e);
    return c === "Io" ? t.ordinalNumber(s, { unit: "week" }) : U(s, c.length);
  },
  // Day of the month
  d: function(e, c, t) {
    return c === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : y0.d(e, c);
  },
  // Day of year
  D: function(e, c, t) {
    const s = Z7(e);
    return c === "Do" ? t.ordinalNumber(s, { unit: "dayOfYear" }) : U(s, c.length);
  },
  // Day of week
  E: function(e, c, t) {
    const s = e.getDay();
    switch (c) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, c, t, s) {
    const n = e.getDay(), o = (n - s.weekStartsOn + 8) % 7 || 7;
    switch (c) {
      case "e":
        return String(o);
      case "ee":
        return U(o, 2);
      case "eo":
        return t.ordinalNumber(o, { unit: "day" });
      case "eee":
        return t.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(n, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, c, t, s) {
    const n = e.getDay(), o = (n - s.weekStartsOn + 8) % 7 || 7;
    switch (c) {
      case "c":
        return String(o);
      case "cc":
        return U(o, c.length);
      case "co":
        return t.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return t.day(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(n, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, c, t) {
    const s = e.getDay(), n = s === 0 ? 7 : s;
    switch (c) {
      case "i":
        return String(n);
      case "ii":
        return U(n, c.length);
      case "io":
        return t.ordinalNumber(n, { unit: "day" });
      case "iii":
        return t.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, c, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (c) {
      case "a":
      case "aa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, c, t) {
    const s = e.getHours();
    let n;
    switch (s === 12 ? n = O0.noon : s === 0 ? n = O0.midnight : n = s / 12 >= 1 ? "pm" : "am", c) {
      case "b":
      case "bb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, c, t) {
    const s = e.getHours();
    let n;
    switch (s >= 17 ? n = O0.evening : s >= 12 ? n = O0.afternoon : s >= 4 ? n = O0.morning : n = O0.night, c) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, c, t) {
    if (c === "ho") {
      let s = e.getHours() % 12;
      return s === 0 && (s = 12), t.ordinalNumber(s, { unit: "hour" });
    }
    return y0.h(e, c);
  },
  // Hour [0-23]
  H: function(e, c, t) {
    return c === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : y0.H(e, c);
  },
  // Hour [0-11]
  K: function(e, c, t) {
    const s = e.getHours() % 12;
    return c === "Ko" ? t.ordinalNumber(s, { unit: "hour" }) : U(s, c.length);
  },
  // Hour [1-24]
  k: function(e, c, t) {
    let s = e.getHours();
    return s === 0 && (s = 24), c === "ko" ? t.ordinalNumber(s, { unit: "hour" }) : U(s, c.length);
  },
  // Minute
  m: function(e, c, t) {
    return c === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : y0.m(e, c);
  },
  // Second
  s: function(e, c, t) {
    return c === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : y0.s(e, c);
  },
  // Fraction of second
  S: function(e, c) {
    return y0.S(e, c);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, c, t) {
    const s = e.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (c) {
      case "X":
        return i2(s);
      case "XXXX":
      case "XX":
        return x0(s);
      case "XXXXX":
      case "XXX":
      default:
        return x0(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "x":
        return i2(s);
      case "xxxx":
      case "xx":
        return x0(s);
      case "xxxxx":
      case "xxx":
      default:
        return x0(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + o2(s, ":");
      case "OOOO":
      default:
        return "GMT" + x0(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + o2(s, ":");
      case "zzzz":
      default:
        return "GMT" + x0(s, ":");
    }
  },
  // Seconds timestamp
  t: function(e, c, t) {
    const s = Math.trunc(+e / 1e3);
    return U(s, c.length);
  },
  // Milliseconds timestamp
  T: function(e, c, t) {
    return U(+e, c.length);
  }
};
function o2(e, c = "") {
  const t = e > 0 ? "-" : "+", s = Math.abs(e), n = Math.trunc(s / 60), o = s % 60;
  return o === 0 ? t + String(n) : t + String(n) + c + U(o, 2);
}
function i2(e, c) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : x0(e, c);
}
function x0(e, c = "") {
  const t = e > 0 ? "-" : "+", s = Math.abs(e), n = U(Math.trunc(s / 60), 2), o = U(s % 60, 2);
  return t + n + c + o;
}
const l2 = (e, c) => {
  switch (e) {
    case "P":
      return c.date({ width: "short" });
    case "PP":
      return c.date({ width: "medium" });
    case "PPP":
      return c.date({ width: "long" });
    case "PPPP":
    default:
      return c.date({ width: "full" });
  }
}, S2 = (e, c) => {
  switch (e) {
    case "p":
      return c.time({ width: "short" });
    case "pp":
      return c.time({ width: "medium" });
    case "ppp":
      return c.time({ width: "long" });
    case "pppp":
    default:
      return c.time({ width: "full" });
  }
}, t8 = (e, c) => {
  const t = e.match(/(P+)(p+)?/) || [], s = t[1], n = t[2];
  if (!n)
    return l2(e, c);
  let o;
  switch (s) {
    case "P":
      o = c.dateTime({ width: "short" });
      break;
    case "PP":
      o = c.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = c.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = c.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", l2(s, c)).replace("{{time}}", S2(n, c));
}, c8 = {
  p: S2,
  P: t8
}, s8 = /^D+$/, n8 = /^Y+$/, a8 = ["D", "DD", "YY", "YYYY"];
function o8(e) {
  return s8.test(e);
}
function i8(e) {
  return n8.test(e);
}
function l8(e, c, t) {
  const s = r8(e, c, t);
  if (console.warn(s), a8.includes(e))
    throw new RangeError(s);
}
function r8(e, c, t) {
  const s = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${c}\`) for formatting ${s} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const d8 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, u8 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, h8 = /^'([^]*?)'?$/, v8 = /''/g, f8 = /[a-zA-Z]/;
function r2(e, c, t) {
  var l, u, h, f, x, z, w, B;
  const s = J0(), n = (t == null ? void 0 : t.locale) ?? s.locale ?? G7, o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((f = (h = s.locale) == null ? void 0 : h.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, i = (t == null ? void 0 : t.weekStartsOn) ?? ((z = (x = t == null ? void 0 : t.locale) == null ? void 0 : x.options) == null ? void 0 : z.weekStartsOn) ?? s.weekStartsOn ?? ((B = (w = s.locale) == null ? void 0 : w.options) == null ? void 0 : B.weekStartsOn) ?? 0, a = K(e, t == null ? void 0 : t.in);
  if (!u7(a))
    throw new RangeError("Invalid time value");
  let d = c.match(u8).map((q) => {
    const D = q[0];
    if (D === "p" || D === "P") {
      const m = c8[D];
      return m(q, n.formatLong);
    }
    return q;
  }).join("").match(d8).map((q) => {
    if (q === "''")
      return { isToken: !1, value: "'" };
    const D = q[0];
    if (D === "'")
      return { isToken: !1, value: p8(q) };
    if (a2[D])
      return { isToken: !0, value: q };
    if (D.match(f8))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + D + "`"
      );
    return { isToken: !1, value: q };
  });
  n.localize.preprocessor && (d = n.localize.preprocessor(a, d));
  const r = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: n
  };
  return d.map((q) => {
    if (!q.isToken)
      return q.value;
    const D = q.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && i8(D) || !(t != null && t.useAdditionalDayOfYearTokens) && o8(D)) && l8(D, c, String(e));
    const m = a2[D[0]];
    return m(a, D, n.localize, r);
  }).join("");
}
function p8(e) {
  const c = e.match(h8);
  return c ? c[1].replace(v8, "'") : e;
}
function m8(e, c) {
  return +K(e) < +K(c);
}
function y8(e, c, t) {
  const s = +K(e, t == null ? void 0 : t.in), [n, o] = [
    +K(c.start, t == null ? void 0 : t.in),
    +K(c.end, t == null ? void 0 : t.in)
  ].sort((i, a) => i - a);
  return s >= n && s <= o;
}
function g8(e) {
  const c = _1(e == null ? void 0 : e.in), t = c.getFullYear(), s = c.getMonth(), n = c.getDate(), o = _1(e == null ? void 0 : e.in);
  return o.setFullYear(t, s, n - 1), o.setHours(0, 0, 0, 0), o;
}
const E0 = (e) => (U0("data-v-dd555e06"), e = e(), X0(), e), b8 = {
  key: 0,
  class: "nice-dropdown"
}, M8 = { class: "month-wrapper" }, z8 = { class: "value" }, w8 = { class: "year" }, x8 = { class: "month" }, _8 = { class: "calendar" }, C8 = { class: "header" }, B8 = { class: "month" }, k8 = ["onClick", "title"], N8 = {
  key: 0,
  class: "time"
}, $8 = { class: "select-wrapper" }, O8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", { class: "arrow-down" }, null, -1)), S8 = ["value", "selected"], D8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", null, ":", -1)), T8 = { class: "select-wrapper" }, V8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", { class: "arrow-down" }, null, -1)), P8 = ["value", "selected"], E8 = { class: "input-group" }, q8 = ["placeholder", "disabled", "required"], F8 = { class: "nice-dropdown" }, I8 = { class: "month-wrapper" }, A8 = { class: "value" }, W8 = { class: "year" }, Y8 = { class: "month" }, L8 = { class: "calendar" }, j8 = { class: "header" }, H8 = { class: "month" }, R8 = ["onClick", "title"], U8 = {
  key: 0,
  class: "time"
}, X8 = { class: "select-wrapper" }, Q8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", { class: "arrow-down" }, null, -1)), G8 = ["value", "selected"], Z8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", null, ":", -1)), J8 = { class: "select-wrapper" }, K8 = /* @__PURE__ */ E0(() => /* @__PURE__ */ y("div", { class: "arrow-down" }, null, -1)), e5 = ["value", "selected"], t5 = {
  name: "NiceDate"
}, c5 = /* @__PURE__ */ Object.assign(t5, {
  props: {
    modelValue: {
      type: [String, Date, null],
      required: !1
    },
    highlightTo: {
      type: [String, Date, null],
      required: !1
    },
    title: String,
    caption: String,
    noMargin: Boolean,
    required: Boolean,
    disabled: Boolean,
    loading: Boolean,
    placeholder: String,
    isInline: Boolean,
    time: {
      default: !0,
      type: Boolean
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = t0("$t"), n = W(null), o = W(""), i = W(/* @__PURE__ */ new Date()), a = W([]), d = W(null), r = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ], l = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59
    ], u = {
      1: s("Nice", "Mon"),
      2: s("Nice", "Tue"),
      3: s("Nice", "Wed"),
      4: s("Nice", "Thu"),
      5: s("Nice", "Fri"),
      6: s("Nice", "Sat"),
      7: s("Nice", "Sun")
    }, h = {
      1: s("Nice", "January"),
      2: s("Nice", "February"),
      3: s("Nice", "March"),
      4: s("Nice", "April"),
      5: s("Nice", "May"),
      6: s("Nice", "June"),
      7: s("Nice", "July"),
      8: s("Nice", "August"),
      9: s("Nice", "September"),
      10: s("Nice", "October"),
      11: s("Nice", "November"),
      12: s("Nice", "December")
    }, f = {
      month: null,
      year: null,
      day: null,
      hour: null,
      minute: null
    };
    m1(() => t.modelValue, () => {
      t.modelValue && x(t.modelValue) && (n.value = new Date(t.modelValue), i.value = new Date(t.modelValue), V());
    }), m1(() => t.highlightTo, () => {
      A();
    }), u0(() => {
      F();
    });
    function x(P) {
      return !isNaN(new Date(P));
    }
    function z() {
      d == null || d.value.close();
    }
    function w() {
      o.value = "", c("update:modelValue", null), c("change", null), setTimeout(() => {
        z();
      });
    }
    function B(P) {
      P && A();
    }
    function q() {
      V(), c("update:modelValue", n.value), c("change", n.value);
    }
    function D() {
      if (o.value && o.value != "") {
        let P = o.value.split(" • "), k = /* @__PURE__ */ new Date(), E = P[0].split(".");
        if (k.setDate(E[0]), k.setMonth(E[1] - 1), k.setFullYear(E[2]), t.time) {
          let O = P[1].split(":");
          k.setHours(O[0]), k.setMinutes(O[1]), k.setSeconds(0, 0);
        } else
          k.setHours(12), k.setMinutes(0), k.setSeconds(0, 0);
        n.value = k, q();
      }
    }
    function m(P) {
      let k = P.target.value;
      i.value.setHours(k), n.value.setHours(k), q();
    }
    function _(P) {
      let k = P.target.value;
      i.value.setMinutes(k), n.value.setMinutes(k), q();
    }
    function S(P) {
      n.value.setYear(P.year), n.value.setMonth(P.month), n.value.setDate(P.day), q();
    }
    function F() {
      t.modelValue || (n.value = /* @__PURE__ */ new Date(), n.value.setSeconds(0, 0)), t.modelValue && x(t.modelValue) && (n.value = new Date(t.modelValue), n.value.setSeconds(0, 0), o.value = g(n.value)), t.isInline && A();
    }
    function Y(P) {
      let k = i.value.getMonth();
      P ? k += 1 : k -= 1, i.value.setMonth(k), A();
    }
    function A() {
      a.value = [];
      let P = new Date(
        i.value.getFullYear(),
        i.value.getMonth(),
        1
      ).getDay() - 1, k = new Date(
        i.value.getFullYear(),
        i.value.getMonth(),
        0
      ).getDate(), E = 42 - k - P;
      for (var O = 1 - P; O <= k + E; O++)
        a.value.push(
          L(
            i.value.getFullYear(),
            i.value.getMonth(),
            O
          )
        );
    }
    function L(P, k, E) {
      const O = /* @__PURE__ */ new Date(), b = new Date(P, k, E);
      return {
        id: b.toString(),
        date: b,
        year: b.getFullYear(),
        month: b.getMonth(),
        day: b.getDate(),
        dayInWeek: b.getDay(),
        currentMonth: b.getMonth() == i.value.getMonth(),
        selected: j(n.value, b),
        today: j(O, b),
        highlighted: $(b),
        text: g(b)
      };
    }
    function $(P) {
      return !!(t.highlightTo && y8(P, { end: t.highlightTo, start: i.value }));
    }
    function j(P, k) {
      return P.getDate() == k.getDate() && P.getMonth() == k.getMonth() && P.getFullYear() == k.getFullYear();
    }
    function g(P) {
      let k = P.getDate(), E = P.getMonth() + 1, O = P.getFullYear(), b = P.getHours(), c0 = P.getMinutes();
      return c0 < 10 && (c0 = "0" + c0), t.time ? `${k}.${E}.${O} • ${b}:${c0}` : `${k}.${E}.${O}`;
    }
    function V() {
      n.value || (n.value = /* @__PURE__ */ new Date()), f.day = n.value.getDate(), f.month = n.value.getMonth(), f.year = n.value.getFullYear(), f.hour = n.value.getHours(), f.minute = n.value.getMinutes(), o.value = g(n.value), i.value.year = f.year, i.value.month = f.month, A();
    }
    return (P, k) => {
      const E = R("NiceButton"), O = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-component nice-date", {
          disabled: e.disabled,
          "no-margin": e.noMargin,
          "has-value": e.modelValue,
          "is-inline": e.isInline
        }])
      }, [
        T(g0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        e.isInline ? (v(), p("div", b8, [
          y("div", M8, [
            T(E, {
              class: "left",
              onClick: k[0] || (k[0] = (b) => Y(!1)),
              icon: "icon-chevron-left",
              naked: ""
            }),
            y("div", z8, [
              y("div", w8, N(i.value.getFullYear()), 1),
              y("div", x8, N(h[i.value.getMonth() + 1]), 1)
            ]),
            T(E, {
              class: "right",
              onClick: k[1] || (k[1] = (b) => Y(!0)),
              icon: "icon-chevron-right",
              naked: ""
            })
          ]),
          y("div", _8, [
            y("div", C8, [
              y("div", null, N(u[1]), 1),
              y("div", null, N(u[2]), 1),
              y("div", null, N(u[3]), 1),
              y("div", null, N(u[4]), 1),
              y("div", null, N(u[5]), 1),
              y("div", null, N(u[6]), 1),
              y("div", null, N(u[7]), 1)
            ]),
            y("div", B8, [
              (v(!0), p(Z, null, J(a.value, (b) => (v(), p("div", {
                class: I(["day", {
                  "previous-month": !b.currentMonth,
                  "day-highlighted": b.highlighted,
                  today: b.today,
                  selected: b.selected
                }]),
                onClick: (c0) => S(b),
                title: b.text,
                key: b.id
              }, N(b.day), 11, k8))), 128))
            ])
          ]),
          e.time ? (v(), p("div", N8, [
            y("div", $8, [
              O8,
              y("select", { onChange: m }, [
                (v(), p(Z, null, J(r, (b) => y("option", {
                  value: b,
                  key: b,
                  selected: b == i.value.getHours()
                }, N(b), 9, S8)), 64))
              ], 32)
            ]),
            D8,
            y("div", T8, [
              V8,
              y("select", { onChange: _ }, [
                (v(), p(Z, null, J(l, (b) => y("option", {
                  value: b,
                  key: b,
                  selected: b == i.value.getMinutes()
                }, N(b), 9, P8)), 64))
              ], 32)
            ]),
            T(O, {
              class: "time-icon",
              icon: "icon-clock"
            })
          ])) : M("", !0)
        ])) : M("", !0),
        e.isInline ? M("", !0) : (v(), H(Z0, {
          key: 1,
          "no-padding": "",
          placement: "bottom-start",
          ref_key: "popup",
          ref: d,
          class: "w-full",
          onChange: B
        }, {
          trigger: e0(() => [
            y("div", E8, [
              C0(y("input", {
                "onUpdate:modelValue": k[2] || (k[2] = (b) => o.value = b),
                placeholder: e.placeholder || C(s)("Nice", "None"),
                disabled: e.disabled,
                required: e.required,
                onBlur: D
              }, null, 40, q8), [
                [l1, o.value]
              ]),
              T(O, {
                class: "icon",
                icon: "icon-calendar"
              }),
              T(O, {
                class: "icon clear",
                icon: "icon-x",
                onClick: w
              })
            ])
          ]),
          content: e0(() => [
            y("div", F8, [
              y("div", I8, [
                T(E, {
                  class: "left",
                  onClick: k[3] || (k[3] = (b) => Y(!1)),
                  icon: "icon-chevron-left",
                  naked: ""
                }),
                y("div", A8, [
                  y("div", W8, N(i.value.getFullYear()), 1),
                  y("div", Y8, N(h[i.value.getMonth() + 1]), 1)
                ]),
                T(E, {
                  class: "right",
                  onClick: k[4] || (k[4] = (b) => Y(!0)),
                  icon: "icon-chevron-right",
                  naked: ""
                })
              ]),
              y("div", L8, [
                y("div", j8, [
                  y("div", null, N(u[1]), 1),
                  y("div", null, N(u[2]), 1),
                  y("div", null, N(u[3]), 1),
                  y("div", null, N(u[4]), 1),
                  y("div", null, N(u[5]), 1),
                  y("div", null, N(u[6]), 1),
                  y("div", null, N(u[7]), 1)
                ]),
                y("div", H8, [
                  (v(!0), p(Z, null, J(a.value, (b) => (v(), p("div", {
                    class: I(["day", {
                      "previous-month": !b.currentMonth,
                      "day-highlighted": b.highlighted,
                      today: b.today,
                      selected: b.selected
                    }]),
                    onClick: (c0) => S(b),
                    title: b.text,
                    key: b.id
                  }, N(b.day), 11, R8))), 128))
                ])
              ]),
              e.time ? (v(), p("div", U8, [
                y("div", X8, [
                  Q8,
                  y("select", { onChange: m }, [
                    (v(), p(Z, null, J(r, (b) => y("option", {
                      value: b,
                      key: b,
                      selected: b == i.value.getHours()
                    }, N(b), 9, G8)), 64))
                  ], 32)
                ]),
                Z8,
                y("div", J8, [
                  K8,
                  y("select", { onChange: _ }, [
                    (v(), p(Z, null, J(l, (b) => y("option", {
                      value: b,
                      key: b,
                      selected: b == i.value.getMinutes()
                    }, N(b), 9, e5)), 64))
                  ], 32)
                ]),
                T(O, {
                  class: "time-icon",
                  icon: "icon-clock"
                })
              ])) : M("", !0)
            ])
          ]),
          _: 1
        }, 512))
      ], 2);
    };
  }
}), s5 = /* @__PURE__ */ G(c5, [["__scopeId", "data-v-dd555e06"]]);
const n5 = { class: "input-group" }, a5 = ["required", "disabled", "modelValue"], o5 = ["selected"], i5 = ["value"], l5 = {
  key: 0,
  class: "no-options"
}, r5 = ["disabled"], d5 = {
  name: "NiceDropdownSimple"
}, u5 = /* @__PURE__ */ Object.assign(d5, {
  props: {
    modelValue: {
      type: [Object, String, Number, null],
      required: !0
    },
    values: Array,
    title: String,
    noMargin: Boolean,
    nullable: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: Boolean,
    keyOnly: Boolean,
    required: {
      type: Boolean,
      default: !1
    },
    addFunction: {
      type: Function,
      default: null
    },
    nullText: String,
    caption: {
      type: String,
      default: null
    },
    keyName: {
      type: String,
      default: "id"
    },
    valueName: {
      type: String,
      default: "value"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = t0("$t"), n = Q({
      get() {
        return t.modelValue;
      },
      set(d) {
        c("update:modelValue", d), c("change", d);
      }
    });
    m1(() => t.values, () => {
      i();
    }), u0(() => {
      i();
    });
    function o(d) {
      const r = t.values.find((l) => l[t.keyName] == d.target.value);
      a(r || void 0);
    }
    function i() {
      setTimeout(() => {
        !n.value && t.values.length > 0 && !t.nullable && a(t.values[0]);
      });
    }
    function a(d) {
      d ? t.keyOnly ? n.value = d[t.keyName] : n.value = d : n.value = void 0;
    }
    return (d, r) => {
      const l = R("NiceLoading"), u = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-component nice-dropdown-simple", { disabled: e.disabled, "no-margin": e.noMargin }])
      }, [
        T(g0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        y("div", n5, [
          y("div", {
            class: I(["select-wrapper", { "no-value": C(n) == null }])
          }, [
            y("select", {
              required: e.required,
              disabled: e.disabled,
              modelValue: C(n),
              onChange: o
            }, [
              e.nullable ? (v(), p("option", {
                key: 0,
                value: null,
                selected: !C(n)
              }, N(e.nullText || C(s)("Nice", "None")), 9, o5)) : M("", !0),
              (v(!0), p(Z, null, J(e.values, (h) => (v(), p("option", {
                value: h[e.keyName],
                key: h[e.keyName]
              }, N(h[e.valueName]), 9, i5))), 128))
            ], 40, a5),
            !e.nullable && !e.loading && (!e.values || e.values.length == 0) ? (v(), p("div", l5, N(C(s)("Nice", "No options")), 1)) : M("", !0),
            e.loading ? (v(), H(l, {
              key: 1,
              class: "no-options"
            })) : M("", !0),
            T(u, {
              class: "arrow-down",
              icon: "icon-chevron-down"
            })
          ], 2),
          e.addFunction ? (v(), p("button", {
            key: 0,
            class: "btn",
            type: "button",
            disabled: e.disabled,
            onClick: r[0] || (r[0] = (...h) => e.addFunction && e.addFunction(...h))
          }, [
            T(u, { icon: "icon-plus" })
          ], 8, r5)) : M("", !0)
        ])
      ], 2);
    };
  }
}), h5 = /* @__PURE__ */ G(u5, [["__scopeId", "data-v-d2fc0d46"]]);
const v5 = { class: "nice-loading-wrapper" }, f5 = {
  key: 0,
  class: "nice-loading-message"
}, p5 = {
  name: "NiceLoading"
}, m5 = /* @__PURE__ */ Object.assign(p5, {
  props: {
    message: {
      type: String,
      default: null
    },
    fullDiv: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator(e) {
        return ["mini", "small", "large"].includes(e);
      }
    }
  },
  setup(e) {
    const c = e;
    return (t, s) => {
      const n = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-loading", [c.size ? "nice-loading-" + c.size : "", { "full-div": c.fullDiv }]])
      }, [
        y("div", v5, [
          T(n, { icon: "icon-half-loading" }),
          T(n, { icon: "icon-half-loading" })
        ]),
        c.message ? (v(), p("div", f5, N(c.message), 1)) : M("", !0)
      ], 2);
    };
  }
}), T1 = /* @__PURE__ */ G(m5, [["__scopeId", "data-v-3d00153a"]]);
const y5 = { class: "nice-dropdown-wrapper" }, g5 = { class: "input-group" }, b5 = { class: "select-wrapper" }, M5 = ["required", "value", "disabled"], z5 = {
  key: 0,
  class: "option"
}, w5 = {
  key: 1,
  class: "options"
}, x5 = ["onClick"], _5 = {
  key: 2,
  class: "no-options"
}, C5 = {
  key: 3,
  class: "no-options"
}, B5 = { class: "nice-dropdown-popup" }, k5 = {
  key: 0,
  class: "input-group"
}, N5 = ["placeholder", "name", "disabled"], $5 = { class: "list" }, O5 = ["onClick"], S5 = {
  key: 1,
  class: "element no-options"
}, D5 = {
  name: "NiceDropdown"
}, T5 = /* @__PURE__ */ Object.assign(D5, {
  props: {
    modelValue: {
      type: [Object, String, Number, null, Array],
      required: !1
    },
    values: {
      type: Array,
      required: !1
    },
    title: String,
    noMargin: Boolean,
    nullable: Boolean,
    disabled: Boolean,
    loading: Boolean,
    keyOnly: Boolean,
    noSearch: Boolean,
    multiple: Boolean,
    required: {
      type: Boolean,
      default: !1
    },
    searchFunction: {
      type: Function,
      default: null
    },
    formatFunction: {
      type: Function,
      default: null
    },
    addFunction: {
      type: Function,
      default: null
    },
    nullText: String,
    caption: {
      type: String,
      default: null
    },
    keyName: {
      type: String,
      default: "id"
    },
    valueName: {
      type: String,
      default: "value"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = t0("$t");
    let n = null;
    const o = 500, i = W(!1), a = W(null), d = W(null), r = W(null), l = W(null), u = W(!1), h = W(null), f = W(null), x = Q(() => t.keyOnly && !t.multiple ? h.value ? h.value.find((g) => g[t.keyName] == t.modelValue) : {} : (t.multiple && B(), t.modelValue)), z = Q(() => t.disabled ? !1 : !!t.modelValue && !!t.nullable), w = Q(() => h.value != null ? h.value.filter((g) => g._selected) : []), B = function() {
      h.value && t.modelValue != null && t.multiple && h.value.forEach((g) => {
        g._selected = !!t.modelValue.find((V) => V[t.keyName] == g[t.keyName]);
      });
    };
    u0(async () => {
      await $(), Y();
    });
    function q(g) {
      var V;
      (g.code == "Enter" || g.code == "Space") && (g.preventDefault(), (V = r.value) == null || V.toggle());
    }
    function D() {
      var g;
      (g = r.value) == null || g.close();
    }
    function m() {
      F(null), setTimeout(() => {
        D();
      });
    }
    function _(g) {
      F(g), setTimeout(() => {
        D();
      });
    }
    async function S(g) {
      g ? (h.value || await $(), f.value != null ? l.value = h.value.findIndex(
        (V) => V[t.keyName] == f.value[t.keyName]
      ) : l.value = -1, setTimeout(() => {
        var V;
        (V = d.value) == null || V.focus();
      }, 100), document.addEventListener("keydown", j)) : (a.value = null, u.value = !1, document.removeEventListener("keydown", j));
    }
    function F(g) {
      if (g) {
        const V = g[t.keyName], P = h.value.find((k) => k[t.keyName] == V);
        A(P || null);
      } else
        A(null);
      t.multiple || D();
    }
    function Y() {
      h.value && h.value.length > 0 && !t.nullable && !t.modelValue ? A(h.value[0]) : B();
    }
    function A(g) {
      g ? t.multiple ? (g._selected = !g._selected, t.keyOnly ? (c("update:modelValue", w.value.filter.map((V) => V[t.keyName])), c("change", w.value.map((V) => V[t.keyName]))) : (c("update:modelValue", w.value), c("change", w.value))) : t.keyOnly ? (c("update:modelValue", g[t.keyName]), c("change", g[t.keyName])) : (c("update:modelValue", g), c("change", g)) : (c("update:modelValue", null), c("change", null));
    }
    function L() {
      return clearTimeout(n), n = setTimeout(async () => {
        await $();
      }, o);
    }
    async function $() {
      if (t.values && (h.value = t.values), t.searchFunction) {
        u.value = !0;
        const g = await t.searchFunction(a.value);
        return l.value = 0, u.value = !1, h.value = g, g;
      } else
        return null;
    }
    function j(g) {
      g.key == "ArrowDown" ? (l.value < h.value.length - 1 && (l.value += 1), g.preventDefault()) : g.key == "ArrowUp" ? (l.value > 0 && (l.value -= 1), g.preventDefault()) : g.key == "Escape" ? (D(), g.preventDefault()) : g.key == "Enter" && (A(h.value[l.value]), D(), g.preventDefault());
    }
    return (g, V) => {
      const P = R("nice-icon"), k = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-component nice-dropdown", {
          disabled: e.disabled,
          "no-margin": e.noMargin,
          "can-clear": C(z),
          "has-value": e.modelValue
        }])
      }, [
        T(g0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        y("div", y5, [
          T(Z0, {
            "no-padding": "",
            placement: "bottom-start",
            ref_key: "popup",
            ref: r,
            class: "nice-dropdown-popup-wrapper",
            onChange: S,
            disabled: e.disabled
          }, {
            trigger: e0(() => [
              y("div", g5, [
                y("div", b5, [
                  y("div", {
                    class: I(["selected-value", { focus: i.value }])
                  }, [
                    y("input", {
                      required: e.required,
                      value: e.modelValue,
                      class: "hidden-input",
                      onFocus: V[0] || (V[0] = (E) => i.value = !0),
                      onBlur: V[1] || (V[1] = (E) => i.value = !1),
                      onKeypress: q,
                      disabled: e.disabled
                    }, null, 40, M5),
                    !e.loading && e.modelValue && !t.multiple ? (v(), p("div", z5, [
                      X(g.$slots, "selected-option", { item: e.modelValue }, () => [
                        y("span", null, N(e.formatFunction ? e.formatFunction(e.modelValue) : C(x)[e.valueName]), 1)
                      ], !0)
                    ])) : M("", !0),
                    t.multiple ? (v(), p("div", w5, [
                      (v(!0), p(Z, null, J(C(w), (E) => (v(), p("div", {
                        class: "option",
                        key: E
                      }, [
                        X(g.$slots, "selected-option", h2({ item: E }, E), () => [
                          y("span", null, N(e.formatFunction ? e.formatFunction(E) : E[t.valueName]), 1)
                        ], !0),
                        y("button", {
                          class: "btn btn-primary btn-sm",
                          onClick: (O) => _(E)
                        }, [
                          T(P, { icon: "icon-x" })
                        ], 8, x5)
                      ]))), 128))
                    ])) : M("", !0),
                    !e.loading && !e.modelValue || t.multiple && !C(w).length ? (v(), p("div", _5, N(e.nullText || C(s)("Nice", "None")), 1)) : M("", !0),
                    e.loading ? (v(), p("div", C5, N(C(s)("Nice", "Loading")), 1)) : M("", !0),
                    T(k, {
                      class: "arrow-down",
                      icon: "icon-chevron-down"
                    }),
                    T(k, {
                      class: "arrow-down clear",
                      icon: "icon-x",
                      onClick: m
                    })
                  ], 2)
                ])
              ])
            ]),
            content: e0(() => [
              y("div", B5, [
                e.searchFunction && !e.noSearch ? (v(), p("div", k5, [
                  C0(y("input", {
                    "onUpdate:modelValue": V[2] || (V[2] = (E) => a.value = E),
                    type: "text",
                    placeholder: C(s)("Nice", "Search..."),
                    name: C(s)("Nice", "Search"),
                    onInput: L,
                    ref_key: "searchElement",
                    ref: d,
                    disabled: e.disabled
                  }, null, 40, N5), [
                    [l1, a.value]
                  ]),
                  u.value ? (v(), H(T1, {
                    key: 0,
                    class: "loading"
                  })) : M("", !0)
                ])) : M("", !0),
                y("div", $5, [
                  e.nullable ? (v(), p("div", {
                    key: 0,
                    class: I(["element", {
                      selected: e.modelValue == null
                    }]),
                    onClick: V[3] || (V[3] = (E) => F(void 0))
                  }, N(e.nullText || C(s)("Nice", "None")), 3)) : M("", !0),
                  (v(!0), p(Z, null, J(h.value, (E, O) => (v(), p("div", {
                    class: I(["element", {
                      hover: l.value == O,
                      selected: e.modelValue && (!t.multiple && E[e.keyName] == C(x)[e.keyName] || E._selected)
                    }]),
                    key: E[e.keyName],
                    onClick: (b) => F(E)
                  }, [
                    e.multiple ? (v(), H(Y0, {
                      key: 0,
                      modelValue: E._selected,
                      noMargin: !0,
                      class: "nice-dropdown-item-checkbox"
                    }, null, 8, ["modelValue"])) : M("", !0),
                    X(g.$slots, "option", { item: E }, () => [
                      f0(N(e.formatFunction ? e.formatFunction(E) : E[e.valueName]), 1)
                    ], !0)
                  ], 10, O5))), 128)),
                  !u.value && (!h.value || h.value.length == 0) ? (v(), p("div", S5, N(C(s)("Nice", "No options")), 1)) : M("", !0)
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          e.addFunction ? (v(), H(B0, {
            key: 0,
            class: "nice-dropdown-add",
            icon: "icon-plus",
            disabled: e.disabled,
            onClick: e.addFunction
          }, null, 8, ["disabled", "onClick"])) : M("", !0)
        ])
      ], 2);
    };
  }
}), V5 = /* @__PURE__ */ G(T5, [["__scopeId", "data-v-60c3d28c"]]);
const P5 = (e) => (U0("data-v-84645e22"), e = e(), X0(), e), E5 = { class: "nice-filters-wrapper" }, q5 = { class: "nice-component nice-filters" }, F5 = {
  key: 0,
  class: "nice-filters-options"
}, I5 = /* @__PURE__ */ P5(() => /* @__PURE__ */ y("div", { class: "f-grow" }, null, -1)), A5 = {
  key: 0,
  class: "nice-component nice-filters-pills"
}, W5 = ["title"], Y5 = {
  name: "NiceFilters"
}, L5 = /* @__PURE__ */ Object.assign(Y5, {
  props: {
    // filters: {
    //   type: Object,
    //   required: false,
    // },
    modelValue: {
      type: Object,
      required: !0
    },
    showCreateButton: {
      type: Boolean,
      default: !0
    },
    disableCreateButton: {
      type: Boolean,
      default: !1
    },
    showPills: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["create", "change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = t0("clone"), n = t0("$t"), o = f2(), i = p2(), a = W(""), d = W(t.modelValue), r = [
      { id: "true", name: n("Nice", "Yes") },
      { id: "false", name: n("Nice", "No") }
    ], l = (m) => m ? r.filter(
      (_) => _.name.toLowerCase().includes(m.toLowerCase())
    ) : r, u = Q(() => d.value ? d.value.filter((m) => m.value != null) : []), h = Q(() => {
      if (!d.value)
        return {};
      const m = {};
      return d.value.forEach((_) => {
        m[_.key] = z(_) || null;
      }), m;
    });
    u0(async () => {
      w();
    });
    function f(m) {
      const _ = new Date(m.value), S = _.getDate(), F = _.getMonth() + 1, Y = _.getFullYear(), A = _.getHours(), L = _.getMinutes();
      return `${S}.${F}.${Y} ${A}:${L < 10 ? "0" : ""}${L}`;
    }
    function x(m) {
      var _, S;
      return m.formatter ? m.formatter(m.value) : m.type == "date" ? f(m) : m.type == "boolean" ? m.value ? n("Nice", "Yes") : n("Nice", "No") : m.valueName ? m.value[m.valueName] : (_ = m.value) != null && _.name ? m.value.name : (S = m.value) != null && S.value ? m.value.value : m.value;
    }
    function z(m) {
      var _;
      return m ? m.type == "date" ? !m.value || isNaN(new Date(m.value)) ? null : m.value ? new Date(m.value).toISOString() : null : m.valueRaw || (m.getKey ? m.getKey(m.value) : null) || ((_ = m.value) == null ? void 0 : _.id) || m.value : null;
    }
    async function w() {
      await i.isReady();
      const m = s(o.query);
      d.value.forEach(async (_) => {
        const S = m[_.key];
        if (_.type == "yesno") {
          let F = r.find(
            (Y) => Y.id == m[_.key]
          );
          m[_.key] || (F = null), _.value = F;
        } else if (_.type == "date")
          _.value = new Date(S);
        else if (_.type == "boolean")
          _.value = S == "true";
        else if (_.type == "select" && _.fetch) {
          const F = await _.fetch(S);
          _.value = F;
        } else
          console.log("[NiceFilters] Query not handled: ", _.key, S);
      }), setTimeout(() => {
        c("update:modelValue", d), c("change", d);
      });
    }
    async function B() {
      setTimeout(async () => {
        await i.isReady();
        const m = {
          ...o.query,
          ...h.value,
          search: a.value
        };
        d.value.forEach((S) => {
          const F = z(S);
          m[S.key] = F;
        });
        const _ = Object.keys(m).filter((S) => m[S] != null && m[S] != "").reduce((S, F) => ({ ...S, [F]: m[F] }), {});
        i.push({ query: _ }), await i.isReady(), setTimeout(() => {
          c("update:modelValue", d.value), c("change", d.value);
        });
      });
    }
    async function q() {
      const m = { ...o.query, id: "new" };
      i.push({ query: m }), await i.isReady(), c("create");
    }
    function D(m) {
      m.value = null, B();
    }
    return (m, _) => {
      const S = R("NiceInput"), F = R("NiceSwitch"), Y = R("NiceDate"), A = R("NiceDropdown"), L = R("NiceButton");
      return v(), p("div", E5, [
        y("div", q5, [
          T(S, {
            title: C(n)("Nice", "Search"),
            placeholder: C(n)("Nice", "Search..."),
            icon: "icon-search",
            modelValue: a.value,
            "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
            class: "w-300",
            "no-margin": "",
            onDebounce: B
          }, null, 8, ["title", "placeholder", "modelValue"]),
          d.value ? (v(), p("div", F5, [
            (v(!0), p(Z, null, J(d.value, ($) => (v(), p("div", {
              class: "nice-filters-filter",
              key: $.key
            }, [
              $.type == "boolean" ? (v(), H(F, {
                key: 0,
                modelValue: $.value,
                "onUpdate:modelValue": (j) => $.value = j,
                title: $.name,
                isInline: "",
                isBlock: "",
                onChange: B,
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])) : M("", !0),
              $.type == "date" ? (v(), H(Y, {
                key: 1,
                modelValue: $.value,
                "onUpdate:modelValue": (j) => $.value = j,
                title: $.name,
                time: $.time,
                onChange: B,
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "time"])) : M("", !0),
              $.type == "select" ? (v(), H(A, {
                key: 2,
                modelValue: $.value,
                "onUpdate:modelValue": (j) => $.value = j,
                title: $.name,
                "search-function": $.searchFunction,
                valueName: $.valueName,
                keyName: $.keyName,
                formatFunction: $.formatter,
                onChange: B,
                nullable: "",
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "search-function", "valueName", "keyName", "formatFunction"])) : M("", !0),
              $.type == "yesno" ? (v(), H(A, {
                key: 3,
                modelValue: $.value,
                "onUpdate:modelValue": (j) => $.value = j,
                title: $.name,
                "search-function": l,
                nullText: C(n)("Nice", "All"),
                onChange: B,
                valueName: "name",
                nullable: "",
                noSearch: "",
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "nullText"])) : M("", !0)
            ]))), 128))
          ])) : M("", !0),
          I5,
          X(m.$slots, "default", {}, void 0, !0),
          e.showCreateButton ? (v(), H(L, {
            key: 1,
            disabled: e.disableCreateButton,
            text: C(n)("Nice", "Create"),
            onClick: q,
            icon: "icon-plus"
          }, null, 8, ["disabled", "text"])) : M("", !0)
        ]),
        e.showPills && C(u) && C(u).length ? (v(), p("div", A5, [
          (v(!0), p(Z, null, J(C(u), ($) => (v(), p("div", {
            class: "nice-filters-pill badge badge-primary",
            key: $.key,
            title: $.description
          }, [
            y("div", null, [
              y("small", null, N($.name), 1),
              y("div", null, N(x($)), 1)
            ]),
            T(L, {
              icon: "icon-x",
              onClick: (j) => D($)
            }, null, 8, ["onClick"])
          ], 8, W5))), 128))
        ])) : M("", !0)
      ]);
    };
  }
}), j5 = /* @__PURE__ */ G(L5, [["__scopeId", "data-v-84645e22"]]);
const H5 = { class: "nice-icon" }, R5 = ["xlink:href"], U5 = {
  name: "NiceIcon"
}, X5 = /* @__PURE__ */ Object.assign(U5, {
  props: {
    icon: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const c = e;
    return (t, s) => (v(), p("svg", H5, [
      y("use", {
        "xlink:href": "#" + c.icon
      }, null, 8, R5)
    ]));
  }
}), D2 = /* @__PURE__ */ G(X5, [["__scopeId", "data-v-aee3bde0"]]);
var T2 = Q5;
function Q5(e, c, t) {
  if (!e)
    return t;
  var s, n;
  if (Array.isArray(c) && (s = c.slice(0)), typeof c == "string" && (s = c.split(".")), typeof c == "symbol" && (s = [c]), !Array.isArray(s))
    throw new Error("props arg must be an array, a string or a symbol");
  for (; s.length; )
    if (n = s.shift(), !e || (e = e[n], e === void 0))
      return t;
  return e;
}
const G5 = { class: "input-group" }, Z5 = ["placeholder", "autocomplete", "type", "required", "disabled", "min", "max", "min-length", "max-length", "regex-pattern"], J5 = {
  key: 1,
  class: "input-group-append input-group-icon"
}, K5 = {
  key: 0,
  class: "nice-component-message"
}, e9 = {
  key: 1,
  class: "nice-component-message nice-error"
}, t9 = {
  name: "NiceInput"
}, c9 = /* @__PURE__ */ Object.assign(t9, {
  props: {
    modelValue: {
      type: [String, Number, null],
      required: !0
    },
    title: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    suffixText: {
      type: String,
      default: null
    },
    appendText: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    minLength: {
      type: Number,
      default: null
    },
    maxLength: {
      type: Number,
      default: null
    },
    regexPattern: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      default: !1
    },
    textRight: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    formatter: Function,
    prop: String,
    error: [Object, String, null]
  },
  emits: ["change", "debounce", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = C1();
    let n = null;
    const o = Q({
      get() {
        return !i.value || !t.formatter ? t.modelValue : t.formatter(t.modelValue);
      },
      set(l) {
        c("update:modelValue", l), c("change", l), clearTimeout(n), n = setTimeout(() => {
          c("debounce", l);
        }, 500);
      }
    }), i = W(!0);
    function a(l) {
      i.value = l;
    }
    const d = Q(() => {
      if (typeof t.error == "string")
        return t.error;
      const l = T2(t.error, ["response", "data", t.prop]);
      return typeof l == "object" ? l.join("-") : l;
    });
    function r() {
      o.value = "";
    }
    return (l, u) => {
      const h = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-component nice-input", { "no-margin": e.noMargin, active: C(o), disabled: e.disabled }])
      }, [
        T(g0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        y("div", G5, [
          C(s).suffix || t.suffixText ? (v(), p("div", {
            key: 0,
            class: I(["input-group-suffix", { "input-group-suffix-text": t.suffixText }])
          }, [
            X(l.$slots, "suffix", {}, () => [
              f0(N(t.suffixText), 1)
            ], !0)
          ], 2)) : M("", !0),
          C0(y("input", {
            onBlur: u[0] || (u[0] = (f) => a(!0)),
            onFocus: u[1] || (u[1] = (f) => a(!1)),
            "onUpdate:modelValue": u[2] || (u[2] = (f) => B1(o) ? o.value = f : null),
            class: I({ "text-right": e.textRight }),
            placeholder: e.placeholder,
            autocomplete: e.autocomplete,
            type: e.type,
            required: e.required,
            disabled: e.disabled,
            min: e.min,
            max: e.max,
            "min-length": e.minLength,
            "max-length": e.maxLength,
            "regex-pattern": e.regexPattern
          }, null, 42, Z5), [
            [L2, C(o)]
          ]),
          e.icon ? (v(), p("div", J5, [
            T(h, { icon: e.icon }, null, 8, ["icon"]),
            T(h, {
              icon: "icon-x",
              class: "clear-input",
              onClick: r
            })
          ])) : M("", !0),
          C(s).append || t.appendText ? (v(), p("div", {
            key: 2,
            class: I(["input-group-append", { "input-group-append-text": t.appendText }])
          }, [
            X(l.$slots, "append", {}, () => [
              f0(N(t.appendText), 1)
            ], !0)
          ], 2)) : M("", !0)
        ]),
        e.message ? (v(), p("div", K5, N(e.message), 1)) : M("", !0),
        C(d) ? (v(), p("div", e9, N(C(d)), 1)) : M("", !0)
      ], 2);
    };
  }
}), s9 = /* @__PURE__ */ G(c9, [["__scopeId", "data-v-bc7cd04e"]]);
const n9 = { class: "notification-info" }, a9 = {
  key: 0,
  class: "notification-title"
}, o9 = {
  key: 1,
  class: "notification.message"
}, i9 = {
  name: "NiceNotification"
}, l9 = /* @__PURE__ */ Object.assign(i9, {
  props: {
    notification: {
      type: Object,
      required: !0
    },
    timeoutTime: {
      type: Number,
      default: 3e3
    }
  },
  emits: ["remove"],
  setup(e, { emit: c }) {
    const t = e;
    let s = null;
    function n() {
      s = setTimeout(() => {
        c("remove", t.notification);
      }, t.timeoutTime);
    }
    function o() {
      clearTimeout(s);
    }
    return u0(() => {
      n();
    }), (i, a) => {
      const d = R("NiceIcon");
      return v(), p("div", {
        class: I(["nice-notification", ["nice-notification-" + t.notification.type]]),
        onMouseover: o,
        onMouseleave: n
      }, [
        t.notification.icon ? (v(), H(d, {
          key: 0,
          class: "notification-icon",
          icon: t.notification.icon
        }, null, 8, ["icon"])) : M("", !0),
        y("div", n9, [
          t.notification.title ? (v(), p("div", a9, N(t.notification.title), 1)) : M("", !0),
          t.notification.message ? (v(), p("div", o9, N(t.notification.message), 1)) : M("", !0)
        ])
      ], 34);
    };
  }
}), V2 = /* @__PURE__ */ G(l9, [["__scopeId", "data-v-b366cb5b"]]);
const r9 = { class: "nice-notifications" }, d9 = {
  name: "NiceNotifications"
}, u9 = /* @__PURE__ */ Object.assign(d9, {
  setup(e) {
    const c = t0("$t"), t = t0("nice"), s = 3e3, n = W([]);
    function o({ message: a, type: d, title: r, icon: l }) {
      var u = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10),
        type: d,
        title: r,
        message: a,
        icon: l
      };
      r || (d == "danger" ? (u.title = c("Nice", "Error"), u.icon = "icon-alert-triangle") : d == "success" ? (u.title = c("Nice", "Success"), u.icon = "icon-smile") : d == "warning" && (u.title = c("Nice", "Warning"), u.icon = "icon-alert-circle")), n.value.unshift(u);
    }
    function i(a) {
      let d = n.value.findIndex((r) => r.id == a.id);
      d >= 0 && n.value.splice(d, 1);
    }
    return u0(() => {
      t.onNotification((a, d, r) => {
        o(a);
      });
    }), (a, d) => (v(), p("div", r9, [
      T(v2, {
        name: "notification",
        tag: "div"
      }, {
        default: e0(() => [
          (v(!0), p(Z, null, J(n.value, (r) => (v(), H(V2, {
            key: r.id,
            notification: r,
            timeoutTime: s,
            onRemove: (l) => i(r)
          }, null, 8, ["notification", "onRemove"]))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), h9 = /* @__PURE__ */ G(u9, [["__scopeId", "data-v-69de8d3e"]]);
const v9 = {
  name: "NicePanel"
}, f9 = /* @__PURE__ */ Object.assign(v9, {
  props: {
    name: {
      type: String,
      required: !0
    },
    noPadding: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: "right",
      validator(e) {
        return ["top", "left", "bottom", "right"].includes(e);
      }
    }
  },
  emits: ["close"],
  setup(e, { expose: c, emit: t }) {
    const s = e, n = t0("nice"), o = W(!1), i = W(!1), a = W(500), d = W(null);
    u0(() => {
      document.addEventListener("keyup", f), n.onPanel((x) => {
        s.name == x.name && (o.value = x.isOpen), x.isOpen && l();
      });
    }), j2(() => {
      document.removeEventListener("keyup", f);
    });
    function r(x) {
      a.value = x;
    }
    function l() {
      setTimeout(() => {
        var z;
        const x = (z = d.value) == null ? void 0 : z.querySelectorAll("input");
        x && x[0] && x[0].focus && x[0].focus();
      });
    }
    function u() {
      t("close"), n.panel(s.name, !1);
    }
    function h(x) {
      if (i.value) {
        let z = 300;
        s.position == "right" ? z = document.body.clientWidth - x.clientX : s.position == "left" ? z = x.clientX : s.position == "top" ? z = x.clientY : s.position == "bottom" && (z = document.body.clientHeight - x.clientY), z >= 300 && r(z);
      }
    }
    function f(x) {
      x.key == "Escape" && u();
    }
    return c({ close: u }), (x, z) => (v(), p("div", {
      class: I(["nice-side-view", [e.position, { "no-select": i.value }]]),
      onMousemove: h,
      onMouseup: z[1] || (z[1] = (w) => i.value = !1),
      ref_key: "panelElement",
      ref: d
    }, [
      T(n1, { name: "side-view" }, {
        default: e0(() => [
          o.value ? (v(), p("div", {
            key: 0,
            class: I(["side-view-body", { "no-padding": e.noPadding }]),
            style: u2({ "--side-view-width": a.value + "px" })
          }, [
            y("div", {
              class: I(["handle", { active: i.value }]),
              ref: "handle",
              onMousedown: z[0] || (z[0] = (w) => i.value = !0)
            }, null, 34),
            X(x.$slots, "default")
          ], 6)) : M("", !0)
        ]),
        _: 3
      }),
      T(n1, { name: "side-overlay" }, {
        default: e0(() => [
          o.value ? (v(), p("div", {
            key: 0,
            class: "overlay",
            onClick: u
          })) : M("", !0)
        ]),
        _: 1
      })
    ], 34));
  }
}), p9 = {
  name: "NiceSlot"
}, m9 = /* @__PURE__ */ Object.assign(p9, {
  props: {
    title: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    noMargin: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const c = e;
    return (t, s) => (v(), p("div", {
      class: I(["nice-component nice-slot", { "no-margin": c.noMargin }])
    }, [
      T(g0, {
        title: c.title,
        caption: c.caption
      }, null, 8, ["title", "caption"]),
      X(t.$slots, "default")
    ], 2));
  }
}), y9 = {
  name: "NiceSvgs"
}, g9 = {
  "aria-hidden": "true",
  style: { display: "none" },
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, b9 = /* @__PURE__ */ H2('<symbol id="icon-activity" viewBox="0 0 24 24"><path d="M22 11h-4c-0.439 0-0.812 0.283-0.949 0.684l-2.051 6.154-5.051-15.154c-0.175-0.524-0.741-0.807-1.265-0.633-0.31 0.103-0.535 0.343-0.633 0.633l-2.772 8.316h-3.279c-0.552 0-1 0.448-1 1s0.448 1 1 1h4c0.423-0.003 0.81-0.267 0.949-0.684l2.051-6.154 5.051 15.154c0.098 0.29 0.323 0.529 0.632 0.632 0.524 0.175 1.090-0.109 1.265-0.632l2.773-8.316h3.279c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-airplay" viewBox="0 0 24 24"><path d="M5 16h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM12.768 14.36c-0.035-0.043-0.079-0.087-0.128-0.128-0.424-0.354-1.055-0.296-1.408 0.128l-5 6c-0.144 0.172-0.232 0.396-0.232 0.64 0 0.552 0.448 1 1 1h10c0.225 0.001 0.453-0.075 0.64-0.232 0.424-0.354 0.482-0.984 0.128-1.408zM12 16.562l2.865 3.438h-5.73z"></path></symbol><symbol id="icon-alert-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 8v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-alert-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452zM11 8v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-alert-triangle" viewBox="0 0 24 24"><path d="M11.148 4.374c0.073-0.123 0.185-0.242 0.334-0.332 0.236-0.143 0.506-0.178 0.756-0.116s0.474 0.216 0.614 0.448l8.466 14.133c0.070 0.12 0.119 0.268 0.128 0.434-0.015 0.368-0.119 0.591-0.283 0.759-0.18 0.184-0.427 0.298-0.693 0.301l-16.937-0.001c-0.152-0.001-0.321-0.041-0.481-0.134-0.239-0.138-0.399-0.359-0.466-0.607s-0.038-0.519 0.092-0.745zM9.432 3.346l-8.47 14.14c-0.422 0.731-0.506 1.55-0.308 2.29s0.68 1.408 1.398 1.822c0.464 0.268 0.976 0.4 1.475 0.402h16.943c0.839-0.009 1.587-0.354 2.123-0.902s0.864-1.303 0.855-2.131c-0.006-0.536-0.153-1.044-0.406-1.474l-8.474-14.147c-0.432-0.713-1.11-1.181-1.854-1.363s-1.561-0.081-2.269 0.349c-0.429 0.26-0.775 0.615-1.012 1.014zM11 9v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-align-center" viewBox="0 0 24 24"><path d="M18 9h-12c-0.552 0-1 0.448-1 1s0.448 1 1 1h12c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18 17h-12c-0.552 0-1 0.448-1 1s0.448 1 1 1h12c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-justify" viewBox="0 0 24 24"><path d="M21 9h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 17h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-left" viewBox="0 0 24 24"><path d="M17 9h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17 17h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-right" viewBox="0 0 24 24"><path d="M21 9h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 17h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-anchor" viewBox="0 0 24 24"><path d="M14 5c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM5 11h-3c-0.552 0-1 0.448-1 1 0 3.037 1.232 5.789 3.222 7.778s4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778c0-0.552-0.448-1-1-1h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h1.945c-0.23 2.086-1.173 3.956-2.581 5.364s-3.278 2.351-5.364 2.581v-12.071c0.703-0.181 1.332-0.549 1.828-1.045 0.723-0.723 1.172-1.725 1.172-2.829s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046v12.071c-2.086-0.23-3.956-1.173-5.364-2.581s-2.351-3.278-2.581-5.364h1.945c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-aperture" viewBox="0 0 24 24"><path d="M11.422 7l2.223-3.85c1.825 0.337 3.457 1.225 4.719 2.486 0.416 0.416 0.792 0.873 1.121 1.364h-5.194zM7.38 10l-2.222-3.847c0.153-0.179 0.312-0.351 0.478-0.517 1.5-1.5 3.525-2.472 5.775-2.617l-2.592 4.49zM7.958 15h-4.446c-0.332-0.938-0.512-1.948-0.512-3 0-1.43 0.333-2.781 0.926-3.982l2.6 4.504zM17.473 11.478l-1.431-2.478h4.446c0.332 0.938 0.512 1.948 0.512 3 0 1.43-0.333 2.781-0.926 3.982l-2.576-4.462zM12.588 20.981l4.032-6.981 2.222 3.848c-0.153 0.178-0.312 0.351-0.478 0.516-1.5 1.5-3.525 2.472-5.775 2.617zM10.7 22.924c0.046 0.008 0.092 0.014 0.139 0.015 0.381 0.040 0.769 0.061 1.161 0.061 3.037 0 5.789-1.232 7.778-3.222 0.366-0.366 0.706-0.757 1.017-1.171 0.042-0.047 0.079-0.097 0.11-0.149 1.318-1.813 2.095-4.046 2.095-6.458 0-1.539-0.317-3.005-0.888-4.336-0.016-0.044-0.034-0.086-0.055-0.126-0.553-1.244-1.33-2.367-2.279-3.316-1.701-1.701-3.96-2.849-6.478-3.146-0.046-0.008-0.092-0.014-0.139-0.015-0.381-0.040-0.769-0.061-1.161-0.061-3.037 0-5.789 1.232-7.778 3.222-0.366 0.365-0.706 0.757-1.017 1.171-0.042 0.047-0.079 0.097-0.111 0.149-1.317 1.813-2.094 4.046-2.094 6.458 0 1.539 0.317 3.005 0.888 4.336 0.016 0.044 0.034 0.086 0.055 0.126 0.553 1.244 1.33 2.367 2.279 3.316 1.701 1.701 3.96 2.849 6.478 3.146zM12.578 17l-2.223 3.85c-1.825-0.337-3.457-1.225-4.719-2.486-0.416-0.416-0.792-0.873-1.121-1.364h5.194zM15.465 12l-1.732 3h-3.466l-1.732-3 1.732-3h3.466z"></path></symbol><symbol id="icon-archive" viewBox="0 0 24 24"><path d="M4 9h16v11h-16zM1 2c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h1v12c0 0.552 0.448 1 1 1h18c0.552 0 1-0.448 1-1v-12h1c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM2 4h20v3h-20zM10 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-arrow-down" viewBox="0 0 24 24"><path d="M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-arrow-down-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 8v5.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293v-5.586c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-arrow-down-left" viewBox="0 0 24 24"><path d="M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-arrow-down-right" viewBox="0 0 24 24"><path d="M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-arrow-left" viewBox="0 0 24 24"><path d="M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-arrow-left-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16 11h-5.586l2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4 4c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l4 4c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293h5.586c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-arrow-right" viewBox="0 0 24 24"><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-arrow-right-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h5.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-5.586c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-arrow-up" viewBox="0 0 24 24"><path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-arrow-up-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-arrow-up-left" viewBox="0 0 24 24"><path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-arrow-up-right" viewBox="0 0 24 24"><path d="M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-at-sign" viewBox="0 0 24 24"><path d="M15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM15.74 15.318c0.13 0.182 0.274 0.353 0.431 0.51 0.723 0.723 1.725 1.172 2.829 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-1c0-3.037-1.233-5.789-3.222-7.778s-4.741-3.222-7.779-3.221-5.788 1.232-7.778 3.222-3.221 4.741-3.221 7.778 1.233 5.789 3.222 7.778 4.741 3.222 7.778 3.221c2.525 0 4.855-0.852 6.69-2.269 0.437-0.337 0.518-0.965 0.18-1.403s-0.965-0.518-1.403-0.18c-1.487 1.148-3.377 1.844-5.435 1.852-2.54-0.009-4.776-1.014-6.398-2.636-1.627-1.629-2.634-3.877-2.634-6.363s1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.363v1c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1c-0.835-0.627-1.875-1-3-1-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464c0.070-0.070 0.139-0.143 0.205-0.217z"></path></symbol><symbol id="icon-award" viewBox="0 0 24 24"><path d="M14.986 15.424l0.75 5.652-3.221-1.933c-0.311-0.184-0.703-0.196-1.029 0l-3.221 1.933 0.751-5.651c0.921 0.371 1.929 0.575 2.984 0.575s2.063-0.205 2.986-0.576zM15.332 12.991c-0.058 0.030-0.113 0.065-0.163 0.105-0.92 0.573-2.005 0.904-3.169 0.904-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757 3.156 0.67 4.243 1.757 1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.278 0.278-0.583 0.529-0.911 0.748zM7.14 14.355l-1.131 8.513c-0.073 0.547 0.312 1.050 0.86 1.123 0.234 0.031 0.461-0.022 0.646-0.134l4.485-2.691 4.486 2.691c0.474 0.284 1.088 0.131 1.372-0.343 0.122-0.203 0.163-0.431 0.134-0.646l-1.13-8.515c0.28-0.215 0.546-0.448 0.795-0.697 1.446-1.446 2.343-3.447 2.343-5.656s-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343-4.21 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657c0.25 0.25 0.516 0.483 0.796 0.698z"></path></symbol><symbol id="icon-bar-chart" viewBox="0 0 24 24"><path d="M13 20v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1zM19 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v16c0 0.552 0.448 1 1 1s1-0.448 1-1zM7 20v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-bar-chart-2" viewBox="0 0 24 24"><path d="M19 20v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1zM13 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v16c0 0.552 0.448 1 1 1s1-0.448 1-1zM7 20v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-battery" viewBox="0 0 24 24"><path d="M3 5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM3 7h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM24 13v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-battery-charging" viewBox="0 0 24 24"><path d="M5 17h-2c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3.19c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.19c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM15 7h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3.19c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.19c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM24 13v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM10.168 5.445l-4 6c-0.306 0.46-0.182 1.080 0.277 1.387 0.172 0.115 0.367 0.169 0.555 0.168h4.131l-2.964 4.445c-0.306 0.46-0.182 1.080 0.277 1.387s1.080 0.182 1.387-0.277l4-6c0.106-0.156 0.169-0.348 0.169-0.555 0-0.552-0.448-1-1-1h-4.131l2.964-4.445c0.306-0.46 0.182-1.080-0.277-1.387s-1.080-0.182-1.387 0.277z"></path></symbol><symbol id="icon-bell" viewBox="0 0 24 24"><path d="M17 8c0 4.011 0.947 6.52 1.851 8h-13.702c0.904-1.48 1.851-3.989 1.851-8 0-1.381 0.559-2.63 1.464-3.536s2.155-1.464 3.536-1.464 2.63 0.559 3.536 1.464 1.464 2.155 1.464 3.536zM19 8c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050-3.684 0.785-4.95 2.050-2.050 3.017-2.050 4.95c0 6.127-2.393 8.047-2.563 8.174-0.453 0.308-0.573 0.924-0.269 1.381 0.192 0.287 0.506 0.443 0.832 0.445h18c0.552 0 1-0.448 1-1 0-0.339-0.168-0.638-0.429-0.821-0.176-0.13-2.571-2.050-2.571-8.179zM12.865 20.498c-0.139 0.239-0.359 0.399-0.608 0.465s-0.52 0.037-0.759-0.101c-0.162-0.094-0.283-0.222-0.359-0.357-0.274-0.48-0.884-0.647-1.364-0.373s-0.647 0.884-0.373 1.364c0.25 0.439 0.623 0.823 1.093 1.096 0.716 0.416 1.535 0.501 2.276 0.304s1.409-0.678 1.824-1.394c0.277-0.478 0.114-1.090-0.363-1.367s-1.090-0.114-1.367 0.363z"></path></symbol><symbol id="icon-bell-off" viewBox="0 0 24 24"><path d="M12.865 20.498c-0.139 0.239-0.359 0.399-0.608 0.465s-0.52 0.037-0.759-0.101c-0.162-0.094-0.283-0.222-0.359-0.357-0.274-0.48-0.884-0.647-1.364-0.373s-0.647 0.884-0.373 1.364c0.25 0.439 0.623 0.823 1.093 1.096 0.716 0.416 1.535 0.501 2.276 0.304s1.409-0.678 1.824-1.394c0.277-0.478 0.114-1.090-0.363-1.367s-1.090-0.114-1.367 0.363zM19 7.977c-0.004-1.923-0.784-3.666-2.043-4.928-1.264-1.268-3.014-2.055-4.947-2.058-1.448-0.002-2.799 0.437-3.9 1.18-0.457 0.309-0.578 0.931-0.269 1.389s0.931 0.578 1.389 0.269c0.764-0.516 1.708-0.829 2.73-0.837 1.448 0.011 2.684 0.569 3.581 1.47 0.902 0.905 1.458 2.15 1.459 3.526-0.042 1.658 0.173 3.476 0.665 5.277 0.146 0.533 0.695 0.847 1.228 0.701s0.847-0.695 0.701-1.228c-0.443-1.625-0.632-3.25-0.594-4.708 0-0.005 0-0.011 0-0.016 0-0.003 0-0.006 0-0.009zM6.996 8.411l7.59 7.589h-9.437c0.872-1.428 1.783-3.812 1.847-7.589zM0.293 1.707l4.856 4.856c-0.106 0.493-0.155 0.984-0.149 1.45 0 6.114-2.393 8.034-2.563 8.161-0.453 0.308-0.573 0.924-0.269 1.381 0.192 0.287 0.506 0.443 0.832 0.445h13.586l5.707 5.707c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-bluetooth" viewBox="0 0 24 24"><path d="M13 9.586v-6.172l3.086 3.086zM13 14.414l3.086 3.086-3.086 3.086zM5.793 7.207l4.793 4.793-4.793 4.793c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.793-3.793v8.586c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l5.5-5.5c0.391-0.391 0.391-1.024 0-1.414l-4.793-4.793 4.793-4.793c0.391-0.391 0.391-1.024 0-1.414l-5.5-5.5c-0.181-0.181-0.431-0.293-0.707-0.293-0.552 0-1 0.448-1 1v8.586l-3.793-3.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-bold" viewBox="0 0 24 24"><path d="M7 11v-6h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879zM5 12v8c0 0.552 0.448 1 1 1h9c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536-0.561-2.632-1.464-3.536c-0.325-0.325-0.695-0.606-1.1-0.832 0.034-0.032 0.067-0.064 0.1-0.097 0.903-0.903 1.464-2.155 1.464-3.535s-0.561-2.632-1.464-3.536-2.156-1.464-3.536-1.464h-8c-0.552 0-1 0.448-1 1zM7 13h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879h-8z"></path></symbol><symbol id="icon-book" viewBox="0 0 24 24"><path d="M6.5 1c-0.966 0-1.843 0.393-2.475 1.025s-1.025 1.509-1.025 2.475v15c0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025h13.5c0.552 0 1-0.448 1-1v-20c0-0.552-0.448-1-1-1zM19 18v3h-12.5c-0.414 0-0.788-0.167-1.061-0.439s-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439zM6.5 3h12.5v13h-12.5c-0.537 0-1.045 0.121-1.5 0.337v-11.837c0-0.414 0.167-0.788 0.439-1.061s0.647-0.439 1.061-0.439z"></path></symbol><symbol id="icon-book-open" viewBox="0 0 24 24"><path d="M21 4v13h-6c-0.728 0-1.412 0.195-2 0.535v-10.535c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879zM11 17.535c-0.588-0.34-1.272-0.535-2-0.535h-6v-13h5c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121zM22 2h-6c-1.38 0-2.632 0.561-3.536 1.464-0.167 0.167-0.322 0.346-0.464 0.536-0.142-0.19-0.297-0.369-0.464-0.536-0.904-0.903-2.156-1.464-3.536-1.464h-6c-0.552 0-1 0.448-1 1v15c0 0.552 0.448 1 1 1h7c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586h7c0.552 0 1-0.448 1-1v-15c0-0.552-0.448-1-1-1z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 24 24"><path d="M18.419 21.814c0.161 0.116 0.363 0.186 0.581 0.186 0.552 0 1-0.448 1-1v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-10c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c-0.001 0.199 0.060 0.404 0.186 0.581 0.321 0.449 0.946 0.554 1.395 0.232l6.419-4.584zM18 19.057l-5.419-3.871c-0.355-0.254-0.819-0.242-1.162 0l-5.419 3.871v-14.057c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-box" viewBox="0 0 24 24"><path d="M18.961 6.828l-6.961 4.027-6.961-4.027 6.456-3.689c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-7.001 4.001c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-6.495-3.711c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622v-7.462zM13 20.578v-7.991l7-4.049v7.462c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5z"></path></symbol><symbol id="icon-briefcase" viewBox="0 0 24 24"><path d="M9 6v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 20v-12h6v12zM7 8v12h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM17 6v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM17 20v-12h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293z"></path></symbol><symbol id="icon-calendar" viewBox="0 0 24 24"><path d="M7 2v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-6v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20 9h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h6v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM4 11h16v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"></path></symbol><symbol id="icon-camera" viewBox="0 0 24 24"><path d="M24 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-6c-0.326 0.002-0.64 0.158-0.832 0.445l-1.703 2.555h-3.465c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h18c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM22 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-18c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.346 0 0.65-0.175 0.832-0.445l1.703-2.555h4.93l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM17 13c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 13c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path></symbol><symbol id="icon-camera-off" viewBox="0 0 24 24"><path d="M9 4h5.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v9.34c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.34c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8.262 9.676c-0.146 0.163-0.283 0.337-0.409 0.522-0.78 1.139-1.023 2.489-0.788 3.745s0.952 2.426 2.091 3.205 2.489 1.023 3.745 0.788c0.887-0.166 1.73-0.572 2.424-1.197l3.261 3.261h-15.586c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2.586zM10.413 8.998l-8.706-8.705c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-0.586c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h17.586l1.707 1.707c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-13.268-13.268zM13.907 15.321c-0.4 0.336-0.875 0.555-1.375 0.649-0.756 0.142-1.563-0.005-2.247-0.473s-1.113-1.167-1.255-1.923 0.005-1.563 0.473-2.247c0.056-0.082 0.115-0.16 0.176-0.233z"></path></symbol><symbol id="icon-cast" viewBox="0 0 24 24"><path d="M1.8 17.080c0.938 0.191 1.729 0.694 2.292 1.386 0.405 0.497 0.693 1.093 0.829 1.741 0.114 0.54 0.644 0.886 1.185 0.772s0.886-0.644 0.772-1.185c-0.202-0.96-0.63-1.847-1.235-2.591-0.845-1.038-2.038-1.796-3.443-2.083-0.541-0.11-1.069 0.239-1.18 0.78s0.239 1.069 0.78 1.18zM1.889 13.044c2.001 0.223 3.744 1.163 5.006 2.546 1.119 1.226 1.859 2.799 2.061 4.526 0.064 0.549 0.561 0.941 1.109 0.877s0.941-0.561 0.877-1.109c-0.251-2.15-1.174-4.112-2.57-5.642-1.578-1.729-3.763-2.908-6.263-3.186-0.549-0.061-1.043 0.334-1.104 0.883s0.334 1.043 0.883 1.104zM3 8v-2c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM2 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-check" viewBox="0 0 24 24"><path d="M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 24 24"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z"></path></symbol><symbol id="icon-check-square" viewBox="0 0 24 24"><path d="M8.293 11.707l3 3c0.391 0.391 1.024 0.391 1.414 0l10-10c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-9.293 9.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM20 12v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h11c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-chevron-down" viewBox="0 0 24 24"><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-chevron-left" viewBox="0 0 24 24"><path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevron-right" viewBox="0 0 24 24"><path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-chevron-up" viewBox="0 0 24 24"><path d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevrons-down" viewBox="0 0 24 24"><path d="M6.293 13.707l5 5c0.391 0.391 1.024 0.391 1.414 0l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM6.293 6.707l5 5c0.391 0.391 1.024 0.391 1.414 0l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-chevrons-left" viewBox="0 0 24 24"><path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevrons-right" viewBox="0 0 24 24"><path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-chevrons-up" viewBox="0 0 24 24"><path d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chrome" viewBox="0 0 24 24"><path d="M7.402 10.033l-2.244-3.881c0.152-0.178 0.312-0.35 0.478-0.516 1.63-1.63 3.878-2.636 6.364-2.636s4.734 1.006 6.364 2.636c0.416 0.416 0.792 0.873 1.121 1.364h-7.485c-1.38 0-2.632 0.561-3.536 1.464-0.447 0.447-0.81 0.978-1.063 1.569zM10.7 22.924c0.046 0.008 0.092 0.014 0.139 0.015 0.381 0.040 0.769 0.061 1.161 0.061 3.037 0 5.789-1.232 7.778-3.222s3.222-4.741 3.222-7.778c0-1.539-0.317-3.005-0.888-4.336-0.016-0.044-0.034-0.086-0.055-0.126-0.553-1.244-1.33-2.367-2.279-3.316-1.989-1.99-4.741-3.222-7.778-3.222s-5.789 1.232-7.778 3.222c-0.366 0.365-0.706 0.757-1.017 1.171-0.042 0.047-0.079 0.097-0.111 0.149-1.317 1.813-2.094 4.046-2.094 6.458 0 3.037 1.232 5.789 3.222 7.778 1.701 1.701 3.96 2.849 6.478 3.146zM12.595 16.965l-2.241 3.885c-1.825-0.337-3.457-1.225-4.718-2.486-1.63-1.63-2.636-3.878-2.636-6.364 0-1.43 0.333-2.782 0.927-3.982l3.643 6.302c0.236 0.45 0.539 0.859 0.894 1.215 0.904 0.904 2.156 1.465 3.536 1.465 0.201 0 0.4-0.012 0.595-0.035zM14.638 13.431c-0.015 0.022-0.030 0.046-0.044 0.069l-0.076 0.132c-0.115 0.176-0.248 0.34-0.396 0.489-0.545 0.544-1.293 0.879-2.122 0.879s-1.577-0.335-2.121-0.879c-0.166-0.166-0.312-0.351-0.436-0.551-0.011-0.024-0.024-0.047-0.037-0.070l-0.082-0.141c-0.207-0.408-0.324-0.87-0.324-1.359 0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121c0 0.518-0.131 1.006-0.362 1.431zM12.588 20.981l3.64-6.311c0.489-0.772 0.772-1.688 0.772-2.67 0-1.125-0.373-2.165-1-3h4.488c0.332 0.938 0.512 1.948 0.512 3 0 2.486-1.006 4.734-2.636 6.364-1.5 1.5-3.525 2.472-5.776 2.617z"></path></symbol><symbol id="icon-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364z"></path></symbol><symbol id="icon-clipboard" viewBox="0 0 24 24"><path d="M7 5c0 0.552 0.225 1.053 0.586 1.414s0.862 0.586 1.414 0.586h6c0.552 0 1.053-0.225 1.414-0.586s0.586-0.862 0.586-1.414h1c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 1c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-1c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586zM9 3h6v2h-6z"></path></symbol><symbol id="icon-clock" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 6v6c0 0.389 0.222 0.727 0.553 0.894l4 2c0.494 0.247 1.095 0.047 1.342-0.447s0.047-1.095-0.447-1.342l-3.448-1.723v-5.382c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-cloud" viewBox="0 0 24 24"><path d="M18 11c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828-0.447 2.103-1.172 2.828-1.723 1.172-2.828 1.172h-8.995c-1.463-0.008-2.853-0.461-4.005-1.258-1.334-0.922-2.348-2.304-2.784-3.992-0.483-1.872-0.163-3.761 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75zM18 9h-0.52c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.583-6.821-0.961s-4.334 2.16-5.503 4.143-1.582 4.415-0.961 6.821c0.56 2.169 1.867 3.951 3.583 5.137 1.478 1.023 3.261 1.603 5.132 1.613h9.005c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243-0.673-3.158-1.757-4.243-2.586-1.757-4.243-1.757z"></path></symbol><symbol id="icon-cloud-drizzle" viewBox="0 0 24 24"><path d="M7 19v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM7 13v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15 19v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15 13v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 21v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 15v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20.401 17.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515z"></path></symbol><symbol id="icon-cloud-lightning" viewBox="0 0 24 24"><path d="M19.199 17.88c1.623-0.33 2.961-1.288 3.808-2.566s1.208-2.884 0.878-4.507c-0.303-1.491-1.136-2.742-2.267-3.592-1.018-0.767-2.279-1.21-3.614-1.215h-0.524c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.162-5.503 4.144-1.582 4.415-0.961 6.821c0.597 2.313 2.043 4.184 3.919 5.365 0.143 0.090 0.288 0.176 0.436 0.258 0.483 0.268 1.092 0.093 1.359-0.39s0.093-1.092-0.39-1.359c-0.115-0.064-0.229-0.131-0.34-0.201-1.462-0.921-2.583-2.374-3.048-4.173-0.483-1.872-0.163-3.761 0.747-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.747 2.739 2.408 3.223 4.28c0.116 0.435 0.506 0.75 0.969 0.75h1.256c0.896 0.004 1.74 0.3 2.42 0.812 0.754 0.567 1.307 1.397 1.509 2.392 0.22 1.083-0.019 2.15-0.585 3.005s-1.456 1.491-2.539 1.711c-0.541 0.11-0.891 0.638-0.781 1.179s0.638 0.891 1.179 0.781zM12.168 10.445l-4 6c-0.306 0.46-0.182 1.080 0.277 1.387 0.172 0.115 0.367 0.169 0.555 0.168h4.131l-2.964 4.445c-0.306 0.46-0.182 1.080 0.277 1.387s1.080 0.182 1.387-0.277l4-6c0.106-0.156 0.169-0.348 0.169-0.555 0-0.552-0.448-1-1-1h-4.131l2.964-4.445c0.306-0.46 0.182-1.080-0.277-1.387s-1.080-0.182-1.387 0.277z"></path></symbol><symbol id="icon-cloud-off" viewBox="0 0 24 24"><path d="M23.531 17.34c0.646-1.525 0.612-3.17 0.036-4.592s-1.696-2.627-3.221-3.273c-0.776-0.328-1.588-0.483-2.357-0.475h-0.506c-0.62-1.78-1.761-3.26-3.211-4.309-1.298-0.938-2.844-1.531-4.487-1.687-0.55-0.052-1.038 0.351-1.090 0.901s0.351 1.038 0.901 1.090c1.286 0.122 2.493 0.586 3.505 1.317 1.283 0.928 2.252 2.286 2.671 3.934 0.112 0.437 0.503 0.754 0.968 0.754h1.271c0.49-0.005 1.030 0.094 1.555 0.317 1.017 0.431 1.763 1.232 2.148 2.182s0.407 2.044-0.024 3.061c-0.215 0.509 0.022 1.095 0.531 1.311s1.095-0.022 1.311-0.531zM4.854 6.268l12.732 12.732h-8.596c-0.96 0.010-1.903-0.172-2.774-0.527-1.431-0.583-2.669-1.635-3.471-3.085-0.935-1.692-1.097-3.601-0.601-5.324 0.432-1.5 1.36-2.854 2.709-3.797zM0.293 1.707l3.129 3.13c-1.581 1.2-2.676 2.856-3.2 4.675-0.637 2.212-0.43 4.67 0.773 6.845 1.030 1.863 2.626 3.219 4.466 3.969 1.117 0.454 2.324 0.686 3.549 0.674h8.99c0.489-0.001 0.967-0.060 1.417-0.169l2.876 2.876c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-cloud-rain" viewBox="0 0 24 24"><path d="M15 13v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM7 13v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 15v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20.401 17.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515z"></path></symbol><symbol id="icon-cloud-snow" viewBox="0 0 24 24"><path d="M20.401 18.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515zM8 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM8 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM12 23c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM16 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM16 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-code" viewBox="0 0 24 24"><path d="M16.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM7.293 5.293l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-codepen" viewBox="0 0 24 24"><path d="M5.256 12l-2.256 1.579v-3.159zM21 13.579l-2.256-1.579 2.256-1.579zM17 13.221l3.212 2.249-7.212 4.687v-4.137zM8.744 12l3.256-2.279 3.256 2.279-3.256 2.279zM3.788 15.469l3.212-2.248 4 2.8v4.137zM12.557 1.169c-0.159-0.107-0.351-0.169-0.557-0.169s-0.398 0.062-0.557 0.169l-9.969 6.48c-0.112 0.070-0.213 0.163-0.293 0.278-0.125 0.178-0.184 0.383-0.181 0.585v6.976c-0.002 0.184 0.046 0.37 0.148 0.536 0.041 0.068 0.091 0.131 0.149 0.188 0.047 0.047 0.1 0.089 0.158 0.127l0.019 0.012 9.969 6.48c0.159 0.107 0.351 0.169 0.557 0.169s0.398-0.062 0.557-0.169l9.969-6.48c0.112-0.069 0.213-0.162 0.293-0.277 0.125-0.178 0.183-0.383 0.181-0.586v-6.976c0.002-0.184-0.046-0.37-0.148-0.536-0.041-0.067-0.091-0.131-0.149-0.188-0.047-0.047-0.1-0.089-0.158-0.127l-0.019-0.012zM13 7.979v-4.136l7.212 4.688-3.212 2.248zM11 3.843v4.137l-4 2.8-3.212-2.249z"></path></symbol><symbol id="icon-codesandbox" viewBox="0 0 24 24"><path d="M14.441 4.245l-2.441 1.41-2.441-1.41 1.936-1.106c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM4 13.733l2.5 1.444v2.83l-1.995-1.14c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622zM17.5 18.007v-2.83l2.5-1.444v2.267c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5zM18.961 6.828l-6.961 4.027-6.961-4.027 2.51-1.435 3.951 2.283c0.319 0.184 0.697 0.173 1.001 0l3.95-2.282zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l3.198-1.828c0.218-0.043 0.411-0.157 0.554-0.316l3.249-1.857c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-3.258-1.861c-0.147-0.167-0.343-0.276-0.553-0.317l-3.197-1.827c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-3.2 1.828c-0.21 0.041-0.406 0.15-0.553 0.316l-3.249 1.857c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l3.258 1.862c0.142 0.16 0.335 0.274 0.554 0.316l3.197 1.827c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-2.5-1.428v-4.55c0-0.368-0.199-0.69-0.5-0.866l-4-2.311v-2.885zM13 20.578v-7.991l7-4.049v2.885l-4 2.311c-0.319 0.184-0.498 0.517-0.5 0.866v4.55z"></path></symbol><symbol id="icon-coffee" viewBox="0 0 24 24"><path d="M19 15v-6c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879zM2 7c-0.552 0-1 0.448-1 1v9c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h8c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536-0.561-2.632-1.464-3.536-2.156-1.464-3.536-1.464h-1zM3 9h14v8c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-8c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121zM5 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM9 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-columns" viewBox="0 0 24 24"><path d="M12 4h7c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1h7c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1zM12 2h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h7c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM11 3v18c0 0.552 0.448 1 1 1s1-0.448 1-1v-18c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-command" viewBox="0 0 24 24"><path d="M16 16h2c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414zM8 16v2c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586zM8 8h-2c-0.553 0-1.051-0.223-1.414-0.586s-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM16 8h-8v8h8zM18 4c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586h-2v-2c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586zM10 10v-4c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172zM10 14h-4c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 14v4c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172zM14 10v4h-4v-4zM18 2c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828v4h4c1.104 0 2.106-0.449 2.828-1.172s1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172z"></path></symbol><symbol id="icon-compass" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM17.189 8.076c0.066-0.196 0.072-0.418 0-0.632-0.175-0.524-0.741-0.807-1.265-0.632l-6.36 2.12c-0.29 0.098-0.529 0.323-0.632 0.632l-2.12 6.36c-0.066 0.196-0.072 0.418 0 0.632 0.175 0.524 0.741 0.807 1.265 0.632l6.36-2.12c0.29-0.098 0.529-0.323 0.632-0.632zM14.659 9.341l-1.33 3.988-3.988 1.33 1.329-3.988z"></path></symbol><symbol id="icon-copy" viewBox="0 0 24 24"><path d="M11 8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v9c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h9c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-9c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11 10h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-9c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM5 14h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-9c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v9c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-down-left" viewBox="0 0 24 24"><path d="M19 4v7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-9.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.092 0.092-0.166 0.202-0.217 0.324-0.15 0.362-0.078 0.795 0.217 1.090l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3.293-3.293h9.586c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-corner-down-right" viewBox="0 0 24 24"><path d="M3 4v7c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-corner-left-down" viewBox="0 0 24 24"><path d="M20 3h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293v-9.586c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-left-up" viewBox="0 0 24 24"><path d="M20 19h-7c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.096-0.096-0.206-0.168-0.324-0.217s-0.247-0.076-0.383-0.076-0.265 0.027-0.383 0.076c-0.118 0.049-0.228 0.121-0.324 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h7c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-right-down" viewBox="0 0 24 24"><path d="M4 5h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293v-9.586c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-corner-right-up" viewBox="0 0 24 24"><path d="M4 21h7c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.092-0.092-0.202-0.166-0.324-0.217-0.362-0.15-0.795-0.078-1.090 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-corner-up-left" viewBox="0 0 24 24"><path d="M21 20v-7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-9.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.096 0.096-0.168 0.206-0.217 0.324s-0.076 0.247-0.076 0.383 0.027 0.265 0.076 0.383c0.049 0.118 0.121 0.228 0.217 0.324l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3.293-3.293h9.586c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v7c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-corner-up-right" viewBox="0 0 24 24"><path d="M5 20v-7c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v7c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-cpu" viewBox="0 0 24 24"><path d="M6 5h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-12c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 8c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1zM10 10h4v4h-4zM1 15h2v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h4v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-4v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v3h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-credit-card" viewBox="0 0 24 24"><path d="M3 3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v12c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h18c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM22 9h-20v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM2 11h20v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-18c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"></path></symbol><symbol id="icon-crop" viewBox="0 0 24 24"><path d="M7.077 7.077l8.932-0.077c0.268 0 0.516 0.111 0.698 0.293s0.293 0.431 0.293 0.707v9h-9c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.698zM1.009 7.13l4.068-0.035-0.077 8.896c0 0.837 0.337 1.588 0.879 2.13s1.293 0.879 2.121 0.879h9v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4v-9c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.13-0.879l-8.896 0.077 0.035-4.068c0.005-0.553-0.439-1.004-0.991-1.009s-1.004 0.439-1.009 0.991l-0.036 4.103-4.103 0.036c-0.552 0.005-0.996 0.456-0.991 1.009s0.456 0.996 1.009 0.991z"></path></symbol><symbol id="icon-crosshair" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM13 20.945v-2.945c0-0.552-0.448-1-1-1s-1 0.448-1 1v2.945c-2.086-0.23-3.956-1.173-5.364-2.581s-2.351-3.278-2.581-5.364h2.945c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2.945c0.23-2.086 1.173-3.956 2.581-5.364s3.278-2.351 5.364-2.581v2.945c0 0.552 0.448 1 1 1s1-0.448 1-1v-2.945c2.086 0.23 3.956 1.173 5.364 2.581s2.351 3.278 2.581 5.364h-2.945c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.945c-0.23 2.086-1.173 3.956-2.581 5.364s-3.278 2.351-5.364 2.581z"></path></symbol><symbol id="icon-database" viewBox="0 0 24 24"><path d="M4 5.002c0 0 0.003-0.095 0.213-0.288 0.245-0.225 0.671-0.483 1.306-0.73 1.499-0.585 3.821-0.984 6.481-0.984s4.982 0.399 6.482 0.984c0.634 0.247 1.061 0.505 1.306 0.73 0.205 0.189 0.212 0.281 0.212 0.288 0 0.003-0.007 0.095-0.213 0.284-0.245 0.225-0.671 0.483-1.306 0.73-1.499 0.585-3.821 0.984-6.481 0.984s-4.982-0.399-6.482-0.984c-0.634-0.247-1.061-0.505-1.306-0.73-0.208-0.192-0.212-0.284-0.212-0.284zM20 14.532v4.471c-0.041 0.097-0.096 0.181-0.217 0.291-0.245 0.225-0.671 0.482-1.303 0.728-1.495 0.582-3.809 0.978-6.48 0.978s-4.985-0.396-6.48-0.978c-0.633-0.246-1.058-0.503-1.303-0.728-0.12-0.11-0.176-0.194-0.199-0.242l-0.006-4.514c0.248 0.126 0.51 0.242 0.782 0.348 1.797 0.699 4.377 1.114 7.206 1.114s5.409-0.415 7.206-1.114c0.277-0.108 0.543-0.225 0.794-0.354zM20 7.527v4.463c0 0.004 0 0.008 0 0.013-0.041 0.097-0.096 0.181-0.217 0.291-0.245 0.225-0.671 0.482-1.303 0.728-1.495 0.582-3.809 0.978-6.48 0.978s-4.985-0.396-6.48-0.978c-0.633-0.246-1.058-0.503-1.303-0.728-0.12-0.11-0.176-0.194-0.199-0.242-0.001-0.040-0.004-0.079-0.009-0.117l-0.005-4.407c0.248 0.128 0.513 0.244 0.788 0.352 1.801 0.702 4.388 1.12 7.208 1.12s5.407-0.418 7.208-1.12c0.276-0.108 0.542-0.225 0.792-0.353zM2 5v14c0 0.058 0.002 0.116 0.007 0.174 0.057 0.665 0.425 1.197 0.857 1.594 0.498 0.457 1.175 0.824 1.93 1.118 1.797 0.699 4.377 1.114 7.206 1.114s5.409-0.415 7.206-1.114c0.755-0.294 1.432-0.661 1.93-1.118 0.432-0.397 0.8-0.929 0.857-1.594 0.005-0.058 0.007-0.116 0.007-0.174v-14c0-0.056-0.002-0.112-0.007-0.168-0.055-0.664-0.422-1.195-0.852-1.59-0.498-0.459-1.177-0.827-1.933-1.122-1.801-0.702-4.388-1.12-7.208-1.12s-5.407 0.418-7.208 1.12c-0.756 0.295-1.435 0.664-1.933 1.122-0.43 0.395-0.797 0.927-0.852 1.59-0.005 0.056-0.007 0.112-0.007 0.168z"></path></symbol><symbol id="icon-delete" viewBox="0 0 24 24"><path d="M21 5c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12.546l-6.125-7 6.125-7zM21 3h-13c-0.3 0-0.568 0.132-0.753 0.341l-7 8c-0.333 0.38-0.326 0.942 0 1.317l7 8c0.198 0.226 0.474 0.341 0.753 0.342h13c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-disc" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-dollar-sign" viewBox="0 0 24 24"><path d="M11 11h-1.5c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732h1.5zM13 13h1.5c0.691 0 1.314 0.279 1.768 0.732s0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732h-1.5zM17 4h-4v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-1.5c-1.242 0-2.369 0.505-3.182 1.318s-1.318 1.94-1.318 3.182 0.505 2.369 1.318 3.182 1.94 1.318 3.182 1.318h1.5v5h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h5v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h1.5c1.242 0 2.369-0.505 3.182-1.318s1.318-1.94 1.318-3.182-0.505-2.369-1.318-3.182-1.94-1.318-3.182-1.318h-1.5v-5h4c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-download" viewBox="0 0 24 24"><path d="M20 15v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 12.586v-9.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217s0.253 0.076 0.383 0.076c0.256 0 0.512-0.098 0.707-0.293l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-download-cloud" viewBox="0 0 24 24"><path d="M11 12v6.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293v-6.586c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.455 18.908c1.355-0.953 2.196-2.367 2.46-3.878s-0.050-3.126-1.003-4.481c-0.825-1.174-1.998-1.963-3.287-2.324-0.526-0.147-1.072-0.223-1.621-0.225h-0.523c-0.722-2.058-2.137-3.71-3.907-4.758-1.981-1.172-4.412-1.589-6.819-0.972s-4.338 2.155-5.51 4.136-1.589 4.412-0.972 6.819c0.371 1.446 1.075 2.725 1.983 3.734 0.37 0.41 1.002 0.444 1.412 0.074s0.444-1.002 0.074-1.412c-0.692-0.769-1.242-1.76-1.533-2.893-0.481-1.873-0.157-3.761 0.756-5.304s2.412-2.736 4.285-3.216 3.761-0.157 5.304 0.756 2.736 2.412 3.216 4.285c0.116 0.435 0.506 0.751 0.97 0.751h1.256c0.37 0.001 0.737 0.052 1.090 0.151 0.861 0.241 1.639 0.765 2.19 1.548 0.636 0.904 0.845 1.978 0.669 2.988s-0.736 1.95-1.64 2.585c-0.452 0.318-0.56 0.941-0.243 1.393s0.941 0.56 1.393 0.243z"></path></symbol><symbol id="icon-droplet" viewBox="0 0 24 24"><path d="M12.707 1.983c-0.391-0.391-1.025-0.39-1.415 0.001l-5.653 5.663c-1.757 1.758-2.635 4.063-2.634 6.365s0.88 4.607 2.638 6.363c1.756 1.755 4.059 2.633 6.358 2.634 2.308-0.001 4.613-0.881 6.37-2.638 1.755-1.756 2.633-4.059 2.634-6.358-0.001-2.309-0.881-4.613-2.638-6.369zM12.001 4.105l4.952 4.952c1.368 1.367 2.052 3.156 2.052 4.949s-0.682 3.583-2.049 4.95-3.156 2.051-4.949 2.052-3.583-0.682-4.95-2.049-2.051-3.156-2.052-4.949 0.682-3.583 2.049-4.95z"></path></symbol><symbol id="icon-edit" viewBox="0 0 24 24"><path d="M11 3h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17.793 1.793l-9.5 9.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l9.5-9.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM19.207 3.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-9.304 9.304-2.114 0.529 0.529-2.114z"></path></symbol><symbol id="icon-edit-2" viewBox="0 0 24 24"><path d="M16.293 2.293l-13.5 13.5c-0.117 0.116-0.21 0.268-0.258 0.444l-1.5 5.5c-0.046 0.163-0.049 0.346 0 0.526 0.145 0.533 0.695 0.847 1.228 0.702l5.5-1.5c0.159-0.042 0.315-0.129 0.444-0.258l13.5-13.5c0.747-0.747 1.121-1.729 1.121-2.707s-0.374-1.96-1.121-2.707-1.729-1.121-2.707-1.121-1.96 0.374-2.707 1.121zM17.707 3.707c0.357-0.357 0.824-0.535 1.293-0.535s0.936 0.178 1.293 0.536 0.535 0.823 0.535 1.292-0.178 0.936-0.535 1.293l-13.312 13.312-3.556 0.97 0.97-3.555z"></path></symbol><symbol id="icon-edit-3" viewBox="0 0 24 24"><path d="M12 21h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1zM15.793 2.793l-12.5 12.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l12.5-12.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM17.207 4.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-12.304 12.304-2.115 0.529 0.529-2.115z"></path></symbol><symbol id="icon-external-link" viewBox="0 0 24 24"><path d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-eye" viewBox="0 0 24 24"><path d="M0.106 11.553c-0.136 0.274-0.146 0.603 0 0.894 0 0 0.396 0.789 1.12 1.843 0.451 0.656 1.038 1.432 1.757 2.218 0.894 0.979 2.004 1.987 3.319 2.8 1.595 0.986 3.506 1.692 5.698 1.692s4.103-0.706 5.698-1.692c1.315-0.813 2.425-1.821 3.319-2.8 0.718-0.786 1.306-1.562 1.757-2.218 0.724-1.054 1.12-1.843 1.12-1.843 0.136-0.274 0.146-0.603 0-0.894 0 0-0.396-0.789-1.12-1.843-0.451-0.656-1.038-1.432-1.757-2.218-0.894-0.979-2.004-1.987-3.319-2.8-1.595-0.986-3.506-1.692-5.698-1.692s-4.103 0.706-5.698 1.692c-1.315 0.813-2.425 1.821-3.319 2.8-0.719 0.786-1.306 1.561-1.757 2.218-0.724 1.054-1.12 1.843-1.12 1.843zM2.14 12c0.163-0.281 0.407-0.681 0.734-1.158 0.41-0.596 0.94-1.296 1.585-2.001 0.805-0.881 1.775-1.756 2.894-2.448 1.35-0.834 2.901-1.393 4.647-1.393s3.297 0.559 4.646 1.393c1.119 0.692 2.089 1.567 2.894 2.448 0.644 0.705 1.175 1.405 1.585 2.001 0.328 0.477 0.572 0.876 0.734 1.158-0.163 0.281-0.407 0.681-0.734 1.158-0.41 0.596-0.94 1.296-1.585 2.001-0.805 0.881-1.775 1.756-2.894 2.448-1.349 0.834-2.9 1.393-4.646 1.393s-3.297-0.559-4.646-1.393c-1.119-0.692-2.089-1.567-2.894-2.448-0.644-0.705-1.175-1.405-1.585-2.001-0.328-0.477-0.572-0.877-0.735-1.158zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-eye-off" viewBox="0 0 24 24"><path d="M10.128 5.214c0.651-0.152 1.296-0.221 1.86-0.214 1.758 0 3.309 0.559 4.658 1.393 1.119 0.692 2.089 1.567 2.894 2.448 0.644 0.705 1.175 1.405 1.585 2.001 0.327 0.475 0.57 0.874 0.733 1.155-0.546 0.953-1.16 1.821-1.778 2.542-0.359 0.419-0.311 1.051 0.108 1.41s1.051 0.311 1.41-0.108c0.818-0.954 1.611-2.112 2.283-3.37 0.148-0.279 0.163-0.618 0.013-0.919 0 0-0.396-0.789-1.12-1.843-0.451-0.656-1.038-1.432-1.757-2.218-0.894-0.979-2.004-1.987-3.319-2.8-1.595-0.985-3.506-1.691-5.686-1.691-0.734-0.009-1.54 0.079-2.34 0.266-0.538 0.126-0.872 0.664-0.746 1.202s0.664 0.872 1.202 0.746zM10.027 11.442l2.531 2.531c-0.182 0.061-0.372 0.094-0.563 0.101-0.513 0.018-1.030-0.159-1.434-0.536s-0.617-0.88-0.635-1.393c-0.008-0.238 0.025-0.476 0.101-0.704zM5.983 7.397l2.553 2.553c-0.434 0.691-0.636 1.484-0.608 2.266 0.036 1.022 0.463 2.033 1.271 2.785s1.846 1.107 2.868 1.071c0.692-0.024 1.379-0.228 1.984-0.608l2.322 2.322c-1.378 0.799-2.895 1.196-4.384 1.214-1.734 0-3.285-0.559-4.634-1.393-1.119-0.692-2.089-1.567-2.894-2.448-0.644-0.705-1.175-1.405-1.585-2.001-0.326-0.475-0.57-0.873-0.732-1.154 1.050-1.822 2.376-3.379 3.841-4.607zM0.293 1.707l4.271 4.271c-1.731 1.479-3.269 3.358-4.445 5.549-0.148 0.279-0.164 0.619-0.013 0.92 0 0 0.396 0.789 1.12 1.843 0.451 0.656 1.038 1.432 1.757 2.218 0.894 0.979 2.004 1.987 3.319 2.8 1.595 0.986 3.506 1.692 5.71 1.692 1.993-0.024 4.019-0.601 5.815-1.759l4.466 4.466c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.876-8.876c-0.002-0.002-0.005-0.005-0.007-0.007l-4.209-4.21c-0.008-0.007-0.016-0.016-0.024-0.024l-8.884-8.883c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-facebook" viewBox="0 0 24 24"><path d="M17 3v2h-2c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414v3c0 0.552 0.448 1 1 1h2.719l-0.5 2h-2.219c-0.552 0-1 0.448-1 1v7h-2v-7c0-0.552-0.448-1-1-1h-2v-2h2c0.552 0 1-0.448 1-1v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM18 1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v2h-2c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h2v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7h2c0.466 0 0.858-0.319 0.97-0.757l1-4c0.134-0.536-0.192-1.079-0.728-1.213-0.083-0.021-0.167-0.031-0.242-0.030h-3v-2h3c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1z"></path></symbol><symbol id="icon-fast-forward" viewBox="0 0 24 24"><path d="M14 16.955v-9.91l6.371 4.955zM3 16.955v-9.91l6.371 4.955zM2.614 19.789l9-7c0.251-0.195 0.383-0.486 0.386-0.78v6.991c0 0.552 0.448 1 1 1 0.232 0 0.446-0.079 0.614-0.211l9-7c0.436-0.339 0.514-0.967 0.175-1.403-0.054-0.069-0.115-0.129-0.175-0.175l-9-7c-0.436-0.339-1.064-0.261-1.403 0.175-0.143 0.184-0.212 0.401-0.211 0.614v6.99c-0.002-0.211-0.071-0.424-0.211-0.604-0.054-0.069-0.115-0.129-0.175-0.175l-9-7c-0.436-0.339-1.064-0.261-1.403 0.175-0.143 0.184-0.212 0.401-0.211 0.614v14c0 0.552 0.448 1 1 1 0.232 0 0.446-0.079 0.614-0.211z"></path></symbol><symbol id="icon-feather" viewBox="0 0 24 24"><path d="M18.111 15.792c0.069-0.053 0.13-0.115 0.183-0.184l2.653-2.661c1.367-1.367 2.051-3.161 2.051-4.952s-0.684-3.585-2.051-4.952-3.161-2.051-4.952-2.051-3.585 0.684-4.952 2.051l-6.75 6.75c-0.195 0.195-0.293 0.451-0.293 0.707v8.086l-2.707 2.707c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.707-2.707h8.086c0.277 0 0.527-0.112 0.708-0.294zM9.414 16h5.665l-1.994 2h-5.671zM17.073 14h-5.659l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-9.293 9.293v-5.672l6.457-6.457c0.977-0.977 2.256-1.465 3.538-1.465s2.561 0.488 3.538 1.465 1.465 2.256 1.465 3.538-0.488 2.561-1.465 3.538z"></path></symbol><symbol id="icon-figma" viewBox="0 0 24 24"><path d="M13 12.5c0-0.691 0.279-1.314 0.732-1.768s1.077-0.732 1.768-0.732 1.314 0.279 1.768 0.732 0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732-1.314-0.279-1.768-0.732-0.732-1.077-0.732-1.768zM8.5 8c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732h2.5v5zM13 8v-5h2.5c0.691 0 1.314 0.279 1.768 0.732s0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732zM11 17v2.5c0 0.691-0.279 1.314-0.732 1.768s-1.077 0.732-1.768 0.732-1.314-0.279-1.768-0.732-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732zM4 12.5c0 1.242 0.505 2.369 1.318 3.182 0.112 0.112 0.23 0.218 0.353 0.318-0.123 0.1-0.241 0.206-0.353 0.318-0.813 0.813-1.318 1.94-1.318 3.182s0.505 2.369 1.318 3.182 1.94 1.318 3.182 1.318 2.369-0.505 3.182-1.318 1.318-1.94 1.318-3.182v-3.258c0.715 0.478 1.575 0.758 2.5 0.758 1.242 0 2.369-0.505 3.182-1.318s1.318-1.94 1.318-3.182-0.505-2.369-1.318-3.182c-0.112-0.112-0.23-0.218-0.353-0.318 0.123-0.1 0.241-0.206 0.353-0.318 0.813-0.813 1.318-1.94 1.318-3.182s-0.505-2.369-1.318-3.182-1.94-1.318-3.182-1.318h-7c-1.242 0-2.369 0.505-3.182 1.318s-1.318 1.94-1.318 3.182 0.505 2.369 1.318 3.182c0.112 0.112 0.23 0.218 0.353 0.318-0.123 0.1-0.241 0.206-0.353 0.318-0.813 0.813-1.318 1.94-1.318 3.182zM6 12.5c0-0.691 0.279-1.314 0.732-1.768s1.077-0.732 1.768-0.732h2.5v5h-2.5c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768z"></path></symbol><symbol id="icon-file" viewBox="0 0 24 24"><path d="M17.586 8h-3.586v-3.586zM20.707 8.293l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.276-0.112-0.526-0.293-0.707zM12 3v6c0 0.552 0.448 1 1 1h6v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-file-minus" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 16h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-file-plus" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 16h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-file-text" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM16 12h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 16h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10 8h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-film" viewBox="0 0 24 24"><path d="M16 11h-8v-8h8zM8 13h8v8h-8zM6 6h-3v-1.82c0-0.326 0.131-0.62 0.346-0.834s0.508-0.346 0.834-0.346h1.82zM3 8h3v3h-3zM6 16h-3v-3h3zM3 18h3v3h-1.82c-0.326 0-0.62-0.131-0.834-0.346s-0.346-0.508-0.346-0.834zM21 16h-3v-3h3zM18 18h3v1.82c0 0.326-0.131 0.62-0.346 0.834s-0.508 0.346-0.834 0.346h-1.82zM21 6h-3v-3h1.82c0.326 0 0.62 0.131 0.834 0.346s0.346 0.508 0.346 0.834zM23 7v-2.82c0-0.878-0.357-1.674-0.931-2.249s-1.371-0.931-2.249-0.931h-15.64c-0.878 0-1.674 0.357-2.249 0.931s-0.931 1.371-0.931 2.249v15.64c0 0.878 0.357 1.674 0.931 2.249s1.371 0.931 2.249 0.931h15.64c0.878 0 1.674-0.357 2.249-0.931s0.931-1.371 0.931-2.249zM18 8h3v3h-3z"></path></symbol><symbol id="icon-filter" viewBox="0 0 24 24"><path d="M19.845 4l-6.609 7.814c-0.147 0.173-0.236 0.399-0.236 0.646v6.922l-2-1v-5.922c0.001-0.227-0.077-0.457-0.236-0.646l-6.609-7.814zM22 2h-20c-0.552 0-1 0.448-1 1 0 0.247 0.089 0.473 0.236 0.646l7.764 9.18v6.174c0 0.389 0.222 0.727 0.553 0.894l4 2c0.494 0.247 1.095 0.047 1.342-0.447 0.072-0.146 0.106-0.301 0.105-0.447v-8.174l7.764-9.18c0.357-0.422 0.304-1.053-0.118-1.409-0.189-0.16-0.419-0.238-0.646-0.237z"></path></symbol><symbol id="icon-flag" viewBox="0 0 24 24"><path d="M5 13.397v-9.859c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 1.298 0 2.278-0.175 3-0.397v9.859c-0.44 0.218-1.365 0.538-3 0.538-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-1.298 0-2.278 0.175-3 0.397zM5 22v-6.462c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 3.247 0 4.507-1.093 4.707-1.293 0.195-0.195 0.293-0.451 0.293-0.707v-12c0-0.552-0.448-1-1-1-0.265 0-0.506 0.103-0.685 0.272-0.096 0.078-0.984 0.728-3.315 0.728-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-3.247 0-4.507 1.093-4.707 1.293-0.195 0.195-0.293 0.451-0.293 0.707v19c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-folder" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-folder-minus" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM9 15h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-folder-plus" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM9 15h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-framer" viewBox="0 0 24 24"><path d="M12.414 8l-5-5h10.586v5zM6 16v-6h5.586l5 5h-4.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h7c0.256 0 0.512-0.098 0.707-0.293 0.391-0.391 0.391-1.024 0-1.414l-5.293-5.293h4.586c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1 0 0.276 0.112 0.526 0.293 0.707l5.293 5.293h-4.586c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1s1-0.448 1-1zM4.293 16.707l7 7c0.391 0.391 1.024 0.391 1.414 0 0.195-0.195 0.293-0.451 0.293-0.707v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v4.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM5 17h7c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-frown" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16.8 15.4c0 0-0.131-0.173-0.331-0.383-0.145-0.153-0.338-0.341-0.577-0.54-0.337-0.281-0.772-0.59-1.297-0.853-0.705-0.352-1.579-0.624-2.595-0.624s-1.89 0.272-2.595 0.624c-0.525 0.263-0.96 0.572-1.297 0.853-0.239 0.199-0.432 0.387-0.577 0.54-0.2 0.21-0.331 0.383-0.331 0.383-0.331 0.442-0.242 1.069 0.2 1.4s1.069 0.242 1.4-0.2c0.041-0.050 0.181-0.206 0.181-0.206 0.1-0.105 0.237-0.239 0.408-0.382 0.243-0.203 0.549-0.419 0.91-0.6 0.48-0.239 1.050-0.412 1.701-0.412s1.221 0.173 1.701 0.413c0.36 0.18 0.667 0.397 0.91 0.6 0.171 0.143 0.308 0.277 0.408 0.382 0.14 0.155 0.181 0.205 0.181 0.205 0.331 0.442 0.958 0.531 1.4 0.2s0.531-0.958 0.2-1.4zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-gift" viewBox="0 0 24 24"><path d="M11 13v8h-6v-8zM13 21v-8h6v8zM7.5 6c-0.414 0-0.788-0.167-1.061-0.439s-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439c0.629 0 1.142 0.223 1.584 0.586 0.376 0.308 0.701 0.719 0.976 1.177 0.241 0.401 0.433 0.821 0.58 1.203zM13.346 6c0.161-0.416 0.353-0.836 0.593-1.237 0.275-0.459 0.601-0.869 0.976-1.177 0.443-0.363 0.956-0.586 1.585-0.586 0.414 0 0.788 0.167 1.061 0.439s0.439 0.647 0.439 1.061-0.167 0.788-0.439 1.061-0.647 0.439-1.061 0.439zM11 8v3h-8v-3h4.5zM19.663 6c0.216-0.455 0.337-0.963 0.337-1.5 0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025c-1.16 0-2.109 0.43-2.852 1.039-0.603 0.494-1.068 1.103-1.423 1.694-0.080 0.133-0.155 0.266-0.225 0.398-0.070-0.132-0.145-0.265-0.225-0.398-0.355-0.591-0.82-1.2-1.423-1.694-0.743-0.609-1.692-1.039-2.852-1.039-0.966 0-1.843 0.393-2.475 1.025s-1.025 1.509-1.025 2.475c0 0.537 0.121 1.045 0.337 1.5h-2.337c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h1v9c0 0.552 0.448 1 1 1h16c0.552 0 1-0.448 1-1v-9h1c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM13 8h8v3h-8z"></path></symbol><symbol id="icon-git-branch" viewBox="0 0 24 24"><path d="M20 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM16.954 9.862c-0.2 1.865-1.039 3.537-2.297 4.795s-2.93 2.098-4.795 2.297c-0.185-0.685-0.547-1.297-1.033-1.783-0.497-0.496-1.126-0.864-1.829-1.045v-11.126c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.126c-0.703 0.181-1.332 0.549-1.828 1.045-0.723 0.723-1.172 1.725-1.172 2.829s0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172c0.506-0.506 0.878-1.148 1.055-1.867 2.409-0.211 4.574-1.277 6.188-2.89s2.679-3.779 2.89-6.188c0.719-0.177 1.361-0.549 1.867-1.055 0.723-0.722 1.172-1.724 1.172-2.828s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.486 0.486 1.098 0.848 1.783 1.033z"></path></symbol><symbol id="icon-git-commit" viewBox="0 0 24 24"><path d="M15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.010 13h5.95c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5.95c-0.037 0-0.073 0.002-0.109 0.006-0.198-0.982-0.685-1.86-1.365-2.541-0.904-0.904-2.156-1.465-3.536-1.465s-2.632 0.561-3.536 1.464c-0.681 0.681-1.167 1.559-1.365 2.54-0.032-0.002-0.066-0.004-0.099-0.004h-5.95c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.95c0.033 0 0.067-0.002 0.099-0.005 0.198 0.982 0.685 1.86 1.365 2.54 0.904 0.904 2.156 1.465 3.536 1.465s2.632-0.561 3.536-1.464c0.681-0.681 1.167-1.559 1.365-2.541 0.036 0.004 0.072 0.006 0.109 0.006z"></path></symbol><symbol id="icon-git-merge" viewBox="0 0 24 24"><path d="M20 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM7 21v-5.999c0.284 0.379 0.595 0.736 0.929 1.070 1.614 1.614 3.779 2.679 6.188 2.89 0.177 0.719 0.549 1.361 1.055 1.867 0.722 0.723 1.724 1.172 2.828 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172c-0.486 0.486-0.848 1.098-1.033 1.783-1.865-0.2-3.537-1.039-4.795-2.297s-2.098-2.93-2.297-4.795c0.683-0.186 1.295-0.549 1.781-1.035 0.723-0.722 1.172-1.724 1.172-2.828s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046v11.126c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-git-pull-request" viewBox="0 0 24 24"><path d="M20 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM13 7h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v6.126c-0.703 0.181-1.332 0.549-1.828 1.045-0.723 0.723-1.172 1.725-1.172 2.829s0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828c-0.497-0.497-1.125-0.864-1.828-1.045v-6.127c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5 9.874v11.126c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.126c0.703-0.181 1.332-0.549 1.828-1.045 0.723-0.723 1.172-1.725 1.172-2.829s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046z"></path></symbol><symbol id="icon-github" viewBox="0 0 24 24"><path d="M8.713 18.042c-1.268 0.38-2.060 0.335-2.583 0.17-0.231-0.073-0.431-0.176-0.614-0.302-0.411-0.284-0.727-0.675-1.119-1.172-0.356-0.451-0.85-1.107-1.551-1.476-0.185-0.098-0.386-0.177-0.604-0.232-0.536-0.134-1.079 0.192-1.213 0.728s0.192 1.079 0.728 1.213c0.074 0.023 0.155 0.060 0.155 0.060 0.252 0.133 0.487 0.404 0.914 0.946 0.366 0.464 0.856 1.098 1.553 1.579 0.332 0.229 0.711 0.426 1.149 0.564 1.015 0.321 2.236 0.296 3.76-0.162 0.529-0.159 0.829-0.716 0.67-1.245s-0.716-0.829-1.245-0.67zM17 22v-3.792c0.052-0.684-0.056-1.343-0.292-1.942 0.777-0.171 1.563-0.427 2.297-0.823 2.083-1.124 3.496-3.242 3.496-6.923 0-1.503-0.516-2.887-1.379-3.981 0.355-1.345 0.226-2.726-0.293-3.933-0.122-0.283-0.359-0.482-0.634-0.564-0.357-0.106-1.732-0.309-4.373 1.362-2.273-0.541-4.557-0.509-6.646-0.002-2.639-1.669-4.013-1.466-4.37-1.36-0.296 0.088-0.521 0.3-0.635 0.565-0.554 1.292-0.624 2.672-0.292 3.932-0.93 1.178-1.387 2.601-1.379 4.017 0 3.622 1.389 5.723 3.441 6.859 0.752 0.416 1.56 0.685 2.357 0.867-0.185 0.468-0.286 0.961-0.304 1.456-0.005 0.141-0.003 0.283 0.005 0.424l0.001 3.838c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.87c0-0.021-0.001-0.045-0.002-0.069-0.006-0.084-0.007-0.168-0.004-0.252 0.020-0.568 0.241-1.126 0.665-1.564 0.145-0.149 0.246-0.347 0.274-0.572 0.068-0.548-0.321-1.048-0.869-1.116-0.34-0.042-0.677-0.094-1.006-0.159-0.79-0.156-1.518-0.385-2.147-0.733-1.305-0.723-2.391-2.071-2.41-5.042 0.013-1.241 0.419-2.319 1.224-3.165 0.257-0.273 0.35-0.671 0.212-1.040-0.28-0.748-0.341-1.58-0.14-2.392 0.491 0.107 1.354 0.416 2.647 1.282 0.235 0.157 0.533 0.214 0.825 0.133 1.997-0.557 4.242-0.602 6.47 0.002 0.271 0.073 0.569 0.033 0.818-0.135 1.293-0.866 2.156-1.175 2.647-1.282 0.189 0.766 0.157 1.595-0.141 2.392-0.129 0.352-0.058 0.755 0.213 1.040 0.758 0.795 1.224 1.872 1.224 3.060 0 3.075-1.114 4.445-2.445 5.163-0.623 0.336-1.343 0.555-2.123 0.7-0.322 0.060-0.651 0.106-0.983 0.143-0.21 0.023-0.418 0.114-0.584 0.275-0.397 0.384-0.408 1.017-0.024 1.414 0.067 0.070 0.13 0.143 0.188 0.22 0.34 0.449 0.521 1.015 0.474 1.617 0 0.024-0.001 0.051-0.003 0.078v3.872c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-gitlab" viewBox="0 0 24 24"><path d="M23.238 15.199c0.261-0.17 0.493-0.446 0.635-0.764 0.172-0.385 0.214-0.831 0.075-1.305l-1.266-3.749-2.432-7.484c-0.068-0.229-0.195-0.443-0.397-0.637-0.266-0.242-0.603-0.367-0.941-0.372-0.351-0.005-0.707 0.119-0.976 0.365-0.165 0.147-0.296 0.334-0.378 0.547-0.006 0.015-0.012 0.033-0.018 0.052l-2.217 6.818h-6.647l-2.207-6.773c-0.068-0.229-0.195-0.443-0.397-0.637-0.265-0.242-0.602-0.367-0.94-0.372-0.351-0.006-0.707 0.118-0.976 0.365-0.166 0.146-0.296 0.334-0.379 0.546-0.006 0.016-0.012 0.034-0.018 0.052l-2.441 7.512-1.22 3.78c-0.106 0.329-0.117 0.676-0.038 1.004 0.098 0.407 0.336 0.783 0.702 1.052l10.65 7.74c0.346 0.248 0.818 0.26 1.176 0zM22.003 13.624l-10.003 7.27-9.983-7.255 1.205-3.662 1.886-5.805 1.891 5.808c0.137 0.42 0.525 0.687 0.951 0.69h8.1c0.442 0 0.817-0.287 0.951-0.691l1.886-5.804 1.892 5.824z"></path></symbol><symbol id="icon-globe" viewBox="0 0 24 24"><path d="M16.951 11c-0.214-2.69-1.102-5.353-2.674-7.71 1.57 0.409 2.973 1.232 4.087 2.346 1.408 1.408 2.351 3.278 2.581 5.364zM14.279 20.709c1.483-2.226 2.437-4.853 2.669-7.709h3.997c-0.23 2.086-1.173 3.956-2.581 5.364-1.113 1.113-2.516 1.936-4.085 2.345zM7.049 13c0.214 2.69 1.102 5.353 2.674 7.71-1.57-0.409-2.973-1.232-4.087-2.346-1.408-1.408-2.351-3.278-2.581-5.364zM9.721 3.291c-1.482 2.226-2.436 4.853-2.669 7.709h-3.997c0.23-2.086 1.173-3.956 2.581-5.364 1.114-1.113 2.516-1.936 4.085-2.345zM12.004 1c0 0 0 0 0 0-3.044 0.001-5.794 1.233-7.782 3.222-1.99 1.989-3.222 4.741-3.222 7.778s1.232 5.789 3.222 7.778c1.988 1.989 4.738 3.221 7.774 3.222 0 0 0 0 0 0 3.044-0.001 5.793-1.233 7.782-3.222 1.99-1.989 3.222-4.741 3.222-7.778s-1.232-5.789-3.222-7.778c-1.988-1.989-4.738-3.221-7.774-3.222zM14.946 13c-0.252 2.788-1.316 5.36-2.945 7.451-1.729-2.221-2.706-4.818-2.945-7.451zM11.999 3.549c1.729 2.221 2.706 4.818 2.945 7.451h-5.89c0.252-2.788 1.316-5.36 2.945-7.451z"></path></symbol><symbol id="icon-grid" viewBox="0 0 24 24"><path d="M3 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 4h5v5h-5zM14 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 4h5v5h-5zM14 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 15h5v5h-5zM3 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 15h5v5h-5z"></path></symbol><symbol id="icon-hard-drive" viewBox="0 0 24 24"><path d="M21 13v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5zM6.344 5.558c0.066-0.131 0.16-0.246 0.272-0.337 0.172-0.139 0.387-0.221 0.624-0.221h9.513c0.15 0.001 0.295 0.034 0.426 0.094 0.201 0.092 0.37 0.249 0.477 0.464l2.725 5.442h-16.762zM4.556 4.662l-3.441 6.872c-0.031 0.059-0.056 0.121-0.075 0.187-0.028 0.094-0.041 0.188-0.040 0.279v6c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.151-0.033-0.293-0.091-0.417-0.005-0.010-0.010-0.021-0.015-0.031l-0.009-0.018-3.441-6.872c-0.315-0.634-0.829-1.111-1.433-1.387-0.388-0.177-0.812-0.272-1.244-0.275h-9.527c-0.711 0-1.367 0.249-1.883 0.667-0.331 0.268-0.605 0.606-0.801 0.995zM6 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM10 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-hash" viewBox="0 0 24 24"><path d="M14.216 10l-0.444 4h-3.988l0.444-4zM15.006 2.89l-0.568 5.11h-3.988l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.884l-0.568 5.11h-4.438c-0.552 0-1 0.448-1 1s0.448 1 1 1h4.216l-0.444 4h-3.772c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.549l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.569-5.111h3.988l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.568-5.111h4.438c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.216l0.444-4h3.772c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.549l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.883z"></path></symbol><symbol id="icon-headphones" viewBox="0 0 24 24"><path d="M20 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v3zM4 19v-4h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM2 19c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071v6z"></path></symbol><symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path></symbol><symbol id="icon-help-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.033 9.332c0.183-0.521 0.559-0.918 1.022-1.14s1.007-0.267 1.528-0.083c0.458 0.161 0.819 0.47 1.050 0.859 0.183 0.307 0.284 0.665 0.286 1.037 0 0.155-0.039 0.309-0.117 0.464-0.080 0.16-0.203 0.325-0.368 0.49-0.709 0.709-1.831 1.092-1.831 1.092-0.524 0.175-0.807 0.741-0.632 1.265s0.741 0.807 1.265 0.632c0 0 1.544-0.506 2.613-1.575 0.279-0.279 0.545-0.614 0.743-1.010 0.2-0.4 0.328-0.858 0.328-1.369-0.004-0.731-0.204-1.437-0.567-2.049-0.463-0.778-1.19-1.402-2.105-1.724-1.042-0.366-2.135-0.275-3.057 0.167s-1.678 1.238-2.044 2.28c-0.184 0.521 0.090 1.092 0.611 1.275s1.092-0.091 1.275-0.611zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-hexagon" viewBox="0 0 24 24"><path d="M20 16c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5l-6.999 3.999c-0.112 0.064-0.232 0.105-0.355 0.124-0.218 0.034-0.445-0.003-0.654-0.124l-6.991-3.995c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.171-0.22-0.385-0.22-0.621v-7.993c0.001-0.128 0.025-0.253 0.070-0.369 0.080-0.206 0.225-0.384 0.426-0.5l6.999-3.999c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124l6.991 3.995c0.111 0.065 0.207 0.148 0.285 0.245 0.139 0.171 0.22 0.385 0.22 0.621zM22 16v-8c-0.001-0.71-0.248-1.363-0.664-1.878-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-7.001 4.001c-0.618 0.357-1.060 0.897-1.299 1.514-0.133 0.342-0.202 0.707-0.205 1.077v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.61 0.352 1.3 0.465 1.954 0.364 0.363-0.057 0.715-0.179 1.037-0.363l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084z"></path></symbol><symbol id="icon-home" viewBox="0 0 24 24"><path d="M2.386 8.211c-0.236 0.184-0.386 0.469-0.386 0.789v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c-0.001-0.3-0.134-0.593-0.386-0.789l-9-7c-0.358-0.275-0.861-0.285-1.228 0zM16 21v-9c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v9h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10.511l8-6.222 8 6.222v10.511c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM10 21v-8h4v8z"></path></symbol><symbol id="icon-image" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11 8.5c0-0.69-0.281-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.281-1.768 0.732-0.732 1.078-0.732 1.768 0.281 1.316 0.732 1.768 1.078 0.732 1.768 0.732 1.316-0.281 1.768-0.732 0.732-1.078 0.732-1.768zM9 8.5c0 0.138-0.055 0.262-0.146 0.354s-0.216 0.146-0.354 0.146-0.262-0.055-0.354-0.146-0.146-0.216-0.146-0.354 0.055-0.262 0.146-0.354 0.216-0.146 0.354-0.146 0.262 0.055 0.354 0.146 0.146 0.216 0.146 0.354zM7.414 20l8.586-8.586 4 4v3.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM20 12.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0l-10.644 10.644c-0.135-0.050-0.255-0.129-0.356-0.23-0.182-0.182-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-inbox" viewBox="0 0 24 24"><path d="M21 13v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5h4.465l1.703 2.555c0.182 0.27 0.486 0.445 0.832 0.445h4c0.326-0.002 0.64-0.158 0.832-0.445l1.703-2.555zM6.344 5.558c0.066-0.131 0.16-0.246 0.272-0.337 0.172-0.139 0.387-0.221 0.624-0.221h9.513c0.15 0.001 0.295 0.034 0.426 0.094 0.201 0.092 0.37 0.249 0.477 0.464l2.725 5.442h-4.381c-0.346 0-0.65 0.175-0.832 0.445l-1.703 2.555h-2.93l-1.703-2.555c-0.192-0.287-0.506-0.443-0.832-0.445h-4.381zM4.556 4.662l-3.441 6.872c-0.031 0.059-0.056 0.121-0.075 0.187-0.028 0.094-0.041 0.188-0.040 0.279v6c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.151-0.033-0.293-0.091-0.417-0.005-0.010-0.010-0.021-0.015-0.031l-0.009-0.018-3.441-6.872c-0.315-0.634-0.829-1.111-1.433-1.387-0.388-0.177-0.812-0.272-1.244-0.275h-9.527c-0.711 0-1.367 0.249-1.883 0.667-0.331 0.268-0.605 0.606-0.801 0.995z"></path></symbol><symbol id="icon-info" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM12 9c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-instagram" viewBox="0 0 24 24"><path d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-italic" viewBox="0 0 24 24"><path d="M13.557 5l-5.25 14h-3.307c-0.552 0-1 0.448-1 1s0.448 1 1 1h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.557l5.25-14h3.307c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-key" viewBox="0 0 24 24"><path d="M20.293 1.293l-2 2c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2-2c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM12.092 10.898c-1.262-1.244-2.908-1.869-4.553-1.873-1.652-0.003-3.308 0.62-4.578 1.873-1.277 1.26-1.923 2.921-1.935 4.583s0.614 3.332 1.874 4.609c1.34 1.323 3.009 1.946 4.671 1.935s3.323-0.657 4.583-1.935 1.884-2.947 1.873-4.609-0.657-3.323-1.935-4.583zM10.688 12.322c0.885 0.873 1.332 2.020 1.339 3.173s-0.424 2.306-1.297 3.191-2.020 1.332-3.173 1.339-2.306-0.424-3.191-1.297c-0.916-0.927-1.347-2.080-1.339-3.233s0.455-2.3 1.339-3.173c0.879-0.867 2.023-1.299 3.169-1.296 1.141 0.002 2.279 0.435 3.152 1.296zM12.097 12.317l4.11-4.11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.11 4.11c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM14.793 8.207l3 3c0.391 0.391 1.024 0.391 1.414 0l3.5-3.5c0.391-0.391 0.391-1.024 0-1.414l-3-3c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293-2.086 2.086-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM16.207 8.207l3.5-3.5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.5 3.5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-layers" viewBox="0 0 24 24"><path d="M12 3.118l7.764 3.882-7.764 3.882-7.764-3.882zM11.553 1.106l-10 5c-0.494 0.247-0.694 0.847-0.447 1.341 0.101 0.203 0.261 0.356 0.447 0.447l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342-0.101-0.202-0.262-0.355-0.447-0.447l-10-5c-0.292-0.146-0.62-0.136-0.894 0zM1.553 17.894l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342s-0.848-0.694-1.342-0.447l-9.552 4.777-9.553-4.776c-0.494-0.247-1.095-0.047-1.342 0.447s-0.047 1.095 0.447 1.342zM1.553 12.894l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342s-0.848-0.694-1.342-0.447l-9.552 4.777-9.553-4.776c-0.494-0.247-1.095-0.047-1.342 0.447s-0.047 1.095 0.447 1.342z"></path></symbol><symbol id="icon-layout" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM20 8h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM8 10v10h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9zM10 20v-10h10v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293z"></path></symbol><symbol id="icon-life-buoy" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.618 4.968l-2.86 2.86c0 0 0 0 0 0-0.791-0.523-1.739-0.828-2.758-0.828s-1.967 0.305-2.757 0.829l-2.86-2.86c1.539-1.233 3.492-1.969 5.617-1.969s4.078 0.736 5.618 1.968zM19.032 6.382c1.232 1.54 1.968 3.493 1.968 5.618s-0.736 4.078-1.968 5.618l-2.86-2.86c0.523-0.791 0.828-1.739 0.828-2.758s-0.305-1.967-0.829-2.757zM7.829 14.757l-2.86 2.86c-1.233-1.539-1.969-3.492-1.969-5.617s0.736-4.078 1.968-5.618l2.86 2.86c-0.523 0.791-0.828 1.739-0.828 2.758s0.305 1.967 0.829 2.757zM6.382 19.032l2.86-2.86c0.791 0.523 1.739 0.828 2.758 0.828s1.967-0.305 2.757-0.829l2.86 2.86c-1.539 1.233-3.492 1.969-5.617 1.969s-4.078-0.736-5.618-1.968z"></path></symbol><symbol id="icon-link" viewBox="0 0 24 24"><path d="M9.199 13.599c0.992 1.327 2.43 2.126 3.948 2.345s3.123-0.142 4.45-1.134c0.239-0.179 0.465-0.375 0.655-0.568l2.995-2.995c1.163-1.204 1.722-2.751 1.696-4.285s-0.639-3.061-1.831-4.211c-1.172-1.132-2.688-1.692-4.199-1.683-1.492 0.008-2.984 0.571-4.137 1.683l-1.731 1.721c-0.392 0.389-0.394 1.023-0.004 1.414s1.023 0.394 1.414 0.004l1.709-1.699c0.77-0.742 1.763-1.117 2.76-1.123 1.009-0.006 2.016 0.367 2.798 1.122 0.795 0.768 1.203 1.783 1.221 2.808s-0.355 2.054-1.11 2.836l-3.005 3.005c-0.114 0.116-0.263 0.247-0.428 0.37-0.885 0.662-1.952 0.902-2.967 0.756s-1.971-0.678-2.632-1.563c-0.331-0.442-0.957-0.533-1.4-0.202s-0.533 0.957-0.202 1.4zM14.801 10.401c-0.992-1.327-2.43-2.126-3.948-2.345s-3.124 0.142-4.451 1.134c-0.239 0.179-0.464 0.375-0.655 0.568l-2.995 2.995c-1.163 1.204-1.722 2.751-1.696 4.285s0.639 3.061 1.831 4.211c1.172 1.132 2.688 1.692 4.199 1.683 1.492-0.008 2.984-0.571 4.137-1.683l1.723-1.723c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.696 1.698c-0.77 0.742-1.763 1.117-2.76 1.123-1.009 0.006-2.016-0.367-2.798-1.122-0.795-0.768-1.203-1.783-1.221-2.808s0.355-2.054 1.11-2.836l3.005-3.005c0.114-0.116 0.263-0.247 0.428-0.37 0.885-0.662 1.952-0.902 2.967-0.756s1.971 0.678 2.632 1.563c0.331 0.442 0.957 0.533 1.4 0.202s0.533-0.957 0.202-1.4z"></path></symbol><symbol id="icon-link-2" viewBox="0 0 24 24"><path d="M15 8h3c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828-0.447 2.103-1.172 2.828-1.723 1.172-2.828 1.172h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243-0.673-3.158-1.757-4.243-2.586-1.757-4.243-1.757h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 16h-3c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828 0.447-2.103 1.172-2.828 1.723-1.172 2.828-1.172h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243 0.673 3.158 1.757 4.243 2.586 1.757 4.243 1.757h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-linkedin" viewBox="0 0 24 24"><path d="M16 7c-1.933 0-3.684 0.785-4.95 2.050s-2.050 3.017-2.050 4.95v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050zM16 9c1.381 0 2.63 0.559 3.536 1.464s1.464 2.155 1.464 3.536v6h-2v-6c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v6h-2v-6c0-1.381 0.559-2.63 1.464-3.536s2.155-1.464 3.536-1.464zM2 8c-0.552 0-1 0.448-1 1v12c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-12c0-0.552-0.448-1-1-1zM3 10h2v10h-2zM7 4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM5 4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-list" viewBox="0 0 24 24"><path d="M8 7h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8 13h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8 19h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM3 13c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM3 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-loader" viewBox="0 0 24 24"><path d="M11 2v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 18v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM4.223 5.637l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM15.533 16.947l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM2 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM18 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5.637 19.777l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM16.947 8.467l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-lock" viewBox="0 0 24 24"><path d="M5 12h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM18 10v-3c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243v3h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM8 10v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828v3z"></path></symbol><symbol id="icon-log-in" viewBox="0 0 24 24"><path d="M15 4h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h4c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM12.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383c0-0.13-0.025-0.261-0.076-0.383-0.049-0.118-0.121-0.228-0.217-0.324l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-log-out" viewBox="0 0 24 24"><path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-mail" viewBox="0 0 24 24"><path d="M3 7.921l8.427 5.899c0.34 0.235 0.795 0.246 1.147 0l8.426-5.899v10.079c0 0.272-0.11 0.521-0.295 0.705s-0.433 0.295-0.705 0.295h-16c-0.272 0-0.521-0.11-0.705-0.295s-0.295-0.433-0.295-0.705zM1 5.983c0 0.010 0 0.020 0 0.030v11.987c0 0.828 0.34 1.579 0.88 2.12s1.292 0.88 2.12 0.88h16c0.828 0 1.579-0.34 2.12-0.88s0.88-1.292 0.88-2.12v-11.988c0-0.010 0-0.020 0-0.030-0.005-0.821-0.343-1.565-0.88-2.102-0.541-0.54-1.292-0.88-2.12-0.88h-16c-0.828 0-1.579 0.34-2.12 0.88-0.537 0.537-0.875 1.281-0.88 2.103zM20.894 5.554l-8.894 6.225-8.894-6.225c0.048-0.096 0.112-0.183 0.188-0.259 0.185-0.185 0.434-0.295 0.706-0.295h16c0.272 0 0.521 0.11 0.705 0.295 0.076 0.076 0.14 0.164 0.188 0.259z"></path></symbol><symbol id="icon-map" viewBox="0 0 24 24"><path d="M7 3.723v13.697l-5 2.857v-13.697zM17 20.277v-13.697l5-2.857v13.696zM15.535 22.885c0.082 0.043 0.17 0.075 0.263 0.094 0.033 0.007 0.067 0.012 0.101 0.015s0.068 0.005 0.102 0.005c-0.001 0.001-0.001 0.001-0.001 0.001s0 0 0.001 0c0.173 0 0.344-0.046 0.496-0.132l0.015-0.009 6.985-3.991c0.32-0.183 0.501-0.518 0.503-0.868v-16c0-0.552-0.448-1-1-1-0.183 0-0.354 0.049-0.496 0.132l-6.535 3.734-7.503-3.752c-0.083-0.042-0.171-0.075-0.264-0.094-0.034-0.007-0.067-0.012-0.101-0.015s-0.068-0.005-0.102-0.005c0.001 0 0.001 0 0.001 0s0 0-0.001 0c-0.173 0-0.344 0.046-0.495 0.132l-0.015 0.008-6.985 3.992c-0.321 0.183-0.502 0.518-0.504 0.868v16c0 0.552 0.448 1 1 1 0.183 0 0.354-0.049 0.496-0.132l6.535-3.734zM15 6.618v13.764l-6-3v-13.764z"></path></symbol><symbol id="icon-map-pin" viewBox="0 0 24 24"><path d="M22 10c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071c0 0.569 0.053 1.128 0.15 1.676 0.274 1.548 0.899 3.004 1.682 4.32 2.732 4.591 7.613 7.836 7.613 7.836 0.331 0.217 0.765 0.229 1.109 0 0 0 4.882-3.245 7.613-7.836 0.783-1.316 1.408-2.772 1.682-4.32 0.098-0.548 0.151-1.107 0.151-1.676zM20 10c0 0.444-0.041 0.887-0.119 1.328-0.221 1.25-0.737 2.478-1.432 3.646-1.912 3.214-5.036 5.747-6.369 6.74-1.398-0.916-4.588-3.477-6.53-6.74-0.695-1.168-1.211-2.396-1.432-3.646-0.077-0.441-0.118-0.884-0.118-1.328 0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657zM16 10c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 10c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-maximize" viewBox="0 0 24 24"><path d="M8 2h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM22 8v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.552 0.448 1 1 1s1-0.448 1-1zM16 22h3c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM2 16v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-maximize-2" viewBox="0 0 24 24"><path d="M18.586 4l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5.414 20l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-meh" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 16h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-menu" viewBox="0 0 24 24"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-message-circle" viewBox="0 0 24 24"><path d="M22 11.497v-0.497c0-0.017-0.001-0.038-0.002-0.058-0.136-2.338-1.113-4.461-2.642-6.051-1.602-1.667-3.814-2.752-6.301-2.889-0.016-0.001-0.036-0.002-0.055-0.002h-0.489c-1.405-0.016-2.882 0.31-4.264 1.008-1.223 0.621-2.291 1.488-3.139 2.535-1.322 1.634-2.107 3.705-2.108 5.946-0.014 1.275 0.253 2.61 0.824 3.877l-1.772 5.317c-0.066 0.196-0.072 0.418 0 0.632 0.175 0.524 0.741 0.807 1.265 0.632l5.314-1.771c1.16 0.527 2.484 0.826 3.876 0.823 1.372-0.009 2.714-0.308 3.941-0.866 1.912-0.871 3.54-2.373 4.541-4.375 0.644-1.249 1.015-2.715 1.011-4.261zM20 11.503c0.003 1.225-0.292 2.375-0.789 3.339-0.801 1.602-2.082 2.785-3.592 3.472-0.97 0.442-2.035 0.679-3.126 0.686-1.221 0.003-2.371-0.292-3.335-0.789-0.249-0.129-0.528-0.142-0.775-0.060l-3.803 1.268 1.268-3.803c0.088-0.263 0.060-0.537-0.056-0.767-0.552-1.094-0.804-2.254-0.792-3.338 0.001-1.789 0.619-3.42 1.663-4.709 0.671-0.829 1.518-1.517 2.49-2.010 1.092-0.552 2.252-0.804 3.336-0.792h0.456c1.962 0.107 3.704 0.961 4.969 2.277 1.202 1.251 1.972 2.916 2.086 4.753z"></path></symbol><symbol id="icon-message-square" viewBox="0 0 24 24"><path d="M22 15v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-14c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l3.707-3.707h11.586c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM20 15c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.526 0.112-0.707 0.293l-2.293 2.293v-13.586c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-mic" viewBox="0 0 24 24"><path d="M12 2c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414v8c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-8c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586zM12 0c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828v8c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-8c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172zM8 24h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2.062c1.809-0.226 3.432-1.056 4.657-2.281 1.446-1.447 2.343-3.448 2.343-5.657v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 1.657-0.67 3.156-1.757 4.243s-2.586 1.757-4.243 1.757-3.156-0.67-4.243-1.757-1.757-2.586-1.757-4.243v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 2.209 0.897 4.21 2.343 5.657 1.225 1.225 2.847 2.055 4.657 2.281v2.062h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-mic-off" viewBox="0 0 24 24"><path d="M12.516 13.93c-0.164 0.044-0.336 0.067-0.514 0.067-0.555-0.001-1.053-0.223-1.415-0.585-0.363-0.362-0.587-0.86-0.587-1.412v-0.586zM16 9.34v-5.34c0.001-1.103-0.447-2.105-1.169-2.829s-1.723-1.173-2.827-1.174c-1.014-0.001-1.943 0.377-2.649 1.002-0.636 0.563-1.092 1.327-1.274 2.197-0.113 0.541 0.234 1.070 0.775 1.183s1.070-0.234 1.183-0.775c0.092-0.44 0.322-0.825 0.641-1.108 0.35-0.31 0.806-0.497 1.308-0.499 0.571 0.003 1.066 0.226 1.427 0.587 0.363 0.364 0.586 0.862 0.585 1.416v5.34c0 0.552 0.448 1 1 1s1-0.448 1-1zM18 10v2c0 0.376-0.035 0.74-0.093 1.045-0.102 0.543 0.255 1.066 0.798 1.168s1.066-0.255 1.168-0.798c0.082-0.434 0.127-0.922 0.127-1.415v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM8 24h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2.024c1.446-0.189 2.791-0.732 3.934-1.627l5.359 5.359c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.838-5.838c-0.045-0.079-0.101-0.153-0.169-0.219-0.063-0.062-0.132-0.113-0.205-0.155l-15.788-15.789c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7.707 7.707v2.586c0.001 1.105 0.451 2.106 1.174 2.828s1.725 1.17 2.829 1.169c0.739-0.001 1.433-0.202 2.027-0.553l1.477 1.477c-0.959 0.693-2.078 1.068-3.212 1.123-0.094-0.029-0.193-0.044-0.295-0.044-0.103 0-0.201 0.015-0.295 0.044-1.417-0.069-2.812-0.637-3.905-1.707-1.153-1.129-1.753-2.608-1.798-4.106-0.002-0.112-0.002-0.224-0.002-0.224v-2.007c0-0.552-0.448-1-1-1s-1 0.448-1 1v1.993c0 0.149 0.003 0.298 0.003 0.298 0.060 1.994 0.861 3.969 2.398 5.475 1.299 1.273 2.924 2.013 4.599 2.223v2.011h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minimize" viewBox="0 0 24 24"><path d="M7 3v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21 7h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17 21v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.552 0.448 1 1 1s1-0.448 1-1zM3 17h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minimize-2" viewBox="0 0 24 24"><path d="M16.414 9l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.136 0.027 0.265 0.076 0.383s0.121 0.228 0.216 0.323c0.001 0.001 0.001 0.001 0.002 0.002 0.092 0.092 0.202 0.166 0.323 0.216 0.118 0.049 0.247 0.076 0.383 0.076h6c0.552 0 1-0.448 1-1s-0.448-1-1-1zM3.707 21.707l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.096-0.095-0.206-0.167-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-minus" viewBox="0 0 24 24"><path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minus-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minus-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-monitor" viewBox="0 0 24 24"><path d="M12 16h-8c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM11 18v2h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2h7c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879z"></path></symbol><symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21.996 12.882c0.022-0.233-0.038-0.476-0.188-0.681-0.325-0.446-0.951-0.544-1.397-0.219-0.95 0.693-2.060 1.086-3.188 1.162-1.368 0.092-2.765-0.283-3.95-1.158-1.333-0.985-2.139-2.415-2.367-3.935s0.124-3.124 1.109-4.456c0.142-0.191 0.216-0.435 0.191-0.691-0.053-0.55-0.542-0.952-1.092-0.898-2.258 0.22-4.314 1.18-5.895 2.651-1.736 1.615-2.902 3.847-3.137 6.386-0.254 2.749 0.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-0.631 7.311-2.266 3.313-4.022 3.567-6.772zM19.567 14.674c-0.49 1.363-1.335 2.543-2.416 3.441-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848c0.187-2.032 1.117-3.814 2.507-5.106 0.782-0.728 1.71-1.3 2.731-1.672-0.456 1.264-0.577 2.606-0.384 3.899 0.303 2.023 1.38 3.934 3.156 5.247 1.578 1.167 3.448 1.668 5.272 1.545 0.752-0.050 1.496-0.207 2.21-0.465z"></path></symbol><symbol id="icon-more-horizontal" viewBox="0 0 24 24"><path d="M14 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM21 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-more-vertical" viewBox="0 0 24 24"><path d="M14 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM14 5c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM14 19c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-mouse-pointer" viewBox="0 0 24 24"><path d="M4.857 4.857l12.284 5.118-4.883 1.658c-0.285 0.098-0.522 0.32-0.625 0.625l-1.658 4.883zM13.010 14.424l5.283 5.283c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.283-5.283 5.868-1.993c0.523-0.178 0.803-0.746 0.625-1.268-0.096-0.283-0.306-0.494-0.562-0.601l-16.97-7.070c-0.51-0.212-1.095 0.029-1.308 0.539-0.107 0.256-0.099 0.532 0 0.769l7.070 16.97c0.212 0.51 0.798 0.751 1.308 0.539 0.275-0.115 0.472-0.338 0.562-0.601z"></path></symbol><symbol id="icon-move" viewBox="0 0 24 24"><path d="M11 4.414v6.586h-6.586l1.293-1.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3 3c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.136 0.027 0.265 0.076 0.383s0.121 0.228 0.217 0.324l3 3c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.293-1.293h6.586v6.586l-1.293-1.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076c0.13 0 0.261-0.025 0.383-0.076 0.118-0.049 0.228-0.121 0.324-0.217l3-3c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.293 1.293v-6.586h6.586l-1.293 1.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3-3c0.096-0.096 0.168-0.206 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-3-3c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l1.293 1.293h-6.586v-6.586l1.293 1.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3-3c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-3 3c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-music" viewBox="0 0 24 24"><path d="M8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM22 16v-13c0-0.050-0.004-0.107-0.014-0.164-0.091-0.545-0.606-0.913-1.151-0.822l-12 2c-0.476 0.081-0.835 0.492-0.835 0.986v9.535c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-12.153l10-1.667v8.355c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM20 16c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-navigation" viewBox="0 0 24 24"><path d="M2.572 10.096c-0.262 0.125-0.467 0.36-0.542 0.661-0.134 0.536 0.192 1.079 0.728 1.213l7.418 1.854 1.854 7.418c0.071 0.281 0.261 0.528 0.542 0.661 0.499 0.236 1.095 0.023 1.332-0.476l9-19c0.124-0.263 0.133-0.575 0-0.856-0.236-0.499-0.833-0.712-1.332-0.476zM5.953 10.708l13.945-6.606-6.606 13.945-1.322-5.29c-0.092-0.369-0.378-0.638-0.728-0.728z"></path></symbol><symbol id="icon-navigation-2" viewBox="0 0 24 24"><path d="M12.938 1.654c-0.099-0.266-0.307-0.488-0.593-0.593-0.518-0.191-1.093 0.074-1.284 0.593l-7 19c-0.098 0.269-0.082 0.576 0.070 0.842 0.274 0.48 0.885 0.646 1.364 0.372l6.505-3.716 6.504 3.716c0.249 0.141 0.554 0.176 0.842 0.070 0.518-0.191 0.784-0.766 0.593-1.284zM12 4.893l5.113 13.877-4.617-2.638c-0.317-0.181-0.691-0.17-0.992 0l-4.617 2.638z"></path></symbol><symbol id="icon-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452z"></path></symbol><symbol id="icon-package" viewBox="0 0 24 24"><path d="M14.507 9.405l-2.507 1.45-6.961-4.027 2.511-1.435zM18.961 6.828l-2.456 1.421-6.944-4.005 1.934-1.105c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-3.199 1.828c-0.21 0.041-0.406 0.15-0.553 0.316l-3.249 1.857c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-6.495-3.711c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622v-7.462zM13 20.578v-7.991l7-4.049v7.462c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5z"></path></symbol><symbol id="icon-paperclip" viewBox="0 0 24 24"><path d="M20.733 10.343l-9.19 9.19c-0.977 0.977-2.256 1.465-3.538 1.465s-2.561-0.488-3.538-1.465-1.465-2.256-1.465-3.538 0.488-2.561 1.465-3.538l9.19-9.19c0.586-0.586 1.353-0.879 2.123-0.879s1.536 0.293 2.123 0.879 0.879 1.353 0.879 2.123-0.293 1.536-0.879 2.123l-9.2 9.19c-0.196 0.196-0.451 0.294-0.708 0.294s-0.512-0.098-0.708-0.293-0.293-0.45-0.293-0.708 0.098-0.512 0.293-0.708l8.49-8.48c0.391-0.39 0.391-1.023 0.001-1.414s-1.023-0.391-1.414-0.001l-8.49 8.48c-0.586 0.586-0.879 1.356-0.879 2.122s0.293 1.536 0.879 2.122 1.356 0.879 2.122 0.879 1.536-0.293 2.122-0.879l9.2-9.19c0.977-0.977 1.465-2.258 1.465-3.537s-0.489-2.561-1.465-3.537-2.258-1.465-3.537-1.465-2.561 0.489-3.537 1.465l-9.19 9.19c-1.367 1.367-2.051 3.161-2.051 4.952s0.684 3.585 2.051 4.952 3.161 2.051 4.952 2.051 3.585-0.684 4.952-2.051l9.19-9.19c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-pause" viewBox="0 0 24 24"><path d="M6 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM7 5h2v14h-2zM14 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM15 5h2v14h-2z"></path></symbol><symbol id="icon-pause-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 15v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1zM15 15v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-pen-tool" viewBox="0 0 24 24"><path d="M18.707 13.707l0.293-0.293 1.586 1.586-5.586 5.586-1.586-1.586 0.293-0.293zM2.252 1.032c-0.035-0.009-0.070-0.016-0.106-0.021-0.143-0.022-0.284-0.011-0.417 0.026-0.132 0.037-0.259 0.102-0.37 0.195-0.092 0.077-0.171 0.171-0.231 0.279-0.060 0.106-0.099 0.22-0.116 0.337-0.020 0.128-0.015 0.255 0.012 0.371 0.001 0.005 0.003 0.011 0.004 0.016l0.004 0.017 3.496 14.483c0.094 0.388 0.403 0.669 0.776 0.746l5.765 1.153c-0.141 0.359-0.067 0.783 0.224 1.073l3 3c0.391 0.391 1.024 0.391 1.414 0l7-7c0.391-0.391 0.391-1.024 0-1.414l-3-3c-0.29-0.29-0.714-0.365-1.073-0.224l-1.153-5.765c-0.078-0.392-0.376-0.684-0.746-0.776zM14 11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879c-0.463 0-0.902 0.105-1.293 0.293l-4.487-4.487 10.425 2.516 1.27 6.349-4.243 4.243-6.349-1.27-2.517-10.424 4.487 4.487c-0.188 0.391-0.293 0.83-0.293 1.293 0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM12 11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707c0-0.27 0.106-0.514 0.281-0.695 0.004-0.004 0.008-0.008 0.013-0.012s0.008-0.008 0.012-0.013c0.18-0.174 0.424-0.28 0.694-0.28 0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-percent" viewBox="0 0 24 24"><path d="M18.293 4.293l-14 14c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l14-14c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM10 6.5c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475 0.393 1.843 1.025 2.475 1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM8 6.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM21 17.5c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475 0.393 1.843 1.025 2.475 1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM19 17.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061z"></path></symbol><symbol id="icon-phone" viewBox="0 0 24 24"><path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-call" viewBox="0 0 24 24"><path d="M14.859 5.981c0.943 0.184 1.74 0.683 2.31 1.374 0.42 0.51 0.716 1.124 0.852 1.793 0.109 0.541 0.637 0.891 1.178 0.782s0.891-0.637 0.782-1.178c-0.2-0.992-0.64-1.907-1.269-2.669-0.854-1.036-2.057-1.789-3.47-2.064-0.542-0.106-1.067 0.248-1.173 0.79s0.248 1.067 0.79 1.173zM14.94 1.994c2 0.222 3.743 1.162 5.005 2.544 1.118 1.224 1.858 2.794 2.062 4.519 0.065 0.548 0.562 0.941 1.11 0.876s0.941-0.562 0.876-1.11c-0.253-2.147-1.176-4.106-2.571-5.634-1.578-1.728-3.762-2.906-6.261-3.183-0.549-0.061-1.043 0.335-1.104 0.883s0.335 1.043 0.883 1.104zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-forwarded" viewBox="0 0 24 24"><path d="M15 6h5.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-5.586c-0.552 0-1 0.448-1 1s0.448 1 1 1zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-incoming" viewBox="0 0 24 24"><path d="M22.293 0.293l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.256 0.098 0.512 0.293 0.707 0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-missed" viewBox="0 0 24 24"><path d="M16.293 1.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-off" viewBox="0 0 24 24"><path d="M6.029 12.266c-1.682-2.593-2.64-5.44-2.914-8.185-0.024-0.266 0.064-0.523 0.229-0.721s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l1.279-1.279c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.715-0.456-1.346-0.963-1.805-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.201c0.306 3.062 1.371 6.214 3.226 9.075 0.3 0.463 0.92 0.595 1.383 0.295s0.595-0.92 0.295-1.383zM9.285 16.13l1.421-1.421c0.929 0.828 1.918 1.531 2.899 2.075 0.397 0.221 0.88 0.142 1.193-0.167l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.24 0.034 0.458 0.164 0.612 0.352 0.146 0.178 0.231 0.405 0.229 0.649v3.006c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-0.907-0.576-1.737-1.21-2.457-1.856zM22.293 0.293l-12.231 12.23c-0.031 0.024-0.061 0.051-0.089 0.079-0.029 0.029-0.055 0.059-0.080 0.090l-9.6 9.6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l6.162-6.162c0.823 0.748 1.764 1.47 2.77 2.109 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121v-2.994c0.004-0.723-0.249-1.4-0.682-1.929-0.46-0.561-1.125-0.958-1.917-1.070-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-0.609-0.387-1.221-0.844-1.81-1.361l11.584-11.583c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-phone-outgoing" viewBox="0 0 24 24"><path d="M16.707 8.707l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-pie-chart" viewBox="0 0 24 24"><path d="M20.289 15.501c-0.968 2.289-2.771 3.968-4.906 4.835s-4.599 0.917-6.888-0.051-3.968-2.771-4.835-4.906-0.918-4.6 0.050-6.889c0.936-2.214 2.652-3.856 4.689-4.743 0.506-0.221 0.738-0.81 0.518-1.316s-0.81-0.738-1.316-0.518c-2.489 1.084-4.589 3.094-5.733 5.798-1.183 2.798-1.119 5.812-0.062 8.419s3.112 4.814 5.909 5.997 5.812 1.119 8.419 0.062 4.814-3.112 5.997-5.909c0.215-0.509-0.023-1.095-0.532-1.311s-1.095 0.023-1.311 0.532zM20.945 11h-7.945v-7.945c2.086 0.23 3.956 1.173 5.364 2.581s2.351 3.278 2.581 5.364zM23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1z"></path></symbol><symbol id="icon-play" viewBox="0 0 24 24"><path d="M5.541 2.159c-0.153-0.1-0.34-0.159-0.541-0.159-0.552 0-1 0.448-1 1v18c-0.001 0.182 0.050 0.372 0.159 0.541 0.299 0.465 0.917 0.599 1.382 0.3l14-9c0.114-0.072 0.219-0.174 0.3-0.3 0.299-0.465 0.164-1.083-0.3-1.382zM6 4.832l11.151 7.168-11.151 7.168z"></path></symbol><symbol id="icon-play-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.555 7.168c-0.156-0.105-0.348-0.168-0.555-0.168-0.552 0-1 0.448-1 1v8c-0.001 0.188 0.053 0.383 0.168 0.555 0.306 0.46 0.927 0.584 1.387 0.277l6-4c0.103-0.068 0.2-0.162 0.277-0.277 0.306-0.46 0.182-1.080-0.277-1.387zM11 9.869l3.197 2.131-3.197 2.131z"></path></symbol><symbol id="icon-plus" viewBox="0 0 24 24"><path d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-plus-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-plus-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 13h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-pocket" viewBox="0 0 24 24"><path d="M4 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v6c0 3.037 1.232 5.789 3.222 7.778s4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778v-6c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 4h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v6c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364v-6c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM7.293 10.707l4 4c0.391 0.391 1.024 0.391 1.414 0l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-power" viewBox="0 0 24 24"><path d="M17.653 7.347c1.562 1.563 2.343 3.608 2.342 5.657s-0.782 4.094-2.344 5.656c-1.562 1.561-3.606 2.342-5.654 2.342-2.052 0-4.098-0.782-5.659-2.344s-2.342-3.608-2.342-5.656 0.781-4.094 2.342-5.656c0.39-0.391 0.39-1.024 0-1.414s-1.024-0.39-1.414 0c-1.952 1.952-2.928 4.513-2.928 7.070s0.976 5.118 2.928 7.070c1.952 1.953 4.513 2.93 7.071 2.93s5.119-0.976 7.072-2.928c1.953-1.952 2.93-4.513 2.93-7.070-0.001-2.561-0.977-5.12-2.928-7.072-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM11 2v10c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-printer" viewBox="0 0 24 24"><path d="M17 8h-10v-5h10zM5 19v3c0 0.552 0.448 1 1 1h12c0.552 0 1-0.448 1-1v-3h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-5c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-1v-6c0-0.552-0.448-1-1-1h-12c-0.552 0-1 0.448-1 1v6h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v5c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879zM6 13c-0.552 0-1 0.448-1 1v3h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1v-3c0-0.552-0.448-1-1-1zM7 15h10v6h-10z"></path></symbol><symbol id="icon-radio" viewBox="0 0 24 24"><path d="M15 12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM13 12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707zM15.533 8.468c0.977 0.976 1.466 2.254 1.466 3.535s-0.487 2.559-1.462 3.536c-0.39 0.391-0.39 1.024 0.001 1.414s1.024 0.39 1.414-0.001c1.366-1.367 2.048-3.161 2.047-4.951s-0.686-3.583-2.053-4.949c-0.391-0.39-1.024-0.39-1.414 0.001s-0.39 1.024 0.001 1.414zM8.467 15.532c-0.977-0.975-1.466-2.253-1.467-3.534s0.487-2.559 1.462-3.536c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001c-1.365 1.366-2.048 3.16-2.047 4.95s0.686 3.583 2.053 4.949c0.391 0.39 1.024 0.39 1.414-0.001s0.39-1.024-0.001-1.414zM18.363 5.637c1.757 1.758 2.635 4.059 2.635 6.364 0 2.304-0.878 4.605-2.635 6.362-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c2.147-2.147 3.22-4.963 3.221-7.776 0-2.815-1.074-5.631-3.221-7.778-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM5.637 18.363c-1.757-1.758-2.635-4.059-2.635-6.364 0-2.304 0.878-4.605 2.635-6.362 0.39-0.391 0.39-1.024 0-1.414s-1.024-0.39-1.414 0c-2.147 2.147-3.22 4.963-3.221 7.776s1.074 5.63 3.221 7.778c0.39 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-refresh-ccw" viewBox="0 0 24 24"><path d="M21.433 8.666c-0.921-2.603-2.812-4.587-5.12-5.689s-5.040-1.323-7.643-0.402c-1.472 0.521-2.752 1.354-3.744 2.364l-2.926 2.75v-3.689c0-0.552-0.448-1-1-1s-1 0.448-1 1v5.998c0 0.015 0 0.030 0.001 0.044 0.005 0.115 0.029 0.225 0.069 0.326 0.040 0.102 0.098 0.198 0.173 0.285 0.012 0.013 0.024 0.027 0.036 0.039 0.091 0.095 0.201 0.172 0.324 0.225 0.119 0.051 0.249 0.080 0.386 0.082 0.004 0 0.007 0 0.011 0h6c0.552 0 1-0.448 1-1s-0.448-0.999-1-0.999h-3.476l2.83-2.659c0.777-0.792 1.797-1.46 2.983-1.88 2.083-0.737 4.265-0.561 6.114 0.322s3.359 2.468 4.096 4.551c0.184 0.521 0.756 0.793 1.276 0.609s0.793-0.756 0.609-1.276zM20.475 15l-2.8 2.631c-1.584 1.585-3.63 2.366-5.679 2.366s-4.095-0.78-5.657-2.342c-0.89-0.89-1.523-1.931-1.883-2.981-0.18-0.522-0.748-0.8-1.271-0.621s-0.8 0.748-0.621 1.271c0.46 1.339 1.257 2.642 2.361 3.745 1.953 1.952 4.514 2.928 7.072 2.927s5.118-0.978 7.048-2.909l2.955-2.775v3.688c0 0.552 0.448 1 1 1s1-0.448 1-1v-5.998c0-0.015 0-0.030-0.001-0.044-0.005-0.115-0.029-0.225-0.069-0.326-0.040-0.102-0.098-0.198-0.173-0.285-0.012-0.013-0.024-0.027-0.036-0.039-0.091-0.095-0.201-0.172-0.324-0.225-0.119-0.051-0.249-0.080-0.386-0.082-0.004 0-0.007 0-0.011 0h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-refresh-cw" viewBox="0 0 24 24"><path d="M4.453 9.334c0.737-2.083 2.247-3.669 4.096-4.552s4.032-1.059 6.114-0.322c1.186 0.42 2.206 1.088 2.983 1.88l2.83 2.66h-3.476c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.997c0.005 0 0.009 0 0.014 0 0.137-0.001 0.268-0.031 0.386-0.082 0.119-0.051 0.229-0.126 0.324-0.225 0.012-0.013 0.024-0.026 0.036-0.039 0.075-0.087 0.133-0.183 0.173-0.285s0.064-0.211 0.069-0.326c0.001-0.015 0.001-0.029 0.001-0.043v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.689l-2.926-2.749c-0.992-1.010-2.271-1.843-3.743-2.364-2.603-0.921-5.335-0.699-7.643 0.402s-4.199 3.086-5.12 5.689c-0.185 0.52 0.088 1.091 0.608 1.276s1.092-0.088 1.276-0.609zM2 16.312l2.955 2.777c1.929 1.931 4.49 2.908 7.048 2.909s5.119-0.975 7.072-2.927c1.104-1.104 1.901-2.407 2.361-3.745 0.18-0.522-0.098-1.091-0.621-1.271s-1.091 0.098-1.271 0.621c-0.361 1.050-0.993 2.091-1.883 2.981-1.563 1.562-3.609 2.342-5.657 2.342s-4.094-0.782-5.679-2.366l-2.8-2.633h3.475c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5.997c-0.005 0-0.009 0-0.014 0-0.137 0.001-0.268 0.031-0.386 0.082-0.119 0.051-0.229 0.126-0.324 0.225-0.012 0.013-0.024 0.026-0.036 0.039-0.075 0.087-0.133 0.183-0.173 0.285s-0.064 0.211-0.069 0.326c-0.001 0.015-0.001 0.029-0.001 0.043v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-repeat" viewBox="0 0 24 24"><path d="M4 11v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h11.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383c0-0.13-0.025-0.261-0.076-0.383-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-11.586c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM20 13v2c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-11.586l2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4 4c-0.092 0.092-0.166 0.202-0.217 0.324s-0.076 0.253-0.076 0.383c0 0.256 0.098 0.512 0.293 0.707l4 4c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293h11.586c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-rewind" viewBox="0 0 24 24"><path d="M10 16.955l-6.371-4.955 6.371-4.955zM21.386 19.789c0.168 0.132 0.382 0.211 0.614 0.211 0.552 0 1-0.448 1-1v-14c0.001-0.213-0.068-0.43-0.211-0.614-0.339-0.436-0.967-0.514-1.403-0.175l-9 7c-0.061 0.046-0.122 0.106-0.175 0.175-0.14 0.18-0.209 0.392-0.211 0.604v-6.99c0.001-0.213-0.068-0.43-0.211-0.614-0.339-0.436-0.967-0.514-1.403-0.175l-9 7c-0.061 0.046-0.122 0.106-0.175 0.175-0.339 0.436-0.261 1.064 0.175 1.403l9 7c0.168 0.132 0.382 0.211 0.614 0.211 0.552 0 1-0.448 1-1v-6.991c0.003 0.295 0.135 0.585 0.386 0.78zM21 16.955l-6.371-4.955 6.371-4.955z"></path></symbol><symbol id="icon-rotate-ccw" viewBox="0 0 24 24"><path d="M2.567 15.332c0.918 2.604 2.805 4.591 5.112 5.696s5.038 1.33 7.643 0.413 4.591-2.805 5.696-5.112 1.33-5.038 0.413-7.643-2.805-4.591-5.112-5.696-5.038-1.33-7.643-0.413c-1.474 0.52-2.755 1.352-3.749 2.362l-2.927 2.75v-3.689c0-0.552-0.448-1-1-1s-1 0.448-1 1v5.998c0 0.015 0 0.030 0.001 0.044 0.005 0.115 0.029 0.225 0.069 0.326 0.040 0.102 0.098 0.198 0.173 0.285 0.012 0.013 0.024 0.027 0.036 0.039 0.091 0.095 0.201 0.172 0.324 0.225 0.119 0.051 0.249 0.080 0.386 0.082 0.004 0 0.007 0 0.011 0h6c0.552 0 1-0.448 1-1s-0.448-0.999-1-0.999h-3.476l2.829-2.659c0.779-0.792 1.8-1.459 2.987-1.877 2.084-0.734 4.266-0.555 6.114 0.33s3.356 2.473 4.090 4.557 0.555 4.266-0.33 6.114-2.473 3.356-4.557 4.090-4.266 0.555-6.114-0.33-3.356-2.473-4.090-4.557c-0.184-0.521-0.755-0.794-1.275-0.611s-0.794 0.755-0.611 1.275z"></path></symbol><symbol id="icon-rotate-cw" viewBox="0 0 24 24"><path d="M19.547 14.667c-0.736 2.083-2.245 3.67-4.094 4.553s-4.031 1.061-6.114 0.325-3.67-2.245-4.553-4.094-1.061-4.031-0.325-6.114 2.245-3.67 4.094-4.553 4.031-1.061 6.114-0.325c1.188 0.42 2.209 1.088 2.987 1.882l2.824 2.659h-3.48c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.997c0.004 0 0.009 0 0.013 0 0.137-0.001 0.267-0.030 0.386-0.082 0.119-0.051 0.229-0.126 0.324-0.225 0.012-0.012 0.023-0.025 0.034-0.038 0.076-0.087 0.134-0.184 0.175-0.287s0.065-0.213 0.069-0.328c0.002-0.014 0.002-0.028 0.002-0.042v-5.998c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.685l-2.916-2.745c-0.993-1.012-2.274-1.846-3.748-2.366-2.604-0.921-5.336-0.698-7.644 0.405s-4.197 3.088-5.117 5.692-0.696 5.335 0.406 7.643 3.088 4.197 5.692 5.117 5.335 0.697 7.643-0.406 4.197-3.088 5.117-5.692c0.184-0.521-0.089-1.092-0.61-1.276s-1.092 0.089-1.276 0.61z"></path></symbol><symbol id="icon-rss" viewBox="0 0 24 24"><path d="M4 12c2.209 0 4.208 0.894 5.657 2.343s2.343 3.448 2.343 5.657c0 0.552 0.448 1 1 1s1-0.448 1-1c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4 5c4.142 0 7.891 1.678 10.607 4.393s4.393 6.465 4.393 10.607c0 0.552 0.448 1 1 1s1-0.448 1-1c0-4.694-1.904-8.946-4.979-12.021s-7.327-4.979-12.021-4.979c-0.552 0-1 0.448-1 1s0.448 1 1 1zM7 19c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-save" viewBox="0 0 24 24"><path d="M19 22c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.256-0.098-0.512-0.293-0.707l-5-5c-0.181-0.181-0.431-0.293-0.707-0.293h-11c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879zM8 20v-6h8v6zM6 4v4c0 0.552 0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7v-3h7.586l4.414 4.414v10.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1v-7c0-0.552-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v7h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-scissors" viewBox="0 0 24 24"><path d="M7.378 16.551c0.011 0.012 0.023 0.025 0.035 0.036s0.024 0.023 0.036 0.035c0.343 0.359 0.551 0.843 0.551 1.378 0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586c0.535 0 1.019 0.208 1.378 0.551zM13.764 15.188l5.53 5.52c0.391 0.39 1.024 0.39 1.414-0.001s0.39-1.024-0.001-1.414l-5.53-5.52c-0.391-0.39-1.024-0.39-1.414 0.001s-0.39 1.024 0.001 1.414zM7.449 7.378c-0.012 0.011-0.024 0.023-0.036 0.035s-0.024 0.024-0.035 0.036c-0.359 0.343-0.843 0.551-1.378 0.551-0.553 0-1.051-0.223-1.414-0.586s-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414c0 0.535-0.208 1.019-0.551 1.378zM8.032 9.446l2.554 2.554-2.554 2.554c-0.596-0.352-1.291-0.554-2.032-0.554-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828c0-0.741-0.202-1.436-0.554-2.032l11.261-11.261c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7.293 7.293-2.554-2.554c0.352-0.596 0.554-1.291 0.554-2.032 0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172c0.741 0 1.436-0.202 2.032-0.554z"></path></symbol><symbol id="icon-search" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-send" viewBox="0 0 24 24"><path d="M22.963 2.269c0.043-0.151 0.050-0.314 0.015-0.476-0.024-0.113-0.068-0.224-0.131-0.325-0.064-0.102-0.145-0.19-0.238-0.262-0.117-0.090-0.249-0.15-0.386-0.181s-0.282-0.034-0.426-0.004c-0.042 0.009-0.085 0.021-0.126 0.035l-0.021 0.007-19.98 6.993c-0.252 0.088-0.467 0.276-0.584 0.538-0.224 0.505 0.003 1.096 0.508 1.32l8.649 3.844 3.844 8.649c0.108 0.243 0.313 0.443 0.583 0.538 0.521 0.182 1.092-0.092 1.274-0.614l6.993-19.979c0.010-0.027 0.019-0.054 0.027-0.082zM10.779 11.807l-6.068-2.696 13.483-4.72zM19.609 5.806l-4.72 13.483-2.696-6.068z"></path></symbol><symbol id="icon-server" viewBox="0 0 24 24"><path d="M4 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 3h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM4 13c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 15h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM6 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM6 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-settings" viewBox="0 0 24 24"><path d="M16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM20.315 15.404c0.046-0.105 0.112-0.191 0.192-0.257 0.112-0.092 0.251-0.146 0.403-0.147h0.090c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121-0.337-1.58-0.879-2.121-1.293-0.879-2.121-0.879h-0.159c-0.11-0.001-0.215-0.028-0.308-0.076-0.127-0.066-0.23-0.172-0.292-0.312-0.003-0.029-0.004-0.059-0.004-0.089-0.024-0.055-0.040-0.111-0.049-0.168 0.020-0.334 0.077-0.454 0.168-0.547l0.062-0.062c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.881-2.122c-0.586-0.585-1.356-0.878-2.122-0.877s-1.536 0.294-2.12 0.879l-0.046 0.046c-0.083 0.080-0.183 0.136-0.288 0.166-0.14 0.039-0.291 0.032-0.438-0.033-0.101-0.044-0.187-0.11-0.253-0.19-0.092-0.112-0.146-0.251-0.147-0.403v-0.090c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v0.159c-0.001 0.11-0.028 0.215-0.076 0.308-0.066 0.127-0.172 0.23-0.312 0.292-0.029 0.003-0.059 0.004-0.089 0.004-0.055 0.024-0.111 0.040-0.168 0.049-0.335-0.021-0.455-0.078-0.548-0.169l-0.062-0.062c-0.586-0.585-1.355-0.878-2.122-0.878s-1.535 0.294-2.122 0.882c-0.585 0.586-0.878 1.355-0.878 2.122s0.294 1.536 0.879 2.12l0.048 0.047c0.080 0.083 0.136 0.183 0.166 0.288 0.039 0.14 0.032 0.291-0.031 0.434-0.006 0.016-0.013 0.034-0.021 0.052-0.041 0.109-0.108 0.203-0.191 0.275-0.11 0.095-0.25 0.153-0.383 0.156h-0.090c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.294-0.879 2.122 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879h0.159c0.11 0.001 0.215 0.028 0.308 0.076 0.128 0.067 0.233 0.174 0.296 0.321 0.024 0.055 0.040 0.111 0.049 0.168-0.020 0.334-0.077 0.454-0.168 0.547l-0.062 0.062c-0.585 0.586-0.878 1.356-0.877 2.122s0.294 1.536 0.881 2.122c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879l0.047-0.048c0.083-0.080 0.183-0.136 0.288-0.166 0.14-0.039 0.291-0.032 0.434 0.031 0.016 0.006 0.034 0.013 0.052 0.021 0.109 0.041 0.203 0.108 0.275 0.191 0.095 0.11 0.153 0.25 0.156 0.383v0.092c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121v-0.159c0.001-0.11 0.028-0.215 0.076-0.308 0.067-0.128 0.174-0.233 0.321-0.296 0.055-0.024 0.111-0.040 0.168-0.049 0.334 0.020 0.454 0.077 0.547 0.168l0.062 0.062c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.122-0.881c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.879-2.12l-0.048-0.047c-0.080-0.083-0.136-0.183-0.166-0.288-0.039-0.14-0.032-0.291 0.031-0.434zM18.396 9.302c-0.012-0.201-0.038-0.297-0.076-0.382v0.080c0 0.043 0.003 0.084 0.008 0.125 0.021 0.060 0.043 0.119 0.068 0.177 0.004 0.090 0.005 0.091 0.005 0.092 0.249 0.581 0.684 1.030 1.208 1.303 0.371 0.193 0.785 0.298 1.211 0.303h0.18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707-0.111 0.525-0.293 0.707-0.431 0.293-0.707 0.293h-0.090c-0.637 0.003-1.22 0.228-1.675 0.603-0.323 0.266-0.581 0.607-0.75 0.993-0.257 0.582-0.288 1.21-0.127 1.782 0.119 0.423 0.341 0.814 0.652 1.136l0.072 0.073c0.196 0.196 0.294 0.45 0.294 0.707s-0.097 0.512-0.292 0.707c-0.197 0.197-0.451 0.295-0.709 0.295s-0.512-0.097-0.707-0.292l-0.061-0.061c-0.463-0.453-1.040-0.702-1.632-0.752-0.437-0.037-0.882 0.034-1.293 0.212-0.578 0.248-1.027 0.683-1.3 1.206-0.193 0.371-0.298 0.785-0.303 1.211v0.181c0 0.276-0.111 0.525-0.293 0.707s-0.43 0.292-0.706 0.292-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707v-0.090c-0.015-0.66-0.255-1.242-0.644-1.692-0.284-0.328-0.646-0.585-1.058-0.744-0.575-0.247-1.193-0.274-1.756-0.116-0.423 0.119-0.814 0.341-1.136 0.652l-0.073 0.072c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292c-0.197-0.197-0.295-0.451-0.295-0.709s0.097-0.512 0.292-0.707l0.061-0.061c0.453-0.463 0.702-1.040 0.752-1.632 0.037-0.437-0.034-0.882-0.212-1.293-0.248-0.578-0.683-1.027-1.206-1.3-0.371-0.193-0.785-0.298-1.211-0.303l-0.18 0.001c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293h0.090c0.66-0.015 1.242-0.255 1.692-0.644 0.328-0.284 0.585-0.646 0.744-1.058 0.247-0.575 0.274-1.193 0.116-1.756-0.119-0.423-0.341-0.814-0.652-1.136l-0.073-0.073c-0.196-0.196-0.294-0.45-0.294-0.707s0.097-0.512 0.292-0.707c0.197-0.197 0.451-0.295 0.709-0.295s0.512 0.097 0.707 0.292l0.061 0.061c0.463 0.453 1.040 0.702 1.632 0.752 0.37 0.032 0.745-0.014 1.101-0.137 0.096-0.012 0.186-0.036 0.266-0.072-0.031 0.001-0.061 0.003-0.089 0.004-0.201 0.012-0.297 0.038-0.382 0.076h0.080c0.043 0 0.084-0.003 0.125-0.008 0.060-0.021 0.119-0.043 0.177-0.068 0.090-0.004 0.091-0.005 0.092-0.005 0.581-0.249 1.030-0.684 1.303-1.208 0.193-0.37 0.298-0.785 0.303-1.21v-0.181c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v0.090c0.003 0.637 0.228 1.22 0.603 1.675 0.266 0.323 0.607 0.581 0.996 0.751 0.578 0.255 1.206 0.286 1.778 0.125 0.423-0.119 0.814-0.341 1.136-0.652l0.073-0.072c0.196-0.196 0.45-0.294 0.707-0.294s0.512 0.097 0.707 0.292c0.197 0.197 0.295 0.451 0.295 0.709s-0.097 0.512-0.292 0.707l-0.061 0.061c-0.453 0.463-0.702 1.040-0.752 1.632-0.032 0.37 0.014 0.745 0.137 1.101 0.012 0.095 0.037 0.185 0.072 0.266-0.001-0.032-0.002-0.062-0.004-0.089z"></path></symbol><symbol id="icon-share" viewBox="0 0 24 24"><path d="M3 12v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 4.414v10.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-share-2" viewBox="0 0 24 24"><path d="M16.214 18.098c0.025-0.033 0.048-0.067 0.070-0.104 0.020-0.035 0.038-0.071 0.054-0.107 0.073-0.108 0.156-0.209 0.248-0.301 0.363-0.363 0.861-0.586 1.414-0.586s1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414c0-0.325 0.077-0.631 0.214-0.902zM16.301 6.056c-0.009-0.017-0.018-0.034-0.028-0.051s-0.020-0.034-0.031-0.050c-0.154-0.283-0.242-0.608-0.242-0.955 0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586c-0.108-0.108-0.204-0.228-0.285-0.358zM7.699 10.944c0.009 0.017 0.018 0.034 0.028 0.051s0.020 0.034 0.031 0.050c0.154 0.283 0.242 0.608 0.242 0.955s-0.088 0.672-0.243 0.956c-0.011 0.016-0.021 0.033-0.031 0.050s-0.019 0.033-0.027 0.050c-0.081 0.13-0.177 0.25-0.285 0.358-0.363 0.363-0.861 0.586-1.414 0.586s-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586c0.108 0.108 0.204 0.228 0.285 0.358zM14.15 6.088l-5.308 3.097c-0.004-0.005-0.009-0.009-0.014-0.014-0.722-0.722-1.724-1.171-2.828-1.171s-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172c0.005-0.005 0.009-0.009 0.014-0.014l5.309 3.094c-0.098 0.347-0.151 0.714-0.151 1.092 0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172c-0.003 0.003-0.007 0.007-0.010 0.010l-5.312-3.095c0.098-0.346 0.15-0.71 0.15-1.087s-0.052-0.742-0.15-1.088l5.308-3.098c0.004 0.005 0.009 0.009 0.014 0.014 0.722 0.723 1.724 1.172 2.828 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828c0 0.377 0.052 0.742 0.15 1.088z"></path></symbol><symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 20.862c-1.184-0.672-4.42-2.695-6.050-5.549-0.079-0.138-0.153-0.276-0.223-0.417-0.456-0.911-0.727-1.878-0.727-2.896v-6.307l7-2.625 7 2.625v6.307c0 1.018-0.271 1.985-0.726 2.897-0.070 0.14-0.145 0.279-0.223 0.417-1.631 2.854-4.867 4.876-6.050 5.549zM12.447 22.894c0 0 4.989-2.475 7.34-6.589 0.096-0.168 0.188-0.34 0.276-0.515 0.568-1.135 0.937-2.408 0.937-3.79v-7c0-0.426-0.267-0.79-0.649-0.936l-8-3c-0.236-0.089-0.485-0.082-0.702 0l-8 3c-0.399 0.149-0.646 0.527-0.649 0.936v7c0 1.382 0.369 2.655 0.938 3.791 0.087 0.175 0.179 0.346 0.276 0.515 2.351 4.114 7.34 6.589 7.34 6.589 0.292 0.146 0.62 0.136 0.894 0z"></path></symbol><symbol id="icon-shield-off" viewBox="0 0 24 24"><path d="M20.645 14.296c0.241-0.776 0.358-1.567 0.355-2.3v-6.996c0-0.426-0.267-0.79-0.649-0.936l-8-3c-0.236-0.088-0.484-0.082-0.701 0l-3.16 1.18c-0.517 0.192-0.78 0.768-0.587 1.286s0.769 0.78 1.287 0.587l2.809-1.049 7.001 2.625v6.311c0.002 0.522-0.082 1.111-0.265 1.7-0.164 0.527 0.131 1.088 0.659 1.251s1.088-0.131 1.251-0.659zM5 6.414l11.231 11.231c-1.189 1.207-2.63 2.314-4.262 3.199-1.209-0.69-4.402-2.702-6.019-5.531-0.079-0.138-0.153-0.276-0.223-0.417-0.456-0.911-0.727-1.878-0.727-2.896zM0.293 1.707l2.824 2.825c-0.075 0.142-0.116 0.302-0.117 0.468v7c0 1.382 0.369 2.655 0.938 3.791 0.087 0.175 0.179 0.346 0.276 0.515 2.351 4.114 7.34 6.589 7.34 6.589 0.298 0.149 0.636 0.135 0.914-0.010 1.985-1.047 3.74-2.366 5.178-3.825l4.648 4.648c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22.001-22.001c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-shopping-bag" viewBox="0 0 24 24"><path d="M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.117-0.111 0.182-0.065 0.137-0.096 0.283-0.095 0.426v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-shopping-cart" viewBox="0 0 24 24"><path d="M11 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM22 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7.221 7h14.57l-1.371 7.191c-0.046 0.228-0.166 0.425-0.332 0.568-0.18 0.156-0.413 0.246-0.688 0.241h-9.734c-0.232 0.003-0.451-0.071-0.626-0.203-0.19-0.143-0.329-0.351-0.379-0.603zM1 2h3.18l0.848 4.239c0.108 0.437 0.502 0.761 0.972 0.761h1.221l-0.4-2h-0.821c-0.552 0-1 0.448-1 1 0 0.053 0.004 0.105 0.012 0.155 0.004 0.028 0.010 0.057 0.017 0.084l1.671 8.347c0.149 0.751 0.57 1.383 1.14 1.811 0.521 0.392 1.17 0.613 1.854 0.603h9.706c0.748 0.015 1.455-0.261 1.995-0.727 0.494-0.426 0.848-1.013 0.985-1.683l1.602-8.402c0.103-0.543-0.252-1.066-0.795-1.17-0.065-0.013-0.13-0.019-0.187-0.018h-16.18l-0.84-4.196c-0.094-0.462-0.497-0.804-0.98-0.804h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-shuffle" viewBox="0 0 24 24"><path d="M4.707 20.707l15.293-15.293v2.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-5c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.586l-15.293 15.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM14.293 15.707l4.293 4.293h-2.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h5c0.13 0 0.261-0.025 0.383-0.076s0.232-0.125 0.324-0.217c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1v2.586l-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM3.293 4.707l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-sidebar" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM10 20v-16h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM8 4v16h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-skip-back" viewBox="0 0 24 24"><path d="M18.375 20.781c0.17 0.136 0.388 0.219 0.625 0.219 0.552 0 1-0.448 1-1v-16c0.001-0.218-0.071-0.439-0.219-0.625-0.345-0.431-0.974-0.501-1.406-0.156l-10 8c-0.053 0.042-0.108 0.095-0.156 0.156-0.345 0.431-0.275 1.061 0.156 1.406zM18 17.919l-7.399-5.919 7.399-5.919zM6 19v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1v14c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-skip-forward" viewBox="0 0 24 24"><path d="M5.625 3.219c-0.17-0.136-0.388-0.219-0.625-0.219-0.552 0-1 0.448-1 1v16c-0.001 0.218 0.071 0.439 0.219 0.625 0.345 0.431 0.974 0.501 1.406 0.156l10-8c0.053-0.042 0.108-0.095 0.156-0.156 0.345-0.431 0.275-1.061-0.156-1.406zM6 6.081l7.399 5.919-7.399 5.919zM18 5v14c0 0.552 0.448 1 1 1s1-0.448 1-1v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-slack" viewBox="0 0 24 24"><path d="M14.5 11c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768v-5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768v5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732zM14.5 9c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354v-5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354v5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146zM20.5 11c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768v1.5c0 0.552 0.448 1 1 1zM20.5 9h-0.5v-0.5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146zM9.5 13c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768v5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768v-5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732zM9.5 15c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354v5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354v-5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146zM3.5 13c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768v-1.5c0-0.552-0.448-1-1-1zM3.5 15h0.5v0.5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146zM13 14.5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732h5c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732h-5c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768zM15 14.5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146h5c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146h-5c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354zM15.5 20c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354v-0.5zM15.5 18h-1.5c-0.552 0-1 0.448-1 1v1.5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732zM9 9.5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146h-5c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146h5c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354zM11 9.5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732h-5c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732h5c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768zM8.5 4c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354v0.5zM8.5 6h1.5c0.552 0 1-0.448 1-1v-1.5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732z"></path></symbol><symbol id="icon-slash" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM19.032 17.618l-12.65-12.65c1.54-1.232 3.493-1.968 5.618-1.968 2.486 0 4.734 1.006 6.364 2.636s2.636 3.878 2.636 6.364c0 2.125-0.736 4.078-1.968 5.618zM4.968 6.382l12.65 12.65c-1.54 1.232-3.493 1.968-5.618 1.968-2.486 0-4.734-1.006-6.364-2.636s-2.636-3.878-2.636-6.364c0-2.125 0.736-4.078 1.968-5.618z"></path></symbol><symbol id="icon-sliders" viewBox="0 0 24 24"><path d="M5 10v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.552 0.448 1 1 1s1-0.448 1-1zM13 21v-9c0-0.552-0.448-1-1-1s-1 0.448-1 1v9c0 0.552 0.448 1 1 1s1-0.448 1-1zM21 12v-9c0-0.552-0.448-1-1-1s-1 0.448-1 1v9c0 0.552 0.448 1 1 1s1-0.448 1-1zM1 15h2v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 9h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM17 17h2v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-smartphone" viewBox="0 0 24 24"><path d="M7 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM7 3h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-smile" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM7.2 14.6c0 0 0.131 0.173 0.331 0.383 0.145 0.153 0.338 0.341 0.577 0.54 0.337 0.281 0.772 0.59 1.297 0.853 0.705 0.352 1.579 0.624 2.595 0.624s1.89-0.272 2.595-0.624c0.525-0.263 0.96-0.572 1.297-0.853 0.239-0.199 0.432-0.387 0.577-0.54 0.2-0.21 0.331-0.383 0.331-0.383 0.331-0.442 0.242-1.069-0.2-1.4s-1.069-0.242-1.4 0.2c-0.041 0.050-0.181 0.206-0.181 0.206-0.1 0.105-0.237 0.239-0.408 0.382-0.243 0.203-0.549 0.419-0.91 0.6-0.48 0.239-1.050 0.412-1.701 0.412s-1.221-0.173-1.701-0.413c-0.36-0.18-0.667-0.397-0.91-0.6-0.171-0.143-0.308-0.277-0.408-0.382-0.14-0.155-0.181-0.205-0.181-0.205-0.331-0.442-0.958-0.531-1.4-0.2s-0.531 0.958-0.2 1.4zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-speaker" viewBox="0 0 24 24"><path d="M6 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM6 3h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM17 14c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 14c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM12 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-star" viewBox="0 0 24 24"><path d="M12.897 1.557c-0.092-0.189-0.248-0.352-0.454-0.454-0.495-0.244-1.095-0.041-1.339 0.454l-2.858 5.789-6.391 0.935c-0.208 0.029-0.411 0.127-0.571 0.291-0.386 0.396-0.377 1.029 0.018 1.414l4.623 4.503-1.091 6.362c-0.036 0.207-0.006 0.431 0.101 0.634 0.257 0.489 0.862 0.677 1.351 0.42l5.714-3.005 5.715 3.005c0.186 0.099 0.408 0.139 0.634 0.101 0.544-0.093 0.91-0.61 0.817-1.155l-1.091-6.362 4.623-4.503c0.151-0.146 0.259-0.344 0.292-0.572 0.080-0.546-0.298-1.054-0.845-1.134l-6.39-0.934zM12 4.259l2.193 4.444c0.151 0.305 0.436 0.499 0.752 0.547l4.906 0.717-3.549 3.457c-0.244 0.238-0.341 0.569-0.288 0.885l0.837 4.883-4.386-2.307c-0.301-0.158-0.647-0.148-0.931 0l-4.386 2.307 0.837-4.883c0.058-0.336-0.059-0.661-0.288-0.885l-3.549-3.457 4.907-0.718c0.336-0.049 0.609-0.26 0.752-0.546z"></path></symbol><symbol id="icon-stop-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM9 8c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1zM10 10h4v4h-4z"></path></symbol><symbol id="icon-sun" viewBox="0 0 24 24"><path d="M18 12c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243 0.673 3.158 1.757 4.243 2.586 1.757 4.243 1.757 3.158-0.673 4.243-1.757 1.757-2.586 1.757-4.243zM16 12c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172-2.103-0.447-2.828-1.172-1.172-1.723-1.172-2.828 0.447-2.103 1.172-2.828 1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828zM11 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 21v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM3.513 4.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM17.653 19.067l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4.927 20.487l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM19.067 6.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-sunrise" viewBox="0 0 24 24"><path d="M18 18c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243c0 0.552 0.448 1 1 1s1-0.448 1-1c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828c0 0.552 0.448 1 1 1s1-0.448 1-1zM3.513 10.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM19.067 12.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 21h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.707 6.707l2.293-2.293v4.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-4.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-sunset" viewBox="0 0 24 24"><path d="M18 18c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243c0 0.552 0.448 1 1 1s1-0.448 1-1c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828c0 0.552 0.448 1 1 1s1-0.448 1-1zM3.513 10.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM19.067 12.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 21h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c0.552 0 1-0.448 1-1s-0.448-1-1-1zM15.293 4.293l-2.293 2.293v-4.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v4.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076 0.265-0.027 0.383-0.076c0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-tablet" viewBox="0 0 24 24"><path d="M6 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM6 3h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-tag" viewBox="0 0 24 24"><path d="M21.297 14.117c0.583-0.586 0.874-1.352 0.874-2.115 0.001-0.764-0.29-1.532-0.874-2.12l-8.59-8.59c-0.181-0.18-0.431-0.292-0.707-0.292h-10c-0.552 0-1 0.448-1 1v10c0 0.256 0.098 0.512 0.293 0.708l8.592 8.582c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879zM19.883 12.703l-7.17 7.17c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292l-8.299-8.29v-8.585h8.586l8.297 8.297c0.192 0.193 0.289 0.447 0.289 0.704s-0.097 0.509-0.289 0.702zM7 8c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-target" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM19 12c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050-3.684 0.785-4.95 2.050-2.050 3.017-2.050 4.95 0.785 3.684 2.050 4.95 3.017 2.050 4.95 2.050 3.684-0.785 4.95-2.050 2.050-3.017 2.050-4.95zM17 12c0 1.381-0.559 2.63-1.464 3.536s-2.155 1.464-3.536 1.464-2.63-0.559-3.536-1.464-1.464-2.155-1.464-3.536 0.559-2.63 1.464-3.536 2.155-1.464 3.536-1.464 2.63 0.559 3.536 1.464 1.464 2.155 1.464 3.536zM15 12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM13 12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-terminal" viewBox="0 0 24 24"><path d="M4.707 17.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM12 20h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-thermometer" viewBox="0 0 24 24"><path d="M13 14.76c0.002 0.329 0.161 0.646 0.453 0.837 0.349 0.228 0.686 0.554 0.958 0.96 0.537 0.804 0.698 1.747 0.523 2.627s-0.684 1.69-1.488 2.227-1.747 0.698-2.627 0.523-1.69-0.684-2.227-1.488-0.698-1.747-0.523-2.627 0.684-1.69 1.488-2.227c0.268-0.182 0.443-0.487 0.443-0.832v-11.26c0-0.414 0.167-0.788 0.439-1.061s0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM15 14.256v-10.756c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475v10.759c-1.007 0.829-1.654 1.96-1.894 3.17-0.274 1.379-0.022 2.866 0.821 4.129s2.121 2.064 3.5 2.339 2.866 0.022 4.129-0.821 2.064-2.121 2.339-3.5 0.022-2.866-0.821-4.129c-0.307-0.459-0.673-0.86-1.073-1.19z"></path></symbol><symbol id="icon-thumbs-down" viewBox="0 0 24 24"><path d="M11 15c0-0.552-0.448-1-1-1h-5.679c-0.065-0.002-0.153-0.011-0.153-0.011-0.273-0.041-0.502-0.188-0.655-0.396s-0.225-0.47-0.184-0.742l1.38-8.998c0.037-0.239 0.156-0.448 0.325-0.6 0.179-0.161 0.415-0.256 0.686-0.253h10.28v9.788l-3.608 8.118c-0.307-0.098-0.582-0.268-0.806-0.492-0.363-0.363-0.586-0.861-0.586-1.414zM9 16v3c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172c0.405 0 0.754-0.241 0.914-0.594l4-9c0.060-0.134 0.087-0.275 0.086-0.406v-11c0-0.552-0.448-1-1-1h-11.28c-0.767-0.009-1.482 0.281-2.021 0.763-0.505 0.452-0.857 1.076-0.967 1.783l-1.38 9.002c-0.125 0.82 0.096 1.614 0.55 2.231s1.147 1.063 1.965 1.187c0.165 0.025 0.333 0.037 0.492 0.034zM17 3h2.67c0.361-0.006 0.674 0.119 0.912 0.332 0.213 0.191 0.364 0.45 0.418 0.746v6.787c-0.037 0.34-0.208 0.63-0.455 0.833-0.235 0.194-0.537 0.306-0.861 0.301l-2.684 0.001c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.656c0.81 0.012 1.569-0.27 2.16-0.756 0.622-0.511 1.059-1.251 1.176-2.11 0.005-0.040 0.008-0.087 0.008-0.134v-7c0-0.042-0.003-0.089-0.009-0.137-0.111-0.803-0.505-1.51-1.075-2.020-0.6-0.537-1.397-0.858-2.246-0.842h-2.67c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 24 24"><path d="M13 9c0 0.552 0.448 1 1 1h5.679c0.065 0.002 0.153 0.011 0.153 0.011 0.273 0.041 0.502 0.188 0.655 0.396s0.225 0.47 0.184 0.742l-1.38 8.998c-0.037 0.239-0.156 0.448-0.325 0.6-0.18 0.161-0.415 0.256-0.686 0.253h-10.28v-9.788l3.608-8.118c0.307 0.098 0.582 0.268 0.806 0.492 0.363 0.363 0.586 0.861 0.586 1.414zM15 8v-3c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172c-0.405 0-0.754 0.241-0.914 0.594l-4 9c-0.060 0.134-0.087 0.275-0.086 0.406v11c0 0.552 0.448 1 1 1h11.28c0.767 0.009 1.482-0.281 2.021-0.763 0.505-0.452 0.857-1.076 0.967-1.783l1.38-9.002c0.125-0.82-0.096-1.614-0.55-2.231s-1.147-1.063-1.965-1.187c-0.165-0.025-0.333-0.037-0.492-0.034zM7 21h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-toggle-left" viewBox="0 0 24 24"><path d="M8 4c-2.209 0-4.21 0.897-5.657 2.343s-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657 3.448 2.343 5.657 2.343h8c2.209 0 4.21-0.897 5.657-2.343s2.343-3.448 2.343-5.657-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343zM8 6h8c1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243-2.586 1.757-4.243 1.757h-8c-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757zM12 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM10 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-toggle-right" viewBox="0 0 24 24"><path d="M8 4c-2.209 0-4.21 0.897-5.657 2.343s-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657 3.448 2.343 5.657 2.343h8c2.209 0 4.21-0.897 5.657-2.343s2.343-3.448 2.343-5.657-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343zM8 6h8c1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243-2.586 1.757-4.243 1.757h-8c-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757zM20 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM18 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-tool" viewBox="0 0 24 24"><path d="M15.407 6.993l3.77-3.756c0.081-0.079 0.152-0.18 0.205-0.296 0.227-0.504 0.002-1.096-0.501-1.322-0.263-0.118-0.532-0.22-0.807-0.306-1.582-0.492-3.34-0.428-4.963 0.307-1.761 0.797-3.033 2.234-3.664 3.909-0.554 1.467-0.617 3.124-0.087 4.697l-6.447 6.447c-0.609 0.609-0.914 1.41-0.914 2.207s0.305 1.598 0.914 2.207 1.41 0.914 2.207 0.914 1.598-0.305 2.207-0.914l6.448-6.448c0.050 0.017 0.1 0.033 0.151 0.049 1.582 0.492 3.34 0.428 4.963-0.307 1.761-0.797 3.033-2.234 3.664-3.909s0.624-3.594-0.173-5.355c-0.045-0.103-0.114-0.205-0.204-0.295-0.391-0.391-1.024-0.391-1.414 0l-3.756 3.77zM13.986 5.6c-0.383 0.39-0.573 0.9-0.572 1.406 0.002 0.502 0.192 1.007 0.571 1.394l1.607 1.608c0.398 0.39 0.907 0.58 1.413 0.579 0.502-0.002 1.007-0.192 1.394-0.571l2.574-2.574c0.090 0.796-0.015 1.593-0.291 2.326-0.452 1.199-1.359 2.222-2.617 2.792-1.16 0.525-2.412 0.571-3.545 0.219-0.197-0.061-0.391-0.135-0.579-0.22-0.387-0.174-0.827-0.082-1.118 0.205l-6.91 6.91c-0.219 0.219-0.504 0.328-0.793 0.328s-0.574-0.109-0.793-0.328-0.328-0.504-0.328-0.793 0.109-0.574 0.328-0.793l6.91-6.91c0.301-0.301 0.37-0.746 0.204-1.119-0.569-1.258-0.575-2.626-0.123-3.825s1.359-2.222 2.617-2.792c0.852-0.386 1.755-0.513 2.623-0.413z"></path></symbol><symbol id="icon-trash" viewBox="0 0 24 24"><path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1z"></path></symbol><symbol id="icon-trash-2" viewBox="0 0 24 24"><path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-trello" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM7 6c-0.552 0-1 0.448-1 1v9c0 0.552 0.448 1 1 1h3c0.552 0 1-0.448 1-1v-9c0-0.552-0.448-1-1-1zM8 8h1v7h-1zM14 6c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h3c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM15 8h1v3h-1z"></path></symbol><symbol id="icon-trending-down" viewBox="0 0 24 24"><path d="M17 19h6c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217 0.168-0.206 0.217-0.324c0.049-0.118 0.076-0.247 0.076-0.383v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.586l-7.793-7.793c-0.391-0.391-1.024-0.391-1.414 0l-4.293 4.293-6.793-6.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7.5 7.5c0.391 0.391 1.024 0.391 1.414 0l4.293-4.293 7.086 7.086h-3.586c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-trending-up" viewBox="0 0 24 24"><path d="M17 7h3.586l-7.086 7.086-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0l-7.5 7.5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l6.793-6.793 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0l7.793-7.793v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-triangle" viewBox="0 0 24 24"><path d="M11.148 4.374c0.073-0.123 0.185-0.242 0.334-0.332 0.236-0.143 0.506-0.178 0.756-0.116s0.474 0.216 0.614 0.448l8.466 14.133c0.070 0.12 0.119 0.268 0.128 0.434-0.015 0.368-0.119 0.591-0.283 0.759-0.18 0.184-0.427 0.298-0.693 0.301l-16.937-0.001c-0.152-0.001-0.321-0.041-0.481-0.134-0.239-0.138-0.399-0.359-0.466-0.607s-0.038-0.519 0.092-0.745zM9.432 3.346l-8.47 14.14c-0.422 0.731-0.506 1.55-0.308 2.29s0.68 1.408 1.398 1.822c0.464 0.268 0.976 0.4 1.475 0.402h16.943c0.839-0.009 1.587-0.354 2.123-0.902s0.864-1.303 0.855-2.131c-0.006-0.536-0.153-1.044-0.406-1.474l-8.474-14.147c-0.432-0.713-1.11-1.181-1.854-1.363s-1.561-0.081-2.269 0.349c-0.429 0.26-0.775 0.615-1.012 1.014z"></path></symbol><symbol id="icon-truck" viewBox="0 0 24 24"><path d="M15 15h-13v-11h13v4zM17 9h2.586l2.414 2.414v3.586h-5zM7 18.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM22 18.5c0-0.537-0.121-1.045-0.337-1.5h1.337c0.552 0 1-0.448 1-1v-5c0-0.256-0.098-0.512-0.293-0.707l-3-3c-0.181-0.181-0.431-0.293-0.707-0.293h-3v-4c0-0.552-0.448-1-1-1h-15c-0.552 0-1 0.448-1 1v13c0 0.552 0.448 1 1 1h1.337c-0.216 0.455-0.337 0.963-0.337 1.5 0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475c0-0.537-0.121-1.045-0.337-1.5h6.674c-0.216 0.455-0.337 0.963-0.337 1.5 0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM20 18.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061z"></path></symbol><symbol id="icon-tv" viewBox="0 0 24 24"><path d="M12 8h8c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h8zM16.293 1.293l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-5.586c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-5.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-twitch" viewBox="0 0 24 24"><path d="M20 3v10.586l-3.414 3.414h-4.586c-0.256 0-0.512 0.098-0.707 0.293l-2.293 2.293v-1.586c0-0.552-0.448-1-1-1h-4v-14zM21 1h-18c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4v3c0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l3.707-3.707h4.586c0.276 0 0.526-0.112 0.707-0.293l4-4c0.195-0.195 0.293-0.451 0.293-0.707v-12c0-0.552-0.448-1-1-1zM12 11v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 11v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-twitter" viewBox="0 0 24 24"><path d="M20.833 5.262c-0.186 0.242-0.391 0.475-0.616 0.696-0.233 0.232-0.347 0.567-0.278 0.908 0.037 0.182 0.060 0.404 0.061 0.634 0 5.256-2.429 8.971-5.81 10.898-2.647 1.509-5.938 1.955-9.222 1.12 1.245-0.361 2.46-0.921 3.593-1.69 0.147-0.099 0.273-0.243 0.352-0.421 0.224-0.505-0.003-1.096-0.508-1.32-2.774-1.233-4.13-2.931-4.769-4.593-0.417-1.084-0.546-2.198-0.52-3.227 0.021-0.811 0.138-1.56 0.278-2.182 0.394 0.343 0.803 0.706 1.235 1.038 2.051 1.577 4.624 2.479 7.395 2.407 0.543-0.015 0.976-0.457 0.976-1v-1.011c-0.002-0.179 0.009-0.357 0.034-0.533 0.113-0.806 0.504-1.569 1.162-2.141 0.725-0.631 1.636-0.908 2.526-0.846s1.753 0.463 2.384 1.188c0.252 0.286 0.649 0.416 1.033 0.304 0.231-0.067 0.463-0.143 0.695-0.228zM22.424 2.183c-0.74 0.522-1.523 0.926-2.287 1.205-0.931-0.836-2.091-1.302-3.276-1.385-1.398-0.097-2.836 0.339-3.977 1.332-1.036 0.901-1.652 2.108-1.83 3.372-0.037 0.265-0.055 0.532-0.054 0.8-1.922-0.142-3.693-0.85-5.15-1.97-0.775-0.596-1.462-1.309-2.034-2.116-0.32-0.45-0.944-0.557-1.394-0.237-0.154 0.109-0.267 0.253-0.335 0.409 0 0-0.132 0.299-0.285 0.76-0.112 0.337-0.241 0.775-0.357 1.29-0.163 0.722-0.302 1.602-0.326 2.571-0.031 1.227 0.12 2.612 0.652 3.996 0.683 1.775 1.966 3.478 4.147 4.823-1.569 0.726-3.245 1.039-4.873 0.967-0.552-0.024-1.019 0.403-1.043 0.955-0.017 0.389 0.19 0.736 0.513 0.918 4.905 2.725 10.426 2.678 14.666 0.261 4.040-2.301 6.819-6.7 6.819-12.634-0.001-0.167-0.008-0.33-0.023-0.489 1.006-1.115 1.676-2.429 1.996-3.781 0.127-0.537-0.206-1.076-0.743-1.203-0.29-0.069-0.58-0.003-0.807 0.156z"></path></symbol><symbol id="icon-type" viewBox="0 0 24 24"><path d="M11 5v14h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-14h6v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1h-16c-0.552 0-1 0.448-1 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-2z"></path></symbol><symbol id="icon-umbrella" viewBox="0 0 24 24"><path d="M21.84 11h-19.674c0.387-1.824 1.259-3.474 2.485-4.796 1.617-1.744 3.848-2.915 6.394-3.158 2.763-0.264 5.369 0.616 7.354 2.255 1.717 1.418 2.965 3.401 3.441 5.7zM23.995 11.905c-0.316-3.312-1.946-6.184-4.323-8.147s-5.505-3.020-8.817-2.704c-3.052 0.291-5.731 1.699-7.67 3.789-1.759 1.897-2.909 4.357-3.18 7.057-0.055 0.55 0.346 1.040 0.895 1.095 0.035 0.004 0.070 0.005 0.1 0.005h22c0.531 0 0.966-0.414 0.998-0.937-0.001-0.137-0.002-0.148-0.003-0.158zM17 19c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-underline" viewBox="0 0 24 24"><path d="M5 3v7c0 1.933 0.785 3.684 2.050 4.95s3.017 2.050 4.95 2.050 3.684-0.785 4.95-2.050 2.050-3.017 2.050-4.95v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 1.381-0.559 2.63-1.464 3.536s-2.155 1.464-3.536 1.464-2.63-0.559-3.536-1.464-1.464-2.155-1.464-3.536v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1zM4 22h16c0.552 0 1-0.448 1-1s-0.448-1-1-1h-16c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-unlock" viewBox="0 0 24 24"><path d="M5 12h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 10v-3c-0.001-1.106 0.445-2.105 1.169-2.831 0.723-0.724 1.719-1.172 2.821-1.174 1.030 0.003 1.948 0.378 2.652 1 0.638 0.565 1.097 1.332 1.28 2.209 0.113 0.541 0.642 0.888 1.183 0.775s0.888-0.642 0.775-1.183c-0.272-1.307-0.958-2.454-1.912-3.299-1.060-0.938-2.452-1.504-3.973-1.502-1.657 0.002-3.157 0.676-4.241 1.762s-1.756 2.587-1.754 4.243v3h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879z"></path></symbol><symbol id="icon-upload" viewBox="0 0 24 24"><path d="M20 15v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 5.414v9.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-upload-cloud" viewBox="0 0 24 24"><path d="M11 14.414v6.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM20.869 19.268c1.454-0.793 2.451-2.102 2.884-3.574s0.305-3.112-0.488-4.566c-0.679-1.245-1.737-2.155-2.959-2.663-0.724-0.301-1.505-0.46-2.299-0.465h-0.527c-0.725-2.057-2.144-3.708-3.917-4.752-1.983-1.168-4.415-1.581-6.821-0.959s-4.333 2.162-5.502 4.145-1.581 4.415-0.959 6.821c0.372 1.437 1.073 2.709 1.975 3.713 0.369 0.411 1.002 0.444 1.412 0.075s0.444-1.002 0.075-1.412c-0.688-0.765-1.235-1.75-1.526-2.877-0.484-1.872-0.164-3.761 0.746-5.305s2.407-2.74 4.279-3.224 3.761-0.164 5.305 0.746 2.74 2.407 3.224 4.279c0.116 0.435 0.506 0.75 0.969 0.75h1.253c0.536 0.004 1.061 0.111 1.545 0.312 0.815 0.339 1.517 0.943 1.97 1.773 0.529 0.97 0.615 2.061 0.325 3.044s-0.953 1.854-1.923 2.382c-0.485 0.264-0.664 0.872-0.399 1.357s0.872 0.664 1.357 0.399z"></path></symbol><symbol id="icon-user" viewBox="0 0 24 24"><path d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path></symbol><symbol id="icon-user-check" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM16.293 11.707l2 2c0.391 0.391 1.024 0.391 1.414 0l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293-1.293-1.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-user-minus" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM23 10h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-user-plus" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM23 10h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-user-x" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM22.293 7.293l-1.793 1.793-1.793-1.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l1.793 1.793-1.793 1.793c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l1.793-1.793 1.793 1.793c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.793-1.793 1.793-1.793c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-users" viewBox="0 0 24 24"><path d="M18 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM14 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM12 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM24 21v-2c-0.001-1.245-0.457-2.385-1.215-3.261-0.652-0.753-1.528-1.311-2.529-1.576-0.534-0.141-1.081 0.177-1.222 0.711s0.177 1.081 0.711 1.222c0.607 0.161 1.136 0.498 1.528 0.952 0.454 0.526 0.726 1.206 0.727 1.952v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM15.752 4.099c0.803 0.206 1.445 0.715 1.837 1.377s0.531 1.47 0.325 2.273c-0.176 0.688-0.575 1.256-1.105 1.652-0.314 0.235-0.675 0.409-1.063 0.511-0.534 0.14-0.854 0.687-0.713 1.221s0.687 0.854 1.221 0.713c0.637-0.167 1.232-0.455 1.752-0.844 0.884-0.66 1.552-1.613 1.845-2.758 0.342-1.337 0.11-2.689-0.542-3.788s-1.725-1.953-3.062-2.296c-0.535-0.137-1.080 0.186-1.217 0.721s0.186 1.080 0.721 1.217z"></path></symbol><symbol id="icon-video" viewBox="0 0 24 24"><path d="M22 8.943v6.114l-4.28-3.057zM3 4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3.057l5.419 3.871c0.449 0.321 1.074 0.217 1.395-0.232 0.126-0.178 0.187-0.383 0.186-0.582v-10c0-0.552-0.448-1-1-1-0.218 0-0.42 0.070-0.581 0.186l-5.419 3.871v-3.057c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM3 6h11c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-video-off" viewBox="0 0 24 24"><path d="M10.66 6h3.34c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3.34c0 0.276 0.112 0.526 0.293 0.707l1 1c0.351 0.351 0.898 0.387 1.293 0.103l4.414-3.192v8.042c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0.001-0.201-0.061-0.408-0.19-0.586-0.324-0.447-0.949-0.548-1.396-0.224l-5.309 3.841-0.105-0.105v-2.926c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.34c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4.586 6l10.414 10.414v0.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM0.293 1.707l2.318 2.318c-0.673 0.087-1.277 0.398-1.732 0.854-0.542 0.541-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879 0.269-0.269 0.488-0.59 0.64-0.946l5.532 5.532c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-voicemail" viewBox="0 0 24 24"><path d="M9 11.5c0 0.967-0.391 1.84-1.025 2.475s-1.508 1.025-2.475 1.025-1.84-0.391-2.475-1.025-1.025-1.508-1.025-2.475 0.391-1.84 1.025-2.475 1.508-1.025 2.475-1.025 1.84 0.391 2.475 1.025 1.025 1.508 1.025 2.475zM22 11.5c0 0.967-0.391 1.84-1.025 2.475s-1.508 1.025-2.475 1.025-1.84-0.391-2.475-1.025-1.025-1.508-1.025-2.475 0.391-1.84 1.025-2.475 1.508-1.025 2.475-1.025 1.84 0.391 2.475 1.025 1.025 1.508 1.025 2.475zM5.5 17h13c1.519 0 2.895-0.617 3.889-1.611s1.611-2.37 1.611-3.889-0.617-2.895-1.611-3.889-2.37-1.611-3.889-1.611-2.895 0.617-3.889 1.611-1.611 2.37-1.611 3.889c0 1.329 0.473 2.55 1.257 3.5h-4.514c0.784-0.95 1.257-2.171 1.257-3.5 0-1.519-0.617-2.895-1.611-3.889s-2.37-1.611-3.889-1.611-2.895 0.617-3.889 1.611-1.611 2.37-1.611 3.889 0.617 2.895 1.611 3.889 2.37 1.611 3.889 1.611z"></path></symbol><symbol id="icon-volume" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219z"></path></symbol><symbol id="icon-volume-1" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM14.833 9.167c0.781 0.781 1.171 1.803 1.171 2.828s-0.39 2.047-1.171 2.828c-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c1.171-1.171 1.757-2.708 1.757-4.242s-0.586-3.071-1.757-4.242c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-volume-2" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM18.363 5.637c1.757 1.758 2.635 4.059 2.635 6.364 0 2.304-0.878 4.605-2.635 6.362-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c2.147-2.147 3.22-4.963 3.221-7.776s-1.074-5.63-3.221-7.778c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM14.833 9.167c0.781 0.781 1.171 1.803 1.171 2.828s-0.39 2.047-1.171 2.828c-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c1.171-1.171 1.757-2.708 1.757-4.242s-0.586-3.071-1.757-4.242c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-volume-x" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM16.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-watch" viewBox="0 0 24 24"><path d="M11 9v3c0 0.276 0.112 0.526 0.293 0.707l1.5 1.5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.207-1.207v-2.586c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15.33 19.276l-0.166 1.813c-0.024 0.266-0.147 0.495-0.333 0.658-0.18 0.159-0.415 0.253-0.67 0.253h-4.331c-0.27 0.001-0.509-0.1-0.69-0.269-0.175-0.164-0.291-0.389-0.315-0.643l-0.165-1.817c1.016 0.468 2.148 0.729 3.34 0.729 1.188 0 2.316-0.259 3.33-0.724zM8.187 7.367c1.037-0.855 2.364-1.367 3.813-1.367 1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.104 0.104-0.211 0.204-0.323 0.3-0.035 0.031-0.071 0.061-0.107 0.090-1.037 0.855-2.364 1.367-3.813 1.367-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243c0.104-0.104 0.211-0.204 0.323-0.3 0.035-0.031 0.071-0.061 0.107-0.090zM17.491 6.182l-0.315-3.455c-0.070-0.756-0.418-1.43-0.938-1.917-0.539-0.505-1.266-0.813-2.058-0.81h-4.354c-0.755 0.003-1.454 0.286-1.985 0.757-0.551 0.488-0.925 1.182-0.997 1.972l-0.314 3.433c-0.063 0.059-0.126 0.12-0.187 0.181-1.446 1.447-2.343 3.448-2.343 5.657s0.897 4.21 2.343 5.657c0.058 0.058 0.117 0.115 0.176 0.171l0.315 3.445c0.070 0.756 0.418 1.43 0.938 1.917 0.539 0.505 1.266 0.813 2.058 0.81h4.329c0.759 0.001 1.463-0.282 1.997-0.754 0.553-0.489 0.929-1.184 1-1.975l0.314-3.433c0.063-0.059 0.126-0.12 0.187-0.181 1.446-1.447 2.343-3.448 2.343-5.657s-0.897-4.21-2.343-5.657c-0.054-0.054-0.11-0.108-0.165-0.161zM8.67 4.724l0.166-1.813c0.024-0.265 0.147-0.494 0.331-0.657 0.179-0.159 0.412-0.253 0.667-0.254h4.346c0.27-0.001 0.509 0.1 0.69 0.269 0.175 0.164 0.291 0.389 0.315 0.643l0.166 1.821c-1.020-0.47-2.155-0.733-3.351-0.733-1.188 0-2.316 0.259-3.33 0.724z"></path></symbol><symbol id="icon-wifi" viewBox="0 0 24 24"><path d="M5.64 13.318c1.962-1.634 4.361-2.389 6.733-2.305 2.167 0.077 4.31 0.855 6.071 2.308 0.426 0.351 1.056 0.291 1.408-0.135s0.291-1.056-0.135-1.408c-2.107-1.738-4.674-2.671-7.272-2.763-2.846-0.101-5.731 0.806-8.084 2.767-0.424 0.353-0.482 0.984-0.128 1.408s0.984 0.482 1.408 0.128zM2.081 9.75c2.937-2.589 6.6-3.82 10.236-3.737 3.443 0.079 6.859 1.337 9.604 3.739 0.416 0.364 1.047 0.322 1.411-0.094s0.322-1.047-0.094-1.411c-3.108-2.72-6.977-4.145-10.876-4.234-4.119-0.094-8.275 1.303-11.603 4.237-0.415 0.365-0.454 0.997-0.089 1.411s0.997 0.454 1.411 0.089zM9.109 16.925c0.99-0.704 2.146-0.995 3.274-0.906 0.891 0.070 1.765 0.378 2.523 0.909 0.452 0.317 1.076 0.207 1.393-0.245s0.207-1.076-0.245-1.393c-1.053-0.738-2.269-1.167-3.513-1.265-1.58-0.125-3.204 0.285-4.59 1.269-0.45 0.32-0.556 0.944-0.236 1.394s0.944 0.556 1.394 0.236zM12 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-wifi-off" viewBox="0 0 24 24"><path d="M16.281 11.959c0.789 0.385 1.498 0.857 2.064 1.347 0.418 0.361 1.049 0.316 1.411-0.102s0.316-1.049-0.102-1.411c-0.703-0.609-1.559-1.175-2.496-1.633-0.496-0.242-1.095-0.036-1.337 0.46s-0.036 1.095 0.46 1.337zM10.79 6.047c4.020-0.324 7.796 0.968 10.696 3.337 0.146 0.12 0.29 0.242 0.432 0.367 0.414 0.365 1.046 0.325 1.411-0.089s0.325-1.046-0.089-1.411c-0.16-0.141-0.324-0.28-0.489-0.415-3.284-2.683-7.566-4.149-12.122-3.781-0.55 0.043-0.96 0.525-0.916 1.075s0.527 0.961 1.077 0.916zM9.109 16.925c0.99-0.704 2.146-0.995 3.274-0.906 0.891 0.070 1.765 0.378 2.523 0.909 0.233 0.163 0.512 0.213 0.77 0.162l6.617 6.617c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-12.75-12.75c-0.050-0.063-0.106-0.12-0.169-0.169l-9.081-9.081c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.088 4.088c-1.257 0.629-2.49 1.453-3.623 2.455-0.414 0.366-0.453 0.998-0.087 1.412s0.998 0.453 1.412 0.087c1.191-1.053 2.499-1.877 3.802-2.451l2.323 2.323c-1.358 0.457-2.671 1.177-3.849 2.161-0.424 0.354-0.48 0.985-0.126 1.409s0.985 0.48 1.409 0.126c1.27-1.062 2.724-1.75 4.188-2.074l2.789 2.789c-0.026-0.002-0.052-0.005-0.078-0.007-1.58-0.125-3.204 0.285-4.59 1.269-0.45 0.32-0.556 0.944-0.236 1.394s0.944 0.556 1.394 0.236zM12 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-wind" viewBox="0 0 24 24"><path d="M10.299 5.295c0.195-0.196 0.449-0.294 0.706-0.295s0.512 0.096 0.708 0.291 0.294 0.449 0.295 0.706-0.096 0.512-0.291 0.708c-0.192 0.194-0.442 0.292-0.697 0.295h-9.020c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.043c0.758-0.009 1.516-0.304 2.093-0.885 0.584-0.587 0.875-1.358 0.872-2.124s-0.298-1.535-0.885-2.119-1.357-0.874-2.123-0.872-1.535 0.298-2.119 0.885c-0.39 0.392-0.388 1.025 0.004 1.414s1.025 0.387 1.414-0.004zM11.881 20.115c0.584 0.587 1.352 0.883 2.119 0.885s1.537-0.289 2.124-0.872 0.883-1.352 0.885-2.119-0.289-1.537-0.872-2.124c-0.577-0.581-1.335-0.876-2.093-0.885h-12.044c-0.552 0-1 0.448-1 1s0.448 1 1 1h12.020c0.255 0.003 0.505 0.101 0.698 0.295 0.195 0.196 0.292 0.451 0.291 0.708s-0.099 0.511-0.295 0.706-0.451 0.292-0.708 0.291-0.511-0.099-0.706-0.295c-0.389-0.392-1.023-0.394-1.414-0.004s-0.394 1.023-0.004 1.414zM18.436 8.438c0.294-0.293 0.676-0.438 1.061-0.438s0.767 0.147 1.060 0.441 0.438 0.676 0.438 1.061-0.147 0.767-0.441 1.060c-0.292 0.292-0.673 0.437-1.057 0.438h-17.497c-0.552 0-1 0.448-1 1s0.448 1 1 1h17.502c0.891-0.002 1.784-0.342 2.466-1.022 0.684-0.682 1.027-1.579 1.028-2.474s-0.34-1.792-1.022-2.476-1.58-1.027-2.474-1.028-1.792 0.34-2.476 1.022c-0.391 0.39-0.392 1.023-0.002 1.414s1.023 0.392 1.414 0.002z"></path></symbol><symbol id="icon-x" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452zM8.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM14.293 8.293l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-youtube" viewBox="0 0 24 24"><path d="M21.563 6.637c0.287 1.529 0.448 3.295 0.437 5.125 0.019 1.528-0.123 3.267-0.437 5.021-0.057 0.208-0.15 0.403-0.272 0.575-0.227 0.321-0.558 0.565-0.949 0.675-0.604 0.161-2.156 0.275-3.877 0.341-2.23 0.086-4.465 0.086-4.465 0.086s-2.235 0-4.465-0.085c-1.721-0.066-3.273-0.179-3.866-0.338-0.205-0.057-0.396-0.149-0.566-0.268-0.311-0.22-0.55-0.536-0.67-0.923-0.285-1.526-0.444-3.286-0.433-5.11-0.021-1.54 0.121-3.292 0.437-5.060 0.057-0.208 0.15-0.403 0.272-0.575 0.227-0.321 0.558-0.565 0.949-0.675 0.604-0.161 2.156-0.275 3.877-0.341 2.23-0.085 4.465-0.085 4.465-0.085s2.235 0 4.466 0.078c1.719 0.060 3.282 0.163 3.856 0.303 0.219 0.063 0.421 0.165 0.598 0.299 0.307 0.232 0.538 0.561 0.643 0.958zM23.51 6.177c-0.217-0.866-0.718-1.59-1.383-2.093-0.373-0.282-0.796-0.494-1.249-0.625-0.898-0.22-2.696-0.323-4.342-0.38-2.267-0.079-4.536-0.079-4.536-0.079s-2.272 0-4.541 0.087c-1.642 0.063-3.45 0.175-4.317 0.407-0.874 0.247-1.581 0.77-2.064 1.45-0.27 0.381-0.469 0.811-0.587 1.268-0.006 0.024-0.011 0.049-0.015 0.071-0.343 1.898-0.499 3.793-0.476 5.481-0.012 1.924 0.161 3.831 0.477 5.502 0.006 0.031 0.013 0.062 0.021 0.088 0.245 0.86 0.77 1.567 1.451 2.048 0.357 0.252 0.757 0.443 1.182 0.561 0.879 0.235 2.686 0.347 4.328 0.41 2.269 0.087 4.541 0.087 4.541 0.087s2.272 0 4.541-0.087c1.642-0.063 3.449-0.175 4.317-0.407 0.873-0.247 1.581-0.77 2.063-1.45 0.27-0.381 0.47-0.811 0.587-1.267 0.006-0.025 0.012-0.050 0.015-0.071 0.34-1.884 0.496-3.765 0.476-5.44 0.012-1.925-0.161-3.833-0.477-5.504-0.004-0.020-0.008-0.040-0.012-0.057zM10.75 13.301v-3.102l2.727 1.551zM10.244 15.889l5.75-3.27c0.48-0.273 0.648-0.884 0.375-1.364-0.093-0.164-0.226-0.292-0.375-0.375l-5.75-3.27c-0.48-0.273-1.091-0.105-1.364 0.375-0.090 0.158-0.132 0.33-0.131 0.494v6.54c0 0.552 0.448 1 1 1 0.182 0 0.352-0.049 0.494-0.131z"></path></symbol><symbol id="icon-zap" viewBox="0 0 24 24"><path d="M11.585 5.26l-0.577 4.616c0.033 0.716 0.465 1.124 0.992 1.124h6.865l-6.45 7.74 0.577-4.616c-0.033-0.716-0.465-1.124-0.992-1.124h-6.865zM12.232 1.36l-10 12c-0.354 0.424-0.296 1.055 0.128 1.408 0.187 0.157 0.415 0.233 0.64 0.232h7.867l-0.859 6.876c-0.069 0.548 0.32 1.048 0.868 1.116 0.349 0.044 0.678-0.098 0.892-0.352l10-12c0.354-0.424 0.296-1.055-0.128-1.408-0.187-0.157-0.415-0.233-0.64-0.232h-7.867l0.859-6.876c0.069-0.548-0.32-1.048-0.868-1.116-0.349-0.044-0.678 0.098-0.892 0.352z"></path></symbol><symbol id="icon-zap-off" viewBox="0 0 24 24"><path d="M13.402 6.873l0.59-4.75c0.068-0.548-0.321-1.048-0.869-1.116-0.349-0.043-0.678 0.099-0.892 0.353l-2.43 2.92c-0.353 0.425-0.295 1.055 0.129 1.409s1.055 0.296 1.408-0.129l0.249-0.299-0.17 1.366c-0.068 0.548 0.321 1.048 0.869 1.116s1.048-0.321 1.116-0.869zM19.338 13.551l2.43-2.91c0.354-0.424 0.297-1.055-0.127-1.409-0.188-0.156-0.416-0.233-0.641-0.232h-5.34c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.202l-1.060 1.269c-0.354 0.424-0.297 1.055 0.127 1.409s1.055 0.297 1.409-0.127zM12.961 14.375l1.686 1.686-2.232 2.678zM8.067 9.481l3.519 3.519h-6.451zM0.293 1.707l6.354 6.354-4.415 5.299c-0.354 0.424-0.296 1.055 0.128 1.408 0.187 0.157 0.415 0.233 0.64 0.232h7.867l-0.859 6.876c-0.069 0.548 0.32 1.048 0.868 1.116 0.349 0.044 0.678-0.098 0.892-0.352l4.299-5.159 6.226 6.226c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-zoom-in" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM8 12h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-zoom-out" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM8 12h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-business-unit" viewBox="0 0 24 24"><path d="M2.99966 1.00003C2.44737 1.00002 2 1.44774 2 2.00003V20C2 20.405 2.081 20.793 2.228 21.148C2.38 21.516 2.603 21.846 2.879 22.122C3.155 22.398 3.485 22.621 3.853 22.773C4.207 22.919 4.595 23 5 23H19C19.405 23 19.793 22.919 20.148 22.772C20.516 22.62 20.846 22.397 21.122 22.121C21.398 21.845 21.621 21.515 21.773 21.147C21.919 20.793 22 20.405 22 20V2.00001C22 1.44773 21.5528 1.00002 21.0005 1.00001C17.1935 0.999983 12.8183 1.00002 12 1.00001C11.0909 0.999999 6.46317 1.00004 2.99966 1.00003ZM16 21V12C16 11.448 15.552 11 15 11H9C8.448 11 8 11.448 8 12V21H5C4.863 21 4.734 20.973 4.618 20.925C4.496 20.875 4.386 20.8 4.293 20.707C4.2 20.614 4.126 20.504 4.075 20.382C4.027 20.266 4 20.137 4 20V4C4 3.44771 4.44772 3 5 3L18.9294 3C19.48 3 19.927 3.44503 19.9294 3.99559L20 20C20 20.137 19.973 20.266 19.925 20.382C19.875 20.504 19.8 20.614 19.707 20.707C19.614 20.8 19.504 20.874 19.382 20.925C19.266 20.973 19.137 21 19 21H16ZM10 21V13H14V21H10Z"></path></symbol><symbol id="icon-loading" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.0188 3 8.09294 3.65373 6.52115 4.85982C4.94935 6.0659 3.81944 7.75692 3.30667 9.67062C2.7939 11.5843 2.92691 13.6137 3.68509 15.4441C4.44326 17.2745 5.78422 18.8036 7.5 19.7942C9.21577 20.7848 11.2105 21.1816 13.1747 20.923C15.139 20.6644 16.963 19.7649 18.3639 18.3639C19.7649 16.963 20.6644 15.139 20.923 13.1747C21.1816 11.2105 20.7848 9.21577 19.7942 7.5L21.5263 6.5C22.737 8.59706 23.2219 11.035 22.9059 13.4358C22.5898 15.8365 21.4904 18.0659 19.7782 19.7782C18.0659 21.4904 15.8365 22.5898 13.4358 22.9059C11.035 23.2219 8.59706 22.737 6.5 21.5263C4.40294 20.3155 2.76399 18.4467 1.83733 16.2095C0.91067 13.9724 0.748096 11.4919 1.37482 9.15298C2.00154 6.81402 3.38254 4.74721 5.30362 3.27311C7.22471 1.79901 9.57852 1 12 1V3Z"></path></symbol><symbol id="icon-half-loading" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21V23C9.08262 23 6.28472 21.8411 4.22182 19.7782C2.15892 17.7153 1 14.9174 1 12C1 9.08262 2.15893 6.28473 4.22183 4.22183C6.28473 2.15893 9.08262 1 12 1V3Z"></path></symbol><symbol id="logo" viewBox="0 0 104 70"><path d="M78.4671 13.7929C78.4671 13.4299 78.4671 12.9762 78.6501 12.5225C78.8332 12.0688 79.0162 11.6151 79.3823 11.1614C79.7483 10.7076 80.2059 10.3447 80.755 10.0724C81.3041 9.80022 82.0362 9.61873 82.9514 9.52799C83.5005 9.52799 84.0496 9.52799 84.5072 9.61873C84.9647 9.70947 85.4223 9.89096 85.7884 10.1632C86.1544 10.4354 86.429 10.7076 86.7035 11.1614C86.9781 11.6151 87.0696 12.0688 87.0696 12.6132C87.0696 13.1577 87.0696 13.7021 86.8866 14.1559C86.7035 14.7003 86.5205 15.154 86.1545 15.517C85.7884 15.9707 85.3308 16.2429 84.7817 16.5152C84.2326 16.7874 83.592 16.9689 82.7684 16.9689C81.3956 17.0596 80.3889 16.7874 79.6568 16.1522C78.9247 15.6985 78.5586 14.8818 78.4671 13.7929Z"></path><path d="M100.797 38.9285C99.9733 39.5637 99.0581 40.1081 98.143 40.6526C97.2278 41.197 96.2211 41.6507 95.2145 42.0137C94.2078 42.3767 93.2926 42.5582 92.3775 42.6489C91.5538 42.6489 90.9132 42.6489 90.2726 42.3767C89.7235 42.1952 89.2659 41.923 88.8999 41.4692C88.5338 41.1063 88.2592 40.5618 88.0762 40.0174C87.8932 39.4729 87.8017 38.8377 87.8017 38.1118C87.7102 37.1136 87.8017 36.0247 87.9847 34.6636C88.2592 31.9413 88.5338 30.3987 88.6253 30.0357C88.8083 29.4005 89.1744 27.8579 89.7235 25.5893C90.2726 23.6837 90.5471 22.5041 90.6387 21.8689C90.7302 21.5059 90.9132 21.1429 91.2793 20.78C91.5538 20.5077 91.9199 20.2355 92.3775 20.054C92.7435 19.8725 93.2011 19.6911 93.6587 19.6003C94.1163 19.5096 94.4823 19.4188 94.8484 19.4188C95.489 19.4188 95.9466 19.5096 96.2211 19.6911C96.4957 19.9633 96.5872 20.2355 96.5872 20.6892C96.5872 21.0522 96.5872 21.5059 96.4042 22.1411C96.3127 22.7763 96.1296 23.5022 95.9466 24.3189C95.7636 25.1356 95.489 26.1338 95.2145 27.4042C94.8484 28.6746 94.6654 29.7635 94.5739 30.6709C94.4823 31.5783 94.2993 32.4857 94.1163 33.3024C93.9332 34.2099 93.8417 35.0265 93.9332 35.6617C93.9332 36.3877 94.1163 36.9321 94.2078 37.2951C94.3908 37.6581 94.7569 37.9303 95.2145 37.8396C95.7636 37.8396 96.4042 37.5673 97.0448 37.2044C97.6854 36.7506 98.4175 36.2969 99.0581 35.6617C99.6987 35.0265 100.431 34.4821 101.071 33.8469C103.085 31.5783 104 32.9395 104 35.2988C104 35.934 103.908 36.1154 103.451 36.5692C102.444 37.5673 101.163 38.5655 100.797 38.9285Z"></path><path d="M91.0963 13.1577C91.0963 12.7947 91.0963 12.341 91.2793 11.8873C91.4623 11.4336 91.6454 10.9798 92.0114 10.5261C92.3775 10.0724 92.8351 9.70946 93.3842 9.43723C93.9333 9.165 94.6654 8.98352 95.5805 8.89277C96.1296 8.89277 96.6787 8.89277 97.1363 8.98351C97.5939 9.07426 98.0515 9.25574 98.4175 9.52797C98.7836 9.8002 99.0581 10.0724 99.3327 10.5261C99.6072 10.9798 99.6987 11.4336 99.6987 11.978C99.6987 12.5225 99.6987 13.0669 99.5157 13.5206C99.3327 14.0651 99.1496 14.5188 98.7836 14.8818C98.4175 15.3355 97.9599 15.6077 97.4109 15.8799C96.8618 16.1522 96.2211 16.3337 95.3975 16.3337C94.0248 16.4244 93.0181 16.1522 92.286 15.517C91.5538 15.154 91.1878 14.2466 91.0963 13.1577Z"></path><path d="M57.4184 36.6599C57.4184 37.0229 57.5099 37.4766 57.5099 37.8396C57.6014 38.2026 57.6929 38.5655 57.876 38.8378C58.059 39.11 58.242 39.3822 58.5166 39.5637C58.7911 39.7452 59.0657 39.8359 59.4318 39.8359C59.9808 39.8359 60.5299 39.5637 60.9875 39.0192C61.4451 38.4748 61.8112 37.8396 62.0857 37.1137C62.3603 36.3877 62.6348 35.6618 62.8178 34.8451C63.0009 34.1192 63.0924 33.484 63.0924 32.9395L64.4651 25.3171C63.8245 25.3171 63.1839 25.4986 62.6348 25.8616C61.9942 26.2246 61.4451 26.6783 60.9875 27.2227C60.4384 27.7672 59.9808 28.4024 59.6148 29.1283C59.1572 29.8543 58.7911 30.6709 58.4251 31.7599C58.059 32.758 57.7845 33.6654 57.6014 34.4821C57.4184 35.2081 57.4184 35.934 57.4184 36.6599ZM44.9722 26.3153C45.6128 25.0449 46.2535 23.593 46.9856 21.9597C47.7177 20.3263 48.3583 18.6929 48.9989 16.9688C49.6395 15.2447 50.1886 13.6114 50.5547 11.8873C51.0123 10.2539 51.2868 8.62053 51.2868 7.25939C51.2868 6.80568 51.1953 6.44271 51.1953 6.07974C51.1953 5.71677 51.1038 5.62603 50.9208 5.62603C50.4632 5.62603 50.0056 5.989 49.548 6.53346C49.0904 7.16865 48.6329 7.98534 48.1753 8.9835C47.7177 9.98167 47.1686 11.7058 46.6195 13.9743C46.0704 16.2429 45.7044 17.4226 45.7044 17.4226C45.7044 17.4226 45.5213 18.5115 45.2468 20.5985C45.1553 22.8671 44.9722 24.7727 44.9722 26.3153ZM87.3441 40.0174C86.7035 40.4711 86.0629 40.8341 85.4223 41.1971C84.5071 41.7415 83.5005 42.1952 82.4938 42.5582C81.4871 42.9212 80.5719 43.1027 79.6568 43.1934C78.8331 43.1934 78.1925 43.1934 77.5519 42.9212C77.0028 42.7397 76.5452 42.4675 76.1792 42.0137C75.8131 41.6508 75.5386 41.1063 75.3555 40.5619C75.3555 40.4711 75.3555 40.3804 75.264 40.3804C74.9895 40.7434 74.6234 41.0156 74.2573 41.2878C73.5252 41.923 72.7016 42.4675 71.8779 42.9212C71.0543 43.3749 70.1391 43.6471 69.3155 43.6471C68.3088 43.7379 67.3936 43.3749 66.6615 42.8304C65.9294 42.1952 65.2888 41.2878 64.7397 40.0174C64.3736 40.4711 63.916 40.9248 63.3669 41.3786C62.8178 41.8323 62.2687 42.286 61.6281 42.6489C60.9875 43.0119 60.3469 43.3749 59.6148 43.6471C58.8827 43.9193 58.242 44.1008 57.5099 44.1008C56.7778 44.1008 56.0457 44.0101 55.3135 43.7379C54.5814 43.4656 53.9408 43.1027 53.3917 42.5582C53.2087 42.3767 53.0256 42.1952 52.8426 42.0137C52.385 42.286 51.8359 42.5582 51.2868 42.8304C50.6462 43.1934 50.0056 43.4656 49.365 43.7379C48.7244 44.0101 48.0838 44.1916 47.4432 44.3731C46.8025 44.5545 46.2535 44.6453 45.7044 44.6453C44.8807 44.6453 44.0571 44.3731 43.3249 43.6471C42.6843 43.1027 42.1352 42.286 41.5861 41.3786C40.3964 43.2841 39.0237 44.9175 37.5594 46.4601C35.6376 48.3657 33.9903 49.4546 32.8921 45.9157C32.343 44.1916 32.16 43.1934 32.343 41.923C32.5261 40.6526 32.8921 40.2896 33.7158 39.473C35.7291 37.5674 37.5594 35.6618 39.3898 33.5747C39.2982 32.9395 39.2982 32.3043 39.2067 31.5784C39.1152 30.0357 39.2982 28.0394 39.5728 25.4986C39.9389 22.9578 40.0304 21.6874 40.0304 21.6874C40.0304 21.6874 40.3049 20.417 40.854 17.7855C41.4031 15.2447 42.0437 13.1577 42.5928 11.5243C43.2334 9.98167 43.874 8.43905 44.6062 7.07791C45.3383 5.71677 46.1619 4.53712 46.9856 3.44821C47.8092 2.45005 48.7244 1.63336 49.6395 0.998167C50.5547 0.36297 51.5614 0.0907424 52.5681 0C53.3002 0 53.9408 0.0907424 54.3984 0.36297C54.856 0.635197 55.3135 0.998167 55.5881 1.36114C55.8626 1.81485 56.1372 2.26856 56.2287 2.90376C56.3202 3.44821 56.4117 4.08341 56.5032 4.62786C56.5948 6.07974 56.5032 7.62236 56.2287 9.16499C55.9541 10.7076 55.5881 12.2502 55.039 13.7929C54.4899 15.3355 53.9408 16.9688 53.2087 18.5115C52.4765 20.0541 51.7444 21.6874 51.0123 23.2301C50.2802 24.7727 49.4565 26.3153 48.6329 27.8579C47.8092 29.4006 47.1686 30.8524 46.4365 32.3043C46.345 32.4858 46.2535 32.6673 46.2535 32.9395C46.1619 33.2117 46.0704 33.484 46.0704 33.7562C45.9789 34.0284 45.9789 34.3914 45.8874 34.6636C45.7959 35.0266 45.7959 35.2988 45.7044 35.6618V36.0247C45.7044 36.3877 45.7959 36.8414 45.8874 37.2044C45.9789 37.5674 46.0704 37.9303 46.2535 38.2026C46.345 38.4748 46.528 38.747 46.711 38.9285C46.8941 39.11 46.9856 39.2007 47.0771 39.2007C47.3516 39.2007 47.7177 39.11 48.0838 38.9285C48.4498 38.747 48.9074 38.5655 49.2735 38.384C49.7311 38.1118 50.1886 37.9303 50.6462 37.5674C50.9208 37.3859 51.1038 37.2951 51.3783 37.1137C51.3783 36.1155 51.4699 35.2081 51.7444 34.2099C52.019 32.9395 52.4765 31.5784 53.1172 30.1265C53.7578 28.6746 54.3984 27.4042 55.222 26.3153C55.9541 25.2264 56.7778 24.319 57.6929 23.5023C58.6081 22.6856 59.5233 22.0504 60.6215 21.506C61.6281 20.9615 62.7263 20.6893 63.8245 20.6893C64.1906 20.6893 64.4651 20.6893 64.6482 20.8708C64.8312 20.9615 65.0142 21.143 65.1973 21.3245C65.3803 21.506 65.4718 21.6874 65.6548 21.8689C65.7463 22.0504 65.9294 22.1412 66.1124 22.2319C66.2954 22.3226 66.4785 22.3226 66.6615 22.3226C66.8445 22.3226 67.0276 22.3226 67.3021 22.3226C67.4852 22.3226 67.6682 22.3226 67.8512 22.3226C68.0342 22.3226 68.2173 22.3226 68.4003 22.3226C68.6749 22.3226 68.8579 22.3226 69.0409 22.3226C69.224 22.3226 69.407 22.4134 69.59 22.5949C69.7731 22.7764 69.8646 22.9578 69.9561 23.2301C70.0476 23.5023 70.1391 23.8653 70.1391 24.4097C70.1391 25.1357 70.1391 25.9523 70.0476 26.8598C69.9561 27.7672 69.773 28.6746 69.6815 29.6728C69.4985 30.6709 69.3155 31.7599 69.1324 32.9395C68.9494 34.2099 68.8579 35.2081 68.8579 36.0247C68.8579 36.7507 68.9494 37.2951 69.1324 37.6581C69.3155 38.0211 69.59 38.2026 70.0476 38.2026C70.4137 38.2026 70.6882 38.1118 71.0543 37.9303C71.4203 37.7489 71.7864 37.5674 72.1525 37.2044C72.5185 36.9322 72.8846 36.5692 73.2507 36.297C73.6167 35.934 73.8913 35.571 74.2573 35.2081C74.7149 34.6636 75.1725 34.1192 75.6301 33.484C75.8131 31.7599 75.9961 30.7617 76.0877 30.4895C76.2707 29.8543 76.6367 28.3116 77.1858 26.0431C77.7349 24.1375 78.0095 22.9578 78.101 22.3226C78.1925 21.9597 78.3755 21.5967 78.7416 21.2337C79.0162 20.9615 79.3822 20.6893 79.8398 20.5078C80.2059 20.3263 80.6635 20.1448 81.121 20.0541C81.5786 19.9633 81.9447 19.8726 82.3107 19.8726C82.9513 19.8726 83.4089 19.9633 83.6835 20.1448C83.958 20.417 84.0495 20.6893 84.0495 21.143C84.0495 21.506 84.0495 21.9597 83.8665 22.5949C83.775 23.2301 83.592 23.956 83.4089 24.7727C83.2259 25.5894 82.9513 26.5875 82.6768 27.8579C82.3107 29.1283 82.1277 30.2172 82.0362 31.1247C81.9447 32.0321 81.7616 32.9395 81.5786 33.7562C81.3956 34.6636 81.3041 35.4803 81.3956 36.1155C81.3956 36.8414 81.5786 37.3859 81.6701 37.7489C81.8531 38.1118 82.2192 38.384 82.6768 38.2933C83.2259 38.2933 83.8665 38.0211 84.5071 37.6581C85.1477 37.2044 85.8799 36.7507 86.5205 36.1155C86.795 35.8433 87.1611 35.571 87.4356 35.2988C87.3441 36.297 87.3441 37.1137 87.3441 37.9303C87.1611 38.8378 87.2526 39.473 87.3441 40.0174Z"></path><path d="M16.4193 46.3693C17.7005 46.2786 18.7987 46.0064 19.8969 45.4619C20.9951 44.9174 21.9102 44.1915 22.7339 43.3748C23.5575 42.4674 24.3812 41.4692 25.0218 40.2896C25.6624 39.1099 26.303 37.8395 26.8521 36.5691C27.4012 35.208 27.7672 33.8469 28.1333 32.4857C28.4994 31.0338 28.7739 29.6727 28.957 28.3116C29.14 26.9504 29.323 25.5893 29.4145 24.3189C29.5061 23.0485 29.5061 21.8689 29.4145 20.8707C29.323 19.3281 29.14 17.9669 28.6824 16.6965C28.3163 15.4261 27.7672 14.2465 27.0351 13.3391C26.303 12.4316 25.4793 11.615 24.3812 11.1612C23.3745 10.6168 22.1848 10.4353 20.812 10.526C19.3478 10.6168 17.975 10.9798 16.6938 11.7964C15.4126 12.5224 14.1314 13.5205 13.0332 14.7909C11.935 16.0613 10.8368 17.4225 9.92163 19.0558C9.00647 20.6892 8.27434 22.3226 7.63373 24.1374C6.99312 25.8615 6.53554 27.6764 6.26099 29.4912C5.98644 31.3061 5.80341 33.0302 5.89493 34.6635C5.98644 36.4784 6.26099 38.1118 6.81009 39.5636C7.35918 41.1063 7.9998 42.3767 8.91496 43.4656C9.83012 44.5545 10.8368 45.3712 12.118 45.9156C13.4908 46.1878 14.8635 46.4601 16.4193 46.3693ZM16.1447 51.8139C13.7653 51.9046 11.6604 51.5416 9.7386 50.725C7.81676 49.9083 6.16948 48.6379 4.79674 47.0045C3.424 45.3712 2.32581 43.3748 1.50216 41.1063C0.678519 38.8377 0.220939 36.2969 0.0379072 33.4839C-0.0536088 31.9413 0.0379071 30.3986 0.129423 28.856C0.312455 27.3134 0.495487 25.68 0.861551 24.0467C1.22761 22.4133 1.68519 20.8707 2.32581 19.3281C2.8749 17.7854 3.60703 16.3336 4.43067 14.9724C5.25432 13.6113 6.16948 12.3409 7.17615 11.0705C8.18283 9.89084 9.37254 8.89268 10.6538 7.98525C11.935 7.07783 13.3077 6.35189 14.8635 5.89817C16.3278 5.35372 17.975 5.08149 19.7138 4.99075C22.0933 4.90001 24.1981 5.17223 26.12 5.98892C28.0418 6.71486 29.5976 7.80377 30.9703 9.34639C32.343 10.7983 33.3497 12.5224 34.1734 14.6095C34.997 16.6965 35.3631 18.9651 35.5461 21.5059C35.6376 23.593 35.5461 25.7708 35.2716 28.0393C34.997 30.3079 34.4479 32.5765 33.8073 34.7543C33.0752 36.9321 32.2515 39.1099 31.1533 41.1063C30.0551 43.1026 28.7739 44.9174 27.3097 46.4601C25.8454 48.0027 24.1981 49.2731 22.2763 50.2713C20.3545 51.1787 18.3411 51.7231 16.1447 51.8139Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.4507 60.7068C36.3697 51.1788 66.2954 47.3676 97.0448 48.5473C99.4242 48.5473 98.2345 50.2714 97.2278 51.9048C96.5872 52.9937 96.3127 52.7215 94.2993 52.54C78.7416 51.2696 59.7063 53.3566 44.4231 56.6234C30.8788 59.5271 18.7987 62.5216 7.72525 69.5996C6.53554 70.3255 5.62038 70.0533 5.34583 68.8736C5.1628 66.7865 5.34583 65.0624 5.80341 63.1568C6.16947 62.0679 6.16947 61.1605 7.4507 60.7068Z"></path></symbol>', 286);
function M9(e, c, t, s, n, o) {
  return v(), p("svg", g9, [
    y("defs", null, [
      b9,
      X(e.$slots, "default")
    ])
  ]);
}
const z9 = /* @__PURE__ */ G(y9, [["render", M9]]);
const w9 = (e) => (U0("data-v-cb4d7c97"), e = e(), X0(), e), x9 = { class: "nice-switch-box-wrapper" }, _9 = ["disabled"], C9 = /* @__PURE__ */ w9(() => /* @__PURE__ */ y("div", { class: "nice-switch-handle" }, null, -1)), B9 = [
  C9
], k9 = ["for"], N9 = ["id", "disabled"], $9 = {
  name: "NiceSwitch"
}, O9 = /* @__PURE__ */ Object.assign($9, {
  props: {
    modelValue: {
      type: [Boolean, null],
      required: !0
    },
    title: {
      type: String,
      default: null
    },
    noMargin: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator(e) {
        return ["small", "large"].includes(e);
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    isInline: {
      type: Boolean,
      default: !1
    },
    isBlock: {
      type: Boolean,
      default: !1
    },
    titleLeft: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "primary",
      validator(e) {
        return [
          "primary",
          "default",
          "success",
          "warning",
          "danger",
          "info",
          "dark"
        ].includes(e);
      }
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = Math.random().toString(36).slice(2, 7), n = Q({
      get() {
        return t.modelValue;
      },
      set(i) {
        c("update:modelValue", i), c("change", i);
      }
    });
    function o() {
      t.disabled || (n.value = !n.value);
    }
    return (i, a) => {
      const d = R("NiceComponentHeader");
      return v(), p("div", {
        class: I(["nice-component nice-switch", [
          "nice-switch-" + t.type,
          t.size ? "nice-switch-" + t.size : "",
          { "no-margin": t.noMargin, active: C(n), disabled: t.disabled, "nice-is-inline": t.isInline, "nice-is-block": t.isBlock, "nice-is-title-left": e.titleLeft }
        ]])
      }, [
        t.isInline ? (v(), H(d, {
          key: 0,
          title: e.title
        }, null, 8, ["title"])) : M("", !0),
        y("div", x9, [
          y("button", {
            class: "nice-switch-box",
            onClick: o,
            disabled: t.disabled
          }, B9, 8, _9)
        ]),
        t.title ? (v(), p("div", {
          key: 1,
          class: "nice-switch-title",
          for: "nice-switch" + C(s)
        }, N(t.title), 9, k9)) : M("", !0),
        y("input", {
          type: "checkbox",
          id: "nice-switch" + C(s),
          disabled: t.disabled
        }, null, 8, N9)
      ], 2);
    };
  }
}), S9 = /* @__PURE__ */ G(O9, [["__scopeId", "data-v-cb4d7c97"]]);
const D9 = { class: "nice-table" }, T9 = { class: "nice-table-table-wrapper" }, V9 = { class: "nice-table-table" }, P9 = {
  key: 0,
  class: "w-0"
}, E9 = ["onClick"], q9 = { key: 1 }, F9 = { key: 0 }, I9 = { key: 0 }, A9 = { class: "list" }, W9 = ["onClick"], Y9 = {
  key: 0,
  class: "w-0"
}, L9 = ["innerHTML"], j9 = { class: "actions-td-inner" }, H9 = {
  key: 2,
  class: "nice-table-footer"
}, R9 = { class: "pagination-info" }, U9 = {
  key: 0,
  class: "pagination"
}, X9 = {
  key: 1,
  class: "pagination-dropdown"
}, Q9 = {
  name: "NiceTable"
}, G9 = /* @__PURE__ */ Object.assign(Q9, {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
      // {
      //   name: "Created",
      //   key: "created_at",
      //   class: "text-right",
      //   formatter: (value, row) => formatDateWithTime(value),
      //   fieldClass: (value, row) => "badge " + CommonService.types[value],
      //   html: (value, row) => `<div>${value}</div>`,
      // },
    },
    actions: {
      type: Array,
      default: () => []
      // {
      //   text: "Edit",
      //   icon: "icon-edit",
      //   type: "primary",
      //   to: (row) => ({
      //     name: "app.sandbox",
      //     query: { test: row.id },
      //   }),
      //   function: (row) => {
      //     this.$router.push({ name: "app.sandbox" });
      //   },
      // }
    },
    selectMultiple: {
      type: Boolean,
      default: !1
    },
    showFooter: {
      type: Boolean,
      default: !1
    },
    showOrder: {
      type: Boolean,
      default: !1
    },
    showLimit: {
      type: Boolean,
      default: !1
    },
    paginated: {
      type: Boolean,
      default: !1
    },
    freezeFirstColumn: {
      type: Boolean,
      default: !1
    },
    freezeLastColumn: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    showToggleColumns: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["selected", "orderChange", "pageChange", "limitChange", "filterChange"],
  setup(e, { emit: c }) {
    const t = e, s = f2(), n = p2(), o = t0("getQuery"), i = W(void 0), a = W(50), d = [
      { id: 10, value: 10 },
      { id: 20, value: 20 },
      { id: 50, value: 50 },
      { id: 100, value: 100 }
    ], r = W(1);
    let l = null;
    const u = Q(() => (r.value - 1) * a.value), h = Q(() => {
      var g, V;
      return ((V = (g = t.data) == null ? void 0 : g._metadata) == null ? void 0 : V.count) || 0;
    }), f = Q(() => Math.ceil(h.value / a.value) || 1), x = Q(() => Array.from({ length: f.value }, (g, V) => ({ id: V + 1, value: V + 1 }))), z = Q(() => t.columns), w = Q(() => z.value.filter((g) => !g.disabled)), B = Q(() => {
      let g = t.data;
      if (g.forEach((V) => {
        V._selected === void 0 && (V._selected = !1);
      }), i.value !== void 0) {
        const V = i.value.replace("-", "");
        g.sort((P, k) => {
          if (i.value[0] != "-") {
            const E = P;
            P = k, k = E;
          }
          return String(P[V]).localeCompare(String(k[V]));
        });
      }
      return g;
    }), q = Q(() => B.value.filter((g) => g._selected)), D = Q(() => q.value.length == B.value.length);
    function m() {
      let g = !0;
      D.value && (g = !1), B.value.forEach((V) => V._selected = g), S();
    }
    function _(g) {
      g._selected = !g._selected, S();
    }
    function S() {
      c("selected", q.value);
    }
    function F(g) {
      g.disabled = !g.disabled;
    }
    function Y(g) {
      g.key == i.value ? i.value = "-" + g.key : i.value && i.value[0] === "-" && i.value === "-" + g.key ? i.value = void 0 : i.value = g.key, n.push({
        query: { ...s.query, ordering: i.value }
      }), setTimeout(() => {
        c("orderChange", i.value);
      }), j();
    }
    async function A(g) {
      L(g.id);
    }
    async function L(g) {
      s.query.page != g && (r.value = g, n.replace({
        path: s.path,
        query: { ...s.query, page: r.value, offset: u.value, limit: a.value }
      }), setTimeout(() => {
        c("pageChange", g);
      }), j());
    }
    function $(g) {
      s.query.limit != g && (a.value = g, n.push({
        path: s.path,
        query: { ...s.query, limit: a.value }
      }), setTimeout(() => {
        c("limitChange", a);
      }), j());
    }
    function j() {
      setTimeout(() => {
        c("filterChange", { ordering: i.value, page: r.value, offset: u.value, limit: a.value });
      });
    }
    return u0(async () => {
      const g = await o();
      i.value = g.ordering, t.paginated && (a.value = Number(g.limit) || 50, r.value = Number(g.page) || 1, l = x[Number(g.page) || 1], L(r.value));
    }), (g, V) => {
      const P = R("NiceIcon"), k = R("NiceNoData"), E = R("NiceDropdown");
      return v(), p("div", D9, [
        y("div", T9, [
          y("table", V9, [
            y("thead", null, [
              y("tr", null, [
                t.selectMultiple ? (v(), p("th", P9, [
                  T(Y0, {
                    modelValue: C(D),
                    "no-margin": "",
                    onClick: m
                  }, null, 8, ["modelValue"])
                ])) : M("", !0),
                (v(!0), p(Z, null, J(C(w), (O) => (v(), p("th", {
                  key: O.key,
                  class: I(O.class)
                }, [
                  t.showOrder ? (v(), p("div", {
                    key: 0,
                    class: I(["table-th", {
                      "active asc": i.value == O.key,
                      "active desc": i.value == "-" + O.key
                    }]),
                    onClick: (b) => Y(O)
                  }, [
                    y("span", null, N(O.name), 1),
                    t.showOrder ? (v(), H(P, {
                      key: 0,
                      icon: "icon-bar-chart",
                      class: "table-order"
                    })) : M("", !0)
                  ], 10, E9)) : (v(), p("span", q9, N(O.name), 1))
                ], 2))), 128)),
                t.actions.length ? (v(), p("th", {
                  key: 1,
                  class: I(["actions-td w-0", { "freeze-column-right": t.freezeLastColumn }])
                }, [
                  !t.showToggleColumns && !t.showFooter && C(B) && C(B).length ? (v(), p("span", F9, [
                    y("span", null, N(C(B).length), 1),
                    C(B)._metadata ? (v(), p("span", I9, " / " + N(C(B)._metadata.count), 1)) : M("", !0)
                  ])) : M("", !0),
                  t.showToggleColumns ? (v(), H(Z0, {
                    key: 1,
                    class: "actions-columns",
                    placement: "bottom-end",
                    "no-padding": ""
                  }, {
                    trigger: e0(() => [
                      T(P, { icon: "icon-plus-circle" })
                    ]),
                    content: e0(() => [
                      y("div", A9, [
                        (v(!0), p(Z, null, J(C(z), (O) => (v(), p("div", {
                          class: "element",
                          key: O.key,
                          onClick: (b) => F(O)
                        }, [
                          T(Y0, {
                            modelValue: !O.disabled,
                            title: O.name,
                            "no-margin": ""
                          }, null, 8, ["modelValue", "title"])
                        ], 8, W9))), 128))
                      ])
                    ]),
                    _: 1
                  })) : M("", !0)
                ], 2)) : M("", !0)
              ])
            ]),
            y("tbody", null, [
              (v(!0), p(Z, null, J(C(B), (O) => (v(), p("tr", {
                key: O.id
              }, [
                t.selectMultiple ? (v(), p("td", Y9, [
                  T(Y0, {
                    modelValue: O._selected,
                    onClick: (b) => _(O),
                    "no-margin": ""
                  }, null, 8, ["modelValue", "onClick"])
                ])) : M("", !0),
                (v(!0), p(Z, null, J(C(w), (b) => {
                  var c0, N0;
                  return v(), p("td", {
                    key: b.key,
                    class: I(b.class)
                  }, [
                    b.component ? (v(), H(y1((c0 = b.component()) == null ? void 0 : c0.instance), R2(h2({ key: 0 }, (N0 = b.component(O[b.key], O)) == null ? void 0 : N0.props)), null, 16)) : M("", !0),
                    !b.component && b.html ? (v(), p("span", {
                      key: 1,
                      innerHTML: b.html(O[b.key], O)
                    }, null, 8, L9)) : M("", !0),
                    !b.component && !b.html ? (v(), p("span", {
                      key: 2,
                      class: I(b.fieldClass ? b.fieldClass(O[b.key], O) : "")
                    }, N(b.formatter ? b.formatter(O[b.key], O) : O[b.key]), 3)) : M("", !0)
                  ], 2);
                }), 128)),
                t.actions.length ? (v(), p("td", {
                  key: 1,
                  class: I(["actions-td", { "freeze-column-right": t.freezeLastColumn }])
                }, [
                  y("div", j9, [
                    (v(!0), p(Z, null, J(t.actions, (b) => (v(), H(y1(b.to ? b.disabled ? "div" : "router-link" : "div"), {
                      key: b,
                      to: b.to ? b.to(O) : null
                    }, {
                      default: e0(() => [
                        T(B0, {
                          icon: b.icon,
                          type: b.type,
                          text: b.text,
                          disabled: b.disabled,
                          size: "small",
                          onClick: (c0) => b.function(O)
                        }, null, 8, ["icon", "type", "text", "disabled", "onClick"])
                      ]),
                      _: 2
                    }, 1032, ["to"]))), 128))
                  ])
                ], 2)) : M("", !0)
              ]))), 128))
            ])
          ])
        ]),
        e.loading ? (v(), H(T1, { key: 0 })) : M("", !0),
        !e.loading && t.data.length == 0 ? (v(), H(k, { key: 1 })) : M("", !0),
        t.showFooter ? (v(), p("div", H9, [
          y("div", R9, N(C(h)) + " " + N(g.$t("Nice", "total")), 1),
          t.paginated && C(f) > 1 && C(f) < 5 ? (v(), p("div", U9, [
            (v(!0), p(Z, null, J(C(f), (O) => (v(), H(B0, {
              size: "small",
              plain: r.value !== O,
              key: O,
              class: I(r.value === O ? "btn-primary" : "btn-default"),
              onClick: (b) => L(O)
            }, {
              default: e0(() => [
                f0(N(O), 1)
              ]),
              _: 2
            }, 1032, ["plain", "class", "onClick"]))), 128))
          ])) : M("", !0),
          t.paginated && C(f) > 1 && C(f) > 5 ? (v(), p("div", X9, [
            T(E, {
              modelValue: C(l),
              "onUpdate:modelValue": V[0] || (V[0] = (O) => B1(l) ? l.value = O : l = O),
              values: C(x),
              noMargin: "",
              onChange: A
            }, null, 8, ["modelValue", "values"])
          ])) : M("", !0),
          t.showLimit ? (v(), H(E, {
            key: 2,
            modelValue: a.value,
            "onUpdate:modelValue": V[1] || (V[1] = (O) => a.value = O),
            class: I({ "dropdown-small": C(f) > 1 && C(f) < 5 }),
            values: d,
            keyOnly: "",
            noMargin: "",
            onChange: $
          }, null, 8, ["modelValue", "class"])) : M("", !0)
        ])) : M("", !0)
      ]);
    };
  }
}), Z9 = /* @__PURE__ */ G(G9, [["__scopeId", "data-v-ffb050a0"]]);
const J9 = { class: "input-group" }, K9 = {
  key: 0,
  class: "input-group-suffix"
}, e6 = ["placeholder", "autocomplete", "type", "rows", "disabled"], t6 = {
  key: 1,
  class: "input-group-append input-group-icon"
}, c6 = {
  key: 2,
  class: "input-group-append"
}, s6 = {
  key: 0,
  class: "nice-component-message"
}, n6 = {
  name: "NiceTextarea"
}, a6 = /* @__PURE__ */ Object.assign(n6, {
  props: {
    modelValue: {
      type: [String, Number, null],
      required: !0
    },
    title: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    rows: {
      type: Number,
      default: 2
    },
    autocomplete: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = Q({
      get() {
        return t.modelValue;
      },
      set(n) {
        c("update:modelValue", n), c("change", n);
      }
    });
    return (n, o) => {
      const i = R("NiceComponentHeader");
      return v(), p("div", {
        class: I(["nice-component nice-textarea", { "no-margin": e.noMargin, active: C(s), disabled: e.disabled }])
      }, [
        T(i, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        y("div", J9, [
          n.$slots.suffix ? (v(), p("div", K9, [
            X(n.$slots, "suffix", {}, void 0, !0)
          ])) : M("", !0),
          C0(y("textarea", {
            "onUpdate:modelValue": o[0] || (o[0] = (a) => B1(s) ? s.value = a : null),
            placeholder: e.placeholder,
            autocomplete: e.autocomplete,
            type: e.type,
            rows: e.rows,
            disabled: e.disabled
          }, null, 8, e6), [
            [l1, C(s)]
          ]),
          e.icon ? (v(), p("div", t6, [
            T(D2, { icon: e.icon }, null, 8, ["icon"])
          ])) : M("", !0),
          n.$slots.append ? (v(), p("div", c6, [
            X(n.$slots, "append", {}, void 0, !0)
          ])) : M("", !0)
        ]),
        e.message ? (v(), p("div", s6, N(e.message), 1)) : M("", !0)
      ], 2);
    };
  }
}), o6 = /* @__PURE__ */ G(a6, [["__scopeId", "data-v-483407b0"]]);
const i6 = { class: "nice-toasts" }, l6 = {
  name: "NiceToast"
}, r6 = /* @__PURE__ */ Object.assign(l6, {
  setup(e) {
    const t = W([]), s = t0("nice");
    u0(() => {
      s.onToast(({ message: i, type: a }) => {
        n(i, a);
      });
    });
    function n(i, a) {
      const d = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10),
        message: i,
        type: a
      };
      t.value.unshift(d), setTimeout(() => {
        o(d);
      }, 3e3);
    }
    function o(i) {
      const a = t.value.findIndex((d) => d.id == i.id);
      a >= 0 && t.value.splice(a, 1);
    }
    return (i, a) => (v(), p("div", i6, [
      T(v2, {
        name: "toast",
        key: "div"
      }, {
        default: e0(() => [
          (v(!0), p(Z, null, J(t.value, (d) => (v(), p("div", {
            class: I(["nice-toast", ["nice-toast-" + d.type]]),
            key: d.id
          }, N(d.message), 3))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), d6 = /* @__PURE__ */ G(r6, [["__scopeId", "data-v-95aff90a"]]);
const u6 = {
  name: "NiceUpload",
  components: {
    NiceComponentHeader: g0
  },
  props: {
    modelValue: {
      type: [Array, Object, String, null],
      required: !0
    },
    title: {
      type: String,
      default: null
    },
    accept: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    caption: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    error: [Object, String, null]
  },
  emits: ["change", "update:modelValue"],
  data() {
    return {
      file: null,
      loading: !1,
      isDragging: !1,
      isOnTarget: !1
    };
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e), this.$emit("change", e);
      }
    },
    errorMessage() {
      if (typeof this.error == "string")
        return this.error;
      const e = T2(this.error, ["response", "data", this.prop]);
      return typeof e == "object" ? e.join("-") : e;
    }
  },
  methods: {
    fileChanged(e) {
      this.isDragging = !1, this.isOnTarget = !1, this.localValue = e.target.files, this.file = null;
    },
    dragChanged(e) {
      this.isOnTarget = e.type == "dragover";
    }
    // documentDragChanged(event) {
    //   console.log("documentDragChanged", event, event.type)
    // }
  }
  // mounted() {
  //   document.body.addEventListener('dragleave', this.documentDragChanged);
  //   document.body.addEventListener('dragstart', this.documentDragChanged);
  //   document.body.addEventListener('dragend', this.documentDragChanged);
  //   document.body.addEventListener('drag', this.documentDragChanged);
  // },
  // unmounted() {
  //   window.removeEventListener('dragleave', this.documentDragChanged);
  //   window.removeEventListener('dragstart', this.documentDragChanged);
  //   window.removeEventListener('dragend', this.documentDragChanged);
  //   window.removeEventListener('drag', this.documentDragChanged);
  // },
}, h6 = ["modelValue", "placeholder", "required", "accept", "disabled"], v6 = {
  key: 0,
  class: "nice-upload-overlay"
}, f6 = { class: "nice-upload-overlay-message" }, p6 = {
  key: 1,
  class: "nice-upload-overlay"
};
function m6(e, c, t, s, n, o) {
  const i = R("NiceComponentHeader"), a = R("NiceIcon"), d = R("NiceLoading");
  return v(), p("div", {
    class: I(["nice-component nice-upload", { "no-margin": t.noMargin, active: o.localValue, disabled: t.disabled }])
  }, [
    T(i, {
      title: t.title,
      required: t.required,
      caption: t.caption
    }, null, 8, ["title", "required", "caption"]),
    y("div", {
      class: I(["input-group", { dragging: n.isDragging, "on-target": n.isOnTarget }]),
      onDragenter: c[1] || (c[1] = (...r) => o.dragChanged && o.dragChanged(...r)),
      onDragleave: c[2] || (c[2] = (...r) => o.dragChanged && o.dragChanged(...r)),
      onDragover: c[3] || (c[3] = (...r) => o.dragChanged && o.dragChanged(...r)),
      onDragend: c[4] || (c[4] = (...r) => o.dragChanged && o.dragChanged(...r)),
      onDrop: c[5] || (c[5] = (...r) => o.dragChanged && o.dragChanged(...r))
    }, [
      y("input", {
        modelValue: n.file,
        placeholder: t.placeholder,
        required: t.required,
        accept: t.accept,
        type: "file",
        onChange: c[0] || (c[0] = (...r) => o.fileChanged && o.fileChanged(...r)),
        disabled: t.disabled
      }, null, 40, h6),
      o.localValue ? (v(), p("div", p6, [
        T(a, { icon: "icon-file" }),
        (v(!0), p(Z, null, J(o.localValue, (r) => (v(), p("div", {
          class: "nice-upload-overlay-message",
          key: r.name
        }, N(r.name), 1))), 128))
      ])) : (v(), p("div", v6, [
        T(a, { icon: "icon-upload" }),
        y("div", f6, N(t.placeholder || e.$t("Nice", "Upload file")), 1)
      ])),
      n.loading ? (v(), H(d, {
        key: 2,
        "full-div": ""
      })) : M("", !0)
    ], 34)
  ], 2);
}
const y6 = /* @__PURE__ */ G(u6, [["render", m6], ["__scopeId", "data-v-aa7d7890"]]);
const g6 = {
  key: 0,
  class: "nice-view-header"
}, b6 = {
  key: 2,
  class: "view-title"
}, M6 = {
  key: 1,
  class: "nice-view-footer"
}, z6 = {
  name: "NiceView"
}, w6 = /* @__PURE__ */ Object.assign(z6, {
  props: {
    title: {
      type: String,
      required: !1
    },
    icon: {
      type: String,
      required: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    flexBody: {
      type: Boolean,
      default: !1
    },
    isForm: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const c = e, t = C1(), s = Q(() => t.title || c.title || c.icon);
    return (n, o) => {
      const i = R("NiceIcon"), a = R("NiceLoading");
      return v(), H(y1(e.isForm ? "form" : "div"), {
        class: I(["nice-view", { "nice-view-no-header": !C(s), "nice-view-flex-body": e.flexBody }])
      }, {
        default: e0(() => [
          C(s) ? (v(), p("div", g6, [
            e.icon && !e.loading ? (v(), H(i, {
              key: 0,
              icon: e.icon,
              class: "view-header-icon"
            }, null, 8, ["icon"])) : M("", !0),
            e.loading ? (v(), H(a, {
              key: 1,
              class: "view-header-icon"
            })) : M("", !0),
            C(t).title || e.title ? (v(), p("div", b6, [
              X(n.$slots, "title", {}, () => [
                f0(N(e.title), 1)
              ], !0)
            ])) : M("", !0)
          ])) : M("", !0),
          y("div", {
            class: I(["nice-view-body", { "nice-view-body-flex": e.flexBody }])
          }, [
            X(n.$slots, "default", {}, void 0, !0)
          ], 2),
          C(t).footer ? (v(), p("div", M6, [
            X(n.$slots, "footer", {}, void 0, !0)
          ])) : M("", !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), x6 = /* @__PURE__ */ G(w6, [["__scopeId", "data-v-cffab31e"]]);
const _6 = (e) => (U0("data-v-bdde4e0c"), e = e(), X0(), e), C6 = {
  key: 0,
  class: "wrapper-header"
}, B6 = {
  key: 0,
  class: "wrapper-header-title-subtitle"
}, k6 = {
  key: 0,
  class: "wrapper-header-title"
}, N6 = {
  key: 1,
  class: "wrapper-header-subtitle"
}, $6 = /* @__PURE__ */ _6(() => /* @__PURE__ */ y("div", { class: "flex-grow" }, null, -1)), O6 = {
  key: 2,
  class: "wrapper-footer"
}, S6 = {
  name: "NiceWrapper"
}, D6 = /* @__PURE__ */ Object.assign(S6, {
  props: {
    title: {
      type: String,
      required: !1
    },
    subtitle: {
      type: String,
      required: !1
    },
    collapsable: {
      type: Boolean,
      required: !1
    },
    collapsed: {
      type: Boolean,
      default: !1
    },
    noBodyPadding: {
      type: Boolean,
      default: !1
    },
    noMargin: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = W(!e.collapsed);
    function s() {
      t.value = !t.value;
    }
    return (n, o) => (v(), p("div", {
      class: I(["nice-wrapper", { "no-margin": e.noMargin }])
    }, [
      n.$slots.header || e.title || e.subtitle || e.collapsable ? (v(), p("div", C6, [
        e.title || e.subtitle ? (v(), p("div", B6, [
          e.title ? (v(), p("div", k6, N(e.title), 1)) : M("", !0),
          e.subtitle ? (v(), p("div", N6, N(e.subtitle), 1)) : M("", !0)
        ])) : M("", !0),
        X(n.$slots, "header", {}, void 0, !0),
        $6,
        e.collapsable ? (v(), H(B0, {
          key: 1,
          class: I(["wrapper-header-chevron", { "rotate-180": !t.value }]),
          icon: "icon-chevron-down",
          naked: "",
          onClick: s
        }, null, 8, ["class"])) : M("", !0),
        e.collapsable ? (v(), p("div", {
          key: 2,
          class: "wrapper-header-toggler",
          onClick: s
        })) : M("", !0)
      ])) : M("", !0),
      t.value ? (v(), p("div", {
        key: 1,
        class: I(["wrapper-body", { "no-top-padding": n.$slots.header || e.title || e.subtitle, "no-padding": e.noBodyPadding }])
      }, [
        X(n.$slots, "default", {}, void 0, !0)
      ], 2)) : M("", !0),
      n.$slots.footer && t.value ? (v(), p("div", O6, [
        X(n.$slots, "footer", {}, void 0, !0)
      ])) : M("", !0)
    ], 2));
  }
}), T6 = /* @__PURE__ */ G(D6, [["__scopeId", "data-v-bdde4e0c"]]);
const V6 = { class: "nice-no-data" }, P6 = { class: "nice-no-data-message" }, E6 = {
  name: "NiceNoData"
}, q6 = /* @__PURE__ */ Object.assign(E6, {
  props: {
    message: String,
    icon: {
      type: String,
      default: "icon-alert-circle"
    }
  },
  setup(e) {
    const c = e, t = t0("$t"), s = W(c.message || t("Nice", "No data"));
    return (n, o) => {
      const i = R("NiceIcon");
      return v(), p("div", V6, [
        T(i, {
          class: "nice-no-data-icon",
          icon: c.icon
        }, null, 8, ["icon"]),
        y("div", P6, N(s.value), 1)
      ]);
    };
  }
}), F6 = /* @__PURE__ */ G(q6, [["__scopeId", "data-v-a5c7ad13"]]);
const I6 = { class: "input-group" }, A6 = ["placeholder", "disabled", "required"], W6 = { class: "nice-date-range-dropdown" }, Y6 = { class: "nice-date-range-buttons" }, L6 = {
  name: "NiceDateRange"
}, j6 = /* @__PURE__ */ Object.assign(L6, {
  props: {
    from: {
      type: [String, Date, null],
      required: !1
    },
    to: {
      type: [String, Date, null],
      required: !1
    },
    title: String,
    caption: String,
    noMargin: Boolean,
    required: Boolean,
    disabled: Boolean,
    loading: Boolean,
    placeholder: String,
    time: {
      default: !0,
      type: Boolean
    }
  },
  emits: ["change", "update:from", "update:to"],
  setup(e, { emit: c }) {
    const t = e, s = t0("$t"), n = W(null), o = W(""), i = W("d.M.yyyy"), a = [
      {
        name: s("Nice", "Today"),
        from: x1(/* @__PURE__ */ new Date()),
        to: h7(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "Yesterday"),
        from: g8(/* @__PURE__ */ new Date()),
        to: y7(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "This week"),
        from: P0(/* @__PURE__ */ new Date()),
        to: m7(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "This month"),
        from: f7(/* @__PURE__ */ new Date()),
        to: v7(/* @__PURE__ */ new Date())
      }
    ], d = W(null), r = W(null);
    u0(() => {
      t.time && (i.value = "d.M.yyyy HH:mm"), t.from && (d.value = t.from), t.to && (r.value = t.to), d.value || h(a[0]);
    });
    function l() {
    }
    function u() {
      if (m8(r.value, d.value)) {
        const z = d.value;
        d.value = r.value, r.value = z;
      }
      f();
    }
    function h(z) {
      d.value = z.from, r.value = z.to, f();
    }
    function f() {
      c("update:to", r.value), c("update:from", d.value), c("change", { from: d.value, to: r.value }), x();
    }
    function x() {
      o.value = r2(d.value, i.value) + " - " + r2(r.value, i.value);
    }
    return (z, w) => {
      const B = R("NiceIcon"), q = R("NiceButton"), D = R("NiceDate");
      return v(), p("div", {
        class: I(["nice-component nice-date-range", {
          disabled: e.disabled,
          "no-margin": e.noMargin
        }])
      }, [
        T(g0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        T(Z0, {
          "no-padding": "",
          placement: "bottom-start",
          ref_key: "popup",
          ref: n,
          class: "w-full",
          onChange: l
        }, {
          trigger: e0(() => [
            y("div", I6, [
              C0(y("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (m) => o.value = m),
                placeholder: e.placeholder || C(s)("Nice", "None"),
                disabled: e.disabled,
                required: e.required,
                onBlur: w[1] || (w[1] = (...m) => z.inputChanged && z.inputChanged(...m))
              }, null, 40, A6), [
                [l1, o.value]
              ]),
              T(B, {
                class: "icon",
                icon: "icon-calendar"
              })
            ])
          ]),
          content: e0(() => [
            y("div", W6, [
              y("div", Y6, [
                (v(), p(Z, null, J(a, (m) => T(q, {
                  plain: "",
                  key: m.id,
                  onClick: (_) => h(m)
                }, {
                  default: e0(() => [
                    f0(N(m.name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])), 64))
              ]),
              T(D, {
                time: e.time,
                highlightTo: r.value,
                onChange: u,
                modelValue: d.value,
                "onUpdate:modelValue": w[2] || (w[2] = (m) => d.value = m),
                isInline: "",
                noMargin: ""
              }, null, 8, ["time", "highlightTo", "modelValue"]),
              T(D, {
                time: e.time,
                highlightTo: d.value,
                onChange: u,
                modelValue: r.value,
                "onUpdate:modelValue": w[3] || (w[3] = (m) => r.value = m),
                isInline: "",
                noMargin: ""
              }, null, 8, ["time", "highlightTo", "modelValue"])
            ])
          ]),
          _: 1
        }, 512)
      ], 2);
    };
  }
}), H6 = /* @__PURE__ */ G(j6, [["__scopeId", "data-v-ab30638c"]]), d2 = {
  NiceActions: d4,
  NiceAvatar: D4,
  NiceButton: B0,
  NiceCheckbox: Y0,
  NiceComponentHeader: g0,
  NiceConfirmModal: y2,
  NiceDate: s5,
  NiceDropdown: V5,
  NiceDropdownSimple: h5,
  NiceFilters: j5,
  NiceIcon: D2,
  NiceInput: s9,
  NiceLoading: T1,
  NiceModal: m2,
  NiceNotification: V2,
  NiceNotifications: h9,
  NicePanel: f9,
  NicePopup: Z0,
  NiceSlot: m9,
  NiceSvgs: z9,
  NiceSwitch: S9,
  NiceTable: Z9,
  NiceTextarea: o6,
  NiceToast: d6,
  NiceUpload: y6,
  NiceView: x6,
  NiceWrapper: T6,
  NiceNoData: F6,
  NiceDateRange: H6
};
const X6 = {
  install(e, c) {
    for (const i in d2) {
      const a = d2[i];
      e.component(a.name, a);
    }
    const t = U2(), s = {
      debug: c ? c.debug : !1,
      emitter: t,
      // Notification
      onNotification: (i) => t.on("notification", i),
      notification: (i, a, d, r) => {
        t.emit("notification", { message: i, type: a, title: d, icon: r });
      },
      // Toast
      onToast: (i) => t.on("toast", i),
      toast: (i, a) => {
        t.emit("toast", { message: i, type: a });
      },
      // Panel
      onPanel: (i) => t.on("panel", i),
      panel: (i, a) => {
        t.emit("panel", { name: i, isOpen: a });
      },
      // Modal
      onModal: (i) => t.on("modal", i),
      modal: (i, a, d) => {
        t.emit("modal", { name: i, isOpen: a, event: d });
      }
    };
    e.config.globalProperties.$nice = s, e.provide("nice", s);
    async function n() {
      await c.router.isReady();
      const i = o(c.router.currentRoute.value.query);
      return delete i.id, i;
    }
    function o(i) {
      return Object.assign({}, i);
    }
    e.config.globalProperties.$query = n, e.provide("getQuery", n), e.config.globalProperties.$clone = o, e.provide("clone", o), e.config.globalProperties.$t = c.gettext.$pgettext, e.provide("$t", c.gettext.$pgettext);
  }
};
function Q6() {
  return t0("nice");
}
function G6() {
  return t0("getQuery");
}
function Z6() {
  return t0("clone");
}
function J6() {
  return t0("$t");
}
export {
  X6 as default,
  G6 as getQuery,
  Z6 as useClone,
  Q6 as useNice,
  J6 as useT
};
