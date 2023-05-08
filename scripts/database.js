export const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "linda", dockId: 1 },
        { id: 2, name: "larry", dockId: 2},
        { id: 3, name: "mo", dockId: 3}    
    ],
    shippingShips: [
        {id: 1, name: "theCoolOfCool", haulerId: 1},
        {id: 2, name: "theBest", haulerId: 1},
        {id: 3, name: "theAmazing", haulerId: 3},
        {id: 4, name: "The Best Ship", haulerId: 2},
        {id: 5, name: "Im a ship", haulerId: 2},
        {id: 6, name: "Bestest Ever", haulerId:1}
    ]
}


export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}


export const getShippingShips = () => {
    return database.shippingShips.map(ship => ({...ship}))
}