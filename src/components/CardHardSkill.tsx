
import html from '../assets/hardskills/html.svg'
import css from '../assets/hardskills/css.svg'
import figma from '../assets/hardskills/figma.svg'
import js from '../assets/hardskills/js.svg'
import react from '../assets/hardskills/react.svg'
import typescript from '../assets/hardskills/typescript.svg'
import git from '../assets/hardskills/git.svg'
import mysql from '../assets/hardskills/mysql.svg'
import nodejs from '../assets/hardskills/nodejs.svg'
import php from '../assets/hardskills/php.svg'
import api from '../assets/hardskills/api.svg'
import { ImagePopOver } from './ImagePopover'


export function CardHardSkill(){
  return(
    <div className="w-full bg-orangecard py-3 px-3 rounded-b-md">
      <section className="flex flex-1 flex-col items-center gap-3">
      <h1 className="font-bold text-2xl self-start">My hard skills</h1>
      <div className="flex flex-1 flex-row gap-5 py-3 md:py-0  md:gap-10 flex-wrap  md:flex-nowrap justify-center">
        <img src={html}/>
        <img src={css}/>
        <img src={figma}/>
        <img src={js}/>
        <img src={react}/>
        <img src={typescript}/>
        <img src={git}/>
        <img src={mysql}/>
        <img src={nodejs}/>
        <img src={php}/>
        <img src={api}/>
      </div>
      </section>
    </div>
  );
}