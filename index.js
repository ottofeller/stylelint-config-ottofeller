module.exports = {
  "latest audited version (unicode-bom property removed for compatibility reasons)": "11.1.1",

  "ignoreFiles": [
    "bower_components",
    "node_modules",
    "**/*.html",
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx"
  ],

  "plugins": [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-order",
  ],

  "rules": {
    "at-rule-blacklist": null,
    "at-rule-empty-line-before": "never",
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": null,
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,

    "at-rule-property-requirelist": {
      "font-face": ["font-display", "font-family", "font-weight", "font-style", "src"],
    },

    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",

    "at-rule-whitelist": [
      "keyframes",
      "media",
      "supports",
    ],

    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-closing-brace-space-after": "never-single-line",
    "block-closing-brace-space-before": "never-single-line",
    "block-no-empty": null,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "never-single-line",
    "block-opening-brace-space-after": "never-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-hex": true,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": "never",
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "comment-word-blacklist": null,
    "custom-media-pattern": "^[mptl](-m(in|ax))?$",
    "custom-property-empty-line-before": "never",
    "custom-property-pattern": null,
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": [true, {ignoreShorthands: ["grid-template"]}],
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": null,
    "declaration-block-semicolon-space-after": "never-single-line",
    "declaration-block-semicolon-space-before": "never-single-line",
    "declaration-block-single-line-max-declarations": 0,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": "never",
    "declaration-no-important": null,
    "declaration-property-unit-blacklist": null,

    "declaration-property-unit-whitelist": {
      "/^animation/": ["s"],
      "/^transition/": ["s"],
    },

    "declaration-property-value-blacklist": null,
    "declaration-property-value-whitelist": null,
    "font-family-name-quotes": "always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "font-weight-notation": ["numeric", {ignore: ["relative"]}],
    "function-blacklist": null,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-url-scheme-blacklist": null,
    "function-url-scheme-whitelist": null,

    "function-whitelist": [
      "attr",
      "calc",
      "drop-shadow",
      "hsl",
      "linear-gradient",
      "minmax",
      "radial-gradient",
      "rect",
      "repeat-linear-gradient",
      "repeat-radial-gradient",
      "repeat",
      "rotate",
      "rotateX",
      "rotateY",
      "scale",
      "scaleX",
      "scaleY",
      "translate",
      "translateX",
      "translateY",
      "url",
      "var",
    ],

    "function-whitespace-after": "always",
    "indentation": [2, {"baseIndentLevel": 0, "indentClosingBrace": false}],
    "keyframe-declaration-no-important": true,
    "keyframes-name-pattern": null,
    "length-zero-no-unit": true,
    "linebreaks": "unix",
    "max-empty-lines": 1,
    "max-line-length": null,
    "max-nesting-depth": null,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-blacklist": null,
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-value-whitelist": null,

    "media-feature-name-whitelist": [
      "pointer",
    ],

    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "never-multi-line",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-first-line": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "never",
    "number-max-precision": 8,
    "number-no-trailing-zeros": true,

    "order/order": [
      "custom-properties",
      "declarations",
      "rules",
      "at-rules",
    ],

    "order/properties-order": [
      [
        "all",
        "content",
        "counter-reset",
        "counter-increment",
        "page-break-inside",
        "appearance",
        "resize",
        "box-sizing",
        "vertical-align",
        "order",
        "visibility",
        "grid-area",
        "grid-column",
        "grid-row",
        "flex-basis",
        "flex-shrink",
        "flex-grow",
        "justify-self",
        "align-self",
        "overflow",
        "scroll-behavior",
        "scroll-snap-type",
        "scroll-snap-stop",
        "scroll-snap-align",
        "scrollbar-width",
        "position",
        "z-index",
        "left",
        "right",
        "top",
        "bottom",
        "display",
        "list-style",
        "list-style-type",
        "list-style-image",
        "list-style-position",
        "gap",
        "row-gap",
        "column-gap",
        "grid-template-columns",
        "grid-template-rows",
        "grid-template-areas",
        "grid-auto-flow",
        "grid-auto-columns",
        "grid-auto-rows",
        "flex-direction",
        "flex-wrap",
        "place-items",
        "place-content",
        "justify-items",
        "justify-content",
        "align-items",
        "align-content",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "border-collapse",
        "border-spacing",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-left",
        "border-right",
        "border-top",
        "border-bottom",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "margin",
        "margin-left",
        "margin-right",
        "margin-top",
        "margin-bottom",
        "padding",
        "padding-left",
        "padding-right",
        "padding-top",
        "padding-bottom",
        "line-height",
        "font-size",
        "font-weight",
        "font-style",
        "font-family",
        "font-variant-numeric",
        "text-indent",
        "text-align",
        "text-transform",
        "text-decoration",
        "text-decoration-line",
        "text-decoration-color",
        "word-break",
        "white-space",
        "text-overflow",
        "letter-spacing",
        "word-wrap",
        "color",
        "object-fit",
        "object-position",
        "background",
        "background-color",
        "background-clip",
        "background-image",
        "background-size",
        "background-position",
        "background-repeat",
        "background-origin",
        "fill",
        "mask",
        "mask-clip",
        "mask-image",
        "mask-size",
        "mask-position",
        "mask-repeat",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "box-shadow",
        "clip-path",
        "filter",
        "mix-blend-mode",
        "transform-origin",
        "transform",
        "opacity",
        "transition",
        "transition-property",
        "transition-duration",
        "transition-timing-function",
        "transition-delay",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-direction",
        "animation-play-state",
        "animation-timing-function",
        "cursor",
        "user-select",
        "pointer-events",
        "contain",
      ],

      {"unspecified": "top"}
    ],

    "plugin/declaration-block-no-ignored-properties": true,
    "property-blacklist": null,
    "property-case": "lower",
    "property-no-unknown": [true, {"checkPrefixed": true}],

    "property-no-vendor-prefix": [
      true,

      {
        "ignoreProperties": [
          "appearance",
          "background-clip",
          "print-color-adjust",
        ]
      }
    ],

    "property-whitelist": [
      "all",
      "content",
      "counter-reset",
      "counter-increment",
      "page-break-inside",
      "appearance",
      "resize",
      "box-sizing",
      "vertical-align",
      "order",
      "visibility",
      "grid-area",
      "grid-column",
      "grid-row",
      "flex-basis",
      "flex-shrink",
      "flex-grow",
      "justify-self",
      "align-self",
      "overflow",
      "scroll-behavior",
      "scroll-snap-type",
      "scroll-snap-stop",
      "scroll-snap-align",
      "scrollbar-width",
      "position",
      "z-index",
      "left",
      "right",
      "top",
      "bottom",
      "display",
      "list-style",
      "list-style-type",
      "list-style-image",
      "list-style-position",
      "gap",
      "row-gap",
      "column-gap",
      "grid-template-columns",
      "grid-template-rows",
      "grid-template-areas",
      "grid-auto-flow",
      "grid-auto-columns",
      "grid-auto-rows",
      "flex-direction",
      "flex-wrap",
      "place-items",
      "place-content",
      "justify-items",
      "justify-content",
      "align-items",
      "align-content",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "border-collapse",
      "border-spacing",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-left",
      "border-right",
      "border-top",
      "border-bottom",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "line-height",
      "font-size",
      "font-weight",
      "font-style",
      "font-family",
      "font-variant-numeric",
      "text-indent",
      "text-align",
      "text-transform",
      "text-decoration",
      "text-decoration-line",
      "text-decoration-color",
      "word-break",
      "white-space",
      "text-overflow",
      "letter-spacing",
      "word-wrap",
      "color",
      "object-fit",
      "object-position",
      "background",
      "background-color",
      "background-clip",
      "background-image",
      "background-size",
      "background-position",
      "background-repeat",
      "background-origin",
      "fill",
      "mask",
      "mask-clip",
      "mask-image",
      "mask-size",
      "mask-position",
      "mask-repeat",
      "border-radius",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "box-shadow",
      "clip-path",
      "filter",
      "mix-blend-mode",
      "transform-origin",
      "transform",
      "opacity",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-direction",
      "animation-play-state",
      "animation-timing-function",
      "cursor",
      "user-select",
      "pointer-events",
      "contain",
    ],

    "rule-empty-line-before": "never",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-blacklist": null,
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",

    "selector-attribute-operator-whitelist": [
      "*=",
      "^=",
      "=",
      "|=",
      "~=",
      "$=",
    ],

    "selector-attribute-quotes": "always",
    "selector-class-pattern": null,
    "selector-combinator-blacklist": null,
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",

    "selector-combinator-whitelist": [
      ">",
      "+",
      "~",
    ],

    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": null,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-after": "never-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 0,
    "selector-max-class": 12,
    "selector-max-combinators": 12,
    "selector-max-compound-selectors": 12,
    "selector-max-empty-lines": 0,
    "selector-max-id": 0,
    "selector-max-pseudo-class": 5,
    "selector-max-specificity": "0,12,0",
    "selector-max-type": 0,
    "selector-max-universal": 0,
    "selector-nested-pattern": "^&(?: > )?(?:(?:::?[a-z-]+(?:\\([^)]+\\))?)|(?:\\.?[a-z-]+))",
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": null,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": [true, {ignorePseudoClasses: ["global", "local"]}],
    "selector-pseudo-class-parentheses-space-inside": "never",

    "selector-pseudo-class-whitelist": [
      "active",
      "autofill",
      "checked",
      "disabled",
      "empty",
      "/^focus(-within)?$/",
      "global",
      "hover",
      "local",
      "matches",
      "not",
      "/^(?:nth(?:-last)?|only)-(?:child|of-type)$/",
      "root",
    ],

    "selector-pseudo-element-blacklist": null,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-element-no-unknown": true,

    "selector-pseudo-element-whitelist": [
      "after",
      "before",
      "first-letter",
      "placeholder",
      "scrollbar",
    ],

    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": ["double", {"avoidEscape": true}],
    "time-min-milliseconds": 200,
    "unit-blacklist": null,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "unit-whitelist": null,
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": [true, {"ignoreValues": ["fill-available"]}],
  }
}
