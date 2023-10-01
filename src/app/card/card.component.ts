import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  produtoNovo:string = ""
  menuType:string = "superuser"
  constructor() {
    this.produtos = [
      "Arcade Stick",
      "Jogo Tekken 8",
      "cabo usb",
      "LTG ISKYN",
    ]
  }

  ngOnInit(): void {

  }

  adicionar(){
    var produto:any|string = prompt("produto novo")
    this.produtoNovo = produto
    this.produtos.push(this.produtoNovo)
  }

  remover(){
    this.produtos.pop()
  }

}
