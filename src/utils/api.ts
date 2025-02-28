interface ApiResponse {
  status: number;
  json: () => Promise<{ message?: string; error?: string }>;
}

export const mockApiCall = (): Promise<ApiResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Mirrors the response of a server
      const success = Math.random() > 0.2;

      const body = success
        ? { message: "Success!" }
        : { error: "Server Error" };

      const options = {
        status: success ? 200 : 500,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = new Response(JSON.stringify(body), options);
      if (success) {
        resolve({
          status: 200,
          json: () => Promise.resolve({ message: "Success!" }),
        });
      } else {
        reject({
          status: 500,
          json: () => Promise.resolve({ error: "Server Error" }),
        });
      }
    }, 1000);
  });
};
