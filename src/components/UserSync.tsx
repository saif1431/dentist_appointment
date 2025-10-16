"use client"

import React, { useEffect } from 'react'
import { syncUser } from '@/lib/actions/users';
import { useUser } from '@clerk/nextjs';

function UserSync() {
  const {isSignedIn, isLoaded} = useUser();

useEffect(() =>{

  const handleUserSync = async () =>{
    if(isLoaded && isSignedIn){
      try {
        await syncUser();
      } catch (error) {
        console.error("Error in user sync effect:", error);
      }
    }
  }
  handleUserSync();
},[isLoaded, isSignedIn])

return null;
}



export default UserSync
