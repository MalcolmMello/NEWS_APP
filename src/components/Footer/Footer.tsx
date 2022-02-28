import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'

export const Footer = () => {
    const { data } = useGetHomeNewsQuery('arg')

    return (
        <C.Footer>
            <p>{data?.copyright}</p>
        </C.Footer>
    )
}