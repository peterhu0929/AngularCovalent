"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var testing_2 = require("@angular/router/testing");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var testing_3 = require("@angular/http/testing");
var core_1 = require("@covalent/core");
var http_2 = require("@covalent/http");
var overview_component_1 = require("./overview.component");
var ngx_charts_1 = require("@swimlane/ngx-charts");
describe('Component: ProductOverview', function () {
    var noop = function () {
        // noop method
    };
    var generalResponses = new Map();
    generalResponses.set('assets/icons/covalent.svg', new http_1.Response(new http_1.ResponseOptions({
        status: 200, body: '<svg></svg>',
    })));
    generalResponses.set('assets/icons/github.svg', new http_1.Response(new http_1.ResponseOptions({
        status: 200, body: '<svg></svg>',
    })));
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                core_1.CovalentCoreModule,
                http_2.CovalentHttpModule.forRoot(),
                testing_2.RouterTestingModule,
                ngx_charts_1.NgxChartsModule,
                animations_1.NoopAnimationsModule,
            ],
            declarations: [
                overview_component_1.ProductOverviewComponent,
            ],
            providers: [
                testing_3.MockBackend,
                { provide: http_1.XHRBackend, useExisting: testing_3.MockBackend },
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                { provide: core_1.TdLoadingService, useValue: {
                        createComponent: noop,
                        createReplaceComponent: noop,
                        register: noop,
                        resolve: noop,
                    },
                },
            ],
        });
        testing_1.TestBed.compileComponents();
    }));
    it('should create the component', function (done) {
        testing_1.inject([testing_3.MockBackend], function (mockBackend) {
            var responses = new Map(generalResponses);
            mockBackend.connections.subscribe(function (connection) {
                connection.mockRespond(responses.get(connection.request.url));
            });
            responses.set('data/items.json', new http_1.Response(new http_1.ResponseOptions({
                status: 200, body: JSON.stringify([{
                        item_id: 1,
                        name: 'Suzy Cuningham',
                        description: 'updated her account',
                        icon: 'account_circle',
                        created: '07/13/2016 11:05 AM',
                    }, {
                        item_id: 2,
                        name: 'Bobby Daniels',
                        description: 'made a deposit of $25.15',
                        icon: 'account_balance_wallet',
                        created: '07/01/2016 03:41 PM',
                    }]),
            })));
            responses.set('data/users.json', new http_1.Response(new http_1.ResponseOptions({
                status: 200, body: JSON.stringify([{
                        displayName: 'Suzy Cuningham',
                        id: 'suzy.cuningham',
                        email: 'suzy.cuningham@gmail.com',
                        created: '10/01/2015 11:05 AM',
                        lastAccess: '12/23/2015 11:05 AM',
                        siteAdmin: true,
                    }, {
                        displayName: 'Bobby Daniels',
                        id: 'bobbyD',
                        email: 'bobbyD@outlook.com',
                        created: '10/01/2015 11:05 AM',
                        lastAccess: '12/23/2015 11:05 AM',
                        siteAdmin: false,
                    }]),
            })));
            var fixture = testing_1.TestBed.createComponent(overview_component_1.ProductOverviewComponent);
            var testComponent = fixture.debugElement.componentInstance;
            var element = fixture.nativeElement;
            expect(element.querySelector('.item-list')).toBeTruthy();
            expect(element.querySelector('.user-list')).toBeTruthy();
            testComponent.ngAfterViewInit();
            fixture.detectChanges();
            fixture.whenStable().then(function () {
                expect(element.querySelectorAll('.item-list a[md-list-item]').length)
                    .toBe(testComponent.items.length);
                expect(element.querySelectorAll('.user-list md-list-item').length)
                    .toBe(testComponent.users.length);
                done();
            });
        })();
    });
});
