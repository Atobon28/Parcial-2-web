import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { setcapacityfilter, setlocationfilter,settypefilter } from "../store/slices/appSlice";
import type {RootState} from '@reduxjs/toolkit/query';
import { AppDispatch, RootState } from '../store/store';
import reducer from '../store/slices/appSlice'


export const itemfilters = () => {
    const dispatch = useDispatch ();

    const {capacityfilter, locationfilter, typefilter} = useSelector ((reducer:RootState) => reducer.items);

    return (
        <div>
            <select value={capacityfilter} 
            onChange={(e) => dispatch (setcapacityfilter (e.target.value))}>
            
            <option value="all">todas</option>
            <option value="1">1</option>
            <option value="8">8</option>
            <option value="10">10</option>


            </select>
        </div>
    )
}