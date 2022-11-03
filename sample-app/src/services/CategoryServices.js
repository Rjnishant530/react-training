import { CategoryModel } from '../models/CategoryModel'

const arrayOfCategories = [
    new CategoryModel(1, 'Papers', 'Different Papers/Sheets category'),

    new CategoryModel(2, 'Boards', 'Different types of Boards -  White/Black etc'),

    new CategoryModel(3, 'Pens', 'Pens include markers,ball-point,gel,ink-based'),

    new CategoryModel(4, 'Books', 'Notebooks,pocket diaries,diaries,calenders')
]

class CategoryServices {

    getAllCategories() {
        return arrayOfCategories;
    }

    getCategoryDetails(id) {
        let obj = arrayOfCategories.filter((v) => {
            return v.CategoryId == id
        });
        return obj[0]
    }

    pushNew(categoryObj) {
        arrayOfCategories.push(categoryObj);

    }

    getNewId() {
        let iid = arrayOfCategories.map((c) => c.CategoryId);
        return Math.max(...iid) + 1;
    }

    updateCat(categoryObj) {

        let index = arrayOfCategories.findIndex((v) => v.CategoryId == categoryObj.CategoryId)
        if (index != -1) {
            arrayOfCategories.splice(index, 1, categoryObj);
        } else
            this.pushNew(categoryObj)

    }
}
export default CategoryServices;