import {
  MASKITO_DEFAULT_ELEMENT_PREDICATE,
  MASKITO_DEFAULT_OPTIONS,
  Maskito,
  TUI_CALENDAR_DATE_STREAM,
  TUI_CALENDAR_MONTHS,
  TUI_ITEMS_HANDLERS,
  TUI_OTHER_DATE_TEXT,
  maskitoTransform,
  maskitoUpdateElement
} from "./chunk-2H24O7E5.js";
import {
  TuiCalendar,
  TuiCalendarYear,
  TuiLet,
  TuiLink,
  TuiMapperPipe,
  TuiRepeatTimes,
  TuiSpinButton,
  coerceBooleanProperty
} from "./chunk-P47AVGYP.js";
import {
  CHAR_PLUS,
  EMPTY_QUERY,
  HOURS_IN_DAY,
  PolymorpheusOutlet,
  TUI_COMMON_ICONS,
  TUI_FALSE_HANDLER,
  TUI_FIRST_DAY,
  TUI_LAST_DAY,
  TUI_TRUE_HANDLER,
  TuiAppearance,
  TuiControl,
  TuiDataList,
  TuiDataListComponent,
  TuiDataListDirective,
  TuiDay,
  TuiDayRange,
  TuiHovered,
  TuiIcon,
  TuiLoader,
  TuiMonth,
  TuiMonthRange,
  TuiNativeValidator,
  TuiOptGroup,
  TuiOption,
  TuiScrollbar,
  TuiTime,
  TuiYear,
  tuiAsDataListAccessor,
  tuiClamp,
  tuiControlValue,
  tuiCreateToken,
  tuiDirectiveBinding,
  tuiFallbackValueProvider,
  tuiInjectDataListSize,
  tuiInjectElement,
  tuiInjectIconResolver,
  tuiIsNativeFocused,
  tuiIsPresent,
  tuiIsString,
  tuiNullableSame,
  tuiProvideOptions,
  tuiPure,
  tuiQuantize,
  tuiRound,
  tuiTypedFromEvent,
  tuiWatch
} from "./chunk-TJD5ECJX.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControl,
  NgControlStatus,
  NgModel,
  RangeValueAccessor
} from "./chunk-RMQQVHNY.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-HD67AN6P.js";
import {
  AsyncPipe,
  DOCUMENT,
  NgForOf,
  NgIf
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  INJECTOR$1,
  Input,
  NgZone,
  Output,
  Pipe,
  ViewChildren,
  ViewEncapsulation$1,
  computed,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpipeBind3,
  ɵɵpipeBindV,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  __async,
  __decorate,
  combineLatest,
  filter,
  map,
  merge,
  repeat,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-month.mjs
function TuiCalendarMonth_tui_scrollbar_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-scrollbar", 2)(1, "tui-calendar-year", 3);
    ɵɵlistener("yearClick", function TuiCalendarMonth_tui_scrollbar_0_Template_tui_calendar_year_yearClick_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPickerYearClick($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("initialItem", ctx_r1.year.year)("max", ctx_r1.computedMax.year)("min", ctx_r1.computedMin.year)("value", ctx_r1.value);
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemClick(item_r5));
    })("tuiHoveredChange", function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template_div_tuiHoveredChange_0_listener($event) {
      const item_r5 = ɵɵrestoreView(_r4).tuiLet;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onItemHovered($event, item_r5));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r5 = ctx.tuiLet;
    const column_r6 = ɵɵnextContext().$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("t-cell_disabled", ctx_r1.disabledItemHandlerWithMinMax(item_r5))("t-cell_today", ctx_r1.isItemToday(item_r5));
    ɵɵattribute("data-range", ctx_r1.getItemRange(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", (tmp_11_0 = ctx_r1.months()) == null ? null : tmp_11_0[row_r7 * 4 + column_r6], " ");
  }
}
function TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_div_1_Template, 2, 6, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    const row_r7 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("tuiLet", ctx_r1.getTuiMonth(row_r7 * 4 + column_r6, ctx_r1.year.year));
  }
}
function TuiCalendarMonth_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, TuiCalendarMonth_ng_template_1_div_3_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 4);
  }
}
function TuiCalendarMonth_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-spin-button", 4);
    ɵɵlistener("leftClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_leftClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onPreviousYear());
    })("rightClick", function TuiCalendarMonth_ng_template_1_Template_tui_spin_button_rightClick_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onNextYear());
    });
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function TuiCalendarMonth_ng_template_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onYearClick());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
    ɵɵtemplate(3, TuiCalendarMonth_ng_template_1_div_3_Template, 2, 1, "div", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("focusable", false)("leftDisabled", ctx_r1.previousYearDisabled)("rightDisabled", ctx_r1.nextYearDisabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.year.formattedYear, " ");
    ɵɵadvance();
    ɵɵproperty("tuiRepeatTimesOf", 3);
  }
}
var TODAY = TuiDay.currentLocal();
var TuiCalendarMonth = class _TuiCalendarMonth {
  constructor() {
    this.isYearPickerShown = false;
    this.months = toSignal(inject(TUI_CALENDAR_MONTHS));
    this.value = null;
    this.year = TODAY;
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.minLength = null;
    this.maxLength = null;
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.monthClick = new EventEmitter();
    this.hoveredItemChange = new EventEmitter();
    this.yearChange = new EventEmitter();
    this.hoveredItem = null;
  }
  get isSingle() {
    return this.value instanceof TuiMonthRange && this.value.isSingleMonth;
  }
  onNextYear() {
    this.updateActiveYear(this.year.append({
      year: 1
    }));
  }
  onPreviousYear() {
    this.updateActiveYear(this.year.append({
      year: -1
    }));
  }
  getItemRange(item) {
    const {
      value,
      hoveredItem
    } = this;
    if (!(value instanceof TuiMonthRange)) {
      return value?.monthSame(item) ? "active" : null;
    }
    const months = item.month + item.year * 12;
    const hovered = hoveredItem ? hoveredItem.month + hoveredItem.year * 12 : null;
    const from = value.from.month + value.from.year * 12;
    const to = value.to.month + value.to.year * 12;
    const picking = this.isSingle ? hovered : null;
    const min = Math.min(from, to, picking ?? from);
    const max = Math.max(from, to, picking ?? from);
    if (min === max && min === months) {
      return "active";
    }
    if (min === months) {
      return "start";
    }
    if (max === months) {
      return "end";
    }
    return min < months && months < max ? "middle" : null;
  }
  get computedMin() {
    return this.min ?? TUI_FIRST_DAY;
  }
  get computedMax() {
    return this.max ?? TUI_LAST_DAY;
  }
  get previousYearDisabled() {
    return this.year.yearSameOrBefore(this.computedMin);
  }
  get nextYearDisabled() {
    return this.year.yearSameOrAfter(this.computedMax);
  }
  get disabledItemHandlerWithMinMax() {
    return this.calculateDisabledItemHandlerWithMinMax(this.disabledItemHandler, this.value, this.computedMin, this.computedMax, this.minLength, this.maxLength);
  }
  getTuiMonth(monthNumber, yearNumber) {
    return new TuiMonth(yearNumber, monthNumber);
  }
  isItemToday(item) {
    return TODAY.monthSame(item);
  }
  onPickerYearClick(year) {
    this.isYearPickerShown = false;
    if (this.year.year !== year) {
      this.updateActiveYear(new TuiYear(year));
    }
  }
  onItemClick(month) {
    if (!this.disabledItemHandlerWithMinMax(month)) {
      this.monthClick.emit(month);
    }
  }
  onYearClick() {
    this.isYearPickerShown = true;
  }
  onItemHovered(hovered, item) {
    this.updateHoveredItem(hovered ? item : null);
  }
  calculateDisabledItemHandlerWithMinMax(disabledItemHandler, value, min, max, minLength, maxLength) {
    return (item) => {
      const delta = value instanceof TuiMonthRange && value.isSingleMonth ? Math.abs(item.year * 12 + item.month - value.from.year * 12 - value.from.month) : 0;
      const tooLong = delta && maxLength && delta > maxLength;
      const tooShort = delta && minLength && delta < minLength;
      return tooLong || tooShort || item.monthBefore(min) || item.monthAfter(max) || disabledItemHandler(item);
    };
  }
  updateHoveredItem(month) {
    if (tuiNullableSame(this.hoveredItem, month, (a, b) => a.monthSame(b))) {
      return;
    }
    this.hoveredItem = month;
    this.hoveredItemChange.emit(month);
  }
  updateActiveYear(year) {
    this.year = year;
    this.yearChange.emit(year);
  }
  static {
    this.ɵfac = function TuiCalendarMonth_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarMonth)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarMonth,
      selectors: [["tui-calendar-month"]],
      hostVars: 2,
      hostBindings: function TuiCalendarMonth_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("_picking", ctx.isSingle);
        }
      },
      inputs: {
        value: "value",
        year: "year",
        disabledItemHandler: "disabledItemHandler",
        minLength: "minLength",
        maxLength: "maxLength",
        min: "min",
        max: "max"
      },
      outputs: {
        monthClick: "monthClick",
        hoveredItemChange: "hoveredItemChange",
        yearChange: "yearChange"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["monthSelect", ""], ["class", "t-scrollbar", 4, "ngIf", "ngIfElse"], [1, "t-scrollbar"], [3, "yearClick", "initialItem", "max", "min", "value"], [1, "t-spin", 3, "leftClick", "rightClick", "focusable", "leftDisabled", "rightDisabled"], ["automation-id", "tui-calendar-month__active-year", "tabIndex", "-1", "tuiLink", "", "type", "button", 3, "click"], ["class", "t-row", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-row"], [4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["class", "t-cell", 3, "t-cell_disabled", "t-cell_today", "click", "tuiHoveredChange", 4, "tuiLet"], [1, "t-cell", 3, "click", "tuiHoveredChange"]],
      template: function TuiCalendarMonth_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiCalendarMonth_tui_scrollbar_0_Template, 2, 4, "tui-scrollbar", 1)(1, TuiCalendarMonth_ng_template_1_Template, 4, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const monthSelect_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isYearPickerShown)("ngIfElse", monthSelect_r8);
        }
      },
      dependencies: [NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      styles: [`.t-row[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row[_ngcontent-%COMP%]:first-child{justify-content:flex-end}.t-row[_ngcontent-%COMP%]:last-child{justify-content:flex-start}.t-cell[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell[_ngcontent-%COMP%]:first-child{border-inline-start-color:transparent!important}.t-cell[_ngcontent-%COMP%]:last-child{border-inline-end-color:transparent!important}.t-cell[_ngcontent-%COMP%]:before, .t-cell[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell[_ngcontent-%COMP%]:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range][_ngcontent-%COMP%]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=middle][_ngcontent-%COMP%]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle][_ngcontent-%COMP%]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=start][_ngcontent-%COMP%]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:not(:last-child):before{right:-1rem}.t-cell[data-range=start][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}._picking[_nghost-%COMP%]   .t-cell[data-range=end][_ngcontent-%COMP%]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end][_ngcontent-%COMP%]:not(:first-child):before{left:-1rem}.t-cell[data-range=end][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active][_ngcontent-%COMP%]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active][_ngcontent-%COMP%]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today[_ngcontent-%COMP%]{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell[_ngcontent-%COMP%]:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=end][_ngcontent-%COMP%]:hover:after, .t-cell[data-range=active][_ngcontent-%COMP%]:hover:after{background:var(--tui-background-accent-1-hover)}}[_nghost-%COMP%]{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin[_ngcontent-%COMP%]{margin-block-end:1rem}.t-cell[_ngcontent-%COMP%]{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar[_ngcontent-%COMP%]{block-size:inherit;inline-size:inherit}`],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarMonth.prototype, "calculateDisabledItemHandlerWithMinMax", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarMonth, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-month",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendarYear, TuiHovered, TuiLet, TuiLink, TuiRepeatTimes, TuiScrollbar, TuiSpinButton],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class._picking]": "isSingle"
      },
      template: '<tui-scrollbar\n    *ngIf="isYearPickerShown; else monthSelect"\n    class="t-scrollbar"\n>\n    <tui-calendar-year\n        [initialItem]="year.year"\n        [max]="computedMax.year"\n        [min]="computedMin.year"\n        [value]="value"\n        (yearClick)="onPickerYearClick($event)"\n    />\n</tui-scrollbar>\n<ng-template #monthSelect>\n    <tui-spin-button\n        class="t-spin"\n        [focusable]="false"\n        [leftDisabled]="previousYearDisabled"\n        [rightDisabled]="nextYearDisabled"\n        (leftClick)="onPreviousYear()"\n        (rightClick)="onNextYear()"\n    >\n        <button\n            automation-id="tui-calendar-month__active-year"\n            tabIndex="-1"\n            tuiLink\n            type="button"\n            (click)="onYearClick()"\n        >\n            {{ year.formattedYear }}\n        </button>\n    </tui-spin-button>\n    <div\n        *tuiRepeatTimes="let row of 3"\n        class="t-row"\n    >\n        <ng-container *tuiRepeatTimes="let column of 4">\n            <div\n                *tuiLet="getTuiMonth(row * 4 + column, year.year) as item"\n                class="t-cell"\n                [attr.data-range]="getItemRange(item)"\n                [class.t-cell_disabled]="disabledItemHandlerWithMinMax(item)"\n                [class.t-cell_today]="isItemToday(item)"\n                (click)="onItemClick(item)"\n                (tuiHoveredChange)="onItemHovered($event, item)"\n            >\n                {{ months()?.[row * 4 + column] }}\n            </div>\n        </ng-container>\n    </div>\n</ng-template>\n',
      styles: [`.t-row{display:flex;justify-content:flex-start;font:var(--tui-font-text-m)}.t-row:first-child{justify-content:flex-end}.t-row:last-child{justify-content:flex-start}.t-cell{position:relative;display:flex;align-items:center;justify-content:center;line-height:2rem;isolation:isolate;cursor:pointer;overflow:hidden;border:.125rem solid transparent;box-sizing:border-box;-webkit-mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem));mask:linear-gradient(transparent calc(50% - 1rem),#000 calc(50% - 1rem),#000 calc(50% + 1rem),transparent calc(50% + 1rem))}.t-cell:first-child{border-inline-start-color:transparent!important}.t-cell:last-child{border-inline-end-color:transparent!important}.t-cell:before,.t-cell:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";z-index:-1;border-radius:var(--tui-radius-m)}.t-cell:after{-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 32"><path d="M0.2856 0L0.6763 0C2.9265 0 4.9876 1.259 6.0147 3.2611L10.2442 11.5048C11.5301 14.0113 11.5683 16.9754 10.3472 19.5141L5.9766 28.6007C4.9772 30.6786 2.8754 32 0.5696 32H0.285645V0Z"></path></svg>') right / .75rem 100% no-repeat,linear-gradient(#000,#000) left / calc(100% - .7rem) 100% no-repeat}.t-cell[data-range]:before{background:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range]:before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1)}:host._picking .t-cell[data-range=middle]{border-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=middle]:not(:first-child):before{border-start-start-radius:0;border-end-start-radius:0}.t-cell[data-range=middle]:not(:last-child):before{border-start-end-radius:0;border-end-end-radius:0}.t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=start]{border-inline-end-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:not(:last-child):before{right:-1rem}.t-cell[data-range=start]:after{background:var(--tui-background-accent-1)}.t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1);color:var(--tui-text-primary-on-accent-1)}:host._picking .t-cell[data-range=end]{border-inline-start-color:var(--tui-background-neutral-1-hover)}.t-cell[data-range=end]:not(:first-child):before{left:-1rem}.t-cell[data-range=end]:after{background:var(--tui-background-accent-1);transform:scaleX(-1)}.t-cell[data-range=active]{color:var(--tui-text-primary-on-accent-1)}.t-cell[data-range=active]:after{background:var(--tui-background-accent-1);-webkit-mask:none;mask:none}.t-cell_disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}.t-cell_today{text-decoration:underline;text-underline-offset:.25rem}@media (hover: hover){.t-cell:hover:not([data-range=start]):not([data-range=end]):before{background:var(--tui-background-neutral-1-hover)}.t-cell[data-range=start]:hover:after,.t-cell[data-range=end]:hover:after,.t-cell[data-range=active]:hover:after{background:var(--tui-background-accent-1-hover)}}:host{display:block;block-size:12rem;inline-size:16rem;padding:1.125rem;box-sizing:content-box}.t-spin{margin-block-end:1rem}.t-cell{inline-size:4rem;border-block-start-width:.75rem;border-block-end-width:.75rem}.t-scrollbar{block-size:inherit;inline-size:inherit}
`]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    year: [{
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
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    monthClick: [{
      type: Output
    }],
    hoveredItemChange: [{
      type: Output
    }],
    yearChange: [{
      type: Output
    }],
    calculateDisabledItemHandlerWithMinMax: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-calendar-range.mjs
var _c0 = (a0, a1, a2, a3) => [a0, a1, a2, a3, false];
var _c1 = (a0, a1, a2, a3) => [a0, a1, a2, a3, true];
var _c2 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function TuiCalendarRange_tui_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tui-calendar", 3);
    ɵɵpipe(1, "tuiMapper");
    ɵɵpipe(2, "tuiMapper");
    ɵɵpipe(3, "tuiMapper");
    ɵɵpipe(4, "tuiMapper");
    ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_hoveredItemChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.hoveredItem, $event) || (ctx_r2.hoveredItem = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("dayClick", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_dayClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDayClick($event));
    })("monthChange", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_monthChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onMonthChange($event.append({
        month: -1
      })));
    })("mousedown.prevent.silent", function TuiCalendarRange_tui_calendar_4_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r2);
      return ɵɵresetView(0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabledItemHandler", ctx_r2.calculatedDisabledItemHandler)("markerHandler", ctx_r2.markerHandler)("max", ɵɵpipeBindV(1, 9, ɵɵpureFunction4(29, _c0, ctx_r2.max, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("min", ɵɵpipeBindV(2, 15, ɵɵpureFunction4(34, _c1, ctx_r2.min, ctx_r2.capsMapper, ctx_r2.value, ctx_r2.maxLength)))("minViewedMonth", ɵɵpipeBind3(3, 21, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("month", ɵɵpipeBind3(4, 25, ctx_r2.defaultViewedMonth, ctx_r2.monthOffset, 1))("showAdjacent", false)("value", ctx_r2.value);
    ɵɵtwoWayProperty("hoveredItem", ctx_r2.hoveredItem);
  }
}
function TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-icon", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵstyleProp("font-size", 1, "rem");
    ɵɵproperty("icon", ctx_r2.icons.check);
  }
}
function TuiCalendarRange_ng_template_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function TuiCalendarRange_ng_template_5_button_1_Template_button_click_0_listener() {
      const item_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onItemSelect(item_r5));
    })("mousedown.prevent.silent", function TuiCalendarRange_ng_template_5_button_1_Template_button_mousedown_prevent_silent_0_listener() {
      ɵɵrestoreView(_r4);
      return ɵɵresetView(0);
    });
    ɵɵtext(1);
    ɵɵtemplate(2, TuiCalendarRange_ng_template_5_button_1_tui_icon_2_Template, 1, 3, "tui-icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵattribute("aria-checked", ctx_r2.isItemActive(item_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r5, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isItemActive(item_r5));
  }
}
function TuiCalendarRange_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 4);
    ɵɵtemplate(1, TuiCalendarRange_ng_template_5_button_1_Template, 3, 3, "button", 5);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "tuiMapper");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("flex", 1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBindV(3, 5, ɵɵpureFunction6(12, _c2, ctx_r2.items, ctx_r2.mapper, ctx_r2.min, ctx_r2.max, ctx_r2.minLength, ɵɵpipeBind1(2, 3, ctx_r2.otherDateText$))));
  }
}
var calculateDisabledItemHandler = (disabledItemHandler, value, minLength) => (item) => {
  if (!value?.isSingleDay || !minLength) {
    return disabledItemHandler(item);
  }
  const negativeMinLength = Object.fromEntries(Object.entries(minLength).map(([key, value2]) => [key, -value2]));
  const disabledBefore = value.from.append(negativeMinLength).append({
    day: 1
  });
  const disabledAfter = value.from.append(minLength).append({
    day: -1
  });
  const inDisabledRange = disabledBefore.dayBefore(item) && disabledAfter.dayAfter(item);
  return inDisabledRange || disabledItemHandler(item);
};
var TUI_DAY_CAPS_MAPPER = (current, value, maxLength, backwards) => {
  if (!value?.isSingleDay || !maxLength) {
    return backwards ? current || TUI_FIRST_DAY : current || TUI_LAST_DAY;
  }
  const negativeMaxLength = Object.fromEntries(Object.entries(maxLength).map(([key, value2]) => [key, -value2]));
  const dateShift = value.from.append(backwards ? negativeMaxLength : maxLength).append({
    day: !backwards ? -1 : 1
  });
  if (backwards) {
    return dateShift.dayBefore(current || TUI_FIRST_DAY) ? current || TUI_FIRST_DAY : dateShift;
  }
  if (!current) {
    return dateShift;
  }
  return dateShift.dayAfter(current) ? current : dateShift;
};
var TuiCalendarRange = class _TuiCalendarRange {
  constructor() {
    this.selectedPeriod = null;
    this.otherDateText$ = inject(TUI_OTHER_DATE_TEXT);
    this.icons = inject(TUI_COMMON_ICONS);
    this.previousValue = null;
    this.hoveredItem = null;
    this.capsMapper = TUI_DAY_CAPS_MAPPER;
    this.defaultViewedMonth = TuiMonth.currentLocal();
    this.disabledItemHandler = TUI_FALSE_HANDLER;
    this.markerHandler = null;
    this.items = [];
    this.min = TUI_FIRST_DAY;
    this.max = TUI_LAST_DAY;
    this.minLength = null;
    this.maxLength = null;
    this.value = null;
    this.item = null;
    this.valueChange = new EventEmitter();
    this.itemChange = new EventEmitter();
    this.monthOffset = (value, month) => value.append({
      month
    });
    this.mapper = (items, min, max, minLength, otherDateText) => [...items.filter((item) => (minLength === null || item.range.from.append(minLength).daySameOrBefore(item.range.to)) && (min === null || item.range.to.daySameOrAfter(min)) && (max === null || item.range.from.daySameOrBefore(max))), otherDateText || ""];
    inject(TUI_CALENDAR_DATE_STREAM, {
      optional: true
    })?.pipe(tuiWatch(), takeUntilDestroyed()).subscribe((value) => {
      this.value = value;
      this.initDefaultViewedMonth();
    });
  }
  /**
   * @deprecated use `item`
   */
  get selectedActivePeriod() {
    return this.selectedPeriod;
  }
  /**
   * @deprecated use `item`
   */
  set selectedActivePeriod(period) {
    this.selectedPeriod = period;
  }
  ngOnChanges() {
    this.initDefaultViewedMonth();
  }
  ngOnInit() {
    this.initDefaultViewedMonth();
  }
  get calculatedDisabledItemHandler() {
    return this.calculateDisabledItemHandler(this.disabledItemHandler, this.value, this.minLength);
  }
  onEsc(event) {
    if (event.key !== "Escape" || !this.value?.isSingleDay) {
      return;
    }
    event.stopPropagation();
    this.value = this.previousValue;
  }
  isItemActive(item) {
    const {
      activePeriod
    } = this;
    return tuiIsString(item) && activePeriod === null || activePeriod === item || activePeriod?.toString() === item.toString();
  }
  onItemSelect(item) {
    if (!tuiIsString(item)) {
      this.selectedActivePeriod = item;
      this.updateValue(item.range.dayLimit(this.min, this.max));
      this.itemChange.emit(item);
    } else if (this.activePeriod !== null) {
      this.selectedActivePeriod = null;
      this.updateValue(null);
      this.itemChange.emit(null);
    }
    this.initDefaultViewedMonth();
  }
  onMonthChange(month) {
    this.defaultViewedMonth = month;
  }
  onDayClick(day) {
    this.previousValue = this.value;
    this.selectedActivePeriod = null;
    if (!this.value?.isSingleDay) {
      this.value = new TuiDayRange(day, day);
      this.itemChange.emit(this.findItemByDayRange(this.value));
    } else {
      const sortedDayRange = TuiDayRange.sort(this.value.from, day);
      this.updateValue(sortedDayRange);
      this.itemChange.emit(this.findItemByDayRange(sortedDayRange));
    }
  }
  updateValue(value) {
    this.value = value;
    this.valueChange.emit(value);
  }
  get activePeriod() {
    return this.item ?? this.selectedActivePeriod ?? (this.items.find((item) => tuiNullableSame(this.value, item.range, (a, b) => a.from.daySame(b.from.dayLimit(this.min, this.max)) && a.to.daySame(b.to.dayLimit(this.min, this.max)))) || null);
  }
  calculateDisabledItemHandler(disabledItemHandler, value, minLength) {
    return calculateDisabledItemHandler(disabledItemHandler, value, minLength);
  }
  initDefaultViewedMonth() {
    if (this.value) {
      this.defaultViewedMonth = this.items.length ? this.value.to : this.value.from;
    } else if (this.max && this.defaultViewedMonth.monthSameOrAfter(this.max)) {
      this.defaultViewedMonth = this.items.length ? this.max : this.max.append({
        month: -1
      });
    } else if (this.min && this.defaultViewedMonth.monthSameOrBefore(this.min)) {
      this.defaultViewedMonth = this.min;
    }
  }
  findItemByDayRange(dayRange) {
    return this.items.find((item) => dayRange.daySame(item.range)) ?? null;
  }
  static {
    this.ɵfac = function TuiCalendarRange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCalendarRange)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCalendarRange,
      selectors: [["tui-calendar-range"]],
      hostBindings: function TuiCalendarRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.capture", function TuiCalendarRange_keydown_capture_HostBindingHandler($event) {
            return ctx.onEsc($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        defaultViewedMonth: "defaultViewedMonth",
        disabledItemHandler: "disabledItemHandler",
        markerHandler: "markerHandler",
        items: "items",
        min: "min",
        max: "max",
        minLength: "minLength",
        maxLength: "maxLength",
        value: "value",
        item: "item"
      },
      outputs: {
        valueChange: "valueChange",
        itemChange: "itemChange"
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 7,
      vars: 37,
      consts: [["presets", ""], ["automation-id", "tui-calendar-range__calendar", 1, "t-calendar", 3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "maxViewedMonth", "min", "month", "showAdjacent", "value", "hoveredItem"], [3, "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem", "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", 4, "ngIf", "ngIfElse"], [3, "hoveredItemChange", "dayClick", "monthChange", "mousedown.prevent.silent", "disabledItemHandler", "markerHandler", "max", "min", "minViewedMonth", "month", "showAdjacent", "value", "hoveredItem"], ["automation-id", "tui-calendar-range__menu", "role", "menu"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.silent", 4, "ngFor", "ngForOf"], ["automation-id", "tui-calendar-range__menu__item", "role", "menuitemradio", "tuiOption", "", "type", "button", 3, "click", "mousedown.prevent.silent"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon", "font-size", 4, "ngIf"], ["automation-id", "tui-calendar-range__checkmark", 3, "icon"]],
      template: function TuiCalendarRange_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "tui-calendar", 1);
          ɵɵpipe(1, "tuiMapper");
          ɵɵpipe(2, "tuiMapper");
          ɵɵpipe(3, "tuiMapper");
          ɵɵtwoWayListener("hoveredItemChange", function TuiCalendarRange_Template_tui_calendar_hoveredItemChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            ɵɵtwoWayBindingSet(ctx.hoveredItem, $event) || (ctx.hoveredItem = $event);
            return ɵɵresetView($event);
          });
          ɵɵlistener("dayClick", function TuiCalendarRange_Template_tui_calendar_dayClick_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onDayClick($event));
          })("monthChange", function TuiCalendarRange_Template_tui_calendar_monthChange_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.onMonthChange($event));
          })("mousedown.prevent.silent", function TuiCalendarRange_Template_tui_calendar_mousedown_prevent_silent_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(0);
          });
          ɵɵelementEnd();
          ɵɵtemplate(4, TuiCalendarRange_tui_calendar_4_Template, 5, 39, "tui-calendar", 2)(5, TuiCalendarRange_ng_template_5_Template, 4, 19, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const presets_r6 = ɵɵreference(6);
          ɵɵproperty("disabledItemHandler", ctx.calculatedDisabledItemHandler)("markerHandler", ctx.markerHandler)("max", ɵɵpipeBindV(1, 11, ɵɵpureFunction4(27, _c0, ctx.max, ctx.capsMapper, ctx.value, ctx.maxLength)))("maxViewedMonth", ctx.items.length ? null : ɵɵpipeBind3(2, 17, ctx.defaultViewedMonth, ctx.monthOffset, -1))("min", ɵɵpipeBindV(3, 21, ɵɵpureFunction4(32, _c1, ctx.min, ctx.capsMapper, ctx.value, ctx.maxLength)))("month", ctx.defaultViewedMonth)("showAdjacent", !!ctx.items.length)("value", ctx.value);
          ɵɵtwoWayProperty("hoveredItem", ctx.hoveredItem);
          ɵɵadvance(4);
          ɵɵproperty("ngIf", !ctx.items.length)("ngIfElse", presets_r6);
        }
      },
      dependencies: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataListComponent, TuiOption, TuiIcon, TuiMapperPipe],
      styles: ["[_nghost-%COMP%]{display:flex;min-inline-size:30rem}.t-calendar[_ngcontent-%COMP%]{border-inline-end:1px solid var(--tui-border-normal)}"],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiCalendarRange.prototype, "calculateDisabledItemHandler", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCalendarRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-calendar-range",
      imports: [AsyncPipe, NgForOf, NgIf, TuiCalendar, TuiDataList, TuiIcon, TuiMapperPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "(document:keydown.capture)": "onEsc($event)"
      },
      template: '<tui-calendar\n    automation-id="tui-calendar-range__calendar"\n    class="t-calendar"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [maxViewedMonth]="items.length ? null : (defaultViewedMonth | tuiMapper: monthOffset : -1)"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [month]="defaultViewedMonth"\n    [showAdjacent]="!!items.length"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event)"\n    (mousedown.prevent.silent)="(0)"\n/>\n<tui-calendar\n    *ngIf="!items.length; else presets"\n    [disabledItemHandler]="calculatedDisabledItemHandler"\n    [markerHandler]="markerHandler"\n    [max]="max | tuiMapper: capsMapper : value : maxLength : false"\n    [min]="min | tuiMapper: capsMapper : value : maxLength : true"\n    [minViewedMonth]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [month]="defaultViewedMonth | tuiMapper: monthOffset : 1"\n    [showAdjacent]="false"\n    [value]="value"\n    [(hoveredItem)]="hoveredItem"\n    (dayClick)="onDayClick($event)"\n    (monthChange)="onMonthChange($event.append({month: -1}))"\n    (mousedown.prevent.silent)="(0)"\n/>\n<ng-template #presets>\n    <tui-data-list\n        automation-id="tui-calendar-range__menu"\n        role="menu"\n        [style.flex]="1"\n    >\n        <button\n            *ngFor="let item of items | tuiMapper: mapper : min : max : minLength : (otherDateText$ | async)"\n            automation-id="tui-calendar-range__menu__item"\n            role="menuitemradio"\n            tuiOption\n            type="button"\n            [attr.aria-checked]="isItemActive(item)"\n            (click)="onItemSelect(item)"\n            (mousedown.prevent.silent)="(0)"\n        >\n            {{ item }}\n            <tui-icon\n                *ngIf="isItemActive(item)"\n                automation-id="tui-calendar-range__checkmark"\n                [icon]="icons.check"\n                [style.font-size.rem]="1"\n            />\n        </button>\n    </tui-data-list>\n</ng-template>\n',
      styles: [":host{display:flex;min-inline-size:30rem}.t-calendar{border-inline-end:1px solid var(--tui-border-normal)}\n"]
    }]
  }], function() {
    return [];
  }, {
    defaultViewedMonth: [{
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
    value: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    itemChange: [{
      type: Output
    }],
    calculateDisabledItemHandler: []
  });
})();
var TuiDayRangePeriod = class {
  constructor(range, name, content) {
    this.range = range;
    this.name = name;
    this.content = content;
  }
  toString() {
    return this.name;
  }
};
function tuiCreateDefaultDayRangePeriods(periodTitles = ["For all the time", "Today", "Yesterday", "Current week", "Current month", "Previous month"]) {
  const today = TuiDay.currentLocal();
  const yesterday = today.append({
    day: -1
  });
  const startOfWeek = today.append({
    day: -today.dayOfWeek()
  });
  const endOfWeek = startOfWeek.append({
    day: 6
  });
  const startOfMonth = today.append({
    day: 1 - today.day
  });
  const endOfMonth = startOfMonth.append({
    month: 1,
    day: -1
  });
  const startOfLastMonth = startOfMonth.append({
    month: -1
  });
  return [new TuiDayRangePeriod(new TuiDayRange(TUI_FIRST_DAY, today), periodTitles[0]), new TuiDayRangePeriod(new TuiDayRange(today, today), periodTitles[1]), new TuiDayRangePeriod(new TuiDayRange(yesterday, yesterday), periodTitles[2]), new TuiDayRangePeriod(new TuiDayRange(startOfWeek, endOfWeek), periodTitles[3]), new TuiDayRangePeriod(new TuiDayRange(startOfMonth, endOfMonth), periodTitles[4]), new TuiDayRangePeriod(new TuiDayRange(startOfLastMonth, startOfMonth.append({
    day: -1
  })), periodTitles[5])];
}

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-checkbox.mjs
var _c02 = ["type", "checkbox", "tuiCheckbox", ""];
var TUI_CHECKBOX_DEFAULT_OPTIONS = {
  size: "m",
  appearance: (el) => el.checked || el.indeterminate ? "primary" : "outline-grayscale",
  icons: {
    checked: "@tui.check",
    indeterminate: "@tui.minus"
  }
};
var TUI_CHECKBOX_OPTIONS = tuiCreateToken(TUI_CHECKBOX_DEFAULT_OPTIONS);
function tuiCheckboxOptionsProvider(options) {
  return tuiProvideOptions(TUI_CHECKBOX_OPTIONS, options, TUI_CHECKBOX_DEFAULT_OPTIONS);
}
var TuiCheckbox = class _TuiCheckbox {
  constructor() {
    this.appearance = inject(TuiAppearance);
    this.options = inject(TUI_CHECKBOX_OPTIONS);
    this.resolver = tuiInjectIconResolver();
    this.destroyRef = inject(DestroyRef);
    this.el = tuiInjectElement();
    this.size = this.options.size;
    this.control = inject(NgControl, {
      optional: true,
      self: true
    });
  }
  ngOnInit() {
    if (!this.control?.valueChanges) {
      return;
    }
    tuiControlValue(this.control).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      const fix = this.control instanceof NgModel && value === null ? this.control.model : value;
      this.el.indeterminate = fix === null;
    });
  }
  ngDoCheck() {
    this.appearance.tuiAppearance = tuiIsString(this.options.appearance) ? this.options.appearance : this.options.appearance(this.el);
  }
  getIcon(state) {
    const option = this.options.icons[state];
    const icon = tuiIsString(option) ? option : option(this.size);
    return icon && `url(${this.resolver(icon)})`;
  }
  static {
    this.ɵfac = function TuiCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiCheckbox)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiCheckbox,
      selectors: [["input", "type", "checkbox", "tuiCheckbox", ""]],
      hostVars: 8,
      hostBindings: function TuiCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("disabled", !ctx.control || ctx.control.disabled);
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--t-checked-icon", ctx.getIcon("checked"))("--t-indeterminate-icon", ctx.getIcon("indeterminate"));
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
      attrs: _c02,
      decls: 0,
      vars: 0,
      template: function TuiCheckbox_Template(rf, ctx) {
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}
`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiCheckbox, [{
    type: Component,
    args: [{
      standalone: true,
      selector: 'input[type="checkbox"][tuiCheckbox]',
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
        "[class._readonly]": "!control",
        "[style.--t-checked-icon]": 'getIcon("checked")',
        "[style.--t-indeterminate-icon]": 'getIcon("indeterminate")'
      },
      styles: [`[tuiCheckbox]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);inline-size:var(--t-size);block-size:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[tuiCheckbox]:before{position:absolute;top:0;left:0;inline-size:100%;block-size:100%;content:"";background:currentColor;-webkit-mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;mask:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[tuiCheckbox]:disabled._readonly{opacity:1}[tuiCheckbox]:checked:before,[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-checked-icon);mask-image:var(--t-checked-icon);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[tuiCheckbox]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate-icon);mask-image:var(--t-indeterminate-icon)}[tuiCheckbox][data-size=s]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}
`]
    }]
  }], null, {
    size: [{
      type: Input
    }]
  });
})();

// node_modules/@taiga-ui/cdk/fesm2022/taiga-ui-cdk-directives-element.mjs
var TuiElement = class _TuiElement {
  constructor() {
    this.nativeElement = tuiInjectElement();
    return new ElementRef(this.nativeElement);
  }
  static {
    this.ɵfac = function TuiElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiElement)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiElement,
      selectors: [["", "tuiElement", ""]],
      exportAs: ["elementRef"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiElement, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiElement]",
      exportAs: "elementRef"
    }]
  }], function() {
    return [];
  }, null);
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-data-list-wrapper.mjs
function TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template(rf, ctx) {
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
function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5, 1);
    ɵɵlistener("click", function TuiDataListWrapperComponent_tui_data_list_0_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵelementStart(2, "span", 6);
    ɵɵtemplate(3, TuiDataListWrapperComponent_tui_data_list_0_button_1_ng_container_3_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(3);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListWrapperComponent_tui_data_list_0_button_1_Template, 4, 4, "button", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.$cast(ctx_r2.items));
  }
}
function TuiDataListWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 8);
  }
}
var _c03 = ["labels", ""];
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template(rf, ctx) {
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
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7, 1);
    ɵɵlistener("click", function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.itemClick.emit(item_r2));
    });
    ɵɵtemplate(2, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const elementRef_r5 = ɵɵreference(1);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r2.disabledItemHandler(item_r2))("value", item_r2);
    ɵɵadvance(2);
    ɵɵproperty("polymorpheusOutlet", ctx_r2.itemContent)("polymorpheusOutletContext", ctx_r2.getContext(item_r2, elementRef_r5));
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-opt-group", 5);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_button_1_Template, 3, 4, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r2.labels[index_r7]);
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r6);
  }
}
function TuiDataListGroupWrapperComponent_tui_data_list_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-data-list", 3);
    ɵɵtemplate(1, TuiDataListGroupWrapperComponent_tui_data_list_0_tui_opt_group_1_Template, 2, 2, "tui-opt-group", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("emptyContent", ctx_r2.emptyContent)("size", ctx_r2.size);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.items);
  }
}
function TuiDataListGroupWrapperComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tui-loader", 9);
  }
}
var _c12 = "[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}";
var TuiDataListWrapperComponent = class _TuiDataListWrapperComponent {
  constructor() {
    this.itemsHandlers = inject(TUI_ITEMS_HANDLERS);
    this.optionsQuery = EMPTY_QUERY;
    this.items = [];
    this.disabledItemHandler = this.itemsHandlers.disabledItemHandler;
    this.size = tuiInjectDataListSize();
    this.itemClick = new EventEmitter();
    this.itemContent = ({
      $implicit
    }) => this.itemsHandlers.stringify($implicit);
  }
  getContext($implicit, {
    nativeElement
  }) {
    return {
      $implicit,
      active: tuiIsNativeFocused(nativeElement)
    };
  }
  getOptions(includeDisabled = false) {
    return this.optionsQuery.filter(({
      disabled
    }) => includeDisabled || !disabled).map(({
      value
    }) => value).filter(tuiIsPresent);
  }
  $cast(items) {
    return items;
  }
  static {
    this.ɵfac = function TuiDataListWrapperComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiDataListWrapperComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListWrapperComponent,
      selectors: [["tui-data-list-wrapper", 3, "labels", ""]],
      viewQuery: function TuiDataListWrapperComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiOption, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionsQuery = _t);
        }
      },
      inputs: {
        items: "items",
        disabledItemHandler: "disabledItemHandler",
        emptyContent: "emptyContent",
        size: "size",
        itemContent: "itemContent"
      },
      outputs: {
        itemClick: "itemClick"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListWrapperComponent)]), ɵɵStandaloneFeature],
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [1, "t-content"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], ["automation-id", "tui-data-list-wrapper__loader", 1, "t-loader"]],
      template: function TuiDataListWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r6);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiElement, TuiLoader],
      styles: ["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper:not([labels])",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <button\n        *ngFor="let item of $cast(items)"\n        #elementRef="elementRef"\n        automation-id="tui-data-list-wrapper__option"\n        tuiElement\n        tuiOption\n        type="button"\n        [disabled]="disabledItemHandler(item)"\n        [value]="item"\n        (click)="itemClick.emit(item)"\n    >\n        <span class="t-content">\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </span>\n    </button>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader\n        automation-id="tui-data-list-wrapper__loader"\n        class="t-loader"\n    />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    optionsQuery: [{
      type: ViewChildren,
      args: [forwardRef(() => TuiOption)]
    }],
    items: [{
      type: Input
    }],
    disabledItemHandler: [{
      type: Input
    }],
    emptyContent: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemContent: [{
      type: Input
    }]
  });
})();
var TuiDataListGroupWrapperComponent = class _TuiDataListGroupWrapperComponent extends TuiDataListWrapperComponent {
  constructor() {
    super(...arguments);
    this.labels = [];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiDataListGroupWrapperComponent_BaseFactory;
      return function TuiDataListGroupWrapperComponent_Factory(__ngFactoryType__) {
        return (ɵTuiDataListGroupWrapperComponent_BaseFactory || (ɵTuiDataListGroupWrapperComponent_BaseFactory = ɵɵgetInheritedFactory(_TuiDataListGroupWrapperComponent)))(__ngFactoryType__ || _TuiDataListGroupWrapperComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiDataListGroupWrapperComponent,
      selectors: [["tui-data-list-wrapper", "labels", ""]],
      inputs: {
        labels: "labels"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiAsDataListAccessor(_TuiDataListGroupWrapperComponent)]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
      attrs: _c03,
      decls: 3,
      vars: 2,
      consts: [["loading", ""], ["elementRef", "elementRef"], [3, "emptyContent", "size", 4, "ngIf", "ngIfElse"], [3, "emptyContent", "size"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "disabled", "value", "click", 4, "ngFor", "ngForOf"], ["automation-id", "tui-data-list-wrapper__option", "tuiElement", "", "tuiOption", "", "type", "button", 3, "click", "disabled", "value"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"], [1, "t-loader"]],
      template: function TuiDataListGroupWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, TuiDataListGroupWrapperComponent_tui_data_list_0_Template, 2, 3, "tui-data-list", 2)(1, TuiDataListGroupWrapperComponent_ng_template_1_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.items)("ngIfElse", loading_r8);
        }
      },
      dependencies: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataListComponent, TuiOption, TuiOptGroup, TuiElement, TuiLoader],
      styles: [_c12],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiDataListGroupWrapperComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-data-list-wrapper[labels]",
      imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
      template: '<tui-data-list\n    *ngIf="items; else loading"\n    [emptyContent]="emptyContent"\n    [size]="size"\n>\n    <tui-opt-group\n        *ngFor="let group of items; let index = index"\n        [label]="labels[index]"\n    >\n        <button\n            *ngFor="let item of group"\n            #elementRef="elementRef"\n            automation-id="tui-data-list-wrapper__option"\n            tuiElement\n            tuiOption\n            type="button"\n            [disabled]="disabledItemHandler(item)"\n            [value]="item"\n            (click)="itemClick.emit(item)"\n        >\n            <ng-container *polymorpheusOutlet="itemContent as text; context: getContext(item, elementRef)">\n                {{ text }}\n            </ng-container>\n        </button>\n    </tui-opt-group>\n</tui-data-list>\n<ng-template #loading>\n    <tui-loader class="t-loader" />\n</ng-template>\n',
      styles: [":host{display:block}.t-content{flex:1;min-inline-size:0}.t-loader{margin:.75rem 0}\n"]
    }]
  }], null, {
    labels: [{
      type: Input
    }]
  });
})();
var TuiDataListWrapper = [TuiDataListWrapperComponent, TuiDataListGroupWrapperComponent, TuiDataListDirective];

// node_modules/@maskito/angular/fesm2022/maskito-angular.mjs
var MaskitoDirective = class _MaskitoDirective {
  constructor() {
    this.elementRef = inject(ElementRef).nativeElement;
    this.ngZone = inject(NgZone);
    this.maskedElement = null;
    this.options = null;
    this.elementPredicate = MASKITO_DEFAULT_ELEMENT_PREDICATE;
    const accessor = inject(DefaultValueAccessor, {
      self: true,
      optional: true
    });
    if (accessor) {
      const original = accessor.writeValue.bind(accessor);
      accessor.writeValue = (value) => {
        original(this.options ? maskitoTransform(String(value ?? ""), this.options) : value);
      };
    }
  }
  ngOnChanges() {
    return __async(this, null, function* () {
      const {
        elementPredicate,
        options,
        maskedElement,
        elementRef,
        ngZone
      } = this;
      maskedElement?.destroy();
      if (!options) {
        return;
      }
      const predicateResult = yield elementPredicate(elementRef);
      if (this.elementPredicate !== elementPredicate || this.options !== options) {
        return;
      }
      ngZone.runOutsideAngular(() => {
        this.maskedElement = new Maskito(predicateResult, options);
      });
    });
  }
  ngOnDestroy() {
    this.maskedElement?.destroy();
  }
  static {
    this.ɵfac = function MaskitoDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaskitoDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _MaskitoDirective,
      selectors: [["", "maskito", ""]],
      inputs: {
        options: [0, "maskito", "options"],
        elementPredicate: [0, "maskitoElement", "elementPredicate"]
      },
      standalone: true,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskitoDirective, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[maskito]"
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input,
      args: ["maskito"]
    }],
    elementPredicate: [{
      type: Input,
      args: ["maskitoElement"]
    }]
  });
})();
var MaskitoPipe = class _MaskitoPipe {
  transform(value, maskitoOptions) {
    return maskitoTransform(String(value ?? ""), maskitoOptions ?? MASKITO_DEFAULT_OPTIONS);
  }
  static {
    this.ɵfac = function MaskitoPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaskitoPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "maskito",
      type: _MaskitoPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaskitoPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "maskito"
    }]
  }], null, null);
})();

// node_modules/libphonenumber-js/es6/ParseError.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var ParseError = function(_Error) {
  _inherits(ParseError2, _Error);
  var _super = _createSuper(ParseError2);
  function ParseError2(code) {
    var _this;
    _classCallCheck(this, ParseError2);
    _this = _super.call(this, code);
    Object.setPrototypeOf(_assertThisInitialized(_this), ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  return _createClass(ParseError2);
}(_wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/constants.js
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9０-９٠-٩۰-۹";
var DASHES = "-‐-―−ー－";
var SLASHES = "／/";
var DOTS = "．.";
var WHITESPACE = "  ­​⁠　";
var BRACKETS = "()（）［］\\[\\]";
var TILDES = "~⁓∼～";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+＋";

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
function semver_compare_default(a, b) {
  a = a.split("-");
  b = b.split("-");
  var pa = a[0].split(".");
  var pb = b[0].split(".");
  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }
  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
}

// node_modules/libphonenumber-js/es6/helpers/isObject.js
var objectConstructor = {}.constructor;
function isObject(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var CALLING_CODE_REG_EXP = /^\d+$/;
var Metadata = function() {
  function Metadata2(metadata) {
    _classCallCheck2(this, Metadata2);
    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }
  _createClass2(Metadata2, [{
    key: "getCountries",
    value: function getCountries2() {
      return Object.keys(this.metadata.countries).filter(function(_) {
        return _ !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country2) {
      return this.getCountryMetadata(country2) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }
    // Deprecated.
  }, {
    key: "country",
    value: function country2(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }
      if (countryCode && countryCode !== "001") {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];
        if (metadata) {
          return metadata;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }
  }]);
  return Metadata2;
}();
var NumberingPlan = function() {
  function NumberingPlan2(metadata, globalMetadataObject) {
    _classCallCheck2(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  _createClass2(NumberingPlan2, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats2.map(function(_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);
  return NumberingPlan2;
}();
var Format = function() {
  function Format2(format, metadata) {
    _classCallCheck2(this, Format2);
    this._format = format;
    this.metadata = metadata;
  }
  _createClass2(Format2, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);
  return Format2;
}();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = function() {
  function Type2(type, metadata) {
    _classCallCheck2(this, Type2);
    this.type = type;
    this.metadata = metadata;
  }
  _createClass2(Type2, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
  return Type2;
}();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject(metadata) || !isObject(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + typeOf(metadata) + ": " + metadata, "."));
  }
}
var typeOf = function typeOf2(_) {
  return _typeof2(_);
};
function getCountryCallingCode(country2, metadata) {
  metadata = new Metadata(metadata);
  if (metadata.hasCountry(country2)) {
    return metadata.country(country2).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country2));
}
function isSupportedCountry(country2, metadata) {
  return metadata.countries.hasOwnProperty(country2);
}
function setVersion(metadata) {
  var version = metadata.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[  \\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.．]?[  \\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)";
  var ambiguousExtLabels = "(?:[xｘ#＃~～]|int|ｉｎｔ)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[  \\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;
  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }
    i++;
  }
}

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}
function parseDigits(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    var digit = parseDigit(character);
    if (digit) {
      result2 += digit;
    }
  }
  return result2;
}

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose2(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
function parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof emitEvent === "function") {
        emitEvent("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function mergeArrays(a, b) {
  var merged = a.slice();
  for (var _iterator = _createForOfIteratorHelperLoose3(b), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a2, b2) {
    return a2 - b2;
  });
}

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, metadata) {
  return checkNumberLengthForType(nationalNumber, void 0, metadata);
}
function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", metadata);
    }
    var mobile_type = metadata.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadata) {
  if (options === void 0) {
    options = {};
  }
  metadata = new Metadata(metadata);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  } else {
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, metadata)) {
    case "IS_POSSIBLE":
      return true;
    default:
      return false;
  }
}

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function matchesEntirely(text, regular_expression) {
  text = text || "";
  return new RegExp("^(?:" + regular_expression + ")$").test(text);
}

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadata) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  metadata = new Metadata(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
    if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose4(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  type = metadata.type(type);
  if (!type || !type.pattern()) {
    return false;
  }
  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, type.pattern());
}

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadata) {
  options = options || {};
  metadata = new Metadata(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  if (metadata.hasTypes()) {
    return getNumberType(input, options, metadata.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata.nationalNumberPattern());
}

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
  var _metadata = new Metadata(metadata);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country2) {
    return couldNationalNumberBelongToCountry(nationalNumber, country2, metadata);
  });
}
function couldNationalNumberBelongToCountry(nationalNumber, country2, metadata) {
  var _metadata = new Metadata(metadata);
  _metadata.selectNumberingPlan(country2);
  if (_metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0) {
    return true;
  }
  return false;
}

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country2, callingCode, metadata) {
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country2, callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}

// node_modules/libphonenumber-js/es6/format.js
function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  }
};
function formatNumber2(input, format, options, metadata) {
  if (options) {
    options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  metadata = new Metadata(metadata);
  if (input.country && input.country !== "001") {
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
  }
}
function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);
  if (!format) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata
  });
}
function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = _createForOfIteratorHelperLoose5(availableFormats), _step; !(_step = _iterator()).done; ) {
    var format = _step.value;
    if (format.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    }
    if (matchesEntirely(nationalNnumber, format.pattern())) {
      return format;
    }
  }
}
function addExtension(formattedNumber, ext, metadata, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
}
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
  }
}

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
var PhoneNumber = function() {
  function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata) {
    _classCallCheck3(this, PhoneNumber2);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("`country` or `countryCallingCode` not passed");
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` not passed");
    }
    if (!metadata) {
      throw new TypeError("`metadata` not passed");
    }
    var _getCountryAndCountry = getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadata), country2 = _getCountryAndCountry.country, countryCallingCode = _getCountryAndCountry.countryCallingCode;
    this.country = country2;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata;
    };
  }
  _createClass3(PhoneNumber2, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "getPossibleCountries",
    value: function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new Metadata(this.getMetadata());
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return formatNumber2(this, _format, options ? _objectSpread2(_objectSpread2({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format("NATIONAL", options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format("RFC3966", options);
    }
  }]);
  return PhoneNumber2;
}();
var isCountryCode = function isCountryCode2(value) {
  return /^[A-Z]{2}$/.test(value);
};
function getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadataJson) {
  var country2;
  var countryCallingCode;
  var metadata = new Metadata(metadataJson);
  if (isCountryCode(countryOrCountryCallingCode)) {
    country2 = countryOrCountryCallingCode;
    metadata.selectNumberingPlan(country2);
    countryCallingCode = metadata.countryCallingCode();
  } else {
    countryCallingCode = countryOrCountryCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata.isNonGeographicCallingCode(countryCallingCode)) {
        country2 = "001";
      }
    }
  }
  return {
    country: country2,
    countryCallingCode
  };
}

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country2, callingCode, metadata) {
  if (!country2) {
    return;
  }
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country2, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, metadata) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata.possibleLengths()) {
      if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
  if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
    return false;
  }
  return true;
}
function isPossibleIncompleteNationalNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, metadata)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country2, callingCode, metadata) {
  var countryCallingCode = country2 ? getCountryCallingCode(country2, metadata) : callingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(country2, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country2, callingCode, metadata) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country2, callingCode, metadata);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country2 || callingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country2, callingCode, metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  metadata = new Metadata(metadata);
  var i = 2;
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);
    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }
    i++;
  }
  return {};
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function _createForOfIteratorHelperLoose6(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function getCountryByNationalNumber(nationalPhoneNumber, _ref) {
  var countries = _ref.countries, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
  metadata = new Metadata(metadata);
  for (var _iterator = _createForOfIteratorHelperLoose6(countries), _step; !(_step = _iterator()).done; ) {
    var country2 = _step.value;
    metadata.country(country2);
    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country2;
      }
    } else if (getNumberType({
      phone: nationalPhoneNumber,
      country: country2
    }, void 0, metadata.metadata)) {
      return country2;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalPhoneNumber = _ref.nationalNumber, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalPhoneNumber, {
    countries: possibleCountries,
    defaultCountry,
    metadata: metadata.metadata
  });
}

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber2 = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber2(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse(text, options, metadata) {
  options = options || {};
  metadata = new Metadata(metadata);
  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata), country2 = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
    if (country2) {
      phoneNumber.country = country2;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country2) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country2, nationalNumber, ext) : {};
  }
  return {
    country: country2,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext
  };
}
function _extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }
  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text;
  }
  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parseInput(text, v2, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text, {
    extractFormattedPhoneNumber: function extractFormattedPhoneNumber2(text2) {
      return _extractFormattedPhoneNumber(text2, extract, v2);
    }
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
function result(country2, nationalNumber, ext) {
  var result2 = {
    country: country2,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  var _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country2;
  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);
    if (defaultCountry) {
      country2 = defaultCountry;
    } else {
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
          country2 = "001";
        }
      }
    }
    countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    defaultCountry,
    metadata
  });
  if (exactCountry) {
    country2 = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata.country(country2);
    }
  }
  return {
    country: country2,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumberWithError(text, options, metadata) {
  return parse(text, _objectSpread3(_objectSpread3({}, options), {}, {
    v2: true
  }), metadata);
}

// node_modules/libphonenumber-js/es6/normalizeArguments.js
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text;
  var options;
  var metadata;
  if (typeof arg_1 === "string") {
    text = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = void 0;
      metadata = arg_3;
    }
    if (arg_2) {
      options = _objectSpread4({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text,
    options,
    metadata
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError.js
function parsePhoneNumberWithError2() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  return parsePhoneNumberWithError(text, options, metadata);
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumber2(text, options, metadata) {
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
    options = _objectSpread5(_objectSpread5({}, options), {}, {
      defaultCountry: void 0
    });
  }
  try {
    return parsePhoneNumberWithError(text, options, metadata);
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber.js
function parsePhoneNumber3() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  return parsePhoneNumber2(text, options, metadata);
}

// node_modules/libphonenumber-js/es6/validatePhoneNumberLength.js
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function validatePhoneNumberLength() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  options = _objectSpread6(_objectSpread6({}, options), {}, {
    extract: false
  });
  try {
    var phoneNumber = parsePhoneNumberWithError(text, options, metadata);
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(phoneNumber.countryCallingCode);
    var result2 = checkNumberLength(phoneNumber.nationalNumber, metadata);
    if (result2 !== "IS_POSSIBLE") {
      return result2;
    }
  } catch (error) {
    if (error instanceof ParseError) {
      return error.message;
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/findNumbers/LRUCache.js
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Node = _createClass4(function Node2(key, value) {
  var next = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var prev = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  _classCallCheck4(this, Node2);
  this.key = key;
  this.value = value;
  this.next = next;
  this.prev = prev;
});
var LRUCache = function() {
  function LRUCache2() {
    var limit2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
    _classCallCheck4(this, LRUCache2);
    this.size = 0;
    this.limit = limit2;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }
  _createClass4(LRUCache2, [{
    key: "put",
    value: function put(key, value) {
      this.ensureLimit();
      if (!this.head) {
        this.head = this.tail = new Node(key, value);
      } else {
        var node = new Node(key, value, this.head);
        this.head.prev = node;
        this.head = node;
      }
      this.cache[key] = this.head;
      this.size++;
    }
    // Read from cache map and make that node as new Head of LinkedList
  }, {
    key: "get",
    value: function get(key) {
      if (this.cache[key]) {
        var value = this.cache[key].value;
        this.remove(key);
        this.put(key, value);
        return value;
      }
      console.log("Item not available in cache for key ".concat(key));
    }
  }, {
    key: "ensureLimit",
    value: function ensureLimit() {
      if (this.size === this.limit) {
        this.remove(this.tail.key);
      }
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var node = this.cache[key];
      if (node.prev !== null) {
        node.prev.next = node.next;
      } else {
        this.head = node.next;
      }
      if (node.next !== null) {
        node.next.prev = node.prev;
      } else {
        this.tail = node.prev;
      }
      delete this.cache[key];
      this.size--;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      this.cache = {};
    }
    // // Invokes the callback function with every node of the chain and the index of the node.
    // forEach(fn) {
    //   let node = this.head;
    //   let counter = 0;
    //   while (node) {
    //     fn(node, counter);
    //     node = node.next;
    //     counter++;
    //   }
    // }
    // // To iterate over LRU with a 'for...of' loop
    // *[Symbol.iterator]() {
    //   let node = this.head;
    //   while (node) {
    //     yield node;
    //     node = node.next;
    //   }
    // }
  }]);
  return LRUCache2;
}();

// node_modules/libphonenumber-js/es6/findNumbers/RegExpCache.js
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var RegExpCache = function() {
  function RegExpCache2(size) {
    _classCallCheck5(this, RegExpCache2);
    this.cache = new LRUCache(size);
  }
  _createClass5(RegExpCache2, [{
    key: "getPatternForRegExp",
    value: function getPatternForRegExp(pattern) {
      var regExp = this.cache.get(pattern);
      if (!regExp) {
        regExp = new RegExp("^" + pattern);
        this.cache.put(pattern, regExp);
      }
      return regExp;
    }
  }]);
  return RegExpCache2;
}();

// node_modules/libphonenumber-js/es6/findNumbers/util.js
function limit(lower, upper) {
  if (lower < 0 || upper <= 0 || upper < lower) {
    throw new TypeError();
  }
  return "{".concat(lower, ",").concat(upper, "}");
}
function trimAfterFirstMatch(regexp, string) {
  var index = string.search(regexp);
  if (index >= 0) {
    return string.slice(0, index);
  }
  return string;
}
function startsWith(string, substring) {
  return string.indexOf(substring) === 0;
}
function endsWith(string, substring) {
  return string.indexOf(substring, string.length - substring.length) === string.length - substring.length;
}

// node_modules/libphonenumber-js/es6/findNumbers/utf-8.js
var _pZ = "   ᠎ - \u2028\u2029  　";
var pZ = "[".concat(_pZ, "]");
var PZ = "[^".concat(_pZ, "]");
var _pN = "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൦-൵๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９";
var _pNd = "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹０-９";
var pNd = "[".concat(_pNd, "]");
var _pL = "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var pL = "[".concat(_pL, "]");
var pL_regexp = new RegExp(pL);
var _pSc = "$¢-¥֏؋৲৳৻૱௹฿៛₠-₹꠸﷼﹩＄￠￡￥￦";
var pSc = "[".concat(_pSc, "]");
var pSc_regexp = new RegExp(pSc);
var _pMn = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣤ-ࣾऀ-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ా-ీె-ైొ-్ౕౖౢౣ಼ಿೆೌ್ೢೣു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᯦᮫ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᷀-ᷦ᷼-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꨩ-ꨮꨱꨲꨵꨶꩃꩌꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︦";
var pMn = "[".concat(_pMn, "]");
var pMn_regexp = new RegExp(pMn);
var _InBasic_Latin = "\0-";
var _InLatin_1_Supplement = "-ÿ";
var _InLatin_Extended_A = "Ā-ſ";
var _InLatin_Extended_Additional = "Ḁ-ỿ";
var _InLatin_Extended_B = "ƀ-ɏ";
var _InCombining_Diacritical_Marks = "̀-ͯ";
var latinLetterRegexp = new RegExp("[" + _InBasic_Latin + _InLatin_1_Supplement + _InLatin_Extended_A + _InLatin_Extended_Additional + _InLatin_Extended_B + _InCombining_Diacritical_Marks + "]");
function isLatinLetter(letter) {
  if (!pL_regexp.test(letter) && !pMn_regexp.test(letter)) {
    return false;
  }
  return latinLetterRegexp.test(letter);
}
function isInvalidPunctuationSymbol(character) {
  return character === "%" || pSc_regexp.test(character);
}

// node_modules/libphonenumber-js/es6/findNumbers/matchPhoneNumberStringAgainstPhoneNumber.js
function matchPhoneNumberStringAgainstPhoneNumber(phoneNumberString, phoneNumber, metadata) {
  var phoneNumberStringContainsCallingCode = true;
  var parsedPhoneNumber = parsePhoneNumber3(phoneNumberString, metadata);
  if (!parsedPhoneNumber) {
    phoneNumberStringContainsCallingCode = false;
    parsedPhoneNumber = parsePhoneNumber3(phoneNumberString, {
      defaultCallingCode: phoneNumber.countryCallingCode
    }, metadata);
  }
  if (!parsedPhoneNumber) {
    return "INVALID_NUMBER";
  }
  if (phoneNumber.ext) {
    if (parsedPhoneNumber.ext !== phoneNumber.ext) {
      return "NO_MATCH";
    }
  } else {
    if (parsedPhoneNumber.ext) {
      return "NO_MATCH";
    }
  }
  if (phoneNumberStringContainsCallingCode) {
    if (phoneNumber.countryCallingCode !== parsedPhoneNumber.countryCallingCode) {
      return "NO_MATCH";
    }
  }
  if (phoneNumber.number === parsedPhoneNumber.number) {
    if (phoneNumberStringContainsCallingCode) {
      return "EXACT_MATCH";
    } else {
      return "NSN_MATCH";
    }
  }
  if (phoneNumber.nationalNumber.indexOf(parsedPhoneNumber.nationalNumber) === 0 || parsedPhoneNumber.nationalNumber.indexOf(phoneNumber.nationalNumber) === 0) {
    return "SHORT_NSN_MATCH";
  }
  return "NO_MATCH";
}

// node_modules/libphonenumber-js/es6/findNumbers/Leniency.js
function _createForOfIteratorHelperLoose7(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var Leniency_default = {
  /**
   * Phone numbers accepted are "possible", but not necessarily "valid".
   */
  POSSIBLE: function POSSIBLE(phoneNumber, _ref) {
    var candidate = _ref.candidate, metadata = _ref.metadata;
    return true;
  },
  /**
   * Phone numbers accepted are "possible" and "valid".
   * Numbers written in national format must have their national-prefix
   * present if it is usually written for a number of this type.
   */
  VALID: function VALID(phoneNumber, _ref2) {
    var candidate = _ref2.candidate, defaultCountry = _ref2.defaultCountry, metadata = _ref2.metadata;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata)) {
      return false;
    }
    return true;
  },
  /**
   * Phone numbers accepted are "valid" and
   * are grouped in a possible way for this locale. For example, a US number written as
   * "65 02 53 00 00" and "650253 0000" are not accepted at this leniency level, whereas
   * "650 253 0000", "650 2530000" or "6502530000" are.
   * Numbers with more than one '/' symbol in the national significant number
   * are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use,
   * email the discussion group libphonenumber-discuss@googlegroups.com.
   */
  STRICT_GROUPING: function STRICT_GROUPING(phoneNumber, _ref3) {
    var candidate = _ref3.candidate, defaultCountry = _ref3.defaultCountry, metadata = _ref3.metadata, regExpCache = _ref3.regExpCache;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata) || containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) || !isNationalPrefixPresentIfRequired(phoneNumber, {
      defaultCountry,
      metadata
    })) {
      return false;
    }
    return checkNumberGroupingIsValid(phoneNumber, candidate, metadata, allNumberGroupsRemainGrouped, regExpCache);
  },
  /**
   * Phone numbers accepted are "valid" and are grouped in the same way
   * that we would have formatted it, or as a single block.
   * For example, a US number written as "650 2530000" is not accepted
   * at this leniency level, whereas "650 253 0000" or "6502530000" are.
   * Numbers with more than one '/' symbol are also dropped at this level.
   *
   * Warning: This level might result in lower coverage especially for regions outside of
   * country code "+1". If you are not sure about which level to use, email the discussion group
   * libphonenumber-discuss@googlegroups.com.
   */
  EXACT_GROUPING: function EXACT_GROUPING(phoneNumber, _ref4) {
    var candidate = _ref4.candidate, defaultCountry = _ref4.defaultCountry, metadata = _ref4.metadata, regExpCache = _ref4.regExpCache;
    if (!phoneNumber.isValid() || !containsOnlyValidXChars(phoneNumber, candidate, metadata) || containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) || !isNationalPrefixPresentIfRequired(phoneNumber, {
      defaultCountry,
      metadata
    })) {
      return false;
    }
    return checkNumberGroupingIsValid(phoneNumber, candidate, metadata, allNumberGroupsAreExactlyPresent, regExpCache);
  }
};
function containsOnlyValidXChars(phoneNumber, candidate, metadata) {
  for (var index = 0; index < candidate.length - 1; index++) {
    var charAtIndex = candidate.charAt(index);
    if (charAtIndex === "x" || charAtIndex === "X") {
      var charAtNextIndex = candidate.charAt(index + 1);
      if (charAtNextIndex === "x" || charAtNextIndex === "X") {
        index++;
        if (matchPhoneNumberStringAgainstPhoneNumber(candidate.substring(index), phoneNumber, metadata) !== "NSN_MATCH") {
          return false;
        }
      } else {
        var ext = parseDigits(candidate.substring(index));
        if (ext) {
          if (phoneNumber.ext !== ext) {
            return false;
          }
        } else {
          if (phoneNumber.ext) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
function isNationalPrefixPresentIfRequired(phoneNumber, _ref5) {
  var defaultCountry = _ref5.defaultCountry, _metadata = _ref5.metadata;
  if (phoneNumber.__countryCallingCodeSource !== "FROM_DEFAULT_COUNTRY") {
    return true;
  }
  var metadata = new Metadata(_metadata);
  metadata.selectNumberingPlan(phoneNumber.countryCallingCode);
  var phoneNumberRegion = phoneNumber.country || getCountryByCallingCode(phoneNumber.countryCallingCode, {
    nationalNumber: phoneNumber.nationalNumber,
    defaultCountry,
    metadata
  });
  var nationalNumber = phoneNumber.nationalNumber;
  var format = chooseFormatForNumber(metadata.numberingPlan.formats(), nationalNumber);
  if (format.nationalPrefixFormattingRule()) {
    if (metadata.numberingPlan.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
      return true;
    }
    if (!format.usesNationalPrefix()) {
      return true;
    }
    return Boolean(phoneNumber.nationalPrefix);
  }
  return true;
}
function containsMoreThanOneSlashInNationalNumber(phoneNumber, candidate) {
  var firstSlashInBodyIndex = candidate.indexOf("/");
  if (firstSlashInBodyIndex < 0) {
    return false;
  }
  var secondSlashInBodyIndex = candidate.indexOf("/", firstSlashInBodyIndex + 1);
  if (secondSlashInBodyIndex < 0) {
    return false;
  }
  var candidateHasCountryCode = phoneNumber.__countryCallingCodeSource === "FROM_NUMBER_WITH_PLUS_SIGN" || phoneNumber.__countryCallingCodeSource === "FROM_NUMBER_WITHOUT_PLUS_SIGN";
  if (candidateHasCountryCode && parseDigits(candidate.substring(0, firstSlashInBodyIndex)) === phoneNumber.countryCallingCode) {
    return candidate.slice(secondSlashInBodyIndex + 1).indexOf("/") >= 0;
  }
  return true;
}
function checkNumberGroupingIsValid(number, candidate, metadata, checkGroups, regExpCache) {
  throw new Error("This part of code hasn't been ported");
  var normalizedCandidate = normalizeDigits(
    candidate,
    true
    /* keep non-digits */
  );
  var formattedNumberGroups = getNationalNumberGroups(metadata, number, null);
  if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
    return true;
  }
  var alternateFormats = MetadataManager.getAlternateFormatsForCountry(number.getCountryCode());
  var nationalSignificantNumber = util.getNationalSignificantNumber(number);
  if (alternateFormats) {
    for (var _iterator = _createForOfIteratorHelperLoose7(alternateFormats.numberFormats()), _step; !(_step = _iterator()).done; ) {
      var alternateFormat = _step.value;
      if (alternateFormat.leadingDigitsPatterns().length > 0) {
        var leadingDigitsRegExp = regExpCache.getPatternForRegExp("^" + alternateFormat.leadingDigitsPatterns()[0]);
        if (!leadingDigitsRegExp.test(nationalSignificantNumber)) {
          continue;
        }
      }
      formattedNumberGroups = getNationalNumberGroups(metadata, number, alternateFormat);
      if (checkGroups(metadata, number, normalizedCandidate, formattedNumberGroups)) {
        return true;
      }
    }
  }
  return false;
}
function getNationalNumberGroups(metadata, number, formattingPattern) {
  throw new Error("This part of code hasn't been ported");
  if (formattingPattern) {
    var nationalSignificantNumber = util.getNationalSignificantNumber(number);
    return util.formatNsnUsingPattern(nationalSignificantNumber, formattingPattern, "RFC3966", metadata).split("-");
  }
  var rfc3966Format = formatNumber(number, "RFC3966", metadata);
  var endIndex = rfc3966Format.indexOf(";");
  if (endIndex < 0) {
    endIndex = rfc3966Format.length;
  }
  var startIndex = rfc3966Format.indexOf("-") + 1;
  return rfc3966Format.slice(startIndex, endIndex).split("-");
}
function allNumberGroupsAreExactlyPresent(metadata, number, normalizedCandidate, formattedNumberGroups) {
  throw new Error("This part of code hasn't been ported");
  var candidateGroups = normalizedCandidate.split(NON_DIGITS_PATTERN);
  var candidateNumberGroupIndex = number.hasExtension() ? candidateGroups.length - 2 : candidateGroups.length - 1;
  if (candidateGroups.length == 1 || candidateGroups[candidateNumberGroupIndex].contains(util.getNationalSignificantNumber(number))) {
    return true;
  }
  var formattedNumberGroupIndex = formattedNumberGroups.length - 1;
  while (formattedNumberGroupIndex > 0 && candidateNumberGroupIndex >= 0) {
    if (candidateGroups[candidateNumberGroupIndex] !== formattedNumberGroups[formattedNumberGroupIndex]) {
      return false;
    }
    formattedNumberGroupIndex--;
    candidateNumberGroupIndex--;
  }
  return candidateNumberGroupIndex >= 0 && endsWith(candidateGroups[candidateNumberGroupIndex], formattedNumberGroups[0]);
}
function allNumberGroupsRemainGrouped(metadata, number, normalizedCandidate, formattedNumberGroups) {
  throw new Error("This part of code hasn't been ported");
  var fromIndex = 0;
  if (number.getCountryCodeSource() !== CountryCodeSource.FROM_DEFAULT_COUNTRY) {
    var countryCode = String(number.getCountryCode());
    fromIndex = normalizedCandidate.indexOf(countryCode) + countryCode.length();
  }
  for (var i = 0; i < formattedNumberGroups.length; i++) {
    fromIndex = normalizedCandidate.indexOf(formattedNumberGroups[i], fromIndex);
    if (fromIndex < 0) {
      return false;
    }
    fromIndex += formattedNumberGroups[i].length();
    if (i == 0 && fromIndex < normalizedCandidate.length()) {
      var region = util.getRegionCodeForCountryCode(number.getCountryCode());
      if (util.getNddPrefixForRegion(region, true) != null && Character.isDigit(normalizedCandidate.charAt(fromIndex))) {
        var nationalSignificantNumber = util.getNationalSignificantNumber(number);
        return startsWith(normalizedCandidate.slice(fromIndex - formattedNumberGroups[i].length), nationalSignificantNumber);
      }
    }
  }
  return normalizedCandidate.slice(fromIndex).contains(number.getExtension());
}

// node_modules/libphonenumber-js/es6/findNumbers/parsePreCandidate.js
var SECOND_NUMBER_START_PATTERN = /[\\/] *x/;
function parsePreCandidate(candidate) {
  return trimAfterFirstMatch(SECOND_NUMBER_START_PATTERN, candidate);
}

// node_modules/libphonenumber-js/es6/findNumbers/isValidPreCandidate.js
var SLASH_SEPARATED_DATES = /(?:(?:[0-3]?\d\/[01]?\d)|(?:[01]?\d\/[0-3]?\d))\/(?:[12]\d)?\d{2}/;
var TIME_STAMPS = /[12]\d{3}[-/]?[01]\d[-/]?[0-3]\d +[0-2]\d$/;
var TIME_STAMPS_SUFFIX_LEADING = /^:[0-5]\d/;
function isValidPreCandidate(candidate, offset, text) {
  if (SLASH_SEPARATED_DATES.test(candidate)) {
    return false;
  }
  if (TIME_STAMPS.test(candidate)) {
    var followingText = text.slice(offset + candidate.length);
    if (TIME_STAMPS_SUFFIX_LEADING.test(followingText)) {
      return false;
    }
  }
  return true;
}

// node_modules/libphonenumber-js/es6/findNumbers/isValidCandidate.js
var OPENING_PARENS = "(\\[（［";
var CLOSING_PARENS = ")\\]）］";
var NON_PARENS = "[^".concat(OPENING_PARENS).concat(CLOSING_PARENS, "]");
var LEAD_CLASS = "[".concat(OPENING_PARENS).concat(PLUS_CHARS, "]");
var LEAD_CLASS_LEADING = new RegExp("^" + LEAD_CLASS);
var BRACKET_PAIR_LIMIT = limit(0, 3);
var MATCHING_BRACKETS_ENTIRE = new RegExp("^(?:[" + OPENING_PARENS + "])?(?:" + NON_PARENS + "+[" + CLOSING_PARENS + "])?" + NON_PARENS + "+(?:[" + OPENING_PARENS + "]" + NON_PARENS + "+[" + CLOSING_PARENS + "])" + BRACKET_PAIR_LIMIT + NON_PARENS + "*$");
var PUB_PAGES = /\d{1,5}-+\d{1,5}\s{0,4}\(\d{1,4}/;
function isValidCandidate(candidate, offset, text, leniency) {
  if (!MATCHING_BRACKETS_ENTIRE.test(candidate) || PUB_PAGES.test(candidate)) {
    return;
  }
  if (leniency !== "POSSIBLE") {
    if (offset > 0 && !LEAD_CLASS_LEADING.test(candidate)) {
      var previousChar = text[offset - 1];
      if (isInvalidPunctuationSymbol(previousChar) || isLatinLetter(previousChar)) {
        return false;
      }
    }
    var lastCharIndex = offset + candidate.length;
    if (lastCharIndex < text.length) {
      var nextChar = text[lastCharIndex];
      if (isInvalidPunctuationSymbol(nextChar) || isLatinLetter(nextChar)) {
        return false;
      }
    }
  }
  return true;
}

// node_modules/libphonenumber-js/es6/PhoneNumberMatcher.js
function _createForOfIteratorHelperLoose8(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray9(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray9(o, minLen);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE4 = false;
var EXTN_PATTERNS_FOR_MATCHING = createExtensionPattern("matching");
var INNER_MATCHES = [
  // Breaks on the slash - e.g. "651-234-2345/332-445-1234"
  "\\/+(.*)/",
  // Note that the bracket here is inside the capturing group, since we consider it part of the
  // phone number. Will match a pattern like "(650) 223 3345 (754) 223 3321".
  "(\\([^(]*)",
  // Breaks on a hyphen - e.g. "12345 - 332-445-1234 is my number."
  // We require a space on either side of the hyphen for it to be considered a separator.
  "(?:".concat(pZ, "-|-").concat(pZ, ")").concat(pZ, "*(.+)"),
  // Various types of wide hyphens. Note we have decided not to enforce a space here, since it's
  // possible that it's supposed to be used to break two numbers without spaces, and we haven't
  // seen many instances of it used within a number.
  "[‒-―－]".concat(pZ, "*(.+)"),
  // Breaks on a full stop - e.g. "12345. 332-445-1234 is my number."
  "\\.+".concat(pZ, "*([^.]+)"),
  // Breaks on space - e.g. "3324451234 8002341234"
  "".concat(pZ, "+(").concat(PZ, "+)")
];
var leadLimit = limit(0, 2);
var punctuationLimit = limit(0, 4);
var digitBlockLimit = MAX_LENGTH_FOR_NSN + MAX_LENGTH_COUNTRY_CODE;
var blockLimit = limit(0, digitBlockLimit);
var punctuation = "[".concat(VALID_PUNCTUATION, "]") + punctuationLimit;
var digitSequence = pNd + limit(1, digitBlockLimit);
var PATTERN = "(?:" + LEAD_CLASS + punctuation + ")" + leadLimit + digitSequence + "(?:" + punctuation + digitSequence + ")" + blockLimit + "(?:" + EXTN_PATTERNS_FOR_MATCHING + ")?";
var UNWANTED_END_CHAR_PATTERN = new RegExp("[^".concat(_pN).concat(_pL, "#]+$"));
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
var PhoneNumberMatcher = function() {
  function PhoneNumberMatcher2() {
    var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var metadata = arguments.length > 2 ? arguments[2] : void 0;
    _classCallCheck6(this, PhoneNumberMatcher2);
    options = {
      v2: options.v2,
      defaultCallingCode: options.defaultCallingCode,
      defaultCountry: options.defaultCountry && isSupportedCountry(options.defaultCountry, metadata) ? options.defaultCountry : void 0,
      leniency: options.leniency || (options.extended ? "POSSIBLE" : "VALID"),
      maxTries: options.maxTries || MAX_SAFE_INTEGER
    };
    if (!options.leniency) {
      throw new TypeError("`leniency` is required");
    }
    if (options.leniency !== "POSSIBLE" && options.leniency !== "VALID") {
      throw new TypeError('Invalid `leniency`: "'.concat(options.leniency, '". Supported values: "POSSIBLE", "VALID".'));
    }
    if (options.maxTries < 0) {
      throw new TypeError("`maxTries` must be `>= 0`");
    }
    this.text = text;
    this.options = options;
    this.metadata = metadata;
    this.leniency = Leniency_default[options.leniency];
    if (!this.leniency) {
      throw new TypeError('Unknown leniency: "'.concat(options.leniency, '"'));
    }
    this.maxTries = options.maxTries;
    this.PATTERN = new RegExp(PATTERN, "ig");
    this.state = "NOT_READY";
    this.searchIndex = 0;
    this.regExpCache = new RegExpCache(32);
  }
  _createClass6(PhoneNumberMatcher2, [{
    key: "find",
    value: function find() {
      var matches;
      while (this.maxTries > 0 && (matches = this.PATTERN.exec(this.text)) !== null) {
        var candidate = matches[0];
        var offset = matches.index;
        candidate = parsePreCandidate(candidate);
        if (isValidPreCandidate(candidate, offset, this.text)) {
          var match = (
            // Try to come up with a valid match given the entire candidate.
            this.parseAndVerify(candidate, offset, this.text) || this.extractInnerMatch(candidate, offset, this.text)
          );
          if (match) {
            if (this.options.v2) {
              return {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                number: match.phoneNumber
              };
            } else {
              var phoneNumber = match.phoneNumber;
              var result2 = {
                startsAt: match.startsAt,
                endsAt: match.endsAt,
                phone: phoneNumber.nationalNumber
              };
              if (phoneNumber.country) {
                if (USE_NON_GEOGRAPHIC_COUNTRY_CODE4 && country === "001") {
                  result2.countryCallingCode = phoneNumber.countryCallingCode;
                } else {
                  result2.country = phoneNumber.country;
                }
              } else {
                result2.countryCallingCode = phoneNumber.countryCallingCode;
              }
              if (phoneNumber.ext) {
                result2.ext = phoneNumber.ext;
              }
              return result2;
            }
          }
        }
        this.maxTries--;
      }
    }
    /**
     * Attempts to extract a match from `substring`
     * if the substring itself does not qualify as a match.
     */
  }, {
    key: "extractInnerMatch",
    value: function extractInnerMatch(substring, offset, text) {
      for (var _iterator = _createForOfIteratorHelperLoose8(INNER_MATCHES), _step; !(_step = _iterator()).done; ) {
        var innerMatchPattern = _step.value;
        var isFirstMatch = true;
        var candidateMatch = void 0;
        var innerMatchRegExp = new RegExp(innerMatchPattern, "g");
        while (this.maxTries > 0 && (candidateMatch = innerMatchRegExp.exec(substring)) !== null) {
          if (isFirstMatch) {
            var _candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, substring.slice(0, candidateMatch.index));
            var _match2 = this.parseAndVerify(_candidate, offset, text);
            if (_match2) {
              return _match2;
            }
            this.maxTries--;
            isFirstMatch = false;
          }
          var candidate = trimAfterFirstMatch(UNWANTED_END_CHAR_PATTERN, candidateMatch[1]);
          var candidateIndexGuess = substring.indexOf(candidate, candidateMatch.index);
          var match = this.parseAndVerify(candidate, offset + candidateIndexGuess, text);
          if (match) {
            return match;
          }
          this.maxTries--;
        }
      }
    }
    /**
     * Parses a phone number from the `candidate` using `parse` and
     * verifies it matches the requested `leniency`. If parsing and verification succeed,
     * a corresponding `PhoneNumberMatch` is returned, otherwise this method returns `null`.
     *
     * @param candidate  the candidate match
     * @param offset  the offset of {@code candidate} within {@link #text}
     * @return  the parsed and validated phone number match, or null
     */
  }, {
    key: "parseAndVerify",
    value: function parseAndVerify(candidate, offset, text) {
      if (!isValidCandidate(candidate, offset, text, this.options.leniency)) {
        return;
      }
      var phoneNumber = parsePhoneNumber3(candidate, {
        extended: true,
        defaultCountry: this.options.defaultCountry,
        defaultCallingCode: this.options.defaultCallingCode
      }, this.metadata);
      if (!phoneNumber) {
        return;
      }
      if (!phoneNumber.isPossible()) {
        return;
      }
      if (this.leniency(phoneNumber, {
        candidate,
        defaultCountry: this.options.defaultCountry,
        metadata: this.metadata,
        regExpCache: this.regExpCache
      })) {
        return {
          startsAt: offset,
          endsAt: offset + candidate.length,
          phoneNumber
        };
      }
    }
  }, {
    key: "hasNext",
    value: function hasNext() {
      if (this.state === "NOT_READY") {
        this.lastMatch = this.find();
        if (this.lastMatch) {
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
      var result2 = this.lastMatch;
      this.lastMatch = null;
      this.state = "NOT_READY";
      return result2;
    }
  }]);
  return PhoneNumberMatcher2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeState.js
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties7(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var AsYouTypeState = function() {
  function AsYouTypeState2(_ref) {
    var onCountryChange = _ref.onCountryChange, onCallingCodeChange = _ref.onCallingCodeChange;
    _classCallCheck7(this, AsYouTypeState2);
    this.onCountryChange = onCountryChange;
    this.onCallingCodeChange = onCallingCodeChange;
  }
  _createClass7(AsYouTypeState2, [{
    key: "reset",
    value: function reset(_ref2) {
      var country2 = _ref2.country, callingCode = _ref2.callingCode;
      this.international = false;
      this.missingPlus = false;
      this.IDDPrefix = void 0;
      this.callingCode = void 0;
      this.digits = "";
      this.resetNationalSignificantNumber();
      this.initCountryAndCallingCode(country2, callingCode);
    }
  }, {
    key: "resetNationalSignificantNumber",
    value: function resetNationalSignificantNumber() {
      this.nationalSignificantNumber = this.getNationalDigits();
      this.nationalSignificantNumberMatchesInput = true;
      this.nationalPrefix = void 0;
      this.carrierCode = void 0;
      this.complexPrefixBeforeNationalSignificantNumber = void 0;
    }
  }, {
    key: "update",
    value: function update(properties) {
      for (var _i = 0, _Object$keys = Object.keys(properties); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        this[key] = properties[key];
      }
    }
  }, {
    key: "initCountryAndCallingCode",
    value: function initCountryAndCallingCode(country2, callingCode) {
      this.setCountry(country2);
      this.setCallingCode(callingCode);
    }
  }, {
    key: "setCountry",
    value: function setCountry(country2) {
      this.country = country2;
      this.onCountryChange(country2);
    }
  }, {
    key: "setCallingCode",
    value: function setCallingCode(callingCode) {
      this.callingCode = callingCode;
      this.onCallingCodeChange(callingCode, this.country);
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(country2, callingCode) {
      this.international = true;
      this.initCountryAndCallingCode(country2, callingCode);
    }
  }, {
    key: "appendDigits",
    value: function appendDigits(nextDigits) {
      this.digits += nextDigits;
    }
  }, {
    key: "appendNationalSignificantNumberDigits",
    value: function appendNationalSignificantNumberDigits(nextDigits) {
      this.nationalSignificantNumber += nextDigits;
    }
    /**
     * Returns the part of `this.digits` that corresponds to the national number.
     * Basically, all digits that have been input by the user, except for the
     * international prefix and the country calling code part
     * (if the number is an international one).
     * @return {string}
     */
  }, {
    key: "getNationalDigits",
    value: function getNationalDigits() {
      if (this.international) {
        return this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0));
      }
      return this.digits;
    }
  }, {
    key: "getDigitsWithoutInternationalPrefix",
    value: function getDigitsWithoutInternationalPrefix() {
      if (this.international) {
        if (this.IDDPrefix) {
          return this.digits.slice(this.IDDPrefix.length);
        }
      }
      return this.digits;
    }
  }]);
  return AsYouTypeState2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.util.js
function _createForOfIteratorHelperLoose9(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray10(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray10(o, minLen);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var DIGIT_PLACEHOLDER = "x";
var DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
function repeat2(string, times) {
  if (times < 1) {
    return "";
  }
  var result2 = "";
  while (times > 1) {
    if (times & 1) {
      result2 += string;
    }
    times >>= 1;
    string += string;
  }
  return result2 + string;
}
function cutAndStripNonPairedParens(string, cutBeforeIndex) {
  if (string[cutBeforeIndex] === ")") {
    cutBeforeIndex++;
  }
  return stripNonPairedParens(string.slice(0, cutBeforeIndex));
}
function stripNonPairedParens(string) {
  var dangling_braces = [];
  var i = 0;
  while (i < string.length) {
    if (string[i] === "(") {
      dangling_braces.push(i);
    } else if (string[i] === ")") {
      dangling_braces.pop();
    }
    i++;
  }
  var start = 0;
  var cleared_string = "";
  dangling_braces.push(string.length);
  for (var _i = 0, _dangling_braces = dangling_braces; _i < _dangling_braces.length; _i++) {
    var index = _dangling_braces[_i];
    cleared_string += string.slice(start, index);
    start = index + 1;
  }
  return cleared_string;
}
function populateTemplateWithDigits(template, position, digits) {
  for (var _iterator2 = _createForOfIteratorHelperLoose9(digits.split("")), _step2; !(_step2 = _iterator2()).done; ) {
    var digit = _step2.value;
    if (template.slice(position + 1).search(DIGIT_PLACEHOLDER_MATCHER) < 0) {
      return;
    }
    position = template.search(DIGIT_PLACEHOLDER_MATCHER);
    template = template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
  }
  return [template, position];
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.complete.js
function formatCompleteNumber(state, format, _ref) {
  var metadata = _ref.metadata, shouldTryNationalPrefixFormattingRule = _ref.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref.getSeparatorAfterNationalPrefix;
  var matcher = new RegExp("^(?:".concat(format.pattern(), ")$"));
  if (matcher.test(state.nationalSignificantNumber)) {
    return formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, {
      metadata,
      shouldTryNationalPrefixFormattingRule,
      getSeparatorAfterNationalPrefix
    });
  }
}
function canFormatCompleteNumber(nationalSignificantNumber, metadata) {
  return checkNumberLength(nationalSignificantNumber, metadata) === "IS_POSSIBLE";
}
function formatNationalNumberWithAndWithoutNationalPrefixFormattingRule(state, format, _ref2) {
  var metadata = _ref2.metadata, shouldTryNationalPrefixFormattingRule = _ref2.shouldTryNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref2.getSeparatorAfterNationalPrefix;
  var nationalSignificantNumber = state.nationalSignificantNumber, international = state.international, nationalPrefix = state.nationalPrefix, carrierCode = state.carrierCode;
  if (shouldTryNationalPrefixFormattingRule(format)) {
    var formattedNumber = formatNationalNumber2(state, format, {
      useNationalPrefixFormattingRule: true,
      getSeparatorAfterNationalPrefix,
      metadata
    });
    if (formattedNumber) {
      return formattedNumber;
    }
  }
  return formatNationalNumber2(state, format, {
    useNationalPrefixFormattingRule: false,
    getSeparatorAfterNationalPrefix,
    metadata
  });
}
function formatNationalNumber2(state, format, _ref3) {
  var metadata = _ref3.metadata, useNationalPrefixFormattingRule = _ref3.useNationalPrefixFormattingRule, getSeparatorAfterNationalPrefix = _ref3.getSeparatorAfterNationalPrefix;
  var formattedNationalNumber = formatNationalNumberUsingFormat(state.nationalSignificantNumber, format, {
    carrierCode: state.carrierCode,
    useInternationalFormat: state.international,
    withNationalPrefix: useNationalPrefixFormattingRule,
    metadata
  });
  if (!useNationalPrefixFormattingRule) {
    if (state.nationalPrefix) {
      formattedNationalNumber = state.nationalPrefix + getSeparatorAfterNationalPrefix(format) + formattedNationalNumber;
    } else if (state.complexPrefixBeforeNationalSignificantNumber) {
      formattedNationalNumber = state.complexPrefixBeforeNationalSignificantNumber + " " + formattedNationalNumber;
    }
  }
  if (isValidFormattedNationalNumber(formattedNationalNumber, state)) {
    return formattedNationalNumber;
  }
}
function isValidFormattedNationalNumber(formattedNationalNumber, state) {
  return parseDigits(formattedNationalNumber) === state.getNationalDigits();
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternParser.js
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var PatternParser = function() {
  function PatternParser2() {
    _classCallCheck8(this, PatternParser2);
  }
  _createClass8(PatternParser2, [{
    key: "parse",
    value: function parse2(pattern) {
      this.context = [{
        or: true,
        instructions: []
      }];
      this.parsePattern(pattern);
      if (this.context.length !== 1) {
        throw new Error("Non-finalized contexts left when pattern parse ended");
      }
      var _this$context$ = this.context[0], branches = _this$context$.branches, instructions = _this$context$.instructions;
      if (branches) {
        return {
          op: "|",
          args: branches.concat([expandSingleElementArray(instructions)])
        };
      }
      if (instructions.length === 0) {
        throw new Error("Pattern is required");
      }
      if (instructions.length === 1) {
        return instructions[0];
      }
      return instructions;
    }
  }, {
    key: "startContext",
    value: function startContext(context) {
      this.context.push(context);
    }
  }, {
    key: "endContext",
    value: function endContext() {
      this.context.pop();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context[this.context.length - 1];
    }
  }, {
    key: "parsePattern",
    value: function parsePattern(pattern) {
      if (!pattern) {
        throw new Error("Pattern is required");
      }
      var match = pattern.match(OPERATOR);
      if (!match) {
        if (ILLEGAL_CHARACTER_REGEXP.test(pattern)) {
          throw new Error("Illegal characters found in a pattern: ".concat(pattern));
        }
        this.getContext().instructions = this.getContext().instructions.concat(pattern.split(""));
        return;
      }
      var operator = match[1];
      var before = pattern.slice(0, match.index);
      var rightPart = pattern.slice(match.index + operator.length);
      switch (operator) {
        case "(?:":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            or: true,
            instructions: [],
            branches: []
          });
          break;
        case ")":
          if (!this.getContext().or) {
            throw new Error('")" operator must be preceded by "(?:" operator');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (this.getContext().instructions.length === 0) {
            throw new Error('No instructions found after "|" operator in an "or" group');
          }
          var _this$getContext = this.getContext(), branches = _this$getContext.branches;
          branches.push(expandSingleElementArray(this.getContext().instructions));
          this.endContext();
          this.getContext().instructions.push({
            op: "|",
            args: branches
          });
          break;
        case "|":
          if (!this.getContext().or) {
            throw new Error('"|" operator can only be used inside "or" groups');
          }
          if (before) {
            this.parsePattern(before);
          }
          if (!this.getContext().branches) {
            if (this.context.length === 1) {
              this.getContext().branches = [];
            } else {
              throw new Error('"branches" not found in an "or" group context');
            }
          }
          this.getContext().branches.push(expandSingleElementArray(this.getContext().instructions));
          this.getContext().instructions = [];
          break;
        case "[":
          if (before) {
            this.parsePattern(before);
          }
          this.startContext({
            oneOfSet: true
          });
          break;
        case "]":
          if (!this.getContext().oneOfSet) {
            throw new Error('"]" operator must be preceded by "[" operator');
          }
          this.endContext();
          this.getContext().instructions.push({
            op: "[]",
            args: parseOneOfSet(before)
          });
          break;
        default:
          throw new Error("Unknown operator: ".concat(operator));
      }
      if (rightPart) {
        this.parsePattern(rightPart);
      }
    }
  }]);
  return PatternParser2;
}();
function parseOneOfSet(pattern) {
  var values = [];
  var i = 0;
  while (i < pattern.length) {
    if (pattern[i] === "-") {
      if (i === 0 || i === pattern.length - 1) {
        throw new Error("Couldn't parse a one-of set pattern: ".concat(pattern));
      }
      var prevValue = pattern[i - 1].charCodeAt(0) + 1;
      var nextValue = pattern[i + 1].charCodeAt(0) - 1;
      var value = prevValue;
      while (value <= nextValue) {
        values.push(String.fromCharCode(value));
        value++;
      }
    } else {
      values.push(pattern[i]);
    }
    i++;
  }
  return values;
}
var ILLEGAL_CHARACTER_REGEXP = /[\(\)\[\]\?\:\|]/;
var OPERATOR = new RegExp(
  // any of:
  "(\\||\\(\\?\\:|\\)|\\[|\\])"
);
function expandSingleElementArray(array) {
  if (array.length === 1) {
    return array[0];
  }
  return array;
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.js
function _createForOfIteratorHelperLoose10(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray11(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray11(o, minLen);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var PatternMatcher = function() {
  function PatternMatcher2(pattern) {
    _classCallCheck9(this, PatternMatcher2);
    this.matchTree = new PatternParser().parse(pattern);
  }
  _createClass9(PatternMatcher2, [{
    key: "match",
    value: function match(string) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, allowOverflow = _ref.allowOverflow;
      if (!string) {
        throw new Error("String is required");
      }
      var result2 = _match(string.split(""), this.matchTree, true);
      if (result2 && result2.match) {
        delete result2.matchedChars;
      }
      if (result2 && result2.overflow) {
        if (!allowOverflow) {
          return;
        }
      }
      return result2;
    }
  }]);
  return PatternMatcher2;
}();
function _match(characters, tree, last) {
  if (typeof tree === "string") {
    var characterString = characters.join("");
    if (tree.indexOf(characterString) === 0) {
      if (characters.length === tree.length) {
        return {
          match: true,
          matchedChars: characters
        };
      }
      return {
        partialMatch: true
        // matchedChars: characters
      };
    }
    if (characterString.indexOf(tree) === 0) {
      if (last) {
        if (characters.length > tree.length) {
          return {
            overflow: true
          };
        }
      }
      return {
        match: true,
        matchedChars: characters.slice(0, tree.length)
      };
    }
    return;
  }
  if (Array.isArray(tree)) {
    var restCharacters = characters.slice();
    var i = 0;
    while (i < tree.length) {
      var subtree = tree[i];
      var result2 = _match(restCharacters, subtree, last && i === tree.length - 1);
      if (!result2) {
        return;
      } else if (result2.overflow) {
        return result2;
      } else if (result2.match) {
        restCharacters = restCharacters.slice(result2.matchedChars.length);
        if (restCharacters.length === 0) {
          if (i === tree.length - 1) {
            return {
              match: true,
              matchedChars: characters
            };
          } else {
            return {
              partialMatch: true
              // matchedChars: characters
            };
          }
        }
      } else {
        if (result2.partialMatch) {
          return {
            partialMatch: true
            // matchedChars: characters
          };
        } else {
          throw new Error("Unsupported match result:\n".concat(JSON.stringify(result2, null, 2)));
        }
      }
      i++;
    }
    if (last) {
      return {
        overflow: true
      };
    }
    return {
      match: true,
      matchedChars: characters.slice(0, characters.length - restCharacters.length)
    };
  }
  switch (tree.op) {
    case "|":
      var partialMatch;
      for (var _iterator = _createForOfIteratorHelperLoose10(tree.args), _step; !(_step = _iterator()).done; ) {
        var branch = _step.value;
        var _result = _match(characters, branch, last);
        if (_result) {
          if (_result.overflow) {
            return _result;
          } else if (_result.match) {
            return {
              match: true,
              matchedChars: _result.matchedChars
            };
          } else {
            if (_result.partialMatch) {
              partialMatch = true;
            } else {
              throw new Error("Unsupported match result:\n".concat(JSON.stringify(_result, null, 2)));
            }
          }
        }
      }
      if (partialMatch) {
        return {
          partialMatch: true
          // matchedChars: ...
        };
      }
      return;
    case "[]":
      for (var _iterator2 = _createForOfIteratorHelperLoose10(tree.args), _step2; !(_step2 = _iterator2()).done; ) {
        var _char = _step2.value;
        if (characters[0] === _char) {
          if (characters.length === 1) {
            return {
              match: true,
              matchedChars: characters
            };
          }
          if (last) {
            return {
              overflow: true
            };
          }
          return {
            match: true,
            matchedChars: [_char]
          };
        }
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(tree));
  }
}

// node_modules/libphonenumber-js/es6/AsYouTypeFormatter.js
function _createForOfIteratorHelperLoose11(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray12(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function() {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray12(o, minLen);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties10(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var DUMMY_DIGIT = "9";
var LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
var LONGEST_DUMMY_PHONE_NUMBER = repeat2(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);
var NATIONAL_PREFIX_SEPARATORS_PATTERN = /[- ]/;
var SUPPORT_LEGACY_FORMATTING_PATTERNS = true;
var CREATE_CHARACTER_CLASS_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\[([^\[\]])*\]/g;
};
var CREATE_STANDALONE_DIGIT_PATTERN = SUPPORT_LEGACY_FORMATTING_PATTERNS && function() {
  return /\d(?=[^,}][^,}])/g;
};
var NON_ALTERING_FORMAT_REG_EXP = new RegExp("[" + VALID_PUNCTUATION + "]*\\$1[" + VALID_PUNCTUATION + "]*(\\$\\d[" + VALID_PUNCTUATION + "]*)*$");
var MIN_LEADING_DIGITS_LENGTH = 3;
var AsYouTypeFormatter = function() {
  function AsYouTypeFormatter2(_ref) {
    var state = _ref.state, metadata = _ref.metadata;
    _classCallCheck10(this, AsYouTypeFormatter2);
    this.metadata = metadata;
    this.resetFormat();
  }
  _createClass10(AsYouTypeFormatter2, [{
    key: "resetFormat",
    value: function resetFormat() {
      this.chosenFormat = void 0;
      this.template = void 0;
      this.nationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplate = void 0;
      this.populatedNationalNumberTemplatePosition = -1;
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan, state) {
      this.resetFormat();
      if (numberingPlan) {
        this.isNANP = numberingPlan.callingCode() === "1";
        this.matchingFormats = numberingPlan.formats();
        if (state.nationalSignificantNumber) {
          this.narrowDownMatchingFormats(state);
        }
      } else {
        this.isNANP = void 0;
        this.matchingFormats = [];
      }
    }
    /**
     * Formats an updated phone number.
     * @param  {string} nextDigits — Additional phone number digits.
     * @param  {object} state — `AsYouType` state.
     * @return {[string]} Returns undefined if the updated phone number can't be formatted using any of the available formats.
     */
  }, {
    key: "format",
    value: function format(nextDigits, state) {
      var _this = this;
      if (canFormatCompleteNumber(state.nationalSignificantNumber, this.metadata)) {
        for (var _iterator = _createForOfIteratorHelperLoose11(this.matchingFormats), _step; !(_step = _iterator()).done; ) {
          var format2 = _step.value;
          var formattedCompleteNumber = formatCompleteNumber(state, format2, {
            metadata: this.metadata,
            shouldTryNationalPrefixFormattingRule: function shouldTryNationalPrefixFormattingRule(format3) {
              return _this.shouldTryNationalPrefixFormattingRule(format3, {
                international: state.international,
                nationalPrefix: state.nationalPrefix
              });
            },
            getSeparatorAfterNationalPrefix: function getSeparatorAfterNationalPrefix(format3) {
              return _this.getSeparatorAfterNationalPrefix(format3);
            }
          });
          if (formattedCompleteNumber) {
            this.resetFormat();
            this.chosenFormat = format2;
            this.setNationalNumberTemplate(formattedCompleteNumber.replace(/\d/g, DIGIT_PLACEHOLDER), state);
            this.populatedNationalNumberTemplate = formattedCompleteNumber;
            this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(DIGIT_PLACEHOLDER);
            return formattedCompleteNumber;
          }
        }
      }
      return this.formatNationalNumberWithNextDigits(nextDigits, state);
    }
    // Formats the next phone number digits.
  }, {
    key: "formatNationalNumberWithNextDigits",
    value: function formatNationalNumberWithNextDigits(nextDigits, state) {
      var previouslyChosenFormat = this.chosenFormat;
      var newlyChosenFormat = this.chooseFormat(state);
      if (newlyChosenFormat) {
        if (newlyChosenFormat === previouslyChosenFormat) {
          return this.formatNextNationalNumberDigits(nextDigits);
        } else {
          return this.formatNextNationalNumberDigits(state.getNationalDigits());
        }
      }
    }
  }, {
    key: "narrowDownMatchingFormats",
    value: function narrowDownMatchingFormats(_ref2) {
      var _this2 = this;
      var nationalSignificantNumber = _ref2.nationalSignificantNumber, nationalPrefix = _ref2.nationalPrefix, international = _ref2.international;
      var leadingDigits = nationalSignificantNumber;
      var leadingDigitsPatternIndex = leadingDigits.length - MIN_LEADING_DIGITS_LENGTH;
      if (leadingDigitsPatternIndex < 0) {
        leadingDigitsPatternIndex = 0;
      }
      this.matchingFormats = this.matchingFormats.filter(function(format) {
        return _this2.formatSuits(format, international, nationalPrefix) && _this2.formatMatches(format, leadingDigits, leadingDigitsPatternIndex);
      });
      if (this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1) {
        this.resetFormat();
      }
    }
  }, {
    key: "formatSuits",
    value: function formatSuits(format, international, nationalPrefix) {
      if (nationalPrefix && !format.usesNationalPrefix() && // !format.domesticCarrierCodeFormattingRule() &&
      !format.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) {
        return false;
      }
      if (!international && !nationalPrefix && format.nationalPrefixIsMandatoryWhenFormattingInNationalFormat()) {
        return false;
      }
      return true;
    }
  }, {
    key: "formatMatches",
    value: function formatMatches(format, leadingDigits, leadingDigitsPatternIndex) {
      var leadingDigitsPatternsCount = format.leadingDigitsPatterns().length;
      if (leadingDigitsPatternsCount === 0) {
        return true;
      }
      leadingDigitsPatternIndex = Math.min(leadingDigitsPatternIndex, leadingDigitsPatternsCount - 1);
      var leadingDigitsPattern = format.leadingDigitsPatterns()[leadingDigitsPatternIndex];
      if (leadingDigits.length < MIN_LEADING_DIGITS_LENGTH) {
        try {
          return new PatternMatcher(leadingDigitsPattern).match(leadingDigits, {
            allowOverflow: true
          }) !== void 0;
        } catch (error) {
          console.error(error);
          return true;
        }
      }
      return new RegExp("^(".concat(leadingDigitsPattern, ")")).test(leadingDigits);
    }
  }, {
    key: "getFormatFormat",
    value: function getFormatFormat(format, international) {
      return international ? format.internationalFormat() : format.format();
    }
  }, {
    key: "chooseFormat",
    value: function chooseFormat(state) {
      var _this3 = this;
      var _loop = function _loop2() {
        var format = _step2.value;
        if (_this3.chosenFormat === format) {
          return "break";
        }
        if (!NON_ALTERING_FORMAT_REG_EXP.test(_this3.getFormatFormat(format, state.international))) {
          return "continue";
        }
        if (!_this3.createTemplateForFormat(format, state)) {
          _this3.matchingFormats = _this3.matchingFormats.filter(function(_) {
            return _ !== format;
          });
          return "continue";
        }
        _this3.chosenFormat = format;
        return "break";
      };
      for (var _iterator2 = _createForOfIteratorHelperLoose11(this.matchingFormats.slice()), _step2; !(_step2 = _iterator2()).done; ) {
        var _ret = _loop();
        if (_ret === "break") break;
        if (_ret === "continue") continue;
      }
      if (!this.chosenFormat) {
        this.resetFormat();
      }
      return this.chosenFormat;
    }
  }, {
    key: "createTemplateForFormat",
    value: function createTemplateForFormat(format, state) {
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS && format.pattern().indexOf("|") >= 0) {
        return;
      }
      var template = this.getTemplateForFormat(format, state);
      if (template) {
        this.setNationalNumberTemplate(template, state);
        return true;
      }
    }
  }, {
    key: "getSeparatorAfterNationalPrefix",
    value: function getSeparatorAfterNationalPrefix(format) {
      if (this.isNANP) {
        return " ";
      }
      if (format && format.nationalPrefixFormattingRule() && NATIONAL_PREFIX_SEPARATORS_PATTERN.test(format.nationalPrefixFormattingRule())) {
        return " ";
      }
      return "";
    }
  }, {
    key: "getInternationalPrefixBeforeCountryCallingCode",
    value: function getInternationalPrefixBeforeCountryCallingCode(_ref3, options) {
      var IDDPrefix = _ref3.IDDPrefix, missingPlus = _ref3.missingPlus;
      if (IDDPrefix) {
        return options && options.spacing === false ? IDDPrefix : IDDPrefix + " ";
      }
      if (missingPlus) {
        return "";
      }
      return "+";
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(state) {
      if (!this.template) {
        return;
      }
      var index = -1;
      var i = 0;
      var internationalPrefix = state.international ? this.getInternationalPrefixBeforeCountryCallingCode(state, {
        spacing: false
      }) : "";
      while (i < internationalPrefix.length + state.getDigitsWithoutInternationalPrefix().length) {
        index = this.template.indexOf(DIGIT_PLACEHOLDER, index + 1);
        i++;
      }
      return cutAndStripNonPairedParens(this.template, index + 1);
    }
  }, {
    key: "setNationalNumberTemplate",
    value: function setNationalNumberTemplate(template, state) {
      this.nationalNumberTemplate = template;
      this.populatedNationalNumberTemplate = template;
      this.populatedNationalNumberTemplatePosition = -1;
      if (state.international) {
        this.template = this.getInternationalPrefixBeforeCountryCallingCode(state).replace(/[\d\+]/g, DIGIT_PLACEHOLDER) + repeat2(DIGIT_PLACEHOLDER, state.callingCode.length) + " " + template;
      } else {
        this.template = template;
      }
    }
    /**
     * Generates formatting template for a national phone number,
     * optionally containing a national prefix, for a format.
     * @param  {Format} format
     * @param  {string} nationalPrefix
     * @return {string}
     */
  }, {
    key: "getTemplateForFormat",
    value: function getTemplateForFormat(format, _ref4) {
      var nationalSignificantNumber = _ref4.nationalSignificantNumber, international = _ref4.international, nationalPrefix = _ref4.nationalPrefix, complexPrefixBeforeNationalSignificantNumber = _ref4.complexPrefixBeforeNationalSignificantNumber;
      var pattern = format.pattern();
      if (SUPPORT_LEGACY_FORMATTING_PATTERNS) {
        pattern = pattern.replace(CREATE_CHARACTER_CLASS_PATTERN(), "\\d").replace(CREATE_STANDALONE_DIGIT_PATTERN(), "\\d");
      }
      var digits = LONGEST_DUMMY_PHONE_NUMBER.match(pattern)[0];
      if (nationalSignificantNumber.length > digits.length) {
        return;
      }
      var strictPattern = new RegExp("^" + pattern + "$");
      var nationalNumberDummyDigits = nationalSignificantNumber.replace(/\d/g, DUMMY_DIGIT);
      if (strictPattern.test(nationalNumberDummyDigits)) {
        digits = nationalNumberDummyDigits;
      }
      var numberFormat = this.getFormatFormat(format, international);
      var nationalPrefixIncludedInTemplate;
      if (this.shouldTryNationalPrefixFormattingRule(format, {
        international,
        nationalPrefix
      })) {
        var numberFormatWithNationalPrefix = numberFormat.replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule());
        if (parseDigits(format.nationalPrefixFormattingRule()) === (nationalPrefix || "") + parseDigits("$1")) {
          numberFormat = numberFormatWithNationalPrefix;
          nationalPrefixIncludedInTemplate = true;
          if (nationalPrefix) {
            var i = nationalPrefix.length;
            while (i > 0) {
              numberFormat = numberFormat.replace(/\d/, DIGIT_PLACEHOLDER);
              i--;
            }
          }
        }
      }
      var template = digits.replace(new RegExp(pattern), numberFormat).replace(new RegExp(DUMMY_DIGIT, "g"), DIGIT_PLACEHOLDER);
      if (!nationalPrefixIncludedInTemplate) {
        if (complexPrefixBeforeNationalSignificantNumber) {
          template = repeat2(DIGIT_PLACEHOLDER, complexPrefixBeforeNationalSignificantNumber.length) + " " + template;
        } else if (nationalPrefix) {
          template = repeat2(DIGIT_PLACEHOLDER, nationalPrefix.length) + this.getSeparatorAfterNationalPrefix(format) + template;
        }
      }
      if (international) {
        template = applyInternationalSeparatorStyle(template);
      }
      return template;
    }
  }, {
    key: "formatNextNationalNumberDigits",
    value: function formatNextNationalNumberDigits(digits) {
      var result2 = populateTemplateWithDigits(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, digits);
      if (!result2) {
        this.resetFormat();
        return;
      }
      this.populatedNationalNumberTemplate = result2[0];
      this.populatedNationalNumberTemplatePosition = result2[1];
      return cutAndStripNonPairedParens(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1);
    }
  }, {
    key: "shouldTryNationalPrefixFormattingRule",
    value: function shouldTryNationalPrefixFormattingRule(format, _ref5) {
      var international = _ref5.international, nationalPrefix = _ref5.nationalPrefix;
      if (format.nationalPrefixFormattingRule()) {
        var usesNationalPrefix = format.usesNationalPrefix();
        if (usesNationalPrefix && nationalPrefix || !usesNationalPrefix && !international) {
          return true;
        }
      }
    }
  }]);
  return AsYouTypeFormatter2;
}();

// node_modules/libphonenumber-js/es6/AsYouTypeParser.js
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray13(o, minLen);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties11(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART = "[" + VALID_PUNCTUATION + VALID_DIGITS + "]+";
var VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN = new RegExp("^" + VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART + "$", "i");
var VALID_FORMATTED_PHONE_NUMBER_PART = "(?:[" + PLUS_CHARS + "][" + VALID_PUNCTUATION + VALID_DIGITS + "]*|[" + VALID_PUNCTUATION + VALID_DIGITS + "]+)";
var AFTER_PHONE_NUMBER_DIGITS_END_PATTERN = new RegExp("[^" + VALID_PUNCTUATION + VALID_DIGITS + "]+.*$");
var COMPLEX_NATIONAL_PREFIX = /[^\d\[\]]/;
var AsYouTypeParser = function() {
  function AsYouTypeParser2(_ref) {
    var defaultCountry = _ref.defaultCountry, defaultCallingCode = _ref.defaultCallingCode, metadata = _ref.metadata, onNationalSignificantNumberChange = _ref.onNationalSignificantNumberChange;
    _classCallCheck11(this, AsYouTypeParser2);
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.metadata = metadata;
    this.onNationalSignificantNumberChange = onNationalSignificantNumberChange;
  }
  _createClass11(AsYouTypeParser2, [{
    key: "input",
    value: function input(text, state) {
      var _extractFormattedDigi = extractFormattedDigitsAndPlus(text), _extractFormattedDigi2 = _slicedToArray2(_extractFormattedDigi, 2), formattedDigits = _extractFormattedDigi2[0], hasPlus = _extractFormattedDigi2[1];
      var digits = parseDigits(formattedDigits);
      var justLeadingPlus;
      if (hasPlus) {
        if (!state.digits) {
          state.startInternationalNumber();
          if (!digits) {
            justLeadingPlus = true;
          }
        }
      }
      if (digits) {
        this.inputDigits(digits, state);
      }
      return {
        digits,
        justLeadingPlus
      };
    }
    /**
     * Inputs "next" phone number digits.
     * @param  {string} digits
     * @return {string} [formattedNumber] Formatted national phone number (if it can be formatted at this stage). Returning `undefined` means "don't format the national phone number at this stage".
     */
  }, {
    key: "inputDigits",
    value: function inputDigits(nextDigits, state) {
      var digits = state.digits;
      var hasReceivedThreeLeadingDigits = digits.length < 3 && digits.length + nextDigits.length >= 3;
      state.appendDigits(nextDigits);
      if (hasReceivedThreeLeadingDigits) {
        this.extractIddPrefix(state);
      }
      if (this.isWaitingForCountryCallingCode(state)) {
        if (!this.extractCountryCallingCode(state)) {
          return;
        }
      } else {
        state.appendNationalSignificantNumberDigits(nextDigits);
      }
      if (!state.international) {
        if (!this.hasExtractedNationalSignificantNumber) {
          this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
            return state.update(stateUpdate);
          });
        }
      }
    }
  }, {
    key: "isWaitingForCountryCallingCode",
    value: function isWaitingForCountryCallingCode(_ref2) {
      var international = _ref2.international, callingCode = _ref2.callingCode;
      return international && !callingCode;
    }
    // Extracts a country calling code from a number
    // being entered in internatonal format.
  }, {
    key: "extractCountryCallingCode",
    value: function extractCountryCallingCode2(state) {
      var _extractCountryCallin = extractCountryCallingCode("+" + state.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      if (countryCallingCode) {
        state.setCallingCode(countryCallingCode);
        state.update({
          nationalSignificantNumber: number
        });
        return true;
      }
    }
  }, {
    key: "reset",
    value: function reset(numberingPlan) {
      if (numberingPlan) {
        this.hasSelectedNumberingPlan = true;
        var nationalPrefixForParsing = numberingPlan._nationalPrefixForParsing();
        this.couldPossiblyExtractAnotherNationalSignificantNumber = nationalPrefixForParsing && COMPLEX_NATIONAL_PREFIX.test(nationalPrefixForParsing);
      } else {
        this.hasSelectedNumberingPlan = void 0;
        this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0;
      }
    }
    /**
     * Extracts a national (significant) number from user input.
     * Google's library is different in that it only applies `national_prefix_for_parsing`
     * and doesn't apply `national_prefix_transform_rule` after that.
     * https://github.com/google/libphonenumber/blob/a3d70b0487875475e6ad659af404943211d26456/java/libphonenumber/src/com/google/i18n/phonenumbers/AsYouTypeFormatter.java#L539
     * @return {boolean} [extracted]
     */
  }, {
    key: "extractNationalSignificantNumber",
    value: function extractNationalSignificantNumber(nationalDigits, setState) {
      if (!this.hasSelectedNumberingPlan) {
        return;
      }
      var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe.nationalPrefix, nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
      if (nationalNumber === nationalDigits) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
    /**
     * In Google's code this function is called "attempt to extract longer NDD".
     * "Some national prefixes are a substring of others", they say.
     * @return {boolean} [result] — Returns `true` if extracting a national prefix produced different results from what they were.
     */
  }, {
    key: "extractAnotherNationalSignificantNumber",
    value: function extractAnotherNationalSignificantNumber(nationalDigits, prevNationalSignificantNumber, setState) {
      if (!this.hasExtractedNationalSignificantNumber) {
        return this.extractNationalSignificantNumber(nationalDigits, setState);
      }
      if (!this.couldPossiblyExtractAnotherNationalSignificantNumber) {
        return;
      }
      var _extractNationalNumbe2 = extractNationalNumberFromPossiblyIncompleteNumber(nationalDigits, this.metadata), nationalPrefix = _extractNationalNumbe2.nationalPrefix, nationalNumber = _extractNationalNumbe2.nationalNumber, carrierCode = _extractNationalNumbe2.carrierCode;
      if (nationalNumber === prevNationalSignificantNumber) {
        return;
      }
      this.onExtractedNationalNumber(nationalPrefix, carrierCode, nationalNumber, nationalDigits, setState);
      return true;
    }
  }, {
    key: "onExtractedNationalNumber",
    value: function onExtractedNationalNumber(nationalPrefix, carrierCode, nationalSignificantNumber, nationalDigits, setState) {
      var complexPrefixBeforeNationalSignificantNumber;
      var nationalSignificantNumberMatchesInput;
      var nationalSignificantNumberIndex = nationalDigits.lastIndexOf(nationalSignificantNumber);
      if (nationalSignificantNumberIndex >= 0 && nationalSignificantNumberIndex === nationalDigits.length - nationalSignificantNumber.length) {
        nationalSignificantNumberMatchesInput = true;
        var prefixBeforeNationalNumber = nationalDigits.slice(0, nationalSignificantNumberIndex);
        if (prefixBeforeNationalNumber !== nationalPrefix) {
          complexPrefixBeforeNationalSignificantNumber = prefixBeforeNationalNumber;
        }
      }
      setState({
        nationalPrefix,
        carrierCode,
        nationalSignificantNumber,
        nationalSignificantNumberMatchesInput,
        complexPrefixBeforeNationalSignificantNumber
      });
      this.hasExtractedNationalSignificantNumber = true;
      this.onNationalSignificantNumberChange();
    }
  }, {
    key: "reExtractNationalSignificantNumber",
    value: function reExtractNationalSignificantNumber(state) {
      if (this.extractAnotherNationalSignificantNumber(state.getNationalDigits(), state.nationalSignificantNumber, function(stateUpdate) {
        return state.update(stateUpdate);
      })) {
        return true;
      }
      if (this.extractIddPrefix(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
      if (this.fixMissingPlus(state)) {
        this.extractCallingCodeAndNationalSignificantNumber(state);
        return true;
      }
    }
  }, {
    key: "extractIddPrefix",
    value: function extractIddPrefix(state) {
      var international = state.international, IDDPrefix = state.IDDPrefix, digits = state.digits, nationalSignificantNumber = state.nationalSignificantNumber;
      if (international || IDDPrefix) {
        return;
      }
      var numberWithoutIDD = stripIddPrefix(digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
      if (numberWithoutIDD !== void 0 && numberWithoutIDD !== digits) {
        state.update({
          IDDPrefix: digits.slice(0, digits.length - numberWithoutIDD.length)
        });
        this.startInternationalNumber(state, {
          country: void 0,
          callingCode: void 0
        });
        return true;
      }
    }
  }, {
    key: "fixMissingPlus",
    value: function fixMissingPlus(state) {
      if (!state.international) {
        var _extractCountryCallin2 = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(state.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata), newCallingCode = _extractCountryCallin2.countryCallingCode, number = _extractCountryCallin2.number;
        if (newCallingCode) {
          state.update({
            missingPlus: true
          });
          this.startInternationalNumber(state, {
            country: state.country,
            callingCode: newCallingCode
          });
          return true;
        }
      }
    }
  }, {
    key: "startInternationalNumber",
    value: function startInternationalNumber(state, _ref3) {
      var country2 = _ref3.country, callingCode = _ref3.callingCode;
      state.startInternationalNumber(country2, callingCode);
      if (state.nationalSignificantNumber) {
        state.resetNationalSignificantNumber();
        this.onNationalSignificantNumberChange();
        this.hasExtractedNationalSignificantNumber = void 0;
      }
    }
  }, {
    key: "extractCallingCodeAndNationalSignificantNumber",
    value: function extractCallingCodeAndNationalSignificantNumber(state) {
      if (this.extractCountryCallingCode(state)) {
        this.extractNationalSignificantNumber(state.getNationalDigits(), function(stateUpdate) {
          return state.update(stateUpdate);
        });
      }
    }
  }]);
  return AsYouTypeParser2;
}();
function extractFormattedPhoneNumber(text) {
  var startsAt = text.search(VALID_FORMATTED_PHONE_NUMBER_PART);
  if (startsAt < 0) {
    return;
  }
  text = text.slice(startsAt);
  var hasPlus;
  if (text[0] === "+") {
    hasPlus = true;
    text = text.slice("+".length);
  }
  text = text.replace(AFTER_PHONE_NUMBER_DIGITS_END_PATTERN, "");
  if (hasPlus) {
    text = "+" + text;
  }
  return text;
}
function _extractFormattedDigitsAndPlus(text) {
  var extractedNumber = extractFormattedPhoneNumber(text) || "";
  if (extractedNumber[0] === "+") {
    return [extractedNumber.slice("+".length), true];
  }
  return [extractedNumber];
}
function extractFormattedDigitsAndPlus(text) {
  var _extractFormattedDigi3 = _extractFormattedDigitsAndPlus(text), _extractFormattedDigi4 = _slicedToArray2(_extractFormattedDigi3, 2), formattedDigits = _extractFormattedDigi4[0], hasPlus = _extractFormattedDigi4[1];
  if (!VALID_FORMATTED_PHONE_NUMBER_DIGITS_PART_PATTERN.test(formattedDigits)) {
    formattedDigits = "";
  }
  return [formattedDigits, hasPlus];
}

// node_modules/libphonenumber-js/es6/AsYouType.js
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray14(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray14(o, minLen);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr)) return arr;
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties12(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE5 = false;
var AsYouType = function() {
  function AsYouType2(optionsOrDefaultCountry, metadata) {
    _classCallCheck12(this, AsYouType2);
    this.metadata = new Metadata(metadata);
    var _this$getCountryAndCa = this.getCountryAndCallingCode(optionsOrDefaultCountry), _this$getCountryAndCa2 = _slicedToArray3(_this$getCountryAndCa, 2), defaultCountry = _this$getCountryAndCa2[0], defaultCallingCode = _this$getCountryAndCa2[1];
    this.defaultCountry = defaultCountry;
    this.defaultCallingCode = defaultCallingCode;
    this.reset();
  }
  _createClass12(AsYouType2, [{
    key: "getCountryAndCallingCode",
    value: function getCountryAndCallingCode(optionsOrDefaultCountry) {
      var defaultCountry;
      var defaultCallingCode;
      if (optionsOrDefaultCountry) {
        if (isObject(optionsOrDefaultCountry)) {
          defaultCountry = optionsOrDefaultCountry.defaultCountry;
          defaultCallingCode = optionsOrDefaultCountry.defaultCallingCode;
        } else {
          defaultCountry = optionsOrDefaultCountry;
        }
      }
      if (defaultCountry && !this.metadata.hasCountry(defaultCountry)) {
        defaultCountry = void 0;
      }
      if (defaultCallingCode) {
        if (USE_NON_GEOGRAPHIC_COUNTRY_CODE5) {
          if (this.metadata.isNonGeographicCallingCode(defaultCallingCode)) {
            defaultCountry = "001";
          }
        }
      }
      return [defaultCountry, defaultCallingCode];
    }
    /**
     * Inputs "next" phone number characters.
     * @param  {string} text
     * @return {string} Formatted phone number characters that have been input so far.
     */
  }, {
    key: "input",
    value: function input(text) {
      var _this$parser$input = this.parser.input(text, this.state), digits = _this$parser$input.digits, justLeadingPlus = _this$parser$input.justLeadingPlus;
      if (justLeadingPlus) {
        this.formattedOutput = "+";
      } else if (digits) {
        this.determineTheCountryIfNeeded();
        if (this.state.nationalSignificantNumber) {
          this.formatter.narrowDownMatchingFormats(this.state);
        }
        var formattedNationalNumber;
        if (this.metadata.hasSelectedNumberingPlan()) {
          formattedNationalNumber = this.formatter.format(digits, this.state);
        }
        if (formattedNationalNumber === void 0) {
          if (this.parser.reExtractNationalSignificantNumber(this.state)) {
            this.determineTheCountryIfNeeded();
            var nationalDigits = this.state.getNationalDigits();
            if (nationalDigits) {
              formattedNationalNumber = this.formatter.format(nationalDigits, this.state);
            }
          }
        }
        this.formattedOutput = formattedNationalNumber ? this.getFullNumber(formattedNationalNumber) : this.getNonFormattedNumber();
      }
      return this.formattedOutput;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;
      this.state = new AsYouTypeState({
        onCountryChange: function onCountryChange(country2) {
          _this.country = country2;
        },
        onCallingCodeChange: function onCallingCodeChange(callingCode, country2) {
          _this.metadata.selectNumberingPlan(country2, callingCode);
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
          _this.parser.reset(_this.metadata.numberingPlan);
        }
      });
      this.formatter = new AsYouTypeFormatter({
        state: this.state,
        metadata: this.metadata
      });
      this.parser = new AsYouTypeParser({
        defaultCountry: this.defaultCountry,
        defaultCallingCode: this.defaultCallingCode,
        metadata: this.metadata,
        state: this.state,
        onNationalSignificantNumberChange: function onNationalSignificantNumberChange() {
          _this.determineTheCountryIfNeeded();
          _this.formatter.reset(_this.metadata.numberingPlan, _this.state);
        }
      });
      this.state.reset({
        country: this.defaultCountry,
        callingCode: this.defaultCallingCode
      });
      this.formattedOutput = "";
      return this;
    }
    /**
     * Returns `true` if the phone number is being input in international format.
     * In other words, returns `true` if and only if the parsed phone number starts with a `"+"`.
     * @return {boolean}
     */
  }, {
    key: "isInternational",
    value: function isInternational() {
      return this.state.international;
    }
    /**
     * Returns the "calling code" part of the phone number when it's being input
     * in an international format.
     * If no valid calling code has been entered so far, returns `undefined`.
     * @return {string} [callingCode]
     */
  }, {
    key: "getCallingCode",
    value: function getCallingCode() {
      if (this.isInternational()) {
        return this.state.callingCode;
      }
    }
    // A legacy alias.
  }, {
    key: "getCountryCallingCode",
    value: function getCountryCallingCode2() {
      return this.getCallingCode();
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * Returns `undefined` if no phone number has been input yet.
     * @return {string} [country]
     */
  }, {
    key: "getCountry",
    value: function getCountry() {
      var digits = this.state.digits;
      if (digits) {
        return this._getCountry();
      }
    }
    /**
     * Returns a two-letter country code of the phone number.
     * Returns `undefined` for "non-geographic" phone numbering plans.
     * @return {string} [country]
     */
  }, {
    key: "_getCountry",
    value: function _getCountry() {
      var country2 = this.state.country;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE5) {
        if (country2 === "001") {
          return;
        }
      }
      return country2;
    }
  }, {
    key: "determineTheCountryIfNeeded",
    value: function determineTheCountryIfNeeded() {
      if (!this.state.country || this.isCountryCallingCodeAmbiguous()) {
        this.determineTheCountry();
      }
    }
    // Prepends `+CountryCode ` in case of an international phone number
  }, {
    key: "getFullNumber",
    value: function getFullNumber(formattedNationalNumber) {
      var _this2 = this;
      if (this.isInternational()) {
        var prefix = function prefix2(text) {
          return _this2.formatter.getInternationalPrefixBeforeCountryCallingCode(_this2.state, {
            spacing: text ? true : false
          }) + text;
        };
        var callingCode = this.state.callingCode;
        if (!callingCode) {
          return prefix("".concat(this.state.getDigitsWithoutInternationalPrefix()));
        }
        if (!formattedNationalNumber) {
          return prefix(callingCode);
        }
        return prefix("".concat(callingCode, " ").concat(formattedNationalNumber));
      }
      return formattedNationalNumber;
    }
  }, {
    key: "getNonFormattedNationalNumberWithPrefix",
    value: function getNonFormattedNationalNumberWithPrefix() {
      var _this$state = this.state, nationalSignificantNumber = _this$state.nationalSignificantNumber, complexPrefixBeforeNationalSignificantNumber = _this$state.complexPrefixBeforeNationalSignificantNumber, nationalPrefix = _this$state.nationalPrefix;
      var number = nationalSignificantNumber;
      var prefix = complexPrefixBeforeNationalSignificantNumber || nationalPrefix;
      if (prefix) {
        number = prefix + number;
      }
      return number;
    }
  }, {
    key: "getNonFormattedNumber",
    value: function getNonFormattedNumber() {
      var nationalSignificantNumberMatchesInput = this.state.nationalSignificantNumberMatchesInput;
      return this.getFullNumber(nationalSignificantNumberMatchesInput ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits());
    }
  }, {
    key: "getNonFormattedTemplate",
    value: function getNonFormattedTemplate() {
      var number = this.getNonFormattedNumber();
      if (number) {
        return number.replace(/[\+\d]/g, DIGIT_PLACEHOLDER);
      }
    }
  }, {
    key: "isCountryCallingCodeAmbiguous",
    value: function isCountryCallingCodeAmbiguous() {
      var callingCode = this.state.callingCode;
      var countryCodes = this.metadata.getCountryCodesForCallingCode(callingCode);
      return countryCodes && countryCodes.length > 1;
    }
    // Determines the country of the phone number
    // entered so far based on the country phone code
    // and the national phone number.
  }, {
    key: "determineTheCountry",
    value: function determineTheCountry() {
      this.state.setCountry(getCountryByCallingCode(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
        nationalNumber: this.state.nationalSignificantNumber,
        defaultCountry: this.defaultCountry,
        metadata: this.metadata
      }));
    }
    /**
     * Returns a E.164 phone number value for the user's input.
     *
     * For example, for country `"US"` and input `"(222) 333-4444"`
     * it will return `"+12223334444"`.
     *
     * For international phone number input, it will also auto-correct
     * some minor errors such as using a national prefix when writing
     * an international phone number. For example, if the user inputs
     * `"+44 0 7400 000000"` then it will return an auto-corrected
     * `"+447400000000"` phone number value.
     *
     * Will return `undefined` if no digits have been input,
     * or when inputting a phone number in national format and no
     * default country or default "country calling code" have been set.
     *
     * @return {string} [value]
     */
  }, {
    key: "getNumberValue",
    value: function getNumberValue() {
      var _this$state2 = this.state, digits = _this$state2.digits, callingCode = _this$state2.callingCode, country2 = _this$state2.country, nationalSignificantNumber = _this$state2.nationalSignificantNumber;
      if (!digits) {
        return;
      }
      if (this.isInternational()) {
        if (callingCode) {
          return "+" + callingCode + nationalSignificantNumber;
        } else {
          return "+" + digits;
        }
      } else {
        if (country2 || callingCode) {
          var callingCode_ = country2 ? this.metadata.countryCallingCode() : callingCode;
          return "+" + callingCode_ + nationalSignificantNumber;
        }
      }
    }
    /**
     * Returns an instance of `PhoneNumber` class.
     * Will return `undefined` if no national (significant) number
     * digits have been entered so far, or if no `defaultCountry` has been
     * set and the user enters a phone number not in international format.
     */
  }, {
    key: "getNumber",
    value: function getNumber() {
      var _this$state3 = this.state, nationalSignificantNumber = _this$state3.nationalSignificantNumber, carrierCode = _this$state3.carrierCode, callingCode = _this$state3.callingCode;
      var country2 = this._getCountry();
      if (!nationalSignificantNumber) {
        return;
      }
      if (!country2 && !callingCode) {
        return;
      }
      if (country2) {
        if (country2 === this.defaultCountry) {
          var metadata = new Metadata(this.metadata.metadata);
          metadata.selectNumberingPlan(country2);
          var _callingCode = metadata.numberingPlan.callingCode();
          var ambiguousCountries = this.metadata.getCountryCodesForCallingCode(_callingCode);
          if (ambiguousCountries.length > 1) {
            var exactCountry = getCountryByNationalNumber(nationalSignificantNumber, {
              countries: ambiguousCountries,
              defaultCountry: this.defaultCountry,
              metadata: this.metadata.metadata
            });
            if (exactCountry) {
              country2 = exactCountry;
            }
          }
        }
      }
      var phoneNumber = new PhoneNumber(country2 || callingCode, nationalSignificantNumber, this.metadata.metadata);
      if (carrierCode) {
        phoneNumber.carrierCode = carrierCode;
      }
      return phoneNumber;
    }
    /**
     * Returns `true` if the phone number is "possible".
     * Is just a shortcut for `PhoneNumber.isPossible()`.
     * @return {boolean}
     */
  }, {
    key: "isPossible",
    value: function isPossible() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isPossible();
    }
    /**
     * Returns `true` if the phone number is "valid".
     * Is just a shortcut for `PhoneNumber.isValid()`.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    value: function isValid() {
      var phoneNumber = this.getNumber();
      if (!phoneNumber) {
        return false;
      }
      return phoneNumber.isValid();
    }
    /**
     * @deprecated
     * This method is used in `react-phone-number-input/source/input-control.js`
     * in versions before `3.0.16`.
     */
  }, {
    key: "getNationalNumber",
    value: function getNationalNumber() {
      return this.state.nationalSignificantNumber;
    }
    /**
     * Returns the phone number characters entered by the user.
     * @return {string}
     */
  }, {
    key: "getChars",
    value: function getChars() {
      return (this.state.international ? "+" : "") + this.state.digits;
    }
    /**
     * Returns the template for the formatted phone number.
     * @return {string}
     */
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || "";
    }
  }]);
  return AsYouType2;
}();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-utils.mjs
function tuiCreateTimePeriods(minHour = 0, maxHour = HOURS_IN_DAY, minutes = [0, 30]) {
  const timeArray = [];
  for (let i = minHour; i < maxHour; i++) {
    minutes.forEach((minute) => {
      const time = new TuiTime(i, minute);
      timeArray.push(time);
    });
  }
  return timeArray;
}
function tuiIsFlat(items) {
  return !Array.isArray(items[0]);
}
function tuiMaskito(options) {
  return tuiDirectiveBinding(MaskitoDirective, "options", options);
}
function tuiGetCallingCode(iso, metadata) {
  return metadata ? CHAR_PLUS + getCountryCallingCode(iso, metadata) : "";
}
function tuiToggleDay(days, day) {
  return (days?.find((item) => item.daySame(day)) ? days.filter((item) => !item.daySame(day)) : days?.concat(day)) || [];
}

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-slider.mjs
var _c04 = ["type", "range", "tuiSlider", ""];
var _c13 = ["tuiSliderThumbLabel", ""];
var _c22 = ["*", [["input", "type", "range"]]];
var _c3 = ["*", "input[type=range]"];
function TuiSliderThumbLabel_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var TUI_FLOATING_PRECISION = 7;
function tuiFindKeyStepsBoundariesByFn(keySteps, fn) {
  const keyStepUpperIndex = keySteps.findIndex((keyStep, i) => i && fn(keyStep));
  const lowerStep = keySteps[keyStepUpperIndex - 1] || keySteps[0];
  const upperStep = keySteps[keyStepUpperIndex] || keySteps[keySteps.length - 1] || [0, 0];
  return [lowerStep, upperStep];
}
function tuiPercentageToKeyStepValue(valuePercentage, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([keyStepPercentage, _]) => valuePercentage <= keyStepPercentage);
  const ratio = (valuePercentage - lowerStepPercent) / (upperStepPercent - lowerStepPercent);
  const controlValue = (upperStepValue - lowerStepValue) * ratio + lowerStepValue;
  return tuiRound(controlValue, TUI_FLOATING_PRECISION);
}
function tuiKeyStepValueToPercentage(value, keySteps) {
  const [[lowerStepPercent, lowerStepValue], [upperStepPercent, upperStepValue]] = tuiFindKeyStepsBoundariesByFn(keySteps, ([_, keyStepValue]) => value <= keyStepValue);
  const ratio = (value - lowerStepValue) / (upperStepValue - lowerStepValue) || 0;
  return (upperStepPercent - lowerStepPercent) * ratio + lowerStepPercent;
}
var TUI_SLIDER_DEFAULT_OPTIONS = {
  size: "m",
  trackColor: "var(--tui-background-neutral-2)"
};
var TUI_SLIDER_OPTIONS = tuiCreateToken(TUI_SLIDER_DEFAULT_OPTIONS);
function tuiSliderOptionsProvider(options) {
  return tuiProvideOptions(TUI_SLIDER_OPTIONS, options, TUI_SLIDER_DEFAULT_OPTIONS);
}
var TuiSliderComponent = class _TuiSliderComponent {
  constructor() {
    this.injector = inject(INJECTOR$1);
    this.control = inject(NgControl, {
      self: true,
      optional: true
    });
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.size = this.options.size;
    this.segments = 1;
    this.el = tuiInjectElement();
    if (this.control instanceof NgModel) {
      this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
    }
  }
  get valueRatio() {
    return (this.value - this.min) / (this.max - this.min) || 0;
  }
  get min() {
    return Number(this.el.min);
  }
  get max() {
    return Number(this.el.max || 100);
  }
  get value() {
    if (!this.hasKeySteps && this.control instanceof NgModel) {
      return this.control.viewModel;
    }
    return Number(this.el.value) || 0;
  }
  set value(newValue) {
    this.el.value = `${newValue}`;
  }
  get hasKeySteps() {
    return Boolean(this.injector.get(TuiSliderKeySteps, null));
  }
  get segmentWidth() {
    return 100 / Math.max(1, this.segments);
  }
  get step() {
    return Number(this.el.step) || 1;
  }
  static {
    this.ɵfac = function TuiSliderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderComponent,
      selectors: [["input", "type", "range", "tuiSlider", ""]],
      hostVars: 7,
      hostBindings: function TuiSliderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function TuiSliderComponent_input_HostBindingHandler() {
            return 0;
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size);
          ɵɵstyleProp("--tui-slider-track-color", ctx.options.trackColor)("--tui-slider-segment-width", ctx.segmentWidth, "%")("--tui-slider-fill-ratio", ctx.valueRatio);
        }
      },
      inputs: {
        size: "size",
        segments: "segments"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c04,
      decls: 0,
      vars: 0,
      template: function TuiSliderComponent_Template(rf, ctx) {
      },
      styles: ['[_nghost-%COMP%]{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]::-webkit-slider-container{border-radius:inherit}[data-size=m][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}[data-size=s][_nghost-%COMP%]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[data-size=m][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}[data-size=s][_nghost-%COMP%]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=m][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=m][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[data-size=m][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[data-size=s][_nghost-%COMP%]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb:hover, :active:not(:disabled)[data-size=s][_nghost-%COMP%]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[data-size=s][_nghost-%COMP%]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}[_nghost-%COMP%]::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiSliderComponent.prototype, "hasKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "input[type=range][tuiSlider]",
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        "(input)": "0",
        "[style.--tui-slider-track-color]": "options.trackColor",
        "[style.--tui-slider-segment-width.%]": "segmentWidth",
        "[style.--tui-slider-fill-ratio]": "valueRatio",
        "[attr.data-size]": "size"
      },
      styles: [':host{position:relative;display:block;inline-size:100%;color:var(--tui-background-accent-1);cursor:pointer;-webkit-appearance:none;appearance:none;block-size:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}:host:active{cursor:ew-resize}:host:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}:host[data-size=s]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .5rem);inline-size:.5rem;block-size:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=s]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host[data-size=m]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-ratio) * 100% - var(--tui-slider-fill-ratio) * .75rem);inline-size:.75rem;block-size:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}:host[data-size=m]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}:host::-webkit-slider-container{border-radius:inherit}:host[data-size=m]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}:host[data-size=s]::-webkit-slider-runnable-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor calc(100% * var(--tui-slider-fill-ratio)),transparent calc(100% * var(--tui-slider-fill-ratio)));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}:host[data-size=m]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}:host[data-size=s]::-moz-range-track{block-size:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}:host[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled):host[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-webkit-slider-thumb:hover,:active:not(:disabled):host[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.75rem;inline-size:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=m]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible:host[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;block-size:.5rem;inline-size:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-inline-start:0;border-inline-end:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled):host[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled):host[data-size=s]::-moz-range-thumb:hover,:active:not(:disabled):host[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible:host[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-border-focus)}:host::-moz-range-progress{border-radius:inherit}:host::-moz-range-progress{block-size:.125rem;background:currentColor;border-start-end-radius:0;border-end-end-radius:0}\n']
    }]
  }], function() {
    return [];
  }, {
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    hasKeySteps: []
  });
})();
var TuiSliderKeySteps = class _TuiSliderKeySteps extends TuiControl {
  constructor() {
    super(...arguments);
    this.slider = inject(forwardRef(() => TuiSliderComponent));
  }
  writeValue(controlValue) {
    if (controlValue === null) {
      return;
    }
    const clampedControlValue = tuiClamp(controlValue, this.min, this.max);
    ngDevMode && console.assert(controlValue === clampedControlValue, "\n[SliderKeySteps]: You cannot programmatically set value which is less/more than min/max");
    this.slider.value = this.transformToNativeValue(clampedControlValue);
  }
  get min() {
    return this.keySteps[0][1];
  }
  get max() {
    return this.keySteps[this.keySteps.length - 1]?.[1] ?? 0;
  }
  updateControlValue() {
    this.onChange(tuiPercentageToKeyStepValue(this.slider.valueRatio * 100, this.keySteps));
  }
  transformToNativeValue(controlValue) {
    const {
      min,
      max
    } = this.slider;
    const newValuePercentage = tuiKeyStepValueToPercentage(controlValue, this.keySteps);
    return newValuePercentage * (max - min) / 100 + min;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiSliderKeySteps_BaseFactory;
      return function TuiSliderKeySteps_Factory(__ngFactoryType__) {
        return (ɵTuiSliderKeySteps_BaseFactory || (ɵTuiSliderKeySteps_BaseFactory = ɵɵgetInheritedFactory(_TuiSliderKeySteps)))(__ngFactoryType__ || _TuiSliderKeySteps);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderKeySteps,
      selectors: [["input", "tuiSlider", "", "keySteps", ""]],
      hostVars: 4,
      hostBindings: function TuiSliderKeySteps_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function TuiSliderKeySteps_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("input", function TuiSliderKeySteps_input_HostBindingHandler() {
            return ctx.updateControlValue();
          })("change", function TuiSliderKeySteps_change_HostBindingHandler() {
            return ctx.updateControlValue();
          });
        }
        if (rf & 2) {
          ɵɵhostProperty("disabled", ctx.disabled());
          ɵɵattribute("aria-valuenow", ctx.value())("aria-valuemin", ctx.min)("aria-valuemax", ctx.max);
        }
      },
      inputs: {
        keySteps: "keySteps"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider(0)]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderKeySteps, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][keySteps]",
      providers: [tuiFallbackValueProvider(0)],
      host: {
        "[attr.aria-valuenow]": "value()",
        "[attr.aria-valuemin]": "min",
        "[attr.aria-valuemax]": "max",
        "[disabled]": "disabled()",
        "(blur)": "onTouched()",
        "(input)": "updateControlValue()",
        "(change)": "updateControlValue()"
      }
    }]
  }], null, {
    keySteps: [{
      type: Input
    }]
  });
})();
var SLIDER_INTERACTION_KEYS = /* @__PURE__ */ new Set(["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp"]);
var TuiSliderReadonly = class _TuiSliderReadonly {
  constructor() {
    this.el = tuiInjectElement();
    this.doc = inject(DOCUMENT);
    this.readonly = true;
    const touchStart$ = tuiTypedFromEvent(this.el, "touchstart", {
      passive: false
    });
    const touchMove$ = tuiTypedFromEvent(this.doc, "touchmove", {
      passive: false
    });
    const touchEnd$ = tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    });
    const shouldPreventMove$ = merge(touchStart$.pipe(tap((e) => this.preventEvent(e)), map(TUI_TRUE_HANDLER)), touchEnd$.pipe(map(TUI_FALSE_HANDLER)));
    combineLatest([touchMove$, shouldPreventMove$]).pipe(filter(([_, shouldPreventMove]) => shouldPreventMove), takeUntilDestroyed()).subscribe(([moveEvent]) => this.preventEvent(moveEvent));
  }
  preventEvent(event) {
    if (event.cancelable && this.readonly) {
      event.preventDefault();
    }
  }
  preventKeyboardInteraction(event) {
    if (SLIDER_INTERACTION_KEYS.has(event.key)) {
      this.preventEvent(event);
    }
  }
  static {
    this.ɵfac = function TuiSliderReadonly_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderReadonly)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiSliderReadonly,
      selectors: [["input", "tuiSlider", "", "readonly", ""]],
      hostBindings: function TuiSliderReadonly_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function TuiSliderReadonly_keydown_HostBindingHandler($event) {
            return ctx.preventKeyboardInteraction($event);
          })("mousedown", function TuiSliderReadonly_mousedown_HostBindingHandler($event) {
            return ctx.preventEvent($event);
          });
        }
      },
      inputs: {
        readonly: [2, "readonly", "readonly", coerceBooleanProperty]
      },
      standalone: true,
      features: [ɵɵInputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderReadonly, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "input[tuiSlider][readonly]",
      host: {
        "(keydown)": "preventKeyboardInteraction($event)",
        "(mousedown)": "preventEvent($event)"
      }
    }]
  }], function() {
    return [];
  }, {
    readonly: [{
      type: Input,
      args: [{
        transform: coerceBooleanProperty
      }]
    }]
  });
})();
var TuiSliderThumbLabel = class _TuiSliderThumbLabel {
  ngAfterContentInit() {
    ngDevMode && console.assert(Boolean(this.control?.valueChanges), '\n[tuiSliderThumbLabel] expected <input tuiSlider type="range" /> to use Angular Forms.\nUse [(ngModel)] or [formControl] or formControlName for correct work.');
  }
  get size() {
    return this.slider?.size || "m";
  }
  get ratio() {
    return this.slider?.valueRatio || 0;
  }
  get ghostLeft() {
    return this.ratio * (this.slider?.el.offsetWidth || 0);
  }
  static {
    this.ɵfac = function TuiSliderThumbLabel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiSliderThumbLabel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiSliderThumbLabel,
      selectors: [["", "tuiSliderThumbLabel", ""]],
      contentQueries: function TuiSliderThumbLabel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiSliderComponent, 5);
          ɵɵcontentQuery(dirIndex, NgControl, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slider = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.control = _t.first);
        }
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      attrs: _c13,
      ngContentSelectors: _c3,
      decls: 5,
      vars: 8,
      consts: [[4, "ngIf"], [1, "t-ghost"]],
      template: function TuiSliderThumbLabel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c22);
          ɵɵtemplate(0, TuiSliderThumbLabel_ng_container_0_Template, 1, 0, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵprojection(3);
          ɵɵelementEnd();
          ɵɵprojection(4, 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 6, ctx.control == null ? null : ctx.control.valueChanges));
          ɵɵadvance(2);
          ɵɵstyleProp("--tui-slider-thumb-ratio", ctx.ratio)("left", ctx.ghostLeft, "px");
          ɵɵattribute("data-size", ctx.size);
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{position:relative}.t-ghost[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s][_ngcontent-%COMP%]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m][_ngcontent-%COMP%]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiSliderThumbLabel, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "[tuiSliderThumbLabel]",
      imports: [AsyncPipe, NgIf],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<ng-container *ngIf="control?.valueChanges | async" />\n\n<div\n    class="t-ghost"\n    [attr.data-size]="size"\n    [style.--tui-slider-thumb-ratio]="ratio"\n    [style.left.px]="ghostLeft"\n>\n    <ng-content />\n</div>\n\n<ng-content select="input[type=range]" />\n',
      styles: [":host{position:relative}.t-ghost{position:absolute;top:0;bottom:0;margin:auto;border-radius:50%;pointer-events:none}.t-ghost[data-size=s]{inline-size:.5rem;block-size:.5rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.5rem))}.t-ghost[data-size=m]{inline-size:.75rem;block-size:.75rem;transform:translate(calc(var(--tui-slider-thumb-ratio) * -.75rem))}\n"]
    }]
  }], null, {
    slider: [{
      type: ContentChild,
      args: [TuiSliderComponent]
    }],
    control: [{
      type: ContentChild,
      args: [NgControl]
    }]
  });
})();
var TuiSlider = [TuiSliderComponent, TuiSliderThumbLabel, TuiSliderKeySteps, TuiSliderReadonly];

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-components-range.mjs
var _c05 = () => ({
  standalone: true
});
var TuiRangeChange = class _TuiRangeChange {
  constructor() {
    this.doc = inject(DOCUMENT);
    this.el = tuiInjectElement();
    this.range = inject(TuiRange);
    this.pointerDown$ = tuiTypedFromEvent(this.el, "pointerdown", {
      passive: true,
      capture: true
    });
    this.pointerMove$ = merge(tuiTypedFromEvent(this.doc, "touchmove").pipe(filter(({
      touches
    }) => touches.length === 1), map(({
      touches
    }) => touches[0]), filter((event) => !!event)), tuiTypedFromEvent(this.doc, "mousemove"));
    this.pointerUp$ = merge(tuiTypedFromEvent(this.doc, "touchend", {
      passive: true
    }), tuiTypedFromEvent(this.doc, "mouseup", {
      passive: true
    }));
    this.activeThumbChange = new EventEmitter();
    let activeThumb;
    this.pointerDown$.pipe(tap(({
      clientX,
      target
    }) => {
      activeThumb = this.detectActiveThumb(clientX, target);
      this.activeThumbChange.emit(activeThumb);
      if (this.range.focusable) {
        this.el.focus();
      }
    }), switchMap((event) => this.pointerMove$.pipe(startWith(event))), map(({
      clientX
    }) => this.getFractionFromEvents(clientX ?? 0)), takeUntil(this.pointerUp$), repeat(), takeUntilDestroyed()).subscribe((fraction) => {
      const value = this.range.toValue(fraction);
      this.range.processValue(value, activeThumb === "right");
    });
  }
  getFractionFromEvents(clickClientX) {
    const hostRect = this.el.getBoundingClientRect();
    const value = clickClientX - hostRect.left;
    const total = hostRect.width;
    return tuiClamp(tuiRound(value / total, TUI_FLOATING_PRECISION), 0, 1);
  }
  detectActiveThumb(clientX, target) {
    const [leftSliderRef, rightSliderRef] = this.range.slidersRefs;
    switch (target) {
      case leftSliderRef?.nativeElement:
        return "left";
      case rightSliderRef?.nativeElement:
        return "right";
      default:
        return this.findNearestActiveThumb(clientX);
    }
  }
  findNearestActiveThumb(clientX) {
    const fraction = this.getFractionFromEvents(clientX);
    const deltaLeft = fraction * 100 - this.range.left();
    const deltaRight = fraction * 100 - 100 + this.range.right();
    return Math.abs(deltaLeft) > Math.abs(deltaRight) || deltaRight > 0 || this.range.left() === 0 && this.range.right() === 100 ? "right" : "left";
  }
  static {
    this.ɵfac = function TuiRangeChange_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiRangeChange)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiRangeChange,
      outputs: {
        activeThumbChange: "activeThumbChange"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRangeChange, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], function() {
    return [];
  }, {
    activeThumbChange: [{
      type: Output
    }]
  });
})();
var TuiRange = class _TuiRange extends TuiControl {
  constructor() {
    super(...arguments);
    this.changes = signal(1);
    this.el = tuiInjectElement();
    this.options = inject(TUI_SLIDER_OPTIONS);
    this.lastActiveThumb = "right";
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.size = this.options.size;
    this.segments = 1;
    this.keySteps = null;
    this.focusable = true;
    this.margin = 0;
    this.limit = Infinity;
    this.slidersRefs = EMPTY_QUERY;
    this.left = computed(() => this.toPercent(this.value()[0]));
    this.right = computed(() => 100 - this.toPercent(this.value()[1]));
  }
  ngOnChanges() {
    this.changes.set(this.changes() + 1);
  }
  processValue(value, right) {
    if (right) {
      this.updateEnd(value);
    } else {
      this.updateStart(value);
    }
    this.lastActiveThumb = right ? "right" : "left";
  }
  toValue(fraction) {
    return tuiPercentageToKeyStepValue(tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1) * 100, this.computedKeySteps);
  }
  get fractionStep() {
    return this.step / (this.max - this.min);
  }
  get computedKeySteps() {
    return this.computePureKeySteps(this.keySteps, this.min, this.max);
  }
  get segmentWidthRatio() {
    return 1 / this.segments;
  }
  changeByStep(coefficient, target) {
    const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
    const leftThumbElement = sliderLeftRef?.nativeElement;
    const rightThumbElement = sliderRightRef?.nativeElement;
    const isRightThumb = target === this.el ? this.lastActiveThumb === "right" : target === rightThumbElement;
    const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
    const previousValue = isRightThumb ? this.value()[1] : this.value()[0];
    const previousFraction = this.toPercent(previousValue) / 100;
    const newFractionValue = previousFraction + coefficient * this.fractionStep;
    this.processValue(this.toValue(newFractionValue), isRightThumb);
    activeThumbElement?.focus();
  }
  toPercent(value) {
    return this.changes() && tuiKeyStepValueToPercentage(value, this.computedKeySteps);
  }
  computePureKeySteps(keySteps, min, max) {
    return keySteps || [[0, min], [100, max]];
  }
  updateStart(value) {
    const newValue = Math.min(value, this.value()[1]);
    const distance = this.value()[1] - newValue;
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([newValue, this.value()[1]]);
  }
  updateEnd(value) {
    const newValue = Math.max(value, this.value()[0]);
    const distance = newValue - this.value()[0];
    if (!this.checkDistance(distance)) {
      return;
    }
    this.onChange([this.value()[0], newValue]);
  }
  checkDistance(distance) {
    return tuiClamp(distance, this.margin, this.limit) === distance;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵTuiRange_BaseFactory;
      return function TuiRange_Factory(__ngFactoryType__) {
        return (ɵTuiRange_BaseFactory || (ɵTuiRange_BaseFactory = ɵɵgetInheritedFactory(_TuiRange)))(__ngFactoryType__ || _TuiRange);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiRange,
      selectors: [["tui-range"]],
      viewQuery: function TuiRange_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(TuiSliderComponent, 5, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slidersRefs = _t);
        }
      },
      hostVars: 11,
      hostBindings: function TuiRange_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("focusout", function TuiRange_focusout_HostBindingHandler() {
            return ctx.onTouched();
          })("keydown.arrowUp.prevent", function TuiRange_keydown_arrowUp_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowRight.prevent", function TuiRange_keydown_arrowRight_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(1, $event.target);
          })("keydown.arrowLeft.prevent", function TuiRange_keydown_arrowLeft_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          })("keydown.arrowDown.prevent", function TuiRange_keydown_arrowDown_prevent_HostBindingHandler($event) {
            return ctx.changeByStep(-1, $event.target);
          });
        }
        if (rf & 2) {
          ɵɵattribute("data-size", ctx.size)("tabindex", -1)("aria-disabled", ctx.disabled());
          ɵɵstyleProp("--left", ctx.left(), "%")("--right", ctx.right(), "%")("background", ctx.options.trackColor);
          ɵɵclassProp("_disabled", ctx.disabled());
        }
      },
      inputs: {
        min: "min",
        max: "max",
        step: "step",
        size: "size",
        segments: "segments",
        keySteps: "keySteps",
        focusable: "focusable",
        margin: "margin",
        limit: "limit"
      },
      standalone: true,
      features: [ɵɵProvidersFeature([tuiFallbackValueProvider([0, 0])]), ɵɵHostDirectivesFeature([{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange", "activeThumbChange"]
      }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
      decls: 3,
      vars: 22,
      consts: [[1, "t-track"], ["automation-id", "tui-range__left", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"], ["automation-id", "tui-range__right", "readonly", "", "step", "any", "tuiSlider", "", "type", "range", 1, "t-thumb", 3, "disabled", "keySteps", "max", "min", "ngModel", "ngModelOptions", "size", "tabIndex"]],
      template: function TuiRange_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵelement(1, "input", 1)(2, "input", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵstyleProp("--bg-size-ratio", 1 - ctx.segmentWidthRatio)("--segment-width", ctx.segmentWidthRatio * 100, "%");
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[0])("ngModelOptions", ɵɵpureFunction0(20, _c05))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.disabled())("keySteps", ctx.computedKeySteps)("max", ctx.max)("min", ctx.min)("ngModel", ctx.value()[1])("ngModelOptions", ɵɵpureFunction0(21, _c05))("size", ctx.size)("tabIndex", ctx.focusable ? 0 : -1);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, RangeValueAccessor, NgControlStatus, NgModel, TuiSliderComponent, TuiSliderKeySteps, TuiSliderReadonly],
      styles: ['[_nghost-%COMP%]{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}._disabled[_nghost-%COMP%]{opacity:var(--tui-disabled-opacity);pointer-events:none}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .25rem;block-size:100%}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}[data-size=s][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]{position:relative;margin:0 .375rem;block-size:100%}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}[data-size=m][_nghost-%COMP%]   .t-track[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb[_ngcontent-%COMP%]{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb[_ngcontent-%COMP%]::-webkit-slider-thumb{pointer-events:all}.t-thumb[_ngcontent-%COMP%]::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-moz-range-progress{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-track{background:transparent}input[type=range].t-thumb[_ngcontent-%COMP%]::-ms-fill-lower{background:transparent}.t-thumb[_ngcontent-%COMP%]:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb[_ngcontent-%COMP%]:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}._disabled[_nghost-%COMP%]   .t-thumb[_ngcontent-%COMP%]{opacity:1}'],
      changeDetection: 0
    });
  }
};
__decorate([tuiPure], TuiRange.prototype, "computePureKeySteps", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiRange, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-range",
      imports: [FormsModule, TuiSlider],
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [tuiFallbackValueProvider([0, 0])],
      hostDirectives: [{
        directive: TuiRangeChange,
        outputs: ["activeThumbChange"]
      }],
      host: {
        "[attr.data-size]": "size",
        "[attr.tabindex]": "-1",
        "[attr.aria-disabled]": "disabled()",
        "[style.--left.%]": "left()",
        "[style.--right.%]": "right()",
        "[style.background]": "options.trackColor",
        "[class._disabled]": "disabled()",
        "(focusout)": "onTouched()",
        "(keydown.arrowUp.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowRight.prevent)": "changeByStep(1, $event.target)",
        "(keydown.arrowLeft.prevent)": "changeByStep(-1, $event.target)",
        "(keydown.arrowDown.prevent)": "changeByStep(-1, $event.target)"
      },
      template: '<div\n    class="t-track"\n    [style.--bg-size-ratio]="1 - segmentWidthRatio"\n    [style.--segment-width.%]="segmentWidthRatio * 100"\n>\n    <input\n        automation-id="tui-range__left"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[0]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n    <input\n        automation-id="tui-range__right"\n        readonly\n        step="any"\n        tuiSlider\n        type="range"\n        class="t-thumb"\n        [disabled]="disabled()"\n        [keySteps]="computedKeySteps"\n        [max]="max"\n        [min]="min"\n        [ngModel]="value()[1]"\n        [ngModelOptions]="{standalone: true}"\n        [size]="size"\n        [tabIndex]="focusable ? 0 : -1"\n    />\n</div>\n',
      styles: [':host{position:relative;display:block;block-size:.125rem;border-radius:var(--tui-radius-m);background:var(--tui-border-normal);cursor:pointer;outline:none;margin:.4375rem 0;touch-action:pan-x}:host:active{cursor:ew-resize}:host:after{content:"";position:absolute;top:-.4375rem;bottom:-.4375rem;inline-size:100%}:host._disabled{opacity:var(--tui-disabled-opacity);pointer-events:none}:host[data-size=s] .t-track{position:relative;margin:0 .25rem;block-size:100%}:host[data-size=s] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.25rem}:host[data-size=s] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.125rem;right:.375rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}:host[data-size=m] .t-track{position:relative;margin:0 .375rem;block-size:100%}:host[data-size=m] .t-track:before{content:"";position:absolute;top:0;left:max(calc(var(--left) - 1px),1px);right:max(var(--right),1px);block-size:100%;background:var(--tui-background-accent-1);margin:0 -.375rem}:host[data-size=m] .t-track:after{position:absolute;top:0;left:0;bottom:0;right:0;content:"";left:.25rem;right:.5rem;background-image:repeating-linear-gradient(to right,var(--tui-text-tertiary) 0 .25rem,transparent 0 calc(var(--segment-width) / var(--bg-size-ratio)));background-position-x:right;background-repeat:no-repeat;background-size:calc(100% * var(--bg-size-ratio))}.t-thumb{pointer-events:none;position:absolute;top:.0625rem;left:0;right:0;z-index:1;transform:translateY(-50%)}.t-thumb::-webkit-slider-thumb{pointer-events:all}.t-thumb::-moz-range-thumb{pointer-events:all}input[type=range].t-thumb::-webkit-slider-runnable-track{background:transparent}input[type=range].t-thumb::-moz-range-track{background:transparent}input[type=range].t-thumb::-moz-range-progress{background:transparent}input[type=range].t-thumb::-ms-track{background:transparent}input[type=range].t-thumb::-ms-fill-lower{background:transparent}.t-thumb:last-of-type{--tui-slider-thumb-transform: translateX(50%) translateX(1px)}.t-thumb:first-of-type{--tui-slider-thumb-transform: translateX(-50%) translateX(-1px)}:host._disabled .t-thumb{opacity:1}\n']
    }]
  }], null, {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    segments: [{
      type: Input
    }],
    keySteps: [{
      type: Input
    }],
    focusable: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    limit: [{
      type: Input
    }],
    slidersRefs: [{
      type: ViewChildren,
      args: [TuiSliderComponent, {
        read: ElementRef
      }]
    }],
    computePureKeySteps: []
  });
})();

// node_modules/@taiga-ui/kit/fesm2022/taiga-ui-kit-pipes-stringify-content.mjs
var TuiStringifyContentPipe = class _TuiStringifyContentPipe {
  transform(stringify) {
    return ({
      $implicit
    }) => stringify($implicit);
  }
  static {
    this.ɵfac = function TuiStringifyContentPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiStringifyContentPipe)();
    };
  }
  static {
    this.ɵpipe = ɵɵdefinePipe({
      name: "tuiStringifyContent",
      type: _TuiStringifyContentPipe,
      pure: true,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiStringifyContentPipe, [{
    type: Pipe,
    args: [{
      standalone: true,
      name: "tuiStringifyContent"
    }]
  }], null, null);
})();

// node_modules/@maskito/kit/index.esm.js
function clamp(value, min, max) {
  const clampedValue = Math.min(Number(max), Math.max(Number(min), Number(value)));
  return value instanceof Date ? new Date(clampedValue) : clampedValue;
}
function countDigits(str) {
  return str.replaceAll(/\W/g, "").length;
}
function appendDate(initialDate, {
  day,
  month,
  year
} = {}) {
  const date = new Date(initialDate);
  if (day) {
    date.setDate(date.getDate() + day);
  }
  if (month) {
    date.setMonth(date.getMonth() + month);
  }
  if (year) {
    date.setFullYear(date.getFullYear() + year);
  }
  return date;
}
var getDateSegmentValueLength = (dateString) => {
  var _a, _b, _c, _d, _e, _f;
  return {
    day: (_b = (_a = dateString.match(/d/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0,
    month: (_d = (_c = dateString.match(/m/g)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0,
    year: (_f = (_e = dateString.match(/y/g)) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0
  };
};
function dateToSegments(date) {
  return {
    day: String(date.getDate()).padStart(2, "0"),
    month: String(date.getMonth() + 1).padStart(2, "0"),
    year: String(date.getFullYear()).padStart(4, "0"),
    hours: String(date.getHours()).padStart(2, "0"),
    minutes: String(date.getMinutes()).padStart(2, "0"),
    seconds: String(date.getSeconds()).padStart(2, "0"),
    milliseconds: String(date.getMilliseconds()).padStart(3, "0")
  };
}
function getFirstCompleteDate(dateString, dateModeTemplate) {
  const digitsInDate = countDigits(dateModeTemplate);
  const [completeDate = ""] = new RegExp(`(\\D*\\d){${digitsInDate}}`).exec(dateString) || [];
  return completeDate;
}
function isDateStringComplete(dateString, dateModeTemplate) {
  if (dateString.length < dateModeTemplate.length) {
    return false;
  }
  return dateString.split(/\D/).every((segment) => !/^0+$/.exec(segment));
}
function parseDateRangeString(dateRange, dateModeTemplate, rangeSeparator) {
  const digitsInDate = countDigits(dateModeTemplate);
  return dateRange.replace(rangeSeparator, "").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${digitsInDate}}`, "g")) || [];
}
function parseDateString(dateString, fullMode) {
  const cleanMode = fullMode.replaceAll(/[^dmy]/g, "");
  const onlyDigitsDate = dateString.replaceAll(/\D+/g, "");
  const dateSegments = {
    day: onlyDigitsDate.slice(cleanMode.indexOf("d"), cleanMode.lastIndexOf("d") + 1),
    month: onlyDigitsDate.slice(cleanMode.indexOf("m"), cleanMode.lastIndexOf("m") + 1),
    year: onlyDigitsDate.slice(cleanMode.indexOf("y"), cleanMode.lastIndexOf("y") + 1)
  };
  return Object.fromEntries(Object.entries(dateSegments).filter(([_, value]) => Boolean(value)).sort(([a], [b]) => fullMode.toLowerCase().indexOf(a.slice(0, 1)) > fullMode.toLowerCase().indexOf(b.slice(0, 1)) ? 1 : -1));
}
function segmentsToDate(parsedDate, parsedTime) {
  var _a, _b, _c, _d, _e, _f, _g;
  const year = ((_a = parsedDate.year) === null || _a === void 0 ? void 0 : _a.length) === 2 ? `20${parsedDate.year}` : parsedDate.year;
  const date = new Date(Number(year !== null && year !== void 0 ? year : "0"), Number((_b = parsedDate.month) !== null && _b !== void 0 ? _b : "1") - 1, Number((_c = parsedDate.day) !== null && _c !== void 0 ? _c : "1"), Number((_d = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.hours) !== null && _d !== void 0 ? _d : "0"), Number((_e = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.minutes) !== null && _e !== void 0 ? _e : "0"), Number((_f = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.seconds) !== null && _f !== void 0 ? _f : "0"), Number((_g = parsedTime === null || parsedTime === void 0 ? void 0 : parsedTime.milliseconds) !== null && _g !== void 0 ? _g : "0"));
  date.setFullYear(Number(year !== null && year !== void 0 ? year : "0"));
  return date;
}
var DATE_TIME_SEPARATOR = ", ";
function toDateString({
  day,
  month,
  year,
  hours,
  minutes,
  seconds,
  milliseconds
}, {
  dateMode,
  dateTimeSeparator = DATE_TIME_SEPARATOR,
  timeMode
}) {
  var _a;
  const safeYear = ((_a = dateMode.match(/y/g)) === null || _a === void 0 ? void 0 : _a.length) === 2 ? year === null || year === void 0 ? void 0 : year.slice(-2) : year;
  const fullMode = dateMode + (timeMode ? dateTimeSeparator + timeMode : "");
  return fullMode.replaceAll(/d+/g, day !== null && day !== void 0 ? day : "").replaceAll(/m+/g, month !== null && month !== void 0 ? month : "").replaceAll(/y+/g, safeYear !== null && safeYear !== void 0 ? safeYear : "").replaceAll(/H+/g, hours !== null && hours !== void 0 ? hours : "").replaceAll("MSS", milliseconds !== null && milliseconds !== void 0 ? milliseconds : "").replaceAll(/M+/g, minutes !== null && minutes !== void 0 ? minutes : "").replaceAll(/S+/g, seconds !== null && seconds !== void 0 ? seconds : "").replaceAll(/^\D+/g, "").replaceAll(/\D+$/g, "");
}
var DATE_SEGMENTS_MAX_VALUES = {
  day: 31,
  month: 12,
  year: 9999
};
var DEFAULT_DECIMAL_PSEUDO_SEPARATORS = [".", ",", "б", "ю"];
var DEFAULT_MIN_DATE = /* @__PURE__ */ new Date("0001-01-01");
var DEFAULT_MAX_DATE = /* @__PURE__ */ new Date("9999-12-31");
var DEFAULT_TIME_SEGMENT_MAX_VALUES = {
  hours: 23,
  minutes: 59,
  seconds: 59,
  milliseconds: 999
};
var DEFAULT_TIME_SEGMENT_MIN_VALUES = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0
};
var CHAR_NO_BREAK_SPACE = " ";
var CHAR_ZERO_WIDTH_SPACE = "​";
var CHAR_EN_DASH = "–";
var CHAR_EM_DASH = "—";
var CHAR_HYPHEN = "-";
var CHAR_MINUS = "−";
var CHAR_JP_HYPHEN = "ー";
var CHAR_COLON = ":";
var CHAR_JP_COLON = "：";
var ANY_MERIDIEM_CHARACTER_RE = new RegExp(`[${CHAR_NO_BREAK_SPACE}APM]+$`, "g");
var ALL_MERIDIEM_CHARACTERS_RE = new RegExp(`${CHAR_NO_BREAK_SPACE}[AP]M$`, "g");
var TIME_FIXED_CHARACTERS = [":", "."];
var TIME_SEGMENT_VALUE_LENGTHS = {
  hours: 2,
  minutes: 2,
  seconds: 2,
  milliseconds: 3
};
function validateDateString({
  dateString,
  dateModeTemplate,
  dateSegmentsSeparator,
  offset,
  selection: [from, to]
}) {
  const parsedDate = parseDateString(dateString, dateModeTemplate);
  const dateSegments = Object.entries(parsedDate);
  const validatedDateSegments = {};
  for (const [segmentName, segmentValue] of dateSegments) {
    const validatedDate = toDateString(validatedDateSegments, {
      dateMode: dateModeTemplate
    });
    const maxSegmentValue = DATE_SEGMENTS_MAX_VALUES[segmentName];
    const fantomSeparator = validatedDate.length && dateSegmentsSeparator.length;
    const lastSegmentDigitIndex = offset + validatedDate.length + fantomSeparator + getDateSegmentValueLength(dateModeTemplate)[segmentName];
    const isLastSegmentDigitAdded = lastSegmentDigitIndex >= from && lastSegmentDigitIndex === to;
    if (isLastSegmentDigitAdded && Number(segmentValue) > Number(maxSegmentValue)) {
      return {
        validatedDateString: "",
        updatedSelection: [from, to]
      };
    }
    if (isLastSegmentDigitAdded && Number(segmentValue) < 1) {
      return {
        validatedDateString: "",
        updatedSelection: [from, to]
      };
    }
    validatedDateSegments[segmentName] = segmentValue;
  }
  const validatedDateString = toDateString(validatedDateSegments, {
    dateMode: dateModeTemplate
  });
  const addedDateSegmentSeparators = validatedDateString.length - dateString.length;
  return {
    validatedDateString,
    updatedSelection: [from + addedDateSegmentSeparators, to + addedDateSegmentSeparators]
  };
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reHasRegExpChar = new RegExp(reRegExpChar.source);
function escapeRegExp(str) {
  return str && reHasRegExpChar.test(str) ? str.replaceAll(reRegExpChar, String.raw`\$&`) : str;
}
function extractAffixes(value, {
  prefix,
  postfix
}) {
  var _a, _b;
  const prefixRegExp = new RegExp(`^${escapeRegExp(prefix)}`);
  const postfixRegExp = new RegExp(`${escapeRegExp(postfix)}$`);
  const [extractedPrefix = ""] = (_a = value.match(prefixRegExp)) !== null && _a !== void 0 ? _a : [];
  const [extractedPostfix = ""] = (_b = value.match(postfixRegExp)) !== null && _b !== void 0 ? _b : [];
  const cleanValue = value.replace(prefixRegExp, "").replace(postfixRegExp, "");
  return {
    extractedPrefix,
    extractedPostfix,
    cleanValue
  };
}
function findCommonBeginningSubstr(a, b) {
  let res = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return res;
    }
    res += a[i];
  }
  return res;
}
function identity(x) {
  return x;
}
function isEmpty(entity) {
  return !entity || typeof entity === "object" && Object.keys(entity).length === 0;
}
var ALL_ZEROES_RE = /^0+$/;
function padWithZeroesUntilValid(segmentValue, paddedMaxValue, prefixedZeroesCount = 0) {
  const paddedSegmentValue = segmentValue.padEnd(paddedMaxValue.length, "0");
  if (Number(paddedSegmentValue) <= Number(paddedMaxValue)) {
    return {
      validatedSegmentValue: segmentValue,
      prefixedZeroesCount
    };
  }
  if (paddedSegmentValue.endsWith("0")) {
    return padWithZeroesUntilValid(`0${segmentValue.slice(0, paddedMaxValue.length - 1)}`, paddedMaxValue, prefixedZeroesCount + 1);
  }
  const valueWithoutLastChar = segmentValue.slice(0, paddedMaxValue.length - 1);
  if (ALL_ZEROES_RE.exec(valueWithoutLastChar)) {
    return {
      validatedSegmentValue: "",
      prefixedZeroesCount
    };
  }
  return padWithZeroesUntilValid(`${valueWithoutLastChar}0`, paddedMaxValue, prefixedZeroesCount);
}
function toHalfWidthColon(fullWidthColon) {
  return fullWidthColon.replaceAll(new RegExp(CHAR_JP_COLON, "g"), CHAR_COLON);
}
function toHalfWidthNumber(fullWidthNumber) {
  return fullWidthNumber.replaceAll(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 65248));
}
function createColonConvertPreprocessor() {
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
        value: toHalfWidthColon(value)
      },
      data: toHalfWidthColon(data)
    };
  };
}
function createDateSegmentsZeroPaddingPostprocessor({
  dateModeTemplate,
  dateSegmentSeparator,
  splitFn,
  uniteFn
}) {
  return ({
    value,
    selection
  }) => {
    var _a;
    const [from, to] = selection;
    const {
      dateStrings,
      restPart = ""
    } = splitFn(value);
    const validatedDateStrings = [];
    let caretShift = 0;
    dateStrings.forEach((dateString) => {
      const parsedDate = parseDateString(dateString, dateModeTemplate);
      const dateSegments = Object.entries(parsedDate);
      const validatedDateSegments = dateSegments.reduce((acc, [segmentName, segmentValue]) => {
        const {
          validatedSegmentValue,
          prefixedZeroesCount
        } = padWithZeroesUntilValid(segmentValue, `${DATE_SEGMENTS_MAX_VALUES[segmentName]}`);
        caretShift += prefixedZeroesCount;
        return Object.assign(Object.assign({}, acc), {
          [segmentName]: validatedSegmentValue
        });
      }, {});
      validatedDateStrings.push(toDateString(validatedDateSegments, {
        dateMode: dateModeTemplate
      }));
    });
    const validatedValue = uniteFn(validatedDateStrings, value) + (((_a = dateStrings[dateStrings.length - 1]) === null || _a === void 0 ? void 0 : _a.endsWith(dateSegmentSeparator)) ? dateSegmentSeparator : "") + restPart;
    if (caretShift && validatedValue.slice(to + caretShift, to + caretShift + dateSegmentSeparator.length) === dateSegmentSeparator) {
      caretShift += dateSegmentSeparator.length;
    }
    return {
      selection: [from + caretShift, to + caretShift],
      value: validatedValue
    };
  };
}
function createFirstDateEndSeparatorPreprocessor({
  dateModeTemplate,
  firstDateEndSeparator,
  dateSegmentSeparator,
  pseudoFirstDateEndSeparators
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const firstCompleteDate = getFirstCompleteDate(value, dateModeTemplate);
    const pseudoSeparators = pseudoFirstDateEndSeparators.filter((x) => !firstDateEndSeparator.includes(x) && x !== dateSegmentSeparator);
    const pseudoSeparatorsRE = new RegExp(`[${pseudoSeparators.join("")}]`, "gi");
    const newValue = firstCompleteDate && value.length > firstCompleteDate.length ? firstCompleteDate + value.slice(firstCompleteDate.length).replace(/^[\D\s]*/, firstDateEndSeparator) : value;
    const caretShift = newValue.length - value.length;
    return {
      elementState: {
        selection: [from + caretShift, to + caretShift],
        value: newValue
      },
      data: data.replace(pseudoSeparatorsRE, firstDateEndSeparator)
    };
  };
}
function createFullWidthToHalfWidthPreprocessor() {
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
        value: toHalfWidthNumber(value)
      },
      data: toHalfWidthNumber(data)
    };
  };
}
function createTimeMaskExpression(mode) {
  return Array.from(mode.replace(" AA", "")).map((char) => TIME_FIXED_CHARACTERS.includes(char) ? char : /\d/).concat(mode.includes("AA") ? [CHAR_NO_BREAK_SPACE, /[AP]/i, /M/i] : []);
}
function padTimeSegments(timeSegments, pad) {
  return Object.fromEntries(Object.entries(timeSegments).map(([segmentName, segmentValue]) => [segmentName, pad(String(segmentValue), TIME_SEGMENT_VALUE_LENGTHS[segmentName])]));
}
function padStartTimeSegments(timeSegments) {
  return padTimeSegments(timeSegments, (value, length) => value.padStart(length, "0"));
}
var SEGMENT_FULL_NAME = {
  HH: "hours",
  MM: "minutes",
  SS: "seconds",
  MSS: "milliseconds"
};
function parseTimeString(timeString, timeMode) {
  const onlyDigits = timeString.replaceAll(/\D+/g, "");
  let offset = 0;
  return Object.fromEntries(timeMode.split(/\W/).filter((segmentAbbr) => SEGMENT_FULL_NAME[segmentAbbr]).map((segmentAbbr) => {
    const segmentValue = onlyDigits.slice(offset, offset + segmentAbbr.length);
    offset += segmentAbbr.length;
    return [SEGMENT_FULL_NAME[segmentAbbr], segmentValue];
  }));
}
var LEADING_NON_DIGITS = /^\D*/;
var TRAILING_NON_DIGITS = /\D*$/;
function toTimeString({
  hours = "",
  minutes = "",
  seconds = "",
  milliseconds = ""
}) {
  return `${hours}:${minutes}:${seconds}.${milliseconds}`.replace(LEADING_NON_DIGITS, "").replace(TRAILING_NON_DIGITS, "");
}
var TRAILING_TIME_SEGMENT_SEPARATOR_REG = new RegExp(`[${TIME_FIXED_CHARACTERS.map(escapeRegExp).join("")}]$`);
function enrichTimeSegmentsWithZeroes({
  value,
  selection
}, {
  mode,
  timeSegmentMaxValues = DEFAULT_TIME_SEGMENT_MAX_VALUES
}) {
  const [from, to] = selection;
  const parsedTime = parseTimeString(value, mode);
  const possibleTimeSegments = Object.entries(parsedTime);
  const paddedMaxValues = padStartTimeSegments(timeSegmentMaxValues);
  const validatedTimeSegments = {};
  let paddedZeroes = 0;
  for (const [segmentName, segmentValue] of possibleTimeSegments) {
    const maxSegmentValue = paddedMaxValues[segmentName];
    const {
      validatedSegmentValue,
      prefixedZeroesCount
    } = padWithZeroesUntilValid(segmentValue, String(maxSegmentValue));
    paddedZeroes += prefixedZeroesCount;
    validatedTimeSegments[segmentName] = validatedSegmentValue;
  }
  const [trailingNonDigitCharacters = ""] = value.match(/\D+$/g) || [];
  const validatedTimeString = toTimeString(validatedTimeSegments) + trailingNonDigitCharacters;
  const addedDateSegmentSeparators = Math.max(validatedTimeString.length - value.length, 0);
  let newFrom = from + paddedZeroes + addedDateSegmentSeparators;
  let newTo = to + paddedZeroes + addedDateSegmentSeparators;
  if (newFrom === newTo && paddedZeroes && // if next character after cursor is time segment separator
  validatedTimeString.slice(0, newTo + 1).match(TRAILING_TIME_SEGMENT_SEPARATOR_REG)) {
    newFrom++;
    newTo++;
  }
  return {
    value: validatedTimeString,
    selection: [newFrom, newTo]
  };
}
function createInvalidTimeSegmentInsertionPreprocessor({
  timeMode,
  timeSegmentMinValues = DEFAULT_TIME_SEGMENT_MIN_VALUES,
  timeSegmentMaxValues = DEFAULT_TIME_SEGMENT_MAX_VALUES,
  parseValue = (x) => ({
    timeString: x
  })
}) {
  const invalidCharsRegExp = new RegExp(`[^\\d${TIME_FIXED_CHARACTERS.map(escapeRegExp).join("")}]+`);
  return ({
    elementState,
    data
  }, actionType) => {
    if (actionType !== "insert") {
      return {
        elementState,
        data
      };
    }
    const {
      value,
      selection
    } = elementState;
    const [from, rawTo] = selection;
    const newCharacters = data.replace(invalidCharsRegExp, "");
    const to = rawTo + newCharacters.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const {
      timeString,
      restValue = ""
    } = parseValue(newPossibleValue);
    const timeSegments = Object.entries(parseTimeString(timeString, timeMode));
    let offset = restValue.length;
    for (const [segmentName, stringifiedSegmentValue] of timeSegments) {
      const minSegmentValue = timeSegmentMinValues[segmentName];
      const maxSegmentValue = timeSegmentMaxValues[segmentName];
      const segmentValue = Number(stringifiedSegmentValue);
      const lastSegmentDigitIndex = offset + TIME_SEGMENT_VALUE_LENGTHS[segmentName];
      if (lastSegmentDigitIndex >= from && lastSegmentDigitIndex <= to && segmentValue !== clamp(segmentValue, minSegmentValue, maxSegmentValue)) {
        return {
          elementState,
          data: ""
        };
      }
      offset += stringifiedSegmentValue.length + // any time segment separator
      1;
    }
    return {
      elementState,
      data
    };
  };
}
function createMeridiemPreprocessor(timeMode) {
  if (!timeMode.includes("AA")) {
    return identity;
  }
  const mainMeridiemCharRE = /^[AP]$/gi;
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const newValue = value.toUpperCase();
    const newData = data.toUpperCase();
    if (newValue.match(ALL_MERIDIEM_CHARACTERS_RE) && newData.match(mainMeridiemCharRE)) {
      return {
        elementState: {
          value: newValue.replaceAll(ALL_MERIDIEM_CHARACTERS_RE, ""),
          selection
        },
        data: `${newData}M`
      };
    }
    return {
      elementState: {
        selection,
        value: newValue
      },
      data: newData
    };
  };
}
function createMeridiemPostprocessor(timeMode) {
  if (!timeMode.includes("AA")) {
    return identity;
  }
  return ({
    value,
    selection
  }, initialElementState) => {
    if (!value.match(ANY_MERIDIEM_CHARACTER_RE) || value.match(ALL_MERIDIEM_CHARACTERS_RE)) {
      return {
        value,
        selection
      };
    }
    const [from, to] = selection;
    if (initialElementState.value.match(ALL_MERIDIEM_CHARACTERS_RE)) {
      const newValue2 = value.replace(ANY_MERIDIEM_CHARACTER_RE, "");
      return {
        value: newValue2,
        selection: [Math.min(from, newValue2.length), Math.min(to, newValue2.length)]
      };
    }
    const fullMeridiem = `${CHAR_NO_BREAK_SPACE}${value.includes("P") ? "P" : "A"}M`;
    const newValue = value.replace(ANY_MERIDIEM_CHARACTER_RE, (x) => x !== CHAR_NO_BREAK_SPACE ? fullMeridiem : x);
    return {
      value: newValue,
      selection: to >= newValue.indexOf(fullMeridiem) ? [newValue.length, newValue.length] : selection
    };
  };
}
function raiseSegmentValueToMin(segments, fullMode) {
  const segmentsLength = getDateSegmentValueLength(fullMode);
  return Object.fromEntries(Object.entries(segments).map(([key, value]) => {
    const segmentLength = segmentsLength[key];
    return [key, value.length === segmentLength && /^0+$/.exec(value) ? "1".padStart(segmentLength, "0") : value];
  }));
}
function createMinMaxDatePostprocessor({
  dateModeTemplate,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE,
  rangeSeparator = "",
  dateSegmentSeparator = "."
}) {
  return ({
    value,
    selection
  }) => {
    const endsWithRangeSeparator = rangeSeparator && value.endsWith(rangeSeparator);
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    let validatedValue = "";
    for (const dateString of dateStrings) {
      validatedValue += validatedValue ? rangeSeparator : "";
      const parsedDate = parseDateString(dateString, dateModeTemplate);
      if (!isDateStringComplete(dateString, dateModeTemplate)) {
        const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
        const fixedValue = toDateString(fixedDate, {
          dateMode: dateModeTemplate
        });
        const tail = dateString.endsWith(dateSegmentSeparator) ? dateSegmentSeparator : "";
        validatedValue += fixedValue + tail;
        continue;
      }
      const date = segmentsToDate(parsedDate);
      const clampedDate = clamp(date, min, max);
      validatedValue += toDateString(dateToSegments(clampedDate), {
        dateMode: dateModeTemplate
      });
    }
    return {
      selection,
      value: validatedValue + (endsWithRangeSeparator ? rangeSeparator : "")
    };
  };
}
function normalizeDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = "",
  dateTimeSeparator = DATE_TIME_SEPARATOR
}) {
  return ({
    elementState,
    data
  }) => {
    var _a;
    const separator = rangeSeparator ? new RegExp(`${rangeSeparator}|-`) : dateTimeSeparator;
    const possibleDates = data.split(separator);
    const dates = data.includes(dateTimeSeparator) ? [(_a = possibleDates[0]) !== null && _a !== void 0 ? _a : ""] : possibleDates;
    if (dates.every((date) => date.trim().split(/\D/).filter(Boolean).length === dateModeTemplate.split(dateSegmentsSeparator).length)) {
      const newData = dates.map((date) => normalizeDateString(date, dateModeTemplate, dateSegmentsSeparator)).join(rangeSeparator);
      return {
        elementState,
        data: `${newData}${data.includes(dateTimeSeparator) ? dateTimeSeparator + possibleDates[1] || "" : ""}`
      };
    }
    return {
      elementState,
      data
    };
  };
}
function normalizeDateString(dateString, template, separator) {
  const dateSegments = dateString.split(/\D/).filter(Boolean);
  const templateSegments = template.split(separator);
  const normalizedSegments = dateSegments.map((segment, index) => {
    var _a, _b;
    return index === templateSegments.length - 1 ? segment : segment.padStart((_b = (_a = templateSegments[index]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, "0");
  });
  return normalizedSegments.join(separator);
}
function maskitoPostfixPostprocessorGenerator(postfix) {
  const postfixRE = new RegExp(`${escapeRegExp(postfix)}$`);
  return postfix ? ({
    value,
    selection
  }, initialElementState) => {
    if (!value && !initialElementState.value.endsWith(postfix)) {
      return {
        value,
        selection
      };
    }
    if (!value.endsWith(postfix) && !initialElementState.value.endsWith(postfix)) {
      return {
        selection,
        value: value + postfix
      };
    }
    const initialValueBeforePostfix = initialElementState.value.replace(postfixRE, "");
    const postfixWasModified = initialElementState.selection[1] >= initialValueBeforePostfix.length;
    const alreadyExistedValueBeforePostfix = findCommonBeginningSubstr(initialValueBeforePostfix, value);
    return {
      selection,
      value: Array.from(postfix).reverse().reduce((newValue, char, index) => {
        const i = newValue.length - 1 - index;
        const isInitiallyMirroredChar = alreadyExistedValueBeforePostfix[i] === char && postfixWasModified;
        return newValue[i] !== char || isInitiallyMirroredChar ? newValue.slice(0, i + 1) + char + newValue.slice(i + 1) : newValue;
      }, value)
    };
  } : identity;
}
function maskitoPrefixPostprocessorGenerator(prefix) {
  return prefix ? ({
    value,
    selection
  }, initialElementState) => {
    if (value.startsWith(prefix) || // already valid
    !value && !initialElementState.value.startsWith(prefix)) {
      return {
        value,
        selection
      };
    }
    const [from, to] = selection;
    const prefixedValue = Array.from(prefix).reduce((modifiedValue, char, i) => modifiedValue[i] === char ? modifiedValue : modifiedValue.slice(0, i) + char + modifiedValue.slice(i), value);
    const addedCharsCount = prefixedValue.length - value.length;
    return {
      selection: [from + addedCharsCount, to + addedCharsCount],
      value: prefixedValue
    };
  } : identity;
}
function createValidDatePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  rangeSeparator = ""
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ""
      };
    }
    const newCharacters = data.replaceAll(new RegExp(`[^\\d${escapeRegExp(dateSegmentsSeparator)}${rangeSeparator}]`, "g"), "");
    if (!newCharacters) {
      return {
        elementState,
        data: ""
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const dateStrings = parseDateRangeString(newPossibleValue, dateModeTemplate, rangeSeparator);
    let validatedValue = "";
    const hasRangeSeparator = Boolean(rangeSeparator) && newPossibleValue.includes(rangeSeparator);
    for (const dateString of dateStrings) {
      const {
        validatedDateString,
        updatedSelection
      } = validateDateString({
        dateString,
        dateModeTemplate,
        dateSegmentsSeparator,
        offset: validatedValue.length,
        selection: [from, to]
      });
      if (dateString && !validatedDateString) {
        return {
          elementState,
          data: ""
        };
      }
      to = updatedSelection[1];
      validatedValue += hasRangeSeparator && !validatedValue ? validatedDateString + rangeSeparator : validatedDateString;
    }
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map((segment) => "0".repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoEventHandler(name, handler, eventListenerOptions) {
  return (element, maskitoOptions) => {
    const listener = () => handler(element, maskitoOptions);
    element.addEventListener(name, listener, eventListenerOptions);
    return () => element.removeEventListener(name, listener, eventListenerOptions);
  };
}
function maskitoSelectionChangeHandler(handler) {
  return (element, options) => {
    const document = element.ownerDocument;
    let isPointerDown = 0;
    const onPointerDown = () => isPointerDown++;
    const onPointerUp = () => {
      isPointerDown = Math.max(--isPointerDown, 0);
    };
    const listener = () => {
      if (!element.matches(":focus")) {
        return;
      }
      if (isPointerDown) {
        return document.addEventListener("mouseup", listener, {
          once: true,
          passive: true
        });
      }
      handler(element, options);
    };
    document.addEventListener("selectionchange", listener, {
      passive: true
    });
    element.addEventListener("mousedown", onPointerDown, {
      passive: true
    });
    document.addEventListener("mouseup", onPointerUp, {
      passive: true
    });
    return () => {
      document.removeEventListener("selectionchange", listener);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("mouseup", onPointerUp);
    };
  };
}
function maskitoCaretGuard(guard) {
  return maskitoSelectionChangeHandler((element) => {
    var _a, _b;
    const start = (_a = element.selectionStart) !== null && _a !== void 0 ? _a : 0;
    const end = (_b = element.selectionEnd) !== null && _b !== void 0 ? _b : 0;
    const [fromLimit, toLimit] = guard(element.value, [start, end]);
    if (fromLimit > start || toLimit < end) {
      element.setSelectionRange(clamp(start, fromLimit, toLimit), clamp(end, fromLimit, toLimit));
    }
  });
}
function maskitoRemoveOnBlurPlugin(value) {
  return maskitoEventHandler("blur", (element) => {
    if (element.value === value) {
      maskitoUpdateElement(element, "");
    }
  });
}
function createMeridiemSteppingPlugin(meridiemStartIndex) {
  if (meridiemStartIndex < 0) {
    return () => {
    };
  }
  return (element) => {
    const listener = (event) => {
      const caretIndex = Number(element.selectionStart);
      const value = element.value.toUpperCase();
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown" || caretIndex < meridiemStartIndex) {
        return;
      }
      event.preventDefault();
      const meridiemMainCharacter = value.includes("A") ? "P" : value.includes("P") || event.key === "ArrowUp" ? "A" : "P";
      const newMeridiem = `${CHAR_NO_BREAK_SPACE}${meridiemMainCharacter}M`;
      maskitoUpdateElement(element, {
        value: value.length === meridiemStartIndex ? value + newMeridiem : value.replace(ANY_MERIDIEM_CHARACTER_RE, newMeridiem),
        selection: [caretIndex, caretIndex]
      });
    };
    element.addEventListener("keydown", listener);
    return () => element.removeEventListener("keydown", listener);
  };
}
var noop = () => {
};
function createTimeSegmentsSteppingPlugin({
  step,
  fullMode,
  timeSegmentMaxValues
}) {
  const segmentsIndexes = createTimeSegmentsIndexes(fullMode);
  return step <= 0 ? noop : (element) => {
    const listener = (event) => {
      var _a;
      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
        return;
      }
      event.preventDefault();
      const selectionStart = (_a = element.selectionStart) !== null && _a !== void 0 ? _a : 0;
      const activeSegment = getActiveSegment({
        segmentsIndexes,
        selectionStart
      });
      if (!activeSegment) {
        return;
      }
      const updatedValue = updateSegmentValue({
        selection: segmentsIndexes.get(activeSegment),
        value: element.value,
        toAdd: event.key === "ArrowUp" ? step : -step,
        max: timeSegmentMaxValues[activeSegment]
      });
      maskitoUpdateElement(element, {
        value: updatedValue,
        selection: [selectionStart, selectionStart]
      });
    };
    element.addEventListener("keydown", listener);
    return () => element.removeEventListener("keydown", listener);
  };
}
function createTimeSegmentsIndexes(fullMode) {
  return /* @__PURE__ */ new Map([["hours", getSegmentRange(fullMode, "HH")], ["milliseconds", getSegmentRange(fullMode, "MSS")], ["minutes", getSegmentRange(fullMode, "MM")], ["seconds", getSegmentRange(fullMode, "SS")]]);
}
function getSegmentRange(mode, segment) {
  const index = mode.indexOf(segment);
  return index === -1 ? [-1, -1] : [index, index + segment.length];
}
function getActiveSegment({
  segmentsIndexes,
  selectionStart
}) {
  for (const [segmentName, segmentRange] of segmentsIndexes.entries()) {
    const [from, to] = segmentRange;
    if (from <= selectionStart && selectionStart <= to) {
      return segmentName;
    }
  }
  return null;
}
function updateSegmentValue({
  selection,
  value,
  toAdd,
  max
}) {
  const [from, to] = selection;
  const segmentValue = Number(value.slice(from, to).padEnd(to - from, "0"));
  const newSegmentValue = mod(segmentValue + toAdd, max + 1);
  return value.slice(0, from) + String(newSegmentValue).padStart(to - from, "0") + value.slice(to, value.length);
}
function mod(value, max) {
  if (value < 0) {
    value += Math.floor(Math.abs(value) / max + 1) * max;
  }
  return value % max;
}
function createZeroPlaceholdersPreprocessor() {
  return ({
    elementState
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    if (!value || isLastChar(value, selection)) {
      return {
        elementState
      };
    }
    const [from, to] = selection;
    const zeroes = value.slice(from, to).replaceAll(/\d/g, "0");
    const newValue = value.slice(0, from) + zeroes + value.slice(to);
    if (!zeroes.replaceAll(/\D/g, "")) {
      return {
        elementState
      };
    }
    if (actionType === "validation" || actionType === "insert" && from === to) {
      return {
        elementState: {
          selection,
          value: newValue
        }
      };
    }
    return {
      elementState: {
        selection: actionType === "deleteBackward" || actionType === "insert" ? [from, from] : [to, to],
        value: newValue
      }
    };
  };
}
function isLastChar(value, [_, to]) {
  return to === value.length;
}
function maskitoDateOptionsGenerator({
  mode,
  separator = ".",
  max,
  min
}) {
  const dateModeTemplate = mode.split("/").join(separator);
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: Array.from(dateModeTemplate).map((char) => separator.includes(char) ? char : /\d/),
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: separator
    })],
    postprocessors: [createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: separator,
      splitFn: (value) => ({
        dateStrings: [value]
      }),
      uniteFn: ([dateString = ""]) => dateString
    }), createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      dateSegmentSeparator: separator
    })]
  });
}
var POSSIBLE_DATE_RANGE_SEPARATOR = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH, CHAR_MINUS, CHAR_JP_HYPHEN];
function createMinMaxRangeLengthPostprocessor({
  dateModeTemplate,
  rangeSeparator,
  minLength,
  maxLength,
  max = DEFAULT_MAX_DATE
}) {
  if (isEmpty(minLength) && isEmpty(maxLength)) {
    return identity;
  }
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    if (dateStrings.length !== 2 || dateStrings.some((date) => !isDateStringComplete(date, dateModeTemplate))) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map((dateString) => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    if (!fromDate || !toDate) {
      return {
        value,
        selection
      };
    }
    const minDistantToDate = appendDate(fromDate, Object.assign(Object.assign({}, minLength), {
      // 06.02.2023 - 07.02.2023 => {minLength: {day: 3}} => 06.02.2023 - 08.02.2023
      // "from"-day is included in the range
      day: (minLength === null || minLength === void 0 ? void 0 : minLength.day) && minLength.day - 1
    }));
    const maxDistantToDate = !isEmpty(maxLength) ? appendDate(fromDate, Object.assign(Object.assign({}, maxLength), {
      day: (maxLength === null || maxLength === void 0 ? void 0 : maxLength.day) && maxLength.day - 1
    })) : max;
    const minLengthClampedToDate = clamp(toDate, minDistantToDate, max);
    const minMaxLengthClampedToDate = minLengthClampedToDate > maxDistantToDate ? maxDistantToDate : minLengthClampedToDate;
    return {
      selection,
      value: dateStrings[0] + rangeSeparator + toDateString(dateToSegments(minMaxLengthClampedToDate), {
        dateMode: dateModeTemplate
      })
    };
  };
}
function createSwapDatesPostprocessor({
  dateModeTemplate,
  rangeSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const dateStrings = parseDateRangeString(value, dateModeTemplate, rangeSeparator);
    const isDateRangeComplete = dateStrings.length === 2 && dateStrings.every((date) => isDateStringComplete(date, dateModeTemplate));
    const [from, to] = selection;
    const caretAtTheEnd = from >= value.length;
    const allValueSelected = from === 0 && to >= value.length;
    if (!(caretAtTheEnd || allValueSelected) || !isDateRangeComplete) {
      return {
        value,
        selection
      };
    }
    const [fromDate, toDate] = dateStrings.map((dateString) => segmentsToDate(parseDateString(dateString, dateModeTemplate)));
    return {
      selection,
      value: fromDate && toDate && fromDate > toDate ? dateStrings.reverse().join(rangeSeparator) : value
    };
  };
}
function maskitoDateRangeOptionsGenerator({
  mode,
  min,
  max,
  minLength,
  maxLength,
  dateSeparator = ".",
  rangeSeparator = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`
}) {
  const dateModeTemplate = mode.split("/").join(dateSeparator);
  const dateMask = Array.from(dateModeTemplate).map((char) => dateSeparator.includes(char) ? char : /\d/);
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: [...dateMask, ...Array.from(rangeSeparator), ...dateMask],
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createFirstDateEndSeparatorPreprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      firstDateEndSeparator: rangeSeparator,
      pseudoFirstDateEndSeparators: POSSIBLE_DATE_RANGE_SEPARATOR
    }), createZeroPlaceholdersPreprocessor(), normalizeDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    }), createValidDatePreprocessor({
      dateModeTemplate,
      rangeSeparator,
      dateSegmentsSeparator: dateSeparator
    })],
    postprocessors: [createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      splitFn: (value) => ({
        dateStrings: parseDateRangeString(value, dateModeTemplate, rangeSeparator)
      }),
      uniteFn: (validatedDateStrings, initialValue) => validatedDateStrings.reduce((acc, dateString, dateIndex) => acc + dateString + (!dateIndex && initialValue.includes(rangeSeparator) ? rangeSeparator : ""), "")
    }), createMinMaxDatePostprocessor({
      min,
      max,
      dateModeTemplate,
      rangeSeparator,
      dateSegmentSeparator: dateSeparator
    }), createMinMaxRangeLengthPostprocessor({
      dateModeTemplate,
      minLength,
      maxLength,
      max,
      rangeSeparator
    }), createSwapDatesPostprocessor({
      dateModeTemplate,
      rangeSeparator
    })]
  });
}
function isDateTimeStringComplete(dateTimeString, {
  dateMode,
  timeMode,
  dateTimeSeparator = DATE_TIME_SEPARATOR
}) {
  var _a;
  return dateTimeString.length >= dateMode.length + timeMode.length + dateTimeSeparator.length && ((_a = dateTimeString.split(dateTimeSeparator)[0]) !== null && _a !== void 0 ? _a : "").split(/\D/).every((segment) => !/^0+$/.exec(segment));
}
var NON_DIGIT_PLACEHOLDER_RE = /[^dmy]/g;
var LEADING_NON_DIGIT_RE = /^\D*/;
function parseDateTimeString(dateTime, dateModeTemplate) {
  const dateDigitsCount = dateModeTemplate.replaceAll(NON_DIGIT_PLACEHOLDER_RE, "").length;
  const [date = ""] = new RegExp(`(\\d[^\\d]*){0,${dateDigitsCount - 1}}\\d?`).exec(dateTime) || [];
  const [dateTimeSeparator = ""] = LEADING_NON_DIGIT_RE.exec(dateTime.slice(date.length)) || [];
  return [date, dateTime.slice(date.length + dateTimeSeparator.length)];
}
function createMinMaxDateTimePostprocessor({
  dateModeTemplate,
  timeMode,
  min = DEFAULT_MIN_DATE,
  max = DEFAULT_MAX_DATE,
  dateTimeSeparator
}) {
  return ({
    value,
    selection
  }) => {
    const [dateString, timeString] = parseDateTimeString(value, dateModeTemplate);
    const parsedDate = parseDateString(dateString, dateModeTemplate);
    const parsedTime = parseTimeString(timeString, timeMode);
    if (!isDateTimeStringComplete(value, {
      dateMode: dateModeTemplate,
      timeMode,
      dateTimeSeparator
    })) {
      const fixedDate = raiseSegmentValueToMin(parsedDate, dateModeTemplate);
      const {
        year,
        month,
        day
      } = isDateStringComplete(dateString, dateModeTemplate) ? dateToSegments(clamp(segmentsToDate(fixedDate), min, max)) : fixedDate;
      const fixedValue = toDateString(Object.assign({
        year,
        month,
        day
      }, parsedTime), {
        dateMode: dateModeTemplate,
        dateTimeSeparator,
        timeMode
      });
      const tail = value.slice(fixedValue.length);
      return {
        selection,
        value: fixedValue + tail
      };
    }
    const date = segmentsToDate(parsedDate, parsedTime);
    const clampedDate = clamp(date, min, max);
    const [trailingNonDigitCharacters = ""] = value.match(/\D+$/g) || [];
    const validatedValue = toDateString(dateToSegments(clampedDate), {
      dateMode: dateModeTemplate,
      dateTimeSeparator,
      timeMode
    }) + trailingNonDigitCharacters;
    return {
      selection,
      value: validatedValue
    };
  };
}
function createValidDateTimePreprocessor({
  dateModeTemplate,
  dateSegmentsSeparator,
  dateTimeSeparator,
  timeMode,
  timeSegmentMaxValues
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    if (data === dateSegmentsSeparator) {
      return {
        elementState,
        data: selection[0] === value.length ? data : ""
      };
    }
    const newCharacters = data.replaceAll(/\D/g, "");
    if (!newCharacters) {
      return {
        elementState,
        data
      };
    }
    const [from, rawTo] = selection;
    let to = rawTo + data.length;
    const newPossibleValue = value.slice(0, from) + newCharacters + value.slice(to);
    const [dateString, timeString] = parseDateTimeString(newPossibleValue, dateModeTemplate);
    let validatedValue = "";
    const hasDateTimeSeparator = newPossibleValue.includes(dateTimeSeparator);
    const {
      validatedDateString,
      updatedSelection
    } = validateDateString({
      dateString,
      dateSegmentsSeparator,
      dateModeTemplate,
      offset: 0,
      selection: [from, to]
    });
    if (dateString && !validatedDateString) {
      return {
        elementState,
        data: ""
      };
    }
    to = updatedSelection[1];
    validatedValue += validatedDateString;
    const updatedTimeState = enrichTimeSegmentsWithZeroes({
      value: timeString,
      selection: [from, to]
    }, {
      mode: timeMode,
      timeSegmentMaxValues
    });
    to = updatedTimeState.selection[1];
    validatedValue += hasDateTimeSeparator ? dateTimeSeparator + updatedTimeState.value : updatedTimeState.value;
    const newData = validatedValue.slice(from, to);
    return {
      elementState: {
        selection,
        value: validatedValue.slice(0, from) + newData.split(dateSegmentsSeparator).map((segment) => "0".repeat(segment.length)).join(dateSegmentsSeparator) + validatedValue.slice(to)
      },
      data: newData
    };
  };
}
function maskitoDateTimeOptionsGenerator({
  dateMode,
  timeMode,
  dateSeparator = ".",
  min,
  max,
  dateTimeSeparator = DATE_TIME_SEPARATOR,
  timeStep = 0
}) {
  const hasMeridiem = timeMode.includes("AA");
  const dateModeTemplate = dateMode.split("/").join(dateSeparator);
  const timeSegmentMaxValues = Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MAX_VALUES), hasMeridiem ? {
    hours: 12
  } : {});
  const timeSegmentMinValues = Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MIN_VALUES), hasMeridiem ? {
    hours: 1
  } : {});
  const fullMode = `${dateModeTemplate}${dateTimeSeparator}${timeMode}`;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: [...Array.from(dateModeTemplate).map((char) => dateSeparator.includes(char) ? char : /\d/), ...dateTimeSeparator.split(""), ...createTimeMaskExpression(timeMode)],
    overwriteMode: "replace",
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createColonConvertPreprocessor(), createFirstDateEndSeparatorPreprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      firstDateEndSeparator: dateTimeSeparator,
      pseudoFirstDateEndSeparators: dateTimeSeparator.split("")
    }), createZeroPlaceholdersPreprocessor(), createMeridiemPreprocessor(timeMode), normalizeDatePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator,
      dateTimeSeparator
    }), createInvalidTimeSegmentInsertionPreprocessor({
      timeMode,
      timeSegmentMinValues,
      timeSegmentMaxValues,
      parseValue: (x) => {
        const [dateString, timeString] = parseDateTimeString(x, dateModeTemplate);
        return {
          timeString,
          restValue: dateString + dateTimeSeparator
        };
      }
    }), createValidDateTimePreprocessor({
      dateModeTemplate,
      dateSegmentsSeparator: dateSeparator,
      dateTimeSeparator,
      timeMode,
      timeSegmentMaxValues
    })],
    postprocessors: [createMeridiemPostprocessor(timeMode), createDateSegmentsZeroPaddingPostprocessor({
      dateModeTemplate,
      dateSegmentSeparator: dateSeparator,
      splitFn: (value) => {
        const [dateString, timeString] = parseDateTimeString(value, dateModeTemplate);
        return {
          dateStrings: [dateString],
          restPart: timeString
        };
      },
      uniteFn: ([validatedDateString], initialValue) => validatedDateString + (initialValue.includes(dateTimeSeparator) ? dateTimeSeparator : "")
    }), createMinMaxDateTimePostprocessor({
      min,
      max,
      dateModeTemplate,
      timeMode,
      dateTimeSeparator
    })],
    plugins: [createTimeSegmentsSteppingPlugin({
      step: timeStep,
      fullMode,
      timeSegmentMaxValues: DEFAULT_TIME_SEGMENT_MAX_VALUES
    }), createMeridiemSteppingPlugin(fullMode.indexOf("AA"))]
  });
}
function createAffixesFilterPreprocessor({
  prefix,
  postfix
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      cleanValue: cleanData
    } = extractAffixes(data, {
      prefix,
      postfix
    });
    return {
      elementState,
      data: cleanData
    };
  };
}
function generateMaskExpression({
  decimalSeparator,
  isNegativeAllowed,
  precision,
  thousandSeparator,
  prefix,
  postfix,
  decimalPseudoSeparators = [],
  pseudoMinuses = [],
  minusSign
}) {
  const computedPrefix = computeAllOptionalCharsRegExp(prefix);
  const digit = String.raw`\d`;
  const optionalMinus = isNegativeAllowed ? `[${minusSign}${pseudoMinuses.map((x) => `\\${x}`).join("")}]?` : "";
  const integerPart = thousandSeparator ? `[${digit}${escapeRegExp(thousandSeparator).replaceAll(/\s/g, String.raw`\s`)}]*` : `[${digit}]*`;
  const precisionPart = Number.isFinite(precision) ? precision : "";
  const decimalPart = precision > 0 ? `([${escapeRegExp(decimalSeparator)}${decimalPseudoSeparators.map(escapeRegExp).join("")}]${digit}{0,${precisionPart}})?` : "";
  const computedPostfix = computeAllOptionalCharsRegExp(postfix);
  return new RegExp(`^${computedPrefix}${optionalMinus}${integerPart}${decimalPart}${computedPostfix}$`);
}
function computeAllOptionalCharsRegExp(str) {
  return str ? `${str.split("").map((char) => `${escapeRegExp(char)}?`).join("")}` : "";
}
function maskitoParseNumber(maskedNumber, decimalSeparator = ".") {
  const hasNegativeSign = !!new RegExp(`^\\D*[${CHAR_MINUS}\\${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}${CHAR_JP_HYPHEN}]`).exec(maskedNumber);
  const escapedDecimalSeparator = escapeRegExp(decimalSeparator);
  const unmaskedNumber = maskedNumber.replaceAll(new RegExp(`${escapedDecimalSeparator}(?!\\d)`, "g"), "").replaceAll(new RegExp(`[^\\d${escapedDecimalSeparator}]`, "g"), "").replace(decimalSeparator, ".");
  if (unmaskedNumber) {
    const sign = hasNegativeSign ? CHAR_HYPHEN : "";
    return Number(`${sign}${unmaskedNumber}`);
  }
  return NaN;
}
function stringifyNumberWithoutExp(value) {
  var _a;
  const valueAsString = String(value);
  const [numberPart = "", expPart] = valueAsString.split("e-");
  let valueWithoutExp = valueAsString;
  if (expPart) {
    const [, fractionalPart] = numberPart.split(".");
    const decimalDigits = Number(expPart) + ((_a = fractionalPart === null || fractionalPart === void 0 ? void 0 : fractionalPart.length) !== null && _a !== void 0 ? _a : 0);
    valueWithoutExp = value.toFixed(decimalDigits);
  }
  return valueWithoutExp;
}
function toNumberParts(value, {
  decimalSeparator,
  minusSign
}) {
  const [integerWithMinus = "", decimalPart = ""] = value.split(decimalSeparator);
  const escapedMinus = escapeRegExp(minusSign);
  const [, minus = "", integerPart = ""] = new RegExp(`^(?:[^\\d${escapedMinus}])?(${escapedMinus})?(.*)`).exec(integerWithMinus) || [];
  return {
    minus,
    integerPart,
    decimalPart
  };
}
function validateDecimalPseudoSeparators({
  decimalSeparator,
  thousandSeparator,
  decimalPseudoSeparators = DEFAULT_DECIMAL_PSEUDO_SEPARATORS
}) {
  return decimalPseudoSeparators.filter((char) => char !== thousandSeparator && char !== decimalSeparator);
}
function createDecimalZeroPaddingPostprocessor({
  decimalSeparator,
  precision,
  decimalZeroPadding,
  prefix,
  postfix
}) {
  if (precision <= 0 || !decimalZeroPadding) {
    return identity;
  }
  return ({
    value,
    selection
  }) => {
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    if (Number.isNaN(maskitoParseNumber(cleanValue, decimalSeparator))) {
      return {
        value,
        selection
      };
    }
    const [integerPart, decimalPart = ""] = cleanValue.split(decimalSeparator);
    return {
      value: extractedPrefix + integerPart + decimalSeparator + decimalPart.padEnd(precision, "0") + extractedPostfix,
      selection
    };
  };
}
function emptyPostprocessor({
  prefix,
  postfix,
  decimalSeparator,
  minusSign
}) {
  return ({
    value,
    selection
  }) => {
    const [caretIndex] = selection;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const {
      minus,
      integerPart,
      decimalPart
    } = toNumberParts(cleanValue, {
      decimalSeparator,
      minusSign
    });
    const aloneDecimalSeparator = !integerPart && !decimalPart && cleanValue.includes(decimalSeparator);
    if (!integerPart && !Number(decimalPart) && caretIndex === (minus + extractedPrefix).length || aloneDecimalSeparator) {
      return {
        selection,
        value: extractedPrefix + minus + extractedPostfix
      };
    }
    return {
      value,
      selection
    };
  };
}
function createInitializationOnlyPreprocessor({
  decimalSeparator,
  decimalPseudoSeparators,
  pseudoMinuses,
  prefix,
  postfix,
  minusSign
}) {
  let isInitializationPhase = true;
  const cleanNumberMask = generateMaskExpression({
    decimalSeparator,
    decimalPseudoSeparators,
    pseudoMinuses,
    prefix: "",
    postfix: "",
    thousandSeparator: "",
    precision: Infinity,
    isNegativeAllowed: true,
    minusSign
  });
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
    isInitializationPhase = false;
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const {
      extractedPrefix,
      cleanValue,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const cleanState = maskitoTransform({
      selection: [Math.max(from - extractedPrefix.length, 0), clamp(to - extractedPrefix.length, 0, cleanValue.length)],
      value: cleanValue
    }, {
      mask: cleanNumberMask
    });
    const [cleanFrom, cleanTo] = cleanState.selection;
    return {
      elementState: {
        selection: [cleanFrom + extractedPrefix.length, cleanTo + extractedPrefix.length],
        value: extractedPrefix + cleanState.value + extractedPostfix
      },
      data
    };
  };
}
function createLeadingZeroesValidationPostprocessor({
  decimalSeparator,
  thousandSeparator,
  prefix,
  postfix
}) {
  const trimLeadingZeroes = (value) => {
    const escapedThousandSeparator = escapeRegExp(thousandSeparator);
    return value.replace(
      // all leading zeroes followed by another zero
      new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=0)`),
      "$1"
    ).replace(
      // zero followed by not-zero digit
      new RegExp(`^(\\D+)?[0${escapedThousandSeparator}]+(?=[1-9])`),
      "$1"
    );
  };
  const countTrimmedZeroesBefore = (value, index) => {
    const valueBefore = value.slice(0, index);
    const followedByZero = value.slice(index).startsWith("0");
    return valueBefore.length - trimLeadingZeroes(valueBefore).length + (followedByZero ? 1 : 0);
  };
  return ({
    value,
    selection
  }) => {
    const [from, to] = selection;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const hasDecimalSeparator = cleanValue.includes(decimalSeparator);
    const [integerPart = "", decimalPart = ""] = cleanValue.split(decimalSeparator);
    const zeroTrimmedIntegerPart = trimLeadingZeroes(integerPart);
    if (integerPart === zeroTrimmedIntegerPart) {
      return {
        value,
        selection
      };
    }
    const newFrom = from - countTrimmedZeroesBefore(value, from);
    const newTo = to - countTrimmedZeroesBefore(value, to);
    return {
      value: extractedPrefix + zeroTrimmedIntegerPart + (hasDecimalSeparator ? decimalSeparator : "") + decimalPart + extractedPostfix,
      selection: [Math.max(newFrom, 0), Math.max(newTo, 0)]
    };
  };
}
function createMinMaxPostprocessor({
  min,
  max,
  decimalSeparator,
  minusSign
}) {
  return ({
    value,
    selection
  }) => {
    const parsedNumber = maskitoParseNumber(value, decimalSeparator);
    const limitedValue = (
      /**
       * We cannot limit lower bound if user enters positive number.
       * The same for upper bound and negative number.
       * ___
       * @example (min = 5)
       * Empty input => Without this condition user cannot type 42 (the first digit will be rejected)
       * ___
       * @example (max = -10)
       * Value is -10 => Without this condition user cannot delete 0 to enter another digit
       */
      parsedNumber > 0 ? Math.min(parsedNumber, max) : Math.max(parsedNumber, min)
    );
    if (parsedNumber && limitedValue !== parsedNumber) {
      const newValue = `${limitedValue}`.replace(".", decimalSeparator).replace(CHAR_HYPHEN, minusSign);
      return {
        value: newValue,
        selection: [newValue.length, newValue.length]
      };
    }
    return {
      value,
      selection
    };
  };
}
function createNonRemovableCharsDeletionPreprocessor({
  decimalSeparator,
  thousandSeparator,
  decimalZeroPadding
}) {
  return ({
    elementState,
    data
  }, actionType) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const selectedCharacters = value.slice(from, to);
    const nonRemovableSeparators = decimalZeroPadding ? [decimalSeparator, thousandSeparator] : [thousandSeparator];
    const areNonRemovableZeroesSelected = decimalZeroPadding && from > value.indexOf(decimalSeparator) && Boolean(selectedCharacters.match(/^0+$/gi));
    if (actionType !== "deleteBackward" && actionType !== "deleteForward" || !nonRemovableSeparators.includes(selectedCharacters) && !areNonRemovableZeroesSelected) {
      return {
        elementState,
        data
      };
    }
    return {
      elementState: {
        value,
        selection: actionType === "deleteForward" ? [to, to] : [from, from]
      },
      data
    };
  };
}
function createNotEmptyIntegerPartPreprocessor({
  decimalSeparator,
  precision,
  prefix,
  postfix
}) {
  const startWithDecimalSepRegExp = new RegExp(`^\\D*${escapeRegExp(decimalSeparator)}`);
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const [from, to] = selection;
    const cleanFrom = clamp(from - extractedPrefix.length, 0, cleanValue.length);
    const cleanTo = clamp(to - extractedPrefix.length, 0, cleanValue.length);
    if (precision <= 0 || cleanValue.slice(0, cleanFrom).includes(decimalSeparator) || cleanValue.slice(cleanTo).includes(decimalSeparator) || !data.match(startWithDecimalSepRegExp)) {
      return {
        elementState,
        data
      };
    }
    const digitsBeforeCursor = /\d+/.exec(cleanValue.slice(0, cleanFrom));
    return {
      elementState,
      data: digitsBeforeCursor ? data : `0${data}`
    };
  };
}
function createPseudoCharactersPreprocessor({
  validCharacter,
  pseudoCharacters,
  prefix,
  postfix
}) {
  const pseudoCharactersRegExp = new RegExp(`[${pseudoCharacters.join("")}]`, "gi");
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    return {
      elementState: {
        selection,
        value: extractedPrefix + cleanValue.replace(pseudoCharactersRegExp, validCharacter) + extractedPostfix
      },
      data: data.replace(pseudoCharactersRegExp, validCharacter)
    };
  };
}
function createRepeatedDecimalSeparatorPreprocessor({
  decimalSeparator,
  prefix,
  postfix
}) {
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const [from, to] = selection;
    const {
      cleanValue
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    return {
      elementState,
      data: !cleanValue.includes(decimalSeparator) || value.slice(from, to + 1).includes(decimalSeparator) ? data : data.replaceAll(new RegExp(escapeRegExp(decimalSeparator), "gi"), "")
    };
  };
}
function createThousandSeparatorPostprocessor({
  thousandSeparator,
  decimalSeparator,
  prefix,
  postfix,
  minusSign
}) {
  if (!thousandSeparator) {
    return identity;
  }
  const isAllSpaces = (...chars) => chars.every((x) => /\s/.test(x));
  return ({
    value,
    selection
  }) => {
    const [initialFrom, initialTo] = selection;
    let [from, to] = selection;
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const {
      minus,
      integerPart,
      decimalPart
    } = toNumberParts(cleanValue, {
      decimalSeparator,
      minusSign
    });
    const deletedChars = cleanValue.length - (minus + integerPart + (cleanValue.includes(decimalSeparator) ? decimalSeparator + decimalPart : "")).length;
    if (deletedChars > 0 && initialFrom && initialFrom <= deletedChars) {
      from -= deletedChars;
    }
    if (deletedChars > 0 && initialTo && initialTo <= deletedChars) {
      to -= deletedChars;
    }
    const processedIntegerPart = Array.from(integerPart).reduceRight((formattedValuePart, char, i) => {
      const isLeadingThousandSeparator = !i && char === thousandSeparator;
      const isPositionForSeparator = !isLeadingThousandSeparator && Boolean(formattedValuePart.length) && (formattedValuePart.length + 1) % 4 === 0;
      const isSeparator = char === thousandSeparator || isAllSpaces(char, thousandSeparator);
      if (isPositionForSeparator && isSeparator) {
        return thousandSeparator + formattedValuePart;
      }
      if (!isPositionForSeparator && isSeparator) {
        if (i && i <= initialFrom) {
          from--;
        }
        if (i && i <= initialTo) {
          to--;
        }
        return formattedValuePart;
      }
      if (!isPositionForSeparator) {
        return char + formattedValuePart;
      }
      if (i < initialFrom) {
        from++;
      }
      if (i < initialTo) {
        to++;
      }
      return char + thousandSeparator + formattedValuePart;
    }, "");
    return {
      value: extractedPrefix + minus + processedIntegerPart + (cleanValue.includes(decimalSeparator) ? decimalSeparator : "") + decimalPart + extractedPostfix,
      selection: [from, to]
    };
  };
}
function createZeroPrecisionPreprocessor({
  precision,
  decimalSeparator,
  prefix,
  postfix
}) {
  if (precision > 0) {
    return identity;
  }
  const decimalPartRegExp = new RegExp(`${escapeRegExp(decimalSeparator)}.*$`, "g");
  return ({
    elementState,
    data
  }) => {
    const {
      value,
      selection
    } = elementState;
    const {
      cleanValue,
      extractedPrefix,
      extractedPostfix
    } = extractAffixes(value, {
      prefix,
      postfix
    });
    const [from, to] = selection;
    const newValue = extractedPrefix + cleanValue.replace(decimalPartRegExp, "") + extractedPostfix;
    return {
      elementState: {
        selection: [Math.min(from, newValue.length), Math.min(to, newValue.length)],
        value: newValue
      },
      data: data.replace(decimalPartRegExp, "")
    };
  };
}
var DUMMY_SELECTION = [0, 0];
function createLeadingZeroesValidationPlugin({
  decimalSeparator,
  thousandSeparator,
  prefix,
  postfix
}) {
  const dropRepeatedLeadingZeroes = createLeadingZeroesValidationPostprocessor({
    decimalSeparator,
    thousandSeparator,
    prefix,
    postfix
  });
  return maskitoEventHandler("blur", (element) => {
    const newValue = dropRepeatedLeadingZeroes({
      value: element.value,
      selection: DUMMY_SELECTION
    }, {
      value: "",
      selection: DUMMY_SELECTION
    }).value;
    maskitoUpdateElement(element, newValue);
  }, {
    capture: true
  });
}
function createMinMaxPlugin({
  min,
  max,
  decimalSeparator
}) {
  return maskitoEventHandler("blur", (element, options) => {
    const parsedNumber = maskitoParseNumber(element.value, decimalSeparator);
    const clampedNumber = clamp(parsedNumber, min, max);
    if (!Number.isNaN(parsedNumber) && parsedNumber !== clampedNumber) {
      maskitoUpdateElement(element, maskitoTransform(stringifyNumberWithoutExp(clampedNumber), options));
    }
  }, {
    capture: true
  });
}
function createNotEmptyIntegerPlugin({
  decimalSeparator,
  prefix,
  postfix
}) {
  return maskitoEventHandler("blur", (element) => {
    const {
      cleanValue,
      extractedPostfix,
      extractedPrefix
    } = extractAffixes(element.value, {
      prefix,
      postfix
    });
    const newValue = extractedPrefix + cleanValue.replace(new RegExp(`^(\\D+)?${escapeRegExp(decimalSeparator)}`), `$10${decimalSeparator}`) + extractedPostfix;
    maskitoUpdateElement(element, newValue);
  }, {
    capture: true
  });
}
function maskitoNumberOptionsGenerator({
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  precision = 0,
  thousandSeparator = CHAR_NO_BREAK_SPACE,
  decimalSeparator = ".",
  decimalPseudoSeparators,
  decimalZeroPadding = false,
  prefix: unsafePrefix = "",
  postfix = "",
  minusSign = CHAR_MINUS
} = {}) {
  const pseudoMinuses = [CHAR_HYPHEN, CHAR_EN_DASH, CHAR_EM_DASH, CHAR_JP_HYPHEN, CHAR_MINUS].filter((char) => char !== thousandSeparator && char !== decimalSeparator && char !== minusSign);
  const validatedDecimalPseudoSeparators = validateDecimalPseudoSeparators({
    decimalSeparator,
    thousandSeparator,
    decimalPseudoSeparators
  });
  const prefix = unsafePrefix.endsWith(decimalSeparator) && precision > 0 ? `${unsafePrefix}${CHAR_ZERO_WIDTH_SPACE}` : unsafePrefix;
  return Object.assign(Object.assign({}, MASKITO_DEFAULT_OPTIONS), {
    mask: generateMaskExpression({
      decimalSeparator,
      precision,
      thousandSeparator,
      prefix,
      postfix,
      isNegativeAllowed: min < 0,
      minusSign
    }),
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createInitializationOnlyPreprocessor({
      decimalSeparator,
      decimalPseudoSeparators: validatedDecimalPseudoSeparators,
      pseudoMinuses,
      prefix,
      postfix,
      minusSign
    }), createAffixesFilterPreprocessor({
      prefix,
      postfix
    }), createPseudoCharactersPreprocessor({
      validCharacter: minusSign,
      pseudoCharacters: pseudoMinuses,
      prefix,
      postfix
    }), createPseudoCharactersPreprocessor({
      validCharacter: decimalSeparator,
      pseudoCharacters: validatedDecimalPseudoSeparators,
      prefix,
      postfix
    }), createNotEmptyIntegerPartPreprocessor({
      decimalSeparator,
      precision,
      prefix,
      postfix
    }), createNonRemovableCharsDeletionPreprocessor({
      decimalSeparator,
      decimalZeroPadding,
      thousandSeparator
    }), createZeroPrecisionPreprocessor({
      precision,
      decimalSeparator,
      prefix,
      postfix
    }), createRepeatedDecimalSeparatorPreprocessor({
      decimalSeparator,
      prefix,
      postfix
    })],
    postprocessors: [createMinMaxPostprocessor({
      decimalSeparator,
      min,
      max,
      minusSign
    }), maskitoPrefixPostprocessorGenerator(prefix), maskitoPostfixPostprocessorGenerator(postfix), createThousandSeparatorPostprocessor({
      decimalSeparator,
      thousandSeparator,
      prefix,
      postfix,
      minusSign
    }), createDecimalZeroPaddingPostprocessor({
      decimalSeparator,
      decimalZeroPadding,
      precision,
      prefix,
      postfix
    }), emptyPostprocessor({
      prefix,
      postfix,
      decimalSeparator,
      minusSign
    })],
    plugins: [createLeadingZeroesValidationPlugin({
      decimalSeparator,
      thousandSeparator,
      prefix,
      postfix
    }), createNotEmptyIntegerPlugin({
      decimalSeparator,
      prefix,
      postfix
    }), createMinMaxPlugin({
      min,
      max,
      decimalSeparator
    })],
    overwriteMode: decimalZeroPadding ? ({
      value,
      selection: [from]
    }) => from <= value.indexOf(decimalSeparator) ? "shift" : "replace" : "shift"
  });
}
function maskitoTimeOptionsGenerator({
  mode,
  timeSegmentMaxValues = {},
  timeSegmentMinValues = {},
  step = 0
}) {
  const hasMeridiem = mode.includes("AA");
  const enrichedTimeSegmentMaxValues = Object.assign(Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MAX_VALUES), hasMeridiem ? {
    hours: 12
  } : {}), timeSegmentMaxValues);
  const enrichedTimeSegmentMinValues = Object.assign(Object.assign(Object.assign({}, DEFAULT_TIME_SEGMENT_MIN_VALUES), hasMeridiem ? {
    hours: 1
  } : {}), timeSegmentMinValues);
  return {
    mask: createTimeMaskExpression(mode),
    preprocessors: [createFullWidthToHalfWidthPreprocessor(), createColonConvertPreprocessor(), createZeroPlaceholdersPreprocessor(), createMeridiemPreprocessor(mode), createInvalidTimeSegmentInsertionPreprocessor({
      timeMode: mode,
      timeSegmentMinValues: enrichedTimeSegmentMinValues,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    })],
    postprocessors: [createMeridiemPostprocessor(mode), (elementState) => enrichTimeSegmentsWithZeroes(elementState, {
      mode,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    })],
    plugins: [createTimeSegmentsSteppingPlugin({
      fullMode: mode,
      step,
      timeSegmentMaxValues: enrichedTimeSegmentMaxValues
    }), createMeridiemSteppingPlugin(mode.indexOf("AA"))],
    overwriteMode: "replace"
  };
}

export {
  TuiCalendarMonth,
  calculateDisabledItemHandler,
  TUI_DAY_CAPS_MAPPER,
  TuiCalendarRange,
  TuiDayRangePeriod,
  tuiCreateDefaultDayRangePeriods,
  TUI_CHECKBOX_DEFAULT_OPTIONS,
  TUI_CHECKBOX_OPTIONS,
  tuiCheckboxOptionsProvider,
  TuiCheckbox,
  TuiDataListWrapperComponent,
  TuiDataListGroupWrapperComponent,
  TuiDataListWrapper,
  MaskitoDirective,
  maskitoPrefixPostprocessorGenerator,
  maskitoCaretGuard,
  maskitoRemoveOnBlurPlugin,
  maskitoDateOptionsGenerator,
  maskitoDateRangeOptionsGenerator,
  maskitoDateTimeOptionsGenerator,
  maskitoParseNumber,
  maskitoNumberOptionsGenerator,
  maskitoTimeOptionsGenerator,
  WHITESPACE,
  VALID_PUNCTUATION,
  Metadata,
  getCountryCallingCode,
  createExtensionPattern,
  VALID_PHONE_NUMBER_WITH_EXTENSION,
  parse,
  parsePhoneNumberWithError2 as parsePhoneNumberWithError,
  validatePhoneNumberLength,
  parsePreCandidate,
  isValidPreCandidate,
  isValidCandidate,
  PhoneNumberMatcher,
  AsYouType,
  tuiCreateTimePeriods,
  tuiIsFlat,
  tuiMaskito,
  tuiGetCallingCode,
  tuiToggleDay,
  TUI_FLOATING_PRECISION,
  tuiPercentageToKeyStepValue,
  tuiKeyStepValueToPercentage,
  TUI_SLIDER_DEFAULT_OPTIONS,
  TUI_SLIDER_OPTIONS,
  tuiSliderOptionsProvider,
  TuiSliderComponent,
  TuiSliderKeySteps,
  TuiSliderReadonly,
  TuiSliderThumbLabel,
  TuiSlider,
  TuiRangeChange,
  TuiRange,
  TuiStringifyContentPipe
};
//# sourceMappingURL=chunk-ZZR473VN.js.map
