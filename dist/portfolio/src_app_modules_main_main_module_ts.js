"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_modules_main_main_module_ts"],{

/***/ 5380:
/*!**********************************************************!*\
  !*** ./src/app/core/directives/glow-effect.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlowEffectDirective: () => (/* binding */ GlowEffectDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class GlowEffectDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  onMouseMove(event) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    this.renderer.setStyle(this.el.nativeElement, '--x', `${x}px`);
    this.renderer.setStyle(this.el.nativeElement, '--y', `${y}px`);
  }
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 15px rgba(255, 255, 255, 0.5)');
  }
  onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
  }
}
_class = GlowEffectDirective;
_class.ɵfac = function GlowEffectDirective_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
_class.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _class,
  selectors: [["", "appGlowEffect", ""]],
  hostBindings: function GlowEffectDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function GlowEffectDirective_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      })("mouseenter", function GlowEffectDirective_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function GlowEffectDirective_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  }
});

/***/ }),

/***/ 6018:
/*!*****************************************************!*\
  !*** ./src/app/modules/main/main-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainRoutingModule: () => (/* binding */ MainRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 9258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}
// {
//     path: 'projects',
//     component: ProjectsComponent
// },
// {
//     path: 'experience',
//     component: ExperienceComponent
// },
// {
//   path: 'portfolio/home',
//   component: HomeComponent
// },
// {
//   path: 'portfolio/home',
//   component: HomeComponent
// },
];

class MainRoutingModule {}
_class = MainRoutingModule;
_class.ɵfac = function MainRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2493:
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainModule: () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 6018);
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component */ 6054);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 4805);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience/experience.component */ 171);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ 2171);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 9258);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ 4069);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skills/skills.component */ 2999);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ 8524);
/* harmony import */ var lucide_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-angular */ 8055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;












class MainModule {}
_class = MainModule;
_class.ɵfac = function MainModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, lucide_angular__WEBPACK_IMPORTED_MODULE_11__.LucideAngularModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MainModule, {
    declarations: [_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__.NavbarComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__.SkillsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, lucide_angular__WEBPACK_IMPORTED_MODULE_11__.LucideAngularModule]
  });
})();

/***/ }),

/***/ 5046:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/project-details/project-details.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


const _c0 = ["*"];
class ProjectDetailsComponent {
  constructor() {
    // @Input() data: any;
    // @Input() height: string = '300px';
    // @Input() width: string = '400px';
    // @ViewChild('dialog', { static: true }) dialog?: ElementRef;
    // constructor(private renderer: Renderer2) { }
    // open() {
    //   this.renderer.setStyle(this.dialog?.nativeElement, 'display', 'block');
    // }
    // close() {
    //   this.renderer.setStyle(this.dialog?.nativeElement, 'display', 'none');
    // }
    this.isOpen = false;
    this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  close() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
  stopPropagation(event) {
    event.stopPropagation();
  }
}
_class = ProjectDetailsComponent;
_class.ɵfac = function ProjectDetailsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-project-details"]],
  inputs: {
    isOpen: "isOpen"
  },
  outputs: {
    isOpenChange: "isOpenChange"
  },
  ngContentSelectors: _c0,
  decls: 9,
  vars: 0,
  consts: [[1, "custom-dialog-overlay", 3, "click"], [1, "custom-dialog-content", 3, "click"], [1, "custom-dialog-header"], [1, "close-button", 3, "click"], [1, "custom-dialog-body"]],
  template: function ProjectDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_div_click_0_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_div_click_1_listener($event) {
        return ctx.stopPropagation($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Header ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_span_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " content ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".custom-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.custom-dialog-content[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0);\n  padding: 20px;\n  border-radius: 8px;\n  max-width: 80%;\n  max-height: 80%;\n  overflow: auto;\n}\n\n.custom-dialog-header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: right;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.custom-dialog-body[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWRpYWxvZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jdXN0b20tZGlhbG9nLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jdXN0b20tZGlhbG9nLWhlYWRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY3VzdG9tLWRpYWxvZy1ib2R5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8524:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SHARED_COMPONENTS: () => (/* binding */ SHARED_COMPONENTS),
/* harmony export */   SHARED_DIRECTIVE: () => (/* binding */ SHARED_DIRECTIVE),
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details/project-details.component */ 5046);
/* harmony import */ var src_app_core_directives_glow_effect_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/directives/glow-effect.directive */ 5380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const SHARED_DIRECTIVE = [src_app_core_directives_glow_effect_directive__WEBPACK_IMPORTED_MODULE_1__.GlowEffectDirective];
const SHARED_COMPONENTS = [_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent, ...SHARED_DIRECTIVE];
class SharedModule {}
_class = SharedModule;
_class.ɵfac = function SharedModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent, src_app_core_directives_glow_effect_directive__WEBPACK_IMPORTED_MODULE_1__.GlowEffectDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_0__.ProjectDetailsComponent, src_app_core_directives_glow_effect_directive__WEBPACK_IMPORTED_MODULE_1__.GlowEffectDirective]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_main_main_module_ts.js.map