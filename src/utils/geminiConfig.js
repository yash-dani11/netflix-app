const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const getRecommendations = async(query)=>{
    const prompt = `Act as a movie recommendation system for the query ${query}. Return only the Movie Names.Limit upto 10 movies. Return the result in an array. If query cannot be executed, just return an empty array.The result should always be an array.Example Result:["Movie 1", "Movie 2","Movie 3","Movie 4"]`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = JSON.parse(response.text());
    return text;
}

export {getRecommendations}
