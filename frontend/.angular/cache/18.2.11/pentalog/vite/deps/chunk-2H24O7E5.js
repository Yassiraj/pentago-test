import {
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DROPDOWN_COMPONENT,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_HINT_OPTIONS,
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TuiDropdownDirective,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintHover,
  TuiTextfieldComponent,
  TuiWithAppearance,
  tuiAppearanceOptionsProvider,
  tuiAppearanceState,
  tuiControlValue,
  tuiCreateOptions,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiExtractI18n,
  tuiInjectElement,
  tuiProvide,
  tuiProvideOptions,
  tuiWatch,
  tuiWithStyles
} from "./chunk-TJD5ECJX.js";
import {
  NgControl
} from "./chunk-RMQQVHNY.js";
import {
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Input,
  Optional,
  Self,
  ViewEncapsulation$1,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵlistener
} from "./chunk-4P5RU55L.js";
import {
  map,
  of
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-chevron.mjs
var TUI_CHEVRON = tuiCreateToken("@tui.chevron-down");
var TuiChevronStyles = class _TuiChevronStyles {
  static {
    this.ɵfac = function TuiChevronStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevronStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChevronStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chevron"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiChevronStyles_Template(rf, ctx) {
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevronStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chevron"
      },
      styles: ["[tuiChevron][tuiIcons]:after,tui-icon[tuiChevron]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:inline-block;cursor:pointer}[tuiChevron][tuiIcons]:after{block-size:1rem}[tuiChevron][tuiIcons]._chevron-rotated:after,tui-icon[tuiChevron]._chevron-rotated:after{transform:rotate(180deg)}\n"]
    }]
  }], null, null);
})();
var TuiChevron = class _TuiChevron {
  constructor() {
    this.el = tuiInjectElement();
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.nothing = tuiWithStyles(TuiChevronStyles);
    this.toggle = effect(() => this.el.classList.toggle("_chevron-rotated", this.chevron() || this.chevron() === "" && !!this.dropdown?.ref()));
    this.chevron = signal("");
  }
  set tuiChevron(chevron) {
    this.chevron.set(chevron);
  }
  static {
    this.ɵfac = function TuiChevron_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChevron)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChevron,
      selectors: [["", "tuiChevron", ""]],
      hostAttrs: ["tuiChevron", ""],
      inputs: {
        tuiChevron: "tuiChevron"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_ICON_END, TUI_CHEVRON)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChevron, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiChevron]",
      providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
      host: {
        tuiChevron: ""
      }
    }]
  }], null, {
    tuiChevron: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-tokens.mjs
var TUI_CALENDAR_DATE_STREAM = tuiCreateToken();
function tuiDateStreamWithTransformer(transformer) {
  return {
    provide: TUI_CALENDAR_DATE_STREAM,
    deps: [[new Optional(), new Self(), NgControl], [new Optional(), transformer]],
    useFactory: tuiControlValueFactory
  };
}
function tuiControlValueFactory(control, transformer) {
  return control ? tuiControlValue(control).pipe(map((value) => transformer ? transformer?.fromControlValue(value) : value)) : of(null);
}
var TUI_DATE_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_DATE_RANGE_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_DATE_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_TIME_VALUE_TRANSFORMER = tuiCreateToken();
var TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n("confirm"));
var TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("cancel"));
var TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("done"));
var TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("more"));
var TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("hide"));
var TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("showAll"));
var TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n("otherDate"));
var TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("mobileCalendarTexts"));
var TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("range"));
var TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("countTexts"));
var TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("time"));
var TUI_DATE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("dateTexts"));
var TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(tuiExtractI18n("digitalInformationUnits"));
var TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("copyTexts"));
var TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("passwordTexts"));
var TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("shortCalendarMonths"));
var TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("fileTexts"));
var TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("pagination"));
var TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("inputFileTexts"));
var TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("multiSelectTexts"));
var TUI_COUNTRIES = tuiCreateTokenFromFactory(tuiExtractI18n("countries"));
var TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("previewTexts"));
var TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("zoomTexts"));
var TUI_INTERNATIONAL_SEARCH = tuiCreateTokenFromFactory(tuiExtractI18n("phoneSearch"));
var TUI_INPUT_DATE_DEFAULT_OPTIONS = {
  icon: () => "@tui.calendar",
  min: TUI_FIRST_DAY,
  max: TUI_LAST_DAY,
  nativePicker: false
};
var TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);
function tuiInputDateOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_DATE_OPTIONS, options, TUI_INPUT_DATE_DEFAULT_OPTIONS);
}
var TUI_DEFAULT_ITEMS_HANDLERS = {
  stringify: String,
  identityMatcher: TUI_DEFAULT_IDENTITY_MATCHER,
  disabledItemHandler: TUI_FALSE_HANDLER
};
var TUI_ITEMS_HANDLERS = tuiCreateToken(TUI_DEFAULT_ITEMS_HANDLERS);
function tuiItemsHandlersProvider(options) {
  return tuiProvideOptions(TUI_ITEMS_HANDLERS, options, TUI_DEFAULT_ITEMS_HANDLERS);
}
var TUI_MOBILE_CALENDAR = tuiCreateToken();
var TUI_MOBILE_CALENDAR_PROVIDER = {
  provide: TUI_DROPDOWN_COMPONENT,
  useFactory: () => inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {
    optional: true
  }) || inject(TUI_DROPDOWN_COMPONENT, {
    skipSelf: true
  })
};
var TUI_PREVIEW_ICONS_DEFAULT = {
  rotate: "@tui.rotate-ccw-square",
  prev: "@tui.arrow-left",
  next: "@tui.arrow-right",
  zoomIn: "@tui.plus",
  zoomOut: "@tui.minus",
  zoomReset: "@tui.minimize"
};
var TUI_PREVIEW_ICONS = tuiCreateToken(TUI_PREVIEW_ICONS_DEFAULT);
function tuiPreviewIconsProvider(icons) {
  return tuiProvideOptions(TUI_PREVIEW_ICONS, icons, TUI_PREVIEW_ICONS_DEFAULT);
}
var TUI_VALIDATION_ERRORS = tuiCreateToken({});
var tuiValidationErrorsProvider = (useValue) => ({
  provide: TUI_VALIDATION_ERRORS,
  useValue
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-tooltip.mjs
var [TUI_TOOLTIP_OPTIONS, tuiTooltipOptionsProvider] = tuiCreateOptions({
  icon: "",
  appearance: "icon"
});
var TuiTooltipStyles = class _TuiTooltipStyles {
  static {
    this.ɵfac = function TuiTooltipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTooltipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-tooltip"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiTooltipStyles_Template(rf, ctx) {
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-tooltip"
      },
      styles: ["[tuiTooltip]{border-width:.125rem;border-radius:100%;cursor:pointer;pointer-events:auto;background-clip:content-box!important}[tuiTooltip] [tuiBlock],[tuiTooltip] [tuiCell][data-size=s],[tuiLabel][data-orientation=horizontal] [tuiTooltip]{border-width:.25rem}[tuiTitle] [tuiTooltip]{font-size:1rem;border:none}[tuiTooltip]:after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:1rem;block-size:1rem}@media (hover: hover){tui-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-textarea:hover [tuiTooltip][data-appearance=icon]:after,tui-primitive-textfield:hover [tuiTooltip][data-appearance=icon]:after,tui-input-tag:hover [tuiTooltip][data-appearance=icon]:after{color:var(--tui-text-secondary)}}\n"]
    }]
  }], null, null);
})();
var TuiTooltip = class _TuiTooltip {
  constructor() {
    this.textfield = inject(TuiTextfieldComponent, {
      optional: true
    });
    this.isMobile = inject(TUI_IS_MOBILE);
    this.describe = inject(TuiHintDescribe);
    this.driver = inject(TuiHintHover);
    this.nothing = tuiWithStyles(TuiTooltipStyles);
    this.state = tuiAppearanceState(toSignal(inject(TuiHintHover).pipe(map((hover) => hover ? "hover" : null), tuiWatch()), {
      initialValue: null
    }));
  }
  ngDoCheck() {
    if (this.textfield?.id) {
      this.describe.tuiHintDescribe = this.textfield.id;
    }
  }
  onClick(event) {
    if (this.isMobile) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.driver.toggle();
    }
  }
  static {
    this.ɵfac = function TuiTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTooltip,
      selectors: [["tui-icon", "tuiTooltip", ""]],
      hostAttrs: ["tuiTooltip", ""],
      hostBindings: function TuiTooltip_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.prevent", function TuiTooltip_click_prevent_HostBindingHandler() {
            return 0;
          })("mousedown", function TuiTooltip_mousedown_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe", "tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint", "tuiTooltip", "tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiTooltip]",
      providers: [tuiAppearanceOptionsProvider(TUI_TOOLTIP_OPTIONS), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_TOOLTIP_OPTIONS).icon || inject(TUI_HINT_OPTIONS).icon
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDescribe,
        inputs: ["tuiHintDescribe: tuiTooltipDescribe"]
      }, {
        directive: TuiHintDirective,
        inputs: ["tuiHint: tuiTooltip", "tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        tuiTooltip: "",
        "(click.prevent)": "0",
        "(mousedown)": "onClick($event)"
      }
    }]
  }], null, null);
})();

// node_modules/@maskito/core/index.esm.js
function getContentEditableSelection(element) {
  const {
    anchorOffset = 0,
    focusOffset = 0
  } = element.ownerDocument.getSelection() || {};
  const from = Math.min(anchorOffset, focusOffset);
  const to = Math.max(anchorOffset, focusOffset);
  return [from, to];
}
function setContentEditableSelection(element, [from, to]) {
  var _a, _b, _c, _d;
  const document = element.ownerDocument;
  const range = document.createRange();
  range.setStart(element.firstChild || element, Math.min(from, (_b = (_a = element.textContent) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0));
  range.setEnd(element.lastChild || element, Math.min(to, (_d = (_c = element.textContent) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0));
  const selection = document.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
var ContentEditableAdapter = class {
  constructor(element) {
    this.element = element;
    this.maxLength = Infinity;
  }
  get value() {
    return this.element.innerText.replace(/\n\n$/, "\n");
  }
  set value(value) {
    this.element.innerHTML = value.replace(/\n$/, "\n\n");
  }
  get selectionStart() {
    return getContentEditableSelection(this.element)[0];
  }
  get selectionEnd() {
    return getContentEditableSelection(this.element)[1];
  }
  setSelectionRange(from, to) {
    setContentEditableSelection(this.element, [from !== null && from !== void 0 ? from : 0, to !== null && to !== void 0 ? to : 0]);
  }
  select() {
    this.setSelectionRange(0, this.value.length);
  }
};
function maskitoAdaptContentEditable(element) {
  const adapter = new ContentEditableAdapter(element);
  return new Proxy(element, {
    get(target, prop) {
      if (prop in adapter) {
        return adapter[prop];
      }
      const nativeProperty = target[prop];
      return typeof nativeProperty === "function" ? nativeProperty.bind(target) : nativeProperty;
    },
    set(target, prop, val, receiver) {
      return Reflect.set(prop in adapter ? adapter : target, prop, val, receiver);
    }
  });
}
var MASKITO_DEFAULT_ELEMENT_PREDICATE = (e) => e.isContentEditable ? maskitoAdaptContentEditable(e) : e.querySelector("input,textarea") || e;
var MASKITO_DEFAULT_OPTIONS = {
  mask: /^.*$/,
  preprocessors: [],
  postprocessors: [],
  plugins: [],
  overwriteMode: "shift"
};
var MaskHistory = class {
  constructor() {
    this.now = null;
    this.past = [];
    this.future = [];
  }
  undo() {
    const state = this.past.pop();
    if (state && this.now) {
      this.future.push(this.now);
      this.updateElement(state, "historyUndo");
    }
  }
  redo() {
    const state = this.future.pop();
    if (state && this.now) {
      this.past.push(this.now);
      this.updateElement(state, "historyRedo");
    }
  }
  updateHistory(state) {
    if (!this.now) {
      this.now = state;
      return;
    }
    const isValueChanged = this.now.value !== state.value;
    const isSelectionChanged = this.now.selection.some((item, index) => item !== state.selection[index]);
    if (!isValueChanged && !isSelectionChanged) {
      return;
    }
    if (isValueChanged) {
      this.past.push(this.now);
      this.future = [];
    }
    this.now = state;
  }
  updateElement(state, inputType) {
    this.now = state;
    this.updateElementState(state, {
      inputType,
      data: null
    });
  }
};
function areElementValuesEqual(sampleState, ...states) {
  return states.every(({
    value
  }) => value === sampleState.value);
}
function areElementStatesEqual(sampleState, ...states) {
  return states.every(({
    value,
    selection
  }) => value === sampleState.value && selection[0] === sampleState.selection[0] && selection[1] === sampleState.selection[1]);
}
function applyOverwriteMode({
  value,
  selection
}, newCharacters, mode) {
  const [from, to] = selection;
  const computedMode = typeof mode === "function" ? mode({
    value,
    selection
  }) : mode;
  return {
    value,
    selection: computedMode === "replace" ? [from, Math.max(from + newCharacters.length, to)] : [from, to]
  };
}
function isFixedCharacter(char) {
  return typeof char === "string";
}
function getLeadingFixedCharacters(mask, validatedValuePart, newCharacter, initialElementState) {
  let leadingFixedCharacters = "";
  for (let i = validatedValuePart.length; i < mask.length; i++) {
    const charConstraint = mask[i] || "";
    const isInitiallyExisted = (initialElementState === null || initialElementState === void 0 ? void 0 : initialElementState.value[i]) === charConstraint;
    if (!isFixedCharacter(charConstraint) || charConstraint === newCharacter && !isInitiallyExisted) {
      return leadingFixedCharacters;
    }
    leadingFixedCharacters += charConstraint;
  }
  return leadingFixedCharacters;
}
function validateValueWithMask(value, maskExpression) {
  if (Array.isArray(maskExpression)) {
    return value.length === maskExpression.length && Array.from(value).every((char, i) => {
      const charConstraint = maskExpression[i] || "";
      return isFixedCharacter(charConstraint) ? char === charConstraint : char.match(charConstraint);
    });
  }
  return maskExpression.test(value);
}
function guessValidValueByPattern(elementState, mask, initialElementState) {
  let maskedFrom = null;
  let maskedTo = null;
  const maskedValue = Array.from(elementState.value).reduce((validatedCharacters, char, charIndex) => {
    const leadingCharacters = getLeadingFixedCharacters(mask, validatedCharacters, char, initialElementState);
    const newValidatedChars = validatedCharacters + leadingCharacters;
    const charConstraint = mask[newValidatedChars.length] || "";
    if (maskedFrom === null && charIndex >= elementState.selection[0]) {
      maskedFrom = newValidatedChars.length;
    }
    if (maskedTo === null && charIndex >= elementState.selection[1]) {
      maskedTo = newValidatedChars.length;
    }
    if (isFixedCharacter(charConstraint)) {
      return newValidatedChars + charConstraint;
    }
    return char.match(charConstraint) ? newValidatedChars + char : newValidatedChars;
  }, "");
  const trailingFixedCharacters = getLeadingFixedCharacters(mask, maskedValue, "", initialElementState);
  return {
    value: validateValueWithMask(maskedValue + trailingFixedCharacters, mask) ? maskedValue + trailingFixedCharacters : maskedValue,
    selection: [maskedFrom !== null && maskedFrom !== void 0 ? maskedFrom : maskedValue.length, maskedTo !== null && maskedTo !== void 0 ? maskedTo : maskedValue.length]
  };
}
function guessValidValueByRegExp({
  value,
  selection
}, maskRegExp) {
  const [from, to] = selection;
  let newFrom = from;
  let newTo = to;
  const validatedValue = Array.from(value).reduce((validatedValuePart, char, i) => {
    const newPossibleValue = validatedValuePart + char;
    if (from === i) {
      newFrom = validatedValuePart.length;
    }
    if (to === i) {
      newTo = validatedValuePart.length;
    }
    return newPossibleValue.match(maskRegExp) ? newPossibleValue : validatedValuePart;
  }, "");
  return {
    value: validatedValue,
    selection: [newFrom, newTo]
  };
}
function calibrateValueByMask(elementState, mask, initialElementState = null) {
  if (validateValueWithMask(elementState.value, mask)) {
    return elementState;
  }
  const {
    value,
    selection
  } = Array.isArray(mask) ? guessValidValueByPattern(elementState, mask, initialElementState) : guessValidValueByRegExp(elementState, mask);
  return {
    selection,
    value: Array.isArray(mask) ? value.slice(0, mask.length) : value
  };
}
function removeFixedMaskCharacters(initialElementState, mask) {
  if (!Array.isArray(mask)) {
    return initialElementState;
  }
  const [from, to] = initialElementState.selection;
  const selection = [];
  const unmaskedValue = Array.from(initialElementState.value).reduce((rawValue, char, i) => {
    const charConstraint = mask[i] || "";
    if (i === from) {
      selection.push(rawValue.length);
    }
    if (i === to) {
      selection.push(rawValue.length);
    }
    return isFixedCharacter(charConstraint) && charConstraint === char ? rawValue : rawValue + char;
  }, "");
  if (selection.length < 2) {
    selection.push(...new Array(2 - selection.length).fill(unmaskedValue.length));
  }
  return {
    value: unmaskedValue,
    selection: [selection[0], selection[1]]
  };
}
var MaskModel = class {
  constructor(initialElementState, maskOptions) {
    this.initialElementState = initialElementState;
    this.maskOptions = maskOptions;
    this.value = "";
    this.selection = [0, 0];
    const {
      value,
      selection
    } = calibrateValueByMask(this.initialElementState, this.getMaskExpression(this.initialElementState));
    this.value = value;
    this.selection = selection;
  }
  addCharacters([from, to], newCharacters) {
    const {
      value,
      maskOptions
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + newCharacters + value.slice(to),
      selection: [from + newCharacters.length, from + newCharacters.length]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = applyOverwriteMode(unmaskedElementState, newCharacters, maskOptions.overwriteMode).selection;
    const newUnmaskedLeadingValuePart = unmaskedElementState.value.slice(0, unmaskedFrom) + newCharacters;
    const newCaretIndex = newUnmaskedLeadingValuePart.length;
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedLeadingValuePart + unmaskedElementState.value.slice(unmaskedTo),
      selection: [newCaretIndex, newCaretIndex]
    }, maskExpression, initialElementState);
    const isInvalidCharsInsertion = value.slice(0, from) === calibrateValueByMask({
      value: newUnmaskedLeadingValuePart,
      selection: [newCaretIndex, newCaretIndex]
    }, maskExpression, initialElementState).value;
    if (isInvalidCharsInsertion || areElementStatesEqual(this, maskedElementState)) {
      throw new Error("Invalid mask value");
    }
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  deleteCharacters([from, to]) {
    if (from === to || !to) {
      return;
    }
    const {
      value
    } = this;
    const maskExpression = this.getMaskExpression({
      value: value.slice(0, from) + value.slice(to),
      selection: [from, from]
    });
    const initialElementState = {
      value,
      selection: [from, to]
    };
    const unmaskedElementState = removeFixedMaskCharacters(initialElementState, maskExpression);
    const [unmaskedFrom, unmaskedTo] = unmaskedElementState.selection;
    const newUnmaskedValue = unmaskedElementState.value.slice(0, unmaskedFrom) + unmaskedElementState.value.slice(unmaskedTo);
    const maskedElementState = calibrateValueByMask({
      value: newUnmaskedValue,
      selection: [unmaskedFrom, unmaskedFrom]
    }, maskExpression, initialElementState);
    this.value = maskedElementState.value;
    this.selection = maskedElementState.selection;
  }
  getMaskExpression(elementState) {
    const {
      mask
    } = this.maskOptions;
    return typeof mask === "function" ? mask(elementState) : mask;
  }
};
var EventListener = class {
  constructor(element) {
    this.element = element;
    this.listeners = [];
  }
  listen(eventType, fn, options) {
    const untypedFn = fn;
    this.element.addEventListener(eventType, untypedFn, options);
    this.listeners.push(() => this.element.removeEventListener(eventType, untypedFn, options));
  }
  destroy() {
    this.listeners.forEach((stopListen) => stopListen());
  }
};
var HotkeyModifier = {
  CTRL: 1 << 0,
  ALT: 1 << 1,
  SHIFT: 1 << 2,
  META: 1 << 3
};
var HotkeyCode = {
  Y: 89,
  Z: 90
};
function isHotkey(event, modifiers, hotkeyCode) {
  return event.ctrlKey === !!(modifiers & HotkeyModifier.CTRL) && event.altKey === !!(modifiers & HotkeyModifier.ALT) && event.shiftKey === !!(modifiers & HotkeyModifier.SHIFT) && event.metaKey === !!(modifiers & HotkeyModifier.META) && /**
   * We intentionally use legacy {@link KeyboardEvent#keyCode `keyCode`} property. It is more
   * "keyboard-layout"-independent than {@link KeyboardEvent#key `key`} or {@link KeyboardEvent#code `code`} properties.
   * @see {@link https://github.com/taiga-family/maskito/issues/315 `KeyboardEvent#code` issue}
   */
  event.keyCode === hotkeyCode;
}
function isRedo(event) {
  return isHotkey(event, HotkeyModifier.CTRL, HotkeyCode.Y) || // Windows
  isHotkey(event, HotkeyModifier.CTRL | HotkeyModifier.SHIFT, HotkeyCode.Z) || // Windows & Android
  isHotkey(event, HotkeyModifier.META | HotkeyModifier.SHIFT, HotkeyCode.Z);
}
function isUndo(event) {
  return isHotkey(event, HotkeyModifier.CTRL, HotkeyCode.Z) || // Windows & Android
  isHotkey(event, HotkeyModifier.META, HotkeyCode.Z);
}
function maskitoUpdateElement(element, valueOrElementState) {
  var _a;
  const initialValue = element.value;
  if (typeof valueOrElementState === "string") {
    element.value = valueOrElementState;
  } else {
    const [from, to] = valueOrElementState.selection;
    element.value = valueOrElementState.value;
    if (element.matches(":focus")) {
      (_a = element.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(element, from, to);
    }
  }
  if (element.value !== initialValue) {
    element.dispatchEvent(new Event(
      "input",
      /**
       * React handles this event only on bubbling phase
       *
       * here is the list of events that are processed in the capture stage, others are processed in the bubbling stage
       * https://github.com/facebook/react/blob/cb2439624f43c510007f65aea5c50a8bb97917e4/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js#L222
       */
      {
        bubbles: true
      }
    ));
  }
}
function getLineSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const nearestBreak = isForward ? value.slice(from).indexOf("\n") + 1 || value.length : value.slice(0, to).lastIndexOf("\n") + 1;
  const selectFrom = isForward ? from : nearestBreak;
  const selectTo = isForward ? nearestBreak : to;
  return [selectFrom, selectTo];
}
function getNotEmptySelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  const notEmptySelection = isForward ? [from, to + 1] : [from - 1, to];
  return notEmptySelection.map((x) => Math.min(Math.max(x, 0), value.length));
}
var TRAILING_SPACES_REG = /\s+$/g;
var LEADING_SPACES_REG = /^\s+/g;
var SPACE_REG = /\s/;
function getWordSelection({
  value,
  selection
}, isForward) {
  const [from, to] = selection;
  if (from !== to) {
    return [from, to];
  }
  if (isForward) {
    const valueAfterSelectionStart = value.slice(from);
    const [leadingSpaces] = valueAfterSelectionStart.match(LEADING_SPACES_REG) || [""];
    const nearestWordEndIndex = valueAfterSelectionStart.trimStart().search(SPACE_REG);
    return [from, nearestWordEndIndex !== -1 ? from + leadingSpaces.length + nearestWordEndIndex : value.length];
  }
  const valueBeforeSelectionEnd = value.slice(0, to);
  const [trailingSpaces] = valueBeforeSelectionEnd.match(TRAILING_SPACES_REG) || [""];
  const selectedWordLength = valueBeforeSelectionEnd.trimEnd().split("").reverse().findIndex((char) => SPACE_REG.exec(char));
  return [selectedWordLength !== -1 ? to - trailingSpaces.length - selectedWordLength : 0, to];
}
function maskitoPipe(processors = []) {
  return (initialData, ...readonlyArgs) => processors.reduce((data, fn) => Object.assign(Object.assign({}, data), fn(data, ...readonlyArgs)), initialData);
}
function maskitoTransform(valueOrState, maskitoOptions) {
  const options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), maskitoOptions);
  const preprocessor = maskitoPipe(options.preprocessors);
  const postprocessor = maskitoPipe(options.postprocessors);
  const initialElementState = typeof valueOrState === "string" ? {
    value: valueOrState,
    selection: [0, 0]
  } : valueOrState;
  const {
    elementState
  } = preprocessor({
    elementState: initialElementState,
    data: ""
  }, "validation");
  const maskModel = new MaskModel(elementState, options);
  const {
    value,
    selection
  } = postprocessor(maskModel, initialElementState);
  return typeof valueOrState === "string" ? value : {
    value,
    selection
  };
}
var Maskito = class extends MaskHistory {
  constructor(element, maskitoOptions) {
    super();
    this.element = element;
    this.maskitoOptions = maskitoOptions;
    this.isTextArea = this.element.nodeName === "TEXTAREA";
    this.eventListener = new EventListener(this.element);
    this.options = Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), this.maskitoOptions);
    this.upcomingElementState = null;
    this.preprocessor = maskitoPipe(this.options.preprocessors);
    this.postprocessor = maskitoPipe(this.options.postprocessors);
    this.teardowns = this.options.plugins.map((plugin) => plugin(this.element, this.options));
    this.updateHistory(this.elementState);
    this.eventListener.listen("keydown", (event) => {
      if (isRedo(event)) {
        event.preventDefault();
        return this.redo();
      }
      if (isUndo(event)) {
        event.preventDefault();
        return this.undo();
      }
    });
    this.eventListener.listen("beforeinput", (event) => {
      var _a, _b, _c;
      const isForward = event.inputType.includes("Forward");
      this.updateHistory(this.elementState);
      switch (event.inputType) {
        case "historyUndo":
          event.preventDefault();
          return this.undo();
        case "historyRedo":
          event.preventDefault();
          return this.redo();
        case "deleteByCut":
        case "deleteContentBackward":
        case "deleteContentForward":
          return this.handleDelete({
            event,
            isForward,
            selection: getNotEmptySelection(this.elementState, isForward)
          });
        case "deleteWordForward":
        case "deleteWordBackward":
          return this.handleDelete({
            event,
            isForward,
            selection: getWordSelection(this.elementState, isForward),
            force: true
          });
        case "deleteSoftLineBackward":
        case "deleteSoftLineForward":
        case "deleteHardLineBackward":
        case "deleteHardLineForward":
          return this.handleDelete({
            event,
            isForward,
            selection: getLineSelection(this.elementState, isForward),
            force: true
          });
        case "insertCompositionText":
          return;
        case "insertReplacementText":
          return;
        case "insertLineBreak":
        case "insertParagraph":
          return this.handleEnter(event);
        case "insertFromPaste":
        case "insertText":
        case "insertFromDrop":
        default:
          return this.handleInsert(event, (_c = (_a = event.data) !== null && _a !== void 0 ? _a : (
            // `event.data` for `contentEditable` is always `null` for paste/drop events
            (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.getData("text/plain")
          )) !== null && _c !== void 0 ? _c : "");
      }
    });
    this.eventListener.listen("input", () => {
      if (this.upcomingElementState) {
        this.updateElementState(this.upcomingElementState);
        this.upcomingElementState = null;
      }
    }, {
      capture: true
    });
    this.eventListener.listen("input", ({
      inputType
    }) => {
      if (inputType === "insertCompositionText") {
        return;
      }
      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
    this.eventListener.listen("compositionend", () => {
      this.ensureValueFitsMask();
      this.updateHistory(this.elementState);
    });
  }
  destroy() {
    this.eventListener.destroy();
    this.teardowns.forEach((teardown) => teardown === null || teardown === void 0 ? void 0 : teardown());
  }
  updateElementState({
    value,
    selection
  }, eventInit) {
    const initialValue = this.elementState.value;
    this.updateValue(value);
    this.updateSelectionRange(selection);
    if (eventInit && initialValue !== value) {
      this.dispatchInputEvent(eventInit);
    }
  }
  get elementState() {
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.element;
    return {
      value,
      selection: [selectionStart !== null && selectionStart !== void 0 ? selectionStart : 0, selectionEnd !== null && selectionEnd !== void 0 ? selectionEnd : 0]
    };
  }
  get maxLength() {
    const {
      maxLength
    } = this.element;
    return maxLength === -1 ? Infinity : maxLength;
  }
  updateSelectionRange([from, to]) {
    var _a;
    const {
      element
    } = this;
    if (element.matches(":focus") && (element.selectionStart !== from || element.selectionEnd !== to)) {
      (_a = element.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(element, from, to);
    }
  }
  updateValue(value) {
    this.element.value = value;
  }
  ensureValueFitsMask() {
    this.updateElementState(maskitoTransform(this.elementState, this.options), {
      inputType: "insertText",
      data: null
    });
  }
  dispatchInputEvent(eventInit = {
    inputType: "insertText",
    data: null
  }) {
    if (globalThis.InputEvent) {
      this.element.dispatchEvent(new InputEvent("input", Object.assign(Object.assign({}, eventInit), {
        bubbles: true,
        cancelable: false
      })));
    }
  }
  handleDelete({
    event,
    selection,
    isForward,
    force = false
  }) {
    const initialState = {
      value: this.elementState.value,
      selection
    };
    const [initialFrom, initialTo] = initialState.selection;
    const {
      elementState
    } = this.preprocessor({
      elementState: initialState,
      data: ""
    }, isForward ? "deleteForward" : "deleteBackward");
    const maskModel = new MaskModel(elementState, this.options);
    const [from, to] = elementState.selection;
    maskModel.deleteCharacters([from, to]);
    const newElementState = this.postprocessor(maskModel, initialState);
    const newPossibleValue = initialState.value.slice(0, initialFrom) + initialState.value.slice(initialTo);
    if (newPossibleValue === newElementState.value && !force && !this.element.isContentEditable) {
      return;
    }
    if (areElementValuesEqual(initialState, elementState, maskModel, newElementState)) {
      event.preventDefault();
      return this.updateSelectionRange(isForward ? [to, to] : [from, from]);
    }
    this.upcomingElementState = newElementState;
  }
  handleInsert(event, data) {
    const {
      options,
      maxLength,
      element,
      elementState: initialElementState
    } = this;
    const {
      elementState,
      data: insertedText = data
    } = this.preprocessor({
      data,
      elementState: initialElementState
    }, "insert");
    const maskModel = new MaskModel(elementState, options);
    try {
      maskModel.addCharacters(elementState.selection, insertedText);
    } catch (_a) {
      return event.preventDefault();
    }
    const [from, to] = elementState.selection;
    const newPossibleValue = initialElementState.value.slice(0, from) + data + initialElementState.value.slice(to);
    const newElementState = this.postprocessor(maskModel, initialElementState);
    if (newElementState.value.length > maxLength) {
      return event.preventDefault();
    }
    if (newPossibleValue !== newElementState.value || element.isContentEditable) {
      this.upcomingElementState = newElementState;
      if (options.overwriteMode === "replace" && newPossibleValue.length > maxLength) {
        this.dispatchInputEvent({
          inputType: "insertText",
          data
        });
      }
    }
  }
  handleEnter(event) {
    if (this.isTextArea || this.element.isContentEditable) {
      this.handleInsert(event, "\n");
    }
  }
};
function maskitoInitialCalibrationPlugin(customOptions) {
  return (element, options) => {
    var _a, _b;
    const from = (_a = element.selectionStart) !== null && _a !== void 0 ? _a : 0;
    const to = (_b = element.selectionEnd) !== null && _b !== void 0 ? _b : 0;
    maskitoUpdateElement(element, {
      value: maskitoTransform(element.value, customOptions || options),
      selection: [from, to]
    });
  };
}

export {
  TUI_CHEVRON,
  TuiChevron,
  TUI_CALENDAR_DATE_STREAM,
  tuiDateStreamWithTransformer,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_CONFIRM_WORDS,
  TUI_CANCEL_WORD,
  TUI_DONE_WORD,
  TUI_MORE_WORD,
  TUI_HIDE_TEXT,
  TUI_SHOW_ALL_TEXT,
  TUI_OTHER_DATE_TEXT,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_TIME_TEXTS,
  TUI_DATE_TEXTS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_COPY_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_CALENDAR_MONTHS,
  TUI_FILE_TEXTS,
  TUI_PAGINATION_TEXTS,
  TUI_INPUT_FILE_TEXTS,
  TUI_MULTI_SELECT_TEXTS,
  TUI_COUNTRIES,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  tuiInputDateOptionsProvider,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_ITEMS_HANDLERS,
  tuiItemsHandlersProvider,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_ICONS,
  tuiPreviewIconsProvider,
  TUI_VALIDATION_ERRORS,
  tuiValidationErrorsProvider,
  TUI_TOOLTIP_OPTIONS,
  tuiTooltipOptionsProvider,
  TuiTooltip,
  MASKITO_DEFAULT_ELEMENT_PREDICATE,
  MASKITO_DEFAULT_OPTIONS,
  maskitoUpdateElement,
  maskitoTransform,
  Maskito,
  maskitoInitialCalibrationPlugin
};
//# sourceMappingURL=chunk-2H24O7E5.js.map
