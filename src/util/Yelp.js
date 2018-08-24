const apiKey = 'SQ7fiMBEH8v7S7m-KG4N-jKdkSPviJEr8Q_qa0x7ongEk4ZkAb60i0yul6iwW1GBsXmkG8Be22FGrRmvOAaQ0ItLO0If32L5oPkDY9HFUBgQzYDvZy14OhiStFBOW3Yx';

export const Yelp = {
    search(term, location, sortBy){
        return  fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                    {headers: {Authorization: `Bearer ${apiKey}`}})
                .then(response => {return response.json()})
                .then(jsonResponse => {
                    if(jsonResponse.businesses) 
                        return jsonResponse.businesses.map(business => {
                            return(
                                {
                                    id: business.id,
                                    imageSrc: business.image_url,
                                    name: business.name,
                                    address: business.location.address1,
                                    city: business.location.city,
                                    state: business.location.state,
                                    zipCode: business.location.zip_code,
                                    category:business.category,
                                    rating: business.rating,
                                    reviewCount: business.review_count   
                                }
                            );
                        });
                });
    }
}
