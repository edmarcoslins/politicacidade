export class Cidade {
  private _id: string;
  private _cidade: string;
  private _habitantes: string;
  private _estado: string;
  private _uf: string;

  constructor(
    id: string,
    cidade: string,
    habitantes: string,
    estado: string,
    uf: string
  ) {
    this._id = id;
    this._cidade = cidade;
    this._habitantes = habitantes;
    this._estado = estado;
    this._uf = uf;
  }

  get id(): string{
    return this._id;
  }

  get cidade(): string{
    return this._cidade;
  }

  get habitantes(): string{
    return this._habitantes;
  }

  get estado(): string{
    return this._estado;
  }

  get uf(): string{
    return this._uf;
  }
}
