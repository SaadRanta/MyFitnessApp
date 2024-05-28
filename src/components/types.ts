export type Food = {
    NDB_No: number;
    Shrt_Desc: string;
    Water_g: number;
    Energ_Kcal: number;
    Protein_g: number;
    Carbohydrt_g: number;
    Fiber_TD_g: number;
    Sugar_Tot_g: number;
    Calcium_mg: number;
    Iron_mg: number;
    Magnesium_mg: number;
    Phosphorus_mg: number;
    Potassium_mg: number;
    Sodium_mg: number;
    Zinc_mg: number;
    Copper_mg: number;
    Manganese_mg: number;
    Vit_C_mg: number;
    Vit_D_IU: number;
    Vit_E_mg: number;
    Vit_D_ug: number;
};
export type State = {
	suggesions: Food[];
	text: string;
	SelectedIndex: number;
};
export type Props = {
	items: Food[];
};