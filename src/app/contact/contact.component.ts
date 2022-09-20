import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


function isValidPhone(control: FormControl) {
  if (/^\d+$/.test(control.value)) {
    return null;
  }
  return { phone: true };
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactGroup = this.fb.group({
    name: ['', Validators.required],
    contacts: this.fb.array([
      this.fb.group({
        email: [null, { validators: [Validators.required, Validators.email] }],
        phone: [null, [Validators.required, isValidPhone]],
      })
    ]),
    message: ['Hello There!'],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactGroup.value);
  }

  addContact() {
    this.contactGroup.controls.contacts.push(this.fb.group({
      email: [null, { validators: [Validators.required, Validators.email] }],
      phone: [null, [Validators.required, isValidPhone]],
    }))
  }

  deleteContact(i: number) {
    this.contactGroup.controls.contacts.removeAt(i);
  }

}
