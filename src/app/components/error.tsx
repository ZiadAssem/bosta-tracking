import { useLanguageContext } from "../context/language_context";

interface ErrorProps {
    error: any; // The error object passed from Axios or other sources
}

export const ErrorComponent = ({ error }: ErrorProps) => {
    const { t } = useLanguageContext();

    // Determine the error message
    let errorMessage;
    console.log('your error is', error.response)
    if (error?.response) {
        // Error response from the server
        switch (error.response) {
            case 404:
                errorMessage = t("shipment not found");
                break;
            case 500:
                errorMessage = t("server error, please try again later");
                break;
            default:
                errorMessage = t("something went wrong, please try again");
        }
    } else if (error?.request) {
        // Request was made but no response received
        errorMessage = t("network error, please check your connection");
    } else {
        // Other unknown errors
        errorMessage = t("CHECK_SHIPMENT_NUMBER");
    }

    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <h1 className="font-cairo text-primary font-bold text-2xl">{t("ERROR")}</h1>
            <p className="font-cairo text-secondary text-lg mt-2">{errorMessage}</p>
        </div>
    );
};
