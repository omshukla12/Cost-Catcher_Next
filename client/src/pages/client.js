import { createClient } from "@supabase/supabase-js"; // Supabase client

const supabaseUrl = "https://gtbwpduhcjiktdfrqfvb.supabase.co"; // Replace with your Supabase URL
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0YndwZHVoY2ppa3RkZnJxZnZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MjgzODMsImV4cCI6MjA0MjMwNDM4M30.81EXp0GtAaKgbTmU19dOkWUwY4PfUv-SXBl5vXyWjaY"; // Replace with your Supabase public key
export const supabase = createClient(supabaseUrl, supabaseKey); // Initialize Supabase
