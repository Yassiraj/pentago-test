import {
  MASKITO_DEFAULT_OPTIONS,
  TUI_COPY_TEXTS,
  TUI_MORE_WORD,
  TUI_PASSWORD_TEXTS,
  TuiChevron,
  maskitoTransform
} from "./chunk-2H24O7E5.js";
import {
  CHAR_NO_BREAK_SPACE,
  EMPTY_QUERY,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  ResizeObserverService,
  TUI_ANIMATIONS_DEFAULT_DURATION,
  TUI_ANIMATIONS_SPEED,
  TUI_APPEARANCE_OPTIONS,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_HOST,
  TUI_ICON_START,
  TuiAppearance,
  TuiControl,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiHintDirective,
  TuiIcon,
  TuiNativeValidator,
  TuiOption,
  TuiTextfieldComponent,
  TuiValidationError,
  TuiValueTransformer,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  TuiWithTextfieldDropdown,
  WA_WINDOW,
  svgNodeFilter,
  tuiAppearanceOptionsProvider,
  tuiButtonOptionsProvider,
  tuiClamp,
  tuiCreateOptions,
  tuiCreateToken,
  tuiDirectiveBinding,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiGetClosestFocusable,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsElement,
  tuiIsNativeFocused,
  tuiIsString,
  tuiMoveFocus,
  tuiPop,
  tuiPreventDefault,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiQueryListChanges,
  tuiToAnimationOptions,
  tuiToInt,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZonefree,
  tuiZonefull
} from "./chunk-TJD5ECJX.js";
import {
  NG_VALIDATORS,
  NgControl
} from "./chunk-RMQQVHNY.js";
import {
  RouterLinkActive
} from "./chunk-6JBCPGHO.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  isPlatformServer
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
  InjectionToken,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  afterNextRender,
  computed,
  forwardRef,
  inject,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  __decorate,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  identity,
  map,
  merge,
  share,
  shareReplay,
  skip,
  startWith,
  switchMap,
  take,
  tap,
  timer
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-close.mjs
var TuiButtonClose = class _TuiButtonClose {
  static {
    this.ɵfac = function TuiButtonClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonClose)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonClose,
      selectors: [["", "tuiIconButton", "", "tuiButtonClose", ""]],
      hostVars: 4,
      hostBindings: function TuiButtonClose_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-radius", 100, "%")("--tui-height-s", 1.875, "rem");
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "neutral",
        size: "s"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonClose, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiIconButton][tuiButtonClose]",
      providers: [tuiButtonOptionsProvider({
        appearance: "neutral",
        size: "s"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS).close
      }],
      host: {
        "[style.--t-radius.%]": "100",
        "[style.--tui-height-s.rem]": "1.875"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-group.mjs
var TuiButtonGroupStyles = class _TuiButtonGroupStyles {
  static {
    this.ɵfac = function TuiButtonGroupStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonGroupStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiButtonGroupStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-button-group-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiButtonGroupStyles_Template(rf, ctx) {
      },
      styles: ['[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:"";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:"";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonGroupStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-button-group-styles"
      },
      styles: ['[tuiButtonGroup]{display:flex;border-radius:var(--tui-radius-xl);justify-content:center;overflow:hidden}[tuiButtonGroup]>button,[tuiButtonGroup]>a{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;border:none;outline:none;background:transparent;align-items:center;flex:1;flex-direction:column;padding:1.125rem .25rem;gap:.5rem;font:var(--tui-font-text-ui-s);max-inline-size:calc(50% - 1.75rem);cursor:pointer;color:var(--tui-text-action);text-align:center;text-decoration:none;clip-path:inset(0)}[tuiButtonGroup]>button:first-child,[tuiButtonGroup]>a:first-child{clip-path:inset(0 0 0 -10rem)}[tuiButtonGroup]>button:last-child,[tuiButtonGroup]>a:last-child{clip-path:inset(0 -10rem 0 0)}[tuiButtonGroup]>button:active,[tuiButtonGroup]>a:active{background:var(--tui-background-neutral-1)}[tuiButtonGroup]>button:before,[tuiButtonGroup]>a:before,[tuiButtonGroup]>button:after,[tuiButtonGroup]>a:after{position:absolute;top:0;background:inherit;inline-size:1.75rem;block-size:100%}[tuiButtonGroup]>button:first-child:before,[tuiButtonGroup]>a:first-child:before{content:"";left:-1.75rem}[tuiButtonGroup]>button:last-child:after,[tuiButtonGroup]>a:last-child:after{content:"";right:-1.75rem}[tuiButtonGroup]>button tui-icon,[tuiButtonGroup]>a tui-icon{font-size:1.75rem}[tuiButtonGroup]:has(button:only-child){border-radius:1rem}[tuiButtonGroup]>button:only-child,[tuiButtonGroup]>a:only-child{inline-size:100%;flex-direction:row;font:var(--tui-font-text-ui-l);max-inline-size:100%;justify-content:center}\n']
    }]
  }], null, null);
})();
var TuiButtonGroup = class _TuiButtonGroup {
  constructor() {
    this.nothing = tuiWithStyles(TuiButtonGroupStyles);
  }
  static {
    this.ɵfac = function TuiButtonGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonGroup,
      selectors: [["", "tuiButtonGroup", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiButtonGroup]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-button-select.mjs
var TuiButtonSelect = class _TuiButtonSelect extends TuiControl {
  constructor() {
    super(...arguments);
    this.open = tuiDropdownOpen();
    this.size = "s";
  }
  handleOption(option) {
    this.onChange(option);
    this.open.set(false);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiButtonSelect_BaseFactory;
      return function TuiButtonSelect_Factory(__ngFactoryType__) {
        return (ɵTuiButtonSelect_BaseFactory || (ɵTuiButtonSelect_BaseFactory = ɵɵgetInheritedFactory(_TuiButtonSelect)))(__ngFactoryType__ || _TuiButtonSelect);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiButtonSelect,
      selectors: [["button", "tuiButtonSelect", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, _TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonSelect, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "button[tuiButtonSelect]",
      providers: [
        // TODO: Add checkmark once we properly implement new Select, then add to demo
        tuiProvide(TUI_DATA_LIST_HOST, TuiButtonSelect),
        tuiDropdownOptionsProvider({
          align: "right"
        })
      ],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen, TuiWithTextfieldDropdown]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-connected.mjs
var TuiConnectedStyles = class _TuiConnectedStyles {
  static {
    this.ɵfac = function TuiConnectedStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConnectedStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiConnectedStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-connected-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiConnectedStyles_Template(rf, ctx) {
      },
      styles: ['[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:"";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConnectedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-connected-styles"
      },
      styles: ['[tuiConnected]{--t-image-size: 2.5rem;--t-connected-height: calc(100% - var(--t-image-size) - .5rem)}[tuiConnected][tuiCardLarge]{--t-connected-height: calc(100% - var(--t-image-size) - .25rem)}[tuiConnected] [tuiCell]:not(:last-of-type):after,[tuiConnected] [tuiStep]:not(:last-of-type):after{content:"";position:absolute;top:calc(var(--t-image-size) + .25rem);left:calc(var(--t-image-size) / 2);block-size:var(--t-connected-height);inline-size:1px;background-color:var(--tui-border-normal);background-clip:content-box;padding:inherit}[tuiConnected] [tuiStep]{--t-image-size: 2rem;--t-connected-height: calc(100% - var(--t-image-size) + .75rem)}\n']
    }]
  }], null, null);
})();
var TuiConnected = class _TuiConnected {
  constructor() {
    this.nothing = tuiWithStyles(TuiConnectedStyles);
  }
  static {
    this.ɵfac = function TuiConnected_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConnected)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiConnected,
      selectors: [["", "tuiConnected", ""]],
      hostAttrs: ["tuiConnected", ""],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConnected, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiConnected]",
      host: {
        tuiConnected: ""
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-copy.mjs
var [TUI_COPY_OPTIONS, tuiCopyOptionsProvider] = tuiCreateOptions({
  icon: "@tui.copy"
});
var TuiCopy = class _TuiCopy {
  constructor() {
    this.options = inject(TUI_COPY_OPTIONS);
    this.copied$ = new Subject();
    this.doc = inject(DOCUMENT);
    this.textfield = inject(TuiTextfieldComponent);
    this.hint = tuiDirectiveBinding(TuiHintDirective, "tuiHint", toSignal(inject(TUI_COPY_TEXTS).pipe(switchMap(([copy, copied]) => this.copied$.pipe(switchMap(() => timer(3e3).pipe(map(() => copy), startWith(copied))), startWith(copy)))), {
      initialValue: ""
    }));
    this.icons = tuiDirectiveBinding(TuiIcon, "icon", computed((size = this.textfield.options.size()) => tuiIsString(this.options.icon) ? this.options.icon : this.options.icon(size)));
    this.tuiCopy = "";
  }
  get disabled() {
    return !this.textfield.input?.nativeElement.value;
  }
  copy() {
    this.textfield.input?.nativeElement.select();
    this.doc.execCommand("copy");
    this.copied$.next();
  }
  static {
    this.ɵfac = function TuiCopy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCopy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCopy,
      selectors: [["tui-icon", "tuiCopy", ""]],
      hostAttrs: [2, "cursor", "pointer"],
      hostVars: 6,
      hostBindings: function TuiCopy_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiCopy_click_HostBindingHandler() {
            return ctx.copy();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("pointer-events", ctx.disabled ? "none" : null)("opacity", ctx.disabled ? "var(--tui-disabled-opacity)" : null)("border", ctx.textfield.options.size() === "s" ? "0.25rem solid transparent" : null);
        }
      },
      inputs: {
        tuiCopy: "tuiCopy"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCopy, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiCopy]",
      providers: [{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        style: "cursor: pointer",
        "(click)": "copy()",
        "[style.pointer-events]": 'disabled ? "none" : null',
        "[style.opacity]": 'disabled ? "var(--tui-disabled-opacity)" : null',
        "[style.border]": 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null'
      }
    }]
  }], null, {
    tuiCopy: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-data-list-dropdown-manager.mjs
var TuiDataListDropdownManager = class _TuiDataListDropdownManager {
  constructor() {
    this.dropdowns = EMPTY_QUERY;
    this.els = EMPTY_QUERY;
    this.destroyRef = inject(DestroyRef);
  }
  ngAfterViewInit() {
    this.right$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((index) => {
      this.tryToFocus(index);
    });
    merge(this.immediate$, this.debounce$).pipe(switchMap((active) => {
      this.dropdowns.forEach((dropdown2, index) => {
        dropdown2.toggle(index === active);
      });
      const element = this.els.get(active);
      const dropdown = this.dropdowns.get(active);
      const ref = dropdown?.ref();
      if (!element || !dropdown || !ref) {
        return EMPTY;
      }
      const {
        nativeElement
      } = ref.location;
      const mouseEnter$ = tuiTypedFromEvent(nativeElement, "mouseenter").pipe(take(1));
      const esc$ = merge(tuiTypedFromEvent(element.nativeElement, "keydown"), tuiTypedFromEvent(nativeElement, "keydown")).pipe(filter(({
        key
      }) => key === "Escape"));
      return merge(mouseEnter$, esc$).pipe(tap((event) => {
        if (dropdown.ref()) {
          event.stopPropagation();
        }
        element.nativeElement.focus();
        dropdown.toggle("offsetX" in event);
      }));
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  get elements$() {
    return tuiQueryListChanges(this.els).pipe(map((array) => array.map(({
      nativeElement
    }) => nativeElement)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  get right$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => tuiTypedFromEvent(element, "keydown").pipe(filter(({
      key
    }) => key === "ArrowRight"), tuiPreventDefault(), map(() => index))))));
  }
  get immediate$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => tuiTypedFromEvent(element, "click").pipe(map(() => index))))));
  }
  get debounce$() {
    return this.elements$.pipe(switchMap((elements) => merge(...elements.map((element, index) => merge(tuiTypedFromEvent(element, "focus"), tuiTypedFromEvent(element, "blur")).pipe(filter(({
      relatedTarget
    }) => this.notInDropdown(relatedTarget, index)), map(({
      type
    }) => type === "focus" ? index : NaN))))), debounceTime(300));
  }
  notInDropdown(element, index) {
    return !this.dropdowns.get(index)?.ref()?.location.nativeElement.contains(element);
  }
  tryToFocus(index) {
    const content = this.dropdowns.get(index)?.ref()?.location.nativeElement;
    if (!content) {
      return;
    }
    const focusTrap = tuiGetClosestFocusable({
      initial: content,
      root: content
    });
    const item = tuiGetClosestFocusable({
      initial: focusTrap || content,
      root: content
    });
    if (item) {
      item.focus();
    }
  }
  static {
    this.ɵfac = function TuiDataListDropdownManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListDropdownManager)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiDataListDropdownManager,
      selectors: [["tui-data-list", "tuiDataListDropdownManager", ""]],
      contentQueries: function TuiDataListDropdownManager_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiDropdownDirective, 5);
          ɵɵcontentQuery(dirIndex, TuiDropdownDirective, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdowns = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.els = _t);
        }
      },
      standalone: true
    });
  }
};
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "elements$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "right$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "immediate$", null);
__decorate([tuiPure], TuiDataListDropdownManager.prototype, "debounce$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListDropdownManager, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-data-list[tuiDataListDropdownManager]"
    }]
  }], null, {
    dropdowns: [{
      type: ContentChildren,
      args: [TuiDropdownDirective, {
        descendants: true
      }]
    }],
    els: [{
      type: ContentChildren,
      args: [TuiDropdownDirective, {
        read: ElementRef,
        descendants: true
      }]
    }],
    elements$: [],
    right$: [],
    immediate$: [],
    debounce$: []
  });
})();

// node_modules/@ng-web-apis/mutation-observer/fesm2022/ng-web-apis-mutation-observer.mjs
var SafeObserver = typeof MutationObserver !== "undefined" ? MutationObserver : class {
  observe() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_MUTATION_OBSERVER_INIT = new InjectionToken("[WA_MUTATION_OBSERVER_INIT]");
var MUTATION_OBSERVER_INIT = WA_MUTATION_OBSERVER_INIT;
function booleanAttribute(element, attribute) {
  return element.getAttribute(attribute) !== null || void 0;
}
function mutationObserverInitFactory() {
  const {
    nativeElement
  } = inject(ElementRef);
  const attributeFilter = nativeElement.getAttribute("attributeFilter");
  return {
    attributeFilter: attributeFilter?.split(",").map((attr) => attr.trim()),
    attributeOldValue: booleanAttribute(nativeElement, "attributeOldValue"),
    attributes: booleanAttribute(nativeElement, "attributes"),
    characterData: booleanAttribute(nativeElement, "characterData"),
    characterDataOldValue: booleanAttribute(nativeElement, "characterDataOldValue"),
    childList: booleanAttribute(nativeElement, "childList"),
    subtree: booleanAttribute(nativeElement, "subtree")
  };
}
var WaMutationObserver = class _WaMutationObserver extends SafeObserver {
  nativeElement = inject(ElementRef).nativeElement;
  config = inject(MUTATION_OBSERVER_INIT);
  attributeFilter = "";
  attributeOldValue = "";
  attributes = "";
  characterData = "";
  characterDataOldValue = "";
  childList = "";
  subtree = "";
  waMutationObserver = new EventEmitter();
  constructor() {
    super((records) => {
      this.waMutationObserver.emit(records);
    });
    this.observe(this.nativeElement, this.config);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaMutationObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaMutationObserver)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaMutationObserver,
    selectors: [["", "waMutationObserver", ""]],
    inputs: {
      attributeFilter: "attributeFilter",
      attributeOldValue: "attributeOldValue",
      attributes: "attributes",
      characterData: "characterData",
      characterDataOldValue: "characterDataOldValue",
      childList: "childList",
      subtree: "subtree"
    },
    outputs: {
      waMutationObserver: "waMutationObserver"
    },
    exportAs: ["MutationObserver"],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: MUTATION_OBSERVER_INIT,
      useFactory: mutationObserverInitFactory
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaMutationObserver, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waMutationObserver]",
      providers: [{
        provide: MUTATION_OBSERVER_INIT,
        useFactory: mutationObserverInitFactory
      }],
      exportAs: "MutationObserver"
    }]
  }], function() {
    return [];
  }, {
    attributeFilter: [{
      type: Input
    }],
    attributeOldValue: [{
      type: Input
    }],
    attributes: [{
      type: Input
    }],
    characterData: [{
      type: Input
    }],
    characterDataOldValue: [{
      type: Input
    }],
    childList: [{
      type: Input
    }],
    subtree: [{
      type: Input
    }],
    waMutationObserver: [{
      type: Output
    }]
  });
})();
var MutationObserverService = class _MutationObserverService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const config = inject(MUTATION_OBSERVER_INIT);
    super((subscriber) => {
      const observer = new SafeObserver((records) => {
        subscriber.next(records);
      });
      observer.observe(nativeElement, config);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function MutationObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MutationObserverService,
    factory: _MutationObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fade.mjs
var BUFFER = 1;
var TuiFadeStyles = class _TuiFadeStyles {
  static {
    this.ɵfac = function TuiFadeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFadeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFadeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-fade-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiFadeStyles_Template(rf, ctx) {
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFadeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-fade-styles"
      },
      styles: ["[tuiFade]{scrollbar-width:none;-ms-overflow-style:none;transition-property:-webkit-mask-position;transition-property:mask-position;transition-property:mask-position,-webkit-mask-position;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;overflow:auto;text-overflow:unset!important;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}[tuiFade]::-webkit-scrollbar,[tuiFade]::-webkit-scrollbar-thumb{display:none}[tuiFade]:not([data-orientation=vertical]){overflow-y:hidden;-webkit-mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);mask-image:linear-gradient(to right,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to left,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(#000,#000);-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;-webkit-mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%));mask-size:calc(51% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),calc(50% + var(--fade-size) + var(--fade-offset)) var(--line-height, 100%),100% calc(100% - var(--line-height, 100%))}[tuiFade]:not([data-orientation=vertical])._start{-webkit-mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top;mask-position:left bottom,calc(100% + var(--fade-size) + var(--fade-offset)) bottom,top}[tuiFade]:not([data-orientation=vertical])._end{-webkit-mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top;mask-position:calc(-1 * var(--fade-size) - var(--fade-offset)) bottom,right bottom,top}[tuiFade]:not([data-orientation=vertical])._start._end{-webkit-mask-position:left bottom,right bottom,top;mask-position:left bottom,right bottom,top}[tuiFade][data-orientation=vertical]{overflow-x:hidden;-webkit-mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));mask-image:linear-gradient(to bottom,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset))),linear-gradient(to top,transparent var(--fade-offset),#000 calc(var(--fade-size) + var(--fade-offset)));-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left calc(100% + var(--fade-size) + var(--fade-offset));-webkit-mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset));mask-size:100% calc(51% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._start{-webkit-mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset));mask-position:left top,left calc(100% + var(--fade-size) + var(--fade-offset))}[tuiFade][data-orientation=vertical]._end{-webkit-mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom;mask-position:left calc(-1 * var(--fade-size) - var(--fade-offset)),left bottom}[tuiFade][data-orientation=vertical]._start._end{-webkit-mask-position:left top,left bottom;mask-position:left top,left bottom}\n"]
    }]
  }], null, null);
})();
var TuiFade = class _TuiFade {
  constructor() {
    this.lineHeight = null;
    this.size = "1.5em";
    this.offset = "0em";
    this.orientation = "horizontal";
    const el = tuiInjectElement();
    tuiWithStyles(TuiFadeStyles);
    merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(el, "scroll")).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      el.classList.toggle("_start", !!el.scrollLeft || !!el.scrollTop);
      el.classList.toggle("_end", this.isEnd(el));
    });
  }
  isEnd(el) {
    if (this.orientation === "vertical") {
      return Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight - BUFFER;
    }
    return Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth - BUFFER || // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
    el.scrollHeight > el.clientHeight + 4 * BUFFER;
  }
  static {
    this.ɵfac = function TuiFade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFade)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFade,
      selectors: [["", "tuiFade", ""]],
      hostVars: 9,
      hostBindings: function TuiFade_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation);
          ɵɵstyleProp("line-height", ctx.lineHeight)("--line-height", ctx.lineHeight)("--fade-size", ctx.size)("--fade-offset", ctx.offset);
        }
      },
      inputs: {
        lineHeight: [0, "tuiFadeHeight", "lineHeight"],
        size: [0, "tuiFadeSize", "size"],
        offset: [0, "tuiFadeOffset", "offset"],
        orientation: [0, "tuiFade", "orientation"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFade, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFade]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        "[style.line-height]": "lineHeight",
        "[style.--line-height]": "lineHeight",
        "[style.--fade-size]": "size",
        "[style.--fade-offset]": "offset",
        "[attr.data-orientation]": "orientation"
      }
    }]
  }], function() {
    return [];
  }, {
    lineHeight: [{
      type: Input,
      args: ["tuiFadeHeight"]
    }],
    size: [{
      type: Input,
      args: ["tuiFadeSize"]
    }],
    offset: [{
      type: Input,
      args: ["tuiFadeOffset"]
    }],
    orientation: [{
      type: Input,
      args: ["tuiFade"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-fluid-typography.mjs
var TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS = {
  min: 0.625,
  max: 1.5
};
var TUI_FLUID_TYPOGRAPHY_OPTIONS = tuiCreateToken(TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS);
function tuiFluidTypographyOptionsProvider(options) {
  return tuiProvideOptions(TUI_FLUID_TYPOGRAPHY_OPTIONS, options, TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS);
}
var STEP = 1 / 16;
var TuiFluidTypography = class _TuiFluidTypography {
  constructor() {
    this.changes$ = new Subject();
    this.el = tuiInjectElement();
    this.options = inject(TUI_FLUID_TYPOGRAPHY_OPTIONS);
    this.sub = merge(this.changes$, inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    }), fromEvent(this.el, "input")).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => {
      const min = Number(this.tuiFluidTypography[0] || this.options.min);
      const max = Number(this.tuiFluidTypography[1] || this.options.max);
      for (let i = max; i >= min; i -= STEP) {
        this.el.style.fontSize = `${i}rem`;
        if (this.el.scrollWidth <= this.el.clientWidth) {
          break;
        }
      }
    });
    this.tuiFluidTypography = "";
  }
  ngOnChanges() {
    this.changes$.next();
  }
  static {
    this.ɵfac = function TuiFluidTypography_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFluidTypography)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiFluidTypography,
      selectors: [["", "tuiFluidTypography", ""]],
      hostAttrs: ["tuiFluidTypography", ""],
      inputs: {
        tuiFluidTypography: "tuiFluidTypography"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFluidTypography, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiFluidTypography]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          characterData: true,
          subtree: true
        }
      }],
      host: {
        tuiFluidTypography: ""
      }
    }]
  }], null, {
    tuiFluidTypography: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-highlight.mjs
var [TUI_HIGHLIGHT_OPTIONS, tuiHighlightOptionsProvider] = tuiCreateOptions({
  highlightColor: "var(--tui-service-selection-background)"
});
var TuiHighlight = class _TuiHighlight {
  constructor() {
    this.el = tuiInjectElement();
    this.renderer = inject(Renderer2);
    this.doc = inject(DOCUMENT);
    this.highlight = this.setUpHighlight();
    this.treeWalker = this.doc.createTreeWalker(this.el, NodeFilter.SHOW_TEXT, svgNodeFilter);
    this.tuiHighlight = "";
    this.tuiHighlightColor = inject(TUI_HIGHLIGHT_OPTIONS).highlightColor;
    inject(ResizeObserverService, {
      self: true
    }).pipe(takeUntilDestroyed()).subscribe(() => this.updateStyles());
  }
  ngOnChanges() {
    this.updateStyles();
  }
  get match() {
    return this.indexOf(this.el.textContent) !== -1;
  }
  updateStyles() {
    this.highlight.style.display = "none";
    if (!this.match) {
      return;
    }
    this.treeWalker.currentNode = this.el;
    do {
      const index = this.indexOf(this.treeWalker.currentNode.nodeValue);
      if (index === -1) {
        continue;
      }
      const range = this.doc.createRange();
      range.setStart(this.treeWalker.currentNode, index);
      range.setEnd(this.treeWalker.currentNode, index + this.tuiHighlight.length);
      const hostRect = this.el.getBoundingClientRect();
      const {
        left,
        top,
        width,
        height
      } = range.getBoundingClientRect();
      const {
        style
      } = this.highlight;
      style.background = this.tuiHighlightColor;
      style.left = tuiPx(left - hostRect.left);
      style.top = tuiPx(top - hostRect.top);
      style.width = tuiPx(width);
      style.height = tuiPx(height);
      style.display = "block";
      return;
    } while (this.treeWalker.nextNode());
  }
  indexOf(source) {
    return !source || !this.tuiHighlight ? -1 : source.toLowerCase().indexOf(this.tuiHighlight.toLowerCase());
  }
  setUpHighlight() {
    const highlight = this.renderer.createElement("div");
    const {
      style
    } = highlight;
    style.background = this.tuiHighlightColor;
    style.zIndex = "-1";
    style.position = "absolute";
    this.renderer.appendChild(this.el, highlight);
    return highlight;
  }
  static {
    this.ɵfac = function TuiHighlight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHighlight)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHighlight,
      selectors: [["", "tuiHighlight", ""]],
      hostVars: 4,
      hostBindings: function TuiHighlight_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("position", "relative")("z-index", 0);
        }
      },
      inputs: {
        tuiHighlight: "tuiHighlight",
        tuiHighlightColor: "tuiHighlightColor"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHighlight, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHighlight]",
      providers: [ResizeObserverService],
      host: {
        "[style.position]": '"relative"',
        "[style.zIndex]": "0"
      }
    }]
  }], function() {
    return [];
  }, {
    tuiHighlight: [{
      type: Input
    }],
    tuiHighlightColor: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-icon-badge.mjs
var TuiIconBadgeStyles = class _TuiIconBadgeStyles {
  static {
    this.ɵfac = function TuiIconBadgeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconBadgeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiIconBadgeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-icon-badge"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiIconBadgeStyles_Template(rf, ctx) {
      },
      styles: ['[tuiIconBadge]:before{content:"";position:absolute;right:.143em;bottom:.143em;display:var(--t-icon-badge, none);inline-size:.57em;block-size:.57em;transform:translate(50%,50%);-webkit-mask:var(--t-icon-badge) no-repeat center / contain;mask:var(--t-icon-badge) no-repeat center / contain;background:currentColor}[tuiIconBadge][style*="--t-icon-badge:"]:after{-webkit-mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-icon-badge"
      },
      styles: ['[tuiIconBadge]:before{content:"";position:absolute;right:.143em;bottom:.143em;display:var(--t-icon-badge, none);inline-size:.57em;block-size:.57em;transform:translate(50%,50%);-webkit-mask:var(--t-icon-badge) no-repeat center / contain;mask:var(--t-icon-badge) no-repeat center / contain;background:currentColor}[tuiIconBadge][style*="--t-icon-badge:"]:after{-webkit-mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em);mask-image:var(--t-icon),radial-gradient(circle at bottom .1em right .1em,transparent calc(.4em - .5px),#000 .4em)}\n']
    }]
  }], null, null);
})();
var TuiIconBadge = class _TuiIconBadge {
  constructor() {
    this.icon = inject(TuiIcon);
    this.nothing = tuiWithStyles(TuiIconBadgeStyles);
    this.badgeSrc = signal(null);
  }
  set badge(icon) {
    this.badgeSrc.set(this.icon.resolve(icon));
  }
  static {
    this.ɵfac = function TuiIconBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiIconBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiIconBadge,
      selectors: [["tui-icon", "badge", ""]],
      hostAttrs: ["tuiIconBadge", ""],
      hostVars: 2,
      hostBindings: function TuiIconBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-icon-badge", ctx.badgeSrc());
        }
      },
      inputs: {
        badge: "badge"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiIconBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[badge]",
      host: {
        tuiIconBadge: "",
        "[style.--t-icon-badge]": "badgeSrc()"
      }
    }]
  }], null, {
    badge: [{
      type: Input
    }]
  });
})();

// node_modules/@ng-web-apis/intersection-observer/fesm2022/ng-web-apis-intersection-observer.mjs
var SafeObserver2 = typeof IntersectionObserver !== "undefined" ? IntersectionObserver : class {
  root = null;
  rootMargin = "";
  thresholds = [];
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
  takeRecords() {
    return [];
  }
};
var WA_INTERSECTION_ROOT = new InjectionToken("[WA_INTERSECTION_ROOT]");
var INTERSECTION_ROOT = WA_INTERSECTION_ROOT;
var WA_INTERSECTION_ROOT_MARGIN_DEFAULT = "0px 0px 0px 0px";
var INTERSECTION_ROOT_MARGIN_DEFAULT = WA_INTERSECTION_ROOT_MARGIN_DEFAULT;
var WA_INTERSECTION_ROOT_MARGIN = new InjectionToken("[WA_INTERSECTION_ROOT_MARGIN]", {
  providedIn: "root",
  factory: () => INTERSECTION_ROOT_MARGIN_DEFAULT
});
var INTERSECTION_ROOT_MARGIN = WA_INTERSECTION_ROOT_MARGIN;
function rootMarginFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionRootMargin") || INTERSECTION_ROOT_MARGIN_DEFAULT;
}
var WA_INTERSECTION_THRESHOLD_DEFAULT = 0;
var INTERSECTION_THRESHOLD_DEFAULT = WA_INTERSECTION_THRESHOLD_DEFAULT;
var WA_INTERSECTION_THRESHOLD = new InjectionToken("[WA_INTERSECTION_THRESHOLD]", {
  providedIn: "root",
  factory: () => INTERSECTION_THRESHOLD_DEFAULT
});
var INTERSECTION_THRESHOLD = WA_INTERSECTION_THRESHOLD;
function thresholdFactory() {
  return inject(ElementRef).nativeElement.getAttribute("waIntersectionThreshold")?.split(",").map(parseFloat) || INTERSECTION_THRESHOLD_DEFAULT;
}
var WaIntersectionObserverDirective = class _WaIntersectionObserverDirective extends SafeObserver2 {
  callbacks = /* @__PURE__ */ new Map();
  margin = "";
  threshold = "";
  constructor() {
    const root = inject(INTERSECTION_ROOT, {
      optional: true
    });
    super((entries) => {
      this.callbacks.forEach((callback, element) => {
        const filtered = entries.filter(({
          target
        }) => target === element);
        return filtered.length && callback(filtered, this);
      });
    }, {
      root: root?.nativeElement,
      rootMargin: rootMarginFactory(),
      threshold: thresholdFactory()
    });
  }
  observe(target, callback = () => {
  }) {
    super.observe(target);
    this.callbacks.set(target, callback);
  }
  unobserve(target) {
    super.unobserve(target);
    this.callbacks.delete(target);
  }
  ngOnDestroy() {
    this.disconnect();
  }
  static ɵfac = function WaIntersectionObserverDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObserverDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObserverDirective,
    selectors: [["", "waIntersectionObserver", ""]],
    inputs: {
      margin: [0, "waIntersectionRootMargin", "margin"],
      threshold: [0, "waIntersectionThreshold", "threshold"]
    },
    exportAs: ["IntersectionObserver"],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObserverDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObserver]",
      inputs: ["margin: waIntersectionRootMargin", "threshold: waIntersectionThreshold"],
      exportAs: "IntersectionObserver"
    }]
  }], function() {
    return [];
  }, null);
})();
var IntersectionObserveeService = class _IntersectionObserveeService extends Observable {
  constructor() {
    const nativeElement = inject(ElementRef).nativeElement;
    const observer = inject(WaIntersectionObserverDirective);
    super((subscriber) => {
      observer.observe(nativeElement, (entries) => {
        subscriber.next(entries);
      });
      return () => {
        observer.unobserve(nativeElement);
      };
    });
    return this.pipe(share());
  }
  static ɵfac = function IntersectionObserveeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserveeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserveeService,
    factory: _IntersectionObserveeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserveeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WaIntersectionObservee = class _WaIntersectionObservee {
  waIntersectionObservee = inject(IntersectionObserveeService);
  static ɵfac = function WaIntersectionObservee_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionObservee)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionObservee,
    selectors: [["", "waIntersectionObservee", ""]],
    outputs: {
      waIntersectionObservee: "waIntersectionObservee"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([IntersectionObserveeService])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionObservee, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionObservee]",
      outputs: ["waIntersectionObservee"],
      providers: [IntersectionObserveeService]
    }]
  }], null, null);
})();
var WaIntersectionRoot = class _WaIntersectionRoot {
  static ɵfac = function WaIntersectionRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WaIntersectionRoot)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _WaIntersectionRoot,
    selectors: [["", "waIntersectionRoot", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: INTERSECTION_ROOT,
      useExisting: ElementRef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WaIntersectionRoot, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[waIntersectionRoot]",
      providers: [{
        provide: INTERSECTION_ROOT,
        useExisting: ElementRef
      }]
    }]
  }], null, null);
})();
var WaIntersectionObserver = [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot];
var IntersectionObserverModule = class _IntersectionObserverModule {
  static ɵfac = function IntersectionObserverModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IntersectionObserverModule,
    imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
    exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverModule, [{
    type: NgModule,
    args: [{
      imports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      exports: [WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot]
    }]
  }], null, null);
})();
var IntersectionObserverService = class _IntersectionObserverService extends Observable {
  nativeElement = inject(ElementRef).nativeElement;
  rootMargin = inject(INTERSECTION_ROOT_MARGIN);
  threshold = inject(INTERSECTION_THRESHOLD);
  root = inject(INTERSECTION_ROOT, {
    optional: true
  })?.nativeElement ?? null;
  constructor() {
    super((subscriber) => {
      const observer = new SafeObserver2((entries) => {
        subscriber.next(entries);
      }, {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      });
      observer.observe(this.nativeElement);
      return () => {
        observer.disconnect();
      };
    });
  }
  static ɵfac = function IntersectionObserverService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntersectionObserverService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _IntersectionObserverService,
    factory: _IntersectionObserverService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntersectionObserverService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var WA_INTERSECTION_OBSERVER_SUPPORT = new InjectionToken("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]", {
  providedIn: "root",
  factory: () => !!inject(WA_WINDOW).IntersectionObserver
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-lazy-loading.mjs
var TuiLazyLoadingService = class _TuiLazyLoadingService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.src$ = new Subject();
    this.intersections$ = inject(IntersectionObserverService);
    this.stream$ = this.src$.pipe(switchMap((src) => this.intersections$.pipe(filter((entry) => !!entry[0]?.isIntersecting), map(() => src), take(1))), tuiWatch());
  }
  next(src) {
    this.src$.next(src);
  }
  static {
    this.ɵfac = function TuiLazyLoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLazyLoadingService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiLazyLoadingService,
      factory: _TuiLazyLoadingService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLazyLoadingService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiImgLazyLoading = class _TuiImgLazyLoading {
  constructor() {
    this.isServer = isPlatformServer(inject(PLATFORM_ID));
    this.loading$ = inject(TuiLazyLoadingService);
    this.supported = "loading" in tuiInjectElement();
    this.src = signal(null);
    this.background = signal(this.isServer ? "" : "var(--tui-background-neutral-2)");
    this.animation = signal(this.isServer ? "" : "tuiSkeletonVibe ease-in-out 1s infinite alternate");
    this.$ = !this.supported && this.loading$.pipe(takeUntilDestroyed()).subscribe((src) => this.src.set(src));
  }
  set srcSetter(src) {
    if (this.supported) {
      this.src.set(src);
    } else {
      this.loading$.next(src);
    }
  }
  unset() {
    this.background.set("");
    this.animation.set("");
  }
  static {
    this.ɵfac = function TuiImgLazyLoading_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiImgLazyLoading)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiImgLazyLoading,
      selectors: [["img", "loading", "lazy"], ["img", "tuiLoading", "lazy"]],
      hostVars: 6,
      hostBindings: function TuiImgLazyLoading_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("load", function TuiImgLazyLoading_load_HostBindingHandler() {
            return ctx.unset();
          })("error", function TuiImgLazyLoading_error_HostBindingHandler() {
            return ctx.unset();
          });
        }
        if (rf & 2) {
          ɵɵattribute("loading", ctx.supported ? "lazy" : null)("src", ctx.src(), ɵɵsanitizeUrl);
          ɵɵstyleProp("animation", ctx.animation())("background", ctx.background());
        }
      },
      inputs: {
        srcSetter: [0, "src", "srcSetter"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiLazyLoadingService, IntersectionObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiImgLazyLoading, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: 'img[loading="lazy"],img[tuiLoading="lazy"]',
      providers: [TuiLazyLoadingService, IntersectionObserverService],
      host: {
        "[style.animation]": "animation()",
        "[style.background]": "background()",
        "[attr.loading]": 'supported ? "lazy" : null',
        "[attr.src]": "src()",
        "(load)": "unset()",
        "(error)": "unset()"
      }
    }]
  }], null, {
    srcSetter: [{
      type: Input,
      args: ["src"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-password.mjs
var [TUI_PASSWORD_OPTIONS, tuiPasswordOptionsProvider] = tuiCreateOptions({
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye"
  }
});
var TuiPassword = class _TuiPassword {
  constructor() {
    this.options = inject(TUI_PASSWORD_OPTIONS);
    this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
      initialValue: ["", ""]
    });
    this.textfield = inject(TuiTextfieldComponent);
    this.hidden = signal(true);
    this.icon = tuiDirectiveBinding(TuiIcon, "icon", computed((size = this.textfield.options.size()) => {
      const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
      return tuiIsString(icon) ? icon : icon(size);
    }));
    this.hint = tuiDirectiveBinding(TuiHintDirective, "tuiHint", computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]));
  }
  toggle() {
    this.hidden.set(!this.hidden());
    this.textfield.input?.nativeElement.setAttribute("type", this.hidden() ? "password" : "text");
  }
  static {
    this.ɵfac = function TuiPassword_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPassword)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPassword,
      selectors: [["tui-icon", "tuiPassword", ""]],
      hostAttrs: [2, "cursor", "pointer"],
      hostVars: 2,
      hostBindings: function TuiPassword_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiPassword_click_HostBindingHandler() {
            return ctx.toggle();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("border", ctx.textfield.options.size() === "s" ? "0.25rem solid transparent" : null);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }]), ɵɵHostDirectivesFeature([TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintAppearance", "tuiHintContext", "tuiHintContext"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPassword, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-icon[tuiPassword]",
      providers: [{
        provide: TUI_APPEARANCE_OPTIONS,
        useValue: {
          appearance: "icon"
        }
      }],
      hostDirectives: [TuiWithAppearance, {
        directive: TuiHintDirective,
        inputs: ["tuiHintAppearance", "tuiHintContext"]
      }],
      host: {
        style: "cursor: pointer",
        "(click)": "toggle()",
        "[style.border]": 'textfield.options.size() === "s" ? "0.25rem solid transparent" : null'
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-present.mjs
var TuiPresent = class _TuiPresent {
  constructor() {
    this.visibility$ = new BehaviorSubject(false);
    this.tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));
  }
  ngOnDestroy() {
    this.visibility$.next(false);
  }
  onAnimation(visibility) {
    this.visibility$.next(visibility);
  }
  static {
    this.ɵfac = function TuiPresent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPresent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPresent,
      selectors: [["", "tuiPresentChange", ""]],
      hostVars: 2,
      hostBindings: function TuiPresent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationcancel.self", function TuiPresent_animationcancel_self_HostBindingHandler() {
            return ctx.onAnimation(false);
          })("animationstart.self", function TuiPresent_animationstart_self_HostBindingHandler() {
            return ctx.onAnimation(true);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("animation", "tuiPresent 1s infinite");
        }
      },
      outputs: {
        tuiPresentChange: "tuiPresentChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPresent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPresentChange]",
      host: {
        "[style.animation]": '"tuiPresent 1s infinite"',
        "(animationcancel.self)": "onAnimation(false)",
        "(animationstart.self)": "onAnimation(true)"
      }
    }]
  }], null, {
    tuiPresentChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-sensitive.mjs
var rowsInSvg = 3;
var TuiSensitiveStyles = class _TuiSensitiveStyles {
  static {
    this.ɵfac = function TuiSensitiveStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSensitiveStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSensitiveStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-sensitive-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiSensitiveStyles_Template(rf, ctx) {
      },
      styles: [`.tui-sensitive{position:relative;line-height:1em;clip-path:inset(0 round .25rem)}.tui-sensitive:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block!important;background:currentColor;border-radius:inherit;-webkit-mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);margin:0!important}.tui-sensitive.tui-sensitive{-webkit-text-fill-color:transparent}span.tui-sensitive,a.tui-sensitive{display:inline-block}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSensitiveStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-sensitive-styles"
      },
      styles: [`.tui-sensitive{position:relative;line-height:1em;clip-path:inset(0 round .25rem)}.tui-sensitive:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";display:block!important;background:currentColor;border-radius:inherit;-webkit-mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);mask:url('data:image/svg+xml,<svg width="360" height="72" preserveAspectRatio="none" fill="black" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.2" width="24" height="24"/><rect opacity="0.2" x="336" y="24" width="24" height="24"/><rect opacity="0.35" x="120" y="24" width="24" height="24"/><rect opacity="0.35" x="216" width="24" height="24"/><rect opacity="0.36" x="24" width="24" height="24"/><rect opacity="0.36" x="312" y="24" width="24" height="24"/><rect opacity="0.25" x="144" y="24" width="24" height="24"/><rect opacity="0.25" x="192" width="24" height="24"/><rect opacity="0.3" x="48" width="24" height="24"/><rect opacity="0.3" x="288" y="24" width="24" height="24"/><rect opacity="0.3" x="96" y="24" width="24" height="24"/><rect opacity="0.3" x="240" y="0" width="24" height="24"/><rect opacity="0.24" x="72" width="24" height="24"/><rect opacity="0.34" x="264" y="24" width="24" height="24"/><rect opacity="0.2" x="168" y="24" width="24" height="24"/><rect opacity="0.35" y="24" width="24" height="24"/><rect opacity="0.35" x="336" y="0" width="24" height="24"/><rect opacity="0.3" x="120" y="0" width="24" height="24" /><rect opacity="0.3" x="216" y="24" width="24" height="24"/><rect opacity="0.3" x="24" y="24" width="24" height="24"/><rect opacity="0.3" x="312" y="0" width="24" height="24"/><rect opacity="0.36" x="144" y="0" width="24" height="24"/><rect opacity="0.36" x="192" y="24" width="24" height="24"/><rect opacity="0.4" x="48" y="24" width="24" height="24"/><rect opacity="0.4" x="288" y="0" width="24" height="24"/><rect opacity="0.38" x="96" y="0" width="24" height="24"/><rect opacity="0.21" x="240" y="24" width="24" height="24"/><rect opacity="0.2" x="72" y="24" width="24" height="24"/><rect opacity="0.2" x="264" y="0" width="24" height="24"/><rect opacity="0.32" x="168" y="0" width="24" height="24"/><rect opacity="0.35" x="240" y="48" width="24" height="24"/><rect opacity="0.4" x="72" y="48" width="24" height="24"/><rect opacity="0.21" x="192" y="48" width="24" height="24"/><rect opacity="0.3" x="48" y="48" width="24" height="24"/> <rect opacity="0.34" x="216" y="48" width="24" height="24"/><rect opacity="0.21" x="24" y="48" width="24" height="24"/><rect opacity="0.3" x="168" y="48" width="24" height="24"/><rect opacity="0.32" y="48" width="24" height="24"/><rect opacity="0.36" x="264" y="48" width="24" height="24"/> <rect opacity="0.31" x="288" y="48" width="24" height="24"/><rect opacity="0.3" x="96" y="48" width="24" height="24"/><rect opacity="0.25" x="312" y="48" width="24" height="24"/><rect opacity="0.28" x="144" y="48" width="24" height="24"/><rect opacity="0.36" x="336" y="48" width="24" height="24"/><rect opacity="0.21" x="120" y="48" width="24" height="24"/></svg>') var(--t-offset, 0) 0 / auto var(--t-mask-height);margin:0!important}.tui-sensitive.tui-sensitive{-webkit-text-fill-color:transparent}span.tui-sensitive,a.tui-sensitive{display:inline-block}
`]
    }]
  }], null, null);
})();
var TuiSensitive = class _TuiSensitive {
  constructor() {
    this.nothing = tuiWithStyles(TuiSensitiveStyles);
    this.offset = Math.round(Math.random() * 10) * 10;
    this.height = toSignal(inject(ResizeObserverService, {
      self: true
    }).pipe(map((entry) => {
      const height = entry[0]?.contentRect.height ?? 0;
      return [Math.max(2, Math.floor(height / 16) + 1), height];
    }), map(([rows, height]) => height * (rowsInSvg / rows)), tuiZonefull(), tuiWatch()));
    this.tuiSensitive = false;
  }
  static {
    this.ɵfac = function TuiSensitive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSensitive)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSensitive,
      selectors: [["", "tuiSensitive", ""]],
      hostVars: 6,
      hostBindings: function TuiSensitive_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-offset", ctx.offset, "px")("--t-mask-height", ctx.height(), "px");
          ɵɵclassProp("tui-sensitive", ctx.tuiSensitive);
        }
      },
      inputs: {
        tuiSensitive: "tuiSensitive"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSensitive, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSensitive]",
      providers: [ResizeObserverService],
      host: {
        "[style.--t-offset.px]": "offset",
        "[style.--t-mask-height.px]": "height()",
        "[class.tui-sensitive]": "tuiSensitive"
      }
    }]
  }], null, {
    tuiSensitive: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-skeleton.mjs
var FADE = [{
  opacity: 0.06
}, {
  opacity: 1
}];
var TuiSkeletonStyles = class _TuiSkeletonStyles {
  static {
    this.ɵfac = function TuiSkeletonStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSkeletonStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSkeletonStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-skeleton-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiSkeletonStyles_Template(rf, ctx) {
      },
      styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSkeletonStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-skeleton-styles"
      },
      styles: ["@keyframes tuiSkeleton{0%{opacity:.03}to{opacity:.06}}[tuiSkeleton]._skeleton{color:transparent;background:var(--tui-background-base)!important;box-shadow:none!important;filter:contrast(0) brightness(0);animation:tuiSkeleton ease-in-out 1s infinite alternate;-webkit-user-select:none;user-select:none;pointer-events:none}[tuiSkeleton]._skeleton[data-tui-skeleton]{background:transparent!important}[tuiSkeleton]._skeleton[data-tui-skeleton]:before{content:attr(data-tui-skeleton);background:var(--tui-background-base);font-size:smaller;-webkit-box-decoration-break:clone;box-decoration-break:clone;border-radius:.25rem}[tuiTheme=dark] [tuiSkeleton]._skeleton,[tuiTheme=dark][tuiSkeleton]._skeleton{filter:contrast(0) brightness(0) invert(1)}\n"]
    }]
  }], null, null);
})();
var TuiSkeleton = class _TuiSkeleton {
  constructor() {
    this.el = tuiInjectElement();
    this.duration = inject(TUI_ANIMATIONS_SPEED) * TUI_ANIMATIONS_DEFAULT_DURATION * 2;
    this.nothing = tuiWithStyles(TuiSkeletonStyles);
    this.tuiSkeleton = false;
  }
  ngOnChanges({
    tuiSkeleton
  }) {
    this.animation?.cancel();
    if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
      this.animation = this.el.animate(FADE, this.duration);
    }
  }
  getPlaceholder(value) {
    switch (typeof value) {
      case "number":
        return Array.from({
          length: value
        }).map(() => CHAR_NO_BREAK_SPACE.repeat(getLength())).join(" ");
      case "string":
        return value;
      default:
        return null;
    }
  }
  static {
    this.ɵfac = function TuiSkeleton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSkeleton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSkeleton,
      selectors: [["", "tuiSkeleton", ""]],
      hostAttrs: ["tuiSkeleton", ""],
      hostVars: 3,
      hostBindings: function TuiSkeleton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-tui-skeleton", ctx.getPlaceholder(ctx.tuiSkeleton));
          ɵɵclassProp("_skeleton", ctx.tuiSkeleton);
        }
      },
      inputs: {
        tuiSkeleton: "tuiSkeleton"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
__decorate([tuiPure], TuiSkeleton.prototype, "getPlaceholder", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSkeleton, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSkeleton]",
      host: {
        tuiSkeleton: "",
        "[class._skeleton]": "tuiSkeleton",
        "[attr.data-tui-skeleton]": "getPlaceholder(tuiSkeleton)"
      }
    }]
  }], null, {
    tuiSkeleton: [{
      type: Input
    }],
    getPlaceholder: []
  });
})();
function getLength() {
  return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-unfinished-validator.mjs
function tuiCreateUnfinishedValidator(element, message) {
  return ({
    value
  }) => value === null && element.value !== "" ? {
    unfinished: new TuiValidationError(message)
  } : null;
}
var TuiUnfinishedValidator = class _TuiUnfinishedValidator {
  constructor() {
    this.validate = tuiCreateUnfinishedValidator(tuiInjectElement(), tuiInjectElement().getAttribute("tuiUnfinishedValidator") || "");
  }
  static {
    this.ɵfac = function TuiUnfinishedValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiUnfinishedValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnfinishedValidator,
      selectors: [["input", "tuiUnfinishedValidator", ""]],
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
      selector: "input[tuiUnfinishedValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-directives-unmask-handler.mjs
var TuiUnmaskHandler = class _TuiUnmaskHandler extends TuiValueTransformer {
  constructor() {
    super(...arguments);
    this.tuiUnmaskHandler = identity;
    this.maskito = null;
  }
  fromControlValue(controlValue) {
    return maskitoTransform(String(controlValue ?? ""), this.maskito || MASKITO_DEFAULT_OPTIONS);
  }
  toControlValue(value) {
    return this.tuiUnmaskHandler(value);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiUnmaskHandler_BaseFactory;
      return function TuiUnmaskHandler_Factory(__ngFactoryType__) {
        return (ɵTuiUnmaskHandler_BaseFactory || (ɵTuiUnmaskHandler_BaseFactory = ɵɵgetInheritedFactory(_TuiUnmaskHandler)))(__ngFactoryType__ || _TuiUnmaskHandler);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiUnmaskHandler,
      selectors: [["", "maskito", "", "tuiUnmaskHandler", ""]],
      inputs: {
        tuiUnmaskHandler: "tuiUnmaskHandler",
        maskito: "maskito"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TuiValueTransformer, _TuiUnmaskHandler)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiUnmaskHandler, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[maskito][tuiUnmaskHandler]",
      providers: [tuiProvide(TuiValueTransformer, TuiUnmaskHandler)]
    }]
  }], null, {
    tuiUnmaskHandler: [{
      type: Input
    }],
    maskito: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-avatar.mjs
var _c0 = ["*"];
function TuiAvatar_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.value, ɵɵsanitizeUrl);
  }
}
function TuiAvatar_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.value.toString());
  }
}
function TuiAvatar_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.value);
  }
}
function TuiAvatar_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
function TuiAvatarLabeled_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function TuiAvatarLabeled_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_span_1_Template, 2, 1, "span", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.split(ctx_r1.label));
  }
}
var TUI_AVATAR_DEFAULT_OPTIONS = {
  appearance: "",
  round: true,
  size: "l"
};
var TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);
function tuiAvatarOptionsProvider(options) {
  return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}
var TuiAvatar = class _TuiAvatar {
  constructor() {
    this.options = inject(TUI_AVATAR_OPTIONS);
    this.size = this.options.size;
    this.round = this.options.round;
  }
  get value() {
    return this.src || "";
  }
  get svg() {
    return tuiIsString(this.value) && this.value.endsWith(".svg");
  }
  get type() {
    if (this.value && !tuiIsString(this.value)) {
      return "img";
    }
    if (this.value.startsWith("@tui.")) {
      return "icon";
    }
    if (this.value.length > 0 && this.value.length < 3) {
      return "text";
    }
    return this.value.length ? "img" : "content";
  }
  static {
    this.ɵfac = function TuiAvatar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatar,
      selectors: [["tui-avatar"], ["button", "tuiAvatar", ""], ["a", "tuiAvatar", ""]],
      hostVars: 6,
      hostBindings: function TuiAvatar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-type", ctx.type);
          ɵɵclassProp("_round", ctx.round)("_svg", ctx.svg);
        }
      },
      inputs: {
        size: "size",
        round: "round",
        src: "src"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance]), ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 4,
      consts: [[3, "ngSwitch"], ["alt", "", "loading", "lazy", 3, "src", 4, "ngSwitchCase"], [3, "icon", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["alt", "", "loading", "lazy", 3, "src"], [3, "icon"]],
      template: function TuiAvatar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementContainerStart(0, 0);
          ɵɵtemplate(1, TuiAvatar_img_1_Template, 1, 1, "img", 1)(2, TuiAvatar_tui_icon_2_Template, 1, 1, "tui-icon", 2)(3, TuiAvatar_ng_container_3_Template, 2, 1, "ng-container", 3)(4, TuiAvatar_ng_container_4_Template, 2, 0, "ng-container", 4);
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngSwitch", ctx.type);
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "img");
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "icon");
          ɵɵadvance();
          ɵɵproperty("ngSwitchCase", "text");
        }
      },
      dependencies: [NgSwitch, NgSwitchCase, NgSwitchDefault, TuiIcon],
      styles: ['[_nghost-%COMP%]{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}[data-size=xs][_nghost-%COMP%]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}[data-size=xs][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-size:.5625rem}[data-size=s][_nghost-%COMP%]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}[data-size=s][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-xs);font-weight:700}[data-size=m][_nghost-%COMP%]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}[data-size=m][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-m);font-weight:700}[data-size=l][_nghost-%COMP%]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}[data-size=l][data-type=content][_nghost-%COMP%]{font:var(--tui-font-text-l);font-weight:700}[data-size=xl][_nghost-%COMP%]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}[data-size=xl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-4)}[data-size=xxl][_nghost-%COMP%]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}[data-size=xxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-size=xxxl][_nghost-%COMP%]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}[data-size=xxxl][data-type=content][_nghost-%COMP%]{font:var(--tui-font-heading-3)}[data-type=img][_nghost-%COMP%]:not(._svg){background:transparent}[data-type=icon][_nghost-%COMP%]:before{content:""}._round[_nghost-%COMP%]{--t-radius: calc(var(--t-size) / 2)}._svg[_nghost-%COMP%]   img[_ngcontent-%COMP%]{padding:20%;object-fit:contain}[_nghost-%COMP%]   tui-icon[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:60%;block-size:60%}[_nghost-%COMP%]     img, [_nghost-%COMP%]     picture, [_nghost-%COMP%]     video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar,button[tuiAvatar],a[tuiAvatar]",
      imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_AVATAR_OPTIONS)],
      hostDirectives: [TuiWithAppearance],
      host: {
        "[attr.data-size]": "size",
        "[attr.data-type]": "type",
        "[class._round]": "round",
        "[class._svg]": "svg"
      },
      template: `<ng-container [ngSwitch]="type">
    <img
        *ngSwitchCase="'img'"
        alt=""
        loading="lazy"
        [src]="value"
    />
    <tui-icon
        *ngSwitchCase="'icon'"
        [icon]="value.toString()"
    />
    <ng-container *ngSwitchCase="'text'">{{ value }}</ng-container>
    <ng-container *ngSwitchDefault>
        <ng-content />
    </ng-container>
</ng-container>
`,
      styles: [':host{--t-size: 3.5rem;--t-radius: .75rem;position:relative;display:inline-flex;flex-shrink:0;inline-size:var(--t-size);block-size:var(--t-size);align-items:center;justify-content:center;overflow:hidden;white-space:nowrap;border-radius:var(--t-radius);border:none;background:var(--tui-background-neutral-1);color:var(--tui-text-secondary);vertical-align:middle;box-sizing:border-box;padding:.25rem;opacity:.999}:host[data-size=xs]{--t-size: var(--tui-height-xs);--t-radius: .5rem;font:var(--tui-font-text-xs);font-weight:700}:host[data-size=xs][data-type=content]{font:var(--tui-font-text-m);font-size:.5625rem}:host[data-size=s]{--t-size: var(--tui-height-s);--t-radius: .5rem;font:var(--tui-font-text-s);font-weight:700}:host[data-size=s][data-type=content]{font:var(--tui-font-text-xs);font-weight:700}:host[data-size=m]{--t-size: calc(var(--tui-height-m) - .25rem);--t-radius: .75rem;font:var(--tui-font-text-l);font-weight:700}:host[data-size=m][data-type=content]{font:var(--tui-font-text-m);font-weight:700}:host[data-size=l]{--t-size: var(--tui-height-l);--t-radius: .75rem;font:var(--tui-font-heading-5)}:host[data-size=l][data-type=content]{font:var(--tui-font-text-l);font-weight:700}:host[data-size=xl]{--t-size: 5rem;--t-radius: .75rem;font:var(--tui-font-heading-3)}:host[data-size=xl][data-type=content]{font:var(--tui-font-heading-4)}:host[data-size=xxl]{--t-size: 6rem;--t-radius: 1rem;font:var(--tui-font-heading-3)}:host[data-size=xxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-size=xxxl]{--t-size: 8rem;--t-radius: 1.25rem;font:var(--tui-font-heading-2)}:host[data-size=xxxl][data-type=content]{font:var(--tui-font-heading-3)}:host[data-type=img]:not(._svg){background:transparent}:host[data-type=icon]:before{content:""}:host._round{--t-radius: calc(var(--t-size) / 2)}:host._svg img{padding:20%;object-fit:contain}:host tui-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);inline-size:60%;block-size:60%}:host ::ng-deep img,:host ::ng-deep picture,:host ::ng-deep video{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;object-fit:cover;box-sizing:border-box}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    round: [{
      type: Input
    }],
    src: [{
      type: Input
    }]
  });
})();
var TuiAvatarLabeled = class _TuiAvatarLabeled {
  constructor() {
    this.label = "";
  }
  split(label) {
    return label.split(" ");
  }
  static {
    this.ɵfac = function TuiAvatarLabeled_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarLabeled)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarLabeled,
      selectors: [["tui-avatar-labeled"]],
      inputs: {
        label: "label"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 1,
      consts: [[4, "ngIf"], ["tuiFade", "", 4, "ngFor", "ngForOf"], ["tuiFade", ""]],
      template: function TuiAvatarLabeled_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiAvatarLabeled_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.label.length);
        }
      },
      dependencies: [NgForOf, NgIf, TuiFade],
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiAvatarLabeled.prototype, "split", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarLabeled, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-labeled",
      imports: [NgForOf, NgIf, TuiFade],
      template: `
        <ng-content></ng-content>
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["tui-avatar-labeled{display:flex;inline-size:3.5rem;box-sizing:content-box;flex-direction:column;text-align:center;align-items:center;line-height:.895rem;font-size:.75rem;padding:0 .5rem;white-space:nowrap}tui-avatar-labeled tui-avatar{margin-bottom:.375rem}tui-avatar-labeled [tuiFade]{inline-size:calc(100% + 1rem)}\n"]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    split: []
  });
})();
var TuiAvatarOutlineStyles = class _TuiAvatarOutlineStyles {
  static {
    this.ɵfac = function TuiAvatarOutlineStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutlineStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarOutlineStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-avatar-outline"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiAvatarOutlineStyles_Template(rf, ctx) {
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutlineStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-avatar-outline"
      },
      styles: ['[tuiAvatarOutline]{--t-outline: .1875rem;--t-gap: .125rem}[tuiAvatarOutline][data-size=xs],[tuiAvatarOutline][data-size=s],[tuiAvatarOutline][data-size=m]{--t-outline: .125rem;--t-gap: .0625rem}[tuiAvatarOutline]._outline{-webkit-mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,#000,#000 calc(100% - var(--t-gap) - var(--t-outline) - .5px),transparent calc(100% - var(--t-gap) - var(--t-outline)),transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}[tuiAvatarOutline]._outline:after{content:"";position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:var(--t-fill);-webkit-mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)));mask:radial-gradient(closest-side,transparent,transparent calc(100% - var(--t-outline) - .5px),#000 calc(100% - var(--t-outline)))}\n']
    }]
  }], null, null);
})();
var TuiAvatarOutline = class _TuiAvatarOutline {
  constructor() {
    this.nothing = tuiWithStyles(TuiAvatarOutlineStyles);
    this.tuiAvatarOutline = "";
  }
  get value() {
    return this.tuiAvatarOutline === "" ? "var(--tui-background-accent-1)" : this.tuiAvatarOutline;
  }
  static {
    this.ɵfac = function TuiAvatarOutline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarOutline)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAvatarOutline,
      selectors: [["", "tuiAvatarOutline", ""]],
      hostVars: 4,
      hostBindings: function TuiAvatarOutline_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-fill", ctx.value);
          ɵɵclassProp("_outline", ctx.value);
        }
      },
      inputs: {
        tuiAvatarOutline: "tuiAvatarOutline"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarOutline, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAvatarOutline]",
      host: {
        "[style.--t-fill]": "value",
        "[class._outline]": "value"
      }
    }]
  }], null, {
    tuiAvatarOutline: [{
      type: Input
    }]
  });
})();
var TuiAvatarStack = class _TuiAvatarStack {
  constructor() {
    this.direction = "right";
  }
  static {
    this.ɵfac = function TuiAvatarStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAvatarStack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAvatarStack,
      selectors: [["tui-avatar-stack"]],
      hostVars: 1,
      hostBindings: function TuiAvatarStack_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.direction);
        }
      },
      inputs: {
        direction: "direction"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function TuiAvatarStack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAvatarStack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-avatar-stack",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-direction]": "direction"
      },
      styles: ["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"]
    }]
  }], null, {
    direction: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge.mjs
var TUI_BADGE_DEFAULT_OPTIONS = {
  appearance: "",
  size: "l"
};
var TUI_BADGE_OPTIONS = tuiCreateToken(TUI_BADGE_DEFAULT_OPTIONS);
function tuiBadgeOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}
var TuiBadgeStyles = class _TuiBadgeStyles {
  static {
    this.ɵfac = function TuiBadgeStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-badge"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiBadgeStyles_Template(rf, ctx) {
      },
      styles: ['tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin-inline-end:-.25rem}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[tuiStatus][data-appearance=error]:before,[tuiBadge][tuiStatus][data-appearance=error]:before,tui-badge[tuiStatus][data-appearance=success]:before,[tuiBadge][tuiStatus][data-appearance=success]:before,tui-badge[tuiStatus][data-appearance=negative]:before,[tuiBadge][tuiStatus][data-appearance=negative]:before,tui-badge[tuiStatus][data-appearance=positive]:before,[tuiBadge][tuiStatus][data-appearance=positive]:before,tui-badge[tuiStatus][data-appearance=warning]:before,[tuiBadge][tuiStatus][data-appearance=warning]:before,tui-badge[tuiStatus][data-appearance=info]:before,[tuiBadge][tuiStatus][data-appearance=info]:before,tui-badge[tuiStatus][data-appearance=neutral]:before,[tuiBadge][tuiStatus][data-appearance=neutral]:before{content:"";display:block;margin:0}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-badge"
      },
      styles: ['tui-badge,[tuiBadge]{--t-icon-size: 1rem;--t-padding: 0 .5rem;--t-size: var(--tui-height-xs);--t-margin: -.25rem;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));border-radius:6rem;background:#959595;color:var(--tui-background-base);padding:var(--t-padding);block-size:var(--t-size);min-inline-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;font:var(--tui-font-text-s)}tui-badge>img,[tuiBadge]>img,tui-badge>tui-svg,[tuiBadge]>tui-svg,tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge>tui-avatar,[tuiBadge]>tui-avatar,tui-badge>tui-badge,[tuiBadge]>tui-badge,tui-badge>[tuiBadge],[tuiBadge]>[tuiBadge],tui-badge>[tuiRadio],[tuiBadge]>[tuiRadio],tui-badge>[tuiSwitch],[tuiBadge]>[tuiSwitch],tui-badge>[tuiCheckbox],[tuiBadge]>[tuiCheckbox],tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{margin:var(--t-margin)}tui-badge[tuiStatus]:before,[tuiBadge][tuiStatus]:before{inline-size:.375rem;block-size:.375rem;margin-inline-end:-.25rem}tui-badge>tui-icon,[tuiBadge]>tui-icon,tui-badge[tuiIcons]:before,[tuiBadge][tuiIcons]:before,tui-badge[tuiIcons]:after,[tuiBadge][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-badge[data-appearance=error],[tuiBadge][data-appearance=error],tui-badge[data-appearance=negative],[tuiBadge][data-appearance=negative]{--t-status: var(--tui-status-negative)}tui-badge[data-appearance=success],[tuiBadge][data-appearance=success],tui-badge[data-appearance=positive],[tuiBadge][data-appearance=positive]{--t-status: var(--tui-status-positive)}tui-badge[data-appearance=warning],[tuiBadge][data-appearance=warning]{--t-status: var(--tui-status-warning)}tui-badge[data-appearance=info],[tuiBadge][data-appearance=info]{--t-status: var(--tui-status-info)}tui-badge[data-appearance=neutral],[tuiBadge][data-appearance=neutral]{--t-status: var(--tui-status-neutral)}tui-badge[tuiStatus][data-appearance=error]:before,[tuiBadge][tuiStatus][data-appearance=error]:before,tui-badge[tuiStatus][data-appearance=success]:before,[tuiBadge][tuiStatus][data-appearance=success]:before,tui-badge[tuiStatus][data-appearance=negative]:before,[tuiBadge][tuiStatus][data-appearance=negative]:before,tui-badge[tuiStatus][data-appearance=positive]:before,[tuiBadge][tuiStatus][data-appearance=positive]:before,tui-badge[tuiStatus][data-appearance=warning]:before,[tuiBadge][tuiStatus][data-appearance=warning]:before,tui-badge[tuiStatus][data-appearance=info]:before,[tuiBadge][tuiStatus][data-appearance=info]:before,tui-badge[tuiStatus][data-appearance=neutral]:before,[tuiBadge][tuiStatus][data-appearance=neutral]:before{content:"";display:block;margin:0}tui-badge[data-size=s],[tuiBadge][data-size=s]{--t-padding: 0 .3125rem;--t-size: 1rem;--t-icon-size: .625rem;--t-margin: -.125rem;font:var(--tui-font-text-xs)}tui-badge[data-size=s][tuiStatus]:before,[tuiBadge][data-size=s][tuiStatus]:before{inline-size:.25rem;block-size:.25rem;margin-inline-end:-.125rem}tui-badge[data-size=m],[tuiBadge][data-size=m]{--t-padding: 0 .375rem;--t-size: 1.25rem;--t-icon-size: .75rem;--t-margin: -.125rem}tui-badge[data-size=xl],[tuiBadge][data-size=xl]{--t-margin: -.25rem;--t-padding: 0 .75rem;--t-size: var(--tui-height-s);font:var(--tui-font-text-m)}tui-badge[data-size=xl][tuiStatus]:before,[tuiBadge][data-size=xl][tuiStatus]:before{inline-size:.5rem;block-size:.5rem;margin-inline-end:-.125rem}tui-badge[tuiAppearance][data-appearance=error],[tuiBadge][tuiAppearance][data-appearance=error],tui-badge[tuiAppearance][data-appearance=success],[tuiBadge][tuiAppearance][data-appearance=success],tui-badge[tuiAppearance][data-appearance=negative],[tuiBadge][tuiAppearance][data-appearance=negative],tui-badge[tuiAppearance][data-appearance=positive],[tuiBadge][tuiAppearance][data-appearance=positive],tui-badge[tuiAppearance][data-appearance=warning],[tuiBadge][tuiAppearance][data-appearance=warning],tui-badge[tuiAppearance][data-appearance=info],[tuiBadge][tuiAppearance][data-appearance=info],tui-badge[tuiAppearance][data-appearance=neutral],[tuiBadge][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}img[tuiBadge]{padding:0;inline-size:var(--t-size)}tui-icon[tuiBadge]{--t-margin: 0 !important;-webkit-mask:none;mask:none;block-size:var(--t-size);inline-size:var(--t-size)}tui-icon[tuiBadge][data-size=s]:after{-webkit-mask-size:.625rem;mask-size:.625rem}tui-icon[tuiBadge][data-size=m]:after{-webkit-mask-size:.75rem;mask-size:.75rem}tui-icon[tuiBadge][data-size=l]:after,tui-icon[tuiBadge][data-size=xl]:after{-webkit-mask-size:1rem;mask-size:1rem}\n']
    }]
  }], null, null);
})();
var TuiBadge = class _TuiBadge {
  constructor() {
    this.nothing = tuiWithStyles(TuiBadgeStyles);
    this.size = inject(TUI_BADGE_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBadge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadge,
      selectors: [["tui-badge"], ["", "tuiBadge", ""]],
      hostVars: 1,
      hostBindings: function TuiBadge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-badge,[tuiBadge]",
      providers: [tuiAppearanceOptionsProvider(TUI_BADGE_OPTIONS)],
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

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badge-notification.mjs
var _c02 = ["*"];
var TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS = {
  size: "m"
};
var TUI_BADGE_NOTIFICATION_OPTIONS = tuiCreateToken(TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
function tuiBadgeNotificationOptionsProvider(options) {
  return tuiProvideOptions(TUI_BADGE_NOTIFICATION_OPTIONS, options, TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS);
}
var TuiBadgeNotification = class _TuiBadgeNotification {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.size = inject(TUI_BADGE_NOTIFICATION_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBadgeNotification_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgeNotification)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgeNotification,
      selectors: [["tui-badge-notification"]],
      hostVars: 2,
      hostBindings: function TuiBadgeNotification_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiPop", ctx.options);
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c02,
      decls: 1,
      vars: 0,
      template: function TuiBadgeNotification_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[_nghost-%COMP%]{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}[data-size=m][_nghost-%COMP%]{--t-size: 1.25rem}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}[data-size=xs][_nghost-%COMP%]{--t-size: .375rem;padding:0;font-size:0}[_nghost-%COMP%]   [tuiIconButton][_nghost-%COMP%], [tuiIconButton]   [_nghost-%COMP%]{position:absolute;right:25%;top:25%}"],
      data: {
        animation: [tuiPop]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgeNotification, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-badge-notification",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiPop],
      host: {
        "[attr.data-size]": "size",
        "[@tuiPop]": "options"
      },
      styles: [":host{--t-size: 1.5rem;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;color:#fff;border-radius:2rem;white-space:nowrap;overflow:hidden;vertical-align:middle;font:var(--tui-font-text-s);max-inline-size:100%;padding:0 .25rem;background:#f52222;block-size:var(--t-size);min-inline-size:var(--t-size)}:host[data-size=m]{--t-size: 1.25rem}:host[data-size=s]{--t-size: 1rem;padding:0 .125rem;font:var(--tui-font-text-xs)}:host[data-size=xs]{--t-size: .375rem;padding:0;font-size:0}:host :host-context([tuiIconButton]){position:absolute;right:25%;top:25%}\n"]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-block.mjs
var TUI_BLOCK_DEFAULT_OPTIONS = {
  appearance: "outline-grayscale",
  size: "l"
};
var TUI_BLOCK_OPTIONS = tuiCreateToken(TUI_BLOCK_DEFAULT_OPTIONS);
function tuiBlockOptionsProvider(options) {
  return tuiProvideOptions(TUI_BLOCK_OPTIONS, options, TUI_BLOCK_DEFAULT_OPTIONS);
}
var TuiBlockStyles = class _TuiBlockStyles {
  static {
    this.ɵfac = function TuiBlockStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBlockStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-block"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiBlockStyles_Template(rf, ctx) {
      },
      styles: ['[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=""]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-block"
      },
      styles: ['[tuiBlock]{--t-height: var(--tui-height-l);--t-radius: var(--tui-radius-l);position:relative;display:inline-flex;gap:.75rem;color:var(--tui-text-primary);border-radius:var(--t-radius);min-block-size:var(--t-height);margin:0;box-sizing:border-box;cursor:pointer;overflow:hidden;font:var(--tui-font-text-m);padding:var(--tui-padding-l)}[tuiBlock][data-size=s]{gap:.5rem;font:var(--tui-font-text-ui-s);padding:.5rem;--t-height: var(--tui-height-s);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiBlock][data-size=s] [tuiTooltip]{margin:0 .125rem}[tuiBlock][data-size=m]{gap:.625rem;font:var(--tui-font-text-ui-m);padding:var(--tui-padding-m);--t-height: var(--tui-height-m);--t-radius: var(--tui-radius-m)}[tuiBlock][data-size=m] input:not([tuiBlock]){margin:.125rem}[tuiBlock][data-size=m] [tuiTooltip]{margin:.125rem}[tuiBlock]._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}[tuiBlock]._disabled :focus{visibility:hidden}[tuiBlock][data-appearance=""]{justify-content:center}[tuiBlock] input[tuiBlock]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;min-block-size:0;pointer-events:none;border-radius:inherit}[tuiBlock] tui-avatar{margin:-.25rem}[tuiBlock] [tuiTitle]{flex:1;gap:0;font:inherit;color:var(--tui-text-primary)}[tuiBlock] [tuiSubtitle]{color:var(--tui-text-secondary)}[tuiBlock] [tuiTooltip]{vertical-align:bottom;margin:.25rem;font-size:1rem;border:none}\n']
    }]
  }], null, null);
})();
var TuiBlock = class _TuiBlock {
  constructor() {
    this.nothing = tuiWithStyles(TuiBlockStyles);
    this.size = inject(TUI_BLOCK_OPTIONS).size;
  }
  static {
    this.ɵfac = function TuiBlock_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlock)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlock,
      selectors: [["label", "tuiBlock", ""], ["input", "tuiBlock", ""]],
      contentQueries: function TuiBlock_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      hostAttrs: ["tuiBlock", ""],
      hostVars: 3,
      hostBindings: function TuiBlock_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || "l");
          ɵɵclassProp("_disabled", !!(ctx.control == null ? null : ctx.control.disabled));
        }
      },
      inputs: {
        size: [0, "tuiBlock", "size"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlock, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "label[tuiBlock],input[tuiBlock]",
      providers: [tuiAppearanceOptionsProvider(TUI_BLOCK_OPTIONS), tuiAvatarOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiNativeValidator, TuiWithAppearance, TuiWithIcons],
      host: {
        tuiBlock: "",
        "[attr.data-size]": 'size || "l"',
        "[class._disabled]": "!!this.control?.disabled"
      }
    }]
  }], null, {
    control: [{
      type: ContentChild,
      args: [NgControl]
    }],
    size: [{
      type: Input,
      args: ["tuiBlock"]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-switch.mjs
var _c03 = ["type", "checkbox", "tuiSwitch", ""];
var TUI_SWITCH_DEFAULT_OPTIONS = {
  showIcons: true,
  size: "m",
  icon: "@tui.check",
  appearance: (el) => el.checked ? "primary" : "secondary"
};
var TUI_SWITCH_OPTIONS = tuiCreateToken(TUI_SWITCH_DEFAULT_OPTIONS);
function tuiSwitchOptionsProvider(options) {
  return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}
var TuiSwitch = class _TuiSwitch {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.resolver = tuiInjectIconResolver();
    this.options = inject(TUI_SWITCH_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
    this.showIcons = this.options.showIcons;
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = this.options.appearance(this.el);
  }
  get icon() {
    const {
      options,
      resolver,
      size
    } = this;
    const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
    return this.showIcons && icon ? `url(${resolver(icon)})` : null;
  }
  static {
    this.ɵfac = function TuiSwitch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwitch)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSwitch,
      selectors: [["input", "type", "checkbox", "tuiSwitch", ""]],
      hostAttrs: ["role", "switch"],
      hostVars: 6,
      hostBindings: function TuiSwitch_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.icon);
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size",
        showIcons: "showIcons"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"]
      }, TuiNativeValidator]), ɵɵStandaloneFeature],
      attrs: _c03,
      decls: 0,
      vars: 0,
      template: function TuiSwitch_Template(rf, ctx) {
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem currentColor;outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem currentColor;outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwitch, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiSwitch]',
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus"]
      }, TuiNativeValidator],
      host: {
        role: "switch",
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": "icon"
      },
      styles: ['[tuiSwitch]{transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:3rem;block-size:1.5rem;border-radius:2rem;overflow:hidden;cursor:pointer;margin:0;flex-shrink:0;color:#fff!important}[tuiSwitch][data-size=s]{block-size:1rem;inline-size:2rem}[tuiSwitch][data-size=s]:before{inline-size:1rem;transform:translate(-1rem);-webkit-mask-size:.75rem;mask-size:.75rem}[tuiSwitch][data-size=s]:after{inline-size:1rem;box-shadow:-2.625rem 0 0 .5rem currentColor;outline-width:.167rem;transform:scale(.375)}[tuiSwitch][data-size=s]:checked:after{transform:scale(.375) translate(2.625rem)}[tuiSwitch]:checked:before{transform:none}[tuiSwitch]:checked:after{transform:scale(.33333) translate(4.5rem)}[tuiSwitch]:disabled._readonly{opacity:1}[tuiSwitch]:before,[tuiSwitch]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;block-size:100%;inline-size:1.5rem}[tuiSwitch]:before{display:var(--t-checked-icon, none);background:currentColor;-webkit-mask:var(--t-checked-icon) no-repeat center;mask:var(--t-checked-icon) no-repeat center;-webkit-mask-size:1rem;mask-size:1rem;transform:translate(-1.5rem)}[tuiSwitch]:after{right:0;border-radius:100%;transform:scale(.33333);box-shadow:-4.5rem 0 0 .75rem currentColor;outline:.375rem solid var(--tui-background-neutral-2-pressed);outline-offset:var(--t-checked-icon, 20rem)}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }],
    showIcons: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-item.mjs
var TuiItem = class _TuiItem {
  static {
    this.ɵfac = function TuiItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItem,
      selectors: [["", "tuiItem", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItem, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiItem]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tabs.mjs
function TuiTabsWithMore_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiTabsWithMore_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementContainer(1, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const item_r2 = ctx_r2.$implicit;
    const index_r4 = ctx_r2.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("t-overflown", ctx_r4.isOverflown(index_r4));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiTabsWithMore_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTabsWithMore_ng_container_3_ng_container_1_Template, 1, 1, "ng-container", 8)(2, TuiTabsWithMore_ng_container_3_ng_template_2_Template, 2, 3, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r4 = ctx.index;
    const hidden_r6 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", index_r4 <= ctx_r4.lastVisibleIndex)("ngIfElse", hidden_r6);
  }
}
function TuiTabsWithMore_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r8 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r8, " ");
  }
}
function TuiTabsWithMore_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_button_4_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_button_4_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtemplate(1, TuiTabsWithMore_button_4_ng_container_1_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r9 = ɵɵreference(8);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent || dropdown_r9);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r4.moreContent);
  }
}
function TuiTabsWithMore_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵtwoWayListener("tuiDropdownOpenChange", function TuiTabsWithMore_ng_template_5_Template_button_tuiDropdownOpenChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r4.open, $event) || (ctx_r4.open = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("keydown.arrowLeft.prevent", function TuiTabsWithMore_ng_template_5_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onArrowLeft());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const dropdown_r9 = ɵɵreference(8);
    ɵɵclassProp("_active", ctx_r4.isMoreActive)("t-no-margin", ctx_r4.isMoreAlone)("t-overflown", !ctx_r4.isMoreVisible);
    ɵɵproperty("tabIndex", ctx_r4.isMoreFocusable ? 0 : -1)("tuiDropdown", ctx_r4.dropdownContent || dropdown_r9);
    ɵɵtwoWayProperty("tuiDropdownOpen", ctx_r4.open);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 10, ctx_r4.moreWord$), " ");
  }
}
function TuiTabsWithMore_ng_template_7_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    const item_r15 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r15);
  }
}
function TuiTabsWithMore_ng_template_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵlistener("tui-tab-activate", function TuiTabsWithMore_ng_template_7_div_2_Template_div_tui_tab_activate_0_listener() {
      const index_r14 = ɵɵrestoreView(_r13).index;
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onClick(index_r14));
    });
    ɵɵtemplate(1, TuiTabsWithMore_ng_template_7_div_2_ng_container_1_Template, 1, 1, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r14 = ctx.index;
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.shouldShow(index_r14));
  }
}
function TuiTabsWithMore_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14, 3);
    ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsWithMore_ng_template_7_Template_div_keydown_arrowDown_prevent_0_listener($event) {
      ɵɵrestoreView(_r11);
      const element_r12 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r12, false));
    })("keydown.arrowUp.prevent", function TuiTabsWithMore_ng_template_7_Template_div_keydown_arrowUp_prevent_0_listener($event) {
      ɵɵrestoreView(_r11);
      const element_r12 = ɵɵreference(1);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onWrapperArrow($event, element_r12, true));
    });
    ɵɵtemplate(2, TuiTabsWithMore_ng_template_7_div_2_Template, 2, 1, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵattribute("data-size", ctx_r4.size);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.items);
  }
}
var TUI_TAB_ACTIVATE = "tui-tab-activate";
var TuiTab = class _TuiTab {
  constructor() {
    this.el = tuiInjectElement();
    this.rla = inject(RouterLinkActive, {
      optional: true
    });
    this.observer = this.rla && inject(MutationObserverService, {
      optional: true
    })?.pipe(filter(() => !!this.rla?.isActive));
    this.sub = merge(this.observer || EMPTY, this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY, this.el.matches("button") ? tuiTypedFromEvent(this.el, "click").pipe(
      // Delaying execution until after all other click callbacks
      switchMap(() => tuiTypedFromEvent(this.el.parentElement, "click"))
    ) : EMPTY).pipe(takeUntilDestroyed()).subscribe(() => this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {
      bubbles: true
    })));
  }
  ngOnDestroy() {
    if (tuiIsNativeFocused(this.el)) {
      this.el.blur();
    }
  }
  static {
    this.ɵfac = function TuiTab_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTab)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTab,
      selectors: [["a", "tuiTab", "", 3, "routerLink", ""], ["a", "tuiTab", "", "routerLink", "", "routerLinkActive", ""], ["button", "tuiTab", ""]],
      hostAttrs: ["type", "button"],
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTab, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]",
      hostDirectives: [TuiWithIcons],
      host: {
        type: "button"
      }
    }]
  }], null, null);
})();
var TUI_TABS_DEFAULT_OPTIONS = {
  underline: true,
  exposeActive: true,
  itemsLimit: Infinity,
  minMoreWidth: 0,
  size: "l"
};
var TUI_TABS_OPTIONS = tuiCreateToken(TUI_TABS_DEFAULT_OPTIONS);
function tuiTabsOptionsProvider(options) {
  return tuiProvideOptions(TUI_TABS_OPTIONS, options, TUI_TABS_DEFAULT_OPTIONS);
}
var TuiTabsStyles = class _TuiTabsStyles {
  static {
    this.ɵfac = function TuiTabsStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-tabs"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiTabsStyles_Template(rf, ctx) {
      },
      styles: ['[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:24px}tui-tabs[data-size=m]+[tuiTab],tui-tabs[data-size=m] [tuiTab],[tuiTabs][data-size=m] [tuiTab]{margin-left:16px;font:var(--tui-font-text-s)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:2px solid var(--tui-border-focus);outline-offset:-2px}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -2px var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 1.5rem)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:2px;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:""}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:2px;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -2px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset 2px 0 var(--tui-border-normal)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-tabs"
      },
      styles: ['[tuiTab]{transition-property:color,box-shadow,opacity,background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;flex-shrink:0;box-sizing:border-box;justify-content:space-between;line-height:1.5rem;align-items:center;white-space:nowrap;cursor:pointer;outline:none;color:inherit;margin-left:24px}tui-tabs[data-size=m]+[tuiTab],tui-tabs[data-size=m] [tuiTab],[tuiTabs][data-size=m] [tuiTab]{margin-left:16px;font:var(--tui-font-text-s)}[tuiTab]:disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}[tuiTab]._active{color:var(--tui-text-primary);box-shadow:none}[tuiTab]:focus-visible{outline:2px solid var(--tui-border-focus);outline-offset:-2px}tui-tabs._underline [tuiTab]:hover:not(._active),[tuiTabs]._underline [tuiTab]:hover:not(._active){box-shadow:inset 0 -2px var(--tui-border-normal)}tui-tabs>[tuiTab]:first-child,[tuiTabs]>[tuiTab]:first-child,tui-tabs>:not(.t-overflown)>[tuiTab]:first-child{margin-left:0}tui-tabs>[tuiTab]~:not(.t-overflown)>[tuiTab]:first-child{margin-left:var(--tui-tab-margin, 1.5rem)}[tuiTab][tuiIcons]:before{font-size:1rem;margin-inline-end:.5rem}[tuiTab][tuiIcons]:after{font-size:1rem;margin-inline-start:.5rem}[tuiTab]:empty:after,[tuiTab]:empty:before{margin:.5rem}@media (hover: hover){[tuiTab]:hover{color:var(--tui-text-primary)}}[tuiTabs],tui-tabs{scrollbar-width:none;-ms-overflow-style:none;position:relative;display:flex;font:var(--tui-font-text-m);color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:auto;isolation:isolate}[tuiTabs]::-webkit-scrollbar,tui-tabs::-webkit-scrollbar,[tuiTabs]::-webkit-scrollbar-thumb,tui-tabs::-webkit-scrollbar-thumb{display:none}[tuiTabs][data-size=l]:not([data-vertical]),tui-tabs[data-size=l]:not([data-vertical]){block-size:var(--tui-height-l)}[tuiTabs][data-size=m]:not([data-vertical]),tui-tabs[data-size=m]:not([data-vertical]){block-size:var(--tui-height-m)}[tuiTabs]:before,tui-tabs:before{transition-property:width,left;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:var(--t-left);bottom:0;block-size:2px;inline-size:var(--t-width);background:var(--t-color);animation:tuiPresent 1ms}[tuiTabs]._underline:before,tui-tabs._underline:before{content:""}tui-tabs[data-vertical],[tuiTabs][data-vertical]{flex-direction:column;box-shadow:inset -1px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab],[tuiTabs][data-vertical] [tuiTab]{min-block-size:2.75rem;block-size:auto;white-space:normal;margin:0;text-align:start;padding:.25rem 1.25rem .25rem 0}tui-tabs[data-vertical] [tuiTab]:after,[tuiTabs][data-vertical] [tuiTab]:after{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;right:0;display:block;block-size:100%;inline-size:2px;background:var(--tui-background-accent-1);transform:scaleX(0);transform-origin:right;margin:0}tui-tabs[data-vertical] [tuiTab]:hover,[tuiTabs][data-vertical] [tuiTab]:hover{box-shadow:inset -2px 0 var(--tui-border-normal)}tui-tabs[data-vertical] [tuiTab]._active:after,[tuiTabs][data-vertical] [tuiTab]._active:after{transform:none}tui-tabs[data-vertical][data-size=m] [tuiTab],[tuiTabs][data-vertical][data-size=m] [tuiTab]{min-block-size:2.25rem;font:var(--tui-font-text-s)}tui-tabs[data-vertical][data-vertical=right],[tuiTabs][data-vertical][data-vertical=right]{box-shadow:inset 1px 0 var(--tui-border-normal)}tui-tabs[data-vertical][data-vertical=right] [tuiTab],[tuiTabs][data-vertical][data-vertical=right] [tuiTab]{text-align:end;padding:.25rem 0 .25rem 1.25rem}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:after,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:after{right:auto;left:0;transform-origin:left}tui-tabs[data-vertical][data-vertical=right] [tuiTab]:hover,[tuiTabs][data-vertical][data-vertical=right] [tuiTab]:hover{box-shadow:inset 2px 0 var(--tui-border-normal)}\n']
    }]
  }], null, null);
})();
var TuiTabsDirective = class _TuiTabsDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.injector = inject(INJECTOR$1);
    this.nothing = tuiWithStyles(TuiTabsStyles);
    this.size = inject(TUI_TABS_OPTIONS).size;
    this.activeItemIndex = 0;
    this.activeItemIndexChange = new EventEmitter();
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    return this.tabs[this.activeItemIndex] || null;
  }
  moveFocus(current, step) {
    const {
      tabs
    } = this;
    tuiMoveFocus(tabs.indexOf(current), tabs, step);
  }
  ngAfterViewChecked() {
    afterNextRender(() => {
      this.markTabAsActive();
    }, {
      injector: this.injector
    });
  }
  onActivate(event, element) {
    const index = this.tabs.findIndex((tab) => tab === element);
    event.stopPropagation();
    if (index === this.activeItemIndex) {
      return;
    }
    this.activeItemIndexChange.emit(index);
    this.activeItemIndex = index;
  }
  markTabAsActive() {
    const {
      tabs,
      activeElement
    } = this;
    tabs.forEach((nativeElement) => {
      const active = nativeElement === activeElement;
      nativeElement.classList.toggle("_active", active);
      nativeElement.setAttribute("tabIndex", active ? "0" : "-1");
    });
  }
  static {
    this.ɵfac = function TuiTabsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsDirective,
      hostVars: 1,
      hostBindings: function TuiTabsDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("tui-tab-activate", function TuiTabsDirective_tui_tab_activate_HostBindingHandler($event) {
            return ctx.onActivate($event, $event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        activeItemIndex: "activeItemIndex"
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        "[attr.data-size]": "size",
        [`(${TUI_TAB_ACTIVATE})`]: "onActivate($event, $event.target)"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }],
    activeItemIndex: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }]
  });
})();
var TuiTabsHorizontal = class _TuiTabsHorizontal {
  constructor() {
    this.el = tuiInjectElement();
    this.options = inject(TUI_TABS_OPTIONS);
    this.tabs = inject(TuiTabsDirective);
    this.children = EMPTY_QUERY;
    this.sub = inject(MutationObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.underline = this.options.underline;
  }
  ngAfterViewChecked() {
    this.scrollTo(this.tabs.activeItemIndex);
    this.refresh();
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  refresh() {
    const {
      activeElement
    } = this.tabs;
    if (activeElement && !activeElement.isConnected) {
      return;
    }
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = activeElement || {};
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  scrollTo(index) {
    const element = this.tabs.tabs[index];
    if (!element) {
      return;
    }
    const {
      offsetLeft,
      offsetWidth
    } = element;
    if (offsetLeft < this.el.scrollLeft) {
      this.el.scrollLeft = offsetLeft;
    }
    if (offsetLeft + offsetWidth > this.el.scrollLeft + this.el.offsetWidth) {
      this.el.scrollLeft = offsetLeft + offsetWidth - this.el.offsetWidth;
    }
  }
  static {
    this.ɵfac = function TuiTabsHorizontal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsHorizontal)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsHorizontal,
      selectors: [["tui-tabs", 3, "vertical", ""], ["nav", "tuiTabs", "", 3, "vertical", ""]],
      contentQueries: function TuiTabsHorizontal_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiTab, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
        }
      },
      hostVars: 4,
      hostBindings: function TuiTabsHorizontal_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("animationend", function TuiTabsHorizontal_animationend_HostBindingHandler() {
            return ctx.refresh();
          })("keydown.arrowRight.prevent", function TuiTabsHorizontal_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowLeft.prevent", function TuiTabsHorizontal_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("--t-color", ctx.underline === true ? "var(--tui-background-accent-1)" : ctx.underline);
          ɵɵclassProp("_underline", ctx.underline);
        }
      },
      inputs: {
        underline: "underline"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
__decorate([tuiPure], TuiTabsHorizontal.prototype, "scrollTo", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsHorizontal, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tabs:not([vertical]), nav[tuiTabs]:not([vertical])",
      providers: [MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[class._underline]": "underline",
        "[style.--t-color]": "underline === true ? 'var(--tui-background-accent-1)' : underline",
        "(animationend)": "refresh()",
        "(keydown.arrowRight.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowLeft.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, {
    children: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiTab)]
    }],
    underline: [{
      type: Input
    }],
    scrollTo: []
  });
})();
var TuiTabsVertical = class _TuiTabsVertical {
  constructor() {
    this.tabs = inject(TuiTabsDirective);
    this.vertical = "left";
  }
  onKeyDownArrow(current, step) {
    this.tabs.moveFocus(current, step);
  }
  static {
    this.ɵfac = function TuiTabsVertical_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsVertical)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTabsVertical,
      selectors: [["tui-tabs", "vertical", ""], ["nav", "tuiTabs", "", "vertical", ""]],
      hostVars: 1,
      hostBindings: function TuiTabsVertical_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowDown.prevent", function TuiTabsVertical_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, 1);
          })("keydown.arrowUp.prevent", function TuiTabsVertical_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.onKeyDownArrow($event.target, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-vertical", ctx.vertical);
        }
      },
      inputs: {
        vertical: "vertical"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "activeItemIndex", "size", "size"],
        outputs: ["activeItemIndexChange", "activeItemIndexChange"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsVertical, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tabs[vertical], nav[tuiTabs][vertical]",
      hostDirectives: [{
        directive: TuiTabsDirective,
        inputs: ["activeItemIndex", "size"],
        outputs: ["activeItemIndexChange"]
      }],
      host: {
        "[attr.data-vertical]": "vertical",
        "(keydown.arrowDown.prevent)": "onKeyDownArrow($event.target, 1)",
        "(keydown.arrowUp.prevent)": "onKeyDownArrow($event.target, -1)"
      }
    }]
  }], null, {
    vertical: [{
      type: Input
    }]
  });
})();
var TUI_TABS_REFRESH = tuiCreateToken();
var TUI_TABS_PROVIDERS = [ResizeObserverService, MutationObserverService, tuiDropdownOptionsProvider({
  align: "right"
}), {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    childList: true,
    subtree: true,
    characterData: true
  }
}, {
  provide: TUI_TABS_REFRESH,
  deps: [ResizeObserverService, MutationObserverService, DOCUMENT, ElementRef, ChangeDetectorRef],
  useFactory: (resize$, mutations$, {
    body
  }, {
    nativeElement
  }, cdr) => merge(resize$, mutations$.pipe(tap(() => cdr.detectChanges()))).pipe(
    // Ignoring cases when host is detached from DOM
    filter(() => body.contains(nativeElement)),
    debounceTime(0),
    startWith(null),
    takeUntilDestroyed()
  )
}];
var TuiTabsWithMore = class _TuiTabsWithMore {
  constructor() {
    this.options = inject(TUI_TABS_OPTIONS);
    this.refresh$ = inject(TUI_TABS_REFRESH);
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.maxIndex = Infinity;
    this.items = EMPTY_QUERY;
    this.moreWord$ = inject(TUI_MORE_WORD);
    this.open = false;
    this.size = this.options.size;
    this.underline = this.options.underline;
    this.itemsLimit = this.options.itemsLimit;
    this.activeItemIndexChange = new EventEmitter();
    this.activeItemIndex = 0;
  }
  set itemIndex(activeItemIndex) {
    this.activeItemIndex = activeItemIndex;
    this.maxIndex = this.getMaxIndex();
  }
  get lastVisibleIndex() {
    if (this.itemsLimit + 1 >= this.items.length) {
      return this.maxIndex;
    }
    const offset = this.itemsLimit - 1 > this.activeItemIndex || !this.options.exposeActive ? 1 : 2;
    return Math.min(this.itemsLimit - offset, this.maxIndex);
  }
  ngAfterViewInit() {
    this.refresh$.pipe(map(() => this.getMaxIndex()), tap(() => this.refresh()), filter((maxIndex) => this.maxIndex !== maxIndex)).subscribe((maxIndex) => {
      this.maxIndex = maxIndex;
      this.cdr.detectChanges();
    });
  }
  ngAfterViewChecked() {
    this.refresh();
  }
  // TODO: Improve performance
  get tabs() {
    return Array.from(this.el.querySelectorAll("[tuiTab]"));
  }
  get activeElement() {
    const {
      tabs
    } = this;
    const safeActiveIndex = tuiClamp(this.activeItemIndex || 0, 0, tabs.length - 2);
    return this.options.exposeActive || this.lastVisibleIndex >= safeActiveIndex ? tabs[safeActiveIndex] || null : this.moreButton?.nativeElement || null;
  }
  get isMoreAlone() {
    return this.lastVisibleIndex < 0 && !this.options.exposeActive;
  }
  get isMoreVisible() {
    return this.lastVisibleIndex < this.items.length - 1;
  }
  get isMoreFocusable() {
    return !!this.moreButton && tuiIsNativeFocused(this.moreButton.nativeElement);
  }
  get isMoreActive() {
    return this.open || !this.options.exposeActive && this.lastVisibleIndex < this.activeItemIndex;
  }
  onActiveItemIndexChange(activeItemIndex) {
    this.updateActiveItemIndex(activeItemIndex);
  }
  onClick(index) {
    this.open = false;
    this.focusMore();
    this.updateActiveItemIndex(index);
  }
  onArrowRight(event) {
    if (tuiIsElement(event.target) && tuiIsNativeFocused(event.target)) {
      this.focusMore();
    }
  }
  onArrowLeft() {
    const {
      tabs
    } = this;
    let index = tabs.length - 2;
    while (index >= 0) {
      tabs[index]?.focus();
      if (tuiIsNativeFocused(tabs[index])) {
        return;
      }
      index--;
    }
  }
  onWrapperArrow(event, wrapper, previous) {
    const button = event.target;
    const target = tuiGetClosestFocusable({
      initial: button,
      root: wrapper,
      previous
    });
    if (target) {
      target.focus();
    }
  }
  isOverflown(index) {
    return index !== this.activeItemIndex || !this.options.exposeActive;
  }
  shouldShow(index) {
    return index > this.lastVisibleIndex && this.isOverflown(index);
  }
  get margin() {
    return this.size === "l" ? 24 : 16;
  }
  focusMore() {
    if (this.moreButton) {
      this.moreButton.nativeElement.focus();
    }
  }
  getMaxIndex() {
    const {
      tabs,
      activeItemIndex,
      margin
    } = this;
    if (tabs.length < 2) {
      return 0;
    }
    const {
      exposeActive,
      minMoreWidth
    } = this.options;
    const {
      clientWidth
    } = this.el;
    const active = tabs[activeItemIndex];
    const activeWidth = active?.scrollWidth ?? 0;
    const moreWidth = Math.max(tabs[tabs.length - 1]?.scrollWidth ?? 0, minMoreWidth);
    let maxIndex = tabs.length - 2;
    let total = tabs.reduce((acc, {
      scrollWidth
    }) => acc + scrollWidth, 0) + maxIndex * margin - (tabs[tabs.length - 1]?.scrollWidth ?? 0);
    if (Number.isNaN(total) || total <= clientWidth) {
      return Infinity;
    }
    while (maxIndex) {
      total -= (tabs[maxIndex]?.scrollWidth ?? 0) + margin;
      maxIndex--;
      const activeDisplaced = exposeActive && activeItemIndex > maxIndex;
      const activeOffset = activeDisplaced ? activeWidth + margin : 0;
      const currentWidth = total + activeOffset + moreWidth + margin;
      const safetyOffset = tuiToInt(this.maxIndex === maxIndex - 1);
      if (currentWidth + safetyOffset < clientWidth) {
        return maxIndex;
      }
    }
    return -1;
  }
  updateActiveItemIndex(activeItemIndex) {
    this.itemIndex = activeItemIndex;
    this.activeItemIndexChange.emit(activeItemIndex);
  }
  refresh() {
    const {
      offsetLeft = 0,
      offsetWidth = 0
    } = this.activeElement || {};
    this.dir?.nativeElement.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.dir?.nativeElement.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiTabsWithMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTabsWithMore)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTabsWithMore,
      selectors: [["tui-tabs-with-more"], ["nav", "tuiTabsWithMore", ""]],
      contentQueries: function TuiTabsWithMore_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      viewQuery: function TuiTabsWithMore_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiTab, 5, ElementRef);
          ɵɵviewQuery(TuiTabsHorizontal, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moreButton = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dir = _t.first);
        }
      },
      inputs: {
        size: "size",
        moreContent: "moreContent",
        dropdownContent: "dropdownContent",
        underline: "underline",
        itemsLimit: "itemsLimit",
        itemIndex: [0, "activeItemIndex", "itemIndex"]
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_TABS_PROVIDERS), ɵɵStandaloneFeature],
      decls: 9,
      vars: 9,
      consts: [["chevron", ""], ["dropdown", ""], ["hidden", ""], ["element", ""], [4, "ngIf"], [1, "t-tabs", 3, "activeItemIndexChange", "keydown.arrowRight", "activeItemIndex", "size", "underline"], [4, "ngFor", "ngForOf"], ["tuiTab", "", "type", "button", "class", "t-more", 3, "_active", "t-no-margin", "t-overflown", "tabIndex", "tuiDropdown", "tuiDropdownOpen", "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [1, "t-flex"], ["tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [4, "polymorpheusOutlet"], ["tuiChevron", "", "tuiTab", "", "type", "button", 1, "t-more", 3, "tuiDropdownOpenChange", "keydown.arrowLeft.prevent", "tabIndex", "tuiDropdown", "tuiDropdownOpen"], [1, "t-dropdown", 3, "keydown.arrowDown.prevent", "keydown.arrowUp.prevent"], ["class", "t-dropdown-item", 3, "tui-tab-activate", 4, "ngFor", "ngForOf"], [1, "t-dropdown-item", 3, "tui-tab-activate"], [3, "ngTemplateOutlet", 4, "ngIf"]],
      template: function TuiTabsWithMore_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵtemplate(0, TuiTabsWithMore_ng_container_0_Template, 1, 0, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "tui-tabs", 5);
          ɵɵlistener("activeItemIndexChange", function TuiTabsWithMore_Template_tui_tabs_activeItemIndexChange_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onActiveItemIndexChange($event));
          })("keydown.arrowRight", function TuiTabsWithMore_Template_tui_tabs_keydown_arrowRight_2_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onArrowRight($event));
          });
          ɵɵtemplate(3, TuiTabsWithMore_ng_container_3_Template, 4, 2, "ng-container", 6);
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiTabsWithMore_button_4_Template, 2, 10, "button", 7)(5, TuiTabsWithMore_ng_template_5_Template, 3, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, TuiTabsWithMore_ng_template_7_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const chevron_r16 = ɵɵreference(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 7, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("activeItemIndex", ctx.activeItemIndex)("size", ctx.size)("underline", ctx.underline);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.moreContent)("ngIfElse", chevron_r16);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, PolymorpheusOutlet, TuiChevron, TuiDropdownDirective, TuiDropdownOpen, TuiTab, TuiTabsHorizontal],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}.t-tabs[_ngcontent-%COMP%]{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex[_ngcontent-%COMP%]{display:flex}.t-overflown[_ngcontent-%COMP%]{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.t-dropdown[_ngcontent-%COMP%]{padding:.25rem 0}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:before{display:none}.t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:hover, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]:focus, .t-dropdown[_ngcontent-%COMP%]     *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m][_ngcontent-%COMP%]     *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.t-no-margin[_ngcontent-%COMP%]{margin-left:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTabsWithMore, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tabs-with-more, nav[tuiTabsWithMore]",
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiChevron, TuiDropdown, TuiOption, TuiTab, TuiTabsHorizontal],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_TABS_PROVIDERS,
      template: '<ng-container *ngIf="items.changes | async" />\n<tui-tabs\n    class="t-tabs"\n    [activeItemIndex]="activeItemIndex"\n    [size]="size"\n    [underline]="underline"\n    (activeItemIndexChange)="onActiveItemIndexChange($event)"\n    (keydown.arrowRight)="onArrowRight($event)"\n>\n    <ng-container *ngFor="let item of items; let index = index">\n        <ng-container\n            *ngIf="index <= lastVisibleIndex; else hidden"\n            [ngTemplateOutlet]="item"\n        />\n        <ng-template #hidden>\n            <div\n                class="t-flex"\n                [class.t-overflown]="isOverflown(index)"\n            >\n                <ng-container [ngTemplateOutlet]="item" />\n            </div>\n        </ng-template>\n    </ng-container>\n</tui-tabs>\n\n<button\n    *ngIf="moreContent; else chevron"\n    tuiTab\n    type="button"\n    class="t-more"\n    [class._active]="isMoreActive"\n    [class.t-no-margin]="isMoreAlone"\n    [class.t-overflown]="!isMoreVisible"\n    [tabIndex]="isMoreFocusable ? 0 : -1"\n    [tuiDropdown]="dropdownContent || dropdown"\n    [(tuiDropdownOpen)]="open"\n    (keydown.arrowLeft.prevent)="onArrowLeft()"\n>\n    <ng-container *polymorpheusOutlet="moreContent as text">\n        {{ text }}\n    </ng-container>\n</button>\n<ng-template #chevron>\n    <button\n        tuiChevron\n        tuiTab\n        type="button"\n        class="t-more"\n        [class._active]="isMoreActive"\n        [class.t-no-margin]="isMoreAlone"\n        [class.t-overflown]="!isMoreVisible"\n        [tabIndex]="isMoreFocusable ? 0 : -1"\n        [tuiDropdown]="dropdownContent || dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.arrowLeft.prevent)="onArrowLeft()"\n    >\n        {{ moreWord$ | async }}\n    </button>\n</ng-template>\n<ng-template #dropdown>\n    <div\n        #element\n        class="t-dropdown"\n        [attr.data-size]="size"\n        (keydown.arrowDown.prevent)="onWrapperArrow($event, element, false)"\n        (keydown.arrowUp.prevent)="onWrapperArrow($event, element, true)"\n    >\n        <div\n            *ngFor="let item of items; let index = index"\n            class="t-dropdown-item"\n            (tui-tab-activate)="onClick(index)"\n        >\n            <ng-container\n                *ngIf="shouldShow(index)"\n                [ngTemplateOutlet]="item"\n            />\n        </div>\n    </div>\n</ng-template>\n',
      styles: [":host{position:relative;display:flex;font:var(--tui-font-text-m);box-sizing:border-box;color:var(--tui-text-secondary);box-shadow:inset 0 -1px var(--tui-border-normal);overflow:hidden}.t-tabs{block-size:inherit;font:inherit;overflow:visible;box-shadow:none;color:inherit}.t-flex{display:flex}.t-overflown{margin:0;inline-size:0;max-inline-size:0;overflow:hidden;visibility:hidden}.t-icon{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:-.25rem;vertical-align:bottom}.t-icon_rotated{transform:rotate(180deg)}.t-dropdown{padding:.25rem 0}.t-dropdown ::ng-deep *[tuiTab]{inline-size:calc(100% - .75rem);block-size:2.75rem;justify-content:flex-start;margin:.125rem .375rem;padding:0 .625rem;line-height:1.5rem;border-radius:var(--tui-radius-s);font:var(--tui-font-text-m);color:var(--tui-text-primary)}.t-dropdown ::ng-deep *[tuiTab]:before{display:none}.t-dropdown ::ng-deep *[tuiTab]:hover,.t-dropdown ::ng-deep *[tuiTab]:focus,.t-dropdown ::ng-deep *[tuiTab]._active{box-shadow:none;outline:none;background:var(--tui-background-neutral-1)}.t-dropdown[data-size=m] ::ng-deep *[tuiTab]{block-size:2.25rem;font:var(--tui-font-text-s)}.t-dropdown-item{display:flex;flex-direction:column}.t-no-margin{margin-left:0}\n"]
    }]
  }], null, {
    moreButton: [{
      type: ViewChild,
      args: [TuiTab, {
        read: ElementRef
      }]
    }],
    dir: [{
      type: ViewChild,
      args: [TuiTabsHorizontal, {
        read: ElementRef
      }]
    }],
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    size: [{
      type: Input
    }],
    moreContent: [{
      type: Input
    }],
    dropdownContent: [{
      type: Input
    }],
    underline: [{
      type: Input
    }],
    itemsLimit: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }],
    itemIndex: [{
      type: Input,
      args: ["activeItemIndex"]
    }]
  });
})();
var TuiTabs = [TuiItem, TuiTab, TuiTabsDirective, TuiTabsHorizontal, TuiTabsVertical, TuiTabsWithMore];

export {
  TuiButtonClose,
  TuiButtonGroup,
  TuiButtonSelect,
  TuiConnected,
  TUI_COPY_OPTIONS,
  tuiCopyOptionsProvider,
  TuiCopy,
  TuiDataListDropdownManager,
  WA_MUTATION_OBSERVER_INIT,
  WaMutationObserver,
  MutationObserverService,
  TuiFade,
  TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
  TUI_FLUID_TYPOGRAPHY_OPTIONS,
  tuiFluidTypographyOptionsProvider,
  TuiFluidTypography,
  TUI_HIGHLIGHT_OPTIONS,
  tuiHighlightOptionsProvider,
  TuiHighlight,
  TuiIconBadge,
  WaIntersectionObserverDirective,
  WaIntersectionObservee,
  WaIntersectionRoot,
  WaIntersectionObserver,
  TuiLazyLoadingService,
  TuiImgLazyLoading,
  TUI_PASSWORD_OPTIONS,
  tuiPasswordOptionsProvider,
  TuiPassword,
  TuiPresent,
  TuiSensitive,
  TuiSkeleton,
  tuiCreateUnfinishedValidator,
  TuiUnfinishedValidator,
  TuiUnmaskHandler,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  tuiAvatarOptionsProvider,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_OPTIONS,
  tuiBadgeOptionsProvider,
  TuiBadge,
  TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_OPTIONS,
  tuiBadgeNotificationOptionsProvider,
  TuiBadgeNotification,
  TUI_BLOCK_DEFAULT_OPTIONS,
  TUI_BLOCK_OPTIONS,
  tuiBlockOptionsProvider,
  TuiBlock,
  TuiItem,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  tuiSwitchOptionsProvider,
  TuiSwitch,
  TUI_TAB_ACTIVATE,
  TuiTab,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  tuiTabsOptionsProvider,
  TuiTabsDirective,
  TuiTabsHorizontal,
  TuiTabsVertical,
  TUI_TABS_REFRESH,
  TUI_TABS_PROVIDERS,
  TuiTabsWithMore,
  TuiTabs
};
//# sourceMappingURL=chunk-P4RQJVMB.js.map
