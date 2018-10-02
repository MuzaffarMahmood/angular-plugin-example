(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.plugin = {}),global.i0));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    class PluginService {
        constructor() { }
        /**
         * @return {?}
         */
        getTest() {
            return 'test ok';
        }
    }
    PluginService.decorators = [
        { type: i0.Injectable }
    ];
    PluginService.ctorParameters = () => [];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    class PluginComponent {
        /**
         * @param {?} pluginService
         */
        constructor(pluginService) {
            this.pluginService = pluginService;
        }
        /**
         * @return {?}
         */
        ngOnInit() {
        }
    }
    PluginComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'plugin-plugin',
                    template: `
    <p>
      plugin {{title}}!
    </p>
    <div>from service:{{pluginService.getTest()}}</div>
    <ng-content></ng-content>
  `
                }] }
    ];
    PluginComponent.ctorParameters = () => [
        { type: PluginService }
    ];
    PluginComponent.propDecorators = {
        title: [{ type: i0.Input }]
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    class PluginModule {
    }
    PluginModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [],
                    declarations: [PluginComponent],
                    exports: [PluginComponent],
                    entryComponents: [PluginComponent],
                    providers: [PluginService]
                },] }
    ];

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var styles_PluginComponent = [];
    var RenderType_PluginComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_PluginComponent, data: {} });
    function View_PluginComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, [" plugin ", "! "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["from service:", ""])), i0.ɵncd(null, 0)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.pluginService.getTest(); _ck(_v, 3, 0, currVal_1); }); }
    function View_PluginComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "plugin-plugin", [], null, null, null, View_PluginComponent_0, RenderType_PluginComponent)), i0.ɵdid(1, 114688, null, 0, PluginComponent, [PluginService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
    var PluginComponentNgFactory = i0.ɵccf("plugin-plugin", PluginComponent, View_PluginComponent_Host_0, { title: "title" }, {}, ["*"]);

    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */ 
    var PluginModuleNgFactory = i0.ɵcmf(PluginModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [PluginComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, PluginService, PluginService, []), i0.ɵmpd(1073742336, PluginModule, PluginModule, [])]); });

    exports.PluginModuleNgFactory = PluginModuleNgFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
