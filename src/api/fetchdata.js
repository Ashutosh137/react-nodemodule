const Fetchdata = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6875169b4emsh5cb3469bed294dep1b46b8jsn4aa019bb930b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const jsonData = await response.json();
            return jsonData;
        }
        catch (error) {console.log(error)
        }
    };
    const data =await fetchData();
    return data;

};
export default Fetchdata ;

