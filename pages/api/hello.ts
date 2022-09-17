// Make the `request` function generic
// to specify the return data type:
export async function request<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring 
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}
// This function is async, it will return a Promise:
): Promise<TResponse> {
  // Inside, we call the `fetch` function with 
  // a URL and config given:
  const response = await fetch(url, config);
  const data = await response.json();
  return data as TResponse;
    // We also can use some post-response
    // data-transformations in the last `then` clause.
}

export type Marca = IMarca[]
export interface IMarca {
  Label: string
  Value: string
}
//------------------

export interface ModelosAnos {
  Modelos: Modelo[]
  Anos: Ano[]
}

export interface Modelo {
  Label: string
  Value: number
}

export interface Ano {
  Label: string
  Value: string
}
//--------------------

export type ModelosAtravesDoAno = IModelosAtravesDoAno[]

export interface IModelosAtravesDoAno {
  Label: string
  Value: string
}

//-------------------------

export interface ITodosOsParametros {
  Valor: string
  Marca: string
  Modelo: string
  AnoModelo: number
  Combustivel: string
  CodigoFipe: string
  MesReferencia: string
  Autenticacao: string
  TipoVeiculo: number
  SiglaCombustivel: string
  DataConsulta: string
}














export interface IbodyConsultarMarcas {
  codigoTabelaReferencia: number
  codigoTipoVeiculo: number
}
export interface IbodyConsultarModelos {
  codigoTipoVeiculo: number
  codigoTabelaReferencia: number
  codigoModelo: string
  codigoMarca: string
  ano: string
  codigoTipoCombustivel:string
  anoModelo: string
  modeloCodigoExterno: string  
}
  //codigoTipoVeiculo=1
// &codigoTabelaReferencia=289
// &codigoModelo=6205
// &codigoMarca=26
// &ano=
// &codigoTipoCombustivel=
// &anoModelo=
// &modeloCodigoExterno=
export interface IbodyConsultarAnoModelo {
  codigoTipoVeiculo: number
  codigoTabelaReferencia: number
  codigoModelo: string
  codigoMarca: string
  ano: string
  codigoTipoCombustivel:string
  anoModelo: string
  modeloCodigoExterno: string  
}
export interface IbodyConsultarModelosAtravesDoAno {
  codigoTipoVeiculo: number
  codigoTabelaReferencia: number
  codigoModelo: number
  codigoMarca: number
  ano: number
  codigoTipoCombustivel:number
  anoModelo: number
  modeloCodigoExterno: number  
}
// codigoTabelaReferencia=289
// &codigoMarca=26
// &codigoModelo=6205
// &codigoTipoVeiculo=1
// &anoModelo=2014
// &codigoTipoCombustivel=1
// &tipoVeiculo=carro
// &modeloCodigoExterno=
// &tipoConsulta=tradicional

export interface IbodyConsultarValorComTodosParametros {
  codigoTabelaReferencia: number
  codigoMarca: string
  codigoModelo: string
  codigoTipoVeiculo: number
  anoModelo: string
  codigoTipoCombustivel:string
  tipoVeiculo: string
  modeloCodigoExterno: string
  tipoConsulta: string
}