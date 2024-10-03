
type NativeName = {
    [key: string]: {
        official: string;
        common: string;
    };
};
type Currencies = {
    [key: string]: {
        name: string;
        symbol: string;
    };
};
type Languages = {
    [key: string]: string
};


type Demonyms = {
    [key: string]: {
        f: string,
        m: string
    }
};

export type CountrySummaryInformation = {
    name: {
        common: string,
        official: string,
        nativeName: NativeName
    },
    flag: string
    continents: string
    coordinates: [number, number]
    capital: {
        name?: string,
        coordinates?: [number, number]
    }
}
export class Countries {
    data: {
        name: {
            common: string,
            official: string,
            nativeName: NativeName
        },
        tld: string[],
        cca2: string,
        ccn3: string,
        cca3: string,
        cioc: string,
        independent: true,
        status: string,
        unMember: true,
        currencies: Currencies,
        idd: {
            root: string,
            suffixes: string[]
        },
        capital: string[],
        altSpellings: string[],
        region: string,
        subregion?: string,
        languages?: Languages
        translations: NativeName,
        latlng: [number, number],
        landlocked: boolean,
        borders?: string[],
        area: number,
        demonyms: Demonyms,
        flag: string,
        maps: {
            googleMaps: string
            openStreetMaps: string
        },
        population: number,
        gini?: {
            [key: string]: number
        },
        fifa?: string,
        car: {
            signs: string[],
            side: string
        },
        timezones: string[],
        continents: string[],
        flags: {
            png: string
            svg: string
            alt: string
        },
        coatOfArms: {
            png: string
            svg: string
        },
        startOfWeek: string,
        capitalInfo: {
            latlng: [
                number,
                number
            ],
            postalCode?: {
                format: string,
                regex: string
            }
        },
        postalCode?: {
            format: string,
            regex: string
        }
    }[]

    constructor(data: Countries["data"]) {
        this.data = data.sort((a, b) => a.name.common.localeCompare(b.name.common))

    }

    getCountries() {
        return this.data
    }


    getSummaryInformation() {
        return this.data.map((item) => ({
            name: item.name,
            flag: item.flags.svg,
            continents: item.continents[0],
            coordinates: item.latlng,
            capital: {
                name: item?.capital?.[0] || undefined,
                coordinates: item.capitalInfo?.latlng || undefined
            }
        }))
    }
}