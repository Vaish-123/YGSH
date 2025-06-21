import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { UserService } from '../../../services/user.service';
import { SaveUserEntity } from '../model/userModel';
import { UIService } from '../../../../shared/services/UIService';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  userDetailsForm!: FormGroup;
  roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private uiService: UIService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.userDetailsForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null, [Validators.min(0), Validators.max(120)]],
      dob: [null, Validators.required],
      phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      role: [''],
      status: [true],
      bio: ['']
    });
  }

  validateUserDetails(): boolean {
    if (this.userDetailsForm.invalid) {
      this.userDetailsForm.markAllAsTouched();
      return false;
    }

    return true
  }

  onSubmit() {
    // if (!this.validateUserDetails()) {
    //   this.uiService.alert.error('Please enter mandatory fields');
    //   return;
    // }
    const userData: SaveUserEntity = this.userDetailsForm.getRawValue();

    this.userService.SaveUser(userData).subscribe({
      next: (response) => {
        console.log(response);

        this.uiService.alert.success('User saved successfully!');
        this.onCancel();
      },
      error: () => {
        this.uiService.alert.error('Failed to save user');
      }
    });
  }

  onCancel() {
    this.userDetailsForm.reset();
  }

}
