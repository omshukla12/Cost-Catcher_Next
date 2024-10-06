import { createClient } from "@supabase/supabase-js";
import { Session, AuthChangeEvent } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user, error };
}

export function onAuthStateChange(
  callback: (event: AuthChangeEvent, session: Session | null) => void
) {
  return supabase.auth.onAuthStateChange(callback);
}

export async function resendConfirmationEmail(email: string) {
  const { data, error } = await supabase.auth.resend({
    type: "signup",
    email: email,
  });
  return { data, error };
}

export async function isEmailConfirmed(userId: string) {
  const { data, error } = await supabase
    .from("users")
    .select("email_confirmed_at")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error checking email confirmation:", error);
    return false;
  }

  return data?.email_confirmed_at != null;
}
