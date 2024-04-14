'use client'
import React, { useState } from 'react';
import MonthView from '@/components/planningMonth';
import PlanningWeek from '@/components/planningWeek';

interface PlanningProps {
    date: Date;
}

const Planning: React.FC<PlanningProps> = ({ date }) => {
    const options: Intl.DateTimeFormatOptions = { month: "long" };
    const formattedMonth = new Intl.DateTimeFormat("fr-FR", options).format(date);
    const year = new Date().getFullYear();

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const capitalizedMonth = capitalizeFirstLetter(formattedMonth);

    const [showMonth, setShowMonth] = useState(true);
    const [showWeek, setShowWeek] = useState(false);
    const [showDay, setShowDay] = useState(false);
    const [showList, setShowList] = useState(false);

    const handleMonthClick = () => {
        setShowMonth(true);
        setShowWeek(false);
        setShowDay(false);
        setShowList(false);
    };

    const handleWeekClick = () => {
        setShowMonth(false);
        setShowWeek(true);
        setShowDay(false);
        setShowList(false);
    };

    const handleDayClick = () => {
        setShowMonth(false);
        setShowWeek(false);
        setShowDay(true);
        setShowList(false);
    };

    const handleListClick = () => {
        setShowMonth(false);
        setShowWeek(false);
        setShowDay(false);
        setShowList(true);
    };

    const currentDate = new Date(); 

    return (
        <div>
            <br />
            <br />
            <div>
                <span>Mes réservations</span>
                <img src="/planning-4.svg" alt="" />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <p>{capitalizedMonth}</p>
                        <span style={{ marginLeft: '10px' }}>{year}</span>
                    </div>
                    <div className='flex'>
                        <button onClick={handleMonthClick}>Mois</button>
                        <button onClick={handleWeekClick}>Semaine</button>
                        <button onClick={handleDayClick}>Jour</button>
                        <button onClick={handleListClick}>Liste</button>
                    </div>
                </div>
            </div>
            
            {showMonth && (
                <div style={{height:'85vh'}}>
                    <MonthView currentDate={currentDate}/>
                </div>
            )}
            {showWeek && (
                <div>
                    <PlanningWeek/>
                </div>
            )}
            {showDay && (
                <div>
                    <p>Contenu du jour</p>
                </div>
            )}
            {showList && (
                <div>
                    <p>Contenu de la liste</p>
                </div>
            )}
        </div>
    );
}

export default Planning;