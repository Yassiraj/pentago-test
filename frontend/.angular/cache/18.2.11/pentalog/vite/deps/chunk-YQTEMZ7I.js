import {
  TUI_NUMBER_FORMAT,
  tuiProvide
} from "./chunk-TJD5ECJX.js";
import {
  Directive,
  Input,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵdefineDirective
} from "./chunk-4P5RU55L.js";
import {
  Observable,
  ReplaySubject,
  __spreadValues,
  combineLatest,
  map
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-number-format.mjs
var TuiNumberFormat = class _TuiNumberFormat extends Observable {
  constructor() {
    super((subscriber) => combineLatest([this.parent, this.settings]).pipe(map(([parent, settings]) => __spreadValues(__spreadValues({}, parent), settings))).subscribe(subscriber));
    this.settings = new ReplaySubject(1);
    this.parent = inject(TUI_NUMBER_FORMAT, {
      skipSelf: true
    });
  }
  set tuiNumberFormat(format) {
    this.settings.next(format);
  }
  static {
    this.ɵfac = function TuiNumberFormat_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNumberFormat)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNumberFormat,
      selectors: [["", "tuiNumberFormat", ""]],
      inputs: {
        tuiNumberFormat: "tuiNumberFormat"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_NUMBER_FORMAT, _TuiNumberFormat)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNumberFormat, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNumberFormat]",
      providers: [tuiProvide(TUI_NUMBER_FORMAT, TuiNumberFormat)]
    }]
  }], function() {
    return [];
  }, {
    tuiNumberFormat: [{
      type: Input
    }]
  });
})();

export {
  TuiNumberFormat
};
//# sourceMappingURL=chunk-YQTEMZ7I.js.map
