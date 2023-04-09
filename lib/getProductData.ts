

const getProductData = async () => {
    const res = await fetch('http://localhost:3004/data')
    let data = await res.json()

    return data

  
}

export default getProductData
