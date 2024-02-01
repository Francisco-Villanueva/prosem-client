import React from 'react'
import Card from '../common/Card'
import { ClickIcon, CustomIcon, SecureIcon, StaffIcon } from '../icons'


export default function FeatureCards() {
  return (
  <div className=" h-full w-[50%] flex">

    <section className="flex flex-col justify-start h-full">
    <div className="w-[100%] h-[90%] flex flex-col gap-4 justify-around p-8 ">  
    <Card icon={<StaffIcon fill="transparent" className={"w-10"} stroke="white" strokeWidth={1}/>} title="Target" description="ProSeM enterprise can do softwares for different shop"/>
    <Card icon={<CustomIcon fill="transparent" className={"w-10"} stroke="white" strokeWidth={1}/>} title="Target" description="ProSeM enterprise can do softwares for different shop"/>
    </div>
    </section>

    <section className="flex flex-col justify-end h-full">
    <div className="w-[100%]  h-[90%] flex flex-col gap-4 justify-around p-8 ">
      <Card icon={<ClickIcon fill="transparent" className={"w-10"} stroke="white" strokeWidth={1}/>} title="Target" description="ProSeM enterprise can do softwares for different shop"/>
      <Card icon={<SecureIcon fill="transparent" className={"w-10"} stroke="white" strokeWidth={1}/>} title="Target" description="ProSeM enterprise can do softwares for different shop"/>       
    </div>
    </section>
    
  </div>
  )
}
