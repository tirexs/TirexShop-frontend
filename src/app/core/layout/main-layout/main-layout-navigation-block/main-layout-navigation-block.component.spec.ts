import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainLayoutNavigationBlockComponent } from './main-layout-navigation-block.component'

describe('MainLayoutNavigationBlockComponent', () => {
  let component: MainLayoutNavigationBlockComponent
  let fixture: ComponentFixture<MainLayoutNavigationBlockComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLayoutNavigationBlockComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutNavigationBlockComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
