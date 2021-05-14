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
        </div>
    )
}

export default CountriesTable
