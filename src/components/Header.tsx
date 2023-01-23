import logoImg from '../assets/logo.svg'
import { Button } from './Button';
import { Menu } from './Menu';

export function Header(){
  return(
    <div className="w-full md:h-11 h-24 mb-3 md:flex-row md:items-center flex flex-col gap-2 items-start p-2">
      <img src={logoImg} className="mr-14"/>
      <div className="flex w-full flex-row  items-center justify-start md:justify-between gap-2 md:gap-0"> 
      <Menu/>  
      <Button content='Contact us'/>
      </div>
    </div>
  );
}