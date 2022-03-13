import * as C from './styles'
import { useParams } from 'react-router-dom'
import { MainSection } from '../../components/MainSection/MainSection'
import { LatestBySection } from '../../components/LatestBySection/LatestBySection'

export const Sections = () => {
    const params = useParams()

    return (
        <C.Bussiness>
            <MainSection 
                title={params.section as string}
            />
            <LatestBySection 
                title={params.section as string}
            />
        </C.Bussiness>
    )
}