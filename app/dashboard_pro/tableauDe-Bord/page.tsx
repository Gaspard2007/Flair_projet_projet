import { NextPage } from "next";
import Link from "next/link";

const TableauDeBord:NextPage=()=>{
    return(
    <div>
        <br />
        <span>Bienvenue</span>
        <br />
        <div className="text-base">
            <p>Bonjour Miss Elsa (vous n’êtes pas Miss Elsa ? Déconnexion)</p>
            <p>À partir du tableau de bord de votre compte, vous pouvez visualiser vos commandes récentes, gérer vos réservations  ainsi que changer votre mot de passe et les détails de votre compte.</p>
        </div>
        <br />
        <div>
            <span>Abonnement actuel</span>
            <br />
            <br />
            <div className="rounded" style={{border:'solid 2px #EAEAEA', padding:'3%'}}>
                <span className="text-base">Abonnement gestion planning mensuel</span>
                <br />
                <span className="text-base">Date de renouvellement : <span className="text-gray-200">17 Mars 2024</span></span>
                <br />
                <br />
                <div className="flex ">
                    <button className="text-base rounded" style={{background:'#FFF5F5', color:'#F82424', padding:'8px'}}>Annuler l'abonnement</button>
                    <button style={{padding:'8px', marginLeft:'10px'}} className="rounded text-white bg-black text-base">Mettre à niveau</button>
                </div>
            </div>
            
        </div>
        <br />
        <div>
            <span>Réservations récentes</span>
            <br />
            <br />
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
    <div>
        </div></div>
                </div>
            </div>
        </div>
        <br />
        <div className="flex justify-center items-center">
        <button className="bg-black text-white text-lg rounded" style={{padding:'8px'}}>Voir toutes les réservations</button>
        </div>
    </div>)
}
export default TableauDeBord