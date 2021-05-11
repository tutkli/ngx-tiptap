import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DraggableDirective } from './draggable.directive';

@Component({
  template: `<div tiptapDraggable>Hello Tiptap!</div>`
})
class TestComponent { }

describe('DraggableDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        DraggableDirective,
      ]
    });

    await TestBed.compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance;

    fixture.detectChanges()
  });

  it('should create an instance', () => {
    const directive = new DraggableDirective();
    expect(directive).toBeTruthy();
  });

  it('should add the attributes correctly', () => {
    expect(fixture.debugElement.query(By.css('[data-drag-handle]'))).toBeTruthy()
    expect(fixture.debugElement.query(By.css('[draggable]'))).toBeTruthy()
  })
});