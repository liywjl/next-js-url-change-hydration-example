import { useEffect } from 'react'
import Router from 'next/router'

export default function StepperIndex() {
useEffect(() => {
   const {pathname} = Router
   if(pathname == '/stepper' ){
       Router.push('/stepper/1')
   }
 });
 return null
}