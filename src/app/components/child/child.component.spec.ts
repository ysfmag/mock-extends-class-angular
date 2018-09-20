import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import mockparrent from "./mock-parrent";
import { ChildComponent } from "./child.component";

describe("ChildComponent", () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockparrent(component, {
      getProcessName: false,
      clientInformation: 1,
      parrentParams: {
        id: 3,
        name: "client"
      }
    });
  });

  it("should create", () => {
    expect(component.getProcessName()).toBeFalsy();
    expect(component.clientInformation).toBe(1);
    expect(component.parrentParams.id).toBe(3);
    expect(component.parrentParams.name).toBe("client");
    expect(component).toBeTruthy();
  });
});
