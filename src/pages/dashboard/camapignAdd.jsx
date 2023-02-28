import React from 'react'
import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
    Alert,Select,Option
    
  } from "@material-tailwind/react";
function CamapignAdd () {
    return (
      <>
   
   <div class="space-y-2">
  <button
    type="button"
    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    data-te-toggle="modal"
    data-te-target="#exampleModalCenter"
    data-te-ripple-init
    data-te-ripple-color="light">
    Vertically centered modal
  </button>

</div>

<div
  data-te-modal-init
  class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
 
  id="exampleModalCenter"
  tabindex="-1"
  aria-labelledby="exampleModalCenterTitle"
  aria-modal="true"
  role="dialog">
  <div
    data-te-modal-dialog-ref
    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"  style={{left: "644px"}}>
    <div
      class="pointer-events-auto relative flex  flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600" style={{width:"600px"}}>
      <div
        class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        <h5
          class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
          id="exampleModalScrollableLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-modal-dismiss
          aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="relative p-4">






      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
          <div className="container mx-auto p-4">
            <Card className="absolute top-2/4 left-2/4 w-full max-w-[40rem] -translate-y-2/4 -translate-x-2/4">
              <CardHeader
                variant="gradient"
                color="blue"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Add-Campaign
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                Camapaign Name
                <Input label="First Name" size="lg" required='true' />
    
                Declare if your ads are related to credit, employment or housing, or about social issues, elections or politics. Requirements differ by country.    
                <Select label="Spacial Ad Categories">
                Declare if your ads are related to credit, employment or housing, or about social issues, elections or politics. Requirements differ by country.
                  <Option>Credit</Option>
                  <Option>Employment</Option>
                  <Option>Housing</Option>
                  <Option>Social Issues, elections or politics</Option>
                </Select>
    
                <Select label="Objective">
                  <Option>LINK_CLICKS</Option>
                </Select>
    
    
              </CardBody>
              <CardFooter className="pt-0">
    
                <Button variant="gradient" fullWidth
                >
                  Submit
                </Button>
    
              </CardFooter>
            </Card>
          </div>







      </div>
   
    </div>
  </div>
</div>



      </>
      );
}

export default CamapignAdd