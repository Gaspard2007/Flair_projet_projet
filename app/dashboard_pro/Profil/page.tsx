import { Button, ConfigProvider, Switch, Upload } from "antd";
import { NextPage } from "next";
const Profil:NextPage=()=>{
    return(
        <div>
            <br />
            <div>
                <span>Mon profil publique</span>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border gap-[15px_0px] max-w-full">
                    <div className="w-[114px] relative leading-[21.6px] inline-block">
                      Image profil
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[0px_13px] max-w-full text-smi text-slategray">
                      <img
                        className="h-[70px] w-[70px] w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
                        alt=""
                        loading="lazy"
                        src="/profil.avif"
                      />
                  <div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[10px_0px] min-w-[394px] max-w-full mq1050:min-w-full" style={{margin:'20px'}}>
                        <ConfigProvider
                          theme={{
                            token: {
                             
                              colorBorder:'#000',
                              colorPrimary:'#000',
                              colorBgMask:'rgba(0, 0, 0,)',
                              colorBgBase:'#000',
                              colorText:'#fff'
                      
                            

                            },
                          }}
                        >
                        <Upload>
                          <Button style={{marginRight:'20px'}}>Télécharger</Button>
                        </Upload>
                      </ConfigProvider>
                          <button
                            className="cursor-pointer p-[7px] bg-snow w-[86px] h-[40px] rounded box-border overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-tomato"
                                style={{ borderColor: 'red' }}
                                  >
                            <div className="relative text-lg leading-[20.8px] font-roboto text-red-100 text-center" style={{paddingBottom:'2px'}}>
                              Supprimer
                            </div>
                          </button>

                        </div>
                    
                      <div className="self-stretch relative leading-[22.4px]">
                        *La taille de l'image doit être d'au moins 320px. Fichiers autorisés : .png ou .jpg.
                      </div>
                   </div>
                  </div>
                  </div>
                  <span>Information Public</span>
                  <div>
                    <label>Nom de votre entrprise <span style={{color:'#'}}>*</span></label>
                    <input type="text" required placeholder="Milana Beauty" />
                    <br />
                    <label>Profession</label><span>*</span>
                    <input type="text" placeholder="coiffeuse" required />
                    <label>Description</label>
                  </div>
                  <div>
                    <span>Réseaux sociaux</span>
                    <br />
                    <p>Instagram</p>
                    <input type="url" placeholder="https://www.instagram.com/itsabiconnick/"/>
                    <button className="bg-black text-white text-lg flex items-center" style={{padding:'10px'}}><img className="flex items-center" src="/plus-circle.svg" alt="" style={{marginRight:'10px'}} />Ajouter un réseau social</button>
                  </div>
                  <div>
                    <span>Contact public</span>
                    <br />
                    <br />
                    <div>
                        <div>
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Numéros de téléphone</label>
                            <input type="text" />
                        </div>
                        <div className="flex items-center">
                        <p>Mes services sont uniquement à domicile</p>
                        <Switch/>
                        <label>Addresse</label>
                        <input type="text" />
                    </div>
                        <br />

                        <div>
                            <div>
                                <label>Ville <span>*</span></label>
                                <input type="text" required />
                            </div>
                            <div>
                            <label>Code postal <span>*</span></label>
                                <input type="text" required />
                            </div>
                        </div>
                        <label>Pays<span>*</span></label>
                        <input type="text" required />
                        </div>
                        <label>Complément d'addresse</label>
                        <input type="text" />
                        
                   
                  </div>
                  
        </div>
    )
}
export default Profil