import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import SuggestionMessage from "./SuggestionMessage";

export default function App() {
  const [value, setValue] = useState("");

  let input: any;

  const ADD_SUGGESTION = gql`
    mutation createSuggestion($data: NewSuggestionInput!) {
      createSuggestion(createSuggestionData: $data) {
        id
        content
      }
    } 
  `;

  const [createSuggestion, { data, error}] = useMutation(ADD_SUGGESTION);

  return (
    <div className="h-screen bg-white dark:bg-gray-800 dark:text-white">
      <Navigation />
      <div className="h-full mt-0 flex items-center">
        <div className="container mx-auto">
          <SuggestionMessage data={data} error={error} />

          <div className="p-6 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><svg className="w-6 h-6 inline align-baseline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> Suggestions Box</h5>
            <form onSubmit={
              e => {
                e.preventDefault();
                createSuggestion({ variables: {data: {content: input.value}}});
                if (error === undefined) {
                  setValue("");
                }
              }
            }>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your suggestion</label>
              <textarea ref={node => {input = node;}} name="message" id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" rows={4} placeholder="Leave a suggestion..." value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> {
                setValue(e.target.value);
              }} />
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
