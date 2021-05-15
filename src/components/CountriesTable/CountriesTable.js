import { Button } from '@material-ui/core'
import styles from './CountriesTable.module.css'

const CountriesTable = ({countries}) => {
    return (
        <div>
            <div className = {styles.heading}>
                <Button className = {styles.heading_name}>
                    <div>
                        Name
                    </div>
                </Button>

                <Button className = {styles.heading_population}>
                    <div>
                        Name
                    </div>
                </Button>
            </div>

            { countries.map((country) => (
                <div className = {styles.row}>
                    <div className = {styles.name}>{country.name}</div>

                    <div className ={styles.population}>{country.population}</div>
                </div> 
            ))} 
        </div>
    )
}

export default CountriesTable
