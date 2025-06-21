import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { UIService } from '../../../../shared/services/UIService';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [SharedModule, TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  usersList: Array<any> = [];
  isPageLoaded: boolean = false;

  constructor(
    private userService: UserService,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Fetch users from the service
  getAllUsers(): void {
    this.uiService.spinner.show();
    this.userService.GetAllUsers()
      .pipe(finalize(() => {
        this.uiService.spinner.hide();
        this.isPageLoaded = true;
      }))
      .subscribe({
        next: (data) => {
          this.usersList = data;
        },
        error: () => {
          this.uiService.toast.error('Failed to load users');
        }
      });
  }

  columnsConfig = [
    { key: 'id', label: 'ID', width: '60px' },
    { key: 'name', label: 'Name', width: '150px' },
    { key: 'email', label: 'Email', width: '250px' },
    { key: 'age', label: 'Age', width: '100px' },
    { key: 'phone', label: 'Phone Number', width: '100px' },
    { key: 'dob', label: 'DOB', width: '100px' },
    { key: 'bio', label: 'Bio', width: '100px' }
  ];
}
