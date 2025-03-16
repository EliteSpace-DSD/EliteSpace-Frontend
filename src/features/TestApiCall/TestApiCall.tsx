import { useGetAllUsersQuery } from '../Services/userSlice';
function TestApiCall() {
  const { data, error, isLoading } = useGetAllUsersQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  console.log(data);
  return <div>TestApiCall</div>;
}

export default TestApiCall;
