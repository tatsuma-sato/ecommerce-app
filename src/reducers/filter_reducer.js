import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, color, price, shipping } = state.filters;

      let tempFilteredProducts = [...all_products];

      // --> filtering
      // by text
      if (text) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text.toLowerCase());
        });
      }
      // by category
      if (category && category !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.category === category;
        });
      }
      // by company
      if (company && company !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.company === company;
        });
      }
      // by color
      if (color && color !== "all") {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }
      // by price
      tempFilteredProducts = tempFilteredProducts.filter((product) => {
        return product.price <= price;
      });
      // by shipping
      if (shipping) {
        tempFilteredProducts = tempFilteredProducts.filter((product) => {
          return product.shipping === true;
        });
      }
      return { ...state, filtered_products: tempFilteredProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
