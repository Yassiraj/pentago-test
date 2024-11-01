import {
  MaskitoDirective,
  TUI_FLOATING_PRECISION,
  TuiCalendarMonth,
  TuiCalendarRange,
  TuiCheckbox,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  TuiDataListWrapperComponent,
  TuiRange,
  TuiSlider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiStringifyContentPipe,
  maskitoCaretGuard,
  maskitoDateOptionsGenerator,
  maskitoDateRangeOptionsGenerator,
  maskitoDateTimeOptionsGenerator,
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
  maskitoPrefixPostprocessorGenerator,
  maskitoTimeOptionsGenerator,
  tuiIsFlat,
  tuiSliderOptionsProvider,
  tuiToggleDay
} from "./chunk-ZZR473VN.js";
import {
  MASKITO_DEFAULT_OPTIONS,
  TUI_COPY_TEXTS,
  TUI_COUNTRIES,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TEXTS,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DONE_WORD,
  TUI_INPUT_DATE_OPTIONS,
  TUI_ITEMS_HANDLERS,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_MORE_WORD,
  TUI_MULTI_SELECT_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_TIME_TEXTS,
  TUI_TIME_VALUE_TRANSFORMER,
  TuiChevron,
  TuiTooltip,
  maskitoTransform,
  tuiDateStreamWithTransformer
} from "./chunk-2H24O7E5.js";
import {
  TuiNumberFormat
} from "./chunk-YQTEMZ7I.js";
import {
  TuiCalendar,
  TuiCalendarYear,
  TuiFlagPipe,
  TuiGroup,
  TuiLet,
  TuiLink,
  TuiMapperPipe,
  TuiMonthPipe,
  TuiPopoverDirective
} from "./chunk-P47AVGYP.js";
import {
  CHAR_EN_DASH,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_QUERY,
  MAX_YEAR,
  MIN_YEAR,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  RANGE_SEPARATOR_CHAR,
  TUI_ANIMATIONS_SPEED,
  TUI_BASE_HREF,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_ACCESSOR,
  TUI_DATA_LIST_HOST,
  TUI_DATE_FORMAT,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TUI_NON_DIGITS_REGEXP,
  TUI_NUMBER_FORMAT,
  TUI_SCROLL_REF,
  TUI_STRICT_MATCHER,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TRUE_HANDLER,
  TUI_VERSION,
  TUI_WINDOW_SIZE,
  TuiActiveZone,
  TuiAppearance,
  TuiButton,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDay,
  TuiDayRange,
  TuiDropdown,
  TuiDropdownComponent,
  TuiDropdownContext,
  TuiDropdownDirective,
  TuiDropdownDriverDirective,
  TuiDropdownFixed,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownOpenLegacy,
  TuiDropdownOptionsDirective,
  TuiDropdownPortal,
  TuiDropdownPosition,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiHint,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintDriver,
  TuiHintHost,
  TuiHintHover,
  TuiHintManual,
  TuiHintOptionsDirective,
  TuiHintOverflow,
  TuiHintPointer,
  TuiHintPosition,
  TuiHintUnstyled,
  TuiHovered,
  TuiIcon,
  TuiLoader,
  TuiMonth,
  TuiMonthRange,
  TuiOptGroup,
  TuiOption,
  TuiPopoverService,
  TuiScrollIntoView,
  TuiScrollService,
  TuiScrollbar,
  TuiTime,
  TuiValidationError,
  TuiValueTransformer,
  WA_NAVIGATOR,
  WA_WINDOW,
  changeDateSeparator,
  injectContext,
  isApple,
  tuiArrayRemove,
  tuiArrayToggle,
  tuiAsControl,
  tuiAsDataList,
  tuiAsDataListHost,
  tuiAsOptionContent,
  tuiAsPopover,
  tuiClamp,
  tuiControlValue,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiDateClamp,
  tuiDefaultSort,
  tuiDropdownOptionsProvider,
  tuiFadeIn,
  tuiFormatNumber,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetClosestFocusable,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementPoint,
  tuiGetFractionPartPadded,
  tuiGetGradientData,
  tuiGetNativeFocused,
  tuiGetOriginalArrayFromQueryList,
  tuiHexToRgb,
  tuiHsvToRgb,
  tuiIfMap,
  tuiInjectElement,
  tuiInjectId,
  tuiIsElement,
  tuiIsFalsy,
  tuiIsHTMLElement,
  tuiIsInput,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiIsPresent,
  tuiIsString,
  tuiNullableSame,
  tuiParentAnimation,
  tuiParseColor,
  tuiParseGradient,
  tuiPreventDefault,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiQueryListChanges,
  tuiRetargetedBoundaryCrossing,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiRound,
  tuiSizeBigger,
  tuiSlideInTop,
  tuiStringHashToHsl,
  tuiToAnimationOptions,
  tuiToGradient,
  tuiTypedFromEvent,
  tuiWatch,
  tuiZonefree,
  tuiZonefull
} from "./chunk-TJD5ECJX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RangeValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-RMQQVHNY.js";
import "./chunk-DQR2A66Y.js";
import {
  takeUntilDestroyed
} from "./chunk-HD67AN6P.js";
import "./chunk-KKWAPHD5.js";
import {
  DomSanitizer
} from "./chunk-YEHPATXO.js";
import "./chunk-WJOPP6AW.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  I18nPluralPipe,
  KeyValuePipe,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  Input,
  NO_ERRORS_SCHEMA,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  SecurityContext,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  BehaviorSubject,
  EMPTY,
  NEVER,
  Observable,
  ReplaySubject,
  Subject,
  __assign,
  __async,
  __decorate,
  __objRest,
  __rest,
  __spreadProps,
  __spreadValues,
  catchError,
  combineLatest,
  concat,
  createOperatorSubscriber,
  debounceTime,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  from,
  fromEvent,
  identity,
  ignoreElements,
  innerFrom,
  map,
  merge,
  of,
  race,
  share,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  timer,
  withLatestFrom,
  zip
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-tokens.mjs
var TUI_COUNTRIES_MASKS = tuiCreateToken({
  AD: "+376###-###",
  AE: "+971-##-###-####",
  AF: "+93##-###-####",
  AG: "+1(268) ###-####",
  AI: "+1(264) ###-####",
  AL: "+355(###) ###-###",
  AM: "+374##-###-###",
  AO: "+244(###) ###-###",
  AR: "+54(###) ####-####",
  AT: "+43(###) ###-####",
  AU: "+61#-####-####",
  AW: "+297###-####",
  AZ: "+994##-###-##-##",
  BA: "+387 ###-####-##",
  BB: "+1(246) ###-####",
  BD: "+880##-###-###",
  BE: "+32(###) ###-###",
  BF: "+226##-##-####",
  BG: "+359(###) ###-###",
  BH: "+973####-####",
  BI: "+257##-##-####",
  BJ: "+229##-##-####",
  BL: "+590 ## ## ## ## ##",
  BM: "+1(441) ###-####",
  BN: "+673###-####",
  BO: "+591#-###-####",
  BQ: "+599-###-####",
  BR: "+55(##) ####-####",
  BS: "+1(242) ###-####",
  BT: "+975#-###-###",
  BW: "+267##-###-###",
  BY: "+375(##) ###-##-##",
  BZ: "+501###-####",
  CA: "+1(###) ###-####",
  CD: "+243(###) ###-###",
  CF: "+236-##-##-####",
  CG: "+242##-###-####",
  CH: "+41##-###-####",
  CI: "+225##-##-###-###",
  CL: "+56#-####-####",
  CM: "+237#####-####",
  CN: "+86(###) ####-####",
  CO: "+57(###) ###-####",
  CR: "+506####-####",
  CU: "+53#-###-####",
  CV: "+238(###) ##-##",
  CW: "+5999-###-####",
  CY: "+357##-###-###",
  CZ: "+420(###) ###-###",
  DE: "+49(###) ###-###-##",
  DJ: "+253##-##-##-##",
  DK: "+45##-##-##-##",
  DM: "+1(767) ###-####",
  DO: "+1(###) ###-####",
  DZ: "+213##-###-####",
  EC: "+593##-###-####",
  EE: "+372####-####",
  EG: "+20(###) ###-####",
  ER: "+291#-###-###",
  ES: "+34(###) ###-###",
  ET: "+251##-###-####",
  FI: "+358(###) ###-##-##",
  FJ: "+679##-#####",
  FK: "+500#####",
  FM: "+691###-####",
  FR: "+33 ## ## ## ## ##",
  GA: "+241##-##-##-##",
  GB: "+44##-####-####",
  GD: "+1(473) ###-####",
  GE: "+995(###) ###-###",
  GF: "+594 ## ## ## ## ##",
  GH: "+233(###) ###-###",
  GI: "+350###-#####",
  GL: "+299##-##-##",
  GM: "+220(###) ##-##",
  GN: "+224##-###-###",
  GP: "+590 ## ## ## ## ##",
  GQ: "+240##-###-####",
  GR: "+30(###) ###-####",
  GT: "+502#-###-####",
  GW: "+245#-######",
  GY: "+592###-####",
  HK: "+852####-####",
  HN: "+504####-####",
  HR: "+385##-###-####",
  HT: "+509##-##-####",
  HU: "+36(###) ###-###",
  ID: "+62(###) ###-##-###",
  IE: "+353(###) ###-###",
  IL: "+972##-###-####",
  IN: "+91(####) ###-###",
  IQ: "+964(###) ###-####",
  IR: "+98(###) ###-####",
  IS: "+354###-####",
  IT: "+39(###) ####-###",
  JM: "+1(876) ###-####",
  JO: "+962#-####-####",
  JP: "+81-##-####-####",
  KE: "+254###-######",
  KG: "+996(###) ###-###",
  KH: "+855##-###-###",
  KM: "+269##-#####",
  KN: "+1(869) ###-####",
  KP: "+850####-#############",
  KR: "+82##-###-####",
  KW: "+965####-####",
  KY: "+1(345) ###-####",
  KZ: "+7(###) ###-##-##",
  LA: "+856##-##-###-###",
  LB: "+961##-###-###",
  LC: "+1(758) ###-####",
  LI: "+423(###) ###-####",
  LK: "+94##-###-####",
  LR: "+231##-###-###",
  LS: "+266#-###-####",
  LT: "+370(###) ##-###",
  LU: "+352(###) ###-###",
  LV: "+371##-###-###",
  LY: "+218##-###-####",
  MA: "+212##-####-###",
  MC: "+377###-###-###",
  MD: "+373####-####",
  ME: "+382##-###-###",
  MF: "+590 ## ## ## ## ##",
  MG: "+261##-##-#####",
  MK: "+389##-###-###",
  ML: "+223##-##-####",
  MM: "+95##-###-###",
  MN: "+976##-##-####",
  MO: "+853####-####",
  MQ: "+596 ## ## ## ## ##",
  MR: "+222##-##-####",
  MS: "+1(664) ###-####",
  MT: "+356####-####",
  MU: "+230####-####",
  MV: "+960###-####",
  MW: "+265#-####-####",
  MX: "+52(###) ###-####",
  MY: "+60(###) ###-###",
  MZ: "+258##-###-###",
  NA: "+264##-###-####",
  NC: "+687 ### ###",
  NE: "+227##-##-####",
  NG: "+234(###) ###-####",
  NI: "+505####-####",
  NL: "+31##-###-####",
  NO: "+47(###) ##-###",
  NP: "+977##-###-###",
  NZ: "+64(###) ###-####",
  OM: "+968##-###-###",
  PA: "+507###-####",
  PE: "+51(###) ###-###",
  PF: "+689 ## ## ## ##",
  PG: "+675(###) ##-###",
  PH: "+63(###) ###-####",
  PK: "+92(###) ###-####",
  PL: "+48(###) ###-###",
  PT: "+351##-###-####",
  PW: "+680###-####",
  PY: "+595(###) ###-###",
  QA: "+974####-####",
  RE: "+262 ## ## ## ## ##",
  RO: "+40##-###-####",
  RS: "+381##-###-####",
  RU: "+7### ###-##-##",
  RW: "+250(###) ###-###",
  SA: "+966#-####-####",
  SB: "+677###-####",
  SC: "+248#-###-###",
  SD: "+249##-###-####",
  SE: "+46##-###-####",
  SG: "+65####-####",
  SH: "+290####",
  SI: "+386##-###-###",
  SK: "+421(###) ###-###",
  SL: "+232##-######",
  SM: "+378####-######",
  SN: "+221##-###-####",
  SO: "+252##-###-###",
  SR: "+597###-####",
  ST: "+239##-#####",
  SV: "+503##-##-####",
  SX: "+1(721) ###-####",
  SY: "+963##-####-###",
  SZ: "+268##-##-####",
  TC: "+1(649) ###-####",
  TD: "+235##-##-##-##",
  TG: "+228##-###-###",
  TH: "+66##-###-####",
  TJ: "+992##-###-####",
  TL: "+670###-#####",
  TM: "+993#-###-####",
  TN: "+216##-###-###",
  TO: "+676#####",
  TR: "+90(###) ###-####",
  TT: "+1(868) ###-####",
  TW: "+886#-####-####",
  TZ: "+255##-###-####",
  UA: "+380(##) ###-##-##",
  UG: "+256(###) ###-###",
  US: "+1(###) ###-####",
  UY: "+598#-###-##-##",
  UZ: "+998##-###-####",
  VC: "+1(784) ###-####",
  VE: "+58(###) ###-####",
  VG: "+1(284)###-####",
  VN: "+84(###) ####-###",
  VU: "+678##-#####",
  WS: "+685##-####",
  XK: "+383##-###-###",
  YE: "+967###-###-###",
  YT: "+262 ## ## ## ## ##",
  ZA: "+27##-###-####",
  ZM: "+260##-###-####",
  ZW: "+263#-######",
  VA: "+39 #### ###-####",
  WF: "+681 ## ##-##",
  VI: "+1(340) ###-####",
  JE: "+44(####) ######",
  AC: "+247###-####",
  TV: "+686###-####",
  TK: "+690###-####",
  TA: "+290###-####",
  SS: "+211### ###-###",
  SJ: "+47 ## ##-##-##",
  PS: "+970 #### ###-###",
  PR: "+1(###) ###-####",
  PM: "+508 ### ##-##-##",
  NU: "+683 ###-####",
  NR: "+674 ###-####",
  NF: "+672##-####",
  MP: "+1(670) ###-####",
  MH: "+692 ###-####",
  KI: "+686 ####-####",
  IO: "+246 ### ####",
  IM: "+44(####) ######",
  GU: "+1(###) ###-###",
  GG: "+44(###) ###-####",
  FO: "+298 ######",
  EH: "+212 #### #####",
  CX: "+61 # ####-####",
  CK: "+682 ## ###",
  CC: "+61 # ####-####",
  AX: "+358 ## ###-####",
  AS: "+1(###) ###-####"
});
var TUI_FOCUSABLE_ITEM_ACCESSOR = tuiCreateToken();
function tuiAsFocusableItemAccessor(accessor) {
  return tuiProvide(TUI_FOCUSABLE_ITEM_ACCESSOR, accessor);
}
var TUI_FONTS_READY = tuiCreateTokenFromFactory(() => from(inject(DOCUMENT).fonts?.ready || EMPTY).pipe(shareReplay({
  bufferSize: 1,
  refCount: false
})));
var TUI_ICON_STARTS = tuiCreateToken({});
var TUI_IS_APPLE = tuiCreateTokenFromFactory(() => isApple(inject(WA_NAVIGATOR)));
var TUI_IS_CHROMIUM = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW).chrome);
var TUI_IS_FIREFOX = tuiCreateTokenFromFactory(() => inject(WA_WINDOW)?.mozCancelFullScreen !== void 0);
var TUI_IS_STACKBLITZ = tuiCreateTokenFromFactory(() => inject(WA_WINDOW).location.host.endsWith("stackblitz.io"));
var TUI_MONTH_FORMATTER = tuiCreateToken();
var TUI_MONTH_FORMATTER_PROVIDER = {
  provide: TUI_MONTH_FORMATTER,
  deps: [TuiMonthPipe],
  useFactory: (pipe) => (month) => month ? pipe.transform(month).pipe(map((formatted) => `${formatted} ${month.formattedYear}`)) : of("")
};
var TUI_SANITIZER = tuiCreateToken();
var TUI_TEXTFIELD_APPEARANCE = tuiCreateToken("textfield");
var TUI_TEXTFIELD_HOST = tuiCreateToken();
function tuiAsTextfieldHost(host) {
  return tuiProvide(TUI_TEXTFIELD_HOST, host);
}
var TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(() => inject(WA_WINDOW).matchMedia("(any-pointer: coarse)").matches);
var TUI_VALUE_ACCESSOR = tuiCreateToken();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-classes.mjs
var TUI = "tui_interactive_";
var AbstractTuiInteractive = class _AbstractTuiInteractive {
  constructor() {
    this.autoIdString = `${TUI}${_AbstractTuiInteractive.autoId++}${Date.now()}`;
    this.focusVisible = false;
    this.pseudoHover = null;
    this.pseudoActive = null;
    this.pseudoFocus = null;
    this.focusable = true;
    this.nativeId = "";
    this.focusedChange = new EventEmitter();
    this.focusVisibleChange = new EventEmitter();
  }
  static {
    this.autoId = 0;
  }
  get computedDisabled() {
    return this.disabled;
  }
  get computedFocused() {
    return !this.computedDisabled && (this.pseudoFocus ?? this.focused);
  }
  get computedFocusVisible() {
    return !this.computedDisabled && (this.pseudoFocus ?? this.focusVisible);
  }
  get computedFocusable() {
    return !this.computedDisabled && (this.focusable || this.focused);
  }
  // TODO: 3.0 Consider removing since native input is exposed
  get id() {
    return this.nativeId || this.autoIdString;
  }
  updateFocused(focused) {
    this.focusedChange.emit(focused);
  }
  updateFocusVisible(focusVisible) {
    if (this.focusVisible === focusVisible) {
      return;
    }
    this.focusVisible = focusVisible;
    this.focusVisibleChange.emit(focusVisible);
  }
  static {
    this.ɵfac = function AbstractTuiInteractive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiInteractive)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiInteractive,
      hostVars: 7,
      hostBindings: function AbstractTuiInteractive_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-focused", ctx.pseudoFocus);
          ɵɵclassProp("_disabled", ctx.computedDisabled)("_focused", ctx.computedFocused)("_focus-visible", ctx.computedFocusVisible);
        }
      },
      inputs: {
        pseudoHover: "pseudoHover",
        pseudoActive: "pseudoActive",
        pseudoFocus: "pseudoFocus",
        focusable: "focusable",
        nativeId: "nativeId"
      },
      outputs: {
        focusedChange: "focusedChange",
        focusVisibleChange: "focusVisibleChange"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiInteractive, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[attr.data-focused]": "pseudoFocus",
        "[class._disabled]": "computedDisabled",
        "[class._focused]": "computedFocused",
        "[class._focus-visible]": "computedFocusVisible"
      }
    }]
  }], null, {
    pseudoHover: [{
      type: Input
    }],
    pseudoActive: [{
      type: Input
    }],
    pseudoFocus: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    nativeId: [{
      type: Input
    }],
    focusedChange: [{
      type: Output
    }],
    focusVisibleChange: [{
      type: Output
    }]
  });
})();
var AbstractTuiControl = class _AbstractTuiControl extends AbstractTuiInteractive {
  constructor() {
    super();
    this.ngControl = inject(NgControl, {
      optional: true
    });
    this.refresh$ = new Subject();
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.fallbackValue = this.getFallbackValue();
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.valueTransformer = inject(TuiValueTransformer, {
      optional: true
    });
    this.readOnly = false;
    this.pseudoInvalid = null;
    if (ngDevMode && this.ngControl === null) {
      console.assert(false, `NgControl not injected in ${this.constructor.name}!
`, "Use [(ngModel)] or [formControl] or formControlName for correct work.");
    }
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  get computedInvalid() {
    return this.interactive && (this.pseudoInvalid !== null ? this.pseudoInvalid : this.touched && this.invalid);
  }
  get value() {
    return this.previousInternalValue ?? this.fallbackValue;
  }
  set value(value) {
    this.updateValue(value);
  }
  get safeCurrentValue() {
    return this.rawValue ?? this.fallbackValue;
  }
  get invalid() {
    return this.safeNgControlData(({
      invalid
    }) => invalid, false);
  }
  get valid() {
    return this.safeNgControlData(({
      valid
    }) => valid, false);
  }
  get touched() {
    return this.safeNgControlData(({
      touched
    }) => touched, false);
  }
  get disabled() {
    return this.safeNgControlData(({
      disabled
    }) => disabled, false);
  }
  get interactive() {
    return !this.readOnly && !this.computedDisabled;
  }
  get control() {
    return this.safeNgControlData(({
      control
    }) => control, null);
  }
  get computedName() {
    return this.controlName?.toString() ?? null;
  }
  get controlName() {
    return this.ngControl?.name?.toString() ?? null;
  }
  ngOnInit() {
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.ngControl?.control), filter(tuiIsPresent), distinctUntilChanged(), switchMap((control) => merge(control.valueChanges, control.statusChanges, control.events || EMPTY)), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.refreshLocalValue(this.safeCurrentValue);
    });
  }
  checkControlUpdate() {
    this.cdr.markForCheck();
  }
  registerOnChange(onChange) {
    this.onChange = (componentValue) => {
      onChange(this.toControlValue(componentValue));
    };
    this.refresh$.next();
  }
  registerOnTouched(onTouched) {
    this.onTouched = onTouched;
  }
  setDisabledState() {
    this.checkControlUpdate();
  }
  writeValue(value) {
    const controlValue = this.ngControl instanceof NgModel && this.previousInternalValue === void 0 ? this.ngControl.model : value;
    this.refreshLocalValue(this.fromControlValue(controlValue));
  }
  updateFocused(focused) {
    if (!focused) {
      this.controlMarkAsTouched();
    }
    super.updateFocused(focused);
  }
  /**
   * @deprecated use `value` setter
   */
  updateValue(value) {
    if (this.disabled || this.valueIdenticalComparator(this.value, value)) {
      return;
    }
    this.previousInternalValue = value;
    this.controlSetValue(value);
  }
  valueIdenticalComparator(oldValue, newValue) {
    return oldValue === newValue;
  }
  get rawValue() {
    const {
      ngControl
    } = this;
    if (ngControl === null) {
      return void 0;
    }
    const controlValue = ngControl instanceof NgModel && this.previousInternalValue === void 0 ? ngControl.viewModel : ngControl.value;
    return this.fromControlValue(controlValue);
  }
  safeNgControlData(extractor, defaultFieldValue) {
    return (this.ngControl && extractor(this.ngControl)) ?? defaultFieldValue;
  }
  controlMarkAsTouched() {
    this.onTouched();
    this.checkControlUpdate();
  }
  controlSetValue(value) {
    this.onChange(value);
    this.checkControlUpdate();
  }
  refreshLocalValue(value) {
    this.previousInternalValue = value;
    this.checkControlUpdate();
  }
  fromControlValue(controlValue) {
    return this.valueTransformer ? this.valueTransformer.fromControlValue(controlValue) : controlValue;
  }
  toControlValue(componentValue) {
    return this.valueTransformer ? this.valueTransformer.toControlValue(componentValue) : componentValue;
  }
  static {
    this.ɵfac = function AbstractTuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiControl,
      hostVars: 4,
      hostBindings: function AbstractTuiControl_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_readonly", ctx.readOnly)("_invalid", ctx.computedInvalid);
        }
      },
      inputs: {
        readOnly: "readOnly",
        pseudoInvalid: "pseudoInvalid"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiControl, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[class._readonly]": "readOnly",
        "[class._invalid]": "computedInvalid"
      }
    }]
  }], function() {
    return [];
  }, {
    readOnly: [{
      type: Input
    }],
    pseudoInvalid: [{
      type: Input
    }]
  });
})();
function tuiAsControl2(control) {
  return [tuiProvide(AbstractTuiControl, control), tuiProvide(TuiControl, control)];
}
var AbstractTuiNativeSelect = class _AbstractTuiNativeSelect {
  constructor() {
    this.datalist = null;
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.host = inject(TUI_TEXTFIELD_HOST);
    this.control = inject(AbstractTuiControl);
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.disabledItemHandler = null;
    this.placeholder = "";
  }
  get id() {
    return this.el.id || this.autoId;
  }
  get emptyOption() {
    return !!this.placeholder && !this.control.value;
  }
  static {
    this.ɵfac = function AbstractTuiNativeSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiNativeSelect)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiNativeSelect,
      viewQuery: function AbstractTuiNativeSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDataListDirective, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function AbstractTuiNativeSelect_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.id);
        }
      },
      inputs: {
        disabledItemHandler: "disabledItemHandler",
        placeholder: "placeholder"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNativeSelect, [{
    type: Directive,
    args: [{
      standalone: false,
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    datalist: [{
      type: ViewChild,
      args: [TuiDataListDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    disabledItemHandler: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }]
  });
})();
var AbstractTuiTextfieldHost = class _AbstractTuiTextfieldHost {
  constructor() {
    this.host = inject(AbstractTuiControl, {
      optional: true
    });
  }
  get readOnly() {
    return this.host.readOnly;
  }
  get disabled() {
    return this.host.computedDisabled;
  }
  get invalid() {
    return this.host.computedInvalid;
  }
  get focusable() {
    return this.host.computedFocusable;
  }
  get inputMode() {
    return "text";
  }
  get value() {
    return this.host.value?.toString() || "";
  }
  process(_input) {
  }
  static {
    this.ɵfac = function AbstractTuiTextfieldHost_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiTextfieldHost)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiTextfieldHost
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiTextfieldHost, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiController = class _AbstractTuiController {
  constructor() {
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function AbstractTuiController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractTuiController)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiController,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiController, [{
    type: Directive
  }], null, null);
})();
var AbstractTuiMultipleControl = class _AbstractTuiMultipleControl extends AbstractTuiControl {
  clear() {
    this.value = [];
  }
  getFallbackValue() {
    return [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractTuiMultipleControl_BaseFactory;
      return function AbstractTuiMultipleControl_Factory(__ngFactoryType__) {
        return (ɵAbstractTuiMultipleControl_BaseFactory || (ɵAbstractTuiMultipleControl_BaseFactory = ɵɵgetInheritedFactory(_AbstractTuiMultipleControl)))(__ngFactoryType__ || _AbstractTuiMultipleControl);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiMultipleControl,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiMultipleControl, [{
    type: Directive
  }], null, null);
})();
var TuiNamedDay = class {
  constructor(day, name, displayDay = day) {
    this.day = day;
    this.name = name;
    this.displayDay = displayDay;
  }
  toString() {
    return this.name;
  }
};
var AbstractTuiNullableControl = class _AbstractTuiNullableControl extends AbstractTuiControl {
  getFallbackValue() {
    return null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractTuiNullableControl_BaseFactory;
      return function AbstractTuiNullableControl_Factory(__ngFactoryType__) {
        return (ɵAbstractTuiNullableControl_BaseFactory || (ɵAbstractTuiNullableControl_BaseFactory = ɵɵgetInheritedFactory(_AbstractTuiNullableControl)))(__ngFactoryType__ || _AbstractTuiNullableControl);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiNullableControl,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNullableControl, [{
    type: Directive
  }], null, null);
})();
var TuiStringifiableItem = class {
  constructor(item, stringify) {
    this.item = item;
    this.stringify = stringify;
  }
  toString() {
    return this.stringify(this.item);
  }
};

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-legacy-dropdown-open-monitor.mjs
var TuiLegacyDropdownOpenMonitorDirective = class _TuiLegacyDropdownOpenMonitorDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.host = inject(TuiDropdownOpen, {
      self: true
    });
    this.external = inject(TuiDropdownOpenLegacy, {
      optional: true
    });
  }
  ngAfterViewInit() {
    this.external?.tuiDropdownOpenChange.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((open) => {
      if (open) {
        tuiGetClosestFocusable({
          initial: this.el,
          root: this.el
        })?.focus();
      }
      this.host.toggle(open);
    });
    this.host.driver.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((open) => this.external?.tuiDropdownOpenChange.next(open));
  }
  static {
    this.ɵfac = function TuiLegacyDropdownOpenMonitorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLegacyDropdownOpenMonitorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLegacyDropdownOpenMonitorDirective,
      selectors: [["", "tuiDropdownOpenMonitor", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLegacyDropdownOpenMonitorDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpenMonitor]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-textfield-controller.mjs
var TuiTextfieldController = class {
  constructor(change$, options, legacyAppearance, appearanceDirective, cleanerDirective, customContentDirective, iconDirective, iconLeftDirective, labelOutsideDirective, sizeDirective, prefixDirective, postfixDirective, fillerDirective) {
    this.change$ = change$;
    this.options = options;
    this.legacyAppearance = legacyAppearance;
    this.appearanceDirective = appearanceDirective;
    this.cleanerDirective = cleanerDirective;
    this.customContentDirective = customContentDirective;
    this.iconDirective = iconDirective;
    this.iconLeftDirective = iconLeftDirective;
    this.labelOutsideDirective = labelOutsideDirective;
    this.sizeDirective = sizeDirective;
    this.prefixDirective = prefixDirective;
    this.postfixDirective = postfixDirective;
    this.fillerDirective = fillerDirective;
  }
  get appearance() {
    return this.appearanceDirective.appearance || this.legacyAppearance;
  }
  get cleaner() {
    return this.cleanerDirective.cleaner;
  }
  get customContent() {
    return this.customContentDirective.customContent || "";
  }
  get icon() {
    return this.iconDirective.icon;
  }
  get iconStart() {
    return this.iconLeftDirective.iconStart;
  }
  get labelOutside() {
    return this.labelOutsideDirective.labelOutside;
  }
  get size() {
    return this.sizeDirective.size;
  }
  get prefix() {
    return this.prefixDirective.prefix;
  }
  get postfix() {
    return this.postfixDirective.postfix;
  }
  get filler() {
    return this.fillerDirective.filler;
  }
};
var TUI_TEXTFIELD_DEFAULT_OPTIONS = {
  iconCleaner: "@tui.x",
  hintOnDisabled: false
};
var TUI_TEXTFIELD_OPTIONS2 = tuiCreateToken(TUI_TEXTFIELD_DEFAULT_OPTIONS);
function tuiTextfieldOptionsProvider(options) {
  return tuiProvideOptions(TUI_TEXTFIELD_OPTIONS2, options, TUI_TEXTFIELD_DEFAULT_OPTIONS);
}
var TUI_TEXTFIELD_APPEARANCE_DIRECTIVE = tuiCreateTokenFromFactory(() => new TuiTextfieldAppearanceDirective());
var TuiTextfieldAppearanceDirective = class _TuiTextfieldAppearanceDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.appearance = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldAppearanceDirective_BaseFactory;
      return function TuiTextfieldAppearanceDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldAppearanceDirective_BaseFactory || (ɵTuiTextfieldAppearanceDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldAppearanceDirective)))(__ngFactoryType__ || _TuiTextfieldAppearanceDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldAppearanceDirective,
      selectors: [["", "tuiTextfieldAppearance", ""]],
      inputs: {
        appearance: [0, "tuiTextfieldAppearance", "appearance"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, _TuiTextfieldAppearanceDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldAppearanceDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldAppearance]",
      providers: [tuiProvide(TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiTextfieldAppearanceDirective)]
    }]
  }], null, {
    appearance: [{
      type: Input,
      args: ["tuiTextfieldAppearance"]
    }]
  });
})();
var TUI_TEXTFIELD_CLEANER = tuiCreateTokenFromFactory(() => new TuiTextfieldCleanerDirective());
var TuiTextfieldCleanerDirective = class _TuiTextfieldCleanerDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.cleaner = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldCleanerDirective_BaseFactory;
      return function TuiTextfieldCleanerDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldCleanerDirective_BaseFactory || (ɵTuiTextfieldCleanerDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldCleanerDirective)))(__ngFactoryType__ || _TuiTextfieldCleanerDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldCleanerDirective,
      selectors: [["", "tuiTextfieldCleaner", ""]],
      inputs: {
        cleaner: [0, "tuiTextfieldCleaner", "cleaner"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_CLEANER, _TuiTextfieldCleanerDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCleanerDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_CLEANER, TuiTextfieldCleanerDirective)]
    }]
  }], null, {
    cleaner: [{
      type: Input,
      args: ["tuiTextfieldCleaner"]
    }]
  });
})();
var TUI_TEXTFIELD_CUSTOM_CONTENT = tuiCreateTokenFromFactory(() => new TuiTextfieldCustomContentDirective());
var TuiTextfieldCustomContentDirective = class _TuiTextfieldCustomContentDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldCustomContentDirective_BaseFactory;
      return function TuiTextfieldCustomContentDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldCustomContentDirective_BaseFactory || (ɵTuiTextfieldCustomContentDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldCustomContentDirective)))(__ngFactoryType__ || _TuiTextfieldCustomContentDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldCustomContentDirective,
      selectors: [["", "tuiTextfieldCustomContent", ""]],
      inputs: {
        customContent: [0, "tuiTextfieldCustomContent", "customContent"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, _TuiTextfieldCustomContentDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldCustomContentDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldCustomContent]",
      providers: [tuiProvide(TUI_TEXTFIELD_CUSTOM_CONTENT, TuiTextfieldCustomContentDirective)]
    }]
  }], null, {
    customContent: [{
      type: Input,
      args: ["tuiTextfieldCustomContent"]
    }]
  });
})();
var TUI_TEXTFIELD_FILLER = tuiCreateTokenFromFactory(() => new TuiTextfieldFillerDirective());
var TuiTextfieldFillerDirective = class _TuiTextfieldFillerDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.filler = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldFillerDirective_BaseFactory;
      return function TuiTextfieldFillerDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldFillerDirective_BaseFactory || (ɵTuiTextfieldFillerDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldFillerDirective)))(__ngFactoryType__ || _TuiTextfieldFillerDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldFillerDirective,
      selectors: [["", "tuiTextfieldFiller", ""]],
      inputs: {
        filler: [0, "tuiTextfieldFiller", "filler"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_FILLER, _TuiTextfieldFillerDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldFillerDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldFiller]",
      providers: [tuiProvide(TUI_TEXTFIELD_FILLER, TuiTextfieldFillerDirective)]
    }]
  }], null, {
    filler: [{
      type: Input,
      args: ["tuiTextfieldFiller"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON = tuiCreateTokenFromFactory(() => new TuiTextfieldIconDirective());
var TuiTextfieldIconDirective = class _TuiTextfieldIconDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldIconDirective_BaseFactory;
      return function TuiTextfieldIconDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldIconDirective_BaseFactory || (ɵTuiTextfieldIconDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldIconDirective)))(__ngFactoryType__ || _TuiTextfieldIconDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldIconDirective,
      selectors: [["", "tuiTextfieldIcon", ""]],
      inputs: {
        icon: [0, "tuiTextfieldIcon", "icon"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_ICON, _TuiTextfieldIconDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldIcon]",
      providers: [tuiProvide(TUI_TEXTFIELD_ICON, TuiTextfieldIconDirective)]
    }]
  }], null, {
    icon: [{
      type: Input,
      args: ["tuiTextfieldIcon"]
    }]
  });
})();
var TUI_TEXTFIELD_ICON_LEFT = tuiCreateTokenFromFactory(() => new TuiTextfieldIconLeftDirective());
var TuiTextfieldIconLeftDirective = class _TuiTextfieldIconLeftDirective extends AbstractTuiController {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldIconLeftDirective_BaseFactory;
      return function TuiTextfieldIconLeftDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldIconLeftDirective_BaseFactory || (ɵTuiTextfieldIconLeftDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldIconLeftDirective)))(__ngFactoryType__ || _TuiTextfieldIconLeftDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldIconLeftDirective,
      selectors: [["", "tuiTextfieldIconLeft", ""]],
      inputs: {
        iconStart: [0, "tuiTextfieldIconLeft", "iconStart"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_ICON_LEFT, _TuiTextfieldIconLeftDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldIconLeftDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldIconLeft]",
      providers: [tuiProvide(TUI_TEXTFIELD_ICON_LEFT, TuiTextfieldIconLeftDirective)]
    }]
  }], null, {
    iconStart: [{
      type: Input,
      args: ["tuiTextfieldIconLeft"]
    }]
  });
})();
var TUI_TEXTFIELD_LABEL_OUTSIDE = tuiCreateTokenFromFactory(() => new TuiTextfieldLabelOutsideDirective());
var TuiTextfieldLabelOutsideDirective = class _TuiTextfieldLabelOutsideDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.labelOutside = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldLabelOutsideDirective_BaseFactory;
      return function TuiTextfieldLabelOutsideDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldLabelOutsideDirective_BaseFactory || (ɵTuiTextfieldLabelOutsideDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldLabelOutsideDirective)))(__ngFactoryType__ || _TuiTextfieldLabelOutsideDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldLabelOutsideDirective,
      selectors: [["", "tuiTextfieldLabelOutside", ""]],
      inputs: {
        labelOutside: [0, "tuiTextfieldLabelOutside", "labelOutside"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, _TuiTextfieldLabelOutsideDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldLabelOutsideDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldLabelOutside]",
      providers: [tuiProvide(TUI_TEXTFIELD_LABEL_OUTSIDE, TuiTextfieldLabelOutsideDirective)]
    }]
  }], null, {
    labelOutside: [{
      type: Input,
      args: ["tuiTextfieldLabelOutside"]
    }]
  });
})();
var TUI_TEXTFIELD_POSTFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPostfixDirective());
var TuiTextfieldPostfixDirective = class _TuiTextfieldPostfixDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.postfix = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldPostfixDirective_BaseFactory;
      return function TuiTextfieldPostfixDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldPostfixDirective_BaseFactory || (ɵTuiTextfieldPostfixDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldPostfixDirective)))(__ngFactoryType__ || _TuiTextfieldPostfixDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldPostfixDirective,
      selectors: [["", "tuiTextfieldPostfix", ""]],
      inputs: {
        postfix: [0, "tuiTextfieldPostfix", "postfix"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_POSTFIX, _TuiTextfieldPostfixDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPostfixDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldPostfix]",
      providers: [tuiProvide(TUI_TEXTFIELD_POSTFIX, TuiTextfieldPostfixDirective)]
    }]
  }], null, {
    postfix: [{
      type: Input,
      args: ["tuiTextfieldPostfix"]
    }]
  });
})();
var TUI_TEXTFIELD_PREFIX = tuiCreateTokenFromFactory(() => new TuiTextfieldPrefixDirective());
var TuiTextfieldPrefixDirective = class _TuiTextfieldPrefixDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.prefix = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldPrefixDirective_BaseFactory;
      return function TuiTextfieldPrefixDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldPrefixDirective_BaseFactory || (ɵTuiTextfieldPrefixDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldPrefixDirective)))(__ngFactoryType__ || _TuiTextfieldPrefixDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldPrefixDirective,
      selectors: [["", "tuiTextfieldPrefix", ""]],
      inputs: {
        prefix: [0, "tuiTextfieldPrefix", "prefix"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_PREFIX, _TuiTextfieldPrefixDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldPrefixDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldPrefix]",
      providers: [tuiProvide(TUI_TEXTFIELD_PREFIX, TuiTextfieldPrefixDirective)]
    }]
  }], null, {
    prefix: [{
      type: Input,
      args: ["tuiTextfieldPrefix"]
    }]
  });
})();
var TUI_TEXTFIELD_SIZE = tuiCreateTokenFromFactory(() => new TuiTextfieldSizeDirective());
var TuiTextfieldSizeDirective = class _TuiTextfieldSizeDirective extends AbstractTuiController {
  constructor() {
    super(...arguments);
    this.size = "l";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldSizeDirective_BaseFactory;
      return function TuiTextfieldSizeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldSizeDirective_BaseFactory || (ɵTuiTextfieldSizeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldSizeDirective)))(__ngFactoryType__ || _TuiTextfieldSizeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldSizeDirective,
      selectors: [["", "tuiTextfieldSize", ""]],
      inputs: {
        size: [0, "tuiTextfieldSize", "size"]
      },
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_SIZE, _TuiTextfieldSizeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldSizeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiTextfieldSize]",
      providers: [tuiProvide(TUI_TEXTFIELD_SIZE, TuiTextfieldSizeDirective)]
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTextfieldSize"]
    }]
  });
})();
var TuiTextfieldControllerModule = class _TuiTextfieldControllerModule {
  static {
    this.ɵfac = function TuiTextfieldControllerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldControllerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTextfieldControllerModule,
      declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective, PolymorpheusOutlet, PolymorpheusTemplate]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldControllerModule, [{
    type: NgModule,
    args: [{
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      declarations: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective],
      exports: [TuiTextfieldAppearanceDirective, TuiTextfieldCleanerDirective, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldIconDirective, TuiTextfieldIconLeftDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiTextfieldFillerDirective, PolymorpheusOutlet, PolymorpheusTemplate]
    }]
  }], null, null);
})();
var TUI_TEXTFIELD_WATCHED_CONTROLLER = tuiCreateToken();
var TEXTFIELD_CONTROLLER_PROVIDER = [{
  provide: TUI_TEXTFIELD_WATCHED_CONTROLLER,
  deps: [ChangeDetectorRef, TUI_TEXTFIELD_OPTIONS2, TUI_TEXTFIELD_APPEARANCE, TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TUI_TEXTFIELD_CLEANER, TUI_TEXTFIELD_CUSTOM_CONTENT, TUI_TEXTFIELD_ICON, TUI_TEXTFIELD_ICON_LEFT, TUI_TEXTFIELD_LABEL_OUTSIDE, TUI_TEXTFIELD_SIZE, TUI_TEXTFIELD_PREFIX, TUI_TEXTFIELD_POSTFIX, TUI_TEXTFIELD_FILLER],
  useFactory: (cdr, options, legacyAppearance, ...controllers) => {
    const change$ = merge(...controllers.map(({
      change$: change$2
    }) => change$2 || NEVER)).pipe(tuiWatch(cdr), takeUntilDestroyed());
    change$.subscribe();
    return new TuiTextfieldController(change$, options, legacyAppearance, ...controllers);
  }
}];

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-unfinished-validator.mjs
function tuiCreateUnfinishedValidator(nativeInputGetter, message) {
  return ({
    value
  }) => {
    const nativeInput = nativeInputGetter();
    return value === null && nativeInput && tuiIsHTMLElement(nativeInput.nativeFocusableElement) && tuiIsInput(nativeInput.nativeFocusableElement) && nativeInput.nativeFocusableElement.value !== "" ? {
      unfinished: new TuiValidationError(message)
    } : null;
  };
}
var TuiUnfinishedValidator = class _TuiUnfinishedValidator {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.validate = tuiCreateUnfinishedValidator(() => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR), tuiInjectElement().getAttribute("tuiUnfinishedValidator") || "");
  }
  static {
    this.ɵfac = function TuiUnfinishedValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiUnfinishedValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnfinishedValidator,
      selectors: [["", "tuiUnfinishedValidator", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiUnfinishedValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiUnfinishedValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiUnfinishedValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-value-accessor.mjs
var TUI_VALUE_ACCESSOR_PROVIDER = {
  provide: TUI_VALUE_ACCESSOR,
  deps: [[new Optional(), new Self(), NG_VALUE_ACCESSOR]],
  useFactory: identity
};
var TuiValueAccessorDirective = class _TuiValueAccessorDirective {
  static {
    this.ɵfac = function TuiValueAccessorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueAccessorDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiValueAccessorDirective,
      selectors: [["", "tuiValueAccessor", ""]],
      features: [ɵɵProvidersFeature([TUI_VALUE_ACCESSOR_PROVIDER])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueAccessorDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiValueAccessor]",
      providers: [TUI_VALUE_ACCESSOR_PROVIDER]
    }]
  }], null, null);
})();
var TuiValueAccessorModule = class _TuiValueAccessorModule {
  static {
    this.ɵfac = function TuiValueAccessorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueAccessorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiValueAccessorModule,
      declarations: [TuiValueAccessorDirective],
      exports: [TuiValueAccessorDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueAccessorModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiValueAccessorDirective],
      exports: [TuiValueAccessorDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-directives-wrapper.mjs
var TuiWrapperDirective = class _TuiWrapperDirective {
  constructor() {
    this.disabled = false;
    this.readOnly = false;
    this.hover = null;
    this.active = null;
    this.focus = false;
    this.invalid = false;
    this.appearance = "";
  }
  get computedInvalid() {
    return !this.disabled && !this.readOnly && this.invalid;
  }
  get computedFocused() {
    return this.focus && !this.disabled;
  }
  get interactiveState() {
    if (this.disabled) {
      return "disabled";
    }
    if (this.readOnly) {
      return "readonly";
    }
    if (this.active) {
      return "active";
    }
    if (this.hover) {
      return "hover";
    }
    return null;
  }
  get noHover() {
    return this.readOnly || this.hover === false;
  }
  get noActive() {
    return this.readOnly || this.active === false;
  }
  static {
    this.ɵfac = function TuiWrapperDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWrapperDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWrapperDirective,
      selectors: [["", "tuiWrapper", ""]],
      hostAttrs: ["tuiAppearance", ""],
      hostVars: 10,
      hostBindings: function TuiWrapperDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.appearance)("data-state", ctx.interactiveState);
          ɵɵclassProp("_invalid", ctx.computedInvalid)("_focused", ctx.computedFocused)("_no-hover", ctx.noHover)("_no-active", ctx.noActive);
        }
      },
      inputs: {
        disabled: "disabled",
        readOnly: "readOnly",
        hover: "hover",
        active: "active",
        focus: "focus",
        invalid: "invalid",
        appearance: "appearance"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiWrapper]",
      host: {
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance",
        "[class._invalid]": "computedInvalid",
        "[class._focused]": "computedFocused",
        "[attr.data-state]": "interactiveState",
        "[class._no-hover]": "noHover",
        "[class._no-active]": "noActive"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    hover: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var TuiWrapperModule = class _TuiWrapperModule {
  static {
    this.ɵfac = function TuiWrapperModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWrapperModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiWrapperModule,
      declarations: [TuiWrapperDirective],
      exports: [TuiWrapperDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWrapperModule, [{
    type: NgModule,
    args: [{
      declarations: [TuiWrapperDirective],
      exports: [TuiWrapperDirective]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-arrow.mjs
function TuiArrowComponent_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 2);
  }
  if (rf & 2) {
    const src_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r1);
  }
}
function TuiArrowComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TUI_ARROW_DEFAULT_OPTIONS = {
  iconSmall: "@tui.chevron-down",
  iconLarge: "@tui.chevron-down"
};
var TUI_ARROW_OPTIONS = tuiCreateToken(TUI_ARROW_DEFAULT_OPTIONS);
function tuiArrowOptionsProvider(options) {
  return tuiProvideOptions(TUI_ARROW_OPTIONS, options, TUI_ARROW_DEFAULT_OPTIONS);
}
var TuiArrowComponent = class _TuiArrowComponent {
  constructor() {
    this.control = inject(AbstractTuiControl, {
      optional: true
    });
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.options = inject(TUI_ARROW_OPTIONS);
    this.directive = inject(TuiDropdownOpen, {
      optional: true
    });
  }
  get rotated() {
    return this.directive?.tuiDropdownOpen || !!this.control.pseudoOpen || false;
  }
  get small() {
    return !tuiSizeBigger(this.textfieldSize.size);
  }
  get arrowIcon() {
    return !this.small ? this.options.iconLarge : this.options.iconSmall;
  }
  static {
    this.ɵfac = function TuiArrowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiArrowComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiArrowComponent,
      selectors: [["tui-arrow"]],
      hostVars: 4,
      hostBindings: function TuiArrowComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_rotated", ctx.rotated)("_small", ctx.small);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 4,
      consts: [[3, "icon", 4, "polymorpheusOutlet"], [4, "ngIf"], [3, "icon"]],
      template: function TuiArrowComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiArrowComponent_tui_icon_0_Template, 1, 1, "tui-icon", 0)(1, TuiArrowComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.arrowIcon);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.directive == null ? null : ctx.directive.tuiDropdownOpenChange));
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiIcon],
      styles: ["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}tui-icon[_ngcontent-%COMP%]{border-width:.25rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiArrowComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-arrow",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._rotated]": "rotated",
        "[class._small]": "small"
      },
      template: '<tui-icon\n    *polymorpheusOutlet="arrowIcon as src"\n    [icon]="src"\n/>\n<ng-container *ngIf="directive?.tuiDropdownOpenChange | async" />\n',
      styles: [":host{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}:host._rotated{transform:rotate(180deg)}tui-icon{border-width:.25rem}\n"]
    }]
  }], null, null);
})();
var TUI_ARROW = new PolymorpheusComponent(TuiArrowComponent);
var TUI_ARROW_DEFAULT_MODE = {
  interactive: TUI_ARROW,
  disabled: TUI_ARROW
};
var TUI_ARROW_MODE = tuiCreateToken(TUI_ARROW_DEFAULT_MODE);
function tuiArrowModeProvider(options) {
  return tuiProvideOptions(TUI_ARROW_MODE, options, TUI_ARROW_DEFAULT_MODE);
}

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-utils.mjs
function tuiCapitalizeFirstLetter(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
var TUI_DATE_MODE_MASKITO_ADAPTER = {
  DMY: "dd/mm/yyyy",
  MDY: "mm/dd/yyyy",
  YMD: "yyyy/mm/dd"
};
function tuiFormatPhone(value, countryCode, phoneMask) {
  if (!value) {
    return "";
  }
  let result = countryCode;
  countryCode = countryCode.replaceAll(/[()]/g, "");
  if (!value.startsWith(countryCode)) {
    value = countryCode + value.replace(CHAR_PLUS, "");
  }
  const splitPhoneMask = phoneMask.split("");
  const splitValue = value.slice(countryCode.length).split("");
  result += " ";
  if (splitValue.length === 0) {
    return result;
  }
  for (const mask of splitPhoneMask) {
    if (splitValue.length === 0) {
      break;
    }
    if (mask === "#") {
      result += splitValue[0] || "";
      splitValue.splice(0, 1);
    } else {
      result += mask;
    }
  }
  return result;
}
var ITEM_SIZE = 1.5;
var CONTENT_SIZE = 2.5;
function tuiGetBorder(hasIcon, hasCleaner = false, hasTooltip = false, hasContent = false, size = "m") {
  const offset = size === "s" ? 0 : 0.25;
  let border = 0;
  if (hasIcon) {
    border += ITEM_SIZE + offset;
  }
  if (hasCleaner) {
    border += ITEM_SIZE + offset;
  }
  if (hasTooltip) {
    border += ITEM_SIZE + offset;
  }
  if (hasContent) {
    border += CONTENT_SIZE + offset;
  }
  return border;
}
function tuiGetMaxAllowedPhoneLength(countries, isoCode) {
  return countries[isoCode].replaceAll(/[()\- ]/g, "").length;
}
function tuiGetSafeAreaSize() {
  if (!CSS.supports("padding-top: env(safe-area-inset-top)")) {
    return 0;
  }
  const div = document.createElement("div");
  div.style.paddingTop = "env(safe-area-inset-top)";
  document.body.appendChild(div);
  const safeAreaSize = parseInt(window.getComputedStyle(div).paddingTop, 10) || 0;
  document.body.removeChild(div);
  return safeAreaSize;
}
var TUI_CACHE_BUSTING_PAYLOAD = `?v=${TUI_VERSION}`;
var DEFAULT_ICONS_PATH = (name) => name.includes(".svg#") ? name : `#${name}`;
function tuiIconsPathFactory(staticPath) {
  const base = staticPath.endsWith("/") ? staticPath : `${staticPath}/`;
  return (name) => {
    if (name.startsWith("tuiIcon")) {
      return `${base}${name}.svg${TUI_CACHE_BUSTING_PAYLOAD}#${name}`;
    }
    return DEFAULT_ICONS_PATH(name);
  };
}
var tuiIsApple = isApple;
function tuiIsPresumedHTMLString(candidate) {
  const trimmed = candidate.trim();
  return trimmed.startsWith("<") && trimmed.endsWith(">");
}
var MASK_AFTER_CODE_REGEXP = /\(#+\)|[#\- ]/g;
function tuiIsoToCountryCode(countriesMasks, isoCode) {
  return countriesMasks[isoCode].replaceAll(MASK_AFTER_CODE_REGEXP, "");
}
function tuiNotKzRegion(value) {
  const region = Number(value.slice(1, 4));
  return region < 600 || region > 799;
}
var WIDTH_SEARCH = 'width="';
var HEIGHT_SEARCH = 'height="';
var START = "<svg";
function tuiProcessIcon(source, name) {
  if (source.includes(`id="${name}"`)) {
    return source;
  }
  const src = source.slice(Math.max(0, source.indexOf(START)));
  const attributes = src.slice(0, Math.max(0, src.indexOf(">")));
  if (!attributes?.includes(WIDTH_SEARCH) || !attributes.includes(HEIGHT_SEARCH)) {
    return `${src.replace(START, `<svg xmlns="http://www.w3.org/2000/svg"><g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg`)}</g></svg>`;
  }
  const indexOfWidth = attributes.indexOf(WIDTH_SEARCH);
  const indexOfHeight = attributes.indexOf(HEIGHT_SEARCH);
  const widthOffset = indexOfWidth + WIDTH_SEARCH.length;
  const heightOffset = indexOfHeight + HEIGHT_SEARCH.length;
  const widthString = attributes.slice(widthOffset, attributes.indexOf('"', widthOffset));
  const heightString = attributes.slice(heightOffset, attributes.indexOf('"', heightOffset));
  if (!heightString || !widthString || widthString.includes("%") || heightString.includes("%") || widthString.includes("em") || heightString.includes("em")) {
    return src.replace(START, `<svg id="${name}"`);
  }
  const width = parseInt(widthString, 10);
  const height = parseInt(heightString, 10);
  return `<g id="${name}" xmlns="http://www.w3.org/2000/svg"><svg  x="50%" y="50%" width="${width / 16}em" height="${height / 16}em" overflow="visible" viewBox="0 0 ${width} ${height}"><svg x="${-width / 2}" y="${-height / 2}">${src}</svg></svg></g>`;
}
var FIXED_DROPDOWN_CONTROLLER_PROVIDER = tuiDropdownOptionsProvider({
  limitWidth: "fixed",
  align: "right"
});

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-tooltip.mjs
var TuiTooltipComponent = class _TuiTooltipComponent extends TuiHintOptionsDirective {
  constructor() {
    super(...arguments);
    this.describeId = "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTooltipComponent_BaseFactory;
      return function TuiTooltipComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTooltipComponent_BaseFactory || (ɵTuiTooltipComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTooltipComponent)))(__ngFactoryType__ || _TuiTooltipComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTooltipComponent,
      selectors: [["tui-tooltip"]],
      inputs: {
        content: "content",
        direction: "direction",
        appearance: "appearance",
        showDelay: "showDelay",
        hideDelay: "hideDelay",
        describeId: "describeId",
        context: "context"
      },
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 7,
      consts: [["automation-id", "tui-tooltip__icon", 3, "tuiHintAppearance", "tuiHintContext", "tuiHintDirection", "tuiHintHideDelay", "tuiHintShowDelay", "tuiTooltip", "tuiTooltipDescribe"]],
      template: function TuiTooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "tui-icon", 0);
        }
        if (rf & 2) {
          ɵɵproperty("tuiHintAppearance", ctx.appearance || "")("tuiHintContext", ctx.context)("tuiHintDirection", ctx.direction)("tuiHintHideDelay", ctx.hideDelay)("tuiHintShowDelay", ctx.showDelay)("tuiTooltip", ctx.content)("tuiTooltipDescribe", ctx.describeId);
        }
      },
      dependencies: [TuiIcon, TuiTooltip],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-tooltip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: ["content", "direction", "appearance", "showDelay", "hideDelay"],
      template: `<tui-icon
    automation-id="tui-tooltip__icon"
    [tuiHintAppearance]="appearance || ''"
    [tuiHintContext]="context"
    [tuiHintDirection]="direction"
    [tuiHintHideDelay]="hideDelay"
    [tuiHintShowDelay]="showDelay"
    [tuiTooltip]="content"
    [tuiTooltipDescribe]="describeId"
/>
`
    }]
  }], null, {
    describeId: [{
      type: Input
    }],
    context: [{
      type: Input
    }]
  });
})();
var TuiTooltipModule = class _TuiTooltipModule {
  static {
    this.ɵfac = function TuiTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTooltipModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTooltipModule,
      declarations: [TuiTooltipComponent],
      imports: [TuiIcon, TuiTooltip],
      exports: [TuiTooltipComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [TuiIcon, TuiTooltip],
      declarations: [TuiTooltipComponent],
      exports: [TuiTooltipComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-primitive-textfield.mjs
var _c0 = ["pre"];
var _c1 = ["focusableElement"];
var _c2 = [[["input"]], [["select"]], [["tuiContent"]], "*"];
var _c3 = ["input", "select", "tuiContent", "*"];
var _c4 = () => ({
  standalone: true
});
var _c5 = (a0) => ({
  $implicit: a0
});
function TuiPrimitiveTextfieldComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPrimitiveTextfieldComponent_div_13_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 19);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r2.toString());
  }
}
function TuiPrimitiveTextfieldComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_13_tui_icon_1_Template, 1, 1, "tui-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconLeftContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
function TuiPrimitiveTextfieldComponent_label_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 20);
    ɵɵprojection(1, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-placeholder_raised", ctx_r2.placeholderRaised);
    ɵɵproperty("for", ctx_r2.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_21_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r4);
  }
}
function TuiPrimitiveTextfieldComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_21_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.controller.customContent);
  }
}
function TuiPrimitiveTextfieldComponent_span_22_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 26);
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    ɵɵstyleProp("border", "0.25rem solid transparent");
    ɵɵproperty("icon", src_r6.toString());
  }
}
function TuiPrimitiveTextfieldComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 24);
    ɵɵlistener("click.stop", function TuiPrimitiveTextfieldComponent_span_22_Template_span_click_stop_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_span_22_tui_icon_1_Template, 1, 3, "tui-icon", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconCleaner || ctx_r2.controller.options.iconCleaner)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
function TuiPrimitiveTextfieldComponent_tui_tooltip_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tooltip", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("content", ctx_r2.hintOptions == null ? null : ctx_r2.hintOptions.content)("describeId", ctx_r2.computedId);
  }
}
function TuiPrimitiveTextfieldComponent_div_24_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 19);
  }
  if (rf & 2) {
    const src_r7 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r7.toString());
  }
}
function TuiPrimitiveTextfieldComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtemplate(1, TuiPrimitiveTextfieldComponent_div_24_tui_icon_1_Template, 1, 1, "tui-icon", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c5, ctx_r2.size));
  }
}
var _c6 = ["tuiTextfieldLegacy", ""];
var TuiValueDecorationComponent = class _TuiValueDecorationComponent {
  constructor() {
    this.textfield = inject(TUI_FOCUSABLE_ITEM_ACCESSOR);
    this.fontsReady$ = inject(TUI_FONTS_READY);
    this.prefix$ = new BehaviorSubject("");
    this.pre$ = merge(this.fontsReady$, this.prefix$).pipe(delay(0), filter(() => !!this.pre?.nativeElement.isConnected), map(() => this.pre?.nativeElement.offsetWidth || 0), distinctUntilChanged());
  }
  ngDoCheck() {
    this.prefix$.next(this.prefix);
  }
  get isContextTable() {
    return this.textfield.appearance === "table";
  }
  get filler() {
    const {
      focused,
      placeholder,
      exampleText,
      value,
      textfield
    } = this;
    if (placeholder && exampleText) {
      return "";
    }
    return focused ? exampleText || textfield.filler.slice(value.length) : "";
  }
  get value() {
    return this.textfield.value;
  }
  get prefix() {
    return this.decorationsVisible ? this.textfield.prefix : "";
  }
  get postfix() {
    return this.decorationsVisible ? this.computedPostfix : "";
  }
  get placeholder() {
    return this.textfield.nativeFocusableElement?.placeholder || "";
  }
  get exampleText() {
    return !this.value && this.focused ? this.placeholder : "";
  }
  get decorationsVisible() {
    return !!this.value || this.focused && !this.placeholder;
  }
  get focused() {
    return this.textfield.computedFocused && !this.textfield.readOnly;
  }
  get computedPostfix() {
    return this.textfield.postfix && (this.filler || this.value) ? ` ${this.textfield.postfix}` : this.textfield.postfix;
  }
  static {
    this.ɵfac = function TuiValueDecorationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValueDecorationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiValueDecorationComponent,
      selectors: [["tui-value-decoration"]],
      viewQuery: function TuiValueDecorationComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pre = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function TuiValueDecorationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationstart", function TuiValueDecorationComponent_animationstart_HostBindingHandler() {
            return ctx.ngDoCheck();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_table", ctx.isContextTable)("_filler", ctx.filler);
        }
      },
      decls: 5,
      vars: 4,
      consts: [["pre", ""], [1, "t-prefix", 3, "textContent"], [1, "t-ghost", 3, "textContent"], [1, "t-filler", 3, "textContent"], [1, "t-postfix", 3, "textContent"]],
      template: function TuiValueDecorationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "span", 1, 0)(2, "span", 2)(3, "span", 3)(4, "span", 4);
        }
        if (rf & 2) {
          ɵɵproperty("textContent", ctx.prefix);
          ɵɵadvance(2);
          ɵɵproperty("textContent", ctx.value);
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.filler);
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.postfix);
        }
      },
      styles: ['[_nghost-%COMP%]{position:absolute;display:block;inline-size:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-tertiary);animation:tuiPresent 1s;white-space:nowrap}._table[_nghost-%COMP%]{position:static;margin-top:0}._filler[_nghost-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]{line-height:calc(var(--tui-height) - .25rem)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix[_ngcontent-%COMP%], .t-postfix[_ngcontent-%COMP%]{white-space:pre;color:var(--tui-text-primary)}.t-filler[_ngcontent-%COMP%]{max-inline-size:100%;white-space:nowrap}']
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValueDecorationComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-value-decoration",
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "[class._table]": "isContextTable",
        "[class._filler]": "filler",
        "(animationstart)": "ngDoCheck()"
      },
      template: '<span\n    #pre\n    class="t-prefix"\n    [textContent]="prefix"\n></span>\n<span\n    class="t-ghost"\n    [textContent]="value"\n></span>\n<span\n    class="t-filler"\n    [textContent]="filler"\n></span>\n<span\n    class="t-postfix"\n    [textContent]="postfix"\n></span>\n',
      styles: [':host{position:absolute;display:block;inline-size:100%;line-height:var(--tui-height);margin-top:calc(var(--tui-height) / -2);box-sizing:content-box;color:var(--tui-text-tertiary);animation:tuiPresent 1s;white-space:nowrap}:host._table{position:static;margin-top:0}:host._filler{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)) :host{line-height:calc(var(--tui-height) - .25rem)}.t-ghost{visibility:hidden;white-space:pre;text-overflow:clip}.t-prefix,.t-postfix{white-space:pre;color:var(--tui-text-primary)}.t-filler{max-inline-size:100%;white-space:nowrap}\n']
    }]
  }], null, {
    pre: [{
      type: ViewChild,
      args: ["pre", {
        read: ElementRef,
        static: true
      }]
    }]
  });
})();
var TUI_ICON_START_PADDINGS = {
  s: 1.25,
  m: 1.75,
  l: 2.25
};
var TuiPrimitiveTextfieldComponent = class _TuiPrimitiveTextfieldComponent extends AbstractTuiInteractive {
  constructor() {
    super(...arguments);
    this.legacyOptions = inject(TUI_TEXTFIELD_OPTIONS2);
    this.el = tuiInjectElement();
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.autofilled = false;
    this.editable = true;
    this.iconCleaner = this.legacyOptions.iconCleaner;
    this.readOnly = false;
    this.invalid = false;
    this.disabled = false;
    this.value = "";
    this.valueChange = new EventEmitter();
  }
  get prefix() {
    return this.controller.prefix;
  }
  get postfix() {
    return this.controller.postfix;
  }
  get filler() {
    return this.controller.filler;
  }
  get nativeFocusableElement() {
    if (this.computedDisabled || !this.focusableElement) {
      return null;
    }
    const {
      nativeElement
    } = this.focusableElement;
    return nativeElement.previousElementSibling || nativeElement;
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el);
  }
  get appearance() {
    return this.options.appearance() === "table" ? "table" : this.controller.appearance;
  }
  onModelChange(value) {
    this.updateValue(value);
  }
  get size() {
    return this.controller.size;
  }
  get computedInvalid() {
    return !this.readOnly && !this.disabled && this.invalid;
  }
  get inputHidden() {
    return !!this.content?.length;
  }
  get borderStart() {
    return this.iconLeftContent ? this.iconPaddingLeft : 0;
  }
  get borderEnd() {
    return tuiGetBorder(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
  }
  get hasValue() {
    return !!this.value;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && !this.computedDisabled && !this.readOnly;
  }
  get hasTooltip() {
    return !!this.hintOptions?.content && !this.computedDisabled;
  }
  get hasCustomContent() {
    return !!this.controller.customContent;
  }
  get placeholderVisible() {
    const hasDecor = this.nativeFocusableElement?.placeholder || this.prefix || this.postfix || this.filler;
    const showDecor = hasDecor && !this.readOnly && this.computedFocused;
    return !this.hasValue && !showDecor;
  }
  get hasPlaceholder() {
    return this.placeholderRaisable || this.placeholderVisible;
  }
  get placeholderRaised() {
    return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue || this.autofilled);
  }
  get iconContent() {
    return this.controller.icon;
  }
  get iconLeftContent() {
    return this.controller.iconStart;
  }
  get showHint() {
    return !!this.hintOptions?.content && (this.legacyOptions.hintOnDisabled || !this.computedDisabled);
  }
  // Safari expiration date autofill workaround
  get name() {
    return this.nativeFocusableElement?.autocomplete === "cc-exp" ? "ccexpiryyear" : null;
  }
  get computedId() {
    return this.nativeFocusableElement?.id || "";
  }
  getIndent$(element) {
    return fromEvent(element, "scroll").pipe(map(() => -1 * Math.max(element.scrollLeft, 0)));
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  clear() {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = "";
    }
    this.updateValue("");
  }
  onMouseDown(event) {
    const {
      nativeFocusableElement
    } = this;
    if (!nativeFocusableElement || event.target === nativeFocusableElement) {
      return;
    }
    event.preventDefault();
    nativeFocusableElement.focus();
  }
  transitionStartHandler({
    propertyName,
    target
  }) {
    const matchedAutofill = propertyName.includes("box-shadow") && target?.matches("input");
    if (matchedAutofill) {
      this.onAutofilled(!this.autofilled);
    }
  }
  onAutofilled(autofilled) {
    this.updateAutofilled(autofilled);
  }
  detectRetargetFromLabel(event) {
    if (tuiRetargetedBoundaryCrossing(event)) {
      event.stopImmediatePropagation();
    }
  }
  get iconPaddingLeft() {
    return TUI_ICON_START_PADDINGS[this.size];
  }
  get placeholderRaisable() {
    return this.size !== "s" && !this.controller.labelOutside;
  }
  updateAutofilled(autofilled) {
    if (this.autofilled === autofilled) {
      return;
    }
    this.autofilled = autofilled;
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPrimitiveTextfieldComponent_BaseFactory;
      return function TuiPrimitiveTextfieldComponent_Factory(__ngFactoryType__) {
        return (ɵTuiPrimitiveTextfieldComponent_BaseFactory || (ɵTuiPrimitiveTextfieldComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiPrimitiveTextfieldComponent)))(__ngFactoryType__ || _TuiPrimitiveTextfieldComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPrimitiveTextfieldComponent,
      selectors: [["tui-primitive-textfield"]],
      contentQueries: function TuiPrimitiveTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, PolymorpheusOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t);
        }
      },
      viewQuery: function TuiPrimitiveTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusableElement = _t.first);
        }
      },
      hostVars: 15,
      hostBindings: function TuiPrimitiveTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiPrimitiveTextfieldComponent_focusin_HostBindingHandler() {
            return ctx.onFocused(true);
          })("focusout", function TuiPrimitiveTextfieldComponent_focusout_HostBindingHandler() {
            return ctx.onFocused(false);
          })("transitionstart.capture", function TuiPrimitiveTextfieldComponent_transitionstart_capture_HostBindingHandler($event) {
            return ctx.transitionStartHandler($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--border-start", ctx.borderStart, "rem")("--border-end", ctx.borderEnd, "rem");
          ɵɵclassProp("_readonly", ctx.readOnly)("_hidden", ctx.inputHidden)("_invalid", ctx.computedInvalid)("_autofilled", ctx.autofilled)("_label-outside", ctx.options.appearance() === "table" || ctx.controller.labelOutside);
        }
      },
      inputs: {
        editable: "editable",
        iconCleaner: "iconCleaner",
        readOnly: "readOnly",
        invalid: "invalid",
        disabled: "disabled",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c3,
      decls: 25,
      vars: 40,
      consts: [["focusableElement", ""], ["decor", ""], [4, "ngIf"], ["automation-id", "tui-primitive-textfield__wrapper", "tuiWrapper", "", 3, "click.prevent.silent", "mousedown", "active", "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], ["automation-id", "tui-primitive-textfield__native-input", 1, "t-input", 3, "ngModelChange", "disabled", "id", "ngModel", "ngModelOptions", "readOnly", "tabIndex"], ["automation-id", "tui-primitive-textfield__value", 1, "t-input", "t-input_template"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], [1, "t-wrapper"], ["automation-id", "tui-primitive-textfield__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", "for", 4, "ngIf"], [1, "t-wrapper-value-decoration"], ["aria-hidden", "true", "automation-id", "tui-primitive-textfield__value-decoration", 1, "t-value-decoration"], [1, "t-icons"], ["automation-id", "tui-primitive-textfield__custom-content", "class", "t-custom-content", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", "class", "t-cleaner", 3, "click.stop", 4, "ngIf"], ["automation-id", "tui-primitive-textfield__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["tuiAppearance", "icon", 3, "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "icon"], ["automation-id", "tui-primitive-textfield__placeholder", 1, "t-placeholder", 3, "for"], ["automation-id", "tui-primitive-textfield__custom-content", 1, "t-custom-content"], ["class", "t-custom-icon", 3, "icon", 4, "polymorpheusOutlet"], [1, "t-custom-icon", 3, "icon"], ["appearance", "icon", "automation-id", "tui-primitive-textfield__cleaner", "tuiWrapper", "", 1, "t-cleaner", 3, "click.stop"], [3, "icon", "border", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "icon"], ["automation-id", "tui-primitive-textfield__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
      template: function TuiPrimitiveTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c2);
          ɵɵtemplate(0, TuiPrimitiveTextfieldComponent_ng_container_0_Template, 1, 0, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiPrimitiveTextfieldComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
          ɵɵpipe(3, "async");
          ɵɵelementStart(4, "div", 3);
          ɵɵpipe(5, "async");
          ɵɵlistener("click.prevent.silent", function TuiPrimitiveTextfieldComponent_Template_div_click_prevent_silent_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.detectRetargetFromLabel($event));
          })("mousedown", function TuiPrimitiveTextfieldComponent_Template_div_mousedown_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMouseDown($event));
          });
          ɵɵprojection(6);
          ɵɵprojection(7, 1);
          ɵɵelementStart(8, "input", 4, 0);
          ɵɵlistener("ngModelChange", function TuiPrimitiveTextfieldComponent_Template_input_ngModelChange_8_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onModelChange($event));
          });
          ɵɵelementEnd();
          ɵɵelementStart(10, "div", 5);
          ɵɵprojection(11, 2);
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 6);
          ɵɵtemplate(13, TuiPrimitiveTextfieldComponent_div_13_Template, 2, 4, "div", 7);
          ɵɵelementStart(14, "div", 8);
          ɵɵtemplate(15, TuiPrimitiveTextfieldComponent_label_15_Template, 2, 3, "label", 9);
          ɵɵelementStart(16, "div", 10);
          ɵɵelement(17, "tui-value-decoration", 11, 1);
          ɵɵpipe(19, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(20, "div", 12);
          ɵɵtemplate(21, TuiPrimitiveTextfieldComponent_div_21_Template, 2, 1, "div", 13)(22, TuiPrimitiveTextfieldComponent_span_22_Template, 2, 4, "span", 14)(23, TuiPrimitiveTextfieldComponent_tui_tooltip_23_Template, 1, 2, "tui-tooltip", 15)(24, TuiPrimitiveTextfieldComponent_div_24_Template, 2, 4, "div", 16);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          const focusableElement_r8 = ɵɵreference(9);
          const decor_r9 = ɵɵreference(18);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 31, ctx.content == null ? null : ctx.content.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 33, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
          ɵɵadvance(2);
          ɵɵstyleProp("--text-indent", ɵɵpipeBind1(5, 35, decor_r9.pre$), "px");
          ɵɵproperty("active", ctx.pseudoActive)("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
          ɵɵadvance(4);
          ɵɵproperty("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.value)("ngModelOptions", ɵɵpureFunction0(39, _c4))("readOnly", ctx.readOnly || !ctx.editable)("tabIndex", ctx.computedFocusable ? 0 : -1);
          ɵɵattribute("aria-invalid", ctx.computedInvalid)("name", ctx.name);
          ɵɵadvance(2);
          ɵɵclassProp("t-input_template_hidden", !ctx.inputHidden);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.iconLeftContent);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.hasPlaceholder);
          ɵɵadvance(2);
          ɵɵstyleProp("text-indent", ɵɵpipeBind1(19, 37, ctx.getIndent$(focusableElement_r8)), "px");
          ɵɵclassProp("t-has-value", ctx.value);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.hasCustomContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCleaner);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showHint);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.iconContent);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiWrapperDirective, TuiTooltipComponent, TuiIcon, TuiAppearance, TuiValueDecorationComponent, AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none][_ngcontent-%COMP%]{caret-color:transparent}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]{padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em}.t-content[_ngcontent-%COMP%]{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin:0 .125rem 0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-start:-.125rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size=s])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}[_nghost-%COMP%]     input{transition:box-shadow .01s}._autofilled[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], ._autofilled[_nghost-%COMP%]   .t-value-decoration[_ngcontent-%COMP%]:not(.t-has-value){visibility:hidden}[data-size=s][_nghost-%COMP%]   tui-icon[_ngcontent-%COMP%]{border-width:.25rem}.t-custom-content[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;min-inline-size:2rem;block-size:2rem;pointer-events:none}.t-custom-icon[_ngcontent-%COMP%]{inline-size:2rem;block-size:100%}.t-input[_ngcontent-%COMP%]:not(:first-child){display:none}[data-size][_nghost-%COMP%]   .t-input_template[_ngcontent-%COMP%]{display:flex;inline-size:calc(100% - 1rem);max-inline-size:calc(100% - 1rem);align-items:center;pointer-events:none;padding-inline-end:0}.t-input_template_hidden[_ngcontent-%COMP%]{display:none}.t-text-template[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration[_ngcontent-%COMP%]{position:relative;pointer-events:none}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiPrimitiveTextfieldComponent.prototype, "getIndent$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-primitive-textfield",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiPrimitiveTextfieldComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "[class._readonly]": "readOnly",
        "[class._hidden]": "inputHidden",
        "[class._invalid]": "computedInvalid",
        "[class._autofilled]": "autofilled",
        "[style.--border-start.rem]": "borderStart",
        "[style.--border-end.rem]": "borderEnd",
        "[class._label-outside]": 'options.appearance() === "table" || controller.labelOutside',
        "(focusin)": "onFocused(true)",
        "(focusout)": "onFocused(false)",
        "(transitionstart.capture)": "transitionStartHandler($event)"
      },
      template: `<ng-container *ngIf="content?.changes | async" />
<ng-container *ngIf="hintOptions?.change$ | async" />
<div
    automation-id="tui-primitive-textfield__wrapper"
    tuiWrapper
    [active]="pseudoActive"
    [appearance]="appearance"
    [disabled]="disabled"
    [focus]="computedFocused"
    [hover]="pseudoHover"
    [invalid]="computedInvalid"
    [readOnly]="readOnly"
    [style.--text-indent.px]="decor.pre$ | async"
    (click.prevent.silent)="detectRetargetFromLabel($event)"
    (mousedown)="onMouseDown($event)"
>
    <ng-content select="input" />
    <ng-content select="select" />
    <input
        #focusableElement
        automation-id="tui-primitive-textfield__native-input"
        class="t-input"
        [attr.aria-invalid]="computedInvalid"
        [attr.name]="name"
        [disabled]="computedDisabled"
        [id]="id"
        [ngModel]="value"
        [ngModelOptions]="{standalone: true}"
        [readOnly]="readOnly || !editable"
        [tabIndex]="computedFocusable ? 0 : -1"
        (ngModelChange)="onModelChange($event)"
    />
    <div
        automation-id="tui-primitive-textfield__value"
        class="t-input t-input_template"
        [class.t-input_template_hidden]="!inputHidden"
    >
        <ng-content select="tuiContent" />
    </div>
    <div class="t-content">
        <div
            *ngIf="iconLeftContent"
            class="t-icon t-icon_left t-textfield-icon"
        >
            <tui-icon
                *polymorpheusOutlet="iconLeftContent as src; context: {$implicit: size}"
                tuiAppearance="icon"
                [icon]="src.toString()"
            />
        </div>
        <div class="t-wrapper">
            <label
                *ngIf="hasPlaceholder"
                automation-id="tui-primitive-textfield__placeholder"
                class="t-placeholder"
                [class.t-placeholder_raised]="placeholderRaised"
                [for]="computedId"
            >
                <ng-content />
            </label>
            <div class="t-wrapper-value-decoration">
                <tui-value-decoration
                    #decor
                    aria-hidden="true"
                    automation-id="tui-primitive-textfield__value-decoration"
                    class="t-value-decoration"
                    [class.t-has-value]="value"
                    [style.textIndent.px]="getIndent$(focusableElement) | async"
                />
            </div>
        </div>
        <div class="t-icons">
            <div
                *ngIf="hasCustomContent"
                automation-id="tui-primitive-textfield__custom-content"
                class="t-custom-content"
            >
                <tui-icon
                    *polymorpheusOutlet="controller.customContent as src"
                    class="t-custom-icon"
                    [icon]="src"
                />
            </div>
            <span
                *ngIf="hasCleaner"
                appearance="icon"
                automation-id="tui-primitive-textfield__cleaner"
                tuiWrapper
                class="t-cleaner"
                (click.stop)="clear()"
            >
                <tui-icon
                    *polymorpheusOutlet="
                        iconCleaner || controller.options.iconCleaner as src;
                        context: {$implicit: size}
                    "
                    [icon]="src.toString()"
                    [style.border]="'0.25rem solid transparent'"
                />
            </span>
            <tui-tooltip
                *ngIf="showHint"
                automation-id="tui-primitive-textfield__tooltip"
                class="t-tooltip"
                [content]="hintOptions?.content"
                [describeId]="computedId"
            />
            <div
                *ngIf="iconContent"
                class="t-icon t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
        </div>
    </div>
</div>
`,
      styles: [':host{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}:host[data-size=s]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}:host[data-size=m]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}:host[data-size=l]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}:host :host-context(*:disabled){pointer-events:none}.t-input{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input:-webkit-autofill,.t-input:-webkit-autofill:hover,.t-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none]{caret-color:transparent}.t-input:-webkit-autofill,.t-input:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input::-webkit-caps-lock-indicator,.t-input::-webkit-contacts-auto-fill-button,.t-input::-webkit-credit-card-auto-fill-button,.t-input::-webkit-credentials-auto-fill-button,.t-input::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused:not(._readonly) .t-input::placeholder,:host-context(tui-primitive-textfield._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-textarea._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-text-area._focused:not(._readonly)) .t-input::placeholder{opacity:1}:host[data-size=s] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="s"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="s"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="s"]):not(tui-text-area){padding:0 var(--tui-padding-s)}:host[data-size=m] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="m"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="m"]):not(tui-text-area){padding:0 var(--tui-padding-m)}:host[data-size=l] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="l"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="l"]):not(tui-text-area){padding:0 var(--tui-padding-l)}:host._disabled .t-input,.t-input :host-context(tui-primitive-textfield._disabled),.t-input :host-context(tui-textarea._disabled),.t-input :host-context(tui-text-area._disabled){pointer-events:none}:host[data-size=l]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1.25rem}:host[data-size=m]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1rem}:host[data-size=l]:not(._label-outside) .t-input{padding-top:1.25rem}:host[data-size=l]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.8156rem;transform:translateY(-.625rem)}:host[data-size=m]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.69rem;transform:translateY(-.5rem)}:host._hidden input.t-input,.t-input :host-context(tui-primitive-textfield._hidden){opacity:0;text-indent:-10em}.t-content{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}:host[data-size=s] .t-content{padding:0 var(--tui-padding-s)}:host[data-size=m] .t-content{padding:0 var(--tui-padding-m)}:host[data-size=l] .t-content{padding:0 var(--tui-padding-l)}.t-wrapper{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised{transform:translateY(-.625rem)}:host[data-size=m] .t-placeholder_raised{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}:host._invalid:not(._focused) .t-placeholder_raised,:host._invalid:not(._focused):hover .t-placeholder_raised{color:var(--tui-text-negative)}:host._focused .t-placeholder,:host[data-size=m]._focused._label-outside .t-placeholder,:host[data-size=l]._focused._label-outside .t-placeholder{color:var(--tui-text-tertiary)}:host[data-size=l] .t-placeholder{font:var(--tui-font-text-m);line-height:1.25rem}:host[data-size=l] .t-placeholder_raised{font-size:.8156rem}:host[data-size=m]._focused:not(._label-outside) .t-placeholder,:host[data-size=l]._focused:not(._label-outside) .t-placeholder{color:var(--tui-text-primary)}.t-cleaner{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}:host._readonly .t-cleaner,:host._disabled .t-cleaner{pointer-events:none}.t-icon{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}:host[data-size=s] .t-icon_left{margin:0 .125rem 0 -.375rem}:host[data-size=m] .t-icon_left{margin-inline-start:-.125rem;margin-inline-end:.375rem}:host[data-size=l] .t-icon_left{margin-inline-end:.75rem}.t-icons{display:flex;align-items:center}:host[data-size=m] .t-icons{margin-inline-end:-.125rem}:host[data-size=s] .t-icons{margin-inline-end:-.375rem}:host:not([data-size=s]) .t-icons>:not(:first-child){margin-inline-start:.25rem}:host ::ng-deep input{transition:box-shadow .01s}:host._autofilled[data-size=s] .t-placeholder,:host._autofilled._label-outside .t-placeholder,:host._autofilled .t-value-decoration:not(.t-has-value){visibility:hidden}:host[data-size=s] tui-icon{border-width:.25rem}.t-custom-content{position:relative;display:flex;align-items:center;justify-content:center;min-inline-size:2rem;block-size:2rem;pointer-events:none}.t-custom-icon{inline-size:2rem;block-size:100%}.t-input:not(:first-child){display:none}:host[data-size] .t-input_template{display:flex;inline-size:calc(100% - 1rem);max-inline-size:calc(100% - 1rem);align-items:center;pointer-events:none;padding-inline-end:0}.t-input_template_hidden{display:none}.t-text-template{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-wrapper-value-decoration{position:relative;pointer-events:none}\n']
    }]
  }], null, {
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    content: [{
      type: ContentChildren,
      args: [PolymorpheusOutlet, {
        descendants: true
      }]
    }],
    editable: [{
      type: Input
    }],
    iconCleaner: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    getIndent$: []
  });
})();
var TuiPrimitiveTextfieldDirective = class _TuiPrimitiveTextfieldDirective extends AbstractTuiTextfieldHost {
  constructor() {
    super(...arguments);
    this.host = inject(TuiPrimitiveTextfieldComponent);
  }
  get readOnly() {
    return this.host.readOnly || !this.host.editable;
  }
  onValueChange(value) {
    this.host.onModelChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPrimitiveTextfieldDirective_BaseFactory;
      return function TuiPrimitiveTextfieldDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPrimitiveTextfieldDirective_BaseFactory || (ɵTuiPrimitiveTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPrimitiveTextfieldDirective)))(__ngFactoryType__ || _TuiPrimitiveTextfieldDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPrimitiveTextfieldDirective,
      selectors: [["tui-primitive-textfield"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiPrimitiveTextfieldDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-primitive-textfield",
      providers: [tuiAsTextfieldHost(TuiPrimitiveTextfieldDirective)]
    }]
  }], null, null);
})();
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.host = inject(TUI_TEXTFIELD_HOST);
    this.host.process(this.el);
  }
  get id() {
    return this.el.id || this.autoId;
  }
  get inputMode() {
    return this.el.inputMode || this.host.inputMode;
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["input", "tuiTextfieldLegacy", ""], ["textarea", "tuiTextfieldLegacy", ""]],
      hostAttrs: ["type", "text"],
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiTextfieldComponent_input_HostBindingHandler($event) {
            return ctx.host.onValueChange($event.target.value);
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", ctx.host.focusable ? 0 : -1)("readOnly", ctx.host.readOnly)("value", ctx.host.value);
          ɵɵattribute("id", ctx.id)("inputMode", ctx.inputMode)("aria-invalid", ctx.host.invalid)("disabled", ctx.host.disabled || null);
        }
      },
      features: [ɵɵProvidersFeature([TEXTFIELD_CONTROLLER_PROVIDER])],
      attrs: _c6,
      decls: 0,
      vars: 0,
      template: function TuiTextfieldComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:hover, [_nghost-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}[inputMode=none][_nghost-%COMP%]{caret-color:transparent}[_nghost-%COMP%]:-webkit-autofill, [_nghost-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}[_nghost-%COMP%]::-webkit-caps-lock-indicator, [_nghost-%COMP%]::-webkit-contacts-auto-fill-button, [_nghost-%COMP%]::-webkit-credit-card-auto-fill-button, [_nghost-%COMP%]::-webkit-credentials-auto-fill-button, [_nghost-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}[_nghost-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   [_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), [_nghost-%COMP%]   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), [_nghost-%COMP%]   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], [_nghost-%COMP%]   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost, [_nghost-%COMP%]   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   -shadowcsshost{padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   [_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em}textarea[_nghost-%COMP%]{white-space:pre-wrap}textarea[_nghost-%COMP%]   tui-textarea._ios[_nghost-%COMP%], tui-textarea._ios   [_nghost-%COMP%], textarea[_nghost-%COMP%]   tui-text-area._ios[_nghost-%COMP%], tui-text-area._ios   [_nghost-%COMP%]{padding-left:.8125rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "input[tuiTextfieldLegacy], textarea[tuiTextfieldLegacy]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        type: "text",
        "[attr.id]": "id",
        "[attr.inputMode]": "inputMode",
        "[attr.aria-invalid]": "host.invalid",
        "[attr.disabled]": "host.disabled || null",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "[readOnly]": "host.readOnly",
        "[value]": "host.value",
        "(input)": "host.onValueChange($event.target.value)"
      },
      styles: [':host{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}:host:-webkit-autofill,:host:-webkit-autofill:hover,:host:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}:host[inputMode=none]{caret-color:transparent}:host:-webkit-autofill,:host:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}:host::-webkit-caps-lock-indicator,:host::-webkit-contacts-auto-fill-button,:host::-webkit-credit-card-auto-fill-button,:host::-webkit-credentials-auto-fill-button,:host::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}:host::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused:not(._readonly) :host::placeholder,:host-context(tui-primitive-textfield._focused:not(._readonly)) :host::placeholder,:host-context(tui-textarea._focused:not(._readonly)) :host::placeholder,:host-context(tui-text-area._focused:not(._readonly)) :host::placeholder{opacity:1}:host[data-size=s] :host,:host :host-context(tui-primitive-textfield[data-size="s"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="s"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="s"]):not(tui-text-area){padding:0 var(--tui-padding-s)}:host[data-size=m] :host,:host :host-context(tui-primitive-textfield[data-size="m"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="m"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="m"]):not(tui-text-area){padding:0 var(--tui-padding-m)}:host[data-size=l] :host,:host :host-context(tui-primitive-textfield[data-size="l"]):not(tui-primitive-textfield),:host :host-context(tui-textarea[data-size="l"]):not(tui-textarea),:host :host-context(tui-text-area[data-size="l"]):not(tui-text-area){padding:0 var(--tui-padding-l)}:host._disabled :host,:host :host-context(tui-primitive-textfield._disabled),:host :host-context(tui-textarea._disabled),:host :host-context(tui-text-area._disabled){pointer-events:none}:host[data-size=l]:not(._label-outside) :host,:host :host-context(tui-primitive-textfield[data-size="l"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1.25rem}:host[data-size=m]:not(._label-outside) :host,:host :host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1rem}:host[data-size=l]:not(._label-outside) :host{padding-top:1.25rem}:host[data-size=l]:not(._label-outside) :host:-webkit-autofill+.t-content .t-placeholder{font-size:.8156rem;transform:translateY(-.625rem)}:host[data-size=m]:not(._label-outside) :host:-webkit-autofill+.t-content .t-placeholder{font-size:.69rem;transform:translateY(-.5rem)}:host._hidden input:host,:host :host-context(tui-primitive-textfield._hidden){opacity:0;text-indent:-10em}textarea:host{white-space:pre-wrap}textarea:host :host-context(tui-textarea._ios),textarea:host :host-context(tui-text-area._ios){padding-left:.8125rem}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiPrimitiveTextfieldModule = class _TuiPrimitiveTextfieldModule {
  static {
    this.ɵfac = function TuiPrimitiveTextfieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPrimitiveTextfieldModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiPrimitiveTextfieldModule,
      declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiTooltipModule, TuiIcon, TuiAppearance],
      exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiWrapperModule, TuiTooltipModule, TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPrimitiveTextfieldModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiTooltipModule, TuiIcon, TuiAppearance],
      declarations: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueDecorationComponent],
      exports: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent]
    }]
  }], null, null);
})();
var TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS = TUI_TEXTFIELD_DEFAULT_OPTIONS;
var TUI_PRIMITIVE_TEXTFIELD_OPTIONS = TUI_TEXTFIELD_OPTIONS2;
var tuiPrimitiveTextfieldOptionsProvider = tuiTextfieldOptionsProvider;

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-number.mjs
var _c02 = ["*", [["input"]], [["tuiContent"]]];
var _c12 = ["*", "input", "tuiContent"];
function TuiInputNumberComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
function TuiInputNumberComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiInputNumberComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const valueContent_r3 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", valueContent_r3);
  }
}
function TuiInputNumberComponent_section_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 8)(1, "button", 9);
    ɵɵlistener("click.prevent", function TuiInputNumberComponent_section_5_Template_button_click_prevent_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrow(ctx_r4.step));
    })("mousedown.prevent", function TuiInputNumberComponent_section_5_Template_button_mousedown_prevent_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.nativeFocusableElement == null ? null : ctx_r4.nativeFocusableElement.focus());
    });
    ɵɵtext(2, " + ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 9);
    ɵɵlistener("click.prevent", function TuiInputNumberComponent_section_5_Template_button_click_prevent_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrow(-ctx_r4.step));
    })("mousedown.prevent", function TuiInputNumberComponent_section_5_Template_button_mousedown_prevent_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.nativeFocusableElement == null ? null : ctx_r4.nativeFocusableElement.focus());
    });
    ɵɵtext(4, " - ");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const textfield_r6 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("appearance", textfield_r6.appearance)("disabled", !ctx_r4.canIncrement)("iconStart", ctx_r4.icons.up);
    ɵɵadvance(2);
    ɵɵproperty("appearance", textfield_r6.appearance)("disabled", !ctx_r4.canDecrement)("iconStart", ctx_r4.icons.down);
  }
}
function TuiInputNumberComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiInputNumberComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
var TUI_INPUT_NUMBER_DEFAULT_OPTIONS = {
  icons: {
    up: "@tui.plus",
    down: "@tui.minus"
  },
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 0
};
var TUI_INPUT_NUMBER_OPTIONS = tuiCreateToken(TUI_INPUT_NUMBER_DEFAULT_OPTIONS);
function tuiInputNumberOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_NUMBER_OPTIONS, options, TUI_INPUT_NUMBER_DEFAULT_OPTIONS);
}
var DEFAULT_MAX_LENGTH = 18;
var TUI_NUMBER_VALUE_TRANSFORMER = tuiCreateToken();
var TuiInputNumberComponent = class _TuiInputNumberComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.isIOS = inject(TUI_IS_IOS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.options = inject(TUI_INPUT_NUMBER_OPTIONS);
    this.unfinishedValue = "";
    this.polymorpheusValueContent = EMPTY_QUERY;
    this.valueTransformer = inject(TUI_NUMBER_VALUE_TRANSFORMER, {
      optional: true
    });
    this.numberFormat = TUI_DEFAULT_NUMBER_FORMAT;
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.numberFormat$ = inject(TUI_NUMBER_FORMAT).pipe(tuiWatch(this.cdr), takeUntilDestroyed()).subscribe((format) => {
      this.numberFormat = format;
    });
    this.min = this.options.min;
    this.max = this.options.max;
    this.step = this.options.step;
  }
  get nativeFocusableElement() {
    return !this.textfield || this.computedDisabled ? null : this.textfield.nativeFocusableElement;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get inputMode() {
    if (this.isIOS && this.isNegativeAllowed) {
      return "text";
    }
    return !this.precision ? "numeric" : "decimal";
  }
  get calculatedMaxLength() {
    const decimalPart = !!this.precision && this.nativeValue.includes(this.numberFormat.decimalSeparator);
    const precision = decimalPart ? Math.min(this.precision + 1, 20) : 0;
    const takeThousand = this.numberFormat.thousandSeparator.repeat(5).length;
    return DEFAULT_MAX_LENGTH + precision + takeThousand;
  }
  get computedValue() {
    return this.focused ? this.nativeValue : this.formattedValue;
  }
  onValueChange(nativeValue) {
    const parsedValue = maskitoParseNumber(nativeValue, this.numberFormat.decimalSeparator);
    this.unfinishedValue = null;
    if (Number.isNaN(parsedValue)) {
      this.value = null;
      return;
    }
    if (this.isNativeValueNotFinished) {
      this.unfinishedValue = nativeValue;
      this.cdr.markForCheck();
      return;
    }
    if (parsedValue < this.computedMin || parsedValue > this.computedMax) {
      return;
    }
    this.value = parsedValue;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = this.formattedValue;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get icons() {
    return this.options.icons;
  }
  get computedMin() {
    return this.computeMin(this.min, this.max);
  }
  get computedMax() {
    return this.computeMax(this.min, this.max);
  }
  get isNegativeAllowed() {
    return this.computedMin < 0;
  }
  get formattedValue() {
    return this.value !== null ? this.getFormattedValue(this.value || 0) : "";
  }
  get canDecrement() {
    return this.interactive && (this.value || 0) > this.computedMin;
  }
  get canIncrement() {
    return this.interactive && (this.value || 0) < this.computedMax;
  }
  get computedPrefix() {
    return this.controller.prefix;
  }
  get computedPostfix() {
    const postfix = this.controller.postfix;
    return postfix && ` ${postfix}`;
  }
  get mask() {
    return this.calculateMask(this.precision, this.numberFormat.decimalMode, this.numberFormat.decimalSeparator, this.numberFormat.thousandSeparator, this.computedMin, this.computedMax, this.computedPrefix, this.computedPostfix);
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || "";
  }
  set nativeValue(value) {
    if (!this.textfield || !this.nativeFocusableElement) {
      return;
    }
    this.textfield.value = value;
    this.nativeFocusableElement.value = value;
  }
  onArrow(step) {
    if (!step) {
      return;
    }
    this.value = tuiClamp((this.value || 0) + step, this.computedMin, this.computedMax);
    this.nativeValue = this.formattedValue;
  }
  onFocused(focused) {
    this.updateFocused(focused);
    const nativeNumberValue = this.unfinishedValue ? maskitoParseNumber(this.unfinishedValue, this.numberFormat.decimalSeparator) : this.nativeNumberValue;
    this.unfinishedValue = null;
    if (Number.isNaN(nativeNumberValue)) {
      this.nativeValue = focused && !this.readOnly ? this.computedPrefix + this.computedPostfix : "";
      this.value = null;
      return;
    }
    if (!focused) {
      this.value = nativeNumberValue;
      this.nativeValue = this.formattedValue;
    }
  }
  getFormattedValue(value) {
    return this.computedPrefix + tuiFormatNumber(value, __spreadProps(__spreadValues({}, this.numberFormat), {
      precision: this.precision
    })).replace(CHAR_HYPHEN, CHAR_MINUS) + this.computedPostfix;
  }
  get isNativeValueNotFinished() {
    const nativeNumberValue = this.nativeNumberValue;
    return nativeNumberValue < 0 ? nativeNumberValue > this.computedMax : nativeNumberValue < this.computedMin;
  }
  get nativeNumberValue() {
    return maskitoParseNumber(this.nativeValue, this.numberFormat.decimalSeparator);
  }
  get precision() {
    return Number.isNaN(this.numberFormat.precision) ? 2 : this.numberFormat.precision;
  }
  computeMin(min, max) {
    return Math.min(this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min, this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max);
  }
  computeMax(min, max) {
    return Math.max(this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min, this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max);
  }
  // eslint-disable-next-line sonarjs/sonar-max-params
  calculateMask(precision, decimalMode, decimalSeparator, thousandSeparator, min, max, prefix, postfix) {
    const generatorParams = {
      decimalSeparator,
      thousandSeparator,
      min,
      max,
      prefix,
      postfix,
      precision,
      decimalZeroPadding: decimalMode === "always"
    };
    const _a = maskitoNumberOptionsGenerator(generatorParams), {
      plugins
    } = _a, options = __objRest(_a, [
      "plugins"
    ]);
    return __spreadProps(__spreadValues({}, options), {
      plugins: [...plugins, maskitoCaretGuard((value) => [prefix.length, value.length - postfix.length])]
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputNumberComponent_BaseFactory;
      return function TuiInputNumberComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputNumberComponent_BaseFactory || (ɵTuiInputNumberComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputNumberComponent)))(__ngFactoryType__ || _TuiInputNumberComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputNumberComponent,
      selectors: [["tui-input-number"]],
      contentQueries: function TuiInputNumberComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, PolymorpheusOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.polymorpheusValueContent = _t);
        }
      },
      viewQuery: function TuiInputNumberComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputNumberComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowDown", function TuiInputNumberComponent_keydown_arrowDown_HostBindingHandler() {
            return ctx.onArrow(-ctx.step);
          })("keydown.arrowUp", function TuiInputNumberComponent_keydown_arrowUp_HostBindingHandler() {
            return ctx.onArrow(ctx.step);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        step: "step"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputNumberComponent), tuiAsControl2(_TuiInputNumberComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c12,
      decls: 10,
      vars: 14,
      consts: [["textfield", ""], ["valueContent", ""], ["tuiTextfieldPostfix", "", "tuiTextfieldPrefix", "", "tuiValueAccessor", "", 1, "t-textfield", 3, "focusedChange", "valueChange", "disabled", "focusable", "invalid", "maskito", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "value"], ["ngProjectAs", "tuiContent", "class", "t-value-content", 5, ["tuiContent"], 4, "ngIf"], ["class", "t-buttons", 4, "ngIf"], [4, "ngIf"], ["ngProjectAs", "tuiContent", 5, ["tuiContent"], 1, "t-value-content"], [4, "polymorpheusOutlet"], [1, "t-buttons"], ["size", "s", "tabindex", "-1", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click.prevent", "mousedown.prevent", "appearance", "disabled", "iconStart"]],
      template: function TuiInputNumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c02);
          ɵɵelementStart(0, "tui-primitive-textfield", 2, 0);
          ɵɵlistener("focusedChange", function TuiInputNumberComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          })("valueChange", function TuiInputNumberComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(2);
          ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵtemplate(4, TuiInputNumberComponent_div_4_Template, 2, 1, "div", 3);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiInputNumberComponent_section_5_Template, 5, 6, "section", 4)(6, TuiInputNumberComponent_ng_container_6_Template, 1, 0, "ng-container", 5);
          ɵɵpipe(7, "async");
          ɵɵtemplate(8, TuiInputNumberComponent_ng_template_8_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("maskito", ctx.mask)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("value", ctx.computedValue);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.polymorpheusValueContent.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.step);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(7, 12, ctx.polymorpheusValueContent.changes));
        }
      },
      dependencies: [NgIf, MaskitoDirective, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, PolymorpheusOutlet, TuiValueAccessorDirective, TuiButton, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:flex;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-textfield[_ngcontent-%COMP%]{flex:1;min-inline-size:0;max-inline-size:100%;border-radius:inherit;text-align:inherit}.t-textfield[_ngcontent-%COMP%]:not(:last-child){border-start-end-radius:0;border-end-end-radius:0}.t-value-content[_ngcontent-%COMP%]{inline-size:100%}.t-buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;margin-left:.125rem;border-radius:inherit}[data-size=s][_ngcontent-%COMP%] + .t-buttons[_ngcontent-%COMP%]{flex-direction:row-reverse}[data-size=s][_ngcontent-%COMP%] + .t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]:first-child{margin:0 0 0 .125rem;border-start-end-radius:inherit;border-end-end-radius:inherit}[data-size=s][_ngcontent-%COMP%] + .t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]:last-child{border-radius:0}[data-size=m][_ngcontent-%COMP%] + .t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{inline-size:calc(var(--tui-height-m) * .75)}[data-size=l][_ngcontent-%COMP%] + .t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{inline-size:calc(var(--tui-height-l) * .75)}.t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]{display:flex;flex:1;block-size:auto;align-items:center;justify-content:center;border-radius:0}.t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]:first-child{margin-bottom:.125rem;border-start-end-radius:inherit}.t-buttons[_ngcontent-%COMP%]   .t-button[_ngcontent-%COMP%]:last-child{border-end-end-radius:inherit}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputNumberComponent.prototype, "computeMin", null);
__decorate([tuiPure], TuiInputNumberComponent.prototype, "computeMax", null);
__decorate([tuiPure], TuiInputNumberComponent.prototype, "calculateMask", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputNumberComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-number",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputNumberComponent), tuiAsControl2(TuiInputNumberComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "(keydown.arrowDown)": "onArrow(-step)",
        "(keydown.arrowUp)": "onArrow(step)"
      },
      template: '<tui-primitive-textfield\n    #textfield\n    tuiTextfieldPostfix=""\n    tuiTextfieldPrefix=""\n    tuiValueAccessor\n    class="t-textfield"\n    [disabled]="computedDisabled"\n    [focusable]="focusable"\n    [invalid]="computedInvalid"\n    [maskito]="mask"\n    [pseudoActive]="pseudoActive"\n    [pseudoFocus]="computedFocused"\n    [pseudoHover]="pseudoHover"\n    [readOnly]="readOnly"\n    [value]="computedValue"\n    (focusedChange)="onFocused($event)"\n    (valueChange)="onValueChange($event)"\n>\n    <ng-content />\n    <ng-content\n        ngProjectAs="input"\n        select="input"\n    />\n    <div\n        *ngIf="polymorpheusValueContent.length"\n        ngProjectAs="tuiContent"\n        class="t-value-content"\n    >\n        <ng-container *polymorpheusOutlet="valueContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</tui-primitive-textfield>\n\n<section\n    *ngIf="step"\n    class="t-buttons"\n>\n    <button\n        size="s"\n        tabindex="-1"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [appearance]="textfield.appearance"\n        [disabled]="!canIncrement"\n        [iconStart]="icons.up"\n        (click.prevent)="onArrow(step)"\n        (mousedown.prevent)="nativeFocusableElement?.focus()"\n    >\n        +\n    </button>\n    <button\n        size="s"\n        tabindex="-1"\n        tuiIconButton\n        type="button"\n        class="t-button"\n        [appearance]="textfield.appearance"\n        [disabled]="!canDecrement"\n        [iconStart]="icons.down"\n        (click.prevent)="onArrow(-step)"\n        (mousedown.prevent)="nativeFocusableElement?.focus()"\n    >\n        -\n    </button>\n</section>\n\n<ng-container *ngIf="polymorpheusValueContent.changes | async" />\n\n<ng-template #valueContent>\n    <ng-content select="tuiContent" />\n</ng-template>\n',
      styles: [":host{display:flex;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-textfield{flex:1;min-inline-size:0;max-inline-size:100%;border-radius:inherit;text-align:inherit}.t-textfield:not(:last-child){border-start-end-radius:0;border-end-end-radius:0}.t-value-content{inline-size:100%}.t-buttons{display:flex;flex-direction:column;align-items:stretch;margin-left:.125rem;border-radius:inherit}[data-size=s]+.t-buttons{flex-direction:row-reverse}[data-size=s]+.t-buttons .t-button:first-child{margin:0 0 0 .125rem;border-start-end-radius:inherit;border-end-end-radius:inherit}[data-size=s]+.t-buttons .t-button:last-child{border-radius:0}[data-size=m]+.t-buttons .t-button{inline-size:calc(var(--tui-height-m) * .75)}[data-size=l]+.t-buttons .t-button{inline-size:calc(var(--tui-height-l) * .75)}.t-buttons .t-button{display:flex;flex:1;block-size:auto;align-items:center;justify-content:center;border-radius:0}.t-buttons .t-button:first-child{margin-bottom:.125rem;border-start-end-radius:inherit}.t-buttons .t-button:last-child{border-end-end-radius:inherit}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    polymorpheusValueContent: [{
      type: ContentChildren,
      args: [PolymorpheusOutlet, {
        descendants: true
      }]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    computeMin: [],
    computeMax: [],
    calculateMask: []
  });
})();
var TuiInputNumberDirective = class _TuiInputNumberDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.computedValue;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  ngDoCheck() {
    if (!this.host.nativeFocusableElement) {
      return;
    }
    this.host.nativeFocusableElement.inputMode = this.host.inputMode;
    this.host.nativeFocusableElement.maxLength = this.host.nativeFocusableElement.maxLength > 0 ? this.host.nativeFocusableElement.maxLength : this.host.calculatedMaxLength;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputNumberDirective_BaseFactory;
      return function TuiInputNumberDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputNumberDirective_BaseFactory || (ɵTuiInputNumberDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputNumberDirective)))(__ngFactoryType__ || _TuiInputNumberDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputNumberDirective,
      selectors: [["tui-input-number"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputNumberDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputNumberDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-number",
      providers: [tuiAsTextfieldHost(TuiInputNumberDirective)]
    }]
  }], null, null);
})();
var TuiInputNumberModule = class _TuiInputNumberModule {
  static {
    this.ɵfac = function TuiInputNumberModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputNumberModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputNumberModule,
      declarations: [TuiInputNumberComponent, TuiInputNumberDirective],
      imports: [CommonModule, MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
      exports: [TuiInputNumberComponent, TuiInputNumberDirective, TuiTextfieldComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
      declarations: [TuiInputNumberComponent, TuiInputNumberDirective],
      exports: [TuiInputNumberComponent, TuiInputNumberDirective, TuiTextfieldComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-select-option.mjs
function TuiSelectOptionComponent_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.icons.check)("tuiScrollIntoView", true);
  }
}
function TuiSelectOptionComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
}
var TuiSelectOptionComponent = class _TuiSelectOptionComponent {
  constructor() {
    this.host = inject(TUI_DATA_LIST_HOST);
    this.el = tuiInjectElement();
    this.changeDetection$ = new Subject();
    this.abstractControl = inject(AbstractTuiControl, {
      optional: true
    });
    this.control = inject(NgControl);
    this.option = inject(TuiOption);
    this.dataList = inject(TuiDataListComponent, {
      optional: true
    });
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
    this.selected$ = merge(this.changeDetection$, this.control.valueChanges || EMPTY, tuiTypedFromEvent(this.el, "animationstart")).pipe(startWith(null), map(() => this.selected), distinctUntilChanged());
  }
  ngOnInit() {
    void Promise.resolve().then(() => {
      if (tuiIsPresent(this.option.value) && !this.option.disabled) {
        this.host.checkOption?.(this.option.value);
      }
    });
  }
  ngDoCheck() {
    this.changeDetection$.next();
  }
  get value() {
    return this.abstractControl?.value ?? this.control.value;
  }
  get matcher() {
    return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
  }
  get selected() {
    return tuiIsPresent(this.option.value) && tuiIsPresent(this.value) && this.matcher(this.value, this.option.value);
  }
  static {
    this.ɵfac = function TuiSelectOptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectOptionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSelectOptionComponent,
      selectors: [["tui-select-option"]],
      decls: 5,
      vars: 5,
      consts: [["dummy", ""], [3, "ngTemplateOutlet"], ["automation-id", "tui-select-option__checkmark", "class", "t-checkmark", 3, "icon", "tuiScrollIntoView", 4, "ngIf", "ngIfElse"], ["automation-id", "tui-select-option__checkmark", 1, "t-checkmark", 3, "icon", "tuiScrollIntoView"], [1, "t-dummy"]],
      template: function TuiSelectOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainer(0, 1);
          ɵɵtemplate(1, TuiSelectOptionComponent_tui_icon_1_Template, 1, 2, "tui-icon", 2);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, TuiSelectOptionComponent_ng_template_3_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const dummy_r2 = ɵɵreference(4);
          ɵɵproperty("ngTemplateOutlet", ctx.context.$implicit);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 3, ctx.selected$))("ngIfElse", dummy_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, TuiScrollIntoView, TuiIcon, AsyncPipe],
      styles: ['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-inline-size:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{margin-inline-start:auto;inline-size:1.75rem;border-width:.25rem;border-inline-start-width:.5rem}tui-data-list[data-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.375rem}tui-data-list[data-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{inline-size:1.75rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectOptionComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container [ngTemplateOutlet]="context.$implicit" />\n<tui-icon\n    *ngIf="selected$ | async; else dummy"\n    automation-id="tui-select-option__checkmark"\n    class="t-checkmark"\n    [icon]="icons.check"\n    [tuiScrollIntoView]="true"\n/>\n<ng-template #dummy>\n    <span class="t-dummy"></span>\n</ng-template>\n',
      styles: ['@keyframes retrigger{0%{left:1px}to{left:2px}}:host{display:flex;flex:1;align-items:center;max-inline-size:100%;animation:retrigger 1s}.t-checkmark{margin-inline-start:auto;inline-size:1.75rem;border-width:.25rem;border-inline-start-width:.5rem}:host-context(tui-data-list[data-size="s"]) .t-checkmark{margin-inline-end:-.375rem}:host-context(tui-data-list[data-size="m"]) .t-checkmark{margin-inline-end:-.125rem}.t-dummy{inline-size:1.75rem}\n']
    }]
  }], null, null);
})();
var TUI_SELECT_OPTION = new PolymorpheusComponent(TuiSelectOptionComponent);
var TuiSelectOptionModule = class _TuiSelectOptionModule {
  static {
    this.ɵfac = function TuiSelectOptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectOptionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiSelectOptionModule,
      declarations: [TuiSelectOptionComponent],
      imports: [CommonModule, TuiScrollIntoView, TuiIcon],
      exports: [TuiSelectOptionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectOptionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiScrollIntoView, TuiIcon],
      declarations: [TuiSelectOptionComponent],
      exports: [TuiSelectOptionComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-select.mjs
var _c03 = ["tuiSelect", ""];
function TuiNativeSelectComponent_tui_data_list_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-data-list-wrapper", 4);
    ɵɵpipe(1, "tuiStringifyContent");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r0.disabledItemHandler || ctx_r0.itemsHandlers.disabledItemHandler)("itemContent", ɵɵpipeBind1(1, 3, ctx_r0.stringify))("items", ctx_r0.items);
  }
}
function TuiNativeSelectComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiNativeSelectComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiNativeSelectComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r0.disabledItemHandler ? ctx_r0.disabledItemHandler(option_r2) : ctx_r0.itemsHandlers.disabledItemHandler(option_r2))("selected", ctx_r0.selected(option_r2))("value", ctx_r0.stringify(option_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.stringify(option_r2), "\n");
  }
}
var _c13 = ["tuiSelect", "", "labels", ""];
function TuiNativeSelectGroupComponent_tui_data_list_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-data-list-wrapper", 4);
    ɵɵpipe(1, "tuiStringifyContent");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r0.disabledItemHandler || ctx_r0.itemsHandlers.disabledItemHandler)("itemContent", ɵɵpipeBind1(1, 4, ctx_r0.stringify))("items", ctx_r0.items)("labels", ctx_r0.labels);
  }
}
function TuiNativeSelectGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiNativeSelectGroupComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiNativeSelectGroupComponent_optgroup_4_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r0.disabledItemHandler ? ctx_r0.disabledItemHandler(option_r2) : ctx_r0.itemsHandlers.disabledItemHandler(option_r2))("selected", ctx_r0.selected(option_r2))("value", ctx_r0.stringify(option_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.stringify(option_r2), " ");
  }
}
function TuiNativeSelectGroupComponent_optgroup_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "optgroup", 6);
    ɵɵtemplate(1, TuiNativeSelectGroupComponent_optgroup_4_option_1_Template, 2, 4, "option", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r0.labels[index_r4]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var _c22 = "[_nghost-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}";
var _c32 = ["*", [["input"]], [["select"]]];
var _c42 = ["*", "input", "select"];
var _c52 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
function TuiSelectComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 5);
    ɵɵprojection(1, 2);
    ɵɵelementContainerEnd();
  }
}
function TuiSelectComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("textContent", text_r2);
  }
}
function TuiSelectComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiSelectComponent_div_5_div_1_Template, 1, 1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.computedContent)("polymorpheusOutletContext", ɵɵpureFunction2(2, _c52, ctx_r2.value, ctx_r2.computedFocused));
  }
}
function TuiSelectComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiSelectComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, TuiSelectComponent_ng_template_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.arrow);
  }
}
var TuiNativeSelectComponent = class _TuiNativeSelectComponent extends AbstractTuiNativeSelect {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  get stringify() {
    return this.host.stringify;
  }
  selected(option) {
    return this.control.value === option;
  }
  onValueChange(index) {
    this.host.onValueChange(this.items?.[index] || null);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiNativeSelectComponent_BaseFactory;
      return function TuiNativeSelectComponent_Factory(__ngFactoryType__) {
        return (ɵTuiNativeSelectComponent_BaseFactory || (ɵTuiNativeSelectComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiNativeSelectComponent)))(__ngFactoryType__ || _TuiNativeSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNativeSelectComponent,
      selectors: [["select", "tuiSelect", "", 3, "labels", "", 3, "multiple", ""]],
      hostVars: 4,
      hostBindings: function TuiNativeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiNativeSelectComponent_change_HostBindingHandler($event) {
            return ctx.onValueChange($event.target.options.selectedIndex - (ctx.emptyOption ? 1 : 0));
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.host.disabled || ctx.control.readOnly)("tabIndex", ctx.host.focusable ? 0 : -1)("value", ctx.host.value);
          ɵɵattribute("aria-invalid", ctx.host.invalid);
        }
      },
      inputs: {
        items: "items"
      },
      features: [ɵɵProvidersFeature([tuiAsDataList(_TuiNativeSelectComponent), tuiProvide(AbstractTuiNativeSelect, _TuiNativeSelectComponent), {
        provide: TemplateRef,
        deps: [_TuiNativeSelectComponent],
        useFactory: ({
          datalist
        }) => datalist
      }]), ɵɵInheritDefinitionFeature],
      attrs: _c03,
      decls: 5,
      vars: 5,
      consts: [[3, "disabledItemHandler", "itemContent", "items", 4, "tuiDataList"], [4, "ngIf"], ["disabled", "", "selected", "", "value", "", 4, "ngIf"], [3, "disabled", "selected", "value", 4, "ngFor", "ngForOf"], [3, "disabledItemHandler", "itemContent", "items"], ["disabled", "", "selected", "", "value", ""], [3, "disabled", "selected", "value"]],
      template: function TuiNativeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiNativeSelectComponent_tui_data_list_wrapper_0_Template, 2, 5, "tui-data-list-wrapper", 0)(1, TuiNativeSelectComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, TuiNativeSelectComponent_option_3_Template, 2, 1, "option", 2)(4, TuiNativeSelectComponent_option_4_Template, 2, 4, "option", 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 3, ctx.control.control == null ? null : ctx.control.control.valueChanges));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.emptyOption);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [NgForOf, NgIf, TuiDataListDirective, TuiDataListWrapperComponent, AsyncPipe, TuiStringifyContentPipe],
      styles: ["[_nghost-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeSelectComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "select[tuiSelect]:not([labels]):not([multiple])",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataList(TuiNativeSelectComponent), tuiProvide(AbstractTuiNativeSelect, TuiNativeSelectComponent), {
        provide: TemplateRef,
        deps: [TuiNativeSelectComponent],
        useFactory: ({
          datalist
        }) => datalist
      }],
      host: {
        "[attr.aria-invalid]": "host.invalid",
        "[disabled]": "host.disabled || control.readOnly",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "[value]": "host.value",
        "(change)": "onValueChange($event.target.options.selectedIndex - (emptyOption ? 1 : 0))"
      },
      template: '<tui-data-list-wrapper\n    *tuiDataList\n    [disabledItemHandler]="disabledItemHandler || itemsHandlers.disabledItemHandler"\n    [itemContent]="stringify | tuiStringifyContent"\n    [items]="items"\n/>\n<ng-container *ngIf="control.control?.valueChanges | async" />\n<option\n    *ngIf="emptyOption"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<option\n    *ngFor="let option of items; let index = index"\n    [disabled]="disabledItemHandler ? disabledItemHandler(option) : itemsHandlers.disabledItemHandler(option)"\n    [selected]="selected(option)"\n    [value]="stringify(option)"\n>\n    {{ stringify(option) }}\n</option>\n',
      styles: [":host{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }]
  });
})();
var TuiNativeSelectGroupComponent = class _TuiNativeSelectGroupComponent extends AbstractTuiNativeSelect {
  constructor() {
    super(...arguments);
    this.items = [];
    this.labels = [];
  }
  get stringify() {
    return this.host.stringify;
  }
  selected(option) {
    return this.control.value === option;
  }
  onValueChange(index) {
    const flatItems = this.items?.reduce((acc, val) => acc.concat(val), []);
    this.host.onValueChange(flatItems?.[index] || null);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiNativeSelectGroupComponent_BaseFactory;
      return function TuiNativeSelectGroupComponent_Factory(__ngFactoryType__) {
        return (ɵTuiNativeSelectGroupComponent_BaseFactory || (ɵTuiNativeSelectGroupComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiNativeSelectGroupComponent)))(__ngFactoryType__ || _TuiNativeSelectGroupComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNativeSelectGroupComponent,
      selectors: [["select", "tuiSelect", "", "labels", "", 3, "multiple", ""]],
      hostVars: 4,
      hostBindings: function TuiNativeSelectGroupComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiNativeSelectGroupComponent_change_HostBindingHandler($event) {
            return ctx.onValueChange($event.target.options.selectedIndex - (ctx.emptyOption ? 1 : 0));
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.host.disabled || ctx.control.readOnly)("tabIndex", ctx.host.focusable ? 0 : -1)("value", ctx.host.value);
          ɵɵattribute("aria-invalid", ctx.host.invalid);
        }
      },
      inputs: {
        items: "items",
        labels: "labels"
      },
      features: [ɵɵProvidersFeature([tuiAsDataList(_TuiNativeSelectGroupComponent), tuiProvide(AbstractTuiNativeSelect, _TuiNativeSelectGroupComponent), {
        provide: TemplateRef,
        deps: [_TuiNativeSelectGroupComponent],
        useFactory: ({
          datalist
        }) => datalist
      }]), ɵɵInheritDefinitionFeature],
      attrs: _c13,
      decls: 5,
      vars: 5,
      consts: [[3, "disabledItemHandler", "itemContent", "items", "labels", 4, "tuiDataList"], [4, "ngIf"], ["disabled", "", "selected", "", "value", "", 4, "ngIf"], [3, "label", 4, "ngFor", "ngForOf"], [3, "disabledItemHandler", "itemContent", "items", "labels"], ["disabled", "", "selected", "", "value", ""], [3, "label"], [3, "disabled", "selected", "value", 4, "ngFor", "ngForOf"], [3, "disabled", "selected", "value"]],
      template: function TuiNativeSelectGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiNativeSelectGroupComponent_tui_data_list_wrapper_0_Template, 2, 6, "tui-data-list-wrapper", 0)(1, TuiNativeSelectGroupComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, TuiNativeSelectGroupComponent_option_3_Template, 2, 1, "option", 2)(4, TuiNativeSelectGroupComponent_optgroup_4_Template, 2, 2, "optgroup", 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 3, ctx.control.control == null ? null : ctx.control.control.valueChanges));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.emptyOption);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [NgForOf, NgIf, TuiDataListDirective, TuiDataListGroupWrapperComponent, AsyncPipe, TuiStringifyContentPipe],
      styles: [_c22],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeSelectGroupComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "select[tuiSelect][labels]:not([multiple])",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataList(TuiNativeSelectGroupComponent), tuiProvide(AbstractTuiNativeSelect, TuiNativeSelectGroupComponent), {
        provide: TemplateRef,
        deps: [TuiNativeSelectGroupComponent],
        useFactory: ({
          datalist
        }) => datalist
      }],
      host: {
        "[attr.aria-invalid]": "host.invalid",
        "[disabled]": "host.disabled || control.readOnly",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "[value]": "host.value",
        "(change)": "onValueChange($event.target.options.selectedIndex - (emptyOption ? 1 : 0))"
      },
      template: '<tui-data-list-wrapper\n    *tuiDataList\n    [disabledItemHandler]="disabledItemHandler || itemsHandlers.disabledItemHandler"\n    [itemContent]="stringify | tuiStringifyContent"\n    [items]="items"\n    [labels]="labels"\n/>\n<ng-container *ngIf="control.control?.valueChanges | async" />\n<option\n    *ngIf="emptyOption"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<optgroup\n    *ngFor="let group of items; let index = index"\n    [label]="labels[index]"\n>\n    <option\n        *ngFor="let option of group; let i = index"\n        [disabled]="disabledItemHandler ? disabledItemHandler(option) : itemsHandlers.disabledItemHandler(option)"\n        [selected]="selected(option)"\n        [value]="stringify(option)"\n    >\n        {{ stringify(option) }}\n    </option>\n</optgroup>\n',
      styles: [":host{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    labels: [{
      type: Input
    }]
  });
})();
var TUI_SELECT_DEFAULT_OPTIONS = {
  valueContent: ""
};
var TUI_SELECT_OPTIONS = tuiCreateToken(TUI_SELECT_DEFAULT_OPTIONS);
function tuiSelectOptionsProvider(options) {
  return tuiProvideOptions(TUI_SELECT_OPTIONS, options, TUI_SELECT_DEFAULT_OPTIONS);
}
var TuiSelectComponent = class _TuiSelectComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.arrowMode = inject(TUI_ARROW_MODE);
    this.options = inject(TUI_SELECT_OPTIONS);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.open = false;
    this.stringify = this.itemsHandlers.stringify;
    this.identityMatcher = this.itemsHandlers.identityMatcher;
    this.valueContent = this.options.valueContent;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.tuiDropdownOpen;
  }
  get computedValue() {
    return this.value === null ? "" : this.stringify(this.value) || " ";
  }
  onValueChange(value) {
    this.value = value || null;
  }
  handleOption(option) {
    this.focusInput();
    this.value = option;
    this.open = false;
  }
  get arrow() {
    return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
  }
  get nativeDropdownMode() {
    return !!this.nativeSelect && this.isMobile;
  }
  get computedContent() {
    return this.valueContent || this.computedValue;
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  onKeyDownDelete() {
    if (this.textfieldCleaner.cleaner) {
      this.value = null;
    }
  }
  focusInput(preventScroll = false) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll
      });
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSelectComponent_BaseFactory;
      return function TuiSelectComponent_Factory(__ngFactoryType__) {
        return (ɵTuiSelectComponent_BaseFactory || (ɵTuiSelectComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiSelectComponent)))(__ngFactoryType__ || _TuiSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSelectComponent,
      selectors: [["tui-select"]],
      contentQueries: function TuiSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, AbstractTuiNativeSelect, 7);
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nativeSelect = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      viewQuery: function TuiSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
          ɵɵviewQuery(TuiDropdownOpen, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        stringify: "stringify",
        identityMatcher: "identityMatcher",
        valueContent: "valueContent"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiSelectComponent), tuiAsControl2(_TuiSelectComponent), tuiAsDataListHost(_TuiSelectComponent), tuiAsOptionContent(TUI_SELECT_OPTION)]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c42,
      decls: 8,
      vars: 16,
      consts: [["icon", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-select__textfield", 1, "t-textfield", 3, "keydown.backspace.prevent", "keydown.delete.prevent", "valueChange", "disabled", "editable", "focusable", "invalid", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], ["ngProjectAs", "select", 5, ["select"], 4, "ngIf"], ["automation-id", "tui-select__value", "ngProjectAs", "tuiContent", "class", "t-value", 5, ["tuiContent"], 4, "ngIf"], ["ngProjectAs", "select", 5, ["select"]], ["automation-id", "tui-select__value", "ngProjectAs", "tuiContent", 5, ["tuiContent"], 1, "t-value"], ["class", "t-primitive-value", 3, "textContent", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive-value", 3, "textContent"], ["appearance", "icon", "tuiWrapper", "", 1, "t-icon"], [4, "polymorpheusOutlet"]],
      template: function TuiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c32);
          ɵɵelementStart(0, "div", 1);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiSelectComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiSelectComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 2);
          ɵɵlistener("keydown.backspace.prevent", function TuiSelectComponent_Template_tui_primitive_textfield_keydown_backspace_prevent_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onKeyDownDelete());
          })("keydown.delete.prevent", function TuiSelectComponent_Template_tui_primitive_textfield_keydown_delete_prevent_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onKeyDownDelete());
          })("valueChange", function TuiSelectComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(2);
          ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵtemplate(4, TuiSelectComponent_ng_container_4_Template, 2, 0, "ng-container", 3)(5, TuiSelectComponent_div_5_Template, 2, 5, "div", 4);
          ɵɵelementEnd();
          ɵɵtemplate(6, TuiSelectComponent_ng_template_6_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const icon_r4 = ɵɵreference(7);
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.interactive && !ctx.nativeDropdownMode);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("editable", false)("focusable", ctx.computedFocusable)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", ctx.arrow ? icon_r4 : "")("value", ctx.computedValue);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.isMobile);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.value !== null);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiWrapperDirective, TuiTextfieldIconDirective, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownOpen],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;inline-size:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiSelectComponent), tuiAsControl2(TuiSelectComponent), tuiAsDataListHost(TuiSelectComponent), tuiAsOptionContent(TUI_SELECT_OPTION)],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="interactive && !nativeDropdownMode"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-primitive-textfield
        automation-id="tui-select__textfield"
        class="t-textfield"
        [disabled]="computedDisabled"
        [editable]="false"
        [focusable]="computedFocusable"
        [invalid]="computedInvalid"
        [nativeId]="nativeId"
        [pseudoActive]="pseudoActive"
        [pseudoFocus]="computedFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldIcon]="arrow ? icon : ''"
        [value]="computedValue"
        (keydown.backspace.prevent)="onKeyDownDelete()"
        (keydown.delete.prevent)="onKeyDownDelete()"
        (valueChange)="onValueChange($any($event))"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />

        <ng-container
            *ngIf="isMobile"
            ngProjectAs="select"
        >
            <ng-content select="select" />
        </ng-container>

        <div
            *ngIf="value !== null"
            automation-id="tui-select__value"
            ngProjectAs="tuiContent"
            class="t-value"
        >
            <div
                *polymorpheusOutlet="computedContent as text; context: {$implicit: value, active: computedFocused}"
                class="t-primitive-value"
                [textContent]="text"
            ></div>
        </div>
    </tui-primitive-textfield>

    <ng-template #icon>
        <div
            appearance="icon"
            tuiWrapper
            class="t-icon"
        >
            <ng-container *polymorpheusOutlet="arrow" />
        </div>
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host:not(._readonly) ::ng-deep input:not(:disabled){cursor:pointer}:host._readonly ::ng-deep input{cursor:default}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-value{display:flex;inline-size:100%;align-items:center}.t-primitive-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    nativeSelect: [{
      type: ContentChild,
      args: [AbstractTuiNativeSelect, {
        static: true
      }]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }],
    stringify: [{
      type: Input
    }],
    identityMatcher: [{
      type: Input
    }],
    valueContent: [{
      type: Input
    }]
  });
})();
var TuiSelectDirective = class _TuiSelectDirective extends AbstractTuiTextfieldHost {
  get readOnly() {
    return true;
  }
  get value() {
    return this.host.computedValue;
  }
  get stringify() {
    return this.host.stringify;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSelectDirective_BaseFactory;
      return function TuiSelectDirective_Factory(__ngFactoryType__) {
        return (ɵTuiSelectDirective_BaseFactory || (ɵTuiSelectDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiSelectDirective)))(__ngFactoryType__ || _TuiSelectDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSelectDirective,
      selectors: [["tui-select"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiSelectDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-select",
      providers: [tuiAsTextfieldHost(TuiSelectDirective)]
    }]
  }], null, null);
})();
var TuiSelectModule = class _TuiSelectModule {
  static {
    this.ɵfac = function TuiSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiSelectModule,
      declarations: [TuiSelectComponent, TuiSelectDirective, TuiNativeSelectComponent, TuiNativeSelectGroupComponent],
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiStringifyContentPipe, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective],
      exports: [TuiSelectComponent, TuiSelectDirective, TuiTextfieldComponent, TuiNativeSelectComponent, TuiNativeSelectGroupComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiDropdownComponent, TuiDataListComponent, TuiOption, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiStringifyContentPipe, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown, ...TuiDataList, ...TuiDataListWrapper],
      declarations: [TuiSelectComponent, TuiSelectDirective, TuiNativeSelectComponent, TuiNativeSelectGroupComponent],
      exports: [TuiSelectComponent, TuiSelectDirective, TuiTextfieldComponent, TuiNativeSelectComponent, TuiNativeSelectGroupComponent, ...TuiDropdown, ...TuiDataList, ...TuiDataListWrapper]
    }]
  }], null, null);
})();

// node_modules/rxjs/dist/esm5/internal/observable/dom/fetch.js
function fromFetch(input, initWithSelector) {
  if (initWithSelector === void 0) {
    initWithSelector = {};
  }
  var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
  return new Observable(function(subscriber) {
    var controller = new AbortController();
    var signal = controller.signal;
    var abortable = true;
    var outerSignal = init.signal;
    if (outerSignal) {
      if (outerSignal.aborted) {
        controller.abort();
      } else {
        var outerSignalHandler_1 = function() {
          if (!signal.aborted) {
            controller.abort();
          }
        };
        outerSignal.addEventListener("abort", outerSignalHandler_1);
        subscriber.add(function() {
          return outerSignal.removeEventListener("abort", outerSignalHandler_1);
        });
      }
    }
    var perSubscriberInit = __assign(__assign({}, init), {
      signal
    });
    var handleError = function(err) {
      abortable = false;
      subscriber.error(err);
    };
    fetch(input, perSubscriberInit).then(function(response) {
      if (selector) {
        innerFrom(selector(response)).subscribe(createOperatorSubscriber(subscriber, void 0, function() {
          abortable = false;
          subscriber.complete();
        }, handleError));
      } else {
        abortable = false;
        subscriber.next(response);
        subscriber.complete();
      }
    }).catch(handleError);
    return function() {
      if (abortable) {
        controller.abort();
      }
    };
  });
}

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-services.mjs
var TuiStaticRequestService = class _TuiStaticRequestService {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  request(url) {
    const cache = this.cache.get(url);
    if (cache) {
      return cache;
    }
    const piped = fromFetch(url).pipe(switchMap((response) => __async(this, null, function* () {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Failed to load ${url} (${response.statusText})`);
    })), shareReplay({
      bufferSize: 1,
      refCount: false
    }));
    this.cache.set(url, piped);
    return piped;
  }
  static {
    this.ɵfac = function TuiStaticRequestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStaticRequestService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiStaticRequestService,
      factory: _TuiStaticRequestService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStaticRequestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-svg.mjs
function makeRandomSalt() {
  return Math.floor(Math.random() * Date.now());
}
function extractLinearGradientIdsFromSvg(svg) {
  const ids = (svg.match(/url\(("?)('*)#(.*?)('*)\)/g) ?? []).map((url) => url.slice(4, url.length - 1).replaceAll(/['"#]+/g, ""));
  return Array.from(new Set(ids));
}
function tuiSvgLinearGradientProcessor(svg, salt = makeRandomSalt()) {
  if (tuiIsString(svg)) {
    const uniqueIds = extractLinearGradientIdsFromSvg(svg);
    return uniqueIds.reduce((newSvg, previousId) => {
      const newId = `id_${salt}_${previousId}`;
      return newSvg.replaceAll(`"${previousId}"`, `"${newId}"`).replaceAll(`'${previousId}'`, `'${newId}'`).replaceAll(`url('#${previousId}')`, `url('#${newId}')`).replaceAll(`url("#${previousId}")`, `url("#${newId}")`).replaceAll(`url(#${previousId})`, `url(#${newId})`);
    }, svg);
  }
  return svg;
}
var TUI_DEPRECATED_ICONS = {
  tuiIconAttach: "tuiIconPaperclip",
  tuiIconAttention: "tuiIconAlertCircle",
  tuiIconBackCircle: "tuiIconArrowLeftCircle",
  tuiIconCall: "tuiIconPhone",
  tuiIconCallIn: "tuiIconPhoneIncoming",
  tuiIconCallOut: "tuiIconPhoneOutgoing",
  tuiIconCallTransfer: "tuiIconPhoneForwarded",
  tuiIconCancel: "tuiIconXCircle",
  tuiIconCancelCircle: "tuiIconSlash",
  tuiIconCard: "tuiIconCreditCard",
  tuiIconCards: "tuiIconCreditCard",
  tuiIconChartBar: "tuiIconBarChart",
  tuiIconChart: "tuiIconBarChart",
  tuiIconCheckList: "tuiIconClipboard",
  tuiIconCloseCircle: "tuiIconXCircle",
  tuiIconCollapse: "tuiIconMinimize",
  tuiIconComment: "tuiIconMessageSquare",
  tuiIconCommentFw: "tuiIconMessageForward",
  tuiIconCompany: "tuiIconBriefcase",
  tuiIconDefaultDoc: "tuiIconFile",
  tuiIconDesktop: "tuiIconMonitor",
  tuiIconDesktopOff: "tuiIconMonitorOff",
  tuiIconDislike: "tuiIconThumbsDown",
  tuiIconDone: "tuiIconCheckCircle",
  tuiIconDraft: "tuiIconEdit2",
  tuiIconEyeOpen: "tuiIconEye",
  tuiIconEyeClosed: "tuiIconEyeOff",
  tuiIconExpand: "tuiIconMaximize",
  tuiIconExternal: "tuiIconExternalLink",
  tuiIconFrame: "tuiIconLayout",
  tuiIconGeo: "tuiIconMapPin",
  tuiIconHeartFilled: "tuiIconHeart",
  tuiIconHide: "tuiIconEyeOff",
  tuiIconImg: "tuiIconImage",
  tuiIconInfoCircle: "tuiIconInfo",
  tuiIconLike: "tuiIconThumbsUp",
  tuiIconLockOpen: "tuiIconUnlock",
  tuiIconMobile: "tuiIconSmartphone",
  tuiIconMoreHor: "tuiIconMoreHorizontal",
  tuiIconMoreVer: "tuiIconMoreVertical",
  tuiIconMoreVert: "tuiIconMoreVertical",
  tuiIconPicture: "tuiIconImage",
  tuiIconPin: "tuiIconMapPin",
  tuiIconPrint: "tuiIconPrinter",
  tuiIconRefresh: "tuiIconRefreshCw",
  tuiIconRemove: "tuiIconX",
  tuiIconShow: "tuiIconEye",
  tuiIconSound: "tuiIconVolume",
  tuiIconSoundOff: "tuiIconVolumeX",
  tuiIconStarFilled: "tuiIconStar",
  tuiIconStop: "tuiIconSquare",
  tuiIconStructure: "tuiIconLayoutGrid",
  tuiIconTime: "tuiIconClock",
  tuiIconTooltip: "tuiIconHelpCircle",
  tuiIconViewList: "tuiIconList",
  tuiIconWifiOn: "tuiIconWifi"
};
var TuiSvgService = class _TuiSvgService {
  constructor() {
    this.tuiSanitizer = inject(TUI_SANITIZER, {
      optional: true
    });
    this.sanitizer = inject(DomSanitizer);
    this.originals = {};
    this.items$ = new BehaviorSubject(/* @__PURE__ */ new Map());
    this.define(inject(TUI_ICON_STARTS));
  }
  define(icons) {
    const {
      value
    } = this.items$;
    Object.keys(icons).forEach((key) => {
      this.defineIcon(key, icons[key] ?? "", value);
    });
    this.items$.next(value);
  }
  getOriginal(name) {
    return this.originals[name] || null;
  }
  defineIcon(name, src, map2) {
    if (map2.has(name)) {
      return;
    }
    const parsed = this.parseSrc(name, src);
    if (!parsed) {
      ngDevMode && console.assert(false, "Unable to parse given SVG src");
      return;
    }
    map2.set(name, parsed);
    this.originals = __spreadProps(__spreadValues({}, this.originals), {
      [name]: src
    });
  }
  parseSrc(name, src) {
    return this.sanitize(tuiProcessIcon(src, name));
  }
  sanitize(src) {
    return this.sanitizer.bypassSecurityTrustHtml((this.tuiSanitizer ? this.tuiSanitizer.sanitize(SecurityContext.HTML, src) : this.sanitizer.sanitize(SecurityContext.HTML, src)) || "");
  }
  static {
    this.ɵfac = function TuiSvgService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSvgService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiSvgService,
      factory: _TuiSvgService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TUI_DEFAULT_ICONS_PLACE = "assets/taiga-ui/icons";
var TUI_SVG_DEFAULT_OPTIONS = {
  iconsPlace: TUI_DEFAULT_ICONS_PLACE,
  path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
  srcProcessor: identity,
  contentProcessor: tuiSvgLinearGradientProcessor,
  deprecated: (src) => {
    const oldIcon = src.replace("Large", "").replace("Outline", "");
    const newIcon = TUI_DEPRECATED_ICONS[oldIcon];
    return newIcon ? `${oldIcon}/(Large|Outline) is deprecated, use ${newIcon}/(Large|Outline) instead` : "";
  }
};
var TUI_SVG_OPTIONS = tuiCreateTokenFromFactory(() => ({
  iconsPlace: TUI_DEFAULT_ICONS_PLACE,
  path: tuiIconsPathFactory(TUI_DEFAULT_ICONS_PLACE),
  deprecated: TUI_SVG_DEFAULT_OPTIONS.deprecated,
  srcProcessor: identity,
  contentProcessor: tuiSvgLinearGradientProcessor
}));
var TUI_SVG_SRC_INTERCEPTORS = tuiCreateToken();
function tuiSvgSrcInterceptors(interceptor) {
  return {
    provide: TUI_SVG_SRC_INTERCEPTORS,
    useValue: interceptor,
    multi: true
  };
}
var tuiSvgOptionsProvider = (options) => ({
  provide: TUI_SVG_OPTIONS,
  deps: [[new SkipSelf(), new Optional(), TUI_SVG_OPTIONS]],
  useFactory: (fallback) => ({
    iconsPlace: options.iconsPlace ?? fallback?.iconsPlace ?? TUI_SVG_DEFAULT_OPTIONS.iconsPlace,
    path: tuiIsString(options.path) ? tuiIconsPathFactory(options.path) : options.path ?? fallback?.path ?? TUI_SVG_DEFAULT_OPTIONS.path,
    deprecated: options.deprecated ?? fallback?.deprecated ?? TUI_SVG_DEFAULT_OPTIONS.deprecated,
    srcProcessor: options.srcProcessor ?? fallback?.srcProcessor ?? TUI_SVG_DEFAULT_OPTIONS.srcProcessor,
    contentProcessor: options.contentProcessor ?? fallback?.contentProcessor ?? TUI_SVG_DEFAULT_OPTIONS.contentProcessor
  })
});
var UNDEFINED_NAMED_ICON = "Attempted to use undefined named icon";
var MISSING_EXTERNAL_ICON = "External icon is missing on the given URL";
var FAILED_EXTERNAL_ICON = "Failed to load external SVG";
var TuiSvgComponent = class _TuiSvgComponent {
  constructor() {
    this.icon = "";
    this.doc = inject(DOCUMENT);
    this.win = inject(WA_WINDOW);
    this.options = inject(TUI_SVG_OPTIONS);
    this.tuiSanitizer = inject(TUI_SANITIZER, {
      optional: true
    });
    this.svgService = inject(TuiSvgService);
    this.staticRequestService = inject(TuiStaticRequestService);
    this.sanitizer = inject(DomSanitizer);
    this.el = tuiInjectElement();
    this.baseHref = inject(TUI_BASE_HREF);
    this.src$ = new ReplaySubject(1);
    this.srcInterceptors = inject(TUI_SVG_SRC_INTERCEPTORS, {
      optional: true
    });
    this.innerHTML$ = this.src$.pipe(switchMap(() => {
      if (tuiIsString(this.icon)) {
        return this.isExternal ? this.getExternalIcon(this.icon) : of(this.getSafeHtml(this.icon));
      }
      return of(this.icon);
    }), startWith(""));
  }
  set src(src) {
    const deprecated = this.options.deprecated(String(src));
    ngDevMode && console.assert(!deprecated, deprecated);
    this.icon = (this.srcInterceptors ?? []).reduce((newSrc, interceptor) => interceptor(newSrc, this.options), this.options.srcProcessor(src || ""));
    this.src$.next();
  }
  get src() {
    return this.icon;
  }
  get use() {
    if (tuiIsString(this.icon)) {
      return this.icon.includes(".svg#") ? this.icon : this.resolveName(this.icon, this.options.path);
    }
    return "";
  }
  get isInnerHTML() {
    return !tuiIsString(this.icon) || this.isSrc || this.isExternal || this.isName && this.isShadowDOM;
  }
  onError(message = MISSING_EXTERNAL_ICON) {
    const {
      icon
    } = this;
    const event = new CustomEvent("tui-icon-error", {
      bubbles: true,
      detail: {
        message,
        icon
      }
    });
    ngDevMode && console.assert(false, message, icon);
    this.el.dispatchEvent(event);
  }
  get isShadowDOM() {
    return tuiGetDocumentOrShadowRoot(this.el) !== this.doc;
  }
  get isUse() {
    return this.use.replace(TUI_CACHE_BUSTING_PAYLOAD, "").includes(".svg#");
  }
  get isExternal() {
    return this.isUrl || this.isCrossDomain || !this.isSrc && !this.svgService.getOriginal(String(this.icon));
  }
  get isUrl() {
    return tuiIsString(this.icon) && this.icon.replace(TUI_CACHE_BUSTING_PAYLOAD, "").endsWith(".svg");
  }
  get isSrc() {
    return tuiIsString(this.icon) && tuiIsPresumedHTMLString(this.icon);
  }
  get isName() {
    return !this.isUrl && !this.isUse && !this.isSrc;
  }
  get isCrossDomain() {
    const {
      use,
      isUse,
      win
    } = this;
    return isUse && use.startsWith("http") && !!win.origin && !use.startsWith(win.origin);
  }
  resolveName(name, iconsPath) {
    return iconsPath(name, this.baseHref);
  }
  getSafeHtml(src) {
    return this.isSrc ? this.sanitize(src) : this.process(src);
  }
  process(src) {
    const icon = this.svgService.getOriginal(src);
    if (this.isName && !icon && !!src) {
      this.onError(UNDEFINED_NAMED_ICON);
    }
    return this.sanitize(icon || "");
  }
  sanitize(src) {
    src = this.options.contentProcessor(src);
    return this.tuiSanitizer && tuiIsString(src) ? this.sanitizer.bypassSecurityTrustHtml(this.tuiSanitizer.sanitize(SecurityContext.HTML, src) || "") : src;
  }
  getExternalIcon(src) {
    const url = src.includes(".svg") ? src : this.use;
    return this.staticRequestService.request(url).pipe(catchError(() => {
      this.onError(FAILED_EXTERNAL_ICON);
      return of("");
    }), map((response) => this.sanitize(response.replace("<svg", '<svg focusable="false"'))));
  }
  static {
    this.ɵfac = function TuiSvgComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSvgComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSvgComponent,
      selectors: [["tui-svg"]],
      inputs: {
        src: "src"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "t-src", 3, "innerHTML"]],
      template: function TuiSvgComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx.innerHTML$), ɵɵsanitizeHtml);
        }
      },
      dependencies: [AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:inline-flex;vertical-align:middle;flex-shrink:0;align-items:center;justify-content:center;line-height:0;block-size:1.5rem;inline-size:1.5rem;fill:transparent;stroke:transparent;font-size:1rem}.t-src[_ngcontent-%COMP%]{display:flex;inline-size:100%;block-size:100%;align-items:center;justify-content:center}.t-svg[_ngcontent-%COMP%]{overflow:visible}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiSvgComponent.prototype, "resolveName", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSvgComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-svg",
      imports: [AsyncPipe, NgIf, TuiLet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div\n    class="t-src"\n    [innerHTML]="innerHTML$ | async"\n></div>\n',
      styles: [":host{display:inline-flex;vertical-align:middle;flex-shrink:0;align-items:center;justify-content:center;line-height:0;block-size:1.5rem;inline-size:1.5rem;fill:transparent;stroke:transparent;font-size:1rem}.t-src{display:flex;inline-size:100%;block-size:100%;align-items:center;justify-content:center}.t-svg{overflow:visible}\n"]
    }]
  }], null, {
    src: [{
      type: Input
    }],
    resolveName: []
  });
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-color-selector.mjs
var _c04 = () => ({
  standalone: true
});
function TuiColorEditComponent_tui_data_list_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("value", item_r2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiColorEditComponent_tui_data_list_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 5);
    ɵɵtemplate(1, TuiColorEditComponent_tui_data_list_1_button_1_Template, 2, 2, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.modes);
  }
}
function TuiColorEditComponent_tui_primitive_textfield_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-primitive-textfield", 8);
    ɵɵlistener("valueChange", function TuiColorEditComponent_tui_primitive_textfield_2_Template_tui_primitive_textfield_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onHexChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("maskito", ctx_r2.hexMask)("tuiTextfieldLabelOutside", true)("value", ctx_r2.hex);
  }
}
function TuiColorEditComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-input-number", 9);
    ɵɵlistener("ngModelChange", function TuiColorEditComponent_ng_template_3_Template_tui_input_number_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRgbChange($event, ctx_r2.color[1], ctx_r2.color[2], ctx_r2.color[3]));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-input-number", 9);
    ɵɵlistener("ngModelChange", function TuiColorEditComponent_ng_template_3_Template_tui_input_number_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRgbChange(ctx_r2.color[0], $event, ctx_r2.color[2], ctx_r2.color[3]));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "tui-input-number", 9);
    ɵɵlistener("ngModelChange", function TuiColorEditComponent_ng_template_3_Template_tui_input_number_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRgbChange(ctx_r2.color[0], ctx_r2.color[1], $event, ctx_r2.color[3]));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("max", 255)("min", 0)("ngModel", ctx_r2.color[0])("ngModelOptions", ɵɵpureFunction0(15, _c04))("tuiTextfieldLabelOutside", true);
    ɵɵadvance();
    ɵɵproperty("max", 255)("min", 0)("ngModel", ctx_r2.color[1])("ngModelOptions", ɵɵpureFunction0(16, _c04))("tuiTextfieldLabelOutside", true);
    ɵɵadvance();
    ɵɵproperty("max", 255)("min", 0)("ngModel", ctx_r2.color[2])("ngModelOptions", ɵɵpureFunction0(17, _c04))("tuiTextfieldLabelOutside", true);
  }
}
function TuiLinearMultiPickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("dblclick", function TuiLinearMultiPickerComponent_div_0_Template_div_dblclick_0_listener() {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    })("mousedown", function TuiLinearMultiPickerComponent_div_0_Template_div_mousedown_0_listener() {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMouseDown(index_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵstyleProp("left", item_r4 * 100, "%");
  }
}
var _c14 = "[_nghost-%COMP%]{position:relative;display:block;block-size:1rem;box-sizing:border-box}.t-circle[_ngcontent-%COMP%]{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:0 -.5rem;box-shadow:inset 0 0 0 2px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}";
function TuiPaletteComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function TuiPaletteComponent_button_0_Template_button_click_0_listener() {
      const color_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selectedColor.emit(color_r2.value));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    ɵɵstyleProp("background", color_r2.value);
    ɵɵproperty("id", color_r2.key)("tuiHint", color_r2.key)("tuiHintDescribe", color_r2.key);
  }
}
function TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 12);
  }
}
function TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_Template_button_click_0_listener() {
      const mode_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onModeSelect(mode_r4));
    })("keydown.enter.prevent", function TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_Template_button_keydown_enter_prevent_0_listener() {
      const mode_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onModeSelect(mode_r4));
    })("keydown.space.prevent", function TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_Template_button_keydown_space_prevent_0_listener() {
      const mode_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onModeSelect(mode_r4));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_tui_icon_2_Template, 1, 0, "tui-icon", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const mode_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-checked", ctx_r1.isModeActive(mode_r4));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", mode_r4, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isModeActive(mode_r4));
  }
}
function TuiColorSelectorComponent_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 8);
    ɵɵtemplate(1, TuiColorSelectorComponent_ng_container_0_ng_template_4_button_1_Template, 3, 3, "button", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.modes);
  }
}
function TuiColorSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiColorSelectorComponent_ng_container_0_Template_div_tuiDropdownOpenChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.open, $event) || (ctx_r1.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementStart(2, "button", 6);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiColorSelectorComponent_ng_container_0_ng_template_4_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelement(6, "hr", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const menu_r5 = ɵɵreference(5);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tuiDropdown", menu_r5);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r1.open);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.currentMode, " ");
  }
}
function TuiColorSelectorComponent_ng_container_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function TuiColorSelectorComponent_ng_container_1_button_4_Template_button_click_0_listener() {
      const button_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDirectionChange(button_r8));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-direction_active", ctx_r1.isDirectionActive(button_r8));
    ɵɵproperty("iconStart", ctx_r1.getIcon(button_r8))("tuiHint", button_r8);
  }
}
function TuiColorSelectorComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13)(2, "tui-linear-multi-picker", 14);
    ɵɵlistener("indexChange", function TuiColorSelectorComponent_ng_container_1_Template_tui_linear_multi_picker_indexChange_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onIndexChange($event));
    })("valueChange", function TuiColorSelectorComponent_ng_container_1_Template_tui_linear_multi_picker_valueChange_2_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onStopsChange($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(3, "div", 15);
    ɵɵtemplate(4, TuiColorSelectorComponent_ng_container_1_button_4_Template, 1, 4, "button", 16);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("background", ctx_r1.gradient);
    ɵɵadvance();
    ɵɵproperty("value", ctx_r1.stopsKeys);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.buttons);
  }
}
function TuiColorSelectorComponent_tui_color_edit_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-color-edit", 18);
    ɵɵlistener("colorChange", function TuiColorSelectorComponent_tui_color_edit_3_Template_tui_color_edit_colorChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onColorChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("color", ctx_r1.color);
  }
}
function TuiColorSelectorComponent_tui_palette_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-palette", 19);
    ɵɵlistener("selectedColor", function TuiColorSelectorComponent_tui_palette_4_Template_tui_palette_selectedColor_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPalettePick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("colors", ctx_r1.palette);
  }
}
var HEX_MODE_LENGTH = 6;
var TuiColorEditComponent = class _TuiColorEditComponent {
  constructor() {
    this.color = [0, 0, 0, 1];
    this.colorChange = new EventEmitter();
    this.hexMask = {
      mask: new RegExp(`^[A-F\\d]{0,${HEX_MODE_LENGTH}}$`, "gi")
    };
    this.modes = ["HEX", "RGB"];
    this.mode = this.modes[0];
  }
  get isHex() {
    return this.mode === this.modes[0];
  }
  get hex() {
    return tuiRgbToHex(this.color[0], this.color[1], this.color[2]).replace("#", "");
  }
  get opacity() {
    return Math.round(this.color[3] * 100);
  }
  onHexChange(hex) {
    if (hex.length !== HEX_MODE_LENGTH) {
      return;
    }
    const rgb = tuiHexToRgb(hex);
    this.updateColor([rgb[0], rgb[1], rgb[2], this.color[3]]);
  }
  onRgbChange(...rgba) {
    this.updateColor(rgba);
  }
  updateColor(color) {
    this.color = color;
    this.colorChange.emit(color);
  }
  static {
    this.ɵfac = function TuiColorEditComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorEditComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiColorEditComponent,
      selectors: [["tui-color-edit"]],
      inputs: {
        color: "color"
      },
      outputs: {
        colorChange: "colorChange"
      },
      decls: 6,
      vars: 16,
      consts: [["rgb", ""], ["tuiDropdownAlign", "left", "tuiDropdownLimitWidth", "min", "tuiTextfieldSize", "m", 1, "t-select", 3, "ngModelChange", "ngModelOptions", "tuiTextfieldLabelOutside", "ngModel"], ["size", "s", 4, "tuiDataList"], ["tuiTextfieldSize", "m", 3, "maskito", "tuiTextfieldLabelOutside", "value", "valueChange", 4, "ngIf", "ngIfElse"], ["tuiTextfieldPostfix", "%", "tuiTextfieldSize", "m", 1, "t-opacity", 3, "ngModelChange", "max", "min", "ngModel", "ngModelOptions", "tuiTextfieldLabelOutside"], ["size", "s"], ["tuiOption", "", "type", "button", 3, "value", 4, "ngFor", "ngForOf"], ["tuiOption", "", "type", "button", 3, "value"], ["tuiTextfieldSize", "m", 3, "valueChange", "maskito", "tuiTextfieldLabelOutside", "value"], ["tuiTextfieldSize", "m", 1, "t-rgb", 3, "ngModelChange", "max", "min", "ngModel", "ngModelOptions", "tuiTextfieldLabelOutside"]],
      template: function TuiColorEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-select", 1);
          ɵɵtwoWayListener("ngModelChange", function TuiColorEditComponent_Template_tui_select_ngModelChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event);
            return ɵɵresetView($event);
          });
          ɵɵtemplate(1, TuiColorEditComponent_tui_data_list_1_Template, 2, 1, "tui-data-list", 2);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiColorEditComponent_tui_primitive_textfield_2_Template, 1, 3, "tui-primitive-textfield", 3)(3, TuiColorEditComponent_ng_template_3_Template, 3, 18, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(5, "tui-input-number", 4);
          ɵɵlistener("ngModelChange", function TuiColorEditComponent_Template_tui_input_number_ngModelChange_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onRgbChange(ctx.color[0], ctx.color[1], ctx.color[2], $event / 100));
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const rgb_r6 = ɵɵreference(4);
          ɵɵstyleProp("flex", "0 0 auto");
          ɵɵproperty("ngModelOptions", ɵɵpureFunction0(14, _c04))("tuiTextfieldLabelOutside", true);
          ɵɵtwoWayProperty("ngModel", ctx.mode);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.isHex)("ngIfElse", rgb_r6);
          ɵɵadvance(3);
          ɵɵstyleProp("flex", "0 0 auto");
          ɵɵproperty("max", 100)("min", 0)("ngModel", ctx.opacity)("ngModelOptions", ɵɵpureFunction0(15, _c04))("tuiTextfieldLabelOutside", true);
        }
      },
      dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MaskitoDirective, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldSizeDirective, TuiTextfieldPostfixDirective, TuiInputNumberComponent, TuiInputNumberDirective, TuiSelectComponent, TuiSelectDirective, TuiDropdownOptionsDirective, TuiDataListComponent, TuiDataListDirective, TuiOption],
      styles: ["[_nghost-%COMP%]{display:flex}.t-select[_ngcontent-%COMP%]{inline-size:5.875rem}.t-opacity[_ngcontent-%COMP%]{inline-size:4.275rem}.t-rgb[_ngcontent-%COMP%], .t-opacity[_ngcontent-%COMP%]{text-align:center}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorEditComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-color-edit",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<tui-select
    tuiDropdownAlign="left"
    tuiDropdownLimitWidth="min"
    tuiTextfieldSize="m"
    class="t-select"
    [ngModelOptions]="{standalone: true}"
    [style.flex]="'0 0 auto'"
    [tuiTextfieldLabelOutside]="true"
    [(ngModel)]="mode"
>
    <tui-data-list
        *tuiDataList
        size="s"
    >
        <button
            *ngFor="let item of modes"
            tuiOption
            type="button"
            [value]="item"
        >
            {{ item }}
        </button>
    </tui-data-list>
</tui-select>
<tui-primitive-textfield
    *ngIf="isHex; else rgb"
    tuiTextfieldSize="m"
    [maskito]="hexMask"
    [tuiTextfieldLabelOutside]="true"
    [value]="hex"
    (valueChange)="onHexChange($event)"
/>
<ng-template #rgb>
    <tui-input-number
        tuiTextfieldSize="m"
        class="t-rgb"
        [max]="255"
        [min]="0"
        [ngModel]="color[0]"
        [ngModelOptions]="{standalone: true}"
        [tuiTextfieldLabelOutside]="true"
        (ngModelChange)="onRgbChange($event, color[1], color[2], color[3])"
    />
    <tui-input-number
        tuiTextfieldSize="m"
        class="t-rgb"
        [max]="255"
        [min]="0"
        [ngModel]="color[1]"
        [ngModelOptions]="{standalone: true}"
        [tuiTextfieldLabelOutside]="true"
        (ngModelChange)="onRgbChange(color[0], $event, color[2], color[3])"
    />
    <tui-input-number
        tuiTextfieldSize="m"
        class="t-rgb"
        [max]="255"
        [min]="0"
        [ngModel]="color[2]"
        [ngModelOptions]="{standalone: true}"
        [tuiTextfieldLabelOutside]="true"
        (ngModelChange)="onRgbChange(color[0], color[1], $event, color[3])"
    />
</ng-template>
<tui-input-number
    tuiTextfieldPostfix="%"
    tuiTextfieldSize="m"
    class="t-opacity"
    [max]="100"
    [min]="0"
    [ngModel]="opacity"
    [ngModelOptions]="{standalone: true}"
    [style.flex]="'0 0 auto'"
    [tuiTextfieldLabelOutside]="true"
    (ngModelChange)="onRgbChange(color[0], color[1], color[2], $event / 100)"
/>
`,
      styles: [":host{display:flex}.t-select{inline-size:5.875rem}.t-opacity{inline-size:4.275rem}.t-rgb,.t-opacity{text-align:center}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    colorChange: [{
      type: Output
    }]
  });
})();
var TuiColorEditModule = class _TuiColorEditModule {
  static {
    this.ɵfac = function TuiColorEditModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorEditModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiColorEditModule,
      declarations: [TuiColorEditComponent],
      imports: [CommonModule, FormsModule, MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiInputNumberModule, TuiSelectModule, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup, TuiButton],
      exports: [TuiColorEditComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiInputNumberModule, TuiSelectModule, TuiDropdownComponent, TuiDataListComponent, TuiOption]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorEditModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiInputNumberModule, TuiSelectModule, ...TuiDropdown, ...TuiDataList, TuiButton],
      declarations: [TuiColorEditComponent],
      exports: [TuiColorEditComponent, ...TuiDropdown, ...TuiDataList]
    }]
  }], null, null);
})();
var TuiPickerService = class _TuiPickerService extends Observable {
  constructor() {
    super((subscriber) => this.point$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.point$ = tuiTypedFromEvent(this.el, "mousedown").pipe(tuiPreventDefault(), switchMap((event) => {
      const mouseMove$ = tuiTypedFromEvent(this.doc, "mousemove").pipe(map(({
        clientX,
        clientY
      }) => tuiGetElementPoint(clientX, clientY, this.el)), takeUntil(tuiTypedFromEvent(this.doc, "mouseup")));
      return event.target === this.el ? mouseMove$.pipe(startWith(tuiGetElementPoint(event.clientX, event.clientY, this.el))) : mouseMove$;
    }), takeUntilDestroyed());
  }
  static {
    this.ɵfac = function TuiPickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPickerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPickerService,
      factory: _TuiPickerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPickerService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiFlatPickerComponent = class _TuiFlatPickerComponent {
  constructor() {
    this.$ = inject(TuiPickerService).pipe(takeUntilDestroyed()).subscribe((point) => {
      this.value = point;
      this.valueChange.emit([point[0], point[1]]);
    });
    this.value = [0, 0];
    this.valueChange = new EventEmitter();
  }
  get left() {
    return this.value[0] * 100;
  }
  get top() {
    return this.value[1] * 100;
  }
  static {
    this.ɵfac = function TuiFlatPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlatPickerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFlatPickerComponent,
      selectors: [["tui-flat-picker"]],
      inputs: {
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [ɵɵProvidersFeature([TuiPickerService])],
      decls: 1,
      vars: 4,
      consts: [[1, "t-circle"]],
      template: function TuiFlatPickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
        }
        if (rf & 2) {
          ɵɵstyleProp("left", ctx.left, "%")("top", ctx.top, "%");
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;display:block}.t-circle[_ngcontent-%COMP%]{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:-.5rem 0 0 -.5rem;box-shadow:inset 0 0 0 1px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlatPickerComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-flat-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiPickerService],
      template: '<div\n    class="t-circle"\n    [style.left.%]="left"\n    [style.top.%]="top"\n></div>\n',
      styles: [":host{position:relative;display:block}.t-circle{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:-.5rem 0 0 -.5rem;box-shadow:inset 0 0 0 1px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var TuiLinearPickerComponent = class _TuiLinearPickerComponent {
  constructor() {
    this.$ = inject(TuiPickerService).pipe(takeUntilDestroyed()).subscribe(([x]) => {
      this.value = x;
      this.valueChange.emit(x);
    });
    this.value = 0;
    this.valueChange = new EventEmitter();
  }
  get left() {
    return this.value * 100;
  }
  static {
    this.ɵfac = function TuiLinearPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinearPickerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLinearPickerComponent,
      selectors: [["tui-linear-picker"]],
      inputs: {
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [ɵɵProvidersFeature([TuiPickerService])],
      decls: 1,
      vars: 2,
      consts: [[1, "t-circle"]],
      template: function TuiLinearPickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
        }
        if (rf & 2) {
          ɵɵstyleProp("left", ctx.left, "%");
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;display:block;block-size:1rem;box-sizing:border-box}.t-circle[_ngcontent-%COMP%]{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:0 -.5rem;box-shadow:inset 0 0 0 2px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinearPickerComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-linear-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiPickerService],
      template: '<div\n    class="t-circle"\n    [style.left.%]="left"\n></div>\n',
      styles: [":host{position:relative;display:block;block-size:1rem;box-sizing:border-box}.t-circle{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:0 -.5rem;box-shadow:inset 0 0 0 2px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var TuiColorPickerComponent = class _TuiColorPickerComponent {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.point = [0, 1];
    this.hue = 0;
    this.opacity = 1;
    this.colorChange = new EventEmitter();
  }
  set color(color) {
    if (this.currentColor.every((item, index) => item === color[index]) && color[3] === this.opacity) {
      return;
    }
    const [h, s, v] = tuiRgbToHsv(color[0], color[1], color[2]);
    this.opacity = color[3];
    this.hue = h / 360;
    this.point = [s, 1 - v / 255];
  }
  get currentColor() {
    return this.getCurrentColor(this.hue, this.point);
  }
  get base() {
    return `rgb(${tuiHsvToRgb(this.hue * 360, 1, 255)})`;
  }
  get gradient() {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(to right, rgba(${this.currentColor.join(",")}, 0), rgb(${this.currentColor.join(",")}))`);
  }
  onPointChange(point) {
    this.point = point;
    this.updateColor();
  }
  onHueChange(hue) {
    this.hue = hue;
    this.updateColor();
  }
  onOpacityChange(opacity) {
    this.opacity = tuiRound(opacity, 2);
    this.updateColor();
  }
  getCurrentColor(hue, point) {
    return tuiHsvToRgb(hue * 360, point[0], (1 - point[1]) * 255);
  }
  updateColor() {
    this.colorChange.emit([...this.currentColor, this.opacity]);
  }
  static {
    this.ɵfac = function TuiColorPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorPickerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiColorPickerComponent,
      selectors: [["tui-color-picker"]],
      inputs: {
        color: "color"
      },
      outputs: {
        colorChange: "colorChange"
      },
      decls: 5,
      vars: 7,
      consts: [[1, "t-flat", 3, "valueChange", "value"], [1, "t-wrapper", "t-wrapper_hue"], [1, "t-hue", 3, "valueChange", "value"], [1, "t-wrapper", "t-wrapper_opacity"], [1, "t-opacity", 3, "valueChange", "value"]],
      template: function TuiColorPickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-flat-picker", 0);
          ɵɵlistener("valueChange", function TuiColorPickerComponent_Template_tui_flat_picker_valueChange_0_listener($event) {
            return ctx.onPointChange($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(1, "div", 1)(2, "tui-linear-picker", 2);
          ɵɵlistener("valueChange", function TuiColorPickerComponent_Template_tui_linear_picker_valueChange_2_listener($event) {
            return ctx.onHueChange($event);
          });
          ɵɵelementEnd()();
          ɵɵelementStart(3, "div", 3)(4, "tui-linear-picker", 4);
          ɵɵlistener("valueChange", function TuiColorPickerComponent_Template_tui_linear_picker_valueChange_4_listener($event) {
            return ctx.onOpacityChange($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵstyleProp("background-color", ctx.base);
          ɵɵproperty("value", ctx.point);
          ɵɵadvance(2);
          ɵɵproperty("value", ctx.hue);
          ɵɵadvance();
          ɵɵstyleProp("background", ctx.gradient);
          ɵɵadvance();
          ɵɵproperty("value", ctx.opacity);
        }
      },
      dependencies: [TuiFlatPickerComponent, TuiLinearPickerComponent],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;isolation:isolate}.t-flat[_ngcontent-%COMP%]{block-size:14rem;background:linear-gradient(#0000,#000),linear-gradient(to right,#fff,#fff0);margin-bottom:.25rem;overflow:hidden}.t-wrapper[_ngcontent-%COMP%]{position:relative;margin:1rem 1.25rem;border-radius:.5rem}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-shadow:inset 0 0 0 1px #00000014;pointer-events:none;border-radius:inherit}.t-wrapper_hue[_ngcontent-%COMP%]{background:red}.t-wrapper_opacity[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1;background-image:linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03)),linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03));background-size:.375rem .375rem;background-position:0 0,.1875rem .1875rem;border-radius:inherit}.t-hue[_ngcontent-%COMP%]{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);border-radius:inherit;margin:0 .5rem}.t-opacity[_ngcontent-%COMP%]{border-radius:inherit;margin:0 .5rem}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiColorPickerComponent.prototype, "getCurrentColor", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorPickerComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-color-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-flat-picker\n    class="t-flat"\n    [style.backgroundColor]="base"\n    [value]="point"\n    (valueChange)="onPointChange($event)"\n/>\n<div class="t-wrapper t-wrapper_hue">\n    <tui-linear-picker\n        class="t-hue"\n        [value]="hue"\n        (valueChange)="onHueChange($event)"\n    />\n</div>\n<div\n    class="t-wrapper t-wrapper_opacity"\n    [style.background]="gradient"\n>\n    <tui-linear-picker\n        class="t-opacity"\n        [value]="opacity"\n        (valueChange)="onOpacityChange($event)"\n    />\n</div>\n',
      styles: [':host{position:relative;display:block;isolation:isolate}.t-flat{block-size:14rem;background:linear-gradient(#0000,#000),linear-gradient(to right,#fff,#fff0);margin-bottom:.25rem;overflow:hidden}.t-wrapper{position:relative;margin:1rem 1.25rem;border-radius:.5rem}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-shadow:inset 0 0 0 1px #00000014;pointer-events:none;border-radius:inherit}.t-wrapper_hue{background:red}.t-wrapper_opacity:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1;background-image:linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03)),linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03));background-size:.375rem .375rem;background-position:0 0,.1875rem .1875rem;border-radius:inherit}.t-hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red);border-radius:inherit;margin:0 .5rem}.t-opacity{border-radius:inherit;margin:0 .5rem}\n']
    }]
  }], null, {
    colorChange: [{
      type: Output
    }],
    color: [{
      type: Input
    }],
    getCurrentColor: []
  });
})();
var TuiFlatPickerModule = class _TuiFlatPickerModule {
  static {
    this.ɵfac = function TuiFlatPickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlatPickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiFlatPickerModule,
      declarations: [TuiFlatPickerComponent],
      imports: [CommonModule],
      exports: [TuiFlatPickerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlatPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiFlatPickerComponent],
      exports: [TuiFlatPickerComponent]
    }]
  }], null, null);
})();
var TuiLinearPickerModule = class _TuiLinearPickerModule {
  static {
    this.ɵfac = function TuiLinearPickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinearPickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiLinearPickerModule,
      declarations: [TuiLinearPickerComponent],
      imports: [CommonModule],
      exports: [TuiLinearPickerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinearPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiLinearPickerComponent],
      exports: [TuiLinearPickerComponent]
    }]
  }], null, null);
})();
var TuiColorPickerModule = class _TuiColorPickerModule {
  static {
    this.ɵfac = function TuiColorPickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorPickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiColorPickerModule,
      declarations: [TuiColorPickerComponent],
      imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule],
      exports: [TuiColorPickerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiFlatPickerModule, TuiLinearPickerModule],
      declarations: [TuiColorPickerComponent],
      exports: [TuiColorPickerComponent]
    }]
  }], null, null);
})();
var TUI_COLOR_SELECTOR_MODE_NAMES = tuiCreateToken(["Solid color", "Gradient"]);
var TUI_DEFAULT_INPUT_COLORS = /* @__PURE__ */ new Map([["color-black-100", "#909090"], ["color-black-200", "#666666"], ["color-black-300", "#333333"], ["color-blue-100", "#1771e6"], ["color-blue-200", "#1464cc"], ["color-blue-300", "#0953b3"], ["color-gray-100", "#f5f5f6"], ["color-gray-200", "#e7e8ea"], ["color-gray-300", "#cbcfd3"], ["color-gray-400", "#959ba4"], ["color-gray-500", "#79818c"], ["color-gray-600", "#616871"], ["color-green-100", "#39b54a"], ["color-green-200", "#2ca53a"], ["color-green-300", "#168a21"], ["color-light-blue-100", "#ecf1f7"], ["color-light-blue-200", "#e4ebf3"], ["color-light-blue-300", "#dde4ed"], ["color-red-100", "#e01f19"], ["color-red-200", "#d3120e"], ["color-red-300", "#c40b08"], ["color-yellow-100", "#FFDD2C"], ["color-yellow-200", "#FCC521"], ["color-yellow-300", "#FAB618"], ["transparent", "transparent"]]);
var TuiColorSelectorMode = {
  SolidColor: 0,
  Gradient: 1
};
var TUI_COLOR_SELECTOR_DEFAULT_OPTIONS = {
  selectorMode: true,
  mode: TuiColorSelectorMode.SolidColor,
  color: [0, 0, 0, 1],
  colors: /* @__PURE__ */ new Map(),
  gradient: {
    icons: {
      "to top right": "@tui.move-up-right",
      "to right": "@tui.move-right",
      "to bottom right": "@tui.move-down-right",
      "to bottom": "@tui.move-down",
      "to bottom left": "@tui.move-down-left",
      "to left": "@tui.move-left",
      "to top left": "@tui.move-up-left",
      "to top": "@tui.move-up"
    },
    steps: [[0, [0, 0, 0, 1]], [1, [255, 255, 255, 1]]],
    stop: 0,
    direction: "to bottom",
    emptyStop: [0, 0, 0, 0],
    buttons: ["to top right", "to right", "to bottom right", "to bottom", "to bottom left", "to left", "to top left", "to top"]
  }
};
var TUI_COLOR_SELECTOR_OPTIONS = tuiCreateToken(TUI_COLOR_SELECTOR_DEFAULT_OPTIONS);
function tuiColorSelectorOptionsProvider(options) {
  return tuiProvideOptions(TUI_COLOR_SELECTOR_OPTIONS, options, TUI_COLOR_SELECTOR_DEFAULT_OPTIONS);
}
var TuiLinearMultiPickerComponent = class _TuiLinearMultiPickerComponent {
  constructor() {
    this.$ = inject(TuiPickerService).pipe(takeUntilDestroyed()).subscribe(([x]) => this.onPicker(x));
    this.value = [0, 1];
    this.valueChange = new EventEmitter();
    this.indexChange = new EventEmitter();
    this.index = NaN;
  }
  onMouseUp() {
    this.index = NaN;
  }
  onMouseDown(index) {
    this.updateIndex(index);
  }
  onClick(index) {
    if (this.value.length > 2) {
      this.updateValue(this.value.filter((_, i) => i !== index));
    }
  }
  onPicker(x) {
    if (Number.isNaN(this.index)) {
      this.updateIndex(this.value.length);
      this.value = [...this.value, 0];
    }
    if (this.value.some((item, index) => item === x && index !== this.index)) {
      return;
    }
    this.updateValue(this.value.map((item, index) => index === this.index ? x : item));
  }
  updateIndex(index) {
    this.index = index;
    this.indexChange.emit(index);
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = function TuiLinearMultiPickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinearMultiPickerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLinearMultiPickerComponent,
      selectors: [["tui-linear-multi-picker"]],
      hostBindings: function TuiLinearMultiPickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseup", function TuiLinearMultiPickerComponent_mouseup_HostBindingHandler() {
            return ctx.onMouseUp();
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        value: "value"
      },
      outputs: {
        valueChange: "valueChange",
        indexChange: "indexChange"
      },
      features: [ɵɵProvidersFeature([TuiPickerService])],
      decls: 1,
      vars: 1,
      consts: [["class", "t-circle", 3, "left", "dblclick", "mousedown", 4, "ngFor", "ngForOf"], [1, "t-circle", 3, "dblclick", "mousedown"]],
      template: function TuiLinearMultiPickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiLinearMultiPickerComponent_div_0_Template, 1, 2, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.value);
        }
      },
      dependencies: [NgForOf],
      styles: [_c14],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinearMultiPickerComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-linear-multi-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiPickerService],
      host: {
        "(document:mouseup)": "onMouseUp()"
      },
      template: '<div\n    *ngFor="let item of value; let index = index"\n    class="t-circle"\n    [style.left.%]="item * 100"\n    (dblclick)="onClick(index)"\n    (mousedown)="onMouseDown(index)"\n></div>\n',
      styles: [":host{position:relative;display:block;block-size:1rem;box-sizing:border-box}.t-circle{position:absolute;inline-size:1rem;block-size:1rem;border-radius:100%;margin:0 -.5rem;box-shadow:inset 0 0 0 2px var(--tui-base-01),0 0 0 1px var(--tui-base-03)}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    indexChange: [{
      type: Output
    }]
  });
})();
var TuiPaletteComponent = class _TuiPaletteComponent {
  constructor() {
    this.colors = /* @__PURE__ */ new Map();
    this.selectedColor = new EventEmitter();
    this.originalOrder = (_a, _b) => 0;
  }
  static {
    this.ɵfac = function TuiPaletteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPaletteComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPaletteComponent,
      selectors: [["tui-palette"]],
      inputs: {
        colors: "colors"
      },
      outputs: {
        selectedColor: "selectedColor"
      },
      decls: 2,
      vars: 4,
      consts: [["type", "button", "class", "t-button", 3, "id", "background", "tuiHint", "tuiHintDescribe", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "t-button", 3, "click", "id", "tuiHint", "tuiHintDescribe"]],
      template: function TuiPaletteComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiPaletteComponent_button_0_Template, 1, 5, "button", 0);
          ɵɵpipe(1, "keyvalue");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind2(1, 1, ctx.colors, ctx.originalOrder));
        }
      },
      dependencies: [NgForOf, TuiHintDirective, TuiHintDescribe, KeyValuePipe],
      styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;padding:.875rem}.t-button[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;background:none;font-size:inherit;line-height:inherit;inline-size:1.5625rem;block-size:1.5625rem;box-sizing:border-box;margin:.375rem;border-radius:var(--tui-radius-m);border:1px solid rgba(0,0,0,.08)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPaletteComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-palette",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<button\n    *ngFor="let color of colors | keyvalue: originalOrder"\n    type="button"\n    class="t-button"\n    [id]="color.key"\n    [style.background]="color.value"\n    [tuiHint]="color.key"\n    [tuiHintDescribe]="color.key"\n    (click)="selectedColor.emit(color.value)"\n></button>\n',
      styles: [":host{display:flex;flex-wrap:wrap;padding:.875rem}.t-button{-webkit-appearance:none;appearance:none;padding:0;background:none;font-size:inherit;line-height:inherit;inline-size:1.5625rem;block-size:1.5625rem;box-sizing:border-box;margin:.375rem;border-radius:var(--tui-radius-m);border:1px solid rgba(0,0,0,.08)}\n"]
    }]
  }], null, {
    colors: [{
      type: Input
    }],
    selectedColor: [{
      type: Output
    }]
  });
})();
var TuiColorSelectorComponent = class _TuiColorSelectorComponent {
  constructor() {
    this.selectorOptions = inject(TUI_COLOR_SELECTOR_OPTIONS);
    this.stops = new Map(this.selectorOptions.gradient.steps);
    this.currentStop = this.selectorOptions.gradient.stop;
    this.direction = this.selectorOptions.gradient.direction;
    this.sanitizer = inject(DomSanitizer);
    this.open = false;
    this.colors = this.selectorOptions.colors;
    this.colorChange = new EventEmitter();
    this.color = this.selectorOptions.color;
    this.modes = inject(TUI_COLOR_SELECTOR_MODE_NAMES);
    this.currentMode = this.modes[this.selectorOptions.mode];
    this.buttons = this.selectorOptions.gradient.buttons;
  }
  set colorSetter(color) {
    if (color.startsWith("linear-gradient")) {
      this.parseGradient(color);
    } else {
      this.parseColor(color);
    }
  }
  get selectorMode() {
    return this.selectorOptions.selectorMode;
  }
  get palette() {
    return this.filterPalette(this.colors, this.isGradient);
  }
  get stopsKeys() {
    return this.getStopsKeys(this.stops);
  }
  get currentColor() {
    return this.isGradient ? this.getStop(this.currentStop) : this.color;
  }
  get gradient() {
    return this.sanitizer.bypassSecurityTrustStyle(this.getGradient("to right"));
  }
  get isGradient() {
    return this.currentMode === this.modes[TuiColorSelectorMode.Gradient];
  }
  getIcon(direction) {
    return this.selectorOptions.gradient.icons[direction];
  }
  isModeActive(mode) {
    return this.currentMode === mode;
  }
  isDirectionActive(direction) {
    return this.direction === direction;
  }
  onPalettePick(color) {
    this.updateColor(color);
  }
  onDirectionChange(direction) {
    this.direction = direction;
    this.updateColor(this.getGradient(direction));
  }
  onModeSelect(mode) {
    this.currentMode = mode;
    this.open = false;
    this.updateColor(mode === this.modes[TuiColorSelectorMode.SolidColor] ? `rgba(${this.color.join(", ")})` : this.getGradient(this.direction));
  }
  onIndexChange(index) {
    this.currentStop = this.stopsKeys[index] ?? 0;
  }
  onColorChange(color) {
    if (!this.isGradient) {
      this.updateColor(`rgba(${color.join(", ")})`);
      return;
    }
    this.stops.set(this.currentStop, color);
    this.updateColor(this.getGradient(this.direction));
  }
  onStopsChange(stopsKeys) {
    const removed = this.stopsKeys.find((item) => !stopsKeys.includes(item));
    const added = stopsKeys.find((item) => !this.stopsKeys.includes(item));
    if (removed === void 0 && added !== void 0) {
      this.addStop(added);
    }
    if (removed !== void 0 && added === void 0) {
      this.removeStop(removed);
    }
    if (removed !== void 0 && added !== void 0) {
      this.replaceStop(removed, added);
    }
    this.updateColor(this.getGradient(this.direction));
  }
  getStopsKeys(stops) {
    return Array.from(stops.keys());
  }
  filterPalette(colors, isGradient) {
    const map2 = new Map(colors);
    map2.forEach((value, key) => {
      if (value.startsWith("linear-gradient") && !isGradient || !value.startsWith("linear-gradient") && isGradient) {
        map2.delete(key);
      }
    });
    return map2;
  }
  updateColor(color) {
    this.colorChange.emit(color);
  }
  getGradient(direction) {
    return `linear-gradient(${direction}, ${[...this.stopsKeys].sort(tuiDefaultSort).map((key) => `rgba(${this.getStop(key).join(", ")}) ${key * 100}%`).join(", ")})`;
  }
  getStop(stop) {
    return this.stops.get(stop) || this.selectorOptions.gradient.emptyStop;
  }
  addStop(stop) {
    const closest = this.stopsKeys.reduce((prev, curr) => Math.abs(curr - stop) < Math.abs(prev - stop) ? curr : prev, this.stopsKeys[0] ?? 0);
    this.stops.set(stop, this.getStop(closest));
    this.stops = new Map(this.stops);
    this.currentStop = stop;
  }
  removeStop(stop) {
    this.stops.delete(stop);
    this.stops = new Map(this.stops);
    this.currentStop = this.stopsKeys[0] ?? 0;
  }
  replaceStop(removed, added) {
    const value = this.getStop(removed);
    this.currentStop = added;
    this.stops = new Map(this.stopsKeys.map((key) => key === removed ? [added, value] : [key, this.getStop(key)]));
  }
  parseGradient(color) {
    if (color === this.getGradient(this.direction)) {
      return;
    }
    const gradient = tuiParseGradient(tuiGetGradientData(color));
    this.direction = gradient.side;
    this.currentStop = this.selectorOptions.gradient.stop;
    this.stops = new Map(gradient.stops.length ? gradient.stops.map(({
      color: color2,
      position
    }) => [parseFloat(position) / 100, tuiParseColor(color2)]) : this.selectorOptions.gradient.steps);
  }
  parseColor(color) {
    this.currentStop = this.selectorOptions.gradient.stop;
    this.color = tuiParseColor(color);
  }
  static {
    this.ɵfac = function TuiColorSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorSelectorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiColorSelectorComponent,
      selectors: [["tui-color-selector"]],
      inputs: {
        colors: "colors",
        colorSetter: [0, "color", "colorSetter"]
      },
      outputs: {
        colorChange: "colorChange"
      },
      decls: 5,
      vars: 5,
      consts: [["menu", ""], [4, "ngIf"], [3, "colorChange", "color"], ["tuiGroup", "", "class", "t-edit", 3, "color", "colorChange", 4, "ngIf"], ["class", "t-palette", 3, "colors", "selectedColor", 4, "ngIf"], [1, "t-select", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownOpen"], ["appearance", "", "size", "s", "tuiButton", "", "tuiChevron", "", "type", "button"], [1, "t-hr"], ["role", "menu", "size", "s", 1, "t-menu"], ["role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "keydown.enter.prevent", "keydown.space.prevent", 4, "ngFor", "ngForOf"], ["role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "keydown.enter.prevent", "keydown.space.prevent"], ["icon", "@tui.check", "class", "t-checkmark", 4, "ngIf"], ["icon", "@tui.check", 1, "t-checkmark"], [1, "t-wrapper"], [1, "t-gradient", 3, "indexChange", "valueChange", "value"], [1, "t-buttons"], ["appearance", "", "size", "xs", "tuiHintDescribe", "", "tuiIconButton", "", "type", "button", "class", "t-direction", 3, "t-direction_active", "iconStart", "tuiHint", "click", 4, "ngFor", "ngForOf"], ["appearance", "", "size", "xs", "tuiHintDescribe", "", "tuiIconButton", "", "type", "button", 1, "t-direction", 3, "click", "iconStart", "tuiHint"], ["tuiGroup", "", 1, "t-edit", 3, "colorChange", "color"], [1, "t-palette", 3, "selectedColor", "colors"]],
      template: function TuiColorSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiColorSelectorComponent_ng_container_0_Template, 7, 3, "ng-container", 1)(1, TuiColorSelectorComponent_ng_container_1_Template, 5, 4, "ng-container", 1);
          ɵɵelementStart(2, "tui-color-picker", 2);
          ɵɵlistener("colorChange", function TuiColorSelectorComponent_Template_tui_color_picker_colorChange_2_listener($event) {
            return ctx.onColorChange($event);
          });
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiColorSelectorComponent_tui_color_edit_3_Template, 1, 1, "tui-color-edit", 3)(4, TuiColorSelectorComponent_tui_palette_4_Template, 1, 1, "tui-palette", 4);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.selectorMode);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isGradient);
          ɵɵadvance();
          ɵɵproperty("color", ctx.currentColor);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.isGradient);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.palette.size);
        }
      },
      dependencies: [NgForOf, NgIf, TuiButton, TuiColorPickerComponent, TuiLinearMultiPickerComponent, TuiColorEditComponent, TuiDropdownDirective, TuiDropdownOpen, TuiDataListComponent, TuiOption, TuiGroup, TuiPaletteComponent, TuiHintDirective, TuiHintDescribe, TuiChevron, TuiIcon],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;isolation:isolate;inline-size:22.6rem}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{position:relative;margin:1.25rem;border-radius:.5rem}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-shadow:inset 0 0 0 1px #00000014;pointer-events:none;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1;background-image:linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03)),linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03));background-size:.375rem .375rem;background-position:0 0,.1875rem .1875rem;border-radius:inherit}.t-hr[_ngcontent-%COMP%]{block-size:1px;margin:0 0 0 -1px;border:none;background:var(--tui-base-03)}.t-gradient[_ngcontent-%COMP%]{margin:0 .5rem;border-radius:inherit}.t-select[_ngcontent-%COMP%]{margin:.75rem .5rem 0}.t-arrow[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-arrow_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-menu[_ngcontent-%COMP%]{inline-size:11.25rem}.t-checkmark[_ngcontent-%COMP%]{margin-left:auto;inline-size:1rem;block-size:1rem}.t-buttons[_ngcontent-%COMP%]{display:flex;padding:0 .75rem 1.25rem;justify-content:space-between}.t-direction[_ngcontent-%COMP%]{color:var(--tui-text-02);margin:0 .375rem}.t-direction[_ngcontent-%COMP%]:hover, .t-direction_active[_ngcontent-%COMP%]{color:var(--tui-text-01);background:var(--tui-secondary-hover)}.t-edit[_ngcontent-%COMP%]{margin:1.25rem}.t-palette[_ngcontent-%COMP%]{box-sizing:border-box;box-shadow:inset 0 1px var(--tui-base-03)}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiColorSelectorComponent.prototype, "getStopsKeys", null);
__decorate([tuiPure], TuiColorSelectorComponent.prototype, "filterPalette", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorSelectorComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-color-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="selectorMode">\n    <div\n        class="t-select"\n        [tuiDropdown]="menu"\n        [(tuiDropdownOpen)]="open"\n    >\n        <button\n            appearance=""\n            size="s"\n            tuiButton\n            tuiChevron\n            type="button"\n        >\n            {{ currentMode }}\n        </button>\n\n        <ng-template #menu>\n            <tui-data-list\n                role="menu"\n                size="s"\n                class="t-menu"\n            >\n                <button\n                    *ngFor="let mode of modes"\n                    role="menuitemradio"\n                    tuiOption\n                    type="button"\n                    [attr.aria-checked]="isModeActive(mode)"\n                    (click)="onModeSelect(mode)"\n                    (keydown.enter.prevent)="onModeSelect(mode)"\n                    (keydown.space.prevent)="onModeSelect(mode)"\n                >\n                    {{ mode }}\n                    <tui-icon\n                        *ngIf="isModeActive(mode)"\n                        icon="@tui.check"\n                        class="t-checkmark"\n                    />\n                </button>\n            </tui-data-list>\n        </ng-template>\n    </div>\n    <hr class="t-hr" />\n</ng-container>\n\n<ng-container *ngIf="isGradient">\n    <div\n        class="t-wrapper"\n        [style.background]="gradient"\n    >\n        <tui-linear-multi-picker\n            class="t-gradient"\n            [value]="stopsKeys"\n            (indexChange)="onIndexChange($event)"\n            (valueChange)="onStopsChange($event)"\n        />\n    </div>\n    <div class="t-buttons">\n        <!-- TODO: Change to `tuiHintDescribe` when figure tuiDriver order issue -->\n        <button\n            *ngFor="let button of buttons"\n            appearance=""\n            size="xs"\n            tuiHintDescribe\n            tuiIconButton\n            type="button"\n            class="t-direction"\n            [class.t-direction_active]="isDirectionActive(button)"\n            [iconStart]="getIcon(button)"\n            [tuiHint]="button"\n            (click)="onDirectionChange(button)"\n        ></button>\n    </div>\n</ng-container>\n<tui-color-picker\n    [color]="currentColor"\n    (colorChange)="onColorChange($event)"\n/>\n<tui-color-edit\n    *ngIf="!isGradient"\n    tuiGroup\n    class="t-edit"\n    [color]="color"\n    (colorChange)="onColorChange($event)"\n/>\n<tui-palette\n    *ngIf="palette.size"\n    class="t-palette"\n    [colors]="palette"\n    (selectedColor)="onPalettePick($event)"\n/>\n',
      styles: [':host{position:relative;display:block;isolation:isolate;inline-size:22.6rem}:host :host-context(*:disabled){pointer-events:none}.t-wrapper{position:relative;margin:1.25rem;border-radius:.5rem}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-shadow:inset 0 0 0 1px #00000014;pointer-events:none;border-radius:inherit}.t-wrapper:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";z-index:-1;background-image:linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03)),linear-gradient(45deg,var(--tui-base-03) 25%,transparent 25%,transparent 75%,var(--tui-base-03) 75%,var(--tui-base-03));background-size:.375rem .375rem;background-position:0 0,.1875rem .1875rem;border-radius:inherit}.t-hr{block-size:1px;margin:0 0 0 -1px;border:none;background:var(--tui-base-03)}.t-gradient{margin:0 .5rem;border-radius:inherit}.t-select{margin:.75rem .5rem 0}.t-arrow{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-arrow_rotated{transform:rotate(180deg)}.t-menu{inline-size:11.25rem}.t-checkmark{margin-left:auto;inline-size:1rem;block-size:1rem}.t-buttons{display:flex;padding:0 .75rem 1.25rem;justify-content:space-between}.t-direction{color:var(--tui-text-02);margin:0 .375rem}.t-direction:hover,.t-direction_active{color:var(--tui-text-01);background:var(--tui-secondary-hover)}.t-edit{margin:1.25rem}.t-palette{box-sizing:border-box;box-shadow:inset 0 1px var(--tui-base-03)}\n']
    }]
  }], null, {
    colors: [{
      type: Input
    }],
    colorChange: [{
      type: Output
    }],
    colorSetter: [{
      type: Input,
      args: ["color"]
    }],
    getStopsKeys: [],
    filterPalette: []
  });
})();
var TuiLinearMultiPickerModule = class _TuiLinearMultiPickerModule {
  static {
    this.ɵfac = function TuiLinearMultiPickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinearMultiPickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiLinearMultiPickerModule,
      declarations: [TuiLinearMultiPickerComponent],
      imports: [CommonModule],
      exports: [TuiLinearMultiPickerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinearMultiPickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [TuiLinearMultiPickerComponent],
      exports: [TuiLinearMultiPickerComponent]
    }]
  }], null, null);
})();
var TuiPaletteModule = class _TuiPaletteModule {
  static {
    this.ɵfac = function TuiPaletteModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPaletteModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiPaletteModule,
      declarations: [TuiPaletteComponent],
      imports: [CommonModule, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer],
      exports: [TuiPaletteComponent, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiHintComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPaletteModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ...TuiHint],
      declarations: [TuiPaletteComponent],
      exports: [TuiPaletteComponent, ...TuiHint]
    }]
  }], null, null);
})();
var TuiColorSelectorModule = class _TuiColorSelectorModule {
  static {
    this.ɵfac = function TuiColorSelectorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiColorSelectorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiColorSelectorModule,
      declarations: [TuiColorSelectorComponent],
      imports: [CommonModule, TuiButton, TuiSvgComponent, TuiColorPickerModule, TuiLinearMultiPickerModule, TuiActiveZone, TuiColorEditModule, TuiGroup, TuiPaletteModule, TuiChevron, TuiIcon, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup],
      exports: [TuiColorSelectorComponent, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiSvgComponent, TuiColorPickerModule, TuiLinearMultiPickerModule, TuiColorEditModule, TuiPaletteModule, TuiIcon, TuiHintComponent, TuiDataListComponent, TuiOption]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiColorSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiButton, TuiSvgComponent, TuiColorPickerModule, TuiLinearMultiPickerModule, TuiActiveZone, TuiColorEditModule, TuiGroup, TuiPaletteModule, TuiChevron, TuiIcon, ...TuiHint, ...TuiDataList],
      declarations: [TuiColorSelectorComponent],
      exports: [TuiColorSelectorComponent, ...TuiHint, ...TuiDataList]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-combo-box.mjs
var _c05 = ["*", [["input"]]];
var _c15 = ["*", "input"];
var _c23 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
function TuiComboBoxComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
function TuiComboBoxComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, TuiComboBoxComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.computedContent)("polymorpheusOutletContext", ɵɵpureFunction2(2, _c23, ctx_r2.value, ctx_r2.computedFocused));
  }
}
function TuiComboBoxComponent_ng_template_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiComboBoxComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiComboBoxComponent_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.arrow);
  }
}
var TuiComboBoxComponent = class _TuiComboBoxComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.arrowMode = inject(TUI_ARROW_MODE);
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.stringify = this.itemsHandlers.stringify;
    this.strictMatcher = TUI_STRICT_MATCHER;
    this.identityMatcher = this.itemsHandlers.identityMatcher;
    this.strict = true;
    this.search = null;
    this.searchChange = new EventEmitter();
    this.open = false;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.tuiDropdownOpen;
  }
  get nativeValue() {
    return this.value === null ? this.search || "" : this.stringify(this.value);
  }
  checkOption(option) {
    if (!this.isStrictMatch(option)) {
      return;
    }
    this.value = option;
    this.updateSearch(null);
  }
  handleOption(item) {
    this.focusInput();
    this.close();
    this.updateSearch(null);
    this.value = item;
    if (this.value) {
      this.setNativeValue(this.stringify(item));
    }
  }
  onValueChange(value) {
    this.updateSearch(value);
    const match = this.accessor?.getOptions().find((item) => this.isStrictMatch(item));
    if (match !== void 0) {
      this.value = match;
      this.updateSearch(null);
      return;
    }
    if (this.strict || this.search === "") {
      this.value = null;
    }
    if (this.search !== "") {
      this.open = true;
    }
  }
  toggle() {
    this.open = !this.open;
  }
  get arrow() {
    return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
  }
  get showValueTemplate() {
    return tuiIsPresent(this.value) && !this.focused;
  }
  get computedContent() {
    return this.valueContent || this.nativeValue;
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  onFieldKeyDownEnter(event) {
    if (this.open) {
      event.preventDefault();
    }
    const options = this.accessor?.getOptions() || [];
    if (options.length !== 1) {
      return;
    }
    this.value = options[0] ?? null;
    this.updateSearch(null);
    this.close();
  }
  isStrictMatch(item) {
    return !!this.search && !!this.strictMatcher?.(item, this.search, this.stringify);
  }
  close() {
    this.open = false;
  }
  updateSearch(search) {
    if (this.search === search) {
      return;
    }
    this.search = search;
    this.searchChange.emit(search);
  }
  setNativeValue(value) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = value;
    }
  }
  focusInput(preventScroll = false) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll
      });
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiComboBoxComponent_BaseFactory;
      return function TuiComboBoxComponent_Factory(__ngFactoryType__) {
        return (ɵTuiComboBoxComponent_BaseFactory || (ɵTuiComboBoxComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiComboBoxComponent)))(__ngFactoryType__ || _TuiComboBoxComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiComboBoxComponent,
      selectors: [["tui-combo-box"]],
      contentQueries: function TuiComboBoxComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_ACCESSOR, 5);
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accessor = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      viewQuery: function TuiComboBoxComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDropdownOpen, 5);
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiComboBoxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        stringify: "stringify",
        strictMatcher: "strictMatcher",
        identityMatcher: "identityMatcher",
        valueContent: "valueContent",
        strict: "strict",
        search: "search"
      },
      outputs: {
        searchChange: "searchChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiComboBoxComponent), tuiAsDataListHost(_TuiComboBoxComponent), tuiAsControl2(_TuiComboBoxComponent), tuiAsOptionContent(TUI_SELECT_OPTION)]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c15,
      decls: 7,
      vars: 13,
      consts: [["icon", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-combo-box__textfield", 1, "t-textfield", 3, "click", "keydown.enter", "valueChange", "disabled", "focusable", "invalid", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], ["automation-id", "tui-combo-box__template", "ngProjectAs", "tuiContent", "class", "t-value", 5, ["tuiContent"], 4, "ngIf"], ["automation-id", "tui-combo-box__template", "ngProjectAs", "tuiContent", 5, ["tuiContent"], 1, "t-value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "tuiWrapper", "", 1, "t-icon"], [4, "polymorpheusOutlet"]],
      template: function TuiComboBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c05);
          ɵɵelementStart(0, "div", 1);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiComboBoxComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiComboBoxComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 2);
          ɵɵlistener("click", function TuiComboBoxComponent_Template_tui_primitive_textfield_click_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggle());
          })("keydown.enter", function TuiComboBoxComponent_Template_tui_primitive_textfield_keydown_enter_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFieldKeyDownEnter($event));
          })("valueChange", function TuiComboBoxComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(2);
          ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵtemplate(4, TuiComboBoxComponent_div_4_Template, 2, 5, "div", 3);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiComboBoxComponent_ng_template_5_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const icon_r4 = ɵɵreference(6);
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.interactive && !!ctx.datalist);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.computedFocusable)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", ctx.arrow ? icon_r4 : "")("value", ctx.nativeValue);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showValueTemplate);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiWrapperDirective, TuiTextfieldIconDirective, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownOpen],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;inline-size:100%;align-items:center}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiComboBoxComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-combo-box",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiComboBoxComponent), tuiAsDataListHost(TuiComboBoxComponent), tuiAsControl2(TuiComboBoxComponent), tuiAsOptionContent(TUI_SELECT_OPTION)],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="interactive && !!datalist"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-primitive-textfield
        automation-id="tui-combo-box__textfield"
        class="t-textfield"
        [disabled]="computedDisabled"
        [focusable]="computedFocusable"
        [invalid]="computedInvalid"
        [nativeId]="nativeId"
        [pseudoFocus]="computedFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldIcon]="arrow ? icon : ''"
        [value]="nativeValue"
        (click)="toggle()"
        (keydown.enter)="onFieldKeyDownEnter($event)"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
        <div
            *ngIf="showValueTemplate"
            automation-id="tui-combo-box__template"
            ngProjectAs="tuiContent"
            class="t-value"
        >
            <ng-container
                *polymorpheusOutlet="computedContent as text; context: {$implicit: value!, active: computedFocused}"
            >
                {{ text }}
            </ng-container>
        </div>
    </tui-primitive-textfield>

    <ng-template #icon>
        <div
            appearance="icon"
            tuiWrapper
            class="t-icon"
        >
            <ng-container *polymorpheusOutlet="arrow" />
        </div>
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-value{display:flex;inline-size:100%;align-items:center}.t-icon{pointer-events:auto}\n"]
    }]
  }], null, {
    accessor: [{
      type: ContentChild,
      args: [TUI_DATA_LIST_ACCESSOR]
    }],
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }],
    stringify: [{
      type: Input
    }],
    strictMatcher: [{
      type: Input
    }],
    identityMatcher: [{
      type: Input
    }],
    valueContent: [{
      type: Input
    }],
    strict: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    searchChange: [{
      type: Output
    }]
  });
})();
var TuiComboBoxDirective = class _TuiComboBoxDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.nativeValue;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiComboBoxDirective_BaseFactory;
      return function TuiComboBoxDirective_Factory(__ngFactoryType__) {
        return (ɵTuiComboBoxDirective_BaseFactory || (ɵTuiComboBoxDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiComboBoxDirective)))(__ngFactoryType__ || _TuiComboBoxDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiComboBoxDirective,
      selectors: [["tui-combo-box"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiComboBoxDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiComboBoxDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-combo-box",
      providers: [tuiAsTextfieldHost(TuiComboBoxDirective)]
    }]
  }], null, null);
})();
var TuiComboBoxStrictDirective = class _TuiComboBoxStrictDirective {
  constructor() {
    this.comboBox = inject(TuiComboBoxComponent);
    this.strict = true;
  }
  onInput() {
    if (!this.strict && this.comboBox.search) {
      this.comboBox.value = this.comboBox.search;
    }
  }
  static {
    this.ɵfac = function TuiComboBoxStrictDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiComboBoxStrictDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiComboBoxStrictDirective,
      selectors: [["tui-combo-box", "strict", ""]],
      hostBindings: function TuiComboBoxStrictDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiComboBoxStrictDirective_input_HostBindingHandler() {
            return ctx.onInput();
          });
        }
      },
      inputs: {
        strict: "strict"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiComboBoxStrictDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-combo-box[strict]",
      host: {
        "(input)": "onInput()"
      }
    }]
  }], null, {
    strict: [{
      type: Input
    }]
  });
})();
var TuiComboBoxModule = class _TuiComboBoxModule {
  static {
    this.ɵfac = function TuiComboBoxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiComboBoxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiComboBoxModule,
      declarations: [TuiComboBoxComponent, TuiComboBoxStrictDirective, TuiComboBoxDirective],
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiComboBoxComponent, TuiComboBoxStrictDirective, TuiComboBoxDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiComboBoxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiSelectOptionModule, TuiArrowComponent, TuiWrapperModule, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown],
      declarations: [TuiComboBoxComponent, TuiComboBoxStrictDirective, TuiComboBoxDirective],
      exports: [TuiComboBoxComponent, TuiComboBoxStrictDirective, TuiComboBoxDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input.mjs
var _c06 = ["*", [["input"]]];
var _c16 = ["*", "input"];
var TuiInputComponent = class _TuiInputComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.open = false;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeFocusableElement() {
    return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.tuiDropdownOpen;
  }
  handleOption(item) {
    this.setNativeValue(String(item));
    this.focusInput();
    this.value = String(item);
    this.open = false;
  }
  onValueChange(value) {
    this.value = value;
    this.open = true;
  }
  get canOpen() {
    return this.interactive && !!this.datalist;
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  getFallbackValue() {
    return "";
  }
  focusInput(preventScroll = false) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll
      });
    }
  }
  setNativeValue(value) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = value;
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputComponent_BaseFactory;
      return function TuiInputComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputComponent_BaseFactory || (ɵTuiInputComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputComponent)))(__ngFactoryType__ || _TuiInputComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputComponent,
      selectors: [["tui-input"]],
      contentQueries: function TuiInputComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      viewQuery: function TuiInputComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDropdownOpen, 5);
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      features: [ɵɵProvidersFeature([TUI_VALUE_ACCESSOR_PROVIDER, tuiAsFocusableItemAccessor(_TuiInputComponent), tuiAsDataListHost(_TuiInputComponent), tuiAsControl2(_TuiInputComponent)], [TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c16,
      decls: 4,
      vars: 11,
      consts: [["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-input__textfield", 1, "t-textfield", 3, "valueChange", "disabled", "focusable", "invalid", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "value"]],
      template: function TuiInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c06);
          ɵɵelementStart(0, "div", 0);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiInputComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return $event;
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiInputComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            return ctx.onActiveZone($event);
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 1);
          ɵɵlistener("valueChange", function TuiInputComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            return ctx.onValueChange($event);
          });
          ɵɵprojection(2);
          ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.canOpen);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.computedFocusable)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("value", ctx.value);
        }
      },
      dependencies: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiDropdownDirective, TuiDropdownOpen, TuiLegacyDropdownOpenMonitorDirective],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_VALUE_ACCESSOR_PROVIDER, tuiAsFocusableItemAccessor(TuiInputComponent), tuiAsDataListHost(TuiInputComponent), tuiAsControl2(TuiInputComponent)],
      viewProviders: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="canOpen"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-primitive-textfield
        automation-id="tui-input__textfield"
        class="t-textfield"
        [disabled]="computedDisabled"
        [focusable]="computedFocusable"
        [invalid]="computedInvalid"
        [nativeId]="nativeId"
        [pseudoFocus]="computedFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [value]="value"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-primitive-textfield>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }]
  });
})();
var TuiInputDirective = class _TuiInputDirective extends AbstractTuiTextfieldHost {
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDirective_BaseFactory;
      return function TuiInputDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputDirective_BaseFactory || (ɵTuiInputDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDirective)))(__ngFactoryType__ || _TuiInputDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDirective,
      selectors: [["tui-input"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input",
      providers: [tuiAsTextfieldHost(TuiInputDirective)]
    }]
  }], null, null);
})();
var TuiInputModule = class _TuiInputModule {
  static {
    this.ɵfac = function TuiInputModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputModule,
      declarations: [TuiInputComponent, TuiInputDirective],
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiLegacyDropdownOpenMonitorDirective],
      exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiPrimitiveTextfieldModule, ...TuiDropdown, TuiLegacyDropdownOpenMonitorDirective],
      declarations: [TuiInputComponent, TuiInputDirective],
      exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-color.mjs
var _c07 = ["*"];
function TuiInputColorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("background", ctx_r1.background);
  }
}
function TuiInputColorComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-color-selector", 5);
    ɵɵtwoWayListener("colorChange", function TuiInputColorComponent_ng_template_5_Template_tui_color_selector_colorChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.value, $event) || (ctx_r1.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("colors", ctx_r1.colors);
    ɵɵtwoWayProperty("color", ctx_r1.value);
  }
}
var TuiInputColorComponent = class _TuiInputColorComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.domSanitizer = inject(DomSanitizer);
    this.colors = /* @__PURE__ */ new Map();
    this.open = false;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get nativeFocusableElement() {
    return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
  }
  get background() {
    return this.sanitize(this.value, this.domSanitizer);
  }
  get mode() {
    if (this.value.startsWith("#")) {
      return "hex";
    }
    return this.value.startsWith("rgb") ? "rgb" : "gradient";
  }
  maskitoOptions(mode) {
    return mode === "hex" ? {
      mask: ["#", ...new Array(6).fill(/[0-9a-f]/i)]
    } : null;
  }
  onClick() {
    this.open = !this.open;
  }
  /** deprecated use 'value' setter */
  onValueChange(textValue) {
    this.value = textValue;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  getFallbackValue() {
    return "#000000";
  }
  sanitize(value, domSanitizer) {
    return value.startsWith("linear-gradient(") ? domSanitizer.bypassSecurityTrustStyle(tuiToGradient(tuiParseGradient(tuiGetGradientData(value)))) : value;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputColorComponent_BaseFactory;
      return function TuiInputColorComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputColorComponent_BaseFactory || (ɵTuiInputColorComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputColorComponent)))(__ngFactoryType__ || _TuiInputColorComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputColorComponent,
      selectors: [["tui-input-color"]],
      viewQuery: function TuiInputColorComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostBindings: function TuiInputColorComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputColorComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        colors: "colors"
      },
      features: [ɵɵProvidersFeature([], [tuiDropdownOptionsProvider({
        maxHeight: 600
      })]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c07,
      decls: 7,
      vars: 13,
      consts: [["color", ""], ["picker", ""], [1, "t-wrapper", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownOpen"], [1, "t-textfield", 3, "valueChange", "focusedChange", "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIconLeft", "value"], [1, "t-color"], [3, "colorChange", "colors", "color"]],
      template: function TuiInputColorComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 2);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiInputColorComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 3);
          ɵɵtwoWayListener("valueChange", function TuiInputColorComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("focusedChange", function TuiInputColorComponent_Template_tui_primitive_textfield_focusedChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          });
          ɵɵprojection(2);
          ɵɵelementEnd()();
          ɵɵtemplate(3, TuiInputColorComponent_ng_template_3_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiInputColorComponent_ng_template_5_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const color_r4 = ɵɵreference(4);
          const picker_r5 = ɵɵreference(6);
          ɵɵproperty("tuiDropdown", picker_r5);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("maskito", ctx.maskitoOptions(ctx.mode))("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIconLeft", color_r4);
          ɵɵtwoWayProperty("value", ctx.value);
        }
      },
      dependencies: [TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconLeftDirective, TuiColorSelectorComponent, MaskitoDirective, TuiDropdownDirective, TuiDropdownOpen],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:flex;border-radius:inherit;inline-size:100%}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit;inline-size:inherit}.t-textfield[_ngcontent-%COMP%]     .t-input{text-transform:lowercase!important}.t-color[_ngcontent-%COMP%]{inline-size:1.5rem;block-size:1.5rem;box-shadow:inset 0 0 0 1px var(--tui-base-03-dark);border-radius:.125rem;pointer-events:auto!important}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputColorComponent.prototype, "maskitoOptions", null);
__decorate([tuiPure], TuiInputColorComponent.prototype, "sanitize", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputColorComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-color",
      changeDetection: ChangeDetectionStrategy.OnPush,
      viewProviders: [tuiDropdownOptionsProvider({
        maxHeight: 600
      })],
      host: {
        "(click)": "onClick()"
      },
      template: '<div\n    class="t-wrapper"\n    [tuiDropdown]="picker"\n    [(tuiDropdownOpen)]="open"\n>\n    <tui-primitive-textfield\n        class="t-textfield"\n        [disabled]="disabled"\n        [focusable]="focusable"\n        [invalid]="computedInvalid"\n        [maskito]="maskitoOptions(mode)"\n        [nativeId]="nativeId"\n        [pseudoActive]="pseudoActive"\n        [pseudoFocus]="computedFocused"\n        [pseudoHover]="pseudoHover"\n        [readOnly]="readOnly"\n        [tuiTextfieldIconLeft]="color"\n        [(value)]="value"\n        (focusedChange)="onFocused($event)"\n    >\n        <ng-content />\n    </tui-primitive-textfield>\n</div>\n\n<ng-template #color>\n    <div\n        class="t-color"\n        [style.background]="background"\n    ></div>\n</ng-template>\n\n<ng-template #picker>\n    <tui-color-selector\n        [colors]="colors"\n        [(color)]="value"\n    />\n</ng-template>\n',
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-wrapper{display:flex;border-radius:inherit;inline-size:100%}.t-textfield{border-radius:inherit;text-align:inherit;inline-size:inherit}.t-textfield ::ng-deep .t-input{text-transform:lowercase!important}.t-color{inline-size:1.5rem;block-size:1.5rem;box-shadow:inset 0 0 0 1px var(--tui-base-03-dark);border-radius:.125rem;pointer-events:auto!important}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    colors: [{
      type: Input
    }],
    maskitoOptions: [],
    sanitize: []
  });
})();
var TuiInputColorModule = class _TuiInputColorModule {
  static {
    this.ɵfac = function TuiInputColorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputColorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputColorModule,
      declarations: [TuiInputColorComponent],
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiColorSelectorModule, MaskitoDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputColorComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiColorSelectorModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputColorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiColorSelectorModule, MaskitoDirective, ...TuiDropdown],
      declarations: [TuiInputColorComponent],
      exports: [TuiInputColorComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-copy.mjs
var _c08 = ["*", [["input"]]];
var _c17 = ["*", "input"];
var _c24 = (a0) => ({
  $implicit: a0
});
function TuiInputCopyComponent_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 4);
    ɵɵlistener("click", function TuiInputCopyComponent_ng_template_3_tui_icon_0_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.copy());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    const ctx_r2 = ɵɵnextContext(2);
    const hint_r5 = ɵɵreference(6);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s");
    ɵɵproperty("icon", src_r4.toString())("tuiAppearanceState", !ctx_r2.value ? "disabled" : null)("tuiHint", hint_r5)("tuiHintAppearance", ctx_r2.messageAppearance)("tuiHintDirection", ctx_r2.messageDirection);
  }
}
function TuiInputCopyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputCopyComponent_ng_template_3_tui_icon_0_Template, 1, 7, "tui-icon", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c24, ctx_r2.size));
  }
}
function TuiInputCopyComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r6 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r6, " ");
  }
}
function TuiInputCopyComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputCopyComponent_ng_template_5_ng_container_0_Template, 2, 1, "ng-container", 5);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ɵɵpipeBind1(1, 1, ctx_r2.hintText$));
  }
}
var TUI_INPUT_COPY_DEFAULT_OPTIONS = {
  successMessage: "",
  messageDirection: "bottom-left",
  messageAppearance: "",
  icon: () => "@tui.copy"
};
var TUI_INPUT_COPY_OPTIONS = tuiCreateToken(TUI_INPUT_COPY_DEFAULT_OPTIONS);
function tuiInputCopyOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_COPY_OPTIONS, options, TUI_INPUT_COPY_DEFAULT_OPTIONS);
}
var TuiInputCopyComponent = class _TuiInputCopyComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.copied$ = new BehaviorSubject(false);
    this.doc = inject(DOCUMENT);
    this.copyTexts$ = inject(TUI_COPY_TEXTS);
    this.options = inject(TUI_INPUT_COPY_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.successMessage = this.options.successMessage;
    this.messageDirection = this.options.messageDirection;
    this.messageAppearance = this.options.messageAppearance;
  }
  get nativeFocusableElement() {
    return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  onValueChange(value) {
    this.value = value;
  }
  get hintText$() {
    return this.copyTexts$.pipe(switchMap((texts) => this.copied$.pipe(switchMap((copied) => {
      if (!copied) {
        return of(texts[0]);
      }
      this.copied$.next(false);
      return merge(of(this.successMessage || texts[1]), timer(3e3).pipe(map(() => texts[0])));
    }))));
  }
  get size() {
    return this.textfieldSize.size;
  }
  get icon() {
    return this.options.icon;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  copy() {
    if (!this.textfield?.nativeFocusableElement) {
      return;
    }
    this.textfield.nativeFocusableElement.select();
    this.doc.execCommand("copy");
    this.copied$.next(true);
  }
  getFallbackValue() {
    return "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputCopyComponent_BaseFactory;
      return function TuiInputCopyComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputCopyComponent_BaseFactory || (ɵTuiInputCopyComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputCopyComponent)))(__ngFactoryType__ || _TuiInputCopyComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputCopyComponent,
      selectors: [["tui-input-copy"]],
      viewQuery: function TuiInputCopyComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputCopyComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        successMessage: "successMessage",
        messageDirection: "messageDirection",
        messageAppearance: "messageAppearance"
      },
      features: [ɵɵProvidersFeature([TUI_VALUE_ACCESSOR_PROVIDER, tuiAsFocusableItemAccessor(_TuiInputCopyComponent), tuiAsControl2(_TuiInputCopyComponent)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c17,
      decls: 7,
      vars: 10,
      consts: [["iconContent", ""], ["hint", ""], [1, "t-textfield", 3, "valueChange", "focusedChange", "disabled", "focusable", "invalid", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], ["automation-id", "tui-copy__icon", "tuiAppearance", "icon", "class", "t-icon", 3, "t-icon_small", "icon", "tuiAppearanceState", "tuiHint", "tuiHintAppearance", "tuiHintDirection", "click", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-copy__icon", "tuiAppearance", "icon", 1, "t-icon", 3, "click", "icon", "tuiAppearanceState", "tuiHint", "tuiHintAppearance", "tuiHintDirection"], [4, "polymorpheusOutlet"]],
      template: function TuiInputCopyComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c08);
          ɵɵelementStart(0, "tui-primitive-textfield", 2);
          ɵɵtwoWayListener("valueChange", function TuiInputCopyComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("focusedChange", function TuiInputCopyComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          });
          ɵɵprojection(1);
          ɵɵprojection(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiInputCopyComponent_ng_template_3_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiInputCopyComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const iconContent_r7 = ɵɵreference(4);
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", !ctx.disabled ? iconContent_r7 : "");
          ɵɵtwoWayProperty("value", ctx.value);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconDirective, TuiAppearance, TuiIcon, TuiHintDirective, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;cursor:pointer;pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputCopyComponent.prototype, "hintText$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCopyComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-copy",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TUI_VALUE_ACCESSOR_PROVIDER, tuiAsFocusableItemAccessor(TuiInputCopyComponent), tuiAsControl2(TuiInputCopyComponent)],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<tui-primitive-textfield
    class="t-textfield"
    [disabled]="computedDisabled"
    [focusable]="focusable"
    [invalid]="computedInvalid"
    [nativeId]="nativeId"
    [pseudoActive]="pseudoActive"
    [pseudoFocus]="pseudoFocus"
    [pseudoHover]="pseudoHover"
    [readOnly]="readOnly"
    [tuiTextfieldIcon]="!disabled ? iconContent : ''"
    [(value)]="value"
    (focusedChange)="onFocused($event)"
>
    <ng-content />
    <ng-content
        ngProjectAs="input"
        select="input"
    />
</tui-primitive-textfield>

<ng-template #iconContent>
    <tui-icon
        *polymorpheusOutlet="icon as src; context: {$implicit: size}"
        automation-id="tui-copy__icon"
        tuiAppearance="icon"
        class="t-icon"
        [class.t-icon_small]="size === 's'"
        [icon]="src.toString()"
        [tuiAppearanceState]="!value ? 'disabled' : null"
        [tuiHint]="hint"
        [tuiHintAppearance]="messageAppearance"
        [tuiHintDirection]="messageDirection"
        (click)="copy()"
    />
</ng-template>

<ng-template #hint>
    <ng-container *polymorpheusOutlet="hintText$ | async as text">
        {{ text }}
    </ng-container>
</ng-template>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-icon{position:relative;cursor:pointer;pointer-events:auto}.t-icon_small{border-width:.25rem}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    successMessage: [{
      type: Input
    }],
    messageDirection: [{
      type: Input
    }],
    messageAppearance: [{
      type: Input
    }],
    hintText$: []
  });
})();
var TuiInputCopyDirective = class _TuiInputCopyDirective extends AbstractTuiTextfieldHost {
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputCopyDirective_BaseFactory;
      return function TuiInputCopyDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputCopyDirective_BaseFactory || (ɵTuiInputCopyDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputCopyDirective)))(__ngFactoryType__ || _TuiInputCopyDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputCopyDirective,
      selectors: [["tui-input-copy"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputCopyDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCopyDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-copy",
      providers: [tuiAsTextfieldHost(TuiInputCopyDirective)]
    }]
  }], null, null);
})();
var TuiInputCopyModule = class _TuiInputCopyModule {
  static {
    this.ɵfac = function TuiInputCopyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputCopyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputCopyModule,
      declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiAppearance, TuiIcon, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer],
      exports: [TuiInputCopyComponent, TuiInputCopyDirective, TuiTextfieldComponent, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiIcon, TuiHintComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputCopyModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiAppearance, TuiIcon, ...TuiHint],
      declarations: [TuiInputCopyComponent, TuiInputCopyDirective],
      exports: [TuiInputCopyComponent, TuiInputCopyDirective, TuiTextfieldComponent, ...TuiHint]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-date.mjs
var _c09 = ["*", [["input"]]];
var _c18 = ["*", "input"];
var _c25 = (a0) => ({
  $implicit: a0
});
function TuiInputDateComponent_tui_primitive_textfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-primitive-textfield", 5);
    ɵɵlistener("focusedChange", function TuiInputDateComponent_tui_primitive_textfield_1_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFocused($event));
    })("valueChange", function TuiInputDateComponent_tui_primitive_textfield_1_Template_tui_primitive_textfield_valueChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onValueChange($event));
    });
    ɵɵprojection(1);
    ɵɵprojection(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const filler_r4 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext();
    const iconContent_r5 = ɵɵreference(4);
    ɵɵproperty("disabled", ctx_r2.computedDisabled)("focusable", ctx_r2.computedFocusable)("invalid", ctx_r2.computedInvalid)("maskito", ctx_r2.computedMask)("nativeId", ctx_r2.nativeId)("pseudoFocus", ctx_r2.pseudoFocus)("pseudoHover", ctx_r2.pseudoHover)("readOnly", ctx_r2.readOnly)("tuiTextfieldFiller", ctx_r2.getComputedFiller(filler_r4 || ""))("tuiTextfieldIcon", ctx_r2.calendarIcon && iconContent_r5)("value", ctx_r2.computedValue);
  }
}
function TuiInputDateComponent_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 8);
    ɵɵlistener("click", function TuiInputDateComponent_ng_template_3_tui_icon_0_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onIconClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r7 = ctx.polymorpheusOutlet;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s")("t-icon", !ctx_r2.computedDisabled);
    ɵɵproperty("icon", src_r7.toString());
  }
}
function TuiInputDateComponent_ng_template_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 9);
  }
}
function TuiInputDateComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputDateComponent_ng_template_3_tui_icon_0_Template, 1, 5, "tui-icon", 6)(1, TuiInputDateComponent_ng_template_3_input_1_Template, 1, 0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.calendarIcon)("polymorpheusOutletContext", ɵɵpureFunction1(3, _c25, ctx_r2.size));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.nativePicker);
  }
}
function TuiInputDateComponent_ng_template_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵlistener("mousedown.prevent.silent", function TuiInputDateComponent_ng_template_5_div_1_Template_div_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r9);
      return ɵɵresetView(0);
    });
    ɵɵelementStart(1, "button", 13);
    ɵɵlistener("click", function TuiInputDateComponent_ng_template_5_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.items[0] && ctx_r2.onDayClick(ctx_r2.items[0].day));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.items[0], " ");
  }
}
function TuiInputDateComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 10);
    ɵɵlistener("dayClick", function TuiInputDateComponent_ng_template_5_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    })("monthChange", function TuiInputDateComponent_ng_template_5_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthChange($event));
    })("mousedown.prevent.silent", function TuiInputDateComponent_ng_template_5_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r8);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
    ɵɵtemplate(1, TuiInputDateComponent_ng_template_5_div_1_Template, 3, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.disabledItemHandler)("markerHandler", ctx_r2.markerHandler)("max", ctx_r2.computedMax)("min", ctx_r2.computedMin)("month", ctx_r2.computedActiveYearMonth)("value", ctx_r2.value);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.items.length === 1);
  }
}
var TuiInputDateDirective = class _TuiInputDateDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.computedValue;
  }
  get max() {
    return this.host.computedMax;
  }
  get min() {
    return this.host.computedMin;
  }
  get format() {
    return this.host.dateFormat;
  }
  onValueChange(value) {
    if (!value) {
      this.host.nativeValue = "";
    }
    this.host.onValueChange(value);
  }
  process(input) {
    input.inputMode = "numeric";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateDirective_BaseFactory;
      return function TuiInputDateDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateDirective_BaseFactory || (ɵTuiInputDateDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateDirective)))(__ngFactoryType__ || _TuiInputDateDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDateDirective,
      selectors: [["tui-input-date", 3, "multiple", ""]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputDateDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-date:not([multiple])",
      providers: [tuiAsTextfieldHost(TuiInputDateDirective)]
    }]
  }], null, null);
})();
var TuiNativeDateDirective = class _TuiNativeDateDirective {
  constructor() {
    this.host = inject(TuiInputDateDirective);
  }
  get value() {
    return this.host.value.length === DATE_FILLER_LENGTH ? TuiDay.normalizeParse(this.host.value, this.host.format.mode).toString("YMD", "-") : "";
  }
  get max() {
    return this.host.max.toJSON();
  }
  get min() {
    return this.host.min.toJSON();
  }
  onChange(value) {
    this.host.onValueChange(value ? TuiDay.normalizeParse(value, "YMD").toString(this.host.format.mode) : "");
  }
  static {
    this.ɵfac = function TuiNativeDateDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeDateDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeDateDirective,
      selectors: [["input", "tuiDate", ""]],
      hostAttrs: ["type", "date"],
      hostVars: 4,
      hostBindings: function TuiNativeDateDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiNativeDateDirective_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("click.stop.silent", function TuiNativeDateDirective_click_stop_silent_HostBindingHandler() {
            return 0;
          })("input.stop.silent", function TuiNativeDateDirective_input_stop_silent_HostBindingHandler() {
            return 0;
          })("mousedown.stop.silent", function TuiNativeDateDirective_mousedown_stop_silent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", -1)("value", ctx.value)("max", ctx.max)("min", ctx.min);
        }
      },
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(TuiInputDateDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeDateDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "input[tuiDate]",
      providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
      host: {
        type: "date",
        "[tabIndex]": "-1",
        "[value]": "value",
        "(change)": "onChange($event.target.value)",
        "[max]": "max",
        "[min]": "min",
        "(click.stop.silent)": "0",
        "(input.stop.silent)": "0",
        "(mousedown.stop.silent)": "0"
      }
    }]
  }], null, null);
})();
var TuiInputDateComponent = class _TuiInputDateComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.mobileCalendar = inject(TUI_MOBILE_CALENDAR, {
      optional: true
    });
    this.month = null;
    this.min = this.options.min;
    this.max = this.options.max;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.items = [];
    this.defaultActiveYearMonth = TuiMonth.currentLocal();
    this.dateFormat = TUI_DEFAULT_DATE_FORMAT;
    this.open = false;
    this.dateTexts$ = inject(TUI_DATE_TEXTS);
    this.valueTransformer = inject(TUI_DATE_VALUE_TRANSFORMER, {
      optional: true
    });
    this.isMobile = inject(TUI_IS_MOBILE);
    this.filler$ = this.dateTexts$.pipe(map((dateTexts) => changeDateSeparator(dateTexts[this.dateFormat.mode], this.dateFormat.separator)));
    this.dateFormat$ = inject(TUI_DATE_FORMAT).pipe(tuiWatch(this.cdr), takeUntilDestroyed()).subscribe((format) => {
      this.dateFormat = format;
    });
  }
  get computedMin() {
    return this.min ?? this.options.min;
  }
  get computedMax() {
    return this.max ?? this.options.max;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || "";
  }
  set nativeValue(value) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = value;
    }
  }
  get computedValue() {
    const {
      value,
      nativeValue,
      activeItem
    } = this;
    if (activeItem) {
      return String(activeItem);
    }
    return value ? value.toString(this.dateFormat.mode, this.dateFormat.separator) : nativeValue;
  }
  onValueChange(value) {
    if (this.control) {
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (!value && !this.mobileCalendar) {
      this.onOpenChange(true);
    }
    this.value = value.length !== DATE_FILLER_LENGTH ? null : TuiDay.normalizeParse(value, this.dateFormat.mode);
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = value ? this.computedValue : "";
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativePicker() {
    return this.options.nativePicker && this.isMobile;
  }
  get calendarIcon() {
    return this.options.icon;
  }
  get computedActiveYearMonth() {
    const clampedDate = tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax);
    if (this.value?.dayAfter(TUI_LAST_DISPLAYED_DAY)) {
      return this.month || clampedDate;
    }
    if (this.items[0] && this.value?.daySame(this.items[0].day)) {
      return this.items[0].displayDay;
    }
    return this.month || this.value || clampedDate;
  }
  get computedMask() {
    return this.activeItem ? MASKITO_DEFAULT_OPTIONS : this.computeMaskOptions(this.dateFormat.mode, this.dateFormat.separator, this.computedMin, this.computedMax);
  }
  get activeItem() {
    const {
      value
    } = this;
    return value && this.items.find((item) => item.day.daySame(value)) || null;
  }
  onClick() {
    if (!this.isMobile && this.interactive) {
      this.open = !this.open;
    }
  }
  getComputedFiller(filler) {
    return this.activeItem ? "" : filler;
  }
  onIconClick() {
    if (this.isMobile && this.interactive) {
      this.open = true;
    }
  }
  onDayClick(value) {
    this.value = value;
    this.open = false;
  }
  onMonthChange(month) {
    this.month = month;
  }
  onOpenChange(open) {
    this.open = open;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  valueIdenticalComparator(oldValue, newValue) {
    return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
  }
  computeMaskOptions(mode, separator, min, max) {
    return maskitoDateOptionsGenerator({
      separator,
      mode: TUI_DATE_MODE_MASKITO_ADAPTER[mode],
      min: min.toLocalNativeDate(),
      max: max.toLocalNativeDate()
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateComponent_BaseFactory;
      return function TuiInputDateComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateComponent_BaseFactory || (ɵTuiInputDateComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateComponent)))(__ngFactoryType__ || _TuiInputDateComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputDateComponent,
      selectors: [["tui-input-date", 3, "multiple", ""]],
      viewQuery: function TuiInputDateComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputDateComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputDateComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        items: "items",
        defaultActiveYearMonth: "defaultActiveYearMonth"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputDateComponent), tuiAsControl(_TuiInputDateComponent), tuiAsControl2(_TuiInputDateComponent), tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER), TUI_MOBILE_CALENDAR_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c18,
      decls: 7,
      vars: 7,
      consts: [["iconContent", ""], ["dropdown", "polymorpheus"], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", "class", "t-textfield", 3, "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value", "focusedChange", "valueChange", 4, "tuiLet"], [3, "polymorpheus"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", 1, "t-textfield", 3, "focusedChange", "valueChange", "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value"], ["automation-id", "tui-input-date-range__icon", "tuiAppearance", "icon", 3, "t-icon_small", "t-icon", "icon", "click", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiDate", "", "class", "t-native-input", 4, "ngIf"], ["automation-id", "tui-input-date-range__icon", "tuiAppearance", "icon", 3, "click", "icon"], ["tuiDate", "", 1, "t-native-input"], ["automation-id", "tui-input-date__calendar", 3, "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "min", "month", "value"], ["class", "t-button", 3, "mousedown.prevent.silent", 4, "ngIf"], [1, "t-button", 3, "mousedown.prevent.silent"], ["tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiInputDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c09);
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("tuiDropdownOpenChange", function TuiInputDateComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵtemplate(1, TuiInputDateComponent_tui_primitive_textfield_1_Template, 3, 11, "tui-primitive-textfield", 3);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, TuiInputDateComponent_ng_template_3_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiInputDateComponent_ng_template_5_Template, 2, 7, "ng-template", 4, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const dropdown_r10 = ɵɵreference(6);
          ɵɵproperty("tuiDropdown", dropdown_r10)("tuiDropdownEnabled", ctx.interactive && !ctx.nativePicker)("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("tuiLet", ɵɵpipeBind1(2, 5, ctx.filler$));
          ɵɵadvance(4);
          ɵɵproperty("polymorpheus", ctx.type);
        }
      },
      dependencies: [NgIf, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiValueAccessorDirective, TuiLet, TuiTextfieldIconDirective, TuiTextfieldFillerDirective, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, TuiDropdownDirective, TuiDropdownOpen, TuiNativeDateDirective, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-button[_ngcontent-%COMP%]{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;text-align:center}.t-native-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputDateComponent.prototype, "computeMaskOptions", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-date:not([multiple])",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputDateComponent), tuiAsControl(TuiInputDateComponent), tuiAsControl2(TuiInputDateComponent), tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER), TUI_MOBILE_CALENDAR_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "(click)": "onClick()"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive && !nativePicker"
    [tuiDropdownOpen]="open"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-primitive-textfield
        *tuiLet="filler$ | async as filler"
        automation-id="tui-input-date-range__textfield"
        tuiValueAccessor
        class="t-textfield"
        [disabled]="computedDisabled"
        [focusable]="computedFocusable"
        [invalid]="computedInvalid"
        [maskito]="computedMask"
        [nativeId]="nativeId"
        [pseudoFocus]="pseudoFocus"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldFiller]="getComputedFiller(filler || '')"
        [tuiTextfieldIcon]="calendarIcon && iconContent"
        [value]="computedValue"
        (focusedChange)="onFocused($event)"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-primitive-textfield>

    <ng-template #iconContent>
        <tui-icon
            *polymorpheusOutlet="calendarIcon as src; context: {$implicit: size}"
            automation-id="tui-input-date-range__icon"
            tuiAppearance="icon"
            [class.t-icon_small]="size === 's'"
            [class.t-icon]="!computedDisabled"
            [icon]="src.toString()"
            (click)="onIconClick()"
        />
        <input
            *ngIf="nativePicker"
            tuiDate
            class="t-native-input"
        />
    </ng-template>

    <ng-template
        #dropdown="polymorpheus"
        [polymorpheus]="type"
    >
        <tui-calendar
            automation-id="tui-input-date__calendar"
            [disabledItemHandler]="disabledItemHandler"
            [markerHandler]="markerHandler"
            [max]="computedMax"
            [min]="computedMin"
            [month]="computedActiveYearMonth"
            [value]="value"
            (dayClick)="onDayClick($event)"
            (monthChange)="onMonthChange($event)"
            (mousedown.prevent.silent)="(0)"
        />
        <div
            *ngIf="items.length === 1"
            class="t-button"
            (mousedown.prevent.silent)="(0)"
        >
            <button
                tuiLink
                type="button"
                (click)="items[0] && onDayClick(items[0].day)"
            >
                {{ items[0] }}
            </button>
        </div>
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-icon{pointer-events:auto}.t-icon_small{border-width:.25rem}.t-button{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-button button{flex:1;text-align:center}.t-native-input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    defaultActiveYearMonth: [{
      type: Input
    }],
    computeMaskOptions: []
  });
})();
var TuiInputDateModule = class _TuiInputDateModule {
  static {
    this.ɵfac = function TuiInputDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputDateModule,
      declarations: [TuiInputDateComponent, TuiInputDateDirective, TuiNativeDateDirective],
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiLet, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputDateComponent, TuiInputDateDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCalendar, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, TuiIcon, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiLet, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, ...TuiDropdown],
      declarations: [TuiInputDateComponent, TuiInputDateDirective, TuiNativeDateDirective],
      exports: [TuiInputDateComponent, TuiInputDateDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-tag.mjs
var _c010 = ["input"];
var _c19 = () => ({
  standalone: true
});
function TuiTagComponent_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiTagComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TuiTagComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.leftContent);
  }
}
function TuiTagComponent_tui_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("inheritColor", true)("size", ctx_r1.loaderSize);
  }
}
function TuiTagComponent_tui_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 10);
    ɵɵlistener("click", function TuiTagComponent_tui_icon_4_Template_tui_icon_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.remove($event));
    })("mousedown.stop.prevent.silent", function TuiTagComponent_tui_icon_4_Template_tui_icon_mousedown_stop_prevent_silent_0_listener() {
      ɵɵrestoreView(_r3);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r1.icons.close);
  }
}
function TuiTagComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 11, 0);
    ɵɵlistener("blur", function TuiTagComponent_input_5_Template_input_blur_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBlur());
    })("keydown", function TuiTagComponent_input_5_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    })("ngModelChange", function TuiTagComponent_input_5_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInput($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r1.editedText)("ngModelOptions", ɵɵpureFunction0(3, _c19));
    ɵɵattribute("maxLength", ctx_r1.maxLength);
  }
}
var TUI_TAG_DEFAULT_OPTIONS = {
  size: "m",
  status: "default",
  autoColor: false
};
var TUI_TAG_OPTIONS = tuiCreateToken(TUI_TAG_DEFAULT_OPTIONS);
function tuiTagOptionsProvider(options) {
  return tuiProvideOptions(TUI_TAG_OPTIONS, options, TUI_TAG_DEFAULT_OPTIONS);
}
var TuiTagComponent = class _TuiTagComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_TAG_OPTIONS);
    this.editing = false;
    this.icons = inject(TUI_COMMON_ICONS);
    this.editedText = null;
    this.value = "";
    this.editable = false;
    this.separator = ",";
    this.maxLength = null;
    this.size = this.options.size;
    this.showLoader = false;
    this.status = this.options.status;
    this.hoverable = false;
    this.removable = false;
    this.disabled = false;
    this.autoColor = this.options.autoColor;
    this.edited = new EventEmitter();
  }
  set input(input) {
    if (input) {
      input.nativeElement.focus();
    }
  }
  get backgroundColor() {
    return this.autoColor ? tuiStringHashToHsl(this.value) : null;
  }
  get canRemove() {
    return this.removable && !this.disabled && !this.showLoader;
  }
  get displayText() {
    return this.editedText ?? this.value;
  }
  get loaderSize() {
    return tuiSizeBigger(this.size) ? "s" : "xs";
  }
  edit(event) {
    if (!this.canEdit) {
      return;
    }
    event.preventDefault();
    this.editing = true;
    this.editedText = this.value;
  }
  remove(event) {
    if (!this.canRemove) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.edited.emit("");
  }
  onInput(value) {
    const newTags = value.split(this.separator);
    if (newTags.length > 1) {
      this.save(String(newTags));
      return;
    }
    this.editedText = value;
  }
  onKeyDown(event) {
    event.stopPropagation();
    switch (event.key.toLowerCase()) {
      case "enter":
        event.preventDefault();
        this.save(this.editedText || "");
        break;
      case "esc":
      case "escape":
        event.preventDefault();
        this.stopEditing();
        this.el.focus();
        break;
      default:
        break;
    }
  }
  onBlur() {
    if (this.editedText !== null) {
      this.save(this.editedText);
    }
  }
  get canEdit() {
    return this.editable && !this.disabled && !this.showLoader;
  }
  stopEditing() {
    this.editing = false;
    this.editedText = null;
  }
  save(value) {
    this.stopEditing();
    this.edited.emit(value.trim());
  }
  static {
    this.ɵfac = function TuiTagComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTagComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTagComponent,
      selectors: [["tui-tag"], ["a", "tuiTag", ""], ["button", "tuiTag", ""]],
      viewQuery: function TuiTagComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c010, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      hostVars: 10,
      hostBindings: function TuiTagComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.delete", function TuiTagComponent_keydown_delete_HostBindingHandler($event) {
            return ctx.remove($event);
          })("keydown.backspace", function TuiTagComponent_keydown_backspace_HostBindingHandler($event) {
            return ctx.remove($event);
          })("keydown.enter", function TuiTagComponent_keydown_enter_HostBindingHandler($event) {
            return ctx.edit($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-status", ctx.status);
          ɵɵclassProp("_editing", ctx.editing)("_hoverable", ctx.hoverable)("_autocolor", ctx.autoColor)("_disabled", ctx.disabled);
        }
      },
      inputs: {
        value: "value",
        editable: "editable",
        separator: "separator",
        maxLength: "maxLength",
        size: "size",
        showLoader: "showLoader",
        status: "status",
        hoverable: "hoverable",
        removable: "removable",
        disabled: "disabled",
        autoColor: "autoColor",
        leftContent: "leftContent"
      },
      outputs: {
        edited: "edited"
      },
      decls: 6,
      vars: 7,
      consts: [["input", ""], [1, "t-tag", 3, "dblclick"], ["class", "t-content", 4, "ngIf"], ["automation-id", "tui-tag__text", 1, "t-text", 3, "textContent"], ["class", "t-content", 3, "inheritColor", "size", 4, "ngIf"], ["automation-id", "tui-tag__remove", "class", "t-icon", 3, "icon", "click", "mousedown.stop.prevent.silent", 4, "ngIf"], ["automation-id", "tui-tag__edit", "type", "text", "class", "t-edit", 3, "ngModel", "ngModelOptions", "blur", "keydown", "ngModelChange", 4, "ngIf"], [1, "t-content"], [4, "polymorpheusOutlet"], [1, "t-content", 3, "inheritColor", "size"], ["automation-id", "tui-tag__remove", 1, "t-icon", 3, "click", "mousedown.stop.prevent.silent", "icon"], ["automation-id", "tui-tag__edit", "type", "text", 1, "t-edit", 3, "blur", "keydown", "ngModelChange", "ngModel", "ngModelOptions"]],
      template: function TuiTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("dblclick", function TuiTagComponent_Template_div_dblclick_0_listener($event) {
            return ctx.edit($event);
          });
          ɵɵtemplate(1, TuiTagComponent_div_1_Template, 2, 1, "div", 2);
          ɵɵelement(2, "span", 3);
          ɵɵtemplate(3, TuiTagComponent_tui_loader_3_Template, 1, 2, "tui-loader", 4)(4, TuiTagComponent_tui_icon_4_Template, 1, 1, "tui-icon", 5);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiTagComponent_input_5_Template, 2, 4, "input", 6);
        }
        if (rf & 2) {
          ɵɵstyleProp("background-color", ctx.backgroundColor);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.leftContent);
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.displayText);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showLoader);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.canRemove);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.editing);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, TuiIcon, TuiLoader, PolymorpheusOutlet],
      styles: ['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;font:var(--tui-font-text-s);line-height:1.25rem;max-inline-size:100%;cursor:default;outline:none;text-decoration:none;padding:0;border:0}[_nghost-%COMP%]:after{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;pointer-events:none}._hoverable[_nghost-%COMP%]:hover[data-status=custom]:after, ._hoverable[_nghost-%COMP%]:active[data-status=custom]:after{background-color:var(--tui-background-neutral-1)}[_nghost-%COMP%]:focus:after{border:2px solid var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;border-radius:var(--tui-radius-xs)}[data-size=m][_nghost-%COMP%]{border-radius:var(--tui-radius-xs)}[data-size=l][_nghost-%COMP%]{border-radius:var(--tui-radius-s)}[data-status=primary][_nghost-%COMP%]{background-color:var(--tui-background-accent-1);color:var(--tui-text-primary-on-accent-1)}[data-status=primary]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-background-accent-1-hover)}[data-status=primary]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-background-accent-1-pressed)}[data-status=error][_nghost-%COMP%]{background-color:var(--tui-status-negative-pale);color:var(--tui-text-primary)}[data-status=error]._hoverable[_nghost-%COMP%]:hover, [data-status=error]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-negative-pale-hover)}[tuiTheme="dark"]   [data-status=error][_nghost-%COMP%]{background-color:var(--tui-status-negative-pale);color:var(--tui-text-primary)}[tuiTheme="dark"]   [data-status=error]._hoverable[_nghost-%COMP%]:hover, [tuiTheme="dark"]   [data-status=error]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-negative-pale-hover)}[data-status=success][_nghost-%COMP%]{background-color:var(--tui-status-positive-pale);color:var(--tui-text-primary)}[data-status=success]._hoverable[_nghost-%COMP%]:hover, [data-status=success]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-positive-pale-hover)}[tuiTheme="dark"]   [data-status=success][_nghost-%COMP%]{background-color:var(--tui-status-positive-pale);color:var(--tui-text-primary)}[tuiTheme="dark"]   [data-status=success]._hoverable[_nghost-%COMP%]:hover, [tuiTheme="dark"]   [data-status=success]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-positive-pale-hover)}[data-status=warning][_nghost-%COMP%]{background-color:var(--tui-status-warning-pale);color:var(--tui-text-primary)}[data-status=warning]._hoverable[_nghost-%COMP%]:hover, [data-status=warning]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-warning-pale-hover)}[tuiTheme="dark"]   [data-status=warning][_nghost-%COMP%]{background-color:var(--tui-status-warning-pale);color:var(--tui-text-primary)}[tuiTheme="dark"]   [data-status=warning]._hoverable[_nghost-%COMP%]:hover, [tuiTheme="dark"]   [data-status=warning]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-status-warning-pale-hover)}[data-status=default][_nghost-%COMP%]{color:#fff;background-color:var(--tui-text-tertiary)}[data-status=default]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-background-accent-opposite-pressed)}[data-status=default]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-background-accent-opposite-hover)}[tuiTheme="dark"]   [data-status=default][_nghost-%COMP%]{color:var(--tui-text-primary);background-color:var(--tui-background-neutral-1)}[tuiTheme="dark"]   [data-status=default]._hoverable[_nghost-%COMP%]:hover{background-color:var(--tui-background-neutral-1-hover)}[tuiTheme="dark"]   [data-status=default]._hoverable[_nghost-%COMP%]:active{background-color:var(--tui-background-neutral-1-pressed)}[tuiTheme="dark"]   [data-status=default][_nghost-%COMP%]:focus:after{border:2px solid var(--tui-background-base)}._editing[_nghost-%COMP%]{background:transparent!important}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none;opacity:var(--tui-disabled-opacity)}._hoverable[_nghost-%COMP%]{cursor:pointer}._autocolor[_nghost-%COMP%]{color:#000c}.t-text[_ngcontent-%COMP%]{white-space:pre;overflow:hidden;text-overflow:ellipsis;padding-right:.02em}.t-tag[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:flex;inline-size:auto;align-items:center;font:inherit;border-radius:inherit}[data-size=s][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{block-size:1.25rem;padding:0 .375rem}[data-size=m][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{block-size:var(--tui-height-xs);padding:0 .5rem}[data-size=l][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{block-size:var(--tui-height-s);padding:0 .75rem}._editing[_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{visibility:hidden}.t-edit[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;font:inherit;color:var(--tui-text-primary);inline-size:100%;block-size:100%;box-sizing:border-box;padding:0 .5rem}.t-edit[_ngcontent-%COMP%]:-webkit-autofill, .t-edit[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-edit[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}[data-size=s][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .375rem}[data-size=m][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .5rem}[data-size=l][_nghost-%COMP%]   .t-edit[_ngcontent-%COMP%]{padding:0 .75rem}.t-icon[_ngcontent-%COMP%]{font-size:1rem;block-size:100%;cursor:pointer;pointer-events:all;opacity:var(--tui-disabled-opacity);margin-inline-start:.25rem;margin-inline-end:-.25rem}.t-icon[_ngcontent-%COMP%]:hover{opacity:1}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{margin-inline-start:0;block-size:.75rem}.t-content[_ngcontent-%COMP%]{inline-size:1rem;block-size:1rem;margin-inline-end:.25rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTagComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-tag, a[tuiTag], button[tuiTag]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[attr.data-status]": "status",
        "[class._editing]": "editing",
        "[class._hoverable]": "hoverable",
        "[class._autocolor]": "autoColor",
        "[class._disabled]": "disabled",
        "(keydown.delete)": "remove($event)",
        "(keydown.backspace)": "remove($event)",
        "(keydown.enter)": "edit($event)"
      },
      template: '<div\n    class="t-tag"\n    [style.backgroundColor]="backgroundColor"\n    (dblclick)="edit($event)"\n>\n    <div\n        *ngIf="leftContent"\n        class="t-content"\n    >\n        <ng-container *polymorpheusOutlet="leftContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n    <span\n        automation-id="tui-tag__text"\n        class="t-text"\n        [textContent]="displayText"\n    ></span>\n    <tui-loader\n        *ngIf="showLoader"\n        class="t-content"\n        [inheritColor]="true"\n        [size]="loaderSize"\n    />\n    <tui-icon\n        *ngIf="canRemove"\n        automation-id="tui-tag__remove"\n        class="t-icon"\n        [icon]="icons.close"\n        (click)="remove($event)"\n        (mousedown.stop.prevent.silent)="(0)"\n    />\n</div>\n<input\n    *ngIf="editing"\n    #input\n    automation-id="tui-tag__edit"\n    type="text"\n    class="t-edit"\n    [attr.maxLength]="maxLength"\n    [ngModel]="editedText"\n    [ngModelOptions]="{standalone: true}"\n    (blur)="onBlur()"\n    (keydown)="onKeyDown($event)"\n    (ngModelChange)="onInput($event)"\n/>\n',
      styles: [':host{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;font:var(--tui-font-text-s);line-height:1.25rem;max-inline-size:100%;cursor:default;outline:none;text-decoration:none;padding:0;border:0}:host:after{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;pointer-events:none}:host._hoverable:hover[data-status=custom]:after,:host._hoverable:active[data-status=custom]:after{background-color:var(--tui-background-neutral-1)}:host:focus:after{border:2px solid var(--tui-border-focus)}:host[data-size=s]{font:var(--tui-font-text-xs);line-height:1.25rem;border-radius:var(--tui-radius-xs)}:host[data-size=m]{border-radius:var(--tui-radius-xs)}:host[data-size=l]{border-radius:var(--tui-radius-s)}:host[data-status=primary]{background-color:var(--tui-background-accent-1);color:var(--tui-text-primary-on-accent-1)}:host[data-status=primary]._hoverable:hover{background-color:var(--tui-background-accent-1-hover)}:host[data-status=primary]._hoverable:active{background-color:var(--tui-background-accent-1-pressed)}:host[data-status=error]{background-color:var(--tui-status-negative-pale);color:var(--tui-text-primary)}:host[data-status=error]._hoverable:hover,:host[data-status=error]._hoverable:active{background-color:var(--tui-status-negative-pale-hover)}:host-context([tuiTheme="dark"]) :host[data-status=error]{background-color:var(--tui-status-negative-pale);color:var(--tui-text-primary)}:host-context([tuiTheme="dark"]) :host[data-status=error]._hoverable:hover,:host-context([tuiTheme="dark"]) :host[data-status=error]._hoverable:active{background-color:var(--tui-status-negative-pale-hover)}:host[data-status=success]{background-color:var(--tui-status-positive-pale);color:var(--tui-text-primary)}:host[data-status=success]._hoverable:hover,:host[data-status=success]._hoverable:active{background-color:var(--tui-status-positive-pale-hover)}:host-context([tuiTheme="dark"]) :host[data-status=success]{background-color:var(--tui-status-positive-pale);color:var(--tui-text-primary)}:host-context([tuiTheme="dark"]) :host[data-status=success]._hoverable:hover,:host-context([tuiTheme="dark"]) :host[data-status=success]._hoverable:active{background-color:var(--tui-status-positive-pale-hover)}:host[data-status=warning]{background-color:var(--tui-status-warning-pale);color:var(--tui-text-primary)}:host[data-status=warning]._hoverable:hover,:host[data-status=warning]._hoverable:active{background-color:var(--tui-status-warning-pale-hover)}:host-context([tuiTheme="dark"]) :host[data-status=warning]{background-color:var(--tui-status-warning-pale);color:var(--tui-text-primary)}:host-context([tuiTheme="dark"]) :host[data-status=warning]._hoverable:hover,:host-context([tuiTheme="dark"]) :host[data-status=warning]._hoverable:active{background-color:var(--tui-status-warning-pale-hover)}:host[data-status=default]{color:#fff;background-color:var(--tui-text-tertiary)}:host[data-status=default]._hoverable:hover{background-color:var(--tui-background-accent-opposite-pressed)}:host[data-status=default]._hoverable:active{background-color:var(--tui-background-accent-opposite-hover)}:host-context([tuiTheme="dark"]) :host[data-status=default]{color:var(--tui-text-primary);background-color:var(--tui-background-neutral-1)}:host-context([tuiTheme="dark"]) :host[data-status=default]._hoverable:hover{background-color:var(--tui-background-neutral-1-hover)}:host-context([tuiTheme="dark"]) :host[data-status=default]._hoverable:active{background-color:var(--tui-background-neutral-1-pressed)}:host-context([tuiTheme="dark"]) :host[data-status=default]:focus:after{border:2px solid var(--tui-background-base)}:host._editing{background:transparent!important}:host._disabled,:host :host-context(*:disabled){pointer-events:none;opacity:var(--tui-disabled-opacity)}:host._hoverable{cursor:pointer}:host._autocolor{color:#000c}.t-text{white-space:pre;overflow:hidden;text-overflow:ellipsis;padding-right:.02em}.t-tag{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:flex;inline-size:auto;align-items:center;font:inherit;border-radius:inherit}:host[data-size=s] .t-tag{block-size:1.25rem;padding:0 .375rem}:host[data-size=m] .t-tag{block-size:var(--tui-height-xs);padding:0 .5rem}:host[data-size=l] .t-tag{block-size:var(--tui-height-s);padding:0 .75rem}:host._editing .t-tag{visibility:hidden}.t-edit{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;font:inherit;color:var(--tui-text-primary);inline-size:100%;block-size:100%;box-sizing:border-box;padding:0 .5rem}.t-edit:-webkit-autofill,.t-edit:-webkit-autofill:hover,.t-edit:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}:host[data-size=s] .t-edit{padding:0 .375rem}:host[data-size=m] .t-edit{padding:0 .5rem}:host[data-size=l] .t-edit{padding:0 .75rem}.t-icon{font-size:1rem;block-size:100%;cursor:pointer;pointer-events:all;opacity:var(--tui-disabled-opacity);margin-inline-start:.25rem;margin-inline-end:-.25rem}.t-icon:hover{opacity:1}:host[data-size=s] .t-icon{margin-inline-start:0;block-size:.75rem}.t-content{inline-size:1rem;block-size:1rem;margin-inline-end:.25rem}\n']
    }]
  }], null, {
    value: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    separator: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    status: [{
      type: Input
    }],
    hoverable: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    autoColor: [{
      type: Input
    }],
    leftContent: [{
      type: Input
    }],
    edited: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input", {
        read: ElementRef
      }]
    }]
  });
})();
var TuiTagModule = class _TuiTagModule {
  static {
    this.ɵfac = function TuiTagModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTagModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTagModule,
      declarations: [TuiTagComponent],
      imports: [CommonModule, FormsModule, TuiIcon, TuiLoader, PolymorpheusOutlet, PolymorpheusTemplate],
      exports: [TuiTagComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiIcon, TuiLoader]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTagModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, TuiIcon, TuiLoader, PolymorpheusOutlet, PolymorpheusTemplate],
      declarations: [TuiTagComponent],
      exports: [TuiTagComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-tag.mjs
var _c011 = ["focusableElement"];
var _c110 = ["tagsContainer"];
var _c26 = ["cleaner"];
var _c33 = ["errorIcon"];
var _c43 = ["tag"];
var _c53 = [[["tuiContent"]], [["select"]], "*"];
var _c62 = ["tuiContent", "select", "*"];
var _c7 = () => ({
  standalone: true
});
var _c8 = (a0) => ({
  $implicit: a0
});
function TuiInputTagComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiInputTagComponent_div_5_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r2.toString());
  }
}
function TuiInputTagComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, TuiInputTagComponent_div_5_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconStart)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c8, ctx_r2.size));
  }
}
function TuiInputTagComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵprojection(1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-placeholder_raised", ctx_r2.placeholderRaised);
  }
}
function TuiInputTagComponent_ng_container_11_tui_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-tag", 26, 3);
    ɵɵlistener("edited", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_edited_0_listener($event) {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onTagEdited($event, index_r5));
    })("keydown.arrowLeft.prevent", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_keydown_arrowLeft_prevent_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onTagKeyDownArrowLeft(index_r5));
    })("keydown.arrowRight.prevent", function TuiInputTagComponent_ng_container_11_tui_tag_1_Template_tui_tag_keydown_arrowRight_prevent_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onTagKeyDownArrowRight(index_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("autoColor", ctx_r2.autoColor)("disabled", ctx_r2.computedDisabled || ctx_r2.disabledItemHandler(item_r6))("editable", ctx_r2.editable && !ctx_r2.readOnly)("hoverable", !ctx_r2.readOnly)("leftContent", ctx_r2.getLeftContent(item_r6))("maxLength", ctx_r2.maxLength)("removable", !ctx_r2.readOnly && ctx_r2.removable)("separator", ctx_r2.separator)("size", ctx_r2.controller.size)("status", ctx_r2.status)("value", item_r6.toString());
  }
}
function TuiInputTagComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiInputTagComponent_ng_container_11_tui_tag_1_Template, 2, 11, "tui-tag", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.value)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function TuiInputTagComponent_ng_template_12_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 28);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_comma", ctx_r2.computedFocused && !ctx_r2.inputHidden)("t-text_disabled", ctx_r2.disabledItemHandler(item_r7))("t-text_error", !ctx_r2.tagValidator(item_r7));
    ɵɵproperty("textContent", item_r7);
  }
}
function TuiInputTagComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputTagComponent_ng_template_12_span_0_Template, 1, 7, "span", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r2.value);
  }
}
function TuiInputTagComponent_div_22_ng_container_1_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 33, 4);
    ɵɵlistener("click.stop", function TuiInputTagComponent_div_22_ng_container_1_tui_icon_1_Template_tui_icon_click_stop_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onCleanerClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r9 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r9.toString());
  }
}
function TuiInputTagComponent_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiInputTagComponent_div_22_ng_container_1_tui_icon_1_Template, 2, 1, "tui-icon", 32);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.iconCleaner)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c8, ctx_r2.size));
  }
}
function TuiInputTagComponent_div_22_tui_tooltip_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tooltip", 34);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("content", ctx_r2.hintOptions == null ? null : ctx_r2.hintOptions.content)("describeId", ctx_r2.id);
  }
}
function TuiInputTagComponent_div_22_div_3_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r10 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r10.toString());
  }
}
function TuiInputTagComponent_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtemplate(1, TuiInputTagComponent_div_22_div_3_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c8, ctx_r2.size));
  }
}
function TuiInputTagComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, TuiInputTagComponent_div_22_ng_container_1_Template, 2, 4, "ng-container", 5)(2, TuiInputTagComponent_div_22_tui_tooltip_2_Template, 1, 2, "tui-tooltip", 30)(3, TuiInputTagComponent_div_22_div_3_Template, 2, 4, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasCleaner);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showHint);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.icon);
  }
}
function TuiInputTagComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 36);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r2.icons.error);
  }
}
var TUI_INPUT_TAG_DEFAULT_OPTIONS = {
  autoColor: false,
  separator: ",",
  tagStatus: "default",
  uniqueTags: true
};
var TUI_INPUT_TAG_OPTIONS = tuiCreateToken(TUI_INPUT_TAG_DEFAULT_OPTIONS);
function tuiInputTagOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_TAG_OPTIONS, options, TUI_INPUT_TAG_DEFAULT_OPTIONS);
}
var TAG_SIZE_REM = {
  s: 1.25,
  m: 1.5,
  l: 2
};
var LINE_HEIGHT_REM = {
  s: 1,
  m: 1.25,
  l: 1.25
};
var TAG_VERTICAL_SPACE_REM = 0.125;
var TuiInputTagComponent = class _TuiInputTagComponent extends AbstractTuiMultipleControl {
  constructor() {
    super(...arguments);
    this.tags = EMPTY_QUERY;
    this.el = tuiInjectElement();
    this.options = inject(TUI_INPUT_TAG_OPTIONS);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.icons = inject(TUI_COMMON_ICONS);
    this.status = this.options.tagStatus;
    this.open = false;
    this.separator = this.options.separator;
    this.search = "";
    this.editable = true;
    this.tagValidator = TUI_TRUE_HANDLER;
    this.rows = Infinity;
    this.inputHidden = false;
    this.uniqueTags = this.options.uniqueTags;
    this.autoColor = this.options.autoColor;
    this.maxLength = null;
    this.placeholder = "";
    this.removable = true;
    this.pseudoOpen = false;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.searchChange = new EventEmitter();
  }
  set pseudoFocusedSetter(value) {
    if (!value && !this.focused) {
      this.scrollTo(0);
    }
    this.pseudoFocus = value;
  }
  get labelOutside() {
    const {
      size,
      labelOutside
    } = this.controller;
    return size === "s" || labelOutside;
  }
  get size() {
    return this.controller.size;
  }
  get nativeFocusableElement() {
    return !this.focusableElement || this.computedDisabled ? null : this.focusableElement.nativeElement;
  }
  get hasValue() {
    return !!this.value.length || this.hasNativeValue;
  }
  get hasExampleText() {
    return !!this.nativeFocusableElement?.placeholder && this.computedFocused && !this.hasValue && !this.readOnly;
  }
  get hasPlaceholder() {
    return !this.labelOutside || !this.hasValue && (!this.hasExampleText || this.inputHidden);
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el) || !!this.dropdown?.tuiDropdownOpen;
  }
  get tagsEmpty() {
    return (!this.focused || this.inputHidden) && !this.value.length && !this.search?.trim()?.length && !this.placeholder || !!this.valueContent;
  }
  onTagEdited(value, index) {
    this.focusInput(value === "");
    this.value = this.filterValue(this.value.map((tag, tagIndex) => tagIndex !== index ? tag : value.split(this.separator).map((tag2) => tag2.trim()).filter(Boolean)).reduce((result, item) => result.concat(item), []));
  }
  handleOption(item) {
    this.focusInput();
    this.updateSearch("");
    this.value = this.filterValue(this.value.concat(item));
    this.open = false;
    this.scrollTo();
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  get iconStart() {
    return this.controller.iconStart;
  }
  get appearance() {
    return this.controller.appearance;
  }
  get expandable() {
    return this.rows > 1;
  }
  get icon() {
    return this.controller.icon;
  }
  get iconCleaner() {
    return this.controller.options.iconCleaner;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && this.interactive;
  }
  get hasNativeValue() {
    return !!this.search;
  }
  get placeholderRaised() {
    return !this.labelOutside && (this.computedFocused && !this.readOnly || this.hasValue);
  }
  get hasRightIcons() {
    return this.hasCleaner || !!this.icon || !!this.hintOptions?.content && !this.computedDisabled;
  }
  get showHint() {
    return !!this.hintOptions?.content && (this.controller.options.hintOnDisabled || !this.computedDisabled);
  }
  get canOpen() {
    return this.interactive && !!this.datalist;
  }
  get computeMaxHeight() {
    return this.expandable ? this.rows * this.lineHeight : null;
  }
  onFocusInOut() {
    this.cdr.detectChanges();
  }
  detectRetargetFromLabel(event) {
    if (tuiRetargetedBoundaryCrossing(event)) {
      event.stopImmediatePropagation();
    }
  }
  getLeftContent(tag) {
    return !this.tagValidator(tag) && this.errorIconTemplate ? this.errorIconTemplate : "";
  }
  onCleanerClick() {
    this.updateSearch("");
    this.clear();
    this.focusInput();
  }
  onActiveZone(active) {
    this.open = false;
    this.addTag();
    this.updateFocused(active);
    if (!active && !this.computedFocused) {
      this.scrollTo(0);
    }
  }
  onMouseDown(event) {
    const actualTarget = tuiGetActualTarget(event);
    if (!this.focusableElement || actualTarget === this.focusableElement.nativeElement || !tuiIsElement(event.target) || this.cleanerSvg?.nativeElement.contains(event.target) || this.tagsContainer && actualTarget !== this.tagsContainer.nativeElement && this.tagsContainer.nativeElement.contains(actualTarget)) {
      return;
    }
    event.preventDefault();
    this.focusInput();
  }
  onFieldKeyDownBackspace(event) {
    if (!this.labelOutside && !this.hasNativeValue && this.value.length) {
      this.deleteLastEnabledItem();
    } else {
      this.onFieldKeyDownArrowLeft(event);
    }
  }
  onFieldKeyDownArrowLeft(event) {
    if (!this.labelOutside || this.hasNativeValue || !this.value.length) {
      return;
    }
    event.preventDefault();
    this.tags.last.nativeElement.focus();
  }
  onFieldKeyDownEnter() {
    this.addTag();
    this.scrollTo();
  }
  onTagKeyDownArrowLeft(currentIndex) {
    if (currentIndex > 0) {
      this.onScrollKeyDown(currentIndex, -1);
    }
  }
  onTagKeyDownArrowRight(currentIndex) {
    if (currentIndex === this.value.length - 1) {
      this.focusInput();
    } else {
      this.onScrollKeyDown(currentIndex, 1);
    }
  }
  onInput(value) {
    const array = value.split(this.separator);
    const tags = array.map((item) => this.clippedValue(item.trim())).filter((item, index, {
      length
    }) => item.length > 0 && index !== length - 1);
    const validated = tags.filter((tag) => !this.disabledItemHandler(tag));
    const invalid = tags.filter((tag) => this.disabledItemHandler(tag));
    if (array.length > 1) {
      const search = invalid.length ? invalid.join(tuiIsString(this.separator) ? this.separator : ",") : array[array.length - 1]?.trim() ?? "";
      this.updateSearch(this.clippedValue(search));
      this.value = this.filterValue([...this.value, ...validated]);
    } else {
      this.updateSearch(this.clippedValue(value));
    }
    this.open = this.hasNativeValue;
  }
  onPaste(event) {
    const pasted = tuiGetClipboardDataText(event);
    this.onInput(pasted || "");
  }
  onDrop({
    dataTransfer
  }) {
    if (dataTransfer) {
      this.onInput(dataTransfer.getData("text") || "");
    }
  }
  trackByFn(_, tag) {
    return tag.toString();
  }
  get lineHeight() {
    return this.labelOutside ? TAG_SIZE_REM[this.controller.size] + 2 * TAG_VERTICAL_SPACE_REM : LINE_HEIGHT_REM[this.controller.size];
  }
  scrollTo(scrollLeft = this.scrollBar?.nativeElement.scrollWidth) {
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.scrollBar) {
        this.scrollBar.nativeElement.scrollLeft = scrollLeft || 0;
      }
    });
  }
  filterValue(value) {
    const seen = /* @__PURE__ */ new Set();
    return value.reverse().filter((item) => !this.uniqueTags || item && !seen.has(item) && seen.add(item)).reverse();
  }
  onScrollKeyDown(currentIndex, flag) {
    const tag = this.tags.find((_item, index) => index === currentIndex + flag);
    if (!tag || !this.scrollBar) {
      return;
    }
    tag.nativeElement.focus();
    if (flag * this.scrollBar.nativeElement.clientWidth - flag * tag.nativeElement.offsetLeft - tag.nativeElement.clientWidth < 0) {
      this.scrollBar.nativeElement.scrollLeft += flag * tag.nativeElement.clientWidth;
    }
  }
  updateSearch(value) {
    if (this.focusableElement) {
      this.focusableElement.nativeElement.value = value;
    }
    this.search = value;
    this.searchChange.emit(value);
  }
  addTag() {
    const inputValue = this.search?.trim() ?? "";
    if (!inputValue || this.disabledItemHandler(inputValue)) {
      return;
    }
    this.updateSearch("");
    this.value = this.filterValue(this.value.concat(inputValue));
  }
  deleteLastEnabledItem() {
    for (let index = this.value.length - 1; index >= 0; index--) {
      if (!this.disabledItemHandler(this.value[index] ?? "")) {
        this.value = tuiArrayRemove(this.value, index);
        break;
      }
    }
  }
  focusInput(preventScroll = false) {
    this.nativeFocusableElement?.focus({
      preventScroll
    });
  }
  clippedValue(value) {
    return value.slice(0, this.maxLength || value.length);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputTagComponent_BaseFactory;
      return function TuiInputTagComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputTagComponent_BaseFactory || (ɵTuiInputTagComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputTagComponent)))(__ngFactoryType__ || _TuiInputTagComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputTagComponent,
      selectors: [["tui-input-tag"]],
      contentQueries: function TuiInputTagComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, PolymorpheusOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.valueContent = _t.first);
        }
      },
      viewQuery: function TuiInputTagComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDropdownOpen, 5);
          ɵɵviewQuery(_c011, 5);
          ɵɵviewQuery(_c110, 5);
          ɵɵviewQuery(_c26, 5, ElementRef);
          ɵɵviewQuery(TuiScrollbar, 5, ElementRef);
          ɵɵviewQuery(_c33, 5);
          ɵɵviewQuery(_c43, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusableElement = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tagsContainer = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cleanerSvg = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scrollBar = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.errorIconTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tags = _t);
        }
      },
      hostVars: 7,
      hostBindings: function TuiInputTagComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin.capture.silent", function TuiInputTagComponent_focusin_capture_silent_HostBindingHandler() {
            return ctx.onFocusInOut();
          })("focusout.capture.silent", function TuiInputTagComponent_focusout_capture_silent_HostBindingHandler() {
            return ctx.onFocusInOut();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_icon-start", ctx.iconStart)("_expandable", ctx.expandable)("_label-outside", ctx.labelOutside);
        }
      },
      inputs: {
        separator: "separator",
        search: "search",
        editable: "editable",
        tagValidator: "tagValidator",
        rows: "rows",
        inputHidden: "inputHidden",
        uniqueTags: "uniqueTags",
        autoColor: "autoColor",
        maxLength: "maxLength",
        placeholder: "placeholder",
        removable: "removable",
        pseudoOpen: "pseudoOpen",
        disabledItemHandler: "disabledItemHandler",
        pseudoFocusedSetter: [0, "pseudoFocused", "pseudoFocusedSetter"]
      },
      outputs: {
        searchChange: "searchChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputTagComponent), tuiAsControl2(_TuiInputTagComponent), tuiAsDataListHost(_TuiInputTagComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c62,
      decls: 25,
      vars: 36,
      consts: [["text", ""], ["focusableElement", ""], ["errorIcon", ""], ["tag", ""], ["cleaner", ""], [4, "ngIf"], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["tuiWrapper", "", 3, "click.prevent.silent", "mousedown", "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], [1, "t-content"], ["class", "t-icon t-icon_left t-textfield-icon t-icon-wrapper", 4, "ngIf"], [1, "t-wrapper"], [1, "t-absolute-wrapper"], ["automation-id", "tui-input-tag__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", 4, "ngIf"], [1, "t-scrollbar", 3, "hidden"], [1, "t-tags"], [4, "ngIf", "ngIfElse"], [1, "t-input-wrapper"], [1, "t-ghost"], ["automation-id", "tui-input-tag__native", "type", "text", 1, "t-native", 3, "drop.prevent", "keydown.arrowLeft", "keydown.backspace", "keydown.enter.prevent", "ngModelChange", "paste.prevent", "disabled", "id", "ngModel", "ngModelOptions", "placeholder", "readOnly", "tabIndex"], [1, "t-value-content"], ["class", "t-icons t-icon-wrapper", 4, "ngIf"], [1, "t-icon", "t-icon_left", "t-textfield-icon", "t-icon-wrapper"], ["tuiAppearance", "icon", 3, "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "icon"], ["automation-id", "tui-input-tag__placeholder", 1, "t-placeholder"], ["automation-id", "tui-input-tag__tag", "tabIndex", "-1", "class", "t-tag", 3, "autoColor", "disabled", "editable", "hoverable", "leftContent", "maxLength", "removable", "separator", "size", "status", "value", "edited", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["automation-id", "tui-input-tag__tag", "tabIndex", "-1", 1, "t-tag", 3, "edited", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", "autoColor", "disabled", "editable", "hoverable", "leftContent", "maxLength", "removable", "separator", "size", "status", "value"], ["class", "t-text", 3, "t-text_comma", "t-text_disabled", "t-text_error", "textContent", 4, "ngFor", "ngForOf"], [1, "t-text", 3, "textContent"], [1, "t-icons", "t-icon-wrapper"], ["automation-id", "tui-input-tag__tooltip", "class", "t-tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-input-tag__cleaner", "tuiAppearance", "icon", "class", "t-cleaner", 3, "icon", "click.stop", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-input-tag__cleaner", "tuiAppearance", "icon", 1, "t-cleaner", 3, "click.stop", "icon"], ["automation-id", "tui-input-tag__tooltip", 1, "t-tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"], [1, "t-error-icon", 3, "icon"]],
      template: function TuiInputTagComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c53);
          ɵɵtemplate(0, TuiInputTagComponent_ng_container_0_Template, 1, 0, "ng-container", 5);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 6);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiInputTagComponent_Template_div_tuiDropdownOpenChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiInputTagComponent_Template_div_tuiActiveZoneChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          });
          ɵɵelementStart(3, "div", 7);
          ɵɵlistener("click.prevent.silent", function TuiInputTagComponent_Template_div_click_prevent_silent_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.detectRetargetFromLabel($event));
          })("mousedown", function TuiInputTagComponent_Template_div_mousedown_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMouseDown($event));
          });
          ɵɵelementStart(4, "div", 8);
          ɵɵtemplate(5, TuiInputTagComponent_div_5_Template, 2, 4, "div", 9);
          ɵɵelementStart(6, "div", 10)(7, "div", 11);
          ɵɵtemplate(8, TuiInputTagComponent_div_8_Template, 2, 2, "div", 12);
          ɵɵelementEnd();
          ɵɵelementStart(9, "tui-scrollbar", 13)(10, "div", 14);
          ɵɵtemplate(11, TuiInputTagComponent_ng_container_11_Template, 2, 2, "ng-container", 15)(12, TuiInputTagComponent_ng_template_12_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(14, "div", 16)(15, "div", 17);
          ɵɵtext(16);
          ɵɵelementEnd();
          ɵɵelementStart(17, "input", 18, 1);
          ɵɵlistener("drop.prevent", function TuiInputTagComponent_Template_input_drop_prevent_17_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onDrop($event));
          })("keydown.arrowLeft", function TuiInputTagComponent_Template_input_keydown_arrowLeft_17_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFieldKeyDownArrowLeft($event));
          })("keydown.backspace", function TuiInputTagComponent_Template_input_keydown_backspace_17_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFieldKeyDownBackspace($event));
          })("keydown.enter.prevent", function TuiInputTagComponent_Template_input_keydown_enter_prevent_17_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFieldKeyDownEnter());
          })("ngModelChange", function TuiInputTagComponent_Template_input_ngModelChange_17_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInput($event));
          })("paste.prevent", function TuiInputTagComponent_Template_input_paste_prevent_17_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPaste($event));
          });
          ɵɵelementEnd()()();
          ɵɵelementStart(19, "div", 19);
          ɵɵprojection(20);
          ɵɵelementEnd()()();
          ɵɵprojection(21, 1);
          ɵɵtemplate(22, TuiInputTagComponent_div_22_Template, 4, 3, "div", 20);
          ɵɵelementEnd();
          ɵɵtemplate(23, TuiInputTagComponent_ng_template_23_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const text_r11 = ɵɵreference(13);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 33, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
          ɵɵadvance(2);
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.canOpen);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("appearance", ctx.appearance)("disabled", ctx.computedDisabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.iconStart);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.hasPlaceholder);
          ɵɵadvance();
          ɵɵstyleProp("max-height", ctx.computeMaxHeight, "rem");
          ɵɵproperty("hidden", !ctx.expandable);
          ɵɵadvance();
          ɵɵclassProp("t-tags_empty", ctx.tagsEmpty);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.labelOutside)("ngIfElse", text_r11);
          ɵɵadvance(3);
          ɵɵclassProp("t-input-wrapper_collapsed", ctx.computedDisabled || ctx.readOnly || ctx.inputHidden);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.search);
          ɵɵadvance();
          ɵɵclassProp("t-native_hidden", ctx.inputHidden);
          ɵɵproperty("disabled", ctx.computedDisabled)("id", ctx.id)("ngModel", ctx.search)("ngModelOptions", ɵɵpureFunction0(35, _c7))("placeholder", ctx.placeholder)("readOnly", ctx.readOnly || ctx.inputHidden)("tabIndex", ctx.computedFocusable ? 0 : -1);
          ɵɵattribute("maxLength", ctx.maxLength);
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.hasRightIcons);
        }
      },
      dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiScrollbar, TuiTooltipComponent, TuiTagComponent, TuiWrapperDirective, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, TuiDropdownDirective, TuiDropdownOpen, AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none][_ngcontent-%COMP%]{caret-color:transparent}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input[_ngcontent-%COMP%]::-webkit-caps-lock-indicator, .t-input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, .t-input[_ngcontent-%COMP%]::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]:not(._readonly)   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-primitive-textfield._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-textarea._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder, tui-text-area._focused:not(._readonly)   [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="s"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="s"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="s"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="s"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="s"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="s"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="m"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="m"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="m"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="m"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"][_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]   [_nghost-%COMP%]:not(tui-primitive-textfield), .t-input   tui-textarea[data-size="l"][_nghost-%COMP%]:not(tui-textarea), tui-textarea[data-size="l"]   [_nghost-%COMP%]:not(tui-textarea), .t-input   tui-text-area[data-size="l"][_nghost-%COMP%]:not(tui-text-area), tui-text-area[data-size="l"]   [_nghost-%COMP%]:not(tui-text-area){padding:0 var(--tui-padding-l)}._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._disabled[_nghost-%COMP%], tui-primitive-textfield._disabled   [_nghost-%COMP%], .t-input   tui-textarea._disabled[_nghost-%COMP%], tui-textarea._disabled   [_nghost-%COMP%], .t-input   tui-text-area._disabled[_nghost-%COMP%], tui-text-area._disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="l"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="l"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield[data-size="m"]:not(._label-outside)[_nghost-%COMP%]:not(tui-primitive-textfield), tui-primitive-textfield[data-size="m"]:not(._label-outside)   [_nghost-%COMP%]:not(tui-primitive-textfield){padding-top:1rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]{padding-top:1.25rem}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-input[_ngcontent-%COMP%]:-webkit-autofill + .t-content[_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font-size:.69rem;transform:translateY(-.5rem)}._hidden[_nghost-%COMP%]   input.t-input[_ngcontent-%COMP%], .t-input   tui-primitive-textfield._hidden[_nghost-%COMP%], tui-primitive-textfield._hidden   [_nghost-%COMP%]{opacity:0;text-indent:-10em}.t-content[_ngcontent-%COMP%]{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0 var(--tui-padding-l)}.t-wrapper[_ngcontent-%COMP%]{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin:0 .125rem 0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-start:-.125rem;margin-inline-end:.375rem}[data-size=l][_nghost-%COMP%]   .t-icon_left[_ngcontent-%COMP%]{margin-inline-end:.75rem}.t-icons[_ngcontent-%COMP%]{display:flex;align-items:center}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.125rem}[data-size=s][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{margin-inline-end:-.375rem}[_nghost-%COMP%]:not([data-size=s])   .t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}[_nghost-%COMP%]{cursor:text}._expandable[_nghost-%COMP%]{block-size:auto;max-block-size:none}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}._readonly[_nghost-%COMP%]{cursor:default}[data-size=m][_nghost-%COMP%]{line-height:1rem}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-scrollbar[_ngcontent-%COMP%]{scroll-behavior:var(--tui-scroll-behavior);margin-inline-start:-.25rem;min-inline-size:100%}[_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%], ._label-outside._icon-start[_nghost-%COMP%]   .t-scrollbar[_ngcontent-%COMP%]{margin:0}[data-size=s]._icon-start[_nghost-%COMP%]   .t-scrollbar[_ngcontent-%COMP%]{margin-inline-start:.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%]{border-block-start:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-scrollbar[_ngcontent-%COMP%]{border-block-start:1.25rem solid transparent}.t-tags[_ngcontent-%COMP%]{display:flex;padding-inline-start:.25rem}.t-tags_expandable[_ngcontent-%COMP%]{overflow:hidden}.t-tags_empty[_ngcontent-%COMP%]{block-size:0}._expandable[_nghost-%COMP%]   .t-tags[_ngcontent-%COMP%]{flex-wrap:wrap;white-space:normal;overflow:hidden}._readonly[_nghost-%COMP%]   .t-tags[_ngcontent-%COMP%]{pointer-events:none}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-tags[_ngcontent-%COMP%], [data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-tags[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{align-items:flex-start}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-block-size:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-block-size:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{min-block-size:var(--tui-height-l)}[data-size=s][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{block-size:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{block-size:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-icon-wrapper[_ngcontent-%COMP%]{block-size:var(--tui-height-l)}.t-absolute-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;justify-content:center}[data-size=m][_nghost-%COMP%]   .t-absolute-wrapper[_ngcontent-%COMP%]{block-size:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]   .t-absolute-wrapper[_ngcontent-%COMP%]{block-size:var(--tui-height-l)}.t-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;padding:0;box-sizing:border-box}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{min-block-size:var(--tui-height-s);padding:calc((var(--tui-height-s) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{min-block-size:var(--tui-height-m);padding:calc((var(--tui-height-m) - var(--tui-height-xs) - .25rem) / 2) 0}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-l) - var(--tui-height-s) - .25rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-m) - 2rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height-l) - 2.5rem) / 2) 0}.t-tag[_ngcontent-%COMP%]{margin:.125rem .5rem .125rem -.25rem;margin-inline-start:-.25rem;margin-inline-end:.5rem;max-inline-size:100%;flex-shrink:0}[data-size=m][_nghost-%COMP%]   .t-tag[_ngcontent-%COMP%]{margin-inline-start:-.125rem;margin-inline-end:.375rem}.t-text[_ngcontent-%COMP%]:after{content:",\\a0"}.t-text_disabled[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}.t-text_error[_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-text[_ngcontent-%COMP%]:not(.t-text_comma):last-of-type:after{content:""}[_nghost-%COMP%]:not(._expandable)   .t-text[_ngcontent-%COMP%]{white-space:nowrap}.t-input-wrapper[_ngcontent-%COMP%], .t-value-content[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;max-inline-size:100%}[data-size=s][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-block-size:1.5rem}[data-size=m][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-block-size:calc(var(--tui-height-xs) + 2 * .125rem)}[data-size=l][_nghost-%COMP%]   .t-input-wrapper[_ngcontent-%COMP%], [data-size=l][_nghost-%COMP%]   .t-value-content[_ngcontent-%COMP%]{min-block-size:calc(var(--tui-height-s) + 2 * .125rem)}[_nghost-%COMP%]:not(._label-outside)   .t-input-wrapper[_ngcontent-%COMP%], [_nghost-%COMP%]:not(._label-outside)   .t-value-content[_ngcontent-%COMP%]{min-block-size:1rem}.t-input-wrapper_collapsed[_ngcontent-%COMP%]{flex:0;margin-inline-start:-.5rem}.t-value-content[_ngcontent-%COMP%]:empty{display:none}.t-ghost[_ngcontent-%COMP%]{visibility:hidden;white-space:pre;text-overflow:clip;min-inline-size:.125rem}[_nghost-%COMP%]:not(._expandable)   .t-ghost[_ngcontent-%COMP%]{min-inline-size:2rem}.t-native[_ngcontent-%COMP%]{margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;padding:0;cursor:inherit}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-native[inputMode=none][_ngcontent-%COMP%]{caret-color:transparent}.t-native_hidden[_ngcontent-%COMP%]{opacity:0;text-indent:-10em}.t-native[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}[tuiTheme="dark"][_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]::placeholder, [tuiTheme="dark"]   [_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary)}._focused[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}.t-error-icon[_ngcontent-%COMP%]{display:block;color:var(--tui-status-negative);font-size:1rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputTagComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-tag",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputTagComponent), tuiAsControl2(TuiInputTagComponent), tuiAsDataListHost(TuiInputTagComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size",
        "[class._icon-start]": "iconStart",
        "[class._expandable]": "expandable",
        "[class._label-outside]": "labelOutside",
        "(focusin.capture.silent)": "onFocusInOut()",
        "(focusout.capture.silent)": "onFocusInOut()"
      },
      template: `<ng-container *ngIf="hintOptions?.change$ | async" />
<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="canOpen"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <div
        tuiWrapper
        [appearance]="appearance"
        [disabled]="computedDisabled"
        [focus]="computedFocused"
        [hover]="pseudoHover"
        [invalid]="computedInvalid"
        [readOnly]="readOnly"
        (click.prevent.silent)="detectRetargetFromLabel($event)"
        (mousedown)="onMouseDown($event)"
    >
        <div class="t-content">
            <div
                *ngIf="iconStart"
                class="t-icon t-icon_left t-textfield-icon t-icon-wrapper"
            >
                <tui-icon
                    *polymorpheusOutlet="iconStart as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
            <div class="t-wrapper">
                <div class="t-absolute-wrapper">
                    <div
                        *ngIf="hasPlaceholder"
                        automation-id="tui-input-tag__placeholder"
                        class="t-placeholder"
                        [class.t-placeholder_raised]="placeholderRaised"
                    >
                        <ng-content />
                    </div>
                </div>
                <tui-scrollbar
                    class="t-scrollbar"
                    [hidden]="!expandable"
                    [style.maxHeight.rem]="computeMaxHeight"
                >
                    <div
                        class="t-tags"
                        [class.t-tags_empty]="tagsEmpty"
                    >
                        <ng-container *ngIf="labelOutside; else text">
                            <tui-tag
                                *ngFor="let item of value; index as index; trackBy: trackByFn"
                                #tag
                                automation-id="tui-input-tag__tag"
                                tabIndex="-1"
                                class="t-tag"
                                [autoColor]="autoColor"
                                [disabled]="computedDisabled || disabledItemHandler(item)"
                                [editable]="editable && !readOnly"
                                [hoverable]="!readOnly"
                                [leftContent]="getLeftContent(item)"
                                [maxLength]="maxLength"
                                [removable]="!readOnly && removable"
                                [separator]="separator"
                                [size]="controller.size"
                                [status]="status"
                                [value]="item.toString()"
                                (edited)="onTagEdited($event, index)"
                                (keydown.arrowLeft.prevent)="onTagKeyDownArrowLeft(index)"
                                (keydown.arrowRight.prevent)="onTagKeyDownArrowRight(index)"
                            />
                        </ng-container>
                        <ng-template #text>
                            <span
                                *ngFor="let item of value"
                                class="t-text"
                                [class.t-text_comma]="computedFocused && !inputHidden"
                                [class.t-text_disabled]="disabledItemHandler(item)"
                                [class.t-text_error]="!tagValidator(item)"
                                [textContent]="item"
                            ></span>
                        </ng-template>
                        <div
                            class="t-input-wrapper"
                            [class.t-input-wrapper_collapsed]="computedDisabled || readOnly || inputHidden"
                        >
                            <div class="t-ghost">{{ search }}</div>
                            <input
                                #focusableElement
                                automation-id="tui-input-tag__native"
                                type="text"
                                class="t-native"
                                [attr.maxLength]="maxLength"
                                [class.t-native_hidden]="inputHidden"
                                [disabled]="computedDisabled"
                                [id]="id"
                                [ngModel]="search"
                                [ngModelOptions]="{standalone: true}"
                                [placeholder]="placeholder"
                                [readOnly]="readOnly || inputHidden"
                                [tabIndex]="computedFocusable ? 0 : -1"
                                (drop.prevent)="onDrop($any($event))"
                                (keydown.arrowLeft)="onFieldKeyDownArrowLeft($event)"
                                (keydown.backspace)="onFieldKeyDownBackspace($event)"
                                (keydown.enter.prevent)="onFieldKeyDownEnter()"
                                (ngModelChange)="onInput($event)"
                                (paste.prevent)="onPaste($event)"
                            />
                        </div>
                    </div>
                    <div class="t-value-content">
                        <ng-content select="tuiContent" />
                    </div>
                </tui-scrollbar>
            </div>
            <ng-content select="select" />
            <div
                *ngIf="hasRightIcons"
                class="t-icons t-icon-wrapper"
            >
                <ng-container *ngIf="hasCleaner">
                    <tui-icon
                        *polymorpheusOutlet="iconCleaner as src; context: {$implicit: size}"
                        #cleaner
                        automation-id="tui-input-tag__cleaner"
                        tuiAppearance="icon"
                        class="t-cleaner"
                        [icon]="src.toString()"
                        (click.stop)="onCleanerClick()"
                    />
                </ng-container>
                <tui-tooltip
                    *ngIf="showHint"
                    automation-id="tui-input-tag__tooltip"
                    class="t-tooltip"
                    [content]="hintOptions?.content"
                    [describeId]="id"
                />
                <div
                    *ngIf="icon"
                    class="t-icon t-textfield-icon"
                >
                    <tui-icon
                        *polymorpheusOutlet="icon as src; context: {$implicit: size}"
                        tuiAppearance="icon"
                        [icon]="src.toString()"
                    />
                </div>
            </div>
        </div>
        <ng-template #errorIcon>
            <tui-icon
                class="t-error-icon"
                [icon]="icons.error"
            />
        </ng-template>
    </div>
</div>
`,
      styles: [':host{position:relative;display:block;text-align:start;border-radius:var(--tui-radius-m);block-size:var(--tui-height);min-block-size:var(--tui-height);max-block-size:var(--tui-height)}:host[data-size=s]{--tui-height: var(--tui-height-s);font:var(--tui-font-text-s)}:host[data-size=m]{--tui-height: var(--tui-height-m);font:var(--tui-font-text-s)}:host[data-size=l]{--tui-height: var(--tui-height-l);font:var(--tui-font-text-m);line-height:1.25rem}:host :host-context(*:disabled){pointer-events:none}.t-input{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);text-indent:var(--text-indent);color:var(--tui-text-primary);text-align:inherit;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-transform:inherit;resize:none}.t-input:-webkit-autofill,.t-input:-webkit-autofill:hover,.t-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[inputMode=none]{caret-color:transparent}.t-input:-webkit-autofill,.t-input:-webkit-autofill:first-line{font-size:inherit;line-height:inherit}.t-input::-webkit-caps-lock-indicator,.t-input::-webkit-contacts-auto-fill-button,.t-input::-webkit-credit-card-auto-fill-button,.t-input::-webkit-credentials-auto-fill-button,.t-input::-webkit-strong-password-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused:not(._readonly) .t-input::placeholder,:host-context(tui-primitive-textfield._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-textarea._focused:not(._readonly)) .t-input::placeholder,:host-context(tui-text-area._focused:not(._readonly)) .t-input::placeholder{opacity:1}:host[data-size=s] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="s"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="s"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="s"]):not(tui-text-area){padding:0 var(--tui-padding-s)}:host[data-size=m] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="m"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="m"]):not(tui-text-area){padding:0 var(--tui-padding-m)}:host[data-size=l] .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]):not(tui-primitive-textfield),.t-input :host-context(tui-textarea[data-size="l"]):not(tui-textarea),.t-input :host-context(tui-text-area[data-size="l"]):not(tui-text-area){padding:0 var(--tui-padding-l)}:host._disabled .t-input,.t-input :host-context(tui-primitive-textfield._disabled),.t-input :host-context(tui-textarea._disabled),.t-input :host-context(tui-text-area._disabled){pointer-events:none}:host[data-size=l]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="l"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1.25rem}:host[data-size=m]:not(._label-outside) .t-input,.t-input :host-context(tui-primitive-textfield[data-size="m"]:not(._label-outside)):not(tui-primitive-textfield){padding-top:1rem}:host[data-size=l]:not(._label-outside) .t-input{padding-top:1.25rem}:host[data-size=l]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.8156rem;transform:translateY(-.625rem)}:host[data-size=m]:not(._label-outside) .t-input:-webkit-autofill+.t-content .t-placeholder{font-size:.69rem;transform:translateY(-.5rem)}:host._hidden input.t-input,.t-input :host-context(tui-primitive-textfield._hidden){opacity:0;text-indent:-10em}.t-content{display:flex;block-size:100%;inline-size:100%;box-sizing:border-box;align-items:center;overflow:hidden}:host[data-size=s] .t-content{padding:0 var(--tui-padding-s)}:host[data-size=m] .t-content{padding:0 var(--tui-padding-m)}:host[data-size=l] .t-content{padding:0 var(--tui-padding-l)}.t-wrapper{flex:1;min-inline-size:0;padding-inline-end:.25rem}.t-placeholder{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0)}@supports (-webkit-hyphens: none){.t-placeholder{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised{transform:translateY(-.625rem)}:host[data-size=m] .t-placeholder_raised{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}:host._invalid:not(._focused) .t-placeholder_raised,:host._invalid:not(._focused):hover .t-placeholder_raised{color:var(--tui-text-negative)}:host._focused .t-placeholder,:host[data-size=m]._focused._label-outside .t-placeholder,:host[data-size=l]._focused._label-outside .t-placeholder{color:var(--tui-text-tertiary)}:host[data-size=l] .t-placeholder{font:var(--tui-font-text-m);line-height:1.25rem}:host[data-size=l] .t-placeholder_raised{font-size:.8156rem}:host[data-size=m]._focused:not(._label-outside) .t-placeholder,:host[data-size=l]._focused:not(._label-outside) .t-placeholder{color:var(--tui-text-primary)}.t-cleaner{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}:host._readonly .t-cleaner,:host._disabled .t-cleaner{pointer-events:none}.t-icon{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}:host[data-size=s] .t-icon_left{margin:0 .125rem 0 -.375rem}:host[data-size=m] .t-icon_left{margin-inline-start:-.125rem;margin-inline-end:.375rem}:host[data-size=l] .t-icon_left{margin-inline-end:.75rem}.t-icons{display:flex;align-items:center}:host[data-size=m] .t-icons{margin-inline-end:-.125rem}:host[data-size=s] .t-icons{margin-inline-end:-.375rem}:host:not([data-size=s]) .t-icons>:not(:first-child){margin-inline-start:.25rem}:host{cursor:text}:host._expandable{block-size:auto;max-block-size:none}:host._disabled,:host :host-context(*:disabled){pointer-events:none}:host._readonly{cursor:default}:host[data-size=m]{line-height:1rem}.t-hosted{display:block;border-radius:inherit}.t-scrollbar{scroll-behavior:var(--tui-scroll-behavior);margin-inline-start:-.25rem;min-inline-size:100%}:host:not(._label-outside) .t-scrollbar,:host._label-outside._icon-start .t-scrollbar{margin:0}:host[data-size=s]._icon-start .t-scrollbar{margin-inline-start:.25rem}:host[data-size=m]:not(._label-outside) .t-scrollbar{border-block-start:1rem solid transparent}:host[data-size=l]:not(._label-outside) .t-scrollbar{border-block-start:1.25rem solid transparent}.t-tags{display:flex;padding-inline-start:.25rem}.t-tags_expandable{overflow:hidden}.t-tags_empty{block-size:0}:host._expandable .t-tags{flex-wrap:wrap;white-space:normal;overflow:hidden}:host._readonly .t-tags{pointer-events:none}:host[data-size=m]:not(._label-outside) .t-tags,:host[data-size=l]:not(._label-outside) .t-tags{padding:0}.t-content{align-items:flex-start}:host[data-size=s] .t-content{min-block-size:var(--tui-height-s)}:host[data-size=m] .t-content{min-block-size:var(--tui-height-m)}:host[data-size=l] .t-content{min-block-size:var(--tui-height-l)}:host[data-size=s] .t-icon-wrapper{block-size:var(--tui-height-s)}:host[data-size=m] .t-icon-wrapper{block-size:var(--tui-height-m)}:host[data-size=l] .t-icon-wrapper{block-size:var(--tui-height-l)}.t-absolute-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;justify-content:center}:host[data-size=m] .t-absolute-wrapper{block-size:var(--tui-height-m)}:host[data-size=l] .t-absolute-wrapper{block-size:var(--tui-height-l)}.t-wrapper{position:relative;display:flex;align-items:center;padding:0;box-sizing:border-box}:host[data-size=s] .t-wrapper{min-block-size:var(--tui-height-s);padding:calc((var(--tui-height-s) - 1.5rem) / 2) 0}:host[data-size=m] .t-wrapper{min-block-size:var(--tui-height-m);padding:calc((var(--tui-height-m) - var(--tui-height-xs) - .25rem) / 2) 0}:host[data-size=l] .t-wrapper{padding:calc((var(--tui-height-l) - var(--tui-height-s) - .25rem) / 2) 0}:host[data-size=m]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height-m) - 2rem) / 2) 0}:host[data-size=l]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height-l) - 2.5rem) / 2) 0}.t-tag{margin:.125rem .5rem .125rem -.25rem;margin-inline-start:-.25rem;margin-inline-end:.5rem;max-inline-size:100%;flex-shrink:0}:host[data-size=m] .t-tag{margin-inline-start:-.125rem;margin-inline-end:.375rem}.t-text:after{content:",\\a0"}.t-text_disabled{color:var(--tui-text-tertiary)}.t-text_error{color:var(--tui-text-negative)}.t-text:not(.t-text_comma):last-of-type:after{content:""}:host:not(._expandable) .t-text{white-space:nowrap}.t-input-wrapper,.t-value-content{position:relative;display:flex;flex:1;max-inline-size:100%}:host[data-size=s] .t-input-wrapper,:host[data-size=s] .t-value-content{min-block-size:1.5rem}:host[data-size=m] .t-input-wrapper,:host[data-size=m] .t-value-content{min-block-size:calc(var(--tui-height-xs) + 2 * .125rem)}:host[data-size=l] .t-input-wrapper,:host[data-size=l] .t-value-content{min-block-size:calc(var(--tui-height-s) + 2 * .125rem)}:host:not(._label-outside) .t-input-wrapper,:host:not(._label-outside) .t-value-content{min-block-size:1rem}.t-input-wrapper_collapsed{flex:0;margin-inline-start:-.5rem}.t-value-content:empty{display:none}.t-ghost{visibility:hidden;white-space:pre;text-overflow:clip;min-inline-size:.125rem}:host:not(._expandable) .t-ghost{min-inline-size:2rem}.t-native{margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-sizing:border-box;padding:0;cursor:inherit}.t-native:-webkit-autofill,.t-native:-webkit-autofill:hover,.t-native:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-native[inputMode=none]{caret-color:transparent}.t-native_hidden{opacity:0;text-indent:-10em}.t-native::placeholder{color:var(--tui-text-tertiary);opacity:0}:host-context([tuiTheme="dark"]) .t-native::placeholder{color:var(--tui-text-tertiary)}:host._focused .t-native:not(:read-only)::placeholder{opacity:1}.t-error-icon{display:block;color:var(--tui-status-negative);font-size:1rem}\n']
    }]
  }], null, {
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    tagsContainer: [{
      type: ViewChild,
      args: ["tagsContainer"]
    }],
    tags: [{
      type: ViewChildren,
      args: ["tag", {
        read: ElementRef
      }]
    }],
    cleanerSvg: [{
      type: ViewChild,
      args: ["cleaner", {
        read: ElementRef
      }]
    }],
    scrollBar: [{
      type: ViewChild,
      args: [TuiScrollbar, {
        read: ElementRef
      }]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }],
    valueContent: [{
      type: ContentChild,
      args: [PolymorpheusOutlet]
    }],
    errorIconTemplate: [{
      type: ViewChild,
      args: ["errorIcon"]
    }],
    separator: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    tagValidator: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    inputHidden: [{
      type: Input
    }],
    uniqueTags: [{
      type: Input
    }],
    autoColor: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    pseudoOpen: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    searchChange: [{
      type: Output
    }],
    pseudoFocusedSetter: [{
      type: Input,
      args: ["pseudoFocused"]
    }]
  });
})();
var TuiInputTagModule = class _TuiInputTagModule {
  static {
    this.ɵfac = function TuiInputTagModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputTagModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputTagModule,
      declarations: [TuiInputTagComponent],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiHovered, TuiScrollbar, TuiTooltipModule, TuiTagModule, TuiWrapperModule, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputTagComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [TuiScrollService],
      imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiTagModule, TuiWrapperModule, TuiIcon, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputTagModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiHovered, TuiScrollbar, TuiTooltipModule, TuiTagModule, TuiWrapperModule, TuiLegacyDropdownOpenMonitorDirective, TuiAppearance, TuiIcon, ...TuiDropdown],
      declarations: [TuiInputTagComponent],
      providers: [TuiScrollService],
      exports: [TuiInputTagComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-date-multi.mjs
var _c012 = ["multiple", ""];
var _c111 = ["*", [["input"]]];
var _c27 = ["*", "input"];
var _c34 = () => ({
  standalone: true
});
var _c44 = (a0) => ({
  $implicit: a0
});
function TuiInputDateMultiComponent_ng_template_9_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 6);
    ɵɵlistener("click", function TuiInputDateMultiComponent_ng_template_9_tui_icon_0_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onIconClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r5 = ctx.polymorpheusOutlet;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r3.size === "s")("t-icon", !ctx_r3.computedDisabled);
    ɵɵproperty("icon", src_r5.toString());
  }
}
function TuiInputDateMultiComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputDateMultiComponent_ng_template_9_tui_icon_0_Template, 1, 5, "tui-icon", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.calendarIcon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c44, ctx_r3.size));
  }
}
function TuiInputDateMultiComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 7);
    ɵɵlistener("dayClick", function TuiInputDateMultiComponent_ng_template_11_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onDayClick($event));
    })("monthChange", function TuiInputDateMultiComponent_ng_template_11_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onMonthChange($event));
    })("mousedown.silent.prevent", function TuiInputDateMultiComponent_ng_template_11_Template_tui_calendar_mousedown_silent_prevent_0_listener() {
      ɵɵrestoreView(_r6);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div", 8);
    ɵɵlistener("mousedown.silent.prevent", function TuiInputDateMultiComponent_ng_template_11_Template_div_mousedown_silent_prevent_1_listener() {
      ɵɵrestoreView(_r6);
      return ɵɵresetView(0);
    });
    ɵɵelementStart(2, "button", 9);
    ɵɵlistener("click", function TuiInputDateMultiComponent_ng_template_11_Template_button_click_2_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.done());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r3.disabledItemHandler)("markerHandler", ctx_r3.markerHandler)("max", ctx_r3.computedMax)("min", ctx_r3.computedMin)("month", ctx_r3.computedActiveYearMonth)("value", ctx_r3.value);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, ctx_r3.doneWord$), " ");
  }
}
var TuiInputDateMultiComponent = class _TuiInputDateMultiComponent extends AbstractTuiMultipleControl {
  constructor() {
    super(...arguments);
    this.month = null;
    this.mobileCalendar = inject(TUI_MOBILE_CALENDAR, {
      optional: true
    });
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.dateTexts$ = inject(TUI_DATE_TEXTS);
    this.valueTransformer = inject(TUI_DATE_VALUE_TRANSFORMER, {
      optional: true
    });
    this.open = false;
    this.dateFormat = TUI_DEFAULT_DATE_FORMAT;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.doneWord$ = inject(TUI_DONE_WORD);
    this.filler$ = this.dateTexts$.pipe(map((dateTexts) => changeDateSeparator(dateTexts[this.dateFormat.mode], this.dateFormat.separator)));
    this.dateFormat$ = inject(TUI_DATE_FORMAT).pipe(tuiWatch(this.cdr), takeUntilDestroyed()).subscribe((format) => {
      this.dateFormat = format;
    });
    this.min = this.options.min;
    this.max = this.options.max;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.defaultActiveYearMonth = TuiMonth.currentLocal();
    this.inputHidden = false;
    this.editable = true;
    this.search = "";
    this.placeholder = "";
    this.rows = 1;
    this.maskitoOptions = maskitoDateOptionsGenerator({
      mode: "dd/mm/yyyy",
      separator: ".",
      min: this.min?.toLocalNativeDate(),
      max: this.max?.toLocalNativeDate()
    });
    this.tagValidator = (tag) => {
      const {
        year,
        month,
        day
      } = tuiIsString(tag) ? TuiDay.parseRawDateString(tag) : tag;
      const date = new TuiDay(year, month, day);
      return (TuiDay.isValidDay(year, month, day) && this.min?.dayBefore(date) && this.max?.dayAfter(date)) ?? false;
    };
    this.disabledItemHandlerWrapper = (handler) => (stringifiable) => tuiIsString(stringifiable) || handler(stringifiable.item);
    this.valueMapper = (value) => value.map((item) => new TuiStringifiableItem(item, (item2) => String(item2)));
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement || null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeDropdownMode() {
    return this.isMobile && !this.editable;
  }
  get computedMin() {
    return this.min ?? this.options.min;
  }
  get computedMax() {
    return this.max ?? this.options.max;
  }
  get computedMobile() {
    return this.isMobile && !!this.mobileCalendar;
  }
  get calendarIcon() {
    return this.options.icon;
  }
  get computedActiveYearMonth() {
    return this.month || this.value[this.value.length - 1] || tuiDateClamp(this.defaultActiveYearMonth, this.computedMin, this.computedMax);
  }
  onClick() {
    if (!this.isMobile && this.interactive) {
      this.open = !this.open;
    }
  }
  onIconClick() {
    if (this.isMobile && this.interactive) {
      this.open = true;
    }
  }
  onEnter(search) {
    if (!this.tagValidator(search)) {
      return;
    }
    this.value = tuiToggleDay(this.value, TuiDay.normalizeParse(search));
    if (this.inputTag) {
      this.inputTag.search = "";
    }
    this.done();
  }
  onValueChange(value) {
    this.control?.updateValueAndValidity({
      emitEvent: false
    });
    if (!value.length && !this.mobileCalendar) {
      this.onOpenChange(true);
    }
    this.value = value.map(({
      item
    }) => item);
  }
  onDayClick(value) {
    this.value = tuiToggleDay(this.value, value);
  }
  done() {
    this.open = false;
  }
  onMonthChange(month) {
    this.month = month;
  }
  onOpenChange(open) {
    this.open = open;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateMultiComponent_BaseFactory;
      return function TuiInputDateMultiComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateMultiComponent_BaseFactory || (ɵTuiInputDateMultiComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateMultiComponent)))(__ngFactoryType__ || _TuiInputDateMultiComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputDateMultiComponent,
      selectors: [["tui-input-date", "multiple", ""]],
      viewQuery: function TuiInputDateMultiComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
          ɵɵviewQuery(TuiInputTagComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputTag = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function TuiInputDateMultiComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputDateMultiComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_editable", ctx.editable);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        defaultActiveYearMonth: "defaultActiveYearMonth",
        inputHidden: "inputHidden",
        editable: "editable",
        search: "search",
        placeholder: "placeholder",
        rows: "rows",
        tagValidator: "tagValidator"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputDateMultiComponent), tuiAsControl(_TuiInputDateMultiComponent), tuiAsControl2(_TuiInputDateMultiComponent), tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER), TUI_MOBILE_CALENDAR_PROVIDER]), ɵɵInheritDefinitionFeature],
      attrs: _c012,
      ngContentSelectors: _c27,
      decls: 13,
      vars: 33,
      consts: [["inputTag", ""], ["iconContent", ""], ["dropdown", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], [1, "t-input", 3, "keydown.enter", "ngModelChange", "disabled", "disabledItemHandler", "editable", "inputHidden", "maskito", "nativeId", "ngModel", "ngModelOptions", "placeholder", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "removable", "rows", "tagValidator", "tuiTextfieldFiller", "tuiTextfieldIcon"], ["tuiAppearance", "icon", 3, "t-icon_small", "t-icon", "icon", "click", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "click", "icon"], [3, "dayClick", "monthChange", "mousedown.silent.prevent", "disabledItemHandler", "markerHandler", "max", "min", "month", "value"], [1, "t-button", 3, "mousedown.silent.prevent"], ["tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiInputDateMultiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c111);
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("tuiDropdownOpenChange", function TuiInputDateMultiComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵelementStart(1, "tui-input-tag", 4, 0);
          ɵɵpipe(3, "tuiMapper");
          ɵɵpipe(4, "tuiMapper");
          ɵɵpipe(5, "tuiMapper");
          ɵɵpipe(6, "async");
          ɵɵlistener("keydown.enter", function TuiInputDateMultiComponent_Template_tui_input_tag_keydown_enter_1_listener() {
            ɵɵrestoreView(_r1);
            const inputTag_r2 = ɵɵreference(2);
            return ɵɵresetView(ctx.onEnter(inputTag_r2.search || ""));
          })("ngModelChange", function TuiInputDateMultiComponent_Template_tui_input_tag_ngModelChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(7);
          ɵɵprojection(8, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(9, TuiInputDateMultiComponent_ng_template_9_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(11, TuiInputDateMultiComponent_ng_template_11_Template, 5, 9, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const iconContent_r7 = ɵɵreference(10);
          const dropdown_r8 = ɵɵreference(12);
          ɵɵproperty("tuiDropdown", dropdown_r8)("tuiDropdownEnabled", ctx.interactive)("tuiDropdownOpen", ctx.open && ctx.interactive);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled)("disabledItemHandler", ɵɵpipeBind2(3, 21, ctx.disabledItemHandler, ctx.disabledItemHandlerWrapper))("editable", ctx.editable)("inputHidden", ctx.inputHidden)("maskito", ctx.maskitoOptions)("nativeId", ctx.nativeId)("ngModel", ɵɵpipeBind2(4, 24, ctx.value, ctx.valueMapper))("ngModelOptions", ɵɵpureFunction0(32, _c34))("placeholder", ctx.placeholder)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("pseudoInvalid", ctx.computedInvalid)("readOnly", ctx.readOnly)("removable", !ctx.nativeDropdownMode)("rows", ctx.rows)("tagValidator", ɵɵpipeBind2(5, 27, ctx.tagValidator, ctx.disabledItemHandlerWrapper))("tuiTextfieldFiller", ɵɵpipeBind1(6, 30, ctx.filler$) || "")("tuiTextfieldIcon", ctx.calendarIcon && iconContent_r7);
        }
      },
      dependencies: [MaskitoDirective, PolymorpheusOutlet, TuiCalendar, TuiLink, TuiInputTagComponent, TuiDropdownDirective, TuiDropdownOpen, NgControlStatus, NgModel, TuiTextfieldIconDirective, TuiTextfieldFillerDirective, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, AsyncPipe, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-button[_ngcontent-%COMP%]{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;text-align:center}.t-native-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateMultiComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-date[multiple]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputDateMultiComponent), tuiAsControl(TuiInputDateMultiComponent), tuiAsControl2(TuiInputDateMultiComponent), tuiDateStreamWithTransformer(TUI_DATE_VALUE_TRANSFORMER), TUI_MOBILE_CALENDAR_PROVIDER],
      host: {
        "[class._editable]": "editable",
        "[attr.data-size]": "size",
        "(click)": "onClick()"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive"
    [tuiDropdownOpen]="open && interactive"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-input-tag
        #inputTag
        class="t-input"
        [disabled]="disabled"
        [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerWrapper"
        [editable]="editable"
        [inputHidden]="inputHidden"
        [maskito]="maskitoOptions"
        [nativeId]="nativeId"
        [ngModel]="value | tuiMapper: valueMapper"
        [ngModelOptions]="{standalone: true}"
        [placeholder]="placeholder"
        [pseudoFocus]="pseudoFocus"
        [pseudoHover]="pseudoHover"
        [pseudoInvalid]="computedInvalid"
        [readOnly]="readOnly"
        [removable]="!nativeDropdownMode"
        [rows]="rows"
        [tagValidator]="tagValidator | tuiMapper: disabledItemHandlerWrapper"
        [tuiTextfieldFiller]="(filler$ | async) || ''"
        [tuiTextfieldIcon]="calendarIcon && iconContent"
        (keydown.enter)="onEnter(inputTag.search || '')"
        (ngModelChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-input-tag>

    <ng-template #iconContent>
        <tui-icon
            *polymorpheusOutlet="calendarIcon as src; context: {$implicit: size}"
            tuiAppearance="icon"
            [class.t-icon_small]="size === 's'"
            [class.t-icon]="!computedDisabled"
            [icon]="src.toString()"
            (click)="onIconClick()"
        />
    </ng-template>

    <ng-template #dropdown>
        <tui-calendar
            [disabledItemHandler]="disabledItemHandler"
            [markerHandler]="markerHandler"
            [max]="computedMax"
            [min]="computedMin"
            [month]="computedActiveYearMonth"
            [value]="value"
            (dayClick)="onDayClick($event)"
            (monthChange)="onMonthChange($event)"
            (mousedown.silent.prevent)="(0)"
        />
        <div
            class="t-button"
            (mousedown.silent.prevent)="(0)"
        >
            <button
                tuiLink
                type="button"
                (click)="done()"
            >
                {{ doneWord$ | async }}
            </button>
        </div>
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-icon{pointer-events:auto}.t-icon_small{border-width:.25rem}.t-button{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-button button{flex:1;text-align:center}.t-native-input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    inputTag: [{
      type: ViewChild,
      args: [TuiInputTagComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    defaultActiveYearMonth: [{
      type: Input
    }],
    inputHidden: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    tagValidator: [{
      type: Input
    }]
  });
})();
var TuiInputDateMultiModule = class _TuiInputDateMultiModule {
  static {
    this.ɵfac = function TuiInputDateMultiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDateMultiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputDateMultiModule,
      declarations: [TuiInputDateMultiComponent],
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiInputTagModule, FormsModule, TuiMapperPipe, TuiTextfieldControllerModule, TuiPrimitiveTextfieldModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputDateMultiComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCalendar, TuiInputTagModule, FormsModule, TuiTextfieldControllerModule, TuiPrimitiveTextfieldModule, TuiIcon, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateMultiModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiInputTagModule, FormsModule, TuiMapperPipe, TuiTextfieldControllerModule, TuiPrimitiveTextfieldModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, ...TuiDropdown],
      declarations: [TuiInputDateMultiComponent],
      exports: [TuiInputDateMultiComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-date-range.mjs
var _c013 = ["*", [["input"]]];
var _c112 = ["*", "input"];
var _c28 = (a0) => ({
  $implicit: a0
});
function TuiInputDateRangeComponent_tui_primitive_textfield_1_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiInputDateRangeComponent_tui_primitive_textfield_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiInputDateRangeComponent_tui_primitive_textfield_1_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.computedContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c28, ctx_r2.value));
  }
}
function TuiInputDateRangeComponent_tui_primitive_textfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-primitive-textfield", 4);
    ɵɵlistener("valueChange", function TuiInputDateRangeComponent_tui_primitive_textfield_1_Template_tui_primitive_textfield_valueChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onValueChange($event));
    });
    ɵɵprojection(1);
    ɵɵprojection(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
    ɵɵtemplate(3, TuiInputDateRangeComponent_tui_primitive_textfield_1_div_3_Template, 2, 4, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dateFiller_r5 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext();
    const iconContent_r6 = ɵɵreference(4);
    ɵɵproperty("disabled", ctx_r2.computedDisabled)("invalid", ctx_r2.computedInvalid)("maskito", ctx_r2.computedMask)("nativeId", ctx_r2.nativeId)("pseudoActive", ctx_r2.pseudoActive)("pseudoFocus", ctx_r2.innerPseudoFocused)("pseudoHover", ctx_r2.pseudoHover)("readOnly", ctx_r2.readOnly)("tuiTextfieldFiller", ctx_r2.getComputedRangeFiller(dateFiller_r5 || ""))("tuiTextfieldIcon", ctx_r2.calendarIcon && iconContent_r6)("value", ctx_r2.computedValue);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.showValueTemplate);
  }
}
function TuiInputDateRangeComponent_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 9);
    ɵɵlistener("click", function TuiInputDateRangeComponent_ng_template_3_tui_icon_0_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onIconClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r8 = ctx.polymorpheusOutlet;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s")("t-icon", !ctx_r2.computedDisabled);
    ɵɵproperty("icon", src_r8.toString());
  }
}
function TuiInputDateRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputDateRangeComponent_ng_template_3_tui_icon_0_Template, 1, 5, "tui-icon", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.calendarIcon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c28, ctx_r2.size));
  }
}
function TuiInputDateRangeComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-range", 10);
    ɵɵtwoWayListener("itemChange", function TuiInputDateRangeComponent_ng_template_5_Template_tui_calendar_range_itemChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.selectedActivePeriod, $event) || (ctx_r2.selectedActivePeriod = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("valueChange", function TuiInputDateRangeComponent_ng_template_5_Template_tui_calendar_range_valueChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRangeChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("defaultViewedMonth", ctx_r2.defaultViewedMonth)("disabledItemHandler", ctx_r2.disabledItemHandler)("items", ctx_r2.items)("markerHandler", ctx_r2.markerHandler)("max", ctx_r2.max)("maxLength", ctx_r2.maxLength)("min", ctx_r2.min)("minLength", ctx_r2.minLength)("value", ctx_r2.value);
    ɵɵtwoWayProperty("item", ctx_r2.selectedActivePeriod);
  }
}
var TuiInputDateRangeComponent = class _TuiInputDateRangeComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.mobileCalendar = inject(TUI_MOBILE_CALENDAR, {
      optional: true
    });
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.dateTexts$ = inject(TUI_DATE_TEXTS);
    this.valueTransformer = inject(TUI_DATE_RANGE_VALUE_TRANSFORMER, {
      optional: true
    });
    this.dateFiller$ = this.dateTexts$.pipe(map((dateTexts) => changeDateSeparator(dateTexts[this.dateFormat.mode], this.dateFormat.separator)));
    this.dateFormat = TUI_DEFAULT_DATE_FORMAT;
    this.dateFormat$ = inject(TUI_DATE_FORMAT).pipe(tuiWatch(this.cdr), takeUntilDestroyed()).subscribe((format) => {
      this.dateFormat = format;
    });
    this.selectedActivePeriod = null;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.defaultViewedMonth = TuiMonth.currentLocal();
    this.items = [];
    this.min = this.options.min;
    this.max = this.options.max;
    this.minLength = null;
    this.maxLength = null;
    this.open = false;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get computedExampleText() {
    return this.items.length ? this.textfield?.nativeFocusableElement?.placeholder || "" : "";
  }
  get computedValue() {
    const {
      value,
      nativeValue,
      activePeriod
    } = this;
    if (activePeriod) {
      return String(activePeriod);
    }
    return value ? value.getFormattedDayRange(this.dateFormat.mode, this.dateFormat.separator) : nativeValue;
  }
  get size() {
    return this.textfieldSize.size;
  }
  onClick() {
    if (!this.isMobile && this.interactive) {
      this.toggle();
    }
  }
  onValueChange(value) {
    if (this.control) {
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (!value && !this.mobileCalendar) {
      this.onOpenChange(true);
    }
    this.value = value.length === DATE_RANGE_FILLER_LENGTH ? TuiDayRange.normalizeParse(value, this.dateFormat.mode) : null;
    if (!this.value) {
      this.selectedActivePeriod = null;
    }
  }
  onRangeChange(range) {
    this.toggle();
    this.focusInput();
    if (!range) {
      this.nativeValue = "";
    }
    this.value = range;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = value ? this.computedValue : "";
  }
  get computedMobile() {
    return this.isMobile && !!this.mobileCalendar;
  }
  get calendarIcon() {
    return this.options.icon;
  }
  get computedMask() {
    return this.activePeriod ? MASKITO_DEFAULT_OPTIONS : this.calculateMask(this.dateFormat.mode, this.dateFormat.separator, this.min, this.max, this.minLength, this.maxLength);
  }
  get activePeriod() {
    return this.selectedActivePeriod ?? (this.items.find((item) => tuiNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) && a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
  }
  get showValueTemplate() {
    return tuiIsPresent(this.value) && !this.focused;
  }
  get computedContent() {
    return this.activePeriod?.content || this.computedValue;
  }
  get innerPseudoFocused() {
    if (this.pseudoFocus === false) {
      return false;
    }
    if (this.open || this.computedFocused) {
      return true;
    }
    return null;
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || "";
  }
  set nativeValue(value) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = value;
    }
  }
  getComputedRangeFiller(dateFiller) {
    return this.activePeriod ? "" : this.getDateRangeFiller(dateFiller);
  }
  onIconClick() {
    if (this.isMobile && this.interactive) {
      this.onOpenChange(true);
    }
  }
  onOpenChange(open) {
    this.open = open;
  }
  onActiveZone(focused) {
    this.updateFocused(focused);
    if (!focused && !this.itemSelected && (this.nativeValue.length === DATE_FILLER_LENGTH || this.nativeValue.length === DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length)) {
      this.value = TuiDayRange.normalizeParse(this.nativeValue, this.dateFormat.mode);
    }
  }
  valueIdenticalComparator(oldValue, newValue) {
    return tuiNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
  }
  get itemSelected() {
    return this.items.findIndex((item) => String(item) === this.nativeValue) !== -1;
  }
  calculateMask(dateFormat, dateSeparator, min, max, minLength, maxLength) {
    return maskitoDateRangeOptionsGenerator({
      dateSeparator,
      mode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
      min: (min || TUI_FIRST_DAY).toLocalNativeDate(),
      max: (max || TUI_LAST_DAY).toLocalNativeDate(),
      minLength: minLength || {},
      maxLength: maxLength || {}
    });
  }
  toggle() {
    this.open = !this.open;
  }
  focusInput(preventScroll = false) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll
      });
    }
  }
  getDateRangeFiller(dateFiller) {
    return `${dateFiller}${RANGE_SEPARATOR_CHAR}${dateFiller}`;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateRangeComponent_BaseFactory;
      return function TuiInputDateRangeComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateRangeComponent_BaseFactory || (ɵTuiInputDateRangeComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateRangeComponent)))(__ngFactoryType__ || _TuiInputDateRangeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputDateRangeComponent,
      selectors: [["tui-input-date-range"]],
      viewQuery: function TuiInputDateRangeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputDateRangeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputDateRangeComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        defaultViewedMonth: "defaultViewedMonth",
        items: "items",
        min: "min",
        max: "max",
        minLength: "minLength",
        maxLength: "maxLength"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputDateRangeComponent), tuiAsControl(_TuiInputDateRangeComponent), tuiAsControl2(_TuiInputDateRangeComponent), tuiDateStreamWithTransformer(TUI_DATE_RANGE_VALUE_TRANSFORMER), tuiAsDataListHost(_TuiInputDateRangeComponent), TUI_MOBILE_CALENDAR_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c112,
      decls: 7,
      vars: 6,
      consts: [["iconContent", ""], ["dropdown", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiActiveZoneChange", "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", "class", "t-textfield", 3, "disabled", "invalid", "maskito", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value", "valueChange", 4, "tuiLet"], ["automation-id", "tui-input-date-range__textfield", "tuiValueAccessor", "", 1, "t-textfield", 3, "valueChange", "disabled", "invalid", "maskito", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value"], ["ngProjectAs", "tuiContent", "class", "t-value", 5, ["tuiContent"], 4, "ngIf"], ["ngProjectAs", "tuiContent", 5, ["tuiContent"], 1, "t-value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-input-date-range__icon", "tuiAppearance", "icon", 3, "t-icon_small", "t-icon", "icon", "click", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-input-date-range__icon", "tuiAppearance", "icon", 3, "click", "icon"], [3, "itemChange", "valueChange", "defaultViewedMonth", "disabledItemHandler", "items", "markerHandler", "max", "maxLength", "min", "minLength", "value", "item"]],
      template: function TuiInputDateRangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c013);
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("tuiActiveZoneChange", function TuiInputDateRangeComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          })("tuiDropdownOpenChange", function TuiInputDateRangeComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵtemplate(1, TuiInputDateRangeComponent_tui_primitive_textfield_1_Template, 4, 12, "tui-primitive-textfield", 3);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, TuiInputDateRangeComponent_ng_template_3_Template, 1, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiInputDateRangeComponent_ng_template_5_Template, 1, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const dropdown_r10 = ɵɵreference(6);
          ɵɵproperty("tuiDropdown", dropdown_r10)("tuiDropdownEnabled", ctx.interactive)("tuiDropdownOpen", ctx.open && ctx.interactive);
          ɵɵadvance();
          ɵɵproperty("tuiLet", ɵɵpipeBind1(2, 4, ctx.dateFiller$));
        }
      },
      dependencies: [NgIf, MaskitoDirective, TuiLet, PolymorpheusOutlet, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconDirective, TuiTextfieldFillerDirective, TuiCalendarRange, TuiValueAccessorDirective, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownDirective, TuiDropdownOpen, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-value[_ngcontent-%COMP%]{display:flex;inline-size:100%;align-items:center}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputDateRangeComponent.prototype, "calculateMask", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateRangeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-date-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputDateRangeComponent), tuiAsControl(TuiInputDateRangeComponent), tuiAsControl2(TuiInputDateRangeComponent), tuiDateStreamWithTransformer(TUI_DATE_RANGE_VALUE_TRANSFORMER), tuiAsDataListHost(TuiInputDateRangeComponent), TUI_MOBILE_CALENDAR_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "(click)": "onClick()"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive"
    [tuiDropdownOpen]="open && interactive"
    (tuiActiveZoneChange)="onActiveZone($event)"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-primitive-textfield
        *tuiLet="dateFiller$ | async as dateFiller"
        automation-id="tui-input-date-range__textfield"
        tuiValueAccessor
        class="t-textfield"
        [disabled]="computedDisabled"
        [invalid]="computedInvalid"
        [maskito]="computedMask"
        [nativeId]="nativeId"
        [pseudoActive]="pseudoActive"
        [pseudoFocus]="innerPseudoFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldFiller]="getComputedRangeFiller(dateFiller || '')"
        [tuiTextfieldIcon]="calendarIcon && iconContent"
        [value]="computedValue"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />

        <div
            *ngIf="showValueTemplate"
            ngProjectAs="tuiContent"
            class="t-value"
        >
            <ng-container *polymorpheusOutlet="computedContent as text; context: {$implicit: value}">
                {{ text }}
            </ng-container>
        </div>
    </tui-primitive-textfield>

    <ng-template #iconContent>
        <tui-icon
            *polymorpheusOutlet="calendarIcon as src; context: {$implicit: size}"
            automation-id="tui-input-date-range__icon"
            tuiAppearance="icon"
            [class.t-icon_small]="size === 's'"
            [class.t-icon]="!computedDisabled"
            [icon]="src.toString()"
            (click)="onIconClick()"
        />
    </ng-template>

    <ng-template #dropdown>
        <tui-calendar-range
            [defaultViewedMonth]="defaultViewedMonth"
            [disabledItemHandler]="disabledItemHandler"
            [items]="items"
            [markerHandler]="markerHandler"
            [max]="max"
            [maxLength]="maxLength"
            [min]="min"
            [minLength]="minLength"
            [value]="value"
            [(item)]="selectedActivePeriod"
            (valueChange)="onRangeChange($event)"
        />
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-icon{pointer-events:auto}.t-icon_small{border-width:.25rem}.t-value{display:flex;inline-size:100%;align-items:center}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    defaultViewedMonth: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    calculateMask: []
  });
})();
var TuiInputDateRangeDirective = class _TuiInputDateRangeDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.computedValue;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  process(input) {
    input.inputMode = "numeric";
  }
  ngDoCheck() {
    if (this.host.nativeFocusableElement) {
      this.host.nativeFocusableElement.placeholder = this.host.computedExampleText;
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateRangeDirective_BaseFactory;
      return function TuiInputDateRangeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateRangeDirective_BaseFactory || (ɵTuiInputDateRangeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateRangeDirective)))(__ngFactoryType__ || _TuiInputDateRangeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDateRangeDirective,
      selectors: [["tui-input-date-range"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputDateRangeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateRangeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-date-range",
      providers: [tuiAsTextfieldHost(TuiInputDateRangeDirective)]
    }]
  }], null, null);
})();
var TuiInputDateRangeModule = class _TuiInputDateRangeModule {
  static {
    this.ɵfac = function TuiInputDateRangeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDateRangeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputDateRangeModule,
      declarations: [TuiInputDateRangeComponent, TuiInputDateRangeDirective],
      imports: [CommonModule, MaskitoDirective, TuiLet, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiCalendarRange, TuiValueAccessorModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputDateRangeComponent, TuiInputDateRangeDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiCalendarRange, TuiValueAccessorModule, TuiIcon, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateRangeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, TuiLet, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiCalendarRange, TuiValueAccessorModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, ...TuiDropdown],
      declarations: [TuiInputDateRangeComponent, TuiInputDateRangeDirective],
      exports: [TuiInputDateRangeComponent, TuiInputDateRangeDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-date-time.mjs
var _c014 = ["*", [["input"]]];
var _c113 = ["*", "input"];
var _c29 = (a0) => ({
  $implicit: a0
});
function TuiInputDateTimeComponent_ng_template_5_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 7);
  }
  if (rf & 2) {
    const src_r2 = ctx.polymorpheusOutlet;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s")("t-icon", !ctx_r2.computedDisabled);
    ɵɵproperty("icon", src_r2.toString());
  }
}
function TuiInputDateTimeComponent_ng_template_5_input_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 8);
  }
}
function TuiInputDateTimeComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputDateTimeComponent_ng_template_5_tui_icon_0_Template, 1, 5, "tui-icon", 5)(1, TuiInputDateTimeComponent_ng_template_5_input_1_Template, 1, 0, "input", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.calendarIcon)("polymorpheusOutletContext", ɵɵpureFunction1(3, _c29, ctx_r2.size));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showNativePicker);
  }
}
function TuiInputDateTimeComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 9);
    ɵɵlistener("dayClick", function TuiInputDateTimeComponent_ng_template_7_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    })("monthChange", function TuiInputDateTimeComponent_ng_template_7_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthChange($event));
    })("mousedown.prevent.silent", function TuiInputDateTimeComponent_ng_template_7_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.disabledItemHandler)("max", ctx_r2.calendarMaxDay)("min", ctx_r2.calendarMinDay)("month", ctx_r2.computedActiveYearMonth)("value", ctx_r2.calendarValue);
  }
}
var TuiInputDateTimeDirective = class _TuiInputDateTimeDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.computedValue;
  }
  get rawValue() {
    return this.host.value ?? [null, null];
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  writeValue(value) {
    this.host.writeValue(value);
  }
  process(input) {
    input.inputMode = "numeric";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateTimeDirective_BaseFactory;
      return function TuiInputDateTimeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateTimeDirective_BaseFactory || (ɵTuiInputDateTimeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateTimeDirective)))(__ngFactoryType__ || _TuiInputDateTimeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputDateTimeDirective,
      selectors: [["tui-input-date-time"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputDateTimeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateTimeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-date-time",
      providers: [tuiAsTextfieldHost(TuiInputDateTimeDirective)]
    }]
  }], null, null);
})();
var TuiNativeDateTimeDirective = class _TuiNativeDateTimeDirective {
  constructor() {
    this.host = inject(TuiInputDateTimeDirective);
  }
  get value() {
    if (!this.host.rawValue[0] || !this.host.rawValue[1]) {
      return "";
    }
    return `${this.host.rawValue[0]?.toString("YMD", "-")}T${this.host.rawValue[1]?.toString("HH:MM")}`;
  }
  onChange(value) {
    if (!value) {
      this.host.writeValue([null, null]);
      return;
    }
    const date = new Date(value);
    const day = TuiDay.fromLocalNativeDate(date);
    const time = TuiTime.fromLocalNativeDate(date);
    this.host.writeValue([day, time]);
  }
  static {
    this.ɵfac = function TuiNativeDateTimeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeDateTimeDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeDateTimeDirective,
      selectors: [["input", "tuiDateTime", ""]],
      hostAttrs: ["type", "datetime-local"],
      hostVars: 2,
      hostBindings: function TuiNativeDateTimeDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change.stop", function TuiNativeDateTimeDirective_change_stop_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input.stop", function TuiNativeDateTimeDirective_input_stop_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("click.stop.silent", function TuiNativeDateTimeDirective_click_stop_silent_HostBindingHandler() {
            return 0;
          })("mousedown.stop.silent", function TuiNativeDateTimeDirective_mousedown_stop_silent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", -1)("value", ctx.value);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeDateTimeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "input[tuiDateTime]",
      host: {
        type: "datetime-local",
        "[tabIndex]": "-1",
        "[value]": "value",
        "(change.stop)": "onChange($event.target.value)",
        "(input.stop)": "onChange($event.target.value)",
        "(click.stop.silent)": "0",
        "(mousedown.stop.silent)": "0"
      }
    }]
  }], null, null);
})();
var DATE_TIME_SEPARATOR = ", ";
var TuiInputDateTimeComponent = class _TuiInputDateTimeComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.month = null;
    this.timeMode$ = new BehaviorSubject("HH:MM");
    this.timeTexts$ = inject(TUI_TIME_TEXTS);
    this.dateTexts$ = inject(TUI_DATE_TEXTS);
    this.valueTransformer = inject(TUI_DATE_TIME_VALUE_TRANSFORMER, {
      optional: true
    });
    this.filler$ = combineLatest([this.dateTexts$.pipe(map((dateTexts) => changeDateSeparator(dateTexts[this.dateFormat.mode], this.dateFormat.separator))), this.timeTexts$, this.timeMode$]).pipe(map(([dateFiller, timeTexts, timeMode]) => this.getDateTimeString(dateFiller, timeTexts[timeMode])));
    this.dateFormat = TUI_DEFAULT_DATE_FORMAT;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.dateFormat$ = inject(TUI_DATE_FORMAT).pipe(tuiWatch(this.cdr), takeUntilDestroyed()).subscribe((format) => {
      this.dateFormat = format;
    });
    this.min = this.options.min;
    this.max = this.options.max;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.defaultActiveYearMonth = TuiMonth.currentLocal();
    this.open = false;
  }
  set timeMode(value) {
    this.timeMode$.next(value);
  }
  get timeMode() {
    return this.timeMode$.value;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get computedValue() {
    const {
      value,
      nativeValue,
      timeMode
    } = this;
    const [date, time] = value;
    const hasTimeInputChars = nativeValue.length > DATE_FILLER_LENGTH;
    if (!date || !time && hasTimeInputChars) {
      return nativeValue;
    }
    return this.getDateTimeString(date, time, timeMode);
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = this.value && (this.value[0] || this.value[1]) ? this.computedValue : "";
  }
  onValueChange(value) {
    if (!value) {
      this.onOpenChange(true);
    }
    if (value.length < DATE_FILLER_LENGTH) {
      this.value = [null, null];
      return;
    }
    const [date = "", time] = value.split(DATE_TIME_SEPARATOR);
    const parsedDate = TuiDay.normalizeParse(date, this.dateFormat.mode);
    const parsedTime = time && time.length === this.timeMode.length ? TuiTime.fromString(time) : null;
    this.open = false;
    this.value = [parsedDate, parsedTime];
  }
  get size() {
    return this.textfieldSize.size;
  }
  get computedMin() {
    return this.toTuiDay(this.min, this.options.min);
  }
  get computedMax() {
    return this.toTuiDay(this.max, this.options.max);
  }
  get fillerLength() {
    return DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length + this.timeMode.length;
  }
  get maskOptions() {
    return this.calculateMask(this.computedMin, this.computedMax, this.timeMode, this.dateFormat.mode, this.dateFormat.separator);
  }
  get calendarIcon() {
    return this.options.icon;
  }
  get showNativePicker() {
    return this.nativePicker && this.timeMode === "HH:MM";
  }
  get calendarValue() {
    return this.value[0];
  }
  get calendarMinDay() {
    const min = this.computedMin;
    return Array.isArray(min) ? min[0] : min;
  }
  get calendarMaxDay() {
    const max = this.computedMax;
    return Array.isArray(max) ? max[0] : max;
  }
  get computedActiveYearMonth() {
    const {
      computedMin,
      computedMax
    } = this;
    return this.month || this.value[0] || tuiDateClamp(this.defaultActiveYearMonth, Array.isArray(computedMin) ? computedMin[0] : computedMin, Array.isArray(computedMax) ? computedMax[0] : computedMax);
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || "";
  }
  set nativeValue(value) {
    if (!this.nativeFocusableElement) {
      return;
    }
    this.nativeFocusableElement.value = value;
  }
  onClick() {
    this.open = !this.open;
  }
  onDayClick(day) {
    const modifiedTime = this.value[1] && this.clampTime(this.value[1], day);
    const newCaretIndex = DATE_FILLER_LENGTH + DATE_TIME_SEPARATOR.length;
    this.value = [day, modifiedTime];
    this.updateNativeValue(day);
    this.nativeFocusableElement?.setSelectionRange(newCaretIndex, newCaretIndex);
    this.open = false;
  }
  onMonthChange(month) {
    this.month = month;
  }
  onOpenChange(open) {
    this.open = open;
  }
  onFocused(focused) {
    this.updateFocused(focused);
    if (focused) {
      return;
    }
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.nativeValue = this.trimTrailingSeparator(this.nativeValue);
    });
    if (this.value[0] === null || this.value[1] !== null || this.nativeValue.length === this.fillerLength || this.timeMode === "HH:MM") {
      return;
    }
    const [, time] = this.nativeValue.split(DATE_TIME_SEPARATOR);
    if (!time) {
      return;
    }
    const parsedTime = TuiTime.fromString(time);
    this.value = [this.value[0], parsedTime];
  }
  getFallbackValue() {
    return [null, null];
  }
  valueIdenticalComparator(oldValue, newValue) {
    return tuiNullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) && tuiNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b));
  }
  get nativePicker() {
    return this.options.nativePicker && this.isMobile;
  }
  calculateMask(min, max, timeMode, dateFormat, dateSeparator) {
    return maskitoDateTimeOptionsGenerator({
      timeMode,
      dateSeparator,
      dateMode: TUI_DATE_MODE_MASKITO_ADAPTER[dateFormat],
      min: this.toNativeDate(min),
      max: this.toNativeDate(max)
    });
  }
  getDateTimeString(date, time, timeMode = "HH:MM") {
    const dateString = date instanceof TuiDay ? date.toString(this.dateFormat.mode, this.dateFormat.separator) : date;
    const timeString = time instanceof TuiTime ? time.toString(timeMode) : time || "";
    return timeString ? `${dateString}${DATE_TIME_SEPARATOR}${timeString}` : dateString;
  }
  updateNativeValue(day) {
    const time = this.nativeValue.split(DATE_TIME_SEPARATOR)[1] || "";
    this.nativeValue = this.getDateTimeString(day, time);
  }
  clampTime(time, day) {
    const {
      computedMin,
      computedMax
    } = this;
    const ms = time.toAbsoluteMilliseconds();
    const min = Array.isArray(computedMin) && day.daySame(this.calendarMinDay) ? computedMin[1].toAbsoluteMilliseconds() : -Infinity;
    const max = Array.isArray(computedMax) && day.daySame(this.calendarMaxDay) ? computedMax[1].toAbsoluteMilliseconds() : Infinity;
    return TuiTime.fromAbsoluteMilliseconds(tuiClamp(ms, min, max));
  }
  trimTrailingSeparator(value) {
    return value.replace(new RegExp(`(\\${this.dateFormat.separator}|${DATE_TIME_SEPARATOR}|\\.)$`), "");
  }
  toNativeDate(value) {
    if (!Array.isArray(value)) {
      return value.toLocalNativeDate();
    }
    const [{
      year,
      month,
      day
    }, {
      hours,
      minutes,
      seconds,
      ms
    }] = value;
    return new Date(year, month, day, hours, minutes, seconds, ms);
  }
  toTuiDay(value, fallback) {
    if (!value) {
      return fallback;
    }
    if (!Array.isArray(value)) {
      return value;
    }
    const [tuiDay, tuiTime] = value;
    if (!tuiDay) {
      return fallback;
    }
    if (!tuiTime) {
      return tuiDay;
    }
    return value;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputDateTimeComponent_BaseFactory;
      return function TuiInputDateTimeComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputDateTimeComponent_BaseFactory || (ɵTuiInputDateTimeComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputDateTimeComponent)))(__ngFactoryType__ || _TuiInputDateTimeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputDateTimeComponent,
      selectors: [["tui-input-date-time"]],
      viewQuery: function TuiInputDateTimeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputDateTimeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputDateTimeComponent_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        defaultActiveYearMonth: "defaultActiveYearMonth",
        timeMode: "timeMode"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputDateTimeComponent), tuiAsControl2(_TuiInputDateTimeComponent), tuiDateStreamWithTransformer(TUI_DATE_TIME_VALUE_TRANSFORMER)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c113,
      decls: 9,
      vars: 16,
      consts: [["iconContent", ""], ["dropdown", "polymorpheus"], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-input-date-time__textfield", "tuiValueAccessor", "", 1, "t-textfield", 3, "focusedChange", "valueChange", "disabled", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value"], [3, "polymorpheus"], ["tuiAppearance", "icon", 3, "t-icon_small", "t-icon", "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiDateTime", "", "class", "t-native-input", 4, "ngIf"], ["tuiAppearance", "icon", 3, "icon"], ["tuiDateTime", "", 1, "t-native-input"], ["automation-id", "tui-input-date-time__calendar", 3, "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "max", "min", "month", "value"]],
      template: function TuiInputDateTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c014);
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("tuiDropdownOpenChange", function TuiInputDateTimeComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 3);
          ɵɵpipe(2, "async");
          ɵɵlistener("focusedChange", function TuiInputDateTimeComponent_Template_tui_primitive_textfield_focusedChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          })("valueChange", function TuiInputDateTimeComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(3);
          ɵɵprojection(4, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiInputDateTimeComponent_ng_template_5_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, TuiInputDateTimeComponent_ng_template_7_Template, 1, 5, "ng-template", 4, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const iconContent_r5 = ɵɵreference(6);
          const dropdown_r6 = ɵɵreference(8);
          ɵɵproperty("tuiDropdown", dropdown_r6)("tuiDropdownEnabled", ctx.interactive && !ctx.showNativePicker)("tuiDropdownOpen", ctx.open && ctx.interactive);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("invalid", ctx.computedInvalid)("maskito", ctx.maskOptions)("nativeId", ctx.nativeId)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldFiller", ɵɵpipeBind1(2, 14, ctx.filler$) || "")("tuiTextfieldIcon", ctx.calendarIcon && iconContent_r5)("value", ctx.computedValue);
          ɵɵadvance(6);
          ɵɵproperty("polymorpheus", ctx.type);
        }
      },
      dependencies: [NgIf, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiValueAccessorDirective, TuiTextfieldIconDirective, TuiTextfieldFillerDirective, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownDirective, TuiDropdownOpen, TuiNativeDateTimeDirective, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-button[_ngcontent-%COMP%]{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-native-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputDateTimeComponent.prototype, "calculateMask", null);
__decorate([tuiPure], TuiInputDateTimeComponent.prototype, "getDateTimeString", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateTimeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-date-time",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputDateTimeComponent), tuiAsControl2(TuiInputDateTimeComponent), tuiDateStreamWithTransformer(TUI_DATE_TIME_VALUE_TRANSFORMER)],
      host: {
        "[attr.data-size]": "size",
        "(click)": "onClick()"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive && !showNativePicker"
    [tuiDropdownOpen]="open && interactive"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-primitive-textfield
        automation-id="tui-input-date-time__textfield"
        tuiValueAccessor
        class="t-textfield"
        [disabled]="computedDisabled"
        [invalid]="computedInvalid"
        [maskito]="maskOptions"
        [nativeId]="nativeId"
        [pseudoFocus]="pseudoFocus"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldFiller]="(filler$ | async) || ''"
        [tuiTextfieldIcon]="calendarIcon && iconContent"
        [value]="computedValue"
        (focusedChange)="onFocused($event)"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-primitive-textfield>

    <ng-template #iconContent>
        <tui-icon
            *polymorpheusOutlet="calendarIcon as src; context: {$implicit: size}"
            tuiAppearance="icon"
            [class.t-icon_small]="size === 's'"
            [class.t-icon]="!computedDisabled"
            [icon]="src.toString()"
        />
        <input
            *ngIf="showNativePicker"
            tuiDateTime
            class="t-native-input"
        />
    </ng-template>

    <ng-template
        #dropdown="polymorpheus"
        [polymorpheus]="type"
    >
        <tui-calendar
            automation-id="tui-input-date-time__calendar"
            [disabledItemHandler]="disabledItemHandler"
            [max]="calendarMaxDay"
            [min]="calendarMinDay"
            [month]="computedActiveYearMonth"
            [value]="calendarValue"
            (dayClick)="onDayClick($event)"
            (monthChange)="onMonthChange($event)"
            (mousedown.prevent.silent)="(0)"
        />
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-icon{pointer-events:auto}.t-icon_small{border-width:.25rem}.t-button{display:flex;block-size:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-border-normal)}.t-native-input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    defaultActiveYearMonth: [{
      type: Input
    }],
    timeMode: [{
      type: Input
    }],
    calculateMask: [],
    getDateTimeString: []
  });
})();
var TuiInputDateTimeModule = class _TuiInputDateTimeModule {
  static {
    this.ɵfac = function TuiInputDateTimeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputDateTimeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputDateTimeModule,
      declarations: [TuiInputDateTimeComponent, TuiInputDateTimeDirective, TuiNativeDateTimeDirective],
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputDateTimeComponent, TuiInputDateTimeDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCalendar, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, TuiIcon, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputDateTimeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, PolymorpheusOutlet, PolymorpheusTemplate, TuiCalendar, TuiLink, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, ...TuiDropdown],
      declarations: [TuiInputDateTimeComponent, TuiInputDateTimeDirective, TuiNativeDateTimeDirective],
      exports: [TuiInputDateTimeComponent, TuiInputDateTimeDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-month.mjs
var _c015 = ["*", [["input"]]];
var _c114 = ["*", "input"];
var _c210 = () => ({
  standalone: true
});
function TuiInputMonthComponent_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 4);
    ɵɵlistener("click.stop.silent", function TuiInputMonthComponent_input_6_Template_input_click_stop_silent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    })("mousedown.stop.silent", function TuiInputMonthComponent_input_6_Template_input_mousedown_stop_silent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    })("ngModelChange", function TuiInputMonthComponent_input_6_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onNativeChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r2.nativePickerMax)("min", ctx_r2.nativePickerMin)("ngModel", ctx_r2.nativeValue)("ngModelOptions", ɵɵpureFunction0(4, _c210));
  }
}
function TuiInputMonthComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-month", 5);
    ɵɵlistener("monthClick", function TuiInputMonthComponent_ng_template_7_Template_tui_calendar_month_monthClick_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthClick($event));
    })("mousedown.prevent.silent", function TuiInputMonthComponent_ng_template_7_Template_tui_calendar_month_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    })("yearChange", function TuiInputMonthComponent_ng_template_7_Template_tui_calendar_month_yearChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.activeYear = $event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.disabledItemHandler)("max", ctx_r2.computedMax)("min", ctx_r2.computedMin)("value", ctx_r2.value)("year", ctx_r2.computedDefaultActiveYear);
  }
}
var TuiInputMonthComponent = class _TuiInputMonthComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.formatter = inject(TUI_MONTH_FORMATTER);
    this.min = this.options.min;
    this.max = this.options.max;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.defaultActiveYear = TuiDay.currentLocal();
    this.open = false;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement || null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  onValueChange(value) {
    if (value) {
      return;
    }
    this.value = null;
    this.onOpenChange(!this.nativePicker);
  }
  onMonthClick(month) {
    this.value = month;
    this.close();
  }
  setDisabledState() {
    super.setDisabledState();
    this.close();
  }
  get size() {
    return this.textfieldSize.size;
  }
  get computedMin() {
    return this.min ?? this.options.min;
  }
  get computedMax() {
    return this.max ?? this.options.max;
  }
  get computedDefaultActiveYear() {
    return this.activeYear || this.value || tuiDateClamp(this.defaultActiveYear, this.computedMin, this.computedMax);
  }
  get calendarIcon() {
    return this.options.icon;
  }
  get nativePicker() {
    return this.isMobile && this.options.nativePicker;
  }
  get nativePickerMin() {
    return this.computedMin.toJSON();
  }
  get nativePickerMax() {
    return this.computedMax.toJSON();
  }
  get nativeValue() {
    return this.value?.toJSON() || "";
  }
  onNativeChange(value) {
    const [year = 0, month = 0] = value.split("-").map(Number);
    this.value = value ? tuiDateClamp(new TuiMonth(year, month - 1), this.computedMin, this.computedMax) : null;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  onOpenChange(open) {
    if (open && this.value) {
      this.activeYear = this.value;
    }
    this.open = open;
  }
  close() {
    this.open = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputMonthComponent_BaseFactory;
      return function TuiInputMonthComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputMonthComponent_BaseFactory || (ɵTuiInputMonthComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputMonthComponent)))(__ngFactoryType__ || _TuiInputMonthComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputMonthComponent,
      selectors: [["tui-input-month"]],
      viewQuery: function TuiInputMonthComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputMonthComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        defaultActiveYear: "defaultActiveYear"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputMonthComponent), tuiAsControl2(_TuiInputMonthComponent), TUI_MONTH_FORMATTER_PROVIDER, TuiMonthPipe]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c114,
      decls: 9,
      vars: 18,
      consts: [["dropdown", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], [1, "t-textfield", 3, "focusedChange", "valueChange", "disabled", "editable", "invalid", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], ["type", "month", "class", "t-mobile", 3, "max", "min", "ngModel", "ngModelOptions", "click.stop.silent", "mousedown.stop.silent", "ngModelChange", 4, "ngIf"], ["type", "month", 1, "t-mobile", 3, "click.stop.silent", "mousedown.stop.silent", "ngModelChange", "max", "min", "ngModel", "ngModelOptions"], [3, "monthClick", "mousedown.prevent.silent", "yearChange", "disabledItemHandler", "max", "min", "value", "year"]],
      template: function TuiInputMonthComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c015);
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("tuiDropdownOpenChange", function TuiInputMonthComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 2);
          ɵɵpipe(2, "tuiMapper");
          ɵɵpipe(3, "async");
          ɵɵlistener("focusedChange", function TuiInputMonthComponent_Template_tui_primitive_textfield_focusedChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          })("valueChange", function TuiInputMonthComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(4);
          ɵɵprojection(5, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵtemplate(6, TuiInputMonthComponent_input_6_Template, 1, 5, "input", 3);
          ɵɵelementEnd();
          ɵɵtemplate(7, TuiInputMonthComponent_ng_template_7_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const dropdown_r5 = ɵɵreference(8);
          ɵɵproperty("tuiDropdown", dropdown_r5)("tuiDropdownEnabled", ctx.interactive && !ctx.nativePicker)("tuiDropdownOpen", ctx.open && ctx.interactive);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("editable", false)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", ctx.calendarIcon)("value", ɵɵpipeBind1(3, 16, ɵɵpipeBind2(2, 13, ctx.value, ctx.formatter)) || "");
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.nativePicker);
        }
      },
      dependencies: [NgIf, TuiCalendarMonth, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconDirective, DefaultValueAccessor, NgControlStatus, NgModel, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownOpen, AsyncPipe, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-mobile[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;border:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-month",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputMonthComponent), tuiAsControl2(TuiInputMonthComponent), TUI_MONTH_FORMATTER_PROVIDER, TuiMonthPipe],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive && !nativePicker"
    [tuiDropdownOpen]="open && interactive"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-primitive-textfield
        class="t-textfield"
        [disabled]="computedDisabled"
        [editable]="false"
        [invalid]="computedInvalid"
        [nativeId]="nativeId"
        [pseudoFocus]="pseudoFocus"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldIcon]="calendarIcon"
        [value]="(value | tuiMapper: formatter | async) || ''"
        (focusedChange)="onFocused($event)"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
        <input
            *ngIf="nativePicker"
            type="month"
            class="t-mobile"
            [max]="nativePickerMax"
            [min]="nativePickerMin"
            [ngModel]="nativeValue"
            [ngModelOptions]="{standalone: true}"
            (click.stop.silent)="(0)"
            (mousedown.stop.silent)="(0)"
            (ngModelChange)="onNativeChange($event)"
        />
    </tui-primitive-textfield>

    <ng-template #dropdown>
        <tui-calendar-month
            [disabledItemHandler]="disabledItemHandler"
            [max]="computedMax"
            [min]="computedMin"
            [value]="value"
            [year]="computedDefaultActiveYear"
            (monthClick)="onMonthClick($event)"
            (mousedown.prevent.silent)="(0)"
            (yearChange)="activeYear = $event"
        />
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-mobile{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;border:0}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    defaultActiveYear: [{
      type: Input
    }]
  });
})();
var TuiInputMonthDirective = class _TuiInputMonthDirective extends AbstractTuiTextfieldHost {
  constructor() {
    super(...arguments);
    this.value$ = new Subject();
    this.localizedValue = "";
    this.$ = this.value$.pipe(distinctUntilChanged(), switchMap(inject(TUI_MONTH_FORMATTER)), takeUntilDestroyed()).subscribe((localizedValue) => {
      this.localizedValue = localizedValue;
    });
  }
  get readOnly() {
    return true;
  }
  get value() {
    return this.localizedValue;
  }
  ngDoCheck() {
    this.value$.next(this.host.value);
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputMonthDirective_BaseFactory;
      return function TuiInputMonthDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputMonthDirective_BaseFactory || (ɵTuiInputMonthDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputMonthDirective)))(__ngFactoryType__ || _TuiInputMonthDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputMonthDirective,
      selectors: [["tui-input-month"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputMonthDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-month",
      providers: [tuiAsTextfieldHost(TuiInputMonthDirective)]
    }]
  }], null, null);
})();
var TuiInputMonthModule = class _TuiInputMonthModule {
  static {
    this.ɵfac = function TuiInputMonthModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputMonthModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputMonthModule,
      declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiMapperPipe, TuiTextfieldControllerModule, FormsModule, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, FormsModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiMapperPipe, TuiTextfieldControllerModule, FormsModule, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown],
      declarations: [TuiInputMonthComponent, TuiInputMonthDirective],
      exports: [TuiInputMonthComponent, TuiInputMonthDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-month-range.mjs
var _c016 = ["*", [["input"]]];
var _c115 = ["*", "input"];
function TuiInputMonthRangeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-month", 3);
    ɵɵlistener("monthClick", function TuiInputMonthRangeComponent_ng_template_8_Template_tui_calendar_month_monthClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthClick($event));
    })("mousedown.prevent.silent", function TuiInputMonthRangeComponent_ng_template_8_Template_tui_calendar_month_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.disabledItemHandler)("max", ctx_r2.max)("maxLength", ctx_r2.maxLength)("min", ctx_r2.min)("minLength", ctx_r2.minLength)("value", ctx_r2.value)("year", ctx_r2.computedDefaultActiveYear);
  }
}
var TuiInputMonthRangeComponent = class _TuiInputMonthRangeComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.formatter = inject(TUI_MONTH_FORMATTER);
    this.min = this.options.min;
    this.max = this.options.max;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.minLength = null;
    this.maxLength = null;
    this.defaultActiveYear = TuiDay.currentLocal();
    this.open = false;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  setDisabledState() {
    super.setDisabledState();
    this.close();
  }
  computeValue(from2, to) {
    const formattedTo = from2 === to && this.focused && !this.readOnly ? "" : to;
    return `${from2} ${CHAR_EN_DASH} ${formattedTo}`;
  }
  onValueChange(value) {
    if (value) {
      return;
    }
    this.value = null;
    this.onOpenChange(true);
  }
  onMonthClick(month) {
    if (!this.value?.isSingleMonth) {
      this.writeValue(new TuiMonthRange(month, month));
      return;
    }
    this.value = TuiMonthRange.sort(this.value.from, month);
    this.close();
  }
  get size() {
    return this.textfieldSize.size;
  }
  get computedDefaultActiveYear() {
    return this.value?.from || tuiDateClamp(this.defaultActiveYear, this.min, this.max);
  }
  get calendarIcon() {
    return this.options.icon;
  }
  onOpenChange(open) {
    this.open = open;
  }
  onActiveZone(focused) {
    this.updateFocused(focused);
    if (focused) {
      return;
    }
    if (this.value?.isSingleMonth) {
      this.value = new TuiMonthRange(this.value.from, this.value.from);
    }
  }
  close() {
    this.open = false;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputMonthRangeComponent_BaseFactory;
      return function TuiInputMonthRangeComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputMonthRangeComponent_BaseFactory || (ɵTuiInputMonthRangeComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputMonthRangeComponent)))(__ngFactoryType__ || _TuiInputMonthRangeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputMonthRangeComponent,
      selectors: [["tui-input-month-range"]],
      viewQuery: function TuiInputMonthRangeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputMonthRangeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler",
        minLength: "minLength",
        maxLength: "maxLength",
        defaultActiveYear: "defaultActiveYear"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputMonthRangeComponent), tuiAsControl2(_TuiInputMonthRangeComponent), TUI_MONTH_FORMATTER_PROVIDER, TuiMonthPipe]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c115,
      decls: 10,
      vars: 22,
      consts: [["dropdown", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiActiveZoneChange", "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], [1, "t-textfield", 3, "valueChange", "disabled", "editable", "invalid", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], [3, "monthClick", "mousedown.prevent.silent", "disabledItemHandler", "max", "maxLength", "min", "minLength", "value", "year"]],
      template: function TuiInputMonthRangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c016);
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("tuiActiveZoneChange", function TuiInputMonthRangeComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          })("tuiDropdownOpenChange", function TuiInputMonthRangeComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 2);
          ɵɵpipe(2, "tuiMapper");
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "tuiMapper");
          ɵɵpipe(5, "async");
          ɵɵlistener("valueChange", function TuiInputMonthRangeComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(6);
          ɵɵprojection(7, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(8, TuiInputMonthRangeComponent_ng_template_8_Template, 1, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const dropdown_r4 = ɵɵreference(9);
          ɵɵproperty("tuiDropdown", dropdown_r4)("tuiDropdownEnabled", ctx.interactive)("tuiDropdownOpen", ctx.open && ctx.interactive);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("editable", false)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", ctx.calendarIcon)("value", ctx.value ? ctx.computeValue(ɵɵpipeBind1(3, 15, ɵɵpipeBind2(2, 12, ctx.value.from, ctx.formatter)), ɵɵpipeBind1(5, 20, ɵɵpipeBind2(4, 17, ctx.value.to, ctx.formatter))) : "");
        }
      },
      dependencies: [TuiCalendarMonth, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconDirective, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownOpen, AsyncPipe, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthRangeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-month-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputMonthRangeComponent), tuiAsControl2(TuiInputMonthRangeComponent), TUI_MONTH_FORMATTER_PROVIDER, TuiMonthPipe],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="interactive"
    [tuiDropdownOpen]="open && interactive"
    (tuiActiveZoneChange)="onActiveZone($event)"
    (tuiDropdownOpenChange)="onOpenChange($event)"
>
    <tui-primitive-textfield
        class="t-textfield"
        [disabled]="computedDisabled"
        [editable]="false"
        [invalid]="computedInvalid"
        [nativeId]="nativeId"
        [pseudoFocus]="pseudoFocus"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldIcon]="calendarIcon"
        [value]="
            value
                ? computeValue(value.from | tuiMapper: formatter | async, value.to | tuiMapper: formatter | async)
                : ''
        "
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-primitive-textfield>

    <ng-template #dropdown>
        <tui-calendar-month
            [disabledItemHandler]="disabledItemHandler"
            [max]="max"
            [maxLength]="maxLength"
            [min]="min"
            [minLength]="minLength"
            [value]="value"
            [year]="computedDefaultActiveYear"
            (monthClick)="onMonthClick($event)"
            (mousedown.prevent.silent)="(0)"
        />
    </ng-template>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    minLength: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    defaultActiveYear: [{
      type: Input
    }]
  });
})();
var TuiInputMonthRangeDirective = class _TuiInputMonthRangeDirective extends AbstractTuiTextfieldHost {
  constructor() {
    super(...arguments);
    this.value$ = new Subject();
    this.localizedValue = ["", ""];
    this.formatter = inject(TUI_MONTH_FORMATTER);
    this.$ = this.value$.pipe(distinctUntilChanged(), switchMap((value) => combineLatest([this.formatter(value?.from || null), this.formatter(value?.to || null)])), takeUntilDestroyed()).subscribe((localizedValue) => {
      this.localizedValue = localizedValue;
    });
  }
  get readOnly() {
    return true;
  }
  get value() {
    return this.localizedValue[0] ? this.host.computeValue(...this.localizedValue) : "";
  }
  ngDoCheck() {
    this.value$.next(this.host.value);
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputMonthRangeDirective_BaseFactory;
      return function TuiInputMonthRangeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputMonthRangeDirective_BaseFactory || (ɵTuiInputMonthRangeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputMonthRangeDirective)))(__ngFactoryType__ || _TuiInputMonthRangeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputMonthRangeDirective,
      selectors: [["tui-input-month-range"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputMonthRangeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthRangeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-month-range",
      providers: [tuiAsTextfieldHost(TuiInputMonthRangeDirective)]
    }]
  }], null, null);
})();
var TuiInputMonthRangeModule = class _TuiInputMonthRangeModule {
  static {
    this.ɵfac = function TuiInputMonthRangeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputMonthRangeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputMonthRangeModule,
      declarations: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective],
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiMapperPipe, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputMonthRangeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiCalendarMonth, TuiPrimitiveTextfieldModule, TuiMapperPipe, TuiTextfieldControllerModule, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown],
      declarations: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective],
      exports: [TuiInputMonthRangeComponent, TuiInputMonthRangeDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-password.mjs
var _c017 = ["*", [["input"]]];
var _c116 = ["*", "input"];
var _c211 = (a0) => ({
  $implicit: a0
});
function TuiInputPasswordComponent_ng_template_3_ng_container_0_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 7);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function TuiInputPasswordComponent_ng_template_3_ng_container_0_tui_icon_1_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.togglePasswordVisibility());
    })("mousedown.silent.prevent", function TuiInputPasswordComponent_ng_template_3_ng_container_0_tui_icon_1_Template_tui_icon_mousedown_silent_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    })("mouseup.silent.prevent", function TuiInputPasswordComponent_ng_template_3_ng_container_0_tui_icon_1_Template_tui_icon_mouseup_silent_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    const texts_r5 = ɵɵnextContext().ngIf;
    const hintContent_r6 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s");
    ɵɵproperty("icon", src_r4.toString())("tuiHint", texts_r5[0] && texts_r5[1] && hintContent_r6)("tuiHintAppearance", ɵɵpipeBind1(1, 6, ctx_r2.computedAppearance$) || "")("tuiHintDirection", (ctx_r2.hintOptions == null ? null : ctx_r2.hintOptions.direction) || "bottom-left");
  }
}
function TuiInputPasswordComponent_ng_template_3_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const texts_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r2.isPasswordHidden ? texts_r5[0] : texts_r5[1], " ");
  }
}
function TuiInputPasswordComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiInputPasswordComponent_ng_template_3_ng_container_0_tui_icon_1_Template, 2, 8, "tui-icon", 5)(2, TuiInputPasswordComponent_ng_template_3_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", 6, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c211, ctx_r2.size));
  }
}
function TuiInputPasswordComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputPasswordComponent_ng_template_3_ng_container_0_Template, 4, 4, "ng-container", 4);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.passwordTexts$));
  }
}
var TUI_INPUT_PASSWORD_DEFAULT_OPTIONS = {
  icons: {
    hide: () => "@tui.eye",
    show: () => "@tui.eye-off"
  }
};
var TUI_INPUT_PASSWORD_OPTIONS = tuiCreateToken(TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
function tuiInputPasswordOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_PASSWORD_OPTIONS, options, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
}
var TuiInputPasswordComponent = class _TuiInputPasswordComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.directive$ = this.hintOptions?.change$ || EMPTY;
    this.isPasswordHidden = true;
    this.computedAppearance$ = this.directive$.pipe(startWith(null), map(() => this.hintOptions?.appearance || ""), startWith(""));
    this.passwordTexts$ = inject(TUI_PASSWORD_TEXTS);
    this.options = inject(TUI_INPUT_PASSWORD_OPTIONS);
  }
  get nativeFocusableElement() {
    return this.computedDisabled || !this.textfield ? null : this.textfield.nativeFocusableElement;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  get inputType() {
    return this.isPasswordHidden || this.computedDisabled ? "password" : "text";
  }
  onValueChange(textValue) {
    this.value = textValue;
  }
  get size() {
    return this.textfieldSize.size;
  }
  get icon() {
    return this.isPasswordHidden ? this.options.icons.show : this.options.icons.hide;
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  togglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }
  getFallbackValue() {
    return "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPasswordComponent_BaseFactory;
      return function TuiInputPasswordComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputPasswordComponent_BaseFactory || (ɵTuiInputPasswordComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPasswordComponent)))(__ngFactoryType__ || _TuiInputPasswordComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputPasswordComponent,
      selectors: [["tui-input-password"]],
      viewQuery: function TuiInputPasswordComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputPasswordComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputPasswordComponent), tuiAsControl2(_TuiInputPasswordComponent)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c116,
      decls: 5,
      vars: 11,
      consts: [["iconContent", "polymorpheus"], ["hintContent", "polymorpheus"], [1, "t-textfield", 3, "valueChange", "focusedChange", "disabled", "focusable", "invalid", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldIcon", "value"], [3, "polymorpheus"], [4, "ngIf"], ["automation-id", "tui-password__icon", "tuiAppearance", "icon", "class", "t-icon", 3, "t-icon_small", "icon", "tuiHint", "tuiHintAppearance", "tuiHintDirection", "click", "mousedown.silent.prevent", "mouseup.silent.prevent", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["polymorpheus", ""], ["automation-id", "tui-password__icon", "tuiAppearance", "icon", 1, "t-icon", 3, "click", "mousedown.silent.prevent", "mouseup.silent.prevent", "icon", "tuiHint", "tuiHintAppearance", "tuiHintDirection"]],
      template: function TuiInputPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c017);
          ɵɵelementStart(0, "tui-primitive-textfield", 2);
          ɵɵtwoWayListener("valueChange", function TuiInputPasswordComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("focusedChange", function TuiInputPasswordComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          });
          ɵɵprojection(1);
          ɵɵprojection(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiInputPasswordComponent_ng_template_3_Template, 2, 3, "ng-template", 3, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const iconContent_r7 = ɵɵreference(4);
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldIcon", !ctx.computedDisabled ? iconContent_r7 : "");
          ɵɵtwoWayProperty("value", ctx.value);
          ɵɵadvance(3);
          ɵɵproperty("polymorpheus", ctx.type);
        }
      },
      dependencies: [TuiHintDirective, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldIconDirective, TuiAppearance, TuiIcon, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPasswordComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-password",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputPasswordComponent), tuiAsControl2(TuiInputPasswordComponent)],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<tui-primitive-textfield
    class="t-textfield"
    [disabled]="computedDisabled"
    [focusable]="focusable"
    [invalid]="computedInvalid"
    [nativeId]="nativeId"
    [pseudoActive]="pseudoActive"
    [pseudoFocus]="pseudoFocus"
    [pseudoHover]="pseudoHover"
    [readOnly]="readOnly"
    [tuiTextfieldIcon]="!computedDisabled ? iconContent : ''"
    [(value)]="value"
    (focusedChange)="onFocused($event)"
>
    <ng-content />
    <ng-content
        ngProjectAs="input"
        select="input"
    />
</tui-primitive-textfield>

<ng-template
    #iconContent="polymorpheus"
    [polymorpheus]="type"
>
    <ng-container *ngIf="passwordTexts$ | async as texts">
        <tui-icon
            *polymorpheusOutlet="icon as src; context: {$implicit: size}"
            automation-id="tui-password__icon"
            tuiAppearance="icon"
            class="t-icon"
            [class.t-icon_small]="size === 's'"
            [icon]="src.toString()"
            [tuiHint]="texts[0] && texts[1] && hintContent"
            [tuiHintAppearance]="(computedAppearance$ | async) || ''"
            [tuiHintDirection]="hintOptions?.direction || 'bottom-left'"
            (click)="togglePasswordVisibility()"
            (mousedown.silent.prevent)="(0)"
            (mouseup.silent.prevent)="(0)"
        />

        <ng-template
            #hintContent="polymorpheus"
            polymorpheus
        >
            {{ isPasswordHidden ? texts[0] : texts[1] }}
        </ng-template>
    </ng-container>
</ng-template>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-icon{cursor:pointer;pointer-events:auto}.t-icon_small{border-width:.25rem}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }]
  });
})();
var TuiInputPasswordDirective = class _TuiInputPasswordDirective extends AbstractTuiTextfieldHost {
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  process(input) {
    this.input = input;
  }
  ngDoCheck() {
    if (this.host.nativeFocusableElement && tuiIsInput(this.host.nativeFocusableElement)) {
      this.host.nativeFocusableElement.type = this.host.inputType;
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPasswordDirective_BaseFactory;
      return function TuiInputPasswordDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputPasswordDirective_BaseFactory || (ɵTuiInputPasswordDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPasswordDirective)))(__ngFactoryType__ || _TuiInputPasswordDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputPasswordDirective,
      selectors: [["tui-input-password"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputPasswordDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPasswordDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-password",
      providers: [tuiAsTextfieldHost(TuiInputPasswordDirective)]
    }]
  }], null, null);
})();
var TuiInputPasswordModule = class _TuiInputPasswordModule {
  static {
    this.ɵfac = function TuiInputPasswordModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputPasswordModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputPasswordModule,
      declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
      imports: [TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer, CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiAppearance, TuiIcon],
      exports: [TuiInputPasswordComponent, TuiInputPasswordDirective, TuiTextfieldComponent, TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TuiHintComponent, CommonModule, FormsModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPasswordModule, [{
    type: NgModule,
    args: [{
      imports: [...TuiHint, CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiAppearance, TuiIcon],
      declarations: [TuiInputPasswordComponent, TuiInputPasswordDirective],
      exports: [TuiInputPasswordComponent, TuiInputPasswordDirective, TuiTextfieldComponent, ...TuiHint]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-phone.mjs
var _c018 = ["*", [["input"]]];
var _c117 = ["*", "input"];
var TUI_INPUT_PHONE_DEFAULT_OPTIONS = {
  phoneMaskAfterCountryCode: "### ###-##-##",
  allowText: false,
  countryCode: "+7"
};
var TUI_INPUT_PHONE_OPTIONS = tuiCreateToken(TUI_INPUT_PHONE_DEFAULT_OPTIONS);
function tuiInputPhoneOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_PHONE_OPTIONS, options, TUI_INPUT_PHONE_DEFAULT_OPTIONS);
}
var countDigits = (value) => value.replaceAll(/\D/g, "").length;
function tuiCreateCompletePhoneInsertionPreprocessor(countryCode, phoneMaskAfterCountryCode) {
  const completePhoneLength = (countryCode + phoneMaskAfterCountryCode).replaceAll(/[^#\d]+/g, "").length;
  const trimCountryPrefix = (value) => countryCode === "+7" ? value.replace(/^(\+?7?\s?8?)\s?/, "") : value.replace(new RegExp(`^(\\+?${countryCode.replace("+", "")}?)\\s?`), "");
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    return {
      elementState: {
        selection,
        value: (
          /**
           * The only possible case when `value` includes digits more
           * than mask expression allows – browser autofill.
           * It means that we are inside `input`-event
           * and mask are ready to reject "extra" characters.
           * We should cut leading country prefix to save trailing characters!
           */
          countDigits(value) > completePhoneLength ? trimCountryPrefix(value) : value
        )
      },
      data: countDigits(data) >= completePhoneLength ? (
        /**
         * User tries to insert/drop the complete phone number (with country prefix).
         * We should drop already existing non-removable prefix.
         */
        trimCountryPrefix(data)
      ) : data
    };
  };
}
function tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode) {
  return [...countryCode.split(""), " ", ...phoneMaskAfterCountryCode.replaceAll(/[^#\- ()]+/g, "").split("").map((item) => item === "#" ? /\d/ : item)];
}
var MASK_SYMBOLS = /[ \-_()]/g;
function isText(value) {
  return Number.isNaN(parseInt(value.replaceAll(MASK_SYMBOLS, ""), 10));
}
var TuiInputPhoneComponent = class _TuiInputPhoneComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    this.options = inject(TUI_INPUT_PHONE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.open = false;
    this.phoneMaskAfterCountryCode = this.options.phoneMaskAfterCountryCode;
    this.allowText = this.options.allowText;
    this.search = "";
    this.searchChange = new EventEmitter();
    this.countryCode = this.options.countryCode;
  }
  set countryCodeSetter(newCountryCode) {
    const prevCountryCode = this.countryCode;
    this.countryCode = newCountryCode;
    this.updateValueWithNewCountryCode(prevCountryCode, newCountryCode);
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeFocusableElement() {
    return !this.textfield || this.computedDisabled ? null : this.textfield.nativeFocusableElement;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement) || !!this.dropdown?.tuiDropdownOpen;
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || maskitoTransform(this.value, this.maskOptions);
  }
  set nativeValue(value) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.value = value;
    }
  }
  get inputMode() {
    return this.allowText ? "text" : "numeric";
  }
  onValueChange(value) {
    const parsed = isText(value) ? value : value.replaceAll(MASK_SYMBOLS, "").slice(0, this.maxPhoneLength);
    this.updateSearch(parsed);
    this.value = parsed === this.countryCode || isText(parsed) ? "" : parsed;
    this.open = true;
    if (!this.value && !this.allowText) {
      this.nativeValue = this.nonRemovablePrefix;
    }
  }
  handleOption(item) {
    this.focusInput();
    this.value = item;
    this.nativeValue = maskitoTransform(this.value, this.maskOptions);
    this.updateSearch("");
    this.open = false;
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = maskitoTransform(value || "", this.maskOptions);
    this.updateSearch("");
  }
  get canOpen() {
    return this.interactive && !!this.datalist;
  }
  get canClean() {
    return this.nativeValue !== this.nonRemovablePrefix && this.textfieldCleaner.cleaner;
  }
  get maskOptions() {
    return this.calculateMask(this.countryCode, this.phoneMaskAfterCountryCode, this.nonRemovablePrefix, this.allowText);
  }
  onActiveZone(active) {
    this.updateFocused(active);
    if (active && !this.nativeValue && !this.readOnly && !this.allowText) {
      this.updateSearch(this.nonRemovablePrefix);
      this.nativeValue = this.nonRemovablePrefix;
      return;
    }
    if (this.nativeValue === this.nonRemovablePrefix || this.isTextValue) {
      this.updateSearch("");
      this.nativeValue = "";
      return;
    }
    if (!active && !this.allowText && this.nativeFocusableElement) {
      this.nativeValue = this.nativeValue.replace(/\D$/, "");
    }
  }
  getFallbackValue() {
    return "";
  }
  get nonRemovablePrefix() {
    return `${this.countryCode} `;
  }
  get maxPhoneLength() {
    return this.countryCode.length + this.phoneMaskAfterCountryCode.replaceAll(/[^#]+/g, "").length;
  }
  get isTextValue() {
    return !!this.search && isText(this.search);
  }
  calculateMask(countryCode, phoneMaskAfterCountryCode, nonRemovablePrefix, allowText) {
    const mask = tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode);
    const preprocessors = [tuiCreateCompletePhoneInsertionPreprocessor(countryCode, phoneMaskAfterCountryCode)];
    return allowText ? {
      mask: ({
        value
      }) => isText(value) && value !== "+" ? MASKITO_DEFAULT_OPTIONS.mask : mask,
      preprocessors
    } : {
      mask,
      preprocessors,
      postprocessors: [maskitoPrefixPostprocessorGenerator(nonRemovablePrefix)],
      plugins: [maskitoCaretGuard((value, [from2, to]) => [from2 === to ? nonRemovablePrefix.length : 0, value.length])]
    };
  }
  focusInput() {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll: true
      });
    }
  }
  updateSearch(search) {
    if (this.search === search) {
      return;
    }
    this.search = search;
    this.searchChange.emit(search);
  }
  updateValueWithNewCountryCode(prevCountryCode, newCountryCode) {
    if (!this.isTextValue) {
      this.value = this.value.replace(prevCountryCode, newCountryCode);
      this.nativeValue = maskitoTransform(this.value, this.maskOptions);
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPhoneComponent_BaseFactory;
      return function TuiInputPhoneComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputPhoneComponent_BaseFactory || (ɵTuiInputPhoneComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPhoneComponent)))(__ngFactoryType__ || _TuiInputPhoneComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputPhoneComponent,
      selectors: [["tui-input-phone"]],
      contentQueries: function TuiInputPhoneComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      viewQuery: function TuiInputPhoneComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDropdownOpen, 5);
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputPhoneComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        phoneMaskAfterCountryCode: "phoneMaskAfterCountryCode",
        allowText: "allowText",
        search: "search",
        countryCodeSetter: [0, "countryCode", "countryCodeSetter"]
      },
      outputs: {
        searchChange: "searchChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputPhoneComponent), tuiAsControl2(_TuiInputPhoneComponent), tuiAsDataListHost(_TuiInputPhoneComponent)]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c117,
      decls: 4,
      vars: 13,
      consts: [["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["tuiValueAccessor", "", 1, "t-textfield", 3, "valueChange", "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldCleaner", "value"]],
      template: function TuiInputPhoneComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c018);
          ɵɵelementStart(0, "div", 0);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiInputPhoneComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return $event;
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiInputPhoneComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            return ctx.onActiveZone($event);
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 1);
          ɵɵtwoWayListener("valueChange", function TuiInputPhoneComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.nativeValue, $event) || (ctx.nativeValue = $event);
            return $event;
          });
          ɵɵlistener("valueChange", function TuiInputPhoneComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            return ctx.onValueChange($event);
          });
          ɵɵprojection(2);
          ɵɵprojection(3, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.canOpen);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("maskito", ctx.maskOptions)("nativeId", ctx.nativeId)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldCleaner", ctx.canClean);
          ɵɵtwoWayProperty("value", ctx.nativeValue);
        }
      },
      dependencies: [MaskitoDirective, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldCleanerDirective, TuiValueAccessorDirective, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownDirective, TuiDropdownOpen],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputPhoneComponent.prototype, "calculateMask", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPhoneComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-phone",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputPhoneComponent), tuiAsControl2(TuiInputPhoneComponent), tuiAsDataListHost(TuiInputPhoneComponent)],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="canOpen"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-primitive-textfield
        tuiValueAccessor
        class="t-textfield"
        [disabled]="computedDisabled"
        [focusable]="focusable"
        [invalid]="computedInvalid"
        [maskito]="maskOptions"
        [nativeId]="nativeId"
        [pseudoFocus]="computedFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldCleaner]="canClean"
        [(value)]="nativeValue"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <ng-content
            ngProjectAs="input"
            select="input"
        />
    </tui-primitive-textfield>
</div>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }],
    phoneMaskAfterCountryCode: [{
      type: Input
    }],
    allowText: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    searchChange: [{
      type: Output
    }],
    countryCodeSetter: [{
      type: Input,
      args: ["countryCode"]
    }],
    calculateMask: []
  });
})();
var TuiInputPhoneDirective = class _TuiInputPhoneDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.nativeValue;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  process(input) {
    this.input = input;
  }
  ngDoCheck() {
    if (!this.input) {
      return;
    }
    this.input.type = "tel";
    this.input.inputMode = this.host.inputMode;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPhoneDirective_BaseFactory;
      return function TuiInputPhoneDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputPhoneDirective_BaseFactory || (ɵTuiInputPhoneDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPhoneDirective)))(__ngFactoryType__ || _TuiInputPhoneDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputPhoneDirective,
      selectors: [["tui-input-phone"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputPhoneDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPhoneDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-phone",
      providers: [tuiAsTextfieldHost(TuiInputPhoneDirective)]
    }]
  }], null, null);
})();
var TuiInputPhoneModule = class _TuiInputPhoneModule {
  static {
    this.ɵfac = function TuiInputPhoneModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputPhoneModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputPhoneModule,
      declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
      imports: [MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPhoneModule, [{
    type: NgModule,
    args: [{
      imports: [MaskitoDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule, TuiValueAccessorModule, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown],
      declarations: [TuiInputPhoneComponent, TuiInputPhoneDirective],
      exports: [TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-pipes-format-phone.mjs
var TuiFormatPhonePipe = class _TuiFormatPhonePipe {
  /**
   * Use {@link https://maskito.dev/frameworks/angular#pipe MaskitoPipe} instead!
   * ```ts
   * import {maskitoTransform} from '@maskito/core';
   * import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
   * import metadata from 'libphonenumber-js/min/metadata';
   *
   * @Component({
   *     standalone: true,
   *     imports: [MaskitoPipe],
   *     template: `
   *         Phone: {{'12125552368' | maskito: options}}
   *         <!-- Phone: +1 (212) 555-2368 -->
   *     `,
   * })
   * export class YourComponent {
   *     options = maskitoPhoneOptionsGenerator({countryIsoCode: 'US', metadata});
   * }
   * ```
   * ___
   * @deprecated Use {@link https://maskito.dev/frameworks/angular#pipe MaskitoPipe} instead!
   * Formats phone number string of +7XXXXXXXXXX format with adding separator symbols
   * @param value
   * @param countryCode
   * @param phoneMask
   * @return formatted phone number string +7(XXX)XXX-XX-XX
   */
  transform(value, countryCode = `${CHAR_PLUS}7`, phoneMask = "(###) ###-##-##") {
    ngDevMode && console.assert(value !== void 0, "Undefined was passed to tuiFormatPhone pipe");
    return tuiFormatPhone(value, countryCode, phoneMask);
  }
  static {
    this.ɵfac = function TuiFormatPhonePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatPhonePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatPhone",
      type: _TuiFormatPhonePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatPhonePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatPhone"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-pipes-iso-to-country-code.mjs
var TuiIsoToCountryCodePipe = class _TuiIsoToCountryCodePipe {
  constructor() {
    this.countriesMasks = inject(TUI_COUNTRIES_MASKS);
  }
  /**
   * @deprecated Use `getCountryCallingCode` from `libphonenumber-js/core` instead
   * ```ts
   * import {getCountryCallingCode} from 'libphonenumber-js/core';
   * import metadata from 'libphonenumber-js/max/metadata';
   *
   * getCountryCallingCode('US', metadata) // 1
   * getCountryCallingCode('GB', metadata) // 44
   * ```
   */
  transform(isoCode) {
    return tuiIsoToCountryCode(this.countriesMasks, isoCode);
  }
  static {
    this.ɵfac = function TuiIsoToCountryCodePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIsoToCountryCodePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIsoToCountryCode",
      type: _TuiIsoToCountryCodePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIsoToCountryCodePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiIsoToCountryCode"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-pipes-to-country-code.mjs
var TuiToCountryCodePipe = class _TuiToCountryCodePipe {
  constructor() {
    this.countriesMasks = inject(TUI_COUNTRIES_MASKS);
  }
  /**
   * @deprecated use `maskitoGetCountryFromNumber` from `@maskito/phone` instead
   * ```
   * npm i @maskito/phone
   * ```
   *
   * ```ts
   * import {maskitoGetCountryFromNumber} from '@maskito/phone';
   * import metadata from 'libphonenumber-js/min/metadata';
   *
   * maskitoGetCountryFromNumber('+1 (212) 555-2368', metadata); // 'US'
   * maskitoGetCountryFromNumber('+12125552368', metadata); // 'US'
   * ```
   */
  transform(value, countries) {
    return countries.find((countryIsoCode) => {
      const ruCodeTest = countryIsoCode === "RU" && /^[78]/.test(value) && /^(?!880[1-9 ])/.test(value) && value.length + 1 === tuiGetMaxAllowedPhoneLength(this.countriesMasks, "RU");
      const matched = ruCodeTest || value.startsWith(tuiIsoToCountryCode(this.countriesMasks, countryIsoCode).replace(CHAR_PLUS, "")) && value.length + 1 === tuiGetMaxAllowedPhoneLength(this.countriesMasks, countryIsoCode);
      if (matched) {
        switch (countryIsoCode) {
          case "KZ":
            return !tuiNotKzRegion(value);
          case "RU":
            return tuiNotKzRegion(value);
          default:
            return true;
        }
      }
      return false;
    });
  }
  static {
    this.ɵfac = function TuiToCountryCodePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiToCountryCodePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiToCountryCode",
      type: _TuiToCountryCodePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiToCountryCodePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiToCountryCode"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-phone-international.mjs
var _c019 = ["*"];
var _c118 = () => ({
  standalone: true
});
function TuiInputPhoneInternationalComponent_div_0_ng_template_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiInputPhoneInternationalComponent_div_0_ng_template_6_button_1_Template_button_click_0_listener() {
      const item_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onItemClick(item_r4));
    });
    ɵɵelement(1, "img", 11);
    ɵɵpipe(2, "tuiFlag");
    ɵɵelementStart(3, "span", 12);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 13);
    ɵɵtext(6);
    ɵɵpipe(7, "tuiIsoToCountryCode");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const countriesNames_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("src", ɵɵpipeBind1(2, 3, item_r4), ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", countriesNames_r5[item_r4], " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, item_r4), " ");
  }
}
function TuiInputPhoneInternationalComponent_div_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list");
    ɵɵtemplate(1, TuiInputPhoneInternationalComponent_div_0_ng_template_6_button_1_Template, 8, 7, "button", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.countries);
  }
}
function TuiInputPhoneInternationalComponent_div_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 14);
    ɵɵpipe(1, "tuiFlag");
  }
  if (rf & 2) {
    const countriesNames_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("alt", countriesNames_r5[ctx_r1.countryIsoCode])("src", ɵɵpipeBind1(1, 2, ctx_r1.countryIsoCode), ɵɵsanitizeUrl);
  }
}
function TuiInputPhoneInternationalComponent_div_0_ng_template_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiInputPhoneInternationalComponent_div_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, TuiInputPhoneInternationalComponent_div_0_ng_template_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.arrow);
  }
}
function TuiInputPhoneInternationalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiInputPhoneInternationalComponent_div_0_Template_div_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.open, $event) || (ctx_r1.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("tuiActiveZoneChange", function TuiInputPhoneInternationalComponent_div_0_Template_div_tuiActiveZoneChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActiveZone($event));
    });
    ɵɵelementStart(1, "div", 5);
    ɵɵelement(2, "tui-primitive-textfield", 6);
    ɵɵelementStart(3, "tui-input-phone", 7);
    ɵɵtwoWayListener("ngModelChange", function TuiInputPhoneInternationalComponent_div_0_Template_tui_input_phone_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.value, $event) || (ctx_r1.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵprojection(4);
    ɵɵelement(5, "input", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(6, TuiInputPhoneInternationalComponent_div_0_ng_template_6_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(8, TuiInputPhoneInternationalComponent_div_0_ng_template_8_Template, 2, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(10, TuiInputPhoneInternationalComponent_div_0_ng_template_10_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dropdown_r6 = ɵɵreference(7);
    const countryValueContent_r7 = ɵɵreference(9);
    const icon_r8 = ɵɵreference(11);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tuiDropdown", dropdown_r6)("tuiDropdownEnabled", !ctx_r1.readOnly);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r1.open);
    ɵɵadvance(2);
    ɵɵstyleProp("flex", "0 0 auto");
    ɵɵproperty("disabled", ctx_r1.disabled)("editable", false)("focusable", ctx_r1.focusable)("pseudoFocus", ctx_r1.open || null)("readOnly", ctx_r1.readOnly)("tuiTextfieldCustomContent", countryValueContent_r7)("tuiTextfieldIcon", icon_r8)("tuiTextfieldLabelOutside", true);
    ɵɵadvance();
    ɵɵstyleProp("flex", "0 0 auto");
    ɵɵproperty("countryCode", ctx_r1.inputPhoneCountryCode)("disabled", ctx_r1.disabled)("focusable", ctx_r1.focusable)("ngModelOptions", ɵɵpureFunction0(25, _c118))("phoneMaskAfterCountryCode", ctx_r1.phoneMaskAfterCountryCode)("pseudoFocus", ctx_r1.pseudoFocus)("pseudoHover", ctx_r1.pseudoHover)("pseudoInvalid", ctx_r1.computedInvalid)("readOnly", ctx_r1.readOnly);
    ɵɵtwoWayProperty("ngModel", ctx_r1.value);
  }
}
var TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS = {
  countries: [],
  countryIsoCode: "RU"
};
var TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = tuiCreateToken(TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
function tuiInputPhoneInternationalOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS, options, TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
}
function tuiExtractValueFromEvent(event) {
  return "dataTransfer" in event ? event.dataTransfer?.getData("text/plain") || "" : tuiGetClipboardDataText(event);
}
var MASK_SYMBOLS2 = /[ \-_()]/g;
var TuiInputPhoneInternationalComponent = class _TuiInputPhoneInternationalComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    this.extractCountryCodePipe = inject(TuiToCountryCodePipe);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.open = false;
    this.countriesNames$ = inject(TUI_COUNTRIES);
    this.countriesMasks = inject(TUI_COUNTRIES_MASKS);
    this.arrow = TUI_ARROW;
    this.countries = this.options.countries;
    this.countryIsoCodeChange = new EventEmitter();
    this.countryIsoCode = this.options.countryIsoCode;
  }
  set isoCode(code) {
    if (this.countryIsoCode === code) {
      return;
    }
    this.inputPhoneComponent?.writeValue(this.value);
    this.countryIsoCode = code;
  }
  get nativeFocusableElement() {
    return this.inputPhoneComponent && !this.computedDisabled ? this.inputPhoneComponent.nativeFocusableElement : null;
  }
  get focused() {
    return !!this.primitiveTextfield && this.primitiveTextfield.focused || !!this.inputPhoneComponent && this.inputPhoneComponent.focused;
  }
  get inputPhoneCountryCode() {
    return tuiIsoToCountryCode(this.countriesMasks, this.countryIsoCode);
  }
  get phoneMaskAfterCountryCode() {
    const countryCode = this.inputPhoneCountryCode;
    return this.calculateMaskAfterCountryCode(this.countriesMasks[this.countryIsoCode], countryCode);
  }
  onPaste(event) {
    let value = tuiExtractValueFromEvent(event).replace(TUI_NON_DIGITS_REGEXP, "");
    const countryIsoCode = this.extractCountryCodePipe.transform(value, this.countries);
    if (!countryIsoCode) {
      this.value = `${this.inputPhoneCountryCode}${value}`.replaceAll(MASK_SYMBOLS2, "").slice(0, tuiGetMaxAllowedPhoneLength(this.countriesMasks, this.countryIsoCode));
      return;
    }
    if (countryIsoCode === "RU") {
      value = value.replace(/^8/, "7");
    }
    this.updateCountryIsoCode(countryIsoCode);
    this.value = `${CHAR_PLUS}${value}`;
  }
  onItemClick(isoCode) {
    this.open = false;
    this.updateCountryIsoCode(isoCode);
    this.cdr.detectChanges();
    const maxLength = tuiGetMaxAllowedPhoneLength(this.countriesMasks, isoCode);
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength);
    }
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus();
    }
  }
  setDisabledState() {
    super.setDisabledState();
    this.close();
  }
  get size() {
    return this.textfieldSize.size;
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  getFallbackValue() {
    return "";
  }
  calculateMaskAfterCountryCode(mask, countryCode) {
    return mask.replace(countryCode, "").trim();
  }
  close() {
    this.open = false;
  }
  updateCountryIsoCode(code) {
    this.countryIsoCode = code;
    this.countryIsoCodeChange.emit(code);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPhoneInternationalComponent_BaseFactory;
      return function TuiInputPhoneInternationalComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputPhoneInternationalComponent_BaseFactory || (ɵTuiInputPhoneInternationalComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPhoneInternationalComponent)))(__ngFactoryType__ || _TuiInputPhoneInternationalComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputPhoneInternationalComponent,
      selectors: [["tui-input-phone-international"]],
      viewQuery: function TuiInputPhoneInternationalComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiInputPhoneComponent, 5);
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputPhoneComponent = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.primitiveTextfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputPhoneInternationalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("paste.capture.prevent.stop", function TuiInputPhoneInternationalComponent_paste_capture_prevent_stop_HostBindingHandler($event) {
            return ctx.onPaste($event);
          })("drop.capture.prevent.stop", function TuiInputPhoneInternationalComponent_drop_capture_prevent_stop_HostBindingHandler($event) {
            return ctx.onPaste($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        countries: "countries",
        isoCode: [0, "countryIsoCode", "isoCode"]
      },
      outputs: {
        countryIsoCodeChange: "countryIsoCodeChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputPhoneInternationalComponent), tuiAsControl2(_TuiInputPhoneInternationalComponent), TuiToCountryCodePipe]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c019,
      decls: 2,
      vars: 3,
      consts: [["dropdown", ""], ["countryValueContent", ""], ["icon", ""], ["tuiDropdownOpenMonitor", "", 3, "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen", "tuiDropdownOpenChange", "tuiActiveZoneChange", 4, "ngIf"], ["tuiDropdownOpenMonitor", "", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["tuiGroup", ""], ["tuiHintContent", "", "tuiTextfieldPostfix", "", "tuiTextfieldPrefix", "", 1, "t-country-select", 3, "disabled", "editable", "focusable", "pseudoFocus", "readOnly", "tuiTextfieldCustomContent", "tuiTextfieldIcon", "tuiTextfieldLabelOutside"], [1, "t-input-phone", 3, "ngModelChange", "countryCode", "disabled", "focusable", "ngModelOptions", "phoneMaskAfterCountryCode", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "ngModel"], ["autocomplete", "new-password", "tuiTextfieldLegacy", ""], ["tuiOption", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", "type", "button", 3, "click"], ["alt", "", 1, "t-flag", 3, "src"], [1, "t-country-item-name"], [1, "t-country-item-code"], [1, "t-flag", "t-flag_select", 3, "alt", "src"], ["tuiAppearance", "icon"], [4, "polymorpheusOutlet"]],
      template: function TuiInputPhoneInternationalComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiInputPhoneInternationalComponent_div_0_Template, 12, 26, "div", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.countriesNames$));
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, FormsModule, NgControlStatus, NgModel, PolymorpheusOutlet, TuiAppearance, TuiDataListComponent, TuiOption, TuiDropdownDirective, TuiDropdownOpen, TuiFlagPipe, TuiGroup, TuiHintOptionsDirective, TuiInputPhoneModule, TuiInputPhoneComponent, TuiInputPhoneDirective, TuiTextfieldComponent, TuiIsoToCountryCodePipe, TuiLegacyDropdownOpenMonitorDirective, TuiPrimitiveTextfieldModule, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldControllerModule, TuiTextfieldCustomContentDirective, TuiTextfieldLabelOutsideDirective, TuiTextfieldIconDirective, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective],
      styles: ["[_nghost-%COMP%]{display:block}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-country-select[_ngcontent-%COMP%]{inline-size:5.625rem}.t-country-select[_ngcontent-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}.t-country-select._readonly[_ngcontent-%COMP%]     input{cursor:default}.t-country-select[data-size=m][_ngcontent-%COMP%]{inline-size:5.5rem}.t-country-select[data-size=s][_ngcontent-%COMP%]{inline-size:2rem}.t-country-select[data-size=s][_ngcontent-%COMP%]   .t-flag[_ngcontent-%COMP%]{margin-left:-1rem}.t-input-phone[_ngcontent-%COMP%]{flex:1}.t-flag[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;border-radius:50%}.t-flag_select[_ngcontent-%COMP%]{margin-left:-.5rem}.t-country-item-name[_ngcontent-%COMP%]{margin-left:.75rem;margin-right:auto}.t-country-item-code[_ngcontent-%COMP%]{color:var(--tui-text-secondary);margin-right:.25rem}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputPhoneInternationalComponent.prototype, "calculateMaskAfterCountryCode", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPhoneInternationalComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-input-phone-international",
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiAppearance, TuiArrowComponent, TuiButton, TuiDataList, TuiDropdown, TuiFlagPipe, TuiGroup, TuiHint, TuiInputPhoneModule, TuiIsoToCountryCodePipe, TuiLegacyDropdownOpenMonitorDirective, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent), tuiAsControl2(TuiInputPhoneInternationalComponent), TuiToCountryCodePipe],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size",
        "(paste.capture.prevent.stop)": "onPaste($event)",
        "(drop.capture.prevent.stop)": "onPaste($event)"
      },
      template: `<div
    *ngIf="countriesNames$ | async as countriesNames"
    tuiDropdownOpenMonitor
    [tuiDropdown]="dropdown"
    [tuiDropdownEnabled]="!readOnly"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <div tuiGroup>
        <tui-primitive-textfield
            tuiHintContent=""
            tuiTextfieldPostfix=""
            tuiTextfieldPrefix=""
            class="t-country-select"
            [disabled]="disabled"
            [editable]="false"
            [focusable]="focusable"
            [pseudoFocus]="open || null"
            [readOnly]="readOnly"
            [style.flex]="'0 0 auto'"
            [tuiTextfieldCustomContent]="countryValueContent"
            [tuiTextfieldIcon]="icon"
            [tuiTextfieldLabelOutside]="true"
        />
        <tui-input-phone
            class="t-input-phone"
            [countryCode]="inputPhoneCountryCode"
            [disabled]="disabled"
            [focusable]="focusable"
            [ngModelOptions]="{standalone: true}"
            [phoneMaskAfterCountryCode]="phoneMaskAfterCountryCode"
            [pseudoFocus]="pseudoFocus"
            [pseudoHover]="pseudoHover"
            [pseudoInvalid]="computedInvalid"
            [readOnly]="readOnly"
            [style.flex]="'0 0 auto'"
            [(ngModel)]="value"
        >
            <ng-content />
            <input
                autocomplete="new-password"
                tuiTextfieldLegacy
            />
        </tui-input-phone>
    </div>

    <ng-template #dropdown>
        <tui-data-list>
            <button
                *ngFor="let item of countries"
                tuiOption
                type="button"
                (click)="onItemClick(item)"
            >
                <img
                    alt=""
                    class="t-flag"
                    [src]="item | tuiFlag"
                />
                <span class="t-country-item-name">
                    {{ countriesNames[item] }}
                </span>
                <span class="t-country-item-code">
                    {{ item | tuiIsoToCountryCode }}
                </span>
            </button>
        </tui-data-list>
    </ng-template>

    <ng-template #countryValueContent>
        <img
            class="t-flag t-flag_select"
            [alt]="countriesNames[countryIsoCode]"
            [src]="countryIsoCode | tuiFlag"
        />
    </ng-template>

    <ng-template #icon>
        <div tuiAppearance="icon">
            <ng-container *polymorpheusOutlet="arrow" />
        </div>
    </ng-template>
</div>
`,
      styles: [":host{display:block}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-country-select{inline-size:5.625rem}.t-country-select:not(._readonly) ::ng-deep input:not(:disabled){cursor:pointer}.t-country-select._readonly ::ng-deep input{cursor:default}.t-country-select[data-size=m]{inline-size:5.5rem}.t-country-select[data-size=s]{inline-size:2rem}.t-country-select[data-size=s] .t-flag{margin-left:-1rem}.t-input-phone{flex:1}.t-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:50%}.t-flag_select{margin-left:-.5rem}.t-country-item-name{margin-left:.75rem;margin-right:auto}.t-country-item-code{color:var(--tui-text-secondary);margin-right:.25rem}\n"]
    }]
  }], null, {
    inputPhoneComponent: [{
      type: ViewChild,
      args: [TuiInputPhoneComponent]
    }],
    primitiveTextfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    countries: [{
      type: Input
    }],
    countryIsoCodeChange: [{
      type: Output
    }],
    isoCode: [{
      type: Input,
      args: ["countryIsoCode"]
    }],
    calculateMaskAfterCountryCode: []
  });
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-range.mjs
var _c020 = ["*"];
var _c119 = () => ({
  standalone: true
});
var _c212 = (a0) => ({
  precision: a0
});
var _c35 = (a0) => ({
  $implicit: a0
});
function TuiInputRangeComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiInputRangeComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiInputRangeComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.leftValueContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c35, ctx_r1.value[0]));
  }
}
function TuiInputRangeComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r3, " ");
  }
}
function TuiInputRangeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiInputRangeComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.rightValueContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c35, ctx_r1.value[1]));
  }
}
var TuiInputRangeComponent = class _TuiInputRangeComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.inputNumberRefs = EMPTY_QUERY;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.leftTextfieldValue = this.safeCurrentValue[0];
    this.rightTextfieldValue = this.safeCurrentValue[1];
    this.lastActiveSide = "left";
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.min = 0;
    this.max = 100;
    this.quantum = 1;
    this.steps = 0;
    this.segments = 1;
    this.keySteps = null;
    this.pluralize = null;
  }
  get nativeFocusableElement() {
    return this.disabled ? null : this.leftFocusableElement || this.rightFocusableElement;
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el);
  }
  writeValue(value) {
    super.writeValue(value);
    this.updateTextfieldValues(this.value);
  }
  get leftFocusableElement() {
    return this.inputNumberRefs.first?.nativeFocusableElement || null;
  }
  get rightFocusableElement() {
    return this.inputNumberRefs.last?.nativeFocusableElement || null;
  }
  get appearance() {
    return this.controller.appearance;
  }
  get showLeftValueContent() {
    return Boolean(this.leftValueContent && !tuiIsNativeFocused(this.leftFocusableElement) && !(tuiIsNativeFocusedIn(this.range?.nativeElement) && this.lastActiveSide === "left"));
  }
  get showRightValueContent() {
    return Boolean(this.rightValueContent && !tuiIsNativeFocused(this.rightFocusableElement) && !(tuiIsNativeFocusedIn(this.range?.nativeElement) && this.lastActiveSide === "right"));
  }
  get precision() {
    return tuiGetFractionPartPadded(this.quantum).length;
  }
  get computedSteps() {
    return this.steps || (this.max - this.min) / this.quantum;
  }
  get step() {
    return (this.max - this.min) / this.computedSteps;
  }
  computeKeySteps(keySteps, min, max) {
    return keySteps || [[0, min], [100, max]];
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  onTextInputFocused(focused) {
    if (!focused) {
      this.updateTextfieldValues(this.value);
    }
  }
  changeByStep(event, [leftCoefficient, rightCoefficient]) {
    if (this.readOnly) {
      return;
    }
    event.preventDefault();
    const newValue = this.valueGuard([this.value[0] + leftCoefficient * this.step, this.value[1] + rightCoefficient * this.step]);
    if (newValue[0] !== this.value[0] || newValue[1] !== this.value[1]) {
      this.onExternalValueUpdate(newValue);
    }
  }
  onInputLeft(value) {
    this.safelyUpdateValue([value ?? this.safeCurrentValue[0], this.value[1]]);
  }
  onInputRight(value) {
    this.safelyUpdateValue([this.value[0], value ?? this.safeCurrentValue[1]]);
  }
  onExternalValueUpdate(value) {
    this.safelyUpdateValue(value);
    this.updateTextfieldValues(this.value);
  }
  focusToTextInput() {
    const element = this.lastActiveSide === "left" ? this.leftFocusableElement : this.rightFocusableElement;
    if (!this.isMobile && element) {
      element.focus();
    }
  }
  onActiveThumbChange(activeThumb) {
    this.lastActiveSide = activeThumb;
  }
  getFallbackValue() {
    return [0, 0];
  }
  safelyUpdateValue(value) {
    this.value = this.valueGuard(value);
  }
  valueGuard([leftValue, rightValue]) {
    const leftCalibratedValue = this.calibrate(leftValue);
    const rightCalibratedValue = this.calibrate(rightValue);
    return [Math.min(leftCalibratedValue, this.value[1]), Math.max(rightCalibratedValue, this.value[0])];
  }
  calibrate(value) {
    const roundedValue = tuiRound(Math.round(value / this.quantum) * this.quantum, TUI_FLOATING_PRECISION);
    return tuiClamp(roundedValue, this.min, this.max);
  }
  updateTextfieldValues([leftValue, rightValue]) {
    this.leftTextfieldValue = leftValue;
    this.rightTextfieldValue = rightValue;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputRangeComponent_BaseFactory;
      return function TuiInputRangeComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputRangeComponent_BaseFactory || (ɵTuiInputRangeComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputRangeComponent)))(__ngFactoryType__ || _TuiInputRangeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputRangeComponent,
      selectors: [["tui-input-range"]],
      viewQuery: function TuiInputRangeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiRange, 5, ElementRef);
          ɵɵviewQuery(TuiInputNumberComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.range = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputNumberRefs = _t);
        }
      },
      hostVars: 3,
      hostBindings: function TuiInputRangeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.controller.size);
          ɵɵclassProp("_label-outside", ctx.controller.labelOutside);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        quantum: "quantum",
        steps: "steps",
        segments: "segments",
        keySteps: "keySteps",
        leftValueContent: "leftValueContent",
        rightValueContent: "rightValueContent",
        pluralize: "pluralize"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputRangeComponent), tuiAsControl2(_TuiInputRangeComponent), tuiSliderOptionsProvider({
        trackColor: "transparent"
      }), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c020,
      decls: 9,
      vars: 46,
      consts: [["tuiWrapper", "", 1, "t-wrapper", 3, "tuiActiveZoneChange", "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], ["automation-id", "tui-input-range__left-input", "tuiTextfieldAppearance", "none", 1, "t-left", 3, "ngModelChange", "focusedChange", "keydown.arrowDown", "keydown.arrowUp", "disabled", "max", "min", "ngModelOptions", "readOnly", "tuiNumberFormat", "tuiTextfieldPostfix", "ngModel"], ["ngProjectAs", "tuiContent", 5, ["tuiContent"], 4, "ngIf"], ["automation-id", "tui-input-range__right-input", "tuiTextfieldAppearance", "none", 1, "t-right", 3, "ngModelChange", "focusedChange", "keydown.arrowDown", "keydown.arrowUp", "disabled", "max", "min", "ngModelOptions", "readOnly", "tuiNumberFormat", "tuiTextfieldPostfix", "ngModel"], [1, "t-range", 3, "activeThumbChange", "mousedown.prevent", "ngModelChange", "disabled", "focusable", "keySteps", "max", "min", "ngModel", "ngModelOptions", "segments", "step"], ["ngProjectAs", "tuiContent", 5, ["tuiContent"]], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiInputRangeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("tuiActiveZoneChange", function TuiInputRangeComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            return ctx.onActiveZone($event);
          });
          ɵɵelementStart(1, "tui-input-number", 1);
          ɵɵpipe(2, "i18nPlural");
          ɵɵtwoWayListener("ngModelChange", function TuiInputRangeComponent_Template_tui_input_number_ngModelChange_1_listener($event) {
            ɵɵtwoWayBindingSet(ctx.leftTextfieldValue, $event) || (ctx.leftTextfieldValue = $event);
            return $event;
          });
          ɵɵlistener("focusedChange", function TuiInputRangeComponent_Template_tui_input_number_focusedChange_1_listener($event) {
            return ctx.onTextInputFocused($event);
          })("keydown.arrowDown", function TuiInputRangeComponent_Template_tui_input_number_keydown_arrowDown_1_listener($event) {
            return ctx.changeByStep($event, [-1, 0]);
          })("keydown.arrowUp", function TuiInputRangeComponent_Template_tui_input_number_keydown_arrowUp_1_listener($event) {
            return ctx.changeByStep($event, [1, 0]);
          })("ngModelChange", function TuiInputRangeComponent_Template_tui_input_number_ngModelChange_1_listener($event) {
            return ctx.onInputLeft($event);
          });
          ɵɵprojection(3);
          ɵɵtemplate(4, TuiInputRangeComponent_div_4_Template, 2, 4, "div", 2);
          ɵɵelementEnd();
          ɵɵelementStart(5, "tui-input-number", 3);
          ɵɵpipe(6, "i18nPlural");
          ɵɵtwoWayListener("ngModelChange", function TuiInputRangeComponent_Template_tui_input_number_ngModelChange_5_listener($event) {
            ɵɵtwoWayBindingSet(ctx.rightTextfieldValue, $event) || (ctx.rightTextfieldValue = $event);
            return $event;
          });
          ɵɵlistener("focusedChange", function TuiInputRangeComponent_Template_tui_input_number_focusedChange_5_listener($event) {
            return ctx.onTextInputFocused($event);
          })("keydown.arrowDown", function TuiInputRangeComponent_Template_tui_input_number_keydown_arrowDown_5_listener($event) {
            return ctx.changeByStep($event, [0, -1]);
          })("keydown.arrowUp", function TuiInputRangeComponent_Template_tui_input_number_keydown_arrowUp_5_listener($event) {
            return ctx.changeByStep($event, [0, 1]);
          })("ngModelChange", function TuiInputRangeComponent_Template_tui_input_number_ngModelChange_5_listener($event) {
            return ctx.onInputRight($event);
          });
          ɵɵtemplate(7, TuiInputRangeComponent_div_7_Template, 2, 4, "div", 2);
          ɵɵelementEnd();
          ɵɵelementStart(8, "tui-range", 4);
          ɵɵlistener("activeThumbChange", function TuiInputRangeComponent_Template_tui_range_activeThumbChange_8_listener($event) {
            return ctx.onActiveThumbChange($event);
          })("mousedown.prevent", function TuiInputRangeComponent_Template_tui_range_mousedown_prevent_8_listener() {
            return ctx.focusToTextInput();
          })("ngModelChange", function TuiInputRangeComponent_Template_tui_range_ngModelChange_8_listener($event) {
            return ctx.onExternalValueUpdate($event);
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("max", ctx.value[1])("min", ctx.min)("ngModelOptions", ɵɵpureFunction0(39, _c119))("readOnly", ctx.readOnly)("tuiNumberFormat", ɵɵpureFunction1(40, _c212, ctx.precision))("tuiTextfieldPostfix", ctx.pluralize ? ɵɵpipeBind2(2, 33, ctx.value[0], ctx.pluralize) : "");
          ɵɵtwoWayProperty("ngModel", ctx.leftTextfieldValue);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showLeftValueContent);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.computedDisabled)("max", ctx.max)("min", ctx.value[0])("ngModelOptions", ɵɵpureFunction0(42, _c119))("readOnly", ctx.readOnly)("tuiNumberFormat", ɵɵpureFunction1(43, _c212, ctx.precision))("tuiTextfieldPostfix", ctx.pluralize ? ɵɵpipeBind2(6, 36, ctx.value[1], ctx.pluralize) : "");
          ɵɵtwoWayProperty("ngModel", ctx.rightTextfieldValue);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.showRightValueContent);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.readOnly || ctx.disabled)("focusable", false)("keySteps", ctx.computeKeySteps(ctx.keySteps, ctx.min, ctx.max))("max", ctx.max)("min", ctx.min)("ngModel", ctx.value)("ngModelOptions", ɵɵpureFunction0(45, _c119))("segments", ctx.segments)("step", ctx.step);
        }
      },
      dependencies: [NgIf, NgControlStatus, NgModel, PolymorpheusOutlet, TuiActiveZone, TuiInputNumberComponent, TuiInputNumberDirective, TuiRange, TuiWrapperDirective, TuiTextfieldAppearanceDirective, TuiTextfieldPostfixDirective, TuiNumberFormat, I18nPluralPipe],
      styles: [".t-wrapper[_ngcontent-%COMP%]{position:relative}.t-left[_ngcontent-%COMP%]{inline-size:100%}.t-right[_ngcontent-%COMP%]{position:absolute;right:0;top:0;display:flex;inline-size:50%;block-size:100%;text-align:end}[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-range[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;right:0;z-index:1;margin:-.125rem 0 0}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputRangeComponent.prototype, "computeKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputRangeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputRangeComponent), tuiAsControl2(TuiInputRangeComponent), tuiSliderOptionsProvider({
        trackColor: "transparent"
      }), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "controller.size",
        "[class._label-outside]": "controller.labelOutside"
      },
      template: `<div
    tuiWrapper
    class="t-wrapper"
    [appearance]="appearance"
    [disabled]="disabled"
    [focus]="computedFocused"
    [hover]="pseudoHover"
    [invalid]="computedInvalid"
    [readOnly]="readOnly"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-input-number
        automation-id="tui-input-range__left-input"
        tuiTextfieldAppearance="none"
        class="t-left"
        [disabled]="computedDisabled"
        [max]="value[1]"
        [min]="min"
        [ngModelOptions]="{standalone: true}"
        [readOnly]="readOnly"
        [tuiNumberFormat]="{precision}"
        [tuiTextfieldPostfix]="pluralize ? (value[0] | i18nPlural: pluralize) : ''"
        [(ngModel)]="leftTextfieldValue"
        (focusedChange)="onTextInputFocused($event)"
        (keydown.arrowDown)="changeByStep($event, [-1, 0])"
        (keydown.arrowUp)="changeByStep($event, [1, 0])"
        (ngModelChange)="onInputLeft($event)"
    >
        <ng-content />
        <div
            *ngIf="showLeftValueContent"
            ngProjectAs="tuiContent"
        >
            <ng-container *polymorpheusOutlet="leftValueContent as text; context: {$implicit: value[0]}">
                {{ text }}
            </ng-container>
        </div>
    </tui-input-number>

    <tui-input-number
        automation-id="tui-input-range__right-input"
        tuiTextfieldAppearance="none"
        class="t-right"
        [disabled]="computedDisabled"
        [max]="max"
        [min]="value[0]"
        [ngModelOptions]="{standalone: true}"
        [readOnly]="readOnly"
        [tuiNumberFormat]="{precision}"
        [tuiTextfieldPostfix]="pluralize ? (value[1] | i18nPlural: pluralize) : ''"
        [(ngModel)]="rightTextfieldValue"
        (focusedChange)="onTextInputFocused($event)"
        (keydown.arrowDown)="changeByStep($event, [0, -1])"
        (keydown.arrowUp)="changeByStep($event, [0, 1])"
        (ngModelChange)="onInputRight($event)"
    >
        <div
            *ngIf="showRightValueContent"
            ngProjectAs="tuiContent"
        >
            <ng-container *polymorpheusOutlet="rightValueContent as text; context: {$implicit: value[1]}">
                {{ text }}
            </ng-container>
        </div>
    </tui-input-number>

    <tui-range
        class="t-range"
        [disabled]="readOnly || disabled"
        [focusable]="false"
        [keySteps]="computeKeySteps(keySteps, min, max)"
        [max]="max"
        [min]="min"
        [ngModel]="value"
        [ngModelOptions]="{standalone: true}"
        [segments]="segments"
        [step]="step"
        (activeThumbChange)="onActiveThumbChange($event)"
        (mousedown.prevent)="focusToTextInput()"
        (ngModelChange)="onExternalValueUpdate($event)"
    />
</div>
`,
      styles: [".t-wrapper{position:relative}.t-left{inline-size:100%}.t-right{position:absolute;right:0;top:0;display:flex;inline-size:50%;block-size:100%;text-align:end}:host{display:block;border-radius:var(--tui-radius-m)}:host :host-context(*:disabled){pointer-events:none}.t-range{position:absolute;top:100%;left:0;right:0;z-index:1;margin:-.125rem 0 0}\n"]
    }]
  }], null, {
    inputNumberRefs: [{
      type: ViewChildren,
      args: [TuiInputNumberComponent]
    }],
    range: [{
      type: ViewChild,
      args: [TuiRange, {
        read: ElementRef
      }]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    quantum: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    keySteps: [{
      type: Input
    }],
    leftValueContent: [{
      type: Input
    }],
    rightValueContent: [{
      type: Input
    }],
    pluralize: [{
      type: Input
    }],
    computeKeySteps: []
  });
})();
var TuiInputRangeModule = class _TuiInputRangeModule {
  static {
    this.ɵfac = function TuiInputRangeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputRangeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputRangeModule,
      declarations: [TuiInputRangeComponent],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone, TuiInputNumberModule, TuiRange, TuiWrapperModule, TuiTextfieldControllerModule, TuiNumberFormat],
      exports: [TuiInputRangeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiRange, TuiWrapperModule, TuiTextfieldControllerModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputRangeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone, TuiInputNumberModule, TuiRange, TuiWrapperModule, TuiTextfieldControllerModule, TuiNumberFormat],
      declarations: [TuiInputRangeComponent],
      exports: [TuiInputRangeComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-slider.mjs
var _c021 = ["*"];
var _c120 = () => ({
  standalone: true
});
var _c213 = (a0) => ({
  precision: a0
});
var _c36 = (a0) => ({
  $implicit: a0
});
function TuiInputSliderComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiInputSliderComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, TuiInputSliderComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.valueContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c36, ctx_r1.value));
  }
}
var TuiInputSliderComponent = class _TuiInputSliderComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.textfieldValue = this.safeCurrentValue;
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.min = 0;
    this.max = 100;
    this.quantum = 1;
    this.steps = 0;
    this.segments = 1;
    this.keySteps = null;
  }
  get nativeFocusableElement() {
    return !this.inputNumberRef?.nativeFocusableElement || this.computedDisabled ? null : this.inputNumberRef.nativeFocusableElement;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement) || tuiIsNativeFocused(this.sliderRef?.nativeElement || null);
  }
  writeValue(value) {
    super.writeValue(value);
    this.textfieldValue = this.value;
  }
  get prefix() {
    return this.controller.prefix;
  }
  get postfix() {
    return this.controller.postfix;
  }
  get computedSteps() {
    return this.steps || (this.max - this.min) / this.quantum;
  }
  get precision() {
    return tuiGetFractionPartPadded(this.quantum).length;
  }
  get showValueContent() {
    return Boolean(this.valueContent && !this.focused);
  }
  get step() {
    return (this.max - this.min) / this.computedSteps;
  }
  computeKeySteps(keySteps, min, max) {
    return keySteps || [[0, min], [100, max]];
  }
  focusTextInput() {
    const focusableElement = this.inputNumberRef?.nativeFocusableElement;
    if (focusableElement) {
      focusableElement.focus();
    }
  }
  safelyUpdateValue(value) {
    this.value = this.valueGuard(value ?? this.safeCurrentValue);
  }
  onVerticalArrowKeyDown(coefficient) {
    if (this.readOnly || !this.step) {
      return;
    }
    const value = this.value + coefficient * this.step;
    if (value !== this.value) {
      this.safelyUpdateValue(value);
      this.textfieldValue = this.value;
    }
  }
  onSliderChange(newValue) {
    this.safelyUpdateValue(newValue);
    this.textfieldValue = this.value;
  }
  onFocused(focused) {
    const {
      value,
      textfieldValue
    } = this;
    if (!focused && textfieldValue !== value) {
      this.textfieldValue = value;
    }
    this.updateFocused(focused);
  }
  getFallbackValue() {
    return 0;
  }
  valueGuard(value) {
    const roundedValue = tuiRound(Math.round(value / this.quantum) * this.quantum, TUI_FLOATING_PRECISION);
    return tuiClamp(roundedValue, this.min, this.max);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputSliderComponent_BaseFactory;
      return function TuiInputSliderComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputSliderComponent_BaseFactory || (ɵTuiInputSliderComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputSliderComponent)))(__ngFactoryType__ || _TuiInputSliderComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputSliderComponent,
      selectors: [["tui-input-slider"]],
      viewQuery: function TuiInputSliderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiInputNumberComponent, 5);
          ɵɵviewQuery(TuiSliderComponent, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputNumberRef = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sliderRef = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function TuiInputSliderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.controller.size);
          ɵɵclassProp("_label-outside", ctx.controller.labelOutside);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        quantum: "quantum",
        steps: "steps",
        segments: "segments",
        keySteps: "keySteps",
        valueContent: "valueContent"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputSliderComponent), tuiAsControl2(_TuiInputSliderComponent), tuiSliderOptionsProvider({
        trackColor: "transparent"
      }), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c021,
      decls: 4,
      vars: 24,
      consts: [[3, "ngModelChange", "focusedChange", "keydown.arrowDown.prevent", "keydown.arrowUp.prevent", "disabled", "max", "min", "ngModelOptions", "pseudoActive", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "tuiNumberFormat", "tuiTextfieldPostfix", "tuiTextfieldPrefix", "ngModel"], ["automation-id", "tui-input-slider__value-content", "ngProjectAs", "tuiContent", 5, ["tuiContent"], 4, "ngIf"], ["tabIndex", "-1", "tuiSlider", "", "type", "range", 3, "click", "ngModelChange", "disabled", "keySteps", "max", "ngModel", "ngModelOptions", "segments"], ["automation-id", "tui-input-slider__value-content", "ngProjectAs", "tuiContent", 5, ["tuiContent"]], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiInputSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "tui-input-number", 0);
          ɵɵtwoWayListener("ngModelChange", function TuiInputSliderComponent_Template_tui_input_number_ngModelChange_0_listener($event) {
            ɵɵtwoWayBindingSet(ctx.textfieldValue, $event) || (ctx.textfieldValue = $event);
            return $event;
          });
          ɵɵlistener("focusedChange", function TuiInputSliderComponent_Template_tui_input_number_focusedChange_0_listener($event) {
            return ctx.onFocused($event);
          })("keydown.arrowDown.prevent", function TuiInputSliderComponent_Template_tui_input_number_keydown_arrowDown_prevent_0_listener() {
            return ctx.onVerticalArrowKeyDown(-1);
          })("keydown.arrowUp.prevent", function TuiInputSliderComponent_Template_tui_input_number_keydown_arrowUp_prevent_0_listener() {
            return ctx.onVerticalArrowKeyDown(1);
          })("ngModelChange", function TuiInputSliderComponent_Template_tui_input_number_ngModelChange_0_listener($event) {
            return ctx.safelyUpdateValue($event);
          });
          ɵɵprojection(1);
          ɵɵtemplate(2, TuiInputSliderComponent_div_2_Template, 2, 4, "div", 1);
          ɵɵelementEnd();
          ɵɵelementStart(3, "input", 2);
          ɵɵlistener("click", function TuiInputSliderComponent_Template_input_click_3_listener() {
            return ctx.focusTextInput();
          })("ngModelChange", function TuiInputSliderComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.onSliderChange($event);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("disabled", ctx.computedDisabled)("max", ctx.max)("min", ctx.min)("ngModelOptions", ɵɵpureFunction0(20, _c120))("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("pseudoInvalid", ctx.pseudoInvalid)("readOnly", ctx.readOnly)("tuiNumberFormat", ɵɵpureFunction1(21, _c213, ctx.precision))("tuiTextfieldPostfix", ctx.postfix)("tuiTextfieldPrefix", ctx.prefix);
          ɵɵtwoWayProperty("ngModel", ctx.textfieldValue);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.showValueContent);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.readOnly || ctx.computedDisabled)("keySteps", ctx.computeKeySteps(ctx.keySteps, ctx.min, ctx.max))("max", ctx.computedSteps)("ngModel", ctx.value)("ngModelOptions", ɵɵpureFunction0(23, _c120))("segments", ctx.segments);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiInputNumberComponent, TuiInputNumberDirective, TuiNumberFormat, TuiTextfieldPrefixDirective, TuiTextfieldPostfixDirective, TuiSliderComponent, TuiSliderKeySteps],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;block-size:-webkit-max-content;block-size:max-content;isolation:isolate;border-radius:var(--tui-radius);--tui-radius: var(--tui-radius-m)}[data-size=l][_nghost-%COMP%]{--tui-radius: var(--tui-radius-l)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}tui-input-number[_ngcontent-%COMP%]{border-radius:inherit}input[type=range][_ngcontent-%COMP%]{position:absolute;top:100%;left:calc(var(--tui-radius) / 2);right:0;inline-size:calc(100% - calc(var(--tui-radius) / 2));box-sizing:border-box;block-size:1rem;margin:-.5625rem 0 0;border-start-start-radius:0;border-end-start-radius:calc(var(--tui-radius) * 10) calc(var(--tui-radius) * 2)}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputSliderComponent.prototype, "computeKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputSliderComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-slider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputSliderComponent), tuiAsControl2(TuiInputSliderComponent), tuiSliderOptionsProvider({
        trackColor: "transparent"
      }), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "controller.size",
        "[class._label-outside]": "controller.labelOutside"
      },
      template: '<tui-input-number\n    [disabled]="computedDisabled"\n    [max]="max"\n    [min]="min"\n    [ngModelOptions]="{standalone: true}"\n    [pseudoActive]="pseudoActive"\n    [pseudoFocus]="computedFocused"\n    [pseudoHover]="pseudoHover"\n    [pseudoInvalid]="pseudoInvalid"\n    [readOnly]="readOnly"\n    [tuiNumberFormat]="{precision}"\n    [tuiTextfieldPostfix]="postfix"\n    [tuiTextfieldPrefix]="prefix"\n    [(ngModel)]="textfieldValue"\n    (focusedChange)="onFocused($event)"\n    (keydown.arrowDown.prevent)="onVerticalArrowKeyDown(-1)"\n    (keydown.arrowUp.prevent)="onVerticalArrowKeyDown(1)"\n    (ngModelChange)="safelyUpdateValue($event)"\n>\n    <ng-content />\n    <div\n        *ngIf="showValueContent"\n        automation-id="tui-input-slider__value-content"\n        ngProjectAs="tuiContent"\n    >\n        <ng-container *polymorpheusOutlet="valueContent as text; context: {$implicit: value}">\n            {{ text }}\n        </ng-container>\n    </div>\n</tui-input-number>\n\n<input\n    tabIndex="-1"\n    tuiSlider\n    type="range"\n    [disabled]="readOnly || computedDisabled"\n    [keySteps]="computeKeySteps(keySteps, min, max)"\n    [max]="computedSteps"\n    [ngModel]="value"\n    [ngModelOptions]="{standalone: true}"\n    [segments]="segments"\n    (click)="focusTextInput()"\n    (ngModelChange)="onSliderChange($event)"\n/>\n',
      styles: [":host{position:relative;display:block;block-size:-webkit-max-content;block-size:max-content;isolation:isolate;border-radius:var(--tui-radius);--tui-radius: var(--tui-radius-m)}:host[data-size=l]{--tui-radius: var(--tui-radius-l)}:host :host-context(*:disabled){pointer-events:none}tui-input-number{border-radius:inherit}input[type=range]{position:absolute;top:100%;left:calc(var(--tui-radius) / 2);right:0;inline-size:calc(100% - calc(var(--tui-radius) / 2));box-sizing:border-box;block-size:1rem;margin:-.5625rem 0 0;border-start-start-radius:0;border-end-start-radius:calc(var(--tui-radius) * 10) calc(var(--tui-radius) * 2)}\n"]
    }]
  }], null, {
    inputNumberRef: [{
      type: ViewChild,
      args: [TuiInputNumberComponent]
    }],
    sliderRef: [{
      type: ViewChild,
      args: [TuiSliderComponent, {
        read: ElementRef
      }]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    quantum: [{
      type: Input
    }],
    steps: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    keySteps: [{
      type: Input
    }],
    valueContent: [{
      type: Input
    }],
    computeKeySteps: []
  });
})();
var TuiInputSliderModule = class _TuiInputSliderModule {
  static {
    this.ɵfac = function TuiInputSliderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputSliderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputSliderModule,
      declarations: [TuiInputSliderComponent],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiInputNumberModule, TuiNumberFormat, TuiTextfieldControllerModule, TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeySteps, TuiSliderReadonly],
      exports: [TuiInputSliderComponent, TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeySteps, TuiSliderReadonly]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiInputNumberModule, TuiTextfieldControllerModule, TuiSliderComponent, TuiSliderThumbLabel]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputSliderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiInputNumberModule, TuiNumberFormat, TuiTextfieldControllerModule, ...TuiSlider],
      declarations: [TuiInputSliderComponent],
      exports: [TuiInputSliderComponent, ...TuiSlider]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-time.mjs
var _c022 = ["tuiTime", ""];
function TuiNativeTimeComponent_datalist_0_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "option", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("value", item_r1);
  }
}
function TuiNativeTimeComponent_datalist_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "datalist", 1);
    ɵɵtemplate(1, TuiNativeTimeComponent_datalist_0_option_1_Template, 1, 1, "option", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.autoId);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
var _c121 = ["*"];
var _c214 = (a0) => ({
  $implicit: a0
});
function TuiInputTimeComponent_ng_template_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiInputTimeComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 5);
    ɵɵtemplate(1, TuiInputTimeComponent_ng_template_5_button_1_Template, 2, 3, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("size", ctx_r2.itemSize);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.filtered);
  }
}
function TuiInputTimeComponent_ng_template_7_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 10);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-icon_small", ctx_r2.size === "s");
    ɵɵproperty("icon", src_r4.toString());
  }
}
function TuiInputTimeComponent_ng_template_7_input_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 11);
  }
}
function TuiInputTimeComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiInputTimeComponent_ng_template_7_tui_icon_0_Template, 1, 3, "tui-icon", 8)(1, TuiInputTimeComponent_ng_template_7_input_1_Template, 1, 0, "input", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction1(3, _c214, ctx_r2.size));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showNativePicker);
  }
}
var MAX_TIME_VALUES = {
  HH: 23,
  MM: 59,
  SS: 59,
  MS: 999
};
var TUI_INPUT_TIME_DEFAULT_OPTIONS = {
  icon: () => "@tui.clock",
  mode: "HH:MM",
  maxValues: MAX_TIME_VALUES,
  itemSize: "m",
  nativePicker: false
};
var TUI_INPUT_TIME_OPTIONS = tuiCreateToken(TUI_INPUT_TIME_DEFAULT_OPTIONS);
function tuiInputTimeOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_TIME_OPTIONS, options, TUI_INPUT_TIME_DEFAULT_OPTIONS);
}
var TuiInputTimeDirective = class _TuiInputTimeDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.computedValue;
  }
  get mode() {
    return this.host.mode;
  }
  get items() {
    return this.host.items;
  }
  onValueChange(value) {
    if (!value) {
      this.host.nativeValue = "";
    }
    this.host.onValueChange(value);
  }
  process(input) {
    input.inputMode = "numeric";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputTimeDirective_BaseFactory;
      return function TuiInputTimeDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputTimeDirective_BaseFactory || (ɵTuiInputTimeDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputTimeDirective)))(__ngFactoryType__ || _TuiInputTimeDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputTimeDirective,
      selectors: [["tui-input-time"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputTimeDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputTimeDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-time",
      providers: [tuiAsTextfieldHost(TuiInputTimeDirective)]
    }]
  }], null, null);
})();
var TuiNativeTimeComponent = class _TuiNativeTimeComponent {
  constructor() {
    this.host = inject(TuiInputTimeDirective);
    this.autoId = tuiInjectId();
  }
  get items() {
    return this.host.items.map((item) => item.toString(this.host.mode));
  }
  get value() {
    return this.host.value.length === this.host.mode.length ? this.host.value : "";
  }
  get step() {
    switch (this.host.mode) {
      case "HH:MM:SS":
        return 1;
      case "HH:MM:SS.MSS":
        return 1e-3;
      default:
        return 60;
    }
  }
  onChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = function TuiNativeTimeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeTimeComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNativeTimeComponent,
      selectors: [["input", "tuiTime", ""]],
      hostAttrs: ["type", "time"],
      hostVars: 4,
      hostBindings: function TuiNativeTimeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change.stop", function TuiNativeTimeComponent_change_stop_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("click.stop.silent", function TuiNativeTimeComponent_click_stop_silent_HostBindingHandler() {
            return 0;
          })("mousedown.stop.silent", function TuiNativeTimeComponent_mousedown_stop_silent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", -1)("value", ctx.value)("step", ctx.step);
          ɵɵattribute("list", ctx.autoId);
        }
      },
      attrs: _c022,
      decls: 1,
      vars: 1,
      consts: [[3, "id", 4, "ngIf"], [3, "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function TuiNativeTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiNativeTimeComponent_datalist_0_Template, 2, 2, "datalist", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.items.length);
        }
      },
      dependencies: [NgForOf, NgIf],
      styles: ["[_nghost-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeTimeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "input[tuiTime]",
      template: `
        <datalist
            *ngIf="items.length"
            [id]="autoId"
        >
            <option
                *ngFor="let item of items"
                value="{{ item }}"
            ></option>
        </datalist>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        type: "time",
        "[attr.list]": "autoId",
        "[tabIndex]": "-1",
        "[value]": "value",
        "[step]": "step",
        "(change.stop)": "onChange($event.target.value)",
        "(click.stop.silent)": "0",
        "(mousedown.stop.silent)": "0"
      },
      styles: [":host{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;pointer-events:auto;font-size:2rem}\n"]
    }]
  }], null, null);
})();
var TuiInputTimeComponent = class _TuiInputTimeComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.timeTexts$ = inject(TUI_TIME_TEXTS);
    this.options = inject(TUI_INPUT_TIME_OPTIONS);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.isIOS = inject(TUI_IS_IOS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.valueTransformer = inject(TUI_TIME_VALUE_TRANSFORMER, {
      optional: true
    });
    this.open = false;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.items = [];
    this.itemSize = this.options.itemSize;
    this.strict = false;
    this.mode = this.options.mode;
    this.identityMatcher = (controlValue, dropdownValue) => controlValue instanceof TuiTime && controlValue.valueOf() === dropdownValue.valueOf();
  }
  get size() {
    return this.textfieldSize.size;
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement ?? null;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement);
  }
  get computedValue() {
    return this.value ? this.value.toString(this.mode) : this.nativeValue;
  }
  get nativeValue() {
    return this.nativeFocusableElement?.value || "";
  }
  set nativeValue(value) {
    if (!this.nativeFocusableElement) {
      return;
    }
    this.nativeFocusableElement.value = value;
  }
  checkOption(option) {
    if (option.valueOf() === this.value?.valueOf()) {
      this.value = option;
    }
  }
  handleOption(item) {
    this.focusInput();
    this.value = item;
  }
  writeValue(value) {
    super.writeValue(value);
    this.nativeValue = value ? this.computedValue : "";
  }
  onValueChange(value) {
    this.open = !!this.items.length;
    if (this.control) {
      this.control.updateValueAndValidity({
        emitEvent: false
      });
    }
    const match = this.getMatch(value);
    if (match !== void 0) {
      this.value = match;
      return;
    }
    if (value.length !== this.mode.length) {
      this.value = null;
      return;
    }
    const time = TuiTime.fromString(value);
    this.value = this.strict ? this.findNearestTimeFromItems(time) : time;
  }
  get canOpen() {
    return this.interactive && !!this.filtered.length;
  }
  get filtered() {
    return this.filter(this.items, this.mode, this.computedSearch);
  }
  get showNativePicker() {
    return this.nativePicker && (!this.isIOS || this.mode === "HH:MM" && !this.items.length);
  }
  get nativeDatalist() {
    return this.nativePicker && !this.isIOS;
  }
  get maskOptions() {
    return this.calculateMask(this.mode, this.readOnly);
  }
  get computedSearch() {
    return this.computedValue.length !== this.mode.length ? this.computedValue : "";
  }
  get innerPseudoFocused() {
    if (this.pseudoFocus === false) {
      return false;
    }
    if (this.open && this.canOpen || this.computedFocused) {
      return true;
    }
    return null;
  }
  get icon() {
    return this.options.icon;
  }
  getFiller$(mode) {
    return this.timeTexts$.pipe(map((texts) => texts[mode]));
  }
  onFocused(focused) {
    this.updateFocused(focused);
    if (focused || this.value !== null || this.nativeValue === "") {
      return;
    }
    this.value = TuiTime.fromString(this.nativeValue);
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.nativeValue.endsWith(".") || this.nativeValue.endsWith(":")) {
        this.nativeValue = this.nativeValue.slice(0, -1);
      }
    });
  }
  onOpen(open) {
    this.open = open;
  }
  get nativePicker() {
    return !!this.options.nativePicker && this.isMobile;
  }
  calculateMask(mode, readOnly) {
    const {
      HH,
      MM,
      SS,
      MS
    } = this.options.maxValues;
    return maskitoTimeOptionsGenerator({
      mode,
      step: readOnly ? 0 : 1,
      // TODO(v5): timeSegmentMaxValues: this.options.timeSegmentMaxValues
      timeSegmentMaxValues: {
        hours: mode.includes("AA") ? 12 : HH,
        minutes: MM,
        seconds: SS,
        milliseconds: MS
      }
    });
  }
  filter(items, mode, search) {
    return items.filter((item) => item.toString(mode).includes(search));
  }
  findNearestTimeFromItems(value) {
    return this.items.reduce((previous, current) => Math.abs(current.valueOf() - value.valueOf()) < Math.abs(previous.valueOf() - value.valueOf()) ? current : previous);
  }
  getMatch(value) {
    return this.items.find((item) => TUI_STRICT_MATCHER(item, value));
  }
  focusInput(preventScroll = false) {
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus({
        preventScroll
      });
      this.open = false;
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputTimeComponent_BaseFactory;
      return function TuiInputTimeComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputTimeComponent_BaseFactory || (ɵTuiInputTimeComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputTimeComponent)))(__ngFactoryType__ || _TuiInputTimeComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputTimeComponent,
      selectors: [["tui-input-time"]],
      viewQuery: function TuiInputTimeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputTimeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiInputTimeComponent_click_HostBindingHandler() {
            return ctx.open = !ctx.open;
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        disabledItemHandler: "disabledItemHandler",
        items: "items",
        itemSize: "itemSize",
        strict: "strict",
        mode: "mode"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputTimeComponent), tuiAsControl2(_TuiInputTimeComponent), tuiAsDataListHost(_TuiInputTimeComponent), tuiAsOptionContent(TUI_SELECT_OPTION)]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c121,
      decls: 9,
      vars: 17,
      consts: [["dropdownContent", ""], ["iconContent", ""], ["tuiDropdownOpenMonitor", "", 1, "t-wrapper", 3, "tuiActiveZoneChange", "tuiDropdownOpenChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["tuiValueAccessor", "", 1, "t-textfield", 3, "valueChange", "disabled", "focusable", "invalid", "maskito", "nativeId", "pseudoActive", "pseudoFocus", "pseudoHover", "readOnly", "tuiTextfieldFiller", "tuiTextfieldIcon", "value"], ["inputmode", "numeric", "tuiTextfieldLegacy", ""], ["automation-id", "tui-input-time__dropdown", 3, "size"], ["automation-id", "tui-input-time__item", "tuiOption", "", "type", "button", 3, "disabled", "value", 4, "ngFor", "ngForOf"], ["automation-id", "tui-input-time__item", "tuiOption", "", "type", "button", 3, "disabled", "value"], ["tuiAppearance", "icon", 3, "t-icon_small", "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiTime", "", 4, "ngIf"], ["tuiAppearance", "icon", 3, "icon"], ["tuiTime", ""]],
      template: function TuiInputTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("tuiActiveZoneChange", function TuiInputTimeComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          })("tuiDropdownOpenChange", function TuiInputTimeComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpen($event));
          });
          ɵɵelementStart(1, "tui-primitive-textfield", 3);
          ɵɵpipe(2, "async");
          ɵɵlistener("valueChange", function TuiInputTimeComponent_Template_tui_primitive_textfield_valueChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(3);
          ɵɵelement(4, "input", 4);
          ɵɵelementEnd()();
          ɵɵtemplate(5, TuiInputTimeComponent_ng_template_5_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, TuiInputTimeComponent_ng_template_7_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const dropdownContent_r5 = ɵɵreference(6);
          const iconContent_r6 = ɵɵreference(8);
          ɵɵproperty("tuiDropdown", dropdownContent_r5)("tuiDropdownEnabled", ctx.canOpen && !ctx.nativeDatalist)("tuiDropdownOpen", ctx.canOpen && ctx.open);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled)("focusable", ctx.focusable)("invalid", ctx.computedInvalid)("maskito", ctx.maskOptions)("nativeId", ctx.nativeId)("pseudoActive", ctx.pseudoActive)("pseudoFocus", ctx.innerPseudoFocused)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiTextfieldFiller", ɵɵpipeBind1(2, 15, ctx.getFiller$(ctx.mode)) || "")("tuiTextfieldIcon", iconContent_r6)("value", ctx.computedValue);
        }
      },
      dependencies: [NgForOf, NgIf, MaskitoDirective, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiTextfieldComponent, TuiValueAccessorDirective, TuiTextfieldIconDirective, TuiTextfieldFillerDirective, PolymorpheusOutlet, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownDirective, TuiDropdownOpen, TuiDataListComponent, TuiOption, TuiNativeTimeComponent, AsyncPipe],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputTimeComponent.prototype, "getFiller$", null);
__decorate([tuiPure], TuiInputTimeComponent.prototype, "calculateMask", null);
__decorate([tuiPure], TuiInputTimeComponent.prototype, "filter", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputTimeComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-time",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputTimeComponent), tuiAsControl2(TuiInputTimeComponent), tuiAsDataListHost(TuiInputTimeComponent), tuiAsOptionContent(TUI_SELECT_OPTION)],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "(click)": "open = !open",
        "[attr.data-size]": "size"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-wrapper"
    [tuiDropdown]="dropdownContent"
    [tuiDropdownEnabled]="canOpen && !nativeDatalist"
    [tuiDropdownOpen]="canOpen && open"
    (tuiActiveZoneChange)="onFocused($event)"
    (tuiDropdownOpenChange)="onOpen($event)"
>
    <tui-primitive-textfield
        tuiValueAccessor
        class="t-textfield"
        [disabled]="disabled"
        [focusable]="focusable"
        [invalid]="computedInvalid"
        [maskito]="maskOptions"
        [nativeId]="nativeId"
        [pseudoActive]="pseudoActive"
        [pseudoFocus]="innerPseudoFocused"
        [pseudoHover]="pseudoHover"
        [readOnly]="readOnly"
        [tuiTextfieldFiller]="(getFiller$(mode) | async) || ''"
        [tuiTextfieldIcon]="iconContent"
        [value]="computedValue"
        (valueChange)="onValueChange($event)"
    >
        <ng-content />
        <input
            inputmode="numeric"
            tuiTextfieldLegacy
        />
    </tui-primitive-textfield>
</div>
<ng-template #dropdownContent>
    <tui-data-list
        automation-id="tui-input-time__dropdown"
        [size]="itemSize"
    >
        <button
            *ngFor="let item of filtered"
            automation-id="tui-input-time__item"
            tuiOption
            type="button"
            [disabled]="disabledItemHandler(item)"
            [value]="item"
        >
            {{ item }}
        </button>
    </tui-data-list>
</ng-template>

<ng-template #iconContent>
    <tui-icon
        *polymorpheusOutlet="icon as src; context: {$implicit: size}"
        tuiAppearance="icon"
        [class.t-icon_small]="size === 's'"
        [icon]="src.toString()"
    />
    <input
        *ngIf="showNativePicker"
        tuiTime
    />
</ng-template>
`,
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-wrapper{display:block;border-radius:inherit}.t-textfield{border-radius:inherit;text-align:inherit}.t-icon_small{border-width:.25rem}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    disabledItemHandler: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    strict: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    getFiller$: [],
    calculateMask: [],
    filter: []
  });
})();
var TuiInputTimeModule = class _TuiInputTimeModule {
  static {
    this.ɵfac = function TuiInputTimeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputTimeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputTimeModule,
      declarations: [TuiInputTimeComponent, TuiNativeTimeComponent, TuiInputTimeDirective],
      imports: [CommonModule, MaskitoDirective, TuiSelectOptionModule, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup],
      exports: [TuiInputTimeComponent, TuiInputTimeDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiSelectOptionModule, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, TuiIcon, TuiDropdownComponent, TuiDataListComponent, TuiOption]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputTimeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MaskitoDirective, TuiSelectOptionModule, TuiPrimitiveTextfieldModule, TuiValueAccessorModule, TuiTextfieldControllerModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiLegacyDropdownOpenMonitorDirective, TuiIcon, TuiAppearance, ...TuiDropdown, ...TuiDataList],
      declarations: [TuiInputTimeComponent, TuiNativeTimeComponent, TuiInputTimeDirective],
      exports: [TuiInputTimeComponent, TuiInputTimeDirective, ...TuiDropdown, ...TuiDataList]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-input-year.mjs
var _c023 = ["*", [["input"]]];
var _c122 = ["*", "input"];
function TuiInputYearComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "tui-scrollbar", 3)(2, "tui-calendar-year", 4);
    ɵɵlistener("mousedown.prevent.silent", function TuiInputYearComponent_ng_template_3_Template_tui_calendar_year_mousedown_prevent_silent_2_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    })("yearClick", function TuiInputYearComponent_ng_template_3_Template_tui_calendar_year_yearClick_2_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onYearClick($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("disabledItemHandler", ctx_r2.disabledItemHandler)("initialItem", ctx_r2.value || ctx_r2.initialItem)("max", ctx_r2.max)("min", ctx_r2.min)("value", ctx_r2.value === null ? null : ctx_r2.value);
  }
}
var UP_TO_4_DIGITS_REG = /^\d{0,4}$/;
var TuiInputYearComponent = class _TuiInputYearComponent extends AbstractTuiNullableControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_INPUT_DATE_OPTIONS);
    this.textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    this.open = false;
    this.initialItem = (/* @__PURE__ */ new Date()).getFullYear();
    this.min = this.options.min.year;
    this.max = this.options.max.year;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.nativeValue = "";
  }
  get nativeFocusableElement() {
    return this.textfield?.nativeFocusableElement || null;
  }
  get focused() {
    return !!this.textfield?.focused;
  }
  onValueChange(value) {
    this.value = value ? Number(value) : null;
  }
  writeValue(value) {
    super.writeValue(value);
    this.updateNativeValue(value);
  }
  get size() {
    return this.textfieldSize.size;
  }
  get calendarIcon() {
    return this.options.icon;
  }
  getMaskOptions(min, max) {
    return __spreadProps(__spreadValues({}, maskitoNumberOptionsGenerator({
      min: min ?? MIN_YEAR,
      max: max ?? MAX_YEAR,
      thousandSeparator: ""
    })), {
      mask: UP_TO_4_DIGITS_REG
    });
  }
  onYearClick(year) {
    this.value = year;
    this.updateNativeValue(year);
    this.onOpenChange(false);
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  onOpenChange(open) {
    this.open = open;
  }
  toggle() {
    this.open = !this.open;
  }
  updateNativeValue(value) {
    this.nativeValue = value?.toString() || "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputYearComponent_BaseFactory;
      return function TuiInputYearComponent_Factory(__ngFactoryType__) {
        return (ɵTuiInputYearComponent_BaseFactory || (ɵTuiInputYearComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiInputYearComponent)))(__ngFactoryType__ || _TuiInputYearComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputYearComponent,
      selectors: [["tui-input-year"]],
      viewQuery: function TuiInputYearComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiPrimitiveTextfieldComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputYearComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiInputYearComponent), tuiAsControl2(_TuiInputYearComponent)]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c122,
      decls: 5,
      vars: 12,
      consts: [["dropdown", ""], [1, "t-textfield", 3, "valueChange", "click", "focusedChange", "tuiDropdownOpenChange", "disabled", "invalid", "maskito", "nativeId", "pseudoFocus", "pseudoHover", "readOnly", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen", "tuiTextfieldIcon", "value"], [1, "t-container"], [1, "t-scrollbar"], [3, "mousedown.prevent.silent", "yearClick", "disabledItemHandler", "initialItem", "max", "min", "value"]],
      template: function TuiInputYearComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c023);
          ɵɵelementStart(0, "tui-primitive-textfield", 1);
          ɵɵtwoWayListener("valueChange", function TuiInputYearComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.nativeValue, $event) || (ctx.nativeValue = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("click", function TuiInputYearComponent_Template_tui_primitive_textfield_click_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggle());
          })("focusedChange", function TuiInputYearComponent_Template_tui_primitive_textfield_focusedChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onFocused($event));
          })("tuiDropdownOpenChange", function TuiInputYearComponent_Template_tui_primitive_textfield_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onOpenChange($event));
          })("valueChange", function TuiInputYearComponent_Template_tui_primitive_textfield_valueChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵprojection(1);
          ɵɵprojection(2, 1, ["ngProjectAs", "input", 5, ["input"]]);
          ɵɵelementEnd();
          ɵɵtemplate(3, TuiInputYearComponent_ng_template_3_Template, 3, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const dropdown_r4 = ɵɵreference(4);
          ɵɵproperty("disabled", ctx.computedDisabled)("invalid", ctx.computedInvalid)("maskito", ctx.getMaskOptions(ctx.min, ctx.max))("nativeId", ctx.nativeId)("pseudoFocus", ctx.pseudoFocus)("pseudoHover", ctx.pseudoHover)("readOnly", ctx.readOnly)("tuiDropdown", dropdown_r4)("tuiDropdownEnabled", ctx.interactive)("tuiDropdownOpen", ctx.open && ctx.interactive)("tuiTextfieldIcon", ctx.calendarIcon);
          ɵɵtwoWayProperty("value", ctx.nativeValue);
        }
      },
      dependencies: [MaskitoDirective, TuiDropdownOpen, TuiPrimitiveTextfieldComponent, TuiPrimitiveTextfieldDirective, TuiScrollbar, TuiCalendarYear, TuiTextfieldIconDirective, TuiDropdownDirective],
      styles: ["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-container[_ngcontent-%COMP%]{inline-size:15.75rem;padding:1rem 1.125rem}.t-scrollbar[_ngcontent-%COMP%]{max-block-size:18.25rem;inline-size:16.875rem}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiInputYearComponent.prototype, "getMaskOptions", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputYearComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-input-year",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiInputYearComponent), tuiAsControl2(TuiInputYearComponent)],
      host: {
        "[attr.data-size]": "size"
      },
      template: '<tui-primitive-textfield\n    class="t-textfield"\n    [disabled]="computedDisabled"\n    [invalid]="computedInvalid"\n    [maskito]="getMaskOptions(min, max)"\n    [nativeId]="nativeId"\n    [pseudoFocus]="pseudoFocus"\n    [pseudoHover]="pseudoHover"\n    [readOnly]="readOnly"\n    [tuiDropdown]="dropdown"\n    [tuiDropdownEnabled]="interactive"\n    [tuiDropdownOpen]="open && interactive"\n    [tuiTextfieldIcon]="calendarIcon"\n    [(value)]="nativeValue"\n    (click)="toggle()"\n    (focusedChange)="onFocused($event)"\n    (tuiDropdownOpenChange)="onOpenChange($event)"\n    (valueChange)="onValueChange($event)"\n>\n    <ng-content />\n    <ng-content\n        ngProjectAs="input"\n        select="input"\n    />\n</tui-primitive-textfield>\n\n<ng-template #dropdown>\n    <div class="t-container">\n        <tui-scrollbar class="t-scrollbar">\n            <tui-calendar-year\n                [disabledItemHandler]="disabledItemHandler"\n                [initialItem]="value || initialItem"\n                [max]="max"\n                [min]="min"\n                [value]="value === null ? null : value"\n                (mousedown.prevent.silent)="(0)"\n                (yearClick)="onYearClick($event)"\n            />\n        </tui-scrollbar>\n    </div>\n</ng-template>\n',
      styles: [":host{display:block;border-radius:var(--tui-radius-m);text-align:start}:host :host-context(*:disabled){pointer-events:none}.t-container{inline-size:15.75rem;padding:1rem 1.125rem}.t-scrollbar{max-block-size:18.25rem;inline-size:16.875rem}.t-textfield{border-radius:inherit;text-align:inherit}\n"]
    }]
  }], null, {
    textfield: [{
      type: ViewChild,
      args: [TuiPrimitiveTextfieldComponent]
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    getMaskOptions: []
  });
})();
var TuiInputYearDirective = class _TuiInputYearDirective extends AbstractTuiTextfieldHost {
  get value() {
    return this.host.nativeValue;
  }
  onValueChange(value) {
    this.host.onValueChange(value);
    this.host.nativeValue = value;
  }
  process(input) {
    input.inputMode = "numeric";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputYearDirective_BaseFactory;
      return function TuiInputYearDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputYearDirective_BaseFactory || (ɵTuiInputYearDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputYearDirective)))(__ngFactoryType__ || _TuiInputYearDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputYearDirective,
      selectors: [["tui-input-year"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiInputYearDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputYearDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-input-year",
      providers: [tuiAsTextfieldHost(TuiInputYearDirective)]
    }]
  }], null, null);
})();
var TuiInputYearModule = class _TuiInputYearModule {
  static {
    this.ɵfac = function TuiInputYearModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputYearModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiInputYearModule,
      declarations: [TuiInputYearComponent, TuiInputYearDirective],
      imports: [MaskitoDirective, TuiDropdownOpen, TuiPrimitiveTextfieldModule, TuiScrollbar, TuiCalendarYear, TuiTextfieldControllerModule, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection],
      exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TuiPrimitiveTextfieldModule, TuiScrollbar, TuiCalendarYear, TuiTextfieldControllerModule, TuiDropdownComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputYearModule, [{
    type: NgModule,
    args: [{
      imports: [MaskitoDirective, TuiDropdownOpen, TuiPrimitiveTextfieldModule, TuiScrollbar, TuiCalendarYear, TuiTextfieldControllerModule, ...TuiDropdown],
      declarations: [TuiInputYearComponent, TuiInputYearDirective],
      exports: [TuiInputYearComponent, TuiInputYearDirective, TuiTextfieldComponent, ...TuiDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-island.mjs
var TuiIslandDirective = class _TuiIslandDirective {
  constructor() {
    this.size = "m";
    this.textAlign = "left";
    this.hoverable = false;
    this.transparent = false;
  }
  get sizeS() {
    return this.size === "s";
  }
  get sizeM() {
    return this.size === "m";
  }
  get sizeL() {
    return this.size === "l";
  }
  get textAlignLeft() {
    return this.textAlign === "left";
  }
  get textAlignCenter() {
    return this.textAlign === "center";
  }
  get textAlignRight() {
    return this.textAlign === "right";
  }
  static {
    this.ɵfac = function TuiIslandDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIslandDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIslandDirective,
      selectors: [["tui-island"], ["a", "tuiIsland", ""]],
      hostAttrs: [1, "tui-island"],
      hostVars: 16,
      hostBindings: function TuiIslandDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("tui-island_hoverable", ctx.hoverable)("tui-island_transparent", ctx.transparent)("tui-island_size_s", ctx.sizeS)("tui-island_size_m", ctx.sizeM)("tui-island_size_l", ctx.sizeL)("tui-island_text-align_left", ctx.textAlignLeft)("tui-island_text-align_center", ctx.textAlignCenter)("tui-island_text-align_right", ctx.textAlignRight);
        }
      },
      inputs: {
        size: "size",
        textAlign: "textAlign",
        hoverable: "hoverable",
        transparent: "transparent"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIslandDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-island, a[tuiIsland]",
      host: {
        class: "tui-island",
        "[class.tui-island_hoverable]": "hoverable",
        "[class.tui-island_transparent]": "transparent",
        "[class.tui-island_size_s]": "sizeS",
        "[class.tui-island_size_m]": "sizeM",
        "[class.tui-island_size_l]": "sizeL",
        "[class.tui-island_text-align_left]": "textAlignLeft",
        "[class.tui-island_text-align_center]": "textAlignCenter",
        "[class.tui-island_text-align_right]": "textAlignRight"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }],
    textAlign: [{
      type: Input
    }],
    hoverable: [{
      type: Input
    }],
    transparent: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-multi-select-option.mjs
var TuiMultiSelectOptionComponent = class _TuiMultiSelectOptionComponent extends TuiSelectOptionComponent {
  get size() {
    return this.dataList?.size === "l" ? "m" : "s";
  }
  get selected() {
    const {
      value
    } = this.option;
    return tuiIsPresent(value) && tuiIsPresent(this.value) && this.value.some((item) => this.matcher(item, value));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiMultiSelectOptionComponent_BaseFactory;
      return function TuiMultiSelectOptionComponent_Factory(__ngFactoryType__) {
        return (ɵTuiMultiSelectOptionComponent_BaseFactory || (ɵTuiMultiSelectOptionComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiMultiSelectOptionComponent)))(__ngFactoryType__ || _TuiMultiSelectOptionComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMultiSelectOptionComponent,
      selectors: [["tui-multi-select-option"]],
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 5,
      consts: [["tuiCheckbox", "", "type", "checkbox", 1, "t-checkbox", 3, "checked", "size"], [3, "ngTemplateOutlet"]],
      template: function TuiMultiSelectOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "input", 0);
          ɵɵpipe(1, "async");
          ɵɵelementContainer(2, 1);
        }
        if (rf & 2) {
          ɵɵproperty("checked", ɵɵpipeBind1(1, 3, ctx.selected$))("size", ctx.size);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.context.$implicit);
        }
      },
      dependencies: [NgTemplateOutlet, TuiCheckbox, AsyncPipe],
      styles: ["@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;animation:_ngcontent-%COMP%_retrigger 1s;overflow:hidden}.t-checkbox[_ngcontent-%COMP%]{margin-right:.75rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectOptionComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-multi-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<input\n    tuiCheckbox\n    type="checkbox"\n    class="t-checkbox"\n    [checked]="selected$ | async"\n    [size]="size"\n/>\n<ng-container [ngTemplateOutlet]="context.$implicit" />\n',
      styles: ["@keyframes retrigger{0%{left:1px}to{left:2px}}:host{display:flex;flex:1;align-items:center;animation:retrigger 1s;overflow:hidden}.t-checkbox{margin-right:.75rem}\n"]
    }]
  }], null, null);
})();
var TuiMultiSelectOptionModule = class _TuiMultiSelectOptionModule {
  static {
    this.ɵfac = function TuiMultiSelectOptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMultiSelectOptionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiMultiSelectOptionModule,
      declarations: [TuiMultiSelectOptionComponent],
      imports: [CommonModule, TuiCheckbox],
      exports: [TuiMultiSelectOptionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiCheckbox]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectOptionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TuiCheckbox],
      declarations: [TuiMultiSelectOptionComponent],
      exports: [TuiMultiSelectOptionComponent]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-multi-select.mjs
var _c024 = ["*", [["select"]]];
var _c123 = ["*", "select"];
var _c215 = () => ({
  standalone: true
});
var _c37 = (a0) => ({
  $implicit: a0
});
function TuiMultiSelectComponent_ng_template_7_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1, ["*ngIf", "isMobile"]);
  }
}
function TuiMultiSelectComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiMultiSelectComponent_ng_template_7_ng_content_0_Template, 1, 0, "ng-content", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.isMobile);
  }
}
function TuiMultiSelectComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 8);
  }
}
function TuiMultiSelectComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r4, " ");
  }
}
function TuiMultiSelectComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, TuiMultiSelectComponent_div_10_span_1_Template, 2, 1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const inputTag_r2 = ɵɵreference(2);
    ɵɵclassProp("t-content_fullsize", inputTag_r2.labelOutside);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.valueContent)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c37, ctx_r2.value));
  }
}
function TuiMultiSelectComponent_ng_template_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r6 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r6, " ");
  }
}
function TuiMultiSelectComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵlistener("mousedown.prevent.silent", function TuiMultiSelectComponent_ng_template_11_Template_div_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtemplate(1, TuiMultiSelectComponent_ng_template_11_ng_container_1_Template, 2, 1, "ng-container", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-arrow_native-dropdown", ctx_r2.nativeDropdownMode);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.arrow);
  }
}
var _c45 = ["tuiMultiSelectGroup", ""];
var _c54 = ["*"];
function TuiMultiSelectGroupComponent_span_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function TuiMultiSelectGroupComponent_span_0_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const value_r2 = ɵɵnextContext().tuiLet;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(value_r2));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const value_r2 = ɵɵnextContext().tuiLet;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", !!ɵɵpipeBind1(1, 2, ctx_r2.disabled$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (tmp_4_0 = ɵɵpipeBind1(3, 4, ctx_r2.multiSelectTexts$)) == null ? null : tmp_4_0[value_r2 ? "none" : "all"], " ");
  }
}
function TuiMultiSelectGroupComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1)(1, "span", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiMultiSelectGroupComponent_span_0_button_3_Template, 4, 6, "button", 3);
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.label);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.label && !ɵɵpipeBind1(4, 2, ctx_r2.empty$));
  }
}
var _c63 = ["multiple", "", "tuiSelect", ""];
function TuiNativeMultiSelectComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiNativeMultiSelectComponent_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-data-list-wrapper", 3);
    ɵɵpipe(1, "tuiStringifyContent");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r0.disabledItemHandler || ctx_r0.host.disableItemHandler)("itemContent", ɵɵpipeBind1(1, 3, ctx_r0.stringify))("items", ctx_r0.items);
  }
}
function TuiNativeMultiSelectComponent_option_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵpipe(1, "tuiMapper");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r0.disabledItemHandler ? ctx_r0.disabledItemHandler(option_r2) : ctx_r0.host.disableItemHandler(option_r2))("selected", ɵɵpipeBind3(1, 4, option_r2, ctx_r0.selectedMapper, ctx_r0.control.value))("value", ctx_r0.stringify(option_r2));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.stringify(option_r2), "\n");
  }
}
var _c72 = ["multiple", "", "tuiSelect", "", "labels", ""];
function TuiNativeMultiSelectGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiNativeMultiSelectGroupComponent_tui_data_list_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-data-list-wrapper", 3);
    ɵɵpipe(1, "tuiStringifyContent");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r0.disabledItemHandler || ctx_r0.host.disableItemHandler)("itemContent", ɵɵpipeBind1(1, 4, ctx_r0.stringify))("items", ctx_r0.items)("labels", ctx_r0.labels);
  }
}
function TuiNativeMultiSelectGroupComponent_optgroup_3_option_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 6);
    ɵɵpipe(1, "tuiMapper");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r0.disabledItemHandler ? ctx_r0.disabledItemHandler(option_r2) : ctx_r0.host.disableItemHandler(option_r2))("selected", ɵɵpipeBind3(1, 4, option_r2, ctx_r0.selectedMapper, ctx_r0.control.value))("value", ctx_r0.stringify(option_r2));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.stringify(option_r2), " ");
  }
}
function TuiNativeMultiSelectGroupComponent_optgroup_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "optgroup", 4);
    ɵɵtemplate(1, TuiNativeMultiSelectGroupComponent_optgroup_3_option_1_Template, 3, 8, "option", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("label", ctx_r0.labels[index_r4]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var _c82 = "[_nghost-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}";
var TUI_MULTI_SELECT_DEFAULT_OPTIONS = {
  rows: Infinity,
  valueContent: ""
};
var TUI_MULTI_SELECT_OPTIONS = tuiCreateToken(TUI_MULTI_SELECT_DEFAULT_OPTIONS);
function tuiMultiSelectOptionsProvider(options) {
  return tuiProvideOptions(TUI_MULTI_SELECT_OPTIONS, options, TUI_MULTI_SELECT_DEFAULT_OPTIONS);
}
var AbstractTuiNativeMultiSelect = class _AbstractTuiNativeMultiSelect extends AbstractTuiNativeSelect {
  constructor() {
    super(...arguments);
    this.selectedMapper = (option, value) => value.includes(option);
  }
  get stringify() {
    return this.host.stringify;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAbstractTuiNativeMultiSelect_BaseFactory;
      return function AbstractTuiNativeMultiSelect_Factory(__ngFactoryType__) {
        return (ɵAbstractTuiNativeMultiSelect_BaseFactory || (ɵAbstractTuiNativeMultiSelect_BaseFactory = ɵɵgetInheritedFactory(_AbstractTuiNativeMultiSelect)))(__ngFactoryType__ || _AbstractTuiNativeMultiSelect);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractTuiNativeMultiSelect,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTuiNativeMultiSelect, [{
    type: Directive
  }], null, null);
})();
var TuiMultiSelectComponent = class _TuiMultiSelectComponent extends AbstractTuiMultipleControl {
  constructor() {
    super(...arguments);
    this.arrowMode = inject(TUI_ARROW_MODE);
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.options = inject(TUI_MULTI_SELECT_OPTIONS);
    this.inputTagOptions = inject(TUI_INPUT_TAG_OPTIONS);
    this.open = false;
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.stringify = this.itemsHandlers.stringify;
    this.identityMatcher = this.itemsHandlers.identityMatcher;
    this.search = "";
    this.placeholder = "";
    this.editable = true;
    this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
    this.valueContent = this.options.valueContent;
    this.tagValidator = TUI_TRUE_HANDLER;
    this.rows = this.options.rows;
    this.autoColor = false;
    this.searchChange = new EventEmitter();
    this.valueMapper = (value, stringify, group) => group ? EMPTY_ARRAY : value.map((item) => new TuiStringifiableItem(item, stringify));
    this.disabledItemHandlerWrapper = (handler) => (stringifiable) => tuiIsString(stringifiable) || handler(stringifiable.item);
  }
  get size() {
    return this.controller.size;
  }
  get nativeFocusableElement() {
    return this.input?.nativeFocusableElement ?? null;
  }
  get focused() {
    return !!this.input?.focused || !!this.dropdown?.tuiDropdownOpen;
  }
  onValueChange(value) {
    this.value = value;
  }
  onSearch(search) {
    if (search !== "") {
      this.open = true;
    }
    this.updateSearch(search);
  }
  setDisabledState() {
    super.setDisabledState();
    this.open = false;
  }
  handleOption(option) {
    const {
      value,
      identityMatcher
    } = this;
    const index = value.findIndex((item) => identityMatcher(item, option));
    this.value = index === -1 ? [...value, option] : value.filter((_, i) => i !== index);
    this.updateSearch(null);
  }
  get arrow() {
    return this.interactive ? this.arrowMode.interactive : this.arrowMode.disabled;
  }
  get nativeDropdownMode() {
    return !!this.nativeSelect && this.isMobile && !this.editable;
  }
  get computedValue() {
    return this.computedGroup ? EMPTY_ARRAY : this.value;
  }
  // @bad TODO: think of a better way
  get searchOrSpace() {
    return this.computedGroup ? " " : this.searchString;
  }
  get searchString() {
    return this.search === null ? "" : this.search;
  }
  get computedGroup() {
    return !!this.valueContent && this.value.length > 0 && (!this.focused || !this.editable);
  }
  getStringifier(stringify) {
    return ({
      $implicit
    }) => stringify($implicit);
  }
  onSpace(event) {
    if (!this.editable) {
      event.preventDefault();
    }
    if (!this.readOnly) {
      this.open = true;
    }
  }
  onEnter(event) {
    const {
      value
    } = this;
    const options = this.accessor ? this.accessor.getOptions() : [];
    if (options.length !== 1) {
      return;
    }
    event.preventDefault();
    this.value = options[0] ? tuiArrayToggle(value, options[0]) : value;
    this.updateSearch(null);
  }
  onKeyDown(event) {
    if (event.key === this.inputTagOptions.separator) {
      this.onEnter(event);
    }
  }
  onPaste(event) {
    const pasted = tuiGetClipboardDataText(event);
    const tags = pasted.split(this.inputTagOptions.separator).map((tag) => tag.trim());
    const options = this.accessor?.getOptions() ?? [];
    const separator = tuiIsString(this.inputTagOptions.separator) ? this.inputTagOptions.separator : ",";
    const matches = options?.filter((option) => tags.includes(this.stringify(option))) ?? [];
    const matchingStrings = matches.map((v) => String(v));
    const invalid = tags.filter((value) => !matchingStrings.includes(value));
    this.value = this.filterValue([...this.value, ...matches]);
    this.updateSearch(invalid.length ? invalid.join(separator) : null);
  }
  onClick({
    nativeFocusableElement
  }) {
    if (this.interactive && nativeFocusableElement && tuiIsNativeFocused(nativeFocusableElement)) {
      this.open = !this.open;
    }
  }
  onInput(value) {
    this.value = value.map(({
      item
    }) => item);
  }
  onActiveZone(active) {
    this.updateFocused(active);
  }
  filterValue(value) {
    const seen = /* @__PURE__ */ new Set();
    return value.reverse().filter((item) => item && !seen.has(item) && seen.add(item)).reverse();
  }
  updateSearch(search) {
    if (this.search === search) {
      return;
    }
    this.search = search;
    this.searchChange.emit(search);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiMultiSelectComponent_BaseFactory;
      return function TuiMultiSelectComponent_Factory(__ngFactoryType__) {
        return (ɵTuiMultiSelectComponent_BaseFactory || (ɵTuiMultiSelectComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiMultiSelectComponent)))(__ngFactoryType__ || _TuiMultiSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMultiSelectComponent,
      selectors: [["tui-multi-select"]],
      contentQueries: function TuiMultiSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_ACCESSOR, 5);
          ɵɵcontentQuery(dirIndex, AbstractTuiNativeMultiSelect, 7);
          ɵɵcontentQuery(dirIndex, TuiDataListDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accessor = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nativeSelect = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      viewQuery: function TuiMultiSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiDropdownOpen, 5);
          ɵɵviewQuery(TuiInputTagComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      hostVars: 5,
      hostBindings: function TuiMultiSelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_editable", ctx.editable)("_expandable", ctx.rows > 1);
        }
      },
      inputs: {
        stringify: "stringify",
        identityMatcher: "identityMatcher",
        search: "search",
        placeholder: "placeholder",
        editable: "editable",
        disabledItemHandler: "disabledItemHandler",
        valueContent: "valueContent",
        tagValidator: "tagValidator",
        rows: "rows",
        autoColor: "autoColor"
      },
      outputs: {
        searchChange: "searchChange"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiMultiSelectComponent), tuiAsControl2(_TuiMultiSelectComponent), tuiAsDataListHost(_TuiMultiSelectComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵHostDirectivesFeature([TuiDropdownFixed]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c123,
      decls: 13,
      vars: 35,
      consts: [["inputTag", ""], ["select", ""], ["icon", ""], ["tuiDropdownOpenMonitor", "", 1, "t-hosted", 3, "tuiDropdownOpenChange", "tuiActiveZoneChange", "tuiDropdown", "tuiDropdownEnabled", "tuiDropdownOpen"], ["automation-id", "tui-multi-select__input", 1, "t-input", 3, "click.prevent", "keydown.enter", "keydown.space", "keydown", "ngModelChange", "paste.capture.stop.prevent", "searchChange", "autoColor", "disabled", "disabledItemHandler", "editable", "inputHidden", "nativeId", "ngModel", "ngModelOptions", "placeholder", "pseudoFocus", "pseudoHover", "pseudoInvalid", "pseudoOpen", "readOnly", "removable", "rows", "search", "tagValidator", "tuiTextfieldIcon"], ["ngProjectAs", "select", 5, ["select"], 4, "ngTemplateOutlet"], ["ngProjectAs", "tuiContent", "class", "t-content", 5, ["tuiContent"], 3, "t-content_fullsize", 4, "ngIf"], [4, "ngIf"], ["ngProjectAs", "select", 5, ["select"]], ["ngProjectAs", "tuiContent", 5, ["tuiContent"], 1, "t-content"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"], ["appearance", "icon", "automation-id", "tui-multi-select__arrow", "tuiWrapper", "", 1, "t-arrow", 3, "mousedown.prevent.silent"], [4, "polymorpheusOutlet"]],
      template: function TuiMultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c024);
          ɵɵelementStart(0, "div", 3);
          ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiMultiSelectComponent_Template_div_tuiDropdownOpenChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.open, $event) || (ctx.open = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("tuiActiveZoneChange", function TuiMultiSelectComponent_Template_div_tuiActiveZoneChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveZone($event));
          });
          ɵɵelementStart(1, "tui-input-tag", 4, 0);
          ɵɵpipe(3, "tuiMapper");
          ɵɵpipe(4, "tuiMapper");
          ɵɵpipe(5, "tuiMapper");
          ɵɵlistener("click.prevent", function TuiMultiSelectComponent_Template_tui_input_tag_click_prevent_1_listener() {
            ɵɵrestoreView(_r1);
            const inputTag_r2 = ɵɵreference(2);
            return ɵɵresetView(ctx.onClick(inputTag_r2));
          })("keydown.enter", function TuiMultiSelectComponent_Template_tui_input_tag_keydown_enter_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onEnter($event));
          })("keydown.space", function TuiMultiSelectComponent_Template_tui_input_tag_keydown_space_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSpace($event));
          })("keydown", function TuiMultiSelectComponent_Template_tui_input_tag_keydown_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onKeyDown($event));
          })("ngModelChange", function TuiMultiSelectComponent_Template_tui_input_tag_ngModelChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onInput($event));
          })("paste.capture.stop.prevent", function TuiMultiSelectComponent_Template_tui_input_tag_paste_capture_stop_prevent_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPaste($event));
          })("searchChange", function TuiMultiSelectComponent_Template_tui_input_tag_searchChange_1_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onSearch($event));
          });
          ɵɵprojection(6);
          ɵɵtemplate(7, TuiMultiSelectComponent_ng_template_7_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(9, TuiMultiSelectComponent_ng_container_9_Template, 1, 0, "ng-container", 5)(10, TuiMultiSelectComponent_div_10_Template, 2, 6, "div", 6);
          ɵɵelementEnd();
          ɵɵtemplate(11, TuiMultiSelectComponent_ng_template_11_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const select_r7 = ɵɵreference(8);
          const icon_r8 = ɵɵreference(12);
          ɵɵproperty("tuiDropdown", ctx.datalist || "")("tuiDropdownEnabled", ctx.interactive && !ctx.nativeDropdownMode);
          ɵɵtwoWayProperty("tuiDropdownOpen", ctx.open);
          ɵɵadvance();
          ɵɵproperty("autoColor", ctx.autoColor)("disabled", ctx.disabled)("disabledItemHandler", ɵɵpipeBind2(3, 24, ctx.disabledItemHandler, ctx.disabledItemHandlerWrapper))("editable", false)("inputHidden", !ctx.editable)("nativeId", ctx.nativeId)("ngModel", ɵɵpipeBind3(4, 27, ctx.computedValue, ctx.valueMapper, ctx.stringify))("ngModelOptions", ɵɵpureFunction0(34, _c215))("placeholder", ctx.placeholder)("pseudoFocus", ctx.computedFocused)("pseudoHover", ctx.pseudoHover)("pseudoInvalid", ctx.computedInvalid)("pseudoOpen", ctx.open)("readOnly", ctx.readOnly)("removable", !ctx.nativeDropdownMode)("rows", ctx.rows)("search", ctx.searchOrSpace)("tagValidator", ɵɵpipeBind2(5, 31, ctx.tagValidator, ctx.disabledItemHandlerWrapper))("tuiTextfieldIcon", ctx.arrow ? icon_r8 : "");
          ɵɵadvance(8);
          ɵɵproperty("ngTemplateOutlet", select_r7);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.computedGroup);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, NgControlStatus, NgModel, PolymorpheusOutlet, TuiWrapperDirective, TuiInputTagComponent, TuiDropdownDirective, TuiDropdownOpen, TuiTextfieldIconDirective, TuiLegacyDropdownOpenMonitorDirective, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;border-radius:var(--tui-radius-m)}._disabled[_nghost-%COMP%], [_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-input[_ngcontent-%COMP%]{border-radius:inherit}[_nghost-%COMP%]:not(._editable):not(._readonly)   .t-input[_ngcontent-%COMP%]{cursor:pointer}.t-content[_ngcontent-%COMP%]{display:flex;align-items:center;pointer-events:none;box-sizing:border-box}.t-primitive[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-arrow[_ngcontent-%COMP%]{pointer-events:auto;cursor:pointer}.t-arrow_native-dropdown[_ngcontent-%COMP%]{pointer-events:none}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiMultiSelectComponent.prototype, "getStringifier", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-multi-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiMultiSelectComponent), tuiAsControl2(TuiMultiSelectComponent), tuiAsDataListHost(TuiMultiSelectComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      hostDirectives: [TuiDropdownFixed],
      host: {
        "[attr.data-size]": "size",
        "[class._editable]": "editable",
        "[class._expandable]": "rows > 1"
      },
      template: `<div
    tuiDropdownOpenMonitor
    class="t-hosted"
    [tuiDropdown]="datalist || ''"
    [tuiDropdownEnabled]="interactive && !nativeDropdownMode"
    [(tuiDropdownOpen)]="open"
    (tuiActiveZoneChange)="onActiveZone($event)"
>
    <tui-input-tag
        #inputTag
        automation-id="tui-multi-select__input"
        class="t-input"
        [autoColor]="autoColor"
        [disabled]="disabled"
        [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerWrapper"
        [editable]="false"
        [inputHidden]="!editable"
        [nativeId]="nativeId"
        [ngModel]="computedValue | tuiMapper: valueMapper : stringify"
        [ngModelOptions]="{standalone: true}"
        [placeholder]="placeholder"
        [pseudoFocus]="computedFocused"
        [pseudoHover]="pseudoHover"
        [pseudoInvalid]="computedInvalid"
        [pseudoOpen]="open"
        [readOnly]="readOnly"
        [removable]="!nativeDropdownMode"
        [rows]="rows"
        [search]="searchOrSpace"
        [tagValidator]="tagValidator | tuiMapper: disabledItemHandlerWrapper"
        [tuiTextfieldIcon]="arrow ? icon : ''"
        (click.prevent)="onClick(inputTag)"
        (keydown.enter)="onEnter($event)"
        (keydown.space)="onSpace($event)"
        (keydown)="onKeyDown($event)"
        (ngModelChange)="onInput($event)"
        (paste.capture.stop.prevent)="onPaste($event)"
        (searchChange)="onSearch($event)"
    >
        <ng-content />
        <ng-template #select>
            <ng-content
                *ngIf="isMobile"
                select="select"
            />
        </ng-template>

        <ng-container
            *ngTemplateOutlet="select"
            ngProjectAs="select"
        />

        <div
            *ngIf="computedGroup"
            ngProjectAs="tuiContent"
            class="t-content"
            [class.t-content_fullsize]="inputTag.labelOutside"
        >
            <span
                *polymorpheusOutlet="valueContent as text; context: {$implicit: value}"
                class="t-primitive"
            >
                {{ text }}
            </span>
        </div>
    </tui-input-tag>

    <ng-template #icon>
        <div
            appearance="icon"
            automation-id="tui-multi-select__arrow"
            tuiWrapper
            class="t-arrow"
            [class.t-arrow_native-dropdown]="nativeDropdownMode"
            (mousedown.prevent.silent)="(0)"
        >
            <ng-container *polymorpheusOutlet="arrow as text">
                {{ text }}
            </ng-container>
        </div>
    </ng-template>
</div>
`,
      styles: [":host{position:relative;display:block;border-radius:var(--tui-radius-m)}:host._disabled,:host :host-context(*:disabled){pointer-events:none}.t-hosted{display:block;border-radius:inherit}.t-input{border-radius:inherit}:host:not(._editable):not(._readonly) .t-input{cursor:pointer}.t-content{display:flex;align-items:center;pointer-events:none;box-sizing:border-box}.t-primitive{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-arrow{pointer-events:auto;cursor:pointer}.t-arrow_native-dropdown{pointer-events:none}\n"]
    }]
  }], null, {
    accessor: [{
      type: ContentChild,
      args: [TUI_DATA_LIST_ACCESSOR]
    }],
    nativeSelect: [{
      type: ContentChild,
      args: [AbstractTuiNativeMultiSelect, {
        static: true
      }]
    }],
    dropdown: [{
      type: ViewChild,
      args: [TuiDropdownOpen]
    }],
    input: [{
      type: ViewChild,
      args: [TuiInputTagComponent]
    }],
    datalist: [{
      type: ContentChild,
      args: [TuiDataListDirective, {
        read: TemplateRef
      }]
    }],
    stringify: [{
      type: Input
    }],
    identityMatcher: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    valueContent: [{
      type: Input
    }],
    tagValidator: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    autoColor: [{
      type: Input
    }],
    searchChange: [{
      type: Output
    }],
    getStringifier: []
  });
})();
var TuiHideSelectedPipe = class _TuiHideSelectedPipe {
  constructor() {
    this.component = inject(TuiMultiSelectComponent);
  }
  transform(items) {
    const {
      value,
      identityMatcher
    } = this.component;
    if (!items) {
      return null;
    }
    return tuiIsFlat(items) ? this.filter(items, value, identityMatcher) : this.filter2d(items, value, identityMatcher);
  }
  filter2d(items, value, matcher) {
    return items.map((subItems) => this.filter(subItems, value, matcher));
  }
  filter(items, value, matcher) {
    return items.filter((item) => value.every((selected) => !matcher(selected, item)));
  }
  static {
    this.ɵfac = function TuiHideSelectedPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHideSelectedPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiHideSelected",
      type: _TuiHideSelectedPipe,
      pure: false
    });
  }
};
__decorate([tuiPure], TuiHideSelectedPipe.prototype, "filter2d", null);
__decorate([tuiPure], TuiHideSelectedPipe.prototype, "filter", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHideSelectedPipe, [{
    type: Pipe,
    args: [{
      standalone: false,
      name: "tuiHideSelected",
      pure: false
    }]
  }], null, {
    filter2d: [],
    filter: []
  });
})();
var TuiMultiSelectDirective = class _TuiMultiSelectDirective extends AbstractTuiTextfieldHost {
  constructor() {
    super(...arguments);
    this.disableItemHandler = (item) => this.host.disabledItemHandler(item);
  }
  get readOnly() {
    return true;
  }
  get stringify() {
    return this.host.stringify;
  }
  onValueChange() {
  }
  onSelectionChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiMultiSelectDirective_BaseFactory;
      return function TuiMultiSelectDirective_Factory(__ngFactoryType__) {
        return (ɵTuiMultiSelectDirective_BaseFactory || (ɵTuiMultiSelectDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiMultiSelectDirective)))(__ngFactoryType__ || _TuiMultiSelectDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMultiSelectDirective,
      selectors: [["tui-multi-select"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiMultiSelectDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-multi-select",
      providers: [tuiAsTextfieldHost(TuiMultiSelectDirective)]
    }]
  }], null, null);
})();
var TuiMultiSelectGroupComponent = class _TuiMultiSelectGroupComponent {
  constructor() {
    this.options = EMPTY_QUERY;
    this.host = inject(TUI_DATA_LIST_HOST);
    this.control = inject(NgControl);
    this.multiSelectTexts$ = inject(TUI_MULTI_SELECT_TEXTS);
    this.label = "";
  }
  get empty$() {
    return tuiQueryListChanges(this.options).pipe(map(({
      length
    }) => !length));
  }
  get disabled$() {
    return tuiQueryListChanges(this.options).pipe(map((items) => items.every(({
      disabled
    }) => disabled)));
  }
  get value$() {
    return combineLatest([this.items$, this.valueChanges$]).pipe(map(([items, current]) => {
      let result = false;
      for (let i = 0; i < items.length; i++) {
        const selected = current.some((selected2) => this.matcher(selected2, items[i]));
        if (!selected && result || selected && !result && i) {
          return null;
        }
        result = selected;
      }
      return result;
    }));
  }
  onClick(checked) {
    if (!this.control.control) {
      return;
    }
    const controlValue = this.control.value || [];
    const {
      values
    } = this;
    const filtered = controlValue.filter((current) => values.every((item) => !this.matcher(current, item)));
    this.control.control.setValue(checked ? filtered : [...filtered, ...values]);
  }
  get items$() {
    return tuiQueryListChanges(this.options).pipe(map((options) => options.map(({
      value
    }) => value).filter(tuiIsPresent)));
  }
  get valueChanges$() {
    return tuiControlValue(this.control).pipe(map((value) => value || []));
  }
  get values() {
    return this.filter(tuiGetOriginalArrayFromQueryList(this.options));
  }
  get matcher() {
    return this.host.identityMatcher || TUI_DEFAULT_IDENTITY_MATCHER;
  }
  filter(items) {
    return items.map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  static {
    this.ɵfac = function TuiMultiSelectGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMultiSelectGroupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMultiSelectGroupComponent,
      selectors: [["tui-opt-group", "tuiMultiSelectGroup", ""]],
      contentQueries: function TuiMultiSelectGroupComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiOption, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
        }
      },
      hostVars: 2,
      hostBindings: function TuiMultiSelectGroupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_label", ctx.label);
        }
      },
      inputs: {
        label: "label"
      },
      attrs: _c45,
      ngContentSelectors: _c54,
      decls: 3,
      vars: 3,
      consts: [["class", "t-wrapper", 4, "tuiLet"], [1, "t-wrapper"], [1, "t-label"], ["tuiLink", "", "type", "button", "class", "t-button", 3, "disabled", "click", 4, "ngIf"], ["tuiLink", "", "type", "button", 1, "t-button", 3, "click", "disabled"]],
      template: function TuiMultiSelectGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiMultiSelectGroupComponent_span_0_Template, 5, 4, "span", 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [NgIf, TuiLet, TuiLink, AsyncPipe],
      styles: ["._label[_nghost-%COMP%]:before{display:none}[_nghost-%COMP%]:not(:first-of-type)   .t-label[_ngcontent-%COMP%]:not(:empty){padding-top:1.25rem}[_nghost-%COMP%]:not(:first-of-type)   .t-button[_ngcontent-%COMP%]{margin-top:1.25rem}.t-wrapper[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.t-label[_ngcontent-%COMP%]:not(:empty){flex:1;padding:.75rem 1rem .25rem .625rem}.t-button[_ngcontent-%COMP%]{margin:.75rem 1rem 0 auto}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "empty$", null);
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "disabled$", null);
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "value$", null);
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "items$", null);
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "valueChanges$", null);
__decorate([tuiPure], TuiMultiSelectGroupComponent.prototype, "filter", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectGroupComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-opt-group[tuiMultiSelectGroup]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._label]": "label"
      },
      template: `<span
    *tuiLet="value$ | async as value"
    class="t-wrapper"
>
    <span class="t-label">{{ label }}</span>
    <button
        *ngIf="label && !(empty$ | async)"
        tuiLink
        type="button"
        class="t-button"
        [disabled]="!!(disabled$ | async)"
        (click)="onClick(value)"
    >
        {{ (multiSelectTexts$ | async)?.[value ? 'none' : 'all'] }}
    </button>
</span>
<ng-content />
`,
      styles: [":host._label:before{display:none}:host:not(:first-of-type) .t-label:not(:empty){padding-top:1.25rem}:host:not(:first-of-type) .t-button{margin-top:1.25rem}.t-wrapper{display:flex;align-items:flex-start}.t-label:not(:empty){flex:1;padding:.75rem 1rem .25rem .625rem}.t-button{margin:.75rem 1rem 0 auto}\n"]
    }]
  }], null, {
    options: [{
      type: ContentChildren,
      args: [TuiOption]
    }],
    label: [{
      type: Input
    }],
    empty$: [],
    disabled$: [],
    value$: [],
    items$: [],
    valueChanges$: [],
    filter: []
  });
})();
var TUI_MULTI_SELECT_OPTION = new PolymorpheusComponent(TuiMultiSelectOptionComponent);
var TuiMultiSelectGroupDirective = class _TuiMultiSelectGroupDirective {
  static {
    this.ɵfac = function TuiMultiSelectGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMultiSelectGroupDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMultiSelectGroupDirective,
      selectors: [["", "tuiMultiSelectGroup", ""]],
      features: [ɵɵProvidersFeature([tuiAsOptionContent(TUI_MULTI_SELECT_OPTION), {
        provide: TUI_DATA_LIST_HOST,
        deps: [NgControl, [new Optional(), forwardRef(() => TuiMultiSelectComponent)]],
        useFactory: (control, host) => host || {
          handleOption: (option) => control.control?.setValue(tuiArrayToggle(control.value || [], option))
        }
      }, {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useValue: {
          writeValue: EMPTY_FUNCTION,
          registerOnChange: EMPTY_FUNCTION,
          registerOnTouched: EMPTY_FUNCTION
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiMultiSelectGroup]",
      providers: [tuiAsOptionContent(TUI_MULTI_SELECT_OPTION), {
        provide: TUI_DATA_LIST_HOST,
        deps: [NgControl, [new Optional(), forwardRef(() => TuiMultiSelectComponent)]],
        useFactory: (control, host) => host || {
          handleOption: (option) => control.control?.setValue(tuiArrayToggle(control.value || [], option))
        }
      }, {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useValue: {
          writeValue: EMPTY_FUNCTION,
          registerOnChange: EMPTY_FUNCTION,
          registerOnTouched: EMPTY_FUNCTION
        }
      }]
    }]
  }], null, null);
})();
var TuiNativeMultiSelectComponent = class _TuiNativeMultiSelectComponent extends AbstractTuiNativeMultiSelect {
  constructor() {
    super(...arguments);
    this.items = [];
  }
  onValueChange(selectedOptions) {
    const selected = Array.from(selectedOptions).map((option) => option.index);
    const value = this.items?.filter((_, index) => selected.includes(index)) || [];
    this.host.onSelectionChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiNativeMultiSelectComponent_BaseFactory;
      return function TuiNativeMultiSelectComponent_Factory(__ngFactoryType__) {
        return (ɵTuiNativeMultiSelectComponent_BaseFactory || (ɵTuiNativeMultiSelectComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiNativeMultiSelectComponent)))(__ngFactoryType__ || _TuiNativeMultiSelectComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNativeMultiSelectComponent,
      selectors: [["select", "multiple", "", "tuiSelect", "", 3, "labels", ""]],
      hostVars: 3,
      hostBindings: function TuiNativeMultiSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiNativeMultiSelectComponent_change_HostBindingHandler($event) {
            return ctx.onValueChange($event.target.selectedOptions);
          })("click.stop.silent", function TuiNativeMultiSelectComponent_click_stop_silent_HostBindingHandler() {
            return 0;
          })("mousedown.stop.silent", function TuiNativeMultiSelectComponent_mousedown_stop_silent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.host.disabled || ctx.control.readOnly)("tabIndex", ctx.host.focusable ? 0 : -1);
          ɵɵattribute("aria-invalid", ctx.host.invalid);
        }
      },
      inputs: {
        items: "items"
      },
      features: [ɵɵProvidersFeature([tuiAsDataList(_TuiNativeMultiSelectComponent), tuiProvide(AbstractTuiNativeMultiSelect, _TuiNativeMultiSelectComponent), {
        provide: TemplateRef,
        deps: [_TuiNativeMultiSelectComponent],
        useFactory: ({
          datalist
        }) => datalist
      }]), ɵɵInheritDefinitionFeature],
      attrs: _c63,
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "itemContent", "items", 4, "tuiDataList"], [3, "disabled", "selected", "value", 4, "ngFor", "ngForOf"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "itemContent", "items"], [3, "disabled", "selected", "value"]],
      template: function TuiNativeMultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiNativeMultiSelectComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiNativeMultiSelectComponent_tui_data_list_wrapper_2_Template, 2, 5, "tui-data-list-wrapper", 1)(3, TuiNativeMultiSelectComponent_option_3_Template, 3, 8, "option", 2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.control.control == null ? null : ctx.control.control.valueChanges));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [NgForOf, NgIf, NgSelectOption, ɵNgSelectMultipleOption, TuiDataListDirective, TuiDataListWrapperComponent, TuiMultiSelectGroupDirective, AsyncPipe, TuiMapperPipe, TuiStringifyContentPipe],
      styles: ["[_nghost-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeMultiSelectComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "select[multiple][tuiSelect]:not([labels])",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataList(TuiNativeMultiSelectComponent), tuiProvide(AbstractTuiNativeMultiSelect, TuiNativeMultiSelectComponent), {
        provide: TemplateRef,
        deps: [TuiNativeMultiSelectComponent],
        useFactory: ({
          datalist
        }) => datalist
      }],
      host: {
        "[attr.aria-invalid]": "host.invalid",
        "[disabled]": "host.disabled || control.readOnly",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "(change)": "onValueChange($event.target.selectedOptions)",
        "(click.stop.silent)": "0",
        "(mousedown.stop.silent)": "0"
      },
      template: '<ng-container *ngIf="control.control?.valueChanges | async" />\n\n<tui-data-list-wrapper\n    *tuiDataList\n    tuiMultiSelectGroup\n    [disabledItemHandler]="disabledItemHandler || host.disableItemHandler"\n    [itemContent]="stringify | tuiStringifyContent"\n    [items]="items"\n/>\n<option\n    *ngFor="let option of items"\n    [disabled]="disabledItemHandler ? disabledItemHandler(option) : host.disableItemHandler(option)"\n    [selected]="option | tuiMapper: selectedMapper : control.value"\n    [value]="stringify(option)"\n>\n    {{ stringify(option) }}\n</option>\n',
      styles: [":host{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }]
  });
})();
var TuiNativeMultiSelectGroupComponent = class _TuiNativeMultiSelectGroupComponent extends AbstractTuiNativeMultiSelect {
  constructor() {
    super(...arguments);
    this.items = [];
    this.labels = [];
  }
  onValueChange(selectedOptions) {
    const selected = Array.from(selectedOptions).map((option) => option.index);
    const flatItems = this.items?.reduce((acc, val) => acc.concat(val), []) || [];
    const value = flatItems.filter((_, index) => selected.includes(index));
    this.host.onSelectionChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiNativeMultiSelectGroupComponent_BaseFactory;
      return function TuiNativeMultiSelectGroupComponent_Factory(__ngFactoryType__) {
        return (ɵTuiNativeMultiSelectGroupComponent_BaseFactory || (ɵTuiNativeMultiSelectGroupComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiNativeMultiSelectGroupComponent)))(__ngFactoryType__ || _TuiNativeMultiSelectGroupComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNativeMultiSelectGroupComponent,
      selectors: [["select", "multiple", "", "tuiSelect", "", "labels", ""]],
      hostVars: 3,
      hostBindings: function TuiNativeMultiSelectGroupComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("change", function TuiNativeMultiSelectGroupComponent_change_HostBindingHandler($event) {
            return ctx.onValueChange($event.target.selectedOptions);
          })("click.stop.silent", function TuiNativeMultiSelectGroupComponent_click_stop_silent_HostBindingHandler() {
            return 0;
          })("mousedown.stop.silent", function TuiNativeMultiSelectGroupComponent_mousedown_stop_silent_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.host.disabled || ctx.control.readOnly)("tabIndex", ctx.host.focusable ? 0 : -1);
          ɵɵattribute("aria-invalid", ctx.host.invalid);
        }
      },
      inputs: {
        items: "items",
        labels: "labels"
      },
      features: [ɵɵProvidersFeature([tuiAsDataList(_TuiNativeMultiSelectGroupComponent), tuiProvide(AbstractTuiNativeMultiSelect, _TuiNativeMultiSelectGroupComponent), {
        provide: TemplateRef,
        deps: [_TuiNativeMultiSelectGroupComponent],
        useFactory: ({
          datalist
        }) => datalist
      }]), ɵɵInheritDefinitionFeature],
      attrs: _c72,
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "itemContent", "items", "labels", 4, "tuiDataList"], [3, "label", 4, "ngFor", "ngForOf"], ["tuiMultiSelectGroup", "", 3, "disabledItemHandler", "itemContent", "items", "labels"], [3, "label"], [3, "disabled", "selected", "value", 4, "ngFor", "ngForOf"], [3, "disabled", "selected", "value"]],
      template: function TuiNativeMultiSelectGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiNativeMultiSelectGroupComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiNativeMultiSelectGroupComponent_tui_data_list_wrapper_2_Template, 2, 6, "tui-data-list-wrapper", 1)(3, TuiNativeMultiSelectGroupComponent_optgroup_3_Template, 2, 2, "optgroup", 2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.control.control == null ? null : ctx.control.control.valueChanges));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [NgForOf, NgIf, NgSelectOption, ɵNgSelectMultipleOption, TuiDataListDirective, TuiDataListGroupWrapperComponent, TuiMultiSelectGroupDirective, AsyncPipe, TuiMapperPipe, TuiStringifyContentPipe],
      styles: [_c82],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeMultiSelectGroupComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "select[multiple][tuiSelect][labels]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataList(TuiNativeMultiSelectGroupComponent), tuiProvide(AbstractTuiNativeMultiSelect, TuiNativeMultiSelectGroupComponent), {
        provide: TemplateRef,
        deps: [TuiNativeMultiSelectGroupComponent],
        useFactory: ({
          datalist
        }) => datalist
      }],
      host: {
        "[attr.aria-invalid]": "host.invalid",
        "[disabled]": "host.disabled || control.readOnly",
        "[tabIndex]": "host.focusable ? 0 : -1",
        "(change)": "onValueChange($event.target.selectedOptions)",
        "(click.stop.silent)": "0",
        "(mousedown.stop.silent)": "0"
      },
      template: '<ng-container *ngIf="control.control?.valueChanges | async" />\n\n<tui-data-list-wrapper\n    *tuiDataList\n    tuiMultiSelectGroup\n    [disabledItemHandler]="disabledItemHandler || host.disableItemHandler"\n    [itemContent]="stringify | tuiStringifyContent"\n    [items]="items"\n    [labels]="labels"\n/>\n<optgroup\n    *ngFor="let group of items; let index = index"\n    [label]="labels[index]"\n>\n    <option\n        *ngFor="let option of group"\n        [disabled]="disabledItemHandler ? disabledItemHandler(option) : host.disableItemHandler(option)"\n        [selected]="option | tuiMapper: selectedMapper : control.value"\n        [value]="stringify(option)"\n    >\n        {{ stringify(option) }}\n    </option>\n</optgroup>\n',
      styles: [":host{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0}\n"]
    }]
  }], null, {
    items: [{
      type: Input
    }],
    labels: [{
      type: Input
    }]
  });
})();
var TuiMultiSelectModule = class _TuiMultiSelectModule {
  static {
    this.ɵfac = function TuiMultiSelectModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMultiSelectModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiMultiSelectModule,
      declarations: [TuiMultiSelectComponent, TuiMultiSelectGroupComponent, TuiMultiSelectGroupDirective, TuiHideSelectedPipe, TuiNativeMultiSelectComponent, TuiNativeMultiSelectGroupComponent, TuiMultiSelectDirective],
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiArrowComponent, TuiLet, TuiMapperPipe, TuiInputTagModule, TuiMultiSelectOptionModule, TuiMapperPipe, TuiLink, TuiTextfieldControllerModule, TuiStringifyContentPipe, TuiLegacyDropdownOpenMonitorDirective, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective],
      exports: [TuiMultiSelectComponent, TuiMultiSelectGroupComponent, TuiMultiSelectGroupDirective, TuiHideSelectedPipe, TuiMultiSelectDirective, TuiNativeMultiSelectComponent, TuiNativeMultiSelectGroupComponent, TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection, TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiWrapperModule, TuiArrowComponent, TuiInputTagModule, TuiMultiSelectOptionModule, TuiTextfieldControllerModule, TuiDropdownComponent, TuiDataListComponent, TuiOption, TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMultiSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiWrapperModule, TuiArrowComponent, TuiLet, TuiMapperPipe, TuiInputTagModule, TuiMultiSelectOptionModule, TuiMapperPipe, TuiLink, TuiTextfieldControllerModule, TuiStringifyContentPipe, TuiLegacyDropdownOpenMonitorDirective, ...TuiDropdown, ...TuiDataList, ...TuiDataListWrapper],
      declarations: [TuiMultiSelectComponent, TuiMultiSelectGroupComponent, TuiMultiSelectGroupDirective, TuiHideSelectedPipe, TuiNativeMultiSelectComponent, TuiNativeMultiSelectGroupComponent, TuiMultiSelectDirective],
      exports: [TuiMultiSelectComponent, TuiMultiSelectGroupComponent, TuiMultiSelectGroupDirective, TuiHideSelectedPipe, TuiMultiSelectDirective, TuiNativeMultiSelectComponent, TuiNativeMultiSelectGroupComponent, ...TuiDropdown, ...TuiDataList, ...TuiDataListWrapper]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-sheet.mjs
var _c025 = ["tuiSheetHeading", ""];
var _c124 = ["*"];
var _c216 = (a0) => ({
  transform: a0
});
function TuiSheetBarComponent_ng_container_0_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "deg"]);
  }
}
function TuiSheetBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 1);
    ɵɵtemplate(2, TuiSheetBarComponent_ng_container_0_ng_content_2_Template, 1, 0, "ng-content", 2);
    ɵɵelement(3, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const deg_r1 = ctx.tuiLet;
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c216, "rotate(-" + deg_r1 + "deg)"));
    ɵɵadvance();
    ɵɵproperty("ngIf", deg_r1);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c216, "rotate(" + deg_r1 + "deg)"));
  }
}
var _c38 = ["sheet"];
var _c46 = ["content"];
var _c55 = ["stops"];
function TuiSheetComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 12, 2);
  }
  if (rf & 2) {
    const stop_r2 = ctx.$implicit;
    ɵɵstyleProp("margin-top", stop_r2);
  }
}
function TuiSheetComponent_header_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 15);
  }
  if (rf & 2) {
    const src_r3 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", src_r3, ɵɵsanitizeUrl);
  }
}
function TuiSheetComponent_header_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 13);
    ɵɵtemplate(1, TuiSheetComponent_header_4_img_1_Template, 1, 1, "img", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tuiSheetTop", ctx_r3.imageStop);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.item.image)("polymorpheusOutletContext", ctx_r3.context);
  }
}
function TuiSheetComponent_h2_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r5 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r5, " ");
  }
}
function TuiSheetsHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵlistener("click.self", function TuiSheetsHostComponent_div_0_Template_div_click_self_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close(item_r2));
    });
    ɵɵelementStart(5, "tui-sheet", 4);
    ɵɵpipe(6, "async");
    ɵɵlistener("close", function TuiSheetsHostComponent_div_0_Template_tui_sheet_close_5_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close(item_r2));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const wrapper_r4 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ɵɵpipeBind1(2, 14, wrapper_r4.height$), "px");
    ɵɵclassProp("t-wrapper_closeable", item_r2.closeable)("t-wrapper_overlay", item_r2.overlay || ɵɵpipeBind1(3, 16, wrapper_r4.overlay$))("t-wrapper_visible", ɵɵpipeBind1(4, 18, wrapper_r4.visible$));
    ɵɵproperty("@tuiFadeIn", ctx_r2.options)("@tuiSlideInTop", ctx_r2.options)("tuiSheetWrapper", item_r2.offset);
    ɵɵadvance(5);
    ɵɵstyleProp("height", (ɵɵpipeBind1(6, 20, ctx_r2.height$) || 0) - item_r2.offset, "px");
    ɵɵproperty("item", item_r2);
  }
}
var TUI_SHEET = tuiCreateToken();
var TUI_SHEET_SCROLL = tuiCreateToken();
var TUI_SHEET_DRAGGED = tuiCreateToken();
var TUI_SHEET_CLOSE = "tui-sheet-close";
var TUI_SHEET_ID = "tui-sheet-id";
var TuiSheetHeadingComponent = class _TuiSheetHeadingComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.autoId = tuiInjectId();
  }
  ngAfterViewInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SHEET_ID, {
      bubbles: true,
      detail: this.autoId
    }));
  }
  onClick() {
    this.el.dispatchEvent(new CustomEvent(TUI_SHEET_CLOSE, {
      bubbles: true
    }));
  }
  static {
    this.ɵfac = function TuiSheetHeadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetHeadingComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSheetHeadingComponent,
      selectors: [["", "tuiSheetHeading", ""]],
      attrs: _c025,
      ngContentSelectors: _c124,
      decls: 5,
      vars: 5,
      consts: [["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "iconStart"], [3, "id"]],
      template: function TuiSheetHeadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "button", 0);
          ɵɵlistener("click", function TuiSheetHeadingComponent_Template_button_click_0_listener() {
            return ctx.onClick();
          });
          ɵɵtext(1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵelementStart(3, "span", 1);
          ɵɵprojection(4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("iconStart", ctx.icons.close);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ctx.closeWord$), "\n");
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.autoId);
        }
      },
      dependencies: [TuiButton, AsyncPipe],
      styles: ['[_nghost-%COMP%]{position:sticky;top:0;z-index:1;min-block-size:2rem;box-sizing:border-box;margin:-1.25rem -1rem 0;padding:1.5rem 1rem 1rem;background:var(--tui-background-elevation-1);border-radius:.75rem .75rem 0 0;font:var(--tui-font-heading-6);box-shadow:inset 0 1px #ffffff40}[_nghost-%COMP%]:after{content:"";position:absolute;top:100%;left:0;right:0;block-size:1px;background:var(--tui-border-normal);opacity:0}[_nghost-%COMP%]   ._stuck[_nghost-%COMP%]:after, ._stuck   [_nghost-%COMP%]:after{opacity:1}.t-close[_ngcontent-%COMP%]{display:none;float:inline-end;margin-right:-.25rem}.t-wrapper_closeable[_nghost-%COMP%]   .t-close[_ngcontent-%COMP%], .t-wrapper_closeable   [_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{display:block}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetHeadingComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "[tuiSheetHeading]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<button\n    appearance="icon"\n    size="xs"\n    tuiIconButton\n    type="button"\n    class="t-close"\n    [iconStart]="icons.close"\n    (click)="onClick()"\n>\n    {{ closeWord$ | async }}\n</button>\n<span [id]="autoId">\n    <ng-content />\n</span>\n',
      styles: [':host{position:sticky;top:0;z-index:1;min-block-size:2rem;box-sizing:border-box;margin:-1.25rem -1rem 0;padding:1.5rem 1rem 1rem;background:var(--tui-background-elevation-1);border-radius:.75rem .75rem 0 0;font:var(--tui-font-heading-6);box-shadow:inset 0 1px #ffffff40}:host:after{content:"";position:absolute;top:100%;left:0;right:0;block-size:1px;background:var(--tui-border-normal);opacity:0}:host :host-context(._stuck):after{opacity:1}.t-close{display:none;float:inline-end;margin-right:-.25rem}:host-context(.t-wrapper_closeable) .t-close{display:block}\n']
    }]
  }], null, null);
})();
var TUI_SHEET_PROVIDERS = [{
  provide: TUI_SHEET_DRAGGED,
  deps: [ElementRef],
  useFactory: ({
    nativeElement
  }) => merge(tuiTypedFromEvent(nativeElement, "touchstart", {
    passive: true
  }).pipe(map(TUI_TRUE_HANDLER)), tuiTypedFromEvent(nativeElement, "touchend").pipe(map(TUI_FALSE_HANDLER)))
}, {
  provide: TUI_SHEET_SCROLL,
  deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
  useFactory: ({
    nativeElement
  }, zone, doc, isIos) => isIos ? iosScrollFactory(nativeElement, doc, zone) : merge(tuiTypedFromEvent(nativeElement, "scroll"), tuiTypedFromEvent(nativeElement, "load", {
    capture: true
  })).pipe(map(() => nativeElement.scrollTop), tuiZonefree(zone), share())
}, tuiProvide(TUI_SCROLL_REF, ElementRef), tuiProvide(TUI_SHEET, forwardRef(() => TuiSheetComponent))];
function iosScrollFactory(element, doc, zone) {
  const load$ = tuiTypedFromEvent(element, "load", {
    capture: true
  });
  const touchstart$ = tuiTypedFromEvent(element, "touchstart", {
    passive: true
  });
  const touchmove$ = tuiTypedFromEvent(doc, "touchmove", {
    passive: true
  });
  const touchend$ = tuiTypedFromEvent(doc, "touchend");
  const scroll$ = tuiTypedFromEvent(element, "scroll").pipe(map(() => element.scrollTop));
  const result$ = merge(load$.pipe(delay(0), map(() => element.scrollTop)), touchstart$.pipe(switchMap(({
    touches
  }) => {
    const {
      screenY = 0
    } = touches[0] ?? {};
    const {
      scrollTop
    } = element;
    return concat(
      // Sometimes touch is triggered without scroll in iOS, filter that
      zip(touchmove$, scroll$).pipe(map(([{
        touches: touches2
      }]) => scrollTop + screenY - (touches2[0]?.screenY ?? 0)), takeUntil(touchend$)),
      scroll$
    );
  })));
  return concat(scroll$.pipe(take(1)), result$).pipe(tuiZonefree(zone), share());
}
var TuiSheetBarComponent = class _TuiSheetBarComponent {
  constructor() {
    this.sheet = inject(TUI_SHEET);
    this.scroll$ = inject(TUI_SHEET_SCROLL);
    this.zone = inject(NgZone);
    this.rotate$ = this.scroll$.pipe(map((y) => tuiClamp(10 - (y - this.stop) / 5, 0, 10)), distinctUntilChanged(), tuiZonefull(this.zone));
  }
  get stop() {
    return this.sheet.stops[0] || 0;
  }
  static {
    this.ɵfac = function TuiSheetBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSheetBarComponent,
      selectors: [["tui-sheet-bar"]],
      ngContentSelectors: _c124,
      decls: 2,
      vars: 3,
      consts: [[4, "tuiLet"], [1, "t-bar", 3, "ngStyle"], [4, "ngIf"]],
      template: function TuiSheetBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSheetBarComponent_ng_container_0_Template, 4, 7, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.rotate$));
        }
      },
      dependencies: [NgIf, NgStyle, TuiLet, AsyncPipe],
      styles: ['[_nghost-%COMP%]{transition-property:border-radius;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:2;display:flex;block-size:1.25rem;align-items:center;justify-content:center;opacity:.3}.t-bar[_ngcontent-%COMP%]{content:"";block-size:.25rem;inline-size:1rem;background:var(--tui-text-primary);pointer-events:none}._ios:not(._dragged)[_nghost-%COMP%]   .t-bar[_ngcontent-%COMP%], ._ios:not(._dragged)   [_nghost-%COMP%]   .t-bar[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-bar[_ngcontent-%COMP%]:first-child{border-radius:1rem 0 0 1rem;transform-origin:top right}.t-bar[_ngcontent-%COMP%]:last-child{border-radius:0 1rem 1rem 0;transform-origin:top left}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetBarComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-sheet-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container *tuiLet="rotate$ | async as deg">
    <div
        class="t-bar"
        [ngStyle]="{transform: 'rotate(-' + deg + 'deg)'}"
    ></div>
    <ng-content *ngIf="deg" />
    <div
        class="t-bar"
        [ngStyle]="{transform: 'rotate(' + deg + 'deg)'}"
    ></div>
</ng-container>
`,
      styles: [':host{transition-property:border-radius;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:2;display:flex;block-size:1.25rem;align-items:center;justify-content:center;opacity:.3}.t-bar{content:"";block-size:.25rem;inline-size:1rem;background:var(--tui-text-primary);pointer-events:none}:host-context(._ios:not(._dragged)) .t-bar{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-bar:first-child{border-radius:1rem 0 0 1rem;transform-origin:top right}.t-bar:last-child{border-radius:0 1rem 1rem 0;transform-origin:top left}\n']
    }]
  }], null, null);
})();
var OFFSET$1 = 10;
var TuiSheetTopDirective = class _TuiSheetTopDirective {
  constructor() {
    this.scroll$ = inject(TUI_SHEET_SCROLL);
    this.component = inject(TUI_SHEET);
    this.win = inject(WA_WINDOW);
    this.el = tuiInjectElement();
    this.rounded$ = this.scroll$.pipe(map((y) => y < this.stop + OFFSET$1)).pipe(takeUntilDestroyed()).subscribe((add) => add ? this.el.classList.add("_rounded") : this.el.classList.remove("_rounded"));
    this.transform$ = this.scroll$.pipe(map((y) => `translateY(${this.getY(y)}%) scaleX(-1)`), takeUntilDestroyed()).subscribe((transform) => this.el.style.setProperty("transform", transform));
    this.clickthrough$ = this.scroll$.pipe(map((y) => !!Math.round(this.getY(y))), takeUntilDestroyed()).subscribe((add) => add ? this.el.classList.add("_clickthrough") : this.el.classList.remove("_clickthrough"));
    this.stop = 0;
  }
  getY(scrollTop) {
    const value = scrollTop - this.stop;
    const total = this.win.innerHeight - this.component.item.offset - this.stop;
    return this.stop && tuiClamp(100 - value / total * 100, 0, 100);
  }
  static {
    this.ɵfac = function TuiSheetTopDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetTopDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetTopDirective,
      selectors: [["", "tuiSheetTop", ""]],
      inputs: {
        stop: [0, "tuiSheetTop", "stop"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetTopDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiSheetTop]"
    }]
  }], null, {
    stop: [{
      type: Input,
      args: ["tuiSheetTop"]
    }]
  });
})();
var TuiSheetStopDirective = class _TuiSheetStopDirective {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.$ = inject(TUI_SHEET_SCROLL).pipe(map((y) => Math.floor(y) > this.el.offsetTop), distinctUntilChanged(), withLatestFrom(inject(TUI_SHEET_DRAGGED)), map(([above, dragged]) => !above && !dragged), filter(Boolean), throttleTime(100), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.scrollRef.style.overflow = "hidden";
      this.scrollRef.classList.remove("_stuck");
      this.scrollRef.scrollTop = this.el.offsetTop;
      timer(100).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.scrollRef.style.overflow = "";
      });
    });
  }
  static {
    this.ɵfac = function TuiSheetStopDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetStopDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetStopDirective,
      selectors: [["", "tuiSheetStop", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetStopDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiSheetStop]"
    }]
  }], null, null);
})();
var TuiSheetComponent = class _TuiSheetComponent {
  constructor() {
    this.stopsRefs = EMPTY_QUERY;
    this.destroyRef = inject(DestroyRef);
    this.scroll$ = inject(TUI_SHEET_SCROLL);
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.id = "";
    this.isIos = inject(TUI_IS_IOS);
    this.moreWord$ = inject(TUI_MORE_WORD);
    this.stuck$ = this.scroll$.pipe(map((y) => Math.floor(y) > this.contentTop));
    this.stuck$$ = this.stuck$.pipe(takeUntilDestroyed()).subscribe((add) => add ? this.el.classList.add("_stuck") : this.el.classList.remove("_stuck"));
  }
  get context() {
    return __spreadProps(__spreadValues({}, this.item), {
      scroll$: this.scroll$.pipe(tuiZonefull(this.zone))
    });
  }
  get stops() {
    return this.getStops(this.stopsRefs);
  }
  get imageStop() {
    return this.item.imageSlide && this.stops[this.stops.length - 1] || 0;
  }
  get imageHeight() {
    return this.contentTop - this.sheetTop;
  }
  ngAfterViewInit() {
    this.el.scrollTop = [...this.stops, this.sheetTop, this.contentTop][this.item.initial] ?? 0;
  }
  onId(id) {
    this.id = id;
  }
  scrollTo(top = this.sheetTop) {
    if (this.isIos) {
      const offset = top - this.el.scrollTop - 16;
      this.el.style.transition = "none";
      this.el.style.transform = `scaleX(-1) translate3d(0, ${offset}px, 0)`;
      timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.el.style.transition = "";
        this.el.style.transform = "";
      });
    }
    this.el.scrollTo({
      top,
      behavior: "smooth"
    });
  }
  close() {
    if (this.context.closeable) {
      this.context.$implicit.complete();
    }
  }
  get contentTop() {
    return this.content?.nativeElement.offsetTop ?? Infinity;
  }
  get sheetTop() {
    return this.sheet?.nativeElement.offsetTop ?? Infinity;
  }
  getStops(stops) {
    return stops.map(({
      nativeElement
    }) => nativeElement.offsetTop + nativeElement.clientHeight);
  }
  static {
    this.ɵfac = function TuiSheetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSheetComponent,
      selectors: [["tui-sheet"]],
      viewQuery: function TuiSheetComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c38, 5);
          ɵɵviewQuery(_c46, 5);
          ɵɵviewQuery(_c55, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sheet = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stopsRefs = _t);
        }
      },
      hostAttrs: ["role", "dialog"],
      hostVars: 3,
      hostBindings: function TuiSheetComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-sheet-id", function TuiSheetComponent_tui_sheet_id_HostBindingHandler($event) {
            return ctx.onId($event.detail);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-labelledby", ctx.id);
          ɵɵclassProp("_ios", ctx.isIos);
        }
      },
      inputs: {
        item: "item"
      },
      features: [ɵɵProvidersFeature(TUI_SHEET_PROVIDERS)],
      decls: 13,
      vars: 9,
      consts: [["sheet", ""], ["content", ""], ["stops", ""], [1, "t-bumpers", 3, "click"], ["class", "t-bumper", 3, "marginTop", 4, "ngFor", "ngForOf"], [1, "t-wrapper"], ["class", "t-top", 3, "tuiSheetTop", 4, "ngIf"], ["tuiSheetStop", "", 1, "t-sheet"], [1, "t-bar"], ["type", "button", 1, "t-button", 3, "click", "title"], [1, "t-content"], ["tuiSheetHeading", "", "class", "t-heading", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-bumper"], [1, "t-top", 3, "tuiSheetTop"], ["alt", "", "class", "t-image", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["alt", "", 1, "t-image", 3, "src"], ["tuiSheetHeading", "", 1, "t-heading"]],
      template: function TuiSheetComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("click", function TuiSheetComponent_Template_div_click_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close());
          });
          ɵɵtemplate(1, TuiSheetComponent_div_1_Template, 2, 2, "div", 4);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 5, 0);
          ɵɵtemplate(4, TuiSheetComponent_header_4_Template, 2, 3, "header", 6);
          ɵɵelementStart(5, "section", 7, 1);
          ɵɵelement(7, "div", 8);
          ɵɵelementStart(8, "tui-sheet-bar")(9, "button", 9);
          ɵɵpipe(10, "async");
          ɵɵlistener("click", function TuiSheetComponent_Template_button_click_9_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.scrollTo(ctx.stops[1]));
          });
          ɵɵelementEnd()();
          ɵɵelementStart(11, "div", 10);
          ɵɵtemplate(12, TuiSheetComponent_h2_12_Template, 2, 1, "h2", 11);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.item.stops);
          ɵɵadvance();
          ɵɵclassProp("t-wrapper_shadow", !ctx.item.image);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.item.image);
          ɵɵadvance(5);
          ɵɵproperty("title", ɵɵpipeBind1(10, 7, ctx.moreWord$));
          ɵɵadvance(3);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiSheetBarComponent, TuiSheetHeadingComponent, TuiSheetTopDirective, TuiSheetStopDirective, AsyncPipe],
      styles: ["[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;position:absolute;left:0;bottom:0;right:0;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;top:auto;border-radius:.75rem .75rem 0 0;overflow-y:auto;overflow-x:hidden;scroll-snap-type:y mandatory;box-shadow:0 50vh var(--tui-background-elevation-1);padding-right:1rem;margin-left:-1rem;transform:scaleX(-1);clip-path:inset(0 1rem 0 0 round .75rem .75rem 0 0);overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}._stuck[_nghost-%COMP%]{scroll-snap-type:none}@supports (-moz-appearance: none){[_nghost-%COMP%]{scroll-snap-type:none}}.t-bumpers[_ngcontent-%COMP%]{display:flex;block-size:100%}.t-wrapper_closeable[_nghost-%COMP%]   .t-bumpers[_ngcontent-%COMP%], .t-wrapper_closeable   [_nghost-%COMP%]   .t-bumpers[_ngcontent-%COMP%]{scroll-snap-stop:always;scroll-snap-align:start;scroll-margin:-1px}.t-bumper[_ngcontent-%COMP%]{scroll-snap-stop:always;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-wrapper[_ngcontent-%COMP%]{border-radius:inherit;scroll-snap-stop:always;scroll-snap-align:start}.t-wrapper_shadow[_ngcontent-%COMP%]{box-shadow:var(--tui-shadow-small)}.t-top[_ngcontent-%COMP%]{position:sticky;top:0;border-radius:.8rem .8rem 0 0;box-shadow:var(--tui-shadow-small);transform:scaleX(-1);overflow:hidden}.t-top._clickthrough[_ngcontent-%COMP%]{pointer-events:none}._overlay:not(._visible)[_nghost-%COMP%]   .t-top[_ngcontent-%COMP%], ._overlay:not(._visible)   [_nghost-%COMP%]   .t-top[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transform:scaleX(-1)!important}.t-image[_ngcontent-%COMP%]{display:block;inline-size:100%}.t-sheet[_ngcontent-%COMP%]{position:relative;border-radius:inherit;scroll-snap-stop:always;scroll-snap-align:start;transform:scaleX(-1)}.t-top[_ngcontent-%COMP%]:not(._rounded) ~ .t-sheet[_ngcontent-%COMP%]   .t-bar[_ngcontent-%COMP%]{border-radius:0}.t-bar[_ngcontent-%COMP%]{transition-property:border-radius;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;block-size:1.5rem;margin-bottom:-1.5rem;border-radius:inherit;background:var(--tui-background-elevation-1);box-shadow:inset 0 1px #ffffff40}.t-button[_ngcontent-%COMP%]{position:absolute;top:0;block-size:1.5rem;inline-size:3rem;padding:0;border:0;opacity:0}.t-content[_ngcontent-%COMP%]{padding:1rem;margin-top:-1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-heading[_ngcontent-%COMP%]{padding-bottom:.5rem;background:var(--tui-background-elevation-1)}"],
      data: {
        animation: [tuiSlideInTop]
      },
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiSheetComponent.prototype, "context", null);
__decorate([tuiPure], TuiSheetComponent.prototype, "getStops", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_SHEET_PROVIDERS,
      animations: [tuiSlideInTop],
      host: {
        role: "dialog",
        "[attr.aria-labelledby]": "id",
        "[class._ios]": "isIos",
        [`(${TUI_SHEET_ID})`]: "onId($event.detail)"
      },
      template: '<div\n    class="t-bumpers"\n    (click)="close()"\n>\n    <div\n        *ngFor="let stop of item.stops"\n        #stops\n        class="t-bumper"\n        [style.marginTop]="stop"\n    ></div>\n</div>\n<div\n    #sheet\n    class="t-wrapper"\n    [class.t-wrapper_shadow]="!item.image"\n>\n    <header\n        *ngIf="item.image"\n        class="t-top"\n        [tuiSheetTop]="imageStop"\n    >\n        <img\n            *polymorpheusOutlet="item.image as src; context: context"\n            alt=""\n            class="t-image"\n            [src]="src"\n        />\n    </header>\n    <section\n        #content\n        tuiSheetStop\n        class="t-sheet"\n    >\n        <div class="t-bar"></div>\n        <tui-sheet-bar>\n            <button\n                type="button"\n                class="t-button"\n                [title]="moreWord$ | async"\n                (click)="scrollTo(stops[1])"\n            ></button>\n        </tui-sheet-bar>\n        <div class="t-content">\n            <h2\n                *polymorpheusOutlet="item.content as text; context: context"\n                tuiSheetHeading\n                class="t-heading"\n            >\n                {{ text }}\n            </h2>\n        </div>\n    </section>\n</div>\n',
      styles: [":host{scrollbar-width:none;-ms-overflow-style:none;position:absolute;left:0;bottom:0;right:0;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;top:auto;border-radius:.75rem .75rem 0 0;overflow-y:auto;overflow-x:hidden;scroll-snap-type:y mandatory;box-shadow:0 50vh var(--tui-background-elevation-1);padding-right:1rem;margin-left:-1rem;transform:scaleX(-1);clip-path:inset(0 1rem 0 0 round .75rem .75rem 0 0);overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host._stuck{scroll-snap-type:none}@supports (-moz-appearance: none){:host{scroll-snap-type:none}}.t-bumpers{display:flex;block-size:100%}:host-context(.t-wrapper_closeable) .t-bumpers{scroll-snap-stop:always;scroll-snap-align:start;scroll-margin:-1px}.t-bumper{scroll-snap-stop:always;scroll-snap-align:start;block-size:1rem;inline-size:1rem}.t-wrapper{border-radius:inherit;scroll-snap-stop:always;scroll-snap-align:start}.t-wrapper_shadow{box-shadow:var(--tui-shadow-small)}.t-top{position:sticky;top:0;border-radius:.8rem .8rem 0 0;box-shadow:var(--tui-shadow-small);transform:scaleX(-1);overflow:hidden}.t-top._clickthrough{pointer-events:none}:host-context(._overlay:not(._visible)) .t-top{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transform:scaleX(-1)!important}.t-image{display:block;inline-size:100%}.t-sheet{position:relative;border-radius:inherit;scroll-snap-stop:always;scroll-snap-align:start;transform:scaleX(-1)}.t-top:not(._rounded)~.t-sheet .t-bar{border-radius:0}.t-bar{transition-property:border-radius;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:0;z-index:1;block-size:1.5rem;margin-bottom:-1.5rem;border-radius:inherit;background:var(--tui-background-elevation-1);box-shadow:inset 0 1px #ffffff40}.t-button{position:absolute;top:0;block-size:1.5rem;inline-size:3rem;padding:0;border:0;opacity:0}.t-content{padding:1rem;margin-top:-1rem;border-radius:inherit;background:var(--tui-background-elevation-1)}.t-heading{padding-bottom:.5rem;background:var(--tui-background-elevation-1)}\n"]
    }]
  }], null, {
    sheet: [{
      type: ViewChild,
      args: ["sheet"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    stopsRefs: [{
      type: ViewChildren,
      args: ["stops"]
    }],
    item: [{
      type: Input
    }],
    context: [],
    getStops: []
  });
})();
var TUI_SHEET_DEFAULT_OPTIONS = {
  image: "",
  imageSlide: true,
  stops: [],
  initial: 0,
  offset: 16,
  closeable: true,
  overlay: false
};
var TUI_SHEET_OPTIONS = tuiCreateToken(__spreadValues({}, TUI_SHEET_DEFAULT_OPTIONS));
var TuiSheetService = class _TuiSheetService {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_SHEET_OPTIONS);
    this.sheets$ = new BehaviorSubject([]);
  }
  open(content, options = {}) {
    return new Observable(($implicit) => {
      const completeWith = (result) => {
        $implicit.next(result);
        $implicit.complete();
      };
      const sheet = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        completeWith,
        $implicit,
        scroll$: EMPTY
      });
      const focused = tuiGetNativeFocused(this.doc);
      if (tuiIsHTMLElement(focused) && sheet.overlay) {
        focused.blur();
      }
      this.sheets$.next([...this.sheets$.value, sheet]);
      return () => {
        this.sheets$.next(this.sheets$.value.filter((item) => item !== sheet));
      };
    });
  }
  static {
    this.ɵfac = function TuiSheetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiSheetService,
      factory: _TuiSheetService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OFFSET = 16;
function processDragged(dragged$, scroll$) {
  const touchstart$ = dragged$.pipe(filter(Boolean));
  const touchend$ = dragged$.pipe(filter(tuiIsFalsy));
  const race$ = race(scroll$, timer(100)).pipe(debounceTime(200), take(1), map(TUI_FALSE_HANDLER));
  return touchstart$.pipe(switchMap(() => touchend$.pipe(switchMap(() => race$), startWith(true))), startWith(false));
}
var TuiSheetWrapperDirective = class _TuiSheetWrapperDirective {
  constructor() {
    this.zone = inject(NgZone);
    this.win = inject(WA_WINDOW);
    this.tuiSheetWrapper = 16;
  }
  get overlay$() {
    return this.scroll$.pipe(map((y) => y + 16 > this.win.innerHeight - this.tuiSheetWrapper), distinctUntilChanged(), tuiZonefull(this.zone));
  }
  get visible$() {
    return processDragged(this.dragged$, this.scroll$).pipe(distinctUntilChanged(), tuiZonefull(this.zone));
  }
  get height$() {
    return this.scroll$.pipe(map(this.getHeight.bind(this)));
  }
  getHeight(value) {
    return this.sheet?.context.overlay ? null : tuiClamp(this.withImage(value) + OFFSET, OFFSET, this.win.innerHeight);
  }
  withImage(value) {
    return !this.sheet?.imageStop || Math.floor(value) > this.sheet.imageStop ? value : value - this.sheet.imageHeight;
  }
  static {
    this.ɵfac = function TuiSheetWrapperDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetWrapperDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetWrapperDirective,
      selectors: [["", "tuiSheetWrapper", ""]],
      contentQueries: function TuiSheetWrapperDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiSheetComponent, 5);
          ɵɵcontentQuery(dirIndex, TuiSheetComponent, 7, TUI_SHEET_DRAGGED);
          ɵɵcontentQuery(dirIndex, TuiSheetComponent, 7, TUI_SHEET_SCROLL);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sheet = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dragged$ = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroll$ = _t.first);
        }
      },
      inputs: {
        tuiSheetWrapper: "tuiSheetWrapper"
      },
      exportAs: ["tuiSheetWrapper"]
    });
  }
};
__decorate([tuiPure], TuiSheetWrapperDirective.prototype, "overlay$", null);
__decorate([tuiPure], TuiSheetWrapperDirective.prototype, "visible$", null);
__decorate([tuiPure], TuiSheetWrapperDirective.prototype, "height$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetWrapperDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "[tuiSheetWrapper]",
      exportAs: "tuiSheetWrapper"
    }]
  }], null, {
    sheet: [{
      type: ContentChild,
      args: [TuiSheetComponent]
    }],
    dragged$: [{
      type: ContentChild,
      args: [TuiSheetComponent, {
        read: TUI_SHEET_DRAGGED,
        static: true
      }]
    }],
    scroll$: [{
      type: ContentChild,
      args: [TuiSheetComponent, {
        read: TUI_SHEET_SCROLL,
        static: true
      }]
    }],
    tuiSheetWrapper: [{
      type: Input
    }],
    overlay$: [],
    visible$: [],
    height$: []
  });
})();
var TuiSheetCloseDirective = class _TuiSheetCloseDirective {
  constructor() {
    this.zone = inject(NgZone);
    this.dragged$ = inject(TUI_SHEET_DRAGGED);
    this.scroll$ = inject(TUI_SHEET_SCROLL);
    this.win = inject(WA_WINDOW);
    this.el = tuiInjectElement();
    this.sheet = inject(TuiSheetComponent);
    this.close = merge(tuiTypedFromEvent(this.el, TUI_SHEET_CLOSE), this.dragged$.pipe(tuiIfMap(() => this.scroll$.pipe(startWith(this.el.scrollTop)), tuiIsFalsy), filter((y) => this.sheet.item?.closeable && this.shouldClose(y)), distinctUntilChanged(), tuiZonefull(this.zone)));
  }
  shouldClose(scrollTop) {
    const height = Math.min(this.win.innerHeight, this.el.scrollHeight - this.win.innerHeight);
    const min = Math.min(height, this.sheet.stops[0] || Infinity);
    return scrollTop < min / 2;
  }
  static {
    this.ɵfac = function TuiSheetCloseDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetCloseDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetCloseDirective,
      selectors: [["tui-sheet", "close", ""]],
      outputs: {
        close: "close"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetCloseDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-sheet[close]"
    }]
  }], null, {
    close: [{
      type: Output
    }]
  });
})();
var TuiSheetsHostComponent = class _TuiSheetsHostComponent {
  constructor() {
    this.service = inject(TuiSheetService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.height$ = inject(TUI_WINDOW_SIZE).pipe(map(({
      height
    }) => height));
    this.sheets = [];
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
  }
  ngOnInit() {
    this.service.sheets$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((sheets) => {
      this.sheets = sheets;
      this.cdr.detectChanges();
    });
  }
  close({
    closeable,
    $implicit
  }) {
    if (closeable) {
      $implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiSheetsHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetsHostComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSheetsHostComponent,
      selectors: [["tui-sheets-host"]],
      decls: 2,
      vars: 1,
      consts: [["wrapper", "tuiSheetWrapper"], ["class", "t-wrapper", 3, "t-wrapper_closeable", "t-wrapper_overlay", "t-wrapper_visible", "height", "tuiSheetWrapper", "click.self", 4, "ngFor", "ngForOf"], [1, "t-overlay", 3, "click"], [1, "t-wrapper", 3, "click.self", "tuiSheetWrapper"], ["tuiScrollRef", "", 3, "close", "item"]],
      template: function TuiSheetsHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiSheetsHostComponent_div_0_Template, 7, 22, "div", 1);
          ɵɵelementStart(1, "div", 2);
          ɵɵlistener("click", function TuiSheetsHostComponent_Template_div_click_1_listener() {
            return ctx.sheets[0] && ctx.close(ctx.sheets[0]);
          });
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.sheets);
        }
      },
      dependencies: [NgForOf, TuiSheetComponent, TuiSheetWrapperDirective, TuiSheetCloseDirective, AsyncPipe],
      styles: ["[_nghost-%COMP%]{position:sticky;bottom:0;display:block;block-size:0}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:0;left:0;inline-size:100%;z-index:-1;block-size:100%;background:#000;opacity:.001;pointer-events:none}.t-wrapper_overlay[_ngcontent-%COMP%] ~ .t-overlay[_ngcontent-%COMP%]{opacity:.8;pointer-events:auto;touch-action:none}.t-wrapper[_ngcontent-%COMP%]{position:absolute;bottom:0;z-index:0;inline-size:100%;block-size:100vh;overflow:hidden}.t-wrapper_visible[_ngcontent-%COMP%]{overflow:visible}"],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetsHostComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-sheets-host",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiFadeIn],
      template: '<div\n    *ngFor="let item of sheets"\n    #wrapper="tuiSheetWrapper"\n    class="t-wrapper"\n    [@tuiFadeIn]="options"\n    [@tuiSlideInTop]="options"\n    [class.t-wrapper_closeable]="item.closeable"\n    [class.t-wrapper_overlay]="item.overlay || (wrapper.overlay$ | async)"\n    [class.t-wrapper_visible]="wrapper.visible$ | async"\n    [style.height.px]="wrapper.height$ | async"\n    [tuiSheetWrapper]="item.offset"\n    (click.self)="close(item)"\n>\n    <tui-sheet\n        tuiScrollRef\n        [item]="item"\n        [style.height.px]="((height$ | async) || 0) - item.offset"\n        (close)="close(item)"\n    />\n</div>\n<div\n    class="t-overlay"\n    (click)="sheets[0] && close(sheets[0])"\n></div>\n',
      styles: [":host{position:sticky;bottom:0;display:block;block-size:0}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:fixed;top:0;left:0;inline-size:100%;z-index:-1;block-size:100%;background:#000;opacity:.001;pointer-events:none}.t-wrapper_overlay~.t-overlay{opacity:.8;pointer-events:auto;touch-action:none}.t-wrapper{position:absolute;bottom:0;z-index:0;inline-size:100%;block-size:100vh;overflow:hidden}.t-wrapper_visible{overflow:visible}\n"]
    }]
  }], null, null);
})();
var TuiSheetDirective = class _TuiSheetDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiSheetService);
    this.open$ = new Subject();
    this.options = {};
    this.tuiSheetChange = this.open$.pipe(tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  set tuiSheet(open) {
    this.open$.next(open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSheetDirective_BaseFactory;
      return function TuiSheetDirective_Factory(__ngFactoryType__) {
        return (ɵTuiSheetDirective_BaseFactory || (ɵTuiSheetDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiSheetDirective)))(__ngFactoryType__ || _TuiSheetDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSheetDirective,
      selectors: [["ng-template", "tuiSheet", ""]],
      inputs: {
        options: [0, "tuiSheetOptions", "options"],
        tuiSheet: "tuiSheet"
      },
      outputs: {
        tuiSheetChange: "tuiSheetChange"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "ng-template[tuiSheet]"
    }]
  }], null, {
    options: [{
      type: Input,
      args: ["tuiSheetOptions"]
    }],
    tuiSheetChange: [{
      type: Output
    }],
    tuiSheet: [{
      type: Input
    }]
  });
})();
var TuiSheetModule = class _TuiSheetModule {
  static {
    this.ɵfac = function TuiSheetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSheetModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiSheetModule,
      declarations: [TuiSheetsHostComponent, TuiSheetComponent, TuiSheetBarComponent, TuiSheetHeadingComponent, TuiSheetTopDirective, TuiSheetDirective, TuiSheetWrapperDirective, TuiSheetCloseDirective, TuiSheetStopDirective],
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiLet, TuiButton, TuiScrollbar],
      exports: [TuiSheetsHostComponent, TuiSheetComponent, TuiSheetHeadingComponent, TuiSheetDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, TuiScrollbar]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSheetModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiLet, TuiButton, TuiScrollbar],
      declarations: [TuiSheetsHostComponent, TuiSheetComponent, TuiSheetBarComponent, TuiSheetHeadingComponent, TuiSheetTopDirective, TuiSheetDirective, TuiSheetWrapperDirective, TuiSheetCloseDirective, TuiSheetStopDirective],
      exports: [TuiSheetsHostComponent, TuiSheetComponent, TuiSheetHeadingComponent, TuiSheetDirective],
      schemas: [NO_ERRORS_SCHEMA]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-table-bar.mjs
function TuiTableBarComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
function TuiTableBarComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function TuiTableBarComponent_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r2.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, ctx_r2.closeWord$), " ");
  }
}
function TuiTableBarsHostComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTableBarsHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiTableBarsHostComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TuiTableBarComponent = class _TuiTableBarComponent {
  constructor() {
    this.icons = inject(TUI_COMMON_ICONS);
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.context = injectContext();
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
  }
  getTheme(appearance) {
    return appearance === "onDark" ? "dark" : null;
  }
  close() {
    this.context.$implicit.complete();
  }
  static {
    this.ɵfac = function TuiTableBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableBarComponent,
      selectors: [["tui-table-bar"]],
      hostVars: 2,
      hostBindings: function TuiTableBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.animation);
          ɵɵattribute("data-appearance", ctx.context.mode);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 5,
      vars: 6,
      consts: [["automation-id", "tui-table-bar__bar", 1, "t-container"], [1, "t-inner"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "icon", "automation-id", "tui-table-bar__close-button", "size", "xs", "tuiIconButton", "", "type", "button", "class", "t-close-button", 3, "iconStart", "click", 4, "ngIf"], ["appearance", "icon", "automation-id", "tui-table-bar__close-button", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-close-button", 3, "click", "iconStart"]],
      template: function TuiTableBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
          ɵɵtemplate(3, TuiTableBarComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiTableBarComponent_button_4_Template, 3, 4, "button", 4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("t-container_adaptive", ctx.context.adaptive);
          ɵɵattribute("tuiTheme", ctx.getTheme(ctx.context.mode || "onDark"));
          ɵɵadvance(3);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.context.hasCloseButton);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiButton],
      styles: ["[_nghost-%COMP%]{display:block;inline-size:100%;box-shadow:var(--tui-shadow-small);flex:0 0 100%}[data-appearance=onLight][_nghost-%COMP%]{background:var(--tui-background-base);color:var(--tui-text-primary)}[data-appearance=onDark][_nghost-%COMP%]{background:var(--tui-background-accent-opposite-pressed);color:var(--tui-background-base)}.t-wrapper[_ngcontent-%COMP%]{display:flex;inline-size:100%}.t-container[_ngcontent-%COMP%]{position:relative;margin:0 auto}@media screen and (min-width: 80em){.t-container.t-container_adaptive[_ngcontent-%COMP%]{inline-size:69rem}}@media screen and (max-width: 79.9625em){.t-container.t-container_adaptive[_ngcontent-%COMP%]{inline-size:51.5rem}}@media screen and (max-width: 47.9625em){.t-container.t-container_adaptive[_ngcontent-%COMP%]{inline-size:100%;padding:0 1rem;box-sizing:border-box}}@media screen and (min-width: 80em){.t-container[_ngcontent-%COMP%]{inline-size:69rem}}@media screen and (max-width: 79.9625em){.t-container[_ngcontent-%COMP%]{inline-size:51.5rem;padding:0 3rem}}.t-inner[_ngcontent-%COMP%]{display:flex;align-items:center;block-size:4.5rem;inline-size:100%;overflow:hidden}tui-root._mobile[_nghost-%COMP%]   .t-inner[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-inner[_ngcontent-%COMP%]{block-size:5.75rem}.t-close-button[_ngcontent-%COMP%]{margin-left:1.5rem}.t-content[_ngcontent-%COMP%]{inline-size:100%;flex:1 1 0}"],
      data: {
        animation: [tuiSlideInTop, tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableBarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-bar",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiParentAnimation],
      host: {
        "[@tuiSlideInTop]": "animation",
        "[attr.data-appearance]": "context.mode"
      },
      template: `<div
    automation-id="tui-table-bar__bar"
    class="t-container"
    [attr.tuiTheme]="getTheme(context.mode || 'onDark')"
    [class.t-container_adaptive]="context.adaptive"
>
    <div class="t-inner">
        <div class="t-content">
            <ng-container *polymorpheusOutlet="context.content as text; context: context">
                {{ text }}
            </ng-container>
        </div>

        <button
            *ngIf="context.hasCloseButton"
            appearance="icon"
            automation-id="tui-table-bar__close-button"
            size="xs"
            tuiIconButton
            type="button"
            class="t-close-button"
            [iconStart]="icons.close"
            (click)="close()"
        >
            {{ closeWord$ | async }}
        </button>
    </div>
</div>
`,
      styles: [":host{display:block;inline-size:100%;box-shadow:var(--tui-shadow-small);flex:0 0 100%}:host[data-appearance=onLight]{background:var(--tui-background-base);color:var(--tui-text-primary)}:host[data-appearance=onDark]{background:var(--tui-background-accent-opposite-pressed);color:var(--tui-background-base)}.t-wrapper{display:flex;inline-size:100%}.t-container{position:relative;margin:0 auto}@media screen and (min-width: 80em){.t-container.t-container_adaptive{inline-size:69rem}}@media screen and (max-width: 79.9625em){.t-container.t-container_adaptive{inline-size:51.5rem}}@media screen and (max-width: 47.9625em){.t-container.t-container_adaptive{inline-size:100%;padding:0 1rem;box-sizing:border-box}}@media screen and (min-width: 80em){.t-container{inline-size:69rem}}@media screen and (max-width: 79.9625em){.t-container{inline-size:51.5rem;padding:0 3rem}}.t-inner{display:flex;align-items:center;block-size:4.5rem;inline-size:100%;overflow:hidden}:host-context(tui-root._mobile) .t-inner{block-size:5.75rem}.t-close-button{margin-left:1.5rem}.t-content{inline-size:100%;flex:1 1 0}\n"]
    }]
  }], null, null);
})();
var TUI_TABLE_BARS = tuiCreateToken(new BehaviorSubject([]));
var TUI_TABLE_BAR_DEFAULT_OPTIONS = {
  adaptive: true,
  hasCloseButton: true,
  mode: "onDark"
};
var TUI_TABLE_BAR_OPTIONS = tuiCreateToken(TUI_TABLE_BAR_DEFAULT_OPTIONS);
function tuiTableBarOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABLE_BAR_OPTIONS, options, TUI_TABLE_BAR_DEFAULT_OPTIONS);
}
var TuiTableBarsService = class _TuiTableBarsService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTableBarsService_BaseFactory;
      return function TuiTableBarsService_Factory(__ngFactoryType__) {
        return (ɵTuiTableBarsService_BaseFactory || (ɵTuiTableBarsService_BaseFactory = ɵɵgetInheritedFactory(_TuiTableBarsService)))(__ngFactoryType__ || _TuiTableBarsService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiTableBarsService,
      factory: () => (() => new _TuiTableBarsService(TUI_TABLE_BARS, TuiTableBarComponent, inject(TUI_TABLE_BAR_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableBarsService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiTableBarsService(TUI_TABLE_BARS, TuiTableBarComponent, inject(TUI_TABLE_BAR_OPTIONS))
    }]
  }], null, null);
})();
var TuiTableBarDirective = class _TuiTableBarDirective extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTableBarDirective_BaseFactory;
      return function TuiTableBarDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTableBarDirective_BaseFactory || (ɵTuiTableBarDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTableBarDirective)))(__ngFactoryType__ || _TuiTableBarDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTableBarDirective,
      selectors: [["ng-template", "tuiTableBar", ""]],
      inputs: {
        open: [0, "tuiTableBar", "open"],
        options: [0, "tuiTableBarOptions", "options"]
      },
      outputs: {
        openChange: "tuiTableBarChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiTableBarsService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableBarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTableBar]",
      inputs: ["open: tuiTableBar", "options: tuiTableBarOptions"],
      outputs: ["openChange: tuiTableBarChange"],
      providers: [tuiAsPopover(TuiTableBarsService)]
    }]
  }], null, null);
})();
var TuiTableBarsHostComponent = class _TuiTableBarsHostComponent {
  constructor() {
    this.bars$ = inject(TUI_TABLE_BARS);
  }
  static {
    this.ɵfac = function TuiTableBarsHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTableBarsHostComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTableBarsHostComponent,
      selectors: [["tui-table-bars-host"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf"], [1, "t-wrapper"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiTableBarsHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTableBarsHostComponent_div_0_Template, 2, 3, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 1, ctx.bars$));
        }
      },
      dependencies: [AsyncPipe, NgForOf, PolymorpheusOutlet],
      styles: [".t-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;top:unset}"],
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTableBarsHostComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-table-bars-host",
      imports: [AsyncPipe, NgForOf, PolymorpheusOutlet, PolymorpheusTemplate],
      template: `
        <div
            *ngFor="let item of bars$ | async"
            class="t-wrapper"
            @tuiParentAnimation
        >
            <ng-container *polymorpheusOutlet="item.component; context: item" />
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      styles: [".t-wrapper{position:fixed;top:0;left:0;bottom:0;right:0;top:unset}\n"]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/legacy/fesm2022/taiga-ui-legacy-components-textarea.mjs
var _c026 = ["focusableElement"];
var _c125 = [[["textarea"]], "*"];
var _c217 = ["textarea", "*"];
var _c39 = () => ({
  standalone: true
});
var _c47 = (a0) => ({
  $implicit: a0
});
function TuiTextareaComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTextareaComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r1.value.length, "/", ctx_r1.maxLength, " ");
  }
}
function TuiTextareaComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-placeholder_raised", ctx_r1.placeholderRaised);
  }
}
function TuiTextareaComponent_div_18_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r3 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r3.toString());
  }
}
function TuiTextareaComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtemplate(1, TuiTextareaComponent_div_18_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.iconLeftContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c47, ctx_r1.size));
  }
}
function TuiTextareaComponent_ng_container_19_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 25);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r4);
  }
}
function TuiTextareaComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTextareaComponent_ng_container_19_tui_icon_1_Template, 1, 1, "tui-icon", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.controller.customContent);
  }
}
function TuiTextareaComponent_ng_container_20_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 27);
    ɵɵlistener("click.stop", function TuiTextareaComponent_ng_container_20_tui_icon_1_Template_tui_icon_click_stop_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onValueChange(""));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const src_r6 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r6.toString());
  }
}
function TuiTextareaComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTextareaComponent_ng_container_20_tui_icon_1_Template, 1, 1, "tui-icon", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.iconCleaner)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c47, ctx_r1.size));
  }
}
function TuiTextareaComponent_tui_tooltip_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tooltip", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("content", ctx_r1.hintOptions == null ? null : ctx_r1.hintOptions.content)("describeId", ctx_r1.id);
  }
}
function TuiTextareaComponent_div_22_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 23);
  }
  if (rf & 2) {
    const src_r7 = ctx.polymorpheusOutlet;
    ɵɵproperty("icon", src_r7.toString());
  }
}
function TuiTextareaComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, TuiTextareaComponent_div_22_tui_icon_1_Template, 1, 1, "tui-icon", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.iconContent)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c47, ctx_r1.size));
  }
}
var DEFAULT_ROWS = 20;
var LINE_HEIGHT_M = 20;
var LINE_HEIGHT_L = 24;
var TuiTextareaComponent = class _TuiTextareaComponent extends AbstractTuiControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    this.hintOptions = inject(TuiHintOptionsDirective, {
      optional: true
    });
    this.rows = DEFAULT_ROWS;
    this.maxLength = null;
    this.expandable = false;
  }
  get nativeFocusableElement() {
    if (this.computedDisabled) {
      return null;
    }
    return this.textfield?.nativeElement || this.focusableElement?.nativeElement || null;
  }
  get focused() {
    return tuiIsNativeFocused(this.nativeFocusableElement);
  }
  get computeMaxHeight() {
    return this.expandable ? this.rows * this.lineHeight : null;
  }
  onValueChange(value) {
    this.value = value;
  }
  get labelOutside() {
    return this.options.appearance() === "table" || this.controller.labelOutside;
  }
  get size() {
    return this.controller.size;
  }
  get borderStart() {
    return this.iconLeftContent ? TUI_ICON_START_PADDINGS[this.size] : 0;
  }
  get borderEnd() {
    return tuiGetBorder(!!this.iconContent, this.hasCleaner, this.hasTooltip, this.hasCustomContent, this.size);
  }
  get hasTooltip() {
    return !!this.hintOptions?.content && (this.controller.options.hintOnDisabled || !this.computedDisabled);
  }
  get hasValue() {
    return this.value !== "";
  }
  get hasCounter() {
    return !!this.maxLength && this.interactive;
  }
  get appearance() {
    return this.options.appearance() === "table" ? "table" : this.controller.appearance;
  }
  get hasCleaner() {
    return this.controller.cleaner && this.hasValue && this.interactive;
  }
  get hasPlaceholder() {
    return this.placeholderRaisable || !this.hasValue && !this.hasExampleText;
  }
  get hasCustomContent() {
    return !!this.controller.customContent;
  }
  get iconLeftContent() {
    return this.controller.iconStart;
  }
  get iconContent() {
    return this.controller.icon;
  }
  get iconCleaner() {
    return this.controller.options.iconCleaner;
  }
  get hasExampleText() {
    return !!this.textfield?.nativeElement.placeholder && this.focused && !this.hasValue && !this.readOnly;
  }
  get placeholderRaised() {
    return this.placeholderRaisable && (this.computedFocused && !this.readOnly || this.hasValue);
  }
  get fittedContent() {
    return this.value.slice(0, this.maxLength || Infinity);
  }
  get extraContent() {
    return this.value.slice(this.maxLength || Infinity);
  }
  onFocused(focused) {
    this.updateFocused(focused);
  }
  onMouseDown(event) {
    if (event.target === this.nativeFocusableElement) {
      return;
    }
    event.preventDefault();
    if (this.nativeFocusableElement) {
      this.nativeFocusableElement.focus();
    }
  }
  getFallbackValue() {
    return "";
  }
  get lineHeight() {
    return this.controller.size === "m" ? LINE_HEIGHT_M : LINE_HEIGHT_L;
  }
  get placeholderRaisable() {
    return this.size !== "s" && !this.controller.labelOutside;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextareaComponent_BaseFactory;
      return function TuiTextareaComponent_Factory(__ngFactoryType__) {
        return (ɵTuiTextareaComponent_BaseFactory || (ɵTuiTextareaComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiTextareaComponent)))(__ngFactoryType__ || _TuiTextareaComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextareaComponent,
      selectors: [["tui-textarea"]],
      contentQueries: function TuiTextareaComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldComponent, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      viewQuery: function TuiTextareaComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c026, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusableElement = _t.first);
        }
      },
      hostVars: 17,
      hostBindings: function TuiTextareaComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiTextareaComponent_focusin_HostBindingHandler() {
            return ctx.onFocused(true);
          })("focusout", function TuiTextareaComponent_focusout_HostBindingHandler() {
            return ctx.onFocused(false);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--border-end", ctx.borderEnd, "rem")("--border-start", ctx.borderStart, "rem");
          ɵɵclassProp("_ios", ctx.isIOS)("_expandable", ctx.expandable)("_has-counter", ctx.hasCounter)("_label-outside", ctx.labelOutside)("_has-tooltip", ctx.hasTooltip)("_has-value", ctx.hasValue);
        }
      },
      inputs: {
        rows: "rows",
        maxLength: "maxLength",
        expandable: "expandable"
      },
      features: [ɵɵProvidersFeature([tuiAsFocusableItemAccessor(_TuiTextareaComponent), tuiAsControl2(_TuiTextareaComponent), TEXTFIELD_CONTROLLER_PROVIDER]), ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c217,
      decls: 23,
      vars: 27,
      consts: [["focusableElement", ""], [4, "ngIf"], ["automation-id", "tui-text-area__wrapper", "tuiWrapper", "", 1, "t-outline", 3, "appearance", "disabled", "focus", "hover", "invalid", "readOnly"], ["automation-id", "tui-text-area__counter", "class", "t-counter", 4, "ngIf"], [1, "t-content", 3, "mousedown"], [1, "t-wrapper"], ["automation-id", "tui-text-area__placeholder", "class", "t-placeholder", 3, "t-placeholder_raised", 4, "ngIf"], ["automation-id", "tui-text-area__scrollbar", 1, "t-box"], [1, "t-input-wrapper"], [1, "t-relative"], ["aria-hidden", "true", 1, "t-pseudo-content"], [3, "textContent"], [1, "t-pseudo-content__extra", 3, "textContent"], [1, "t-caret"], ["automation-id", "tui-text-area__native", 1, "t-input", 3, "ngModelChange", "disabled", "id", "ngModelOptions", "readOnly", "tabIndex", "ngModel"], [1, "t-icons"], ["class", "t-icon t-icon_left t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-text-area__tooltip", 3, "content", "describeId", 4, "ngIf"], ["class", "t-icon t-textfield-icon", 4, "ngIf"], ["automation-id", "tui-text-area__counter", 1, "t-counter"], ["automation-id", "tui-text-area__placeholder", 1, "t-placeholder"], [1, "t-icon", "t-icon_left", "t-textfield-icon"], ["tuiAppearance", "icon", 3, "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 3, "icon"], [3, "icon", 4, "polymorpheusOutlet"], [3, "icon"], ["tuiAppearance", "icon", "class", "t-cleaner", 3, "icon", "click.stop", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiAppearance", "icon", 1, "t-cleaner", 3, "click.stop", "icon"], ["automation-id", "tui-text-area__tooltip", 3, "content", "describeId"], [1, "t-icon", "t-textfield-icon"]],
      template: function TuiTextareaComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c125);
          ɵɵtemplate(0, TuiTextareaComponent_ng_container_0_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, TuiTextareaComponent_div_3_Template, 2, 2, "div", 3);
          ɵɵelementStart(4, "label", 4);
          ɵɵlistener("mousedown", function TuiTextareaComponent_Template_label_mousedown_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMouseDown($event));
          });
          ɵɵelementStart(5, "div", 5);
          ɵɵtemplate(6, TuiTextareaComponent_div_6_Template, 2, 2, "div", 6);
          ɵɵelementStart(7, "tui-scrollbar", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
          ɵɵelement(11, "span", 11)(12, "span", 12)(13, "span", 13);
          ɵɵelementEnd();
          ɵɵelementStart(14, "textarea", 14, 0);
          ɵɵtwoWayListener("ngModelChange", function TuiTextareaComponent_Template_textarea_ngModelChange_14_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.value, $event) || (ctx.value = $event);
            return ɵɵresetView($event);
          });
          ɵɵelementEnd();
          ɵɵprojection(16);
          ɵɵelementEnd()()()();
          ɵɵelementStart(17, "div", 15);
          ɵɵtemplate(18, TuiTextareaComponent_div_18_Template, 2, 4, "div", 16)(19, TuiTextareaComponent_ng_container_19_Template, 2, 1, "ng-container", 1)(20, TuiTextareaComponent_ng_container_20_Template, 2, 4, "ng-container", 1)(21, TuiTextareaComponent_tui_tooltip_21_Template, 1, 2, "tui-tooltip", 17)(22, TuiTextareaComponent_div_22_Template, 2, 4, "div", 18);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 24, ctx.hintOptions == null ? null : ctx.hintOptions.change$));
          ɵɵadvance(2);
          ɵɵproperty("appearance", ctx.appearance)("disabled", ctx.disabled)("focus", ctx.computedFocused)("hover", ctx.pseudoHover)("invalid", ctx.computedInvalid)("readOnly", ctx.readOnly);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCounter);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.hasPlaceholder);
          ɵɵadvance();
          ɵɵstyleProp("max-height", ctx.computeMaxHeight, "px");
          ɵɵadvance(4);
          ɵɵproperty("textContent", ctx.fittedContent || (ctx.nativeFocusableElement == null ? null : ctx.nativeFocusableElement.placeholder));
          ɵɵadvance();
          ɵɵproperty("textContent", ctx.extraContent);
          ɵɵadvance(2);
          ɵɵproperty("disabled", ctx.computedDisabled)("id", ctx.id)("ngModelOptions", ɵɵpureFunction0(26, _c39))("readOnly", ctx.readOnly)("tabIndex", ctx.computedFocusable ? 0 : -1);
          ɵɵtwoWayProperty("ngModel", ctx.value);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.iconLeftContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCustomContent);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasCleaner);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasTooltip);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.iconContent);
        }
      },
      dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, TuiScrollbar, TuiTooltipComponent, TuiWrapperDirective, PolymorpheusOutlet, TuiIcon, TuiAppearance, AsyncPipe],
      styles: ["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){[_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{text-wrap:balance}}.t-outline[_ngcontent-%COMP%]{min-block-size:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-block-size:inherit;inline-size:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-block-size:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{block-size:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{block-size:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;overflow-wrap:break-word;word-break:keep-all;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-status-negative-pale)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;block-size:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;block-size:1rem;inline-size:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:end;color:var(--tui-text-tertiary)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaComponent, [{
    type: Component,
    args: [{
      standalone: false,
      selector: "tui-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsFocusableItemAccessor(TuiTextareaComponent), tuiAsControl2(TuiTextareaComponent), TEXTFIELD_CONTROLLER_PROVIDER],
      host: {
        "[attr.data-size]": "size",
        "[class._ios]": "isIOS",
        "[class._expandable]": "expandable",
        "[class._has-counter]": "hasCounter",
        "[class._label-outside]": "labelOutside",
        "[class._has-tooltip]": "hasTooltip",
        "[class._has-value]": "hasValue",
        "[style.--border-end.rem]": "borderEnd",
        "[style.--border-start.rem]": "borderStart",
        "(focusin)": "onFocused(true)",
        "(focusout)": "onFocused(false)"
      },
      template: `<ng-container *ngIf="hintOptions?.change$ | async" />
<div
    automation-id="tui-text-area__wrapper"
    tuiWrapper
    class="t-outline"
    [appearance]="appearance"
    [disabled]="disabled"
    [focus]="computedFocused"
    [hover]="pseudoHover"
    [invalid]="computedInvalid"
    [readOnly]="readOnly"
>
    <div
        *ngIf="hasCounter"
        automation-id="tui-text-area__counter"
        class="t-counter"
    >
        {{ value.length }}/{{ maxLength }}
    </div>

    <label
        class="t-content"
        (mousedown)="onMouseDown($event)"
    >
        <div class="t-wrapper">
            <div
                *ngIf="hasPlaceholder"
                automation-id="tui-text-area__placeholder"
                class="t-placeholder"
                [class.t-placeholder_raised]="placeholderRaised"
            >
                <ng-content />
            </div>
            <tui-scrollbar
                automation-id="tui-text-area__scrollbar"
                class="t-box"
                [style.maxHeight.px]="computeMaxHeight"
            >
                <div class="t-input-wrapper">
                    <div class="t-relative">
                        <div
                            aria-hidden="true"
                            class="t-pseudo-content"
                        >
                            <span [textContent]="fittedContent || nativeFocusableElement?.placeholder"></span>
                            <span
                                class="t-pseudo-content__extra"
                                [textContent]="extraContent"
                            ></span>
                            <span class="t-caret"></span>
                        </div>
                        <textarea
                            #focusableElement
                            automation-id="tui-text-area__native"
                            class="t-input"
                            [disabled]="computedDisabled"
                            [id]="id"
                            [ngModelOptions]="{standalone: true}"
                            [readOnly]="readOnly"
                            [tabIndex]="computedFocusable ? 0 : -1"
                            [(ngModel)]="value"
                        ></textarea>
                        <ng-content select="textarea" />
                    </div>
                </div>
            </tui-scrollbar>
        </div>
        <div class="t-icons">
            <div
                *ngIf="iconLeftContent"
                class="t-icon t-icon_left t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconLeftContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
            <ng-container *ngIf="hasCustomContent">
                <tui-icon
                    *polymorpheusOutlet="controller.customContent as src"
                    [icon]="src"
                />
            </ng-container>
            <ng-container *ngIf="hasCleaner">
                <tui-icon
                    *polymorpheusOutlet="iconCleaner as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    class="t-cleaner"
                    [icon]="src.toString()"
                    (click.stop)="onValueChange('')"
                />
            </ng-container>
            <tui-tooltip
                *ngIf="hasTooltip"
                automation-id="tui-text-area__tooltip"
                [content]="hintOptions?.content"
                [describeId]="id"
            />
            <div
                *ngIf="iconContent"
                class="t-icon t-textfield-icon"
            >
                <tui-icon
                    *polymorpheusOutlet="iconContent as src; context: {$implicit: size}"
                    tuiAppearance="icon"
                    [icon]="src.toString()"
                />
            </div>
        </div>
    </label>
</div>
`,
      styles: [":host{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}:host :host-context(*:disabled){pointer-events:none}:host[data-size=s]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}:host[data-size=m]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}:host[data-size=l]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}:host[data-size=m]._has-counter{--tui-textarea-height: 6.625rem}:host[data-size=l]._has-counter{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){:host .t-pseudo-content,:host .t-input{text-wrap:balance}}.t-outline{min-block-size:inherit}.t-content{display:block;margin-top:0;margin-bottom:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}:host._disabled .t-content{cursor:auto;opacity:var(--tui-disabled-opacity)}:host:not(._expandable) .t-content{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}:host._has-counter:not(._expandable) .t-content{bottom:1.6875rem}:host._label-outside._has-counter:not(._expandable) .t-content{bottom:1rem}.t-wrapper{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}:host[data-size=l]._label-outside .t-wrapper{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}:host[data-size=m]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}:host[data-size=l]:not(._label-outside) .t-wrapper{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}:host-context(table)[data-size=m]._label-outside .t-wrapper{padding-bottom:.75rem}:host-context(table)[data-size=l]._label-outside .t-wrapper{padding-bottom:1rem}.t-input-wrapper{min-block-size:inherit;inline-size:100%;flex:1}.t-relative{position:relative;min-block-size:inherit}.t-box{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%}:host:not(._expandable) .t-box{block-size:calc(100% - 1rem)}:host:not(._expandable)._label-outside .t-box{block-size:100%}:host._has-counter._expandable .t-box{margin-bottom:1.25rem}:host[data-size=m]:not(._label-outside) .t-box{border-block-start:1rem solid transparent}:host[data-size=l]:not(._label-outside) .t-box{border-block-start:1.25rem solid transparent}.t-pseudo-content{white-space:pre-wrap;overflow-wrap:break-word;word-break:keep-all;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}:host[data-size=s] .t-pseudo-content,:host[data-size=m] .t-pseudo-content{padding:0 .75rem}:host[data-size=l] .t-pseudo-content{padding:0 1rem}.t-pseudo-content__extra{background-color:var(--tui-status-negative-pale)}.t-input{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input:-webkit-autofill,.t-input:-webkit-autofill:hover,.t-input:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input:not(:last-of-type){display:none}.t-input::placeholder{color:var(--tui-text-tertiary);opacity:0}:host._focused .t-input:not(:read-only)::placeholder{opacity:1}:host[data-size=s] .t-input,:host[data-size=m] .t-input{padding:0 .75rem;font:var(--tui-font-text-s)}:host[data-size=l] .t-input{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){:host._ios .t-input{padding-left:.8125rem}}.t-placeholder{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised{transform:translateY(-.625rem)}:host[data-size=m] .t-placeholder_raised{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}:host._invalid:not(._focused) .t-placeholder_raised,:host._invalid:not(._focused):hover .t-placeholder_raised{color:var(--tui-text-negative)}:host._focused .t-placeholder,:host[data-size=m]._focused._label-outside .t-placeholder,:host[data-size=l]._focused._label-outside .t-placeholder{color:var(--tui-text-tertiary)}:host[data-size=l] .t-placeholder{font:var(--tui-font-text-m);line-height:1.25rem}:host[data-size=l] .t-placeholder_raised{font-size:.8156rem}:host[data-size=m]._focused:not(._label-outside) .t-placeholder,:host[data-size=l]._focused:not(._label-outside) .t-placeholder{color:var(--tui-text-primary)}:host[data-size=s] .t-placeholder{padding:0 .75rem}:host[data-size=m] .t-placeholder{padding:0 .75rem}:host[data-size=l] .t-placeholder{padding:0 1rem}:host._label-outside .t-placeholder{overflow:initial;block-size:auto;white-space:initial}.t-icons{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}:host[data-size=m] .t-icons{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons>:not(:first-child){margin-inline-start:.25rem}.t-icon{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left{margin-inline-end:auto}.t-cleaner{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}:host._readonly .t-cleaner,:host._disabled .t-cleaner{pointer-events:none}.t-caret{display:inline-block;block-size:1rem;inline-size:0}.t-counter{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:end;color:var(--tui-text-tertiary)}\n"]
    }]
  }], null, {
    focusableElement: [{
      type: ViewChild,
      args: ["focusableElement"]
    }],
    textfield: [{
      type: ContentChild,
      args: [TuiTextfieldComponent, {
        read: ElementRef
      }]
    }],
    rows: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    expandable: [{
      type: Input
    }]
  });
})();
var TuiTextareaDirective = class _TuiTextareaDirective extends AbstractTuiTextfieldHost {
  onValueChange(value) {
    this.host.onValueChange(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextareaDirective_BaseFactory;
      return function TuiTextareaDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextareaDirective_BaseFactory || (ɵTuiTextareaDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextareaDirective)))(__ngFactoryType__ || _TuiTextareaDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextareaDirective,
      selectors: [["tui-textarea"]],
      features: [ɵɵProvidersFeature([tuiAsTextfieldHost(_TuiTextareaDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaDirective, [{
    type: Directive,
    args: [{
      standalone: false,
      selector: "tui-textarea",
      providers: [tuiAsTextfieldHost(TuiTextareaDirective)]
    }]
  }], null, null);
})();
var TuiTextareaModule = class _TuiTextareaModule {
  static {
    this.ɵfac = function TuiTextareaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextareaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TuiTextareaModule,
      declarations: [TuiTextareaComponent, TuiTextareaDirective],
      imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiIcon, TuiAppearance],
      exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent, PolymorpheusOutlet, PolymorpheusTemplate]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, TuiIcon]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextareaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, TuiScrollbar, TuiTooltipModule, TuiWrapperModule, TuiPrimitiveTextfieldModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiIcon, TuiAppearance],
      declarations: [TuiTextareaComponent, TuiTextareaDirective],
      exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent, PolymorpheusOutlet, PolymorpheusTemplate]
    }]
  }], null, null);
})();
export {
  AbstractTuiControl,
  AbstractTuiController,
  AbstractTuiInteractive,
  AbstractTuiMultipleControl,
  AbstractTuiNativeMultiSelect,
  AbstractTuiNativeSelect,
  AbstractTuiNullableControl,
  AbstractTuiTextfieldHost,
  DEFAULT_ICONS_PATH,
  DEFAULT_ROWS,
  FIXED_DROPDOWN_CONTROLLER_PROVIDER,
  LINE_HEIGHT_L,
  LINE_HEIGHT_M,
  MAX_TIME_VALUES,
  TEXTFIELD_CONTROLLER_PROVIDER,
  TUI_ARROW,
  TUI_ARROW_DEFAULT_MODE,
  TUI_ARROW_DEFAULT_OPTIONS,
  TUI_ARROW_MODE,
  TUI_ARROW_OPTIONS,
  TUI_CACHE_BUSTING_PAYLOAD,
  TUI_COLOR_SELECTOR_DEFAULT_OPTIONS,
  TUI_COLOR_SELECTOR_MODE_NAMES,
  TUI_COLOR_SELECTOR_OPTIONS,
  TUI_COUNTRIES_MASKS,
  TUI_DATE_MODE_MASKITO_ADAPTER,
  TUI_DEFAULT_ICONS_PLACE,
  TUI_DEFAULT_INPUT_COLORS,
  TUI_DEPRECATED_ICONS,
  TUI_FOCUSABLE_ITEM_ACCESSOR,
  TUI_FONTS_READY,
  TUI_ICON_STARTS,
  TUI_ICON_START_PADDINGS,
  TUI_INPUT_COPY_DEFAULT_OPTIONS,
  TUI_INPUT_COPY_OPTIONS,
  TUI_INPUT_NUMBER_DEFAULT_OPTIONS,
  TUI_INPUT_NUMBER_OPTIONS,
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TUI_INPUT_PHONE_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
  TUI_INPUT_PHONE_OPTIONS,
  TUI_INPUT_TAG_DEFAULT_OPTIONS,
  TUI_INPUT_TAG_OPTIONS,
  TUI_INPUT_TIME_DEFAULT_OPTIONS,
  TUI_INPUT_TIME_OPTIONS,
  TUI_IS_APPLE,
  TUI_IS_CHROMIUM,
  TUI_IS_FIREFOX,
  TUI_IS_STACKBLITZ,
  TUI_MONTH_FORMATTER,
  TUI_MONTH_FORMATTER_PROVIDER,
  TUI_MULTI_SELECT_DEFAULT_OPTIONS,
  TUI_MULTI_SELECT_OPTION,
  TUI_MULTI_SELECT_OPTIONS,
  TUI_NUMBER_VALUE_TRANSFORMER,
  TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_PRIMITIVE_TEXTFIELD_OPTIONS,
  TUI_SANITIZER,
  TUI_SELECT_DEFAULT_OPTIONS,
  TUI_SELECT_OPTION,
  TUI_SELECT_OPTIONS,
  TUI_SHEET_CLOSE,
  TUI_SHEET_DEFAULT_OPTIONS,
  TUI_SHEET_ID,
  TUI_SHEET_OPTIONS,
  TUI_SHEET_PROVIDERS,
  TUI_SVG_DEFAULT_OPTIONS,
  TUI_SVG_OPTIONS,
  TUI_SVG_SRC_INTERCEPTORS,
  TUI_TABLE_BARS,
  TUI_TABLE_BAR_DEFAULT_OPTIONS,
  TUI_TABLE_BAR_OPTIONS,
  TUI_TAG_DEFAULT_OPTIONS,
  TUI_TAG_OPTIONS,
  TUI_TEXTFIELD_APPEARANCE,
  TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,
  TUI_TEXTFIELD_CLEANER,
  TUI_TEXTFIELD_CUSTOM_CONTENT,
  TUI_TEXTFIELD_DEFAULT_OPTIONS,
  TUI_TEXTFIELD_FILLER,
  TUI_TEXTFIELD_HOST,
  TUI_TEXTFIELD_ICON,
  TUI_TEXTFIELD_ICON_LEFT,
  TUI_TEXTFIELD_LABEL_OUTSIDE,
  TUI_TEXTFIELD_OPTIONS2 as TUI_TEXTFIELD_OPTIONS,
  TUI_TEXTFIELD_POSTFIX,
  TUI_TEXTFIELD_PREFIX,
  TUI_TEXTFIELD_SIZE,
  TUI_TEXTFIELD_WATCHED_CONTROLLER,
  TUI_TOUCH_SUPPORTED,
  TUI_VALUE_ACCESSOR,
  TUI_VALUE_ACCESSOR_PROVIDER,
  TuiArrowComponent,
  TuiColorEditComponent,
  TuiColorEditModule,
  TuiColorPickerComponent,
  TuiColorPickerModule,
  TuiColorSelectorComponent,
  TuiColorSelectorMode,
  TuiColorSelectorModule,
  TuiComboBoxComponent,
  TuiComboBoxDirective,
  TuiComboBoxModule,
  TuiComboBoxStrictDirective,
  TuiFlatPickerComponent,
  TuiFlatPickerModule,
  TuiFormatPhonePipe,
  TuiHideSelectedPipe,
  TuiInputColorComponent,
  TuiInputColorModule,
  TuiInputComponent,
  TuiInputCopyComponent,
  TuiInputCopyDirective,
  TuiInputCopyModule,
  TuiInputDateComponent,
  TuiInputDateDirective,
  TuiInputDateModule,
  TuiInputDateMultiComponent,
  TuiInputDateMultiModule,
  TuiInputDateRangeComponent,
  TuiInputDateRangeDirective,
  TuiInputDateRangeModule,
  TuiInputDateTimeComponent,
  TuiInputDateTimeDirective,
  TuiInputDateTimeModule,
  TuiInputDirective,
  TuiInputModule,
  TuiInputMonthComponent,
  TuiInputMonthDirective,
  TuiInputMonthModule,
  TuiInputMonthRangeComponent,
  TuiInputMonthRangeDirective,
  TuiInputMonthRangeModule,
  TuiInputNumberComponent,
  TuiInputNumberDirective,
  TuiInputNumberModule,
  TuiInputPasswordComponent,
  TuiInputPasswordDirective,
  TuiInputPasswordModule,
  TuiInputPhoneComponent,
  TuiInputPhoneDirective,
  TuiInputPhoneInternationalComponent,
  TuiInputPhoneModule,
  TuiInputRangeComponent,
  TuiInputRangeModule,
  TuiInputSliderComponent,
  TuiInputSliderModule,
  TuiInputTagComponent,
  TuiInputTagModule,
  TuiInputTimeComponent,
  TuiInputTimeDirective,
  TuiInputTimeModule,
  TuiInputYearComponent,
  TuiInputYearDirective,
  TuiInputYearModule,
  TuiIslandDirective,
  TuiIsoToCountryCodePipe,
  TuiLegacyDropdownOpenMonitorDirective,
  TuiLinearMultiPickerComponent,
  TuiLinearMultiPickerModule,
  TuiLinearPickerComponent,
  TuiLinearPickerModule,
  TuiMultiSelectComponent,
  TuiMultiSelectDirective,
  TuiMultiSelectGroupComponent,
  TuiMultiSelectGroupDirective,
  TuiMultiSelectModule,
  TuiMultiSelectOptionComponent,
  TuiMultiSelectOptionModule,
  TuiNamedDay,
  TuiNativeMultiSelectComponent,
  TuiNativeMultiSelectGroupComponent,
  TuiNativeSelectComponent,
  TuiNativeSelectGroupComponent,
  TuiPaletteComponent,
  TuiPaletteModule,
  TuiPickerService,
  TuiPrimitiveTextfieldComponent,
  TuiPrimitiveTextfieldDirective,
  TuiPrimitiveTextfieldModule,
  TuiSelectComponent,
  TuiSelectDirective,
  TuiSelectModule,
  TuiSelectOptionComponent,
  TuiSelectOptionModule,
  TuiSheetBarComponent,
  TuiSheetCloseDirective,
  TuiSheetComponent,
  TuiSheetDirective,
  TuiSheetHeadingComponent,
  TuiSheetModule,
  TuiSheetService,
  TuiSheetStopDirective,
  TuiSheetTopDirective,
  TuiSheetWrapperDirective,
  TuiSheetsHostComponent,
  TuiStaticRequestService,
  TuiStringifiableItem,
  TuiSvgComponent,
  TuiSvgService,
  TuiTableBarDirective,
  TuiTableBarsHostComponent,
  TuiTableBarsService,
  TuiTagComponent,
  TuiTagModule,
  TuiTextareaComponent,
  TuiTextareaDirective,
  TuiTextareaModule,
  TuiTextfieldAppearanceDirective,
  TuiTextfieldCleanerDirective,
  TuiTextfieldComponent,
  TuiTextfieldController,
  TuiTextfieldControllerModule,
  TuiTextfieldCustomContentDirective,
  TuiTextfieldFillerDirective,
  TuiTextfieldIconDirective,
  TuiTextfieldIconLeftDirective,
  TuiTextfieldLabelOutsideDirective,
  TuiTextfieldPostfixDirective,
  TuiTextfieldPrefixDirective,
  TuiTextfieldSizeDirective,
  TuiToCountryCodePipe,
  TuiTooltipComponent,
  TuiTooltipModule,
  TuiUnfinishedValidator,
  TuiValueAccessorDirective,
  TuiValueAccessorModule,
  TuiValueDecorationComponent,
  TuiWrapperDirective,
  TuiWrapperModule,
  tuiArrowModeProvider,
  tuiArrowOptionsProvider,
  tuiAsControl2 as tuiAsControl,
  tuiAsFocusableItemAccessor,
  tuiAsTextfieldHost,
  tuiCapitalizeFirstLetter,
  tuiColorSelectorOptionsProvider,
  tuiCreateUnfinishedValidator,
  tuiExtractValueFromEvent,
  tuiFormatPhone,
  tuiGetBorder,
  tuiGetMaxAllowedPhoneLength,
  tuiGetSafeAreaSize,
  tuiIconsPathFactory,
  tuiInputCopyOptionsProvider,
  tuiInputNumberOptionsProvider,
  tuiInputPasswordOptionsProvider,
  tuiInputPhoneInternationalOptionsProvider,
  tuiInputPhoneOptionsProvider,
  tuiInputTagOptionsProvider,
  tuiInputTimeOptionsProvider,
  tuiIsApple,
  tuiIsPresumedHTMLString,
  tuiIsoToCountryCode,
  tuiMultiSelectOptionsProvider,
  tuiNotKzRegion,
  tuiPrimitiveTextfieldOptionsProvider,
  tuiProcessIcon,
  tuiSelectOptionsProvider,
  tuiSvgLinearGradientProcessor,
  tuiSvgOptionsProvider,
  tuiSvgSrcInterceptors,
  tuiTableBarOptionsProvider,
  tuiTagOptionsProvider,
  tuiTextfieldOptionsProvider
};
//# sourceMappingURL=@taiga-ui_legacy.js.map
