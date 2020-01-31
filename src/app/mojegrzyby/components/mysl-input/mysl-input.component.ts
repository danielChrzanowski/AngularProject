import { Component, OnInit } from '@angular/core';
import { SerwisService } from 'src/app//mojegrzyby/services/serwis.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/_modal';
import { FileHandle } from './dragDrop.directive';

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
  bodyText: string;
  tempNazwa: string;

  constructor(private serwis: SerwisService, private formBuilder: FormBuilder, private modalService: ModalService) {
    this.myslTekst = '';
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nazwa: ['', [Validators.required]],
      ilosc: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
    });

    this.bodyText = "" + this.myslTekst;
  }

  get f() { return this.registerForm.controls; }


  private addMysl(): void {
    this.myslTekst = this.registerForm.get('nazwa').value + " - " + this.registerForm.get('ilosc').value;


    if (this.serwis.addMysl(this.myslTekst)) {
      this.dodane = this.myslTekst;
      this.myslTekst = '';
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key !== "0" && event.key !== "1"
      && event.key !== "2" && event.key !== "3"
      && event.key !== "4" && event.key !== "5"
      && event.key !== "6" && event.key !== "7"
      && event.key !== "8" && event.key !== "9") {
      event.preventDefault();
    }
  }

  OnInput(event: any) {
    this.tempNazwa = event.target.value;
    console.log(this.tempNazwa);
    if (this.tempNazwa.length > 30) {
      event.preventDefault();
    }
  }

  onSubmit() {
    this.submitted = true;

    //blad
    if (this.registerForm.invalid) {
      return;
    }

    //wszystko ok
    this.submitted = false;
    this.addMysl();
    this.registerForm.patchValue({
      nazwa: '',
      ilosc: ''
    });

  }

  openModal(id: string) {
    if (this.registerForm.valid)
      this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(files: FileHandle[]): void {
    this.files=null;

  }

}
