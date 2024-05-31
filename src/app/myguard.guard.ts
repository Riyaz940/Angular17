import { CanActivateFn } from '@angular/router';

export const myguardGuard: CanActivateFn = (route, state) => {

  if(sessionStorage.getItem("u") == null)
    {
      return false;
    }
    else
    {
      return true;
    }
  
};
