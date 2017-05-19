module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [

    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "brace-style": 1, // enforce one true brace style (off by default)
        "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
        "no-spaced-func": 1, // disallow space between function identifier and application
        "semi-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after semicolons
        "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
        "curly": 2, // specify curly brace conventions for all control statements
        "no-multi-spaces": 2, // disallow use of multiple spaces
        "no-unused-vars": "warn",
        "camelcase": 1, // require camel case names
        "comma-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after comma
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}], // enforces spacing between keys and values in object literal properties
        "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
        "no-multiple-empty-lines": [1, {"max": 2}], // disallow multiple empty lines (off by default)
        "no-nested-ternary": 1, // disallow nested ternary expressions (off by default)
        "no-trailing-spaces": 1, // disallow trailing whitespace at the end of lines
        "keyword-spacing": ["error"], // require a space after certain keywords (off by default)
        "space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
        "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], // require or disallow space before function opening parenthesis (off by default)
        "array-bracket-spacing": [1, "always"],
        "object-curly-spacing": [0, "never"],
        "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)
        "spaced-comment": [1, "always"], // require or disallow a space immediately following the // in a line comment (off by default)
        "no-var": 2, // require let or const instead of var (off by default)
        "max-len": [2, 100, 2], // specify the maximum length of a line in your program (off by default)
        "no-console": "error"
    }
};