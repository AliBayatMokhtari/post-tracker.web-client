import { SupabaseService } from "../../application/ports";
import { createClient } from "@supabase/supabase-js";

export function supabaseGenerator(): SupabaseService {
  return {
    createClient(supabaseUrl, supabaseKey) {
      return createClient(supabaseUrl, supabaseKey);
    },
  };
}
