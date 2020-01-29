import { Component, OnInit } from '@angular/core';
import { SerwisService } from 'src/app//mojegrzyby/services/serwis.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mysl-input',
  templateUrl: './mysl-input.component.html',
  styleUrls: ['./mysl-input.component.scss']
})
export class MyslInputComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public myslTekst: string;
  public dodane: string;

  constructor(private serwis: SerwisService, private formBuilder: FormBuilder) {
    this.myslTekst = '';
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nazwa: ['', Validators.required],
      ilosc: ['', [Validators.required, Validators.min(1)]],
    });
  }

  get f() { return this.registerForm.controls; }


  private addMysl(): void {
    this.myslTekst = this.registerForm.get('nazwa').value + " - " + this.registerForm.get('ilosc').value;


    if (this.serwis.addMysl(this.myslTekst)) {
      this.dodane = this.myslTekst;
      this.myslTekst = '';
    }
  }

  onSubmit() {
    this.submitted = true;

    //blad
    if (this.registerForm.invalid) {
      return;
    }

    //wszystko ok
    this.registerForm.patchValue({
      nazwa: '',
      ilosc: ''
    });

  }

}
