import { getHaulingShips, getShippingShips } from "./database.js"; 

export const shippingList = () => {
    const ships = getShippingShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
     shipsHTML += `<li data-id="${ship.haulerId}" data-type="ship">
          ${ship.name} </li>`;
 
    }

    shipsHTML += "</ul>"

    return shipsHTML
}

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    // Was a shipping ship list item clicked?
    if (itemClicked.dataset.type === "ship") {
        // Get the haulerId value of the shipping ship clicked
        const shipId = itemClicked.dataset.id;
        // Define a default object for the found hauler
        let haulingShip = { name: "Incorrect" };

        const haulers = getHaulingShips()

        // Iterate the array of hauler objects
        for (const hauler of haulers) {
            if (parseInt(shipId) === hauler.id) {
                // Does the haulerId foreign key match the id of the current hauler?
                haulingShip = hauler;
                // Reassign the value of `haulingShip` to the current hauler
                break;
            }
        }

        // Show an alert to the user with this format...
        window.alert(`${itemClicked.textContent} is being hauled by ${haulingShip.name}`);
    }
});