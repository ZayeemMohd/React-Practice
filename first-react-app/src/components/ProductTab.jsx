import Product from "./Product";

function ProductTab({ProductsList}){
    return (
         <>
            <br /><br /><br /><br /><br /><br />

            {
                ProductsList.map( e => <Product ProductList={e}/>)
            }

            {/* <Product title="React Phone" price="30000"/>
            <Product title="React Laptop" price="50000"/>
            <Product title="React Pen" price="10000"/> */}
            <br /><br /><br /><br />
         </>
    )

}


export default ProductTab;