import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar"
import AppLineChart from "@/components/AppLineChart"





const SingleUserPage = () =>{
    return(
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Diego Altamirano</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-4 flex flex-col xl:flex-row gap-8">

                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">    
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-1"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h2 className="font-bold mb-2">Verified User</h2>
                                    <p className="text-sm text-muted-foreground">This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>

                             <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-green-500/30 border-1 border-green-500/50 p-1"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h2 className="font-bold mb-2">Admin</h2>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features and can manage users.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-1"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h2 className="font-bold mb-2">Awarded</h2>
                                    <p className="text-sm text-muted-foreground">This user has been awarded for their contributions.</p>
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-1"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h2 className="font-bold mb-2">Popular</h2>
                                    <p className="text-sm text-muted-foreground">This user has been popular in the community.</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button>Edit User</Button>
                                </SheetTrigger>
                               <EditUser/>
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile completion</p>
                                <Progress value={73} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username:</span>
                                <span>Diego Altamirano</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email:</span>
                                <span>diegoaltdev@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">Phone:</span>
                                <span>+569 12345678</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">Location:</span>
                                <span>Chile - Viña del mar</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="font-bold">Role:</span>
                                <Badge>Admin</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">Joined on 2025.01.01</p>
                        </div>
                    </div>


                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions"/>
                    </div>
                </div>


                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png"/>
                                <AvatarFallback>DA</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">Diego Altamirano</h1>
                            
                        </div>
                        <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam iste asperiores debitis quae assumenda ipsam reiciendis perspiciatis ipsum fuga, repudiandae optio cupiditate cumque, est, nihil ex voluptates soluta omnis?</p>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Activity</h1>
                        <AppLineChart/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default SingleUserPage