
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
      <section className="flex flex-col gap-6">
      <h1 className="font-bold text-2xl">My hard skills</h1>
      <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
        <ImagePopOver image={<img src={html}/>}/>
        <ImagePopOver image={<img src={css}/>}/>
        <ImagePopOver image={<img src={figma}/>}/>
        <ImagePopOver image={<img src={js}/>}/>
        <ImagePopOver image={<img src={react}/>}/>
        <ImagePopOver image={<img src={typescript}/>}/>
        <ImagePopOver image={<img src={git}/>}/>
        <ImagePopOver image={<img src={mysql}/>}/>
        <ImagePopOver image={<img src={nodejs}/>}/>
        <ImagePopOver image={<img src={php}/>}/>
        <ImagePopOver image={<img src={api}/>}/>
      </div>
      </section>
    </div>
  );
}