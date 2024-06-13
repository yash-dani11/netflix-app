import React, { useState } from 'react'
import { getRecommendations } from '../../../utils/geminiConfig';
import { useDispatch } from 'react-redux';
import { SEARCH_MOVIE_ENDPOINT, TMDB_API_OPTIONS } from '../../../utils/constants';
import { addSearchResults } from '../../../redux/movieSlice';
import { toggleLoading } from '../../../redux/searchSlice';


const SearchBar = () => {
    const [searchString, setSearchString] = useState("");
    const dispatch = useDispatch();
    const handleSearch  = async (event)=>{
        dispatch(toggleLoading());
        event.preventDefault();
        const query = searchString.trim();
        if(query){
            try {
                const movieList = await getRecommendations(query);
                const fetchList = movieList.map(el=>fetch(`${SEARCH_MOVIE_ENDPOINT}?query=${el}`,TMDB_API_OPTIONS));
                const responses =  await Promise.allSettled(fetchList);
                let result = [];
                responses.forEach(async (response,index)=>{
                    if(response.status === "fulfilled"){
                        let json = await response.value.json();
                        result.push(json.results[0]);
                    }
                    if(index === responses.length-1){
                        console.log(result);
                        dispatch(addSearchResults(result));
                        dispatch(toggleLoading());
                    }
                })
                
                
            } catch (error) {
                console.log(error);
            }
            

        }

        
    }
    const handleInputChange = (event)=>setSearchString(event.target.value);
    
  return (
    <div className='mx-4 h-3/5 py-52 flex justify-center items-center'>
        <form className='w-full md:w-3/5 rounded-md bg-black' onSubmit={handleSearch}>
        <input
                type="text"
                placeholder="What would you like to watch today?"
                className="m-2 py-2 rounded-md h-8 tab:h-12 px-4 w-3/4 bg-gray-700 focus:outline-black text-sm tab:text-xl"
                value={searchString}
                onChange={handleInputChange}
        ></input>
        <button className="m-0 px-2 tab:m-2 py-2 rounded-md h-8 tab:h-12 w-1/10 text-sm tab:text-xl tab:w-1/6 bg-red-600 tab:px-4" onClick={handleSearch}>Search</button>
        </form>
    </div>
    
  )
}

export default SearchBar