import {
  TuiMapperPipe,
  TuiPopoverDirective,
  coerceBooleanProperty,
  tuiLinkOptionsProvider
} from "./chunk-P47AVGYP.js";
import {
  POLYMORPHEUS_CONTEXT,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  TUI_ANIMATIONS_SPEED,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_TRUE_HANDLER,
  TuiBreakpointService,
  TuiButton,
  TuiIcons,
  TuiPopoverService,
  TuiScrollControls,
  TuiScrollRef,
  TuiWithAppearance,
  TuiWithIcons,
  WA_ANIMATION_FRAME,
  WA_WINDOW,
  injectContext,
  tuiAppearanceOptionsProvider,
  tuiAsPopover,
  tuiBlurNativeFocused,
  tuiButtonOptionsProvider,
  tuiContainsOrAfter,
  tuiCreateOptions,
  tuiCreateToken,
  tuiCreateTokenFromFactory,
  tuiFadeIn,
  tuiGetActualTarget,
  tuiGetClosestFocusable,
  tuiGetDuration,
  tuiGetNativeFocused,
  tuiGetViewportWidth,
  tuiHeightCollapse,
  tuiHost,
  tuiInjectElement,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsPresent,
  tuiIsString,
  tuiParentAnimation,
  tuiProvideOptions,
  tuiPx,
  tuiSlideIn,
  tuiSlideInTop,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWithStyles,
  tuiZonefreeScheduler
} from "./chunk-TJD5ECJX.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgComponentOutlet,
  NgForOf,
  NgIf
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  INJECTOR$1,
  Injectable,
  Injector,
  Input,
  NgZone,
  Renderer2,
  ViewEncapsulation$1,
  computed,
  inject,
  setClassMetadata,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4P5RU55L.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __spreadProps,
  __spreadValues,
  combineLatest,
  filter,
  fromEvent,
  identity,
  isObservable,
  map,
  merge,
  of,
  race,
  repeat,
  skipWhile,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  timer
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-auto-focus.mjs
var AbstractTuiAutofocusHandler = class {
  constructor(el, options) {
    this.el = el;
    this.options = options;
  }
  get element() {
    const el = this.el.nativeElement.tagName.includes("-") ? this.el.nativeElement.querySelector(this.options.query) : this.el.nativeElement;
    return el || this.el.nativeElement;
  }
  get isTextFieldElement() {
    return this.element.matches(this.options.query);
  }
};
var TIMEOUT = 1e3;
var NG_ANIMATION_SELECTOR = ".ng-animating";
var TuiDefaultAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, animationFrame$, zone, options) {
    super(el, options);
    this.animationFrame$ = animationFrame$;
    this.zone = zone;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      race(timer(this.options.delay || TIMEOUT), this.animationFrame$.pipe(throttleTime(100, tuiZonefreeScheduler(this.zone)), map(() => this.element.closest(NG_ANIMATION_SELECTOR)), skipWhile(Boolean), take(1))).subscribe(() => this.element.focus({
        preventScroll: this.options.preventScroll
      }));
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
};
var TEXTFIELD_ATTRS = ["type", "inputMode", "autocomplete", "accept", "min", "max", "step", "pattern", "size", "maxlength"];
var TuiIosAutofocusHandler = class extends AbstractTuiAutofocusHandler {
  constructor(el, renderer, zone, win, options) {
    super(el, options);
    this.renderer = renderer;
    this.zone = zone;
    this.win = win;
  }
  setFocus() {
    if (this.isTextFieldElement) {
      this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
    } else {
      this.element.focus({
        preventScroll: true
      });
    }
  }
  iosWebkitAutofocus() {
    const fakeInput = this.makeFakeInput();
    const duration = this.getDurationTimeBeforeFocus();
    let fakeFocusTimeoutId = 0;
    let elementFocusTimeoutId = 0;
    const blurHandler = () => fakeInput.focus({
      preventScroll: true
    });
    const focusHandler = () => {
      clearTimeout(fakeFocusTimeoutId);
      fakeFocusTimeoutId = this.win.setTimeout(() => {
        clearTimeout(elementFocusTimeoutId);
        fakeInput.removeEventListener("blur", blurHandler);
        fakeInput.removeEventListener("focus", focusHandler);
        elementFocusTimeoutId = this.win.setTimeout(() => {
          this.element.focus({
            preventScroll: this.options.preventScroll
          });
          fakeInput.remove();
        }, duration);
      });
    };
    fakeInput.addEventListener("blur", blurHandler, {
      once: true
    });
    fakeInput.addEventListener("focus", focusHandler);
    if (this.insideDialog()) {
      this.win.document.body.appendChild(fakeInput);
    } else {
      this.element.parentElement?.appendChild(fakeInput);
    }
    fakeInput.focus({
      preventScroll: true
    });
  }
  /**
   * @note:
   * emulate textfield position in layout with cursor
   * before focus to real textfield element
   *
   * required note:
   * [fakeInput.readOnly = true] ~
   * don't use {readOnly: true} value, it's doesn't work for emulate autofill
   *
   * [fakeInput.style.opacity = 0] ~
   * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
   *
   * [fakeInput.style.fontSize = 16px] ~
   * disable possible auto zoom
   *
   * [fakeInput.style.top/left] ~
   * emulate position cursor before focus to real textfield element
   */
  makeFakeInput() {
    const fakeInput = this.renderer.createElement("input");
    const rect = this.element.getBoundingClientRect();
    this.patchFakeInputFromFocusableElement(fakeInput);
    fakeInput.style.height = tuiPx(rect.height);
    fakeInput.style.width = tuiPx(rect.width / 2);
    fakeInput.style.position = "fixed";
    fakeInput.style.zIndex = "-99999999";
    fakeInput.style.caretColor = "transparent";
    fakeInput.style.border = "none";
    fakeInput.style.outline = "none";
    fakeInput.style.color = "transparent";
    fakeInput.style.background = "transparent";
    fakeInput.style.cursor = "none";
    fakeInput.style.fontSize = tuiPx(16);
    fakeInput.style.top = tuiPx(rect.top);
    fakeInput.style.left = tuiPx(rect.left);
    return fakeInput;
  }
  getDurationTimeBeforeFocus() {
    return parseFloat(this.win.getComputedStyle(this.element).getPropertyValue("--tui-duration")) || 0;
  }
  /**
   * @note:
   * unfortunately, in older versions of iOS
   * there is a bug that the fake input cursor
   * will move along with the dialog animation
   * and then that dialog will be shaking
   */
  insideDialog() {
    return !!this.element.closest("tui-dialog");
  }
  /**
   * @note:
   * inherit basic attributes values from real input
   * for help iOS detect what do you want see on keyboard,
   * for example [inputMode=numeric, autocomplete=cc-number]
   */
  patchFakeInputFromFocusableElement(fakeInput) {
    TEXTFIELD_ATTRS.forEach((attr) => {
      const value = this.element.getAttribute(attr);
      if (tuiIsPresent(value)) {
        fakeInput.setAttribute(attr, value);
      }
    });
  }
};
var [TUI_AUTOFOCUS_OPTIONS, tuiAutoFocusOptionsProvider] = tuiCreateOptions({
  delay: NaN,
  query: "input, textarea, select, [contenteditable]",
  preventScroll: false
});
var TUI_AUTOFOCUS_HANDLER = tuiCreateToken();
var TUI_AUTOFOCUS_PROVIDERS = [{
  provide: TUI_AUTOFOCUS_HANDLER,
  deps: [ElementRef, WA_ANIMATION_FRAME, Renderer2, NgZone, WA_WINDOW, TUI_IS_IOS, TUI_AUTOFOCUS_OPTIONS],
  useFactory: (el, animationFrame$, renderer, zone, win, isIos, options) => isIos ? new TuiIosAutofocusHandler(el, renderer, zone, win, options) : new TuiDefaultAutofocusHandler(el, animationFrame$, zone, options)
}];
var TuiAutoFocus = class _TuiAutoFocus {
  constructor() {
    this.handler = inject(TUI_AUTOFOCUS_HANDLER);
    this.options = inject(TUI_AUTOFOCUS_OPTIONS);
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    if (this.autoFocus) {
      this.focus();
    }
  }
  focus() {
    if (Number.isNaN(this.options.delay)) {
      void Promise.resolve().then(() => this.handler.setFocus());
    } else {
      timer(this.options.delay).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.handler.setFocus());
    }
  }
  static {
    this.ɵfac = function TuiAutoFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoFocus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAutoFocus,
      selectors: [["", "tuiAutoFocus", ""]],
      inputs: {
        autoFocus: [2, "tuiAutoFocus", "autoFocus", coerceBooleanProperty]
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_AUTOFOCUS_PROVIDERS), ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoFocus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAutoFocus]",
      providers: TUI_AUTOFOCUS_PROVIDERS
    }]
  }], null, {
    autoFocus: [{
      type: Input,
      args: [{
        alias: "tuiAutoFocus",
        transform: coerceBooleanProperty
      }]
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-focus-trap.mjs
var TuiFocusTrap = class _TuiFocusTrap {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.activeElement = tuiGetNativeFocused(this.doc);
    void Promise.resolve().then(() => this.el.focus());
  }
  ngOnDestroy() {
    tuiBlurNativeFocused(this.doc);
    Promise.resolve().then(() => {
      if (tuiIsHTMLElement(this.activeElement)) {
        this.activeElement.focus();
      }
    });
  }
  onFocusIn(node) {
    if (!tuiContainsOrAfter(this.el, node)) {
      tuiGetClosestFocusable({
        initial: this.el,
        root: this.el
      })?.focus();
    }
  }
  static {
    this.ɵfac = function TuiFocusTrap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFocusTrap)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFocusTrap,
      selectors: [["", "tuiFocusTrap", ""]],
      hostAttrs: ["tabIndex", "0"],
      hostBindings: function TuiFocusTrap_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusin.silent", function TuiFocusTrap_focusin_silent_HostBindingHandler($event) {
            return ctx.onFocusIn($event.target);
          }, false, ɵɵresolveWindow);
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFocusTrap, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFocusTrap]",
      host: {
        tabIndex: "0",
        "(window:focusin.silent)": "onFocusIn($event.target)"
      }
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-dialog.mjs
function TuiDialogComponent_header_0_ng_container_1_Template(rf, ctx) {
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
function TuiDialogComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "header", 6);
    ɵɵtemplate(1, TuiDialogComponent_header_0_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.header)("polymorpheusOutletContext", ctx_r1.context);
  }
}
function TuiDialogComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8)(3, "button", 9);
    ɵɵlistener("click", function TuiDialogComponent_ng_container_4_Template_button_click_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r4 = ctx.polymorpheusOutlet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", text_r4, ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (ctx_r1.context.data == null ? null : ctx_r1.context.data.button) || "OK", " ");
  }
}
function TuiDialogComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiDialogComponent_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close$.next());
    })("mousedown.prevent.silent", function TuiDialogComponent_button_6_Template_button_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("appearance", ctx_r1.isMobile() ? "icon" : "neutral")("iconStart", ctx_r1.icons.close)("size", ctx_r1.isMobile() ? "xs" : "s");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 6, ctx_r1.closeWord$), "\n");
  }
}
function TuiDialogs_section_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiDialogs_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section", 2);
    ɵɵtemplate(1, TuiDialogs_section_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    ɵɵelement(2, "tui-scroll-controls", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("@tuiHost", void 0);
    ɵɵattribute("aria-labelledby", item_r1.id);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", item_r1.component)("polymorpheusOutletContext", item_r1);
  }
}
var TUI_DIALOGS = tuiCreateToken(new BehaviorSubject([]));
var TUI_DIALOG_DEFAULT_OPTIONS = {
  appearance: "",
  size: "m",
  required: false,
  closeable: true,
  dismissible: true,
  label: "",
  header: "",
  data: void 0
};
var TUI_DIALOGS_CLOSE = tuiCreateToken(EMPTY);
var TUI_DIALOG_OPTIONS = tuiCreateToken(TUI_DIALOG_DEFAULT_OPTIONS);
function tuiDialogOptionsProvider(options) {
  return tuiProvideOptions(TUI_DIALOG_OPTIONS, options, TUI_DIALOG_DEFAULT_OPTIONS);
}
var SCROLLBAR_PLACEHOLDER = 17;
var TuiDialogCloseService = class _TuiDialogCloseService extends Observable {
  constructor() {
    super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    this.win = inject(WA_WINDOW);
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.esc$ = tuiTypedFromEvent(this.doc, "keydown").pipe(filter((event) => {
      const target = tuiGetActualTarget(event);
      return event.key === "Escape" && !event.defaultPrevented && (this.el.contains(target) || this.isOutside(target));
    }));
    this.mousedown$ = tuiTypedFromEvent(this.doc, "mousedown").pipe(filter((event) => tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER && this.isOutside(tuiGetActualTarget(event))), switchMap(() => tuiTypedFromEvent(this.doc, "mouseup").pipe(take(1), map(tuiGetActualTarget), filter((target) => this.isOutside(target)))));
  }
  isOutside(target) {
    return tuiIsElement(target) && (!tuiContainsOrAfter(this.el, target) || target === this.el);
  }
  static {
    this.ɵfac = function TuiDialogCloseService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogCloseService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogCloseService,
      factory: _TuiDialogCloseService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogCloseService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var REQUIRED_ERROR = new Error("Required dialog was dismissed");
function toObservable(valueOrStream) {
  return isObservable(valueOrStream) ? valueOrStream : of(valueOrStream);
}
var TuiDialogComponent = class _TuiDialogComponent {
  constructor() {
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.animation = {
      value: "",
      params: {
        start: "40px",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.fullscreenAnimation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(this.speed)
      }
    };
    this.close$ = new Subject();
    this.context = injectContext();
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.slideInTop = computed(() => this.size === "fullscreen" || this.size === "page" || this.isMobile() ? this.fullscreenAnimation : this.animation);
    this.isMobile = toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile")));
    merge(this.close$.pipe(switchMap(() => toObservable(this.context.closeable))), inject(TuiDialogCloseService).pipe(switchMap(() => toObservable(this.context.dismissible))), inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER))).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => {
      this.close();
    });
  }
  get size() {
    return this.context.size;
  }
  get header() {
    return this.context.header;
  }
  close() {
    if (this.context.required) {
      this.context.$implicit.error(REQUIRED_ERROR);
    } else {
      this.context.$implicit.complete();
    }
  }
  static {
    this.ɵfac = function TuiDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogComponent,
      selectors: [["tui-dialog"]],
      hostVars: 6,
      hostBindings: function TuiDialogComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.slideInTop())("@tuiFadeIn", ctx.slideInTop());
          ɵɵattribute("data-appearance", ctx.context.appearance)("data-size", ctx.size);
          ɵɵclassProp("_centered", ctx.header);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiDialogCloseService]), ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["class", "t-header", 4, "ngIf"], [1, "t-content"], [1, "t-heading", 3, "id", "textContent"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-filler"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "appearance", "iconStart", "size", "border-radius", "click", "mousedown.prevent.silent", 4, "ngIf"], [1, "t-header"], [3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 3, "click"], ["automation-id", "tui-dialog__close", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "mousedown.prevent.silent", "appearance", "iconStart", "size"]],
      template: function TuiDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDialogComponent_header_0_Template, 2, 2, "header", 0);
          ɵɵelementStart(1, "div", 1);
          ɵɵelement(2, "h2", 2);
          ɵɵelementStart(3, "section");
          ɵɵtemplate(4, TuiDialogComponent_ng_container_4_Template, 5, 2, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵelement(5, "div", 4);
          ɵɵtemplate(6, TuiDialogComponent_button_6_Template, 3, 8, "button", 5);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.header);
          ɵɵadvance(2);
          ɵɵproperty("id", ctx.context.id)("textContent", ctx.context.label);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.context.closeable);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}[_nghost-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}[data-size=auto][_nghost-%COMP%]{inline-size:auto}[data-size=s][_nghost-%COMP%]{inline-size:30rem}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1.5rem}[data-size=s][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=m][_nghost-%COMP%]{inline-size:42.5rem}[data-size=l][_nghost-%COMP%]{inline-size:55rem}[data-size=fullscreen][_nghost-%COMP%], [data-size=page][_nghost-%COMP%]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}[data-size=fullscreen][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:3rem calc(50vw - 22.5rem)}[data-size=fullscreen][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], [data-size=page][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-3)}._centered[_nghost-%COMP%]{text-align:center}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:1rem}[_nghost-%COMP%]   tui-root._mobile[data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], tui-root._mobile   [data-size][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}[data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [data-size=page][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding:0}.t-heading[_ngcontent-%COMP%]{margin:0 0 .5rem;padding-inline-end:2rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading[_ngcontent-%COMP%]:empty{display:none}.t-header[_ngcontent-%COMP%]{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}[data-size=fullscreen][_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{flex:1}.t-content[_ngcontent-%COMP%]{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler[_ngcontent-%COMP%]{flex-grow:1}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons[_ngcontent-%COMP%]{margin-top:1.25rem;text-align:end}'],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialog",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [TuiDialogCloseService],
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiSlideInTop]": "slideInTop()",
        "[@tuiFadeIn]": "slideInTop()",
        "[attr.data-appearance]": "context.appearance",
        "[attr.data-size]": "size",
        "[class._centered]": "header"
      },
      template: `<header
    *ngIf="header"
    class="t-header"
>
    <ng-container *polymorpheusOutlet="header as text; context: context">
        {{ text }}
    </ng-container>
</header>
<div class="t-content">
    <h2
        class="t-heading"
        [id]="context.id"
        [textContent]="context.label"
    ></h2>
    <section>
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            <div [innerHTML]="text"></div>
            <div class="t-buttons">
                <button
                    size="m"
                    tuiAutoFocus
                    tuiButton
                    type="button"
                    (click)="context.$implicit.complete()"
                >
                    {{ context.data?.button || 'OK' }}
                </button>
            </div>
        </ng-container>
    </section>
</div>
<div class="t-filler"></div>

<!-- Close button is insensitive to \`context.closeable === Observable<false>\` by design -->
<button
    *ngIf="context.closeable"
    automation-id="tui-dialog__close"
    tuiIconButton
    type="button"
    class="t-close"
    [appearance]="isMobile() ? 'icon' : 'neutral'"
    [iconStart]="icons.close"
    [size]="isMobile() ? 'xs' : 's'"
    [style.border-radius.%]="100"
    (click)="close$.next()"
    (mousedown.prevent.silent)="(0)"
>
    {{ closeWord$ | async }}
</button>
`,
      styles: [':host{position:relative;display:flex;font:var(--tui-font-text-m);flex-direction:column;box-sizing:border-box;margin:auto;border-radius:1.5rem;border:2.5rem solid transparent}:host:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";border-radius:inherit;pointer-events:none;box-shadow:var(--tui-shadow-popup)}:host[data-size=auto]{inline-size:auto}:host[data-size=s]{inline-size:30rem}:host[data-size=s] .t-content{padding:1.5rem}:host[data-size=s] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=m]{inline-size:42.5rem}:host[data-size=l]{inline-size:55rem}:host[data-size=fullscreen],:host[data-size=page]{min-inline-size:100vw;min-block-size:100%;border-radius:0;border:none;background:var(--tui-background-elevation-1);box-shadow:0 4rem var(--tui-background-elevation-1)}:host[data-size=fullscreen] .t-content,:host[data-size=page] .t-content{padding:3rem calc(50vw - 22.5rem)}:host[data-size=fullscreen] .t-heading,:host[data-size=page] .t-heading{font:var(--tui-font-heading-3)}:host._centered{text-align:center}:host :host-context(tui-root._mobile)[data-size]{min-inline-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0;border:none;margin:auto 0 0}:host :host-context(tui-root._mobile)[data-size] .t-content{padding:1rem}:host :host-context(tui-root._mobile)[data-size] .t-heading{font:var(--tui-font-heading-5)}:host[data-size=page] .t-content,:host-context(tui-root._mobile) :host[data-size=page] .t-content{padding:0}.t-heading{margin:0 0 .5rem;padding-inline-end:2rem;overflow-wrap:break-word;font:var(--tui-font-heading-4)}.t-heading:empty{display:none}.t-header{display:flex;border-top-left-radius:inherit;border-top-right-radius:inherit;overflow:hidden}:host[data-size=fullscreen] :host-context(tui-root._mobile) .t-header{flex:1}.t-content{border-radius:inherit;padding:1.75rem;background:var(--tui-background-elevation-1)}.t-content:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.t-filler{flex-grow:1}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:1rem;right:1rem}.t-buttons{margin-top:1.25rem;text-align:end}\n']
    }]
  }], function() {
    return [];
  }, null);
})();
var TuiDialogService = class _TuiDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialogService_BaseFactory;
      return function TuiDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiDialogService_BaseFactory || (ɵTuiDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiDialogService)))(__ngFactoryType__ || _TuiDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiDialogService,
      factory: () => (() => new _TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiDialogService(TUI_DIALOGS, TuiDialogComponent, inject(TUI_DIALOG_OPTIONS))
    }]
  }], null, null);
})();
var TuiDialog = class _TuiDialog extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDialog_BaseFactory;
      return function TuiDialog_Factory(__ngFactoryType__) {
        return (ɵTuiDialog_BaseFactory || (ɵTuiDialog_BaseFactory = ɵɵgetInheritedFactory(_TuiDialog)))(__ngFactoryType__ || _TuiDialog);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDialog,
      selectors: [["ng-template", "tuiDialog", ""]],
      inputs: {
        options: [0, "tuiDialogOptions", "options"],
        open: [0, "tuiDialog", "open"]
      },
      outputs: {
        openChange: "tuiDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialog, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiDialog]",
      inputs: ["options: tuiDialogOptions", "open: tuiDialog"],
      outputs: ["openChange: tuiDialogChange"],
      providers: [tuiAsPopover(TuiDialogService)]
    }]
  }], null, null);
})();
function tuiDialog(component, options) {
  const dialogService = inject(TuiDialogService);
  const injector = inject(INJECTOR$1);
  return (data) => dialogService.open(new PolymorpheusComponent(component, injector), __spreadProps(__spreadValues({}, options), {
    data
  }));
}
var TuiDialogs = class _TuiDialogs {
  constructor() {
    this.el = tuiInjectElement();
    this.dialogs = toSignal(inject(TUI_DIALOGS), {
      initialValue: []
    });
  }
  static {
    this.ɵfac = function TuiDialogs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDialogs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDialogs,
      selectors: [["tui-dialogs"]],
      hostBindings: function TuiDialogs_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.silent", function TuiDialogs_keydown_silent_HostBindingHandler() {
            return ctx.el.scrollTop = ctx.el.scrollHeight / 2;
          });
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[1, "t-overlay"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", "class", "t-dialog", 4, "ngFor", "ngForOf"], ["aria-modal", "true", "role", "dialog", "tuiFocusTrap", "", "tuiScrollRef", "", 1, "t-dialog"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-scrollbars"]],
      template: function TuiDialogs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "div", 0);
          ɵɵtemplate(1, TuiDialogs_section_1_Template, 3, 4, "section", 1);
        }
        if (rf & 2) {
          ɵɵclassProp("t-overlay_visible", ctx.dialogs().length);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.dialogs());
        }
      },
      dependencies: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      styles: ['[_nghost-%COMP%]{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[_nghost-%COMP%]:has(section){pointer-events:auto;overflow:auto}[_nghost-%COMP%]:before{content:"";display:block;block-size:1000%}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-dialog[_ngcontent-%COMP%]{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;transition-timing-function:ease-out}.t-dialog[_ngcontent-%COMP%]:last-child{pointer-events:auto;filter:none}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}'],
      data: {
        animation: [tuiHost]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDialogs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-dialogs",
      imports: [NgForOf, PolymorpheusOutlet, TuiFocusTrap, TuiScrollControls, TuiScrollRef],
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiHost],
      host: {
        "(keydown.silent)": "el.scrollTop = el.scrollHeight / 2"
      },
      template: '<div\n    class="t-overlay"\n    [class.t-overlay_visible]="dialogs().length"\n></div>\n<section\n    *ngFor="let item of dialogs()"\n    aria-modal="true"\n    role="dialog"\n    tuiFocusTrap\n    tuiScrollRef\n    class="t-dialog"\n    @tuiHost\n    [attr.aria-labelledby]="item.id"\n>\n    <ng-container *polymorpheusOutlet="item.component; context: item" />\n    <tui-scroll-controls class="t-scrollbars" />\n</section>\n',
      styles: [':host{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;scrollbar-width:none;-ms-overflow-style:none;pointer-events:none;overflow:hidden;overscroll-behavior:none}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host:has(section){pointer-events:auto;overflow:auto}:host:before{content:"";display:block;block-size:1000%}.t-overlay,.t-dialog{transition-property:filter;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;scrollbar-width:none;-ms-overflow-style:none;position:fixed;top:0;left:0;bottom:0;right:0;display:flex;block-size:100%;align-items:flex-start;outline:none;overflow:auto}.t-overlay::-webkit-scrollbar,.t-dialog::-webkit-scrollbar,.t-overlay::-webkit-scrollbar-thumb,.t-dialog::-webkit-scrollbar-thumb{display:none}.t-overlay.ng-animating,.t-dialog.ng-animating{overflow:clip}.t-dialog{position:sticky;overscroll-behavior:none;filter:brightness(.25)}.t-overlay{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;background:var(--tui-service-backdrop);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none);opacity:0;transition-timing-function:ease-in}.t-overlay_visible{opacity:1;transition-timing-function:ease-out}.t-dialog:last-child{pointer-events:auto;filter:none}.t-scrollbars{position:fixed;top:0;left:0;bottom:0;right:0;margin:0;color:#747474}\n']
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs
var ICONS = {
  info: "@tui.info",
  positive: "@tui.circle-check",
  negative: "@tui.circle-x",
  warning: "@tui.circle-alert",
  neutral: "@tui.info",
  /* TODO @deprecated remove in v5 */
  success: "@tui.circle-check",
  /* TODO @deprecated remove in v5 */
  error: "@tui.circle-x"
};
var TUI_NOTIFICATION_DEFAULT_OPTIONS = {
  appearance: "info",
  icon: (appearance) => ICONS[appearance] ?? "",
  size: "l"
};
var TUI_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_NOTIFICATION_DEFAULT_OPTIONS);
function tuiNotificationOptionsProvider(options) {
  return tuiProvideOptions(TUI_NOTIFICATION_OPTIONS, options, TUI_NOTIFICATION_DEFAULT_OPTIONS);
}
var TuiNotificationStyles = class _TuiNotificationStyles {
  static {
    this.ɵfac = function TuiNotificationStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotificationStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNotificationStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-notification"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiNotificationStyles_Template(rf, ctx) {
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-left) solid transparent;border-inline-end:var(--t-right) solid transparent;--t-left: 0;--t-right: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-left: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-right: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0 -.25rem 0 auto;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-left: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-left: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}[tuiNotification]{cursor:pointer}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotificationStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-notification"
      },
      styles: ['tui-notification,[tuiNotification]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:block;max-block-size:100%;color:var(--tui-text-primary);padding:1rem;font:var(--tui-font-text-m);line-height:1.5rem;border-radius:var(--tui-radius-l);box-sizing:border-box;text-align:start;text-decoration:none;border-inline-start:var(--t-left) solid transparent;border-inline-end:var(--t-right) solid transparent;--t-left: 0;--t-right: 0}tui-notification[style*="--t-icon-start:"],[tuiNotification][style*="--t-icon-start:"]{--t-left: 2rem}tui-notification[style*="--t-icon-end:"],[tuiNotification][style*="--t-icon-end:"]{--t-right: 1.5rem}tui-notification:before,[tuiNotification]:before{position:absolute;left:-1rem}tui-notification:after,[tuiNotification]:after{position:absolute;top:50%;transform:translateY(-50%);right:-.5rem;font-size:1rem;margin:0 -.25rem 0 auto;color:var(--tui-text-tertiary)!important}tui-notification[data-size=s],[tuiNotification][data-size=s]{padding:.375rem .625rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=s][style*="--t-icon-start:"],[tuiNotification][data-size=s][style*="--t-icon-start:"]{--t-left: 1.5rem}tui-notification[data-size=s]:before,[tuiNotification][data-size=s]:before{top:.5rem;left:-.875rem;font-size:1rem}tui-notification[data-size=s]:after,[tuiNotification][data-size=s]:after{right:-.875rem}tui-notification[data-size=s] tui-icon,[tuiNotification][data-size=s] tui-icon{font-size:1rem}tui-notification[data-size=s] [tuiTitle],[tuiNotification][data-size=s] [tuiTitle]{font:var(--tui-font-text-s);font-weight:700}tui-notification[data-size=s] [tuiSubtitle],[tuiNotification][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=s] [tuiSubtitle]+*,[tuiNotification][data-size=s] [tuiSubtitle]+*{gap:1rem;margin:.375rem 0 .25rem}tui-notification[data-size=s]>[tuiIconButton],[tuiNotification][data-size=s]>[tuiIconButton]{top:0;right:0}tui-notification[data-size=m],[tuiNotification][data-size=m]{padding:.75rem;font:var(--tui-font-text-s);line-height:1.25rem;border-radius:var(--tui-radius-m)}tui-notification[data-size=m][style*="--t-icon-start:"],[tuiNotification][data-size=m][style*="--t-icon-start:"]{--t-left: 1.625rem}tui-notification[data-size=m]:before,[tuiNotification][data-size=m]:before{left:-.875rem;font-size:1.25rem}tui-notification[data-size=m]:after,[tuiNotification][data-size=m]:after{right:-.75rem}tui-notification[data-size=m] tui-icon,[tuiNotification][data-size=m] tui-icon{font-size:1.25rem}tui-notification[data-size=m] [tuiTitle],[tuiNotification][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-m);font-weight:700}tui-notification[data-size=m] [tuiSubtitle],[tuiNotification][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-s)}tui-notification[data-size=m] [tuiSubtitle]+*,[tuiNotification][data-size=m] [tuiSubtitle]+*{gap:1rem;margin:.625rem 0 .25rem}tui-notification[data-size=m]>[tuiIconButton],[tuiNotification][data-size=m]>[tuiIconButton]{top:.375rem;right:.5rem}tui-notification [tuiTitle],[tuiNotification] [tuiTitle]{gap:.125rem;font:var(--tui-font-text-ui-l);font-weight:700}tui-notification [tuiSubtitle],[tuiNotification] [tuiSubtitle]{font:var(--tui-font-text-m)}tui-notification [tuiSubtitle]+*,[tuiNotification] [tuiSubtitle]+*{display:flex;align-items:center;gap:1.25rem;margin-top:.625rem;font:var(--tui-font-text-s)}tui-notification>[tuiIconButton],[tuiNotification]>[tuiIconButton]{position:absolute;top:.75rem;right:.75rem;box-shadow:none!important;background:transparent!important}[tuiNotification]{cursor:pointer}\n']
    }]
  }], null, null);
})();
var TuiNotification = class _TuiNotification {
  constructor() {
    this.options = inject(TUI_NOTIFICATION_OPTIONS);
    this.nothing = tuiWithStyles(TuiNotificationStyles);
    this.icons = inject(TuiIcons);
    this.appearance = this.options.appearance;
    this.icon = this.options.icon;
    this.size = this.options.size;
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnChanges() {
    this.refresh();
  }
  refresh() {
    this.icons.iconStart = tuiIsString(this.icon) ? this.icon : this.icon(this.appearance);
  }
  static {
    this.ɵfac = function TuiNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNotification)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiNotification,
      selectors: [["tui-notification"], ["a", "tuiNotification", ""], ["button", "tuiNotification", ""]],
      hostVars: 1,
      hostBindings: function TuiNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        appearance: "appearance",
        icon: "icon",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiWithIcons, TuiWithAppearance]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNotification, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-notification,a[tuiNotification],button[tuiNotification]",
      providers: [tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS), tuiLinkOptionsProvider({
        appearance: "",
        pseudo: true
      }), tuiButtonOptionsProvider({
        appearance: "outline-grayscale",
        size: "s"
      })],
      hostDirectives: [TuiWithIcons, TuiWithAppearance],
      host: {
        "[attr.data-size]": "size"
      }
    }]
  }], null, {
    appearance: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-title.mjs
var TuiTitleStyles = class _TuiTitleStyles {
  static {
    this.ɵfac = function TuiTitleStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitleStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTitleStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-title"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiTitleStyles_Template(rf, ctx) {
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitleStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-title"
      },
      styles: ["[tuiTitle]{position:relative;display:flex;min-inline-size:0;flex-direction:column;text-align:start;gap:.25rem;margin:0;font:var(--tui-font-text-ui-m)}[tuiTitle][data-size=s]{gap:.125rem;font:var(--tui-font-text-s)}[tuiTitle][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-xs)}[tuiTitle][data-size=m]{gap:.125rem;font:var(--tui-font-heading-5)}[tuiTitle][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiTitle][data-size=l]{gap:.5rem;font:var(--tui-font-heading-3)}[tuiTitle][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-m)}[tuiSubtitle]{font:var(--tui-font-text-ui-s)}\n"]
    }]
  }], null, null);
})();
var TuiTitle = class _TuiTitle {
  constructor() {
    this.nothing = tuiWithStyles(TuiTitleStyles);
    this.size = "";
  }
  static {
    this.ɵfac = function TuiTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTitle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTitle,
      selectors: [["", "tuiTitle", ""]],
      hostAttrs: ["tuiTitle", ""],
      hostVars: 1,
      hostBindings: function TuiTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || null);
        }
      },
      inputs: {
        size: [0, "tuiTitle", "size"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTitle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTitle]",
      host: {
        tuiTitle: "",
        "[attr.data-size]": "size || null"
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiTitle"]
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-alert.mjs
function TuiAlertComponent_ng_container_2_Template(rf, ctx) {
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
function TuiAlertComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r2, ɵɵsanitizeHtml);
  }
}
function TuiAlertComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function TuiAlertComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.item.$implicit.complete());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r3.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r3.close(), " ");
  }
}
function TuiAlerts_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 3);
    ɵɵpipe(1, "tuiMapper");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", item_r1.component.component)("ngComponentOutletInjector", ɵɵpipeBind2(1, 2, item_r1, ctx_r1.mapper));
  }
}
function TuiAlerts_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiAlerts_div_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    ɵɵproperty("@tuiParentAnimation", void 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r3);
  }
}
var TUI_ALERT_DEFAULT_OPTIONS = {
  autoClose: 3e3,
  label: "",
  closeable: true,
  data: void 0
};
var TUI_ALERT_OPTIONS = tuiCreateTokenFromFactory(() => __spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_NOTIFICATION_OPTIONS)));
var TUI_ALERT_POSITION = tuiCreateTokenFromFactory(() => inject(TUI_IS_MOBILE) ? "1rem 1rem 0 auto" : "2rem 3rem 0 auto");
var TUI_ALERTS = tuiCreateToken(new BehaviorSubject([]));
var TUI_ALERTS_GROUPED = tuiCreateTokenFromFactory(() => combineLatest([of(/* @__PURE__ */ new Map()), inject(TUI_ALERTS)]).pipe(map(([map2, alerts]) => {
  map2.forEach((_, key) => map2.set(key, []));
  alerts.forEach((alert) => {
    const key = alert.component.component;
    const value = map2.get(key) || [];
    map2.set(key, [...value, alert]);
  });
  return Array.from(map2.values());
})));
function tuiAlertOptionsProvider(options) {
  return {
    provide: TUI_ALERT_OPTIONS,
    useFactory: () => __spreadValues(__spreadValues(__spreadValues({}, TUI_ALERT_DEFAULT_OPTIONS), inject(TUI_ALERT_OPTIONS, {
      optional: true,
      skipSelf: true
    }) || inject(TUI_NOTIFICATION_OPTIONS)), options)
  };
}
var TuiAlertComponent = class _TuiAlertComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.icons = inject(TUI_COMMON_ICONS);
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.close = toSignal(inject(TUI_CLOSE_WORD));
    this.position = inject(TUI_ALERT_POSITION);
    this.item = injectContext();
    this.animation = this.position.endsWith("auto") ? __spreadProps(__spreadValues({}, this.options), {
      value: "right"
    }) : __spreadProps(__spreadValues({}, this.options), {
      value: "left"
    });
    this.sub = of(typeof this.item.autoClose === "function" ? this.item.autoClose(this.item.appearance) : this.item.autoClose).pipe(switchMap((autoClose) => autoClose ? timer(autoClose) : EMPTY), takeUntil(fromEvent(this.el, "mouseenter")), repeat({
      delay: () => fromEvent(this.el, "mouseleave")
    }), takeUntilDestroyed()).subscribe(() => this.item.$implicit.complete());
  }
  static {
    this.ɵfac = function TuiAlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlertComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlertComponent,
      selectors: [["tui-alert"]],
      hostAttrs: ["role", "alert"],
      hostVars: 5,
      hostBindings: function TuiAlertComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideIn", ctx.animation)("@tuiHeightCollapse", ctx.animation);
          ɵɵstyleProp("margin", ctx.position);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 6,
      vars: 9,
      consts: [["size", "m", 3, "appearance", "icon"], ["tuiTitle", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiSubtitle", ""], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiIconButton", "", "type", "button", 3, "iconStart", "click", 4, "ngIf"], [3, "innerHTML"], ["tuiIconButton", "", "type", "button", 3, "click", "iconStart"]],
      template: function TuiAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-notification", 0)(1, "span", 1);
          ɵɵtemplate(2, TuiAlertComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
          ɵɵelementStart(3, "span", 3);
          ɵɵtemplate(4, TuiAlertComponent_span_4_Template, 1, 1, "span", 4);
          ɵɵelementEnd()();
          ɵɵtemplate(5, TuiAlertComponent_button_5_Template, 2, 2, "button", 5);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassProp("t-closeable", ctx.item.closeable);
          ɵɵproperty("appearance", ctx.item.appearance)("icon", ctx.item.icon);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.label)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.item.content)("polymorpheusOutletContext", ctx.item);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.item.closeable);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      styles: ["[_nghost-%COMP%]{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}[_nghost-%COMP%]:not(:first-child){margin-top:.75rem!important}[_nghost-%COMP%]:not(:last-child){margin-bottom:0!important}.t-closeable[_ngcontent-%COMP%]{padding-inline-end:2.5rem}"],
      data: {
        animation: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alert",
      imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiNotification, TuiTitle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn, tuiSlideIn, tuiHeightCollapse],
      host: {
        role: "alert",
        "[style.margin]": "position",
        "[@tuiFadeIn]": "options",
        "[@tuiSlideIn]": "animation",
        "[@tuiHeightCollapse]": "animation"
      },
      template: '<tui-notification\n    size="m"\n    [appearance]="item.appearance"\n    [class.t-closeable]="item.closeable"\n    [icon]="item.icon"\n>\n    <span tuiTitle>\n        <ng-container *polymorpheusOutlet="item.label as text; context: item">\n            {{ text }}\n        </ng-container>\n        <span tuiSubtitle>\n            <span\n                *polymorpheusOutlet="item.content as text; context: item"\n                [innerHTML]="text"\n            ></span>\n        </span>\n    </span>\n    <button\n        *ngIf="item.closeable"\n        tuiIconButton\n        type="button"\n        [iconStart]="icons.close"\n        (click)="item.$implicit.complete()"\n    >\n        {{ close() }}\n    </button>\n</tui-notification>\n',
      styles: [":host{display:block;inline-size:18rem;flex-shrink:0;word-break:break-word;background:var(--tui-background-base);border-radius:var(--tui-radius-m);box-shadow:var(--tui-shadow-medium)}:host:not(:first-child){margin-top:.75rem!important}:host:not(:last-child){margin-bottom:0!important}.t-closeable{padding-inline-end:2.5rem}\n"]
    }]
  }], null, null);
})();
var TuiAlertService = class _TuiAlertService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlertService_BaseFactory;
      return function TuiAlertService_Factory(__ngFactoryType__) {
        return (ɵTuiAlertService_BaseFactory || (ɵTuiAlertService_BaseFactory = ɵɵgetInheritedFactory(_TuiAlertService)))(__ngFactoryType__ || _TuiAlertService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiAlertService,
      factory: () => (() => new _TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlertService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiAlertService(TUI_ALERTS, TuiAlertComponent, inject(TUI_ALERT_OPTIONS))
    }]
  }], null, null);
})();
var TuiAlert = class _TuiAlert extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAlert_BaseFactory;
      return function TuiAlert_Factory(__ngFactoryType__) {
        return (ɵTuiAlert_BaseFactory || (ɵTuiAlert_BaseFactory = ɵɵgetInheritedFactory(_TuiAlert)))(__ngFactoryType__ || _TuiAlert);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAlert,
      selectors: [["ng-template", "tuiAlert", ""]],
      inputs: {
        options: [0, "tuiAlertOptions", "options"],
        open: [0, "tuiAlert", "open"]
      },
      outputs: {
        openChange: "tuiAlertChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiAlertService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlert, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAlert]",
      inputs: ["options: tuiAlertOptions", "open: tuiAlert"],
      outputs: ["openChange: tuiAlertChange"],
      providers: [tuiAsPopover(TuiAlertService)]
    }]
  }], null, null);
})();
var TuiAlerts = class _TuiAlerts {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.alerts$ = inject(TUI_ALERTS_GROUPED);
    this.trackBy = identity;
    this.mapper = (useValue) => Injector.create({
      providers: [{
        provide: POLYMORPHEUS_CONTEXT,
        useValue
      }],
      parent: this.injector
    });
  }
  static {
    this.ɵfac = function TuiAlerts_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAlerts)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAlerts,
      selectors: [["tui-alerts"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [["class", "t-wrapper", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "t-wrapper"], [3, "ngComponentOutlet", "ngComponentOutletInjector", 4, "ngFor", "ngForOf"], [3, "ngComponentOutlet", "ngComponentOutletInjector"]],
      template: function TuiAlerts_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiAlerts_div_0_Template, 2, 2, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.alerts$))("ngForTrackBy", ctx.trackBy);
        }
      },
      dependencies: [CommonModule, NgComponentOutlet, NgForOf, AsyncPipe, TuiMapperPipe],
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"],
      encapsulation: 2,
      data: {
        animation: [tuiParentAnimation]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAlerts, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-alerts",
      imports: [CommonModule, TuiMapperPipe],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      animations: [tuiParentAnimation],
      template: '<div\n    *ngFor="let group of alerts$ | async; trackBy: trackBy"\n    class="t-wrapper"\n    @tuiParentAnimation\n>\n    <ng-container\n        *ngFor="let item of group"\n        [ngComponentOutlet]="item.component.component"\n        [ngComponentOutletInjector]="item | tuiMapper: mapper"\n    />\n</div>\n',
      styles: ["tui-alerts>.t-wrapper{position:fixed;top:0;left:0;inline-size:100%;block-size:100%;display:flex;flex-direction:column;pointer-events:none}tui-alerts>.t-wrapper>*{pointer-events:auto}\n"]
    }]
  }], null, null);
})();

export {
  tuiAutoFocusOptionsProvider,
  TuiAutoFocus,
  TUI_DIALOGS,
  TUI_DIALOG_DEFAULT_OPTIONS,
  TUI_DIALOGS_CLOSE,
  TUI_DIALOG_OPTIONS,
  tuiDialogOptionsProvider,
  TuiDialogCloseService,
  TuiDialogComponent,
  TuiDialogService,
  TuiDialog,
  tuiDialog,
  TuiDialogs,
  TUI_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_NOTIFICATION_OPTIONS,
  tuiNotificationOptionsProvider,
  TuiNotification,
  TuiTitle,
  TUI_ALERT_DEFAULT_OPTIONS,
  TUI_ALERT_OPTIONS,
  TUI_ALERT_POSITION,
  TUI_ALERTS,
  TUI_ALERTS_GROUPED,
  tuiAlertOptionsProvider,
  TuiAlertComponent,
  TuiAlertService,
  TuiAlert,
  TuiAlerts
};
//# sourceMappingURL=chunk-2Q75LATM.js.map
