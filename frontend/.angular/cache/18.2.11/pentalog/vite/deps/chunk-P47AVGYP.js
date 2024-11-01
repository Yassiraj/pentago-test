import {
  DAYS_IN_WEEK,
  MAX_YEAR,
  MIN_YEAR,
  PolymorpheusTemplate,
  TUI_ASSETS_PATH,
  TUI_DAY_TYPE_HANDLER,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_FIRST_DAY_OF_WEEK,
  TUI_LAST_DAY,
  TUI_LAST_DISPLAYED_DAY,
  TUI_MONTHS,
  TUI_NUMBER_FORMAT,
  TUI_SHORT_WEEK_DAYS,
  TUI_SPIN_ICONS,
  TUI_SPIN_TEXTS,
  TuiButton,
  TuiDay,
  TuiDayRange,
  TuiFormatDateService,
  TuiHovered,
  TuiMonth,
  TuiMonthRange,
  TuiPopoverService,
  TuiScrollIntoView,
  TuiScrollbar,
  TuiWithAppearance,
  TuiWithIcons,
  TuiYear,
  tuiAppearanceOptionsProvider,
  tuiClamp,
  tuiCreateToken,
  tuiFormatNumber,
  tuiIfMap,
  tuiInRange,
  tuiInjectElement,
  tuiIsNumber,
  tuiNullableSame,
  tuiProvideOptions,
  tuiPure,
  tuiStringHashToHsl,
  tuiWithStyles
} from "./chunk-TJD5ECJX.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  Output,
  Pipe,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation$1,
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
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefinePipe,
  ɵɵelement,
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
  ɵɵpipeBind4,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4P5RU55L.js";
import {
  Subject,
  __decorate,
  __spreadProps,
  __spreadValues,
  distinctUntilChanged,
  endWith,
  fromEvent,
  ignoreElements,
  map,
  share,
  startWith
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-directives-group.mjs
var TUI_GROUP_DEFAULT_OPTIONS = {
  size: "l",
  collapsed: false,
  rounded: true,
  orientation: "horizontal"
};
var TUI_GROUP_OPTIONS = tuiCreateToken(TUI_GROUP_DEFAULT_OPTIONS);
function tuiGroupOptionsProvider(options) {
  return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}
var TuiGroupStyles = class _TuiGroupStyles {
  static {
    this.ɵfac = function TuiGroupStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroupStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiGroupStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-group"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiGroupStyles_Template(rf, ctx) {
      },
      styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroupStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-group"
      },
      styles: ["[tuiGroup]{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-l);--t-group-margin: -1px;--t-group-clip: inset(-1rem 1px -1rem -1rem)}[tuiGroup]>*{z-index:1;flex:1 1 0;min-inline-size:0}[tuiGroup]>*:disabled,[tuiGroup]>*._disabled{z-index:0}[tuiGroup]>*:invalid:not([data-mode]),[tuiGroup]>*[data-mode~=invalid]{z-index:2;--t-group-clip: none}[tuiGroup]>*:has(:invalid:not([data-mode])),[tuiGroup]>*:has([data-mode~=invalid]){z-index:2;--t-group-clip: none}[tuiGroup]>*:focus-within{z-index:3;--t-group-clip: none}[tuiGroup]>*:has([data-focus=true]){z-index:3;--t-group-clip: none}[tuiGroup]>*:checked:not([data-mode]),[tuiGroup]>*[data-mode~=checked]{z-index:4;--t-group-clip: none}[tuiGroup]>*:has([tuiBlock]:checked){z-index:4;--t-group-clip: none}[tuiGroup]>*:not(:last-child){margin-inline-end:var(--t-group-margin);clip-path:var(--t-group-clip)}[tuiGroup]>*:nth-child(n){border-radius:0}[tuiGroup]>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}[tuiGroup]>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}[tuiGroup][data-size=s],[tuiGroup][data-size=m]{--t-group-radius: var(--tui-radius-m)}[tuiGroup][data-orientation=vertical]{display:inline-flex;flex-direction:column;--t-group-clip: inset(-1rem -1rem 1px -1rem)}[tuiGroup][data-orientation=vertical]>*{min-block-size:auto;flex:0 0 auto}[tuiGroup][data-orientation=vertical]>*:not(:last-child){margin-inline-end:0;margin-block-end:var(--t-group-margin)}[tuiGroup][data-orientation=vertical]>*:first-child{border-radius:var(--t-group-radius) var(--t-group-radius) 0 0}[tuiGroup][data-orientation=vertical]>*:last-child{border-radius:0 0 var(--t-group-radius) var(--t-group-radius)}[tuiGroup][data-orientation=vertical]>*:only-child{border-radius:var(--t-group-radius)}.tui-group{position:relative;display:flex;isolation:isolate;--t-group-radius: var(--tui-radius-m)}.tui-group>*{flex:1 1 0;min-inline-size:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_radius_large{--t-group-radius: var(--tui-radius-l)}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin:0 -1px 0 0}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*:has([tuiBlock]:checked){z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-block-size:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin:0 0 -1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--t-group-radius);border-bottom-left-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--t-group-radius);border-top-right-radius:var(--t-group-radius)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--t-group-radius);border-bottom-right-radius:var(--t-group-radius)}.tui-group__auto-width-item{min-inline-size:auto;flex:0 0 auto}.tui-group__inherit-item{border-radius:inherit!important}\n"]
    }]
  }], null, null);
})();
var TuiGroup = class _TuiGroup {
  constructor() {
    this.options = inject(TUI_GROUP_OPTIONS);
    this.nothing = tuiWithStyles(TuiGroupStyles);
    this.orientation = this.options.orientation;
    this.collapsed = this.options.collapsed;
    this.rounded = this.options.rounded;
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiGroup)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiGroup,
      selectors: [["", "tuiGroup", "", 5, "ng-container"]],
      hostAttrs: ["tuiGroup", "", "role", "group"],
      hostVars: 8,
      hostBindings: function TuiGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation)("data-size", ctx.size);
          ɵɵstyleProp("--t-group-radius", ctx.rounded ? null : 0)("--t-group-margin", ctx.collapsed ? null : 0.125, "rem")("--t-group-clip", ctx.collapsed ? null : 0);
        }
      },
      inputs: {
        orientation: "orientation",
        collapsed: "collapsed",
        rounded: "rounded",
        size: "size"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiGroup, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiGroup]:not(ng-container)",
      host: {
        tuiGroup: "",
        role: "group",
        "[attr.data-orientation]": "orientation",
        "[attr.data-size]": "size",
        "[style.--t-group-radius]": "rounded ? null : 0",
        "[style.--t-group-margin.rem]": "collapsed ? null : 0.125",
        "[style.--t-group-clip]": "collapsed ? null : 0"
      }
    }]
  }], null, {
    orientation: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var TUI_LINK_DEFAULT_OPTIONS = {
  appearance: "action",
  pseudo: false
};
var TUI_LINK_OPTIONS = tuiCreateToken(TUI_LINK_DEFAULT_OPTIONS);
function tuiLinkOptionsProvider(options) {
  return tuiProvideOptions(TUI_LINK_OPTIONS, options, TUI_LINK_DEFAULT_OPTIONS);
}
var TuiLinkStyles = class _TuiLinkStyles {
  static {
    this.ɵfac = function TuiLinkStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLinkStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLinkStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-link"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiLinkStyles_Template(rf, ctx) {
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLinkStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-link"
      },
      styles: ['[tuiLink]{--tui-text-tertiary: var(--tui-text-secondary);padding:0;background:transparent;border:none;cursor:pointer;font:inherit;color:inherit;-webkit-text-decoration:none dashed currentColor;text-decoration:none dashed currentColor;text-underline-offset:.2em;text-decoration-thickness:.7px;text-decoration-color:color-mix(in lch,currentColor,transparent)}[tuiLink]:hover{--tui-text-secondary: var(--tui-text-primary)}[tuiLink]:before{margin-inline-end:.25rem}[tuiLink]:after{margin-inline-start:.25rem}[tuiLink][tuiIcons]:before,[tuiLink][tuiIcons]:after{content:"\\2060";padding:calc(var(--tui-icon-size, 1rem) / 2);vertical-align:super;font-size:0;line-height:0;box-sizing:border-box}[tuiLink]:focus-visible:not([data-focus=false]){outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][data-focus=true]{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}[tuiLink][tuiWrapper]:not(._focused):has(:focus-visible),[tuiLink][tuiWrapper]._focused{outline:none;background:var(--tui-service-selection-background);background:color-mix(in lch,currentColor 12%,transparent)}\n']
    }]
  }], null, null);
})();
var TuiLink = class _TuiLink {
  constructor() {
    this.nothing = tuiWithStyles(TuiLinkStyles);
    this.pseudo = inject(TUI_LINK_OPTIONS).pseudo;
  }
  static {
    this.ɵfac = function TuiLink_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLink)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLink,
      selectors: [["a", "tuiLink", ""], ["button", "tuiLink", ""]],
      hostAttrs: ["tuiLink", ""],
      hostVars: 2,
      hostBindings: function TuiLink_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("text-decoration-line", ctx.pseudo ? "underline" : null);
        }
      },
      inputs: {
        pseudo: "pseudo"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLink, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "a[tuiLink], button[tuiLink]",
      providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
      hostDirectives: [TuiWithAppearance, TuiWithIcons],
      host: {
        tuiLink: "",
        "[style.text-decoration-line]": 'pseudo ? "underline" : null'
      }
    }]
  }], null, {
    pseudo: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-auto-color.mjs
var TuiAutoColorPipe = class _TuiAutoColorPipe {
  transform(text) {
    return tuiStringHashToHsl(text);
  }
  static {
    this.ɵfac = function TuiAutoColorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAutoColorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiAutoColor",
      type: _TuiAutoColorPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAutoColorPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiAutoColor"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-calendar-sheet.mjs
var getMonthStartDaysOffset = (month, firstDayOfWeek) => {
  const startMonthOffsetFromSunday = new Date(month.year, month.month, 1).getDay();
  return startMonthOffsetFromSunday >= firstDayOfWeek ? startMonthOffsetFromSunday - firstDayOfWeek : DAYS_IN_WEEK - (firstDayOfWeek - startMonthOffsetFromSunday);
};
var getDayFromMonthRowCol = ({
  month,
  rowIndex,
  colIndex,
  firstDayOfWeek
}) => {
  ngDevMode && console.assert(Number.isInteger(rowIndex));
  ngDevMode && console.assert(tuiInRange(rowIndex, 0, 6));
  ngDevMode && console.assert(Number.isInteger(colIndex));
  ngDevMode && console.assert(tuiInRange(colIndex, 0, DAYS_IN_WEEK));
  let day = rowIndex * DAYS_IN_WEEK + colIndex - getMonthStartDaysOffset(month, firstDayOfWeek) + 1;
  if (day > month.daysCount) {
    day -= month.daysCount;
    month = month.append({
      month: 1
    });
  }
  if (day <= 0) {
    month = month.append({
      month: -1
    });
    day = month.daysCount + day;
  }
  return new TuiDay(month.year, month.month, day);
};
var CALENDAR_ROWS_COUNT = 6;
var TuiCalendarSheetPipe = class _TuiCalendarSheetPipe {
  constructor() {
    this.firstDayOfWeek = inject(TUI_FIRST_DAY_OF_WEEK);
    this.currentMonth = null;
    this.currentSheet = [];
  }
  transform(month, showAdjacentDays = false) {
    if (this.currentMonth?.monthSame(month)) {
      return this.currentSheet;
    }
    const sheet = [];
    for (let rowIndex = 0; rowIndex < CALENDAR_ROWS_COUNT; rowIndex++) {
      const row = [];
      for (let colIndex = 0; colIndex < DAYS_IN_WEEK; colIndex++) {
        const day = getDayFromMonthRowCol({
          month,
          rowIndex,
          colIndex,
          firstDayOfWeek: this.firstDayOfWeek
        });
        const isPrevMonthDay = (day2, relativeToMonth = month) => day2.year < relativeToMonth.year || day2.month < relativeToMonth.month;
        const isNextMonthDay = (day2, relativeToMonth = month) => day2.year > relativeToMonth.year || day2.month > relativeToMonth.month;
        if (isPrevMonthDay(day) && !showAdjacentDays) {
          continue;
        }
        if (isNextMonthDay(day) && !showAdjacentDays) {
          break;
        }
        row.push(day);
      }
      sheet.push(row);
    }
    this.currentSheet = sheet.filter((row) => row.length);
    this.currentMonth = month;
    return this.currentSheet;
  }
  static {
    this.ɵfac = function TuiCalendarSheetPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheetPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiCalendarSheet",
      type: _TuiCalendarSheetPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheetPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiCalendarSheet"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-fallback-src.mjs
var TuiFallbackSrcPipe = class _TuiFallbackSrcPipe {
  constructor() {
    this.el = tuiInjectElement();
  }
  transform(src, fallback) {
    return fromEvent(this.el, "error", {
      capture: true
    }).pipe(map(() => fallback), startWith(src || fallback));
  }
  static {
    this.ɵfac = function TuiFallbackSrcPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFallbackSrcPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFallbackSrc",
      type: _TuiFallbackSrcPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFallbackSrcPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFallbackSrc"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-flag.mjs
var TuiFlagPipe = class _TuiFlagPipe {
  constructor() {
    this.staticPath = inject(TUI_ASSETS_PATH);
  }
  transform(countryIsoCode) {
    if (!countryIsoCode) {
      return null;
    }
    return `${this.staticPath}/flags/${countryIsoCode.toLowerCase()}.svg`;
  }
  static {
    this.ɵfac = function TuiFlagPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFlagPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFlag",
      type: _TuiFlagPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFlagPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFlag"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-date.mjs
var TuiFormatDatePipe = class _TuiFormatDatePipe {
  constructor() {
    this.service = inject(TuiFormatDateService);
  }
  transform(timestampOrDate) {
    return this.service.format(timestampOrDate.valueOf());
  }
  static {
    this.ɵfac = function TuiFormatDatePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatDatePipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatDate",
      type: _TuiFormatDatePipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatDatePipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatDate"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-format-number.mjs
var TuiFormatNumberPipe = class _TuiFormatNumberPipe {
  constructor() {
    this.numberFormat = inject(TUI_NUMBER_FORMAT);
  }
  /**
   * Formats number adding thousand separators and correct decimal separator
   * padding decimal part with zeroes to given length
   * @param value number
   * @param settings See {@link TuiNumberFormatSettings}
   */
  transform(value, settings = {}) {
    return this.numberFormat.pipe(map((format) => tuiFormatNumber(value, __spreadValues(__spreadProps(__spreadValues({}, format), {
      precision: Number.isNaN(format.precision) ? Infinity : format.precision
    }), settings))));
  }
  static {
    this.ɵfac = function TuiFormatNumberPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFormatNumberPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFormatNumber",
      type: _TuiFormatNumberPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFormatNumberPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFormatNumber"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-initials.mjs
var TuiInitialsPipe = class _TuiInitialsPipe {
  transform(text) {
    return text.toUpperCase().split(" ").map(([char]) => char).join("").slice(0, 2);
  }
  static {
    this.ɵfac = function TuiInitialsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInitialsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiInitials",
      type: _TuiInitialsPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInitialsPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiInitials"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-month.mjs
var TuiMonthPipe = class _TuiMonthPipe {
  constructor() {
    this.months$ = inject(TUI_MONTHS);
  }
  transform({
    month
  }) {
    return this.months$.pipe(map((months) => months[month] || months[0]));
  }
  static {
    this.ɵfac = function TuiMonthPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMonthPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMonth",
      type: _TuiMonthPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMonthPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMonth"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-pipes-order-week-days.mjs
function convertToSundayFirstWeekFormat(weekDaysNames) {
  const sundayIndex = weekDaysNames.length - 1;
  return [weekDaysNames[sundayIndex] || "", ...weekDaysNames.slice(0, sundayIndex)];
}
var TuiOrderWeekDaysPipe = class _TuiOrderWeekDaysPipe {
  constructor() {
    this.firstDayOfWeekIndex = inject(TUI_FIRST_DAY_OF_WEEK);
  }
  transform(mondayFirstWeekDays$) {
    return mondayFirstWeekDays$.pipe(map(convertToSundayFirstWeekFormat), map((weekDays) => [...weekDays.slice(this.firstDayOfWeekIndex), ...weekDays.slice(0, this.firstDayOfWeekIndex)]));
  }
  static {
    this.ɵfac = function TuiOrderWeekDaysPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiOrderWeekDaysPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiOrderWeekDays",
      type: _TuiOrderWeekDaysPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiOrderWeekDaysPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiOrderWeekDays"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-spin-button.mjs
var _c0 = ["*"];
function TuiSpinButton_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onLeftClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 2);
    ɵɵprojection(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 3);
    ɵɵlistener("click", function TuiSpinButton_ng_container_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onRightClick());
    });
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("t-hidden", ctx_r1.leftComputedDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.decrement)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance(3);
    ɵɵclassProp("t-hidden", ctx_r1.rightComputedDisabled);
    ɵɵproperty("iconStart", ctx_r1.icons.increment)("tabIndex", ctx_r1.focusable ? 0 : -1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var TuiSpinButton = class _TuiSpinButton {
  constructor() {
    this.icons = inject(TUI_SPIN_ICONS);
    this.spinTexts$ = inject(TUI_SPIN_TEXTS);
    this.focusable = true;
    this.disabled = false;
    this.leftDisabled = false;
    this.rightDisabled = false;
    this.leftClick = new EventEmitter();
    this.rightClick = new EventEmitter();
  }
  onLeftClick() {
    if (!this.leftComputedDisabled) {
      this.leftClick.emit();
    }
  }
  onRightClick() {
    if (!this.rightComputedDisabled) {
      this.rightClick.emit();
    }
  }
  get leftComputedDisabled() {
    return this.disabled || this.leftDisabled;
  }
  get rightComputedDisabled() {
    return this.disabled || this.rightDisabled;
  }
  static {
    this.ɵfac = function TuiSpinButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSpinButton)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSpinButton,
      selectors: [["tui-spin-button"]],
      hostBindings: function TuiSpinButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown.silent.prevent", function TuiSpinButton_mousedown_silent_prevent_HostBindingHandler() {
            return 0;
          })("keydown.arrowLeft.prevent", function TuiSpinButton_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onLeftClick();
          })("keydown.arrowRight.prevent", function TuiSpinButton_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onRightClick();
          });
        }
      },
      inputs: {
        focusable: "focusable",
        disabled: "disabled",
        leftDisabled: "leftDisabled",
        rightDisabled: "rightDisabled"
      },
      outputs: {
        leftClick: "leftClick",
        rightClick: "rightClick"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["appearance", "flat", "automation-id", "tui-spin-button__left", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "iconStart", "tabIndex"], [1, "t-content", "t-calendar-title"], ["appearance", "flat", "automation-id", "tui-spin-button__right", "size", "xs", "tuiIconButton", "", "type", "button", 3, "click", "iconStart", "tabIndex"]],
      template: function TuiSpinButton_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiSpinButton_ng_container_0_Template, 7, 10, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.spinTexts$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden[_ngcontent-%COMP%]{visibility:hidden}.t-content[_ngcontent-%COMP%]{padding:0 .5rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSpinButton, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-spin-button",
      imports: [AsyncPipe, NgIf, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(mousedown.silent.prevent)": "(0)",
        "(keydown.arrowLeft.prevent)": "onLeftClick()",
        "(keydown.arrowRight.prevent)": "onRightClick()"
      },
      template: '<ng-container *ngIf="spinTexts$ | async as texts">\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__left"\n        size="xs"\n        tuiIconButton\n        type="button"\n        [class.t-hidden]="leftComputedDisabled"\n        [iconStart]="icons.decrement"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onLeftClick()"\n    >\n        {{ texts[0] }}\n    </button>\n    <span class="t-content t-calendar-title">\n        <ng-content />\n    </span>\n    <button\n        appearance="flat"\n        automation-id="tui-spin-button__right"\n        size="xs"\n        tuiIconButton\n        type="button"\n        [class.t-hidden]="rightComputedDisabled"\n        [iconStart]="icons.increment"\n        [tabIndex]="focusable ? 0 : -1"\n        (click)="onRightClick()"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n',
      styles: [":host{display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-text-l);text-align:center;font-weight:700}.t-hidden{visibility:hidden}.t-content{padding:0 .5rem}\n"]
    }]
  }], null, {
    focusable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    leftDisabled: [{
      type: Input
    }],
    rightDisabled: [{
      type: Input
    }],
    leftClick: [{
      type: Output
    }],
    rightClick: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-pipes-mapper.mjs
var TuiMapperPipe = class _TuiMapperPipe {
  /**
   * Maps object to an arbitrary result through a mapper function
   *
   * @param value an item to transform
   * @param mapper a mapping function
   * @param args arbitrary number of additional arguments
   */
  transform(value, mapper, ...args) {
    return mapper(value, ...args);
  }
  static {
    this.ɵfac = function TuiMapperPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMapperPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiMapper",
      type: _TuiMapperPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMapperPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiMapper"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-let.mjs
var TuiLetContext = class {
  constructor(internalDirectiveInstance) {
    this.internalDirectiveInstance = internalDirectiveInstance;
  }
  get $implicit() {
    return this.internalDirectiveInstance.tuiLet;
  }
  get tuiLet() {
    return this.internalDirectiveInstance.tuiLet;
  }
};
var TuiLet = class _TuiLet {
  constructor() {
    inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef), new TuiLetContext(this));
  }
  /**
   * Asserts the correct type of the context for the template that `TuiLet` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `TuiLet` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiLet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLet)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLet,
      selectors: [["", "tuiLet", ""]],
      inputs: {
        tuiLet: "tuiLet"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLet, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLet]"
    }]
  }], function() {
    return [];
  }, {
    tuiLet: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-repeat-times.mjs
var MAX_VALUE = 65536;
var TuiRepeatTimesContext = class {
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TuiRepeatTimes = class _TuiRepeatTimes {
  constructor() {
    this.viewContainer = inject(ViewContainerRef);
    this.templateRef = inject(TemplateRef);
  }
  set tuiRepeatTimesOf(count) {
    const safeCount = Math.floor(tuiClamp(count, 0, MAX_VALUE));
    const {
      length
    } = this.viewContainer;
    if (count < length) {
      this.removeContainers(length - count);
    } else {
      this.addContainers(safeCount);
    }
  }
  addContainers(count) {
    for (let index = this.viewContainer.length; index < count; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, new TuiRepeatTimesContext(index));
    }
  }
  removeContainers(amount) {
    for (let index = 0; index < amount; index++) {
      this.viewContainer.remove();
    }
  }
  static {
    this.ɵfac = function TuiRepeatTimes_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRepeatTimes)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRepeatTimes,
      selectors: [["", "tuiRepeatTimes", "", "tuiRepeatTimesOf", ""]],
      inputs: {
        tuiRepeatTimesOf: "tuiRepeatTimesOf"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRepeatTimes, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiRepeatTimes][tuiRepeatTimesOf]"
    }]
  }], null, {
    tuiRepeatTimesOf: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-calendar.mjs
var _c02 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function TuiCalendarSheet_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    ɵɵproperty("textContent", day_r1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const markers_r5 = ɵɵnextContext().ngIf;
    ɵɵstyleProp("background", (markers_r5 == null ? null : markers_r5[1]) || "");
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "div", 11);
    ɵɵtemplate(2, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_div_2_Template, 1, 2, "div", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const markers_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵstyleProp("background", markers_r5 == null ? null : markers_r5[0]);
    ɵɵadvance();
    ɵɵproperty("ngIf", markers_r5.length > 1);
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵpipe(1, "tuiMapper");
    ɵɵlistener("click", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemClick(item_r3));
    })("tuiHoveredChange", function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const item_r3 = ɵɵnextContext().tuiLet;
      const ctx_r3 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r3.onItemHovered($event && item_r3));
    });
    ɵɵtext(2);
    ɵɵtemplate(3, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_div_3_Template, 3, 3, "div", 9);
    ɵɵpipe(4, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵclassProp("t-cell_disabled", ctx_r3.disabledItemHandler(item_r3))("t-cell_today", ctx_r3.itemIsToday(item_r3))("t-cell_unavailable", ctx_r3.itemIsUnavailable(item_r3));
    ɵɵattribute("data-range", ctx_r3.getItemRange(item_r3))("data-type", ɵɵpipeBind2(1, 10, item_r3, ctx_r3.dayTypeHandler));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", item_r3.day, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBindV(4, 13, ɵɵpureFunction5(19, _c02, item_r3, ctx_r3.toMarkers, ctx_r3.itemIsToday(item_r3), ctx_r3.getItemRange(item_r3), ctx_r3.markerHandler)));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_div_1_Template, 5, 25, "div", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.tuiLet;
    const ctx_r3 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3 && (!ctx_r3.itemIsUnavailable(item_r3) || ctx_r3.showAdjacent));
  }
}
function TuiCalendarSheet_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r6 = ctx.$implicit;
    const rowIndex_r7 = ɵɵnextContext().$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiLet", sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7][colIndex_r6]);
  }
}
function TuiCalendarSheet_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowIndex_r7 = ctx.$implicit;
    const sheet_r8 = ɵɵnextContext().tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", (sheet_r8[rowIndex_r7] == null ? null : sheet_r8[rowIndex_r7].length) || 0);
  }
}
function TuiCalendarSheet_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TuiCalendarSheet_div_4_div_1_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sheet_r8 = ctx.tuiLet;
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", sheet_r8.length);
  }
}
function TuiCalendarSpin_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.value.formattedYear, " ");
  }
}
function TuiCalendarSpin_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TuiCalendarSpin_ng_template_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onYearClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.value.formattedYear, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.yearClick.emit(item_r2));
    })("tuiHoveredChange", function TuiCalendarYear_div_0_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r2 = ɵɵrestoreView(_r1).tuiLet;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onItemHovered($event, item_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassProp("t-cell_disabled", ctx_r2.isDisabled(item_r2))("t-cell_today", ctx_r2.itemIsToday(item_r2));
    ɵɵproperty("tuiScrollIntoView", ctx_r2.scrollItemIntoView(item_r2));
    ɵɵattribute("data-range", ctx_r2.getItemRange(item_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r2, " ");
  }
}
function TuiCalendarYear_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_div_1_Template, 2, 7, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const colIndex_r4 = ctx.$implicit;
    const rowIndex_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r2.getItem(rowIndex_r5, colIndex_r4));
  }
}
function TuiCalendarYear_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TuiCalendarYear_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendar_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendar_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.month.year)("max", ctx_r1.computedMax.year)("min", ctx_r1.computedMin.year)("value", ctx_r1.value);
  }
}
function TuiCalendar_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar-spin", 4);
    ɵɵlistener("valueChange", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationValueChange($event));
    })("yearClick", function TuiCalendar_ng_template_1_Template_tui_calendar_spin_yearClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPaginationYearClick());
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "tui-calendar-sheet", 5);
    ɵɵpipe(2, "tuiMapper");
    ɵɵlistener("dayClick", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_dayClick_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDayClick($event));
    })("hoveredItemChange", function TuiCalendar_ng_template_1_Template_tui_calendar_sheet_hoveredItemChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onHoveredItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.computedMaxViewedMonth)("min", ctx_r1.computedMinViewedMonth)("value", ctx_r1.month);
    ɵɵadvance();
    ɵɵproperty("disabledItemHandler", ɵɵpipeBind4(2, 9, ctx_r1.disabledItemHandler, ctx_r1.disabledItemHandlerMapper, ctx_r1.computedMin, ctx_r1.computedMax))("hoveredItem", ctx_r1.hoveredItem)("markerHandler", ctx_r1.markerHandler)("month", ctx_r1.month)("showAdjacent", ctx_r1.showAdjacent)("value", ctx_r1.value);
  }
}
var TuiCalendarSheet = class _TuiCalendarSheet {
  constructor() {
    this.today = TuiDay.currentLocal();
    this.unorderedWeekDays$ = inject(TUI_SHORT_WEEK_DAYS);
    this.dayTypeHandler = inject(TUI_DAY_TYPE_HANDLER);
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.value = null;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.hoveredItemChange = new EventEmitter();
    this.dayClick = new EventEmitter();
    this.toMarkers = (day, today, range, markerHandler) => {
      if (today || ["active", "end", "start"].includes(range || "")) {
        return null;
      }
      const markers = markerHandler?.(day);
      return markers?.length ? markers : null;
    };
  }
  itemIsInterval(day) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiDayRange)) {
      return false;
    }
    if (!value.isSingleDay) {
      return value.from.daySameOrBefore(day) && value.to.dayAfter(day);
    }
    if (hoveredItem === null) {
      return false;
    }
    const range = TuiDayRange.sort(value.from, hoveredItem);
    return range.from.daySameOrBefore(day) && range.to.dayAfter(day);
  }
  onItemHovered(item) {
    this.updateHoveredItem(item || null);
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (value instanceof TuiDay) {
      return value.daySame(item) ? "active" : null;
    }
    if (!value || !(value instanceof TuiDayRange)) {
      return value?.find((day) => day.daySame(item)) ? "active" : null;
    }
    const range = this.getRange(value, hoveredItem);
    if (value.isSingleDay && range.isSingleDay && value.from.daySame(item)) {
      return "active";
    }
    if (range.from.daySame(item)) {
      return "start";
    }
    if (range.to.daySame(item)) {
      return "end";
    }
    return range.from.dayBefore(item) && range.to.dayAfter(item) ? "middle" : null;
  }
  get isSingleDayRange() {
    return this.value instanceof TuiDayRange && this.value.isSingleDay;
  }
  itemIsToday(item) {
    return this.today.daySame(item);
  }
  itemIsUnavailable(item) {
    return !this.month.monthSame(item);
  }
  onItemClick(item) {
    this.dayClick.emit(item);
  }
  getRange(value, hoveredItem) {
    return value.isSingleDay ? TuiDayRange.sort(value.from, hoveredItem ?? value.to) : value;
  }
  updateHoveredItem(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendarSheet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSheet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSheet,
      selectors: [["tui-calendar-sheet"]],
      hostVars: 2,
      hostBindings: function TuiCalendarSheet_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isSingleDayRange);
        }
      },
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        value: "value",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent"
      },
      outputs: {
        hoveredItemChange: "hoveredItemChange",
        dayClick: "dayClick"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 6,
      vars: 9,
      consts: [[1, "t-row", "t-row_weekday"], ["class", "t-cell", 3, "textContent", 4, "ngFor", "ngForOf"], [4, "tuiLet"], [1, "t-cell", 3, "textContent"], ["automation-id", "tui-calendar-sheet__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-sheet__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "t-cell_unavailable", "click", "tuiHoveredChange", 4, "ngIf"], ["automation-id", "tui-calendar-sheet__cell", 1, "t-cell", 3, "click", "tuiHoveredChange"], ["class", "t-dots", 4, "ngIf"], [1, "t-dots"], [1, "t-dot"], ["class", "t-dot", 3, "background", 4, "ngIf"]],
      template: function TuiCalendarSheet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiCalendarSheet_div_1_Template, 1, 1, "div", 1);
          ɵɵpipe(2, "tuiOrderWeekDays");
          ɵɵpipe(3, "async");
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarSheet_div_4_Template, 2, 1, "div", 2);
          ɵɵpipe(5, "tuiCalendarSheet");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngForOf", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, ctx.unorderedWeekDays$)));
          ɵɵadvance(3);
          ɵɵproperty("tuiLet", ɵɵpipeBind2(5, 6, ctx.month, true));
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, AsyncPipe, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell[_ngcontent-%COMP%]{inline-size:2.25rem}[data-type=weekday][_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-type=weekend][_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-row[_ngcontent-%COMP%]{justify-content:flex-start}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row_weekday[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}.t-dots[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarSheet.prototype, "getRange", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSheet, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-sheet",
      imports: [CommonModule, TuiCalendarSheetPipe, TuiHovered, TuiLet, TuiMapperPipe, TuiOrderWeekDaysPipe, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isSingleDayRange"
      },
      template: `<div class="t-row t-row_weekday">
    <div
        *ngFor="let day of unorderedWeekDays$ | tuiOrderWeekDays | async"
        class="t-cell"
        [textContent]="day"
    ></div>
</div>
<div *tuiLet="month | tuiCalendarSheet: true as sheet">
    <div
        *tuiRepeatTimes="let rowIndex of sheet.length"
        automation-id="tui-calendar-sheet__row"
        class="t-row"
    >
        <ng-container *tuiRepeatTimes="let colIndex of sheet[rowIndex]?.length || 0">
            <ng-container *tuiLet="sheet[rowIndex]?.[colIndex] as item">
                <div
                    *ngIf="item && (!itemIsUnavailable(item) || showAdjacent)"
                    automation-id="tui-calendar-sheet__cell"
                    class="t-cell"
                    [attr.data-range]="getItemRange(item)"
                    [attr.data-type]="item | tuiMapper: dayTypeHandler"
                    [class.t-cell_disabled]="disabledItemHandler(item)"
                    [class.t-cell_today]="itemIsToday(item)"
                    [class.t-cell_unavailable]="itemIsUnavailable(item)"
                    (click)="onItemClick(item)"
                    (tuiHoveredChange)="onItemHovered($event && item)"
                >
                    {{ item.day }}
                    <div
                        *ngIf="
                            item
                                | tuiMapper
                                    : toMarkers
                                    : itemIsToday(item)
                                    : getItemRange(item)
                                    : markerHandler as markers
                        "
                        class="t-dots"
                    >
                        <div
                            class="t-dot"
                            [style.background]="markers?.[0]"
                        ></div>
                        <div
                            *ngIf="markers.length > 1"
                            class="t-dot"
                            [style.background]="markers?.[1] || ''"
                        ></div>
                    </div>
                </div>
            </ng-container>
        </ng-container>
    </div>
</div>
`,
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}.t-cell{inline-size:2.25rem}[data-type=weekday]{color:var(--tui-text-primary)}[data-type=weekend]{color:var(--tui-text-negative)}.t-row{justify-content:flex-start}.t-row:first-child{justify-content:flex-end}.t-row_weekday{font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none}.t-cell_unavailable{opacity:var(--tui-disabled-opacity)}.t-dots{position:absolute;bottom:0;display:flex;justify-content:center;margin-top:-.5rem;padding-bottom:.25rem}.t-dot{display:inline-block;inline-size:.25rem;block-size:.25rem;border-radius:100%;margin:0 .0625rem}
`]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    hoveredItemChange: [{
      type: Output
    }],
    dayClick: [{
      type: Output
    }],
    getRange: []
  });
})();
var TuiCalendarSpin = class _TuiCalendarSpin {
  constructor() {
    this.value = TuiMonth.currentLocal();
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.valueChange = new EventEmitter();
    this.yearClick = new EventEmitter();
  }
  onYearClick() {
    this.yearClick.next(this.value);
  }
  append(date) {
    const value = this.value.append(date);
    if (this.min.monthSameOrAfter(value)) {
      this.updateValue(this.min);
    } else {
      this.updateValue(this.max.monthSameOrBefore(value) ? this.max : value);
    }
  }
  updateValue(value) {
    if (this.value.monthSame(value)) {
      return;
    }
    this.value = value;
    this.valueChange.emit(value);
  }
  static {
    this.ɵfac = function TuiCalendarSpin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarSpin)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarSpin,
      selectors: [["tui-calendar-spin"]],
      inputs: {
        value: "value",
        min: "min",
        max: "max"
      },
      outputs: {
        valueChange: "valueChange",
        yearClick: "yearClick"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 7,
      vars: 10,
      consts: [["button", ""], [3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], [4, "ngIf", "ngIfElse"], ["id", "year-btn", "automation-id", "tui-primitive-year-month-pagination__year-button", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"]],
      template: function TuiCalendarSpin_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-spin-button", 1);
          ɵɵlistener("leftClick", function TuiCalendarSpin_Template_tui_spin_button_leftClick_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.append({
              month: -1
            }));
          })("rightClick", function TuiCalendarSpin_Template_tui_spin_button_rightClick_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.append({
              month: 1
            }));
          });
          ɵɵtext(1);
          ɵɵpipe(2, "tuiMonth");
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, TuiCalendarSpin_ng_container_4_Template, 2, 1, "ng-container", 2)(5, TuiCalendarSpin_ng_template_5_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const button_r4 = ɵɵreference(6);
          ɵɵproperty("focusable", false)("leftDisabled", ctx.value.monthSameOrBefore(ctx.min))("rightDisabled", ctx.value.monthSameOrAfter(ctx.max));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, ɵɵpipeBind1(2, 6, ctx.value)), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.min.year === ctx.max.year)("ngIfElse", button_r4);
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      styles: ["[_nghost-%COMP%]{display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarSpin, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-spin",
      imports: [AsyncPipe, NgIf, TuiLink, TuiMonthPipe, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-spin-button\n    [focusable]="false"\n    [leftDisabled]="value.monthSameOrBefore(min)"\n    [rightDisabled]="value.monthSameOrAfter(max)"\n    (leftClick)="append({month: -1})"\n    (rightClick)="append({month: 1})"\n>\n    {{ value | tuiMonth | async }}\n    <ng-container *ngIf="min.year === max.year; else button">\n        {{ value.formattedYear }}\n    </ng-container>\n    <ng-template #button>\n        <button\n            id="year-btn"\n            automation-id="tui-primitive-year-month-pagination__year-button"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ value.formattedYear }}\n        </button>\n    </ng-template>\n</tui-spin-button>\n',
      styles: [":host{display:block}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    yearClick: [{
      type: Output
    }]
  });
})();
var LIMIT = 100;
var ITEMS_IN_ROW = 4;
var TuiCalendarYear = class _TuiCalendarYear {
  constructor() {
    this.hoveredItem = null;
    this.currentYear = TuiMonth.currentLocal().year;
    this.value = null;
    this.initialItem = this.currentYear;
    this.min = MIN_YEAR;
    this.max = MAX_YEAR;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.yearClick = new EventEmitter();
  }
  isDisabled(item) {
    return this.max && this.max < item || this.min && this.min > item || this.disabledItemHandler(item);
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (value instanceof TuiYear) {
      return value.year === item ? "active" : null;
    }
    if (tuiIsNumber(value)) {
      return value === item ? "active" : null;
    }
    if (!(value instanceof TuiMonthRange)) {
      return value?.find((day) => day.year === item) ? "active" : null;
    }
    const hovered = this.isSingle ? hoveredItem : null;
    const from = Math.min(value.from.year, hovered ?? value.to.year);
    const to = Math.max(value.from.year, hovered ?? value.to.year);
    if (from === to && value.from.year === value.to.year && from === item) {
      return "active";
    }
    if (from === item) {
      return "start";
    }
    if (to === item) {
      return "end";
    }
    return from < item && item < to ? "middle" : null;
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered, item);
  }
  get isSingle() {
    return this.value instanceof TuiMonthRange ? this.value.from.monthSame(this.value.to) : this.value instanceof TuiDayRange && this.value.isSingleDay;
  }
  get rows() {
    return Math.ceil((this.calculatedMax - this.calculatedMin) / ITEMS_IN_ROW);
  }
  scrollItemIntoView(item) {
    return this.initialItem === item;
  }
  getItem(rowIndex, colIndex) {
    return rowIndex * ITEMS_IN_ROW + colIndex + this.calculatedMin;
  }
  itemIsToday(item) {
    return this.currentYear === item;
  }
  get calculatedMin() {
    const initial = this.initialItem - LIMIT;
    const min = this.min ?? MIN_YEAR;
    return min > initial ? min : initial;
  }
  get calculatedMax() {
    const initial = this.initialItem + LIMIT;
    const max = this.max ?? MAX_YEAR;
    return max < initial ? max + 1 : initial;
  }
  updateHoveredItem(hovered, item) {
    this.hoveredItem = hovered ? item : null;
  }
  static {
    this.ɵfac = function TuiCalendarYear_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarYear)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarYear,
      selectors: [["tui-calendar-year"]],
      hostVars: 2,
      hostBindings: function TuiCalendarYear_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isSingle);
        }
      },
      inputs: {
        value: "value",
        initialItem: "initialItem",
        min: "min",
        max: "max",
        disabledItemHandler: "disabledItemHandler"
      },
      outputs: {
        yearClick: "yearClick"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["automation-id", "tui-calendar-year__row", "class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__row", 1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["automation-id", "tui-calendar-year__cell", "class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "tuiScrollIntoView", "click", "tuiHoveredChange", 4, "tuiLet"], ["automation-id", "tui-calendar-year__cell", 1, "t-cell", 3, "click", "tuiHoveredChange", "tuiScrollIntoView"]],
      template: function TuiCalendarYear_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarYear_div_0_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("tuiRepeatTimesOf", ctx.rows);
        }
      },
      dependencies: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;inline-size:16rem}.t-cell[_ngcontent-%COMP%]{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}`],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarYear, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-year",
      imports: [TuiHovered, TuiLet, TuiRepeatTimes, TuiScrollIntoView],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isSingle"
      },
      template: '<div\n    *tuiRepeatTimes="let rowIndex of rows"\n    automation-id="tui-calendar-year__row"\n    class="t-row"\n>\n    <ng-container *tuiRepeatTimes="let colIndex of 4">\n        <div\n            *tuiLet="getItem(rowIndex, colIndex) as item"\n            automation-id="tui-calendar-year__cell"\n            class="t-cell"\n            [attr.data-range]="getItemRange(item)"\n            [class.t-cell_disabled]="isDisabled(item)"\n            [class.t-cell_today]="itemIsToday(item)"\n            [tuiScrollIntoView]="scrollItemIntoView(item)"\n            (click)="yearClick.emit(item)"\n            (tuiHoveredChange)="onItemHovered($event, item)"\n        >\n            {{ item }}\n        </div>\n    </ng-container>\n</div>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;inline-size:16rem}.t-cell{inline-size:4rem;border-block-start-width:.5rem;border-block-end-width:.5rem}
`]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    initialItem: [{
      type: Input
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
    yearClick: [{
      type: Output
    }]
  });
})();
var TuiCalendar = class _TuiCalendar {
  constructor() {
    this.day = null;
    this.view = "month";
    this.month = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minViewedMonth = TUI_FIRST_DAY;
    this.maxViewedMonth = TUI_LAST_DAY;
    this.hoveredItem = null;
    this.showAdjacent = true;
    this.markerHandler = null;
    this.dayClick = new EventEmitter();
    this.monthChange = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.disabledItemHandlerMapper = (disabledItemHandler, min, max) => (item) => item.dayBefore(min) || item.dayAfter(max) || disabledItemHandler(item);
  }
  set value(value) {
    this.day = value;
    if (this.showAdjacent && value instanceof TuiDay && value.daySameOrBefore(TUI_LAST_DISPLAYED_DAY)) {
      this.month = value;
    }
  }
  set initialView(view) {
    this.view = view;
  }
  get value() {
    return this.day;
  }
  onPaginationValueChange(month) {
    this.updateViewedMonth(month);
  }
  onDayClick(day) {
    this.dayClick.emit(day);
  }
  onHoveredItemChange(day) {
    this.updateHoveredDay(day);
  }
  get computedMin() {
    return this.min ?? TUI_FIRST_DAY;
  }
  get computedMax() {
    return this.max ?? TUI_LAST_DAY;
  }
  get computedMinViewedMonth() {
    const min = this.computedMin;
    const minViewed = this.minViewedMonth ?? TUI_FIRST_DAY;
    return minViewed.monthSameOrAfter(min) ? minViewed : min;
  }
  get computedMaxViewedMonth() {
    const max = this.computedMax;
    const maxViewed = this.maxViewedMonth ?? TUI_LAST_DAY;
    return maxViewed.monthSameOrBefore(max) ? maxViewed : max;
  }
  get isInYearView() {
    return this.view === "year";
  }
  onPaginationYearClick() {
    this.view = "year";
  }
  onPickerYearClick(year) {
    this.view = "month";
    this.updateViewedMonth(new TuiMonth(year, this.month.month));
  }
  updateViewedMonth(month) {
    if (this.month.monthSame(month)) {
      return;
    }
    this.month = month;
    this.monthChange.emit(month);
  }
  updateHoveredDay(day) {
    if (tuiNullableSame(this.hoveredItem, day, (a, b) => a.daySame(b))) {
      return;
    }
    this.hoveredItem = day;
    this.hoveredItemChange.emit(day);
  }
  static {
    this.ɵfac = function TuiCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendar,
      selectors: [["tui-calendar"]],
      inputs: {
        month: "month",
        disabledItemHandler: "disabledItemHandler",
        min: "min",
        max: "max",
        minViewedMonth: "minViewedMonth",
        maxViewedMonth: "maxViewedMonth",
        hoveredItem: "hoveredItem",
        showAdjacent: "showAdjacent",
        markerHandler: "markerHandler",
        value: "value",
        initialView: "initialView"
      },
      outputs: {
        dayClick: "dayClick",
        monthChange: "monthChange",
        hoveredItemChange: "hoveredItemChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["calendar", ""], ["automation-id", "tui-calendar__scrollbar", "class", "t-scrollbar", 4, "ngIf", "ngIfElse"], ["automation-id", "tui-calendar__scrollbar", 1, "t-scrollbar"], ["automation-id", "tui-calendar__year", 3, "yearClick", "initialItem", "max", "min", "value"], ["automation-id", "tui-calendar__pagination", 1, "t-pagination", 3, "valueChange", "yearClick", "max", "min", "value"], ["automation-id", "tui-calendar__calendar", 3, "dayClick", "hoveredItemChange", "disabledItemHandler", "hoveredItem", "markerHandler", "month", "showAdjacent", "value"]],
      template: function TuiCalendar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendar_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 1)(1, TuiCalendar_ng_template_1_Template, 3, 14, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const calendar_r4 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isInYearView)("ngIfElse", calendar_r4);
        }
      },
      dependencies: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      styles: ["[_nghost-%COMP%]{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar[_ngcontent-%COMP%]{block-size:18.25rem;inline-size:16.875rem}.t-pagination[_ngcontent-%COMP%]{margin-bottom:1rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar",
      imports: [NgIf, TuiCalendarSheet, TuiCalendarSpin, TuiCalendarYear, TuiMapperPipe, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<tui-scrollbar\n    *ngIf="isInYearView; else calendar"\n    automation-id="tui-calendar__scrollbar"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        automation-id="tui-calendar__year"\n        [initialItem]="month.year"\n        [max]="computedMax.year"\n        [min]="computedMin.year"\n        [value]="value"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #calendar>\n    <tui-calendar-spin\n        automation-id="tui-calendar__pagination"\n        class="t-pagination"\n        [max]="computedMaxViewedMonth"\n        [min]="computedMinViewedMonth"\n        [value]="month"\n        (valueChange)="onPaginationValueChange($event)"\n        (yearClick)="onPaginationYearClick()"\n    />\n    <tui-calendar-sheet\n        automation-id="tui-calendar__calendar"\n        [disabledItemHandler]="disabledItemHandler | tuiMapper: disabledItemHandlerMapper : computedMin : computedMax"\n        [hoveredItem]="hoveredItem"\n        [markerHandler]="markerHandler"\n        [month]="month"\n        [showAdjacent]="showAdjacent"\n        [value]="value"\n        (dayClick)="onDayClick($event)"\n        (hoveredItemChange)="onHoveredItemChange($event)"\n    />\n</ng-template>\n',
      styles: [":host{display:block;min-block-size:18.25rem;inline-size:15.75rem;padding:1rem 1.125rem;box-sizing:content-box}.t-scrollbar{block-size:18.25rem;inline-size:16.875rem}.t-pagination{margin-bottom:1rem}\n"]
    }]
  }], null, {
    month: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minViewedMonth: [{
      type: Input
    }],
    maxViewedMonth: [{
      type: Input
    }],
    hoveredItem: [{
      type: Input
    }],
    showAdjacent: [{
      type: Input
    }],
    markerHandler: [{
      type: Input
    }],
    dayClick: [{
      type: Output
    }],
    monthChange: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    initialView: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-popover.mjs
var TuiPopoverDirective = class _TuiPopoverDirective extends PolymorpheusTemplate {
  constructor() {
    super(...arguments);
    this.service = inject(TuiPopoverService);
    this.open$ = new Subject();
    this.options = {};
    this.open = false;
    this.openChange = this.open$.pipe(distinctUntilChanged(), tuiIfMap(() => this.service.open(this, this.options).pipe(ignoreElements(), endWith(false))), share());
  }
  ngOnChanges() {
    this.open$.next(this.open);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPopoverDirective_BaseFactory;
      return function TuiPopoverDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPopoverDirective_BaseFactory || (ɵTuiPopoverDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPopoverDirective)))(__ngFactoryType__ || _TuiPopoverDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPopoverDirective,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPopoverDirective, [{
    type: Directive
  }], null, null);
})();

export {
  TUI_GROUP_DEFAULT_OPTIONS,
  TUI_GROUP_OPTIONS,
  tuiGroupOptionsProvider,
  TuiGroup,
  TUI_LINK_DEFAULT_OPTIONS,
  TUI_LINK_OPTIONS,
  tuiLinkOptionsProvider,
  TuiLink,
  TuiLet,
  TuiRepeatTimes,
  TuiMapperPipe,
  TuiAutoColorPipe,
  TuiCalendarSheetPipe,
  TuiFallbackSrcPipe,
  TuiFlagPipe,
  TuiFormatDatePipe,
  TuiFormatNumberPipe,
  TuiInitialsPipe,
  TuiMonthPipe,
  TuiOrderWeekDaysPipe,
  TuiSpinButton,
  TuiCalendarSheet,
  TuiCalendarSpin,
  TuiCalendarYear,
  TuiCalendar,
  coerceBooleanProperty,
  coerceArray,
  TuiPopoverDirective
};
//# sourceMappingURL=chunk-P47AVGYP.js.map
