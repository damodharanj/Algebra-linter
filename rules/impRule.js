"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var tslint_1 = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new FunctorWarning(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var FunctorReplace = /** @class */ (function (_super) {
    __extends(FunctorReplace, _super);
    function FunctorReplace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FunctorReplace;
}(tslint_1.Replacement));
// The walker takes care of all the work.
var FunctorWarning = /** @class */ (function (_super) {
    __extends(FunctorWarning, _super);
    function FunctorWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctorWarning.prototype.visitPropertyAccessExpression = function (n) {
        if (n.name.text === 'map' && n.expression.expression.name.text === 'map') {
            this.addFailureAtNode(n, 'Use composition instead', new FunctorReplace(n.name.pos, -10, 'Test string'));
        }
    };
    return FunctorWarning;
}(Lint.RuleWalker));
