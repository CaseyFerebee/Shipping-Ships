import { getDocks, getHaulingShips, getShippingShips } from "./database.js"; 


export const DockList = () => {
    const docks = getDocks();
    const haulers = getHaulingShips();
    const shippingShips = getShippingShips();
    docks.sort((a, b) => a.location.localeCompare(b.location)); // sort the docks array alphabetically

    let docksHTML = "<ul>";
  
    for (const dock of docks) {
      const dockHaulers = haulers.filter((hauler) => hauler.dockId === dock.id);
      const dockShips = shippingShips.filter(
        (ship) => dockHaulers.find((hauler) => hauler.id === ship.haulerId)
      );
      const dockShipsNames = dockShips.map((ship) => ship.name);
  
      let message;
      if (dockShipsNames.length === 0) {
        message = `The ${dock.location} dock is currently unloading nothing`;
      } else if (dockShipsNames.length === 1) {
        message = `The ${dock.location} dock is currently unloading ${dockShipsNames[0]}`;
      } else {
        const lastShip = dockShipsNames.pop();
        const shipsNames = dockShipsNames.join(", ");
        message = `The ${dock.location} dock is currently unloading ${shipsNames} and ${lastShip}`;
      }
  
      docksHTML += `<li data-dock-id="${dock.id}">${dock.location}: ${dock.volume} millions tons of cargo</li>`;
    }
  
    docksHTML += "</ul>";
  
    document.addEventListener("click", (clickEvent) => {
      const itemClicked = clickEvent.target;
      if (itemClicked.matches("[data-dock-id]")) {
        const dockId = parseInt(itemClicked.dataset.dockId);
        const dock = docks.find((dock) => dock.id === dockId);
        const dockHaulers = haulers.filter((hauler) => hauler.dockId === dockId);
        const dockShips = shippingShips.filter(
          (ship) => dockHaulers.find((hauler) => hauler.id === ship.haulerId)
        );
        const dockShipsNames = dockShips.map((ship) => ship.name);
  
        let message;
        if (dockShipsNames.length === 0) {
          message = `The ${dock.location} dock is currently unloading nothing`;
        } else if (dockShipsNames.length === 1) {
          message = `The ${dock.location} dock is currently unloading ${dockShipsNames[0]}`;
        } else {
          const lastShip = dockShipsNames.pop();
          const shipsNames = dockShipsNames.join(", ");
          message = `The ${dock.location} dock is currently unloading ${shipsNames} and ${lastShip}`;
        }
  
        alert(message);
      }
    });
  
    return docksHTML;
  };