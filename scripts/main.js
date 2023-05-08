import { shippingList } from "./ShippingShipList.js"
import { DockList } from "./DockList.js"
import { haulerList } from "./HaulersList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Haulers</h2>
        ${haulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Ships</h2>
        ${shippingList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML