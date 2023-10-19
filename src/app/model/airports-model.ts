export interface AirportsModel {
airports: Airport[]
}

export interface Airport{
    code:string,
    connections:[],
    currency:string,
    name:string,
    restrictedOnDeparture:string,
    restrictedOnDestination:string
}