import { supabaseGenerator } from "../../adaptors/supabase/supabase.config";

const supabaseUrl: string = "https://uriamtthgvdfnvsxbrtq.supabase.co";
const supabaseKey: string = process.env.REACT_APP_SUPABASE_KEY ?? "";

const generator = supabaseGenerator();
const client = generator.createClient(supabaseUrl, supabaseKey);

export default client;
