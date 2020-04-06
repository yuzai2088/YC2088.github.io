import immutable from "immutable";
const defaultState = immutable.fromJS({
	banner: [],
	count: 2020,
	city: "美丽的中国",
	goodList: [],
	goodType: [],
	goodDetail: [],
	searchList:[]
});
export const data = (state = defaultState, action) => {
	console.log(action);
	switch (action.type) {
		case "changeCount":
			return state.update("count", x => x + action.payload);
		case "changeCity":
			return state.set("city", action.payload);
		case "getBanner":
			return state.set("banner", action.payload);
		case "getGoodList":
			return state.set("goodList", action.payload);
		case "getGoodType":
			return state.set("goodType", action.payload);


		case "getGoodDetail":
			return state.set("goodDetail", action.payload);
			break;


		case "getSearchList":
			return state.set("searchList", action.payload);
			break;


		default:
			return state;
	}
};
