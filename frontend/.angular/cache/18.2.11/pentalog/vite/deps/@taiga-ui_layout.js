import {
  MutationObserverService,
  TuiFade,
  TuiItem,
  WA_MUTATION_OBSERVER_INIT,
  tuiAvatarOptionsProvider,
  tuiBadgeNotificationOptionsProvider,
  tuiBadgeOptionsProvider,
  tuiBlockOptionsProvider,
  tuiSwitchOptionsProvider,
  tuiTabsOptionsProvider
} from "./chunk-P4RQJVMB.js";
import {
  TUI_CHEVRON,
  TuiChevron
} from "./chunk-2H24O7E5.js";
import {
  TuiExpand,
  TuiExpandComponent
} from "./chunk-OENT37UI.js";
import {
  EMPTY_QUERY,
  PolymorpheusOutlet,
  ResizeObserverService,
  TUI_ANIMATIONS_SPEED,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_HOST,
  TUI_DROPDOWN_COMPONENT,
  TUI_DROPDOWN_OPTIONS,
  TUI_ICON_END,
  TUI_ICON_START,
  TUI_SPIN_ICONS,
  TuiActiveZone,
  TuiAppearance,
  TuiBreakpointService,
  TuiButton,
  TuiDataList,
  TuiDataListComponent,
  TuiDropdownDirective,
  TuiDropdownHover,
  TuiDropdownManual,
  TuiDropdownOpen,
  TuiDropdownPositionSided,
  TuiHintDirective,
  TuiIcon,
  TuiIcons,
  TuiOptGroup,
  TuiScrollable,
  TuiScrollbar,
  TuiTextfieldOptionsDirective,
  TuiWithDropdownOpen,
  tuiAppearanceOptionsProvider,
  tuiButtonOptionsProvider,
  tuiControlValue,
  tuiCreateToken,
  tuiDirectiveBinding,
  tuiDropdown,
  tuiDropdownOptionsProvider,
  tuiHintOptionsProvider,
  tuiInjectElement,
  tuiIsControlEmpty,
  tuiIsHTMLElement,
  tuiProvide,
  tuiProvideOptions,
  tuiQueryListChanges,
  tuiSlideInLeft,
  tuiTextfieldOptionsProvider,
  tuiToAnimationOptions,
  tuiWithStyles,
  tuiZonefull
} from "./chunk-TJD5ECJX.js";
import {
  NgControl
} from "./chunk-RMQQVHNY.js";
import "./chunk-DQR2A66Y.js";
import {
  RouterLink,
  RouterLinkActive
} from "./chunk-6JBCPGHO.js";
import {
  toObservable,
  toSignal
} from "./chunk-HD67AN6P.js";
import "./chunk-KKWAPHD5.js";
import "./chunk-YEHPATXO.js";
import "./chunk-WJOPP6AW.js";
import {
  AsyncPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  __spreadProps,
  __spreadValues,
  distinctUntilChanged,
  map,
  merge,
  skip,
  switchMap
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-app-bar.mjs
var _c0 = ["side"];
var _c1 = [[["", "tuiSlot", "left"]], "*", [["", "tuiSlot", "right"]]];
var _c2 = ["[tuiSlot='left']", "*", "[tuiSlot='right']"];
var _c3 = ["tuiAppBarBack", ""];
var _c4 = ["*"];
var TUI_APP_BAR_PROVIDERS = [ResizeObserverService, MutationObserverService, {
  provide: WA_MUTATION_OBSERVER_INIT,
  useValue: {
    characterData: true,
    childList: true,
    subtree: true
  }
}, tuiButtonOptionsProvider({
  appearance: "action"
})];
var TuiAppBarComponent = class _TuiAppBarComponent {
  constructor() {
    this.side = EMPTY_QUERY;
    this.width$ = merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    })).pipe(tuiZonefull(), map(() => 2 * Math.max(this.side.first?.nativeElement.clientWidth, this.side.last?.nativeElement.clientWidth)));
    this.size = "m";
  }
  static {
    this.ɵfac = function TuiAppBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppBarComponent,
      selectors: [["tui-app-bar"]],
      viewQuery: function TuiAppBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.side = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiAppBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_APP_BAR_PROVIDERS), ɵɵStandaloneFeature],
      ngContentSelectors: _c2,
      decls: 9,
      vars: 4,
      consts: [["side", ""], ["tuiFade", "", 1, "t-content"]],
      template: function TuiAppBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c1);
          ɵɵelementStart(0, "div", null, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 1);
          ɵɵpipe(4, "async");
          ɵɵprojection(5, 1);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", null, 0);
          ɵɵprojection(8, 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵstyleProp("--t-sides", ɵɵpipeBind1(4, 2, ctx.width$), "px");
        }
      },
      dependencies: [AsyncPipe, TuiFade],
      styles: ["tui-app-bar{position:relative;display:flex;block-size:3rem;align-items:center;justify-content:space-between;flex:1;box-sizing:border-box;font:var(--tui-font-text-m);font-weight:700;text-align:center;color:var(--tui-text-primary);background:var(--tui-background-base);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-app-bar>.t-content{left:50%;transform:translate(-50%);position:absolute;display:flex;block-size:100%;max-inline-size:calc(100% - var(--t-sides, 0px));flex-direction:column;justify-content:center;flex:1;padding:0 .375rem;box-sizing:border-box;text-align:inherit;white-space:nowrap}tui-app-bar>:last-child [tuiIconButton]{margin:0 -.375rem}tui-app-bar>:last-child [tuiIconButton]:last-child{margin-inline-end:0}tui-app-bar>:last-child [tuiIconButton]:only-child{margin:0}tui-app-bar [tuiButton][data-size=l]{font-weight:400;margin:0 -.25rem}tui-app-bar [tuiTitle]{text-align:inherit;font:inherit}tui-app-bar [tuiSubtitle]{color:var(--tui-text-secondary)}tui-app-bar[data-size=m] [tuiTitle]{line-height:1.2em;gap:0}tui-app-bar[data-size=l]{block-size:4rem}tui-app-bar[data-size=l]>:first-child,tui-app-bar[data-size=l]>:last-child{margin:0 -1em}tui-app-bar [tuiProgressBar]{inline-size:8.75rem}tui-dialog tui-app-bar[data-size=l]{margin:-3rem 0 2rem}tui-dialog tui-app-bar[data-size=m]{margin:-1rem -1rem .75rem}tui-sheet-dialog tui-app-bar{margin:-.75rem -1rem;background:none;-webkit-backdrop-filter:none;backdrop-filter:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-app-bar",
      imports: [AsyncPipe, TuiFade],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_APP_BAR_PROVIDERS,
      host: {
        "[attr.data-size]": "size"
      },
      template: `<div #side>
    <ng-content select="[tuiSlot='left']" />
</div>
<div
    tuiFade
    class="t-content"
    [style.--t-sides.px]="width$ | async"
>
    <ng-content />
</div>
<div #side>
    <ng-content select="[tuiSlot='right']" />
</div>
`,
      styles: ["tui-app-bar{position:relative;display:flex;block-size:3rem;align-items:center;justify-content:space-between;flex:1;box-sizing:border-box;font:var(--tui-font-text-m);font-weight:700;text-align:center;color:var(--tui-text-primary);background:var(--tui-background-base);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem)}tui-app-bar>.t-content{left:50%;transform:translate(-50%);position:absolute;display:flex;block-size:100%;max-inline-size:calc(100% - var(--t-sides, 0px));flex-direction:column;justify-content:center;flex:1;padding:0 .375rem;box-sizing:border-box;text-align:inherit;white-space:nowrap}tui-app-bar>:last-child [tuiIconButton]{margin:0 -.375rem}tui-app-bar>:last-child [tuiIconButton]:last-child{margin-inline-end:0}tui-app-bar>:last-child [tuiIconButton]:only-child{margin:0}tui-app-bar [tuiButton][data-size=l]{font-weight:400;margin:0 -.25rem}tui-app-bar [tuiTitle]{text-align:inherit;font:inherit}tui-app-bar [tuiSubtitle]{color:var(--tui-text-secondary)}tui-app-bar[data-size=m] [tuiTitle]{line-height:1.2em;gap:0}tui-app-bar[data-size=l]{block-size:4rem}tui-app-bar[data-size=l]>:first-child,tui-app-bar[data-size=l]>:last-child{margin:0 -1em}tui-app-bar [tuiProgressBar]{inline-size:8.75rem}tui-dialog tui-app-bar[data-size=l]{margin:-3rem 0 2rem}tui-dialog tui-app-bar[data-size=m]{margin:-1rem -1rem .75rem}tui-sheet-dialog tui-app-bar{margin:-.75rem -1rem;background:none;-webkit-backdrop-filter:none;backdrop-filter:none}\n"]
    }]
  }], null, {
    side: [{
      type: ViewChildren,
      args: ["side"]
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiAppBarDirective = class _TuiAppBarDirective {
  constructor() {
    this.tuiSlot = "left";
  }
  static {
    this.ɵfac = function TuiAppBarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppBarDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: "tuiSlot"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSlot]"
    }]
  }], null, {
    tuiSlot: [{
      type: Input
    }]
  });
})();
var TuiAppBarBack = class _TuiAppBarBack {
  constructor() {
    this.icons = inject(TUI_SPIN_ICONS);
    this.appearance = "link";
  }
  static {
    this.ɵfac = function TuiAppBarBack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarBack)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAppBarBack,
      selectors: [["button", "tuiAppBarBack", ""], ["a", "tuiAppBarBack", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(_TuiAppBarBack)]), ɵɵHostDirectivesFeature([TuiAppearance]), ɵɵStandaloneFeature],
      attrs: _c3,
      ngContentSelectors: _c4,
      decls: 6,
      vars: 1,
      consts: [["height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 1, "t-ios"], ["d", "M7.44025 12L14.9826 4.43872C15.5391 3.88083 15.5391 2.97631 14.9826 2.41842C14.4261 1.86053 13.5239 1.86053 12.9674 2.41842L4.41737 10.9898C3.86088 11.5477 3.86088 12.4523 4.41737 13.0102L12.9674 21.5816C13.5239 22.1395 14.4261 22.1395 14.9826 21.5816C15.5391 21.0237 15.5391 20.1192 14.9826 19.5613L7.44025 12Z", "fill", "currentColor"], ["height", "24", "viewBox", "0 0 24 24", "width", "24", "xmlns", "http://www.w3.org/2000/svg", 1, "t-android"], ["d", "M19.6999 11.5899C19.6999 11.0377 19.2522 10.5899 18.6999 10.5899H7.49992L12.3999 5.68995C12.7865 5.30335 12.7865 4.67655 12.3999 4.28995V4.28995C12.0133 3.90335 11.3865 3.90335 10.9999 4.28995L4.40703 10.8828C4.0165 11.2734 4.01651 11.9065 4.40703 12.2971L10.9999 18.89C11.3865 19.2765 12.0133 19.2765 12.3999 18.8899V18.8899C12.7865 18.5034 12.7865 17.8765 12.3999 17.49L7.49992 12.5899H18.6999C19.2522 12.5899 19.6999 12.1422 19.6999 11.5899V11.5899Z", "fill", "currentColor"], [1, "t-web", 3, "icon"]],
      template: function TuiAppBarBack_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵnamespaceSVG();
          ɵɵelementStart(0, "svg", 0);
          ɵɵelement(1, "path", 1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "svg", 2);
          ɵɵelement(3, "path", 3);
          ɵɵelementEnd();
          ɵɵnamespaceHTML();
          ɵɵelement(4, "tui-icon", 4);
          ɵɵprojection(5);
        }
        if (rf & 2) {
          ɵɵadvance(4);
          ɵɵproperty("icon", ctx.icons.decrement);
        }
      },
      dependencies: [TuiIcon],
      styles: ['[_nghost-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;align-items:center;padding:0 1rem 0 0;cursor:pointer}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%], [data-platform="android"]   [_nghost-%COMP%]{font-size:0;padding:0 1rem}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%]   .t-android[_ngcontent-%COMP%], [data-platform="android"]   [_nghost-%COMP%]   .t-android[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]   [data-platform="android"][_nghost-%COMP%]   .t-web[_ngcontent-%COMP%], [data-platform="android"]   [_nghost-%COMP%]   .t-web[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   [data-platform="ios"][_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%], [data-platform="ios"]   [_nghost-%COMP%]   .t-ios[_ngcontent-%COMP%]{display:block;margin-inline-start:.5rem}[_nghost-%COMP%]   [data-platform="ios"][_nghost-%COMP%]   .t-web[_ngcontent-%COMP%], [data-platform="ios"]   [_nghost-%COMP%]   .t-web[_ngcontent-%COMP%]{display:none}.t-android[_ngcontent-%COMP%], .t-ios[_ngcontent-%COMP%]{display:none}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarBack, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiAppBarBack], a[tuiAppBarBack]",
      imports: [TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TuiAppBarBack)],
      hostDirectives: [TuiAppearance],
      template: '<svg\n    height="24"\n    viewBox="0 0 24 24"\n    width="24"\n    xmlns="http://www.w3.org/2000/svg"\n    class="t-ios"\n>\n    <path\n        d="M7.44025 12L14.9826 4.43872C15.5391 3.88083 15.5391 2.97631 14.9826 2.41842C14.4261 1.86053 13.5239 1.86053 12.9674 2.41842L4.41737 10.9898C3.86088 11.5477 3.86088 12.4523 4.41737 13.0102L12.9674 21.5816C13.5239 22.1395 14.4261 22.1395 14.9826 21.5816C15.5391 21.0237 15.5391 20.1192 14.9826 19.5613L7.44025 12Z"\n        fill="currentColor"\n    />\n</svg>\n<svg\n    height="24"\n    viewBox="0 0 24 24"\n    width="24"\n    xmlns="http://www.w3.org/2000/svg"\n    class="t-android"\n>\n    <path\n        d="M19.6999 11.5899C19.6999 11.0377 19.2522 10.5899 18.6999 10.5899H7.49992L12.3999 5.68995C12.7865 5.30335 12.7865 4.67655 12.3999 4.28995V4.28995C12.0133 3.90335 11.3865 3.90335 10.9999 4.28995L4.40703 10.8828C4.0165 11.2734 4.01651 11.9065 4.40703 12.2971L10.9999 18.89C11.3865 19.2765 12.0133 19.2765 12.3999 18.8899V18.8899C12.7865 18.5034 12.7865 17.8765 12.3999 17.49L7.49992 12.5899H18.6999C19.2522 12.5899 19.6999 12.1422 19.6999 11.5899V11.5899Z"\n        fill="currentColor"\n    />\n</svg>\n<tui-icon\n    class="t-web"\n    [icon]="icons.decrement"\n/>\n<ng-content />\n',
      styles: [':host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;align-items:center;padding:0 1rem 0 0;cursor:pointer}:host :host-context([data-platform="android"]){font-size:0;padding:0 1rem}:host :host-context([data-platform="android"]) .t-android{display:block}:host :host-context([data-platform="android"]) .t-web{display:none}:host :host-context([data-platform="ios"]) .t-ios{display:block;margin-inline-start:.5rem}:host :host-context([data-platform="ios"]) .t-web{display:none}.t-android,.t-ios{display:none}\n']
    }]
  }], null, null);
})();
var TuiAppBarSizeDirective = class _TuiAppBarSizeDirective {
  constructor() {
    this.size = tuiDirectiveBinding(TuiAppBarComponent, "size", toSignal(inject(TuiBreakpointService).pipe(map((breakpoint) => breakpoint === "mobile" ? "m" : "l")), {
      initialValue: "m"
    }));
  }
  static {
    this.ɵfac = function TuiAppBarSizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAppBarSizeDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAppBarSizeDirective,
      selectors: [["tui-app-bar", "tuiAppBarSize", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAppBarSizeDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-app-bar[tuiAppBarSize]"
    }]
  }], null, null);
})();
var TuiAppBar = [TuiAppBarComponent, TuiAppBarDirective, TuiAppBarBack, TuiAppBarSizeDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-block-details.mjs
var TuiBlockDetailsStyles = class _TuiBlockDetailsStyles {
  static {
    this.ɵfac = function TuiBlockDetailsStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockDetailsStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBlockDetailsStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-block-details-styles"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiBlockDetailsStyles_Template(rf, ctx) {
      },
      styles: ["[tuiBlockDetails]{display:flex;flex-direction:column;align-items:center;font:var(--tui-font-heading-3);min-block-size:2rem}[tuiBlockDetails] [tuiTitle]{text-align:center;font:var(--tui-font-text-l);gap:0}[tuiBlockDetails] [tuiSubtitle]{font:var(--tui-font-text-m);color:var(--tui-text-secondary);margin-top:.25rem}:host-context(tui-root._mobile) [tuiBlockDetails] [tuiSubtitle]{font:var(--tui-font-text-s)}[tuiBlockDetails] [tuiComment]{margin-top:1.0625rem}[tuiBlockDetails] [tuiAccessory]{display:flex;gap:.5rem;margin-top:1.25rem}[tuiBlockDetails] [tuiAccessories],[tuiBlockDetails] tui-badge:only-of-type{margin-top:1.25rem}[tuiBlockDetails] [tuiAccessories]{display:flex;gap:.5rem}[tuiBlockDetails] tui-avatar,[tuiBlockDetails] [tuiTitle]{margin-bottom:1rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockDetailsStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-block-details-styles"
      },
      styles: ["[tuiBlockDetails]{display:flex;flex-direction:column;align-items:center;font:var(--tui-font-heading-3);min-block-size:2rem}[tuiBlockDetails] [tuiTitle]{text-align:center;font:var(--tui-font-text-l);gap:0}[tuiBlockDetails] [tuiSubtitle]{font:var(--tui-font-text-m);color:var(--tui-text-secondary);margin-top:.25rem}:host-context(tui-root._mobile) [tuiBlockDetails] [tuiSubtitle]{font:var(--tui-font-text-s)}[tuiBlockDetails] [tuiComment]{margin-top:1.0625rem}[tuiBlockDetails] [tuiAccessory]{display:flex;gap:.5rem;margin-top:1.25rem}[tuiBlockDetails] [tuiAccessories],[tuiBlockDetails] tui-badge:only-of-type{margin-top:1.25rem}[tuiBlockDetails] [tuiAccessories]{display:flex;gap:.5rem}[tuiBlockDetails] tui-avatar,[tuiBlockDetails] [tuiTitle]{margin-bottom:1rem}\n"]
    }]
  }], null, null);
})();
var TuiBlockDetails = class _TuiBlockDetails {
  constructor() {
    this.nothing = tuiWithStyles(TuiBlockDetailsStyles);
  }
  static {
    this.ɵfac = function TuiBlockDetails_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockDetails)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlockDetails,
      selectors: [["", "tuiBlockDetails", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockDetails, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiBlockDetails]"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-block-status.mjs
var _c02 = [[["", "tuiSlot", "top"]], [["h1"], ["h2"], ["h3"], ["h4"], ["h5"], ["h6"]], "*", [["a"], ["button"], ["", "tuiSlot", "action"]]];
var _c12 = ["[tuiSlot='top']", "h1,h2,h3,h4,h5,h6", "*", "a,button,[tuiSlot='action']"];
var TuiBlockStatusComponent = class _TuiBlockStatusComponent {
  constructor() {
    this.card = false;
  }
  static {
    this.ɵfac = function TuiBlockStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStatusComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBlockStatusComponent,
      selectors: [["tui-block-status"]],
      hostVars: 2,
      hostBindings: function TuiBlockStatusComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_card", ctx.card);
        }
      },
      inputs: {
        card: "card"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c12,
      decls: 7,
      vars: 0,
      consts: [[1, "t-block-image"], [1, "t-block-text"], [1, "t-block-actions"]],
      template: function TuiBlockStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c02);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵprojection(2, 1);
          ɵɵelementStart(3, "div", 1);
          ɵɵprojection(4, 2);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 2);
          ɵɵprojection(6, 3);
          ɵɵelementEnd();
        }
      },
      styles: ["tui-block-status{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;inline-size:100%;block-size:100%}tui-block-status._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-block-status .t-block-image{margin-bottom:2rem}tui-block-status .t-block-text:not(:empty){font:var(--tui-font-text-m);color:var(--tui-text-secondary);margin-bottom:2rem;white-space:pre-line}tui-block-status .t-block-actions:not(:empty){display:flex;flex-direction:column;align-items:center;inline-size:100%}tui-block-status h1,tui-block-status h2,tui-block-status h3,tui-block-status h4,tui-block-status h5,tui-block-status h6{font:var(--tui-font-heading-4);margin-top:0;margin-bottom:1rem}tui-block-status img{inline-size:9rem;block-size:9rem}tui-block-status a:not(:last-child),tui-block-status button:not(:last-child){margin-bottom:.75rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStatusComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-block-status",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._card]": "card"
      },
      template: `<div class="t-block-image">
    <ng-content select="[tuiSlot='top']" />
</div>

<ng-content select="h1,h2,h3,h4,h5,h6" />

<div class="t-block-text">
    <ng-content />
</div>

<div class="t-block-actions">
    <ng-content select="a,button,[tuiSlot='action']" />
</div>
`,
      styles: ["tui-block-status{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;inline-size:100%;block-size:100%}tui-block-status._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-block-status .t-block-image{margin-bottom:2rem}tui-block-status .t-block-text:not(:empty){font:var(--tui-font-text-m);color:var(--tui-text-secondary);margin-bottom:2rem;white-space:pre-line}tui-block-status .t-block-actions:not(:empty){display:flex;flex-direction:column;align-items:center;inline-size:100%}tui-block-status h1,tui-block-status h2,tui-block-status h3,tui-block-status h4,tui-block-status h5,tui-block-status h6{font:var(--tui-font-heading-4);margin-top:0;margin-bottom:1rem}tui-block-status img{inline-size:9rem;block-size:9rem}tui-block-status a:not(:last-child),tui-block-status button:not(:last-child){margin-bottom:.75rem}\n"]
    }]
  }], null, {
    card: [{
      type: Input
    }]
  });
})();
var TuiBlockStatusDirective = class _TuiBlockStatusDirective {
  constructor() {
    this.tuiSlot = "top";
  }
  static {
    this.ɵfac = function TuiBlockStatusDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBlockStatusDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBlockStatusDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: "tuiSlot"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBlockStatusDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSlot]"
    }]
  }], null, {
    tuiSlot: [{
      type: Input
    }]
  });
})();
var TuiBlockStatus = [TuiBlockStatusComponent, TuiBlockStatusDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-card.mjs
var TuiCardStyles = class _TuiCardStyles {
  static {
    this.ɵfac = function TuiCardStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCardStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-card"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiCardStyles_Template(rf, ctx) {
      },
      styles: ["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overscroll-behavior:contain;overflow:hidden}[tuiCardMedium][tuiTitle],[tuiCardLarge][tuiTitle],[tuiCardMedium] [tuiTitle]:not([tuiCell] *):not([tuiLabel] *),[tuiCardLarge] [tuiTitle]:not([tuiCell] *):not([tuiLabel] *){font-weight:700}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}[tuiCardMedium]{inline-size:8.75rem;block-size:8.75rem;flex-direction:column;justify-content:space-between;padding:.75rem;border-radius:var(--tui-radius-l);box-sizing:border-box}[tuiCardMedium][tuiTitle]{padding:.625rem .75rem}[tuiCardMedium] [tuiTitle]{margin:-.125rem 0}[tuiCardMedium] [tuiSubtitle]{color:var(--tui-text-primary)}[tuiCardLarge][data-space]{--t-space: .75rem;--t-radius: var(--tui-radius-l);--t-comp: -.25rem;--t-padding: .75rem;--t-dim: calc(var(--t-padding) + var(--t-comp));font:var(--tui-font-text-m);padding:var(--t-padding);border-radius:var(--t-radius);box-sizing:border-box}[tuiCardLarge][data-space][data-space=normal]{--t-radius: 1.5rem;--t-padding: 1.5rem;--t-space: 1.5rem}[tuiCardLarge][data-space][data-space=compact]{--t-radius: 1rem;--t-padding: 1.25rem;--t-space: 1.25rem}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader]){flex-direction:column;gap:var(--t-space);align-items:stretch}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader])>:last-child:not([tuiCell]){margin-top:auto}[tuiCardLarge][data-space][tuiHeader]{padding:var(--t-dim) var(--t-dim) var(--t-dim) var(--t-padding)}[tuiCardLarge][data-space][tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space]>[tuiHeader]{margin:var(--t-comp) var(--t-comp) calc(1.5 * var(--t-comp)) 0}[tuiCardLarge][data-space]>[tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space] [tuiCell]{inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;padding:.5rem;margin:-.5rem -.5rem -.75rem;border-radius:var(--tui-radius-l)}[tuiCardLarge][data-space] [tuiCell]:last-of-type{margin-bottom:-.5rem}[tuiCardLarge][data-space]>[tuiLink]:last-child{display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;margin-bottom:var(--t-comp)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-card"
      },
      styles: ["[tuiCardMedium],[tuiCardLarge]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;position:relative;display:flex;align-items:flex-start;flex-shrink:0;text-decoration:none;overscroll-behavior:contain;overflow:hidden}[tuiCardMedium][tuiTitle],[tuiCardLarge][tuiTitle],[tuiCardMedium] [tuiTitle]:not([tuiCell] *):not([tuiLabel] *),[tuiCardLarge] [tuiTitle]:not([tuiCell] *):not([tuiLabel] *){font-weight:700}[tuiCardMedium] [tuiTitle],[tuiCardLarge] [tuiTitle],[tuiCardMedium] [tuiSubtitle],[tuiCardLarge] [tuiSubtitle]{max-inline-size:100%}[tuiCardMedium]>*,[tuiCardLarge]>*{scrollbar-width:none;-ms-overflow-style:none}[tuiCardMedium]>*::-webkit-scrollbar,[tuiCardLarge]>*::-webkit-scrollbar,[tuiCardMedium]>*::-webkit-scrollbar-thumb,[tuiCardLarge]>*::-webkit-scrollbar-thumb{display:none}[tuiCardMedium]{inline-size:8.75rem;block-size:8.75rem;flex-direction:column;justify-content:space-between;padding:.75rem;border-radius:var(--tui-radius-l);box-sizing:border-box}[tuiCardMedium][tuiTitle]{padding:.625rem .75rem}[tuiCardMedium] [tuiTitle]{margin:-.125rem 0}[tuiCardMedium] [tuiSubtitle]{color:var(--tui-text-primary)}[tuiCardLarge][data-space]{--t-space: .75rem;--t-radius: var(--tui-radius-l);--t-comp: -.25rem;--t-padding: .75rem;--t-dim: calc(var(--t-padding) + var(--t-comp));font:var(--tui-font-text-m);padding:var(--t-padding);border-radius:var(--t-radius);box-sizing:border-box}[tuiCardLarge][data-space][data-space=normal]{--t-radius: 1.5rem;--t-padding: 1.5rem;--t-space: 1.5rem}[tuiCardLarge][data-space][data-space=compact]{--t-radius: 1rem;--t-padding: 1.25rem;--t-space: 1.25rem}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader]){flex-direction:column;gap:var(--t-space);align-items:stretch}[tuiCardLarge][data-space]:not([tuiCell],[tuiHeader])>:last-child:not([tuiCell]){margin-top:auto}[tuiCardLarge][data-space][tuiHeader]{padding:var(--t-dim) var(--t-dim) var(--t-dim) var(--t-padding)}[tuiCardLarge][data-space][tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space]>[tuiHeader]{margin:var(--t-comp) var(--t-comp) calc(1.5 * var(--t-comp)) 0}[tuiCardLarge][data-space]>[tuiHeader] [tuiLink]:last-child{margin-right:calc(-1 * var(--t-comp))}[tuiCardLarge][data-space] [tuiCell]{inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;padding:.5rem;margin:-.5rem -.5rem -.75rem;border-radius:var(--tui-radius-l)}[tuiCardLarge][data-space] [tuiCell]:last-of-type{margin-bottom:-.5rem}[tuiCardLarge][data-space]>[tuiLink]:last-child{display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;margin-bottom:var(--t-comp)}\n"]
    }]
  }], null, null);
})();
var TuiCardMedium = class _TuiCardMedium {
  constructor() {
    this.nothing = tuiWithStyles(TuiCardStyles);
  }
  static {
    this.ɵfac = function TuiCardMedium_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardMedium)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardMedium,
      selectors: [["", "tuiCardMedium", ""]],
      hostAttrs: ["tuiCardMedium", ""],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardMedium, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCardMedium]",
      host: {
        tuiCardMedium: ""
      }
    }]
  }], null, null);
})();
var TuiCardLarge = class _TuiCardLarge {
  constructor() {
    this.nothing = tuiWithStyles(TuiCardStyles);
    this.space = "normal";
  }
  static {
    this.ɵfac = function TuiCardLarge_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCardLarge)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCardLarge,
      selectors: [["", "tuiCardLarge", ""]],
      hostAttrs: ["tuiCardLarge", ""],
      hostVars: 1,
      hostBindings: function TuiCardLarge_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-space", ctx.space || "normal");
        }
      },
      inputs: {
        space: [0, "tuiCardLarge", "space"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCardLarge, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCardLarge]",
      host: {
        tuiCardLarge: "",
        "[attr.data-space]": 'space || "normal"'
      }
    }]
  }], null, {
    space: [{
      type: Input,
      args: ["tuiCardLarge"]
    }]
  });
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-cell.mjs
var TuiCellStyles = class _TuiCellStyles {
  static {
    this.ɵfac = function TuiCellStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCellStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCellStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-cell"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiCellStyles_Template(rf, ctx) {
      },
      styles: ["[tuiCell]{--t-padding: .125rem 1rem;--t-radius: var(--tui-radius-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-padding);min-block-size:var(--t-height);border-radius:var(--t-radius)}[tuiCell]:disabled{pointer-events:none}[tuiCell] [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-height);align-items:center;align-self:stretch}[tuiCell] [tuiCellActions]{position:absolute;right:0;z-index:1;padding-right:inherit}[tuiCell] [tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell] [tuiCellActions] button,[tuiCell] [tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell] [tuiCellActions] button:focus-visible,[tuiCell] [tuiCellActions] a:focus-visible{opacity:1}[tuiCell] [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell] [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell] [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell] [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell] tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);left:-.625rem}[tuiCell][data-size=s]{--t-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem}[tuiCell][data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-font-text-ui-s);gap:0}[tuiCell][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=s]>*:not(:first-child),[tuiCell][data-size=s]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.5rem}[tuiCell][data-size=s]>tui-avatar,[tuiCell][data-size=s]>tui-avatar-stack tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 1.5rem;font:var(--tui-font-text-m);font-size:.5625rem}[tuiCell][data-size=m]{--t-height: calc(var(--tui-height-m) - .75rem);--t-padding: .375rem 1rem}[tuiCell][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-s);gap:.125rem}[tuiCell][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=m]>*:not(:first-child),[tuiCell][data-size=m]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.75rem}[tuiCell][data-size=m]>tui-avatar,[tuiCell][data-size=m]>tui-avatar-stack tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2rem;align-self:flex-start}[tuiCell][data-size=l]{--t-height: calc(var(--tui-height-l) - 1rem);--t-padding: .5rem 1rem;--t-radius: var(--tui-radius-l)}[tuiCell][data-size=l]>*:not(:first-child),[tuiCell][data-size=l]>[tuiAccessories]>*:not(:first-child){margin-inline-start:1rem}[tuiCell][data-size=l]>tui-avatar,[tuiCell][data-size=l]>tui-avatar-stack tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2.5rem;font:var(--tui-font-text-m);font-weight:700;align-self:flex-start}[tuiCell]:hover [tuiCellActions]~*{opacity:0}[tuiCell]:hover [tuiCellActions] button,[tuiCell]:hover [tuiCellActions] a,[tuiCell]:hover [tuiCellActions] label{opacity:1}[tuiOption] [tuiCell],tui-primitive-textfield [tuiCell]{padding:0}@media (hover: hover) and (pointer: fine){a[tuiCell]:not([tuiSurface]):hover,button[tuiCell]:not([tuiSurface]):hover,label[tuiCell]:not([tuiSurface]):hover{background:var(--tui-background-neutral-1);cursor:pointer}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCellStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-cell"
      },
      styles: ["[tuiCell]{--t-padding: .125rem 1rem;--t-radius: var(--tui-radius-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;box-sizing:content-box;isolation:isolate;color:var(--tui-text-primary);padding:var(--t-padding);min-block-size:var(--t-height);border-radius:var(--t-radius)}[tuiCell]:disabled{pointer-events:none}[tuiCell] [tuiAccessories]{position:relative;display:flex;max-block-size:var(--t-height);align-items:center;align-self:stretch}[tuiCell] [tuiCellActions]{position:absolute;right:0;z-index:1;padding-right:inherit}[tuiCell] [tuiCellActions]~*{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}[tuiCell] [tuiCellActions] button,[tuiCell] [tuiCellActions] a{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}[tuiCell] [tuiCellActions] button:focus-visible,[tuiCell] [tuiCellActions] a:focus-visible{opacity:1}[tuiCell] [tuiSubtitle]{display:flex;align-items:center;gap:.25rem;color:var(--tui-text-secondary)}[tuiCell] [tuiTitle]{flex-shrink:7;margin-inline-end:auto;align-items:normal;text-align:start}[tuiCell] [tuiTitle]~[tuiTitle]{flex-shrink:3;margin-inline-end:0;text-align:end;align-items:flex-end}[tuiCell] [tuiTitle]~[tuiTitle][tuiFade]{align-items:flex-start}[tuiCell] tui-badge-notification[data-size=xs]{position:absolute;top:50%;transform:translateY(-50%);left:-.625rem}[tuiCell][data-size=s]{--t-height: calc(var(--tui-height-s) - .5rem);--t-padding: .125rem 1rem}[tuiCell][data-size=s] [tuiTitle]{max-block-size:100%;font:var(--tui-font-text-ui-s);gap:0}[tuiCell][data-size=s] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=s]>*:not(:first-child),[tuiCell][data-size=s]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.5rem}[tuiCell][data-size=s]>tui-avatar,[tuiCell][data-size=s]>tui-avatar-stack tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar,[tuiCell][data-size=s]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 1.5rem;font:var(--tui-font-text-m);font-size:.5625rem}[tuiCell][data-size=m]{--t-height: calc(var(--tui-height-m) - .75rem);--t-padding: .375rem 1rem}[tuiCell][data-size=m] [tuiTitle]{font:var(--tui-font-text-ui-s);gap:.125rem}[tuiCell][data-size=m] [tuiSubtitle]{font:var(--tui-font-text-ui-xs)}[tuiCell][data-size=m]>*:not(:first-child),[tuiCell][data-size=m]>[tuiAccessories]>*:not(:first-child){margin-inline-start:.75rem}[tuiCell][data-size=m]>tui-avatar,[tuiCell][data-size=m]>tui-avatar-stack tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar,[tuiCell][data-size=m]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2rem;align-self:flex-start}[tuiCell][data-size=l]{--t-height: calc(var(--tui-height-l) - 1rem);--t-padding: .5rem 1rem;--t-radius: var(--tui-radius-l)}[tuiCell][data-size=l]>*:not(:first-child),[tuiCell][data-size=l]>[tuiAccessories]>*:not(:first-child){margin-inline-start:1rem}[tuiCell][data-size=l]>tui-avatar,[tuiCell][data-size=l]>tui-avatar-stack tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar,[tuiCell][data-size=l]>[tuiAccessories] tui-avatar-stack tui-avatar{--t-size: 2.5rem;font:var(--tui-font-text-m);font-weight:700;align-self:flex-start}[tuiCell]:hover [tuiCellActions]~*{opacity:0}[tuiCell]:hover [tuiCellActions] button,[tuiCell]:hover [tuiCellActions] a,[tuiCell]:hover [tuiCellActions] label{opacity:1}[tuiOption] [tuiCell],tui-primitive-textfield [tuiCell]{padding:0}@media (hover: hover) and (pointer: fine){a[tuiCell]:not([tuiSurface]):hover,button[tuiCell]:not([tuiSurface]):hover,label[tuiCell]:not([tuiSurface]):hover{background:var(--tui-background-neutral-1);cursor:pointer}}\n"]
    }]
  }], null, null);
})();
var TuiCell = class _TuiCell {
  constructor() {
    this.nothing = tuiWithStyles(TuiCellStyles);
    this.size = "";
  }
  static {
    this.ɵfac = function TuiCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCell)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCell,
      selectors: [["", "tuiCell", "", 5, "ng-template"]],
      hostAttrs: ["tuiCell", ""],
      hostVars: 1,
      hostBindings: function TuiCell_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || "l");
        }
      },
      inputs: {
        size: [0, "tuiCell", "size"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCell, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCell]:not(ng-template)",
      providers: [tuiAvatarOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      })],
      host: {
        tuiCell: "",
        "[attr.data-size]": 'size || "l"'
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiCell"]
    }]
  });
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-header.mjs
var TuiHeaderStyles = class _TuiHeaderStyles {
  static {
    this.ɵfac = function TuiHeaderStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHeaderStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHeaderStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-header"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiHeaderStyles_Template(rf, ctx) {
      },
      styles: ['[tuiHeader]{position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;text-align:start}[tuiHeader] [tuiTitle]{flex-grow:2}[tuiHeader] [tuiAccessories]{display:flex;align-items:center;gap:.75rem}[tuiHeader] [tuiAccessories]:before{content:"\\200b";visibility:hidden}[tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-m);color:var(--tui-text-secondary)}[tuiHeader] [tuiCaption]{font:var(--tui-font-text-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase}[tuiHeader][data-size=xxl] [tuiTitle],[tuiHeader][data-size=xxl] [tuiAccessories]{font:var(--tui-font-heading-1)}[tuiHeader][data-size=xl] [tuiTitle],[tuiHeader][data-size=xl] [tuiAccessories]{font:var(--tui-font-heading-2)}[tuiHeader][data-size=l] [tuiTitle],[tuiHeader][data-size=l] [tuiAccessories]{font:var(--tui-font-heading-3)}[tuiHeader][data-size=m] [tuiTitle],[tuiHeader][data-size=m] [tuiAccessories]{font:var(--tui-font-heading-4)}[tuiHeader][data-size=s] [tuiTitle],[tuiHeader][data-size=s] [tuiAccessories]{font:var(--tui-font-heading-5)}[tuiHeader][data-size=xs] [tuiTitle],[tuiHeader][data-size=xs] [tuiAccessories]{font:var(--tui-font-heading-6)}[tuiHeader][data-size=xxs] [tuiTitle]{gap:.125rem}[tuiHeader][data-size=xxs] [tuiTitle],[tuiHeader][data-size=xxs] [tuiAccessories]{font:var(--tui-font-text-xl)}[tuiHeader][data-size=xxl] [tuiSubtitle],[tuiHeader][data-size=xl] [tuiSubtitle],[tuiHeader][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-l)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeaderStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-header"
      },
      styles: ['[tuiHeader]{position:relative;display:flex;align-items:flex-start;box-sizing:content-box;color:var(--tui-text-primary);margin:0;text-align:start}[tuiHeader] [tuiTitle]{flex-grow:2}[tuiHeader] [tuiAccessories]{display:flex;align-items:center;gap:.75rem}[tuiHeader] [tuiAccessories]:before{content:"\\200b";visibility:hidden}[tuiHeader] [tuiSubtitle]{font:var(--tui-font-text-m);color:var(--tui-text-secondary)}[tuiHeader] [tuiCaption]{font:var(--tui-font-text-s);color:var(--tui-text-secondary);font-weight:500;text-transform:uppercase}[tuiHeader][data-size=xxl] [tuiTitle],[tuiHeader][data-size=xxl] [tuiAccessories]{font:var(--tui-font-heading-1)}[tuiHeader][data-size=xl] [tuiTitle],[tuiHeader][data-size=xl] [tuiAccessories]{font:var(--tui-font-heading-2)}[tuiHeader][data-size=l] [tuiTitle],[tuiHeader][data-size=l] [tuiAccessories]{font:var(--tui-font-heading-3)}[tuiHeader][data-size=m] [tuiTitle],[tuiHeader][data-size=m] [tuiAccessories]{font:var(--tui-font-heading-4)}[tuiHeader][data-size=s] [tuiTitle],[tuiHeader][data-size=s] [tuiAccessories]{font:var(--tui-font-heading-5)}[tuiHeader][data-size=xs] [tuiTitle],[tuiHeader][data-size=xs] [tuiAccessories]{font:var(--tui-font-heading-6)}[tuiHeader][data-size=xxs] [tuiTitle]{gap:.125rem}[tuiHeader][data-size=xxs] [tuiTitle],[tuiHeader][data-size=xxs] [tuiAccessories]{font:var(--tui-font-text-xl)}[tuiHeader][data-size=xxl] [tuiSubtitle],[tuiHeader][data-size=xl] [tuiSubtitle],[tuiHeader][data-size=l] [tuiSubtitle]{font:var(--tui-font-text-l)}\n']
    }]
  }], null, null);
})();
var TuiHeader = class _TuiHeader {
  constructor() {
    this.nothing = tuiWithStyles(TuiHeaderStyles);
    this.size = "s";
  }
  static {
    this.ɵfac = function TuiHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHeader,
      selectors: [["", "tuiHeader", ""]],
      hostAttrs: ["tuiHeader", ""],
      hostVars: 1,
      hostBindings: function TuiHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size || "s");
        }
      },
      inputs: {
        size: [0, "tuiHeader", "size"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "s"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiBadgeOptionsProvider({
        size: "m"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeader, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHeader]",
      providers: [tuiAvatarOptionsProvider({
        size: "s"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiBadgeOptionsProvider({
        size: "m"
      })],
      host: {
        tuiHeader: "",
        "[attr.data-size]": 'size || "s"'
      }
    }]
  }], null, {
    size: [{
      type: Input,
      args: ["tuiHeader"]
    }]
  });
})();

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-tokens.mjs
var LAYOUT_ICONS = {
  filter: "@tui.filter",
  grid: "@tui.layout-grid"
};
var TUI_LAYOUT_ICONS = tuiCreateToken(LAYOUT_ICONS);
function tuiLayoutIconsProvider(icons) {
  return tuiProvideOptions(TUI_LAYOUT_ICONS, icons, LAYOUT_ICONS);
}
var TUI_COMMON_ICONS2 = TUI_LAYOUT_ICONS;
var tuiCommonIconsProvider = tuiLayoutIconsProvider;

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-navigation.mjs
var _c03 = ["tuiNavigationAside", ""];
var _c13 = [[["header"]], "*", [["footer"]]];
var _c22 = ["header", "*", "footer"];
var _c32 = ["datalist"];
var _c42 = ["*"];
function TuiAsideGroupComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiAsideGroupComponent_ng_template_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiAsideGroupComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list")(1, "tui-opt-group", 5);
    ɵɵtemplate(2, TuiAsideGroupComponent_ng_template_5_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const host_r3 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("label", host_r3.textContent);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.template);
  }
}
function TuiDrawerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c5 = ["tuiIconButton", "", "tuiNavigationDrawer", ""];
function TuiDrawerDirective_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c6 = ["tuiNavigationHeader", ""];
var _c7 = ["tuiNavigationLogo", ""];
var _c8 = ["tuiNavigationMain", ""];
var _c9 = ["tuiNavigationNav", ""];
var TuiAsideComponent = class _TuiAsideComponent {
  constructor() {
    this.expanded = signal(false);
  }
  set tuiNavigationAside(expanded) {
    this.expanded.set(expanded);
  }
  static {
    this.ɵfac = function TuiAsideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAsideComponent,
      selectors: [["aside", "tuiNavigationAside", ""]],
      hostAttrs: ["tuiNavigationAside", "", "tuiTheme", "dark"],
      hostVars: 2,
      hostBindings: function TuiAsideComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_expanded", ctx.expanded());
        }
      },
      inputs: {
        tuiNavigationAside: "tuiNavigationAside"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation",
        align: "right",
        offset: 12
      })]), ɵɵStandaloneFeature],
      attrs: _c03,
      ngContentSelectors: _c22,
      decls: 5,
      vars: 0,
      consts: [[1, "t-nav-scrollbar"], ["tuiFade", "vertical", "tuiScrollable", "", 1, "t-nav-content"]],
      template: function TuiAsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c13);
          ɵɵprojection(0);
          ɵɵelementStart(1, "tui-scrollbar", 0)(2, "div", 1);
          ɵɵprojection(3, 1);
          ɵɵelementEnd()();
          ɵɵprojection(4, 2);
        }
      },
      dependencies: [TuiFade, TuiScrollable, TuiScrollbar],
      styles: ['aside[tuiNavigationAside]{transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:3rem;z-index:1;display:flex;inline-size:3rem;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}aside[tuiNavigationAside]:before{content:"";position:absolute;top:0;left:100%;z-index:-1;block-size:3rem;inline-size:3rem;pointer-events:none;border-start-start-radius:1.25rem;box-shadow:-1.5rem 0 var(--tui-theme-color, #000)}aside[tuiNavigationAside]._expanded{inline-size:13.75rem}aside[tuiNavigationAside]._expanded+main[tuiNavigationMain]{max-inline-size:calc(100% - 13.75rem)}aside[tuiNavigationAside] .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside] .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;block-size:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside] tui-expand [tuiAsideItem]{padding-inline-start:2rem}aside[tuiNavigationAside] hr{background:var(--tui-border-normal);block-size:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside] header{padding-bottom:.25rem;box-shadow:inset 0 -1px var(--tui-border-normal);margin-bottom:1rem}aside[tuiNavigationAside] footer{margin-top:auto;border-block-start:1.75rem solid transparent}aside[tuiNavigationAside]+main[tuiNavigationMain]{max-inline-size:calc(100% - 3rem)}[tuiAsideItem][tuiAsideItem]{inline-size:100%;justify-content:flex-start;gap:.625rem;margin-bottom:.25rem}[tuiAsideItem][tuiAsideItem]:after{border:none!important;margin-left:auto!important;color:var(--tui-text-tertiary)}[tuiAsideItem][tuiAsideItem]._chevron-rotated,[tuiAsideItem][tuiAsideItem]._active{background:var(--tui-background-neutral-1-hover)}tui-dropdown[data-appearance=dropdown-navigation]{border:none;background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]{justify-content:flex-start;margin:0;padding:0 .5rem}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._active{background:transparent}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link:not(._custom):after{opacity:0}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link._active:after{opacity:1}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "aside[tuiNavigationAside]",
      imports: [TuiFade, TuiScrollable, TuiScrollbar],
      template: `
        <ng-content select="header"></ng-content>
        <tui-scrollbar class="t-nav-scrollbar">
            <div
                tuiFade="vertical"
                tuiScrollable
                class="t-nav-content"
            >
                <ng-content></ng-content>
            </div>
        </tui-scrollbar>
        <ng-content select="footer"></ng-content>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation",
        align: "right",
        offset: 12
      })],
      host: {
        tuiNavigationAside: "",
        tuiTheme: "dark",
        "[class._expanded]": "expanded()"
      },
      styles: ['aside[tuiNavigationAside]{transition-property:width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:sticky;top:3rem;z-index:1;display:flex;inline-size:3rem;flex-direction:column;padding:.5rem .5rem .25rem;box-sizing:border-box;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}aside[tuiNavigationAside]:before{content:"";position:absolute;top:0;left:100%;z-index:-1;block-size:3rem;inline-size:3rem;pointer-events:none;border-start-start-radius:1.25rem;box-shadow:-1.5rem 0 var(--tui-theme-color, #000)}aside[tuiNavigationAside]._expanded{inline-size:13.75rem}aside[tuiNavigationAside]._expanded+main[tuiNavigationMain]{max-inline-size:calc(100% - 13.75rem)}aside[tuiNavigationAside] .t-nav-scrollbar{margin:0 -.25rem}aside[tuiNavigationAside] .t-nav-content{scrollbar-width:none;-ms-overflow-style:none;block-size:100%;padding:0 .25rem;overflow:auto}aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar,aside[tuiNavigationAside] .t-nav-content::-webkit-scrollbar-thumb{display:none}aside[tuiNavigationAside] tui-expand [tuiAsideItem]{padding-inline-start:2rem}aside[tuiNavigationAside] hr{background:var(--tui-border-normal);block-size:1px;margin:0 0 .25rem;border:none}aside[tuiNavigationAside] header{padding-bottom:.25rem;box-shadow:inset 0 -1px var(--tui-border-normal);margin-bottom:1rem}aside[tuiNavigationAside] footer{margin-top:auto;border-block-start:1.75rem solid transparent}aside[tuiNavigationAside]+main[tuiNavigationMain]{max-inline-size:calc(100% - 3rem)}[tuiAsideItem][tuiAsideItem]{inline-size:100%;justify-content:flex-start;gap:.625rem;margin-bottom:.25rem}[tuiAsideItem][tuiAsideItem]:after{border:none!important;margin-left:auto!important;color:var(--tui-text-tertiary)}[tuiAsideItem][tuiAsideItem]._chevron-rotated,[tuiAsideItem][tuiAsideItem]._active{background:var(--tui-background-neutral-1-hover)}tui-dropdown[data-appearance=dropdown-navigation]{border:none;background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]{justify-content:flex-start;margin:0;padding:0 .5rem}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._active{background:transparent}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link:not(._custom):after{opacity:0}tui-dropdown[data-appearance=dropdown-navigation] [tuiAsideItem]._link._active:after{opacity:1}\n']
    }]
  }], null, {
    tuiNavigationAside: [{
      type: Input
    }]
  });
})();
var TuiAsideGroupComponent = class _TuiAsideGroupComponent {
  constructor() {
    this.aside = inject(TuiAsideComponent);
    this.open = signal(false);
    this.template = null;
    this.expanded = computed(() => this.aside.expanded() && this.open());
    this.binding = tuiDirectiveBinding(TuiDropdownDirective, "tuiDropdown", computed(() => this.aside.expanded() ? null : this.datalist));
    this.openChange = toObservable(this.open).pipe(skip(1));
    this.size = "s";
  }
  set openSetter(open) {
    this.toggle(open);
  }
  toggle(open = !this.open()) {
    this.open.set(open && this.aside.expanded());
    this.chevron?.chevron.set(this.open());
  }
  static {
    this.ɵfac = function TuiAsideGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideGroupComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAsideGroupComponent,
      selectors: [["tui-aside-group"]],
      contentQueries: function TuiAsideGroupComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiChevron, 7);
          ɵɵcontentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chevron = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      viewQuery: function TuiAsideGroupComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c32, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datalist = _t.first);
        }
      },
      inputs: {
        openSetter: [0, "open", "openSetter"]
      },
      outputs: {
        openChange: "openChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DATA_LIST_HOST, _TuiAsideGroupComponent)]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiDropdownHover, TuiDropdownPositionSided, TuiDropdownOpen]), ɵɵStandaloneFeature],
      ngContentSelectors: _c42,
      decls: 7,
      vars: 2,
      consts: [["host", ""], ["datalist", ""], [3, "click"], [3, "expanded"], [4, "polymorpheusOutlet"], [3, "label"]],
      template: function TuiAsideGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 2, 0);
          ɵɵlistener("click", function TuiAsideGroupComponent_Template_div_click_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.toggle());
          });
          ɵɵprojection(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "tui-expand", 3);
          ɵɵtemplate(4, TuiAsideGroupComponent_ng_container_4_Template, 1, 0, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵtemplate(5, TuiAsideGroupComponent_ng_template_5_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵproperty("expanded", ctx.expanded());
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.template);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiDataListComponent, TuiOptGroup, TuiExpandComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideGroupComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-aside-group",
      imports: [PolymorpheusOutlet, TuiDataList, TuiExpand],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_DATA_LIST_HOST, TuiAsideGroupComponent)],
      hostDirectives: [TuiDropdownDirective, TuiDropdownHover, TuiDropdownPositionSided, TuiDropdownOpen],
      template: '<div\n    #host\n    (click)="toggle()"\n>\n    <ng-content />\n</div>\n<tui-expand [expanded]="expanded()">\n    <ng-container *polymorpheusOutlet="template" />\n</tui-expand>\n<ng-template #datalist>\n    <tui-data-list>\n        <tui-opt-group [label]="host.textContent">\n            <ng-container *polymorpheusOutlet="template" />\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'
    }]
  }], null, {
    datalist: [{
      type: ViewChild,
      args: ["datalist", {
        static: true
      }]
    }],
    chevron: [{
      type: ContentChild,
      args: [TuiChevron, {
        static: true
      }]
    }],
    template: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    openChange: [{
      type: Output
    }],
    openSetter: [{
      type: Input,
      args: ["open"]
    }]
  });
})();
var TuiHintAsideDirective = class _TuiHintAsideDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.aside = inject(TuiAsideComponent);
    this.dropdown = inject(TuiDropdownDirective, {
      optional: true
    });
    this.binding = tuiDirectiveBinding(TuiHintDirective, "tuiHint", computed(() => this.aside.expanded() || this.dropdown ? "" : this.el.textContent?.trim()));
  }
  static {
    this.ɵfac = function TuiHintAsideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHintAsideDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiHintAsideDirective,
      selectors: [["", "tuiHintAside", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiHintOptionsProvider({
        direction: "right"
      })]), ɵɵHostDirectivesFeature([TuiHintDirective])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHintAsideDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiHintAside]",
      providers: [tuiHintOptionsProvider({
        direction: "right"
      })],
      hostDirectives: [TuiHintDirective]
    }]
  }], null, null);
})();
var TuiAsideItemDirective = class _TuiAsideItemDirective {
  constructor() {
    this.icon = inject(TUI_COMMON_ICONS).check;
    this.icons = inject(TuiIcons);
    this.link = inject(RouterLink, {
      self: true,
      optional: true
    });
    this.active = toSignal(inject(RouterLinkActive).isActiveChange);
    this.size = "s";
  }
  static {
    this.ɵfac = function TuiAsideItemDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAsideItemDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAsideItemDirective,
      selectors: [["", "tuiAsideItem", ""]],
      hostAttrs: ["tuiButton", ""],
      hostVars: 6,
      hostBindings: function TuiAsideItemDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_link", ctx.link)("_active", ctx.active())("_custom", ctx.icon !== ctx.icons.iconEnd);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_DATA_LIST_HOST, _TuiAsideItemDirective), provideIcon(), provideDropdown()]), ɵɵHostDirectivesFeature([TuiHintAsideDirective, TuiDropdownManual, TuiDropdownPositionSided, TuiButton, {
        directive: RouterLinkActive,
        inputs: ["routerLinkActiveOptions", "routerLinkActiveOptions"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAsideItemDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAsideItem]",
      providers: [tuiProvide(TUI_DATA_LIST_HOST, TuiAsideItemDirective), provideIcon(), provideDropdown()],
      hostDirectives: [TuiHintAsideDirective, TuiDropdownManual, TuiDropdownPositionSided, TuiButton, {
        directive: RouterLinkActive,
        inputs: ["routerLinkActiveOptions"]
      }],
      host: {
        tuiButton: "",
        "[class._link]": "link",
        "[class._active]": "active()",
        "[class._custom]": "icon !== icons.iconEnd"
      }
    }]
  }], null, null);
})();
function provideIcon() {
  return {
    provide: TUI_ICON_END,
    useFactory: () => {
      if (inject(TuiChevron, {
        optional: true,
        self: true
      })) {
        return inject(TUI_CHEVRON);
      }
      const {
        check,
        more
      } = inject(TUI_COMMON_ICONS);
      const active = inject(TuiDataListComponent, {
        optional: true
      }) && inject(RouterLink, {
        self: true,
        optional: true
      }) ? check : "";
      return inject(TuiDropdownDirective, {
        self: true,
        optional: true
      }) ? more : active;
    }
  };
}
function provideDropdown() {
  return {
    provide: TUI_DROPDOWN_OPTIONS,
    useFactory: () => __spreadProps(__spreadValues({}, inject(TUI_DROPDOWN_OPTIONS, {
      skipSelf: true
    })), {
      offset: inject(TuiDataListComponent, {
        optional: true
      }) ? 8 : 12
    })
  };
}
var TuiDrawerComponent = class _TuiDrawerComponent {
  constructor() {
    this.directive = inject(TuiDropdownDirective);
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.top = tuiIsHTMLElement(this.directive.el.offsetParent) && tuiIsHTMLElement(this.directive.el.offsetParent.offsetParent) ? this.directive.el.offsetParent.getBoundingClientRect().bottom - this.directive.el.offsetParent.offsetParent.getBoundingClientRect().top : 0;
  }
  static {
    this.ɵfac = function TuiDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDrawerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDrawerComponent,
      selectors: [["ng-component"]],
      hostAttrs: ["tuiTheme", "dark"],
      hostVars: 3,
      hostBindings: function TuiDrawerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInLeft", ctx.animation);
          ɵɵstyleProp("top", ctx.top, "px");
        }
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiActiveZone]), ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "tui-scrollbar");
          ɵɵtemplate(1, TuiDrawerComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("height", 100, "%");
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.directive.content);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{position:fixed;left:0;right:0;bottom:0;background:var(--tui-theme-color, #000);inline-size:13.75rem;color:var(--tui-text-primary);pointer-events:auto}[_nghost-%COMP%]     tui-data-list [tuiOption]{justify-content:flex-start;gap:.75rem;margin:0;font:var(--tui-font-text-ui-s);font-weight:700}[_nghost-%COMP%]     tui-data-list tui-opt-group:before{font:var(--tui-font-text-xs);text-transform:uppercase;color:var(--tui-text-tertiary)}"],
      data: {
        animation: [tuiSlideInLeft]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDrawerComponent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet, TuiScrollbar],
      template: `
        <tui-scrollbar [style.height.%]="100">
            <ng-container *polymorpheusOutlet="directive.content" />
        </tui-scrollbar>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInLeft],
      hostDirectives: [TuiActiveZone],
      host: {
        tuiTheme: "dark",
        "[@tuiSlideInLeft]": "animation",
        "[style.top.px]": "top"
      },
      styles: [":host{position:fixed;left:0;right:0;bottom:0;background:var(--tui-theme-color, #000);inline-size:13.75rem;color:var(--tui-text-primary);pointer-events:auto}:host ::ng-deep tui-data-list [tuiOption]{justify-content:flex-start;gap:.75rem;margin:0;font:var(--tui-font-text-ui-s);font-weight:700}:host ::ng-deep tui-data-list tui-opt-group:before{font:var(--tui-font-text-xs);text-transform:uppercase;color:var(--tui-text-tertiary)}\n"]
    }]
  }], null, null);
})();
var TuiDrawerDirective = class _TuiDrawerDirective {
  constructor() {
    this.x = inject(TUI_COMMON_ICONS).close;
    this.icons = inject(TuiIcons);
    this.dropdown = tuiDropdown(null);
    this.open = inject(TuiDropdownOpen);
  }
  ngDoCheck() {
    this.icons.iconStart = this.open.tuiDropdownOpen ? this.x : "";
  }
  set template(template) {
    this.dropdown.set(template);
  }
  static {
    this.ɵfac = function TuiDrawerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDrawerDirective)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDrawerDirective,
      selectors: [["", "tuiIconButton", "", "tuiNavigationDrawer", ""]],
      viewQuery: function TuiDrawerDirective_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "secondary-grayscale"
      }), {
        provide: TUI_ICON_END,
        useFactory: () => inject(TUI_LAYOUT_ICONS).grid
      }, {
        provide: TUI_DROPDOWN_COMPONENT,
        useValue: TuiDrawerComponent
      }]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen]), ɵɵStandaloneFeature],
      attrs: _c5,
      ngContentSelectors: _c42,
      decls: 1,
      vars: 0,
      template: function TuiDrawerDirective_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiDrawerDirective_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDrawerDirective, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiIconButton][tuiNavigationDrawer]",
      template: "<ng-template><ng-content /></ng-template>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        appearance: "secondary-grayscale"
      }), {
        provide: TUI_ICON_END,
        useFactory: () => inject(TUI_LAYOUT_ICONS).grid
      }, {
        provide: TUI_DROPDOWN_COMPONENT,
        useValue: TuiDrawerComponent
      }],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen]
    }]
  }], null, {
    template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var TuiHeaderComponent = class _TuiHeaderComponent {
  static {
    this.ɵfac = function TuiHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiHeaderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiHeaderComponent,
      selectors: [["header", "tuiNavigationHeader", ""]],
      hostAttrs: ["tuiTheme", "dark"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAvatarOptionsProvider({
        size: "s",
        appearance: "secondary-grayscale"
      }), tuiBadgeNotificationOptionsProvider({
        size: "xs"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "primary"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation"
      })]), ɵɵStandaloneFeature],
      attrs: _c6,
      ngContentSelectors: _c42,
      decls: 1,
      vars: 0,
      template: function TuiHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['header[tuiNavigationHeader][tuiNavigationHeader]{position:sticky;top:0;z-index:1;display:flex;block-size:3rem;inline-size:100%;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-font-text-s);line-height:1rem;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}header[tuiNavigationHeader][tuiNavigationHeader]:after{content:"";position:absolute;top:100%;left:0;right:0;z-index:-1;block-size:3rem;pointer-events:none;box-shadow:0 -1.5rem var(--tui-theme-color, #000);border-radius:1.25rem 1.25rem 0 0}header[tuiNavigationHeader][tuiNavigationHeader]:before{content:"";position:fixed;top:inherit;left:0;right:0;z-index:-1;block-size:inherit;background:inherit}header[tuiNavigationHeader][tuiNavigationHeader] [tuiNavigationLogo]{padding:0 .5rem;margin-inline-start:.25rem}header[tuiNavigationHeader][tuiNavigationHeader] [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader][tuiNavigationHeader] [tuiButton],header[tuiNavigationHeader][tuiNavigationHeader] [tuiBadge],header[tuiNavigationHeader][tuiNavigationHeader] [tuiChip],header[tuiNavigationHeader][tuiNavigationHeader] tui-badge,header[tuiNavigationHeader][tuiNavigationHeader] tui-chip{max-inline-size:8rem}header[tuiNavigationHeader][tuiNavigationHeader] hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}header[tuiNavigationHeader][tuiNavigationHeader] hr~[tuiButton]{margin-right:.5rem}tui-dropdown[data-appearance=dropdown-navigation]{border:none;color:var(--tui-text-primary);background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiHeaderComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "header[tuiNavigationHeader]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAvatarOptionsProvider({
        size: "s",
        appearance: "secondary-grayscale"
      }), tuiBadgeNotificationOptionsProvider({
        size: "xs"
      }), tuiBadgeOptionsProvider({
        size: "m",
        appearance: "primary"
      }), tuiButtonOptionsProvider({
        size: "s",
        appearance: "flat-grayscale"
      }), tuiDropdownOptionsProvider({
        appearance: "dropdown-navigation"
      })],
      host: {
        tuiTheme: "dark"
      },
      styles: ['header[tuiNavigationHeader][tuiNavigationHeader]{position:sticky;top:0;z-index:1;display:flex;block-size:3rem;inline-size:100%;align-items:center;gap:.25rem;padding:.5rem;box-sizing:border-box;font:var(--tui-font-text-s);line-height:1rem;background:var(--tui-theme-color, #000);color:var(--tui-text-primary)}header[tuiNavigationHeader][tuiNavigationHeader]:after{content:"";position:absolute;top:100%;left:0;right:0;z-index:-1;block-size:3rem;pointer-events:none;box-shadow:0 -1.5rem var(--tui-theme-color, #000);border-radius:1.25rem 1.25rem 0 0}header[tuiNavigationHeader][tuiNavigationHeader]:before{content:"";position:fixed;top:inherit;left:0;right:0;z-index:-1;block-size:inherit;background:inherit}header[tuiNavigationHeader][tuiNavigationHeader] [tuiNavigationLogo]{padding:0 .5rem;margin-inline-start:.25rem}header[tuiNavigationHeader][tuiNavigationHeader] [tuiNavigationLogo] tui-icon{font-size:1rem}header[tuiNavigationHeader][tuiNavigationHeader] [tuiButton],header[tuiNavigationHeader][tuiNavigationHeader] [tuiBadge],header[tuiNavigationHeader][tuiNavigationHeader] [tuiChip],header[tuiNavigationHeader][tuiNavigationHeader] tui-badge,header[tuiNavigationHeader][tuiNavigationHeader] tui-chip{max-inline-size:8rem}header[tuiNavigationHeader][tuiNavigationHeader] hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}header[tuiNavigationHeader][tuiNavigationHeader] hr~[tuiButton]{margin-right:.5rem}tui-dropdown[data-appearance=dropdown-navigation]{border:none;color:var(--tui-text-primary);background:var(--tui-background-elevation-3);background:color-mix(in srgb,var(--tui-theme-color, #000) 80%,#fff)}\n']
    }]
  }], null, null);
})();
var TuiLogoComponent = class _TuiLogoComponent {
  static {
    this.ɵfac = function TuiLogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLogoComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLogoComponent,
      selectors: [["", "tuiNavigationLogo", ""]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c7,
      ngContentSelectors: _c42,
      decls: 1,
      vars: 0,
      template: function TuiLogoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[tuiNavigationLogo]{display:flex;align-items:center;gap:.5rem;overflow:hidden;white-space:nowrap;font-weight:700}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLogoComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiNavigationLogo]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ["[tuiNavigationLogo]{display:flex;align-items:center;gap:.5rem;overflow:hidden;white-space:nowrap;font-weight:700}\n"]
    }]
  }], null, null);
})();
var TuiMainComponent = class _TuiMainComponent {
  static {
    this.ɵfac = function TuiMainComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMainComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiMainComponent,
      selectors: [["main", "tuiNavigationMain", ""]],
      hostAttrs: ["tuiNavigationMain", ""],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c8,
      ngContentSelectors: _c42,
      decls: 1,
      vars: 0,
      template: function TuiMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["main[tuiNavigationMain]{transition-property:max-width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;grid-template-columns:repeat(12,minmax(0,8.5625rem));gap:0 1rem;justify-content:center;flex:1;padding:0 1.5rem;isolation:isolate;box-sizing:border-box}main[tuiNavigationMain]>[tuiHeader]{margin:1rem 0 .5rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]{flex-direction:column;gap:1rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]>:last-child:not([tuiTitle]){margin-bottom:.25rem}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiTitle]{max-inline-size:42rem;white-space:nowrap;gap:.375rem;overflow:hidden}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiSubtitle]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;word-break:break-word;font:var(--tui-font-text-s);overflow:hidden}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]{scrollbar-width:none;-ms-overflow-style:none;display:flex;gap:1rem;color:var(--tui-text-tertiary);font:var(--tui-font-text-s);white-space:nowrap;text-transform:none;overflow:auto}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar,main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar-thumb{display:none}main[tuiNavigationMain]>[tuiHeader] [tuiCaption] tui-icon{font-size:1rem;margin:.125rem 0;color:var(--tui-text-secondary)}main[tuiNavigationMain]>[tuiHeader] [tuiAccessories]{margin-inline-start:3rem;gap:.5rem!important}main[tuiNavigationMain]>a:first-child,main[tuiNavigationMain]>button:first-child,main[tuiNavigationMain]>tui-breadcrumbs:first-child{block-size:1.25rem;padding:0;margin-top:.875rem;justify-self:flex-start}main[tuiNavigationMain]>*{grid-column:span 12;max-inline-size:100%}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMainComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "main[tuiNavigationMain]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        tuiNavigationMain: ""
      },
      styles: ["main[tuiNavigationMain]{transition-property:max-width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:grid;grid-template-columns:repeat(12,minmax(0,8.5625rem));gap:0 1rem;justify-content:center;flex:1;padding:0 1.5rem;isolation:isolate;box-sizing:border-box}main[tuiNavigationMain]>[tuiHeader]{margin:1rem 0 .5rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]{flex-direction:column;gap:1rem}main[tuiNavigationMain]>[tuiHeader][tuiCardLarge]>:last-child:not([tuiTitle]){margin-bottom:.25rem}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiTitle]{max-inline-size:42rem;white-space:nowrap;gap:.375rem;overflow:hidden}main[tuiNavigationMain]>[tuiHeader]:not([tuiCardLarge]) [tuiSubtitle]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;word-break:break-word;font:var(--tui-font-text-s);overflow:hidden}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]{scrollbar-width:none;-ms-overflow-style:none;display:flex;gap:1rem;color:var(--tui-text-tertiary);font:var(--tui-font-text-s);white-space:nowrap;text-transform:none;overflow:auto}main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar,main[tuiNavigationMain]>[tuiHeader] [tuiCaption]::-webkit-scrollbar-thumb{display:none}main[tuiNavigationMain]>[tuiHeader] [tuiCaption] tui-icon{font-size:1rem;margin:.125rem 0;color:var(--tui-text-secondary)}main[tuiNavigationMain]>[tuiHeader] [tuiAccessories]{margin-inline-start:3rem;gap:.5rem!important}main[tuiNavigationMain]>a:first-child,main[tuiNavigationMain]>button:first-child,main[tuiNavigationMain]>tui-breadcrumbs:first-child{block-size:1.25rem;padding:0;margin-top:.875rem;justify-self:flex-start}main[tuiNavigationMain]>*{grid-column:span 12;max-inline-size:100%}\n"]
    }]
  }], null, null);
})();
var TuiNavComponent = class _TuiNavComponent {
  static {
    this.ɵfac = function TuiNavComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiNavComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiNavComponent,
      selectors: [["nav", "tuiNavigationNav", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiBadgeOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiTabsOptionsProvider({
        size: "m"
      })]), ɵɵStandaloneFeature],
      attrs: _c9,
      ngContentSelectors: _c42,
      decls: 1,
      vars: 0,
      template: function TuiNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["nav[tuiNavigationNav]{top:3rem;z-index:1;display:flex;min-block-size:3rem;align-items:center;gap:.5rem;padding:.25rem 0 0;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-font-text-s);line-height:1rem;color:var(--tui-text-secondary);border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,var(--tui-background-base) 0) fill 0/0/0 100vw}nav[tuiNavigationNav] [tuiNavigationLogo]{font:var(--tui-font-text-m);font-weight:700;color:var(--tui-text-primary)}nav[tuiNavigationNav]>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]>hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav] tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav] tui-tabs,nav[tuiNavigationNav] [tuiTabs]{box-shadow:none;margin-inline-end:1rem}nav[tuiNavigationNav] tui-tabs:before,nav[tuiNavigationNav] [tuiTabs]:before{background:var(--tui-background-accent-opposite-pressed)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiNavComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "nav[tuiNavigationNav]",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiBadgeOptionsProvider({
        size: "m"
      }), tuiButtonOptionsProvider({
        size: "s"
      }), tuiTabsOptionsProvider({
        size: "m"
      })],
      styles: ["nav[tuiNavigationNav]{top:3rem;z-index:1;display:flex;min-block-size:3rem;align-items:center;gap:.5rem;padding:.25rem 0 0;box-sizing:border-box;white-space:nowrap;overflow:hidden;font:var(--tui-font-text-s);line-height:1rem;color:var(--tui-text-secondary);border-image:linear-gradient(0deg,var(--tui-border-normal) 1px,var(--tui-background-base) 0) fill 0/0/0 100vw}nav[tuiNavigationNav] [tuiNavigationLogo]{font:var(--tui-font-text-m);font-weight:700;color:var(--tui-text-primary)}nav[tuiNavigationNav]>a{text-decoration:none;color:inherit}nav[tuiNavigationNav]>hr{inline-size:2rem;margin:0 0 0 auto;border:none;visibility:hidden;flex-shrink:0}nav[tuiNavigationNav] tui-icon{font-size:1rem;vertical-align:bottom}nav[tuiNavigationNav] tui-tabs,nav[tuiNavigationNav] [tuiTabs]{box-shadow:none;margin-inline-end:1rem}nav[tuiNavigationNav] tui-tabs:before,nav[tuiNavigationNav] [tuiTabs]:before{background:var(--tui-background-accent-opposite-pressed)}\n"]
    }]
  }], null, null);
})();
var TuiNavigation = [TuiHeaderComponent, TuiLogoComponent, TuiMainComponent, TuiAsideComponent, TuiAsideGroupComponent, TuiAsideItemDirective, TuiNavComponent, TuiHintAsideDirective, TuiDrawerDirective];

// node_modules/@taiga-ui/layout/fesm2022/taiga-ui-layout-components-search.mjs
var _c04 = ["tuiSearch", ""];
var _c14 = ["*"];
var _c23 = ["tuiSearchFilter", ""];
function TuiSearchFilterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c33 = ["rem"];
function TuiSearchFiltersComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const template_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiSearchFiltersComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiSearchFiltersComponent_ng_container_0_ng_container_1_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r2 < ctx_r2.overflown());
  }
}
function TuiSearchFiltersComponent_button_3_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const template_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", template_r5);
  }
}
function TuiSearchFiltersComponent_button_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiSearchFiltersComponent_button_3_ng_container_4_ng_container_1_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r6 >= ctx_r2.overflown());
  }
}
function TuiSearchFiltersComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6)(1, "form", 7);
    ɵɵlistener("reset", function TuiSearchFiltersComponent_button_3_Template_form_reset_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onReset());
    });
    ɵɵelementStart(2, "fieldset", 8);
    ɵɵprojection(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiSearchFiltersComponent_button_3_ng_container_4_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("_active", ctx_r2.enabled());
    ɵɵproperty("size", ctx_r2.size);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r2.enabled());
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.templates);
  }
}
var TuiSearchComponent = class _TuiSearchComponent {
  static {
    this.ɵfac = function TuiSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchComponent,
      selectors: [["search", "tuiSearch", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "m"
      }), tuiBlockOptionsProvider({
        size: "s"
      }), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiTextfieldOptionsProvider({
        size: signal("m")
      })]), ɵɵStandaloneFeature],
      attrs: _c04,
      ngContentSelectors: _c14,
      decls: 1,
      vars: 0,
      template: function TuiSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["search[tuiSearch] form{display:flex;flex-direction:column;gap:.75rem}search[tuiSearch] form fieldset{display:flex;align-items:center;flex-wrap:wrap;gap:inherit;min-inline-size:0;padding:0;margin:0;border:0;color:var(--tui-text-secondary)}search[tuiSearch] form tui-items-with-more{min-inline-size:0;flex:1}search[tuiSearch] form tui-textfield{flex:1;min-inline-size:11.25rem;max-inline-size:22.5rem}search[tuiSearch] form tui-textfield:first-child{max-inline-size:unset}search[tuiSearch] form hr{inline-size:1px;block-size:1rem;background:var(--tui-border-normal)}search[tuiSearch] form tui-filter{white-space:nowrap}search[tuiSearch] form [tuiLabel]{font:inherit}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "search[tuiSearch]",
      template: "<ng-content/>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "m"
      }), tuiBlockOptionsProvider({
        size: "s"
      }), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiTextfieldOptionsProvider({
        size: signal("m")
      })],
      styles: ["search[tuiSearch] form{display:flex;flex-direction:column;gap:.75rem}search[tuiSearch] form fieldset{display:flex;align-items:center;flex-wrap:wrap;gap:inherit;min-inline-size:0;padding:0;margin:0;border:0;color:var(--tui-text-secondary)}search[tuiSearch] form tui-items-with-more{min-inline-size:0;flex:1}search[tuiSearch] form tui-textfield{flex:1;min-inline-size:11.25rem;max-inline-size:22.5rem}search[tuiSearch] form tui-textfield:first-child{max-inline-size:unset}search[tuiSearch] form hr{inline-size:1px;block-size:1rem;background:var(--tui-border-normal)}search[tuiSearch] form tui-filter{white-space:nowrap}search[tuiSearch] form [tuiLabel]{font:inherit}\n"]
    }]
  }], null, null);
})();
var TuiSearchFilterComponent = class _TuiSearchFilterComponent {
  constructor() {
    this.dropdown = tuiDropdown(null);
  }
  set template(template) {
    this.dropdown.set(template);
  }
  static {
    this.ɵfac = function TuiSearchFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchFilterComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchFilterComponent,
      selectors: [["button", "tuiSearchFilter", ""]],
      viewQuery: function TuiSearchFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiDropdownOptionsProvider({
        align: "right"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS2).filter
      }]), ɵɵHostDirectivesFeature([TuiDropdownDirective, TuiWithDropdownOpen]), ɵɵStandaloneFeature],
      attrs: _c23,
      ngContentSelectors: _c14,
      decls: 1,
      vars: 0,
      template: function TuiSearchFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSearchFilterComponent_ng_template_0_Template, 1, 0, "ng-template");
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchFilterComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiSearchFilter]",
      template: "<ng-template><ng-content /></ng-template>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiDropdownOptionsProvider({
        align: "right"
      }), {
        provide: TUI_ICON_START,
        useFactory: () => inject(TUI_COMMON_ICONS2).filter
      }],
      hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen]
    }]
  }], null, {
    template: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var WIDTH = 12;
var TuiSearchFiltersComponent = class _TuiSearchFiltersComponent {
  constructor() {
    this.children = EMPTY_QUERY;
    this.controls = signal([]);
    this.templates = EMPTY_QUERY;
    this.overflown = toSignal(inject(ResizeObserverService, {
      self: true
    }).pipe(map((entry) => {
      const width = entry[0]?.contentRect.width ?? 0;
      return Math.floor((width - this.more) / WIDTH / this.unit);
    }), distinctUntilChanged(), tuiZonefull()), {
      initialValue: 0
    });
    this.enabled = computed(() => this.controls().some(({
      control
    }, index) => control && index >= this.overflown() && !tuiIsControlEmpty(control)));
    this.size = "m";
  }
  // TODO: Refactor to signal queries when Angular is updated
  ngAfterContentInit() {
    tuiQueryListChanges(this.children).pipe(switchMap((all) => merge(...all.map((c) => tuiControlValue(c)))), map(() => this.children.toArray())).subscribe((controls) => this.controls.set(controls));
  }
  onReset() {
    this.children.forEach(({
      control
    }, index) => {
      if (control && index >= this.overflown()) {
        control.setValue(null);
      }
    });
  }
  get unit() {
    return this.rem?.nativeElement.offsetWidth || 16;
  }
  get more() {
    return this.button?.nativeElement.clientWidth || 0;
  }
  static {
    this.ɵfac = function TuiSearchFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSearchFiltersComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSearchFiltersComponent,
      selectors: [["tui-search-filters"]],
      contentQueries: function TuiSearchFiltersComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TuiSearchFiltersComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c33, 5);
          ɵɵviewQuery(TuiButton, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rem = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, tuiButtonOptionsProvider({
        size: "xs",
        appearance: "flat"
      })]), ɵɵHostDirectivesFeature([{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldSize", "size"]
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c14,
      decls: 4,
      vars: 2,
      consts: [["rem", ""], [4, "ngFor", "ngForOf"], [1, "t-rem"], ["appearance", "secondary", "tuiIconButton", "", "tuiSearchFilter", "", "type", "button", "class", "t-button", 3, "_active", "size", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], ["appearance", "secondary", "tuiIconButton", "", "tuiSearchFilter", "", "type", "button", 1, "t-button", 3, "size"], [1, "t-form", 3, "reset"], [1, "t-header", 3, "disabled"]],
      template: function TuiSearchFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSearchFiltersComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵelement(1, "div", 2, 0);
          ɵɵtemplate(3, TuiSearchFiltersComponent_button_3_Template, 5, 5, "button", 3);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.templates);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.overflown() < ctx.templates.length);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
      styles: ['[_nghost-%COMP%]{display:flex;flex:1;gap:inherit;justify-content:flex-end;min-inline-size:0}.t-rem[_ngcontent-%COMP%]{position:absolute;inline-size:1rem}.t-button[_ngcontent-%COMP%]{overflow:visible}.t-button._active[_ngcontent-%COMP%]:after{content:"";position:absolute;top:.25rem;right:.25rem;display:block;inline-size:.625rem;block-size:.625rem;background:var(--tui-status-warning);transform:translate(50%,-50%);border-radius:100%;margin:0}.t-form[_ngcontent-%COMP%]{display:flex;min-inline-size:25.5rem;max-inline-size:33rem;flex-direction:column;gap:.75rem;padding:0 1.5rem 1.5rem;box-sizing:border-box}.t-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1.25rem 0;margin:0 0 .5rem;border:none;box-shadow:inset 0 -1px var(--tui-border-normal);font:var(--tui-font-text-ui-l);font-weight:700}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSearchFiltersComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-search-filters",
      imports: [NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, tuiButtonOptionsProvider({
        size: "xs",
        appearance: "flat"
      })],
      hostDirectives: [{
        directive: TuiTextfieldOptionsDirective,
        inputs: ["tuiTextfieldSize: size"]
      }],
      template: '<ng-container *ngFor="let template of templates; let i = index">\n    <ng-container\n        *ngIf="i < overflown()"\n        [ngTemplateOutlet]="template"\n    />\n</ng-container>\n<div\n    #rem\n    class="t-rem"\n></div>\n<button\n    *ngIf="overflown() < templates.length"\n    appearance="secondary"\n    tuiIconButton\n    tuiSearchFilter\n    type="button"\n    class="t-button"\n    [class._active]="enabled()"\n    [size]="size"\n>\n    <form\n        class="t-form"\n        (reset)="onReset()"\n    >\n        <fieldset\n            class="t-header"\n            [disabled]="!enabled()"\n        >\n            <ng-content />\n        </fieldset>\n        <ng-container *ngFor="let template of templates; let i = index">\n            <ng-container\n                *ngIf="i >= overflown()"\n                [ngTemplateOutlet]="template"\n            />\n        </ng-container>\n    </form>\n</button>\n',
      styles: [':host{display:flex;flex:1;gap:inherit;justify-content:flex-end;min-inline-size:0}.t-rem{position:absolute;inline-size:1rem}.t-button{overflow:visible}.t-button._active:after{content:"";position:absolute;top:.25rem;right:.25rem;display:block;inline-size:.625rem;block-size:.625rem;background:var(--tui-status-warning);transform:translate(50%,-50%);border-radius:100%;margin:0}.t-form{display:flex;min-inline-size:25.5rem;max-inline-size:33rem;flex-direction:column;gap:.75rem;padding:0 1.5rem 1.5rem;box-sizing:border-box}.t-header{display:flex;justify-content:space-between;padding:1.25rem 0;margin:0 0 .5rem;border:none;box-shadow:inset 0 -1px var(--tui-border-normal);font:var(--tui-font-text-ui-l);font-weight:700}\n']
    }]
  }], null, {
    rem: [{
      type: ViewChild,
      args: ["rem"]
    }],
    button: [{
      type: ViewChild,
      args: [TuiButton, {
        read: ElementRef
      }]
    }],
    children: [{
      type: ContentChildren,
      args: [NgControl, {
        descendants: true
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [TuiItem, {
        descendants: true,
        read: TemplateRef
      }]
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiSearch = [TuiSearchComponent, TuiSearchFiltersComponent, TuiItem];
export {
  TUI_APP_BAR_PROVIDERS,
  TUI_COMMON_ICONS2 as TUI_COMMON_ICONS,
  TUI_LAYOUT_ICONS,
  TuiAppBar,
  TuiAppBarBack,
  TuiAppBarComponent,
  TuiAppBarDirective,
  TuiAppBarSizeDirective,
  TuiAsideComponent,
  TuiAsideGroupComponent,
  TuiAsideItemDirective,
  TuiBlockDetails,
  TuiBlockStatus,
  TuiBlockStatusComponent,
  TuiBlockStatusDirective,
  TuiCardLarge,
  TuiCardMedium,
  TuiCell,
  TuiDrawerDirective,
  TuiHeader,
  TuiHeaderComponent,
  TuiHintAsideDirective,
  TuiLogoComponent,
  TuiMainComponent,
  TuiNavComponent,
  TuiNavigation,
  TuiSearch,
  TuiSearchComponent,
  TuiSearchFiltersComponent,
  tuiCommonIconsProvider,
  tuiLayoutIconsProvider
};
//# sourceMappingURL=@taiga-ui_layout.js.map
