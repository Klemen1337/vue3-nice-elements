import { useSlots as x1, resolveComponent as R, openBlock as h, createElementBlock as f, normalizeClass as q, unref as K, createBlock as I, createCommentVNode as y, renderSlot as X, toDisplayString as k, Teleport as T2, createVNode as O, Transition as l1, withCtx as c0, resolveDynamicComponent as X0, normalizeStyle as C1, withModifiers as L2, createElementVNode as p, createTextVNode as y0, inject as l0, Fragment as t0, computed as e0, ref as Y, onMounted as g0, onBeforeUnmount as V2, withDirectives as _0, vShow as I1, watch as i1, renderList as n0, vModelText as J0, mergeProps as i2, vModelDynamic as F2, TransitionGroup as o2, onUnmounted as P2, createStaticVNode as m1, isRef as q2 } from "vue";
import { useRoute as r2, useRouter as u2 } from "vue-router";
function E2(e) {
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
const s0 = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [s, n] of c)
    t[s] = n;
  return t;
}, W2 = ["type", "disabled"], I2 = { key: 2 }, A2 = { key: 3 }, Y2 = {
  name: "NiceButton"
}, H2 = Object.assign(Y2, {
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
    const c = x1(), t = e;
    return (s, n) => {
      const a = R("NiceLoading"), r = R("NiceIcon");
      return h(), f("button", {
        class: q(["nice-button btn", [
          t.addClass,
          "btn-" + t.type,
          t.size ? "btn-" + t.size : "",
          {
            "btn-naked": t.naked,
            "btn-rounded": t.rounded,
            "btn-plain": t.plain,
            "btn-outline": t.outline,
            "btn-icon": !K(c).default && !t.text && (t.icon || t.appendIcon)
          }
        ]]),
        type: t.nativeType,
        disabled: t.disabled || t.loading
      }, [
        t.loading ? (h(), I(a, {
          key: 0,
          fullDiv: ""
        })) : y("", !0),
        t.icon ? (h(), I(r, {
          key: 1,
          icon: t.icon
        }, null, 8, ["icon"])) : y("", !0),
        K(c).default ? (h(), f("span", I2, [
          X(s.$slots, "default", {}, void 0, !0)
        ])) : y("", !0),
        t.text ? (h(), f("span", A2, k(t.text), 1)) : y("", !0),
        t.appendIcon ? (h(), I(r, {
          key: 4,
          icon: t.appendIcon
        }, null, 8, ["icon"])) : y("", !0)
      ], 10, W2);
    };
  }
}), v0 = /* @__PURE__ */ s0(H2, [["__scopeId", "data-v-e4a4e33d"]]);
const j2 = {
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
    modalClass: String,
    title: {
      type: String,
      required: !1,
      default: void 0
    },
    subtitle: {
      type: String,
      required: !1,
      default: void 0
    },
    isForm: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close", "submit"],
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
}, R2 = {
  key: 0,
  class: "nice-modal-header"
}, U2 = { class: "nice-modal-title" }, Z2 = { class: "nice-modal-subtitle" }, X2 = {
  key: 1,
  class: "nice-modal-footer"
};
function Q2(e, c, t, s, n, a) {
  const r = R("NiceButton");
  return h(), I(T2, { to: "body" }, [
    O(l1, { name: "fade" }, {
      default: c0(() => [
        n.isOpen ? (h(), f("div", {
          key: 0,
          class: "nice-modal-overlay",
          onClick: c[0] || (c[0] = (...l) => a.close && a.close(...l))
        })) : y("", !0)
      ]),
      _: 1
    }),
    O(l1, { name: "flyin" }, {
      default: c0(() => [
        n.isOpen ? (h(), I(X0(t.isForm ? "form" : "div"), {
          key: 0,
          class: q(["nice-modal", t.modalClass]),
          style: C1([{ width: t.width, height: t.height }, n.startingPosition]),
          onSubmit: c[1] || (c[1] = L2((l) => e.$emit("submit"), ["prevent"]))
        }, {
          default: c0(() => [
            e.$slots.title || t.title || e.$slots.subtitle || t.subtitle ? (h(), f("div", R2, [
              p("div", U2, [
                e.$slots.title || t.title ? X(e.$slots, "title", { key: 0 }, () => [
                  y0(k(t.title), 1)
                ], !0) : y("", !0)
              ]),
              p("div", Z2, [
                e.$slots.subtitle || t.subtitle ? X(e.$slots, "subtitle", { key: 0 }, () => [
                  y0(k(t.subtitle), 1)
                ], !0) : y("", !0)
              ]),
              O(r, {
                class: "nice-modal-close",
                icon: "icon-x",
                naked: "",
                onClick: a.close
              }, null, 8, ["onClick"])
            ])) : y("", !0),
            p("div", {
              class: q(["nice-modal-body", { "no-header": !(e.$slots.title || t.title || e.$slots.subtitle || t.subtitle), "no-footer": !e.$slots.footer }])
            }, [
              X(e.$slots, "default", {}, void 0, !0)
            ], 2),
            e.$slots.footer ? (h(), f("div", X2, [
              X(e.$slots, "footer", {}, void 0, !0)
            ])) : y("", !0)
          ]),
          _: 3
        }, 40, ["style", "class"])) : y("", !0)
      ]),
      _: 3
    })
  ]);
}
const d2 = /* @__PURE__ */ s0(j2, [["render", Q2], ["__scopeId", "data-v-93768299"]]), G2 = { class: "p-0 m-0" }, J2 = {
  name: "NiceConfirmModal"
}, h2 = Object.assign(J2, {
  props: {
    name: {
      type: String,
      default: "confirm-prompt"
    },
    message: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["cancel", "confirm"],
  setup(e, { emit: c }) {
    const t = e, s = l0("$t"), n = l0("nice"), a = c;
    function r() {
      n.modal(t.name, !1), a("cancel");
    }
    function l() {
      a("confirm");
    }
    return (u, i) => (h(), I(d2, {
      name: e.name,
      title: e.title,
      onClose: r
    }, {
      footer: c0(() => [
        O(v0, {
          text: K(s)("Nice", "Cancel"),
          onClick: r,
          type: "default",
          plain: "",
          icon: "icon-x"
        }, null, 8, ["text"]),
        O(v0, {
          text: K(s)("Nice", "Confirm"),
          onClick: l,
          icon: "icon-check"
        }, null, 8, ["text"])
      ]),
      default: c0(() => [
        X(u.$slots, "default", {}, () => [
          p("p", G2, k(e.message), 1)
        ])
      ]),
      _: 3
    }, 8, ["name", "title"]));
  }
});
const K2 = { class: "nice-actions" }, e4 = {
  name: "NiceActions"
}, t4 = Object.assign(e4, {
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
    const t = e, s = l0("nice"), n = c;
    function a() {
      n("submit");
    }
    function r() {
      s.modal("delete-prompt", !0);
    }
    function l() {
      s.modal("delete-prompt", !1), n("delete");
    }
    function u() {
      n("cancel");
    }
    return (i, o) => {
      const d = R("NiceButton");
      return h(), f(t0, null, [
        p("div", K2, [
          t.showDelete ? (h(), I(d, {
            key: 0,
            plain: "",
            type: "danger",
            onClick: r,
            text: i.$t("Nice", "Delete"),
            form: t.form,
            disabled: t.loading || t.disableDelete,
            icon: "icon-trash-2"
          }, null, 8, ["text", "form", "disabled"])) : y("", !0),
          X(i.$slots, "left"),
          o[0] || (o[0] = p("div", { class: "f-grow" }, null, -1)),
          X(i.$slots, "default"),
          O(d, {
            plain: "",
            type: "default",
            onClick: u,
            text: i.$t("Nice", "Cancel"),
            form: t.form,
            disabled: t.loading || t.disableCancel,
            icon: "icon-x"
          }, null, 8, ["text", "form", "disabled"]),
          O(d, {
            "native-type": "submit",
            onClick: a,
            text: t.submitText ? t.submitText : i.$t("Nice", "Submit"),
            form: t.form,
            disabled: t.loading || t.disableSubmit,
            icon: "icon-save"
          }, null, 8, ["text", "form", "disabled"])
        ]),
        O(h2, {
          name: "delete-prompt",
          onConfirm: l,
          title: i.$t("Nice", "Delete"),
          message: t.deleteText ? t.deleteText : i.$t("Nice", "Are you sure you want to delete?")
        }, null, 8, ["title", "message"])
      ], 64);
    };
  }
});
function c4(e) {
  for (var c = 5381, t = e.length; t; )
    c = c * 33 ^ e.charCodeAt(--t);
  return c >>> 0;
}
var s4 = c4;
const n4 = (e, c, t) => [
  [e, c, t],
  [(e + 120) % 360, c, t],
  [(e + 240) % 360, c, t]
];
var a4 = n4;
const f1 = (e, c, t) => (t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? e + (c - e) * 6 * t : t < 1 / 2 ? c : t < 2 / 3 ? e + (c - e) * (2 / 3 - t) * 6 : e), l4 = (e, c, t) => {
  let s, n, a;
  if (e = e / 360, c == 0)
    s = n = a = t;
  else {
    const r = t < 0.5 ? t * (1 + c) : t + c - t * c, l = 2 * t - r;
    s = f1(l, r, e + 1 / 3), n = f1(l, r, e), a = f1(l, r, e - 1 / 3);
  }
  return [
    Math.max(0, Math.min(Math.round(s * 255), 255)),
    Math.max(0, Math.min(Math.round(n * 255), 255)),
    Math.max(0, Math.min(Math.round(a * 255), 255))
  ];
};
var i4 = l4;
const o4 = s4, r4 = a4, A1 = i4, u4 = () => Math.floor(Math.random() * Date.now()), d4 = (e, c) => {
  const t = o4(e), s = r4(t % 360, 1, 0.5), n = A1(s[0][0], s[0][1], s[0][2]), a = A1(s[1][0], s[1][1], s[1][2]), r = `rgb(${n[0]}, ${n[1]}, ${n[2]})`, l = `rgb(${a[0]}, ${a[1]}, ${a[2]})`, u = u4();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${c != null ? `width="${c}px" height="${c}px"` : ""} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${u}">
      <stop stop-color="${r}" offset="0%"></stop>
      <stop stop-color="${l}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${u})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
};
var h4 = d4, o1 = {}, v4 = {
  get exports() {
    return o1;
  },
  set exports(e) {
    o1 = e;
  }
}, y1 = {}, m4 = {
  get exports() {
    return y1;
  },
  set exports(e) {
    y1 = e;
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
      for (var s = [], n = 0, a = 0; n < t.length; n++, a += 8)
        s[a >>> 5] |= t[n] << 24 - a % 32;
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
        for (var a = t[n] << 16 | t[n + 1] << 8 | t[n + 2], r = 0; r < 4; r++)
          n * 8 + r * 6 <= t.length * 8 ? s.push(e.charAt(a >>> 6 * (3 - r) & 63)) : s.push("=");
      return s.join("");
    },
    // Convert a base-64 string to a byte array
    base64ToBytes: function(t) {
      t = t.replace(/[^A-Z0-9+\/]/ig, "");
      for (var s = [], n = 0, a = 0; n < t.length; a = ++n % 4)
        a != 0 && s.push((e.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * a + 8) - 1) << a * 2 | e.indexOf(t.charAt(n)) >>> 6 - a * 2);
      return s;
    }
  };
  m4.exports = c;
})();
var g1 = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(e) {
      return g1.bin.stringToBytes(unescape(encodeURIComponent(e)));
    },
    // Convert a byte array to a string
    bytesToString: function(e) {
      return decodeURIComponent(escape(g1.bin.bytesToString(e)));
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
}, Y1 = g1;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var f4 = function(e) {
  return e != null && (v2(e) || p4(e) || !!e._isBuffer);
};
function v2(e) {
  return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function p4(e) {
  return typeof e.readFloatLE == "function" && typeof e.slice == "function" && v2(e.slice(0, 0));
}
(function() {
  var e = y1, c = Y1.utf8, t = f4, s = Y1.bin, n = function(a, r) {
    a.constructor == String ? r && r.encoding === "binary" ? a = s.stringToBytes(a) : a = c.stringToBytes(a) : t(a) ? a = Array.prototype.slice.call(a, 0) : !Array.isArray(a) && a.constructor !== Uint8Array && (a = a.toString());
    for (var l = e.bytesToWords(a), u = a.length * 8, i = 1732584193, o = -271733879, d = -1732584194, v = 271733878, m = 0; m < l.length; m++)
      l[m] = (l[m] << 8 | l[m] >>> 24) & 16711935 | (l[m] << 24 | l[m] >>> 8) & 4278255360;
    l[u >>> 5] |= 128 << u % 32, l[(u + 64 >>> 9 << 4) + 14] = u;
    for (var _ = n._ff, b = n._gg, M = n._hh, x = n._ii, m = 0; m < l.length; m += 16) {
      var L = i, S = o, T = d, g = v;
      i = _(i, o, d, v, l[m + 0], 7, -680876936), v = _(v, i, o, d, l[m + 1], 12, -389564586), d = _(d, v, i, o, l[m + 2], 17, 606105819), o = _(o, d, v, i, l[m + 3], 22, -1044525330), i = _(i, o, d, v, l[m + 4], 7, -176418897), v = _(v, i, o, d, l[m + 5], 12, 1200080426), d = _(d, v, i, o, l[m + 6], 17, -1473231341), o = _(o, d, v, i, l[m + 7], 22, -45705983), i = _(i, o, d, v, l[m + 8], 7, 1770035416), v = _(v, i, o, d, l[m + 9], 12, -1958414417), d = _(d, v, i, o, l[m + 10], 17, -42063), o = _(o, d, v, i, l[m + 11], 22, -1990404162), i = _(i, o, d, v, l[m + 12], 7, 1804603682), v = _(v, i, o, d, l[m + 13], 12, -40341101), d = _(d, v, i, o, l[m + 14], 17, -1502002290), o = _(o, d, v, i, l[m + 15], 22, 1236535329), i = b(i, o, d, v, l[m + 1], 5, -165796510), v = b(v, i, o, d, l[m + 6], 9, -1069501632), d = b(d, v, i, o, l[m + 11], 14, 643717713), o = b(o, d, v, i, l[m + 0], 20, -373897302), i = b(i, o, d, v, l[m + 5], 5, -701558691), v = b(v, i, o, d, l[m + 10], 9, 38016083), d = b(d, v, i, o, l[m + 15], 14, -660478335), o = b(o, d, v, i, l[m + 4], 20, -405537848), i = b(i, o, d, v, l[m + 9], 5, 568446438), v = b(v, i, o, d, l[m + 14], 9, -1019803690), d = b(d, v, i, o, l[m + 3], 14, -187363961), o = b(o, d, v, i, l[m + 8], 20, 1163531501), i = b(i, o, d, v, l[m + 13], 5, -1444681467), v = b(v, i, o, d, l[m + 2], 9, -51403784), d = b(d, v, i, o, l[m + 7], 14, 1735328473), o = b(o, d, v, i, l[m + 12], 20, -1926607734), i = M(i, o, d, v, l[m + 5], 4, -378558), v = M(v, i, o, d, l[m + 8], 11, -2022574463), d = M(d, v, i, o, l[m + 11], 16, 1839030562), o = M(o, d, v, i, l[m + 14], 23, -35309556), i = M(i, o, d, v, l[m + 1], 4, -1530992060), v = M(v, i, o, d, l[m + 4], 11, 1272893353), d = M(d, v, i, o, l[m + 7], 16, -155497632), o = M(o, d, v, i, l[m + 10], 23, -1094730640), i = M(i, o, d, v, l[m + 13], 4, 681279174), v = M(v, i, o, d, l[m + 0], 11, -358537222), d = M(d, v, i, o, l[m + 3], 16, -722521979), o = M(o, d, v, i, l[m + 6], 23, 76029189), i = M(i, o, d, v, l[m + 9], 4, -640364487), v = M(v, i, o, d, l[m + 12], 11, -421815835), d = M(d, v, i, o, l[m + 15], 16, 530742520), o = M(o, d, v, i, l[m + 2], 23, -995338651), i = x(i, o, d, v, l[m + 0], 6, -198630844), v = x(v, i, o, d, l[m + 7], 10, 1126891415), d = x(d, v, i, o, l[m + 14], 15, -1416354905), o = x(o, d, v, i, l[m + 5], 21, -57434055), i = x(i, o, d, v, l[m + 12], 6, 1700485571), v = x(v, i, o, d, l[m + 3], 10, -1894986606), d = x(d, v, i, o, l[m + 10], 15, -1051523), o = x(o, d, v, i, l[m + 1], 21, -2054922799), i = x(i, o, d, v, l[m + 8], 6, 1873313359), v = x(v, i, o, d, l[m + 15], 10, -30611744), d = x(d, v, i, o, l[m + 6], 15, -1560198380), o = x(o, d, v, i, l[m + 13], 21, 1309151649), i = x(i, o, d, v, l[m + 4], 6, -145523070), v = x(v, i, o, d, l[m + 11], 10, -1120210379), d = x(d, v, i, o, l[m + 2], 15, 718787259), o = x(o, d, v, i, l[m + 9], 21, -343485551), i = i + L >>> 0, o = o + S >>> 0, d = d + T >>> 0, v = v + g >>> 0;
    }
    return e.endian([i, o, d, v]);
  };
  n._ff = function(a, r, l, u, i, o, d) {
    var v = a + (r & l | ~r & u) + (i >>> 0) + d;
    return (v << o | v >>> 32 - o) + r;
  }, n._gg = function(a, r, l, u, i, o, d) {
    var v = a + (r & u | l & ~u) + (i >>> 0) + d;
    return (v << o | v >>> 32 - o) + r;
  }, n._hh = function(a, r, l, u, i, o, d) {
    var v = a + (r ^ l ^ u) + (i >>> 0) + d;
    return (v << o | v >>> 32 - o) + r;
  }, n._ii = function(a, r, l, u, i, o, d) {
    var v = a + (l ^ (r | ~u)) + (i >>> 0) + d;
    return (v << o | v >>> 32 - o) + r;
  }, n._blocksize = 16, n._digestsize = 16, v4.exports = function(a, r) {
    if (a == null)
      throw new Error("Illegal argument " + a);
    var l = e.wordsToBytes(n(a, r));
    return r && r.asBytes ? l : r && r.asString ? s.bytesToString(l) : e.bytesToHex(l);
  };
})();
const y4 = {
  key: 0,
  class: "status"
}, g4 = ["innerHTML"], b4 = ["src"], M4 = ["src"], z4 = {
  key: 4,
  class: "text"
}, w4 = {
  name: "NiceAvatar"
}, x4 = Object.assign(w4, {
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
    const c = e, t = e0(() => h4(o1(c.hash || c.text))), s = e0(() => {
      const a = c.text.split(" ");
      return a.length > 1 ? a[0][0] + a[1][0] : c.text[0] + c.text[1];
    }), n = e0(() => "https://www.gravatar.com/avatar/" + o1(c.gavatar.trim().toLowerCase()) + "?s=50");
    return (a, r) => (h(), f("div", {
      class: q(["nice-avatar", [
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
      c.status ? (h(), f("div", y4)) : y("", !0),
      c.gradient ? (h(), f("div", {
        key: 1,
        class: "gradient",
        innerHTML: t.value
      }, null, 8, g4)) : y("", !0),
      c.gavatar ? (h(), f("img", {
        key: 2,
        class: "image",
        src: n.value
      }, null, 8, b4)) : y("", !0),
      c.image ? (h(), f("img", {
        key: 3,
        class: "image",
        src: c.image
      }, null, 8, M4)) : y("", !0),
      c.text ? (h(), f("div", z4, k(s.value), 1)) : y("", !0)
    ], 2));
  }
});
const C4 = { class: "nice-checkbox-box" }, k4 = {
  key: 0,
  viewBox: "0 0 20 20"
}, B4 = ["for"], _4 = ["id", "disabled"], N4 = {
  name: "NiceCheckbox"
}, $4 = Object.assign(N4, {
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
    const t = e, s = c, n = Math.random().toString(36).slice(2, 7), a = e0({
      get() {
        return t.modelValue;
      },
      set(l) {
        s("update:modelValue", l), s("change", l);
      }
    });
    function r() {
      t.disabled || (a.value = !a.value);
    }
    return (l, u) => (h(), f("div", {
      class: q(["nice-component nice-checkbox", { "no-margin": t.noMargin, active: a.value, disabled: t.disabled }]),
      onClick: r
    }, [
      p("div", C4, [
        a.value ? (h(), f("svg", k4, [...u[0] || (u[0] = [
          p("path", { d: "M0 11l2-2 5 5 11-11 2 2-13 13z" }, null, -1)
        ])])) : y("", !0)
      ]),
      t.title ? (h(), f("div", {
        key: 0,
        class: "nice-checkbox-title",
        for: "nice-checkbox" + K(n)
      }, k(t.title), 9, B4)) : y("", !0),
      p("input", {
        type: "checkbox",
        id: "nice-checkbox" + K(n),
        disabled: t.disabled
      }, null, 8, _4)
    ], 2));
  }
}), R0 = /* @__PURE__ */ s0($4, [["__scopeId", "data-v-e579bb36"]]);
const S4 = {
  name: "NiceComponentHeader",
  props: {
    title: String,
    caption: String,
    required: Boolean
  }
}, O4 = {
  key: 0,
  class: "nice-component-header"
}, D4 = {
  key: 0,
  class: "nice-component-title"
}, T4 = {
  key: 0,
  class: "nice-component-required"
}, L4 = {
  key: 1,
  class: "nice-component-caption"
};
function V4(e, c, t, s, n, a) {
  return t.title || t.caption ? (h(), f("div", O4, [
    t.title ? (h(), f("div", D4, [
      y0(k(t.title) + " ", 1),
      t.required ? (h(), f("span", T4, " *")) : y("", !0)
    ])) : y("", !0),
    t.caption ? (h(), f("div", L4, k(t.caption), 1)) : y("", !0)
  ])) : y("", !0);
}
const N0 = /* @__PURE__ */ s0(S4, [["render", V4]]);
var r0 = "top", f0 = "bottom", p0 = "right", u0 = "left", k1 = "auto", K0 = [r0, f0, p0, u0], P0 = "start", Q0 = "end", F4 = "clippingParents", m2 = "viewport", Y0 = "popper", P4 = "reference", H1 = /* @__PURE__ */ K0.reduce(function(e, c) {
  return e.concat([c + "-" + P0, c + "-" + Q0]);
}, []), f2 = /* @__PURE__ */ [].concat(K0, [k1]).reduce(function(e, c) {
  return e.concat([c, c + "-" + P0, c + "-" + Q0]);
}, []), q4 = "beforeRead", E4 = "read", W4 = "afterRead", I4 = "beforeMain", A4 = "main", Y4 = "afterMain", H4 = "beforeWrite", j4 = "write", R4 = "afterWrite", U4 = [q4, E4, W4, I4, A4, Y4, H4, j4, R4];
function z0(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function d0(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var c = e.ownerDocument;
    return c && c.defaultView || window;
  }
  return e;
}
function T0(e) {
  var c = d0(e).Element;
  return e instanceof c || e instanceof Element;
}
function m0(e) {
  var c = d0(e).HTMLElement;
  return e instanceof c || e instanceof HTMLElement;
}
function B1(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var c = d0(e).ShadowRoot;
  return e instanceof c || e instanceof ShadowRoot;
}
function Z4(e) {
  var c = e.state;
  Object.keys(c.elements).forEach(function(t) {
    var s = c.styles[t] || {}, n = c.attributes[t] || {}, a = c.elements[t];
    !m0(a) || !z0(a) || (Object.assign(a.style, s), Object.keys(n).forEach(function(r) {
      var l = n[r];
      l === !1 ? a.removeAttribute(r) : a.setAttribute(r, l === !0 ? "" : l);
    }));
  });
}
function X4(e) {
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
      var n = c.elements[s], a = c.attributes[s] || {}, r = Object.keys(c.styles.hasOwnProperty(s) ? c.styles[s] : t[s]), l = r.reduce(function(u, i) {
        return u[i] = "", u;
      }, {});
      !m0(n) || !z0(n) || (Object.assign(n.style, l), Object.keys(a).forEach(function(u) {
        n.removeAttribute(u);
      }));
    });
  };
}
const Q4 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Z4,
  effect: X4,
  requires: ["computeStyles"]
};
function M0(e) {
  return e.split("-")[0];
}
var D0 = Math.max, r1 = Math.min, q0 = Math.round;
function b1() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(c) {
    return c.brand + "/" + c.version;
  }).join(" ") : navigator.userAgent;
}
function p2() {
  return !/^((?!chrome|android).)*safari/i.test(b1());
}
function E0(e, c, t) {
  c === void 0 && (c = !1), t === void 0 && (t = !1);
  var s = e.getBoundingClientRect(), n = 1, a = 1;
  c && m0(e) && (n = e.offsetWidth > 0 && q0(s.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && q0(s.height) / e.offsetHeight || 1);
  var r = T0(e) ? d0(e) : window, l = r.visualViewport, u = !p2() && t, i = (s.left + (u && l ? l.offsetLeft : 0)) / n, o = (s.top + (u && l ? l.offsetTop : 0)) / a, d = s.width / n, v = s.height / a;
  return {
    width: d,
    height: v,
    top: o,
    right: i + d,
    bottom: o + v,
    left: i,
    x: i,
    y: o
  };
}
function _1(e) {
  var c = E0(e), t = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(c.width - t) <= 1 && (t = c.width), Math.abs(c.height - s) <= 1 && (s = c.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: s
  };
}
function y2(e, c) {
  var t = c.getRootNode && c.getRootNode();
  if (e.contains(c))
    return !0;
  if (t && B1(t)) {
    var s = c;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function C0(e) {
  return d0(e).getComputedStyle(e);
}
function G4(e) {
  return ["table", "td", "th"].indexOf(z0(e)) >= 0;
}
function $0(e) {
  return ((T0(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function h1(e) {
  return z0(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (B1(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $0(e)
  );
}
function j1(e) {
  return !m0(e) || // https://github.com/popperjs/popper-core/issues/837
  C0(e).position === "fixed" ? null : e.offsetParent;
}
function J4(e) {
  var c = /firefox/i.test(b1()), t = /Trident/i.test(b1());
  if (t && m0(e)) {
    var s = C0(e);
    if (s.position === "fixed")
      return null;
  }
  var n = h1(e);
  for (B1(n) && (n = n.host); m0(n) && ["html", "body"].indexOf(z0(n)) < 0; ) {
    var a = C0(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || c && a.willChange === "filter" || c && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function e1(e) {
  for (var c = d0(e), t = j1(e); t && G4(t) && C0(t).position === "static"; )
    t = j1(t);
  return t && (z0(t) === "html" || z0(t) === "body" && C0(t).position === "static") ? c : t || J4(e) || c;
}
function N1(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function U0(e, c, t) {
  return D0(e, r1(c, t));
}
function K4(e, c, t) {
  var s = U0(e, c, t);
  return s > t ? t : s;
}
function g2() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function b2(e) {
  return Object.assign({}, g2(), e);
}
function M2(e, c) {
  return c.reduce(function(t, s) {
    return t[s] = e, t;
  }, {});
}
var e3 = function(c, t) {
  return c = typeof c == "function" ? c(Object.assign({}, t.rects, {
    placement: t.placement
  })) : c, b2(typeof c != "number" ? c : M2(c, K0));
};
function t3(e) {
  var c, t = e.state, s = e.name, n = e.options, a = t.elements.arrow, r = t.modifiersData.popperOffsets, l = M0(t.placement), u = N1(l), i = [u0, p0].indexOf(l) >= 0, o = i ? "height" : "width";
  if (!(!a || !r)) {
    var d = e3(n.padding, t), v = _1(a), m = u === "y" ? r0 : u0, _ = u === "y" ? f0 : p0, b = t.rects.reference[o] + t.rects.reference[u] - r[u] - t.rects.popper[o], M = r[u] - t.rects.reference[u], x = e1(a), L = x ? u === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, S = b / 2 - M / 2, T = d[m], g = L - v[o] - d[_], w = L / 2 - v[o] / 2 + S, P = U0(T, w, g), W = u;
    t.modifiersData[s] = (c = {}, c[W] = P, c.centerOffset = P - w, c);
  }
}
function c3(e) {
  var c = e.state, t = e.options, s = t.element, n = s === void 0 ? "[data-popper-arrow]" : s;
  n != null && (typeof n == "string" && (n = c.elements.popper.querySelector(n), !n) || y2(c.elements.popper, n) && (c.elements.arrow = n));
}
const s3 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: t3,
  effect: c3,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function W0(e) {
  return e.split("-")[1];
}
var n3 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function a3(e, c) {
  var t = e.x, s = e.y, n = c.devicePixelRatio || 1;
  return {
    x: q0(t * n) / n || 0,
    y: q0(s * n) / n || 0
  };
}
function R1(e) {
  var c, t = e.popper, s = e.popperRect, n = e.placement, a = e.variation, r = e.offsets, l = e.position, u = e.gpuAcceleration, i = e.adaptive, o = e.roundOffsets, d = e.isFixed, v = r.x, m = v === void 0 ? 0 : v, _ = r.y, b = _ === void 0 ? 0 : _, M = typeof o == "function" ? o({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = M.x, b = M.y;
  var x = r.hasOwnProperty("x"), L = r.hasOwnProperty("y"), S = u0, T = r0, g = window;
  if (i) {
    var w = e1(t), P = "clientHeight", W = "clientWidth";
    if (w === d0(t) && (w = $0(t), C0(w).position !== "static" && l === "absolute" && (P = "scrollHeight", W = "scrollWidth")), w = w, n === r0 || (n === u0 || n === p0) && a === Q0) {
      T = f0;
      var H = d && w === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        w[P]
      );
      b -= H - s.height, b *= u ? 1 : -1;
    }
    if (n === u0 || (n === r0 || n === f0) && a === Q0) {
      S = p0;
      var A = d && w === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        w[W]
      );
      m -= A - s.width, m *= u ? 1 : -1;
    }
  }
  var Q = Object.assign({
    position: l
  }, i && n3), F = o === !0 ? a3({
    x: m,
    y: b
  }, d0(t)) : {
    x: m,
    y: b
  };
  if (m = F.x, b = F.y, u) {
    var U;
    return Object.assign({}, Q, (U = {}, U[T] = L ? "0" : "", U[S] = x ? "0" : "", U.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", U));
  }
  return Object.assign({}, Q, (c = {}, c[T] = L ? b + "px" : "", c[S] = x ? m + "px" : "", c.transform = "", c));
}
function l3(e) {
  var c = e.state, t = e.options, s = t.gpuAcceleration, n = s === void 0 ? !0 : s, a = t.adaptive, r = a === void 0 ? !0 : a, l = t.roundOffsets, u = l === void 0 ? !0 : l, i = {
    placement: M0(c.placement),
    variation: W0(c.placement),
    popper: c.elements.popper,
    popperRect: c.rects.popper,
    gpuAcceleration: n,
    isFixed: c.options.strategy === "fixed"
  };
  c.modifiersData.popperOffsets != null && (c.styles.popper = Object.assign({}, c.styles.popper, R1(Object.assign({}, i, {
    offsets: c.modifiersData.popperOffsets,
    position: c.options.strategy,
    adaptive: r,
    roundOffsets: u
  })))), c.modifiersData.arrow != null && (c.styles.arrow = Object.assign({}, c.styles.arrow, R1(Object.assign({}, i, {
    offsets: c.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), c.attributes.popper = Object.assign({}, c.attributes.popper, {
    "data-popper-placement": c.placement
  });
}
const i3 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: l3,
  data: {}
};
var n1 = {
  passive: !0
};
function o3(e) {
  var c = e.state, t = e.instance, s = e.options, n = s.scroll, a = n === void 0 ? !0 : n, r = s.resize, l = r === void 0 ? !0 : r, u = d0(c.elements.popper), i = [].concat(c.scrollParents.reference, c.scrollParents.popper);
  return a && i.forEach(function(o) {
    o.addEventListener("scroll", t.update, n1);
  }), l && u.addEventListener("resize", t.update, n1), function() {
    a && i.forEach(function(o) {
      o.removeEventListener("scroll", t.update, n1);
    }), l && u.removeEventListener("resize", t.update, n1);
  };
}
const r3 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: o3,
  data: {}
};
var u3 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function a1(e) {
  return e.replace(/left|right|bottom|top/g, function(c) {
    return u3[c];
  });
}
var d3 = {
  start: "end",
  end: "start"
};
function U1(e) {
  return e.replace(/start|end/g, function(c) {
    return d3[c];
  });
}
function $1(e) {
  var c = d0(e), t = c.pageXOffset, s = c.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: s
  };
}
function S1(e) {
  return E0($0(e)).left + $1(e).scrollLeft;
}
function h3(e, c) {
  var t = d0(e), s = $0(e), n = t.visualViewport, a = s.clientWidth, r = s.clientHeight, l = 0, u = 0;
  if (n) {
    a = n.width, r = n.height;
    var i = p2();
    (i || !i && c === "fixed") && (l = n.offsetLeft, u = n.offsetTop);
  }
  return {
    width: a,
    height: r,
    x: l + S1(e),
    y: u
  };
}
function v3(e) {
  var c, t = $0(e), s = $1(e), n = (c = e.ownerDocument) == null ? void 0 : c.body, a = D0(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = D0(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), l = -s.scrollLeft + S1(e), u = -s.scrollTop;
  return C0(n || t).direction === "rtl" && (l += D0(t.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: r,
    x: l,
    y: u
  };
}
function O1(e) {
  var c = C0(e), t = c.overflow, s = c.overflowX, n = c.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + n + s);
}
function z2(e) {
  return ["html", "body", "#document"].indexOf(z0(e)) >= 0 ? e.ownerDocument.body : m0(e) && O1(e) ? e : z2(h1(e));
}
function Z0(e, c) {
  var t;
  c === void 0 && (c = []);
  var s = z2(e), n = s === ((t = e.ownerDocument) == null ? void 0 : t.body), a = d0(s), r = n ? [a].concat(a.visualViewport || [], O1(s) ? s : []) : s, l = c.concat(r);
  return n ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Z0(h1(r)))
  );
}
function M1(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function m3(e, c) {
  var t = E0(e, !1, c === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Z1(e, c, t) {
  return c === m2 ? M1(h3(e, t)) : T0(c) ? m3(c, t) : M1(v3($0(e)));
}
function f3(e) {
  var c = Z0(h1(e)), t = ["absolute", "fixed"].indexOf(C0(e).position) >= 0, s = t && m0(e) ? e1(e) : e;
  return T0(s) ? c.filter(function(n) {
    return T0(n) && y2(n, s) && z0(n) !== "body";
  }) : [];
}
function p3(e, c, t, s) {
  var n = c === "clippingParents" ? f3(e) : [].concat(c), a = [].concat(n, [t]), r = a[0], l = a.reduce(function(u, i) {
    var o = Z1(e, i, s);
    return u.top = D0(o.top, u.top), u.right = r1(o.right, u.right), u.bottom = r1(o.bottom, u.bottom), u.left = D0(o.left, u.left), u;
  }, Z1(e, r, s));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function w2(e) {
  var c = e.reference, t = e.element, s = e.placement, n = s ? M0(s) : null, a = s ? W0(s) : null, r = c.x + c.width / 2 - t.width / 2, l = c.y + c.height / 2 - t.height / 2, u;
  switch (n) {
    case r0:
      u = {
        x: r,
        y: c.y - t.height
      };
      break;
    case f0:
      u = {
        x: r,
        y: c.y + c.height
      };
      break;
    case p0:
      u = {
        x: c.x + c.width,
        y: l
      };
      break;
    case u0:
      u = {
        x: c.x - t.width,
        y: l
      };
      break;
    default:
      u = {
        x: c.x,
        y: c.y
      };
  }
  var i = n ? N1(n) : null;
  if (i != null) {
    var o = i === "y" ? "height" : "width";
    switch (a) {
      case P0:
        u[i] = u[i] - (c[o] / 2 - t[o] / 2);
        break;
      case Q0:
        u[i] = u[i] + (c[o] / 2 - t[o] / 2);
        break;
    }
  }
  return u;
}
function G0(e, c) {
  c === void 0 && (c = {});
  var t = c, s = t.placement, n = s === void 0 ? e.placement : s, a = t.strategy, r = a === void 0 ? e.strategy : a, l = t.boundary, u = l === void 0 ? F4 : l, i = t.rootBoundary, o = i === void 0 ? m2 : i, d = t.elementContext, v = d === void 0 ? Y0 : d, m = t.altBoundary, _ = m === void 0 ? !1 : m, b = t.padding, M = b === void 0 ? 0 : b, x = b2(typeof M != "number" ? M : M2(M, K0)), L = v === Y0 ? P4 : Y0, S = e.rects.popper, T = e.elements[_ ? L : v], g = p3(T0(T) ? T : T.contextElement || $0(e.elements.popper), u, o, r), w = E0(e.elements.reference), P = w2({
    reference: w,
    element: S,
    strategy: "absolute",
    placement: n
  }), W = M1(Object.assign({}, S, P)), H = v === Y0 ? W : w, A = {
    top: g.top - H.top + x.top,
    bottom: H.bottom - g.bottom + x.bottom,
    left: g.left - H.left + x.left,
    right: H.right - g.right + x.right
  }, Q = e.modifiersData.offset;
  if (v === Y0 && Q) {
    var F = Q[n];
    Object.keys(A).forEach(function(U) {
      var D = [p0, f0].indexOf(U) >= 0 ? 1 : -1, j = [r0, f0].indexOf(U) >= 0 ? "y" : "x";
      A[U] += F[j] * D;
    });
  }
  return A;
}
function y3(e, c) {
  c === void 0 && (c = {});
  var t = c, s = t.placement, n = t.boundary, a = t.rootBoundary, r = t.padding, l = t.flipVariations, u = t.allowedAutoPlacements, i = u === void 0 ? f2 : u, o = W0(s), d = o ? l ? H1 : H1.filter(function(_) {
    return W0(_) === o;
  }) : K0, v = d.filter(function(_) {
    return i.indexOf(_) >= 0;
  });
  v.length === 0 && (v = d);
  var m = v.reduce(function(_, b) {
    return _[b] = G0(e, {
      placement: b,
      boundary: n,
      rootBoundary: a,
      padding: r
    })[M0(b)], _;
  }, {});
  return Object.keys(m).sort(function(_, b) {
    return m[_] - m[b];
  });
}
function g3(e) {
  if (M0(e) === k1)
    return [];
  var c = a1(e);
  return [U1(e), c, U1(c)];
}
function b3(e) {
  var c = e.state, t = e.options, s = e.name;
  if (!c.modifiersData[s]._skip) {
    for (var n = t.mainAxis, a = n === void 0 ? !0 : n, r = t.altAxis, l = r === void 0 ? !0 : r, u = t.fallbackPlacements, i = t.padding, o = t.boundary, d = t.rootBoundary, v = t.altBoundary, m = t.flipVariations, _ = m === void 0 ? !0 : m, b = t.allowedAutoPlacements, M = c.options.placement, x = M0(M), L = x === M, S = u || (L || !_ ? [a1(M)] : g3(M)), T = [M].concat(S).reduce(function(Z, i0) {
      return Z.concat(M0(i0) === k1 ? y3(c, {
        placement: i0,
        boundary: o,
        rootBoundary: d,
        padding: i,
        flipVariations: _,
        allowedAutoPlacements: b
      }) : i0);
    }, []), g = c.rects.reference, w = c.rects.popper, P = /* @__PURE__ */ new Map(), W = !0, H = T[0], A = 0; A < T.length; A++) {
      var Q = T[A], F = M0(Q), U = W0(Q) === P0, D = [r0, f0].indexOf(F) >= 0, j = D ? "width" : "height", V = G0(c, {
        placement: Q,
        boundary: o,
        rootBoundary: d,
        altBoundary: v,
        padding: i
      }), B = D ? U ? p0 : u0 : U ? f0 : r0;
      g[j] > w[j] && (B = a1(B));
      var E = a1(B), G = [];
      if (a && G.push(V[F] <= 0), l && G.push(V[B] <= 0, V[E] <= 0), G.every(function(Z) {
        return Z;
      })) {
        H = Q, W = !1;
        break;
      }
      P.set(Q, G);
    }
    if (W)
      for (var N = _ ? 3 : 1, h0 = function(i0) {
        var o0 = T.find(function(k0) {
          var x0 = P.get(k0);
          if (x0)
            return x0.slice(0, i0).every(function(L0) {
              return L0;
            });
        });
        if (o0)
          return H = o0, "break";
      }, b0 = N; b0 > 0; b0--) {
        var $ = h0(b0);
        if ($ === "break")
          break;
      }
    c.placement !== H && (c.modifiersData[s]._skip = !0, c.placement = H, c.reset = !0);
  }
}
const M3 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: b3,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function X1(e, c, t) {
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
function Q1(e) {
  return [r0, p0, f0, u0].some(function(c) {
    return e[c] >= 0;
  });
}
function z3(e) {
  var c = e.state, t = e.name, s = c.rects.reference, n = c.rects.popper, a = c.modifiersData.preventOverflow, r = G0(c, {
    elementContext: "reference"
  }), l = G0(c, {
    altBoundary: !0
  }), u = X1(r, s), i = X1(l, n, a), o = Q1(u), d = Q1(i);
  c.modifiersData[t] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: i,
    isReferenceHidden: o,
    hasPopperEscaped: d
  }, c.attributes.popper = Object.assign({}, c.attributes.popper, {
    "data-popper-reference-hidden": o,
    "data-popper-escaped": d
  });
}
const w3 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: z3
};
function x3(e, c, t) {
  var s = M0(e), n = [u0, r0].indexOf(s) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, c, {
    placement: e
  })) : t, r = a[0], l = a[1];
  return r = r || 0, l = (l || 0) * n, [u0, p0].indexOf(s) >= 0 ? {
    x: l,
    y: r
  } : {
    x: r,
    y: l
  };
}
function C3(e) {
  var c = e.state, t = e.options, s = e.name, n = t.offset, a = n === void 0 ? [0, 0] : n, r = f2.reduce(function(o, d) {
    return o[d] = x3(d, c.rects, a), o;
  }, {}), l = r[c.placement], u = l.x, i = l.y;
  c.modifiersData.popperOffsets != null && (c.modifiersData.popperOffsets.x += u, c.modifiersData.popperOffsets.y += i), c.modifiersData[s] = r;
}
const k3 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: C3
};
function B3(e) {
  var c = e.state, t = e.name;
  c.modifiersData[t] = w2({
    reference: c.rects.reference,
    element: c.rects.popper,
    strategy: "absolute",
    placement: c.placement
  });
}
const _3 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: B3,
  data: {}
};
function N3(e) {
  return e === "x" ? "y" : "x";
}
function $3(e) {
  var c = e.state, t = e.options, s = e.name, n = t.mainAxis, a = n === void 0 ? !0 : n, r = t.altAxis, l = r === void 0 ? !1 : r, u = t.boundary, i = t.rootBoundary, o = t.altBoundary, d = t.padding, v = t.tether, m = v === void 0 ? !0 : v, _ = t.tetherOffset, b = _ === void 0 ? 0 : _, M = G0(c, {
    boundary: u,
    rootBoundary: i,
    padding: d,
    altBoundary: o
  }), x = M0(c.placement), L = W0(c.placement), S = !L, T = N1(x), g = N3(T), w = c.modifiersData.popperOffsets, P = c.rects.reference, W = c.rects.popper, H = typeof b == "function" ? b(Object.assign({}, c.rects, {
    placement: c.placement
  })) : b, A = typeof H == "number" ? {
    mainAxis: H,
    altAxis: H
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, H), Q = c.modifiersData.offset ? c.modifiersData.offset[c.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (w) {
    if (a) {
      var U, D = T === "y" ? r0 : u0, j = T === "y" ? f0 : p0, V = T === "y" ? "height" : "width", B = w[T], E = B + M[D], G = B - M[j], N = m ? -W[V] / 2 : 0, h0 = L === P0 ? P[V] : W[V], b0 = L === P0 ? -W[V] : -P[V], $ = c.elements.arrow, Z = m && $ ? _1($) : {
        width: 0,
        height: 0
      }, i0 = c.modifiersData["arrow#persistent"] ? c.modifiersData["arrow#persistent"].padding : g2(), o0 = i0[D], k0 = i0[j], x0 = U0(0, P[V], Z[V]), L0 = S ? P[V] / 2 - N - x0 - o0 - A.mainAxis : h0 - x0 - o0 - A.mainAxis, C = S ? -P[V] / 2 + N + x0 + k0 + A.mainAxis : b0 + x0 + k0 + A.mainAxis, z = c.elements.arrow && e1(c.elements.arrow), V0 = z ? T === "y" ? z.clientTop || 0 : z.clientLeft || 0 : 0, A0 = (U = Q == null ? void 0 : Q[T]) != null ? U : 0, $2 = B + L0 - A0 - V0, S2 = B + C - A0, T1 = U0(m ? r1(E, $2) : E, B, m ? D0(G, S2) : G);
      w[T] = T1, F[T] = T1 - B;
    }
    if (l) {
      var L1, O2 = T === "x" ? r0 : u0, D2 = T === "x" ? f0 : p0, S0 = w[g], s1 = g === "y" ? "height" : "width", V1 = S0 + M[O2], F1 = S0 - M[D2], v1 = [r0, u0].indexOf(x) !== -1, P1 = (L1 = Q == null ? void 0 : Q[g]) != null ? L1 : 0, q1 = v1 ? V1 : S0 - P[s1] - W[s1] - P1 + A.altAxis, E1 = v1 ? S0 + P[s1] + W[s1] - P1 - A.altAxis : F1, W1 = m && v1 ? K4(q1, S0, E1) : U0(m ? q1 : V1, S0, m ? E1 : F1);
      w[g] = W1, F[g] = W1 - S0;
    }
    c.modifiersData[s] = F;
  }
}
const S3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $3,
  requiresIfExists: ["offset"]
};
function O3(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function D3(e) {
  return e === d0(e) || !m0(e) ? $1(e) : O3(e);
}
function T3(e) {
  var c = e.getBoundingClientRect(), t = q0(c.width) / e.offsetWidth || 1, s = q0(c.height) / e.offsetHeight || 1;
  return t !== 1 || s !== 1;
}
function L3(e, c, t) {
  t === void 0 && (t = !1);
  var s = m0(c), n = m0(c) && T3(c), a = $0(c), r = E0(e, n, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (s || !s && !t) && ((z0(c) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  O1(a)) && (l = D3(c)), m0(c) ? (u = E0(c, !0), u.x += c.clientLeft, u.y += c.clientTop) : a && (u.x = S1(a))), {
    x: r.left + l.scrollLeft - u.x,
    y: r.top + l.scrollTop - u.y,
    width: r.width,
    height: r.height
  };
}
function V3(e) {
  var c = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(a) {
    c.set(a.name, a);
  });
  function n(a) {
    t.add(a.name);
    var r = [].concat(a.requires || [], a.requiresIfExists || []);
    r.forEach(function(l) {
      if (!t.has(l)) {
        var u = c.get(l);
        u && n(u);
      }
    }), s.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || n(a);
  }), s;
}
function F3(e) {
  var c = V3(e);
  return U4.reduce(function(t, s) {
    return t.concat(c.filter(function(n) {
      return n.phase === s;
    }));
  }, []);
}
function P3(e) {
  var c;
  return function() {
    return c || (c = new Promise(function(t) {
      Promise.resolve().then(function() {
        c = void 0, t(e());
      });
    })), c;
  };
}
function q3(e) {
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
var G1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function J1() {
  for (var e = arguments.length, c = new Array(e), t = 0; t < e; t++)
    c[t] = arguments[t];
  return !c.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function E3(e) {
  e === void 0 && (e = {});
  var c = e, t = c.defaultModifiers, s = t === void 0 ? [] : t, n = c.defaultOptions, a = n === void 0 ? G1 : n;
  return function(l, u, i) {
    i === void 0 && (i = a);
    var o = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, G1, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], v = !1, m = {
      state: o,
      setOptions: function(x) {
        var L = typeof x == "function" ? x(o.options) : x;
        b(), o.options = Object.assign({}, a, o.options, L), o.scrollParents = {
          reference: T0(l) ? Z0(l) : l.contextElement ? Z0(l.contextElement) : [],
          popper: Z0(u)
        };
        var S = F3(q3([].concat(s, o.options.modifiers)));
        return o.orderedModifiers = S.filter(function(T) {
          return T.enabled;
        }), _(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var x = o.elements, L = x.reference, S = x.popper;
          if (J1(L, S)) {
            o.rects = {
              reference: L3(L, e1(S), o.options.strategy === "fixed"),
              popper: _1(S)
            }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach(function(A) {
              return o.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var T = 0; T < o.orderedModifiers.length; T++) {
              if (o.reset === !0) {
                o.reset = !1, T = -1;
                continue;
              }
              var g = o.orderedModifiers[T], w = g.fn, P = g.options, W = P === void 0 ? {} : P, H = g.name;
              typeof w == "function" && (o = w({
                state: o,
                options: W,
                name: H,
                instance: m
              }) || o);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: P3(function() {
        return new Promise(function(M) {
          m.forceUpdate(), M(o);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!J1(l, u))
      return m;
    m.setOptions(i).then(function(M) {
      !v && i.onFirstUpdate && i.onFirstUpdate(M);
    });
    function _() {
      o.orderedModifiers.forEach(function(M) {
        var x = M.name, L = M.options, S = L === void 0 ? {} : L, T = M.effect;
        if (typeof T == "function") {
          var g = T({
            state: o,
            name: x,
            instance: m,
            options: S
          }), w = function() {
          };
          d.push(g || w);
        }
      });
    }
    function b() {
      d.forEach(function(M) {
        return M();
      }), d = [];
    }
    return m;
  };
}
var W3 = [r3, _3, i3, Q4, k3, M3, S3, s3, w3], I3 = /* @__PURE__ */ E3({
  defaultModifiers: W3
});
const A3 = {
  name: "NicePopup"
}, Y3 = Object.assign(A3, {
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
    const s = e, n = t, a = Y(!1), r = Y(!1);
    let l = null;
    const u = Y(null), i = Y(null), o = Y(null), d = Y(null);
    g0(() => {
      const x = [
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
      s.showArrow && x.push({
        name: "arrow",
        options: {
          element: u.value,
          padding: 5
        }
      }), l = I3(i.value, o.value, {
        strategy: "fixed",
        placement: s.placement,
        modifiers: x
      }), document.addEventListener("click", M), document.addEventListener("touchend", M);
    }), V2(() => {
      document.removeEventListener("click", M), document.removeEventListener("touchend", M);
    });
    function v() {
      s.disabled || (a.value = !a.value, l.update(), n("change", a));
    }
    function m() {
      a.value = !1, n("change", a);
    }
    function _() {
      !s.openOnHover || s.disabled || (r.value = !0, a.value = !0, l.update());
    }
    function b() {
      !s.openOnHover || s.disabled || (r.value = !1, a.value = !1);
    }
    function M(x) {
      s.openOnHover || s.disabled || a.value && !x.composedPath().includes(d.value) && !x.composedPath().includes(i.value) && m();
    }
    return c({ close: m, toggle: v }), (x, L) => (h(), f("div", {
      class: q(["nice-popup", { "nice-popup-open": a.value, "nice-popup-focused": r.value, disabled: s.disabled }]),
      ref_key: "$el",
      ref: d
    }, [
      p("div", {
        class: "nice-popup-trigger",
        ref_key: "$trigger",
        ref: i,
        onClick: v,
        onMouseover: _,
        onMouseleave: b
      }, [
        X(x.$slots, "trigger", {}, void 0, !0)
      ], 544),
      _0(p("div", {
        class: "nice-popup-content-wrapper",
        ref_key: "$content",
        ref: o
      }, [
        _0(p("div", {
          "data-popper-arrow": "",
          class: "nice-popup-arrow",
          ref_key: "$arrow",
          ref: u
        }, null, 512), [
          [I1, s.showArrow]
        ]),
        p("div", {
          class: q(["nice-popup-content", { "no-padding": s.noPadding }])
        }, [
          X(x.$slots, "content", {}, void 0, !0)
        ], 2)
      ], 512), [
        [I1, a.value]
      ])
    ], 2));
  }
}), t1 = /* @__PURE__ */ s0(Y3, [["__scopeId", "data-v-a9d9d2e1"]]), x2 = 6048e5, H3 = 864e5, K1 = Symbol.for("constructDateFrom");
function w0(e, c) {
  return typeof e == "function" ? e(c) : e && typeof e == "object" && K1 in e ? e[K1](c) : e instanceof Date ? new e.constructor(c) : new Date(c);
}
function a0(e, c) {
  return w0(c || e, e);
}
let j3 = {};
function c1() {
  return j3;
}
function I0(e, c) {
  var l, u, i, o;
  const t = c1(), s = (c == null ? void 0 : c.weekStartsOn) ?? ((u = (l = c == null ? void 0 : c.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((o = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : o.weekStartsOn) ?? 0, n = a0(e, c == null ? void 0 : c.in), a = n.getDay(), r = (a < s ? 7 : 0) + a - s;
  return n.setDate(n.getDate() - r), n.setHours(0, 0, 0, 0), n;
}
function u1(e, c) {
  return I0(e, { ...c, weekStartsOn: 1 });
}
function C2(e, c) {
  const t = a0(e, c == null ? void 0 : c.in), s = t.getFullYear(), n = w0(t, 0);
  n.setFullYear(s + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = u1(n), r = w0(t, 0);
  r.setFullYear(s, 0, 4), r.setHours(0, 0, 0, 0);
  const l = u1(r);
  return t.getTime() >= a.getTime() ? s + 1 : t.getTime() >= l.getTime() ? s : s - 1;
}
function e2(e) {
  const c = a0(e), t = new Date(
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
function R3(e, ...c) {
  const t = w0.bind(
    null,
    e || c.find((s) => typeof s == "object")
  );
  return c.map(t);
}
function z1(e, c) {
  const t = a0(e, c == null ? void 0 : c.in);
  return t.setHours(0, 0, 0, 0), t;
}
function U3(e, c, t) {
  const [s, n] = R3(
    t == null ? void 0 : t.in,
    e,
    c
  ), a = z1(s), r = z1(n), l = +a - e2(a), u = +r - e2(r);
  return Math.round((l - u) / H3);
}
function Z3(e, c) {
  const t = C2(e, c), s = w0((c == null ? void 0 : c.in) || e, 0);
  return s.setFullYear(t, 0, 4), s.setHours(0, 0, 0, 0), u1(s);
}
function w1(e) {
  return w0(e, Date.now());
}
function X3(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Q3(e) {
  return !(!X3(e) && typeof e != "number" || isNaN(+a0(e)));
}
function G3(e, c) {
  const t = a0(e, c == null ? void 0 : c.in);
  return t.setHours(23, 59, 59, 999), t;
}
function J3(e, c) {
  const t = a0(e, c == null ? void 0 : c.in), s = t.getMonth();
  return t.setFullYear(t.getFullYear(), s + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function K3(e, c) {
  const t = a0(e, c == null ? void 0 : c.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function e7(e, c) {
  const t = a0(e, c == null ? void 0 : c.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function t7(e, c) {
  var l, u, i, o;
  const t = c1(), s = (c == null ? void 0 : c.weekStartsOn) ?? ((u = (l = c == null ? void 0 : c.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? t.weekStartsOn ?? ((o = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : o.weekStartsOn) ?? 0, n = a0(e, c == null ? void 0 : c.in), a = n.getDay(), r = (a < s ? -7 : 0) + 6 - (a - s);
  return n.setDate(n.getDate() + r), n.setHours(23, 59, 59, 999), n;
}
function c7(e) {
  const c = w1(e == null ? void 0 : e.in), t = w0(e == null ? void 0 : e.in, 0);
  return t.setFullYear(c.getFullYear(), c.getMonth(), c.getDate() - 1), t.setHours(23, 59, 59, 999), t;
}
const s7 = {
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
}, n7 = (e, c, t) => {
  let s;
  const n = s7[e];
  return typeof n == "string" ? s = n : c === 1 ? s = n.one : s = n.other.replace("{{count}}", c.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + s : s + " ago" : s;
};
function p1(e) {
  return (c = {}) => {
    const t = c.width ? String(c.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const a7 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, l7 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, i7 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, o7 = {
  date: p1({
    formats: a7,
    defaultWidth: "full"
  }),
  time: p1({
    formats: l7,
    defaultWidth: "full"
  }),
  dateTime: p1({
    formats: i7,
    defaultWidth: "full"
  })
}, r7 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, u7 = (e, c, t, s) => r7[e];
function H0(e) {
  return (c, t) => {
    const s = t != null && t.context ? String(t.context) : "standalone";
    let n;
    if (s === "formatting" && e.formattingValues) {
      const r = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : r;
      n = e.formattingValues[l] || e.formattingValues[r];
    } else {
      const r = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      n = e.values[l] || e.values[r];
    }
    const a = e.argumentCallback ? e.argumentCallback(c) : c;
    return n[a];
  };
}
const d7 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, h7 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, v7 = {
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
}, m7 = {
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
}, f7 = {
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
}, p7 = {
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
}, y7 = (e, c) => {
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
}, g7 = {
  ordinalNumber: y7,
  era: H0({
    values: d7,
    defaultWidth: "wide"
  }),
  quarter: H0({
    values: h7,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: H0({
    values: v7,
    defaultWidth: "wide"
  }),
  day: H0({
    values: m7,
    defaultWidth: "wide"
  }),
  dayPeriod: H0({
    values: f7,
    defaultWidth: "wide",
    formattingValues: p7,
    defaultFormattingWidth: "wide"
  })
};
function j0(e) {
  return (c, t = {}) => {
    const s = t.width, n = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], a = c.match(n);
    if (!a)
      return null;
    const r = a[0], l = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(l) ? M7(l, (d) => d.test(r)) : (
      // [TODO] -- I challenge you to fix the type
      b7(l, (d) => d.test(r))
    );
    let i;
    i = e.valueCallback ? e.valueCallback(u) : u, i = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(i)
    ) : i;
    const o = c.slice(r.length);
    return { value: i, rest: o };
  };
}
function b7(e, c) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && c(e[t]))
      return t;
}
function M7(e, c) {
  for (let t = 0; t < e.length; t++)
    if (c(e[t]))
      return t;
}
function z7(e) {
  return (c, t = {}) => {
    const s = c.match(e.matchPattern);
    if (!s)
      return null;
    const n = s[0], a = c.match(e.parsePattern);
    if (!a)
      return null;
    let r = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    r = t.valueCallback ? t.valueCallback(r) : r;
    const l = c.slice(n.length);
    return { value: r, rest: l };
  };
}
const w7 = /^(\d+)(th|st|nd|rd)?/i, x7 = /\d+/i, C7 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, k7 = {
  any: [/^b/i, /^(a|c)/i]
}, B7 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _7 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, N7 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $7 = {
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
}, S7 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, O7 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, D7 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, T7 = {
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
}, L7 = {
  ordinalNumber: z7({
    matchPattern: w7,
    parsePattern: x7,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: j0({
    matchPatterns: C7,
    defaultMatchWidth: "wide",
    parsePatterns: k7,
    defaultParseWidth: "any"
  }),
  quarter: j0({
    matchPatterns: B7,
    defaultMatchWidth: "wide",
    parsePatterns: _7,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: j0({
    matchPatterns: N7,
    defaultMatchWidth: "wide",
    parsePatterns: $7,
    defaultParseWidth: "any"
  }),
  day: j0({
    matchPatterns: S7,
    defaultMatchWidth: "wide",
    parsePatterns: O7,
    defaultParseWidth: "any"
  }),
  dayPeriod: j0({
    matchPatterns: D7,
    defaultMatchWidth: "any",
    parsePatterns: T7,
    defaultParseWidth: "any"
  })
}, V7 = {
  code: "en-US",
  formatDistance: n7,
  formatLong: o7,
  formatRelative: u7,
  localize: g7,
  match: L7,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function F7(e, c) {
  const t = a0(e, c == null ? void 0 : c.in);
  return U3(t, e7(t)) + 1;
}
function P7(e, c) {
  const t = a0(e, c == null ? void 0 : c.in), s = +u1(t) - +Z3(t);
  return Math.round(s / x2) + 1;
}
function k2(e, c) {
  var o, d, v, m;
  const t = a0(e, c == null ? void 0 : c.in), s = t.getFullYear(), n = c1(), a = (c == null ? void 0 : c.firstWeekContainsDate) ?? ((d = (o = c == null ? void 0 : c.locale) == null ? void 0 : o.options) == null ? void 0 : d.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((m = (v = n.locale) == null ? void 0 : v.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, r = w0((c == null ? void 0 : c.in) || e, 0);
  r.setFullYear(s + 1, 0, a), r.setHours(0, 0, 0, 0);
  const l = I0(r, c), u = w0((c == null ? void 0 : c.in) || e, 0);
  u.setFullYear(s, 0, a), u.setHours(0, 0, 0, 0);
  const i = I0(u, c);
  return +t >= +l ? s + 1 : +t >= +i ? s : s - 1;
}
function q7(e, c) {
  var l, u, i, o;
  const t = c1(), s = (c == null ? void 0 : c.firstWeekContainsDate) ?? ((u = (l = c == null ? void 0 : c.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((o = (i = t.locale) == null ? void 0 : i.options) == null ? void 0 : o.firstWeekContainsDate) ?? 1, n = k2(e, c), a = w0((c == null ? void 0 : c.in) || e, 0);
  return a.setFullYear(n, 0, s), a.setHours(0, 0, 0, 0), I0(a, c);
}
function E7(e, c) {
  const t = a0(e, c == null ? void 0 : c.in), s = +I0(t, c) - +q7(t, c);
  return Math.round(s / x2) + 1;
}
function J(e, c) {
  const t = e < 0 ? "-" : "", s = Math.abs(e).toString().padStart(c, "0");
  return t + s;
}
const B0 = {
  // Year
  y(e, c) {
    const t = e.getFullYear(), s = t > 0 ? t : 1 - t;
    return J(c === "yy" ? s % 100 : s, c.length);
  },
  // Month
  M(e, c) {
    const t = e.getMonth();
    return c === "M" ? String(t + 1) : J(t + 1, 2);
  },
  // Day of the month
  d(e, c) {
    return J(e.getDate(), c.length);
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
    return J(e.getHours() % 12 || 12, c.length);
  },
  // Hour [0-23]
  H(e, c) {
    return J(e.getHours(), c.length);
  },
  // Minute
  m(e, c) {
    return J(e.getMinutes(), c.length);
  },
  // Second
  s(e, c) {
    return J(e.getSeconds(), c.length);
  },
  // Fraction of second
  S(e, c) {
    const t = c.length, s = e.getMilliseconds(), n = Math.trunc(
      s * Math.pow(10, t - 3)
    );
    return J(n, c.length);
  }
}, F0 = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, t2 = {
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
    return B0.y(e, c);
  },
  // Local week-numbering year
  Y: function(e, c, t, s) {
    const n = k2(e, s), a = n > 0 ? n : 1 - n;
    if (c === "YY") {
      const r = a % 100;
      return J(r, 2);
    }
    return c === "Yo" ? t.ordinalNumber(a, { unit: "year" }) : J(a, c.length);
  },
  // ISO week-numbering year
  R: function(e, c) {
    const t = C2(e);
    return J(t, c.length);
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
    return J(t, c.length);
  },
  // Quarter
  Q: function(e, c, t) {
    const s = Math.ceil((e.getMonth() + 1) / 3);
    switch (c) {
      case "Q":
        return String(s);
      case "QQ":
        return J(s, 2);
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
        return J(s, 2);
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
        return B0.M(e, c);
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
        return J(s + 1, 2);
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
    const n = E7(e, s);
    return c === "wo" ? t.ordinalNumber(n, { unit: "week" }) : J(n, c.length);
  },
  // ISO week of year
  I: function(e, c, t) {
    const s = P7(e);
    return c === "Io" ? t.ordinalNumber(s, { unit: "week" }) : J(s, c.length);
  },
  // Day of the month
  d: function(e, c, t) {
    return c === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : B0.d(e, c);
  },
  // Day of year
  D: function(e, c, t) {
    const s = F7(e);
    return c === "Do" ? t.ordinalNumber(s, { unit: "dayOfYear" }) : J(s, c.length);
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
    const n = e.getDay(), a = (n - s.weekStartsOn + 8) % 7 || 7;
    switch (c) {
      case "e":
        return String(a);
      case "ee":
        return J(a, 2);
      case "eo":
        return t.ordinalNumber(a, { unit: "day" });
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
    const n = e.getDay(), a = (n - s.weekStartsOn + 8) % 7 || 7;
    switch (c) {
      case "c":
        return String(a);
      case "cc":
        return J(a, c.length);
      case "co":
        return t.ordinalNumber(a, { unit: "day" });
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
        return J(n, c.length);
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
    switch (s === 12 ? n = F0.noon : s === 0 ? n = F0.midnight : n = s / 12 >= 1 ? "pm" : "am", c) {
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
    switch (s >= 17 ? n = F0.evening : s >= 12 ? n = F0.afternoon : s >= 4 ? n = F0.morning : n = F0.night, c) {
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
    return B0.h(e, c);
  },
  // Hour [0-23]
  H: function(e, c, t) {
    return c === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : B0.H(e, c);
  },
  // Hour [0-11]
  K: function(e, c, t) {
    const s = e.getHours() % 12;
    return c === "Ko" ? t.ordinalNumber(s, { unit: "hour" }) : J(s, c.length);
  },
  // Hour [1-24]
  k: function(e, c, t) {
    let s = e.getHours();
    return s === 0 && (s = 24), c === "ko" ? t.ordinalNumber(s, { unit: "hour" }) : J(s, c.length);
  },
  // Minute
  m: function(e, c, t) {
    return c === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : B0.m(e, c);
  },
  // Second
  s: function(e, c, t) {
    return c === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : B0.s(e, c);
  },
  // Fraction of second
  S: function(e, c) {
    return B0.S(e, c);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, c, t) {
    const s = e.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (c) {
      case "X":
        return s2(s);
      case "XXXX":
      case "XX":
        return O0(s);
      case "XXXXX":
      case "XXX":
      default:
        return O0(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "x":
        return s2(s);
      case "xxxx":
      case "xx":
        return O0(s);
      case "xxxxx":
      case "xxx":
      default:
        return O0(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + c2(s, ":");
      case "OOOO":
      default:
        return "GMT" + O0(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, c, t) {
    const s = e.getTimezoneOffset();
    switch (c) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + c2(s, ":");
      case "zzzz":
      default:
        return "GMT" + O0(s, ":");
    }
  },
  // Seconds timestamp
  t: function(e, c, t) {
    const s = Math.trunc(+e / 1e3);
    return J(s, c.length);
  },
  // Milliseconds timestamp
  T: function(e, c, t) {
    return J(+e, c.length);
  }
};
function c2(e, c = "") {
  const t = e > 0 ? "-" : "+", s = Math.abs(e), n = Math.trunc(s / 60), a = s % 60;
  return a === 0 ? t + String(n) : t + String(n) + c + J(a, 2);
}
function s2(e, c) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + J(Math.abs(e) / 60, 2) : O0(e, c);
}
function O0(e, c = "") {
  const t = e > 0 ? "-" : "+", s = Math.abs(e), n = J(Math.trunc(s / 60), 2), a = J(s % 60, 2);
  return t + n + c + a;
}
const n2 = (e, c) => {
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
}, B2 = (e, c) => {
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
}, W7 = (e, c) => {
  const t = e.match(/(P+)(p+)?/) || [], s = t[1], n = t[2];
  if (!n)
    return n2(e, c);
  let a;
  switch (s) {
    case "P":
      a = c.dateTime({ width: "short" });
      break;
    case "PP":
      a = c.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = c.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = c.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", n2(s, c)).replace("{{time}}", B2(n, c));
}, I7 = {
  p: B2,
  P: W7
}, A7 = /^D+$/, Y7 = /^Y+$/, H7 = ["D", "DD", "YY", "YYYY"];
function j7(e) {
  return A7.test(e);
}
function R7(e) {
  return Y7.test(e);
}
function U7(e, c, t) {
  const s = Z7(e, c, t);
  if (console.warn(s), H7.includes(e))
    throw new RangeError(s);
}
function Z7(e, c, t) {
  const s = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${c}\`) for formatting ${s} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const X7 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Q7 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, G7 = /^'([^]*?)'?$/, J7 = /''/g, K7 = /[a-zA-Z]/;
function a2(e, c, t) {
  var o, d, v, m, _, b, M, x;
  const s = c1(), n = (t == null ? void 0 : t.locale) ?? s.locale ?? V7, a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) == null ? void 0 : d.firstWeekContainsDate) ?? s.firstWeekContainsDate ?? ((m = (v = s.locale) == null ? void 0 : v.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, r = (t == null ? void 0 : t.weekStartsOn) ?? ((b = (_ = t == null ? void 0 : t.locale) == null ? void 0 : _.options) == null ? void 0 : b.weekStartsOn) ?? s.weekStartsOn ?? ((x = (M = s.locale) == null ? void 0 : M.options) == null ? void 0 : x.weekStartsOn) ?? 0, l = a0(e, t == null ? void 0 : t.in);
  if (!Q3(l))
    throw new RangeError("Invalid time value");
  let u = c.match(Q7).map((L) => {
    const S = L[0];
    if (S === "p" || S === "P") {
      const T = I7[S];
      return T(L, n.formatLong);
    }
    return L;
  }).join("").match(X7).map((L) => {
    if (L === "''")
      return { isToken: !1, value: "'" };
    const S = L[0];
    if (S === "'")
      return { isToken: !1, value: e5(L) };
    if (t2[S])
      return { isToken: !0, value: L };
    if (S.match(K7))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + S + "`"
      );
    return { isToken: !1, value: L };
  });
  n.localize.preprocessor && (u = n.localize.preprocessor(l, u));
  const i = {
    firstWeekContainsDate: a,
    weekStartsOn: r,
    locale: n
  };
  return u.map((L) => {
    if (!L.isToken)
      return L.value;
    const S = L.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && R7(S) || !(t != null && t.useAdditionalDayOfYearTokens) && j7(S)) && U7(S, c, String(e));
    const T = t2[S[0]];
    return T(l, S, n.localize, i);
  }).join("");
}
function e5(e) {
  const c = e.match(G7);
  return c ? c[1].replace(J7, "'") : e;
}
function t5(e, c) {
  return +a0(e) < +a0(c);
}
function c5(e, c, t) {
  const s = +a0(e, t == null ? void 0 : t.in), [n, a] = [
    +a0(c.start, t == null ? void 0 : t.in),
    +a0(c.end, t == null ? void 0 : t.in)
  ].sort((r, l) => r - l);
  return s >= n && s <= a;
}
function s5(e) {
  const c = w1(e == null ? void 0 : e.in), t = c.getFullYear(), s = c.getMonth(), n = c.getDate(), a = w1(e == null ? void 0 : e.in);
  return a.setFullYear(t, s, n - 1), a.setHours(0, 0, 0, 0), a;
}
const n5 = {
  key: 0,
  class: "nice-dropdown"
}, a5 = { class: "month-wrapper" }, l5 = { class: "value" }, i5 = { class: "year" }, o5 = { class: "month" }, r5 = { class: "calendar" }, u5 = { class: "header" }, d5 = { class: "month" }, h5 = ["onClick", "title"], v5 = {
  key: 0,
  class: "time"
}, m5 = { class: "select-wrapper" }, f5 = ["value", "selected"], p5 = { class: "select-wrapper" }, y5 = ["value", "selected"], g5 = { class: "input-group" }, b5 = ["placeholder", "disabled", "required"], M5 = { class: "nice-dropdown" }, z5 = { class: "month-wrapper" }, w5 = { class: "value" }, x5 = { class: "year" }, C5 = { class: "month" }, k5 = { class: "calendar" }, B5 = { class: "header" }, _5 = { class: "month" }, N5 = ["onClick", "title"], $5 = {
  key: 0,
  class: "time"
}, S5 = { class: "select-wrapper" }, O5 = ["value", "selected"], D5 = { class: "select-wrapper" }, T5 = ["value", "selected"], L5 = {
  name: "NiceDate"
}, V5 = Object.assign(L5, {
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
    const t = e, s = l0("$t"), n = c, a = Y(null), r = Y(""), l = Y(/* @__PURE__ */ new Date()), u = Y([]), i = Y(null), o = [
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
    ], d = [
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
    ], v = {
      1: s("Nice", "Mon"),
      2: s("Nice", "Tue"),
      3: s("Nice", "Wed"),
      4: s("Nice", "Thu"),
      5: s("Nice", "Fri"),
      6: s("Nice", "Sat"),
      7: s("Nice", "Sun")
    }, m = {
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
    }, _ = {
      month: null,
      year: null,
      day: null,
      hour: null,
      minute: null
    };
    i1(() => t.modelValue, () => {
      t.modelValue && b(t.modelValue) && (a.value = new Date(t.modelValue), l.value = new Date(t.modelValue), j());
    }), i1(() => t.highlightTo, () => {
      A();
    }), g0(() => {
      W();
    });
    function b(V) {
      return !isNaN(new Date(V));
    }
    function M() {
      i == null || i.value.close();
    }
    function x() {
      r.value = "", n("update:modelValue", null), n("change", null), setTimeout(() => {
        M();
      });
    }
    function L(V) {
      V && A();
    }
    function S() {
      j(), n("update:modelValue", a.value), n("change", a.value);
    }
    function T() {
      if (r.value && r.value != "") {
        let V = r.value.split(" • "), B = /* @__PURE__ */ new Date(), E = V[0].split(".");
        if (B.setDate(E[0]), B.setMonth(E[1] - 1), B.setFullYear(E[2]), t.time) {
          let G = V[1].split(":");
          B.setHours(G[0]), B.setMinutes(G[1]), B.setSeconds(0, 0);
        } else
          B.setHours(12), B.setMinutes(0), B.setSeconds(0, 0);
        a.value = B, S();
      }
    }
    function g(V) {
      let B = V.target.value;
      l.value.setHours(B), a.value.setHours(B), S();
    }
    function w(V) {
      let B = V.target.value;
      l.value.setMinutes(B), a.value.setMinutes(B), S();
    }
    function P(V) {
      a.value.setYear(V.year), a.value.setMonth(V.month), a.value.setDate(V.day), S();
    }
    function W() {
      t.modelValue || (a.value = /* @__PURE__ */ new Date(), a.value.setSeconds(0, 0)), t.modelValue && b(t.modelValue) && (a.value = new Date(t.modelValue), a.value.setSeconds(0, 0), r.value = D(a.value)), t.isInline && A();
    }
    function H(V) {
      let B = l.value.getMonth();
      V ? B += 1 : B -= 1, l.value.setMonth(B), A();
    }
    function A() {
      u.value = [];
      let V = new Date(
        l.value.getFullYear(),
        l.value.getMonth(),
        1
      ).getDay() - 1, B = new Date(
        l.value.getFullYear(),
        l.value.getMonth(),
        0
      ).getDate(), E = 42 - B - V;
      for (var G = 1 - V; G <= B + E; G++)
        u.value.push(
          Q(
            l.value.getFullYear(),
            l.value.getMonth(),
            G
          )
        );
    }
    function Q(V, B, E) {
      const G = /* @__PURE__ */ new Date(), N = new Date(V, B, E);
      return {
        id: N.toString(),
        date: N,
        year: N.getFullYear(),
        month: N.getMonth(),
        day: N.getDate(),
        dayInWeek: N.getDay(),
        currentMonth: N.getMonth() == l.value.getMonth(),
        selected: U(a.value, N),
        today: U(G, N),
        highlighted: F(N),
        text: D(N)
      };
    }
    function F(V) {
      return !!(t.highlightTo && c5(V, { end: t.highlightTo, start: l.value }));
    }
    function U(V, B) {
      return V.getDate() == B.getDate() && V.getMonth() == B.getMonth() && V.getFullYear() == B.getFullYear();
    }
    function D(V) {
      let B = V.getDate(), E = V.getMonth() + 1, G = V.getFullYear(), N = V.getHours(), h0 = V.getMinutes();
      return h0 < 10 && (h0 = "0" + h0), t.time ? `${B}.${E}.${G} • ${N}:${h0}` : `${B}.${E}.${G}`;
    }
    function j() {
      a.value || (a.value = /* @__PURE__ */ new Date()), _.day = a.value.getDate(), _.month = a.value.getMonth(), _.year = a.value.getFullYear(), _.hour = a.value.getHours(), _.minute = a.value.getMinutes(), r.value = D(a.value), l.value.year = _.year, l.value.month = _.month, A();
    }
    return (V, B) => {
      const E = R("NiceButton"), G = R("NiceIcon");
      return h(), f("div", {
        class: q(["nice-component nice-date", {
          disabled: e.disabled,
          "no-margin": e.noMargin,
          "has-value": e.modelValue,
          "is-inline": e.isInline
        }])
      }, [
        O(N0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        e.isInline ? (h(), f("div", n5, [
          p("div", a5, [
            O(E, {
              class: "left",
              onClick: B[0] || (B[0] = (N) => H(!1)),
              icon: "icon-chevron-left",
              naked: ""
            }),
            p("div", l5, [
              p("div", i5, k(l.value.getFullYear()), 1),
              p("div", o5, k(m[l.value.getMonth() + 1]), 1)
            ]),
            O(E, {
              class: "right",
              onClick: B[1] || (B[1] = (N) => H(!0)),
              icon: "icon-chevron-right",
              naked: ""
            })
          ]),
          p("div", r5, [
            p("div", u5, [
              p("div", null, k(v[1]), 1),
              p("div", null, k(v[2]), 1),
              p("div", null, k(v[3]), 1),
              p("div", null, k(v[4]), 1),
              p("div", null, k(v[5]), 1),
              p("div", null, k(v[6]), 1),
              p("div", null, k(v[7]), 1)
            ]),
            p("div", d5, [
              (h(!0), f(t0, null, n0(u.value, (N) => (h(), f("div", {
                class: q(["day", {
                  "previous-month": !N.currentMonth,
                  "day-highlighted": N.highlighted,
                  today: N.today,
                  selected: N.selected
                }]),
                onClick: (h0) => P(N),
                title: N.text,
                key: N.id
              }, k(N.day), 11, h5))), 128))
            ])
          ]),
          e.time ? (h(), f("div", v5, [
            p("div", m5, [
              B[5] || (B[5] = p("div", { class: "arrow-down" }, null, -1)),
              p("select", { onChange: g }, [
                (h(), f(t0, null, n0(o, (N) => p("option", {
                  value: N,
                  key: N,
                  selected: N == l.value.getHours()
                }, k(N), 9, f5)), 64))
              ], 32)
            ]),
            B[7] || (B[7] = p("div", null, ":", -1)),
            p("div", p5, [
              B[6] || (B[6] = p("div", { class: "arrow-down" }, null, -1)),
              p("select", { onChange: w }, [
                (h(), f(t0, null, n0(d, (N) => p("option", {
                  value: N,
                  key: N,
                  selected: N == l.value.getMinutes()
                }, k(N), 9, y5)), 64))
              ], 32)
            ]),
            O(G, {
              class: "time-icon",
              icon: "icon-clock"
            })
          ])) : y("", !0)
        ])) : y("", !0),
        e.isInline ? y("", !0) : (h(), I(t1, {
          key: 1,
          "no-padding": "",
          placement: "bottom-start",
          ref_key: "popup",
          ref: i,
          class: "w-full",
          onChange: L
        }, {
          trigger: c0(() => [
            p("div", g5, [
              _0(p("input", {
                "onUpdate:modelValue": B[2] || (B[2] = (N) => r.value = N),
                placeholder: e.placeholder || K(s)("Nice", "None"),
                disabled: e.disabled,
                required: e.required,
                onBlur: T
              }, null, 40, b5), [
                [J0, r.value]
              ]),
              O(G, {
                class: "icon",
                icon: "icon-calendar"
              }),
              O(G, {
                class: "icon clear",
                icon: "icon-x",
                onClick: x
              })
            ])
          ]),
          content: c0(() => [
            p("div", M5, [
              p("div", z5, [
                O(E, {
                  class: "left",
                  onClick: B[3] || (B[3] = (N) => H(!1)),
                  icon: "icon-chevron-left",
                  naked: ""
                }),
                p("div", w5, [
                  p("div", x5, k(l.value.getFullYear()), 1),
                  p("div", C5, k(m[l.value.getMonth() + 1]), 1)
                ]),
                O(E, {
                  class: "right",
                  onClick: B[4] || (B[4] = (N) => H(!0)),
                  icon: "icon-chevron-right",
                  naked: ""
                })
              ]),
              p("div", k5, [
                p("div", B5, [
                  p("div", null, k(v[1]), 1),
                  p("div", null, k(v[2]), 1),
                  p("div", null, k(v[3]), 1),
                  p("div", null, k(v[4]), 1),
                  p("div", null, k(v[5]), 1),
                  p("div", null, k(v[6]), 1),
                  p("div", null, k(v[7]), 1)
                ]),
                p("div", _5, [
                  (h(!0), f(t0, null, n0(u.value, (N) => (h(), f("div", {
                    class: q(["day", {
                      "previous-month": !N.currentMonth,
                      "day-highlighted": N.highlighted,
                      today: N.today,
                      selected: N.selected
                    }]),
                    onClick: (h0) => P(N),
                    title: N.text,
                    key: N.id
                  }, k(N.day), 11, N5))), 128))
                ])
              ]),
              e.time ? (h(), f("div", $5, [
                p("div", S5, [
                  B[8] || (B[8] = p("div", { class: "arrow-down" }, null, -1)),
                  p("select", { onChange: g }, [
                    (h(), f(t0, null, n0(o, (N) => p("option", {
                      value: N,
                      key: N,
                      selected: N == l.value.getHours()
                    }, k(N), 9, O5)), 64))
                  ], 32)
                ]),
                B[10] || (B[10] = p("div", null, ":", -1)),
                p("div", D5, [
                  B[9] || (B[9] = p("div", { class: "arrow-down" }, null, -1)),
                  p("select", { onChange: w }, [
                    (h(), f(t0, null, n0(d, (N) => p("option", {
                      value: N,
                      key: N,
                      selected: N == l.value.getMinutes()
                    }, k(N), 9, T5)), 64))
                  ], 32)
                ]),
                O(G, {
                  class: "time-icon",
                  icon: "icon-clock"
                })
              ])) : y("", !0)
            ])
          ]),
          _: 1
        }, 512))
      ], 2);
    };
  }
}), F5 = /* @__PURE__ */ s0(V5, [["__scopeId", "data-v-4c905654"]]);
const P5 = { class: "input-group" }, q5 = ["required", "disabled", "modelValue"], E5 = ["selected"], W5 = ["value"], I5 = {
  key: 0,
  class: "no-options"
}, A5 = ["disabled"], Y5 = {
  name: "NiceDropdownSimple"
}, H5 = Object.assign(Y5, {
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
    const t = e, s = l0("$t"), n = c, a = e0({
      get() {
        return t.modelValue;
      },
      set(i) {
        n("update:modelValue", i), n("change", i);
      }
    });
    i1(() => t.values, () => {
      l();
    }), g0(() => {
      l();
    });
    function r(i) {
      const o = t.values.find((d) => d[t.keyName] == i.target.value);
      u(o || void 0);
    }
    function l() {
      setTimeout(() => {
        !a.value && t.values.length > 0 && !t.nullable && u(t.values[0]);
      });
    }
    function u(i) {
      i ? t.keyOnly ? a.value = i[t.keyName] : a.value = i : a.value = void 0;
    }
    return (i, o) => {
      const d = R("NiceLoading"), v = R("NiceIcon");
      return h(), f("div", {
        class: q(["nice-component nice-dropdown-simple", { disabled: e.disabled, "no-margin": e.noMargin }])
      }, [
        O(N0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        p("div", P5, [
          p("div", {
            class: q(["select-wrapper", { "no-value": a.value == null }])
          }, [
            p("select", {
              required: e.required,
              disabled: e.disabled,
              modelValue: a.value,
              onChange: r
            }, [
              e.nullable ? (h(), f("option", {
                key: 0,
                value: null,
                selected: !a.value
              }, k(e.nullText || K(s)("Nice", "None")), 9, E5)) : y("", !0),
              (h(!0), f(t0, null, n0(e.values, (m) => (h(), f("option", {
                value: m[e.keyName],
                key: m[e.keyName]
              }, k(m[e.valueName]), 9, W5))), 128))
            ], 40, q5),
            !e.nullable && !e.loading && (!e.values || e.values.length == 0) ? (h(), f("div", I5, k(K(s)("Nice", "No options")), 1)) : y("", !0),
            e.loading ? (h(), I(d, {
              key: 1,
              class: "no-options"
            })) : y("", !0),
            O(v, {
              class: "arrow-down",
              icon: "icon-chevron-down"
            })
          ], 2),
          e.addFunction ? (h(), f("button", {
            key: 0,
            class: "btn",
            type: "button",
            disabled: e.disabled,
            onClick: o[0] || (o[0] = (...m) => e.addFunction && e.addFunction(...m))
          }, [
            O(v, { icon: "icon-plus" })
          ], 8, A5)) : y("", !0)
        ])
      ], 2);
    };
  }
}), j5 = /* @__PURE__ */ s0(H5, [["__scopeId", "data-v-5dd89c41"]]);
const R5 = { class: "nice-loading-wrapper" }, U5 = {
  key: 0,
  class: "nice-loading-message"
}, Z5 = {
  name: "NiceLoading"
}, X5 = Object.assign(Z5, {
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
      return h(), f("div", {
        class: q(["nice-loading", [c.size ? "nice-loading-" + c.size : "", { "full-div": c.fullDiv }]])
      }, [
        p("div", R5, [
          O(n, { icon: "icon-half-loading" }),
          O(n, { icon: "icon-half-loading" })
        ]),
        c.message ? (h(), f("div", U5, k(c.message), 1)) : y("", !0)
      ], 2);
    };
  }
}), d1 = /* @__PURE__ */ s0(X5, [["__scopeId", "data-v-59133a53"]]);
const Q5 = ["title"], G5 = { class: "nice-dropdown-wrapper" }, J5 = { class: "input-group" }, K5 = { class: "select-wrapper" }, e8 = ["required", "value", "disabled"], t8 = {
  key: 0,
  class: "option"
}, c8 = {
  key: 1,
  class: "options"
}, s8 = ["onClick"], n8 = {
  key: 2,
  class: "no-options"
}, a8 = {
  key: 3,
  class: "no-options"
}, l8 = { class: "nice-dropdown-popup" }, i8 = {
  key: 0,
  class: "input-group"
}, o8 = ["placeholder", "name", "disabled"], r8 = { class: "list" }, u8 = ["onClick"], d8 = {
  key: 1,
  class: "element no-options"
}, h8 = {
  name: "NiceDropdown"
}, v8 = Object.assign(h8, {
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
    },
    nativeTitle: String
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: c }) {
    const t = e, s = l0("$t"), n = c;
    let a = null;
    const r = 500, l = Y(!1), u = Y(null), i = Y(null), o = Y(null), d = Y(null), v = Y(!1), m = Y(null), _ = Y(null), b = e0(() => t.keyOnly && !t.multiple ? m.value ? m.value.find((D) => D[t.keyName] == t.modelValue) : {} : (t.multiple && L(), t.modelValue)), M = e0(() => t.disabled ? !1 : !!t.modelValue && !!t.nullable), x = e0(() => m.value != null ? m.value.filter((D) => D._selected) : []), L = function() {
      m.value && t.modelValue != null && t.multiple && m.value.forEach((D) => {
        D._selected = !!t.modelValue.find((j) => j[t.keyName] == D[t.keyName]);
      });
    };
    g0(async () => {
      await F(), H();
    }), i1(() => t.values, async () => {
      await F(), H();
    });
    function S(D) {
      var j;
      (D.code == "Enter" || D.code == "Space") && (D.preventDefault(), (j = o.value) == null || j.toggle());
    }
    function T() {
      var D;
      (D = o.value) == null || D.close();
    }
    function g() {
      W(null), setTimeout(() => {
        T();
      });
    }
    function w(D) {
      W(D), setTimeout(() => {
        T();
      });
    }
    async function P(D) {
      D ? (m.value || await F(), _.value != null ? d.value = m.value.findIndex(
        (j) => j[t.keyName] == _.value[t.keyName]
      ) : d.value = -1, setTimeout(() => {
        var j;
        (j = i.value) == null || j.focus();
      }, 100), document.addEventListener("keydown", U)) : (u.value = null, v.value = !1, document.removeEventListener("keydown", U));
    }
    function W(D) {
      if (D) {
        const j = D[t.keyName], V = m.value.find((B) => B[t.keyName] == j);
        A(V || null);
      } else
        A(null);
      t.multiple || T();
    }
    function H() {
      m.value && m.value.length > 0 && !t.nullable && !t.modelValue ? A(m.value[0]) : L();
    }
    function A(D) {
      D ? t.multiple ? (D._selected = !D._selected, t.keyOnly ? (n("update:modelValue", x.value.filter.map((j) => j[t.keyName])), n("change", x.value.map((j) => j[t.keyName]))) : (n("update:modelValue", x.value), n("change", x.value))) : t.keyOnly ? (n("update:modelValue", D[t.keyName]), n("change", D[t.keyName])) : (n("update:modelValue", D), n("change", D)) : (n("update:modelValue", null), n("change", null));
    }
    function Q() {
      return clearTimeout(a), a = setTimeout(async () => {
        await F();
      }, r);
    }
    async function F() {
      if (t.values && (m.value = t.values), t.searchFunction) {
        v.value = !0;
        const D = await t.searchFunction(u.value);
        return d.value = 0, v.value = !1, m.value = D, D;
      } else
        return null;
    }
    function U(D) {
      D.key == "ArrowDown" ? (d.value < m.value.length - 1 && (d.value += 1), D.preventDefault()) : D.key == "ArrowUp" ? (d.value > 0 && (d.value -= 1), D.preventDefault()) : D.key == "Escape" ? (T(), D.preventDefault()) : D.key == "Enter" && (A(m.value[d.value]), T(), D.preventDefault());
    }
    return (D, j) => {
      const V = R("nice-icon"), B = R("NiceIcon");
      return h(), f("div", {
        title: e.nativeTitle,
        class: q(["nice-component nice-dropdown", {
          disabled: e.disabled,
          "no-margin": e.noMargin,
          "can-clear": M.value,
          "has-value": e.modelValue
        }])
      }, [
        O(N0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        p("div", G5, [
          O(t1, {
            "no-padding": "",
            placement: "bottom-start",
            ref_key: "popup",
            ref: o,
            class: "nice-dropdown-popup-wrapper",
            onChange: P,
            disabled: e.disabled
          }, {
            trigger: c0(() => [
              p("div", J5, [
                p("div", K5, [
                  p("div", {
                    class: q(["selected-value", { focus: l.value }])
                  }, [
                    p("input", {
                      required: e.required,
                      value: e.modelValue,
                      class: "hidden-input",
                      onFocus: j[0] || (j[0] = (E) => l.value = !0),
                      onBlur: j[1] || (j[1] = (E) => l.value = !1),
                      onKeypress: S,
                      disabled: e.disabled
                    }, null, 40, e8),
                    !e.loading && e.modelValue && !t.multiple ? (h(), f("div", t8, [
                      X(D.$slots, "selected-option", { item: b.value }, () => [
                        p("span", null, k(e.formatFunction ? e.formatFunction(e.modelValue) : b.value ? b.value[e.valueName] || b.value : e.modelValue), 1)
                      ], !0)
                    ])) : y("", !0),
                    t.multiple ? (h(), f("div", c8, [
                      (h(!0), f(t0, null, n0(x.value, (E) => (h(), f("div", {
                        class: "option",
                        key: E
                      }, [
                        X(D.$slots, "selected-option", i2({ item: E }, { ref_for: !0 }, E), () => [
                          p("span", null, k(e.formatFunction ? e.formatFunction(E) : E[t.valueName] || E), 1)
                        ], !0),
                        p("button", {
                          type: "button",
                          class: "btn btn-primary btn-sm",
                          onClick: (G) => w(E)
                        }, [
                          O(V, { icon: "icon-x" })
                        ], 8, s8)
                      ]))), 128))
                    ])) : y("", !0),
                    !e.loading && !e.modelValue || t.multiple && !x.value.length ? (h(), f("div", n8, k(e.nullText || K(s)("Nice", "None")), 1)) : y("", !0),
                    e.loading ? (h(), f("div", a8, k(K(s)("Nice", "Loading")), 1)) : y("", !0),
                    O(B, {
                      class: "arrow-down",
                      icon: "icon-chevron-down"
                    }),
                    O(B, {
                      class: "arrow-down clear",
                      icon: "icon-x",
                      onClick: g
                    })
                  ], 2)
                ])
              ])
            ]),
            content: c0(() => [
              p("div", l8, [
                e.searchFunction && !e.noSearch ? (h(), f("div", i8, [
                  _0(p("input", {
                    "onUpdate:modelValue": j[2] || (j[2] = (E) => u.value = E),
                    type: "text",
                    placeholder: K(s)("Nice", "Search..."),
                    name: K(s)("Nice", "Search"),
                    onInput: Q,
                    ref_key: "searchElement",
                    ref: i,
                    disabled: e.disabled
                  }, null, 40, o8), [
                    [J0, u.value]
                  ]),
                  v.value ? (h(), I(d1, {
                    key: 0,
                    class: "loading"
                  })) : y("", !0)
                ])) : y("", !0),
                p("div", r8, [
                  e.nullable ? (h(), f("div", {
                    key: 0,
                    class: q(["element", {
                      selected: e.modelValue == null
                    }]),
                    onClick: j[3] || (j[3] = (E) => W(void 0))
                  }, k(e.nullText || K(s)("Nice", "None")), 3)) : y("", !0),
                  (h(!0), f(t0, null, n0(m.value, (E, G) => (h(), f("div", {
                    class: q(["element", {
                      hover: d.value == G,
                      selected: e.modelValue && (!t.multiple && E[e.keyName] == b.value[e.keyName] || E._selected)
                    }]),
                    key: E[e.keyName],
                    onClick: (N) => W(E)
                  }, [
                    e.multiple ? (h(), I(R0, {
                      key: 0,
                      modelValue: E._selected,
                      noMargin: !0,
                      class: "nice-dropdown-item-checkbox"
                    }, null, 8, ["modelValue"])) : y("", !0),
                    X(D.$slots, "option", { item: E }, () => [
                      y0(k(e.formatFunction ? e.formatFunction(E) : E[e.valueName]), 1)
                    ], !0)
                  ], 10, u8))), 128)),
                  !v.value && (!m.value || m.value.length == 0) ? (h(), f("div", d8, k(K(s)("Nice", "No options")), 1)) : y("", !0)
                ])
              ])
            ]),
            _: 3
          }, 8, ["disabled"]),
          e.addFunction ? (h(), I(v0, {
            key: 0,
            class: "nice-dropdown-add",
            icon: "icon-plus",
            disabled: e.disabled,
            onClick: e.addFunction
          }, null, 8, ["disabled", "onClick"])) : y("", !0)
        ])
      ], 10, Q5);
    };
  }
}), m8 = /* @__PURE__ */ s0(v8, [["__scopeId", "data-v-9b3d7ba4"]]);
const f8 = { class: "nice-filters-wrapper" }, p8 = { class: "nice-component nice-filters" }, y8 = {
  key: 0,
  class: "nice-filters-options"
}, g8 = {
  key: 0,
  class: "nice-component nice-filters-pills"
}, b8 = ["title"], M8 = {
  name: "NiceFilters"
}, z8 = Object.assign(M8, {
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
    const t = e, s = l0("clone"), n = l0("$t"), a = r2(), r = u2(), l = c, u = Y(""), i = Y(t.modelValue), o = [
      { id: "true", name: n("Nice", "Yes") },
      { id: "false", name: n("Nice", "No") }
    ], d = (g) => g ? o.filter(
      (w) => w.name.toLowerCase().includes(g.toLowerCase())
    ) : o, v = e0(() => i.value ? i.value.filter((g) => g.value != null) : []), m = e0(() => {
      if (!i.value)
        return {};
      const g = {};
      return i.value.forEach((w) => {
        g[w.key] = M(w) || null;
      }), g;
    });
    g0(async () => {
      x();
    });
    function _(g) {
      const w = new Date(g.value), P = w.getDate(), W = w.getMonth() + 1, H = w.getFullYear(), A = w.getHours(), Q = w.getMinutes();
      return `${P}.${W}.${H} ${A}:${Q < 10 ? "0" : ""}${Q}`;
    }
    function b(g) {
      var w, P;
      return g.formatter ? g.formatter(g.value) : g.type == "date" ? _(g) : g.type == "boolean" ? g.value ? n("Nice", "Yes") : n("Nice", "No") : g.valueName ? g.value[g.valueName] : (w = g.value) != null && w.name ? g.value.name : (P = g.value) != null && P.value ? g.value.value : g.value;
    }
    function M(g) {
      var w;
      return g ? g.type == "date" ? !g.value || isNaN(new Date(g.value)) ? null : g.value ? new Date(g.value).toISOString() : null : g.valueRaw || (g.getKey ? g.getKey(g.value) : null) || ((w = g.value) == null ? void 0 : w.id) || g.value : null;
    }
    async function x() {
      await r.isReady();
      const g = s(a.query);
      g.search && (u.value = g.search), i.value.forEach(async (w) => {
        const P = g[w.key];
        if (w.type == "yesno") {
          let W = o.find(
            (H) => H.id == g[w.key]
          );
          g[w.key] || (W = null), w.value = W;
        } else if (w.type == "date")
          w.value = new Date(P);
        else if (w.type == "boolean")
          w.value = P == "true";
        else if (w.type == "select" && w.fetch) {
          const W = await w.fetch(P);
          w.value = W;
        } else if (w.type == "select" && w.searchFunction) {
          const W = await w.searchFunction();
          w.value = W.find((H) => H[w.keyName || "id"] == P);
        } else
          console.log("[NiceFilters] Query not handled: ", w.key, P);
      }), setTimeout(() => {
        l("update:modelValue", i), l("change", i);
      });
    }
    async function L() {
      setTimeout(async () => {
        await r.isReady();
        const g = {
          ...a.query,
          ...m.value,
          search: u.value
        };
        i.value.forEach((P) => {
          const W = M(P);
          g[P.key] = W;
        });
        const w = Object.keys(g).filter((P) => g[P] != null && g[P] != "").reduce((P, W) => ({ ...P, [W]: g[W] }), {});
        r.push({ query: w }), await r.isReady(), setTimeout(() => {
          l("update:modelValue", i.value), l("change", i.value);
        });
      });
    }
    async function S() {
      const g = { ...a.query, id: "new" };
      r.push({ query: g }), await r.isReady(), l("create");
    }
    function T(g) {
      g.value = null, L();
    }
    return (g, w) => {
      const P = R("NiceInput"), W = R("NiceSwitch"), H = R("NiceDate"), A = R("NiceDropdown"), Q = R("NiceButton");
      return h(), f("div", f8, [
        p("div", p8, [
          O(P, {
            title: K(n)("Nice", "Search"),
            placeholder: K(n)("Nice", "Search..."),
            icon: "icon-search",
            modelValue: u.value,
            "onUpdate:modelValue": w[0] || (w[0] = (F) => u.value = F),
            class: "w-300",
            "no-margin": "",
            onDebounce: L
          }, null, 8, ["title", "placeholder", "modelValue"]),
          i.value ? (h(), f("div", y8, [
            (h(!0), f(t0, null, n0(i.value, (F) => (h(), f("div", {
              class: "nice-filters-filter",
              key: F.key
            }, [
              F.type == "boolean" ? (h(), I(W, {
                key: 0,
                modelValue: F.value,
                "onUpdate:modelValue": (U) => F.value = U,
                title: F.name,
                isInline: "",
                isBlock: "",
                onChange: L,
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title"])) : y("", !0),
              F.type == "date" ? (h(), I(H, {
                key: 1,
                modelValue: F.value,
                "onUpdate:modelValue": (U) => F.value = U,
                title: F.name,
                time: F.time,
                onChange: L,
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "time"])) : y("", !0),
              F.type == "select" ? (h(), I(A, {
                key: 2,
                modelValue: F.value,
                "onUpdate:modelValue": (U) => F.value = U,
                title: F.name,
                "search-function": F.searchFunction,
                valueName: F.valueName,
                keyName: F.keyName,
                formatFunction: F.formatter,
                onChange: L,
                nullable: "",
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "search-function", "valueName", "keyName", "formatFunction"])) : y("", !0),
              F.type == "yesno" ? (h(), I(A, {
                key: 3,
                modelValue: F.value,
                "onUpdate:modelValue": (U) => F.value = U,
                title: F.name,
                "search-function": d,
                nullText: K(n)("Nice", "All"),
                onChange: L,
                valueName: "name",
                nullable: "",
                noSearch: "",
                noMargin: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "title", "nullText"])) : y("", !0)
            ]))), 128))
          ])) : y("", !0),
          w[1] || (w[1] = p("div", { class: "f-grow" }, null, -1)),
          X(g.$slots, "default", {}, void 0, !0),
          e.showCreateButton ? (h(), I(Q, {
            key: 1,
            disabled: e.disableCreateButton,
            text: K(n)("Nice", "Create"),
            onClick: S,
            icon: "icon-plus"
          }, null, 8, ["disabled", "text"])) : y("", !0)
        ]),
        e.showPills && v.value && v.value.length ? (h(), f("div", g8, [
          (h(!0), f(t0, null, n0(v.value, (F) => (h(), f("div", {
            class: "nice-filters-pill badge badge-primary",
            key: F.key,
            title: F.description
          }, [
            p("div", null, [
              p("small", null, k(F.name), 1),
              p("div", null, k(b(F)), 1)
            ]),
            O(Q, {
              icon: "icon-x",
              onClick: (U) => T(F)
            }, null, 8, ["onClick"])
          ], 8, b8))), 128))
        ])) : y("", !0)
      ]);
    };
  }
}), w8 = /* @__PURE__ */ s0(z8, [["__scopeId", "data-v-b3e06448"]]);
const x8 = ["xlink:href"], C8 = {
  name: "NiceIcon"
}, k8 = Object.assign(C8, {
  props: {
    icon: {
      type: String,
      required: !0
    },
    size: {
      type: Number,
      required: !1
    }
  },
  setup(e) {
    const c = e;
    return (t, s) => (h(), f("svg", {
      class: "nice-icon",
      style: C1({ height: e.size + "px", width: e.size + "px" })
    }, [
      p("use", {
        "xlink:href": "#" + c.icon
      }, null, 8, x8)
    ], 4));
  }
}), D1 = /* @__PURE__ */ s0(k8, [["__scopeId", "data-v-8e01a683"]]);
var _2 = B8;
function B8(e, c, t) {
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
const _8 = { class: "input-group" }, N8 = ["placeholder", "autocomplete", "type", "required", "disabled", "min", "max", "min-length", "max-length", "regex-pattern"], $8 = {
  key: 1,
  class: "input-group-append input-group-icon"
}, S8 = {
  key: 0,
  class: "nice-component-message"
}, O8 = {
  key: 1,
  class: "nice-component-message nice-error"
}, D8 = {
  name: "NiceInput"
}, T8 = Object.assign(D8, {
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
    const t = x1(), s = e;
    let n = null;
    const a = c, r = e0({
      get() {
        return !l.value || !s.formatter ? s.modelValue : s.formatter(s.modelValue);
      },
      set(d) {
        a("update:modelValue", d), a("change", d), clearTimeout(n), n = setTimeout(() => {
          a("debounce", d);
        }, 500);
      }
    }), l = Y(!0);
    function u(d) {
      l.value = d;
    }
    const i = e0(() => {
      if (typeof s.error == "string")
        return s.error;
      const d = _2(s.error, ["response", "data", s.prop]);
      return typeof d == "object" ? d.join("-") : d;
    });
    function o() {
      r.value = "";
    }
    return (d, v) => {
      const m = R("NiceIcon");
      return h(), f("div", {
        class: q(["nice-component nice-input", { "no-margin": e.noMargin, active: r.value, disabled: e.disabled }])
      }, [
        O(N0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        p("div", _8, [
          K(t).suffix || s.suffixText ? (h(), f("div", {
            key: 0,
            class: q(["input-group-suffix", { "input-group-suffix-text": s.suffixText }])
          }, [
            X(d.$slots, "suffix", {}, () => [
              y0(k(s.suffixText), 1)
            ], !0)
          ], 2)) : y("", !0),
          _0(p("input", {
            onBlur: v[0] || (v[0] = (_) => u(!0)),
            onFocus: v[1] || (v[1] = (_) => u(!1)),
            "onUpdate:modelValue": v[2] || (v[2] = (_) => r.value = _),
            class: q({ "text-right": e.textRight }),
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
          }, null, 42, N8), [
            [F2, r.value]
          ]),
          e.icon ? (h(), f("div", $8, [
            O(m, { icon: e.icon }, null, 8, ["icon"]),
            O(m, {
              icon: "icon-x",
              class: "clear-input",
              onClick: o
            })
          ])) : y("", !0),
          K(t).append || s.appendText ? (h(), f("div", {
            key: 2,
            class: q(["input-group-append", { "input-group-append-text": s.appendText }])
          }, [
            X(d.$slots, "append", {}, () => [
              y0(k(s.appendText), 1)
            ], !0)
          ], 2)) : y("", !0)
        ]),
        e.message ? (h(), f("div", S8, k(e.message), 1)) : y("", !0),
        i.value ? (h(), f("div", O8, k(i.value), 1)) : y("", !0)
      ], 2);
    };
  }
}), L8 = /* @__PURE__ */ s0(T8, [["__scopeId", "data-v-6e752325"]]);
const V8 = { class: "notification-info" }, F8 = {
  key: 0,
  class: "notification-title"
}, P8 = {
  key: 1,
  class: "notification.message"
}, q8 = {
  name: "NiceNotification"
}, E8 = Object.assign(q8, {
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
    const t = e, s = c;
    let n = null;
    function a() {
      n = setTimeout(() => {
        s("remove", t.notification);
      }, t.timeoutTime);
    }
    function r() {
      clearTimeout(n);
    }
    return g0(() => {
      a();
    }), (l, u) => {
      const i = R("NiceIcon");
      return h(), f("div", {
        class: q(["nice-notification", ["nice-notification-" + t.notification.type]]),
        onMouseover: r,
        onMouseleave: a
      }, [
        t.notification.icon ? (h(), I(i, {
          key: 0,
          class: "notification-icon",
          icon: t.notification.icon
        }, null, 8, ["icon"])) : y("", !0),
        p("div", V8, [
          t.notification.title ? (h(), f("div", F8, k(t.notification.title), 1)) : y("", !0),
          t.notification.message ? (h(), f("div", P8, k(t.notification.message), 1)) : y("", !0)
        ])
      ], 34);
    };
  }
}), N2 = /* @__PURE__ */ s0(E8, [["__scopeId", "data-v-18229dc5"]]);
const W8 = { class: "nice-notifications" }, I8 = {
  name: "NiceNotifications"
}, A8 = Object.assign(I8, {
  setup(e) {
    const c = l0("$t"), t = l0("nice"), s = 3e3, n = Y([]);
    function a({ message: l, type: u, title: i, icon: o }) {
      var d = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10),
        type: u,
        title: i,
        message: l,
        icon: o
      };
      i || (u == "danger" ? (d.title = c("Nice", "Error"), d.icon = "icon-alert-triangle") : u == "success" ? (d.title = c("Nice", "Success"), d.icon = "icon-smile") : u == "warning" && (d.title = c("Nice", "Warning"), d.icon = "icon-alert-circle")), n.value.unshift(d);
    }
    function r(l) {
      let u = n.value.findIndex((i) => i.id == l.id);
      u >= 0 && n.value.splice(u, 1);
    }
    return g0(() => {
      t.onNotification((l, u, i) => {
        a(l);
      });
    }), (l, u) => (h(), f("div", W8, [
      O(o2, {
        name: "notification",
        tag: "div"
      }, {
        default: c0(() => [
          (h(!0), f(t0, null, n0(n.value, (i) => (h(), I(N2, {
            key: i.id,
            notification: i,
            timeoutTime: s,
            onRemove: (o) => r(i)
          }, null, 8, ["notification", "onRemove"]))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Y8 = /* @__PURE__ */ s0(A8, [["__scopeId", "data-v-a3b90f70"]]);
const H8 = {
  name: "NicePanel"
}, j8 = Object.assign(H8, {
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
    },
    isForm: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["close"],
  setup(e, { expose: c, emit: t }) {
    const s = l0("nice"), n = Y(!1), a = Y(!1), r = Y(500), l = Y(null), u = t, i = e;
    g0(() => {
      document.addEventListener("keyup", _), s.onPanel((b) => {
        i.name == b.name && (n.value = b.isOpen), b.isOpen && d();
      });
    }), P2(() => {
      document.removeEventListener("keyup", _);
    });
    function o(b) {
      r.value = b;
    }
    function d() {
      setTimeout(() => {
        var M;
        const b = (M = l.value) == null ? void 0 : M.querySelectorAll("input");
        b && b[0] && b[0].focus && b[0].focus();
      });
    }
    function v() {
      u("close"), s.panel(i.name, !1);
    }
    function m(b) {
      if (a.value) {
        let M = 300;
        i.position == "right" ? M = document.body.clientWidth - b.clientX : i.position == "left" ? M = b.clientX : i.position == "top" ? M = b.clientY : i.position == "bottom" && (M = document.body.clientHeight - b.clientY), M >= 300 && o(M);
      }
    }
    function _(b) {
      b.key == "Escape" && v();
    }
    return c({ close: v }), (b, M) => (h(), I(X0(e.isForm ? "form" : "div"), {
      class: q(["nice-side-view", [e.position, { "no-select": a.value }]]),
      onMousemove: m,
      onMouseup: M[1] || (M[1] = (x) => a.value = !1),
      ref_key: "panelElement",
      ref: l
    }, {
      default: c0(() => [
        O(l1, { name: "side-view" }, {
          default: c0(() => [
            n.value ? (h(), f("div", {
              key: 0,
              class: q(["side-view-body", { "no-padding": e.noPadding }]),
              style: C1({ "--side-view-width": r.value + "px" })
            }, [
              p("div", {
                class: q(["handle", { active: a.value }]),
                ref: "handle",
                onMousedown: M[0] || (M[0] = (x) => a.value = !0)
              }, null, 34),
              X(b.$slots, "default")
            ], 6)) : y("", !0)
          ]),
          _: 3
        }),
        O(l1, { name: "side-overlay" }, {
          default: c0(() => [
            n.value ? (h(), f("div", {
              key: 0,
              class: "overlay",
              onClick: v
            })) : y("", !0)
          ]),
          _: 1
        })
      ]),
      _: 3
    }, 40, ["class"]));
  }
}), R8 = {
  name: "NiceSlot"
}, U8 = Object.assign(R8, {
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
    return (t, s) => (h(), f("div", {
      class: q(["nice-component nice-slot", { "no-margin": c.noMargin }])
    }, [
      O(N0, {
        title: c.title,
        caption: c.caption
      }, null, 8, ["title", "caption"]),
      X(t.$slots, "default")
    ], 2));
  }
}), Z8 = {
  "aria-hidden": "true",
  style: { display: "none" },
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, X8 = {
  id: "logo",
  viewBox: "0 0 731 501"
}, Q8 = { key: 0 }, G8 = {
  name: "NiceSvgs"
}, J8 = Object.assign(G8, {
  props: {
    isDevelopment: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const c = e;
    return (t, s) => (h(), f("svg", Z8, [
      p("defs", null, [
        s[2] || (s[2] = m1('<symbol id="icon-activity" viewBox="0 0 24 24"><path d="M22 11h-4c-0.439 0-0.812 0.283-0.949 0.684l-2.051 6.154-5.051-15.154c-0.175-0.524-0.741-0.807-1.265-0.633-0.31 0.103-0.535 0.343-0.633 0.633l-2.772 8.316h-3.279c-0.552 0-1 0.448-1 1s0.448 1 1 1h4c0.423-0.003 0.81-0.267 0.949-0.684l2.051-6.154 5.051 15.154c0.098 0.29 0.323 0.529 0.632 0.632 0.524 0.175 1.090-0.109 1.265-0.632l2.773-8.316h3.279c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-airplay" viewBox="0 0 24 24"><path d="M5 16h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM12.768 14.36c-0.035-0.043-0.079-0.087-0.128-0.128-0.424-0.354-1.055-0.296-1.408 0.128l-5 6c-0.144 0.172-0.232 0.396-0.232 0.64 0 0.552 0.448 1 1 1h10c0.225 0.001 0.453-0.075 0.64-0.232 0.424-0.354 0.482-0.984 0.128-1.408zM12 16.562l2.865 3.438h-5.73z"></path></symbol><symbol id="icon-alert-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 8v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-alert-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452zM11 8v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-alert-triangle" viewBox="0 0 24 24"><path d="M11.148 4.374c0.073-0.123 0.185-0.242 0.334-0.332 0.236-0.143 0.506-0.178 0.756-0.116s0.474 0.216 0.614 0.448l8.466 14.133c0.070 0.12 0.119 0.268 0.128 0.434-0.015 0.368-0.119 0.591-0.283 0.759-0.18 0.184-0.427 0.298-0.693 0.301l-16.937-0.001c-0.152-0.001-0.321-0.041-0.481-0.134-0.239-0.138-0.399-0.359-0.466-0.607s-0.038-0.519 0.092-0.745zM9.432 3.346l-8.47 14.14c-0.422 0.731-0.506 1.55-0.308 2.29s0.68 1.408 1.398 1.822c0.464 0.268 0.976 0.4 1.475 0.402h16.943c0.839-0.009 1.587-0.354 2.123-0.902s0.864-1.303 0.855-2.131c-0.006-0.536-0.153-1.044-0.406-1.474l-8.474-14.147c-0.432-0.713-1.11-1.181-1.854-1.363s-1.561-0.081-2.269 0.349c-0.429 0.26-0.775 0.615-1.012 1.014zM11 9v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-align-center" viewBox="0 0 24 24"><path d="M18 9h-12c-0.552 0-1 0.448-1 1s0.448 1 1 1h12c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18 17h-12c-0.552 0-1 0.448-1 1s0.448 1 1 1h12c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-justify" viewBox="0 0 24 24"><path d="M21 9h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 17h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-left" viewBox="0 0 24 24"><path d="M17 9h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17 17h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-align-right" viewBox="0 0 24 24"><path d="M21 9h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 5h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 13h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM21 17h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1h14c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-anchor" viewBox="0 0 24 24"><path d="M14 5c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM5 11h-3c-0.552 0-1 0.448-1 1 0 3.037 1.232 5.789 3.222 7.778s4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778c0-0.552-0.448-1-1-1h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h1.945c-0.23 2.086-1.173 3.956-2.581 5.364s-3.278 2.351-5.364 2.581v-12.071c0.703-0.181 1.332-0.549 1.828-1.045 0.723-0.723 1.172-1.725 1.172-2.829s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046v12.071c-2.086-0.23-3.956-1.173-5.364-2.581s-2.351-3.278-2.581-5.364h1.945c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-aperture" viewBox="0 0 24 24"><path d="M11.422 7l2.223-3.85c1.825 0.337 3.457 1.225 4.719 2.486 0.416 0.416 0.792 0.873 1.121 1.364h-5.194zM7.38 10l-2.222-3.847c0.153-0.179 0.312-0.351 0.478-0.517 1.5-1.5 3.525-2.472 5.775-2.617l-2.592 4.49zM7.958 15h-4.446c-0.332-0.938-0.512-1.948-0.512-3 0-1.43 0.333-2.781 0.926-3.982l2.6 4.504zM17.473 11.478l-1.431-2.478h4.446c0.332 0.938 0.512 1.948 0.512 3 0 1.43-0.333 2.781-0.926 3.982l-2.576-4.462zM12.588 20.981l4.032-6.981 2.222 3.848c-0.153 0.178-0.312 0.351-0.478 0.516-1.5 1.5-3.525 2.472-5.775 2.617zM10.7 22.924c0.046 0.008 0.092 0.014 0.139 0.015 0.381 0.040 0.769 0.061 1.161 0.061 3.037 0 5.789-1.232 7.778-3.222 0.366-0.366 0.706-0.757 1.017-1.171 0.042-0.047 0.079-0.097 0.11-0.149 1.318-1.813 2.095-4.046 2.095-6.458 0-1.539-0.317-3.005-0.888-4.336-0.016-0.044-0.034-0.086-0.055-0.126-0.553-1.244-1.33-2.367-2.279-3.316-1.701-1.701-3.96-2.849-6.478-3.146-0.046-0.008-0.092-0.014-0.139-0.015-0.381-0.040-0.769-0.061-1.161-0.061-3.037 0-5.789 1.232-7.778 3.222-0.366 0.365-0.706 0.757-1.017 1.171-0.042 0.047-0.079 0.097-0.111 0.149-1.317 1.813-2.094 4.046-2.094 6.458 0 1.539 0.317 3.005 0.888 4.336 0.016 0.044 0.034 0.086 0.055 0.126 0.553 1.244 1.33 2.367 2.279 3.316 1.701 1.701 3.96 2.849 6.478 3.146zM12.578 17l-2.223 3.85c-1.825-0.337-3.457-1.225-4.719-2.486-0.416-0.416-0.792-0.873-1.121-1.364h5.194zM15.465 12l-1.732 3h-3.466l-1.732-3 1.732-3h3.466z"></path></symbol><symbol id="icon-archive" viewBox="0 0 24 24"><path d="M4 9h16v11h-16zM1 2c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h1v12c0 0.552 0.448 1 1 1h18c0.552 0 1-0.448 1-1v-12h1c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM2 4h20v3h-20zM10 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-arrow-down" viewBox="0 0 24 24"><path d="M18.293 11.293l-5.293 5.293v-11.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7 7c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l7-7c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-arrow-down-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 8v5.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293v-5.586c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-arrow-down-left" viewBox="0 0 24 24"><path d="M17 16h-7.586l8.293-8.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-8.293 8.293v-7.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-arrow-down-right" viewBox="0 0 24 24"><path d="M16 7v7.586l-8.293-8.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l8.293 8.293h-7.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h10c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217c0.092-0.092 0.166-0.202 0.217-0.324 0.049-0.118 0.076-0.247 0.076-0.383v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-arrow-left" viewBox="0 0 24 24"><path d="M12.707 18.293l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7 7c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l7 7c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-arrow-left-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16 11h-5.586l2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4 4c-0.096 0.096-0.168 0.206-0.217 0.324-0.051 0.122-0.076 0.253-0.076 0.383 0 0.256 0.098 0.512 0.293 0.707l4 4c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293h5.586c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-arrow-right" viewBox="0 0 24 24"><path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-arrow-right-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h5.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-5.586c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-arrow-up" viewBox="0 0 24 24"><path d="M5.707 12.707l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.586l5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-7 7c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-arrow-up-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-5.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.096-0.096-0.206-0.168-0.324-0.217-0.122-0.051-0.253-0.076-0.383-0.076-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293v5.586c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-arrow-up-left" viewBox="0 0 24 24"><path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-arrow-up-right" viewBox="0 0 24 24"><path d="M7 8h7.586l-8.293 8.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l8.293-8.293v7.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-at-sign" viewBox="0 0 24 24"><path d="M15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM15.74 15.318c0.13 0.182 0.274 0.353 0.431 0.51 0.723 0.723 1.725 1.172 2.829 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-1c0-3.037-1.233-5.789-3.222-7.778s-4.741-3.222-7.779-3.221-5.788 1.232-7.778 3.222-3.221 4.741-3.221 7.778 1.233 5.789 3.222 7.778 4.741 3.222 7.778 3.221c2.525 0 4.855-0.852 6.69-2.269 0.437-0.337 0.518-0.965 0.18-1.403s-0.965-0.518-1.403-0.18c-1.487 1.148-3.377 1.844-5.435 1.852-2.54-0.009-4.776-1.014-6.398-2.636-1.627-1.629-2.634-3.877-2.634-6.363s1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.363v1c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1c-0.835-0.627-1.875-1-3-1-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464c0.070-0.070 0.139-0.143 0.205-0.217z"></path></symbol><symbol id="icon-award" viewBox="0 0 24 24"><path d="M14.986 15.424l0.75 5.652-3.221-1.933c-0.311-0.184-0.703-0.196-1.029 0l-3.221 1.933 0.751-5.651c0.921 0.371 1.929 0.575 2.984 0.575s2.063-0.205 2.986-0.576zM15.332 12.991c-0.058 0.030-0.113 0.065-0.163 0.105-0.92 0.573-2.005 0.904-3.169 0.904-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757 3.156 0.67 4.243 1.757 1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.278 0.278-0.583 0.529-0.911 0.748zM7.14 14.355l-1.131 8.513c-0.073 0.547 0.312 1.050 0.86 1.123 0.234 0.031 0.461-0.022 0.646-0.134l4.485-2.691 4.486 2.691c0.474 0.284 1.088 0.131 1.372-0.343 0.122-0.203 0.163-0.431 0.134-0.646l-1.13-8.515c0.28-0.215 0.546-0.448 0.795-0.697 1.446-1.446 2.343-3.447 2.343-5.656s-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343-4.21 0.897-5.657 2.343-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657c0.25 0.25 0.516 0.483 0.796 0.698z"></path></symbol><symbol id="icon-bar-chart" viewBox="0 0 24 24"><path d="M13 20v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1zM19 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v16c0 0.552 0.448 1 1 1s1-0.448 1-1zM7 20v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-bar-chart-2" viewBox="0 0 24 24"><path d="M19 20v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1zM13 20v-16c0-0.552-0.448-1-1-1s-1 0.448-1 1v16c0 0.552 0.448 1 1 1s1-0.448 1-1zM7 20v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-battery" viewBox="0 0 24 24"><path d="M3 5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM3 7h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM24 13v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-battery-charging" viewBox="0 0 24 24"><path d="M5 17h-2c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3.19c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.19c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM15 7h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3.19c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.19c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM24 13v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM10.168 5.445l-4 6c-0.306 0.46-0.182 1.080 0.277 1.387 0.172 0.115 0.367 0.169 0.555 0.168h4.131l-2.964 4.445c-0.306 0.46-0.182 1.080 0.277 1.387s1.080 0.182 1.387-0.277l4-6c0.106-0.156 0.169-0.348 0.169-0.555 0-0.552-0.448-1-1-1h-4.131l2.964-4.445c0.306-0.46 0.182-1.080-0.277-1.387s-1.080-0.182-1.387 0.277z"></path></symbol><symbol id="icon-bell" viewBox="0 0 24 24"><path d="M17 8c0 4.011 0.947 6.52 1.851 8h-13.702c0.904-1.48 1.851-3.989 1.851-8 0-1.381 0.559-2.63 1.464-3.536s2.155-1.464 3.536-1.464 2.63 0.559 3.536 1.464 1.464 2.155 1.464 3.536zM19 8c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050-3.684 0.785-4.95 2.050-2.050 3.017-2.050 4.95c0 6.127-2.393 8.047-2.563 8.174-0.453 0.308-0.573 0.924-0.269 1.381 0.192 0.287 0.506 0.443 0.832 0.445h18c0.552 0 1-0.448 1-1 0-0.339-0.168-0.638-0.429-0.821-0.176-0.13-2.571-2.050-2.571-8.179zM12.865 20.498c-0.139 0.239-0.359 0.399-0.608 0.465s-0.52 0.037-0.759-0.101c-0.162-0.094-0.283-0.222-0.359-0.357-0.274-0.48-0.884-0.647-1.364-0.373s-0.647 0.884-0.373 1.364c0.25 0.439 0.623 0.823 1.093 1.096 0.716 0.416 1.535 0.501 2.276 0.304s1.409-0.678 1.824-1.394c0.277-0.478 0.114-1.090-0.363-1.367s-1.090-0.114-1.367 0.363z"></path></symbol><symbol id="icon-bell-off" viewBox="0 0 24 24"><path d="M12.865 20.498c-0.139 0.239-0.359 0.399-0.608 0.465s-0.52 0.037-0.759-0.101c-0.162-0.094-0.283-0.222-0.359-0.357-0.274-0.48-0.884-0.647-1.364-0.373s-0.647 0.884-0.373 1.364c0.25 0.439 0.623 0.823 1.093 1.096 0.716 0.416 1.535 0.501 2.276 0.304s1.409-0.678 1.824-1.394c0.277-0.478 0.114-1.090-0.363-1.367s-1.090-0.114-1.367 0.363zM19 7.977c-0.004-1.923-0.784-3.666-2.043-4.928-1.264-1.268-3.014-2.055-4.947-2.058-1.448-0.002-2.799 0.437-3.9 1.18-0.457 0.309-0.578 0.931-0.269 1.389s0.931 0.578 1.389 0.269c0.764-0.516 1.708-0.829 2.73-0.837 1.448 0.011 2.684 0.569 3.581 1.47 0.902 0.905 1.458 2.15 1.459 3.526-0.042 1.658 0.173 3.476 0.665 5.277 0.146 0.533 0.695 0.847 1.228 0.701s0.847-0.695 0.701-1.228c-0.443-1.625-0.632-3.25-0.594-4.708 0-0.005 0-0.011 0-0.016 0-0.003 0-0.006 0-0.009zM6.996 8.411l7.59 7.589h-9.437c0.872-1.428 1.783-3.812 1.847-7.589zM0.293 1.707l4.856 4.856c-0.106 0.493-0.155 0.984-0.149 1.45 0 6.114-2.393 8.034-2.563 8.161-0.453 0.308-0.573 0.924-0.269 1.381 0.192 0.287 0.506 0.443 0.832 0.445h13.586l5.707 5.707c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-bluetooth" viewBox="0 0 24 24"><path d="M13 9.586v-6.172l3.086 3.086zM13 14.414l3.086 3.086-3.086 3.086zM5.793 7.207l4.793 4.793-4.793 4.793c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.793-3.793v8.586c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l5.5-5.5c0.391-0.391 0.391-1.024 0-1.414l-4.793-4.793 4.793-4.793c0.391-0.391 0.391-1.024 0-1.414l-5.5-5.5c-0.181-0.181-0.431-0.293-0.707-0.293-0.552 0-1 0.448-1 1v8.586l-3.793-3.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-bold" viewBox="0 0 24 24"><path d="M7 11v-6h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879zM5 12v8c0 0.552 0.448 1 1 1h9c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536-0.561-2.632-1.464-3.536c-0.325-0.325-0.695-0.606-1.1-0.832 0.034-0.032 0.067-0.064 0.1-0.097 0.903-0.903 1.464-2.155 1.464-3.535s-0.561-2.632-1.464-3.536-2.156-1.464-3.536-1.464h-8c-0.552 0-1 0.448-1 1zM7 13h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879h-8z"></path></symbol><symbol id="icon-book" viewBox="0 0 24 24"><path d="M6.5 1c-0.966 0-1.843 0.393-2.475 1.025s-1.025 1.509-1.025 2.475v15c0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025h13.5c0.552 0 1-0.448 1-1v-20c0-0.552-0.448-1-1-1zM19 18v3h-12.5c-0.414 0-0.788-0.167-1.061-0.439s-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439zM6.5 3h12.5v13h-12.5c-0.537 0-1.045 0.121-1.5 0.337v-11.837c0-0.414 0.167-0.788 0.439-1.061s0.647-0.439 1.061-0.439z"></path></symbol><symbol id="icon-book-open" viewBox="0 0 24 24"><path d="M21 4v13h-6c-0.728 0-1.412 0.195-2 0.535v-10.535c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879zM11 17.535c-0.588-0.34-1.272-0.535-2-0.535h-6v-13h5c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121zM22 2h-6c-1.38 0-2.632 0.561-3.536 1.464-0.167 0.167-0.322 0.346-0.464 0.536-0.142-0.19-0.297-0.369-0.464-0.536-0.904-0.903-2.156-1.464-3.536-1.464h-6c-0.552 0-1 0.448-1 1v15c0 0.552 0.448 1 1 1h7c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586h7c0.552 0 1-0.448 1-1v-15c0-0.552-0.448-1-1-1z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 24 24"><path d="M18.419 21.814c0.161 0.116 0.363 0.186 0.581 0.186 0.552 0 1-0.448 1-1v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-10c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c-0.001 0.199 0.060 0.404 0.186 0.581 0.321 0.449 0.946 0.554 1.395 0.232l6.419-4.584zM18 19.057l-5.419-3.871c-0.355-0.254-0.819-0.242-1.162 0l-5.419 3.871v-14.057c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-box" viewBox="0 0 24 24"><path d="M18.961 6.828l-6.961 4.027-6.961-4.027 6.456-3.689c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-7.001 4.001c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-6.495-3.711c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622v-7.462zM13 20.578v-7.991l7-4.049v7.462c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5z"></path></symbol><symbol id="icon-briefcase" viewBox="0 0 24 24"><path d="M9 6v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 20v-12h6v12zM7 8v12h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM17 6v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM17 20v-12h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293z"></path></symbol><symbol id="icon-calendar" viewBox="0 0 24 24"><path d="M7 2v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v1h-6v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20 9h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h6v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM4 11h16v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"></path></symbol><symbol id="icon-camera" viewBox="0 0 24 24"><path d="M24 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-6c-0.326 0.002-0.64 0.158-0.832 0.445l-1.703 2.555h-3.465c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h18c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM22 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-18c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.346 0 0.65-0.175 0.832-0.445l1.703-2.555h4.93l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM17 13c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 13c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path></symbol><symbol id="icon-camera-off" viewBox="0 0 24 24"><path d="M9 4h5.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v9.34c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.34c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8.262 9.676c-0.146 0.163-0.283 0.337-0.409 0.522-0.78 1.139-1.023 2.489-0.788 3.745s0.952 2.426 2.091 3.205 2.489 1.023 3.745 0.788c0.887-0.166 1.73-0.572 2.424-1.197l3.261 3.261h-15.586c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2.586zM10.413 8.998l-8.706-8.705c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-0.586c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h17.586l1.707 1.707c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-13.268-13.268zM13.907 15.321c-0.4 0.336-0.875 0.555-1.375 0.649-0.756 0.142-1.563-0.005-2.247-0.473s-1.113-1.167-1.255-1.923 0.005-1.563 0.473-2.247c0.056-0.082 0.115-0.16 0.176-0.233z"></path></symbol><symbol id="icon-cast" viewBox="0 0 24 24"><path d="M1.8 17.080c0.938 0.191 1.729 0.694 2.292 1.386 0.405 0.497 0.693 1.093 0.829 1.741 0.114 0.54 0.644 0.886 1.185 0.772s0.886-0.644 0.772-1.185c-0.202-0.96-0.63-1.847-1.235-2.591-0.845-1.038-2.038-1.796-3.443-2.083-0.541-0.11-1.069 0.239-1.18 0.78s0.239 1.069 0.78 1.18zM1.889 13.044c2.001 0.223 3.744 1.163 5.006 2.546 1.119 1.226 1.859 2.799 2.061 4.526 0.064 0.549 0.561 0.941 1.109 0.877s0.941-0.561 0.877-1.109c-0.251-2.15-1.174-4.112-2.57-5.642-1.578-1.729-3.763-2.908-6.263-3.186-0.549-0.061-1.043 0.334-1.104 0.883s0.334 1.043 0.883 1.104zM3 8v-2c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM2 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-check" viewBox="0 0 24 24"><path d="M19.293 5.293l-10.293 10.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0l11-11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-check-circle" viewBox="0 0 24 24"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z"></path></symbol><symbol id="icon-check-square" viewBox="0 0 24 24"><path d="M8.293 11.707l3 3c0.391 0.391 1.024 0.391 1.414 0l10-10c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-9.293 9.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM20 12v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h11c0.552 0 1-0.448 1-1s-0.448-1-1-1h-11c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-chevron-down" viewBox="0 0 24 24"><path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-chevron-left" viewBox="0 0 24 24"><path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevron-right" viewBox="0 0 24 24"><path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-chevron-up" viewBox="0 0 24 24"><path d="M18.707 14.293l-6-6c-0.391-0.391-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevrons-down" viewBox="0 0 24 24"><path d="M6.293 13.707l5 5c0.391 0.391 1.024 0.391 1.414 0l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM6.293 6.707l5 5c0.391 0.391 1.024 0.391 1.414 0l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-chevrons-left" viewBox="0 0 24 24"><path d="M11.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM18.707 16.293l-4.293-4.293 4.293-4.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chevrons-right" viewBox="0 0 24 24"><path d="M13.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM6.707 17.707l5-5c0.391-0.391 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.293 4.293-4.293 4.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-chevrons-up" viewBox="0 0 24 24"><path d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-chrome" viewBox="0 0 24 24"><path d="M7.402 10.033l-2.244-3.881c0.152-0.178 0.312-0.35 0.478-0.516 1.63-1.63 3.878-2.636 6.364-2.636s4.734 1.006 6.364 2.636c0.416 0.416 0.792 0.873 1.121 1.364h-7.485c-1.38 0-2.632 0.561-3.536 1.464-0.447 0.447-0.81 0.978-1.063 1.569zM10.7 22.924c0.046 0.008 0.092 0.014 0.139 0.015 0.381 0.040 0.769 0.061 1.161 0.061 3.037 0 5.789-1.232 7.778-3.222s3.222-4.741 3.222-7.778c0-1.539-0.317-3.005-0.888-4.336-0.016-0.044-0.034-0.086-0.055-0.126-0.553-1.244-1.33-2.367-2.279-3.316-1.989-1.99-4.741-3.222-7.778-3.222s-5.789 1.232-7.778 3.222c-0.366 0.365-0.706 0.757-1.017 1.171-0.042 0.047-0.079 0.097-0.111 0.149-1.317 1.813-2.094 4.046-2.094 6.458 0 3.037 1.232 5.789 3.222 7.778 1.701 1.701 3.96 2.849 6.478 3.146zM12.595 16.965l-2.241 3.885c-1.825-0.337-3.457-1.225-4.718-2.486-1.63-1.63-2.636-3.878-2.636-6.364 0-1.43 0.333-2.782 0.927-3.982l3.643 6.302c0.236 0.45 0.539 0.859 0.894 1.215 0.904 0.904 2.156 1.465 3.536 1.465 0.201 0 0.4-0.012 0.595-0.035zM14.638 13.431c-0.015 0.022-0.030 0.046-0.044 0.069l-0.076 0.132c-0.115 0.176-0.248 0.34-0.396 0.489-0.545 0.544-1.293 0.879-2.122 0.879s-1.577-0.335-2.121-0.879c-0.166-0.166-0.312-0.351-0.436-0.551-0.011-0.024-0.024-0.047-0.037-0.070l-0.082-0.141c-0.207-0.408-0.324-0.87-0.324-1.359 0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121c0 0.518-0.131 1.006-0.362 1.431zM12.588 20.981l3.64-6.311c0.489-0.772 0.772-1.688 0.772-2.67 0-1.125-0.373-2.165-1-3h4.488c0.332 0.938 0.512 1.948 0.512 3 0 2.486-1.006 4.734-2.636 6.364-1.5 1.5-3.525 2.472-5.776 2.617z"></path></symbol><symbol id="icon-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364z"></path></symbol><symbol id="icon-clipboard" viewBox="0 0 24 24"><path d="M7 5c0 0.552 0.225 1.053 0.586 1.414s0.862 0.586 1.414 0.586h6c0.552 0 1.053-0.225 1.414-0.586s0.586-0.862 0.586-1.414h1c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 1c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-1c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586zM9 3h6v2h-6z"></path></symbol><symbol id="icon-clock" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 6v6c0 0.389 0.222 0.727 0.553 0.894l4 2c0.494 0.247 1.095 0.047 1.342-0.447s0.047-1.095-0.447-1.342l-3.448-1.723v-5.382c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-cloud" viewBox="0 0 24 24"><path d="M18 11c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828-0.447 2.103-1.172 2.828-1.723 1.172-2.828 1.172h-8.995c-1.463-0.008-2.853-0.461-4.005-1.258-1.334-0.922-2.348-2.304-2.784-3.992-0.483-1.872-0.163-3.761 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75zM18 9h-0.52c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.583-6.821-0.961s-4.334 2.16-5.503 4.143-1.582 4.415-0.961 6.821c0.56 2.169 1.867 3.951 3.583 5.137 1.478 1.023 3.261 1.603 5.132 1.613h9.005c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243-0.673-3.158-1.757-4.243-2.586-1.757-4.243-1.757z"></path></symbol><symbol id="icon-cloud-drizzle" viewBox="0 0 24 24"><path d="M7 19v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM7 13v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15 19v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15 13v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 21v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 15v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20.401 17.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515z"></path></symbol><symbol id="icon-cloud-lightning" viewBox="0 0 24 24"><path d="M19.199 17.88c1.623-0.33 2.961-1.288 3.808-2.566s1.208-2.884 0.878-4.507c-0.303-1.491-1.136-2.742-2.267-3.592-1.018-0.767-2.279-1.21-3.614-1.215h-0.524c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.162-5.503 4.144-1.582 4.415-0.961 6.821c0.597 2.313 2.043 4.184 3.919 5.365 0.143 0.090 0.288 0.176 0.436 0.258 0.483 0.268 1.092 0.093 1.359-0.39s0.093-1.092-0.39-1.359c-0.115-0.064-0.229-0.131-0.34-0.201-1.462-0.921-2.583-2.374-3.048-4.173-0.483-1.872-0.163-3.761 0.747-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.747 2.739 2.408 3.223 4.28c0.116 0.435 0.506 0.75 0.969 0.75h1.256c0.896 0.004 1.74 0.3 2.42 0.812 0.754 0.567 1.307 1.397 1.509 2.392 0.22 1.083-0.019 2.15-0.585 3.005s-1.456 1.491-2.539 1.711c-0.541 0.11-0.891 0.638-0.781 1.179s0.638 0.891 1.179 0.781zM12.168 10.445l-4 6c-0.306 0.46-0.182 1.080 0.277 1.387 0.172 0.115 0.367 0.169 0.555 0.168h4.131l-2.964 4.445c-0.306 0.46-0.182 1.080 0.277 1.387s1.080 0.182 1.387-0.277l4-6c0.106-0.156 0.169-0.348 0.169-0.555 0-0.552-0.448-1-1-1h-4.131l2.964-4.445c0.306-0.46 0.182-1.080-0.277-1.387s-1.080-0.182-1.387 0.277z"></path></symbol><symbol id="icon-cloud-off" viewBox="0 0 24 24"><path d="M23.531 17.34c0.646-1.525 0.612-3.17 0.036-4.592s-1.696-2.627-3.221-3.273c-0.776-0.328-1.588-0.483-2.357-0.475h-0.506c-0.62-1.78-1.761-3.26-3.211-4.309-1.298-0.938-2.844-1.531-4.487-1.687-0.55-0.052-1.038 0.351-1.090 0.901s0.351 1.038 0.901 1.090c1.286 0.122 2.493 0.586 3.505 1.317 1.283 0.928 2.252 2.286 2.671 3.934 0.112 0.437 0.503 0.754 0.968 0.754h1.271c0.49-0.005 1.030 0.094 1.555 0.317 1.017 0.431 1.763 1.232 2.148 2.182s0.407 2.044-0.024 3.061c-0.215 0.509 0.022 1.095 0.531 1.311s1.095-0.022 1.311-0.531zM4.854 6.268l12.732 12.732h-8.596c-0.96 0.010-1.903-0.172-2.774-0.527-1.431-0.583-2.669-1.635-3.471-3.085-0.935-1.692-1.097-3.601-0.601-5.324 0.432-1.5 1.36-2.854 2.709-3.797zM0.293 1.707l3.129 3.13c-1.581 1.2-2.676 2.856-3.2 4.675-0.637 2.212-0.43 4.67 0.773 6.845 1.030 1.863 2.626 3.219 4.466 3.969 1.117 0.454 2.324 0.686 3.549 0.674h8.99c0.489-0.001 0.967-0.060 1.417-0.169l2.876 2.876c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-cloud-rain" viewBox="0 0 24 24"><path d="M15 13v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM7 13v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 15v8c0 0.552 0.448 1 1 1s1-0.448 1-1v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM20.401 17.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515z"></path></symbol><symbol id="icon-cloud-snow" viewBox="0 0 24 24"><path d="M20.401 18.496c1.517-0.665 2.623-1.883 3.181-3.312s0.572-3.074-0.092-4.591c-0.574-1.311-1.563-2.316-2.752-2.925-0.836-0.428-1.771-0.66-2.73-0.668h-0.528c-0.725-2.057-2.143-3.708-3.915-4.753-1.983-1.169-4.415-1.582-6.821-0.961s-4.334 2.161-5.503 4.144-1.582 4.415-0.961 6.821c0.509 1.97 1.634 3.623 3.099 4.783 0.433 0.343 1.062 0.27 1.405-0.163s0.27-1.062-0.163-1.405c-1.132-0.897-2.008-2.179-2.405-3.716-0.483-1.871-0.163-3.76 0.748-5.305s2.408-2.739 4.28-3.223 3.761-0.163 5.305 0.748 2.739 2.408 3.223 4.28c0.115 0.435 0.505 0.75 0.968 0.75h1.252c0.647 0.005 1.275 0.162 1.834 0.448 0.793 0.406 1.448 1.073 1.832 1.947 0.443 1.012 0.435 2.106 0.062 3.061s-1.109 1.765-2.121 2.208c-0.506 0.222-0.736 0.811-0.515 1.317s0.811 0.736 1.317 0.515zM8 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM8 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM12 23c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM16 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM16 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-code" viewBox="0 0 24 24"><path d="M16.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM7.293 5.293l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-codepen" viewBox="0 0 24 24"><path d="M5.256 12l-2.256 1.579v-3.159zM21 13.579l-2.256-1.579 2.256-1.579zM17 13.221l3.212 2.249-7.212 4.687v-4.137zM8.744 12l3.256-2.279 3.256 2.279-3.256 2.279zM3.788 15.469l3.212-2.248 4 2.8v4.137zM12.557 1.169c-0.159-0.107-0.351-0.169-0.557-0.169s-0.398 0.062-0.557 0.169l-9.969 6.48c-0.112 0.070-0.213 0.163-0.293 0.278-0.125 0.178-0.184 0.383-0.181 0.585v6.976c-0.002 0.184 0.046 0.37 0.148 0.536 0.041 0.068 0.091 0.131 0.149 0.188 0.047 0.047 0.1 0.089 0.158 0.127l0.019 0.012 9.969 6.48c0.159 0.107 0.351 0.169 0.557 0.169s0.398-0.062 0.557-0.169l9.969-6.48c0.112-0.069 0.213-0.162 0.293-0.277 0.125-0.178 0.183-0.383 0.181-0.586v-6.976c0.002-0.184-0.046-0.37-0.148-0.536-0.041-0.067-0.091-0.131-0.149-0.188-0.047-0.047-0.1-0.089-0.158-0.127l-0.019-0.012zM13 7.979v-4.136l7.212 4.688-3.212 2.248zM11 3.843v4.137l-4 2.8-3.212-2.249z"></path></symbol><symbol id="icon-codesandbox" viewBox="0 0 24 24"><path d="M14.441 4.245l-2.441 1.41-2.441-1.41 1.936-1.106c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM4 13.733l2.5 1.444v2.83l-1.995-1.14c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622zM17.5 18.007v-2.83l2.5-1.444v2.267c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5zM18.961 6.828l-6.961 4.027-6.961-4.027 2.51-1.435 3.951 2.283c0.319 0.184 0.697 0.173 1.001 0l3.95-2.282zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l3.198-1.828c0.218-0.043 0.411-0.157 0.554-0.316l3.249-1.857c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-3.258-1.861c-0.147-0.167-0.343-0.276-0.553-0.317l-3.197-1.827c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-3.2 1.828c-0.21 0.041-0.406 0.15-0.553 0.316l-3.249 1.857c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l3.258 1.862c0.142 0.16 0.335 0.274 0.554 0.316l3.197 1.827c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-2.5-1.428v-4.55c0-0.368-0.199-0.69-0.5-0.866l-4-2.311v-2.885zM13 20.578v-7.991l7-4.049v2.885l-4 2.311c-0.319 0.184-0.498 0.517-0.5 0.866v4.55z"></path></symbol><symbol id="icon-coffee" viewBox="0 0 24 24"><path d="M19 15v-6c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121-0.335 1.577-0.879 2.121-1.292 0.879-2.121 0.879zM2 7c-0.552 0-1 0.448-1 1v9c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h8c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536-0.561-2.632-1.464-3.536-2.156-1.464-3.536-1.464h-1zM3 9h14v8c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-8c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121zM5 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM9 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-columns" viewBox="0 0 24 24"><path d="M12 4h7c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1h7c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1zM12 2h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h7c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM11 3v18c0 0.552 0.448 1 1 1s1-0.448 1-1v-18c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-command" viewBox="0 0 24 24"><path d="M16 16h2c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414zM8 16v2c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586zM8 8h-2c-0.553 0-1.051-0.223-1.414-0.586s-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM16 8h-8v8h8zM18 4c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586h-2v-2c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586zM10 10v-4c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172zM10 14h-4c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 14v4c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172zM14 10v4h-4v-4zM18 2c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828v4h4c1.104 0 2.106-0.449 2.828-1.172s1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172z"></path></symbol><symbol id="icon-compass" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM17.189 8.076c0.066-0.196 0.072-0.418 0-0.632-0.175-0.524-0.741-0.807-1.265-0.632l-6.36 2.12c-0.29 0.098-0.529 0.323-0.632 0.632l-2.12 6.36c-0.066 0.196-0.072 0.418 0 0.632 0.175 0.524 0.741 0.807 1.265 0.632l6.36-2.12c0.29-0.098 0.529-0.323 0.632-0.632zM14.659 9.341l-1.33 3.988-3.988 1.33 1.329-3.988z"></path></symbol><symbol id="icon-copy" viewBox="0 0 24 24"><path d="M11 8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v9c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h9c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-9c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11 10h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-9c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM5 14h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1c0 0.552 0.448 1 1 1s1-0.448 1-1v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-9c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v9c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-down-left" viewBox="0 0 24 24"><path d="M19 4v7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-9.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.092 0.092-0.166 0.202-0.217 0.324-0.15 0.362-0.078 0.795 0.217 1.090l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3.293-3.293h9.586c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-corner-down-right" viewBox="0 0 24 24"><path d="M3 4v7c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-corner-left-down" viewBox="0 0 24 24"><path d="M20 3h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293v-9.586c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-left-up" viewBox="0 0 24 24"><path d="M20 19h-7c-0.829 0-1.577-0.335-2.121-0.879s-0.879-1.292-0.879-2.121v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.096-0.096-0.206-0.168-0.324-0.217s-0.247-0.076-0.383-0.076-0.265 0.027-0.383 0.076c-0.118 0.049-0.228 0.121-0.324 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464h7c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-corner-right-down" viewBox="0 0 24 24"><path d="M4 5h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293v-9.586c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-corner-right-up" viewBox="0 0 24 24"><path d="M4 21h7c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.092-0.092-0.202-0.166-0.324-0.217-0.362-0.15-0.795-0.078-1.090 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3.293-3.293v9.586c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-corner-up-left" viewBox="0 0 24 24"><path d="M21 20v-7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-9.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5 5c-0.096 0.096-0.168 0.206-0.217 0.324s-0.076 0.247-0.076 0.383 0.027 0.265 0.076 0.383c0.049 0.118 0.121 0.228 0.217 0.324l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3.293-3.293h9.586c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v7c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-corner-up-right" viewBox="0 0 24 24"><path d="M5 20v-7c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v7c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-cpu" viewBox="0 0 24 24"><path d="M6 5h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-12c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 8c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1zM10 10h4v4h-4zM1 15h2v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h4v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-4v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v3h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-credit-card" viewBox="0 0 24 24"><path d="M3 3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v12c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h18c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM22 9h-20v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM2 11h20v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-18c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707z"></path></symbol><symbol id="icon-crop" viewBox="0 0 24 24"><path d="M7.077 7.077l8.932-0.077c0.268 0 0.516 0.111 0.698 0.293s0.293 0.431 0.293 0.707v9h-9c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.698zM1.009 7.13l4.068-0.035-0.077 8.896c0 0.837 0.337 1.588 0.879 2.13s1.293 0.879 2.121 0.879h9v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4v-9c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.13-0.879l-8.896 0.077 0.035-4.068c0.005-0.553-0.439-1.004-0.991-1.009s-1.004 0.439-1.009 0.991l-0.036 4.103-4.103 0.036c-0.552 0.005-0.996 0.456-0.991 1.009s0.456 0.996 1.009 0.991z"></path></symbol><symbol id="icon-crosshair" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM13 20.945v-2.945c0-0.552-0.448-1-1-1s-1 0.448-1 1v2.945c-2.086-0.23-3.956-1.173-5.364-2.581s-2.351-3.278-2.581-5.364h2.945c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2.945c0.23-2.086 1.173-3.956 2.581-5.364s3.278-2.351 5.364-2.581v2.945c0 0.552 0.448 1 1 1s1-0.448 1-1v-2.945c2.086 0.23 3.956 1.173 5.364 2.581s2.351 3.278 2.581 5.364h-2.945c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.945c-0.23 2.086-1.173 3.956-2.581 5.364s-3.278 2.351-5.364 2.581z"></path></symbol><symbol id="icon-database" viewBox="0 0 24 24"><path d="M4 5.002c0 0 0.003-0.095 0.213-0.288 0.245-0.225 0.671-0.483 1.306-0.73 1.499-0.585 3.821-0.984 6.481-0.984s4.982 0.399 6.482 0.984c0.634 0.247 1.061 0.505 1.306 0.73 0.205 0.189 0.212 0.281 0.212 0.288 0 0.003-0.007 0.095-0.213 0.284-0.245 0.225-0.671 0.483-1.306 0.73-1.499 0.585-3.821 0.984-6.481 0.984s-4.982-0.399-6.482-0.984c-0.634-0.247-1.061-0.505-1.306-0.73-0.208-0.192-0.212-0.284-0.212-0.284zM20 14.532v4.471c-0.041 0.097-0.096 0.181-0.217 0.291-0.245 0.225-0.671 0.482-1.303 0.728-1.495 0.582-3.809 0.978-6.48 0.978s-4.985-0.396-6.48-0.978c-0.633-0.246-1.058-0.503-1.303-0.728-0.12-0.11-0.176-0.194-0.199-0.242l-0.006-4.514c0.248 0.126 0.51 0.242 0.782 0.348 1.797 0.699 4.377 1.114 7.206 1.114s5.409-0.415 7.206-1.114c0.277-0.108 0.543-0.225 0.794-0.354zM20 7.527v4.463c0 0.004 0 0.008 0 0.013-0.041 0.097-0.096 0.181-0.217 0.291-0.245 0.225-0.671 0.482-1.303 0.728-1.495 0.582-3.809 0.978-6.48 0.978s-4.985-0.396-6.48-0.978c-0.633-0.246-1.058-0.503-1.303-0.728-0.12-0.11-0.176-0.194-0.199-0.242-0.001-0.040-0.004-0.079-0.009-0.117l-0.005-4.407c0.248 0.128 0.513 0.244 0.788 0.352 1.801 0.702 4.388 1.12 7.208 1.12s5.407-0.418 7.208-1.12c0.276-0.108 0.542-0.225 0.792-0.353zM2 5v14c0 0.058 0.002 0.116 0.007 0.174 0.057 0.665 0.425 1.197 0.857 1.594 0.498 0.457 1.175 0.824 1.93 1.118 1.797 0.699 4.377 1.114 7.206 1.114s5.409-0.415 7.206-1.114c0.755-0.294 1.432-0.661 1.93-1.118 0.432-0.397 0.8-0.929 0.857-1.594 0.005-0.058 0.007-0.116 0.007-0.174v-14c0-0.056-0.002-0.112-0.007-0.168-0.055-0.664-0.422-1.195-0.852-1.59-0.498-0.459-1.177-0.827-1.933-1.122-1.801-0.702-4.388-1.12-7.208-1.12s-5.407 0.418-7.208 1.12c-0.756 0.295-1.435 0.664-1.933 1.122-0.43 0.395-0.797 0.927-0.852 1.59-0.005 0.056-0.007 0.112-0.007 0.168z"></path></symbol><symbol id="icon-delete" viewBox="0 0 24 24"><path d="M21 5c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12.546l-6.125-7 6.125-7zM21 3h-13c-0.3 0-0.568 0.132-0.753 0.341l-7 8c-0.333 0.38-0.326 0.942 0 1.317l7 8c0.198 0.226 0.474 0.341 0.753 0.342h13c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-disc" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-dollar-sign" viewBox="0 0 24 24"><path d="M11 11h-1.5c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732h1.5zM13 13h1.5c0.691 0 1.314 0.279 1.768 0.732s0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732h-1.5zM17 4h-4v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-1.5c-1.242 0-2.369 0.505-3.182 1.318s-1.318 1.94-1.318 3.182 0.505 2.369 1.318 3.182 1.94 1.318 3.182 1.318h1.5v5h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h5v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h1.5c1.242 0 2.369-0.505 3.182-1.318s1.318-1.94 1.318-3.182-0.505-2.369-1.318-3.182-1.94-1.318-3.182-1.318h-1.5v-5h4c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-download" viewBox="0 0 24 24"><path d="M20 15v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 12.586v-9.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v9.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5 5c0.092 0.092 0.202 0.166 0.324 0.217s0.253 0.076 0.383 0.076c0.256 0 0.512-0.098 0.707-0.293l5-5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-download-cloud" viewBox="0 0 24 24"><path d="M11 12v6.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.092 0.092 0.202 0.166 0.324 0.217 0.245 0.101 0.521 0.101 0.766 0 0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293v-6.586c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.455 18.908c1.355-0.953 2.196-2.367 2.46-3.878s-0.050-3.126-1.003-4.481c-0.825-1.174-1.998-1.963-3.287-2.324-0.526-0.147-1.072-0.223-1.621-0.225h-0.523c-0.722-2.058-2.137-3.71-3.907-4.758-1.981-1.172-4.412-1.589-6.819-0.972s-4.338 2.155-5.51 4.136-1.589 4.412-0.972 6.819c0.371 1.446 1.075 2.725 1.983 3.734 0.37 0.41 1.002 0.444 1.412 0.074s0.444-1.002 0.074-1.412c-0.692-0.769-1.242-1.76-1.533-2.893-0.481-1.873-0.157-3.761 0.756-5.304s2.412-2.736 4.285-3.216 3.761-0.157 5.304 0.756 2.736 2.412 3.216 4.285c0.116 0.435 0.506 0.751 0.97 0.751h1.256c0.37 0.001 0.737 0.052 1.090 0.151 0.861 0.241 1.639 0.765 2.19 1.548 0.636 0.904 0.845 1.978 0.669 2.988s-0.736 1.95-1.64 2.585c-0.452 0.318-0.56 0.941-0.243 1.393s0.941 0.56 1.393 0.243z"></path></symbol><symbol id="icon-droplet" viewBox="0 0 24 24"><path d="M12.707 1.983c-0.391-0.391-1.025-0.39-1.415 0.001l-5.653 5.663c-1.757 1.758-2.635 4.063-2.634 6.365s0.88 4.607 2.638 6.363c1.756 1.755 4.059 2.633 6.358 2.634 2.308-0.001 4.613-0.881 6.37-2.638 1.755-1.756 2.633-4.059 2.634-6.358-0.001-2.309-0.881-4.613-2.638-6.369zM12.001 4.105l4.952 4.952c1.368 1.367 2.052 3.156 2.052 4.949s-0.682 3.583-2.049 4.95-3.156 2.051-4.949 2.052-3.583-0.682-4.95-2.049-2.051-3.156-2.052-4.949 0.682-3.583 2.049-4.95z"></path></symbol><symbol id="icon-edit" viewBox="0 0 24 24"><path d="M11 3h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h7c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17.793 1.793l-9.5 9.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l9.5-9.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM19.207 3.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-9.304 9.304-2.114 0.529 0.529-2.114z"></path></symbol><symbol id="icon-edit-2" viewBox="0 0 24 24"><path d="M16.293 2.293l-13.5 13.5c-0.117 0.116-0.21 0.268-0.258 0.444l-1.5 5.5c-0.046 0.163-0.049 0.346 0 0.526 0.145 0.533 0.695 0.847 1.228 0.702l5.5-1.5c0.159-0.042 0.315-0.129 0.444-0.258l13.5-13.5c0.747-0.747 1.121-1.729 1.121-2.707s-0.374-1.96-1.121-2.707-1.729-1.121-2.707-1.121-1.96 0.374-2.707 1.121zM17.707 3.707c0.357-0.357 0.824-0.535 1.293-0.535s0.936 0.178 1.293 0.536 0.535 0.823 0.535 1.292-0.178 0.936-0.535 1.293l-13.312 13.312-3.556 0.97 0.97-3.555z"></path></symbol><symbol id="icon-edit-3" viewBox="0 0 24 24"><path d="M12 21h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1zM15.793 2.793l-12.5 12.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l12.5-12.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM17.207 4.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-12.304 12.304-2.115 0.529 0.529-2.115z"></path></symbol><symbol id="icon-external-link" viewBox="0 0 24 24"><path d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-eye" viewBox="0 0 24 24"><path d="M0.106 11.553c-0.136 0.274-0.146 0.603 0 0.894 0 0 0.396 0.789 1.12 1.843 0.451 0.656 1.038 1.432 1.757 2.218 0.894 0.979 2.004 1.987 3.319 2.8 1.595 0.986 3.506 1.692 5.698 1.692s4.103-0.706 5.698-1.692c1.315-0.813 2.425-1.821 3.319-2.8 0.718-0.786 1.306-1.562 1.757-2.218 0.724-1.054 1.12-1.843 1.12-1.843 0.136-0.274 0.146-0.603 0-0.894 0 0-0.396-0.789-1.12-1.843-0.451-0.656-1.038-1.432-1.757-2.218-0.894-0.979-2.004-1.987-3.319-2.8-1.595-0.986-3.506-1.692-5.698-1.692s-4.103 0.706-5.698 1.692c-1.315 0.813-2.425 1.821-3.319 2.8-0.719 0.786-1.306 1.561-1.757 2.218-0.724 1.054-1.12 1.843-1.12 1.843zM2.14 12c0.163-0.281 0.407-0.681 0.734-1.158 0.41-0.596 0.94-1.296 1.585-2.001 0.805-0.881 1.775-1.756 2.894-2.448 1.35-0.834 2.901-1.393 4.647-1.393s3.297 0.559 4.646 1.393c1.119 0.692 2.089 1.567 2.894 2.448 0.644 0.705 1.175 1.405 1.585 2.001 0.328 0.477 0.572 0.876 0.734 1.158-0.163 0.281-0.407 0.681-0.734 1.158-0.41 0.596-0.94 1.296-1.585 2.001-0.805 0.881-1.775 1.756-2.894 2.448-1.349 0.834-2.9 1.393-4.646 1.393s-3.297-0.559-4.646-1.393c-1.119-0.692-2.089-1.567-2.894-2.448-0.644-0.705-1.175-1.405-1.585-2.001-0.328-0.477-0.572-0.877-0.735-1.158zM16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-eye-off" viewBox="0 0 24 24"><path d="M10.128 5.214c0.651-0.152 1.296-0.221 1.86-0.214 1.758 0 3.309 0.559 4.658 1.393 1.119 0.692 2.089 1.567 2.894 2.448 0.644 0.705 1.175 1.405 1.585 2.001 0.327 0.475 0.57 0.874 0.733 1.155-0.546 0.953-1.16 1.821-1.778 2.542-0.359 0.419-0.311 1.051 0.108 1.41s1.051 0.311 1.41-0.108c0.818-0.954 1.611-2.112 2.283-3.37 0.148-0.279 0.163-0.618 0.013-0.919 0 0-0.396-0.789-1.12-1.843-0.451-0.656-1.038-1.432-1.757-2.218-0.894-0.979-2.004-1.987-3.319-2.8-1.595-0.985-3.506-1.691-5.686-1.691-0.734-0.009-1.54 0.079-2.34 0.266-0.538 0.126-0.872 0.664-0.746 1.202s0.664 0.872 1.202 0.746zM10.027 11.442l2.531 2.531c-0.182 0.061-0.372 0.094-0.563 0.101-0.513 0.018-1.030-0.159-1.434-0.536s-0.617-0.88-0.635-1.393c-0.008-0.238 0.025-0.476 0.101-0.704zM5.983 7.397l2.553 2.553c-0.434 0.691-0.636 1.484-0.608 2.266 0.036 1.022 0.463 2.033 1.271 2.785s1.846 1.107 2.868 1.071c0.692-0.024 1.379-0.228 1.984-0.608l2.322 2.322c-1.378 0.799-2.895 1.196-4.384 1.214-1.734 0-3.285-0.559-4.634-1.393-1.119-0.692-2.089-1.567-2.894-2.448-0.644-0.705-1.175-1.405-1.585-2.001-0.326-0.475-0.57-0.873-0.732-1.154 1.050-1.822 2.376-3.379 3.841-4.607zM0.293 1.707l4.271 4.271c-1.731 1.479-3.269 3.358-4.445 5.549-0.148 0.279-0.164 0.619-0.013 0.92 0 0 0.396 0.789 1.12 1.843 0.451 0.656 1.038 1.432 1.757 2.218 0.894 0.979 2.004 1.987 3.319 2.8 1.595 0.986 3.506 1.692 5.71 1.692 1.993-0.024 4.019-0.601 5.815-1.759l4.466 4.466c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.876-8.876c-0.002-0.002-0.005-0.005-0.007-0.007l-4.209-4.21c-0.008-0.007-0.016-0.016-0.024-0.024l-8.884-8.883c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-facebook" viewBox="0 0 24 24"><path d="M17 3v2h-2c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414v3c0 0.552 0.448 1 1 1h2.719l-0.5 2h-2.219c-0.552 0-1 0.448-1 1v7h-2v-7c0-0.552-0.448-1-1-1h-2v-2h2c0.552 0 1-0.448 1-1v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM18 1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v2h-2c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h2v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7h2c0.466 0 0.858-0.319 0.97-0.757l1-4c0.134-0.536-0.192-1.079-0.728-1.213-0.083-0.021-0.167-0.031-0.242-0.030h-3v-2h3c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1z"></path></symbol><symbol id="icon-fast-forward" viewBox="0 0 24 24"><path d="M14 16.955v-9.91l6.371 4.955zM3 16.955v-9.91l6.371 4.955zM2.614 19.789l9-7c0.251-0.195 0.383-0.486 0.386-0.78v6.991c0 0.552 0.448 1 1 1 0.232 0 0.446-0.079 0.614-0.211l9-7c0.436-0.339 0.514-0.967 0.175-1.403-0.054-0.069-0.115-0.129-0.175-0.175l-9-7c-0.436-0.339-1.064-0.261-1.403 0.175-0.143 0.184-0.212 0.401-0.211 0.614v6.99c-0.002-0.211-0.071-0.424-0.211-0.604-0.054-0.069-0.115-0.129-0.175-0.175l-9-7c-0.436-0.339-1.064-0.261-1.403 0.175-0.143 0.184-0.212 0.401-0.211 0.614v14c0 0.552 0.448 1 1 1 0.232 0 0.446-0.079 0.614-0.211z"></path></symbol><symbol id="icon-feather" viewBox="0 0 24 24"><path d="M18.111 15.792c0.069-0.053 0.13-0.115 0.183-0.184l2.653-2.661c1.367-1.367 2.051-3.161 2.051-4.952s-0.684-3.585-2.051-4.952-3.161-2.051-4.952-2.051-3.585 0.684-4.952 2.051l-6.75 6.75c-0.195 0.195-0.293 0.451-0.293 0.707v8.086l-2.707 2.707c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.707-2.707h8.086c0.277 0 0.527-0.112 0.708-0.294zM9.414 16h5.665l-1.994 2h-5.671zM17.073 14h-5.659l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-9.293 9.293v-5.672l6.457-6.457c0.977-0.977 2.256-1.465 3.538-1.465s2.561 0.488 3.538 1.465 1.465 2.256 1.465 3.538-0.488 2.561-1.465 3.538z"></path></symbol><symbol id="icon-figma" viewBox="0 0 24 24"><path d="M13 12.5c0-0.691 0.279-1.314 0.732-1.768s1.077-0.732 1.768-0.732 1.314 0.279 1.768 0.732 0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732-1.314-0.279-1.768-0.732-0.732-1.077-0.732-1.768zM8.5 8c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732h2.5v5zM13 8v-5h2.5c0.691 0 1.314 0.279 1.768 0.732s0.732 1.077 0.732 1.768-0.279 1.314-0.732 1.768-1.077 0.732-1.768 0.732zM11 17v2.5c0 0.691-0.279 1.314-0.732 1.768s-1.077 0.732-1.768 0.732-1.314-0.279-1.768-0.732-0.732-1.077-0.732-1.768 0.279-1.314 0.732-1.768 1.077-0.732 1.768-0.732zM4 12.5c0 1.242 0.505 2.369 1.318 3.182 0.112 0.112 0.23 0.218 0.353 0.318-0.123 0.1-0.241 0.206-0.353 0.318-0.813 0.813-1.318 1.94-1.318 3.182s0.505 2.369 1.318 3.182 1.94 1.318 3.182 1.318 2.369-0.505 3.182-1.318 1.318-1.94 1.318-3.182v-3.258c0.715 0.478 1.575 0.758 2.5 0.758 1.242 0 2.369-0.505 3.182-1.318s1.318-1.94 1.318-3.182-0.505-2.369-1.318-3.182c-0.112-0.112-0.23-0.218-0.353-0.318 0.123-0.1 0.241-0.206 0.353-0.318 0.813-0.813 1.318-1.94 1.318-3.182s-0.505-2.369-1.318-3.182-1.94-1.318-3.182-1.318h-7c-1.242 0-2.369 0.505-3.182 1.318s-1.318 1.94-1.318 3.182 0.505 2.369 1.318 3.182c0.112 0.112 0.23 0.218 0.353 0.318-0.123 0.1-0.241 0.206-0.353 0.318-0.813 0.813-1.318 1.94-1.318 3.182zM6 12.5c0-0.691 0.279-1.314 0.732-1.768s1.077-0.732 1.768-0.732h2.5v5h-2.5c-0.691 0-1.314-0.279-1.768-0.732s-0.732-1.077-0.732-1.768z"></path></symbol><symbol id="icon-file" viewBox="0 0 24 24"><path d="M17.586 8h-3.586v-3.586zM20.707 8.293l-7-7c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-7c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.276-0.112-0.526-0.293-0.707zM12 3v6c0 0.552 0.448 1 1 1h6v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-file-minus" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 16h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-file-plus" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM9 16h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-file-text" viewBox="0 0 24 24"><path d="M17.586 7h-2.586v-2.586zM20.707 7.293l-6-6c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076h-8c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-12c0-0.276-0.112-0.526-0.293-0.707zM13 3v5c0 0.552 0.448 1 1 1h5v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM16 12h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM16 16h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10 8h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-film" viewBox="0 0 24 24"><path d="M16 11h-8v-8h8zM8 13h8v8h-8zM6 6h-3v-1.82c0-0.326 0.131-0.62 0.346-0.834s0.508-0.346 0.834-0.346h1.82zM3 8h3v3h-3zM6 16h-3v-3h3zM3 18h3v3h-1.82c-0.326 0-0.62-0.131-0.834-0.346s-0.346-0.508-0.346-0.834zM21 16h-3v-3h3zM18 18h3v1.82c0 0.326-0.131 0.62-0.346 0.834s-0.508 0.346-0.834 0.346h-1.82zM21 6h-3v-3h1.82c0.326 0 0.62 0.131 0.834 0.346s0.346 0.508 0.346 0.834zM23 7v-2.82c0-0.878-0.357-1.674-0.931-2.249s-1.371-0.931-2.249-0.931h-15.64c-0.878 0-1.674 0.357-2.249 0.931s-0.931 1.371-0.931 2.249v15.64c0 0.878 0.357 1.674 0.931 2.249s1.371 0.931 2.249 0.931h15.64c0.878 0 1.674-0.357 2.249-0.931s0.931-1.371 0.931-2.249zM18 8h3v3h-3z"></path></symbol><symbol id="icon-filter" viewBox="0 0 24 24"><path d="M19.845 4l-6.609 7.814c-0.147 0.173-0.236 0.399-0.236 0.646v6.922l-2-1v-5.922c0.001-0.227-0.077-0.457-0.236-0.646l-6.609-7.814zM22 2h-20c-0.552 0-1 0.448-1 1 0 0.247 0.089 0.473 0.236 0.646l7.764 9.18v6.174c0 0.389 0.222 0.727 0.553 0.894l4 2c0.494 0.247 1.095 0.047 1.342-0.447 0.072-0.146 0.106-0.301 0.105-0.447v-8.174l7.764-9.18c0.357-0.422 0.304-1.053-0.118-1.409-0.189-0.16-0.419-0.238-0.646-0.237z"></path></symbol><symbol id="icon-flag" viewBox="0 0 24 24"><path d="M5 13.397v-9.859c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 1.298 0 2.278-0.175 3-0.397v9.859c-0.44 0.218-1.365 0.538-3 0.538-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-1.298 0-2.278 0.175-3 0.397zM5 22v-6.462c0.44-0.218 1.365-0.538 3-0.538 1.281 0 2.361 0.421 3.629 0.928 1.232 0.493 2.652 1.072 4.371 1.072 3.247 0 4.507-1.093 4.707-1.293 0.195-0.195 0.293-0.451 0.293-0.707v-12c0-0.552-0.448-1-1-1-0.265 0-0.506 0.103-0.685 0.272-0.096 0.078-0.984 0.728-3.315 0.728-1.281 0-2.361-0.421-3.629-0.928-1.232-0.493-2.652-1.072-4.371-1.072-3.247 0-4.507 1.093-4.707 1.293-0.195 0.195-0.293 0.451-0.293 0.707v19c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-folder" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-folder-minus" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM9 15h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-folder-plus" viewBox="0 0 24 24"><path d="M23 19v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-8.465l-1.703-2.555c-0.182-0.27-0.486-0.445-0.832-0.445h-5c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM21 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4.465l1.703 2.555c0.192 0.287 0.506 0.443 0.832 0.445h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM9 15h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-framer" viewBox="0 0 24 24"><path d="M12.414 8l-5-5h10.586v5zM6 16v-6h5.586l5 5h-4.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h7c0.256 0 0.512-0.098 0.707-0.293 0.391-0.391 0.391-1.024 0-1.414l-5.293-5.293h4.586c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1 0 0.276 0.112 0.526 0.293 0.707l5.293 5.293h-4.586c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1s1-0.448 1-1zM4.293 16.707l7 7c0.391 0.391 1.024 0.391 1.414 0 0.195-0.195 0.293-0.451 0.293-0.707v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v4.586l-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM5 17h7c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-frown" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM16.8 15.4c0 0-0.131-0.173-0.331-0.383-0.145-0.153-0.338-0.341-0.577-0.54-0.337-0.281-0.772-0.59-1.297-0.853-0.705-0.352-1.579-0.624-2.595-0.624s-1.89 0.272-2.595 0.624c-0.525 0.263-0.96 0.572-1.297 0.853-0.239 0.199-0.432 0.387-0.577 0.54-0.2 0.21-0.331 0.383-0.331 0.383-0.331 0.442-0.242 1.069 0.2 1.4s1.069 0.242 1.4-0.2c0.041-0.050 0.181-0.206 0.181-0.206 0.1-0.105 0.237-0.239 0.408-0.382 0.243-0.203 0.549-0.419 0.91-0.6 0.48-0.239 1.050-0.412 1.701-0.412s1.221 0.173 1.701 0.413c0.36 0.18 0.667 0.397 0.91 0.6 0.171 0.143 0.308 0.277 0.408 0.382 0.14 0.155 0.181 0.205 0.181 0.205 0.331 0.442 0.958 0.531 1.4 0.2s0.531-0.958 0.2-1.4zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-gift" viewBox="0 0 24 24"><path d="M11 13v8h-6v-8zM13 21v-8h6v8zM7.5 6c-0.414 0-0.788-0.167-1.061-0.439s-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439c0.629 0 1.142 0.223 1.584 0.586 0.376 0.308 0.701 0.719 0.976 1.177 0.241 0.401 0.433 0.821 0.58 1.203zM13.346 6c0.161-0.416 0.353-0.836 0.593-1.237 0.275-0.459 0.601-0.869 0.976-1.177 0.443-0.363 0.956-0.586 1.585-0.586 0.414 0 0.788 0.167 1.061 0.439s0.439 0.647 0.439 1.061-0.167 0.788-0.439 1.061-0.647 0.439-1.061 0.439zM11 8v3h-8v-3h4.5zM19.663 6c0.216-0.455 0.337-0.963 0.337-1.5 0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025c-1.16 0-2.109 0.43-2.852 1.039-0.603 0.494-1.068 1.103-1.423 1.694-0.080 0.133-0.155 0.266-0.225 0.398-0.070-0.132-0.145-0.265-0.225-0.398-0.355-0.591-0.82-1.2-1.423-1.694-0.743-0.609-1.692-1.039-2.852-1.039-0.966 0-1.843 0.393-2.475 1.025s-1.025 1.509-1.025 2.475c0 0.537 0.121 1.045 0.337 1.5h-2.337c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h1v9c0 0.552 0.448 1 1 1h16c0.552 0 1-0.448 1-1v-9h1c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM13 8h8v3h-8z"></path></symbol><symbol id="icon-git-branch" viewBox="0 0 24 24"><path d="M20 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM16.954 9.862c-0.2 1.865-1.039 3.537-2.297 4.795s-2.93 2.098-4.795 2.297c-0.185-0.685-0.547-1.297-1.033-1.783-0.497-0.496-1.126-0.864-1.829-1.045v-11.126c0-0.552-0.448-1-1-1s-1 0.448-1 1v11.126c-0.703 0.181-1.332 0.549-1.828 1.045-0.723 0.723-1.172 1.725-1.172 2.829s0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172c0.506-0.506 0.878-1.148 1.055-1.867 2.409-0.211 4.574-1.277 6.188-2.89s2.679-3.779 2.89-6.188c0.719-0.177 1.361-0.549 1.867-1.055 0.723-0.722 1.172-1.724 1.172-2.828s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.486 0.486 1.098 0.848 1.783 1.033z"></path></symbol><symbol id="icon-git-commit" viewBox="0 0 24 24"><path d="M15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.010 13h5.95c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5.95c-0.037 0-0.073 0.002-0.109 0.006-0.198-0.982-0.685-1.86-1.365-2.541-0.904-0.904-2.156-1.465-3.536-1.465s-2.632 0.561-3.536 1.464c-0.681 0.681-1.167 1.559-1.365 2.54-0.032-0.002-0.066-0.004-0.099-0.004h-5.95c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.95c0.033 0 0.067-0.002 0.099-0.005 0.198 0.982 0.685 1.86 1.365 2.54 0.904 0.904 2.156 1.465 3.536 1.465s2.632-0.561 3.536-1.464c0.681-0.681 1.167-1.559 1.365-2.541 0.036 0.004 0.072 0.006 0.109 0.006z"></path></symbol><symbol id="icon-git-merge" viewBox="0 0 24 24"><path d="M20 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM7 21v-5.999c0.284 0.379 0.595 0.736 0.929 1.070 1.614 1.614 3.779 2.679 6.188 2.89 0.177 0.719 0.549 1.361 1.055 1.867 0.722 0.723 1.724 1.172 2.828 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172c-0.486 0.486-0.848 1.098-1.033 1.783-1.865-0.2-3.537-1.039-4.795-2.297s-2.098-2.93-2.297-4.795c0.683-0.186 1.295-0.549 1.781-1.035 0.723-0.722 1.172-1.724 1.172-2.828s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046v11.126c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-git-pull-request" viewBox="0 0 24 24"><path d="M20 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM8 6c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM13 7h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v6.126c-0.703 0.181-1.332 0.549-1.828 1.045-0.723 0.723-1.172 1.725-1.172 2.829s0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828c-0.497-0.497-1.125-0.864-1.828-1.045v-6.127c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5 9.874v11.126c0 0.552 0.448 1 1 1s1-0.448 1-1v-11.126c0.703-0.181 1.332-0.549 1.828-1.045 0.723-0.723 1.172-1.725 1.172-2.829s-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828c0.496 0.497 1.125 0.865 1.828 1.046z"></path></symbol><symbol id="icon-github" viewBox="0 0 24 24"><path d="M8.713 18.042c-1.268 0.38-2.060 0.335-2.583 0.17-0.231-0.073-0.431-0.176-0.614-0.302-0.411-0.284-0.727-0.675-1.119-1.172-0.356-0.451-0.85-1.107-1.551-1.476-0.185-0.098-0.386-0.177-0.604-0.232-0.536-0.134-1.079 0.192-1.213 0.728s0.192 1.079 0.728 1.213c0.074 0.023 0.155 0.060 0.155 0.060 0.252 0.133 0.487 0.404 0.914 0.946 0.366 0.464 0.856 1.098 1.553 1.579 0.332 0.229 0.711 0.426 1.149 0.564 1.015 0.321 2.236 0.296 3.76-0.162 0.529-0.159 0.829-0.716 0.67-1.245s-0.716-0.829-1.245-0.67zM17 22v-3.792c0.052-0.684-0.056-1.343-0.292-1.942 0.777-0.171 1.563-0.427 2.297-0.823 2.083-1.124 3.496-3.242 3.496-6.923 0-1.503-0.516-2.887-1.379-3.981 0.355-1.345 0.226-2.726-0.293-3.933-0.122-0.283-0.359-0.482-0.634-0.564-0.357-0.106-1.732-0.309-4.373 1.362-2.273-0.541-4.557-0.509-6.646-0.002-2.639-1.669-4.013-1.466-4.37-1.36-0.296 0.088-0.521 0.3-0.635 0.565-0.554 1.292-0.624 2.672-0.292 3.932-0.93 1.178-1.387 2.601-1.379 4.017 0 3.622 1.389 5.723 3.441 6.859 0.752 0.416 1.56 0.685 2.357 0.867-0.185 0.468-0.286 0.961-0.304 1.456-0.005 0.141-0.003 0.283 0.005 0.424l0.001 3.838c0 0.552 0.448 1 1 1s1-0.448 1-1v-3.87c0-0.021-0.001-0.045-0.002-0.069-0.006-0.084-0.007-0.168-0.004-0.252 0.020-0.568 0.241-1.126 0.665-1.564 0.145-0.149 0.246-0.347 0.274-0.572 0.068-0.548-0.321-1.048-0.869-1.116-0.34-0.042-0.677-0.094-1.006-0.159-0.79-0.156-1.518-0.385-2.147-0.733-1.305-0.723-2.391-2.071-2.41-5.042 0.013-1.241 0.419-2.319 1.224-3.165 0.257-0.273 0.35-0.671 0.212-1.040-0.28-0.748-0.341-1.58-0.14-2.392 0.491 0.107 1.354 0.416 2.647 1.282 0.235 0.157 0.533 0.214 0.825 0.133 1.997-0.557 4.242-0.602 6.47 0.002 0.271 0.073 0.569 0.033 0.818-0.135 1.293-0.866 2.156-1.175 2.647-1.282 0.189 0.766 0.157 1.595-0.141 2.392-0.129 0.352-0.058 0.755 0.213 1.040 0.758 0.795 1.224 1.872 1.224 3.060 0 3.075-1.114 4.445-2.445 5.163-0.623 0.336-1.343 0.555-2.123 0.7-0.322 0.060-0.651 0.106-0.983 0.143-0.21 0.023-0.418 0.114-0.584 0.275-0.397 0.384-0.408 1.017-0.024 1.414 0.067 0.070 0.13 0.143 0.188 0.22 0.34 0.449 0.521 1.015 0.474 1.617 0 0.024-0.001 0.051-0.003 0.078v3.872c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-gitlab" viewBox="0 0 24 24"><path d="M23.238 15.199c0.261-0.17 0.493-0.446 0.635-0.764 0.172-0.385 0.214-0.831 0.075-1.305l-1.266-3.749-2.432-7.484c-0.068-0.229-0.195-0.443-0.397-0.637-0.266-0.242-0.603-0.367-0.941-0.372-0.351-0.005-0.707 0.119-0.976 0.365-0.165 0.147-0.296 0.334-0.378 0.547-0.006 0.015-0.012 0.033-0.018 0.052l-2.217 6.818h-6.647l-2.207-6.773c-0.068-0.229-0.195-0.443-0.397-0.637-0.265-0.242-0.602-0.367-0.94-0.372-0.351-0.006-0.707 0.118-0.976 0.365-0.166 0.146-0.296 0.334-0.379 0.546-0.006 0.016-0.012 0.034-0.018 0.052l-2.441 7.512-1.22 3.78c-0.106 0.329-0.117 0.676-0.038 1.004 0.098 0.407 0.336 0.783 0.702 1.052l10.65 7.74c0.346 0.248 0.818 0.26 1.176 0zM22.003 13.624l-10.003 7.27-9.983-7.255 1.205-3.662 1.886-5.805 1.891 5.808c0.137 0.42 0.525 0.687 0.951 0.69h8.1c0.442 0 0.817-0.287 0.951-0.691l1.886-5.804 1.892 5.824z"></path></symbol><symbol id="icon-globe" viewBox="0 0 24 24"><path d="M16.951 11c-0.214-2.69-1.102-5.353-2.674-7.71 1.57 0.409 2.973 1.232 4.087 2.346 1.408 1.408 2.351 3.278 2.581 5.364zM14.279 20.709c1.483-2.226 2.437-4.853 2.669-7.709h3.997c-0.23 2.086-1.173 3.956-2.581 5.364-1.113 1.113-2.516 1.936-4.085 2.345zM7.049 13c0.214 2.69 1.102 5.353 2.674 7.71-1.57-0.409-2.973-1.232-4.087-2.346-1.408-1.408-2.351-3.278-2.581-5.364zM9.721 3.291c-1.482 2.226-2.436 4.853-2.669 7.709h-3.997c0.23-2.086 1.173-3.956 2.581-5.364 1.114-1.113 2.516-1.936 4.085-2.345zM12.004 1c0 0 0 0 0 0-3.044 0.001-5.794 1.233-7.782 3.222-1.99 1.989-3.222 4.741-3.222 7.778s1.232 5.789 3.222 7.778c1.988 1.989 4.738 3.221 7.774 3.222 0 0 0 0 0 0 3.044-0.001 5.793-1.233 7.782-3.222 1.99-1.989 3.222-4.741 3.222-7.778s-1.232-5.789-3.222-7.778c-1.988-1.989-4.738-3.221-7.774-3.222zM14.946 13c-0.252 2.788-1.316 5.36-2.945 7.451-1.729-2.221-2.706-4.818-2.945-7.451zM11.999 3.549c1.729 2.221 2.706 4.818 2.945 7.451h-5.89c0.252-2.788 1.316-5.36 2.945-7.451z"></path></symbol><symbol id="icon-grid" viewBox="0 0 24 24"><path d="M3 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 4h5v5h-5zM14 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 4h5v5h-5zM14 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 15h5v5h-5zM3 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 15h5v5h-5z"></path></symbol><symbol id="icon-hard-drive" viewBox="0 0 24 24"><path d="M21 13v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5zM6.344 5.558c0.066-0.131 0.16-0.246 0.272-0.337 0.172-0.139 0.387-0.221 0.624-0.221h9.513c0.15 0.001 0.295 0.034 0.426 0.094 0.201 0.092 0.37 0.249 0.477 0.464l2.725 5.442h-16.762zM4.556 4.662l-3.441 6.872c-0.031 0.059-0.056 0.121-0.075 0.187-0.028 0.094-0.041 0.188-0.040 0.279v6c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.151-0.033-0.293-0.091-0.417-0.005-0.010-0.010-0.021-0.015-0.031l-0.009-0.018-3.441-6.872c-0.315-0.634-0.829-1.111-1.433-1.387-0.388-0.177-0.812-0.272-1.244-0.275h-9.527c-0.711 0-1.367 0.249-1.883 0.667-0.331 0.268-0.605 0.606-0.801 0.995zM6 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM10 17c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-hash" viewBox="0 0 24 24"><path d="M14.216 10l-0.444 4h-3.988l0.444-4zM15.006 2.89l-0.568 5.11h-3.988l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.884l-0.568 5.11h-4.438c-0.552 0-1 0.448-1 1s0.448 1 1 1h4.216l-0.444 4h-3.772c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.549l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.569-5.111h3.988l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.568-5.111h4.438c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.216l0.444-4h3.772c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.549l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.883z"></path></symbol><symbol id="icon-headphones" viewBox="0 0 24 24"><path d="M20 19c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h2v3zM4 19v-4h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM2 19c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2v-1c0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657v1h-2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071v6z"></path></symbol><symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path></symbol><symbol id="icon-help-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.033 9.332c0.183-0.521 0.559-0.918 1.022-1.14s1.007-0.267 1.528-0.083c0.458 0.161 0.819 0.47 1.050 0.859 0.183 0.307 0.284 0.665 0.286 1.037 0 0.155-0.039 0.309-0.117 0.464-0.080 0.16-0.203 0.325-0.368 0.49-0.709 0.709-1.831 1.092-1.831 1.092-0.524 0.175-0.807 0.741-0.632 1.265s0.741 0.807 1.265 0.632c0 0 1.544-0.506 2.613-1.575 0.279-0.279 0.545-0.614 0.743-1.010 0.2-0.4 0.328-0.858 0.328-1.369-0.004-0.731-0.204-1.437-0.567-2.049-0.463-0.778-1.19-1.402-2.105-1.724-1.042-0.366-2.135-0.275-3.057 0.167s-1.678 1.238-2.044 2.28c-0.184 0.521 0.090 1.092 0.611 1.275s1.092-0.091 1.275-0.611zM12 18c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-hexagon" viewBox="0 0 24 24"><path d="M20 16c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5l-6.999 3.999c-0.112 0.064-0.232 0.105-0.355 0.124-0.218 0.034-0.445-0.003-0.654-0.124l-6.991-3.995c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.171-0.22-0.385-0.22-0.621v-7.993c0.001-0.128 0.025-0.253 0.070-0.369 0.080-0.206 0.225-0.384 0.426-0.5l6.999-3.999c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124l6.991 3.995c0.111 0.065 0.207 0.148 0.285 0.245 0.139 0.171 0.22 0.385 0.22 0.621zM22 16v-8c-0.001-0.71-0.248-1.363-0.664-1.878-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-7.001 4.001c-0.618 0.357-1.060 0.897-1.299 1.514-0.133 0.342-0.202 0.707-0.205 1.077v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.61 0.352 1.3 0.465 1.954 0.364 0.363-0.057 0.715-0.179 1.037-0.363l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084z"></path></symbol><symbol id="icon-home" viewBox="0 0 24 24"><path d="M2.386 8.211c-0.236 0.184-0.386 0.469-0.386 0.789v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c-0.001-0.3-0.134-0.593-0.386-0.789l-9-7c-0.358-0.275-0.861-0.285-1.228 0zM16 21v-9c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v9h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10.511l8-6.222 8 6.222v10.511c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM10 21v-8h4v8z"></path></symbol><symbol id="icon-image" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM11 8.5c0-0.69-0.281-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.281-1.768 0.732-0.732 1.078-0.732 1.768 0.281 1.316 0.732 1.768 1.078 0.732 1.768 0.732 1.316-0.281 1.768-0.732 0.732-1.078 0.732-1.768zM9 8.5c0 0.138-0.055 0.262-0.146 0.354s-0.216 0.146-0.354 0.146-0.262-0.055-0.354-0.146-0.146-0.216-0.146-0.354 0.055-0.262 0.146-0.354 0.216-0.146 0.354-0.146 0.262 0.055 0.354 0.146 0.146 0.216 0.146 0.354zM7.414 20l8.586-8.586 4 4v3.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM20 12.586l-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0l-10.644 10.644c-0.135-0.050-0.255-0.129-0.356-0.23-0.182-0.182-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-inbox" viewBox="0 0 24 24"><path d="M21 13v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5h4.465l1.703 2.555c0.182 0.27 0.486 0.445 0.832 0.445h4c0.326-0.002 0.64-0.158 0.832-0.445l1.703-2.555zM6.344 5.558c0.066-0.131 0.16-0.246 0.272-0.337 0.172-0.139 0.387-0.221 0.624-0.221h9.513c0.15 0.001 0.295 0.034 0.426 0.094 0.201 0.092 0.37 0.249 0.477 0.464l2.725 5.442h-4.381c-0.346 0-0.65 0.175-0.832 0.445l-1.703 2.555h-2.93l-1.703-2.555c-0.192-0.287-0.506-0.443-0.832-0.445h-4.381zM4.556 4.662l-3.441 6.872c-0.031 0.059-0.056 0.121-0.075 0.187-0.028 0.094-0.041 0.188-0.040 0.279v6c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.151-0.033-0.293-0.091-0.417-0.005-0.010-0.010-0.021-0.015-0.031l-0.009-0.018-3.441-6.872c-0.315-0.634-0.829-1.111-1.433-1.387-0.388-0.177-0.812-0.272-1.244-0.275h-9.527c-0.711 0-1.367 0.249-1.883 0.667-0.331 0.268-0.605 0.606-0.801 0.995z"></path></symbol><symbol id="icon-info" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM13 16v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM12 9c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-instagram" viewBox="0 0 24 24"><path d="M7 1c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v10c0 1.657 0.673 3.158 1.757 4.243s2.586 1.757 4.243 1.757h10c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243v-10c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757zM7 3h10c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828v10c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172h-10c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828v-10c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM16.989 11.223c-0.15-0.972-0.571-1.857-1.194-2.567-0.754-0.861-1.804-1.465-3.009-1.644-0.464-0.074-0.97-0.077-1.477-0.002-1.366 0.202-2.521 0.941-3.282 1.967s-1.133 2.347-0.93 3.712 0.941 2.521 1.967 3.282 2.347 1.133 3.712 0.93 2.521-0.941 3.282-1.967 1.133-2.347 0.93-3.712zM15.011 11.517c0.122 0.82-0.1 1.609-0.558 2.227s-1.15 1.059-1.969 1.18-1.609-0.1-2.227-0.558-1.059-1.15-1.18-1.969 0.1-1.609 0.558-2.227 1.15-1.059 1.969-1.18c0.313-0.046 0.615-0.042 0.87-0.002 0.74 0.11 1.366 0.47 1.818 0.986 0.375 0.428 0.63 0.963 0.72 1.543zM17.5 7.5c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-italic" viewBox="0 0 24 24"><path d="M13.557 5l-5.25 14h-3.307c-0.552 0-1 0.448-1 1s0.448 1 1 1h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.557l5.25-14h3.307c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-key" viewBox="0 0 24 24"><path d="M20.293 1.293l-2 2c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2-2c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM12.092 10.898c-1.262-1.244-2.908-1.869-4.553-1.873-1.652-0.003-3.308 0.62-4.578 1.873-1.277 1.26-1.923 2.921-1.935 4.583s0.614 3.332 1.874 4.609c1.34 1.323 3.009 1.946 4.671 1.935s3.323-0.657 4.583-1.935 1.884-2.947 1.873-4.609-0.657-3.323-1.935-4.583zM10.688 12.322c0.885 0.873 1.332 2.020 1.339 3.173s-0.424 2.306-1.297 3.191-2.020 1.332-3.173 1.339-2.306-0.424-3.191-1.297c-0.916-0.927-1.347-2.080-1.339-3.233s0.455-2.3 1.339-3.173c0.879-0.867 2.023-1.299 3.169-1.296 1.141 0.002 2.279 0.435 3.152 1.296zM12.097 12.317l4.11-4.11c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4.11 4.11c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM14.793 8.207l3 3c0.391 0.391 1.024 0.391 1.414 0l3.5-3.5c0.391-0.391 0.391-1.024 0-1.414l-3-3c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293-2.086 2.086-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM16.207 8.207l3.5-3.5c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.5 3.5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-layers" viewBox="0 0 24 24"><path d="M12 3.118l7.764 3.882-7.764 3.882-7.764-3.882zM11.553 1.106l-10 5c-0.494 0.247-0.694 0.847-0.447 1.341 0.101 0.203 0.261 0.356 0.447 0.447l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342-0.101-0.202-0.262-0.355-0.447-0.447l-10-5c-0.292-0.146-0.62-0.136-0.894 0zM1.553 17.894l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342s-0.848-0.694-1.342-0.447l-9.552 4.777-9.553-4.776c-0.494-0.247-1.095-0.047-1.342 0.447s-0.047 1.095 0.447 1.342zM1.553 12.894l10 5c0.292 0.146 0.62 0.136 0.894 0l10-5c0.494-0.247 0.694-0.848 0.447-1.342s-0.848-0.694-1.342-0.447l-9.552 4.777-9.553-4.776c-0.494-0.247-1.095-0.047-1.342 0.447s-0.047 1.095 0.447 1.342z"></path></symbol><symbol id="icon-layout" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM20 8h-16v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707zM8 10v10h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-9zM10 20v-10h10v9c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293z"></path></symbol><symbol id="icon-life-buoy" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM15 12c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM17.618 4.968l-2.86 2.86c0 0 0 0 0 0-0.791-0.523-1.739-0.828-2.758-0.828s-1.967 0.305-2.757 0.829l-2.86-2.86c1.539-1.233 3.492-1.969 5.617-1.969s4.078 0.736 5.618 1.968zM19.032 6.382c1.232 1.54 1.968 3.493 1.968 5.618s-0.736 4.078-1.968 5.618l-2.86-2.86c0.523-0.791 0.828-1.739 0.828-2.758s-0.305-1.967-0.829-2.757zM7.829 14.757l-2.86 2.86c-1.233-1.539-1.969-3.492-1.969-5.617s0.736-4.078 1.968-5.618l2.86 2.86c-0.523 0.791-0.828 1.739-0.828 2.758s0.305 1.967 0.829 2.757zM6.382 19.032l2.86-2.86c0.791 0.523 1.739 0.828 2.758 0.828s1.967-0.305 2.757-0.829l2.86 2.86c-1.539 1.233-3.492 1.969-5.617 1.969s-4.078-0.736-5.618-1.968z"></path></symbol><symbol id="icon-link" viewBox="0 0 24 24"><path d="M9.199 13.599c0.992 1.327 2.43 2.126 3.948 2.345s3.123-0.142 4.45-1.134c0.239-0.179 0.465-0.375 0.655-0.568l2.995-2.995c1.163-1.204 1.722-2.751 1.696-4.285s-0.639-3.061-1.831-4.211c-1.172-1.132-2.688-1.692-4.199-1.683-1.492 0.008-2.984 0.571-4.137 1.683l-1.731 1.721c-0.392 0.389-0.394 1.023-0.004 1.414s1.023 0.394 1.414 0.004l1.709-1.699c0.77-0.742 1.763-1.117 2.76-1.123 1.009-0.006 2.016 0.367 2.798 1.122 0.795 0.768 1.203 1.783 1.221 2.808s-0.355 2.054-1.11 2.836l-3.005 3.005c-0.114 0.116-0.263 0.247-0.428 0.37-0.885 0.662-1.952 0.902-2.967 0.756s-1.971-0.678-2.632-1.563c-0.331-0.442-0.957-0.533-1.4-0.202s-0.533 0.957-0.202 1.4zM14.801 10.401c-0.992-1.327-2.43-2.126-3.948-2.345s-3.124 0.142-4.451 1.134c-0.239 0.179-0.464 0.375-0.655 0.568l-2.995 2.995c-1.163 1.204-1.722 2.751-1.696 4.285s0.639 3.061 1.831 4.211c1.172 1.132 2.688 1.692 4.199 1.683 1.492-0.008 2.984-0.571 4.137-1.683l1.723-1.723c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.696 1.698c-0.77 0.742-1.763 1.117-2.76 1.123-1.009 0.006-2.016-0.367-2.798-1.122-0.795-0.768-1.203-1.783-1.221-2.808s0.355-2.054 1.11-2.836l3.005-3.005c0.114-0.116 0.263-0.247 0.428-0.37 0.885-0.662 1.952-0.902 2.967-0.756s1.971 0.678 2.632 1.563c0.331 0.442 0.957 0.533 1.4 0.202s0.533-0.957 0.202-1.4z"></path></symbol><symbol id="icon-link-2" viewBox="0 0 24 24"><path d="M15 8h3c1.105 0 2.103 0.447 2.828 1.172s1.172 1.723 1.172 2.828-0.447 2.103-1.172 2.828-1.723 1.172-2.828 1.172h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c1.657 0 3.158-0.673 4.243-1.757s1.757-2.586 1.757-4.243-0.673-3.158-1.757-4.243-2.586-1.757-4.243-1.757h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 16h-3c-1.105 0-2.103-0.447-2.828-1.172s-1.172-1.723-1.172-2.828 0.447-2.103 1.172-2.828 1.723-1.172 2.828-1.172h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243 0.673 3.158 1.757 4.243 2.586 1.757 4.243 1.757h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-linkedin" viewBox="0 0 24 24"><path d="M16 7c-1.933 0-3.684 0.785-4.95 2.050s-2.050 3.017-2.050 4.95v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050zM16 9c1.381 0 2.63 0.559 3.536 1.464s1.464 2.155 1.464 3.536v6h-2v-6c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v6h-2v-6c0-1.381 0.559-2.63 1.464-3.536s2.155-1.464 3.536-1.464zM2 8c-0.552 0-1 0.448-1 1v12c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-12c0-0.552-0.448-1-1-1zM3 10h2v10h-2zM7 4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM5 4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-list" viewBox="0 0 24 24"><path d="M8 7h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8 13h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM8 19h13c0.552 0 1-0.448 1-1s-0.448-1-1-1h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM3 13c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM3 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-loader" viewBox="0 0 24 24"><path d="M11 2v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 18v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM4.223 5.637l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM15.533 16.947l2.83 2.83c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.83-2.83c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM2 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM18 13h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5.637 19.777l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM16.947 8.467l2.83-2.83c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.83 2.83c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-lock" viewBox="0 0 24 24"><path d="M5 12h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM18 10v-3c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243v3h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM8 10v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828v3z"></path></symbol><symbol id="icon-log-in" viewBox="0 0 24 24"><path d="M15 4h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h4c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1zM12.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383c0-0.13-0.025-0.261-0.076-0.383-0.049-0.118-0.121-0.228-0.217-0.324l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-log-out" viewBox="0 0 24 24"><path d="M9 20h-4c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h4c0.552 0 1-0.448 1-1s-0.448-1-1-1zM18.586 11h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-mail" viewBox="0 0 24 24"><path d="M3 7.921l8.427 5.899c0.34 0.235 0.795 0.246 1.147 0l8.426-5.899v10.079c0 0.272-0.11 0.521-0.295 0.705s-0.433 0.295-0.705 0.295h-16c-0.272 0-0.521-0.11-0.705-0.295s-0.295-0.433-0.295-0.705zM1 5.983c0 0.010 0 0.020 0 0.030v11.987c0 0.828 0.34 1.579 0.88 2.12s1.292 0.88 2.12 0.88h16c0.828 0 1.579-0.34 2.12-0.88s0.88-1.292 0.88-2.12v-11.988c0-0.010 0-0.020 0-0.030-0.005-0.821-0.343-1.565-0.88-2.102-0.541-0.54-1.292-0.88-2.12-0.88h-16c-0.828 0-1.579 0.34-2.12 0.88-0.537 0.537-0.875 1.281-0.88 2.103zM20.894 5.554l-8.894 6.225-8.894-6.225c0.048-0.096 0.112-0.183 0.188-0.259 0.185-0.185 0.434-0.295 0.706-0.295h16c0.272 0 0.521 0.11 0.705 0.295 0.076 0.076 0.14 0.164 0.188 0.259z"></path></symbol><symbol id="icon-map" viewBox="0 0 24 24"><path d="M7 3.723v13.697l-5 2.857v-13.697zM17 20.277v-13.697l5-2.857v13.696zM15.535 22.885c0.082 0.043 0.17 0.075 0.263 0.094 0.033 0.007 0.067 0.012 0.101 0.015s0.068 0.005 0.102 0.005c-0.001 0.001-0.001 0.001-0.001 0.001s0 0 0.001 0c0.173 0 0.344-0.046 0.496-0.132l0.015-0.009 6.985-3.991c0.32-0.183 0.501-0.518 0.503-0.868v-16c0-0.552-0.448-1-1-1-0.183 0-0.354 0.049-0.496 0.132l-6.535 3.734-7.503-3.752c-0.083-0.042-0.171-0.075-0.264-0.094-0.034-0.007-0.067-0.012-0.101-0.015s-0.068-0.005-0.102-0.005c0.001 0 0.001 0 0.001 0s0 0-0.001 0c-0.173 0-0.344 0.046-0.495 0.132l-0.015 0.008-6.985 3.992c-0.321 0.183-0.502 0.518-0.504 0.868v16c0 0.552 0.448 1 1 1 0.183 0 0.354-0.049 0.496-0.132l6.535-3.734zM15 6.618v13.764l-6-3v-13.764z"></path></symbol><symbol id="icon-map-pin" viewBox="0 0 24 24"><path d="M22 10c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929-5.263 1.12-7.071 2.929-2.929 4.31-2.929 7.071c0 0.569 0.053 1.128 0.15 1.676 0.274 1.548 0.899 3.004 1.682 4.32 2.732 4.591 7.613 7.836 7.613 7.836 0.331 0.217 0.765 0.229 1.109 0 0 0 4.882-3.245 7.613-7.836 0.783-1.316 1.408-2.772 1.682-4.32 0.098-0.548 0.151-1.107 0.151-1.676zM20 10c0 0.444-0.041 0.887-0.119 1.328-0.221 1.25-0.737 2.478-1.432 3.646-1.912 3.214-5.036 5.747-6.369 6.74-1.398-0.916-4.588-3.477-6.53-6.74-0.695-1.168-1.211-2.396-1.432-3.646-0.077-0.441-0.118-0.884-0.118-1.328 0-2.209 0.894-4.208 2.343-5.657s3.448-2.343 5.657-2.343 4.208 0.894 5.657 2.343 2.343 3.448 2.343 5.657zM16 10c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 10c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-maximize" viewBox="0 0 24 24"><path d="M8 2h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM22 8v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.552 0.448 1 1 1s1-0.448 1-1zM16 22h3c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1zM2 16v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-maximize-2" viewBox="0 0 24 24"><path d="M18.586 4l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM5.414 20l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-meh" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 16h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-menu" viewBox="0 0 24 24"><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-message-circle" viewBox="0 0 24 24"><path d="M22 11.497v-0.497c0-0.017-0.001-0.038-0.002-0.058-0.136-2.338-1.113-4.461-2.642-6.051-1.602-1.667-3.814-2.752-6.301-2.889-0.016-0.001-0.036-0.002-0.055-0.002h-0.489c-1.405-0.016-2.882 0.31-4.264 1.008-1.223 0.621-2.291 1.488-3.139 2.535-1.322 1.634-2.107 3.705-2.108 5.946-0.014 1.275 0.253 2.61 0.824 3.877l-1.772 5.317c-0.066 0.196-0.072 0.418 0 0.632 0.175 0.524 0.741 0.807 1.265 0.632l5.314-1.771c1.16 0.527 2.484 0.826 3.876 0.823 1.372-0.009 2.714-0.308 3.941-0.866 1.912-0.871 3.54-2.373 4.541-4.375 0.644-1.249 1.015-2.715 1.011-4.261zM20 11.503c0.003 1.225-0.292 2.375-0.789 3.339-0.801 1.602-2.082 2.785-3.592 3.472-0.97 0.442-2.035 0.679-3.126 0.686-1.221 0.003-2.371-0.292-3.335-0.789-0.249-0.129-0.528-0.142-0.775-0.060l-3.803 1.268 1.268-3.803c0.088-0.263 0.060-0.537-0.056-0.767-0.552-1.094-0.804-2.254-0.792-3.338 0.001-1.789 0.619-3.42 1.663-4.709 0.671-0.829 1.518-1.517 2.49-2.010 1.092-0.552 2.252-0.804 3.336-0.792h0.456c1.962 0.107 3.704 0.961 4.969 2.277 1.202 1.251 1.972 2.916 2.086 4.753z"></path></symbol><symbol id="icon-message-square" viewBox="0 0 24 24"><path d="M22 15v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-14c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.256 0.098 0.512 0.293 0.707 0.391 0.391 1.024 0.391 1.414 0l3.707-3.707h11.586c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121zM20 15c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.526 0.112-0.707 0.293l-2.293 2.293v-13.586c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-mic" viewBox="0 0 24 24"><path d="M12 2c0.553 0 1.051 0.223 1.414 0.586s0.586 0.861 0.586 1.414v8c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-8c0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586zM12 0c-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828v8c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-8c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172zM8 24h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2.062c1.809-0.226 3.432-1.056 4.657-2.281 1.446-1.447 2.343-3.448 2.343-5.657v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 1.657-0.67 3.156-1.757 4.243s-2.586 1.757-4.243 1.757-3.156-0.67-4.243-1.757-1.757-2.586-1.757-4.243v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 2.209 0.897 4.21 2.343 5.657 1.225 1.225 2.847 2.055 4.657 2.281v2.062h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-mic-off" viewBox="0 0 24 24"><path d="M12.516 13.93c-0.164 0.044-0.336 0.067-0.514 0.067-0.555-0.001-1.053-0.223-1.415-0.585-0.363-0.362-0.587-0.86-0.587-1.412v-0.586zM16 9.34v-5.34c0.001-1.103-0.447-2.105-1.169-2.829s-1.723-1.173-2.827-1.174c-1.014-0.001-1.943 0.377-2.649 1.002-0.636 0.563-1.092 1.327-1.274 2.197-0.113 0.541 0.234 1.070 0.775 1.183s1.070-0.234 1.183-0.775c0.092-0.44 0.322-0.825 0.641-1.108 0.35-0.31 0.806-0.497 1.308-0.499 0.571 0.003 1.066 0.226 1.427 0.587 0.363 0.364 0.586 0.862 0.585 1.416v5.34c0 0.552 0.448 1 1 1s1-0.448 1-1zM18 10v2c0 0.376-0.035 0.74-0.093 1.045-0.102 0.543 0.255 1.066 0.798 1.168s1.066-0.255 1.168-0.798c0.082-0.434 0.127-0.922 0.127-1.415v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM8 24h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2.024c1.446-0.189 2.791-0.732 3.934-1.627l5.359 5.359c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.838-5.838c-0.045-0.079-0.101-0.153-0.169-0.219-0.063-0.062-0.132-0.113-0.205-0.155l-15.788-15.789c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7.707 7.707v2.586c0.001 1.105 0.451 2.106 1.174 2.828s1.725 1.17 2.829 1.169c0.739-0.001 1.433-0.202 2.027-0.553l1.477 1.477c-0.959 0.693-2.078 1.068-3.212 1.123-0.094-0.029-0.193-0.044-0.295-0.044-0.103 0-0.201 0.015-0.295 0.044-1.417-0.069-2.812-0.637-3.905-1.707-1.153-1.129-1.753-2.608-1.798-4.106-0.002-0.112-0.002-0.224-0.002-0.224v-2.007c0-0.552-0.448-1-1-1s-1 0.448-1 1v1.993c0 0.149 0.003 0.298 0.003 0.298 0.060 1.994 0.861 3.969 2.398 5.475 1.299 1.273 2.924 2.013 4.599 2.223v2.011h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minimize" viewBox="0 0 24 24"><path d="M7 3v3c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21 7h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1zM17 21v-3c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v3c0 0.552 0.448 1 1 1s1-0.448 1-1zM3 17h3c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minimize-2" viewBox="0 0 24 24"><path d="M16.414 9l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.136 0.027 0.265 0.076 0.383s0.121 0.228 0.216 0.323c0.001 0.001 0.001 0.001 0.002 0.002 0.092 0.092 0.202 0.166 0.323 0.216 0.118 0.049 0.247 0.076 0.383 0.076h6c0.552 0 1-0.448 1-1s-0.448-1-1-1zM3.707 21.707l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.096-0.095-0.206-0.167-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-minus" viewBox="0 0 24 24"><path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minus-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-minus-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 13h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-monitor" viewBox="0 0 24 24"><path d="M12 16h-8c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM11 18v2h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-2h7c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-10c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-16c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879z"></path></symbol><symbol id="icon-moon" viewBox="0 0 24 24"><path d="M21.996 12.882c0.022-0.233-0.038-0.476-0.188-0.681-0.325-0.446-0.951-0.544-1.397-0.219-0.95 0.693-2.060 1.086-3.188 1.162-1.368 0.092-2.765-0.283-3.95-1.158-1.333-0.985-2.139-2.415-2.367-3.935s0.124-3.124 1.109-4.456c0.142-0.191 0.216-0.435 0.191-0.691-0.053-0.55-0.542-0.952-1.092-0.898-2.258 0.22-4.314 1.18-5.895 2.651-1.736 1.615-2.902 3.847-3.137 6.386-0.254 2.749 0.631 5.343 2.266 7.311s4.022 3.313 6.772 3.567 5.343-0.631 7.311-2.266 3.313-4.022 3.567-6.772zM19.567 14.674c-0.49 1.363-1.335 2.543-2.416 3.441-1.576 1.309-3.648 2.016-5.848 1.813s-4.108-1.278-5.417-2.854-2.016-3.648-1.813-5.848c0.187-2.032 1.117-3.814 2.507-5.106 0.782-0.728 1.71-1.3 2.731-1.672-0.456 1.264-0.577 2.606-0.384 3.899 0.303 2.023 1.38 3.934 3.156 5.247 1.578 1.167 3.448 1.668 5.272 1.545 0.752-0.050 1.496-0.207 2.21-0.465z"></path></symbol><symbol id="icon-more-horizontal" viewBox="0 0 24 24"><path d="M14 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM21 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-more-vertical" viewBox="0 0 24 24"><path d="M14 12c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM14 5c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM14 19c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-mouse-pointer" viewBox="0 0 24 24"><path d="M4.857 4.857l12.284 5.118-4.883 1.658c-0.285 0.098-0.522 0.32-0.625 0.625l-1.658 4.883zM13.010 14.424l5.283 5.283c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.283-5.283 5.868-1.993c0.523-0.178 0.803-0.746 0.625-1.268-0.096-0.283-0.306-0.494-0.562-0.601l-16.97-7.070c-0.51-0.212-1.095 0.029-1.308 0.539-0.107 0.256-0.099 0.532 0 0.769l7.070 16.97c0.212 0.51 0.798 0.751 1.308 0.539 0.275-0.115 0.472-0.338 0.562-0.601z"></path></symbol><symbol id="icon-move" viewBox="0 0 24 24"><path d="M11 4.414v6.586h-6.586l1.293-1.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3 3c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.136 0.027 0.265 0.076 0.383s0.121 0.228 0.217 0.324l3 3c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.293-1.293h6.586v6.586l-1.293-1.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076c0.13 0 0.261-0.025 0.383-0.076 0.118-0.049 0.228-0.121 0.324-0.217l3-3c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.293 1.293v-6.586h6.586l-1.293 1.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l3-3c0.096-0.096 0.168-0.206 0.217-0.324 0.15-0.362 0.078-0.795-0.217-1.090l-3-3c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l1.293 1.293h-6.586v-6.586l1.293 1.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-3-3c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-3 3c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-music" viewBox="0 0 24 24"><path d="M8 18c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM22 16v-13c0-0.050-0.004-0.107-0.014-0.164-0.091-0.545-0.606-0.913-1.151-0.822l-12 2c-0.476 0.081-0.835 0.492-0.835 0.986v9.535c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828v-12.153l10-1.667v8.355c-0.588-0.34-1.272-0.535-2-0.535-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM20 16c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-navigation" viewBox="0 0 24 24"><path d="M2.572 10.096c-0.262 0.125-0.467 0.36-0.542 0.661-0.134 0.536 0.192 1.079 0.728 1.213l7.418 1.854 1.854 7.418c0.071 0.281 0.261 0.528 0.542 0.661 0.499 0.236 1.095 0.023 1.332-0.476l9-19c0.124-0.263 0.133-0.575 0-0.856-0.236-0.499-0.833-0.712-1.332-0.476zM5.953 10.708l13.945-6.606-6.606 13.945-1.322-5.29c-0.092-0.369-0.378-0.638-0.728-0.728z"></path></symbol><symbol id="icon-navigation-2" viewBox="0 0 24 24"><path d="M12.938 1.654c-0.099-0.266-0.307-0.488-0.593-0.593-0.518-0.191-1.093 0.074-1.284 0.593l-7 19c-0.098 0.269-0.082 0.576 0.070 0.842 0.274 0.48 0.885 0.646 1.364 0.372l6.505-3.716 6.504 3.716c0.249 0.141 0.554 0.176 0.842 0.070 0.518-0.191 0.784-0.766 0.593-1.284zM12 4.893l5.113 13.877-4.617-2.638c-0.317-0.181-0.691-0.17-0.992 0l-4.617 2.638z"></path></symbol><symbol id="icon-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452z"></path></symbol><symbol id="icon-package" viewBox="0 0 24 24"><path d="M14.507 9.405l-2.507 1.45-6.961-4.027 2.511-1.435zM18.961 6.828l-2.456 1.421-6.944-4.005 1.934-1.105c0.112-0.064 0.232-0.105 0.355-0.124 0.218-0.034 0.445 0.003 0.654 0.124zM11.526 22.961c0.141 0.076 0.303 0.119 0.474 0.119 0.173 0 0.336-0.044 0.478-0.121 0.356-0.058 0.701-0.18 1.017-0.36l7.001-4.001c0.618-0.357 1.060-0.897 1.299-1.514 0.133-0.342 0.202-0.707 0.205-1.084v-8c0-0.478-0.113-0.931-0.314-1.334-0.022-0.071-0.052-0.14-0.091-0.207-0.046-0.079-0.1-0.149-0.162-0.21-0.031-0.043-0.064-0.086-0.097-0.127-0.23-0.286-0.512-0.528-0.831-0.715l-7.009-4.005c-0.61-0.352-1.3-0.465-1.954-0.364-0.363 0.057-0.715 0.179-1.037 0.363l-3.199 1.828c-0.21 0.041-0.406 0.15-0.553 0.316l-3.249 1.857c-0.383 0.221-0.699 0.513-0.941 0.85-0.060 0.060-0.114 0.13-0.159 0.207-0.039 0.068-0.070 0.138-0.092 0.21-0.040 0.080-0.076 0.163-0.108 0.246-0.132 0.343-0.201 0.708-0.204 1.078v8.007c0.001 0.71 0.248 1.363 0.664 1.878 0.23 0.286 0.512 0.528 0.831 0.715l7.009 4.005c0.324 0.187 0.67 0.307 1.022 0.362zM11 12.587v7.991l-6.495-3.711c-0.111-0.065-0.207-0.148-0.285-0.245-0.139-0.172-0.22-0.386-0.22-0.622v-7.462zM13 20.578v-7.991l7-4.049v7.462c-0.001 0.121-0.025 0.246-0.070 0.362-0.080 0.206-0.225 0.384-0.426 0.5z"></path></symbol><symbol id="icon-paperclip" viewBox="0 0 24 24"><path d="M20.733 10.343l-9.19 9.19c-0.977 0.977-2.256 1.465-3.538 1.465s-2.561-0.488-3.538-1.465-1.465-2.256-1.465-3.538 0.488-2.561 1.465-3.538l9.19-9.19c0.586-0.586 1.353-0.879 2.123-0.879s1.536 0.293 2.123 0.879 0.879 1.353 0.879 2.123-0.293 1.536-0.879 2.123l-9.2 9.19c-0.196 0.196-0.451 0.294-0.708 0.294s-0.512-0.098-0.708-0.293-0.293-0.45-0.293-0.708 0.098-0.512 0.293-0.708l8.49-8.48c0.391-0.39 0.391-1.023 0.001-1.414s-1.023-0.391-1.414-0.001l-8.49 8.48c-0.586 0.586-0.879 1.356-0.879 2.122s0.293 1.536 0.879 2.122 1.356 0.879 2.122 0.879 1.536-0.293 2.122-0.879l9.2-9.19c0.977-0.977 1.465-2.258 1.465-3.537s-0.489-2.561-1.465-3.537-2.258-1.465-3.537-1.465-2.561 0.489-3.537 1.465l-9.19 9.19c-1.367 1.367-2.051 3.161-2.051 4.952s0.684 3.585 2.051 4.952 3.161 2.051 4.952 2.051 3.585-0.684 4.952-2.051l9.19-9.19c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-pause" viewBox="0 0 24 24"><path d="M6 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM7 5h2v14h-2zM14 3c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-16c0-0.552-0.448-1-1-1zM15 5h2v14h-2z"></path></symbol><symbol id="icon-pause-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM11 15v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1zM15 15v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-pen-tool" viewBox="0 0 24 24"><path d="M18.707 13.707l0.293-0.293 1.586 1.586-5.586 5.586-1.586-1.586 0.293-0.293zM2.252 1.032c-0.035-0.009-0.070-0.016-0.106-0.021-0.143-0.022-0.284-0.011-0.417 0.026-0.132 0.037-0.259 0.102-0.37 0.195-0.092 0.077-0.171 0.171-0.231 0.279-0.060 0.106-0.099 0.22-0.116 0.337-0.020 0.128-0.015 0.255 0.012 0.371 0.001 0.005 0.003 0.011 0.004 0.016l0.004 0.017 3.496 14.483c0.094 0.388 0.403 0.669 0.776 0.746l5.765 1.153c-0.141 0.359-0.067 0.783 0.224 1.073l3 3c0.391 0.391 1.024 0.391 1.414 0l7-7c0.391-0.391 0.391-1.024 0-1.414l-3-3c-0.29-0.29-0.714-0.365-1.073-0.224l-1.153-5.765c-0.078-0.392-0.376-0.684-0.746-0.776zM14 11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879c-0.463 0-0.902 0.105-1.293 0.293l-4.487-4.487 10.425 2.516 1.27 6.349-4.243 4.243-6.349-1.27-2.517-10.424 4.487 4.487c-0.188 0.391-0.293 0.83-0.293 1.293 0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM12 11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707c0-0.27 0.106-0.514 0.281-0.695 0.004-0.004 0.008-0.008 0.013-0.012s0.008-0.008 0.012-0.013c0.18-0.174 0.424-0.28 0.694-0.28 0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-percent" viewBox="0 0 24 24"><path d="M18.293 4.293l-14 14c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l14-14c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM10 6.5c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475 0.393 1.843 1.025 2.475 1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM8 6.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM21 17.5c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475 0.393 1.843 1.025 2.475 1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM19 17.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061z"></path></symbol><symbol id="icon-phone" viewBox="0 0 24 24"><path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-call" viewBox="0 0 24 24"><path d="M14.859 5.981c0.943 0.184 1.74 0.683 2.31 1.374 0.42 0.51 0.716 1.124 0.852 1.793 0.109 0.541 0.637 0.891 1.178 0.782s0.891-0.637 0.782-1.178c-0.2-0.992-0.64-1.907-1.269-2.669-0.854-1.036-2.057-1.789-3.47-2.064-0.542-0.106-1.067 0.248-1.173 0.79s0.248 1.067 0.79 1.173zM14.94 1.994c2 0.222 3.743 1.162 5.005 2.544 1.118 1.224 1.858 2.794 2.062 4.519 0.065 0.548 0.562 0.941 1.11 0.876s0.941-0.562 0.876-1.11c-0.253-2.147-1.176-4.106-2.571-5.634-1.578-1.728-3.762-2.906-6.261-3.183-0.549-0.061-1.043 0.335-1.104 0.883s0.335 1.043 0.883 1.104zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-forwarded" viewBox="0 0 24 24"><path d="M15 6h5.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-5.586c-0.552 0-1 0.448-1 1s0.448 1 1 1zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-incoming" viewBox="0 0 24 24"><path d="M22.293 0.293l-5.293 5.293v-3.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.256 0.098 0.512 0.293 0.707 0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.586l5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-missed" viewBox="0 0 24 24"><path d="M16.293 1.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-phone-off" viewBox="0 0 24 24"><path d="M6.029 12.266c-1.682-2.593-2.64-5.44-2.914-8.185-0.024-0.266 0.064-0.523 0.229-0.721s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l1.279-1.279c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.715-0.456-1.346-0.963-1.805-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.201c0.306 3.062 1.371 6.214 3.226 9.075 0.3 0.463 0.92 0.595 1.383 0.295s0.595-0.92 0.295-1.383zM9.285 16.13l1.421-1.421c0.929 0.828 1.918 1.531 2.899 2.075 0.397 0.221 0.88 0.142 1.193-0.167l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.24 0.034 0.458 0.164 0.612 0.352 0.146 0.178 0.231 0.405 0.229 0.649v3.006c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-0.907-0.576-1.737-1.21-2.457-1.856zM22.293 0.293l-12.231 12.23c-0.031 0.024-0.061 0.051-0.089 0.079-0.029 0.029-0.055 0.059-0.080 0.090l-9.6 9.6c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l6.162-6.162c0.823 0.748 1.764 1.47 2.77 2.109 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121v-2.994c0.004-0.723-0.249-1.4-0.682-1.929-0.46-0.561-1.125-0.958-1.917-1.070-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-0.609-0.387-1.221-0.844-1.81-1.361l11.584-11.583c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-phone-outgoing" viewBox="0 0 24 24"><path d="M16.707 8.707l5.293-5.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path></symbol><symbol id="icon-pie-chart" viewBox="0 0 24 24"><path d="M20.289 15.501c-0.968 2.289-2.771 3.968-4.906 4.835s-4.599 0.917-6.888-0.051-3.968-2.771-4.835-4.906-0.918-4.6 0.050-6.889c0.936-2.214 2.652-3.856 4.689-4.743 0.506-0.221 0.738-0.81 0.518-1.316s-0.81-0.738-1.316-0.518c-2.489 1.084-4.589 3.094-5.733 5.798-1.183 2.798-1.119 5.812-0.062 8.419s3.112 4.814 5.909 5.997 5.812 1.119 8.419 0.062 4.814-3.112 5.997-5.909c0.215-0.509-0.023-1.095-0.532-1.311s-1.095 0.023-1.311 0.532zM20.945 11h-7.945v-7.945c2.086 0.23 3.956 1.173 5.364 2.581s2.351 3.278 2.581 5.364zM23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1h10c0.552 0 1-0.448 1-1z"></path></symbol><symbol id="icon-play" viewBox="0 0 24 24"><path d="M5.541 2.159c-0.153-0.1-0.34-0.159-0.541-0.159-0.552 0-1 0.448-1 1v18c-0.001 0.182 0.050 0.372 0.159 0.541 0.299 0.465 0.917 0.599 1.382 0.3l14-9c0.114-0.072 0.219-0.174 0.3-0.3 0.299-0.465 0.164-1.083-0.3-1.382zM6 4.832l11.151 7.168-11.151 7.168z"></path></symbol><symbol id="icon-play-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM10.555 7.168c-0.156-0.105-0.348-0.168-0.555-0.168-0.552 0-1 0.448-1 1v8c-0.001 0.188 0.053 0.383 0.168 0.555 0.306 0.46 0.927 0.584 1.387 0.277l6-4c0.103-0.068 0.2-0.162 0.277-0.277 0.306-0.46 0.182-1.080-0.277-1.387zM11 9.869l3.197 2.131-3.197 2.131z"></path></symbol><symbol id="icon-plus" viewBox="0 0 24 24"><path d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-plus-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8 13h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-plus-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 13h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-pocket" viewBox="0 0 24 24"><path d="M4 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v6c0 3.037 1.232 5.789 3.222 7.778s4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778v-6c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 4h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v6c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364v-6c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM7.293 10.707l4 4c0.391 0.391 1.024 0.391 1.414 0l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293-3.293-3.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-power" viewBox="0 0 24 24"><path d="M17.653 7.347c1.562 1.563 2.343 3.608 2.342 5.657s-0.782 4.094-2.344 5.656c-1.562 1.561-3.606 2.342-5.654 2.342-2.052 0-4.098-0.782-5.659-2.344s-2.342-3.608-2.342-5.656 0.781-4.094 2.342-5.656c0.39-0.391 0.39-1.024 0-1.414s-1.024-0.39-1.414 0c-1.952 1.952-2.928 4.513-2.928 7.070s0.976 5.118 2.928 7.070c1.952 1.953 4.513 2.93 7.071 2.93s5.119-0.976 7.072-2.928c1.953-1.952 2.93-4.513 2.93-7.070-0.001-2.561-0.977-5.12-2.928-7.072-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM11 2v10c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-printer" viewBox="0 0 24 24"><path d="M17 8h-10v-5h10zM5 19v3c0 0.552 0.448 1 1 1h12c0.552 0 1-0.448 1-1v-3h1c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-5c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-1v-6c0-0.552-0.448-1-1-1h-12c-0.552 0-1 0.448-1 1v6h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v5c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879zM6 13c-0.552 0-1 0.448-1 1v3h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-5c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v5c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1v-3c0-0.552-0.448-1-1-1zM7 15h10v6h-10z"></path></symbol><symbol id="icon-radio" viewBox="0 0 24 24"><path d="M15 12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM13 12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707zM15.533 8.468c0.977 0.976 1.466 2.254 1.466 3.535s-0.487 2.559-1.462 3.536c-0.39 0.391-0.39 1.024 0.001 1.414s1.024 0.39 1.414-0.001c1.366-1.367 2.048-3.161 2.047-4.951s-0.686-3.583-2.053-4.949c-0.391-0.39-1.024-0.39-1.414 0.001s-0.39 1.024 0.001 1.414zM8.467 15.532c-0.977-0.975-1.466-2.253-1.467-3.534s0.487-2.559 1.462-3.536c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001c-1.365 1.366-2.048 3.16-2.047 4.95s0.686 3.583 2.053 4.949c0.391 0.39 1.024 0.39 1.414-0.001s0.39-1.024-0.001-1.414zM18.363 5.637c1.757 1.758 2.635 4.059 2.635 6.364 0 2.304-0.878 4.605-2.635 6.362-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c2.147-2.147 3.22-4.963 3.221-7.776 0-2.815-1.074-5.631-3.221-7.778-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM5.637 18.363c-1.757-1.758-2.635-4.059-2.635-6.364 0-2.304 0.878-4.605 2.635-6.362 0.39-0.391 0.39-1.024 0-1.414s-1.024-0.39-1.414 0c-2.147 2.147-3.22 4.963-3.221 7.776s1.074 5.63 3.221 7.778c0.39 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-refresh-ccw" viewBox="0 0 24 24"><path d="M21.433 8.666c-0.921-2.603-2.812-4.587-5.12-5.689s-5.040-1.323-7.643-0.402c-1.472 0.521-2.752 1.354-3.744 2.364l-2.926 2.75v-3.689c0-0.552-0.448-1-1-1s-1 0.448-1 1v5.998c0 0.015 0 0.030 0.001 0.044 0.005 0.115 0.029 0.225 0.069 0.326 0.040 0.102 0.098 0.198 0.173 0.285 0.012 0.013 0.024 0.027 0.036 0.039 0.091 0.095 0.201 0.172 0.324 0.225 0.119 0.051 0.249 0.080 0.386 0.082 0.004 0 0.007 0 0.011 0h6c0.552 0 1-0.448 1-1s-0.448-0.999-1-0.999h-3.476l2.83-2.659c0.777-0.792 1.797-1.46 2.983-1.88 2.083-0.737 4.265-0.561 6.114 0.322s3.359 2.468 4.096 4.551c0.184 0.521 0.756 0.793 1.276 0.609s0.793-0.756 0.609-1.276zM20.475 15l-2.8 2.631c-1.584 1.585-3.63 2.366-5.679 2.366s-4.095-0.78-5.657-2.342c-0.89-0.89-1.523-1.931-1.883-2.981-0.18-0.522-0.748-0.8-1.271-0.621s-0.8 0.748-0.621 1.271c0.46 1.339 1.257 2.642 2.361 3.745 1.953 1.952 4.514 2.928 7.072 2.927s5.118-0.978 7.048-2.909l2.955-2.775v3.688c0 0.552 0.448 1 1 1s1-0.448 1-1v-5.998c0-0.015 0-0.030-0.001-0.044-0.005-0.115-0.029-0.225-0.069-0.326-0.040-0.102-0.098-0.198-0.173-0.285-0.012-0.013-0.024-0.027-0.036-0.039-0.091-0.095-0.201-0.172-0.324-0.225-0.119-0.051-0.249-0.080-0.386-0.082-0.004 0-0.007 0-0.011 0h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-refresh-cw" viewBox="0 0 24 24"><path d="M4.453 9.334c0.737-2.083 2.247-3.669 4.096-4.552s4.032-1.059 6.114-0.322c1.186 0.42 2.206 1.088 2.983 1.88l2.83 2.66h-3.476c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.997c0.005 0 0.009 0 0.014 0 0.137-0.001 0.268-0.031 0.386-0.082 0.119-0.051 0.229-0.126 0.324-0.225 0.012-0.013 0.024-0.026 0.036-0.039 0.075-0.087 0.133-0.183 0.173-0.285s0.064-0.211 0.069-0.326c0.001-0.015 0.001-0.029 0.001-0.043v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.689l-2.926-2.749c-0.992-1.010-2.271-1.843-3.743-2.364-2.603-0.921-5.335-0.699-7.643 0.402s-4.199 3.086-5.12 5.689c-0.185 0.52 0.088 1.091 0.608 1.276s1.092-0.088 1.276-0.609zM2 16.312l2.955 2.777c1.929 1.931 4.49 2.908 7.048 2.909s5.119-0.975 7.072-2.927c1.104-1.104 1.901-2.407 2.361-3.745 0.18-0.522-0.098-1.091-0.621-1.271s-1.091 0.098-1.271 0.621c-0.361 1.050-0.993 2.091-1.883 2.981-1.563 1.562-3.609 2.342-5.657 2.342s-4.094-0.782-5.679-2.366l-2.8-2.633h3.475c0.552 0 1-0.448 1-1s-0.448-1-1-1h-5.997c-0.005 0-0.009 0-0.014 0-0.137 0.001-0.268 0.031-0.386 0.082-0.119 0.051-0.229 0.126-0.324 0.225-0.012 0.013-0.024 0.026-0.036 0.039-0.075 0.087-0.133 0.183-0.173 0.285s-0.064 0.211-0.069 0.326c-0.001 0.015-0.001 0.029-0.001 0.043v6c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-repeat" viewBox="0 0 24 24"><path d="M4 11v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h11.586l-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4-4c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383c0-0.13-0.025-0.261-0.076-0.383-0.049-0.118-0.121-0.228-0.217-0.324l-4-4c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293h-11.586c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM20 13v2c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879h-11.586l2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-4 4c-0.092 0.092-0.166 0.202-0.217 0.324s-0.076 0.253-0.076 0.383c0 0.256 0.098 0.512 0.293 0.707l4 4c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293h11.586c1.38 0 2.632-0.561 3.536-1.464s1.464-2.156 1.464-3.536v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-rewind" viewBox="0 0 24 24"><path d="M10 16.955l-6.371-4.955 6.371-4.955zM21.386 19.789c0.168 0.132 0.382 0.211 0.614 0.211 0.552 0 1-0.448 1-1v-14c0.001-0.213-0.068-0.43-0.211-0.614-0.339-0.436-0.967-0.514-1.403-0.175l-9 7c-0.061 0.046-0.122 0.106-0.175 0.175-0.14 0.18-0.209 0.392-0.211 0.604v-6.99c0.001-0.213-0.068-0.43-0.211-0.614-0.339-0.436-0.967-0.514-1.403-0.175l-9 7c-0.061 0.046-0.122 0.106-0.175 0.175-0.339 0.436-0.261 1.064 0.175 1.403l9 7c0.168 0.132 0.382 0.211 0.614 0.211 0.552 0 1-0.448 1-1v-6.991c0.003 0.295 0.135 0.585 0.386 0.78zM21 16.955l-6.371-4.955 6.371-4.955z"></path></symbol><symbol id="icon-rotate-ccw" viewBox="0 0 24 24"><path d="M2.567 15.332c0.918 2.604 2.805 4.591 5.112 5.696s5.038 1.33 7.643 0.413 4.591-2.805 5.696-5.112 1.33-5.038 0.413-7.643-2.805-4.591-5.112-5.696-5.038-1.33-7.643-0.413c-1.474 0.52-2.755 1.352-3.749 2.362l-2.927 2.75v-3.689c0-0.552-0.448-1-1-1s-1 0.448-1 1v5.998c0 0.015 0 0.030 0.001 0.044 0.005 0.115 0.029 0.225 0.069 0.326 0.040 0.102 0.098 0.198 0.173 0.285 0.012 0.013 0.024 0.027 0.036 0.039 0.091 0.095 0.201 0.172 0.324 0.225 0.119 0.051 0.249 0.080 0.386 0.082 0.004 0 0.007 0 0.011 0h6c0.552 0 1-0.448 1-1s-0.448-0.999-1-0.999h-3.476l2.829-2.659c0.779-0.792 1.8-1.459 2.987-1.877 2.084-0.734 4.266-0.555 6.114 0.33s3.356 2.473 4.090 4.557 0.555 4.266-0.33 6.114-2.473 3.356-4.557 4.090-4.266 0.555-6.114-0.33-3.356-2.473-4.090-4.557c-0.184-0.521-0.755-0.794-1.275-0.611s-0.794 0.755-0.611 1.275z"></path></symbol><symbol id="icon-rotate-cw" viewBox="0 0 24 24"><path d="M19.547 14.667c-0.736 2.083-2.245 3.67-4.094 4.553s-4.031 1.061-6.114 0.325-3.67-2.245-4.553-4.094-1.061-4.031-0.325-6.114 2.245-3.67 4.094-4.553 4.031-1.061 6.114-0.325c1.188 0.42 2.209 1.088 2.987 1.882l2.824 2.659h-3.48c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.997c0.004 0 0.009 0 0.013 0 0.137-0.001 0.267-0.030 0.386-0.082 0.119-0.051 0.229-0.126 0.324-0.225 0.012-0.012 0.023-0.025 0.034-0.038 0.076-0.087 0.134-0.184 0.175-0.287s0.065-0.213 0.069-0.328c0.002-0.014 0.002-0.028 0.002-0.042v-5.998c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.685l-2.916-2.745c-0.993-1.012-2.274-1.846-3.748-2.366-2.604-0.921-5.336-0.698-7.644 0.405s-4.197 3.088-5.117 5.692-0.696 5.335 0.406 7.643 3.088 4.197 5.692 5.117 5.335 0.697 7.643-0.406 4.197-3.088 5.117-5.692c0.184-0.521-0.089-1.092-0.61-1.276s-1.092 0.089-1.276 0.61z"></path></symbol><symbol id="icon-rss" viewBox="0 0 24 24"><path d="M4 12c2.209 0 4.208 0.894 5.657 2.343s2.343 3.448 2.343 5.657c0 0.552 0.448 1 1 1s1-0.448 1-1c0-2.761-1.12-5.263-2.929-7.071s-4.31-2.929-7.071-2.929c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4 5c4.142 0 7.891 1.678 10.607 4.393s4.393 6.465 4.393 10.607c0 0.552 0.448 1 1 1s1-0.448 1-1c0-4.694-1.904-8.946-4.979-12.021s-7.327-4.979-12.021-4.979c-0.552 0-1 0.448-1 1s0.448 1 1 1zM7 19c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414z"></path></symbol><symbol id="icon-save" viewBox="0 0 24 24"><path d="M19 22c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.256-0.098-0.512-0.293-0.707l-5-5c-0.181-0.181-0.431-0.293-0.707-0.293h-11c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879zM8 20v-6h8v6zM6 4v4c0 0.552 0.448 1 1 1h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-7v-3h7.586l4.414 4.414v10.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-1v-7c0-0.552-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v7h-1c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-scissors" viewBox="0 0 24 24"><path d="M7.378 16.551c0.011 0.012 0.023 0.025 0.035 0.036s0.024 0.023 0.036 0.035c0.343 0.359 0.551 0.843 0.551 1.378 0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586c0.535 0 1.019 0.208 1.378 0.551zM13.764 15.188l5.53 5.52c0.391 0.39 1.024 0.39 1.414-0.001s0.39-1.024-0.001-1.414l-5.53-5.52c-0.391-0.39-1.024-0.39-1.414 0.001s-0.39 1.024 0.001 1.414zM7.449 7.378c-0.012 0.011-0.024 0.023-0.036 0.035s-0.024 0.024-0.035 0.036c-0.359 0.343-0.843 0.551-1.378 0.551-0.553 0-1.051-0.223-1.414-0.586s-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414c0 0.535-0.208 1.019-0.551 1.378zM8.032 9.446l2.554 2.554-2.554 2.554c-0.596-0.352-1.291-0.554-2.032-0.554-1.104 0-2.106 0.449-2.828 1.172s-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828c0-0.741-0.202-1.436-0.554-2.032l11.261-11.261c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-7.293 7.293-2.554-2.554c0.352-0.596 0.554-1.291 0.554-2.032 0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172c0.741 0 1.436-0.202 2.032-0.554z"></path></symbol><symbol id="icon-search" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></symbol><symbol id="icon-send" viewBox="0 0 24 24"><path d="M22.963 2.269c0.043-0.151 0.050-0.314 0.015-0.476-0.024-0.113-0.068-0.224-0.131-0.325-0.064-0.102-0.145-0.19-0.238-0.262-0.117-0.090-0.249-0.15-0.386-0.181s-0.282-0.034-0.426-0.004c-0.042 0.009-0.085 0.021-0.126 0.035l-0.021 0.007-19.98 6.993c-0.252 0.088-0.467 0.276-0.584 0.538-0.224 0.505 0.003 1.096 0.508 1.32l8.649 3.844 3.844 8.649c0.108 0.243 0.313 0.443 0.583 0.538 0.521 0.182 1.092-0.092 1.274-0.614l6.993-19.979c0.010-0.027 0.019-0.054 0.027-0.082zM10.779 11.807l-6.068-2.696 13.483-4.72zM19.609 5.806l-4.72 13.483-2.696-6.068z"></path></symbol><symbol id="icon-server" viewBox="0 0 24 24"><path d="M4 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 3h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM4 13c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM4 15h16c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM6 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM6 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-settings" viewBox="0 0 24 24"><path d="M16 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM14 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414zM20.315 15.404c0.046-0.105 0.112-0.191 0.192-0.257 0.112-0.092 0.251-0.146 0.403-0.147h0.090c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121-0.337-1.58-0.879-2.121-1.293-0.879-2.121-0.879h-0.159c-0.11-0.001-0.215-0.028-0.308-0.076-0.127-0.066-0.23-0.172-0.292-0.312-0.003-0.029-0.004-0.059-0.004-0.089-0.024-0.055-0.040-0.111-0.049-0.168 0.020-0.334 0.077-0.454 0.168-0.547l0.062-0.062c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.881-2.122c-0.586-0.585-1.356-0.878-2.122-0.877s-1.536 0.294-2.12 0.879l-0.046 0.046c-0.083 0.080-0.183 0.136-0.288 0.166-0.14 0.039-0.291 0.032-0.438-0.033-0.101-0.044-0.187-0.11-0.253-0.19-0.092-0.112-0.146-0.251-0.147-0.403v-0.090c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121v0.159c-0.001 0.11-0.028 0.215-0.076 0.308-0.066 0.127-0.172 0.23-0.312 0.292-0.029 0.003-0.059 0.004-0.089 0.004-0.055 0.024-0.111 0.040-0.168 0.049-0.335-0.021-0.455-0.078-0.548-0.169l-0.062-0.062c-0.586-0.585-1.355-0.878-2.122-0.878s-1.535 0.294-2.122 0.882c-0.585 0.586-0.878 1.355-0.878 2.122s0.294 1.536 0.879 2.12l0.048 0.047c0.080 0.083 0.136 0.183 0.166 0.288 0.039 0.14 0.032 0.291-0.031 0.434-0.006 0.016-0.013 0.034-0.021 0.052-0.041 0.109-0.108 0.203-0.191 0.275-0.11 0.095-0.25 0.153-0.383 0.156h-0.090c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.294-0.879 2.122 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879h0.159c0.11 0.001 0.215 0.028 0.308 0.076 0.128 0.067 0.233 0.174 0.296 0.321 0.024 0.055 0.040 0.111 0.049 0.168-0.020 0.334-0.077 0.454-0.168 0.547l-0.062 0.062c-0.585 0.586-0.878 1.356-0.877 2.122s0.294 1.536 0.881 2.122c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879l0.047-0.048c0.083-0.080 0.183-0.136 0.288-0.166 0.14-0.039 0.291-0.032 0.434 0.031 0.016 0.006 0.034 0.013 0.052 0.021 0.109 0.041 0.203 0.108 0.275 0.191 0.095 0.11 0.153 0.25 0.156 0.383v0.092c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121v-0.159c0.001-0.11 0.028-0.215 0.076-0.308 0.067-0.128 0.174-0.233 0.321-0.296 0.055-0.024 0.111-0.040 0.168-0.049 0.334 0.020 0.454 0.077 0.547 0.168l0.062 0.062c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.122-0.881c0.585-0.586 0.878-1.356 0.877-2.122s-0.294-1.536-0.879-2.12l-0.048-0.047c-0.080-0.083-0.136-0.183-0.166-0.288-0.039-0.14-0.032-0.291 0.031-0.434zM18.396 9.302c-0.012-0.201-0.038-0.297-0.076-0.382v0.080c0 0.043 0.003 0.084 0.008 0.125 0.021 0.060 0.043 0.119 0.068 0.177 0.004 0.090 0.005 0.091 0.005 0.092 0.249 0.581 0.684 1.030 1.208 1.303 0.371 0.193 0.785 0.298 1.211 0.303h0.18c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707-0.111 0.525-0.293 0.707-0.431 0.293-0.707 0.293h-0.090c-0.637 0.003-1.22 0.228-1.675 0.603-0.323 0.266-0.581 0.607-0.75 0.993-0.257 0.582-0.288 1.21-0.127 1.782 0.119 0.423 0.341 0.814 0.652 1.136l0.072 0.073c0.196 0.196 0.294 0.45 0.294 0.707s-0.097 0.512-0.292 0.707c-0.197 0.197-0.451 0.295-0.709 0.295s-0.512-0.097-0.707-0.292l-0.061-0.061c-0.463-0.453-1.040-0.702-1.632-0.752-0.437-0.037-0.882 0.034-1.293 0.212-0.578 0.248-1.027 0.683-1.3 1.206-0.193 0.371-0.298 0.785-0.303 1.211v0.181c0 0.276-0.111 0.525-0.293 0.707s-0.43 0.292-0.706 0.292-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707v-0.090c-0.015-0.66-0.255-1.242-0.644-1.692-0.284-0.328-0.646-0.585-1.058-0.744-0.575-0.247-1.193-0.274-1.756-0.116-0.423 0.119-0.814 0.341-1.136 0.652l-0.073 0.072c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292c-0.197-0.197-0.295-0.451-0.295-0.709s0.097-0.512 0.292-0.707l0.061-0.061c0.453-0.463 0.702-1.040 0.752-1.632 0.037-0.437-0.034-0.882-0.212-1.293-0.248-0.578-0.683-1.027-1.206-1.3-0.371-0.193-0.785-0.298-1.211-0.303l-0.18 0.001c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293h0.090c0.66-0.015 1.242-0.255 1.692-0.644 0.328-0.284 0.585-0.646 0.744-1.058 0.247-0.575 0.274-1.193 0.116-1.756-0.119-0.423-0.341-0.814-0.652-1.136l-0.073-0.073c-0.196-0.196-0.294-0.45-0.294-0.707s0.097-0.512 0.292-0.707c0.197-0.197 0.451-0.295 0.709-0.295s0.512 0.097 0.707 0.292l0.061 0.061c0.463 0.453 1.040 0.702 1.632 0.752 0.37 0.032 0.745-0.014 1.101-0.137 0.096-0.012 0.186-0.036 0.266-0.072-0.031 0.001-0.061 0.003-0.089 0.004-0.201 0.012-0.297 0.038-0.382 0.076h0.080c0.043 0 0.084-0.003 0.125-0.008 0.060-0.021 0.119-0.043 0.177-0.068 0.090-0.004 0.091-0.005 0.092-0.005 0.581-0.249 1.030-0.684 1.303-1.208 0.193-0.37 0.298-0.785 0.303-1.21v-0.181c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707v0.090c0.003 0.637 0.228 1.22 0.603 1.675 0.266 0.323 0.607 0.581 0.996 0.751 0.578 0.255 1.206 0.286 1.778 0.125 0.423-0.119 0.814-0.341 1.136-0.652l0.073-0.072c0.196-0.196 0.45-0.294 0.707-0.294s0.512 0.097 0.707 0.292c0.197 0.197 0.295 0.451 0.295 0.709s-0.097 0.512-0.292 0.707l-0.061 0.061c-0.453 0.463-0.702 1.040-0.752 1.632-0.032 0.37 0.014 0.745 0.137 1.101 0.012 0.095 0.037 0.185 0.072 0.266-0.001-0.032-0.002-0.062-0.004-0.089z"></path></symbol><symbol id="icon-share" viewBox="0 0 24 24"><path d="M3 12v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 4.414v10.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-10.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-share-2" viewBox="0 0 24 24"><path d="M16.214 18.098c0.025-0.033 0.048-0.067 0.070-0.104 0.020-0.035 0.038-0.071 0.054-0.107 0.073-0.108 0.156-0.209 0.248-0.301 0.363-0.363 0.861-0.586 1.414-0.586s1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414c0-0.325 0.077-0.631 0.214-0.902zM16.301 6.056c-0.009-0.017-0.018-0.034-0.028-0.051s-0.020-0.034-0.031-0.050c-0.154-0.283-0.242-0.608-0.242-0.955 0-0.553 0.223-1.051 0.586-1.414s0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414-0.223 1.051-0.586 1.414-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586c-0.108-0.108-0.204-0.228-0.285-0.358zM7.699 10.944c0.009 0.017 0.018 0.034 0.028 0.051s0.020 0.034 0.031 0.050c0.154 0.283 0.242 0.608 0.242 0.955s-0.088 0.672-0.243 0.956c-0.011 0.016-0.021 0.033-0.031 0.050s-0.019 0.033-0.027 0.050c-0.081 0.13-0.177 0.25-0.285 0.358-0.363 0.363-0.861 0.586-1.414 0.586s-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586c0.108 0.108 0.204 0.228 0.285 0.358zM14.15 6.088l-5.308 3.097c-0.004-0.005-0.009-0.009-0.014-0.014-0.722-0.722-1.724-1.171-2.828-1.171s-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172c0.005-0.005 0.009-0.009 0.014-0.014l5.309 3.094c-0.098 0.347-0.151 0.714-0.151 1.092 0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172c-0.003 0.003-0.007 0.007-0.010 0.010l-5.312-3.095c0.098-0.346 0.15-0.71 0.15-1.087s-0.052-0.742-0.15-1.088l5.308-3.098c0.004 0.005 0.009 0.009 0.014 0.014 0.722 0.723 1.724 1.172 2.828 1.172s2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828-0.449-2.106-1.172-2.828-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828c0 0.377 0.052 0.742 0.15 1.088z"></path></symbol><symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 20.862c-1.184-0.672-4.42-2.695-6.050-5.549-0.079-0.138-0.153-0.276-0.223-0.417-0.456-0.911-0.727-1.878-0.727-2.896v-6.307l7-2.625 7 2.625v6.307c0 1.018-0.271 1.985-0.726 2.897-0.070 0.14-0.145 0.279-0.223 0.417-1.631 2.854-4.867 4.876-6.050 5.549zM12.447 22.894c0 0 4.989-2.475 7.34-6.589 0.096-0.168 0.188-0.34 0.276-0.515 0.568-1.135 0.937-2.408 0.937-3.79v-7c0-0.426-0.267-0.79-0.649-0.936l-8-3c-0.236-0.089-0.485-0.082-0.702 0l-8 3c-0.399 0.149-0.646 0.527-0.649 0.936v7c0 1.382 0.369 2.655 0.938 3.791 0.087 0.175 0.179 0.346 0.276 0.515 2.351 4.114 7.34 6.589 7.34 6.589 0.292 0.146 0.62 0.136 0.894 0z"></path></symbol><symbol id="icon-shield-off" viewBox="0 0 24 24"><path d="M20.645 14.296c0.241-0.776 0.358-1.567 0.355-2.3v-6.996c0-0.426-0.267-0.79-0.649-0.936l-8-3c-0.236-0.088-0.484-0.082-0.701 0l-3.16 1.18c-0.517 0.192-0.78 0.768-0.587 1.286s0.769 0.78 1.287 0.587l2.809-1.049 7.001 2.625v6.311c0.002 0.522-0.082 1.111-0.265 1.7-0.164 0.527 0.131 1.088 0.659 1.251s1.088-0.131 1.251-0.659zM5 6.414l11.231 11.231c-1.189 1.207-2.63 2.314-4.262 3.199-1.209-0.69-4.402-2.702-6.019-5.531-0.079-0.138-0.153-0.276-0.223-0.417-0.456-0.911-0.727-1.878-0.727-2.896zM0.293 1.707l2.824 2.825c-0.075 0.142-0.116 0.302-0.117 0.468v7c0 1.382 0.369 2.655 0.938 3.791 0.087 0.175 0.179 0.346 0.276 0.515 2.351 4.114 7.34 6.589 7.34 6.589 0.298 0.149 0.636 0.135 0.914-0.010 1.985-1.047 3.74-2.366 5.178-3.825l4.648 4.648c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22.001-22.001c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-shopping-bag" viewBox="0 0 24 24"><path d="M19 5h-14l1.5-2h11zM21.794 5.392l-2.994-3.992c-0.196-0.261-0.494-0.399-0.8-0.4h-12c-0.326 0-0.616 0.156-0.8 0.4l-2.994 3.992c-0.043 0.056-0.081 0.117-0.111 0.182-0.065 0.137-0.096 0.283-0.095 0.426v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.219-0.071-0.422-0.189-0.585-0.004-0.005-0.007-0.010-0.011-0.015zM4 7h16v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707zM15 10c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121c0-0.552-0.448-1-1-1s-1 0.448-1 1c0 1.38 0.561 2.632 1.464 3.536s2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-shopping-cart" viewBox="0 0 24 24"><path d="M11 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM22 21c0-0.552-0.225-1.053-0.586-1.414s-0.862-0.586-1.414-0.586-1.053 0.225-1.414 0.586-0.586 0.862-0.586 1.414 0.225 1.053 0.586 1.414 0.862 0.586 1.414 0.586 1.053-0.225 1.414-0.586 0.586-0.862 0.586-1.414zM7.221 7h14.57l-1.371 7.191c-0.046 0.228-0.166 0.425-0.332 0.568-0.18 0.156-0.413 0.246-0.688 0.241h-9.734c-0.232 0.003-0.451-0.071-0.626-0.203-0.19-0.143-0.329-0.351-0.379-0.603zM1 2h3.18l0.848 4.239c0.108 0.437 0.502 0.761 0.972 0.761h1.221l-0.4-2h-0.821c-0.552 0-1 0.448-1 1 0 0.053 0.004 0.105 0.012 0.155 0.004 0.028 0.010 0.057 0.017 0.084l1.671 8.347c0.149 0.751 0.57 1.383 1.14 1.811 0.521 0.392 1.17 0.613 1.854 0.603h9.706c0.748 0.015 1.455-0.261 1.995-0.727 0.494-0.426 0.848-1.013 0.985-1.683l1.602-8.402c0.103-0.543-0.252-1.066-0.795-1.17-0.065-0.013-0.13-0.019-0.187-0.018h-16.18l-0.84-4.196c-0.094-0.462-0.497-0.804-0.98-0.804h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-shuffle" viewBox="0 0 24 24"><path d="M4.707 20.707l15.293-15.293v2.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-5c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.586l-15.293 15.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM14.293 15.707l4.293 4.293h-2.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h5c0.13 0 0.261-0.025 0.383-0.076s0.232-0.125 0.324-0.217c0.096-0.096 0.168-0.206 0.217-0.324s0.076-0.247 0.076-0.383v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1v2.586l-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM3.293 4.707l5 5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-sidebar" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM10 20v-16h9c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293zM8 4v16h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-skip-back" viewBox="0 0 24 24"><path d="M18.375 20.781c0.17 0.136 0.388 0.219 0.625 0.219 0.552 0 1-0.448 1-1v-16c0.001-0.218-0.071-0.439-0.219-0.625-0.345-0.431-0.974-0.501-1.406-0.156l-10 8c-0.053 0.042-0.108 0.095-0.156 0.156-0.345 0.431-0.275 1.061 0.156 1.406zM18 17.919l-7.399-5.919 7.399-5.919zM6 19v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1v14c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-skip-forward" viewBox="0 0 24 24"><path d="M5.625 3.219c-0.17-0.136-0.388-0.219-0.625-0.219-0.552 0-1 0.448-1 1v16c-0.001 0.218 0.071 0.439 0.219 0.625 0.345 0.431 0.974 0.501 1.406 0.156l10-8c0.053-0.042 0.108-0.095 0.156-0.156 0.345-0.431 0.275-1.061-0.156-1.406zM6 6.081l7.399 5.919-7.399 5.919zM18 5v14c0 0.552 0.448 1 1 1s1-0.448 1-1v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-slack" viewBox="0 0 24 24"><path d="M14.5 11c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768v-5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768v5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732zM14.5 9c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354v-5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354v5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146zM20.5 11c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768v1.5c0 0.552 0.448 1 1 1zM20.5 9h-0.5v-0.5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146zM9.5 13c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768v5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768v-5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732zM9.5 15c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354v5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354v-5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146zM3.5 13c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768v-1.5c0-0.552-0.448-1-1-1zM3.5 15h0.5v0.5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146zM13 14.5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732h5c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732h-5c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768zM15 14.5c0-0.14 0.055-0.264 0.146-0.354s0.214-0.146 0.354-0.146h5c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146h-5c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354zM15.5 20c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354-0.055 0.264-0.146 0.354-0.214 0.146-0.354 0.146-0.264-0.055-0.354-0.146-0.146-0.214-0.146-0.354v-0.5zM15.5 18h-1.5c-0.552 0-1 0.448-1 1v1.5c0 0.69 0.28 1.316 0.732 1.768s1.078 0.732 1.768 0.732 1.316-0.28 1.768-0.732 0.732-1.078 0.732-1.768-0.28-1.316-0.732-1.768-1.078-0.732-1.768-0.732zM9 9.5c0 0.14-0.055 0.264-0.146 0.354s-0.214 0.146-0.354 0.146h-5c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146h5c0.14 0 0.264 0.055 0.354 0.146s0.146 0.214 0.146 0.354zM11 9.5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732h-5c-0.69 0-1.316 0.28-1.768 0.732s-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732h5c0.69 0 1.316-0.28 1.768-0.732s0.732-1.078 0.732-1.768zM8.5 4c-0.14 0-0.264-0.055-0.354-0.146s-0.146-0.214-0.146-0.354 0.055-0.264 0.146-0.354 0.214-0.146 0.354-0.146 0.264 0.055 0.354 0.146 0.146 0.214 0.146 0.354v0.5zM8.5 6h1.5c0.552 0 1-0.448 1-1v-1.5c0-0.69-0.28-1.316-0.732-1.768s-1.078-0.732-1.768-0.732-1.316 0.28-1.768 0.732-0.732 1.078-0.732 1.768 0.28 1.316 0.732 1.768 1.078 0.732 1.768 0.732z"></path></symbol><symbol id="icon-slash" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM19.032 17.618l-12.65-12.65c1.54-1.232 3.493-1.968 5.618-1.968 2.486 0 4.734 1.006 6.364 2.636s2.636 3.878 2.636 6.364c0 2.125-0.736 4.078-1.968 5.618zM4.968 6.382l12.65 12.65c-1.54 1.232-3.493 1.968-5.618 1.968-2.486 0-4.734-1.006-6.364-2.636s-2.636-3.878-2.636-6.364c0-2.125 0.736-4.078 1.968-5.618z"></path></symbol><symbol id="icon-sliders" viewBox="0 0 24 24"><path d="M5 10v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 0.552 0.448 1 1 1s1-0.448 1-1zM13 21v-9c0-0.552-0.448-1-1-1s-1 0.448-1 1v9c0 0.552 0.448 1 1 1s1-0.448 1-1zM21 12v-9c0-0.552-0.448-1-1-1s-1 0.448-1 1v9c0 0.552 0.448 1 1 1s1-0.448 1-1zM1 15h2v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1zM9 9h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM17 17h2v4c0 0.552 0.448 1 1 1s1-0.448 1-1v-4h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-smartphone" viewBox="0 0 24 24"><path d="M7 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM7 3h10c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-smile" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM7.2 14.6c0 0 0.131 0.173 0.331 0.383 0.145 0.153 0.338 0.341 0.577 0.54 0.337 0.281 0.772 0.59 1.297 0.853 0.705 0.352 1.579 0.624 2.595 0.624s1.89-0.272 2.595-0.624c0.525-0.263 0.96-0.572 1.297-0.853 0.239-0.199 0.432-0.387 0.577-0.54 0.2-0.21 0.331-0.383 0.331-0.383 0.331-0.442 0.242-1.069-0.2-1.4s-1.069-0.242-1.4 0.2c-0.041 0.050-0.181 0.206-0.181 0.206-0.1 0.105-0.237 0.239-0.408 0.382-0.243 0.203-0.549 0.419-0.91 0.6-0.48 0.239-1.050 0.412-1.701 0.412s-1.221-0.173-1.701-0.413c-0.36-0.18-0.667-0.397-0.91-0.6-0.171-0.143-0.308-0.277-0.408-0.382-0.14-0.155-0.181-0.205-0.181-0.205-0.331-0.442-0.958-0.531-1.4-0.2s-0.531 0.958-0.2 1.4zM9 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1zM15 10c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-speaker" viewBox="0 0 24 24"><path d="M6 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM6 3h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM17 14c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 14c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM12 7c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-star" viewBox="0 0 24 24"><path d="M12.897 1.557c-0.092-0.189-0.248-0.352-0.454-0.454-0.495-0.244-1.095-0.041-1.339 0.454l-2.858 5.789-6.391 0.935c-0.208 0.029-0.411 0.127-0.571 0.291-0.386 0.396-0.377 1.029 0.018 1.414l4.623 4.503-1.091 6.362c-0.036 0.207-0.006 0.431 0.101 0.634 0.257 0.489 0.862 0.677 1.351 0.42l5.714-3.005 5.715 3.005c0.186 0.099 0.408 0.139 0.634 0.101 0.544-0.093 0.91-0.61 0.817-1.155l-1.091-6.362 4.623-4.503c0.151-0.146 0.259-0.344 0.292-0.572 0.080-0.546-0.298-1.054-0.845-1.134l-6.39-0.934zM12 4.259l2.193 4.444c0.151 0.305 0.436 0.499 0.752 0.547l4.906 0.717-3.549 3.457c-0.244 0.238-0.341 0.569-0.288 0.885l0.837 4.883-4.386-2.307c-0.301-0.158-0.647-0.148-0.931 0l-4.386 2.307 0.837-4.883c0.058-0.336-0.059-0.661-0.288-0.885l-3.549-3.457 4.907-0.718c0.336-0.049 0.609-0.26 0.752-0.546z"></path></symbol><symbol id="icon-stop-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM9 8c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1zM10 10h4v4h-4z"></path></symbol><symbol id="icon-sun" viewBox="0 0 24 24"><path d="M18 12c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243 0.673 3.158 1.757 4.243 2.586 1.757 4.243 1.757 3.158-0.673 4.243-1.757 1.757-2.586 1.757-4.243zM16 12c0 1.105-0.447 2.103-1.172 2.828s-1.723 1.172-2.828 1.172-2.103-0.447-2.828-1.172-1.172-1.723-1.172-2.828 0.447-2.103 1.172-2.828 1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828zM11 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 21v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1zM3.513 4.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM17.653 19.067l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 13h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4.927 20.487l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM19.067 6.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-sunrise" viewBox="0 0 24 24"><path d="M18 18c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243c0 0.552 0.448 1 1 1s1-0.448 1-1c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828c0 0.552 0.448 1 1 1s1-0.448 1-1zM3.513 10.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM19.067 12.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 21h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.707 6.707l2.293-2.293v4.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-4.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-sunset" viewBox="0 0 24 24"><path d="M18 18c0-1.657-0.673-3.158-1.757-4.243s-2.586-1.757-4.243-1.757-3.158 0.673-4.243 1.757-1.757 2.586-1.757 4.243c0 0.552 0.448 1 1 1s1-0.448 1-1c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172 2.103 0.447 2.828 1.172 1.172 1.723 1.172 2.828c0 0.552 0.448 1 1 1s1-0.448 1-1zM3.513 10.927l1.42 1.42c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.42-1.42c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM1 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM21 19h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM19.067 12.347l1.42-1.42c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-1.42 1.42c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM23 21h-22c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c0.552 0 1-0.448 1-1s-0.448-1-1-1zM15.293 4.293l-2.293 2.293v-4.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v4.586l-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4 4c0.096 0.096 0.206 0.168 0.324 0.217s0.247 0.076 0.383 0.076 0.265-0.027 0.383-0.076c0.118-0.049 0.228-0.121 0.324-0.217l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-tablet" viewBox="0 0 24 24"><path d="M6 1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v16c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h12c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-16c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM6 3h12c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v16c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-12c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-16c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM12 19c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-tag" viewBox="0 0 24 24"><path d="M21.297 14.117c0.583-0.586 0.874-1.352 0.874-2.115 0.001-0.764-0.29-1.532-0.874-2.12l-8.59-8.59c-0.181-0.18-0.431-0.292-0.707-0.292h-10c-0.552 0-1 0.448-1 1v10c0 0.256 0.098 0.512 0.293 0.708l8.592 8.582c0.586 0.585 1.356 0.878 2.122 0.877s1.536-0.294 2.12-0.879zM19.883 12.703l-7.17 7.17c-0.196 0.196-0.45 0.294-0.707 0.294s-0.512-0.097-0.707-0.292l-8.299-8.29v-8.585h8.586l8.297 8.297c0.192 0.193 0.289 0.447 0.289 0.704s-0.097 0.509-0.289 0.702zM7 8c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-target" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM19 12c0-1.933-0.785-3.684-2.050-4.95s-3.017-2.050-4.95-2.050-3.684 0.785-4.95 2.050-2.050 3.017-2.050 4.95 0.785 3.684 2.050 4.95 3.017 2.050 4.95 2.050 3.684-0.785 4.95-2.050 2.050-3.017 2.050-4.95zM17 12c0 1.381-0.559 2.63-1.464 3.536s-2.155 1.464-3.536 1.464-2.63-0.559-3.536-1.464-1.464-2.155-1.464-3.536 0.559-2.63 1.464-3.536 2.155-1.464 3.536-1.464 2.63 0.559 3.536 1.464 1.464 2.155 1.464 3.536zM15 12c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879-1.58 0.337-2.121 0.879-0.879 1.293-0.879 2.121 0.337 1.58 0.879 2.121 1.293 0.879 2.121 0.879 1.58-0.337 2.121-0.879 0.879-1.293 0.879-2.121zM13 12c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293-0.525-0.111-0.707-0.293-0.293-0.431-0.293-0.707 0.111-0.525 0.293-0.707 0.431-0.293 0.707-0.293 0.525 0.111 0.707 0.293 0.293 0.431 0.293 0.707z"></path></symbol><symbol id="icon-terminal" viewBox="0 0 24 24"><path d="M4.707 17.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM12 20h8c0.552 0 1-0.448 1-1s-0.448-1-1-1h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-thermometer" viewBox="0 0 24 24"><path d="M13 14.76c0.002 0.329 0.161 0.646 0.453 0.837 0.349 0.228 0.686 0.554 0.958 0.96 0.537 0.804 0.698 1.747 0.523 2.627s-0.684 1.69-1.488 2.227-1.747 0.698-2.627 0.523-1.69-0.684-2.227-1.488-0.698-1.747-0.523-2.627 0.684-1.69 1.488-2.227c0.268-0.182 0.443-0.487 0.443-0.832v-11.26c0-0.414 0.167-0.788 0.439-1.061s0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM15 14.256v-10.756c0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025-1.843 0.393-2.475 1.025-1.025 1.509-1.025 2.475v10.759c-1.007 0.829-1.654 1.96-1.894 3.17-0.274 1.379-0.022 2.866 0.821 4.129s2.121 2.064 3.5 2.339 2.866 0.022 4.129-0.821 2.064-2.121 2.339-3.5 0.022-2.866-0.821-4.129c-0.307-0.459-0.673-0.86-1.073-1.19z"></path></symbol><symbol id="icon-thumbs-down" viewBox="0 0 24 24"><path d="M11 15c0-0.552-0.448-1-1-1h-5.679c-0.065-0.002-0.153-0.011-0.153-0.011-0.273-0.041-0.502-0.188-0.655-0.396s-0.225-0.47-0.184-0.742l1.38-8.998c0.037-0.239 0.156-0.448 0.325-0.6 0.179-0.161 0.415-0.256 0.686-0.253h10.28v9.788l-3.608 8.118c-0.307-0.098-0.582-0.268-0.806-0.492-0.363-0.363-0.586-0.861-0.586-1.414zM9 16v3c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172c0.405 0 0.754-0.241 0.914-0.594l4-9c0.060-0.134 0.087-0.275 0.086-0.406v-11c0-0.552-0.448-1-1-1h-11.28c-0.767-0.009-1.482 0.281-2.021 0.763-0.505 0.452-0.857 1.076-0.967 1.783l-1.38 9.002c-0.125 0.82 0.096 1.614 0.55 2.231s1.147 1.063 1.965 1.187c0.165 0.025 0.333 0.037 0.492 0.034zM17 3h2.67c0.361-0.006 0.674 0.119 0.912 0.332 0.213 0.191 0.364 0.45 0.418 0.746v6.787c-0.037 0.34-0.208 0.63-0.455 0.833-0.235 0.194-0.537 0.306-0.861 0.301l-2.684 0.001c-0.552 0-1 0.448-1 1s0.448 1 1 1h2.656c0.81 0.012 1.569-0.27 2.16-0.756 0.622-0.511 1.059-1.251 1.176-2.11 0.005-0.040 0.008-0.087 0.008-0.134v-7c0-0.042-0.003-0.089-0.009-0.137-0.111-0.803-0.505-1.51-1.075-2.020-0.6-0.537-1.397-0.858-2.246-0.842h-2.67c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 24 24"><path d="M13 9c0 0.552 0.448 1 1 1h5.679c0.065 0.002 0.153 0.011 0.153 0.011 0.273 0.041 0.502 0.188 0.655 0.396s0.225 0.47 0.184 0.742l-1.38 8.998c-0.037 0.239-0.156 0.448-0.325 0.6-0.18 0.161-0.415 0.256-0.686 0.253h-10.28v-9.788l3.608-8.118c0.307 0.098 0.582 0.268 0.806 0.492 0.363 0.363 0.586 0.861 0.586 1.414zM15 8v-3c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172c-0.405 0-0.754 0.241-0.914 0.594l-4 9c-0.060 0.134-0.087 0.275-0.086 0.406v11c0 0.552 0.448 1 1 1h11.28c0.767 0.009 1.482-0.281 2.021-0.763 0.505-0.452 0.857-1.076 0.967-1.783l1.38-9.002c0.125-0.82-0.096-1.614-0.55-2.231s-1.147-1.063-1.965-1.187c-0.165-0.025-0.333-0.037-0.492-0.034zM7 21h-3c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h3c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-toggle-left" viewBox="0 0 24 24"><path d="M8 4c-2.209 0-4.21 0.897-5.657 2.343s-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657 3.448 2.343 5.657 2.343h8c2.209 0 4.21-0.897 5.657-2.343s2.343-3.448 2.343-5.657-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343zM8 6h8c1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243-2.586 1.757-4.243 1.757h-8c-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757zM12 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM10 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-toggle-right" viewBox="0 0 24 24"><path d="M8 4c-2.209 0-4.21 0.897-5.657 2.343s-2.343 3.448-2.343 5.657 0.897 4.21 2.343 5.657 3.448 2.343 5.657 2.343h8c2.209 0 4.21-0.897 5.657-2.343s2.343-3.448 2.343-5.657-0.897-4.21-2.343-5.657-3.448-2.343-5.657-2.343zM8 6h8c1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243-2.586 1.757-4.243 1.757h-8c-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243 2.586-1.757 4.243-1.757zM20 12c0-1.104-0.449-2.106-1.172-2.828s-1.724-1.172-2.828-1.172-2.106 0.449-2.828 1.172-1.172 1.724-1.172 2.828 0.449 2.106 1.172 2.828 1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828zM18 12c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414 0.223-1.051 0.586-1.414 0.861-0.586 1.414-0.586 1.051 0.223 1.414 0.586 0.586 0.861 0.586 1.414z"></path></symbol><symbol id="icon-tool" viewBox="0 0 24 24"><path d="M15.407 6.993l3.77-3.756c0.081-0.079 0.152-0.18 0.205-0.296 0.227-0.504 0.002-1.096-0.501-1.322-0.263-0.118-0.532-0.22-0.807-0.306-1.582-0.492-3.34-0.428-4.963 0.307-1.761 0.797-3.033 2.234-3.664 3.909-0.554 1.467-0.617 3.124-0.087 4.697l-6.447 6.447c-0.609 0.609-0.914 1.41-0.914 2.207s0.305 1.598 0.914 2.207 1.41 0.914 2.207 0.914 1.598-0.305 2.207-0.914l6.448-6.448c0.050 0.017 0.1 0.033 0.151 0.049 1.582 0.492 3.34 0.428 4.963-0.307 1.761-0.797 3.033-2.234 3.664-3.909s0.624-3.594-0.173-5.355c-0.045-0.103-0.114-0.205-0.204-0.295-0.391-0.391-1.024-0.391-1.414 0l-3.756 3.77zM13.986 5.6c-0.383 0.39-0.573 0.9-0.572 1.406 0.002 0.502 0.192 1.007 0.571 1.394l1.607 1.608c0.398 0.39 0.907 0.58 1.413 0.579 0.502-0.002 1.007-0.192 1.394-0.571l2.574-2.574c0.090 0.796-0.015 1.593-0.291 2.326-0.452 1.199-1.359 2.222-2.617 2.792-1.16 0.525-2.412 0.571-3.545 0.219-0.197-0.061-0.391-0.135-0.579-0.22-0.387-0.174-0.827-0.082-1.118 0.205l-6.91 6.91c-0.219 0.219-0.504 0.328-0.793 0.328s-0.574-0.109-0.793-0.328-0.328-0.504-0.328-0.793 0.109-0.574 0.328-0.793l6.91-6.91c0.301-0.301 0.37-0.746 0.204-1.119-0.569-1.258-0.575-2.626-0.123-3.825s1.359-2.222 2.617-2.792c0.852-0.386 1.755-0.513 2.623-0.413z"></path></symbol><symbol id="icon-trash" viewBox="0 0 24 24"><path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1z"></path></symbol><symbol id="icon-trash-2" viewBox="0 0 24 24"><path d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-trello" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM7 6c-0.552 0-1 0.448-1 1v9c0 0.552 0.448 1 1 1h3c0.552 0 1-0.448 1-1v-9c0-0.552-0.448-1-1-1zM8 8h1v7h-1zM14 6c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h3c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM15 8h1v3h-1z"></path></symbol><symbol id="icon-trending-down" viewBox="0 0 24 24"><path d="M17 19h6c0.136 0 0.265-0.027 0.383-0.076s0.228-0.121 0.324-0.217 0.168-0.206 0.217-0.324c0.049-0.118 0.076-0.247 0.076-0.383v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.586l-7.793-7.793c-0.391-0.391-1.024-0.391-1.414 0l-4.293 4.293-6.793-6.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l7.5 7.5c0.391 0.391 1.024 0.391 1.414 0l4.293-4.293 7.086 7.086h-3.586c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-trending-up" viewBox="0 0 24 24"><path d="M17 7h3.586l-7.086 7.086-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0l-7.5 7.5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l6.793-6.793 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0l7.793-7.793v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-triangle" viewBox="0 0 24 24"><path d="M11.148 4.374c0.073-0.123 0.185-0.242 0.334-0.332 0.236-0.143 0.506-0.178 0.756-0.116s0.474 0.216 0.614 0.448l8.466 14.133c0.070 0.12 0.119 0.268 0.128 0.434-0.015 0.368-0.119 0.591-0.283 0.759-0.18 0.184-0.427 0.298-0.693 0.301l-16.937-0.001c-0.152-0.001-0.321-0.041-0.481-0.134-0.239-0.138-0.399-0.359-0.466-0.607s-0.038-0.519 0.092-0.745zM9.432 3.346l-8.47 14.14c-0.422 0.731-0.506 1.55-0.308 2.29s0.68 1.408 1.398 1.822c0.464 0.268 0.976 0.4 1.475 0.402h16.943c0.839-0.009 1.587-0.354 2.123-0.902s0.864-1.303 0.855-2.131c-0.006-0.536-0.153-1.044-0.406-1.474l-8.474-14.147c-0.432-0.713-1.11-1.181-1.854-1.363s-1.561-0.081-2.269 0.349c-0.429 0.26-0.775 0.615-1.012 1.014z"></path></symbol><symbol id="icon-truck" viewBox="0 0 24 24"><path d="M15 15h-13v-11h13v4zM17 9h2.586l2.414 2.414v3.586h-5zM7 18.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061zM22 18.5c0-0.537-0.121-1.045-0.337-1.5h1.337c0.552 0 1-0.448 1-1v-5c0-0.256-0.098-0.512-0.293-0.707l-3-3c-0.181-0.181-0.431-0.293-0.707-0.293h-3v-4c0-0.552-0.448-1-1-1h-15c-0.552 0-1 0.448-1 1v13c0 0.552 0.448 1 1 1h1.337c-0.216 0.455-0.337 0.963-0.337 1.5 0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475c0-0.537-0.121-1.045-0.337-1.5h6.674c-0.216 0.455-0.337 0.963-0.337 1.5 0 0.966 0.393 1.843 1.025 2.475s1.509 1.025 2.475 1.025 1.843-0.393 2.475-1.025 1.025-1.509 1.025-2.475zM20 18.5c0 0.414-0.167 0.788-0.439 1.061s-0.647 0.439-1.061 0.439-0.788-0.167-1.061-0.439-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439 0.788 0.167 1.061 0.439 0.439 0.647 0.439 1.061z"></path></symbol><symbol id="icon-tv" viewBox="0 0 24 24"><path d="M12 8h8c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v11c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-16c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h8zM16.293 1.293l-4.293 4.293-4.293-4.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-5.586c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h16c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-11c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-5.586l3.293-3.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-twitch" viewBox="0 0 24 24"><path d="M20 3v10.586l-3.414 3.414h-4.586c-0.256 0-0.512 0.098-0.707 0.293l-2.293 2.293v-1.586c0-0.552-0.448-1-1-1h-4v-14zM21 1h-18c-0.552 0-1 0.448-1 1v16c0 0.552 0.448 1 1 1h4v3c0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l3.707-3.707h4.586c0.276 0 0.526-0.112 0.707-0.293l4-4c0.195-0.195 0.293-0.451 0.293-0.707v-12c0-0.552-0.448-1-1-1zM12 11v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 11v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path></symbol><symbol id="icon-twitter" viewBox="0 0 24 24"><path d="M20.833 5.262c-0.186 0.242-0.391 0.475-0.616 0.696-0.233 0.232-0.347 0.567-0.278 0.908 0.037 0.182 0.060 0.404 0.061 0.634 0 5.256-2.429 8.971-5.81 10.898-2.647 1.509-5.938 1.955-9.222 1.12 1.245-0.361 2.46-0.921 3.593-1.69 0.147-0.099 0.273-0.243 0.352-0.421 0.224-0.505-0.003-1.096-0.508-1.32-2.774-1.233-4.13-2.931-4.769-4.593-0.417-1.084-0.546-2.198-0.52-3.227 0.021-0.811 0.138-1.56 0.278-2.182 0.394 0.343 0.803 0.706 1.235 1.038 2.051 1.577 4.624 2.479 7.395 2.407 0.543-0.015 0.976-0.457 0.976-1v-1.011c-0.002-0.179 0.009-0.357 0.034-0.533 0.113-0.806 0.504-1.569 1.162-2.141 0.725-0.631 1.636-0.908 2.526-0.846s1.753 0.463 2.384 1.188c0.252 0.286 0.649 0.416 1.033 0.304 0.231-0.067 0.463-0.143 0.695-0.228zM22.424 2.183c-0.74 0.522-1.523 0.926-2.287 1.205-0.931-0.836-2.091-1.302-3.276-1.385-1.398-0.097-2.836 0.339-3.977 1.332-1.036 0.901-1.652 2.108-1.83 3.372-0.037 0.265-0.055 0.532-0.054 0.8-1.922-0.142-3.693-0.85-5.15-1.97-0.775-0.596-1.462-1.309-2.034-2.116-0.32-0.45-0.944-0.557-1.394-0.237-0.154 0.109-0.267 0.253-0.335 0.409 0 0-0.132 0.299-0.285 0.76-0.112 0.337-0.241 0.775-0.357 1.29-0.163 0.722-0.302 1.602-0.326 2.571-0.031 1.227 0.12 2.612 0.652 3.996 0.683 1.775 1.966 3.478 4.147 4.823-1.569 0.726-3.245 1.039-4.873 0.967-0.552-0.024-1.019 0.403-1.043 0.955-0.017 0.389 0.19 0.736 0.513 0.918 4.905 2.725 10.426 2.678 14.666 0.261 4.040-2.301 6.819-6.7 6.819-12.634-0.001-0.167-0.008-0.33-0.023-0.489 1.006-1.115 1.676-2.429 1.996-3.781 0.127-0.537-0.206-1.076-0.743-1.203-0.29-0.069-0.58-0.003-0.807 0.156z"></path></symbol><symbol id="icon-type" viewBox="0 0 24 24"><path d="M11 5v14h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-14h6v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-3c0-0.552-0.448-1-1-1h-16c-0.552 0-1 0.448-1 1v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-2z"></path></symbol><symbol id="icon-umbrella" viewBox="0 0 24 24"><path d="M21.84 11h-19.674c0.387-1.824 1.259-3.474 2.485-4.796 1.617-1.744 3.848-2.915 6.394-3.158 2.763-0.264 5.369 0.616 7.354 2.255 1.717 1.418 2.965 3.401 3.441 5.7zM23.995 11.905c-0.316-3.312-1.946-6.184-4.323-8.147s-5.505-3.020-8.817-2.704c-3.052 0.291-5.731 1.699-7.67 3.789-1.759 1.897-2.909 4.357-3.18 7.057-0.055 0.55 0.346 1.040 0.895 1.095 0.035 0.004 0.070 0.005 0.1 0.005h22c0.531 0 0.966-0.414 0.998-0.937-0.001-0.137-0.002-0.148-0.003-0.158zM17 19c0 0.553-0.223 1.051-0.586 1.414s-0.861 0.586-1.414 0.586-1.051-0.223-1.414-0.586-0.586-0.861-0.586-1.414v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 1.104 0.449 2.106 1.172 2.828s1.724 1.172 2.828 1.172 2.106-0.449 2.828-1.172 1.172-1.724 1.172-2.828c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></symbol><symbol id="icon-underline" viewBox="0 0 24 24"><path d="M5 3v7c0 1.933 0.785 3.684 2.050 4.95s3.017 2.050 4.95 2.050 3.684-0.785 4.95-2.050 2.050-3.017 2.050-4.95v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v7c0 1.381-0.559 2.63-1.464 3.536s-2.155 1.464-3.536 1.464-2.63-0.559-3.536-1.464-1.464-2.155-1.464-3.536v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1zM4 22h16c0.552 0 1-0.448 1-1s-0.448-1-1-1h-16c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-unlock" viewBox="0 0 24 24"><path d="M5 12h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v7c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-7c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM8 10v-3c-0.001-1.106 0.445-2.105 1.169-2.831 0.723-0.724 1.719-1.172 2.821-1.174 1.030 0.003 1.948 0.378 2.652 1 0.638 0.565 1.097 1.332 1.28 2.209 0.113 0.541 0.642 0.888 1.183 0.775s0.888-0.642 0.775-1.183c-0.272-1.307-0.958-2.454-1.912-3.299-1.060-0.938-2.452-1.504-3.973-1.502-1.657 0.002-3.157 0.676-4.241 1.762s-1.756 2.587-1.754 4.243v3h-1c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v7c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-7c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879z"></path></symbol><symbol id="icon-upload" viewBox="0 0 24 24"><path d="M20 15v4c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v4c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1zM11 5.414v9.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-9.586l3.293 3.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5-5c-0.092-0.092-0.202-0.166-0.324-0.217-0.245-0.101-0.521-0.101-0.766 0-0.118 0.049-0.228 0.121-0.324 0.217l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path></symbol><symbol id="icon-upload-cloud" viewBox="0 0 24 24"><path d="M11 14.414v6.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6.586l2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-4-4c-0.092-0.092-0.202-0.166-0.324-0.217s-0.253-0.076-0.383-0.076c-0.256 0-0.512 0.098-0.707 0.293l-4 4c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0zM20.869 19.268c1.454-0.793 2.451-2.102 2.884-3.574s0.305-3.112-0.488-4.566c-0.679-1.245-1.737-2.155-2.959-2.663-0.724-0.301-1.505-0.46-2.299-0.465h-0.527c-0.725-2.057-2.144-3.708-3.917-4.752-1.983-1.168-4.415-1.581-6.821-0.959s-4.333 2.162-5.502 4.145-1.581 4.415-0.959 6.821c0.372 1.437 1.073 2.709 1.975 3.713 0.369 0.411 1.002 0.444 1.412 0.075s0.444-1.002 0.075-1.412c-0.688-0.765-1.235-1.75-1.526-2.877-0.484-1.872-0.164-3.761 0.746-5.305s2.407-2.74 4.279-3.224 3.761-0.164 5.305 0.746 2.74 2.407 3.224 4.279c0.116 0.435 0.506 0.75 0.969 0.75h1.253c0.536 0.004 1.061 0.111 1.545 0.312 0.815 0.339 1.517 0.943 1.97 1.773 0.529 0.97 0.615 2.061 0.325 3.044s-0.953 1.854-1.923 2.382c-0.485 0.264-0.664 0.872-0.399 1.357s0.872 0.664 1.357 0.399z"></path></symbol><symbol id="icon-user" viewBox="0 0 24 24"><path d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path></symbol><symbol id="icon-user-check" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM16.293 11.707l2 2c0.391 0.391 1.024 0.391 1.414 0l4-4c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-3.293 3.293-1.293-1.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-user-minus" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM23 10h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-user-plus" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM23 10h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path></symbol><symbol id="icon-user-x" viewBox="0 0 24 24"><path d="M17 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-7c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h7c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM13.5 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM11.5 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM22.293 7.293l-1.793 1.793-1.793-1.793c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l1.793 1.793-1.793 1.793c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l1.793-1.793 1.793 1.793c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.793-1.793 1.793-1.793c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-users" viewBox="0 0 24 24"><path d="M18 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM14 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM12 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121zM24 21v-2c-0.001-1.245-0.457-2.385-1.215-3.261-0.652-0.753-1.528-1.311-2.529-1.576-0.534-0.141-1.081 0.177-1.222 0.711s0.177 1.081 0.711 1.222c0.607 0.161 1.136 0.498 1.528 0.952 0.454 0.526 0.726 1.206 0.727 1.952v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM15.752 4.099c0.803 0.206 1.445 0.715 1.837 1.377s0.531 1.47 0.325 2.273c-0.176 0.688-0.575 1.256-1.105 1.652-0.314 0.235-0.675 0.409-1.063 0.511-0.534 0.14-0.854 0.687-0.713 1.221s0.687 0.854 1.221 0.713c0.637-0.167 1.232-0.455 1.752-0.844 0.884-0.66 1.552-1.613 1.845-2.758 0.342-1.337 0.11-2.689-0.542-3.788s-1.725-1.953-3.062-2.296c-0.535-0.137-1.080 0.186-1.217 0.721s0.186 1.080 0.721 1.217z"></path></symbol><symbol id="icon-video" viewBox="0 0 24 24"><path d="M22 8.943v6.114l-4.28-3.057zM3 4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-3.057l5.419 3.871c0.449 0.321 1.074 0.217 1.395-0.232 0.126-0.178 0.187-0.383 0.186-0.582v-10c0-0.552-0.448-1-1-1-0.218 0-0.42 0.070-0.581 0.186l-5.419 3.871v-3.057c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM3 6h11c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v10c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293z"></path></symbol><symbol id="icon-video-off" viewBox="0 0 24 24"><path d="M10.66 6h3.34c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v3.34c0 0.276 0.112 0.526 0.293 0.707l1 1c0.351 0.351 0.898 0.387 1.293 0.103l4.414-3.192v8.042c0 0.552 0.448 1 1 1s1-0.448 1-1v-10c0.001-0.201-0.061-0.408-0.19-0.586-0.324-0.447-0.949-0.548-1.396-0.224l-5.309 3.841-0.105-0.105v-2.926c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-3.34c-0.552 0-1 0.448-1 1s0.448 1 1 1zM4.586 6l10.414 10.414v0.586c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-10c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM0.293 1.707l2.318 2.318c-0.673 0.087-1.277 0.398-1.732 0.854-0.542 0.541-0.879 1.293-0.879 2.121v10c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879 0.269-0.269 0.488-0.59 0.64-0.946l5.532 5.532c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-voicemail" viewBox="0 0 24 24"><path d="M9 11.5c0 0.967-0.391 1.84-1.025 2.475s-1.508 1.025-2.475 1.025-1.84-0.391-2.475-1.025-1.025-1.508-1.025-2.475 0.391-1.84 1.025-2.475 1.508-1.025 2.475-1.025 1.84 0.391 2.475 1.025 1.025 1.508 1.025 2.475zM22 11.5c0 0.967-0.391 1.84-1.025 2.475s-1.508 1.025-2.475 1.025-1.84-0.391-2.475-1.025-1.025-1.508-1.025-2.475 0.391-1.84 1.025-2.475 1.508-1.025 2.475-1.025 1.84 0.391 2.475 1.025 1.025 1.508 1.025 2.475zM5.5 17h13c1.519 0 2.895-0.617 3.889-1.611s1.611-2.37 1.611-3.889-0.617-2.895-1.611-3.889-2.37-1.611-3.889-1.611-2.895 0.617-3.889 1.611-1.611 2.37-1.611 3.889c0 1.329 0.473 2.55 1.257 3.5h-4.514c0.784-0.95 1.257-2.171 1.257-3.5 0-1.519-0.617-2.895-1.611-3.889s-2.37-1.611-3.889-1.611-2.895 0.617-3.889 1.611-1.611 2.37-1.611 3.889 0.617 2.895 1.611 3.889 2.37 1.611 3.889 1.611z"></path></symbol><symbol id="icon-volume" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219z"></path></symbol><symbol id="icon-volume-1" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM14.833 9.167c0.781 0.781 1.171 1.803 1.171 2.828s-0.39 2.047-1.171 2.828c-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c1.171-1.171 1.757-2.708 1.757-4.242s-0.586-3.071-1.757-4.242c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-volume-2" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM18.363 5.637c1.757 1.758 2.635 4.059 2.635 6.364 0 2.304-0.878 4.605-2.635 6.362-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c2.147-2.147 3.22-4.963 3.221-7.776s-1.074-5.63-3.221-7.778c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414zM14.833 9.167c0.781 0.781 1.171 1.803 1.171 2.828s-0.39 2.047-1.171 2.828c-0.39 0.391-0.39 1.024 0 1.414s1.024 0.39 1.414 0c1.171-1.171 1.757-2.708 1.757-4.242s-0.586-3.071-1.757-4.242c-0.39-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-volume-x" viewBox="0 0 24 24"><path d="M10 7.081v9.839l-3.375-2.7c-0.17-0.137-0.388-0.22-0.625-0.22h-3v-4h3c0.218 0.001 0.439-0.071 0.625-0.219zM10.375 4.219l-4.726 3.781h-3.649c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h3.649l4.726 3.781c0.431 0.345 1.061 0.275 1.406-0.156 0.148-0.185 0.22-0.407 0.219-0.625v-14c0-0.552-0.448-1-1-1-0.237 0-0.455 0.083-0.625 0.219zM16.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-watch" viewBox="0 0 24 24"><path d="M11 9v3c0 0.276 0.112 0.526 0.293 0.707l1.5 1.5c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-1.207-1.207v-2.586c0-0.552-0.448-1-1-1s-1 0.448-1 1zM15.33 19.276l-0.166 1.813c-0.024 0.266-0.147 0.495-0.333 0.658-0.18 0.159-0.415 0.253-0.67 0.253h-4.331c-0.27 0.001-0.509-0.1-0.69-0.269-0.175-0.164-0.291-0.389-0.315-0.643l-0.165-1.817c1.016 0.468 2.148 0.729 3.34 0.729 1.188 0 2.316-0.259 3.33-0.724zM8.187 7.367c1.037-0.855 2.364-1.367 3.813-1.367 1.657 0 3.156 0.67 4.243 1.757s1.757 2.586 1.757 4.243-0.67 3.156-1.757 4.243c-0.104 0.104-0.211 0.204-0.323 0.3-0.035 0.031-0.071 0.061-0.107 0.090-1.037 0.855-2.364 1.367-3.813 1.367-1.657 0-3.156-0.67-4.243-1.757s-1.757-2.586-1.757-4.243 0.67-3.156 1.757-4.243c0.104-0.104 0.211-0.204 0.323-0.3 0.035-0.031 0.071-0.061 0.107-0.090zM17.491 6.182l-0.315-3.455c-0.070-0.756-0.418-1.43-0.938-1.917-0.539-0.505-1.266-0.813-2.058-0.81h-4.354c-0.755 0.003-1.454 0.286-1.985 0.757-0.551 0.488-0.925 1.182-0.997 1.972l-0.314 3.433c-0.063 0.059-0.126 0.12-0.187 0.181-1.446 1.447-2.343 3.448-2.343 5.657s0.897 4.21 2.343 5.657c0.058 0.058 0.117 0.115 0.176 0.171l0.315 3.445c0.070 0.756 0.418 1.43 0.938 1.917 0.539 0.505 1.266 0.813 2.058 0.81h4.329c0.759 0.001 1.463-0.282 1.997-0.754 0.553-0.489 0.929-1.184 1-1.975l0.314-3.433c0.063-0.059 0.126-0.12 0.187-0.181 1.446-1.447 2.343-3.448 2.343-5.657s-0.897-4.21-2.343-5.657c-0.054-0.054-0.11-0.108-0.165-0.161zM8.67 4.724l0.166-1.813c0.024-0.265 0.147-0.494 0.331-0.657 0.179-0.159 0.412-0.253 0.667-0.254h4.346c0.27-0.001 0.509 0.1 0.69 0.269 0.175 0.164 0.291 0.389 0.315 0.643l0.166 1.821c-1.020-0.47-2.155-0.733-3.351-0.733-1.188 0-2.316 0.259-3.33 0.724z"></path></symbol><symbol id="icon-wifi" viewBox="0 0 24 24"><path d="M5.64 13.318c1.962-1.634 4.361-2.389 6.733-2.305 2.167 0.077 4.31 0.855 6.071 2.308 0.426 0.351 1.056 0.291 1.408-0.135s0.291-1.056-0.135-1.408c-2.107-1.738-4.674-2.671-7.272-2.763-2.846-0.101-5.731 0.806-8.084 2.767-0.424 0.353-0.482 0.984-0.128 1.408s0.984 0.482 1.408 0.128zM2.081 9.75c2.937-2.589 6.6-3.82 10.236-3.737 3.443 0.079 6.859 1.337 9.604 3.739 0.416 0.364 1.047 0.322 1.411-0.094s0.322-1.047-0.094-1.411c-3.108-2.72-6.977-4.145-10.876-4.234-4.119-0.094-8.275 1.303-11.603 4.237-0.415 0.365-0.454 0.997-0.089 1.411s0.997 0.454 1.411 0.089zM9.109 16.925c0.99-0.704 2.146-0.995 3.274-0.906 0.891 0.070 1.765 0.378 2.523 0.909 0.452 0.317 1.076 0.207 1.393-0.245s0.207-1.076-0.245-1.393c-1.053-0.738-2.269-1.167-3.513-1.265-1.58-0.125-3.204 0.285-4.59 1.269-0.45 0.32-0.556 0.944-0.236 1.394s0.944 0.556 1.394 0.236zM12 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-wifi-off" viewBox="0 0 24 24"><path d="M16.281 11.959c0.789 0.385 1.498 0.857 2.064 1.347 0.418 0.361 1.049 0.316 1.411-0.102s0.316-1.049-0.102-1.411c-0.703-0.609-1.559-1.175-2.496-1.633-0.496-0.242-1.095-0.036-1.337 0.46s-0.036 1.095 0.46 1.337zM10.79 6.047c4.020-0.324 7.796 0.968 10.696 3.337 0.146 0.12 0.29 0.242 0.432 0.367 0.414 0.365 1.046 0.325 1.411-0.089s0.325-1.046-0.089-1.411c-0.16-0.141-0.324-0.28-0.489-0.415-3.284-2.683-7.566-4.149-12.122-3.781-0.55 0.043-0.96 0.525-0.916 1.075s0.527 0.961 1.077 0.916zM9.109 16.925c0.99-0.704 2.146-0.995 3.274-0.906 0.891 0.070 1.765 0.378 2.523 0.909 0.233 0.163 0.512 0.213 0.77 0.162l6.617 6.617c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-12.75-12.75c-0.050-0.063-0.106-0.12-0.169-0.169l-9.081-9.081c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l4.088 4.088c-1.257 0.629-2.49 1.453-3.623 2.455-0.414 0.366-0.453 0.998-0.087 1.412s0.998 0.453 1.412 0.087c1.191-1.053 2.499-1.877 3.802-2.451l2.323 2.323c-1.358 0.457-2.671 1.177-3.849 2.161-0.424 0.354-0.48 0.985-0.126 1.409s0.985 0.48 1.409 0.126c1.27-1.062 2.724-1.75 4.188-2.074l2.789 2.789c-0.026-0.002-0.052-0.005-0.078-0.007-1.58-0.125-3.204 0.285-4.59 1.269-0.45 0.32-0.556 0.944-0.236 1.394s0.944 0.556 1.394 0.236zM12 21c0.552 0 1-0.448 1-1s-0.448-1-1-1-1 0.448-1 1 0.448 1 1 1z"></path></symbol><symbol id="icon-wind" viewBox="0 0 24 24"><path d="M10.299 5.295c0.195-0.196 0.449-0.294 0.706-0.295s0.512 0.096 0.708 0.291 0.294 0.449 0.295 0.706-0.096 0.512-0.291 0.708c-0.192 0.194-0.442 0.292-0.697 0.295h-9.020c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.043c0.758-0.009 1.516-0.304 2.093-0.885 0.584-0.587 0.875-1.358 0.872-2.124s-0.298-1.535-0.885-2.119-1.357-0.874-2.123-0.872-1.535 0.298-2.119 0.885c-0.39 0.392-0.388 1.025 0.004 1.414s1.025 0.387 1.414-0.004zM11.881 20.115c0.584 0.587 1.352 0.883 2.119 0.885s1.537-0.289 2.124-0.872 0.883-1.352 0.885-2.119-0.289-1.537-0.872-2.124c-0.577-0.581-1.335-0.876-2.093-0.885h-12.044c-0.552 0-1 0.448-1 1s0.448 1 1 1h12.020c0.255 0.003 0.505 0.101 0.698 0.295 0.195 0.196 0.292 0.451 0.291 0.708s-0.099 0.511-0.295 0.706-0.451 0.292-0.708 0.291-0.511-0.099-0.706-0.295c-0.389-0.392-1.023-0.394-1.414-0.004s-0.394 1.023-0.004 1.414zM18.436 8.438c0.294-0.293 0.676-0.438 1.061-0.438s0.767 0.147 1.060 0.441 0.438 0.676 0.438 1.061-0.147 0.767-0.441 1.060c-0.292 0.292-0.673 0.437-1.057 0.438h-17.497c-0.552 0-1 0.448-1 1s0.448 1 1 1h17.502c0.891-0.002 1.784-0.342 2.466-1.022 0.684-0.682 1.027-1.579 1.028-2.474s-0.34-1.792-1.022-2.476-1.58-1.027-2.474-1.028-1.792 0.34-2.476 1.022c-0.391 0.39-0.392 1.023-0.002 1.414s1.023 0.392 1.414 0.002z"></path></symbol><symbol id="icon-x" viewBox="0 0 24 24"><path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-circle" viewBox="0 0 24 24"><path d="M23 12c0-3.037-1.232-5.789-3.222-7.778s-4.741-3.222-7.778-3.222-5.789 1.232-7.778 3.222-3.222 4.741-3.222 7.778 1.232 5.789 3.222 7.778 4.741 3.222 7.778 3.222 5.789-1.232 7.778-3.222 3.222-4.741 3.222-7.778zM21 12c0 2.486-1.006 4.734-2.636 6.364s-3.878 2.636-6.364 2.636-4.734-1.006-6.364-2.636-2.636-3.878-2.636-6.364 1.006-4.734 2.636-6.364 3.878-2.636 6.364-2.636 4.734 1.006 6.364 2.636 2.636 3.878 2.636 6.364zM8.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-octagon" viewBox="0 0 24 24"><path d="M7.86 1c-0.256 0-0.512 0.098-0.707 0.293l-5.86 5.86c-0.181 0.181-0.293 0.431-0.293 0.707v8.28c0 0.256 0.098 0.512 0.293 0.707l5.86 5.86c0.181 0.181 0.431 0.293 0.707 0.293h8.28c0.256 0 0.512-0.098 0.707-0.293l5.86-5.86c0.181-0.181 0.293-0.431 0.293-0.707v-8.28c0-0.256-0.098-0.512-0.293-0.707l-5.86-5.86c-0.181-0.181-0.431-0.293-0.707-0.293zM8.274 3h7.452l5.274 5.274v7.452l-5.274 5.274h-7.452l-5.274-5.274v-7.452zM8.293 9.707l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-x-square" viewBox="0 0 24 24"><path d="M5 2c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v14c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h14c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-14c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879zM5 4h14c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v14c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-14c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-14c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293zM14.293 8.293l-2.293 2.293-2.293-2.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l2.293 2.293-2.293 2.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l2.293-2.293 2.293 2.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-2.293-2.293 2.293-2.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0z"></path></symbol><symbol id="icon-youtube" viewBox="0 0 24 24"><path d="M21.563 6.637c0.287 1.529 0.448 3.295 0.437 5.125 0.019 1.528-0.123 3.267-0.437 5.021-0.057 0.208-0.15 0.403-0.272 0.575-0.227 0.321-0.558 0.565-0.949 0.675-0.604 0.161-2.156 0.275-3.877 0.341-2.23 0.086-4.465 0.086-4.465 0.086s-2.235 0-4.465-0.085c-1.721-0.066-3.273-0.179-3.866-0.338-0.205-0.057-0.396-0.149-0.566-0.268-0.311-0.22-0.55-0.536-0.67-0.923-0.285-1.526-0.444-3.286-0.433-5.11-0.021-1.54 0.121-3.292 0.437-5.060 0.057-0.208 0.15-0.403 0.272-0.575 0.227-0.321 0.558-0.565 0.949-0.675 0.604-0.161 2.156-0.275 3.877-0.341 2.23-0.085 4.465-0.085 4.465-0.085s2.235 0 4.466 0.078c1.719 0.060 3.282 0.163 3.856 0.303 0.219 0.063 0.421 0.165 0.598 0.299 0.307 0.232 0.538 0.561 0.643 0.958zM23.51 6.177c-0.217-0.866-0.718-1.59-1.383-2.093-0.373-0.282-0.796-0.494-1.249-0.625-0.898-0.22-2.696-0.323-4.342-0.38-2.267-0.079-4.536-0.079-4.536-0.079s-2.272 0-4.541 0.087c-1.642 0.063-3.45 0.175-4.317 0.407-0.874 0.247-1.581 0.77-2.064 1.45-0.27 0.381-0.469 0.811-0.587 1.268-0.006 0.024-0.011 0.049-0.015 0.071-0.343 1.898-0.499 3.793-0.476 5.481-0.012 1.924 0.161 3.831 0.477 5.502 0.006 0.031 0.013 0.062 0.021 0.088 0.245 0.86 0.77 1.567 1.451 2.048 0.357 0.252 0.757 0.443 1.182 0.561 0.879 0.235 2.686 0.347 4.328 0.41 2.269 0.087 4.541 0.087 4.541 0.087s2.272 0 4.541-0.087c1.642-0.063 3.449-0.175 4.317-0.407 0.873-0.247 1.581-0.77 2.063-1.45 0.27-0.381 0.47-0.811 0.587-1.267 0.006-0.025 0.012-0.050 0.015-0.071 0.34-1.884 0.496-3.765 0.476-5.44 0.012-1.925-0.161-3.833-0.477-5.504-0.004-0.020-0.008-0.040-0.012-0.057zM10.75 13.301v-3.102l2.727 1.551zM10.244 15.889l5.75-3.27c0.48-0.273 0.648-0.884 0.375-1.364-0.093-0.164-0.226-0.292-0.375-0.375l-5.75-3.27c-0.48-0.273-1.091-0.105-1.364 0.375-0.090 0.158-0.132 0.33-0.131 0.494v6.54c0 0.552 0.448 1 1 1 0.182 0 0.352-0.049 0.494-0.131z"></path></symbol><symbol id="icon-zap" viewBox="0 0 24 24"><path d="M11.585 5.26l-0.577 4.616c0.033 0.716 0.465 1.124 0.992 1.124h6.865l-6.45 7.74 0.577-4.616c-0.033-0.716-0.465-1.124-0.992-1.124h-6.865zM12.232 1.36l-10 12c-0.354 0.424-0.296 1.055 0.128 1.408 0.187 0.157 0.415 0.233 0.64 0.232h7.867l-0.859 6.876c-0.069 0.548 0.32 1.048 0.868 1.116 0.349 0.044 0.678-0.098 0.892-0.352l10-12c0.354-0.424 0.296-1.055-0.128-1.408-0.187-0.157-0.415-0.233-0.64-0.232h-7.867l0.859-6.876c0.069-0.548-0.32-1.048-0.868-1.116-0.349-0.044-0.678 0.098-0.892 0.352z"></path></symbol><symbol id="icon-zap-off" viewBox="0 0 24 24"><path d="M13.402 6.873l0.59-4.75c0.068-0.548-0.321-1.048-0.869-1.116-0.349-0.043-0.678 0.099-0.892 0.353l-2.43 2.92c-0.353 0.425-0.295 1.055 0.129 1.409s1.055 0.296 1.408-0.129l0.249-0.299-0.17 1.366c-0.068 0.548 0.321 1.048 0.869 1.116s1.048-0.321 1.116-0.869zM19.338 13.551l2.43-2.91c0.354-0.424 0.297-1.055-0.127-1.409-0.188-0.156-0.416-0.233-0.641-0.232h-5.34c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.202l-1.060 1.269c-0.354 0.424-0.297 1.055 0.127 1.409s1.055 0.297 1.409-0.127zM12.961 14.375l1.686 1.686-2.232 2.678zM8.067 9.481l3.519 3.519h-6.451zM0.293 1.707l6.354 6.354-4.415 5.299c-0.354 0.424-0.296 1.055 0.128 1.408 0.187 0.157 0.415 0.233 0.64 0.232h7.867l-0.859 6.876c-0.069 0.548 0.32 1.048 0.868 1.116 0.349 0.044 0.678-0.098 0.892-0.352l4.299-5.159 6.226 6.226c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-22-22c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path></symbol><symbol id="icon-zoom-in" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM8 12h2v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-zoom-out" viewBox="0 0 24 24"><path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM8 12h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path></symbol><symbol id="icon-business-unit" viewBox="0 0 24 24"><path d="M2.99966 1.00003C2.44737 1.00002 2 1.44774 2 2.00003V20C2 20.405 2.081 20.793 2.228 21.148C2.38 21.516 2.603 21.846 2.879 22.122C3.155 22.398 3.485 22.621 3.853 22.773C4.207 22.919 4.595 23 5 23H19C19.405 23 19.793 22.919 20.148 22.772C20.516 22.62 20.846 22.397 21.122 22.121C21.398 21.845 21.621 21.515 21.773 21.147C21.919 20.793 22 20.405 22 20V2.00001C22 1.44773 21.5528 1.00002 21.0005 1.00001C17.1935 0.999983 12.8183 1.00002 12 1.00001C11.0909 0.999999 6.46317 1.00004 2.99966 1.00003ZM16 21V12C16 11.448 15.552 11 15 11H9C8.448 11 8 11.448 8 12V21H5C4.863 21 4.734 20.973 4.618 20.925C4.496 20.875 4.386 20.8 4.293 20.707C4.2 20.614 4.126 20.504 4.075 20.382C4.027 20.266 4 20.137 4 20V4C4 3.44771 4.44772 3 5 3L18.9294 3C19.48 3 19.927 3.44503 19.9294 3.99559L20 20C20 20.137 19.973 20.266 19.925 20.382C19.875 20.504 19.8 20.614 19.707 20.707C19.614 20.8 19.504 20.874 19.382 20.925C19.266 20.973 19.137 21 19 21H16ZM10 21V13H14V21H10Z"></path></symbol><symbol id="icon-loading" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.0188 3 8.09294 3.65373 6.52115 4.85982C4.94935 6.0659 3.81944 7.75692 3.30667 9.67062C2.7939 11.5843 2.92691 13.6137 3.68509 15.4441C4.44326 17.2745 5.78422 18.8036 7.5 19.7942C9.21577 20.7848 11.2105 21.1816 13.1747 20.923C15.139 20.6644 16.963 19.7649 18.3639 18.3639C19.7649 16.963 20.6644 15.139 20.923 13.1747C21.1816 11.2105 20.7848 9.21577 19.7942 7.5L21.5263 6.5C22.737 8.59706 23.2219 11.035 22.9059 13.4358C22.5898 15.8365 21.4904 18.0659 19.7782 19.7782C18.0659 21.4904 15.8365 22.5898 13.4358 22.9059C11.035 23.2219 8.59706 22.737 6.5 21.5263C4.40294 20.3155 2.76399 18.4467 1.83733 16.2095C0.91067 13.9724 0.748096 11.4919 1.37482 9.15298C2.00154 6.81402 3.38254 4.74721 5.30362 3.27311C7.22471 1.79901 9.57852 1 12 1V3Z"></path></symbol><symbol id="icon-half-loading" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21V23C9.08262 23 6.28472 21.8411 4.22182 19.7782C2.15892 17.7153 1 14.9174 1 12C1 9.08262 2.15893 6.28473 4.22183 4.22183C6.28473 2.15893 9.08262 1 12 1V3Z"></path></symbol>', 285)),
        p("symbol", X8, [
          s[1] || (s[1] = m1('<path d="M551.131 100.2C551.131 97.6309 551.131 94.4193 552.411 91.2078C553.691 87.9962 554.971 84.7847 557.532 81.5732C560.092 78.3616 563.293 75.7924 567.133 73.8655C570.974 71.9386 576.095 70.6539 582.496 70.0116C586.337 70.0116 590.177 70.0116 593.378 70.6539C596.578 71.2962 599.779 72.5809 602.339 74.5078C604.9 76.4347 606.82 78.3616 608.74 81.5732C610.661 84.7847 611.301 87.9962 611.301 91.8501C611.301 95.7039 611.301 99.5578 610.02 102.769C608.74 106.623 607.46 109.835 604.9 112.404C602.339 115.615 599.139 117.542 595.298 119.469C591.457 121.396 586.977 122.681 581.216 122.681C571.614 123.323 564.573 121.396 559.452 116.9C554.331 113.689 551.771 107.908 551.131 100.2Z"></path><path d="M707.316 278.119C701.555 282.615 695.154 286.469 688.753 290.323C682.352 294.176 675.311 297.388 668.27 299.957C661.228 302.526 654.827 303.811 648.426 304.453C642.665 304.453 638.185 304.453 633.704 302.526C629.863 301.242 626.663 299.315 624.102 296.103C621.542 293.534 619.622 289.68 618.341 285.826C617.061 281.973 616.421 277.476 616.421 272.338C615.781 265.273 616.421 257.565 617.701 247.93C619.622 228.661 621.542 217.742 622.182 215.173C623.462 210.676 626.023 199.757 629.863 183.7C633.704 170.211 635.624 161.861 636.264 157.365C636.904 154.796 638.185 152.226 640.745 149.657C642.665 147.73 645.226 145.803 648.426 144.519C650.987 143.234 654.187 141.95 657.388 141.307C660.588 140.665 663.149 140.023 665.709 140.023C670.19 140.023 673.39 140.665 675.311 141.95C677.231 143.876 677.871 145.803 677.871 149.015C677.871 151.584 677.871 154.796 676.591 159.292C675.951 163.788 674.671 168.926 673.39 174.707C672.11 180.488 670.19 187.553 668.27 196.546C665.709 205.538 664.429 213.246 663.789 219.669C663.149 226.092 661.868 232.515 660.588 238.296C659.308 244.719 658.668 250.5 659.308 254.996C659.308 260.134 660.588 263.988 661.228 266.557C662.509 269.126 665.069 271.053 668.27 270.411C672.11 270.411 676.591 268.484 681.072 265.915C685.552 262.703 690.673 259.492 695.154 254.996C699.635 250.5 704.756 246.646 709.236 242.15C723.319 226.092 729.72 235.726 729.72 252.426C729.72 256.923 729.08 258.207 725.879 261.419C718.838 268.484 709.876 275.55 707.316 278.119Z"></path><path d="M639.465 95.7038C639.465 93.1346 639.465 89.923 640.745 86.7115C642.025 83.5 643.305 80.2884 645.866 77.0769C648.426 73.8653 651.627 71.2961 655.467 69.3692C659.308 67.4423 664.429 66.1576 670.83 65.5153C674.671 65.5153 678.511 65.5153 681.712 66.1576C684.912 66.8 688.113 68.0846 690.673 70.0115C693.234 71.9384 695.154 73.8653 697.074 77.0769C698.995 80.2884 699.635 83.5 699.635 87.3538C699.635 91.2076 699.635 95.0615 698.354 98.273C697.074 102.127 695.794 105.338 693.234 107.908C690.673 111.119 687.473 113.046 683.632 114.973C679.791 116.9 675.311 118.185 669.55 118.185C659.948 118.827 652.907 116.9 647.786 112.404C642.665 109.835 640.105 103.411 639.465 95.7038Z"></path><path d="M403.906 262.061C403.906 264.631 404.546 267.842 404.546 270.411C405.186 272.981 405.827 275.55 407.107 277.477C408.387 279.404 409.667 281.331 411.588 282.615C413.508 283.9 415.428 284.542 417.989 284.542C421.829 284.542 425.67 282.615 428.87 278.761C432.071 274.908 434.631 270.411 436.552 265.273C438.472 260.134 440.392 254.996 441.672 249.215C442.953 244.077 443.593 239.581 443.593 235.727L453.194 181.773C448.714 181.773 444.233 183.058 440.392 185.627C435.912 188.196 432.071 191.408 428.87 195.261C425.03 199.115 421.829 203.611 419.269 208.75C416.068 213.888 413.508 219.669 410.947 227.377C408.387 234.442 406.467 240.865 405.186 246.646C403.906 251.785 403.906 256.923 403.906 262.061ZM316.852 188.838C321.333 179.846 325.813 169.569 330.934 158.008C336.055 146.446 340.536 134.884 345.017 122.681C349.497 110.477 353.338 98.9153 355.898 86.7114C359.099 75.1499 361.019 63.5883 361.019 53.9537C361.019 50.7422 360.379 48.1729 360.379 45.6037C360.379 43.0345 359.739 42.3922 358.459 42.3922C355.258 42.3922 352.058 44.9614 348.857 48.8153C345.657 53.3114 342.456 59.0922 339.256 66.1576C336.055 73.2229 332.214 85.4268 328.374 101.484C324.533 117.542 321.973 125.892 321.973 125.892C321.973 125.892 320.693 133.6 318.772 148.373C318.132 164.431 316.852 177.919 316.852 188.838ZM613.221 285.827C608.74 289.038 604.259 291.608 599.778 294.177C593.377 298.031 586.336 301.242 579.295 303.811C572.254 306.381 565.853 307.665 559.452 308.308C553.691 308.308 549.21 308.308 544.729 306.381C540.889 305.096 537.688 303.169 535.128 299.958C532.567 297.388 530.647 293.534 529.367 289.681C529.367 289.038 529.367 288.396 528.727 288.396C526.806 290.965 524.246 292.892 521.686 294.819C516.565 299.315 510.804 303.169 505.043 306.381C499.282 309.592 492.881 311.519 487.12 311.519C480.079 312.161 473.678 309.592 468.557 305.738C463.436 301.242 458.955 294.819 455.115 285.827C452.554 289.038 449.354 292.25 445.513 295.461C441.672 298.673 437.832 301.885 433.351 304.454C428.87 307.023 424.39 309.592 419.269 311.519C414.148 313.446 409.667 314.731 404.546 314.731C399.426 314.731 394.305 314.088 389.184 312.161C384.063 310.234 379.582 307.665 375.742 303.811C374.461 302.527 373.181 301.242 371.901 299.958C368.7 301.884 364.86 303.811 361.019 305.738C356.538 308.308 352.058 310.234 347.577 312.161C343.096 314.088 338.616 315.373 334.135 316.658C329.654 317.942 325.813 318.585 321.973 318.585C316.212 318.585 310.451 316.658 305.33 311.519C300.849 307.665 297.009 301.884 293.168 295.461C284.847 308.95 275.245 320.511 265.003 331.431C251.561 344.919 240.039 352.627 232.358 327.577C228.517 315.373 227.237 308.308 228.517 299.315C229.798 290.323 232.358 287.754 238.119 281.973C252.201 268.484 265.003 254.996 277.806 240.223C277.165 235.727 277.165 231.231 276.525 226.092C275.885 215.173 277.165 201.042 279.086 183.058C281.646 165.073 282.286 156.081 282.286 156.081C282.286 156.081 284.207 147.088 288.047 128.461C291.888 110.477 296.369 95.7037 300.209 84.1422C304.69 73.2229 309.171 62.3037 314.292 52.6691C319.412 43.0345 325.173 34.6845 330.934 26.9768C336.695 19.9114 343.096 14.1306 349.497 9.63448C355.898 5.13832 362.94 3.2114 369.981 2.56909C375.102 2.56909 379.582 3.2114 382.783 5.13832C385.983 7.06525 389.184 9.63448 391.104 12.2037C393.024 15.4152 394.945 18.6268 395.585 23.1229C396.225 26.9768 396.865 31.4729 397.505 35.3268C398.145 45.6037 397.505 56.5229 395.585 67.4422C393.665 78.3614 391.104 89.2806 387.264 100.2C383.423 111.119 379.582 122.681 374.461 133.6C369.341 144.519 364.22 156.081 359.099 167C353.978 177.919 348.217 188.838 342.456 199.758C336.695 210.677 332.214 220.954 327.094 231.231C326.454 232.515 325.813 233.8 325.813 235.727C325.173 237.654 324.533 239.581 324.533 241.508C323.893 243.434 323.893 246.004 323.253 247.931C322.613 250.5 322.613 252.427 321.973 254.996V257.565C321.973 260.134 322.613 263.346 323.253 265.915C323.893 268.484 324.533 271.054 325.813 272.981C326.454 274.908 327.734 276.835 329.014 278.119C330.294 279.404 330.934 280.046 331.574 280.046C333.495 280.046 336.055 279.404 338.616 278.119C341.176 276.835 344.376 275.55 346.937 274.265C350.137 272.338 353.338 271.054 356.538 268.484C358.459 267.2 359.739 266.558 361.659 265.273C361.659 258.208 362.299 251.784 364.22 244.719C366.14 235.727 369.341 226.092 373.821 215.815C378.302 205.538 382.783 196.546 388.544 188.838C393.665 181.131 399.426 174.708 405.827 168.927C412.228 163.146 418.629 158.65 426.31 154.796C433.351 150.942 441.032 149.015 448.714 149.015C451.274 149.015 453.194 149.015 454.475 150.3C455.755 150.942 457.035 152.227 458.315 153.511C459.595 154.796 460.236 156.081 461.516 157.365C462.156 158.65 463.436 159.292 464.716 159.934C465.996 160.577 467.277 160.577 468.557 160.577C469.837 160.577 471.117 160.577 473.038 160.577C474.318 160.577 475.598 160.577 476.878 160.577C478.158 160.577 479.439 160.577 480.719 160.577C482.639 160.577 483.919 160.577 485.2 160.577C486.48 160.577 487.76 161.219 489.04 162.504C490.32 163.788 490.961 165.073 491.601 167C492.241 168.927 492.881 171.496 492.881 175.35C492.881 180.488 492.881 186.269 492.241 192.692C491.601 199.115 490.32 205.538 489.68 212.604C488.4 219.669 487.12 227.377 485.84 235.727C484.56 244.719 483.919 251.784 483.919 257.565C483.919 262.704 484.56 266.558 485.84 269.127C487.12 271.696 489.04 272.981 492.241 272.981C494.801 272.981 496.722 272.338 499.282 271.054C501.842 269.769 504.403 268.484 506.963 265.915C509.524 263.988 512.084 261.419 514.644 259.492C517.205 256.923 519.125 254.354 521.686 251.785C524.886 247.931 528.087 244.077 531.287 239.581C532.567 227.377 533.848 220.311 534.488 218.384C535.768 213.888 538.328 202.969 542.169 186.911C546.01 173.423 547.93 165.073 548.57 160.577C549.21 158.008 550.49 155.438 553.051 152.869C554.971 150.942 557.532 149.015 560.732 147.731C563.292 146.446 566.493 145.161 569.693 144.519C572.894 143.877 575.454 143.234 578.015 143.234C582.496 143.234 585.696 143.877 587.616 145.161C589.537 147.088 590.177 149.015 590.177 152.227C590.177 154.796 590.177 158.008 588.897 162.504C588.257 167 586.976 172.138 585.696 177.919C584.416 183.7 582.496 190.765 580.575 199.758C578.015 208.75 576.735 216.458 576.095 222.881C575.454 229.304 574.174 235.727 572.894 241.508C571.614 247.931 570.974 253.711 571.614 258.208C571.614 263.346 572.894 267.2 573.534 269.769C574.814 272.338 577.375 274.265 580.575 273.623C584.416 273.623 588.897 271.696 593.377 269.127C597.858 265.915 602.979 262.704 607.46 258.208C609.38 256.281 611.94 254.354 613.861 252.427C613.221 259.492 613.221 265.273 613.221 271.054C611.94 277.477 612.581 281.973 613.221 285.827Z"></path><path d="M117.139 330.788C126.101 330.145 133.782 328.219 141.463 324.365C149.145 320.511 155.546 315.372 161.307 309.592C167.067 303.169 172.828 296.103 177.309 287.753C181.79 279.403 186.271 270.411 190.111 261.419C193.952 251.784 196.512 242.149 199.073 232.515C201.633 222.238 203.553 212.603 204.834 202.969C206.114 193.334 207.394 183.699 208.034 174.707C208.674 165.715 208.674 157.365 208.034 150.299C207.394 139.38 206.114 129.745 202.913 120.753C200.353 111.761 196.512 103.411 191.391 96.9877C186.271 90.5647 180.51 84.7839 172.828 81.5723C165.787 77.7185 157.466 76.4339 147.864 77.0762C137.623 77.7185 128.021 80.2877 119.06 86.0685C110.098 91.207 101.137 98.2723 93.4554 107.265C85.7741 116.257 78.0928 125.892 71.6918 137.453C65.2907 149.015 60.1699 160.576 55.6892 173.422C51.2084 185.626 48.0079 198.472 46.0876 211.319C44.1673 224.165 42.8871 236.369 43.5272 247.93C44.1673 260.776 46.0876 272.338 49.9282 282.615C53.7689 293.534 58.2496 302.526 64.6506 310.234C71.0517 317.942 78.0928 323.722 87.0543 327.576C96.6559 329.503 106.257 331.43 117.139 330.788ZM115.219 369.326C98.5762 369.969 83.8538 367.399 70.4116 361.619C56.9694 355.838 45.4475 346.845 35.8459 335.284C26.2443 323.722 18.5631 309.592 12.8021 293.534C7.04118 277.476 3.84065 259.492 2.56044 239.58C1.92034 228.661 2.56044 217.742 3.20055 206.822C4.48076 195.903 5.76097 184.342 8.32139 172.78C10.8818 161.219 14.0823 150.299 18.5631 139.38C22.4037 128.461 27.5245 118.184 33.2855 108.549C39.0464 98.9146 45.4475 89.9223 52.4886 80.93C59.5298 72.58 67.8512 65.5146 76.8126 59.0916C85.7741 52.6685 95.3757 47.53 106.257 44.3185C116.499 40.4646 128.021 38.5377 140.183 37.8954C156.826 37.2531 171.548 39.18 184.99 44.9608C198.433 50.0993 209.314 57.8069 218.916 68.7262C228.518 79.0031 235.559 91.207 241.32 105.98C247.081 120.753 249.641 136.811 250.921 154.795C251.561 169.569 250.921 184.984 249.001 201.042C247.081 217.099 243.24 233.157 238.759 248.572C233.638 263.988 227.877 279.403 220.196 293.534C212.515 307.665 203.553 320.511 193.312 331.43C183.07 342.349 171.548 351.342 158.106 358.407C144.664 364.83 130.581 368.684 115.219 369.326Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M54.409 432.274C256.682 364.831 465.997 337.854 681.072 346.204C697.715 346.204 689.393 358.408 682.352 369.97C677.871 377.677 675.951 375.751 661.869 374.466C553.051 365.474 419.909 380.247 313.011 403.37C218.276 423.924 133.782 445.12 56.3293 495.22C48.0079 500.358 41.6068 498.431 39.6865 490.081C38.4063 475.308 39.6865 463.104 42.8871 449.616C45.4475 441.908 45.4475 435.485 54.409 432.274Z"></path>', 6)),
          c.isDevelopment ? (h(), f("g", Q8, [...s[0] || (s[0] = [
            m1('<path d="M697.242 394.658L658.14 462.384L644.232 454.354L683.334 386.628L697.242 394.658ZM718.081 406.689L711.77 417.62L656.51 385.716L662.821 374.785L718.081 406.689Z" fill="#FF0000"></path><path d="M656.216 370.971L617.114 438.697L603.16 430.641L602.159 369.532L575.948 414.93L561.994 406.874L601.095 339.148L615.05 347.204L616.07 408.387L642.308 362.942L656.216 370.971Z" fill="#FF0000"></path><path d="M560.138 391.289L553.854 402.174L517.804 381.361L524.089 370.476L560.138 391.289ZM561.465 316.267L522.363 383.993L508.408 375.936L547.51 308.21L561.465 316.267ZM572.332 359.319L566.209 369.924L534.858 351.824L540.981 341.218L572.332 359.319ZM592.909 334.421L586.598 345.352L550.595 324.566L556.906 313.635L592.909 334.421Z" fill="#FF0000"></path><path d="M470.435 263.711L482.249 270.532L470.938 330.301L517.043 290.62L528.857 297.441L465.289 351.041L455.8 345.563L470.435 263.711ZM464.062 260.031L475.83 266.826L449.987 316.53L438.868 335.787L424.96 327.757L464.062 260.031ZM523.462 294.326L535.277 301.147L496.175 368.873L482.22 360.816L493.339 341.559L523.462 294.326Z" fill="#FF0000"></path><path d="M403.873 283.394L386.616 273.431L392.9 262.546L410.157 272.509C412.824 274.049 415.245 274.868 417.421 274.967C419.615 275.034 421.556 274.501 423.244 273.367C424.932 272.233 426.349 270.674 427.495 268.689C428.659 266.674 429.355 264.574 429.582 262.39C429.809 260.205 429.39 258.103 428.324 256.082C427.258 254.061 425.392 252.28 422.725 250.74L410.306 243.57L377.515 300.365L363.561 292.308L402.662 224.582L429.036 239.809C434.339 242.871 438.327 246.455 441 250.562C443.722 254.656 445.124 258.959 445.206 263.472C445.288 267.985 444.085 272.396 441.597 276.707C439.072 281.079 435.88 284.28 432.02 286.311C428.161 288.341 423.822 289.123 419.005 288.658C414.22 288.21 409.175 286.455 403.873 283.394Z" fill="#FF0000"></path><path d="M373.977 251.063L372.124 254.272C369.152 259.42 365.787 263.638 362.028 266.925C358.269 270.213 354.286 272.565 350.078 273.981C345.888 275.366 341.587 275.797 337.175 275.276C332.793 274.772 328.463 273.285 324.183 270.814C319.935 268.361 316.482 265.355 313.824 261.794C311.197 258.252 309.42 254.311 308.494 249.972C307.585 245.602 307.599 240.959 308.536 236.042C309.504 231.143 311.474 226.119 314.446 220.972L316.299 217.762C319.288 212.583 322.654 208.366 326.395 205.109C330.153 201.821 334.137 199.47 338.345 198.054C342.583 196.656 346.894 196.209 351.275 196.712C355.687 197.234 360.018 198.721 364.266 201.174C368.546 203.645 371.999 206.651 374.626 210.194C377.283 213.754 379.051 217.711 379.929 222.063C380.838 226.433 380.808 231.067 379.84 235.966C378.922 240.852 376.967 245.884 373.977 251.063ZM358.03 246.135L359.937 242.833C362.014 239.236 363.514 235.885 364.439 232.78C365.363 229.675 365.726 226.825 365.529 224.23C365.332 221.636 364.587 219.345 363.295 217.358C362.02 215.341 360.205 213.652 357.848 212.291C355.491 210.93 353.12 210.203 350.736 210.108C348.4 209.999 346.059 210.509 343.714 211.635C341.399 212.78 339.128 214.528 336.902 216.881C334.675 219.234 332.523 222.209 330.446 225.806L328.54 229.109C326.481 232.675 324.98 236.026 324.038 239.162C323.114 242.267 322.741 245.132 322.92 247.758C323.118 250.352 323.853 252.658 325.128 254.676C326.403 256.694 328.218 258.383 330.575 259.744C332.932 261.104 335.303 261.832 337.687 261.927C340.072 262.022 342.421 261.497 344.736 260.353C347.068 259.177 349.348 257.413 351.575 255.06C353.819 252.676 355.971 249.701 358.03 246.135Z" fill="#FF0000"></path><path d="M299.235 240.657L292.951 251.542L258.855 231.857L265.139 220.972L299.235 240.657ZM302.469 166.736L263.367 234.461L249.413 226.405L288.514 158.679L302.469 166.736Z" fill="#FF0000"></path><path d="M247.557 210.821L241.273 221.705L205.223 200.892L211.508 190.008L247.557 210.821ZM248.883 135.798L209.782 203.524L195.827 195.467L234.929 127.741L248.883 135.798ZM259.751 178.85L253.628 189.456L222.277 171.355L228.4 160.75L259.751 178.85ZM280.328 153.952L274.017 164.883L238.014 144.097L244.325 133.166L280.328 153.952Z" fill="#FF0000"></path><path d="M166.175 159.493L213.067 115.119L228.603 124.089L165.918 178.199L155.685 172.291L166.175 159.493ZM182.414 97.4216L167.384 160.192L161.639 175.729L151.313 169.767L166.971 88.5056L182.414 97.4216Z" fill="#FF0000"></path><path d="M131.734 143.951L125.45 154.835L89.401 134.022L95.6852 123.138L131.734 143.951ZM133.061 68.928L93.9595 136.654L80.005 128.597L119.107 60.8713L133.061 68.928ZM143.928 111.98L137.805 122.586L106.454 104.485L112.577 93.8796L143.928 111.98ZM164.505 87.0823L158.194 98.0133L122.192 77.2272L128.503 66.2961L164.505 87.0823Z" fill="#FF0000"></path><path d="M38.8392 104.83L24.0939 96.317L30.4711 85.4861L45.1234 93.9456C48.7825 96.0583 52.3425 97.0179 55.8032 96.8246C59.2818 96.6002 62.5788 95.2581 65.6943 92.7981C68.8408 90.356 71.721 86.8712 74.335 82.3438L76.2417 79.0412C78.2469 75.5681 79.6383 72.2987 80.4159 69.2332C81.2245 66.1856 81.4347 63.3507 81.0467 60.7285C80.6586 58.1064 79.6854 55.7459 78.1269 53.647C76.5863 51.5172 74.4671 49.6735 71.7692 48.1158L56.6053 39.361L62.9164 28.4299L78.0803 37.1848C82.6077 39.7987 86.3 42.9641 89.157 46.681C92.063 50.3847 94.0723 54.4598 95.1851 58.9061C96.2978 63.3524 96.4526 67.9899 95.6494 72.8186C94.8952 77.6342 93.1215 82.4607 90.3286 87.2983L88.4755 90.5078C85.7005 95.3144 82.4074 99.2636 78.5962 102.356C74.8161 105.466 70.7225 107.65 66.3154 108.91C61.9573 110.156 57.4236 110.454 52.7141 109.802C48.0536 109.137 43.4287 107.48 38.8392 104.83ZM71.103 33.1565L32.0015 100.882L18.047 92.8257L57.1485 25.0999L71.103 33.1565Z" fill="#FF0000"></path>', 11)
          ])])) : y("", !0)
        ]),
        X(t.$slots, "default")
      ])
    ]));
  }
});
const K8 = { class: "nice-switch-box-wrapper" }, e6 = ["disabled"], t6 = ["for"], c6 = ["id", "disabled"], s6 = {
  name: "NiceSwitch"
}, n6 = Object.assign(s6, {
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
    const t = e, s = c, n = Math.random().toString(36).slice(2, 7), a = e0({
      get() {
        return t.modelValue;
      },
      set(l) {
        s("update:modelValue", l), s("change", l);
      }
    });
    function r() {
      t.disabled || (a.value = !a.value);
    }
    return (l, u) => {
      const i = R("NiceComponentHeader");
      return h(), f("div", {
        class: q(["nice-component nice-switch", [
          "nice-switch-" + t.type,
          t.size ? "nice-switch-" + t.size : "",
          { "no-margin": t.noMargin, active: a.value, disabled: t.disabled, "nice-is-inline": t.isInline, "nice-is-block": t.isBlock, "nice-is-title-left": e.titleLeft }
        ]])
      }, [
        t.isInline ? (h(), I(i, {
          key: 0,
          title: e.title
        }, null, 8, ["title"])) : y("", !0),
        p("div", K8, [
          p("button", {
            type: "button",
            class: "nice-switch-box",
            onClick: r,
            disabled: t.disabled
          }, [...u[0] || (u[0] = [
            p("div", { class: "nice-switch-handle" }, null, -1)
          ])], 8, e6)
        ]),
        t.title ? (h(), f("div", {
          key: 1,
          class: "nice-switch-title",
          for: "nice-switch" + K(n)
        }, k(t.title), 9, t6)) : y("", !0),
        p("input", {
          type: "checkbox",
          tabindex: "-1",
          id: "nice-switch" + K(n),
          disabled: t.disabled
        }, null, 8, c6)
      ], 2);
    };
  }
}), a6 = /* @__PURE__ */ s0(n6, [["__scopeId", "data-v-9cdc82e5"]]);
const l6 = { class: "nice-table" }, i6 = { class: "nice-table-table-wrapper" }, o6 = { class: "nice-table-table" }, r6 = {
  key: 0,
  class: "w-0"
}, u6 = { key: 0 }, d6 = ["onClick"], h6 = { key: 1 }, v6 = ["placeholder", "onUpdate:modelValue"], m6 = ["onClick"], f6 = ["onClick"], p6 = { key: 0 }, y6 = { key: 0 }, g6 = { class: "list" }, b6 = ["onClick"], M6 = { key: 0 }, z6 = {
  key: 0,
  class: "w-0"
}, w6 = ["innerHTML"], x6 = { class: "actions-td-inner" }, C6 = {
  key: 2,
  class: "nice-table-footer"
}, k6 = { class: "pagination-info" }, B6 = {
  key: 1,
  class: "pagination"
}, _6 = {
  key: 2,
  class: "pagination-dropdown"
}, N6 = {
  name: "NiceTable"
}, $6 = Object.assign(N6, {
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
      //   hasSearch: false,
      //   formatter: (value, row) => formatDateWithTime(value),
      //   fieldClass: (value, row) => "badge " + CommonService.types[value],
      //   html: (value, row) => `<div>${value}</div>`,
      // },
    },
    actions: {
      type: Array,
      default: () => []
      // {
      //   text: (row) => "Edit",
      //   title: (row) => "Edit",
      //   icon: (row) => "icon-edit",
      //   type: (row) => "primary",
      //   href: (row) => "http://olaii.com/",
      //   disabled: (row) => false,
      //   hidden: (row) => false,
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
    orderLocally: {
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
    const t = r2(), s = u2(), n = l0("getQuery"), a = e, r = c, l = Y(void 0), u = Y(50), i = [
      { id: 10, value: 10 },
      { id: 20, value: 20 },
      { id: 50, value: 50 },
      { id: 100, value: 100 }
    ], o = Y(1), d = Y({});
    let v = null;
    const m = e0(() => (o.value - 1) * u.value), _ = e0(() => {
      var $, Z;
      return ((Z = ($ = a.data) == null ? void 0 : $._metadata) == null ? void 0 : Z.count) || 0;
    }), b = e0(() => Math.ceil(_.value / u.value) || 1), M = e0(() => Array.from({ length: b.value }, ($, Z) => ({ id: String(Z + 1), value: String(Z + 1) }))), x = e0(() => a.columns), L = e0(() => x.value.filter(($) => !$.disabled)), S = e0(() => {
      let $ = a.data;
      if ($.forEach((Z) => {
        Z._selected === void 0 && (Z._selected = !1);
      }), a.orderLocally && l.value !== void 0) {
        const Z = l.value.replace("-", "");
        $.sort((i0, o0) => {
          if (l.value[0] != "-") {
            const k0 = i0;
            i0 = o0, o0 = k0;
          }
          return String(i0[Z]).localeCompare(String(o0[Z]));
        });
      }
      return $;
    }), T = e0(() => S.value.filter(($) => $._selected)), g = e0(() => T.value.length == S.value.length);
    function w($) {
      return $.to != null ? "router-link" : $.href != null ? "a" : "div";
    }
    function P() {
      let $ = !0;
      g.value && ($ = !1), S.value.forEach((Z) => Z._selected = $), H();
    }
    function W($) {
      $._selected = !$._selected, H();
    }
    function H() {
      r("selected", T.value);
    }
    let A = null;
    function Q() {
      clearTimeout(A), A = setTimeout(() => {
        s.push({
          query: { ...t.query, ...d.value }
        }), b0();
      }, 500);
    }
    function F($) {
      d.value[$.key] = void 0, Q();
    }
    function U($) {
      $.disabled = !$.disabled;
    }
    function D($) {
      $.key == l.value ? l.value = "-" + $.key : l.value && l.value[0] === "-" && l.value === "-" + $.key ? l.value = void 0 : l.value = $.key, s.push({
        query: { ...t.query, ordering: l.value }
      }), setTimeout(() => {
        r("orderChange", l.value);
      }), b0();
    }
    function j() {
      N(1);
    }
    function V() {
      N(b.value);
    }
    function B() {
      const $ = o.value + 1;
      $ <= b.value && N($);
    }
    function E() {
      const $ = o.value - 1;
      $ > 0 && N($);
    }
    async function G($) {
      N($.id);
    }
    async function N($) {
      t.query.page != $ && (o.value = $, s.replace({
        path: t.path,
        query: { ...t.query, page: o.value, offset: m.value, limit: u.value }
      }), setTimeout(() => {
        r("pageChange", $), b0();
      }));
    }
    function h0($) {
      t.query.limit != $ && (u.value = $, s.push({
        path: t.path,
        query: { ...t.query, limit: u.value }
      }), setTimeout(() => {
        r("limitChange", u);
      }), b0());
    }
    function b0() {
      setTimeout(() => {
        r("filterChange", { ordering: l.value, page: o.value, offset: m.value, limit: u.value, ...d.value });
      });
    }
    return g0(async () => {
      const $ = await n();
      l.value = $.ordering;
      for (const Z of L.value) {
        const i0 = $[Z.key];
        i0 && (d.value[Z.key] = i0);
      }
      a.paginated && (u.value = Number($.limit) || 50, o.value = Number($.page) || 1, v = M[String($.page) || "1"] || { id: "1", value: "1" }, N(o.value));
    }), ($, Z) => {
      const i0 = R("NiceIcon"), o0 = R("nice-icon"), k0 = R("router-link"), x0 = R("NiceNoData"), L0 = R("NiceDropdown");
      return h(), f("div", l6, [
        p("div", i6, [
          p("table", o6, [
            p("thead", null, [
              p("tr", null, [
                a.selectMultiple ? (h(), f("th", r6, [
                  O(R0, {
                    modelValue: g.value,
                    "no-margin": "",
                    onClick: P
                  }, null, 8, ["modelValue"])
                ])) : y("", !0),
                (h(!0), f(t0, null, n0(L.value, (C) => (h(), f("th", {
                  key: C.key,
                  class: q([C.class, "nice-table-th-wrapper"])
                }, [
                  C.hasOrder ? (h(), f("div", u6, [
                    p("div", {
                      class: q(["nice-table-th", {
                        "active asc": l.value == C.key,
                        "active desc": l.value == "-" + C.key
                      }]),
                      onClick: (z) => D(C)
                    }, [
                      p("span", null, k(C.name), 1),
                      O(i0, {
                        icon: "icon-bar-chart",
                        class: "table-order"
                      })
                    ], 10, d6)
                  ])) : (h(), f("span", h6, k(C.name), 1)),
                  C.hasSearch ? (h(), f("div", {
                    key: 2,
                    class: q(["nice-table-th-search", { visible: d.value[C.key] }])
                  }, [
                    _0(p("input", {
                      placeholder: C.name,
                      "onUpdate:modelValue": (z) => d.value[C.key] = z,
                      onInput: Q
                    }, null, 40, v6), [
                      [J0, d.value[C.key]]
                    ]),
                    d.value[C.key] ? (h(), f("button", {
                      key: 0,
                      title: "Clear",
                      type: "button",
                      class: "btn btn-default btn-naked",
                      onClick: (z) => F(C)
                    }, [
                      O(o0, { icon: "icon-x" })
                    ], 8, m6)) : y("", !0),
                    C.hasOrder ? (h(), f("button", {
                      key: 1,
                      title: "Order",
                      type: "button",
                      class: "btn btn-default btn-naked",
                      onClick: (z) => D(C)
                    }, [
                      l.value != C.key && l.value != "-" + C.key ? (h(), I(o0, {
                        key: 0,
                        icon: "icon-filter"
                      })) : y("", !0),
                      l.value == C.key ? (h(), I(o0, {
                        key: 1,
                        class: "asc",
                        icon: "icon-bar-chart"
                      })) : y("", !0),
                      l.value == "-" + C.key ? (h(), I(o0, {
                        key: 2,
                        class: "desc",
                        icon: "icon-bar-chart"
                      })) : y("", !0)
                    ], 8, f6)) : y("", !0),
                    d.value[C.key] ? y("", !0) : (h(), I(o0, {
                      key: 2,
                      class: "nice-table-th-input-icon",
                      icon: "icon-search"
                    }))
                  ], 2)) : y("", !0)
                ], 2))), 128)),
                a.actions.length ? (h(), f("th", {
                  key: 1,
                  class: q(["actions-td w-0", { "freeze-column-right": a.freezeLastColumn }])
                }, [
                  !a.showToggleColumns && !a.showFooter && S.value && S.value.length ? (h(), f("span", p6, [
                    p("span", null, k(S.value.length), 1),
                    S.value._metadata ? (h(), f("span", y6, " / " + k(S.value._metadata.count), 1)) : y("", !0)
                  ])) : y("", !0),
                  a.showToggleColumns ? (h(), I(t1, {
                    key: 1,
                    class: "actions-columns",
                    placement: "bottom-end",
                    "no-padding": ""
                  }, {
                    trigger: c0(() => [
                      O(i0, { icon: "icon-plus-circle" })
                    ]),
                    content: c0(() => [
                      p("div", g6, [
                        (h(!0), f(t0, null, n0(x.value, (C) => (h(), f("div", {
                          class: "element",
                          key: C.key,
                          onClick: (z) => U(C)
                        }, [
                          O(R0, {
                            modelValue: !C.disabled,
                            title: C.name,
                            "no-margin": ""
                          }, null, 8, ["modelValue", "title"])
                        ], 8, b6))), 128))
                      ])
                    ]),
                    _: 1
                  })) : y("", !0)
                ], 2)) : y("", !0)
              ])
            ]),
            S.value && S.value.length ? (h(), f("tbody", M6, [
              (h(!0), f(t0, null, n0(S.value, (C) => (h(), f("tr", {
                key: C.id
              }, [
                a.selectMultiple ? (h(), f("td", z6, [
                  O(R0, {
                    modelValue: C._selected,
                    onClick: (z) => W(C),
                    "no-margin": ""
                  }, null, 8, ["modelValue", "onClick"])
                ])) : y("", !0),
                (h(!0), f(t0, null, n0(L.value, (z) => {
                  var V0, A0;
                  return h(), f("td", {
                    key: z.key,
                    class: q(z.class)
                  }, [
                    z.component ? (h(), I(X0((V0 = z.component()) == null ? void 0 : V0.instance), i2({
                      key: 0,
                      ref_for: !0
                    }, (A0 = z.component(C[z.key], C)) == null ? void 0 : A0.props), null, 16)) : y("", !0),
                    !z.component && z.html ? (h(), f("span", {
                      key: 1,
                      innerHTML: z.html(C[z.key], C)
                    }, null, 8, w6)) : y("", !0),
                    !z.component && !z.html ? (h(), f("span", {
                      key: 2,
                      class: q(z.fieldClass ? z.fieldClass(C[z.key], C) : "")
                    }, k(z.formatter ? z.formatter(C[z.key], C) : C[z.key]), 3)) : y("", !0)
                  ], 2);
                }), 128)),
                a.actions.length ? (h(), f("td", {
                  key: 1,
                  class: q(["actions-td", { "freeze-column-right": a.freezeLastColumn }])
                }, [
                  p("div", x6, [
                    (h(!0), f(t0, null, n0(a.actions, (z) => (h(), f(t0, { key: z }, [
                      w(z) == "router-link" && !(z.hidden && z.hidden(C)) ? (h(), I(k0, {
                        key: 0,
                        disabled: z.disabled && z.disabled(C),
                        to: z.to && z.to(C)
                      }, {
                        default: c0(() => [
                          z.hidden && z.hidden(C) ? y("", !0) : (h(), I(v0, {
                            key: 0,
                            icon: z.icon && z.icon(C),
                            type: z.type && z.type(C),
                            text: z.text && z.text(C).toString(),
                            plain: z.plain && z.plain(C),
                            loading: z.loading && z.loading(C),
                            disabled: z.disabled && z.disabled(C),
                            title: z.title && z.title(C),
                            onClick: (V0) => z.function && z.function(C),
                            size: "small"
                          }, null, 8, ["icon", "type", "text", "plain", "loading", "disabled", "title", "onClick"]))
                        ]),
                        _: 2
                      }, 1032, ["disabled", "to"])) : y("", !0),
                      z.hidden && z.hidden(C) ? y("", !0) : (h(), I(X0(w(z) != "router-link" && w(z)), {
                        key: 1,
                        disabled: z.disabled && z.disabled(C),
                        href: z.href && z.href(C),
                        target: z.href ? "blank" : null
                      }, {
                        default: c0(() => [
                          z.hidden && z.hidden(C) ? y("", !0) : (h(), I(v0, {
                            key: 0,
                            icon: z.icon && z.icon(C),
                            type: z.type && z.type(C),
                            text: z.text && z.text(C).toString(),
                            plain: z.plain && z.plain(C),
                            loading: z.loading && z.loading(C),
                            disabled: z.disabled && z.disabled(C),
                            title: z.title && z.title(C),
                            onClick: (V0) => z.function && z.function(C),
                            size: "small"
                          }, null, 8, ["icon", "type", "text", "plain", "loading", "disabled", "title", "onClick"]))
                        ]),
                        _: 2
                      }, 1032, ["disabled", "href", "target"]))
                    ], 64))), 128))
                  ])
                ], 2)) : y("", !0)
              ]))), 128))
            ])) : y("", !0)
          ])
        ]),
        S.value && !S.value.length && e.loading ? (h(), I(d1, {
          key: 0,
          class: "nice-table-loading"
        })) : y("", !0),
        !e.loading && a.data.length == 0 ? (h(), I(x0, { key: 1 })) : y("", !0),
        a.showFooter ? (h(), f("div", C6, [
          e.loading ? (h(), I(d1, {
            key: 0,
            class: "nice-table-footer-loading"
          })) : y("", !0),
          p("div", k6, k(_.value) + " " + k($.$t("Nice", "total")), 1),
          Z[2] || (Z[2] = p("div", { class: "f-grow" }, null, -1)),
          a.paginated && b.value > 1 && b.value <= 5 ? (h(), f("div", B6, [
            O(v0, {
              title: $.$t("Nice", "First page"),
              size: "small",
              onClick: j,
              plain: "",
              icon: "icon-chevrons-left"
            }, null, 8, ["title"]),
            O(v0, {
              title: $.$t("Nice", "Previous page"),
              size: "small",
              onClick: E,
              plain: "",
              icon: "icon-chevron-left"
            }, null, 8, ["title"]),
            (h(!0), f(t0, null, n0(b.value, (C) => (h(), I(v0, {
              size: "small",
              plain: o.value !== C,
              key: C,
              class: q(o.value === C ? "active" : ""),
              onClick: (z) => N(C)
            }, {
              default: c0(() => [
                y0(k(C), 1)
              ]),
              _: 2
            }, 1032, ["plain", "class", "onClick"]))), 128)),
            O(v0, {
              title: $.$t("Nice", "Next page"),
              size: "small",
              onClick: B,
              plain: "",
              icon: "icon-chevron-right"
            }, null, 8, ["title"]),
            O(v0, {
              title: $.$t("Nice", "Last page"),
              size: "small",
              onClick: V,
              plain: "",
              icon: "icon-chevrons-right"
            }, null, 8, ["title"])
          ])) : y("", !0),
          a.paginated && b.value > 1 && b.value > 5 ? (h(), f("div", _6, [
            O(L0, {
              nativeTitle: $.$t("Nice", "Page"),
              modelValue: K(v),
              "onUpdate:modelValue": Z[0] || (Z[0] = (C) => q2(v) ? v.value = C : v = C),
              values: M.value,
              noMargin: "",
              onChange: G
            }, null, 8, ["nativeTitle", "modelValue", "values"])
          ])) : y("", !0),
          a.showLimit ? (h(), I(L0, {
            key: 3,
            nativeTitle: $.$t("Nice", "Limit"),
            modelValue: u.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (C) => u.value = C),
            values: i,
            keyOnly: "",
            noMargin: "",
            onChange: h0
          }, null, 8, ["nativeTitle", "modelValue"])) : y("", !0)
        ])) : y("", !0)
      ]);
    };
  }
}), S6 = /* @__PURE__ */ s0($6, [["__scopeId", "data-v-4e970da8"]]);
const O6 = { class: "input-group" }, D6 = {
  key: 0,
  class: "input-group-suffix"
}, T6 = ["placeholder", "autocomplete", "type", "rows", "disabled"], L6 = {
  key: 1,
  class: "input-group-append input-group-icon"
}, V6 = {
  key: 2,
  class: "input-group-append"
}, F6 = {
  key: 0,
  class: "nice-component-message"
}, P6 = {
  name: "NiceTextarea"
}, q6 = Object.assign(P6, {
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
    const t = e, s = c, n = e0({
      get() {
        return t.modelValue;
      },
      set(a) {
        s("update:modelValue", a), s("change", a);
      }
    });
    return (a, r) => {
      const l = R("NiceComponentHeader");
      return h(), f("div", {
        class: q(["nice-component nice-textarea", { "no-margin": e.noMargin, active: n.value, disabled: e.disabled }])
      }, [
        O(l, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        p("div", O6, [
          a.$slots.suffix ? (h(), f("div", D6, [
            X(a.$slots, "suffix", {}, void 0, !0)
          ])) : y("", !0),
          _0(p("textarea", {
            "onUpdate:modelValue": r[0] || (r[0] = (u) => n.value = u),
            placeholder: e.placeholder,
            autocomplete: e.autocomplete,
            type: e.type,
            rows: e.rows,
            disabled: e.disabled
          }, null, 8, T6), [
            [J0, n.value]
          ]),
          e.icon ? (h(), f("div", L6, [
            O(D1, { icon: e.icon }, null, 8, ["icon"])
          ])) : y("", !0),
          a.$slots.append ? (h(), f("div", V6, [
            X(a.$slots, "append", {}, void 0, !0)
          ])) : y("", !0)
        ]),
        e.message ? (h(), f("div", F6, k(e.message), 1)) : y("", !0)
      ], 2);
    };
  }
}), E6 = /* @__PURE__ */ s0(q6, [["__scopeId", "data-v-e6aa932a"]]);
const W6 = { class: "nice-toasts" }, I6 = {
  name: "NiceToast"
}, A6 = Object.assign(I6, {
  setup(e) {
    const t = Y([]), s = l0("nice");
    g0(() => {
      s.onToast(({ message: r, type: l }) => {
        n(r, l);
      });
    });
    function n(r, l) {
      const u = {
        id: Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10),
        message: r,
        type: l
      };
      t.value.unshift(u), setTimeout(() => {
        a(u);
      }, 3e3);
    }
    function a(r) {
      const l = t.value.findIndex((u) => u.id == r.id);
      l >= 0 && t.value.splice(l, 1);
    }
    return (r, l) => (h(), f("div", W6, [
      O(o2, {
        name: "toast",
        key: "div"
      }, {
        default: c0(() => [
          (h(!0), f(t0, null, n0(t.value, (u) => (h(), f("div", {
            class: q(["nice-toast", ["nice-toast-" + u.type]]),
            key: u.id
          }, k(u.message), 3))), 128))
        ]),
        _: 1
      })
    ]));
  }
}), Y6 = /* @__PURE__ */ s0(A6, [["__scopeId", "data-v-e3d891a3"]]);
const H6 = {
  name: "NiceUpload",
  components: {
    NiceComponentHeader: N0
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
    loading: {
      type: Boolean,
      default: !1
    },
    error: [Object, String, null]
  },
  emits: ["change", "update:modelValue"],
  data() {
    return {
      file: null,
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
    localValueType() {
      if (!this.localValue)
        return "None";
      try {
        if (this.localValue instanceof FileList)
          return "FileList";
        if (this.localValue instanceof File)
          return "File";
        if (typeof this.localValue == "string")
          try {
            return new URL(this.localValue), this.localValue.includes(".png") || this.localValue.includes(".jpg") ? "image" : "string";
          } catch (e) {
            return console.log(e), "string";
          }
        return this.localValue ? typeof this.localValue : null;
      } catch {
        return "None";
      }
    },
    errorMessage() {
      if (typeof this.error == "string")
        return this.error;
      const e = _2(this.error, ["response", "data", this.prop]);
      return typeof e == "object" ? e.join("-") : e;
    }
  },
  methods: {
    fileChanged(e) {
      this.isDragging = !1, this.isOnTarget = !1, this.localValue = e.target.files, this.file = null;
    },
    dragChanged(e) {
      this.isOnTarget = e.type == "dragover";
    },
    clear() {
      this.localValue = null, this.file = null, this.$refs.inputFile && (this.$refs.inputFile.value = null);
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
}, j6 = ["modelValue", "placeholder", "required", "accept", "disabled"], R6 = {
  key: 0,
  class: "nice-upload-overlay"
}, U6 = { class: "nice-upload-overlay-message" }, Z6 = {
  key: 1,
  class: "nice-upload-overlay"
}, X6 = {
  key: 2,
  class: "nice-upload-overlay"
}, Q6 = { class: "nice-upload-overlay-message" }, G6 = {
  key: 3,
  class: "nice-upload-overlay"
}, J6 = ["src"], K6 = {
  key: 4,
  class: "nice-upload-overlay"
}, e9 = ["src"], t9 = { class: "nice-upload-overlay-message" }, c9 = ["disabled"];
function s9(e, c, t, s, n, a) {
  const r = R("NiceComponentHeader"), l = R("NiceIcon"), u = R("NiceLoading");
  return h(), f("div", {
    class: q(["nice-component nice-upload", { "no-margin": t.noMargin, active: a.localValue, disabled: t.disabled }])
  }, [
    O(r, {
      title: t.title,
      required: t.required,
      caption: t.caption
    }, null, 8, ["title", "required", "caption"]),
    p("div", {
      class: q(["input-group", { dragging: n.isDragging, "on-target": n.isOnTarget }]),
      onDragenter: c[2] || (c[2] = (...i) => a.dragChanged && a.dragChanged(...i)),
      onDragleave: c[3] || (c[3] = (...i) => a.dragChanged && a.dragChanged(...i)),
      onDragover: c[4] || (c[4] = (...i) => a.dragChanged && a.dragChanged(...i)),
      onDragend: c[5] || (c[5] = (...i) => a.dragChanged && a.dragChanged(...i)),
      onDrop: c[6] || (c[6] = (...i) => a.dragChanged && a.dragChanged(...i))
    }, [
      p("input", {
        ref: "inputFile",
        modelValue: n.file,
        placeholder: t.placeholder,
        required: t.required,
        accept: t.accept,
        type: "file",
        onChange: c[0] || (c[0] = (...i) => a.fileChanged && a.fileChanged(...i)),
        disabled: t.disabled
      }, null, 40, j6),
      a.localValue ? y("", !0) : (h(), f("div", R6, [
        O(l, { icon: "icon-upload" }),
        p("div", U6, k(t.placeholder || e.$t("Nice", "Upload file")), 1)
      ])),
      a.localValue && a.localValueType == "FileList" ? (h(), f("div", Z6, [
        O(l, { icon: "icon-file" }),
        (h(!0), f(t0, null, n0(a.localValue, (i) => (h(), f("div", {
          class: "nice-upload-overlay-message",
          key: i.name
        }, k(i.name), 1))), 128))
      ])) : y("", !0),
      a.localValue && a.localValueType == "string" ? (h(), f("div", X6, [
        O(l, { icon: "icon-file" }),
        p("div", Q6, k(a.localValue), 1)
      ])) : y("", !0),
      a.localValue && a.localValueType == "image" ? (h(), f("div", G6, [
        p("img", {
          class: "nice-upload-overlay-image",
          src: a.localValue
        }, null, 8, J6)
      ])) : y("", !0),
      a.localValue && a.localValueType == "none" ? (h(), f("div", K6, [
        p("img", {
          class: "nice-upload-overlay-image",
          src: a.localValue
        }, null, 8, e9),
        p("div", t9, k(e.$t("Nice", "File selected")), 1)
      ])) : y("", !0),
      a.localValue ? (h(), f("button", {
        key: 5,
        type: "button",
        class: "nice-upload-button btn btn-white btn-plain",
        onClick: c[1] || (c[1] = (...i) => a.clear && a.clear(...i)),
        disabled: t.disabled
      }, [
        O(l, { icon: "icon-x" })
      ], 8, c9)) : y("", !0),
      t.loading ? (h(), I(u, {
        key: 6,
        "full-div": ""
      })) : y("", !0)
    ], 34)
  ], 2);
}
const n9 = /* @__PURE__ */ s0(H6, [["render", s9], ["__scopeId", "data-v-17f8d133"]]);
const a9 = {
  key: 0,
  class: "nice-view-header"
}, l9 = {
  key: 2,
  class: "view-title"
}, i9 = {
  key: 0,
  class: "view-title-above-title"
}, o9 = {
  key: 1,
  class: "view-title-title"
}, r9 = {
  key: 2,
  class: "view-title-sub-title"
}, u9 = {
  key: 1,
  class: "nice-view-footer"
}, d9 = {
  name: "NiceView"
}, h9 = Object.assign(d9, {
  props: {
    title: {
      type: String,
      required: !1
    },
    subTitle: {
      type: String,
      required: !1
    },
    aboveTitle: {
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
    const c = x1(), t = e, s = e0(() => c.title || t.title || c.subTitle || t.subTitle || c.aboveTitle || t.aboveTitle);
    return (n, a) => {
      const r = R("NiceIcon"), l = R("NiceLoading");
      return h(), I(X0(e.isForm ? "form" : "div"), {
        class: q(["nice-view", { "nice-view-no-header": !s.value, "nice-view-flex-body": e.flexBody }])
      }, {
        default: c0(() => [
          s.value || t.icon ? (h(), f("div", a9, [
            e.icon && !e.loading ? (h(), I(r, {
              key: 0,
              icon: e.icon,
              class: "view-header-icon"
            }, null, 8, ["icon"])) : y("", !0),
            e.loading ? (h(), I(l, {
              key: 1,
              class: "view-header-icon"
            })) : y("", !0),
            s.value ? (h(), f("div", l9, [
              e.aboveTitle || K(c).aboveTitle ? (h(), f("div", i9, [
                X(n.$slots, "aboveTitle", {}, () => [
                  y0(k(e.aboveTitle), 1)
                ], !0)
              ])) : y("", !0),
              e.title || K(c).title ? (h(), f("div", o9, [
                X(n.$slots, "title", {}, () => [
                  y0(k(e.title), 1)
                ], !0)
              ])) : y("", !0),
              e.subTitle || K(c).subTitle ? (h(), f("div", r9, [
                X(n.$slots, "subTitle", {}, () => [
                  y0(k(e.subTitle), 1)
                ], !0)
              ])) : y("", !0)
            ])) : y("", !0)
          ])) : y("", !0),
          p("div", {
            class: q(["nice-view-body", { "nice-view-body-flex": e.flexBody }])
          }, [
            X(n.$slots, "default", {}, void 0, !0)
          ], 2),
          K(c).footer ? (h(), f("div", u9, [
            X(n.$slots, "footer", {}, void 0, !0)
          ])) : y("", !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), v9 = /* @__PURE__ */ s0(h9, [["__scopeId", "data-v-0ca78f08"]]);
const m9 = {
  key: 0,
  class: "wrapper-header"
}, f9 = {
  key: 0,
  class: "wrapper-header-title-subtitle"
}, p9 = {
  key: 0,
  class: "wrapper-header-title"
}, y9 = {
  key: 1,
  class: "wrapper-header-subtitle"
}, g9 = {
  key: 2,
  class: "wrapper-footer"
}, b9 = {
  name: "NiceWrapper"
}, M9 = Object.assign(b9, {
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
    const t = Y(!e.collapsed);
    function s() {
      t.value = !t.value;
    }
    return (n, a) => (h(), f("div", {
      class: q(["nice-wrapper", { "no-margin": e.noMargin }])
    }, [
      n.$slots.header || e.title || e.subtitle || e.collapsable ? (h(), f("div", m9, [
        e.title || e.subtitle ? (h(), f("div", f9, [
          e.title ? (h(), f("div", p9, k(e.title), 1)) : y("", !0),
          e.subtitle ? (h(), f("div", y9, k(e.subtitle), 1)) : y("", !0)
        ])) : y("", !0),
        X(n.$slots, "header", {}, void 0, !0),
        a[0] || (a[0] = p("div", { class: "flex-grow" }, null, -1)),
        e.collapsable ? (h(), I(v0, {
          key: 1,
          class: q(["wrapper-header-chevron", { "rotate-180": !t.value }]),
          icon: "icon-chevron-down",
          naked: "",
          onClick: s
        }, null, 8, ["class"])) : y("", !0),
        e.collapsable ? (h(), f("div", {
          key: 2,
          class: "wrapper-header-toggler",
          onClick: s
        })) : y("", !0)
      ])) : y("", !0),
      t.value ? (h(), f("div", {
        key: 1,
        class: q(["wrapper-body", { "no-top-padding": n.$slots.header || e.title || e.subtitle, "no-padding": e.noBodyPadding }])
      }, [
        X(n.$slots, "default", {}, void 0, !0)
      ], 2)) : y("", !0),
      n.$slots.footer && t.value ? (h(), f("div", g9, [
        X(n.$slots, "footer", {}, void 0, !0)
      ])) : y("", !0)
    ], 2));
  }
}), z9 = /* @__PURE__ */ s0(M9, [["__scopeId", "data-v-82edbe78"]]);
const w9 = { class: "nice-no-data" }, x9 = { class: "nice-no-data-message" }, C9 = {
  name: "NiceNoData"
}, k9 = Object.assign(C9, {
  props: {
    message: String,
    icon: {
      type: String,
      default: "icon-alert-circle"
    }
  },
  setup(e) {
    const c = l0("$t"), t = e, s = Y(t.message || c("Nice", "No data"));
    return (n, a) => {
      const r = R("NiceIcon");
      return h(), f("div", w9, [
        O(r, {
          class: "nice-no-data-icon",
          icon: t.icon
        }, null, 8, ["icon"]),
        p("div", x9, k(s.value), 1)
      ]);
    };
  }
}), B9 = /* @__PURE__ */ s0(k9, [["__scopeId", "data-v-63c3abc0"]]);
const _9 = { class: "input-group" }, N9 = ["placeholder", "disabled", "required"], $9 = { class: "nice-date-range-dropdown" }, S9 = { class: "nice-date-range-buttons" }, O9 = {
  name: "NiceDateRange"
}, D9 = Object.assign(O9, {
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
    const t = e, s = l0("$t"), n = c, a = Y(null), r = Y(""), l = Y("d.M.yyyy"), u = [
      {
        name: s("Nice", "Today"),
        from: z1(/* @__PURE__ */ new Date()),
        to: G3(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "Yesterday"),
        from: s5(/* @__PURE__ */ new Date()),
        to: c7(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "This week"),
        from: I0(/* @__PURE__ */ new Date()),
        to: t7(/* @__PURE__ */ new Date())
      },
      {
        name: s("Nice", "This month"),
        from: K3(/* @__PURE__ */ new Date()),
        to: J3(/* @__PURE__ */ new Date())
      }
    ], i = Y(null), o = Y(null);
    g0(() => {
      t.time && (l.value = "d.M.yyyy HH:mm"), t.from && (i.value = t.from), t.to && (o.value = t.to), i.value || m(u[0]);
    });
    function d() {
    }
    function v() {
      if (t5(o.value, i.value)) {
        const M = i.value;
        i.value = o.value, o.value = M;
      }
      _();
    }
    function m(M) {
      i.value = M.from, o.value = M.to, _();
    }
    function _() {
      n("update:to", o.value), n("update:from", i.value), n("change", { from: i.value, to: o.value }), b();
    }
    function b() {
      r.value = a2(i.value, l.value) + " - " + a2(o.value, l.value);
    }
    return (M, x) => {
      const L = R("NiceIcon"), S = R("NiceButton"), T = R("NiceDate");
      return h(), f("div", {
        class: q(["nice-component nice-date-range", {
          disabled: e.disabled,
          "no-margin": e.noMargin
        }])
      }, [
        O(N0, {
          title: e.title,
          required: e.required,
          caption: e.caption
        }, null, 8, ["title", "required", "caption"]),
        O(t1, {
          "no-padding": "",
          placement: "bottom-start",
          ref_key: "popup",
          ref: a,
          class: "w-full",
          onChange: d
        }, {
          trigger: c0(() => [
            p("div", _9, [
              _0(p("input", {
                "onUpdate:modelValue": x[0] || (x[0] = (g) => r.value = g),
                placeholder: e.placeholder || K(s)("Nice", "None"),
                disabled: e.disabled,
                required: e.required,
                onBlur: x[1] || (x[1] = (...g) => M.inputChanged && M.inputChanged(...g))
              }, null, 40, N9), [
                [J0, r.value]
              ]),
              O(L, {
                class: "icon",
                icon: "icon-calendar"
              })
            ])
          ]),
          content: c0(() => [
            p("div", $9, [
              p("div", S9, [
                (h(), f(t0, null, n0(u, (g) => O(S, {
                  plain: "",
                  key: g.id,
                  onClick: (w) => m(g)
                }, {
                  default: c0(() => [
                    y0(k(g.name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])), 64))
              ]),
              O(T, {
                time: e.time,
                highlightTo: o.value,
                onChange: v,
                modelValue: i.value,
                "onUpdate:modelValue": x[2] || (x[2] = (g) => i.value = g),
                isInline: "",
                noMargin: ""
              }, null, 8, ["time", "highlightTo", "modelValue"]),
              O(T, {
                time: e.time,
                highlightTo: i.value,
                onChange: v,
                modelValue: o.value,
                "onUpdate:modelValue": x[3] || (x[3] = (g) => o.value = g),
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
}), T9 = /* @__PURE__ */ s0(D9, [["__scopeId", "data-v-f3fe5cee"]]);
const L9 = { class: "nice-alert-data" }, V9 = {
  key: 0,
  class: "nice-alert-title"
}, F9 = {
  key: 1,
  class: "nice-alert-message"
}, P9 = {
  name: "NiceAlert"
}, q9 = Object.assign(P9, {
  props: {
    title: String,
    message: String,
    inline: Boolean,
    alignCenter: Boolean,
    icon: {
      type: String,
      required: !1,
      default: null
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
          "info"
        ].includes(e);
      }
    }
  },
  setup(e) {
    return (c, t) => (h(), f("div", {
      class: q(["nice-alert", ["nice-alert-" + e.type, { "nice-alert-inline": e.inline, "nice-alert-align-center": e.alignCenter }]])
    }, [
      e.icon ? (h(), I(D1, {
        key: 0,
        icon: e.icon
      }, null, 8, ["icon"])) : y("", !0),
      p("div", L9, [
        e.title ? (h(), f("div", V9, k(e.title), 1)) : y("", !0),
        e.message ? (h(), f("div", F9, k(e.message), 1)) : y("", !0),
        X(c.$slots, "default")
      ])
    ], 2));
  }
}), l2 = {
  NiceActions: t4,
  NiceAvatar: x4,
  NiceButton: v0,
  NiceCheckbox: R0,
  NiceComponentHeader: N0,
  NiceConfirmModal: h2,
  NiceDate: F5,
  NiceDropdown: m8,
  NiceDropdownSimple: j5,
  NiceFilters: w8,
  NiceIcon: D1,
  NiceInput: L8,
  NiceLoading: d1,
  NiceModal: d2,
  NiceNotification: N2,
  NiceNotifications: Y8,
  NicePanel: j8,
  NicePopup: t1,
  NiceSlot: U8,
  NiceSvgs: J8,
  NiceSwitch: a6,
  NiceTable: S6,
  NiceTextarea: E6,
  NiceToast: Y6,
  NiceUpload: n9,
  NiceView: v9,
  NiceWrapper: z9,
  NiceNoData: B9,
  NiceDateRange: T9,
  NiceAlert: q9
}, E9 = (e, c) => {
  if (e.style.color = c.value, e.querySelector(".nice-tooltip"))
    return;
  const s = document.createElement("div");
  s.className = "nice-tooltip", s.textContent = c.value || e.getAttribute("nice-tooltip") || "", e.appendChild(s);
  const n = (r) => {
    s.style.display = "block";
  }, a = () => {
    s.style.display = "none";
  };
  e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", a);
};
const A9 = {
  install(e, c) {
    for (const r in l2) {
      const l = l2[r];
      e.component(l.name, l);
    }
    e.directive("niceTooltip", E9);
    const t = E2(), s = {
      debug: c ? c.debug : !1,
      emitter: t,
      // Notification
      onNotification: (r) => t.on("notification", r),
      notification: (r, l, u, i) => {
        t.emit("notification", { message: r, type: l, title: u, icon: i });
      },
      // Toast
      onToast: (r) => t.on("toast", r),
      toast: (r, l) => {
        t.emit("toast", { message: r, type: l });
      },
      // Panel
      onPanel: (r) => t.on("panel", r),
      panel: (r, l) => {
        t.emit("panel", { name: r, isOpen: l });
      },
      // Modal
      onModal: (r) => t.on("modal", r),
      modal: (r, l, u) => {
        t.emit("modal", { name: r, isOpen: l, event: u });
      }
    };
    e.config.globalProperties.$nice = s, e.provide("nice", s);
    async function n() {
      await c.router.isReady();
      const r = a(c.router.currentRoute.value.query);
      return delete r.id, r;
    }
    function a(r) {
      return Object.assign({}, r);
    }
    e.config.globalProperties.$query = n, e.provide("getQuery", n), e.config.globalProperties.$clone = a, e.provide("clone", a), e.config.globalProperties.$t = c.gettext.$pgettext, e.provide("$t", c.gettext.$pgettext);
  }
};
function Y9() {
  return l0("nice");
}
function H9() {
  return l0("getQuery");
}
function j9() {
  return l0("clone");
}
function R9() {
  return l0("$t");
}
export {
  A9 as default,
  H9 as getQuery,
  j9 as useClone,
  Y9 as useNice,
  R9 as useT
};
