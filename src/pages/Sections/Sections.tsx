import * as C from './styles'
import { useGetNewsBySectionQuery } from '../../api/NewsApi'
import { useParams } from 'react-router-dom'
import { MainSection } from '../../components/MainSection/MainSection'

export const Sections = () => {
    const params = useParams()
    const { data } = useGetNewsBySectionQuery(params.section as string)

    return (
        <C.Bussiness>
            <MainSection 
                title={params.section as string}
            />
        </C.Bussiness>
    )
}