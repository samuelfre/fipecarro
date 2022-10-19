import React from 'react'
import { parseISO, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IDate {
    dateString: string
}
const Date = (props: IDate) => {
    
    const date = parseISO(props.dateString)
    return (<time dateTime={props.dateString}>{format(date, 'dd/LL/yyyy', {
        locale: ptBR
    })}</time>)
}
export default Date