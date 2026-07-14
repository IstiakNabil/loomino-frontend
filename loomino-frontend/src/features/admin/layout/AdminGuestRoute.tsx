import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/features/auth/hooks/useAuth";

/**
 * Wraps the admin login/register pages. If an admin is
 * already signed in, redirect them straight to the dashboard.
 */
function AdminGuestRoute() {
  const { isAuthenticated, user } = useAuth();

  const isAdmin =
    !!user &&
    (user.is_staff === true || user.is_superuser === true);

  if (isAuthenticated && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}

export default AdminGuestRoute;
