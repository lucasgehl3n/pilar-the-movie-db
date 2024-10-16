import { Category } from "../Enums/Category";

export default class MovieFilters {
    query: string;
    category: Category;
  
    constructor(query: string, category: Category = Category.Popular) {
      this.query = query;
      this.category = category;
    }
  }