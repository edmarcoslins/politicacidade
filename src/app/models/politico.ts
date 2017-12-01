export class Politico {
  private _id: string;
  private _nome: string;
  private _numero: string;
  private _partido: string;
  private _contato: string;

  constructor(
    id: string,
    nome: string,
    numero: string,
    partido: string,
    contato: string
  ) {
    this._id = id;
    this._nome = nome;
    this._numero = numero;
    this._partido = partido;
    this._contato = contato;
  }

  get id(): string{
    return this._id;
  }

  get nome(): string{
    return this._nome;
  }

  get numero(): string{
    return this._numero;
  }

  get partido(): string{
    return this._partido;
  }

  get contato(): string{
    return this._contato;
  }
}
