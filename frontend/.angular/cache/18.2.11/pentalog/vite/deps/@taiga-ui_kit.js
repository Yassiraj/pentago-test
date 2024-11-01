import {
  AsYouType,
  MaskitoDirective,
  Metadata,
  PhoneNumberMatcher,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_DAY_CAPS_MAPPER,
  TUI_FLOATING_PRECISION,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  TuiCalendarMonth,
  TuiCalendarRange,
  TuiCheckbox,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  TuiDataListWrapperComponent,
  TuiDayRangePeriod,
  TuiRange,
  TuiRangeChange,
  TuiSlider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiStringifyContentPipe,
  VALID_PHONE_NUMBER_WITH_EXTENSION,
  VALID_PUNCTUATION,
  WHITESPACE,
  calculateDisabledItemHandler,
  createExtensionPattern,
  getCountryCallingCode,
  isValidCandidate,
  isValidPreCandidate,
  maskitoCaretGuard,
  maskitoPrefixPostprocessorGenerator,
  maskitoRemoveOnBlurPlugin,
  parse,
  parsePhoneNumberWithError,
  parsePreCandidate,
  tuiCheckboxOptionsProvider,
  tuiCreateDefaultDayRangePeriods,
  tuiCreateTimePeriods,
  tuiGetCallingCode,
  tuiIsFlat,
  tuiKeyStepValueToPercentage,
  tuiMaskito,
  tuiPercentageToKeyStepValue,
  tuiSliderOptionsProvider,
  tuiToggleDay,
  validatePhoneNumberLength
} from "./chunk-ZZR473VN.js";
import {
  MutationObserverService,
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_OPTIONS,
  TUI_BADGE_OPTIONS,
  TUI_BLOCK_DEFAULT_OPTIONS,
  TUI_BLOCK_OPTIONS,
  TUI_COPY_OPTIONS,
  TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
  TUI_FLUID_TYPOGRAPHY_OPTIONS,
  TUI_HIGHLIGHT_OPTIONS,
  TUI_PASSWORD_OPTIONS,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  TUI_TABS_PROVIDERS,
  TUI_TABS_REFRESH,
  TUI_TAB_ACTIVATE,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TuiBadge,
  TuiBadgeNotification,
  TuiBlock,
  TuiButtonClose,
  TuiButtonGroup,
  TuiButtonSelect,
  TuiConnected,
  TuiCopy,
  TuiDataListDropdownManager,
  TuiFade,
  TuiFluidTypography,
  TuiHighlight,
  TuiIconBadge,
  TuiImgLazyLoading,
  TuiItem,
  TuiLazyLoadingService,
  TuiPassword,
  TuiPresent,
  TuiSensitive,
  TuiSkeleton,
  TuiSwitch,
  TuiTab,
  TuiTabs,
  TuiTabsDirective,
  TuiTabsHorizontal,
  TuiTabsVertical,
  TuiTabsWithMore,
  TuiUnfinishedValidator,
  TuiUnmaskHandler,
  WA_MUTATION_OBSERVER_INIT,
  WaIntersectionObservee,
  WaIntersectionObserver,
  WaIntersectionObserverDirective,
  WaIntersectionRoot,
  WaMutationObserver,
  tuiAvatarOptionsProvider,
  tuiBadgeNotificationOptionsProvider,
  tuiBadgeOptionsProvider,
  tuiBlockOptionsProvider,
  tuiCopyOptionsProvider,
  tuiCreateUnfinishedValidator,
  tuiFluidTypographyOptionsProvider,
  tuiHighlightOptionsProvider,
  tuiPasswordOptionsProvider,
  tuiSwitchOptionsProvider,
  tuiTabsOptionsProvider
} from "./chunk-P4RQJVMB.js";
import {
  MASKITO_DEFAULT_OPTIONS,
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_CANCEL_WORD,
  TUI_CHEVRON,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_CONFIRM_WORDS,
  TUI_COPY_TEXTS,
  TUI_COUNTRIES,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TEXTS,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_DONE_WORD,
  TUI_FILE_TEXTS,
  TUI_FROM_TO_TEXTS,
  TUI_HIDE_TEXT,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  TUI_INPUT_FILE_TEXTS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_ITEMS_HANDLERS,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_MORE_WORD,
  TUI_MULTI_SELECT_TEXTS,
  TUI_OTHER_DATE_TEXT,
  TUI_PAGINATION_TEXTS,
  TUI_PASSWORD_TEXTS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_PREVIEW_ICONS,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_SHOW_ALL_TEXT,
  TUI_TIME_TEXTS,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_TOOLTIP_OPTIONS,
  TUI_VALIDATION_ERRORS,
  TuiChevron,
  TuiTooltip,
  maskitoInitialCalibrationPlugin,
  maskitoTransform,
  tuiDateStreamWithTransformer,
  tuiInputDateOptionsProvider,
  tuiItemsHandlersProvider,
  tuiPreviewIconsProvider,
  tuiTooltipOptionsProvider,
  tuiValidationErrorsProvider
} from "./chunk-2H24O7E5.js";
import {
  TUI_ALERTS,
  TUI_DIALOGS,
  TuiAutoFocus,
  TuiDialogService,
  tuiAutoFocusOptionsProvider
} from "./chunk-2Q75LATM.js";
import {
  TuiFlagPipe,
  TuiFormatDatePipe,
  TuiGroup,
  TuiLet,
  TuiLink,
  TuiPopoverDirective,
  TuiRepeatTimes,
  coerceArray,
  tuiGroupOptionsProvider,
  tuiLinkOptionsProvider
} from "./chunk-P47AVGYP.js";
import {
  TuiExpand,
  TuiExpandComponent,
  TuiExpandContent
} from "./chunk-OENT37UI.js";
import {
  CHAR_NO_BREAK_SPACE,
  CHAR_PLUS,
  EMPTY_ARRAY,
  EMPTY_FUNCTION,
  EMPTY_QUERY,
  PolymorpheusComponent,
  PolymorpheusOutlet,
  PolymorpheusTemplate,
  ResizeObserverService,
  TUI_ANIMATIONS_SPEED,
  TUI_BUTTON_OPTIONS,
  TUI_CLOSE_WORD,
  TUI_COMMON_ICONS,
  TUI_DATA_LIST_HOST,
  TUI_DEFAULT_IDENTITY_MATCHER,
  TUI_DEFAULT_MATCHER,
  TUI_FALSE_HANDLER,
  TUI_HINT_COMPONENT,
  TUI_HINT_PROVIDERS,
  TUI_IS_IOS,
  TUI_IS_MOBILE,
  TUI_SPIN_ICONS,
  TUI_TEXTFIELD_OPTIONS,
  TUI_TRUE_HANDLER,
  TuiAppearance,
  TuiBreakpointService,
  TuiButton,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDropdown,
  TuiDropdownDirective,
  TuiDropdownOpen,
  TuiDropdownPortal,
  TuiHint,
  TuiHintComponent,
  TuiHintDescribe,
  TuiHintDirective,
  TuiHintManual,
  TuiHintOverflow,
  TuiIcon,
  TuiIdService,
  TuiLabel,
  TuiLoader,
  TuiNativeValidator,
  TuiOption,
  TuiPopoverService,
  TuiPositionAccessor,
  TuiScrollService,
  TuiScrollbar,
  TuiSelect,
  TuiTextfield,
  TuiTextfieldComponent,
  TuiTextfieldContent,
  TuiTextfieldDirective,
  TuiTextfieldDropdownDirective,
  TuiTextfieldOptionsDirective,
  TuiValidationError,
  TuiWithAppearance,
  TuiWithDropdownOpen,
  TuiWithIcons,
  WA_PAGE_VISIBILITY,
  WA_WINDOW,
  WaResizeObserver,
  injectContext,
  tuiAppearanceOptionsProvider,
  tuiArrayShallowEquals,
  tuiAsControl,
  tuiAsPopover,
  tuiAsPositionAccessor,
  tuiButtonOptionsProvider,
  tuiClamp,
  tuiControlValue,
  tuiCreateOptions,
  tuiCreateToken,
  tuiDirectiveBinding,
  tuiDistanceBetweenTouches,
  tuiDragAndDropFrom,
  tuiDropdown,
  tuiDropdownOpen,
  tuiDropdownOptionsProvider,
  tuiFadeIn,
  tuiFallbackValueProvider,
  tuiGetActualTarget,
  tuiGetDuration,
  tuiGetOriginalArrayFromQueryList,
  tuiHeightCollapse,
  tuiHintOptionsProvider,
  tuiIfMap,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsCurrentTarget,
  tuiIsEditingKey,
  tuiIsElement,
  tuiIsHTMLElement,
  tuiIsInput,
  tuiIsInputEvent,
  tuiIsNativeFocusedIn,
  tuiIsPresent,
  tuiIsString,
  tuiMoveFocus,
  tuiPreventDefault,
  tuiProvide,
  tuiProvideOptions,
  tuiPure,
  tuiPx,
  tuiQueryListChanges,
  tuiRound,
  tuiScaleIn,
  tuiSizeBigger,
  tuiSlideIn,
  tuiSlideInRight,
  tuiSlideInTop,
  tuiTextfieldOptionsProvider,
  tuiToAnimationOptions,
  tuiTypedFromEvent,
  tuiWatch,
  tuiWithStyles,
  tuiZoneOptimized,
  tuiZonefree,
  tuiZonefreeScheduler,
  tuiZonefull
} from "./chunk-TJD5ECJX.js";
import {
  CheckboxControlValueAccessor,
  ControlContainer,
  DefaultValueAccessor,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NgControl,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor,
  RangeValueAccessor,
  SelectControlValueAccessor,
  Validators
} from "./chunk-RMQQVHNY.js";
import "./chunk-DQR2A66Y.js";
import {
  ActivatedRoute,
  Router,
  RouterLinkActive
} from "./chunk-6JBCPGHO.js";
import {
  takeUntilDestroyed,
  toObservable,
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  shouldCall
} from "./chunk-KKWAPHD5.js";
import {
  DomSanitizer
} from "./chunk-YEHPATXO.js";
import "./chunk-WJOPP6AW.js";
import {
  AsyncPipe,
  CommonModule,
  DOCUMENT,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PercentPipe,
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
  EventEmitter,
  INJECTOR$1,
  Injectable,
  Injector,
  Input,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
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
  Observable,
  Subject,
  Subscription,
  __async,
  __decorate,
  __objRest,
  __spreadProps,
  __spreadValues,
  combineLatest,
  debounce,
  debounceTime,
  defer,
  delay,
  distinctUntilChanged,
  filter,
  from,
  identity,
  interval,
  map,
  merge,
  of,
  pairwise,
  repeat,
  scan,
  share,
  skip,
  startWith,
  switchMap,
  takeUntil,
  tap,
  throttleTime,
  timer
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-accordion.mjs
var _c0 = ["*", [["", "tuiAccordionItemContent", "", 5, "ng-template"]]];
var _c1 = ["*", "[tuiAccordionItemContent]:not(ng-template)"];
function TuiAccordionItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "tui-icon", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("tuiChevron", ctx_r0.open);
  }
}
function TuiAccordionItem_ng_template_6_div_0_ng_container_1_Template(rf, ctx) {
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
function TuiAccordionItem_ng_template_6_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, TuiAccordionItem_ng_template_6_div_0_ng_container_1_Template, 2, 1, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r0.lazyContent);
  }
}
function TuiAccordionItem_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiAccordionItem_ng_template_6_div_0_Template, 2, 1, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.lazyContent);
  }
}
function TuiAccordionItem_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
var TuiAccordionItemContent = class _TuiAccordionItemContent extends PolymorpheusTemplate {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiAccordionItemContent_BaseFactory;
      return function TuiAccordionItemContent_Factory(__ngFactoryType__) {
        return (ɵTuiAccordionItemContent_BaseFactory || (ɵTuiAccordionItemContent_BaseFactory = ɵɵgetInheritedFactory(_TuiAccordionItemContent)))(__ngFactoryType__ || _TuiAccordionItemContent);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAccordionItemContent,
      selectors: [["ng-template", "tuiAccordionItemContent", ""]],
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItemContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiAccordionItemContent]"
    }]
  }], null, null);
})();
var TuiAccordionItemEagerContent = class _TuiAccordionItemEagerContent {
  static {
    this.ɵfac = function TuiAccordionItemEagerContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAccordionItemEagerContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAccordionItemEagerContent,
      selectors: [["", "tuiAccordionItemContent", "", 5, "ng-template"]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItemEagerContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiAccordionItemContent]:not(ng-template)"
    }]
  }], null, null);
})();
var TuiAccordionItem = class _TuiAccordionItem {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.noPadding = false;
    this.showArrow = true;
    this.borders = "all";
    this.size = "m";
    this.disabled = false;
    this.disableHover = false;
    this.open = false;
    this.async = false;
    this.openChange = new EventEmitter();
  }
  close() {
    this.updateOpen(false);
    this.cdr.markForCheck();
  }
  onRowToggle() {
    if (!this.disabled) {
      this.updateOpen(!this.open);
    }
  }
  onItemKeyDownEsc(event) {
    if (!this.open) {
      return;
    }
    event.stopPropagation();
    this.updateOpen(false);
  }
  updateOpen(open) {
    if (this.open === open) {
      return;
    }
    this.open = open;
    this.openChange.emit(open);
  }
  static {
    this.ɵfac = function TuiAccordionItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAccordionItem)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiAccordionItem,
      selectors: [["tui-accordion-item"]],
      contentQueries: function TuiAccordionItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiAccordionItemEagerContent, 5);
          ɵɵcontentQuery(dirIndex, TuiAccordionItemContent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.eagerContent = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lazyContent = _t.first);
        }
      },
      hostVars: 8,
      hostBindings: function TuiAccordionItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-borders", ctx.borders)("data-size", ctx.size);
          ɵɵclassProp("_no-padding", ctx.noPadding)("_has-arrow", ctx.showArrow)("_disabled", ctx.disabled);
        }
      },
      inputs: {
        noPadding: "noPadding",
        showArrow: "showArrow",
        borders: "borders",
        size: "size",
        disabled: "disabled",
        disableHover: "disableHover",
        open: "open",
        async: "async"
      },
      outputs: {
        openChange: "openChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 9,
      consts: [["automation-id", "tui-accordion__item-wrapper", 1, "t-wrapper"], ["automation-id", "tui-accordion__item-header", "type", "button", 1, "t-header", 3, "click", "keydown.esc", "disabled"], ["automation-id", "tui-accordion__item-title", 1, "t-title"], [4, "ngIf"], [3, "async", "expanded"], ["tuiExpandContent", ""], ["class", "t-content", 4, "ngIf"], [1, "t-icon", 3, "tuiChevron"], ["automation-id", "tui-accordion__item-content", "class", "t-content", 4, "ngIf"], ["automation-id", "tui-accordion__item-content", 1, "t-content"], [4, "polymorpheusOutlet"], [1, "t-content"]],
      template: function TuiAccordionItem_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c0);
          ɵɵelementStart(0, "div", 0)(1, "button", 1);
          ɵɵlistener("click", function TuiAccordionItem_Template_button_click_1_listener() {
            return ctx.onRowToggle();
          })("keydown.esc", function TuiAccordionItem_Template_button_keydown_esc_1_listener($event) {
            return ctx.onItemKeyDownEsc($event);
          });
          ɵɵelementStart(2, "span", 2);
          ɵɵprojection(3);
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiAccordionItem_ng_container_4_Template, 2, 1, "ng-container", 3);
          ɵɵelementEnd();
          ɵɵelementStart(5, "tui-expand", 4);
          ɵɵtemplate(6, TuiAccordionItem_ng_template_6_Template, 1, 1, "ng-template", 5)(7, TuiAccordionItem_div_7_Template, 2, 0, "div", 6);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassProp("t-header_hoverable", !ctx.disableHover)("t-header_open", ctx.open);
          ɵɵproperty("disabled", ctx.disabled);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.showArrow);
          ɵɵadvance();
          ɵɵproperty("async", ctx.async)("expanded", ctx.open);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.eagerContent);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpandComponent, TuiExpandContent, TuiIcon],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}  tui-accordion{inline-size:100%}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header[_ngcontent-%COMP%]:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-block-end-width:0}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-right:.75rem}[tuiTheme="dark"][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%], [tuiTheme="dark"]   [_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-background-neutral-1)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-background-base-alt)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-right:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;border-width:.25rem;color:var(--tui-text-tertiary)}[_nghost-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-secondary)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionItem, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-accordion-item",
      imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpand, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._no-padding]": "noPadding",
        "[class._has-arrow]": "showArrow",
        "[attr.data-borders]": "borders",
        "[attr.data-size]": "size",
        "[class._disabled]": "disabled"
      },
      template: '<div\n    automation-id="tui-accordion__item-wrapper"\n    class="t-wrapper"\n>\n    <button\n        automation-id="tui-accordion__item-header"\n        type="button"\n        class="t-header"\n        [class.t-header_hoverable]="!disableHover"\n        [class.t-header_open]="open"\n        [disabled]="disabled"\n        (click)="onRowToggle()"\n        (keydown.esc)="onItemKeyDownEsc($event)"\n    >\n        <span\n            automation-id="tui-accordion__item-title"\n            class="t-title"\n        >\n            <ng-content />\n        </span>\n        <ng-container *ngIf="showArrow">\n            <tui-icon\n                class="t-icon"\n                [tuiChevron]="open"\n            />\n        </ng-container>\n    </button>\n    <tui-expand\n        [async]="async"\n        [expanded]="open"\n    >\n        <ng-template tuiExpandContent>\n            <div\n                *ngIf="lazyContent"\n                automation-id="tui-accordion__item-content"\n                class="t-content"\n            >\n                <ng-container *polymorpheusOutlet="lazyContent as text">\n                    {{ text }}\n                </ng-container>\n            </div>\n        </ng-template>\n        <div\n            *ngIf="eagerContent"\n            class="t-content"\n        >\n            <ng-content select="[tuiAccordionItemContent]:not(ng-template)" />\n        </div>\n    </tui-expand>\n</div>\n',
      styles: [':host{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}:host[data-borders=top-bottom]{border-radius:0!important}::ng-deep tui-accordion{inline-size:100%}.t-wrapper{position:relative;border-radius:inherit}.t-wrapper:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-border-normal);pointer-events:none}:host:not([data-borders]) .t-wrapper:after{border-width:0}:host[data-borders=all] .t-wrapper:after{border-width:1px}:host[data-borders=top-bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0}:host[data-borders=top] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-end-width:0}:host[data-borders=bottom] .t-wrapper:after{border-inline-start-width:0;border-inline-end-width:0;border-block-start-width:0}.t-header{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;inline-size:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-block-end:1px solid var(--tui-border-normal);min-block-size:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-primary);cursor:pointer;text-align:start;outline:none}.t-header:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}:host:not([data-borders]) .t-header{border-block-end-width:0}:host._has-arrow .t-header{padding-right:.75rem}:host-context([tuiTheme="dark"]) .t-header_open{background:var(--tui-background-neutral-1)}:host[data-size=s] .t-header{font:var(--tui-font-text-m);min-block-size:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}:host._no-padding .t-header{padding-left:0;padding-right:0}:host._disabled .t-header{cursor:default}.t-wrapper:hover>.t-header_hoverable{background:var(--tui-background-base-alt)}.t-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}:host._has-arrow .t-title{margin-right:.5rem}.t-icon{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;border-width:.25rem;color:var(--tui-text-tertiary)}:host:hover .t-icon{color:var(--tui-text-secondary)}.t-content{font:var(--tui-font-text-m);padding:1.25rem;overflow-wrap:break-word}:host[data-size=s] .t-content{font:var(--tui-font-text-s);padding:1rem}\n']
    }]
  }], null, {
    eagerContent: [{
      type: ContentChild,
      args: [TuiAccordionItemEagerContent]
    }],
    lazyContent: [{
      type: ContentChild,
      args: [TuiAccordionItemContent]
    }],
    noPadding: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    borders: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    disableHover: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    async: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var TuiAccordionDirective = class _TuiAccordionDirective {
  constructor() {
    this.destroyRef = inject(DestroyRef);
    this.accordionItems = EMPTY_QUERY;
    this.closeOthers = true;
    const group = inject(TuiGroup);
    group.orientation = "vertical";
    group.collapsed = true;
  }
  ngAfterContentInit() {
    const {
      accordionItems
    } = this;
    const rows$ = tuiQueryListChanges(accordionItems);
    const newOpenRow$ = rows$.pipe(pairwise(), map(([previous, current]) => current.find((item) => !previous.includes(item) && item.open)), filter(tuiIsPresent));
    const rowsOpen$ = merge(rows$.pipe(switchMap((rows) => merge(...rows.map((row) => row.openChange.pipe(filter(identity), map(() => row)))))), newOpenRow$).pipe(filter(() => this.closeOthers), takeUntilDestroyed(this.destroyRef));
    rowsOpen$.subscribe((currentRow) => {
      accordionItems.forEach((row) => {
        if (currentRow !== row) {
          row.close();
        }
      });
    });
  }
  static {
    this.ɵfac = function TuiAccordionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiAccordionDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiAccordionDirective,
      selectors: [["tui-accordion"]],
      contentQueries: function TuiAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiAccordionItem, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accordionItems = _t);
        }
      },
      inputs: {
        closeOthers: "closeOthers"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiGroup,
        inputs: ["rounded", "rounded"]
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiAccordionDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-accordion",
      hostDirectives: [{
        directive: TuiGroup,
        inputs: ["rounded"]
      }]
    }]
  }], function() {
    return [];
  }, {
    accordionItems: [{
      type: ContentChildren,
      args: [TuiAccordionItem]
    }],
    closeOthers: [{
      type: Input
    }]
  });
})();
var TuiAccordion = [TuiAccordionItem, TuiAccordionDirective, TuiAccordionItemContent, TuiAccordionItemEagerContent];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-action-bar.mjs
var _c02 = [[["tui-data-list"], ["", "tuiMenu", ""]], "*", [["a"], ["button"], ["", "tuiAction", ""]]];
var _c12 = ["tui-data-list,[tuiMenu]", "*", "a,button,[tuiAction]"];
var TuiActionBarComponent = class _TuiActionBarComponent {
  constructor() {
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.expanded = false;
    this.size = "m";
    this.appearance = "glass";
  }
  static {
    this.ɵfac = function TuiActionBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiActionBarComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiActionBarComponent,
      selectors: [["tui-action-bar"]],
      hostAttrs: ["tuiTheme", "dark"],
      hostVars: 3,
      hostBindings: function TuiActionBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.animation)("@tuiSlideInTop", ctx.animation);
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        expanded: "expanded",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_BUTTON_OPTIONS, _TuiActionBarComponent), tuiLinkOptionsProvider({
        appearance: "action-grayscale",
        pseudo: true
      })]), ɵɵStandaloneFeature],
      ngContentSelectors: _c12,
      decls: 6,
      vars: 1,
      consts: [[3, "expanded"], [1, "t-content"], [1, "t-actions"]],
      template: function TuiActionBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c02);
          ɵɵelementStart(0, "tui-expand", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 1);
          ɵɵprojection(3, 1);
          ɵɵelementStart(4, "div", 2);
          ɵɵprojection(5, 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("expanded", ctx.expanded);
        }
      },
      dependencies: [TuiExpandComponent],
      styles: ["[_nghost-%COMP%]{position:fixed;left:max(calc(50% - 37rem),1.5rem);bottom:1rem;display:flex;inline-size:100%;max-inline-size:min(calc(100vw - 3rem),74rem);box-sizing:border-box;border-radius:1rem;background:var(--tui-service-backdrop);color:var(--tui-text-primary);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem);flex-direction:column;justify-content:center;padding:.75rem;text-indent:.75rem;font:var(--tui-font-text-m);white-space:nowrap}[data-size=s][_nghost-%COMP%]{border-radius:var(--tui-radius-l);font:var(--tui-font-text-s);padding:.5rem}tui-root._mobile   [_nghost-%COMP%]{padding:1rem;border-radius:1.25rem;text-indent:0}[_nghost-%COMP%]     tui-data-list[data-size]{padding:0;margin:-.625rem -.625rem 1rem}[_nghost-%COMP%]     tui-items-with-more{text-indent:.5rem}tui-root._mobile   [_nghost-%COMP%]     tui-items-with-more{display:none}.t-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.7rem 2.5rem}tui-root._mobile[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{flex-wrap:wrap}.t-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem;margin-inline-start:auto}tui-root._mobile[_nghost-%COMP%]   .t-actions[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-actions[_ngcontent-%COMP%]{flex:1}tui-root._mobile[_nghost-%COMP%]   .t-actions[_ngcontent-%COMP%]     [tuiButton], tui-root._mobile   [_nghost-%COMP%]   .t-actions[_ngcontent-%COMP%]     [tuiButton]{flex:1}"],
      data: {
        animation: [tuiFadeIn, tuiSlideInTop]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActionBarComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-action-bar",
      imports: [TuiExpandComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_BUTTON_OPTIONS, TuiActionBarComponent), tuiLinkOptionsProvider({
        appearance: "action-grayscale",
        pseudo: true
      })],
      animations: [tuiFadeIn, tuiSlideInTop],
      host: {
        tuiTheme: "dark",
        "[attr.data-size]": "size",
        "[@tuiFadeIn]": "animation",
        "[@tuiSlideInTop]": "animation"
      },
      template: '<tui-expand [expanded]="expanded">\n    <ng-content select="tui-data-list,[tuiMenu]" />\n</tui-expand>\n\n<div class="t-content">\n    <ng-content />\n\n    <div class="t-actions">\n        <ng-content select="a,button,[tuiAction]" />\n    </div>\n</div>\n',
      styles: [":host{position:fixed;left:max(calc(50% - 37rem),1.5rem);bottom:1rem;display:flex;inline-size:100%;max-inline-size:min(calc(100vw - 3rem),74rem);box-sizing:border-box;border-radius:1rem;background:var(--tui-service-backdrop);color:var(--tui-text-primary);-webkit-backdrop-filter:blur(2rem);backdrop-filter:blur(2rem);flex-direction:column;justify-content:center;padding:.75rem;text-indent:.75rem;font:var(--tui-font-text-m);white-space:nowrap}:host[data-size=s]{border-radius:var(--tui-radius-l);font:var(--tui-font-text-s);padding:.5rem}:host-context(tui-root._mobile) :host{padding:1rem;border-radius:1.25rem;text-indent:0}:host ::ng-deep tui-data-list[data-size]{padding:0;margin:-.625rem -.625rem 1rem}:host ::ng-deep tui-items-with-more{text-indent:.5rem}:host-context(tui-root._mobile) :host ::ng-deep tui-items-with-more{display:none}.t-content{display:flex;align-items:center;gap:.7rem 2.5rem}:host-context(tui-root._mobile) .t-content{flex-wrap:wrap}.t-actions{display:flex;justify-content:flex-end;gap:.5rem;margin-inline-start:auto}:host-context(tui-root._mobile) .t-actions{flex:1}:host-context(tui-root._mobile) .t-actions ::ng-deep [tuiButton]{flex:1}\n"]
    }]
  }], null, {
    expanded: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiActionBarDirective = class _TuiActionBarDirective extends TuiDropdownPortal {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiActionBarDirective_BaseFactory;
      return function TuiActionBarDirective_Factory(__ngFactoryType__) {
        return (ɵTuiActionBarDirective_BaseFactory || (ɵTuiActionBarDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiActionBarDirective)))(__ngFactoryType__ || _TuiActionBarDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiActionBarDirective,
      selectors: [["ng-template", "tuiActionBar", ""]],
      inputs: {
        tuiDropdown: [0, "tuiActionBar", "tuiDropdown"]
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiActionBarDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiActionBar]",
      inputs: ["tuiDropdown: tuiActionBar"]
    }]
  }], null, null);
})();
var TuiActionBar = [TuiActionBarComponent, TuiActionBarDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-badged-content.mjs
var _c03 = ["*", [["tui-badge-notification", "tuiSlot", "top"]], [["", "tuiSlot", "top"]], [["tui-badge-notification", "tuiSlot", "bottom"]], [["", "tuiSlot", "bottom"]]];
var _c13 = ["*", "tui-badge-notification[tuiSlot='top']", "[tuiSlot='top']", "tui-badge-notification[tuiSlot='bottom']", "[tuiSlot='bottom']"];
var TuiBadgedContentDirective = class _TuiBadgedContentDirective {
  constructor() {
    this.tuiSlot = "top";
  }
  static {
    this.ɵfac = function TuiBadgedContentDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgedContentDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiBadgedContentDirective,
      selectors: [["", "tuiSlot", ""]],
      inputs: {
        tuiSlot: "tuiSlot"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgedContentDirective, [{
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
var TuiBadgedContentComponent = class _TuiBadgedContentComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
  }
  onResize() {
    this.cdr.detectChanges();
  }
  static {
    this.ɵfac = function TuiBadgedContentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBadgedContentComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBadgedContentComponent,
      selectors: [["tui-badged-content"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c13,
      decls: 11,
      vars: 4,
      consts: [["badgeTop", ""], ["badgeBottom", ""], [1, "t-badge", "t-badge_top", 3, "waResizeObserver"], [1, "t-border"], [1, "t-badge", "t-badge_bottom", 3, "waResizeObserver"]],
      template: function TuiBadgedContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c03);
          ɵɵprojection(0);
          ɵɵelementStart(1, "div", 2, 0);
          ɵɵlistener("waResizeObserver", function TuiBadgedContentComponent_Template_div_waResizeObserver_1_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onResize());
          });
          ɵɵprojection(3, 1);
          ɵɵelementStart(4, "div", 3);
          ɵɵprojection(5, 2);
          ɵɵelementEnd()();
          ɵɵelementStart(6, "div", 4, 1);
          ɵɵlistener("waResizeObserver", function TuiBadgedContentComponent_Template_div_waResizeObserver_6_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onResize());
          });
          ɵɵprojection(8, 3);
          ɵɵelementStart(9, "div", 3);
          ɵɵprojection(10, 4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const badgeTop_r2 = ɵɵreference(2);
          const badgeBottom_r3 = ɵɵreference(7);
          ɵɵadvance();
          ɵɵstyleProp("--t-badge-height", badgeTop_r2.offsetHeight, "px");
          ɵɵadvance(5);
          ɵɵstyleProp("--t-badge-height", badgeBottom_r3.offsetHeight, "px");
        }
      },
      dependencies: [WaResizeObserver],
      styles: ["[_nghost-%COMP%]{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge[_ngcontent-%COMP%]{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top[_ngcontent-%COMP%]{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom[_ngcontent-%COMP%]{bottom:var(--t-offset);right:var(--t-offset)}.t-border[_ngcontent-%COMP%]:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBadgedContentComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-badged-content",
      imports: [TuiBadgedContentDirective, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-content />

<div
    #badgeTop
    class="t-badge t-badge_top"
    [style.--t-badge-height.px]="badgeTop.offsetHeight"
    (waResizeObserver)="onResize()"
>
    <ng-content select="tui-badge-notification[tuiSlot='top']" />
    <div class="t-border">
        <ng-content select="[tuiSlot='top']" />
    </div>
</div>

<div
    #badgeBottom
    class="t-badge t-badge_bottom"
    [style.--t-badge-height.px]="badgeBottom.offsetHeight"
    (waResizeObserver)="onResize()"
>
    <ng-content select="tui-badge-notification[tuiSlot='bottom']" />
    <div class="t-border">
        <ng-content select="[tuiSlot='bottom']" />
    </div>
</div>
`,
      styles: [":host{--tui-radius: var(--tui-radius-l);--t-badge-height: 0;--t-corner-offset: calc((var(--tui-radius) * 1.4142 - var(--tui-radius)) * 1 / 1.4142);position:relative;display:inline-block;block-size:-webkit-fit-content;block-size:-moz-fit-content;block-size:fit-content;inline-size:-webkit-max-content;inline-size:max-content;color:var(--tui-background-base)}.t-badge{--t-offset: calc(var(--t-badge-height) * -.5 + var(--t-corner-offset));position:absolute;display:flex}.t-badge_top{top:var(--t-offset);right:var(--t-offset)}.t-badge_bottom{bottom:var(--t-offset);right:var(--t-offset)}.t-border:not(:empty){display:flex;border-radius:6rem;box-shadow:0 0 0 1px currentColor;background:currentColor}\n"]
    }]
  }], null, null);
})();
var TuiBadgedContent = [TuiBadgedContentDirective, TuiBadgedContentComponent];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-items-with-more.mjs
var _c04 = (a0) => ({
  $implicit: a0
});
function TuiItemsWithMoreComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiItemsWithMoreComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, TuiItemsWithMoreComponent_div_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("t-item_hidden", ctx_r3.isHidden(index_r3));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r2);
  }
}
function TuiItemsWithMoreComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const template_r1 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", template_r1);
  }
}
function TuiItemsWithMoreComponent_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵelementContainer(1, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.more || null)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c04, ctx_r3.lastIndex()));
  }
}
function TuiItemsWithMoreComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiItemsWithMoreComponent_ng_template_5_span_0_Template, 2, 4, "span", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r3.isMoreHidden);
  }
}
var TuiItemsWithMoreDirective = class _TuiItemsWithMoreDirective {
  constructor() {
    this.itemsLimit = Infinity;
    this.required = -1;
    this.side = "end";
    this.change$ = new Subject();
  }
  ngOnChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiItemsWithMoreDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiItemsWithMoreDirective,
      inputs: {
        itemsLimit: "itemsLimit",
        required: "required",
        side: "side"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    itemsLimit: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    side: [{
      type: Input
    }]
  });
})();
var TuiItemsWithMoreService = class _TuiItemsWithMoreService extends Observable {
  constructor() {
    super((subscriber) => this.stream$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.directive = inject(TuiItemsWithMoreDirective);
    this.stream$ = merge(this.directive.change$, inject(MutationObserverService, {
      self: true
    }), inject(ResizeObserverService, {
      self: true
    })).pipe(debounceTime(0, tuiZonefreeScheduler()), map(() => this.getOverflowIndex()), distinctUntilChanged(), tuiZoneOptimized(), share());
  }
  getOverflowIndex() {
    const {
      side,
      itemsLimit
    } = this.directive;
    const {
      clientWidth,
      children
    } = this.el;
    const items = Array.from(children, ({
      clientWidth: clientWidth2
    }) => clientWidth2);
    const index = side === "start" ? 0 : items.length - 1;
    const more = children[index]?.tagName === "SPAN" ? items[index] ?? 0 : 0;
    const total = items.reduce((sum, width) => sum + width, 0) - more;
    if (total <= clientWidth && itemsLimit >= items.length) {
      return side === "end" ? itemsLimit : 0;
    }
    return side === "start" ? this.getIndexStart(items, total, more) : this.getIndexEnd(items, total, more);
  }
  getIndexStart(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const min = Number.isFinite(itemsLimit) ? items.length - itemsLimit - 1 : 0;
    const last = items.length - 1;
    const mandatory = required === -1 ? last : required;
    for (let i = 1; i < last; i++) {
      if (i === mandatory + 1) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i, mandatory < min ? min + 1 : min, items.length);
      }
    }
    return items.length;
  }
  getIndexEnd(items, total, more) {
    const {
      required,
      itemsLimit
    } = this.directive;
    const {
      clientWidth
    } = this.el;
    const max = itemsLimit > required ? itemsLimit - 1 : itemsLimit - 2;
    const last = items.length - 1;
    const mandatory = required === -1 ? 0 : required;
    for (let i = last - 1; i > 0; i--) {
      if (i === mandatory) {
        continue;
      }
      total -= items[i] ?? 0;
      if (total + more <= clientWidth) {
        return tuiClamp(i - 1, -1, max);
      }
    }
    return -1;
  }
  static {
    this.ɵfac = function TuiItemsWithMoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiItemsWithMoreService,
      factory: _TuiItemsWithMoreService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiMore = class _TuiMore {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static {
    this.ɵfac = function TuiMore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiMore)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiMore,
      selectors: [["", "tuiMore", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiMore, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiMore]"
    }]
  }], null, null);
})();
var TuiItemsWithMoreComponent = class _TuiItemsWithMoreComponent {
  constructor() {
    this.items = EMPTY_QUERY;
    this.directive = inject(TuiItemsWithMoreDirective);
    this.lastIndex = toSignal(inject(TuiItemsWithMoreService), {
      initialValue: 0
    });
  }
  get isMoreHidden() {
    const {
      side
    } = this.directive;
    return this.lastIndex() >= this.items.length - 1 && side === "end" || !this.lastIndex() && side === "start";
  }
  isHidden(index) {
    const {
      side,
      required
    } = this.directive;
    return index > this.lastIndex() && index !== required && side === "end" || index < this.lastIndex() && index !== required && side === "start";
  }
  static {
    this.ɵfac = function TuiItemsWithMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiItemsWithMoreComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiItemsWithMoreComponent,
      selectors: [["tui-items-with-more"]],
      contentQueries: function TuiItemsWithMoreComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiMore, 5, TemplateRef);
          ɵɵcontentQuery(dirIndex, TuiItem, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.more = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([MutationObserverService, ResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]), ɵɵHostDirectivesFeature([{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "itemsLimit", "required", "required", "side", "side"]
      }]), ɵɵStandaloneFeature],
      decls: 7,
      vars: 6,
      consts: [["template", ""], [4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], ["class", "t-item", 3, "t-item_hidden", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "t-item"], [4, "ngTemplateOutlet"], ["class", "t-item", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TuiItemsWithMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiItemsWithMoreComponent_ng_container_0_Template, 1, 0, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiItemsWithMoreComponent_ng_container_2_Template, 1, 1, "ng-container", 2)(3, TuiItemsWithMoreComponent_div_3_Template, 2, 3, "div", 3)(4, TuiItemsWithMoreComponent_ng_container_4_Template, 1, 1, "ng-container", 2)(5, TuiItemsWithMoreComponent_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 4, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.directive.side === "start");
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.directive.side === "end");
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item[_ngcontent-%COMP%]{flex:0 0 auto}.t-item_hidden[_ngcontent-%COMP%]{position:absolute;visibility:hidden}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiItemsWithMoreComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-items-with-more",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [MutationObserverService, ResizeObserverService, TuiItemsWithMoreService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }],
      hostDirectives: [{
        directive: TuiItemsWithMoreDirective,
        inputs: ["itemsLimit", "required", "side"]
      }],
      template: `<ng-container *ngIf="items.changes | async" />
<ng-container
    *ngIf="directive.side === 'start'"
    [ngTemplateOutlet]="template"
/>
<div
    *ngFor="let item of items; let index = index"
    class="t-item"
    [class.t-item_hidden]="isHidden(index)"
>
    <ng-container *ngTemplateOutlet="item" />
</div>
<ng-container
    *ngIf="directive.side === 'end'"
    [ngTemplateOutlet]="template"
/>
<ng-template #template>
    <span
        *ngIf="!isMoreHidden"
        class="t-item"
    >
        <ng-container
            [ngTemplateOutlet]="more || null"
            [ngTemplateOutletContext]="{$implicit: lastIndex()}"
        />
    </span>
</ng-template>
`,
      styles: [":host{position:relative;display:flex;min-inline-size:0;flex:1;align-items:center;white-space:nowrap}.t-item{flex:0 0 auto}.t-item_hidden{position:absolute;visibility:hidden}\n"]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef,
        descendants: true
      }]
    }],
    more: [{
      type: ContentChild,
      args: [TuiMore, {
        read: TemplateRef
      }]
    }]
  });
})();
var TuiItemsWithMore = [TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiMore, TuiItem];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-breadcrumbs.mjs
function TuiBreadcrumbs_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9)(2, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.items.first);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    ɵɵnextContext(5);
    const separator_r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9);
    ɵɵtemplate(2, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 1, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const item_r4 = ctx_r2.$implicit;
    const last_r5 = ctx_r2.last;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r5);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
}
function TuiBreadcrumbs_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4 !== ctx_r0.items.first || ctx_r0.itemsLimit === 2);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵelementContainer(1, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r6);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_span_1_Template, 2, 1, "span", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const index_r8 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r7 + ctx_r0.offset && i_r7 <= index_r8 && item_r6 !== ctx_r0.items.last);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 14);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function TuiBreadcrumbs_ng_container_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12)(1, "button", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainer(3, 9);
    ɵɵelementEnd();
    ɵɵtemplate(4, TuiBreadcrumbs_ng_container_2_ng_template_4_ng_template_4_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const dropdown_r9 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext(2);
    const separator_r2 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵproperty("iconStart", ctx_r0.icons.ellipsis)("tuiDropdown", dropdown_r9);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.more(), " ");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiBreadcrumbs_ng_container_2_ng_container_1_Template, 3, 2, "ng-container", 4);
    ɵɵelementStart(2, "tui-items-with-more", 6);
    ɵɵtemplate(3, TuiBreadcrumbs_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 7)(4, TuiBreadcrumbs_ng_container_2_ng_template_4_Template, 6, 4, "ng-template", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.itemsLimit !== 2);
    ɵɵadvance();
    ɵɵproperty("itemsLimit", ctx_r0.itemsLimit - 2)("required", ctx_r0.items.length + ctx_r0.offset - 2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function TuiBreadcrumbs_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 18);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("icon", ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.options.icon);
  }
}
function TuiBreadcrumbs_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_ng_template_3_tui_icon_0_Template, 1, 1, "tui-icon", 17)(1, TuiBreadcrumbs_ng_template_3_ng_template_1_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const char_r10 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.options.icon.length > 1)("ngIfElse", char_r10);
  }
}
function TuiBreadcrumbs_ng_template_5_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 9);
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const separator_r2 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", separator_r2);
  }
}
function TuiBreadcrumbs_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementContainer(1, 9);
    ɵɵtemplate(2, TuiBreadcrumbs_ng_template_5_ng_container_0_ng_container_2_Template, 1, 1, "ng-container", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r11);
    ɵɵadvance();
    ɵɵproperty("ngIf", !last_r12);
  }
}
function TuiBreadcrumbs_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiBreadcrumbs_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
var TUI_BREADCRUMBS_DEFAULT_OPTIONS = {
  icon: "@tui.chevron-right",
  size: "m",
  itemsLimit: 0
};
var TUI_BREADCRUMBS_OPTIONS = tuiCreateToken(TUI_BREADCRUMBS_DEFAULT_OPTIONS);
function tuiBreadcrumbsOptionsProvider(options) {
  return tuiProvideOptions(TUI_BREADCRUMBS_OPTIONS, options, TUI_BREADCRUMBS_DEFAULT_OPTIONS);
}
var TuiBreadcrumbs = class _TuiBreadcrumbs {
  constructor() {
    this.items = EMPTY_QUERY;
    this.options = inject(TUI_BREADCRUMBS_OPTIONS);
    this.icons = inject(TUI_COMMON_ICONS);
    this.more = toSignal(inject(TUI_MORE_WORD), {
      initialValue: ""
    });
    this.size = this.options.size;
    this.itemsLimit = this.options.itemsLimit;
  }
  get limit() {
    return this.itemsLimit ? this.itemsLimit - 2 : Infinity;
  }
  get offset() {
    return this.itemsLimit === 2 ? 1 : 0;
  }
  static {
    this.ɵfac = function TuiBreadcrumbs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiBreadcrumbs)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiBreadcrumbs,
      selectors: [["tui-breadcrumbs"]],
      contentQueries: function TuiBreadcrumbs_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiBreadcrumbs_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size",
        itemsLimit: "itemsLimit"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })]), ɵɵStandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["separator", ""], ["plain", ""], ["dropdown", ""], ["char", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["side", "start", 3, "itemsLimit", "required"], [4, "ngFor", "ngForOf"], ["tuiMore", ""], [3, "ngTemplateOutlet"], [4, "tuiItem"], [3, "ngTemplateOutlet", 4, "ngIf"], [1, "t-more"], ["appearance", "flat", "size", "xs", "tuiDropdownOpen", "", "tuiIconButton", "", "type", "button", 3, "iconStart", "tuiDropdown"], ["size", "s"], ["tuiOption", "", "class", "t-option", 4, "ngIf"], ["tuiOption", "", 1, "t-option"], ["class", "t-icon", 3, "icon", 4, "ngIf", "ngIfElse"], [1, "t-icon", 3, "icon"], [1, "t-char"]],
      template: function TuiBreadcrumbs_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiBreadcrumbs_ng_container_0_Template, 1, 0, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, TuiBreadcrumbs_ng_container_2_Template, 5, 4, "ng-container", 5)(3, TuiBreadcrumbs_ng_template_3_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, TuiBreadcrumbs_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const plain_r13 = ɵɵreference(6);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.items.changes));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.itemsLimit > 1)("ngIfElse", plain_r13);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiDataListComponent, TuiDropdownDirective, TuiDropdownOpen, TuiIcon, TuiItemsWithMoreComponent, TuiMore, TuiItem],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}[data-size=m][_nghost-%COMP%]{font:var(--tui-font-text-s);line-height:1.5rem;block-size:1.5rem}[data-size=l][_nghost-%COMP%]{font:var(--tui-font-text-m);line-height:2.5rem;block-size:2.5rem}.t-more[_ngcontent-%COMP%]{display:flex;align-items:center}.t-option[_ngcontent-%COMP%]    >*{color:var(--tui-text-primary)!important;background:transparent!important}.t-icon[_ngcontent-%COMP%]{margin:0 .5rem;font-size:1rem}.t-char[_ngcontent-%COMP%]{margin:0 .375rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiBreadcrumbs, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-breadcrumbs",
      imports: [AsyncPipe, NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiLinkOptionsProvider({
        appearance: "action-grayscale"
      }), tuiHintOptionsProvider({
        direction: "bottom"
      })],
      host: {
        "[attr.data-size]": "size"
      },
      template: '<ng-container *ngIf="items.changes | async" />\n<ng-container *ngIf="itemsLimit > 1; else plain">\n    <ng-container *ngIf="itemsLimit !== 2">\n        <ng-container [ngTemplateOutlet]="items.first" />\n        <ng-container [ngTemplateOutlet]="separator" />\n    </ng-container>\n    <tui-items-with-more\n        side="start"\n        [itemsLimit]="itemsLimit - 2"\n        [required]="items.length + offset - 2"\n    >\n        <ng-container *ngFor="let item of items; let last = last">\n            <ng-container *ngIf="item !== items.first || itemsLimit === 2">\n                <ng-container *tuiItem>\n                    <ng-container [ngTemplateOutlet]="item" />\n                    <ng-container\n                        *ngIf="!last"\n                        [ngTemplateOutlet]="separator"\n                    />\n                </ng-container>\n            </ng-container>\n        </ng-container>\n        <ng-template\n            let-index\n            tuiMore\n        >\n            <span class="t-more">\n                <button\n                    appearance="flat"\n                    size="xs"\n                    tuiDropdownOpen\n                    tuiIconButton\n                    type="button"\n                    [iconStart]="icons.ellipsis"\n                    [tuiDropdown]="dropdown"\n                >\n                    {{ more() }}\n                </button>\n                <ng-container [ngTemplateOutlet]="separator" />\n            </span>\n            <ng-template #dropdown>\n                <tui-data-list size="s">\n                    <ng-container *ngFor="let item of items; let i = index">\n                        <span\n                            *ngIf="i + offset && i <= index && item !== items.last"\n                            tuiOption\n                            class="t-option"\n                        >\n                            <ng-container [ngTemplateOutlet]="item" />\n                        </span>\n                    </ng-container>\n                </tui-data-list>\n            </ng-template>\n        </ng-template>\n    </tui-items-with-more>\n</ng-container>\n<ng-template #separator>\n    <tui-icon\n        *ngIf="options.icon.length > 1; else char"\n        class="t-icon"\n        [icon]="options.icon"\n    />\n    <ng-template #char>\n        <span class="t-char">{{ options.icon }}</span>\n    </ng-template>\n</ng-template>\n<ng-template #plain>\n    <ng-container *ngFor="let item of items; let last = last">\n        <ng-container [ngTemplateOutlet]="item" />\n        <ng-container\n            *ngIf="!last"\n            [ngTemplateOutlet]="separator"\n        />\n    </ng-container>\n</ng-template>\n',
      styles: [":host{display:flex;align-items:center;white-space:nowrap;color:var(--tui-text-secondary)}:host[data-size=m]{font:var(--tui-font-text-s);line-height:1.5rem;block-size:1.5rem}:host[data-size=l]{font:var(--tui-font-text-m);line-height:2.5rem;block-size:2.5rem}.t-more{display:flex;align-items:center}.t-option ::ng-deep>*{color:var(--tui-text-primary)!important;background:transparent!important}.t-icon{margin:0 .5rem;font-size:1rem}.t-char{margin:0 .375rem}\n"]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    size: [{
      type: Input
    }],
    itemsLimit: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-button-loading.mjs
var _c05 = ["tuiButton", "", "loading", ""];
var _c14 = ["*"];
var TuiButtonLoading = class _TuiButtonLoading {
  constructor() {
    this.options = inject(TUI_BUTTON_OPTIONS);
    this.size = this.options.size;
    this.loading = false;
  }
  get loaderSize() {
    return tuiSizeBigger(this.size) ? "m" : "s";
  }
  get label() {
    return tuiIsString(this.loading) ? this.loading : "";
  }
  onClick(event) {
    if (this.loading) {
      event.stopPropagation();
    }
  }
  static {
    this.ɵfac = function TuiButtonLoading_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiButtonLoading)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiButtonLoading,
      selectors: [["", "tuiButton", "", "loading", ""], ["", "tuiIconButton", "", "loading", ""]],
      hostVars: 3,
      hostBindings: function TuiButtonLoading_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click.capture", function TuiButtonLoading_click_capture_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-disabled", ctx.loading);
          ɵɵclassProp("_loading", ctx.loading);
        }
      },
      inputs: {
        size: "size",
        loading: "loading"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c05,
      ngContentSelectors: _c14,
      decls: 2,
      vars: 4,
      consts: [["aria-live", "polite", "role", "status", 1, "t-loader", 3, "inheritColor", "showLoader", "size", "textContent"]],
      template: function TuiButtonLoading_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵelement(1, "tui-loader", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("inheritColor", true)("showLoader", !!ctx.loading)("size", ctx.loaderSize)("textContent", ctx.label);
        }
      },
      dependencies: [TuiLoader],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiButtonLoading, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiButton][loading],[tuiIconButton][loading]",
      imports: [TuiLoader],
      template: `
        <ng-content />
        <tui-loader
            aria-live="polite"
            role="status"
            class="t-loader"
            [inheritColor]="true"
            [showLoader]="!!loading"
            [size]="loaderSize"
            [textContent]="label"
        />
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.aria-disabled]": "loading",
        "[class._loading]": "loading",
        "(click.capture)": "onClick($event)"
      }
    }]
  }], null, {
    size: [{
      type: Input
    }],
    loading: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-pan.mjs
var TuiPanService = class _TuiPanService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const doc = inject(DOCUMENT);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(el, "mousedown")).pipe(switchMap(() => merge(tuiTypedFromEvent(doc, "touchmove", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length < 2), map(({
      touches
    }) => touches[0])), tuiTypedFromEvent(doc, "mousemove"))), pairwise(), map(([first, second]) => {
      const deltaX = (second?.clientX ?? 0) - (first?.clientX ?? 0);
      const deltaY = (second?.clientY ?? 0) - (first?.clientY ?? 0);
      return [deltaX, deltaY];
    }), takeUntil(merge(tuiTypedFromEvent(doc, "touchend"), tuiTypedFromEvent(doc, "mouseup"))), repeat()).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiPanService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPanService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPanService,
      factory: _TuiPanService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPanService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiPan = class _TuiPan {
  constructor() {
    this.tuiPan = inject(TuiPanService);
  }
  static {
    this.ɵfac = function TuiPan_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPan)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPan,
      selectors: [["", "tuiPan", ""]],
      outputs: {
        tuiPan: "tuiPan"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiPanService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPan, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPan]",
      providers: [TuiPanService]
    }]
  }], null, {
    tuiPan: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-swipe.mjs
var TUI_SWIPE_OPTIONS = tuiCreateToken({
  timeout: 500,
  threshold: 30
});
var TuiSwipeService = class _TuiSwipeService extends Observable {
  constructor() {
    const doc = inject(DOCUMENT);
    const el = tuiInjectElement();
    const {
      timeout,
      threshold
    } = inject(TUI_SWIPE_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }), tuiTypedFromEvent(doc, "touchend")).pipe(pairwise(), filter(([first, second]) => !!first.touches.length && first.touches[0]?.identifier === second.changedTouches[0]?.identifier), map(([start, end]) => {
      const startX = start.touches[0]?.clientX ?? 0;
      const startY = start.touches[0]?.clientY ?? 0;
      const endX = end.changedTouches[0]?.clientX ?? 0;
      const endY = end.changedTouches[0]?.clientY ?? 0;
      const distanceX = startX - endX;
      const distanceY = startY - endY;
      const duration = end.timeStamp - start.timeStamp;
      if ((Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) && duration < timeout) {
        return {
          direction: tuiGetSwipeDirection(distanceX, distanceY),
          events: [start, end]
        };
      }
      return null;
    }), filter(tuiIsPresent)).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiSwipeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiSwipeService,
      factory: _TuiSwipeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipeService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
function tuiGetSwipeDirection(deltaX, deltaY) {
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    return deltaY > 0 ? "top" : "bottom";
  }
  return deltaX > 0 ? "left" : "right";
}
var TuiSwipe = class _TuiSwipe {
  constructor() {
    this.tuiSwipe = inject(TuiSwipeService);
  }
  static {
    this.ɵfac = function TuiSwipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSwipe)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSwipe,
      selectors: [["", "tuiSwipe", ""]],
      outputs: {
        tuiSwipe: "tuiSwipe"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiSwipeService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSwipe, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiSwipe]",
      providers: [TuiSwipeService]
    }]
  }], null, {
    tuiSwipe: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-carousel.mjs
function TuiCarouselComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiCarouselComponent_fieldset_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "fieldset", 5);
    ɵɵlistener("waIntersectionObservee", function TuiCarouselComponent_fieldset_5_Template_fieldset_waIntersectionObservee_0_listener($event) {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView($event[0] && ctx_r2.onIntersection($event[0], i_r2));
    });
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.isDisabled(i_r2))("ngStyle", ctx_r2.getStyle(ctx_r2.itemsCount));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", item_r4);
  }
}
var TuiCarouselDirective = class _TuiCarouselDirective extends Observable {
  constructor() {
    super((subscriber) => this.output$.subscribe(subscriber));
    this.el = tuiInjectElement();
    this.visible$ = inject(WA_PAGE_VISIBILITY);
    this.duration$ = new BehaviorSubject(0);
    this.running$ = merge(tuiTypedFromEvent(this.el, "mouseenter").pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, "touchstart").pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, "touchend").pipe(map(TUI_TRUE_HANDLER)), tuiTypedFromEvent(this.el, "mouseleave").pipe(map(TUI_TRUE_HANDLER)), this.visible$);
    this.output$ = combineLatest([this.duration$, this.running$]).pipe(tuiIfMap(([duration]) => interval(duration), (values) => values.every(Boolean)));
  }
  set duration(duration) {
    this.duration$.next(Number.isNaN(duration) ? this.duration$.value : duration);
  }
  static {
    this.ɵfac = function TuiCarouselDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCarouselDirective,
      inputs: {
        duration: "duration"
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselDirective, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    duration: [{
      type: Input
    }]
  });
})();
var TuiCarouselAutoscroll = class _TuiCarouselAutoscroll {
  constructor() {
    this.tuiCarouselAutoscroll = inject(TuiCarouselDirective);
  }
  static {
    this.ɵfac = function TuiCarouselAutoscroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselAutoscroll)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCarouselAutoscroll,
      selectors: [["", "tuiCarouselAutoscroll", ""]],
      outputs: {
        tuiCarouselAutoscroll: "tuiCarouselAutoscroll"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselAutoscroll, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCarouselAutoscroll]"
    }]
  }], null, {
    tuiCarouselAutoscroll: [{
      type: Output
    }]
  });
})();
var TuiCarouselScroll = class _TuiCarouselScroll {
  constructor() {
    this.el = tuiInjectElement();
    this.tuiCarouselScroll = tuiTypedFromEvent(this.el, "wheel").pipe(filter(({
      deltaX
    }) => Math.abs(deltaX) > 20), throttleTime(500, tuiZonefreeScheduler()), map(({
      deltaX
    }) => Math.sign(deltaX)), tap(() => {
      this.el.scrollLeft = 10;
    }));
  }
  static {
    this.ɵfac = function TuiCarouselScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselScroll)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCarouselScroll,
      selectors: [["", "tuiCarouselScroll", ""]],
      outputs: {
        tuiCarouselScroll: "tuiCarouselScroll"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselScroll, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCarouselScroll]"
    }]
  }], null, {
    tuiCarouselScroll: [{
      type: Output
    }]
  });
})();
var TuiCarouselComponent = class _TuiCarouselComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.cdr = inject(ChangeDetectorRef);
    this.isMobile = inject(TUI_IS_MOBILE);
    this.directive = inject(TuiCarouselDirective);
    this.translate = 0;
    this.items = EMPTY_QUERY;
    this.transitioned = true;
    this.index = 0;
    this.draggable = false;
    this.itemsCount = 1;
    this.indexChange = new EventEmitter();
  }
  set indexSetter(index) {
    this.index = index;
    this.directive.duration = NaN;
  }
  next() {
    if (this.items && this.index === this.items.length - this.itemsCount) {
      return;
    }
    this.updateIndex(this.index + 1);
  }
  prev() {
    this.updateIndex(this.index - 1);
  }
  get transform() {
    const x = this.transitioned ? this.computedTranslate : this.translate;
    return `translateX(${100 * x}%)`;
  }
  getStyle(itemsCount) {
    const percent = `${100 / itemsCount}%`;
    return {
      flexBasis: percent,
      minWidth: percent,
      maxWidth: percent
    };
  }
  onTransitioned(transitioned) {
    this.transitioned = transitioned;
    if (!transitioned) {
      this.translate = this.computedTranslate;
    }
  }
  isDisabled(index) {
    return index < this.index || index > this.index + this.itemsCount;
  }
  onIntersection({
    intersectionRatio
  }, index) {
    if (intersectionRatio && intersectionRatio !== 1 && !this.transitioned) {
      this.updateIndex(index - Math.floor(this.itemsCount / 2));
    }
  }
  onScroll(delta) {
    if (!this.isMobile) {
      if (delta > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  onPan(x) {
    if (!this.computedDraggable) {
      return;
    }
    const min = 1 - this.items.length / this.itemsCount;
    this.translate = tuiClamp(x / this.el.clientWidth + this.translate, min, 0);
  }
  onSwipe(direction) {
    if (direction === "left") {
      this.next();
    } else if (direction === "right") {
      this.prev();
    }
  }
  onAutoscroll() {
    this.updateIndex(this.index === this.items.length - 1 ? 0 : this.index + 1);
  }
  get computedTranslate() {
    return -this.index / this.itemsCount;
  }
  get computedDraggable() {
    return this.isMobile || this.draggable;
  }
  updateIndex(index) {
    this.index = tuiClamp(index, 0, this.items.length - 1);
    this.indexChange.emit(this.index);
    this.cdr.markForCheck();
  }
  static {
    this.ɵfac = function TuiCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCarouselComponent,
      selectors: [["tui-carousel"]],
      contentQueries: function TuiCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      hostVars: 4,
      hostBindings: function TuiCarouselComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("touchstart", function TuiCarouselComponent_touchstart_HostBindingHandler() {
            return ctx.onTransitioned(false);
          })("touchend", function TuiCarouselComponent_touchend_HostBindingHandler() {
            return ctx.onTransitioned(true);
          })("mousedown", function TuiCarouselComponent_mousedown_HostBindingHandler() {
            return ctx.onTransitioned(false);
          })("mouseup.silent", function TuiCarouselComponent_mouseup_silent_HostBindingHandler() {
            return ctx.onTransitioned(true);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵclassProp("_transitioned", ctx.transitioned)("_draggable", ctx.draggable);
        }
      },
      inputs: {
        draggable: "draggable",
        itemsCount: "itemsCount",
        indexSetter: [0, "index", "indexSetter"]
      },
      outputs: {
        indexChange: "indexChange"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiCarouselDirective,
        inputs: ["duration", "duration"]
      }]), ɵɵStandaloneFeature],
      decls: 6,
      vars: 6,
      consts: [[4, "ngIf"], [1, "t-scroller", 3, "tuiCarouselScroll"], ["waIntersectionObserver", "", "waIntersectionRoot", "", "waIntersectionRootMargin", "100px 1000000px 100px -51%", "waIntersectionThreshold", "0,1", 1, "t-wrapper"], [1, "t-items", 3, "tuiCarouselAutoscroll", "tuiPan", "tuiSwipe"], ["class", "t-item", 3, "disabled", "ngStyle", "waIntersectionObservee", 4, "ngFor", "ngForOf"], [1, "t-item", 3, "waIntersectionObservee", "disabled", "ngStyle"], [3, "ngTemplateOutlet"]],
      template: function TuiCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCarouselComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵlistener("tuiCarouselScroll", function TuiCarouselComponent_Template_div_tuiCarouselScroll_2_listener($event) {
            return ctx.onScroll($event);
          });
          ɵɵelementStart(3, "div", 2)(4, "div", 3);
          ɵɵlistener("tuiCarouselAutoscroll", function TuiCarouselComponent_Template_div_tuiCarouselAutoscroll_4_listener() {
            return ctx.onAutoscroll();
          })("tuiPan", function TuiCarouselComponent_Template_div_tuiPan_4_listener($event) {
            return ctx.onPan($event[0]);
          })("tuiSwipe", function TuiCarouselComponent_Template_div_tuiSwipe_4_listener($event) {
            return ctx.onSwipe($event.direction);
          });
          ɵɵtemplate(5, TuiCarouselComponent_fieldset_5_Template, 2, 3, "fieldset", 4);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 4, ctx.items.changes));
          ɵɵadvance(4);
          ɵɵstyleProp("transform", ctx.transform);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, NgStyle, NgTemplateOutlet, TuiCarouselAutoscroll, TuiCarouselScroll, TuiPan, TuiSwipe, WaIntersectionObserverDirective, WaIntersectionObservee, WaIntersectionRoot],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}._draggable[_nghost-%COMP%]{-webkit-user-select:none;user-select:none}._draggable[_nghost-%COMP%]:hover{cursor:grab}._draggable[_nghost-%COMP%]:active{cursor:grabbing}.t-items[_ngcontent-%COMP%]{display:flex}._transitioned[_nghost-%COMP%]   .t-items[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}  [tuiCarouselButtons] [tuiIconButton]{border-radius:100%}.t-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-inline-size:100%;max-inline-size:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper[_ngcontent-%COMP%]{position:sticky;left:0;right:0;min-inline-size:100%;overflow:hidden}.t-scroller[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none}.t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar, .t-scroller[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{display:none}.t-scroller[_ngcontent-%COMP%]:before, .t-scroller[_ngcontent-%COMP%]:after{content:"";display:block;min-inline-size:1rem}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCarouselComponent.prototype, "getStyle", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-carousel",
      imports: [AsyncPipe, NgForOf, NgIf, NgStyle, NgTemplateOutlet, TuiCarouselAutoscroll, TuiCarouselScroll, TuiPan, TuiSwipe, WaIntersectionObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiCarouselDirective,
        inputs: ["duration"]
      }],
      host: {
        "[class._transitioned]": "transitioned",
        "[class._draggable]": "draggable",
        "(touchstart)": "onTransitioned(false)",
        "(touchend)": "onTransitioned(true)",
        "(mousedown)": "onTransitioned(false)",
        "(document:mouseup.silent)": "onTransitioned(true)"
      },
      template: '<ng-container *ngIf="items.changes | async" />\n<div\n    class="t-scroller"\n    (tuiCarouselScroll)="onScroll($event)"\n>\n    <div\n        waIntersectionObserver\n        waIntersectionRoot\n        waIntersectionRootMargin="100px 1000000px 100px -51%"\n        waIntersectionThreshold="0,1"\n        class="t-wrapper"\n    >\n        <div\n            class="t-items"\n            [style.transform]="transform"\n            (tuiCarouselAutoscroll)="onAutoscroll()"\n            (tuiPan)="onPan($event[0])"\n            (tuiSwipe)="onSwipe($event.direction)"\n        >\n            <fieldset\n                *ngFor="let item of items; let i = index"\n                class="t-item"\n                [disabled]="isDisabled(i)"\n                [ngStyle]="getStyle(itemsCount)"\n                (waIntersectionObservee)="$event[0] && onIntersection($event[0], i)"\n            >\n                <ng-container [ngTemplateOutlet]="item" />\n            </fieldset>\n        </div>\n    </div>\n</div>\n',
      styles: [':host{position:relative;display:block;overflow:hidden}:host._draggable{-webkit-user-select:none;user-select:none}:host._draggable:hover{cursor:grab}:host._draggable:active{cursor:grabbing}.t-items{display:flex}:host._transitioned .t-items{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}::ng-deep [tuiCarouselButtons] [tuiIconButton]{border-radius:100%}.t-item{display:flex;flex-direction:column;justify-content:center;padding:var(--tui-carousel-padding, 0 1.25rem);flex:1;min-inline-size:100%;max-inline-size:100%;box-sizing:border-box;border:none;margin:0}.t-wrapper{position:sticky;left:0;right:0;min-inline-size:100%;overflow:hidden}.t-scroller{scrollbar-width:none;-ms-overflow-style:none;display:flex;overflow:auto;overscroll-behavior-x:none}.t-scroller::-webkit-scrollbar,.t-scroller::-webkit-scrollbar-thumb{display:none}.t-scroller:before,.t-scroller:after{content:"";display:block;min-inline-size:1rem}\n']
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    draggable: [{
      type: Input
    }],
    itemsCount: [{
      type: Input
    }],
    indexChange: [{
      type: Output
    }],
    indexSetter: [{
      type: Input,
      args: ["index"]
    }],
    getStyle: []
  });
})();
var TuiCarouselButtons = class _TuiCarouselButtons {
  static {
    this.ɵfac = function TuiCarouselButtons_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCarouselButtons)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiCarouselButtons,
      selectors: [["", "tuiCarouselButtons", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "m"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCarouselButtons, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiCarouselButtons]",
      providers: [tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "m"
      })]
    }]
  }], null, null);
})();
var TuiCarousel = [TuiItem, TuiCarouselComponent, TuiCarouselDirective, TuiCarouselAutoscroll, TuiCarouselButtons, TuiCarouselScroll];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-chip.mjs
var TUI_CHIP_DEFAULT_OPTIONS = {
  appearance: "neutral",
  size: "s"
};
var TUI_CHIP_OPTIONS = tuiCreateToken(TUI_CHIP_DEFAULT_OPTIONS);
function tuiChipOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHIP_OPTIONS, options, TUI_CHIP_DEFAULT_OPTIONS);
}
var TuiChipStyles = class _TuiChipStyles {
  static {
    this.ɵfac = function TuiChipStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChipStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiChipStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-chip"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiChipStyles_Template(rf, ctx) {
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChipStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-chip"
      },
      styles: ["tui-chip,[tuiChip]{--t-gap: .125rem;--t-margin: -.125rem;--t-icon-size: 1rem;--t-padding: 0 .625rem;--t-size: var(--tui-height-s);-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:inline-flex;align-items:center;flex-shrink:0;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle;max-inline-size:100%;gap:calc(var(--t-gap, var(--t-0, 0rem)) - 2 * var(--t-margin, 0rem));font:var(--tui-font-text-s);border-radius:var(--tui-radius-m);padding:var(--t-padding);block-size:var(--t-size);inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;isolation:isolate}tui-chip>img,[tuiChip]>img,tui-chip>tui-svg,[tuiChip]>tui-svg,tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip>tui-avatar,[tuiChip]>tui-avatar,tui-chip>tui-badge,[tuiChip]>tui-badge,tui-chip>[tuiBadge],[tuiChip]>[tuiBadge],tui-chip>[tuiRadio],[tuiChip]>[tuiRadio],tui-chip>[tuiSwitch],[tuiChip]>[tuiSwitch],tui-chip>[tuiCheckbox],[tuiChip]>[tuiCheckbox],tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{margin:var(--t-margin)}tui-chip:-webkit-any(a,button,select,textarea,input,label),[tuiChip]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip:-moz-any(a,button,select,textarea,input,label),[tuiChip]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-chip>tui-icon,[tuiChip]>tui-icon,tui-chip[tuiIcons]:before,[tuiChip][tuiIcons]:before,tui-chip[tuiIcons]:after,[tuiChip][tuiIcons]:after{font-size:var(--t-icon-size)!important}tui-chip>[tuiIconButton],[tuiChip]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=xxs],[tuiChip][data-size=xxs]{--t-gap: var(--t-0, 0rem);--t-padding: 0 .25rem;--t-size: 1rem;--t-icon-size: .75rem;font:var(--tui-font-text-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xxs]>[tuiIconButton],[tuiChip][data-size=xxs]>[tuiIconButton]{margin:-.5rem;transform:scale(.75)}tui-chip[data-size=xs],[tuiChip][data-size=xs]{--t-padding: 0 .375rem;--t-size: var(--tui-height-xs);border-radius:var(--tui-radius-xs)}tui-chip[data-size=xs]>[tuiIconButton],[tuiChip][data-size=xs]>[tuiIconButton]{margin:-.375rem}tui-chip[data-size=m],[tuiChip][data-size=m]{--t-margin: -.375rem;--t-icon-size: 1.5rem;--t-padding: 0 1rem;--t-size: var(--tui-height-m);font:var(--tui-font-text-m)}tui-chip[data-size=m]>[tuiIconButton],[tuiChip][data-size=m]>[tuiIconButton]{margin:-.75rem}tui-chip>img,[tuiChip]>img,tui-chip tui-avatar,[tuiChip] tui-avatar{inline-size:1.5rem;margin-inline-start:-.375rem}tui-chip>input[tuiChip],[tuiChip]>input[tuiChip]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:-1;margin:0}tui-chip[tuiAppearance][data-appearance=error],[tuiChip][tuiAppearance][data-appearance=error],tui-chip[tuiAppearance][data-appearance=success],[tuiChip][tuiAppearance][data-appearance=success],tui-chip[tuiAppearance][data-appearance=negative],[tuiChip][tuiAppearance][data-appearance=negative],tui-chip[tuiAppearance][data-appearance=positive],[tuiChip][tuiAppearance][data-appearance=positive],tui-chip[tuiAppearance][data-appearance=warning],[tuiChip][tuiAppearance][data-appearance=warning],tui-chip[tuiAppearance][data-appearance=info],[tuiChip][tuiAppearance][data-appearance=info],tui-chip[tuiAppearance][data-appearance=neutral],[tuiChip][tuiAppearance][data-appearance=neutral]{color:var(--tui-text-primary)}\n"]
    }]
  }], null, null);
})();
var TuiChip = class _TuiChip {
  constructor() {
    this.options = inject(TUI_CHIP_OPTIONS);
    this.nothing = tuiWithStyles(TuiChipStyles);
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiChip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiChip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiChip,
      selectors: [["tui-chip"], ["", "tuiChip", ""]],
      hostVars: 1,
      hostBindings: function TuiChip_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })]), ɵɵHostDirectivesFeature([TuiWithAppearance, TuiWithIcons])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiChip, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-chip,[tuiChip]",
      providers: [tuiAppearanceOptionsProvider(TUI_CHIP_OPTIONS), tuiSwitchOptionsProvider({
        size: "s"
      }), tuiCheckboxOptionsProvider({
        size: "s"
      }), tuiAvatarOptionsProvider({
        size: "xs"
      }), tuiButtonOptionsProvider({
        size: "xs",
        appearance: "icon"
      })],
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

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-comment.mjs
var TuiCommentStyles = class _TuiCommentStyles {
  static {
    this.ɵfac = function TuiCommentStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCommentStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCommentStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-comment"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiCommentStyles_Template(rf, ctx) {
      },
      styles: [`[tuiComment]{position:relative;display:inline-flex;font:var(--tui-font-text-m);color:#fff;padding:.5rem .75rem;border-radius:1rem;line-height:1rem;background:var(--tui-background-accent-2);align-items:center;justify-content:center}[tuiComment]:before{content:"";position:absolute;bottom:100%;left:50%;inline-size:1.5625rem;block-size:.5625rem;background:inherit;transform:translate(-50%);-webkit-mask:url("data:image/svg+xml,%3Csvg width='25' height='9' viewBox='0 0 25 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.23309 6.67813L7.56191 3.83178C9.4546 1.5185 10.4009 0.361853 11.5998 0.10488C12.0834 0.00123882 12.5834 0.00123882 13.0669 0.10488C14.2658 0.361853 15.2121 1.5185 17.1048 3.83178L19.4337 6.67813C20.636 8.14771 22.4346 9 24.3334 9H0.333374C2.23217 9 4.0307 8.14772 5.23309 6.67813Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat;mask:url("data:image/svg+xml,%3Csvg width='25' height='9' viewBox='0 0 25 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.23309 6.67813L7.56191 3.83178C9.4546 1.5185 10.4009 0.361853 11.5998 0.10488C12.0834 0.00123882 12.5834 0.00123882 13.0669 0.10488C14.2658 0.361853 15.2121 1.5185 17.1048 3.83178L19.4337 6.67813C20.636 8.14771 22.4346 9 24.3334 9H0.333374C2.23217 9 4.0307 8.14772 5.23309 6.67813Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat}[tuiComment][data-direction=bottom]:before{top:100%;bottom:auto;transform:translate(-50%) rotate(180deg)}[tuiComment][data-direction=left]:before{left:auto;top:50%;right:100%;transform:translate(.785rem,-50%) rotate(-90deg)}[tuiComment][data-direction=right]:before{top:50%;left:100%;transform:translate(-.785rem,-50%) rotate(90deg)}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCommentStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-comment"
      },
      styles: [`[tuiComment]{position:relative;display:inline-flex;font:var(--tui-font-text-m);color:#fff;padding:.5rem .75rem;border-radius:1rem;line-height:1rem;background:var(--tui-background-accent-2);align-items:center;justify-content:center}[tuiComment]:before{content:"";position:absolute;bottom:100%;left:50%;inline-size:1.5625rem;block-size:.5625rem;background:inherit;transform:translate(-50%);-webkit-mask:url("data:image/svg+xml,%3Csvg width='25' height='9' viewBox='0 0 25 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.23309 6.67813L7.56191 3.83178C9.4546 1.5185 10.4009 0.361853 11.5998 0.10488C12.0834 0.00123882 12.5834 0.00123882 13.0669 0.10488C14.2658 0.361853 15.2121 1.5185 17.1048 3.83178L19.4337 6.67813C20.636 8.14771 22.4346 9 24.3334 9H0.333374C2.23217 9 4.0307 8.14772 5.23309 6.67813Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat;mask:url("data:image/svg+xml,%3Csvg width='25' height='9' viewBox='0 0 25 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.23309 6.67813L7.56191 3.83178C9.4546 1.5185 10.4009 0.361853 11.5998 0.10488C12.0834 0.00123882 12.5834 0.00123882 13.0669 0.10488C14.2658 0.361853 15.2121 1.5185 17.1048 3.83178L19.4337 6.67813C20.636 8.14771 22.4346 9 24.3334 9H0.333374C2.23217 9 4.0307 8.14772 5.23309 6.67813Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat}[tuiComment][data-direction=bottom]:before{top:100%;bottom:auto;transform:translate(-50%) rotate(180deg)}[tuiComment][data-direction=left]:before{left:auto;top:50%;right:100%;transform:translate(.785rem,-50%) rotate(-90deg)}[tuiComment][data-direction=right]:before{top:50%;left:100%;transform:translate(-.785rem,-50%) rotate(90deg)}
`]
    }]
  }], null, null);
})();
var TuiComment = class _TuiComment {
  constructor() {
    this.nothing = tuiWithStyles(TuiCommentStyles);
    this.tuiComment = "top";
  }
  static {
    this.ɵfac = function TuiComment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiComment)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiComment,
      selectors: [["", "tuiComment", ""]],
      hostVars: 1,
      hostBindings: function TuiComment_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-direction", ctx.tuiComment);
        }
      },
      inputs: {
        tuiComment: "tuiComment"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiComment, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiComment]",
      host: {
        "[attr.data-direction]": "tuiComment"
      }
    }]
  }], null, {
    tuiComment: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-compass.mjs
var TuiCompass = class _TuiCompass {
  constructor() {
    this.degrees = NaN;
  }
  static {
    this.ɵfac = function TuiCompass_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCompass)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCompass,
      selectors: [["tui-compass"]],
      hostVars: 2,
      hostBindings: function TuiCompass_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-degrees", ctx.degrees, "deg");
        }
      },
      inputs: {
        degrees: "degrees"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiCompass_Template(rf, ctx) {
      },
      styles: [`tui-compass{position:relative;display:inline-block;color:var(--tui-background-accent-1);border-radius:50%;inline-size:1rem;block-size:1rem;border:.1875rem solid var(--tui-background-base);box-shadow:0 0 .1875rem #0000004d;transform-style:preserve-3d}tui-compass:before{content:"";position:absolute;top:0;left:.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 8.99993C4 8 8 8 12 8.99993C9.91509 5.73239 8.5 3 6 0C3.5 3 2 5.5 0 8.99993Z"/></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 8.99993C4 8 8 8 12 8.99993C9.91509 5.73239 8.5 3 6 0C3.5 3 2 5.5 0 8.99993Z"/></svg>');transform:rotate(var(--t-degrees)) translateY(-.625rem) translateZ(-1rem);inline-size:.75rem;block-size:1rem;background:currentColor}tui-compass:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";border-radius:inherit;background:currentColor linear-gradient(-45deg,rgba(0,0,0,.2),transparent)}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCompass, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-compass",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--t-degrees.deg]": "degrees"
      },
      styles: [`tui-compass{position:relative;display:inline-block;color:var(--tui-background-accent-1);border-radius:50%;inline-size:1rem;block-size:1rem;border:.1875rem solid var(--tui-background-base);box-shadow:0 0 .1875rem #0000004d;transform-style:preserve-3d}tui-compass:before{content:"";position:absolute;top:0;left:.125rem;-webkit-mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 8.99993C4 8 8 8 12 8.99993C9.91509 5.73239 8.5 3 6 0C3.5 3 2 5.5 0 8.99993Z"/></svg>');mask-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><path d="M0 8.99993C4 8 8 8 12 8.99993C9.91509 5.73239 8.5 3 6 0C3.5 3 2 5.5 0 8.99993Z"/></svg>');transform:rotate(var(--t-degrees)) translateY(-.625rem) translateZ(-1rem);inline-size:.75rem;block-size:1rem;background:currentColor}tui-compass:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";border-radius:inherit;background:currentColor linear-gradient(-45deg,rgba(0,0,0,.2),transparent)}
`]
    }]
  }], null, {
    degrees: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-confirm.mjs
function TuiConfirm_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 2);
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r1, ɵɵsanitizeHtml);
  }
}
function TuiConfirm_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "button", 4);
    ɵɵlistener("click", function TuiConfirm_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.context.completeWith(false));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 5);
    ɵɵlistener("click", function TuiConfirm_div_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.context.completeWith(true));
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const words_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("appearance", ctx_r2.appearance);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (ctx_r2.context.data == null ? null : ctx_r2.context.data.no) || words_r4.no, " ");
    ɵɵadvance();
    ɵɵproperty("appearance", (ctx_r2.context.data == null ? null : ctx_r2.context.data.appearance) || "primary");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (ctx_r2.context.data == null ? null : ctx_r2.context.data.yes) || words_r4.yes, " ");
  }
}
var TuiConfirm = class _TuiConfirm {
  constructor() {
    this.isMobile = inject(TUI_IS_MOBILE);
    this.words$ = inject(TUI_CONFIRM_WORDS);
    this.context = injectContext();
  }
  get appearance() {
    return this.isMobile ? "secondary" : "flat";
  }
  static {
    this.ɵfac = function TuiConfirm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConfirm)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiConfirm,
      selectors: [["tui-confirm"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 4,
      consts: [["class", "t-content", 3, "innerHTML", 4, "polymorpheusOutlet"], ["class", "t-buttons", 4, "ngIf"], [1, "t-content", 3, "innerHTML"], [1, "t-buttons"], ["size", "m", "tuiButton", "", "type", "button", 1, "t-button", 3, "click", "appearance"], ["size", "m", "tuiAutoFocus", "", "tuiButton", "", "type", "button", 1, "t-button", 3, "click", "appearance"]],
      template: function TuiConfirm_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiConfirm_div_0_Template, 1, 1, "div", 0)(1, TuiConfirm_div_1_Template, 5, 4, "div", 1);
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.context.data == null ? null : ctx.context.data.content);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.words$));
        }
      },
      dependencies: [CommonModule, NgIf, AsyncPipe, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      styles: [".t-content[_ngcontent-%COMP%]:not(:empty){margin-bottom:.875rem}.t-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;margin:.375rem -.375rem -.375rem}.t-button[_ngcontent-%COMP%]{margin:.375rem;white-space:nowrap}tui-root._mobile[_nghost-%COMP%]   .t-button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]{flex:1;overflow:visible}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConfirm, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-confirm",
      imports: [CommonModule, PolymorpheusOutlet, TuiAutoFocus, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
    *polymorpheusOutlet="context.data?.content as text"
    class="t-content"
    [innerHTML]="text"
></div>
<div
    *ngIf="words$ | async as words"
    class="t-buttons"
>
    <button
        size="m"
        tuiButton
        type="button"
        class="t-button"
        [appearance]="appearance"
        (click)="context.completeWith(false)"
    >
        {{ context.data?.no || words.no }}
    </button>
    <button
        size="m"
        tuiAutoFocus
        tuiButton
        type="button"
        class="t-button"
        [appearance]="context.data?.appearance || 'primary'"
        (click)="context.completeWith(true)"
    >
        {{ context.data?.yes || words.yes }}
    </button>
</div>
`,
      styles: [".t-content:not(:empty){margin-bottom:.875rem}.t-buttons{display:flex;justify-content:flex-end;flex-wrap:wrap-reverse;margin:.375rem -.375rem -.375rem}.t-button{margin:.375rem;white-space:nowrap}:host-context(tui-root._mobile) .t-button{flex:1;overflow:visible}\n"]
    }]
  }], null, null);
})();
var TUI_CONFIRM = new PolymorpheusComponent(TuiConfirm);
var TuiConfirmService = class _TuiConfirmService {
  constructor() {
    this.dialogs = inject(TuiDialogService);
    this.dirty = false;
  }
  markAsDirty() {
    this.dirty = true;
  }
  markAsPristine() {
    this.dirty = false;
  }
  withConfirm(options) {
    return defer(() => this.dirty ? this.dialogs.open(TUI_CONFIRM, __spreadValues({
      size: "s"
    }, options)) : of(true));
  }
  static {
    this.ɵfac = function TuiConfirmService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiConfirmService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiConfirmService,
      factory: _TuiConfirmService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiConfirmService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-drawer.mjs
var _c06 = [[["header"]], "*", [["footer"]]];
var _c15 = ["header", "*", "footer"];
var TuiDrawer = class _TuiDrawer {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.direction = "right";
    this.overlay = false;
  }
  get animation() {
    return __spreadProps(__spreadValues({}, this.options), {
      value: this.direction
    });
  }
  static {
    this.ɵfac = function TuiDrawer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDrawer)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDrawer,
      selectors: [["tui-drawer"]],
      hostVars: 12,
      hostBindings: function TuiDrawer_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideIn", ctx.animation);
          ɵɵstyleProp("border-start-start-radius", ctx.direction === "left" ? 0 : null)("border-start-end-radius", ctx.direction === "right" ? 0 : null)("left", ctx.direction === "left" ? 0 : null)("right", ctx.direction === "right" ? 0 : null);
          ɵɵclassProp("_overlay", ctx.overlay);
        }
      },
      inputs: {
        direction: "direction",
        overlay: "overlay"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "s"
      })]), ɵɵStandaloneFeature],
      ngContentSelectors: _c15,
      decls: 7,
      vars: 1,
      consts: [[1, "t-aside"], [1, "t-scrollbar"], [1, "t-content"], [1, "t-footer", 3, "hidden"]],
      template: function TuiDrawer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c06);
          ɵɵelementStart(0, "aside", 0)(1, "tui-scrollbar", 1);
          ɵɵprojection(2);
          ɵɵelementStart(3, "div", 2);
          ɵɵprojection(4, 1);
          ɵɵelementEnd()();
          ɵɵelementStart(5, "tui-scrollbar", 3);
          ɵɵprojection(6, 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵproperty("hidden", true);
        }
      },
      dependencies: [TuiScrollbar],
      styles: ['[_nghost-%COMP%]{position:fixed;top:3rem;bottom:0;inline-size:36.25rem;max-inline-size:calc(100vw - 3rem);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium);border-start-start-radius:1.25rem;border-start-end-radius:1.25rem}._overlay[_nghost-%COMP%]:before{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:fixed;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:var(--tui-service-backdrop);transition-timing-function:ease-out}tui-root:has(tui-dialogs   .t-overlay_visible)   ._overlay[_nghost-%COMP%]:before{opacity:0;transition-timing-function:ease-in}.t-aside[_ngcontent-%COMP%]{position:relative;display:flex;block-size:100%;flex-direction:column;border-radius:inherit;overflow:hidden;background:inherit}.t-scrollbar[_ngcontent-%COMP%]{flex:1;overscroll-behavior:contain}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header{top:0;z-index:1;display:flex;flex-direction:column;gap:.75rem;padding:1.5rem 1.5rem .75rem;box-shadow:inset 0 -1px var(--tui-border-normal);background:var(--tui-background-elevation-1)}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>*{display:flex;gap:.5rem}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiHeader] [tuiTitle]{font:var(--tui-font-text-xl);font-weight:700}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiHeader] [tuiSubtitle]{color:var(--tui-text-primary);font:var(--tui-font-text-s)}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiHeader] [tuiAccessories]{gap:.5rem}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiHeader] [tuiAccessories] [tuiIconButton][data-appearance=icon]:last-child{margin-inline-start:.25rem}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiHeader] [tuiAccessories] [tuiIconButton][data-appearance=icon]:last-child:before{font-size:1rem}.t-scrollbar[_ngcontent-%COMP%]    >.t-content>header>[tuiNavigationNav]{min-block-size:var(--tui-height-m);margin-block-end:-.75rem;padding:0;border-image:none}.t-content[_ngcontent-%COMP%]{padding:1.25rem 1.5rem}.t-footer[_ngcontent-%COMP%]     footer{scrollbar-width:none;-ms-overflow-style:none;display:flex;min-inline-size:-webkit-min-content;min-inline-size:min-content;justify-content:flex-end;gap:.75rem;padding:.5rem 1.5rem;box-shadow:inset 0 1px var(--tui-border-normal);background:var(--tui-background-elevation-1)}.t-footer[_ngcontent-%COMP%]     footer::-webkit-scrollbar, .t-footer[_ngcontent-%COMP%]     footer::-webkit-scrollbar-thumb{display:none}'],
      data: {
        animation: [tuiSlideIn, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDrawer, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-drawer",
      imports: [TuiButton, TuiScrollbar],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        appearance: "secondary",
        size: "s"
      })],
      animations: [tuiSlideIn, tuiFadeIn],
      host: {
        "[@tuiFadeIn]": "options",
        "[@tuiSlideIn]": "animation",
        "[class._overlay]": "overlay",
        "[style.border-start-start-radius]": 'direction === "left" ? 0 : null',
        "[style.border-start-end-radius]": 'direction === "right" ? 0 : null',
        "[style.left]": 'direction === "left" ? 0 : null',
        "[style.right]": 'direction === "right" ? 0 : null'
      },
      template: '<aside class="t-aside">\n    <tui-scrollbar class="t-scrollbar">\n        <ng-content select="header" />\n        <div class="t-content"><ng-content /></div>\n    </tui-scrollbar>\n    <tui-scrollbar\n        class="t-footer"\n        [hidden]="true"\n    >\n        <ng-content select="footer" />\n    </tui-scrollbar>\n</aside>\n',
      styles: [':host{position:fixed;top:3rem;bottom:0;inline-size:36.25rem;max-inline-size:calc(100vw - 3rem);background:var(--tui-background-elevation-1);box-shadow:var(--tui-shadow-medium);border-start-start-radius:1.25rem;border-start-end-radius:1.25rem}:host._overlay:before{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:fixed;top:-100vh;left:-100vw;right:-100vw;bottom:-100vh;background:var(--tui-service-backdrop);transition-timing-function:ease-out}tui-root:has(tui-dialogs .t-overlay_visible) :host._overlay:before{opacity:0;transition-timing-function:ease-in}.t-aside{position:relative;display:flex;block-size:100%;flex-direction:column;border-radius:inherit;overflow:hidden;background:inherit}.t-scrollbar{flex:1;overscroll-behavior:contain}.t-scrollbar ::ng-deep>.t-content>header{top:0;z-index:1;display:flex;flex-direction:column;gap:.75rem;padding:1.5rem 1.5rem .75rem;box-shadow:inset 0 -1px var(--tui-border-normal);background:var(--tui-background-elevation-1)}.t-scrollbar ::ng-deep>.t-content>header>*{display:flex;gap:.5rem}.t-scrollbar ::ng-deep>.t-content>header>[tuiHeader] [tuiTitle]{font:var(--tui-font-text-xl);font-weight:700}.t-scrollbar ::ng-deep>.t-content>header>[tuiHeader] [tuiSubtitle]{color:var(--tui-text-primary);font:var(--tui-font-text-s)}.t-scrollbar ::ng-deep>.t-content>header>[tuiHeader] [tuiAccessories]{gap:.5rem}.t-scrollbar ::ng-deep>.t-content>header>[tuiHeader] [tuiAccessories] [tuiIconButton][data-appearance=icon]:last-child{margin-inline-start:.25rem}.t-scrollbar ::ng-deep>.t-content>header>[tuiHeader] [tuiAccessories] [tuiIconButton][data-appearance=icon]:last-child:before{font-size:1rem}.t-scrollbar ::ng-deep>.t-content>header>[tuiNavigationNav]{min-block-size:var(--tui-height-m);margin-block-end:-.75rem;padding:0;border-image:none}.t-content{padding:1.25rem 1.5rem}.t-footer ::ng-deep footer{scrollbar-width:none;-ms-overflow-style:none;display:flex;min-inline-size:-webkit-min-content;min-inline-size:min-content;justify-content:flex-end;gap:.75rem;padding:.5rem 1.5rem;box-shadow:inset 0 1px var(--tui-border-normal);background:var(--tui-background-elevation-1)}.t-footer ::ng-deep footer::-webkit-scrollbar,.t-footer ::ng-deep footer::-webkit-scrollbar-thumb{display:none}\n']
    }]
  }], null, {
    direction: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-elastic-container.mjs
var _c07 = ["*"];
var TuiElasticContainerDirective = class _TuiElasticContainerDirective {
  constructor() {
    this.el = tuiInjectElement();
    this.tuiElasticContainer = merge(inject(ResizeObserverService, {
      self: true
    }), inject(MutationObserverService, {
      self: true
    })).pipe(debounceTime(0), map(() => this.el.clientHeight - 1), distinctUntilChanged());
  }
  static {
    this.ɵfac = function TuiElasticContainerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticContainerDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElasticContainerDirective,
      selectors: [["", "tuiElasticContainer", ""]],
      outputs: {
        tuiElasticContainer: "tuiElasticContainer"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticContainerDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElasticContainer]",
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true,
          characterData: true,
          subtree: true
        }
      }]
    }]
  }], null, {
    tuiElasticContainer: [{
      type: Output
    }]
  });
})();
var TuiElasticContainer = class _TuiElasticContainer {
  constructor() {
    this.height = NaN;
    this.transitions = 0;
  }
  onAnimation(_name, count) {
    this.transitions += count;
  }
  static {
    this.ɵfac = function TuiElasticContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElasticContainer)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiElasticContainer,
      selectors: [["tui-elastic-container"]],
      hostVars: 4,
      hostBindings: function TuiElasticContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("height", ctx.height, "px");
          ɵɵclassProp("_transitioning", ctx.transitions);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c07,
      decls: 2,
      vars: 0,
      consts: [[1, "t-wrapper", 3, "transitioncancel.silent", "transitionend.silent", "transitionstart.silent", "tuiElasticContainer"]],
      template: function TuiElasticContainer_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("transitioncancel.silent", function TuiElasticContainer_Template_div_transitioncancel_silent_0_listener($event) {
            return ctx.onAnimation($event.propertyName, -1);
          })("transitionend.silent", function TuiElasticContainer_Template_div_transitionend_silent_0_listener($event) {
            return ctx.onAnimation($event.propertyName, -1);
          })("transitionstart.silent", function TuiElasticContainer_Template_div_transitionstart_silent_0_listener($event) {
            return ctx.onAnimation($event.propertyName, 1);
          })("tuiElasticContainer", function TuiElasticContainer_Template_div_tuiElasticContainer_0_listener($event) {
            return ctx.height = $event;
          });
          ɵɵprojection(1);
          ɵɵelementEnd();
        }
      },
      dependencies: [TuiElasticContainerDirective],
      styles: ["[_nghost-%COMP%]{transition-property:height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;overflow:hidden}._transitioning[_nghost-%COMP%]{block-size:auto!important}.t-wrapper[_ngcontent-%COMP%]{padding-top:1px;margin-top:-1px}"],
      changeDetection: 0
    });
  }
};
__decorate([shouldCall((name) => name === "height")], TuiElasticContainer.prototype, "onAnimation", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElasticContainer, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-elastic-container",
      imports: [TuiElasticContainerDirective],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.height.px]": "height",
        "[class._transitioning]": "transitions"
      },
      template: '<div\n    class="t-wrapper"\n    (transitioncancel.silent)="onAnimation($any($event).propertyName, -1)"\n    (transitionend.silent)="onAnimation($any($event).propertyName, -1)"\n    (transitionstart.silent)="onAnimation($any($event).propertyName, 1)"\n    (tuiElasticContainer)="height = $event"\n>\n    <ng-content />\n</div>\n',
      styles: [":host{transition-property:height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;overflow:hidden}:host._transitioning{block-size:auto!important}.t-wrapper{padding-top:1px;margin-top:-1px}\n"]
    }]
  }], null, {
    onAnimation: []
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-validator.mjs
var TuiValidator = class _TuiValidator {
  constructor() {
    this.onChange = EMPTY_FUNCTION;
    this.tuiValidator = Validators.nullValidator;
  }
  validate(control) {
    return this.tuiValidator(control);
  }
  registerOnValidatorChange(onChange) {
    this.onChange = onChange;
  }
  ngOnChanges() {
    this.onChange();
  }
  ngOnDestroy() {
    this.tuiValidator = Validators.nullValidator;
    this.onChange();
  }
  static {
    this.ɵfac = function TuiValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiValidator,
      selectors: [["", "tuiValidator", ""]],
      inputs: {
        tuiValidator: "tuiValidator"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(NG_VALIDATORS, _TuiValidator, true)]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiValidator]",
      providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)]
    }]
  }], null, {
    tuiValidator: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-files.mjs
var _c08 = ["*"];
var _c16 = (a0) => ({
  $implicit: a0
});
function TuiFile_ng_container_1_Template(rf, ctx) {
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
function TuiFile_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fileSize_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", fileSize_r2, " ");
  }
}
function TuiFile_div_10_ng_container_1_Template(rf, ctx) {
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
function TuiFile_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, TuiFile_div_10_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const content_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", content_r4);
  }
}
function TuiFile_ng_container_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click.prevent", function TuiFile_ng_container_13_button_1_Template_button_click_prevent_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.remove.emit());
    })("mousedown.prevent.silent", function TuiFile_ng_container_13_button_1_Template_button_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r5);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const texts_r7 = ctx.ngIf;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("iconStart", ctx_r5.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r7.remove, " ");
  }
}
function TuiFile_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiFile_ng_container_13_button_1_Template, 2, 2, "button", 14);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r5.fileTexts$));
  }
}
function TuiFile_ng_template_14_img_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r5.preview, ɵɵsanitizeUrl);
  }
}
function TuiFile_ng_template_14_ng_template_1_tui_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 19);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("inheritColor", ctx_r5.isBig);
  }
}
function TuiFile_ng_template_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiFile_ng_template_14_ng_template_1_tui_loader_0_Template, 1, 1, "tui-loader", 18);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const svg_r8 = ɵɵreference(4);
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r5.isLoading)("ngIfElse", svg_r8);
  }
}
function TuiFile_ng_template_14_ng_template_3_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 21);
  }
  if (rf & 2) {
    const src_r9 = ctx.polymorpheusOutlet;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassProp("t-icon_blank", ctx_r5.isBig || ctx_r5.isDeleted)("t-icon_error", ctx_r5.isError);
    ɵɵproperty("icon", src_r9.toString());
  }
}
function TuiFile_ng_template_14_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiFile_ng_template_14_ng_template_3_tui_icon_0_Template, 1, 5, "tui-icon", 20);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r5.icon)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c16, ctx_r5.size));
  }
}
function TuiFile_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiFile_ng_template_14_img_0_Template, 1, 1, "img", 16)(1, TuiFile_ng_template_14_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, TuiFile_ng_template_14_ng_template_3_Template, 1, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const loader_r10 = ɵɵreference(2);
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r5.preview)("ngIfElse", loader_r10);
  }
}
function TuiFilesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiFilesComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r1);
  }
}
function TuiFilesComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiFilesComponent_ng_container_3_ng_container_1_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.max || index_r2 < ctx_r2.max);
  }
}
function TuiFilesComponent_tui_expand_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 5);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r4);
  }
}
function TuiFilesComponent_tui_expand_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiFilesComponent_tui_expand_4_ng_container_2_ng_container_1_Template, 1, 1, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.max && index_r5 >= ctx_r2.max);
  }
}
function TuiFilesComponent_tui_expand_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-expand", 6)(1, "div", 7);
    ɵɵtemplate(2, TuiFilesComponent_tui_expand_4_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("expanded", ctx_r2.expanded);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
function TuiFilesComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "button", 9);
    ɵɵlistener("click", function TuiFilesComponent_div_5_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggle());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-bottom_collapsed", !ctx_r2.expanded);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ctx_r2.expanded ? ctx_r2.hideText$ : ctx_r2.showAllText$), " ");
  }
}
var _c2 = ["tuiInputFiles", ""];
function TuiInputFiles_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, " ");
  }
}
var TUI_SIZE_ERROR = "tuiSize";
var TUI_FORMAT_ERROR = "tuiFormat";
function tuiCreateFileSizeValidator(size) {
  return ({
    value
  }) => {
    const files = value && coerceArray(value);
    const $implicit = value && files?.filter((file) => file.size > size);
    return $implicit?.length ? {
      [TUI_SIZE_ERROR]: {
        $implicit,
        size
      }
    } : null;
  };
}
function tuiCreateFileFormatValidator(accept) {
  return ({
    value
  }) => {
    const files = value && coerceArray(value);
    const formats = toArray$1(accept);
    const $implicit = value && files?.filter((file) => !checkFormat(file, formats));
    return $implicit?.length && accept ? {
      [TUI_FORMAT_ERROR]: {
        $implicit
      }
    } : null;
  };
}
function checkFormat({
  name,
  type
}, formats) {
  const extension = `.${(name.split(".").pop() || "").toLowerCase()}`;
  return formats.some((format2) => format2 === extension || format2 === type || format2.split("/")[1] === "*" && type?.split("/")[0] === format2.split("/")[0]);
}
function toArray$1(accept) {
  return accept.toLowerCase().split(",").map((format2) => format2.trim().toLowerCase());
}
var BYTES_PER_KIB = 1024;
var BYTES_PER_MIB = 1024 * BYTES_PER_KIB;
function tuiFilesRejected(control) {
  const format2 = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];
  const size = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];
  return Array.from(/* @__PURE__ */ new Set([...format2, ...size]));
}
function tuiFilesAccepted(control) {
  const value = control?.value || [];
  const files = coerceArray(value);
  const size = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];
  const format2 = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];
  return files.filter((file) => !size.includes(file) && !format2.includes(file));
}
function tuiFormatSize(units, size) {
  if (size === void 0) {
    return null;
  }
  if (size < BYTES_PER_KIB) {
    return `${size} ${units[0]}`;
  }
  if (size < BYTES_PER_MIB) {
    return `${(size / BYTES_PER_KIB).toFixed(0)} ${units[1]}`;
  }
  return `${tuiRound(size / BYTES_PER_MIB, 2).toLocaleString("ru-RU")} ${units[2]}`;
}
var TUI_FILE_DEFAULT_OPTIONS = {
  appearance: "outline",
  formatSize: tuiFormatSize,
  icons: {
    normal: ({
      $implicit
    }) => $implicit === "l" ? "@tui.file" : "@tui.circle-check",
    error: "@tui.circle-alert",
    deleted: "@tui.trash"
  }
};
var [TUI_FILE_OPTIONS, tuiFileOptionsProvider] = tuiCreateOptions(TUI_FILE_DEFAULT_OPTIONS);
var TuiFile = class _TuiFile {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
    this.options = inject(TUI_FILE_OPTIONS);
    this.units$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
    this.win = inject(WA_WINDOW);
    this.icons = inject(TUI_COMMON_ICONS);
    this.fileTexts$ = inject(TUI_FILE_TEXTS);
    this.file = {
      name: ""
    };
    this.state = "normal";
    this.size = "m";
    this.showDelete = true;
    this.showSize = true;
    this.remove = new EventEmitter();
  }
  get preview() {
    return this.isBig ? this.createPreview(this.file) : "";
  }
  get isBig() {
    return this.size === "l";
  }
  get isLoading() {
    return this.state === "loading";
  }
  get isError() {
    return this.state === "error";
  }
  get isDeleted() {
    return this.state === "deleted";
  }
  get allowDelete() {
    return this.showDelete && this.remove.observed;
  }
  get icon() {
    return this.state === "loading" ? "" : this.options.icons[this.state];
  }
  get name() {
    return this.getName(this.file);
  }
  get type() {
    return this.getType(this.file);
  }
  get content$() {
    return this.calculateContent$(this.state, this.file, this.fileTexts$);
  }
  get fileSize$() {
    return this.calculateFileSize$(this.file, this.units$);
  }
  calculateContent$(state, file, fileTexts$) {
    return state === "error" && !file.content ? fileTexts$.pipe(map((texts) => texts.loadingError)) : of(this.file.content || "");
  }
  calculateFileSize$(file, units$) {
    return units$.pipe(map((units) => this.options.formatSize(units, file.size)));
  }
  createPreview(file) {
    if (file.src) {
      return file.src;
    }
    if (this.win.File && file instanceof this.win.File && file.type?.startsWith("image/")) {
      return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }
    return "";
  }
  getName(file) {
    return file.name.split(".").slice(0, -1).join(".");
  }
  getType(file) {
    return `.${file.name.split(".").pop()}` || "";
  }
  static {
    this.ɵfac = function TuiFile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFile)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFile,
      selectors: [["tui-file"], ["a", "tuiFile", ""], ["button", "tuiFile", ""]],
      hostVars: 1,
      hostBindings: function TuiFile_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-delete", ctx.showDelete);
        }
      },
      inputs: {
        file: "file",
        state: "state",
        size: "size",
        showDelete: "showDelete",
        showSize: "showSize",
        leftContent: "leftContent"
      },
      outputs: {
        remove: "remove"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiAppearance]), ɵɵStandaloneFeature],
      ngContentSelectors: _c08,
      decls: 16,
      vars: 12,
      consts: [["defaultLeftContent", ""], ["loader", ""], ["svg", ""], [1, "t-preview"], [4, "polymorpheusOutlet"], [1, "t-wrapper"], [1, "t-text"], [1, "t-name"], [1, "t-type"], ["class", "t-size", 4, "ngIf"], ["class", "t-content", 4, "ngIf"], [4, "ngIf"], [1, "t-size"], [1, "t-content"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", "class", "t-remove", 3, "iconStart", "click.prevent", "mousedown.prevent.silent", 4, "ngIf"], ["appearance", "icon", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-remove", 3, "click.prevent", "mousedown.prevent.silent", "iconStart"], ["alt", "file preview", "class", "t-image", 3, "src", 4, "ngIf", "ngIfElse"], ["alt", "file preview", 1, "t-image", 3, "src"], ["class", "t-loader", 3, "inheritColor", 4, "ngIf", "ngIfElse"], [1, "t-loader", 3, "inheritColor"], ["class", "t-icon", 3, "t-icon_blank", "t-icon_error", "icon", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-icon", 3, "icon"]],
      template: function TuiFile_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 3);
          ɵɵtemplate(1, TuiFile_ng_container_1_Template, 2, 1, "ng-container", 4);
          ɵɵelementEnd();
          ɵɵelementStart(2, "div", 5)(3, "div", 6)(4, "div", 7);
          ɵɵtext(5);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 8);
          ɵɵtext(7);
          ɵɵelementEnd();
          ɵɵtemplate(8, TuiFile_div_8_Template, 2, 1, "div", 9);
          ɵɵpipe(9, "async");
          ɵɵelementEnd();
          ɵɵtemplate(10, TuiFile_div_10_Template, 2, 1, "div", 10);
          ɵɵpipe(11, "async");
          ɵɵprojection(12);
          ɵɵelementEnd();
          ɵɵtemplate(13, TuiFile_ng_container_13_Template, 3, 3, "ng-container", 11)(14, TuiFile_ng_template_14_Template, 5, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const defaultLeftContent_r11 = ɵɵreference(15);
          ɵɵclassProp("t-preview_big", ctx.isBig);
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.leftContent || defaultLeftContent_r11);
          ɵɵadvance(4);
          ɵɵtextInterpolate(ctx.name);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.type);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showSize && ɵɵpipeBind1(9, 8, ctx.fileSize$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(11, 10, ctx.content$));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.allowDelete);
        }
      },
      dependencies: [CommonModule, NgIf, AsyncPipe, PolymorpheusOutlet, TuiButton, TuiIcon, TuiLoader],
      styles: ['[_nghost-%COMP%]{position:relative;display:flex;align-items:center;font:var(--tui-font-text-m);padding:.625rem 2.25rem .625rem .625rem;text-decoration:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:hover   .t-remove[_ngcontent-%COMP%], [data-delete=always][_nghost-%COMP%]   .t-remove[_ngcontent-%COMP%]{opacity:1}.t-preview[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:1.5rem;block-size:1.5rem;margin-right:.75rem;border-radius:var(--tui-radius-m);overflow:hidden;color:var(--tui-text-tertiary)}.t-preview_big[_ngcontent-%COMP%]{inline-size:4rem;block-size:4rem;margin-right:1rem}.t-preview_big[_ngcontent-%COMP%]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:var(--tui-background-neutral-1)}.t-image[_ngcontent-%COMP%]{max-inline-size:100%;max-block-size:100%}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}.t-icon[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;color:var(--tui-status-positive);margin:auto}.t-icon_blank[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}.t-icon_error[_ngcontent-%COMP%]{color:var(--tui-text-negative)}.t-remove[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.625rem;right:.625rem}.t-remove[_ngcontent-%COMP%]:focus{opacity:1}.t-remove[_ngcontent-%COMP%]:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}@media (hover: hover) and (pointer: fine){.t-remove[_ngcontent-%COMP%]{opacity:0}}.t-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden;color:var(--tui-text-primary)}.t-text[_ngcontent-%COMP%]{display:flex}.t-size[_ngcontent-%COMP%]{flex-shrink:0;opacity:var(--tui-disabled-opacity);margin-left:.5rem}.t-type[_ngcontent-%COMP%]{flex-shrink:0}.t-name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-negative)}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiFile.prototype, "calculateContent$", null);
__decorate([tuiPure], TuiFile.prototype, "calculateFileSize$", null);
__decorate([tuiPure], TuiFile.prototype, "createPreview", null);
__decorate([tuiPure], TuiFile.prototype, "getName", null);
__decorate([tuiPure], TuiFile.prototype, "getType", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFile, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-file,a[tuiFile],button[tuiFile]",
      imports: [CommonModule, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton, TuiIcon, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)],
      hostDirectives: [TuiAppearance],
      host: {
        "[attr.data-delete]": "showDelete"
      },
      template: '<div\n    class="t-preview"\n    [class.t-preview_big]="isBig"\n>\n    <ng-container *polymorpheusOutlet="leftContent || defaultLeftContent as text">\n        {{ text }}\n    </ng-container>\n</div>\n<div class="t-wrapper">\n    <div class="t-text">\n        <div class="t-name">{{ name }}</div>\n        <div class="t-type">{{ type }}</div>\n        <div\n            *ngIf="showSize && (fileSize$ | async) as fileSize"\n            class="t-size"\n        >\n            {{ fileSize }}\n        </div>\n    </div>\n    <div\n        *ngIf="content$ | async as content"\n        class="t-content"\n    >\n        <ng-container *polymorpheusOutlet="content as text">\n            {{ text }}\n        </ng-container>\n    </div>\n    <ng-content />\n</div>\n<ng-container *ngIf="allowDelete">\n    <button\n        *ngIf="fileTexts$ | async as texts"\n        appearance="icon"\n        size="xs"\n        tuiIconButton\n        type="button"\n        class="t-remove"\n        [iconStart]="icons.close"\n        (click.prevent)="remove.emit()"\n        (mousedown.prevent.silent)="(0)"\n    >\n        {{ texts.remove }}\n    </button>\n</ng-container>\n\n<ng-template #defaultLeftContent>\n    <img\n        *ngIf="preview; else loader"\n        alt="file preview"\n        class="t-image"\n        [src]="preview"\n    />\n    <ng-template #loader>\n        <tui-loader\n            *ngIf="isLoading; else svg"\n            class="t-loader"\n            [inheritColor]="isBig"\n        />\n    </ng-template>\n    <ng-template #svg>\n        <tui-icon\n            *polymorpheusOutlet="icon as src; context: {$implicit: size}"\n            class="t-icon"\n            [class.t-icon_blank]="isBig || isDeleted"\n            [class.t-icon_error]="isError"\n            [icon]="src.toString()"\n        />\n    </ng-template>\n</ng-template>\n',
      styles: [':host{position:relative;display:flex;align-items:center;font:var(--tui-font-text-m);padding:.625rem 2.25rem .625rem .625rem;text-decoration:none;border-radius:var(--tui-radius-m)}:host:hover .t-remove,:host[data-delete=always] .t-remove{opacity:1}.t-preview{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;inline-size:1.5rem;block-size:1.5rem;margin-right:.75rem;border-radius:var(--tui-radius-m);overflow:hidden;color:var(--tui-text-tertiary)}.t-preview_big{inline-size:4rem;block-size:4rem;margin-right:1rem}.t-preview_big:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:var(--tui-background-neutral-1)}.t-image{max-inline-size:100%;max-block-size:100%}.t-loader{position:absolute;top:0;left:0;inline-size:100%;block-size:100%}.t-icon{position:absolute;top:0;left:0;bottom:0;right:0;color:var(--tui-status-positive);margin:auto}.t-icon_blank{color:var(--tui-text-tertiary)}.t-icon_error{color:var(--tui-text-negative)}.t-remove{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.625rem;right:.625rem}.t-remove:focus{opacity:1}.t-remove:focus-visible{box-shadow:inset 0 0 0 2px var(--tui-border-focus)}@media (hover: hover) and (pointer: fine){.t-remove{opacity:0}}.t-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;overflow:hidden;color:var(--tui-text-primary)}.t-text{display:flex}.t-size{flex-shrink:0;opacity:var(--tui-disabled-opacity);margin-left:.5rem}.t-type{flex-shrink:0}.t-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.t-content{font:var(--tui-font-text-s);color:var(--tui-text-negative)}\n']
    }]
  }], null, {
    file: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showDelete: [{
      type: Input
    }],
    showSize: [{
      type: Input
    }],
    leftContent: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    calculateContent$: [],
    calculateFileSize$: [],
    createPreview: [],
    getName: [],
    getType: []
  });
})();
var TuiFilesComponent = class _TuiFilesComponent {
  constructor() {
    this.items = EMPTY_QUERY;
    this.hideText$ = inject(TUI_HIDE_TEXT);
    this.showAllText$ = inject(TUI_SHOW_ALL_TEXT);
    this.max = 0;
    this.expanded = false;
    this.expandedChange = new EventEmitter();
  }
  get hasExtraItems() {
    return !!this.max && this.items.length > this.max;
  }
  toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }
  static {
    this.ɵfac = function TuiFilesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFilesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFilesComponent,
      selectors: [["tui-files"]],
      contentQueries: function TuiFilesComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiItem, 4, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
        }
      },
      inputs: {
        max: "max",
        expanded: "expanded"
      },
      outputs: {
        expandedChange: "expandedChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiGroupOptionsProvider({
        size: "m",
        collapsed: true,
        orientation: "vertical"
      })]), ɵɵHostDirectivesFeature([TuiGroup]), ɵɵStandaloneFeature],
      ngContentSelectors: _c08,
      decls: 6,
      vars: 6,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "expanded", 4, "ngIf"], ["class", "t-bottom", 3, "t-bottom_collapsed", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "expanded"], [1, "t-extra-items"], [1, "t-bottom"], ["appearance", "outline", "size", "m", "tuiButton", "", "type", "button", 1, "t-button", 3, "click"]],
      template: function TuiFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiFilesComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
          ɵɵtemplate(3, TuiFilesComponent_ng_container_3_Template, 2, 1, "ng-container", 1)(4, TuiFilesComponent_tui_expand_4_Template, 3, 2, "tui-expand", 2)(5, TuiFilesComponent_div_5_Template, 4, 5, "div", 3);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 4, ctx.items == null ? null : ctx.items.changes));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.items);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasExtraItems);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.hasExtraItems);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, AsyncPipe, TuiButton, TuiExpandComponent],
      styles: ["tui-files{inline-size:100%;overflow:hidden;border-radius:var(--tui-radius-m)}tui-files .t-files{position:relative;display:block;inline-size:100%;block-size:100%;border-radius:var(--tui-radius-m);overflow:hidden}tui-files .t-button{inline-size:100%;border-radius:inherit}tui-files .t-bottom{z-index:3;inline-size:100%;background:var(--tui-background-base)}tui-files .t-bottom_collapsed{box-shadow:var(--tui-shadow-popup);margin-top:-1.5rem}tui-files .t-extra-items tui-file{border-radius:0;margin-top:0;margin-bottom:-.0625rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilesComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-files",
      imports: [CommonModule, TuiButton, TuiExpandComponent],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiGroupOptionsProvider({
        size: "m",
        collapsed: true,
        orientation: "vertical"
      })],
      hostDirectives: [TuiGroup],
      template: '<ng-container *ngIf="items?.changes | async" />\n<ng-content />\n<ng-container *ngFor="let item of items; let index = index">\n    <ng-container\n        *ngIf="!max || index < max"\n        [ngTemplateOutlet]="item"\n    />\n</ng-container>\n<tui-expand\n    *ngIf="hasExtraItems"\n    [expanded]="expanded"\n>\n    <div class="t-extra-items">\n        <ng-container *ngFor="let item of items; let index = index">\n            <ng-container\n                *ngIf="max && index >= max"\n                [ngTemplateOutlet]="item"\n            />\n        </ng-container>\n    </div>\n</tui-expand>\n<div\n    *ngIf="hasExtraItems"\n    class="t-bottom"\n    [class.t-bottom_collapsed]="!expanded"\n>\n    <button\n        appearance="outline"\n        size="m"\n        tuiButton\n        type="button"\n        class="t-button"\n        (click)="toggle()"\n    >\n        {{ (expanded ? hideText$ : showAllText$) | async }}\n    </button>\n</div>\n',
      styles: ["tui-files{inline-size:100%;overflow:hidden;border-radius:var(--tui-radius-m)}tui-files .t-files{position:relative;display:block;inline-size:100%;block-size:100%;border-radius:var(--tui-radius-m);overflow:hidden}tui-files .t-button{inline-size:100%;border-radius:inherit}tui-files .t-bottom{z-index:3;inline-size:100%;background:var(--tui-background-base)}tui-files .t-bottom_collapsed{box-shadow:var(--tui-shadow-popup);margin-top:-1.5rem}tui-files .t-extra-items tui-file{border-radius:0;margin-top:0;margin-bottom:-.0625rem}\n"]
    }]
  }], null, {
    items: [{
      type: ContentChildren,
      args: [TuiItem, {
        read: TemplateRef
      }]
    }],
    max: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
var TuiInputFilesContent = class _TuiInputFilesContent {
  constructor() {
    this.breakpoint$ = inject(TuiBreakpointService);
    this.text$ = inject(TUI_INPUT_FILE_TEXTS);
    this.context = injectContext();
    this.component = inject(TuiInputFiles);
  }
  get link$() {
    return this.computeLink$(this.context.$implicit, !!this.component.input?.input.multiple);
  }
  get label$() {
    return this.computeLabel$(this.context.$implicit, !!this.component.input?.input.multiple);
  }
  computeLink$(fileDragged, multiple) {
    return fileDragged ? of("") : this.text$.pipe(map((t) => multiple ? t.defaultLinkMultiple : t.defaultLinkSingle));
  }
  computeLabel$(fileDragged, multiple) {
    return fileDragged ? combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
      if (breakpoint === "mobile") {
        return "";
      }
      return multiple ? text.dropMultiple : text.drop;
    })) : combineLatest([this.breakpoint$, this.text$]).pipe(map(([breakpoint, text]) => {
      if (breakpoint === "mobile") {
        return "";
      }
      return multiple ? text.defaultLabelMultiple : text.defaultLabelSingle;
    }));
  }
  static {
    this.ɵfac = function TuiInputFilesContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputFilesContent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputFilesContent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 5,
      vars: 6,
      consts: [["tuiLink", ""]],
      template: function TuiInputFilesContent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "a", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵtext(3);
          ɵɵpipe(4, "async");
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, ctx.link$));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, ctx.label$), " ");
        }
      },
      dependencies: [AsyncPipe, TuiLink],
      encapsulation: 2
    });
  }
};
__decorate([tuiPure], TuiInputFilesContent.prototype, "computeLink$", null);
__decorate([tuiPure], TuiInputFilesContent.prototype, "computeLabel$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputFilesContent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [AsyncPipe, TuiLink],
      template: `
        <a tuiLink>{{ link$ | async }}</a>
        {{ label$ | async }}
    `,
      // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
      changeDetection: ChangeDetectionStrategy.Default
    }]
  }], null, {
    computeLink$: [],
    computeLabel$: []
  });
})();
var TUI_INPUT_FILES_DEFAULT_OPTIONS = {
  accept: "",
  multiple: false,
  size: "m",
  maxFileSize: 30 * 1024 * 1024
  // 30 MiB
};
var TUI_INPUT_FILES_OPTIONS = tuiCreateToken(TUI_INPUT_FILES_DEFAULT_OPTIONS);
function tuiInputFilesOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_FILES_OPTIONS, options, TUI_INPUT_FILES_DEFAULT_OPTIONS);
}
var TuiInputFilesValidator = class _TuiInputFilesValidator {
  constructor() {
    this.options = inject(TUI_INPUT_FILES_OPTIONS);
    this.validator = inject(TuiValidator);
    this.accept = this.options.accept;
    this.maxFileSize = this.options.maxFileSize;
  }
  ngOnChanges() {
    this.validate();
  }
  ngOnInit() {
    this.validate();
  }
  validate() {
    this.validator.tuiValidator = Validators.compose([tuiCreateFileFormatValidator(this.accept), tuiCreateFileSizeValidator(this.maxFileSize)]) || Validators.nullValidator;
    this.validator.ngOnChanges();
  }
  static {
    this.ɵfac = function TuiInputFilesValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputFilesValidator)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputFilesValidator,
      hostVars: 1,
      hostBindings: function TuiInputFilesValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("accept", ctx.accept);
        }
      },
      inputs: {
        accept: "accept",
        maxFileSize: "maxFileSize"
      },
      exportAs: ["tuiInputFilesValidator"],
      standalone: true,
      features: [ɵɵHostDirectivesFeature([TuiValidator]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputFilesValidator, [{
    type: Directive,
    args: [{
      standalone: true,
      exportAs: "tuiInputFilesValidator",
      hostDirectives: [TuiValidator],
      host: {
        "[accept]": "accept"
      }
    }]
  }], null, {
    accept: [{
      type: Input
    }],
    maxFileSize: [{
      type: Input
    }]
  });
})();
var TuiInputFilesDirective = class _TuiInputFilesDirective extends TuiControl {
  constructor() {
    super(...arguments);
    this.host = inject(forwardRef(() => TuiInputFiles));
    this.reject = timer(0, tuiZonefreeScheduler()).pipe(switchMap(() => tuiControlValue(this.control.control)), map(() => tuiFilesRejected(this.control.control)), filter(({
      length
    }) => !!length));
    this.appearance = "file";
    this.input = tuiInjectElement();
  }
  process(files) {
    const fileOrFiles = this.input.multiple ? [...toArray(this.value()), ...Array.from(files)] : files[0];
    if (fileOrFiles) {
      this.onChange(fileOrFiles);
    }
  }
  onClick(event) {
    if (this.input.readOnly) {
      event.preventDefault();
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputFilesDirective_BaseFactory;
      return function TuiInputFilesDirective_Factory(__ngFactoryType__) {
        return (ɵTuiInputFilesDirective_BaseFactory || (ɵTuiInputFilesDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiInputFilesDirective)))(__ngFactoryType__ || _TuiInputFilesDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiInputFilesDirective,
      selectors: [["input", "tuiInputFiles", ""]],
      hostAttrs: ["type", "file"],
      hostVars: 1,
      hostBindings: function TuiInputFilesDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiInputFilesDirective_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("click", function TuiInputFilesDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.disabled());
        }
      },
      outputs: {
        reject: "reject"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsControl(_TuiInputFilesDirective), tuiAppearanceOptionsProvider(_TuiInputFilesDirective)]), ɵɵHostDirectivesFeature([TuiNativeValidator, TuiWithAppearance, {
        directive: TuiInputFilesValidator,
        inputs: ["accept", "accept", "maxFileSize", "maxFileSize"]
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputFilesDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiInputFiles]",
      providers: [tuiAsControl(TuiInputFilesDirective), tuiAppearanceOptionsProvider(TuiInputFilesDirective)],
      hostDirectives: [TuiNativeValidator, TuiWithAppearance, {
        directive: TuiInputFilesValidator,
        inputs: ["accept", "maxFileSize"]
      }],
      host: {
        type: "file",
        "[disabled]": "disabled()",
        "(blur)": "onTouched()",
        "(click)": "onClick($event)"
      }
    }]
  }], null, {
    reject: [{
      type: Output
    }]
  });
})();
function toArray(value) {
  return value ? coerceArray(value) : EMPTY_ARRAY;
}
var TuiInputFiles = class _TuiInputFiles {
  constructor() {
    this.content = new PolymorpheusComponent(TuiInputFilesContent);
  }
  get fileDragged() {
    return !!this.files && !this.input?.disabled();
  }
  onFilesSelected(input) {
    if (!input?.files) {
      return;
    }
    this.input?.process(input.files);
    input.value = "";
  }
  onDropped({
    dataTransfer
  }) {
    this.files = null;
    if (dataTransfer?.files && !this.input?.disabled()) {
      this.input?.process(dataTransfer.files);
    }
  }
  onDrag(dataTransfer) {
    this.files = dataTransfer?.files;
  }
  static {
    this.ɵfac = function TuiInputFiles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputFiles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputFiles,
      selectors: [["label", "tuiInputFiles", ""]],
      contentQueries: function TuiInputFiles_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 5);
          ɵɵcontentQuery(dirIndex, TuiInputFilesDirective, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function TuiInputFiles_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("dragover.prevent.silent", function TuiInputFiles_dragover_prevent_silent_HostBindingHandler() {
            return 0;
          })("drop.prevent", function TuiInputFiles_drop_prevent_HostBindingHandler($event) {
            return ctx.onDropped($event);
          })("dragenter", function TuiInputFiles_dragenter_HostBindingHandler($event) {
            return ctx.onDrag($event.dataTransfer);
          })("dragleave", function TuiInputFiles_dragleave_HostBindingHandler() {
            return ctx.onDrag(null);
          })("change", function TuiInputFiles_change_HostBindingHandler($event) {
            return ctx.onFilesSelected($event.target);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_dragged", ctx.fileDragged);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c2,
      ngContentSelectors: _c08,
      decls: 2,
      vars: 4,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiInputFiles_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵtemplate(1, TuiInputFiles_span_1_Template, 2, 1, "span", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.template || ctx.content)("polymorpheusOutletContext", ɵɵpureFunction1(2, _c16, ctx.fileDragged));
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["label[tuiInputFiles]{position:relative;display:flex;min-block-size:var(--tui-height-l);justify-content:center;align-items:center;text-align:center;border-radius:var(--tui-radius-m);font:var(--tui-font-text-m);overflow-wrap:break-word;padding:0 .5rem}label[tuiInputFiles]>:not(input){position:relative;pointer-events:none}label[tuiInputFiles] input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;color:transparent;cursor:pointer}label[tuiInputFiles] input:disabled~*{opacity:var(--tui-disabled-opacity)}label[tuiInputFiles] input::-webkit-file-upload-button{display:none}label[tuiInputFiles] input::file-selector-button{display:none}*:disabled label[tuiInputFiles]{pointer-events:none}[tuiAppearance][data-appearance=file]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border-radius:inherit;box-sizing:border-box;border:1px dashed var(--tui-text-action);outline:none}tui-root._mobile [tuiAppearance][data-appearance=file]{border-style:solid}[tuiInputFiles]._dragged [tuiAppearance][data-appearance=file]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover){[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}@media (hover: hover){[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover){[tuiAppearance][data-appearance=file][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][data-state=active]{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active]:hover{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file]:focus-visible:not([data-focus=false]){border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][data-focus=true]{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][data-appearance=file][tuiWrapper]._focused{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file]:invalid{border-color:var(--tui-status-negative)!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputFiles, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiInputFiles]",
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="
                template || content as text;
                context: {$implicit: fileDragged}
            "
        >
            {{ text }}
        </span>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(dragover.prevent.silent)": "0",
        "(drop.prevent)": "onDropped($event)",
        "(dragenter)": "onDrag($event.dataTransfer)",
        "(dragleave)": "onDrag(null)",
        "[class._dragged]": "fileDragged",
        "(change)": "onFilesSelected($event.target)"
      },
      styles: ["label[tuiInputFiles]{position:relative;display:flex;min-block-size:var(--tui-height-l);justify-content:center;align-items:center;text-align:center;border-radius:var(--tui-radius-m);font:var(--tui-font-text-m);overflow-wrap:break-word;padding:0 .5rem}label[tuiInputFiles]>:not(input){position:relative;pointer-events:none}label[tuiInputFiles] input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;color:transparent;cursor:pointer}label[tuiInputFiles] input:disabled~*{opacity:var(--tui-disabled-opacity)}label[tuiInputFiles] input::-webkit-file-upload-button{display:none}label[tuiInputFiles] input::file-selector-button{display:none}*:disabled label[tuiInputFiles]{pointer-events:none}[tuiAppearance][data-appearance=file]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border-radius:inherit;box-sizing:border-box;border:1px dashed var(--tui-text-action);outline:none}tui-root._mobile [tuiAppearance][data-appearance=file]{border-style:solid}[tuiInputFiles]._dragged [tuiAppearance][data-appearance=file]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover){[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}@media (hover: hover){[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}@media (hover: hover){[tuiAppearance][data-appearance=file][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=hover]{background:var(--tui-background-neutral-1);border-color:var(--tui-text-action-hover)}}[tuiAppearance][data-appearance=file]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][data-state=active]{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=file][tuiWrapper][data-state=active]:hover{background:var(--tui-background-neutral-1-hover)}[tuiAppearance][data-appearance=file]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file][tuiWrapper]:disabled:not([data-state]),[tuiAppearance][data-appearance=file][tuiWrapper][data-state=disabled]{background:transparent;border-color:var(--tui-text-tertiary)}[tuiAppearance][data-appearance=file]:focus-visible:not([data-focus=false]){border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][data-focus=true]{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file][tuiWrapper]:not(._focused):has(:focus-visible),[tuiAppearance][data-appearance=file][tuiWrapper]._focused{border:.125rem solid var(--tui-border-focus)}[tuiAppearance][data-appearance=file]:invalid{border-color:var(--tui-status-negative)!important}\n"]
    }]
  }], null, {
    template: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    input: [{
      type: ContentChild,
      args: [TuiInputFilesDirective]
    }]
  });
})();
var TuiFileRejectedPipe = class _TuiFileRejectedPipe {
  constructor() {
    this.options = inject(TUI_INPUT_FILES_OPTIONS);
    this.formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    this.text$ = inject(TUI_INPUT_FILE_TEXTS);
    this.unit$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
  }
  transform(file, {
    accept = this.options.accept,
    maxFileSize = this.options.maxFileSize
  } = this.options) {
    const sizeValidator = tuiCreateFileSizeValidator(maxFileSize);
    const formatValidator = tuiCreateFileFormatValidator(accept);
    const control = new FormControl(file);
    return combineLatest([this.text$, this.unit$]).pipe(map(([{
      maxSizeRejectionReason,
      formatRejectionReason
    }, units]) => {
      if (file && formatValidator(control)) {
        return {
          name: file.name,
          size: file.size,
          content: formatRejectionReason
        };
      }
      if (file && sizeValidator(control)) {
        return {
          name: file.name,
          size: file.size,
          content: `${maxSizeRejectionReason}${CHAR_NO_BREAK_SPACE}${this.formatSize(units, maxFileSize)}`
        };
      }
      return null;
    }));
  }
  static {
    this.ɵfac = function TuiFileRejectedPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFileRejectedPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFileRejected",
      type: _TuiFileRejectedPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFileRejectedPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFileRejected"
    }]
  }], null, null);
})();
var TuiFiles = [TuiItem, TuiFile, TuiInputFiles, TuiFilesComponent, TuiFileRejectedPipe, TuiInputFilesDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-filter.mjs
var _c09 = (a0) => ({
  $implicit: a0
});
var _c17 = () => ({
  standalone: true
});
function TuiFilter_label_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const text_r2 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r2, " ");
  }
}
function TuiFilter_label_0_tui_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-badge", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const badgeValue_r3 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("size", ctx_r3.size);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", badgeValue_r3, " ");
  }
}
function TuiFilter_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1);
    ɵɵtemplate(1, TuiFilter_label_0_span_1_Template, 2, 1, "span", 2)(2, TuiFilter_label_0_tui_badge_2_Template, 2, 2, "tui-badge", 3);
    ɵɵelementStart(3, "input", 4);
    ɵɵlistener("ngModelChange", function TuiFilter_label_0_Template_input_ngModelChange_3_listener($event) {
      const item_r5 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onCheckbox($event, item_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tuiBlock", ctx_r3.size);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r3.content)("polymorpheusOutletContext", ɵɵpureFunction1(7, _c09, item_r5));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.badgeHandler(item_r5));
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r3.disabledItemHandler(item_r5))("ngModel", ctx_r3.isCheckboxEnabled(item_r5))("ngModelOptions", ɵɵpureFunction0(9, _c17));
  }
}
var TuiFilter = class _TuiFilter extends TuiControl {
  constructor() {
    super(...arguments);
    this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    this.items = [];
    this.size = inject(TUI_BLOCK_OPTIONS).size;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.toggledItem = new EventEmitter();
    this.content = ({
      $implicit
    }) => String($implicit);
    this.badgeHandler = (item) => Number(item);
  }
  onCheckbox(value, item) {
    this.toggledItem.emit(item);
    this.onChange(value ? [...this.value(), item] : this.value().filter((arrItem) => !this.identityMatcher(arrItem, item)));
  }
  isCheckboxEnabled(item) {
    return this.value().some((arrItem) => this.identityMatcher(arrItem, item));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiFilter_BaseFactory;
      return function TuiFilter_Factory(__ngFactoryType__) {
        return (ɵTuiFilter_BaseFactory || (ɵTuiFilter_BaseFactory = ɵɵgetInheritedFactory(_TuiFilter)))(__ngFactoryType__ || _TuiFilter);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiFilter,
      selectors: [["tui-filter"]],
      hostVars: 1,
      hostBindings: function TuiFilter_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        identityMatcher: "identityMatcher",
        items: "items",
        size: "size",
        disabledItemHandler: "disabledItemHandler",
        content: "content",
        badgeHandler: "badgeHandler"
      },
      outputs: {
        toggledItem: "toggledItem"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider([])]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["appearance", "", "class", "t-item", 3, "tuiBlock", 4, "ngFor", "ngForOf"], ["appearance", "", 1, "t-item", 3, "tuiBlock"], ["tuiHintOverflow", "", "class", "t-text", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "neutral", 3, "size", 4, "ngIf"], ["tuiBlock", "", "type", "checkbox", 3, "ngModelChange", "disabled", "ngModel", "ngModelOptions"], ["tuiHintOverflow", "", 1, "t-text"], ["appearance", "neutral", 3, "size"]],
      template: function TuiFilter_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiFilter_label_0_Template, 4, 10, "label", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, NgForOf, NgIf, PolymorpheusOutlet, TuiBadge, TuiBlock, TuiHintOverflow],
      styles: ["[_nghost-%COMP%]{display:block;margin-bottom:calc(-1 * var(--t-gap));--t-gap: .25rem}[data-size=l][_nghost-%COMP%]{--t-gap: .5rem}.t-item[_ngcontent-%COMP%]{max-inline-size:11rem;margin:0 var(--t-gap) var(--t-gap) 0}.t-item[_ngcontent-%COMP%]:last-child{margin-right:0}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilter, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-filter",
      imports: [FormsModule, NgForOf, NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiBadge, TuiBlock, TuiHintOverflow],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider([])],
      host: {
        "[attr.data-size]": "size"
      },
      template: '<label\n    *ngFor="let item of items"\n    appearance=""\n    class="t-item"\n    [tuiBlock]="size"\n>\n    <span\n        *polymorpheusOutlet="content as text; context: {$implicit: item}"\n        tuiHintOverflow\n        class="t-text"\n    >\n        {{ text }}\n    </span>\n    <tui-badge\n        *ngIf="badgeHandler(item) as badgeValue"\n        appearance="neutral"\n        [size]="size"\n    >\n        {{ badgeValue }}\n    </tui-badge>\n    <input\n        tuiBlock\n        type="checkbox"\n        [disabled]="disabledItemHandler(item)"\n        [ngModel]="isCheckboxEnabled(item)"\n        [ngModelOptions]="{standalone: true}"\n        (ngModelChange)="onCheckbox($event, item)"\n    />\n</label>\n',
      styles: [":host{display:block;margin-bottom:calc(-1 * var(--t-gap));--t-gap: .25rem}:host[data-size=l]{--t-gap: .5rem}.t-item{max-inline-size:11rem;margin:0 var(--t-gap) var(--t-gap) 0}.t-item:last-child{margin-right:0}.t-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n"]
    }]
  }], null, {
    identityMatcher: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    toggledItem: [{
      type: Output
    }],
    content: [{
      type: Input
    }],
    badgeHandler: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-input-inline.mjs
var _c010 = [[["input"]], "*"];
var _c18 = ["input", "*"];
function TuiInputInline_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵprojection(1, 1);
    ɵɵelementEnd();
  }
}
function TuiInputInline_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 1);
    ɵɵtemplate(2, TuiInputInline_ng_container_0_span_2_Template, 2, 0, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const value_r1 = ctx.tuiLet;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("text-indent", ctx_r1.indent, "px");
    ɵɵproperty("textContent", value_r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", !value_r1);
  }
}
var TuiInputInline = class _TuiInputInline {
  constructor() {
    this.value$ = defer(() => tuiControlValue(this.control));
    this.indent = -1;
  }
  onScroll(target) {
    if (tuiIsElement(target) && tuiIsInput(target)) {
      this.indent = -target.scrollLeft - 1;
    }
  }
  static {
    this.ɵfac = function TuiInputInline_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputInline)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputInline,
      selectors: [["tui-input-inline"]],
      contentQueries: function TuiInputInline_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      hostBindings: function TuiInputInline_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("scroll.capture", function TuiInputInline_scroll_capture_HostBindingHandler($event) {
            return ctx.onScroll($event.target);
          });
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c18,
      decls: 3,
      vars: 3,
      consts: [[4, "tuiLet"], [1, "t-before", 3, "textContent"], ["automation-id", "tui-input-inline__placeholder", "class", "t-placeholder", 4, "ngIf"], ["automation-id", "tui-input-inline__placeholder", 1, "t-placeholder"]],
      template: function TuiInputInline_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c010);
          ɵɵtemplate(0, TuiInputInline_ng_container_0_Template, 3, 4, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiLet],
      styles: ["tui-input-inline{position:relative;display:inline-block;overflow:hidden;white-space:nowrap;box-sizing:border-box}tui-input-inline ::spelling-error{color:transparent}tui-input-inline>.t-before{display:block;padding-right:.02em;margin-left:1px;white-space:pre}tui-input-inline>.t-placeholder{display:inline-block;min-inline-size:1px}tui-input-inline>input{position:absolute;top:0;left:0;background-color:transparent;padding:inherit;font:inherit;-webkit-text-fill-color:transparent;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputInline, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-input-inline",
      imports: [AsyncPipe, NgIf, TuiLet],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(scroll.capture)": "onScroll($event.target)"
      },
      template: '<ng-container *tuiLet="value$ | async as value">\n    <span\n        class="t-before"\n        [style.text-indent.px]="indent"\n        [textContent]="value"\n    ></span>\n\n    <span\n        *ngIf="!value"\n        automation-id="tui-input-inline__placeholder"\n        class="t-placeholder"\n    >\n        <ng-content />\n    </span>\n</ng-container>\n<ng-content select="input" />\n',
      styles: ["tui-input-inline{position:relative;display:inline-block;overflow:hidden;white-space:nowrap;box-sizing:border-box}tui-input-inline ::spelling-error{color:transparent}tui-input-inline>.t-before{display:block;padding-right:.02em;margin-left:1px;white-space:pre}tui-input-inline>.t-placeholder{display:inline-block;min-inline-size:1px}tui-input-inline>input{position:absolute;top:0;left:0;background-color:transparent;padding:inherit;font:inherit;-webkit-text-fill-color:transparent;box-sizing:border-box;inline-size:100%;block-size:100%;border-width:0;text-align:inherit;letter-spacing:inherit;text-indent:inherit;text-transform:inherit;outline:none}\n"]
    }]
  }], null, {
    control: [{
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-input-password.mjs
var _c011 = ["tuiInputPassword", ""];
function TuiInputPassword_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-icon", 1);
    ɵɵlistener("click", function TuiInputPassword_tui_icon_0_Template_tui_icon_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hidden.set(!ctx_r1.hidden()));
    })("mousedown.capture.prevent.stop", function TuiInputPassword_tui_icon_0_Template_tui_icon_mousedown_capture_prevent_stop_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.el.focus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border", ctx_r1.size() === "s" ? null : "none");
    ɵɵproperty("icon", ctx_r1.icon())("tuiTooltip", ctx_r1.text());
  }
}
var TUI_INPUT_PASSWORD_DEFAULT_OPTIONS = {
  icons: {
    hide: "@tui.eye-off",
    show: "@tui.eye"
  }
};
var TUI_INPUT_PASSWORD_OPTIONS = tuiCreateToken(TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
function tuiInputPasswordOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_PASSWORD_OPTIONS, options, TUI_INPUT_PASSWORD_DEFAULT_OPTIONS);
}
var TuiInputPassword = class _TuiInputPassword {
  constructor() {
    this.options = inject(TUI_INPUT_PASSWORD_OPTIONS);
    this.texts = toSignal(inject(TUI_PASSWORD_TEXTS), {
      initialValue: ["", ""]
    });
    this.el = tuiInjectElement();
    this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
    this.hidden = signal(true);
    this.text = computed(() => this.hidden() ? this.texts()[0] : this.texts()[1]);
    this.icon = computed((size = this.size()) => {
      const icon = this.hidden() ? this.options.icons.show : this.options.icons.hide;
      return tuiIsString(icon) ? icon : icon(size);
    });
  }
  static {
    this.ɵfac = function TuiInputPassword_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiInputPassword)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputPassword,
      selectors: [["input", "tuiInputPassword", ""]],
      hostVars: 1,
      hostBindings: function TuiInputPassword_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("type", ctx.hidden() ? "password" : "text");
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider("")]), ɵɵHostDirectivesFeature([TuiTextfieldDirective]), ɵɵStandaloneFeature],
      attrs: _c011,
      decls: 1,
      vars: 0,
      consts: [[3, "icon", "border", "tuiTooltip", "click", "mousedown.capture.prevent.stop", 4, "tuiTextfieldContent"], [3, "click", "mousedown.capture.prevent.stop", "icon", "tuiTooltip"]],
      template: function TuiInputPassword_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiInputPassword_tui_icon_0_Template, 1, 4, "tui-icon", 0);
        }
      },
      dependencies: [TuiIcon, TuiTextfieldContent, TuiTooltip],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPassword, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[tuiInputPassword]",
      imports: [TuiIcon, TuiTextfieldContent, TuiTooltip],
      template: `
        <tui-icon
            *tuiTextfieldContent
            [icon]="icon()"
            [style.border]="size() === 's' ? null : 'none'"
            [tuiTooltip]="text()"
            (click)="hidden.set(!hidden())"
            (mousedown.capture.prevent.stop)="el.focus()"
        />
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider("")],
      hostDirectives: [TuiTextfieldDirective],
      host: {
        "[type]": 'hidden() ? "password" : "text"'
      }
    }]
  }], null, null);
})();

// node_modules/@maskito/phone/index.esm.js
var TEMPLATE_FILLER = "x";
function cutInitCountryCodePreprocessor({
  countryIsoCode,
  metadata
}) {
  let isInitializationPhase = true;
  return ({
    elementState,
    data
  }) => {
    if (!isInitializationPhase) {
      return {
        elementState,
        data
      };
    }
    const {
      value,
      selection
    } = elementState;
    isInitializationPhase = false;
    try {
      const phone = parsePhoneNumberWithError(value, countryIsoCode, metadata);
      const code = getCountryCallingCode(countryIsoCode, metadata);
      const newValue = `+${code} ${phone.nationalNumber}`;
      return {
        elementState: {
          value: newValue,
          selection
        }
      };
    } catch (_a) {
      return {
        elementState
      };
    }
  };
}
function cutPhoneByValidLength({
  phone,
  metadata
}) {
  const validationResult = validatePhoneNumberLength(phone, metadata);
  if (validationResult === "TOO_LONG") {
    return cutPhoneByValidLength({
      phone: phone.slice(0, phone.length - 1),
      metadata
    });
  }
  return phone;
}
function generatePhoneMask({
  value,
  template,
  prefix
}) {
  return [...prefix, ...template ? template.slice(prefix.length).split("").map((сhar) => сhar === TEMPLATE_FILLER || /\d/.test(сhar) ? /\d/ : сhar) : new Array(Math.max(value.length - prefix.length, prefix.length)).fill(/\d/)];
}
function maskitoGetCountryFromNumber(number, metadata) {
  const formatter = new AsYouType({}, metadata);
  formatter.input(number);
  return formatter.getCountry();
}
function getPhoneTemplate(formatter, value, separator) {
  formatter.input(value.replaceAll(/[^\d+]/g, ""));
  const initialTemplate = formatter.getTemplate();
  const split = initialTemplate.split(" ");
  const template = split.length > 1 ? `${split.slice(0, 2).join(" ")} ${split.slice(2).join(separator)}` : initialTemplate;
  formatter.reset();
  return template.trim();
}
function selectTemplate({
  currentTemplate,
  newTemplate,
  currentPhoneLength,
  newPhoneLength
}) {
  return newTemplate.length < currentTemplate.length && newPhoneLength > currentPhoneLength ? currentTemplate : newTemplate;
}
var MIN_LENGTH = 3;
function phoneLengthPostprocessorGenerator(metadata) {
  return ({
    value,
    selection
  }) => ({
    value: value.length > MIN_LENGTH ? cutPhoneByValidLength({
      phone: value,
      metadata
    }) : value,
    selection
  });
}
function validatePhonePreprocessorGenerator({
  prefix,
  countryIsoCode,
  metadata
}) {
  return ({
    elementState,
    data
  }) => {
    var _a;
    const {
      selection,
      value
    } = elementState;
    const [from2] = selection;
    const selectionIncludesPrefix = from2 < prefix.length;
    const cleanCode = prefix.trim();
    if (value && !value.startsWith(cleanCode) && !data) {
      const formatter = new AsYouType({
        defaultCountry: countryIsoCode
      }, metadata);
      formatter.input(value);
      const numberValue = (_a = formatter.getNumberValue()) !== null && _a !== void 0 ? _a : "";
      formatter.reset();
      return {
        elementState: {
          value: formatter.input(numberValue),
          selection
        }
      };
    }
    try {
      const validationError = validatePhoneNumberLength(data, {
        defaultCountry: countryIsoCode
      }, metadata);
      if (!validationError) {
        const phone = countryIsoCode ? parsePhoneNumberWithError(data, countryIsoCode, metadata) : parsePhoneNumberWithError(data, metadata);
        const {
          nationalNumber,
          countryCallingCode
        } = phone;
        return {
          elementState: {
            selection,
            value: selectionIncludesPrefix ? "" : prefix
          },
          data: selectionIncludesPrefix ? `+${countryCallingCode} ${nationalNumber}` : nationalNumber
        };
      }
    } catch (_b) {
      return {
        elementState
      };
    }
    return {
      elementState
    };
  };
}
function maskitoPhoneNonStrictOptionsGenerator({
  defaultIsoCode,
  metadata,
  separator = "-"
}) {
  const formatter = new AsYouType(defaultIsoCode, metadata);
  const prefix = "+";
  let currentTemplate = "";
  let currentPhoneLength = 0;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: ({
      value
    }) => {
      const newTemplate = getPhoneTemplate(formatter, value, separator);
      const newPhoneLength = value.replaceAll(/\D/g, "").length;
      currentTemplate = selectTemplate({
        currentTemplate,
        newTemplate,
        currentPhoneLength,
        newPhoneLength
      });
      currentPhoneLength = newPhoneLength;
      return currentTemplate.length === 1 ? ["+", /\d/] : generatePhoneMask({
        value,
        template: currentTemplate,
        prefix
      });
    },
    postprocessors: [phoneLengthPostprocessorGenerator(metadata)],
    preprocessors: [validatePhonePreprocessorGenerator({
      prefix,
      countryIsoCode: defaultIsoCode,
      metadata
    })]
  });
}
function maskitoPhoneStrictOptionsGenerator({
  countryIsoCode,
  metadata,
  separator = "-"
}) {
  const code = getCountryCallingCode(countryIsoCode, metadata);
  const formatter = new AsYouType(countryIsoCode, metadata);
  const prefix = `+${code} `;
  let currentTemplate = "";
  let currentPhoneLength = 0;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: ({
      value
    }) => {
      const newTemplate = getPhoneTemplate(formatter, value, separator);
      const newPhoneLength = value.replaceAll(/\D/g, "").length;
      currentTemplate = selectTemplate({
        currentTemplate,
        newTemplate,
        currentPhoneLength,
        newPhoneLength
      });
      currentPhoneLength = newPhoneLength;
      return generatePhoneMask({
        value,
        template: currentTemplate,
        prefix
      });
    },
    plugins: [maskitoCaretGuard((value, [from2, to]) => [from2 === to ? prefix.length : 0, value.length])],
    postprocessors: [maskitoPrefixPostprocessorGenerator(prefix), phoneLengthPostprocessorGenerator(metadata)],
    preprocessors: [cutInitCountryCodePreprocessor({
      countryIsoCode,
      metadata
    }), validatePhonePreprocessorGenerator({
      prefix,
      countryIsoCode,
      metadata
    })]
  });
}
function maskitoPhoneOptionsGenerator({
  countryIsoCode,
  metadata,
  strict = true,
  separator = "-"
}) {
  return strict && countryIsoCode ? maskitoPhoneStrictOptionsGenerator({
    countryIsoCode,
    metadata,
    separator
  }) : maskitoPhoneNonStrictOptionsGenerator({
    defaultIsoCode: countryIsoCode,
    metadata,
    separator
  });
}

// node_modules/libphonenumber-js/metadata.min.json.js
var metadata_min_json_default = {
  "version": 4,
  "country_calling_codes": {
    "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    "7": ["RU", "KZ"],
    "20": ["EG"],
    "27": ["ZA"],
    "30": ["GR"],
    "31": ["NL"],
    "32": ["BE"],
    "33": ["FR"],
    "34": ["ES"],
    "36": ["HU"],
    "39": ["IT", "VA"],
    "40": ["RO"],
    "41": ["CH"],
    "43": ["AT"],
    "44": ["GB", "GG", "IM", "JE"],
    "45": ["DK"],
    "46": ["SE"],
    "47": ["NO", "SJ"],
    "48": ["PL"],
    "49": ["DE"],
    "51": ["PE"],
    "52": ["MX"],
    "53": ["CU"],
    "54": ["AR"],
    "55": ["BR"],
    "56": ["CL"],
    "57": ["CO"],
    "58": ["VE"],
    "60": ["MY"],
    "61": ["AU", "CC", "CX"],
    "62": ["ID"],
    "63": ["PH"],
    "64": ["NZ"],
    "65": ["SG"],
    "66": ["TH"],
    "81": ["JP"],
    "82": ["KR"],
    "84": ["VN"],
    "86": ["CN"],
    "90": ["TR"],
    "91": ["IN"],
    "92": ["PK"],
    "93": ["AF"],
    "94": ["LK"],
    "95": ["MM"],
    "98": ["IR"],
    "211": ["SS"],
    "212": ["MA", "EH"],
    "213": ["DZ"],
    "216": ["TN"],
    "218": ["LY"],
    "220": ["GM"],
    "221": ["SN"],
    "222": ["MR"],
    "223": ["ML"],
    "224": ["GN"],
    "225": ["CI"],
    "226": ["BF"],
    "227": ["NE"],
    "228": ["TG"],
    "229": ["BJ"],
    "230": ["MU"],
    "231": ["LR"],
    "232": ["SL"],
    "233": ["GH"],
    "234": ["NG"],
    "235": ["TD"],
    "236": ["CF"],
    "237": ["CM"],
    "238": ["CV"],
    "239": ["ST"],
    "240": ["GQ"],
    "241": ["GA"],
    "242": ["CG"],
    "243": ["CD"],
    "244": ["AO"],
    "245": ["GW"],
    "246": ["IO"],
    "247": ["AC"],
    "248": ["SC"],
    "249": ["SD"],
    "250": ["RW"],
    "251": ["ET"],
    "252": ["SO"],
    "253": ["DJ"],
    "254": ["KE"],
    "255": ["TZ"],
    "256": ["UG"],
    "257": ["BI"],
    "258": ["MZ"],
    "260": ["ZM"],
    "261": ["MG"],
    "262": ["RE", "YT"],
    "263": ["ZW"],
    "264": ["NA"],
    "265": ["MW"],
    "266": ["LS"],
    "267": ["BW"],
    "268": ["SZ"],
    "269": ["KM"],
    "290": ["SH", "TA"],
    "291": ["ER"],
    "297": ["AW"],
    "298": ["FO"],
    "299": ["GL"],
    "350": ["GI"],
    "351": ["PT"],
    "352": ["LU"],
    "353": ["IE"],
    "354": ["IS"],
    "355": ["AL"],
    "356": ["MT"],
    "357": ["CY"],
    "358": ["FI", "AX"],
    "359": ["BG"],
    "370": ["LT"],
    "371": ["LV"],
    "372": ["EE"],
    "373": ["MD"],
    "374": ["AM"],
    "375": ["BY"],
    "376": ["AD"],
    "377": ["MC"],
    "378": ["SM"],
    "380": ["UA"],
    "381": ["RS"],
    "382": ["ME"],
    "383": ["XK"],
    "385": ["HR"],
    "386": ["SI"],
    "387": ["BA"],
    "389": ["MK"],
    "420": ["CZ"],
    "421": ["SK"],
    "423": ["LI"],
    "500": ["FK"],
    "501": ["BZ"],
    "502": ["GT"],
    "503": ["SV"],
    "504": ["HN"],
    "505": ["NI"],
    "506": ["CR"],
    "507": ["PA"],
    "508": ["PM"],
    "509": ["HT"],
    "590": ["GP", "BL", "MF"],
    "591": ["BO"],
    "592": ["GY"],
    "593": ["EC"],
    "594": ["GF"],
    "595": ["PY"],
    "596": ["MQ"],
    "597": ["SR"],
    "598": ["UY"],
    "599": ["CW", "BQ"],
    "670": ["TL"],
    "672": ["NF"],
    "673": ["BN"],
    "674": ["NR"],
    "675": ["PG"],
    "676": ["TO"],
    "677": ["SB"],
    "678": ["VU"],
    "679": ["FJ"],
    "680": ["PW"],
    "681": ["WF"],
    "682": ["CK"],
    "683": ["NU"],
    "685": ["WS"],
    "686": ["KI"],
    "687": ["NC"],
    "688": ["TV"],
    "689": ["PF"],
    "690": ["TK"],
    "691": ["FM"],
    "692": ["MH"],
    "850": ["KP"],
    "852": ["HK"],
    "853": ["MO"],
    "855": ["KH"],
    "856": ["LA"],
    "880": ["BD"],
    "886": ["TW"],
    "960": ["MV"],
    "961": ["LB"],
    "962": ["JO"],
    "963": ["SY"],
    "964": ["IQ"],
    "965": ["KW"],
    "966": ["SA"],
    "967": ["YE"],
    "968": ["OM"],
    "970": ["PS"],
    "971": ["AE"],
    "972": ["IL"],
    "973": ["BH"],
    "974": ["QA"],
    "975": ["BT"],
    "976": ["MN"],
    "977": ["NP"],
    "992": ["TJ"],
    "993": ["TM"],
    "994": ["AZ"],
    "995": ["GE"],
    "996": ["KG"],
    "998": ["UZ"]
  },
  "countries": {
    "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
    "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
    "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
    "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
    "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
    "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
    "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
    "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
    "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
    "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
    "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
    "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
    "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
    "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
    "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
    "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
    "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
    "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]],
    "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
    "BJ": ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]],
    "BL": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
    "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
    "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
    "BO": ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
    "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
    "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
    "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
    "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
    "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
    "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
    "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "CD": ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"],
    "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
    "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
    "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
    "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
    "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
    "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
    "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
    "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"],
    "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "60\\d{8}|(?:1\\d|[39])\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"],
    "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
    "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
    "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
    "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
    "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
    "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
    "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
    "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
    "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
    "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
    "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
    "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
    "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
    "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"],
    "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
    "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
    "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
    "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[49]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
    "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "FK": ["500", "00", "[2-7]\\d{4}", [5]],
    "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
    "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
    "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
    "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
    "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
    "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
    "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
    "GF": ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"],
    "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
    "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
    "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
    "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
    "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
    "GP": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
    "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
    "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
    "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
    "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
    "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
    "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "HT": ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]],
    "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
    "ID": ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
    "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
    "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
    "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
    "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
    "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
    "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]],
    "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
    "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"],
    "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
    "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
    "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
    "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
    "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
    "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
    "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
    "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
    "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[0135-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
    "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
    "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
    "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"],
    "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
    "LR": ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"],
    "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
    "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"],
    "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
    "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
    "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
    "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],
    "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
    "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
    "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
    "MF": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]],
    "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"],
    "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
    "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
    "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
    "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
    "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
    "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
    "MQ": ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
    "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
    "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
    "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
    "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
    "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
    "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
    "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]],
    "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
    "NG": ["234", "009", "38\\d{6}|[78]\\d{9,13}|(?:20|9\\d)\\d{8}", [8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["3"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
    "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
    "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
    "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
    "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]],
    "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
    "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
    "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
    "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
    "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
    "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
    "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
    "PM": ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
    "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
    "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
    "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
    "RE": ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
    "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
    "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
    "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
    "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"],
    "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
    "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
    "SC": ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
    "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
    "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
    "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
    "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
    "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
    "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
    "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"],
    "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]],
    "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
    "SV": ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
    "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
    "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
    "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
    "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
    "TD": ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
    "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    "TJ": ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
    "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
    "TM": ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
    "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
    "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
    "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
    "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
    "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
    "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
    "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
    "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]],
    "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
    "UZ": ["998", "00", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]],
    "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
    "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
    "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
    "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
    "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
    "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
    "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
    "WF": ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"],
    "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    "YT": ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],
    "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"],
    "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
  },
  "nonGeographic": {
    "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
    "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
    "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]],
    "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
    "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]],
    "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],
    "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],
    "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
    "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
  }
};

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}

// node_modules/libphonenumber-js/min/exports/validatePhoneNumberLength.js
function validatePhoneNumberLength2() {
  return withMetadataArgument(validatePhoneNumberLength, arguments);
}

// node_modules/libphonenumber-js/min/exports/PhoneNumberMatcher.js
function PhoneNumberMatcher2(text, options) {
  return PhoneNumberMatcher.call(this, text, options, metadata_min_json_default);
}
PhoneNumberMatcher2.prototype = Object.create(PhoneNumberMatcher.prototype, {});
PhoneNumberMatcher2.prototype.constructor = PhoneNumberMatcher2;

// node_modules/libphonenumber-js/min/exports/AsYouType.js
function AsYouType2(country) {
  return AsYouType.call(this, country, metadata_min_json_default);
}
AsYouType2.prototype = Object.create(AsYouType.prototype, {});
AsYouType2.prototype.constructor = AsYouType2;

// node_modules/libphonenumber-js/min/exports/Metadata.js
function Metadata2() {
  return Metadata.call(this, metadata_min_json_default);
}
Metadata2.prototype = Object.create(Metadata.prototype, {});
Metadata2.prototype.constructor = Metadata2;

// node_modules/libphonenumber-js/es6/legacy/findPhoneNumbersInitialImplementation.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var EXTN_PATTERNS_FOR_PARSING = createExtensionPattern("parsing");
var WHITESPACE_IN_THE_BEGINNING_PATTERN = new RegExp("^[" + WHITESPACE + "]+");
var PUNCTUATION_IN_THE_END_PATTERN = new RegExp("[" + VALID_PUNCTUATION + "]+$");
var PhoneNumberSearch = function() {
  function PhoneNumberSearch3(text, options, metadata) {
    _classCallCheck(this, PhoneNumberSearch3);
    this.text = text;
    this.options = options || {};
    this.metadata = metadata;
    this.state = "NOT_READY";
    this.regexp = new RegExp(VALID_PHONE_NUMBER_WITH_EXTENSION, "ig");
  }
  _createClass(PhoneNumberSearch3, [{
    key: "find",
    value: function find() {
      var matches = this.regexp.exec(this.text);
      if (!matches) {
        return;
      }
      var number = matches[0];
      var startsAt = matches.index;
      number = number.replace(WHITESPACE_IN_THE_BEGINNING_PATTERN, "");
      startsAt += matches[0].length - number.length;
      number = number.replace(PUNCTUATION_IN_THE_END_PATTERN, "");
      number = parsePreCandidate(number);
      var result = this.parseCandidate(number, startsAt);
      if (result) {
        return result;
      }
      return this.find();
    }
  }, {
    key: "parseCandidate",
    value: function parseCandidate(number, startsAt) {
      if (!isValidPreCandidate(number, startsAt, this.text)) {
        return;
      }
      if (!isValidCandidate(number, startsAt, this.text, this.options.extended ? "POSSIBLE" : "VALID")) {
        return;
      }
      var result = parse(number, this.options, this.metadata);
      if (!result.phone) {
        return;
      }
      result.startsAt = startsAt;
      result.endsAt = startsAt + number.length;
      return result;
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === "NOT_READY") {
        this.last_match = this.find();
        if (this.last_match) {
          this.state = "READY";
        } else {
          this.state = "DONE";
        }
      }
      return this.state === "READY";
    }
  }, {
    key: "next",
    value: function next() {
      if (!this.hasNext()) {
        throw new Error("No next element");
      }
      var result = this.last_match;
      this.last_match = null;
      this.state = "NOT_READY";
      return result;
    }
  }]);
  return PhoneNumberSearch3;
}();

// node_modules/libphonenumber-js/index.es6.exports/PhoneNumberSearch.js
function PhoneNumberSearch2(text, options) {
  PhoneNumberSearch.call(this, text, options, metadata_min_json_default);
}
PhoneNumberSearch2.prototype = Object.create(PhoneNumberSearch.prototype, {});
PhoneNumberSearch2.prototype.constructor = PhoneNumberSearch2;

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-input-phone-international.mjs
var _c012 = [[["tui-icon"], ["img"]], "*"];
var _c19 = ["tui-icon, img", "*"];
var _c22 = () => ({
  standalone: true
});
function TuiInputPhoneInternational_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 6);
    ɵɵpipe(1, "tuiFlag");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("alt", (tmp_2_0 = ctx_r1.names()) == null ? null : tmp_2_0[ctx_r1.countryIsoCode()])("src", ɵɵpipeBind1(1, 2, ctx_r1.countryIsoCode()), ɵɵsanitizeUrl);
  }
}
function TuiInputPhoneInternational_ng_container_9_tui_textfield_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-textfield", 10)(1, "input", 11);
    ɵɵlistener("keydown.arrowDown", function TuiInputPhoneInternational_ng_container_9_tui_textfield_1_Template_input_keydown_arrowDown_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.focusFirstItem());
    })("ngModelChange", function TuiInputPhoneInternational_ng_container_9_tui_textfield_1_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.search.set($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("iconStart", ctx_r1.icons.search);
    ɵɵadvance();
    ɵɵproperty("focused", true)("ngModel", ctx_r1.search())("placeholder", ctx_r1.label())("tuiAutoFocus", !ctx_r1.isIos);
  }
}
function TuiInputPhoneInternational_ng_container_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TuiInputPhoneInternational_ng_container_9_button_3_Template_button_click_0_listener() {
      const item_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemClick(item_r6.iso));
    });
    ɵɵelement(1, "img", 13);
    ɵɵpipe(2, "tuiFlag");
    ɵɵelementStart(3, "span", 14);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 15);
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("src", ɵɵpipeBind1(2, 3, item_r6.iso), ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵtextInterpolate(item_r6.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate(item_r6.code);
  }
}
function TuiInputPhoneInternational_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiInputPhoneInternational_ng_container_9_tui_textfield_1_Template, 2, 5, "tui-textfield", 7);
    ɵɵelementStart(2, "tui-data-list", 8);
    ɵɵlistener("keydown", function TuiInputPhoneInternational_ng_container_9_Template_tui_data_list_keydown_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeyDown($event));
    });
    ɵɵtemplate(3, TuiInputPhoneInternational_ng_container_9_button_3_Template, 7, 5, "button", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.countrySearch);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.filtered());
  }
}
var TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS = {
  countries: [],
  countryIsoCode: "RU",
  metadata: of({
    countries: {},
    country_calling_codes: {}
  }),
  separator: "-"
};
var TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS = tuiCreateToken(TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
function tuiInputPhoneInternationalOptionsProvider(options) {
  return tuiProvideOptions(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS, options, TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS);
}
var NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;
var TuiInputPhoneInternational = class _TuiInputPhoneInternational extends TuiControl {
  constructor() {
    super(...arguments);
    this.isIos = inject(TUI_IS_IOS);
    this.dropdown = tuiDropdown(null);
    this.options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    this.size = inject(TUI_TEXTFIELD_OPTIONS).size;
    this.open = tuiDropdownOpen();
    this.names = toSignal(inject(TUI_COUNTRIES));
    this.metadata = toSignal(from(this.options.metadata));
    this.countries = signal(this.options.countries);
    this.countryIsoCode = signal(this.options.countryIsoCode);
    this.icons = inject(TUI_COMMON_ICONS);
    this.label = toSignal(inject(TUI_INTERNATIONAL_SEARCH));
    this.search = signal("");
    this.separator = signal(this.options.separator);
    this.filtered = computed(() => this.countries().map((iso) => ({
      iso,
      name: this.names()?.[iso] || "",
      code: tuiGetCallingCode(iso, this.metadata())
    })).filter(({
      name,
      code
    }) => TUI_DEFAULT_MATCHER(name + code, this.search())));
    this.mask = computed(() => this.computeMask(this.countryIsoCode(), this.metadata(), this.separator()));
    this.$ = tuiDirectiveBinding(TuiDropdownOpen, "tuiDropdownEnabled", this.interactive);
    this.textfieldValue = "";
    this.countrySearch = false;
    this.countryIsoCodeChange = toObservable(this.countryIsoCode).pipe(skip(1));
  }
  set countriesValue(value) {
    this.countries.set(value);
  }
  set isoCode(code) {
    this.countryIsoCode.set(code);
  }
  focusFirstItem() {
    this.listOptions?.get(0)?.nativeElement.focus();
  }
  onPaste(event) {
    const phonesMetadata = this.metadata();
    if (!tuiIsInputEvent(event) || !phonesMetadata || !event.inputType.includes("Drop") && !event.inputType.includes("Paste")) {
      return;
    }
    const newValue = event.data || "";
    const prefixedValue = newValue.startsWith(CHAR_PLUS) ? newValue : CHAR_PLUS + newValue;
    if (validatePhoneNumberLength2(prefixedValue) === "TOO_SHORT") {
      return;
    }
    const countryIsoCode = maskitoGetCountryFromNumber(prefixedValue, phonesMetadata);
    if (countryIsoCode) {
      this.countryIsoCode.set(countryIsoCode);
    }
  }
  onItemClick(isoCode) {
    this.open.set(false);
    this.countryIsoCode.set(isoCode);
    this.input?.nativeElement.focus();
  }
  writeValue(unmaskedValue) {
    super.writeValue(unmaskedValue);
    const maskOptions = this.mask();
    this.textfieldValue = maskOptions ? maskitoTransform(unmaskedValue, maskOptions) : unmaskedValue;
    this.cdr.detectChanges();
  }
  set template(template) {
    this.dropdown.set(template);
  }
  onFocus() {
    const phoneMetadata = this.metadata();
    if (!this.textfieldValue && phoneMetadata) {
      this.textfieldValue = `${CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phoneMetadata)} `;
    }
  }
  onValueChange(maskedValue) {
    const unmaskedValue = maskedValue.replaceAll(NOT_FORM_CONTROL_SYMBOLS, "");
    const phonesMetadata = this.metadata();
    const countryCallingCode = phonesMetadata ? CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phonesMetadata) : "";
    this.onChange(unmaskedValue === countryCallingCode ? "" : unmaskedValue);
  }
  onKeyDown({
    key
  }) {
    if (tuiIsEditingKey(key)) {
      this.filter?.nativeElement.focus({
        preventScroll: true
      });
    }
  }
  computeMask(countryIsoCode, metadata, separator) {
    if (!metadata) {
      return null;
    }
    const _a = maskitoPhoneOptionsGenerator({
      countryIsoCode,
      metadata,
      separator
    }), {
      plugins
    } = _a, restOptions = __objRest(_a, [
      "plugins"
    ]);
    return __spreadProps(__spreadValues({}, restOptions), {
      plugins: [...plugins, maskitoRemoveOnBlurPlugin(`${CHAR_PLUS}${getCountryCallingCode(countryIsoCode, metadata)} `), maskitoInitialCalibrationPlugin()]
    });
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiInputPhoneInternational_BaseFactory;
      return function TuiInputPhoneInternational_Factory(__ngFactoryType__) {
        return (ɵTuiInputPhoneInternational_BaseFactory || (ɵTuiInputPhoneInternational_BaseFactory = ɵɵgetInheritedFactory(_TuiInputPhoneInternational)))(__ngFactoryType__ || _TuiInputPhoneInternational);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiInputPhoneInternational,
      selectors: [["tui-input-phone-international"]],
      viewQuery: function TuiInputPhoneInternational_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MaskitoDirective, 5, ElementRef);
          ɵɵviewQuery(TuiAutoFocus, 5, ElementRef);
          ɵɵviewQuery(TuiTextfieldDropdownDirective, 5, TemplateRef);
          ɵɵviewQuery(TuiOption, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filter = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOptions = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiInputPhoneInternational_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size());
        }
      },
      inputs: {
        countrySearch: "countrySearch",
        countriesValue: [0, "countries", "countriesValue"],
        isoCode: [0, "countryIsoCode", "isoCode"]
      },
      outputs: {
        countryIsoCodeChange: "countryIsoCodeChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsControl(_TuiInputPhoneInternational), tuiFallbackValueProvider(""), tuiAutoFocusOptionsProvider({
        preventScroll: true
      }), tuiTextfieldOptionsProvider({
        cleaner: signal(false)
      }), tuiDropdownOptionsProvider({
        limitWidth: "fixed",
        align: "right"
      })]), ɵɵHostDirectivesFeature([TuiGroup, TuiDropdownDirective, TuiWithDropdownOpen]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c19,
      decls: 10,
      vars: 14,
      consts: [["flag", ""], [1, "t-select", 3, "content", "tuiChevron"], ["ngModel", "", "tuiTextfield", "", 3, "disabled", "focused", "ngModelOptions"], ["autocomplete", "new-password", "tuiTextfield", "", 3, "ngModelChange", "beforeinput.capture", "blur", "focus", "disabled", "maskito", "ngModelOptions", "ngModel"], ["tuiLabel", ""], [4, "tuiTextfieldDropdown"], [1, "t-flag", 3, "alt", "src"], ["tuiTextfieldSize", "m", "class", "t-search", 3, "iconStart", 4, "ngIf"], [3, "keydown"], ["tuiOption", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], ["tuiTextfieldSize", "m", 1, "t-search", 3, "iconStart"], ["tuiTextfield", "", 3, "keydown.arrowDown", "ngModelChange", "focused", "ngModel", "placeholder", "tuiAutoFocus"], ["tuiOption", "", "type", "button", 3, "click"], ["alt", "", 1, "t-flag", 3, "src"], [1, "t-name"], [1, "t-code"]],
      template: function TuiInputPhoneInternational_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef(_c012);
          ɵɵelementStart(0, "tui-textfield", 1);
          ɵɵelement(1, "select", 2);
          ɵɵtemplate(2, TuiInputPhoneInternational_ng_template_2_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
          ɵɵelementStart(4, "tui-textfield")(5, "input", 3);
          ɵɵtwoWayListener("ngModelChange", function TuiInputPhoneInternational_Template_input_ngModelChange_5_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.textfieldValue, $event) || (ctx.textfieldValue = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("beforeinput.capture", function TuiInputPhoneInternational_Template_input_beforeinput_capture_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onPaste($event));
          })("blur", function TuiInputPhoneInternational_Template_input_blur_5_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onTouched());
          })("focus", function TuiInputPhoneInternational_Template_input_focus_5_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(!ctx.readOnly() && ctx.onFocus());
          })("ngModelChange", function TuiInputPhoneInternational_Template_input_ngModelChange_5_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onValueChange($event));
          });
          ɵɵelementEnd();
          ɵɵprojection(6);
          ɵɵelementStart(7, "label", 4);
          ɵɵprojection(8, 1);
          ɵɵelementEnd()();
          ɵɵtemplate(9, TuiInputPhoneInternational_ng_container_9_Template, 4, 2, "ng-container", 5);
        }
        if (rf & 2) {
          const flag_r7 = ɵɵreference(3);
          ɵɵproperty("content", flag_r7)("tuiChevron", ctx.open());
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("focused", ctx.open())("ngModelOptions", ɵɵpureFunction0(12, _c22));
          ɵɵattribute("data-mode", ctx.mode());
          ɵɵadvance(4);
          ɵɵproperty("disabled", ctx.disabled())("maskito", ctx.mask())("ngModelOptions", ɵɵpureFunction0(13, _c22));
          ɵɵtwoWayProperty("ngModel", ctx.textfieldValue);
          ɵɵattribute("data-mode", ctx.mode())("readonly", ctx.readOnly() || null);
        }
      },
      dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, MaskitoDirective, TuiAutoFocus, TuiChevron, TuiDataListComponent, TuiOption, TuiFlagPipe, TuiLabel, TuiSelect, TuiTextfieldComponent, TuiTextfieldDirective, TuiTextfieldOptionsDirective, TuiTextfieldDropdownDirective],
      styles: [".t-select[_ngcontent-%COMP%]{inline-size:5.625rem;flex:none}.t-select[data-size=m][_ngcontent-%COMP%]{inline-size:5rem}.t-select[data-size=s][_ngcontent-%COMP%]{inline-size:4rem}.t-flag[_ngcontent-%COMP%]{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-name[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}.t-code[_ngcontent-%COMP%]{color:var(--tui-text-secondary);margin-inline-end:.25rem}.t-search[_ngcontent-%COMP%]{position:sticky;top:.375rem;background:var(--tui-background-elevation-3);box-shadow:0 -1rem var(--tui-background-elevation-3);margin:.375rem .375rem 0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiInputPhoneInternational, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-input-phone-international",
      imports: [CommonModule, FormsModule, MaskitoDirective, TuiAutoFocus, TuiChevron, TuiDataList, TuiFlagPipe, TuiTextfield],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsControl(TuiInputPhoneInternational), tuiFallbackValueProvider(""), tuiAutoFocusOptionsProvider({
        preventScroll: true
      }), tuiTextfieldOptionsProvider({
        cleaner: signal(false)
      }), tuiDropdownOptionsProvider({
        limitWidth: "fixed",
        align: "right"
      })],
      hostDirectives: [TuiGroup, TuiDropdownDirective, TuiWithDropdownOpen],
      host: {
        "[attr.data-size]": "size()"
      },
      template: '<tui-textfield\n    class="t-select"\n    [content]="flag"\n    [tuiChevron]="open()"\n>\n    <select\n        ngModel=""\n        tuiTextfield\n        [attr.data-mode]="mode()"\n        [disabled]="disabled()"\n        [focused]="open()"\n        [ngModelOptions]="{standalone: true}"\n    ></select>\n\n    <ng-template #flag>\n        <img\n            class="t-flag"\n            [alt]="names()?.[countryIsoCode()]"\n            [src]="countryIsoCode() | tuiFlag"\n        />\n    </ng-template>\n</tui-textfield>\n\n<tui-textfield>\n    <!--TODO: Replace attribute bindings with inputs after Angular updated and signal bindings properly update-->\n    <input\n        autocomplete="new-password"\n        tuiTextfield\n        [attr.data-mode]="mode()"\n        [attr.readonly]="readOnly() || null"\n        [disabled]="disabled()"\n        [maskito]="mask()"\n        [ngModelOptions]="{standalone: true}"\n        [(ngModel)]="textfieldValue"\n        (beforeinput.capture)="onPaste($event)"\n        (blur)="onTouched()"\n        (focus)="!readOnly() && onFocus()"\n        (ngModelChange)="onValueChange($event)"\n    />\n\n    <!--\n    TODO: get rid of built-in input and label and just externalize everything in 5.0\n    <tui-input-phone-international>\n      <label tuiLabel>My label</label>\n      <input tuiTextfield placeholder="My placeholder" [(ngModel)]="value" />\n      <tui-icon icon="@tui.phone" />\n    </tui-input-phone-international>\n    -->\n    <ng-content select="tui-icon, img" />\n\n    <label tuiLabel>\n        <ng-content />\n    </label>\n</tui-textfield>\n\n<ng-container *tuiTextfieldDropdown>\n    <tui-textfield\n        *ngIf="countrySearch"\n        tuiTextfieldSize="m"\n        class="t-search"\n        [iconStart]="icons.search"\n    >\n        <input\n            tuiTextfield\n            [focused]="true"\n            [ngModel]="search()"\n            [placeholder]="label()"\n            [tuiAutoFocus]="!isIos"\n            (keydown.arrowDown)="focusFirstItem()"\n            (ngModelChange)="search.set($event)"\n        />\n    </tui-textfield>\n\n    <tui-data-list (keydown)="onKeyDown($event)">\n        <button\n            *ngFor="let item of filtered()"\n            tuiOption\n            type="button"\n            (click)="onItemClick(item.iso)"\n        >\n            <img\n                alt=""\n                class="t-flag"\n                [src]="item.iso | tuiFlag"\n            />\n            <span class="t-name">{{ item.name }}</span>\n            <span class="t-code">{{ item.code }}</span>\n        </button>\n    </tui-data-list>\n</ng-container>\n',
      styles: [".t-select{inline-size:5.625rem;flex:none}.t-select[data-size=m]{inline-size:5rem}.t-select[data-size=s]{inline-size:4rem}.t-flag{inline-size:1.75rem;block-size:1.75rem;border-radius:100%}.t-name{margin:0 auto 0 .75rem}.t-code{color:var(--tui-text-secondary);margin-inline-end:.25rem}.t-search{position:sticky;top:.375rem;background:var(--tui-background-elevation-3);box-shadow:0 -1rem var(--tui-background-elevation-3);margin:.375rem .375rem 0}\n"]
    }]
  }], null, {
    input: [{
      type: ViewChild,
      args: [MaskitoDirective, {
        read: ElementRef
      }]
    }],
    filter: [{
      type: ViewChild,
      args: [TuiAutoFocus, {
        read: ElementRef
      }]
    }],
    listOptions: [{
      type: ViewChildren,
      args: [TuiOption, {
        read: ElementRef
      }]
    }],
    countrySearch: [{
      type: Input
    }],
    countryIsoCodeChange: [{
      type: Output
    }],
    countriesValue: [{
      type: Input,
      args: ["countries"]
    }],
    isoCode: [{
      type: Input,
      args: ["countryIsoCode"]
    }],
    template: [{
      type: ViewChild,
      args: [forwardRef(() => TuiTextfieldDropdownDirective), {
        read: TemplateRef
      }]
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-like.mjs
var _c013 = ["tuiLike", "", "type", "checkbox"];
var [TUI_LIKE_OPTIONS, tuiLikeOptionsProvider] = tuiCreateOptions({
  size: "m",
  appearance: "secondary",
  icons: {
    unchecked: "@tui.heart",
    checked: "@tui.heart-filled"
  }
});
var TuiLike = class _TuiLike {
  constructor() {
    this.options = inject(TUI_LIKE_OPTIONS);
    this.resolver = tuiInjectIconResolver();
    this.color = "";
    this.uncheckedIcon = this.options.icons.unchecked;
    this.checkedIcon = this.options.icons.checked;
    this.size = this.options.size;
  }
  getIcon(state) {
    const option = state === "checked" ? this.checkedIcon : this.uncheckedIcon;
    const icon = tuiIsString(option) ? option : option(this.size);
    return icon && `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiLike_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLike)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLike,
      selectors: [["input", "tuiLike", "", "type", "checkbox"]],
      hostAttrs: ["tuiLike", ""],
      hostVars: 8,
      hostBindings: function TuiLike_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("data-mode", "");
          ɵɵstyleProp("--t-icon-color", ctx.color)("--t-unchecked-icon", ctx.getIcon("unchecked"))("--t-checked-icon", ctx.getIcon("checked"));
        }
      },
      inputs: {
        color: [0, "tuiLike", "color"],
        uncheckedIcon: "uncheckedIcon",
        checkedIcon: "checkedIcon",
        size: "size"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAppearanceOptionsProvider(TUI_LIKE_OPTIONS)]), ɵɵHostDirectivesFeature([TuiWithAppearance]), ɵɵStandaloneFeature],
      attrs: _c013,
      decls: 0,
      vars: 0,
      template: function TuiLike_Template(rf, ctx) {
      },
      styles: ['[tuiLike]{--t-size: var(--tui-height-m);--t-border-width: .75rem;inline-size:var(--t-size);block-size:var(--t-size);border:var(--t-border-width) transparent solid;border-radius:100%;cursor:pointer;margin:0;flex-shrink:0}[tuiLike]:before,[tuiLike]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";background:currentColor;-webkit-mask:var(--t-unchecked-icon) no-repeat center / contain;mask:var(--t-unchecked-icon) no-repeat center / contain}[tuiLike]:after{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);opacity:0;color:var(--t-icon-color, inherit);transform:scale(0)}[tuiLike]:checked:before{opacity:0}[tuiLike]:checked:after{opacity:1;transform:scale(1);transition-timing-function:cubic-bezier(.2,.6,.5,1.8),ease-in-out}[tuiLike][data-size=s]{--t-size: var(--tui-height-s);--t-border-width: .5rem}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLike, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[tuiLike][type=checkbox]",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAppearanceOptionsProvider(TUI_LIKE_OPTIONS)],
      hostDirectives: [TuiWithAppearance],
      host: {
        tuiLike: "",
        "[attr.data-size]": "size",
        "[attr.data-mode]": '""',
        "[style.--t-icon-color]": "color",
        "[style.--t-unchecked-icon]": 'getIcon("unchecked")',
        "[style.--t-checked-icon]": 'getIcon("checked")'
      },
      styles: ['[tuiLike]{--t-size: var(--tui-height-m);--t-border-width: .75rem;inline-size:var(--t-size);block-size:var(--t-size);border:var(--t-border-width) transparent solid;border-radius:100%;cursor:pointer;margin:0;flex-shrink:0}[tuiLike]:before,[tuiLike]:after{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";background:currentColor;-webkit-mask:var(--t-unchecked-icon) no-repeat center / contain;mask:var(--t-unchecked-icon) no-repeat center / contain}[tuiLike]:after{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);opacity:0;color:var(--t-icon-color, inherit);transform:scale(0)}[tuiLike]:checked:before{opacity:0}[tuiLike]:checked:after{opacity:1;transform:scale(1);transition-timing-function:cubic-bezier(.2,.6,.5,1.8),ease-in-out}[tuiLike][data-size=s]{--t-size: var(--tui-height-s);--t-border-width: .5rem}\n']
    }]
  }], null, {
    color: [{
      type: Input,
      args: ["tuiLike"]
    }],
    uncheckedIcon: [{
      type: Input
    }],
    checkedIcon: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-line-clamp.mjs
function TuiLineClampBox_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate(text_r1);
  }
}
function TuiLineClamp_ng_container_1_Template(rf, ctx) {
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
var TUI_LINE_CLAMP_DEFAULT_OPTIONS = {
  showHint: true
};
var TUI_LINE_CLAMP_OPTIONS = tuiCreateToken(TUI_LINE_CLAMP_DEFAULT_OPTIONS);
function tuiLineClampOptionsProvider(options) {
  return tuiProvideOptions(TUI_LINE_CLAMP_OPTIONS, options, TUI_LINE_CLAMP_DEFAULT_OPTIONS);
}
var TuiLineClampBox = class _TuiLineClampBox extends TuiHintComponent {
  get width() {
    return this.accessor.getClientRect().width;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiLineClampBox_BaseFactory;
      return function TuiLineClampBox_Factory(__ngFactoryType__) {
        return (ɵTuiLineClampBox_BaseFactory || (ɵTuiLineClampBox_BaseFactory = ɵɵgetInheritedFactory(_TuiLineClampBox)))(__ngFactoryType__ || _TuiLineClampBox);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLineClampBox,
      selectors: [["ng-component"]],
      hostVars: 2,
      hostBindings: function TuiLineClampBox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("min-width", ctx.width, "px");
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature(TUI_HINT_PROVIDERS), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "polymorpheusOutlet"]],
      template: function TuiLineClampBox_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiLineClampBox_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.content());
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["[_nghost-%COMP%]{position:absolute;box-shadow:var(--tui-shadow-medium);inline-size:-webkit-min-content;inline-size:min-content;padding:.75rem 1rem;margin-left:calc(-1px - 1rem);margin-top:calc(-1px - .75rem);border-radius:var(--tui-radius-l);box-sizing:content-box;border:1px solid var(--tui-border-normal);background:var(--tui-background-base);color:var(--tui-text-primary);overflow-wrap:break-word}"],
      data: {
        animation: [tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLineClampBox, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      template: `
        <ng-container *polymorpheusOutlet="content() as text">{{ text }}</ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: TUI_HINT_PROVIDERS,
      animations: [tuiFadeIn],
      host: {
        "[style.min-width.px]": "width"
      },
      styles: [":host{position:absolute;box-shadow:var(--tui-shadow-medium);inline-size:-webkit-min-content;inline-size:min-content;padding:.75rem 1rem;margin-left:calc(-1px - 1rem);margin-top:calc(-1px - .75rem);border-radius:var(--tui-radius-l);box-sizing:content-box;border:1px solid var(--tui-border-normal);background:var(--tui-background-base);color:var(--tui-text-primary);overflow-wrap:break-word}\n"]
    }]
  }], null, null);
})();
var TuiLineClampPositionDirective = class _TuiLineClampPositionDirective extends TuiPositionAccessor {
  constructor() {
    super(...arguments);
    this.accessor = inject(TuiHintDirective);
    this.type = "hint";
  }
  getPosition() {
    const {
      top,
      left
    } = this.accessor.getClientRect();
    return [top, left];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiLineClampPositionDirective_BaseFactory;
      return function TuiLineClampPositionDirective_Factory(__ngFactoryType__) {
        return (ɵTuiLineClampPositionDirective_BaseFactory || (ɵTuiLineClampPositionDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiLineClampPositionDirective)))(__ngFactoryType__ || _TuiLineClampPositionDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiLineClampPositionDirective,
      selectors: [["", "tuiLineClampPosition", ""]],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPositionAccessor(_TuiLineClampPositionDirective)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLineClampPositionDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiLineClampPosition]",
      providers: [tuiAsPositionAccessor(TuiLineClampPositionDirective)]
    }]
  }], null, null);
})();
var TuiLineClamp = class _TuiLineClamp {
  constructor() {
    this.options = inject(TUI_LINE_CLAMP_OPTIONS);
    this.el = tuiInjectElement();
    this.cd = inject(ChangeDetectorRef);
    this.zone = inject(NgZone);
    this.linesLimit$ = new BehaviorSubject(1);
    this.isOverflown$ = new Subject();
    this.initialized = signal(false);
    this.maxHeight = signal(0);
    this.height = signal(0);
    this.$ = timer(0).pipe(tuiZonefree(this.zone), takeUntilDestroyed()).subscribe(() => this.initialized.set(true));
    this.lineClamp = toSignal(this.linesLimit$.pipe(startWith(1), pairwise(), switchMap(([prev, next]) => next >= prev ? of(next) : tuiTypedFromEvent(this.el, "transitionend").pipe(filter(tuiIsCurrentTarget), map(() => next))), takeUntilDestroyed()), {
      initialValue: 0
    });
    this.lineHeight = 24;
    this.overflownChange = this.isOverflown$.pipe(distinctUntilChanged());
  }
  set linesLimit(linesLimit) {
    this.linesLimit$.next(linesLimit);
  }
  ngDoCheck() {
    this.update();
    this.isOverflown$.next(this.overflown);
  }
  ngAfterViewInit() {
    this.initialized.set(true);
  }
  get overflown() {
    if (!this.outlet) {
      return false;
    }
    const {
      scrollHeight,
      scrollWidth
    } = this.outlet.nativeElement;
    const {
      clientHeight,
      clientWidth
    } = this.el;
    return scrollHeight - clientHeight > 4 || scrollWidth - clientWidth > 0;
  }
  get computedContent() {
    return this.options.showHint && this.overflown ? this.content : "";
  }
  updateView() {
    this.cd.detectChanges();
  }
  update() {
    if (this.outlet) {
      this.height.set(this.outlet.nativeElement.scrollHeight + 4);
    }
    if (this.initialized()) {
      this.maxHeight.set(this.lineHeight * this.linesLimit$.value);
    }
  }
  static {
    this.ɵfac = function TuiLineClamp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiLineClamp)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiLineClamp,
      selectors: [["tui-line-clamp"]],
      viewQuery: function TuiLineClamp_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiHintDirective, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.outlet = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function TuiLineClamp_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend", function TuiLineClamp_transitionend_HostBindingHandler() {
            return ctx.updateView();
          })("mouseenter", function TuiLineClamp_mouseenter_HostBindingHandler() {
            return ctx.updateView();
          })("resize", function TuiLineClamp_resize_HostBindingHandler() {
            return ctx.updateView();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("height", ctx.height(), "px")("max-height", ctx.maxHeight(), "px");
          ɵɵclassProp("_initialized", ctx.initialized());
        }
      },
      inputs: {
        lineHeight: "lineHeight",
        content: "content",
        linesLimit: "linesLimit"
      },
      outputs: {
        overflownChange: "overflownChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([{
        provide: TUI_HINT_COMPONENT,
        useValue: TuiLineClampBox
      }]), ɵɵStandaloneFeature],
      decls: 2,
      vars: 6,
      consts: [["tuiLineClampPosition", "", 1, "t-wrapper", 3, "tuiHint"], [4, "polymorpheusOutlet"]],
      template: function TuiLineClamp_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, TuiLineClamp_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("-webkit-line-clamp", ctx.lineClamp())("word-break", ctx.lineClamp() > 1 ? "break-word" : "break-all");
          ɵɵproperty("tuiHint", ctx.computedContent);
          ɵɵadvance();
          ɵɵproperty("polymorpheusOutlet", ctx.content);
        }
      },
      dependencies: [PolymorpheusOutlet, TuiHintDirective, TuiLineClampPositionDirective],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;overflow:hidden}._initialized[_nghost-%COMP%]{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiLineClamp, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-line-clamp",
      imports: [AsyncPipe, PolymorpheusOutlet, PolymorpheusTemplate, TuiHint, TuiLineClampPositionDirective, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: TUI_HINT_COMPONENT,
        useValue: TuiLineClampBox
      }],
      host: {
        "[style.height.px]": "height()",
        "[style.max-height.px]": "maxHeight()",
        "[class._initialized]": "initialized()",
        "(transitionend)": "updateView()",
        "(mouseenter)": "updateView()",
        "(resize)": "updateView()"
      },
      template: `<div
    tuiLineClampPosition
    class="t-wrapper"
    [style.-webkit-line-clamp]="lineClamp()"
    [style.word-break]="lineClamp() > 1 ? 'break-word' : 'break-all'"
    [tuiHint]="computedContent"
>
    <ng-container *polymorpheusOutlet="content as text">
        {{ text }}
    </ng-container>
</div>
`,
      styles: [":host{position:relative;display:block;overflow:hidden}:host._initialized{transition-property:max-height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.t-wrapper{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: [TuiHintDirective, {
        read: ElementRef
      }]
    }],
    lineHeight: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    overflownChange: [{
      type: Output
    }],
    linesLimit: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-pagination.mjs
var _c014 = ["element"];
var _c110 = (a0) => ({
  $implicit: a0
});
function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_ng_container_2_Template(rf, ctx) {
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
function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10, 2);
    ɵɵlistener("click", function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const index_r4 = ɵɵnextContext().tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onElementClick(index_r4));
    })("keydown.arrowLeft.prevent", function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r3);
      const element_r5 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onElementKeyDownArrowLeft(element_r5));
    })("keydown.arrowRight.prevent", function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_Template_button_keydown_arrowRight_prevent_0_listener() {
      ɵɵrestoreView(_r3);
      const element_r5 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onElementKeyDownArrowRight(element_r5));
    });
    ɵɵtemplate(2, TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_ng_container_2_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r4 = ɵɵnextContext().tuiLet;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("appearance", ctx_r1.getElementMode(index_r4))("disabled", ctx_r1.disabled)("size", ctx_r1.buttonSize)("tabIndex", ctx_r1.elementIsFocusable(index_r4) ? 0 : -1);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r1.content || index_r4 + 1)("polymorpheusOutletContext", ɵɵpureFunction1(6, _c110, index_r4));
  }
}
function TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_button_1_Template, 3, 8, "button", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r4 = ctx.tuiLet;
    ɵɵnextContext(4);
    const dotsTemplate_r7 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", index_r4 !== null)("ngIfElse", dotsTemplate_r7);
  }
}
function TuiPagination_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPagination_ng_container_1_ng_container_1_ng_container_3_ng_container_1_Template, 2, 2, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const elementIndex_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r1.getItemIndexByElementIndex(elementIndex_r8));
  }
}
function TuiPagination_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 6);
    ɵɵlistener("click", function TuiPagination_ng_container_1_ng_container_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onArrowClick("left"));
    })("mousedown.silent.prevent", function TuiPagination_ng_container_1_ng_container_1_Template_button_mousedown_silent_prevent_1_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(0);
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, TuiPagination_ng_container_1_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementStart(4, "button", 6);
    ɵɵlistener("click", function TuiPagination_ng_container_1_ng_container_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onArrowClick("right"));
    })("mousedown.silent.prevent", function TuiPagination_ng_container_1_ng_container_1_Template_button_mousedown_silent_prevent_4_listener() {
      ɵɵrestoreView(_r1);
      return ɵɵresetView(0);
    });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r9 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.arrowIsDisabledLeft)("iconStart", ctx_r1.icons.decrement)("size", ctx_r1.buttonSize);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r9[0], " ");
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", ctx_r1.elementsLength);
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.arrowIsDisabledRight)("iconStart", ctx_r1.icons.increment)("size", ctx_r1.buttonSize);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r9[1], " ");
  }
}
function TuiPagination_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiPagination_ng_container_1_ng_container_1_Template, 6, 9, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.texts$));
  }
}
function TuiPagination_ng_template_2_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13, 2);
    ɵɵlistener("click", function TuiPagination_ng_template_2_button_0_Template_button_click_0_listener() {
      const indexItem_r11 = ɵɵrestoreView(_r10).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onElementClick(indexItem_r11));
    })("keydown.arrowLeft.prevent", function TuiPagination_ng_template_2_button_0_Template_button_keydown_arrowLeft_prevent_0_listener() {
      ɵɵrestoreView(_r10);
      const element_r12 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onElementKeyDownArrowLeft(element_r12));
    })("keydown.arrowRight.prevent", function TuiPagination_ng_template_2_button_0_Template_button_keydown_arrowRight_prevent_0_listener() {
      ɵɵrestoreView(_r10);
      const element_r12 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onElementKeyDownArrowRight(element_r12));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const indexItem_r11 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("appearance", ctx_r1.getElementMode(indexItem_r11))("disabled", ctx_r1.disabled)("tabIndex", ctx_r1.elementIsFocusable(indexItem_r11) ? 0 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", indexItem_r11 + 1, " ");
  }
}
function TuiPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiPagination_ng_template_2_button_0_Template, 3, 4, "button", 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("tuiRepeatTimesOf", ctx_r1.length);
  }
}
function TuiPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-dots_small", ctx_r1.size === "m");
  }
}
var DOTS_LENGTH = 1;
var ACTIVE_ITEM_LENGTH = 1;
var TuiPagination = class _TuiPagination {
  constructor() {
    this.els = EMPTY_QUERY;
    this.el = tuiInjectElement();
    this.texts$ = inject(TUI_PAGINATION_TEXTS);
    this.icons = inject(TUI_SPIN_ICONS);
    this.length = 1;
    this.focusable = true;
    this.size = "l";
    this.disabled = false;
    this.activePadding = 1;
    this.sidePadding = 1;
    this.index = 0;
    this.indexChange = new EventEmitter();
  }
  get nativeFocusableElement() {
    if (this.disabled) {
      return null;
    }
    let activeElementIndex = 0;
    const {
      elementsLength
    } = this;
    for (let i = 0; i < elementsLength; i++) {
      const itemIndex = this.getItemIndexByElementIndex(i);
      if (itemIndex) {
        activeElementIndex++;
      }
      if (itemIndex === this.index) {
        break;
      }
    }
    return this.els.find((_, index) => index === activeElementIndex)?.nativeElement ?? null;
  }
  get focused() {
    return tuiIsNativeFocusedIn(this.el);
  }
  get arrowIsDisabledLeft() {
    return this.index === 0;
  }
  get arrowIsDisabledRight() {
    return this.reverseIndex === 0;
  }
  /**
   * Number of items in a container.
   */
  get elementsLength() {
    return this.itemsFit ? this.length : this.maxElementsLength;
  }
  get buttonSize() {
    return this.size === "m" ? "xs" : "s";
  }
  elementIsFocusable(index) {
    return this.index === index && !this.focused;
  }
  /**
   * Get index by element index
   * @param elementIndex
   * @returns index or null (for '…')
   */
  getItemIndexByElementIndex(elementIndex) {
    if (this.size === "s") {
      return elementIndex;
    }
    if (elementIndex < this.sidePadding) {
      return elementIndex;
    }
    if (elementIndex === this.sidePadding && this.hasCollapsedItems(this.index)) {
      return null;
    }
    const reverseElementIndex = this.lastElementIndex - elementIndex;
    if (reverseElementIndex === this.sidePadding && this.hasCollapsedItems(this.reverseIndex)) {
      return null;
    }
    if (reverseElementIndex < this.sidePadding) {
      return this.lastIndex - reverseElementIndex;
    }
    const computedIndex = this.index - this.maxHalfLength + elementIndex;
    return tuiClamp(computedIndex, elementIndex, this.lastIndex - reverseElementIndex);
  }
  getElementMode(index) {
    const fallback = this.size === "s" ? "secondary" : "flat";
    return this.index === index ? "primary" : fallback;
  }
  onElementClick(index) {
    this.updateIndex(index);
  }
  onElementKeyDownArrowLeft(element) {
    if (element === this.els.first.nativeElement) {
      return;
    }
    const previous = this.els.find((_, index, array) => array[index + 1]?.nativeElement === element);
    previous?.nativeElement.focus();
  }
  onElementKeyDownArrowRight(element) {
    if (element === this.els.last.nativeElement) {
      return;
    }
    const next = this.els.find((_, index, array) => array[index - 1]?.nativeElement === element);
    next?.nativeElement.focus();
  }
  onArrowClick(direction) {
    this.tryChangeTo(direction);
    this.focusActive();
  }
  /**
   * Active index from the end
   */
  get reverseIndex() {
    return this.lastIndex - this.index;
  }
  /**
   * Max number of elements in half (not counting the middle one).
   */
  get maxHalfLength() {
    return this.sidePadding + DOTS_LENGTH + this.activePadding;
  }
  /**
   * Is there '...' anywhere
   */
  get itemsFit() {
    return this.length <= this.maxElementsLength;
  }
  /**
   * Max number of elements
   */
  get maxElementsLength() {
    return this.maxHalfLength * 2 + ACTIVE_ITEM_LENGTH;
  }
  get lastIndex() {
    return this.length - 1;
  }
  get lastElementIndex() {
    return this.elementsLength - 1;
  }
  /**
   * Are there collapsed items at that index
   * @param index
   * @returns there are collapsed items
   */
  hasCollapsedItems(index) {
    return !this.itemsFit && index > this.maxHalfLength;
  }
  tryChangeTo(direction) {
    this.updateIndex(tuiClamp(this.index + (direction === "right" ? 1 : -1), 0, this.lastIndex));
  }
  focusActive() {
    const {
      nativeFocusableElement
    } = this;
    if (nativeFocusableElement) {
      nativeFocusableElement.focus();
    }
  }
  updateIndex(index) {
    if (this.index === index) {
      return;
    }
    this.index = index;
    this.indexChange.emit(index);
  }
  static {
    this.ɵfac = function TuiPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPagination)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPagination,
      selectors: [["tui-pagination"]],
      viewQuery: function TuiPagination_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c014, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.els = _t);
        }
      },
      inputs: {
        length: "length",
        focusable: "focusable",
        size: "size",
        disabled: "disabled",
        activePadding: "activePadding",
        sidePadding: "sidePadding",
        content: "content",
        index: "index"
      },
      outputs: {
        indexChange: "indexChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 6,
      vars: 2,
      consts: [["smallButtons", ""], ["dotsTemplate", ""], ["element", ""], [1, "t-content"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["appearance", "flat", "tabIndex", "-1", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "mousedown.silent.prevent", "disabled", "iconStart", "size"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [4, "tuiLet"], ["automation-id", "tui-pagination__element", "tuiButton", "", "type", "button", "class", "t-button", 3, "appearance", "disabled", "size", "tabIndex", "click", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", 4, "ngIf", "ngIfElse"], ["automation-id", "tui-pagination__element", "tuiButton", "", "type", "button", 1, "t-button", 3, "click", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", "appearance", "disabled", "size", "tabIndex"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiButton", "", "type", "button", "class", "t-button t-button_small", 3, "appearance", "disabled", "tabIndex", "click", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["tuiButton", "", "type", "button", 1, "t-button", "t-button_small", 3, "click", "keydown.arrowLeft.prevent", "keydown.arrowRight.prevent", "appearance", "disabled", "tabIndex"], ["automation-id", "tui-pagination__element", 1, "t-dots"]],
      template: function TuiPagination_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3);
          ɵɵtemplate(1, TuiPagination_ng_container_1_Template, 3, 3, "ng-container", 4)(2, TuiPagination_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, TuiPagination_ng_template_4_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const smallButtons_r13 = ɵɵreference(3);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.size !== "s")("ngIfElse", smallButtons_r13);
        }
      },
      dependencies: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiButton, TuiLet, TuiRepeatTimes],
      styles: ['[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);text-align:center}.t-content[_ngcontent-%COMP%]{display:flex;justify-content:center}.t-button[_ngcontent-%COMP%]{inline-size:var(--tui-height-s);margin:0 .125rem;flex-shrink:0}.t-button[_ngcontent-%COMP%]:first-child{margin-inline-start:0}.t-button[_ngcontent-%COMP%]:last-child{margin-inline-end:0}.t-button[data-size=xs][_ngcontent-%COMP%]{inline-size:var(--tui-height-xs)}.t-button.t-button.t-button_small[_ngcontent-%COMP%]{inline-size:.5rem;block-size:.5rem;font-size:0;padding:0;margin:0}.t-button.t-button.t-button_small[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}.t-dots[_ngcontent-%COMP%]{inline-size:var(--tui-height-s);block-size:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-action);text-align:center;cursor:default}.t-dots_small[_ngcontent-%COMP%]{inline-size:var(--tui-height-xs);block-size:var(--tui-height-xs);line-height:var(--tui-height-xs)}.t-dots[_ngcontent-%COMP%]:before{content:"\\2026"}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPagination, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-pagination",
      imports: [AsyncPipe, NgIf, PolymorpheusOutlet, TuiButton, TuiLet, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="t-content">
    <ng-container *ngIf="size !== 's'; else smallButtons">
        <ng-container *ngIf="texts$ | async as texts">
            <button
                appearance="flat"
                tabIndex="-1"
                tuiIconButton
                type="button"
                class="t-button"
                [disabled]="arrowIsDisabledLeft"
                [iconStart]="icons.decrement"
                [size]="buttonSize"
                (click)="onArrowClick('left')"
                (mousedown.silent.prevent)="(0)"
            >
                {{ texts[0] }}
            </button>
            <ng-container *tuiRepeatTimes="let elementIndex of elementsLength">
                <ng-container *tuiLet="getItemIndexByElementIndex(elementIndex) as index">
                    <button
                        *ngIf="index !== null; else dotsTemplate"
                        #element
                        automation-id="tui-pagination__element"
                        tuiButton
                        type="button"
                        class="t-button"
                        [appearance]="getElementMode(index)"
                        [disabled]="disabled"
                        [size]="buttonSize"
                        [tabIndex]="elementIsFocusable(index) ? 0 : -1"
                        (click)="onElementClick(index)"
                        (keydown.arrowLeft.prevent)="onElementKeyDownArrowLeft(element)"
                        (keydown.arrowRight.prevent)="onElementKeyDownArrowRight(element)"
                    >
                        <ng-container *polymorpheusOutlet="content || index + 1 as text; context: {$implicit: index}">
                            {{ text }}
                        </ng-container>
                    </button>
                </ng-container>
            </ng-container>
            <button
                appearance="flat"
                tabIndex="-1"
                tuiIconButton
                type="button"
                class="t-button"
                [disabled]="arrowIsDisabledRight"
                [iconStart]="icons.increment"
                [size]="buttonSize"
                (click)="onArrowClick('right')"
                (mousedown.silent.prevent)="(0)"
            >
                {{ texts[1] }}
            </button>
        </ng-container>
    </ng-container>
    <ng-template #smallButtons>
        <button
            *tuiRepeatTimes="let indexItem of length"
            #element
            tuiButton
            type="button"
            class="t-button t-button_small"
            [appearance]="getElementMode(indexItem)"
            [disabled]="disabled"
            [tabIndex]="elementIsFocusable(indexItem) ? 0 : -1"
            (click)="onElementClick(indexItem)"
            (keydown.arrowLeft.prevent)="onElementKeyDownArrowLeft(element)"
            (keydown.arrowRight.prevent)="onElementKeyDownArrowRight(element)"
        >
            {{ indexItem + 1 }}
        </button>
    </ng-template>
    <ng-template #dotsTemplate>
        <div
            automation-id="tui-pagination__element"
            class="t-dots"
            [class.t-dots_small]="size === 'm'"
        ></div>
    </ng-template>
</div>
`,
      styles: [':host{display:block;font:var(--tui-font-text-s);color:var(--tui-text-primary);text-align:center}.t-content{display:flex;justify-content:center}.t-button{inline-size:var(--tui-height-s);margin:0 .125rem;flex-shrink:0}.t-button:first-child{margin-inline-start:0}.t-button:last-child{margin-inline-end:0}.t-button[data-size=xs]{inline-size:var(--tui-height-xs)}.t-button.t-button.t-button_small{inline-size:.5rem;block-size:.5rem;font-size:0;padding:0;margin:0}.t-button.t-button.t-button_small:not(:first-child){margin-left:.5rem}.t-dots{inline-size:var(--tui-height-s);block-size:var(--tui-height-s);line-height:var(--tui-height-s);margin:0 .125rem;flex-shrink:0;color:var(--tui-text-action);text-align:center;cursor:default}.t-dots_small{inline-size:var(--tui-height-xs);block-size:var(--tui-height-xs);line-height:var(--tui-height-xs)}.t-dots:before{content:"\\2026"}\n']
    }]
  }], null, {
    els: [{
      type: ViewChildren,
      args: ["element", {
        read: ElementRef
      }]
    }],
    length: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    activePadding: [{
      type: Input
    }],
    sidePadding: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    indexChange: [{
      type: Output
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-pdf-viewer.mjs
function TuiPdfViewerComponent_ng_container_4_Template(rf, ctx) {
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
function TuiPdfViewerComponent_iframe_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "iframe", 7);
  }
  if (rf & 2) {
    const content_r2 = ctx.polymorpheusOutlet;
    ɵɵproperty("src", content_r2, ɵɵsanitizeResourceUrl);
  }
}
var TuiPdfViewerComponent = class _TuiPdfViewerComponent {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.context = injectContext();
  }
  onKeyDownEsc() {
    this.context.$implicit.complete();
  }
  static {
    this.ɵfac = function TuiPdfViewerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPdfViewerComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPdfViewerComponent,
      selectors: [["tui-pdf-viewer"]],
      hostVars: 2,
      hostBindings: function TuiPdfViewerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.esc", function TuiPdfViewerComponent_keydown_esc_HostBindingHandler() {
            return ctx.onKeyDownEsc();
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideInTop", ctx.options);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 10,
      vars: 11,
      consts: [[1, "t-header"], ["automation-id", "tui-pdf-viewer__label", 1, "t-title"], [1, "t-actions"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["appearance", "", "size", "s", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "iconStart"], [1, "t-content"], ["title", "pdf", "class", "t-iframe", 3, "src", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["title", "pdf", 1, "t-iframe", 3, "src"]],
      template: function TuiPdfViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "header", 0)(1, "h2", 1);
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 2);
          ɵɵtemplate(4, TuiPdfViewerComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
          ɵɵelementEnd();
          ɵɵelementStart(5, "button", 4);
          ɵɵlistener("click", function TuiPdfViewerComponent_Template_button_click_5_listener() {
            return ctx.context.$implicit.complete();
          });
          ɵɵtext(6);
          ɵɵpipe(7, "async");
          ɵɵelementEnd()();
          ɵɵelementStart(8, "section", 5);
          ɵɵtemplate(9, TuiPdfViewerComponent_iframe_9_Template, 1, 1, "iframe", 6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.context.label, " ");
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.context.actions)("polymorpheusOutletContext", ctx.context);
          ɵɵadvance();
          ɵɵstyleProp("border-radius", 100, "%");
          ɵɵproperty("iconStart", ctx.icons.close);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, ctx.closeWord$), " ");
          ɵɵadvance(3);
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [AsyncPipe, PolymorpheusOutlet, TuiButton],
      styles: ["[_nghost-%COMP%]{display:block;inline-size:100%;block-size:100%;box-sizing:border-box;color:#fff;background:#333639}.t-header[_ngcontent-%COMP%]{display:flex;align-items:center;block-size:4rem;padding:0 1rem 0 1.5625rem;box-shadow:inset 0 -1px #535659}.t-title[_ngcontent-%COMP%]{margin:0;font:var(--tui-font-text-m);white-space:nowrap;text-overflow:ellipsis;padding-right:.3125rem;overflow:hidden}.t-actions[_ngcontent-%COMP%]{display:flex;margin-left:auto}.t-close[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.75rem;color:#fff;background:#ffffff52}.t-close[_ngcontent-%COMP%]:hover{background:#fff6}.t-content[_ngcontent-%COMP%]{block-size:calc(100% - 4rem);overflow:hidden}.t-iframe[_ngcontent-%COMP%]{inline-size:100%;block-size:100%}"],
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPdfViewerComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-pdf-viewer",
      imports: [AsyncPipe, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "[@tuiFadeIn]": "options",
        "[@tuiSlideInTop]": "options",
        "(document:keydown.esc)": "onKeyDownEsc()"
      },
      template: '<header class="t-header">\n    <h2\n        automation-id="tui-pdf-viewer__label"\n        class="t-title"\n    >\n        {{ context.label }}\n    </h2>\n    <div class="t-actions">\n        <ng-container *polymorpheusOutlet="context.actions as text; context: context">\n            {{ text }}\n        </ng-container>\n    </div>\n    <button\n        appearance=""\n        size="s"\n        tuiIconButton\n        type="button"\n        class="t-close"\n        [iconStart]="icons.close"\n        [style.border-radius.%]="100"\n        (click)="context.$implicit.complete()"\n    >\n        {{ closeWord$ | async }}\n    </button>\n</header>\n<section class="t-content">\n    <iframe\n        *polymorpheusOutlet="context.content as content; context: context"\n        title="pdf"\n        class="t-iframe"\n        [src]="content"\n    ></iframe>\n</section>\n',
      styles: [":host{display:block;inline-size:100%;block-size:100%;box-sizing:border-box;color:#fff;background:#333639}.t-header{display:flex;align-items:center;block-size:4rem;padding:0 1rem 0 1.5625rem;box-shadow:inset 0 -1px #535659}.t-title{margin:0;font:var(--tui-font-text-m);white-space:nowrap;text-overflow:ellipsis;padding-right:.3125rem;overflow:hidden}.t-actions{display:flex;margin-left:auto}.t-close{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.75rem;color:#fff;background:#ffffff52}.t-close:hover{background:#fff6}.t-content{block-size:calc(100% - 4rem);overflow:hidden}.t-iframe{inline-size:100%;block-size:100%}\n"]
    }]
  }], null, null);
})();
var TUI_PDF_VIEWER_DEFAULT_OPTIONS = {
  label: "",
  actions: "",
  data: void 0
};
var TUI_PDF_VIEWER_OPTIONS = tuiCreateToken(TUI_PDF_VIEWER_DEFAULT_OPTIONS);
function tuiPdfViewerOptionsProvider(options) {
  return tuiProvideOptions(TUI_PDF_VIEWER_OPTIONS, options, TUI_PDF_VIEWER_DEFAULT_OPTIONS);
}
var TuiPdfViewerService = class _TuiPdfViewerService extends TuiPopoverService {
  open(content, options = {}) {
    return super.open(content, options);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPdfViewerService_BaseFactory;
      return function TuiPdfViewerService_Factory(__ngFactoryType__) {
        return (ɵTuiPdfViewerService_BaseFactory || (ɵTuiPdfViewerService_BaseFactory = ɵɵgetInheritedFactory(_TuiPdfViewerService)))(__ngFactoryType__ || _TuiPdfViewerService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPdfViewerService,
      factory: () => (() => new _TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPdfViewerService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiPdfViewerService(TUI_DIALOGS, TuiPdfViewerComponent, inject(TUI_PDF_VIEWER_OPTIONS))
    }]
  }], null, null);
})();
var TuiPdfViewerDirective = class _TuiPdfViewerDirective extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPdfViewerDirective_BaseFactory;
      return function TuiPdfViewerDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPdfViewerDirective_BaseFactory || (ɵTuiPdfViewerDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPdfViewerDirective)))(__ngFactoryType__ || _TuiPdfViewerDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPdfViewerDirective,
      selectors: [["ng-template", "tuiPdfViewer", ""]],
      inputs: {
        options: [0, "tuiPdfViewerOptions", "options"],
        open: [0, "tuiPdfViewer", "open"]
      },
      outputs: {
        openChange: "tuiPdfViewerChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiPdfViewerService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPdfViewerDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPdfViewer]",
      inputs: ["options: tuiPdfViewerOptions", "open: tuiPdfViewer"],
      outputs: ["openChange: tuiPdfViewerChange"],
      providers: [tuiAsPopover(TuiPdfViewerService)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-pin.mjs
var TuiPinStyles = class _TuiPinStyles {
  static {
    this.ɵfac = function TuiPinStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPinStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPinStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-pin"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiPinStyles_Template(rf, ctx) {
      },
      styles: [`tui-pin,[tuiPin]{--t-size: 2rem;transition-property:width,height,border,margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;inline-size:var(--t-size);block-size:var(--t-size);align-items:stretch;flex-direction:column;justify-content:center;text-align:center;border-radius:100%;font:var(--tui-font-text-s);font-weight:700;box-sizing:border-box;color:var(--tui-text-primary-on-accent-2);background:var(--tui-background-accent-2);box-shadow:0 0 0 .125rem var(--tui-background-elevation-2);border:0 solid var(--tui-background-accent-2);transform:translate(-50%,-50%)}tui-pin:-webkit-any(a,button,select,textarea,input,label),[tuiPin]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-pin:-moz-any(a,button,select,textarea,input,label),[tuiPin]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-pin:empty,[tuiPin]:empty{--t-size: .75rem}tui-pin:empty:before,[tuiPin]:empty:before{display:none}tui-pin>input,[tuiPin]>input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;border-radius:100%}tui-pin>img,[tuiPin]>img{max-block-size:100%;box-sizing:border-box;border-radius:100%;background:var(--tui-background-base)}tui-pin>tui-icon,[tuiPin]>tui-icon,tui-pin>tui-svg,[tuiPin]>tui-svg{transition-property:width,height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:1.25rem;block-size:1.25rem;align-self:center}tui-pin:has(:checked),[tuiPin]:has(:checked){--t-size: 3.5rem;font:var(--tui-font-text-m);font-weight:700;border-width:0;margin-top:-2.75rem}tui-pin:has(:checked)>img,[tuiPin]:has(:checked)>img{padding:.125rem}tui-pin:has(:checked)>tui-icon,[tuiPin]:has(:checked)>tui-icon,tui-pin:has(:checked)>tui-svg,[tuiPin]:has(:checked)>tui-svg{inline-size:2.125rem;block-size:2.125rem}tui-pin:has(:checked):before,[tuiPin]:has(:checked):before{transform:scale(.99) translate(-1.875rem,-1.875rem);opacity:1}tui-pin:has(:checked):after,[tuiPin]:has(:checked):after{top:4.5rem;opacity:1}tui-pin._open,[tuiPin]._open{--t-size: 3.5rem;font:var(--tui-font-text-m);font-weight:700;border-width:0;margin-top:-2.75rem}tui-pin._open>img,[tuiPin]._open>img{padding:.125rem}tui-pin._open>tui-icon,[tuiPin]._open>tui-icon,tui-pin._open>tui-svg,[tuiPin]._open>tui-svg{inline-size:2.125rem;block-size:2.125rem}tui-pin._open:before,[tuiPin]._open:before{transform:scale(.99) translate(-1.875rem,-1.875rem);opacity:1}tui-pin._open:after,[tuiPin]._open:after{top:4.5rem;opacity:1}tui-pin:before,[tuiPin]:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:50%;left:50%;right:-.25rem;bottom:-.625rem;box-sizing:border-box;border-width:2.2rem 2rem;border-style:solid;border-color:inherit;opacity:0;transform:scale(.57) translate(-1.875rem,-1.875rem);transform-origin:top left;pointer-events:none;-webkit-mask:url('data:image/svg+xml,<svg width="60" height="66" viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M0 30.0917C0 13.4726 13.4313 0 30.0002 0C46.5687 0 60 13.4726 60 30.0917C60 44.2105 50.4927 56.0529 37.4162 59.2986C32.5552 60.5551 31.0408 65.275 31.0408 65.275C30.8892 65.697 30.4909 66 30.0183 66C29.5453 66 29.147 65.697 28.9938 65.275C28.9938 65.275 27.481 60.5551 22.6199 59.2986C9.46433 56.0206 0 43.5901 0 30.0917ZM30 57.75C45.3259 57.75 57.75 45.3259 57.75 30C57.75 14.6741 45.3259 2.25 30 2.25C14.6741 2.25 2.25 14.6741 2.25 30C2.25 45.3259 14.6741 57.75 30 57.75Z" /></svg>') no-repeat;mask:url('data:image/svg+xml,<svg width="60" height="66" viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M0 30.0917C0 13.4726 13.4313 0 30.0002 0C46.5687 0 60 13.4726 60 30.0917C60 44.2105 50.4927 56.0529 37.4162 59.2986C32.5552 60.5551 31.0408 65.275 31.0408 65.275C30.8892 65.697 30.4909 66 30.0183 66C29.5453 66 29.147 65.697 28.9938 65.275C28.9938 65.275 27.481 60.5551 22.6199 59.2986C9.46433 56.0206 0 43.5901 0 30.0917ZM30 57.75C45.3259 57.75 57.75 45.3259 57.75 30C57.75 14.6741 45.3259 2.25 30 2.25C14.6741 2.25 2.25 14.6741 2.25 30C2.25 45.3259 14.6741 57.75 30 57.75Z" /></svg>') no-repeat}tui-pin:after,[tuiPin]:after{transition-property:top,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:50%;left:50%;border:.1875rem solid currentColor;border-color:inherit;border-radius:100%;box-sizing:border-box;box-shadow:inherit;transform:translate(-50%,-50%);opacity:0}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPinStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-pin"
      },
      styles: [`tui-pin,[tuiPin]{--t-size: 2rem;transition-property:width,height,border,margin;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;inline-size:var(--t-size);block-size:var(--t-size);align-items:stretch;flex-direction:column;justify-content:center;text-align:center;border-radius:100%;font:var(--tui-font-text-s);font-weight:700;box-sizing:border-box;color:var(--tui-text-primary-on-accent-2);background:var(--tui-background-accent-2);box-shadow:0 0 0 .125rem var(--tui-background-elevation-2);border:0 solid var(--tui-background-accent-2);transform:translate(-50%,-50%)}tui-pin:-webkit-any(a,button,select,textarea,input,label),[tuiPin]:-webkit-any(a,button,select,textarea,input,label){cursor:pointer}tui-pin:-moz-any(a,button,select,textarea,input,label),[tuiPin]:-moz-any(a,button,select,textarea,input,label){cursor:pointer}tui-pin:empty,[tuiPin]:empty{--t-size: .75rem}tui-pin:empty:before,[tuiPin]:empty:before{display:none}tui-pin>input,[tuiPin]>input{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;-webkit-appearance:none;appearance:none;border-radius:100%}tui-pin>img,[tuiPin]>img{max-block-size:100%;box-sizing:border-box;border-radius:100%;background:var(--tui-background-base)}tui-pin>tui-icon,[tuiPin]>tui-icon,tui-pin>tui-svg,[tuiPin]>tui-svg{transition-property:width,height;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:1.25rem;block-size:1.25rem;align-self:center}tui-pin:has(:checked),[tuiPin]:has(:checked){--t-size: 3.5rem;font:var(--tui-font-text-m);font-weight:700;border-width:0;margin-top:-2.75rem}tui-pin:has(:checked)>img,[tuiPin]:has(:checked)>img{padding:.125rem}tui-pin:has(:checked)>tui-icon,[tuiPin]:has(:checked)>tui-icon,tui-pin:has(:checked)>tui-svg,[tuiPin]:has(:checked)>tui-svg{inline-size:2.125rem;block-size:2.125rem}tui-pin:has(:checked):before,[tuiPin]:has(:checked):before{transform:scale(.99) translate(-1.875rem,-1.875rem);opacity:1}tui-pin:has(:checked):after,[tuiPin]:has(:checked):after{top:4.5rem;opacity:1}tui-pin._open,[tuiPin]._open{--t-size: 3.5rem;font:var(--tui-font-text-m);font-weight:700;border-width:0;margin-top:-2.75rem}tui-pin._open>img,[tuiPin]._open>img{padding:.125rem}tui-pin._open>tui-icon,[tuiPin]._open>tui-icon,tui-pin._open>tui-svg,[tuiPin]._open>tui-svg{inline-size:2.125rem;block-size:2.125rem}tui-pin._open:before,[tuiPin]._open:before{transform:scale(.99) translate(-1.875rem,-1.875rem);opacity:1}tui-pin._open:after,[tuiPin]._open:after{top:4.5rem;opacity:1}tui-pin:before,[tuiPin]:before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:50%;left:50%;right:-.25rem;bottom:-.625rem;box-sizing:border-box;border-width:2.2rem 2rem;border-style:solid;border-color:inherit;opacity:0;transform:scale(.57) translate(-1.875rem,-1.875rem);transform-origin:top left;pointer-events:none;-webkit-mask:url('data:image/svg+xml,<svg width="60" height="66" viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M0 30.0917C0 13.4726 13.4313 0 30.0002 0C46.5687 0 60 13.4726 60 30.0917C60 44.2105 50.4927 56.0529 37.4162 59.2986C32.5552 60.5551 31.0408 65.275 31.0408 65.275C30.8892 65.697 30.4909 66 30.0183 66C29.5453 66 29.147 65.697 28.9938 65.275C28.9938 65.275 27.481 60.5551 22.6199 59.2986C9.46433 56.0206 0 43.5901 0 30.0917ZM30 57.75C45.3259 57.75 57.75 45.3259 57.75 30C57.75 14.6741 45.3259 2.25 30 2.25C14.6741 2.25 2.25 14.6741 2.25 30C2.25 45.3259 14.6741 57.75 30 57.75Z" /></svg>') no-repeat;mask:url('data:image/svg+xml,<svg width="60" height="66" viewBox="0 0 60 66" xmlns="http://www.w3.org/2000/svg"><path d="M0 30.0917C0 13.4726 13.4313 0 30.0002 0C46.5687 0 60 13.4726 60 30.0917C60 44.2105 50.4927 56.0529 37.4162 59.2986C32.5552 60.5551 31.0408 65.275 31.0408 65.275C30.8892 65.697 30.4909 66 30.0183 66C29.5453 66 29.147 65.697 28.9938 65.275C28.9938 65.275 27.481 60.5551 22.6199 59.2986C9.46433 56.0206 0 43.5901 0 30.0917ZM30 57.75C45.3259 57.75 57.75 45.3259 57.75 30C57.75 14.6741 45.3259 2.25 30 2.25C14.6741 2.25 2.25 14.6741 2.25 30C2.25 45.3259 14.6741 57.75 30 57.75Z" /></svg>') no-repeat}tui-pin:after,[tuiPin]:after{transition-property:top,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:50%;left:50%;border:.1875rem solid currentColor;border-color:inherit;border-radius:100%;box-sizing:border-box;box-shadow:inherit;transform:translate(-50%,-50%);opacity:0}
`]
    }]
  }], null, null);
})();
var TuiPin = class _TuiPin {
  constructor() {
    this.nothing = tuiWithStyles(TuiPinStyles);
    this.open = false;
  }
  static {
    this.ɵfac = function TuiPin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPin)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPin,
      selectors: [["tui-pin"], ["", "tuiPin", ""]],
      hostVars: 2,
      hostBindings: function TuiPin_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_open", ctx.open);
        }
      },
      inputs: {
        open: "open"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPin, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-pin,[tuiPin]",
      host: {
        "[class._open]": "open"
      }
    }]
  }], null, {
    open: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-zoom.mjs
var TUI_ZOOM_OPTIONS = tuiCreateToken({
  wheelSensitivity: 0.01
});
var TOUCH_SENSITIVITY = 0.01;
var TuiZoomService = class _TuiZoomService extends Observable {
  constructor() {
    const el = tuiInjectElement();
    const {
      wheelSensitivity
    } = inject(TUI_ZOOM_OPTIONS);
    super((subscriber) => merge(tuiTypedFromEvent(el, "touchstart", {
      passive: true
    }).pipe(filter(({
      touches
    }) => touches.length > 1), switchMap((startEvent) => tuiTypedFromEvent(el, "touchmove", {
      passive: true
    }).pipe(tuiPreventDefault(), scan((prev, event) => {
      const distance = tuiDistanceBetweenTouches(event);
      return {
        event,
        distance,
        delta: (distance - prev.distance) * TOUCH_SENSITIVITY
      };
    }, {
      event: startEvent,
      distance: tuiDistanceBetweenTouches(startEvent),
      delta: 0
    }), map(({
      event,
      delta
    }) => {
      const clientX = ((event.touches[0]?.clientX ?? 0) + (event.touches[1]?.clientX ?? 0)) / 2;
      const clientY = ((event.touches[0]?.clientY ?? 0) + (event.touches[1]?.clientY ?? 0)) / 2;
      return {
        clientX,
        clientY,
        delta,
        event
      };
    }), takeUntil(tuiTypedFromEvent(el, "touchend"))))), tuiTypedFromEvent(el, "wheel", {
      passive: false
    }).pipe(tuiPreventDefault(), map((wheel) => ({
      clientX: wheel.clientX,
      clientY: wheel.clientY,
      delta: -wheel.deltaY * wheelSensitivity,
      event: wheel
    })))).subscribe(subscriber));
  }
  static {
    this.ɵfac = function TuiZoomService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiZoomService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiZoomService,
      factory: _TuiZoomService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoomService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var TuiZoom = class _TuiZoom {
  constructor() {
    this.tuiZoom = inject(TuiZoomService);
  }
  static {
    this.ɵfac = function TuiZoom_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiZoom)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiZoom,
      selectors: [["", "tuiZoom", ""]],
      hostVars: 2,
      hostBindings: function TuiZoom_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("touch-action", "none");
        }
      },
      outputs: {
        tuiZoom: "tuiZoom"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiZoomService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiZoom, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiZoom]",
      outputs: ["tuiZoom"],
      providers: [TuiZoomService],
      host: {
        "[style.touch-action]": '"none"'
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-preview.mjs
function TuiPreviewPagination_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵlistener("click", function TuiPreviewPagination_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onArrowClick(-1));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementStart(4, "button", 2);
    ɵɵlistener("click", function TuiPreviewPagination_ng_container_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onArrowClick(1));
    });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.leftButtonDisabled)("iconStart", ctx_r1.icons.prev);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[0], " ");
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r1.index + 1, "/", ctx_r1.length, " ");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.rightButtonDisabled)("iconStart", ctx_r1.icons.next);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3[1], " ");
  }
}
var _c015 = () => ({
  standalone: true
});
function TuiPreviewZoom_ng_container_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "percent");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ɵɵpipeBind1(1, 1, ctx_r1.valueChange) || ctx_r1.value), " ");
  }
}
function TuiPreviewZoom_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "section", 2)(2, "button", 3);
    ɵɵlistener("click", function TuiPreviewZoom_ng_container_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMinus());
    });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 4);
    ɵɵelement(5, "div", 5);
    ɵɵpipe(6, "async");
    ɵɵtemplate(7, TuiPreviewZoom_ng_container_0_ng_template_7_Template, 3, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementStart(9, "input", 6);
    ɵɵlistener("ngModelChange", function TuiPreviewZoom_ng_container_0_Template_input_ngModelChange_9_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onModelChange($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(10, "button", 7);
    ɵɵlistener("click", function TuiPreviewZoom_ng_container_0_Template_button_click_10_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPlus());
    });
    ɵɵtext(11);
    ɵɵelementEnd()();
    ɵɵelementStart(12, "button", 8);
    ɵɵlistener("click", function TuiPreviewZoom_ng_container_0_Template_button_click_12_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onReset());
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const texts_r3 = ctx.ngIf;
    const hint_r4 = ɵɵreference(8);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.leftButtonDisabled)("iconStart", ctx_r1.icons.zoomOut);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3.zoomOut, " ");
    ɵɵadvance(2);
    ɵɵproperty("tuiHint", hint_r4)("tuiHintManual", !!ɵɵpipeBind1(6, 16, ctx_r1.hintShow$));
    ɵɵadvance(4);
    ɵɵproperty("max", ctx_r1.max)("min", ctx_r1.min)("ngModel", ctx_r1.value)("ngModelOptions", ɵɵpureFunction0(18, _c015));
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.rightButtonDisabled)("iconStart", ctx_r1.icons.zoomIn);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", texts_r3.zoomIn, " ");
    ɵɵadvance();
    ɵɵclassProp("t-invisible", !ctx_r1.collapseVisible);
    ɵɵproperty("iconStart", ctx_r1.icons.zoomReset)("tuiHint", texts_r3.reset);
  }
}
var _c111 = ["*", [["tui-preview-title"]], [["tui-preview-pagination"]], [["", "tuiPreviewAction", ""]]];
var _c23 = ["*", "tui-preview-title", "tui-preview-pagination", "[tuiPreviewAction]"];
function TuiPreviewComponent_ng_container_0_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function TuiPreviewComponent_ng_container_0_button_14_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.rotate());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const texts_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("iconStart", ctx_r1.icons.rotate)("tuiHint", texts_r5.rotate);
  }
}
function TuiPreviewComponent_ng_container_0_tui_preview_zoom_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-preview-zoom", 10);
    ɵɵpipe(1, "async");
    ɵɵlistener("reset", function TuiPreviewComponent_ng_container_0_tui_preview_zoom_15_Template_tui_preview_zoom_reset_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.reset());
    })("valueChange", function TuiPreviewComponent_ng_container_0_tui_preview_zoom_15_Template_tui_preview_zoom_valueChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setZoom($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("min", ctx_r1.minZoom)("value", ɵɵpipeBind1(1, 2, ctx_r1.zoom$) || 1);
  }
}
function TuiPreviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "section", 2, 0);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "async");
    ɵɵlistener("tuiPan", function TuiPreviewComponent_ng_container_0_Template_section_tuiPan_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPan($event));
    })("tuiZoom", function TuiPreviewComponent_ng_container_0_Template_section_tuiZoom_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onZoom($event));
    })("waMutationObserver", function TuiPreviewComponent_ng_container_0_Template_section_waMutationObserver_1_listener() {
      ɵɵrestoreView(_r1);
      const contentWrapper_r3 = ɵɵreference(2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMutation(contentWrapper_r3));
    })("waResizeObserver", function TuiPreviewComponent_ng_container_0_Template_section_waResizeObserver_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onResize($event));
    });
    ɵɵprojection(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "header", 3)(8, "div", 4);
    ɵɵprojection(9, 1);
    ɵɵelementEnd();
    ɵɵprojection(10, 2);
    ɵɵelementStart(11, "div", 5);
    ɵɵprojection(12, 3);
    ɵɵelementEnd()();
    ɵɵelementStart(13, "footer", 6);
    ɵɵtemplate(14, TuiPreviewComponent_ng_container_0_button_14_Template, 1, 2, "button", 7)(15, TuiPreviewComponent_ng_container_0_tui_preview_zoom_15_Template, 2, 4, "tui-preview-zoom", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵstyleProp("cursor", ɵɵpipeBind1(3, 10, ctx_r1.cursor$))("transform", ɵɵpipeBind1(4, 12, ctx_r1.wrapperTransform$));
    ɵɵclassProp("t-not-interactive-content", ctx_r1.zoomable)("t-transitive", ɵɵpipeBind1(5, 14, ctx_r1.transitioned$));
    ɵɵadvance(13);
    ɵɵproperty("ngIf", ctx_r1.rotatable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.zoomable);
  }
}
var _c3 = ["*"];
function TuiPreviewDialog_ng_container_0_Template(rf, ctx) {
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
var TuiPreviewAction = class _TuiPreviewAction {
  static {
    this.ɵfac = function TuiPreviewAction_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewAction)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPreviewAction,
      selectors: [["", "tuiPreviewAction", ""]],
      hostVars: 2,
      hostBindings: function TuiPreviewAction_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("border-radius", 100, "rem");
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        appearance: "preview-action",
        size: "s"
      })])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewAction, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiPreviewAction]",
      providers: [tuiButtonOptionsProvider({
        appearance: "preview-action",
        size: "s"
      })],
      host: {
        "[style.border-radius.rem]": "100"
      }
    }]
  }], null, null);
})();
var TuiPreviewPagination = class _TuiPreviewPagination {
  constructor() {
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.texts$ = inject(TUI_PAGINATION_TEXTS);
    this.length = 1;
    this.index = 0;
    this.indexChange = new EventEmitter();
  }
  onArrowClick(step) {
    this.updateIndex(tuiClamp(this.index + step, 0, this.length - 1));
  }
  get leftButtonDisabled() {
    return this.index === 0;
  }
  get rightButtonDisabled() {
    return this.index === this.length - 1;
  }
  updateIndex(index) {
    if (this.index === index) {
      return;
    }
    this.index = index;
    this.indexChange.emit(index);
  }
  static {
    this.ɵfac = function TuiPreviewPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewPagination)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPreviewPagination,
      selectors: [["tui-preview-pagination"]],
      hostBindings: function TuiPreviewPagination_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowRight.prevent", function TuiPreviewPagination_keydown_arrowRight_prevent_HostBindingHandler() {
            return ctx.onArrowClick(1);
          }, false, ɵɵresolveDocument)("keydown.arrowLeft.prevent", function TuiPreviewPagination_keydown_arrowLeft_prevent_HostBindingHandler() {
            return ctx.onArrowClick(-1);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        length: "length",
        index: "index"
      },
      outputs: {
        indexChange: "indexChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-arrow_left", 3, "click", "disabled", "iconStart"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-arrow_right", 3, "click", "disabled", "iconStart"]],
      template: function TuiPreviewPagination_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiPreviewPagination_ng_container_0_Template, 6, 8, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.texts$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton, TuiPreviewAction],
      styles: ["[_nghost-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow_left[_ngcontent-%COMP%]{border-start-end-radius:0;border-end-end-radius:0}.t-arrow_right[_ngcontent-%COMP%]{border-start-start-radius:0;border-end-start-radius:0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewPagination, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-preview-pagination",
      imports: [AsyncPipe, NgIf, TuiButton, TuiPreviewAction],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:keydown.arrowRight.prevent)": "onArrowClick(1)",
        "(document:keydown.arrowLeft.prevent)": "onArrowClick(-1)"
      },
      template: '<ng-container *ngIf="texts$ | async as texts">\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type="button"\n        class="t-arrow_left"\n        [disabled]="leftButtonDisabled"\n        [iconStart]="icons.prev"\n        (click)="onArrowClick(-1)"\n    >\n        {{ texts[0] }}\n    </button>\n    {{ index + 1 }}/{{ length }}\n    <button\n        tuiIconButton\n        tuiPreviewAction\n        type="button"\n        class="t-arrow_right"\n        [disabled]="rightButtonDisabled"\n        [iconStart]="icons.next"\n        (click)="onArrowClick(1)"\n    >\n        {{ texts[1] }}\n    </button>\n</ng-container>\n',
      styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:6.25rem}.t-arrow_left{border-start-end-radius:0;border-end-end-radius:0}.t-arrow_right{border-start-start-radius:0;border-end-start-radius:0}\n"]
    }]
  }], null, {
    length: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    indexChange: [{
      type: Output
    }]
  });
})();
var STEP = 0.5;
var TuiPreviewZoom = class _TuiPreviewZoom {
  constructor() {
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.zoomTexts$ = inject(TUI_PREVIEW_ZOOM_TEXTS);
    this.min = 0.5;
    this.max = 2;
    this.value = 1;
    this.valueChange = new EventEmitter();
    this.reset = new EventEmitter();
    this.hintShow$ = this.valueChange.pipe(switchMap(() => merge(of(true), timer(1e3).pipe(map(TUI_FALSE_HANDLER)))), startWith(false));
  }
  get leftButtonDisabled() {
    return this.value === this.min;
  }
  get rightButtonDisabled() {
    return this.value === this.max;
  }
  get collapseVisible() {
    return this.value > this.min;
  }
  onModelChange(value) {
    const clamped = tuiClamp(value, this.min, this.max);
    if (clamped === this.value) {
      return;
    }
    this.value = clamped;
    this.valueChange.emit(clamped);
  }
  onReset() {
    this.reset.emit();
  }
  onMinus() {
    this.onModelChange(this.value - STEP);
  }
  onPlus() {
    this.onModelChange(this.value < 1 ? 1 : this.value + STEP);
  }
  static {
    this.ɵfac = function TuiPreviewZoom_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewZoom)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPreviewZoom,
      selectors: [["tui-preview-zoom"]],
      inputs: {
        min: "min",
        max: "max",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange",
        reset: "reset"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [["hint", ""], [4, "ngIf"], [1, "t-zoom"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-sign_minus", 3, "click", "disabled", "iconStart"], ["tuiSliderThumbLabel", ""], ["tuiHintAppearance", "dark", "tuiHintDirection", "top-right", 3, "tuiHint", "tuiHintManual"], ["step", "any", "tuiSlider", "", "tuiTheme", "dark", "type", "range", 1, "t-slider", 3, "ngModelChange", "max", "min", "ngModel", "ngModelOptions"], ["tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-sign_plus", 3, "click", "disabled", "iconStart"], ["tuiHintAppearance", "dark", "tuiHintDescribe", "", "tuiHintDirection", "top-right", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-reset-button", 3, "click", "iconStart", "tuiHint"]],
      template: function TuiPreviewZoom_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiPreviewZoom_ng_container_0_Template, 13, 19, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.zoomTexts$));
        }
      },
      dependencies: [AsyncPipe, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, NgIf, PercentPipe, TuiButton, TuiHintDirective, TuiHintDescribe, TuiHintManual, TuiPreviewAction, TuiSliderComponent, TuiSliderThumbLabel],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex}.t-zoom[_ngcontent-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider[_ngcontent-%COMP%]{inline-size:7.5rem}.t-sign_minus[_ngcontent-%COMP%]{border-start-end-radius:0;border-end-end-radius:0}.t-sign_plus[_ngcontent-%COMP%]{border-start-start-radius:0;border-end-start-radius:0}.t-invisible[_ngcontent-%COMP%]{visibility:hidden}.t-reset-button[_ngcontent-%COMP%]{margin-left:.3125rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewZoom, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-preview-zoom",
      imports: [AsyncPipe, FormsModule, NgIf, PercentPipe, TuiButton, TuiHint, TuiPreviewAction, TuiSlider],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="zoomTexts$ | async as texts">\n    <section class="t-zoom">\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            class="t-sign_minus"\n            [disabled]="leftButtonDisabled"\n            [iconStart]="icons.zoomOut"\n            (click)="onMinus()"\n        >\n            {{ texts.zoomOut }}\n        </button>\n        <label tuiSliderThumbLabel>\n            <div\n                tuiHintAppearance="dark"\n                tuiHintDirection="top-right"\n                [tuiHint]="hint"\n                [tuiHintManual]="!!(hintShow$ | async)"\n            ></div>\n\n            <ng-template #hint>\n                {{ (valueChange | async) || value | percent }}\n            </ng-template>\n\n            <input\n                step="any"\n                tuiSlider\n                tuiTheme="dark"\n                type="range"\n                class="t-slider"\n                [max]="max"\n                [min]="min"\n                [ngModel]="value"\n                [ngModelOptions]="{standalone: true}"\n                (ngModelChange)="onModelChange($event)"\n            />\n        </label>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            class="t-sign_plus"\n            [disabled]="rightButtonDisabled"\n            [iconStart]="icons.zoomIn"\n            (click)="onPlus()"\n        >\n            {{ texts.zoomIn }}\n        </button>\n    </section>\n\n    <button\n        tuiHintAppearance="dark"\n        tuiHintDescribe\n        tuiHintDirection="top-right"\n        tuiIconButton\n        tuiPreviewAction\n        type="button"\n        class="t-reset-button"\n        [class.t-invisible]="!collapseVisible"\n        [iconStart]="icons.zoomReset"\n        [tuiHint]="texts.reset"\n        (click)="onReset()"\n    ></button>\n</ng-container>\n',
      styles: [":host{position:relative;display:flex}.t-zoom{border-radius:1rem;background:#686868f5;color:#fff;display:flex;font:var(--tui-font-text-s);justify-content:space-between;align-items:center;inline-size:12rem}.t-slider{inline-size:7.5rem}.t-sign_minus{border-start-end-radius:0;border-end-end-radius:0}.t-sign_plus{border-start-start-radius:0;border-end-start-radius:0}.t-invisible{visibility:hidden}.t-reset-button{margin-left:.3125rem}\n"]
    }]
  }], null, {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    reset: [{
      type: Output
    }]
  });
})();
var INITIAL_SCALE_COEF = 0.8;
var EMPTY_COORDINATES = [0, 0];
var ROTATION_ANGLE = 90;
var TuiPreviewComponent = class _TuiPreviewComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.minZoom = 1;
    this.width = 0;
    this.height = 0;
    this.texts$ = inject(TUI_PREVIEW_TEXTS);
    this.icons = inject(TUI_PREVIEW_ICONS);
    this.cdr = inject(ChangeDetectorRef);
    this.zoom$ = new BehaviorSubject(this.minZoom);
    this.rotation$ = new BehaviorSubject(0);
    this.coordinates$ = new BehaviorSubject(EMPTY_COORDINATES);
    this.transitioned$ = merge(tuiDragAndDropFrom(this.el).pipe(map(({
      stage
    }) => stage !== "continues")), tuiTypedFromEvent(this.el, "touchmove", {
      passive: true
    }).pipe(map(TUI_FALSE_HANDLER)), tuiTypedFromEvent(this.el, "wheel", {
      passive: true
    }).pipe(map(TUI_FALSE_HANDLER)));
    this.cursor$ = tuiDragAndDropFrom(this.el).pipe(map(({
      stage
    }) => stage === "continues" ? "grabbing" : "initial"), startWith("initial"));
    this.wrapperTransform$ = combineLatest([this.coordinates$.pipe(map(([x, y]) => `${tuiPx(x)}, ${tuiPx(y)}`)), this.zoom$, this.rotation$]).pipe(map(([translate, zoom, rotation]) => `translate(${translate}) scale(${zoom}) rotate(${rotation}deg)`));
    this.zoomable = true;
    this.rotatable = false;
  }
  rotate() {
    this.rotation$.next(this.rotation$.value - ROTATION_ANGLE);
  }
  onPan(delta) {
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + delta[0], this.coordinates$.value[1] + delta[1]));
  }
  onMutation(contentWrapper) {
    const {
      clientWidth,
      clientHeight
    } = contentWrapper;
    this.refresh(clientWidth, clientHeight);
  }
  onZoom({
    clientX,
    clientY,
    delta
  }) {
    if (this.zoomable) {
      this.processZoom(clientX, clientY, delta);
    }
  }
  onResize([entry]) {
    if (entry?.contentRect) {
      this.refresh(entry.contentRect.width, entry.contentRect.height);
      this.cdr.detectChanges();
    }
  }
  reset() {
    this.zoom$.next(this.minZoom);
    this.coordinates$.next(EMPTY_COORDINATES);
  }
  setZoom(zoom) {
    this.zoom$.next(zoom);
    const [x, y] = this.coordinates$.value;
    this.coordinates$.next(this.getGuardedCoordinates(x, y));
  }
  get offsets() {
    const offsetX = (this.zoom$.value - this.minZoom) * this.width / 2;
    const offsetY = (this.zoom$.value - this.minZoom) * this.height / 2;
    return {
      offsetX,
      offsetY
    };
  }
  calculateMinZoom(contentHeight, contentWidth, boxHeight, boxWidth) {
    const bigSize = contentHeight > boxHeight * INITIAL_SCALE_COEF || contentWidth > boxWidth * INITIAL_SCALE_COEF;
    const {
      clientHeight,
      clientWidth
    } = this.el;
    return bigSize ? tuiRound(Math.min(clientHeight * INITIAL_SCALE_COEF / contentHeight, clientWidth * INITIAL_SCALE_COEF / contentWidth), 2) : 1;
  }
  refresh(width, height) {
    this.width = width;
    this.height = height;
    this.minZoom = this.calculateMinZoom(height, width, this.el.clientHeight, this.el.clientWidth);
    this.zoom$.next(this.minZoom);
    this.coordinates$.next(EMPTY_COORDINATES);
    this.rotation$.next(0);
  }
  processZoom(clientX, clientY, delta) {
    const oldScale = this.zoom$.value;
    const newScale = tuiClamp(oldScale + delta, this.minZoom, 2);
    const center = this.getScaleCenter({
      clientX,
      clientY
    }, this.coordinates$.value, this.zoom$.value);
    const moveX = center[0] * oldScale - center[0] * newScale;
    const moveY = center[1] * oldScale - center[1] * newScale;
    this.zoom$.next(newScale);
    this.coordinates$.next(this.getGuardedCoordinates(this.coordinates$.value[0] + moveX, this.coordinates$.value[1] + moveY));
  }
  getGuardedCoordinates(x, y) {
    const {
      offsetX,
      offsetY
    } = this.offsets;
    return [tuiClamp(x, -offsetX, offsetX), tuiClamp(y, -offsetY, offsetY)];
  }
  getScaleCenter({
    clientX,
    clientY
  }, [x, y], scale) {
    return [(clientX - x - this.el.offsetWidth / 2) / scale, (clientY - y - this.el.offsetHeight / 2) / scale];
  }
  static {
    this.ɵfac = function TuiPreviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPreviewComponent,
      selectors: [["tui-preview"]],
      inputs: {
        zoomable: "zoomable",
        rotatable: "rotatable"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c23,
      decls: 2,
      vars: 3,
      consts: [["contentWrapper", ""], [4, "ngIf"], ["attributeFilter", "src", "characterData", "", "childList", "", "subtree", "", 1, "t-wrapper", 3, "tuiPan", "tuiZoom", "waMutationObserver", "waResizeObserver"], [1, "t-header"], [1, "t-title"], [1, "t-actions"], [1, "t-footer"], ["tuiHintAppearance", "dark", "tuiHintDescribe", "", "tuiHintDirection", "top-right", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", "class", "t-rotate-button", 3, "iconStart", "tuiHint", "click", 4, "ngIf"], [3, "min", "value", "reset", "valueChange", 4, "ngIf"], ["tuiHintAppearance", "dark", "tuiHintDescribe", "", "tuiHintDirection", "top-right", "tuiIconButton", "", "tuiPreviewAction", "", "type", "button", 1, "t-rotate-button", 3, "click", "iconStart", "tuiHint"], [3, "reset", "valueChange", "min", "value"]],
      template: function TuiPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c111);
          ɵɵtemplate(0, TuiPreviewComponent_ng_container_0_Template, 16, 16, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.texts$));
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton, TuiHintDirective, TuiHintDescribe, TuiPan, TuiPreviewAction, TuiPreviewZoom, TuiZoom, WaMutationObserver, WaResizeObserver],
      styles: ["[_nghost-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header[_ngcontent-%COMP%]{position:fixed;top:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer[_ngcontent-%COMP%]{position:absolute;bottom:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-end}.t-actions[_ngcontent-%COMP%]    >*{margin-left:.625rem}.t-rotate-button[_ngcontent-%COMP%]{margin-right:.3125rem}.t-title[_ngcontent-%COMP%]{flex:1}tui-root._mobile[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{display:none}.t-not-interactive-content[_ngcontent-%COMP%]    >*{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{will-change:transform}.t-transitive[_ngcontent-%COMP%]{transition-duration:.3s}"],
      data: {
        animation: [tuiSlideInTop]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-preview",
      imports: [AsyncPipe, NgIf, TuiButton, TuiHint, TuiPan, TuiPreviewAction, TuiPreviewZoom, TuiZoom, WaMutationObserver, WaResizeObserver],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop],
      template: '<ng-container *ngIf="texts$ | async as texts">\n    <section\n        #contentWrapper\n        attributeFilter="src"\n        characterData\n        childList\n        subtree\n        class="t-wrapper"\n        [class.t-not-interactive-content]="zoomable"\n        [class.t-transitive]="transitioned$ | async"\n        [style.cursor]="cursor$ | async"\n        [style.transform]="wrapperTransform$ | async"\n        (tuiPan)="onPan($event)"\n        (tuiZoom)="onZoom($event)"\n        (waMutationObserver)="onMutation(contentWrapper)"\n        (waResizeObserver)="onResize($event)"\n    >\n        <ng-content />\n    </section>\n\n    <header class="t-header">\n        <div class="t-title">\n            <ng-content select="tui-preview-title" />\n        </div>\n\n        <ng-content select="tui-preview-pagination" />\n\n        <div class="t-actions">\n            <ng-content select="[tuiPreviewAction]" />\n        </div>\n    </header>\n\n    <footer class="t-footer">\n        <button\n            *ngIf="rotatable"\n            tuiHintAppearance="dark"\n            tuiHintDescribe\n            tuiHintDirection="top-right"\n            tuiIconButton\n            tuiPreviewAction\n            type="button"\n            class="t-rotate-button"\n            [iconStart]="icons.rotate"\n            [tuiHint]="texts.rotate"\n            (click)="rotate()"\n        ></button>\n\n        <tui-preview-zoom\n            *ngIf="zoomable"\n            [min]="minZoom"\n            [value]="(zoom$ | async) || 1"\n            (reset)="reset()"\n            (valueChange)="setZoom($event)"\n        />\n    </footer>\n</ng-container>\n',
      styles: [":host{position:relative;display:flex;justify-content:center;align-items:center;inline-size:100%;block-size:100%;-webkit-user-select:none;user-select:none}.t-header{position:fixed;top:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box}.t-footer{position:absolute;bottom:1rem;display:flex;inline-size:100%;padding:0 1rem;box-sizing:border-box;justify-content:center}.t-actions{display:flex;flex:1;justify-content:flex-end}.t-actions ::ng-deep>*{margin-left:.625rem}.t-rotate-button{margin-right:.3125rem}.t-title{flex:1}:host-context(tui-root._mobile) .t-title{display:none}.t-not-interactive-content ::ng-deep>*{pointer-events:none}.t-wrapper{will-change:transform}.t-transitive{transition-duration:.3s}\n"]
    }]
  }], null, {
    zoomable: [{
      type: Input
    }],
    rotatable: [{
      type: Input
    }]
  });
})();
var TuiPreviewTitle = class _TuiPreviewTitle {
  static {
    this.ɵfac = function TuiPreviewTitle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewTitle)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPreviewTitle,
      selectors: [["tui-preview-title"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function TuiPreviewTitle_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["[_nghost-%COMP%]{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-font-text-s);padding:.375rem .75rem}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewTitle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-preview-title",
      template: `
        <ng-content></ng-content>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [":host{border-radius:1rem;background:#686868f5;color:#fff;display:inline-block;font:var(--tui-font-text-s);padding:.375rem .75rem}\n"]
    }]
  }], null, null);
})();
var TuiPreview = [TuiPreviewComponent, TuiPreviewTitle, TuiPreviewPagination, TuiPreviewAction, TuiPreviewZoom];
var TuiPreviewDialog = class _TuiPreviewDialog {
  constructor() {
    this.context = injectContext();
    this.animation = {
      value: "",
      params: {
        start: "100vh",
        duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED))
      }
    };
  }
  static {
    this.ɵfac = function TuiPreviewDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPreviewDialog)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPreviewDialog,
      selectors: [["tui-preview-dialog"]],
      hostVars: 2,
      hostBindings: function TuiPreviewDialog_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.esc", function TuiPreviewDialog_keydown_esc_HostBindingHandler() {
            return ctx.context.$implicit.complete();
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiSlideInTop", ctx.animation)("@tuiFadeIn", ctx.animation);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 1,
      vars: 2,
      consts: [[4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiPreviewDialog_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiPreviewDialog_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("polymorpheusOutlet", ctx.context.content)("polymorpheusOutletContext", ctx.context);
        }
      },
      dependencies: [PolymorpheusOutlet],
      styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"],
      encapsulation: 2,
      data: {
        animation: [tuiSlideInTop, tuiFadeIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialog, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-preview-dialog",
      imports: [PolymorpheusOutlet, PolymorpheusTemplate],
      template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiSlideInTop, tuiFadeIn],
      host: {
        "(document:keydown.esc)": "context.$implicit.complete()",
        "[@tuiSlideInTop]": "animation",
        "[@tuiFadeIn]": "animation"
      },
      styles: ["tui-preview-dialog{inline-size:100%;block-size:100%}[tuiAppearance][data-appearance=preview-action]{background:#686868f5;color:#fff}@media (hover: hover){[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}@media (hover: hover){[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):hover:not(:disabled):not([data-state]){background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action][data-state=hover]{background:#9f9f9fdb}@media (hover: hover){[tuiAppearance][data-appearance=preview-action][tuiWrapper]:hover:not(._no-hover),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=hover]{background:#9f9f9fdb}}[tuiAppearance][data-appearance=preview-action]:-webkit-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action]:-moz-any(a,button,select,textarea,input,label):active:not(:disabled):not([data-state]){background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][data-state=active]{background:#9f9f9fbf}[tuiAppearance][data-appearance=preview-action][tuiWrapper]:active:not(._no-active),[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active],[tuiAppearance][data-appearance=preview-action][tuiWrapper][data-state=active]:hover{background:#9f9f9fbf}\n"]
    }]
  }], null, null);
})();
var TuiPreviewDialogService = class _TuiPreviewDialogService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPreviewDialogService_BaseFactory;
      return function TuiPreviewDialogService_Factory(__ngFactoryType__) {
        return (ɵTuiPreviewDialogService_BaseFactory || (ɵTuiPreviewDialogService_BaseFactory = ɵɵgetInheritedFactory(_TuiPreviewDialogService)))(__ngFactoryType__ || _TuiPreviewDialogService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPreviewDialogService,
      factory: () => (() => new _TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiPreviewDialogService(TUI_DIALOGS, TuiPreviewDialog)
    }]
  }], null, null);
})();
var TuiPreviewDialogDirective = class _TuiPreviewDialogDirective extends TuiPopoverDirective {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPreviewDialogDirective_BaseFactory;
      return function TuiPreviewDialogDirective_Factory(__ngFactoryType__) {
        return (ɵTuiPreviewDialogDirective_BaseFactory || (ɵTuiPreviewDialogDirective_BaseFactory = ɵɵgetInheritedFactory(_TuiPreviewDialogDirective)))(__ngFactoryType__ || _TuiPreviewDialogDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPreviewDialogDirective,
      selectors: [["ng-template", "tuiPreviewDialog", ""]],
      inputs: {
        open: [0, "tuiPreviewDialog", "open"]
      },
      outputs: {
        openChange: "tuiPreviewDialogChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsPopover(TuiPreviewDialogService)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPreviewDialogDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPreviewDialog]",
      inputs: ["open: tuiPreviewDialog"],
      outputs: ["openChange: tuiPreviewDialogChange"],
      providers: [tuiAsPopover(TuiPreviewDialogService)]
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-progress.mjs
var _c016 = ["tuiProgressBar", ""];
var _c112 = ["tuiProgressLabel", ""];
var _c24 = [[["progress"]], [["tui-progress-circle"]], "*"];
var _c32 = ["progress", "tui-progress-circle", "*"];
var TUI_PROGRESS_DEFAULT_OPTIONS = {
  color: null,
  size: "m"
};
var TUI_PROGRESS_OPTIONS = tuiCreateToken(TUI_PROGRESS_DEFAULT_OPTIONS);
function tuiProgressOptionsProvider(options) {
  return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}
var TuiProgressBar = class _TuiProgressBar {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.color = this.options.color;
    this.size = this.options.size;
  }
  static {
    this.ɵfac = function TuiProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressBar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressBar,
      selectors: [["progress", "tuiProgressBar", ""]],
      hostVars: 3,
      hostBindings: function TuiProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color);
        }
      },
      inputs: {
        color: "color",
        size: "size"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c016,
      decls: 0,
      vars: 0,
      template: function TuiProgressBar_Template(rf, ctx) {
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressBar, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar]",
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[style.--tui-progress-color]": "color",
        "[attr.data-size]": "size"
      },
      styles: ["@keyframes tuiIndeterminateAnimation{50%{background-position:left}}[tuiProgressBar]{-webkit-appearance:none;appearance:none;border:none;--t-height: .75rem;display:block;inline-size:100%;block-size:var(--t-height);color:var(--tui-background-accent-1);background:var(--tui-background-neutral-1);clip-path:inset(0 .5px round var(--tui-radius-m));overflow:hidden;border-radius:1rem;flex-shrink:0}[tuiProgressBar]::-webkit-progress-value{-webkit-transition:width var(--tui-duration) linear;transition:width var(--tui-duration) linear}[tuiProgressBar]::-webkit-progress-value{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar]::-moz-progress-bar{background:var(--tui-progress-color, currentColor);border-radius:inherit}[tuiProgressBar][data-size=xxs]{--t-height: .125rem}[tuiProgressBar][data-size=xs]{--t-height: .25rem}[tuiProgressBar][data-size=s]{--t-height: .5rem}[tuiProgressBar][data-size=l]{--t-height: 1rem}[tuiProgressBar][data-size=xl]{--t-height: 1.25rem}[tuiProgressBar][data-size=xxl]{--t-height: 1.5rem}[tuiProgressBar]:indeterminate{background:linear-gradient(to right,var(--tui-background-neutral-1) 0 45%,var(--tui-progress-color, currentColor) 45% 55%,var(--tui-background-neutral-1) 55% 100%) right;background-size:225%;animation:tuiIndeterminateAnimation 3s infinite ease-in-out}[tuiProgressBar]:indeterminate::-webkit-progress-value{background:transparent}[tuiProgressBar]:indeterminate::-moz-progress-bar{background:transparent}[tuiProgressBar]::-webkit-progress-inner-element{border-radius:inherit}[tuiProgressBar]::-webkit-progress-bar{background:transparent;border-radius:inherit}label[tuiProgressLabel] [tuiProgressBar]:not(:first-child){position:absolute;top:0;left:0;inline-size:100%;block-size:100%;background:transparent}\n"]
    }]
  }], null, {
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiProgressColorSegments = class _TuiProgressColorSegments {
  constructor() {
    this.colors$ = new BehaviorSubject([]);
    this.el = tuiInjectElement();
    this.color = toSignal(combineLatest([this.colors$, inject(ResizeObserverService, {
      self: true
    }).pipe(map(() => this.el.offsetWidth), distinctUntilChanged())]).pipe(map(([colors, width]) => {
      const segmentWidth = Math.ceil(width / colors.length);
      const colorsString = colors.reduce((acc, color, i) => `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`, "");
      return `linear-gradient(to right ${colorsString})`;
    }), tuiZonefull(), tuiWatch()));
  }
  set colors(colors) {
    this.colors$.next(colors);
  }
  static {
    this.ɵfac = function TuiProgressColorSegments_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressColorSegments)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressColorSegments,
      selectors: [["progress", "tuiProgressBar", "", "tuiProgressColorSegments", ""]],
      hostVars: 2,
      hostBindings: function TuiProgressColorSegments_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--tui-progress-color", ctx.color());
        }
      },
      inputs: {
        colors: [0, "tuiProgressColorSegments", "colors"]
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressColorSegments, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "progress[tuiProgressBar][tuiProgressColorSegments]",
      providers: [ResizeObserverService],
      host: {
        "[style.--tui-progress-color]": "color()"
      }
    }]
  }], null, {
    colors: [{
      type: Input,
      args: ["tuiProgressColorSegments"]
    }]
  });
})();
var TuiProgressCircle = class _TuiProgressCircle {
  constructor() {
    this.options = inject(TUI_PROGRESS_OPTIONS);
    this.animationDelay = toSignal(of(true).pipe(delay(0)));
    this.value = 0;
    this.max = 1;
    this.color = this.options.color;
    this.size = this.options.size;
  }
  get progressRatio() {
    const ratio = this.value / this.max;
    return Number.isFinite(ratio) ? ratio : 0;
  }
  static {
    this.ɵfac = function TuiProgressCircle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressCircle)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressCircle,
      selectors: [["tui-progress-circle"]],
      hostVars: 5,
      hostBindings: function TuiProgressCircle_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-progress-color", ctx.color)("--t-progress-ratio", ctx.progressRatio);
        }
      },
      inputs: {
        value: "value",
        max: "max",
        color: "color",
        size: "size"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 4,
      vars: 4,
      consts: [[1, "t-hidden-progress", 3, "max", "value"], ["aria-hidden", "true", "height", "100%", "width", "100%", 1, "t-svg"], ["cx", "50%", "cy", "50%", 1, "t-track"], ["cx", "50%", "cy", "50%", 1, "t-progress"]],
      template: function TuiProgressCircle_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "progress", 0);
          ɵɵnamespaceSVG();
          ɵɵelementStart(1, "svg", 1);
          ɵɵelement(2, "circle", 2)(3, "circle", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("max", ctx.max)("value", ctx.value);
          ɵɵadvance(3);
          ɵɵclassProp("t-progress_filled", ctx.animationDelay());
        }
      },
      styles: ["[_nghost-%COMP%]{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}[data-size=xxs][_nghost-%COMP%]{--t-diameter: 2em}[data-size=xs][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=s][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=m][_nghost-%COMP%]{--t-diameter: 4em}[data-size=l][_nghost-%COMP%]{--t-diameter: 5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 6em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 8em}.t-track[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress[_ngcontent-%COMP%]{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled[_ngcontent-%COMP%]{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress[_ngcontent-%COMP%]{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg[_ngcontent-%COMP%]{overflow:unset}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressCircle, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-progress-circle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-size]": "size",
        "[style.--tui-progress-color]": "color",
        "[style.--t-progress-ratio]": "progressRatio"
      },
      template: '<progress\n    class="t-hidden-progress"\n    [max]="max"\n    [value]="value"\n></progress>\n\n<svg\n    aria-hidden="true"\n    height="100%"\n    width="100%"\n    class="t-svg"\n>\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-track"\n    />\n\n    <circle\n        cx="50%"\n        cy="50%"\n        class="t-progress"\n        [class.t-progress_filled]="animationDelay()"\n    />\n</svg>\n',
      styles: [":host{--t-track-stroke: var(--tui-thickness, .375em);--t-progress-stroke: var(--tui-thickness, .375em);position:relative;display:block;color:var(--tui-background-accent-1);transform:rotate(-90deg);transform-origin:center;font-size:1rem;inline-size:var(--t-diameter);block-size:var(--t-diameter);border-radius:100%;-webkit-mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px));mask:radial-gradient(closest-side,transparent calc(100% - var(--t-track-stroke)),#000 calc(100% - var(--t-track-stroke) + .5px))}:host[data-size=xxs]{--t-diameter: 2em}:host[data-size=xs]{--t-diameter: 2.5em}:host[data-size=s]{--t-diameter: 3.5em}:host[data-size=m]{--t-diameter: 4em}:host[data-size=l]{--t-diameter: 5em}:host[data-size=xl]{--t-diameter: 6em}:host[data-size=xxl]{--t-diameter: 8em}.t-track{fill:transparent;stroke:var(--tui-background-neutral-1);stroke-width:var(--t-track-stroke);r:calc((var(--t-diameter) - var(--t-track-stroke)) / 2)}.t-progress{fill:transparent;stroke:var(--tui-progress-color, currentColor);stroke-linecap:round;stroke-width:var(--t-progress-stroke);stroke-dasharray:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));stroke-dashoffset:calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2));r:calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)}.t-progress_filled{transition:stroke-dashoffset var(--tui-duration) linear;stroke-dashoffset:calc(calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)) - var(--t-progress-ratio) * calc(2 * 3.14159265 * calc((var(--t-diameter) - var(--t-progress-stroke)) / 2)))}.t-hidden-progress{position:absolute;clip:rect(1px,1px,1px,1px);clip-path:inset(50%);block-size:1px;inline-size:1px;margin:-1px;overflow:hidden;padding:0}.t-svg{overflow:unset}\n"]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var TuiProgressLabel = class _TuiProgressLabel {
  static {
    this.ɵfac = function TuiProgressLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressLabel,
      selectors: [["label", "tuiProgressLabel", ""]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c112,
      ngContentSelectors: _c32,
      decls: 4,
      vars: 0,
      consts: [[1, "t-label"]],
      template: function TuiProgressLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c24);
          ɵɵprojection(0);
          ɵɵprojection(1, 1);
          ɵɵelementStart(2, "span", 0);
          ɵɵprojection(3, 2);
          ɵɵelementEnd();
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "label[tuiProgressLabel]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-content select="progress" />\n<ng-content select="tui-progress-circle" />\n<span class="t-label">\n    <ng-content />\n</span>\n',
      styles: [":host{position:relative;display:inline-block;color:var(--tui-text-primary)}.t-label{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;display:flex;font:var(--tui-font-text-s);flex-direction:column;justify-content:center;align-items:center}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmentedStyles = class _TuiProgressSegmentedStyles {
  static {
    this.ɵfac = function TuiProgressSegmentedStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmentedStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiProgressSegmentedStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-progress-segmented"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiProgressSegmentedStyles_Template(rf, ctx) {
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmentedStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-progress-segmented"
      },
      styles: ["[tuiProgressBar]._segmented{--tui-segment-gap: .5rem;-webkit-mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));mask-image:radial-gradient(circle closest-side at calc(var(--t-height) / 2) center,#999 0 99%,transparent calc(99% + .6px) 100%),radial-gradient(circle closest-side at calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)) center,#999 0 99%,transparent calc(99% + .6px) 100%),linear-gradient(to right,transparent 0 calc(var(--t-height) / 2),#999 calc(var(--t-height) / 2) calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)),transparent calc(100% - calc(var(--t-height) / 2) - var(--tui-segment-gap)));-webkit-mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width));mask-size:calc(100% * var(--t-segment-width) + var(--tui-segment-gap) * var(--t-segment-width))}\n"]
    }]
  }], null, null);
})();
var TuiProgressSegmented = class _TuiProgressSegmented {
  constructor() {
    this.nothing = tuiWithStyles(TuiProgressSegmentedStyles);
    this.segments = 1;
  }
  static {
    this.ɵfac = function TuiProgressSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiProgressSegmented)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiProgressSegmented,
      selectors: [["", "tuiProgressBar", "", "segments", ""]],
      hostAttrs: [1, "_segmented"],
      hostVars: 2,
      hostBindings: function TuiProgressSegmented_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-segment-width", 1 / ctx.segments);
        }
      },
      inputs: {
        segments: "segments"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiProgressSegmented, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiProgressBar][segments]",
      host: {
        class: "_segmented",
        "[style.--t-segment-width]": "1 / segments"
      }
    }]
  }], null, {
    segments: [{
      type: Input
    }]
  });
})();
var TuiProgress = [TuiProgressBar, TuiProgressCircle, TuiProgressColorSegments, TuiProgressLabel, TuiProgressSegmented];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-pulse.mjs
var TuiPulse = class _TuiPulse {
  constructor() {
    this.animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.playing = true;
  }
  static {
    this.ɵfac = function TuiPulse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPulse)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPulse,
      selectors: [["tui-pulse"]],
      hostVars: 4,
      hostBindings: function TuiPulse_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.animation)("@tuiScaleIn", ctx.animation);
          ɵɵstyleProp("--t-animation-state", ctx.playing ? "running" : "paused");
        }
      },
      inputs: {
        playing: "playing"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiPulse_Template(rf, ctx) {
      },
      styles: ['@keyframes _ngcontent-%COMP%_tuiPulse{0%{opacity:.3;transform:scale(1)}20%{opacity:0;transform:scale(.5)}25%{opacity:.3;transform:scale(1)}45%{opacity:0;transform:scale(.5)}50%{opacity:.3;transform:scale(1)}70%{opacity:0;transform:scale(.5)}75%{opacity:.3;transform:scale(1)}95%{opacity:0;transform:scale(.5)}to{opacity:.3;transform:scale(1)}}[_nghost-%COMP%]{position:relative;color:var(--tui-background-accent-1)}[_nghost-%COMP%]:before{content:"";position:absolute;top:-.5rem;left:-.5rem;inline-size:1rem;block-size:1rem;border-radius:100%;background:currentColor;opacity:.3;animation:_ngcontent-%COMP%_tuiPulse 3s ease-in-out infinite;animation-play-state:var(--t-animation-state)}[_nghost-%COMP%]:after{content:"";position:absolute;inline-size:.5rem;block-size:.5rem;border-radius:100%;transform:translate(-50%,-50%);background:currentColor}'],
      data: {
        animation: [tuiFadeIn, tuiScaleIn]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPulse, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-pulse",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn, tuiScaleIn],
      host: {
        "[@tuiFadeIn]": "animation",
        "[@tuiScaleIn]": "animation",
        "[style.--t-animation-state]": "playing ? 'running' : 'paused'"
      },
      styles: ['@keyframes tuiPulse{0%{opacity:.3;transform:scale(1)}20%{opacity:0;transform:scale(.5)}25%{opacity:.3;transform:scale(1)}45%{opacity:0;transform:scale(.5)}50%{opacity:.3;transform:scale(1)}70%{opacity:0;transform:scale(.5)}75%{opacity:.3;transform:scale(1)}95%{opacity:0;transform:scale(.5)}to{opacity:.3;transform:scale(1)}}:host{position:relative;color:var(--tui-background-accent-1)}:host:before{content:"";position:absolute;top:-.5rem;left:-.5rem;inline-size:1rem;block-size:1rem;border-radius:100%;background:currentColor;opacity:.3;animation:tuiPulse 3s ease-in-out infinite;animation-play-state:var(--t-animation-state)}:host:after{content:"";position:absolute;inline-size:.5rem;block-size:.5rem;border-radius:100%;transform:translate(-50%,-50%);background:currentColor}\n']
    }]
  }], null, {
    playing: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-push.mjs
var _c017 = [[["img"]], [["tui-svg"], ["tui-icon"]], "*", [["", "tuiButton", ""]], [["", "tuiLink", ""]]];
var _c113 = ["img", "tui-svg,tui-icon", "*", "[tuiButton]", "[tuiLink]"];
function TuiPushComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function TuiPushComponent_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close.emit());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵproperty("iconStart", ctx_r1.icons.close);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, ctx_r1.closeWord$), "\n");
  }
}
function TuiPushComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
    ɵɵpipe(1, "tuiFormatDate");
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("textContent", ctx_r1.isString(ctx_r1.timestamp) ? ctx_r1.timestamp : ɵɵpipeBind1(2, 3, ɵɵpipeBind1(1, 1, ctx_r1.timestamp)));
  }
}
function TuiPushAlert_tui_push_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r1.context.image, ɵɵsanitizeUrl);
  }
}
function TuiPushAlert_tui_push_0_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("color", ctx_r1.context.iconColor);
    ɵɵproperty("icon", ctx_r1.context.icon);
  }
}
function TuiPushAlert_tui_push_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
  if (rf & 2) {
    const text_r3 = ctx.polymorpheusOutlet;
    ɵɵproperty("innerHTML", text_r3, ɵɵsanitizeHtml);
  }
}
function TuiPushAlert_tui_push_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function TuiPushAlert_tui_push_0_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.next(ctx_r1.context.buttons[0] || ""));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.context.buttons[0], " ");
  }
}
function TuiPushAlert_tui_push_0_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function TuiPushAlert_tui_push_0_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.context.$implicit.next(ctx_r1.context.buttons[ctx_r1.context.buttons.length - 1] || ""));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.context.buttons[ctx_r1.context.buttons.length - 1], " ");
  }
}
function TuiPushAlert_tui_push_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-push", 2);
    ɵɵlistener("close", function TuiPushAlert_tui_push_0_Template_tui_push_close_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.context.$implicit.complete());
    });
    ɵɵtemplate(1, TuiPushAlert_tui_push_0_img_1_Template, 1, 1, "img", 3)(2, TuiPushAlert_tui_push_0_tui_icon_2_Template, 1, 3, "tui-icon", 4)(3, TuiPushAlert_tui_push_0_div_3_Template, 1, 1, "div", 5)(4, TuiPushAlert_tui_push_0_button_4_Template, 2, 1, "button", 6)(5, TuiPushAlert_tui_push_0_button_5_Template, 2, 1, "button", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("heading", ctx_r1.context.heading)("timestamp", ctx_r1.context.timestamp)("type", ctx_r1.context.type);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.context.image);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.context.icon);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.context.content)("polymorpheusOutletContext", ctx_r1.context);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.context.buttons.length > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.context.buttons.length);
  }
}
function TuiPushAlert_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TuiPushAlert_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TuiPushAlert_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.context.content);
  }
}
var TuiPushComponent = class _TuiPushComponent {
  constructor() {
    this.isString = tuiIsString;
    this.closeWord$ = inject(TUI_CLOSE_WORD);
    this.icons = inject(TUI_COMMON_ICONS);
    this.heading = "";
    this.type = "";
    this.timestamp = "";
    this.close = new EventEmitter();
  }
  static {
    this.ɵfac = function TuiPushComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPushComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPushComponent,
      selectors: [["tui-push"]],
      inputs: {
        heading: "heading",
        type: "type",
        timestamp: "timestamp"
      },
      outputs: {
        close: "close"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiButtonOptionsProvider({
        size: "s",
        appearance: "secondary"
      })]), ɵɵStandaloneFeature],
      ngContentSelectors: _c113,
      decls: 17,
      vars: 4,
      consts: [[1, "t-image"], ["appearance", "", "size", "xs", "tuiIconButton", "", "type", "button", "class", "t-close", 3, "iconStart", "border-radius", "click", 4, "ngIf"], [1, "t-top"], [1, "t-icon"], ["class", "t-time", 3, "textContent", 4, "ngIf"], ["automation-id", "tui-push__heading", 1, "t-heading"], [1, "t-content"], [1, "t-actions"], [1, "t-button"], [1, "t-link"], ["appearance", "", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-close", 3, "click", "iconStart"], [1, "t-time", 3, "textContent"]],
      template: function TuiPushComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c017);
          ɵɵelementStart(0, "div", 0);
          ɵɵprojection(1);
          ɵɵelementEnd();
          ɵɵtemplate(2, TuiPushComponent_button_2_Template, 3, 6, "button", 1);
          ɵɵelementStart(3, "div", 2)(4, "span", 3);
          ɵɵprojection(5, 1);
          ɵɵelementEnd();
          ɵɵtext(6);
          ɵɵtemplate(7, TuiPushComponent_span_7_Template, 3, 5, "span", 4);
          ɵɵelementEnd();
          ɵɵelementStart(8, "h3", 5);
          ɵɵtext(9);
          ɵɵelementEnd();
          ɵɵelementStart(10, "div", 6);
          ɵɵprojection(11, 2);
          ɵɵelementEnd();
          ɵɵelementStart(12, "div", 7)(13, "span", 8);
          ɵɵprojection(14, 3);
          ɵɵelementEnd();
          ɵɵelementStart(15, "span", 9);
          ɵɵprojection(16, 4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.close.observed);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ctx.type, " ");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.timestamp);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.heading, "\n");
        }
      },
      dependencies: [AsyncPipe, NgIf, TuiButton, TuiFormatDatePipe],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;inline-size:22.5rem;max-inline-size:100%;box-sizing:border-box;padding:1.25rem 1.25rem .25rem;overflow:hidden;font:var(--tui-font-text-m);border-radius:var(--tui-radius-xl);background:var(--tui-background-elevation-3);box-shadow:var(--tui-shadow-small)}.t-image[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-block-size:10.625rem;overflow:hidden;margin:-1.25rem -1.25rem 1.25rem}.t-close[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;color:#0000008a;background:#f2f2f252;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem)}.t-top[_ngcontent-%COMP%]{display:flex;align-items:center;font:var(--tui-font-text-s);color:var(--tui-text-secondary)}.t-icon[_ngcontent-%COMP%]{block-size:1.25rem;margin-right:.5rem;transform:scale(.833);transform-origin:top left;color:var(--tui-text-action)}.t-time[_ngcontent-%COMP%]:before{content:"\\2022";display:inline-block;inline-size:1rem;text-align:center}.t-heading[_ngcontent-%COMP%]{line-height:1.25rem;font-weight:700;margin:.75rem 0 .25rem}.t-heading[_ngcontent-%COMP%], .t-content[_ngcontent-%COMP%]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word;overflow:hidden}.t-actions[_ngcontent-%COMP%]{display:flex;align-items:center;font:var(--tui-font-text-s)}.t-button[_ngcontent-%COMP%]:not(:empty){margin:.75rem .75rem .75rem 0}.t-link[_ngcontent-%COMP%]{margin:.75rem 0}.t-link[_ngcontent-%COMP%]:empty{margin:.5rem}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPushComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-push",
      imports: [AsyncPipe, NgIf, TuiButton, TuiFormatDatePipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiButtonOptionsProvider({
        size: "s",
        appearance: "secondary"
      })],
      template: '<div class="t-image">\n    <ng-content select="img" />\n</div>\n<button\n    *ngIf="close.observed"\n    appearance=""\n    size="xs"\n    tuiIconButton\n    type="button"\n    class="t-close"\n    [iconStart]="icons.close"\n    [style.border-radius.%]="100"\n    (click)="close.emit()"\n>\n    {{ closeWord$ | async }}\n</button>\n<div class="t-top">\n    <span class="t-icon">\n        <ng-content select="tui-svg,tui-icon" />\n    </span>\n    {{ type }}\n    <span\n        *ngIf="timestamp"\n        class="t-time"\n        [textContent]="isString(timestamp) ? timestamp : (timestamp | tuiFormatDate | async)"\n    ></span>\n</div>\n<h3\n    automation-id="tui-push__heading"\n    class="t-heading"\n>\n    {{ heading }}\n</h3>\n<div class="t-content">\n    <ng-content />\n</div>\n<div class="t-actions">\n    <span class="t-button">\n        <ng-content select="[tuiButton]" />\n    </span>\n    <span class="t-link">\n        <ng-content select="[tuiLink]" />\n    </span>\n</div>\n',
      styles: [':host{position:relative;display:block;inline-size:22.5rem;max-inline-size:100%;box-sizing:border-box;padding:1.25rem 1.25rem .25rem;overflow:hidden;font:var(--tui-font-text-m);border-radius:var(--tui-radius-xl);background:var(--tui-background-elevation-3);box-shadow:var(--tui-shadow-small)}.t-image{display:flex;flex-direction:column;max-block-size:10.625rem;overflow:hidden;margin:-1.25rem -1.25rem 1.25rem}.t-close{position:absolute;top:.75rem;right:.75rem;color:#0000008a;background:#f2f2f252;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem)}.t-top{display:flex;align-items:center;font:var(--tui-font-text-s);color:var(--tui-text-secondary)}.t-icon{block-size:1.25rem;margin-right:.5rem;transform:scale(.833);transform-origin:top left;color:var(--tui-text-action)}.t-time:before{content:"\\2022";display:inline-block;inline-size:1rem;text-align:center}.t-heading{line-height:1.25rem;font-weight:700;margin:.75rem 0 .25rem}.t-heading,.t-content{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-word;overflow:hidden}.t-actions{display:flex;align-items:center;font:var(--tui-font-text-s)}.t-button:not(:empty){margin:.75rem .75rem .75rem 0}.t-link{margin:.75rem 0}.t-link:empty{margin:.5rem}\n']
    }]
  }], null, {
    heading: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    timestamp: [{
      type: Input
    }],
    close: [{
      type: Output
    }]
  });
})();
var TUI_PUSH_DEFAULT_OPTIONS = {
  heading: "",
  type: "",
  timestamp: "",
  image: "",
  icon: "",
  iconColor: "",
  buttons: []
};
var TUI_PUSH_OPTIONS = tuiCreateToken(TUI_PUSH_DEFAULT_OPTIONS);
function tuiPushOptionsProvider(options) {
  return tuiProvideOptions(TUI_PUSH_OPTIONS, options, TUI_PUSH_DEFAULT_OPTIONS);
}
var TuiPushAlert = class _TuiPushAlert {
  constructor() {
    this.options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    this.context = injectContext();
  }
  get isDirective() {
    return this.context.content instanceof TuiPushDirective;
  }
  static {
    this.ɵfac = function TuiPushAlert_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPushAlert)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiPushAlert,
      selectors: [["ng-component"]],
      hostAttrs: ["role", "alert"],
      hostVars: 3,
      hostBindings: function TuiPushAlert_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵsyntheticHostProperty("@tuiFadeIn", ctx.options)("@tuiSlideInRight", ctx.options)("@tuiHeightCollapse", ctx.options);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["directive", ""], [3, "heading", "timestamp", "type", "close", 4, "ngIf", "ngIfElse"], [3, "close", "heading", "timestamp", "type"], ["alt", "", 3, "src", 4, "ngIf"], [3, "icon", "color", 4, "ngIf"], [3, "innerHTML", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["tuiButton", "", "type", "button", 3, "click", 4, "ngIf"], ["tuiLink", "", "type", "button", 3, "click", 4, "ngIf"], ["alt", "", 3, "src"], [3, "icon"], [3, "innerHTML"], ["tuiButton", "", "type", "button", 3, "click"], ["tuiLink", "", "type", "button", 3, "click"], [4, "polymorpheusOutlet"]],
      template: function TuiPushAlert_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiPushAlert_tui_push_0_Template, 6, 9, "tui-push", 1)(1, TuiPushAlert_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const directive_r6 = ɵɵreference(2);
          ɵɵproperty("ngIf", !ctx.isDirective)("ngIfElse", directive_r6);
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiButton, TuiIcon, TuiLink, TuiPushComponent],
      styles: ["[_nghost-%COMP%]{max-inline-size:calc(100% - 2rem);margin:0 1rem 1rem auto}[_nghost-%COMP%]:first-child{margin-top:auto}"],
      data: {
        animation: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPushAlert, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [NgIf, PolymorpheusOutlet, PolymorpheusTemplate, TuiButton, TuiIcon, TuiLink, TuiPushComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiFadeIn, tuiSlideInRight, tuiHeightCollapse],
      host: {
        role: "alert",
        "[@tuiFadeIn]": "options",
        "[@tuiSlideInRight]": "options",
        "[@tuiHeightCollapse]": "options"
      },
      template: `<tui-push
    *ngIf="!isDirective; else directive"
    [heading]="context.heading"
    [timestamp]="context.timestamp"
    [type]="context.type"
    (close)="context.$implicit.complete()"
>
    <img
        *ngIf="context.image"
        alt=""
        [src]="context.image"
    />
    <tui-icon
        *ngIf="context.icon"
        [icon]="context.icon"
        [style.color]="context.iconColor"
    />
    <div
        *polymorpheusOutlet="context.content as text; context: context"
        [innerHTML]="text"
    ></div>
    <button
        *ngIf="context.buttons.length > 1"
        tuiButton
        type="button"
        (click)="context.$implicit.next(context.buttons[0] || '')"
    >
        {{ context.buttons[0] }}
    </button>
    <button
        *ngIf="context.buttons.length"
        tuiLink
        type="button"
        (click)="context.$implicit.next(context.buttons[context.buttons.length - 1] || '')"
    >
        {{ context.buttons[context.buttons.length - 1] }}
    </button>
</tui-push>
<ng-template #directive>
    <ng-container *polymorpheusOutlet="context.content" />
</ng-template>
`,
      styles: [":host{max-inline-size:calc(100% - 2rem);margin:0 1rem 1rem auto}:host:first-child{margin-top:auto}\n"]
    }]
  }], null, null);
})();
var TuiPushService = class _TuiPushService extends TuiPopoverService {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiPushService_BaseFactory;
      return function TuiPushService_Factory(__ngFactoryType__) {
        return (ɵTuiPushService_BaseFactory || (ɵTuiPushService_BaseFactory = ɵɵgetInheritedFactory(_TuiPushService)))(__ngFactoryType__ || _TuiPushService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiPushService,
      factory: () => (() => new _TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS)))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPushService, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new TuiPushService(TUI_ALERTS, TuiPushAlert, inject(TUI_PUSH_OPTIONS))
    }]
  }], null, null);
})();
var TuiPushDirective = class _TuiPushDirective extends PolymorpheusTemplate {
  constructor() {
    super(inject(TemplateRef), inject(ChangeDetectorRef));
    this.push = inject(forwardRef(() => TuiPushService));
    this.show$ = new Subject();
    this.show$.pipe(tuiIfMap(() => this.push.open(this)), takeUntilDestroyed()).subscribe();
  }
  set tuiPush(show) {
    this.show$.next(show);
  }
  static {
    this.ɵfac = function TuiPushDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiPushDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiPushDirective,
      selectors: [["ng-template", "tuiPush", ""]],
      inputs: {
        tuiPush: "tuiPush"
      },
      standalone: true,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiPushDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "ng-template[tuiPush]"
    }]
  }], function() {
    return [];
  }, {
    tuiPush: [{
      type: Input
    }]
  });
})();
var TuiPush = [TuiPushComponent, TuiPushAlert, TuiPushDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-radio.mjs
var _c018 = ["type", "radio", "tuiRadio", ""];
var TUI_RADIO_DEFAULT_OPTIONS = {
  size: "m",
  appearance: ({
    checked
  }) => checked ? "primary" : "outline-grayscale"
};
var TUI_RADIO_OPTIONS = tuiCreateToken(TUI_RADIO_DEFAULT_OPTIONS);
function tuiRadioOptionsProvider(options) {
  return tuiProvideOptions(TUI_RADIO_OPTIONS, options, TUI_RADIO_DEFAULT_OPTIONS);
}
var TuiRadioComponent = class _TuiRadioComponent {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.options = inject(TUI_RADIO_OPTIONS);
    this.el = tuiInjectElement();
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.size = this.options.size;
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
  static {
    this.ɵfac = function TuiRadioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRadioComponent,
      selectors: [["input", "type", "radio", "tuiRadio", ""]],
      hostVars: 4,
      hostBindings: function TuiRadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵclassProp("_readonly", !ctx.control);
        }
      },
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [ɵɵHostDirectivesFeature([{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceState", "tuiAppearanceFocus", "tuiAppearanceFocus"]
      }, TuiNativeValidator]), ɵɵStandaloneFeature],
      attrs: _c018,
      decls: 0,
      vars: 0,
      template: function TuiRadioComponent_Template(rf, ctx) {
      },
      styles: ['[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";border-radius:100%;background:currentColor;transform:scale(0)}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="radio"][tuiRadio]',
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      hostDirectives: [{
        directive: TuiAppearance,
        inputs: ["tuiAppearanceState", "tuiAppearanceFocus"]
      }, TuiNativeValidator],
      host: {
        "[disabled]": "!control || control.disabled",
        "[attr.data-size]": "size",
        "[class._readonly]": "!control"
      },
      styles: ['[tuiRadio]{--t-size: 1.5rem;transition-property:background,box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:var(--t-size);block-size:var(--t-size);cursor:pointer;margin:0;flex-shrink:0;border-radius:100%;color:var(--tui-text-primary-on-accent-1)}[tuiRadio]:disabled._readonly{opacity:1}[tuiRadio]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";border-radius:100%;background:currentColor;transform:scale(0)}[tuiRadio]:checked:before{transform:scale(.5)}[tuiRadio][data-size=s]{--t-size: 1rem}\n']
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();
var TuiRadioDirective = class _TuiRadioDirective {
  constructor() {
    this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    const accessor = inject(RadioControlValueAccessor);
    const writeValue = accessor.writeValue.bind(accessor);
    accessor.writeValue = (value) => {
      if (this.identityMatcher(value, accessor.value)) {
        writeValue(accessor.value);
      } else {
        writeValue(value);
      }
    };
  }
  static {
    this.ɵfac = function TuiRadioDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRadioDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRadioDirective,
      selectors: [["input", "type", "radio", "tuiRadio", "", "identityMatcher", ""]],
      inputs: {
        identityMatcher: "identityMatcher"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: 'input[type="radio"][tuiRadio][identityMatcher]'
    }]
  }], function() {
    return [];
  }, {
    identityMatcher: [{
      type: Input
    }]
  });
})();
var TuiRadio = [TuiRadioComponent, TuiRadioDirective];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-radio-list.mjs
var _c019 = () => ({
  standalone: true
});
var _c114 = (a0, a1) => ({
  $implicit: a0,
  active: a1
});
function TuiRadioList_label_0_ng_container_2_Template(rf, ctx) {
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
function TuiRadioList_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 1)(1, "input", 2);
    ɵɵlistener("ngModelChange", function TuiRadioList_label_0_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, TuiRadioList_label_0_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("t-item_disabled", ctx_r1.disabled() || ctx_r1.disabledItemHandler(item_r4));
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled() || ctx_r1.disabledItemHandler(item_r4))("identityMatcher", ctx_r1.identityMatcher)("name", ctx_r1.name)("ngModel", ctx_r1.value())("ngModelOptions", ɵɵpureFunction0(12, _c019))("size", ctx_r1.size)("tuiValidator", ctx_r1.validator())("value", item_r4);
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r1.itemContent)("polymorpheusOutletContext", ɵɵpureFunction2(13, _c114, item_r4, ctx_r1.itemIsActive(item_r4)));
  }
}
var ERROR = () => ({
  error: "Invalid"
});
var TuiRadioList = class _TuiRadioList extends TuiControl {
  constructor() {
    super(...arguments);
    this.controls = EMPTY_QUERY;
    this.id = inject(TuiIdService).generate();
    this.validator = computed(() => this.invalid() ? ERROR : Validators.nullValidator);
    this.items = [];
    this.size = "m";
    this.identityMatcher = TUI_DEFAULT_IDENTITY_MATCHER;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.itemContent = ({
      $implicit
    }) => String($implicit);
  }
  get name() {
    return `${this.control.name}-${this.id}`;
  }
  onFocusOut() {
    this.controls.forEach((control) => control.control?.markAsTouched());
    if (!this.touched()) {
      this.onTouched();
    }
  }
  itemIsActive(item) {
    return this.value() === null ? item === null : this.identityMatcher(this.value(), item);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiRadioList_BaseFactory;
      return function TuiRadioList_Factory(__ngFactoryType__) {
        return (ɵTuiRadioList_BaseFactory || (ɵTuiRadioList_BaseFactory = ɵɵgetInheritedFactory(_TuiRadioList)))(__ngFactoryType__ || _TuiRadioList);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRadioList,
      selectors: [["tui-radio-list"]],
      viewQuery: function TuiRadioList_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controls = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiRadioList_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiRadioList_focusout_HostBindingHandler() {
            return ctx.onFocusOut();
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
        }
      },
      inputs: {
        items: "items",
        size: "size",
        identityMatcher: "identityMatcher",
        disabledItemHandler: "disabledItemHandler",
        itemContent: "itemContent"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsControl(_TuiRadioList)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 1,
      vars: 1,
      consts: [["class", "t-item", 3, "t-item_disabled", 4, "ngFor", "ngForOf"], [1, "t-item"], ["tuiRadio", "", "type", "radio", 3, "ngModelChange", "disabled", "identityMatcher", "name", "ngModel", "ngModelOptions", "size", "tuiValidator", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
      template: function TuiRadioList_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiRadioList_label_0_Template, 3, 16, "label", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, NgForOf, PolymorpheusOutlet, TuiRadioComponent, TuiRadioDirective, TuiValidator],
      styles: ["tui-radio-list{display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-font-text-m)}tui-radio-list[data-size=s],tui-radio-list[data-size=s] [tuiTitle]{font:var(--tui-font-text-ui-s)}tui-radio-list[data-size=s] [tuiSubtitle],tui-radio-list[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-font-text-xs)}tui-radio-list[data-size=s]>.t-item,tui-radio-list[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list [tuiTitle]{font:var(--tui-font-text-m)}tui-radio-list [tuiSubtitle]{color:var(--tui-text-tertiary)}tui-radio-list>.t-item{display:flex;gap:.75rem}tui-radio-list>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRadioList, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-radio-list",
      imports: [FormsModule, NgForOf, PolymorpheusOutlet, PolymorpheusTemplate, TuiRadio, TuiValidator],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsControl(TuiRadioList)],
      host: {
        "[attr.data-size]": "size",
        "(focusout)": "onFocusOut()"
      },
      template: '<label\n    *ngFor="let item of items; index as index"\n    class="t-item"\n    [class.t-item_disabled]="disabled() || disabledItemHandler(item)"\n>\n    <input\n        tuiRadio\n        type="radio"\n        [disabled]="disabled() || disabledItemHandler(item)"\n        [identityMatcher]="identityMatcher"\n        [name]="name"\n        [ngModel]="value()"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tuiValidator]="validator()"\n        [value]="item"\n        (ngModelChange)="onChange($event)"\n    />\n    <ng-container *polymorpheusOutlet="itemContent as text; context: {$implicit: item, active: itemIsActive(item)}">\n        {{ text }}\n    </ng-container>\n</label>\n',
      styles: ["tui-radio-list{display:flex;flex-direction:column;align-items:flex-start;gap:.75rem 1.5rem;font:var(--tui-font-text-m)}tui-radio-list[data-size=s],tui-radio-list[data-size=s] [tuiTitle]{font:var(--tui-font-text-ui-s)}tui-radio-list[data-size=s] [tuiSubtitle],tui-radio-list[data-size=s] [tuiTitle] [tuiSubtitle]{font:var(--tui-font-text-xs)}tui-radio-list[data-size=s]>.t-item,tui-radio-list[data-size=s] [tuiTitle]>.t-item{gap:.5rem}tui-radio-list [tuiTitle]{font:var(--tui-font-text-m)}tui-radio-list [tuiSubtitle]{color:var(--tui-text-tertiary)}tui-radio-list>.t-item{display:flex;gap:.75rem}tui-radio-list>.t-item_disabled{opacity:var(--tui-disabled-opacity)}\n"]
    }]
  }], null, {
    controls: [{
      type: ViewChildren,
      args: [NgControl]
    }],
    items: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    identityMatcher: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    itemContent: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-rating.mjs
var _c020 = () => ({
  standalone: true
});
var _c115 = (a0, a1) => ({
  $implicit: a0,
  value: a1
});
function TuiRating_div_2_tui_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 6);
  }
  if (rf & 2) {
    const src_r4 = ctx.polymorpheusOutlet;
    const index_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("--t-cut", 100 - ctx_r2.getCut(index_r2), "%");
    ɵɵclassProp("t-icon_fraction", ctx_r2.isFraction(index_r2));
    ɵɵproperty("icon", src_r4.toString());
  }
}
function TuiRating_div_2_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 7);
  }
  if (rf & 2) {
    const src_r5 = ctx.polymorpheusOutlet;
    const index_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("--t-cut", ctx_r2.getCut(index_r2), "%");
    ɵɵproperty("icon", src_r5.toString());
  }
}
function TuiRating_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("pointerup", function TuiRating_div_2_Template_div_pointerup_0_listener() {
      const index_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(ctx_r2.max - index_r2));
    });
    ɵɵtemplate(1, TuiRating_div_2_tui_icon_1_Template, 1, 5, "tui-icon", 4)(2, TuiRating_div_2_tui_icon_2_Template, 1, 3, "tui-icon", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("t-item_active", ctx_r2.isActive(index_r2));
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction2(6, _c115, ctx_r2.max - index_r2, ctx_r2.value()));
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.icon)("polymorpheusOutletContext", ɵɵpureFunction2(9, _c115, ctx_r2.max - index_r2, ctx_r2.value()));
  }
}
var TUI_RATING_DEFAULT_OPTIONS = {
  icon: "@tui.star",
  max: 5
};
var TUI_RATING_OPTIONS = tuiCreateToken(TUI_RATING_DEFAULT_OPTIONS);
function tuiRatingOptionsProvider(options) {
  return tuiProvideOptions(TUI_RATING_OPTIONS, options, TUI_RATING_DEFAULT_OPTIONS);
}
var TuiRating = class _TuiRating extends TuiControl {
  constructor() {
    super(...arguments);
    this.options = inject(TUI_RATING_OPTIONS);
    this.active = 0;
    this.icon = this.options.icon;
    this.max = this.options.max;
  }
  onKeyDown(event) {
    if (this.readOnly()) {
      event.preventDefault();
    }
  }
  onPointer(delta) {
    this.active = tuiClamp(this.active + delta, 0, 1);
  }
  onClick(value) {
    if (this.active) {
      this.onChange(value);
    }
  }
  isActive(index) {
    return Math.ceil(this.value()) >= this.max - index;
  }
  isFraction(index) {
    return this.value() > this.max - index - 1 && this.value() < this.max - index;
  }
  getCut(index) {
    return this.isFraction(index) ? 100 * Math.max(this.max - index - this.value(), 0) : 0;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiRating_BaseFactory;
      return function TuiRating_Factory(__ngFactoryType__) {
        return (ɵTuiRating_BaseFactory || (ɵTuiRating_BaseFactory = ɵɵgetInheritedFactory(_TuiRating)))(__ngFactoryType__ || _TuiRating);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRating,
      selectors: [["tui-rating"]],
      hostVars: 6,
      hostBindings: function TuiRating_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.capture", function TuiRating_keydown_capture_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("pointerdown", function TuiRating_pointerdown_HostBindingHandler() {
            return ctx.onPointer(1);
          })("pointercancel", function TuiRating_pointercancel_HostBindingHandler() {
            return ctx.onPointer(-1);
          })("pointerup", function TuiRating_pointerup_HostBindingHandler() {
            return ctx.onPointer(-1);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵclassProp("_disabled", ctx.disabled())("_readonly", ctx.readOnly())("_active", ctx.active);
        }
      },
      inputs: {
        icon: "icon",
        max: "max"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 7,
      consts: [["min", "1", "type", "range", 1, "t-range", 3, "blur", "ngModelChange", "disabled", "max", "ngModel", "ngModelOptions"], [1, "t-items"], ["class", "t-item", 3, "t-item_active", "pointerup", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-item", 3, "pointerup"], ["class", "t-icon t-icon_blank", 3, "t-icon_fraction", "icon", "--t-cut", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["class", "t-icon", 3, "icon", "--t-cut", 4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-icon", "t-icon_blank", 3, "icon"], [1, "t-icon", 3, "icon"]],
      template: function TuiRating_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "input", 0);
          ɵɵlistener("blur", function TuiRating_Template_input_blur_0_listener() {
            return ctx.onTouched();
          })("ngModelChange", function TuiRating_Template_input_ngModelChange_0_listener($event) {
            return ctx.onChange($event);
          });
          ɵɵelementEnd();
          ɵɵelementStart(1, "div", 1);
          ɵɵtemplate(2, TuiRating_div_2_Template, 3, 12, "div", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("disabled", ctx.disabled())("max", ctx.max)("ngModel", ctx.value())("ngModelOptions", ɵɵpureFunction0(6, _c020));
          ɵɵattribute("aria-disabled", ctx.readOnly());
          ɵɵadvance(2);
          ɵɵproperty("tuiRepeatTimesOf", ctx.max);
        }
      },
      dependencies: [CommonModule, FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, PolymorpheusOutlet, TuiIcon, TuiRepeatTimes],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:-webkit-fit-content;min-inline-size:-moz-fit-content;min-inline-size:fit-content;font-size:1rem;color:var(--tui-chart-categorical-12);cursor:pointer;-webkit-user-select:none;user-select:none}._readonly[_nghost-%COMP%]{pointer-events:none}._disabled[_nghost-%COMP%]{pointer-events:none;opacity:var(--tui-disabled-opacity)}.t-range[_ngcontent-%COMP%]{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;box-sizing:border-box;padding:0 .75em;pointer-events:none}.t-range[_ngcontent-%COMP%]:focus-visible + .t-items[_ngcontent-%COMP%]{box-shadow:inset 0 0 0 .125rem var(--tui-border-focus)}.t-items[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:row-reverse}.t-items[_ngcontent-%COMP%]:hover   .t-icon[_ngcontent-%COMP%]{clip-path:inset(0 0 0 0)}.t-items[_ngcontent-%COMP%]:hover   .t-icon_blank[_ngcontent-%COMP%]{clip-path:inset(0 0 0 100%)}.t-item[_ngcontent-%COMP%]{position:relative;flex:1 0 0;color:var(--tui-text-tertiary);transition-property:color,transform;transition-duration:var(--tui-duration);transition-timing-function:ease-in-out,cubic-bezier(.35,1.5,.4,2.5)}.t-item[_ngcontent-%COMP%]:first-child{max-inline-size:2.5em}.t-item[_ngcontent-%COMP%]:hover, .t-item[_ngcontent-%COMP%]:hover ~ .t-item[_ngcontent-%COMP%], .t-items[_ngcontent-%COMP%]:not(:hover)   .t-item_active[_ngcontent-%COMP%]{color:currentColor}.t-items[_ngcontent-%COMP%]:active   .t-item[_ngcontent-%COMP%]:hover, .t-items[_ngcontent-%COMP%]:active   .t-item[_ngcontent-%COMP%]:hover ~ .t-item[_ngcontent-%COMP%]{transform:scale(.85);transition-duration:var(--tui-duration),calc(var(--tui-duration) / 3);transition-timing-function:ease-in-out}.t-icon[_ngcontent-%COMP%]{transition-property:clip-path;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:2.5em;block-size:2.5em;font-size:inherit;clip-path:inset(0 var(--t-cut) 0 0)}.t-icon[_ngcontent-%COMP%]    >*{font-size:1rem}.t-icon_blank[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:none;color:var(--tui-text-tertiary);clip-path:inset(0 0 0 var(--t-cut))}.t-icon_fraction[_ngcontent-%COMP%]{display:block}@media (any-pointer: coarse){._active[_nghost-%COMP%]   .t-item_active[_ngcontent-%COMP%]{transform:scale(.85);transition-timing-function:ease-in-out}[_nghost-%COMP%]:not(._readonly)   .t-range[_ngcontent-%COMP%]{pointer-events:auto}.t-icon[_ngcontent-%COMP%]{transition:none}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRating, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-rating",
      imports: [CommonModule, FormsModule, PolymorpheusOutlet, TuiIcon, TuiRepeatTimes],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[class._disabled]": "disabled()",
        "[class._readonly]": "readOnly()",
        "[class._active]": "active",
        "(keydown.capture)": "onKeyDown($event)",
        "(pointerdown)": "onPointer(1)",
        "(pointercancel)": "onPointer(-1)",
        "(document:pointerup)": "onPointer(-1)"
      },
      template: '<input\n    min="1"\n    type="range"\n    class="t-range"\n    [attr.aria-disabled]="readOnly()"\n    [disabled]="disabled()"\n    [max]="max"\n    [ngModel]="value()"\n    [ngModelOptions]="{standalone: true}"\n    (blur)="onTouched()"\n    (ngModelChange)="onChange($event)"\n/>\n<div class="t-items">\n    <div\n        *tuiRepeatTimes="let index of max"\n        class="t-item"\n        [class.t-item_active]="isActive(index)"\n        (pointerup)="onClick(max - index)"\n    >\n        <tui-icon\n            *polymorpheusOutlet="icon as src; context: {$implicit: max - index, value: value()}"\n            class="t-icon t-icon_blank"\n            [class.t-icon_fraction]="isFraction(index)"\n            [icon]="src.toString()"\n            [style.--t-cut.%]="100 - getCut(index)"\n        />\n        <tui-icon\n            *polymorpheusOutlet="icon as src; context: {$implicit: max - index, value: value()}"\n            class="t-icon"\n            [icon]="src.toString()"\n            [style.--t-cut.%]="getCut(index)"\n        />\n    </div>\n</div>\n',
      styles: [":host{position:relative;display:block;inline-size:-webkit-fit-content;inline-size:-moz-fit-content;inline-size:fit-content;min-inline-size:-webkit-fit-content;min-inline-size:-moz-fit-content;min-inline-size:fit-content;font-size:1rem;color:var(--tui-chart-categorical-12);cursor:pointer;-webkit-user-select:none;user-select:none}:host._readonly{pointer-events:none}:host._disabled{pointer-events:none;opacity:var(--tui-disabled-opacity)}.t-range{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;opacity:0;box-sizing:border-box;padding:0 .75em;pointer-events:none}.t-range:focus-visible+.t-items{box-shadow:inset 0 0 0 .125rem var(--tui-border-focus)}.t-items{position:relative;display:flex;flex-direction:row-reverse}.t-items:hover .t-icon{clip-path:inset(0 0 0 0)}.t-items:hover .t-icon_blank{clip-path:inset(0 0 0 100%)}.t-item{position:relative;flex:1 0 0;color:var(--tui-text-tertiary);transition-property:color,transform;transition-duration:var(--tui-duration);transition-timing-function:ease-in-out,cubic-bezier(.35,1.5,.4,2.5)}.t-item:first-child{max-inline-size:2.5em}.t-item:hover,.t-item:hover~.t-item,.t-items:not(:hover) .t-item_active{color:currentColor}.t-items:active .t-item:hover,.t-items:active .t-item:hover~.t-item{transform:scale(.85);transition-duration:var(--tui-duration),calc(var(--tui-duration) / 3);transition-timing-function:ease-in-out}.t-icon{transition-property:clip-path;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;inline-size:2.5em;block-size:2.5em;font-size:inherit;clip-path:inset(0 var(--t-cut) 0 0)}.t-icon ::ng-deep>*{font-size:1rem}.t-icon_blank{position:absolute;top:0;left:0;display:none;color:var(--tui-text-tertiary);clip-path:inset(0 0 0 var(--t-cut))}.t-icon_fraction{display:block}@media (any-pointer: coarse){:host._active .t-item_active{transform:scale(.85);transition-timing-function:ease-in-out}:host:not(._readonly) .t-range{pointer-events:auto}.t-icon{transition:none}}\n"]
    }]
  }], null, {
    icon: [{
      type: Input
    }],
    max: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-routable-dialog.mjs
function tuiGenerateDialogableRoute(component, _a = {}) {
  var _b = _a, {
    path = "",
    outlet = ""
  } = _b, dialogOptions = __objRest(_b, [
    "path",
    "outlet"
  ]);
  return {
    path,
    outlet,
    loadComponent: () => __async(this, null, function* () {
      return Promise.resolve().then(function() {
        return routableDialog_component;
      });
    }),
    data: {
      dialog: component,
      backUrl: path.split("/").map(() => "..").join("/"),
      isLazy: path === "",
      dialogOptions
    }
  };
}
var TuiRoutableDialog = class _TuiRoutableDialog {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.injector = inject(INJECTOR$1);
    this.initialUrl = this.router.url;
    this.dialog = inject(TuiDialogService);
    const dialog = this.route.snapshot.data["dialog"];
    from(isClass(dialog) ? of(dialog) : dialog().then((m) => m.default ?? m)).pipe(switchMap((dialog2) => this.dialog.open(new PolymorpheusComponent(dialog2, this.injector), this.route.snapshot.data["dialogOptions"])), takeUntilDestroyed()).subscribe({
      complete: () => this.onDialogClosing()
    });
  }
  get lazyLoadedBackUrl() {
    return (this.route.parent?.snapshot.url || []).map(() => "..").join("/");
  }
  onDialogClosing() {
    if (this.initialUrl === this.router.url) {
      this.navigateToParent();
    }
  }
  navigateToParent() {
    const backUrl = this.route.snapshot.data["isLazy"] ? this.lazyLoadedBackUrl : this.route.snapshot.data["backUrl"];
    void this.router.navigate([backUrl], {
      relativeTo: this.route
    });
  }
  static {
    this.ɵfac = function TuiRoutableDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRoutableDialog)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRoutableDialog,
      selectors: [["tui-routable-dialog"]],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiRoutableDialog_Template(rf, ctx) {
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRoutableDialog, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-routable-dialog",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [];
  }, null);
})();
function isClass(fn) {
  return typeof fn === "function" && Object.getOwnPropertyDescriptor(fn, "prototype")?.writable === false;
}
var routableDialog_component = Object.freeze({
  __proto__: null,
  default: TuiRoutableDialog
});

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-segmented.mjs
var _c021 = ["*"];
var TuiSegmentedDirective = class _TuiSegmentedDirective {
  constructor() {
    this.controls = EMPTY_QUERY;
    this.radios = EMPTY_QUERY;
    this.links = EMPTY_QUERY;
    this.elements = EMPTY_QUERY;
    this.component = inject(TuiSegmented);
    this.el = tuiInjectElement();
  }
  ngAfterContentInit() {
    tuiQueryListChanges(this.controls).pipe(switchMap(() => tuiControlValue(this.controls.first)), map((value) => this.radios.toArray().findIndex((c) => c.value === value))).subscribe((index) => {
      this.component.update(index);
    });
  }
  ngAfterContentChecked() {
    if (this.links.length) {
      this.update(this.elements.get(this.linkIndex)?.nativeElement || null);
    }
  }
  update(target) {
    this.component.update(this.getIndex(target));
  }
  get linkIndex() {
    return this.links.toArray().findIndex((link) => link.isActive);
  }
  getIndex(element) {
    return Array.from(this.el.children).findIndex((tab) => tab.contains(element));
  }
  static {
    this.ɵfac = function TuiSegmentedDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmentedDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSegmentedDirective,
      contentQueries: function TuiSegmentedDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgControl, 5);
          ɵɵcontentQuery(dirIndex, RadioControlValueAccessor, 5);
          ɵɵcontentQuery(dirIndex, RouterLinkActive, 4);
          ɵɵcontentQuery(dirIndex, RouterLinkActive, 4, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.controls = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.radios = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elements = _t);
        }
      },
      hostBindings: function TuiSegmentedDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiSegmentedDirective_click_HostBindingHandler($event) {
            return ctx.update($event.target);
          });
        }
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmentedDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      host: {
        "(click)": "update($event.target)"
      }
    }]
  }], null, {
    controls: [{
      type: ContentChildren,
      args: [NgControl, {
        descendants: true
      }]
    }],
    radios: [{
      type: ContentChildren,
      args: [RadioControlValueAccessor, {
        descendants: true
      }]
    }],
    links: [{
      type: ContentChildren,
      args: [RouterLinkActive]
    }],
    elements: [{
      type: ContentChildren,
      args: [RouterLinkActive, {
        read: ElementRef
      }]
    }]
  });
})();
var TuiSegmented = class _TuiSegmented {
  constructor() {
    this.el = tuiInjectElement();
    this.sub = inject(ResizeObserverService, {
      self: true
    }).pipe(tuiZonefree(), takeUntilDestroyed()).subscribe(() => this.refresh());
    this.size = "s";
    this.activeItemIndex = 0;
    this.activeItemIndexChange = new EventEmitter();
  }
  ngOnChanges() {
    this.refresh();
  }
  update(activeItemIndex) {
    if (activeItemIndex === this.activeItemIndex || activeItemIndex < 0) {
      return;
    }
    this.activeItemIndex = activeItemIndex;
    this.activeItemIndexChange.emit(activeItemIndex);
    this.refresh();
  }
  get activeElement() {
    return this.el.children.item(this.activeItemIndex);
  }
  refresh() {
    const el = this.activeElement;
    if (!tuiIsHTMLElement(el)) {
      return;
    }
    Array.from(this.el.children).forEach((e) => e.classList.remove("tui-segmented_active"));
    el.classList.add("tui-segmented_active");
    const {
      offsetWidth = 0,
      offsetLeft = 0,
      offsetTop = 0
    } = el;
    this.el.style.setProperty("--t-top", tuiPx(offsetTop));
    this.el.style.setProperty("--t-left", tuiPx(offsetLeft));
    this.el.style.setProperty("--t-width", tuiPx(offsetWidth));
  }
  static {
    this.ɵfac = function TuiSegmented_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSegmented)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSegmented,
      selectors: [["tui-segmented"]],
      hostVars: 1,
      hostBindings: function TuiSegmented_HostBindings(rf, ctx) {
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
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })]), ɵɵHostDirectivesFeature([TuiSegmentedDirective]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      ngContentSelectors: _c021,
      decls: 1,
      vars: 0,
      template: function TuiSegmented_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ['tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSegmented, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-segmented",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, tuiBadgeNotificationOptionsProvider({
        size: "s"
      })],
      hostDirectives: [TuiSegmentedDirective],
      host: {
        "[attr.data-size]": "size"
      },
      styles: ['tui-segmented{position:relative;display:flex;color:var(--tui-background-base);background:var(--tui-background-neutral-1);overflow:hidden}tui-segmented[data-size=s]{--t-padding: .5rem;--t-gap: .5rem;--t-margin: -.125rem;--t-height: var(--tui-height-s);font:var(--tui-font-text-s);border-radius:var(--tui-radius-m)}tui-segmented[data-size=s] tui-icon{font-size:1rem}tui-segmented[data-size=m]{--t-padding: .875rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-m);font:var(--tui-font-text-m);border-radius:var(--tui-radius-m)}tui-segmented[data-size=l]{--t-padding: 1.25rem;--t-gap: 1rem;--t-margin: -.375rem;--t-height: var(--tui-height-l);font:var(--tui-font-text-l);border-radius:var(--tui-radius-l)}tui-segmented[data-size=l]>*:before{block-size:1.25rem}tui-segmented>a,tui-segmented>button,tui-segmented>label,tui-segmented>label>input:not([tuiRadio]){transition-property:color,background,opacity,border-image;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;justify-content:center;block-size:var(--t-height);white-space:nowrap;gap:var(--t-gap);margin:0;padding:0 var(--t-padding);color:var(--tui-text-primary);overflow:hidden;cursor:pointer;font:inherit;border-radius:inherit;border:.125rem solid transparent;background-clip:padding-box;box-sizing:border-box;border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 0 0 100 .5;clip-path:polygon(-1rem calc(50% - .5rem),1px calc(50% - .5rem),1px 0,100% 0,100% 100%,1px 100%,1px calc(50% + .5rem),-1rem calc(50% + .5rem))}tui-segmented>a>*,tui-segmented>button>*,tui-segmented>label>*,tui-segmented>label>input:not([tuiRadio])>*{margin:0 var(--t-margin)}tui-segmented>a:focus-visible,tui-segmented>button:focus-visible,tui-segmented>label:focus-visible,tui-segmented>label>input:not([tuiRadio]):focus-visible{outline:.125rem solid var(--tui-border-focus);outline-offset:-.25rem}@media (hover: hover){tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover{background-color:var(--tui-background-neutral-1-hover)}tui-segmented>a:not(.tui-segmented_active):not(:active):hover,tui-segmented>button:not(.tui-segmented_active):not(:active):hover,tui-segmented>label:not(.tui-segmented_active):not(:active):hover,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover,tui-segmented>a:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>button:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label:not(.tui-segmented_active):not(:active):hover+*,tui-segmented>label>input:not([tuiRadio]):not(.tui-segmented_active):not(:active):hover+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>a.tui-segmented_active:hover,tui-segmented>button.tui-segmented_active:hover,tui-segmented>label.tui-segmented_active:hover,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active:hover{opacity:var(--tui-disabled-opacity)}}tui-segmented>a:active,tui-segmented>button:active,tui-segmented>label:active,tui-segmented>label>input:not([tuiRadio]):active,tui-segmented>a:active+*,tui-segmented>button:active+*,tui-segmented>label:active+*,tui-segmented>label>input:not([tuiRadio]):active+*,tui-segmented>a.tui-segmented_active,tui-segmented>button.tui-segmented_active,tui-segmented>label.tui-segmented_active,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active,tui-segmented>a.tui-segmented_active+*,tui-segmented>button.tui-segmented_active+*,tui-segmented>label.tui-segmented_active+*,tui-segmented>label>input:not([tuiRadio]).tui-segmented_active+*{border-image:linear-gradient(var(--tui-border-normal),transparent) 1 / 0 0 25% .5 / 100 0 0 .5}tui-segmented>label>input:not([tuiRadio]){position:absolute;top:-.125rem;left:-.125rem;right:-.125rem;bottom:-.125rem;background:transparent!important}tui-segmented:before{transition-property:top,left,width;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;left:var(--t-left);top:var(--t-top);block-size:var(--t-height);inline-size:var(--t-width);border-radius:inherit;background:currentColor;background-clip:padding-box;border:.125rem solid transparent;box-sizing:border-box;filter:drop-shadow(0 .25rem 1.25rem rgba(0,0,0,.1))}[tuiTheme=dark] tui-segmented,tui-segmented[tuiTheme=dark]{--tui-background-base: var(--tui-background-neutral-1-hover)}\n']
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

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-status.mjs
var TuiStatusStyles = class _TuiStatusStyles {
  static {
    this.ɵfac = function TuiStatusStyles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStatusStyles)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiStatusStyles,
      selectors: [["ng-component"]],
      hostAttrs: [1, "tui-status"],
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 0,
      vars: 0,
      template: function TuiStatusStyles_Template(rf, ctx) {
      },
      styles: ['[tuiStatus]{display:inline-flex;align-items:center;gap:.5rem}[tuiStatus]:before{content:"";display:var(--t-status, none);inline-size:.5rem;block-size:.5rem;border-radius:100%;background:var(--t-status)}\n'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStatusStyles, [{
    type: Component,
    args: [{
      standalone: true,
      template: "",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "tui-status"
      },
      styles: ['[tuiStatus]{display:inline-flex;align-items:center;gap:.5rem}[tuiStatus]:before{content:"";display:var(--t-status, none);inline-size:.5rem;block-size:.5rem;border-radius:100%;background:var(--t-status)}\n']
    }]
  }], null, null);
})();
var TuiStatus = class _TuiStatus {
  constructor() {
    this.nothing = tuiWithStyles(TuiStatusStyles);
    this.tuiStatus = "";
  }
  static {
    this.ɵfac = function TuiStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStatus)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiStatus,
      selectors: [["", "tuiStatus", ""]],
      hostAttrs: ["tuiStatus", ""],
      hostVars: 2,
      hostBindings: function TuiStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--t-status", ctx.tuiStatus || null);
        }
      },
      inputs: {
        tuiStatus: "tuiStatus"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStatus, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiStatus]",
      inputs: ["tuiStatus"],
      host: {
        tuiStatus: "",
        "[style.--t-status]": "tuiStatus || null"
      }
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-stepper.mjs
var _c022 = ["*"];
function TuiStepperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c116 = ["tuiStep", ""];
function TuiStep_tui_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r0.icon);
  }
}
var TuiStepperComponent = class _TuiStepperComponent {
  constructor() {
    this.steps = EMPTY_QUERY;
    this.cdr = inject(ChangeDetectorRef);
    this.el = tuiInjectElement();
    this.scrollService = inject(TuiScrollService);
    this.speed = inject(TUI_ANIMATIONS_SPEED);
    this.destroyRef = inject(DestroyRef);
    this.activeItemIndex = 0;
    this.$ = inject(ResizeObserverService, {
      self: true
    }).pipe(takeUntilDestroyed()).subscribe(() => this.scrollIntoView(this.activeItemIndex));
    this.orientation = "horizontal";
    this.activeItemIndexChange = new EventEmitter();
  }
  set activeIndex(index) {
    this.activeItemIndex = index;
    this.scrollIntoView(index);
  }
  indexOf(step) {
    return tuiGetOriginalArrayFromQueryList(this.steps).findIndex(({
      nativeElement
    }) => nativeElement === step);
  }
  isActive(index) {
    return index === this.activeItemIndex;
  }
  activate(index) {
    if (this.activeItemIndex === index) {
      return;
    }
    this.activeItemIndex = index;
    this.activeItemIndexChange.emit(index);
    this.cdr.markForCheck();
    this.scrollIntoView(index);
  }
  get changes$() {
    return tuiQueryListChanges(this.steps).pipe(delay(0));
  }
  onHorizontal(event, step) {
    if (this.orientation !== "horizontal" || !event.target) {
      return;
    }
    event.preventDefault();
    this.moveFocus(event.target, step);
  }
  onVertical(event, step) {
    if (this.orientation !== "vertical" || !event.target) {
      return;
    }
    event.preventDefault();
    this.moveFocus(event.target, step);
  }
  moveFocus(current, step) {
    if (!tuiIsElement(current)) {
      return;
    }
    const stepElements = this.steps.toArray().map(({
      nativeElement
    }) => nativeElement);
    const index = stepElements.findIndex((element) => element === current);
    tuiMoveFocus(index, stepElements, step);
  }
  scrollIntoView(index) {
    const step = this.steps.get(index)?.nativeElement;
    if (!step) {
      return;
    }
    const {
      clientHeight,
      clientWidth,
      offsetTop,
      offsetLeft
    } = this.el;
    const {
      offsetHeight,
      offsetWidth,
      offsetTop: stepOffsetTop,
      offsetLeft: stepOffsetLeft
    } = step;
    const top = stepOffsetTop - offsetTop - clientHeight / 2 + offsetHeight / 2;
    const left = stepOffsetLeft - offsetLeft - clientWidth / 2 + offsetWidth / 2;
    this.scrollService.scroll$(this.el, Math.max(0, top), Math.max(0, left), tuiGetDuration(this.speed) / 3).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  static {
    this.ɵfac = function TuiStepperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStepperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiStepperComponent,
      selectors: [["tui-stepper"], ["nav", "tuiStepper", ""]],
      contentQueries: function TuiStepperComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiStep, 4, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.steps = _t);
        }
      },
      hostVars: 1,
      hostBindings: function TuiStepperComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowRight", function TuiStepperComponent_keydown_arrowRight_HostBindingHandler($event) {
            return ctx.onHorizontal($event, 1);
          })("keydown.arrowLeft", function TuiStepperComponent_keydown_arrowLeft_HostBindingHandler($event) {
            return ctx.onHorizontal($event, -1);
          })("keydown.arrowDown", function TuiStepperComponent_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onVertical($event, 1);
          })("keydown.arrowUp", function TuiStepperComponent_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onVertical($event, -1);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-orientation", ctx.orientation);
        }
      },
      inputs: {
        orientation: "orientation",
        activeIndex: [0, "activeItemIndex", "activeIndex"]
      },
      outputs: {
        activeItemIndexChange: "activeItemIndexChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService]), ɵɵStandaloneFeature],
      ngContentSelectors: _c022,
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"]],
      template: function TuiStepperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiStepperComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵprojection(2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.changes$));
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;display:flex;scroll-behavior:var(--tui-scroll-behavior);overflow:auto;counter-reset:steps}[_nghost-%COMP%]::-webkit-scrollbar, [_nghost-%COMP%]::-webkit-scrollbar-thumb{display:none}[data-orientation=vertical][_nghost-%COMP%]{flex-direction:column}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiStepperComponent.prototype, "changes$", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStepperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-stepper, nav[tuiStepper]",
      imports: [AsyncPipe, NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService],
      host: {
        "[attr.data-orientation]": "orientation",
        "(keydown.arrowRight)": "onHorizontal($event, 1)",
        "(keydown.arrowLeft)": "onHorizontal($event, -1)",
        "(keydown.arrowDown)": "onVertical($event, 1)",
        "(keydown.arrowUp)": "onVertical($event, -1)"
      },
      template: '<ng-container *ngIf="changes$ | async" />\n<ng-content />\n',
      styles: [":host{scrollbar-width:none;-ms-overflow-style:none;display:flex;scroll-behavior:var(--tui-scroll-behavior);overflow:auto;counter-reset:steps}:host::-webkit-scrollbar,:host::-webkit-scrollbar-thumb{display:none}:host[data-orientation=vertical]{flex-direction:column}\n"]
    }]
  }], null, {
    steps: [{
      type: ContentChildren,
      args: [forwardRef(() => TuiStep), {
        read: ElementRef
      }]
    }],
    orientation: [{
      type: Input
    }],
    activeItemIndexChange: [{
      type: Output
    }],
    activeIndex: [{
      type: Input,
      args: ["activeItemIndex"]
    }],
    changes$: []
  });
})();
var TuiStep = class _TuiStep {
  constructor() {
    this.stepper = inject(TuiStepperComponent);
    this.el = tuiInjectElement();
    this.$ = (inject(RouterLinkActive, {
      optional: true
    })?.isActiveChange.asObservable() ?? EMPTY).pipe(filter(Boolean), takeUntilDestroyed()).subscribe(() => this.activate());
    this.focusVisible = false;
    this.icons = inject(TUI_COMMON_ICONS);
    this.stepState = "normal";
    this.icon = "";
  }
  get isActive() {
    return this.stepper.isActive(this.index);
  }
  get isVertical() {
    return this.stepper.orientation === "vertical";
  }
  get tabIndex() {
    return this.isActive ? 0 : -1;
  }
  get index() {
    return this.stepper.indexOf(this.el);
  }
  activate() {
    this.stepper.activate(this.index);
  }
  static {
    this.ɵfac = function TuiStep_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStep)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiStep,
      selectors: [["button", "tuiStep", ""], ["a", "tuiStep", "", 3, "routerLink", ""], ["a", "tuiStep", "", "routerLink", "", "routerLinkActive", ""]],
      hostVars: 8,
      hostBindings: function TuiStep_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TuiStep_click_HostBindingHandler() {
            return ctx.activate();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("tabIndex", ctx.tabIndex);
          ɵɵattribute("data-state", ctx.stepState);
          ɵɵclassProp("_vertical", ctx.isVertical)("_focus-visible", ctx.focusVisible)("_active", ctx.isActive);
        }
      },
      inputs: {
        stepState: "stepState",
        icon: "icon"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c116,
      ngContentSelectors: _c022,
      decls: 5,
      vars: 3,
      consts: [["class", "t-marker t-marker_custom", 3, "icon", 4, "ngIf"], [1, "t-marker", "t-marker_error", 3, "icon"], [1, "t-marker", "t-marker_pass", 3, "icon"], [1, "t-marker", "t-marker_index"], [1, "t-marker", "t-marker_custom", 3, "icon"]],
      template: function TuiStep_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, TuiStep_tui_icon_0_Template, 1, 1, "tui-icon", 0);
          ɵɵelement(1, "tui-icon", 1)(2, "tui-icon", 2)(3, "div", 3);
          ɵɵprojection(4);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.icon);
          ɵɵadvance();
          ɵɵproperty("icon", ctx.icons.error);
          ɵɵadvance();
          ɵɵproperty("icon", ctx.icons.check);
        }
      },
      dependencies: [NgIf, TuiIcon],
      styles: ['[_nghost-%COMP%]{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;flex-shrink:0;color:var(--tui-text-action);margin-right:1.5rem;outline:none;cursor:pointer;counter-increment:steps;text-align:start}[_nghost-%COMP%]:disabled{pointer-events:none;color:var(--tui-text-secondary)}[_nghost-%COMP%]:hover{color:var(--tui-text-action-hover)}[_nghost-%COMP%]:not(:last-of-type)._vertical{margin-bottom:1.25rem}._active[_nghost-%COMP%], ._active[_nghost-%COMP%]:hover{color:var(--tui-text-primary);cursor:default}[_nghost-%COMP%]:focus-visible:before{content:"";position:absolute;left:2.75rem;right:0;top:50%;block-size:1.5rem;margin-top:-.75rem;background:var(--tui-service-selection-background)}.t-marker[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;inline-size:2rem;block-size:2rem;border-radius:100%;margin-right:.75rem;flex-shrink:0;align-items:center;align-self:flex-start;justify-content:center;background:var(--tui-background-neutral-1);color:var(--tui-text-action);border:.5rem solid transparent;box-sizing:border-box}[_nghost-%COMP%]:disabled   .t-marker[_ngcontent-%COMP%]{background:var(--tui-background-neutral-1);color:var(--tui-text-secondary)}.t-marker_index[_ngcontent-%COMP%]:before{content:counter(steps)}[_nghost-%COMP%]:hover   .t-marker_index[_ngcontent-%COMP%]{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}._active[_nghost-%COMP%]   .t-marker_index[_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1);background:var(--tui-background-accent-1)}[_nghost-%COMP%]:not([data-state=normal]):not(._active)   .t-marker_index[_ngcontent-%COMP%], [_nghost-%COMP%]:not(._active)   .t-marker_custom[_ngcontent-%COMP%] ~ .t-marker_index[_ngcontent-%COMP%]{display:none}.t-marker_error[_ngcontent-%COMP%]{background:var(--tui-status-negative-pale);color:var(--tui-status-negative)}[_nghost-%COMP%]:hover   .t-marker_error[_ngcontent-%COMP%]{background:var(--tui-status-negative-pale-hover);color:var(--tui-status-negative)}[_nghost-%COMP%]:not([data-state=error])   .t-marker_error[_ngcontent-%COMP%], ._active[_nghost-%COMP%]   .t-marker_error[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]:not([data-state=pass])   .t-marker_pass[_ngcontent-%COMP%], ._active[_nghost-%COMP%]   .t-marker_pass[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]:not([data-state=normal])   .t-marker_custom[_ngcontent-%COMP%], ._active[_nghost-%COMP%]   .t-marker_custom[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]:hover   .t-marker_custom[_ngcontent-%COMP%]{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStep, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "button[tuiStep], a[tuiStep]:not([routerLink]), a[tuiStep][routerLink][routerLinkActive]",
      imports: [NgIf, TuiIcon],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[attr.data-state]": "stepState",
        "[class._vertical]": "isVertical",
        "[class._focus-visible]": "focusVisible",
        "[class._active]": "isActive",
        "[tabIndex]": "tabIndex",
        "(click)": "activate()"
      },
      template: '<tui-icon\n    *ngIf="icon"\n    class="t-marker t-marker_custom"\n    [icon]="icon"\n/>\n<tui-icon\n    class="t-marker t-marker_error"\n    [icon]="icons.error"\n/>\n<tui-icon\n    class="t-marker t-marker_pass"\n    [icon]="icons.check"\n/>\n<div class="t-marker t-marker_index"></div>\n<ng-content />\n',
      styles: [':host{-webkit-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;position:relative;display:flex;align-items:center;flex-shrink:0;color:var(--tui-text-action);margin-right:1.5rem;outline:none;cursor:pointer;counter-increment:steps;text-align:start}:host:disabled{pointer-events:none;color:var(--tui-text-secondary)}:host:hover{color:var(--tui-text-action-hover)}:host:not(:last-of-type)._vertical{margin-bottom:1.25rem}:host._active,:host._active:hover{color:var(--tui-text-primary);cursor:default}:host:focus-visible:before{content:"";position:absolute;left:2.75rem;right:0;top:50%;block-size:1.5rem;margin-top:-.75rem;background:var(--tui-service-selection-background)}.t-marker{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;inline-size:2rem;block-size:2rem;border-radius:100%;margin-right:.75rem;flex-shrink:0;align-items:center;align-self:flex-start;justify-content:center;background:var(--tui-background-neutral-1);color:var(--tui-text-action);border:.5rem solid transparent;box-sizing:border-box}:host:disabled .t-marker{background:var(--tui-background-neutral-1);color:var(--tui-text-secondary)}.t-marker_index:before{content:counter(steps)}:host:hover .t-marker_index{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}:host._active .t-marker_index{color:var(--tui-text-primary-on-accent-1);background:var(--tui-background-accent-1)}:host:not([data-state=normal]):not(._active) .t-marker_index,:host:not(._active) .t-marker_custom~.t-marker_index{display:none}.t-marker_error{background:var(--tui-status-negative-pale);color:var(--tui-status-negative)}:host:hover .t-marker_error{background:var(--tui-status-negative-pale-hover);color:var(--tui-status-negative)}:host:not([data-state=error]) .t-marker_error,:host._active .t-marker_error{display:none}:host:not([data-state=pass]) .t-marker_pass,:host._active .t-marker_pass{display:none}:host:not([data-state=normal]) .t-marker_custom,:host._active .t-marker_custom{display:none}:host:hover .t-marker_custom{color:var(--tui-text-action-hover);background:var(--tui-background-neutral-1-hover)}\n']
    }]
  }], null, {
    stepState: [{
      type: Input
    }],
    icon: [{
      type: Input
    }]
  });
})();
var TuiStepper = [TuiStepperComponent, TuiStep];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tiles.mjs
var _c023 = ["*"];
var _c117 = ["wrapper"];
var TuiTilesComponent = class _TuiTilesComponent {
  constructor() {
    this.el = tuiInjectElement();
    this.el$ = new Subject();
    this.debounce = 0;
    this.orderChange = this.el$.pipe(debounce(() => timer(this.debounce)), filter(this.filter.bind(this)), map((element) => this.reorder(element)));
    this.element = null;
    this.order$ = new BehaviorSubject(/* @__PURE__ */ new Map());
  }
  set order(map2) {
    this.order$.next(map2);
  }
  get order() {
    return this.order$.value;
  }
  rearrange(element) {
    this.el$.next(element);
  }
  filter(element) {
    return !!this.element && !!element && this.element !== element;
  }
  reorder(element) {
    const elements = Array.from(this.el.children);
    const currentIndex = elements.indexOf(this.element || element);
    const newIndex = elements.indexOf(element);
    const order = this.order.size ? new Map(this.order) : new Map(elements.map((_, index) => [index, index]));
    const dragged = order.get(currentIndex) ?? currentIndex;
    const placement = order.get(newIndex) ?? newIndex;
    order.set(currentIndex, placement);
    order.set(newIndex, dragged);
    this.order$.next(order);
    return order;
  }
  static {
    this.ɵfac = function TuiTilesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTilesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTilesComponent,
      selectors: [["tui-tiles"]],
      hostVars: 2,
      hostBindings: function TuiTilesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerleave.silent", function TuiTilesComponent_pointerleave_silent_HostBindingHandler() {
            return ctx.rearrange();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("_dragged", ctx.element);
        }
      },
      inputs: {
        debounce: "debounce",
        order: "order"
      },
      outputs: {
        orderChange: "orderChange"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c023,
      decls: 1,
      vars: 0,
      template: function TuiTilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTilesComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tiles",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ResizeObserverService, MutationObserverService, {
        provide: WA_MUTATION_OBSERVER_INIT,
        useValue: {
          childList: true
        }
      }],
      host: {
        "[class._dragged]": "element",
        "(pointerleave.silent)": "rearrange()"
      },
      styles: ["tui-tiles{position:relative;z-index:0;display:grid;grid-auto-flow:dense;justify-items:stretch}tui-tiles._dragged tui-tile>.t-wrapper{pointer-events:none}tui-tiles._dragged tui-tile:not(._dragged)>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tiles:not(._dragged) tui-tile._dragged>.t-wrapper{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;transition-delay:1ms}tui-tile>.t-wrapper{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;z-index:0;border-radius:inherit}tui-tile._dragged>.t-wrapper{z-index:1;transition:none}\n"]
    }]
  }], null, {
    debounce: [{
      type: Input
    }],
    orderChange: [{
      type: Output
    }],
    order: [{
      type: Input
    }]
  });
})();
var TuiTileService = class _TuiTileService {
  constructor() {
    this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.el = tuiInjectElement();
    this.tiles = inject(TuiTilesComponent);
    this.sub = new Subscription();
    this.offset$ = new BehaviorSubject([NaN, NaN]);
    this.position$ = combineLatest([this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)), inject(ResizeObserverService).pipe(startWith(null)), inject(MutationObserverService).pipe(startWith(null)), this.tiles.order$.pipe(debounceTime(0, tuiZonefreeScheduler()))]).pipe(map(([offset]) => offset));
  }
  init(element) {
    if (this.isBrowser) {
      this.sub.add(this.position$.subscribe((offset) => {
        this.setPosition(element, offset);
        this.setRect(element, offset);
      }));
    } else {
      this.el.style.setProperty("position", "relative");
    }
  }
  setOffset(offset) {
    this.offset$.next(offset);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  getRect([left, top]) {
    const elTop = Number.isNaN(top) ? this.el.offsetTop : top;
    const elLeft = Number.isNaN(left) ? this.el.offsetLeft : left;
    const rect = {
      top: elTop,
      left: elLeft,
      width: this.el.clientWidth,
      height: this.el.clientHeight,
      right: NaN,
      bottom: NaN,
      y: elTop,
      x: elLeft
    };
    return __spreadProps(__spreadValues({}, rect), {
      toJSON: () => JSON.stringify(rect)
    });
  }
  setRect({
    style
  }, offset) {
    const {
      top,
      left,
      width,
      height
    } = this.getRect(offset);
    style.top = tuiPx(top);
    style.left = tuiPx(left);
    style.width = tuiPx(width);
    style.height = tuiPx(height);
  }
  setPosition(element, [left]) {
    if (!Number.isNaN(left)) {
      element.style.setProperty("position", "fixed");
      return;
    }
    const {
      style
    } = element;
    const rect = element.getBoundingClientRect();
    const host = this.el.getBoundingClientRect();
    style.removeProperty("position");
    style.top = tuiPx(rect.top - host.top + this.el.offsetTop);
    style.left = tuiPx(rect.left - host.left + this.el.offsetLeft);
  }
  static {
    this.ɵfac = function TuiTileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiTileService,
      factory: _TuiTileService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileService, [{
    type: Injectable
  }], null, null);
})();
var TuiTile = class _TuiTile {
  constructor() {
    this.service = inject(TuiTileService);
    this.tiles = inject(TuiTilesComponent);
    this.dragged = false;
    this.width = 1;
    this.height = 1;
    this.element = tuiInjectElement();
  }
  onDrag(offset) {
    const dragged = !Number.isNaN(offset[0]);
    this.dragged = this.dragged || dragged;
    this.tiles.element = dragged ? this.element : null;
    this.service.setOffset(offset);
  }
  ngAfterViewInit() {
    if (this.wrapper) {
      this.service.init(this.wrapper.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.tiles.element === this.element) {
      this.tiles.element = null;
    }
  }
  get column() {
    return `span var(--tui-width, ${this.width})`;
  }
  get row() {
    return `span var(--tui-height, ${this.height})`;
  }
  onEnter() {
    this.tiles.rearrange(this.element);
  }
  onTransitionEnd() {
    this.dragged = false;
  }
  static {
    this.ɵfac = function TuiTile_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTile)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTile,
      selectors: [["tui-tile"]],
      viewQuery: function TuiTile_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c117, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        }
      },
      hostVars: 6,
      hostBindings: function TuiTile_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerenter", function TuiTile_pointerenter_HostBindingHandler() {
            return ctx.onEnter();
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("grid-column", ctx.column)("grid-row", ctx.row);
          ɵɵclassProp("_dragged", ctx.dragged);
        }
      },
      inputs: {
        width: "width",
        height: "height"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([TuiTileService]), ɵɵStandaloneFeature],
      ngContentSelectors: _c023,
      decls: 3,
      vars: 0,
      consts: [["wrapper", ""], [1, "t-wrapper", 3, "transitionend.self"]],
      template: function TuiTile_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵlistener("transitionend.self", function TuiTile_Template_div_transitionend_self_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onTransitionEnd());
          });
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTile, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tile",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [TuiTileService],
      host: {
        "[class._dragged]": "dragged",
        "[style.gridColumn]": "column",
        "[style.gridRow]": "row",
        "(pointerenter)": "onEnter()"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    (transitionend.self)="onTransitionEnd()"\n>\n    <ng-content />\n</div>\n'
    }]
  }], null, {
    wrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
function isInteracting(x = NaN) {
  return !Number.isNaN(x) || !Number.isNaN(this["x"]);
}
function isDragging() {
  return !Number.isNaN(this["x"]);
}
var TuiTileHandle = class _TuiTileHandle {
  constructor() {
    this.tile = inject(TuiTile);
    this.x = NaN;
    this.y = NaN;
  }
  onPointer(x = NaN, y = NaN) {
    const {
      left,
      top
    } = this.tile.element.getBoundingClientRect();
    this.x = x - left;
    this.y = y - top;
    this.tile.onDrag([NaN, NaN]);
  }
  onMove(x, y) {
    this.tile.onDrag([x - this.x, y - this.y]);
  }
  onStart(event) {
    const target = tuiGetActualTarget(event);
    const {
      x,
      y,
      pointerId
    } = event;
    if (tuiIsElement(target)) {
      target.releasePointerCapture(pointerId);
    }
    this.onPointer(x, y);
  }
  static {
    this.ɵfac = function TuiTileHandle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTileHandle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTileHandle,
      selectors: [["", "tuiTileHandle", ""]],
      hostVars: 4,
      hostBindings: function TuiTileHandle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("pointerdown.silent", function TuiTileHandle_pointerdown_silent_HostBindingHandler($event) {
            return ctx.onStart($event);
          })("pointerup.silent", function TuiTileHandle_pointerup_silent_HostBindingHandler() {
            return ctx.onPointer();
          }, false, ɵɵresolveDocument)("pointermove.silent", function TuiTileHandle_pointermove_silent_HostBindingHandler($event) {
            return ctx.onMove($event.x, $event.y);
          }, false, ɵɵresolveDocument);
        }
        if (rf & 2) {
          ɵɵstyleProp("touch-action", "none")("user-select", "none");
        }
      },
      standalone: true
    });
  }
};
__decorate([shouldCall(isInteracting)], TuiTileHandle.prototype, "onPointer", null);
__decorate([shouldCall(isDragging)], TuiTileHandle.prototype, "onMove", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTileHandle, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTileHandle]",
      host: {
        "[style.touchAction]": '"none"',
        "[style.userSelect]": '"none"',
        "(pointerdown.silent)": "onStart($event)",
        "(document:pointerup.silent)": "onPointer()",
        "(document:pointermove.silent)": "onMove($event.x, $event.y)"
      }
    }]
  }], null, {
    onPointer: [],
    onMove: []
  });
})();
var TuiTiles = [TuiTilesComponent, TuiTile, TuiTileHandle];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-tree.mjs
function TuiTreeItemContent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function TuiTreeItemContent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("border-radius", 100, "%");
    ɵɵclassProp("t-button_expanded", ctx_r1.expanded());
    ɵɵproperty("iconStart", ctx_r1.icons.more);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.more(), "\n");
  }
}
var _c024 = ["*", [["tui-tree-item"]], [["tui-tree"]]];
var _c118 = ["*", "tui-tree-item", "tui-tree"];
var _c25 = (a0, a1) => ({
  $implicit: a0,
  template: a1
});
function TuiTreeItem_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TuiTreeItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const text_r1 = ctx.polymorpheusOutlet;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", text_r1, "\n");
  }
}
function TuiTreeItem_tui_expand_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-expand", 4)(1, "div");
    ɵɵprojection(2, 1);
    ɵɵprojection(3, 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("expanded", ctx_r1.expanded());
  }
}
function TuiTreeItem_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c33 = (a0, a1) => ({
  $implicit: a0,
  node: a1
});
function TuiTreeComponent_tui_tree_item_0_ng_container_2_ng_container_1_Template(rf, ctx) {
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
function TuiTreeComponent_tui_tree_item_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiTreeComponent_tui_tree_item_0_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const view_r2 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("polymorpheusOutlet", ctx_r2.content)("polymorpheusOutletContext", ɵɵpureFunction2(2, _c33, ctx_r2.value, view_r2));
  }
}
function TuiTreeComponent_tui_tree_item_0_tui_tree_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-tree", 6);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("content", ctx_r2.content)("trackBy", ctx_r2.trackBy)("value", child_r4);
  }
}
function TuiTreeComponent_tui_tree_item_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-tree-item", 2, 0);
    ɵɵtemplate(2, TuiTreeComponent_tui_tree_item_0_ng_container_2_Template, 2, 5, "ng-container", 3)(3, TuiTreeComponent_tui_tree_item_0_tui_tree_3_Template, 1, 3, "tui-tree", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const children_r5 = ctx.tuiLet;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("tuiTreeNode", ctx_r2.value);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.value !== children_r5);
    ɵɵadvance();
    ɵɵproperty("ngForOf", children_r5)("ngForTrackBy", ctx_r2.trackBy);
  }
}
var TuiTreeChildren = class _TuiTreeChildren {
  constructor() {
    this.childrenHandler = _TuiTreeChildren.defaultHandler;
  }
  static defaultHandler(item) {
    return Array.isArray(item) ? item : EMPTY_ARRAY;
  }
  static {
    this.ɵfac = function TuiTreeChildren_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeChildren)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTreeChildren,
      selectors: [["tui-tree", "childrenHandler", ""]],
      inputs: {
        childrenHandler: "childrenHandler"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeChildren, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tree[childrenHandler]"
    }]
  }], null, {
    childrenHandler: [{
      type: Input
    }]
  });
})();
var TuiTreeItemContent = class _TuiTreeItemContent {
  constructor() {
    this.controller = inject(forwardRef(() => TUI_TREE_CONTROLLER));
    this.change$ = new Subject();
    this.icons = inject(TUI_COMMON_ICONS);
    this.more = toSignal(inject(TUI_MORE_WORD));
    this.context = injectContext();
    this.expanded = toSignal(this.change$.pipe(startWith(null), map(() => this.isExpanded), distinctUntilChanged()), {
      initialValue: this.isExpanded
    });
  }
  ngDoCheck() {
    this.change$.next();
  }
  get isExpandable() {
    return this.context.$implicit.isExpandable && this.controller !== TUI_DEFAULT_TREE_CONTROLLER;
  }
  get isExpanded() {
    return this.context.$implicit.isExpanded;
  }
  onClick() {
    this.controller.toggle(this.context.$implicit);
  }
  static {
    this.ɵfac = function TuiTreeItemContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeItemContent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTreeItemContent,
      selectors: [["ng-component"]],
      hostVars: 2,
      hostBindings: function TuiTreeItemContent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_expandable", ctx.isExpandable);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 2,
      consts: [["appearance", "flat", "size", "xs", "tuiIconButton", "", "type", "button", "class", "t-button", 3, "t-button_expanded", "iconStart", "border-radius", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], ["appearance", "flat", "size", "xs", "tuiIconButton", "", "type", "button", 1, "t-button", 3, "click", "iconStart"]],
      template: function TuiTreeItemContent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTreeItemContent_button_0_Template, 2, 6, "button", 0);
          ɵɵelementContainer(1, 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isExpandable);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.context.template);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, TuiButton],
      styles: ["[_nghost-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   tui-tree-item._expandable[_nghost-%COMP%]:not(._expandable), tui-tree-item._expandable   [_nghost-%COMP%]:not(._expandable){padding-left:2rem}.t-button[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:.5rem}.t-button_expanded[_ngcontent-%COMP%]{transform:rotate(90deg)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeItemContent, [{
    type: Component,
    args: [{
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, TuiButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._expandable]": "isExpandable"
      },
      template: '<button\n    *ngIf="isExpandable"\n    appearance="flat"\n    size="xs"\n    tuiIconButton\n    type="button"\n    class="t-button"\n    [class.t-button_expanded]="expanded()"\n    [iconStart]="icons.more"\n    [style.border-radius.%]="100"\n    (click)="onClick()"\n>\n    {{ more() }}\n</button>\n<ng-container [ngTemplateOutlet]="context.template" />\n',
      styles: [":host{display:flex;align-items:center}:host :host-context(tui-tree-item._expandable):not(._expandable){padding-left:2rem}.t-button{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-right:.5rem}.t-button_expanded{transform:rotate(90deg)}\n"]
    }]
  }], null, null);
})();
var TUI_TREE_ITEM_CONTENT = new PolymorpheusComponent(TuiTreeItemContent);
var TUI_DEFAULT_TREE_CONTROLLER = {
  isExpanded: TUI_TRUE_HANDLER,
  toggle: EMPTY_FUNCTION
};
var TUI_TREE_ACCESSOR = tuiCreateToken();
var TUI_TREE_CONTROLLER = tuiCreateToken(TUI_DEFAULT_TREE_CONTROLLER);
var TUI_TREE_NODE = tuiCreateToken();
var TUI_TREE_LOADING = tuiCreateToken({});
var TUI_TREE_START = tuiCreateToken();
var TUI_TREE_LOADER = tuiCreateToken();
var TUI_TREE_CONTENT = tuiCreateToken(TUI_TREE_ITEM_CONTENT);
var TUI_TREE_LEVEL = tuiCreateToken(-1);
var TuiTreeItem = class _TuiTreeItem {
  constructor() {
    this.nested = EMPTY_QUERY;
    this.el = tuiInjectElement();
    this.controller = inject(forwardRef(() => TUI_TREE_CONTROLLER));
    this.change$ = new Subject();
    this.level = inject(forwardRef(() => TUI_TREE_LEVEL));
    this.content = inject(forwardRef(() => TUI_TREE_CONTENT));
    this.expanded = toSignal(this.change$.pipe(startWith(null), map(() => this.isExpanded)), {
      initialValue: this.isExpanded
    });
    this.attached = toSignal(this.change$.pipe(map(() => this.el.isConnected), distinctUntilChanged()), {
      initialValue: this.el.isConnected
    });
  }
  get isExpandable() {
    return !!this.nested.length;
  }
  get isExpanded() {
    return this.controller.isExpanded(this);
  }
  ngDoCheck() {
    this.checkChanges();
  }
  checkChanges() {
    this.change$.next();
  }
  static {
    this.ɵfac = function TuiTreeItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeItem)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTreeItem,
      selectors: [["tui-tree-item"]],
      contentQueries: function TuiTreeItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TUI_TREE_NODE, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nested = _t);
        }
      },
      hostAttrs: ["role", "treeitem"],
      hostVars: 2,
      hostBindings: function TuiTreeItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_expandable", ctx.isExpandable);
        }
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TREE_NODE, _TuiTreeItem), {
        provide: TUI_TREE_LEVEL,
        deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
        useFactory: (level) => ++level
      }]), ɵɵStandaloneFeature],
      ngContentSelectors: _c118,
      decls: 5,
      vars: 7,
      consts: [["template", ""], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["role", "group", "class", "t-children", 3, "expanded", 4, "ngIf"], [4, "ngIf"], ["role", "group", 1, "t-children", 3, "expanded"]],
      template: function TuiTreeItem_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c024);
          ɵɵtemplate(0, TuiTreeItem_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, TuiTreeItem_ng_container_2_Template, 2, 1, "ng-container", 1)(3, TuiTreeItem_tui_expand_3_Template, 4, 1, "tui-expand", 2)(4, TuiTreeItem_ng_container_4_Template, 1, 0, "ng-container", 3);
        }
        if (rf & 2) {
          const template_r3 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("polymorpheusOutlet", ctx.content)("polymorpheusOutletContext", ɵɵpureFunction2(4, _c25, ctx, template_r3));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isExpandable);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.attached());
        }
      },
      dependencies: [NgIf, PolymorpheusOutlet, TuiExpandComponent],
      styles: ["[_nghost-%COMP%]{display:block}.t-children[_ngcontent-%COMP%]{position:relative;margin-left:var(--tui-tree-item-indent, 1.5rem)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeItem, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tree-item",
      imports: [NgIf, PolymorpheusOutlet, TuiExpandComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_TREE_NODE, TuiTreeItem), {
        provide: TUI_TREE_LEVEL,
        deps: [[new SkipSelf(), TUI_TREE_LEVEL]],
        useFactory: (level) => ++level
      }],
      host: {
        role: "treeitem",
        "[class._expandable]": "isExpandable"
      },
      template: '<ng-template #template>\n    <ng-content />\n</ng-template>\n<ng-container *polymorpheusOutlet="content as text; context: {$implicit: this, template: template}">\n    {{ text }}\n</ng-container>\n<tui-expand\n    *ngIf="isExpandable"\n    role="group"\n    class="t-children"\n    [expanded]="expanded()"\n>\n    <div>\n        <ng-content select="tui-tree-item" />\n        <ng-content select="tui-tree" />\n    </div>\n</tui-expand>\n<ng-container *ngIf="attached()" />\n',
      styles: [":host{display:block}.t-children{position:relative;margin-left:var(--tui-tree-item-indent, 1.5rem)}\n"]
    }]
  }], null, {
    nested: [{
      type: ContentChildren,
      args: [TUI_TREE_NODE]
    }]
  });
})();
var TuiTreeNode = class _TuiTreeNode {
  constructor() {
    this.component = inject(TuiTreeItem);
    this.directive = inject(TUI_TREE_ACCESSOR, {
      optional: true
    });
  }
  set value(value) {
    this.directive?.register(this.component, value);
  }
  ngOnDestroy() {
    this.directive?.unregister(this.component);
  }
  static {
    this.ɵfac = function TuiTreeNode_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeNode)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTreeNode,
      selectors: [["tui-tree-item", "tuiTreeNode", ""]],
      inputs: {
        value: [0, "tuiTreeNode", "value"]
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeNode, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "tui-tree-item[tuiTreeNode]"
    }]
  }], null, {
    value: [{
      type: Input,
      args: ["tuiTreeNode"]
    }]
  });
})();
var TuiTreeComponent = class _TuiTreeComponent {
  constructor() {
    this.check$ = new Subject();
    this.children$ = this.check$.pipe(startWith(null), map(() => this.handler(this.value)), distinctUntilChanged());
    this.directive = inject(TuiTreeChildren, {
      optional: true
    });
    this.trackBy = (_, item) => item;
    this.content = ({
      $implicit
    }) => String($implicit);
  }
  ngDoCheck() {
    this.checkChanges();
  }
  checkChanges() {
    this.check$.next();
    this.item?.checkChanges();
    this.child?.checkChanges();
  }
  get handler() {
    return this.directive?.childrenHandler || TuiTreeChildren.defaultHandler;
  }
  static {
    this.ɵfac = function TuiTreeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiTreeComponent,
      selectors: [["tui-tree"]],
      viewQuery: function TuiTreeComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiTreeItem, 5);
          ɵɵviewQuery(_TuiTreeComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.item = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.child = _t.first);
        }
      },
      hostAttrs: ["role", "tree"],
      inputs: {
        value: "value",
        trackBy: "trackBy",
        content: "content"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TREE_NODE, _TuiTreeComponent)]), ɵɵStandaloneFeature],
      decls: 2,
      vars: 3,
      consts: [["view", ""], [3, "tuiTreeNode", 4, "tuiLet"], [3, "tuiTreeNode"], [4, "ngIf"], [3, "content", "trackBy", "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [3, "content", "trackBy", "value"]],
      template: function TuiTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiTreeComponent_tui_tree_item_0_Template, 4, 4, "tui-tree-item", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("tuiLet", ɵɵpipeBind1(1, 1, ctx.children$));
        }
      },
      dependencies: [_TuiTreeComponent, AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiLet, TuiTreeItem, TuiTreeNode],
      styles: ["[_nghost-%COMP%]{position:relative;display:block}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-tree",
      imports: [AsyncPipe, NgForOf, NgIf, PolymorpheusOutlet, TuiLet, TuiTreeItem, TuiTreeNode],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiProvide(TUI_TREE_NODE, TuiTreeComponent)],
      host: {
        role: "tree"
      },
      template: '<tui-tree-item\n    *tuiLet="children$ | async as children"\n    #view\n    [tuiTreeNode]="value"\n>\n    <ng-container *ngIf="value !== children">\n        <ng-container *polymorpheusOutlet="content as text; context: {$implicit: value, node: view}">\n            {{ text }}\n        </ng-container>\n    </ng-container>\n    <tui-tree\n        *ngFor="let child of children; trackBy: trackBy"\n        [content]="content"\n        [trackBy]="trackBy"\n        [value]="child"\n    />\n</tui-tree-item>\n',
      styles: [":host{position:relative;display:block}\n"]
    }]
  }], null, {
    item: [{
      type: ViewChild,
      args: [forwardRef(() => TuiTreeItem)]
    }],
    child: [{
      type: ViewChild,
      args: [forwardRef(() => TuiTreeComponent)]
    }],
    value: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    trackBy: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();
var TuiTreeControllerDirective = class _TuiTreeControllerDirective {
  constructor() {
    this.items = /* @__PURE__ */ new Map();
    this.fallback = true;
    this.map = /* @__PURE__ */ new Map();
    this.toggled = new EventEmitter();
  }
  register(item, value) {
    this.items.set(item, value);
  }
  unregister(item) {
    this.items.delete(item);
  }
  isExpanded(item) {
    const value = this.items.get(item);
    return (value && this.map.get(value)) ?? this.fallback;
  }
  toggle(item) {
    const value = this.items.get(item);
    const expanded = this.isExpanded(item);
    if (!tuiIsPresent(value)) {
      return;
    }
    this.toggled.emit(value);
    this.map.set(value, !expanded);
  }
  static {
    this.ɵfac = function TuiTreeControllerDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeControllerDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTreeControllerDirective,
      selectors: [["", "tuiTreeController", "", "map", ""]],
      inputs: {
        fallback: [0, "tuiTreeController", "fallback"],
        map: "map"
      },
      outputs: {
        toggled: "toggled"
      },
      exportAs: ["tuiTreeController"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TREE_ACCESSOR, _TuiTreeControllerDirective), tuiProvide(TUI_TREE_CONTROLLER, _TuiTreeControllerDirective)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeControllerDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTreeController][map]",
      providers: [tuiProvide(TUI_TREE_ACCESSOR, TuiTreeControllerDirective), tuiProvide(TUI_TREE_CONTROLLER, TuiTreeControllerDirective)],
      exportAs: "tuiTreeController"
    }]
  }], null, {
    fallback: [{
      type: Input,
      args: ["tuiTreeController"]
    }],
    map: [{
      type: Input
    }],
    toggled: [{
      type: Output
    }]
  });
})();
var TuiTreeItemController = class _TuiTreeItemController {
  constructor() {
    this.map = /* @__PURE__ */ new WeakMap();
    this.fallback = true;
  }
  isExpanded(item) {
    return this.map.get(item) ?? this.fallback;
  }
  toggle(item) {
    this.map.set(item, !this.isExpanded(item));
  }
  static {
    this.ɵfac = function TuiTreeItemController_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeItemController)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiTreeItemController,
      selectors: [["", "tuiTreeController", "", 3, "map", ""]],
      inputs: {
        fallback: [0, "tuiTreeController", "fallback"]
      },
      exportAs: ["tuiTreeController"],
      standalone: true,
      features: [ɵɵProvidersFeature([tuiProvide(TUI_TREE_CONTROLLER, _TuiTreeItemController)])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeItemController, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiTreeController]:not([map])",
      providers: [tuiProvide(TUI_TREE_CONTROLLER, TuiTreeItemController)],
      exportAs: "tuiTreeController"
    }]
  }], null, {
    fallback: [{
      type: Input,
      args: ["tuiTreeController"]
    }]
  });
})();
var TuiTreeService = class _TuiTreeService {
  constructor() {
    this.loading = inject(TUI_TREE_LOADING);
    this.start = inject(TUI_TREE_START);
    this.loader = inject(TUI_TREE_LOADER);
    this.map = /* @__PURE__ */ new Map([[this.loading, []]]);
    this.load$ = new Subject();
    this.data$ = this.load$.pipe(switchMap((item) => this.loader.loadChildren(item).pipe(tap((children) => this.map.set(item, children)), map((children) => children.filter((item2) => !this.loader.hasChildren(item2))), tap((children) => children.forEach((child) => this.map.set(child, []))))), startWith(null), map(() => this.start));
  }
  getChildren(item) {
    return this.map.get(item) || [this.loading];
  }
  loadChildren(item) {
    if (this.map.get(item)) {
      return;
    }
    this.map.set(item, [this.loading]);
    this.load$.next(item);
  }
  static {
    this.ɵfac = function TuiTreeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiTreeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _TuiTreeService,
      factory: _TuiTreeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiTreeService, [{
    type: Injectable
  }], null, null);
})();
var TuiTree = [TuiTreeComponent, TuiTreeItem, TuiTreeItemContent, TuiTreeChildren, TuiTreeItemController, TuiTreeControllerDirective, TuiTreeNode];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-emails.mjs
var TUI_EMAIL_PIPE_OPTIONS = tuiCreateToken(["gmail.com", "outlook.com", "icloud.com", "me.com", "yahoo.com", "mail.com", "proton.me"]);
var TuiEmailsPipe = class _TuiEmailsPipe {
  constructor() {
    this.options = inject(TUI_EMAIL_PIPE_OPTIONS);
  }
  transform(query, suggestions = this.options) {
    return query.includes("@") ? suggestions.map((item) => query.slice(0, Math.max(0, query.indexOf("@") + 1)) + item).filter((item) => item.startsWith(query)) : [];
  }
  static {
    this.ɵfac = function TuiEmailsPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiEmailsPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiEmails",
      type: _TuiEmailsPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiEmailsPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiEmails"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-field-error.mjs
var EMPTY_RECORD = {};
function unwrapObservable(content, context) {
  return content.pipe(map((error) => new TuiValidationError(error || "", context)));
}
function defaultError(content, context) {
  return of(new TuiValidationError(content || "", context));
}
var TuiFieldErrorPipe = class _TuiFieldErrorPipe {
  constructor() {
    this.order = [];
    this.parent = inject(NgControl, {
      skipSelf: true,
      optional: true
    });
    this.self = inject(NgControl, {
      self: true,
      optional: true
    });
    this.container = inject(ControlContainer, {
      optional: true
    });
    this.validationErrors = inject(TUI_VALIDATION_ERRORS);
    if (this.self && !this.self.valueAccessor) {
      this.self.valueAccessor = this;
    }
  }
  transform(order) {
    this.order = order;
    return this.computedError;
  }
  registerOnChange() {
  }
  registerOnTouched() {
  }
  setDisabledState() {
  }
  writeValue() {
  }
  get computedError() {
    return this.invalid && this.touched && this.error || of(null);
  }
  get error() {
    const {
      errorId
    } = this;
    if (!errorId) {
      return null;
    }
    const firstError = this.controlErrors[errorId];
    const errorContent = this.validationErrors[errorId];
    return this.getError(firstError, errorContent);
  }
  get invalid() {
    return !!this.control?.invalid;
  }
  get touched() {
    return !!this.control?.touched;
  }
  get control() {
    return this.self?.control || this.parent?.control || this.container?.control;
  }
  get errorId() {
    return this.getErrorId(this.order, this.controlErrors);
  }
  get controlErrors() {
    return this.control?.errors || EMPTY_RECORD;
  }
  getError(context, content) {
    if (context instanceof TuiValidationError) {
      return of(context);
    }
    if (content === void 0 && tuiIsString(context)) {
      return of(new TuiValidationError(context));
    }
    if (content instanceof Observable) {
      return unwrapObservable(content, context);
    }
    if (content instanceof Function) {
      const message = content(context);
      return message instanceof Observable ? unwrapObservable(message, context) : defaultError(message, context);
    }
    return defaultError(content, context);
  }
  getErrorId(order, controlErrors) {
    const id = order?.find((errorId) => controlErrors[errorId]);
    const fallback = Object.keys(controlErrors)[0];
    return id || fallback || "";
  }
  static {
    this.ɵfac = function TuiFieldErrorPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFieldErrorPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFieldError",
      type: _TuiFieldErrorPipe,
      pure: false,
      standalone: true
    });
  }
};
__decorate([tuiPure], TuiFieldErrorPipe.prototype, "getError", null);
__decorate([tuiPure], TuiFieldErrorPipe.prototype, "getErrorId", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFieldErrorPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFieldError",
      pure: false
    }]
  }], function() {
    return [];
  }, {
    getError: [],
    getErrorId: []
  });
})();
var TuiFieldErrorContentPipe = class _TuiFieldErrorContentPipe {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.localInjector = Injector.create({
      providers: [{
        provide: AsyncPipe
      }, {
        provide: TuiFieldErrorPipe
      }],
      parent: this.injector
    });
    this.asyncPipe = this.localInjector.get(AsyncPipe);
    this.fieldErrorPipe = this.localInjector.get(TuiFieldErrorPipe);
  }
  transform(order) {
    return this.getErrorContent(order);
  }
  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }
  getErrorContent(order) {
    const error = this.asyncPipe.transform(this.fieldErrorPipe.transform(order));
    if (!error) {
      return "";
    }
    return typeof error.message === "function" ? error.message(error.context) : error.message;
  }
  static {
    this.ɵfac = function TuiFieldErrorContentPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFieldErrorContentPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFieldErrorContent",
      type: _TuiFieldErrorContentPipe,
      pure: false,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFieldErrorContentPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFieldErrorContent",
      pure: false
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-filter-by-input.mjs
var TuiFilterByInputPipe = class _TuiFilterByInputPipe {
  constructor() {
    this.textfield = inject(TuiTextfieldComponent, {
      optional: true
    });
    this.host = inject(TUI_DATA_LIST_HOST);
  }
  transform(items, matcher = TUI_DEFAULT_MATCHER) {
    return this.filter(items, matcher, this.host.stringify || String, this.textfield?.input?.nativeElement.value || this.host.nativeFocusableElement?.value || "");
  }
  filter(items, matcher, stringify, query) {
    if (!items) {
      return null;
    }
    return tuiIsFlat(items) ? this.filterFlat(items, matcher, stringify, query) : this.filter2d(items, matcher, stringify, query);
  }
  filterFlat(items, matcher, stringify, query) {
    const match = this.getMatch(items, stringify, query);
    return match != null ? items : items.filter((item) => matcher(item, query, stringify));
  }
  filter2d(items, matcher, stringify, query) {
    const match = items.find((item) => this.getMatch(item, stringify, query) != null);
    return match != null ? items : items.map((inner) => this.filterFlat(inner, matcher, stringify, query));
  }
  getMatch(items, stringify, query) {
    if (this.host.tagValidator) {
      return void 0;
    }
    return items.find((item) => stringify(item).toLocaleLowerCase() === query.toLocaleLowerCase());
  }
  static {
    this.ɵfac = function TuiFilterByInputPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiFilterByInputPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiFilterByInput",
      type: _TuiFilterByInputPipe,
      pure: false,
      standalone: true
    });
  }
};
__decorate([tuiPure], TuiFilterByInputPipe.prototype, "filter", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiFilterByInputPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiFilterByInput",
      pure: false
    }]
  }], null, {
    filter: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-sort-countries.mjs
var TuiSortCountriesPipe = class _TuiSortCountriesPipe {
  constructor() {
    this.countriesNames$ = inject(TUI_COUNTRIES);
  }
  transform(countries) {
    return this.countriesNames$.pipe(map((names) => [...countries].sort((a, b) => names[a].localeCompare(names[b]))));
  }
  static {
    this.ɵfac = function TuiSortCountriesPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSortCountriesPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiSortCountries",
      type: _TuiSortCountriesPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSortCountriesPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiSortCountries"
    }]
  }], null, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-stringify.mjs
var TuiStringifyPipe = class _TuiStringifyPipe {
  transform(key) {
    return (value) => String(value[key] ?? "");
  }
  static {
    this.ɵfac = function TuiStringifyPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStringifyPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiStringify",
      type: _TuiStringifyPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStringifyPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiStringify"
    }]
  }], null, null);
})();
export {
  TUI_AVATAR_DEFAULT_OPTIONS,
  TUI_AVATAR_OPTIONS,
  TUI_BADGE_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_DEFAULT_OPTIONS,
  TUI_BADGE_NOTIFICATION_OPTIONS,
  TUI_BADGE_OPTIONS,
  TUI_BLOCK_DEFAULT_OPTIONS,
  TUI_BLOCK_OPTIONS,
  TUI_BREADCRUMBS_DEFAULT_OPTIONS,
  TUI_BREADCRUMBS_OPTIONS,
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_CANCEL_WORD,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  TUI_CHEVRON,
  TUI_CHIP_DEFAULT_OPTIONS,
  TUI_CHIP_OPTIONS,
  TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
  TUI_CONFIRM,
  TUI_CONFIRM_WORDS,
  TUI_COPY_OPTIONS,
  TUI_COPY_TEXTS,
  TUI_COUNTRIES,
  TUI_DATE_RANGE_VALUE_TRANSFORMER,
  TUI_DATE_TEXTS,
  TUI_DATE_TIME_VALUE_TRANSFORMER,
  TUI_DATE_VALUE_TRANSFORMER,
  TUI_DAY_CAPS_MAPPER,
  TUI_DEFAULT_ITEMS_HANDLERS,
  TUI_DEFAULT_TREE_CONTROLLER,
  TUI_DIGITAL_INFORMATION_UNITS,
  TUI_DONE_WORD,
  TUI_EMAIL_PIPE_OPTIONS,
  TUI_FILE_DEFAULT_OPTIONS,
  TUI_FILE_OPTIONS,
  TUI_FILE_TEXTS,
  TUI_FLOATING_PRECISION,
  TUI_FLUID_TYPOGRAPHY_DEFAULT_OPTIONS,
  TUI_FLUID_TYPOGRAPHY_OPTIONS,
  TUI_FORMAT_ERROR,
  TUI_FROM_TO_TEXTS,
  TUI_HIDE_TEXT,
  TUI_HIGHLIGHT_OPTIONS,
  TUI_INPUT_DATE_DEFAULT_OPTIONS,
  TUI_INPUT_DATE_OPTIONS,
  TUI_INPUT_FILES_DEFAULT_OPTIONS,
  TUI_INPUT_FILES_OPTIONS,
  TUI_INPUT_FILE_TEXTS,
  TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
  TUI_INPUT_PASSWORD_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_DEFAULT_OPTIONS,
  TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
  TUI_INTERNATIONAL_SEARCH,
  TUI_ITEMS_HANDLERS,
  TUI_LIKE_OPTIONS,
  TUI_LINE_CLAMP_DEFAULT_OPTIONS,
  TUI_LINE_CLAMP_OPTIONS,
  TUI_MOBILE_CALENDAR,
  TUI_MOBILE_CALENDAR_PROVIDER,
  TUI_MORE_WORD,
  TUI_MULTI_SELECT_TEXTS,
  TUI_OTHER_DATE_TEXT,
  TUI_PAGINATION_TEXTS,
  TUI_PASSWORD_OPTIONS,
  TUI_PASSWORD_TEXTS,
  TUI_PDF_VIEWER_DEFAULT_OPTIONS,
  TUI_PDF_VIEWER_OPTIONS,
  TUI_PLUS_MINUS_TEXTS,
  TUI_PREVIEW_ICONS,
  TUI_PREVIEW_ICONS_DEFAULT,
  TUI_PREVIEW_TEXTS,
  TUI_PREVIEW_ZOOM_TEXTS,
  TUI_PROGRESS_DEFAULT_OPTIONS,
  TUI_PROGRESS_OPTIONS,
  TUI_PUSH_DEFAULT_OPTIONS,
  TUI_PUSH_OPTIONS,
  TUI_RADIO_DEFAULT_OPTIONS,
  TUI_RADIO_OPTIONS,
  TUI_RATING_DEFAULT_OPTIONS,
  TUI_RATING_OPTIONS,
  TUI_SHOW_ALL_TEXT,
  TUI_SIZE_ERROR,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  TUI_SWITCH_DEFAULT_OPTIONS,
  TUI_SWITCH_OPTIONS,
  TUI_TABS_DEFAULT_OPTIONS,
  TUI_TABS_OPTIONS,
  TUI_TABS_PROVIDERS,
  TUI_TABS_REFRESH,
  TUI_TAB_ACTIVATE,
  TUI_TIME_TEXTS,
  TUI_TIME_VALUE_TRANSFORMER,
  TUI_TOOLTIP_OPTIONS,
  TUI_TREE_ACCESSOR,
  TUI_TREE_CONTENT,
  TUI_TREE_CONTROLLER,
  TUI_TREE_ITEM_CONTENT,
  TUI_TREE_LEVEL,
  TUI_TREE_LOADER,
  TUI_TREE_LOADING,
  TUI_TREE_NODE,
  TUI_TREE_START,
  TUI_VALIDATION_ERRORS,
  TuiAccordion,
  TuiAccordionDirective,
  TuiAccordionItem,
  TuiAccordionItemContent,
  TuiAccordionItemEagerContent,
  TuiActionBar,
  TuiActionBarComponent,
  TuiActionBarDirective,
  TuiAvatar,
  TuiAvatarLabeled,
  TuiAvatarOutline,
  TuiAvatarStack,
  TuiBadge,
  TuiBadgeNotification,
  TuiBadgedContent,
  TuiBadgedContentComponent,
  TuiBadgedContentDirective,
  TuiBlock,
  TuiBreadcrumbs,
  TuiButtonClose,
  TuiButtonGroup,
  TuiButtonLoading,
  TuiButtonSelect,
  TuiCalendarMonth,
  TuiCalendarRange,
  TuiCarousel,
  TuiCarouselAutoscroll,
  TuiCarouselButtons,
  TuiCarouselComponent,
  TuiCarouselDirective,
  TuiCarouselScroll,
  TuiCheckbox,
  TuiChevron,
  TuiChip,
  TuiComment,
  TuiCompass,
  TuiConfirm,
  TuiConfirmService,
  TuiConnected,
  TuiCopy,
  TuiDataListDropdownManager,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  TuiDataListWrapperComponent,
  TuiDayRangePeriod,
  TuiDrawer,
  TuiElasticContainer,
  TuiElasticContainerDirective,
  TuiEmailsPipe,
  TuiFade,
  TuiFieldErrorContentPipe,
  TuiFieldErrorPipe,
  TuiFile,
  TuiFileRejectedPipe,
  TuiFiles,
  TuiFilesComponent,
  TuiFilter,
  TuiFilterByInputPipe,
  TuiFluidTypography,
  TuiHighlight,
  TuiIconBadge,
  TuiImgLazyLoading,
  TuiInputFiles,
  TuiInputFilesContent,
  TuiInputFilesDirective,
  TuiInputFilesValidator,
  TuiInputInline,
  TuiInputPassword,
  TuiInputPhoneInternational,
  TuiItemsWithMore,
  TuiItemsWithMoreComponent,
  TuiItemsWithMoreDirective,
  TuiItemsWithMoreService,
  TuiLazyLoadingService,
  TuiLike,
  TuiLineClamp,
  TuiLineClampBox,
  TuiMore,
  TuiPagination,
  TuiPassword,
  TuiPdfViewerComponent,
  TuiPdfViewerDirective,
  TuiPdfViewerService,
  TuiPin,
  TuiPresent,
  TuiPreview,
  TuiPreviewAction,
  TuiPreviewComponent,
  TuiPreviewDialog,
  TuiPreviewDialogDirective,
  TuiPreviewDialogService,
  TuiPreviewPagination,
  TuiPreviewTitle,
  TuiPreviewZoom,
  TuiProgress,
  TuiProgressBar,
  TuiProgressCircle,
  TuiProgressColorSegments,
  TuiProgressLabel,
  TuiProgressSegmented,
  TuiPulse,
  TuiPush,
  TuiPushAlert,
  TuiPushComponent,
  TuiPushDirective,
  TuiPushService,
  TuiRadio,
  TuiRadioComponent,
  TuiRadioDirective,
  TuiRadioList,
  TuiRange,
  TuiRangeChange,
  TuiRating,
  TuiSegmented,
  TuiSegmentedDirective,
  TuiSensitive,
  TuiSkeleton,
  TuiSlider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSortCountriesPipe,
  TuiStatus,
  TuiStep,
  TuiStepper,
  TuiStepperComponent,
  TuiStringifyContentPipe,
  TuiStringifyPipe,
  TuiSwitch,
  TuiTab,
  TuiTabs,
  TuiTabsDirective,
  TuiTabsHorizontal,
  TuiTabsVertical,
  TuiTabsWithMore,
  TuiTile,
  TuiTileHandle,
  TuiTileService,
  TuiTiles,
  TuiTilesComponent,
  TuiTooltip,
  TuiTree,
  TuiTreeChildren,
  TuiTreeComponent,
  TuiTreeControllerDirective,
  TuiTreeItem,
  TuiTreeItemContent,
  TuiTreeItemController,
  TuiTreeNode,
  TuiTreeService,
  TuiUnfinishedValidator,
  TuiUnmaskHandler,
  calculateDisabledItemHandler,
  tuiAvatarOptionsProvider,
  tuiBadgeNotificationOptionsProvider,
  tuiBadgeOptionsProvider,
  tuiBlockOptionsProvider,
  tuiBreadcrumbsOptionsProvider,
  tuiCheckboxOptionsProvider,
  tuiChipOptionsProvider,
  tuiCopyOptionsProvider,
  tuiCreateDefaultDayRangePeriods,
  tuiCreateFileFormatValidator,
  tuiCreateFileSizeValidator,
  tuiCreateTimePeriods,
  tuiCreateUnfinishedValidator,
  tuiDateStreamWithTransformer,
  tuiFileOptionsProvider,
  tuiFilesAccepted,
  tuiFilesRejected,
  tuiFluidTypographyOptionsProvider,
  tuiFormatSize,
  tuiGenerateDialogableRoute,
  tuiGetCallingCode,
  tuiHighlightOptionsProvider,
  tuiInputDateOptionsProvider,
  tuiInputFilesOptionsProvider,
  tuiInputPasswordOptionsProvider,
  tuiInputPhoneInternationalOptionsProvider,
  tuiIsFlat,
  tuiItemsHandlersProvider,
  tuiKeyStepValueToPercentage,
  tuiLikeOptionsProvider,
  tuiLineClampOptionsProvider,
  tuiMaskito,
  tuiPasswordOptionsProvider,
  tuiPdfViewerOptionsProvider,
  tuiPercentageToKeyStepValue,
  tuiPreviewIconsProvider,
  tuiProgressOptionsProvider,
  tuiPushOptionsProvider,
  tuiRadioOptionsProvider,
  tuiRatingOptionsProvider,
  tuiSliderOptionsProvider,
  tuiSwitchOptionsProvider,
  tuiTabsOptionsProvider,
  tuiToggleDay,
  tuiTooltipOptionsProvider,
  tuiValidationErrorsProvider
};
//# sourceMappingURL=@taiga-ui_kit.js.map
