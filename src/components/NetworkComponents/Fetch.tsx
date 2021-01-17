import { FC } from 'react';
import { useFetch } from "./useFetch";

//some fields are kept optional using ? on purpose
//check RandomQuote.tsx for details about the 'something' field
interface FetchProps {
    uri: string
    renderSuccess: any
    loadingFallback?: any
    renderError?: any
    something?: string
    getThetoken?: string
    setrequesttype? :string
    body? : Object
    triggerapi? : string
    readytoroll? : boolean
}

//TODO - when Fetch fails, for example, Unauthorized api response
//it gets stuck on loading. it wont show any error. 
const Fetch: FC<FetchProps> = ({
    uri,
    renderSuccess,
    loadingFallback = <p>---</p>,
    renderError = (error: any) => (
        <div>
            <p>there was an error with renderError</p>
            <pre>{JSON.stringify(error, null, 2)}</pre>
            <p>if you see a blank space above that means there was nothing to show</p>
        </div>
        
    ),
    something,
    getThetoken,
    setrequesttype,
    body,
    triggerapi
}: FetchProps) => {
    console.log("inside Fetch");
    const { loading, data, error } = useFetch(uri, something, getThetoken,setrequesttype,body,triggerapi);
    if (loading) return loadingFallback;
    if (error) return renderError(error);
    if (data) return renderSuccess({ data });
}

export default Fetch;


