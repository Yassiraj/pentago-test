import {
  NG_VALIDATORS,
  NgControl,
  NgModel
} from "./chunk-RMQQVHNY.js";
import {
  AnimationEngine,
  animate,
  animateChild,
  query,
  stagger,
  style,
  transition,
  trigger
} from "./chunk-DQR2A66Y.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  shouldCall
} from "./chunk-KKWAPHD5.js";
import {
  Meta
} from "./chunk-YEHPATXO.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  isPlatformBrowser
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
  EnvironmentInjector,
  EventEmitter,
  INJECTOR$1,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  QueryList,
  Self,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  computed,
  createComponent,
  effect,
  forwardRef,
  inject,
  isSignal,
  setClassMetadata,
  signal,
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
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  BehaviorSubject,
  EMPTY,
  NEVER,
  Observable,
  Subject,
  __async,
  __decorate,
  __spreadProps,
  __spreadValues,
  asyncScheduler,
  catchError,
  combineLatest,
  concat,
  debounce,
  defaultIfEmpty,
  defer,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  finalize,
  from,
  fromEvent,
  map,
  merge,
  of,
  pipe,
  repeat,
  share,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  throttleTime,
  timer,
  withLatestFrom
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-animations.mjs
var TRANSITION = "{{duration}}ms ease-in-out";
var DURATION = {
  params: {
    duration: 300
  }
};
var STAGGER = 300;
var tuiParentAnimation = trigger("tuiParentAnimation", [transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiParentStop = trigger("tuiParentStop", [transition(":enter", [])]);
var tuiHost = trigger("tuiHost", [transition(":enter", [style({
  overflow: "clip"
}), query(":scope > *", [animateChild()], {
  optional: true
})]), transition(":leave", [query(":scope > *", [animateChild()], {
  optional: true
})])]);
var tuiHeightCollapse = trigger("tuiHeightCollapse", [transition(":enter", [style({
  height: 0
}), animate(TRANSITION, style({
  height: "*"
}))], DURATION), transition(":leave", [style({
  height: "*"
}), animate(TRANSITION, style({
  height: 0
}))], DURATION)]);
var tuiHeightCollapseList = trigger("tuiHeightCollapseList", [transition("* => *", [query(":enter", [style({
  height: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  height: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  height: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiWidthCollapse = trigger("tuiWidthCollapse", [transition(":enter", [style({
  width: 0
}), animate(TRANSITION, style({
  width: "*"
}))], DURATION), transition(":leave", [style({
  width: "*"
}), animate(TRANSITION, style({
  width: 0
}))], DURATION)]);
var tuiWidthCollapseList = trigger("tuiWidthCollapseList", [transition("* => *", [query(":enter", [style({
  width: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: "*"
}))])], {
  optional: true
}), query(":leave", [style({
  width: "*"
}), stagger(STAGGER, [animate(TRANSITION, style({
  width: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiFadeIn = trigger("tuiFadeIn", [transition(":enter", [style({
  opacity: 0
}), animate(TRANSITION, style({
  opacity: 1
}))], DURATION), transition(":leave", [style({
  opacity: 1
}), animate(TRANSITION, style({
  opacity: 0
}))], DURATION)]);
var tuiFadeInList = trigger("tuiFadeInList", [transition("* => *", [query(":enter", [style({
  opacity: 0
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 1
}))])], {
  optional: true
}), query(":leave", [style({
  opacity: 1
}), stagger(STAGGER, [animate(TRANSITION, style({
  opacity: 0
}))])], {
  optional: true
})], DURATION)]);
var tuiFadeInTop = trigger("tuiFadeInTop", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiFadeInBottom = trigger("tuiFadeInBottom", [transition(":enter", [style({
  transform: "translateY({{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY({{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiDropdownAnimation = trigger("tuiDropdownAnimation", [transition(":enter", [style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}), animate(TRANSITION, style({
  transform: "translateY({{end}})",
  opacity: 1
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})",
  opacity: 1
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}}px)",
  opacity: 0
}))], {
  params: {
    end: 0,
    start: 10,
    duration: 300
  }
})]);
var tuiScaleIn = trigger("tuiScaleIn", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate("{{duration}}ms {{easing}}", style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300,
    easing: "ease-in-out"
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiPop = trigger("tuiPop", [transition(":enter", [style({
  transform: "scale({{start}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{end}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
}), transition(":leave", [style({
  transform: "scale({{end}})"
}), animate(TRANSITION, style({
  transform: "scale({{middle}})"
})), animate(TRANSITION, style({
  transform: "scale({{start}})"
}))], {
  params: {
    end: 1,
    middle: 1.1,
    start: 0,
    duration: 300
  }
})]);
var tuiScaleInList = trigger("tuiScaleInList", [transition("* => *", [query(":enter", [style({
  transform: "scale({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "scale({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "scale({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 1,
    start: 0,
    duration: 300
  }
})]);
var tuiSlideIn = trigger("tuiSlideIn", [transition("* => left", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("left => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("* => right", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition("right => *", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeft = trigger("tuiSlideInLeft", [transition(":enter", [style({
  transform: "translateX(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInLeftList = trigger("tuiSlideInLeftList", [transition("* => *", [query(":enter", [style({
  transform: "translateX(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRight = trigger("tuiSlideInRight", [transition(":enter", [style({
  transform: "translateX({{start}})"
}), animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateX({{end}})"
}), animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInRightList = trigger("tuiSlideInRightList", [transition("* => *", [query(":enter", [style({
  transform: "translateX({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateX({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateX({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTop = trigger("tuiSlideInTop", [transition(":enter", [style({
  transform: "translate3d(0,{{start}},0)",
  pointerEvents: "none"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{end}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translate3d(0,{{end}},0)"
}), animate(TRANSITION, style({
  transform: "translate3d(0,{{start}},0)"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInTopList = trigger("tuiSlideInTopList", [transition("* => *", [query(":enter", [style({
  transform: "translateY({{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottom = trigger("tuiSlideInBottom", [transition(":enter", [style({
  transform: "translateY(-{{start}})"
}), animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
}), transition(":leave", [style({
  transform: "translateY({{end}})"
}), animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);
var tuiSlideInBottomList = trigger("tuiSlideInBottomList", [transition("* => *", [query(":enter", [style({
  transform: "translateY(-{{start}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY({{end}})"
}))])], {
  optional: true
}), query(":leave", [style({
  transform: "translateY({{end}})"
}), stagger(STAGGER, [animate(TRANSITION, style({
  transform: "translateY(-{{start}})"
}))])], {
  optional: true
})], {
  params: {
    end: 0,
    start: "100%",
    duration: 300
  }
})]);

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-math.mjs
function tuiClamp(value, min, max) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(min));
  ngDevMode && console.assert(!Number.isNaN(max));
  ngDevMode && console.assert(max >= min);
  return Math.min(max, Math.max(min, value));
}
function tuiInRange(value, fromInclude, toExclude) {
  ngDevMode && console.assert(!Number.isNaN(value));
  ngDevMode && console.assert(!Number.isNaN(fromInclude));
  ngDevMode && console.assert(!Number.isNaN(toExclude));
  ngDevMode && console.assert(fromInclude < toExclude);
  return value >= fromInclude && value < toExclude;
}
function tuiNormalizeToIntNumber(value, min, max) {
  ngDevMode && console.assert(Number.isInteger(min));
  ngDevMode && console.assert(Number.isInteger(max));
  ngDevMode && console.assert(min <= max);
  if (Number.isNaN(value) || value <= min) {
    return min;
  }
  if (value >= max) {
    return max;
  }
  return Math.round(value);
}
function tuiQuantize(value, quantum) {
  ngDevMode && console.assert(Number.isFinite(value));
  ngDevMode && console.assert(Number.isFinite(quantum));
  ngDevMode && console.assert(quantum > 0);
  const remainder = value % quantum;
  return remainder < quantum / 2 ? value - remainder : value + quantum - remainder;
}
var MAX_PRECISION = 292;
function calculate(value, precision, func) {
  if (value === Infinity) {
    return value;
  }
  ngDevMode && console.assert(!Number.isNaN(value), "Value must be number");
  ngDevMode && console.assert(Number.isInteger(precision), "Precision must be integer");
  precision = Math.min(precision, MAX_PRECISION);
  const pair = `${value}e`.split("e");
  const tempValue = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
  const processedPair = `${tempValue}e`.split("e");
  return Number(`${processedPair[0]}e${Number(processedPair[1]) - precision}`);
}
function tuiRound(value, precision = 0) {
  return calculate(value, precision, Math.round);
}
function tuiCeil(value, precision = 0) {
  return calculate(value, precision, Math.ceil);
}
function tuiFloor(value, precision = 0) {
  return calculate(value, precision, Math.floor);
}
function tuiTrunc(value, precision = 0) {
  return calculate(value, precision, Math.trunc);
}
function tuiRoundWith({
  value,
  precision,
  method
}) {
  switch (method) {
    case "ceil":
      return tuiCeil(value, precision);
    case "floor":
      return tuiFloor(value, precision);
    case "round":
      return tuiRound(value, precision);
    default:
      return tuiTrunc(value, precision);
  }
}
function tuiToInt(bool) {
  return bool ? 1 : 0;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-miscellaneous.mjs
function tuiArrayRemove(array, index) {
  return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
function tuiArrayShallowEquals(a, b) {
  return a.length === b.length && a.every((item, index) => item === b[index]);
}
function tuiArrayToggle(array, item) {
  const index = array.indexOf(item);
  return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
var changeDateSeparator = (dateString, newDateSeparator) => dateString.replaceAll(/[^0-9A-Za-zА-Яа-я]/gi, newDateSeparator);
function tuiIsControlEmpty({
  value = null
}) {
  return value === null || value === "" || Array.isArray(value) && !value.length;
}
function tuiCreateToken(defaults) {
  return tuiCreateTokenFromFactory(() => defaults);
}
function tuiCreateTokenFromFactory(factory) {
  return factory ? new InjectionToken("", {
    factory
  }) : new InjectionToken("");
}
function tuiIsString(value) {
  return typeof value === "string";
}
function tuiDefaultSort(x, y) {
  if (x === y) {
    return 0;
  }
  if (tuiIsString(x) && tuiIsString(y)) {
    return x.localeCompare(y);
  }
  return x > y ? 1 : -1;
}
function tuiDirectiveBinding(token, key, initial, options = {
  self: true
}) {
  const result = isSignal(initial) ? initial : signal(initial);
  const directive = inject(token, options);
  const output = directive[`${key.toString()}Change`];
  let previous;
  effect(() => {
    const value = result();
    if (previous === value) {
      return;
    }
    if (isSignal(directive[key])) {
      directive[key].set(value);
    } else {
      directive[key] = value;
    }
    directive.ngOnChanges?.({});
    output?.emit?.(value);
    previous = value;
  }, {
    allowSignalWrites: true
  });
  return result;
}
function tuiDistanceBetweenTouches({
  touches
}) {
  return Math.hypot((touches[0]?.clientX ?? 0) - (touches[1]?.clientX ?? 0), (touches[0]?.clientY ?? 0) - (touches[1]?.clientY ?? 0));
}
function tuiEaseInOutQuad(t) {
  ngDevMode && console.assert(t >= 0 && t <= 1, "Input must be between 0 and 1 inclusive but received ", t);
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function tuiGetOriginalArrayFromQueryList(queryList) {
  let array = [];
  queryList.find((_item, _index, originalArray) => {
    array = originalArray;
    return true;
  });
  return array;
}
function tuiIsFalsy(value) {
  return !value;
}
function tuiIsNumber(value) {
  return typeof value === "number";
}
function tuiIsPresent(value) {
  return value !== null && value !== void 0;
}
function tuiNullableSame(a, b, handler) {
  if (a === null) {
    return b === null;
  }
  if (b === null) {
    return false;
  }
  return handler(a, b);
}
function tuiProvide(provide, useExisting, multi = false) {
  return {
    provide,
    useExisting,
    multi
  };
}
function tuiProvideOptions(provide, options, fallback) {
  return {
    provide,
    useFactory: () => __spreadValues(__spreadValues({}, inject(provide, {
      optional: true,
      skipSelf: true
    }) || fallback), options)
  };
}
function decorateMethod(originalMethod) {
  let previousArgs = [];
  let originalFnWasCalledLeastAtOnce = false;
  let pureValue;
  return function tuiPureMethodPatched(...args) {
    const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
    if (isPure) {
      return pureValue;
    }
    previousArgs = args;
    pureValue = originalMethod.apply(this, args);
    originalFnWasCalledLeastAtOnce = true;
    return pureValue;
  };
}
function decorateGetter(originalGetter, propertyKey, enumerable = true) {
  return function tuiPureGetterPatched() {
    const value = originalGetter.call(this);
    Object.defineProperty(this, propertyKey, {
      enumerable,
      value
    });
    return value;
  };
}
function tuiPure(target, propertyKeyOrContext, descriptor) {
  if (typeof target === "function") {
    const context = propertyKeyOrContext;
    if (context.kind === "getter") {
      return decorateGetter(target, context.name);
    }
    if (context.kind === "method") {
      return decorateMethod(target);
    }
    throw new TuiPureException();
  }
  const {
    get,
    enumerable,
    value
  } = descriptor;
  const propertyKey = propertyKeyOrContext;
  if (get) {
    return {
      configurable: true,
      enumerable,
      get: decorateGetter(get, propertyKey, enumerable)
    };
  }
  if (typeof value !== "function") {
    throw new TuiPureException();
  }
  const original = value;
  return {
    configurable: true,
    enumerable,
    get() {
      let previousArgs = [];
      let originalFnWasCalledLeastAtOnce = false;
      let pureValue;
      const patched = (...args) => {
        const isPure = originalFnWasCalledLeastAtOnce && previousArgs.length === args.length && args.every((arg, index) => arg === previousArgs[index]);
        if (isPure) {
          return pureValue;
        }
        previousArgs = args;
        pureValue = original.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;
        return pureValue;
      };
      Object.defineProperty(this, propertyKey, {
        configurable: true,
        value: patched
      });
      return patched;
    }
  };
}
var TuiPureException = class extends Error {
  constructor() {
    super(ngDevMode ? "tuiPure can only be used with functions or getters" : "");
  }
};
function tuiPx(value) {
  ngDevMode && console.assert(Number.isFinite(value), "Value must be finite number");
  return `${value}px`;
}
var MAP = tuiCreateTokenFromFactory(() => {
  const map2 = /* @__PURE__ */ new Map();
  inject(DestroyRef).onDestroy(() => map2.forEach((component) => component.destroy()));
  return map2;
});
function tuiWithStyles(component) {
  const map2 = inject(MAP);
  const environmentInjector = inject(EnvironmentInjector);
  if (!map2.has(component)) {
    map2.set(component, createComponent(component, {
      environmentInjector
    }));
  }
  return void 0;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-dom.mjs
function tuiContainsOrAfter(current, node) {
  try {
    return current.contains(node) || !!(node.compareDocumentPosition(current) & Node.DOCUMENT_POSITION_PRECEDING);
  } catch {
    return false;
  }
}
function tuiIsInput(element) {
  return element.matches("input");
}
function tuiIsTextarea(element) {
  return element.matches("textarea");
}
function tuiIsTextfield(element) {
  return tuiIsInput(element) || tuiIsTextarea(element);
}
function tuiIsElement(node) {
  return !!node && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;
}
function tuiIsHTMLElement(node) {
  const defaultView = node?.ownerDocument.defaultView;
  return !!node && !!defaultView && node instanceof defaultView.HTMLElement;
}
function tuiIsTextNode(node) {
  return node.nodeType === Node.TEXT_NODE;
}
function tuiIsInputEvent(event) {
  return "data" in event && "inputType" in event;
}
function tuiGetActualTarget(event) {
  return event.composedPath()[0];
}
var DEFAULT_FORMAT = "text/plain";
function tuiGetClipboardDataText(event, format = DEFAULT_FORMAT) {
  return "clipboardData" in event && event.clipboardData !== null ? event.clipboardData.getData(format) || event.clipboardData.getData(DEFAULT_FORMAT) : event.target.ownerDocument.defaultView.clipboardData.getData("text");
}
function tuiGetDocumentOrShadowRoot(node) {
  return "getRootNode" in node && node.isConnected ? node.getRootNode() : node.ownerDocument;
}
function tuiGetElementObscures(element) {
  const {
    ownerDocument
  } = element;
  if (!ownerDocument?.defaultView || !element.getBoundingClientRect) {
    return null;
  }
  const {
    innerWidth,
    innerHeight
  } = ownerDocument.defaultView;
  const doc = tuiGetDocumentOrShadowRoot(element);
  const rect2 = element.getBoundingClientRect();
  if (rect2.width === 0 && rect2.height === 0) {
    return null;
  }
  const left = tuiClamp(Math.round(rect2.left) + 2, 0, innerWidth);
  const top = tuiClamp(Math.round(rect2.top) + 2, 0, innerHeight);
  const right = tuiClamp(Math.round(rect2.right) - 2, 0, innerWidth);
  const bottom = tuiClamp(Math.round(rect2.bottom) - 2, 0, innerHeight);
  const horizontalMiddle = tuiClamp(Math.round(rect2.left + rect2.width / 2), 0, innerWidth);
  const verticalMiddle = tuiClamp(Math.round(rect2.top + rect2.height / 2), 0, innerHeight);
  const elements = [doc.elementFromPoint(horizontalMiddle, top), doc.elementFromPoint(horizontalMiddle, bottom), doc.elementFromPoint(left, verticalMiddle), doc.elementFromPoint(right, verticalMiddle)];
  const nonNull = elements.filter(tuiIsPresent);
  if (!nonNull.length) {
    return [];
  }
  const filtered = nonNull.filter((el) => !element.contains(el) && !el.contains(element));
  return filtered.length === 4 ? filtered : null;
}
function tuiGetElementOffset(host, element) {
  ngDevMode && console.assert(host.contains(element), "Host must contain element");
  let {
    offsetTop,
    offsetLeft,
    offsetParent
  } = element;
  while (tuiIsHTMLElement(offsetParent) && offsetParent !== host) {
    offsetTop += offsetParent.offsetTop;
    offsetLeft += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent;
  }
  return {
    offsetTop,
    offsetLeft
  };
}
function tuiGetElementPoint(x, y, element) {
  const {
    left,
    top,
    width,
    height
  } = element.getBoundingClientRect();
  return [tuiClamp(x - left, 0, width) / width, tuiClamp(y - top, 0, height) / height];
}
function tuiInjectElement() {
  return inject(ElementRef).nativeElement;
}
function tuiIsCurrentTarget({
  target,
  currentTarget
}) {
  return target === currentTarget;
}
function tuiIsElementEditable(element) {
  return tuiIsTextfield(element) && !element.readOnly || !!element.isContentEditable;
}
function tuiPointToClientRect(x = 0, y = 0) {
  const rect2 = {
    x,
    y,
    left: x,
    right: x,
    top: y,
    bottom: y,
    width: 0,
    height: 0
  };
  return __spreadProps(__spreadValues({}, rect2), {
    toJSON: () => rect2
  });
}
function tuiRetargetedBoundaryCrossing(event) {
  if ("explicitOriginalTarget" in event) {
    return event?.explicitOriginalTarget !== event.target;
  }
  if ("pointerId" in event) {
    return event.pointerId === -1;
  }
  if ("detail" in event && "webkitForce" in event) {
    return event?.detail === 0;
  }
  return false;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-miscellaneous.mjs
var KEYS = ["Spacebar", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Left", "Right", "End", "Home"];
function tuiIsEditingKey(key = "") {
  return key.length === 1 || KEYS.includes(key);
}
function tuiIsObscured(el, exceptSelector = "tui-hints") {
  return !!tuiGetElementObscures(el)?.some((el2) => !el2.closest(exceptSelector));
}
function tuiOverrideOptions(override, fallback) {
  return (directive, options) => {
    const result = directive || __spreadValues({}, options || fallback);
    Object.keys(override).forEach((key) => {
      result[key] = override[key];
    });
    return result;
  };
}
var SIZES = {
  xxs: 0,
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  xxl: 6
};
function tuiSizeBigger(size, biggerThanSize = "s") {
  return SIZES[size] > SIZES[biggerThanSize];
}
var TUI_ANIMATIONS_DEFAULT_DURATION = 300;
function tuiToAnimationOptions(speed, easing) {
  return {
    value: "",
    params: {
      duration: tuiGetDuration(speed),
      easing
    }
  };
}
function tuiGetDuration(speed) {
  return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}

// node_modules/@ng-web-apis/common/fesm2022/ng-web-apis-common.mjs
var WA_WINDOW = new InjectionToken("[WA_WINDOW]", {
  factory: () => {
    const {
      defaultView
    } = inject(DOCUMENT);
    if (!defaultView) {
      throw new Error("Window is not available");
    }
    return defaultView;
  }
});
var WINDOW = WA_WINDOW;
var WA_ANIMATION_FRAME = new InjectionToken("[WA_ANIMATION_FRAME]", {
  factory: () => {
    const {
      requestAnimationFrame,
      cancelAnimationFrame
    } = inject(WINDOW);
    const animationFrame$ = new Observable((subscriber) => {
      let id = NaN;
      const callback = (timestamp) => {
        subscriber.next(timestamp);
        id = requestAnimationFrame(callback);
      };
      id = requestAnimationFrame(callback);
      return () => {
        cancelAnimationFrame(id);
      };
    });
    return animationFrame$.pipe(share());
  }
});
var WA_CACHES = new InjectionToken("[WA_CACHES]", {
  factory: () => inject(WINDOW).caches
});
var WA_CRYPTO = new InjectionToken("[WA_CRYPTO]", {
  factory: () => inject(WINDOW).crypto
});
var WA_CSS = new InjectionToken("[WA_CSS]", {
  factory: () => inject(WINDOW).CSS ?? {
    escape: (v) => v,
    // eslint-disable-next-line no-restricted-syntax
    supports: () => false
  }
});
var WA_HISTORY = new InjectionToken("[WA_HISTORY]", {
  factory: () => inject(WINDOW).history
});
var WA_LOCAL_STORAGE = new InjectionToken("[WA_LOCAL_STORAGE]", {
  factory: () => inject(WINDOW).localStorage
});
var WA_LOCATION = new InjectionToken("[WA_LOCATION]", {
  factory: () => inject(WINDOW).location
});
var WA_NAVIGATOR = new InjectionToken("[WA_NAVIGATOR]", {
  factory: () => inject(WINDOW).navigator
});
var NAVIGATOR = WA_NAVIGATOR;
var WA_MEDIA_DEVICES = new InjectionToken("[WA_MEDIA_DEVICES]", {
  factory: () => inject(NAVIGATOR).mediaDevices
});
var WA_NETWORK_INFORMATION = new InjectionToken("[WA_NETWORK_INFORMATION]", {
  // @ts-ignore
  factory: () => inject(WA_NAVIGATOR).connection || null
});
var WA_PAGE_VISIBILITY = new InjectionToken("[WA_PAGE_VISIBILITY]", {
  factory: () => {
    const documentRef = inject(DOCUMENT);
    return fromEvent(documentRef, "visibilitychange").pipe(startWith(0), map(() => documentRef.visibilityState !== "hidden"), distinctUntilChanged(), shareReplay({
      refCount: false,
      bufferSize: 1
    }));
  }
});
var WA_PERFORMANCE = new InjectionToken("[WA_PERFORMANCE]", {
  factory: () => inject(WINDOW).performance
});
var WA_SCREEN = new InjectionToken("[WA_SCREEN]", {
  factory: () => inject(WINDOW).screen
});
var WA_SESSION_STORAGE = new InjectionToken("[WA_SESSION_STORAGE]", {
  factory: () => inject(WINDOW).sessionStorage
});
var WA_SPEECH_RECOGNITION = new InjectionToken("[WA_SPEECH_RECOGNITION]: [SPEECH_RECOGNITION]", {
  factory: () => {
    const windowRef = inject(WINDOW);
    return windowRef.speechRecognition || windowRef.webkitSpeechRecognition || null;
  }
});
var WA_SPEECH_SYNTHESIS = new InjectionToken("[WA_SPEECH_SYNTHESIS]", {
  factory: () => inject(WINDOW).speechSynthesis
});
var WA_USER_AGENT = new InjectionToken("[WA_USER_AGENT]", {
  factory: () => inject(NAVIGATOR).userAgent
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-observables.mjs
function tuiControlValue(control) {
  return new Observable((subscriber) => control?.valueChanges?.pipe(startWith(control.value)).subscribe(subscriber));
}
function tuiTypedFromEvent(target, event, options = {}) {
  return fromEvent(target, event, options);
}
var TuiDragState = class {
  constructor(stage, event) {
    this.stage = stage;
    this.event = event;
  }
};
function tuiDragAndDropFrom(element) {
  const {
    ownerDocument
  } = element;
  return concat(tuiTypedFromEvent(element, "mousedown").pipe(take(1), map((event) => new TuiDragState("start", event))), merge(tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event) => new TuiDragState("continues", event))), merge(tuiTypedFromEvent(ownerDocument, "mouseup"), tuiTypedFromEvent(ownerDocument, "dragend")).pipe(take(1), map((event) => new TuiDragState("end", event)), endWith(null))).pipe(takeWhile(tuiIsPresent))).pipe(repeat());
}
function tuiPreventDefault() {
  return tap((event) => event.preventDefault());
}
function tuiIfMap(project, predicate = Boolean) {
  return pipe(switchMap((value) => predicate(value) ? project(value) : EMPTY));
}
function tuiQueryListChanges(queryList) {
  return queryList.changes.pipe(startWith(null), map(() => tuiGetOriginalArrayFromQueryList(queryList)));
}
function tuiScrollFrom(element) {
  return tuiTypedFromEvent(element === element.ownerDocument.documentElement ? element.ownerDocument : element, "scroll");
}
function tuiTakeUntilDestroyed(destroyRef) {
  return pipe(takeUntil(NEVER.pipe(takeUntilDestroyed(destroyRef), catchError(() => EMPTY), defaultIfEmpty(null))));
}
function tuiWatch(cdr = inject(ChangeDetectorRef)) {
  return tap(() => cdr.markForCheck());
}
function tuiZonefull(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => source.subscribe({
    next: (value) => zone.run(() => subscriber.next(value)),
    error: (error) => zone.run(() => subscriber.error(error)),
    complete: () => zone.run(() => subscriber.complete())
  }));
}
function tuiZonefree(zone = inject(NgZone)) {
  return (source) => new Observable((subscriber) => zone.runOutsideAngular(() => source.subscribe(subscriber)));
}
function tuiZoneOptimized(zone = inject(NgZone)) {
  return pipe(tuiZonefree(zone), tuiZonefull(zone));
}
var TuiZoneScheduler = class {
  constructor(zoneConditionFn, scheduler = asyncScheduler) {
    this.zoneConditionFn = zoneConditionFn;
    this.scheduler = scheduler;
  }
  now() {
    return this.scheduler.now();
  }
  schedule(...args) {
    return this.zoneConditionFn(() => this.scheduler.schedule(...args));
  }
};
function tuiZonefreeScheduler(zone = inject(NgZone), scheduler = asyncScheduler) {
  return new TuiZoneScheduler(zone.runOutsideAngular.bind(zone), scheduler);
}

// node_modules/@ng-web-apis/platform/fesm2022/ng-web-apis-platform.mjs
var WA_SAFARI_REG_EXP = /^((?!chrome|android).)*safari/i;
var WA_IOS_REG_EXP = /ipad|iphone|ipod/i;
function isIos({
  userAgent,
  maxTouchPoints
}) {
  return WA_IOS_REG_EXP.test(userAgent) || WA_SAFARI_REG_EXP.test(userAgent) && maxTouchPoints > 1;
}
var WA_IS_IOS = new InjectionToken("", {
  factory: () => isIos(inject(WA_NAVIGATOR))
});
var firstRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/
);
var secondRegex = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/
);
var WA_IS_MOBILE = new InjectionToken("", {
  factory: () => firstRegex.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase())
});
var WA_IS_ANDROID = new InjectionToken("", {
  factory: () => inject(WA_IS_MOBILE) && !inject(WA_IS_IOS)
});
function isApple(navigator) {
  return isIos(navigator) || WA_SAFARI_REG_EXP.test(navigator.userAgent);
}
var WA_IS_TOUCH = new InjectionToken("", {
  factory: () => {
    const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
    return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
      initialValue: media.matches
    });
  }
});
var WA_IS_WEBKIT = new InjectionToken("", {
  factory: () => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-browser.mjs
function tuiIsSafari({
  ownerDocument: doc
}) {
  const win = doc?.defaultView;
  const isMacOsSafari = win.safari !== void 0 && win.safari?.pushNotification?.toString() === "[object SafariRemoteNotification]";
  const isIosSafari = !!win.navigator?.vendor?.includes("Apple") && !win.navigator?.userAgent?.includes("CriOS") && !win.navigator?.userAgent?.includes("FxiOS");
  return isMacOsSafari || isIosSafari;
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-color.mjs
function tuiGetGradientData(gradient) {
  return gradient.slice(0, Math.max(0, gradient.length - 1)).replace("linear-gradient(", "");
}
function tuiHexToRgb(hex) {
  const matches = hex.replace("#", "").split("").map((char, _, array) => array.length === 3 ? char + char : char).join("").match(/.{2}/g);
  return matches ? matches.map((x) => Number.parseInt(x, 16)) : [0, 0, 0];
}
function hsvToColor(h, s, v, n) {
  const k = (n + h / 60) % 6;
  return Math.round(v - v * s * Math.max(Math.min(k, 4 - k, 1), 0));
}
function tuiHsvToRgb(h, s, v) {
  return [hsvToColor(h, s, v, 5), hsvToColor(h, s, v, 3), hsvToColor(h, s, v, 1)];
}
var DEFAULT = [0, 0, 0, 1];
function tuiParseColor(color) {
  const stripped = color.replace("#", "").replace("rgba(", "").replace("rgb(", "").replace(")", "");
  const array = stripped.split(",").map((item) => parseFloat(item));
  if (array.length === 4) {
    return array;
  }
  if (array.length === 3) {
    return array.concat(1);
  }
  const matches = stripped.match(new RegExp(`(.{${stripped.length / 3}})`, "g"));
  if (!matches) {
    return DEFAULT;
  }
  const parsed = matches.map((char) => parseInt(stripped.length % 2 ? char + char : char, 16));
  return [parsed[0] ?? DEFAULT[0], parsed[1] ?? DEFAULT[1], parsed[2] ?? DEFAULT[2], parsed[3] ?? DEFAULT[3]];
}
var COMMA = String.raw`\s*,\s*`;
var HEX = "#(?:[a-f0-9]{6}|[a-f0-9]{3})";
var RGB = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)`;
var RGBA = String.raw`\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*,\s*\d*\.?\d+\)`;
var VALUE = String.raw`(?:[+-]?\d*\.?\d+)(?:%|[a-z]+)?`;
var KEYWORD = "[_a-z-][_a-z0-9-]*";
var COLOR = ["(?:", HEX, "|", "(?:rgb|hsl)", RGB, "|", "(?:rgba|hsla)", RGBA, "|", KEYWORD, ")"];
var REGEXP_ARRAY = [String.raw`\s*(`, ...COLOR, ")", String.raw`(?:\s+`, "(", VALUE, "))?", "(?:", COMMA, String.raw`\s*)?`];
function getPosition(match, stops) {
  const fallback = stops === 1 ? "100%" : `${stops}%`;
  return match?.includes("%") ? match : fallback;
}
function tuiParseGradient(input) {
  const stopsRegexp = new RegExp(REGEXP_ARRAY.join(""), "gi");
  const stopsString = input.startsWith("to") || /^\d/.exec(input) ? input.slice(Math.max(0, input.indexOf(",") + 1)).trim() : input;
  const side = input.startsWith("to") ? input.split(",")[0] : "to bottom";
  let stops = [];
  let matchColorStop = stopsRegexp.exec(stopsString);
  while (matchColorStop !== null) {
    stops = stops.concat({
      color: matchColorStop[1] || "",
      position: getPosition(matchColorStop[2] || "", stops.length)
    });
    matchColorStop = stopsRegexp.exec(stopsString);
  }
  stops = stops.filter(({
    color
  }) => color.startsWith("#") || color.startsWith("rgb"));
  return {
    stops,
    side
  };
}
function tuiToGradient({
  stops,
  side
}) {
  return `linear-gradient(${side}, ${stops.map(({
    color,
    position
  }) => `rgba(${tuiParseColor(color).join(", ")}) ${position}`).join(", ")})`;
}
function tuiRgbToHex(r, g, b) {
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}
function tuiRgbToHsv(r, g, b) {
  const v = Math.max(r, g, b);
  const n = v - Math.min(r, g, b);
  const h = n && (v === r ? (g - b) / n : v === g ? 2 + (b - r) / n : 4 + (r - g) / n);
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-di.mjs
function tuiCreateOptions(defaults) {
  const token = tuiCreateToken(defaults);
  return [token, (options) => tuiProvideOptions(token, options, defaults)];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-constants.mjs
var rect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};
var EMPTY_QUERY = new QueryList();
var EMPTY_ARRAY = [];
var EMPTY_FUNCTION = () => {
};
var EMPTY_CLIENT_RECT = __spreadProps(__spreadValues({}, rect), {
  toJSON: () => rect
});
var TUI_FALSE_HANDLER = () => false;
var TUI_TRUE_HANDLER = () => true;
function bothEmpty(item1, item2) {
  return Array.isArray(item1) && Array.isArray(item2) && !item1.length && !item2.length;
}
var TUI_DEFAULT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase().includes(search.toLowerCase());
var TUI_STRICT_MATCHER = (item, search, stringify = String) => stringify(item).toLowerCase() === search.toLowerCase();
var TUI_DEFAULT_IDENTITY_MATCHER = (item1, item2) => item1 === item2 || bothEmpty(item1, item2);
var TUI_NON_DIGITS_REGEXP = /\D+/g;
var svgNodeFilter = {
  acceptNode(node) {
    return "ownerSVGElement" in node ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_EN_DASH = "–";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_PLUS = "+";
var CHAR_ZERO_WIDTH_SPACE = "​";
var TUI_VERSION = "4.13.0";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-utils-focus.mjs
function tuiGetNativeFocused({
  activeElement
}) {
  if (!activeElement?.shadowRoot) {
    return activeElement;
  }
  let element = activeElement.shadowRoot.activeElement;
  while (element?.shadowRoot) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function tuiBlurNativeFocused(doc) {
  const activeElement = tuiGetNativeFocused(doc);
  if (tuiIsHTMLElement(activeElement)) {
    activeElement.blur();
  }
}
function tuiFocusedIn(node) {
  return toSignal(merge(fromEvent(node, "focusin").pipe(map(TUI_TRUE_HANDLER)), fromEvent(node, "focusout").pipe(map(TUI_FALSE_HANDLER))), {
    initialValue: false
  });
}
function tuiIsNativeKeyboardFocusable(element) {
  if (element.hasAttribute("disabled") || element.getAttribute("tabIndex") === "-1") {
    return false;
  }
  if (tuiIsHTMLElement(element) && element.isContentEditable || element.getAttribute("tabIndex") === "0") {
    return true;
  }
  switch (element.tagName) {
    case "A":
    case "LINK":
      return element.hasAttribute("href");
    case "AUDIO":
    case "VIDEO":
      return element.hasAttribute("controls");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    case "INPUT":
      return element.getAttribute("type") !== "hidden";
    default:
      return false;
  }
}
function tuiIsNativeMouseFocusable(element) {
  return !element.hasAttribute("disabled") && (element.getAttribute("tabIndex") === "-1" || tuiIsNativeKeyboardFocusable(element));
}
function tuiGetClosestFocusable({
  initial,
  root,
  previous = false,
  keyboard = true
}) {
  if (!root.ownerDocument) {
    return null;
  }
  const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
  const treeWalker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, svgNodeFilter);
  treeWalker.currentNode = initial;
  while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
    if (tuiIsHTMLElement(treeWalker.currentNode)) {
      initial = treeWalker.currentNode;
    }
    if (tuiIsHTMLElement(initial) && check(initial)) {
      return initial;
    }
  }
  return null;
}
function tuiIsNativeFocused(node) {
  return !!node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument) === node && node.ownerDocument.hasFocus();
}
function tuiIsNativeFocusedIn(node) {
  const focused = node?.ownerDocument && tuiGetNativeFocused(node.ownerDocument);
  return !!focused && node.contains(focused) && !!node.ownerDocument?.hasFocus();
}
function tuiMoveFocus(currentIndex, elements, step) {
  currentIndex += step;
  while (currentIndex >= 0 && currentIndex < elements.length) {
    elements[currentIndex]?.focus();
    if (tuiIsNativeFocused(elements[currentIndex])) {
      return;
    }
    currentIndex += step;
  }
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-tokens.mjs
var TUI_REMOVED_ELEMENT = tuiCreateTokenFromFactory(() => {
  const stub = {
    onRemovalComplete: () => {
    }
  };
  const element$ = new BehaviorSubject(null);
  const engine = inject(AnimationEngine, {
    optional: true
  }) || stub;
  const {
    onRemovalComplete = stub.onRemovalComplete
  } = engine;
  engine.onRemovalComplete = (element, context) => {
    element$.next(element);
    onRemovalComplete.call(engine, element, context);
  };
  return element$.pipe(switchMap((element) => timer(0).pipe(map(() => null), startWith(element))), share());
});
function isValidFocusout(target, removedElement = null) {
  return (
    // Not due to switching tabs/going to DevTools
    tuiGetDocumentOrShadowRoot(target).activeElement !== target && // Not due to button/input becoming disabled or under disabled fieldset
    !target.matches(":disabled") && // Not due to element being removed from DOM
    !removedElement?.contains(target) && // Not due to scrollable element became non-scrollable
    tuiIsNativeMouseFocusable(target)
  );
}
function shadowRootActiveElement(root) {
  return merge(tuiTypedFromEvent(root, "focusin").pipe(map(({
    target
  }) => target)), tuiTypedFromEvent(root, "focusout").pipe(filter(({
    target,
    relatedTarget
  }) => !!relatedTarget && isValidFocusout(target)), map(({
    relatedTarget
  }) => relatedTarget)));
}
var TUI_ACTIVE_ELEMENT = tuiCreateTokenFromFactory(() => {
  const removedElement$ = inject(TUI_REMOVED_ELEMENT);
  const win = inject(WA_WINDOW);
  const doc = inject(DOCUMENT);
  const zone = inject(NgZone);
  const focusout$ = tuiTypedFromEvent(win, "focusout", {
    capture: true
  });
  const focusin$ = tuiTypedFromEvent(win, "focusin", {
    capture: true
  });
  const blur$ = tuiTypedFromEvent(win, "blur");
  const mousedown$ = tuiTypedFromEvent(win, "mousedown");
  const mouseup$ = tuiTypedFromEvent(win, "mouseup");
  return merge(focusout$.pipe(takeUntil(mousedown$), repeat({
    delay: () => mouseup$
  }), withLatestFrom(removedElement$), filter(([event, removedElement]) => isValidFocusout(tuiGetActualTarget(event), removedElement)), map(([{
    relatedTarget
  }]) => relatedTarget)), blur$.pipe(map(() => doc.activeElement), filter((element) => !!element?.matches("iframe"))), focusin$.pipe(switchMap((event) => {
    const target = tuiGetActualTarget(event);
    const root = tuiGetDocumentOrShadowRoot(target);
    return root === doc ? of(target) : shadowRootActiveElement(root).pipe(startWith(target));
  })), mousedown$.pipe(switchMap((event) => {
    const actualTargetInCurrentTime = tuiGetActualTarget(event);
    return !doc.activeElement || doc.activeElement === doc.body ? of(actualTargetInCurrentTime) : focusout$.pipe(take(1), map(
      /**
       * Do not use `map(() => tuiGetActualTarget(event))`
       * because we have different result in runtime
       */
      () => actualTargetInCurrentTime
    ), takeUntil(timer(0, tuiZonefreeScheduler(zone))));
  }))).pipe(distinctUntilChanged(), share());
});
var TUI_BASE_HREF = tuiCreateTokenFromFactory(() => inject(DOCUMENT).querySelector("base")?.href ?? "");
var firstRegex2 = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/
);
var secondRegex2 = (
  // eslint-disable-next-line sonarjs/regex-complexity
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/
);
var TUI_IS_MOBILE = tuiCreateTokenFromFactory(() => firstRegex2.test(inject(WA_USER_AGENT).toLowerCase()) || secondRegex2.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase()));
var TUI_IS_IOS = tuiCreateTokenFromFactory(() => isIos(inject(WA_NAVIGATOR)));
var TUI_IS_ANDROID = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS));
var TUI_IS_WEBKIT = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW)?.webkitConvertPointFromNodeToPage);
var TUI_PLATFORM = tuiCreateTokenFromFactory(() => {
  if (inject(TUI_IS_IOS)) {
    return "ios";
  }
  return inject(TUI_IS_ANDROID) ? "android" : "web";
});
var TUI_IS_TOUCH = tuiCreateTokenFromFactory(() => {
  const media = inject(WA_WINDOW).matchMedia("(pointer: coarse)");
  return toSignal(fromEvent(media, "change").pipe(map(() => media.matches)), {
    initialValue: media.matches
  });
});
var TUI_IS_CYPRESS = tuiCreateTokenFromFactory(() => !!inject(WA_WINDOW).Cypress);
var TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory(TUI_FALSE_HANDLER);
var TUI_IS_E2E = tuiCreateTokenFromFactory(() => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT));
var TUI_FALLBACK_VALUE = tuiCreateToken(null);
function tuiFallbackValueProvider(useValue) {
  return {
    provide: TUI_FALLBACK_VALUE,
    useValue
  };
}
var TUI_RANGE = tuiCreateTokenFromFactory(() => isPlatformBrowser(inject(PLATFORM_ID)) ? new Range() : {});
var TUI_WINDOW_SIZE = tuiCreateTokenFromFactory(() => {
  const w = inject(WA_WINDOW);
  return tuiTypedFromEvent(w, "resize").pipe(startWith(null), map(() => {
    const width = Math.max(w.document.documentElement.clientWidth || 0, w.innerWidth || 0, w.visualViewport?.width || 0);
    const height = Math.max(w.document.documentElement.clientHeight || 0, w.innerHeight || 0, w.visualViewport?.height || 0);
    const rect2 = {
      width,
      height,
      top: 0,
      left: 0,
      right: width,
      bottom: height,
      x: 0,
      y: 0
    };
    return __spreadProps(__spreadValues({}, rect2), {
      toJSON: () => JSON.stringify(rect2)
    });
  }), shareReplay({
    bufferSize: 1,
    refCount: true
  }));
});

// node_modules/@taiga-ui/polymorpheus/fesm2022/taiga-ui-polymorpheus.mjs
var POLYMORPHEUS_CONTEXT = new InjectionToken("");
function injectContext(options = {}) {
  return inject(POLYMORPHEUS_CONTEXT, options);
}
var PolymorpheusComponent = class {
  constructor(component, i) {
    this.component = component;
    this.i = i;
  }
  createInjector(injector, useValue) {
    return Injector.create({
      parent: this.i || injector,
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }]
    });
  }
};
var PolymorpheusContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
  get polymorpheusOutlet() {
    return this.$implicit;
  }
};
var PolymorpheusTemplate = class _PolymorpheusTemplate {
  constructor(template = inject(TemplateRef, {
    self: true
  }), cdr = inject(ChangeDetectorRef)) {
    this.template = template;
    this.cdr = cdr;
    this.polymorpheus = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  check() {
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function PolymorpheusTemplate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusTemplate)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusTemplate,
      selectors: [["ng-template", "polymorpheus", ""]],
      inputs: {
        polymorpheus: "polymorpheus"
      },
      exportAs: ["polymorpheus"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusTemplate, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[polymorpheus]",
      inputs: ["polymorpheus"],
      exportAs: "polymorpheus"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var PolymorpheusOutlet = class _PolymorpheusOutlet {
  constructor() {
    this.vcr = inject(ViewContainerRef);
    this.i = inject(INJECTOR$1);
    this.t = inject(TemplateRef);
    this.content = "";
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  ngOnChanges({
    content
  }) {
    const context = this.getContext();
    this.c?.injector.get(ChangeDetectorRef).markForCheck();
    if (!content) {
      return;
    }
    this.vcr.clear();
    const proxy = context && new Proxy(context, {
      get: (_, key) => this.getContext()?.[key]
    });
    if (isComponent(this.content)) {
      this.process(this.content, proxy);
    } else if ((context instanceof PolymorpheusContext && context.$implicit) != null) {
      this.vcr.createEmbeddedView(this.template, proxy, {
        injector: this.i
      });
    }
  }
  ngDoCheck() {
    if (isDirective(this.content)) {
      this.content.check();
    }
  }
  get template() {
    if (isDirective(this.content)) {
      return this.content.template;
    }
    return this.content instanceof TemplateRef ? this.content : this.t;
  }
  getContext() {
    if (isTemplate(this.content) || isComponent(this.content)) {
      return this.context;
    }
    return new PolymorpheusContext(this.context && typeof this.content === "function" ? this.content(this.context) : this.content);
  }
  process(content, proxy) {
    const injector = content.createInjector(this.i, proxy);
    this.c = this.vcr.createComponent(content.component, {
      injector
    });
  }
  static {
    this.ɵfac = function PolymorpheusOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PolymorpheusOutlet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _PolymorpheusOutlet,
      selectors: [["", "polymorpheusOutlet", ""]],
      inputs: {
        content: [0, "polymorpheusOutlet", "content"],
        context: [0, "polymorpheusOutletContext", "context"]
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PolymorpheusOutlet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[polymorpheusOutlet]"
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["polymorpheusOutlet"]
    }],
    context: [{
      type: Input,
      args: ["polymorpheusOutletContext"]
    }]
  });
})();
function isDirective(content) {
  return content instanceof PolymorpheusTemplate;
}
function isComponent(content) {
  return content instanceof PolymorpheusComponent;
}
function isTemplate(content) {
  return isDirective(content) || content instanceof TemplateRef;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-loader.mjs
var _c0 = ["*"];
function TuiLoader_div_2_div_3_ng_container_1_Template(rf, ctx) {
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
function TuiLoader_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, TuiLoader_div_2_div_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-text_horizontal", ctx_r1.isHorizontal);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.textContent);
  }
}
function TuiLoader_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 3);
    ɵɵelement(2, "circle", 4);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiLoader_div_2_div_3_Template, 2, 3, "div", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-loader_horizontal", ctx_r1.isHorizontal)("t-loader_inherit-color", ctx_r1.inheritColor);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.textContent);
  }
}
var TUI_LOADER_DEFAULT_OPTIONS = {
  size: "m",
  inheritColor: false,
  overlay: false
};
var TUI_LOADER_OPTIONS = tuiCreateToken(TUI_LOADER_DEFAULT_OPTIONS);
function tuiLoaderOptionsProvider(options) {
  return tuiProvideOptions(TUI_LOADER_OPTIONS, options, TUI_LOADER_DEFAULT_OPTIONS);
}
var TuiLoader = class _TuiLoader {
  constructor() {
    this.isIOS = inject(TUI_IS_IOS);
    this.options = inject(TUI_LOADER_OPTIONS);
    this.isApple = tuiIsSafari(tuiInjectElement()) || this.isIOS;
    this.size = this.options.size;
    this.inheritColor = this.options.inheritColor;
    this.overlay = this.options.overlay;
    this.loading = true;
  }
  get isHorizontal() {
    return !tuiSizeBigger(this.size);
  }
  static {
    this.ɵfac = function TuiLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLoader)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLoader,
      selectors: [["tui-loader"]],
      hostVars: 3,
      hostBindings: function TuiLoader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_loading", ctx.loading);
        }
      },
      inputs: {
        size: "size",
        inheritColor: "inheritColor",
        overlay: "overlay",
        textContent: "textContent",
        loading: [0, "showLoader", "loading"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 3,
      vars: 7,
      consts: [[1, "t-content", 3, "disabled"], ["class", "t-loader", 3, "t-loader_horizontal", "t-loader_inherit-color", 4, "ngIf"], [1, "t-loader"], ["automation-id", "tui-loader__loader", "focusable", "false", "height", "100%", "width", "100%", 1, "t-icon"], ["cx", "50%", "cy", "50%", 1, "t-circle"], ["automation-id", "tui-loader__text", "class", "t-text", 3, "t-text_horizontal", 4, "ngIf"], ["automation-id", "tui-loader__text", 1, "t-text"], [4, "polymorpheusOutlet"]],
      template: function TuiLoader_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "fieldset", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiLoader_div_2_Template, 4, 5, "div", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-content_has-overlay", ctx.overlay && ctx.loading)("t-content_loading", ctx.loading);
          ɵɵproperty("disabled", ctx.loading && !ctx.isApple);
          ɵɵattribute("inert", ctx.loading || null);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.loading);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLoader, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-loader",
      imports: [NgIf, PolymorpheusOutlet, PolymorpheusTemplate],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._loading]": "loading",
        "[attr.data-size]": "size"
      },
      template: '<fieldset\n    class="t-content"\n    [attr.inert]="loading || null"\n    [class.t-content_has-overlay]="overlay && loading"\n    [class.t-content_loading]="loading"\n    [disabled]="loading && !isApple"\n>\n    <ng-content />\n</fieldset>\n\n<div\n    *ngIf="loading"\n    class="t-loader"\n    [class.t-loader_horizontal]="isHorizontal"\n    [class.t-loader_inherit-color]="inheritColor"\n>\n    <svg\n        automation-id="tui-loader__loader"\n        focusable="false"\n        height="100%"\n        width="100%"\n        class="t-icon"\n    >\n        <circle\n            cx="50%"\n            cy="50%"\n            class="t-circle"\n        />\n    </svg>\n\n    <div\n        *ngIf="textContent"\n        automation-id="tui-loader__text"\n        class="t-text"\n        [class.t-text_horizontal]="isHorizontal"\n    >\n        <ng-container *polymorpheusOutlet="textContent as text">\n            {{ text }}\n        </ng-container>\n    </div>\n</div>\n',
      styles: [":host{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}:host._loading{overflow:hidden}:host[data-size=xs]{--t-diameter: .75em}:host[data-size=s]{--t-diameter: 1em}:host[data-size=m]{--t-diameter: 1.5em}:host[data-size=l]{--t-diameter: 2.5em}:host[data-size=xl]{--t-diameter: 3.5em}:host[data-size=xxl]{--t-diameter: 5em}.t-content{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay{opacity:.3}.t-content_loading{pointer-events:none}.t-loader{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal{flex-direction:row}.t-loader.t-loader_inherit-color{color:inherit;stroke:currentColor}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal{margin:0 0 0 1rem}@keyframes tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon{overflow:visible}}@keyframes tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:tuiLoaderDashOffset 4s linear infinite}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }],
    inheritColor: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    textContent: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: ["showLoader"]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-date-time.mjs
function tuiDateClamp(date, min, max) {
  if (max && max < date) {
    return max;
  }
  if (min && min > date) {
    return min;
  }
  return date;
}
var DAYS_IN_WEEK = 7;
var MONTHS_IN_YEAR = 12;
var MIN_DAY = 1;
var MIN_MONTH = 0;
var MAX_MONTH = 11;
var MIN_YEAR = 0;
var MAX_YEAR = 9999;
var MAX_DISPLAYED_YEAR = 2099;
var RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;
var MILLISECONDS_IN_SECOND = 1e3;
var SECONDS_IN_MINUTE = 60;
var MINUTES_IN_HOUR = 60;
var HOURS_IN_DAY = 24;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;
var MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
var DATE_FILLER_LENGTH = 10;
var DATE_RANGE_FILLER_LENGTH = 2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;
var TuiDayOfWeek = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6
};
var TuiMonthNumber = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11
};
var TuiYear = class _TuiYear {
  constructor(year) {
    this.year = year;
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
  }
  /**
   * Checks year for validity
   */
  static isValidYear(year) {
    return Number.isInteger(year) && tuiInRange(year, MIN_YEAR, MAX_YEAR + 1);
  }
  /**
   * Check if passed year is a leap year
   */
  static isLeapYear(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /**
   * Returns amount of leap years from year 0 to the passed one
   */
  static getAbsoluteLeapYears(year) {
    ngDevMode && console.assert(_TuiYear.isValidYear(year));
    return Math.ceil(year / 400) + (Math.ceil(year / 4) - Math.ceil(year / 100));
  }
  static lengthBetween(from2, to) {
    return to.year - from2.year;
  }
  /**
   * Normalizes year by clamping it between min and max years
   */
  static normalizeYearPart(year) {
    return tuiNormalizeToIntNumber(year, MIN_YEAR, MAX_YEAR);
  }
  get formattedYear() {
    return String(this.year).padStart(4, "0");
  }
  get isLeapYear() {
    return _TuiYear.isLeapYear(this.year);
  }
  /**
   * Returns amount of leap years from year 0 to current
   */
  get absoluteLeapYears() {
    return _TuiYear.getAbsoluteLeapYears(this.year);
  }
  /**
   * Passed year is after current
   */
  yearBefore({
    year
  }) {
    return this.year < year;
  }
  /**
   * Passed year is the same or after current
   */
  yearSameOrBefore({
    year
  }) {
    return this.year <= year;
  }
  /**
   * Passed year is the same as current
   */
  yearSame({
    year
  }) {
    return this.year === year;
  }
  /**
   * Passed year is either the same of before the current
   */
  yearSameOrAfter({
    year
  }) {
    return this.year >= year;
  }
  /**
   * Passed year is before current
   */
  yearAfter({
    year
  }) {
    return this.year > year;
  }
  /**
   * Immutably offsets year
   */
  append({
    year = 0
  }) {
    ngDevMode && console.assert(Number.isInteger(year));
    const resultYear = this.year + year;
    ngDevMode && console.assert(_TuiYear.isValidYear(resultYear));
    return new _TuiYear(resultYear);
  }
  toString() {
    return this.formattedYear;
  }
  valueOf() {
    return this.year;
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  toJSON() {
    return this.formattedYear;
  }
};
var TuiMonth = class _TuiMonth extends TuiYear {
  /**
   * @param year
   * @param month (starting with 0)
   */
  constructor(year, month) {
    super(year);
    this.month = month;
    ngDevMode && console.assert(_TuiMonth.isValidMonth(year, month));
  }
  /**
   * Tests month and year for validity
   */
  static isValidMonth(year, month) {
    return TuiYear.isValidYear(year) && _TuiMonth.isValidMonthPart(month);
  }
  /**
   * Returns number of days in a month
   */
  static getMonthDaysCount(month, isLeapYear) {
    ngDevMode && console.assert(_TuiMonth.isValidMonthPart(month));
    switch (month) {
      case TuiMonthNumber.April:
      case TuiMonthNumber.June:
      case TuiMonthNumber.November:
      case TuiMonthNumber.September:
        return 30;
      case TuiMonthNumber.February:
        return isLeapYear ? 29 : 28;
      default:
        return 31;
    }
  }
  /**
   * Returns current month and year based on local time zone
   * @nosideeffects
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getFullYear(), nativeDate.getMonth());
  }
  /**
   * Returns current month and year based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    return new _TuiMonth(nativeDate.getUTCFullYear(), nativeDate.getUTCMonth());
  }
  static lengthBetween(from2, to) {
    const absoluteFrom = from2.month + from2.year * 12;
    const absoluteTo = to.month + to.year * 12;
    return absoluteTo - absoluteFrom;
  }
  /**
   * Normalizes number by clamping it between min and max month
   */
  static normalizeMonthPart(month) {
    return tuiNormalizeToIntNumber(month, MIN_MONTH, MAX_MONTH);
  }
  /**
   * Tests month for validity
   */
  static isValidMonthPart(month) {
    return Number.isInteger(month) && tuiInRange(month, MIN_MONTH, MAX_MONTH + 1);
  }
  get formattedMonthPart() {
    return String(this.month + 1).padStart(2, "0");
  }
  /**
   * Returns days in a month
   */
  get daysCount() {
    return _TuiMonth.getMonthDaysCount(this.month, this.isLeapYear);
  }
  /**
   * Passed month and year are after current
   */
  monthBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month < another.month;
  }
  /**
   * Passed month and year are after or the same as current
   */
  monthSameOrBefore(another) {
    return this.yearBefore(another) || this.yearSame(another) && this.month <= another.month;
  }
  /**
   * Passed month and year are the same as current
   */
  monthSame(another) {
    return this.yearSame(another) && this.month === another.month;
  }
  /**
   * Passed month and year are either before or equal to current
   */
  monthSameOrAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month >= another.month;
  }
  /**
   * Passed month and year are before current
   */
  monthAfter(another) {
    return this.yearAfter(another) || this.yearSame(another) && this.month > another.month;
  }
  /**
   * Immutably alters current month and year by passed offset
   *
   * @param offset
   * @return new month and year object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    return new _TuiMonth(Math.floor(totalMonths / MONTHS_IN_YEAR), totalMonths % MONTHS_IN_YEAR);
  }
  toString() {
    return `${this.formattedMonthPart}.${this.formattedYear}`;
  }
  valueOf() {
    return this.toLocalNativeDate().valueOf();
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedMonthPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month));
  }
};
var TuiDay = class _TuiDay extends TuiMonth {
  constructor(year, month, day) {
    super(year, month);
    this.day = day;
    ngDevMode && console.assert(_TuiDay.isValidDay(year, month, day));
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} based on local time zone
   */
  static fromLocalNativeDate(date) {
    return new _TuiDay(date.getFullYear(), date.getMonth(), date.getDate());
  }
  /**
   * Creates {@link TuiDay} from native {@link Date} using UTC
   */
  static fromUtcNativeDate(date) {
    return new _TuiDay(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  }
  /**
   * Check validity of year, month and day
   *
   * @param year
   * @param month
   * @param day
   * @return boolean validity
   */
  static isValidDay(year, month, day) {
    return TuiMonth.isValidMonth(year, month) && Number.isInteger(day) && tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1);
  }
  /**
   * Current day based on local time zone
   */
  static currentLocal() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getFullYear();
    const month = nativeDate.getMonth();
    const day = nativeDate.getDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Returns current day based on UTC
   */
  static currentUtc() {
    const nativeDate = /* @__PURE__ */ new Date();
    const year = nativeDate.getUTCFullYear();
    const month = nativeDate.getUTCMonth();
    const day = nativeDate.getUTCDate();
    return new _TuiDay(year, month, day);
  }
  /**
   * Calculates {@link TuiDay} normalizing year, month and day. {@link NaN} is turned into minimal value.
   *
   * @param year any year value, including invalid
   * @param month any month value, including invalid (months start with 0)
   * @param day any day value, including invalid
   * @return normalized date
   */
  static normalizeOf(year, month, day) {
    const normalizedYear = TuiYear.normalizeYearPart(year);
    const normalizedMonth = TuiMonth.normalizeMonthPart(month);
    const normalizedDay = _TuiDay.normalizeDayPart(day, normalizedMonth, normalizedYear);
    return new _TuiDay(normalizedYear, normalizedMonth, normalizedDay);
  }
  static lengthBetween(from2, to) {
    return Math.round((to.toLocalNativeDate().getTime() - from2.toLocalNativeDate().getTime()) / (1e3 * 60 * 60 * 24));
  }
  static parseRawDateString(date, dateMode = "DMY") {
    ngDevMode && console.assert(date.length === DATE_FILLER_LENGTH, "[parseRawDateString]: wrong date string length");
    switch (dateMode) {
      case "MDY":
        return {
          day: parseInt(date.slice(3, 5), 10),
          month: parseInt(date.slice(0, 2), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
      case "YMD":
        return {
          day: parseInt(date.slice(8, 10), 10),
          month: parseInt(date.slice(5, 7), 10) - 1,
          year: parseInt(date.slice(0, 4), 10)
        };
      case "DMY":
      default:
        return {
          day: parseInt(date.slice(0, 2), 10),
          month: parseInt(date.slice(3, 5), 10) - 1,
          year: parseInt(date.slice(6, 10), 10)
        };
    }
  }
  // TODO: Move month and year related code corresponding classes
  /**
   * Parsing a string with date with normalization
   *
   * @param rawDate date string
   * @param dateMode date format of the date string (DMY | MDY | YMD)
   * @return normalized date
   */
  static normalizeParse(rawDate, dateMode = "DMY") {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(rawDate, dateMode);
    return _TuiDay.normalizeOf(year, month, day);
  }
  /**
   * Parsing a date stringified in a toJSON format
   * @param yearMonthDayString date string in format of YYYY-MM-DD
   * @return date
   * @throws exceptions if any part of the date is invalid
   */
  static jsonParse(yearMonthDayString) {
    const {
      day,
      month,
      year
    } = this.parseRawDateString(yearMonthDayString, "YMD");
    if (!TuiMonth.isValidMonth(year, month) || !Number.isInteger(day) || !tuiInRange(day, MIN_DAY, TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year)) + 1)) {
      throw new TuiInvalidDayException(year, month, day);
    }
    return new _TuiDay(year, month, day);
  }
  static normalizeDayPart(day, month, year) {
    ngDevMode && console.assert(TuiMonth.isValidMonth(year, month));
    const monthDaysCount = TuiMonth.getMonthDaysCount(month, TuiYear.isLeapYear(year));
    return tuiNormalizeToIntNumber(day, 1, monthDaysCount);
  }
  get formattedDayPart() {
    return String(this.day).padStart(2, "0");
  }
  get isWeekend() {
    const dayOfWeek = this.dayOfWeek(false);
    return dayOfWeek === TuiDayOfWeek.Saturday || dayOfWeek === TuiDayOfWeek.Sunday;
  }
  /**
   * Returns day of week
   *
   * @param startFromMonday whether week starts from Monday and not from Sunday
   * @return day of week (from 0 to 6)
   */
  dayOfWeek(startFromMonday = true) {
    const dayOfWeek = startFromMonday ? this.toLocalNativeDate().getDay() - 1 : this.toLocalNativeDate().getDay();
    return dayOfWeek < 0 ? 6 : dayOfWeek;
  }
  /**
   * Passed date is after current
   */
  dayBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day < another.day;
  }
  /**
   * Passed date is after or equals to current
   */
  daySameOrBefore(another) {
    return this.monthBefore(another) || this.monthSame(another) && this.day <= another.day;
  }
  /**
   * Passed date is the same as current
   */
  daySame(another) {
    return this.monthSame(another) && this.day === another.day;
  }
  /**
   * Passed date is either before or the same as current
   */
  daySameOrAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day >= another.day;
  }
  /**
   * Passed date is before current
   */
  dayAfter(another) {
    return this.monthAfter(another) || this.monthSame(another) && this.day > another.day;
  }
  /**
   * Clamping date between two limits
   *
   * @param min
   * @param max
   * @return clamped date
   */
  dayLimit(min, max) {
    if (min !== null && this.dayBefore(min)) {
      return min;
    }
    if (max !== null && this.dayAfter(max)) {
      return max;
    }
    return this;
  }
  /**
   * Immutably alters current day by passed offset
   *
   * If resulting month has more days than original one, date is rounded to the maximum day
   * in the resulting month. Offset of days will be calculated based on the resulted year and month
   * to not interfere with parent classes methods
   *
   * @param offset
   * @return new date object as a result of offsetting current
   */
  append({
    year = 0,
    month = 0,
    day = 0
  }) {
    const totalMonths = (this.year + year) * MONTHS_IN_YEAR + this.month + month;
    let years = Math.floor(totalMonths / MONTHS_IN_YEAR);
    let months = totalMonths % MONTHS_IN_YEAR;
    let days = Math.min(this.day, TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) + day;
    while (days > TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years))) {
      days -= TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
      if (months === TuiMonthNumber.December) {
        years++;
        months = TuiMonthNumber.January;
      } else {
        months++;
      }
    }
    while (days < MIN_DAY) {
      if (months === TuiMonthNumber.January) {
        years--;
        months = TuiMonthNumber.December;
      } else {
        months--;
      }
      days += TuiMonth.getMonthDaysCount(months, TuiYear.isLeapYear(years));
    }
    return new _TuiDay(years, months, days);
  }
  /**
   * Returns formatted whole date
   */
  getFormattedDay(dateFormat, separator) {
    ngDevMode && console.assert(separator.length === 1, "Separator should consist of only 1 symbol");
    const dd = this.formattedDayPart;
    const mm = this.formattedMonthPart;
    const yyyy = this.formattedYear;
    switch (dateFormat) {
      case "MDY":
        return `${mm}${separator}${dd}${separator}${yyyy}`;
      case "YMD":
        return `${yyyy}${separator}${mm}${separator}${dd}`;
      case "DMY":
      default:
        return `${dd}${separator}${mm}${separator}${yyyy}`;
    }
  }
  toString(dateFormat = "DMY", separator = ".") {
    return this.getFormattedDay(dateFormat, separator);
  }
  toJSON() {
    return `${super.toJSON()}-${this.formattedDayPart}`;
  }
  /**
   * Returns native {@link Date} based on local time zone
   */
  toLocalNativeDate() {
    return new Date(this.year, this.month, this.day);
  }
  /**
   * Returns native {@link Date} based on UTC
   */
  toUtcNativeDate() {
    return new Date(Date.UTC(this.year, this.month, this.day));
  }
};
var TuiInvalidDayException = class extends Error {
  constructor(year, month, day) {
    super(ngDevMode ? `Invalid day: ${year}-${month}-${day}` : "");
  }
};
var TuiMonthRange = class _TuiMonthRange {
  constructor(from2, to) {
    this.from = from2;
    this.to = to;
    ngDevMode && console.assert(from2.monthSameOrBefore(to));
  }
  static sort(month1, month2) {
    return month1.monthSameOrBefore(month2) ? new _TuiMonthRange(month1, month2) : new _TuiMonthRange(month2, month1);
  }
  get isSingleMonth() {
    return this.from.monthSame(this.to);
  }
  monthSame(another) {
    return this.from.monthSame(another.from) && this.to.monthSame(another.to);
  }
  toString() {
    return `${this.from}${RANGE_SEPARATOR_CHAR}${this.to}`;
  }
};
var TuiDayRange = class _TuiDayRange extends TuiMonthRange {
  constructor(from2, to) {
    super(from2, to);
    this.from = from2;
    this.to = to;
    ngDevMode && console.assert(from2.daySameOrBefore(to));
  }
  /**
   * Creates range from two days after sorting them
   *
   * @param day1
   * @param day2
   * @return new range with sorted days
   */
  static sort(day1, day2) {
    return day1.daySameOrBefore(day2) ? new _TuiDayRange(day1, day2) : new _TuiDayRange(day2, day1);
  }
  /**
   * Parse and correct a day range in string format
   *
   * @param rangeString a string of dates in a format dd.mm.yyyy - dd.mm.yyyy
   * @param dateMode {@link TuiDateMode}
   * @return normalized day range object
   */
  static normalizeParse(rangeString, dateMode = "DMY") {
    const leftDay = TuiDay.normalizeParse(rangeString.slice(0, DATE_FILLER_LENGTH), dateMode);
    if (rangeString.length < DATE_RANGE_FILLER_LENGTH) {
      return new _TuiDayRange(leftDay, leftDay);
    }
    return _TuiDayRange.sort(leftDay, TuiDay.normalizeParse(rangeString.slice(DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length), dateMode));
  }
  get isSingleDay() {
    return this.from.daySame(this.to);
  }
  /**
   * Tests ranges for identity
   *
   * @param another second range to test against current
   * @return `true` if days are identical
   */
  daySame(another) {
    return this.from.daySame(another.from) && this.to.daySame(another.to);
  }
  /**
   * Locks range between two days included, or limits from one side if the other is null
   *
   * @param min
   * @param max
   * @return range — clamped range
   */
  dayLimit(min, max) {
    return new _TuiDayRange(this.from.dayLimit(min, max), this.to.dayLimit(min, max));
  }
  /**
   * Human readable format.
   */
  getFormattedDayRange(dateFormat, dateSeparator) {
    const from2 = this.from.getFormattedDay(dateFormat, dateSeparator);
    const to = this.to.getFormattedDay(dateFormat, dateSeparator);
    return `${from2}${RANGE_SEPARATOR_CHAR}${to}`;
  }
  toString(dateFormat = "DMY", dateSeparator = ".") {
    return this.getFormattedDayRange(dateFormat, dateSeparator);
  }
};
var TUI_FIRST_DAY = new TuiDay(MIN_YEAR, MIN_MONTH, MIN_DAY);
var TUI_LAST_DAY = new TuiDay(MAX_YEAR, MAX_MONTH, 31);
var TUI_LAST_DISPLAYED_DAY = new TuiDay(MAX_DISPLAYED_YEAR, MAX_MONTH, 31);
var TuiTime = class _TuiTime {
  constructor(hours, minutes, seconds = 0, ms = 0) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.ms = ms;
    ngDevMode && console.assert(
      // Currently `TuiTime` could have hours more than 23
      // in order to not break current behaviour of `isValidTime` the logic is duplicated
      Number.isInteger(hours) && tuiInRange(hours, 0, Infinity) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3),
      "Time must be real, but got:",
      hours,
      minutes,
      seconds,
      ms
    );
  }
  /**
   * Checks if time is valid
   */
  static isValidTime(hours, minutes, seconds = 0, ms = 0) {
    return Number.isInteger(hours) && tuiInRange(hours, 0, HOURS_IN_DAY) && Number.isInteger(minutes) && tuiInRange(minutes, 0, MINUTES_IN_HOUR) && Number.isInteger(seconds) && tuiInRange(seconds, 0, SECONDS_IN_MINUTE) && Number.isInteger(ms) && tuiInRange(ms, 0, 1e3);
  }
  /**
   * Current UTC time.
   */
  static current() {
    return _TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
  }
  /**
   * Current time in local timezone
   */
  static currentLocal() {
    const date = /* @__PURE__ */ new Date();
    return _TuiTime.fromAbsoluteMilliseconds((Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) % MILLISECONDS_IN_DAY);
  }
  /**
   * Calculates TuiTime from milliseconds
   */
  static fromAbsoluteMilliseconds(milliseconds) {
    ngDevMode && console.assert(Number.isInteger(milliseconds));
    ngDevMode && console.assert(tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY), `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`);
    const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor(milliseconds % MILLISECONDS_IN_HOUR / MILLISECONDS_IN_MINUTE);
    const seconds = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE / 1e3) || 0;
    const ms = Math.floor(milliseconds % MILLISECONDS_IN_HOUR % MILLISECONDS_IN_MINUTE % 1e3) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Parses string into TuiTime object
   */
  static fromString(time) {
    const hours = this.parseHours(time);
    const minutes = Number(time.slice(3, 5)) || 0;
    const seconds = Number(time.slice(6, 8)) || 0;
    const ms = Number(time.slice(9, 12)) || 0;
    return new _TuiTime(hours, minutes, seconds, ms);
  }
  /**
   * Converts Date object into TuiTime
   * @param date
   */
  static fromLocalNativeDate(date) {
    return new _TuiTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
  }
  static parseMeridiemPeriod(time) {
    return /[AP]M/.exec(time.toUpperCase().replaceAll(/\W/g, ""))?.[0] || null;
  }
  static parseHours(time) {
    const hours = Number(time.slice(0, 2));
    const meridiem = this.parseMeridiemPeriod(time);
    if (!meridiem) {
      return hours;
    }
    if (hours === 12) {
      return meridiem === "AM" ? 0 : 12;
    }
    return meridiem === "PM" ? hours + 12 : hours;
  }
  /**
   * Shifts time by hours and minutes
   */
  shift({
    hours = 0,
    minutes = 0,
    seconds = 0,
    ms = 0
  }) {
    const newMs = (1e3 + this.ms + ms % 1e3) % 1e3;
    const secondsInMs = ms < 0 ? Math.ceil(ms / 1e3) : Math.floor(ms / 1e3);
    const secondsToAdd = secondsInMs + seconds;
    const newSeconds = (60 + this.seconds + secondsToAdd % 60) % 60;
    const minutesInSeconds = secondsToAdd < 0 ? Math.ceil(secondsToAdd / 60) : Math.floor(secondsToAdd / 60);
    const minutesToAdd = minutesInSeconds + minutes;
    const newMinutes = (60 + this.minutes + minutesToAdd % 60) % 60;
    const hoursInMinutes = minutesToAdd < 0 ? Math.ceil(minutesToAdd / 60) : Math.floor(minutesToAdd / 60);
    const hoursToAdd = hoursInMinutes + hours;
    const newHours = (24 + this.hours + hoursToAdd % 24) % 24;
    return new _TuiTime(newHours, newMinutes, newSeconds, newMs);
  }
  /**
   * Converts TuiTime to string
   */
  toString(mode) {
    const needAddMs = mode?.startsWith("HH:MM:SS.MSS") || !mode && this.ms > 0;
    const needAddSeconds = needAddMs || mode?.startsWith("HH:MM:SS") || !mode && this.seconds > 0;
    const {
      hours = this.hours,
      meridiem = ""
    } = mode?.includes("AA") ? this.toTwelveHour(this.hours) : {};
    const hhMm = `${this.formatTime(hours)}:${this.formatTime(this.minutes)}`;
    const ss = needAddSeconds ? `:${this.formatTime(this.seconds)}` : "";
    const mss = needAddMs ? `.${this.formatTime(this.ms, 3)}` : "";
    const aa = meridiem && `${CHAR_NO_BREAK_SPACE}${meridiem}`;
    return `${hhMm}${ss}${mss}${aa}`;
  }
  valueOf() {
    return this.toAbsoluteMilliseconds();
  }
  /**
   * Returns the primitive value of the given Date object.
   * Depending on the argument, the method can return either a string or a number.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
   */
  [Symbol.toPrimitive](hint) {
    return Date.prototype[Symbol.toPrimitive].call(this, hint);
  }
  /**
   * Converts TuiTime to milliseconds
   */
  toAbsoluteMilliseconds() {
    return this.hours * MILLISECONDS_IN_HOUR + this.minutes * MILLISECONDS_IN_MINUTE + this.seconds * 1e3 + this.ms;
  }
  formatTime(time, digits = 2) {
    return String(time).padStart(digits, "0");
  }
  toTwelveHour(hours) {
    const meridiem = hours >= 12 ? "PM" : "AM";
    if (hours === 0 || hours === 12) {
      return {
        meridiem,
        hours: 12
      };
    }
    return {
      meridiem,
      hours: hours % 12
    };
  }
};

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-languages-english.mjs
var TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE = {
  cardNumber: ["Number", "Card number"],
  cardExpiry: ["Expires", "Valid through"]
};
var TUI_ENGLISH_LANGUAGE_ADDON_EDITOR = {
  colorSelectorModeNames: ["Solid color", "Gradient"],
  toolbarTools: {
    undo: "Undo",
    redo: "Redo",
    font: "Font",
    fontStyle: "Font style",
    fontSize: "Font size",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    strikeThrough: "Strike through",
    justify: "Justify",
    justifyLeft: "Justify left",
    justifyCenter: "Justify center",
    justifyRight: "Justify right",
    justifyFull: "Justify full",
    list: "List",
    indent: "Indent",
    outdent: "Outdent",
    unorderedList: "Unordered list",
    orderedList: "Ordered list",
    quote: "Quote",
    foreColor: "Color",
    backColor: "Background color",
    hiliteColor: "Highlight color",
    clear: "Clear",
    link: "Link",
    attach: "Attach file",
    tex: "Insert TeX",
    code: "Code",
    image: "Insert image",
    insertHorizontalRule: "Insert horizontal rule",
    superscript: "Superscript",
    subscript: "Subscript",
    insertTable: "Insert table",
    insertGroup: "Insert group",
    hiliteGroup: "Hilite group",
    removeGroup: "Remove group",
    insertAnchor: "Insert anchor",
    mergeCells: "Merge cells",
    splitCells: "Split cells",
    rowsColumnsManaging: "Managing rows and columns",
    cellColor: "Cell color",
    setDetails: "Details",
    removeDetails: "Remove details"
  },
  editorEditLink: {
    urlExample: "example.com",
    anchorExample: "anchor"
  },
  editorTableCommands: [["Insert column before", "Insert column after"], ["Insert row before", "Insert row after"], ["Delete column", "Delete row"]],
  editorCodeOptions: ["Code in the text", "Code in block"],
  editorFontOptions: {
    small: "Small",
    large: "Large",
    normal: "Normal",
    title: "Title",
    subtitle: "Subtitle"
  }
};
var TUI_ENGLISH_LANGUAGE_ADDON_TABLE = {
  showHideText: "Show/Hide",
  paginationTexts: {
    pages: "Pages",
    linesPerPage: "Lines per page",
    of: "of"
  }
};
var TUI_ENGLISH_LANGUAGE_COUNTRIES = {
  AD: "Andorra",
  AE: "United Arab Emirates",
  AF: "Afghanistan",
  AG: "Antigua & Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AR: "Argentina",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AZ: "Azerbaijan",
  BA: "Bosnia & Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "St. Barthélemy",
  BM: "Bermuda",
  BN: "Brunei",
  BO: "Bolivia",
  BQ: "Caribbean Netherlands",
  BR: "Brazil",
  BS: "Bahamas",
  BT: "Bhutan",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CD: "Congo - Kinshasa",
  CF: "Central African Republic",
  CG: "Congo - Brazzaville",
  CH: "Switzerland",
  CI: "Côte d’Ivoire",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cape Verde",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands",
  FM: "Federated States of Micronesia",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GT: "Guatemala",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IN: "India",
  IQ: "Iraq",
  IR: "Iran",
  IS: "Iceland",
  IT: "Italy",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KM: "Comoros",
  KN: "St. Kitts & Nevis",
  KP: "North Korea",
  KR: "South Korea",
  KW: "Kuwait",
  KY: "Cayman Islands",
  KZ: "Kazakhstan",
  LA: "Laos",
  LB: "Lebanon",
  LC: "St. Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova",
  ME: "Montenegro",
  MF: "St. Martin",
  MG: "Madagascar",
  MK: "North Macedonia",
  ML: "Mali",
  MM: "Myanmar (Burma)",
  MN: "Mongolia",
  MO: "Macao",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands",
  NO: "Norway",
  NP: "Nepal",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines",
  PK: "Pakistan",
  PL: "Poland",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russia",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan",
  SE: "Sweden",
  SG: "Singapore",
  SH: "St. Helena",
  SI: "Slovenia",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  ST: "São Tomé & Príncipe",
  SV: "El Salvador",
  SX: "Sint Maarten",
  SY: "Syria",
  SZ: "Eswatini",
  TC: "Turks & Caicos Islands",
  TD: "Chad",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Türkiye",
  TT: "Trinidad & Tobago",
  TW: "Taiwan",
  TZ: "Tanzania",
  UA: "Ukraine",
  UG: "Uganda",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VC: "St. Vincent & Grenadines",
  VE: "Venezuela",
  VG: "British Virgin Islands",
  VN: "Vietnam",
  VU: "Vanuatu",
  WS: "Samoa",
  XK: "Kosovo",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AC: "Ascension Island",
  AS: "American Samoa",
  AX: "Åland Islands",
  CC: "Cocos (Keeling) Islands",
  CK: "Cook Islands",
  CX: "Christmas Island",
  EH: "Western Sahara",
  FO: "Faroe Islands",
  GG: "Guernsey",
  GU: "Guam",
  IM: "Isle of Man",
  JE: "Jersey",
  IO: "British Indian Ocean Territory",
  KI: "Kiribati",
  MH: "Marshall Islands",
  MP: "Northern Mariana Islands",
  NF: "Norfolk Island",
  NR: "Nauru",
  NU: "Niue",
  PM: "Saint Pierre and Miquelon",
  PR: "Puerto Rico",
  PS: "Palestine",
  SJ: "Svalbard and Jan Mayen",
  SS: "South Sudan",
  TA: "Tristan da Cunha",
  TK: "Tokelau",
  TV: "Tuvalu",
  VA: "Holy See",
  VI: "Virgin Islands",
  WF: "Wallis and Futuna"
};
var TUI_ENGLISH_LANGUAGE_CORE = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  close: "Close",
  clear: "Clear",
  nothingFoundMessage: "Nothing found",
  defaultErrorMessage: "Value is invalid",
  spinTexts: ["Previous", "Next"],
  shortWeekDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  countries: TUI_ENGLISH_LANGUAGE_COUNTRIES
};
var TUI_ENGLISH_LANGUAGE_KIT = {
  cancel: "Cancel",
  done: "Done",
  more: "More",
  otherDate: "Other date...",
  showAll: "Show all",
  hide: "Hide",
  mobileCalendarTexts: ["Choose day", "Choose range", "Choose days"],
  range: ["from", "to"],
  countTexts: ["Plus", "Minus"],
  time: {
    "HH:MM": "HH:MM",
    "HH:MM AA": "HH:MM AA",
    "HH:MM:SS": "HH:MM:SS",
    "HH:MM:SS AA": "HH:MM:SS AA",
    "HH:MM:SS.MSS": "HH:MM:SS.MSS",
    "HH:MM:SS.MSS AA": "HH:MM:SS.MSS AA"
  },
  dateTexts: {
    DMY: "dd.mm.yyyy",
    MDY: "mm.dd.yyyy",
    YMD: "yyyy.mm.dd"
  },
  digitalInformationUnits: ["B", "KiB", "MiB"],
  passwordTexts: ["Show password", "Hide password"],
  copyTexts: ["Copy", "Copied"],
  shortCalendarMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pagination: ["Previous page", "Next page"],
  fileTexts: {
    loadingError: "Upload failed",
    preview: "Preview",
    remove: "Remove"
  },
  inputFileTexts: {
    defaultLabelSingle: "or drop it here",
    defaultLabelMultiple: "or drop them here",
    defaultLinkSingle: "Choose a file",
    defaultLinkMultiple: "Choose files",
    maxSizeRejectionReason: "File is larger than",
    formatRejectionReason: "Wrong file type",
    drop: "Drop file here",
    dropMultiple: "Drop files here"
  },
  multiSelectTexts: {
    all: "Select all",
    none: "Select none"
  },
  confirm: {
    yes: "Yes",
    no: "No"
  },
  previewTexts: {
    rotate: "Rotate"
  },
  zoomTexts: {
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    reset: "Reset"
  },
  phoneSearch: "Type country or code"
};
var TUI_ENGLISH_LANGUAGE = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
  name: "english"
}, TUI_ENGLISH_LANGUAGE_CORE), TUI_ENGLISH_LANGUAGE_KIT), TUI_ENGLISH_LANGUAGE_ADDON_TABLE), TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE), TUI_ENGLISH_LANGUAGE_ADDON_EDITOR);

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-tokens.mjs
var TUI_DEFAULT_LANGUAGE = tuiCreateTokenFromFactory(() => TUI_ENGLISH_LANGUAGE);
var TUI_LANGUAGE = tuiCreateTokenFromFactory(() => of(inject(TUI_DEFAULT_LANGUAGE)));
var TUI_LANGUAGE_LOADER = tuiCreateToken();
var TUI_LANGUAGE_STORAGE_KEY = tuiCreateToken("tuiLanguage");

// node_modules/@taiga-ui/i18n/fesm2022/taiga-ui-i18n-utils.mjs
function tuiExtractI18n(key) {
  return () => inject(TUI_LANGUAGE).pipe(map((lang) => lang[key]));
}
function normalizeCommonJSImport(importPromise) {
  return __async(this, null, function* () {
    return importPromise.then((m) => m.default || m);
  });
}
function tuiLoadLanguage(language, loader) {
  return from(normalizeCommonJSImport(loader(language))).pipe(map((module) => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]));
}
function tuiAsyncLoadLanguage(language, loader, fallback) {
  return language && loader ? tuiLoadLanguage(language, loader) : of(fallback);
}
var TuiLanguageSwitcherService = class _TuiLanguageSwitcherService extends BehaviorSubject {
  constructor() {
    super(tuiAsyncLoadLanguage(inject(WA_LOCAL_STORAGE).getItem(inject(TUI_LANGUAGE_STORAGE_KEY)), inject(TUI_LANGUAGE_LOADER, {
      optional: true
    }), inject(TUI_DEFAULT_LANGUAGE)));
    this.fallback = inject(TUI_DEFAULT_LANGUAGE);
    this.key = inject(TUI_LANGUAGE_STORAGE_KEY);
    this.storage = inject(WA_LOCAL_STORAGE);
    this.loader = inject(TUI_LANGUAGE_LOADER, {
      optional: true
    });
  }
  get language() {
    return this.storage.getItem(this.key) || this.fallback.name;
  }
  setLanguage(language) {
    this.storage.setItem(this.key, language);
    this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
  }
  clear() {
    this.storage.removeItem(this.key);
    this.next(of(this.fallback));
  }
  static {
    this.ɵfac = function TuiLanguageSwitcherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLanguageSwitcherService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiLanguageSwitcherService,
      factory: _TuiLanguageSwitcherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLanguageSwitcherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-tokens.mjs
var TUI_REDUCED_MOTION = tuiCreateTokenFromFactory(() => inject(DOCUMENT).defaultView?.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
var TUI_ANIMATIONS_SPEED = tuiCreateTokenFromFactory(() => inject(TUI_REDUCED_MOTION) ? 0 : 1);
var TUI_ASSETS_PATH = tuiCreateToken("assets/taiga-ui/icons");
function tuiAssetsPathProvider(useValue) {
  return {
    provide: TUI_ASSETS_PATH,
    useValue
  };
}
var COMMON_ICONS = {
  check: "@tui.check",
  close: "@tui.x",
  error: "@tui.circle-alert",
  more: "@tui.chevron-right",
  search: "@tui.search",
  ellipsis: "@tui.ellipsis"
};
var TUI_COMMON_ICONS = tuiCreateToken(COMMON_ICONS);
function tuiCommonIconsProvider(icons) {
  return tuiProvideOptions(TUI_COMMON_ICONS, icons, COMMON_ICONS);
}
var TUI_DARK_MODE_DEFAULT_KEY = "tuiDark";
var TUI_DARK_MODE_KEY = tuiCreateToken(TUI_DARK_MODE_DEFAULT_KEY);
var TUI_DARK_MODE = tuiCreateTokenFromFactory(() => {
  let automatic = true;
  const storage = inject(WA_LOCAL_STORAGE);
  const key = inject(TUI_DARK_MODE_KEY);
  const saved = storage.getItem(key);
  const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
  const result = signal(Boolean((saved && JSON.parse(saved)) ?? media.matches));
  fromEvent(media, "change").pipe(filter(() => !storage.getItem(key)), takeUntilDestroyed()).subscribe(() => {
    automatic = true;
    result.set(media.matches);
  });
  effect(() => {
    const value = String(result());
    if (automatic) {
      automatic = false;
    } else {
      storage.setItem(key, value);
    }
  });
  return Object.assign(result, {
    reset: () => {
      storage.removeItem(key);
      automatic = true;
      result.set(media.matches);
    }
  });
});
var TUI_DEFAULT_DATE_FORMAT = {
  mode: "DMY",
  separator: "."
};
var TUI_DATE_FORMAT = tuiCreateToken(of(TUI_DEFAULT_DATE_FORMAT));
function tuiDateFormatProvider(options) {
  return {
    provide: TUI_DATE_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_DATE_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_DATE_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_DAY_TYPE_HANDLER = tuiCreateToken((day) => day.isWeekend ? "weekend" : "weekday");
var TUI_FIRST_DAY_OF_WEEK = tuiCreateToken(TuiDayOfWeek.Monday);
var TUI_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n("months"));
var TUI_CLOSE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("close"));
var TUI_CLEAR_WORD = tuiCreateTokenFromFactory(tuiExtractI18n("clear"));
var TUI_NOTHING_FOUND_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("nothingFoundMessage"));
var TUI_DEFAULT_ERROR_MESSAGE = tuiCreateTokenFromFactory(tuiExtractI18n("defaultErrorMessage"));
var TUI_SPIN_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n("spinTexts"));
var TUI_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(tuiExtractI18n("shortWeekDays"));
var TUI_ICON_START = tuiCreateToken("");
var TUI_ICON_END = tuiCreateToken("");
var TUI_ICON_REGISTRY = tuiCreateToken({});
var TUI_ICON_STARTS = TUI_ICON_REGISTRY;
function tuiIconsProvider(icons) {
  return {
    provide: TUI_ICON_REGISTRY,
    useFactory: () => __spreadValues(__spreadValues({}, inject(TUI_ICON_REGISTRY, {
      skipSelf: true,
      optional: true
    }) || {}), Object.fromEntries(Object.entries(icons).map(([key, value]) => [key, `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(value)}`])))
  };
}
var TUI_ICON_RESOLVER = tuiCreateTokenFromFactory(() => {
  const path = inject(TUI_ASSETS_PATH);
  return (icon) => `${path}/${icon.replace("@tui.", "").split(".").join("/")}.svg`;
});
var TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;
function tuiInjectIconResolver() {
  const icons = inject(TUI_ICON_REGISTRY);
  const resolver = inject(TUI_ICON_RESOLVER);
  return (icon) => !icon || icon.includes("/") ? icon : icons[icon] ?? resolver(icon);
}
function tuiIconResolverProvider(useValue) {
  return {
    provide: TUI_ICON_RESOLVER,
    useValue
  };
}
var TUI_MEDIA = tuiCreateToken({
  mobile: 768,
  desktopSmall: 1024,
  desktopLarge: 1280
});
var TUI_DEFAULT_NUMBER_FORMAT = {
  precision: NaN,
  decimalSeparator: ".",
  thousandSeparator: CHAR_NO_BREAK_SPACE,
  rounding: "truncate",
  decimalMode: "pad"
};
var TUI_NUMBER_FORMAT = tuiCreateToken(of(TUI_DEFAULT_NUMBER_FORMAT));
function tuiNumberFormatProvider(options) {
  return {
    provide: TUI_NUMBER_FORMAT,
    deps: [[new Optional(), new SkipSelf(), TUI_NUMBER_FORMAT]],
    useFactory: (parent) => (parent || of(TUI_DEFAULT_NUMBER_FORMAT)).pipe(map((format) => __spreadValues(__spreadValues({}, format), options)))
  };
}
var TUI_SCROLL_REF = tuiCreateTokenFromFactory(() => new ElementRef(inject(DOCUMENT).documentElement));
var TUI_SELECTION_STREAM = tuiCreateTokenFromFactory(() => {
  const doc = inject(DOCUMENT);
  return merge(tuiTypedFromEvent(doc, "selectionchange"), tuiTypedFromEvent(doc, "mouseup"), tuiTypedFromEvent(doc, "mousedown").pipe(switchMap(() => tuiTypedFromEvent(doc, "mousemove").pipe(takeUntil(tuiTypedFromEvent(doc, "mouseup"))))), tuiTypedFromEvent(doc, "keydown"), tuiTypedFromEvent(doc, "keyup")).pipe(share());
});
var TUI_SPIN_ICONS = tuiCreateToken({
  decrement: "@tui.chevron-left",
  increment: "@tui.chevron-right"
});
var TUI_THEME = tuiCreateToken("Taiga UI");
var TUI_VIEWPORT = tuiCreateTokenFromFactory(() => {
  const win = inject(WA_WINDOW);
  return {
    type: "viewport",
    getClientRect() {
      const rect2 = {
        top: 0,
        left: 0,
        right: win.innerWidth,
        bottom: win.innerHeight,
        width: win.innerWidth,
        height: win.innerHeight,
        x: 0,
        y: 0
      };
      return __spreadProps(__spreadValues({}, rect2), {
        toJSON: () => JSON.stringify(rect2)
      });
    }
  };
});
function tuiAsViewport(accessor) {
  return tuiProvide(TUI_VIEWPORT, accessor);
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-icon.mjs
var TuiIcon = class _TuiIcon {
  constructor() {
    this.resolver = tuiInjectIconResolver();
    this.backgroundSrc = signal(null);
    this.iconSrc = signal(this.resolve(inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || inject(TUI_ICON_END, {
      self: true,
      optional: true
    })));
  }
  set icon(icon) {
    this.iconSrc.set(this.resolve(icon));
  }
  set background(background) {
    this.backgroundSrc.set(this.resolve(background));
  }
  resolve(value) {
    return value ? `url(${this.resolver(value)})` : null;
  }
  static {
    this.ɵfac = function TuiIcon_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcon)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIcon,
      selectors: [["tui-icon"]],
      hostVars: 4,
      hostBindings: function TuiIcon_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon", ctx.iconSrc() || "url()")("--t-icon-bg", ctx.backgroundSrc());
        }
      },
      inputs: {
        icon: "icon",
        background: "background"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIcon_Template(rf, ctx) {
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;-webkit-mask-composite:source-in,xor;mask-composite:intersect;background:currentColor}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcon, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-icon",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-icon]": 'iconSrc() || "url()"',
        "[style.--t-icon-bg]": "backgroundSrc()"
      },
      styles: ['tui-icon{position:relative;display:inline-block;inline-size:1em;block-size:1em;font-size:1.5rem;flex-shrink:0;border:0 solid transparent;vertical-align:middle;box-sizing:border-box;-webkit-mask:var(--t-icon-bg) no-repeat center / contain;mask:var(--t-icon-bg) no-repeat center / contain}@media (hover: hover){tui-icon[data-appearance=icon]:hover{color:var(--tui-text-secondary)}}tui-icon:after,tui-icon[tuiIcons]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block;-webkit-mask:var(--t-icon) no-repeat center / contain;mask:var(--t-icon) no-repeat center / contain;-webkit-mask-composite:source-in,xor;mask-composite:intersect;background:currentColor}\n']
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    background: [{
      type: Input
    }]
  });
})();
var TuiIconPipe = class _TuiIconPipe {
  constructor() {
    this.transform = tuiInjectIconResolver();
  }
  static {
    this.ɵfac = function TuiIconPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiIcon",
      type: _TuiIconPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiIcon"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-appearance.mjs
var TUI_APPEARANCE_DEFAULT_OPTIONS = {
  appearance: ""
};
var TUI_APPEARANCE_OPTIONS = tuiCreateToken(TUI_APPEARANCE_DEFAULT_OPTIONS);
function tuiAppearanceOptionsProvider(token) {
  return tuiProvide(TUI_APPEARANCE_OPTIONS, token);
}
var TuiAppearanceStyles = class _TuiAppearanceStyles {
  static {
    this.ɵfac = function TuiAppearanceStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearanceStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppearanceStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-appearance"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiAppearanceStyles_Template(rf, ctx) {
      },
      styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearanceStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-appearance"
      },
      styles: ["[tuiAppearance]{transition-property:color,background,opacity,box-shadow,border;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;-webkit-appearance:none;appearance:none;outline:.125rem solid transparent;outline-offset:-.125rem}[tuiAppearance].tui-appearance-initializing{transition:none!important}[tuiAppearance]:focus-visible:not([data-focus=false]){outline-color:var(--tui-border-focus)}[tuiAppearance][data-focus=true]{outline-color:var(--tui-border-focus)}[tuiAppearance][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][tuiWrapper]._focused{outline-color:var(--tui-border-focus)}[tuiAppearance]:disabled:not([data-state]),[tuiAppearance][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiAppearance][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][tuiWrapper][data-state=disabled]{pointer-events:none;opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, null);
})();
var TuiAppearance = class _TuiAppearance {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiAppearanceStyles);
    this.modes = computed((mode = this.mode()) => !mode || tuiIsString(mode) ? mode : mode.join(" "));
    this.appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    this.state = signal(null);
    this.focus = signal(null);
    this.mode = signal(null);
    afterNextRender(() => {
      this.el.classList.toggle(
        "tui-appearance-initializing",
        // Triggering reflow so there's no transition
        // eslint-disable-next-line
        !!this.el.offsetWidth && false
      );
    });
  }
  set tuiAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiAppearanceState(state) {
    this.state.set(state);
  }
  set tuiAppearanceFocus(focus) {
    this.focus.set(focus);
  }
  set tuiAppearanceMode(mode) {
    this.mode.set(mode);
  }
  static {
    this.ɵfac = function TuiAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppearance,
      selectors: [["", "tuiAppearance", ""]],
      hostAttrs: ["tuiAppearance", "", 1, "tui-appearance-initializing"],
      hostVars: 4,
      hostBindings: function TuiAppearance_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-appearance", ctx.appearance())("data-state", ctx.state())("data-focus", ctx.focus())("data-mode", ctx.modes());
        }
      },
      inputs: {
        tuiAppearance: "tuiAppearance",
        tuiAppearanceState: "tuiAppearanceState",
        tuiAppearanceFocus: "tuiAppearanceFocus",
        tuiAppearanceMode: "tuiAppearanceMode"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAppearance]",
      host: {
        class: "tui-appearance-initializing",
        tuiAppearance: "",
        "[attr.data-appearance]": "appearance()",
        "[attr.data-state]": "state()",
        "[attr.data-focus]": "focus()",
        "[attr.data-mode]": "modes()"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiAppearance: [{
      type: Input
    }],
    tuiAppearanceState: [{
      type: Input
    }],
    tuiAppearanceFocus: [{
      type: Input
    }],
    tuiAppearanceMode: [{
      type: Input
    }]
  });
})();
function tuiAppearance(value) {
  return tuiDirectiveBinding(TuiAppearance, "appearance", value);
}
function tuiAppearanceState(value) {
  return tuiDirectiveBinding(TuiAppearance, "state", value);
}
function tuiAppearanceFocus(value) {
  return tuiDirectiveBinding(TuiAppearance, "focus", value);
}
function tuiAppearanceMode(value) {
  return tuiDirectiveBinding(TuiAppearance, "mode", value);
}
var TuiWithAppearance = class _TuiWithAppearance {
  static {
    this.ɵfac = function TuiWithAppearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithAppearance)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithAppearance,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearance", "appearance", "tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus", "tuiAppearanceMode", "tuiAppearanceMode"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithAppearance, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearance: appearance", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceMode"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-icons.mjs
var TuiIconsStyles = class _TuiIconsStyles {
  static {
    this.ɵfac = function TuiIconsStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIconsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-icons"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIconsStyles_Template(rf, ctx) {
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icons"
      },
      styles: ['[tuiIcons]{--t-icon-start: none;--t-icon-end: none}[tuiIcons]:before,[tuiIcons]:after{content:"";display:var(--t-icon-start);inline-size:1em;block-size:1em;line-height:1em;font-size:1.5rem;flex-shrink:0;background:currentColor;-webkit-mask:var(--t-icon-start) no-repeat center / contain;mask:var(--t-icon-start) no-repeat center / contain}[tuiIcons]:after{display:var(--t-icon-end);-webkit-mask:var(--t-icon-end) no-repeat center / contain;mask:var(--t-icon-end) no-repeat center / contain}\n']
    }]
  }], null, null);
})();
var TuiIcons = class _TuiIcons {
  constructor() {
    this.nothing = tuiWithStyles(TuiIconsStyles);
    this.resolver = tuiInjectIconResolver();
    this.iconStart = inject(TUI_ICON_START, {
      self: true,
      optional: true
    }) || "";
    this.iconEnd = inject(TUI_ICON_END, {
      self: true,
      optional: true
    }) || "";
  }
  static {
    this.ɵfac = function TuiIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIcons,
      hostAttrs: ["tuiIcons", ""],
      hostVars: 4,
      hostBindings: function TuiIcons_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-start", ctx.iconStart ? "url(" + ctx.resolver(ctx.iconStart) + ")" : null)("--t-icon-end", ctx.iconEnd ? "url(" + ctx.resolver(ctx.iconEnd) + ")" : null);
        }
      },
      inputs: {
        iconStart: "iconStart",
        iconEnd: "iconEnd"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        tuiIcons: "",
        "[style.--t-icon-start]": 'iconStart ? "url(" + resolver(iconStart) + ")" : null',
        "[style.--t-icon-end]": 'iconEnd ? "url(" + resolver(iconEnd) + ")" : null'
      }
    }]
  }], null, {
    iconStart: [{
      type: Input
    }],
    iconEnd: [{
      type: Input
    }]
  });
})();
var TuiWithIcons = class _TuiWithIcons {
  static {
    this.ɵfac = function TuiWithIcons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithIcons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithIcons,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiIcons,
        inputs: ["iconStart", "iconStart", "iconEnd", "iconEnd"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithIcons, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiIcons,
        inputs: ["iconStart", "iconEnd"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-button.mjs
var TUI_BUTTON_DEFAULT_OPTIONS = {
  appearance: "primary",
  size: "l"
};
var TUI_BUTTON_OPTIONS = tuiCreateToken(TUI_BUTTON_DEFAULT_OPTIONS);
function tuiButtonOptionsProvider(options) {
  return tuiProvideOptions(TUI_BUTTON_OPTIONS, options, TUI_BUTTON_DEFAULT_OPTIONS);
}
var TuiButtonStyles = class _TuiButtonStyles {
  static {
    this.ɵfac = function TuiButtonStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiButtonStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-button"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiButtonStyles_Template(rf, ctx) {
      },
      styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-line-height: 1rem;--t-margin: var(--t-0, 0rem) !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-button"
      },
      styles: ['[tuiButton],[tuiIconButton]{--t-size: var(--tui-height-l);--t-radius: var(--tui-radius-l);--t-gap: .25rem;--t-padding: 0 1.25rem;--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));block-size:var(--t-size);justify-content:center;border-radius:var(--t-radius);padding:var(--t-padding);-webkit-user-select:none;user-select:none;cursor:pointer;font:var(--tui-font-text-m);font-weight:700}[tuiButton]>img,[tuiIconButton]>img,[tuiButton]>tui-svg,[tuiIconButton]>tui-svg,[tuiButton]>tui-icon,[tuiIconButton]>tui-icon,[tuiButton]>tui-avatar,[tuiIconButton]>tui-avatar,[tuiButton]>tui-badge,[tuiIconButton]>tui-badge,[tuiButton]>[tuiBadge],[tuiIconButton]>[tuiBadge],[tuiButton]>[tuiRadio],[tuiIconButton]>[tuiRadio],[tuiButton]>[tuiSwitch],[tuiIconButton]>[tuiSwitch],[tuiButton]>[tuiCheckbox],[tuiIconButton]>[tuiCheckbox],[tuiButton][tuiIcons]:before,[tuiIconButton][tuiIcons]:before,[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{margin:var(--t-margin)}[tuiButton]>.t-loader,[tuiIconButton]>.t-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}[tuiButton]>.t-loader .t-text,[tuiIconButton]>.t-loader .t-text{position:absolute}[tuiButton][data-size=xs],[tuiIconButton][data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: var(--tui-radius-xs);--t-gap: .125rem;--t-padding: 0 .375rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=xs] tui-svg,[tuiIconButton][data-size=xs] tui-svg,[tuiButton][data-size=xs] tui-icon,[tuiIconButton][data-size=xs] tui-icon,[tuiButton][data-size=xs]:before,[tuiIconButton][data-size=xs]:before{font-size:1rem}[tuiButton][data-size=s],[tuiIconButton][data-size=s]{--t-size: var(--tui-height-s);--t-radius: var(--tui-radius-s);--t-gap: .125rem;--t-padding: 0 .625rem;--t-margin: -.125rem;font:var(--tui-font-text-s)}[tuiButton][data-size=s] tui-svg,[tuiIconButton][data-size=s] tui-svg,[tuiButton][data-size=s] tui-icon,[tuiIconButton][data-size=s] tui-icon,[tuiButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before,[tuiIconButton][data-size=s]:not([tuiIconButton][data-appearance=icon]):not([tuiIconButton][data-appearance=link]):before{font-size:1rem}[tuiButton][data-size=m],[tuiIconButton][data-size=m]{--t-size: var(--tui-height-m);--t-radius: var(--tui-radius-m);--t-gap: .125rem;--t-padding: 0 1rem;--t-margin: -.375rem;font:var(--tui-font-text-m);font-weight:700}[tuiButton][data-size=m]:after,[tuiIconButton][data-size=m]:after{margin-inline-end:-.125rem}[tuiButton]._loading,[tuiIconButton]._loading{--tui-disabled-opacity: 1;-webkit-text-fill-color:transparent}[tuiButton]._loading>*,[tuiIconButton]._loading>*,[tuiButton]._loading:before,[tuiIconButton]._loading:before,[tuiButton]._loading:after,[tuiIconButton]._loading:after{opacity:0}[tuiButton]._loading>.t-loader,[tuiIconButton]._loading>.t-loader{opacity:1}[tuiButton][tuiIcons]:after,[tuiIconButton][tuiIcons]:after{font-size:1rem}[tuiButton][tuiButtonVertical],[tuiIconButton][tuiButtonVertical]{--t-line-height: 1rem;--t-margin: var(--t-0, 0rem) !important;flex-direction:column;flex-shrink:1;block-size:auto;padding:.75rem;gap:.375rem;min-inline-size:5rem;white-space:pre-line;font:var(--tui-font-text-ui-s)}[tuiButton][tuiButtonVertical]>*,[tuiIconButton][tuiButtonVertical]>*{max-block-size:calc(var(--t-line-height) * 2)}[tuiIconButton]{gap:0;inline-size:var(--t-size);font-size:0!important;padding:0}[tuiIconButton][data-size=l]:after{margin:0}[tuiIconButton][tuiIconButton][style*="--t-icon-start:"]:after{display:none}\n']
    }]
  }], null, null);
})();
var TuiButton = class _TuiButton {
  constructor() {
    this.options = inject(TUI_BUTTON_OPTIONS);
    this.nothing = tuiWithStyles(TuiButtonStyles);
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButton,
      selectors: [["a", "tuiButton", ""], ["button", "tuiButton", ""], ["a", "tuiIconButton", ""], ["button", "tuiIconButton", ""]],
      hostVars: 1,
      hostBindings: function TuiButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButton, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]",
      providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-classes.mjs
var TuiAccessor = class {
};
var TuiPositionAccessor = class extends TuiAccessor {
};
var TuiRectAccessor = class extends TuiAccessor {
};
function tuiProvideAccessor(provide, type, fallback) {
  return {
    provide,
    deps: [[new SkipSelf(), new Optional(), provide], fallback],
    useFactory: tuiFallbackAccessor(type)
  };
}
function tuiFallbackAccessor(type) {
  return (accessors, fallback) => accessors?.find?.((accessor) => accessor !== fallback && accessor.type === type) || fallback;
}
function tuiPositionAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiPositionAccessor, type, fallback);
}
function tuiRectAccessorFor(type, fallback) {
  return tuiProvideAccessor(TuiRectAccessor, type, fallback);
}
function tuiAsPositionAccessor(accessor) {
  return tuiProvide(TuiPositionAccessor, accessor, true);
}
function tuiAsRectAccessor(accessor) {
  return tuiProvide(TuiRectAccessor, accessor, true);
}
var TuiVehicle = class {
};
function tuiAsVehicle(vehicle) {
  return tuiProvide(TuiVehicle, vehicle, true);
}
var TuiDriver = class extends Observable {
};
function tuiAsDriver(driver) {
  return tuiProvide(TuiDriver, driver, true);
}
var TuiDriverDirective = class _TuiDriverDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.drivers = inject(TuiDriver, {
      self: true,
      optional: true
    }) || [];
    this.vehicles = inject(TuiVehicle, {
      self: true,
      optional: true
    });
  }
  ngAfterViewInit() {
    const vehicle = this.vehicles?.find(({
      type
    }) => type === this.type);
    merge(...this.drivers.filter(({
      type
    }) => type === this.type)).pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      vehicle?.toggle(value);
    });
  }
  static {
    this.ɵfac = function TuiDriverDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDriverDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDriverDirective
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDriverDirective, [{
    type: Directive
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-dom.mjs
function tuiCheckFixedPosition(element) {
  return !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement));
}
function isFixed(element) {
  return element.ownerDocument.defaultView?.getComputedStyle(element).getPropertyValue("position") === "fixed";
}
function tuiGetViewportHeight({
  document,
  innerHeight
}) {
  return Math.max(document.documentElement.clientHeight || 0, innerHeight || 0);
}
function tuiGetViewportWidth({
  document,
  innerWidth
}) {
  return Math.max(document.documentElement.clientWidth || 0, innerWidth || 0);
}
function tuiGetWordRange(currentRange) {
  const range = currentRange.cloneRange();
  const {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  } = range;
  const {
    ownerDocument
  } = startContainer;
  if (!ownerDocument) {
    return range;
  }
  const treeWalker = ownerDocument.createTreeWalker(ownerDocument.body, NodeFilter.SHOW_TEXT, svgNodeFilter);
  treeWalker.currentNode = startContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === startContainer ? textContent.slice(0, Math.max(0, startOffset + 1)) : textContent;
    const offset = Math.max(content.lastIndexOf(" "), content.lastIndexOf(CHAR_NO_BREAK_SPACE), content.lastIndexOf(CHAR_ZERO_WIDTH_SPACE)) + 1;
    range.setStart(container, 0);
    if (offset) {
      range.setStart(container, offset);
      break;
    }
  } while (treeWalker.previousNode());
  treeWalker.currentNode = endContainer;
  do {
    const container = treeWalker.currentNode;
    const textContent = container.textContent || "";
    const content = container === endContainer ? textContent.slice(endOffset + 1) : textContent;
    const offset = [content.indexOf(" "), content.indexOf(CHAR_NO_BREAK_SPACE), content.indexOf(CHAR_ZERO_WIDTH_SPACE)].reduce((result, item) => result === -1 || item === -1 ? Math.max(result, item) : Math.min(result, item), -1);
    range.setEnd(container, textContent.length);
    if (offset !== -1) {
      range.setEnd(container, offset + textContent.length - content.length);
      break;
    }
  } while (treeWalker.nextNode());
  return range;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-utils-format.mjs
function tuiNumberToStringWithoutExp(value) {
  const valueAsString = String(value);
  const [numberPart, expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart = ""] = numberPart?.split(".") ?? [];
    const decimalDigits = Number(expPart) + (fractionalPart?.length || 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function tuiGetFractionPartPadded(value, precision) {
  const [, fractionPartPadded = ""] = tuiNumberToStringWithoutExp(value).split(".");
  return tuiIsNumber(precision) ? fractionPartPadded.slice(0, Math.max(0, precision)) : fractionPartPadded;
}
function tuiFormatNumber(value, settings = {}) {
  const {
    precision,
    decimalSeparator,
    thousandSeparator,
    decimalMode,
    rounding
  } = __spreadValues(__spreadProps(__spreadValues({}, TUI_DEFAULT_NUMBER_FORMAT), {
    decimalMode: "always",
    precision: Infinity
  }), settings);
  const rounded = Number.isFinite(precision) ? tuiRoundWith({
    value,
    precision,
    method: rounding
  }) : value;
  const integerPartString = String(Math.floor(Math.abs(rounded)));
  let fractionPartPadded = tuiGetFractionPartPadded(rounded, precision);
  const hasFraction = Number(fractionPartPadded) > 0;
  if (Number.isFinite(precision)) {
    if (decimalMode === "always" || hasFraction && decimalMode === "pad") {
      const zeroPaddingSize = Math.max(precision - fractionPartPadded.length, 0);
      const zeroPartString = "0".repeat(zeroPaddingSize);
      fractionPartPadded = `${fractionPartPadded}${zeroPartString}`;
    } else {
      fractionPartPadded = fractionPartPadded.replace(/0*$/, "");
    }
  }
  const remainder = integerPartString.length % 3;
  const sign = value < 0 ? CHAR_HYPHEN : "";
  let result = sign + integerPartString.charAt(0);
  for (let i = 1; i < integerPartString.length; i++) {
    if (i % 3 === remainder && integerPartString.length > 3) {
      result += thousandSeparator;
    }
    result += integerPartString.charAt(i);
  }
  return fractionPartPadded ? result + decimalSeparator + fractionPartPadded : result;
}
function tuiStringHashToHsl(value) {
  if (value === "") {
    return "";
  }
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
    hash &= hash;
  }
  const hue = hash % 360;
  const saturation = 60 + hash % 5;
  const lightness = 80 + hash % 5;
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-scrollbar.mjs
function TuiScrollControls_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_1_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-bar_has-horizontal", bars_r2[1]);
    ɵɵproperty("@tuiFadeIn", ctx_r2.options);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("mousedown.capture.prevent", function TuiScrollControls_ng_template_1_ng_container_0_div_2_Template_div_mousedown_capture_prevent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵelement(1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const bars_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("t-bar_has-vertical", bars_r2[0]);
    ɵɵproperty("@tuiFadeIn", ctx_r2.options);
  }
}
function TuiScrollControls_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiScrollControls_ng_template_1_ng_container_0_div_1_Template, 2, 3, "div", 3)(2, TuiScrollControls_ng_template_1_ng_container_0_div_2_Template, 2, 3, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const bars_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", bars_r2[1]);
  }
}
function TuiScrollControls_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiScrollControls_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r2.refresh$));
  }
}
var _c02 = ["*"];
function TuiScrollbar_tui_scroll_controls_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-scroll-controls", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("t-hover-mode", ctx_r0.options.mode === "hover");
  }
}
var TuiScrollbarService = class _TuiScrollbarService extends Observable {
  constructor() {
    super((subscriber) => this.scroll$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.element = inject(TUI_SCROLL_REF).nativeElement;
    this.scroll$ = merge(tuiTypedFromEvent(this.el.parentElement, "mousedown").pipe(filter(({
      target
    }) => target !== this.el), map((event) => this.getScrolled(event, 0.5, 0.5))), tuiTypedFromEvent(this.el, "mousedown").pipe(tuiZonefree(), switchMap((event) => {
      const {
        ownerDocument
      } = this.el;
      const rect2 = this.el.getBoundingClientRect();
      const vertical = getOffsetVertical(event, rect2);
      const horizontal = getOffsetHorizontal(event, rect2);
      return tuiTypedFromEvent(ownerDocument, "mousemove").pipe(map((event2) => this.getScrolled(event2, vertical, horizontal)), takeUntil(tuiTypedFromEvent(ownerDocument, "mouseup")));
    })));
  }
  getScrolled({
    clientY,
    clientX
  }, offsetY, offsetX) {
    const {
      offsetHeight,
      offsetWidth
    } = this.el;
    const {
      top,
      left,
      width,
      height
    } = this.el.parentElement.getBoundingClientRect();
    const maxTop = this.element.scrollHeight - height;
    const maxLeft = this.element.scrollWidth - width;
    const scrolledTop = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
    const scrolledLeft = (clientX - left - offsetWidth * offsetX) / (width - offsetWidth);
    return [maxTop * scrolledTop, maxLeft * scrolledLeft];
  }
  static {
    this.ɵfac = function TuiScrollbarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollbarService,
      factory: _TuiScrollbarService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function getOffsetVertical({
  clientY
}, {
  top,
  height
}) {
  return (clientY - top) / height;
}
function getOffsetHorizontal({
  clientX
}, {
  left,
  width
}) {
  return (clientX - left) / width;
}
var MIN_WIDTH = 24;
var TuiScrollbarDirective = class _TuiScrollbarDirective {
  constructor() {
    this.el = inject(TUI_SCROLL_REF).nativeElement;
    this.style = tuiInjectElement().style;
    this.scrollSub = inject(TuiScrollbarService).pipe(takeUntilDestroyed()).subscribe(([top, left]) => {
      this.el.style.scrollBehavior = "auto";
      if (this.tuiScrollbar === "horizontal") {
        this.el.scrollLeft = left;
      } else {
        this.el.scrollTop = top;
      }
      this.el.style.scrollBehavior = "";
    });
    this.styleSub = merge(inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())), tuiScrollFrom(this.el)).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const dimension = {
        scrollTop: this.el.scrollTop,
        scrollHeight: this.el.scrollHeight,
        clientHeight: this.el.clientHeight,
        scrollLeft: this.el.scrollLeft,
        scrollWidth: this.el.scrollWidth,
        clientWidth: this.el.clientWidth
      };
      const thumb = `${this.getThumb(dimension) * 100}%`;
      const view = `${this.getView(dimension) * 100}%`;
      if (this.tuiScrollbar === "vertical") {
        this.style.top = thumb;
        this.style.height = view;
      } else {
        this.style.left = thumb;
        this.style.width = view;
      }
    });
    this.tuiScrollbar = "vertical";
  }
  getScrolled(dimension) {
    return this.tuiScrollbar === "vertical" ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight) : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
  }
  getCompensation(dimension) {
    if (dimension.clientHeight * dimension.clientHeight / dimension.scrollHeight > MIN_WIDTH && this.tuiScrollbar === "vertical" || dimension.clientWidth * dimension.clientWidth / dimension.scrollWidth > MIN_WIDTH && this.tuiScrollbar === "horizontal") {
      return 0;
    }
    return this.tuiScrollbar === "vertical" ? MIN_WIDTH / dimension.clientHeight : MIN_WIDTH / dimension.clientWidth;
  }
  getThumb(dimension) {
    const compensation = this.getCompensation(dimension) || this.getView(dimension);
    return this.getScrolled(dimension) * (1 - compensation);
  }
  getView(dimension) {
    return this.tuiScrollbar === "vertical" ? Math.ceil(dimension.clientHeight / dimension.scrollHeight * 100) / 100 : Math.ceil(dimension.clientWidth / dimension.scrollWidth * 100) / 100;
  }
  static {
    this.ɵfac = function TuiScrollbarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollbarDirective,
      selectors: [["", "tuiScrollbar", ""]],
      inputs: {
        tuiScrollbar: "tuiScrollbar"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiScrollbarService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollbar]",
      providers: [TuiScrollbarService]
    }]
  }], null, {
    tuiScrollbar: [{
      type: Input
    }]
  });
})();
var TUI_DEFAULT_SCROLLBAR_OPTIONS = {
  mode: "always"
};
var [TUI_SCROLLBAR_OPTIONS, tuiScrollbarOptionsProvider] = tuiCreateOptions(TUI_DEFAULT_SCROLLBAR_OPTIONS);
var TuiScrollControls = class _TuiScrollControls {
  constructor() {
    this.scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    this.nativeScrollbar = inject(TUI_SCROLLBAR_OPTIONS).mode === "native";
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.refresh$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(300, tuiZonefreeScheduler()), map(() => this.scrollbars), startWith([false, false]), distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]), tuiZoneOptimized());
  }
  get scrollbars() {
    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth
    } = this.scrollRef;
    return [Math.ceil(clientHeight / scrollHeight * 100) < 100, Math.ceil(clientWidth / scrollWidth * 100) < 100];
  }
  static {
    this.ɵfac = function TuiScrollControls_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollControls)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollControls,
      selectors: [["tui-scroll-controls"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["custom", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "t-bar t-bar_vertical", 3, "t-bar_has-horizontal", "mousedown.capture.prevent", 4, "ngIf"], ["class", "t-bar t-bar_horizontal", 3, "t-bar_has-vertical", "mousedown.capture.prevent", 4, "ngIf"], [1, "t-bar", "t-bar_vertical", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "vertical", 1, "t-thumb"], [1, "t-bar", "t-bar_horizontal", 3, "mousedown.capture.prevent"], ["tuiScrollbar", "horizontal", 1, "t-thumb"]],
      template: function TuiScrollControls_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiScrollControls_ng_container_0_Template, 1, 0, "ng-container", 1)(1, TuiScrollControls_ng_template_1_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const custom_r5 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.nativeScrollbar)("ngIfElse", custom_r5);
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiScrollbarDirective],
      styles: ["[_nghost-%COMP%]{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar[_ngcontent-%COMP%]{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical[_ngcontent-%COMP%]{top:0;inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]{left:0;block-size:.875rem}.t-bar_has-horizontal[_ngcontent-%COMP%]{bottom:.5rem}.t-bar_has-vertical[_ngcontent-%COMP%]{right:.5rem}.t-thumb[_ngcontent-%COMP%]{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb[_ngcontent-%COMP%]:hover{opacity:.24}.t-thumb[_ngcontent-%COMP%]:active{opacity:.48}.t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_vertical[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{inline-size:.875rem}.t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal[_ngcontent-%COMP%]:hover   .t-thumb[_ngcontent-%COMP%], .t-bar_horizontal[_ngcontent-%COMP%]   .t-thumb[_ngcontent-%COMP%]:active{block-size:.875rem}"],
      data: {
        animation: [tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollControls, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scroll-controls",
      imports: [AsyncPipe, NgIf, TuiScrollbarDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn],
      template: '<ng-container *ngIf="nativeScrollbar; else custom" />\n<ng-template #custom>\n    <ng-container *ngIf="refresh$ | async as bars">\n        <div\n            *ngIf="bars[0]"\n            class="t-bar t-bar_vertical"\n            [@tuiFadeIn]="options"\n            [class.t-bar_has-horizontal]="bars[1]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="vertical"\n                class="t-thumb"\n            ></div>\n        </div>\n        <div\n            *ngIf="bars[1]"\n            class="t-bar t-bar_horizontal"\n            [@tuiFadeIn]="options"\n            [class.t-bar_has-vertical]="bars[0]"\n            (mousedown.capture.prevent)="(0)"\n        >\n            <div\n                tuiScrollbar="horizontal"\n                class="t-thumb"\n            ></div>\n        </div>\n    </ng-container>\n</ng-template>\n',
      styles: [":host{position:sticky;top:0;left:0;z-index:1;min-inline-size:calc(100% - 1px);min-block-size:calc(100% - 1px);max-inline-size:calc(100% - 1px);max-block-size:calc(100% - 1px);float:inline-start;margin-inline-end:calc(-100% + 1px);pointer-events:none}.t-bar{position:absolute;right:0;bottom:0;pointer-events:auto}.t-bar_vertical{top:0;inline-size:.875rem}.t-bar_horizontal{left:0;block-size:.875rem}.t-bar_has-horizontal{bottom:.5rem}.t-bar_has-vertical{right:.5rem}.t-thumb{transition-property:all;transition-duration:.15s;transition-timing-function:ease-in-out;position:absolute;border-radius:6.25rem;border:.25rem solid transparent;cursor:pointer;pointer-events:auto;-webkit-user-select:none;user-select:none;background:currentColor;background-clip:content-box;box-sizing:border-box;transition-property:width,height,opacity;opacity:.2}.t-thumb:hover{opacity:.24}.t-thumb:active{opacity:.48}.t-bar_vertical .t-thumb{right:0;inline-size:.75rem;min-block-size:1.25rem}.t-bar_vertical:hover .t-thumb,.t-bar_vertical .t-thumb:active{inline-size:.875rem}.t-bar_horizontal .t-thumb{bottom:0;block-size:.75rem;min-inline-size:1.25rem}.t-bar_horizontal:hover .t-thumb,.t-bar_horizontal .t-thumb:active{block-size:.875rem}\n"]
    }]
  }], null, null);
})();
var TUI_SCROLL_INTO_VIEW = "tui-scroll-into-view";
var TUI_SCROLLABLE = "tui-scrollable";
var TuiScrollbar = class _TuiScrollbar {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_SCROLLBAR_OPTIONS);
    this.isIOS = inject(TUI_IS_IOS);
    this.browserScrollRef = new ElementRef(this.el);
    this.hidden = this.options.mode === "hidden";
  }
  get delegated() {
    return this.scrollRef !== this.el || this.options.mode === "native";
  }
  get scrollRef() {
    return this.browserScrollRef.nativeElement;
  }
  set scrollRef(element) {
    this.browserScrollRef.nativeElement = element;
  }
  scrollIntoView(detail) {
    if (this.delegated) {
      return;
    }
    const {
      offsetHeight,
      offsetWidth
    } = detail;
    const {
      offsetTop,
      offsetLeft
    } = tuiGetElementOffset(this.scrollRef, detail);
    const scrollTop = offsetTop + offsetHeight / 2 - this.scrollRef.clientHeight / 2;
    const scrollLeft = offsetLeft + offsetWidth / 2 - this.scrollRef.clientWidth / 2;
    this.scrollRef.scrollTo?.(scrollLeft, scrollTop);
  }
  static {
    this.ɵfac = function TuiScrollbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiScrollbar,
      selectors: [["tui-scrollbar"]],
      hostVars: 2,
      hostBindings: function TuiScrollbar_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-scrollable.stop", function TuiScrollbar_tui_scrollable_stop_HostBindingHandler($event) {
            return ctx.scrollRef = $event.detail;
          })("tui-scroll-into-view.stop", function TuiScrollbar_tui_scroll_into_view_stop_HostBindingHandler($event) {
            return ctx.scrollIntoView($event.detail);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_native-hidden", ctx.options.mode !== "native" && (!ctx.isIOS || ctx.hidden));
        }
      },
      inputs: {
        hidden: "hidden"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(_TuiScrollbar).browserScrollRef
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c02,
      decls: 3,
      vars: 3,
      consts: [["class", "t-bars", 3, "t-hover-mode", 4, "ngIf"], [1, "t-content"], [1, "t-bars"]],
      template: function TuiScrollbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiScrollbar_tui_scroll_controls_0_Template, 1, 2, "tui-scroll-controls", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.hidden && !ctx.isIOS && ctx.options.mode !== "native");
          ɵɵadvance();
          ɵɵclassProp("t-content_delegated", ctx.delegated);
        }
      },
      dependencies: [NgIf, TuiScrollControls],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;isolation:isolate;overflow:auto}._native-hidden[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none}._native-hidden[_nghost-%COMP%]::-webkit-scrollbar, ._native-hidden[_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]   .t-hover-mode[_ngcontent-%COMP%]:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[_nghost-%COMP%]:hover   .t-hover-mode[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content[_ngcontent-%COMP%]{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated[_ngcontent-%COMP%]{block-size:100%}.t-bars[_ngcontent-%COMP%]{color:var(--tui-text-primary)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollbar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-scrollbar",
      imports: [NgIf, TuiScrollControls],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_SCROLL_REF,
        useFactory: () => inject(TuiScrollbar).browserScrollRef
      }],
      host: {
        "[class._native-hidden]": 'options.mode !== "native" && (!isIOS || hidden)',
        [`(${TUI_SCROLLABLE}.stop)`]: "scrollRef = $event.detail",
        [`(${TUI_SCROLL_INTO_VIEW}.stop)`]: "scrollIntoView($event.detail)"
      },
      template: `<tui-scroll-controls
    *ngIf="!hidden && !isIOS && options.mode !== 'native'"
    class="t-bars"
    [class.t-hover-mode]="options.mode === 'hover'"
/>
<div
    class="t-content"
    [class.t-content_delegated]="delegated"
>
    <ng-content />
</div>
`,
      styles: [":host{position:relative;display:flex;isolation:isolate;overflow:auto}:host._native-hidden{scrollbar-width:none;-ms-overflow-style:none}:host._native-hidden::-webkit-scrollbar,:host._native-hidden::-webkit-scrollbar-thumb{display:none}:host .t-hover-mode:not(:active){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}:host:hover .t-hover-mode{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:1}.t-content{isolation:isolate;flex:1;flex-basis:auto;inline-size:100%;block-size:-webkit-max-content;block-size:max-content}.t-content_delegated{block-size:100%}.t-bars{color:var(--tui-text-primary)}\n"]
    }]
  }], null, {
    hidden: [{
      type: Input
    }]
  });
})();
var TuiScrollIntoView = class _TuiScrollIntoView {
  constructor() {
    this.el = tuiInjectElement();
    this.destroyRef = inject(DestroyRef);
  }
  set tuiScrollIntoView(scroll) {
    if (!scroll) {
      return;
    }
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.el.dispatchEvent(new CustomEvent(TUI_SCROLL_INTO_VIEW, {
        bubbles: true,
        detail: this.el
      }));
    });
  }
  static {
    this.ɵfac = function TuiScrollIntoView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollIntoView)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollIntoView,
      selectors: [["", "tuiScrollIntoView", ""]],
      inputs: {
        tuiScrollIntoView: "tuiScrollIntoView"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollIntoView, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollIntoView]"
    }]
  }], null, {
    tuiScrollIntoView: [{
      type: Input
    }]
  });
})();
var SCROLL_REF_SELECTOR = "[tuiScrollRef]";
var TuiScrollRef = class _TuiScrollRef {
  static {
    this.ɵfac = function TuiScrollRef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollRef)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollRef,
      selectors: [["", "tuiScrollRef", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_SCROLL_REF, ElementRef)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollRef, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: SCROLL_REF_SELECTOR,
      providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)]
    }]
  }], null, null);
})();
var TuiScrollable = class _TuiScrollable {
  constructor() {
    this.el = tuiInjectElement();
  }
  ngOnInit() {
    this.el.dispatchEvent(new CustomEvent(TUI_SCROLLABLE, {
      bubbles: true,
      detail: this.el
    }));
  }
  static {
    this.ɵfac = function TuiScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollable)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiScrollable,
      selectors: [["", "tuiScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollable, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiScrollable]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-services.mjs
var TuiBreakpointService = class _TuiBreakpointService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.media = inject(TUI_MEDIA);
    this.sorted = Object.values(this.media).sort((a, b) => a - b);
    this.invert = Object.keys(this.media).reduce((ret, key) => __spreadProps(__spreadValues({}, ret), {
      [this.media[key]]: key
    }), {});
    this.stream$ = inject(TUI_WINDOW_SIZE).pipe(map(({
      width
    }) => this.sorted.find((size) => size > width)), map((key) => this.invert[key || this.sorted[this.sorted.length - 1] || 0]), distinctUntilChanged(), tuiZoneOptimized(), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  static {
    this.ɵfac = function TuiBreakpointService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreakpointService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiBreakpointService,
      factory: _TuiBreakpointService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreakpointService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDarkThemeService = class _TuiDarkThemeService extends Observable {
  constructor() {
    const media = inject(WA_WINDOW).matchMedia("(prefers-color-scheme: dark)");
    const media$ = fromEvent(media, "change").pipe(startWith(null), map(() => media.matches), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
    super((subscriber) => media$.subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiDarkThemeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDarkThemeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDarkThemeService,
      factory: _TuiDarkThemeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDarkThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiFormatDateService = class _TuiFormatDateService {
  constructor() {
    this.locale = inject(LOCALE_ID);
  }
  format(timestamp) {
    return of(new Date(timestamp).toLocaleTimeString(this.locale, {
      hour: "numeric",
      minute: "2-digit"
    }));
  }
  static {
    this.ɵfac = function TuiFormatDateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatDateService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiFormatDateService,
      factory: _TuiFormatDateService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TuiPositionService = class _TuiPositionService extends Observable {
  constructor() {
    const animationFrame$ = inject(WA_ANIMATION_FRAME);
    const zone = inject(NgZone);
    super((subscriber) => animationFrame$.pipe(startWith(null), map(() => this.accessor.getPosition(this.el.getBoundingClientRect(), this.el)), tuiZonefree(zone), finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT))).subscribe(subscriber));
    this.el = tuiInjectElement();
    this.accessor = inject(TuiPositionAccessor);
  }
  static {
    this.ɵfac = function TuiPositionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPositionService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPositionService,
      factory: _TuiPositionService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPositionService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiVisualViewportService = class _TuiVisualViewportService {
  constructor() {
    this.isWebkit = inject(TUI_IS_WEBKIT);
    this.win = inject(WA_WINDOW);
  }
  // https://bugs.webkit.org/show_bug.cgi?id=207089
  correct(point) {
    return this.isWebkit ? [point[0] + (this.win.visualViewport?.offsetTop ?? 0), point[1] + (this.win.visualViewport?.offsetLeft ?? 0)] : point;
  }
  static {
    this.ɵfac = function TuiVisualViewportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiVisualViewportService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiVisualViewportService,
      factory: _TuiVisualViewportService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiVisualViewportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-active-zone.mjs
var TuiActiveZone = class _TuiActiveZone {
  constructor() {
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.active$ = inject(TUI_ACTIVE_ELEMENT);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiActiveZoneParent = null;
    this.subActiveZones = [];
    this.directParentActiveZone = inject(_TuiActiveZone, {
      skipSelf: true,
      optional: true
    });
    this.tuiActiveZoneChange = this.active$.pipe(map((element) => !!element && this.contains(element)), startWith(false), distinctUntilChanged(), skip(1), tap((active) => {
      if (!active && typeof this.control?.valueAccessor.onTouched === "function") {
        this.control.valueAccessor.onTouched();
      }
    }), tuiZoneOptimized(this.zone));
    this.directParentActiveZone?.addSubActiveZone(this);
  }
  set tuiActiveZoneParentSetter(zone) {
    this.setZone(zone);
  }
  ngOnDestroy() {
    this.directParentActiveZone?.removeSubActiveZone(this);
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
  }
  contains(node) {
    return this.el.contains(node) || this.subActiveZones.some((item, index, array) => array.indexOf(item) === index && item.contains(node));
  }
  setZone(zone) {
    this.tuiActiveZoneParent?.removeSubActiveZone(this);
    zone?.addSubActiveZone(this);
    this.tuiActiveZoneParent = zone;
  }
  addSubActiveZone(activeZone) {
    this.subActiveZones = [...this.subActiveZones, activeZone];
  }
  removeSubActiveZone(activeZone) {
    this.subActiveZones = tuiArrayRemove(this.subActiveZones, this.subActiveZones.indexOf(activeZone));
  }
  static {
    this.ɵfac = function TuiActiveZone_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActiveZone)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActiveZone,
      selectors: [["", "tuiActiveZone", "", 5, "ng-container"], ["", "tuiActiveZoneChange", "", 5, "ng-container"], ["", "tuiActiveZoneParent", "", 5, "ng-container"]],
      hostBindings: function TuiActiveZone_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.silent", function TuiActiveZone_mousedown_silent_HostBindingHandler() {
            return 0;
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        tuiActiveZoneParentSetter: [0, "tuiActiveZoneParent", "tuiActiveZoneParentSetter"]
      },
      outputs: {
        tuiActiveZoneChange: "tuiActiveZoneChange"
      },
      exportAs: ["tuiActiveZone"],
      standalone: true
    });
  }
};
__decorate([tuiPure], TuiActiveZone.prototype, "setZone", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActiveZone, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiActiveZone]:not(ng-container), [tuiActiveZoneChange]:not(ng-container), [tuiActiveZoneParent]:not(ng-container)",
      exportAs: "tuiActiveZone",
      host: {
        "(document:mousedown.silent)": "(0)"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiActiveZoneChange: [{
      type: Output
    }],
    tuiActiveZoneParentSetter: [{
      type: Input,
      args: ["tuiActiveZoneParent"]
    }],
    setZone: []
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-classes.mjs
var _c03 = ["viewContainer"];
var TuiValueTransformer = class {
};
var FLAGS = {
  self: true,
  optional: true
};
var TuiControl = class _TuiControl {
  constructor() {
    this.fallback = inject(TUI_FALLBACK_VALUE, FLAGS);
    this.refresh$ = new Subject();
    this.pseudoInvalid = signal(null);
    this.internal = signal(this.fallback);
    this.control = inject(NgControl, {
      self: true
    });
    this.cdr = inject(ChangeDetectorRef);
    this.transformer = inject(TuiValueTransformer, FLAGS);
    this.value = computed(() => this.internal() ?? this.fallback);
    this.readOnly = signal(false);
    this.touched = signal(false);
    this.status = signal(void 0);
    this.disabled = computed(() => this.status() === "DISABLED");
    this.interactive = computed(() => !this.disabled() && !this.readOnly());
    this.invalid = computed(() => this.pseudoInvalid() !== null ? !!this.pseudoInvalid() && this.interactive() : this.interactive() && this.touched() && this.status() === "INVALID");
    this.mode = computed(() => (
      // eslint-disable-next-line no-nested-ternary
      this.readOnly() ? "readonly" : this.invalid() ? "invalid" : "valid"
    ));
    this.onTouched = EMPTY_FUNCTION;
    this.onChange = EMPTY_FUNCTION;
    this.control.valueAccessor = this;
    this.refresh$.pipe(delay(0), startWith(null), map(() => this.control.control), filter(Boolean), distinctUntilChanged(), switchMap((c) => merge(c.valueChanges, c.statusChanges, c.events || EMPTY).pipe(startWith(null))), takeUntilDestroyed()).subscribe(() => this.update());
  }
  set readOnlySetter(readOnly) {
    this.readOnly.set(readOnly);
  }
  set invalidSetter(invalid) {
    this.pseudoInvalid.set(invalid);
  }
  registerOnChange(onChange) {
    this.refresh$.next();
    this.onChange = (value) => {
      if (value === this.internal()) {
        return;
      }
      onChange(this.toControlValue(value));
      this.internal.set(value);
      this.update();
    };
  }
  registerOnTouched(onTouched) {
    this.onTouched = () => {
      onTouched();
      this.update();
    };
  }
  setDisabledState() {
    this.update();
  }
  writeValue(value) {
    const safe = this.control instanceof NgModel ? this.control.model : value;
    this.internal.set(this.fromControlValue(safe));
    this.update();
  }
  fromControlValue(value) {
    return this.transformer ? this.transformer.fromControlValue(value) : value;
  }
  toControlValue(value) {
    return this.transformer ? this.transformer.toControlValue(value) : value;
  }
  update() {
    this.status.set(this.control.control?.status);
    this.touched.set(!!this.control.control?.touched);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiControl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiControl)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiControl,
      inputs: {
        readOnlySetter: [0, "readOnly", "readOnlySetter"],
        invalidSetter: [0, "invalid", "invalidSetter"]
      }
    });
  }
};
__decorate([tuiPure], TuiControl.prototype, "fromControlValue", null);
__decorate([tuiPure], TuiControl.prototype, "toControlValue", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiControl, [{
    type: Directive
  }], function() {
    return [];
  }, {
    readOnlySetter: [{
      type: Input,
      args: ["readOnly"]
    }],
    invalidSetter: [{
      type: Input,
      args: ["invalid"]
    }],
    fromControlValue: [],
    toControlValue: []
  });
})();
function tuiAsControl(control) {
  return tuiProvide(TuiControl, control);
}
var TuiPortals = class _TuiPortals {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.nothing = inject(TuiPortalService).attach(this);
  }
  addComponentChild(component) {
    const injector = component.createInjector(this.injector);
    const ref = this.vcr.createComponent(component.component, {
      injector
    });
    ref.changeDetectorRef.detectChanges();
    return ref;
  }
  addTemplateChild(templateRef, context) {
    return this.vcr.createEmbeddedView(templateRef, context);
  }
  static {
    this.ɵfac = function TuiPortals_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortals)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPortals,
      viewQuery: function TuiPortals_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c03, 5, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortals, [{
    type: Directive
  }], null, {
    vcr: [{
      type: ViewChild,
      args: ["viewContainer", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var TuiPortalService = class _TuiPortalService {
  attach(host) {
    this.host = host;
  }
  add(component) {
    return this.safeHost.addComponentChild(component);
  }
  remove({
    hostView
  }) {
    if (!hostView.destroyed) {
      hostView.destroy();
    }
  }
  addTemplate(templateRef, context) {
    return this.safeHost.addTemplateChild(templateRef, context);
  }
  removeTemplate(viewRef) {
    if (!viewRef.destroyed) {
      viewRef.destroy();
    }
  }
  get safeHost() {
    if (!this.host) {
      throw new TuiNoHostException();
    }
    return this.host;
  }
  static {
    this.ɵfac = function TuiPortalService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPortalService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPortalService,
      factory: _TuiPortalService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPortalService, [{
    type: Injectable
  }], null, null);
})();
function tuiAsPortal(portal) {
  return tuiProvide(TuiPortalService, portal);
}
var TuiNoHostException = class extends Error {
  constructor() {
    super(ngDevMode ? "Portals cannot be used without TuiPortalHostComponent" : "");
  }
};
var TuiValidationError = class {
  constructor(message, context = {}) {
    this.message = message;
    this.context = context;
  }
};

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-obscured.mjs
var TuiObscuredService = class _TuiObscuredService extends Observable {
  constructor() {
    super((subscriber) => this.obscured$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.obscured$ = inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler()), map(() => tuiGetElementObscures(this.el)), startWith(null), distinctUntilChanged(), tuiZoneOptimized());
  }
  static {
    this.ɵfac = function TuiObscuredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscuredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiObscuredService,
      factory: _TuiObscuredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscuredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiObscured = class _TuiObscured {
  constructor() {
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.enabled$ = new Subject();
    this.obscured$ = inject(TuiObscuredService, {
      self: true
    }).pipe(map((by) => !!by?.every((el) => !this.activeZone?.contains(el))));
    this.tuiObscured = this.enabled$.pipe(tuiIfMap(() => this.obscured$));
  }
  set tuiObscuredEnabled(enabled) {
    this.enabled$.next(enabled);
  }
  static {
    this.ɵfac = function TuiObscured_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiObscured)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiObscured,
      selectors: [["", "tuiObscured", ""]],
      inputs: {
        tuiObscuredEnabled: "tuiObscuredEnabled"
      },
      outputs: {
        tuiObscured: "tuiObscured"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiObscuredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiObscured, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiObscured]",
      providers: [TuiObscuredService]
    }]
  }], null, {
    tuiObscured: [{
      type: Output
    }],
    tuiObscuredEnabled: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-dropdown.mjs
var _c04 = (a0) => ({
  $implicit: a0
});
function TuiDropdownComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var _c1 = ["tuiDropdownHost"];
var TuiDropdownDriver = class _TuiDropdownDriver extends BehaviorSubject {
  constructor() {
    super(false);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = function TuiDropdownDriver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDriver)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownDriver,
      factory: _TuiDropdownDriver.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriver, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiDropdownDriverDirective = class _TuiDropdownDriverDirective extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "dropdown";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownDriverDirective_BaseFactory;
      return function TuiDropdownDriverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownDriverDirective_BaseFactory || (ɵTuiDropdownDriverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownDriverDirective)))(__ngFactoryType__ || _TuiDropdownDriverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDriverDirective,
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDriverDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_DROPDOWN_COMPONENT = tuiCreateTokenFromFactory(() => TuiDropdownComponent);
var TUI_DROPDOWN_CONTEXT = tuiCreateToken();
var TuiDropdownService = class _TuiDropdownService extends TuiPortalService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownService_BaseFactory;
      return function TuiDropdownService_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownService_BaseFactory || (ɵTuiDropdownService_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownService)))(__ngFactoryType__ || _TuiDropdownService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDropdownService,
      factory: _TuiDropdownService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_DROPDOWN_DEFAULT_OPTIONS = {
  align: "left",
  direction: null,
  limitWidth: "auto",
  maxHeight: 400,
  minHeight: 80,
  offset: 4,
  appearance: ""
};
var TUI_DROPDOWN_OPTIONS = tuiCreateToken(TUI_DROPDOWN_DEFAULT_OPTIONS);
var tuiDropdownOptionsProvider = (override) => ({
  provide: TUI_DROPDOWN_OPTIONS,
  deps: [[new Optional(), new Self(), TuiDropdownOptionsDirective], [new Optional(), new SkipSelf(), TUI_DROPDOWN_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_DROPDOWN_DEFAULT_OPTIONS)
});
var TuiDropdownOptionsDirective = class _TuiDropdownOptionsDirective {
  constructor() {
    this.options = inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    });
    this.align = this.options.align;
    this.appearance = this.options.appearance;
    this.direction = this.options.direction;
    this.limitWidth = this.options.limitWidth;
    this.minHeight = this.options.minHeight;
    this.maxHeight = this.options.maxHeight;
    this.offset = this.options.offset;
  }
  static {
    this.ɵfac = function TuiDropdownOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOptionsDirective,
      selectors: [["", "tuiDropdownAlign", ""], ["", "tuiDropdownAppearance", ""], ["", "tuiDropdownDirection", ""], ["", "tuiDropdownLimitWidth", ""], ["", "tuiDropdownMinHeight", ""], ["", "tuiDropdownMaxHeight", ""], ["", "tuiDropdownOffset", ""]],
      inputs: {
        align: [0, "tuiDropdownAlign", "align"],
        appearance: [0, "tuiDropdownAppearance", "appearance"],
        direction: [0, "tuiDropdownDirection", "direction"],
        limitWidth: [0, "tuiDropdownLimitWidth", "limitWidth"],
        minHeight: [0, "tuiDropdownMinHeight", "minHeight"],
        maxHeight: [0, "tuiDropdownMaxHeight", "maxHeight"],
        offset: [0, "tuiDropdownOffset", "offset"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DROPDOWN_OPTIONS, _TuiDropdownOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownAlign], [tuiDropdownAppearance], [tuiDropdownDirection], [tuiDropdownLimitWidth], [tuiDropdownMinHeight], [tuiDropdownMaxHeight], [tuiDropdownOffset]",
      providers: [tuiProvide(TUI_DROPDOWN_OPTIONS, TuiDropdownOptionsDirective)]
    }]
  }], null, {
    align: [{
      type: Input,
      args: ["tuiDropdownAlign"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiDropdownAppearance"]
    }],
    direction: [{
      type: Input,
      args: ["tuiDropdownDirection"]
    }],
    limitWidth: [{
      type: Input,
      args: ["tuiDropdownLimitWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["tuiDropdownMinHeight"]
    }],
    maxHeight: [{
      type: Input,
      args: ["tuiDropdownMaxHeight"]
    }],
    offset: [{
      type: Input,
      args: ["tuiDropdownOffset"]
    }]
  });
})();
var TuiDropdownPosition = class _TuiDropdownPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.type = "dropdown";
    this.accessor = tuiFallbackAccessor("dropdown")(inject(TuiRectAccessor), inject(TuiDropdownDirective, {
      optional: true
    }));
  }
  getPosition({
    width,
    height
  }) {
    if (!width && !height) {
      this.previous = void 0;
    }
    const hostRect = this.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewportRect = this.viewport.getClientRect();
    const {
      minHeight,
      align,
      direction,
      offset,
      limitWidth
    } = this.options;
    const viewport = {
      top: viewportRect.top - offset,
      bottom: viewportRect.bottom + offset,
      right: viewportRect.right - offset,
      left: viewportRect.left + offset
    };
    const previous = this.previous || direction || "bottom";
    const available = {
      top: hostRect.top - 2 * offset - viewport.top,
      bottom: viewport.bottom - hostRect.bottom - 2 * offset
    };
    const rectWidth = limitWidth === "fixed" ? hostRect.width : width;
    const right = Math.max(hostRect.right - rectWidth, offset);
    const left = hostRect.left + width < viewport.right ? hostRect.left : right;
    const position = {
      top: hostRect.top - offset - height,
      bottom: hostRect.bottom + offset,
      right: Math.max(viewport.left, right),
      center: hostRect.left + hostRect.width / 2 + width / 2 < viewport.right ? hostRect.left + hostRect.width / 2 - width / 2 : right,
      left: Math.max(viewport.left, left)
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    if (available[previous] > minHeight && direction || available[previous] > height) {
      return [position[previous], position[align]];
    }
    this.previous = better;
    return [position[better], position[align]];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPosition_BaseFactory;
      return function TuiDropdownPosition_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPosition_BaseFactory || (ɵTuiDropdownPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPosition)))(__ngFactoryType__ || _TuiDropdownPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPosition,
      selectors: [["", "tuiDropdownPosition", ""]],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPosition, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownPosition]"
    }]
  }], null, null);
})();
var TuiDropdownDirective = class _TuiDropdownDirective {
  constructor() {
    this.refresh$ = new Subject();
    this.service = inject(TuiDropdownService);
    this.cdr = inject(ChangeDetectorRef);
    this.sub = this.refresh$.pipe(throttleTime(0, tuiZonefreeScheduler()), takeUntilDestroyed()).subscribe(() => {
      this.ref()?.changeDetectorRef.detectChanges();
      this.ref()?.changeDetectorRef.markForCheck();
    });
    this.el = tuiInjectElement();
    this.type = "dropdown";
    this.component = new PolymorpheusComponent(inject(TUI_DROPDOWN_COMPONENT), inject(INJECTOR$1));
    this.ref = signal(null);
  }
  set tuiDropdown(content) {
    this.content = content instanceof TemplateRef ? new PolymorpheusTemplate(content, this.cdr) : content;
  }
  get position() {
    return tuiCheckFixedPosition(this.el) ? "fixed" : "absolute";
  }
  ngAfterViewChecked() {
    this.refresh$.next();
  }
  ngOnChanges() {
    if (!this.content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    const ref = this.ref();
    if (show && this.content && !ref) {
      this.ref.set(this.service.add(this.component));
    } else if (!show && ref) {
      this.ref.set(null);
      this.service.remove(ref);
    }
  }
  static {
    this.ɵfac = function TuiDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownDirective,
      selectors: [["", "tuiDropdown", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        tuiDropdown: "tuiDropdown"
      },
      exportAs: ["tuiDropdown"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiDropdownDirective), tuiAsVehicle(_TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiDropdownDriverDirective, TuiDropdownPosition]), ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([tuiPure], TuiDropdownDirective.prototype, "position", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiDropdownDirective), tuiAsVehicle(TuiDropdownDirective)],
      exportAs: "tuiDropdown",
      hostDirectives: [TuiDropdownDriverDirective, TuiDropdownPosition]
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }],
    position: []
  });
})();
var TuiDropdownComponent = class _TuiDropdownComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.accessor = inject(TuiRectAccessor);
    this.win = inject(WA_WINDOW);
    this.vvs = inject(TuiVisualViewportService);
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.directive = inject(TuiDropdownDirective);
    this.context = inject(TUI_DROPDOWN_CONTEXT, {
      optional: true
    });
    this.theme = this.directive.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    this.sub = inject(TuiPositionService).pipe(takeWhile(() => this.directive.el.isConnected && !!this.directive.el.offsetParent), map((v) => this.directive.position === "fixed" ? this.vvs.correct(v) : v), map(([top, left]) => this.getStyles(top, left)), takeUntilDestroyed()).subscribe({
      next: (styles) => Object.assign(this.el.style, styles),
      complete: () => this.close?.()
    });
    this.close = () => this.directive.toggle(false);
  }
  getStyles(top, left) {
    const {
      right
    } = this.el.getBoundingClientRect();
    const {
      maxHeight,
      minHeight,
      offset,
      limitWidth
    } = this.options;
    const {
      innerHeight
    } = this.win;
    const clientRect = this.el.offsetParent?.getBoundingClientRect();
    const {
      position
    } = this.directive;
    const rect2 = this.accessor.getClientRect();
    const offsetX = position === "fixed" ? 0 : -(clientRect?.left || 0);
    const offsetY = position === "fixed" ? 0 : -(clientRect?.top || 0);
    top += offsetY;
    left += offsetX;
    const sided = right <= rect2.left || left >= rect2.right;
    const isIntersecting = left < rect2.right && right > rect2.left && top < offsetY + 2 * offset;
    const available = isIntersecting ? rect2.top - 2 * offset : offsetY + innerHeight - top - offset;
    return {
      position,
      top: tuiPx(Math.round(Math.max(top, offsetY + offset))),
      left: tuiPx(Math.round(left)),
      maxHeight: sided ? tuiPx(maxHeight) : tuiPx(Math.round(tuiClamp(available, minHeight, maxHeight))),
      width: limitWidth === "fixed" ? tuiPx(Math.round(rect2.width)) : "",
      minWidth: limitWidth === "min" ? tuiPx(Math.round(rect2.width)) : ""
    };
  }
  static {
    this.ɵfac = function TuiDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdownComponent,
      selectors: [["tui-dropdown"]],
      hostVars: 3,
      hostBindings: function TuiDropdownComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiDropdownAnimation", ctx.animation);
          ɵɵattribute("data-appearance", ctx.options.appearance)("tuiTheme", ctx.theme);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)]), ɵɵHostDirectivesFeature([TuiActiveZone]), ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [[1, "t-scroll"], ["class", "t-primitive", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-primitive"]],
      template: function TuiDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar", 0);
          ɵɵtemplate(1, TuiDropdownComponent_div_1_Template, 2, 1, "div", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c04, ctx.close));
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}.ng-animating[_nghost-%COMP%]{pointer-events:none}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}.t-scroll[_ngcontent-%COMP%]{flex-grow:1;max-inline-size:100%;overscroll-behavior:none}.t-primitive[_ngcontent-%COMP%]{padding:1rem}"],
      data: {
        animation: [tuiDropdownAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdown",
      imports: [PolymorpheusOutlet, PolymorpheusTemplate, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiPositionService, tuiPositionAccessorFor("dropdown", TuiDropdownPosition), tuiRectAccessorFor("dropdown", TuiDropdownDirective)],
      animations: [tuiDropdownAnimation],
      hostDirectives: [TuiActiveZone],
      host: {
        "[@tuiDropdownAnimation]": "animation",
        "[attr.data-appearance]": "options.appearance",
        "[attr.tuiTheme]": "theme"
      },
      template: '<tui-scrollbar class="t-scroll">\n    <div\n        *polymorpheusOutlet="directive.content as text; context: {$implicit: close}"\n        class="t-primitive"\n    >\n        {{ text }}\n    </div>\n</tui-scrollbar>\n',
      styles: [":host{position:absolute;display:flex;box-shadow:var(--tui-shadow-medium);color:var(--tui-text-primary);background:var(--tui-background-elevation-3);border-radius:var(--tui-radius-m);overflow:hidden;border:1px solid var(--tui-border-normal);box-sizing:border-box;max-inline-size:calc(100% - 8px);isolation:isolate;pointer-events:auto}:host.ng-animating{pointer-events:none}:host:not([style*=top]){visibility:hidden}.t-scroll{flex-grow:1;max-inline-size:100%;overscroll-behavior:none}.t-primitive{padding:1rem}\n"]
    }]
  }], null, null);
})();
function activeZoneFilter(event) {
  return !event || !this.activeZone.contains(tuiGetActualTarget(event));
}
var TuiDropdownContext = class _TuiDropdownContext extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.isTouch = inject(TUI_IS_TOUCH);
    this.driver = inject(TuiDropdownDriver);
    this.currentRect = EMPTY_CLIENT_RECT;
    this.userSelect = computed(() => this.isTouch() ? "none" : null);
    this.activeZone = inject(TuiActiveZone);
    this.type = "dropdown";
  }
  getClientRect() {
    return this.currentRect;
  }
  closeDropdown(_event) {
    this.driver.next(false);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  onContextMenu(x, y) {
    this.currentRect = tuiPointToClientRect(x, y);
    this.driver.next(true);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownContext_BaseFactory;
      return function TuiDropdownContext_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownContext_BaseFactory || (ɵTuiDropdownContext_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownContext)))(__ngFactoryType__ || _TuiDropdownContext);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownContext,
      selectors: [["", "tuiDropdownContext", ""]],
      hostVars: 6,
      hostBindings: function TuiDropdownContext_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiDropdownContext_pointerdown_silent_HostBindingHandler($event) {
            return ctx.closeDropdown($event);
          }, false, ɵɵresolveDocument)("contextmenu.capture.silent", function TuiDropdownContext_contextmenu_capture_silent_HostBindingHandler($event) {
            return ctx.closeDropdown($event);
          }, false, ɵɵresolveDocument)("keydown.esc", function TuiDropdownContext_keydown_esc_HostBindingHandler() {
            return ctx.closeDropdown();
          }, false, ɵɵresolveDocument)("longtap", function TuiDropdownContext_longtap_HostBindingHandler($event) {
            return ctx.onContextMenu($event.detail.clientX, $event.detail.clientY);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("user-select", ctx.userSelect())("-webkit-user-select", ctx.userSelect())("-webkit-touch-callout", ctx.userSelect());
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(_TuiDropdownContext)]), ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([shouldCall(activeZoneFilter)], TuiDropdownContext.prototype, "closeDropdown", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownContext, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownContext]",
      providers: [TuiActiveZone, TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver), tuiAsRectAccessor(TuiDropdownContext)],
      host: {
        "[style.user-select]": "userSelect()",
        "[style.-webkit-user-select]": "userSelect()",
        "[style.-webkit-touch-callout]": "userSelect()",
        "(document:pointerdown.silent)": "closeDropdown($event)",
        "(document:contextmenu.capture.silent)": "closeDropdown($event)",
        "(document:keydown.esc)": "closeDropdown()",
        "(longtap)": "onContextMenu($event.detail.clientX, $event.detail.clientY)"
      }
    }]
  }], null, {
    closeDropdown: []
  });
})();
var TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS = {
  showDelay: 200,
  hideDelay: 500
};
var TUI_DROPDOWN_HOVER_OPTIONS = tuiCreateToken(TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
function tuiDropdownHoverOptionsProvider(options) {
  return tuiProvideOptions(TUI_DROPDOWN_HOVER_OPTIONS, options, TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS);
}
function shouldClose(event) {
  return "key" in event && event.key.toLowerCase() === "escape" && this.tuiDropdownEnabled && !!this.tuiDropdownOpen && !this["dropdown"]()?.nextElementSibling;
}
var TuiDropdownOpen = class _TuiDropdownOpen {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.obscured = inject(TuiObscured);
    this.dropdown = computed(() => this.directive.ref()?.location.nativeElement);
    this.sub = merge(this.obscured.tuiObscured.pipe(filter(Boolean)), inject(TuiActiveZone).tuiActiveZoneChange.pipe(filter((a) => !a)), fromEvent(this.el, "focusin").pipe(map(tuiGetActualTarget), filter((target) => !this.host.contains(target) || !this.directive.ref()))).pipe(tuiWatch(), takeUntilDestroyed()).subscribe(() => this.toggle(false));
    this.tuiDropdownEnabled = true;
    this.tuiDropdownOpen = false;
    this.tuiDropdownOpenChange = new EventEmitter();
    this.driver = inject(TuiDropdownDriver);
  }
  ngOnChanges() {
    this.update(!!this.tuiDropdownOpen && this.tuiDropdownEnabled);
  }
  toggle(open) {
    if (this.focused && !open) {
      this.host.focus({
        preventScroll: true
      });
    }
    this.update(open);
  }
  onEsc(event) {
    event.preventDefault();
    this.toggle(false);
  }
  onClick(target) {
    if (!this.editable && this.host.contains(target)) {
      this.update(!this.tuiDropdownOpen);
    }
  }
  onArrow(event, up) {
    if (!tuiIsElement(event.target) || !this.host.contains(event.target) || !this.tuiDropdownEnabled) {
      return;
    }
    event.preventDefault();
    this.focusDropdown(up);
  }
  onKeydown({
    key,
    target,
    defaultPrevented
  }) {
    if (defaultPrevented || !tuiIsEditingKey(key) || !this.editable || !this.focused || !this.directive.content || !tuiIsHTMLElement(target) || tuiIsElementEditable(target) && target !== this.host) {
      return;
    }
    this.update(true);
    this.host.focus({
      preventScroll: true
    });
  }
  get host() {
    const initial = this.dropdownHost?.nativeElement || this.el;
    const focusable = tuiIsNativeKeyboardFocusable(initial) ? initial : tuiGetClosestFocusable({
      initial,
      root: this.el
    });
    return this.dropdownHost?.nativeElement || focusable || this.el;
  }
  get editable() {
    return tuiIsElementEditable(this.host);
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.host) || tuiIsNativeFocusedIn(this.dropdown());
  }
  update(open) {
    if (open && !this.tuiDropdownEnabled) {
      return;
    }
    this.tuiDropdownOpen = open;
    this.tuiDropdownOpenChange.emit(open);
    this.drive();
  }
  drive(open = !!this.tuiDropdownOpen && this.tuiDropdownEnabled) {
    this.obscured.tuiObscuredEnabled = open;
    this.driver.next(open);
  }
  focusDropdown(previous) {
    const root = this.dropdown();
    if (!root) {
      this.update(true);
      return;
    }
    const doc = this.el.ownerDocument;
    const child = root.appendChild(doc.createElement("div"));
    const initial = previous ? child : root;
    const focusable = tuiGetClosestFocusable({
      initial,
      previous,
      root
    });
    child.remove();
    focusable?.focus();
  }
  static {
    this.ɵfac = function TuiDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpen,
      selectors: [["", "tuiDropdown", "", "tuiDropdownOpen", ""], ["", "tuiDropdown", "", "tuiDropdownOpenChange", ""]],
      contentQueries: function TuiDropdownOpen_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
        }
      },
      hostBindings: function TuiDropdownOpen_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiDropdownOpen_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          })("keydown.arrowDown", function TuiDropdownOpen_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onArrow($event, false);
          })("keydown.arrowUp", function TuiDropdownOpen_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onArrow($event, true);
          })("keydown.silent.capture", function TuiDropdownOpen_keydown_silent_capture_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, ɵɵresolveDocument)("keydown.silent", function TuiDropdownOpen_keydown_silent_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        tuiDropdownEnabled: "tuiDropdownEnabled",
        tuiDropdownOpen: "tuiDropdownOpen"
      },
      outputs: {
        tuiDropdownOpenChange: "tuiDropdownOpenChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵHostDirectivesFeature([TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent", "tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange", "tuiActiveZoneChange"]
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([shouldCall(shouldClose)], TuiDropdownOpen.prototype, "onEsc", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdown][tuiDropdownOpen],[tuiDropdown][tuiDropdownOpenChange]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)],
      hostDirectives: [TuiObscured, {
        directive: TuiActiveZone,
        inputs: ["tuiActiveZoneParent"],
        outputs: ["tuiActiveZoneChange"]
      }],
      host: {
        "(click)": "onClick($event.target)",
        "(keydown.arrowDown)": "onArrow($event, false)",
        "(keydown.arrowUp)": "onArrow($event, true)",
        "(document:keydown.silent.capture)": "onEsc($event)",
        "(document:keydown.silent)": "onKeydown($event)"
      }
    }]
  }], null, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    tuiDropdownEnabled: [{
      type: Input
    }],
    tuiDropdownOpen: [{
      type: Input
    }],
    tuiDropdownOpenChange: [{
      type: Output
    }],
    onEsc: []
  });
})();
var TuiDropdownHover = class _TuiDropdownHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.options = inject(TUI_DROPDOWN_HOVER_OPTIONS);
    this.activeZone = inject(TuiActiveZone);
    this.open = inject(TuiDropdownOpen, {
      optional: true
    });
    this.stream$ = merge(tuiTypedFromEvent(this.doc, "mouseover").pipe(map(tuiGetActualTarget)), tuiTypedFromEvent(this.doc, "mouseout").pipe(map((e) => e.relatedTarget))).pipe(map((element) => tuiIsElement(element) && this.isHovered(element)), distinctUntilChanged(), switchMap((v) => of(v).pipe(delay(v ? this.showDelay : this.hideDelay))), tuiZoneOptimized(), tap((hovered) => {
      this.hovered = hovered;
      this.open?.toggle(hovered);
    }), share());
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.hovered = false;
    this.type = "dropdown";
  }
  onClick(event) {
    if (this.hovered && this.open) {
      event.preventDefault();
    }
  }
  isHovered(element) {
    const host = this.dropdownHost?.nativeElement || this.el;
    const hovered = host.contains(element);
    const child = !this.el.contains(element) && this.activeZone.contains(element);
    return hovered || child;
  }
  static {
    this.ɵfac = function TuiDropdownHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownHover,
      selectors: [["", "tuiDropdownHover", ""]],
      contentQueries: function TuiDropdownHover_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, _c1, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownHost = _t.first);
        }
      },
      hostBindings: function TuiDropdownHover_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.capture", function TuiDropdownHover_click_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        showDelay: [0, "tuiDropdownShowDelay", "showDelay"],
        hideDelay: [0, "tuiDropdownHideDelay", "hideDelay"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiActiveZone, tuiAsDriver(_TuiDropdownHover)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownHover, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownHover]",
      providers: [TuiActiveZone, tuiAsDriver(TuiDropdownHover)],
      host: {
        "(click.capture)": "onClick($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    dropdownHost: [{
      type: ContentChild,
      args: ["tuiDropdownHost", {
        descendants: true,
        read: ElementRef
      }]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiDropdownShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiDropdownHideDelay"]
    }]
  });
})();
var TuiDropdownManual = class _TuiDropdownManual {
  constructor() {
    this.driver = inject(TuiDropdownDriver);
    this.tuiDropdownManual = false;
  }
  ngOnChanges() {
    this.driver.next(!!this.tuiDropdownManual);
  }
  static {
    this.ɵfac = function TuiDropdownManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownManual,
      selectors: [["", "tuiDropdownManual", ""]],
      inputs: {
        tuiDropdownManual: "tuiDropdownManual"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownManual]",
      providers: [TuiDropdownDriver, tuiAsDriver(TuiDropdownDriver)]
    }]
  }], null, {
    tuiDropdownManual: [{
      type: Input
    }]
  });
})();
var TuiDropdownOpenLegacy = class _TuiDropdownOpenLegacy {
  constructor() {
    this.tuiDropdownOpenChange = new BehaviorSubject(false);
  }
  set tuiDropdownOpen(open) {
    this.tuiDropdownOpenChange.next(open);
  }
  static {
    this.ɵfac = function TuiDropdownOpenLegacy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownOpenLegacy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownOpenLegacy,
      selectors: [["", "tuiDropdownOpen", "", 3, "tuiDropdown", ""], ["", "tuiDropdownOpenChange", "", 3, "tuiDropdown", ""]],
      inputs: {
        tuiDropdownOpen: "tuiDropdownOpen"
      },
      outputs: {
        tuiDropdownOpenChange: "tuiDropdownOpenChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownOpenLegacy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownOpen]:not([tuiDropdown]),[tuiDropdownOpenChange]:not([tuiDropdown])"
    }]
  }], null, {
    tuiDropdownOpenChange: [{
      type: Output
    }],
    tuiDropdownOpen: [{
      type: Input
    }]
  });
})();
var TuiDropdownPortal = class _TuiDropdownPortal {
  constructor() {
    this.template = inject(TemplateRef);
    this.service = inject(TuiDropdownService);
  }
  set tuiDropdown(show) {
    this.viewRef?.destroy();
    if (show) {
      this.viewRef = this.service.addTemplate(this.template);
    }
  }
  ngOnDestroy() {
    this.viewRef?.destroy();
  }
  static {
    this.ɵfac = function TuiDropdownPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownPortal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPortal,
      selectors: [["ng-template", "tuiDropdown", ""]],
      inputs: {
        tuiDropdown: "tuiDropdown"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPortal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDropdown]"
    }]
  }], null, {
    tuiDropdown: [{
      type: Input
    }]
  });
})();
var TuiDropdownPositionSided = class _TuiDropdownPositionSided extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_DROPDOWN_OPTIONS);
    this.viewport = inject(TUI_VIEWPORT);
    this.vertical = inject(TuiDropdownPosition);
    this.previous = this.options.direction || "bottom";
    this.tuiDropdownSided = "";
    this.tuiDropdownSidedOffset = 4;
    this.type = "dropdown";
  }
  getPosition(rect2) {
    if (this.tuiDropdownSided === false) {
      return this.vertical.getPosition(rect2);
    }
    const {
      height,
      width
    } = rect2;
    const hostRect = this.vertical.accessor?.getClientRect() ?? EMPTY_CLIENT_RECT;
    const viewport = this.viewport.getClientRect();
    const {
      direction,
      minHeight,
      offset
    } = this.options;
    const align = this.options.align === "center" ? "left" : this.options.align;
    const available = {
      top: hostRect.bottom - viewport.top,
      left: hostRect.left - offset - viewport.left,
      right: viewport.right - hostRect.right - offset,
      bottom: viewport.bottom - hostRect.top
    };
    const position = {
      top: hostRect.bottom - height + this.tuiDropdownSidedOffset + 1,
      left: hostRect.left - width - offset,
      right: hostRect.right + offset,
      bottom: hostRect.top - this.tuiDropdownSidedOffset - 1
      // 1 for border
    };
    const better = available.top > available.bottom ? "top" : "bottom";
    const maxLeft = available.left > available.right ? position.left : position.right;
    const left = available[align] > width ? position[align] : maxLeft;
    if (available[this.previous] > minHeight && direction || this.previous === better) {
      return [position[this.previous], left];
    }
    this.previous = better;
    return [position[better], left];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdownPositionSided_BaseFactory;
      return function TuiDropdownPositionSided_Factory(__ngFactoryType__) {
        return (ɵTuiDropdownPositionSided_BaseFactory || (ɵTuiDropdownPositionSided_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdownPositionSided)))(__ngFactoryType__ || _TuiDropdownPositionSided);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownPositionSided,
      selectors: [["", "tuiDropdownSided", ""]],
      inputs: {
        tuiDropdownSided: "tuiDropdownSided",
        tuiDropdownSidedOffset: "tuiDropdownSidedOffset"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDropdownPosition, tuiAsPositionAccessor(_TuiDropdownPositionSided)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownPositionSided, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSided]",
      providers: [TuiDropdownPosition, tuiAsPositionAccessor(TuiDropdownPositionSided)]
    }]
  }], null, {
    tuiDropdownSided: [{
      type: Input
    }],
    tuiDropdownSidedOffset: [{
      type: Input
    }]
  });
})();
var TuiDropdownSelection = class _TuiDropdownSelection extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.vcr = inject(ViewContainerRef);
    this.dropdown = inject(TuiDropdownDirective);
    this.el = tuiInjectElement();
    this.handler$ = new BehaviorSubject(TUI_TRUE_HANDLER);
    this.stream$ = combineLatest([this.handler$, inject(TUI_SELECTION_STREAM).pipe(map(() => this.getRange()), distinctUntilChanged((x, y) => x.startOffset === y.startOffset && x.endOffset === y.endOffset && x.commonAncestorContainer === y.commonAncestorContainer))]).pipe(map(([handler, range]) => {
      const contained = this.el.contains(range.commonAncestorContainer);
      this.range = contained && tuiIsTextNode(range.commonAncestorContainer) ? range : this.range;
      return contained && handler(this.range) || this.inDropdown(range);
    }));
    this.range = inject(TUI_RANGE);
    this.position = "selection";
    this.type = "dropdown";
  }
  set tuiDropdownSelection(visible) {
    if (!tuiIsString(visible)) {
      this.handler$.next(visible);
    }
  }
  getClientRect() {
    switch (this.position) {
      case "tag": {
        const {
          commonAncestorContainer
        } = this.range;
        const element = tuiIsElement(commonAncestorContainer) ? commonAncestorContainer : commonAncestorContainer.parentNode;
        return element && tuiIsElement(element) ? element.getBoundingClientRect() : EMPTY_CLIENT_RECT;
      }
      case "word":
        return tuiGetWordRange(this.range).getBoundingClientRect();
      default:
        return this.range.getBoundingClientRect();
    }
  }
  ngOnDestroy() {
    if (this.ghost) {
      this.vcr.element.nativeElement.removeChild(this.ghost);
    }
  }
  getRange() {
    const active = tuiGetNativeFocused(this.doc);
    const selection = this.doc.getSelection();
    const range = active && tuiIsTextfield(active) && this.el.contains(active) ? this.veryVerySadInputFix(active) : selection?.rangeCount && selection.getRangeAt(0) || this.range;
    return range.cloneRange();
  }
  /**
   * Check if given range is at least partially inside dropdown
   */
  inDropdown(range) {
    const {
      startContainer,
      endContainer
    } = range;
    const inDropdown = this.boxContains(range.commonAncestorContainer);
    const hostToDropdown = this.boxContains(endContainer) && this.el.contains(startContainer);
    const dropdownToHost = this.boxContains(startContainer) && this.el.contains(endContainer);
    return inDropdown || hostToDropdown || dropdownToHost;
  }
  /**
   * Check if Node is inside dropdown
   */
  boxContains(node) {
    return !!this.dropdown.ref()?.location.nativeElement.contains(node);
  }
  veryVerySadInputFix(element) {
    const {
      ghost = this.initGhost(element)
    } = this;
    const {
      top,
      left,
      width,
      height
    } = element.getBoundingClientRect();
    const {
      selectionStart,
      selectionEnd,
      value
    } = element;
    const range = this.doc.createRange();
    const hostRect = this.el.getBoundingClientRect();
    ghost.style.top = tuiPx(top - hostRect.top);
    ghost.style.left = tuiPx(left - hostRect.left);
    ghost.style.width = tuiPx(width);
    ghost.style.height = tuiPx(height);
    ghost.textContent = CHAR_ZERO_WIDTH_SPACE + value + CHAR_NO_BREAK_SPACE;
    range.setStart(ghost.firstChild, selectionStart || 0);
    range.setEnd(ghost.firstChild, selectionEnd || 0);
    return range;
  }
  /**
   * Create an invisible DIV styled exactly like input/textarea element inside directive
   */
  initGhost(element) {
    const ghost = this.doc.createElement("div");
    const {
      font,
      letterSpacing,
      textTransform,
      padding
    } = getComputedStyle(element);
    ghost.style.position = "absolute";
    ghost.style.pointerEvents = "none";
    ghost.style.opacity = "0";
    ghost.style.whiteSpace = "pre-wrap";
    ghost.style.font = font;
    ghost.style.letterSpacing = letterSpacing;
    ghost.style.textTransform = textTransform;
    ghost.style.padding = padding;
    this.vcr.element.nativeElement.appendChild(ghost);
    this.ghost = ghost;
    return ghost;
  }
  static {
    this.ɵfac = function TuiDropdownSelection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownSelection)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownSelection,
      selectors: [["", "tuiDropdownSelection", ""]],
      inputs: {
        position: [0, "tuiDropdownSelectionPosition", "position"],
        tuiDropdownSelection: "tuiDropdownSelection"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiDropdownSelection), tuiAsRectAccessor(_TuiDropdownSelection)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownSelection, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiDropdownSelection]",
      providers: [tuiAsDriver(TuiDropdownSelection), tuiAsRectAccessor(TuiDropdownSelection)]
    }]
  }], function() {
    return [];
  }, {
    position: [{
      type: Input,
      args: ["tuiDropdownSelectionPosition"]
    }],
    tuiDropdownSelection: [{
      type: Input
    }]
  });
})();
var TuiDropdown = [TuiDropdownOptionsDirective, TuiDropdownDriverDirective, TuiDropdownDirective, TuiDropdownComponent, TuiDropdownOpen, TuiDropdownOpenLegacy, TuiDropdownPortal, TuiDropdownManual, TuiDropdownHover, TuiDropdownContext, TuiDropdownPosition, TuiDropdownPositionSided, TuiDropdownSelection];
function tuiDropdown(value) {
  return tuiDirectiveBinding(TuiDropdownDirective, "tuiDropdown", value, {});
}
function tuiDropdownOpen() {
  const open = tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownOpen", false, {});
  inject(TuiDropdownOpen).tuiDropdownOpenChange.pipe(takeUntilDestroyed()).subscribe((value) => open.set(value));
  return open;
}
var TuiDropdownFixed = class _TuiDropdownFixed {
  constructor() {
    const override = tuiOverrideOptions({
      limitWidth: "fixed"
    }, TUI_DROPDOWN_DEFAULT_OPTIONS);
    override(inject(TUI_DROPDOWN_OPTIONS, {
      self: true,
      optional: true
    }), null);
  }
  static {
    this.ɵfac = function TuiDropdownFixed_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDropdownFixed)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDropdownFixed,
      standalone: true,
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({})])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdownFixed, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiDropdownOptionsProvider({})]
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDropdowns = class _TuiDropdowns extends TuiPortals {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDropdowns_BaseFactory;
      return function TuiDropdowns_Factory(__ngFactoryType__) {
        return (ɵTuiDropdowns_BaseFactory || (ɵTuiDropdowns_BaseFactory = ɵɵgetInheritedFactory(_TuiDropdowns)))(__ngFactoryType__ || _TuiDropdowns);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDropdowns,
      selectors: [["tui-dropdowns"]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPortal(TuiDropdownService)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 2,
      vars: 0,
      consts: [["viewContainer", ""]],
      template: function TuiDropdowns_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainer(0, null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDropdowns, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dropdowns",
      template: "<ng-container #viewContainer />",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsPortal(TuiDropdownService)]
    }]
  }], null, null);
})();
var TuiWithDropdownOpen = class _TuiWithDropdownOpen {
  static {
    this.ɵfac = function TuiWithDropdownOpen_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithDropdownOpen)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithDropdownOpen,
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen", "open"],
        outputs: ["tuiDropdownOpenChange", "openChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithDropdownOpen, [{
    type: Directive,
    args: [{
      standalone: true,
      hostDirectives: [{
        directive: TuiDropdownOpen,
        inputs: ["tuiDropdownOpen: open"],
        outputs: ["tuiDropdownOpenChange: openChange"]
      }]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-data-list.mjs
var _c05 = ["tuiOption", ""];
var _c12 = ["*"];
var _c2 = (a0) => ({
  $implicit: a0
});
function TuiOption_ng_container_0_Template(rf, ctx) {
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
function TuiOption_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiDataListComponent_div_1_ng_container_1_Template(rf, ctx) {
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
function TuiDataListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiDataListComponent_div_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.emptyContent || ctx_r1.fallback());
  }
}
var TUI_OPTION_CONTENT = tuiCreateToken();
function tuiAsOptionContent(useValue) {
  return {
    provide: TUI_OPTION_CONTENT,
    useValue
  };
}
var TUI_DATA_LIST_ACCESSOR = tuiCreateToken();
function tuiAsDataListAccessor(accessor) {
  return tuiProvide(TUI_DATA_LIST_ACCESSOR, accessor);
}
var TUI_DATA_LIST_HOST = tuiCreateToken();
function tuiAsDataListHost(host) {
  return tuiProvide(TUI_DATA_LIST_HOST, host);
}
var TuiOption = class _TuiOption {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.dataList = inject(forwardRef(() => TuiDataListComponent), {
      optional: true
    });
    this.host = inject(TUI_DATA_LIST_HOST, {
      optional: true
    });
    this.content = inject(TUI_OPTION_CONTENT, {
      optional: true
    });
    this.dropdown = inject(TuiDropdownDirective, {
      self: true,
      optional: true
    })?.ref;
    this.disabled = false;
  }
  // Preventing focus loss upon focused option removal
  ngOnDestroy() {
    this.dataList?.handleFocusLossIfNecessary(this.el);
  }
  onClick() {
    if (this.host?.handleOption && this.value !== void 0) {
      this.host.handleOption(this.value);
    }
  }
  onMouseMove() {
    if (!this.isMobile && !tuiIsNativeFocused(this.el) && this.dataList) {
      this.el.focus({
        preventScroll: true
      });
    }
  }
  static {
    this.ɵfac = function TuiOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOption)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiOption,
      selectors: [["button", "tuiOption", ""], ["a", "tuiOption", ""], ["label", "tuiOption", ""]],
      hostAttrs: ["type", "button", "role", "option"],
      hostVars: 3,
      hostBindings: function TuiOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiOption_click_HostBindingHandler() {
            return ctx.onClick();
          })("mousemove.silent", function TuiOption_mousemove_silent_HostBindingHandler() {
            return ctx.onMouseMove();
          });
        }
        if (rf & 2) {
          ɵɵattribute("disabled", ctx.disabled || null);
          ɵɵclassProp("_with-dropdown", ctx.dropdown == null ? null : ctx.dropdown());
        }
      },
      inputs: {
        disabled: "disabled",
        value: "value"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiWithIcons]), ɵɵStandaloneFeature],
      attrs: _c05,
      ngContentSelectors: _c12,
      decls: 3,
      vars: 4,
      consts: [["t", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiOption_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiOption_ng_container_0_Template, 2, 1, "ng-container", 1)(1, TuiOption_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const t_r2 = ɵɵreference(2);
          ɵɵproperty("polymorpheusOutlet", ctx.content || t_r2)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c2, t_r2));
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOption, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiOption], a[tuiOption], label[tuiOption]",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-container *polymorpheusOutlet="content || t as text; context: {$implicit: t}">
            {{ text }}
        </ng-container>
        <ng-template #t>
            <ng-content />
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button",
        role: "option",
        "[attr.disabled]": "disabled || null",
        "[class._with-dropdown]": "dropdown?.()",
        "(click)": "onClick()",
        "(mousemove.silent)": "onMouseMove()"
      }
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
function tuiInjectDataListSize() {
  const sizes = ["s", "m", "l"];
  const size = inject(TUI_DATA_LIST_HOST, {
    optional: true
  })?.size;
  return size && sizes.includes(size) ? size : "l";
}
var TuiDataListComponent = class _TuiDataListComponent {
  constructor() {
    this.options = EMPTY_QUERY;
    this.ngZone = inject(NgZone);
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.fallback = toSignal(inject(TUI_NOTHING_FOUND_MESSAGE));
    this.empty = signal(false);
    this.size = tuiInjectDataListSize();
  }
  onKeyDownArrow(current, step) {
    const {
      elements
    } = this;
    tuiMoveFocus(elements.indexOf(current), elements, step);
  }
  handleFocusLossIfNecessary(element = this.el) {
    if (tuiIsNativeFocusedIn(element)) {
      this.origin?.focus({
        preventScroll: true
      });
    }
  }
  // TODO: Refactor to :has after Safari support bumped to 15
  ngAfterContentChecked() {
    timer(0).pipe(tuiZonefree(this.ngZone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.empty.set(!this.elements.length);
      this.cdr.detectChanges();
    });
  }
  getOptions(includeDisabled = false) {
    return this.options.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  onFocusIn(relatedTarget, currentTarget) {
    if (!currentTarget.contains(relatedTarget) && !this.origin) {
      this.origin = relatedTarget;
    }
  }
  get elements() {
    return Array.from(this.el.querySelectorAll("a,button,input"));
  }
  static {
    this.ɵfac = function TuiDataListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListComponent,
      selectors: [["tui-data-list"]],
      contentQueries: function TuiDataListComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
        }
      },
      hostAttrs: ["role", "listbox"],
      hostVars: 1,
      hostBindings: function TuiDataListComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin", function TuiDataListComponent_focusin_HostBindingHandler($event) {
            return ctx.onFocusIn($event.relatedTarget, $event.currentTarget);
          })("mousedown.prevent", function TuiDataListComponent_mousedown_prevent_HostBindingHandler() {
            return 0;
          })("wheel.silent.passive", function TuiDataListComponent_wheel_silent_passive_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("mouseleave", function TuiDataListComponent_mouseleave_HostBindingHandler($event) {
            return ctx.handleFocusLossIfNecessary($event.target);
          })("keydown.tab", function TuiDataListComponent_keydown_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.shift.tab", function TuiDataListComponent_keydown_shift_tab_HostBindingHandler() {
            return ctx.handleFocusLossIfNecessary();
          })("keydown.arrowDown.prevent", function TuiDataListComponent_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiDataListComponent_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        emptyContent: "emptyContent",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListComponent)]), ɵɵStandaloneFeature],
      ngContentSelectors: _c12,
      decls: 2,
      vars: 1,
      consts: [["class", "t-empty", 4, "ngIf"], [1, "t-empty"], [4, "polymorpheusOutlet"]],
      template: function TuiDataListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiDataListComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.empty());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet],
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list",
      imports: [NgIf, PolymorpheusOutlet],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListComponent)],
      host: {
        role: "listbox",
        "[attr.data-size]": "size",
        "(focusin)": "onFocusIn($event.relatedTarget, $event.currentTarget)",
        "(mousedown.prevent)": "(0)",
        "(wheel.silent.passive)": "handleFocusLossIfNecessary()",
        "(mouseleave)": "handleFocusLossIfNecessary($event.target)",
        "(keydown.tab)": "handleFocusLossIfNecessary()",
        "(keydown.shift.tab)": "handleFocusLossIfNecessary()",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      },
      template: '<ng-content />\n<div\n    *ngIf="empty()"\n    class="t-empty"\n>\n    <ng-container *polymorpheusOutlet="emptyContent || fallback() as text">\n        {{ text }}\n    </ng-container>\n</div>\n',
      styles: ['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-tertiary)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-size=s]{--tui-data-list-margin: var(--t-0, 0rem)}tui-data-list[data-size=s]>.t-empty,tui-data-list[data-size=s] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2rem;padding:.3125rem .5rem}tui-data-list[data-size=s]>.t-empty:before,tui-data-list[data-size=s] [tuiOption]:before{font-size:1rem}tui-data-list[data-size=m]>.t-empty,tui-data-list[data-size=m] [tuiOption]{font:var(--tui-font-text-s);min-block-size:2.5rem;padding:.375rem .5rem}tui-data-list[data-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-size=l]>.t-empty,tui-data-list[data-size=l] [tuiOption]{font:var(--tui-font-text-m);min-block-size:2.75rem;padding:.375rem .625rem}tui-data-list>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0}tui-data-list [tuiOption]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;justify-content:space-between;text-align:start;color:var(--tui-text-primary);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}tui-data-list [tuiOption]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}tui-data-list [tuiOption]:hover,tui-data-list [tuiOption]:focus-within,tui-data-list [tuiOption]._with-dropdown{background-color:var(--tui-background-neutral-1)}tui-data-list [tuiOption]:before{margin-inline-end:.5rem}tui-data-list [tuiOption]:after{font-size:1rem;margin:0 -.75rem 0 auto;border-left:.5rem solid;border-right:.5rem solid}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-secondary);flex-direction:column;line-height:1rem}tui-data-list[data-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);block-size:1px;background:var(--tui-border-normal)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n']
    }]
  }], null, {
    options: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiOption), {
        descendants: true
      }]
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiDataListDirective = class _TuiDataListDirective {
  static {
    this.ɵfac = function TuiDataListDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDataListDirective,
      selectors: [["ng-template", "tuiDataList", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDataList]"
    }]
  }], null, null);
})();
function tuiAsDataList(list) {
  return tuiProvide(TuiDataListDirective, list);
}
var TuiOptGroup = class _TuiOptGroup {
  static {
    this.ɵfac = function TuiOptGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOptGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiOptGroup,
      selectors: [["tui-opt-group"]],
      hostAttrs: ["role", "group"],
      hostVars: 1,
      hostBindings: function TuiOptGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-label", ctx.label);
        }
      },
      inputs: {
        label: "label"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOptGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-opt-group",
      host: {
        role: "group",
        "[attr.data-label]": "label"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }]
  });
})();
var TuiDataList = [TuiDataListComponent, TuiDataListDirective, TuiOption, TuiOptGroup];

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-label.mjs
var TuiLabelStyles = class _TuiLabelStyles {
  static {
    this.ɵfac = function TuiLabelStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabelStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLabelStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-label"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiLabelStyles_Template(rf, ctx) {
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabelStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-label"
      },
      styles: ["[tuiLabel]{display:flex;gap:.25rem;flex-direction:column;font:var(--tui-font-text-s);color:var(--tui-text-primary)}[tuiLabel]:not([data-orientation=vertical]){flex-direction:row;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-m)}[tuiLabel]:has(tui-textfield),[tuiLabel]:has(tui-primitive-textfield),[tuiLabel]:has(tui-textarea){flex-direction:column!important;inline-size:auto!important;font:var(--tui-font-text-s)!important}[tuiLabel] input[type=checkbox],[tuiLabel] input[type=radio]{margin-inline-end:.5rem}[tuiLabel] input[type=checkbox][data-size=s],[tuiLabel] input[type=radio][data-size=s]{margin-inline-end:.25rem;margin-top:.125rem}[tuiLabel] small{font:var(--tui-font-text-s)}[tuiLabel] [tuiTitle]{margin-top:.125rem}[tuiLabel] [tuiSubtitle]{color:var(--tui-text-secondary)}\n"]
    }]
  }], null, null);
})();
var TuiLabel = class _TuiLabel {
  constructor() {
    this.el = tuiInjectElement();
    this.nothing = tuiWithStyles(TuiLabelStyles);
    this.parent = inject(forwardRef(() => TUI_DATA_LIST_HOST), {
      optional: true
    });
  }
  static {
    this.ɵfac = function TuiLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLabel)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLabel,
      selectors: [["label", "tuiLabel", ""]],
      contentQueries: function TuiLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_DATA_LIST_HOST, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textfield = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TuiLabel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("for", ctx.el.htmlFor || (ctx.parent == null ? null : ctx.parent.id))("data-orientation", ctx.textfield ? "vertical" : "horizontal");
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLabel, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiLabel]",
      host: {
        "[attr.for]": "el.htmlFor || parent?.id",
        "[attr.data-orientation]": 'textfield ? "vertical" : "horizontal"'
      }
    }]
  }], null, {
    textfield: [{
      type: ContentChild,
      args: [forwardRef(() => TUI_DATA_LIST_HOST)]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-native-validator.mjs
var TuiNativeValidator = class _TuiNativeValidator {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.zone = inject(NgZone);
    this.el = tuiInjectElement();
    this.tuiNativeValidator = "Invalid";
  }
  validate(control) {
    this.control = control;
    timer(0).pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef)).subscribe(() => this.handleValidation());
    return null;
  }
  handleValidation() {
    this.el.setCustomValidity?.(this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : "");
  }
  static {
    this.ɵfac = function TuiNativeValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNativeValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNativeValidator,
      selectors: [["", "tuiNativeValidator", ""]],
      hostBindings: function TuiNativeValidator_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiNativeValidator_focusout_HostBindingHandler() {
            return ctx.handleValidation();
          });
        }
      },
      inputs: {
        tuiNativeValidator: "tuiNativeValidator"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiNativeValidator, true)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNativeValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiNativeValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
      host: {
        "(focusout)": "handleValidation()"
      }
    }]
  }], null, {
    tuiNativeValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/resize-observer/fesm2022/ng-web-apis-resize-observer.mjs
var SafeObserver = typeof ResizeObserver !== "undefined" ? ResizeObserver : class {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
};
var WA_RESIZE_OPTION_BOX_DEFAULT = "content-box";
var RESIZE_OPTION_BOX_DEFAULT = WA_RESIZE_OPTION_BOX_DEFAULT;
var WA_RESIZE_OPTION_BOX = new InjectionToken("[WA_RESIZE_OPTION_BOX]", {
  providedIn: "root",
  factory: () => RESIZE_OPTION_BOX_DEFAULT
});
var RESIZE_OPTION_BOX = WA_RESIZE_OPTION_BOX;
var ResizeObserverService = class _ResizeObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const box = inject(RESIZE_OPTION_BOX);
    super((subscriber) => {
      const observer = new SafeObserver((entries) => subscriber.next(entries));
      observer.observe(nativeElement, {
        box
      });
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function ResizeObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizeObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeObserverService,
    factory: _ResizeObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaResizeObserver = class _WaResizeObserver {
  waResizeObserver = inject(ResizeObserverService);
  box = RESIZE_OPTION_BOX_DEFAULT;
  static ɵfac = function WaResizeObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaResizeObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaResizeObserver,
    selectors: [["", "waResizeObserver", ""]],
    inputs: {
      waResizeBox: [0, "box", "waResizeBox"]
    },
    outputs: {
      waResizeObserver: "waResizeObserver"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ResizeObserverService, {
      provide: RESIZE_OPTION_BOX,
      useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || RESIZE_OPTION_BOX_DEFAULT
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaResizeObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waResizeObserver]",
      inputs: ["waResizeBox: box"],
      outputs: ["waResizeObserver"],
      providers: [ResizeObserverService, {
        provide: RESIZE_OPTION_BOX,
        useFactory: () => inject(ElementRef).nativeElement.getAttribute("waResizeBox") || RESIZE_OPTION_BOX_DEFAULT
      }]
    }]
  }], null, null);
})();
var WA_RESIZE_OBSERVER_SUPPORT = new InjectionToken("[WA_RESIZE_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).ResizeObserver
});

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-services.mjs
var TuiIdService = class _TuiIdService {
  static {
    this.autoId = 0;
  }
  generate() {
    return `tui_${_TuiIdService.autoId++}${Date.now()}`;
  }
  static {
    this.ɵfac = function TuiIdService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIdService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiIdService,
      factory: _TuiIdService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIdService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function tuiInjectId() {
  return inject(TuiIdService).generate();
}
var TuiPopoverService = class _TuiPopoverService {
  constructor(items, component, options = {}) {
    this.options = options;
    this.id = inject(TuiIdService);
    this.component = new PolymorpheusComponent(component);
    this.items$ = inject(items);
  }
  open(content, options = {}) {
    return new Observable((observer) => {
      const item = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        content,
        $implicit: observer,
        component: this.component,
        createdAt: Date.now(),
        id: this.id.generate(),
        completeWith: (result) => {
          observer.next(result);
          observer.complete();
        }
      });
      this.items$.next([...this.items$.value, item]);
      return () => {
        this.items$.next(this.items$.value.filter((value) => value !== item));
      };
    });
  }
  static {
    this.ɵfac = function TuiPopoverService_Factory(__ngFactoryType__) {
      ɵɵinvalidFactory();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPopoverService,
      factory: _TuiPopoverService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0
    }, {
      type: void 0
    }, {
      type: void 0
    }];
  }, null);
})();
function tuiAsPopover(popover) {
  return tuiProvide(TuiPopoverService, popover);
}
var SCROLL_TIME = 300;
function getX(elementOrWindow) {
  return "scrollX" in elementOrWindow ? elementOrWindow.scrollX : elementOrWindow.scrollLeft;
}
function getY(elementOrWindow) {
  return "scrollY" in elementOrWindow ? elementOrWindow.scrollY : elementOrWindow.scrollTop;
}
var TuiScrollService = class _TuiScrollService {
  constructor() {
    this.performanceRef = inject(WA_PERFORMANCE);
    this.animationFrame$ = inject(WA_ANIMATION_FRAME);
    this.zone = inject(NgZone);
  }
  scroll$(elementOrWindow, scrollTop, scrollLeft = getX(elementOrWindow), duration = SCROLL_TIME) {
    ngDevMode && console.assert(duration >= 0, "duration cannot be negative");
    ngDevMode && console.assert(scrollTop >= 0, "scrollTop cannot be negative");
    ngDevMode && console.assert(scrollLeft >= 0, "scrollLeft cannot be negative");
    const initialTop = getY(elementOrWindow);
    const initialLeft = getX(elementOrWindow);
    const deltaTop = scrollTop - initialTop;
    const deltaLeft = scrollLeft - initialLeft;
    const observable = !duration ? of([scrollTop, scrollLeft]) : defer(() => of(this.performanceRef.now())).pipe(switchMap((start) => this.animationFrame$.pipe(map((now) => now - start))), map((elapsed) => tuiEaseInOutQuad(tuiClamp(elapsed / duration, 0, 1))), map((percent) => [initialTop + deltaTop * percent, initialLeft + deltaLeft * percent]), takeUntil(timer(duration, tuiZonefreeScheduler(this.zone))), endWith([scrollTop, scrollLeft]));
    return observable.pipe(tap(([scrollTop2, scrollLeft2]) => {
      elementOrWindow.scrollTo?.(scrollLeft2, scrollTop2);
    }));
  }
  static {
    this.ɵfac = function TuiScrollService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiScrollService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiScrollService,
      factory: _TuiScrollService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var TUI_THEME_COLOR = tuiCreateTokenFromFactory(() => inject(Meta).getTag('name="theme-color"')?.content ?? "");
var TuiThemeColorService = class _TuiThemeColorService {
  constructor() {
    this.current = inject(TUI_THEME_COLOR);
    this.doc = inject(DOCUMENT);
    this.meta = inject(Meta);
    this.color = this.current;
  }
  get color() {
    return this.current;
  }
  set color(content) {
    this.current = content;
    this.meta.updateTag({
      name: "theme-color",
      content
    });
    this.doc.documentElement.style.setProperty("--tui-theme-color", content);
  }
  static {
    this.ɵfac = function TuiThemeColorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiThemeColorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiThemeColorService,
      factory: _TuiThemeColorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiThemeColorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-textfield.mjs
var _c06 = ["vcr"];
var _c13 = [[["input"]], [["select"]], [["label"]], "*", [["tui-icon"]]];
var _c22 = ["input", "select", "label", "*", "tui-icon"];
var _c3 = (a0) => ({
  $implicit: a0
});
function TuiTextfieldComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiTextfieldComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.directive == null ? null : ctx_r2.directive.setValue(null));
    })("pointerdown.silent.prevent", function TuiTextfieldComponent_button_5_Template_button_pointerdown_silent_prevent_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.input == null ? null : ctx_r2.input.nativeElement == null ? null : ctx_r2.input.nativeElement.focus());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r2.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.clear(), " ");
  }
}
function TuiTextfieldComponent_ng_container_10_Template(rf, ctx) {
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
function TuiTextfieldComponent_input_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "input", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.computedFiller());
  }
}
var _c4 = ["tuiTextfield", ""];
var _c5 = (a0) => [a0];
function TuiSelect_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
function TuiSelect_ng_template_1_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
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
function TuiSelect_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiSelect_ng_template_1_option_0_Template, 2, 2, "option", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ɵɵpureFunction1(1, _c5, ctx_r0.value));
  }
}
var DEFAULT2 = {
  appearance: "textfield",
  size: "l",
  cleaner: true
};
var TUI_TEXTFIELD_OPTIONS = tuiCreateToken({
  appearance: signal(DEFAULT2.appearance),
  size: signal(DEFAULT2.size),
  cleaner: signal(DEFAULT2.cleaner)
});
function tuiTextfieldOptionsProvider(options) {
  return {
    provide: TUI_TEXTFIELD_OPTIONS,
    deps: [[new Optional(), new SkipSelf(), TUI_TEXTFIELD_OPTIONS]],
    useFactory: (parent) => __spreadValues({
      appearance: signal(parent?.appearance() ?? DEFAULT2.appearance),
      size: signal(parent?.size() ?? DEFAULT2.size),
      cleaner: signal(parent?.cleaner() ?? DEFAULT2.cleaner)
    }, options)
  };
}
var TuiTextfieldOptionsDirective = class _TuiTextfieldOptionsDirective {
  constructor() {
    this.options = inject(TUI_TEXTFIELD_OPTIONS, {
      skipSelf: true
    });
    this.appearance = signal(this.options.appearance());
    this.size = signal(this.options.size());
    this.cleaner = signal(this.options.cleaner());
  }
  set tuiTextfieldAppearance(appearance) {
    this.appearance.set(appearance);
  }
  set tuiTextfieldSize(size) {
    this.size.set(size);
  }
  set tuiTextfieldCleaner(enabled) {
    this.cleaner.set(enabled);
  }
  static {
    this.ɵfac = function TuiTextfieldOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldOptionsDirective,
      selectors: [["", "tuiTextfieldAppearance", ""], ["", "tuiTextfieldSize", ""], ["", "tuiTextfieldCleaner", ""]],
      inputs: {
        tuiTextfieldAppearance: "tuiTextfieldAppearance",
        tuiTextfieldSize: "tuiTextfieldSize",
        tuiTextfieldCleaner: "tuiTextfieldCleaner"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TEXTFIELD_OPTIONS, _TuiTextfieldOptionsDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTextfieldAppearance],[tuiTextfieldSize],[tuiTextfieldCleaner]",
      providers: [tuiProvide(TUI_TEXTFIELD_OPTIONS, TuiTextfieldOptionsDirective)]
    }]
  }], null, {
    tuiTextfieldAppearance: [{
      type: Input
    }],
    tuiTextfieldSize: [{
      type: Input
    }],
    tuiTextfieldCleaner: [{
      type: Input
    }]
  });
})();
var TuiTextfieldDropdownDirective = class _TuiTextfieldDropdownDirective {
  static {
    this.ɵfac = function TuiTextfieldDropdownDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldDropdownDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDropdownDirective,
      selectors: [["ng-template", "tuiTextfieldDropdown", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDropdownDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldDropdown]"
    }]
  }], null, null);
})();
var TuiWithTextfieldDropdown = class _TuiWithTextfieldDropdown {
  constructor() {
    this.dropdown = tuiDropdown(null);
  }
  set template(template) {
    this.dropdown.set(template);
  }
  static {
    this.ɵfac = function TuiWithTextfieldDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiWithTextfieldDropdown)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiWithTextfieldDropdown,
      contentQueries: function TuiWithTextfieldDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldDropdownDirective, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiWithTextfieldDropdown, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    template: [{
      type: ContentChild,
      args: [TuiTextfieldDropdownDirective, {
        read: TemplateRef,
        descendants: true
      }]
    }]
  });
})();
var TuiTextfieldComponent = class _TuiTextfieldComponent {
  constructor() {
    this.filler = signal("");
    this.autoId = tuiInjectId();
    this.el = tuiInjectElement();
    this.open = tuiDropdownOpen();
    this.focusedIn = tuiFocusedIn(tuiInjectElement());
    this.icons = inject(TUI_COMMON_ICONS);
    this.clear = toSignal(inject(TUI_CLEAR_WORD));
    this.computedFiller = computed(() => {
      const value = this.directive?.nativeValue() || "";
      const filledValue = value + this.filler().slice(value.length);
      return filledValue.length > value.length ? filledValue : "";
    });
    this.showFiller = computed(() => this.focused() && !!this.computedFiller() && (!!this.directive?.nativeValue() || !this.input?.nativeElement.placeholder));
    this.stringify = String;
    this.focused = computed(() => this.open() || this.focusedIn());
    this.options = inject(TUI_TEXTFIELD_OPTIONS);
  }
  set fillerSetter(filler) {
    this.filler.set(filler);
  }
  get id() {
    return this.input?.nativeElement.id || this.autoId;
  }
  get size() {
    return this.options.size();
  }
  handleOption(option) {
    this.directive?.setValue(option);
    this.open.set(false);
  }
  get hasLabel() {
    return Boolean(this.label?.nativeElement?.childNodes.length);
  }
  onResize({
    contentRect
  }) {
    this.el.style.setProperty("--t-side", tuiPx(contentRect.width));
  }
  static {
    this.ɵfac = function TuiTextfieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTextfieldComponent,
      selectors: [["tui-textfield"]],
      contentQueries: function TuiTextfieldComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 5);
          ɵɵcontentQuery(dirIndex, TuiLabel, 5, ElementRef);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, TuiTextfieldDirective, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.directive = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.label = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      viewQuery: function TuiTextfieldComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c06, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      },
      hostVars: 7,
      hostBindings: function TuiTextfieldComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.options.size());
          ɵɵclassProp("_with-label", ctx.hasLabel)("_with-template", ctx.content)("_disabled", ctx.input == null ? null : ctx.input.nativeElement.disabled);
        }
      },
      inputs: {
        stringify: "stringify",
        content: "content",
        fillerSetter: [0, "filler", "fillerSetter"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListHost(_TuiTextfieldComponent)]), ɵɵHostDirectivesFeature([TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons]), ɵɵStandaloneFeature],
      ngContentSelectors: _c22,
      decls: 12,
      vars: 6,
      consts: [["vcr", ""], [1, "t-content", 3, "mousedown.prevent", "waResizeObserver"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", "class", "t-clear", 3, "iconStart", "click", "pointerdown.silent.prevent", 4, "ngIf"], [1, "t-template"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["aria-hidden", "true", "disabled", "", "class", "t-filler", 3, "value", 4, "ngIf"], ["appearance", "icon", "size", "xs", "tabindex", "-1", "tuiIconButton", "", "type", "button", 1, "t-clear", 3, "click", "pointerdown.silent.prevent", "iconStart"], ["aria-hidden", "true", "disabled", "", 1, "t-filler", 3, "value"]],
      template: function TuiTextfieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c13);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵprojection(2, 2);
          ɵɵelementStart(3, "span", 1);
          ɵɵlistener("mousedown.prevent", function TuiTextfieldComponent_Template_span_mousedown_prevent_3_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.input == null ? null : ctx.input.nativeElement == null ? null : ctx.input.nativeElement.focus());
          })("waResizeObserver", function TuiTextfieldComponent_Template_span_waResizeObserver_3_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView($event[0] && ctx.onResize($event[0]));
          });
          ɵɵprojection(4, 3);
          ɵɵtemplate(5, TuiTextfieldComponent_button_5_Template, 2, 2, "button", 2);
          ɵɵelementContainer(6, null, 0);
          ɵɵprojection(8, 4);
          ɵɵelementEnd();
          ɵɵelementStart(9, "span", 3);
          ɵɵtemplate(10, TuiTextfieldComponent_ng_container_10_Template, 2, 1, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵtemplate(11, TuiTextfieldComponent_input_11_Template, 1, 1, "input", 5);
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("ngIf", ctx.options.cleaner());
          ɵɵadvance(5);
          ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c3, ctx.control == null ? null : ctx.control.value));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showFiller());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-textfield",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, WaResizeObserver],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListHost(TuiTextfieldComponent)],
      hostDirectives: [TuiDropdownFixed, TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown, TuiWithIcons],
      host: {
        "[attr.data-size]": "options.size()",
        "[class._with-label]": "hasLabel",
        "[class._with-template]": "content",
        "[class._disabled]": "input?.nativeElement.disabled"
      },
      template: '<ng-content select="input" />\n<ng-content select="select" />\n<ng-content select="label" />\n<span\n    class="t-content"\n    (mousedown.prevent)="input?.nativeElement?.focus()"\n    (waResizeObserver)="$event[0] && onResize($event[0])"\n>\n    <ng-content />\n    <button\n        *ngIf="options.cleaner()"\n        appearance="icon"\n        size="xs"\n        tabindex="-1"\n        tuiIconButton\n        type="button"\n        class="t-clear"\n        [iconStart]="icons.close"\n        (click)="directive?.setValue(null)"\n        (pointerdown.silent.prevent)="input?.nativeElement?.focus()"\n    >\n        {{ clear() }}\n    </button>\n    <ng-container #vcr />\n    <ng-content select="tui-icon" />\n</span>\n<span class="t-template">\n    <ng-container *polymorpheusOutlet="content as text; context: {$implicit: control?.value}">\n        {{ text }}\n    </ng-container>\n</span>\n<input\n    *ngIf="showFiller()"\n    aria-hidden="true"\n    disabled\n    class="t-filler"\n    [value]="computedFiller()"\n/>\n',
      styles: ['tui-textfield{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;--t-height: var(--tui-height-l);--t-padding: var(--tui-padding-l);position:relative;display:flex;align-items:center;pointer-events:none;cursor:pointer;block-size:var(--t-height);color:var(--tui-text-tertiary);padding:0 var(--t-padding);border-radius:var(--tui-radius-l);font:var(--tui-font-text-m);box-sizing:border-box}tui-textfield[style*="--t-icon-start:"]{--t-left: 2.25rem}tui-textfield[style*="--t-icon-end:"]{--t-right: 2.25rem}tui-textfield:after{margin-inline-start:.25rem}tui-textfield input,tui-textfield select{font:var(--tui-font-text-m)}tui-textfield[data-size=s]{--t-height: var(--tui-height-s);--t-padding: var(--tui-padding-s);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=s][style*="--t-icon-start:"]{--t-left: 1.25rem}tui-textfield[data-size=s][style*="--t-icon-end:"]{--t-right: 1.25rem}tui-textfield[data-size=s]:before{margin:0 .5rem 0 -.125rem;font-size:1rem}tui-textfield[data-size=s]:after{margin:0 -.175rem 0 .575rem;font-size:1rem}tui-textfield[data-size=s] input,tui-textfield[data-size=s] select{font:var(--tui-font-text-s)}tui-textfield[data-size=s] .t-content{gap:0;margin-inline-end:-.325rem}tui-textfield[data-size=m]{--t-height: var(--tui-height-m);--t-padding: var(--tui-padding-m);border-radius:var(--tui-radius-m);font:var(--tui-font-text-s)}tui-textfield[data-size=m][style*="--t-icon-start:"]{--t-left: 1.75rem}tui-textfield[data-size=m][style*="--t-icon-end:"]{--t-right: 1.75rem}tui-textfield[data-size=m]:before{margin:0 .375rem 0 -.125rem}tui-textfield[data-size=m]:after{margin:0 -.125rem 0 .5rem}tui-textfield[data-size=m] input,tui-textfield[data-size=m] select{font:var(--tui-font-text-s)}tui-textfield[data-size=m] .t-content{margin-inline-end:-.125rem}tui-textfield:hover{color:var(--tui-text-secondary)}tui-textfield:hover:has(input:read-only),tui-textfield:hover:has(select[data-mode~=readonly]){color:var(--tui-text-tertiary)}tui-textfield:before{z-index:1;margin-inline-end:.75rem}tui-textfield:has(:disabled:not(.t-filler,button,option)):before,tui-textfield:has(:disabled:not(.t-filler,button,option)):after,tui-textfield:has(:disabled:not(.t-filler,button,option)) .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield._disabled:before,tui-textfield._disabled:after,tui-textfield._disabled .t-template{opacity:var(--tui-disabled-opacity)}tui-textfield:has(label:not(:empty)) .t-template,tui-textfield:has(label:not(:empty)) input:defined,tui-textfield:has(label:not(:empty)) select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield:has(label:not(:empty)) .t-template::placeholder,tui-textfield:has(label:not(:empty)) input:defined::placeholder,tui-textfield:has(label:not(:empty)) select:defined::placeholder,tui-textfield:has(label:not(:empty)) .t-template._empty,tui-textfield:has(label:not(:empty)) input:defined._empty,tui-textfield:has(label:not(:empty)) select:defined._empty{color:transparent}tui-textfield._with-label .t-template,tui-textfield._with-label input:defined,tui-textfield._with-label select:defined{padding-top:calc(var(--t-height) / 3)}tui-textfield._with-label .t-template::placeholder,tui-textfield._with-label input:defined::placeholder,tui-textfield._with-label select:defined::placeholder,tui-textfield._with-label .t-template._empty,tui-textfield._with-label input:defined._empty,tui-textfield._with-label select:defined._empty{color:transparent}tui-textfield .t-template,tui-textfield input:defined,tui-textfield select:defined{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;box-sizing:border-box;border-radius:inherit;padding:inherit;border:none;text-indent:var(--t-left, 0);padding-inline-end:calc(var(--t-right, var(--t-0, 0rem)) + var(--t-side) + var(--t-padding))}tui-textfield .t-template{display:flex;align-items:center}tui-textfield._with-template select{color:transparent!important}tui-textfield input:defined,tui-textfield select:defined{pointer-events:auto;background:transparent}tui-textfield input:defined:read-only~.t-filler,tui-textfield select:defined:read-only~.t-filler{display:none}tui-textfield input:defined:disabled~label,tui-textfield select:defined:disabled~label,tui-textfield input:defined:disabled~.t-content,tui-textfield select:defined:disabled~.t-content{opacity:var(--tui-disabled-opacity)}tui-textfield input:defined:disabled~label>tui-icon,tui-textfield select:defined:disabled~label>tui-icon,tui-textfield input:defined:disabled~.t-content>tui-icon,tui-textfield select:defined:disabled~.t-content>tui-icon{display:none}tui-textfield input:defined:-webkit-autofill~label,tui-textfield select:defined:-webkit-autofill~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown)~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown)~label{font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:-webkit-autofill:not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled)[data-mode~=invalid]~label,tui-textfield input:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:-webkit-autofill:invalid:not(:disabled):not([data-mode])~label,tui-textfield input:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label,tui-textfield select:defined:not(._empty):not(:placeholder-shown):invalid:not(:disabled):not([data-mode])~label{color:var(--tui-text-negative)}tui-textfield input:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:-webkit-autofill:not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield input:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear,tui-textfield select:defined:not(._empty):not(:placeholder-shown):not(:disabled):not([data-mode~=readonly])~.t-content .t-clear{display:flex}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])::placeholder,tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label,tui-textfield select:defined:not([data-mode~=readonly]):focus-visible:not([data-focus=false])~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]._empty,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[data-focus=true]~label,tui-textfield select:defined:not([data-mode~=readonly])[data-focus=true]~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused::placeholder,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)._empty,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused._empty{color:var(--tui-text-tertiary)}tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]:not(._focused):has(:focus-visible)~label,tui-textfield input:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label,tui-textfield select:defined:not([data-mode~=readonly])[tuiWrapper]._focused~label{color:var(--tui-text-primary)!important;font-size:.83em;transform:translateY(-.7em)}@supports (-webkit-touch-callout: none){tui-textfield input:defined._ios-fix,tui-textfield select:defined._ios-fix{position:fixed;left:1000rem}}tui-textfield label:not([data-orientation=vertical]){transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;display:block;flex:1;font-size:inherit}tui-textfield label:defined,tui-textfield input:defined::placeholder,tui-textfield select:defined._empty{color:var(--tui-text-secondary)}tui-textfield select:not([data-mode~=readonly]){cursor:pointer}tui-textfield button,tui-textfield a{pointer-events:auto}tui-textfield .t-content{display:flex;align-items:center;gap:.25rem;margin-inline-start:auto;isolation:isolate}tui-textfield .t-content>tui-icon{pointer-events:auto}tui-textfield .t-clear{display:none;pointer-events:auto}tui-textfield .t-filler:defined{pointer-events:none;background:none;color:var(--tui-text-tertiary);opacity:1}tui-textfield [tuiFluidTypography]{font-weight:700}\n']
    }]
  }], null, {
    directive: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective)]
    }],
    label: [{
      type: ContentChild,
      args: [forwardRef(() => TuiLabel), {
        read: ElementRef
      }]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    vcr: [{
      type: ViewChild,
      args: ["vcr", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    input: [{
      type: ContentChild,
      args: [forwardRef(() => TuiTextfieldDirective), {
        read: ElementRef,
        static: true
      }]
    }],
    stringify: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    fillerSetter: [{
      type: Input,
      args: ["filler"]
    }]
  });
})();
var TuiTextfieldBase = class _TuiTextfieldBase {
  constructor() {
    this.focused = signal(null);
    this.control = inject(NgControl, {
      optional: true
    });
    this.a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    this.s = tuiAppearanceState(null);
    this.m = tuiAppearanceMode(this.mode);
    this.f = tuiAppearanceFocus(computed(() => this.focused() || this.textfield.focused()));
    this.el = tuiInjectElement();
    this.textfield = inject(TuiTextfieldComponent);
    this.readOnly = false;
    this.invalid = null;
    this.nativeValue = toSignal(merge(fromEvent(this.el, "input"), timer(0).pipe(switchMap(() => tuiControlValue(this.control)))).pipe(map(() => this.el.value)), {
      initialValue: this.el.value
    });
  }
  set focusedSetter(focused) {
    this.focused.set(focused);
  }
  set stateSetter(state) {
    this.s.set(state);
  }
  get mode() {
    if (this.readOnly) {
      return "readonly";
    }
    if (this.invalid === false) {
      return "valid";
    }
    if (this.invalid) {
      return "invalid";
    }
    return null;
  }
  // TODO: refactor to signal inputs after Angular update
  ngOnChanges() {
    this.m.set(this.mode);
  }
  setValue(value) {
    this.el.focus();
    this.el.select();
    if (value == null) {
      this.el.ownerDocument.execCommand("delete");
    } else {
      this.el.ownerDocument.execCommand("insertText", false, this.textfield.stringify(value));
    }
  }
  static {
    this.ɵfac = function TuiTextfieldBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldBase)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldBase,
      inputs: {
        readOnly: "readOnly",
        invalid: "invalid",
        focusedSetter: [0, "focused", "focusedSetter"],
        stateSetter: [0, "state", "stateSetter"]
      },
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldBase, [{
    type: Directive
  }], null, {
    readOnly: [{
      type: Input
    }],
    invalid: [{
      type: Input
    }],
    focusedSetter: [{
      type: Input,
      args: ["focused"]
    }],
    stateSetter: [{
      type: Input,
      args: ["state"]
    }]
  });
})();
var TuiTextfieldDirective = class _TuiTextfieldDirective extends TuiTextfieldBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiTextfieldDirective_BaseFactory;
      return function TuiTextfieldDirective_Factory(__ngFactoryType__) {
        return (ɵTuiTextfieldDirective_BaseFactory || (ɵTuiTextfieldDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiTextfieldDirective)))(__ngFactoryType__ || _TuiTextfieldDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldDirective,
      selectors: [["input", "tuiTextfield", ""]],
      hostVars: 4,
      hostBindings: function TuiTextfieldDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiTextfieldDirective_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiTextfieldDirective_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiTextfieldDirective_focusout_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id)("readOnly", ctx.readOnly);
          ɵɵclassProp("_empty", ctx.el.value === "");
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiTextfield]",
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[readOnly]": "readOnly",
        "[class._empty]": 'el.value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0"
      }
    }]
  }], null, null);
})();
var TuiSelect = class _TuiSelect extends TuiTextfieldBase {
  constructor() {
    super(...arguments);
    this.nav = inject(WA_NAVIGATOR);
    this.placeholder = "";
  }
  setValue(value) {
    this.control?.control?.setValue(value);
    this.el.dispatchEvent(new Event("input", {
      bubbles: true
    }));
  }
  focus() {
    this.el.classList.add("_ios-fix");
    this.el.focus();
    this.el.classList.remove("_ios-fix");
  }
  get value() {
    return this.textfield.stringify(this.control?.value ?? "");
  }
  onCopy() {
    return __async(this, null, function* () {
      yield this.nav.clipboard.writeText(this.value);
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSelect_BaseFactory;
      return function TuiSelect_Factory(__ngFactoryType__) {
        return (ɵTuiSelect_BaseFactory || (ɵTuiSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiSelect)))(__ngFactoryType__ || _TuiSelect);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSelect,
      selectors: [["select", "tuiTextfield", ""]],
      hostVars: 3,
      hostBindings: function TuiSelect_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSelect_input_HostBindingHandler() {
            return 0;
          })("focusin", function TuiSelect_focusin_HostBindingHandler() {
            return 0;
          })("focusout", function TuiSelect_focusout_HostBindingHandler() {
            return 0;
          })("keydown.space.prevent", function TuiSelect_keydown_space_prevent_HostBindingHandler() {
            return 0;
          })("keydown.enter.prevent", function TuiSelect_keydown_enter_prevent_HostBindingHandler() {
            return 0;
          })("keydown.backspace", function TuiSelect_keydown_backspace_HostBindingHandler() {
            return ctx.setValue("");
          })("mousedown.prevent", function TuiSelect_mousedown_prevent_HostBindingHandler() {
            return ctx.focus();
          })("keydown.control.c", function TuiSelect_keydown_control_c_HostBindingHandler() {
            return ctx.onCopy();
          })("keydown.meta.c", function TuiSelect_keydown_meta_c_HostBindingHandler() {
            return ctx.onCopy();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("id", ctx.textfield.id);
          ɵɵclassProp("_empty", ctx.value === "");
        }
      },
      inputs: {
        placeholder: "placeholder"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TuiTextfieldDirective, _TuiSelect)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiAppearance]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c4,
      decls: 3,
      vars: 2,
      consts: [["selected", ""], ["disabled", "", "selected", "", "value", "", 4, "ngIf", "ngIfElse"], ["disabled", "", "selected", "", "value", ""], ["selected", "", 3, "value", 4, "ngFor", "ngForOf"], ["selected", "", 3, "value"]],
      template: function TuiSelect_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiSelect_option_0_Template, 2, 1, "option", 1)(1, TuiSelect_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const selected_r3 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.placeholder && !ctx.value)("ngIfElse", selected_r3);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSelect, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "select[tuiTextfield]",
      imports: [CommonModule],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [tuiProvide(TuiTextfieldDirective, TuiSelect)],
      hostDirectives: [TuiNativeValidator, TuiAppearance],
      host: {
        "[id]": "textfield.id",
        "[class._empty]": 'value === ""',
        "(input)": "0",
        "(focusin)": "0",
        "(focusout)": "0",
        "(keydown.space.prevent)": "0",
        "(keydown.enter.prevent)": "0",
        "(keydown.backspace)": 'setValue("")',
        "(mousedown.prevent)": "focus()",
        "(keydown.control.c)": "onCopy()",
        "(keydown.meta.c)": "onCopy()"
      },
      template: '<option\n    *ngIf="placeholder && !value; else selected"\n    disabled\n    selected\n    value=""\n>\n    {{ placeholder }}\n</option>\n<ng-template #selected>\n    <option\n        *ngFor="let item of [value]"\n        selected\n        [value]="item"\n    >\n        {{ item }}\n    </option>\n</ng-template>\n'
    }]
  }], null, {
    placeholder: [{
      type: Input
    }]
  });
})();
var TuiTextfield = [TuiLabel, TuiSelect, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTextfieldDropdownDirective];
var TuiTextfieldContent = class _TuiTextfieldContent {
  constructor() {
    inject(TuiTextfieldComponent).vcr?.createEmbeddedView(inject(TemplateRef));
  }
  static {
    this.ɵfac = function TuiTextfieldContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTextfieldContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTextfieldContent,
      selectors: [["ng-template", "tuiTextfieldContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTextfieldContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiTextfieldContent]"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-hovered.mjs
function movedOut({
  currentTarget,
  relatedTarget
}) {
  return !tuiIsElement(relatedTarget) || !tuiIsElement(currentTarget) || !currentTarget.contains(relatedTarget);
}
var TuiHoveredService = class _TuiHoveredService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.stream$ = merge(
      tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_TRUE_HANDLER)),
      tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_FALSE_HANDLER)),
      // Hello, Safari
      tuiTypedFromEvent(this.el, "mouseout").pipe(filter(movedOut), map(TUI_FALSE_HANDLER))
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));
  }
  static {
    this.ɵfac = function TuiHoveredService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHoveredService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHoveredService,
      factory: _TuiHoveredService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHoveredService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiHovered = class _TuiHovered {
  constructor() {
    this.tuiHoveredChange = inject(TuiHoveredService);
  }
  static {
    this.ɵfac = function TuiHovered_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHovered)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHovered,
      selectors: [["", "tuiHoveredChange", ""]],
      outputs: {
        tuiHoveredChange: "tuiHoveredChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiHoveredService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHovered, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHoveredChange]",
      providers: [TuiHoveredService]
    }]
  }], null, {
    tuiHoveredChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-hint.mjs
function TuiHintUnstyledComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c07 = ["*"];
function TuiHintComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
var _c14 = (a0) => ({
  $implicit: a0
});
function TuiHints_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiHints_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiHints_div_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const hint_r1 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0)("tuiActiveZoneParent", hint_r1.activeZone || null);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", hint_r1.component)("polymorpheusOutletContext", ɵɵpureFunction1(4, _c14, hint_r1));
  }
}
var TUI_HINT_COMPONENT = tuiCreateTokenFromFactory(() => TuiHintComponent);
var TuiHintService = class _TuiHintService extends BehaviorSubject {
  constructor() {
    super([]);
  }
  add(directive) {
    this.next(this.value.concat(directive));
  }
  remove(directive) {
    if (this.value.includes(directive)) {
      this.next(this.value.filter((hint) => hint !== directive));
    }
  }
  static {
    this.ɵfac = function TuiHintService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiHintService,
      factory: _TuiHintService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiHintDriver = class _TuiHintDriver extends TuiDriverDirective {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintDriver_BaseFactory;
      return function TuiHintDriver_Factory(__ngFactoryType__) {
        return (ɵTuiHintDriver_BaseFactory || (ɵTuiHintDriver_BaseFactory = ɵɵgetInheritedFactory(_TuiHintDriver)))(__ngFactoryType__ || _TuiHintDriver);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDriver,
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDriver, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();
var TUI_HINT_DIRECTIONS = ["bottom-left", "bottom", "bottom-right", "top-left", "top", "top-right", "left-top", "left", "left-bottom", "right-top", "right", "right-bottom"];
var TUI_HINT_DEFAULT_OPTIONS = {
  direction: "bottom-left",
  showDelay: 500,
  hideDelay: 200,
  appearance: "",
  /** TODO @deprecated use {@link TUI_TOOLTIP_OPTIONS} instead **/
  icon: "@tui.circle-help"
};
var TUI_HINT_OPTIONS = tuiCreateToken(TUI_HINT_DEFAULT_OPTIONS);
var tuiHintOptionsProvider = (override) => ({
  provide: TUI_HINT_OPTIONS,
  deps: [[new Optional(), new Self(), TuiHintOptionsDirective], [new Optional(), new SkipSelf(), TUI_HINT_OPTIONS]],
  useFactory: tuiOverrideOptions(override, TUI_HINT_DEFAULT_OPTIONS)
});
var TuiHintOptionsDirective = class _TuiHintOptionsDirective {
  constructor() {
    this.options = inject(TUI_HINT_OPTIONS, {
      skipSelf: true
    });
    this.direction = this.options.direction;
    this.appearance = this.options.appearance;
    this.showDelay = this.options.showDelay;
    this.hideDelay = this.options.hideDelay;
    this.icon = this.options.icon;
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiHintOptionsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOptionsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOptionsDirective,
      selectors: [["", "tuiHintContent", ""]],
      inputs: {
        content: [0, "tuiHintContent", "content"],
        direction: [0, "tuiHintDirection", "direction"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        showDelay: [0, "tuiHintShowDelay", "showDelay"],
        hideDelay: [0, "tuiHintHideDelay", "hideDelay"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_HINT_OPTIONS, _TuiHintOptionsDirective)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOptionsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintContent]",
      providers: [tuiProvide(TUI_HINT_OPTIONS, TuiHintOptionsDirective)]
    }]
  }], null, {
    content: [{
      type: Input,
      args: ["tuiHintContent"]
    }],
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    showDelay: [{
      type: Input,
      args: ["tuiHintShowDelay"]
    }],
    hideDelay: [{
      type: Input,
      args: ["tuiHintHideDelay"]
    }]
  });
})();
var TuiHintHover = class _TuiHintHover extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.isMobile = inject(TUI_IS_MOBILE);
    this.el = tuiInjectElement();
    this.hovered$ = inject(TuiHoveredService);
    this.options = inject(TUI_HINT_OPTIONS);
    this.visible = false;
    this.toggle$ = new Subject();
    this.stream$ = merge(this.toggle$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? 0 : this.tuiHintHideDelay))), takeUntil(this.hovered$), repeat()), this.hovered$.pipe(switchMap((visible) => this.isMobile ? of(visible) : of(visible).pipe(delay(visible ? this.tuiHintShowDelay : this.tuiHintHideDelay))), takeUntil(this.toggle$), repeat())).pipe(filter(() => this.enabled), map((value) => value && (this.el.hasAttribute("tuiHintPointer") || !tuiIsObscured(this.el))), tap((visible) => {
      this.visible = visible;
    }));
    this.parent = inject(_TuiHintHover, {
      optional: true,
      skipSelf: true
    });
    this.tuiHintShowDelay = this.options.showDelay;
    this.tuiHintHideDelay = this.options.hideDelay;
    this.type = "hint";
    this.enabled = true;
  }
  toggle(visible = !this.visible) {
    this.toggle$.next(visible);
    this.parent?.toggle(visible);
  }
  static {
    this.ɵfac = function TuiHintHover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintHover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHover,
      inputs: {
        tuiHintShowDelay: "tuiHintShowDelay",
        tuiHintHideDelay: "tuiHintHideDelay"
      },
      exportAs: ["tuiHintHover"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintHover), TuiHoveredService]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHover, [{
    type: Directive,
    args: [{
      standalone: true,
      providers: [tuiAsDriver(TuiHintHover), TuiHoveredService],
      exportAs: "tuiHintHover"
    }]
  }], function() {
    return [];
  }, {
    tuiHintShowDelay: [{
      type: Input
    }],
    tuiHintHideDelay: [{
      type: Input
    }]
  });
})();
var GAP$1 = 8;
var ARROW_OFFSET = 24;
var TOP = 0;
var LEFT = 1;
var TuiHintPosition = class _TuiHintPosition extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.offset = inject(TUI_IS_MOBILE) ? 16 : 8;
    this.viewport = inject(TUI_VIEWPORT);
    this.accessor = tuiFallbackAccessor("hint")(inject(TuiRectAccessor), inject(TuiHintDirective));
    this.points = TUI_HINT_DIRECTIONS.reduce((acc, direction) => __spreadProps(__spreadValues({}, acc), {
      [direction]: [0, 0]
    }), {});
    this.direction = inject(TUI_HINT_OPTIONS).direction;
    this.type = "hint";
  }
  getPosition(rect2, el) {
    const width = el?.clientWidth ?? rect2.width;
    const height = el?.clientHeight ?? rect2.height;
    const hostRect = this.accessor.getClientRect() ?? EMPTY_CLIENT_RECT;
    const leftCenter = hostRect.left + hostRect.width / 2;
    const topCenter = hostRect.top + hostRect.height / 2;
    this.points["top-left"][TOP] = hostRect.top - height - this.offset;
    this.points["top-left"][LEFT] = leftCenter - width + ARROW_OFFSET;
    this.points.top[TOP] = this.points["top-left"][TOP];
    this.points.top[LEFT] = leftCenter - width / 2;
    this.points["top-right"][TOP] = this.points["top-left"][TOP];
    this.points["top-right"][LEFT] = leftCenter - ARROW_OFFSET;
    this.points["bottom-left"][TOP] = hostRect.bottom + this.offset;
    this.points["bottom-left"][LEFT] = this.points["top-left"][LEFT];
    this.points.bottom[TOP] = this.points["bottom-left"][TOP];
    this.points.bottom[LEFT] = this.points.top[LEFT];
    this.points["bottom-right"][TOP] = this.points["bottom-left"][TOP];
    this.points["bottom-right"][LEFT] = this.points["top-right"][LEFT];
    this.points["left-top"][TOP] = topCenter - height + ARROW_OFFSET;
    this.points["left-top"][LEFT] = hostRect.left - width - this.offset;
    this.points.left[TOP] = topCenter - height / 2;
    this.points.left[LEFT] = this.points["left-top"][LEFT];
    this.points["left-bottom"][TOP] = topCenter - ARROW_OFFSET;
    this.points["left-bottom"][LEFT] = this.points["left-top"][LEFT];
    this.points["right-top"][TOP] = this.points["left-top"][TOP];
    this.points["right-top"][LEFT] = hostRect.right + this.offset;
    this.points.right[TOP] = this.points.left[TOP];
    this.points.right[LEFT] = this.points["right-top"][LEFT];
    this.points["right-bottom"][TOP] = this.points["left-bottom"][TOP];
    this.points["right-bottom"][LEFT] = this.points["right-top"][LEFT];
    if (this.checkPosition(this.points[this.direction], width, height)) {
      return this.points[this.direction];
    }
    const direction = TUI_HINT_DIRECTIONS.find((direction2) => this.checkPosition(this.points[direction2], width, height));
    return this.points[direction || this.fallback];
  }
  get fallback() {
    return this.points.top[TOP] > this.viewport.getClientRect().bottom - this.points.bottom[TOP] ? "top" : "bottom";
  }
  checkPosition([top, left], width, height) {
    const viewport = this.viewport.getClientRect();
    return top > GAP$1 && left > GAP$1 && top + height < viewport.bottom - GAP$1 && left + width < viewport.right - GAP$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPosition_BaseFactory;
      return function TuiHintPosition_Factory(__ngFactoryType__) {
        return (ɵTuiHintPosition_BaseFactory || (ɵTuiHintPosition_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPosition)))(__ngFactoryType__ || _TuiHintPosition);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPosition,
      inputs: {
        direction: [0, "tuiHintDirection", "direction"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPosition, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    direction: [{
      type: Input,
      args: ["tuiHintDirection"]
    }]
  });
})();
var TuiHintDirective = class _TuiHintDirective {
  constructor() {
    this.service = inject(TuiHintService);
    this.appearance = inject(TUI_HINT_OPTIONS).appearance;
    this.content = signal(null);
    this.component = inject(PolymorpheusComponent);
    this.el = tuiInjectElement();
    this.activeZone = inject(TuiActiveZone, {
      optional: true
    });
    this.type = "hint";
  }
  set tuiHint(content) {
    this.content.set(content);
    if (!content) {
      this.toggle(false);
    }
  }
  ngOnDestroy() {
    this.toggle(false);
  }
  getClientRect() {
    return this.el.getBoundingClientRect();
  }
  toggle(show) {
    if (show && this.content()) {
      this.service.add(this);
    } else {
      this.service.remove(this);
    }
  }
  static {
    this.ɵfac = function TuiHintDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDirective,
      selectors: [["", "tuiHint", "", 5, "ng-container", 5, "ng-template"]],
      inputs: {
        context: [0, "tuiHintContext", "context"],
        appearance: [0, "tuiHintAppearance", "appearance"],
        tuiHint: "tuiHint"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintDirective), tuiAsVehicle(_TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }]), ɵɵHostDirectivesFeature([TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintHideDelay", "tuiHintShowDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection", "tuiHintDirection"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint]:not(ng-container):not(ng-template)",
      providers: [tuiAsRectAccessor(TuiHintDirective), tuiAsVehicle(TuiHintDirective), {
        provide: PolymorpheusComponent,
        deps: [TUI_HINT_COMPONENT, INJECTOR$1],
        useClass: PolymorpheusComponent
      }],
      hostDirectives: [TuiHintDriver, {
        directive: TuiHintHover,
        inputs: ["tuiHintHideDelay", "tuiHintShowDelay"]
      }, {
        directive: TuiHintPosition,
        inputs: ["tuiHintDirection"]
      }]
    }]
  }], null, {
    context: [{
      type: Input,
      args: ["tuiHintContext"]
    }],
    appearance: [{
      type: Input,
      args: ["tuiHintAppearance"]
    }],
    tuiHint: [{
      type: Input
    }]
  });
})();
var TuiHintPointer = class _TuiHintPointer extends TuiHintHover {
  constructor() {
    super(...arguments);
    this.currentRect = EMPTY_CLIENT_RECT;
  }
  getClientRect() {
    return this.currentRect;
  }
  onMove({
    clientX,
    clientY
  }) {
    this.currentRect = tuiPointToClientRect(clientX, clientY);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintPointer_BaseFactory;
      return function TuiHintPointer_Factory(__ngFactoryType__) {
        return (ɵTuiHintPointer_BaseFactory || (ɵTuiHintPointer_BaseFactory = ɵɵgetInheritedFactory(_TuiHintPointer)))(__ngFactoryType__ || _TuiHintPointer);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintPointer,
      selectors: [["", "tuiHint", "", "tuiHintPointer", ""]],
      hostBindings: function TuiHintPointer_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousemove.silent", function TuiHintPointer_mousemove_silent_HostBindingHandler($event) {
            return ctx.onMove($event);
          });
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintPointer), tuiAsDriver(_TuiHintPointer)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintPointer, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintPointer]",
      providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
      host: {
        "(mousemove.silent)": "onMove($event)"
      }
    }]
  }], null, null);
})();
var TuiHintUnstyledComponent = class _TuiHintUnstyledComponent {
  constructor() {
    this.context = injectContext();
  }
  static {
    this.ɵfac = function TuiHintUnstyledComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyledComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintUnstyledComponent,
      selectors: [["ng-component"]],
      hostVars: 1,
      hostBindings: function TuiHintUnstyledComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiParentAnimation", void 0);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiHintUnstyledComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHintUnstyledComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.context.$implicit.content);
        }
      },
      dependencies: [PolymorpheusOutlet],
      encapsulation: 2,
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyledComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet],
      template: '<ng-container *polymorpheusOutlet="context.$implicit.content" />',
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[@tuiParentAnimation]": ""
      }
    }]
  }], null, null);
})();
var TuiHintUnstyled = class _TuiHintUnstyled {
  constructor() {
    const hint = inject(TuiHintDirective);
    hint.component = new PolymorpheusComponent(TuiHintUnstyledComponent);
    hint.content.set(inject(TemplateRef));
  }
  static {
    this.ɵfac = function TuiHintUnstyled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintUnstyled)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintUnstyled,
      selectors: [["ng-template", "tuiHint", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintUnstyled, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiHint]"
    }]
  }], function() {
    return [];
  }, null);
})();
var GAP = 8;
var TUI_HINT_PROVIDERS = [TuiPositionService, TuiHoveredService, tuiPositionAccessorFor("hint", TuiHintPosition), tuiRectAccessorFor("hint", TuiHintDirective)];
var TuiHintComponent = class _TuiHintComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.hover = inject(TuiHintHover);
    this.vvs = inject(TuiVisualViewportService);
    this.viewport = inject(TUI_VIEWPORT);
    this.desktop = {
      value: "",
      params: {
        end: 1,
        start: 1
      }
    };
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED), "cubic-bezier(0.35, 1.3, 0.25, 1)");
    this.pointer = inject(TuiHintPointer, {
      optional: true
    });
    this.accessor = inject(TuiRectAccessor);
    this.hint = injectContext().$implicit;
    this.isMobile = inject(TUI_IS_MOBILE);
    this.content = this.hint.component.component === TuiHintUnstyledComponent ? signal("") : this.hint.content;
    this.appearance = this.hint.appearance || this.hint.el.closest("[tuiTheme]")?.getAttribute("tuiTheme");
    inject(TuiPositionService).pipe(takeWhile(() => this.hint.el.isConnected), map((point) => this.vvs.correct(point)), takeUntilDestroyed()).subscribe({
      next: ([top, left]) => this.update(top, left),
      complete: () => this.hover.toggle(false)
    });
    inject(TuiHoveredService).pipe(takeUntilDestroyed()).subscribe((hover) => this.hover.toggle(hover));
  }
  onClick(target) {
    if (!target.closest("tui-hint") && !this.hint.el.contains(target) || tuiIsObscured(this.hint.el)) {
      this.hover.toggle(false);
    }
  }
  apply(top, left, beakTop, beakLeft) {
    this.el.style.top = top;
    this.el.style.left = left;
    this.el.style.setProperty("--top", `${beakTop}%`);
    this.el.style.setProperty("--left", `${beakLeft}%`);
    this.el.style.setProperty("--rotate", !beakLeft || Math.ceil(beakLeft) === 100 ? "90deg" : "0deg");
  }
  update(top, left) {
    const {
      clientHeight,
      clientWidth
    } = this.el;
    const rect2 = this.accessor.getClientRect();
    const viewport = this.viewport.getClientRect();
    if (rect2 === EMPTY_CLIENT_RECT || !clientHeight || !clientWidth) {
      return;
    }
    const safeLeft = tuiClamp(left, GAP, viewport.width - clientWidth - GAP);
    const [beakTop, beakLeft] = this.vvs.correct([rect2.top + rect2.height / 2 - top, rect2.left + rect2.width / 2 - safeLeft]);
    this.apply(tuiPx(Math.round(top)), tuiPx(Math.round(safeLeft)), Math.round(tuiClamp(beakTop, 0, clientHeight) / clientHeight * 100), Math.round(tuiClamp(beakLeft, 0, clientWidth) / clientWidth * 100));
  }
  static {
    this.ɵfac = function TuiHintComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHintComponent,
      selectors: [["tui-hint"]],
      hostVars: 8,
      hostBindings: function TuiHintComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiHintComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiScaleIn", ctx.isMobile ? ctx.options : ctx.desktop)("@tuiFadeIn", ctx.options);
          ɵɵattribute("data-appearance", ctx.appearance)("tuiTheme", ctx.appearance);
          ɵɵclassProp("_untouchable", ctx.pointer)("_mobile", ctx.isMobile);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_HINT_PROVIDERS), ɵɵStandaloneFeature],
      ngContentSelectors: _c07,
      decls: 2,
      vars: 2,
      consts: [[3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "innerHTML"]],
      template: function TuiHintComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiHintComponent_span_1_Template, 1, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content())("polymorpheusOutletContext", ctx.hint.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: [`[_nghost-%COMP%]{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}._mobile[_nghost-%COMP%]{font:var(--tui-font-text-m)}._mobile[_nghost-%COMP%]:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-status-negative)}[data-appearance=dark][_nghost-%COMP%]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*=top]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}`],
      data: {
        animation: [tuiFadeIn, tuiScaleIn]
      },
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiHintComponent.prototype, "apply", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hint",
      imports: [PolymorpheusOutlet],
      template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context"
            [innerHTML]="text"
        ></span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_HINT_PROVIDERS,
      animations: [tuiFadeIn, tuiScaleIn],
      host: {
        "[@tuiScaleIn]": "isMobile ? options : desktop",
        "[@tuiFadeIn]": "options",
        "[class._untouchable]": "pointer",
        "[class._mobile]": "isMobile",
        "[attr.data-appearance]": "appearance",
        "[attr.tuiTheme]": "appearance",
        "(document:click)": "onClick($event.target)"
      },
      styles: [`:host{position:absolute;max-inline-size:18rem;padding:.75rem 1rem;background:var(--tui-background-accent-1);border-radius:var(--tui-radius-l);color:var(--tui-text-primary-on-accent-1);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;overflow-wrap:break-word;transform-origin:var(--left) var(--top)}:host:before{content:"";position:absolute;top:var(--top);left:var(--left);inline-size:.75rem;block-size:.5rem;background:inherit;-webkit-mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');mask-image:url('data:image/svg+xml,<svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"><path d="M3.61336 1.69607L2.44882 2.96493C1.84795 3.61964 0.949361 3.99951 0.00053941 4C0.000359608 4 0.000179805 4 0 4C0.000179863 4 0.000359764 4 0.000539623 4C0.949362 4.00049 1.84795 4.38036 2.44882 5.03506L3.61336 6.30394C4.55981 7.33517 5.03303 7.85079 5.63254 7.96535C5.87433 8.01155 6.12436 8.01155 6.36616 7.96535C6.96567 7.85079 7.43889 7.33517 8.38534 6.30393L9.54988 5.03507C10.1511 4.37994 11.0505 4 12 4C11.0505 4 10.1511 3.62006 9.54988 2.96493L8.38534 1.69606C7.43889 0.664826 6.96567 0.149207 6.36616 0.0346517C6.12436 -0.0115506 5.87433 -0.0115506 5.63254 0.0346517C5.03303 0.149207 4.55981 0.664827 3.61336 1.69607Z" /></svg>');transform:translate(-50%,-50%) rotate(var(--rotate))}:host._mobile{font:var(--tui-font-text-m)}:host._mobile:before{inline-size:1.5rem;block-size:1.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path d="M7.22854 3.81615L4.89971 6.6711C3.69732 8.14514 1.8988 9 0 9C1.8988 9 3.69732 9.85486 4.89971 11.3289L7.22854 14.1839L7.22854 14.1839C9.12123 16.5041 10.0676 17.6643 11.2665 17.922C11.75 18.026 12.25 18.026 12.7335 17.922C13.9324 17.6643 14.8788 16.5041 16.7715 14.1839L19.1003 11.3289C20.3027 9.85486 22.1012 9 24 9C22.1012 9 20.3027 8.14514 19.1003 6.6711L16.7715 3.81614C14.8788 1.49586 13.9324 0.335716 12.7335 0.0779663C12.25 -0.0259888 11.75 -0.0259888 11.2665 0.0779663C10.0676 0.335716 9.12123 1.49586 7.22854 3.81614L7.22854 3.81615Z" /></svg>')}:host[data-appearance=error]{background:var(--tui-status-negative)}:host[data-appearance=dark]{background:var(--tui-background-accent-opposite-hover);color:var(--tui-background-base);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}:host:not([style*=top]){visibility:hidden}:host._untouchable{pointer-events:none}
`]
    }]
  }], function() {
    return [];
  }, {
    apply: []
  });
})();
var TuiHintDescribe = class _TuiHintDescribe extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.zone = inject(NgZone);
    this.id$ = new BehaviorSubject("");
    this.stream$ = this.id$.pipe(distinctUntilChanged(), tuiIfMap(() => fromEvent(this.doc, "keydown", {
      capture: true
    }), tuiIsPresent), switchMap(() => this.focused ? of(false) : merge(tuiTypedFromEvent(this.doc, "keyup"), tuiTypedFromEvent(this.element, "blur")).pipe(map(() => this.focused))), debounce((visible) => visible ? timer(1e3, tuiZonefreeScheduler(this.zone)) : of(null)), startWith(false), distinctUntilChanged(), skip(1), tuiZoneOptimized());
    this.type = "hint";
  }
  set tuiHintDescribe(id) {
    this.id$.next(id || "");
  }
  get element() {
    return this.doc.getElementById(this.id$.value || "") || this.el;
  }
  get focused() {
    return tuiIsNativeFocused(this.element);
  }
  static {
    this.ɵfac = function TuiHintDescribe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintDescribe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintDescribe,
      selectors: [["", "tuiHintDescribe", ""]],
      inputs: {
        tuiHintDescribe: "tuiHintDescribe"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintDescribe)]), ɵɵInheritDefinitionFeature]
    });
  }
};
__decorate([tuiPure], TuiHintDescribe.prototype, "element", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintDescribe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintDescribe]",
      providers: [tuiAsDriver(TuiHintDescribe)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintDescribe: [{
      type: Input
    }],
    element: []
  });
})();
var TuiHintHost = class _TuiHintHost extends TuiRectAccessor {
  constructor() {
    super(...arguments);
    this.type = "hint";
  }
  getClientRect() {
    return this.tuiHintHost?.getBoundingClientRect() || EMPTY_CLIENT_RECT;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiHintHost_BaseFactory;
      return function TuiHintHost_Factory(__ngFactoryType__) {
        return (ɵTuiHintHost_BaseFactory || (ɵTuiHintHost_BaseFactory = ɵɵgetInheritedFactory(_TuiHintHost)))(__ngFactoryType__ || _TuiHintHost);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintHost,
      selectors: [["", "tuiHint", "", "tuiHintHost", ""]],
      inputs: {
        tuiHintHost: "tuiHintHost"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsRectAccessor(_TuiHintHost)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintHost, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintHost]",
      providers: [tuiAsRectAccessor(TuiHintHost)]
    }]
  }], null, {
    tuiHintHost: [{
      type: Input
    }]
  });
})();
var TuiHintManual = class _TuiHintManual extends TuiDriver {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.hover = inject(TuiHintHover);
    this.stream$ = new BehaviorSubject(false);
    this.tuiHintManual = false;
    this.type = "hint";
    this.hover.enabled = false;
  }
  ngOnChanges() {
    this.stream$.next(this.tuiHintManual);
  }
  static {
    this.ɵfac = function TuiHintManual_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintManual)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintManual,
      selectors: [["", "tuiHint", "", "tuiHintManual", ""]],
      inputs: {
        tuiHintManual: "tuiHintManual"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDriver(_TuiHintManual)]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintManual, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHint][tuiHintManual]",
      providers: [tuiAsDriver(TuiHintManual)]
    }]
  }], function() {
    return [];
  }, {
    tuiHintManual: [{
      type: Input
    }]
  });
})();
var TuiHintOverflow = class _TuiHintOverflow {
  constructor() {
    this.hint = inject(TuiHintDirective);
  }
  onMouseEnter({
    scrollWidth,
    clientWidth,
    textContent
  }) {
    this.hint.tuiHint = scrollWidth > clientWidth ? textContent : "";
  }
  static {
    this.ɵfac = function TuiHintOverflow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintOverflow)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintOverflow,
      selectors: [["", "tuiHintOverflow", ""]],
      hostBindings: function TuiHintOverflow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function TuiHintOverflow_mouseenter_HostBindingHandler($event) {
            return ctx.onMouseEnter($event.currentTarget);
          });
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintOverflow, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintOverflow]",
      hostDirectives: [{
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance"]
      }],
      host: {
        "(mouseenter)": "onMouseEnter($event.currentTarget)"
      }
    }]
  }], null, null);
})();
var TuiHint = [TuiHintComponent, TuiHintDirective, TuiHintOptionsDirective, TuiHintUnstyled, TuiHintDriver, TuiHintPosition, TuiHintHover, TuiHintOverflow, TuiHintDescribe, TuiHintHost, TuiHintManual, TuiHintPointer];
var TuiHints = class _TuiHints {
  constructor() {
    this.hints$ = inject(TuiHintService);
    this.destroyRef = inject(DestroyRef);
    this.cdr = inject(ChangeDetectorRef);
    this.hints = [];
  }
  ngOnInit() {
    this.hints$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hints) => {
      this.hints = hints;
      this.cdr.detectChanges();
    });
  }
  static {
    this.ɵfac = function TuiHints_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHints)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHints,
      selectors: [["tui-hints"]],
      hostAttrs: ["aria-live", "polite"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["role", "tooltip", 3, "tuiActiveZoneParent", 4, "ngFor", "ngForOf"], ["role", "tooltip", 3, "tuiActiveZoneParent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiHints_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiHints_div_0_Template, 2, 6, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.hints);
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiActiveZone],
      styles: ["[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}"],
      data: {
        animation: [tuiParentAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHints, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-hints",
      imports: [NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiActiveZone],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      host: {
        "aria-live": "polite"
      },
      template: '<div\n    *ngFor="let hint of hints"\n    role="tooltip"\n    @tuiParentAnimation\n    [tuiActiveZoneParent]="hint.activeZone || null"\n>\n    <ng-container *polymorpheusOutlet="hint.component; context: {$implicit: hint}" />\n</div>\n',
      styles: [":host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;block-size:0}\n"]
    }]
  }], null, null);
})();

export {
  EMPTY_QUERY,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  TUI_FALSE_HANDLER,
  TUI_TRUE_HANDLER,
  TUI_DEFAULT_MATCHER,
  TUI_STRICT_MATCHER,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_NON_DIGITS_REGEXP,
  svgNodeFilter,
  CHAR_NO_BREAK_SPACE,
  CHAR_EN_DASH,
  CHAR_HYPHEN,
  CHAR_MINUS,
  CHAR_PLUS,
  TUI_VERSION,
  tuiClamp,
  tuiInRange,
  tuiQuantize,
  tuiRound,
  tuiToInt,
  tuiArrayRemove,
  tuiArrayShallowEquals,
  tuiArrayToggle,
  changeDateSeparator,
  tuiIsControlEmpty,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiIsString,
  tuiDefaultSort,
  tuiDirectiveBinding,
  tuiDistanceBetweenTouches,
  tuiGetOriginalArrayFromQueryList,
  tuiIsFalsy,
  tuiIsNumber,
  tuiIsPresent,
  tuiNullableSame,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiWithStyles,
  tuiControlValue,
  tuiTypedFromEvent,
  tuiDragAndDropFrom,
  tuiPreventDefault,
  tuiIfMap,
  tuiQueryListChanges,
  tuiWatch,
  tuiZonefull,
  tuiZonefree,
  tuiZoneOptimized,
  tuiZonefreeScheduler,
  tuiParentAnimation,
  tuiParentStop,
  tuiHost,
  tuiHeightCollapse,
  tuiHeightCollapseList,
  tuiWidthCollapse,
  tuiWidthCollapseList,
  tuiFadeIn,
  tuiFadeInList,
  tuiFadeInTop,
  tuiFadeInBottom,
  tuiDropdownAnimation,
  tuiScaleIn,
  tuiPop,
  tuiScaleInList,
  tuiSlideIn,
  tuiSlideInLeft,
  tuiSlideInLeftList,
  tuiSlideInRight,
  tuiSlideInRightList,
  tuiSlideInTop,
  tuiSlideInTopList,
  tuiSlideInBottom,
  tuiSlideInBottomList,
  WA_WINDOW,
  WINDOW,
  WA_ANIMATION_FRAME,
  WA_NAVIGATOR,
  WA_PAGE_VISIBILITY,
  isApple,
  tuiGetGradientData,
  tuiHexToRgb,
  tuiHsvToRgb,
  tuiParseColor,
  tuiParseGradient,
  tuiToGradient,
  tuiRgbToHex,
  tuiRgbToHsv,
  tuiCreateOptions,
  tuiContainsOrAfter,
  tuiIsInput,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsInputEvent,
  tuiGetActualTarget,
  tuiGetClipboardDataText,
  tuiGetDocumentOrShadowRoot,
  tuiGetElementPoint,
  tuiInjectElement,
  tuiIsCurrentTarget,
  tuiRetargetedBoundaryCrossing,
  tuiGetNativeFocused,
  tuiBlurNativeFocused,
  tuiGetClosestFocusable,
  tuiIsNativeFocused,
  tuiIsNativeFocusedIn,
  tuiMoveFocus,
  TUI_BASE_HREF,
  TUI_IS_MOBILE,
  TUI_IS_IOS,
  TUI_PLATFORM,
  tuiFallbackValueProvider,
  TUI_WINDOW_SIZE,
  tuiIsEditingKey,
  tuiIsObscured,
  tuiOverrideOptions,
  tuiSizeBigger,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  tuiToAnimationOptions,
  tuiGetDuration,
  POLYMORPHEUS_CONTEXT,
  injectContext,
  PolymorpheusComponent,
  PolymorpheusTemplate,
  PolymorpheusOutlet,
  TUI_LOADER_DEFAULT_OPTIONS,
  TUI_LOADER_OPTIONS,
  tuiLoaderOptionsProvider,
  TuiLoader,
  tuiDateClamp,
  DAYS_IN_WEEK,
  MIN_YEAR,
  MAX_YEAR,
  RANGE_SEPARATOR_CHAR,
  HOURS_IN_DAY,
  DATE_FILLER_LENGTH,
  DATE_RANGE_FILLER_LENGTH,
  TuiYear,
  TuiMonth,
  TuiDay,
  TuiMonthRange,
  TuiDayRange,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TuiTime,
  tuiExtractI18n,
  TUI_REDUCED_MOTION,
  TUI_ANIMATIONS_SPEED,
  TUI_ASSETS_PATH,
  tuiAssetsPathProvider,
  TUI_COMMON_ICONS,
  tuiCommonIconsProvider,
  TUI_DARK_MODE_DEFAULT_KEY,
  TUI_DARK_MODE_KEY,
  TUI_DARK_MODE,
  TUI_DEFAULT_DATE_FORMAT,
  TUI_DATE_FORMAT,
  tuiDateFormatProvider,
  TUI_DAY_TYPE_HANDLER,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_MONTHS,
  TUI_CLOSE_WORD,
  TUI_CLEAR_WORD,
  TUI_NOTHING_FOUND_MESSAGE,
  TUI_DEFAULT_ERROR_MESSAGE,
  TUI_SPIN_TEXTS,
  TUI_SHORT_WEEK_DAYS,
  TUI_ICON_START,
  TUI_ICON_END,
  TUI_ICON_REGISTRY,
  TUI_ICON_STARTS,
  tuiIconsProvider,
  TUI_ICON_RESOLVER,
  TUI_ICON_START_RESOLVER,
  tuiInjectIconResolver,
  tuiIconResolverProvider,
  TUI_MEDIA,
  TUI_DEFAULT_NUMBER_FORMAT,
  TUI_NUMBER_FORMAT,
  tuiNumberFormatProvider,
  TUI_SCROLL_REF,
  TUI_SELECTION_STREAM,
  TUI_SPIN_ICONS,
  TUI_THEME,
  TUI_VIEWPORT,
  tuiAsViewport,
  TuiIcon,
  TuiIconPipe,
  TUI_APPEARANCE_DEFAULT_OPTIONS,
  TUI_APPEARANCE_OPTIONS,
  tuiAppearanceOptionsProvider,
  TuiAppearance,
  tuiAppearance,
  tuiAppearanceState,
  tuiAppearanceFocus,
  tuiAppearanceMode,
  TuiWithAppearance,
  TuiIcons,
  TuiWithIcons,
  TUI_BUTTON_DEFAULT_OPTIONS,
  TUI_BUTTON_OPTIONS,
  tuiButtonOptionsProvider,
  TuiButton,
  TuiValueTransformer,
  TuiControl,
  tuiAsControl,
  TuiPortals,
  TuiPortalService,
  tuiAsPortal,
  TuiValidationError,
  TuiActiveZone,
  TuiAccessor,
  TuiPositionAccessor,
  TuiRectAccessor,
  tuiProvideAccessor,
  tuiFallbackAccessor,
  tuiPositionAccessorFor,
  tuiRectAccessorFor,
  tuiAsPositionAccessor,
  tuiAsRectAccessor,
  TuiVehicle,
  tuiAsVehicle,
  TuiDriver,
  tuiAsDriver,
  TuiDriverDirective,
  tuiCheckFixedPosition,
  tuiGetViewportHeight,
  tuiGetViewportWidth,
  tuiGetWordRange,
  tuiNumberToStringWithoutExp,
  tuiGetFractionPartPadded,
  tuiFormatNumber,
  tuiStringHashToHsl,
  TuiScrollbarService,
  TuiScrollbarDirective,
  TUI_DEFAULT_SCROLLBAR_OPTIONS,
  TUI_SCROLLBAR_OPTIONS,
  tuiScrollbarOptionsProvider,
  TuiScrollControls,
  TUI_SCROLL_INTO_VIEW,
  TUI_SCROLLABLE,
  TuiScrollbar,
  TuiScrollIntoView,
  SCROLL_REF_SELECTOR,
  TuiScrollRef,
  TuiScrollable,
  TuiBreakpointService,
  TuiDarkThemeService,
  TuiFormatDateService,
  TuiPositionService,
  TuiVisualViewportService,
  TuiDropdownDriver,
  TuiDropdownDriverDirective,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_CONTEXT,
  TuiDropdownService,
  TUI_DROPDOWN_DEFAULT_OPTIONS,
  TUI_DROPDOWN_OPTIONS,
  tuiDropdownOptionsProvider,
  TuiDropdownOptionsDirective,
  TuiDropdownPosition,
  TuiDropdownDirective,
  TuiDropdownComponent,
  TuiDropdownContext,
  TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
  TUI_DROPDOWN_HOVER_OPTIONS,
  tuiDropdownHoverOptionsProvider,
  TuiDropdownOpen,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpenLegacy,
  TuiDropdownPortal,
  TuiDropdownPositionSided,
  TuiDropdownSelection,
  TuiDropdown,
  tuiDropdown,
  tuiDropdownOpen,
  TuiDropdownFixed,
  TuiDropdowns,
  TuiWithDropdownOpen,
  TUI_OPTION_CONTENT,
  tuiAsOptionContent,
  TUI_DATA_LIST_ACCESSOR,
  tuiAsDataListAccessor,
  TUI_DATA_LIST_HOST,
  tuiAsDataListHost,
  TuiOption,
  tuiInjectDataListSize,
  TuiDataListComponent,
  TuiDataListDirective,
  tuiAsDataList,
  TuiOptGroup,
  TuiDataList,
  TuiLabel,
  TuiNativeValidator,
  ResizeObserverService,
  WaResizeObserver,
  TuiIdService,
  tuiInjectId,
  TuiPopoverService,
  tuiAsPopover,
  TuiScrollService,
  TUI_TEXTFIELD_OPTIONS,
  tuiTextfieldOptionsProvider,
  TuiTextfieldOptionsDirective,
  TuiTextfieldDropdownDirective,
  TuiWithTextfieldDropdown,
  TuiTextfieldComponent,
  TuiTextfieldBase,
  TuiTextfieldDirective,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldContent,
  TuiHovered,
  TUI_HINT_COMPONENT,
  TuiHintService,
  TuiHintDriver,
  TUI_HINT_DIRECTIONS,
  TUI_HINT_DEFAULT_OPTIONS,
  TUI_HINT_OPTIONS,
  tuiHintOptionsProvider,
  TuiHintOptionsDirective,
  TuiHintHover,
  TuiHintPosition,
  TuiHintDirective,
  TuiHintPointer,
  TuiHintUnstyledComponent,
  TuiHintUnstyled,
  TUI_HINT_PROVIDERS,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintHost,
  TuiHintManual,
  TuiHintOverflow,
  TuiHint,
  TuiHints
};
//# sourceMappingURL=chunk-TJD5ECJX.js.map
