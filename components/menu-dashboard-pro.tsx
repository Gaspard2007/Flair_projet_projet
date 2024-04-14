'use client'
import { useState } from 'react';
import Link from 'next/link'

function MenuDashboardPro() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryParametre, setSelectedCategoryPatametre] = useState('');


  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  const handleCategoryParametreSelect = (category_p: string) =>{
    setSelectedCategoryPatametre(category_p);
  }

  return (
    <section className="flex flex-row items-start justify-start py-0 px-5 box-border gap-[0px_60px] max-w-full text-center text-lg text-gray-200 font-roboto lg:flex-wrap mq750:gap-[0px_60px]">
      <div className="w-[306px] rounded-lg bg-whitesmoke-100 box-border flex flex-col items-start justify-start pt-px pb-[34px] pr-0.5 pl-0 gap-[23px_0px] min-w-[306px] border-[1px] border-solid border-whitesmoke-300 lg:flex-1 lg:pr-0 lg:box-border">
        <div className="self-stretch h-[600px] relative rounded-lg bg-whitesmoke-100 box-border hidden border-[1px] border-solid border-whitesmoke-300" />
        <div className="self-stretch flex flex-col items-center justify-start pt-6 px-0 pb-0 relative gap-[25px_0px]">
          <div className="w-[152px] flex flex-col items-center justify-start gap-[12px_0px]">
            <img
              className="w-[90px] h-[90px] relative rounded-41xl object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/profil.avif"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[2px_0px]">
              <div className="w-[92px] relative leading-[21.6px] inline-block z-[2]">
                Miss kitty
              </div>
              <div className="self-stretch relative text-sm leading-[22.4px] text-dimgray z-[2]">
                Membre depuis 2024
              </div>
            </div>
          </div>

          <div className="mt-2 mb-6 w-full flex items-center">
            <hr className="w-full border-t-2 border-gray-500" />
          </div>
          <div  className={selectedCategory === 'dashboard' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link style={{}} className={selectedCategory === 'dashboard' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_pro/tableauDe-Bord'} onClick={() => {handleCategorySelect('dashboard'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Tableau de bord</Link>
          </div>
          <div  className={selectedCategory === 'profil' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link style={{}} className={selectedCategory === 'profil' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_pro/Profil'} onClick={() => {handleCategorySelect('profil'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mon profil</Link>
          </div>
          <div  className={selectedCategory === 'services' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link style={{}} className={selectedCategory === 'services' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_pro/services/mesServices'} onClick={() => {handleCategorySelect('services'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes services</Link>
          </div>
          <div className={selectedCategory === 'reservations' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'reservations' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_pro/Reservation/reservation'} onClick={() => {handleCategorySelect('reservations'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes réservations</Link>
          </div>
          <div className={selectedCategory === 'client' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'client' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_user/mes-commandes'} onClick={() => {handleCategorySelect('client'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes clients</Link>
          </div>
          <div className={selectedCategory === 'disponibilités' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'disponibilités' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'f'} onClick={() => {handleCategorySelect('disponibilités'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes disponibilités</Link>
          </div>
          <div className={selectedCategory === 'commandes' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'commandes' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_user/mes-commandes'} onClick={() => {handleCategorySelect('commandes'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes commandes</Link>
          </div>
          <div className={selectedCategory === 'avis' ? 'bg-black  w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'avis' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'/dashboard_user/mes-avis'} onClick={() => {handleCategorySelect('avis'),handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Mes abonnements</Link>
          </div> 
          <div className={selectedCategory === 'deconnexion' ? 'bg-black w-[160px] relative leading-[30.6px] inline-block z-[1]' : 'w-[160px] relative leading-[30.6px] inline-block z-[1]'}>
          <Link className={selectedCategory === 'deconnexion' ? 'text-white no-underline' : 'text-gray-200 no-underline'} href={'#'} onClick={() => {handleCategorySelect('deconnexion'), handleCategoryParametreSelect(''),setShowOptions(showOptions)}}>Déconnexion</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MenuDashboardPro;
