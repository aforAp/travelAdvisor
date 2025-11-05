import React from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { SearchIcon } from 'lucide-react';
export const Hotel = () => {
  return (
    <div className='ml-2.5'>
      <h1 className='font-bold text-4xl text-left'>Travel Advisor</h1>
     
      <p>Explore the world with us</p>
      <div className='mt-5 px-10'>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      </div>
    </div>
  )
};


