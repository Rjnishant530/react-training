

class ProductApiCategoryService {
    productUrl = 'http://localhost:5001/categories'

    async getAllProduct() {
        var response = await fetch(this.productUrl);
        var result = await response.json()
        // console.log(result)
        return result
    }



    // async getProductDetails(id) {
    //     // var response = await fetch(`${this.productUrl}/${id}`)

    //     try {
    //         var response = await fetch(`${this.productUrl}/${id}`)
    //         var result = await response.json()
    //         // console.log(result)
    //         return result
    //     } catch (e) {
    //         console.log('error')
    //     }

    // }
}

export default ProductApiCategoryService