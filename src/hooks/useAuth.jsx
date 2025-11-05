import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export function RequireUserCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleAuthCheck() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setIsAuthenticated(!!user);
      setIsLoading(false);
    }
    handleAuthCheck();
  }, []);

  return { isAuthenticated, isLoading };
}
