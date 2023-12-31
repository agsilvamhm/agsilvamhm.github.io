import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit{

  id_tec =''

  tecnico: Tecnico = {
    id: 0,
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome     = new FormControl('',[Validators.minLength(5)])
  cpf      = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])

  constructor(private router: Router,
              private service: TecnicoService,
              private route: ActivatedRoute) { }

ngOnInit(): void {
  this.id_tec = this.route.snapshot.paramMap.get('id')!
  this.findById();
}

update():void {
  console.log(this.nome.value + " - " + this.cpf.value + " " + this.telefone.value )
  this.service.update(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico atualizado com sucesso!')
  }
  , err => {
    if (err.error.error.match('já cadastrado')) {
      this.service.message(err.error.error);
    } else {
       this.service.message(err.error.errors[0].message)
    }
  })
}

findById():void {
  this.service.findById(this.id_tec).subscribe(resposta =>{
    this.tecnico = resposta;
  })
}

  cancel(): void {
    this.router.navigate(['tecnicos']);
  }


  errorValidNome(){
    if (this.nome.invalid) {
      return 'O nome deve ter entre 5 e 100 caracteres!';
    }
    return false;
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
