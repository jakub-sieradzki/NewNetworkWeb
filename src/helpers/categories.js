//Get post categories and its' names
import categoriesData from "@/data/categories";

function getPostFullCategoriesList(postCategories) {
  let categoriesList = {};
  if (postCategories) {
    for (let catIndex in categoriesData) {
      if (postCategories.includes(categoriesData[catIndex].id)) {
        categoriesList[categoriesData[catIndex].id] = categoriesData[catIndex];
      }

      if (categoriesData[catIndex].subcategories) {
        for (let subCatIndex in categoriesData[catIndex].subcategories) {
          if (postCategories.includes(categoriesData[catIndex].subcategories[subCatIndex].id)) {
            categoriesList[categoriesData[catIndex].subcategories[subCatIndex].id] = categoriesData[catIndex].subcategories[subCatIndex];
          }
        }
      }
    }
  }
  return categoriesList;
}

export { getPostFullCategoriesList };
