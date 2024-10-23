import React from 'react'

function Product_Item({
    p_name="Default Name",
    p_price="Default Price",
    p_description="Default Desc",
    p_quantity="Default Qantity"
}) {
  return (
    <div>
        <table border='1' cellspacing='0' cellPadding='5'>
            <tr>
                <td>Product Name</td>
                <td>{p_name}</td>
            </tr>
            <tr>
                <td>Product Price</td>
                <td>{p_price}</td>
            </tr>
            <tr>
                <td>Product Description</td>
                <td>{p_description}</td>
            </tr>
            <tr>
                <td>Product Quantity</td>
                <td>{p_quantity}</td>
            </tr>
        </table>
    </div>
  )
}

export default Product_Item