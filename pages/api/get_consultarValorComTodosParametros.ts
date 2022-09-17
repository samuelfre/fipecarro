import type { VercelRequest, VercelResponse } from '@vercel/node';
import { ITodosOsParametros, request } from './hello';

export default async function (req: VercelRequest, res: VercelResponse) {
    const { url_ConsultarValorComTodosParametros, valorComTodosParametros } = JSON.parse(req.body)
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
    res.send(todosParametros);
}