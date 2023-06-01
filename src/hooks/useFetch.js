import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
 
const useFetch = (userChat) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

    const configuration = new Configuration({
        apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: "user", content: userChat }]
    }).then(res => {
        setdata(res)
        setloading(false)
    }).catch(err => {
        seterror(err)
        setloading(false)
    })
 
  return { data, loading, error };
};
 
export default useFetch;