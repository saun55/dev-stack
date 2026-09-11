import { use, useState } from "react";
import type { TechnologiesType } from "./Technologies/TechnologiesType";
import TechnologiesCart from "./Technologies/TechnologiesCart";
import StackTechnologiesCart from "./YourStack";

interface PromiseDataType {
  promiseData: Promise<TechnologiesType[]>;
}

const Technologies = ({ promiseData }: PromiseDataType) => {
  const promiseUse = use(promiseData);

  const [selectedCart , setSelectedCart]=useState<TechnologiesType[]>([])


  return (

<div className="container mx-auto ">
 <h1 className="text-3xl font-bold pb-10">Explore the <span>Technologies</span></h1>
<div className="container mx-auto grid grid-cols-12 gap-6">
  

  {/* Technology Cards */}
  <div className="col-span-12 grid grid-cols-1 gap-7 sm:grid-cols-2 md:col-span-9 md:grid-cols-3">
    {promiseUse.map((cart) => (
      <TechnologiesCart key={cart.id} cart={cart} selectedCart={selectedCart} setSelectedCart={setSelectedCart} />
    ))}
  </div>

  {/* Stack */}
  <div className="col-span-12 md:col-span-3">
    <StackTechnologiesCart 
     selectedCart={selectedCart}
      setSelectedCart={setSelectedCart}/>
  </div>

</div>

</div>



  );
};

export default Technologies;
