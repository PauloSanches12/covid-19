const path = 'https://coronavirus-19-api.herokuapp.com/countries'

function getCountry(country) {
    return fetch(`${path}/${country}`, {
        method: "get",
        mode: "cors",
        cache: "default"
    })
        .then((response) => response.json())
}

export default { getCountry };