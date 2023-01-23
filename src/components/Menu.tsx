import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDown } from "phosphor-react";

export function Menu() {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex flex-row items-center gap-5">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex flex-row items-center gap-1">
            Services <CaretDown className="CaretDown" size={16} />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute z-50 bg-orangecard rounded-md shadow-md shadow-gray-800 p-4">
            <ul className="grid grid-rows-2 gap-2">
              <NavigationMenu.Link asChild>
              <li className="flex flex-col">
                <a href="#" className="font-bold text-sm">
                  Front-end
                </a>
                <span 
                className="font-regular text-gray-700  text-xs">
                  list of all my web and mobile services
                </span>
              </li>
              </NavigationMenu.Link>
              <NavigationMenu.Link>
              <li className="flex flex-col">
                <a href="#" className="font-bold text-sm">
                  Back-end
                </a>
                <span 
                className="font-regular text-gray-700 text-xs">
                  list of all my api and microservices services
                </span>
              </li>
              </NavigationMenu.Link>
              <NavigationMenu.Link>
              <li className="flex flex-col">
                <a href="#" className="font-bold text-sm">
                  Full-stack
                </a>
                <span 
                className="font-regular text-gray-700 text-xs">
                  list of all my done with full-stack services
                </span>
              </li>
              </NavigationMenu.Link>
              <NavigationMenu.Link>
              <li className="flex flex-col">
                <a href="#" className="font-bold text-sm">
                  UI
                </a>
                <span 
                className="font-regular text-gray-700 text-xs">
                  list of all my interface user with figma services
                </span>
              </li>
              </NavigationMenu.Link>
            </ul>
            
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex flex-row items-center gap-1">
            <NavigationMenu.Link asChild>
              <a href="#">
                Projects
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex flex-row items-center gap-1">
            <NavigationMenu.Link asChild>
              <a href="#">
                About
              </a>
            </NavigationMenu.Link>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>


        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
}
