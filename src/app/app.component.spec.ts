import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, TaskListComponent], // Declara ambos componentes
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente principal', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el componente TaskListComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-task-list')).toBeTruthy();
  });

  it('debería agregar una tarea al localStorage', () => {
    const task = 'Nueva tarea';
    spyOn(localStorage, 'setItem'); // Espía el método setItem de localStorage

    component.addTask(task); // Llama al método que implementaremos
    expect(localStorage.setItem).toHaveBeenCalledWith('tasks', JSON.stringify([task]));
  });

  it('debería consultar las tareas desde el localStorage', () => {
    const tasks = ['Tarea 1', 'Tarea 2'];
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Simula datos en localStorage

    const result = component.getTasks(); // Llama al método que implementaremos
    expect(result).toEqual(tasks);
  });
});
