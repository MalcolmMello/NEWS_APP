import * as C from './styles'
import { useGetHomeNewsQuery } from '../../api/NewsApi'

export const Home = () => {
    const { data, isFetching } = useGetHomeNewsQuery('')
    
    return (
        <C.Home>

        </C.Home>
    )
}