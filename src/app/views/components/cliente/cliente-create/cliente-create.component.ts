import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {

  cliente: Cliente = {
    id: 0,
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('',[Validators.minLength(5)])
  cpf = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])

  constructor(private router: Router,
    private service: ClienteService) { }

  cancel(): void {
    this.router.navigate(['clientes']);
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes']);
      this.service.message('Cliente criado com sucesso!');
    }, err => {
      if (err.error.error.match('já cadastrado')) {
        this.service.message(err.error.error);
      } else {
         this.service.message(err.error.errors[0].message)
      }
    })
  }

  errorValidNome():string{
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return '';
  }

  errorValidCpf(){
    if (this.cpf.invalid) {
      return 'O CPF deve ter 11 e 15 caracteres!';
    }
    return false;
  }

  errorValidTelefone(){
    if (this.telefone.invalid) {
      return 'O telefone deve ter 11 e 18 caracteres!';
    }
    return false;
  }
}
