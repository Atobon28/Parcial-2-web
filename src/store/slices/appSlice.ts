import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { InitialItems } from '../../data/itemsData';

type AppState = {
	status: string;
};

const initialState: AppState = {
	itemlist: InitialItems,
	reservado: [],
	typefilter = "all",
	capacityfilter = "all",
	locationfilter = "all",
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload;
		},


		cancelarreserva: (state, action) => {
			const id = action.payload;
			state.itemlist = state.itemlist.filter ((item) => item.id !=== id);
		},

		changeitemstatus: (state, action) => {
			const {id, newstatus} = action.payload ;
			const item = state.itemlist.find ((item) => item.id === id);
			if (item) {
				item.status = newstatus;
			}
		},

		Togglereservado: (state, action) => {
			const item = action.payload;
			const exists = state.reservado.some ((reservado) => reservado.id === item.id);
			if (exists) {
				state.reservado.filter ((reservado) => reservado.id !== item.id);
			}
			else {
				state.reservado.push(item);
			}
		},

		set: (state, action) => {
			const id = action.payload;
			state.itemlist = state.itemlist.filter ((item) => item.id !=== id);
		},

		cancelarreserva: (state, action) => {
			const id = action.payload;
			state.itemlist = state.itemlist.filter ((item) => item.id !=== id);
		},
	},
});




export const {
	cancelarreserva,

} = itemSlice.action ;
export default itemSlice.reducer;

