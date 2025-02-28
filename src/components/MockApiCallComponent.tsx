import { useState } from "react";
import { mockApiCall } from "../utils/api";

const MockApiCallComponent: React.FC = () => {
  const [data, setData] = useState<{ message?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendPostRequest = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await mockApiCall();
      const responseData = await response.json();

      if (response.status === 200) {
        setData(responseData);
      } else {
        switch (response.status) {
          case 400:
            setError("Bad Request: Please check your input.");
            break;
          case 401:
            setError("Unauthorized: Please log in.");
            break;
          case 403:
            setError("Forbidden: You don't have permission to access this.");
            break;
          case 404:
            setError("Not Found: The requested resource was not found.");
            break;
          case 500:
            setError("Server Error: Something went wrong on our end.");
            break;
          default:
            setError(`Unexpected Error: ${response.status}`);
        }
      }
    } catch (err: unknown) {
      // Checks if err is instance of Error else logs an unknown error
      if (err instanceof Error) {
        setError(`Network error: ${err.message}`);
      } else {
        setError("An unknown error occurred.");
      }
      console.error("API Request Failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Post Request Example</h2>
      <button onClick={sendPostRequest} disabled={loading}>
        {loading ? "Sending..." : "Send Request"}
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MockApiCallComponent;
