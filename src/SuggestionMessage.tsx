interface SuggestionMessageProps {
    data?: any;
    error?: any;
}

export default function SuggestionMessage(props: SuggestionMessageProps) {
    if (props.error !== undefined) {
        return (
            <div className="max-w-screen-md p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mx-auto" role="alert">
                <span className="font-medium">Oh no!</span> Sorry, something went wrong!
            </div>
        )
    }

    if (props.data !== undefined) {
        return (
            <div className="max-w-screen-md p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800 mx-auto" role="alert">
                <span className="font-medium">Thanks!</span> Your suggestion has been recorded! Feel free to add another one!
            </div>
        );
    }

    return null;
}