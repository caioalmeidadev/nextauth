type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({
  user,
  permissions,
  roles,
}: ValidateUserPermissionParams) {
  if (permissions?.length > 0) {
    const hasAllPermission = permissions.every((permission) =>
      user.permissions.includes(permission)
    );
    if (!hasAllPermission) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRole = roles.some((role) => user.roles.includes(role));
    if (!hasAllRole) {
      return false;
    }
  }

  return true;
}
