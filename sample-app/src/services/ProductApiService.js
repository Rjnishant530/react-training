

class ProductApiService {
    productUrl = 'http://localhost:5000/products'


    async getAllProduct() {
        var response = await fetch(this.productUrl);
        var result = await response.json()
        // console.log(result)
        return result
    }

    async getProductDetails(id) {
        // var response = await fetch(`${this.productUrl}/${id}`)

        try {
            var response = await fetch(`${this.productUrl}/${id}`)
            var result = await response.json()
            // console.log(result)
            return result
        } catch (e) {
            console.log('error')
        }

    }

    async getProductByCategory(catId) {
        var response = await fetch(`${this.productUrl}/?categoryId=${catId}`)
        var result = await response.json()
        return result
    }

    async getNewId() {
        var response = await fetch(this.productUrl);
        var result = await response.json();
        return Math.max(...result.map((v) => v.productId)) + 1;
    }

    async createProduct(productObj) {
        // console.log('create')
        var bodyToSend = JSON.stringify(productObj);

        var httpMethod = 'POST';

        var httpHeaderOption = {
            'Content-Type': 'application/json'
        }

        var response = await fetch(this.productUrl, {
            body: bodyToSend,
            method: httpMethod,
            headers: httpHeaderOption
        });


    }

    async updateProduct(productObj) {
        // console.log('update')
        var bodyToSend = JSON.stringify(productObj);

        var httpMethod = 'PUT';

        var httpHeaderOption = {
            'Content-Type': 'application/json'
        }

        var response = await fetch(
            `${this.productUrl}/${productObj.productId}`, {
            body: bodyToSend,
            method: httpMethod,
            headers: httpHeaderOption
        });


    }



}

export default ProductApiService;