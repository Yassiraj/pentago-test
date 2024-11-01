import {
  TuiLoader,
  tuiParentAnimation
} from "./chunk-TJD5ECJX.js";
import {
  takeUntilDestroyed
} from "./chunk-HD67AN6P.js";
import {
  NgIf,
  NgTemplateOutlet
} from "./chunk-VS7PVOW5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directive,
  Input,
  TemplateRef,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-4P5RU55L.js";
import {
  timer
} from "./chunk-VPREGRCZ.js";

// node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-expand.mjs
var _c0 = ["wrapper"];
var _c1 = ["*"];
function TuiExpandComponent_ng_container_2_tui_loader_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tui-loader", 4);
    ɵɵelementContainer(1, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("overlay", true)("showLoader", ctx_r0.loading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
function TuiExpandComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵtemplate(2, TuiExpandComponent_ng_container_2_tui_loader_2_Template, 2, 3, "tui-loader", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.async)("ngIfElse", ctx_r0.content);
  }
}
var TuiExpandContent = class _TuiExpandContent {
  static {
    this.ɵfac = function TuiExpandContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _TuiExpandContent,
      selectors: [["", "tuiExpandContent", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandContent, [{
    type: Directive,
    args: [{
      standalone: true,
      selector: "[tuiExpandContent]"
    }]
  }], null, null);
})();
var State = {
  Idle: 0,
  Loading: 1,
  Prepared: 2,
  Animated: 3
};
var LOADER_HEIGHT = 48;
var TUI_EXPAND_LOADED = "tui-expand-loaded";
var TuiExpandComponent = class _TuiExpandComponent {
  constructor() {
    this.cdr = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.state = State.Idle;
    this.content = null;
    this.expanded = null;
    this.async = false;
  }
  set expandedSetter(expanded) {
    if (this.expanded === null) {
      this.expanded = expanded;
      return;
    }
    if (this.state !== State.Idle) {
      this.expanded = expanded;
      this.state = State.Animated;
      return;
    }
    this.expanded = expanded;
    this.retrigger(this.async && expanded ? State.Loading : State.Animated);
  }
  get contentVisible() {
    return this.expanded || this.state !== State.Idle;
  }
  get overflow() {
    return this.state !== State.Idle;
  }
  get loading() {
    return !!this.expanded && this.async && this.state === State.Loading;
  }
  get height() {
    const {
      expanded,
      state,
      contentWrapper
    } = this;
    if (expanded && state === State.Prepared || !expanded && state === State.Animated) {
      return 0;
    }
    if (contentWrapper && (!expanded && state === State.Prepared || expanded && state === State.Animated)) {
      return contentWrapper.nativeElement.offsetHeight;
    }
    if (contentWrapper && expanded && state === State.Loading) {
      return Math.max(contentWrapper.nativeElement.offsetHeight, LOADER_HEIGHT);
    }
    return null;
  }
  onTransitionEnd({
    propertyName,
    pseudoElement
  }) {
    if (propertyName === "opacity" && !pseudoElement && this.state === State.Animated) {
      this.state = State.Idle;
    }
  }
  onExpandLoaded(event) {
    event.stopPropagation();
    if (this.state === State.Loading) {
      this.retrigger(State.Animated);
    }
  }
  retrigger(state) {
    this.state = State.Prepared;
    timer(0).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.state !== State.Prepared) {
        return;
      }
      this.state = state;
      this.cdr.markForCheck();
    });
  }
  static {
    this.ɵfac = function TuiExpandComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TuiExpandComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TuiExpandComponent,
      selectors: [["tui-expand"]],
      contentQueries: function TuiExpandComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TuiExpandContent, 5, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
        }
      },
      viewQuery: function TuiExpandComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentWrapper = _t.first);
        }
      },
      hostVars: 9,
      hostBindings: function TuiExpandComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("transitionend.self", function TuiExpandComponent_transitionend_self_HostBindingHandler($event) {
            return ctx.onTransitionEnd($event);
          })("tui-expand-loaded", function TuiExpandComponent_tui_expand_loaded_HostBindingHandler($event) {
            return ctx.onExpandLoaded($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.expanded);
          ɵɵstyleProp("height", ctx.height, "px");
          ɵɵclassProp("_loading", ctx.loading)("_overflow", ctx.overflow)("_expanded", ctx.expanded);
        }
      },
      inputs: {
        async: "async",
        expandedSetter: [0, "expanded", "expandedSetter"]
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["wrapper", ""], [1, "t-wrapper"], [4, "ngIf"], ["size", "l", 3, "overlay", "showLoader", 4, "ngIf", "ngIfElse"], ["size", "l", 3, "overlay", "showLoader"], [3, "ngTemplateOutlet"]],
      template: function TuiExpandComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵtemplate(2, TuiExpandComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("@tuiParentAnimation", void 0)("@.disabled", ctx.overflow);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.contentVisible);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, TuiLoader],
      styles: ['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translateZ(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],
      data: {
        animation: [tuiParentAnimation]
      },
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TuiExpandComponent, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "tui-expand",
      imports: [NgIf, NgTemplateOutlet, TuiLoader],
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [tuiParentAnimation],
      host: {
        "[style.height.px]": "height",
        "[class._loading]": "loading",
        "[class._overflow]": "overflow",
        "[class._expanded]": "expanded",
        "[attr.aria-expanded]": "expanded",
        "(transitionend.self)": "onTransitionEnd($event)",
        [`(${TUI_EXPAND_LOADED})`]: "onExpandLoaded($event)"
      },
      template: '<div\n    #wrapper\n    class="t-wrapper"\n    @tuiParentAnimation\n    [@.disabled]="overflow"\n>\n    <ng-container *ngIf="contentVisible">\n        <ng-content />\n        <tui-loader\n            *ngIf="async; else content"\n            size="l"\n            [overlay]="true"\n            [showLoader]="loading"\n        >\n            <ng-container [ngTemplateOutlet]="content" />\n        </tui-loader>\n    </ng-container>\n</div>\n',
      styles: [':host{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}:host._overflow{overflow:hidden}:host._expanded{opacity:1;transform:translateZ(0)}:host._loading{opacity:.99}.t-wrapper:before,.t-wrapper:after{content:"";display:table}\n']
    }]
  }], null, {
    contentWrapper: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    content: [{
      type: ContentChild,
      args: [TuiExpandContent, {
        read: TemplateRef
      }]
    }],
    async: [{
      type: Input
    }],
    expandedSetter: [{
      type: Input,
      args: ["expanded"]
    }]
  });
})();
var TuiExpand = [TuiExpandComponent, TuiExpandContent];

export {
  TuiExpandContent,
  TUI_EXPAND_LOADED,
  TuiExpandComponent,
  TuiExpand
};
//# sourceMappingURL=chunk-OENT37UI.js.map
