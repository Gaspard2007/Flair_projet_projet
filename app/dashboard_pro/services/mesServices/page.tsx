'use client'
import ModelService from "@/components/modelServices";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";


const MesServices:NextPage=()=>{
    const [visibleServices, setVisibleServices] = useState(4);
    const [showMoreServices, setShowMoreServices] = useState(false);

    return(
        <div>
            <div>
                <span>Mes services</span>
                <p>Trier par :</p>
            </div>
            <div>
                <select name="Récent" id=""></select>
                <Link href={'/dashboard_pro/services/ajouterService'}><button>Ajouter un service</button></Link>
            </div>
            <div >
        
            {[...Array(visibleServices)].map((_, index) => (
              <div key={index}>
                <div className="text-base">
                <ModelService />
                </div>
              </div>
            ))}
            </div>
            </div>
  
    )
}
export default MesServices