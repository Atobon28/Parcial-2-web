import type { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, UseDispatch, useSelector } from "react-redux";

export const ItemCard = ({item} : any) => {
    const dispatch = useDispatch ();

    const reservado = useSelector ((state: RootState) => state.items.reservado);

    const estareservado = reservado.some ((reservado:any) => reservado.id === item.id);

    return (
        <div>
            <h3>{item.name}</h3>
            <p><strong>type:</strong>{item.type}</p>
            <p><strong>capacity:</strong>{item.capacity}</p>
            <p><strong>location:</strong>{item.location}</p>
            <p><strong>price per hour:</strong>{item.pricePerHour}</p>
            <p><strong>available:</strong>{item.available}</p>

            <div>
                <button onClick={() => dispatch (Togglereservado (item))}>
                    {estareservado ? "Quitar" : "Agregar"}
                    </button>
                <select value={item.status} 
                onChange={(e) =>
                    dispatch (
                        changeitemstatus ({
                            id: item.id,
                            newstatus: e.target.value
                        })
                    )
                }
                ></select>
                
                <option value="disponible">Disponible</option>
                <option value="en proceso">En proceso</option>
                <option value="reservado">Reservado</option>

                <button onClick={() => dispatch (cancelarreserva (item.id))}> Cancelar</button>

            </div>
        </div>
    )
}