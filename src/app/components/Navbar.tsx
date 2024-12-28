import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Heart, ShoppingCart } from "lucide-react"
import {Sheet,SheetContent,SheetHeader,SheetTitle,SheetTrigger, } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

  

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 border -gray-300 p-4">
        <div className="max-w-7xl max-auto flex items-center justify-between">
            {/* left side */}
            
                {/* logo */}
                <h1 className="text-2xl font-bold">Exclusive</h1>
           
            {/* right side */}
            <div >
            <ul className="hidden md:flex gap-4">
                   <li>
                    <Link href={"/"} className="text-sm font-normal ">Home</Link>
                    </li> 
                    <li>
                    <Link href={"/"}>About </Link>
                    </li>
                    <li>
                    <Link href={"/"}>Contact</Link>
                    </li>
                    <li>
                    <Link href={"/"}>Sign Up</Link>
                    </li>
            </ul>
            </div>
            
            {/* Input */}
            <div className="hidden md:flex gap-2">
                <div className="relative">
                    <Input placeholder="Search Products"className='bg-[#F5F5F5] rounded' />
                    <Search className="absolute right-2 top-2"/>
                </div>
                <Button variant={"outline"} size={"icon"} className="rounded-full">
                    <Heart/> 
                </Button>
                <Button variant={"outline"} size={"icon"} className="rounded-full">
                    <ShoppingCart/> 
                </Button>
            </div>
          
            <Sheet>
                <SheetTrigger className="flex md:hidden" >
                 <Button variant={"outline"} size={"icon"} className="rounded-full">
                    <Menu/> 
                 </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Excusive</SheetTitle>
                    </SheetHeader>
                    <ul className="flex flex-col gap-4 mt-6">
                   <li>
                    <Link href={"/"} className="text-sm font-normal ">Home</Link>
                    </li> 
                    <li>
                    <Link href={"/"} className="text-sm font-normal " >About </Link>
                    </li>
                    <li>
                    <Link href={"/"} className="text-sm font-normal " >Contact</Link>
                    </li>
                    <li>
                    <Link href={"/"} className="text-sm font-normal " >Sign Up</Link>
                    </li>
                    </ul>
                    <div className="flex md:hidden p-6 gap-2">
                <div className="relative">
                    <Input placeholder="Search Products"className='bg-[#F5F5F5] rounded' />
                    <Search className="absolute right-2 top-2"/>
                </div>
                <Button variant={"outline"} size={"icon"} className="rounded-full">
                    <Heart/> 
                </Button>
                <Button variant={"outline"} size={"icon"} className="rounded-full">
                    <ShoppingCart/> 
                </Button>
            </div>
                </SheetContent>
            </Sheet>

        </div>
    </nav>
  )
}
