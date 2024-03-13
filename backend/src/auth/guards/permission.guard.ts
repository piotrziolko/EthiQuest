import { CanActivate, ExecutionContext, mixin, Type } from '@nestjs/common';
import Permission from '../types/permission.type';
import { AuthGuard } from './auth.guard';
import { RequestWithUserPayload } from '../dto/request-with-user.payload';

const PermissionGuard = (permission: Permission): Type<CanActivate> => {
  class PermissionGuardMixin extends AuthGuard {
    async canActivate(context: ExecutionContext) {
      await super.canActivate(context);

      const request = context
        .switchToHttp()
        .getRequest<RequestWithUserPayload>();
      const user = request.user;

      return user?.permissions.includes(permission);
    }
  }

  return mixin(PermissionGuardMixin);
};

export default PermissionGuard;
