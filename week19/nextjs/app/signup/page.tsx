import axios from "axios";

export default async function User() {

 const response  = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

 const data = response.data;
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                
                {data?.email}
            </div>
        </div>
    </div>
  );


}
