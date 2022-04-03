import { memo } from "react";
import RefreshIcon from "../../../../assets/images/refresh.svg";
import { Card, Typography, Button, Select, MenuItem } from "../../../../components";
import COUNTRIES from "../../../../commons/constants/countries";
import { CardPanelContent, Item } from "./styles";

const navigationHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <Item>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </Item>
        </MenuItem>
    )

    return (
        <Card>
            <CardPanelContent>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID19</Typography>
                    <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
            </CardPanelContent>
        </Card>
    )
}

export default memo(Panel);