import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoComponent {
  todos:Todo[] = [
    { id: 1, description: 'Learn Angular' },
    { id: 2, description: 'Build a todo app' }
  ];
  currentTodo:Todo = { id:0, description: '' };
  isEditing = false;
  nextId = 3; // Assuming you start with IDs 1 and 2
  constructor(private router: Router) { }
  addTodo() {
    if (this.currentTodo.description.trim()) {
      this.todos.push({
        id: this.nextId++,
        description: this.currentTodo.description.trim()
      });
      this.resetForm();
    }
  }

  edit(todo:Todo) {
    this.currentTodo = { ...todo };
    this.isEditing = true;
  }

  save() {
    if (this.currentTodo.description.trim()) {
      if (this.isEditing) {
        const index = this.todos.findIndex(todo => todo.id === this.currentTodo.id);
        if (index !== -1) {
          this.todos[index].description = this.currentTodo.description.trim();
        }
      } else {
        this.addTodo();
      }
    }
    this.resetForm();
  }

  delete(id:number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  cancel() {
    this.resetForm();
  }
  backToWelcome(){
    this.router.navigate(['/welcome/prasad']);
  }
  logout(){
    this.router.navigate(['/']);
  }

  private resetForm() {
    this.currentTodo = { id: 0, description: '' };
    this.isEditing = false;
  }
}
