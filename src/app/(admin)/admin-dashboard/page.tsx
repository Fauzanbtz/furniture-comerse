"use client";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, lazy, Suspense, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
const Products = lazy(() => import("@/components/admin/products/main"));
const Orders = lazy(() => import("@/components/admin/order/orders"));
const Users = lazy(() => import("@/components/admin/users/users"));
const Report = lazy(() => import("@/components/admin/report/report"));



export default function Component() {
  const [selectedMenu, setSelectedMenu] = useState("products");
  const renderContent = () => {
    switch (selectedMenu) {
      case "products":
        return <Products />;
      case "orders":
        return <Orders />;
      case "reports":
        return <Report />;
      case "users":
        return <Users />;
      default:
        return <Products />;
    }
  };

  return (

    <div>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-16 sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:hidden">
              <nav className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}>
                  <Package2Icon className="h-6 w-6" />
                  <span className="text-lg font-semibold">Toko Online</span>
                </Link>
                <Link
                  href="#"
                  onClick={() => setSelectedMenu("products")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <PackageIcon className="h-5 w-5" />
                  Produk
                </Link>
                <Link
                  href="#"
                  onClick={() => setSelectedMenu("orders")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <ShoppingCartIcon className="h-5 w-5" />
                  Pesanan
                </Link>
                <Link
                  href="#"
                  onClick={() => setSelectedMenu("users")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <UsersIcon className="h-5 w-5" />
                  Pelanggan
                </Link>
                <Link
                  href="#"
                  onClick={() => setSelectedMenu("reports")}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  <LineChartIcon className="h-5 w-5" />
                  Laporan
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link
            href="#"
            className="md:flex items-center gap-2 hidden sm:flex"
            prefetch={false}>
            <Package2Icon className="h-6 w-6" />
            <span className="text-lg font-semibold">Toko Online</span>
          </Link>
          <nav className="ml-auto hidden sm:flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Produk
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Pesanan
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Pelanggan
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}>
              Laporan
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Image
                  src="/placeholder.svg"
                  width={32}
                  height={32}
                  alt="Avatar"
                  style={{ aspectRatio: "32/32", objectFit: "cover" }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <aside className="border-r bg-muted/40 p-4 sm:p-6 hidden sm:block">
            <nav className="grid gap-4">
              <Link
                onClick={() => setSelectedMenu("products")}
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <PackageIcon className="h-5 w-5" />
                Produk
              </Link>
              <Link
                href="#"
                onClick={() => setSelectedMenu("orders")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <ShoppingCartIcon className="h-5 w-5" />
                Pesanan
              </Link>
              <Link
                href="#"
                onClick={() => setSelectedMenu("users")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <UsersIcon className="h-5 w-5" />
                Pelanggan
              </Link>
              <Link
                href="#"
                onClick={() => setSelectedMenu("reports")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <LineChartIcon className="h-5 w-5" />
                Laporan
              </Link>
            </nav>
          </aside>
          <main className="flex-1 p-4 sm:p-6 bg-gray-300">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" />
            {/* isi konten disini */}
            <Suspense
              fallback={
                <div className="flex flex-col space-y-3">
                  <Skeleton className="h-[125px] w-1/2 rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                </div>
              }>
              {renderContent()}
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}

function LineChartIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Package2Icon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function PackageIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function ShoppingCartIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UsersIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
