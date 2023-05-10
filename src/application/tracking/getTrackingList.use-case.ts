import client from "../supabase/getSupabaseClient";

export default function useGetTrackingList() {
  const getTrackingList = async (): Promise<
    { id: string; title: string }[]
  > => {
    const result = await client.from("Tracking").select("*");

    console.log(result);

    if (result.data)
      return Promise.resolve(result.data as { id: string; title: string }[]);
    else return Promise.reject(null);
  };

  return {
    getTrackingList,
  };
}
