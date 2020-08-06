const apiKey = 'k6YKlPhku_dYGQgC7NmaYRdEJI7KU2jNF_54qXorr9ZagXYYZmH9EuzavmAlxNcqDlHGlUEs8YRv53AA9z3x9GxxBVqpatD5Nqf0PQya_BZjXh-0ag7PlAwCEdkrX3Yx';

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,

            },
        }).then((response) => {
            return reponse.json();
        }).then(jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.business.map(((business => {
                    console.log(business)
                    return {
                        id: business.id,
                        imageSrc:business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.category[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,

                    };
                }));
            }
        })
    }
};

export default yelp;