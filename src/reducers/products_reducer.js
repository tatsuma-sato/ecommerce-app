import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { getCategory, getCompany, getRandomColors } from "../utils/constants";

const products_reducer = (state, action) => {
  switch (action.type) {
    // Sidebar
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    // Products
    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true };
    case GET_PRODUCTS_SUCCESS:
      // const tempProducts = action.payload.map((product) => {
      //   const {
      //     id,
      //     imageUrl: image,
      //     name: prevName,
      //     price: prevPrice,
      //     isSellingfast: featured,
      //   } = product;
      //   const price = prevPrice.current.value * 100;
      //   const colors = getRandomColors();
      //   const name = prevName.replace("Abercrombie & Fitch ", "");
      //   const category = getCategory(name);
      //   const company = getCompany();
      //   const description =
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis explicabo repellat ipsum iure nobis amet eum quia rem inventore.";
      //   let shipping = false;
      //   if (price > 3000) shipping = true;

      //   return {
      //     id,
      //     name,
      //     price,
      //     image,
      //     colors,
      //     company,
      //     description,
      //     category,
      //     featured,
      //     shipping,
      //   };
      // });

      const featured_products = action.payload.filter((product) => {
        return product.featured === true;
      });

      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
      };
    case GET_PRODUCTS_ERROR:
      return { ...state, products_error: true, products_loading: false };

    // Single Product
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        single_product_error: true,
        single_product_loading: false,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
