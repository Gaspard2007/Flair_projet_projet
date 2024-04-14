import { Switch } from "antd";
import { NextPage } from "next";

const ModifierUnService:NextPage=()=>{
    return(
        <div style={{paddingRight:'5%'}}>
            <br />
            <div>
                <span>Ajouter un service</span>
                <p>Information sur ce service</p>
            </div>
            <div style={{width:'100%', height:'1px', background:'#EAEAEA'}}></div>
            <br />
            <div>
                <label>Titre du service</label>
        
                <input className="text-lg rounded outline-none " style={{width:'100%', padding:'11px', border:'solid 2px #EAEAEA', marginTop:'2%'}} type="text" placeholder="Exemple: Coloration + Shampoing + Brushing" />
            </div>
            <br />
            <div className="flex">
            
                <div>
                    <label>Catégorie</label>
                    <input className="text-lg rounded outline-none " style={{width:'100%', padding:'11px', border:'solid 2px #EAEAEA', marginTop:'2%'}} type="text" placeholder="Exemple: Coloration + Shampoing + Brushing" />
                </div>
                <div className="flex flex-col">
                    <label>Service à domicile ?</label>
                    <span className="text-sm">Ce service bénéficiera des services à domicile que vous fournissez</span>
                    <div style={{width:'20px'}}>
                    <Switch/>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <div>
                    <label>Durée</label>
                    <input className="text-lg rounded outline-none " style={{width:'100%', padding:'11px', border:'solid 2px #EAEAEA', marginTop:'2%'}} type="text" placeholder="Exemple: 30€" />
                </div>
                <div>
                    <label>Service à domicile ?</label>
                    <select name="30mn" id=""></select>
                </div>
            </div>
            <div>
                <label htmlFor="">Paragraphe</label>
            </div>
        </div>
    )
}
export default ModifierUnService