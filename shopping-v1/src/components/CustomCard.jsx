import "../Assets/CSS/card.css"
import bluebottle from '../Assets/Images/bluebottle.jpg'

function CustomCard({
    name= "Name",
    mrp ="MRP",
    qty="Quantity"


}){
    return (
        <div>
            <div class="card">
  <div class="container">
    <h4><b>{name}</b></h4>
    <p>{mrp}</p>
    <p>{qty}</p>
    
  </div>
</div>
        </div>
    )
}

export default CustomCard