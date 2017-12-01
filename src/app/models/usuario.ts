export class Usuario {
  private _id: string;
  private _nome: string;
  private _senha: string;
  private _email: string;
  private _cpf: string;

  constructor(
    id: string,
    nome: string,
    senha: string,
    email: string,
    cpf: string
  ) {
    this._id = id;
    this._nome = nome;
    this._senha = senha;
    this._email = email;
    this._cpf = cpf;
  }

  get id(): string{
    return this._id;
  }

  get nome(): string{
    return this._nome;
  }

  get senha(): string{
    return this._senha;
  }

  get email(): string{
    return this._email;
  }

  get cpf(): string{
    return this._cpf;
  }

  public toJson() {
    return {
      email: this._nome,
      senha: this._senha
    };
  }
}
