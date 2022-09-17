import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import Loading from '../components/loading'
import styles from '../styles/Home.module.css'
import { IbodyConsultarAnoModelo, IbodyConsultarMarcas, IbodyConsultarModelos, IbodyConsultarValorComTodosParametros, ITodosOsParametros, Marca, ModelosAnos, ModelosAtravesDoAno, request } from './api/hello'

const urlTabelFipe = 'https://fipecarro.com.br/'
const url_ConsultarMarcas = 'https://veiculos.fipe.org.br/api/veiculos//ConsultarMarcas'
const url_ConsultarModelos = 'https://veiculos.fipe.org.br/api/veiculos//ConsultarModelos'
const url_ConsultarAnoModelo = 'https://veiculos.fipe.org.br/api/veiculos//ConsultarAnoModelo'
const url_ConsultarValorComTodosParametros = 'https://veiculos.fipe.org.br/api/veiculos//ConsultarValorComTodosParametros'
const codigoTabelaReferencia = 289
const codigoTipoVeiculo = 1
const fipeURL = () => 'https://www.fipe.org.br/Content/img/logo_fipe.png' //Logo



const Home: NextPage<{ MARCA:Marca, data:string }> = ({ MARCA, data }) => {

  const [filtro, setFiltro] = useState<{
    indexMarca: string,
    indexModelo: string,
    marca: Marca,
    Modelos?: ModelosAnos['Modelos'],
    Anos?: ModelosAnos['Anos'],
    modelosAtravesDoAno?: ModelosAtravesDoAno,
    consultarValorComTodosParametros?: ITodosOsParametros,
    dataConsulta?: string,
  }>({
    indexMarca: '0',
    indexModelo: '0',
    marca: MARCA,
  })


  //CLIQUE NA MARCA
  const handleMarca = async (event: ChangeEvent<HTMLSelectElement>) => {
    // setFiltro({
    //   marca: event.target.value,
    //   Modelos: ModelosAnos.Modelos
    // })
    const bodyModelos: IbodyConsultarModelos = {
      codigoTipoVeiculo: codigoTipoVeiculo,
      codigoTabelaReferencia: codigoTabelaReferencia,
      codigoModelo: '',
      codigoMarca: event.target.value,
      ano: '',
      codigoTipoCombustivel: '',
      anoModelo: '',
      modeloCodigoExterno: ''
    }
    const modelosAnos = await request<ModelosAnos>(url_ConsultarModelos, {
      'method': 'POST',
      'headers': {
        'authority': 'veiculos.fipe.org.br',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'pt-BR,pt;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'ROUTEID=.5',
        'origin': 'https://veiculos.fipe.org.br',
        'referer': 'https://veiculos.fipe.org.br/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: JSON.stringify(bodyModelos)
        .replaceAll("\"", "")
        .replaceAll(":", "=")
        .replaceAll(",", "&")
        .replaceAll("{", "")
        .replaceAll("}", "")
    })
    setFiltro({
      indexMarca: event.target.value,
      indexModelo: filtro.indexModelo,
      marca: filtro.marca,
      Modelos: modelosAnos.Modelos,
      Anos: modelosAnos.Anos
    })
  }

  //CLIQUE NO MODELO
  const handleModelo = async (event: ChangeEvent<HTMLSelectElement>) => {
    const consultarAnoModelo: IbodyConsultarAnoModelo = {
      codigoTipoVeiculo: codigoTipoVeiculo,
      codigoTabelaReferencia: codigoTabelaReferencia,
      codigoModelo: event.target.value,
      codigoMarca: filtro.indexMarca,
      ano: '',
      codigoTipoCombustivel: '',
      anoModelo: '',
      modeloCodigoExterno: ''
    }
    const modelosAtravesDoAno = await request<ModelosAtravesDoAno>(url_ConsultarAnoModelo, {
      'method': 'POST',
      'headers': {
        'authority': 'veiculos.fipe.org.br',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'pt-BR,pt;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'ROUTEID=.5',
        'origin': 'https://veiculos.fipe.org.br',
        'referer': 'https://veiculos.fipe.org.br/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: JSON.stringify(consultarAnoModelo)
        .replaceAll("\"", "")
        .replaceAll(":", "=")
        .replaceAll(",", "&")
        .replaceAll("{", "")
        .replaceAll("}", "")
    })

    setFiltro({
      marca: filtro.marca,
      Anos: filtro.Anos,
      Modelos: filtro.Modelos,
      indexMarca: filtro.indexMarca,
      indexModelo: event.target.value,
      modelosAtravesDoAno: modelosAtravesDoAno
    })
  }

  //CLIQUE NO ANO DO MODELO
  const handleAnoModelo = async (event: any) => {
    console.log('entrou');

    const valorComTodosParametros: IbodyConsultarValorComTodosParametros = {
      codigoTabelaReferencia: codigoTabelaReferencia,
      codigoMarca: filtro.indexMarca,
      codigoModelo: filtro.indexModelo,
      codigoTipoVeiculo: codigoTipoVeiculo,
      anoModelo: event.target.value.split('-')[0],
      codigoTipoCombustivel: event.target.value.split('-')[1], //alterar
      tipoVeiculo: 'carro',
      modeloCodigoExterno: '',
      tipoConsulta: 'tradicional'
    }
    const todosParametros = await request<ITodosOsParametros>(url_ConsultarValorComTodosParametros, {
      'method': 'POST',
      'headers': {
        'authority': 'veiculos.fipe.org.br',
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'pt-BR,pt;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'cookie': 'ROUTEID=.5',
        'origin': 'https://veiculos.fipe.org.br',
        'referer': 'https://veiculos.fipe.org.br/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
      },
      body: JSON.stringify(valorComTodosParametros)
        .replaceAll("\"", "")
        .replaceAll(":", "=")
        .replaceAll(",", "&")
        .replaceAll("{", "")
        .replaceAll("}", "")
    })
    setFiltro({
      marca: filtro.marca,
      Anos: filtro.Anos,
      Modelos: filtro.Modelos,
      indexMarca: filtro.indexMarca,
      modelosAtravesDoAno: filtro.modelosAtravesDoAno,
      indexModelo: filtro.indexModelo,
      consultarValorComTodosParametros: todosParametros,
      dataConsulta: new Date().toLocaleString()
    })
  }

  if (!filtro.marca) return <Loading />

  return (
    <div className={styles.container}>
      <Head>
        <title>Fipe Carro</title>
        <meta name="description" content="Tabela Fipe de Carros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.adjustLogo}>
          <h1 className={styles.title}>
            Consultar <a href={`${urlTabelFipe}`}>Tabela Fipe!</a>
          </h1>
          <br />
          <br />
          <div>
            <Image
              loader={fipeURL}
              src="fipe.png"
              alt="Tabela Fipe"
              width={150}
              height={150}
            />
          </div>
        </div>

        <p className={styles.description}>
          Faça uma busca do seu <span>carro</span> abaixo.
        </p>
        <div className={styles.separateCards}>

          <div className={styles.card}>

            <p>Escolha a marca</p>
            <select onChange={(event: ChangeEvent<HTMLSelectElement>) => handleMarca(event)} className={styles.select} name="select" defaultValue={0}>
              {
                filtro.marca.map((value, index) => <option key={index} value={value.Value}>{value.Label}</option>)
              }
            </select>

            <p>Escolha o modelo</p>
            <select onChange={(event: ChangeEvent<HTMLSelectElement>) => handleModelo(event)} className={styles.select} name="select" defaultValue={0}>
              {
                filtro.Modelos?.map((value) => <option key={value.Label} value={value.Value}>{value.Label}</option>) ?? <option value={0}>{'Escolha a marca primeiro'}</option>
              }
            </select>

            <p>Escolha o ano do modelo</p>
            {
              (filtro.modelosAtravesDoAno?.length === 1) ? <select onClick={(event) => handleAnoModelo(event)} name="select" defaultValue={0}>
                {
                  filtro.modelosAtravesDoAno?.map((value) => <option key={value.Label} value={value.Value}>{value.Label}</option>) ?? <option value={0}>{'Escolha o modelo primeiro'}</option>
                }
              </select> : <select onChange={(event) => handleAnoModelo(event)} name="select" defaultValue={0}>
                {
                  filtro.modelosAtravesDoAno?.map((value) => <option key={value.Label} value={value.Value}>{value.Label}</option>) ?? <option value={0}>{'Escolha o modelo primeiro'}</option>
                }
              </select>
            }
          </div>

          <div className={(!filtro.consultarValorComTodosParametros?.Valor) ? styles.hidden : styles.card}>
            <div className={styles.divCard}>
              <div>
                <h3>{'Código FIPE'}</h3>
                <p>{`${filtro.consultarValorComTodosParametros?.CodigoFipe}`}</p>
                <h3>{'Marca'}</h3>
                <p>{`${filtro.consultarValorComTodosParametros?.Marca}`}</p>
                <h3>{'Modelo'}</h3>
                <p>{`${filtro.consultarValorComTodosParametros?.Modelo}`}</p>
              </div>
              <div>
                <h3>{'Ano modelo'}</h3>
                <p>{`${filtro.consultarValorComTodosParametros?.AnoModelo} ${filtro.consultarValorComTodosParametros?.Combustivel}`}</p>
                <h3>{'Data da consulta'}</h3>
                <p>{`${filtro.dataConsulta}`}</p>
                <h3>{'Preço Médio'}</h3>
                <h1>{`${filtro.consultarValorComTodosParametros?.Valor}`}</h1>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <div>{`Última atualização: ${data}`}</div>
        <br />
        <div>© 2022 Todos os direitos reservados à Fipe</div>
      </footer>
    </div>
  )

}


export async function getStaticProps() {  
  const codigoAtualizado = await fetch("https://veiculos.fipe.org.br/api/veiculos//ConsultarTabelaDeReferencia", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "pt-BR,pt;q=0.7",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://veiculos.fipe.org.br/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  }).then(value => value.json());
  const data = codigoAtualizado[0].Mes
  const bodyMarcas: IbodyConsultarMarcas = {
    codigoTabelaReferencia: codigoAtualizado[0].Codigo,
    codigoTipoVeiculo: 1
  }
  const MARCA = await request<Marca>(url_ConsultarMarcas, {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "pt-BR,pt;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://veiculos.fipe.org.br/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify(bodyMarcas)
      .replaceAll("\"", "")
      .replaceAll(":", "=")
      .replaceAll(",", "&")
      .replaceAll("{", "")
      .replaceAll("}", ""),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })

  return {
    props: {
      MARCA,
      data
    },
  }
}

export default Home
