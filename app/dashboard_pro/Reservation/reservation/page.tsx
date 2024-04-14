import App from "@/components/planningWeek";
import { NextPage } from "next";
import Link from "next/link";

const Reservation:NextPage=()=>{
    return(
        <div>
            <br />
            <div className="flex items-center justify-between">
            <span>Mes réservations</span>
            
               <div className="flex flex-col">
                <p>Trier par :</p>
                <div className="flex">
                <select name="Récent" id=""></select>
                <Link href={'/dashboard_pro/Reservation/calendarPlanning'}><img src="/calendar-4.svg" alt="" /></Link>
                </div>

                </div>
            </div>
            <div>
               
               
            </div>
            <div className="flex">
                <div className="flex flex-col" style={{border:'solid 2px #EAEAEA'}}>
                    <button>Client en boutique</button>
                    <img src="" alt="" />
                    <span>Miss Kitty</span>
                    <p>Membre depuis 2024</p>
                    <p>MissKity@gmail.com</p>
                    <p>06 0102030405</p>
                    <button>Modifier</button>
                </div>
                <div style={{border:'solid 2px #EAEAEA'}}>
                    <button>En cours</button>
                    <div className="flex flex-row" style={{marginTop:'15px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Service réservé</div>
    <span className="text-sm text-slategray" style={{marginLeft:'100px',marginRight:'30px'}}>: {`Lissage Brésilien`}</span>
   </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Date de reservations</div>
    <span className="text-sm text-slategray" style={{marginLeft:'70px',marginRight:'30px'}}>: {`09.10.2024  de 17:00 à 18:00`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Lieu</div>
    <span className="text-sm text-slategray " style={{marginLeft:'175px',marginRight:'30px'}}>: {`02 rue des Alpes, 75000 Paris, France`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Tarifs</div>
    <span className="text-sm text-slategray" style={{marginLeft:'170px',marginRight:'30px'}}>: {`100 €`}</span>
    </div>
    <div className="flex flex-row" style={{marginTop:'35px',marginLeft:'40px'}}>
    <div className="text-sm text-darkslategray-300">Notes client</div>
    <span className="text-sm text-slategray" style={{marginLeft:'170px', marginRight:'30px'}}>: {`Lorem ipsum dolor sit amet, cia ut fringilla in dolor sit amet, cia ut frin dolor sit amet, cia ut frin dolor sit amet, cia ut frin.`}</span>
    </div>
    <div className="flex flex-row justify-end" style={{marginTop:'20px', marginRight:'20px'}}>
    </div>
    </div>
    </div>

                    </div>
    )
}
export default Reservation