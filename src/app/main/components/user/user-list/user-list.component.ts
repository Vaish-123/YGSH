import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { TableComponent } from '../../../../shared/components/table/table.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule, TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 4, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 5, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 6, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 7, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 8, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 9, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 10, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 11, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 12, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 13, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 14, name: 'Bob', email: 'bob@example.com', role: 'User' },
    // … your actual user data …
  ];

  columnsConfig = [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'name', label: 'Name', width: '150px' },
    { key: 'email', label: 'Email', width: '250px' },
    { key: 'role', label: 'Role', width: '100px' }
  ];
}
