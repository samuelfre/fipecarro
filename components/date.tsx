import React from 'react'
import { parseISO, format } from 'date-fns'

interface IDate {
    dateString: string
}
const Date = (props: IDate) => {
    const date = parseISO(props.dateString)
    return <time dateTime={props.dateString}>{format(date, 'd/LL/yyyy')}</time>
}
export default Date