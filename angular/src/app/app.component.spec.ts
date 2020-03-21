import { TestBed, ComponentFixture } from '@angular/core/testing';

// External libraries
import { configureTestSuite, createTestContext, TestCtx } from 'ng-bullet';

// Components
import { AppComponent } from './app.component';

describe('AppComponent', () => {
	let ctx: TestCtx<AppComponent>;
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	configureTestSuite((() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
		});
	}));

	beforeEach(() => {
		ctx = createTestContext(AppComponent);
		component = ctx.component;
		fixture = ctx.fixture;
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});
});