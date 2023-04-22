const ItemCounts = ({ initial = 1, stock = 30, onAdd }) => {
    return (
        <div className="card mt-5 w-50" id="itemcount">
            <div className="card-body row">
                <div className="col">
                    <button className="btn btn-outline-dark w-100" onClick={() => { }}> + </button>
                </div>
                <div className="col">
                    <center>
                        <label>{1}</label>


                    </center>


                </div>
                <div className="col">

                    <button className="btn btn-outline-dark w-100" onClick={() => { }}> - </button>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100" onClick={() => { }}>Agregar al carrito</button>

            </div>




        </div>
    )
}

export default ItemCounts