
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
      <div className="flex flex-row gap-3 md:gap-1 flex-wrap  md:flex-nowrap justify-center items-center">
        <ImagePopOver numberYear={8} image={<img src={html}/>}/>
        <ImagePopOver numberYear={8} image={<img src={css}/>}/>
        <ImagePopOver numberYear={2} image={<img src={figma}/>}/>
        <ImagePopOver numberYear={6} image={<img src={js}/>}/>
        <ImagePopOver numberYear={4} image={<img src={react}/>}/>
        <ImagePopOver numberYear={4} image={<img src={typescript}/>}/>
        <ImagePopOver numberYear={4} image={<img src={git}/>}/>
        <ImagePopOver numberYear={8} image={<img src={mysql}/>}/>
        <ImagePopOver numberYear={4} image={<img src={nodejs}/>}/>
        <ImagePopOver numberYear={8} image={<img src={php}/>}/>
        <ImagePopOver numberYear={8} image={<img src={api}/>}/>
      </div>
      </section>
    </div>
  );
}