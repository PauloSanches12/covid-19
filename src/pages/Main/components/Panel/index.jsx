import { memo } from "react";
// import RefreshIcon from "../../../../assets/images/refresh.svg";
import { Card, Typography, Button, Select, MenuItem } from "../../../../components";
import COUNTRIES from "../../../../commons/constants/countries";
import { CardPanelContent, Item, Div } from "./styles";


function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const tela = window.screen.width;
    const { cases, recovered, deaths, todayCases, todayDeaths } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <Item>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </Item>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered} - Casos: ${cases} Óbitos: ${deaths} - Casos hoje: ${todayCases} Óbitos hoje: ${todayDeaths} `;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid-19 - ${country}`,
            text: textCovid19,
            url: "https://covid19pwa.netlify.app/"
        })
    }
    
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContent>
                <Div>
                    <Typography variant="h5" component="span" color="primary">COVID-19</Typography>
                    <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </Div>
                {tela > 500 ? renderShareButton : renderCopyButton}
            </CardPanelContent>
        </Card>
    )
}

export default memo(Panel);